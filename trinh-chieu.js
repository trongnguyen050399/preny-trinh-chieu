/* Trang trình chiếu Preny:
     menu chọn ngành → slide 1–6 → demo AI chat (index.html trong iframe, giữ được toàn màn hình) → slide 7–12.
   Phím: → / Space / bấm chuột = tiếp · ← = lùi · 1–9 = tới slide · Home/End · F = toàn màn hình · M / Esc = menu · D = vào demo.
   Mở thẳng một ngành: trinh-chieu.html#kb=thoi-trang-tc (thêm &demo để vào thẳng phần chat). */
(function () {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const stage = $('#stage'), demo = $('#demo');

  function fit() { const k = Math.min(innerWidth / 1920, innerHeight / 1080); stage.style.transform = `translate(-50%,-50%) scale(${k})`; }
  addEventListener('resize', fit); fit();

  /* ---------- Biểu tượng (SVG, không cần mạng) ---------- */
  const ICON = {
    sparkles: '<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4"/>',
    trend: '<path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/>',
    refresh: '<path d="M20 11a8 8 0 0 0-14.3-4.9L4 8"/><path d="M4 3v5h5"/><path d="M4 13a8 8 0 0 0 14.3 4.9L20 16"/><path d="M20 21v-5h-5"/>',
    gift: '<rect x="3" y="8" width="18" height="13" rx="2"/><path d="M12 8v13M3 12.5h18"/><path d="M12 8c-1.5-3.5-5.5-4-5.5-1.5S9.5 8 12 8zm0 0c1.5-3.5 5.5-4 5.5-1.5S14.5 8 12 8z"/>',
    megaphone: '<path d="M3 10.5v3a1 1 0 0 0 1 1h2.5L12 19V5L6.5 9.5H4a1 1 0 0 0-1 1z"/><path d="M15.5 9a4 4 0 0 1 0 6"/><path d="M18.5 6a8 8 0 0 1 0 12"/>',
    users: '<circle cx="9" cy="8" r="3.6"/><path d="M2.5 20.5a6.5 6.5 0 0 1 13 0"/><circle cx="17.5" cy="9" r="2.6"/><path d="M16.5 14.6a5 5 0 0 1 5.5 5"/>',
    zap: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
    robot: '<rect x="4" y="8" width="16" height="11" rx="4"/><path d="M12 4v4"/><circle cx="12" cy="3.5" r="1"/><circle cx="9" cy="13.5" r="1.2"/><circle cx="15" cy="13.5" r="1.2"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    chat: '<path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20l1.3-4.7A8.5 8.5 0 1 1 21 11.5z"/>',
    truck: '<path d="M2.5 6h11v10h-11z"/><path d="M13.5 9.5h4.5l3 3.5v3h-7.5"/><circle cx="6.5" cy="17.5" r="1.8"/><circle cx="17.5" cy="17.5" r="1.8"/>',
    send: '<path d="M21.5 2.5L10.5 13.5"/><path d="M21.5 2.5l-7 19-4-8-8-4z"/>',
    magnet: '<path d="M6 3.5v7.5a6 6 0 0 0 12 0V3.5"/><path d="M6 7.5h4M14 7.5h4"/>',
    bell: '<path d="M6 9a6 6 0 0 1 12 0c0 6.5 2.5 8 2.5 8h-17S6 15.5 6 9z"/><path d="M10 20.5a2.2 2.2 0 0 0 4 0"/>',
    heart: '<path d="M12 20.5s-7.5-4.6-9.3-9.3A5 5 0 0 1 12 7.3a5 5 0 0 1 9.3 3.9c-1.8 4.7-9.3 9.3-9.3 9.3z"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
    layers: '<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/>',
    chart: '<path d="M4 20V11M10 20V4M16 20v-8M21 20H3"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2.5"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    phone: '<rect x="7" y="2.5" width="10" height="19" rx="2.5"/><path d="M11 18h2"/>',
    message: '<path d="M4 4.5h16v11.5H9l-5 4z"/><path d="M8 9h8M8 12h5"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="M20.5 20.5l-4.5-4.5"/>',
    shield: '<path d="M12 2.5l8 3v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10v-6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
    call: '<path d="M6.6 3.5h2.6l1.6 4.4-2.1 1.4a11.5 11.5 0 0 0 5.9 5.9l1.4-2.1 4.4 1.6v2.6a2 2 0 0 1-2.1 2A16.5 16.5 0 0 1 4.6 5.6a2 2 0 0 1 2-2.1z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M3.5 6.5l8.5 6.5 8.5-6.5"/>',
    eye: '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    eyeoff: '<path d="M3 3l18 18"/><path d="M10.6 5.1A10.6 10.6 0 0 1 12 5c6.4 0 10 7 10 7a17 17 0 0 1-3.2 4.1M6.6 6.6C3.7 8.4 2 12 2 12s3.6 7 10 7a9.8 9.8 0 0 0 5.4-1.6"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/>',
  };
  const paint = (root = document) => $$('i[data-i]', root).forEach(el => { el.innerHTML = `<svg viewBox="0 0 24 24">${ICON[el.dataset.i] || ''}</svg>`; });
  paint();

  /* ---------- Logo khách hàng (slide 2) ---------- */
  const LOGOS = ['dien_linh', 'toshiko', 'aeg_auto', 'benh_vien_gia_dinh', 'nakawa', 'tan_dai_duong_education', 'winpi_baby', 'benh_vien_hung_viet', 'tavigo',
    'balava', 'nguoi_giu_rung', 'sr_school', 'king_wrap', 'colum_asia', 'envy_group', 'lufaco_international_trading', 'white_palace'];
  $('#logoGrid').innerHTML = LOGOS.map((n, i) => `<div class="lt" style="--i:${i}"><img src="assets/logos/${n}.webp" alt=""></div>`).join('')
    + `<div class="lt more" style="--i:${LOGOS.length}"><b class="grad">+</b>và nhiều doanh nghiệp khác</div>`;

  /* ---------- Menu: tìm kiếm + lọc theo loại ---------- */
  const LOAI = window.LOAI || { tmdt: 'Thương mại điện tử', cnn: 'Cân nhắc nhiều' };
  const LIST = (window.DANH_SACH || []).filter(x => x.hien !== false);
  const norm = s => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[đĐ]/g, 'd').toLowerCase().trim();
  const search = $('#mSearch'), grid = $('#mGrid'), empty = $('#mEmpty'), filtersEl = $('#mFilters');
  let filter = 'all', sel = 0, shown = [];
  const COLS = 5;
  function renderFilters() {
    const count = t => LIST.filter(x => t === 'all' || x.loai === t).length;
    filtersEl.innerHTML = [['all', 'Tất cả'], ['tmdt', LOAI.tmdt], ['cnn', LOAI.cnn]]
      .map(([k, t]) => `<button data-k="${k}" class="${filter === k ? 'on' : ''}">${t}<b>${count(k)}</b></button>`).join('');
  }
  function renderMenu() {
    const q = norm(search.value);
    shown = LIST.filter(x => (filter === 'all' || x.loai === filter) && (!q || norm(x.ten).includes(q) || norm(LOAI[x.loai]).includes(q)));
    sel = Math.min(sel, Math.max(0, shown.length - 1));
    grid.innerHTML = shown.map((x, i) => `<button class="mc glass" style="--i:${i}" data-kb="${x.kb}"><span class="mi">${x.icon || '💬'}</span>`
      + `<span><span class="mt">${x.ten.replace(/ (\S+)$/, ' $1')}</span><span class="mg ${x.loai}">${LOAI[x.loai] || ''}</span></span>`
      + `<span class="direct" data-direct="1">Vào thẳng chat ▸</span></button>`).join('');
    empty.classList.toggle('on', !shown.length);
    markSel();
  }
  function markSel() {
    $$('.mc', grid).forEach((c, i) => c.classList.toggle('sel', i === sel));
    const c = $$('.mc', grid)[sel]; if (c) c.scrollIntoView({ block: 'nearest' });
  }
  filtersEl.addEventListener('click', e => { const b = e.target.closest('button'); if (!b) return; filter = b.dataset.k; sel = 0; renderFilters(); renderMenu(); });
  search.addEventListener('input', () => { sel = 0; renderMenu(); });
  // Bấm chuột: tính theo chỗ NHẤN xuống. Nhấn trên nút "Vào thẳng chat" mà nhả chuột lệch ra ngoài nút vẫn vào thẳng chat.
  let downDirect = false;
  grid.addEventListener('pointerdown', e => { downDirect = !!e.target.closest('[data-direct]'); });
  grid.addEventListener('click', e => {
    const c = e.target.closest('.mc'); if (!c) return;
    const direct = downDirect || !!e.target.closest('[data-direct]');
    downDirect = false;
    choose(c.dataset.kb, direct || !$('#optSlides').checked);
  });
  renderFilters(); renderMenu();

  /* ---------- Trạng thái ---------- */
  // ALL: mọi slide trong HTML. slides: các slide của ngành đang chọn (lọc theo data-loai / data-need).
  // DEMO_AFTER: demo chat chen sau slide có data-demo-after (slide 6 tính năng).
  const ALL = $$('#vDeck .slide');
  let slides = ALL.slice(), N = slides.length, DEMO_AFTER = 6, D = {}, loai = 'tmdt';
  const maxF = s => Math.max(0, ...$$('[data-f]', s).map(e => +e.dataset.f));
  let view = 'menu', si = 0, fi = 0, kb = null, demoReady = false, wantStart = false, demoStarted = false;
  const prog = $('#progress');
  // Thanh tiến độ: N slide + 1 vạch Demo chat (nằm sau slide DEMO_AFTER). Bấm vạch nào nhảy thẳng tới đó.
  const headText = h => { const d = document.createElement('div'); d.innerHTML = h.innerHTML.replace(/<br\s*\/?>/gi, ' '); return d.textContent.replace(/\s+/g, ' ').trim(); };
  const slideTitle = (s, i) => { const h = $('h1, h2', s); return String(i + 1).padStart(2, '0') + ' · ' + (h ? headText(h) : 'Slide ' + (i + 1)); };
  function buildProgress() {
    prog.innerHTML = Array.from({ length: N + 1 }, (_, p) => {
      const tip = p === DEMO_AFTER ? 'Demo chat' : slideTitle(slides[p < DEMO_AFTER ? p : p - 1], p < DEMO_AFTER ? p : p - 1);
      return `<span data-p="${p}" data-tip="${tip.replace(/"/g, '&quot;')}"></span>`;
    }).join('');
  }
  buildProgress();
  prog.addEventListener('click', e => {
    const s = e.target.closest('span[data-p]');
    if (!s) { if (view === 'demo') { demo.focus(); try { demo.contentWindow.focus(); } catch (_) {} } return; }   // bấm trượt vào nền thanh: trả phím lại cho demo
    e.stopPropagation();
    const p = +s.dataset.p;
    if (p === DEMO_AFTER) resumeDemo();
    else goSlide(p < DEMO_AFTER ? p : p - 1, 0);
  });

  function setView(v) {
    view = v;
    if (v !== 'deck') closePanel();
    $('#vMenu').classList.toggle('on', v === 'menu');
    $('#vDeck').classList.toggle('on', v === 'deck');
    document.body.classList.toggle('menu-on', v === 'menu');
    document.body.classList.toggle('demo-on', v === 'demo');
    if (v === 'demo') { demo.focus(); try { demo.contentWindow.focus(); } catch (_) {} }
    else { demo.blur(); window.focus(); }
    if (v === 'menu') setTimeout(() => search.focus(), 50);
    renderProgress();
  }
  function renderProgress() {
    const pos = view === 'demo' ? DEMO_AFTER : (si < DEMO_AFTER ? si : si + 1);
    $$('span', prog).forEach((s, i) => { s.classList.toggle('on', i === pos); s.classList.toggle('done', i < pos); });
    const nh = typeSlides.length - N;
    $('#counter').textContent = view === 'deck' ? `${String(si + 1).padStart(2, '0')} / ${String(N).padStart(2, '0')}${nh > 0 ? ' · ẩn ' + nh : ''}` : (view === 'demo' ? 'DEMO CHAT' : '');
    $('#btnHide').classList.toggle('has', nh > 0);
  }

  /* ---------- Nhãn theo loại ngành (slide thống kê) ---------- */
  const TXT = {
    tmdt: { rate: 'Tỷ lệ chốt đơn', kpi: 'Đơn đã chốt', unit: 'đơn', act: 'chốt đơn với shop', chart: 'Đơn chốt theo ngày' },
    cnn: { rate: 'Tỷ lệ chốt SĐT', kpi: 'Số điện thoại mới', unit: 'số điện thoại', act: 'để lại số điện thoại', chart: 'SĐT mới theo ngày' },
  };
  function applyType(loai) {
    const t = TXT[loai] || TXT.tmdt;
    $$('.lbl-rate').forEach(e => { e.textContent = t.rate; });
    $$('.lbl-kpi').forEach(e => { e.textContent = t.kpi; });
    $$('.lbl-unit').forEach(e => { e.textContent = t.unit; });
    $$('.lbl-act').forEach(e => { e.textContent = t.act; });
    $$('.lbl-chart').forEach(e => { e.textContent = t.chart; });
  }

  /* ---------- Số chạy, vòng tròn ---------- */
  const nf = (v, dec) => v.toLocaleString('de-DE', { minimumFractionDigits: dec, maximumFractionDigits: dec });
  const visible = el => { const f = el.closest('[data-f]'); return !f || f.classList.contains('in'); };
  function animateCount(el) {
    const to = +el.dataset.to, dec = +(el.dataset.dec || 0), suf = el.dataset.suf || '', t0 = performance.now(), dur = 1600;
    cancelAnimationFrame(el._raf);
    const step = now => {
      const p = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - p, 3);
      el.textContent = nf(to * e, dec) + suf;
      if (p < 1) el._raf = requestAnimationFrame(step);
    };
    el._raf = requestAnimationFrame(step);
  }
  const zero = el => nf(0, +(el.dataset.dec || 0)) + (el.dataset.suf || '');
  function updateLive(s) {
    $$('.count', s).forEach(el => {
      const v = visible(el);
      if (v && !el._run) { el._run = true; animateCount(el); }
      if (!v) { el._run = false; cancelAnimationFrame(el._raf); el.textContent = zero(el); }
    });
    $$('.rfg', s).forEach(c => { c.style.strokeDashoffset = visible(c) ? 527.79 * (1 - c.dataset.pct / 100) : 527.79; });
    if ($('.track .fill', s)) s.style.setProperty('--p', s.classList.contains('on') ? '100%' : '0%');
  }
  function resetLive(s) { $$('.count', s).forEach(el => { el._run = false; cancelAnimationFrame(el._raf); el.textContent = zero(el); }); if ($('.track .fill', s)) s.style.setProperty('--p', '0%'); }

  /* ---------- Nội dung theo ngành: phần deck trong file kịch bản ----------
     data-d="a.b.0"  → innerHTML lấy từ deck (mảng → các <li>); không có dữ liệu thì giữ nội dung gốc trong HTML.
     data-dsrc="…"   → src ảnh. Slide 4–5 (thongKe), slide định nghĩa chốt đơn (chotDon), slide thẻ tag (tags) dựng bằng JS. */
  const get = (o, p) => p.split('.').reduce((a, k) => (a == null ? a : a[k]), o);
  const esc = v => String(v == null ? '' : v).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  function bind() {
    $$('#vDeck [data-d]').forEach(el => {
      if (el._def === undefined) el._def = el.innerHTML;
      const v = get(D, el.dataset.d);
      el.innerHTML = v == null ? el._def : Array.isArray(v) ? v.map(x => `<li>${x}</li>`).join('') : v;
    });
    $$('#vDeck [data-dsrc]').forEach(el => {
      if (el._def === undefined) el._def = el.getAttribute('src');
      el.setAttribute('src', get(D, el.dataset.dsrc) || el._def);
    });
  }
  function fillStats() {
    $$('.stat[data-stat]').forEach(s => {
      const st = (D.thongKe || [])[+s.dataset.stat]; if (!st) return;
      const pct = st.tyLe != null ? st.tyLe : Math.round(st.chot / st.khachMoi * 10000) / 100;
      $('.st-ten', s).innerHTML = st.ten; $('.st-ngay', s).textContent = st.ngay;
      $('.rfg', s).dataset.pct = pct; $('.rtxt .count', s).dataset.to = pct;
      $('.rnote', s).innerHTML = `${nf(st.chot, 0)} <span class="lbl-unit"></span> / ${nf(st.khachMoi, 0)} khách hàng mới`;
      const k = $$('.kpi .count', s);
      [st.khachMoi, st.chot, st.khachCu, st.tinNhan].forEach((v, i) => { if (k[i]) k[i].dataset.to = v; });
      $('.st-banner', s).innerHTML = st.banner || '';
    });
  }
  function renderPipe() {   // slide "Định nghĩa chốt đơn" (nhóm cân nhắc nhiều)
    const c = D.chotDon, el = $('#pipe'); if (!c || !el) return;
    const sh = D.shop || { name: '', initials: '' };
    const mock = b => {
      if (b.mock === 'ad') return `<div class="pm ad"><div class="pa-h"><span class="pa-av">${esc(sh.initials)}</span><span><b>${esc(sh.name)}</b><small>Được tài trợ</small></span></div>`
        + `${b.text ? `<div class="pa-t">${b.text}</div>` : ''}<img src="${esc(b.img)}" alt=""><span class="pa-btn">${esc(b.btn || 'Tìm hiểu ngay')}</span></div>`;
      if (b.mock === 'chat') return `<div class="pm chat">${b.msgs.map(([w, t]) => `<span class="pcb ${w}">${t}</span>`).join('')}<span class="pdots"><i></i><i></i><i></i></span></div>`;
      if (b.mock === 'form') return `<div class="pm form">${b.fields.map((f, i) => `<span class="pf"><i data-i="${i ? 'call' : 'users'}"></i>${esc(f)}</span>`).join('')}<span class="pok"><i data-i="check"></i>${esc(b.ok)}</span></div>`;
      if (b.mock === 'lich') return `<div class="pm lich"><div class="pcal"><i data-i="calendar"></i><div><b>${esc(b.ten)}</b><small>${esc(b.gio)}</small></div></div><span class="pok"><i data-i="check"></i>${esc(b.ok)}</span></div>`;
      if (b.mock === 'img') return `<div class="pm img"><img src="${esc(b.img)}" alt="">${b.cap ? `<span>${esc(b.cap)}</span>` : ''}</div>`;
      return '';
    };
    el.innerHTML = c.buoc.map((b, i) => (i ? `<span class="parr" data-f="${i + 1}"></span>` : '')
      + `<div class="pcard ${b.ai ? 'ai' : b.own ? 'dn' : 'hu'}${b.chot ? ' chot' : ''}" data-f="${i + 1}">`
      + (b.chot ? `<span class="pchot">★ ${esc(c.chotLa || 'AI chốt đơn = chốt lịch hẹn')}</span>` : '')
      + `<div class="pc-top"><em>${i + 1}</em><i data-i="${esc(b.icon || 'sparkles')}"></i></div>`
      + `<h3>${esc(b.t)}</h3><p>${esc(b.d)}</p>${mock(b)}`
      + `<span class="pown">${b.ai ? '<i data-i="robot"></i>Preny AI' : `<i data-i="users"></i>${esc(b.own || c.nguoi || 'Người thật')}`}</span></div>`).join('');
    paint(el);
  }
  const CH = { fb: 'f', zalo: 'Z', tiktok: '♪' };
  const tchip = ([t, k]) => `<span class="tg ${esc(k)}">${esc(t)}</span>`;
  const tav = (a, k) => `<span class="tav">${esc(a)}<s class="ch ${esc(k)}">${CH[k] || ''}</s></span>`;
  function renderTags() {   // slide theo dõi khách qua thẻ tag (nhóm cân nhắc nhiều)
    const t = D.tags; if (!t) return;
    $('#tgRows').innerHTML = t.rows.map((r, i) => `<div class="tr${i ? '' : ' first'}">${tav(r.av, r.kenh)}<div class="tb">`
      + `<div class="tn"><b>${esc(r.ten)}</b><small>${esc(r.gio)}</small></div><div class="tm">${esc(r.msg)}</div>`
      + `<div class="tt" data-f="1" style="--d:${(i * 0.12).toFixed(2)}s">${r.tags.map(tchip).join('')}</div></div></div>`).join('');
    const p = t.chanDung;
    $('#tgProf').innerHTML = `<div class="tp-h">${tav(p.av, p.kenh)}<div><b>${esc(p.ten)}</b><small>${esc(p.sub)}</small></div></div>`
      + `<div class="tp-t">Chân dung khách hàng</div>`
      + p.nhom.map(([n, cs]) => `<div class="tp-g"><span>${esc(n)}</span><div>${cs.map(tchip).join('')}</div></div>`).join('')
      + (p.ghiChu ? `<div class="tp-note"><b>AI tóm tắt</b>${esc(p.ghiChu)}</div>` : '');
  }
  function applyDeck(it) {
    loai = (it && it.loai) || 'tmdt';
    const K = window.KICH_BAN || {};
    D = Object.assign({ shop: K.shop }, K.deck || {});
    bind(); fillStats(); renderPipe(); renderTags(); applyType(loai);
    typeSlides = ALL.filter(s => (!s.dataset.loai || s.dataset.loai === loai) && (!s.dataset.need || get(D, s.dataset.need) != null));
    applyHidden();
  }

  /* ---------- Ẩn slide trong phiên này ----------
     Lưu trong sessionStorage của tab đang mở: tải lại trang vẫn giữ, đóng tab là mất, máy khác không bị ảnh hưởng.
     Ghi theo vị trí slide trong HTML nên ẩn một lần là áp dụng cho mọi ngành trong phiên. */
  const HKEY = 'preny-an-slide';
  let typeSlides = ALL.slice(), hidden = new Set();
  try { hidden = new Set(JSON.parse(sessionStorage.getItem(HKEY) || '[]')); } catch (_) {}
  const saveHidden = () => { try { sessionStorage.setItem(HKEY, JSON.stringify([...hidden])); } catch (_) {} };
  const idOf = s => ALL.indexOf(s);
  function applyHidden() {
    slides = typeSlides.filter(s => !hidden.has(idOf(s)));
    if (!slides.length) slides = typeSlides.slice();
    N = slides.length;
    const d6 = idOf($('#vDeck .slide[data-demo-after]'));
    DEMO_AFTER = slides.filter(s => idOf(s) <= d6).length;   // số slide đứng trước demo chat
    buildProgress();
  }
  function toggleHide(id) {
    const cur = slides[si];
    if (hidden.has(id)) hidden.delete(id);
    else if (typeSlides.filter(s => !hidden.has(idOf(s))).length > 1) hidden.add(id);   // luôn chừa lại ít nhất 1 slide
    afterHide(cur);
  }
  function afterHide(cur) {   // lưu lại, dựng lại danh sách slide, đứng yên ở slide đang chiếu (bị ẩn thì sang slide kế)
    saveHidden(); applyHidden();
    let k = slides.indexOf(cur);
    if (k < 0) { k = slides.findIndex(s => idOf(s) > idOf(cur)); if (k < 0) k = slides.length - 1; fi = 0; }
    si = k;
    if (view === 'deck') render(); else renderProgress();
    renderPanel();
  }
  const panel = $('#hidePanel');
  function renderPanel() {
    const d6 = idOf($('#vDeck .slide[data-demo-after]'));
    let html = '', n = 0;
    typeSlides.forEach(s => {
      const id = idOf(s), off = hidden.has(id), h = $('h1, h2', s);
      if (!off) n++;
      html += `<button class="hp-row${off ? ' off' : ''}${s === slides[si] && view === 'deck' ? ' cur' : ''}" data-id="${id}">`
        + `<span class="hp-n">${off ? '–' : String(n).padStart(2, '0')}</span><span class="hp-t">${esc(h ? headText(h) : 'Slide')}</span>`
        + `<span class="hp-s"><i data-i="${off ? 'eyeoff' : 'eye'}"></i>${off ? 'Đã ẩn' : 'Đang hiện'}</span></button>`;
      if (id === d6) html += '<div class="hp-demo">Demo chat</div>';
    });
    $('#hpList').innerHTML = html; paint($('#hpList'));
    $('#hpCount').textContent = typeSlides.length > N ? `Đang ẩn ${typeSlides.length - N} slide · bấm vào slide để ẩn / hiện` : 'Bấm vào slide để ẩn / hiện';
  }
  function openPanel() { if (view !== 'deck') return; renderPanel(); panel.classList.add('on'); }
  function closePanel() { panel.classList.remove('on'); }
  const panelOpen = () => panel.classList.contains('on');
  $('#btnHide').addEventListener('click', e => { e.stopPropagation(); panelOpen() ? closePanel() : openPanel(); });
  panel.addEventListener('click', e => {
    e.stopPropagation();
    const r = e.target.closest('.hp-row'); if (r) return toggleHide(+r.dataset.id);
    if (e.target.closest('#hpAll')) { const cur = slides[si]; hidden.clear(); afterHide(cur); }
    if (e.target.closest('.hp-x')) closePanel();
  });
  function loadKB(k) {   // nạp file kịch bản vào trang này để đọc phần deck (demo chat vẫn chạy riêng trong iframe)
    return new Promise(res => {
      window.KICH_BAN = undefined;
      const sc = document.createElement('script');
      sc.src = `kich-ban/${encodeURIComponent(k)}.js?v=${window.PRENY_V || ''}`;
      sc.onload = sc.onerror = () => { sc.parentNode && sc.parentNode.removeChild(sc); res(); };
      document.head.appendChild(sc);
    });
  }

  /* ---------- Slide ---------- */
  function render() {
    const s = slides[si];
    ALL.forEach(x => { const on = x === s; if (!on && x.classList.contains('on')) resetLive(x); x.classList.toggle('on', on); });
    $$('[data-f]', s).forEach(e => {
      const f = +e.dataset.f, out = e.dataset.out !== undefined ? +e.dataset.out : Infinity;
      e.classList.toggle('in', f <= fi && fi < out);
      e.classList.toggle('out', fi >= out);
      e.classList.toggle('now', f === fi && f > 0);
    });
    updateLive(s);
    renderProgress();
  }
  function goSlide(i, f = 0) { si = Math.max(0, Math.min(N - 1, i)); fi = f; setView('deck'); render(); }
  function goSlideFull(i) {   // lùi về slide trước: hiện đầy đủ, không chạy lại hiệu ứng
    const t = slides[i]; t.classList.add('instant'); goSlide(i, maxF(t));
    requestAnimationFrame(() => requestAnimationFrame(() => t.classList.remove('instant')));
  }
  function next() {
    if (fi < maxF(slides[si])) { fi++; render(); }
    else if (si === DEMO_AFTER - 1) enterDemo();
    else if (si < N - 1) goSlide(si + 1, 0);
  }
  function prev() {
    if (fi > 0) { fi--; render(); }
    else if (si === DEMO_AFTER) resumeDemo();
    else if (si > 0) goSlideFull(si - 1);
    else showMenu();
  }

  /* ---------- Demo chat (iframe) ---------- */
  function loadDemo() { demoReady = false; demoStarted = false; demo.src = `index.html?kb=${encodeURIComponent(kb)}&present=1&embed=1&v=${window.PRENY_V || ''}`; }
  demo.addEventListener('load', () => { demoReady = true; if (wantStart) startDemo(); });
  function startDemo() {
    wantStart = false; demoStarted = true;
    demo.contentWindow.postMessage({ preny: 'start' }, '*');
    setTimeout(() => demo.contentWindow.postMessage({ preny: 'focus' }, '*'), 400);
  }
  function enterDemo() { if (!kb) return; setView('demo'); if (demoReady) startDemo(); else wantStart = true; }
  function resumeDemo() { if (!kb) return; if (!demoStarted) return enterDemo(); setView('demo'); }   // quay lại demo: giữ nguyên chỗ đang dừng
  addEventListener('message', e => {
    const m = e.data && e.data.preny;
    if (m === 'back') { if (DEMO_AFTER > 0) goSlideFull(DEMO_AFTER - 1); else showMenu(); }
    else if (m === 'end') goSlide(DEMO_AFTER, 0);
    else if (m === 'menu') showMenu();
    else if (m === 'fullscreen') toggleFS();
  });

  let chooseSeq = 0;
  function choose(k, direct) {
    const seq = ++chooseSeq;
    kb = k;
    const it = (window.DANH_SACH || []).find(x => x.kb === k);
    $('#kbName').textContent = it ? it.ten : k;
    $('#ctaKb').textContent = it ? it.ten : '';
    history.replaceState(null, '', '#kb=' + k + (direct ? '&demo' : ''));
    loadDemo();
    loadKB(k).then(() => {
      if (seq !== chooseSeq) return;
      applyDeck(it);
      if (direct || DEMO_AFTER === 0) enterDemo(); else goSlide(0, 0);
    });
  }
  function showMenu() {
    setView('menu');
    history.replaceState(null, '', location.pathname + location.search);
    $('#kbName').textContent = '';
    markSel();
  }
  function toggleFS() {
    if (document.fullscreenElement) document.exitFullscreen(); else document.documentElement.requestFullscreen().catch(() => {});
  }

  /* ---------- Phím, chuột ---------- */
  addEventListener('keydown', e => {
    if (e.metaKey || e.ctrlKey || e.altKey || view === 'demo') return;
    const k = e.key;
    if (view === 'menu') {
      const typing = document.activeElement === search;
      const count = shown.length;
      const move = d => { if (!count) return; sel = Math.max(0, Math.min(count - 1, sel + d)); markSel(); };
      if (k === 'ArrowDown') { e.preventDefault(); move(COLS); }
      else if (k === 'ArrowUp') { e.preventDefault(); move(-COLS); }
      else if ((k === 'ArrowRight' || k === 'ArrowLeft') && (!typing || !search.value)) { e.preventDefault(); move(k === 'ArrowRight' ? 1 : -1); }
      else if (k === 'Enter') { e.preventDefault(); if (shown[sel]) choose(shown[sel].kb, !$('#optSlides').checked); }
      else if (k === 'Escape') { if (search.value) { search.value = ''; renderMenu(); } else search.blur(); }
      else if (!typing && (k === 'f' || k === 'F')) toggleFS();
      else if (!typing && k.length === 1) search.focus();   // gõ chữ bất kỳ là tìm luôn
      return;
    }
    if (panelOpen()) { if (k === 'Escape' || k === 's' || k === 'S') { e.preventDefault(); closePanel(); } return; }
    if (k === 's' || k === 'S') return openPanel();
    if (k === 'f' || k === 'F') return toggleFS();
    if (k === 'ArrowRight' || k === 'PageDown' || k === ' ' || k === 'Enter' || k === 'ArrowDown') { e.preventDefault(); next(); }
    else if (k === 'ArrowLeft' || k === 'PageUp' || k === 'ArrowUp') { e.preventDefault(); prev(); }
    else if (/^[1-9]$/.test(k) && +k <= N) goSlide(+k - 1, 0);
    else if (k === 'Home') goSlide(0, 0);
    else if (k === 'End') goSlideFull(N - 1);
    else if (k === 'm' || k === 'M' || k === 'Escape') showMenu();
    else if (k === 'd' || k === 'D') enterDemo();
  });
  $('#vDeck').addEventListener('click', () => next());

  /* ---------- Mở theo địa chỉ ---------- */
  const h = new URLSearchParams(location.hash.slice(1));
  if (h.get('kb') && (window.DANH_SACH || []).some(x => x.kb === h.get('kb'))) choose(h.get('kb'), h.has('demo'));
  else setView('menu');
})();
