/* Kịch bản: THỜI TRANG — BẢN TRÌNH CHIẾU (bấm → từng bước trong trinh-chieu.html). Khung ngang 16:9.
   Video MP4 vẫn dùng kich-ban/thoi-trang.js; file này chỉ cho phần demo chat khi thuyết trình.
   Hai tình huống đi nhanh:
     1. Anh Minh gửi ảnh hỏi → AI chốt đơn → tự lên đơn, gửi vận chuyển → (thẻ Meta CAPI ở cột trái, bạn tự nói)
        → chăm sóc sau bán → remarketing khách cũ.
     2. Xóa chat → chị Lan hỏi rồi im lặng → AI bám đuổi ngày 1, 2 → chị quay lại mua.
   Tên, SĐT, giá, mã đơn: dữ liệu minh họa. Ảnh: Unsplash. */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    shop: { name: 'Thời Trang Smart', initials: 'TS' },
    headline: { pre: 'Hệ thống AI chatbot giúp tăng trung bình', em: '62% tỷ lệ chốt đơn' },
    sub: 'Tự động hóa toàn bộ quy trình chốt đơn, chăm sóc và remarketing để tăng hiệu quả bán hàng.',
    cta: 'Dùng thử miễn phí tại **preny.ai**\nHotline **0389 647 778**',
    speed: 1.13,
    timing: { read0: 1000, readPerChar: 28, readMax: 4500, type0: 800, typePerChar: 3, typeMax: 1500, fastType: 500,
              featureHold: 1400, sepHold: 1100, cardHold: 4000, introCard: 250 },

    images: {
      'polo-den': U('1625910513399-c9fcba54338c'),
      'kaki-be': U('1473966968600-fa801b869a1a'),
      'polo-trang': U('1671438118097-479e63198629'),
      'polo-xam': U('1586363090844-099253d6a1cb'),
      'vay-den': U('1522218296581-1244648997fb'),
    },

    features: [
      { title: 'AI chatbot chốt đơn tự động 100%', desc: 'Tăng trung bình 62% tỷ lệ chốt đơn.',
        kws: ['Trả lời ngay tức thì, 24/7', 'Nhận diện đúng sản phẩm, màu, giá', 'Tư vấn size theo số đo khách', 'Xử lý băn khoăn: chất liệu, đổi trả', 'Chủ động kêu gọi chốt đơn'] },
      { title: 'AI Agent tự động lên đơn và gửi sang đơn vị vận chuyển', desc: 'Tiết kiệm hơn 90% thời gian xử lý đơn.',
        kws: ['Thu đủ tên, SĐT, địa chỉ', 'Gửi tin xác nhận đơn đầy đủ', 'Tự tạo đơn, đẩy sang đơn vị vận chuyển', 'Tự cập nhật trạng thái giao hàng'] },
      { title: 'AI tự động bám đuổi khách hàng trong 7 ngày', desc: 'Tăng thêm khoảng 35% tỷ lệ chốt đơn.',
        kws: ['~65% khách nhắn tin rồi im lặng', 'Nhắc đúng sản phẩm khách đã xem', 'Mỗi ngày 1 tin, kèm ưu đãi đúng lúc', 'Kéo khách quay lại chốt đơn'] },
      { title: 'AI tự động chăm sóc khách hàng sau bán', desc: 'Tăng doanh thu từ khách hàng cũ.',
        kws: ['Hỏi thăm sau khi khách nhận hàng', 'Gợi ý sản phẩm hợp với đơn đã mua', 'Khách mua thêm, tăng giá trị vòng đời'] },
      { title: 'Bộ công cụ Remarketing FMM và ZBS', desc: 'Khai thác hiệu quả dữ liệu khách hàng.',
        kws: ['AI tự phân loại và gắn thẻ khách', 'Mini CRM lưu toàn bộ dữ liệu khách', 'Gửi chiến dịch qua Messenger và Zalo', 'Khách cũ quay lại mua tiếp'] },
      { title: 'AI tự động gửi sự kiện mua hàng qua Meta CAPI', desc: 'Hỗ trợ tối ưu quảng cáo Facebook.',
        kws: ['Gửi sự kiện mua hàng + giá trị đơn về Meta', 'Meta tối ưu quảng cáo theo người mua thật', 'Hướng tới giảm chi phí mỗi đơn (CPO)'] },
    ],

    steps: [
      { intro: true, hold: 1800 },

      /* ===== TÌNH HUỐNG 1: hỏi → chốt đơn → lên đơn → chăm sóc sau bán → remarketing ===== */
      { feature: 1 },
      { sep: 'Tình huống 1 · Khách nhắn tin từ quảng cáo Facebook', style: 'time', hold: 800 },
      { img: 'polo-den', hold: 1500 },
      { kh: 'Shop ơi mẫu này còn không ạ?' },
      { ai: 'Dạ còn hàng ạ anh! 🥰', fast: true, meta: '⚡ Preny AI trả lời sau 2 giây', kw: 0 },
      { ai: 'Mẫu anh gửi là **Áo Polo Cotton Classic** màu Đen, giá **317.600đ** (đang giảm 20%), freeship ạ. Anh cho em xin chiều cao, cân nặng để tư vấn size nha.', kw: 1 },
      { kh: '1m72, 68kg. Vải có nóng không em?' },
      { ai: 'Dạ với 1m72 – 68kg anh mặc **size L** là vừa đẹp ạ. Áo **cotton cá sấu 100%**, thấm hút tốt, shop **đổi size miễn phí 7 ngày** nha anh.', kw: [2, 3] },
      { ai: 'Size L chỉ còn 4 áo, anh chốt để em giữ hàng luôn nha? 😊', kw: 4 },
      { kh: 'Ok lấy anh 1 áo size L nha' },

      { feature: 2 },
      { ai: 'Dạ anh cho em xin **tên, SĐT và địa chỉ** nhận hàng nha.', kw: 0 },
      { kh: 'Trần Minh – 0901 234 567\n456 Cao Thắng, P. Hòa Hưng, TP.HCM' },
      { card: {
          tag: '✓ Tin xác nhận đơn',
          intro: 'Dạ anh kiểm tra lại đơn giúp em nhé:',
          lines: ['1 Áo Polo Cotton Classic, Đen, size L', 'Tổng cộng: **317.600đ** (freeship)', 'Người nhận: Trần Minh · 0901 234 567', 'Địa chỉ: 456 Cao Thắng, P. Hòa Hưng, TP.HCM'],
          button: 'Quản lý đơn hàng',
        }, kw: 1, hold: 4500 },
      { kh: 'Ok em' },
      { card: {
          tag: '✓ Đã tạo đơn & gửi vận chuyển', ok: true,
          lines: ['Mã đơn: **#SM24118**', 'Mã vận đơn: **VD58210473**', 'Dự kiến giao: 1–2 ngày'],
        }, kw: 2, hold: 3500 },
      { sep: '— 1 ngày sau —' },
      { ai: '📦 Đơn **#SM24118** đang được giao, dự kiến tới tay anh chiều nay ạ!', meta: '🚚 Tự động · Cập nhật vận chuyển', kw: 3 },

      // Meta CAPI: chỉ bật thẻ ở cột trái để bạn tự nói, điện thoại đứng yên
      { feature: 6, kw: [0, 1, 2], hold: 3000 },

      { feature: 4 },
      { sep: '— 3 ngày sau —' },
      { ai: 'Anh Minh ơi, áo mặc có vừa ý anh không ạ? Cần đổi size anh cứ nhắn em nha 💜', meta: '💜 Tự động · Chăm sóc sau bán', kw: 0 },
      { kh: 'Vừa lắm em 👍' },
      { sep: '— 1 tuần sau —' },
      { ai: 'Shop có mẫu mới **phối cực hợp với áo polo đen** của anh, khách cũ được **giảm thêm 10%** ạ:', kw: 1 },
      { catalog: [
          { name: 'Quần Kaki Jogger', color: 'Be', price: '350.100đ', old: '389.000đ', tag: 'Mới về', art: 'kaki-be' },
          { name: 'Áo Polo Classic', color: 'Trắng', price: '251.100đ', old: '279.000đ', tag: 'Bán chạy', art: 'polo-trang' },
          { name: 'Áo Polo Classic', color: 'Xám', price: '251.100đ', old: '279.000đ', tag: '-10%', art: 'polo-xam' },
        ], hold: 4000 },
      { kh: 'Lấy thêm anh quần kaki be size 31 nha', kw: 2 },

      { feature: 5 },
      { screen: { title: 'Preny · Mini CRM', sub: 'Dữ liệu khách hàng của shop' }, hold: 600 },
      { tags: { title: 'AI tự gắn thẻ theo nội dung chat', tags: [
          { t: 'Hỏi giá chưa mua', n: '1.248', c: 'amber' },
          { t: 'Đã đặt hàng', n: '863', c: 'green' },
          { t: 'Khách cũ có thể mua lại', n: '412', c: 'purple' },
          { t: 'Cần tư vấn thêm', n: '157', c: 'blue' },
        ] }, kw: 0, hold: 3000 },
      { customers: { title: 'Khách hàng', rows: [
          { name: 'Trần Minh', note: '2 đơn · Polo đen, Kaki be', tag: 'Khách cũ', c: 'purple' },
          { name: 'Nguyễn Hoàng Long', note: '1 đơn · Polo trắng size M', tag: 'Khách cũ', c: 'purple' },
          { name: 'Phạm Quốc Huy', note: 'Hỏi giá áo sơ mi trắng', tag: 'Hỏi giá chưa mua', c: 'amber' },
        ] }, kw: 1, hold: 3000 },
      { campaign: { title: 'Tạo chiến dịch remarketing', name: 'Flash sale cuối tuần −15% cho khách cũ', audience: 'Khách cũ có thể mua lại · 412 khách',
          channels: [{ t: 'Messenger · FMM', k: 'mess' }, { t: 'Zalo · ZBS', k: 'zalo' }], button: 'Gửi chiến dịch' }, kw: 2, hold: 3200 },
      { status: { tag: '✓ Đã gửi chiến dịch', ok: true, lines: ['Đã gửi **412** tin qua Messenger và Zalo'] }, hold: 2200 },
      { screen: 'chat', hold: 500 },
      { sep: 'Tin nhắn chiến dịch · Messenger', style: 'time', hold: 700 },
      { aiImg: 'polo-trang', hold: 1000 },
      { ai: '🔥 **Flash sale cuối tuần −15%** dành riêng khách cũ: Áo Polo Classic màu Trắng còn **237.150đ** ạ anh Minh!', meta: '📣 Tự động · Chiến dịch FMM' },
      { kh: 'Lấy anh thêm 1 áo trắng size L nha', kw: 3 },

      /* ===== TÌNH HUỐNG 2: khách hỏi rồi im lặng → AI bám đuổi → khách quay lại mua ===== */
      { screen: 'chat', hold: 600 },
      { feature: 3 },
      { sep: 'Tình huống 2 · Khách hỏi rồi im lặng', style: 'time', hold: 900 },
      { img: 'vay-den', hold: 1400 },
      { kh: 'Váy này còn size M không shop?' },
      { ai: 'Dạ còn ạ chị! Mẫu **đầm đen dáng suông** giá **279.000đ**, chị cao 1m55–1m62 mặc **size M** là vừa ạ. Chị chốt để em giữ hàng nha? 😊', fast: true, meta: '⚡ Preny AI trả lời sau 2 giây' },
      { kh: 'Để chị suy nghĩ thêm đã' },
      { sep: 'Khách chưa phản hồi…', style: 'silent', kw: 0, hold: 1600 },
      { sep: '— 1 ngày sau —' },
      { ai: 'Chị Lan ơi, mẫu **đầm đen size M** chị xem hôm qua em vẫn đang giữ cho chị nè 😊', meta: '🔁 Tự động · Bám đuổi ngày 1', kw: 1 },
      { sep: '— 2 ngày sau —' },
      { ai: 'Hôm nay shop **giảm 10% + freeship** cho mẫu đầm này, chỉ đến 23h tối nay thôi ạ 🎁', meta: '🔁 Tự động · Bám đuổi ngày 2', kw: 2 },
      { kh: 'Ok lấy chị 1 cái size M nha', kw: 3 },
      { ai: 'Dạ chị cho em xin **tên, SĐT và địa chỉ** nhận hàng, em lên đơn ngay cho chị ạ! 💜', fast: true },

      { end: true, hold: 600 },
    ],

    /* ===== Nội dung slide trình chiếu (trinh-chieu.html). Phần nào không ghi thì slide dùng sẵn nội dung thời trang trong HTML. ===== */
    deck: {
      // Slide 4–5: số liệu thật từ trang Thống kê của khách Preny (người dùng cung cấp). Không có thì bỏ trống → slide tự ẩn.
      thongKe: [
        { ten: 'Thời trang <span class="grad">theo trend</span>', ngay: '01/07 – 31/07/2026', khachMoi: 237, chot: 162, khachCu: 27, tinNhan: 2034,
          banner: 'Gần <b>7/10</b> khách mới <span class="lbl-act">chốt đơn với shop</span>' },
        { ten: 'Thời trang <span class="grad">brand local</span>', ngay: '15/07 – 22/07/2026', khachMoi: 359, chot: 139, khachCu: 243, tinNhan: 8168,
          banner: '<b>243</b> khách cũ quay lại tương tác · hơn <b>8.000</b> tin nhắn chỉ trong 1 tuần' },
      ],
    },
  };
})();
