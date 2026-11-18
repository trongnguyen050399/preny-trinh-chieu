/* Kịch bản video demo NGANG 16:9: KHÓA HỌC IELTS & GIAO TIẾP (nhóm cân nhắc nhiều), làm 18/11/2026 theo mạch mẫu thẩm mỹ viện đã duyệt.
   Mạch: logo → cảnh 1 bình luận hỏi học phí giao tiếp + hỏi "mất gốc có kịp không" → AI trả lời cả 2 bằng 1 câu chung → inbox:
   học phí, ảnh lớp thật, hỏi mục tiêu → mời làm bài test đầu vào miễn phí, xin tên + SĐT → báo tư vấn viên → cảnh 2 quảng cáo IELTS
   → khách hỏi học phí → AI gửi đúng ảnh quảng cáo + học phí → khách chụp khóa khác "Này thì sao" → AI nhận ra Speaking 1 kèm 1
   → xin SĐT → khách im → gắn thẻ + bám đuổi 5 tin → khách hẹn test tại trung tâm → xin SĐT → báo tư vấn viên gọi ngay
   → gửi Lead lên Facebook → Zalo 3 tin → tổng kết → logo.
   Không lên đơn tự động: có điểm test mới tư vấn lộ trình, tư vấn viên chốt đăng ký. AI không hứa điểm khi chưa test.
   Không có tin nhắc trước buổi test hay trước ngày khai giảng (Preny chưa có tính năng này).
   Nội dung lấy từ bài 1 (demo/kich-ban/ielts-giao-tiep-tc.js): tên trung tâm, học phí, ưu đãi, khách, SĐT là dữ liệu minh họa.
   Ảnh: Unsplash có sẵn trong máy (ảnh thật, không phải trung tâm của khách). Không dùng ảnh chứng chỉ giả: tin "giáo viên"
   là ảnh người thật + thẻ liệt kê. */
