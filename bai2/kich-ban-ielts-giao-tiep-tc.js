/* Kịch bản video demo NGANG 16:9: KHÓA HỌC IELTS & GIAO TIẾP (nhóm cân nhắc nhiều).
   Viết lại 18/11/2026 theo mạch cnn người dùng chốt (mẫu thẩm mỹ viện): 1 cảnh, không có bình luận, chỉ 1 khóa từ đầu tới cuối
   (lộ trình IELTS 6.5 lớp tối).
   Mạch: logo → quảng cáo → khách bấm "Gửi tin nhắn", hỏi học phí → AI gửi đúng ảnh quảng cáo + học phí → hỏi cần band mấy, đã thi chưa
   → mời làm bài test miễn phí, xin tên + SĐT → khách im → gắn thẻ + bám đuổi 5 tin → khách hẹn test tại trung tâm → xin SĐT
   → báo tư vấn viên gọi ngay → gửi Lead lên Facebook → Zalo 3 tin → tổng kết → logo.
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
    'bai-test': '../assets/img/u/1606326608606-aa0b62935f2b_800x800.jpg',      // phiếu trả lời trắc nghiệm
    'hoc-online': '../assets/img/u/1612831455359-970e23a1e4e9_800x800.jpg',    // học qua video call
    'tot-nghiep': '../assets/img/u/1743327544772-52ca61ce0c27_800x800.jpg',    // sinh viên tốt nghiệp
    'hoc-vien': '../assets/img/u/1544168190-79c17527004f_800x800.jpg',         // học viên nam
    'tu-hoc': '../assets/img/u/1514355315815-2b64b0216b14_800x800.jpg',        // học viên nữ tự học
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= QUẢNG CÁO → MESSENGER (1 cảnh, không có bình luận, chỉ 1 lộ trình IELTS từ đầu tới cuối) ================= */
    { k: 'canh', nhan: 'Khách từ quảng cáo → Messenger', gio: '14:46' },
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
    { k: 'cap', e: 'Hỏi đúng mục tiêu', t: 'Hỏi cần band mấy, đã thi lần nào chưa', s: 'Lộ trình chính xác cần bài test đầu vào' },
    { k: 'ai', text: 'Anh cần band mấy, đã thi lần nào chưa ạ? Có điểm test rồi em mới tư vấn lộ trình chính xác được.' },
    { k: 'kh', text: 'a cần 6.5 nộp hồ sơ thạc sĩ, hạn tháng 5. chưa thi bao giờ, nói vs viết yếu lắm. chỗ khác cam kết 3 tháng, bên e sao' },
    { k: 'cap', e: 'Mời test miễn phí', t: 'Mời làm bài test, xin tên và SĐT', s: 'Không hứa điểm đầu ra khi chưa test' },
    { k: 'ai', text: 'Dạ còn 6 tháng là có lộ trình cho người đi làm ạ, nhưng lên 6.5 mất bao lâu thì **phải test mới biết**, em không hứa trước được. Anh làm **bài test miễn phí 20 phút** nha, anh cho em xin **tên và SĐT** để gửi link test ạ 😊' },

    // Khách im → màn hình phụ: gắn thẻ (hashtag quảng cáo + thẻ từ cuộc chat), bám đuổi 5 tin nuôi khách
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Preny tự gắn thẻ khóa học khách quan tâm', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi 5 tin', t: '5 tin: 15 phút, rồi cách 1 ngày, 1 ngày, 1 ngày, 2 ngày', s: 'Lớp học, feedback, giáo viên, quy trình, suất test' },
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
    { k: 'ai', text: 'Thứ Bảy này bên em còn vài suất **test miễn phí** tại trung tâm, giáo viên hỏi Nói trực tiếp. Anh muốn em giữ một suất không ạ?' },
    { k: 'p', a: 'r5', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 5, khách hẹn bài test', s: 'AI giữ lịch, xin SĐT ngay' },
    { k: 'kh', text: 'Thứ 7 này a qua test được, giữ giúp a 1 suất nha' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'ai', text: 'Dạ được ạ, **thứ Bảy 28/11** còn khung **8h30** và **14h**. Anh cho em xin **tên và SĐT** để giữ lịch nha 📚' },
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

    // Sau buổi test qua Zalo: 3 tin (hỏi thăm + kết quả test, mời giữ chỗ lớp hợp với điểm test, ưu đãi rủ bạn học lộ trình IELTS)
    { k: 'cap', e: 'Chăm sóc sau test qua Zalo', t: 'Sau buổi test: hỏi thăm, gửi kết quả', s: 'Tin sau bán gửi qua Zalo OA của trung tâm' },
    { k: 'zalo', gio: '19:30', ngay: 'T7 28/11/2026', chip: 'Sau buổi test đầu vào', d: 1500 },
    { k: 'zns', zns: { img: 'bai-test', sao: false, tieuDe: 'Anh Minh ơi, buổi test sáng nay anh thấy sao ạ?',
        noiDung: 'Hải Âu gửi anh kết quả và bước tiếp theo nha:',
        dong: ['**Điểm 4 kỹ năng** và nhận xét của giáo viên', 'Lộ trình gợi ý theo đúng điểm test', 'Còn băn khoăn, anh nhắn để giáo viên tư vấn thêm'],
        nut: 'Xem kết quả test' }, d: 5000 },
    { k: 'cap', e: 'Mời bước tiếp theo', t: 'Có lớp hợp điểm test: mời giữ chỗ', s: 'Học viên tự chọn lớp, không ép đăng ký' },
    { k: 'zstamp', gio: '10:00', ngay: 'T3 01/12/2026', chip: '3 ngày sau', d: 800 },
    { k: 'zns', zns: { img: 'lop-hoc', sao: false, tieuDe: 'Lớp tối 2-4-6 hợp với điểm test của anh ạ',
        noiDung: 'Lớp IELTS khai giảng **thứ Hai 07/12** còn **4 chỗ**. Anh bấm giữ chỗ, tư vấn viên gửi lịch học cho anh nha 📚',
        nut: 'Giữ chỗ lớp' }, d: 4400 },
    { k: 'cap', e: 'Ưu đãi học viên', t: 'Gửi ưu đãi, mời giới thiệu bạn bè', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'CN 03/01/2027', chip: 'Đầu năm mới', d: 800 },
    { k: 'zns', zns: { banner: ['tot-nghiep', 'lop-hoc', 'giao-vien', 'hoc-vien'], nhan: 'RỦ BẠN CÙNG HỌC · GIẢM 1 TRIỆU', mau: '#1D4ED8',
        tieuDe: 'Quà đầu năm cho học viên Hải Âu',
        noiDung: 'Rủ bạn bè cùng học **lộ trình IELTS**, cả hai được **giảm 1.000.000đ**. Mã **HAIAU-BANBE**, dùng đến hết 28/02/2027.',
        nut: 'Gửi cho bạn' }, d: 4800 },

    { k: 'tongket', d: 8500 },
    { k: 'outro', d: 5200 },
  ],
  // Slide tổng kết cuối video: lấy từ deck.chotLai của bài 1 IELTS & giao tiếp, theo mẫu thẩm mỹ viện (cột 3 là "Bám đuổi", 5 tin trong 7 ngày)
  tongKet: { tieuDe: 'Quy trình Preny AI giúp', em: 'tăng tỷ lệ chốt học viên', cot: [
    { ten: 'Khách hàng', icon: 'users', dong: ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến'] },
    { ten: 'AI Chatbot', icon: 'bot', dong: ['Phản hồi nhanh tức thì', 'Hỏi mục tiêu, hạn thi, trình độ', 'Không hứa bừa điểm đầu ra', 'Lấy SĐT, mời làm bài test miễn phí'] },
    { ten: 'Bám đuổi', icon: 'heart', dong: ['Gửi 5 tin nhắn trong 7 ngày: lộ trình, lớp học, học viên thật'] },
    { ten: 'Test & chốt', icon: 'calendar', dong: ['Test đầu vào online hoặc tại trung tâm', 'Tư vấn lộ trình, tư vấn viên chốt đăng ký'] },
    { ten: 'Mua lại', icon: 'refresh', dong: ['Mời học viên cũ học khóa tiếp, giới thiệu bạn qua FB và Zalo'] },
  ] },
  panels: {
    tag: { av: 'QM', ten: 'Trần Quang Minh', sub: 'Messenger · từ quảng cáo Lộ trình IELTS 6.5',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#ielts', 'qt hot'], ['#lophoctoi', 'qt hot'], ['#testmienphi', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#YeuNoiViet', 'qt']]]],
      im: 'Khách im từ 14:49, chưa để lại SĐT',
      rule: { lb: 'Bám đuổi theo thẻ #ielts', tieuDe: 'Bám đuổi bằng 5 tin ngắn',
              dong: [['15 phút', 'Ảnh lớp tối, lớp online'], ['1 ngày', 'Feedback học viên đi làm'], ['1 ngày', 'Giáo viên chữa Viết, Nói; cam kết văn bản'],
                     ['1 ngày', 'Quy trình: test trước, tư vấn sau'], ['2 ngày', 'Mời giữ suất test tại trung tâm']] },
      reply: 'Khách giữ suất test thứ Bảy · dừng bám đuổi' },
    sale: { tieuDe: 'Báo khách mới cho tư vấn viên', nguon: 'Quảng cáo Lộ trình IELTS 6.5 → Messenger', ten: 'Trần Quang Minh', sdt: '0912 486 753',
      nhuCau: 'IELTS 6.5 nộp hồ sơ thạc sĩ, chưa thi, yếu Nói, Viết', lich: 'Test tại trung tâm · 8:30 Thứ Bảy 28/11',
      the: [['#ielts', 'qt'], ['#YeuNoiViet', 'qt'], ['Đã cho SĐT', 'ok']],
      sale: { av: 'HG', ten: 'Tư vấn viên Hằng', sub: 'Đang trực · nhận khách tự động' }, ok: 'Tư vấn viên Hằng đã nhận khách, gọi ngay' },
    capi: { tieuDe: 'Gửi khách tiềm năng cho Facebook', event: 'Lead', nhan: 'SỰ KIỆN KHÁCH TIỀM NĂNG', giaTri: 'Có SĐT', pk: 'Lead · khách để lại SĐT',
      dong: [['Khách', 'Trần Quang Minh · đã để lại SĐT'], ['Nguồn khách', 'Quảng cáo Lộ trình IELTS 6.5 → Messenger'], ['Nhu cầu', 'Test đầu vào, lộ trình IELTS 6.5'], ['Event ID', 'HA2811-LEAD (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện Lead', khong: 'Không gửi Purchase khi học viên chưa đóng học phí.' },
  },
};
