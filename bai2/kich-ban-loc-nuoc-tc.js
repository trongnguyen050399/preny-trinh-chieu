/* Kịch bản video demo NGANG 16:9: MÁY LỌC NƯỚC (nhóm thương mại điện tử), làm 18/11/2026 theo mẫu YaMe (kich-ban-yame.js).
   Nội dung lấy từ bài 1 (demo/kich-ban/loc-nuoc-tc.js): shop Lọc Nước An Tâm, máy lọc RO nóng lạnh 8.490.000đ, cột lọc thô đầu nguồn
   2.900.000đ, combo 11.390.000đ (bám đuổi giảm 700.000đ còn 10.690.000đ + tặng bộ lõi thô), anh Phúc ở Củ Chi dùng nước giếng phèn,
   ca khó nhà có 2 con nhỏ (khóa nước nóng an toàn trẻ em), đơn #AT40726, sản phẩm bán thêm, gói bảo dưỡng giảm 15%, voucher ANTAM300.
   Mạch:
   - Cảnh 1: bài viết máy RO nóng lạnh, chị Hà hỏi giá + khách khác hỏi nước giếng → AI trả lời cả 2 → inbox: báo giá, ảnh,
     hỏi nguồn nước → nước máy: máy RO là đủ → xin SĐT, địa chỉ → lên đơn.
   - Cảnh 2: quảng cáo máy RO nóng lạnh → anh Phúc hỏi giá → AI gửi đúng ảnh quảng cáo → khách chụp cột lọc đầu nguồn "Này thì sao"
     → khách im → gắn thẻ, bám đuổi 3 tin → khách báo nước giếng phèn → chọn combo, hỏi an toàn cho bé → khách gửi SĐT, địa chỉ
     → chốt đơn → gửi sự kiện mua hàng lên Facebook → đơn tự động → cảm ơn + 5 món giảm giá → Zalo: hỏi thăm, bán chạy, ưu đãi.
   Tên shop, giá, khách, SĐT, địa chỉ: minh họa, dùng lại của bài 1. Tự đặt thêm: khách cảnh 1 (Thanh Hà: SĐT, địa chỉ),
   giá giảm trong carousel (cột làm mềm nước 3.150.000đ). Ảnh: ảnh Unsplash có sẵn trong máy của bài 1. */
