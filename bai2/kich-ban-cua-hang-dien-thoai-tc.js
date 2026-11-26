/* Kịch bản video demo NGANG 16:9: CỬA HÀNG ĐIỆN THOẠI (nhóm cân nhắc nhiều), làm 26/11/2026 theo người dùng:
   "thêm 1 ngành bán điện thoại nhưng kịch bản là mời tới cửa hàng xem chứ k bán onl".
   Mạch cnn (mẫu dàn âm thanh / thẩm mỹ viện): 1 cảnh, không có bình luận, chỉ 1 máy (iPhone 16 Pro Max 256GB like new) từ đầu tới cuối.
   Mạch: logo → quảng cáo → khách bấm "Gửi tin nhắn", hỏi giá → AI báo giá + gửi đúng ảnh quảng cáo → hỏi máy đang dùng (thu cũ đổi mới)
   → khách đang dùng 13 Pro, hỏi giá thu, muốn ship về Dĩ An → AI không tự báo giá thu (kỹ thuật kiểm tra máy tại quầy mới báo đúng),
   nói rõ chỉ bán tại cửa hàng, mời qua xem máy, xin tên + SĐT → khách im → gắn thẻ + bám đuổi 5 tin → khách hẹn ghé
   → xin SĐT → gửi địa chỉ cửa hàng + Google Maps → báo nhân viên quầy → gửi Lead lên Facebook → Zalo 3 tin → tổng kết → logo.
   Không lên đơn, không ship: khách tới cửa hàng xem máy rồi nhân viên mới chốt. Không có tin nhắc trước giờ hẹn.
   Tên cửa hàng, giá, khách, SĐT, địa chỉ, ưu đãi là dữ liệu minh họa ("iPhone 16 Pro Max" là tên sản phẩm, không phải tên cửa hàng).
   Ảnh: Unsplash (ảnh thật, không phải cửa hàng của khách). Không làm ảnh giấy tờ giả: tin "bảo hành" là ảnh kỹ thuật + thẻ liệt kê. */
