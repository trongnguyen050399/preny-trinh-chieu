/* Bài 2 (video demo ngang tự chạy): CUA CÀ MAU, nhóm thương mại điện tử. Làm 20/11/2026 theo file mẫu Yến chưng tươi:
   - 1 cảnh duy nhất: bài quảng cáo, 2 khách bình luận (hỏi giá, hỏi ship Hà Nội cua còn sống không) → trả lời cả 2 "Mình check ib shop nha"
     → AI nhắn inbox trước: giá + đúng ảnh quảng cáo, hỏi 1 điều (mấy người ăn) → khách trả lời: 6 người, sợ cua ốm
     → AI tư vấn 2kg, bóp yếm chọn từng con, cua ốm đổi liền, hỏi loại → khách chọn gạch son → AI xin SĐT + địa chỉ → khách im
     → gắn thẻ (3 hashtag quảng cáo + #baogia + loại cua khách chọn) → bám đuổi 3 tin 15 phút, 3 tiếng, 20 tiếng → khách gửi SĐT + địa chỉ
     (ca khó: SĐT thiếu 1 số) → tóm tắt đơn → Purchase lên Facebook
     → đơn tự động, nhân viên bấm xác nhận → cảm ơn + 5 sản phẩm giảm giá → Zalo: hỏi thăm, bán chạy, khuyến mãi → tổng kết → logo.
   - Chỉ 1 sản phẩm từ đầu tới cuối (cua gạch son Cà Mau). Tên shop, giá, khách, SĐT, địa chỉ: minh họa. Ảnh: Unsplash dùng chung với bài 1. */
