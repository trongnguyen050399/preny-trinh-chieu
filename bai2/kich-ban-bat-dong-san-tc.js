/* Kịch bản video demo NGANG 16:9: BẤT ĐỘNG SẢN (đất nền, nhóm cân nhắc nhiều), làm 20/11/2026 theo người dùng:
   "bất động sản cân nhắc nhiều (xin sđt cho sale, rủ khách coi đất..)".
   Mạch cnn người dùng chốt 18/11/2026 (mẫu thẩm mỹ viện): 1 cảnh, KHÔNG có bình luận, chỉ 1 sản phẩm (lô đất nền 5x20 Đức Hòa).
   Mạch: logo → quảng cáo đất nền → khách bấm "Gửi tin nhắn", hỏi giá → AI gửi đúng ảnh quảng cáo + giá lô
   → hỏi mục đích, ngân sách → có 1,2 tỷ muốn vay, sợ chưa có sổ, sợ khu vắng, hỏi lên giá → AI: sổ riêng từng lô, ngân hàng hỗ trợ vay
   (tùy hồ sơ), đã có dân ở, KHÔNG hứa lên giá, mời đi xem đất có xe đưa đón, xin tên + SĐT → khách im → gắn thẻ + bám đuổi 5 tin
   → khách hẹn xem đất → xin SĐT, điểm đón → báo sale gọi ngay → gửi Lead lên Facebook → Zalo 3 tin → tổng kết → logo.
   Không lên đơn tự động: khách xem đất rồi sale mới chốt cọc. Không có tin nhắc trước giờ xem đất.
   Nội dung lấy từ bài 1 (demo/kich-ban/bat-dong-san-tc.js): đơn vị, giá, khách, SĐT, feedback, ưu đãi là dữ liệu minh họa.
   Ảnh: Unsplash có sẵn trong máy (ảnh thật, không phải dự án của khách). */
