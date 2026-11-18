/* Kịch bản video demo NGANG 16:9: MỸ PHẨM (nhóm thương mại điện tử), làm 18/11/2026 theo mẫu YaMe (kich-ban-yame.js).
   Nội dung lấy từ bài 1 (demo/kich-ban/my-pham-tc.js): shop Bông Mai Skincare, Serum B5 + rau má 30ml 420.000đ
   (không cồn khô, không hương liệu), chị Thảo da dầu mụn nhạy cảm đang bôi thuốc bác sĩ kê buổi tối → serum buổi sáng,
   thuốc buổi tối, thử trên vùng da nhỏ, hỏi lại bác sĩ, serum không thay thuốc trị mụn; hóa đơn nhập, date 2028;
   bám đuổi #SerumB5 và theo giá (giảm 10% còn 378.000đ + tặng sữa rửa mặt gel mini, freeship), đơn #BM41207,
   bình luận của bạn Minh Anh (da đang treatment) dưới bài chống nắng SPF 50, sản phẩm bán thêm, voucher BONGMAI50.
   Ngành mỹ phẩm: AI không chẩn đoán, không hứa hết mụn, không bảo bỏ thuốc; luôn dặn thử trên da, hỏi lại bác sĩ.
   Mạch:
   - Cảnh 1: bài viết sữa chống nắng SPF 50, khách hỏi giá + bạn Minh Anh hỏi da đang treatment → AI trả lời cả 2
     → inbox: báo giá, ảnh, hỏi loại da → tư vấn, dặn thử trên da → xin SĐT, địa chỉ → lên đơn.
   - Cảnh 2: quảng cáo serum B5 → chị Thảo hỏi giá → AI gửi đúng ảnh quảng cáo → khách chụp toner "Này thì sao"
     → khách im → gắn thẻ, bám đuổi 3 tin → khách nói đang bôi thuốc → AI dặn cách dùng an toàn → chọn serum
     → khách quên SĐT, hỏi lại → chốt đơn → gửi sự kiện mua hàng lên Facebook → đơn tự động
     → cảm ơn + 5 món giảm giá → Zalo: hỏi thăm da, bán chạy, voucher.
   Tên shop, giá, khách, SĐT, địa chỉ: minh họa, dùng lại của bài 1. Tự đặt thêm: khách cảnh 1 (Hồng Nhung, SĐT, địa chỉ),
   giá giảm 10% trong carousel cho khách vừa mua. Ảnh: ảnh Unsplash có sẵn trong máy của bài 1. */
