/* Bài 2 (video demo ngang tự chạy): TRƯỜNG ĐẠI HỌC, nhóm cân nhắc nhiều. Làm 19/11/2026 theo người dùng:
   "trường đại học muốn xây dựng 1 hệ thống chatbot AI cho các mảng hỗ trợ tuyển sinh, hỗ trợ thông tin học tập, hỗ trợ hành chính,
   hỗ trợ tâm lý - xã hội, hướng nghiệp - kết nối việc làm và đời sống, phát triển sinh viên… viết kịch bản demo sao cho ấn tượng".
   Mạch: 1 thí sinh (Lê Minh Quân) từ đầu tới cuối.
   - Tuyển sinh theo mạch cnn (thẩm mỹ viện): quảng cáo → thí sinh bấm "Gửi tin nhắn", nhắn trước → AI báo học phí, điểm chuẩn tham khảo
     (không hứa đậu) + đúng ảnh quảng cáo → hỏi 1 câu → học bổng, KTX, mời Open Day, xin tên + SĐT → thí sinh im → gắn thẻ
     → bám đuổi 5 tin → thí sinh hẹn Open Day, cho SĐT → báo tư vấn viên tuyển sinh → gửi Lead lên Facebook.
   - 1 năm sau, cùng AI đó trên Zalo OA của trường đồng hành sinh viên ở 5 mảng còn lại: học tập, hành chính, đời sống và phát triển,
     tâm lý – xã hội (lắng nghe, không chẩn đoán, chuyển chuyên viên tham vấn, bảo mật), hướng nghiệp – việc làm.
   Tên trường, học phí, điểm, học bổng, tên người, SĐT, MSSV: minh họa. Ảnh: Unsplash dùng chung với bài 1. */
