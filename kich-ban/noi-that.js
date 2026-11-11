/* Kịch bản: NỘI THẤT — video dọc 9:16, khoảng 110 giây
   Fanpage: Nội Thất Việt. Khách: anh Nguyễn Nam. Nội dung theo kịch bản bạn gửi.
   Các loại bước: xem chú thích đầu file kich-ban/thoi-trang.js. Thêm cho video này:
     { ad: {...}, press: 1800 }          thẻ quảng cáo Facebook, sau `press` ms khách bấm "Gửi tin nhắn"
     { product: { img, name, price, note, button } }   AI gửi hình + thẻ sản phẩm
     { ai: '…', buttons: ['⭐ Đánh giá dịch vụ'] }      tin AI có nút bấm
     { overlay: {...} }                  hiệu ứng hệ thống phủ lên điện thoại (không phải tin nhắn)
     { endscreen: { sub } }              màn kết thúc toàn khung
   Ảnh: Unsplash (giấy phép Unsplash, dùng thương mại miễn phí). */
(function () {
  const U = (id, w = 900, h = 700) => 'https://images.unsplash.com/photo-' + id + `?w=${w}&h=${h}&fit=crop&q=80&auto=format`;

  window.KICH_BAN = {
    format: '9:16',
    logo: 'https://preny.ai/images/logo.svg',
    badge: 'PRENY AI · NGÀNH NỘI THẤT',
    shop: { name: 'Nội Thất Việt', initials: 'NV' },
    headline: { pre: 'AI chatbot tư vấn & giữ chân khách', em: 'ngành Nội thất' },
    sub: 'Tư vấn hàng có sẵn, đóng theo yêu cầu, tự bám đuổi khách và gửi Lead về Meta.',
    speed: 1.085,   // canh cho video dài khoảng 110 giây
    timing: { read0: 1100, readPerChar: 30, readMax: 4800, type0: 900, typePerChar: 4, typeMax: 1700, fastType: 600,
              featureHold: 1500, sepHold: 1400, cardHold: 3200 },

    images: {
      'ad': U('1618221195710-dd6b41faaea6', 1000, 560),
      'sofa': U('1672345158827-7f4aa9467b49'),
      'tu-1': U('1784651858840-0f077fad4e1e'),
      'tu-2': U('1722349674028-a148f4364e43', 800, 800),
    },

    features: [
      { title: 'Khách nhắn từ quảng cáo Facebook', desc: 'Khách xem quảng cáo nội thất có sẵn và đóng theo yêu cầu, bấm "Gửi tin nhắn".' },
      { title: 'AI tư vấn nội thất có sẵn', desc: 'Gửi ngay hình và thẻ sản phẩm kèm giá.' },
      { title: 'AI tư vấn nội thất đo theo yêu cầu', desc: 'Hỏi kích thước, màu gỗ và gửi mẫu tham khảo.' },
      { title: 'AI xin SĐT và địa chỉ', desc: 'Chủ động xin thông tin để báo phí giao và hẹn đo.' },
      { title: 'Tự động gửi 3 tin Follow-up', desc: 'Khách đã xem nhưng chưa trả lời: AI tự nhắc sau 3, 10 và 20 giờ.' },
      { title: 'Khách quay lại và xác nhận nhu cầu', desc: 'AI tổng hợp thông tin tư vấn và đơn hàng.' },
      { title: 'Gửi sự kiện Lead lên Meta', desc: 'Chạy ngầm trên hệ thống, khách không nhìn thấy.' },
      { title: 'FMM xin đánh giá', desc: 'Tự động xin đánh giá sau khi giao hàng.' },
    ],

    steps: [
      { intro: true, hold: 1600 },

      /* 1. Khách nhắn từ quảng cáo Facebook */
      { feature: 1 },
      { ad: { label: 'Anh Nam đã trả lời quảng cáo', img: 'ad', text: 'Sofa có sẵn giao nhanh · Tủ áo đóng theo kích thước nhà bạn.', title: 'Nội thất có sẵn & đóng theo yêu cầu', cta: 'Gửi tin nhắn' }, press: 2000, hold: 1200 },
      { kh: 'Shop có sofa màu be sẵn không? Bên shop có làm tủ áo theo kích thước luôn không?' },
      { ai: 'Dạ có anh nhé! Bên em có sofa sẵn và nhận đóng nội thất theo kích thước. Em gửi anh mẫu sofa trước ạ!', fast: true, meta: '⚡ Preny AI trả lời ngay' },

      /* 2. AI tư vấn nội thất có sẵn */
      { feature: 2 },
      { product: { img: 'sofa', name: 'Sofa băng màu be', price: '8.900.000đ', button: 'Xem chi tiết' }, fast: true },
      { kh: 'Sofa dài bao nhiêu em? Phòng khách anh ngang 3 mét.' },
      { ai: 'Dạ mẫu sofa dài khoảng 2,4m ạ. Mình cần kiểm tra thêm lối đi và vị trí kê để bố trí phù hợp anh nhé.' },

      /* 3. AI tư vấn nội thất đo theo yêu cầu */
      { feature: 3 },
      { kh: 'Anh muốn làm thêm tủ quần áo theo kích thước phòng ngủ.' },
      { ai: 'Dạ được anh. Anh cho em xin chiều ngang, chiều cao dự kiến và màu gỗ mình thích nhé!' },
      { kh: 'Tủ ngang 2,4m, cao 2,6m. Anh thích màu gỗ sồi sáng.' },
      { ai: 'Dạ em gửi anh mẫu tủ tham khảo. Giá đóng theo yêu cầu sẽ được kỹ thuật xác nhận sau khi đo thực tế, chọn vật liệu và phụ kiện ạ.' },
      { product: { img: 'tu-1', name: 'Tủ quần áo gỗ sồi sáng', note: 'Mẫu tham khảo · đóng theo kích thước', button: 'Xem mẫu' }, fast: true },

      /* 4. AI xin SĐT và địa chỉ */
      { feature: 4 },
      { ai: 'Anh cho em xin SĐT và địa chỉ công trình để em kiểm tra phí giao sofa và chuyển kỹ thuật hẹn đo tủ nhé!' },
      { sep: 'Đã xem · khách chưa trả lời…', style: 'silent', hold: 1800 },

      /* 5. Tự động gửi 3 tin Follow-up */
      { feature: 5 },
      { sep: '— Sau 3 giờ —' },
      { ai: 'Anh ơi, mẫu sofa be 2,4m và tủ gỗ sáng em gửi có phù hợp không ạ? Em hỗ trợ mình thêm nhé!', meta: '🔁 Follow-up tự động · Tin 1' },
      { sep: '— Sau 10 giờ —' },
      { ai: 'Em gửi anh thêm mẫu tủ áo theo kích thước để mình tham khảo. Anh muốn bên em tư vấn bố trí không gian không ạ?', meta: '🔁 Follow-up tự động · Tin 2' },
      { aiImg: 'tu-2' },
      { sep: '— Sau 20 giờ —' },
      { ai: 'Anh Nam ơi, nếu mình vẫn cần sofa và đóng tủ, anh gửi em SĐT, địa chỉ nhé. Em chuyển nhân viên hỗ trợ ngay ạ!', meta: '🔁 Follow-up tự động · Tin 3' },

      /* 6. Khách quay lại và xác nhận nhu cầu */
      { feature: 6 },
      { kh: 'Anh Nguyễn Nam, 0900 000 286. Địa chỉ 123 Nguyễn Huệ, Quận 1, TP.HCM.' },
      { ai: 'Dạ em đã nhận thông tin!', fast: true },
      { card: { tag: '✓ Thông tin tư vấn & đơn hàng',
          lines: ['Người nhận: Nguyễn Nam', 'SĐT: 0900 000 286', 'Địa chỉ: 123 Nguyễn Huệ, Quận 1, TP.HCM', 'Màu sắc: Gỗ sồi sáng', 'Giá tủ: **Báo giá sau khảo sát**'] },
        fast: true, hold: 5000 },

      /* 7. Gửi sự kiện Lead lên Meta (hiệu ứng hệ thống, không phải tin nhắn) */
      { feature: 7 },
      { overlay: { head: 'PRENY AI → META CAPI', note: 'Hiệu ứng hệ thống · không hiển thị cho khách',
          rows: [['Event', 'Lead'], ['Lead ID', 'FURNI-LEAD-001'], ['Nhu cầu', 'Sofa có sẵn và tủ đặt đóng'], ['Nguồn', 'Facebook Messenger']],
          status: 'Gửi thành công (demo)' }, hold: 6500 },

      /* 8. FMM xin đánh giá */
      { feature: 8 },
      { sep: 'Tin nhắn FMM · sau khi giao hàng', style: 'time', hold: 1000 },
      { ai: 'Anh Nam ơi, cảm ơn anh đã tin tưởng chọn nội thất bên em! Anh dành ít phút đánh giá chất lượng sofa và trải nghiệm giao hàng nhé.',
        buttons: ['⭐ Đánh giá dịch vụ'], meta: '📣 FMM · Tự động xin đánh giá', hold: 5000 },

      /* Kết thúc: logo Preny AI – preny.ai */
      { end: true },
      { endscreen: { sub: 'preny.ai' }, hold: 4000 },
    ],
  };
})();
