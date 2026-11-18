/* Kịch bản Bài 2 (video demo NGANG 16:9 tự chạy): IN ÁO THEO YÊU CẦU · nhóm thương mại điện tử, theo mạch mẫu YaMe (18/11/2026).
   Nội dung lấy từ bài 1 (demo/kich-ban/in-ao-tc.js): Xưởng In Áo An Vy, 80 áo polo in logo (bình luận anh Tâm, in lụa),
   35 áo lớp in DTF tên, số đi Đà Lạt (chị Ngọc Anh, 129.000đ/áo → chốt trong ngày 119.000đ/áo + tặng 35 túi rút, tổng 4.165.000đ),
   hoodie nỉ bông 249.000đ; ca khó: bạn 95kg mặc 3XL, bạn nữ nhỏ mặc S; bảng size khách gửi thiếu 1 áo → AI hỏi lại.
   Tên shop, khách, SĐT, giá, ưu đãi: dữ liệu minh họa. Ảnh: ảnh có sẵn của bài 1 (Unsplash, không phải hàng của shop). */
window.VN_KB = {
  ten: 'In áo theo yêu cầu video ngang',
  ketSub: 'Để AI bán hàng cho xưởng in áo của bạn',
  shop: { ten: 'Xưởng In Áo An Vy', av: 'AV', mau: '#DB2777', sub: 'Thường trả lời ngay' },
  anh: {
    'ao-nhom': '../assets/img/u/1702564635728-7aeacaa370c8_800x800.jpg',  // nhóm bạn mặc áo in
    'ao-do': '../assets/img/u/1519568470290-c0c1fbfff16f_800x800.jpg',    // áo đỏ in chữ
    'ao-vang': '../assets/img/u/1720278726501-8576150684aa_800x800.jpg',  // áo vàng in chữ
    'in-lua': '../assets/img/u/1614494731690-53925976ea29_800x800.jpg',   // máy in lụa
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

    /* ================= TÌNH HUỐNG 1 · BÀI VIẾT → BÌNH LUẬN → INBOX ================= */
    { k: 'canh', nhan: 'Tình huống 1 · Bình luận xin giá → Inbox', gio: '20:32' },
    { k: 'fb', post: {
        gio: '2 giờ', img: 'polo', likes: '1,1K', soCmt: '74 bình luận',
        text: 'Đồng phục công ty, áo nhóm in logo theo yêu cầu 👕 Lên mẫu miễn phí, 1 áo cũng in, đủ size S tới 3XL.',
      }, d: 1600 },
    { k: 'cap', e: 'Bình luận xin giá', t: 'Khách hỏi giá ngay dưới bài viết', s: 'Một khách khác hỏi size cho bạn 95kg' },
    { k: 'cmt', i: 0, ten: 'Hoàng Tâm', av: 'HT', text: 'Cty mình cần 80 áo polo in logo, giá sao shop?' },
    { k: 'cmt', i: 1, ten: 'Quốc Bảo', av: 'QB', text: 'Bạn nam 95kg có size vừa không shop?' },
    { k: 'cap', e: 'Trả lời cả 2 bình luận', t: 'Trả lời ngắn gọn, mời khách vào inbox', s: 'Tư vấn chi tiết trong tin nhắn riêng' },
    { k: 'rep', i: 0, text: 'Mình check ib shop nha 💬' },
    { k: 'rep', i: 1, text: 'Mình check ib shop nha 💬' },

    { k: 'ms', ref: { loai: 'cmt', img: 'polo', dong1: 'Bạn đã bình luận về bài viết của Xưởng In Áo An Vy', dong2: '"Cty mình cần 80 áo polo in logo, giá sao shop?"' }, gio: '20:34' },
    { k: 'cap', e: 'Tự động báo giá', t: 'Inbox trước: báo giá, gửi ảnh thật', s: 'Viết ngắn gọn, tự nhiên như người bán' },
    { k: 'ai', text: 'Dạ chào anh Tâm, áo polo in logo bên em giá **159.000đ/áo** cho 80 áo ạ, làm **5–7 ngày**.' },
    { k: 'ai', card: { title: 'Áo polo đồng phục cá sấu 4 chiều · In logo theo yêu cầu · Size S – 3XL', gia: '159.000đ', cu: '169.000đ' } },
    { k: 'ai', imgs: ['polo', 'in-lua'] },
    { k: 'ai', text: 'Logo công ty mình mấy màu để em chọn kiểu in cho chuẩn nha anh?' },
    { k: 'cap', e: 'Tư vấn kiểu in', t: 'Khách trả lời 1 câu, AI chọn đúng kiểu in', s: 'Logo ít màu, số lượng nhiều → in lụa' },
    { k: 'kh', text: 'logo 2 màu, in ngực trái. áo đen nha e' },
    { k: 'ai', text: 'Dạ logo 2 màu em **in lụa** cho bền, giá tốt hơn DTF ạ, polo đen đủ size. Anh gửi em **SĐT và địa chỉ** để em lên đơn nha 😊' },
    { k: 'cap', e: 'Chốt đơn', t: 'Xin SĐT, địa chỉ: khách đưa đủ', s: 'AI tóm tắt đơn ngay trong chat' },
    { k: 'kh', text: '0903 527 814, 25 Cộng Hòa, Tân Bình' },
    { k: 'ai', text: 'Dạ em lên đơn cho anh rồi nha:\n– 80 áo polo đen, in lụa logo 2 màu ngực trái\n– **159.000đ/áo**, tổng **12.720.000đ**\n– 0903 527 814\n– 25 Cộng Hòa, Tân Bình\nShop gửi mẫu cho anh duyệt rồi in liền ạ 🎉', d: 3800 },

    /* ================= TÌNH HUỐNG 2 · QUẢNG CÁO → MESSENGER ================= */
    { k: 'canh', nhan: 'Tình huống 2 · Quảng cáo → Messenger', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'ao-nhom', nhan: 'MESSENGER', tieuDe: 'Áo lớp in tên, số · Nhắn shop lên mẫu', nut: 'Gửi tin nhắn',
        text: 'Áo lớp in tên, số riêng từng bạn 👕 In DTF nhiều màu, giặt máy thoải mái. Lên mẫu miễn phí trong 2 tiếng, size S tới 3XL. #aolop #intenso #mobile',
      }, d: 1500 },
    { k: 'cap', e: 'Quảng cáo Facebook', t: 'Khách bấm "Gửi tin nhắn" từ quảng cáo', s: 'Hỏi gì, AI trả lời ngay lập tức' },
    { k: 'tap', d: 1100 },
    { k: 'ms', ref: { loai: 'ad', img: 'ao-nhom', dong1: 'Ngọc Anh đã trả lời một quảng cáo', dong2: 'Áo lớp in tên, số · In DTF' }, gio: '14:47', d: 900 },
    { k: 'kh', text: 'Áo này in 35 cái giá sao shop?' },
    { k: 'cap', e: 'Khách hỏi giá', t: 'AI gửi đúng mẫu trên quảng cáo kèm giá', s: 'Khách không cần mô tả lại sản phẩm' },
    { k: 'ai', text: 'Dạ chào chị Ngọc Anh, áo lớp trên quảng cáo in trước + **tên, số sau lưng** giá **129.000đ/áo** cho 35 áo ạ.' },
    { k: 'ai', img: 'ao-nhom' },
    { k: 'ai', text: 'Lớp mình cần áo ngày nào để em báo kịp lịch in nha chị?' },
    { k: 'cap', e: 'Không hỏi lại khách', t: 'Khách chụp mẫu khác hỏi "Này thì sao"', s: 'Chỉ một câu cộc lốc, không ghi tên mẫu' },
    { k: 'kh', shot: { img: 'hoodie', cap: 'Hoodie nỉ bông in logo lớp, đi Đà Lạt ấm áp cả ngày 🔥' } },
    { k: 'kh', text: 'Này thì sao' },
    { k: 'cap', e: 'Nhận diện sản phẩm từ ảnh', t: 'Đúng mẫu. Đúng giá. Đúng lịch in.', s: 'AI đọc ảnh khách gửi, khớp với kho sản phẩm của shop' },
    { k: 'ai', text: 'Dạ đây là **hoodie nỉ bông có mũ** ạ, in logo lớp được, đủ size S tới 3XL chị nha.' },
    { k: 'ai', card: { title: 'Hoodie nỉ bông có mũ · In logo, tên theo yêu cầu · Size S – 3XL', gia: '249.000đ', cu: '279.000đ' } },
    { k: 'ai', img: 'hoodie' },
    { k: 'ai', text: 'Chị cho em xin ngày lớp cần áo để em báo lịch in cả 2 mẫu nha.' },

    // Khách im → màn hình phụ: gắn thẻ (3 hashtag của quảng cáo + thẻ từ cuộc chat), bám đuổi 3 tin theo thẻ
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Preny tự gắn thẻ đúng mẫu khách quan tâm', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi theo thẻ', t: '3 tin ngắn: 15 phút, 3 tiếng, 20 tiếng', s: 'Chỉ nói về đúng mẫu khách quan tâm' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Chị Ngọc Anh ơi, shop **lên mẫu miễn phí trong 2 tiếng** cho lớp mình ạ. Chị nhắn em ngày cần áo để em giữ lịch in nha 😊' },
    { k: 'p', a: 'r1', d: 900 },
    { k: 'time', nhan: '3 tiếng sau', gio: '17:49', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Em gửi chị mẫu áo nhóm shop vừa in nha 📸 In DTF sắc nét, giặt máy vẫn bền màu.' },
    { k: 'ai', img: 'ao-vang' },
    { k: 'p', a: 'r2', d: 900 },
    { k: 'time', nhan: '20 tiếng sau', gio: '10:49', ngay: 'T5 19/11/2026', d: 700 },
    { k: 'ai', text: '35 áo chị hỏi, chốt **trước 17h hôm nay** em để **119.000đ/áo + tặng 35 túi rút** ạ 🎁 Em giữ lịch in cho lớp mình nha?' },
    { k: 'p', a: 'r3', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 3, khách trả lời để chốt đơn', s: 'AI báo lịch in ngay khi khách nhắn' },
    { k: 'kh', text: 'Thứ 7 tuần sau lớp đi Đà Lạt rồi e' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },

    { k: 'cap', e: 'Báo lịch in', t: 'In 3–4 ngày: kịp trước thứ 7 đi Đà Lạt', s: 'Rồi chủ động hỏi: lấy áo thun hay hoodie?' },
    { k: 'ai', text: 'Dạ in **3–4 ngày**, kịp trước thứ 7 ạ. Chị lấy áo thun hay hoodie để em lên đơn nha?' },
    { k: 'kh', text: 'Lấy áo thun nha e' },
    { k: 'cap', e: 'Hỏi đúng thứ còn thiếu', t: 'Khách chọn áo thun: AI hỏi tiếp màu áo', s: 'Gửi ảnh 2 màu để khách chọn nhanh' },
    { k: 'ai', text: 'Dạ áo thun có màu **Đen** và **Đỏ**, cùng giá **119.000đ/áo** ạ. Lớp mình chọn màu nào nha chị?' },
    { k: 'ai', imgs: ['ao-den', 'ao-do'] },
    { k: 'kh', text: 'Đen e. Lớp có 2 bạn nam 95kg với mấy bạn nữ nhỏ xíu' },
    { k: 'ai', text: 'Dạ bạn 95kg mặc **3XL**, bạn nữ dưới 45kg mặc **S** ạ. Chị gửi em **số áo từng size**, **SĐT và địa chỉ** nhận áo nha.' },
    { k: 'cap', e: 'Kiểm tra dữ liệu', t: 'Bảng size thiếu 1 áo → hỏi lại ngay', s: 'Lớp 35 bạn, khách gửi mới đủ 34 áo' },
    { k: 'kh', text: 'S4 M10 L11 XL6 XXL1 3XL2. 0976135246, ktx khu B ĐHQG Dĩ An' },
    { k: 'ai', text: 'Dạ em ghi SĐT, địa chỉ rồi ạ, nhưng bảng size mới cộng được **34 áo**, lớp mình 35 bạn. Chị kiểm tra lại giúp em nha.' },
    { k: 'kh', text: 'À L 12 nha e' },
    { k: 'cap', e: 'Chốt đơn', t: 'Tự tổng hợp đơn: mẫu, màu, size, SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ chị kiểm tra lại đơn giúp em nha:\n– 35 áo thun đen, in DTF trước + tên, số sau\n– S 4 · M 10 · L 12 · XL 6 · XXL 1 · 3XL 2\n– Tổng: **4.165.000đ** (119.000đ/áo, tặng 35 túi rút)\n– 0976 135 246\n– KTX khu B, ĐHQG, Dĩ An, Bình Dương\nChị xác nhận giúp em đơn này nha.', nut: 'Quản lý đơn hàng', d: 3800 },
    { k: 'cap', e: 'Xong', t: 'Khách chỉ cần nói "Ok e"' },
    { k: 'kh', text: 'Ok e' },
    { k: 'ai', text: 'Dạ em lên đơn và lên mẫu cho lớp mình liền nha ⚡', d: 1300 },

    // Chốt đơn → màn hình phụ: gửi đơn hàng cho Facebook → đơn tự động
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

    // Mua xong: tin cảm ơn kèm 5 món in cùng mẫu đang giảm giá
    { k: 'cap', e: 'Bán thêm sau mua', t: 'Cảm ơn khách, gửi kèm 5 món đang giảm giá', s: 'Khách bấm "Mua ngay" ngay trong Messenger' },
    { k: 'ai', text: 'Dạ cảm ơn chị Ngọc Anh nha 🎉 Shop gửi mẫu cho lớp duyệt ngay ạ. Mấy món in cùng mẫu áo đang giảm giá, chị xem thử nha:' },
    { k: 'car', sp: [
        { img: 'hoodie', ten: 'Hoodie nỉ bông in logo lớp', gia: '249.000đ', cu: '279.000đ', giam: '-11%' },
        { img: 'mu', ten: 'Mũ lưỡi trai in logo', gia: '79.000đ', cu: '99.000đ', giam: '-20%' },
        { img: 'tui-tote', ten: 'Túi tote canvas in hình', gia: '59.000đ', cu: '75.000đ', giam: '-21%' },
        { img: 'coc', ten: 'Cốc sứ in tên từng bạn', gia: '69.000đ', cu: '89.000đ', giam: '-22%' },
        { img: 'polo', ten: 'Áo polo đồng phục', gia: '169.000đ', cu: '199.000đ', giam: '-15%' },
      ], d: 5200 },

    // Chăm sóc sau bán qua Zalo
    { k: 'zalo', gio: '19:30', ngay: 'CN 29/11/2026', chip: 'Sau chuyến đi · khách đã nhận áo', d: 1500 },
    { k: 'cap', e: 'Chăm sóc sau bán qua Zalo', t: 'Sau chuyến đi: AI hỏi áo mặc có ưng không', s: 'Xin đánh giá ngay trong tin Zalo OA của shop' },
    { k: 'zns', zns: {
        img: 'ao-nhom', tieuDe: 'Lớp đi Đà Lạt vui không chị?',
        noiDung: 'An Vy cảm ơn lớp mình đã in áo đơn **#AV31528** (35 áo lớp · Đen). Áo in DTF chị nhớ giặt mặt trái, không ủi lên hình in nha. Đánh giá giúp shop nha!',
        nut: 'Đánh giá sản phẩm',
      }, d: 4200 },
    { k: 'cap', e: 'ZBS · Sản phẩm bán chạy', t: '1 tuần sau: gửi mẫu bán chạy qua Zalo', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'CN 06/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['hoodie', 'ao-den', 'polo', 'ao-vang'], nhan: 'TOP BÁN CHẠY TUẦN NÀY', mau: '#F97316',
        tieuDe: '🔥 Top bán chạy tuần này tại An Vy',
        noiDung: '**Hoodie** in logo lớp, áo thun **in tên, số** và áo **polo đồng phục** đang được khách An Vy đặt nhiều nhất tuần qua.',
        nut: 'Xem ngay',
      }, d: 4600 },
    { k: 'cap', e: 'ZBS · Khuyến mãi', t: '1 tuần sau nữa: gửi ưu đãi cho khách cũ', s: 'Kéo khách quay lại đặt tiếp, không cần khách nhắn' },
    { k: 'zstamp', gio: '19:30', ngay: 'CN 13/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['ao-xep', 'hoodie', 'mu', 'tui-tote'], nhan: 'MÙA KỶ YẾU · KHÁCH CŨ GIẢM 10%',
        tieuDe: 'Ưu đãi riêng cho khách cũ An Vy',
        noiDung: 'Áo kỷ yếu, hoodie lớp giảm **10%** cho đơn từ 20 áo (mã **ANVY10**), shop lưu sẵn file thiết kế của lớp. Hạn dùng đến 31/05/2027.',
        nut: 'Dùng voucher ngay',
      }, d: 4800 },

    { k: 'tongket', d: 8500 },
    { k: 'outro', d: 5200 },
  ],
  // Slide tổng kết cuối video: giống hệt YaMe
  tongKet: { tieuDe: 'Quy trình Preny AI giúp', em: 'tăng tỷ lệ chốt đơn', cot: [
    { ten: 'Khách hàng', icon: 'users', dong: ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến'] },
    { ten: 'AI Chatbot', icon: 'bot', dong: ['Phản hồi nhanh tức thì', 'Kêu gọi khách hàng mua hàng', 'Lấy thông tin và chốt đơn'] },
    { ten: 'Bám đuổi', icon: 'bell', dong: ['Gửi 5 tin nhắn trong 7 ngày để bám đuổi khách hàng'] },
    { ten: 'Chốt đơn', icon: 'check', dong: ['Lên đơn', 'Gửi sự kiện mua hàng lên Facebook'] },
    { ten: 'Mua lại', icon: 'refresh', dong: ['Tự động gửi 1 tin nhắn mỗi tuần qua FB và Zalo', 'Sản phẩm bán chạy, giảm giá, sản phẩm mới'] },
  ] },
  panels: {
    tag: { av: 'NA', ten: 'Trần Ngọc Anh', sub: 'Messenger · từ quảng cáo Áo lớp in tên, số',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#aolop', 'qt hot'], ['#intenso', 'qt hot'], ['#mobile', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#Hoodie', 'qt']]]],
      im: 'Khách im từ 14:49, sau khi được báo giá',
      rule: { lb: 'Bám đuổi theo thẻ #aolop', tieuDe: '3 tin ngắn về áo lớp in tên, số',
              dong: [['15 phút', 'Nhắc lên mẫu miễn phí 2 tiếng'], ['3 tiếng', 'Gửi mẫu áo shop vừa in'], ['20 tiếng', 'Ưu đãi giá, giữ lịch in']] },
      reply: 'Khách báo ngày cần áo · dừng bám đuổi' },
    capi: { tieuDe: 'Gửi đơn hàng cho Facebook', event: 'Purchase', nhan: 'SỰ KIỆN MUA HÀNG', giaTri: '4.165.000đ', pk: 'Purchase · 4.165.000đ',
      dong: [['Đơn hàng', '#AV31528 · 35 áo lớp in DTF'], ['Nguồn khách', 'Quảng cáo Áo lớp → Messenger'], ['Giá trị', '4.165.000 VND'], ['Event ID', 'AV31528-PURCHASE (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện mua hàng' },
  },
  donHang: {
    ma: '#AV31528', sp: 'Áo thun cotton 2 chiều · in DTF tên, số', bien: 'Đen · S–3XL · x35 · tặng 35 túi rút', img: 'ao-den', gia: '4.165.000đ',
    phi: ['Phí vận chuyển', 'freeship'],
    nv: { ten: 'Nhân viên Vy', av: 'VY' },
    ten: 'Trần Ngọc Anh', sdt: '0976 135 246', dc: 'KTX khu B, ĐHQG, Dĩ An, Bình Dương', gio: '11:08 · 19/11/2026',
  },
};
