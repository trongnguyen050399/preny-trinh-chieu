/* Kịch bản video demo NGANG 16:9: GIÀY DÉP (nhóm thương mại điện tử), làm 18/11/2026 theo mẫu YaMe (kich-ban-yame.js).
   Nội dung lấy từ bài 1 (demo/kich-ban/giay-dep-tc.js): shop Giày Bước Êm, giày búp bê lưới đế êm 389.000đ, chị Thảo giáo viên chân bè,
   ca khó mỗi hãng một size → hỏi chiều dài bàn chân (23,5cm → size 37), bám đuổi #GiayBupBe (ảnh thật đủ màu) và theo giá
   (giảm còn 349.000đ + freeship + tặng lót gót), đơn #BE20418, sản phẩm bán thêm, voucher BUOCEM50.
   Mạch:
   - Cảnh 1: bài viết sneaker trắng đế êm, khách hỏi giá + khách hỏi chân bè (câu bình luận của bài 1) → AI trả lời cả 2
     → inbox: báo giá, ảnh, hỏi chiều dài bàn chân → chọn size → xin SĐT, địa chỉ → lên đơn.
   - Cảnh 2: quảng cáo búp bê lưới → chị Thảo hỏi giá → AI gửi đúng ảnh quảng cáo → khách chụp sandal "Này thì sao"
     → khách im → gắn thẻ, bám đuổi 3 tin → khách đưa số đo → chọn búp bê, chọn màu → thiếu số nhà, hỏi lại → chốt đơn
     → gửi sự kiện mua hàng lên Facebook → đơn tự động → cảm ơn + 5 mẫu giảm giá → Zalo: hỏi thăm, bán chạy, voucher.
   Tên shop, giá, khách, SĐT, địa chỉ: minh họa, dùng lại của bài 1. Tự đặt thêm: khách cảnh 1 (Quốc Bảo, SĐT, địa chỉ),
   giá giảm 10% trong carousel cho khách vừa mua. Ảnh: ảnh Unsplash có sẵn trong máy của bài 1. */
