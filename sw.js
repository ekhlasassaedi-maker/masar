/* Masar service worker: keeps the app working offline and shows reminder notifications.
   It caches only the app's own files. Diary data is never sent anywhere; it stays in IndexedDB on the phone.
   To publish an update: change VERSION below (and APP_VERSION in app.js), then upload all files. */
const VERSION = 'masar-1.0.1';
const FILES = ['./', 'index.html', 'app.js', 'config.js', 'styles.css', 'manifest.webmanifest',
  'lib/qrcode.js', 'lib/jsqr.js', 'lib/masar-link.js', 'fonts/readex-pro.woff', 'fonts/comfortaa-masar.woff',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/maskable-512.png', 'icons/apple-touch-icon.png', 'icons/favicon-32.png', 'icons/badge-96.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES.map(f => new Request(f, { cache: 'reload' })))));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('masar-') && k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('message', e => { if (e.data === 'skipWaiting') self.skipWaiting(); });
self.addEventListener('fetch', e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== location.origin) return;
  if (req.mode === 'navigate') {
    e.respondWith(caches.match('index.html').then(r => r || fetch(req)));
    return;
  }
  /* config.js: network first, so a changed reminder address reaches phones without a new version */
  if (url.pathname.endsWith('/config.js')) {
    e.respondWith(fetch(req, { cache: 'no-store' }).then(r => { const c = r.clone(); caches.open(VERSION).then(x => x.put('config.js', c)); return r; }).catch(() => caches.match('config.js')));
    return;
  }
  e.respondWith(caches.match(req, { ignoreSearch: true }).then(r => r || fetch(req)));
});

const DB_NAME = 'masar';
/* ---- reminders: the push carries no data; the text comes from the 'notif' record on this phone ---- */
function readNotif(){
  return new Promise(res => {
    const r = indexedDB.open(DB_NAME, 1);
    r.onupgradeneeded = () => r.result.createObjectStore('kv');
    r.onerror = () => res(null);
    r.onsuccess = () => { try { const q = r.result.transaction('kv').objectStore('kv').get('notif'); q.onsuccess = () => res(q.result || null); q.onerror = () => res(null); } catch (e) { res(null); } };
  });
}
async function showReminder(){
  const p = await readNotif(), now = new Date(), nowM = now.getHours() * 60 + now.getMinutes(), ar = !p || p.lang !== 'en';
  const near = t => Math.abs(((nowM - t) % 1440 + 2160) % 1440 - 720) <= 10;   /* within 10 min, across midnight */
  const dose = p && (p.doses || []).find(d => near(d.t));
  const chk = p && (p.checks || []).some(ms => Math.abs(ms - now.getTime()) <= 10 * 60000);
  let body, tag = 'masar';
  if (dose) { body = (ar ? 'حان وقت جرعة ' + dose.label + ': ' : 'Time for your ' + dose.label + ' dose: ') + dose.txt; tag = 'dose-' + dose.t; if (chk) body += ar ? '. ثم سجّل كيف تشعر.' : '. Then record how you feel.'; }
  else if (chk) { body = ar ? 'كيف حالك الآن؟ اضغط لتسجيل حالتك.' : 'How are you now? Tap to record how you feel.'; tag = 'checkin'; }
  else body = ar ? 'هذا إشعار تجريبي من مسار. الإشعارات تعمل.' : 'This is a test notification from Masar. Notifications are working.';
  return self.registration.showNotification(ar ? 'مسار' : 'Masar', { body, tag, icon: 'icons/icon-192.png', badge: 'icons/badge-96.png', lang: ar ? 'ar' : 'en', dir: ar ? 'rtl' : 'ltr', data: { url: './' } });
}
self.addEventListener('push', e => { e.waitUntil(showReminder()); });
self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
    for (const c of list) if ('focus' in c) return c.focus();
    return self.clients.openWindow('./');
  }));
});
