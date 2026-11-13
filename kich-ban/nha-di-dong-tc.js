/* Kịch bản: THI CÔNG NHÀ DI ĐỘNG (cabin, nhà lắp ghép làm homestay, resort, phòng lưu trú; khách là chủ đất, nhà đầu tư BĐS nghỉ dưỡng)
   — BẢN TRÌNH CHIẾU, nhóm CÂN NHẮC NHIỀU. Khung ngang 16:9.
   Giá trị lớn, phải có sale thật gọi tư vấn → AI chạy pipeline lấy lead: "AI chốt đơn = lấy SĐT khách" để sale gọi, hẹn khảo sát đất.
   Demo chat gọn như khóa học làm bánh: anh Hùng gửi ảnh cabin hỏi dồn (đất 1.200m² ở Ba Vì làm mấy căn, giá, bao lâu,
   mưa bão, đất nông nghiệp có làm được không) → AI tư vấn số căn, giá, thời gian; xử lý băn khoăn khó (pháp lý đất: không trả lời bừa;
   chi phí phát sinh: móng, điện nước) → xin SĐT với lý do rõ ràng (xem sổ đất, bản bố trí, tham quan khu mẫu, đều miễn phí) → chuyển sale.
   Không diễn chăm sóc sau bán, Meta CAPI, remarketing. Không có bước kết thúc: xin được SĐT rồi bấm → là sang slide kế.
   Tên công ty, mẫu nhà, giá, thời gian thi công, tên khách, SĐT: dữ liệu minh họa. Ảnh: Unsplash (ảnh thật, không phải công trình của khách). */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'cabin-chu-a': '1666934209851-aeecb19afb4a',
    'cabin-co': '1697462248408-25479e5acfb0',
    'khu-cabin': '1759150594926-69079830088f',
    'thi-cong': '1690719095815-549c60090c9f',
    'phong-ngu': '1773423391716-04e278b07b1b',
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    badge: 'AI CHATBOT · NHÀ DI ĐỘNG, RESORT',
    shop: { name: 'Nhà Di Động Thông Xanh', initials: 'TX' },
    headline: { pre: 'AI chatbot tư vấn nhà di động và', em: 'lấy SĐT khách hàng' },
    sub: 'Hiểu đúng nhu cầu từng chủ đất, xử lý băn khoăn khó rồi xin số điện thoại để sale gọi tư vấn.',
    cta: 'Dùng thử miễn phí tại **preny.ai**\nHotline **0389 647 778**',
    speed: 1.13,
    timing: { read0: 1000, readPerChar: 28, readMax: 4500, type0: 800, typePerChar: 3, typeMax: 1500, fastType: 500,
              featureHold: 1400, sepHold: 1100, cardHold: 4000, introCard: 250 },

    images: Object.fromEntries(Object.entries(IMG).map(([k, id]) => [k, U(id)])),

    features: [
      { title: 'AI hiểu đúng nhu cầu, tư vấn đúng mẫu', desc: 'Đọc ảnh, hiểu cả tin dài, viết tắt.',
        kws: ['Nhận ra mẫu nhà trong ảnh khách gửi', 'Gợi ý số căn theo diện tích đất', 'Trả lời đủ: giá, thời gian, mưa bão'] },
      { title: 'AI xử lý băn khoăn như sale giỏi', desc: 'Trả lời đúng dữ liệu, không hứa bừa.',
        kws: ['Đất nông nghiệp: không trả lời bừa về pháp lý', 'Báo rõ chi phí ngoài: móng, điện nước', 'Khảo sát miễn phí, báo giá trọn gói'] },
      { title: 'AI xin SĐT, chuyển sale gọi tư vấn', desc: 'Lead nóng chuyển ngay cho sale.',
        kws: ['Cho khách lý do để cho số: xem sổ đất, bản bố trí miễn phí', 'Lấy được SĐT ngay trong cuộc chat', 'Chuyển sale gọi lại trong 15 phút'] },
    ],

    steps: [
      { intro: true, hold: 1800 },

      /* ---- 1. Hiểu đúng nhu cầu: ảnh + tin dài, viết tắt, hỏi dồn ---- */
      { feature: 1 },
      { sep: 'Khách nhắn tin từ quảng cáo Facebook', style: 'time', hold: 800 },
      { img: 'cabin-chu-a', hold: 1500 },
      { kh: 'a có 1200m2 đất ở Ba Vì, muốn làm khu lưu trú tầm 5-6 phòng cho thuê cuối tuần. mẫu này giá bn 1 căn, làm mất bao lâu, mưa bão có sao k e. đất a là đất nông nghiệp thì làm đc k' },
      { ai: 'Dạ chào anh! Mẫu anh gửi là **cabin mái chữ A 24m²**, mẫu bên em làm nhiều cho homestay, resort ạ 🏡', fast: true, meta: '⚡ Preny AI trả lời sau 2 giây', kw: 0 },
      { ai: 'Đất 1.200m² anh làm **5–6 căn** là vừa: mỗi căn cách nhau 8–10m, còn chỗ làm lối đi, sân chung, bãi xe. Cabin có **1 phòng ngủ, WC riêng, ban công**, giá **từ 215 triệu/căn** đã gồm nội thất cơ bản ạ.', kw: 1 },
      { ai: 'Nhà **làm sẵn tại xưởng 35–45 ngày**, chở tới **lắp tại đất 3–5 ngày**/căn. Khung **thép mạ kẽm** bắt bulông xuống móng trụ, vách cách nhiệt, tính toán **chịu gió bão cấp 10** anh nhé.', kw: 2 },

      /* ---- 2. Xử lý băn khoăn khó: pháp lý đất, chi phí phát sinh ---- */
      { feature: 2 },
      { ai: 'Riêng **đất nông nghiệp**: làm nhà lưu trú cho thuê còn tùy **quy hoạch và mục đích sử dụng đất** ở địa phương, em không dám trả lời bừa ạ. Bên em có **kỹ sư xem sổ đất** và hướng dẫn thủ tục cho anh trước khi làm.', kw: 0 },
      { kh: 'ngoài tiền nhà còn mất thêm gì nữa k e? a sợ phát sinh' },
      { ai: 'Dạ ngoài giá căn nhà còn **móng trụ, điện nước, bể phốt** tùy địa hình, thường **25–40 triệu/căn** ạ. Bên em **khảo sát đất miễn phí** rồi báo giá **trọn gói**, ký hợp đồng là không phát sinh nha anh.', kw: [1, 2] },
      { kh: 'ok để a tính thêm đã' },

      /* ---- 3. Xin SĐT: cho khách lý do để cho số → chuyển sale ---- */
      { feature: 3 },
      { ai: 'Dạ anh cho em xin **SĐT**, chuyên viên bên em gọi anh **xem sổ đất**, gửi **bản bố trí 5 căn** trên 1.200m² và mời anh **tham quan khu cabin** bên em đã bàn giao, đều **miễn phí** ạ 😊', kw: 0 },
      { kh: 'Hùng - 0983 456 789', kw: 1 },
      { ai: 'Dạ em đã chuyển thông tin cho chuyên viên ạ. Anh Hùng để ý máy, bên em gọi anh trong **15 phút** nha 🏡', meta: '✓ Đã chuyển SĐT cho sale', kw: 2, hold: 1500 },
      // Không có { end: true }: bấm → thêm một lần là sang thẳng slide kế.
    ],

    /* ===== Nội dung slide trình chiếu (trinh-chieu.html). Chưa có số liệu thống kê thật → 2 slide thống kê tự ẩn. ===== */
    deck: {
      tieuDe6: 'Hệ thống AI chatbot giúp tăng<br><span class="grad">tỷ lệ chốt SĐT khách hàng</span>',
      // Không lên đơn tự động (ký hợp đồng thi công với sale) → 5 tính năng, giống khóa học
      tinhNang: [
        ['AI tư vấn, chủ động lấy lead', 'Lọc nhu cầu, lấy SĐT, hẹn khảo sát'],
        ['Soft follow-up nuôi khách', 'Gửi mẫu nhà, công trình đã bàn giao'],
        ['AI chăm sóc khách sau bán', 'Hỏi thăm vận hành, xin giới thiệu'],
        ['Bộ công cụ Remarketing FMM và ZBS', 'Khai thác lại dữ liệu khách cũ'],
        ['Gửi sự kiện Lead qua Meta CAPI', 'Hỗ trợ tối ưu quảng cáo Facebook'],
      ],

      chotDon: {
        nganh: 'thi công nhà di động',
        nguoi: 'Sale',
        chotLa: 'AI chốt đơn = lấy SĐT khách',
        buoc: [
          { t: 'Chạy quảng cáo', d: 'Thu hút chủ đất, nhà đầu tư', icon: 'megaphone', own: 'Công ty chạy quảng cáo', mock: 'ad', img: L(IMG['cabin-co']), text: 'Cabin homestay làm sẵn, lắp 5 ngày 🏡', btn: 'Gửi tin nhắn' },
          { t: 'Bắt đầu chat', d: 'Tư vấn mẫu nhà, số căn theo đất', icon: 'chat', ai: true, mock: 'chat',
            msgs: [['kh', 'Đất 1.200m² làm được mấy căn em?'], ['ai', 'Dạ khoảng 5–6 căn ạ! Đất anh ở đâu để em tư vấn mẫu nha? 🏡']] },
          { t: 'Lọc nhu cầu, lấy SĐT', d: 'Đất, số căn, ngân sách', icon: 'phone', ai: true, chot: true, mock: 'form', fields: ['Anh Hùng · đất Ba Vì 1.200m², 5 căn', '0983 456 789'], ok: 'Đã lấy SĐT' },
          { t: 'Sale gọi tư vấn', d: 'Xem sổ đất, hẹn khảo sát', icon: 'call', mock: 'lich', ten: 'Khảo sát đất miễn phí', gio: '09:00 · Thứ Bảy 21/11', ok: 'Đã hẹn khảo sát' },
          { t: 'Khảo sát, xem khu mẫu', d: 'Kỹ sư đo đất, khách xem nhà thật', icon: 'users', mock: 'img', img: L(IMG['khu-cabin']), cap: 'Khách tham quan khu cabin đã bàn giao' },
          { t: 'Chốt hợp đồng', d: 'Ký hợp đồng thi công, đặt cọc', icon: 'check', mock: 'img', img: L(IMG['thi-cong']), cap: '✓ Ký hợp đồng 5 căn, vào xưởng' },
        ],
        vong: { t: 'Chăm sóc lại & Remarketing', d: 'Hỏi thăm vận hành, mời làm thêm căn, xin giới thiệu khách mới' },
      },

      bamDuoi: {
        nhan: 'Vì sao soft follow-up của Preny đặc biệt', shopB: 'Công ty B',
        cmpSai: ['Khách im → gửi “Anh còn quan tâm nhà di động không ạ?”', 'Không biết khách quan tâm mẫu nào, vì sao im', 'Khách thấy phiền, bỏ qua tin nhắn'],
        cmpDung: ['Khách nhắn xong im → nhắc đúng mẫu nhà khách xem (thẻ <b>#CabinChuA</b> từ quảng cáo)',
                  'Báo giá xong im → bám đuổi theo giá: ưu đãi làm nhiều căn, khảo sát miễn phí (thẻ <b>#HoiGia</b>)',
                  'Đúng nhu cầu, đúng lý do im → khách quay lại hẹn khảo sát'],
        hoi: 'Cabin chữ A giá bao nhiêu em?',
        traLoiThuong: 'Dạ từ 215 triệu ạ.',
        nhacChung: 'Anh còn quan tâm nhà di động không ạ? 😊',
        refImg: L(IMG['cabin-chu-a']), refTen: 'Cabin mái chữ A 24m²',
        vd1: {
          kh: 'Mẫu cabin này làm homestay được không em?',
          ai: 'Dạ được ạ! Đất anh ở đâu, rộng bao nhiêu để em tư vấn số căn nha?',
          tag: '🏷 #CabinChuA', tagNote: 'thẻ từ quảng cáo · khách im 2 ngày',
          nhac: 'Anh ơi, em gửi anh <b>video khu 6 cabin chữ A</b> bên em vừa bàn giao ở Sóc Sơn, đất 1.000m² giống nhà mình 🏡 Anh muốn xem bản bố trí cho đất của anh không ạ?',
          dung: '🎯 Theo thẻ #CabinChuA: nhắc đúng mẫu khách xem',
          khach: 'Gửi anh xem với',
        },
        vd2: {
          kh: 'Làm 5 căn thì giá sao em?',
          ai: 'Dạ 5 căn cabin 24m² khoảng <b>1,075 tỷ</b>, chưa gồm móng, điện nước ạ.',
          tag: '🏷 #HoiGia', tagNote: 'báo giá xong khách im 3 ngày',
          nhac: 'Anh Hùng ơi, tháng này làm từ 5 căn bên em <b>giảm 5%</b> và <b>tặng bản vẽ bố trí</b> ạ. Em hẹn kỹ sư qua khảo sát đất anh cuối tuần này nha?',
          dung: '🎯 Theo thẻ #HoiGia: bám đuổi theo giá, đúng lý do khách im',
          khach: 'Ok hẹn thứ Bảy',
        },
      },

      binhLuan: {
        post: 'Cabin, nhà di động làm <b>homestay, resort</b>: làm sẵn tại xưởng, lắp tại đất 3–5 ngày 🏡',
        img: L(IMG['cabin-co']),
        kav: 'PL', kten: 'Phạm Long', hoi: 'Đất dốc ở Mộc Châu lắp được không shop? Làm 3 căn hết bao nhiêu?',
        traLoi: 'Dạ chào anh Long! Bên em vừa nhắn tin tư vấn chi tiết cho anh, anh xem tin nhắn nhé 💬',
        act2: 'Nhắn tin riêng tư vấn mẫu nhà',
        nhan: 'Chào anh Long! Đất dốc bên em làm <b>móng trụ thép</b>, không cần san lấp nhiều ạ. 3 căn cabin 24m² <b>từ 645 triệu</b>, chưa gồm móng, điện nước. Anh cho em xin SĐT để kỹ sư xem vị trí đất giúp anh nha!',
        sp: { ten: 'Cabin mái chữ A 24m²', gia: 'từ 215 triệu/căn', img: L(IMG['phong-ngu']) },
        khach: 'Số anh 0905 112 233 nhé',
      },

      duLieu: {
        shopA: 'Công ty A',
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: pháp lý đất, hoàn vốn', 'Khách khiếu nại, công ty mất uy tín'],
        dung: ['Chỉ trả lời theo dữ liệu công ty cung cấp', 'Không chắc chắn → xin khách chờ, AI tạm dừng', 'Báo ngay sale thật vào trả lời'],
        hoi: 'Đặt nhà di động trên đất nông nghiệp thì không cần xin phép gì đúng không em?',
        aiSai: 'Dạ đúng ạ! Nhà di động <b>không cần xin phép</b>, đất nào cũng đặt được anh 🥰',
        thucTe: '⚠ Thực tế: còn tùy quy hoạch, mục đích sử dụng đất ở từng địa phương',
        gian: 'Xã yêu cầu tháo dỡ! Sao bảo không cần xin phép? 😠',
        cho: 'Dạ anh chờ em một chút để em kiểm tra chính xác thông tin cho mình nhé!',
        nv: 'Sale Tuấn · người thật',
        nvTraLoi: 'Dạ đặt nhà trên đất nông nghiệp còn tùy quy hoạch từng địa phương ạ. Em gửi kỹ sư xem sổ đất và hướng dẫn thủ tục trước khi làm cho anh nhé!',
      },

      tags: {
        rows: [
          { ten: 'Nguyễn Văn Hùng', av: 'VH', kenh: 'fb', msg: 'Đất Ba Vì 1.200m² làm được mấy căn?', gio: '14:05',
            tags: [['FB Ads · Cabin homestay', 'ng'], ['#CabinChuA', 'qt'], ['Đã cho SĐT', 'ht'], ['Gọi lần 1 ✓', 'sa']] },
          { ten: 'Trần Thị Mai', av: 'TM', kenh: 'zalo', msg: 'Có mẫu 2 phòng ngủ không em?', gio: '11:32',
            tags: [['Zalo OA', 'ng'], ['#Nha2PhongNgu', 'qt'], ['Đang nuôi · Soft follow-up', 'ht']] },
          { ten: 'Lê Quốc Bảo', av: 'QB', kenh: 'tiktok', msg: 'Lắp ở Phú Quốc được không?', gio: '09:18',
            tags: [['TikTok · Video lắp nhà', 'ng'], ['#Resort', 'qt'], ['Đã cho SĐT', 'ht'], ['Gọi lần 2 · không bắt máy', 'sa']] },
          { ten: 'Phạm Long', av: 'PL', kenh: 'fb', msg: 'Đất dốc Mộc Châu lắp được không?', gio: 'Hôm qua',
            tags: [['Bình luận bài viết', 'ng'], ['#DatDoc', 'qt'], ['Đã hẹn khảo sát', 'ht'], ['Đã kết nối Zalo', 'za']] },
          { ten: 'Đỗ Thanh Hà', av: 'TH', kenh: 'zalo', msg: 'Mình muốn làm thêm 3 căn', gio: 'Hôm qua',
            tags: [['Zalo · Khách cũ giới thiệu', 'ng'], ['#Glamping', 'qt'], ['Đã ký hợp đồng', 'ht'], ['Gọi lần 3 · đã chốt ✓', 'sa']] },
        ],
        chanDung: {
          ten: 'Nguyễn Văn Hùng', av: 'VH', kenh: 'fb', sub: 'Facebook Messenger · 0983 456 789',
          nhom: [
            ['Nguồn khách', [['Facebook Ads', 'ng'], ['Bài: Cabin homestay lắp 5 ngày', 'ng']]],
            ['Quan tâm', [['#CabinChuA', 'qt'], ['#Homestay', 'qt'], ['#DatNongNghiep', 'qt']]],
            ['Hành trình', [['Nhắn tin 13/11', 'ht'], ['Cho SĐT', 'ht'], ['Hẹn khảo sát 21/11', 'ht']]],
            ['Sale gọi', [['Lần 1 · đã tư vấn ✓', 'sa']]],
            ['Kết nối', [['Đã kết nối Zalo', 'za'], ['Chủ đất · L1', 'lv']]],
          ],
          ghiChu: 'Có 1.200m² đất nông nghiệp ở Ba Vì, muốn làm 5–6 căn cho thuê cuối tuần. Băn khoăn pháp lý đất, chi phí phát sinh, mưa bão.',
        },
      },

      chotLai: [
        ['KHÁCH HÀNG', ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến']],
        ['AI CHATBOT', ['Phản hồi nhanh tức thì', 'Tư vấn mẫu nhà, số căn theo đất', 'Xử lý băn khoăn: pháp lý, phát sinh', 'Lấy SĐT khách']],
        ['SOFT FOLLOW‑UP', ['Gửi video công trình đã bàn giao, bản bố trí, ưu đãi', 'Nuôi khách để công ty nằm đầu danh sách']],
        ['KHẢO SÁT', ['Hẹn khảo sát đất, xem khu mẫu', 'Sale chốt hợp đồng thi công']],
        ['MUA LẠI', ['Mời khách cũ làm thêm căn, giới thiệu khách qua FB và Zalo']],
      ],
    },
  };
})();
