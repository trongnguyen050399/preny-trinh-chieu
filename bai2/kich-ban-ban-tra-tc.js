/* Bài 2 (video demo ngang tự chạy): BÀN TRÀ, nhóm thương mại điện tử. Viết lại 18/11/2026 theo mạch mới (mẫu Yến chưng tươi):
   - 1 cảnh duy nhất: bài quảng cáo bàn trà me tây nguyên khối, 2 khách bình luận (hỏi giá, hỏi gỗ có nứt không) → trả lời cả 2 "Mình check ib shop nha"
     → AI nhắn inbox trước: giá 2 cỡ bàn + đúng ảnh quảng cáo, hỏi 1 điều (phòng rộng bao nhiêu, tiếp mấy khách)
     → khách trả lời: phòng 4×5m, tiếp 5–6 khách, hỏi có phải đi đường nước không → AI chọn bản 1m6, giải đáp không cần đường nước
     → AI hỏi tấm vân gỗ → khách chọn tấm số 2 → AI xin SĐT + địa chỉ → khách im
     → gắn thẻ (3 hashtag quảng cáo + #baogia + #Ban1m6TamVan2) → bám đuổi 3 tin 15 phút, 3 tiếng, 20 tiếng → khách gửi SĐT + địa chỉ
     (ca khó: thiếu số nhà) → tóm tắt đơn → Purchase lên Facebook
     → đơn tự động, nhân viên bấm xác nhận → cảm ơn + 5 sản phẩm giảm giá → Zalo: hỏi thăm, bán chạy, khuyến mãi → tổng kết → logo.
   - Chỉ 1 sản phẩm từ đầu tới cuối (bàn trà me tây 1m6 có bếp đun, bơm tự động), không có đoạn khách hỏi sản phẩm khác.
   Nội dung lấy từ bài 1 (demo/kich-ban/ban-tra-tc.js): shop Bàn Trà Gia Mộc, bản 1m2 8.900.000đ, bản 1m6 12.900.000đ, anh Quang phòng 4×5m
   tiếp 5–6 khách, bơm hút từ bình 19 lít, gỗ sấy 10–12%, tấm vân số 2, đơn #GM62014, 27 Trần Não nhà phố.
   Tên shop, khách, SĐT, giá, ưu đãi: dữ liệu minh họa. Ảnh: ảnh có sẵn của bài 1 (Unsplash, không phải hàng của shop). */