window.VN_KB = {
  ten: 'Giày dép video ngang',
  shop: { ten: 'Giày Bước Êm', av: 'BE', mau: '#B45309', sub: 'Thường trả lời ngay' },
  anh: {
    'bup-be': '../assets/img/u/1758542988664-49951c5b1999_800x800.jpg',        // giày búp bê lưới đen, nơ nhỏ
    'bup-be-2': '../assets/img/u/1720604083961-88336789791e_800x800.jpg',      // búp bê nhiều màu: đỏ, kem, trắng, đen
    'sneaker': '../assets/img/u/1626379616459-b2ce1d9decbc_800x800.jpg',       // sneaker trắng
    'giay-da-nam': '../assets/img/u/1641893843833-a006778dc00b_800x800.jpg',   // giày da nam buộc dây, nâu đỏ
    'giay-da-nam-2': '../assets/img/u/1603191659812-ee978eeeef76_800x800.jpg', // giày da nam màu bò
    'cao-got': '../assets/img/u/1535043934128-cf0b28d52f95_800x800.jpg',       // cao gót mũi nhọn màu kem
    'sandal': '../assets/img/u/1662132090867-57a37fa1edf8_800x800.jpg',        // sandal quai ngang màu bò
    'cua-hang': '../assets/img/u/1633464129147-777bdcc97c1d_800x800.jpg',      // kệ giày trong cửa hàng
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= CẢNH 1 · BÀI VIẾT → BÌNH LUẬN → INBOX ================= */
    { k: 'canh', nhan: 'Tình huống 1 · Bình luận xin giá → Inbox', gio: '21:14' },
    { k: 'fb', post: {
        gio: '2 giờ', img: 'sneaker', likes: '1,4K', soCmt: '92 bình luận',
        text: 'Đi cả ngày không mỏi chân 👟 Sneaker trắng đế êm, lót đệm mút chống mỏi, phối đồ gì cũng hợp. Đổi size miễn phí 7 ngày!',
      }, d: 1600 },
    { k: 'cap', e: 'Bình luận xin giá', t: 'Khách hỏi giá ngay dưới bài viết', s: 'Một khách khác hỏi chân bè có đi được không' },
    { k: 'cmt', i: 0, ten: 'Quốc Bảo', av: 'QB', text: 'Giá sao shop ơi?' },
    { k: 'cmt', i: 1, ten: 'Lê Hương', av: 'LH', text: 'Chân c to bè, mu bàn chân cao đi được không shop? Có size 39 không?' },
    { k: 'cap', e: 'Trả lời cả 2 bình luận', t: 'Trả lời ngắn gọn, mời khách vào inbox', s: 'Tư vấn chi tiết trong tin nhắn riêng' },
    { k: 'rep', i: 0, text: 'Mình check ib shop nha 💬' },
    { k: 'rep', i: 1, text: 'Mình check ib shop nha 💬' },

    { k: 'ms', ref: { loai: 'cmt', img: 'sneaker', dong1: 'Bạn đã bình luận về bài viết của Giày Bước Êm', dong2: '"Giá sao shop ơi?"' }, gio: '21:16' },
    { k: 'cap', e: 'Tự động báo giá', t: 'Inbox trước: báo giá, gửi ảnh thật', s: 'Viết ngắn gọn, tự nhiên như người bán' },
    { k: 'ai', text: 'Dạ chào anh Bảo, sneaker trắng đế êm giá **459.000đ** ạ, đổi size miễn phí 7 ngày.' },
    { k: 'ai', card: { title: 'Sneaker trắng đế êm đi cả ngày, lót đệm mút chống mỏi', gia: '459.000đ' } },
    { k: 'ai', imgs: ['sneaker', 'cua-hang'] },
    { k: 'ai', text: 'Mỗi hãng một bảng size nên anh cho em xin **chiều dài bàn chân** (đo từ gót tới ngón dài nhất) để em chọn đúng size nha?' },
    { k: 'cap', e: 'Tư vấn size', t: 'Khách trả lời 1 câu, AI chọn đúng size', s: 'Kiểm tra luôn size đó còn hàng' },
    { k: 'kh', text: 'a đo đc 26cm, hay đi 41 với 42' },
    { k: 'ai', text: 'Dạ chân **26cm** anh lấy **size 41** là vừa ạ, size 41 còn hàng. Anh gửi em **SĐT và địa chỉ** để em lên đơn nha 😊' },
    { k: 'cap', e: 'Chốt đơn', t: 'Xin SĐT, địa chỉ: khách đưa đủ', s: 'AI tóm tắt đơn ngay trong chat' },
    { k: 'kh', text: '0905 318 246, 41 Hoàng Diệu, Hải Châu, Đà Nẵng' },
    { k: 'ai', text: 'Dạ em lên đơn cho anh rồi nha:\n– Sneaker trắng đế êm, size 41\n– **459.000đ**\n– 0905 318 246\n– 41 Hoàng Diệu, Hải Châu, Đà Nẵng\nShop gọi anh xác nhận rồi giao liền ạ 🎉', d: 3800 },

    /* ================= CẢNH 2 · QUẢNG CÁO → MESSENGER ================= */
    { k: 'canh', nhan: 'Tình huống 2 · Quảng cáo → Messenger', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'bup-be', nhan: 'MESSENGER', tieuDe: 'Búp bê lưới đế êm · Nhắn shop chọn size', nut: 'Gửi tin nhắn',
        text: 'Đứng lớp, đứng quầy cả ngày vẫn êm chân 🌸 Giày búp bê lưới form rộng mũi tròn, chân bè đi không cấn ngón, đổi size 7 ngày. #giaybupbe #deem #mobile',
      }, d: 1500 },
    { k: 'cap', e: 'Quảng cáo Facebook', t: 'Khách bấm "Gửi tin nhắn" từ quảng cáo', s: 'Hỏi gì, AI trả lời ngay lập tức' },
    { k: 'tap', d: 1100 },
    { k: 'ms', ref: { loai: 'ad', img: 'bup-be', dong1: 'Thảo đã trả lời một quảng cáo', dong2: 'Búp bê lưới đế êm' }, gio: '14:47', d: 900 },
    { k: 'kh', text: 'Mẫu này giá bao nhiêu shop?' },
    { k: 'cap', e: 'Khách hỏi giá', t: 'AI gửi đúng mẫu trên quảng cáo kèm giá', s: 'Khách không cần mô tả lại sản phẩm' },
    { k: 'ai', text: 'Dạ chào chị Thảo, giày **búp bê lưới đế êm** trên quảng cáo giá **389.000đ** ạ, đủ size 35 đến 40.' },
    { k: 'ai', img: 'bup-be' },
    { k: 'ai', text: 'Mỗi hãng một bảng size nên chị cho em xin **chiều dài bàn chân** để em chọn đúng size nha.' },
    { k: 'cap', e: 'Không hỏi lại khách', t: 'Khách chụp mẫu khác hỏi "Này thì sao"', s: 'Chỉ một câu cộc lốc, không ghi tên mẫu' },
    { k: 'kh', shot: { img: 'sandal', cap: 'Sandal quai ngang đế êm, đi chơi cuối tuần cả ngày không mỏi 🌿' } },
    { k: 'kh', text: 'Này thì sao' },
    { k: 'cap', e: 'Nhận diện sản phẩm từ ảnh', t: 'Đúng mẫu. Đúng giá. Đúng tồn kho.', s: 'AI đọc ảnh khách gửi, khớp với kho sản phẩm của shop' },
    { k: 'ai', text: 'Dạ đây là **sandal quai ngang đế êm** ạ, size 35 đến 40 còn đủ chị nha.' },
    { k: 'ai', card: { title: 'Sandal quai ngang đế êm chống mỏi, màu bò', gia: '329.000đ' } },
    { k: 'ai', img: 'sandal' },
    { k: 'ai', text: 'Chị cho em xin **chiều dài bàn chân** để em chọn size cả 2 mẫu nha.' },

    // Khách im → màn hình phụ: gắn thẻ (3 hashtag của bài quảng cáo + thẻ từ cuộc chat), bám đuổi 3 tin theo thẻ
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Preny tự gắn thẻ đúng mẫu khách quan tâm', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi theo thẻ', t: '3 tin ngắn: 15 phút, 3 tiếng, 20 tiếng', s: 'Chỉ nói về đúng mẫu khách quan tâm' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Chị Thảo ơi, búp bê lưới **size 37, 38** còn ít lắm ạ. Chị nhắn em chiều dài bàn chân để em giữ size nha 😊' },
    { k: 'p', a: 'r1', d: 900 },
    { k: 'time', nhan: '3 tiếng sau', gio: '17:49', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Em gửi chị ảnh thật đủ màu nha 📸 Nhiều cô giáo bên em mua, đứng lớp cả ngày không mỏi chân.' },
    { k: 'ai', img: 'bup-be-2' },
    { k: 'p', a: 'r2', d: 900 },
    { k: 'time', nhan: '20 tiếng sau', gio: '10:49', ngay: 'T5 19/11/2026', d: 700 },
    { k: 'ai', text: 'Búp bê lưới chốt trong hôm nay em **giảm còn 349.000đ** + **freeship**, tặng cặp lót gót êm ạ 🎁' },
    { k: 'p', a: 'r3', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 3, khách trả lời để chốt đơn', s: 'AI tư vấn size ngay khi khách nhắn' },
    { k: 'kh', text: '23,5cm e, chân c hơi bè' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },

    { k: 'cap', e: 'Tư vấn size', t: '23,5cm, chân bè → size 37, không cần tăng size', s: 'Rồi chủ động hỏi: lấy búp bê hay sandal?' },
    { k: 'ai', text: 'Dạ chân **23,5cm** chị lấy **size 37** là vừa ạ. Búp bê lưới form rộng nên chân bè không cấn, không cần tăng size. Chị lấy búp bê hay sandal để em lên đơn nha?' },
    { k: 'kh', text: 'Lấy đôi búp bê' },
    { k: 'cap', e: 'Hỏi đúng thứ còn thiếu', t: 'Khách chọn búp bê: AI hỏi tiếp màu', s: 'Gửi ảnh các màu để khách chọn nhanh' },
    { k: 'ai', text: 'Dạ búp bê có 4 màu **Đen, Kem, Trắng, Đỏ**, cùng giá **349.000đ** hôm nay. Chị lấy màu nào ạ?' },
    { k: 'ai', imgs: ['bup-be', 'bup-be-2'] },
    { k: 'kh', text: 'Màu đen như hình nha e' },
    { k: 'ai', text: 'Dạ em ghi búp bê lưới **Đen size 37**, 349.000đ. Chị gửi em **SĐT và địa chỉ** nhận hàng nha.' },
    { k: 'cap', e: 'Kiểm tra dữ liệu', t: 'Thiếu số nhà → hỏi lại ngay lập tức' },
    { k: 'kh', text: '0912 486 357, ngõ 42 Trần Cung, Cầu Giấy, HN' },
    { k: 'ai', text: 'Dạ em ghi SĐT rồi ạ, chị cho em xin thêm **số nhà** trong ngõ 42 để shipper giao đúng nha.' },
    { k: 'kh', text: 'Số 18 e' },
    { k: 'cap', e: 'Chốt đơn', t: 'Tự tổng hợp đơn: mẫu, màu, size, SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ chị kiểm tra lại đơn giúp em nha:\n– Giày búp bê lưới đế êm, Đen, size 37\n– Tặng cặp lót gót êm\n– Tổng: **349.000đ** (freeship)\n– 0912 486 357\n– 18 ngõ 42 Trần Cung, Cầu Giấy, HN\nChị xác nhận giúp em đơn này nha.', nut: 'Quản lý đơn hàng', d: 3600 },
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

    // Mua xong: tin cảm ơn kèm 5 mẫu đang giảm giá (afterSale.sp của bài 1, giảm 10% cho khách vừa mua)
    { k: 'cap', e: 'Bán thêm sau mua', t: 'Cảm ơn khách, gửi kèm 5 mẫu đang giảm giá', s: 'Khách bấm "Mua ngay" ngay trong Messenger' },
    { k: 'ai', text: 'Dạ cảm ơn chị Thảo nha 🎉 Đơn đã được xác nhận, shop giao sớm cho chị. Khách vừa mua được giảm 10% mấy mẫu đế êm này, chị xem thử nha:' },
    { k: 'car', sp: [
        { img: 'sandal', ten: 'Sandal quai ngang đế êm', gia: '296.000đ', cu: '329.000đ', giam: '-10%' },
        { img: 'sneaker', ten: 'Sneaker trắng đế êm', gia: '413.000đ', cu: '459.000đ', giam: '-10%' },
        { img: 'cao-got', ten: 'Cao gót mũi nhọn lót êm', gia: '386.000đ', cu: '429.000đ', giam: '-10%' },
        { img: 'giay-da-nam', ten: 'Giày da nam buộc dây', gia: '801.000đ', cu: '890.000đ', giam: '-10%' },
        { img: 'giay-da-nam-2', ten: 'Giày da nam màu bò', gia: '855.000đ', cu: '950.000đ', giam: '-10%' },
      ], d: 5200 },

    // Chăm sóc sau bán qua Zalo
    { k: 'zalo', gio: '19:30', ngay: 'CN 22/11/2026', chip: '3 ngày sau · khách đã nhận hàng', d: 1500 },
    { k: 'cap', e: 'Chăm sóc sau bán qua Zalo', t: 'Khách nhận hàng: AI hỏi đi có êm không', s: 'Xin đánh giá ngay trong tin Zalo OA của shop' },
    { k: 'zns', zns: {
        img: 'bup-be', tieuDe: 'Chị Thảo ơi, giày đi có êm chân không ạ?',
        noiDung: 'Giày Bước Êm cảm ơn chị đã nhận đơn **#BE20418** (Búp bê lưới · Đen · 37). Giày lưới chị lau khăn ẩm, phơi chỗ mát nha. Chị đánh giá giúp shop nha!',
        nut: 'Đánh giá sản phẩm',
      }, d: 4200 },
    { k: 'cap', e: 'ZBS · Sản phẩm bán chạy', t: '1 tuần sau: gửi mẫu bán chạy qua Zalo', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'CN 29/11/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['sneaker', 'cao-got', 'bup-be-2', 'giay-da-nam'], nhan: 'TOP BÁN CHẠY TUẦN NÀY', mau: '#F97316',
        tieuDe: '🔥 Top bán chạy tuần này tại Giày Bước Êm',
        noiDung: 'Sneaker trắng **đế êm**, cao gót **mũi nhọn lót êm** và giày da nam **buộc dây** đang được khách chọn nhiều nhất mùa tiệc cuối năm.',
        nut: 'Xem ngay',
      }, d: 4600 },
    { k: 'cap', e: 'ZBS · Khuyến mãi', t: '1 tuần sau nữa: gửi ưu đãi cho khách cũ', s: 'Kéo khách quay lại mua tiếp, không cần khách nhắn' },
    { k: 'zstamp', gio: '19:30', ngay: 'CN 06/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['sandal', 'sneaker', 'cao-got', 'giay-da-nam-2'], nhan: 'VOUCHER 50K · KHÁCH ĐÃ MUA',
        tieuDe: 'Tặng chị Thảo voucher 50.000đ',
        noiDung: 'Nhập mã **BUOCEM50** giảm 50.000đ cho đơn từ 400.000đ. Hạn dùng đến 31/01/2027.',
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
    tag: { av: 'TT', ten: 'Trần Thị Thảo', sub: 'Messenger · từ quảng cáo Búp bê lưới',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#giaybupbe', 'qt hot'], ['#deem', 'qt hot'], ['#mobile', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#SandalQuaiNgang', 'qt']]]],
      im: 'Khách im từ 14:49, sau khi được báo giá',
      rule: { lb: 'Bám đuổi theo thẻ #giaybupbe', tieuDe: '3 tin ngắn về giày búp bê lưới',
              dong: [['15 phút', 'Nhắc size 37, 38 còn ít'], ['3 tiếng', 'Gửi ảnh thật đủ màu'], ['20 tiếng', 'Giảm giá, freeship, giữ size']] },
      reply: 'Khách trả lời "23,5cm e, chân c hơi bè" · dừng bám đuổi' },
    capi: { tieuDe: 'Gửi đơn hàng cho Facebook', event: 'Purchase', nhan: 'SỰ KIỆN MUA HÀNG', giaTri: '349.000đ', pk: 'Purchase · 349.000đ',
      dong: [['Đơn hàng', '#BE20418 · Búp bê lưới · Đen · 37'], ['Nguồn khách', 'Quảng cáo Búp bê lưới → Messenger'], ['Giá trị', '349.000 VND'], ['Event ID', 'BE20418-PURCHASE (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện mua hàng' },
  },
  donHang: {
    ma: '#BE20418', sp: 'Giày búp bê lưới đế êm', bien: 'Đen · Size 37 · x1 · tặng lót gót', img: 'bup-be', gia: '349.000đ',
    phi: ['Phí vận chuyển', 'freeship'],
    nv: { ten: 'Nhân viên Ngân', av: 'NG' },
    ten: 'Trần Thị Thảo', sdt: '0912 486 357', dc: '18 ngõ 42 Trần Cung, Cầu Giấy, Hà Nội', gio: '11:05 · 19/11/2026',
  },
};
