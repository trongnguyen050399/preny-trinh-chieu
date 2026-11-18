/* Bài 2 (video demo ngang tự chạy): BÁNH KẸO (túi quà sinh nhật cho bé), nhóm thương mại điện tử.
   Viết lại 18/11/2026 theo mạch mới người dùng chốt (file mẫu kich-ban-yen-chung-tuoi-tc.js):
   - 1 cảnh duy nhất: quảng cáo túi quà sinh nhật in tên bé, 2 khách bình luận (hỏi giá, hỏi giao tận trường ở Thủ Đức)
     → trả lời cả 2 "Mình check ib shop nha" → AI nhắn inbox trước: giá + đúng ảnh quảng cáo, hỏi lớp bé bao nhiêu bạn
     → chị Ngân: 30 bé, có 1 bé dị ứng đậu phộng, giao trước 8h thứ Sáu tuần sau (ca khó bài 1) → AI làm 1 túi riêng không đậu phộng,
       không hạt, KHÔNG hứa "an toàn tuyệt đối", dặn xem thành phần trên gói → hỏi chữ in trên túi → khách chọn
     → AI xin SĐT, địa chỉ trường → khách im → gắn thẻ (3 hashtag quảng cáo + #baogia + #InTenBeSu)
     → bám đuổi 3 tin 15 phút, 3 tiếng, 20 tiếng (tin 3: 42.000đ/túi + tặng 2 túi dự phòng như bài 1)
     → khách gửi SĐT, địa chỉ (ca khó: thiếu số nhà, tên đường) → tóm tắt đơn → Purchase lên Facebook
     → đơn tự động, nhân viên xác nhận → cảm ơn + 5 món giảm giá → Zalo: hỏi thăm sau sinh nhật bé, bán chạy, quà Tết.
   - Chỉ 1 sản phẩm từ đầu tới cuối (túi quà sinh nhật), không có đoạn khách hỏi sản phẩm khác.
   Không có tin nhắc trước giờ giao (Preny chưa có tính năng này).
   Tên shop, giá, khách, SĐT, trường: minh họa, dùng lại của bài 1. Ảnh: ảnh Unsplash có sẵn của bài 1. */
