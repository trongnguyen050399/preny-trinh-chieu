/* Bài 2 (video demo ngang tự chạy): DUNG DỊCH VỆ SINH Ô TÔ, nhóm thương mại điện tử. Viết lại 18/11/2026 theo mạch mẫu Yến chưng tươi:
   - 1 cảnh duy nhất: bài quảng cáo nước rửa xe bọt tuyết 1 lít, 2 khách bình luận (hỏi giá, hỏi rửa xe máy được không)
     → trả lời cả 2 "Mình check ib shop nha" → AI nhắn inbox trước: giá + đúng ảnh quảng cáo, hỏi rửa tại nhà hay ngoài tiệm
     → khách rửa tại nhà, xe đen, không có máy phun bọt (ca khó) → AI chỉ pha xô, lau nhẹ không xước → khách lấy 1 can
     → AI xin SĐT + địa chỉ → khách im → gắn thẻ (3 hashtag quảng cáo + #baogia + #RuaTaiNha)
     → bám đuổi 3 tin 15 phút, 3 tiếng, 20 tiếng → khách gửi SĐT + địa chỉ (ca khó: SĐT thiếu số) → tóm tắt đơn → Purchase lên Facebook
     → đơn tự động, nhân viên bấm xác nhận → cảm ơn + 5 món chăm xe đang giảm giá → Zalo: hỏi thăm, bán chạy, voucher → tổng kết → logo.
   - Chỉ 1 sản phẩm từ đầu tới cuối (can bọt tuyết 1 lít), không có đoạn khách hỏi sản phẩm khác.
   Nội dung lấy từ bài 1 (demo/kich-ban/ve-sinh-o-to-tc.js): shop Xe Sạch Store, bọt tuyết 159.000đ pha 1:100 rửa 20–25 lần (deck.bamDuoi),
   khách anh Phong (Q.7), afterSale.sp, voucher XESACH15. Tên shop, sản phẩm, giá, khách, SĐT: minh họa. Ảnh: ảnh có sẵn của bài 1. */