window.VN_KB = {
  ten: 'Cửa hàng điện thoại video ngang',
  ketSub: 'Để AI tư vấn và mời khách tới cửa hàng của bạn xem máy',
  shop: { ten: 'Nam Phong Mobile', av: 'NP', mau: '#1D4ED8', sub: 'Thường trả lời ngay' },
  anh: {
    'may': '../assets/img/u/1678685888221-cda773a3dcdb_800x800.jpg',        // tay cầm iPhone Pro màu xám
    'may-toi': '../assets/img/u/1592750475338-74b7b21085ab_800x800.jpg',    // mặt lưng iPhone Pro, nền tối
    'trung-bay': '../assets/img/u/1758467700568-05de57ed46c4_800x800.jpg',  // máy trên giá trưng bày
    'khach-xem': '../assets/img/u/1758467700917-3517eb11ec8c_800x800.jpg',  // khách xem máy trên bàn trưng bày
    'giao-may': '../assets/img/u/1697545806245-9795b6056141_800x800.jpg',   // đưa máy cho khách tại quầy kính
    'quay': '../assets/img/u/1556742049-0cfed4f6a45d_800x800.jpg',          // nhân viên quầy cười với khách
    'cua-hang': '../assets/img/u/1795532474580-ec14e4acb25e_800x800.jpg',   // cửa hàng nhiều bàn điện thoại
    'dong-khach': '../assets/img/u/1768137348738-ce11911f54f6_800x800.jpg', // khách đông trong cửa hàng
    'chuyen-du-lieu': '../assets/img/u/1697545806080-7b79a876aa72_800x800.jpg', // cầm 2 máy, chuyển dữ liệu
    'kiem-tra': '../assets/img/u/1550041473-d296a3a8a18a_800x800.jpg',      // kỹ thuật mở máy kiểm tra
    'nhan-may': '../assets/img/u/1556742111-a301076d9d18_800x800.jpg',      // tay cầm máy
    'op-lung': '../assets/img/u/1785741612674-965f99d5c38f_800x800.jpg',    // kệ ốp lưng nhiều màu
    'phu-kien': '../assets/img/u/1609692814858-f7cd2f0afa4f_800x800.jpg',   // máy, đồng hồ, tai nghe
    'tai-nghe': '../assets/img/u/1606841837239-c5a1a4a07af7_800x800.jpg',   // tai nghe không dây
    'sac': '../assets/img/u/1731616103600-3fe7ccdc5a59_800x800.jpg',        // củ sạc nhanh kèm cáp
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= QUẢNG CÁO → MESSENGER (1 cảnh, không có bình luận, chỉ 1 máy) ================= */
    { k: 'canh', nhan: 'Khách từ quảng cáo → Messenger', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'may', nhan: 'MESSENGER', tieuDe: 'iPhone 16 Pro Max like new · Xem máy tại cửa hàng', nut: 'Gửi tin nhắn',
        text: 'Máy đẹp như mới, pin từ 90% 📱 iPhone 16 Pro Max 256GB like new 99%, zin nguyên bản, bảo hành 12 tháng. Chỉ bán tại cửa hàng: anh chị tới cầm máy, kiểm tra tận tay rồi mới mua. #iphone16promax #likenew #xemmaytaicuahang',
      }, d: 1500 },
    { k: 'cap', e: 'Quảng cáo Facebook', t: 'Khách bấm "Gửi tin nhắn" từ quảng cáo', s: 'Hỏi gì, AI trả lời ngay lập tức' },
    { k: 'tap', d: 1100 },
    { k: 'ms', ref: { loai: 'ad', img: 'may', dong1: 'Đức Lê đã trả lời một quảng cáo', dong2: 'iPhone 16 Pro Max like new · Xem máy tại cửa hàng' }, gio: '14:47', d: 900 },
    { k: 'kh', text: '16 Pro Max 256 giá sao e?' },
    { k: 'cap', e: 'Khách hỏi giá', t: 'AI gửi đúng ảnh trên quảng cáo kèm giá', s: 'Giá tham khảo, xem máy rồi mới chọn' },
    { k: 'ai', text: 'Dạ chào anh Đức, iPhone 16 Pro Max 256GB like new 99% bên em giá **từ 22.490.000đ**, bảo hành **12 tháng** ạ.' },
    { k: 'ai', img: 'may' },
    { k: 'cap', e: 'Hỏi đúng nhu cầu', t: 'Hỏi máy khách đang dùng', s: 'Cửa hàng có thu cũ đổi mới' },
    { k: 'ai', text: 'Anh đang dùng máy nào ạ? Bên em có **thu cũ đổi mới**, máy cũ trừ thẳng vào giá luôn.' },
    { k: 'kh', text: 'a đang xài 13 pro 128, thu bn e? ship về Dĩ An cho a đc k, a ít rảnh' },
    { k: 'cap', e: 'Mời tới cửa hàng', t: 'Không bán online: mời khách qua xem máy', s: 'Giá thu cũ để kỹ thuật kiểm tra tại quầy mới báo' },
    { k: 'ai', text: 'Dạ máy cũ phải để kỹ thuật **kiểm tra trực tiếp** pin, màn, Face ID mới báo đúng giá thu được ạ, chỉ mất khoảng **10 phút**.', d: 2400 },
    { k: 'ai', text: 'Bên em **chỉ bán tại cửa hàng** để anh tự cầm máy, kiểm tra pin, màn, IMEI rồi mới mua. Cửa hàng mở **8h–21h30** cả Chủ nhật, anh cho em xin **tên và SĐT** để giữ máy đẹp cho anh nha 📱', d: 3000 },

    // Khách im → màn hình phụ: gắn thẻ (hashtag quảng cáo + thẻ từ cuộc chat), bám đuổi 5 tin
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Preny tự gắn thẻ máy khách quan tâm', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi 5 tin', t: '5 tin: 15 phút, rồi cách 1 ngày, 1 ngày, 1 ngày, 2 ngày', s: 'Máy thật, feedback, bảo hành, quy trình, giữ máy' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T5 26/11/2026', d: 700 },
    { k: 'ai', text: 'Anh Đức ơi, em gửi anh vài hình **máy thật** và quầy trưng bày bên em nha 📱' },
    { k: 'ai', imgs: ['may-toi', 'trung-bay', 'khach-xem'] },
    { k: 'p', a: 'r1', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '15:04', ngay: 'T6 27/11/2026', d: 700 },
    { k: 'ai', text: 'Đây là chia sẻ của một anh khách vừa đổi máy bên em ạ 💬' },
    { k: 'ai', review: { av: 'TK', ten: 'Trọng Khang', sub: 'đã đánh giá Nam Phong Mobile', mau: '#F59E0B',
        text: 'Mang 12 Pro qua đổi, kỹ thuật kiểm tra máy cũ ngay tại quầy, báo giá thu rõ ràng. Tự cầm máy mới kiểm pin, Face ID xong mới trả tiền nên yên tâm.',
        note: 'Giá thu tùy tình trạng từng máy' } },
    { k: 'p', a: 'r2', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '15:04', ngay: 'T7 28/11/2026', d: 700 },
    { k: 'ai', img: 'kiem-tra' },
    { k: 'ai', checks: { tieuDe: 'Máy nào bên em cũng kiểm tra kỹ trước khi bán ạ:', dong: [
        'Máy **zin nguyên bản**, chưa qua sửa chữa', '**Check IMEI**, thoát iCloud ngay tại quầy', '**Bảo hành 12 tháng**, 1 đổi 1 trong 30 ngày'] } },
    { k: 'p', a: 'r3', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '15:04', ngay: 'CN 29/11/2026', d: 700 },
    { k: 'ai', text: 'Qua cửa hàng chỉ mất khoảng **20 phút**: xem máy → kiểm tra máy cũ → chuyển dữ liệu sang máy mới, anh ưng mới mua ạ 😊' },
    { k: 'ai', img: 'giao-may' },
    { k: 'p', a: 'r4', d: 800 },
    { k: 'time', nhan: '2 ngày sau', gio: '15:04', ngay: 'T3 01/12/2026', d: 700 },
    { k: 'ai', text: 'Lô 16 Pro Max pin trên 95% bên em còn **2 máy**. Anh muốn em giữ 1 máy tới khi anh ghé xem không ạ?' },
    { k: 'p', a: 'r5', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 5, khách hẹn ghé cửa hàng', s: 'AI giữ máy, xin SĐT ngay' },
    { k: 'kh', text: 'Chiều mai a ghé, giữ giúp a 1 máy nha' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'ai', text: 'Dạ được ạ, em giữ máy cho anh tới **21h thứ Tư 02/12**. Anh cho em xin **tên và SĐT** để báo nhân viên quầy nha 📱' },
    { k: 'cap', e: 'Lấy SĐT', t: 'Khách để lại tên, SĐT, giờ ghé', s: 'Đây là lúc AI chốt: chuyển khách cho người thật' },
    { k: 'kh', text: 'Đức, 0938 274 615, tầm 6h chiều a qua' },
    { k: 'ai', text: 'Dạ em giữ máy cho anh Đức rồi ạ, **18h thứ Tư 02/12**. Anh nhớ mang theo máy 13 Pro để kỹ thuật kiểm tra thu cũ nha.', d: 2200 },
    { k: 'cap', e: 'Gửi địa chỉ cửa hàng', t: 'AI gửi địa chỉ kèm Google Maps', s: 'Khách bấm là chỉ đường tới cửa hàng' },
    { k: 'ai', map: { img: 'cua-hang', ten: 'Nam Phong Mobile – Thủ Đức', nhan: 'Nam Phong Mobile', dc: '218 Võ Văn Ngân, Thủ Đức, TP.HCM' } },

    // Có SĐT → màn hình phụ: báo nhân viên quầy gọi ngay (không lên đơn, không ship) → gửi Lead lên Facebook
    { k: 'cap', e: 'Báo ngay cho cửa hàng', t: 'Có SĐT: báo nhân viên quầy gọi ngay', s: 'Không lên đơn online: khách xem máy rồi mới chốt' },
    { k: 'panel', v: 'sale', d: 800 },
    { k: 'p', a: 's1', d: 700 }, { k: 'p', a: 's2', d: 500 }, { k: 'p', a: 's3', d: 500 }, { k: 'p', a: 's4', d: 600 },
    { k: 'p', a: 's5', d: 1600 }, { k: 'p', a: 's6', d: 2600 },
    { k: 'cap', e: 'Gửi Lead về Facebook', t: 'Khách để lại SĐT: gửi sự kiện Lead lên Facebook', s: 'Quảng cáo tìm thêm khách giống khách thật' },
    { k: 'panel', v: 'capi', d: 900 },
    { k: 'p', a: 'flow', d: 1500 }, { k: 'p', a: 'event', d: 1300 }, { k: 'p', a: 'ok', d: 3200 },
    { k: 'panel', v: null, d: 600 },

    // Sau khi mua tại cửa hàng, qua Zalo: 3 tin (hỏi thăm + lưu ý máy mới; mời kiểm tra máy miễn phí; ưu đãi phụ kiện cho khách quen)
    { k: 'cap', e: 'Chăm sóc sau mua qua Zalo', t: 'Sau khi mua: hỏi thăm, dặn giữ pin', s: 'Tin sau bán gửi qua Zalo OA của cửa hàng' },
    { k: 'zalo', gio: '19:30', ngay: 'T6 04/12/2026', chip: 'Sau khi mua máy tại cửa hàng', d: 1500 },
    { k: 'zns', zns: { img: 'nhan-may', sao: false, tieuDe: 'Anh Đức ơi, máy mới dùng ổn không ạ?',
        noiDung: 'Nam Phong gửi anh vài lưu ý cho máy mới nha:',
        dong: ['Sạc qua đêm: bật **Sạc tối ưu** để giữ pin', 'Lỗi gì trong **30 ngày** đầu: mang qua đổi máy khác', 'Vệ sinh loa, cổng sạc **miễn phí** tại cửa hàng'],
        nut: 'Nhắn kỹ thuật viên' }, d: 5000 },
    { k: 'cap', e: 'Mời kiểm tra định kỳ', t: 'Dùng 3 tháng: mời qua kiểm tra máy', s: 'Khách tự chọn ngày, kiểm tra miễn phí' },
    { k: 'zstamp', gio: '10:00', ngay: 'T5 04/03/2027', chip: '3 tháng sau', d: 800 },
    { k: 'zns', zns: { img: 'kiem-tra', sao: false, tieuDe: 'Máy của anh đã dùng được 3 tháng ạ',
        noiDung: 'Anh ghé cửa hàng, kỹ thuật kiểm tra pin, vệ sinh loa, cổng sạc cho anh **miễn phí** nha. Anh bấm chọn ngày, em xếp lịch ạ 📱',
        nut: 'Đặt lịch kiểm tra' }, d: 4400 },
    { k: 'cap', e: 'Ưu đãi khách quen', t: 'Gửi ưu đãi phụ kiện hợp đúng máy khách', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'T7 03/04/2027', chip: 'Ưu đãi khách quen', d: 800 },
    { k: 'zns', zns: { banner: ['op-lung', 'phu-kien', 'tai-nghe', 'sac'], nhan: 'ƯU ĐÃI KHÁCH QUEN · GIẢM 20%', mau: '#1D4ED8',
        tieuDe: 'Phụ kiện hợp đúng máy 16 Pro Max của anh',
        noiDung: 'Ốp lưng, cường lực, tai nghe, củ sạc giảm **20%** cho khách quen, ghé cửa hàng là lắp thử ngay. Mã **NAMPHONG20**, dùng đến hết 30/04/2027.',
        nut: 'Xem ưu đãi' }, d: 4800 },

    { k: 'tongket', d: 8500 },
    { k: 'outro', d: 5200 },
  ],
  // Slide tổng kết cuối video: theo mẫu dàn âm thanh (cột 3 là "Bám đuổi", 5 tin trong 7 ngày)
  tongKet: { tieuDe: 'Quy trình Preny AI giúp', em: 'tăng tỷ lệ khách tới cửa hàng', cot: [
    { ten: 'Khách hàng', icon: 'users', dong: ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến'] },
    { ten: 'AI Chatbot', icon: 'bot', dong: ['Phản hồi nhanh tức thì', 'Báo giá, gửi ảnh máy thật', 'Mời qua xem máy, thu cũ tại quầy', 'Lấy SĐT, giữ máy cho khách'] },
    { ten: 'Bám đuổi', icon: 'heart', dong: ['Gửi 5 tin nhắn trong 7 ngày: máy thật, khách thật, bảo hành, quy trình'] },
    { ten: 'Khách tới cửa hàng', icon: 'calendar', dong: ['Khách cầm máy, kiểm tra tận tay', 'Nhân viên quầy chốt máy'] },
    { ten: 'Mua lại', icon: 'refresh', dong: ['Mời kiểm tra máy định kỳ, gửi ưu đãi phụ kiện qua FB và Zalo'] },
  ] },
  panels: {
    tag: { av: 'ĐL', ten: 'Lê Minh Đức', sub: 'Messenger · từ quảng cáo iPhone 16 Pro Max like new',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#iphone16promax', 'qt hot'], ['#likenew', 'qt hot'], ['#xemmaytaicuahang', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#ThuCuDoiMoi', 'qt']]]],
      im: 'Khách im từ 14:49, chưa để lại SĐT',
      rule: { lb: 'Bám đuổi theo thẻ #iphone16promax', tieuDe: 'Bám đuổi bằng 5 tin ngắn',
              dong: [['15 phút', 'Ảnh máy thật, quầy trưng bày'], ['1 ngày', 'Feedback khách đổi máy'], ['1 ngày', 'Máy zin, check IMEI, bảo hành'],
                     ['1 ngày', 'Quy trình: xem máy, thu cũ, chuyển dữ liệu'], ['2 ngày', 'Mời giữ máy tới khi khách ghé']] },
      reply: 'Khách hẹn ghé cửa hàng · dừng bám đuổi' },
    sale: { tieuDe: 'Báo khách mới cho cửa hàng', ntTieuDe: 'Khách mới vừa để lại SĐT', khNhan: 'Khách hàng · Số điện thoại', lichNhan: 'Hẹn ghé cửa hàng',
      nguon: 'Quảng cáo iPhone 16 Pro Max like new → Messenger', ten: 'Lê Minh Đức', sdt: '0938 274 615',
      nhuCau: 'iPhone 16 Pro Max 256GB, thu cũ 13 Pro 128GB, ở Dĩ An', lich: 'Cửa hàng Thủ Đức · 18:00 Thứ Tư 02/12',
      the: [['#iphone16promax', 'qt'], ['#ThuCuDoiMoi', 'qt'], ['Đã cho SĐT', 'ok']],
      sale: { av: 'NG', ten: 'Chị Ngân · Quầy Thủ Đức', sub: 'Đang trực · nhận khách tự động' }, ok: 'Chị Ngân đã nhận khách, gọi xác nhận ngay' },
    capi: { tieuDe: 'Gửi khách tiềm năng cho Facebook', event: 'Lead', nhan: 'SỰ KIỆN KHÁCH TIỀM NĂNG', giaTri: 'Có SĐT', pk: 'Lead · khách để lại SĐT',
      dong: [['Khách', 'Lê Minh Đức · đã để lại SĐT'], ['Nguồn khách', 'Quảng cáo iPhone 16 Pro Max like new → Messenger'], ['Nhu cầu', 'Xem máy tại cửa hàng, thu cũ đổi mới'], ['Event ID', 'NP0112-LEAD (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện Lead', khong: 'Không gửi Purchase khi khách chưa tới cửa hàng mua máy.' },
  },
};
