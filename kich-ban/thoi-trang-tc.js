/* Kịch bản: THỜI TRANG — BẢN TRÌNH CHIẾU (bấm → từng bước trong trinh-chieu.html). Khung ngang 16:9.
   Video MP4 vẫn dùng kich-ban/thoi-trang.js; file này chỉ cho phần demo chat khi thuyết trình.
   Demo chat theo chuẩn thương mại điện tử (TRINH-CHIEU.md mục 3), một mạch:
     anh Minh gửi ảnh hỏi → AI tư vấn size, chất liệu → anh im → bám đuổi 2 tin theo thẻ #AoPolo, #HoiGia
     → anh quay lại chốt → lên đơn tự động → chăm sóc sau bán, gợi ý mua thêm. Không có tin cập nhật vận chuyển.
   Không có bước kết thúc: bấm → là sang slide kế.
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

    // Cột trái demo: đúng 4 tính năng được diễn, theo thứ tự diễn (chuẩn thương mại điện tử lần 22)
    features: [
      { title: 'AI chatbot chốt đơn tự động 100%', desc: 'Tăng trung bình 62% tỷ lệ chốt đơn.',
        kws: ['Trả lời ngay tức thì, 24/7', 'Nhận diện đúng sản phẩm, màu, giá', 'Tư vấn size theo số đo khách', 'Xử lý băn khoăn: chất liệu, đổi trả', 'Chủ động kêu gọi chốt đơn'] },
      { title: 'AI tự động bám đuổi khách hàng trong 7 ngày', desc: 'Tăng thêm khoảng 35% tỷ lệ chốt đơn.',
        kws: ['~65% khách nhắn tin rồi im lặng', 'Tự gắn thẻ sản phẩm khách xem, lý do im', 'Nhắc đúng sản phẩm, gửi ảnh phối đồ', 'Báo giá xong im → ưu đãi giá đúng lúc'] },
      { title: 'AI Agent tự động lên đơn và gửi sang đơn vị vận chuyển', desc: 'Tiết kiệm hơn 90% thời gian xử lý đơn.',
        kws: ['Thu đủ tên, SĐT, địa chỉ', 'Gửi tin xác nhận đơn đầy đủ', 'Tự tạo đơn, đẩy sang đơn vị vận chuyển'] },
      { title: 'AI tự động chăm sóc khách hàng sau bán', desc: 'Tăng doanh thu từ khách hàng cũ.',
        kws: ['Hỏi thăm sau khi khách nhận hàng', 'Gợi ý sản phẩm hợp với đơn đã mua', 'Khách mua thêm, tăng giá trị vòng đời'] },
    ],

    steps: [
      { intro: true, hold: 1800 },

      /* ---- 1. Tư vấn ---- */
      { feature: 1 },
      { sep: 'Khách nhắn tin từ quảng cáo Facebook', style: 'time', hold: 800 },
      { img: 'polo-den', hold: 1500 },
      { kh: 'Shop ơi mẫu này còn không ạ?' },
      { ai: 'Dạ còn hàng ạ anh! 🥰', fast: true, meta: '⚡ Preny AI trả lời sau 2 giây', kw: 0 },
      { ai: 'Mẫu anh gửi là **Áo Polo Cotton Classic** màu Đen, giá **317.600đ** (đang giảm 20%), freeship ạ. Anh cho em xin chiều cao, cân nặng để tư vấn size nha.', kw: 1 },
      { kh: '1m72, 68kg. Vải có nóng không em?' },
      { ai: 'Dạ với 1m72 – 68kg anh mặc **size L** là vừa đẹp ạ. Áo **cotton cá sấu 100%**, thấm hút tốt, shop **đổi size miễn phí 7 ngày** nha anh.', kw: [2, 3] },
      { ai: 'Size L chỉ còn 4 áo, anh chốt để em giữ hàng luôn nha? 😊', kw: 4 },
      { kh: 'Để anh xem thêm đã' },

      /* ---- 2. Khách im → bám đuổi 2 tin theo thẻ ---- */
      { feature: 2 },
      { sep: 'Khách chưa phản hồi… · AI gắn thẻ #AoPolo #HoiGia', style: 'silent', kw: [0, 1], hold: 1800 },
      { sep: '— 1 ngày sau —' },
      { ai: 'Anh Minh ơi, **áo polo đen size L** anh xem hôm qua em vẫn đang giữ cho anh nè. Em gửi anh cách phối với quần kaki be, đi làm hay đi chơi đều hợp ạ 😊', meta: '🔁 Tự động · Bám đuổi theo thẻ #AoPolo', kw: 2 },
      { aiImgs: [{ img: 'polo-den', label: 'Polo đen · size L' }, { img: 'kaki-be', label: 'Phối quần kaki be' }], hold: 2600 },
      { sep: '— 2 ngày sau —' },
      { ai: 'Áo polo anh hỏi giá hôm nay **còn 279.000đ + freeship**, chỉ đến 23h tối nay thôi ạ 🎁', meta: '🔁 Tự động · Bám đuổi theo thẻ #HoiGia', kw: 3 },
      { kh: 'Ok lấy anh 1 áo size L nha' },

      /* ---- 3. Lên đơn tự động (không có tin cập nhật vận chuyển) ---- */
      { feature: 3 },
      { ai: 'Dạ anh cho em xin **tên, SĐT và địa chỉ** nhận hàng nha.', kw: 0 },
      { kh: 'Trần Minh – 0901 234 567\n456 Cao Thắng, P. Hòa Hưng, TP.HCM' },
      { card: {
          tag: '✓ Tin xác nhận đơn',
          intro: 'Dạ anh kiểm tra lại đơn giúp em nhé:',
          lines: ['1 Áo Polo Cotton Classic, Đen, size L', 'Tổng cộng: **279.000đ** (freeship)', 'Người nhận: Trần Minh · 0901 234 567', 'Địa chỉ: 456 Cao Thắng, P. Hòa Hưng, TP.HCM'],
          button: 'Quản lý đơn hàng',
        }, kw: 1, hold: 4500 },
      { kh: 'Ok em' },
      { card: {
          tag: '✓ Đã tạo đơn & gửi vận chuyển', ok: true,
          lines: ['Mã đơn: **#SM24118**', 'Mã vận đơn: **VD58210473**', 'Dự kiến giao: 1–2 ngày'],
        }, kw: 2, hold: 3500 },

      /* ---- 4. Chăm sóc sau bán ---- */
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
      { kh: 'Lấy thêm anh quần kaki be size 31 nha', kw: 2, hold: 1500 },
      // Không có { end: true }: bấm → thêm một lần là sang thẳng slide kế.
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