window.VN_KB = {
  ten: 'Dung dịch vệ sinh ô tô video ngang',
  ketSub: 'Để AI bán hàng cho shop chăm sóc xe của bạn',
  shop: { ten: 'Xe Sạch Store', av: 'XS', mau: '#1D4ED8', sub: 'Thường trả lời ngay' },
  anh: {
    'ghe-da': '../assets/img/u/1563986642669-49162177a0bc_800x800.jpg',
    'xit-da-nang': '../assets/img/u/1550572017-4b7a301b9d81_800x800.jpg',
    'duong-da': '../assets/img/u/1652860316277-370ca5b1b1df_800x800.jpg',
    'khan': '../assets/img/u/1761934658331-2e00b20dc6c6_800x800.jpg',
    'bot-tuyet': '../assets/img/u/1608506375591-b90e1f955e4b_800x800.jpg',
    'rua-xe': '../assets/img/u/1633014041037-f5446fb4ce99_800x800.jpg',
    'phu-bong': '../assets/img/u/1652987086612-d948b775d358_800x800.jpg',
    'lau-noi-that': '../assets/img/u/1732357624591-f2137085659b_800x800.jpg',
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= BÌNH LUẬN QUẢNG CÁO → INBOX (cảnh duy nhất) ================= */
    { k: 'canh', nhan: 'Bình luận quảng cáo → Inbox', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'bot-tuyet', nhan: 'MESSENGER', tieuDe: 'Rửa xe bọt tuyết · Can 1 lít', nut: 'Gửi tin nhắn',
        text: 'Rửa xe tại nhà sạch như ra tiệm 🚿 Nước rửa xe bọt tuyết 1 lít bọt dày, không cần chà mạnh nên không xước sơn. Pha 1:100, rửa được 20–25 lần. #ruaxebottuyet #ruaxe #mobile',
      }, d: 1500 },
    { k: 'cap', e: 'Bình luận hỏi giá', t: 'Khách hỏi giá ngay dưới quảng cáo', s: 'Một khách khác hỏi rửa xe máy được không' },
    { k: 'cmt', i: 0, ten: 'Lê Phong', av: 'LP', text: 'Can 1 lít giá sao shop?' },
    { k: 'cmt', i: 1, ten: 'Bảo Long', av: 'BL', text: 'Rửa xe máy được không shop?' },
    { k: 'cap', e: 'Trả lời cả 2 bình luận', t: 'Trả lời ngắn gọn, mời khách vào inbox', s: 'Tư vấn chi tiết trong tin nhắn riêng' },
    { k: 'rep', i: 0, text: 'Mình check ib shop nha 💬' },
    { k: 'rep', i: 1, text: 'Mình check ib shop nha 💬' },
    { k: 'ms', ref: { loai: 'cmt', img: 'bot-tuyet', dong1: 'Bạn đã bình luận về quảng cáo của Xe Sạch Store', dong2: '"Can 1 lít giá sao shop?"' }, gio: '14:47' },
    { k: 'cap', e: 'AI nhắn trước', t: 'Inbox trước: báo giá, gửi đúng ảnh quảng cáo', s: 'Khách không cần mô tả lại sản phẩm' },
    { k: 'ai', text: 'Dạ chào anh Phong, **nước rửa xe bọt tuyết 1 lít** giá **159.000đ** ạ, pha 1:100 rửa được 20–25 lần, freeship.' },
    { k: 'ai', img: 'bot-tuyet' },
    { k: 'ai', text: 'Anh rửa xe **tại nhà** hay ngoài tiệm ạ, để em chỉ cách pha cho đúng nha?' },

    { k: 'cap', e: 'Khách trả lời', t: 'Xe đen, không có máy → AI chỉ cách rửa', s: 'Pha xô, lau nhẹ tay: không lo xước sơn' },
    { k: 'kh', text: 'Rửa ở nhà e, xe màu đen. K có máy phun bọt dùng đc k?' },
    { k: 'ai', text: 'Dạ được ạ. Không có máy anh pha **1:100 vào xô**, lau bằng khăn mềm nhẹ tay, bọt dày nên **xe đen không lo xước** nha.' },
    { k: 'kh', text: 'Ok vậy lấy a 1 can' },
    { k: 'cap', e: 'Xin thông tin lên đơn', t: 'Khách chọn xong: AI xin SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ em ghi **1 can bọt tuyết 1 lít**, **159.000đ**, freeship. Anh gửi em **SĐT và địa chỉ** nhận hàng để em lên đơn nha.' },

    // Khách im sau khi được xin SĐT, địa chỉ → màn hình phụ: gắn thẻ (3 hashtag quảng cáo + thẻ từ cuộc chat), bám đuổi 3 tin
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Chưa gửi SĐT: Preny tự gắn thẻ khách', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi theo thẻ', t: '3 tin ngắn: 15 phút, 3 tiếng, 20 tiếng', s: 'Chỉ nói về đúng can bọt tuyết khách đã chọn' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Anh Phong ơi, em giữ cho anh **1 can bọt tuyết 1 lít** rồi ạ. Anh gửi em SĐT, địa chỉ để cuối tuần anh **rửa xe tại nhà** luôn nha 😊' },
    { k: 'p', a: 'r1', d: 900 },
    { k: 'time', nhan: '3 tiếng sau', gio: '17:49', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Em gửi anh ảnh thật khách rửa bằng bọt tuyết bên em nha 📸 Bọt phủ kín xe, lau nhẹ bằng khăn mềm là sạch bùn đất.' },
    { k: 'ai', imgs: ['rua-xe', 'khan'] },
    { k: 'p', a: 'r2', d: 900 },
    { k: 'time', nhan: '20 tiếng sau', gio: '10:49', ngay: 'T5 19/11/2026', d: 700 },
    { k: 'ai', text: 'Anh chỉ cần gửi **SĐT và địa chỉ** là em lên đơn liền, **freeship**, giao 1–2 ngày ạ ⚡' },
    { k: 'p', a: 'r3', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 3, khách gửi SĐT, địa chỉ', s: 'AI kiểm tra ngay thông tin khách gửi' },
    { k: 'kh', text: '091288824, 88 nguyễn văn linh q7' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'cap', e: 'Kiểm tra dữ liệu', t: 'SĐT thiếu số → hỏi lại ngay lập tức' },
    { k: 'ai', text: 'Dạ em ghi địa chỉ rồi ạ, nhưng số **091288824** mới có 9 số, anh kiểm tra lại giúp em nha.' },
    { k: 'kh', text: '0912888246 e' },
    { k: 'cap', e: 'Chốt đơn', t: 'Tự tổng hợp đơn: sản phẩm, SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ anh kiểm tra lại đơn giúp em nha:\n– Nước rửa xe bọt tuyết 1 lít x1\n– Tổng: **159.000đ** (freeship)\n– Người nhận: Phong · 0912 888 246\n– 88 Nguyễn Văn Linh, Q.7, TP.HCM\nAnh xác nhận giúp em đơn này nha.', nut: 'Quản lý đơn hàng', d: 3600 },
    { k: 'cap', e: 'Xong', t: 'Khách chỉ cần nói "Ok e"' },
    { k: 'kh', text: 'Ok e' },
    { k: 'ai', text: 'Dạ em lên đơn, gửi hàng cho anh liền nha ⚡', d: 1300 },

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

    // Mua xong: tin cảm ơn kèm 5 món chăm xe đang giảm giá (theo afterSale.sp của bài 1, bỏ bọt tuyết khách vừa mua)
    { k: 'cap', e: 'Bán thêm sau mua', t: 'Cảm ơn khách, gửi kèm 5 món đang giảm giá', s: 'Khách bấm "Mua ngay" ngay trong Messenger' },
    { k: 'ai', text: 'Dạ cảm ơn anh Phong nha 🎉 Đơn đã được xác nhận, shop gửi hàng sớm cho anh. Shop đang giảm giá mấy món chăm xe hay dùng kèm, anh xem thử nha:' },
    { k: 'car', sp: [
        { img: 'phu-bong', ten: 'Phủ bóng nano 500ml', gia: '249.000đ', cu: '289.000đ', giam: '-14%' },
        { img: 'khan', ten: 'Bộ 3 khăn microfiber', gia: '79.000đ', cu: '99.000đ', giam: '-20%' },
        { img: 'xit-da-nang', ten: 'Xịt nội thất đa năng 500ml', gia: '169.000đ', cu: '189.000đ', giam: '-11%' },
        { img: 'duong-da', ten: 'Dưỡng da ghế ô tô 250ml', gia: '149.000đ', cu: '169.000đ', giam: '-12%' },
        { img: 'lau-noi-that', ten: 'Dung dịch lau taplo', gia: '109.000đ', cu: '129.000đ', giam: '-16%' },
      ], d: 5200 },

    // Chăm sóc sau bán qua Zalo
    { k: 'zalo', gio: '19:30', ngay: 'T7 21/11/2026', chip: 'Tối hôm nhận · anh đã nhận hàng', d: 1500 },
    { k: 'cap', e: 'Chăm sóc sau bán qua Zalo', t: 'Khách nhận hàng: AI hỏi rửa có sạch không', s: 'Dặn cách rửa, xin đánh giá ngay trong tin Zalo OA' },
    { k: 'zns', zns: {
        img: 'rua-xe', tieuDe: 'Anh Phong ơi, rửa xe bọt tuyết có sạch không ạ?',
        noiDung: 'Xe Sạch cảm ơn anh đã nhận đơn **#XS51836** (Bọt tuyết 1 lít). Anh rửa trong bóng râm, đừng để bọt khô trên sơn nha!',
        nut: 'Đánh giá sản phẩm',
      }, d: 4200 },
    { k: 'cap', e: 'ZBS · Sản phẩm bán chạy', t: '1 tuần sau: gửi mẫu bán chạy qua Zalo', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'T7 28/11/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['xit-da-nang', 'phu-bong', 'khan', 'lau-noi-that'], nhan: 'TOP BÁN CHẠY TUẦN NÀY', mau: '#F97316',
        tieuDe: '🔥 Top bán chạy tuần này tại Xe Sạch',
        noiDung: '**Xịt nội thất đa năng**, **phủ bóng nano** và **khăn microfiber** đang được anh em chọn nhiều nhất tuần qua.',
        nut: 'Xem ngay',
      }, d: 4600 },
    { k: 'cap', e: 'ZBS · Khuyến mãi', t: '1 tuần sau nữa: gửi ưu đãi cho khách cũ', s: 'Kéo khách quay lại mua tiếp, không cần khách nhắn' },
    { k: 'zstamp', gio: '19:30', ngay: 'T7 05/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['duong-da', 'xit-da-nang', 'bot-tuyet', 'khan'], nhan: 'VOUCHER 15% CHO KHÁCH CŨ',
        tieuDe: 'Tặng anh Phong voucher 15%',
        noiDung: 'Nhập mã **XESACH15** giảm **15%** cho đơn từ 300.000đ. Ưu đãi áp dụng đến hết 31/12/2026.',
        nut: 'Dùng voucher ngay',
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
    tag: { av: 'LP', ten: 'Lê Phong', sub: 'Messenger · bình luận quảng cáo Rửa xe bọt tuyết',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#ruaxebottuyet', 'qt hot'], ['#ruaxe', 'qt hot'], ['#mobile', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#RuaTaiNha', 'qt']]]],
      im: 'Khách im từ 14:49, sau khi được xin SĐT, địa chỉ',
      rule: { lb: 'Bám đuổi theo thẻ #ruaxebottuyet', tieuDe: '3 tin ngắn về can bọt tuyết khách đã chọn',
              dong: [['15 phút', 'Đã giữ can bọt tuyết cho khách'], ['3 tiếng', 'Gửi ảnh thật rửa bằng bọt tuyết'], ['20 tiếng', 'Chỉ cần SĐT, địa chỉ là lên đơn']] },
      reply: 'Khách gửi SĐT, địa chỉ · dừng bám đuổi' },
    capi: { tieuDe: 'Gửi đơn hàng cho Facebook', event: 'Purchase', nhan: 'SỰ KIỆN MUA HÀNG', giaTri: '159.000đ', pk: 'Purchase · 159.000đ',
      dong: [['Đơn hàng', '#XS51836 · Bọt tuyết 1 lít'], ['Nguồn khách', 'Bình luận quảng cáo Rửa xe bọt tuyết → Messenger'], ['Giá trị', '159.000 VND'], ['Event ID', 'XS51836-PURCHASE (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện mua hàng' },
  },
  donHang: {
    ma: '#XS51836', sp: 'Nước rửa xe bọt tuyết 1 lít', bien: 'Pha 1:100 · rửa 20–25 lần · x1', img: 'bot-tuyet', gia: '159.000đ',
    phi: ['Phí vận chuyển', 'freeship'],
    nv: { ten: 'Nhân viên Minh', av: 'M' },
    ten: 'Lê Phong', sdt: '0912 888 246', dc: '88 Nguyễn Văn Linh, Q.7, TP.HCM', gio: '11:05 · 19/11/2026',
  },
};