window.VN_KB = {
  ten: 'Bánh kẹo video ngang',
  ketSub: 'Để AI bán bánh kẹo cho shop của bạn',
  shop: { ten: 'Kẹo Mây Hồng', av: 'MH', mau: '#DB2777', sub: 'Thường trả lời ngay' },
  anh: {
    'tui-qua': '../assets/img/u/1765317269952-82ca1acdd2ca_800x800.jpg',      // túi quà kẹo thắt nơ vàng
    'banh-quy-bo': '../assets/img/u/1626025645971-ad4780528ff5_800x800.jpg',  // bánh quy bơ nhân mứt trên đĩa
    'keo-deo': '../assets/img/u/1582058091505-f87a2e55a40f_800x800.jpg',      // kẹo dẻo hình gấu
    'keo-mix': '../assets/img/u/1641420421863-4b7f0940f287_800x800.jpg',      // kẹo dẻo trái cây cuộn
    'keo-mut': '../assets/img/u/1640310820557-248ea182a387_800x800.jpg',      // kẹo mút xoắn đỏ trắng
    'socola-hop': '../assets/img/u/1526081347589-7fa3cb41b4b2_800x800.jpg',   // hộp socola nhiều viên
    'sinh-nhat': '../assets/img/u/1766770301468-0fff596420b0_800x800.jpg',    // bé vui trong tiệc sinh nhật
    'tiec-keo': '../assets/img/u/1673197225588-26ff70189680_800x800.jpg',     // bàn kẹo tiệc
    'hop-banh': '../assets/img/u/1449049607083-e29383d58423_800x800.jpg',     // hộp bánh quy giấy kraft
    'hop-banh-2': '../assets/img/u/1693464323440-e2d55f520411_800x800.jpg',   // hộp quà bánh quy mứt
    'hat': '../assets/img/u/1605024344839-e6e41aea6b23_800x800.jpg',          // hạt dinh dưỡng mix
    'mut-gung': '../assets/img/u/1721460204999-f3e89df4377a_800x800.jpg',     // mứt dẻo
    'banh-tet': '../assets/img/u/1784386124506-617d0bec2e02_800x800.jpg',     // bánh quy nhiều loại xếp hộp
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= BÌNH LUẬN QUẢNG CÁO → INBOX (cảnh duy nhất) ================= */
    { k: 'canh', nhan: 'Bình luận quảng cáo → Inbox', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'tui-qua', nhan: 'MESSENGER', tieuDe: 'Túi quà sinh nhật · In tên bé miễn phí', nut: 'Gửi tin nhắn',
        text: 'Sinh nhật bé ở lớp 🎂 Túi quà bánh quy bơ, kẹo dẻo, socola, kẹo mút, in tên bé lên túi miễn phí. Giao tận trường đúng giờ. #tuiquasinhnhat #banhkeo #mobile',
      }, d: 1500 },
    { k: 'cap', e: 'Bình luận hỏi giá', t: 'Khách hỏi giá ngay dưới quảng cáo', s: 'Một khách khác hỏi giao tận trường' },
    { k: 'cmt', i: 0, ten: 'Kim Ngân', av: 'KN', text: 'Túi quà này giá sao shop?' },
    { k: 'cmt', i: 1, ten: 'Trần Phương', av: 'TP', text: 'Giao tận trường ở Thủ Đức được không shop?' },
    { k: 'cap', e: 'Trả lời cả 2 bình luận', t: 'Trả lời ngắn gọn, mời khách vào inbox', s: 'Tư vấn chi tiết trong tin nhắn riêng' },
    { k: 'rep', i: 0, text: 'Mình check ib shop nha 💬' },
    { k: 'rep', i: 1, text: 'Mình check ib shop nha 💬' },
    { k: 'ms', ref: { loai: 'cmt', img: 'tui-qua', dong1: 'Bạn đã bình luận về quảng cáo của Kẹo Mây Hồng', dong2: '"Túi quà này giá sao shop?"' }, gio: '14:47' },
    { k: 'cap', e: 'AI nhắn trước', t: 'Inbox trước: báo giá, gửi đúng ảnh quảng cáo', s: 'Khách không cần mô tả lại sản phẩm' },
    { k: 'ai', text: 'Dạ chào chị Ngân, túi quà sinh nhật giá **45.000đ/túi** ạ, in tên bé lên túi miễn phí.' },
    { k: 'ai', img: 'tui-qua' },
    { k: 'ai', text: 'Lớp bé mình **bao nhiêu bạn** để em lên số túi nha chị?' },

    { k: 'cap', e: 'Khách trả lời', t: '30 bé, có 1 bé dị ứng đậu phộng', s: 'Làm túi riêng, không hứa bừa về dị ứng' },
    { k: 'kh', text: 'Lớp 30 bé e, có 1 bé dị ứng đậu phộng. Giao trước 8h sáng thứ 6 tuần sau nha' },
    { k: 'ai', text: 'Dạ bé dị ứng em làm **1 túi riêng không đậu phộng, không hạt**, dán tên bé. Thành phần ghi rõ trên từng gói, chị nhờ cô giáo xem lại giúp em nha.' },
    { k: 'cap', e: 'Hỏi đúng thứ còn thiếu', t: 'Đủ số túi: AI hỏi tiếp chữ in trên túi', s: 'Gửi ảnh để khách hình dung nhanh' },
    { k: 'ai', text: '30 túi là **1.350.000đ**, giao tận trường **trước 8h thứ Sáu 27/11** ạ. Chị muốn **in chữ gì** trên túi nha?' },
    { k: 'ai', imgs: ['tui-qua', 'sinh-nhat'] },
    { k: 'kh', text: 'Mừng sinh nhật bé Su 5 tuổi' },
    { k: 'cap', e: 'Xin thông tin lên đơn', t: 'Chọn xong: AI xin SĐT, địa chỉ trường' },
    { k: 'ai', text: 'Dạ em ghi **30 túi in "Mừng sinh nhật bé Su 5 tuổi"**, 1 túi không đậu phộng. Chị gửi em **SĐT và địa chỉ trường** để em lên đơn nha.' },

    // Khách im sau khi được xin SĐT, địa chỉ → màn hình phụ: gắn thẻ (3 hashtag quảng cáo + thẻ từ cuộc chat), bám đuổi 3 tin
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Chưa gửi SĐT: Preny tự gắn thẻ khách', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi theo thẻ', t: '3 tin ngắn: 15 phút, 3 tiếng, 20 tiếng', s: 'Chỉ nói về đúng túi quà khách đã chọn' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Chị Ngân ơi, em đã **giữ lịch đóng 30 túi** cho lớp bé Su, giao sáng thứ Sáu 27/11 ạ. Chị gửi em SĐT, địa chỉ trường nha 😊' },
    { k: 'p', a: 'r1', d: 900 },
    { k: 'time', nhan: '3 tiếng sau', gio: '17:49', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Em gửi chị ảnh thật bánh kẹo trong túi quà nha 📸 Túi của bé dị ứng em dán tên riêng ạ.' },
    { k: 'ai', imgs: ['banh-quy-bo', 'keo-mix', 'keo-mut'] },
    { k: 'p', a: 'r2', d: 900 },
    { k: 'time', nhan: '20 tiếng sau', gio: '10:49', ngay: 'T5 19/11/2026', d: 700 },
    { k: 'ai', text: 'Đặt hôm nay em để **42.000đ/túi**, tặng thêm **2 túi dự phòng** ạ. Chị chỉ cần gửi **SĐT, địa chỉ trường** là em lên đơn liền ⚡' },
    { k: 'p', a: 'r3', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 3, khách gửi SĐT, địa chỉ', s: 'AI kiểm tra ngay thông tin khách gửi' },
    { k: 'kh', text: 'Kim Ngân 0938 517 264, mầm non Hoa Mai q1' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'cap', e: 'Kiểm tra dữ liệu', t: 'Thiếu số nhà, tên đường → hỏi lại ngay' },
    { k: 'ai', text: 'Dạ em ghi SĐT rồi ạ. Chị cho em xin **số nhà, tên đường** của trường để shipper giao đúng giờ nha.' },
    { k: 'kh', text: '45 Trần Quang Khải e' },
    { k: 'cap', e: 'Chốt đơn', t: 'Tự tổng hợp đơn: số túi, chữ in, SĐT, địa chỉ', s: 'Ghi rõ túi riêng cho bé dị ứng' },
    { k: 'ai', text: 'Dạ chị kiểm tra lại đơn giúp em nha:\n– 30 túi quà sinh nhật (1 túi không đậu phộng) + 2 túi dự phòng\n– In: "Mừng sinh nhật bé Su 5 tuổi"\n– Tổng: **1.260.000đ**\n– Kim Ngân · 0938 517 264\n– Mầm non Hoa Mai, 45 Trần Quang Khải, Q.1\n– Giao trước 8h sáng thứ Sáu 27/11\nChị xác nhận giúp em đơn này nha.', nut: 'Quản lý đơn hàng', d: 3800 },
    { k: 'cap', e: 'Xong', t: 'Khách chỉ cần nói "Ok e"' },
    { k: 'kh', text: 'Ok e' },
    { k: 'ai', text: 'Dạ em lên đơn, xếp lịch đóng túi cho chị liền nha ⚡', d: 1300 },

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

    // Mua xong: tin cảm ơn kèm 5 món đang giảm giá (deck.afterSale.sp của bài 1)
    { k: 'cap', e: 'Bán thêm sau mua', t: 'Cảm ơn khách, gửi kèm 5 món đang giảm giá', s: 'Khách bấm "Mua ngay" ngay trong Messenger' },
    { k: 'ai', text: 'Dạ cảm ơn chị Ngân nha 💗 Đơn đã được xác nhận, shop đóng túi kịp cho bé Su. Nhiều mẹ đặt thêm mấy món này cho tiệc sinh nhật, đang giảm giá ạ:' },
    { k: 'car', sp: [
        { img: 'socola-hop', ten: 'Hộp socola 24 viên nhiều vị', gia: '233.000đ', cu: '259.000đ', giam: '-10%' },
        { img: 'keo-mut', ten: 'Kẹo mút xoắn (20 cây)', gia: '79.000đ', cu: '89.000đ', giam: '-11%' },
        { img: 'keo-deo', ten: 'Kẹo dẻo hình gấu 500g', gia: '55.000đ', cu: '65.000đ', giam: '-15%' },
        { img: 'hop-banh', ten: 'Hộp bánh quy bơ', gia: '149.000đ', cu: '169.000đ', giam: '-12%' },
        { img: 'tiec-keo', ten: 'Set kẹo trang trí bàn tiệc', gia: '169.000đ', cu: '199.000đ', giam: '-15%' },
      ], d: 5200 },

    // Chăm sóc sau bán qua Zalo (sau ngày giao 27/11)
    { k: 'zalo', gio: '19:30', ngay: 'T7 28/11/2026', chip: 'Sau sinh nhật bé · khách đã nhận hàng', d: 1500 },
    { k: 'cap', e: 'Chăm sóc sau bán qua Zalo', t: 'Sau sinh nhật bé: AI hỏi các bé có thích không', s: 'Dặn bảo quản, xin đánh giá ngay trong tin Zalo OA' },
    { k: 'zns', zns: {
        img: 'sinh-nhat', tieuDe: 'Chị Ngân ơi, sinh nhật bé Su vui không ạ?',
        noiDung: 'Kẹo Mây Hồng cảm ơn chị đã nhận đơn **#MH27115** (30 túi quà sinh nhật). Túi dự phòng còn dư chị cất **chỗ khô, mát** nha. Chị đánh giá giúp shop nhé!',
        nut: 'Đánh giá sản phẩm',
      }, d: 4200 },
    { k: 'cap', e: 'ZBS · Sản phẩm bán chạy', t: '1 tuần sau: gửi sản phẩm bán chạy qua Zalo', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'T7 05/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['tui-qua', 'socola-hop', 'keo-deo', 'hop-banh'], nhan: 'TOP BÁN CHẠY TUẦN NÀY', mau: '#F97316',
        tieuDe: '🔥 Top bán chạy tuần này tại Kẹo Mây Hồng',
        noiDung: '**Túi quà sinh nhật**, **hộp socola 24 viên** và **kẹo dẻo hình gấu** đang được các mẹ chọn nhiều nhất tuần qua.',
        nut: 'Xem ngay',
      }, d: 4600 },
    { k: 'cap', e: 'ZBS · Khuyến mãi', t: '1 tuần sau nữa: gửi ưu đãi quà Tết cho khách cũ', s: 'Kéo khách quay lại mua tiếp, không cần khách nhắn' },
    { k: 'zstamp', gio: '19:30', ngay: 'T7 12/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['banh-tet', 'mut-gung', 'hat', 'hop-banh-2'], nhan: 'QUÀ TẾT 2027 · KHÁCH CŨ GIẢM 10%',
        tieuDe: 'Ưu đãi quà Tết riêng cho khách cũ',
        noiDung: 'Hộp bánh quy bơ Tết, mứt gừng, hạt dinh dưỡng giảm **10%**, gói quà miễn phí. Ưu đãi áp dụng đến hết 31/01/2027.',
        nut: 'Xem hộp quà',
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
    tag: { av: 'KN', ten: 'Nguyễn Kim Ngân', sub: 'Messenger · bình luận quảng cáo túi quà sinh nhật',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#tuiquasinhnhat', 'qt hot'], ['#banhkeo', 'qt hot'], ['#mobile', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#InTenBeSu', 'qt']]]],
      im: 'Khách im từ 14:49, sau khi được xin SĐT, địa chỉ',
      rule: { lb: 'Bám đuổi theo thẻ #tuiquasinhnhat', tieuDe: '3 tin ngắn về túi quà khách đã chọn',
              dong: [['15 phút', 'Đã giữ lịch đóng 30 túi cho khách'], ['3 tiếng', 'Gửi ảnh thật bánh kẹo trong túi'], ['20 tiếng', 'Chỉ cần SĐT, địa chỉ là lên đơn']] },
      reply: 'Khách gửi SĐT, địa chỉ · dừng bám đuổi' },
    capi: { tieuDe: 'Gửi đơn hàng cho Facebook', event: 'Purchase', nhan: 'SỰ KIỆN MUA HÀNG', giaTri: '1.260.000đ', pk: 'Purchase · 1.260.000đ',
      dong: [['Đơn hàng', '#MH27115 · 30 túi quà sinh nhật'], ['Nguồn khách', 'Bình luận quảng cáo túi quà sinh nhật → Messenger'], ['Giá trị', '1.260.000 VND'], ['Event ID', 'MH27115-PURCHASE (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện mua hàng' },
  },
  donHang: {
    ma: '#MH27115', sp: 'Túi quà sinh nhật in tên bé', bien: '30 túi (1 túi không đậu phộng) · tặng 2 túi', img: 'tui-qua', gia: '1.260.000đ',
    phi: ['Giao tận trường', 'trước 8h · 27/11'],
    nv: { ten: 'Nhân viên Thư', av: 'NT' },
    ten: 'Nguyễn Kim Ngân', sdt: '0938 517 264', dc: 'Mầm non Hoa Mai, 45 Trần Quang Khải, P. Tân Định, Q.1', gio: '11:05 · 19/11/2026',
  },
};
