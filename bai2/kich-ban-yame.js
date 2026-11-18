/* Kịch bản video demo NGANG 16:9 cho Zame (dự án riêng, 18/11/2026, theo video mẫu videoah.mp4 người dùng gửi).
   Bố cục người dùng chọn: chú thích nhỏ bên trái, điện thoại cao full màn hình ở giữa, màn hình phụ bật ra bên phải điện thoại.
   Mạch:
   - Mở đầu: logo Preny "AGENTIC AI SALES" như video mẫu (bỏ đoạn chữ chạy 5–12 giây).
   - Sửa 18/11/2026 (người dùng): bỏ tình huống 1 (bài viết Parka 048). Chỉ còn 1 cảnh: ngay dưới bài quảng cáo có 2 bình luận
     (hỏi giá, hỏi size) → trả lời cả 2 "Mình check ib shop nha" → AI nhắn inbox trước. Thẩm mỹ viện thì ngược lại (khách nhắn trước).
   - Sau đó: AI báo giá, gửi đúng ảnh trên quảng cáo, xin chiều cao cân nặng (chỉ 1 mẫu áo thun NEVER SLEEPS).
   - Sửa 18/11/2026 (người dùng): khách trả lời chiều cao cân nặng → AI tư vấn size M, hỏi màu → khách chọn Xanh
     → AI xin SĐT, địa chỉ để lên đơn → khách im → màn hình phụ gắn thẻ (có #SizeM), 3 tin bám đuổi nhắc giữ áo Xanh size M
     → khách gửi SĐT (sai, AI hỏi lại) + địa chỉ → chốt đơn → màn hình phụ gửi sự kiện mua hàng lên Facebook → đơn tự động
     → tin cảm ơn kèm carousel 5 mẫu đang giảm giá → chuyển sang Zalo: hỏi dùng ổn không, tin bán chạy, tin khuyến mãi → tổng kết → logo kết.
   Sản phẩm, giá, ảnh: lấy thật trên yame.vn (18/11/2026). Tên khách, SĐT, địa chỉ: minh họa (theo video mẫu).
   Sửa 18/11/2026 (người dùng): YaMe là shop thật nên tên shop trong video đổi thành "Zame", mã đơn #ZM18112.
   Khóa kịch bản vẫn là "yame" (tên file, thư mục ảnh assets/yame, menu danh-sach.js) để không gãy chỗ khác.
   Thời lượng mỗi bước tự tính theo độ dài tin; muốn chỉnh nhịp thì thêm d: <ms> (thời gian giữ sau khi hiện) vào bước đó. */
