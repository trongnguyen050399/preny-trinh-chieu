/* Bài 2 (video demo ngang tự chạy): IN ÁO THEO YÊU CẦU, nhóm thương mại điện tử. Viết lại 18/11/2026 theo mạch Yến chưng tươi người dùng chốt cùng ngày:
   - 1 cảnh duy nhất: bài quảng cáo áo lớp in tên, số, 2 khách bình luận (hỏi giá 35 áo, hỏi giặt máy có bong không) → trả lời cả 2 "Mình check ib shop nha"
     → AI nhắn inbox trước: giá + đúng ảnh quảng cáo, hỏi 1 điều (lớp cần áo ngày nào) → khách trả lời: thứ 7 tuần sau đi Đà Lạt, có bạn 95kg, bạn nữ nhỏ
     → AI báo lịch in 3–4 ngày, tư vấn size 3XL / S, hỏi màu áo → khách chọn Đen → AI xin bảng size, SĐT, địa chỉ → khách im
     → gắn thẻ (3 hashtag quảng cáo + #baogia + #AoDen) → bám đuổi 3 tin 15 phút, 3 tiếng, 20 tiếng → khách gửi bảng size, SĐT, địa chỉ
     (ca khó: bảng size mới cộng được 34 áo, lớp 35 bạn) → tóm tắt đơn → Purchase lên Facebook
     → đơn tự động, nhân viên bấm xác nhận → cảm ơn + 5 món in cùng mẫu đang giảm giá → Zalo: hỏi thăm, bán chạy, khuyến mãi → tổng kết → logo.
   - Chỉ 1 sản phẩm từ đầu tới cuối (35 áo lớp in tên, số), không có đoạn khách hỏi hoodie.
   Nội dung lấy từ bài 1 (demo/kich-ban/in-ao-tc.js): Xưởng In Áo An Vy, áo lớp 129.000đ/áo cho 35 áo, tặng 35 túi rút, freeship,
   chị Ngọc Anh (KTX khu B ĐHQG, Dĩ An), 5 món bán thêm (afterSale.sp), mã ANVY10 (afterSale.zbs).
   Tên shop, khách, SĐT, giá, ưu đãi: minh họa. Ảnh: ảnh có sẵn của bài 1 (Unsplash, không phải hàng của shop). */
