/* Kịch bản: MỸ PHẨM (loại 1 — thương mại điện tử) — khoảng 2 phút, khung ngang 16:9
   Cùng pipeline với thời trang: 1 chốt đơn → 3 bám đuổi → 2 lên đơn → 4 sau bán → 5 remarketing → 6 Meta CAPI.
   Riêng mỹ phẩm:
     - Khách hỏi kiểu mỹ phẩm: hợp loại da không, có cồn/hương liệu không, chính hãng không, date, đổi trả khi kích ứng.
     - Sau bán là phần dài nhất: hướng dẫn dùng → hỏi thăm da sau 3 ngày → tính ngày dùng hết, nhắc mua lại.
   Cách viết bước: xem chú thích đầu file kich-ban/thoi-trang.js.
   Thẻ sản phẩm trong catalog: `sub` thay cho dòng "Màu …" (vd dung tích), `old` có thể bỏ trống.
   Ảnh: Unsplash (giấy phép Unsplash, dùng thương mại miễn phí), chọn ảnh không lộ nhãn hiệu thật. */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    badge: 'AI CHATBOT · NGÀNH MỸ PHẨM',
    shop: { name: 'Glow Beauty', initials: 'GB' },
    headline: { pre: 'Hệ thống AI chatbot giúp tăng trung bình', em: '62% tỷ lệ chốt đơn' },
    sub: 'Tư vấn đúng loại da, chốt đơn, chăm sóc sau bán và nhắc khách mua lại khi sắp dùng hết sản phẩm.',
    cta: 'Dùng thử miễn phí tại **preny.ai**\nHotline **0389 647 778**',
    speed: 1.18,   // > 1 là nhanh hơn, < 1 là chậm hơn
    timing: { read0: 1000, readPerChar: 28, readMax: 4500, type0: 800, typePerChar: 3, typeMax: 1500, fastType: 500,
              featureHold: 1400, sepHold: 1100, cardHold: 4000, introCard: 250 },

    images: {
      'serum': U('1713768704571-6aeb0d0e5105'),
      'kcn': U('1712168044214-f5a272c23a5b'),
      'combo': U('1711553102487-17d221102837'),
      'tay-trang': U('1623143445418-40c192fa3d11'),
    },

    features: [
      { title: 'AI chatbot chốt đơn tự động 100%', desc: 'Tăng trung bình 62% tỷ lệ chốt đơn.',
        kws: ['Trả lời ngay tức thì, 24/7', 'Hỏi tình trạng da trước khi tư vấn', 'Giải đáp thành phần, độ phù hợp', 'Cam kết chính hãng, date mới, đổi trả', 'Chủ động kêu gọi chốt đơn'] },
      { title: 'AI Agent tự động lên đơn và gửi sang đơn vị vận chuyển', desc: 'Tiết kiệm hơn 90% thời gian xử lý đơn.',
        kws: ['Thu đủ tên, SĐT, địa chỉ', 'Gửi tin xác nhận đơn đầy đủ', 'Tự tạo đơn, đẩy sang đơn vị vận chuyển', 'Tự cập nhật trạng thái giao hàng'] },
      { title: 'AI tự động bám đuổi khách hàng trong 7 ngày', desc: 'Tăng thêm khoảng 35% tỷ lệ chốt đơn.',
        kws: ['~65% khách nhắn tin rồi im lặng', 'Nhắc đúng sản phẩm, đúng vấn đề da', 'Gửi ưu đãi, quà tặng đúng lúc', 'Kéo khách quay lại chốt đơn'] },
      { title: 'AI tự động chăm sóc khách hàng sau bán', desc: 'Tăng doanh thu từ khách hàng cũ.',
        kws: ['Hướng dẫn cách dùng khi nhận hàng', 'Hỏi thăm tình trạng da sau 3 ngày', 'Tính ngày dùng hết, nhắc mua lại', 'Gợi ý sản phẩm bổ trợ routine', 'Khách mua lại, tăng giá trị vòng đời'] },
      { title: 'Bộ công cụ Remarketing FMM và ZBS', desc: 'Khai thác hiệu quả dữ liệu khách hàng.',
        kws: ['AI tự gắn thẻ theo loại da, nhu cầu', 'Mini CRM lưu lịch sử mua của khách', 'Gửi chiến dịch qua Messenger và Zalo', 'Khách cũ quay lại mua tiếp'] },
      { title: 'AI tự động gửi sự kiện mua hàng qua Meta CAPI', desc: 'Hỗ trợ tối ưu quảng cáo Facebook.',
        kws: ['Gửi sự kiện mua hàng + giá trị đơn về Meta', 'Meta tối ưu quảng cáo theo người mua thật', 'Hướng tới giảm chi phí mỗi đơn (CPO)'] },
    ],

    steps: [
      { intro: true, hold: 1500 },

      /* ---- 1. Khách hỏi, AI trả lời tức thì và tư vấn theo loại da ---- */
      { feature: 1 },
      { sep: 'Khách nhắn tin từ quảng cáo Facebook', style: 'time', hold: 800 },
      { img: 'serum', hold: 1500 },
      { kh: 'Shop ơi serum này da dầu mụn dùng được không ạ?' },
      { ai: 'Dạ dùng được ạ chị! 🥰', fast: true, meta: '⚡ Preny AI trả lời sau 2 giây', kw: 0 },
      { ai: 'Đây là **Serum B5 Phục Hồi 30ml**, giá **289.000đ** ạ. Da chị đang mụn viêm, mụn ẩn hay thâm mụn ạ?', kw: 1 },
      { kh: 'Mụn ẩn, da hay đỏ, nhạy cảm lắm. Có cồn không em?' },
      { ai: 'Dạ **không cồn, không hương liệu** ạ. B5 + rau má giúp **làm dịu, giảm đỏ**, hợp da dầu mụn nhạy cảm.', kw: 2 },
      { kh: 'Hàng chính hãng không em? Date tới khi nào?' },
      { ai: 'Dạ hàng **chính hãng, có tem chống giả**, date **12/2028** ạ. Kích ứng shop **đổi trả trong 7 ngày** nha chị.', kw: 3 },
      { ai: 'Hôm nay mua serum shop **tặng sữa rửa mặt mini** ạ, chị chốt để em giữ quà luôn nha? 😊', kw: 4 },
      { kh: 'Để chị suy nghĩ thêm đã' },

      /* ---- 3. Khách im lặng, AI bám đuổi ---- */
      { feature: 3 },
      { sep: 'Khách chưa phản hồi…', style: 'silent', kw: 0, hold: 1600 },
      { sep: '— 1 ngày sau —' },
      { ai: 'Chị Ngọc ơi, da nhạy cảm đang mụn ẩn thì **phục hồi sớm** sẽ dễ chịu hơn nhiều ạ. Em vẫn giữ quà **sữa rửa mặt mini** cho chị nè 🎁', meta: '🔁 Tự động · Bám đuổi ngày 1', kw: 1 },
      { sep: '— 2 ngày sau —' },
      { ai: 'Hôm nay shop **giảm 10% + freeship** cho Serum B5, chỉ đến 23h tối nay thôi ạ ⏰', meta: '🔁 Tự động · Bám đuổi ngày 2', kw: 2 },
      { kh: 'Ok lấy chị 1 chai nha', kw: 3 },

      /* ---- 2. AI tự lên đơn, gửi vận chuyển ---- */
      { feature: 2 },
      { ai: 'Dạ chị cho em xin **tên, SĐT và địa chỉ** nhận hàng nha.', kw: 0 },
      { kh: 'Nguyễn Bảo Ngọc – 0938 123 456\n25 Nguyễn Trãi, P. Bến Thành, TP.HCM' },
      { card: {
          tag: '✓ Tin xác nhận đơn',
          intro: 'Dạ chị kiểm tra lại đơn giúp em nhé:',
          lines: ['1 Serum B5 Phục Hồi 30ml', 'Quà tặng: 1 sữa rửa mặt mini', 'Tổng cộng: **260.100đ** (giảm 10%, freeship)', 'Người nhận: Nguyễn Bảo Ngọc · 0938 123 456', 'Địa chỉ: 25 Nguyễn Trãi, P. Bến Thành, TP.HCM'],
          button: 'Quản lý đơn hàng',
        }, kw: 1, hold: 4000 },
      { kh: 'Ok em' },
      { card: {
          tag: '✓ Đã tạo đơn & gửi vận chuyển', ok: true,
          lines: ['Mã đơn: **#GB30927**', 'Mã vận đơn: **VD71250384**', 'Dự kiến giao: 1–2 ngày'],
        }, kw: 2, hold: 3000 },
      { sep: '— 1 ngày sau —' },
      { ai: '📦 Đơn **#GB30927** đang được giao, dự kiến tới tay chị chiều nay ạ!', meta: '🚚 Tự động · Cập nhật vận chuyển', kw: 3 },

      /* ---- 4. Chăm sóc sau bán: hướng dẫn dùng → hỏi thăm da → nhắc mua lại khi sắp hết ---- */
      { feature: 4 },
      { sep: '— Khi khách nhận hàng —' },
      { ai: 'Serum đã tới tay chị rồi ạ 💜 Chị **thử trước ở vùng quai hàm**, rồi dùng 2–3 giọt sáng tối sau toner. Ban ngày nhớ **thoa kem chống nắng** nha.', meta: '💜 Tự động · Hướng dẫn sử dụng', kw: 0 },
      { sep: '— 3 ngày sau —' },
      { ai: 'Da chị dùng mấy hôm nay thế nào ạ? Có châm chích hay nổi mẩn gì không chị?', meta: '💜 Tự động · Hỏi thăm tình trạng da', kw: 1 },
      { kh: 'Da dịu hơn hẳn, đỡ đỏ rồi em 😍' },
      { ai: 'Tuyệt quá ạ! Chị dùng đều **4–6 tuần** để da phục hồi rõ hơn nha.', fast: true },
      { sep: '— 50 ngày sau · serum sắp hết —' },
      { ai: 'Chai 30ml dùng khoảng 50–60 ngày, chắc chị **sắp hết serum** rồi ạ! Khách cũ mua lại được **giảm 15%**, kèm kem chống nắng hợp da nhạy cảm nè:', meta: '🔔 Tự động · Nhắc mua lại', kw: 2 },
      { catalog: [
          { name: 'Serum B5 Phục Hồi', sub: '30ml · mua lại', price: '245.650đ', old: '289.000đ', tag: '-15%', art: 'serum' },
          { name: 'Kem chống nắng dịu nhẹ', sub: '50ml · da nhạy cảm', price: '254.150đ', old: '299.000đ', tag: 'Hợp routine', art: 'kcn' },
          { name: 'Combo Serum + KCN', sub: 'Tiết kiệm 129.000đ', price: '459.000đ', old: '588.000đ', tag: 'Bán chạy', art: 'combo' },
        ], kw: 3, hold: 4000 },
      { kh: 'Lấy chị combo serum + kem chống nắng nha', kw: 4 },

      /* ---- 5. Remarketing FMM & ZBS ---- */
      { feature: 5 },
      { screen: { title: 'Preny · Mini CRM', sub: 'Dữ liệu khách hàng của shop' }, hold: 600 },
      { tags: { title: 'AI tự gắn thẻ theo nội dung chat', tags: [
          { t: 'Hỏi giá chưa mua', n: '1.482', c: 'amber' },
          { t: 'Da dầu mụn, nhạy cảm', n: '926', c: 'blue' },
          { t: 'Đã mua Serum B5', n: '638', c: 'green' },
          { t: 'Sắp hết sản phẩm', n: '214', c: 'purple' },
        ] }, kw: 0, hold: 2600 },
      { customers: { title: 'Khách hàng', rows: [
          { name: 'Nguyễn Bảo Ngọc', note: '2 đơn · Serum B5, Combo KCN', tag: 'Đã mua Serum B5', c: 'green' },
          { name: 'Lê Thanh Vy', note: 'Serum B5 · đã dùng 52 ngày', tag: 'Sắp hết sản phẩm', c: 'purple' },
          { name: 'Trần Mỹ Hà', note: 'Hỏi tẩy trang cho da nhạy cảm', tag: 'Hỏi giá chưa mua', c: 'amber' },
        ] }, kw: 1, hold: 2600 },
      { campaign: { title: 'Tạo chiến dịch remarketing', name: 'Tẩy trang dịu nhẹ −15%', audience: 'Hỏi giá chưa mua · 1.482 khách',
          channels: [{ t: 'Messenger · FMM', k: 'mess' }, { t: 'Zalo · ZBS', k: 'zalo' }], button: 'Gửi chiến dịch' }, kw: 2, hold: 2800 },
      { status: { tag: '✓ Đã gửi chiến dịch', ok: true, lines: ['Đã gửi **1.482** tin qua Messenger và Zalo'] }, hold: 1800 },
      { screen: 'chat', hold: 500 },
      { sep: 'Tin nhắn chiến dịch · Messenger', style: 'time', hold: 700 },
      { aiImg: 'tay-trang', hold: 1000 },
      { ai: '🔥 **Nước tẩy trang dịu nhẹ giảm 15%**, loại cho da nhạy cảm chị Hà đã hỏi! Ưu đãi chỉ trong tuần này ạ.', meta: '📣 Tự động · Chiến dịch FMM' },
      { kh: 'Lấy chị 1 chai nha', kw: 3 },

      /* ---- 6. Meta CAPI ---- */
      { feature: 6 },
      { screen: { title: 'Preny · Meta CAPI', sub: 'Sự kiện chuyển đổi gửi về Meta' }, hold: 500 },
      { flow: { i: 1, text: 'Khách nhấp quảng cáo Facebook' }, hold: 800 },
      { flow: { i: 2, text: 'AI tư vấn và chốt đơn' }, hold: 800 },
      { flow: { i: 3, text: 'Hệ thống tự tạo đơn' }, hold: 800 },
      { flow: { i: 4, text: 'Gửi sự kiện **Purchase** + giá trị đơn về Meta', hl: 'key' }, kw: 0, hold: 1800 },
      { flow: { i: 5, text: 'Meta tối ưu quảng cáo theo người mua thật', hl: 'ok' }, kw: 1, hold: 1800 },
      { status: { tag: '✓ Đã gửi về Meta', ok: true,
          lines: ['Purchase · **260.100đ** · Nguyễn Bảo Ngọc', 'Purchase · **459.000đ** · Nguyễn Bảo Ngọc', 'Purchase · **169.150đ** · Trần Mỹ Hà'],
          outro: 'Quảng cáo học từ đơn thật, hướng tới **giảm CPO**.' }, kw: 2, hold: 4000 },

      /* ---- Kết thúc ---- */
      { end: true, hold: 400 },
      { screen: { title: 'Preny AI', sub: 'Giải pháp AI bán hàng tự động' }, hold: 400 },
      { endcard: { title: 'Tăng tỷ lệ chốt đơn với **Preny AI**',
          sub: 'Tư vấn theo loại da, chốt đơn, lên đơn, bám đuổi, nhắc mua lại, remarketing và tối ưu quảng cáo trong một hệ thống.',
          button: 'Đăng ký dùng thử miễn phí', contact: '**preny.ai** · Hotline 0389 647 778' }, hold: 5000 },
    ],
  };
})();
