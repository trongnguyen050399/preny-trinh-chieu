/* Kịch bản video demo NGANG 16:9: KHÓA HỌC BOXING (nhóm cân nhắc nhiều), làm 19/11/2026 theo người dùng:
   "làm ngành khóa học boxing cân nhắc nhiều, pipeline mời khách tới tham quan phòng tập và tập thử để sale chốt".
   Mạch cnn người dùng chốt 18/11/2026 (mẫu thẩm mỹ viện): 1 cảnh, KHÔNG có bình luận, chỉ 1 khóa (Boxing cơ bản 3 tháng)
   từ đầu tới cuối, không có đoạn khách chụp sản phẩm khác hỏi "Này thì sao".
   Mạch: logo → quảng cáo tập thử boxing → khách bấm "Gửi tin nhắn", hỏi giá → AI gửi đúng ảnh quảng cáo + học phí
   → hỏi mục tiêu, đã tập chưa → 82kg, dân văn phòng, chưa tập, sợ bị đánh đau, 7h tối tan làm, so gym 500k → AI: tháng đầu
   chưa đấu đối kháng, lớp tối kịp giờ, không so với gym, mời tham quan + tập thử miễn phí, xin tên + SĐT → khách im
   → gắn thẻ + bám đuổi 5 tin → khách hẹn tập thử → xin SĐT → báo sale gọi ngay → gửi Lead lên Facebook → Zalo 3 tin
   → tổng kết → logo.
   Không lên đơn tự động: khách tập thử rồi sale mới chốt khóa. Không có tin nhắc trước giờ tập thử
   (Preny chưa có tính năng này). AI không hứa giảm bao nhiêu kg, feedback có ghi "Kết quả tùy thể trạng…".
   Nội dung lấy từ bài 1 (demo/kich-ban/boxing-tc.js): phòng tập, giá, khách, SĐT, feedback, ưu đãi là dữ liệu minh họa.
   Ảnh: Unsplash có sẵn trong máy (ảnh thật, không phải phòng tập của khách). Không dùng ảnh chứng chỉ giả:
   tin "HLV" là ảnh HLV cầm đích + thẻ liệt kê. */
