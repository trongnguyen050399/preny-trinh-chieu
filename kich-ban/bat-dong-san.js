/* Kịch bản: BẤT ĐỘNG SẢN — khung ngang 16:9
   Pipeline (theo yêu cầu): trả lời câu hỏi + khai thác nhu cầu (ở / nghỉ dưỡng / đầu tư) → hỏi ngân sách
   → giới thiệu sản phẩm phù hợp + gửi hình + mời đi xem → khách đồng ý mới xin: ngày giờ, số người,
   tự đi hay đón ở đâu, SĐT → xác nhận lịch.
   Chăm sóc sau xem, Remarketing, Meta CAPI: chỉ hiện ở cột trái.
   Tên sàn, lô đất, giá, số điện thoại: tôi tự đặt để minh họa. */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    badge: 'AI CHATBOT · BẤT ĐỘNG SẢN',
    shop: { name: 'Nhà Đất Phú Gia', initials: 'PG' },
    headline: { pre: 'AI chatbot tư vấn & hẹn lịch xem', em: 'ngành Bất động sản' },
    sub: 'Khai thác nhu cầu, ngân sách, gợi ý sản phẩm phù hợp và chốt lịch đưa khách đi xem.',
    cta: 'Dùng thử miễn phí tại **preny.ai**\nHotline **0389 647 778**',
    speed: 1.13,
    timing: { read0: 1000, readPerChar: 28, readMax: 4500, type0: 800, typePerChar: 3, typeMax: 1500, fastType: 500,
              featureHold: 1400, sepHold: 1100, cardHold: 4000, introCard: 250 },

    images: {
      'dat-1': U('1774697443203-0f54409d1613'),
      'dat-2': U('1773215023063-e662ea91a69c'),
      'dat-3': U('1777105971843-73011c700204'),
    },

    features: [
      { title: 'AI giải đáp và khai thác nhu cầu khách', desc: 'Hỏi đúng câu, hiểu đúng khách trước khi tư vấn.',
        kws: ['Trả lời ngay pháp lý, vị trí, tiện ích', 'Hỏi mục đích: ở, nghỉ dưỡng hay đầu tư', 'Hỏi ngân sách để lọc sản phẩm'] },
      { title: 'AI gợi ý sản phẩm phù hợp và mời đi xem', desc: 'Đúng mục đích, đúng ngân sách.',
        kws: ['Gợi ý lô đúng nhu cầu và ngân sách', 'Gửi hình ảnh, giá từng lô', 'Mời khách đi xem thực tế'] },
      { title: 'AI hẹn lịch xem và chuyển lead cho sale', desc: 'Khách đồng ý mới xin thông tin.',
        kws: ['Hỏi ngày giờ, số người, điểm đón', 'Xin SĐT, gửi xác nhận lịch xem', 'Chuyển lead kèm nhu cầu cho sale'] },
      { title: 'AI tự động chăm sóc khách sau khi xem', desc: 'Nuôi khách đến khi sẵn sàng xuống tiền.',
        kws: ['Hỏi cảm nhận sau buổi xem', 'Gửi lô mới, tiến độ đúng nhu cầu', 'Nhắc ưu đãi, lịch mở bán'] },
      { title: 'Bộ công cụ Remarketing FMM và ZBS', desc: 'Khai thác hiệu quả dữ liệu khách hàng.',
        kws: ['AI tự gắn thẻ theo nhu cầu, ngân sách', 'Mini CRM lưu toàn bộ dữ liệu khách', 'Gửi chiến dịch qua Messenger và Zalo'] },
      { title: 'AI tự động gửi sự kiện qua Meta CAPI', desc: 'Hỗ trợ tối ưu quảng cáo Facebook.',
        kws: ['Gửi sự kiện Lead về Meta', 'Meta tối ưu quảng cáo theo khách thật', 'Hướng tới giảm chi phí mỗi lead'] },
    ],

    steps: [
      { intro: true, hold: 1600 },

      /* ---- 1. Giải đáp + khai thác nhu cầu + ngân sách ---- */
      { feature: 1 },
      { sep: 'Khách nhắn tin từ quảng cáo Facebook', style: 'time', hold: 800 },
      { kh: 'Dự án bên em còn lô nào không? Có sổ riêng chưa?' },
      { ai: 'Dạ còn ạ anh! 😊', fast: true, meta: '⚡ Preny AI trả lời sau 2 giây' },
      { ai: 'Dự án đã có **sổ hồng riêng từng lô**, hạ tầng hoàn thiện, cách trung tâm khoảng 25 phút ạ. Anh tìm hiểu để **ở, nghỉ dưỡng hay đầu tư** ạ?', kw: [0, 1] },
      { kh: 'Anh mua đầu tư, giữ vài năm rồi bán.' },
      { ai: 'Dạ vậy anh dự kiến **ngân sách khoảng bao nhiêu** để em lọc lô phù hợp nhất ạ?', kw: 2 },
      { kh: 'Tầm 2 tỷ đổ lại em.' },

      /* ---- 2. Gợi ý sản phẩm + gửi hình + mời đi xem ---- */
      { feature: 2 },
      { ai: 'Với mục đích đầu tư và ngân sách 2 tỷ, em gợi ý anh 3 lô **gần trục đường lớn**, dễ thanh khoản ạ:', kw: 0 },
      { catalog: [
          { name: 'Lô góc A12 · 100m²', sub: 'Mặt tiền đường 16m', price: '1,95 tỷ', tag: 'Lô góc', art: 'dat-1', buy: 'Xem chi tiết' },
          { name: 'Lô B07 · 90m²', sub: 'Gần trường học, chợ', price: '1,72 tỷ', tag: 'Giá tốt', art: 'dat-2', buy: 'Xem chi tiết' },
          { name: 'Lô C21 · 95m²', sub: 'Cạnh công viên', price: '1,88 tỷ', tag: 'Sổ sẵn', art: 'dat-3', buy: 'Xem chi tiết' },
        ], kw: 1, hold: 4500 },
      { ai: 'Cuối tuần này bên em có **xe đưa đón đi xem đất miễn phí**, anh sắp xếp đi xem thực tế cùng em nhé?', kw: 2 },
      { kh: 'Ok, cho anh đi xem thử.' },

      /* ---- 3. Khách đồng ý → hỏi thông tin → xác nhận lịch ---- */
      { feature: 3 },
      { ai: 'Dạ tuyệt quá ạ! Anh cho em xin: **ngày giờ** anh đi được, **mấy người** đi cùng, anh **tự đi hay cần xe đón** ở đâu, và **SĐT** liên hệ nha.', kw: 0 },
      { kh: 'Sáng thứ Bảy 9h, 2 người. Đón anh ở 168 Nguyễn Văn Linh, Q.7 nhé. Anh Tuấn, 0987 654 321.' },
      { card: {
          tag: '✓ Xác nhận lịch xem đất',
          lines: ['Khách hàng: Anh Tuấn · 0987 654 321', 'Thời gian: **9h00 thứ Bảy, 14/11**', 'Số người: 2 · Xe đón tại 168 Nguyễn Văn Linh, Q.7', 'Lô quan tâm: A12, B07 · Mục đích: đầu tư · Ngân sách khoảng 2 tỷ'],
        }, kw: 1, hold: 4500 },
      { ai: 'Chuyên viên **Minh Khoa** sẽ gọi anh trước 1 ngày để xác nhận và đón anh đúng giờ ạ! 🚗', meta: '✓ Đã chuyển lead cho sale', kw: 2, hold: 2600 },

      /* ---- 4–6. Chỉ hiện ở cột trái ---- */
      { feature: 4, hold: 500 }, { wait: 700, kw: 0 }, { wait: 700, kw: 1 }, { wait: 2200, kw: 2 },
      { feature: 5, hold: 500 }, { wait: 700, kw: 0 }, { wait: 700, kw: 1 }, { wait: 2200, kw: 2 },
      { feature: 6, hold: 500 }, { wait: 700, kw: 0 }, { wait: 700, kw: 1 }, { wait: 2200, kw: 2 },

      /* ---- Kết thúc ---- */
      { end: true, hold: 400 },
      { screen: { title: 'Preny AI', sub: 'Giải pháp AI chăm sóc khách hàng tự động' }, hold: 400 },
      { endcard: { title: 'Chốt lịch xem với **Preny AI**',
          sub: 'Khai thác nhu cầu, gợi ý sản phẩm, hẹn lịch xem, chăm sóc khách, remarketing và tối ưu quảng cáo trong một hệ thống.',
          button: 'Đăng ký dùng thử miễn phí', contact: '**preny.ai** · Hotline 0389 647 778' }, hold: 5000 },
    ],
  };
})();
