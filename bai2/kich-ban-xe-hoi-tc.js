/* Kịch bản video demo NGANG 16:9: SHOWROOM XE HƠI (nhóm cân nhắc nhiều), làm 26/11/2026 theo đồng nghiệp:
   "Bán xe hơi (tư vấn, hỏi thông tin và xin sđt đặt lịch mời lên showroom để trải nghiệm)".
   Mạch cnn (mẫu cửa hàng điện thoại): 1 cảnh, không có bình luận, chỉ 1 mẫu xe (SUV 7 chỗ hybrid) từ đầu tới cuối.
   Mạch: logo → quảng cáo → khách bấm "Gửi tin nhắn", hỏi giá → AI báo giá niêm yết + gửi đúng ảnh quảng cáo → hỏi mấy người đi, đi phố hay đường dài
   → khách 5 người, hay về quê, muốn đổi xe cũ, hỏi giá thu và trả góp → AI không tự báo giá thu cũ (kỹ thuật thẩm định tại showroom),
   không tự tính trả góp (tư vấn viên tính theo hồ sơ, ngân hàng), mời lái thử, xin tên + SĐT → khách im → gắn thẻ + bám đuổi 5 tin
   → khách hẹn lái thử → xin SĐT → gửi địa chỉ showroom + Google Maps → báo tư vấn viên → gửi Lead lên Facebook → Zalo 3 tin → tổng kết → logo.
   Không lên đơn online: khách lái thử tại showroom rồi tư vấn viên mới chốt. Không có tin nhắc trước giờ hẹn.
   Không dùng tên hãng, tên mẫu xe thật; showroom, giá, khách, SĐT, địa chỉ, ưu đãi là dữ liệu minh họa.
   Ảnh: Unsplash (ảnh thật, không thấy logo hãng xe). */