window.VN_KB = {
  ten: 'Trường đại học video ngang',
  ketSub: 'Để AI tư vấn tuyển sinh và đồng hành cùng sinh viên của trường bạn',
  shop: { ten: 'Đại học Ánh Dương', av: 'AD', mau: '#1D4ED8', sub: 'Thường trả lời ngay' },
  anh: {
    'phong-may': '../assets/img/u/1778489769184-45868633c527_800x800.jpg',
    'lop-hoc': '../assets/img/u/1779358296802-715fc9fbc152_800x800.jpg',
    'thu-vien': '../assets/img/u/1683319598210-d70486f2f996_800x800.jpg',
    'khuon-vien': '../assets/img/u/1583373834259-46cc92173cb7_800x800.jpg',
    'giang-duong': '../assets/img/u/1606761568499-6d2451b23c66_800x800.jpg',
    'open-day': '../assets/img/u/1780893006073-2f914b1ae832_800x800.jpg',
    'ktx': '../assets/img/u/1555854877-bab0e564b8d5_800x800.jpg',
    'viec-lam': '../assets/img/u/1780035206636-3b2969fa024c_800x800.jpg',
    'thuc-tap': '../assets/img/u/1767974817923-7e36959bed68_800x800.jpg',
    'sv-vui': '../assets/img/u/1758270705555-015de348a48a_800x800.jpg',
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= TUYỂN SINH · QUẢNG CÁO → MESSENGER ================= */
    { k: 'canh', nhan: 'Thí sinh từ quảng cáo → Messenger', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'phong-may', nhan: 'MESSENGER', tieuDe: 'Tuyển sinh 2027 · Ngành Trí tuệ nhân tạo', nut: 'Gửi tin nhắn',
        text: 'Học AI từ năm nhất 🤖 Ngành Trí tuệ nhân tạo – Đại học Ánh Dương tuyển sinh 2027, học bổng tân sinh viên đến 50%, ký túc xá cho bạn ở tỉnh xa. #tuyensinh2027 #trituenhantao #hocbong',
      }, d: 1500 },
    { k: 'cap', e: 'Quảng cáo tuyển sinh', t: 'Thí sinh bấm "Gửi tin nhắn" từ quảng cáo', s: 'Hỏi gì, AI trả lời ngay lập tức' },
    { k: 'tap', d: 1100 },
    { k: 'ms', ref: { loai: 'ad', img: 'phong-may', dong1: 'Minh Quân đã trả lời một quảng cáo', dong2: 'Tuyển sinh 2027 · Ngành Trí tuệ nhân tạo' }, gio: '14:47', d: 900 },
    { k: 'kh', text: 'Ngành AI học phí bao nhiêu vậy ạ? Em thi A00 được 24 điểm' },
    { k: 'cap', e: 'Trả lời đúng dữ liệu', t: 'Học phí, điểm chuẩn: AI gửi kèm đúng ảnh quảng cáo', s: 'Điểm chuẩn chỉ để tham khảo, không hứa đậu' },
    { k: 'ai', text: 'Chào em Quân, ngành **Trí tuệ nhân tạo** học phí **32.000.000đ/năm** nha. Điểm chuẩn năm 2026 là **23,5**, em xem để tham khảo thôi, năm nay còn tùy hồ sơ.' },
    { k: 'ai', img: 'phong-may' },
    { k: 'cap', e: 'Hỏi đúng nhu cầu', t: 'Hỏi thêm 1 câu để tư vấn đúng', s: 'Ở xa thì có ký túc xá, có học bổng' },
    { k: 'ai', text: 'Em ở tỉnh nào, có cần ở ký túc xá không để chị tư vấn kỹ hơn cho em nha?' },
    { k: 'kh', text: 'Nhà em ở Nghệ An ạ. Ba em hỏi có học bổng ko, ktx còn chỗ ko ạ' },
    { k: 'cap', e: 'Mời tham quan trường', t: 'Học bổng, ký túc xá, rồi mời Open Day', s: 'Xin tên, SĐT để giữ suất' },
    { k: 'ai', text: '24 điểm em được xét **học bổng tân sinh viên 25–50%** đó. Ký túc xá ưu tiên bạn ở tỉnh xa, **450.000đ/tháng** nha.' },
    { k: 'ai', text: 'Sáng **thứ Bảy 28/11** trường có **Open Day**, em với ba ghé xem lab AI, ký túc xá luôn nha. Em cho chị xin **tên và SĐT** để giữ suất ạ 😊' },

    // Thí sinh im → màn hình phụ: gắn thẻ, bám đuổi 5 tin nuôi thí sinh
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Thí sinh im', t: 'Preny tự gắn thẻ ngành thí sinh quan tâm', s: 'Hashtag của bài quảng cáo thành thẻ của thí sinh' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi thí sinh', t: '5 tin: 15 phút, rồi cách 1 ngày, 1 ngày, 1 ngày, 2 ngày', s: 'Lab học, sinh viên chia sẻ, kiểm định, hồ sơ, Open Day' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Quân ơi, đây là **lab AI** sinh viên năm nhất được thực hành nè 🤖' },
    { k: 'ai', imgs: ['phong-may', 'lop-hoc', 'thu-vien'] },
    { k: 'p', a: 'r1', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '15:04', ngay: 'T5 19/11/2026', d: 700 },
    { k: 'ai', text: 'Chị gửi em chia sẻ của một bạn sinh viên năm 2 ngành AI nha 💬' },
    { k: 'ai', review: { av: 'GL', ten: 'Trần Gia Linh', sub: 'Sinh viên năm 2 · Trí tuệ nhân tạo', mau: '#60A5FA',
        text: 'Năm nhất mình đã làm dự án nhận diện ảnh cùng thầy, thứ Bảy sinh hoạt CLB AI Lab. Ở ký túc xá ngay trong trường nên đi học, lên lab rất tiện.',
        note: 'Trải nghiệm của mỗi bạn có thể khác nhau' } },
    { k: 'p', a: 'r2', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '15:04', ngay: 'T6 20/11/2026', d: 700 },
    { k: 'ai', img: 'khuon-vien' },
    { k: 'ai', checks: { tieuDe: 'Để em và ba yên tâm về trường:', dong: [
        'Chương trình đạt **kiểm định chất lượng** giáo dục', 'Học kỳ thực tập tại **doanh nghiệp đối tác**', 'Có **phòng tham vấn tâm lý** và ký túc xá trong trường'] } },
    { k: 'p', a: 'r3', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '15:04', ngay: 'T7 21/11/2026', d: 700 },
    { k: 'ai', text: 'Hồ sơ xét tuyển chỉ cần **học bạ, CCCD, giấy báo điểm**, em nộp online được. Nộp sớm còn được xét học bổng đợt 1 nha 📋' },
    { k: 'ai', img: 'giang-duong' },
    { k: 'p', a: 'r4', d: 800 },
    { k: 'time', nhan: '2 ngày sau', gio: '15:04', ngay: 'T2 23/11/2026', d: 700 },
    { k: 'ai', text: 'Open Day **thứ Bảy 28/11** còn ít suất xem lab AI và ký túc xá, chị giữ cho em với ba 2 suất nha?' },
    { k: 'ai', img: 'open-day' },
    { k: 'p', a: 'r5', d: 1000 },
    { k: 'cap', e: 'Thí sinh quay lại', t: 'Sau tin thứ 5, thí sinh hẹn Open Day', s: 'AI giữ suất, xin SĐT ngay' },
    { k: 'kh', text: 'Dạ thứ 7 em đi với ba được ạ, giữ giúp em 2 suất' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'ai', text: 'Được nha em, Open Day bắt đầu **8h sáng thứ Bảy 28/11**. Em cho chị xin **họ tên và SĐT** của em hoặc ba để giữ suất ạ 🎓' },
    { k: 'cap', e: 'Lấy SĐT', t: 'Thí sinh để lại tên, SĐT', s: 'Đây là lúc AI chốt: chuyển cho tư vấn viên tuyển sinh' },
    { k: 'kh', text: 'Lê Minh Quân, 0912 384 207 ạ. Ba em tên Lê Văn Hùng' },
    { k: 'ai', text: 'Chị giữ **2 suất Open Day 8h thứ Bảy 28/11** cho em và ba rồi nha. Cô Thu Hà phòng Tuyển sinh sẽ gọi em xác nhận liền 😊', d: 1800 },

    // Có SĐT → màn hình phụ: báo tư vấn viên tuyển sinh → gửi Lead lên Facebook
    { k: 'cap', e: 'Báo ngay tư vấn viên', t: 'Có SĐT: cô tuyển sinh nhận thí sinh, gọi ngay', s: 'AI chuyển đủ thông tin, không phải hỏi lại' },
    { k: 'panel', v: 'sale', d: 800 },
    { k: 'p', a: 's1', d: 700 }, { k: 'p', a: 's2', d: 500 }, { k: 'p', a: 's3', d: 500 }, { k: 'p', a: 's4', d: 600 },
    { k: 'p', a: 's5', d: 1600 }, { k: 'p', a: 's6', d: 2400 },
    { k: 'cap', e: 'Gửi Lead về Facebook', t: 'Thí sinh để lại SĐT: gửi sự kiện Lead lên Facebook', s: 'Quảng cáo tìm thêm thí sinh giống thí sinh thật' },
    { k: 'panel', v: 'capi', d: 900 },
    { k: 'p', a: 'flow', d: 1500 }, { k: 'p', a: 'event', d: 1300 }, { k: 'p', a: 'ok', d: 2800 },
    { k: 'panel', v: null, d: 600 },

    /* ================= 1 NĂM SAU · SINH VIÊN HỎI QUA ZALO OA CỦA TRƯỜNG: 5 MẢNG HỖ TRỢ ================= */
    { k: 'canh', nhan: '1 năm sau · Sinh viên hỏi qua Zalo OA', gio: '07:12' },
    { k: 'cap', e: '1 năm sau · Tân sinh viên', t: 'Quân nhập học, AI đồng hành qua Zalo OA', s: 'Cùng 1 AI cho 5 mảng hỗ trợ sinh viên, 24/7' },
    { k: 'zalo', gio: '07:12', ngay: 'T2 13/09/2027', chip: 'Tuần đầu · Tân sinh viên K27', d: 1500 },

    // 1. Thông tin học tập
    { k: 'cap', e: 'Thông tin học tập', t: 'Lịch học, phòng học: trả lời ngay', s: 'Nối dữ liệu đào tạo của trường' },
    { k: 'kh', text: 'Sáng nay em học môn gì, phòng nào vậy ạ? MSSV 2727015' },
    { k: 'ai', checks: { tieuDe: 'Lịch học thứ Hai 13/09 của Quân:', dong: [
        '**7h30** Giải tích 1 · phòng **A2.301**', '**9h45** Nhập môn AI · **lab B1.05**', '**13h30** Tiếng Anh 1 · phòng **C3.204**'] } },
    { k: 'ai', text: 'Hạn **đăng ký học phần học kỳ 2** là **20/12** nha em.' },

    // 2. Hành chính
    { k: 'zstamp', gio: '10:05', ngay: 'T6 22/10/2027', chip: '1 tháng sau', d: 800 },
    { k: 'cap', e: 'Hỗ trợ hành chính', t: 'Xin giấy xác nhận sinh viên online', s: 'Không phải xếp hàng ở phòng Công tác sinh viên' },
    { k: 'kh', text: 'Em cần giấy xác nhận sinh viên để ba làm hồ sơ vay vốn ạ' },
    { k: 'ai', text: 'Em bấm **Nộp đơn online** bên dưới nha. Khoảng **2 ngày làm việc** là có giấy, em mang thẻ sinh viên tới **phòng Công tác sinh viên A1.102** nhận.', nut: 'Nộp đơn online' },

    // 3. Đời sống và phát triển sinh viên
    { k: 'zstamp', gio: '19:40', ngay: 'T2 15/11/2027', chip: 'Giữa học kỳ', d: 800 },
    { k: 'cap', e: 'Đời sống, phát triển', t: 'CLB, học bổng: hỏi là có', s: 'Gợi ý đúng sở thích, đúng ngành học' },
    { k: 'kh', text: 'Trường có CLB nào về AI ko ạ? Học bổng khuyến khích kỳ này nộp khi nào ạ' },
    { k: 'ai', text: 'Có **CLB AI Lab** nha, sinh hoạt **chiều thứ Bảy** ở lab B1.05, đang tuyển thành viên năm nhất 🤖' },
    { k: 'ai', checks: { tieuDe: 'Học bổng khuyến khích học tập HK1:', dong: [
        'Điểm trung bình từ **3.2**, rèn luyện từ **Khá**', 'Nộp hồ sơ online đến hết **30/11/2027**', 'Mức học bổng **30–100% học phí**'] } },

    // 4. Tâm lý – xã hội
    { k: 'zstamp', gio: '23:18', ngay: 'T2 06/12/2027', chip: 'Mùa thi cuối kỳ', d: 800 },
    { k: 'cap', e: 'Tâm lý – xã hội', t: 'Áp lực mùa thi: AI lắng nghe, kể cả lúc nửa đêm', s: 'Không chẩn đoán, kết nối chuyên viên tham vấn' },
    { k: 'kh', text: 'Em áp lực thi quá, cả tuần nay mất ngủ, học ko vô gì hết…' },
    { k: 'ai', text: 'Mùa thi nhiều bạn cũng thấy vậy, em không một mình đâu Quân 💙 Em nói chuyện với chuyên viên tham vấn của trường nha, **miễn phí và bảo mật**.' },
    { k: 'kh', text: 'Dạ em muốn nói chuyện với ai đó ạ' },
    { k: 'ai', text: 'Chị đặt cho em lịch gặp riêng **15h thứ Tư 08/12** ở phòng tham vấn rồi nha. Lúc nào thấy quá sức, em gọi ngay **đường dây hỗ trợ sinh viên 24/7** của trường.', d: 1800 },
    { k: 'cap', e: 'Chuyển người thật', t: 'Báo chuyên viên tham vấn, giữ kín thông tin', s: 'Chỉ chuyên viên tham vấn xem được cuộc trò chuyện' },
    { k: 'panel', v: 'thamVan', d: 800 },
    { k: 'p', a: 's1', d: 700 }, { k: 'p', a: 's2', d: 500 }, { k: 'p', a: 's3', d: 500 }, { k: 'p', a: 's4', d: 600 },
    { k: 'p', a: 's5', d: 1500 }, { k: 'p', a: 's6', d: 2400 },
    { k: 'panel', v: null, d: 500 },

    // 5. Hướng nghiệp – kết nối việc làm
    { k: 'zstamp', gio: '20:10', ngay: 'T7 11/03/2028', chip: 'Học kỳ 2', d: 800 },
    { k: 'cap', e: 'Hướng nghiệp, việc làm', t: 'Thực tập, ngày hội việc làm đúng ngành', s: 'Kết nối doanh nghiệp đối tác của trường' },
    { k: 'kh', text: 'Hè này em muốn đi thực tập AI thì tìm ở đâu ạ?' },
    { k: 'ai', text: '**Ngày hội việc làm thứ Bảy 18/03** có **40 doanh nghiệp**, 12 chỗ thực tập hè cho sinh viên năm nhất ngành AI nè em.' },
    { k: 'ai', imgs: ['viec-lam', 'thuc-tap'] },
    { k: 'ai', text: 'Em gửi **CV** qua đây, phòng Quan hệ doanh nghiệp góp ý giúp em trước ngày hội nha 📄', nut: 'Gửi CV' },
    { k: 'kh', text: 'Dạ em gửi liền, cảm ơn chị nhiều 🥰', d: 1600 },

    { k: 'tongket', d: 8500 },
    { k: 'outro', d: 5200 },
  ],
  // Slide tổng kết cuối video: theo mẫu "Chốt lại 5 ô" nhóm cân nhắc nhiều, cột cuối là đồng hành sinh viên
  // (bám đuổi = 5 tin trong 7 ngày, không dùng chữ follow-up / soft follow-up)
  tongKet: { tieuDe: 'Một AI chatbot cho', em: 'cả hành trình sinh viên', cot: [
    { ten: 'Thí sinh', icon: 'users', dong: ['Quảng cáo tuyển sinh', 'Fanpage, Zalo OA', 'Ngày hội tư vấn', 'Giới thiệu', 'Tự tìm đến'] },
    { ten: 'AI Chatbot', icon: 'bot', dong: ['Trả lời tức thì 24/7', 'Tư vấn ngành, học phí, học bổng', 'Mời Open Day, lấy SĐT'] },
    { ten: 'Bám đuổi', icon: 'heart', dong: ['Gửi 5 tin nhắn trong 7 ngày: lab học, sinh viên chia sẻ, hồ sơ xét tuyển'] },
    { ten: 'Chốt lịch hẹn', icon: 'calendar', dong: ['Chuyển tư vấn viên tuyển sinh', 'Thí sinh tới Open Day, nộp hồ sơ'] },
    { ten: 'Đồng hành SV', icon: 'refresh', dong: ['Học tập, hành chính', 'Tâm lý – xã hội', 'Hướng nghiệp, đời sống'] },
  ] },
  panels: {
    tag: { av: 'MQ', ten: 'Lê Minh Quân', sub: 'Messenger · từ quảng cáo Tuyển sinh ngành AI',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#tuyensinh2027', 'qt hot'], ['#trituenhantao', 'qt hot'], ['#hocbong', 'ng']]],
             ['Thẻ từ cuộc chat', [['#hoihocphi', 'ht'], ['#CanKTX', 'qt']]]],
      im: 'Thí sinh im từ 14:49, chưa để lại SĐT',
      rule: { lb: 'Bám đuổi theo thẻ #trituenhantao', tieuDe: 'Bám đuổi bằng 5 tin ngắn',
              dong: [['15 phút', 'Ảnh lab AI, giờ thực hành'], ['1 ngày', 'Sinh viên ngành AI chia sẻ'], ['1 ngày', 'Kiểm định, doanh nghiệp đối tác'],
                     ['1 ngày', 'Hồ sơ xét tuyển, nộp online'], ['2 ngày', 'Mời giữ suất Open Day thứ Bảy']] },
      reply: 'Thí sinh giữ suất Open Day · dừng bám đuổi' },
    sale: { tieuDe: 'Báo thí sinh mới cho Tuyển sinh', ntTieuDe: 'Thí sinh mới vừa để lại SĐT', khNhan: 'Thí sinh · Số điện thoại', lichNhan: 'Lịch hẹn',
      nguon: 'Quảng cáo Tuyển sinh ngành AI → Messenger', ten: 'Lê Minh Quân', sdt: '0912 384 207',
      nhuCau: 'Ngành Trí tuệ nhân tạo, A00 24 điểm, ở Nghệ An cần ký túc xá, hỏi học bổng', lich: 'Open Day 8h thứ Bảy 28/11 · đi cùng ba',
      the: [['#trituenhantao', 'qt'], ['#CanKTX', 'qt'], ['Đã cho SĐT', 'ok']],
      sale: { av: 'TH', ten: 'Cô Thu Hà · Tuyển sinh', sub: 'Đang trực · nhận thí sinh tự động' }, ok: 'Cô Thu Hà đã nhận thí sinh, gọi tư vấn ngay' },
    thamVan: { kieu: 'sale', tieuDe: 'Kết nối chuyên viên tham vấn', ntTieuDe: 'Sinh viên cần hỗ trợ tâm lý', khNhan: 'Sinh viên · MSSV', lichNhan: 'Lịch gặp riêng',
      nguon: 'Zalo OA · Đại học Ánh Dương', ten: 'Lê Minh Quân', sdt: '2727015',
      nhuCau: 'Áp lực thi cuối kỳ, mất ngủ khoảng 1 tuần', lich: '15h thứ Tư 08/12 · phòng tham vấn A1.105',
      the: [['Tâm lý – xã hội', 'qt'], ['Bảo mật', 'ng'], ['Ưu tiên', 'ok']],
      sale: { av: 'LP', ten: 'ThS. Lan Phương', sub: 'Chuyên viên tham vấn · đang trực' }, ok: 'Chuyên viên đã nhận, thông tin được giữ kín' },
    capi: { tieuDe: 'Gửi thí sinh tiềm năng cho Facebook', event: 'Lead', nhan: 'SỰ KIỆN KHÁCH TIỀM NĂNG', giaTri: 'Có SĐT', pk: 'Lead · thí sinh để lại SĐT',
      dong: [['Thí sinh', 'Lê Minh Quân · đã để lại SĐT'], ['Nguồn', 'Quảng cáo Tuyển sinh ngành AI → Messenger'], ['Nhu cầu', 'Trí tuệ nhân tạo, Open Day'], ['Event ID', 'AD2811-LEAD (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện Lead', khong: 'Không gửi Purchase khi thí sinh chưa nhập học.' },
  },
};
