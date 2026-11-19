/* Kịch bản: TRƯỜNG ĐẠI HỌC — BẢN TRÌNH CHIẾU, nhóm CÂN NHẮC NHIỀU. Làm 19/11/2026 theo người dùng:
   "trường đại học muốn xây dựng 1 hệ thống chatbot AI cho các mảng hỗ trợ tuyển sinh, hỗ trợ thông tin học tập, hỗ trợ hành chính,
   hỗ trợ tâm lý – xã hội, hướng nghiệp – kết nối việc làm và đời sống, phát triển sinh viên".
   "AI chốt đơn = lấy tên + SĐT + mời Open Day" (hoặc tư vấn 1-1 với thầy cô), chuyển cô Thu Hà · Phòng Tuyển sinh, gửi sự kiện Lead.
   Demo chat 1 thí sinh từ đầu tới cuối (khớp Bài 2 video ngang, demo/bai2/kich-ban-dai-hoc-tc.js):
   (1) Tuyển sinh: Lê Minh Quân, 18 tuổi, Nghệ An, A00 24 điểm, thích ngành Trí tuệ nhân tạo, đi cùng ba → hỏi dồn điểm, học phí,
       KTX, học bổng, việc làm → AI báo học phí 32.000.000đ/năm, điểm chuẩn 2026 là 23,5 chỉ để tham khảo (không hứa đậu),
       học bổng tân sinh viên 25–50%, KTX 450.000đ/tháng → mời Open Day sáng thứ Bảy 28/11, xin tên + SĐT → chuyển phòng Tuyển sinh.
   (2) Sau nhập học (9/2027) cùng AI đó đồng hành sinh viên: học tập (lịch học, hạn đăng ký học phần), hành chính (giấy xác nhận
       sinh viên online), đời sống (CLB AI Lab, học bổng khuyến khích), tâm lý – xã hội (lắng nghe, không chẩn đoán, chuyển chuyên viên
       tham vấn, bảo mật, đường dây hỗ trợ 24/7), hướng nghiệp – việc làm (ngày hội việc làm, thực tập hè, góp ý CV).
   Không có tin nhắc lịch trước Open Day hay trước buổi tham vấn (Preny chưa có tính năng này).
   Mốc sau nhập học ghi "— Ngày 13/9 · … —" để demo dọc nhảy đúng sang năm 2027, 2028.
   Tên trường, học phí, điểm, học bổng, phòng học, tên người, SĐT, MSSV: dữ liệu minh họa. Ảnh: Unsplash (ảnh thật, không phải trường của khách). */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'khuon-vien': '1583373834259-46cc92173cb7',   // khuôn viên trường hiện đại
    'toa-nha': '1562774053-701939374585',         // tòa nhà cổ, bãi cỏ
    'lop-hoc': '1779358296802-715fc9fbc152',      // lớp học hiện đại, sinh viên châu Á
    'phong-may': '1778489769184-45868633c527',    // giảng viên hướng dẫn sinh viên ở phòng máy
    'giang-duong': '1606761568499-6d2451b23c66',  // giảng đường có màn chiếu
    'thu-vien': '1683319598210-d70486f2f996',     // thư viện hiện đại
    'ktx': '1555854877-bab0e564b8d5',             // phòng ký túc xá giường tầng
    'open-day': '1780893006073-2f914b1ae832',     // đông sinh viên ngoài trời
    'sv-vui': '1758270705555-015de348a48a',       // sinh viên chụp selfie trong giảng đường
    'sv-thao-luan': '1758270704840-0ac001215b55', // sinh viên trao đổi trong lớp
    'tham-van': '1573497620053-ea5300f94f21',     // 2 người trò chuyện (tham vấn)
    'tham-van-2': '1758273241078-8eec353836be',   // buổi tham vấn
    'viec-lam': '1780035206636-3b2969fa024c',     // sự kiện, người đeo thẻ
    'bat-tay': '1521791136064-7986c2920216',      // bắt tay
    'thuc-tap': '1767974817923-7e36959bed68',     // cô gái trẻ ở văn phòng
    'sinh-vien': '1544168190-79c17527004f',       // nam thanh niên châu Á
    'tot-nghiep': '1756973229525-53fbc1303a61',   // tân cử nhân áo choàng
    'tot-nghiep-2': '1758270703653-e031eabf5b33', // nhóm cử nhân áo đỏ
    'cafe-sv': '1745815607414-043458ad3bc0',      // quán cà phê đông sinh viên
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    badge: 'AI CHATBOT · TRƯỜNG ĐẠI HỌC',
    shop: { name: 'Đại học Ánh Dương', initials: 'AD' },
    headline: { pre: 'Một AI chatbot tư vấn tuyển sinh và', em: 'đồng hành sinh viên' },
    sub: 'Trả lời thí sinh 24/7, không hứa đậu bừa, mời Open Day, lấy SĐT; sau nhập học hỗ trợ học tập, hành chính, tâm lý, việc làm, đời sống.',
    cta: 'Dùng thử miễn phí tại **preny.ai**\nHotline **0389 647 778**',
    speed: 1.13,
    timing: { read0: 1000, readPerChar: 28, readMax: 4500, type0: 800, typePerChar: 3, typeMax: 1500, fastType: 500,
              featureHold: 1400, sepHold: 1100, cardHold: 4000, introCard: 250 },

    images: Object.fromEntries(Object.entries(IMG).map(([k, id]) => [k, U(id)])),

    // Cột trái demo ngang (dùng khi xuất video khung ngang)
    features: [
      { title: 'AI tư vấn tuyển sinh 24/7', desc: 'Hiểu cả tin viết tắt, hỏi dồn nhiều ý.',
        kws: ['Điểm chuẩn chỉ để tham khảo, không hứa đậu', 'Học phí, học bổng, ký túc xá', 'Việc làm, lab học: gửi ảnh thật'] },
      { title: 'Mời Open Day, lấy SĐT thí sinh', desc: 'Lưu thí sinh, gắn thẻ, chuyển phòng Tuyển sinh.',
        kws: ['Cho lý do để cho số: giữ suất Open Day', 'Lưu thí sinh, gắn thẻ #TriTueNhanTao #CanKTX', 'Chuyển cô Thu Hà · Phòng Tuyển sinh'] },
      { title: 'Đồng hành sau nhập học', desc: 'Cùng 1 AI trên Zalo OA và Fanpage của trường.',
        kws: ['Lịch học, phòng học, hạn đăng ký học phần', 'Giấy xác nhận sinh viên nộp online', 'CLB AI Lab, học bổng khuyến khích'] },
      { title: 'Tâm lý – xã hội, hướng nghiệp', desc: 'Lắng nghe, chuyển đúng người thật khi cần.',
        kws: ['Lắng nghe, không chẩn đoán', 'Chuyển chuyên viên tham vấn, bảo mật', 'Ngày hội việc làm, thực tập hè, góp ý CV'] },
    ],

    steps: [
      { intro: true, hold: 1800 },

      /* ===== TUYỂN SINH: hỏi dồn điểm, học phí, KTX → không hứa đậu → học bổng, việc làm, ảnh lab → mời Open Day → SĐT ===== */
      { feature: 1 },
      { sep: 'Thí sinh bấm Gửi tin nhắn từ quảng cáo tuyển sinh Facebook', style: 'time', hold: 800 },
      { kh: 'e thi A00 dc 24 điểm, muốn học ngành AI. vô trường mình dc ko ạ? học phí bn, có ktx ko ạ' },
      { ai: 'Chào em! Ngành **Trí tuệ nhân tạo** học phí **32.000.000đ/năm** nha 🎓', fast: true, meta: '⚡ Preny AI trả lời sau 2 giây' },
      { ai: 'Điểm chuẩn năm 2026 là **23,5**, em xem để **tham khảo** thôi nha, điểm năm 2027 còn tùy kỳ thi nên chị không hứa đậu trước được. Em ở tỉnh nào, có cần ở ký túc xá không để chị tư vấn kỹ hơn?', kw: 0 },
      { kh: 'nhà em ở nghệ an ạ. ba em hỏi có học bổng ko, ktx còn chỗ ko, ra trường dễ xin việc ko' },
      { ai: '24 điểm em được xét **học bổng tân sinh viên 25–50%** nha. Ký túc xá **ưu tiên bạn ở tỉnh xa**, phòng 4 người **450.000đ/tháng**, ngay trong trường ạ.', kw: 1 },
      { ai: 'Ngành AI có **học kỳ thực tập ở doanh nghiệp đối tác**. Chị gửi em ảnh lab AI sinh viên năm nhất được thực hành nè 🤖', kw: 2 },
      { aiImgs: [{ img: 'phong-may', label: 'Lab AI' }, { img: 'lop-hoc', label: 'Lớp học' },
                 { img: 'thu-vien', label: 'Thư viện' }, { img: 'ktx', label: 'Ký túc xá' }], hold: 3200 },

      { feature: 2 },
      { ai: 'Sáng **thứ Bảy 28/11** trường có **Open Day**: em với ba ghé xem lab AI, phòng ký túc xá, gặp thầy cô khoa CNTT luôn nha. Em cho chị xin **tên và SĐT** để giữ suất ạ, miễn phí 😊', kw: 0 },
      { kh: 'Lê Minh Quân, 0912 384 207 ạ. em đi với ba' },
      { card: {
          tag: '✓ Đã giữ 2 suất Open Day · Lê Minh Quân', ok: true,
          lines: ['Thời gian: **8h00 thứ Bảy 28/11/2026**', 'Tham quan lab AI, ký túc xá, gặp thầy cô khoa CNTT', 'Tư vấn 1-1 học bổng, hồ sơ xét tuyển', 'Địa điểm: **Hội trường A, Đại học Ánh Dương**'],
        }, meta: '✓ Đã lưu thí sinh, gắn thẻ #TriTueNhanTao #CanKTX', kw: 1, hold: 4200 },
      { ai: 'Cô **Thu Hà phòng Tuyển sinh** sẽ gọi em xác nhận nha. Ba em bận hôm đó thì em nhắn chị, chị hẹn **tư vấn 1-1 với thầy cô** qua điện thoại ạ.', meta: '✓ Đã chuyển cô Thu Hà · Phòng Tuyển sinh', kw: 2, hold: 1500 },

      /* ===== SAU NHẬP HỌC: cùng AI đó đồng hành sinh viên ===== */
      { feature: 3 },
      { sep: '— Ngày 13/9 · Quân đã là tân sinh viên K27 —' },
      { kh: 'Sáng nay em học môn gì, phòng nào vậy ạ? MSSV 2727015' },
      { card: {
          tag: '📅 Lịch học thứ Hai 13/9 · Lê Minh Quân',
          lines: ['**7h30** Giải tích 1 · phòng **A2.301**', '**9h45** Nhập môn AI · **lab B1.05**', '**13h30** Tiếng Anh 1 · phòng **C3.204**'],
        }, meta: '⚡ Tự động · Nối dữ liệu đào tạo của trường', kw: 0, hold: 3600 },
      { ai: 'Hạn **đăng ký học phần học kỳ 2** là **20/12** nha em 📚' },
      { sep: '— Ngày 22/10 · hỗ trợ hành chính —' },
      { kh: 'Em cần giấy xác nhận sinh viên để ba làm hồ sơ vay vốn thì làm sao ạ?' },
      { ai: 'Em **nộp đơn online** ở cổng sinh viên, khoảng **2 ngày làm việc** là có giấy nha. Em mang thẻ sinh viên tới **phòng Công tác sinh viên A1.102** nhận, không phải xếp hàng nộp đơn ạ.', kw: 1 },
      { sep: '— Ngày 15/11 · đời sống sinh viên —' },
      { kh: 'Trường có CLB nào về AI ko ạ? học bổng khuyến khích kỳ này nộp khi nào ạ' },
      { ai: 'Có **CLB AI Lab** nha, sinh hoạt **chiều thứ Bảy** ở lab B1.05, đang tuyển thành viên năm nhất 🤖 Học bổng khuyến khích HK1 xét **điểm TB từ 3.2**, rèn luyện từ Khá, nộp online đến hết **30/11** ạ.', kw: 2 },

      { feature: 4 },
      { sep: '— Ngày 6/12 · mùa thi cuối kỳ —' },
      { kh: 'Em áp lực thi quá, cả tuần nay mất ngủ, học ko vô gì hết…' },
      { ai: 'Chị nghe em rồi, mùa thi nhiều bạn cũng thấy vậy, em không một mình đâu Quân 💙 Em có muốn nói chuyện riêng với **chuyên viên tham vấn** của trường không? **Miễn phí và bảo mật** nha.', kw: 0 },
      { kh: 'Dạ em muốn nói chuyện với ai đó ạ' },
      { ai: 'Chị đặt cho em lịch gặp riêng **15h thứ Tư 8/12** với cô **Lan Phương** ở phòng tham vấn A1.105 rồi nha. Lúc nào thấy quá sức, em gọi ngay **đường dây hỗ trợ sinh viên 24/7** của trường ạ.', meta: '🔒 Đã chuyển chuyên viên tham vấn · thông tin được giữ kín', kw: 1, hold: 1500 },
      { sep: '— Ngày 11/3 · hướng nghiệp, việc làm —' },
      { kh: 'Hè này em muốn đi thực tập AI thì tìm ở đâu ạ?' },
      { ai: '**Ngày hội việc làm thứ Bảy 18/3** có **40 doanh nghiệp**, 12 chỗ thực tập hè cho sinh viên năm nhất ngành AI nè em 💼', kw: 2 },
      { aiImgs: [{ img: 'viec-lam', label: 'Ngày hội việc làm' }, { img: 'thuc-tap', label: 'Thực tập hè' }], hold: 2600 },
      { ai: 'Em gửi **CV** qua đây, phòng **Quan hệ doanh nghiệp** góp ý giúp em trước ngày hội nha 📄' },
      { kh: 'Dạ em gửi liền, cảm ơn chị nhiều 🥰' },
      // Không có { end: true }: bấm → thêm một lần là sang thẳng slide kế.
    ],

    /* ===== Nội dung slide trình chiếu (trinh-chieu.html). Slide thống kê dùng số minh họa (deck.dashboard). ===== */
    deck: {
      /* Demo chat dọc (demo-doc.js): bài đăng → bình luận của phụ huynh → quảng cáo tuyển sinh (bấm Gửi tin nhắn)
         → Messenger với thí sinh Minh Quân (tuyển sinh, rồi các mốc sau nhập học) → màn kết. Không có màn Meta CAPI vì cảnh đó
         đứng sau cả năm học (slide 13 đã có Lead). */
      demoDoc: {
        khach: 'Minh Quân',
        sanPham: 'Tuyển sinh 2027 · Ngành Trí tuệ nhân tạo',
        ngay: '17/11/2026',
        gio: '21:40',
        binhLuan: [
          { ten: 'Lê Văn Hùng', noiDung: 'Con tôi ở Nghệ An, 24 điểm A00 muốn học AI thì trường có ký túc xá không?', traLoi: 'Dạ có ạ, phòng Tuyển sinh vừa nhắn tin tư vấn chi tiết cho anh, anh xem inbox nha!' },
        ],
        post: {
          tieuDe: 'TUYỂN SINH 2027 · NGÀNH TRÍ TUỆ NHÂN TẠO 🤖',
          dong: ['Học AI từ năm nhất, lab thực hành', 'Học bổng tân sinh viên đến 50%', 'Ký túc xá cho bạn ở tỉnh xa', 'Thực tập ở doanh nghiệp đối tác'],
          anh: ['phong-may', 'khuon-vien', 'lop-hoc', 'ktx'],
        },
        quangCao: {
          tieuDe: 'HỌC AI TỪ NĂM NHẤT · TUYỂN SINH 2027',
          mo: 'Ngành Trí tuệ nhân tạo, học bổng tân sinh viên đến 50%, ký túc xá ưu tiên bạn ở tỉnh xa.',
          anh: 'phong-may', nhan: 'MESSENGER', dong: 'Tư vấn tuyển sinh 24/7 · Open Day 28/11', nut: 'Gửi tin nhắn',
        },
        ket: {
          tieuDe: 'PRENY AI – MỘT AI CHATBOT CHO CẢ HÀNH TRÌNH SINH VIÊN',
          y: ['Tư vấn tuyển sinh 24/7, không hứa đậu bừa', 'Mời Open Day, lấy SĐT thí sinh', 'Thông tin học tập: lịch học, học phần', 'Hành chính: nộp đơn online',
              'Tâm lý – xã hội: chuyển chuyên viên tham vấn', 'Hướng nghiệp, kết nối việc làm', 'Đời sống: CLB, học bổng, ký túc xá', 'Meta CAPI Lead'],
        },
      },
      /* Pipeline mới (TRINH-CHIEU.md mục 1): dashboard, chatbot (lead = AI chốt là lấy SĐT + mời Open Day), afterSale. */
      dashboard: [
        { ten: 'Tuyển sinh ngành <span class="grad">Trí tuệ nhân tạo</span>', den: '14/07/2026', khach: 16, tyLe: 0.56 },
        { ten: 'Tuyển sinh <span class="grad">khối Kinh tế</span>', den: '04/08/2026', khach: 13, tyLe: 0.54 },
        { ten: 'Tư vấn <span class="grad">thạc sĩ, văn bằng 2</span>', den: '22/09/2026', khach: 7, tyLe: 0.57 },
      ],
      chatbot: {
        gio: 'Thí sinh nhắn lúc 21:40 · ngoài giờ hành chính',
        y: [
          ['Trả lời ngay tức thì, 24/7', 'Thí sinh nhắn 21:40, AI trả lời sau 2 giây'],
          ['Tư vấn đúng dữ liệu của trường', 'Điểm chuẩn tham khảo, học phí, học bổng, KTX'],
          ['Chốt đơn = lấy SĐT + mời Open Day', 'Giữ suất tham quan, chuyển phòng Tuyển sinh'],
          ['Hiểu hình ảnh thí sinh gửi', 'Thí sinh gửi ảnh phòng ở, AI hiểu đúng ý hỏi'],
        ],
        chat: [
          { ref: { img: L(IMG['phong-may']), ten: 'Tuyển sinh 2027 · Ngành Trí tuệ nhân tạo' } },
          { kh: 'e thi A00 dc 24 điểm, vô ngành AI dc ko ạ? học phí bn, có ktx ko ạ' },
          {
            ai: 'Chào em! Học phí **32.000.000đ/năm** nha. Điểm chuẩn 2026 là **23,5**, em xem để **tham khảo** thôi, chị không hứa đậu trước được. Ký túc xá **ưu tiên bạn ở tỉnh xa**, **450.000đ/tháng** 🎓',
            meta: '⚡ Preny AI trả lời sau 2 giây',
          },
          { kh: 'nhà em ở nghệ an. có học bổng ko ạ, ba em muốn xuống xem trường' },
          {
            ai: '24 điểm em được xét **học bổng 25–50%** đó. Sáng **thứ Bảy 28/11** có **Open Day**, em với ba ghé xem lab AI, ký túc xá nha. Em cho chị xin **tên và SĐT** để giữ suất ạ 😊',
          },
          { kh: 'Lê Minh Quân, 0912 384 207 ạ' },
          { ai: 'Chị giữ **2 suất Open Day** cho em và ba rồi nha. Cô Thu Hà phòng Tuyển sinh sẽ gọi em xác nhận liền ⚡' },
          { don: true },
          { ok: true },
        ],
        lead: {
          ten: 'Lê Minh Quân',
          sdt: '0912 384 207',
          nhuCau: 'Ngành **Trí tuệ nhân tạo** · A00 **24 điểm** · ở Nghệ An, cần ký túc xá · hỏi học bổng · đi cùng ba',
          the: [['FB Ads · Tuyển sinh ngành AI', 'ng'], ['#TriTueNhanTao', 'qt'], ['#CanKTX', 'qt'], ['Đã cho SĐT', 'ht']],
          lichNhan: 'Lịch tham quan trường',
          lich: ['Open Day · 2 suất', '8:00 · Thứ Bảy 28/11'],
          sale: 'Cô Thu Hà · Tuyển sinh',
          nut: 'Chuyển cho Tuyển sinh',
          xong: 'Đã chuyển cho cô Thu Hà',
          okTieuDe: 'Đã giữ suất Open Day 28/11',
        },
        anh: {
          img: L(IMG['ktx']),
          nhan: 'Thí sinh gửi ảnh phòng ký túc xá',
          kh: 'Phòng ktx như này mấy người ở vậy chị, có tủ riêng ko ạ?',
          ai: 'Ảnh em gửi là phòng **giường tầng**, giống phòng **4 người** ở ký túc xá trường đó. Mỗi bạn có **tủ riêng**, phòng có wifi, **450.000đ/tháng**. Open Day 28/11 em ghé xem phòng thật nha!',
          pill: '🔍 AI nhìn ảnh, hiểu đúng ý thí sinh hỏi',
        },
      },
      afterSale: {
        y1: 'AI gửi tiếp 5 dịch vụ cho tân sinh viên',
        y2: 'Lịch nhập học, học bổng, ngày hội việc làm',
        gio: 'Thí sinh vừa hoàn tất nhập học',
        don: { ma: '#AD27AI015', phi: 'đã nhập học', sp: [{ ten: 'Nhập học ngành Trí tuệ nhân tạo', sl: 1, dv: 'năm học', gia: 32000000 }] },
        loi: 'Chúc mừng Quân trúng tuyển ngành Trí tuệ nhân tạo 🎓 Từ giờ em cần gì cứ nhắn chị qua đây hoặc Zalo OA của trường nha. Tân sinh viên K27 hay đăng ký thêm:',
        sp: [
          { img: L(IMG['ktx']), ten: 'Ký túc xá phòng 4 người (tháng)', gia: 450000, nut: 'Giữ chỗ' },
          { img: L(IMG['phong-may']), ten: 'Khóa Python nền tảng trước nhập học', gia: 1200000, cu: 1800000, nut: 'Đăng ký' },
          { img: L(IMG['lop-hoc']), ten: 'Tiếng Anh tăng cường năm nhất', gia: 3500000, nut: 'Tư vấn' },
          { img: L(IMG['sv-thao-luan']), ten: 'Kỹ năng thuyết trình, làm việc nhóm', gia: 500000, nut: 'Đăng ký' },
          { img: L(IMG['sv-vui']), ten: 'Áo đồng phục + balo tân sinh viên', gia: 390000, nut: 'Đặt mua' },
        ],
        khach: 'Chị giữ giúp em 1 chỗ ký túc xá với đăng ký khóa Python luôn nha',
        pill: '🎓 Tân sinh viên giữ chỗ ký túc xá, đăng ký khóa Python ngay trong chat',
        fmm: {
          sep: '2 tuần sau · tin Facebook FMM',
          chao: 'Chào Quân 👋 Trường gửi em lịch nhập học K27 nha!',
          img: L(IMG['khuon-vien']),
          nhan: 'LỊCH NHẬP HỌC',
          ten: 'Nhập học K27 · 06/09/2027',
          mo: 'Nhận thẻ sinh viên, phòng ký túc xá, tuần sinh hoạt đầu khóa.',
          nut: 'Xem lịch',
        },
        zbs: {
          ten: 'Học bổng tân sinh viên của Quân',
          mo: 'Chúc mừng em trúng tuyển ngành Trí tuệ nhân tạo 🎓 Thông tin học bổng của em:',
          dong: [
            ['Mức học bổng', '**25% học phí năm 1**'],
            ['Duy trì', 'Điểm TB từ 3.2'],
            ['Hạn xác nhận', '31/08/2027'],
          ],
          nut: 'Xác nhận học bổng',
        },
      },
      tieuDe6: 'Một hệ thống AI chatbot cho<br><span class="grad">6 mảng hỗ trợ sinh viên</span>',
      // Người dùng muốn thấy rõ các mảng hỗ trợ → 6 ô là 6 mảng (không phải 6 tính năng Preny như các ngành khác)
      tinhNang: [
        ['Hỗ trợ tuyển sinh 24/7', 'Tư vấn ngành, học phí, mời Open Day'],
        ['Hỗ trợ thông tin học tập', 'Lịch học, phòng học, đăng ký học phần'],
        ['Hỗ trợ hành chính online', 'Giấy xác nhận online, không xếp hàng'],
        ['Hỗ trợ tâm lý – xã hội', 'Lắng nghe, chuyển tham vấn bảo mật'],
        ['Hướng nghiệp, kết nối việc làm', 'Ngày hội việc làm, thực tập, góp ý CV'],
        ['Đời sống và phát triển sinh viên', 'CLB, học bổng, ký túc xá, hoạt động'],
      ],

      chotDon: {
        nganh: 'trường đại học',
        nguoi: 'Phòng Tuyển sinh',
        chotLa: 'AI chốt đơn = lấy SĐT + mời Open Day',
        buoc: [
          { t: 'Chạy quảng cáo', d: 'Tuyển sinh 2027, ngành Trí tuệ nhân tạo', icon: 'megaphone', own: 'Trường chạy quảng cáo', mock: 'ad', img: L(IMG['phong-may']), text: 'Học AI từ năm nhất 🤖 Học bổng tân sinh viên đến 50%', btn: 'Gửi tin nhắn' },
          { t: 'Bắt đầu chat', d: 'Hỏi điểm, ngành thích, tỉnh, ký túc xá', icon: 'chat', ai: true, mock: 'chat',
            msgs: [['kh', 'Em 24 điểm A00 vô ngành AI được không ạ?'], ['ai', 'Điểm chuẩn 2026 là 23,5, em xem tham khảo nha 🎓']] },
          { t: 'Mời Open Day', d: 'Xin tên, SĐT, giữ suất cho thí sinh và ba mẹ', icon: 'phone', ai: true, chot: true, mock: 'form', fields: ['Minh Quân · AI, 24 điểm', '0912 384 207'], ok: 'Đã giữ suất 28/11' },
          { t: 'Tham quan trường', d: 'Xem lab AI, ký túc xá, gặp thầy cô', icon: 'calendar', own: 'Phòng Tuyển sinh', mock: 'lich', ten: 'Open Day · 2 suất', gio: '8:00 · Thứ Bảy 28/11', ok: 'Quân và ba đã tới' },
          { t: 'Nuôi thí sinh', d: 'Gửi học bổng, hồ sơ xét tuyển, hạn nộp', icon: 'chat', ai: true, mock: 'img', img: L(IMG['giang-duong']), cap: 'Hồ sơ: học bạ, CCCD, giấy báo điểm' },
          { t: 'Nhập học', d: 'Cán bộ tuyển sinh chốt hồ sơ, nhập học', icon: 'check', mock: 'img', img: L(IMG['sv-vui']), cap: '✓ Quân nhập học ngành AI, 9/2027' },
        ],
        vong: { t: 'Đồng hành sinh viên & Remarketing', d: 'Học tập, hành chính, tâm lý, việc làm, đời sống qua Zalo OA; gửi lịch nhập học, học bổng, ngày hội việc làm' },
      },

      bamDuoi: {
        nhan: 'Vì sao bám đuổi của Preny đặc biệt', shopB: 'Trường B',
        cmpSai: ['Thí sinh im → gửi “Em còn quan tâm trường mình không?”', 'Không biết thí sinh thích ngành nào, vì sao im', 'Thí sinh thấy phiền, bỏ qua tin nhắn'],
        cmpDung: ['Thí sinh nhắn xong im → gửi đúng ngành đã hỏi (thẻ <b>#TriTueNhanTao</b> từ quảng cáo)',
                  'Hỏi học phí xong im → gửi học bổng, hạn xét đợt 1 (thẻ <b>#HoiHocPhi</b>)',
                  'Đúng ngành, đúng lý do im → thí sinh quay lại giữ suất Open Day'],
        hoi: 'Ngành AI học phí bao nhiêu ạ?',
        traLoiThuong: 'Dạ 32.000.000đ/năm em nhé.',
        nhacChung: 'Em còn quan tâm trường mình không em? 😊',
        refImg: L(IMG['phong-may']), refTen: 'Tuyển sinh 2027 · Ngành Trí tuệ nhân tạo',
        vd1: {
          ten: 'Thí sinh nhắn xong im',
          kh: 'Ngành AI ra trường làm gì vậy ạ?',
          ai: 'Kỹ sư AI, phân tích dữ liệu, thị giác máy tính… Em thích mảng nào để chị gửi thêm nha?',
          tag: '🏷 #TriTueNhanTao', tagNote: 'thẻ từ quảng cáo · thí sinh im 1 ngày',
          nhac: 'Quân ơi, chị gửi em <b>ảnh lab AI</b> sinh viên năm nhất được thực hành nè 🤖 Sáng thứ Bảy 28/11 có <b>Open Day</b>, em ghé xem tận nơi nha?',
          dung: '🎯 Theo thẻ #TriTueNhanTao: gửi đúng ngành thí sinh hỏi',
          khach: 'Dạ em muốn đi ạ',
        },
        vd2: {
          ten: 'Báo học phí xong im',
          kh: 'Ngành AI học phí bao nhiêu ạ?',
          ai: 'Học phí <b>32.000.000đ/năm</b>, có học bổng tân sinh viên theo điểm đó em.',
          tag: '🏷 #HoiHocPhi', tagNote: 'báo học phí xong thí sinh im 2 ngày',
          nhac: 'Quân ơi, 24 điểm em được xét <b>học bổng 25–50%</b>, nộp hồ sơ sớm là kịp <b>xét đợt 1</b> nha. Chị giữ suất tư vấn học bổng cho em với ba nhé?',
          dung: '🎯 Theo thẻ #HoiHocPhi: gửi học bổng, đúng lý do thí sinh im',
          khach: 'Dạ chị giữ giúp em',
        },
      },

      binhLuan: {
        post: '<b>Tuyển sinh 2027 · Ngành Trí tuệ nhân tạo</b> 🤖 Học bổng tân sinh viên đến 50%, ký túc xá cho bạn ở tỉnh xa',
        img: L(IMG['khuon-vien']),
        kav: 'VH', kten: 'Lê Văn Hùng', hoi: 'Con tôi ở Nghệ An, thi A00 được 24 điểm, muốn học AI thì trường có ký túc xá không?',
        traLoi: 'Dạ chào anh Hùng! Phòng Tuyển sinh vừa nhắn tin tư vấn chi tiết cho anh, anh xem tin nhắn nhé 💬',
        act2: 'Nhắn riêng, mời Open Day',
        nhan: 'Chào anh Hùng! Ký túc xá trường <b>ưu tiên sinh viên tỉnh xa</b>, <b>450.000đ/tháng</b> ạ. Sáng <b>thứ Bảy 28/11</b> có Open Day, anh và cháu ghé xem phòng, lab AI nha. Anh cho em xin SĐT để giữ suất ạ!',
        sp: { ten: 'Open Day · thứ Bảy 28/11', gia: 'Miễn phí · giữ suất trước', img: L(IMG['open-day']) },
        khach: 'Số tôi 0983 615 274 nhé',
      },

      duLieu: {
        shopA: 'Trường A',
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: chắc chắn đậu, cam kết việc làm 100%', 'Phụ huynh khiếu nại, trường mất uy tín'],
        dung: ['Chỉ trả lời theo dữ liệu trường cung cấp', 'Điểm chuẩn chỉ để tham khảo, không hứa đậu', 'Chưa chắc chắn → báo ngay cán bộ tuyển sinh'],
        hoi: '24 điểm chắc đậu ngành AI không ạ? Trường có cam kết việc làm 100% không?',
        aiSai: 'Dạ <b>chắc chắn đậu</b> em nhé! Ra trường được <b>cam kết việc làm 100%</b> luôn 🥰',
        thucTe: '⚠ Thực tế: điểm chuẩn mỗi năm một khác, trường không có cam kết việc làm 100%',
        gian: 'Năm nay điểm chuẩn lên 25, em trượt rồi! Sao bảo chắc chắn đậu? 😠',
        cho: 'Em chờ chị một chút để chị kiểm tra chính xác thông tin cho em nha!',
        nv: 'Cô Thu Hà · Phòng Tuyển sinh · người thật',
        nvTraLoi: 'Chào em, điểm chuẩn 2026 là 23,5, chỉ để tham khảo, điểm 2027 trường công bố sau kỳ thi. Trường không cam kết việc làm 100%, cô gửi em số liệu khảo sát việc làm của khoa nhé!',
      },

      tags: {
        rows: [
          { ten: 'Lê Minh Quân', av: 'MQ', kenh: 'fb', msg: 'E 24đ A00 vô ngành AI dc ko ạ?', gio: '21:41',
            tags: [['FB Ads · Tuyển sinh ngành AI', 'ng'], ['#TriTueNhanTao', 'qt'], ['24 điểm · cần KTX', 'qt'], ['Hẹn Open Day 28/11', 'ht']] },
          { ten: 'Lê Văn Hùng', av: 'VH', kenh: 'fb', msg: 'Trường có ký túc xá không?', gio: '09:12',
            tags: [['Bình luận bài viết', 'ng'], ['Phụ huynh', 'qt'], ['#CanKTX', 'qt'], ['Gọi lần 1 ✓', 'sa']] },
          { ten: 'Phạm Thảo Vy', av: 'TV', kenh: 'tiktok', msg: 'Ngành Marketing học mấy năm ạ?', gio: '16:25',
            tags: [['TikTok · Video Open Day', 'ng'], ['#Marketing', 'qt'], ['Đã cho SĐT', 'ht'], ['Gọi lần 2 · không bắt máy', 'sa']] },
          { ten: 'Nguyễn Đức Anh', av: 'ĐA', kenh: 'zalo', msg: 'Xét học bạ cần điểm bao nhiêu ạ?', gio: '11:03',
            tags: [['Zalo OA · Tư vấn tuyển sinh', 'ng'], ['#XetHocBa', 'qt'], ['#HocBong', 'qt'], ['Đã kết nối Zalo', 'za']] },
          { ten: 'Trần Khánh Linh', av: 'KL', kenh: 'fb', msg: 'Em ở Gia Lai, ktx còn chỗ ko ạ', gio: 'Hôm qua',
            tags: [['FB Ads · Ký túc xá', 'ng'], ['#TriTueNhanTao', 'qt'], ['Tỉnh xa · cần KTX', 'qt'], ['Đang nuôi · bám đuổi', 'ht']] },
        ],
        chanDung: {
          ten: 'Lê Minh Quân', av: 'MQ', kenh: 'fb', sub: 'Facebook Messenger · 0912 384 207',
          nhom: [
            ['Nguồn khách', [['Facebook Ads', 'ng'], ['Bài: Tuyển sinh ngành AI', 'ng']]],
            ['Quan tâm', [['#TriTueNhanTao', 'qt'], ['24 điểm · cần KTX', 'qt']]],
            ['Hành trình', [['Cho SĐT 17/11', 'ht'], ['Hẹn Open Day 28/11', 'ht']]],
            ['Sale gọi', [['Cô Thu Hà · lần 1 ✓', 'sa']]],
            ['Kết nối', [['Đã kết nối Zalo OA', 'za'], ['Thí sinh mới · L1', 'lv']]],
          ],
          ghiChu: 'A00 24 điểm, thích ngành Trí tuệ nhân tạo. Ở Nghệ An, cần ký túc xá, ba hỏi học bổng. Hẹn Open Day 28/11, đi cùng ba.',
        },
      },

      chotLai: [
        ['THÍ SINH', ['Quảng cáo tuyển sinh', 'Fanpage, Zalo OA', 'Ngày hội tư vấn', 'Giới thiệu', 'Tự tìm đến']],
        ['AI CHATBOT', ['Phản hồi nhanh tức thì 24/7', 'Tư vấn ngành, học phí, học bổng, KTX', 'Không hứa đậu, không trả lời bừa', 'Lấy SĐT, mời Open Day']],
        ['BÁM ĐUỔI', ['Gửi 5 tin nhắn trong 7 ngày: lab học, sinh viên chia sẻ, hồ sơ xét tuyển', 'Nuôi thí sinh để trường nằm đầu danh sách']],
        ['CHỐT LỊCH HẸN', ['Open Day hoặc tư vấn 1-1 với thầy cô', 'Cán bộ tuyển sinh chốt hồ sơ, nhập học']],
        ['ĐỒNG HÀNH SINH VIÊN', ['Học tập, hành chính, tâm lý, việc làm, đời sống qua FB và Zalo']],
      ],
    },
  };
})();
