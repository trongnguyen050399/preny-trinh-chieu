/* Bài 2 (video demo ngang tự chạy): NỘI THẤT Ô TÔ (thảm lót sàn da 6D theo form xe), nhóm thương mại điện tử. Làm 23/11/2026 theo file mẫu Yến chưng tươi:
   - 1 cảnh duy nhất: bài quảng cáo, 2 khách bình luận (Vios có form không, Accent có không) → trả lời cả 2 "Mình check ib shop nha"
     → AI nhắn inbox trước: giá + đúng ảnh quảng cáo, hỏi 1 điều (dòng xe, đời xe) → khách chỉ nói "xe vios", sợ không vừa, sợ mùi
     → AI hỏi lại năm sản xuất (mỗi đời Vios một form sàn) → khách: Vios 2022 → AI báo đúng form 2018–2023, không mùi, đặt vào là xong, đổi nếu không vừa
     → hỏi màu đen hay đỏ → khách chọn đen → AI xin SĐT + địa chỉ → khách im
     → gắn thẻ (3 hashtag quảng cáo + #baogia + màu khách chọn) → bám đuổi 3 tin 15 phút, 3 tiếng, 20 tiếng → khách gửi SĐT + địa chỉ
     → tóm tắt đơn → Purchase lên Facebook → đơn tự động, nhân viên bấm xác nhận → cảm ơn + 5 sản phẩm giảm giá
     → Zalo: hỏi thăm, bán chạy, khuyến mãi → tổng kết → logo.
   - Chỉ 1 sản phẩm từ đầu tới cuối (thảm lót sàn 6D màu đen cho Vios). Tên shop, giá, form xe, khách, SĐT, địa chỉ: minh họa.
     Ảnh: Unsplash dùng chung với bài 1 (vài ảnh là nội thất xe hãng khác, chữ không ghi đó là Vios). */
