/* Kịch bản: NHÀ CONTAINER — dọc 9:16, khoảng 130 giây. Làm theo kịch bản bạn gửi (Google Docs "NHÀ CONTAINER").
   Kênh: Facebook Ads → Messenger → Preny AI → Nhân viên tư vấn → Meta CAPI Lead. Không ZBS, không Purchase, không chốt đơn / thu cọc.
   Inbox của fanpage: khách Nguyễn Nam bên trái (avatar mặc định), Preny AI bên phải.
   Tên, SĐT, mã mẫu, trạng thái hệ thống: dữ liệu demo.

   ẢNH / VIDEO (cần thay bằng tư liệu thật của doanh nghiệp):
   - Ảnh nhà container: Unsplash (ảnh chụp thật). Mỗi mã mẫu là MỘT công trình: C01 có 2 ảnh (ngoài + trong) cùng một căn.
     Chưa xác minh được kích thước 20 feet của từng công trình trong ảnh.
   - Chưa có ảnh phòng ngủ / nhà vệ sinh container thật → album cảnh 3 dùng mặt ngoài, bên trong, cửa kính.
   - Chưa tìm được VIDEO thật của nhà container (Pexels, Pixabay không có) → tin video chỉ hiện ẢNH BÌA thật + nút phát,
     không giả lập chuyển động. Có video thật thì thêm vào images và đổi `aiVideo` sang khóa đó.
   - Không bịa giá: "bảng giá tham khảo" là thẻ tài liệu, không ghi con số; khi có bảng giá đã xác minh thì điền vào. */