window.VN_KB = {
  ten: 'Máy lọc nước video ngang',
  ketSub: 'Để AI bán máy lọc nước cho shop của bạn',
  shop: { ten: 'Lọc Nước An Tâm', av: 'AT', mau: '#0369A1', sub: 'Thường trả lời ngay' },
  anh: {
    'may-loc': '../assets/img/u/1659346435902-9bd10146b5d9_800x800.jpg',   // máy lọc nước để bàn màu trắng trong bếp sáng
    'bep': '../assets/img/u/1669211659110-3f3db4119b65_800x800.jpg',       // máy lọc trắng lắp cạnh bồn rửa bếp
    'ly-nuoc': '../assets/img/u/1669139470813-827cbcf54b20_800x800.jpg',   // hứng ly nước tại vòi bồn rửa
    'cot-loc': '../assets/img/u/1654220691341-be23a137bd0c_800x800.jpg',   // dãy cột lọc composite đầu nguồn
    'binh-gn': '../assets/img/u/1606342384762-ddf691b59885_800x800.jpg',   // 3 bình giữ nhiệt (xanh, đen, trắng)
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= CẢNH 1 · BÀI VIẾT → BÌNH LUẬN → INBOX ================= */
    { k: 'canh', nhan: 'Tình huống 1 · Bình luận xin giá → Inbox', gio: '20:41' },
    { k: 'fb', post: {
        gio: '3 giờ', img: 'bep', likes: '1,4K', soCmt: '92 bình luận',
        text: 'Nước máy có mùi clo? 💧 Máy lọc RO nóng lạnh có lõi than hoạt tính khử mùi, nước nóng lạnh uống ngay tại vòi. Kiểm tra nước, lắp đặt miễn phí tận nhà!',
      }, d: 1600 },
    { k: 'cap', e: 'Bình luận xin giá', t: 'Khách hỏi giá ngay dưới bài viết', s: 'Một khách khác hỏi nước giếng ở bình luận kế bên' },
    { k: 'cmt', i: 0, ten: 'Thanh Hà', av: 'TH', text: 'Giá sao shop ơi?' },
    { k: 'cmt', i: 1, ten: 'Quốc Bảo', av: 'QB', text: 'Nước giếng khoan dùng máy này được không shop, tư vấn giúp mình với' },
    { k: 'cap', e: 'Trả lời cả 2 bình luận', t: 'Trả lời ngắn gọn, mời khách vào inbox', s: 'Tư vấn chi tiết trong tin nhắn riêng' },
    { k: 'rep', i: 0, text: 'Mình check ib shop nha 💬' },
    { k: 'rep', i: 1, text: 'Mình check ib shop nha 💬' },

    { k: 'ms', ref: { loai: 'cmt', img: 'bep', dong1: 'Bạn đã bình luận về bài viết của Lọc Nước An Tâm', dong2: '"Giá sao shop ơi?"' }, gio: '20:43' },
    { k: 'cap', e: 'Tự động báo giá', t: 'Inbox trước: báo giá, gửi ảnh thật', s: 'Viết ngắn gọn, tự nhiên như người bán' },
    { k: 'ai', text: 'Dạ chào chị Hà, máy lọc RO nóng lạnh giá **8.490.000đ** ạ, lắp đặt miễn phí, bảo hành 3 năm.' },
    { k: 'ai', card: { title: 'Máy lọc nước RO nóng lạnh · Khóa nước nóng an toàn trẻ em · Bảo hành 3 năm', gia: '8.490.000đ' } },
    { k: 'ai', imgs: ['bep', 'may-loc', 'ly-nuoc'] },
    { k: 'ai', text: 'Máy lọc được **phèn, sắt, clo, vi khuẩn**, uống ngay tại vòi. Nhà mình dùng **nước máy hay nước giếng** để em tư vấn đúng bộ lọc nha?' },
    { k: 'cap', e: 'Tư vấn bộ lọc', t: 'Khách trả lời 1 câu, AI chọn đúng bộ lọc', s: 'Nước máy: máy RO là đủ, không cần thêm cột lọc' },
    { k: 'kh', text: 'nước máy e, hay có mùi clo. nhà 6 người' },
    { k: 'ai', text: 'Dạ nước máy thì **máy RO là đủ** ạ, lõi than hoạt tính khử mùi clo tốt, 6 người dùng thoải mái. Chị gửi em **SĐT và địa chỉ** để em lên đơn nha 😊' },
    { k: 'cap', e: 'Chốt đơn', t: 'Xin SĐT, địa chỉ: khách đưa đủ', s: 'AI tóm tắt đơn ngay trong chat' },
    { k: 'kh', text: '0903 418 726, 18 đường số 9, Linh Trung, Thủ Đức' },
    { k: 'ai', text: 'Dạ em lên đơn cho chị rồi nha:\n– Máy lọc RO nóng lạnh, lắp đặt miễn phí\n– **8.490.000đ**\n– 0903 418 726\n– 18 đường số 9, Linh Trung, Thủ Đức\nShop gọi chị hẹn giờ lắp liền ạ 🎉', d: 3800 },

    /* ================= CẢNH 2 · QUẢNG CÁO → MESSENGER ================= */
    { k: 'canh', nhan: 'Tình huống 2 · Quảng cáo → Messenger', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'may-loc', nhan: 'MESSENGER', tieuDe: 'Máy lọc RO nóng lạnh · Nhắn shop tư vấn', nut: 'Gửi tin nhắn',
        text: 'Nước giếng vàng, tanh mùi sắt? 💧 Máy lọc RO nóng lạnh lọc phèn, sắt, vi khuẩn, uống ngay tại vòi. Kiểm tra nước miễn phí tại nhà. #maylocRO #nonglanh #mobile',
      }, d: 1500 },
    { k: 'cap', e: 'Quảng cáo Facebook', t: 'Khách bấm "Gửi tin nhắn" từ quảng cáo', s: 'Hỏi gì, AI trả lời ngay lập tức' },
    { k: 'tap', d: 1100 },
    { k: 'ms', ref: { loai: 'ad', img: 'may-loc', dong1: 'Phúc đã trả lời một quảng cáo', dong2: 'Máy lọc RO nóng lạnh · Lọc Nước An Tâm' }, gio: '14:47', d: 900 },
    { k: 'kh', text: 'Máy này giá bao nhiêu shop?' },
    { k: 'cap', e: 'Khách hỏi giá', t: 'AI gửi đúng máy trên quảng cáo kèm giá', s: 'Khách không cần mô tả lại sản phẩm' },
    { k: 'ai', text: 'Dạ chào anh Phúc, máy **RO nóng lạnh** trên quảng cáo giá **8.490.000đ** ạ, bảo hành 3 năm, lắp đặt miễn phí.' },
    { k: 'ai', img: 'may-loc' },
    { k: 'ai', text: 'Nhà mình dùng **nước máy hay nước giếng** để em tư vấn đúng bộ lọc nha?' },
    { k: 'cap', e: 'Không hỏi lại khách', t: 'Khách chụp mẫu khác hỏi "Này thì sao"', s: 'Chỉ một câu cộc lốc, không ghi tên sản phẩm' },
    { k: 'kh', shot: { img: 'cot-loc', cap: 'Cột lọc tổng đầu nguồn 💧 Lọc phèn, sắt cho cả nhà, tắm giặt hết vàng' } },
    { k: 'kh', text: 'Này thì sao' },
    { k: 'cap', e: 'Nhận diện sản phẩm từ ảnh', t: 'Đúng mẫu. Đúng giá. Đúng tồn kho.', s: 'AI đọc ảnh khách gửi, khớp với kho sản phẩm của shop' },
    { k: 'ai', text: 'Dạ đây là **cột lọc thô đầu nguồn** ạ, lọc phèn, sắt cho nước cả nhà, giá **2.900.000đ**.' },
    { k: 'ai', card: { title: 'Cột lọc thô đầu nguồn composite · Lọc phèn, sắt cho nước cả nhà', gia: '2.900.000đ' } },
    { k: 'ai', img: 'cot-loc' },
    { k: 'ai', text: 'Anh cho em biết nguồn nước nhà mình để em tư vấn nên lấy máy, cột lọc hay cả 2 nha.' },

    // Khách im → màn hình phụ: gắn thẻ (3 hashtag của bài quảng cáo + thẻ từ cuộc chat), bám đuổi 3 tin theo thẻ
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Preny tự gắn thẻ đúng máy khách quan tâm', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi theo thẻ', t: '3 tin ngắn: 15 phút, 3 tiếng, 20 tiếng', s: 'Chỉ nói về đúng máy khách quan tâm' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Anh Phúc ơi, bên em **kiểm tra nước miễn phí** tại nhà, đo trước và sau lọc cho anh xem. Anh nhắn em nguồn nước nhà mình nha 😊' },
    { k: 'p', a: 'r1', d: 900 },
    { k: 'time', nhan: '3 tiếng sau', gio: '17:49', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Em gửi anh ảnh máy RO nóng lạnh lắp thật ở nhà khách nha 📸 Gọn trên bàn bếp, uống ngay tại vòi.' },
    { k: 'ai', img: 'bep' },
    { k: 'p', a: 'r2', d: 900 },
    { k: 'time', nhan: '20 tiếng sau', gio: '10:49', ngay: 'T5 19/11/2026', d: 700 },
    { k: 'ai', text: 'Tuần này lấy combo **máy RO + cột lọc đầu nguồn**, em **giảm 700.000đ**, tặng bộ lõi thô thay lần đầu ạ. Anh nhắn em nguồn nước nha ⚡' },
    { k: 'p', a: 'r3', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 3, khách trả lời để chốt đơn', s: 'AI tư vấn bộ lọc ngay khi khách nhắn' },
    { k: 'kh', text: 'Nước giếng khoan e, để lâu vàng, tanh mùi sắt' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },

    { k: 'cap', e: 'Tư vấn đúng nguồn nước', t: 'Giếng phèn → máy RO + cột lọc đầu nguồn', s: 'Rồi chủ động hỏi: lấy combo hay riêng máy?' },
    { k: 'ai', text: 'Dạ nước giếng phèn vào thẳng thì màng RO **nghẹt nhanh** ạ. Anh lắp thêm cột lọc đầu nguồn thì tắm giặt cũng hết vàng. Anh lấy **combo** hay riêng máy để em lên đơn nha?' },
    { k: 'kh', text: 'Lấy combo. Nhà có 2 đứa nhỏ, nóng lạnh có nguy hiểm k e?' },
    { k: 'cap', e: 'Giải đáp lo ngại', t: 'Nhà có con nhỏ: vòi nóng có khóa an toàn', s: 'Báo giá combo đã giảm, gửi ảnh 2 món' },
    { k: 'ai', text: 'Dạ vòi nóng có **khóa an toàn trẻ em**, phải bấm mở khóa mới ra nước nóng nên bé nghịch không bị bỏng ạ.' },
    { k: 'ai', imgs: ['may-loc', 'cot-loc'] },
    { k: 'ai', text: 'Combo còn **10.690.000đ** (đã giảm 700.000đ), tặng bộ lõi thô thay lần đầu. Anh gửi em **SĐT và địa chỉ** lắp đặt nha.' },
    { k: 'kh', text: 'Lê Văn Phúc 0977 365 214, ấp 4 xã Củ Chi' },
    { k: 'cap', e: 'Chốt đơn', t: 'Tự tổng hợp đơn: combo, quà tặng, SĐT, địa chỉ', s: 'Tổng tiền đã trừ ưu đãi bám đuổi' },
    { k: 'ai', text: 'Dạ anh kiểm tra lại đơn giúp em nha:\n– Combo máy RO nóng lạnh + cột lọc đầu nguồn\n– Tặng bộ lõi thô, lắp đặt miễn phí\n– Tổng: **10.690.000đ** (lắp xong mới trả tiền)\n– 0977 365 214\n– Ấp 4, xã Củ Chi, TP.HCM\nAnh xác nhận giúp em đơn này nha.', nut: 'Quản lý đơn hàng', d: 3600 },
    { k: 'cap', e: 'Xong', t: 'Khách chỉ cần nói "Ok em"' },
    { k: 'kh', text: 'Ok em' },
    { k: 'ai', text: 'Dạ em lên đơn, xếp kỹ thuật qua lắp cho anh liền nha ⚡', d: 1300 },

    // Chốt đơn → màn hình phụ: gửi đơn hàng cho Facebook → đơn tự động
    { k: 'cap', e: 'Gửi đơn về Facebook', t: 'Sự kiện mua hàng gửi ngay lên Facebook', s: 'Quảng cáo tối ưu theo đơn thật' },
    { k: 'panel', v: 'capi', d: 900 },
    { k: 'p', a: 'flow', d: 1500 }, { k: 'p', a: 'event', d: 1300 }, { k: 'p', a: 'ok', d: 2200 },
    { k: 'cap', e: 'Đơn hàng tự động', t: 'Đơn tự lên trên Preny. Shop chỉ việc lắp.' },
    { k: 'panel', v: 'don', d: 900 },
    { k: 'p', a: 'f1', d: 550 }, { k: 'p', a: 'f2', d: 550 }, { k: 'p', a: 'f3', d: 550 }, { k: 'p', a: 'f4', d: 550 },
    { k: 'p', a: 'cho', d: 900 },
    { k: 'cap', e: 'Nhân viên xác nhận', t: 'Báo nhân viên: bấm 1 lần là đơn lên', s: 'Người thật kiểm tra lại trước khi lắp' },
    { k: 'p', a: 'nv', d: 1700 }, { k: 'p', a: 'bam', d: 1100 },
    { k: 'p', a: 'xn', d: 3000 },
    { k: 'panel', v: null, d: 500 },

    // Mua xong: tin cảm ơn kèm 5 món đang giảm giá (deck.afterSale.sp của bài 1)
    { k: 'cap', e: 'Bán thêm sau mua', t: 'Cảm ơn khách, gửi kèm 5 món đang giảm giá', s: 'Khách bấm "Mua ngay" ngay trong Messenger' },
    { k: 'ai', text: 'Dạ cảm ơn anh Phúc nha 🎉 Đơn đã được xác nhận, kỹ thuật qua lắp sớm cho anh. Nhà dùng nước giếng hay sắm thêm mấy món này, đang giảm giá ạ:' },
    { k: 'car', sp: [
        { img: 'bep', ten: 'Gói bảo dưỡng tại nhà 2 năm', gia: '1.161.000đ', cu: '1.290.000đ', giam: '-10%' },
        { img: 'binh-gn', ten: 'Bình giữ nhiệt 500ml cho bé', gia: '261.000đ', cu: '290.000đ', giam: '-10%' },
        { img: 'ly-nuoc', ten: 'Xét nghiệm nước giếng tại nhà', gia: '350.000đ', cu: '450.000đ', giam: '-22%' },
        { img: 'cot-loc', ten: 'Cột làm mềm nước, chống cặn', gia: '3.150.000đ', cu: '3.500.000đ', giam: '-10%' },
        { img: 'may-loc', ten: 'Máy RO nóng lạnh tặng ông bà', gia: '7.641.000đ', cu: '8.490.000đ', giam: '-10%' },
      ], d: 5200 },

    // Chăm sóc sau bán qua Zalo
    { k: 'zalo', gio: '19:30', ngay: 'CN 22/11/2026', chip: '3 ngày sau · khách đã lắp máy', d: 1500 },
    { k: 'cap', e: 'Chăm sóc sau bán qua Zalo', t: 'Lắp xong: AI hỏi nước uống có ổn không', s: 'Xin đánh giá ngay trong tin Zalo OA của shop' },
    { k: 'zns', zns: {
        img: 'bep', tieuDe: 'Anh Phúc ơi, nước nhà mình uống ổn không ạ?',
        noiDung: 'An Tâm cảm ơn anh đã lắp đơn **#AT40726** (Combo máy RO + cột lọc đầu nguồn). Anh nhớ xả rửa cột lọc **1 tuần/lần** nha. Anh đánh giá giúp shop nhé!',
        nut: 'Đánh giá sản phẩm',
      }, d: 4200 },
    { k: 'cap', e: 'ZBS · Sản phẩm bán chạy', t: '1 tuần sau: gửi sản phẩm bán chạy qua Zalo', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'CN 29/11/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['may-loc', 'cot-loc', 'binh-gn', 'bep'], nhan: 'TOP BÁN CHẠY TUẦN NÀY', mau: '#F97316',
        tieuDe: '🔥 Top bán chạy tuần này tại An Tâm',
        noiDung: 'Máy **RO nóng lạnh**, **cột lọc đầu nguồn** và **bình giữ nhiệt 500ml** đang được khách An Tâm chọn nhiều nhất tuần qua.',
        nut: 'Xem ngay',
      }, d: 4600 },
    { k: 'cap', e: 'ZBS · Khuyến mãi', t: '1 tuần sau nữa: gửi ưu đãi cho khách cũ', s: 'Kéo khách quay lại mua tiếp, không cần khách nhắn' },
    { k: 'zstamp', gio: '19:30', ngay: 'CN 06/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['bep', 'ly-nuoc', 'cot-loc', 'may-loc'], nhan: 'ƯU ĐÃI KHÁCH CŨ · GIẢM 15%',
        tieuDe: 'Ưu đãi riêng cho khách đã lắp máy tại An Tâm',
        noiDung: 'Gói **thay lõi, vệ sinh máy tại nhà** giảm **15%**, đo nước miễn phí. Tặng thêm voucher **ANTAM300** cho đơn từ 1.000.000đ.',
        nut: 'Xem gói',
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
    tag: { av: 'PL', ten: 'Lê Văn Phúc', sub: 'Messenger · từ quảng cáo máy RO nóng lạnh',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#maylocRO', 'qt hot'], ['#nonglanh', 'qt hot'], ['#mobile', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#CotLocDauNguon', 'qt']]]],
      im: 'Khách im từ 14:49, sau khi được báo giá',
      rule: { lb: 'Bám đuổi theo thẻ #maylocRO', tieuDe: '3 tin ngắn về máy RO nóng lạnh',
              dong: [['15 phút', 'Mời kiểm tra nước miễn phí'], ['3 tiếng', 'Gửi ảnh máy lắp thật'], ['20 tiếng', 'Ưu đãi combo giảm 700.000đ']] },
      reply: 'Khách trả lời "Nước giếng khoan e…" · dừng bám đuổi' },
    capi: { tieuDe: 'Gửi đơn hàng cho Facebook', event: 'Purchase', nhan: 'SỰ KIỆN MUA HÀNG', giaTri: '10.690.000đ', pk: 'Purchase · 10.690.000đ',
      dong: [['Đơn hàng', '#AT40726 · Combo RO + cột lọc'], ['Nguồn khách', 'Quảng cáo máy RO nóng lạnh → Messenger'], ['Giá trị', '10.690.000 VND'], ['Event ID', 'AT40726-PURCHASE (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện mua hàng' },
  },
  donHang: {
    ma: '#AT40726', sp: 'Combo máy lọc RO nóng lạnh + cột lọc đầu nguồn', bien: 'Tặng bộ lõi thô thay lần đầu · x1', img: 'may-loc', gia: '10.690.000đ',
    phi: ['Lắp đặt', 'miễn phí'],
    nv: { ten: 'Kỹ thuật Khánh', av: 'KK' },
    ten: 'Lê Văn Phúc', sdt: '0977 365 214', dc: 'Ấp 4, xã Củ Chi, TP.HCM', gio: '11:05 · 19/11/2026',
  },
};
