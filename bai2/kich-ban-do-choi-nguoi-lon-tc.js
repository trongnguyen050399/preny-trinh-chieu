/* Bài 2 (video demo ngang tự chạy): ĐỒ CHƠI NGƯỜI LỚN (máy massage hoa hồng), nhóm thương mại điện tử. Làm 23/11/2026 theo file mẫu Yến chưng tươi:
   - 1 cảnh duy nhất: bài quảng cáo, 2 khách bình luận (hỏi giá, hỏi giao có kín không) → trả lời cả 2 "Shop đã nhắn riêng cho bạn nha",
     không nhắc tên sản phẩm dưới bình luận công khai
     → AI nhắn inbox trước: giá + đúng ảnh quảng cáo + giao hộp trơn, hỏi 1 điều (nhận ở nhà, công ty hay bưu cục)
     → khách: ở nhà, sợ người nhà nhận giùm, hỏi có ồn không → AI: chạy êm, hộp carton trơn, vận đơn ghi "phụ kiện"
     → hỏi 1 máy hay combo máy + gel → khách chọn combo → AI xin SĐT + địa chỉ → khách im
     → gắn thẻ (3 hashtag quảng cáo + #baogia + combo khách chọn) → bám đuổi 3 tin 15 phút, 3 tiếng, 20 tiếng → khách gửi SĐT + địa chỉ
     (ca khó: giao về công ty, hỏi tên người gửi, SĐT thiếu 1 số) → tóm tắt đơn → Purchase lên Facebook
     → đơn tự động, nhân viên bấm xác nhận → cảm ơn + 5 sản phẩm giảm giá → Zalo: hỏi thăm, bán chạy, khuyến mãi → tổng kết → logo.
   - Lời lẽ lịch sự, tế nhị (deck chia sẻ cho khách doanh nghiệp), không mô tả cách dùng.
   - Chỉ 1 sản phẩm từ đầu tới cuối (máy massage hoa hồng). Tên shop, giá, khách, SĐT, địa chỉ: minh họa. Ảnh: Unsplash dùng chung với bài 1. */
