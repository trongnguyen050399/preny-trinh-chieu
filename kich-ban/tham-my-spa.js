/* Kịch bản: THẨM MỸ / SPA — khung ngang 16:9
   Pipeline (theo yêu cầu): trả lời câu hỏi + xác định dịch vụ khách quan tâm → khai thác theo dịch vụ:
   tình trạng hiện tại, xin hình, bị bao lâu; đã từng thăm khám / can thiệp chưa; muốn cải thiện điểm nào
   → xin SĐT để tư vấn kỹ hơn → nếu khách muốn tới khám mới hỏi giờ ghé → xác nhận lịch.
   Chăm sóc sau liệu trình, Remarketing, Meta CAPI: chỉ hiện ở cột trái.
   Tên spa, giá, số điện thoại: tôi tự đặt để minh họa. */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    badge: 'AI CHATBOT · THẨM MỸ & SPA',
    shop: { name: 'An Nhiên Clinic', initials: 'AN' },
    headline: { pre: 'AI chatbot tư vấn & chốt lịch hẹn', em: 'ngành Thẩm mỹ, Spa' },
    sub: 'Hỏi đúng tình trạng, xin hình, khai thác mong muốn rồi chốt lịch soi da, thăm khám.',
    cta: 'Dùng thử miễn phí tại **preny.ai**\nHotline **0389 647 778**',
    speed: 1.13,
    timing: { read0: 1000, readPerChar: 28, readMax: 4500, type0: 800, typePerChar: 3, typeMax: 1500, fastType: 500,
              featureHold: 1400, sepHold: 1100, cardHold: 4000, introCard: 250 },

    images: {
      'da-mun': U('1660646463659-df77c1580723'),
    },

    features: [
      { title: 'AI giải đáp và xác định dịch vụ khách quan tâm', desc: 'Trả lời ngay, không bỏ lỡ khách.',
        kws: ['Trả lời ngay giá, dịch vụ', 'Xác định dịch vụ khách quan tâm'] },
      { title: 'AI khai thác tình trạng và mong muốn', desc: 'Hỏi như chuyên viên tư vấn thật.',
        kws: ['Xin hình, hỏi tình trạng, bị bao lâu', 'Hỏi đã từng điều trị, can thiệp chưa', 'Hỏi mong muốn cải thiện điểm nào'] },
      { title: 'AI xin SĐT, đặt lịch và chuyển chuyên viên', desc: 'Lead nóng chuyển ngay cho tư vấn viên.',
        kws: ['Xin SĐT để chuyên viên tư vấn kỹ', 'Mời ghé soi da miễn phí', 'Hỏi giờ ghé, gửi xác nhận lịch', 'Dặn dò trước buổi hẹn'] },
      { title: 'AI tự động chăm sóc khách sau liệu trình', desc: 'Giữ chân khách, tăng tỷ lệ quay lại.',
        kws: ['Nhắc lịch trước buổi hẹn', 'Hỏi thăm da sau mỗi buổi điều trị', 'Nhắc buổi tiếp theo của liệu trình'] },
      { title: 'Bộ công cụ Remarketing FMM và ZBS', desc: 'Khai thác hiệu quả dữ liệu khách hàng.',
        kws: ['AI tự gắn thẻ theo dịch vụ quan tâm', 'Mini CRM lưu toàn bộ dữ liệu khách', 'Gửi chiến dịch qua Messenger và Zalo'] },
      { title: 'AI tự động gửi sự kiện qua Meta CAPI', desc: 'Hỗ trợ tối ưu quảng cáo Facebook.',
        kws: ['Gửi sự kiện Lead, đặt lịch về Meta', 'Meta tối ưu quảng cáo theo khách thật', 'Hướng tới giảm chi phí mỗi lead'] },
    ],

    steps: [
      { intro: true, hold: 1600 },

      /* ---- 1. Giải đáp + xác định dịch vụ ---- */
      { feature: 1 },
      { sep: 'Khách nhắn tin từ quảng cáo Facebook', style: 'time', hold: 800 },
      { kh: 'Spa ơi, bên mình có trị mụn không, giá sao ạ?' },
      { ai: 'Dạ có ạ chị! 🌸', fast: true, meta: '⚡ Preny AI trả lời sau 2 giây', kw: 0 },
      { ai: 'Bên em có **liệu trình trị mụn chuẩn y khoa**, giá tùy tình trạng da, **từ 450.000đ/buổi** ạ. Chị đang muốn trị **mụn, thâm hay sẹo rỗ** ạ?', kw: 1 },
      { kh: 'Mụn với thâm em ạ.' },

      /* ---- 2. Khai thác tình trạng, lịch sử, mong muốn ---- */
      { feature: 2 },
      { ai: 'Để tư vấn chính xác, chị cho em xin **1 tấm hình da mặt hiện tại** và chị bị mụn **bao lâu rồi** ạ?', kw: 0 },
      { img: 'da-mun', hold: 1500 },
      { kh: 'Khoảng 1 năm nay, nổi nhiều ở má với cằm.' },
      { ai: 'Dạ em cảm ơn chị. Trước đây chị đã **từng điều trị hay can thiệp** gì chưa ạ?', kw: 1 },
      { kh: 'Có tự mua thuốc bôi với đi nặn mụn vài lần, đỡ rồi lại bị.' },
      { ai: 'Dạ em hiểu ạ. Chị muốn **cải thiện điểm nào nhất**: hết mụn viêm, mờ thâm hay se lỗ chân lông ạ?', kw: 2 },
      { kh: 'Hết mụn với mờ thâm là được.' },

      /* ---- 3. Xin SĐT → mời ghé → xác nhận lịch ---- */
      { feature: 3 },
      { ai: 'Dạ tình trạng của chị cần **soi da trực tiếp** để bác sĩ lên liệu trình phù hợp ạ. Chị cho em xin **SĐT** để chuyên viên tư vấn kỹ hơn nha!', kw: 0 },
      { kh: '0909 876 543 nhé' },
      { ai: 'Dạ em đã chuyển chuyên viên ạ. Tuần này bên em **soi da miễn phí**, chị có muốn ghé để bác sĩ xem trực tiếp không ạ?', meta: '✓ Đã chuyển lead cho chuyên viên', kw: 1 },
      { kh: 'Chiều thứ Năm 5h được không em?' },
      { card: {
          tag: '✓ Xác nhận lịch hẹn',
          lines: ['Khách hàng: Chị Linh · 0909 876 543', 'Dịch vụ: Soi da & tư vấn trị mụn, thâm', 'Thời gian: **17h00 thứ Năm, 12/11**', 'Địa chỉ: An Nhiên Clinic, 56 Hai Bà Trưng, Q.1'],
        }, kw: 2, hold: 4500 },
      { ai: 'Hẹn gặp chị thứ Năm nha! Chị nhớ **không trang điểm đậm** khi đến để soi da chính xác hơn ạ 🌸', fast: true, kw: 3, hold: 2800 },

      /* ---- 4–6. Chỉ hiện ở cột trái ---- */
      { feature: 4, hold: 500 }, { wait: 700, kw: 0 }, { wait: 700, kw: 1 }, { wait: 2200, kw: 2 },
      { feature: 5, hold: 500 }, { wait: 700, kw: 0 }, { wait: 700, kw: 1 }, { wait: 2200, kw: 2 },
      { feature: 6, hold: 500 }, { wait: 700, kw: 0 }, { wait: 700, kw: 1 }, { wait: 2200, kw: 2 },

      /* ---- Kết thúc ---- */
      { end: true, hold: 400 },
      { screen: { title: 'Preny AI', sub: 'Giải pháp AI chăm sóc khách hàng tự động' }, hold: 400 },
      { endcard: { title: 'Chốt lịch hẹn với **Preny AI**',
          sub: 'Khai thác tình trạng, xin SĐT, đặt lịch, chăm sóc sau liệu trình, remarketing và tối ưu quảng cáo trong một hệ thống.',
          button: 'Đăng ký dùng thử miễn phí', contact: '**preny.ai** · Hotline 0389 647 778' }, hold: 5000 },
    ],
  };
})();
