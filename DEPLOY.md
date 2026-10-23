# Masar · مسار: how to publish and install (version 1.0.0)

Masar is a home-screen web app (PWA). It installs from a web link on iPhone and Android, with no App Store or Google Play.
All diary data stays on the patient's phone. The web host only serves the app's files.

## Files
| File | Purpose |
|---|---|
| index.html | The page |
| app.js | The app (diary, storage, encryption, install help) |
| styles.css | Look and layout (system fonts, no outside requests) |
| manifest.webmanifest | Name, icon and full-screen settings for "Add to Home Screen" |
| sw.js | Service worker: makes Masar open offline and handles updates |
| icons/ | App icons (Android, iPhone, maskable, favicon) |

## 1. Host it
- Upload the whole folder, unchanged, to any static web host with **HTTPS**: a hospital or university web server, GitHub Pages, Netlify, Cloudflare Pages, etc. Installing and offline mode do not work without HTTPS.
- **Keep the same web address for good.** Each address has its own storage on the phone. If the address changes, patients start with an empty diary (they can restore a backup file).
- No database, server code or login is needed.

Recommended server headers (if your host lets you set them):
```
Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; connect-src 'self'; manifest-src 'self'; worker-src 'self'; object-src 'none'; base-uri 'none'; form-action 'none'; frame-ancestors 'none'
Referrer-Policy: no-referrer
X-Content-Type-Options: nosniff
Permissions-Policy: camera=(), microphone=(), geolocation=()
Cache-Control: no-cache          (for sw.js and index.html only)
```

## 2. Install on a phone
**iPhone (Safari only):** open the link in Safari → Share button → "Add to Home Screen" → Add. Open Masar from the home screen.
Data entered in a Safari tab does not move into the home-screen app, so install first.

**Android (Chrome):** open the link → tap "Install Masar" in the app, or Chrome menu ⋮ → "Install app" / "Add to Home screen".

Masar shows these steps itself on first open, in Arabic and English.

## 3. How the data is kept
- **Where:** one record in IndexedDB on the phone, in Masar's own storage for this web address.
- **Encryption:** AES-GCM 256. The key is created on the phone and is non-extractable. This works alongside the phone's own encryption, which protects data while the phone is locked. The key sits in the same storage as the data, so the main protection is still the phone's lock screen.
- **Protection from automatic clearing:** Masar asks the phone for persistent storage (`navigator.storage.persist()`). iPhone and Chrome decide this on their own, most readily for apps opened from the home screen. The status shows under Me & sharing → "Your data on this phone".
- **Safe writes:** every change is saved in one all-or-nothing database transaction, and is saved straight away when the app goes to the background.
- **Backups:** Masar reminds the patient to save a backup file 7 days after starting and then every 14 days. The file is plain JSON, so it should be kept privately. It holds the nickname, diary ID, diary, medicine table and pill photos, and restores on the same or a new phone.
- **What deletes the data:** removing Masar from the home screen (iPhone), clearing the browser's site data, or "Delete all my data" (which also deletes the encryption key).
- **No outside connections:** no analytics, no fonts or scripts from other sites. The security policy blocks network requests to anything except Masar's own files.

## 4. Publishing an update
1. Change `APP_VERSION` in app.js and `VERSION` in sw.js (for example 1.0.1 / masar-1.0.1).
2. Upload all files.
3. Open apps show "A new version of Masar is ready → Update now". Diary data is kept.

## 5. Known limits
- Reminders and check-ins show only while Masar is open. Notifications while it is closed would need a push server (iPhone 16.4+, home-screen install) or an Android app build.
- Backup files from the prototype restore into Masar, and clinic files use the same `movement-diary` v1 format (with an added `app` field).

## 6. Before patient use
SFDA check on medical device software status, review under the Saudi Personal Data Protection Law, ethics approval if used in research, and a small pilot on older phones.