window.VN_KB = {
  ten: 'Đồ chơi người lớn video ngang',
  ketSub: 'Để AI tư vấn kín đáo, bám đuổi và lên đơn cho shop của bạn',
  shop: { ten: 'Hồng Nhung Store', av: 'HN', mau: '#BE185D', sub: 'Thường trả lời ngay' },
  anh: {
    'hoa-hong': '../assets/img/u/1755642754869-2c69a62dc306_800x800.jpg',
    'xanh': '../assets/img/u/1648782360078-52084f329945_800x800.jpg',
    'gel': '../assets/img/u/1785144983578-d6d11add431e_800x800.jpg',
    'bcs': '../assets/img/u/1758577342471-1c15720f9d4d_800x800.jpg',
    'nen': '../assets/img/u/1602607202436-d1b8db3b7b32_800x800.jpg',
    'nen-2': '../assets/img/u/1575108103651-e31aaef7ba56_800x800.jpg',
    'dau-massage': '../assets/img/u/1662467191853-dcb403313f16_800x800.jpg',
    'hop-kin': '../assets/img/u/1607166452427-7e4477079cb9_800x800.jpg',
    'hop-trang': '../assets/img/u/1573376670774-4427757f7963_800x800.jpg',
    'cap-doi': '../assets/img/u/1675704632448-cf726a8e1fd8_800x800.jpg',
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= BÌNH LUẬN QUẢNG CÁO → INBOX (cảnh duy nhất) ================= */
    { k: 'canh', nhan: 'Bình luận quảng cáo → Inbox', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'hoa-hong', nhan: 'MESSENGER', tieuDe: 'Máy massage hoa hồng · giao kín đáo', nut: 'Gửi tin nhắn',
        text: 'MÁY MASSAGE HOA HỒNG 🌹 Silicon y tế, 10 chế độ, chạy êm, sạc USB. Giao hộp trơn, không in tên sản phẩm, nhận hàng rồi trả tiền. #maymassage #giaokindao #quatangcapdoi',
      }, d: 1500 },
    { k: 'cap', e: 'Bình luận hỏi giá', t: 'Khách hỏi giá ngay dưới quảng cáo', s: 'Một khách khác hỏi giao hàng có kín không' },
    { k: 'cmt', i: 0, ten: 'Thảo Vy', av: 'TV', text: 'Giá sao shop?' },
    { k: 'cmt', i: 1, ten: 'Minh Thư', av: 'MT', text: 'Giao có kín không shop?' },
    { k: 'cap', e: 'Trả lời cả 2 bình luận', t: 'Trả lời ngắn, không nhắc tên sản phẩm', s: 'Tư vấn chi tiết trong tin nhắn riêng' },
    { k: 'rep', i: 0, text: 'Shop đã nhắn riêng cho bạn nha 💬' },
    { k: 'rep', i: 1, text: 'Shop đã nhắn riêng cho bạn nha 💬' },
    { k: 'ms', ref: { loai: 'cmt', img: 'hoa-hong', dong1: 'Bạn đã bình luận về quảng cáo của Hồng Nhung Store', dong2: '"Giá sao shop?"' }, gio: '14:47' },
    { k: 'cap', e: 'AI nhắn trước', t: 'Inbox trước: báo giá, gửi đúng ảnh quảng cáo', s: 'Nói ngay điều khách lo nhất: giao kín đáo' },
    { k: 'ai', text: 'Dạ chào chị Vy, máy massage hoa hồng bên em giá **420.000đ**, silicon y tế, chạy rất êm ạ. Shop giao **hộp trơn, không in tên sản phẩm** nha.' },
    { k: 'ai', img: 'hoa-hong' },
    { k: 'ai', text: 'Chị nhận hàng ở **nhà**, **công ty** hay **bưu cục** ạ, để em chọn cách giao kín nhất cho chị?' },

    { k: 'cap', e: 'Khách trả lời', t: 'Ở nhà, sợ người nhà nhận giùm, hỏi có ồn không', s: 'AI trả lời tế nhị, đúng điều khách lo' },
    { k: 'kh', text: 'ở nhà, mà sợ ng nhà nhận giùm. có ồn ko e' },
    { k: 'ai', text: 'Dạ máy chạy rất êm ạ. Hộp ngoài là **carton trơn**, vận đơn chỉ ghi **"phụ kiện"**, người nhận giùm cũng không biết bên trong. Chị dặn shipper **gọi trước khi giao** là được nha.' },
    { k: 'cap', e: 'Hỏi đúng thứ còn thiếu', t: 'Yên tâm rồi: AI hỏi lấy lẻ hay combo', s: 'Gửi ảnh để khách chọn nhanh' },
    { k: 'ai', text: 'Chị lấy **1 máy** hay **combo máy + gel gốc nước** giá **520.000đ** ạ?' },
    { k: 'ai', imgs: ['hoa-hong', 'gel'] },
    { k: 'kh', text: 'combo nha e' },
    { k: 'cap', e: 'Xin thông tin lên đơn', t: 'Chọn xong: AI xin SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ em ghi **combo máy + gel**, 520.000đ, freeship. Chị gửi em **SĐT và địa chỉ** để em lên đơn nha.' },

    // Khách im sau khi được xin SĐT, địa chỉ → màn hình phụ: gắn thẻ (3 hashtag quảng cáo + thẻ từ cuộc chat), bám đuổi 3 tin
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Chưa gửi SĐT: Preny tự gắn thẻ khách', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi theo thẻ', t: '3 tin ngắn: 15 phút, 3 tiếng, 20 tiếng', s: 'Chỉ nói về đúng combo khách đã chọn' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T2 23/11/2026', d: 700 },
    { k: 'ai', text: 'Chị Vy ơi, em giữ cho chị **combo máy + gel** rồi ạ. Chị gửi em SĐT, địa chỉ để em gửi kịp đơn chiều nay nha 💗' },
    { k: 'p', a: 'r1', d: 900 },
    { k: 'time', nhan: '3 tiếng sau', gio: '17:49', ngay: 'T2 23/11/2026', d: 700 },
    { k: 'ai', text: 'Em gửi chị **ảnh thật** cách shop đóng gói nha 📦 Bên ngoài chỉ là hộp carton trơn, không ai biết bên trong là gì.' },
    { k: 'ai', imgs: ['hop-kin', 'hop-trang'] },
    { k: 'p', a: 'r2', d: 900 },
    { k: 'time', nhan: '20 tiếng sau', gio: '10:49', ngay: 'T3 24/11/2026', d: 700 },
    { k: 'ai', text: 'Chị chỉ cần gửi **SĐT và địa chỉ** là em lên đơn liền, tặng thêm **nến thơm mini**, freeship ạ ⚡' },
    { k: 'p', a: 'r3', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 3, khách gửi SĐT, địa chỉ', s: 'AI kiểm tra ngay thông tin khách gửi' },
    { k: 'kh', text: '0938 51627, giao về cty đc ko e, 72 lê thánh tôn q1. tên ng gửi ghi gì vậy' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'cap', e: 'Kiểm tra dữ liệu', t: 'SĐT thiếu 1 số → hỏi lại; báo rõ tên người gửi' },
    { k: 'ai', text: 'Dạ giao về công ty được ạ. Tên người gửi trên vận đơn là **"HN Store"**, hàng ghi **"phụ kiện"**, không ai biết bên trong nha. SĐT chị gửi mới có **9 số**, chị kiểm tra lại giúp em nha.' },
    { k: 'kh', text: '0938 516 274 nha e' },
    { k: 'cap', e: 'Chốt đơn', t: 'Tự tổng hợp đơn: combo, quà tặng, SĐT, địa chỉ, ghi chú đóng gói' },
    { k: 'ai', text: 'Dạ chị kiểm tra lại đơn giúp em nha:\n– Combo máy massage hoa hồng + gel gốc nước\n– Tặng 1 nến thơm mini\n– Tổng: **520.000đ** (freeship)\n– Người nhận: Vy · 0938516274\n– 72 Lê Thánh Tôn, Q.1 (công ty)\n– Hộp trơn, vận đơn ghi "phụ kiện"\nChị xác nhận giúp em đơn này nha.', nut: 'Quản lý đơn hàng', d: 3600 },
    { k: 'cap', e: 'Xong', t: 'Khách chỉ cần nói "Ok e"' },
    { k: 'kh', text: 'Ok e' },
    { k: 'ai', text: 'Dạ em lên đơn, đóng hộp trơn gửi chị liền nha ⚡', d: 1300 },

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
    { k: 'ai', text: 'Dạ cảm ơn chị Vy nha 💗 Đơn đã được xác nhận, shop đóng hộp trơn gửi ngay hôm nay. Shop đang giảm giá mấy món khách hay mua kèm, chị xem thử nha:' },
    { k: 'car', sp: [
        { img: 'nen-2', ten: 'Nến thơm hương gỗ 200g', gia: '169.000đ', cu: '199.000đ', giam: '-15%' },
        { img: 'dau-massage', ten: 'Dầu massage thư giãn 120ml', gia: '152.000đ', cu: '179.000đ', giam: '-15%' },
        { img: 'gel', ten: 'Gel gốc nước 100ml', gia: '127.000đ', cu: '149.000đ', giam: '-15%' },
        { img: 'bcs', ten: 'Bao cao su siêu mỏng hộp 10', gia: '89.000đ', cu: '109.000đ', giam: '-18%' },
        { img: 'xanh', ten: 'Máy massage mini xanh mint', gia: '297.000đ', cu: '350.000đ', giam: '-15%' },
      ], d: 5200 },

    // Chăm sóc sau bán qua Zalo
    { k: 'zalo', gio: '19:30', ngay: 'T5 26/11/2026', chip: 'Tối hôm nhận · khách đã nhận hàng', d: 1500 },
    { k: 'cap', e: 'Chăm sóc sau bán qua Zalo', t: 'Khách nhận hàng: AI hỏi sản phẩm dùng ổn không', s: 'Dặn vệ sinh, cất giữ, xin đánh giá trong tin Zalo OA' },
    { k: 'zns', zns: {
        img: 'hoa-hong', tieuDe: 'Chị Vy ơi, sản phẩm dùng ổn không ạ?',
        noiDung: 'Hồng Nhung Store cảm ơn chị đã nhận đơn **#HN23114**. Chị vệ sinh bằng nước sạch, lau khô, cất trong túi vải đi kèm là bền lâu nha!',
        nut: 'Đánh giá sản phẩm',
      }, d: 4200 },
    { k: 'cap', e: 'ZBS · Sản phẩm bán chạy', t: '1 tuần sau: gửi sản phẩm bán chạy qua Zalo', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'T5 03/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['nen-2', 'dau-massage', 'gel', 'nen'], nhan: 'TOP BÁN CHẠY TUẦN NÀY', mau: '#F97316',
        tieuDe: '🔥 Top bán chạy tuần này tại Hồng Nhung Store',
        noiDung: '**Nến thơm hương gỗ**, **dầu massage thư giãn** và **gel gốc nước** đang được khách chọn nhiều nhất tuần qua.',
        nut: 'Xem ngay',
      }, d: 4600 },
    { k: 'cap', e: 'ZBS · Khuyến mãi', t: '1 tuần sau nữa: gửi ưu đãi cho khách cũ', s: 'Kéo khách quay lại mua tiếp, không cần khách nhắn' },
    { k: 'zstamp', gio: '19:30', ngay: 'T5 10/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['cap-doi', 'nen-2', 'hop-kin', 'gel'], nhan: 'QUÀ GIÁNG SINH · GIẢM 15%',
        tieuDe: 'Ưu đãi Giáng sinh cho khách đã mua tại Hồng Nhung Store',
        noiDung: 'Bộ quà nến thơm + dầu massage cho cặp đôi đang giảm **15%**, giao hộp trơn, freeship. Áp dụng đến hết 25/12/2026.',
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
    tag: { av: 'TV', ten: 'Lê Thảo Vy', sub: 'Messenger · bình luận quảng cáo Máy massage hoa hồng',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#maymassage', 'qt hot'], ['#giaokindao', 'qt hot'], ['#quatangcapdoi', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#Combo520', 'qt']]]],
      im: 'Khách im từ 14:49, sau khi được xin SĐT, địa chỉ',
      rule: { lb: 'Bám đuổi theo thẻ #maymassage', tieuDe: '3 tin ngắn về đúng combo khách đã chọn',
              dong: [['15 phút', 'Đã giữ combo máy + gel cho khách'], ['3 tiếng', 'Gửi ảnh thật hộp đóng gói kín'], ['20 tiếng', 'Chỉ cần SĐT, địa chỉ là lên đơn']] },
      reply: 'Khách gửi SĐT, địa chỉ · dừng bám đuổi' },
    capi: { tieuDe: 'Gửi đơn hàng cho Facebook', event: 'Purchase', nhan: 'SỰ KIỆN MUA HÀNG', giaTri: '520.000đ', pk: 'Purchase · 520.000đ',
      dong: [['Đơn hàng', '#HN23114 · Combo máy massage + gel'], ['Nguồn khách', 'Bình luận quảng cáo Máy massage hoa hồng → Messenger'], ['Giá trị', '520.000 VND'], ['Event ID', 'HN23114-PURCHASE (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện mua hàng' },
  },
  donHang: {
    ma: '#HN23114', sp: 'Combo máy massage hoa hồng + gel', bien: 'Màu đỏ · hộp trơn · x1', img: 'hoa-hong', gia: '520.000đ',
    nv: { ten: 'Nhân viên Nhung', av: 'NN' },
    ten: 'Lê Thảo Vy', sdt: '0938516274', dc: '72 Lê Thánh Tôn, Q.1, TP.HCM (công ty)', gio: '11:05 · 24/11/2026',
  },
};
