/* Demo chat DỌC, kiểu quay màn hình điện thoại (người dùng chốt 16/11/2026, mẫu: video Canva người dùng gửi).
   Mở bằng nút "Demo chat" cạnh tên ngành ở góc trên phải, phím D, hoặc "Vào thẳng chat" ở menu. Nút "Về slide" (Esc) thoát bất cứ lúc nào.
   Cảnh 1: bài đăng Facebook → khách bình luận → trang trả lời. Cảnh 2: Messenger của trang, chạy các bước trong KICH_BAN.steps.
   Mỗi lần bấm → hiện 1 tin như demo cũ (mốc thời gian đi kèm tin kế tiếp). Không có chú thích: bỏ cột tính năng, dòng meta,
   nhãn hệ thống (sep 'silent'), màn hình hệ thống (screen). Nhạc nền nhẹ tự tạo bằng Web Audio (không cần file nhạc).
   Dữ liệu riêng của ngành: KICH_BAN.deck.demoDoc = { khach (tên hoặc [tên tình huống 1, 2]), sanPham, post: { tieuDe, dong[4], anh[4 khóa ảnh] },
   binhLuan, traLoi, ngay: 'dd/mm/yyyy', gio: 'hh:mm' }. Thiếu khóa nào thì tự lấy mặc định. */
