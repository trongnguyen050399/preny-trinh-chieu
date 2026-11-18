/* Kịch bản video demo NGANG 16:9: ĐIỆN TỬ, ĐIỆN THOẠI (nhóm thương mại điện tử), làm 18/11/2026 theo mẫu YaMe (kich-ban-yame.js).
   Nội dung lấy từ bài 1 (demo/kich-ban/dien-tu-tc.js): shop Khang Phúc Mobile, iPhone 15 Pro Max 256GB like new 18.490.000đ
   (Titan tự nhiên, pin 91%, zin, thoát iCloud, check IMEI), anh Huy, ca khó "chỗ khác báo 16tr9" → máy rẻ hơn thường pin thấp,
   đã thay linh kiện; bảo hành 12 tháng, 1 đổi 1 30 ngày; bám đuổi #IPhone15ProMax (ảnh kiểm tra máy) và theo giá
   (giảm 500.000đ còn 17.990.000đ + dán cường lực, COD kiểm tra máy), tặng ốp lưng chọn màu, đơn #KP70925, phụ kiện bán thêm,
   voucher KHANGPHUC200.
   Mạch:
   - Cảnh 1: bài viết sạc dự phòng vỏ nhôm (hàng mới về), khách hỏi giá + khách hỏi tư vấn → AI trả lời cả 2
     → inbox: báo giá, ảnh, hỏi máy đang dùng để kèm đúng cáp → xin SĐT, địa chỉ → lên đơn.
   - Cảnh 2: quảng cáo iPhone 15 Pro Max → anh Huy hỏi giá → AI gửi đúng ảnh quảng cáo → khách chụp tai nghe "Này thì sao"
     → khách im → gắn thẻ, bám đuổi 3 tin → khách so giá chỗ khác → AI giải thích → chọn máy, chọn màu ốp tặng kèm
     → địa chỉ thiếu quận, thành phố → chốt đơn COD → gửi sự kiện mua hàng lên Facebook → đơn tự động
     → cảm ơn + 5 phụ kiện giảm giá → Zalo: hỏi thăm, bán chạy, voucher.
   Tên shop, giá, khách, SĐT, địa chỉ: minh họa, dùng lại của bài 1 ("iPhone 15 Pro Max" là tên sản phẩm, không phải tên shop).
   Tự đặt thêm: khách cảnh 1 (Đức Anh, SĐT, địa chỉ), câu hỏi bình luận của khách thứ 2, sạc dự phòng kèm cáp C–C,
   giá giảm 10% trong carousel cho khách vừa mua. Ảnh: ảnh Unsplash có sẵn trong máy của bài 1. */
