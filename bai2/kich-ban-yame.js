/* Kịch bản video demo NGANG 16:9 cho YaMe (dự án riêng, 18/11/2026, theo video mẫu videoah.mp4 người dùng gửi).
   Bố cục người dùng chọn: chú thích nhỏ bên trái, điện thoại cao full màn hình ở giữa, màn hình phụ bật ra bên phải điện thoại.
   Mạch:
   - Mở đầu: logo Preny "AGENTIC AI SALES" như video mẫu (bỏ đoạn chữ chạy 5–12 giây).
   - Cảnh 1: bài viết Facebook, khách hỏi giá ở bình luận, khách thứ hai hỏi tư vấn size → AI trả lời cả 2
     → AI nhắn inbox trước: báo giá, gửi ảnh thật, hỏi size → khách trả lời → xin SĐT, địa chỉ → khách đưa đủ → lên đơn.
   - Cảnh 2 (sửa lần 2, 18/11/2026): bài quảng cáo, khách bấm "Gửi tin nhắn" → khách nhắn trước hỏi giá → AI gửi đúng ảnh trên
     quảng cáo kèm giá → khách im sau khi AI xin chiều cao cân nặng (sửa 18/11/2026: bỏ đoạn khách chụp mẫu khác hỏi
     "Này thì sao", chỉ 1 mẫu áo thun NEVER SLEEPS từ đầu tới cuối)
     → màn hình phụ gắn thẻ, bám đuổi theo thẻ → chốt đơn → màn hình phụ gửi sự kiện mua hàng lên Facebook → đơn tự động
     → tin cảm ơn kèm carousel 5 mẫu đang giảm giá → chuyển sang Zalo: chăm sóc sau bán, hỏi dùng ổn không, khách chấm 5 sao → logo kết.
   Sản phẩm, giá, ảnh: lấy thật trên yame.vn (18/11/2026). Tên khách, SĐT, địa chỉ: minh họa (theo video mẫu).
   Thời lượng mỗi bước tự tính theo độ dài tin; muốn chỉnh nhịp thì thêm d: <ms> (thời gian giữ sau khi hiện) vào bước đó. */
