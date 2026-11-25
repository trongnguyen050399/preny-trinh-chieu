/* Bài 2 (video demo ngang tự chạy): TRANH ẢNH TRANG TRÍ (bộ 3 tranh canvas giá rẻ), nhóm thương mại điện tử. Làm 25/11/2026 theo file mẫu Rèm cửa may sẵn:
   - 1 cảnh duy nhất: bài quảng cáo, 2 khách bình luận (giá, phòng ngủ treo size nào) → trả lời cả 2 "Mình check ib shop nha"
     → AI nhắn inbox trước: giá + đúng ảnh quảng cáo, hỏi 1 điều (sofa dài bao nhiêu) → ca khó: khách không biết sofa dài bao nhiêu
     → AI hướng dẫn ước lượng nhanh (sofa 3 chỗ thường khoảng 2m) → khách: sofa 3 chỗ → AI: bộ 3 tranh 40x60 là cân, đinh 3 chân không khoan, bền màu
     → hỏi mẫu lá cây / trừu tượng tông kem / đen trắng → khách chọn lá cây → AI xin SĐT + địa chỉ → khách im
     → gắn thẻ (3 hashtag quảng cáo + #baogia + mẫu khách chọn) → bám đuổi 3 tin 15 phút, 3 tiếng, 20 tiếng → khách gửi SĐT + địa chỉ
     → tóm tắt đơn → Purchase lên Facebook → đơn tự động, nhân viên bấm xác nhận → cảm ơn + 5 sản phẩm giảm giá
     → Zalo: hỏi thăm, bán chạy, khuyến mãi → tổng kết → logo.
   - Chỉ 1 sản phẩm từ đầu tới cuối (bộ 3 tranh canvas lá cây 40x60). Tên shop, giá, khách, SĐT, địa chỉ: minh họa.
     Ảnh: Unsplash dùng chung với bài 1. */
