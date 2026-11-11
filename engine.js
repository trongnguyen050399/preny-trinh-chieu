/* Bộ chạy demo Preny: đọc window.KICH_BAN, dựng cột trái + điện thoại, chạy theo dòng thời gian.
   Phím: → bước tiếp (như PowerPoint), ← lùi, 1–9 tới tính năng, Space tự chạy / tạm dừng, R chạy lại, F toàn màn hình, M menu, H xem phím.
   URL: ?kb=thoi-trang (kịch bản), ?speed=1.2 (nhanh hơn), ?autoplay=1 (tự chạy), ?present=1 (bấm từng bước),
        ?embed=1 (nằm trong trinh-chieu.html), ?render=1 (chế độ xuất video). */
(function () {
  'use strict';
  const KB = window.KICH_BAN;
  if (!KB) { document.body.innerHTML = '<p style="color:#fff;padding:40px;font:20px sans-serif">Không tìm thấy kịch bản.</p>'; return; }

  const P = new URLSearchParams(location.search);
  const SPEED = Math.max(0.2, parseFloat(P.get('speed')) || KB.speed || 1);
  const RENDER = P.get('render') === '1';
  const $ = (s, r = document) => r.querySelector(s);
  const stage = $('#stage'), left = $('#left'), inner = $('#inner'), hintEl = $('#hint'), screenEl = $('#screen');
  if (RENDER) hintEl.style.display = 'none';

  // Khung hình: ngang 16:9 (mặc định) hoặc dọc 9:16
  const PORTRAIT = KB.format === '9:16';
  const W = PORTRAIT ? 1080 : 1920, H = PORTRAIT ? 1920 : 1080;
  stage.style.width = W + 'px'; stage.style.height = H + 'px';
  stage.classList.toggle('portrait', PORTRAIT);
  if (KB.badge) $('#badgeText').textContent = KB.badge;
  // view: 'page' = giao diện inbox của fanpage: khách bên trái (avatar mặc định), Preny AI (fanpage) bên phải
  const PAGEVIEW = KB.view === 'page';
  stage.classList.toggle('pageview', PAGEVIEW);
  const AVSIDE = PAGEVIEW ? 'me' : 'bot';
  const SIL = '<svg viewBox="0 0 40 40" class="sil"><circle cx="20" cy="15" r="7.5"/><path d="M6 36c1.5-8 7.5-12 14-12s12.5 4 14 12z"/></svg>';

  // Lớp phủ hiệu ứng hệ thống (trong điện thoại) và màn kết thúc (toàn khung)
  const overlayEl = document.createElement('div'); overlayEl.className = 'overlay'; screenEl.appendChild(overlayEl);
  const endEl = document.createElement('div'); endEl.id = 'endscreen'; stage.appendChild(endEl);

  function fit() {
    const k = Math.min(innerWidth / W, innerHeight / H);
    stage.style.transform = `translate(-50%,-50%) scale(${k})`;
  }
  addEventListener('resize', fit); fit();

  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const fmt = s => esc(s).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/\n/g, '<br>');
  const plain = s => String(s || '').replace(/\*\*/g, '');
  const initials = name => String(name).trim().split(/\s+/).slice(-2).map(w => w[0]).join('').toUpperCase();

  /* ---------- Ảnh ---------- */
  // Bản tải sẵn về máy (assets/offline.js do tai-offline.py tạo): có thì dùng file trong máy, không cần mạng.
  const OFF = window.OFFLINE_ASSETS || {};
  const loc = u => (u && OFF[u]) || u;
  const IMG = {};
  Object.entries(KB.images || {}).forEach(([k, u]) => { IMG[k] = loc(u); });
  const LOGO = loc(KB.logo);
  const art = k => (IMG[k] ? `<img src="${esc(IMG[k])}" alt="">` : '');
  const logoImg = () => (LOGO ? `<img src="${esc(LOGO)}" alt="Preny">` : '<span class="logo-fallback">Preny</span>');

  // Tải trước ảnh + phông để khi xuất video không bị trống khung hình
  const fontLoads = document.fonts ? ['400', '500', '600', '700', '800'].map(w => document.fonts.load(`${w} 24px "Be Vietnam Pro"`, 'Aaếộữđ')) : [];
  const imgLoads = [...Object.values(IMG), LOGO].filter(s => s && !/\.(mp4|webm|mov)(\?|$)/i.test(s)).map(src => {
    const im = new Image(); im.src = src;
    return (im.decode ? im.decode() : Promise.resolve()).catch(() => {});
  });
  const timeout = ms => new Promise(r => setTimeout(r, ms));
  window.__ready = Promise.race([
    Promise.all([...fontLoads, ...imgLoads]).then(() => (document.fonts ? document.fonts.ready : 0)),
    timeout(10000),
  ]).then(() => true);

  /* ---------- Header điện thoại ---------- */
  const CHAT_HEAD = KB.chatHead ? Object.assign({ online: false, icons: true }, KB.chatHead)
    : { title: KB.shop.name, sub: 'Đang hoạt động', initials: KB.shop.initials, online: true, icons: true };
  function setHead(h) {
    const av = $('#avatar');
    av.classList.toggle('logo', !!h.logo);
    av.classList.toggle('def', h.avatar === 'default');
    av.classList.toggle('fb', h.avatar === 'fb');
    av.classList.toggle('oa', h.avatar === 'oa');
    stage.classList.toggle('zalo', h.theme === 'zalo');   // giao diện Zalo OA
    av.innerHTML = h.logo ? logoImg() : h.avatar === 'default' ? SIL : h.avatar === 'fb' ? 'f' : esc(h.initials || '');
    $('#shopName').textContent = h.title;
    const on = $('#online');
    on.textContent = h.sub || '';
    on.classList.toggle('nodot', !h.online);
    $('#hicons').style.display = h.icons ? '' : 'none';
  }

  /* ---------- Cột trái ---------- */
  let cards = [], cur = -1;
  $('#brand').innerHTML = logoImg();

  function buildLeft() {
    left.className = '';
    ['#brand', '#badgeWrap', '#h1', '#subWrap'].forEach(s => $(s).classList.remove('on'));
    $('#h1').innerHTML = `${esc(KB.headline.pre)} <em>${esc(KB.headline.em)}</em>`;
    $('#sub').innerHTML = fmt(KB.sub);
    const wrap = $('#cards'); wrap.innerHTML = '';
    // Khung dọc: thanh tiến trình "BƯỚC 3/8" thay cho danh sách đầy đủ
    let prog = $('#progress');
    if (PORTRAIT && !prog) { prog = document.createElement('div'); prog.id = 'progress'; prog.className = 'progress'; wrap.before(prog); }
    if (prog) prog.innerHTML = `<span class="lbl"></span>` + KB.features.map(() => '<i class="seg"></i>').join('');
    overlayEl.classList.remove('on'); overlayEl.innerHTML = '';
    endEl.classList.remove('on'); endEl.innerHTML = '';
    cards = KB.features.map((f, i) => {
      const c = document.createElement('div');
      c.className = 'card';
      c.innerHTML = `<div class="num"><span>${i + 1}</span></div><div class="body"><div class="ttl">${esc(f.title)}</div><div class="desc">${esc(f.desc)}</div><ul class="kws"></ul></div>`;
      wrap.appendChild(c);
      return c;
    });
    cur = -1;
  }
  function setActive(i) {
    if (cur >= 0) cards[cur].classList.add('done');
    cards.forEach((c, j) => c.classList.toggle('active', j === i));
    cur = i;
    left.classList.add('compact');
    const prog = $('#progress');
    if (prog) {
      $('.lbl', prog).textContent = `BƯỚC ${i + 1}/${KB.features.length}`;
      [...prog.querySelectorAll('.seg')].forEach((s, j) => { s.classList.toggle('done', j < i); s.classList.toggle('now', j === i); });
    }
  }
  function revealKw(k) {
    if (cur < 0) return;
    const text = (KB.features[cur].kws || [])[k];
    if (!text) return;
    const ul = $('.kws', cards[cur]);
    [...ul.children].forEach(li => { li.classList.remove('now'); li.classList.add('past'); li.firstChild.textContent = '✓'; });
    const li = document.createElement('li');
    li.className = 'kw now';
    li.innerHTML = `<i>•</i><span>${esc(text)}</span>`;
    ul.appendChild(li);
  }
  function outro() {
    if (cur >= 0) cards[cur].classList.add('done');
    cards.forEach(c => c.classList.remove('active'));
    cur = -1;
    left.classList.remove('compact');
    left.classList.add('outro');
    if (KB.cta) $('#sub').innerHTML = fmt(KB.cta);
  }

  /* ---------- Khung chat ---------- */
  let lastRow = null;
  // Thêm phần tử rồi trượt cả khung lên mượt (mới ở mép dưới, cũ trôi lên).
  function flip(change) {
    const h0 = inner.offsetHeight; change(); const d = inner.offsetHeight - h0;
    if (!d) return;
    inner.style.transition = 'none';
    inner.style.transform = `translateY(${d}px)`;
    void inner.offsetHeight;
    inner.style.transition = 'transform .55s cubic-bezier(.2,.75,.2,1)';
    inner.style.transform = 'translateY(0)';
  }
  function makeRow(side, html, extra) {
    const r = document.createElement('div');
    r.className = 'row ' + side + (extra ? ' ' + extra : '');
    r.innerHTML = (side === AVSIDE ? (PAGEVIEW ? `<div class="mini def">${SIL}</div>` : `<div class="mini">${esc(KB.shop.initials)}</div>`) : '') + html;
    return r;
  }
  function addRow(r) {
    flip(() => {
      // Giống Messenger: chỉ tin cuối của một chuỗi tin AI mới có avatar.
      if (lastRow && lastRow.classList.contains(AVSIDE) && r.classList.contains(AVSIDE)) {
        const m = $('.mini', lastRow); if (m) m.style.visibility = 'hidden';
      }
      inner.appendChild(r);
    });
    lastRow = r;
  }
  function replaceRow(oldR, newR) {
    flip(() => oldR.replaceWith(newR));
    if (lastRow === oldR) lastRow = newR;
  }
  function clearChat() {
    inner.innerHTML = ''; inner.style.transition = 'none'; inner.style.transform = ''; lastRow = null;
  }

  /* ---------- Mẫu HTML các loại tin / khối ---------- */
  const withMeta = (html, meta) => (meta ? `<div class="col">${html}<div class="meta">${fmt(meta)}</div></div>` : html);
  const hlHtml = c => `<div class="bubble hl${c.ok ? ' ok' : ''}"><div class="tag">${esc(c.tag)}</div>`
    + (c.intro ? `<div>${fmt(c.intro)}</div>` : '')
    + `<ul>${c.lines.map(l => `<li>${fmt(l)}</li>`).join('')}</ul>`
    + (c.outro ? `<div>${fmt(c.outro)}</div>` : '')
    + (c.button ? `<div class="btn">${esc(c.button)}</div>` : '') + `</div>`;
  const catalogHtml = items => `<div class="carousel">${items.map(p =>
    `<div class="pc"><div class="im">${art(p.art)}<span class="t">${esc(p.tag)}</span></div><div class="in">`
    + `<div class="n">${esc(p.name)}</div><div class="c">${p.sub ? esc(p.sub) : 'Màu ' + esc(p.color)}</div>`
    + `<div class="p">${esc(p.price)}${p.old ? `<span class="o">${esc(p.old)}</span>` : ''}</div><div class="buy">${esc(p.buy || 'Mua ngay')}</div></div></div>`).join('')}</div>`;
  const tagsHtml = b => `<div class="panel"><h4>${esc(b.title)}</h4><div class="chips">${b.tags.map(t =>
    `<span class="chip ${t.c || ''}">${esc(t.t)}<b>${esc(t.n)}</b></span>`).join('')}</div></div>`;
  const customersHtml = b => `<div class="panel"><h4>${esc(b.title)}</h4>${b.rows.map(r =>
    `<div class="cust"><div class="av">${esc(initials(r.name))}</div><div class="ci"><div class="nm">${esc(r.name)}</div><div class="nt">${esc(r.note)}</div></div><span class="chip sm ${r.c || ''}">${esc(r.tag)}</span></div>`).join('')}</div>`;
  const campaignHtml = b => `<div class="panel camp"><h4>${esc(b.title)}</h4>`
    + `<div class="kv"><span>Chiến dịch</span><b>${esc(b.name)}</b></div>`
    + `<div class="kv"><span>Gửi tới</span><b>${esc(b.audience)}</b></div>`
    + `<div class="kv"><span>Kênh</span><div class="chans">${b.channels.map(c => `<span class="chan ${c.k}">${esc(c.t)}</span>`).join('')}</div></div>`
    + `<div class="cbtn">${esc(b.button)}</div></div>`;
  const flowHtml = b => `<div class="flowwrap">${b.i > 1 ? '<div class="arrow"></div>' : ''}<div class="flow ${b.hl || ''}"><div class="fn">${b.i}</div><div class="ft">${fmt(b.text)}</div></div></div>`;
  const adHtml = b => `<div class="adwrap">${b.label ? `<div class="adlbl">${esc(b.label)}</div>` : ''}<div class="ad">`
    + `<div class="adh"><div class="adav">${esc(KB.shop.initials)}</div><div><div class="adp">${esc(KB.shop.name)}</div><div class="ads">Được tài trợ</div></div></div>`
    + (b.head ? `<div class="adhd">${fmt(b.head)}</div>` : '')
    + (b.text ? `<div class="adt">${fmt(b.text)}</div>` : '')
    + (b.imgs ? `<div class="adgrid">${b.imgs.map(x => `<div>${art(x.img || x)}${x.label ? `<span>${esc(x.label)}</span>` : ''}</div>`).join('')}</div>` : `<div class="adim">${art(b.img)}</div>`)
    + `<div class="adf"><div class="adti">${esc(b.title)}</div><div class="cta">${esc(b.cta || 'Gửi tin nhắn')}</div></div></div></div>`;
  const prodHtml = b => `<div class="prod"><div class="pim">${art(b.img)}</div><div class="pin"><div class="pn">${esc(b.name)}</div>`
    + (b.price ? `<div class="pp">${esc(b.price)}</div>` : '') + (b.note ? `<div class="pnote">${esc(b.note)}</div>` : '')
    + `</div>${b.button ? `<div class="pbtn">${esc(b.button)}</div>` : ''}</div>`;
  const sysHtml = b => `<div class="sysc"><div class="sh"><span class="dot"></span>${esc(b.head)}</div>`
    + (b.note ? `<div class="note">${esc(b.note)}</div>` : '')
    + `<div class="rows">${b.rows.map(r => `<div class="r"><span>${esc(r[0])}</span><b>${esc(r[1])}</b></div>`).join('')}</div>`
    + (b.flow ? `<div class="sflow">${b.flow.map((x, i) => `${i ? '<i>→</i>' : ''}<span${i === b.flow.length - 1 ? ' class="ok"' : ''}>${esc(x)}</span>`).join('')}</div>` : '')
    + (b.status ? `<div class="okp">✓ ${esc(b.status)}</div>` : '')
    + (b.caption ? `<div class="scap">${fmt(b.caption)}</div>` : '') + `</div>`;
  const endHtml = b => `<div class="endcard"><div class="elogo">${logoImg()}</div><div class="et">${fmt(b.title)}</div><div class="es">${fmt(b.sub)}</div><div class="ebtn">${esc(b.button)}</div><div class="ec">${fmt(b.contact)}</div></div>`;

  /* ---------- Tiếng rung khi xem trực tiếp (Web Audio) ---------- */
  let actx = null, quiet = false;
  function buzz() {
    if (!actx || quiet) return;
    const t0 = actx.currentTime;
    const o = actx.createOscillator(), f = actx.createBiquadFilter(), g = actx.createGain();
    o.type = 'square'; o.frequency.value = 165;
    f.type = 'lowpass'; f.frequency.value = 520;
    g.gain.value = 0;
    o.connect(f); f.connect(g); g.connect(actx.destination);
    [0, 0.2].forEach(s => {
      g.gain.setValueAtTime(0, t0 + s);
      g.gain.linearRampToValueAtTime(0.2, t0 + s + 0.015);
      g.gain.setValueAtTime(0.2, t0 + s + 0.11);
      g.gain.linearRampToValueAtTime(0, t0 + s + 0.14);
    });
    o.start(t0); o.stop(t0 + 0.4);
  }

  /* ---------- Dựng dòng thời gian từ kịch bản ---------- */
  const T = Object.assign({ read0: 1800, readPerChar: 45, readMax: 7000, type0: 1300, typePerChar: 6, typeMax: 2600, fastType: 700,
    featureHold: 2200, sepHold: 2000, cardHold: 6000, introCard: 450 }, KB.timing || {});
  const readMs = s => Math.min(T.readMax, T.read0 + T.readPerChar * plain(s).length);
  const typeMs = s => Math.min(T.typeMax, T.type0 + T.typePerChar * plain(s).length);

  let E = [], buzzTimes = [], marks = [], STOPS = [];
  function compile() {
    E = []; buzzTimes = []; marks = []; STOPS = [];
    let t = 500, lastAt = 0, had = false, pending = null;
    const at = fn => { E.push({ t: t / SPEED, fn }); lastAt = t; had = true; };
    const wait = ms => { t += ms; };
    const showKw = st => (st.kw === undefined ? [] : [].concat(st.kw)).forEach(revealKw);
    const markBuzz = () => buzzTimes.push(t / SPEED);

    function botMsg(st, html, text, hold, after) {
      let typ;
      at(() => { typ = makeRow('bot', '<div class="bubble typing"><span></span><span></span><span></span></div>'); addRow(typ); });
      wait(st.fast ? T.fastType : typeMs(text));
      at(() => { const r = makeRow('bot', withMeta(html, st.meta), st.meta ? 'hasmeta' : ''); replaceRow(typ, r); buzz(); showKw(st); if (after) after(r); });
      markBuzz();
      wait(st.hold || hold || readMs(text));
    }
    function sysBlock(st, html, hold) {
      at(() => { addRow(makeRow('sys', html)); showKw(st); });
      wait(st.hold || hold || 2600);
    }

    for (const st of KB.steps) {
      const t0 = t; had = false;
      compileStep(st);
      // Điểm dừng cho chế độ bấm từng bước: lúc nội dung của bước đã hiện xong (bỏ qua bước không hiện gì).
      // Vạch thời gian (sep) và đổi màn hình (screen) chạy liền vào bước kế tiếp, không tốn một lần bấm riêng.
      if (had && (st.sep || st.screen)) { if (pending === null) pending = t0; }
      else if (had) { STOPS.push({ start: (pending === null ? t0 : pending) / SPEED, show: Math.min(lastAt + 650, t) / SPEED, feature: st.feature || 0 }); pending = null; }
    }
    E.total = t / SPEED;

    function compileStep(st) {
      if (st.intro) {
        at(() => $('#brand').classList.add('on')); wait(300);
        at(() => $('#badgeWrap').classList.add('on')); wait(300);
        at(() => $('#h1').classList.add('on')); wait(400);
        at(() => $('#subWrap').classList.add('on')); wait(700);
        if (PORTRAIT) at(() => cards.forEach(c => c.classList.add('on')));   // khung dọc: thẻ chỉ hiện khi tới bước đó
        else KB.features.forEach((_, i) => { at(() => cards[i].classList.add('on')); wait(T.introCard); });
        wait(st.hold || 3000);
      } else if (st.feature) {
        const i = st.feature - 1;
        marks.push(['Bước ' + st.feature + ': ' + KB.features[i].title, Math.round(t / SPEED)]);
        at(() => { setActive(i); showKw(st); }); wait(st.hold || T.featureHold);   // { feature, kw } = bật thẻ và sổ keyword cùng lúc
      } else if (st.screen) {
        const h = st.screen === 'chat' ? CHAT_HEAD : Object.assign({ logo: true, online: false, icons: false }, st.screen);
        at(() => screenEl.classList.add('swap')); wait(400);
        at(() => { setHead(h); clearChat(); screenEl.classList.remove('swap'); showKw(st); });
        wait(st.hold || 900);
      } else if (st.sep) {
        at(() => { const el = document.createElement('div'); el.className = 'sep' + (st.style ? ' ' + st.style : ''); el.textContent = st.sep; addRow(el); showKw(st); });
        wait(st.hold || T.sepHold);
      } else if (st.ad) {
        let row;
        at(() => { row = makeRow('sys', adHtml(st.ad)); addRow(row); showKw(st); });
        wait(st.press || 1800);
        at(() => { const a = $('.ad', row); if (a) a.classList.add('pressed'); });   // khách bấm "Gửi tin nhắn"
        wait(st.hold || 1200);
      } else if (st.product) {
        botMsg(st, prodHtml(st.product), '', T.cardHold);
      } else if (st.overlay) {
        at(() => { overlayEl.innerHTML = sysHtml(st.overlay); overlayEl.classList.add('on'); showKw(st); });
        wait((st.hold || 6000) - 500);
        at(() => overlayEl.classList.remove('on'));
        wait(500);
      } else if (st.endscreen) {
        const es = st.endscreen;
        at(() => {
          endEl.innerHTML = `<div class="elogo">${logoImg()}</div>` + (es.title ? `<div class="et2">${fmt(es.title)}</div>` : '')
            + (es.items ? `<ul class="eitems">${es.items.map(i => `<li>${fmt(i)}</li>`).join('')}</ul>` : '')
            + `<div class="eu">${fmt(es.sub || 'preny.ai')}</div>`;
          endEl.classList.toggle('list', !!es.items); endEl.classList.add('on');
        });
        wait(st.hold || 4000);
      } else if (st.img) {
        at(() => { addRow(makeRow('me', `<div class="photo">${art(st.img)}</div>`)); buzz(); showKw(st); });
        markBuzz(); wait(st.hold || 2400);
      } else if (st.kh !== undefined) {
        if (st.typing) {   // khách đang nhập… rồi mới gửi
          let ty;
          at(() => { ty = makeRow('me', '<div class="bubble typing"><span></span><span></span><span></span></div>'); addRow(ty); });
          wait(st.typing);
          at(() => { replaceRow(ty, makeRow('me', `<div class="bubble">${fmt(st.kh)}</div>`)); buzz(); showKw(st); });
        } else at(() => { addRow(makeRow('me', `<div class="bubble">${fmt(st.kh)}</div>`)); buzz(); showKw(st); });
        markBuzz(); wait(st.hold || readMs(st.kh));
      } else if (st.aiImg) {
        botMsg(Object.assign({ fast: true }, st), `<div class="photo">${art(st.aiImg)}</div>`, '', 1600);
      } else if (st.aiImgs) {   // AI gửi album nhiều ảnh (lưới 2×2)
        botMsg(Object.assign({ fast: true }, st), `<div class="album">${st.aiImgs.map(k => `<div>${art(k.img || k)}${k.label ? `<span>${esc(k.label)}</span>` : ''}</div>`).join('')}</div>`, '', 2400);
      } else if (st.aiVideo) {  // AI gửi video: chạy lặp, không tiếng; khi xuất MP4 thì tua theo từng khung hình
        const src = IMG[st.aiVideo] || '';
        // Chưa có video thật: chỉ hiện ảnh bìa (ảnh thật) + nút phát, không giả lập chuyển động
        const inner = src ? `<video src="${esc(src)}" muted loop playsinline preload="auto"></video>` : `${art(st.poster)}<span class="vplay">▶</span>`;
        botMsg(Object.assign({ fast: true }, st), `<div class="vid">${inner}<span class="vbadge">▶ ${esc(st.dur || '')}</span>${st.label ? `<span class="vlabel">${esc(st.label)}</span>` : ''}</div>`, '', 4000,
          r => { const v = $('video', r); if (!v) return; v.dataset.t0 = clock; if (RENDER) v.pause(); else { v.muted = true; v.play().catch(() => {}); } });
      } else if (st.ai) {
        const btns = (st.buttons || []).map(b => `<div class="bbtn">${esc(b)}</div>`).join('');
        botMsg(st, `<div class="bubble">${fmt(st.ai)}${btns}</div>`, st.ai);
      } else if (st.card) {
        const c = st.card;
        botMsg(st, hlHtml(c), [c.intro, ...c.lines, c.outro].join(' '), 7500);
      } else if (st.catalog) {
        botMsg(st, catalogHtml(st.catalog), '', 6500);
      } else if (st.tags) {
        sysBlock(st, tagsHtml(st.tags));
      } else if (st.customers) {
        sysBlock(st, customersHtml(st.customers));
      } else if (st.campaign) {
        sysBlock(st, campaignHtml(st.campaign));
      } else if (st.status) {
        sysBlock(st, hlHtml(st.status));
      } else if (st.flow) {
        sysBlock(st, flowHtml(st.flow), 1800);
      } else if (st.endcard) {
        sysBlock(st, endHtml(st.endcard), 9000);
      } else if (st.wait) {
        at(() => showKw(st));   // { wait, kw }: chỉ sổ keyword ở cột trái, điện thoại đứng yên
        wait(st.wait);
      } else if (st.end) {
        marks.push(['Kết thúc', Math.round(t / SPEED)]);
        at(outro); wait(st.hold || 600);
      }
    }
  }

  /* ---------- Đồng hồ chạy / tạm dừng ---------- */
  let idx = 0, clock = 0, playing = false, started = false, lastNow = performance.now();
  let pauseAt = null;   // chế độ bấm từng bước: tự dừng khi tới thời điểm này
  function reset() {
    clearChat(); setHead(CHAT_HEAD); screenEl.classList.remove('swap');
    buildLeft(); idx = 0; clock = 0;
  }
  function runTo(ms) { while (idx < E.length && E[idx].t <= ms) E[idx++].fn(); }
  // Đồng hồ dùng setInterval (không phụ thuộc khung hình) để vẫn chạy đúng giờ khi cửa sổ không ở phía trước.
  function tick() {
    const now = performance.now(), dt = now - lastNow; lastNow = now;
    if (!playing) return;
    clock += dt;
    if (pauseAt !== null && clock >= pauseAt) { clock = pauseAt; playing = false; pauseAt = null; }
    runTo(clock);
  }
  function hint(text, ms) {
    clearTimeout(hint.t);
    if (!text) { hintEl.classList.add('hide'); return; }
    hintEl.innerHTML = text; hintEl.classList.remove('hide');
    if (ms) hint.t = setTimeout(() => hintEl.classList.add('hide'), ms);
  }
  function audioOn() {
    started = true;
    if (!actx) { try { actx = new (window.AudioContext || window.webkitAudioContext)(); } catch (_) { actx = null; } }
    if (actx && actx.state === 'suspended') actx.resume();
  }
  function start() { audioOn(); playing = true; pauseAt = null; hint(''); }
  function togglePause() {
    if (RENDER) return;
    if (!started) return start();
    pauseAt = null; playing = !playing;
    hint(playing ? '' : '⏸ Tạm dừng · <b>Space</b> chạy tiếp · <b>→</b> từng bước · <b>R</b> chạy lại');
  }

  /* ---------- Bấm từng bước như PowerPoint ---------- */
  const PRESENT = P.get('present') === '1', EMBED = P.get('embed') === '1';
  const post = cmd => { try { parent.postMessage({ preny: cmd }, '*'); } catch (_) {} };
  const curStep = () => { let c = -1; STOPS.forEach((s, i) => { if (s.show <= clock + 5) c = i; }); return c; };
  function playStep(i) {           // chạy tự nhiên bước i (có "đang nhập…", tiếng rung) rồi dừng
    const s = STOPS[i];
    if (clock < s.start) { clock = s.start; runTo(clock); }
    pauseAt = s.show; playing = true;
  }
  function next() {
    audioOn(); hint('');
    if (playing && pauseAt !== null) { clock = pauseAt; runTo(clock); playing = false; pauseAt = null; return; }  // bấm khi đang chạy: hiện xong ngay
    playing = false; pauseAt = null;
    const i = curStep() + 1;
    if (i >= STOPS.length) { post('end'); return; }
    playStep(i);
  }
  function prev() {
    audioOn(); hint(''); playing = false; pauseAt = null;
    const c = curStep();
    if (c <= 0) { if (EMBED) post('back'); else window.__seek(0); return; }
    window.__seek(STOPS[c - 1].show);
  }
  function gotoFeature(n) {
    const i = STOPS.findIndex(s => s.feature === n);
    if (i < 0) return;
    audioOn(); hint(''); playing = false; pauseAt = null;
    window.__seek(STOPS[i].start); playStep(i);
  }
  function restart() { audioOn(); window.__seek(0); playing = false; pauseAt = null; if (PRESENT) playStep(0); else start(); }
  function fullscreen() {
    if (EMBED) return post('fullscreen');
    if (document.fullscreenElement) document.exitFullscreen(); else document.documentElement.requestFullscreen().catch(() => {});
  }
  const KEYHELP = '<b>→</b> bước tiếp · <b>←</b> lùi · <b>1–9</b> tới tính năng · <b>Space</b> tự chạy · <b>R</b> chạy lại · <b>F</b> toàn màn hình · <b>M</b> menu';
  addEventListener('keydown', e => {
    if (RENDER || e.metaKey || e.ctrlKey || e.altKey) return;
    const k = e.key;
    if (e.code === 'Space') { e.preventDefault(); togglePause(); }
    else if (k === 'ArrowRight' || k === 'PageDown' || k === 'Enter' || k === 'ArrowDown') { e.preventDefault(); next(); }
    else if (k === 'ArrowLeft' || k === 'PageUp' || k === 'ArrowUp') { e.preventDefault(); prev(); }
    else if (/^[1-9]$/.test(k)) gotoFeature(+k);
    else if (k === 'r' || k === 'R') restart();
    else if (k === 'Home') { window.__seek(0); playing = false; pauseAt = null; }
    else if (k === 'f' || k === 'F') fullscreen();
    else if (k === 'm' || k === 'M' || k === 'Escape') { if (EMBED) post('menu'); else location.href = 'trinh-chieu.html'; }
    else if (k === 'h' || k === 'H' || k === '?') hint(KEYHELP, 6000);
  });
  stage.addEventListener('click', () => (PRESENT ? next() : togglePause()));
  // Trang trình chiếu (khung ngoài) điều khiển qua postMessage
  addEventListener('message', e => {
    const m = e.data && e.data.preny;
    if (m === 'start') { audioOn(); window.__seek(0); playing = false; pauseAt = null; playStep(0); }
    else if (m === 'focus') { hint(KEYHELP, 5000); }
  });

  /* ---------- Dùng khi kiểm tra / xuất video ---------- */
  window.__seek = ms => {
    quiet = true; stage.classList.add('instant');
    reset(); clock = ms; runTo(ms);
    void stage.offsetHeight; quiet = false;
    requestAnimationFrame(() => requestAnimationFrame(() => stage.classList.remove('instant')));
  };
  window.__info = () => ({ total: E.total, buzz: buzzTimes, marks, stops: STOPS, clock, playing, w: W, h: H });
  window.__pause = () => { playing = false; };

  // Xuất video từng khung hình: tự đẩy thời gian của mọi hiệu ứng CSS theo đúng nhịp khung hình.
  let FRAME = 1000 / 30;
  const animT = new WeakMap();
  window.__renderStart = fps => { FRAME = 1000 / fps; playing = false; started = true; quiet = true; hint(''); reset(); };
  // Khi xuất từ giữa video: cho mọi hiệu ứng đang dở chạy xong ngay.
  window.__finishAll = () => {
    for (const a of document.getAnimations()) {
      const end = a.effect ? a.effect.getComputedTiming().endTime : Infinity;
      if (end === Infinity) continue;
      a.pause(); a.currentTime = end; animT.set(a, end + 1);
    }
  };
  window.__frame = t => {
    if (t < clock) reset();
    clock = t; runTo(t);
    void stage.offsetHeight;
    for (const a of document.getAnimations()) {
      if (!animT.has(a)) { a.pause(); a.currentTime = 0; animT.set(a, 0); continue; }
      const nt = animT.get(a) + FRAME;
      const end = a.effect ? a.effect.getComputedTiming().endTime : Infinity;
      if (end !== Infinity && animT.get(a) > end) continue;
      animT.set(a, nt); a.currentTime = nt;
    }
    // Video trong chat: tua đúng thời điểm của khung hình rồi mới chụp.
    const vids = [...inner.querySelectorAll('video')];
    if (!vids.length) return;
    return Promise.all(vids.map(v => new Promise(res => {
      v.pause();
      const go = () => {
        const d = v.duration || 8, tt = Math.max(0, ((t - (+v.dataset.t0 || t)) / 1000) % d);
        if (Math.abs(v.currentTime - tt) < 0.01) return res();
        const done = () => { v.removeEventListener('seeked', done); res(); };
        v.addEventListener('seeked', done); v.currentTime = tt; setTimeout(done, 1000);
      };
      if (v.readyState >= 2) go(); else { v.addEventListener('loadeddata', go, { once: true }); setTimeout(res, 3000); }
    }))).then(() => new Promise(r => requestAnimationFrame(() => r())));
  };

  reset(); compile();
  if (P.get('autoplay') === '1' && !RENDER) { started = true; playing = true; hint(''); }
  else if (PRESENT && !EMBED && !RENDER) window.__ready.then(() => { playStep(0); hint(KEYHELP, 6000); });
  else if (EMBED) hint('');
  lastNow = performance.now();
  setInterval(tick, 40);
})();