(function () {
  const U = (id, w = 700, h = 700) => 'https://images.unsplash.com/photo-' + id + `?w=${w}&h=${h}&fit=crop&q=80&auto=format`;

  window.KICH_BAN = {
    format: '9:16',
    view: 'page',
    logo: 'https://preny.ai/images/logo.svg',
    badge: 'PRENY AI · NHÀ CONTAINER',
    shop: { name: 'Nhà Container Test', initials: 'NC' },
    chatHead: { title: 'Nguyễn Nam', sub: 'Messenger · nhắn từ quảng cáo', avatar: 'default' },
    headline: { pre: 'AI chatbot tư vấn & lấy SĐT', em: 'ngành nhà container' },
    sub: 'Tiếp nhận khách từ quảng cáo, gửi ảnh, video công trình, xin SĐT sớm và chuyển nhân viên tư vấn.',
    speed: 1.31,   // canh cho video khoảng 130 giây
    timing: { read0: 1100, readPerChar: 30, readMax: 4800, type0: 900, typePerChar: 4, typeMax: 1700, fastType: 600,
              featureHold: 1500, sepHold: 1400, cardHold: 3200 },

    images: {
      'c01-ngoai': U('1628394029761-acc83a2a08a6'),
      'c01-trong': U('1628394029749-ea3dcce4caa6'),
      'c02': U('1512917774080-9991f1c4c750'),
      'c03': U('1623731389652-079c8732ed34'),
      'c04': U('1745566589290-d678de04f990'),
      'c05': U('1529939828339-56039bb75a63'),
      'c06': U('1666648040183-957d990e4d1a'),
    },

    features: [
      { title: 'Khách nhắn từ quảng cáo Facebook', desc: 'Quảng cáo nhà container theo nhu cầu, khách bấm "Gửi tin nhắn".' },
      { title: 'Gửi mẫu thực tế, bảng giá tham khảo', desc: 'Gửi 4 ảnh công trình thật, không vòng vo khi khách hỏi giá.' },
      { title: 'Xác định mục đích sử dụng', desc: 'Hỏi nhanh để ở, kinh doanh hay homestay, gửi mẫu phù hợp.' },
      { title: 'Gửi video công trình', desc: 'Khách xem không gian, hỏi vận chuyển và lắp đặt.' },
      { title: 'Xin SĐT sớm', desc: 'Chuyển kỹ thuật kiểm tra vận chuyển, vị trí đặt nhà và chi phí.' },
      { title: 'Follow-up 5 tin trong 7 ngày', desc: 'Ngày 1, 2, 3, 5, 7 · chỉ gửi khi Meta cho phép, dừng khi khách gửi SĐT hoặc từ chối.' },
      { title: 'Ghi nhận nhu cầu, chuyển nhân viên', desc: 'Lưu thông tin, dừng follow-up; nhân viên tư vấn kỹ thuật, khảo sát, báo giá.' },
      { title: 'Gửi Meta CAPI Lead', desc: 'Ghi nhận khách tiềm năng để đo lường, tối ưu quảng cáo.',
        kws: ['Gửi Lead 1 lần, chống trùng', 'Chỉ gửi dữ liệu được phép', 'Không gửi Purchase khi mới tư vấn'] },
    ],

    steps: [
      { screen: { title: 'Facebook', sub: 'Bảng tin · Được tài trợ', avatar: 'fb', logo: false }, hold: 100 },
      { intro: true, hold: 1400 },

      /* CẢNH 1 – Khách nhắn từ quảng cáo Facebook */
      { feature: 1 },
      { ad: { label: 'Anh Nam đang xem bảng tin Facebook', head: 'NHÀ CONTAINER LẮP ĐẶT THEO NHU CẦU',
              text: 'Nhà container ở · Homestay · Văn phòng container · Nhà container kinh doanh.',
              imgs: [{ img: 'c04', label: 'Mẫu C04' }, { img: 'c01-ngoai', label: 'Mẫu C01' }, { img: 'c03', label: 'Mẫu C03' }, { img: 'c06', label: 'Mẫu C06' }],
              title: 'Nhiều kiểu thiết kế, lắp đặt theo nhu cầu', cta: 'Gửi tin nhắn' }, press: 3000, hold: 1100 },
      { screen: 'chat', hold: 400 },
      { sep: 'Nguyễn Nam nhắn tin từ quảng cáo · Nhà container lắp đặt theo nhu cầu', style: 'time', hold: 800 },
      { kh: 'Bên em có làm nhà container 20 feet không? Giá khoảng bao nhiêu vậy?' },

      /* CẢNH 2 – AI giới thiệu và báo giá tham khảo */
      { feature: 2 },
      { ai: 'Dạ bên em có nhận làm **nhà container 20 feet** theo nhu cầu sử dụng của khách ạ!', fast: true, meta: '⚡ Preny AI trả lời ngay' },
      { ai: 'Em gửi anh tham khảo một số mẫu thực tế nhé!', fast: true, hold: 800 },
      { aiImgs: [{ img: 'c04', label: 'Mẫu C04' }, { img: 'c01-ngoai', label: 'Mẫu C01' }, { img: 'c02', label: 'Mẫu C02' }, { img: 'c05', label: 'Mẫu C05' }], hold: 2800 },
      { card: { tag: '📋 Bảng giá tham khảo · Nhà container 20 feet',
          lines: ['Giá theo bảng giá đã xác minh của doanh nghiệp', 'Tùy thiết kế, mức hoàn thiện, hạng mục đi kèm', 'Vận chuyển, nền móng, điện nước: báo riêng sau khảo sát'], button: 'Xem bảng giá' },
        fast: true, hold: 3600 },
      { ai: 'Chi phí sẽ tùy **thiết kế, mức độ hoàn thiện** và các **hạng mục đi kèm** ạ.' },

      /* CẢNH 3 – AI xác định mục đích sử dụng */
      { feature: 3 },
      { ai: 'Anh đang muốn làm nhà container **để ở, kinh doanh hay làm homestay** ạ? Em gửi mẫu phù hợp cho mình nhé!' },
      { kh: 'Anh định làm homestay nhỏ ở Lâm Đồng em.' },
      { ai: 'Dạ vậy anh có thể tham khảo các mẫu container có **phòng ngủ, nhà vệ sinh** và khu vực **cửa kính** nhìn ra bên ngoài ạ. Em gửi anh thêm hình một số mẫu đã hoàn thiện nhé!' },
      { aiImgs: [{ img: 'c01-ngoai', label: 'C01 · Mặt ngoài' }, { img: 'c01-trong', label: 'C01 · Bên trong' }, { img: 'c02', label: 'C02 · Cửa kính lớn' }, { img: 'c03', label: 'C03 · Cửa kính' }], hold: 3000 },
      { kh: 'Anh thích kiểu có cửa kính lớn, nhìn hiện đại một chút.' },

      /* CẢNH 4 – Gửi video công trình */
      { feature: 4 },
      { ai: 'Dạ em hiểu rồi ạ! Em gửi anh thêm **video một mẫu nhà container hoàn thiện** để mình xem rõ không gian bên trong nhé!' },
      { aiVideo: 'video-c02', poster: 'c02', dur: '0:45', label: 'Video · Mẫu C02', hold: 3600 },
      { kh: 'Mẫu này đẹp đó. Bên em có vận chuyển và lắp đặt ở Lâm Đồng không?' },

      /* CẢNH 5 – AI xin SĐT sớm để chuyển nhân viên */
      { feature: 5 },
      { ai: 'Dạ khu vực **Lâm Đồng** bên em sẽ kiểm tra **phương án vận chuyển, vị trí đặt nhà** và **chi phí lắp đặt** cụ thể cho anh nhé!' },
      { ai: 'Anh cho em xin **SĐT** nhé! Em chuyển thông tin cho bạn kỹ thuật và tư vấn bên em để hỗ trợ anh về thiết kế, báo giá và vận chuyển ạ.' },
      { sep: 'Đã xem · khách chưa phản hồi…', style: 'silent', hold: 1400 },
      { sep: 'KHÁCH QUAN TÂM NHÀ CONTAINER 20 FEET – CHƯA CUNG CẤP SĐT', style: 'warn', hold: 2400 },
      { sep: 'Preny đưa khách vào danh sách Follow-up', style: 'sys', hold: 1800 },

      /* CẢNH 6 – Follow-up 5 tin trong 7 ngày */
      { feature: 6 },
      { sep: '— Ngày 1 —' },
      { ai: 'Anh ơi, mẫu **nhà container 20 feet** để làm homestay mình tham khảo hôm qua anh còn quan tâm không ạ? Em hỗ trợ mình thêm thông tin nhé!', meta: '🔁 Follow-up · Ngày 1 · Nhắc nhu cầu' },
      { sep: '— Ngày 2 —' },
      { ai: 'Em gửi anh thêm một số hình ảnh thực tế mẫu container có **cửa kính lớn** để mình tham khảo thiết kế nhé!', meta: '🔁 Follow-up · Ngày 2 · Hình ảnh dự án' },
      { aiImgs: [{ img: 'c02', label: 'C02 · Ảnh: Unsplash' }, { img: 'c03', label: 'C03 · Ảnh: Unsplash' }, { img: 'c05', label: 'C05 · Ảnh: Unsplash' }, { img: 'c01-ngoai', label: 'C01 · Ảnh: Unsplash' }], hold: 2400 },
      { sep: '— Ngày 3 —' },
      { ai: 'Anh ơi, khi làm nhà container mình nên tính thêm chi phí **vận chuyển, vị trí lắp đặt** và các **hạng mục hoàn thiện** nữa ạ. Em có thể chuyển yêu cầu để bên kỹ thuật báo chi phí cụ thể cho anh nhé!', meta: '🔁 Follow-up · Ngày 3 · Tư vấn chi phí' },
      { sep: '— Ngày 5 —' },
      { ai: 'Anh ơi, em gửi anh thêm **video một công trình** nhà container đã hoàn thiện để mình xem cách bố trí không gian thực tế nhé!', meta: '🔁 Follow-up · Ngày 5 · Giới thiệu công trình' },
      { aiVideo: 'video-c01', poster: 'c01-trong', dur: '1:02', label: 'Video · Công trình C01', hold: 2400 },
      { sep: '— Ngày 7 —' },
      { ai: 'Anh ơi, em nhắn lại về mẫu nhà container mình đã tham khảo ạ. Nếu anh vẫn dự định làm homestay ở Lâm Đồng, anh cho em xin **SĐT** nhé. Em chuyển bạn tư vấn hỗ trợ mình lên phương án và báo giá phù hợp ạ!', meta: '🔁 Follow-up · Ngày 7 · Xin SĐT' },

      /* CẢNH 7 – Khách cung cấp SĐT */
      { feature: 7 },
      { kh: 'Ok em. Anh Nguyễn Nam, SĐT 0900 000 286 nhé.\nEm nhờ bạn tư vấn báo giá giúp anh.', typing: 2000 },
      { ai: 'Dạ em nhận thông tin anh Nam rồi ạ! Em ghi nhận anh đang muốn làm **một căn container 20 feet** để **kinh doanh homestay tại Lâm Đồng**, ưu tiên thiết kế hiện đại và cửa kính lớn nhé!' },
      { overlay: { head: 'GIAO DIỆN NỘI BỘ · KHÁCH HÀNG TIỀM NĂNG', note: 'Chỉ nhân viên nhìn thấy · khách không nhìn thấy',
          rows: [['Khách hàng', 'Nguyễn Nam'], ['SĐT', '0900 000 286'], ['Sản phẩm', 'Nhà container 20 feet'], ['Mục đích', 'Kinh doanh homestay'], ['Số lượng', '1 căn (dự kiến)'], ['Khu vực', 'Lâm Đồng'], ['Phong cách', 'Hiện đại, cửa kính lớn']],
          status: 'Đã chuyển nhân viên tư vấn' }, hold: 6500 },
      { sep: '✓ Preny đã lưu thông tin khách hàng và dừng Follow-up', style: 'sys', hold: 2200 },

      /* CẢNH 8 – Meta CAPI Lead */
      { feature: 8 },
      { overlay: { head: 'PRENY AI → META CONVERSIONS API', note: 'Hiệu ứng hệ thống · khách không nhìn thấy',
          rows: [['Event', 'Lead'], ['Event ID', 'CONTAINER-LEAD-001'], ['Nguồn', 'Facebook Ads → Messenger'], ['SĐT', 'Đã thu thập'], ['Nhu cầu', 'Tư vấn nhà container']],
          flow: ['Preny AI', 'Meta CAPI', 'Lead ✓'], status: 'Gửi thành công (demo)',
          caption: 'Preny AI hỗ trợ ghi nhận khách hàng tiềm năng từ quảng cáo Facebook để đo lường hiệu quả và hỗ trợ tối ưu chiến dịch quảng cáo.' },
        kw: [0, 1, 2], hold: 7500 },

      /* CẢNH 9 – Kết thúc */
      { end: true },
      { endscreen: { title: 'PRENY AI – TỰ ĐỘNG HÓA TƯ VẤN NHÀ CONTAINER',
          items: ['Trực Fanpage 24/7', 'Tiếp nhận khách từ quảng cáo Facebook', 'Giới thiệu mẫu nhà container', 'Gửi ảnh và video công trình thật', 'Báo giá tham khảo',
                  'Xác định mục đích sử dụng', 'Thu thập SĐT khách hàng', 'Follow-up ngày 1, 2, 3, 5, 7', 'Chuyển nhân viên tư vấn', 'Meta CAPI Lead'],
          sub: 'preny.ai' }, hold: 4500 },
    ],
  };
})();