(function () {
  'use strict';
  const esc = v => String(v == null ? '' : v).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const md = v => esc(v).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/\n/g, '<br>');
  const loc = u => (u && (window.OFFLINE_ASSETS || {})[u]) || u;
  const f2 = n => String(n).padStart(2, '0');
  const THU = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];

  const SVG = (d, vb = '0 0 24 24', extra = '') => `<svg viewBox="${vb}" ${extra}>${d}</svg>`;
  const IC = {
    back: SVG('<path d="M15 4l-8 8 8 8" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>'),
    phone: SVG('<path fill="currentColor" d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z"/>'),
    video: SVG('<rect x="2" y="6" width="13" height="12" rx="3" fill="currentColor"/><path d="M16.5 10.2L22 7v10l-5.5-3.2z" fill="currentColor"/>'),
    info: SVG('<circle cx="12" cy="12" r="10" fill="currentColor"/><rect x="11" y="10.5" width="2" height="7" rx="1" fill="#fff"/><circle cx="12" cy="7.5" r="1.3" fill="#fff"/>'),
    plus: SVG('<circle cx="12" cy="12" r="10" fill="currentColor"/><path d="M12 7v10M7 12h10" stroke="#fff" stroke-width="2.4" stroke-linecap="round"/>'),
    camera: SVG('<path fill="currentColor" d="M9 4.5h6l1.5 2H20a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.5a2 2 0 0 1 2-2h3.5z"/><circle cx="12" cy="13" r="3.6" fill="#fff"/>'),
    image: SVG('<rect x="2.5" y="3.5" width="19" height="17" rx="3" fill="currentColor"/><circle cx="8.5" cy="9" r="2" fill="#fff"/><path d="M4.5 18l5-5.5 3.5 3.5 2.5-2.5 4 4.5z" fill="#fff"/>'),
    mic: SVG('<rect x="8.5" y="2.5" width="7" height="12" rx="3.5" fill="currentColor"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>'),
    like: SVG('<path fill="currentColor" d="M2 10h4v11H2zM8 21h9.5a2.5 2.5 0 0 0 2.4-1.8l1.9-6.6A2 2 0 0 0 19.9 10H14l1-4.6A2 2 0 0 0 13.1 3L8 9.7z"/>'),
    signal: SVG('<rect x="1" y="14" width="3.6" height="6" rx="1" fill="currentColor"/><rect x="6.4" y="10.5" width="3.6" height="9.5" rx="1" fill="currentColor"/><rect x="11.8" y="7" width="3.6" height="13" rx="1" fill="currentColor"/><rect x="17.2" y="3.5" width="3.6" height="16.5" rx="1" fill="currentColor"/>'),
    wifi: SVG('<path fill="currentColor" d="M12 20.5l3.2-3.6a4.6 4.6 0 0 0-6.4 0zM5.6 13.6l2 2.2a6.6 6.6 0 0 1 8.8 0l2-2.2a9.6 9.6 0 0 0-12.8 0zM2.3 10l2 2.2a11.6 11.6 0 0 1 15.4 0l2-2.2a14.6 14.6 0 0 0-19.4 0z"/>'),
    battery: SVG('<rect x="1" y="6" width="20" height="12" rx="3.5" fill="none" stroke="currentColor" stroke-width="1.6" opacity=".45"/><rect x="3" y="8" width="15" height="8" rx="2" fill="currentColor"/><rect x="22" y="10" width="1.8" height="4" rx=".8" fill="currentColor" opacity=".45"/>', '0 0 25 24'),
    person: SVG('<circle cx="20" cy="20" r="20" fill="#E4E6EB"/><circle cx="20" cy="15.5" r="7" fill="#fff"/><path d="M6.5 34a13.5 13.5 0 0 1 27 0z" fill="#fff"/>', '0 0 40 40'),
    globe: SVG('<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" fill="none" stroke="currentColor" stroke-width="1.6"/>'),
    check: SVG('<path d="M4.5 12.5l4.5 4.5L19.5 6.5" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>'),
  };

  /* ---------- Nhạc nền (Web Audio): pop sáng 116 BPM, vòng C · G · Am · F ----------
     Trống nhẹ (kick, clap, hi-hat) + bass móc đơn + giai điệu pluck lặp 2 ô nhịp + pad. Ô nhịp đầu chỉ có pad, pluck, hi-hat;
     ô thứ 8 mỗi vòng có đoạn nối trống. Score dùng chung cho demo trực tiếp (Music) và bản quay MP4 (quay-demo-doc.py). */
  const Score = (() => {
    const BPM = 116, BEAT = 60 / BPM, BAR = BEAT * 4, E = BEAT / 2;
    const CH = [[60, 64, 67], [59, 62, 67], [57, 60, 64], [57, 60, 65]];   // C · G/B · Am · F
    const ROOT = [48, 43, 45, 41];
    const BASS = [0, 0, 12, 0, 0, 12, 0, 7];                                 // bass mỗi móc đơn: gốc, quãng tám, quãng năm
    const HOOK = [[2, null, 1, 2, 3, null, 2, 1], [0, 1, 2, null, 4, 3, 2, null]];   // chỉ số nốt trong hợp âm (lên quãng tám), null = nghỉ
    const hz = m => 440 * Math.pow(2, (m - 69) / 12);
    function setup(ac, dest) {
      const x = { ac, mel: ac.createGain(), pad: ac.createGain(), low: ac.createGain(), drum: ac.createGain() };
      const lp = ac.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 5200;
      const lpPad = ac.createBiquadFilter(); lpPad.type = 'lowpass'; lpPad.frequency.value = 1500;
      const dly = ac.createDelay(1); dly.delayTime.value = BEAT * 0.75;
      const fb = ac.createGain(); fb.gain.value = 0.25;
      const wet = ac.createGain(); wet.gain.value = 0.3;
      x.mel.connect(lp); lp.connect(dest); lp.connect(dly); dly.connect(fb); fb.connect(dly); dly.connect(wet); wet.connect(dest);
      x.pad.connect(lpPad); lpPad.connect(dest); x.low.connect(dest); x.drum.connect(dest);
      x.noise = ac.createBuffer(1, ac.sampleRate, ac.sampleRate);
      const d = x.noise.getChannelData(0); for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
      return x;
    }
    function env(g, t, vol, att, dur) {
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + att); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    }
    function tone(x, out, m, t, dur, type, vol, att) {
      const o = x.ac.createOscillator(), g = x.ac.createGain();
      o.type = type; o.frequency.value = hz(m); env(g, t, vol, att, dur);
      o.connect(g); g.connect(out); o.start(t); o.stop(t + dur + 0.05);
    }
    function kick(x, t, vol) {
      const o = x.ac.createOscillator(), g = x.ac.createGain();
      o.frequency.setValueAtTime(150, t); o.frequency.exponentialRampToValueAtTime(45, t + 0.12);
      env(g, t, vol, 0.004, 0.28); o.connect(g); g.connect(x.drum); o.start(t); o.stop(t + 0.32);
    }
    function hit(x, t, type, f, vol, dur) {
      const s = x.ac.createBufferSource(), b = x.ac.createBiquadFilter(), g = x.ac.createGain();
      s.buffer = x.noise; b.type = type; b.frequency.value = f; b.Q.value = 0.8;
      env(g, t, vol, 0.002, dur); s.connect(b); b.connect(g); g.connect(x.drum);
      s.start(t, Math.random() * 0.5, dur + 0.05);
    }
    function bar(x, t, n) {
      const k = n % 4, ch = CH[k], full = n >= 1, fill = n % 8 === 7;
      ch.forEach(m => tone(x, x.pad, m, t, BAR + 0.3, 'sawtooth', 0.016, 0.25));
      const lead = [ch[0] + 12, ch[1] + 12, ch[2] + 12, ch[0] + 24, ch[1] + 24];
      HOOK[n % 2].forEach((i, j) => {
        if (i == null) return;
        tone(x, x.mel, lead[i], t + j * E, 0.38, 'triangle', 0.075, 0.006);
        tone(x, x.mel, lead[i] + 12, t + j * E, 0.18, 'sine', 0.02, 0.004);
      });
      for (let j = 0; j < 8; j++) hit(x, t + j * E, 'highpass', 7500, j % 2 ? 0.06 : 0.035, 0.045);
      if (!full) return;
      BASS.forEach((s, j) => tone(x, x.low, ROOT[k] + s, t + j * E, E * 0.9, 'triangle', 0.11, 0.008));
      for (let b = 0; b < 4; b++) {
        if (!(fill && b === 3)) kick(x, t + b * BEAT, 0.42);
        if (b % 2) hit(x, t + b * BEAT, 'bandpass', 1700, 0.2, 0.17);
      }
      if (fill) for (let j = 0; j < 4; j++) hit(x, t + 3 * BEAT + j * BEAT / 4, 'bandpass', 1900, 0.07 + j * 0.04, 0.1);
    }
    return { BAR, setup, bar };
  })();
  const Music = (() => {
    let ac = null, master = null, x = null, timer = null, nextBar = 0, bar = 0, on = false;
    function schedule() {
      while (nextBar < ac.currentTime + 1.2) { Score.bar(x, nextBar, bar++); nextBar += Score.BAR; }
    }
    function start() {
      try {
        if (!ac) {
          ac = new (window.AudioContext || window.webkitAudioContext)();
          master = ac.createGain(); master.gain.value = 0; master.connect(ac.destination);
          x = Score.setup(ac, master);
        }
        if (ac.state === 'suspended') ac.resume();
        if (on) return;
        on = true; nextBar = ac.currentTime + 0.1; bar = 0;
        master.gain.cancelScheduledValues(ac.currentTime);
        master.gain.setValueAtTime(master.gain.value, ac.currentTime);
        master.gain.linearRampToValueAtTime(0.5, ac.currentTime + 1.2);
        schedule(); timer = setInterval(schedule, 250);
      } catch (_) {}
    }
    function stop() {
      if (!ac || !on) return;
      on = false; clearInterval(timer);
      master.gain.cancelScheduledValues(ac.currentTime);
      master.gain.setValueAtTime(master.gain.value, ac.currentTime);
      master.gain.linearRampToValueAtTime(0, ac.currentTime + 0.6);
    }
    return { start, stop, resume: () => { try { if (ac && ac.state === 'suspended') ac.resume(); } catch (_) {} }, get on() { return on; } };
  })();
  const MKEY = 'preny-doc-nhac';
  let musicWanted = true;
  try { musicWanted = localStorage.getItem(MKEY) !== '0'; } catch (_) {}

  /* ---------- Thời gian trong cuộc chat ---------- */
  function sepInfo(text) {
    const t = String(text).replace(/—/g, '').trim();
    // Mốc ngày cụ thể đọc trước: "— Ngày 7/12 · sau chuyến đi —" → nhảy tới đúng ngày đó, chip là phần sau dấu "·".
    // Dùng cho tin sau một sự kiện ở tương lai (chuyến đi, trả phòng, buổi hẹn) để demo không ghi ngày trước sự kiện.
    let m = t.match(/Ngày\s*(\d{1,2})\/(\d{1,2})/i);
    if (m) { const c = t.split('·').slice(1).join('·').trim(); return { day: +m[1], month: +m[2], chip: c || null }; }
    m = t.match(/(\d+)\s*(phút|tiếng|giờ|ngày|tuần|tháng)/i);
    if (m) {
      const n = +m[1], u = m[2].toLowerCase();
      const min = u === 'phút' ? n : (u === 'tiếng' || u === 'giờ') ? n * 60 : u === 'ngày' ? n * 1440 : u === 'tuần' ? n * 10080 : n * 43200;
      return { add: min, chip: t };
    }
    if (/sau/i.test(t)) return { add: 2 * 1440, chip: t };
    return null;
  }
  function applySep(d, inf) {
    const x = new Date(d);
    if (inf.day) { x.setMonth(inf.month - 1, inf.day); if (x < d) x.setFullYear(x.getFullYear() + 1); x.setHours(9, 30); return x; }
    x.setMinutes(x.getMinutes() + inf.add);
    if (inf.add >= 1440) x.setHours(9 + (inf.add / 1440) % 3, 10 + (inf.add / 1440 * 13) % 45);
    return x;
  }
  const clock = d => `${f2(d.getHours())}:${f2(d.getMinutes())}`;
  const stamp = d => `${clock(d)}, ${THU[d.getDay()]} ${f2(d.getDate())}/${f2(d.getMonth() + 1)}/${d.getFullYear()}`;

  /* ---------- Dựng ---------- */
  let root = null, K = null, beats = [], n = 0, timers = [], onExit = null, names = [], scr = null, dd = {};
  let OPEN = 3, QC = -1, CAPI = -1, KET = -1;   // chỉ số beat: mở Messenger, quảng cáo, màn hình Meta CAPI, màn kết
  const AI_SIDE = new Set(['ai', 'card', 'catalog', 'aiImgs', 'aiImg']);
  const plainName = s => String(s || '').replace(/^(Anh|Chị|Em|Cô|Chú|Bác)\s+/i, '').split('·')[0].trim();

  function build() {
    const D = K.deck || {}, shop = K.shop || { name: '', initials: '' };
    dd = D.demoDoc || {};
    const img = k => loc((K.images || {})[k] || k);
    const cb = D.chatbot || {};
    names = [].concat(dd.khach || plainName((cb.don || cb.lead || {}).ten) || 'Khách hàng');
    const sanPham = dd.sanPham || ((cb.chat || [])[0] || {}).ref && cb.chat[0].ref.ten || shop.name;
    const post = dd.post || {};
    const anh = (post.anh || Object.keys(K.images || {}).slice(0, 4)).slice(0, 4);
    const [dd0, mm0, yy0] = String(dd.ngay || '16/11/2026').split('/').map(Number);
    const [hh0, mi0] = String(dd.gio || '09:00').split(':').map(Number);
    let time = new Date(yy0, mm0 - 1, dd0, hh0, mi0);

    // Các lần bấm: bài đăng → (khách bình luận → trang trả lời) × số bình luận → [quảng cáo → bấm Gửi tin nhắn] → mở Messenger
    // → mỗi bước trong steps 1 lần bấm → [màn hình Meta CAPI] → [màn kết]. Phần trong [] chỉ có khi demoDoc khai báo.
    const cmts = Array.isArray(dd.binhLuan) ? dd.binhLuan : [{ ten: names[0], noiDung: dd.binhLuan || 'Tư vấn', traLoi: dd.traLoi }];
    beats = [{ k: 'start', t: new Date(time) }];
    cmts.forEach((c, ci) => { beats.push({ k: 'cmt', ci, t: new Date(time) }); beats.push({ k: 'rep', ci, t: new Date(time) }); });
    QC = -1; CAPI = -1; KET = -1;
    if (dd.quangCao) { QC = beats.length; beats.push({ k: 'qc', t: new Date(time) }, { k: 'bamqc', t: new Date(time) }); }
    OPEN = beats.length;
    beats.push({ k: 'open', conv: 0, pre: [], t: new Date(time) });
    let conv = 0, pend = [], firstTime = true, firstBeatOfConv = true;
    const addPre = it => { if (firstBeatOfConv && conv === 0) beats[OPEN].pre.push(it); else pend.push(it); };
    for (const st of K.steps || []) {
      if (st.feature || st.intro || st.end || st.screen) continue;
      if (st.sep) {
        if (st.style === 'silent') continue;
        if (st.style === 'time') {
          if (!firstTime) { conv++; firstBeatOfConv = true; time = new Date(time.getTime() + 3 * 86400000); time.setHours(10, 5); }
          firstTime = false;
          addPre({ k: 'stamp', t: new Date(time) }); addPre({ k: 'ad', conv });
          continue;
        }
        const inf = sepInfo(st.sep); if (!inf) continue;
        time = applySep(time, inf);
        addPre({ k: 'stamp', t: new Date(time), chip: inf.chip });
        continue;
      }
      const k = st.kh ? 'kh' : st.ai ? 'ai' : st.img ? 'img' : st.aiImgs ? 'aiImgs' : st.aiImg ? 'aiImg' : st.catalog ? 'catalog' : st.card ? 'card' : st.seen ? 'seen' : null;
      if (!k) continue;
      if (firstTime) { firstTime = false; addPre({ k: 'stamp', t: new Date(time) }); addPre({ k: 'ad', conv }); }
      time = new Date(time.getTime() + 60000 * (k === 'kh' ? 1 : 0.5));
      beats.push({ k, st, conv, pre: pend, t: new Date(time) }); pend = []; firstBeatOfConv = false;
    }
    if (dd.capi) { CAPI = beats.length; beats.push({ k: 'capi', conv, pre: [], t: new Date(time) }); }
    if (dd.ket) { KET = beats.length; beats.push({ k: 'ket', conv, pre: [], t: new Date(time) }); }

    // ----- Facebook -----
    const pav = `<span class="dd-pav">${esc(shop.initials)}</span>`;
    const fb = `<div class="dd-fb">`
      + `<div class="dd-fbh"><b>facebook</b><i></i><i></i><i></i></div>`
      + `<div class="dd-post"><div class="dd-ph">${pav}<div><b>${esc(String(shop.name).toUpperCase())}</b><small>2 giờ · ${IC.globe}</small></div></div>`
      + `<div class="dd-pt">${esc(post.tieuDe || sanPham.toUpperCase())}</div>`
      + (post.dong ? `<div class="dd-pl">${post.dong.map(x => `<span>${IC.check}${esc(x)}</span>`).join('')}</div>` : '')
      + `<div class="dd-pimgs">${anh.map(k => `<img src="${esc(img(k))}" alt="">`).join('')}</div>`
      + `<div class="dd-pact"><span>👍 Thích</span><span>💬 Bình luận</span><span>↗ Chia sẻ</span></div></div>`
      + `<div class="dd-cmts">`
      + cmts.map((c, ci) => `<div class="dd-cmt" data-fb="${1 + 2 * ci}"><span class="dd-cav">${IC.person}</span><div><div class="dd-cbx"><b>${esc(c.ten || names[0])}</b><span>${esc(c.noiDung || 'Tư vấn')}</span></div>`
        + `<div class="dd-cmeta"><span>Vừa xong</span><b>Thích</b><b>Phản hồi</b></div></div></div>`
        + `<div class="dd-cmt rep" data-fb="${2 + 2 * ci}">${pav}<div><div class="dd-cbx"><b>${esc(String(shop.name).toUpperCase())} <em>Tác giả</em></b><span>${esc(c.traLoi || 'Dạ, mình check inbox giúp em nha!')}</span></div>`
        + `<div class="dd-cmeta"><span>Vừa xong</span><b>Thích</b><b>Phản hồi</b></div></div></div>`).join('')
      + `</div></div>`;
    // ----- Quảng cáo Facebook có nút Gửi tin nhắn (demoDoc.quangCao) -----
    const q = dd.quangCao;
    const qcHTML = q ? `<div class="dd-qc"><div class="dd-fbh"><b>facebook</b><i></i><i></i><i></i></div>`
      + `<div class="dd-post"><div class="dd-ph">${pav}<div><b>${esc(String(shop.name).toUpperCase())}</b><small>Được tài trợ · ${IC.globe}</small></div></div>`
      + `<div class="dd-pt">${esc(q.tieuDe)}</div>${q.mo ? `<div class="dd-qmo">${esc(q.mo)}</div>` : ''}`
      + `<img class="dd-qimg" src="${esc(img(q.anh))}" alt="">`
      + `<div class="dd-qcta"><div><small>${esc(q.nhan || 'MESSENGER')}</small><b>${esc(q.dong || sanPham)}</b></div><span class="dd-qbtn">${IC.send2 || ''}${esc(q.nut || 'Gửi tin nhắn')}<i class="dd-tap"></i></span></div>`
      + `<div class="dd-pact"><span>👍 Thích</span><span>💬 Bình luận</span><span>↗ Chia sẻ</span></div></div></div>` : '';

    // ----- Messenger -----
    const convs = [];
    const row = (b, side, inner, cls = '') => {
      convs[b.conv] = convs[b.conv] || '';
      convs[b.conv] += `<div class="dd-row ${side}${cls ? ' ' + cls : ''}" data-b="${b.i}">${side === 'l' ? `<span class="dd-av">${IC.person}</span>` : ''}${inner}</div>`;
    };
    const preHTML = (b, it) => {
      convs[b.conv] = convs[b.conv] || '';
      if (it.k === 'stamp') convs[b.conv] += `<div class="dd-stamp" data-b="${b.i}">${stamp(it.t)}${it.chip ? `<em>⏩ ${esc(it.chip)}</em>` : ''}</div>`;
      if (it.k === 'ad') convs[b.conv] += `<div class="dd-ad" data-b="${b.i}"><div class="dd-adt"><img src="${esc(img(anh[0]))}" alt=""><div><b>${esc(String(shop.name).toUpperCase())}</b><small>${esc(sanPham)} · Được tài trợ</small></div></div>`
        + `<div class="dd-adf">${esc(names[it.conv] || names[0])} đã trả lời một quảng cáo</div></div>`;
    };
    beats.forEach((b, i) => {
      b.i = i;
      if (i < OPEN) return;
      (b.pre || []).forEach(it => preHTML(b, it));
      if (i === OPEN || b.k === 'capi' || b.k === 'ket') return;
      const st = b.st;
      convs[b.conv] = convs[b.conv] || '';
      if (AI_SIDE.has(b.k)) convs[b.conv] += `<div class="dd-row r dd-typing" data-b="${i}" data-typ="1"><div class="dd-bub t"><i></i><i></i><i></i></div></div>`;
      if (b.k === 'kh' && st.typing) convs[b.conv] += `<div class="dd-row l dd-typing" data-b="${i}" data-typ="1"><span class="dd-av">${IC.person}</span><div class="dd-bub t"><i></i><i></i><i></i></div></div>`;   // khách đang nhập…
      if (b.k === 'seen') { convs[b.conv] += `<div class="dd-row r dd-seenrow" data-b="${i}"><span class="dd-seen">${IC.person}</span><small>Đã xem</small></div>`; return; }
      if (b.k === 'kh') row(b, 'l', `<div class="dd-bub">${md(st.kh)}</div>`);
      else if (b.k === 'img') row(b, 'l', `<img class="dd-pic" src="${esc(img(st.img))}" alt="">`);
      else if (b.k === 'ai') row(b, 'r', `<div class="dd-bub b">${md(st.ai)}</div>`);
      else if (b.k === 'aiImg') row(b, 'r', `<img class="dd-pic" src="${esc(img(st.aiImg))}" alt="">`);
      else if (b.k === 'aiImgs') row(b, 'r', `<div class="dd-pics">${st.aiImgs.map(x => x.spec   // ô thông số (chữ, không phải ảnh)
          ? `<div class="dd-spec"><b>${esc(x.spec.tieuDe || 'THÔNG SỐ')}</b>${x.spec.dong.map(([k, v]) => `<span>${esc(k)}<em>${esc(v)}</em></span>`).join('')}</div>`
          : `<img src="${esc(img(x.img))}" alt="">`).join('')}</div>`);
      else if (b.k === 'catalog') row(b, 'r', `<div class="dd-car">${st.catalog.map(c => `<div class="dd-cc"><img src="${esc(img(c.art))}" alt=""><div class="dd-ccb"><b>${esc(c.name)}${c.color ? ' ' + esc(c.color) : ''}</b>`
        + `<small>Giá</small><span>${esc(c.price)}${c.old ? ` <s>${esc(c.old)}</s>` : ''}</span><em>Thêm vào đơn</em></div></div>`).join('')}</div>`, 'wide');
      else if (b.k === 'card') {
        const c = st.card, lines = (c.lines || []).map(md).join('<br>');
        const head = c.ok || !c.intro ? md(String(c.tag || '').replace(/^[✓⭐]\s*/, c.ok ? '✅ ' : '⭐ ')) : md(c.intro);
        row(b, 'r', `<div class="dd-bub b">${head}${lines ? '<br><br>' + lines : ''}</div>`);
      }
    });

    const ms = `<div class="dd-ms">`
      + `<div class="dd-sb"><b class="dd-clock">${clock(beats[0].t)}</b><span>${IC.signal}${IC.wifi}${IC.battery}</span></div>`
      + `<div class="dd-mh"><span class="dd-back">${IC.back}</span><span class="dd-mav">${IC.person}<i></i></span><div class="dd-mn"><b class="dd-name">${esc(names[0])}</b><small>Đang hoạt động</small></div>`
      + `<span class="dd-mi">${IC.phone}${IC.video}${IC.info}</span></div>`
      + `<div class="dd-body">${convs.map((h, c) => `<div class="dd-conv" data-c="${c}">${h || ''}</div>`).join('')}</div>`
      + `<div class="dd-in"><span class="dd-ib">${IC.plus}${IC.camera}${IC.image}${IC.mic}</span><span class="dd-aa">Aa</span><span class="dd-like">${IC.like}</span></div>`
      + `</div>`;

    const cp = dd.capi;
    const capiHTML = cp ? `<div class="dd-capi"><div class="dd-cpn">${esc(cp.nhan || '⏩ Hệ thống · Ghi nhận khách hàng tiềm năng')}</div>`
      + `<div class="dd-cpflow"><div class="dd-cpnode" style="--d:.2s"><span class="pn">P</span><b>Preny AI</b><small>Messenger</small></div><i class="dd-cpl" style="--d:.6s"></i>`
      + `<div class="dd-cpnode" style="--d:.9s"><span class="mt">∞</span><b>Meta CAPI</b><small>Conversions API</small></div><i class="dd-cpl" style="--d:1.3s"></i>`
      + `<div class="dd-cpnode" style="--d:1.6s"><span class="ld">✓</span><b>${esc(cp.event || 'Lead')}</b><small>Đã nhận (demo)</small></div></div>`
      + `<div class="dd-cpbox" style="--d:2.2s"><h6>PRENY AI → META CONVERSIONS API</h6>${(cp.dong || []).map(([k, v], i) => `<p style="--d:${(2.5 + i * 0.35).toFixed(2)}s">${esc(k)}: <b>${esc(v)}</b></p>`).join('')}</div>`
      + (cp.chu ? `<div class="dd-cpnote" style="--d:4.8s"><b>Chống ghi nhận trùng</b> · ${esc(cp.chu)}</div>` : '')
      + (cp.khong ? `<div class="dd-cpno" style="--d:5.4s">✕ ${esc(cp.khong)}</div>` : '') + `</div>` : '';
    const kt = dd.ket;
    const ketHTML = kt ? `<div class="dd-ket"><img src="assets/img/logo-white.png" alt="Preny" style="--d:.2s"><h5 style="--d:.5s">${esc(kt.tieuDe)}</h5>`
      + `<ul>${(kt.y || []).map((x, i) => `<li style="--d:${(0.8 + i * 0.28).toFixed(2)}s"><i>✓</i>${esc(x)}</li>`).join('')}</ul>`
      + `<b class="dd-kweb" style="--d:${(1 + (kt.y || []).length * 0.28).toFixed(2)}s">preny.ai</b></div>` : '';

    root.innerHTML = `<div class="dd-side">`
      + `<button class="dd-btn" data-act="exit"><span>←</span>Về slide</button>`
      + `<button class="dd-btn dd-auto" data-act="auto"></button>`
      + `<button class="dd-btn" data-act="music"><span>♪</span><em class="dd-mlbl"></em></button>`
      + `<div class="dd-hint">Bấm <b>→</b> hoặc nhấp vào màn hình để chạy từng tin<br><b>Space</b> tự chạy như video · Space lần nữa để dừng<br><b>←</b> lùi · <b>Esc</b> về slide</div></div>`
      + `<div class="dd-screen">${fb}${qcHTML}${ms}${capiHTML}${ketHTML}<div class="dd-badge">DEMO · DỮ LIỆU MINH HỌA</div></div>`;
    scr = root.querySelector('.dd-screen');
    root.querySelector('[data-act="exit"]').addEventListener('click', e => { e.stopPropagation(); exit(); });
    root.querySelector('[data-act="music"]').addEventListener('click', e => { e.stopPropagation(); setMusic(!musicWanted); });
    root.querySelector('[data-act="auto"]').addEventListener('click', e => { e.stopPropagation(); e.currentTarget.blur(); toggleAuto(); });
    scr.addEventListener('click', e => { e.stopPropagation(); next(); });
    paintMusic();
  }

  /* ---------- Hiện theo lần bấm ---------- */
  let typingT = null;   // chỉ hẹn giờ của dấu "đang nhập…" mới tính là đang hiện dở (bấm → thì hiện xong ngay)
  function clearT() { timers.forEach(clearTimeout); timers = []; clearTimeout(typingT); typingT = null; }
  const later = (ms, fn) => { const id = setTimeout(() => { timers = timers.filter(x => x !== id); fn(); }, ms); timers.push(id); };
  function scrollEnd(smooth) {
    const body = root.querySelector('.dd-body'); if (!body) return;
    body.style.scrollBehavior = smooth ? 'smooth' : 'auto';
    body.scrollTop = body.scrollHeight;
  }
  function render(animate) {
    clearT();
    const b = beats[n];
    root.querySelectorAll('[data-fb]').forEach(el => {
      const on = n >= +el.dataset.fb;
      el.classList.toggle('sh', on); el.classList.toggle('nz', on && !(animate && +el.dataset.fb === n));
    });
    const ms = root.querySelector('.dd-ms');
    ms.classList.toggle('nz', !(animate && n === OPEN));
    ms.classList.toggle('on', n >= OPEN);
    const layer = (sel, from) => { const el = root.querySelector(sel); if (!el) return;
      el.classList.toggle('sh', from >= 0 && n >= from); el.classList.toggle('nz', !(animate && n === from)); };
    layer('.dd-qc', QC); layer('.dd-capi', CAPI); layer('.dd-ket', KET);
    const qcEl = root.querySelector('.dd-qc');
    if (qcEl) { qcEl.classList.toggle('bam', n >= QC + 1); qcEl.classList.toggle('bamnz', !(animate && n === QC + 1)); }
    const conv = n >= OPEN ? b.conv || 0 : 0;
    root.querySelectorAll('.dd-conv').forEach(c => { c.hidden = +c.dataset.c !== conv; });
    root.querySelector('.dd-name').textContent = names[conv] || names[0];
    root.querySelector('.dd-clock').textContent = clock(b.t);
    const items = [...root.querySelectorAll(`.dd-conv[data-c="${conv}"] [data-b]`)];
    let typing = null;
    items.forEach(el => {
      const bi = +el.dataset.b, typ = el.dataset.typ;
      if (bi < n || (bi === n && !animate)) { el.classList.toggle('sh', !typ); el.classList.add('nz'); return; }
      if (bi > n) { el.classList.remove('sh', 'nz'); return; }
      el.classList.remove('nz');
      if (typ) { typing = el; el.classList.add('sh'); }
      else if (el.classList.contains('dd-row')) el.classList.remove('sh');   // tin chính: hiện sau dấu "đang nhập…"
      else el.classList.add('sh');                                          // mốc thời gian, thẻ quảng cáo: hiện ngay
    });
    const reveal = () => {
      items.forEach(el => { if (+el.dataset.b === n && el.classList.contains('dd-row') && !el.dataset.typ) el.classList.add('sh'); });
      if (typing) typing.classList.remove('sh');
      scrollEnd(true);
    };
    if (animate && typing) typingT = setTimeout(() => { typingT = null; reveal(); }, b.k === 'kh' ? 1500 : b.st && b.st.fast ? 550 : 950);
    else if (animate) { reveal(); }
    scrollEnd(animate);
    if (animate) later(120, () => scrollEnd(true));
    paintAuto();
  }
  function next() {
    Music.resume();
    if (typingT) { clearT(); render(false); if (auto) planAuto(dwell(beats[n], false)); return; }   // đang hiện dở: hiện xong ngay
    if (n < beats.length - 1) { n++; render(true); if (auto) planAuto(dwell(beats[n], true)); }
    else if (auto) setAuto(false);                              // đang tự chạy mà hết: chỉ dừng
    else exit();                                                // hết demo: bấm thêm là về slide
  }
  function prev() { if (auto) setAuto(false); if (n > 0) { n--; render(false); } }

  /* ---------- Tự chạy như video (người dùng yêu cầu 17/11/2026) ----------
     Nút "Tự chạy" hoặc phím Space: tin tự hiện lần lượt, thời gian dừng theo độ dài tin (đủ đọc). Space lần nữa: tạm dừng, Space: chạy tiếp.
     Bấm → / nhấp màn hình khi đang tự chạy: sang tin kế ngay, rồi tự chạy tiếp. ← : lùi và dừng. Hết demo thì dừng ở tin cuối (không tự về slide).
     Lựa chọn tự chạy được nhớ trên máy: lần sau mở demo sẽ tự chạy luôn. */
  const AKEY = 'preny-doc-tu-chay';
  let auto = false, autoT = null, autoPref = false;
  try { autoPref = localStorage.getItem(AKEY) === '1'; } catch (_) {}
  const plainLen = s => String(s || '').replace(/\*\*|<[^>]+>/g, '').length;
  function dwell(b, withTyping) {   // thời gian từ lúc bắt đầu hiện beat b tới lúc sang beat kế
    if (!b) return 1500;
    const st = b.st || {}, typ = withTyping ? (AI_SIDE.has(b.k) ? (st.fast ? 550 : 950) : b.k === 'kh' && st.typing ? 1500 : 0) : 0;
    const pre = (b.pre || []).length ? 500 : 0;
    // Kịch bản có canh thời lượng (vd video 120 giây): steps ghi ddMs, các cảnh ngoài steps ghi trong demoDoc.nhip
    if (st.ddMs) return typ + st.ddMs;
    const nh = (dd.nhip || {})[b.k]; if (nh) return pre + typ + nh;
    const read = b.k === 'start' ? 2200 : b.k === 'cmt' || b.k === 'rep' ? 1700 : b.k === 'open' ? 2000
      : b.k === 'kh' ? Math.min(4200, 1100 + 32 * plainLen(st.kh))
      : b.k === 'ai' ? Math.min(6500, 1300 + 34 * plainLen(st.ai))
      : b.k === 'img' || b.k === 'aiImg' ? 1800 : b.k === 'aiImgs' ? 2600 : b.k === 'catalog' ? 3800
      : b.k === 'card' ? Math.min(6000, 1600 + 26 * plainLen((st.card.lines || []).join(' ') + (st.card.intro || '')))
      : b.k === 'qc' ? 4500 : b.k === 'bamqc' ? 1800 : b.k === 'seen' ? 5000 : b.k === 'capi' ? 10000 : b.k === 'ket' ? 8000
      : 1800;
    return pre + typ + read;
  }
  function planAuto(ms) { clearTimeout(autoT); autoT = setTimeout(tickAuto, ms); }
  function tickAuto() {
    autoT = null;
    if (!auto) return;
    if (n >= beats.length - 1) return setAuto(false);
    n++; render(true); planAuto(dwell(beats[n], true));
  }
  function setAuto(v, byUser) {
    auto = v; clearTimeout(autoT); autoT = null;
    if (byUser) { autoPref = v; try { localStorage.setItem(AKEY, v ? '1' : '0'); } catch (_) {} }
    if (v) {
      Music.resume();
      if (n >= beats.length - 1) { n = 0; render(false); }   // đang ở cuối: chạy lại từ đầu
      planAuto(typingT ? 1400 : n === 0 ? 1500 : 700);
    }
    paintAuto();
  }
  function toggleAuto() { setAuto(!auto, true); }
  function paintAuto() {
    const b = root && root.querySelector('[data-act="auto"]'); if (!b) return;
    const end = n >= beats.length - 1;
    b.classList.toggle('on', auto);
    b.innerHTML = auto ? '<span>⏸</span><em>Tạm dừng · Space</em>' : end ? '<span>↻</span><em>Chạy lại từ đầu · Space</em>' : '<span>▶</span><em>Tự chạy · Space</em>';
  }
  function setMusic(v) {
    musicWanted = v;
    try { localStorage.setItem(MKEY, v ? '1' : '0'); } catch (_) {}
    if (v) Music.start(); else Music.stop();
    paintMusic();
  }
  function paintMusic() { const l = root && root.querySelector('.dd-mlbl'); if (l) l.textContent = musicWanted ? 'Nhạc nền: bật' : 'Nhạc nền: tắt'; }
  function open(kb, el, opts = {}) {
    K = kb; root = el; onExit = opts.onExit || null; n = 0; auto = false;
    build(); render(false); paintAuto();
    if (musicWanted) Music.start();
    if (autoPref) { auto = true; paintAuto(); planAuto(dwell(beats[0], false)); }   // lần trước để chế độ tự chạy: mở là chạy luôn
  }
  function exit() { close(); if (onExit) onExit(); }
  function close() { clearT(); auto = false; clearTimeout(autoT); autoT = null; Music.stop(); }

  window.DemoDoc = { Score, open, close, next, prev, exit, toggleAuto, get auto() { return auto; }, get step() { return n; }, get steps() { return beats.length; } };
})();