window.VN_KB = {
  ten: 'Zame video ngang',
  shop: { ten: 'Zame', sub: 'Thường trả lời ngay' },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= BÌNH LUẬN QUẢNG CÁO → INBOX (cảnh duy nhất từ 18/11/2026) =================
       Khách hỏi giá dưới quảng cáo → AI nhắn trước, gửi đúng ảnh quảng cáo kèm giá → tư vấn size, màu, xin SĐT địa chỉ
       → khách im → bám đuổi → khách gửi SĐT địa chỉ → chốt đơn → đơn tự động
       → tin cảm ơn kèm 5 mẫu đang giảm giá → Zalo sau bán. Chỉ 1 mẫu áo thun NEVER SLEEPS từ đầu tới cuối. */
    { k: 'canh', nhan: 'Bình luận quảng cáo → Inbox', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'p207-model', nhan: 'MESSENGER', tieuDe: 'Streetwear F4 · Nhắn shop tư vấn size', nut: 'Gửi tin nhắn',
        text: 'NEVER SLEEPS 🌙 Áo thun vải lưới AirDry™ 240gsm thoát nhiệt siêu thoáng, phom rộng F4. Mặc đi chơi cuối tuần mát cả ngày. #neversleep #aothun #mobile',
      }, d: 1500 },
    { k: 'cap', e: 'Bình luận hỏi giá', t: 'Khách hỏi giá ngay dưới quảng cáo', s: 'Một khách khác hỏi tư vấn size ở bình luận kế bên' },
    { k: 'cmt', i: 0, ten: 'Nguyễn Thanh', av: 'NT', text: 'Áo này giá bao nhiêu shop?' },
    { k: 'cmt', i: 1, ten: 'Quốc Bảo', av: 'QB', text: '1m75 68kg mặc size gì vừa shop, tư vấn giúp mình với' },
    { k: 'cap', e: 'Trả lời cả 2 bình luận', t: 'Trả lời ngắn gọn, mời khách vào inbox', s: 'Tư vấn chi tiết trong tin nhắn riêng' },
    { k: 'rep', i: 0, text: 'Mình check ib shop nha 💬' },
    { k: 'rep', i: 1, text: 'Mình check ib shop nha 💬' },
    { k: 'ms', ref: { loai: 'cmt', img: 'p207-model', dong1: 'Bạn đã bình luận về quảng cáo của Zame', dong2: '"Áo này giá bao nhiêu shop?"' }, gio: '14:47' },
    { k: 'cap', e: 'AI nhắn trước', t: 'Inbox trước: báo giá, gửi đúng ảnh quảng cáo', s: 'Khách không cần mô tả lại sản phẩm' },
    { k: 'ai', text: 'Dạ chào anh Thanh, áo **NEVER SLEEPS** trên quảng cáo giá **263.150đ** ạ (giá gốc 277.000đ), đủ size S đến XXL.' },
    { k: 'ai', img: 'p207-model' },
    { k: 'ai', text: 'Anh cho em xin chiều cao, cân nặng để em tư vấn size nha.' },

    // Sửa 18/11/2026 (người dùng): khách trả lời, AI tư vấn size, hỏi màu, xin SĐT + địa chỉ rồi khách mới im
    { k: 'kh', text: 'M69 60kg e' },
    { k: 'cap', e: 'Tư vấn size', t: '1m69, 60kg → size M. Size L sẽ hơi rộng.', s: 'Rồi hỏi tiếp đúng thứ còn thiếu: màu' },
    { k: 'ai', text: 'Dạ 1m69, 60kg anh mặc **size M** là vừa nhất, L sẽ hơi rộng ạ.' },
    { k: 'cap', e: 'Hỏi đúng thứ còn thiếu', t: 'Có size rồi: AI hỏi tiếp màu', s: 'Gửi ảnh 2 màu để khách chọn nhanh' },
    { k: 'ai', text: 'Áo có 2 màu **Xanh Dương Đậm** và **Xám**, cùng giá ạ. Anh thích màu nào?' },
    { k: 'ai', imgs: ['p207-navy', 'p207-xam1'] },
    { k: 'kh', text: 'Xanh á em' },
    { k: 'cap', e: 'Xin thông tin lên đơn', t: 'Đủ size, màu: xin SĐT và địa chỉ' },
    { k: 'ai', text: 'Dạ em ghi **Xanh Dương Đậm size M** cho anh rồi ạ. Anh gửi em **SĐT và địa chỉ** để em lên đơn nha.' },

    // Khách im → màn hình phụ: gắn thẻ (3 hashtag của bài quảng cáo + 2 thẻ từ cuộc chat), bám đuổi 3 tin theo thẻ
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Preny tự gắn thẻ đúng mẫu, size khách chọn',s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 450 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi theo thẻ', t: '3 tin ngắn: 15 phút, 3 tiếng, 20 tiếng', s: 'Nhắc đúng mẫu, đúng size khách đã chọn' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Anh Thanh ơi, áo **NEVER SLEEPS** Xanh size M còn ít lắm ạ, em đang giữ cho anh 1 cái nha 😊' },
    { k: 'p', a: 'r1', d: 900 },
    { k: 'time', nhan: '3 tiếng sau', gio: '17:49', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Em gửi anh ảnh mặc thật nha 📸 Vải lưới AirDry™, mặc cả ngày vẫn mát.' },
    { k: 'ai', img: 'p207-xam' },
    { k: 'p', a: 'r2', d: 900 },
    { k: 'time', nhan: '20 tiếng sau', gio: '10:49', ngay: 'T5 19/11/2026', d: 700 },
    { k: 'ai', text: 'Áo Xanh size M em vẫn giữ cho anh ạ. Anh chỉ cần gửi **SĐT, địa chỉ** là em lên đơn liền nha ⚡' },
    { k: 'p', a: 'r3', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 3, khách gửi SĐT, địa chỉ', s: 'AI kiểm tra thông tin ngay khi khách nhắn' },
    { k: 'kh', text: '0487655098, 456 cao thắng p hoà hưng' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },

    { k: 'cap', e: 'Kiểm tra dữ liệu', t: 'SĐT sai → hỏi lại ngay lập tức' },
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
        noiDung: 'Zame cảm ơn anh đã nhận đơn **#ZM18112** (Áo thun NEVER SLEEPS · Xanh Dương Đậm · M). Anh dùng thấy ổn không, đánh giá giúp Zame nha!',
        nut: 'Đánh giá sản phẩm',
      }, d: 4200 },
    { k: 'cap', e: 'ZBS · Sản phẩm bán chạy', t: '1 tuần sau: gửi mẫu bán chạy qua Zalo', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'CN 29/11/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['p207-xam1', 's1-jeans', 'p052-1', 'p207-navy'], nhan: 'TOP BÁN CHẠY TUẦN NÀY', mau: '#F97316',
        tieuDe: '🔥 Top bán chạy tuần này tại Zame',
        noiDung: 'Áo thun **NEVER SLEEPS**, quần jeans **Double Knee** và áo khoác jean **The Original 052** đang được khách Zame chọn nhiều nhất tuần qua.',
        nut: 'Xem ngay',
      }, d: 4600 },
    { k: 'cap', e: 'ZBS · Khuyến mãi', t: '1 tuần sau nữa: gửi ưu đãi cho khách cũ', s: 'Kéo khách quay lại mua tiếp, không cần khách nhắn' },
    { k: 'zstamp', gio: '19:30', ngay: 'CN 06/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['s3-khoac-b', 's1-jeans', 's5-polo', 's4-shortthun'], nhan: 'SALE CUỐI NĂM · GIẢM ĐẾN 61%',
        tieuDe: 'Ưu đãi riêng cho khách đã mua tại Zame',
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
    tag: { av: 'NT', ten: 'Nguyễn Văn Thanh', sub: 'Messenger · bình luận quảng cáo NEVER SLEEPS',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#neversleep', 'qt hot'], ['#aothun', 'qt hot'], ['#mobile', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#SizeM', 'qt']]]],
      im: 'Khách im từ 14:49, sau khi được xin SĐT, địa chỉ',
      rule: { lb: 'Bám đuổi theo thẻ #neversleep', tieuDe: '3 tin ngắn về áo NEVER SLEEPS',
              dong: [['15 phút', 'Nhắc giữ áo Xanh size M'], ['3 tiếng', 'Gửi ảnh mặc thật'], ['20 tiếng', 'Chỉ cần SĐT, địa chỉ']] },
      reply: 'Khách gửi SĐT, địa chỉ · dừng bám đuổi' },
    capi: { tieuDe: 'Gửi đơn hàng cho Facebook', event: 'Purchase', nhan: 'SỰ KIỆN MUA HÀNG', giaTri: '263.150đ', pk: 'Purchase · 263.150đ',
      dong: [['Đơn hàng', '#ZM18112 · The No Style 207 · M'], ['Nguồn khách', 'Bình luận quảng cáo Streetwear F4 → Messenger'], ['Giá trị', '263.150 VND'], ['Event ID', 'ZM18112-PURCHASE (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện mua hàng' },
  },
  donHang: {
    ma: '#ZM18112', sp: 'Áo thun "NEVER SLEEPS" The No Style 207', bien: 'Xanh Dương Đậm · M · x1', img: 'p207-navy', gia: '263.150đ',
    nv: { ten: 'Nhân viên Minh Khoa', av: 'MK' },
    ten: 'Nguyễn Văn Thanh', sdt: '0387533098', dc: '456 Cao Thắng, phường Hòa Hưng, TP.HCM', gio: '11:05 · 19/11/2026',
  },
};
