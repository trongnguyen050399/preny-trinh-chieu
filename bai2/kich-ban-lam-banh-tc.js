/* Kịch bản video demo NGANG 16:9: KHÓA HỌC LÀM BÁNH (nhóm cân nhắc nhiều).
   Viết lại 18/11/2026 theo mạch cnn người dùng chốt (mẫu thẩm mỹ viện): 1 cảnh, không có bình luận, chỉ 1 khóa từ đầu tới cuối
   (Khóa bánh kem căn bản & hoa buttercream, lớp tối).
   Mạch: logo → quảng cáo → khách bấm "Gửi tin nhắn", hỏi học phí → AI gửi đúng ảnh quảng cáo + học phí → hỏi đã làm bánh chưa, học để làm gì
   → mời học thử miễn phí, xin tên + SĐT → khách im → gắn thẻ + bám đuổi 5 tin
   → khách giữ chỗ học thử → xin SĐT → báo tư vấn viên gọi ngay (không lên đơn tự động) → gửi Lead lên Facebook → Zalo 3 tin → tổng kết → logo.
   Không có tin nhắc trước giờ học (Preny chưa có tính năng này). Zalo chỉ gửi sau buổi học thử.
   Tên lớp, khóa học, học phí, khách, SĐT, feedback: dữ liệu minh họa lấy từ bài 1 (demo/kich-ban/lam-banh-tc.js). Ảnh: ảnh có sẵn của bài 1. */
