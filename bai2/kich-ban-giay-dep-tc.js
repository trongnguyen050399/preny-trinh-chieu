/* Bài 2 (video demo ngang tự chạy): GIÀY DÉP (Giày Bước Êm), nhóm thương mại điện tử. Viết lại 18/11/2026 theo mạch mới
   người dùng chốt cùng ngày (mẫu demo/bai2/kich-ban-yen-chung-tuoi-tc.js, video-ngang/HUONG-DAN-BAI2.md mục "Mạch tmdt"):
   - 1 cảnh duy nhất: quảng cáo giày búp bê lưới đế êm, 2 khách bình luận (hỏi giá, hỏi chân bè + size 39) → trả lời cả 2 "Mình check ib shop nha"
     → AI nhắn inbox trước: giá + đúng ảnh quảng cáo, hỏi chiều dài bàn chân → chị Thảo: 23,5cm, chân bè, mỗi hãng một size (ca khó)
     → AI chọn size 37, không cần tăng size, hỏi màu → khách chọn Đen → AI xin SĐT + địa chỉ → khách im
     → gắn thẻ (3 hashtag quảng cáo + #baogia + #Size37) → bám đuổi 3 tin 15 phút, 3 tiếng, 20 tiếng (tin 3: giảm còn 349.000đ + freeship của bài 1)
     → khách gửi SĐT + địa chỉ (ca khó: thiếu số nhà trong ngõ) → tóm tắt đơn → Purchase lên Facebook → đơn tự động, nhân viên bấm xác nhận
     → cảm ơn + 5 mẫu giảm giá → Zalo: hỏi thăm, dặn bảo quản giày lưới, bán chạy, voucher → tổng kết → logo.
   - Chỉ 1 sản phẩm từ đầu tới cuối (giày búp bê lưới đế êm), không có đoạn khách hỏi sản phẩm khác.
   Tên shop, giá, chính sách, khách, SĐT, địa chỉ: minh họa của bài 1 (demo/kich-ban/giay-dep-tc.js). Tự đặt thêm: giá giảm 10% trong carousel
   cho khách vừa mua. Ảnh: ảnh Unsplash có sẵn trong máy của bài 1. */
