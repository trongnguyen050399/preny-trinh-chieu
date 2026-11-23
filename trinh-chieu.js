/* Trang trình chiếu Preny:
     menu chọn ngành → slide 1–6 → demo AI chat (index.html trong iframe, giữ được toàn màn hình) → slide 7–12.
   Phím: → / Space / bấm chuột = tiếp · ← = lùi · 1–9 = tới slide · Home/End · F = toàn màn hình · M / Esc = menu 
   Mở thẳng một ngành: trinh-chieu.html#kb=thoi-trang-tc. Từ 23/11/2026 bỏ lối vào thẳng chat (&demo, nút Demo chat, phím D):
   mỗi ngành chỉ còn 2 bài thuyết trình (Bài 1 slide, Bài 2 video). Link cũ có &demo mở slide như thường. */
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
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M4.6 4.6l1.4 1.4M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4L6 18M18 6l1.4-1.4"/>',
    moon: '<path d="M20.5 14.5A8.5 8.5 0 1 1 9.5 3.5a7 7 0 0 0 11 11z"/>',
  };
  const paint = (root = document) => $$('i[data-i]', root).forEach(el => { el.innerHTML = `<svg viewBox="0 0 24 24">${ICON[el.dataset.i] || ''}</svg>`; });
  paint();

  /* ---------- Giao diện sáng / tối: nút ☀/☾ trên thanh trên (cả ở trang chủ), phím T khi chiếu; nhớ trên máy ---------- */
  const TKEY = 'preny-giao-dien', btnTheme = $('#btnTheme');
  function paintTheme() {
    const sang = document.documentElement.classList.contains('sang');
    btnTheme.innerHTML = `<i data-i="${sang ? 'moon' : 'sun'}"></i>`; paint(btnTheme);
    btnTheme.title = sang ? 'Đổi sang slide tối (phím T)' : 'Đổi sang slide sáng (phím T)';
  }
  function toggleTheme() {
    const sang = document.documentElement.classList.toggle('sang');
    try { localStorage.setItem(TKEY, sang ? 'sang' : 'toi'); } catch (_) {}
    paintTheme();
  }
  btnTheme.addEventListener('click', e => { e.stopPropagation(); e.currentTarget.blur(); toggleTheme(); });
  paintTheme();

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
      + `<span><span class="mt">${x.ten.replace(/ (\S+)$/, ' $1')}</span><span class="mg ${x.loai}" data-loai="${x.loai}" title="${filter === x.loai ? 'Bấm để hiện lại tất cả ngành' : 'Bấm để lọc ngành ' + (LOAI[x.loai] || '')}">${LOAI[x.loai] || ''}</span></span>`
      + `</button>`).join('');
    empty.classList.toggle('on', !shown.length);
    markSel();
  }
  function markSel() {
    $$('.mc', grid).forEach((c, i) => c.classList.toggle('sel', i === sel));
    const c = $$('.mc', grid)[sel]; if (c) c.scrollIntoView({ block: 'nearest' });
  }
  filtersEl.addEventListener('click', e => { const b = e.target.closest('button'); if (!b) return; filter = b.dataset.k; sel = 0; renderFilters(); renderMenu(); });
  // Cuộn chuột ở bất cứ đâu trên trang chủ (tiêu đề, ô tìm, khoảng trống) cũng kéo danh sách ngành
  const mList = $('#mList');
  $('#vMenu').addEventListener('wheel', e => {
    if (mList.contains(e.target)) return;   // trên danh sách: để trình duyệt tự cuộn
    e.preventDefault();
    mList.scrollTop += e.deltaMode === 1 ? e.deltaY * 40 : e.deltaY;
  }, { passive: false });
  search.addEventListener('input', () => { sel = 0; renderMenu(); });
  grid.addEventListener('click', e => {
    // Bấm nhãn loại ngành trên thẻ (Thương mại điện tử / Cân nhắc nhiều) → lọc theo loại đó; bấm lại lần nữa → hiện tất cả
    const tag = e.target.closest('.mg[data-loai]');
    if (tag) { filter = filter === tag.dataset.loai ? 'all' : tag.dataset.loai; sel = 0; renderFilters(); renderMenu(); return; }
    const c = e.target.closest('.mc'); if (!c) return;
    open1(c.dataset.kb);
  });
  renderFilters(); renderMenu();

  /* ---------- Chọn bài thuyết trình (18/11/2026): Bài 1 = slide như cũ, Bài 2 = video demo ngang tự chạy (bai2/) ---------- */
  const bch = document.createElement('div'); bch.id = 'bChoose'; bch.className = 'bch';
  $('#vMenu').appendChild(bch);
  let bchKb = null, bchSel = 0;
  function open1(k) {
    const it = LIST.find(x => x.kb === k);
    if (!it || !it.bai2) return choose(k);
    bchKb = it; bchSel = 0;
    bch.innerHTML = `<div class="bch-box glass"><div class="bch-t"><span class="mi">${it.icon || '💬'}</span><div><small>Chọn bài thuyết trình</small><b>${it.ten}</b></div></div>
      <div class="bch-row">
        <button class="bch-o" data-b="1"><em>1</em><b>Bài 1 · Slide thuyết trình</b><span>Bộ slide như cũ, bấm → để đi từng bước</span></button>
        <button class="bch-o" data-b="2"><em>2</em><b>Bài 2 · Video demo tự chạy</b><span>Điện thoại + chú thích, chạy như video, có nhạc nền</span></button>
      </div><div class="bch-k">Phím 1 / 2 · ← → chọn · Enter mở · Esc đóng</div></div>`;
    bch.classList.add('on'); paintB();
  }
  function paintB() { $$('.bch-o', bch).forEach((b, i) => b.classList.toggle('sel', i === bchSel)); }
  function closeB() { bch.classList.remove('on'); bchKb = null; }
  function goB(n) {
    const it = bchKb; closeB(); if (!it) return;
    if (n === 2) location.href = 'bai2/index.html?kb=' + encodeURIComponent(it.bai2);
    else choose(it.kb);
  }
  bch.addEventListener('click', e => { const o = e.target.closest('.bch-o'); if (o) return goB(+o.dataset.b); if (!e.target.closest('.bch-box')) closeB(); });
  addEventListener('keydown', e => {
    if (!bchKb) return;
    const k = e.key; e.stopImmediatePropagation();
    if (k === '1' || k === '2') { e.preventDefault(); goB(+k); }
    else if (k === 'ArrowLeft' || k === 'ArrowRight') { e.preventDefault(); bchSel = k === 'ArrowLeft' ? 0 : 1; paintB(); }
    else if (k === 'Enter') { e.preventDefault(); goB(bchSel + 1); }
    else if (k === 'Escape') { e.preventDefault(); closeB(); }
  }, true);

  /* ---------- Trạng thái ---------- */
  // ALL: mọi slide trong HTML. slides: các slide của ngành đang chọn (lọc theo data-loai / data-need).
  // DEMO_AFTER: demo chat chen sau slide có data-demo-after (slide 6 tính năng). Thương mại điện tử (pipeline 16/11/2026) không có demo chat: DEMO_AFTER = -1.
  const ALL = $$('#vDeck .slide');
  let slides = ALL.slice(), N = slides.length, DEMO_AFTER = 6, D = {}, loai = 'tmdt';
  const maxF = s => Math.max(0, ...$$('[data-f]', s).map(e => +e.dataset.f));
  let view = 'menu', si = 0, fi = 0, kb = null, demoReady = false, wantStart = false, demoStarted = false;
  const prog = $('#progress');
  const hasDemo = () => DEMO_AFTER >= 0;
  // Demo chat (iframe) chen sau slide 6 hay không, theo nhóm ngành. Từ 16/11/2026 cả 2 nhóm dùng pipeline mới: không chen, chỉ mở thẳng từ menu.
  const CO_DEMO = { tmdt: false, cnn: false };
  const segOf = i => (hasDemo() && i >= DEMO_AFTER ? i + 1 : i);          // vạch của slide i trên thanh tiến độ
  const slideOfSeg = p => (hasDemo() && p > DEMO_AFTER ? p - 1 : p);
  // Thanh tiến độ: N slide + 1 vạch Demo chat (nằm sau slide DEMO_AFTER). Bấm vạch nào nhảy thẳng tới đó.
  const headText = h => { const d = document.createElement('div'); d.innerHTML = h.innerHTML.replace(/<br\s*\/?>/gi, ' '); return d.textContent.replace(/\s+/g, ' ').trim(); };
  const slideTitle = (s, i) => { const h = $('h1, h2', s); return String(i + 1).padStart(2, '0') + ' · ' + (h ? headText(h) : 'Slide ' + (i + 1)); };
  function buildProgress() {
    prog.innerHTML = Array.from({ length: N + (hasDemo() ? 1 : 0) }, (_, p) => {
      const tip = hasDemo() && p === DEMO_AFTER ? 'Demo chat' : slideTitle(slides[slideOfSeg(p)], slideOfSeg(p));
      return `<span data-p="${p}" data-tip="${tip.replace(/"/g, '&quot;')}"></span>`;
    }).join('');
  }
  buildProgress();
  prog.addEventListener('click', e => {
    const s = e.target.closest('span[data-p]');
    if (!s) { if (view === 'demo') { demo.focus(); try { demo.contentWindow.focus(); } catch (_) {} } return; }   // bấm trượt vào nền thanh: trả phím lại cho demo
    e.stopPropagation();
    const p = +s.dataset.p;
    if (hasDemo() && p === DEMO_AFTER) resumeDemo();
    else goSlide(slideOfSeg(p), 0);
  });

  function setView(v) {
    view = v;
    if (v !== 'deck') closePanel();
    $('#vMenu').classList.toggle('on', v === 'menu');
    $('#vDeck').classList.toggle('on', v === 'deck');
    document.body.classList.toggle('menu-on', v === 'menu');
    document.body.classList.toggle('demo-on', v === 'demo');
    $('#vDoc').classList.toggle('on', v === 'doc');
    document.body.classList.toggle('doc-on', v === 'doc');
    if (v === 'demo') { demo.focus(); try { demo.contentWindow.focus(); } catch (_) {} }
    else { demo.blur(); window.focus(); }
    if (v === 'menu') setTimeout(() => search.focus(), 50);
    renderProgress();
  }
  function renderProgress() {
    const pos = view === 'demo' ? DEMO_AFTER : segOf(si);
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
      paint(el);   // chữ theo ngành có thể kèm icon <i data-i>
    });
    $$('#vDeck [data-dsrc]').forEach(el => {
      if (el._def === undefined) el._def = el.getAttribute('src');
      el.setAttribute('src', get(D, el.dataset.dsrc) || el._def);
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
    const dl = i => ` style="--d:${(0.25 + i * 0.16).toFixed(2)}s"`;   // vào là hiện hết (người dùng dặn 16/11/2026), không bấm từng ô
    el.innerHTML = c.buoc.map((b, i) => (i ? `<span class="parr" data-f="0"${dl(i - 0.5)}></span>` : '')
      + `<div class="pcard ${b.ai ? 'ai' : b.own ? 'dn' : 'hu'}${b.chot ? ' chot' : ''}" data-f="0"${dl(i)}>`
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

  /* ========== Pipeline thương mại điện tử (người dùng chốt 16/11/2026, TRINH-CHIEU.md mục 1) ==========
     Slide thống kê kiểu trang Thống kê Preny (deck.dashboard), giới thiệu chatbot (deck.chatbot), 50% khách cũ,
     Meta CAPI (đơn lấy từ deck.chatbot.don), after sale (deck.afterSale). Chữ trong dữ liệu được dùng **đậm** và \n xuống dòng. */
  const md = v => String(v == null ? '' : v).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>').replace(/\n/g, '<br>');
  const vnd = n => nf(n, 0) + 'đ';
  const pct = v => +v.toFixed(2) + '%';   // như trang Thống kê: 66.67%, 75%
  const donTong = d => d.sp.reduce((a, p) => a + p.sl * p.gia, 0) + (d.ship || 0);   // ship: phí giao (nếu có), cộng vào tổng

  // --- Slide thống kê: số minh họa sinh cố định theo tên case (cùng tên → cùng số), tỷ lệ tổng nằm trong [min, max] (mặc định 51–59%) ---
  function rng(str) {
    let a = 0; for (const ch of String(str)) a = (Math.imul(a, 31) + ch.charCodeAt(0)) | 0;
    return () => { a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  }
  function dashData(c) {
    const r = rng(c.ten + (c.seed || '')), base = c.khach || 10, rate = c.tyLe || 0.55, n = c.soNgay || 7, lo = c.min || 0.51, hi = c.max || 0.59;   // tránh số tròn 50%, 60%
    const sum = (rows, i) => rows.reduce((a, x) => a + x[i], 0);
    let rows = c.rows || null, last;
    for (let k = 0; !rows && k < 200; k++) {
      last = Array.from({ length: n }, () => {
        const kh = Math.max(3, Math.round(base * (0.55 + r() * 0.9)));
        const don = Math.min(kh, Math.max(1, Math.round(kh * (rate - 0.2 + r() * 0.4))));
        const cu = Math.round(base * (0.08 + r() * 0.42));
        const blk = r() < 0.45 ? 0 : 1 + Math.floor(r() * 5);
        const blt = blk ? blk + Math.floor(r() * 3) : 0;
        return [kh, don, cu, blk, blt, Math.round(kh * (3.2 + r() * 1.8) + cu * 1.6)];
      });
      const tr = sum(last, 1) / sum(last, 0);
      if (tr >= lo && tr <= hi) rows = last;
    }
    rows = rows || last;
    const tot = [0, 1, 2, 3, 4, 5].map(i => sum(rows, i));
    return { rows, tot, rate: tot[1] / tot[0] * 100, tinMoi: Math.round(tot[5] * (1.9 + r() * 0.3)), tang: [0, 1, 2, 3].map(() => 18 + Math.round(r() * 46)) };
  }
  const SIDE = [['robot', 'Đào tạo Bot'], ['chat', 'Chat đa kênh', 'Miễn phí'], ['', 'Tin nhắn đa kênh'], ['', 'Tích hợp nền tảng'], ['users', 'AI Mini CRM', 'Miễn phí'],
    ['megaphone', 'Remarketing'], ['layers', 'Đơn hàng', 'HOT'], ['chart', 'Thống kê'], ['clock', 'Hạn mức sử dụng'], ['trend', 'Nâng cấp'], ['message', 'Bài viết'], ['shield', 'Cài đặt']];
  function renderDash() {
    const L = loai === 'cnn' ? { don: 'Số điện thoại mới', kpi: 'Số điện thoại mới', unit: 'Số điện thoại', rate: 'Tỷ lệ chốt SĐT' }
      : { don: 'Đơn hàng mới', kpi: 'Số đơn hàng mới', unit: 'Đơn hàng', rate: 'Tỷ lệ chốt đơn' };
    $$('#vDeck .sdash').forEach(s => {
      const c = (D.dashboard || [])[+s.dataset.dash];
      if (!c) { s.innerHTML = ''; return; }
      const d = dashData(c), [dd, mm, yy] = String(c.den || '21/07/2026').split('/').map(Number);
      const day = i => new Date(yy, mm - 1, dd - i);
      const f2 = x => String(x).padStart(2, '0');
      const dmy = (x, sep) => [f2(x.getDate()), f2(x.getMonth() + 1), x.getFullYear()].join(sep);
      const kpi = [['chat', d.tot[0], 'Số hội thoại mới'], ['phone', d.tot[1], L.kpi], ['refresh', d.tot[2], 'Khách hàng cũ tương tác qua tin nhắn'], ['users', d.tinMoi, 'Tổng số tin nhắn mới']];
      const cell = (v, u) => `<span><b>${nf(v, 0)}</b><small>${u}</small></span>`;
      s.innerHTML = `<div class="head" data-f="0"><div class="eyebrow"><i data-i="chart"></i>Thống kê trên hệ thống Preny</div><h2 class="t2">${c.ten}</h2></div>`
        + `<div class="pw" data-f="0" data-a="zoom" style="--d:.12s">`
        + `<aside class="pw-side"><img src="assets/img/logo-white.png" alt="Preny"><div class="pw-use"><span>Cuộc hội thoại</span><b>${nf(c.dung || 387, 0)} / 5.000</b><i style="--w:${Math.round((c.dung || 387) / 50)}%"></i></div>`
        + SIDE.map(([ic, t, tag]) => `<div class="pw-mi${ic ? '' : ' ss'}${t === 'Thống kê' ? ' on' : ''}">${ic ? `<i data-i="${ic}"></i>` : ''}<span>${t}</span>${tag ? `<em class="${tag === 'HOT' ? 'hot' : ''}">${tag}</em>` : ''}</div>`).join('')
        + `</aside><nav class="pw-sub">${[['globe', 'Trang'], ['chat', 'Tương tác'], ['layers', 'Thẻ'], ['target', 'Thẻ hiện tại'], ['users', 'Trạng thái']]
          .map(([ic, t]) => `<div class="${t === 'Tương tác' ? 'on' : ''}"><i data-i="${ic}"></i>${t}</div>`).join('')}</nav>`
        + `<main class="pw-main"><div class="pw-top"><h3>Thống kê</h3><span class="pw-date">${dmy(day(d.rows.length - 1), '/')} - ${dmy(day(0), '/')}<i data-i="calendar"></i></span>`
        + `<span class="pw-sel">Lọc theo sale</span><span class="pw-sel">Lọc theo trang</span></div>`
        + `<div class="pw-kpis">${kpi.map(([ic, v, t], i) => `<div class="pk"><span class="pk-i k${i}"><i data-i="${ic}"></i></span><div><b>${nf(v, 0)}</b><em>↗ ${d.tang[i]}%</em><small>${t}</small></div></div>`).join('')}</div>`
        + `<div class="pw-card"><h4>Thống kê chi tiết</h4><div class="pw-tb">`
        + `<div class="pr ph"><span>Thời gian</span><span>Khách hàng mới</span><span>${L.don}</span><span>Khách cũ tương tác lại</span><span>Bình luận bởi khách hàng</span><span>Bình luận bởi trang</span><span>Tin nhắn bởi trang</span><span>${L.rate}</span></div>`
        + d.rows.map((x, i) => `<div class="pr" style="--i:${i}"><span>${dmy(day(i), '-')}</span>${x.map(v => `<span>${nf(v, 0)}</span>`).join('')}<span><b>${pct(x[1] / x[0] * 100)}</b></span></div>`).join('')
        + `<div class="pr pt"><span>Tổng</span>${cell(d.tot[0], 'Khách hàng mới')}${cell(d.tot[1], L.unit)}${cell(d.tot[2], 'Khách hàng')}${cell(d.tot[3], 'Bình luận')}${cell(d.tot[4], 'Bình luận')}${cell(d.tot[5], 'Tin nhắn')}`
        + `<span class="pc"><b>${pct(d.rate)}</b><svg class="pw-ring" viewBox="0 0 200 100" preserveAspectRatio="none"><path pathLength="1" d="M48 12 C 110 -2, 192 8, 194 46 C 196 82, 140 96, 96 95 C 44 94, 6 80, 6 50 C 6 24, 40 10, 92 8 C 120 7, 150 9, 168 16"/></svg></span></div>`
        + `</div></div></main></div>`;
      paint(s);
    });
  }

  // --- Mẩu chat hiện dần trong 1 lần bấm. Trả về html + mốc thời gian (marks.ai1, ai2…: lúc AI trả lời; marks.don: lúc hiện màn hình Tạo đơn) ---
  const okCard = d => `<span class="mok-t"><i data-i="check"></i>Đã tạo đơn <b>${esc(d.ma)}</b></span>`
    + d.sp.map(p => `<span>${p.dv ? `${esc(p.ten)} · ${p.sl} ${esc(p.dv)}` : `${p.sl} ${esc(p.ten)}`}</span>`).join('')   // dv: đơn vị (đêm, khách, hộp)
    + `<span>Tổng: <b>${vnd(donTong(d))}</b>${d.phi ? ' · ' + esc(d.phi) : ''}</span>`;
  // Nhóm cân nhắc nhiều: AI chốt = lấy SĐT → thẻ "đã lưu khách" thay cho thẻ "đã tạo đơn"
  const leadCard = d => `<span class="mok-t"><i data-i="check"></i>${esc(d.okTieuDe || 'Đã lưu khách, chuyển cho sale')}</span>`
    + `<span>${esc(d.ten)} · ${esc(d.sdt)}</span>` + (d.lich ? `<span>${esc(d.lich[0])}: <b>${esc(d.lich[1])}</b></span>` : '') + `<span>Phụ trách: <b>${esc(d.sale)}</b></span>`;
  const carHTML = sp => `<div class="car-tr">${sp.map(p => `<div class="cc"><img src="${esc(p.img)}" alt=""><div class="cc-b"><b>${esc(p.ten)}</b>`
    + `<span>${p.cu ? `<s>${vnd(p.cu)}</s>` : ''}${vnd(p.gia)}</span></div><span class="cc-btn">${esc(p.nut || 'Mua kèm')}</span></div>`).join('')}</div>`;
  const fmmHTML = f => `<div class="fmm-img"><img src="${esc(f.img)}" alt="">${f.nhan ? `<span class="fmm-tag">${esc(f.nhan)}</span>` : ''}</div>`
    + `<div class="fmm-b"><b>${md(f.ten)}</b><span>${md(f.mo)}</span></div><div class="fmm-btn"><span class="pri">${esc(f.nut || 'Xem sản phẩm')}</span><span>Liên hệ CSKH</span></div>`;
  const zbsHTML = z => (z.img ? `<div class="zbs-img"><img src="${esc(z.img)}" alt=""></div>` : '')
    + `<div class="zbs-b"><div class="zbs-oa"><span class="av">${esc((D.shop || {}).initials)}</span><b>${esc((D.shop || {}).name)}</b></div><b class="zbs-t">${md(z.ten)}</b><p>${md(z.mo)}</p>`
    + `<div class="zbs-tb">${z.dong.map(([k, v]) => `<span>${esc(k)}</span><b>${md(v)}</b>`).join('')}</div></div>`
    + `<div class="zbs-btn"><span class="pri">${esc(z.nut || 'Dùng voucher ngay')}</span><span>Liên hệ CSKH</span></div>`;
  function chatSeq(items, o = {}) {
    let t = o.t0 == null ? 400 : o.t0, h = '', ai = 0;
    const ts = o.ts != null ? ` data-ts="${o.ts}"` : '', marks = {};
    const put = (cls, inner) => { h += `<div class="${cls}" data-t="${t}"${ts}>${inner}</div>`; };
    items.forEach(m => {
      if (m.sep) { put('mtag', md(m.sep)); t += 700; }
      else if (m.ref) { put('mref', `<img src="${esc(m.ref.img)}" alt=""><span>${md(m.ref.nhan || 'Khách nhắn từ quảng cáo')}<b>${md(m.ref.ten)}</b></span>`); t += 1000; }
      else if (m.anh) { put('mpic', `<img src="${esc(m.anh)}" alt="">`); t += 1000; }
      else if (m.kh) { put('mb me', md(m.kh)); t += 800 + Math.min(1500, m.kh.length * 13); }
      else if (m.ai) {
        h += `<div class="mty" data-t="${t}" data-tx="${t + 800}"${ts}><i></i><i></i><i></i></div>`; t += 800;
        marks['ai' + (++ai)] = t;
        put('mb bot', md(m.ai));
        if (m.meta) put('mmeta', md(m.meta));
        t += 1000 + Math.min(2400, m.ai.length * 15);
      }
      else if (m.pill) { put('mpill ' + (m.mau || 'green'), md(m.pill)); t += 900; }
      else if (m.don) { marks.don = t; t += 3500; }                      // màn hình Tạo đơn tự điền xong mới hiện tin kế
      else if (m.ok) { const d = m.ok === true ? (o.lead || o.don) : m.ok; put('mok', d.sp ? okCard(d) : leadCard(d)); t += 1400; }   // ok: true → đơn (hoặc khách) của slide
      else if (m.car) { put('car', carHTML(m.car)); t += 3600; }
      else if (m.fmm) { put('fmm', fmmHTML(m.fmm)); t += 1200; }
      else if (m.zbs) { put('zbs', zbsHTML(m.zbs)); t += 1200; }
    });
    return { html: h, t, marks };
  }
  // Mỗi tin một lần bấm: tin thứ k có data-f = f0 + k; tin AI hiện dấu "đang nhập…" 0,7 giây rồi mới hiện; vạch thời gian đi kèm tin kế tiếp.
  function chatSteps(items, f0, o = {}) {
    let f = f0 - 1, h = '', ai = 0, seps = [];
    const marks = {};
    const el = (cls, inner, t, tx) => `<div class="${cls}" data-f="${f}" data-t="${t}"${tx != null ? ` data-tx="${tx}"` : ''}>${inner}</div>`;
    items.forEach(m => {
      if (m.sep) { seps.push(m.sep); return; }
      f++;
      seps.forEach(x => { h += el('mtag', md(x), 0); }); seps = [];
      if (m.kh) h += el('mb me', md(m.kh), 0);
      else if (m.ai) {
        h += el('mty', '<i></i><i></i><i></i>', 0, 700);
        marks['ai' + (++ai)] = f;
        h += el('mb bot', md(m.ai), 700);
        if (m.meta) h += el('mmeta', md(m.meta), 700);
      }
      else if (m.don) marks.don = f;
      else if (m.ok) { const d = m.ok === true ? (o.lead || o.don) : m.ok; h += el('mok', d.sp ? okCard(d) : leadCard(d), 0); }
      else if (m.pill) h += el('mpill ' + (m.mau || 'green'), md(m.pill), 0);
      else if (m.anh) h += el('mpic', `<img src="${esc(m.anh)}" alt="">`, 0);
    });
    return { html: h, marks, last: f };
  }
  const phoneHead = (sub, tag) => `<div class="mh"><span class="av">${esc((D.shop || {}).initials)}</span><div><b>${esc((D.shop || {}).name)}</b><small>${sub}</small></div>${tag ? `<em class="htag green">${tag}</em>` : ''}</div>`;

  // --- Màn hình Tạo đơn của Preny, AI tự điền từ cuộc chat (giống form người dùng gửi 16/11/2026). T: lúc màn hình hiện ---
  function donPanel(d, T) {
    const v = (ms, txt, cls) => `<i class="od-v${cls ? ' ' + cls : ''}" data-t="${T + ms}">${txt}</i>`;
    const sl = d.sp.reduce((a, p) => a + p.sl, 0);
    return `<div class="od-badge"><i data-i="robot"></i>AI tự điền từ cuộc chat</div>`
      + `<div class="od-tabs"><span>Thông tin</span><span class="on">Tạo đơn</span></div>`
      + `<div class="od-sec"><h5>Thông tin khách hàng</h5><div class="od-2"><span class="od-in">${v(500, esc(d.ten))}</span><span class="od-in">${v(800, esc(d.sdt))}</span></div>`
      + `<div class="od-in tall">${v(1100, esc(d.diaChi))}</div></div>`
      + `<div class="od-sec"><div class="od-h"><h5>Sản phẩm</h5><span class="od-sel">Kho mặc định</span></div>`
      + `<div class="od-tb"><div class="od-th"><span>Tên sản phẩm</span><span>Số lượng</span><span>Đơn giá</span><span>Thành tiền</span></div>`
      + d.sp.map((p, i) => `<div class="od-tr" data-t="${T + 1500 + i * 250}"><span class="od-p"><img src="${esc(p.img)}" alt=""><b>${esc(p.ten)}</b></span>`
        + `<span class="od-box">${p.sl}</span><span class="od-box">${nf(p.gia, 0)}</span><b>${vnd(p.sl * p.gia)}</b></div>`).join('') + `</div>`
      + `<div class="od-search"><i data-i="search"></i><span>Tìm kiếm sản phẩm bằng tên</span><span class="od-chk">Còn hàng</span><span class="od-plus">+</span></div>`
      + `<div class="od-sum">Tổng khối lượng sản phẩm: <b>${sl} sản phẩm</b></div></div>`
      + (d.ghiChu ? `<div class="od-sec"><h5>Ghi chú đơn</h5><div class="od-in tall">${v(1900, md(d.ghiChu))}</div></div>`
        : `<div class="od-sec"><div class="od-h"><h5>Vận chuyển</h5><span class="od-sel w">Chọn đơn vị vận chuyển</span></div><div class="od-2"><span class="od-in ph">Mã vận đơn</span><span class="od-in ph">Phí<b>${nf(d.ship || 0, 0)}</b></span></div></div>`)
      + `<div class="od-tot">${v(2100, vnd(donTong(d)))}</div>`
      + `<div class="od-btns"><span class="od-b sq"><i data-i="refresh"></i></span><span class="od-b">Xem chi tiết</span><span class="od-b pri" data-t="${T + 2600}">Tạo đơn</span></div>`
      + `<div class="od-toast" data-t="${T + 2900}"><i data-i="check"></i>Đã tạo đơn <b>${esc(d.ma)}</b></div>`;
  }

  // --- Nhóm cân nhắc nhiều: màn hình Thông tin khách hàng trên Preny, AI tự điền, gắn thẻ, xếp lịch, chuyển cho sale ---
  function leadPanel(d, T) {
    const v = (ms, txt) => `<i class="od-v" data-t="${T + ms}">${txt}</i>`;
    return `<div class="od-badge"><i data-i="robot"></i>AI tự điền từ cuộc chat</div>`
      + `<div class="od-tabs"><span class="on">Thông tin</span><span>Tạo đơn</span></div>`
      + `<div class="od-sec"><h5>Thông tin khách hàng</h5><div class="od-2"><span class="od-in">${v(500, esc(d.ten))}</span><span class="od-in">${v(800, esc(d.sdt))}</span></div>`
      + `<div class="od-in tall">${v(1100, md(d.nhuCau))}</div></div>`
      + `<div class="od-sec"><h5>Thẻ khách hàng</h5><div class="od-tags">${d.the.map(([t, k], i) => `<span class="tg ${esc(k)}" data-t="${T + 1400 + i * 220}">${esc(t)}</span>`).join('')}</div></div>`
      + (d.lich ? `<div class="od-sec"><h5>${esc(d.lichNhan || 'Lịch hẹn')}</h5><div class="od-cal" data-t="${T + 2300}"><i data-i="calendar"></i><div><b>${esc(d.lich[0])}</b><small>${esc(d.lich[1])}</small></div></div></div>` : '')
      + `<div class="od-sec"><div class="od-h"><h5>Phụ trách</h5><span class="od-sel w">${v(2500, esc(d.sale))}</span></div></div>`
      + `<div class="od-btns"><span class="od-b sq"><i data-i="refresh"></i></span><span class="od-b">Xem chi tiết</span><span class="od-b pri" data-t="${T + 2800}">${esc(d.nut || 'Chuyển cho sale')}</span></div>`
      + `<div class="od-toast" data-t="${T + 3100}"><i data-i="check"></i>${esc(d.xong || 'Đã chuyển cho sale')}</div>`;
  }

  // --- Slide giới thiệu AI chatbot ---
  function renderBot() {
    const c = D.chatbot, M = $('#cbMsgs'); if (!c || !M) return;
    const first = c.chat[0] && c.chat[0].ref ? [c.chat[0]] : [];
    const s0 = chatSeq([{ sep: c.gio || 'Khách nhắn lúc 22:47 · ngoài giờ làm việc' }, ...first], { ts: 0, t0: 500 });
    // Mỗi lần bấm 1 tin (người dùng chọn 17/11/2026), điện thoại đứng yên. Màn hình Tạo đơn / lưu khách là 1 lần bấm riêng,
    // tiếp theo thẻ đã tạo đơn, rồi case khách gửi hình, bấm thêm là sang slide kế.
    const sq = chatSteps(c.chat.slice(first.length), 1, { don: c.don, lead: c.lead }), F = sq.marks.don, IMGF = sq.last + 1;
    M.innerHTML = s0.html + sq.html; paint(M);
    const P = $('#cbDon'); P.innerHTML = c.lead ? leadPanel(c.lead, 0) : donPanel(c.don, 0);
    P.dataset.t = 0; P.dataset.f = F; P.dataset.out = IMGF; paint(P);
    const rows = $$('#vDeck .scb .cbf');   // ý bên trái sáng dần theo cuộc chat
    [sq.marks.ai1, sq.marks.ai2, F].forEach((f, i) => { if (rows[i]) { rows[i].dataset.t = 0; rows[i].dataset.ts = f || 1; } });
    if (rows[3]) { rows[3].dataset.f = IMGF; rows[3].dataset.t = 700; }
    const a = c.anh, I = $('#cbImg'); I.dataset.f = IMGF;
    const sq2 = chatSeq([{ sep: a.nhan || 'Khách gửi ảnh, không ghi tên mẫu' }, { anh: a.img }, { kh: a.kh }, { ai: a.ai }, { pill: a.pill || '🔍 AI nhìn ảnh, nhận ra đúng mẫu khách hỏi' }], { t0: 700 });
    I.innerHTML = `<div class="scr">${phoneHead('Đang hoạt động', 'Preny AI')}<div class="msgs">${sq2.html}</div></div>`;
  }

  // --- Slide 50%: vẽ đúng 2 cột khoanh đỏ trên trang Thống kê Preny (ảnh người dùng gửi, 8 ngày) ---
  const S50 = { moi: [17, 37, 51, 62, 46, 37, 62, 47], cu: [23, 44, 30, 23, 29, 23, 40, 31] };
  function renderS50() {
    const el = $('#s50Tab'); if (!el || el.innerHTML) return;
    const col = (h, a, u, k) => `<div class="s5c" style="--k:${k}"><div class="s5h">${h}</div>${a.map((v, i) => `<div class="s5r" style="--i:${i}">${v}</div>`).join('')}`
      + `<div class="s5t"><b>${nf(a.reduce((x, y) => x + y, 0), 0)}</b><small>${u}</small></div></div>`;
    el.innerHTML = col('Khách hàng mới', S50.moi, 'Khách hàng mới', 0) + col('Khách cũ tương tác lại', S50.cu, 'Khách hàng', 1) + '<div class="s5cap">Trích trang Thống kê trên Preny</div>';
  }

  // --- Slide Meta CAPI: đơn vừa tạo → Preny → Meta nhận sự kiện Purchase ---
  const CAPI_TXT = {
    don: { h2: 'Chốt đơn xong, AI <span class="grad">tự gửi sự kiện mua hàng</span><br>lên Facebook',
      ben: ['Facebook biết chính xác ai đã mua', 'Tìm thêm khách giống người đã mua', 'Tối ưu quảng cáo theo đơn thật, không chỉ tin nhắn'] },
    lead: { h2: 'Có SĐT xong, AI <span class="grad">tự gửi sự kiện Lead</span><br>lên Facebook',
      ben: ['Facebook biết chính xác ai để lại SĐT', 'Tìm thêm khách giống khách tiềm năng', 'Tối ưu quảng cáo theo lead thật, không chỉ tin nhắn'] },
  };
  function renderCapi() {
    const c = D.chatbot, el = $('#cpRow'); if (!c || !el) return;
    const s = $('#vDeck .scapi'), tx = CAPI_TXT[c.lead ? 'lead' : 'don'];
    $('h2', s).innerHTML = tx.h2;
    $$('.cp-ben em', s).forEach((e, i) => { e.textContent = tx.ben[i]; });
    if (c.lead) return renderCapiLead(c, el);
    const d = c.don, tot = donTong(d), p = d.sp[0];
    const ev = (cls, t, val, khi) => `<div class="cp-ev${cls}"${t != null ? ` data-t="${t}"` : ''}><span class="ei"><i data-i="check"></i></span><div><b>Purchase</b><small>Mua hàng · ${nf(val, 0)} VND · ${khi}</small></div><em>Đã nhận</em></div>`;
    el.innerHTML = `<div class="cp-card cp-don" data-t="0"><div class="cp-h"><i data-i="check"></i>Đơn mới trên Preny</div>`
      + `<div class="cp-p"><img src="${esc(p.img)}" alt=""><b>${esc(p.ten)}</b></div>`
      + `<div class="cp-l"><span>Mã đơn</span><b>${esc(d.ma)}</b></div><div class="cp-l"><span>Khách hàng</span><b>${esc(d.ten)}</b></div>`
      + `<div class="cp-l"><span>Giá trị</span><b class="v">${vnd(tot)}</b></div></div>`
      + `<div class="cp-arr" data-t="700"><span>gửi ngay</span></div>`
      + `<div class="cp-hub" data-t="1000"><span class="hub-ring"></span><div class="hub-core"><img src="assets/img/logo-white.png" alt=""><small>Conversions API</small></div></div>`
      + `<div class="cp-arr" data-t="1600"><span>Purchase</span></div>`
      + `<div class="cp-card cp-meta" data-t="1900"><div class="cp-h meta"><b class="mlogo">∞</b>Meta · Trình quản lý sự kiện</div>`
      + ev(' new', 2500, tot, 'vừa xong') + ev('', null, Math.round(tot * 1.6 / 1000) * 1000, '12 phút trước') + ev('', null, Math.round(tot * 0.7 / 1000) * 1000, '41 phút trước')
      + `<div class="cp-src">Nguồn: máy chủ (Conversions API) · khớp với khách nhắn từ quảng cáo</div></div>`;
    paint(el);
  }
  function renderCapiLead(c, el) {
    const d = c.lead, ref = (c.chat[0] || {}).ref || {}, sdt = String(d.sdt).replace(/(\d{4})\s?(\d{3})\s?(\d{3})/, '$1 *** $3');
    const ev = (cls, t, ten, mo, khi) => `<div class="cp-ev${cls}"${t != null ? ` data-t="${t}"` : ''}><span class="ei"><i data-i="check"></i></span><div><b>${ten}</b><small>${mo} · ${khi}</small></div><em>Đã nhận</em></div>`;
    el.innerHTML = `<div class="cp-card cp-don" data-t="0"><div class="cp-h"><i data-i="check"></i>Khách mới để lại SĐT trên Preny</div>`
      + (ref.img ? `<div class="cp-p"><img src="${esc(ref.img)}" alt=""><b>${esc(ref.ten)}</b></div>` : '')
      + `<div class="cp-l"><span>Khách hàng</span><b>${esc(d.ten)}</b></div><div class="cp-l"><span>SĐT</span><b>${esc(sdt)}</b></div>`
      + `<div class="cp-l"><span>${d.lich ? esc(d.lich[0]) : 'Phụ trách'}</span><b class="v sm">${esc(d.lich ? d.lich[1] : d.sale)}</b></div></div>`
      + `<div class="cp-arr" data-t="700"><span>gửi ngay</span></div>`
      + `<div class="cp-hub" data-t="1000"><span class="hub-ring"></span><div class="hub-core"><img src="assets/img/logo-white.png" alt=""><small>Conversions API</small></div></div>`
      + `<div class="cp-arr" data-t="1600"><span>Lead</span></div>`
      + `<div class="cp-card cp-meta" data-t="1900"><div class="cp-h meta"><b class="mlogo">∞</b>Meta · Trình quản lý sự kiện</div>`
      + ev(' new', 2500, 'Lead', 'Khách để lại SĐT', 'vừa xong') + ev('', null, 'Schedule', 'Đặt lịch hẹn', '12 phút trước') + ev('', null, 'Lead', 'Khách để lại SĐT', '41 phút trước')
      + `<div class="cp-src">Nguồn: máy chủ (Conversions API) · khớp với khách nhắn từ quảng cáo</div></div>`;
    paint(el);
  }

  // --- Slide after sale: bấm 1 upsell 5 thẻ sản phẩm, bấm 2 tin Facebook FMM + Zalo ZBS ---
  function renderAfter() {
    const a = D.afterSale; if (!a || !$('#asMsg1')) return;
    const don = a.don || (D.chatbot || {}).don;
    $('#asMsg1').innerHTML = chatSeq([{ sep: a.gio || 'Khách vừa chốt đơn' }, ...(don ? [{ ok: don }] : [])], { ts: 0, t0: 500 }).html
      + chatSeq([{ ai: a.loi }, { car: a.sp }, { kh: a.khach }, ...(a.pill ? [{ pill: a.pill }] : [])], { ts: 1, t0: 300 }).html;
    $('#asMsg2').innerHTML = chatSeq([{ sep: a.fmm.sep || '1 tuần sau · tin Facebook FMM' }, { ai: a.fmm.chao }, { fmm: a.fmm }], { t0: 500 }).html;
    $('#asZalo').innerHTML = `<div class="scr zscr"><div class="zh"><span class="zb">‹</span><span class="av">${esc((D.shop || {}).initials)}</span>`
      + `<div><b>${esc((D.shop || {}).name)}</b><small>Official Account</small></div></div>`
      + `<div class="msgs zmsgs">${chatSeq([{ sep: a.zbs.sep || 'Cùng lúc · tin Zalo ZBS' }, { zbs: a.zbs }], { t0: 1100 }).html}</div></div>`;
    paint($('#vDeck .sas'));
  }

  /* Slide 6: ngành bán hàng vật lý / có lên đơn → 6 tính năng (mặc định).
     Ngành không lên đơn (khóa học, dịch vụ…) → kịch bản chỉ ghi 5 tính năng: ô 6 ẩn, ô 4–5 dời vào giữa cột phải. */
  const CONN = { c4: ['M1090 640 C 1160 640, 1170 450, 1260 450', 'M1090 640 C 1160 640, 1170 542, 1260 542'],
                 c5: ['M1120 640 C 1180 640, 1200 635, 1260 635', 'M1090 640 C 1160 640, 1170 727, 1260 727'] };
  function layoutFeats() {
    const s = $('#vDeck .s6'); if (!s) return;
    const n5 = Array.isArray(D.tinhNang) && D.tinhNang.length === 5;
    s.classList.toggle('n5', n5);
    $('.core-n', s).innerHTML = `${n5 ? 5 : 6} tính năng<br>tăng doanh số`;
    [$('.feat.k6', s), $('.conn.c6', s)].forEach(e => n5 ? e.removeAttribute('data-f') : e.setAttribute('data-f', '6'));
    const cta = $('.cta', s), noDemo = !CO_DEMO[loai];
    cta.parentNode.hidden = noDemo;
    if (noDemo) cta.removeAttribute('data-f'); else cta.dataset.f = n5 ? '6' : '7';
    const bd = $('#vDeck .sbd .bd-stat');
    if (bd) { bd.hidden = noDemo; if (noDemo) bd.removeAttribute('data-f'); else bd.dataset.f = '10'; }
    Object.keys(CONN).forEach(k => $('.conn.' + k, s).setAttribute('d', CONN[k][n5 ? 1 : 0]));
  }
  function applyDeck(it) {
    loai = (it && it.loai) || 'tmdt';
    const K = window.KICH_BAN || {};
    D = Object.assign({ shop: K.shop }, K.deck || {});
    bind(); renderPipe(); renderTags(); renderDash(); renderBot(); renderS50(); renderCapi(); renderAfter(); layoutFeats(); applyType(loai);
    typeSlides = ALL.filter(s => (!s.dataset.loai || s.dataset.loai === loai) && (!s.dataset.need || get(D, s.dataset.need) != null));
    applyHidden();
    fitF5(); if (document.fonts) document.fonts.ready.then(fitF5);
  }
  // Slide tổng kết 5 ô (cân nhắc nhiều): ngành nào chữ dài quá ô (ô cao cố định, che phần thừa) thì thu nhỏ cả 5 ô cùng một cỡ tới khi vừa.
  // Đo bằng kích thước bố cục (không dùng getBoundingClientRect) nên không lệch vì hiệu ứng trượt lên của [data-f].
  function fitF5() {
    const s = $('#vDeck .s11c'); if (!s) return;
    const cols = $$('.f5', s);
    const over = () => cols.some(c => { const u = $('ul', c), h = $('.f5h', c); return u && u.scrollHeight > c.clientHeight - (h ? h.offsetHeight : 0) + 16; });
    let fs = 24; s.style.setProperty('--f5fs', fs + 'px');
    while (fs > 17 && over()) s.style.setProperty('--f5fs', --fs + 'px');
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
    DEMO_AFTER = CO_DEMO[loai] ? slides.filter(s => idOf(s) <= d6).length : -1;   // số slide đứng trước demo chat
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
      if (id === d6 && hasDemo()) html += '<div class="hp-demo">Demo chat</div>';
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

  /* ---------- Hiện theo nhịp thời gian trong một lần bấm (data-t) ----------
     data-t="ms": phần tử hiện (thêm class .sh) sau ms kể từ lúc tới bước của nó; data-tx="ms": ẩn lại lúc đó (dấu "đang nhập…").
     Bước của phần tử: data-ts nếu có, không thì data-f của chính nó hoặc thẻ cha gần nhất.
     Lùi lại hay nhảy về slide trước thì hiện hết ngay (.nz: không chạy hiệu ứng). Bấm → khi đang chạy dở: hiện xong ngay. */
  const tTimers = new Set();
  let tLast = { s: null, fi: -1 };
  window.__tBusy = () => tTimers.size;   // dùng khi kiểm tra tự động
  const tStep = e => { if (e.dataset.ts != null) return +e.dataset.ts; const h = e.closest('[data-f]'); return h ? +h.dataset.f : 0; };
  function runT(s, animate) {
    tTimers.forEach(clearTimeout); tTimers.clear();
    const later = (ms, fn) => { const id = setTimeout(() => { tTimers.delete(id); fn(); }, ms); tTimers.add(id); };
    $$('[data-t]', s).forEach(e => {
      const f = tStep(e), tx = e.dataset.tx != null ? +e.dataset.tx : null;
      if (f > fi) { e.classList.toggle('sh', false); e.classList.toggle('nz', false); return; }
      if (f < fi || !animate) { e.classList.toggle('sh', tx == null); e.classList.add('nz'); return; }
      e.classList.toggle('sh', false); e.classList.toggle('nz', false);
      later(+e.dataset.t, () => e.classList.add('sh'));
      if (tx != null) later(tx, () => e.classList.toggle('sh', false));
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
    const animate = !s.classList.contains('instant') && (tLast.s !== s || fi > tLast.fi);
    runT(s, animate); tLast = { s, fi };
    renderProgress();
  }
  function goSlide(i, f = 0) { si = Math.max(0, Math.min(N - 1, i)); fi = f; setView('deck'); render(); }
  function goSlideFull(i) {   // lùi về slide trước: hiện đầy đủ, không chạy lại hiệu ứng
    const t = slides[i]; t.classList.add('instant'); goSlide(i, maxF(t));
    requestAnimationFrame(() => requestAnimationFrame(() => t.classList.remove('instant')));
  }
  function next() {
    if (tTimers.size) return runT(slides[si], false);   // đang chạy dở: hiện xong bước này trước
    if (fi < maxF(slides[si])) { fi++; render(); }
    else if (hasDemo() && si === DEMO_AFTER - 1) enterDemo();
    else if (si < N - 1) goSlide(si + 1, 0);
  }
  function prev() {
    if (fi > 0) { fi--; render(); }
    else if (hasDemo() && si === DEMO_AFTER) resumeDemo();
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
  function enterDemo() { openDoc(); }    // từ 17/11/2026 mọi lối vào demo đều mở demo chat dọc (demo-doc.js); iframe cũ chỉ còn để xuất video
  function resumeDemo() { openDoc(); }

  /* ---------- Demo chat dọc (demo-doc.js) ----------
     Mở bất cứ lúc nào (nút "Demo chat" cạnh tên ngành, phím D, "Vào thẳng chat" ở menu). Thoát: nút "Về slide", Esc, M,
     hoặc bấm → sau tin cuối. Thoát xong quay lại đúng slide, đúng bước đang chiếu; mở từ menu thì về slide 1. */
  let docFrom = null;
  function openDoc() {
    if (!kb || !window.DemoDoc || !window.KICH_BAN) return;
    if (view !== 'doc') docFrom = { view, si, fi };
    setView('doc');
    window.DemoDoc.open(window.KICH_BAN, $('#vDoc'), { onExit: closeDoc });
  }
  function closeDoc() {
    if (view !== 'doc') return;
    window.DemoDoc.close();
    const f = docFrom || { view: 'menu' }; docFrom = null;
    if (f.view !== 'deck') return goSlide(0, 0);
    si = Math.min(f.si, N - 1); fi = f.fi;
    const t = slides[si]; t.classList.add('instant'); setView('deck'); render();
    requestAnimationFrame(() => requestAnimationFrame(() => t.classList.remove('instant')));
  }
  addEventListener('message', e => {
    const m = e.data && e.data.preny;
    if (m === 'back') { if (DEMO_AFTER > 0) goSlideFull(DEMO_AFTER - 1); else showMenu(); }
    else if (m === 'end') { if (hasDemo()) goSlide(DEMO_AFTER, 0); else showMenu(); }   // thương mại điện tử: demo chỉ mở thẳng từ menu
    else if (m === 'menu') showMenu();
    else if (m === 'fullscreen') toggleFS();
  });

  let chooseSeq = 0;
  function choose(k) {
    const seq = ++chooseSeq;
    kb = k;
    const it = (window.DANH_SACH || []).find(x => x.kb === k);
    $('#kbName').textContent = it ? it.ten : k;
    $('#ctaKb').textContent = it ? it.ten : '';
    history.replaceState(null, '', '#kb=' + k);
    loadKB(k).then(() => {
      if (seq !== chooseSeq) return;
      applyDeck(it);
      goSlide(0, 0);
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
    if (view === 'doc') {   // demo chat dọc: → tin kế, Space tự chạy / tạm dừng, ← lùi, Esc / M về slide, F toàn màn hình
      if (k === ' ') { e.preventDefault(); window.DemoDoc.toggleAuto(); }
      else if (k === 'ArrowRight' || k === 'PageDown' || k === 'Enter' || k === 'ArrowDown') { e.preventDefault(); window.DemoDoc.next(); }
      else if (k === 'ArrowLeft' || k === 'PageUp' || k === 'ArrowUp') { e.preventDefault(); window.DemoDoc.prev(); }
      else if (k === 'Escape' || k === 'm' || k === 'M') { e.preventDefault(); window.DemoDoc.exit(); }
      else if (k === 'f' || k === 'F') toggleFS();
      return;
    }
    if (view === 'menu') {
      const typing = document.activeElement === search;
      const count = shown.length;
      const move = d => { if (!count) return; sel = Math.max(0, Math.min(count - 1, sel + d)); markSel(); };
      if (k === 'ArrowDown') { e.preventDefault(); move(COLS); }
      else if (k === 'ArrowUp') { e.preventDefault(); move(-COLS); }
      else if ((k === 'ArrowRight' || k === 'ArrowLeft') && (!typing || !search.value)) { e.preventDefault(); move(k === 'ArrowRight' ? 1 : -1); }
      else if (k === 'Enter') { e.preventDefault(); if (shown[sel]) open1(shown[sel].kb, false); }
      else if (k === 'Escape') { if (search.value) { search.value = ''; renderMenu(); } else search.blur(); }
      else if (!typing && (k === 'f' || k === 'F')) toggleFS();
      else if (!typing && k.length === 1) search.focus();   // gõ chữ bất kỳ là tìm luôn
      return;
    }
    if (panelOpen()) { if (k === 'Escape' || k === 's' || k === 'S') { e.preventDefault(); closePanel(); } return; }
    if (k === 's' || k === 'S') return openPanel();
    if (k === 'f' || k === 'F') return toggleFS();
    if (k === 't' || k === 'T') return toggleTheme();
    if (k === 'ArrowRight' || k === 'PageDown' || k === ' ' || k === 'Enter' || k === 'ArrowDown') { e.preventDefault(); next(); }
    else if (k === 'ArrowLeft' || k === 'PageUp' || k === 'ArrowUp') { e.preventDefault(); prev(); }
    else if (/^[1-9]$/.test(k) && +k <= N) goSlide(+k - 1, 0);
    else if (k === 'Home') goSlide(0, 0);
    else if (k === 'End') goSlideFull(N - 1);
    else if (k === 'm' || k === 'M' || k === 'Escape') showMenu();
  });
  $('#vDeck').addEventListener('click', () => next());

  /* ---------- Mở theo địa chỉ ---------- */
  const h = new URLSearchParams(location.hash.slice(1));
  if (h.get('kb') && (window.DANH_SACH || []).some(x => x.kb === h.get('kb'))) choose(h.get('kb'));
  else setView('menu');
})();
