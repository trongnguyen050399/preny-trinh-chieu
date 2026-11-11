/* Kịch bản: BỆNH VIỆN — khung ngang 16:9
   Pipeline (theo yêu cầu): chỉ trả lời câu hỏi của khách. Khi khách muốn tới khám mới xin giờ ghé + SĐT
   → xác nhận lịch khám + hướng dẫn cần mang gì khi tới.
   Chăm sóc sau khám, Remarketing, Meta CAPI: chỉ hiện ở cột trái, không diễn trong chat.
   Tên bệnh viện, giá, số điện thoại: tôi tự đặt để minh họa.
   Cách viết bước: xem chú thích đầu file kich-ban/thoi-trang.js. { wait: ms, kw } = chỉ sổ keyword ở cột trái. */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    badge: 'AI CHATBOT · NGÀNH Y TẾ',
    shop: { name: 'BV Đa khoa Phúc An', initials: 'PA' },
    headline: { pre: 'AI chatbot tư vấn & đặt lịch khám', em: 'cho Bệnh viện' },
    sub: 'Giải đáp thắc mắc 24/7, đặt lịch khám và hướng dẫn người bệnh chuẩn bị trước khi đến.',
    cta: 'Dùng thử miễn phí tại **preny.ai**\nHotline **0389 647 778**',
    speed: 1.13,
    timing: { read0: 1000, readPerChar: 28, readMax: 4500, type0: 800, typePerChar: 3, typeMax: 1500, fastType: 500,
              featureHold: 1400, sepHold: 1100, cardHold: 4000, introCard: 250 },

    images: {
      'sanh': U('1565262353342-6e919eab5b58'),
    },

    features: [
      { title: 'AI giải đáp thắc mắc của người bệnh 24/7', desc: 'Trả lời ngay, không để người bệnh phải chờ.',
        kws: ['Trả lời ngay, cả ngoài giờ hành chính', 'Giải đáp dịch vụ, quy trình khám', 'Báo chi phí, bảo hiểm y tế', 'Giờ làm việc, gợi ý đặt lịch trước'] },
      { title: 'AI đặt lịch khám và hướng dẫn chuẩn bị', desc: 'Chỉ xin thông tin khi người bệnh muốn đến khám.',
        kws: ['Hỏi giờ ghé và SĐT', 'Gửi xác nhận lịch khám', 'Hướng dẫn cần mang gì khi tới', 'Chuyển lịch hẹn cho bệnh viện'] },
      { title: 'AI tự động chăm sóc người bệnh sau khám', desc: 'Giữ liên lạc, tăng tỷ lệ quay lại.',
        kws: ['Nhắc lịch trước ngày khám', 'Hỏi thăm sức khỏe sau khám', 'Nhắc lịch tái khám đúng hẹn'] },
      { title: 'Bộ công cụ Remarketing FMM và ZBS', desc: 'Khai thác hiệu quả dữ liệu khách hàng.',
        kws: ['AI tự gắn thẻ theo nhu cầu khám', 'Mini CRM lưu toàn bộ dữ liệu', 'Gửi chương trình qua Messenger và Zalo'] },
      { title: 'AI tự động gửi sự kiện qua Meta CAPI', desc: 'Hỗ trợ tối ưu quảng cáo Facebook.',
        kws: ['Gửi sự kiện đặt lịch về Meta', 'Meta tối ưu quảng cáo theo khách thật', 'Hướng tới giảm chi phí mỗi lượt đặt lịch'] },
    ],

    steps: [
      { intro: true, hold: 1600 },

      /* ---- 1. Giải đáp thắc mắc ---- */
      { feature: 1 },
      { sep: 'Khách nhắn fanpage lúc 22:15', style: 'time', hold: 800 },
      { kh: 'Cho mình hỏi bệnh viện có nội soi dạ dày không? Nội soi có đau không?' },
      { ai: 'Dạ có ạ anh! 😊', fast: true, meta: '⚡ Preny AI trả lời ngay, cả ngoài giờ', kw: 0 },
      { ai: 'Bệnh viện có **nội soi dạ dày gây mê**: anh ngủ khoảng 15–20 phút, **không đau, không khó chịu** ạ. Bác sĩ chuyên khoa tiêu hóa trực tiếp thực hiện.', kw: 1 },
      { aiImg: 'sanh', hold: 1400 },
      { kh: 'Chi phí bao nhiêu? Có áp dụng BHYT không em?' },
      { ai: 'Dạ gói nội soi gây mê **từ 1.800.000đ** ạ. Bệnh viện **có áp dụng BHYT** và bảo lãnh viện phí, mức chi trả tùy loại thẻ của anh nha.', kw: 2 },
      { kh: 'Chủ nhật có khám không?' },
      { ai: 'Dạ bệnh viện khám **cả Chủ nhật, từ 7h00 đến 16h30** ạ. Anh có muốn em đặt lịch trước để không phải chờ lâu không ạ?', kw: 3 },

      /* ---- 2. Khách muốn khám → xin giờ + SĐT → xác nhận lịch + hướng dẫn ---- */
      { feature: 2 },
      { kh: 'Ok em, đặt giúp anh sáng Chủ nhật này nhé' },
      { ai: 'Dạ anh muốn khám **khoảng mấy giờ** và cho em xin **SĐT** để bệnh viện xác nhận lịch nha.', kw: 0 },
      { kh: '8h sáng nhé. Anh tên Lê Văn Hoàng, 0912 345 678' },
      { card: {
          tag: '✓ Xác nhận lịch khám',
          lines: ['Người bệnh: Lê Văn Hoàng · 0912 345 678', 'Dịch vụ: Khám tiêu hóa, nội soi dạ dày gây mê', 'Thời gian: **8h00 Chủ nhật, 15/11**', 'Nơi đến: Quầy tiếp đón tầng 1, Bệnh viện Đa khoa Phúc An'],
        }, kw: 1, hold: 4500 },
      { ai: 'Khi đến anh nhớ mang theo:\n📌 **CCCD và thẻ BHYT**\n📌 Kết quả khám, đơn thuốc cũ (nếu có)\n📌 **Nhịn ăn ít nhất 6 tiếng** trước nội soi, chỉ uống nước lọc\n📌 Nên đi cùng người thân, sau gây mê không tự lái xe',
        meta: '📋 Tự động · Hướng dẫn chuẩn bị', kw: 2, hold: 6500 },
      { kh: 'Cảm ơn em nhiều 👍' },
      { ai: 'Dạ lịch của anh đã được chuyển tới quầy tiếp đón. Chúc anh sức khỏe ạ! 💙', fast: true, meta: '✓ Đã chuyển lịch hẹn cho bệnh viện', kw: 3, hold: 2600 },

      /* ---- 3–5. Chỉ hiện ở cột trái ---- */
      { feature: 3, hold: 500 }, { wait: 700, kw: 0 }, { wait: 700, kw: 1 }, { wait: 2200, kw: 2 },
      { feature: 4, hold: 500 }, { wait: 700, kw: 0 }, { wait: 700, kw: 1 }, { wait: 2200, kw: 2 },
      { feature: 5, hold: 500 }, { wait: 700, kw: 0 }, { wait: 700, kw: 1 }, { wait: 2200, kw: 2 },

      /* ---- Kết thúc ---- */
      { end: true, hold: 400 },
      { screen: { title: 'Preny AI', sub: 'Giải pháp AI chăm sóc khách hàng tự động' }, hold: 400 },
      { endcard: { title: 'Tư vấn & đặt lịch tự động với **Preny AI**',
          sub: 'Giải đáp 24/7, đặt lịch khám, hướng dẫn chuẩn bị, chăm sóc sau khám, remarketing và tối ưu quảng cáo trong một hệ thống.',
          button: 'Đăng ký dùng thử miễn phí', contact: '**preny.ai** · Hotline 0389 647 778' }, hold: 5000 },
    ],
  };
})();