window.VN_KB = {
  ten: 'Khóa học boxing video ngang',
  ketSub: 'Để AI tư vấn và mời khách tới phòng tập của bạn tập thử',
  shop: { ten: 'Bản Lĩnh Boxing Club', av: 'BL', mau: '#DC2626', sub: 'Thường trả lời ngay' },
  anh: {
    'hlv-kem': '../assets/img/u/1517438322307-e67111335449_800x800.jpg',      // HLV cầm đích cho học viên (ảnh quảng cáo)
    'phong-tap': '../assets/img/u/1716307046875-4c4ba2f43cab_800x800.jpg',    // phòng tập có bao cát và võ đài
    'bao-cat-hang': '../assets/img/u/1716306886418-f84f6d4c2f3a_800x800.jpg', // hàng bao cát treo
    'hlv-nu': '../assets/img/u/1583187856683-dddad0e87f79_800x800.jpg',       // HLV cầm đích, học viên nữ
    'nghi-tap': '../assets/img/u/1787651038594-2bf7bf5ec423_800x800.jpg',     // học viên nghỉ giữa buổi
    'gian-co': '../assets/img/u/1593431763017-c689a61b729a_800x800.jpg',      // giãn cơ sau buổi tập
    'bang-quan': '../assets/img/u/1770734265339-d2d3005cc267_800x800.jpg',    // tay quấn băng
    'tap-bong': '../assets/img/u/1606335543042-57c525922933_800x800.jpg',     // học viên tập đấm
    'dam-bao': '../assets/img/u/1773289338573-2efcc69a2dfb_800x800.jpg',      // đấm bao cát
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= QUẢNG CÁO → MESSENGER (1 cảnh, không có bình luận, chỉ khóa Boxing cơ bản) ================= */
    { k: 'canh', nhan: 'Khách từ quảng cáo → Messenger', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'hlv-kem', nhan: 'MESSENGER', tieuDe: 'Boxing cơ bản · Tập thử miễn phí', nut: 'Gửi tin nhắn',
        text: 'Ngồi văn phòng cả ngày, muốn khỏe lên và biết tự vệ? 🥊 Khóa Boxing cơ bản tại Bản Lĩnh Boxing Club: lớp tối 18h30, 19h30, tháng đầu chưa đấu đối kháng, mời bạn tới tham quan và tập thử 1 buổi miễn phí. #boxing #boxingcoban #tapthumienphi',
      }, d: 1500 },
    { k: 'cap', e: 'Quảng cáo Facebook', t: 'Khách bấm "Gửi tin nhắn" từ quảng cáo', s: 'Hỏi gì, AI trả lời ngay lập tức' },
    { k: 'tap', d: 1100 },
    { k: 'ms', ref: { loai: 'ad', img: 'hlv-kem', dong1: 'Khoa Trần đã trả lời một quảng cáo', dong2: 'Boxing cơ bản · Tập thử miễn phí' }, gio: '14:47', d: 900 },
    { k: 'kh', text: 'Học boxing ở đây giá sao em?' },
    { k: 'cap', e: 'Khách hỏi giá', t: 'AI gửi đúng ảnh trên quảng cáo kèm học phí', s: 'Tập thử rồi mới đăng ký' },
    { k: 'ai', text: 'Dạ chào anh Khoa, khóa **Boxing cơ bản 3 tháng** (36 buổi, lớp tối đa 8 người) giá **4.500.000đ** ạ.' },
    { k: 'ai', img: 'hlv-kem' },
    { k: 'cap', e: 'Hỏi đúng mục tiêu', t: 'Hỏi tập để làm gì, đã tập môn nào chưa', s: 'Người mới thì xếp lớp người mới' },
    { k: 'ai', text: 'Anh tập để **giảm cân, tự vệ** hay thi đấu, trước giờ đã tập môn nào chưa ạ?' },
    { k: 'kh', text: 'a 28t, 82kg, dân văn phòng chưa tập gì hết. muốn giảm cân vs biết tự vệ. sợ bị đánh đau, 7h tối mới tan làm. gym gần nhà có 500k/tháng thôi' },
    { k: 'cap', e: 'Mời tập thử', t: 'Gỡ lo ngại, mời tới tham quan và tập thử', s: 'Không so với gym, không hứa giảm bao nhiêu kg' },
    { k: 'ai', text: 'Dạ người mới thì **tháng đầu chưa đấu đối kháng** ạ, HLV dạy kỹ thuật, đấm bao, cầm đích, tăng thể lực trước. Lớp tối có khung **18h30** và **19h30**, anh tan làm qua kịp.' },
    { k: 'ai', text: 'Gym với boxing mỗi bên một kiểu, em không so ạ. Anh ghé **tham quan phòng tập và tập thử 1 buổi miễn phí** nha, găng và băng quấn bên em cho mượn. Anh cho em xin **tên và SĐT** để giữ suất ạ 🥊' },

    // Khách im → màn hình phụ: gắn thẻ (hashtag quảng cáo + thẻ từ cuộc chat), bám đuổi 5 tin
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Preny tự gắn thẻ khóa khách quan tâm', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi 5 tin', t: '5 tin: 15 phút, rồi cách 1 ngày, 1 ngày, 1 ngày, 2 ngày', s: 'Phòng tập, feedback, HLV, quy trình, giữ suất' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Anh Khoa ơi, em gửi anh vài hình **phòng tập** bên em nha 🥊' },
    { k: 'ai', imgs: ['phong-tap', 'bao-cat-hang', 'nghi-tap'] },
    { k: 'p', a: 'r1', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '15:04', ngay: 'T5 19/11/2026', d: 700 },
    { k: 'ai', text: 'Đây là chia sẻ của một anh học viên văn phòng bên em ạ 💬' },
    { k: 'ai', review: { av: 'MĐ', ten: 'Minh Đức', sub: 'đã đánh giá Bản Lĩnh Boxing Club', mau: '#F59E0B',
        text: 'Mình 85kg, chưa tập gì bao giờ. Tháng đầu HLV cho tập kỹ thuật với thể lực, không bị ép đấu. 3 tháng xuống 6kg, tối về ngủ ngon hẳn.',
        note: 'Kết quả tùy thể trạng và mức chăm tập' } },
    { k: 'p', a: 'r2', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '15:04', ngay: 'T6 20/11/2026', d: 700 },
    { k: 'ai', img: 'hlv-nu' },
    { k: 'ai', checks: { tieuDe: 'Bên em tập vậy để anh yên tâm ạ:', dong: [
        '**HLV từng thi đấu**, lớp tối đa 8 người, kèm sát từng người', '**Bảo hộ đầy đủ**: găng, băng quấn tay, mũ bảo hộ', 'Khởi động, giãn cơ kỹ, **không ép sức** người mới'] } },
    { k: 'p', a: 'r3', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '15:04', ngay: 'T7 21/11/2026', d: 700 },
    { k: 'ai', text: 'Buổi đầu bên em là **tham quan → tập thử 60 phút → HLV đánh giá thể lực** rồi mới tư vấn lớp, anh ưng mới đăng ký, không ép ạ 😊' },
    { k: 'ai', img: 'tap-bong' },
    { k: 'p', a: 'r4', d: 800 },
    { k: 'time', nhan: '2 ngày sau', gio: '15:04', ngay: 'T2 23/11/2026', d: 700 },
    { k: 'ai', text: 'Tối thứ Tư này lớp người mới còn vài suất tập thử, anh muốn em giữ một suất cho anh không ạ?' },
    { k: 'p', a: 'r5', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 5, khách hẹn tới tập thử', s: 'AI giữ suất, xin SĐT ngay' },
    { k: 'kh', text: 'Tối t4 này a qua tập thử dc, giữ giúp a 1 suất nha' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'ai', text: 'Dạ được ạ, **thứ Tư 25/11** còn khung **18h30** và **19h30**. Anh cho em xin **tên và SĐT** để giữ suất nha 🥊' },
    { k: 'cap', e: 'Lấy SĐT', t: 'Khách để lại tên, SĐT, giờ tập thử', s: 'Đây là lúc AI chốt: chuyển khách cho người thật' },
    { k: 'kh', text: 'Khoa, 0912 735 468, 19h30 nha e' },
    { k: 'ai', text: 'Dạ em giữ suất tập thử **19h30 thứ Tư 25/11** cho anh Khoa rồi ạ. Anh Hùng bên tư vấn khóa học sẽ gọi anh xác nhận liền nha 🥊', d: 1800 },

    // Có SĐT → màn hình phụ: báo sale gọi ngay (không lên đơn tự động) → gửi Lead lên Facebook
    { k: 'cap', e: 'Báo ngay cho Sale', t: 'Có SĐT: báo sale phòng tập gọi ngay', s: 'Không lên đơn tự động: tập thử rồi mới chốt khóa' },
    { k: 'panel', v: 'sale', d: 800 },
    { k: 'p', a: 's1', d: 700 }, { k: 'p', a: 's2', d: 500 }, { k: 'p', a: 's3', d: 500 }, { k: 'p', a: 's4', d: 600 },
    { k: 'p', a: 's5', d: 1600 }, { k: 'p', a: 's6', d: 2600 },
    { k: 'cap', e: 'Gửi Lead về Facebook', t: 'Khách để lại SĐT: gửi sự kiện Lead lên Facebook', s: 'Quảng cáo tìm thêm khách giống khách thật' },
    { k: 'panel', v: 'capi', d: 900 },
    { k: 'p', a: 'flow', d: 1500 }, { k: 'p', a: 'event', d: 1300 }, { k: 'p', a: 'ok', d: 3200 },
    { k: 'panel', v: null, d: 600 },

    // Sau khi đăng ký, qua Zalo: 3 tin (hỏi thăm buổi đầu + giãn cơ; mời đo thể lực sau 1 tháng; ưu đãi gia hạn khóa)
    { k: 'cap', e: 'Chăm sóc học viên', t: 'Sau buổi tập đầu: hỏi thăm, dặn giãn cơ', s: 'Tin sau bán gửi qua Zalo OA của phòng tập' },
    { k: 'zalo', gio: '21:00', ngay: 'T6 27/11/2026', chip: 'Sau buổi tập đầu', d: 1500 },
    { k: 'zns', zns: { img: 'gian-co', sao: false, tieuDe: 'Anh Khoa ơi, buổi tập đầu thấy sao rồi ạ?',
        noiDung: 'Bản Lĩnh gửi anh mấy lưu ý cho tuần đầu nha:',
        dong: ['Đau cơ 1–2 ngày đầu là bình thường, **giãn cơ 10 phút**', '**Uống đủ nước**, ngủ đủ giấc', 'Quấn băng tay **chặt vừa**, tê tay thì nới ra'],
        nut: 'Nhắn HLV' }, d: 5000 },
    { k: 'cap', e: 'Mời đo thể lực', t: 'Tập 1 tháng: mời đo thể lực, cân nặng', s: 'HLV chỉnh bài tập theo kết quả' },
    { k: 'zstamp', gio: '10:00', ngay: 'T7 26/12/2026', chip: '1 tháng sau', d: 800 },
    { k: 'zns', zns: { img: 'hlv-nu', sao: false, tieuDe: 'Tới lịch đo thể lực miễn phí của anh ạ',
        noiDung: 'Anh tập được 1 tháng, HLV mời anh **đo thể lực, cân nặng** để chỉnh bài tập. Anh bấm chọn ngày, em xếp lịch nha 🥊',
        nut: 'Đặt lịch đo' }, d: 4400 },
    { k: 'cap', e: 'Ưu đãi gia hạn', t: 'Gửi ưu đãi gia hạn đúng khóa đang tập', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'T7 30/01/2027', chip: 'Ưu đãi học viên', d: 800 },
    { k: 'zns', zns: { banner: ['phong-tap', 'tap-bong', 'bang-quan', 'dam-bao'], nhan: 'ƯU ĐÃI GIA HẠN · GIẢM 15%', mau: '#DC2626',
        tieuDe: 'Gia hạn khóa Boxing 3 tháng',
        noiDung: 'Học viên gia hạn khóa 3 tháng tiếp theo được giảm **15%**, tặng băng quấn tay. Mã **BANLINH15**, dùng đến hết 28/02/2027.',
        nut: 'Xem ưu đãi' }, d: 4800 },

    { k: 'tongket', d: 8500 },
    { k: 'outro', d: 5200 },
  ],
  // Slide tổng kết cuối video: lấy từ deck.chotLai của bài 1, theo mẫu thẩm mỹ viện (cột 3 là "Bám đuổi", 5 tin trong 7 ngày)
  tongKet: { tieuDe: 'Quy trình Preny AI giúp', em: 'tăng tỷ lệ chốt lịch tập thử', cot: [
    { ten: 'Khách hàng', icon: 'users', dong: ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến'] },
    { ten: 'AI Chatbot', icon: 'bot', dong: ['Phản hồi nhanh tức thì', 'Hỏi đúng mục tiêu tập', 'Không hứa giảm bao nhiêu kg', 'Lấy SĐT, mời tập thử'] },
    { ten: 'Bám đuổi', icon: 'heart', dong: ['Gửi 5 tin nhắn trong 7 ngày: phòng tập, học viên thật, HLV, quy trình'] },
    { ten: 'Tập thử', icon: 'calendar', dong: ['Khách tham quan, tập thử miễn phí', 'Sale chốt khóa tại phòng tập'] },
    { ten: 'Gia hạn', icon: 'refresh', dong: ['Mời đo thể lực định kỳ, gửi ưu đãi gia hạn, lớp mới qua FB và Zalo'] },
  ] },
  panels: {
    tag: { av: 'DK', ten: 'Trần Đăng Khoa', sub: 'Messenger · từ quảng cáo Boxing cơ bản',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#boxingcoban', 'qt hot'], ['#boxing', 'qt hot'], ['#tapthumienphi', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#GiamCan', 'qt']]]],
      im: 'Khách im từ 14:49, chưa để lại SĐT',
      rule: { lb: 'Bám đuổi theo thẻ #boxingcoban', tieuDe: 'Bám đuổi bằng 5 tin ngắn',
              dong: [['15 phút', 'Ảnh phòng tập, khu bao cát'], ['1 ngày', 'Feedback học viên văn phòng'], ['1 ngày', 'HLV kèm sát, bảo hộ đầy đủ'],
                     ['1 ngày', 'Quy trình: tham quan, tập thử, đo thể lực'], ['2 ngày', 'Mời giữ suất tập thử tối thứ Tư']] },
      reply: 'Khách giữ suất tập thử thứ Tư · dừng bám đuổi' },
    sale: { tieuDe: 'Báo khách mới cho Sale', ntTieuDe: 'Khách mới vừa để lại SĐT', khNhan: 'Khách hàng · Số điện thoại', lichNhan: 'Lịch tập thử',
      nguon: 'Quảng cáo Boxing cơ bản → Messenger', ten: 'Trần Đăng Khoa', sdt: '0912 735 468',
      nhuCau: '28 tuổi, 82kg, chưa tập môn nào, muốn giảm cân và tự vệ, tan làm 7h tối', lich: 'Tham quan, tập thử · 19:30 Thứ Tư 25/11',
      the: [['#boxingcoban', 'qt'], ['#GiamCan', 'qt'], ['Đã cho SĐT', 'ok']],
      sale: { av: 'HG', ten: 'Anh Hùng · Tư vấn khóa học', sub: 'Đang trực · nhận khách tự động' }, ok: 'Anh Hùng đã nhận khách, gọi xác nhận ngay' },
    capi: { tieuDe: 'Gửi khách tiềm năng cho Facebook', event: 'Lead', nhan: 'SỰ KIỆN KHÁCH TIỀM NĂNG', giaTri: 'Có SĐT', pk: 'Lead · khách để lại SĐT',
      dong: [['Khách', 'Trần Đăng Khoa · đã để lại SĐT'], ['Nguồn khách', 'Quảng cáo Boxing cơ bản → Messenger'], ['Nhu cầu', 'Tham quan, tập thử khóa Boxing cơ bản'], ['Event ID', 'BL2311-LEAD (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện Lead', khong: 'Không gửi Purchase khi khách chưa đăng ký khóa.' },
  },
};