window.VN_KB = {
  ten: 'YaMe video ngang',
  shop: { ten: 'YaMe', sub: 'Thường trả lời ngay' },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= CẢNH 1 · BÀI VIẾT → BÌNH LUẬN → INBOX ================= */
    { k: 'canh', nhan: 'Tình huống 1 · Bình luận xin giá → Inbox', gio: '21:14' },
    { k: 'fb', post: {
        gio: '2 giờ', img: 'p048-a', likes: '1,2K', soCmt: '86 bình luận',
        text: 'Nắng không lọt, gió không cản ☀️ Áo khoác chống nắng Parka Anti-UV™ UPF 50+, tay xỏ ngón che mu bàn tay khi chạy xe. Giá chỉ còn 299K!',
      }, d: 1600 },
    { k: 'cap', e: 'Bình luận xin giá', t: 'Khách hỏi giá ngay dưới bài viết', s: 'Một khách khác hỏi tư vấn size ở bình luận kế bên' },
    { k: 'cmt', i: 0, ten: 'Ngọc Hân', av: 'NH', text: 'Giá sao shop ơi?' },
    { k: 'cmt', i: 1, ten: 'Minh Khoa', av: 'MK', text: '1m75 68kg mặc size gì vừa shop, tư vấn giúp mình với' },
    { k: 'cap', e: 'Trả lời cả 2 bình luận', t: 'Trả lời ngắn gọn, mời khách vào inbox', s: 'Tư vấn chi tiết trong tin nhắn riêng' },
    { k: 'rep', i: 0, text: 'Mình check ib shop nha 💬' },
    { k: 'rep', i: 1, text: 'Mình check ib shop nha 💬' },

    { k: 'ms', ref: { loai: 'cmt', img: 'p048-a', dong1: 'Bạn đã bình luận về bài viết của YaMe', dong2: '"Giá sao shop ơi?"' }, gio: '21:16' },
    { k: 'cap', e: 'Tự động báo giá', t: 'Inbox trước: báo giá, gửi ảnh thật', s: 'Viết ngắn gọn, tự nhiên như người bán' },
    { k: 'ai', text: 'Dạ chào chị Hân, áo khoác chống nắng Parka 048 giá **299.000đ** ạ (giá gốc 497.000đ).' },
    { k: 'ai', card: { title: 'Áo Khoác Thun Chống Nắng Parka Anti-UV™ UPF 50+ Tay Xỏ Ngón - Non Branded 048', gia: '299.000đ', cu: '497.000đ' } },
    { k: 'ai', imgs: ['p048-be', 'p048-0', 'p048-e'] },
    { k: 'ai', text: 'Áo có 4 màu **Be, Xám, Đen, Xanh Lá Đậm**, chống tia UV, có xỏ ngón che tay khi chạy xe. Chị mặc size gì để em check hàng nha?' },
    { k: 'cap', e: 'Tư vấn size', t: 'Khách trả lời 1 câu, AI chọn đúng size', s: 'Kiểm tra luôn màu khách chọn còn hàng' },
    { k: 'kh', text: 'c hay mặc S, cao 1m58 nặng 48kg. lấy màu be nha e' },
    { k: 'ai', text: 'Dạ 1m58, 48kg chị mặc **size S** vừa đẹp ạ, Be size S còn hàng. Chị gửi em **SĐT và địa chỉ** để em lên đơn nha 😊' },
    { k: 'cap', e: 'Chốt đơn', t: 'Xin SĐT, địa chỉ: khách đưa đủ', s: 'AI tóm tắt đơn ngay trong chat' },
    { k: 'kh', text: '0916 284 517, 25 ngõ 102 Trường Chinh, Đống Đa, HN' },
    { k: 'ai', text: 'Dạ em lên đơn cho chị rồi nha:\n– Áo khoác chống nắng Parka 048, Be, size S\n– **299.000đ**\n– 0916 284 517\n– 25 ngõ 102 Trường Chinh, Đống Đa, HN\nShop gọi chị xác nhận rồi giao liền ạ 🎉', d: 3800 },

    /* ================= CẢNH 2 · QUẢNG CÁO → MESSENGER =================
       Sửa 18/11/2026 theo người dùng: khách nhắn trước hỏi giá; AI gửi đúng ảnh trên bài quảng cáo kèm giá; khách chụp mẫu khác
       hỏi "Này thì sao" (đã bỏ 18/11/2026, chỉ 1 mẫu); rồi như cũ. Mua xong: tin cảm ơn kèm 5 mẫu đang giảm giá; chăm sóc sau bán qua Zalo (hỏi dùng ổn không, xin đánh giá). */
    { k: 'canh', nhan: 'Tình huống 2 · Quảng cáo → Messenger', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'p207-model', nhan: 'MESSENGER', tieuDe: 'Streetwear F4 · Nhắn shop tư vấn size', nut: 'Gửi tin nhắn',
        text: 'NEVER SLEEPS 🌙 Áo thun vải lưới AirDry™ 240gsm thoát nhiệt siêu thoáng, phom rộng F4. Mặc đi chơi cuối tuần mát cả ngày. #neversleep #aothun #mobile',
      }, d: 1500 },
    { k: 'cap', e: 'Quảng cáo Facebook', t: 'Khách bấm "Gửi tin nhắn" từ quảng cáo', s: 'Hỏi gì, AI trả lời ngay lập tức' },
    { k: 'tap', d: 1100 },
    { k: 'ms', ref: { loai: 'ad', img: 'p207-model', dong1: 'Thanh đã trả lời một quảng cáo', dong2: 'Streetwear F4 · NEVER SLEEPS' }, gio: '14:47', d: 900 },
    { k: 'kh', text: 'Áo này giá bao nhiêu shop?' },
    { k: 'cap', e: 'Khách hỏi giá', t: 'AI gửi đúng mẫu trên quảng cáo kèm giá', s: 'Khách không cần mô tả lại sản phẩm' },
    { k: 'ai', text: 'Dạ chào anh Thanh, áo **NEVER SLEEPS** trên quảng cáo giá **263.150đ** ạ (giá gốc 277.000đ), đủ size S đến XXL.' },
    { k: 'ai', img: 'p207-model' },
    { k: 'ai', text: 'Anh cho em xin chiều cao, cân nặng để em tư vấn size nha.' },

    // Khách im → màn hình phụ: gắn thẻ (3 hashtag của bài quảng cáo + thẻ từ cuộc chat), bám đuổi 3 tin theo thẻ
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Preny tự gắn thẻ đúng mẫu khách quan tâm', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi theo thẻ', t: '3 tin ngắn: 15 phút, 3 tiếng, 20 tiếng', s: 'Chỉ nói về đúng mẫu khách quan tâm' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Anh Thanh ơi, áo **NEVER SLEEPS** size M, L bản xanh còn ít lắm ạ. Anh nhắn em chiều cao, cân nặng để em giữ size nha 😊' },
    { k: 'p', a: 'r1', d: 900 },
    { k: 'time', nhan: '3 tiếng sau', gio: '17:49', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Em gửi anh ảnh mặc thật nha 📸 Vải lưới AirDry™, mặc cả ngày vẫn mát.' },
    { k: 'ai', img: 'p207-xam' },
    { k: 'p', a: 'r2', d: 900 },
    { k: 'time', nhan: '20 tiếng sau', gio: '10:49', ngay: 'T5 19/11/2026', d: 700 },
    { k: 'ai', text: 'Áo **NEVER SLEEPS** vẫn còn size M, L ạ. Anh nhắn em chiều cao, cân nặng là em giữ size liền nha ⚡' },
    { k: 'p', a: 'r3', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 3, khách trả lời để chốt đơn', s: 'AI tư vấn size ngay khi khách nhắn' },
    { k: 'kh', text: 'M69 60kg e' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },

    { k: 'cap', e: 'Tư vấn size', t: '1m69, 60kg → size M. Size L sẽ hơi rộng.', s: 'Rồi hỏi tiếp đúng thứ còn thiếu: màu' },
    { k: 'ai', text: 'Dạ 1m69, 60kg anh mặc **size M** vừa nhất, L sẽ hơi rộng ạ.' },
    { k: 'cap', e: 'Hỏi đúng thứ còn thiếu', t: 'Có size rồi: AI hỏi tiếp màu', s: 'Gửi ảnh 2 màu để khách chọn nhanh' },
    { k: 'ai', text: 'Áo có 2 màu **Xanh Dương Đậm** và **Xám**, cùng giá **263.150đ**. Anh lấy màu nào ạ?' },
    { k: 'ai', imgs: ['p207-navy', 'p207-xam1'] },
    { k: 'kh', text: 'Xanh á em' },
    { k: 'ai', text: 'Dạ em ghi áo thun **Xanh Dương Đậm size M**, 263.150đ. Anh gửi em **SĐT và địa chỉ** nhận hàng nha.' },
    { k: 'cap', e: 'Kiểm tra dữ liệu', t: 'SĐT sai → hỏi lại ngay lập tức' },
    { k: 'kh', text: '0487655098, 456 cao thắng p hoà hưng' },
    { k: 'ai', text: 'Dạ em ghi địa chỉ rồi ạ, nhưng số **0487655098** hình như chưa đúng, anh kiểm tra lại giúp em nha.' },
    { k: 'kh', text: '0387533098' },
    { k: 'cap', e: 'Chốt đơn', t: 'Tự tổng hợp đơn: sản phẩm, size, màu, SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ anh kiểm tra lại đơn giúp em nha:\n– Áo thun NEVER SLEEPS, Xanh Dương Đậm, size M\n– Tổng: **263.150đ** (chưa gồm phí ship)\n– 0387533098\n– 456 Cao Thắng, phường Hòa Hưng\nAnh xác nhận giúp em đơn này nha.', nut: 'Quản lý đơn hàng', d: 3600 },
    { k: 'cap', e: 'Xong', t: 'Khách chỉ cần nói "Ok e"' },
    { k: 'kh', text: 'Ok e' },
    { k: 'ai', text: 'Dạ em lên đơn cho anh liền nha ⚡', d: 1300 },

    // Chốt đơn → màn hình phụ: gửi đơn hàng cho Facebook → đơn tự động
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

    // Mua xong: tin cảm ơn kèm 5 mẫu đang giảm giá (ảnh, giá thật trên yame.vn 18/11/2026)
    { k: 'cap', e: 'Bán thêm sau mua', t: 'Cảm ơn khách, gửi kèm 5 mẫu đang giảm giá', s: 'Khách bấm "Mua ngay" ngay trong Messenger' },
    { k: 'ai', text: 'Dạ cảm ơn anh Thanh nha 🎉 Đơn đã được xác nhận, shop giao sớm cho anh. Shop đang giảm giá mấy mẫu mặc cùng áo thun này, anh xem thử nha:' },
    { k: 'car', sp: [
        { img: 's1-jeans', ten: 'Quần Jeans Ống Rộng Loose Fit Double Knee', gia: '259.000đ', cu: '557.000đ', giam: '-54%' },
        { img: 's3-khoac-b', ten: 'Áo Khoác Thun AirDry™ Pindot Chống Nắng', gia: '219.000đ', cu: '477.000đ', giam: '-54%' },
        { img: 's2-short', ten: 'Quần Short Jeans Ống Rộng Nhiều Túi', gia: '219.000đ', cu: '397.000đ', giam: '-45%' },
        { img: 's5-polo', ten: 'Áo Polo Tay Ngắn Raglan Colorlock™', gia: '111.000đ', cu: '247.000đ', giam: '-55%' },
        { img: 's4-shortthun', ten: 'Quần Short Thun Icevibes™ Mát Lạnh', gia: '111.000đ', cu: '287.000đ', giam: '-61%' },
      ], d: 5200 },

    // Chăm sóc sau bán: tin sau bán gửi qua Zalo → chuyển màn hình sang Zalo
    { k: 'zalo', gio: '19:30', ngay: 'CN 22/11/2026', chip: '3 ngày sau · khách đã nhận hàng', d: 1500 },
    { k: 'cap', e: 'Chăm sóc sau bán qua Zalo', t: 'Khách nhận hàng: AI hỏi dùng có ổn không', s: 'Xin đánh giá ngay trong tin Zalo OA của shop' },
    { k: 'zns', zns: {
        img: 'p207-model', tieuDe: 'Anh Thanh ơi, áo mặc có vừa không ạ?',
        noiDung: 'YaMe cảm ơn anh đã nhận đơn **#YM18112** (Áo thun NEVER SLEEPS · Xanh Dương Đậm · M). Anh dùng thấy ổn không, đánh giá giúp YaMe nha!',
        nut: 'Đánh giá sản phẩm',
      }, d: 4200 },
    { k: 'cap', e: 'ZBS · Sản phẩm bán chạy', t: '1 tuần sau: gửi mẫu bán chạy qua Zalo', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'CN 29/11/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['p207-xam1', 's1-jeans', 'p052-1', 'p207-navy'], nhan: 'TOP BÁN CHẠY TUẦN NÀY', mau: '#F97316',
        tieuDe: '🔥 Top bán chạy tuần này tại YaMe',
        noiDung: 'Áo thun **NEVER SLEEPS**, quần jeans **Double Knee** và áo khoác jean **The Original 052** đang được khách YaMe chọn nhiều nhất tuần qua.',
        nut: 'Xem ngay',
      }, d: 4600 },
    { k: 'cap', e: 'ZBS · Khuyến mãi', t: '1 tuần sau nữa: gửi ưu đãi cho khách cũ', s: 'Kéo khách quay lại mua tiếp, không cần khách nhắn' },
    { k: 'zstamp', gio: '19:30', ngay: 'CN 06/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['s3-khoac-b', 's1-jeans', 's5-polo', 's4-shortthun'], nhan: 'SALE CUỐI NĂM · GIẢM ĐẾN 61%',
        tieuDe: 'Ưu đãi riêng cho khách đã mua tại YaMe',
        noiDung: 'Áo khoác, quần jeans, polo, short đang giảm đến **61%**. Ưu đãi áp dụng đến hết 13/12/2026.',
        nut: 'Mua ngay',
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
    tag: { av: 'NT', ten: 'Nguyễn Văn Thanh', sub: 'Messenger · từ quảng cáo NEVER SLEEPS',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#neversleep', 'qt hot'], ['#aothun', 'qt hot'], ['#mobile', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht']]]],
      im: 'Khách im từ 14:49, sau khi được báo giá',
      rule: { lb: 'Bám đuổi theo thẻ #neversleep', tieuDe: '3 tin ngắn về áo NEVER SLEEPS',
              dong: [['15 phút', 'Nhắc size M, L còn ít'], ['3 tiếng', 'Gửi ảnh mặc thật'], ['20 tiếng', 'Nhắc giá, giữ size']] },
      reply: 'Khách trả lời "M69 60kg e" · dừng bám đuổi' },
    capi: { tieuDe: 'Gửi đơn hàng cho Facebook', event: 'Purchase', nhan: 'SỰ KIỆN MUA HÀNG', giaTri: '263.150đ', pk: 'Purchase · 263.150đ',
      dong: [['Đơn hàng', '#YM18112 · The No Style 207 · M'], ['Nguồn khách', 'Quảng cáo Streetwear F4 → Messenger'], ['Giá trị', '263.150 VND'], ['Event ID', 'YM18112-PURCHASE (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện mua hàng' },
  },
  donHang: {
    ma: '#YM18112', sp: 'Áo thun "NEVER SLEEPS" The No Style 207', bien: 'Xanh Dương Đậm · M · x1', img: 'p207-navy', gia: '263.150đ',
    nv: { ten: 'Nhân viên Minh Khoa', av: 'MK' },
    ten: 'Nguyễn Văn Thanh', sdt: '0387533098', dc: '456 Cao Thắng, phường Hòa Hưng, TP.HCM', gio: '11:05 · 19/11/2026',
  },
};