window.VN_KB = {
  ten: 'Mỹ phẩm video ngang',
  shop: { ten: 'Bông Mai Skincare', av: 'BM', mau: '#BE185D', sub: 'Thường trả lời ngay' },
  anh: {
    'serum': '../assets/img/u/1781344116880-029945a42b75_800x800.jpg',        // lọ serum thủy tinh nâu, nắp bóp giọt
    'cham-soc': '../assets/img/u/1581182800629-7d90925ad072_800x800.jpg',     // cô gái da căng ẩm, nhắm mắt
    'chong-nang': '../assets/img/u/1623676714504-edd78728155e_800x800.jpg',   // chai chống nắng SPF 50, thoa lên tay
    'sua-rua-mat': '../assets/img/u/1748639320154-6ba118bccc74_800x800.jpg',  // tuýp sữa rửa mặt dạng gel
    'toner': '../assets/img/u/1623143445418-40c192fa3d11_800x800.jpg',        // chai toner hồng có vòi nhấn
    'bo-my-pham': '../assets/img/u/1583209814683-c023dd293cc6_800x800.jpg',   // bộ mỹ phẩm màu hồng
    'kem-duong': '../assets/img/u/1761718209708-9ab9ba1c7252_800x800.jpg',    // thoa kem dưỡng lên mặt
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= CẢNH 1 · BÀI VIẾT → BÌNH LUẬN → INBOX ================= */
    { k: 'canh', nhan: 'Tình huống 1 · Bình luận xin giá → Inbox', gio: '21:14' },
    { k: 'fb', post: {
        gio: '2 giờ', img: 'chong-nang', likes: '1,6K', soCmt: '103 bình luận',
        text: 'Đi nắng cả ngày không lo bết dính ☀️ Sữa chống nắng SPF 50 cho da dầu, kiềm dầu, thấm nhanh, không để lại vệt trắng. Freeship đơn từ 300k!',
      }, d: 1600 },
    { k: 'cap', e: 'Bình luận xin giá', t: 'Khách hỏi giá ngay dưới bài viết', s: 'Một khách khác hỏi da đang treatment dùng được không' },
    { k: 'cmt', i: 0, ten: 'Hồng Nhung', av: 'HN', text: 'Giá sao shop ơi?' },
    { k: 'cmt', i: 1, ten: 'Minh Anh', av: 'MA', text: 'Da mình đang treatment, bôi kem này có bị kích ứng không shop?' },
    { k: 'cap', e: 'Trả lời cả 2 bình luận', t: 'Trả lời ngắn gọn, mời khách vào inbox', s: 'Tư vấn chi tiết trong tin nhắn riêng' },
    { k: 'rep', i: 0, text: 'Mình check ib shop nha 💬' },
    { k: 'rep', i: 1, text: 'Mình check ib shop nha 💬' },

    { k: 'ms', ref: { loai: 'cmt', img: 'chong-nang', dong1: 'Bạn đã bình luận về bài viết của Bông Mai Skincare', dong2: '"Giá sao shop ơi?"' }, gio: '21:16' },
    { k: 'cap', e: 'Tự động báo giá', t: 'Inbox trước: báo giá, gửi ảnh thật', s: 'Viết ngắn gọn, tự nhiên như người bán' },
    { k: 'ai', text: 'Dạ chào chị Nhung, sữa chống nắng **SPF 50** chai 50ml giá **310.000đ** ạ, freeship cho chị luôn.' },
    { k: 'ai', card: { title: 'Sữa chống nắng SPF 50 kiềm dầu, không bết · chai 50ml', gia: '310.000đ' } },
    { k: 'ai', img: 'chong-nang' },
    { k: 'ai', text: 'Da chị là **da dầu, da khô** hay **hỗn hợp** để em tư vấn cho đúng nha?' },
    { k: 'cap', e: 'Hỏi đúng 1 điều', t: 'Khách trả lời 1 câu, AI tư vấn đúng da', s: 'Lần đầu dùng: dặn thử trên vùng da nhỏ' },
    { k: 'kh', text: 'da c hỗn hợp thiên dầu, hay chạy xe ngoài nắng' },
    { k: 'ai', text: 'Dạ da hỗn hợp thiên dầu dùng loại này hợp ạ, **kiềm dầu, không bết**. Lần đầu dùng chị **thoa thử vùng da nhỏ** trước nha. Chị gửi em **SĐT và địa chỉ** để em lên đơn ạ 😊' },
    { k: 'cap', e: 'Chốt đơn', t: 'Xin SĐT, địa chỉ: khách đưa đủ', s: 'AI tóm tắt đơn ngay trong chat' },
    { k: 'kh', text: '0904 617 238, 21 Kim Mã, Ba Đình, HN' },
    { k: 'ai', text: 'Dạ em lên đơn cho chị rồi nha:\n– Sữa chống nắng SPF 50, chai 50ml\n– **310.000đ** (freeship)\n– 0904 617 238\n– 21 Kim Mã, Ba Đình, HN\nShop gọi chị xác nhận rồi giao liền ạ 🎉', d: 3800 },

    /* ================= CẢNH 2 · QUẢNG CÁO → MESSENGER ================= */
    { k: 'canh', nhan: 'Tình huống 2 · Quảng cáo → Messenger', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'serum', nhan: 'MESSENGER', tieuDe: 'Serum B5 + rau má · Nhắn shop tư vấn', nut: 'Gửi tin nhắn',
        text: 'Da dầu mụn, nhạy cảm cần dịu và đủ ẩm 🌿 Serum B5 + rau má 30ml không cồn khô, không hương liệu, mỏng nhẹ thấm nhanh. Có hóa đơn nhập, date rõ. #serumb5 #damun #mobile',
      }, d: 1500 },
    { k: 'cap', e: 'Quảng cáo Facebook', t: 'Khách bấm "Gửi tin nhắn" từ quảng cáo', s: 'Hỏi gì, AI trả lời ngay lập tức' },
    { k: 'tap', d: 1100 },
    { k: 'ms', ref: { loai: 'ad', img: 'serum', dong1: 'Thảo đã trả lời một quảng cáo', dong2: 'Serum B5 + rau má' }, gio: '14:47', d: 900 },
    { k: 'kh', text: 'Serum này giá sao shop?' },
    { k: 'cap', e: 'Khách hỏi giá', t: 'AI gửi đúng mẫu trên quảng cáo kèm giá', s: 'Khách không cần mô tả lại sản phẩm' },
    { k: 'ai', text: 'Dạ chào chị Thảo, **Serum B5 + rau má** 30ml trên quảng cáo giá **420.000đ** ạ, không cồn khô, không hương liệu.' },
    { k: 'ai', img: 'serum' },
    { k: 'ai', text: 'Chị đang dùng **thuốc hay sản phẩm trị mụn** nào không, để em dặn cách dùng cho đúng nha?' },
    { k: 'cap', e: 'Không hỏi lại khách', t: 'Khách chụp mẫu khác hỏi "Này thì sao"', s: 'Chỉ một câu cộc lốc, không ghi tên mẫu' },
    { k: 'kh', shot: { img: 'toner', cap: 'Toner không cồn 150ml, cấp ẩm, dịu da ngay sau bước rửa mặt 💧' } },
    { k: 'kh', text: 'Này thì sao' },
    { k: 'cap', e: 'Nhận diện sản phẩm từ ảnh', t: 'Đúng mẫu. Đúng giá. Đúng tồn kho.', s: 'AI đọc ảnh khách gửi, khớp với kho sản phẩm của shop' },
    { k: 'ai', text: 'Dạ đây là **toner không cồn** chai 150ml ạ, còn hàng chị nha.' },
    { k: 'ai', card: { title: 'Toner không cồn cấp ẩm, dịu da · chai 150ml', gia: '250.000đ' } },
    { k: 'ai', img: 'toner' },
    { k: 'ai', text: 'Chị nhắn em da đang dùng thuốc, sản phẩm gì để em dặn cách dùng cả 2 món nha.' },

    // Khách im → màn hình phụ: gắn thẻ (3 hashtag của bài quảng cáo + thẻ từ cuộc chat), bám đuổi 3 tin theo thẻ
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Preny tự gắn thẻ đúng mẫu khách quan tâm', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi theo thẻ', t: '3 tin ngắn: 15 phút, 3 tiếng, 20 tiếng', s: 'Chỉ nói về đúng mẫu khách quan tâm' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Chị Thảo ơi, serum B5 đợt này **còn ít hàng** lắm ạ. Chị nhắn em da đang dùng gì để em dặn cách dùng, giữ hàng cho chị nha 😊' },
    { k: 'p', a: 'r1', d: 900 },
    { k: 'time', nhan: '3 tiếng sau', gio: '17:49', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Em gửi chị ảnh sản phẩm nha 📸 Serum mỏng nhẹ, thấm nhanh, da dầu không bết. Hàng có **hóa đơn nhập**, **date 2028** ạ.' },
    { k: 'ai', img: 'cham-soc' },
    { k: 'p', a: 'r2', d: 900 },
    { k: 'time', nhan: '20 tiếng sau', gio: '10:49', ngay: 'T5 19/11/2026', d: 700 },
    { k: 'ai', text: 'Serum B5 chị hỏi, chốt trong hôm nay em **giảm 10% còn 378.000đ** + **tặng sữa rửa mặt gel mini**, freeship ạ 🎁' },
    { k: 'p', a: 'r3', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 3, khách trả lời để chốt đơn', s: 'Khách đang bôi thuốc bác sĩ kê' },
    { k: 'kh', text: 'Tối c đang bôi thuốc trị mụn bs kê, dùng chung đc k e?' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },

    { k: 'cap', e: 'Tư vấn an toàn', t: 'Không hứa hết mụn, không thay thuốc', s: 'Dặn thử trên da, hỏi lại bác sĩ đang điều trị' },
    { k: 'ai', text: 'Dạ chị dùng **serum buổi sáng**, **thuốc bôi buổi tối**, không bôi chồng lên nhau ạ. Chị **thử trên vùng da nhỏ** 2–3 ngày trước và **hỏi lại bác sĩ** đang điều trị cho chắc nha.' },
    { k: 'ai', text: 'Serum chỉ giúp **dịu da, cấp ẩm**, không thay thuốc trị mụn ạ. Chị lấy serum hay toner để em lên đơn nha?' },
    { k: 'kh', text: 'Lấy c 1 lọ serum nha e' },
    { k: 'cap', e: 'Hỏi đúng thứ còn thiếu', t: 'Khách chọn serum: AI báo quà tặng kèm', s: 'Gửi ảnh quà để khách thấy rõ' },
    { k: 'ai', text: 'Dạ em ghi **Serum B5 30ml**, **378.000đ**, tặng **sữa rửa mặt gel mini** như hình nha chị.' },
    { k: 'ai', img: 'sua-rua-mat' },
    { k: 'ai', text: 'Chị gửi em **SĐT và địa chỉ** nhận hàng nha.' },
    { k: 'cap', e: 'Kiểm tra dữ liệu', t: 'Thiếu SĐT → hỏi lại ngay lập tức' },
    { k: 'kh', text: '12 Lê Văn Sỹ, P. Phú Nhuận, HCM' },
    { k: 'ai', text: 'Dạ em ghi địa chỉ rồi ạ, chị cho em xin thêm **SĐT** để shipper gọi giao hàng nha.' },
    { k: 'kh', text: '0938 216 457' },
    { k: 'cap', e: 'Chốt đơn', t: 'Tự tổng hợp đơn: sản phẩm, quà tặng, SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ chị kiểm tra lại đơn giúp em nha:\n– Serum B5 + rau má 30ml\n– Tặng sữa rửa mặt gel mini\n– Tổng: **378.000đ** (freeship)\n– 0938 216 457\n– 12 Lê Văn Sỹ, P. Phú Nhuận, HCM\nChị xác nhận giúp em đơn này nha.', nut: 'Quản lý đơn hàng', d: 3600 },
    { k: 'cap', e: 'Xong', t: 'Khách chỉ cần nói "Ok e"' },
    { k: 'kh', text: 'Ok e' },
    { k: 'ai', text: 'Dạ em lên đơn cho chị liền nha ⚡', d: 1300 },

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

    // Mua xong: tin cảm ơn kèm 5 món đang giảm giá (afterSale.sp của bài 1, giảm 10% cho khách vừa mua)
    { k: 'cap', e: 'Bán thêm sau mua', t: 'Cảm ơn khách, gửi kèm 5 món đang giảm giá', s: 'Khách bấm "Mua ngay" ngay trong Messenger' },
    { k: 'ai', text: 'Dạ cảm ơn chị Thảo nha 🎉 Đơn đã được xác nhận, shop giao sớm cho chị. Khách vừa mua được giảm 10% mấy món dùng kèm này, chị xem thử nha:' },
    { k: 'car', sp: [
        { img: 'chong-nang', ten: 'Sữa chống nắng SPF 50', gia: '279.000đ', cu: '310.000đ', giam: '-10%' },
        { img: 'sua-rua-mat', ten: 'Sữa rửa mặt dạng gel', gia: '189.000đ', cu: '210.000đ', giam: '-10%' },
        { img: 'toner', ten: 'Toner không cồn 150ml', gia: '225.000đ', cu: '250.000đ', giam: '-10%' },
        { img: 'kem-duong', ten: 'Kem dưỡng ẩm phục hồi', gia: '315.000đ', cu: '350.000đ', giam: '-10%' },
        { img: 'bo-my-pham', ten: 'Bộ dưỡng da cơ bản 4 món', gia: '891.000đ', cu: '990.000đ', giam: '-10%' },
      ], d: 5200 },

    // Chăm sóc sau bán qua Zalo
    { k: 'zalo', gio: '19:30', ngay: 'CN 22/11/2026', chip: '3 ngày sau · khách đã nhận hàng', d: 1500 },
    { k: 'cap', e: 'Chăm sóc sau bán qua Zalo', t: 'Khách nhận hàng: AI hỏi da dùng thấy sao', s: 'Dặn lại cách dùng, xin đánh giá qua Zalo OA' },
    { k: 'zns', zns: {
        img: 'serum', tieuDe: 'Chị Thảo ơi, da dùng serum thấy sao ạ?',
        noiDung: 'Bông Mai cảm ơn chị đã nhận đơn **#BM41207** (Serum B5 + rau má). Sáng dùng serum, tối bôi thuốc bác sĩ kê. Da **rát, đỏ** thì chị ngưng và hỏi bác sĩ nha. Chị đánh giá giúp shop nha!',
        nut: 'Đánh giá sản phẩm',
      }, d: 4400 },
    { k: 'cap', e: 'ZBS · Sản phẩm bán chạy', t: '1 tuần sau: gửi món bán chạy qua Zalo', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'CN 29/11/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['chong-nang', 'sua-rua-mat', 'toner', 'kem-duong'], nhan: 'TOP BÁN CHẠY TUẦN NÀY', mau: '#F97316',
        tieuDe: '🔥 Top bán chạy tuần này tại Bông Mai',
        noiDung: 'Sữa chống nắng **SPF 50**, sữa rửa mặt **dạng gel** và toner **không cồn** đang được khách da dầu chọn nhiều nhất tuần qua.',
        nut: 'Xem ngay',
      }, d: 4600 },
    { k: 'cap', e: 'ZBS · Khuyến mãi', t: '1 tuần sau nữa: gửi ưu đãi cho khách cũ', s: 'Kéo khách quay lại mua tiếp, không cần khách nhắn' },
    { k: 'zstamp', gio: '19:30', ngay: 'CN 06/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['serum', 'chong-nang', 'kem-duong', 'bo-my-pham'], nhan: 'VOUCHER 50K · KHÁCH ĐÃ MUA',
        tieuDe: 'Tặng chị Thảo voucher 50.000đ',
        noiDung: 'Nhập mã **BONGMAI50** giảm 50.000đ cho đơn từ 400.000đ. Hạn dùng đến 31/01/2027.',
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
    tag: { av: 'NT', ten: 'Nguyễn Ngọc Thảo', sub: 'Messenger · từ quảng cáo Serum B5',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#serumb5', 'qt hot'], ['#damun', 'qt hot'], ['#mobile', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#TonerKhongCon', 'qt']]]],
      im: 'Khách im từ 14:49, sau khi được báo giá',
      rule: { lb: 'Bám đuổi theo thẻ #serumb5', tieuDe: '3 tin ngắn về serum B5 + rau má',
              dong: [['15 phút', 'Nhắc hàng còn ít, giữ hàng'], ['3 tiếng', 'Ảnh sản phẩm, hóa đơn, date'], ['20 tiếng', 'Giảm 10%, tặng sữa rửa mặt']] },
      reply: 'Khách trả lời "Tối c đang bôi thuốc…" · dừng bám đuổi' },
    capi: { tieuDe: 'Gửi đơn hàng cho Facebook', event: 'Purchase', nhan: 'SỰ KIỆN MUA HÀNG', giaTri: '378.000đ', pk: 'Purchase · 378.000đ',
      dong: [['Đơn hàng', '#BM41207 · Serum B5 + rau má 30ml'], ['Nguồn khách', 'Quảng cáo Serum B5 → Messenger'], ['Giá trị', '378.000 VND'], ['Event ID', 'BM41207-PURCHASE (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện mua hàng' },
  },
  donHang: {
    ma: '#BM41207', sp: 'Serum B5 + rau má 30ml', bien: 'x1 · tặng sữa rửa mặt gel mini', img: 'serum', gia: '378.000đ',
    phi: ['Phí vận chuyển', 'freeship'],
    nv: { ten: 'Nhân viên Vy', av: 'VY' },
    ten: 'Nguyễn Ngọc Thảo', sdt: '0938 216 457', dc: '12 Lê Văn Sỹ, P. Phú Nhuận, TP.HCM', gio: '11:05 · 19/11/2026',
  },
};
