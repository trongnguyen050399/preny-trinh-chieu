/* Video demo NGANG 16:9: chạy theo dòng thời gian (không bấm từng bước), tua được, dừng được, quay MP4 được.
   Dữ liệu: window.VN_KB (kich-ban-yame.js). Mỗi bước (beat) sinh ra các sự kiện có mốc thời gian; phát = chạy lần lượt
   các sự kiện bằng setTimeout (đồng hồ ảo khi quay MP4), tua = dựng lại từ đầu và áp nhanh mọi sự kiện trước mốc đó.
   ?quay=1: chế độ quay (ẩn thanh duyệt, không tự phát, không phát nhạc trực tiếp; quay-ngang.py điều khiển). */
(function () {
  'use strict';
  const KB = window.VN_KB;
  const QUAY = new URLSearchParams(location.search).has('quay');
  if (QUAY) document.body.classList.add('quay');
  const esc = v => String(v == null ? '' : v).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const md = v => esc(v).replace(/\*\*(.+?)\*\*/g, '<b>$1</b>');
  const IMG = k => (KB.anh && KB.anh[k]) || ('assets/yame/' + k + '.jpg');   // KB.anh: khóa → đường dẫn ảnh riêng của kịch bản
  const LOGO = 'assets/logo-preny-trang.svg';
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const plain = s => String(s || '').replace(/\*\*/g, '');
  const SVG = (d, vb = '0 0 24 24') => `<svg viewBox="${vb}">${d}</svg>`;
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
  };

  /* ---------------- dựng khung ---------------- */
  const stage = document.getElementById('stage');
  const E = {};
  let INSTANT = false;
  function mk(html) { const t = document.createElement('template'); t.innerHTML = html.trim(); const el = t.content.firstElementChild; if (INSTANT) el.classList.add('na'); return el; }

  function skeleton() {
    stage.innerHTML = `
      <div class="bg"></div>
      <div class="intro"><img src="${LOGO}" alt="Preny"><div class="lg-tag">AGENTIC AI SALES</div></div>
      <div class="main">
        <aside class="cap-col">
          <div class="brand"><img src="${LOGO}" alt="Preny"><span>× <b>${esc(KB.shop.ten)}</b></span></div>
          <div class="scene-chip"></div>
          <div class="caps"></div>
        </aside>
        <div class="phone"><div class="screen">
          <div class="island"></div>
          <div class="sbar"><span class="clk">21:00</span><span class="ic">${IC.signal}${IC.wifi}${IC.battery}</span></div>
          <div class="views"></div><div class="blank"></div><div class="tapdot"></div>
        </div></div>
        <div class="panel"></div>
      </div>
      <div class="tk"></div>
      <div class="outro"><img src="${LOGO}" alt="Preny"><div class="lg-tag">AGENTIC AI SALES</div>
        <div class="lg-sub">${esc(KB.ketSub || 'Để AI bán hàng cho shop của bạn')}<br><b>preny.ai</b></div></div>`;
    for (const k of ['intro', 'main', 'caps', 'outro', 'views', 'blank', 'tapdot', 'panel', 'tk']) E[k] = stage.querySelector('.' + k);
    if (KB.tongKet) E.tk.innerHTML = tongKetHtml(KB.tongKet);
    E.chip = stage.querySelector('.scene-chip'); E.clk = stage.querySelector('.clk');
    E.fb = null; E.cmts = []; E.ms = null; E.body = null; E.typing = null;
  }

  /* ---------------- slide tổng kết 5 cột (cuối video) ---------------- */
  const TI = {
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    bot: '<path d="M12 8V4"/><circle cx="12" cy="3" r="1"/><rect width="16" height="12" x="4" y="8" rx="3"/><circle cx="9" cy="14" r="1.4"/><circle cx="15" cy="14" r="1.4"/>',
    bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
    heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    calendar: '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    refresh: '<path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v5"/>',
  };
  function tongKetHtml(t) {
    return `<div class="tk-chip">⚡ TỔNG KẾT</div><h2 class="tk-h">${esc(t.tieuDe)} <span>${esc(t.em)}</span></h2>
      <div class="tk-row">${t.cot.map((c, i) => `${i ? '<i class="tk-ar">→</i>' : ''}<div class="tk-col c${i + 1}" style="--i:${i}">
        <div class="tk-top"><small>${i + 1}</small><svg viewBox="0 0 24 24">${TI[c.icon] || ''}</svg><b>${esc(c.ten)}</b></div>
        <ul>${c.dong.map(x => `<li>${esc(x)}</li>`).join('')}</ul></div>`).join('')}</div>`;
  }

  /* ---------------- màn hình trong điện thoại ---------------- */
  const ymAv = (cls = '') => `<span class="av ym ${cls}"${KB.shop.mau ? ` style="background:${KB.shop.mau}"` : ''}>${esc(KB.shop.av || KB.shop.ten)}</span>`;
  function swapView(el) {
    const old = [...E.views.children];
    E.views.appendChild(el);
    void el.offsetWidth;
    el.classList.add('on');
    old.forEach(o => { o.classList.remove('on'); o.classList.add('off'); setTimeout(() => o.remove(), INSTANT ? 0 : 700); });
    if (INSTANT) old.forEach(o => o.remove());
  }
  function fbView(p, ad) {
    const el = mk(`<div class="view v-fb">
      <div class="fb-top"><span class="fb-logo">facebook</span><span class="fb-dots"><i></i><i></i><i></i></span></div>
      <div class="fb-body">
        <div class="post-h">${ymAv()}<div><div class="n">${esc(KB.shop.ten)}</div><div class="m">${ad ? 'Được tài trợ' : esc(p.gio)} · 🌐</div></div></div>
        <div class="post-t">${md(p.text).replace(/#([\wÀ-ỹ]+)/g, '<span class="hs">#$1</span>')}</div>
        <img class="post-img" src="${IMG(p.img)}" alt="">
        ${ad ? `<div class="ad-cta"><div class="l"><small>${esc(p.nhan)}</small><div>${esc(p.tieuDe)}</div></div><span class="ad-btn">${esc(p.nut)}</span></div>` : ''}
        <div class="post-stat"><span>👍❤️ ${esc(p.likes || '864')}</span><span>${esc(p.soCmt || '57 bình luận')}</span></div>
        <div class="post-act"><span>Thích</span><span>Bình luận</span><span>Chia sẻ</span></div>
        <div class="cmts"></div>
      </div></div>`);
    E.fb = el; E.cmts = []; E.ms = null; E.body = null;
    swapView(el);
  }
  function fbScroll() {
    const b = E.fb && E.fb.querySelector('.fb-body'); if (!b) return;
    b.style.scrollBehavior = INSTANT ? 'auto' : 'smooth'; b.scrollTop = b.scrollHeight;
  }
  function msView(ref) {
    const el = mk(`<div class="view v-ms">
      <div class="ms-top"><span class="bk">${IC.back}</span>${ymAv('on')}<div class="nm"><div>${esc(KB.shop.ten)}</div><small>${esc(KB.shop.sub)}</small></div>
        <span class="tic">${IC.phone}${IC.video}${IC.info}</span></div>
      <div class="ms-body"></div>
      <div class="ms-in">${IC.plus}${IC.camera}${IC.image}${IC.mic}<span class="box">Aa</span>${IC.like}</div></div>`);
    E.ms = el; E.body = el.querySelector('.ms-body'); E.fb = null;
    swapView(el);
    if (ref) E.body.appendChild(mk(`<div class="ref"><img src="${IMG(ref.img)}" alt=""><div>${esc(ref.dong1)}</div><b>${esc(ref.dong2)}</b></div>`));
  }
  function zlView(b) {
    const el = mk(`<div class="view v-zl">
      <div class="zl-top"><span class="bk">${IC.back}</span>${ymAv()}<div class="nm"><div>${esc(KB.shop.ten)} <i class="oa">✓</i></div><small>Official Account</small></div>
        <span class="tic">${IC.phone}${IC.video}</span></div>
      <div class="ms-body"></div>
      <div class="ms-in zl-in">${IC.image}<span class="box">Tin nhắn</span>${IC.mic}</div></div>`);
    E.ms = el; E.body = el.querySelector('.ms-body'); E.fb = null;
    stage.querySelector('.screen').classList.add('zl');
    swapView(el);
    E.body.appendChild(mk(`<div class="stamp">${esc(b.gio)}, ${esc(b.ngay)} <span class="chip">⏩ ${esc(b.chip)}</span></div>`));
  }
  function msScroll() {
    const b = E.body; if (!b) return;
    b.style.scrollBehavior = INSTANT ? 'auto' : 'smooth'; b.scrollTop = b.scrollHeight;
  }
  function addRow(side, inner) {
    const prev = E.body.lastElementChild;
    if (prev && prev.classList.contains('row') && prev.classList.contains(side)) prev.classList.remove('last');
    const row = mk(`<div class="row ${side} last">${side === 'ai' ? ymAv('xs') : ''}${inner}</div>`);
    E.body.appendChild(row); msScroll(); return row;
  }
  function aiTyping(on) {
    if (E.typing) { E.typing.remove(); E.typing = null; }
    if (on && E.body) { E.typing = mk(`<div class="row ai last">${ymAv('xs')}<span class="dots"><i></i><i></i><i></i></span></div>`); E.body.appendChild(E.typing); msScroll(); }
  }
  function aiInner(b) {
    if (b.card) return `<div class="bb card">${esc(b.card.title)}<small>Giá: ${esc(b.card.gia)}${b.card.cu ? `<s>${esc(b.card.cu)}</s>` : ''}</small></div>`;
    if (b.img) return `<img class="pic" src="${IMG(b.img)}" alt="">`;
    if (b.imgs) return `<div class="album${b.imgs.length === 2 ? ' two' : ''}">${b.imgs.map(k => `<img src="${IMG(k)}" alt="">`).join('')}</div>`;
    if (b.review) { const r = b.review; return `<div class="rv"><div class="rv-h"><span class="av sm" style="background:${r.mau || '#EC4899'}">${esc(r.av)}</span><div><b>${esc(r.ten)}</b><small>${esc(r.sub)}</small></div></div>
      <div class="rv-s">★★★★★</div><p>${md(r.text)}</p>${r.note ? `<small class="rv-n">${esc(r.note)}</small>` : ''}</div>`; }
    if (b.checks) return `<div class="bb ck2"><b class="ckt">${esc(b.checks.tieuDe)}</b>${b.checks.dong.map(x => `<div class="ckl"><i>✓</i><span>${md(x)}</span></div>`).join('')}</div>`;
    return `<div class="bb">${md(b.text)}${b.nut ? `<span class="btn">${esc(b.nut)}</span>` : ''}</div>`;
  }
  function khInner(b) {
    if (b.shot) return `<div class="shot"><div class="sh">${ymAv('xs')}<b>${esc(KB.shop.ten)}<small>Được tài trợ · 🌐</small></b></div><p>${esc(b.shot.cap)}</p><img src="${IMG(b.shot.img)}" alt=""></div>`;
    return `<div class="bb">${md(b.text)}</div>`;
  }

  /* ---------------- chú thích bên trái ---------------- */
  function addCap(b) {
    const old = [...E.caps.children].filter(c => !c.classList.contains('gone'));
    old.forEach(c => c.classList.remove('cur'));
    const el = mk(`<div class="cap cur"><div class="ce">${esc(b.e)}</div><div class="ct">${esc(b.t)}</div>${b.s ? `<div class="cs">${esc(b.s)}</div>` : ''}</div>`);
    E.caps.appendChild(el);
    const keep = 4;
    old.slice(0, Math.max(0, old.length + 1 - keep)).forEach(c => { if (INSTANT) c.remove(); else { c.classList.add('gone'); setTimeout(() => c.remove(), 460); } });
  }

  /* ---------------- màn hình phụ ---------------- */
  const D = KB.donHang || {};
  const P = KB.panels || {};
  const head = (t, chip) => `<div class="pn-h"><img src="${LOGO}" alt=""><div>${esc(t)}</div><small>${esc(chip)}</small></div>`;
  const BUILD = {
    tag: d => { let n = 0; return `<div class="pn">${head(d.tieuDe || 'Thẻ khách hàng', 'Preny tự gắn')}
      <div class="pn-b">
        <div class="cust"><span class="av">${esc(d.av)}</span><div><b>${esc(d.ten)}</b><small>${esc(d.sub)}</small></div></div>
        ${d.nhom.map(([lb, the]) => `<div class="pn-lb">${esc(lb)}</div><div class="tags">${the.map(([t, c]) => `<span class="tg ${c}" data-a="tag${++n}">${esc(t)}</span>`).join('')}</div>`).join('')}
        <div class="im" data-a="im"><span class="clk"></span>${esc(d.im)}</div>
        <div class="pn-lb">${esc(d.rule.lb)}</div>
        <div class="rule" data-a="rule"><div class="rh">${esc(d.rule.tieuDe)}<span class="sw"></span></div>
          ${d.rule.dong.map(([t, x], i) => `<div class="rs" data-a="r${i + 1}"><span>${esc(t)}</span><div>${esc(x)}</div><em>Chờ gửi</em></div>`).join('')}</div>
        <div class="st g" data-a="reply"><span class="ck">✓</span>${esc(d.reply)}</div>
      </div></div>`; },
    capi: d => `<div class="pn">${head(d.tieuDe, 'Conversions API')}
      <div class="pn-b">
        <div class="flow" data-a="flow"><div class="node"><i class="pr"><img src="${LOGO}" alt=""></i>Preny AI</div>
          <div class="line"><span class="pk">${esc(d.pk)}</span></div><div class="node"><i class="mt">∞</i>Meta</div></div>
        <div class="ev" data-a="event">
          <div class="ev-h"><div><small>${esc(d.nhan)}</small><b>${esc(d.event)}</b></div><strong>${esc(d.giaTri)}</strong></div>
          <table>${d.dong.map(([k, v]) => `<tr><td>${esc(k)}</td><td>${esc(v)}</td></tr>`).join('')}</table></div>
        <div class="st g" data-a="ok"><span class="ck">✓</span>${esc(d.ok)}</div>
        <div class="note">${d.khong ? esc(d.khong) + ' ' : ''}Hiển thị mô phỏng (demo). Chỉ gửi dữ liệu khi đã kết nối và được phép.</div>
      </div></div>`,
    // Đơn tự động. Nhãn đổi được theo ngành (đặt phòng, đặt tour…): D.loai ('Đơn hàng'), D.spNhan ('Sản phẩm'), D.phi ([nhãn, giá trị]),
    // D.nguoiNhan ('Người nhận · Số điện thoại'), D.dcNhan ('Địa chỉ'), D.tong (mặc định = D.gia)
    don: () => `<div class="pn">${head((D.loai || 'Đơn hàng') + ' ' + D.ma, 'Tạo tự động')}
      <div class="pn-b">
        <span class="od-st" data-st>● Đang tạo đơn…</span>
        <div class="fld" data-a="f1"><small>${esc(D.spNhan || 'Sản phẩm')}</small></div>
        <div class="od-p" data-a="f1" style="opacity:0;transition:opacity .4s"><img src="${IMG(D.img)}" alt=""><div>${esc(D.sp)}<small>${esc(D.bien)}</small></div><strong>${esc(D.gia)}</strong></div>
        <div data-a="f2" style="opacity:0;transition:opacity .4s"><div class="od-r"><span>Tạm tính</span><b>${esc(D.gia)}</b></div>
          <div class="od-r"><span>${esc((D.phi || [])[0] || 'Phí vận chuyển')}</span><span>${esc((D.phi || [])[1] || 'tính khi giao')}</span></div>
          <div class="od-r tot"><span>Tổng cộng</span><span>${esc(D.tong || D.gia)}</span></div></div>
        <div class="fld" data-a="f3"><small>${esc(D.nguoiNhan || 'Người nhận · Số điện thoại')}</small><div>${esc(D.ten)} · ${esc(D.sdt)}</div></div>
        <div class="fld" data-a="f4"><small>${esc(D.dcNhan || 'Địa chỉ')}</small><div>${esc(D.dc)}</div></div>
        ${D.nv ? `<div class="nv" data-a="nv"><span class="av">${esc(D.nv.av)}</span><div><b>🔔 Đơn mới từ AI cần xác nhận</b><small>Gửi tới ${esc(D.nv.ten)}</small></div><span class="nvb">Xác nhận đơn</span></div>` : ''}
        <div class="od-f" data-a="xn" style="opacity:0;transition:opacity .4s"><span>Tạo từ cuộc chat · ${esc(D.gio)}</span><b>Powered by Preny.AI</b></div>
      </div></div>`,
    // có SĐT → báo ngay cho nhân viên sale vào gọi, chăm sóc (ngành cân nhắc nhiều, không lên đơn tự động)
    sale: d => `<div class="pn">${head(d.tieuDe || 'Báo khách mới cho Sale', 'Tự động')}
      <div class="pn-b">
        <div class="nt" data-a="s1"><span class="bell">🔔</span><div><b>${esc(d.ntTieuDe || 'Khách mới vừa để lại SĐT')}</b><small>${esc(d.nguon)}</small></div><em>Vừa xong</em></div>
        <div class="fld" data-a="s2"><small>${esc(d.khNhan || 'Khách hàng · Số điện thoại')}</small><div>${esc(d.ten)} · ${esc(d.sdt)}</div></div>
        <div class="fld" data-a="s3"><small>Nhu cầu</small><div>${esc(d.nhuCau)}</div></div>
        ${d.lich ? `<div class="fld" data-a="s3"><small>${esc(d.lichNhan || 'Lịch khách muốn')}</small><div>${esc(d.lich)}</div></div>` : ''}
        <div class="tags" style="margin-top:14px">${d.the.map(([t, c]) => `<span class="tg ${c}" data-a="s4">${esc(t)}</span>`).join('')}</div>
        <div class="asg" data-a="s5"><span class="av">${esc(d.sale.av)}</span><div><b>${esc(d.sale.ten)}</b><small>${esc(d.sale.sub)}</small></div><span class="call">📞 Gọi ngay</span></div>
        <div class="st g" data-a="s6"><span class="ck">✓</span>${esc(d.ok)}</div>
      </div></div>`,
  };
  const panelHtml = v => { const d = P[v]; return BUILD[(d && d.kieu) || v](d); };
  function setPanel(v) {
    if (!v) { E.panel.classList.remove('on'); return; }
    const el = mk(panelHtml(v));
    if (E.panel.classList.contains('on') && !INSTANT) { el.style.animation = 'pop .5s cubic-bezier(.2,.8,.2,1) both'; }
    E.panel.innerHTML = ''; E.panel.appendChild(el);
    E.panel.classList.add('on');
  }
  function panelAct(a) {
    E.panel.querySelectorAll(`[data-a="${a}"]`).forEach(x => { x.classList.add('on'); if (x.style.opacity === '0') x.style.opacity = '1'; });
    if (/^r\d$/.test(a)) E.panel.querySelectorAll(`[data-a="${a}"] em`).forEach(x => { x.textContent = '✓ Đã gửi'; });
    const st = E.panel.querySelector('[data-st]');
    if (a === 'cho' && st) { st.classList.add('wait'); st.textContent = '⏳ Chờ nhân viên xác nhận'; }
    if (a === 'bam') { const bt = E.panel.querySelector('.nvb'); if (bt) { bt.classList.add('press'); bt.textContent = '✓ Đã xác nhận'; } }
    if (a === 'xn' && st) { st.classList.remove('wait'); st.classList.add('ok'); st.textContent = D.nv ? '✓ Nhân viên đã xác nhận · đơn đã lên' : '✓ Đã xác nhận · shop chỉ việc giao'; }
  }

  /* ---------------- biên dịch kịch bản → sự kiện có mốc thời gian ---------------- */
  let EV = [], TOTAL = 0, MARKS = [];
  const H = {
    // mốc 0 chỉ có nền tím; logo hiện dần từ 0,15 giây. Logo mờ đi thì cảnh 1 (đã có bài viết trong điện thoại) hiện lên ngay.
    intro: (b, at) => { at(150, () => E.intro.classList.add('on')); at(b.d - 700, () => E.intro.classList.remove('on')); return b.d - 700; },
    canh: (b, at, i) => {
      const first = !EV.some(e => e.k === 'canh');
      at(0, () => {
        E.chip.textContent = b.nhan; E.clk.textContent = b.gio;
        [...E.caps.children].forEach(c => c.remove());
        setPanel(null);
        if (!first) { E.blank.classList.add('on'); }
      }, 'canh');
      if (!first) { at(450, () => { E.views.innerHTML = ''; E.fb = E.ms = E.body = null; }); at(500, () => E.blank.classList.remove('on')); return 900; }
      at(0, () => E.main.classList.add('on'));
      return 0;
    },
    cap: (b, at) => { at(0, () => addCap(b)); return 0; },
    fb: (b, at) => { at(0, () => fbView(b.post, false)); return b.d || 1600; },
    ad: (b, at) => { at(0, () => fbView(b.ad, true)); return b.d || 1600; },
    tap: (b, at) => {
      at(0, () => {
        const btn = E.fb && E.fb.querySelector('.ad-btn'); if (!btn) return;
        const r = btn.getBoundingClientRect(), s = E.tapdot.parentElement.getBoundingClientRect(), k = s.width / E.tapdot.parentElement.offsetWidth;
        E.tapdot.style.left = ((r.left + r.width / 2 - s.left) / k) + 'px'; E.tapdot.style.top = ((r.top + r.height / 2 - s.top) / k) + 'px';
        E.tapdot.classList.remove('on'); void E.tapdot.offsetWidth; if (!INSTANT) E.tapdot.classList.add('on');
      });
      at(380, () => { const btn = E.fb && E.fb.querySelector('.ad-btn'); if (btn) btn.classList.add('press'); });
      return b.d || 1100;
    },
    cmt: (b, at) => {
      at(0, () => { const el = mk(`<div class="cm"><span class="av sm">${esc(b.av)}</span><div><div class="bx"><div class="n">${esc(b.ten)}</div>${md(b.text)}</div><div class="mt">Vừa xong · Thích · Phản hồi</div></div></div>`);
        E.fb.querySelector('.cmts').appendChild(el); E.cmts[b.i] = el; fbScroll(); });
      return b.d || clamp(900 + b.text.length * 30, 1400, 2600);
    },
    rep: (b, at) => {
      const ty = 900;
      at(0, () => { const el = mk(`<div class="cm rep typing">${ymAv('sm')}<div><div class="bx"><span class="dots" style="padding:0;background:none"><i></i><i></i><i></i></span></div></div></div>`);
        E.cmts[b.i].after(el); E.cmts[b.i].__t = el; fbScroll(); });
      at(ty, () => { const t = E.cmts[b.i].__t; const el = mk(`<div class="cm rep">${ymAv('sm')}<div><div class="bx"><div class="n">${esc(KB.shop.ten)}<em>Tác giả</em></div>${md(b.text)}</div><div class="mt">Vừa xong · Thích · Phản hồi</div></div></div>`);
        t.replaceWith(el); fbScroll(); });
      return ty + (b.d || clamp(900 + b.text.length * 26, 2000, 4200));
    },
    ms: (b, at) => { at(0, () => { msView(b.ref); if (b.gio) E.clk.textContent = b.gio; }); return b.d || 1400; },
    ai: (b, at) => {
      const len = plain(b.text || '').length;
      const ty = b.text ? clamp(650 + len * 4, 800, 1500) : 700;
      at(0, () => aiTyping(true));
      at(ty, () => { aiTyping(false); addRow('ai', aiInner(b)); });
      const hold = b.text ? clamp(700 + len * 30, 1500, 4600) : b.card ? 1900 : b.imgs ? 2300 : b.review ? 4200 : b.checks ? 3800 : 1500;
      return ty + (b.d || hold);
    },
    kh: (b, at) => {
      at(0, () => addRow('kh', khInner(b)));
      return b.d || (b.shot ? 1900 : clamp(700 + b.text.length * 35, 1300, 2600));
    },
    seen: (b, at) => { at(0, () => { E.body.appendChild(mk(`<div class="seen">Đã xem</div>`)); msScroll(); }); return b.d || 1200; },
    time: (b, at) => {
      at(0, () => { E.body.appendChild(mk(`<div class="stamp">${esc(b.gio)}, ${esc(b.ngay || '')} <span class="chip">⏩ ${esc(b.nhan)}</span></div>`)); E.clk.textContent = b.gio; msScroll(); });
      return b.d || 900;
    },
    panel: (b, at) => { at(0, () => setPanel(b.v)); return b.d || 800; },
    p: (b, at) => { at(0, () => panelAct(b.a)); return b.d || 700; },
    car: (b, at) => {
      at(0, () => aiTyping(true));
      at(700, () => { aiTyping(false); addRow('ai', `<div class="car"><div class="car-t">${b.sp.map(x => `<div class="cc"><img src="${IMG(x.img)}" alt=""><em>${esc(x.giam)}</em>
        <div class="cc-b"><div class="cc-n">${esc(x.ten)}</div><div class="cc-p"><b>${esc(x.gia)}</b><s>${esc(x.cu)}</s></div></div><div class="cc-btn">Mua ngay</div></div>`).join('')}</div>
        <div class="car-d"><i class="on"></i><i></i><i></i><i></i><i></i></div></div>`); });
      const lui = (px, dot) => () => { const c = E.body && [...E.body.querySelectorAll('.car')].pop(); if (!c) return; c.querySelector('.car-t').style.transform = `translateX(${px}px)`;
        c.querySelectorAll('.car-d i').forEach((d, i) => d.classList.toggle('on', i === dot)); };
      at(2300, lui(-396, 2)); at(3900, lui(-582, 4));
      return 700 + (b.d || 5000);
    },
    zalo: (b, at) => { at(0, () => { zlView(b); E.clk.textContent = b.gio; }); return b.d || 1500; },
    zns: (b, at) => {
      at(0, () => { const z = b.zns, sao = z.sao !== undefined ? z.sao : (!z.list && !z.banner);
        addRow('ai', `<div class="zns">${z.img ? `<img src="${IMG(z.img)}" alt="">` : ''}${z.banner ? `<div class="zb">${z.banner.map(k => `<img src="${IMG(k)}" alt="">`).join('')}<span${z.mau ? ` style="background:${esc(z.mau)}"` : ''}>${esc(z.nhan)}</span></div>` : ''}
          <div class="zns-b"><div class="zns-t">${esc(z.tieuDe)}</div><div class="zns-c">${md(z.noiDung)}</div>
          ${z.dong ? `<div class="zns-d">${z.dong.map(x => `<div><i>✓</i><span>${md(x)}</span></div>`).join('')}</div>` : ''}
          ${z.list ? `<div class="zls">${z.list.map(x => `<div class="zli"><img src="${IMG(x.img)}" alt=""><div>${esc(x.ten)}<b>${esc(x.gia)}</b></div></div>`).join('')}</div>` : ''}
          ${sao ? '<div class="stars"><i>★</i><i>★</i><i>★</i><i>★</i><i>★</i></div>' : ''}</div><div class="zns-btn">${esc(z.nut)}</div></div>`); });
      return b.d || 4000;
    },
    zstamp: (b, at) => { at(0, () => { E.body.appendChild(mk(`<div class="stamp">${esc(b.gio)}, ${esc(b.ngay)} <span class="chip">⏩ ${esc(b.chip)}</span></div>`)); E.clk.textContent = b.gio; msScroll(); }); return b.d || 800; },
    rate: (b, at) => {
      at(0, () => { const st = E.body && [...E.body.querySelectorAll('.zns .stars')].pop(); if (st) st.classList.add('rated'); });
      at(1100, () => { E.body.appendChild(mk(`<div class="sys">⭐ Anh Thanh đã đánh giá 5 sao cho đơn #YM18112</div>`)); msScroll(); });
      return b.d || 2400;
    },
    tongket: (b, at) => { at(0, () => { E.main.classList.remove('on'); if (INSTANT) E.tk.classList.add('na'); E.tk.classList.add('on'); }); return b.d || 8500; },
    outro: (b, at) => { at(0, () => { E.main.classList.remove('on'); E.tk.classList.remove('on'); E.outro.classList.add('on'); }); return b.d; },
  };
  function compile() {
    EV = []; MARKS = []; let t = 0;
    KB.beats.forEach((b, i) => {
      const at = (dt, fn, k) => EV.push({ t: t + dt, fn, k, i });
      if (b.k === 'canh') MARKS.push({ t, nhan: b.nhan });
      t += H[b.k](b, at, i);
    });
    EV.sort((a, b) => a.t - b.t || a.i - b.i);
    TOTAL = t;
  }

  /* ---------------- phát / dừng / tua ---------------- */
  let cur = 0, playing = false, base = 0, idx = 0, timer = null;
  const now = () => playing ? performance.now() - base : cur;
  function reset() { skeleton(); idx = 0; }
  function pump() {
    clearTimeout(timer);
    const n = now();
    while (idx < EV.length && EV[idx].t <= n + 0.5) { EV[idx].fn(); idx++; }
    if (idx < EV.length) timer = setTimeout(pump, Math.max(0, EV[idx].t - now()));
    else if (n < TOTAL) timer = setTimeout(pump, TOTAL - n);
    else { cur = TOTAL; playing = false; Music.stop(); paint(); }
  }
  function play() {
    if (playing) return;
    if (cur >= TOTAL) seek(0);
    playing = true; base = performance.now() - cur;
    document.getAnimations().forEach(a => { try { a.play(); } catch (_) {} });
    if (!QUAY) Music.start(cur);
    pump(); paint();
  }
  function pause() {
    if (!playing) return;
    cur = now(); playing = false; clearTimeout(timer);
    document.getAnimations().forEach(a => { try { a.pause(); } catch (_) {} });
    Music.stop(); paint();
  }
  function seek(t) {
    const was = playing; if (playing) pause();
    reset(); INSTANT = true; stage.classList.add('instant');
    while (idx < EV.length && EV[idx].t <= t) { EV[idx].fn(); idx++; }
    cur = clamp(t, 0, TOTAL);
    msScroll(); fbScroll();
    void stage.offsetWidth; stage.classList.remove('instant'); INSTANT = false;
    paint();
    if (was) play();
  }

  /* ---------------- nhạc nền (dùng chung Score với demo dọc) ---------------- */
  let musicOn = true;
  try { musicOn = localStorage.getItem('preny-ngang-nhac') !== '0'; } catch (_) {}
  const Music = (() => {
    let ac = null, master = null, x = null, iv = null, n = 0, nextT = 0;
    return {
      start(ms) {
        const S = window.DemoDoc && DemoDoc.Score; if (!musicOn || !S) return;
        ac = ac || new (window.AudioContext || window.webkitAudioContext)(); if (ac.state === 'suspended') ac.resume();
        master = ac.createGain(); master.connect(ac.destination);
        master.gain.setValueAtTime(0.0001, ac.currentTime); master.gain.exponentialRampToValueAtTime(0.55, ac.currentTime + 0.6);
        x = S.setup(ac, master);
        const sec = ms / 1000; n = Math.ceil(sec / S.BAR); nextT = ac.currentTime + (n * S.BAR - sec) + 0.05;
        const tick = () => { while (nextT < ac.currentTime + 1.2) { S.bar(x, nextT, n); n++; nextT += S.BAR; } };
        tick(); iv = setInterval(tick, 250);
      },
      stop() {
        clearInterval(iv); iv = null;
        if (master && ac) { const g = master; g.gain.cancelScheduledValues(ac.currentTime); g.gain.setValueAtTime(g.gain.value, ac.currentTime); g.gain.linearRampToValueAtTime(0, ac.currentTime + 0.25); setTimeout(() => g.disconnect(), 400); }
        master = null;
      },
    };
  })();

  /* ---------------- khung vừa cửa sổ + thanh duyệt ---------------- */
  function fit() {
    if (QUAY) { stage.style.transform = 'none'; return; }
    const w = document.getElementById('wrap'), s = Math.min(w.clientWidth / 1920, w.clientHeight / 1080);
    stage.style.transform = `translate(${(w.clientWidth - 1920 * s) / 2}px, ${(w.clientHeight - 1080 * s) / 2}px) scale(${s})`;
  }
  const fmt = ms => { const s = Math.max(0, Math.round(ms / 1000)); return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); };
  function paint() {
    if (QUAY) return;
    const t = now();
    document.getElementById('tm').textContent = fmt(t) + ' / ' + fmt(TOTAL);
    document.querySelector('#seek i').style.width = (t / TOTAL * 100) + '%';
    document.getElementById('pp').textContent = playing ? '⏸ Dừng' : '▶ Phát';
  }
  function loop() { if (playing) paint(); requestAnimationFrame(loop); }
  function bar() {
    if (QUAY) return;
    const sk = document.getElementById('seek');
    sk.innerHTML = '<i></i>' + MARKS.map(m => `<em style="left:${m.t / TOTAL * 100}%" title="${esc(m.nhan)}"></em>`).join('');
    sk.addEventListener('click', e => { const r = sk.getBoundingClientRect(); seek((e.clientX - r.left) / r.width * TOTAL); });
    document.getElementById('pp').onclick = () => playing ? pause() : play();
    // Bấm chuột vào bất kỳ đâu trên khung video: dừng / chạy tiếp (người dùng dặn 19/11/2026)
    document.getElementById('wrap').addEventListener('click', e => { if (e.button === 0) playing ? pause() : play(); });
    document.getElementById('rs').onclick = () => { seek(0); play(); };
    const mb = document.getElementById('mu');
    const pm = () => { mb.textContent = musicOn ? '♪ Nhạc: bật' : '♪ Nhạc: tắt'; };
    mb.onclick = () => { musicOn = !musicOn; try { localStorage.setItem('preny-ngang-nhac', musicOn ? '1' : '0'); } catch (_) {} pm(); if (playing) { Music.stop(); Music.start(now()); } };
    pm();
    document.addEventListener('keydown', e => {
      if (e.key === ' ') { e.preventDefault(); playing ? pause() : play(); }
      else if (e.key === 'ArrowRight') seek(now() + 5000);
      else if (e.key === 'ArrowLeft') seek(now() - 5000);
      else if (e.key === 'r' || e.key === 'R') { seek(0); play(); }
      else if (e.key === 'f' || e.key === 'F') { if (document.fullscreenElement) document.exitFullscreen(); else document.documentElement.requestFullscreen().catch(() => {}); }
      else if (e.key === 'm' || e.key === 'M' || e.key === 'Escape') { if (!document.fullscreenElement) location.href = '../trinh-chieu.html'; }
    });
    Duyet.init();
  }

  /* ---------------- duyệt OK → xuất MP4 (cần mở qua server.py) ---------------- */
  const Duyet = {
    init() {
      const ok = document.getElementById('ok'), msg = document.getElementById('msg');
      // Nút duyệt chỉ có khi mở qua server.py trong máy (cổng 8790); trên web công khai thì ẩn đi
      if (location.port !== '8790') { ok.style.display = 'none'; msg.style.display = 'none'; return; }
      ok.onclick = async () => {
        if (!confirm('Duyệt bản demo này và xuất MP4 1920×1080?')) return;
        ok.disabled = true; msg.textContent = 'Đang gửi duyệt…';
        try { const r = await (await fetch('api/duyet?kb=' + encodeURIComponent(window.VN_KB_TEN || 'yame'), { method: 'POST' })).json(); msg.textContent = r.msg; } catch (e) { msg.textContent = 'Lỗi gửi duyệt'; ok.disabled = false; return; }
        this.poll();
      };
      this.poll(true);
    },
    async poll(once) {
      const ok = document.getElementById('ok'), msg = document.getElementById('msg');
      try {
        const s = await (await fetch('api/trangthai')).json();
        if (s.chay) { ok.disabled = true; msg.textContent = s.tien || 'Đang xuất MP4…'; setTimeout(() => this.poll(), 2000); return; }
        if (s.xong) { msg.innerHTML = `✓ Đã xuất: <a href="${s.link}" target="_blank">${esc(s.ten)}</a>`; ok.disabled = false; ok.textContent = '✓ Duyệt lại · xuất lại'; return; }
        if (s.loi) { msg.textContent = 'Lỗi xuất: ' + s.loi; ok.disabled = false; }
      } catch (_) {}
      if (!once) setTimeout(() => this.poll(), 3000);
    },
  };

  /* ---------------- khởi động ---------------- */
  function preload() {
    const keys = new Set();
    JSON.stringify(KB).replace(/"((?:p\d{3}|s\d)-[\w-]+)"/g, (_, k) => keys.add(k));
    const srcs = [...keys].map(IMG).concat(Object.values(KB.anh || {}), [LOGO]);
    return Promise.all(srcs.map(s => new Promise(r => { const i = new Image(); i.onload = i.onerror = () => (i.decode ? i.decode().catch(() => {}).then(r) : r()); i.src = s; })))
      .then(() => document.fonts ? document.fonts.ready : null);
  }
  if (!QUAY) document.title = 'Preny AI · ' + (KB.ten || 'Bài 2');
  compile(); reset();
  const ready = preload().then(() => { fit(); bar(); seek(0); loop(); });
  window.addEventListener('resize', fit);
  window.VN = { ready, play, pause, seek, get marks() { return MARKS; }, get t() { return now(); }, get total() { return TOTAL; }, get playing() { return playing; },
    get beat() { const e = EV[idx - 1]; return e ? e.i : -1; }, get ten() { return KB.ten; } };
})();