window.VN_KB = {
  ten: 'IELTS & Giao tiếp video ngang',
  ketSub: 'Để AI tư vấn và lấy SĐT học viên cho trung tâm của bạn',
  shop: { ten: 'Anh Ngữ Hải Âu', av: 'HA', mau: '#1D4ED8', sub: 'Thường trả lời ngay' },
  anh: {
    'lop-hoc': '../assets/img/u/1758270704262-ecc82b23dc37_800x800.jpg',       // lớp học người lớn
    'lop-giao-tiep': '../assets/img/u/1758270704763-22072a90d3b6_800x800.jpg', // học viên nói chuyện trong lớp
    'giao-vien': '../assets/img/u/1758270705031-ebd46917a454_800x800.jpg',     // giáo viên giảng bài
    'test-online': '../assets/img/u/1758612214848-04e700d192ce_800x800.jpg',   // làm bài trên laptop, đeo tai nghe
    'bai-test': '../assets/img/u/1606326608606-aa0b62935f2b_800x800.jpg',      // phiếu trả lời trắc nghiệm
    'thuyet-trinh': '../assets/img/u/1758691736545-5c33b6255dca_800x800.jpg',  // thuyết trình phòng họp
    'hop': '../assets/img/u/1758518730037-a16581a040e8_800x800.jpg',           // họp nhóm ở công ty
    'kem-1-1': '../assets/img/u/1664382953647-5c6c76dd63b9_800x800.jpg',       // giáo viên kèm 1-1
    'hoc-online': '../assets/img/u/1612831455359-970e23a1e4e9_800x800.jpg',    // học qua video call
    'tot-nghiep': '../assets/img/u/1743327544772-52ca61ce0c27_800x800.jpg',    // sinh viên tốt nghiệp
    'hoc-vien': '../assets/img/u/1544168190-79c17527004f_800x800.jpg',         // học viên nam
    'tu-hoc': '../assets/img/u/1514355315815-2b64b0216b14_800x800.jpg',        // học viên nữ tự học
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= CẢNH 1 · BÀI VIẾT → BÌNH LUẬN → INBOX ================= */
    { k: 'canh', nhan: 'Tình huống 1 · Bình luận hỏi giá → Inbox', gio: '19:38' },
    { k: 'fb', post: {
        gio: '3 giờ', img: 'test-online', likes: '2,1K', soCmt: '143 bình luận',
        text: 'Mất gốc tiếng Anh, đi làm không có thời gian? 📚 Làm bài test đầu vào MIỄN PHÍ 20 phút, biết ngay trình độ và lộ trình hợp với mình. #giaotiep #testdauvao',
      }, d: 1600 },
    { k: 'cap', e: 'Bình luận hỏi giá', t: 'Khách hỏi học phí ngay dưới bài viết', s: 'Khách khác hỏi "mất gốc có kịp không"' },
    { k: 'cmt', i: 0, ten: 'Ngọc Lan', av: 'NL', text: 'Khóa giao tiếp học phí sao vậy ạ?' },
    { k: 'cmt', i: 1, ten: 'Đức Anh', av: 'ĐA', text: 'Mất gốc lâu rồi học có kịp không ạ?' },
    { k: 'cap', e: 'Trả lời cả 2 bình luận', t: 'Trả lời ngắn gọn, mời khách vào inbox', s: 'Không tư vấn công khai dưới bài' },
    { k: 'rep', i: 0, text: 'Mình check ib nha 💬' },
    { k: 'rep', i: 1, text: 'Mình check ib nha 💬' },

    { k: 'ms', ref: { loai: 'cmt', img: 'test-online', dong1: 'Bạn đã bình luận về bài viết của Anh Ngữ Hải Âu', dong2: '"Khóa giao tiếp học phí sao vậy ạ?"' }, gio: '19:40' },
    { k: 'cap', e: 'Tự động báo học phí', t: 'Inbox trước: học phí, ảnh lớp thật', s: 'Viết ngắn gọn, tự nhiên như người tư vấn' },
    { k: 'ai', text: 'Dạ chào chị Lan, khóa **Giao tiếp công sở** học phí **6.900.000đ**, 3 tháng 36 buổi ạ. Lớp tối đa **10 người**.' },
    { k: 'ai', imgs: ['lop-giao-tiep', 'thuyet-trinh', 'hop'] },
    { k: 'cap', e: 'Hỏi đúng mục tiêu', t: 'Hỏi học để làm gì, đang ở mức nào', s: 'Xếp đúng lớp cần bài test đầu vào' },
    { k: 'ai', text: 'Chị cần tiếng Anh cho công việc gì, giờ nghe nói được tới đâu rồi ạ?' },
    { k: 'kh', text: 'c làm kế toán, hay phải email vs khách nước ngoài. mất gốc lâu r, nói k ra câu' },
    { k: 'cap', e: 'Lấy SĐT', t: 'Mời test miễn phí, xin tên và SĐT', s: 'Không hứa trước trình độ đầu ra' },
    { k: 'ai', text: 'Dạ mất gốc vẫn học được ạ, lớp bên em nhiều anh chị đi làm. Chị làm **bài test miễn phí 20 phút** để em xếp đúng lớp nha. Chị cho em xin **tên và SĐT** để gửi link test ạ 😊' },
    { k: 'kh', text: 'Lan, 0868 527 194. tối nay c làm' },
    { k: 'ai', text: 'Dạ em ghi nhận chị Lan làm test **tối nay** rồi ạ. Lát tư vấn viên gọi gửi link test cho chị nha 📚', d: 1800 },
    { k: 'cap', e: 'Báo ngay tư vấn viên', t: 'Có SĐT: tư vấn viên nhận khách, gọi ngay', s: 'AI chuyển đủ thông tin, không phải hỏi lại' },
    { k: 'panel', v: 'sale1', d: 800 },
    { k: 'p', a: 's1', d: 700 }, { k: 'p', a: 's2', d: 500 }, { k: 'p', a: 's3', d: 500 }, { k: 'p', a: 's4', d: 600 },
    { k: 'p', a: 's5', d: 1500 }, { k: 'p', a: 's6', d: 2600 },
    { k: 'panel', v: null, d: 500 },

    /* ================= CẢNH 2 · QUẢNG CÁO → MESSENGER ================= */
    { k: 'canh', nhan: 'Tình huống 2 · Quảng cáo → Messenger', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'lop-hoc', nhan: 'MESSENGER', tieuDe: 'Lộ trình IELTS 6.5 · Lớp tối', nut: 'Gửi tin nhắn',
        text: 'Cần IELTS 6.5 cho hồ sơ du học, thạc sĩ? 📚 Lớp tối cho người đi làm tại Anh Ngữ Hải Âu, test đầu vào miễn phí 20 phút. #ielts #lophoctoi #testmienphi',
      }, d: 1500 },
    { k: 'cap', e: 'Quảng cáo Facebook', t: 'Khách bấm "Gửi tin nhắn" từ quảng cáo', s: 'Hỏi gì, AI trả lời ngay lập tức' },
    { k: 'tap', d: 1100 },
    { k: 'ms', ref: { loai: 'ad', img: 'lop-hoc', dong1: 'Minh Trần đã trả lời một quảng cáo', dong2: 'Lộ trình IELTS 6.5 · Lớp tối' }, gio: '14:47', d: 900 },
    { k: 'kh', text: 'Khóa IELTS học phí bao nhiêu vậy em?' },
    { k: 'cap', e: 'Khách hỏi học phí', t: 'AI gửi đúng ảnh trên quảng cáo kèm học phí', s: 'Học mấy khóa tùy điểm test, không hứa điểm' },
    { k: 'ai', text: 'Dạ chào anh Minh, khóa IELTS 3 tháng học phí **7.900.000đ** ạ, học mấy khóa thì tùy điểm đầu vào.' },
    { k: 'ai', img: 'lop-hoc' },
    { k: 'ai', text: 'Anh cần band mấy, đã thi lần nào chưa ạ? Bên em test miễn phí 20 phút rồi mới tư vấn lộ trình.' },
    { k: 'cap', e: 'Không hỏi lại khách', t: 'Khách chụp khóa khác hỏi "Này thì sao"', s: 'Chỉ một câu cộc lốc, không ghi tên khóa' },
    { k: 'kh', shot: { img: 'kem-1-1', cap: 'Luyện Speaking 1 kèm 1 cùng giáo viên ✨ Anh Ngữ Hải Âu' } },
    { k: 'kh', text: 'Này thì sao' },
    { k: 'cap', e: 'Nhận diện khóa từ ảnh', t: 'Đúng khóa học. Đúng học phí.', s: 'AI đọc ảnh khách gửi, khớp với danh sách khóa của trung tâm' },
    { k: 'ai', text: 'Dạ đây là **Luyện Speaking 1 kèm 1**, học phí **3.200.000đ/8 buổi** ạ. Anh yếu Nói thì học kèm lộ trình IELTS được.' },
    { k: 'ai', text: 'Anh cho em xin **tên và SĐT** để em gửi link test miễn phí nha 😊' },

    // Khách im → màn hình phụ: gắn thẻ (hashtag quảng cáo + thẻ từ cuộc chat), bám đuổi 5 tin nuôi khách
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Preny tự gắn thẻ khóa học khách quan tâm', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi nuôi khách', t: '5 tin: 15 phút, rồi cách 1 ngày, 1 ngày, 1 ngày, 2 ngày', s: 'Lớp học, feedback, giáo viên, quy trình, suất test' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Anh Minh ơi, em gửi anh vài hình **lớp tối** bên em nha, mỗi lớp tối đa **10 học viên** 📚' },
    { k: 'ai', imgs: ['lop-giao-tiep', 'tu-hoc', 'hoc-online'] },
    { k: 'p', a: 'r1', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '15:04', ngay: 'T5 19/11/2026', d: 700 },
    { k: 'ai', text: 'Đây là chia sẻ của một anh học viên đi làm bên em ạ 💬' },
    { k: 'ai', review: { av: 'ĐK', ten: 'Đăng Khoa', sub: 'đã đánh giá Anh Ngữ Hải Âu', mau: '#60A5FA',
        text: 'Mình đi làm cả ngày, chỉ học được lớp tối 2-4-6. Test đầu vào 4.5, giáo viên chữa Writing rất kỹ, 6 tháng sau mình thi được 6.5.',
        note: 'Kết quả tùy điểm đầu vào và thời gian tự học' } },
    { k: 'p', a: 'r2', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '15:04', ngay: 'T6 20/11/2026', d: 700 },
    { k: 'ai', img: 'giao-vien' },
    { k: 'ai', checks: { tieuDe: 'Đội ngũ giáo viên bên em ạ:', dong: [
        'Giáo viên **IELTS 8.0+**, có chứng chỉ giảng dạy', 'Chữa **Writing, Speaking** từng bài cho học viên', 'Lộ trình, cam kết ghi rõ **bằng văn bản** trước khi học'] } },
    { k: 'p', a: 'r3', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '15:04', ngay: 'T7 21/11/2026', d: 700 },
    { k: 'ai', text: 'Quy trình bên em là **test → có điểm 4 kỹ năng → tư vấn lộ trình → anh đồng ý mới đăng ký** ạ 😊' },
    { k: 'ai', img: 'bai-test' },
    { k: 'p', a: 'r4', d: 800 },
    { k: 'time', nhan: '2 ngày sau', gio: '15:04', ngay: 'T2 23/11/2026', d: 700 },
    { k: 'ai', text: 'Thứ Bảy này bên em còn vài suất **test miễn phí** tại trung tâm, đăng ký trong tuần còn **giảm 2.000.000đ** lộ trình IELTS. Anh muốn em giữ một suất không ạ?' },
    { k: 'p', a: 'r5', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 5, khách hẹn bài test', s: 'AI giữ lịch, xin SĐT ngay' },
    { k: 'kh', text: 'Thứ 7 này a qua test được, giữ giúp a 1 suất nha' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'ai', text: 'Dạ được ạ, **thứ Bảy 28/11** còn khung **8h30** và **14h**, giáo viên hỏi Nói trực tiếp. Anh cho em xin **tên và SĐT** để giữ lịch nha 📚' },
    { k: 'cap', e: 'Lấy SĐT', t: 'Khách để lại tên, SĐT, giờ test', s: 'Đây là lúc AI chốt: chuyển khách cho người thật' },
    { k: 'kh', text: 'Minh, 0912 486 753, 8h30 nha e' },
    { k: 'ai', text: 'Dạ em giữ lịch test **8h30 thứ Bảy 28/11** cho anh Minh rồi ạ. Tư vấn viên sẽ gọi anh xác nhận liền nha 📚', d: 1800 },

    // Có SĐT → màn hình phụ: báo tư vấn viên vào gọi ngay (không lên đơn tự động) → gửi Lead lên Facebook
    { k: 'cap', e: 'Báo ngay tư vấn viên', t: 'Có SĐT: báo tư vấn viên vào gọi ngay', s: 'Không lên đơn tự động: có điểm test mới chốt lộ trình' },
    { k: 'panel', v: 'sale', d: 800 },
    { k: 'p', a: 's1', d: 700 }, { k: 'p', a: 's2', d: 500 }, { k: 'p', a: 's3', d: 500 }, { k: 'p', a: 's4', d: 600 },
    { k: 'p', a: 's5', d: 1600 }, { k: 'p', a: 's6', d: 2600 },
    { k: 'cap', e: 'Gửi Lead về Facebook', t: 'Khách để lại SĐT: gửi sự kiện Lead lên Facebook', s: 'Quảng cáo tìm thêm khách giống khách thật' },
    { k: 'panel', v: 'capi', d: 900 },
    { k: 'p', a: 'flow', d: 1500 }, { k: 'p', a: 'event', d: 1300 }, { k: 'p', a: 'ok', d: 3200 },
    { k: 'panel', v: null, d: 600 },

    // Sau buổi test qua Zalo: 3 tin (hỏi thăm + kết quả test, mời giữ chỗ lớp hợp với điểm test, ưu đãi giới thiệu bạn)
    { k: 'cap', e: 'Chăm sóc sau test qua Zalo', t: 'Sau buổi test: hỏi thăm, gửi kết quả', s: 'Tin sau bán gửi qua Zalo OA của trung tâm' },
    { k: 'zalo', gio: '19:30', ngay: 'T7 28/11/2026', chip: 'Sau buổi test đầu vào', d: 1500 },
    { k: 'zns', zns: { img: 'bai-test', sao: false, tieuDe: 'Anh Minh ơi, buổi test sáng nay anh thấy sao ạ?',
        noiDung: 'Hải Âu gửi anh kết quả và bước tiếp theo nha:',
        dong: ['**Điểm 4 kỹ năng** và nhận xét của giáo viên', 'Lộ trình gợi ý theo đúng điểm test', 'Còn băn khoăn, anh nhắn để giáo viên tư vấn thêm'],
        nut: 'Xem kết quả test' }, d: 5000 },
    { k: 'cap', e: 'Mời bước tiếp theo', t: 'Có lớp hợp điểm test: mời giữ chỗ', s: 'Học viên tự chọn lớp, không ép đăng ký' },
    { k: 'zstamp', gio: '10:00', ngay: 'T3 01/12/2026', chip: '3 ngày sau', d: 800 },
    { k: 'zns', zns: { img: 'lop-hoc', sao: false, tieuDe: 'Lớp tối 2-4-6 hợp với điểm test của anh ạ',
        noiDung: 'Lớp khai giảng **thứ Hai 07/12** còn **4 chỗ**. Anh bấm giữ chỗ, tư vấn viên gửi lịch học cho anh nha 📚',
        nut: 'Giữ chỗ lớp' }, d: 4400 },
    { k: 'cap', e: 'Ưu đãi học viên', t: 'Gửi ưu đãi, mời giới thiệu bạn bè', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'CN 03/01/2027', chip: 'Đầu năm mới', d: 800 },
    { k: 'zns', zns: { banner: ['tot-nghiep', 'lop-giao-tiep', 'kem-1-1', 'hoc-vien'], nhan: 'RỦ BẠN CÙNG HỌC · GIẢM 1 TRIỆU', mau: '#1D4ED8',
        tieuDe: 'Quà đầu năm cho học viên Hải Âu',
        noiDung: 'Giới thiệu bạn bè cùng học, cả hai được **giảm 1.000.000đ**. Mã **HAIAU-BANBE**, dùng đến hết 28/02/2027.',
        nut: 'Gửi cho bạn' }, d: 4800 },

    { k: 'tongket', d: 8500 },
    { k: 'outro', d: 5200 },
  ],
  // Slide tổng kết cuối video: lấy từ deck.chotLai của bài 1 IELTS & giao tiếp, theo mẫu thẩm mỹ viện (cột 3 là "Bám đuổi", 5 tin trong 7 ngày)
  tongKet: { tieuDe: 'Quy trình Preny AI giúp', em: 'tăng tỷ lệ chốt học viên', cot: [
    { ten: 'Khách hàng', icon: 'users', dong: ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến'] },
    { ten: 'AI Chatbot', icon: 'bot', dong: ['Phản hồi nhanh tức thì', 'Hỏi mục tiêu, hạn thi, trình độ', 'Không hứa bừa điểm đầu ra', 'Lấy SĐT, mời làm bài test miễn phí'] },
    { ten: 'Bám đuổi', icon: 'heart', dong: ['Gửi 5 tin nhắn trong 7 ngày: lộ trình, lớp học, học viên thật', 'Nuôi khách để trung tâm nằm đầu danh sách'] },
    { ten: 'Test & chốt', icon: 'calendar', dong: ['Test đầu vào online hoặc tại trung tâm', 'Tư vấn lộ trình, tư vấn viên chốt đăng ký'] },
    { ten: 'Mua lại', icon: 'refresh', dong: ['Mời học viên cũ học khóa tiếp, giới thiệu bạn qua FB và Zalo'] },
  ] },
  panels: {
    sale1: { kieu: 'sale', tieuDe: 'Báo khách mới cho tư vấn viên', nguon: 'Bình luận bài viết → Messenger', ten: 'Phạm Ngọc Lan', sdt: '0868 527 194',
      nhuCau: 'Giao tiếp để email, nói với khách nước ngoài · mất gốc', lich: 'Test online miễn phí 20 phút · tối nay',
      the: [['#giaotiep', 'qt'], ['Bình luận bài viết', 'ng'], ['Đã cho SĐT', 'ok']],
      sale: { av: 'QU', ten: 'Tư vấn viên Quỳnh', sub: 'Đang trực · nhận khách tự động' }, ok: 'Tư vấn viên Quỳnh đã nhận khách, gọi ngay' },
    tag: { av: 'QM', ten: 'Trần Quang Minh', sub: 'Messenger · từ quảng cáo Lộ trình IELTS 6.5',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#ielts', 'qt hot'], ['#lophoctoi', 'qt hot'], ['#testmienphi', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#Speaking1kem1', 'qt']]]],
      im: 'Khách im từ 14:49, chưa để lại SĐT',
      rule: { lb: 'Bám đuổi theo thẻ #ielts', tieuDe: 'Nuôi khách bằng 5 tin ngắn',
              dong: [['15 phút', 'Ảnh lớp tối, lớp online'], ['1 ngày', 'Feedback học viên đi làm'], ['1 ngày', 'Giáo viên, cam kết bằng văn bản'],
                     ['1 ngày', 'Quy trình: test trước, tư vấn sau'], ['2 ngày', 'Ưu đãi tuần, mời giữ suất test']] },
      reply: 'Khách giữ suất test thứ Bảy · dừng bám đuổi' },
    sale: { tieuDe: 'Báo khách mới cho tư vấn viên', nguon: 'Quảng cáo Lộ trình IELTS 6.5 → Messenger', ten: 'Trần Quang Minh', sdt: '0912 486 753',
      nhuCau: 'Lộ trình IELTS, quan tâm thêm Speaking 1 kèm 1', lich: 'Test tại trung tâm · 8:30 Thứ Bảy 28/11',
      the: [['#ielts', 'qt'], ['#Speaking1kem1', 'qt'], ['Đã cho SĐT', 'ok']],
      sale: { av: 'HG', ten: 'Tư vấn viên Hằng', sub: 'Đang trực · nhận khách tự động' }, ok: 'Tư vấn viên Hằng đã nhận khách, gọi ngay' },
    capi: { tieuDe: 'Gửi khách tiềm năng cho Facebook', event: 'Lead', nhan: 'SỰ KIỆN KHÁCH TIỀM NĂNG', giaTri: 'Có SĐT', pk: 'Lead · khách để lại SĐT',
      dong: [['Khách', 'Trần Quang Minh · đã để lại SĐT'], ['Nguồn khách', 'Quảng cáo Lộ trình IELTS 6.5 → Messenger'], ['Nhu cầu', 'Test đầu vào, lộ trình IELTS'], ['Event ID', 'HA2311-LEAD (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện Lead', khong: 'Không gửi Purchase khi học viên chưa đóng học phí.' },
  },
};
