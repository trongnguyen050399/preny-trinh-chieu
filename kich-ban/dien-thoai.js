/* Kịch bản: CỬA HÀNG ĐIỆN THOẠI — khung ngang 16:9
   Pipeline (theo yêu cầu): xác định khách muốn mua máy hay cần sửa chữa.
     - Mua máy: hỏi model → báo giá, gửi hình + mời ghé xem máy → đồng ý thì xin giờ ghé + SĐT.
     - Cọc / trả góp: hỏi đi làm hay sinh viên → có nợ xấu không (nợ xấu thì không hỗ trợ được)
       → mức góp nhân viên tư vấn cụ thể → mời ghé cửa hàng.
     - Sửa chữa: hỏi model, hỏi lỗi → báo giá sơ bộ + mời ghé để kỹ thuật kiểm tra → xin giờ ghé + SĐT.
   Video có 2 khách: anh Phong (mua máy + trả góp) và chị Hạnh (sửa máy).
   Chăm sóc sau bán, Remarketing, Meta CAPI: chỉ hiện ở cột trái.
   Tên cửa hàng, giá, địa chỉ, số điện thoại: tôi tự đặt để minh họa. */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    badge: 'AI CHATBOT · CỬA HÀNG ĐIỆN THOẠI',
    shop: { name: 'Di Động Xanh', initials: 'DX' },
    headline: { pre: 'AI chatbot tư vấn & chốt lịch ghé', em: 'Cửa hàng điện thoại' },
    sub: 'Báo giá máy, lọc hồ sơ trả góp, tiếp nhận sửa chữa và chốt lịch khách ghé cửa hàng.',
    cta: 'Dùng thử miễn phí tại **preny.ai**\nHotline **0389 647 778**',
    speed: 1.13,
    timing: { read0: 1000, readPerChar: 28, readMax: 4500, type0: 800, typePerChar: 3, typeMax: 1500, fastType: 500,
              featureHold: 1400, sepHold: 1100, cardHold: 4000, introCard: 250 },

    images: {
      'iphone': U('1763891378295-5d9bd5c48745'),
      'vo-man': U('1731391747600-4d0f478b2184'),
    },

    features: [
      { title: 'AI tư vấn mua máy và báo giá', desc: 'Trả lời ngay, đúng model khách cần.',
        kws: ['Xác định khách mua máy hay sửa máy', 'Báo giá, gửi hình đúng model', 'Mời khách ghé cửa hàng xem máy'] },
      { title: 'AI tư vấn cọc, trả góp', desc: 'Lọc hồ sơ trước khi khách tới.',
        kws: ['Hỏi đi làm hay sinh viên', 'Hỏi nợ xấu, lọc hồ sơ trước', 'Mức góp: nhân viên tư vấn cụ thể', 'Xin giờ ghé + SĐT, xác nhận lịch'] },
      { title: 'AI tiếp nhận sửa chữa và báo giá sơ bộ', desc: 'Khách biết giá trước, yên tâm ghé.',
        kws: ['Hỏi model máy và lỗi đang gặp', 'Báo giá sơ bộ, mời ghé kiểm tra', 'Xin giờ ghé + SĐT, xác nhận lịch'] },
      { title: 'AI tự động chăm sóc khách sau bán', desc: 'Tăng doanh thu từ khách hàng cũ.',
        kws: ['Hướng dẫn dùng máy, nhắc bảo hành', 'Hỏi thăm sau khi sửa máy', 'Gợi ý phụ kiện, lên đời máy'] },
      { title: 'Bộ công cụ Remarketing FMM và ZBS', desc: 'Khai thác hiệu quả dữ liệu khách hàng.',
        kws: ['AI tự gắn thẻ: mua máy, trả góp, sửa máy', 'Mini CRM lưu toàn bộ dữ liệu khách', 'Gửi chiến dịch qua Messenger và Zalo'] },
      { title: 'AI tự động gửi sự kiện qua Meta CAPI', desc: 'Hỗ trợ tối ưu quảng cáo Facebook.',
        kws: ['Gửi sự kiện Lead, mua hàng về Meta', 'Meta tối ưu quảng cáo theo khách thật', 'Hướng tới giảm chi phí mỗi lead'] },
    ],

    steps: [
      { intro: true, hold: 1600 },

      /* ---- 1. Mua máy: xác định nhu cầu → báo giá + hình → mời ghé ---- */
      { feature: 1 },
      { sep: 'Khách nhắn tin từ quảng cáo Facebook', style: 'time', hold: 800 },
      { kh: 'Shop ơi cho hỏi iPhone 17 Pro Max' },
      { ai: 'Dạ chào anh! Anh đang muốn **mua máy mới** hay cần **sửa chữa** máy ạ?', fast: true, meta: '⚡ Preny AI trả lời sau 2 giây', kw: 0 },
      { kh: 'Mua máy mới em, bản 256GB.' },
      { product: { img: 'iphone', name: 'iPhone 17 Pro Max 256GB', price: '33.990.000đ', note: 'Chính hãng VN/A · Bảo hành 12 tháng', button: 'Xem máy' }, fast: true, kw: 1 },
      { ai: 'Dạ máy còn đủ màu **Cam, Xanh Đậm và Bạc** ạ. Anh ghé cửa hàng **xem máy, cầm thử trực tiếp** nha!', kw: 2 },

      /* ---- 2. Cọc / trả góp ---- */
      { feature: 2 },
      { kh: 'Trả góp được không em? Trả trước bao nhiêu?' },
      { ai: 'Dạ được ạ! Anh cho em hỏi anh **đang đi làm hay còn là sinh viên** ạ?', kw: 0 },
      { kh: 'Anh đi làm rồi.' },
      { ai: 'Dạ anh có đang bị **nợ xấu** ở ngân hàng hay công ty tài chính nào không ạ? Nếu có nợ xấu thì bên em chưa hỗ trợ trả góp được ạ.', kw: 1 },
      { kh: 'Không có em.' },
      { ai: 'Dạ vậy anh đủ điều kiện ạ! **Trả trước và góp mỗi tháng** bao nhiêu thì nhân viên sẽ tư vấn cụ thể khi anh ghé. Anh dự kiến ghé **lúc nào** và cho em xin **SĐT** nha.', kw: 2 },
      { kh: 'Chiều mai 3h. Anh Phong, 0903 111 222.' },
      { card: {
          tag: '✓ Xác nhận lịch hẹn',
          lines: ['Khách hàng: Anh Phong · 0903 111 222', 'Nhu cầu: iPhone 17 Pro Max 256GB, trả góp', 'Thời gian: **15h00 thứ Tư, 11/11**', 'Cửa hàng: Di Động Xanh, 88 Cách Mạng Tháng 8, Q.3', 'Mang theo: **CCCD gắn chip**'],
        }, kw: 3, hold: 4500 },

      /* ---- 3. Sửa chữa: khách khác ---- */
      { feature: 3 },
      { screen: 'chat', hold: 500 },
      { sep: 'Khách khác nhắn tin · cần sửa máy', style: 'time', hold: 800 },
      { kh: 'Shop ơi máy mình bị vỡ màn hình, sửa bao nhiêu?' },
      { ai: 'Dạ chị dùng **máy model nào** ạ? Ngoài vỡ kính, máy có bị **sọc, loạn cảm ứng hay không lên hình** không chị?', fast: true, meta: '⚡ Preny AI trả lời sau 2 giây', kw: 0 },
      { img: 'vo-man', hold: 1500 },
      { kh: 'iPhone 13, vỡ kính thôi, cảm ứng vẫn bình thường.' },
      { ai: 'Dạ **iPhone 13 thay kính** giá sơ bộ khoảng **1.200.000đ**, làm trong 60 phút ạ. Chị ghé để kỹ thuật **kiểm tra kỹ và báo giá chính xác** nha. Chị dự kiến ghé lúc nào và cho em xin SĐT ạ?', kw: 1 },
      { kh: 'Trưa nay 12h. Chị Hạnh, 0977 333 444.' },
      { card: {
          tag: '✓ Xác nhận lịch sửa máy',
          lines: ['Khách hàng: Chị Hạnh · 0977 333 444', 'Máy: iPhone 13 · vỡ kính, cảm ứng bình thường', 'Giá sơ bộ: **1.200.000đ**, kỹ thuật báo giá chính xác sau khi kiểm tra', 'Thời gian: **12h00 hôm nay, 10/11**'],
        }, kw: 2, hold: 4500 },

      /* ---- 4–6. Chỉ hiện ở cột trái ---- */
      { feature: 4, hold: 500 }, { wait: 700, kw: 0 }, { wait: 700, kw: 1 }, { wait: 2200, kw: 2 },
      { feature: 5, hold: 500 }, { wait: 700, kw: 0 }, { wait: 700, kw: 1 }, { wait: 2200, kw: 2 },
      { feature: 6, hold: 500 }, { wait: 700, kw: 0 }, { wait: 700, kw: 1 }, { wait: 2200, kw: 2 },

      /* ---- Kết thúc ---- */
      { end: true, hold: 400 },
      { screen: { title: 'Preny AI', sub: 'Giải pháp AI bán hàng tự động' }, hold: 400 },
      { endcard: { title: 'Chốt lịch ghé với **Preny AI**',
          sub: 'Báo giá, lọc hồ sơ trả góp, tiếp nhận sửa chữa, chăm sóc sau bán, remarketing và tối ưu quảng cáo trong một hệ thống.',
          button: 'Đăng ký dùng thử miễn phí', contact: '**preny.ai** · Hotline 0389 647 778' }, hold: 5000 },
    ],
  };
})();
