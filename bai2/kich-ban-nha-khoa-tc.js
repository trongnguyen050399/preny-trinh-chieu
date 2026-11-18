/* Kịch bản video demo NGANG 16:9: NHA KHOA (nhóm cân nhắc nhiều), làm 18/11/2026 theo mạch mẫu thẩm mỹ viện đã duyệt.
   Mạch: logo → cảnh 1 bình luận hỏi giá cạo vôi + hỏi "cạo vôi có đỡ không" → AI trả lời cả 2 bằng 1 câu chung → inbox: giá, ưu đãi,
   ảnh thật, hỏi tình trạng → mời khám, chụp phim, cạo vôi miễn phí, xin tên + SĐT → báo tư vấn viên → cảnh 2 quảng cáo implant
   → khách hỏi giá → AI gửi đúng ảnh quảng cáo + giá tham khảo → khách chụp dịch vụ khác "Này thì sao" → AI nhận ra bọc răng sứ
   → xin SĐT → khách im → gắn thẻ + bám đuổi 5 tin → khách hẹn khám → xin SĐT → báo tư vấn viên gọi ngay → gửi Lead lên Facebook
   → Zalo 3 tin → tổng kết → logo.
   Không lên đơn tự động: bác sĩ khám, chụp phim rồi mới chốt kế hoạch điều trị. AI không chẩn đoán, không báo giá chốt khi chưa
   chụp phim, chỉ nói giá tham khảo "từ…". Không có tin nhắc trước giờ hẹn (Preny chưa có tính năng này).
   Nội dung lấy từ bài 1 (demo/kich-ban/nha-khoa-tc.js): tên nha khoa, giá, khách, SĐT, ưu đãi là dữ liệu minh họa.
   Ảnh: Unsplash có sẵn trong máy (ảnh thật, không phải phòng khám của khách). Không dùng ảnh giấy phép, chứng chỉ giả:
   tin "giấy tờ" là ảnh bác sĩ + thẻ liệt kê. */
