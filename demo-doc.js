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

  /* ---------- Nhạc nền nhẹ (Web Audio): pad hợp âm + nốt rải, nhịp chậm, âm lượng thấp ---------- */
  const Music = (() => {
    let ac = null, master = null, bus = null, timer = null, nextBar = 0, bar = 0, on = false;
    const CH = [[48, 55, 64, 71], [45, 52, 60, 67], [41, 48, 57, 64], [43, 50, 59, 65]];   // Cmaj7 · Am7 · Fmaj7 · G7 (thấp)
    const BAR = 3.6;   // giây mỗi ô nhịp
    const hz = m => 440 * Math.pow(2, (m - 69) / 12);
    function tone(midi, t, dur, type, vol, att) {
      const o = ac.createOscillator(), g = ac.createGain();
      o.type = type; o.frequency.value = hz(midi);
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(vol, t + att);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.connect(g); g.connect(bus); o.start(t); o.stop(t + dur + 0.05);
    }
    function schedule() {
      while (nextBar < ac.currentTime + 1.5) {
        const ch = CH[bar % CH.length], t = nextBar;
        ch.forEach(m => tone(m, t, BAR + 1.2, 'triangle', 0.018, 0.9));            // pad
        tone(ch[0] - 12, t, BAR, 'sine', 0.05, 0.05);                                 // bass
        for (let i = 0; i < 6; i++) {                                                  // nốt rải
          if (i === 3 && bar % 2) continue;
          const m = ch[(i * 2 + bar) % 4] + 12;
          tone(m, t + i * BAR / 6, 1.6, 'sine', 0.022, 0.015);
        }
        nextBar += BAR; bar++;
      }
    }
    function start() {
      try {
        if (!ac) {
          ac = new (window.AudioContext || window.webkitAudioContext)();
          master = ac.createGain(); master.gain.value = 0;
          const lp = ac.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 2200;
          const dly = ac.createDelay(); dly.delayTime.value = 0.34;
          const fb = ac.createGain(); fb.gain.value = 0.28;
          bus = ac.createGain();
          bus.connect(lp); lp.connect(master); lp.connect(dly); dly.connect(fb); fb.connect(dly); dly.connect(master);
          master.connect(ac.destination);
        }
        if (ac.state === 'suspended') ac.resume();
        if (on) return;
        on = true; nextBar = ac.currentTime + 0.1;
        master.gain.cancelScheduledValues(ac.currentTime);
        master.gain.setValueAtTime(master.gain.value, ac.currentTime);
        master.gain.linearRampToValueAtTime(0.9, ac.currentTime + 2.5);
        schedule(); timer = setInterval(schedule, 300);
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
    let m = t.match(/(\d+)\s*(phút|tiếng|giờ|ngày|tuần|tháng)/i);
    if (m) {
      const n = +m[1], u = m[2].toLowerCase();
      const min = u === 'phút' ? n : (u === 'tiếng' || u === 'giờ') ? n * 60 : u === 'ngày' ? n * 1440 : u === 'tuần' ? n * 10080 : n * 43200;
      return { add: min, chip: t };
    }
    m = t.match(/Ngày\s*(\d{1,2})\/(\d{1,2})/i);
    if (m) return { day: +m[1], month: +m[2], chip: null };
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
  let root = null, K = null, beats = [], n = 0, timers = [], onExit = null, names = [], scr = null;
  const AI_SIDE = new Set(['ai', 'card', 'catalog', 'aiImgs', 'aiImg']);
  const plainName = s => String(s || '').replace(/^(Anh|Chị|Em|Cô|Chú|Bác)\s+/i, '').split('·')[0].trim();

  function build() {
    const D = K.deck || {}, dd = D.demoDoc || {}, shop = K.shop || { name: '', initials: '' };
    const img = k => loc((K.images || {})[k] || k);
    const cb = D.chatbot || {};
    names = [].concat(dd.khach || plainName((cb.don || cb.lead || {}).ten) || 'Khách hàng');
    const sanPham = dd.sanPham || ((cb.chat || [])[0] || {}).ref && cb.chat[0].ref.ten || shop.name;
    const post = dd.post || {};
    const anh = (post.anh || Object.keys(K.images || {}).slice(0, 4)).slice(0, 4);
    const [dd0, mm0, yy0] = String(dd.ngay || '16/11/2026').split('/').map(Number);
    const [hh0, mi0] = String(dd.gio || '09:00').split(':').map(Number);
    let time = new Date(yy0, mm0 - 1, dd0, hh0, mi0);

    // Các lần bấm: 0 bài đăng, 1 khách bình luận, 2 trang trả lời, 3 mở Messenger, sau đó mỗi bước 1 lần bấm
    beats = [{ k: 'start', t: new Date(time) }, { k: 'cmt', t: new Date(time) }, { k: 'rep', t: new Date(time) }, { k: 'open', conv: 0, pre: [], t: new Date(time) }];
    let conv = 0, pend = [], firstTime = true, firstBeatOfConv = true;
    const addPre = it => { if (firstBeatOfConv && conv === 0) beats[3].pre.push(it); else pend.push(it); };
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
      const k = st.kh ? 'kh' : st.ai ? 'ai' : st.img ? 'img' : st.aiImgs ? 'aiImgs' : st.aiImg ? 'aiImg' : st.catalog ? 'catalog' : st.card ? 'card' : null;
      if (!k) continue;
      if (firstTime) { firstTime = false; addPre({ k: 'stamp', t: new Date(time) }); addPre({ k: 'ad', conv }); }
      time = new Date(time.getTime() + 60000 * (k === 'kh' ? 1 : 0.5));
      beats.push({ k, st, conv, pre: pend, t: new Date(time) }); pend = []; firstBeatOfConv = false;
    }

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
      + `<div class="dd-cmt" data-fb="1"><span class="dd-cav">${IC.person}</span><div><div class="dd-cbx"><b>${esc(names[0])}</b><span>${esc(dd.binhLuan || 'Tư vấn')}</span></div>`
      + `<div class="dd-cmeta"><span>Vừa xong</span><b>Thích</b><b>Phản hồi</b></div></div></div>`
      + `<div class="dd-cmt rep" data-fb="2">${pav}<div><div class="dd-cbx"><b>${esc(String(shop.name).toUpperCase())} <em>Tác giả</em></b><span>${esc(dd.traLoi || 'Dạ, mình check inbox giúp em nha!')}</span></div>`
      + `<div class="dd-cmeta"><span>Vừa xong</span><b>Thích</b><b>Phản hồi</b></div></div></div>`
      + `</div></div>`;

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
      if (i < 3) return;
      (b.pre || []).forEach(it => preHTML(b, it));
      if (i === 3) return;
      const st = b.st;
      if (AI_SIDE.has(b.k)) { convs[b.conv] = convs[b.conv] || ''; convs[b.conv] += `<div class="dd-row r dd-typing" data-b="${i}" data-typ="1"><div class="dd-bub t"><i></i><i></i><i></i></div></div>`; }
      if (b.k === 'kh') row(b, 'l', `<div class="dd-bub">${md(st.kh)}</div>`);
      else if (b.k === 'img') row(b, 'l', `<img class="dd-pic" src="${esc(img(st.img))}" alt="">`);
      else if (b.k === 'ai') row(b, 'r', `<div class="dd-bub b">${md(st.ai)}</div>`);
      else if (b.k === 'aiImg') row(b, 'r', `<img class="dd-pic" src="${esc(img(st.aiImg))}" alt="">`);
      else if (b.k === 'aiImgs') row(b, 'r', `<div class="dd-pics">${st.aiImgs.map(x => `<img src="${esc(img(x.img))}" alt="">`).join('')}</div>`);
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

    root.innerHTML = `<div class="dd-side">`
      + `<button class="dd-btn" data-act="exit"><span>←</span>Về slide</button>`
      + `<button class="dd-btn" data-act="music"><span>♪</span><em class="dd-mlbl"></em></button>`
      + `<div class="dd-hint">Bấm <b>→</b> hoặc nhấp vào màn hình để chạy tin<br><b>←</b> lùi · <b>Esc</b> về slide</div></div>`
      + `<div class="dd-screen">${fb}${ms}<div class="dd-badge">DEMO · DỮ LIỆU MINH HỌA</div></div>`;
    scr = root.querySelector('.dd-screen');
    root.querySelector('[data-act="exit"]').addEventListener('click', e => { e.stopPropagation(); exit(); });
    root.querySelector('[data-act="music"]').addEventListener('click', e => { e.stopPropagation(); setMusic(!musicWanted); });
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
    ms.classList.toggle('nz', !(animate && n === 3));
    ms.classList.toggle('on', n >= 3);
    const conv = n >= 3 ? b.conv || 0 : 0;
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
    if (animate && typing) typingT = setTimeout(() => { typingT = null; reveal(); }, b.st && b.st.fast ? 550 : 950);
    else if (animate) { reveal(); }
    scrollEnd(animate);
    if (animate) later(120, () => scrollEnd(true));
  }
  function next() {
    Music.resume();
    if (typingT) { clearT(); render(false); return; }   // đang hiện dở: hiện xong ngay
    if (n < beats.length - 1) { n++; render(true); }
    else exit();                                                // hết demo: bấm thêm là về slide
  }
  function prev() { if (n > 0) { n--; render(false); } }
  function setMusic(v) {
    musicWanted = v;
    try { localStorage.setItem(MKEY, v ? '1' : '0'); } catch (_) {}
    if (v) Music.start(); else Music.stop();
    paintMusic();
  }
  function paintMusic() { const l = root && root.querySelector('.dd-mlbl'); if (l) l.textContent = musicWanted ? 'Nhạc nhẹ: bật' : 'Nhạc nhẹ: tắt'; }
  function open(kb, el, opts = {}) {
    K = kb; root = el; onExit = opts.onExit || null; n = 0;
    build(); render(false);
    if (musicWanted) Music.start();
  }
  function exit() { close(); if (onExit) onExit(); }
  function close() { clearT(); Music.stop(); }

  window.DemoDoc = { open, close, next, prev, exit, get step() { return n; }, get steps() { return beats.length; } };
})();