window.VN_KB = {
  ten: 'Cua Cà Mau video ngang',
  ketSub: 'Để AI tư vấn, bám đuổi và lên đơn cua cho shop của bạn',
  shop: { ten: 'Cua Cà Mau Út Hiền', av: 'UH', mau: '#C2410C', sub: 'Thường trả lời ngay' },
  anh: {
    'cua-hap': '../assets/img/u/1766065998279-1b565706ad25_800x800.jpg',
    'cua-gach': '../assets/img/u/1586735165774-32cfe5339073_800x800.jpg',
    'cua-dia': '../assets/img/u/1550586554-a5a846e56593_800x800.jpg',
    'cua-song': '../assets/img/u/1615834751896-b15e2330b289_800x800.jpg',
    'cua-da': '../assets/img/u/1547571233-02e0e8dc6a76_800x800.jpg',
    'ngu-dan': '../assets/img/u/1763968556861-ab0eb4635525_800x800.jpg',
    'ghe': '../assets/img/u/1569904400880-17901e6acc0c_800x800.jpg',
    'tom-su': '../assets/img/u/1703756292793-287f082d3a45_800x800.jpg',
    'tom-kho': '../assets/img/u/1789016863091-67e4dd9aa12f_800x800.jpg',
    'kho-ca': '../assets/img/u/1772588159763-749e2fb4cac4_800x800.jpg',
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= BÌNH LUẬN QUẢNG CÁO → INBOX (cảnh duy nhất) ================= */
    { k: 'canh', nhan: 'Bình luận quảng cáo → Inbox', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'cua-hap', nhan: 'MESSENGER', tieuDe: 'Cua gạch son Cà Mau · Bắt sáng, giao chiều', nut: 'Gửi tin nhắn',
        text: 'CUA GẠCH SON CÀ MAU 🦀 Cua sống rừng đước Năm Căn, bóp yếm chọn từng con, cân đã tháo dây. Cua chết đền 1 đổi 1. #cuacamau #cuagach #giaotrongngay',
      }, d: 1500 },
    { k: 'cap', e: 'Bình luận hỏi giá', t: 'Khách hỏi giá ngay dưới quảng cáo', s: 'Một khách khác hỏi ship Hà Nội cua còn sống không' },
    { k: 'cmt', i: 0, ten: 'Thu Hà', av: 'TH', text: 'Cua gạch bao nhiêu 1kg shop?' },
    { k: 'cmt', i: 1, ten: 'Quốc Bảo', av: 'QB', text: 'Ship ra Hà Nội cua còn sống không shop?' },
    { k: 'cap', e: 'Trả lời cả 2 bình luận', t: 'Trả lời ngắn gọn, mời khách vào inbox', s: 'Tư vấn chi tiết trong tin nhắn riêng' },
    { k: 'rep', i: 0, text: 'Mình check ib shop nha 💬' },
    { k: 'rep', i: 1, text: 'Mình check ib shop nha 💬' },
    { k: 'ms', ref: { loai: 'cmt', img: 'cua-hap', dong1: 'Bạn đã bình luận về quảng cáo của Cua Cà Mau Út Hiền', dong2: '"Cua gạch bao nhiêu 1kg shop?"' }, gio: '14:47' },
    { k: 'cap', e: 'AI nhắn trước', t: 'Inbox trước: báo giá, gửi đúng ảnh quảng cáo', s: 'Khách không cần mô tả lại sản phẩm' },
    { k: 'ai', text: 'Dạ chào chị Hà, cua gạch son Cà Mau loại 2–3 con/kg giá **690.000đ/kg** ạ, cân đã tháo dây.' },
    { k: 'ai', img: 'cua-hap' },
    { k: 'ai', text: 'Nhà mình mấy người ăn ạ, để em tư vấn số ký cho vừa nha?' },

    { k: 'cap', e: 'Khách trả lời', t: '6 người, sợ cua ốm → tư vấn 2kg', s: 'Nói rõ cách chọn cua, cua ốm đổi liền' },
    { k: 'kh', text: 'nhà c 6 người, giao Q7. sợ cua ốm toàn nước lắm e' },
    { k: 'ai', text: 'Dạ 6 người chị lấy **2kg** là vừa, khoảng 5–6 con ạ. Bên em **bóp yếm chọn từng con**, nhận cua ốm em đổi liền, cua chết **đền 1 đổi 1** chị nha.' },
    { k: 'cap', e: 'Hỏi đúng thứ còn thiếu', t: 'Có số ký rồi: AI hỏi tiếp loại cua', s: 'Gửi ảnh để khách chọn nhanh' },
    { k: 'ai', text: 'Chị lấy **cua gạch son** (gạch đỏ, béo) hay **cua thịt** chắc thịt, 450.000đ/kg ạ?' },
    { k: 'ai', imgs: ['cua-gach', 'cua-dia'] },
    { k: 'kh', text: 'Gạch son nha e' },
    { k: 'cap', e: 'Xin thông tin lên đơn', t: 'Chọn xong: AI xin SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ em ghi **2kg cua gạch son**, 1.380.000đ, giao Q7 trong ngày. Chị gửi em **SĐT và địa chỉ** để em lên đơn nha.' },

    // Khách im sau khi được xin SĐT, địa chỉ → màn hình phụ: gắn thẻ (3 hashtag quảng cáo + thẻ từ cuộc chat), bám đuổi 3 tin
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Chưa gửi SĐT: Preny tự gắn thẻ khách', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi theo thẻ', t: '3 tin ngắn: 15 phút, 3 tiếng, 20 tiếng', s: 'Chỉ nói về đúng loại cua khách đã chọn' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Chị Hà ơi, em giữ cho chị **2kg cua gạch son** loại chắc nhất mẻ chiều nay rồi ạ. Chị gửi em SĐT, địa chỉ để em giao kịp bữa tối nha 😊' },
    { k: 'p', a: 'r1', d: 900 },
    { k: 'time', nhan: '3 tiếng sau', gio: '17:49', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Em gửi chị ảnh thật cua bên em vừa bắt ở rừng đước Năm Căn nha 📸 Cua sống, cột dây, đóng thùng trong ngày.' },
    { k: 'ai', imgs: ['ngu-dan', 'cua-song', 'cua-da'] },
    { k: 'p', a: 'r2', d: 900 },
    { k: 'time', nhan: '20 tiếng sau', gio: '10:49', ngay: 'T5 19/11/2026', d: 700 },
    { k: 'ai', text: 'Chị chỉ cần gửi **SĐT và địa chỉ** là em lên đơn liền, tặng **muối ớt xanh** chấm cua, miễn phí giao Q7 ạ ⚡' },
    { k: 'p', a: 'r3', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 3, khách gửi SĐT, địa chỉ', s: 'AI kiểm tra ngay thông tin khách gửi' },
    { k: 'kh', text: '093846127, 42 đường số 15 tân phong q7' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'cap', e: 'Kiểm tra dữ liệu', t: 'SĐT mới 9 số → hỏi lại ngay lập tức' },
    { k: 'ai', text: 'Dạ em ghi địa chỉ rồi ạ. SĐT chị gửi mới có **9 số**, chị kiểm tra lại giúp em để shipper gọi được nha.' },
    { k: 'kh', text: '0938461275 nha e, giao trước 5h chiều' },
    { k: 'cap', e: 'Chốt đơn', t: 'Tự tổng hợp đơn: loại cua, số ký, SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ chị kiểm tra lại đơn giúp em nha:\n– 2kg cua gạch son Cà Mau (cân đã tháo dây)\n– Tổng: **1.380.000đ** (tặng muối ớt xanh, miễn phí giao)\n– Người nhận: Thu Hà · 0938461275\n– 42 đường số 15, P. Tân Phong, Q7 · trước 17h\nChị xác nhận giúp em đơn này nha.', nut: 'Quản lý đơn hàng', d: 3600 },
    { k: 'cap', e: 'Xong', t: 'Khách chỉ cần nói "Ok e"' },
    { k: 'kh', text: 'Ok e' },
    { k: 'ai', text: 'Dạ em lựa cua, giao chiều nay cho chị liền nha ⚡', d: 1300 },

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

    // Mua xong: tin cảm ơn kèm 5 sản phẩm đang giảm giá
    { k: 'cap', e: 'Bán thêm sau mua', t: 'Cảm ơn khách, gửi kèm 5 sản phẩm đang giảm giá', s: 'Khách bấm "Mua ngay" ngay trong Messenger' },
    { k: 'ai', text: 'Dạ cảm ơn chị Hà nha 💛 Đơn đã được xác nhận, chiều nay shop giao cua cho chị. Shop đang giảm giá mấy món ăn kèm, làm quà, chị xem thử nha:' },
    { k: 'car', sp: [
        { img: 'tom-kho', ten: 'Tôm khô Cà Mau 500g', gia: '675.000đ', cu: '750.000đ', giam: '-10%' },
        { img: 'kho-ca', ten: 'Khô cá Cà Mau 500g', gia: '279.000đ', cu: '310.000đ', giam: '-10%' },
        { img: 'ghe', ten: 'Ghẹ xanh sống 1kg', gia: '378.000đ', cu: '420.000đ', giam: '-10%' },
        { img: 'tom-su', ten: 'Tôm sú sống 1kg', gia: '342.000đ', cu: '380.000đ', giam: '-10%' },
        { img: 'cua-dia', ten: 'Cua thịt Cà Mau 1kg', gia: '405.000đ', cu: '450.000đ', giam: '-10%' },
      ], d: 5200 },

    // Chăm sóc sau bán qua Zalo
    { k: 'zalo', gio: '19:30', ngay: 'T5 19/11/2026', chip: 'Tối hôm nhận · khách đã nhận cua', d: 1500 },
    { k: 'cap', e: 'Chăm sóc sau bán qua Zalo', t: 'Khách nhận hàng: AI hỏi cua có chắc không', s: 'Dặn cách giữ cua sống, xin đánh giá ngay trong tin Zalo OA' },
    { k: 'zns', zns: {
        img: 'cua-gach', tieuDe: 'Chị Hà ơi, cua nhà mình ăn thấy chắc không ạ?',
        noiDung: 'Cua Cà Mau Út Hiền cảm ơn chị đã nhận đơn **#UH19112** (2kg cua gạch son). Cua sống chưa nấu chị để ngăn mát, phủ khăn ẩm, nấu trong 1 ngày nha!',
        nut: 'Đánh giá sản phẩm',
      }, d: 4200 },
    { k: 'cap', e: 'ZBS · Sản phẩm bán chạy', t: '1 tuần sau: gửi sản phẩm bán chạy qua Zalo', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'T5 26/11/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['tom-kho', 'ghe', 'cua-dia', 'tom-su'], nhan: 'TOP BÁN CHẠY TUẦN NÀY', mau: '#F97316',
        tieuDe: '🔥 Top bán chạy tuần này tại Cua Cà Mau Út Hiền',
        noiDung: '**Tôm khô Cà Mau**, **ghẹ xanh sống** và **cua thịt** đang được khách chọn nhiều nhất tuần qua.',
        nut: 'Xem ngay',
      }, d: 4600 },
    { k: 'cap', e: 'ZBS · Khuyến mãi', t: '1 tuần sau nữa: gửi ưu đãi cho khách cũ', s: 'Kéo khách quay lại mua tiếp, không cần khách nhắn' },
    { k: 'zstamp', gio: '19:30', ngay: 'T5 03/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['tom-kho', 'kho-ca', 'cua-hap', 'cua-gach'], nhan: 'QUÀ TẾT 2027 · GIẢM 10%',
        tieuDe: 'Ưu đãi riêng cho khách đã mua tại Cua Cà Mau Út Hiền',
        noiDung: 'Hộp quà tôm khô, khô cá Cà Mau đang giảm **10%**, đóng hộp miễn phí. Áp dụng đến hết 13/12/2026.',
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
    tag: { av: 'TH', ten: 'Nguyễn Thu Hà', sub: 'Messenger · bình luận quảng cáo Cua gạch son',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#cuacamau', 'qt hot'], ['#cuagach', 'qt hot'], ['#giaotrongngay', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#CuaGachSon', 'qt']]]],
      im: 'Khách im từ 14:49, sau khi được xin SĐT, địa chỉ',
      rule: { lb: 'Bám đuổi theo thẻ #cuagach', tieuDe: '3 tin ngắn về loại cua khách đã chọn',
              dong: [['15 phút', 'Đã giữ 2kg cua gạch son cho khách'], ['3 tiếng', 'Gửi ảnh thật cua vừa bắt'], ['20 tiếng', 'Chỉ cần SĐT, địa chỉ là lên đơn']] },
      reply: 'Khách gửi SĐT, địa chỉ · dừng bám đuổi' },
    capi: { tieuDe: 'Gửi đơn hàng cho Facebook', event: 'Purchase', nhan: 'SỰ KIỆN MUA HÀNG', giaTri: '1.380.000đ', pk: 'Purchase · 1.380.000đ',
      dong: [['Đơn hàng', '#UH19112 · 2kg cua gạch son'], ['Nguồn khách', 'Bình luận quảng cáo Cua gạch son → Messenger'], ['Giá trị', '1.380.000 VND'], ['Event ID', 'UH19112-PURCHASE (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện mua hàng' },
  },
  donHang: {
    ma: '#UH19112', sp: 'Cua gạch son Cà Mau', bien: '2–3 con/kg · cân đã tháo dây · 2kg', img: 'cua-hap', gia: '1.380.000đ',
    nv: { ten: 'Nhân viên Út Hiền', av: 'UH' },
    ten: 'Nguyễn Thu Hà', sdt: '0938461275', dc: '42 đường số 15, P. Tân Phong, Q7, TP.HCM', gio: '11:05 · 19/11/2026',
  },
};