window.VN_KB = {
  ten: 'Showroom xe hơi video ngang',
  ketSub: 'Để AI tư vấn và mời khách tới showroom lái thử xe',
  shop: { ten: 'Ô tô Phú Thành', av: 'PT', mau: '#1E3A8A', sub: 'Thường trả lời ngay' },
  anh: {
    'xe': '../assets/img/u/1760713164476-7eb5063b3d07_800x800.jpg',          // SUV 7 chỗ màu xanh đậm, nhìn ngang (ảnh quảng cáo)
    'xe-trang': '../assets/img/u/1789044488410-839d90ac9061_800x800.jpg',    // SUV trắng, cận thân xe
    'xe-duong-dai': '../assets/img/u/1690278289651-895463644114_800x800.jpg', // SUV đỗ bên đường, trời xanh
    'man-hinh': '../assets/img/u/1562618817-253b06cf2b6e_800x800.jpg',       // màn hình đồng hồ, bản đồ
    'chia-khoa': '../assets/img/u/1761014586544-53fe5e1f1e25_800x800.jpg',   // trao chìa khóa xe
    'den': '../assets/img/u/1763313299304-606adcbcc965_800x800.jpg',         // đèn pha LED
    'hang-ghe': '../assets/img/u/1770290405640-5daf7593c92a_800x800.jpg',    // hàng ghế sau bọc da
    'hanh-ly': '../assets/img/u/1772466669620-310c35f9deb2_800x800.jpg',     // cất vali vào cốp sau
    'cua-so-troi': '../assets/img/u/1786733048266-906986f2ddd4_800x800.jpg', // cửa sổ trời nhìn núi
    'lai-thu': '../assets/img/u/1787571354001-b2c975845e09_800x800.jpg',     // nhìn từ ghế lái ra đường đèo
    'showroom': '../assets/img/u/1794208709697-cc599aeb7ac9_800x800.jpg',    // showroom sáng, xe trưng bày
    'kiem-tra': '../assets/img/u/1794208709772-1055087b6d22_800x800.jpg',    // ngồi xuống kiểm tra bánh xe
    'ky-hd': '../assets/img/u/1794208710075-7196255b683e_800x800.jpg',       // ký giấy tờ tại bàn showroom
    'ngoi-thu': '../assets/img/u/1794208710086-80217978a360_800x800.jpg',    // vợ chồng ngồi thử trong xe
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= QUẢNG CÁO → MESSENGER (1 cảnh, không có bình luận, chỉ 1 mẫu xe) ================= */
    { k: 'canh', nhan: 'Khách từ quảng cáo → Messenger', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'xe', nhan: 'MESSENGER', tieuDe: 'SUV 7 chỗ hybrid · Đặt lịch lái thử tại showroom', nut: 'Gửi tin nhắn',
        text: 'SUV 7 CHỖ HYBRID 🚘 Đi phố tiết kiệm xăng, đủ rộng cho cả nhà đi đường dài. Giá niêm yết từ 1.089.000.000đ. Đặt lịch lái thử miễn phí tại showroom Quận 7, có hỗ trợ trả góp và thu cũ đổi mới. #suv7cho #xehybrid #laithumienphi',
      }, d: 1500 },
    { k: 'cap', e: 'Quảng cáo Facebook', t: 'Khách bấm "Gửi tin nhắn" từ quảng cáo', s: 'Hỏi gì, AI trả lời ngay lập tức' },
    { k: 'tap', d: 1100 },
    { k: 'ms', ref: { loai: 'ad', img: 'xe', dong1: 'Tuấn Võ đã trả lời một quảng cáo', dong2: 'SUV 7 chỗ hybrid · Đặt lịch lái thử tại showroom' }, gio: '14:47', d: 900 },
    { k: 'kh', text: 'xe 7 chỗ hybrid giá sao em?' },
    { k: 'cap', e: 'Khách hỏi giá', t: 'AI gửi đúng ảnh trên quảng cáo kèm giá', s: 'Giá niêm yết, lái thử rồi mới chọn' },
    { k: 'ai', text: 'Dạ chào anh Tuấn, SUV 7 chỗ hybrid bên em giá niêm yết **từ 1.089.000.000đ** ạ.' },
    { k: 'ai', img: 'xe' },
    { k: 'cap', e: 'Hỏi đúng nhu cầu', t: 'Hỏi nhà mấy người, đi phố hay đường dài', s: 'Để mời lái thử đúng kiểu anh hay đi' },
    { k: 'ai', text: 'Nhà mình thường đi **mấy người**, chủ yếu **đi phố** hay **đường dài** ạ?' },
    { k: 'kh', text: 'nhà a 5 người, cuối tuần hay về quê Bến Tre. a đang đi xe 5 chỗ muốn đổi, thu bn? trả góp tháng bn e?' },
    { k: 'cap', e: 'Mời lái thử', t: 'Không tự báo giá thu cũ, không tự tính trả góp', s: 'Thẩm định xe cũ, tính khoản vay tại showroom' },
    { k: 'ai', text: 'Dạ giá thu xe cũ phải để **kỹ thuật thẩm định trực tiếp** mới báo đúng được ạ. Còn **trả góp** thì tư vấn viên tính theo hồ sơ và ngân hàng anh chọn.', d: 2600 },
    { k: 'ai', text: 'Cả nhà 5 người hay đi đường dài, anh nên **lái thử 30 phút** cho chắc ạ: ngồi thử hàng ghế 2, 3, chạy thử đoạn cao tốc gần showroom. Showroom mở **8h–20h** cả Chủ nhật, anh cho em xin **tên và SĐT** để đặt lịch lái thử nha 🚘', d: 3200 },

    // Khách im → màn hình phụ: gắn thẻ (hashtag quảng cáo + thẻ từ cuộc chat), bám đuổi 5 tin
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Preny tự gắn thẻ mẫu xe khách quan tâm', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi 5 tin', t: '5 tin: 15 phút, rồi cách 1 ngày, 1 ngày, 1 ngày, 2 ngày', s: 'Xe thật, feedback, chuẩn bị sẵn, quy trình, giữ lịch' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T5 26/11/2026', d: 700 },
    { k: 'ai', text: 'Anh Tuấn ơi, em gửi anh vài hình **xe thật** tại showroom: thân xe, hàng ghế sau và cốp chở đồ nha 🚘' },
    { k: 'ai', imgs: ['xe-trang', 'hang-ghe', 'hanh-ly'] },
    { k: 'p', a: 'r1', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '15:04', ngay: 'T6 27/11/2026', d: 700 },
    { k: 'ai', text: 'Đây là chia sẻ của một anh khách vừa đổi xe bên em ạ 💬' },
    { k: 'ai', review: { av: 'QH', ten: 'Quốc Hưng', sub: 'đã đánh giá Ô tô Phú Thành', mau: '#F59E0B',
        text: 'Nhà mình 6 người, lái thử chạy cao tốc mới thấy xe êm, hàng ghế 3 vẫn ngồi được. Xe cũ thẩm định ngay tại showroom, giá thu ghi rõ trên phiếu nên yên tâm.',
        note: 'Giá thu tùy tình trạng từng xe' } },
    { k: 'p', a: 'r2', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '15:04', ngay: 'T7 28/11/2026', d: 700 },
    { k: 'ai', img: 'kiem-tra' },
    { k: 'ai', checks: { tieuDe: 'Khi anh ghé, bên em chuẩn bị sẵn cho mình ạ:', dong: [
        '**Xe lái thử** đầy xăng, tư vấn viên đi cùng', '**Thẩm định xe cũ** miễn phí, giá ghi trên phiếu', '**Bảng tính trả góp** theo ngân hàng anh chọn'] } },
    { k: 'p', a: 'r3', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '15:04', ngay: 'CN 29/11/2026', d: 700 },
    { k: 'ai', text: 'Lái thử chỉ mất khoảng **45 phút**: xem xe → lái thử đường phố và cao tốc → thẩm định xe cũ, anh ưng mới bàn tiếp ạ 😊' },
    { k: 'ai', img: 'lai-thu' },
    { k: 'p', a: 'r4', d: 800 },
    { k: 'time', nhan: '2 ngày sau', gio: '15:04', ngay: 'T3 01/12/2026', d: 700 },
    { k: 'ai', text: 'Cuối tuần này showroom còn **3 khung giờ lái thử** buổi sáng. Anh muốn em giữ 1 khung cho cả nhà mình đi thử không ạ?' },
    { k: 'p', a: 'r5', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 5, khách hẹn lái thử', s: 'AI giữ lịch, xin SĐT ngay' },
    { k: 'kh', text: 'Sáng CN a dẫn vợ con qua lái thử, giữ giúp a nha' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'ai', text: 'Dạ được ạ, em giữ lịch lái thử sáng **Chủ nhật 06/12** cho anh. Anh cho em xin **tên và SĐT** để báo tư vấn viên nha 🚘' },
    { k: 'cap', e: 'Lấy SĐT', t: 'Khách để lại tên, SĐT, giờ ghé', s: 'Đây là lúc AI chốt: chuyển khách cho người thật' },
    { k: 'kh', text: 'Tuấn, 0909 316 528, tầm 9h a qua' },
    { k: 'ai', text: 'Dạ em đặt lịch lái thử cho anh Tuấn rồi ạ, **9h Chủ nhật 06/12**. Anh nhớ mang theo **giấy đăng ký xe cũ** để kỹ thuật thẩm định luôn nha.', d: 2200 },
    { k: 'cap', e: 'Gửi địa chỉ showroom', t: 'AI gửi địa chỉ kèm Google Maps', s: 'Khách bấm là chỉ đường tới showroom' },
    { k: 'ai', map: { img: 'showroom', ten: 'Ô tô Phú Thành – Quận 7', nhan: 'Ô tô Phú Thành', dc: '468 Nguyễn Văn Linh, Quận 7, TP.HCM' } },

    // Có SĐT → màn hình phụ: báo tư vấn viên gọi ngay (không lên đơn) → gửi Lead lên Facebook
    { k: 'cap', e: 'Báo ngay cho showroom', t: 'Có SĐT: báo tư vấn viên gọi ngay', s: 'Không lên đơn online: khách lái thử rồi mới chốt' },
    { k: 'panel', v: 'sale', d: 800 },
    { k: 'p', a: 's1', d: 700 }, { k: 'p', a: 's2', d: 500 }, { k: 'p', a: 's3', d: 500 }, { k: 'p', a: 's4', d: 600 },
    { k: 'p', a: 's5', d: 1600 }, { k: 'p', a: 's6', d: 2600 },
    { k: 'cap', e: 'Gửi Lead về Facebook', t: 'Khách để lại SĐT: gửi sự kiện Lead lên Facebook', s: 'Quảng cáo tìm thêm khách giống khách thật' },
    { k: 'panel', v: 'capi', d: 900 },
    { k: 'p', a: 'flow', d: 1500 }, { k: 'p', a: 'event', d: 1300 }, { k: 'p', a: 'ok', d: 3200 },
    { k: 'panel', v: null, d: 600 },

    // Sau khi mua xe tại showroom, qua Zalo: 3 tin (hỏi thăm + lưu ý xe mới; mời bảo dưỡng định kỳ; ưu đãi phụ kiện cho khách quen)
    { k: 'cap', e: 'Chăm sóc sau mua qua Zalo', t: 'Sau khi nhận xe: hỏi thăm, dặn chạy 1.000km đầu', s: 'Tin sau bán gửi qua Zalo OA của showroom' },
    { k: 'zalo', gio: '19:30', ngay: 'T7 19/12/2026', chip: 'Sau khi nhận xe tại showroom', d: 1500 },
    { k: 'zns', zns: { img: 'chia-khoa', sao: false, tieuDe: 'Anh Tuấn ơi, xe mới đi ổn không ạ?',
        noiDung: 'Phú Thành gửi anh vài lưu ý cho xe mới nha:',
        dong: ['**1.000km** đầu: hạn chế tăng tốc, phanh gấp', 'Mốc **1.000km**: kiểm tra miễn phí tại xưởng', 'Đi xa: kiểm tra **áp suất lốp** trước chuyến đi'],
        nut: 'Nhắn cố vấn dịch vụ' }, d: 5000 },
    { k: 'cap', e: 'Mời bảo dưỡng định kỳ', t: 'Tới mốc bảo dưỡng: mời đặt lịch', s: 'Khách tự chọn ngày, xưởng xếp lịch' },
    { k: 'zstamp', gio: '10:00', ngay: 'T6 19/03/2027', chip: '3 tháng sau', d: 800 },
    { k: 'zns', zns: { img: 'kiem-tra', sao: false, tieuDe: 'Xe của anh sắp tới mốc bảo dưỡng 5.000km ạ',
        noiDung: 'Anh đặt lịch trước, xưởng bên em kiểm tra phanh, lốp, nước làm mát và hệ thống hybrid cho anh nha. Anh bấm chọn ngày, em xếp lịch ạ 🚘',
        nut: 'Đặt lịch bảo dưỡng' }, d: 4400 },
    { k: 'cap', e: 'Ưu đãi khách quen', t: 'Gửi ưu đãi phụ kiện hợp đúng xe khách', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'T7 17/04/2027', chip: 'Ưu đãi khách quen', d: 800 },
    { k: 'zns', zns: { banner: ['den', 'cua-so-troi', 'hang-ghe', 'man-hinh'], nhan: 'ƯU ĐÃI KHÁCH QUEN · GIẢM 20%', mau: '#1E3A8A',
        tieuDe: 'Phụ kiện hợp đúng SUV 7 chỗ của anh',
        noiDung: 'Dán phim cách nhiệt, thảm sàn, camera hành trình giảm **20%** cho khách quen, lắp ngay tại xưởng. Mã **PHUTHANH20**, dùng đến hết 31/05/2027.',
        nut: 'Xem ưu đãi' }, d: 4800 },

    { k: 'tongket', d: 8500 },
    { k: 'outro', d: 5200 },
  ],
  // Slide tổng kết cuối video: theo mẫu cửa hàng điện thoại (cột 3 là "Bám đuổi", 5 tin trong 7 ngày)
  tongKet: { tieuDe: 'Quy trình Preny AI giúp', em: 'tăng tỷ lệ khách tới lái thử', cot: [
    { ten: 'Khách hàng', icon: 'users', dong: ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến'] },
    { ten: 'AI Chatbot', icon: 'bot', dong: ['Phản hồi nhanh tức thì', 'Báo giá, gửi ảnh xe thật', 'Mời lái thử, thẩm định xe cũ tại showroom', 'Lấy SĐT, giữ lịch cho khách'] },
    { ten: 'Bám đuổi', icon: 'heart', dong: ['Gửi 5 tin nhắn trong 7 ngày: xe thật, khách thật, chuẩn bị sẵn, quy trình'] },
    { ten: 'Khách tới lái thử', icon: 'calendar', dong: ['Cả nhà ngồi thử, lái thử', 'Tư vấn viên chốt xe tại showroom'] },
    { ten: 'Mua lại', icon: 'refresh', dong: ['Mời bảo dưỡng định kỳ, gửi ưu đãi phụ kiện qua FB và Zalo'] },
  ] },
  panels: {
    tag: { av: 'TV', ten: 'Võ Minh Tuấn', sub: 'Messenger · từ quảng cáo SUV 7 chỗ hybrid',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#suv7cho', 'qt hot'], ['#xehybrid', 'qt hot'], ['#laithumienphi', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#ThuCuDoiMoi', 'qt']]]],
      im: 'Khách im từ 14:49, chưa để lại SĐT',
      rule: { lb: 'Bám đuổi theo thẻ #suv7cho', tieuDe: 'Bám đuổi bằng 5 tin ngắn',
              dong: [['15 phút', 'Ảnh xe thật, ghế sau, cốp'], ['1 ngày', 'Feedback khách đổi xe'], ['1 ngày', 'Xe lái thử, thẩm định, trả góp'],
                     ['1 ngày', 'Quy trình lái thử 45 phút'], ['2 ngày', 'Mời giữ khung giờ lái thử']] },
      reply: 'Khách hẹn lái thử · dừng bám đuổi' },
    sale: { tieuDe: 'Báo khách mới cho showroom', ntTieuDe: 'Khách mới vừa để lại SĐT', khNhan: 'Khách hàng · Số điện thoại', lichNhan: 'Hẹn lái thử',
      nguon: 'Quảng cáo SUV 7 chỗ hybrid → Messenger', ten: 'Võ Minh Tuấn', sdt: '0909 316 528',
      nhuCau: 'SUV 7 chỗ hybrid, nhà 5 người, hay đi Bến Tre, muốn đổi xe 5 chỗ cũ', lich: 'Showroom Quận 7 · 9:00 Chủ nhật 06/12',
      the: [['#suv7cho', 'qt'], ['#ThuCuDoiMoi', 'qt'], ['Đã cho SĐT', 'ok']],
      sale: { av: 'AM', ten: 'Anh Minh · Tư vấn bán hàng', sub: 'Đang trực · nhận khách tự động' }, ok: 'Anh Minh đã nhận khách, gọi xác nhận ngay' },
    capi: { tieuDe: 'Gửi khách tiềm năng cho Facebook', event: 'Lead', nhan: 'SỰ KIỆN KHÁCH TIỀM NĂNG', giaTri: 'Có SĐT', pk: 'Lead · khách để lại SĐT',
      dong: [['Khách', 'Võ Minh Tuấn · đã để lại SĐT'], ['Nguồn khách', 'Quảng cáo SUV 7 chỗ hybrid → Messenger'], ['Nhu cầu', 'Lái thử tại showroom, thu cũ đổi mới'], ['Event ID', 'PT0612-LEAD (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện Lead', khong: 'Không gửi Purchase khi khách chưa tới showroom mua xe.' },
  },
};