window.VN_KB = {
  ten: 'Bất động sản video ngang',
  ketSub: 'Để AI tư vấn và hẹn khách đi xem đất cho đội sale của bạn',
  shop: { ten: 'Nhà Đất Kim Phát', av: 'KP', mau: '#047857', sub: 'Thường trả lời ngay' },
  anh: {
    'dat-nen': '../assets/img/u/1747854805840-9be7d5e360e6_800x800.jpg',      // khu đất phân lô (ảnh quảng cáo)
    'duong-noi-bo': '../assets/img/u/1637555754372-54538a035312_800x800.jpg', // đường nội bộ
    'toan-canh': '../assets/img/u/1764222233275-87dc016c11dc_800x800.jpg',    // toàn cảnh từ trên cao
    'khu-dan-cu': '../assets/img/u/1776149420560-3e0ab05a0eac_800x800.jpg',   // khu dân cư
    'pho-cay': '../assets/img/u/1768061521909-d9c28e8677c9_800x800.jpg',      // phố nhà liền kề
    'nha-pho': '../assets/img/u/1774939234567-3bf081ab2bc0_800x800.jpg',      // nhà phố mới
    'nha-pho-2': '../assets/img/u/1774939234418-a61a50a28a40_800x800.jpg',    // nhà phố 3 tầng
    'tu-van': '../assets/img/u/1650784854382-6d3b15e07b94_800x800.jpg',       // chuyên viên tư vấn
    'bat-tay': '../assets/img/u/1781229771042-2a859f8f8022_800x800.jpg',      // bắt tay bên mô hình nhà
    'chia-khoa': '../assets/img/u/1744782351841-9cc6b86a5add_800x800.jpg',    // chìa khóa nhà
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= QUẢNG CÁO → MESSENGER (1 cảnh, không có bình luận, chỉ lô đất nền 5x20) ================= */
    { k: 'canh', nhan: 'Khách từ quảng cáo → Messenger', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'dat-nen', nhan: 'MESSENGER', tieuDe: 'Đất nền Đức Hòa · Sổ riêng từng lô', nut: 'Gửi tin nhắn',
        text: 'Đất nền Đức Hòa, Long An 🏡 Lô 5x20 thổ cư từ 1,65 tỷ, sổ riêng từng lô, đường nội bộ 12m, ngân hàng hỗ trợ vay. Cuối tuần có xe đưa đón đi xem đất miễn phí. #datnen #duchoa #xemdatmienphi',
      }, d: 1500 },
    { k: 'cap', e: 'Quảng cáo Facebook', t: 'Khách bấm "Gửi tin nhắn" từ quảng cáo', s: 'Hỏi gì, AI trả lời ngay lập tức' },
    { k: 'tap', d: 1100 },
    { k: 'ms', ref: { loai: 'ad', img: 'dat-nen', dong1: 'Hoàng Phong đã trả lời một quảng cáo', dong2: 'Đất nền Đức Hòa · Sổ riêng từng lô' }, gio: '14:47', d: 900 },
    { k: 'kh', text: 'Đất nền Đức Hòa giá sao em?' },
    { k: 'cap', e: 'Khách hỏi giá', t: 'AI gửi đúng ảnh trên quảng cáo kèm giá lô', s: 'Xem đất tận nơi rồi mới cọc' },
    { k: 'ai', text: 'Dạ chào anh Phong, lô **5x20 (100m²) thổ cư** bên em giá **từ 1,65 tỷ/lô**, đường nội bộ 12m ạ.' },
    { k: 'ai', img: 'dat-nen' },
    { k: 'cap', e: 'Hỏi đúng nhu cầu', t: 'Hỏi mua để ở hay giữ tài sản, ngân sách', s: 'Để lọc đúng lô cho khách' },
    { k: 'ai', text: 'Anh mua để **ở sau này** hay **giữ tài sản**, ngân sách khoảng bao nhiêu ạ, để em lọc lô hợp với anh?' },
    { k: 'kh', text: 'a 34t ở Bình Tân, có sẵn 1tỷ2 muốn vay thêm. mua để sau cất nhà cho ba mẹ. sợ đất chưa có sổ, khu vắng ko ai ở. mà có lên giá ko e?' },
    { k: 'cap', e: 'Mời đi xem đất', t: 'Nói rõ pháp lý, mời xem đất tận nơi', s: 'Không hứa lên giá, mức vay tùy ngân hàng duyệt' },
    { k: 'ai', text: 'Dạ lô bên em **sổ riêng từng lô**, công chứng sang tên ngay ạ. Phần thiếu anh vay được qua **ngân hàng liên kết**, mức vay tùy hồ sơ ngân hàng duyệt. Khu này đã có **nhiều hộ cất nhà ở** rồi anh.' },
    { k: 'ai', text: 'Giá sau này em không dám hứa ạ, anh nên xem tận nơi rồi tự đánh giá. Cuối tuần bên em có **xe đưa đón miễn phí đi xem đất**, xem cả sổ gốc. Anh cho em xin **tên và SĐT** để giữ chỗ xe nha 🏡' },

    // Khách im → màn hình phụ: gắn thẻ (hashtag quảng cáo + thẻ từ cuộc chat), bám đuổi 5 tin
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Preny tự gắn thẻ nhu cầu của khách', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi 5 tin', t: '5 tin: 15 phút, rồi cách 1 ngày, 1 ngày, 1 ngày, 2 ngày', s: 'Ảnh thực tế, khách đã mua, pháp lý, quy trình, giữ chỗ' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Anh Phong ơi, em gửi anh **ảnh thực tế** khu đất bên em chụp tuần này nha 🏡' },
    { k: 'ai', imgs: ['toan-canh', 'duong-noi-bo', 'khu-dan-cu'] },
    { k: 'p', a: 'r1', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '15:04', ngay: 'T5 19/11/2026', d: 700 },
    { k: 'ai', text: 'Đây là chia sẻ của một anh khách mua lô bên em năm ngoái ạ 💬' },
    { k: 'ai', review: { av: 'QH', ten: 'Quốc Hải', sub: 'đã đánh giá Nhà Đất Kim Phát', mau: '#F59E0B',
        text: 'Mình cũng sợ đất chưa có sổ nên ra tận nơi xem sổ gốc, công chứng trong tuần. Giờ cất nhà cho ba mẹ rồi, hàng xóm ở kín dãy.' } },
    { k: 'p', a: 'r2', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '15:04', ngay: 'T6 20/11/2026', d: 700 },
    { k: 'ai', img: 'nha-pho' },
    { k: 'ai', checks: { tieuDe: 'Pháp lý bên em thế này để anh yên tâm ạ:', dong: [
        '**Sổ riêng từng lô**, 100% thổ cư, xem sổ gốc tại văn phòng', 'Công chứng tại **phòng công chứng nhà nước**', '**Ngân hàng liên kết** hỗ trợ vay, tùy hồ sơ duyệt'] } },
    { k: 'p', a: 'r3', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '15:04', ngay: 'T7 21/11/2026', d: 700 },
    { k: 'ai', text: 'Buổi xem đất bên em là **đón anh → xem lô thực tế → xem sổ gốc → đưa anh về**, khoảng nửa ngày. Anh ưng mới cọc, không ép ạ 😊' },
    { k: 'ai', img: 'tu-van' },
    { k: 'p', a: 'r4', d: 800 },
    { k: 'time', nhan: '2 ngày sau', gio: '15:04', ngay: 'T2 23/11/2026', d: 700 },
    { k: 'ai', text: 'Sáng Chủ nhật 29/11 xe đi xem đất còn vài chỗ, anh muốn em giữ chỗ cho anh và gia đình không ạ?' },
    { k: 'p', a: 'r5', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 5, khách hẹn đi xem đất', s: 'AI giữ chỗ xe, xin SĐT ngay' },
    { k: 'kh', text: 'CN này a đi xem đc, 2 vợ chồng. giữ giúp a nha' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'ai', text: 'Dạ được ạ, xe xuất phát **8h sáng Chủ nhật 29/11**. Anh cho em xin **tên, SĐT và điểm đón** để giữ 2 chỗ nha 🏡' },
    { k: 'cap', e: 'Lấy SĐT', t: 'Khách để lại tên, SĐT, điểm đón', s: 'Đây là lúc AI chốt: chuyển khách cho người thật' },
    { k: 'kh', text: 'Phong, 0907 318 642, đón ở vòng xoay An Lạc nha e' },
    { k: 'ai', text: 'Dạ em giữ 2 chỗ xe **8h sáng CN 29/11**, đón ở vòng xoay An Lạc cho anh Phong rồi ạ. Anh Tuấn bên tư vấn sẽ gọi anh xác nhận và gửi trước bản đồ phân lô nha 🏡', d: 1800 },

    // Có SĐT → màn hình phụ: báo sale gọi ngay (không lên đơn tự động) → gửi Lead lên Facebook
    { k: 'cap', e: 'Báo ngay cho Sale', t: 'Có SĐT: báo chuyên viên gọi ngay', s: 'Không lên đơn tự động: xem đất rồi mới chốt cọc' },
    { k: 'panel', v: 'sale', d: 800 },
    { k: 'p', a: 's1', d: 700 }, { k: 'p', a: 's2', d: 500 }, { k: 'p', a: 's3', d: 500 }, { k: 'p', a: 's4', d: 600 },
    { k: 'p', a: 's5', d: 1600 }, { k: 'p', a: 's6', d: 2600 },
    { k: 'cap', e: 'Gửi Lead về Facebook', t: 'Khách để lại SĐT: gửi sự kiện Lead lên Facebook', s: 'Quảng cáo tìm thêm khách giống khách thật' },
    { k: 'panel', v: 'capi', d: 900 },
    { k: 'p', a: 'flow', d: 1500 }, { k: 'p', a: 'event', d: 1300 }, { k: 'p', a: 'ok', d: 3200 },
    { k: 'panel', v: null, d: 600 },

    // Sau buổi xem, qua Zalo: 3 tin (gửi lại thông tin lô đã xem; cập nhật thực tế khu đất; ưu đãi thanh toán nhanh)
    { k: 'cap', e: 'Chăm sóc sau buổi xem', t: 'Tối hôm xem: gửi lại thông tin lô đã xem', s: 'Tin gửi qua Zalo OA của đơn vị' },
    { k: 'zalo', gio: '19:30', ngay: 'CN 29/11/2026', chip: 'Sau buổi xem đất', d: 1500 },
    { k: 'zns', zns: { img: 'duong-noi-bo', sao: false, tieuDe: 'Thông tin 2 lô anh Phong xem sáng nay',
        noiDung: 'Kim Phát gửi lại anh thông tin lô đã xem:',
        dong: ['**Lô B12** · 5x20 thổ cư, mặt đường 12m · **1,65 tỷ**', '**Lô B14** · 5x20 thổ cư, gần công viên · **1,72 tỷ**', 'Cần tính vay: anh Tuấn hỗ trợ lập phương án'],
        nut: 'Nhắn chuyên viên' }, d: 5000 },
    { k: 'cap', e: 'Cập nhật khu đất', t: '1 tuần sau: cập nhật thực tế khu đất', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '10:00', ngay: 'CN 06/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: { banner: ['toan-canh', 'khu-dan-cu', 'nha-pho', 'pho-cay'], nhan: 'CẬP NHẬT KHU ĐẤT', mau: '#F97316',
        tieuDe: 'Khu đất Đức Hòa tuần này',
        noiDung: 'Thêm **3 hộ khởi công** cất nhà, đường nội bộ đã **thảm nhựa xong**. Lô B12 anh xem vẫn đang giữ cho anh nha.',
        nut: 'Xem ảnh mới' }, d: 4600 },
    { k: 'cap', e: 'Ưu đãi thanh toán nhanh', t: 'Gửi ưu đãi đúng lô khách đã xem', s: 'Kéo khách quay lại chốt cọc' },
    { k: 'zstamp', gio: '19:30', ngay: 'T6 11/12/2026', chip: 'Ưu đãi tháng 12', d: 800 },
    { k: 'zns', zns: { banner: ['dat-nen', 'bat-tay', 'chia-khoa', 'nha-pho-2'], nhan: 'THÁNG 12 · CHIẾT KHẤU 2%', mau: '#047857',
        tieuDe: 'Ưu đãi thanh toán nhanh tháng 12',
        noiDung: 'Khách thanh toán nhanh trong tháng 12 được **chiết khấu 2%**, bên em **hỗ trợ phí công chứng**. Áp dụng đến hết 31/12/2026.',
        nut: 'Xem ưu đãi' }, d: 4800 },

    { k: 'tongket', d: 8500 },
    { k: 'outro', d: 5200 },
  ],
  // Slide tổng kết cuối video: lấy từ deck.chotLai của bài 1, theo mẫu thẩm mỹ viện (cột 3 là "Bám đuổi", 5 tin trong 7 ngày)
  tongKet: { tieuDe: 'Quy trình Preny AI giúp', em: 'tăng tỷ lệ hẹn xem đất', cot: [
    { ten: 'Khách hàng', icon: 'users', dong: ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến'] },
    { ten: 'AI Chatbot', icon: 'bot', dong: ['Phản hồi nhanh tức thì', 'Hỏi đúng mục đích, ngân sách', 'Không hứa lên giá', 'Lấy SĐT, hẹn xem đất'] },
    { ten: 'Bám đuổi', icon: 'heart', dong: ['Gửi 5 tin nhắn trong 7 ngày: ảnh thực tế, khách đã mua, pháp lý, quy trình'] },
    { ten: 'Xem đất', icon: 'calendar', dong: ['Sale đưa khách xem lô, xem sổ gốc', 'Tính vay, chốt cọc tại chỗ'] },
    { ten: 'Giới thiệu', icon: 'refresh', dong: ['Gửi lô mới mở bán, ưu đãi khách giới thiệu người quen qua FB và Zalo'] },
  ] },
  panels: {
    tag: { av: 'HP', ten: 'Lê Hoàng Phong', sub: 'Messenger · từ quảng cáo Đất nền Đức Hòa',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#datnen', 'qt hot'], ['#duchoa', 'qt hot'], ['#xemdatmienphi', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#VayNganHang', 'qt']]]],
      im: 'Khách im từ 14:49, chưa để lại SĐT',
      rule: { lb: 'Bám đuổi theo thẻ #datnen', tieuDe: 'Bám đuổi bằng 5 tin ngắn',
              dong: [['15 phút', 'Ảnh thực tế khu đất'], ['1 ngày', 'Feedback khách đã cất nhà'], ['1 ngày', 'Pháp lý: sổ riêng, công chứng, vay'],
                     ['1 ngày', 'Quy trình xem đất, không ép cọc'], ['2 ngày', 'Mời giữ chỗ xe sáng Chủ nhật']] },
      reply: 'Khách hẹn xem đất Chủ nhật · dừng bám đuổi' },
    sale: { tieuDe: 'Báo khách mới cho Sale', ntTieuDe: 'Khách mới vừa để lại SĐT', khNhan: 'Khách hàng · Số điện thoại', lichNhan: 'Lịch xem đất',
      nguon: 'Quảng cáo Đất nền Đức Hòa → Messenger', ten: 'Lê Hoàng Phong', sdt: '0907 318 642',
      nhuCau: '34 tuổi, có 1,2 tỷ, muốn vay thêm, mua để sau cất nhà cho ba mẹ', lich: 'Xem đất · 08:00 Chủ nhật 29/11 · đón vòng xoay An Lạc',
      the: [['#datnen', 'qt'], ['#VayNganHang', 'qt'], ['Đã cho SĐT', 'ok']],
      sale: { av: 'AT', ten: 'Anh Tuấn · Chuyên viên tư vấn', sub: 'Đang trực · nhận khách tự động' }, ok: 'Anh Tuấn đã nhận khách, gọi xác nhận ngay' },
    capi: { tieuDe: 'Gửi khách tiềm năng cho Facebook', event: 'Lead', nhan: 'SỰ KIỆN KHÁCH TIỀM NĂNG', giaTri: 'Có SĐT', pk: 'Lead · khách để lại SĐT',
      dong: [['Khách', 'Lê Hoàng Phong · đã để lại SĐT'], ['Nguồn khách', 'Quảng cáo Đất nền Đức Hòa → Messenger'], ['Nhu cầu', 'Đi xem đất, lô 5x20 thổ cư'], ['Event ID', 'KP2311-LEAD (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện Lead', khong: 'Không gửi Purchase khi khách chưa cọc.' },
  },
};