window.VN_KB = {
  ten: 'Tranh ảnh trang trí video ngang',
  ketSub: 'Để AI tư vấn đúng size tranh, bám đuổi và lên đơn cho shop tranh của bạn',
  shop: { ten: 'Tranh Treo Tường Mộc Lan', av: 'ML', mau: '#9D174D', sub: 'Thường trả lời ngay' },
  anh: {
    'bo-3-truu-tuong': '../assets/img/u/1764010533326-c6916f3d6252_800x800.jpg',
    'la-cay': '../assets/img/u/1787507136009-19ae8d98d867_800x800.jpg',
    'truu-tuong-kem': '../assets/img/u/1767614373251-94259ec635f3_800x800.jpg',
    'hoa-co-dien': '../assets/img/u/1787784492234-9063b22e2312_800x800.jpg',
    'boho': '../assets/img/u/1638430323177-8cb2d1febb0c_800x800.jpg',
    'thanh-pho': '../assets/img/u/1773867567786-99e27b041610_800x800.jpg',
    'phong-canh': '../assets/img/u/1741671286168-64f619daf84d_800x800.jpg',
    'phong-ngu': '../assets/img/u/1724110657620-8ccbb7a40a4f_800x800.jpg',
    'bo-6': '../assets/img/u/1771287490586-356754be24dc_800x800.jpg',
    'treo-tranh': '../assets/img/u/1789841417993-ce273eedcb09_800x800.jpg',
    'day-thung': '../assets/img/u/1793891546305-c8a3f57a5514_800x800.jpg',
    'cay-dua': '../assets/img/u/1790683969772-74eaae32a0d3_800x800.jpg',
    'den-trang': '../assets/img/u/1774578342245-a9d9574a75f7_800x800.jpg',
    'son-dau': '../assets/img/u/1583766432613-4e668f167f3f_800x800.jpg',
    'hop-kin': '../assets/img/u/1607166452427-7e4477079cb9_800x800.jpg',
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= BÌNH LUẬN QUẢNG CÁO → INBOX (cảnh duy nhất) ================= */
    { k: 'canh', nhan: 'Bình luận quảng cáo → Inbox', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'bo-3-truu-tuong', nhan: 'MESSENGER', tieuDe: 'Bộ 3 tranh canvas · treo không cần khoan', nut: 'Gửi tin nhắn',
        text: 'BỘ 3 TRANH CANVAS TREO PHÒNG KHÁCH 🖼️ Khổ 40x60cm chỉ 590K/bộ. Tráng gương, bền màu, khung composite nhẹ, kèm đinh 3 chân không cần khoan. Freeship toàn quốc. #tranhtreotuong #tranhcanvas #tranhphongkhach',
      }, d: 1500 },
    { k: 'cap', e: 'Bình luận hỏi giá', t: 'Khách hỏi giá ngay dưới quảng cáo', s: 'Một khách khác hỏi treo phòng ngủ size nào' },
    { k: 'cmt', i: 0, ten: 'Bích Phương', av: 'BP', text: 'Giá sao shop? Có phải khoan tường ko?' },
    { k: 'cmt', i: 1, ten: 'Kim Oanh', av: 'KO', text: 'Treo đầu giường thì size nào shop?' },
    { k: 'cap', e: 'Trả lời cả 2 bình luận', t: 'Trả lời ngắn gọn, mời khách vào inbox', s: 'Tư vấn chi tiết trong tin nhắn riêng' },
    { k: 'rep', i: 0, text: 'Mình check ib shop nha 💬' },
    { k: 'rep', i: 1, text: 'Mình check ib shop nha 💬' },
    { k: 'ms', ref: { loai: 'cmt', img: 'bo-3-truu-tuong', dong1: 'Bạn đã bình luận về quảng cáo của Tranh Treo Tường Mộc Lan', dong2: '"Giá sao shop? Có phải khoan tường ko?"' }, gio: '14:47' },
    { k: 'cap', e: 'AI nhắn trước', t: 'Inbox trước: báo giá, gửi đúng ảnh quảng cáo', s: 'Khách không cần mô tả lại sản phẩm' },
    { k: 'ai', text: 'Dạ chào chị Bích Phương, bộ 3 tranh canvas bên em giá **590.000đ/bộ** (mỗi tranh 40x60cm) ạ. Kèm **đinh 3 chân**, tường bê tông **không cần khoan**.' },
    { k: 'ai', img: 'bo-3-truu-tuong' },
    { k: 'ai', text: 'Chị định treo trên **sofa dài bao nhiêu** ạ, để em gợi ý đúng size cho cân tường nha?' },

    { k: 'cap', e: 'Khách chưa có số đo', t: 'Khách không biết sofa dài bao nhiêu', s: 'AI chỉ cách ước lượng nhanh, không đoán bừa' },
    { k: 'kh', text: 'c mới dọn nhà, ko biết sofa dài bn nữa e' },
    { k: 'ai', text: 'Dạ chị đếm giúp em **sofa mấy chỗ ngồi** nha: sofa 2 chỗ thường khoảng 1m6, **sofa 3 chỗ khoảng 2m** ạ. Tranh nên rộng khoảng 2/3 chiều dài sofa là cân.' },
    { k: 'kh', text: 'sofa 3 chỗ e, tranh có bị phai ko' },
    { k: 'ai', text: 'Dạ sofa 3 chỗ chị treo **bộ 3 tranh 40x60cm** là cân ạ, tổng ngang khoảng 1m3. Tranh **tráng gương, mực in bền màu** khi treo trong nhà, khung composite nhẹ, đinh 3 chân gõ là xong.' },
    { k: 'cap', e: 'Hỏi đúng thứ còn thiếu', t: 'Có size rồi: AI hỏi khách thích mẫu nào', s: 'Gửi ảnh từng mẫu để khách chọn nhanh' },
    { k: 'ai', text: 'Chị thích mẫu **lá cây xanh**, **trừu tượng tông kem** hay **đen trắng tối giản** ạ? Lá cây hợp sofa kem, đen trắng hợp sofa xám.' },
    { k: 'ai', imgs: ['la-cay', 'truu-tuong-kem', 'bo-3-truu-tuong'] },
    { k: 'kh', text: 'mẫu lá cây nha e, sofa nhà c màu kem' },
    { k: 'cap', e: 'Xin thông tin lên đơn', t: 'Chọn xong: AI xin SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ em ghi **bộ 3 tranh canvas lá cây** 40x60cm, **590.000đ**, freeship. Chị gửi em **SĐT và địa chỉ** để em lên đơn nha.' },

    // Khách im sau khi được xin SĐT, địa chỉ → màn hình phụ: gắn thẻ (3 hashtag quảng cáo + thẻ từ cuộc chat), bám đuổi 3 tin
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Chưa gửi SĐT: Preny tự gắn thẻ khách', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi theo thẻ', t: '3 tin ngắn: 15 phút, 3 tiếng, 20 tiếng', s: 'Chỉ nói về đúng bộ tranh khách đã chọn' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T4 25/11/2026', d: 700 },
    { k: 'ai', text: 'Chị Bích Phương ơi, em giữ cho chị **bộ 3 tranh lá cây** 40x60 rồi ạ. Chị gửi em SĐT, địa chỉ để em gửi kịp đơn chiều nay nha 😊' },
    { k: 'p', a: 'r1', d: 900 },
    { k: 'time', nhan: '3 tiếng sau', gio: '17:49', ngay: 'T4 25/11/2026', d: 700 },
    { k: 'ai', text: 'Em gửi chị ảnh thật tranh khách bên em treo trên sofa nha 🖼️ Chụp bằng điện thoại, màu y như ngoài đời ạ.' },
    { k: 'ai', imgs: ['la-cay', 'hoa-co-dien', 'treo-tranh'] },
    { k: 'p', a: 'r2', d: 900 },
    { k: 'time', nhan: '20 tiếng sau', gio: '10:49', ngay: 'T5 26/11/2026', d: 700 },
    { k: 'ai', text: 'Chị chỉ cần gửi **SĐT và địa chỉ** là em lên đơn liền, tặng thêm **1 bộ đinh 3 chân**, freeship ạ ⚡' },
    { k: 'p', a: 'r3', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 3, khách gửi SĐT, địa chỉ', s: 'AI kiểm tra ngay thông tin khách gửi' },
    { k: 'kh', text: 'Bích Phương 0938627415, 32 nguyễn thượng hiền p5 q3' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'cap', e: 'Chốt đơn', t: 'Tự tổng hợp đơn: mẫu, size, quà tặng, SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ chị kiểm tra lại đơn giúp em nha:\n– Bộ 3 tranh canvas lá cây · 40x60cm\n– Tặng thêm 1 bộ đinh 3 chân\n– Tổng: **590.000đ** (freeship)\n– Người nhận: Bích Phương · 0938627415\n– 32 Nguyễn Thượng Hiền, P.5, Q.3\nChị xác nhận giúp em đơn này nha.', nut: 'Quản lý đơn hàng', d: 3400 },
    { k: 'cap', e: 'Xong', t: 'Khách chỉ cần nói "Ok e"' },
    { k: 'kh', text: 'Ok e' },
    { k: 'ai', text: 'Dạ em lên đơn, đóng gói chống va đập gửi chị liền nha ⚡', d: 1300 },

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
    { k: 'ai', text: 'Dạ cảm ơn chị Bích Phương nha 💛 Đơn đã được xác nhận, shop gửi hàng ngay hôm nay. Shop đang giảm giá mấy món khách mua tranh phòng khách hay lấy kèm, chị xem thử nha:' },
    { k: 'car', sp: [
        { img: 'phong-ngu', ten: 'Tranh đầu giường 50x70', gia: '405.000đ', cu: '450.000đ', giam: '-10%' },
        { img: 'phong-canh', ten: 'Tranh đơn khổ lớn 80x120', gia: '621.000đ', cu: '690.000đ', giam: '-10%' },
        { img: 'den-trang', ten: 'Bộ 2 tranh đen trắng 30x40', gia: '351.000đ', cu: '390.000đ', giam: '-10%' },
        { img: 'bo-6', ten: 'Bộ 6 khung ảnh gia đình', gia: '315.000đ', cu: '350.000đ', giam: '-10%' },
        { img: 'hoa-co-dien', ten: 'Đèn rọi tranh gắn tường', gia: '198.000đ', cu: '220.000đ', giam: '-10%' },
      ], d: 5200 },

    // Chăm sóc sau bán qua Zalo
    { k: 'zalo', gio: '19:30', ngay: 'CN 29/11/2026', chip: '2 ngày sau khi nhận · khách đã treo tranh', d: 1500 },
    { k: 'cap', e: 'Chăm sóc sau bán qua Zalo', t: 'Khách nhận hàng: AI hỏi tranh treo đã ưng chưa', s: 'Dặn cách giữ tranh bền màu, xin đánh giá trong tin Zalo OA' },
    { k: 'zns', zns: {
        img: 'la-cay', tieuDe: 'Chị Bích Phương ơi, tranh treo lên đã ưng chưa ạ?',
        noiDung: 'Tranh Treo Tường Mộc Lan cảm ơn chị đã nhận đơn **#ML25119** (bộ 3 tranh canvas lá cây). Chị lau tranh bằng khăn khô mềm, tránh nắng chiếu thẳng là tranh giữ màu lâu nha!',
        nut: 'Đánh giá sản phẩm',
      }, d: 4200 },
    { k: 'cap', e: 'ZBS · Sản phẩm bán chạy', t: '1 tuần sau: gửi sản phẩm bán chạy qua Zalo', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'CN 06/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['phong-ngu', 'boho', 'thanh-pho', 'day-thung'], nhan: 'TOP BÁN CHẠY TUẦN NÀY', mau: '#F97316',
        tieuDe: '🔥 Top bán chạy tuần này tại Mộc Lan',
        noiDung: '**Tranh đầu giường**, **bộ tranh boho** và **tranh thành phố đen trắng** đang được khách chọn nhiều nhất tuần qua.',
        nut: 'Xem ngay',
      }, d: 4600 },
    { k: 'cap', e: 'ZBS · Khuyến mãi', t: '1 tuần sau nữa: gửi ưu đãi cho khách cũ', s: 'Kéo khách quay lại mua tiếp, không cần khách nhắn' },
    { k: 'zstamp', gio: '19:30', ngay: 'CN 13/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['phong-canh', 'cay-dua', 'son-dau', 'truu-tuong-kem'], nhan: 'KHÁCH CŨ · GIẢM 10%',
        tieuDe: 'Ưu đãi riêng cho khách đã mua tại Mộc Lan',
        noiDung: 'Tranh phòng ngủ, tranh khổ lớn, khung ảnh gia đình đang giảm **10%**, freeship toàn quốc. Áp dụng đến hết 20/12/2026.',
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
    tag: { av: 'BP', ten: 'Trần Bích Phương', sub: 'Messenger · bình luận quảng cáo Bộ 3 tranh canvas',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#tranhtreotuong', 'qt hot'], ['#tranhcanvas', 'qt hot'], ['#tranhphongkhach', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#MauLaCay', 'qt']]]],
      im: 'Khách im từ 14:51, sau khi được xin SĐT, địa chỉ',
      rule: { lb: 'Bám đuổi theo thẻ #tranhcanvas', tieuDe: '3 tin ngắn về đúng bộ tranh khách đã chọn',
              dong: [['15 phút', 'Đã giữ bộ 3 tranh lá cây'], ['3 tiếng', 'Gửi ảnh thật tranh treo nhà khách'], ['20 tiếng', 'Chỉ cần SĐT, địa chỉ là lên đơn']] },
      reply: 'Khách gửi SĐT, địa chỉ · dừng bám đuổi' },
    capi: { tieuDe: 'Gửi đơn hàng cho Facebook', event: 'Purchase', nhan: 'SỰ KIỆN MUA HÀNG', giaTri: '590.000đ', pk: 'Purchase · 590.000đ',
      dong: [['Đơn hàng', '#ML25119 · Bộ 3 tranh canvas lá cây'], ['Nguồn khách', 'Bình luận quảng cáo Bộ 3 tranh canvas → Messenger'], ['Giá trị', '590.000 VND'], ['Event ID', 'ML25119-PURCHASE (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện mua hàng' },
  },
  donHang: {
    ma: '#ML25119', sp: 'Bộ 3 tranh canvas lá cây', bien: '40x60cm · x1 bộ', img: 'la-cay', gia: '590.000đ',
    nv: { ten: 'Nhân viên Diệu', av: 'ND' },
    ten: 'Trần Bích Phương', sdt: '0938627415', dc: '32 Nguyễn Thượng Hiền, P.5, Q.3, TP.HCM', gio: '11:05 · 26/11/2026',
  },
};