window.VN_KB = {
  ten: 'Nha khoa video ngang',
  ketSub: 'Để AI tư vấn và lấy SĐT khách cho nha khoa của bạn',
  shop: { ten: 'Nha Khoa Ngà', av: 'NG', mau: '#0E7490', sub: 'Thường trả lời ngay' },
  anh: {
    'nha-si': '../assets/img/u/1606811841689-23dfddce3e95_800x800.jpg',     // bác sĩ chỉ phim cho bệnh nhân
    'phong-kham': '../assets/img/u/1629909613654-28e377c37b09_800x800.jpg', // phòng khám, ghế nha
    'nu-cuoi': '../assets/img/u/1769559893692-c6d0623bf8e4_800x800.jpg',    // nụ cười răng trắng
    'x-quang': '../assets/img/u/1777445374290-eedda5be8e5b_800x800.jpg',    // phim X-quang toàn hàm
    'nieng-rang': '../assets/img/u/1656514894252-fb336a3ad6a6_800x800.jpg', // niềng răng mắc cài
    'implant': '../assets/img/u/1593022356769-11f762e25ed9_800x800.jpg',    // mô hình trụ implant
    'cao-voi': '../assets/img/u/1606811971618-4486d14f3f99_800x800.jpg',    // khám, cạo vôi
    'nu-cuoi-2': '../assets/img/u/1654373535457-383a0a4d00f9_800x800.jpg',  // nụ cười răng sứ
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= CẢNH 1 · BÀI VIẾT → BÌNH LUẬN → INBOX ================= */
    { k: 'canh', nhan: 'Tình huống 1 · Bình luận hỏi giá → Inbox', gio: '19:38' },
    { k: 'fb', post: {
        gio: '3 giờ', img: 'cao-voi', likes: '1,8K', soCmt: '96 bình luận',
        text: 'Răng ê buốt, hay chảy máu chân răng? 🦷 Khám, chụp phim MIỄN PHÍ, tặng cạo vôi răng cho khách đặt lịch trước tại Nha Khoa Ngà. #caovoi #khamrang',
      }, d: 1600 },
    { k: 'cap', e: 'Bình luận hỏi giá', t: 'Khách hỏi giá ngay dưới bài viết', s: 'Khách khác hỏi "cạo vôi có đỡ không"' },
    { k: 'cmt', i: 0, ten: 'Minh Thư', av: 'MT', text: 'Cạo vôi giá sao vậy nha khoa?' },
    { k: 'cmt', i: 1, ten: 'Quốc Huy', av: 'QH', text: 'Răng ê buốt cạo vôi có đỡ không ạ?' },
    { k: 'cap', e: 'Trả lời cả 2 bình luận', t: 'Trả lời ngắn gọn, mời khách vào inbox', s: 'Không tư vấn công khai dưới bài' },
    { k: 'rep', i: 0, text: 'Mình check ib nha 💬' },
    { k: 'rep', i: 1, text: 'Mình check ib nha 💬' },

    { k: 'ms', ref: { loai: 'cmt', img: 'cao-voi', dong1: 'Bạn đã bình luận về bài viết của Nha Khoa Ngà', dong2: '"Cạo vôi giá sao vậy nha khoa?"' }, gio: '19:40' },
    { k: 'cap', e: 'Tự động báo giá', t: 'Inbox trước: giá, ưu đãi, ảnh thật', s: 'Viết ngắn gọn, tự nhiên như người tư vấn' },
    { k: 'ai', text: 'Dạ chào chị Thư, cạo vôi bên em giá **300.000đ** ạ. Tuần này hẹn trước được **khám, chụp phim, cạo vôi miễn phí** luôn.' },
    { k: 'ai', imgs: ['cao-voi', 'phong-kham', 'nu-cuoi'] },
    { k: 'cap', e: 'Hỏi đúng tình trạng', t: 'Hỏi ê buốt hay chảy máu chân răng', s: 'Bác sĩ khám rồi mới tư vấn chính xác' },
    { k: 'ai', text: 'Chị có hay ê buốt hay chảy máu chân răng không ạ? Bác sĩ khám rồi mới tư vấn đúng được.' },
    { k: 'kh', text: 'c hay chảy máu chân răng lúc đánh răng, uống đá cũng ê. lâu r chưa cạo vôi' },
    { k: 'cap', e: 'Lấy SĐT', t: 'Mời khám miễn phí, xin tên và SĐT', s: 'Không chẩn đoán qua tin nhắn' },
    { k: 'ai', text: 'Dạ chảy máu, ê buốt có nhiều nguyên nhân, bác sĩ phải khám mới biết ạ. Chị qua **khám, chụp phim, cạo vôi miễn phí** nha, chưa cần cọc gì. Chị cho em xin **tên và SĐT** để giữ lịch ạ 😊' },
    { k: 'kh', text: 'Thư, 0868 413 920. chiều T7 c rảnh' },
    { k: 'ai', text: 'Dạ em giữ lịch **chiều thứ Bảy 21/11** cho chị Thư rồi ạ. Lát tư vấn viên gọi chị chọn giờ nha 🦷', d: 1800 },
    { k: 'cap', e: 'Báo ngay tư vấn viên', t: 'Có SĐT: tư vấn viên nhận khách, gọi ngay', s: 'AI chuyển đủ thông tin, không phải hỏi lại' },
    { k: 'panel', v: 'sale1', d: 800 },
    { k: 'p', a: 's1', d: 700 }, { k: 'p', a: 's2', d: 500 }, { k: 'p', a: 's3', d: 500 }, { k: 'p', a: 's4', d: 600 },
    { k: 'p', a: 's5', d: 1500 }, { k: 'p', a: 's6', d: 2600 },
    { k: 'panel', v: null, d: 500 },

    /* ================= CẢNH 2 · QUẢNG CÁO → MESSENGER ================= */
    { k: 'canh', nhan: 'Tình huống 2 · Quảng cáo → Messenger', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'implant', nhan: 'MESSENGER', tieuDe: 'Trồng răng implant · Khám miễn phí', nut: 'Gửi tin nhắn',
        text: 'Mất răng lâu năm, nhai lệch một bên? 🦷 Trồng răng implant tại Nha Khoa Ngà: khám, chụp phim miễn phí, báo giá rõ trước khi làm. #implant #trongrang #khammienphi',
      }, d: 1500 },
    { k: 'cap', e: 'Quảng cáo Facebook', t: 'Khách bấm "Gửi tin nhắn" từ quảng cáo', s: 'Hỏi gì, AI trả lời ngay lập tức' },
    { k: 'tap', d: 1100 },
    { k: 'ms', ref: { loai: 'ad', img: 'implant', dong1: 'Bình Nguyễn đã trả lời một quảng cáo', dong2: 'Trồng răng implant · Khám miễn phí' }, gio: '14:47', d: 900 },
    { k: 'kh', text: 'Trồng implant giá bao nhiêu vậy em?' },
    { k: 'cap', e: 'Khách hỏi giá', t: 'AI gửi đúng ảnh trên quảng cáo kèm giá', s: 'Giá tham khảo, chụp phim mới báo chính xác' },
    { k: 'ai', text: 'Dạ chào anh Bình, trồng implant giá tham khảo **từ 13.500.000đ/răng**, gồm trụ và mão sứ ạ.' },
    { k: 'ai', img: 'implant' },
    { k: 'ai', text: 'Anh mất răng lâu chưa ạ? Bác sĩ chụp phim xem xương hàm rồi mới báo **giá chính xác** được.' },
    { k: 'cap', e: 'Không hỏi lại khách', t: 'Khách chụp dịch vụ khác hỏi "Này thì sao"', s: 'Chỉ một câu cộc lốc, không ghi tên dịch vụ' },
    { k: 'kh', shot: { img: 'nu-cuoi-2', cap: 'Bọc răng sứ, nụ cười tự nhiên ✨ Nha Khoa Ngà' } },
    { k: 'kh', text: 'Này thì sao' },
    { k: 'cap', e: 'Nhận diện dịch vụ từ ảnh', t: 'Đúng dịch vụ. Đúng giá tham khảo.', s: 'AI đọc ảnh khách gửi, khớp với bảng dịch vụ của nha khoa' },
    { k: 'ai', text: 'Dạ đây là **Bọc răng sứ**, giá **từ 3.500.000đ/răng** ạ. Bọc mấy răng thì bác sĩ khám rồi mới tư vấn được.' },
    { k: 'ai', text: 'Anh cho em xin **tên và SĐT** để giữ lịch khám, chụp phim miễn phí nha 😊' },

    // Khách im → màn hình phụ: gắn thẻ (hashtag quảng cáo + thẻ từ cuộc chat), bám đuổi 5 tin nuôi khách
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Preny tự gắn thẻ dịch vụ khách quan tâm', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi nuôi khách', t: '5 tin: 15 phút, rồi cách 1 ngày, 1 ngày, 1 ngày, 2 ngày', s: 'Phòng khám, feedback, bác sĩ, quy trình, ưu đãi' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Anh Bình ơi, em gửi anh vài hình **phòng khám** bên em nha 🦷' },
    { k: 'ai', imgs: ['phong-kham', 'cao-voi'] },
    { k: 'p', a: 'r1', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '15:04', ngay: 'T5 19/11/2026', d: 700 },
    { k: 'ai', text: 'Đây là chia sẻ của một anh khách trồng implant bên em ạ 💬' },
    { k: 'ai', review: { av: 'HT', ten: 'Hoàng Tùng', sub: 'đã đánh giá Nha Khoa Ngà', mau: '#38BDF8',
        text: 'Mình mất răng hàm 3 năm, bác sĩ chụp phim, giải thích kỹ rồi mới báo giá, không thu thêm ngoài phiếu. Gây tê nên cắm trụ nhẹ hơn mình nghĩ.',
        note: 'Kết quả tùy tình trạng răng, xương hàm từng người' } },
    { k: 'p', a: 'r2', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '15:04', ngay: 'T6 20/11/2026', d: 700 },
    { k: 'ai', img: 'nha-si' },
    { k: 'ai', checks: { tieuDe: 'Bên em có đủ giấy tờ để anh yên tâm ạ:', dong: [
        'Giấy phép hoạt động do **Sở Y tế** cấp', '**Bác sĩ Răng Hàm Mặt** khám, điều trị trực tiếp', 'Ghi rõ **loại trụ, bảo hành** trong phiếu điều trị'] } },
    { k: 'p', a: 'r3', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '15:04', ngay: 'T7 21/11/2026', d: 700 },
    { k: 'ai', text: 'Quy trình bên em là **khám → chụp phim → báo giá → anh đồng ý mới làm**, không thu thêm ngoài phiếu ạ 😊' },
    { k: 'ai', img: 'x-quang' },
    { k: 'p', a: 'r4', d: 800 },
    { k: 'time', nhan: '2 ngày sau', gio: '15:04', ngay: 'T2 23/11/2026', d: 700 },
    { k: 'ai', text: 'Tháng này bên em **giảm 2.000.000đ mỗi trụ implant**, thứ Bảy còn vài suất **khám, chụp phim miễn phí**. Anh muốn em giữ một suất không ạ?' },
    { k: 'p', a: 'r5', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 5, khách hẹn khám', s: 'AI giữ lịch, xin SĐT ngay' },
    { k: 'kh', text: 'Thứ 7 này a qua được, giữ giúp a 1 suất nha' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'ai', text: 'Dạ được ạ, **thứ Bảy 28/11** còn khung **9h** và **14h**. Anh cho em xin **tên và SĐT** để giữ lịch nha 🦷' },
    { k: 'cap', e: 'Lấy SĐT', t: 'Khách để lại tên, SĐT, giờ hẹn', s: 'Đây là lúc AI chốt: chuyển khách cho người thật' },
    { k: 'kh', text: 'Bình, 0914 357 286, 9h nha e' },
    { k: 'ai', text: 'Dạ em giữ lịch khám, chụp phim **9h thứ Bảy 28/11** cho anh Bình rồi ạ. Tư vấn viên sẽ gọi anh xác nhận liền nha 🦷', d: 1800 },

    // Có SĐT → màn hình phụ: báo tư vấn viên vào gọi ngay (không lên đơn tự động) → gửi Lead lên Facebook
    { k: 'cap', e: 'Báo ngay tư vấn viên', t: 'Có SĐT: báo tư vấn viên vào gọi ngay', s: 'Không lên đơn tự động: bác sĩ khám rồi mới chốt điều trị' },
    { k: 'panel', v: 'sale', d: 800 },
    { k: 'p', a: 's1', d: 700 }, { k: 'p', a: 's2', d: 500 }, { k: 'p', a: 's3', d: 500 }, { k: 'p', a: 's4', d: 600 },
    { k: 'p', a: 's5', d: 1600 }, { k: 'p', a: 's6', d: 2600 },
    { k: 'cap', e: 'Gửi Lead về Facebook', t: 'Khách để lại SĐT: gửi sự kiện Lead lên Facebook', s: 'Quảng cáo tìm thêm khách giống khách thật' },
    { k: 'panel', v: 'capi', d: 900 },
    { k: 'p', a: 'flow', d: 1500 }, { k: 'p', a: 'event', d: 1300 }, { k: 'p', a: 'ok', d: 3200 },
    { k: 'panel', v: null, d: 600 },

    // Sau khám qua Zalo: 3 tin (hỏi thăm + lưu ý sau cạo vôi, mời đặt lịch bước tiếp theo, ưu đãi khách quen)
    { k: 'cap', e: 'Chăm sóc sau khám qua Zalo', t: 'Sau buổi khám: hỏi thăm, dặn chăm sóc răng', s: 'Tin sau bán gửi qua Zalo OA của nha khoa' },
    { k: 'zalo', gio: '19:30', ngay: 'T7 28/11/2026', chip: 'Sau buổi khám, cạo vôi', d: 1500 },
    { k: 'zns', zns: { img: 'nu-cuoi', sao: false, tieuDe: 'Anh Bình ơi, răng sau buổi cạo vôi thấy sao rồi ạ?',
        noiDung: 'Nha Khoa Ngà gửi anh vài lưu ý mấy ngày đầu nha:',
        dong: ['Tránh đồ quá nóng, quá lạnh 1–2 ngày đầu', 'Chải răng lông mềm, dùng thêm chỉ nha khoa', 'Răng có gì lạ, anh nhắn ngay để bác sĩ hỗ trợ'],
        nut: 'Nhắn cho bác sĩ' }, d: 5000 },
    { k: 'cap', e: 'Mời bước tiếp theo', t: 'Có kế hoạch implant: mời khách đặt lịch', s: 'Khách tự chọn ngày, không ép làm' },
    { k: 'zstamp', gio: '10:00', ngay: 'T7 05/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: { img: 'implant', sao: false, tieuDe: 'Anh Bình muốn đặt lịch cắm trụ implant chưa ạ?',
        noiDung: 'Theo kế hoạch bác sĩ tư vấn hôm khám, anh sẵn sàng lúc nào thì bấm đặt lịch, em giữ giờ đẹp cho anh nha 🦷',
        nut: 'Đặt lịch cắm trụ' }, d: 4400 },
    { k: 'cap', e: 'Ưu đãi khách quen', t: 'Gửi ưu đãi, mời cạo vôi định kỳ', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'CN 03/01/2027', chip: 'Đầu năm mới', d: 800 },
    { k: 'zns', zns: { banner: ['nu-cuoi-2', 'phong-kham', 'nu-cuoi', 'nieng-rang'], nhan: 'ƯU ĐÃI KHÁCH QUEN · GIẢM 10%', mau: '#0E7490',
        tieuDe: 'Quà đầu năm cho khách của Nha Khoa Ngà',
        noiDung: 'Tặng **cạo vôi miễn phí** và **giảm 10%** dịch vụ cho lần khám tiếp theo. Mã **NHAKHOANGA6T**, dùng đến hết 31/05/2027.',
        nut: 'Đặt lịch ngay' }, d: 4800 },

    { k: 'tongket', d: 8500 },
    { k: 'outro', d: 5200 },
  ],
  // Slide tổng kết cuối video: lấy từ deck.chotLai của bài 1 nha khoa, theo mẫu thẩm mỹ viện (cột 3 là "Bám đuổi", 5 tin trong 7 ngày)
  tongKet: { tieuDe: 'Quy trình Preny AI giúp', em: 'tăng tỷ lệ chốt lịch khám', cot: [
    { ten: 'Khách hàng', icon: 'users', dong: ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến'] },
    { ten: 'AI Chatbot', icon: 'bot', dong: ['Phản hồi nhanh tức thì', 'Tư vấn đúng, không báo giá bừa', 'Xử lý băn khoăn: sợ đau, giá', 'Lấy SĐT, mời khám miễn phí'] },
    { ten: 'Bám đuổi', icon: 'heart', dong: ['Gửi 5 tin nhắn trong 7 ngày: bác sĩ, ca điều trị, phòng khám thật', 'Nuôi khách để nha khoa nằm đầu danh sách'] },
    { ten: 'Khám tại chỗ', icon: 'calendar', dong: ['Khám, chụp phim, cạo vôi miễn phí', 'Bác sĩ chốt kế hoạch điều trị'] },
    { ten: 'Mua lại', icon: 'refresh', dong: ['Mời khách cũ cạo vôi định kỳ, làm thêm dịch vụ qua FB và Zalo'] },
  ] },
  panels: {
    sale1: { kieu: 'sale', tieuDe: 'Báo khách mới cho tư vấn viên', nguon: 'Bình luận bài viết → Messenger', ten: 'Ngô Minh Thư', sdt: '0868 413 920',
      nhuCau: 'Chảy máu chân răng, ê buốt, lâu chưa cạo vôi', lich: 'Khám, chụp phim, cạo vôi miễn phí · chiều Thứ Bảy 21/11',
      the: [['#caovoi', 'qt'], ['Bình luận bài viết', 'ng'], ['Đã cho SĐT', 'ok']],
      sale: { av: 'HN', ten: 'Tư vấn viên Hồng Nhung', sub: 'Đang trực · nhận khách tự động' }, ok: 'Tư vấn viên Hồng Nhung đã nhận khách, gọi ngay' },
    tag: { av: 'VB', ten: 'Nguyễn Văn Bình', sub: 'Messenger · từ quảng cáo Trồng răng implant',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#implant', 'qt hot'], ['#trongrang', 'qt hot'], ['#khammienphi', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#BocSu', 'qt']]]],
      im: 'Khách im từ 14:49, chưa để lại SĐT',
      rule: { lb: 'Bám đuổi theo thẻ #implant', tieuDe: 'Nuôi khách bằng 5 tin ngắn',
              dong: [['15 phút', 'Ảnh phòng khám nha khoa'], ['1 ngày', 'Feedback khách trồng implant'], ['1 ngày', 'Bác sĩ, giấy phép, phiếu bảo hành'],
                     ['1 ngày', 'Quy trình: chụp phim rồi mới báo giá'], ['2 ngày', 'Ưu đãi tháng, mời giữ suất khám']] },
      reply: 'Khách giữ suất khám thứ Bảy · dừng bám đuổi' },
    sale: { tieuDe: 'Báo khách mới cho tư vấn viên', nguon: 'Quảng cáo Trồng răng implant → Messenger', ten: 'Nguyễn Văn Bình', sdt: '0914 357 286',
      nhuCau: 'Trồng implant, quan tâm thêm bọc răng sứ', lich: 'Khám, chụp phim miễn phí · 9:00 Thứ Bảy 28/11',
      the: [['#implant', 'qt'], ['#BocSu', 'qt'], ['Đã cho SĐT', 'ok']],
      sale: { av: 'TR', ten: 'Tư vấn viên Trang', sub: 'Đang trực · nhận khách tự động' }, ok: 'Tư vấn viên Trang đã nhận khách, gọi ngay' },
    capi: { tieuDe: 'Gửi khách tiềm năng cho Facebook', event: 'Lead', nhan: 'SỰ KIỆN KHÁCH TIỀM NĂNG', giaTri: 'Có SĐT', pk: 'Lead · khách để lại SĐT',
      dong: [['Khách', 'Nguyễn Văn Bình · đã để lại SĐT'], ['Nguồn khách', 'Quảng cáo Trồng răng implant → Messenger'], ['Nhu cầu', 'Khám, chụp phim, trồng implant'], ['Event ID', 'NG2311-LEAD (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện Lead', khong: 'Không gửi Purchase khi khách chưa điều trị.' },
  },
};