window.VN_KB = {
  ten: 'Nội thất ô tô video ngang',
  ketSub: 'Để AI tư vấn đúng form xe, bám đuổi và lên đơn nội thất ô tô cho shop của bạn',
  shop: { ten: 'Nội Thất Ô Tô Phát Đạt', av: 'PĐ', mau: '#1F2937', sub: 'Thường trả lời ngay' },
  anh: {
    'tham-den': '../assets/img/u/1640705049944-de916f415bb4_800x800.jpg',
    'tham-do': '../assets/img/u/1687455564554-4bdbb8f15437_800x800.jpg',
    'tham-sau': '../assets/img/u/1745243996628-eccec80eb2d6_800x800.jpg',
    'lot-cop': '../assets/img/u/1602161755661-3781cddac355_800x800.jpg',
    'vo-lang': '../assets/img/u/1598859159221-1fffc50b4932_800x800.jpg',
    'nuoc-hoa': '../assets/img/u/1793690807352-04423426292a_800x800.jpg',
    'nuoc-hoa-2': '../assets/img/u/1768983298275-942312c9b446_800x800.jpg',
    'camera': '../assets/img/u/1765959106936-851735565c12_800x800.jpg',
    'ghe-da': '../assets/img/u/1614530499660-fe1fbd7921d6_800x800.jpg',
    'lau-xe': '../assets/img/u/1732357624591-f2137085659b_800x800.jpg',
    'sac': '../assets/img/u/1760818078878-6948eb2fc2cf_800x800.jpg',
    'noi-that': '../assets/img/u/1652860316736-54d54045ec55_800x800.jpg',
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= BÌNH LUẬN QUẢNG CÁO → INBOX (cảnh duy nhất) ================= */
    { k: 'canh', nhan: 'Bình luận quảng cáo → Inbox', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'tham-den', nhan: 'MESSENGER', tieuDe: 'Thảm lót sàn da 6D · cắt theo form xe', nut: 'Gửi tin nhắn',
        text: 'THẢM LÓT SÀN DA 6D 🚗 Cắt theo form từng dòng xe, sedan 5 chỗ chỉ 1.350K. Không mùi, chống nước, đặt vào là xong. Không vừa form đổi ngay, freeship toàn quốc. #thamlotsan #noithatoto #tham6d',
      }, d: 1500 },
    { k: 'cap', e: 'Bình luận hỏi giá', t: 'Khách hỏi giá ngay dưới quảng cáo', s: 'Một khách khác hỏi Accent có form không' },
    { k: 'cmt', i: 0, ten: 'Đức Thịnh', av: 'ĐT', text: 'Vios có form ko shop, giá sao?' },
    { k: 'cmt', i: 1, ten: 'Hoàng Nam', av: 'HN', text: 'Accent 2021 có ko shop?' },
    { k: 'cap', e: 'Trả lời cả 2 bình luận', t: 'Trả lời ngắn gọn, mời khách vào inbox', s: 'Tư vấn chi tiết trong tin nhắn riêng' },
    { k: 'rep', i: 0, text: 'Mình check ib shop nha 💬' },
    { k: 'rep', i: 1, text: 'Mình check ib shop nha 💬' },
    { k: 'ms', ref: { loai: 'cmt', img: 'tham-den', dong1: 'Bạn đã bình luận về quảng cáo của Nội Thất Ô Tô Phát Đạt', dong2: '"Vios có form ko shop, giá sao?"' }, gio: '14:47' },
    { k: 'cap', e: 'AI nhắn trước', t: 'Inbox trước: báo giá, gửi đúng ảnh quảng cáo', s: 'Khách không cần mô tả lại sản phẩm' },
    { k: 'ai', text: 'Dạ chào anh Thịnh, thảm lót sàn da 6D cho sedan 5 chỗ bên em giá **1.350.000đ** trọn bộ sàn trước và sau ạ, freeship toàn quốc.' },
    { k: 'ai', img: 'tham-den' },
    { k: 'ai', text: 'Anh cho em xin **dòng xe và năm sản xuất** ạ, để em báo đúng form cho vừa sàn xe nha?' },

    { k: 'cap', e: 'Khách trả lời thiếu', t: 'Khách chỉ nói "xe vios", sợ không vừa, sợ mùi', s: 'AI hỏi lại cho đúng, không đoán form' },
    { k: 'kh', text: 'xe vios e. sợ ko vừa, mà thảm da có mùi ko' },
    { k: 'ai', text: 'Dạ Vios mỗi đời một **form sàn khác nhau** ạ (đời 2014–2017 khác đời 2018–2023). Anh xem giúp em **năm sản xuất** trên giấy đăng ký xe nha.' },
    { k: 'kh', text: 'vios 2022' },
    { k: 'ai', text: 'Dạ anh lấy đúng form **Vios 2018–2023** ạ. Da PU **không mùi, chống nước**, thảm **đặt vào là xong**, có video hướng dẫn. Lỡ không vừa bên em **đổi ngay**, bảo hành 12 tháng.' },
    { k: 'cap', e: 'Hỏi đúng thứ còn thiếu', t: 'Có form xe rồi: AI hỏi màu đen hay đỏ', s: 'Gửi ảnh từng màu để khách chọn nhanh' },
    { k: 'ai', text: 'Anh lấy **màu đen** hay **màu đỏ** ạ? Đen dễ hợp nội thất, đỏ nhìn thể thao hơn.' },
    { k: 'ai', imgs: ['tham-den', 'tham-do'] },
    { k: 'kh', text: 'màu đen đi e' },
    { k: 'cap', e: 'Xin thông tin lên đơn', t: 'Chọn xong: AI xin SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ em ghi **1 bộ thảm 6D màu đen cho Vios 2018–2023**, 1.350.000đ, freeship. Anh gửi em **SĐT và địa chỉ** để em lên đơn nha.' },

    // Khách im sau khi được xin SĐT, địa chỉ → màn hình phụ: gắn thẻ (3 hashtag quảng cáo + thẻ từ cuộc chat), bám đuổi 3 tin
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Chưa gửi SĐT: Preny tự gắn thẻ khách', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi theo thẻ', t: '3 tin ngắn: 15 phút, 3 tiếng, 20 tiếng', s: 'Chỉ nói về đúng bộ thảm khách đã chọn' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T2 23/11/2026', d: 700 },
    { k: 'ai', text: 'Anh Thịnh ơi, em giữ cho anh **bộ thảm 6D màu đen form Vios** rồi ạ. Anh gửi em SĐT, địa chỉ để em gửi kịp đơn chiều nay nha 😊' },
    { k: 'p', a: 'r1', d: 900 },
    { k: 'time', nhan: '3 tiếng sau', gio: '17:49', ngay: 'T2 23/11/2026', d: 700 },
    { k: 'ai', text: 'Em gửi anh ảnh thật thảm 6D vân trám bên em lắp trên xe khách nha 🚗 Ôm kín sàn, không hở mép, dơ lau khăn ẩm là sạch.' },
    { k: 'ai', imgs: ['tham-den', 'tham-sau', 'lau-xe'] },
    { k: 'p', a: 'r2', d: 900 },
    { k: 'time', nhan: '20 tiếng sau', gio: '10:49', ngay: 'T3 24/11/2026', d: 700 },
    { k: 'ai', text: 'Anh chỉ cần gửi **SĐT và địa chỉ** là em lên đơn liền, tặng **khăn lau microfiber**, freeship ạ ⚡' },
    { k: 'p', a: 'r3', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 3, khách gửi SĐT, địa chỉ', s: 'AI kiểm tra ngay thông tin khách gửi' },
    { k: 'kh', text: 'Thịnh 0938472615, 18 nguyễn thị thập, p tân hưng, q7' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'cap', e: 'Chốt đơn', t: 'Tự tổng hợp đơn: form xe, màu, quà tặng, SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ anh kiểm tra lại đơn giúp em nha:\n– Thảm lót sàn 6D màu đen · Vios 2018–2023\n– Tặng 1 khăn lau microfiber\n– Tổng: **1.350.000đ** (freeship)\n– Người nhận: Thịnh · 0938472615\n– 18 Nguyễn Thị Thập, P. Tân Hưng, Q.7\nAnh xác nhận giúp em đơn này nha.', nut: 'Quản lý đơn hàng', d: 3400 },
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

    // Mua xong: tin cảm ơn kèm 5 sản phẩm đang giảm giá
    { k: 'cap', e: 'Bán thêm sau mua', t: 'Cảm ơn khách, gửi kèm 5 sản phẩm đang giảm giá', s: 'Khách bấm "Mua ngay" ngay trong Messenger' },
    { k: 'ai', text: 'Dạ cảm ơn anh Thịnh nha 💛 Đơn đã được xác nhận, shop gửi hàng ngay hôm nay. Shop đang giảm giá mấy món khách Vios hay lấy kèm, anh xem thử nha:' },
    { k: 'car', sp: [
        { img: 'lot-cop', ten: 'Lót cốp da 6D Vios', gia: '405.000đ', cu: '450.000đ', giam: '-10%' },
        { img: 'vo-lang', ten: 'Bọc vô lăng da chỉ đỏ', gia: '225.000đ', cu: '250.000đ', giam: '-10%' },
        { img: 'nuoc-hoa', ten: 'Nước hoa treo xe hương gỗ', gia: '135.000đ', cu: '150.000đ', giam: '-10%' },
        { img: 'camera', ten: 'Camera hành trình 2K', gia: '1.290.000đ', cu: '1.490.000đ', giam: '-13%' },
        { img: 'sac', ten: 'Đế sạc không dây', gia: '351.000đ', cu: '390.000đ', giam: '-10%' },
      ], d: 5200 },

    // Chăm sóc sau bán qua Zalo
    { k: 'zalo', gio: '19:30', ngay: 'T6 27/11/2026', chip: '2 ngày sau khi nhận · khách đã lắp thảm', d: 1500 },
    { k: 'cap', e: 'Chăm sóc sau bán qua Zalo', t: 'Khách nhận hàng: AI hỏi thảm vừa form chưa', s: 'Dặn cách lau thảm, xin đánh giá trong tin Zalo OA' },
    { k: 'zns', zns: {
        img: 'tham-den', tieuDe: 'Anh Thịnh ơi, thảm vừa form chưa ạ?',
        noiDung: 'Nội Thất Ô Tô Phát Đạt cảm ơn anh đã nhận đơn **#PD24118** (Thảm lót sàn 6D màu đen · Vios). Dơ anh chỉ cần lau khăn ẩm, không xịt nước trực tiếp vào mép may là thảm bền lâu nha!',
        nut: 'Đánh giá sản phẩm',
      }, d: 4200 },
    { k: 'cap', e: 'ZBS · Sản phẩm bán chạy', t: '1 tuần sau: gửi sản phẩm bán chạy qua Zalo', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'T6 04/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['lot-cop', 'vo-lang', 'nuoc-hoa-2', 'camera'], nhan: 'TOP BÁN CHẠY TUẦN NÀY', mau: '#F97316',
        tieuDe: '🔥 Top bán chạy tuần này tại Nội Thất Ô Tô Phát Đạt',
        noiDung: '**Lót cốp da 6D**, **bọc vô lăng da** và **camera hành trình** đang được khách sedan chọn nhiều nhất tuần qua.',
        nut: 'Xem ngay',
      }, d: 4600 },
    { k: 'cap', e: 'ZBS · Khuyến mãi', t: '1 tuần sau nữa: gửi ưu đãi cho khách cũ', s: 'Kéo khách quay lại mua tiếp, không cần khách nhắn' },
    { k: 'zstamp', gio: '19:30', ngay: 'T6 11/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['ghe-da', 'noi-that', 'sac', 'tham-do'], nhan: 'KHÁCH CŨ · GIẢM 10%',
        tieuDe: 'Ưu đãi riêng cho khách đã mua tại Phát Đạt',
        noiDung: 'Bọc ghế da, đế sạc không dây, nước hoa xe đang giảm **10%**, freeship toàn quốc. Áp dụng đến hết 20/12/2026.',
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
    tag: { av: 'ĐT', ten: 'Phạm Đức Thịnh', sub: 'Messenger · bình luận quảng cáo Thảm lót sàn 6D',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#thamlotsan', 'qt hot'], ['#noithatoto', 'qt hot'], ['#tham6d', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#MauDen', 'qt']]]],
      im: 'Khách im từ 14:50, sau khi được xin SĐT, địa chỉ',
      rule: { lb: 'Bám đuổi theo thẻ #thamlotsan', tieuDe: '3 tin ngắn về đúng bộ thảm khách đã chọn',
              dong: [['15 phút', 'Đã giữ bộ thảm đen form Vios'], ['3 tiếng', 'Gửi ảnh thật thảm trên xe'], ['20 tiếng', 'Chỉ cần SĐT, địa chỉ là lên đơn']] },
      reply: 'Khách gửi SĐT, địa chỉ · dừng bám đuổi' },
    capi: { tieuDe: 'Gửi đơn hàng cho Facebook', event: 'Purchase', nhan: 'SỰ KIỆN MUA HÀNG', giaTri: '1.350.000đ', pk: 'Purchase · 1.350.000đ',
      dong: [['Đơn hàng', '#PD24118 · Thảm lót sàn 6D màu đen'], ['Nguồn khách', 'Bình luận quảng cáo Thảm lót sàn 6D → Messenger'], ['Giá trị', '1.350.000 VND'], ['Event ID', 'PD24118-PURCHASE (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện mua hàng' },
  },
  donHang: {
    ma: '#PD24118', sp: 'Thảm lót sàn da 6D màu đen', bien: 'Toyota Vios · 2018–2023 · x1', img: 'tham-den', gia: '1.350.000đ',
    nv: { ten: 'Nhân viên Đạt', av: 'NĐ' },
    ten: 'Phạm Đức Thịnh', sdt: '0938472615', dc: '18 Nguyễn Thị Thập, P. Tân Hưng, Q.7, TP.HCM', gio: '11:05 · 24/11/2026',
  },
};