window.VN_KB = {
  ten: 'Điện tử, điện thoại video ngang',
  shop: { ten: 'Khang Phúc Mobile', av: 'KP', mau: '#1D4ED8', sub: 'Thường trả lời ngay' },
  anh: {
    'iphone': '../assets/img/u/1758186378952-68ac2d1c8d39_800x800.jpg',        // 2 máy iPhone Pro mặt lưng titan
    'iphone-2': '../assets/img/u/1511707171634-5f897ff02aa9_800x800.jpg',      // iPhone đời cũ màn tai thỏ
    'kiem-tra': '../assets/img/u/1550041473-d296a3a8a18a_800x800.jpg',         // kỹ thuật mở máy kiểm tra bo mạch
    'op-lung': '../assets/img/u/1692780256774-198bc0a3bbf0_800x800.jpg',       // ốp lưng vân carbon từ tính nhiều màu
    'tai-nghe': '../assets/img/u/1606841837239-c5a1a4a07af7_800x800.jpg',      // tai nghe không dây hộp sạc trắng
    'sac': '../assets/img/u/1731616103600-3fe7ccdc5a59_800x800.jpg',           // củ sạc nhanh kèm cáp
    'sac-du-phong': '../assets/img/u/1706275399494-fb26bbc5da63_800x800.jpg',  // sạc dự phòng vỏ nhôm
    'linh-kien': '../assets/img/u/1769085794153-54fd3d57efaf_800x800.jpg',     // pin, bo mạch bên trong laptop
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= CẢNH 1 · BÀI VIẾT → BÌNH LUẬN → INBOX ================= */
    { k: 'canh', nhan: 'Tình huống 1 · Bình luận xin giá → Inbox', gio: '21:14' },
    { k: 'fb', post: {
        gio: '2 giờ', img: 'sac-du-phong', likes: '1,3K', soCmt: '81 bình luận',
        text: 'Hàng mới về 🔋 Sạc dự phòng vỏ nhôm 10.000mAh, nhỏ gọn bỏ túi, sạc nhanh cho điện thoại, tai nghe. Bảo hành 12 tháng!',
      }, d: 1600 },
    { k: 'cap', e: 'Bình luận xin giá', t: 'Khách hỏi giá ngay dưới bài viết', s: 'Một khách khác hỏi tư vấn ở bình luận kế bên' },
    { k: 'cmt', i: 0, ten: 'Đức Anh', av: 'ĐA', text: 'Giá sao shop ơi?' },
    { k: 'cmt', i: 1, ten: 'Trần Nam', av: 'TN', text: 'Sạc 15 Pro Max được mấy lần shop? Mang lên máy bay được k?' },
    { k: 'cap', e: 'Trả lời cả 2 bình luận', t: 'Trả lời ngắn gọn, mời khách vào inbox', s: 'Tư vấn chi tiết trong tin nhắn riêng' },
    { k: 'rep', i: 0, text: 'Mình check ib shop nha 💬' },
    { k: 'rep', i: 1, text: 'Mình check ib shop nha 💬' },

    { k: 'ms', ref: { loai: 'cmt', img: 'sac-du-phong', dong1: 'Bạn đã bình luận về bài viết của Khang Phúc Mobile', dong2: '"Giá sao shop ơi?"' }, gio: '21:16' },
    { k: 'cap', e: 'Tự động báo giá', t: 'Inbox trước: báo giá, gửi ảnh thật', s: 'Viết ngắn gọn, tự nhiên như người bán' },
    { k: 'ai', text: 'Dạ chào anh Đức Anh, sạc dự phòng vỏ nhôm **10.000mAh** giá **590.000đ** ạ, bảo hành 12 tháng.' },
    { k: 'ai', card: { title: 'Sạc dự phòng vỏ nhôm 10.000mAh sạc nhanh, nhỏ gọn bỏ túi', gia: '590.000đ' } },
    { k: 'ai', img: 'sac-du-phong' },
    { k: 'ai', text: 'Anh đang dùng **máy gì** để em kèm đúng **cáp sạc** cho anh nha?' },
    { k: 'cap', e: 'Hỏi đúng 1 điều', t: 'Khách trả lời 1 câu, AI chọn đúng cáp', s: 'Kiểm tra luôn hàng còn trong kho' },
    { k: 'kh', text: 'a xài iphone 15 thường e' },
    { k: 'ai', text: 'Dạ iPhone 15 dùng **cổng C**, em kèm **cáp C–C sạc nhanh** cho anh ạ, hàng còn sẵn. Anh gửi em **SĐT và địa chỉ** để em lên đơn nha 😊' },
    { k: 'cap', e: 'Chốt đơn', t: 'Xin SĐT, địa chỉ: khách đưa đủ', s: 'AI tóm tắt đơn ngay trong chat' },
    { k: 'kh', text: '0989 427 135, 88 Lạch Tray, Ngô Quyền, Hải Phòng' },
    { k: 'ai', text: 'Dạ em lên đơn cho anh rồi nha:\n– Sạc dự phòng vỏ nhôm 10.000mAh\n– Kèm cáp C–C sạc nhanh\n– **590.000đ**\n– 0989 427 135\n– 88 Lạch Tray, Ngô Quyền, Hải Phòng\nShop gọi anh xác nhận rồi giao liền ạ 🎉', d: 3800 },

    /* ================= CẢNH 2 · QUẢNG CÁO → MESSENGER ================= */
    { k: 'canh', nhan: 'Tình huống 2 · Quảng cáo → Messenger', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'iphone', nhan: 'MESSENGER', tieuDe: 'iPhone 15 Pro Max like new · Nhắn shop', nut: 'Gửi tin nhắn',
        text: 'Zin nguyên bản, pin từ 90% 📱 iPhone 15 Pro Max 256GB like new 99%, thoát iCloud, check IMEI, bảo hành 12 tháng. Xem máy tại shop hoặc ship COD. #iphone15promax #likenew #mobile',
      }, d: 1500 },
    { k: 'cap', e: 'Quảng cáo Facebook', t: 'Khách bấm "Gửi tin nhắn" từ quảng cáo', s: 'Hỏi gì, AI trả lời ngay lập tức' },
    { k: 'tap', d: 1100 },
    { k: 'ms', ref: { loai: 'ad', img: 'iphone', dong1: 'Huy đã trả lời một quảng cáo', dong2: 'iPhone 15 Pro Max like new' }, gio: '14:47', d: 900 },
    { k: 'kh', text: '15PM này bn shop?' },
    { k: 'cap', e: 'Khách hỏi giá', t: 'AI gửi đúng máy trên quảng cáo kèm giá', s: 'Khách không cần mô tả lại sản phẩm' },
    { k: 'ai', text: 'Dạ chào anh Huy, **iPhone 15 Pro Max 256GB** trên quảng cáo giá **18.490.000đ** ạ, like new 99%, **pin 91%**, zin nguyên bản.' },
    { k: 'ai', img: 'iphone' },
    { k: 'ai', text: 'Anh qua shop xem máy hay em **ship COD**, kiểm tra máy rồi mới trả tiền ạ?' },
    { k: 'cap', e: 'Không hỏi lại khách', t: 'Khách chụp mẫu khác hỏi "Này thì sao"', s: 'Chỉ một câu cộc lốc, không ghi tên mẫu' },
    { k: 'kh', shot: { img: 'tai-nghe', cap: 'Tai nghe không dây chống ồn, nghe nhạc, họp online cả ngày 🎧' } },
    { k: 'kh', text: 'Này thì sao' },
    { k: 'cap', e: 'Nhận diện sản phẩm từ ảnh', t: 'Đúng mẫu. Đúng giá. Đúng tồn kho.', s: 'AI đọc ảnh khách gửi, khớp với kho sản phẩm của shop' },
    { k: 'ai', text: 'Dạ đây là **tai nghe không dây chống ồn** ạ, màu trắng còn hàng anh nha.' },
    { k: 'ai', card: { title: 'Tai nghe không dây chống ồn, hộp sạc trắng, bảo hành 12 tháng', gia: '1.290.000đ' } },
    { k: 'ai', img: 'tai-nghe' },
    { k: 'ai', text: 'Anh qua shop xem hay em ship COD cả 2 món cho anh ạ?' },

    // Khách im → màn hình phụ: gắn thẻ (3 hashtag của bài quảng cáo + thẻ từ cuộc chat), bám đuổi 3 tin theo thẻ
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Preny tự gắn thẻ đúng máy khách quan tâm', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi theo thẻ', t: '3 tin ngắn: 15 phút, 3 tiếng, 20 tiếng', s: 'Chỉ nói về đúng máy khách quan tâm' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Anh Huy ơi, **15 Pro Max 256GB pin 91%** bên em chỉ còn 1 máy này thôi ạ. Anh nhắn em để em giữ máy cho anh nha 😊' },
    { k: 'p', a: 'r1', d: 900 },
    { k: 'time', nhan: '3 tiếng sau', gio: '17:49', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Em gửi anh ảnh kỹ thuật kiểm tra máy nha 🔧 Máy đã **thoát iCloud, check IMEI** trước khi bán.' },
    { k: 'ai', img: 'kiem-tra' },
    { k: 'p', a: 'r2', d: 900 },
    { k: 'time', nhan: '20 tiếng sau', gio: '10:49', ngay: 'T5 19/11/2026', d: 700 },
    { k: 'ai', text: 'Máy 15 Pro Max anh hỏi, chốt trong hôm nay em **giảm 500.000đ còn 17.990.000đ** + **tặng dán cường lực** ạ 🎁' },
    { k: 'p', a: 'r3', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 3, khách trả lời để chốt đơn', s: 'Khách so giá với chỗ khác' },
    { k: 'kh', text: 'Chỗ khác báo a 16tr9 thôi e' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },

    { k: 'cap', e: 'Gỡ lo ngại về giá', t: 'Máy rẻ hơn: hỏi pin, linh kiện đã thay', s: 'Rồi chủ động hỏi: lấy máy hay lấy kèm tai nghe?' },
    { k: 'ai', text: 'Dạ máy 16,9 triệu anh hỏi kỹ giúp em **pin bao nhiêu %**, đã **thay màn, thay pin** chưa ạ. Máy rẻ hơn thường pin dưới 85% hoặc đã thay linh kiện.' },
    { k: 'ai', text: 'Máy bên em **bảo hành 12 tháng**, **1 đổi 1 trong 30 ngày**. Anh lấy máy hay lấy kèm tai nghe để em lên đơn nha?' },
    { k: 'kh', text: 'Lấy máy thôi e, a bận ko qua đc, ship giúp a' },
    { k: 'cap', e: 'Hỏi đúng thứ còn thiếu', t: 'Khách chọn máy: AI hỏi màu ốp tặng kèm', s: 'Gửi ảnh ốp để khách chọn nhanh' },
    { k: 'ai', text: 'Dạ máy **17.990.000đ**, tặng **ốp lưng từ tính** và dán cường lực. Ốp anh lấy màu **Đen, Xanh** hay **Đỏ** ạ?' },
    { k: 'ai', img: 'op-lung' },
    { k: 'kh', text: 'Đen nha e' },
    { k: 'ai', text: 'Dạ em ghi **15 Pro Max 256GB**, ốp **Đen**, ship COD **17.990.000đ**. Anh gửi em **SĐT và địa chỉ** nhận máy nha.' },
    { k: 'cap', e: 'Kiểm tra dữ liệu', t: 'Địa chỉ thiếu quận, thành phố → hỏi lại ngay' },
    { k: 'kh', text: '0976 154 382, 52 Nguyễn Văn Linh' },
    { k: 'ai', text: 'Dạ đường Nguyễn Văn Linh có ở nhiều tỉnh, anh cho em xin thêm **quận, thành phố** để giao đúng nha.' },
    { k: 'kh', text: 'Hải Châu, Đà Nẵng e' },
    { k: 'cap', e: 'Chốt đơn', t: 'Tự tổng hợp đơn: máy, quà tặng, SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ anh kiểm tra lại đơn giúp em nha:\n– iPhone 15 Pro Max 256GB, pin 91%\n– Tặng ốp Đen + dán cường lực\n– **17.990.000đ**, COD kiểm tra máy\n– 0976 154 382\n– 52 Nguyễn Văn Linh, Hải Châu, Đà Nẵng\nAnh xác nhận giúp em đơn này nha.', nut: 'Quản lý đơn hàng', d: 3600 },
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

    // Mua xong: tin cảm ơn kèm 5 phụ kiện đang giảm giá (afterSale.sp của bài 1, giảm 10% cho khách vừa mua)
    { k: 'cap', e: 'Bán thêm sau mua', t: 'Cảm ơn khách, gửi kèm 5 phụ kiện giảm giá', s: 'Khách bấm "Mua ngay" ngay trong Messenger' },
    { k: 'ai', text: 'Dạ cảm ơn anh Huy nha 🎉 Đơn đã được xác nhận, shop gửi máy sớm cho anh. Khách vừa mua được giảm 10% mấy phụ kiện này, anh xem thử nha:' },
    { k: 'car', sp: [
        { img: 'tai-nghe', ten: 'Tai nghe không dây chống ồn', gia: '1.161.000đ', cu: '1.290.000đ', giam: '-10%' },
        { img: 'sac', ten: 'Củ sạc nhanh kèm cáp C', gia: '351.000đ', cu: '390.000đ', giam: '-10%' },
        { img: 'sac-du-phong', ten: 'Sạc dự phòng vỏ nhôm 10.000mAh', gia: '531.000đ', cu: '590.000đ', giam: '-10%' },
        { img: 'op-lung', ten: 'Ốp lưng vân carbon từ tính', gia: '261.000đ', cu: '290.000đ', giam: '-10%' },
        { img: 'kiem-tra', ten: 'Gói bảo hành mở rộng thêm 12 tháng', gia: '801.000đ', cu: '890.000đ', giam: '-10%' },
      ], d: 5200 },

    // Chăm sóc sau bán qua Zalo
    { k: 'zalo', gio: '19:30', ngay: 'CN 22/11/2026', chip: '3 ngày sau · khách đã nhận hàng', d: 1500 },
    { k: 'cap', e: 'Chăm sóc sau bán qua Zalo', t: 'Khách nhận máy: AI hỏi dùng có ổn không', s: 'Xin đánh giá ngay trong tin Zalo OA của shop' },
    { k: 'zns', zns: {
        img: 'iphone', tieuDe: 'Anh Huy ơi, máy dùng có ổn không ạ?',
        noiDung: 'Khang Phúc Mobile cảm ơn anh đã nhận đơn **#KP70925** (iPhone 15 Pro Max 256GB). Anh dùng củ sạc, cáp đạt chuẩn để pin bền nha. Anh đánh giá giúp shop nha!',
        nut: 'Đánh giá sản phẩm',
      }, d: 4200 },
    { k: 'cap', e: 'ZBS · Sản phẩm bán chạy', t: '1 tuần sau: gửi phụ kiện bán chạy qua Zalo', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'CN 29/11/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['tai-nghe', 'sac', 'sac-du-phong', 'op-lung'], nhan: 'TOP BÁN CHẠY TUẦN NÀY', mau: '#F97316',
        tieuDe: '🔥 Top phụ kiện bán chạy tuần này',
        noiDung: 'Tai nghe **chống ồn**, củ sạc nhanh **kèm cáp C** và sạc dự phòng **10.000mAh** đang được khách dùng iPhone chọn nhiều nhất tuần qua.',
        nut: 'Xem ngay',
      }, d: 4600 },
    { k: 'cap', e: 'ZBS · Khuyến mãi', t: '1 tuần sau nữa: gửi ưu đãi cho khách cũ', s: 'Kéo khách quay lại mua tiếp, không cần khách nhắn' },
    { k: 'zstamp', gio: '19:30', ngay: 'CN 06/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['op-lung', 'tai-nghe', 'sac-du-phong', 'sac'], nhan: 'VOUCHER 200K · KHÁCH ĐÃ MUA',
        tieuDe: 'Tặng anh Huy voucher 200.000đ',
        noiDung: 'Nhập mã **KHANGPHUC200** giảm 200.000đ cho đơn từ 1.000.000đ. Hạn dùng đến 31/03/2027.',
        nut: 'Dùng voucher ngay',
      }, d: 4800 },

    { k: 'tongket', d: 8500 },
    { k: 'outro', d: 5200 },
  ],
  // Slide tổng kết cuối video (giống hệt YaMe)
  tongKet: { tieuDe: 'Quy trình Preny AI giúp', em: 'tăng tỷ lệ chốt đơn', cot: [
    { ten: 'Khách hàng', icon: 'users', dong: ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến'] },
    { ten: 'AI Chatbot', icon: 'bot', dong: ['Phản hồi nhanh tức thì', 'Kêu gọi khách hàng mua hàng', 'Lấy thông tin và chốt đơn'] },
    { ten: 'Bám đuổi', icon: 'bell', dong: ['Gửi 5 tin nhắn trong 7 ngày để bám đuổi khách hàng'] },
    { ten: 'Chốt đơn', icon: 'check', dong: ['Lên đơn', 'Gửi sự kiện mua hàng lên Facebook'] },
    { ten: 'Mua lại', icon: 'refresh', dong: ['Tự động gửi 1 tin nhắn mỗi tuần qua FB và Zalo', 'Sản phẩm bán chạy, giảm giá, sản phẩm mới'] },
  ] },
  panels: {
    tag: { av: 'LH', ten: 'Lê Quang Huy', sub: 'Messenger · từ quảng cáo iPhone 15 Pro Max',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#iphone15promax', 'qt hot'], ['#likenew', 'qt hot'], ['#mobile', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#TaiNgheChongOn', 'qt']]]],
      im: 'Khách im từ 14:49, sau khi được báo giá',
      rule: { lb: 'Bám đuổi theo thẻ #iphone15promax', tieuDe: '3 tin ngắn về máy 15 Pro Max',
              dong: [['15 phút', 'Nhắc chỉ còn 1 máy'], ['3 tiếng', 'Gửi ảnh kiểm tra máy'], ['20 tiếng', 'Giảm giá, tặng cường lực']] },
      reply: 'Khách trả lời "Chỗ khác báo a 16tr9…" · dừng bám đuổi' },
    capi: { tieuDe: 'Gửi đơn hàng cho Facebook', event: 'Purchase', nhan: 'SỰ KIỆN MUA HÀNG', giaTri: '17.990.000đ', pk: 'Purchase · 17.990.000đ',
      dong: [['Đơn hàng', '#KP70925 · iPhone 15 Pro Max 256GB'], ['Nguồn khách', 'Quảng cáo 15 Pro Max → Messenger'], ['Giá trị', '17.990.000 VND'], ['Event ID', 'KP70925-PURCHASE (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện mua hàng' },
  },
  donHang: {
    ma: '#KP70925', sp: 'iPhone 15 Pro Max 256GB like new 99%', bien: 'Titan tự nhiên · pin 91% · tặng ốp Đen', img: 'iphone', gia: '17.990.000đ',
    phi: ['Thanh toán', 'COD, kiểm tra máy'],
    nv: { ten: 'Nhân viên Tùng', av: 'TG' },
    ten: 'Lê Quang Huy', sdt: '0976 154 382', dc: '52 Nguyễn Văn Linh, Hải Châu, Đà Nẵng', gio: '11:05 · 19/11/2026',
  },
};
