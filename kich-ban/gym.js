/* Kịch bản: PHÒNG GYM — khung ngang 16:9
   Pipeline (theo yêu cầu): xác định dịch vụ quan tâm → hỏi mục tiêu luyện tập (giảm cân, tăng cơ…)
   → hỏi khu vực khách đang ở → giới thiệu chi nhánh gần nhất + mời tập thử → hỏi thời gian dự kiến → xin SĐT.
   Chăm sóc hội viên, Remarketing, Meta CAPI: chỉ hiện ở cột trái.
   Tên phòng tập, giá, địa chỉ, số điện thoại: tôi tự đặt để minh họa. */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    badge: 'AI CHATBOT · PHÒNG GYM',
    shop: { name: 'Power Fit Gym', initials: 'PF' },
    headline: { pre: 'AI chatbot tư vấn & mời tập thử', em: 'cho Phòng Gym' },
    sub: 'Hỏi mục tiêu, khu vực, giới thiệu chi nhánh gần nhất và chốt lịch tập thử.',
    cta: 'Dùng thử miễn phí tại **preny.ai**\nHotline **0389 647 778**',
    speed: 1.13,
    timing: { read0: 1000, readPerChar: 28, readMax: 4500, type0: 800, typePerChar: 3, typeMax: 1500, fastType: 500,
              featureHold: 1400, sepHold: 1100, cardHold: 4000, introCard: 250 },

    images: {
      'gym': U('1757924284732-4189190321cf'),
    },

    features: [
      { title: 'AI giải đáp và xác định dịch vụ khách quan tâm', desc: 'Trả lời ngay, không bỏ lỡ khách.',
        kws: ['Trả lời ngay giá, gói tập', 'Xác định dịch vụ: Gym, Yoga, PT'] },
      { title: 'AI khai thác mục tiêu và khu vực của khách', desc: 'Tư vấn đúng người, đúng chi nhánh.',
        kws: ['Hỏi mục tiêu: giảm cân, tăng cơ…', 'Gợi ý lộ trình đúng mục tiêu', 'Hỏi khu vực khách đang ở'] },
      { title: 'AI mời tập thử và đặt lịch', desc: 'Đưa khách từ tin nhắn tới phòng tập.',
        kws: ['Giới thiệu chi nhánh gần nhất', 'Mời tập thử miễn phí, hỏi thời gian', 'Xin SĐT để PT hỗ trợ', 'Gửi xác nhận lịch tập thử'] },
      { title: 'AI tự động chăm sóc hội viên', desc: 'Giữ chân hội viên, tăng tỷ lệ gia hạn.',
        kws: ['Nhắc lịch trước buổi tập thử', 'Hỏi thăm sau buổi tập, tư vấn gói', 'Nhắc gia hạn thẻ trước khi hết hạn'] },
      { title: 'Bộ công cụ Remarketing FMM và ZBS', desc: 'Khai thác hiệu quả dữ liệu khách hàng.',
        kws: ['AI tự gắn thẻ theo mục tiêu tập', 'Mini CRM lưu toàn bộ dữ liệu khách', 'Gửi chiến dịch qua Messenger và Zalo'] },
      { title: 'AI tự động gửi sự kiện qua Meta CAPI', desc: 'Hỗ trợ tối ưu quảng cáo Facebook.',
        kws: ['Gửi sự kiện Lead, đặt lịch về Meta', 'Meta tối ưu quảng cáo theo khách thật', 'Hướng tới giảm chi phí mỗi lead'] },
    ],

    steps: [
      { intro: true, hold: 1600 },

      /* ---- 1. Xác định dịch vụ ---- */
      { feature: 1 },
      { sep: 'Khách nhắn tin từ quảng cáo Facebook', style: 'time', hold: 800 },
      { kh: 'Gym bên mình thẻ tháng bao nhiêu vậy?' },
      { ai: 'Dạ chào anh! 💪', fast: true, meta: '⚡ Preny AI trả lời sau 2 giây' },
      { ai: 'Thẻ tập gym **từ 499.000đ/tháng** ạ. Bên em có **Gym, Yoga và PT 1 kèm 1**, anh đang quan tâm gói nào ạ?', kw: [0, 1] },
      { kh: 'Gym em, có PT kèm thì càng tốt.' },

      /* ---- 2. Mục tiêu + khu vực ---- */
      { feature: 2 },
      { ai: 'Dạ mục tiêu tập của anh là **giảm cân, tăng cơ** hay cải thiện sức khỏe ạ?', kw: 0 },
      { kh: 'Giảm mỡ bụng, tăng cơ chút. Anh 1m70, 78kg.' },
      { ai: 'Dạ anh hợp **lộ trình giảm mỡ – tăng cơ 3 tháng**, PT lên giáo án và thực đơn riêng ạ. Anh đang ở **khu vực nào** để em tìm chi nhánh gần nhất nha?', kw: [1, 2] },
      { kh: 'Anh ở Bình Thạnh, gần Hàng Xanh.' },

      /* ---- 3. Chi nhánh gần nhất → mời tập thử → thời gian → SĐT ---- */
      { feature: 3 },
      { ai: 'Chi nhánh gần anh nhất là **Power Fit Hàng Xanh**, 210 Xô Viết Nghệ Tĩnh, chỉ **khoảng 5 phút** đi xe ạ.', kw: 0 },
      { aiImg: 'gym', hold: 1500 },
      { ai: 'Anh được **tập thử miễn phí 3 buổi** kèm PT và đo chỉ số cơ thể nha! Anh dự kiến ghé **ngày nào, khung giờ nào** ạ?', kw: 1 },
      { kh: 'Tối mai 7h nhé.' },
      { ai: 'Dạ anh cho em xin **SĐT** để PT liên hệ hỗ trợ anh nha.', kw: 2 },
      { kh: 'Anh Đức, 0938 765 432' },
      { card: {
          tag: '✓ Xác nhận lịch tập thử',
          lines: ['Khách hàng: Anh Đức · 0938 765 432', 'Mục tiêu: Giảm mỡ, tăng cơ', 'Thời gian: **19h00 thứ Tư, 11/11**', 'Chi nhánh: Power Fit Hàng Xanh, 210 Xô Viết Nghệ Tĩnh', 'Ưu đãi: 3 buổi tập thử + đo chỉ số cơ thể'],
        }, kw: 3, hold: 4500 },
      { ai: 'Anh nhớ mang **giày thể thao và khăn** nha, PT Huy sẽ đón anh tại quầy ạ! 💪', fast: true, meta: '✓ Đã chuyển lead cho PT', hold: 2800 },

      /* ---- 4–6. Chỉ hiện ở cột trái ---- */
      { feature: 4, hold: 500 }, { wait: 700, kw: 0 }, { wait: 700, kw: 1 }, { wait: 2200, kw: 2 },
      { feature: 5, hold: 500 }, { wait: 700, kw: 0 }, { wait: 700, kw: 1 }, { wait: 2200, kw: 2 },
      { feature: 6, hold: 500 }, { wait: 700, kw: 0 }, { wait: 700, kw: 1 }, { wait: 2200, kw: 2 },

      /* ---- Kết thúc ---- */
      { end: true, hold: 400 },
      { screen: { title: 'Preny AI', sub: 'Giải pháp AI chăm sóc khách hàng tự động' }, hold: 400 },
      { endcard: { title: 'Tư vấn & mời tập thử với **Preny AI**',
          sub: 'Khai thác mục tiêu, giới thiệu chi nhánh, đặt lịch tập thử, chăm sóc hội viên, remarketing và tối ưu quảng cáo trong một hệ thống.',
          button: 'Đăng ký dùng thử miễn phí', contact: '**preny.ai** · Hotline 0389 647 778' }, hold: 5000 },
    ],
  };
})();