window.VN_KB = {
  ten: 'In áo theo yêu cầu video ngang',
  ketSub: 'Để AI bán hàng cho xưởng in áo của bạn',
  shop: { ten: 'Xưởng In Áo An Vy', av: 'AV', mau: '#DB2777', sub: 'Thường trả lời ngay' },
  anh: {
    'ao-nhom': '../assets/img/u/1702564635728-7aeacaa370c8_800x800.jpg',  // nhóm bạn mặc áo in
    'ao-do': '../assets/img/u/1519568470290-c0c1fbfff16f_800x800.jpg',    // áo đỏ in chữ
    'ao-vang': '../assets/img/u/1720278726501-8576150684aa_800x800.jpg',  // áo vàng in chữ
    'in-lua': '../assets/img/u/1614494731690-53925976ea29_800x800.jpg',   // máy in ở xưởng
    'ao-den': '../assets/img/u/1618354691373-d851c5c3a990_800x800.jpg',   // áo thun đen in logo
    'hoodie': '../assets/img/u/1556821840-3a63f95609a7_800x800.jpg',      // hoodie nỉ xám
    'ao-xep': '../assets/img/u/1716951735063-3d60c2c288e4_800x800.jpg',   // áo thun xếp
    'polo': '../assets/img/u/1625910513399-c9fcba54338c_800x800.jpg',     // áo polo đen
    'mu': '../assets/img/u/1588850561407-ed78c282e89b_800x800.jpg',       // mũ lưỡi trai
    'tui-tote': '../assets/img/u/1574365569389-a10d488ca3fb_800x800.jpg', // túi tote
    'coc': '../assets/img/u/1616241673111-508b4662c707_800x800.jpg',      // cốc sứ
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= BÌNH LUẬN QUẢNG CÁO → INBOX (cảnh duy nhất) ================= */
    { k: 'canh', nhan: 'Bình luận quảng cáo → Inbox', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'ao-nhom', nhan: 'MESSENGER', tieuDe: 'Áo lớp in tên, số · Nhắn shop lên mẫu', nut: 'Gửi tin nhắn',
        text: 'Áo lớp in tên, số riêng từng bạn 👕 In DTF nhiều màu, giặt máy thoải mái. Lên mẫu miễn phí trong 2 tiếng, size S tới 3XL. #aolop #intenso #mobile',
      }, d: 1500 },
    { k: 'cap', e: 'Bình luận hỏi giá', t: 'Khách hỏi giá ngay dưới quảng cáo', s: 'Một khách khác hỏi giặt máy có bong không' },
    { k: 'cmt', i: 0, ten: 'Ngọc Anh', av: 'NA', text: 'Áo này in 35 cái giá sao shop?' },
    { k: 'cmt', i: 1, ten: 'Quốc Bảo', av: 'QB', text: 'Giặt máy có bong hình in không shop?' },
    { k: 'cap', e: 'Trả lời cả 2 bình luận', t: 'Trả lời ngắn gọn, mời khách vào inbox', s: 'Tư vấn chi tiết trong tin nhắn riêng' },
    { k: 'rep', i: 0, text: 'Mình check ib shop nha 💬' },
    { k: 'rep', i: 1, text: 'Mình check ib shop nha 💬' },
    { k: 'ms', ref: { loai: 'cmt', img: 'ao-nhom', dong1: 'Bạn đã bình luận về quảng cáo của Xưởng In Áo An Vy', dong2: '"Áo này in 35 cái giá sao shop?"' }, gio: '14:47' },
    { k: 'cap', e: 'AI nhắn trước', t: 'Inbox trước: báo giá, gửi đúng ảnh quảng cáo', s: 'Khách không cần mô tả lại sản phẩm' },
    { k: 'ai', text: 'Dạ chào chị Ngọc Anh, áo lớp trên quảng cáo in trước + **tên, số sau lưng** giá **129.000đ/áo** cho 35 áo ạ, lên mẫu miễn phí.' },
    { k: 'ai', img: 'ao-nhom' },
    { k: 'ai', text: 'Lớp mình **cần áo ngày nào** để em báo kịp lịch in nha chị?' },

    { k: 'cap', e: 'Khách trả lời', t: 'Thứ 7 đi Đà Lạt, có bạn 95kg', s: 'AI báo lịch in, tư vấn size từng bạn' },
    { k: 'kh', text: 'Thứ 7 tuần sau lớp đi Đà Lạt e. Có 2 bạn nam 95kg với mấy bạn nữ nhỏ xíu' },
    { k: 'ai', text: 'Dạ in **3–4 ngày**, kịp trước thứ 7 ạ. Bạn 95kg mặc **3XL**, bạn nữ dưới 45kg mặc **S**, áo có đủ size nha chị.' },
    { k: 'cap', e: 'Hỏi đúng thứ còn thiếu', t: 'Có size rồi: AI hỏi tiếp màu áo', s: 'Gửi ảnh 2 màu để khách chọn nhanh' },
    { k: 'ai', text: 'Áo thun có 2 màu **Đen** và **Đỏ**, cùng giá **129.000đ/áo** ạ. Lớp mình chọn màu nào nha?' },
    { k: 'ai', imgs: ['ao-den', 'ao-do'] },
    { k: 'kh', text: 'Đen e' },
    { k: 'cap', e: 'Xin thông tin lên đơn', t: 'Chọn xong: AI xin bảng size, SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ em ghi **35 áo thun đen**, in trước + tên, số sau. Chị gửi em **số áo từng size**, **SĐT và địa chỉ** nhận áo để em lên đơn nha.' },

    // Khách im sau khi được xin SĐT, địa chỉ → màn hình phụ: gắn thẻ (3 hashtag quảng cáo + thẻ từ cuộc chat), bám đuổi 3 tin
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Chưa gửi SĐT: Preny tự gắn thẻ khách', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi theo thẻ', t: '3 tin ngắn: 15 phút, 3 tiếng, 20 tiếng', s: 'Chỉ nói về đúng 35 áo khách đã chọn' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Chị Ngọc Anh ơi, em giữ lịch in **35 áo đen** cho lớp mình rồi ạ, kịp trước thứ 7. Chị gửi em bảng size, SĐT, địa chỉ nha 😊' },
    { k: 'p', a: 'r1', d: 900 },
    { k: 'time', nhan: '3 tiếng sau', gio: '17:49', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Em gửi chị ảnh thật mấy mẫu áo lớp shop vừa in nha 📸 Hình in sắc nét, giặt máy vẫn bền màu.' },
    { k: 'ai', imgs: ['ao-vang', 'ao-xep', 'in-lua'] },
    { k: 'p', a: 'r2', d: 900 },
    { k: 'time', nhan: '20 tiếng sau', gio: '10:49', ngay: 'T5 19/11/2026', d: 700 },
    { k: 'ai', text: 'Chị chỉ cần gửi **bảng size, SĐT và địa chỉ** là em lên mẫu liền, **freeship** và tặng **35 túi rút** cho lớp mình ạ ⚡' },
    { k: 'p', a: 'r3', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 3, khách gửi SĐT, địa chỉ', s: 'AI kiểm tra ngay thông tin khách gửi' },
    { k: 'kh', text: 'S4 M10 L11 XL6 XXL1 3XL2. 0976135246, ktx khu B ĐHQG Dĩ An' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'cap', e: 'Kiểm tra dữ liệu', t: 'Bảng size thiếu 1 áo → hỏi lại ngay', s: 'Lớp 35 bạn, khách gửi mới đủ 34 áo' },
    { k: 'ai', text: 'Dạ em ghi SĐT, địa chỉ rồi ạ. Bảng size mới cộng được **34 áo**, lớp mình 35 bạn, chị kiểm tra lại giúp em nha.' },
    { k: 'kh', text: 'À L 12 nha e' },
    { k: 'cap', e: 'Chốt đơn', t: 'Tự tổng hợp đơn: màu, size, SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ chị kiểm tra lại đơn giúp em nha:\n– 35 áo thun đen, in trước + tên, số sau\n– S 4 · M 10 · L 12 · XL 6 · XXL 1 · 3XL 2\n– Tổng: **4.515.000đ** (129.000đ/áo, tặng 35 túi rút, freeship)\n– Ngọc Anh · 0976 135 246\n– KTX khu B, ĐHQG, Dĩ An, Bình Dương\nChị xác nhận giúp em đơn này nha.', nut: 'Quản lý đơn hàng', d: 3800 },
    { k: 'cap', e: 'Xong', t: 'Khách chỉ cần nói "Ok e"' },
    { k: 'kh', text: 'Ok e' },
    { k: 'ai', text: 'Dạ em lên đơn, gửi mẫu cho lớp mình duyệt liền nha ⚡', d: 1300 },

    // Chốt đơn → màn hình phụ: gửi đơn hàng cho Facebook → đơn tự động → nhân viên xác nhận
    { k: 'cap', e: 'Gửi đơn về Facebook', t: 'Sự kiện mua hàng gửi ngay lên Facebook', s: 'Quảng cáo tối ưu theo đơn thật' },
    { k: 'panel', v: 'capi', d: 900 },
    { k: 'p', a: 'flow', d: 1500 }, { k: 'p', a: 'event', d: 1300 }, { k: 'p', a: 'ok', d: 2200 },
    { k: 'cap', e: 'Đơn hàng tự động', t: 'Đơn tự lên Preny. Xưởng chỉ việc in.' },
    { k: 'panel', v: 'don', d: 900 },
    { k: 'p', a: 'f1', d: 550 }, { k: 'p', a: 'f2', d: 550 }, { k: 'p', a: 'f3', d: 550 }, { k: 'p', a: 'f4', d: 550 },
    { k: 'p', a: 'cho', d: 900 },
    { k: 'cap', e: 'Nhân viên xác nhận', t: 'Báo nhân viên: bấm 1 lần là đơn lên', s: 'Người thật kiểm tra lại trước khi in' },
    { k: 'p', a: 'nv', d: 1700 }, { k: 'p', a: 'bam', d: 1100 },
    { k: 'p', a: 'xn', d: 3000 },
    { k: 'panel', v: null, d: 500 },

    // Mua xong: tin cảm ơn kèm 5 món in cùng mẫu đang giảm giá (afterSale.sp của bài 1)
    { k: 'cap', e: 'Bán thêm sau mua', t: 'Cảm ơn khách, gửi kèm 5 món đang giảm giá', s: 'Khách bấm "Mua ngay" ngay trong Messenger' },
    { k: 'ai', text: 'Dạ cảm ơn chị Ngọc Anh nha 🎉 Đơn đã được xác nhận, shop gửi mẫu cho lớp duyệt ngay ạ. Mấy món in cùng mẫu áo đang giảm giá, chị xem thử nha:' },
    { k: 'car', sp: [
        { img: 'hoodie', ten: 'Hoodie nỉ bông in logo lớp', gia: '249.000đ', cu: '279.000đ', giam: '-11%' },
        { img: 'mu', ten: 'Mũ lưỡi trai in logo', gia: '79.000đ', cu: '99.000đ', giam: '-20%' },
        { img: 'tui-tote', ten: 'Túi tote canvas in hình', gia: '59.000đ', cu: '75.000đ', giam: '-21%' },
        { img: 'coc', ten: 'Cốc sứ in tên từng bạn', gia: '69.000đ', cu: '89.000đ', giam: '-22%' },
        { img: 'polo', ten: 'Áo polo đồng phục', gia: '169.000đ', cu: '199.000đ', giam: '-15%' },
      ], d: 5200 },

    // Chăm sóc sau bán qua Zalo
    { k: 'zalo', gio: '19:30', ngay: 'T2 30/11/2026', chip: 'Sau chuyến đi · lớp đã nhận áo', d: 1500 },
    { k: 'cap', e: 'Chăm sóc sau bán qua Zalo', t: 'Sau chuyến đi: AI hỏi áo mặc có ưng không', s: 'Dặn cách giặt, xin đánh giá ngay trong tin Zalo OA' },
    { k: 'zns', zns: {
        img: 'ao-nhom', tieuDe: 'Lớp đi Đà Lạt vui không chị?',
        noiDung: 'An Vy cảm ơn lớp mình đã in áo đơn **#AV31528** (35 áo lớp · Đen). Chị nhớ giặt mặt trái, không ủi lên hình in để áo bền lâu nha. Đánh giá giúp shop nha!',
        nut: 'Đánh giá sản phẩm',
      }, d: 4200 },
    { k: 'cap', e: 'ZBS · Sản phẩm bán chạy', t: '1 tuần sau: gửi mẫu bán chạy qua Zalo', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'T2 07/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['hoodie', 'ao-den', 'polo', 'ao-vang'], nhan: 'TOP BÁN CHẠY TUẦN NÀY', mau: '#F97316',
        tieuDe: '🔥 Top bán chạy tuần này tại An Vy',
        noiDung: '**Hoodie** in logo lớp, áo thun **in tên, số** và áo **polo đồng phục** đang được khách An Vy đặt nhiều nhất tuần qua.',
        nut: 'Xem ngay',
      }, d: 4600 },
    { k: 'cap', e: 'ZBS · Khuyến mãi', t: '1 tuần sau nữa: gửi ưu đãi cho khách cũ', s: 'Kéo khách quay lại đặt tiếp, không cần khách nhắn' },
    { k: 'zstamp', gio: '19:30', ngay: 'T2 14/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['ao-xep', 'hoodie', 'mu', 'tui-tote'], nhan: 'MÙA KỶ YẾU · KHÁCH CŨ GIẢM 10%',
        tieuDe: 'Ưu đãi riêng cho khách cũ An Vy',
        noiDung: 'Áo kỷ yếu, hoodie lớp giảm **10%** cho đơn từ 20 áo (mã **ANVY10**), shop lưu sẵn file thiết kế của lớp. Hạn dùng đến 31/05/2027.',
        nut: 'Dùng voucher ngay',
      }, d: 4800 },

    { k: 'tongket', d: 8500 },
    { k: 'outro', d: 5200 },
  ],
  // Slide tổng kết cuối video (giống hệt file mẫu Yến chưng tươi)
  tongKet: { tieuDe: 'Quy trình Preny AI giúp', em: 'tăng tỷ lệ chốt đơn', cot: [
    { ten: 'Khách hàng', icon: 'users', dong: ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến'] },
    { ten: 'AI Chatbot', icon: 'bot', dong: ['Phản hồi nhanh tức thì', 'Kêu gọi khách hàng mua hàng', 'Lấy thông tin và chốt đơn'] },
    { ten: 'Bám đuổi', icon: 'bell', dong: ['Gửi 5 tin nhắn trong 7 ngày để bám đuổi khách hàng'] },
    { ten: 'Chốt đơn', icon: 'check', dong: ['Lên đơn', 'Gửi sự kiện mua hàng lên Facebook'] },
    { ten: 'Mua lại', icon: 'refresh', dong: ['Tự động gửi 1 tin nhắn mỗi tuần qua FB và Zalo', 'Sản phẩm bán chạy, giảm giá, sản phẩm mới'] },
  ] },
  panels: {
    tag: { av: 'NA', ten: 'Trần Ngọc Anh', sub: 'Messenger · bình luận quảng cáo Áo lớp in tên, số',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#aolop', 'qt hot'], ['#intenso', 'qt hot'], ['#mobile', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#AoDen', 'qt']]]],
      im: 'Khách im từ 14:49, sau khi được xin SĐT, địa chỉ',
      rule: { lb: 'Bám đuổi theo thẻ #aolop', tieuDe: '3 tin ngắn về 35 áo khách đã chọn',
              dong: [['15 phút', 'Đã giữ lịch in 35 áo đen'], ['3 tiếng', 'Gửi ảnh thật áo shop vừa in'], ['20 tiếng', 'Chỉ cần SĐT, địa chỉ là lên đơn']] },
      reply: 'Khách gửi SĐT, địa chỉ · dừng bám đuổi' },
    capi: { tieuDe: 'Gửi đơn hàng cho Facebook', event: 'Purchase', nhan: 'SỰ KIỆN MUA HÀNG', giaTri: '4.515.000đ', pk: 'Purchase · 4.515.000đ',
      dong: [['Đơn hàng', '#AV31528 · 35 áo lớp đen in tên, số'], ['Nguồn khách', 'Bình luận quảng cáo Áo lớp → Messenger'], ['Giá trị', '4.515.000 VND'], ['Event ID', 'AV31528-PURCHASE (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện mua hàng' },
  },
  donHang: {
    ma: '#AV31528', sp: 'Áo thun cotton 2 chiều · in tên, số', bien: 'Đen · S–3XL · x35 · tặng 35 túi rút', img: 'ao-den', gia: '4.515.000đ',
    phi: ['Phí vận chuyển', 'freeship'],
    nv: { ten: 'Nhân viên Vy', av: 'VY' },
    ten: 'Trần Ngọc Anh', sdt: '0976 135 246', dc: 'KTX khu B, ĐHQG, Dĩ An, Bình Dương', gio: '11:08 · 19/11/2026',
  },
};