window.VN_KB = {
  ten: 'Bàn trà video ngang',
  ketSub: 'Để AI tư vấn, bám đuổi và lên đơn bàn trà cho shop của bạn',
  shop: { ten: 'Bàn Trà Gia Mộc', av: 'GM', mau: '#92400E', sub: 'Thường trả lời ngay' },
  anh: {
    'ban-tra': '../assets/img/u/1531970227416-f0cddeb1f748_800x800.jpg',    // bàn trà có bộ ấm chén
    'mat-go': '../assets/img/u/1583596838470-10ae8e96a95a_800x800.jpg',     // mặt gỗ vân sẫm (tấm vân số 1)
    'van-go-1': '../assets/img/u/1628630468252-a086c2bc7255_800x800.jpg',   // mặt bàn nguyên tấm (tấm vân số 2)
    'don-go': '../assets/img/u/1540809799-5da9372c3f64_800x800.jpg',        // đôn gỗ
    'am-chen': '../assets/img/u/1548386581-23b700b33be0_800x800.jpg',       // ấm tử sa + chén
    'khay-tra': '../assets/img/u/1577016029703-cc22a7c0c28c_800x800.jpg',   // khay trà gỗ
    'tra-o-long': '../assets/img/u/1627894006066-b45786537103_800x800.jpg', // trà ô long
    'tra-shan': '../assets/img/u/1543060895-03f57478a710_800x800.jpg',      // trà shan tuyết
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= BÌNH LUẬN QUẢNG CÁO → INBOX (cảnh duy nhất) ================= */
    { k: 'canh', nhan: 'Bình luận quảng cáo → Inbox', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'ban-tra', nhan: 'MESSENGER', tieuDe: 'Bàn trà nguyên khối · Gỗ me tây', nut: 'Gửi tin nhắn',
        text: 'Bàn trà gỗ me tây nguyên khối 🍵 Có sẵn bếp đun và bơm nước tự động, không cần đi đường nước. Giao lắp miễn phí nội thành. #bantranguyenkhoi #gometay #mobile',
      }, d: 1500 },
    { k: 'cap', e: 'Bình luận hỏi giá', t: 'Khách hỏi giá ngay dưới quảng cáo', s: 'Một khách khác hỏi gỗ có bị nứt không' },
    { k: 'cmt', i: 0, ten: 'Lê Quang', av: 'LQ', text: 'Bàn này giá sao shop?' },
    { k: 'cmt', i: 1, ten: 'Thanh Tùng', av: 'TT', text: 'Gỗ nguyên khối để phòng máy lạnh có nứt không shop?' },
    { k: 'cap', e: 'Trả lời cả 2 bình luận', t: 'Trả lời ngắn gọn, mời khách vào inbox', s: 'Tư vấn chi tiết trong tin nhắn riêng' },
    { k: 'rep', i: 0, text: 'Mình check ib shop nha 💬' },
    { k: 'rep', i: 1, text: 'Mình check ib shop nha 💬' },
    { k: 'ms', ref: { loai: 'cmt', img: 'ban-tra', dong1: 'Bạn đã bình luận về quảng cáo của Bàn Trà Gia Mộc', dong2: '"Bàn này giá sao shop?"' }, gio: '14:47' },
    { k: 'cap', e: 'AI nhắn trước', t: 'Inbox trước: báo giá, gửi đúng ảnh quảng cáo', s: 'Khách không cần mô tả lại sản phẩm' },
    { k: 'ai', text: 'Dạ chào anh Quang, bàn trà me tây có bếp đun, bơm tự động: bản **1m2** giá **8.900.000đ**, bản **1m6** giá **12.900.000đ** ạ.' },
    { k: 'ai', img: 'ban-tra' },
    { k: 'ai', text: 'Phòng nhà mình rộng bao nhiêu, hay tiếp mấy khách để em chọn đúng cỡ bàn nha?' },

    { k: 'cap', e: 'Khách trả lời', t: 'Phòng 4×5m, 5–6 khách → bàn 1m6', s: 'Hỏi đi đường nước: AI giải đáp luôn' },
    { k: 'kh', text: 'Phòng 4x5m, hay tiếp 5-6 khách e. Có phải đi đường nước k?' },
    { k: 'ai', text: 'Dạ vậy anh lấy bản **1m6** là vừa ạ, giá **12.900.000đ**. Bơm hút nước từ **bình 19 lít** dưới gầm nên **không cần đi đường nước** nha anh.' },
    { k: 'cap', e: 'Hỏi đúng thứ còn thiếu', t: 'Có cỡ bàn rồi: AI hỏi tiếp tấm vân gỗ', s: 'Gửi ảnh thật để khách chọn nhanh' },
    { k: 'ai', text: 'Bản 1m6 đang còn **2 tấm vân**, mỗi tấm một khác ạ. Anh chọn **tấm số 1** hay **tấm số 2** nha?' },
    { k: 'ai', imgs: ['mat-go', 'van-go-1'] },
    { k: 'kh', text: 'Tấm số 2 nha e' },
    { k: 'cap', e: 'Xin thông tin lên đơn', t: 'Chọn xong: AI xin SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ em ghi **bàn 1m6, tấm vân số 2**, 12.900.000đ. Anh gửi em **SĐT và địa chỉ** nhận hàng để em lên đơn nha.' },

    // Khách im sau khi được xin SĐT, địa chỉ → màn hình phụ: gắn thẻ (3 hashtag quảng cáo + thẻ từ cuộc chat), bám đuổi 3 tin
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Chưa gửi SĐT: Preny tự gắn thẻ khách', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi theo thẻ', t: '3 tin ngắn: 15 phút, 3 tiếng, 20 tiếng', s: 'Chỉ nói về đúng tấm bàn khách đã chọn' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Anh Quang ơi, em giữ **tấm vân số 2** bản 1m6 cho anh rồi ạ. Anh gửi em SĐT, địa chỉ để em xếp lịch giao lắp nha 😊' },
    { k: 'p', a: 'r1', d: 900 },
    { k: 'time', nhan: '3 tiếng sau', gio: '17:49', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Em gửi anh ảnh thật **tấm vân số 2** nha 📸 Gỗ sấy tới độ ẩm 10–12% nên để phòng máy lạnh rất ít co ngót ạ.' },
    { k: 'ai', imgs: ['van-go-1', 'ban-tra'] },
    { k: 'p', a: 'r2', d: 900 },
    { k: 'time', nhan: '20 tiếng sau', gio: '10:49', ngay: 'T5 19/11/2026', d: 700 },
    { k: 'ai', text: 'Anh chỉ cần gửi **SĐT và địa chỉ** là em lên đơn liền, **giao lắp, chạy thử bếp miễn phí** nội thành ạ ⚡' },
    { k: 'p', a: 'r3', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 3, khách gửi SĐT, địa chỉ', s: 'AI kiểm tra ngay thông tin khách gửi' },
    { k: 'kh', text: '0909 112 358, đường Trần Não Thủ Đức, nhà phố' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'cap', e: 'Kiểm tra dữ liệu', t: 'Thiếu số nhà → hỏi lại ngay lập tức', s: 'Để xe giao và người khiêng tới đúng nhà' },
    { k: 'ai', text: 'Dạ em ghi SĐT rồi ạ. Đường **Trần Não** anh cho em xin thêm **số nhà** để xe giao đúng nha.' },
    { k: 'kh', text: '27 Trần Não e' },
    { k: 'cap', e: 'Chốt đơn', t: 'Tự tổng hợp đơn: bàn, tấm vân, SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ anh kiểm tra lại đơn giúp em nha:\n– Bàn trà me tây nguyên khối 1m6, tấm vân số 2\n– Tổng: **12.900.000đ** (giao lắp miễn phí)\n– Người nhận: Lê Quang · 0909 112 358\n– 27 Trần Não, TP. Thủ Đức · nhà phố\nAnh xác nhận giúp em đơn này nha.', nut: 'Quản lý đơn hàng', d: 3600 },
    { k: 'cap', e: 'Xong', t: 'Khách chỉ cần nói "Ok e"' },
    { k: 'kh', text: 'Ok e' },
    { k: 'ai', text: 'Dạ em lên đơn, xếp người khiêng và lắp bếp cho anh liền nha ⚡', d: 1300 },

    // Chốt đơn → màn hình phụ: gửi đơn hàng cho Facebook → đơn tự động → nhân viên xác nhận
    { k: 'cap', e: 'Gửi đơn về Facebook', t: 'Sự kiện mua hàng gửi ngay lên Facebook', s: 'Quảng cáo tối ưu theo đơn thật' },
    { k: 'panel', v: 'capi', d: 900 },
    { k: 'p', a: 'flow', d: 1500 }, { k: 'p', a: 'event', d: 1300 }, { k: 'p', a: 'ok', d: 2200 },
    { k: 'cap', e: 'Đơn hàng tự động', t: 'Đơn tự lên trên Preny. Shop chỉ việc giao.' },
    { k: 'panel', v: 'don', d: 900 },
    { k: 'p', a: 'f1', d: 550 }, { k: 'p', a: 'f2', d: 550 }, { k: 'p', a: 'f3', d: 550 }, { k: 'p', a: 'f4', d: 550 },
    { k: 'p', a: 'cho', d: 900 },
    { k: 'cap', e: 'Nhân viên xác nhận', t: 'Báo nhân viên: bấm 1 lần là đơn lên', s: 'Người thật kiểm tra lại trước khi giao' },
    { k: 'p', a: 'nv', d: 1700 }, { k: 'p', a: 'bam', d: 1100 },
    { k: 'p', a: 'xn', d: 3000 },
    { k: 'panel', v: null, d: 500 },

    // Mua xong: tin cảm ơn kèm 5 món dùng cùng bàn trà đang giảm giá
    { k: 'cap', e: 'Bán thêm sau mua', t: 'Cảm ơn khách, gửi kèm 5 món đang giảm giá', s: 'Khách bấm "Mua ngay" ngay trong Messenger' },
    { k: 'ai', text: 'Dạ cảm ơn anh Quang nha 🍵 Đơn đã được xác nhận, shop giao lắp, chạy thử bếp Chủ nhật 22/11 ạ. Mấy món dùng cùng bàn trà đang giảm giá, anh xem nha:' },
    { k: 'car', sp: [
        { img: 'don-go', ten: 'Bộ 6 đôn gỗ me tây', gia: '3.600.000đ', cu: '4.200.000đ', giam: '-14%' },
        { img: 'am-chen', ten: 'Bộ ấm tử sa kèm 6 chén', gia: '690.000đ', cu: '890.000đ', giam: '-22%' },
        { img: 'khay-tra', ten: 'Khay trà gỗ có ống thoát nước', gia: '650.000đ', cu: '790.000đ', giam: '-18%' },
        { img: 'tra-shan', ten: 'Trà Shan tuyết 500g', gia: '450.000đ', cu: '520.000đ', giam: '-13%' },
        { img: 'tra-o-long', ten: 'Trà Ô long 500g', gia: '320.000đ', cu: '380.000đ', giam: '-16%' },
      ], d: 5200 },

    // Chăm sóc sau bán qua Zalo
    { k: 'zalo', gio: '19:30', ngay: 'T4 25/11/2026', chip: '3 ngày sau · khách đã nhận bàn', d: 1500 },
    { k: 'cap', e: 'Chăm sóc sau bán qua Zalo', t: 'Khách nhận bàn: AI hỏi dùng có ổn không', s: 'Dặn vệ sinh bơm, xin đánh giá ngay trong tin Zalo OA' },
    { k: 'zns', zns: {
        img: 'ban-tra', tieuDe: 'Bàn trà dùng ổn không anh Quang?',
        noiDung: 'Gia Mộc cảm ơn anh đã nhận đơn **#GM62014** (Bàn trà me tây 1m6 · tấm vân số 2). Anh nhớ súc bơm bằng nước sạch 1 tháng/lần nha. Đánh giá giúp shop nha!',
        nut: 'Đánh giá sản phẩm',
      }, d: 4200 },
    { k: 'cap', e: 'ZBS · Sản phẩm bán chạy', t: '1 tuần sau: gửi mẫu bán chạy qua Zalo', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'T4 02/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['ban-tra', 'am-chen', 'tra-shan', 'don-go'], nhan: 'TOP BÁN CHẠY TUẦN NÀY', mau: '#F97316',
        tieuDe: '🔥 Top bán chạy tuần này tại Gia Mộc',
        noiDung: 'Bàn trà **me tây có bếp đun**, bộ **ấm tử sa** và **trà Shan tuyết** đang được khách Gia Mộc chọn nhiều nhất tuần qua.',
        nut: 'Xem ngay',
      }, d: 4600 },
    { k: 'cap', e: 'ZBS · Khuyến mãi', t: '1 tuần sau nữa: gửi ưu đãi cho khách cũ', s: 'Kéo khách quay lại mua tiếp, không cần khách nhắn' },
    { k: 'zstamp', gio: '19:30', ngay: 'T4 09/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['tra-o-long', 'tra-shan', 'khay-tra', 'am-chen'], nhan: 'TRÀ MỚI VỀ · KHÁCH CŨ GIẢM 10%',
        tieuDe: 'Ưu đãi riêng cho khách cũ Gia Mộc',
        noiDung: 'Trà Shan tuyết, Ô long vụ đông vừa về. Tặng anh voucher **200.000đ** (mã **GIAMOC200**) cho đơn từ 1.000.000đ, hạn đến 31/12/2026.',
        nut: 'Dùng voucher ngay',
      }, d: 4800 },

    { k: 'tongket', d: 8500 },
    { k: 'outro', d: 5200 },
  ],
  // Slide tổng kết cuối video (theo slide "Chốt lại 5 ô" nhóm thương mại điện tử; bám đuổi = 5 tin trong 7 ngày)
  tongKet: { tieuDe: 'Quy trình Preny AI giúp', em: 'tăng tỷ lệ chốt đơn', cot: [
    { ten: 'Khách hàng', icon: 'users', dong: ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến'] },
    { ten: 'AI Chatbot', icon: 'bot', dong: ['Phản hồi nhanh tức thì', 'Kêu gọi khách hàng mua hàng', 'Lấy thông tin và chốt đơn'] },
    { ten: 'Bám đuổi', icon: 'bell', dong: ['Gửi 5 tin nhắn trong 7 ngày để bám đuổi khách hàng'] },
    { ten: 'Chốt đơn', icon: 'check', dong: ['Lên đơn', 'Gửi sự kiện mua hàng lên Facebook'] },
    { ten: 'Mua lại', icon: 'refresh', dong: ['Tự động gửi 1 tin nhắn mỗi tuần qua FB và Zalo', 'Sản phẩm bán chạy, giảm giá, sản phẩm mới'] },
  ] },
  panels: {
    tag: { av: 'LQ', ten: 'Lê Quang', sub: 'Messenger · bình luận quảng cáo Bàn trà nguyên khối',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#bantranguyenkhoi', 'qt hot'], ['#gometay', 'qt hot'], ['#mobile', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#Ban1m6TamVan2', 'qt']]]],
      im: 'Khách im từ 14:49, sau khi được xin SĐT, địa chỉ',
      rule: { lb: 'Bám đuổi theo thẻ #bantranguyenkhoi', tieuDe: '3 tin ngắn về tấm bàn khách đã chọn',
              dong: [['15 phút', 'Đã giữ tấm vân số 2 cho khách'], ['3 tiếng', 'Gửi ảnh thật tấm vân gỗ'], ['20 tiếng', 'Chỉ cần SĐT, địa chỉ là lên đơn']] },
      reply: 'Khách gửi SĐT, địa chỉ · dừng bám đuổi' },
    capi: { tieuDe: 'Gửi đơn hàng cho Facebook', event: 'Purchase', nhan: 'SỰ KIỆN MUA HÀNG', giaTri: '12.900.000đ', pk: 'Purchase · 12.900.000đ',
      dong: [['Đơn hàng', '#GM62014 · Bàn trà 1m6, tấm vân số 2'], ['Nguồn khách', 'Bình luận quảng cáo Bàn trà nguyên khối → Messenger'], ['Giá trị', '12.900.000 VND'], ['Event ID', 'GM62014-PURCHASE (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện mua hàng' },
  },
  donHang: {
    ma: '#GM62014', sp: 'Bàn trà gỗ me tây nguyên khối 1m6', bien: 'Tấm vân số 2 · bếp đun, bơm tự động · x1', img: 'ban-tra', gia: '12.900.000đ',
    phi: ['Giao & lắp', 'miễn phí nội thành'],
    nv: { ten: 'Nhân viên Minh', av: 'NM' },
    ten: 'Lê Quang', sdt: '0909 112 358', dc: '27 Trần Não, TP. Thủ Đức, TP.HCM · nhà phố', gio: '11:05 · 19/11/2026',
  },
};
