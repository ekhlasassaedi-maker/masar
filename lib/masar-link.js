
/* ===== Masar link: diary + medication QR formats (shared by Masar and the Movement Dashboard) =====
   Diary QR (patient -> clinic), binary:  'M','D',1 | diary ID (5 bytes) | n days | per day:
     date (2 bytes, days since 2020-01-01) | 48 states x 3 bits (18 bytes) | 48 "filled in later" bits (6 bytes)
     | n tagged slots, each [slot, bits 1 pain 2 tremor 4 freeze] | n doses, each minutes after midnight (2 bytes)
   Medication QR (clinic -> patient):  'M','M',1 | UTF-8 JSON { did, i, c, m:[[name, generic, [cells]]] }
   Day record used by both apps: { date, s: 48 chars, r: 48 chars, g: { slot: 'ptf' }, d: [{ t:'HH:MM', c:'column' }] }
   s: '.' empty, z asleep, f OFF, o ON, m ON + non-troublesome dyskinesia, t ON + troublesome dyskinesia
   r: '.' empty, L entered at the time, R filled in later */
const MasarLink = (function(){
  const ST = ['.', 'z', 'f', 'o', 'm', 't'], NAME = { z:'sleep', f:'off', o:'on', m:'onm', t:'ont' }, CODE = { sleep:'z', off:'f', on:'o', onm:'m', ont:'t' };
  const TAGS = [['pain', 'p', 1], ['tremor', 't', 2], ['freeze', 'f', 4]];
  const EPOCH = Date.UTC(2020, 0, 1);
  const dnum = ds => Math.round((Date.UTC(+ds.slice(0, 4), +ds.slice(5, 7) - 1, +ds.slice(8, 10)) - EPOCH) / 864e5);
  const dstr = n => { const d = new Date(EPOCH + n * 864e5); return d.getUTCFullYear() + '-' + String(d.getUTCMonth() + 1).padStart(2, '0') + '-' + String(d.getUTCDate()).padStart(2, '0'); };
  const hm = m => String(Math.floor(m / 60)).padStart(2, '0') + ':' + String(m % 60).padStart(2, '0');
  const mins = s => { const x = /^(\d{1,2}):(\d{2})/.exec(s || ''); return x ? +x[1] * 60 + +x[2] : null; };

  /* Masar 'movement-diary' export -> day records */
  function fromExport(x){
    if (!x || x.format !== 'movement-diary' || !Array.isArray(x.days)) throw new Error('This is not a Masar diary file.');
    const id = String(x.id || '').replace(/\D/g, '');
    if (!/^\d{6,12}$/.test(id)) throw new Error('The diary file has no valid diary ID.');
    const days = x.days.filter(d => /^\d{4}-\d\d-\d\d$/.test(d.date || '')).map(d => {
      let s = '', r = ''; const g = {};
      for (let i = 0; i < 48; i++) {
        const st = (d.slots || [])[i]; s += CODE[st] || '.';
        const src = (d.source || [])[i]; r += !CODE[st] ? '.' : src === 'recall' ? 'R' : 'L';
        const tg = (d.tags || [])[i]; if (Array.isArray(tg) && tg.length) { const k = TAGS.filter(t => tg.indexOf(t[0]) >= 0).map(t => t[1]).join(''); if (k) g[i] = k; }
      }
      return { date: d.date, s, r, g, d: (d.doses_taken || []).filter(e => mins(e.time) != null).map(e => ({ t: hm(mins(e.time)), c: String(e.column || '') })) };
    });
    return { did: id, days, meds: x.medication_table || null };
  }
  /* day records -> Masar 'movement-diary' export (dashboard export uses the same format) */
  function toExport(did, days, extra){
    return Object.assign({ format: 'movement-diary', version: 1, id: did, exported: new Date().toISOString(), resolution_min: 30,
      states: { sleep: 'Asleep', off: 'OFF', on: 'ON without dyskinesia', onm: 'ON with non-troublesome dyskinesia', ont: 'ON with troublesome dyskinesia' },
      days: days.map(d => ({ date: d.date, slots: d.s.split('').map(c => NAME[c] || null), source: d.r.split('').map(c => c === 'L' ? 'live' : c === 'R' ? 'recall' : null),
        tags: d.s.split('').map((c, i) => d.g && d.g[i] ? TAGS.filter(t => d.g[i].indexOf(t[1]) >= 0).map(t => t[0]) : null),
        doses_taken: (d.d || []).map(e => ({ time: e.t, column: e.c || '' })) })) }, extra || {});
  }

  function encDiary(did, days){
    const out = [77, 68, 1]; let id = Number(String(did).replace(/\D/g, '')) || 0;
    const idb = []; for (let i = 0; i < 5; i++) { idb.unshift(id % 256); id = Math.floor(id / 256); }
    out.push(...idb, Math.min(days.length, 255));
    days.slice(-255).forEach(d => {
      const n = dnum(d.date); out.push(n >> 8 & 255, n & 255);
      let acc = 0, bits = 0; const st = [];
      for (let i = 0; i < 48; i++) { acc = acc << 3 | Math.max(0, ST.indexOf(d.s[i])); bits += 3; while (bits >= 8) { bits -= 8; st.push(acc >> bits & 255); } }
      out.push(...st);
      for (let b = 0; b < 6; b++) { let v = 0; for (let k = 0; k < 8; k++) v = v << 1 | (d.r[b * 8 + k] === 'R' ? 1 : 0); out.push(v); }
      const tg = Object.keys(d.g || {}).map(Number).filter(i => i >= 0 && i < 48).slice(0, 48);
      out.push(tg.length); tg.forEach(i => out.push(i, TAGS.reduce((a, t) => a | (d.g[i].indexOf(t[1]) >= 0 ? t[2] : 0), 0)));
      const ds = (d.d || []).map(e => mins(e.t)).filter(m => m != null).slice(0, 40);
      out.push(ds.length); ds.forEach(m => out.push(m >> 8 & 255, m & 255));
    });
    return Uint8Array.from(out);
  }
  function decDiary(b){
    if (!(b[0] === 77 && b[1] === 68 && b[2] === 1)) throw new Error('This code is not a Masar diary.');
    let p = 3, id = 0; for (let i = 0; i < 5; i++) id = id * 256 + b[p++];
    const n = b[p++], days = [];
    for (let k = 0; k < n; k++) {
      if (p + 26 > b.length) throw new Error('The code is incomplete.');
      const date = dstr(b[p] << 8 | b[p + 1]); p += 2;
      let s = '', acc = 0, bits = 0, q = p;
      for (let i = 0; i < 48; i++) { while (bits < 3) { acc = acc << 8 | b[q++]; bits += 8; } bits -= 3; s += ST[acc >> bits & 7] || '.'; acc &= (1 << bits) - 1; }
      p += 18; let r = '';
      for (let i = 0; i < 48; i++) r += s[i] === '.' ? '.' : (b[p + (i >> 3)] >> (7 - (i & 7)) & 1) ? 'R' : 'L';
      p += 6; const g = {}, nt = b[p++];
      for (let i = 0; i < nt; i++) { const ix = b[p++], v = b[p++]; const k2 = TAGS.filter(t => v & t[2]).map(t => t[1]).join(''); if (k2 && ix < 48) g[ix] = k2; }
      const nd = b[p++], d = [];
      for (let i = 0; i < nd; i++) { d.push({ t: hm(b[p] << 8 | b[p + 1]), c: '' }); p += 2; }
      days.push({ date, s, r, g, d });
    }
    return { did: String(id).padStart(10, '0'), days };
  }
  const utf8 = s => new TextEncoder().encode(s), unutf8 = b => new TextDecoder().decode(b);
  function encMeds(o){ return Uint8Array.from([77, 77, 1, ...utf8(JSON.stringify({ did: o.did || '', i: o.issued || '', c: o.columns || [], m: (o.meds || []).map(x => [x.name || '', x.generic || '', x.cells || []]) }))]); }
  function decMeds(b){
    if (!(b[0] === 77 && b[1] === 77 && b[2] === 1)) throw new Error('This code is not a medication table from the clinic.');
    const j = JSON.parse(unutf8(b.slice(3)));
    return { did: String(j.did || ''), table: { format: 'movement-meds', version: 1, issued: j.i || '', source: 'Movement Dashboard (QR)', columns: (j.c || []).map(String), meds: (j.m || []).map(x => ({ name: String(x[0] || ''), generic: String(x[1] || ''), cells: (x[2] || []).map(String) })) } };
  }
  const kind = b => b && b[0] === 77 && b[2] === 1 ? (b[1] === 68 ? 'diary' : b[1] === 77 ? 'meds' : '') : '';

  /* QR drawing (qrcode-generator, MIT) and reading (jsQR, Apache-2.0) */
  function qrSVG(bytes, label){
    qrcode.stringToBytes = s => Array.from(s, ch => ch.charCodeAt(0) & 255);
    const q = qrcode(0, 'L'); q.addData(String.fromCharCode.apply(null, Array.from(bytes)), 'Byte'); q.make();
    const n = q.getModuleCount(), m = 4; let d = '';
    for (let y = 0; y < n; y++) for (let x = 0; x < n; x++) if (q.isDark(y, x)) d += 'M' + (x + m) + ' ' + (y + m) + 'h1v1h-1z';
    return '<svg viewBox="0 0 ' + (n + 2 * m) + ' ' + (n + 2 * m) + '" role="img" aria-label="' + (label || 'QR code') + '" shape-rendering="crispEdges" style="display:block;width:100%;height:auto;background:#fff"><rect width="100%" height="100%" fill="#fff"/><path d="' + d + '" fill="#000"/></svg>';
  }
  function readPixels(data, w, h){ const r = jsQR(data, w, h, { inversionAttempts: 'attemptBoth' }); return r && r.binaryData && r.binaryData.length ? Uint8Array.from(r.binaryData) : null; }
  async function scanImage(file){
    const url = URL.createObjectURL(file);
    try {
      const img = await new Promise((res, rej) => { const i = new Image(); i.onload = () => res(i); i.onerror = rej; i.src = url; });
      for (const max of [1400, 900, 2000]) {
        const k = Math.min(1, max / Math.max(img.naturalWidth, img.naturalHeight)), w = Math.round(img.naturalWidth * k), h = Math.round(img.naturalHeight * k);
        const c = document.createElement('canvas'); c.width = w; c.height = h; const g = c.getContext('2d'); g.drawImage(img, 0, 0, w, h);
        const b = readPixels(g.getImageData(0, 0, w, h).data, w, h); if (b) return b;
      }
      return null;
    } finally { URL.revokeObjectURL(url); }
  }
  /* live camera scan into a <video>; resolves bytes, or rejects (no camera / permission) */
  async function scanCamera(video, signal){
    const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' }, audio: false });
    video.srcObject = stream; video.setAttribute('playsinline', ''); video.muted = true; await video.play();
    const c = document.createElement('canvas'), g = c.getContext('2d', { willReadFrequently: true });
    try {
      while (!(signal && signal.aborted)) {
        await new Promise(r => setTimeout(r, 180));
        const w = video.videoWidth, h = video.videoHeight; if (!w) continue;
        const k = Math.min(1, 960 / Math.max(w, h)); c.width = Math.round(w * k); c.height = Math.round(h * k);
        g.drawImage(video, 0, 0, c.width, c.height);
        const b = readPixels(g.getImageData(0, 0, c.width, c.height).data, c.width, c.height); if (b) return b;
      }
      return null;
    } finally { stream.getTracks().forEach(t => t.stop()); video.srcObject = null; }
  }
  return { fromExport, toExport, encDiary, decDiary, encMeds, decMeds, kind, qrSVG, scanImage, scanCamera, NAME, CODE, TAGS };
})();