window.VN_KB = {
  ten: 'Khóa học làm bánh video ngang',
  ketSub: 'Để AI tư vấn và lấy SĐT học viên cho lớp làm bánh của bạn',
  shop: { ten: 'Lớp Bánh Mây', av: 'BM', mau: '#B45309', sub: 'Thường trả lời ngay' },
  anh: {
    'banh-hoa': '../assets/img/u/1609663642184-513594444403_800x800.jpg',    // bánh kem hoa buttercream hồng
    'banh-hoa-2': '../assets/img/u/1788281802522-ca7f7c2e6c9b_800x800.jpg',  // bánh kem trắng hoa hồng
    'thanh-pham': '../assets/img/u/1604413191066-4dd20bedf486_800x800.jpg',  // bánh kem xanh thành phẩm
    'lop-hoc': '../assets/img/u/1758874960663-a534d512dd1d_800x800.jpg',     // lớp học bắt kem
    'bat-kem': '../assets/img/u/1786114352364-b354a97bfbce_800x800.jpg',     // thợ bánh bắt kem
    'giao-vien': '../assets/img/u/1709837167684-47d7ccf0ed89_800x800.jpg',   // giáo viên áo bếp
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= QUẢNG CÁO → MESSENGER (1 cảnh, không có bình luận, chỉ 1 khóa bánh kem căn bản từ đầu tới cuối) ================= */
    { k: 'canh', nhan: 'Khách từ quảng cáo → Messenger', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'banh-hoa', nhan: 'MESSENGER', tieuDe: 'Lớp bánh kem hoa · Lớp tối', nut: 'Gửi tin nhắn',
        text: 'Muốn tự tay làm bánh kem hoa buttercream? 🌸 Lớp tối thứ 3 – thứ 5 cho người đi làm tại Lớp Bánh Mây, học lại miễn phí 6 tháng. #banhkem #hoabuttercream #loptoi',
      }, d: 1500 },
    { k: 'cap', e: 'Quảng cáo Facebook', t: 'Khách bấm "Gửi tin nhắn" từ quảng cáo', s: 'Hỏi gì, AI trả lời ngay lập tức' },
    { k: 'tap', d: 1100 },
    { k: 'ms', ref: { loai: 'ad', img: 'banh-hoa', dong1: 'Hồng Ngọc đã trả lời một quảng cáo', dong2: 'Lớp bánh kem hoa · Lớp tối' }, gio: '14:47', d: 900 },
    { k: 'kh', text: 'Học làm bánh như này học phí bao nhiêu vậy em?' },
    { k: 'cap', e: 'Khách hỏi học phí', t: 'AI gửi đúng ảnh trên quảng cáo kèm học phí', s: 'Đúng khóa khách xem trên quảng cáo' },
    { k: 'ai', text: 'Dạ chào chị Ngọc, mẫu này học ở **Khóa bánh kem căn bản & hoa buttercream** 8 buổi, học phí **3.900.000đ** đã gồm nguyên liệu ạ.' },
    { k: 'ai', img: 'banh-hoa' },
    { k: 'cap', e: 'Hỏi đúng nhu cầu', t: 'Hỏi đã làm bánh chưa, học để làm gì', s: 'Gợi ý đúng lớp, đúng lịch của khách' },
    { k: 'ai', text: 'Chị đã làm bánh bao giờ chưa, học để làm tại nhà hay để bán ạ?' },
    { k: 'kh', text: 'c chưa làm bao giờ, muốn học để bán onl thêm. đi làm giờ hành chính nên chỉ học tối đc' },
    { k: 'cap', e: 'Mời học thử miễn phí', t: 'Mời học thử, xin tên và SĐT', s: 'Cho khách lý do để cho số: giữ chỗ' },
    { k: 'ai', text: 'Dạ người mới học từ đầu được ạ, buổi cuối còn dạy **tính giá vốn, chụp ảnh bánh** để bán online. Lớp tối có **buổi học thử miễn phí**, chị cho em xin **tên và SĐT** để giữ chỗ nha 😊' },

    // Khách im → màn hình phụ: gắn thẻ (hashtag quảng cáo + thẻ từ cuộc chat), bám đuổi 5 tin nuôi khách
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Preny tự gắn thẻ khóa học khách quan tâm', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi nuôi khách', t: '5 tin: 15 phút, rồi cách 1 ngày, 1 ngày, 1 ngày, 2 ngày', s: 'Thành phẩm, feedback, giáo viên, lộ trình, chỗ học thử' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Chị Ngọc ơi, em gửi chị vài hình **lớp học** và thành phẩm của học viên nha 🎂' },
    { k: 'ai', imgs: ['lop-hoc', 'banh-hoa-2', 'thanh-pham'] },
    { k: 'p', a: 'r1', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '15:04', ngay: 'T5 19/11/2026', d: 700 },
    { k: 'ai', text: 'Đây là chia sẻ của một chị học viên lớp tối bên em ạ 💬' },
    { k: 'ai', review: { av: 'MH', ten: 'Mai Hương', sub: 'đã đánh giá Lớp Bánh Mây', mau: '#F59E0B',
        text: 'Mình làm văn phòng, chưa cầm túi bắt kem bao giờ. Cô sửa tay từng lần bắt hoa, học xong 8 buổi giờ nhận làm bánh sinh nhật cho đồng nghiệp rồi.',
        note: 'Kết quả tùy mức luyện tập của từng người' } },
    { k: 'p', a: 'r2', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '15:04', ngay: 'T6 20/11/2026', d: 700 },
    { k: 'ai', img: 'giao-vien' },
    { k: 'ai', checks: { tieuDe: 'Học ở lớp khác học online chỗ này ạ:', dong: [
        'Giáo viên **sửa tay trực tiếp** từng lần bắt hoa', 'Nghỉ buổi nào được **học bù miễn phí**', 'Chưa vững được **học lại miễn phí 6 tháng**'] } },
    { k: 'p', a: 'r3', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '15:04', ngay: 'T7 21/11/2026', d: 700 },
    { k: 'ai', text: 'Lộ trình 8 buổi là **cốt bánh → đánh kem → bắt hoa → tính giá vốn, chụp ảnh bán online** ạ 😊' },
    { k: 'ai', img: 'bat-kem' },
    { k: 'p', a: 'r4', d: 800 },
    { k: 'time', nhan: '2 ngày sau', gio: '15:04', ngay: 'T2 23/11/2026', d: 700 },
    { k: 'ai', text: 'Lớp tối khai giảng **thứ Ba 24/11** còn **3 chỗ**, có buổi **học thử miễn phí**. Chị muốn em giữ một chỗ không ạ?' },
    { k: 'p', a: 'r5', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 5, khách giữ chỗ học thử', s: 'AI giữ chỗ, xin SĐT ngay' },
    { k: 'kh', text: 'Tối mai c đi học thử được, giữ giúp c 1 chỗ nha' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'ai', text: 'Dạ được ạ, lớp học lúc **18h30 thứ Ba 24/11** nha chị. Chị cho em xin **tên và SĐT** để giữ chỗ ạ 🎂' },
    { k: 'cap', e: 'Lấy SĐT', t: 'Khách để lại tên, SĐT, giữ chỗ học thử', s: 'Đây là lúc AI chốt: chuyển khách cho người thật' },
    { k: 'kh', text: 'Ngọc, 0912 345 678 nha e' },
    { k: 'ai', text: 'Dạ em giữ chỗ học thử **18h30 thứ Ba 24/11** cho chị Ngọc rồi ạ. Tư vấn viên sẽ gọi chị gửi lịch học liền nha 🎂', d: 1800 },

    // Có SĐT → màn hình phụ: báo tư vấn viên vào gọi ngay (không lên đơn tự động) → gửi Lead lên Facebook
    { k: 'cap', e: 'Báo ngay cho tư vấn viên', t: 'Có SĐT: thông báo tư vấn viên gọi ngay', s: 'Không lên đơn tự động: người thật tư vấn, chốt học phí' },
    { k: 'panel', v: 'sale', d: 800 },
    { k: 'p', a: 's1', d: 700 }, { k: 'p', a: 's2', d: 500 }, { k: 'p', a: 's3', d: 500 }, { k: 'p', a: 's4', d: 600 },
    { k: 'p', a: 's5', d: 1600 }, { k: 'p', a: 's6', d: 2600 },
    { k: 'cap', e: 'Gửi Lead về Facebook', t: 'Khách để lại SĐT: gửi sự kiện Lead lên Facebook', s: 'Quảng cáo tìm thêm khách giống khách thật' },
    { k: 'panel', v: 'capi', d: 900 },
    { k: 'p', a: 'flow', d: 1500 }, { k: 'p', a: 'event', d: 1300 }, { k: 'p', a: 'ok', d: 3200 },
    { k: 'panel', v: null, d: 600 },

    // Sau học thử qua Zalo: 3 tin (hỏi thăm + lưu ý luyện tập, mời đăng ký khóa 8 buổi, ưu đãi rủ bạn học cùng khóa)
    { k: 'cap', e: 'Chăm sóc qua Zalo', t: 'Sau buổi học thử: hỏi thăm, dặn luyện tập', s: 'Tin gửi qua Zalo OA của lớp' },
    { k: 'zalo', gio: '21:15', ngay: 'T3 24/11/2026', chip: 'Sau buổi học thử', d: 1500 },
    { k: 'zns', zns: { img: 'banh-hoa', sao: false, tieuDe: 'Chị Ngọc ơi, buổi học thử tối nay thấy sao ạ?',
        noiDung: 'Lớp Bánh Mây gửi chị vài lưu ý nha:',
        dong: ['Bánh mang về để ngăn mát, dùng trong 2 ngày', 'Tập bắt hoa với túi kem 10 phút mỗi ngày', 'Chỗ nào chưa vững, chị nhắn để giáo viên chỉ thêm'],
        nut: 'Nhắn cho giáo viên' }, d: 5000 },
    { k: 'cap', e: 'Mời bước tiếp theo', t: 'Sau học thử: mời đăng ký khóa 8 buổi', s: 'Học phí đóng được 2 lần' },
    { k: 'zstamp', gio: '10:00', ngay: 'T4 25/11/2026', chip: '1 ngày sau', d: 800 },
    { k: 'zns', zns: { img: 'banh-hoa-2', sao: false, tieuDe: 'Mời chị học tiếp khóa bánh kem căn bản',
        noiDung: 'Lớp tối chị học thử hôm qua còn **2 chỗ**, học phí **3.900.000đ**, đóng được 2 lần. Chị bấm đăng ký, em giữ chỗ cho chị nha 🎂',
        nut: 'Đăng ký khóa học' }, d: 4400 },
    { k: 'cap', e: 'Ưu đãi học viên', t: 'Gửi ưu đãi, mời rủ bạn học cùng', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'CN 27/12/2026', chip: 'Sau khi học xong', d: 800 },
    { k: 'zns', zns: { banner: ['banh-hoa-2', 'thanh-pham', 'bat-kem', 'giao-vien'], nhan: 'RỦ BẠN HỌC CÙNG · 300K', mau: '#D97706',
        tieuDe: 'Quà cho học viên lớp bánh kem căn bản',
        noiDung: 'Chị rủ bạn học **lớp bánh kem căn bản** khai giảng tháng 1, bạn được giảm **300.000đ**, chị được tặng **300.000đ**. Mã **BANHMAY300**, dùng đến hết 31/01/2027.',
        nut: 'Gửi cho bạn' }, d: 4800 },

    { k: 'tongket', d: 8500 },
    { k: 'outro', d: 5200 },
  ],
  // Slide tổng kết cuối video: theo deck.chotLai của bài 1; cột 3 là "Bám đuổi" (5 tin trong 7 ngày)
  tongKet: { tieuDe: 'Quy trình Preny AI giúp', em: 'tăng tỷ lệ chốt học viên', cot: [
    { ten: 'Khách hàng', icon: 'users', dong: ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến'] },
    { ten: 'AI Chatbot', icon: 'bot', dong: ['Phản hồi nhanh tức thì', 'Tư vấn đúng khóa, lịch học', 'Xử lý băn khoăn: học phí, học bù', 'Lấy SĐT học viên'] },
    { ten: 'Bám đuổi', icon: 'heart', dong: ['Gửi 5 tin nhắn trong 7 ngày: video lớp học, thành phẩm học viên, lịch khai giảng', 'Nuôi học viên để trung tâm nằm đầu danh sách'] },
    { ten: 'Học thử', icon: 'calendar', dong: ['Hẹn học thử, tham quan lớp', 'Tư vấn viên chốt học phí'] },
    { ten: 'Mua lại', icon: 'refresh', dong: ['Mời học viên cũ học khóa nâng cao qua FB và Zalo'] },
  ] },
  panels: {
    tag: { av: 'HN', ten: 'Nguyễn Hồng Ngọc', sub: 'Messenger · từ quảng cáo Lớp bánh kem hoa',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#banhkem', 'qt hot'], ['#hoabuttercream', 'qt hot'], ['#loptoi', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#BanOnline', 'qt']]]],
      im: 'Khách im từ 14:49, chưa để lại SĐT',
      rule: { lb: 'Bám đuổi theo thẻ #banhkem', tieuDe: 'Nuôi khách bằng 5 tin ngắn',
              dong: [['15 phút', 'Ảnh lớp học, thành phẩm học viên'], ['1 ngày', 'Feedback học viên lớp tối'], ['1 ngày', 'Giáo viên sửa tay, học lại 6 tháng'],
                     ['1 ngày', 'Lộ trình 8 buổi, có dạy bán online'], ['2 ngày', 'Mời giữ chỗ học thử lớp 24/11']] },
      reply: 'Khách giữ chỗ học thử 24/11 · dừng bám đuổi' },
    sale: { tieuDe: 'Báo khách mới cho tư vấn viên', nguon: 'Quảng cáo Lớp bánh kem hoa → Messenger', ten: 'Nguyễn Hồng Ngọc', sdt: '0912 345 678',
      nhuCau: 'Chưa làm bánh bao giờ, học lớp tối để bán online thêm', lich: 'Học thử miễn phí · 18:30 Thứ Ba 24/11',
      the: [['#banhkem', 'qt'], ['#BanOnline', 'qt'], ['Đã cho SĐT', 'ok']],
      sale: { av: 'T', ten: 'Tư vấn viên Thảo', sub: 'Đang trực · nhận khách tự động' }, ok: 'Tư vấn viên Thảo đã nhận khách, gọi ngay' },
    capi: { tieuDe: 'Gửi khách tiềm năng cho Facebook', event: 'Lead', nhan: 'SỰ KIỆN KHÁCH TIỀM NĂNG', giaTri: 'Có SĐT', pk: 'Lead · khách để lại SĐT',
      dong: [['Khách', 'Nguyễn Hồng Ngọc · đã để lại SĐT'], ['Nguồn khách', 'Quảng cáo Lớp bánh kem hoa → Messenger'], ['Nhu cầu', 'Học thử lớp tối, khóa bánh kem'], ['Event ID', 'BM2411-LEAD (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện Lead', khong: 'Không gửi Purchase khi học viên chưa đóng học phí.' },
  },
};