window.VN_KB = {
  ten: 'Giày dép video ngang',
  ketSub: 'Để AI tư vấn size, bám đuổi và lên đơn giày cho shop của bạn',
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

    /* ================= BÌNH LUẬN QUẢNG CÁO → INBOX (cảnh duy nhất) ================= */
    { k: 'canh', nhan: 'Bình luận quảng cáo → Inbox', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'bup-be', nhan: 'MESSENGER', tieuDe: 'Búp bê lưới đế êm · Nhắn shop chọn size', nut: 'Gửi tin nhắn',
        text: 'Đứng lớp, đứng quầy cả ngày vẫn êm chân 🌸 Giày búp bê lưới form rộng mũi tròn, chân bè đi không cấn ngón, đổi size 7 ngày. #giaybupbe #deem #mobile',
      }, d: 1500 },
    { k: 'cap', e: 'Bình luận hỏi giá', t: 'Khách hỏi giá ngay dưới quảng cáo', s: 'Một khách khác hỏi chân bè, có size 39 không' },
    { k: 'cmt', i: 0, ten: 'Thảo Trần', av: 'TT', text: 'Mẫu này giá bao nhiêu shop?' },
    { k: 'cmt', i: 1, ten: 'Lê Hương', av: 'LH', text: 'Chân c to bè, mu cao đi được không shop? Có size 39 không?' },
    { k: 'cap', e: 'Trả lời cả 2 bình luận', t: 'Trả lời ngắn gọn, mời khách vào inbox', s: 'Tư vấn chi tiết trong tin nhắn riêng' },
    { k: 'rep', i: 0, text: 'Mình check ib shop nha 💬' },
    { k: 'rep', i: 1, text: 'Mình check ib shop nha 💬' },
    { k: 'ms', ref: { loai: 'cmt', img: 'bup-be', dong1: 'Bạn đã bình luận về quảng cáo của Giày Bước Êm', dong2: '"Mẫu này giá bao nhiêu shop?"' }, gio: '14:47' },
    { k: 'cap', e: 'AI nhắn trước', t: 'Inbox trước: báo giá, gửi đúng ảnh quảng cáo', s: 'Khách không cần mô tả lại sản phẩm' },
    { k: 'ai', text: 'Dạ chào chị Thảo, giày **búp bê lưới đế êm** giá **389.000đ** ạ, đủ size 35 đến 40, đổi size miễn phí 7 ngày.' },
    { k: 'ai', img: 'bup-be' },
    { k: 'ai', text: 'Mỗi hãng một bảng size nên chị cho em xin **chiều dài bàn chân** (đo từ gót tới ngón dài nhất) để em chọn đúng size nha?' },

    { k: 'cap', e: 'Khách trả lời', t: 'Mỗi hãng 1 size → chọn theo số đo', s: '23,5cm, chân bè: size 37, không cần tăng size' },
    { k: 'kh', text: 'c đo đc 23,5cm, chân hơi bè. C đi 37 hãng này 38 hãng kia, sợ đau chân lắm e' },
    { k: 'ai', text: 'Dạ chân **23,5cm** chị lấy **size 37** là vừa ạ. Mẫu này form rộng, lưới mềm nên chân bè không cấn ngón, chị không cần tăng size kẻo tuột gót nha.' },
    { k: 'cap', e: 'Hỏi đúng thứ còn thiếu', t: 'Có size rồi: AI hỏi tiếp màu giày', s: 'Gửi ảnh để khách chọn nhanh' },
    { k: 'ai', text: 'Búp bê có 4 màu **Đen, Kem, Trắng, Đỏ** ạ. Chị lấy màu nào ạ?' },
    { k: 'ai', imgs: ['bup-be', 'bup-be-2'] },
    { k: 'kh', text: 'Màu đen như hình nha e' },
    { k: 'cap', e: 'Xin thông tin lên đơn', t: 'Chọn xong: AI xin SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ em ghi **búp bê lưới Đen, size 37**, 389.000đ. Chị gửi em **SĐT và địa chỉ** nhận hàng để em lên đơn nha.' },

    // Khách im sau khi được xin SĐT, địa chỉ → màn hình phụ: gắn thẻ (3 hashtag quảng cáo + thẻ từ cuộc chat), bám đuổi 3 tin
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Chưa gửi SĐT: Preny tự gắn thẻ khách', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi theo thẻ', t: '3 tin ngắn: 15 phút, 3 tiếng, 20 tiếng', s: 'Chỉ nói về đúng đôi giày khách đã chọn' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Chị Thảo ơi, em giữ cho chị **đôi búp bê Đen size 37** rồi ạ, size này còn ít lắm. Chị gửi em SĐT, địa chỉ để em gửi hàng nha 😊' },
    { k: 'p', a: 'r1', d: 900 },
    { k: 'time', nhan: '3 tiếng sau', gio: '17:49', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Em gửi chị ảnh thật giày bên em nha 📸 Nhiều cô giáo mua đôi này, đứng lớp cả ngày không mỏi chân.' },
    { k: 'ai', imgs: ['bup-be-2', 'cua-hang'] },
    { k: 'p', a: 'r2', d: 900 },
    { k: 'time', nhan: '20 tiếng sau', gio: '10:49', ngay: 'T5 19/11/2026', d: 700 },
    { k: 'ai', text: 'Chị chỉ cần gửi **SĐT và địa chỉ** là em lên đơn liền ạ. Chốt hôm nay em **giảm còn 349.000đ** + **freeship**, tặng cặp lót gót êm 🎁' },
    { k: 'p', a: 'r3', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 3, khách gửi SĐT, địa chỉ', s: 'AI kiểm tra ngay thông tin khách gửi' },
    { k: 'kh', text: '0912 486 357, ngõ 42 Trần Cung, Cầu Giấy, HN' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'cap', e: 'Kiểm tra dữ liệu', t: 'Thiếu số nhà → hỏi lại ngay lập tức' },
    { k: 'ai', text: 'Dạ em ghi SĐT rồi ạ. Chị cho em xin thêm **số nhà** trong ngõ 42 để shipper giao đúng nha.' },
    { k: 'kh', text: 'Số 18 e' },
    { k: 'cap', e: 'Chốt đơn', t: 'Tự tổng hợp đơn: mẫu, màu, size, SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ chị kiểm tra lại đơn giúp em nha:\n– Giày búp bê lưới đế êm, Đen, size 37\n– Tặng cặp lót gót êm\n– Tổng: **349.000đ** (freeship)\n– Người nhận: Thảo · 0912 486 357\n– 18 ngõ 42 Trần Cung, Cầu Giấy, HN\nChị xác nhận giúp em đơn này nha.', nut: 'Quản lý đơn hàng', d: 3600 },
    { k: 'cap', e: 'Xong', t: 'Khách chỉ cần nói "Ok e"' },
    { k: 'kh', text: 'Ok e' },
    { k: 'ai', text: 'Dạ em lên đơn, gửi hàng cho chị liền nha ⚡', d: 1300 },

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

    // Mua xong: tin cảm ơn kèm 5 mẫu đang giảm giá (deck.afterSale.sp của bài 1, giảm 10% cho khách vừa mua)
    { k: 'cap', e: 'Bán thêm sau mua', t: 'Cảm ơn khách, gửi kèm 5 mẫu đang giảm giá', s: 'Khách bấm "Mua ngay" ngay trong Messenger' },
    { k: 'ai', text: 'Dạ cảm ơn chị Thảo nha 🎉 Đơn đã được xác nhận, shop giao sớm cho chị. Shop đang giảm giá mấy mẫu đế êm này, chị xem thử nha:' },
    { k: 'car', sp: [
        { img: 'sandal', ten: 'Sandal quai ngang đế êm', gia: '296.000đ', cu: '329.000đ', giam: '-10%' },
        { img: 'sneaker', ten: 'Sneaker trắng đế êm', gia: '413.000đ', cu: '459.000đ', giam: '-10%' },
        { img: 'cao-got', ten: 'Cao gót mũi nhọn lót êm', gia: '386.000đ', cu: '429.000đ', giam: '-10%' },
        { img: 'giay-da-nam', ten: 'Giày da nam buộc dây', gia: '801.000đ', cu: '890.000đ', giam: '-10%' },
        { img: 'giay-da-nam-2', ten: 'Giày da nam màu bò', gia: '855.000đ', cu: '950.000đ', giam: '-10%' },
      ], d: 5200 },

    // Chăm sóc sau bán qua Zalo
    { k: 'zalo', gio: '19:30', ngay: 'CN 22/11/2026', chip: '3 ngày sau · khách đã nhận hàng', d: 1500 },
    { k: 'cap', e: 'Chăm sóc sau bán qua Zalo', t: 'Khách nhận hàng: AI hỏi đi có êm không', s: 'Dặn bảo quản, xin đánh giá ngay trong tin Zalo OA' },
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
  // Slide tổng kết cuối video (giống hệt file mẫu Yến chưng tươi, nhóm thương mại điện tử)
  tongKet: { tieuDe: 'Quy trình Preny AI giúp', em: 'tăng tỷ lệ chốt đơn', cot: [
    { ten: 'Khách hàng', icon: 'users', dong: ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến'] },
    { ten: 'AI Chatbot', icon: 'bot', dong: ['Phản hồi nhanh tức thì', 'Kêu gọi khách hàng mua hàng', 'Lấy thông tin và chốt đơn'] },
    { ten: 'Bám đuổi', icon: 'bell', dong: ['Gửi 5 tin nhắn trong 7 ngày để bám đuổi khách hàng'] },
    { ten: 'Chốt đơn', icon: 'check', dong: ['Lên đơn', 'Gửi sự kiện mua hàng lên Facebook'] },
    { ten: 'Mua lại', icon: 'refresh', dong: ['Tự động gửi 1 tin nhắn mỗi tuần qua FB và Zalo', 'Sản phẩm bán chạy, giảm giá, sản phẩm mới'] },
  ] },
  panels: {
    tag: { av: 'TT', ten: 'Trần Thị Thảo', sub: 'Messenger · bình luận quảng cáo Búp bê lưới',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#giaybupbe', 'qt hot'], ['#deem', 'qt hot'], ['#mobile', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#Size37', 'qt']]]],
      im: 'Khách im từ 14:49, sau khi được xin SĐT, địa chỉ',
      rule: { lb: 'Bám đuổi theo thẻ #giaybupbe', tieuDe: '3 tin ngắn về đôi giày khách đã chọn',
              dong: [['15 phút', 'Đã giữ đôi Đen size 37 cho khách'], ['3 tiếng', 'Gửi ảnh thật đôi búp bê'], ['20 tiếng', 'Chỉ cần SĐT, địa chỉ là lên đơn']] },
      reply: 'Khách gửi SĐT, địa chỉ · dừng bám đuổi' },
    capi: { tieuDe: 'Gửi đơn hàng cho Facebook', event: 'Purchase', nhan: 'SỰ KIỆN MUA HÀNG', giaTri: '349.000đ', pk: 'Purchase · 349.000đ',
      dong: [['Đơn hàng', '#BE20418 · Búp bê lưới · Đen · 37'], ['Nguồn khách', 'Bình luận quảng cáo Búp bê lưới → Messenger'], ['Giá trị', '349.000 VND'], ['Event ID', 'BE20418-PURCHASE (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện mua hàng' },
  },
  donHang: {
    ma: '#BE20418', sp: 'Giày búp bê lưới đế êm', bien: 'Đen · Size 37 · x1 · tặng lót gót', img: 'bup-be', gia: '349.000đ',
    phi: ['Phí vận chuyển', 'freeship'],
    nv: { ten: 'Nhân viên Ngân', av: 'NG' },
    ten: 'Trần Thị Thảo', sdt: '0912 486 357', dc: '18 ngõ 42 Trần Cung, Cầu Giấy, Hà Nội', gio: '11:05 · 19/11/2026',
  },
};
