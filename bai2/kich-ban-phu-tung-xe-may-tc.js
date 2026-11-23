/* Bài 2 (video demo ngang tự chạy): PHỤ TÙNG XE MÁY (bộ nhông sên dĩa xe số), nhóm thương mại điện tử. Làm 23/11/2026 theo file mẫu Yến chưng tươi:
   - 1 cảnh duy nhất: bài quảng cáo, 2 khách bình luận (Wave Alpha có không, Sirius có bộ không) → trả lời cả 2 "Mình check ib shop nha"
     → AI nhắn inbox trước: giá + đúng ảnh quảng cáo, hỏi 1 điều (dòng xe, năm sản xuất) → khách chỉ nói "wave", sợ không vừa
     → AI hỏi lại đúng dòng Wave (Alpha, RSX, 110 S…) và năm → khách: Wave Alpha 2018 → AI báo đúng mã, đổi 7 ngày nếu không vừa
     → hỏi bộ thường hay bộ có phốt → khách chọn → AI xin SĐT + địa chỉ → khách im
     → gắn thẻ (3 hashtag quảng cáo + #baogia + loại bộ khách chọn) → bám đuổi 3 tin 15 phút, 3 tiếng, 20 tiếng → khách gửi SĐT + địa chỉ
     (ca khó: thiếu số nhà) → tóm tắt đơn → Purchase lên Facebook
     → đơn tự động, nhân viên bấm xác nhận → cảm ơn + 5 sản phẩm giảm giá → Zalo: hỏi thăm, bán chạy, khuyến mãi → tổng kết → logo.
   - Chỉ 1 sản phẩm từ đầu tới cuối (bộ nhông sên dĩa có phốt cho Wave Alpha). Tên shop, giá, mã phụ tùng, khách, SĐT, địa chỉ: minh họa.
     Ảnh: Unsplash dùng chung với bài 1. */
window.VN_KB = {
  ten: 'Phụ tùng xe máy video ngang',
  ketSub: 'Để AI tư vấn đúng đời xe, bám đuổi và lên đơn phụ tùng cho shop của bạn',
  shop: { ten: 'Phụ Tùng Xe Máy Minh Tiến', av: 'MT', mau: '#DC2626', sub: 'Thường trả lời ngay' },
  anh: {
    'nhong-xich': '../assets/img/u/1769537754999-724044ec2e32_800x800.jpg',
    'xich-xe-so': '../assets/img/u/1519307786984-f09ae1102e8f_800x800.jpg',
    'xich-2': '../assets/img/u/1745688810792-f7d036403673_800x800.jpg',
    'dia-phanh': '../assets/img/u/1770400770192-05b8b1cdb8fb_800x800.jpg',
    'bugi': '../assets/img/u/1782885044249-863562f7e93e_800x800.jpg',
    'bugi-bo': '../assets/img/u/1782885044133-27c4df887d96_800x800.jpg',
    'nhot': '../assets/img/u/1746014994836-d3a15937e674_800x800.jpg',
    'cua-hang': '../assets/img/u/1767281075781-4ba2655958f0_800x800.jpg',
    'tho-sua': '../assets/img/u/1766170507864-cdd271978132_800x800.jpg',
    'thay-xich': '../assets/img/u/1674006597225-26515c7f9ffc_800x800.jpg',
    'lop': '../assets/img/u/1634071257121-8cd59787ff1c_800x800.jpg',
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= BÌNH LUẬN QUẢNG CÁO → INBOX (cảnh duy nhất) ================= */
    { k: 'canh', nhan: 'Bình luận quảng cáo → Inbox', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'nhong-xich', nhan: 'MESSENGER', tieuDe: 'Bộ nhông sên dĩa xe số · từ 285K', nut: 'Gửi tin nhắn',
        text: 'BỘ NHÔNG SÊN DĨA XE SỐ 🏍️ Đúng mã cho Wave, Sirius, Future. Không vừa xe đổi trong 7 ngày, có video hướng dẫn tự thay. Freeship đơn từ 250k. #nhongsendia #xeso #phutungxemay',
      }, d: 1500 },
    { k: 'cap', e: 'Bình luận hỏi giá', t: 'Khách hỏi giá ngay dưới quảng cáo', s: 'Một khách khác hỏi Sirius có bộ không' },
    { k: 'cmt', i: 0, ten: 'Quốc Hùng', av: 'QH', text: 'Wave có bộ ko shop, giá sao?' },
    { k: 'cmt', i: 1, ten: 'Minh Trí', av: 'TR', text: 'Sirius 2015 có bộ k shop?' },
    { k: 'cap', e: 'Trả lời cả 2 bình luận', t: 'Trả lời ngắn gọn, mời khách vào inbox', s: 'Tư vấn chi tiết trong tin nhắn riêng' },
    { k: 'rep', i: 0, text: 'Mình check ib shop nha 💬' },
    { k: 'rep', i: 1, text: 'Mình check ib shop nha 💬' },
    { k: 'ms', ref: { loai: 'cmt', img: 'nhong-xich', dong1: 'Bạn đã bình luận về quảng cáo của Phụ Tùng Xe Máy Minh Tiến', dong2: '"Wave có bộ ko shop, giá sao?"' }, gio: '14:47' },
    { k: 'cap', e: 'AI nhắn trước', t: 'Inbox trước: báo giá, gửi đúng ảnh quảng cáo', s: 'Khách không cần mô tả lại sản phẩm' },
    { k: 'ai', text: 'Dạ chào anh Hùng, bộ nhông sên dĩa cho xe số bên em giá **từ 285.000đ** ạ, freeship đơn từ 250k.' },
    { k: 'ai', img: 'nhong-xich' },
    { k: 'ai', text: 'Anh cho em xin **dòng xe và năm sản xuất** ạ, để em báo đúng mã cho vừa xe nha?' },

    { k: 'cap', e: 'Khách trả lời thiếu', t: 'Khách chỉ nói "wave", sợ mua về không vừa', s: 'AI hỏi lại cho đúng, không đoán mã' },
    { k: 'kh', text: 'wave thôi e, sên kêu quá. sợ mua về ko vừa' },
    { k: 'ai', text: 'Dạ Wave có nhiều dòng: **Wave Alpha, Wave RSX, Wave 110 S**… mỗi dòng một mã khác nhau ạ. Anh xem giúp em **chữ trên ốp hông xe** và **năm mua xe** nha.' },
    { k: 'kh', text: 'wave alpha, mua 2018' },
    { k: 'ai', text: 'Dạ anh lấy đúng mã **bộ cho Wave Alpha 110 đời 2017–2022** ạ. Lỡ không vừa bên em **đổi trong 7 ngày**, có **video hướng dẫn tự thay** hoặc anh mang ra tiệm gần nhà cũng được.' },
    { k: 'cap', e: 'Hỏi đúng thứ còn thiếu', t: 'Có mã xe rồi: AI hỏi bộ thường hay bộ có phốt', s: 'Gửi ảnh để khách chọn nhanh' },
    { k: 'ai', text: 'Anh lấy **bộ thường 285.000đ** hay **bộ có phốt cao su 420.000đ** ạ? Bộ có phốt giữ mỡ, ít kêu, đi mưa bền hơn.' },
    { k: 'ai', imgs: ['nhong-xich', 'xich-xe-so'] },
    { k: 'kh', text: 'lấy bộ có phốt đi e' },
    { k: 'cap', e: 'Xin thông tin lên đơn', t: 'Chọn xong: AI xin SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ em ghi **1 bộ có phốt cho Wave Alpha 110**, 420.000đ, freeship. Anh gửi em **SĐT và địa chỉ** để em lên đơn nha.' },

    // Khách im sau khi được xin SĐT, địa chỉ → màn hình phụ: gắn thẻ (3 hashtag quảng cáo + thẻ từ cuộc chat), bám đuổi 3 tin
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Chưa gửi SĐT: Preny tự gắn thẻ khách', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi theo thẻ', t: '3 tin ngắn: 15 phút, 3 tiếng, 20 tiếng', s: 'Chỉ nói về đúng bộ phụ tùng khách đã chọn' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T2 23/11/2026', d: 700 },
    { k: 'ai', text: 'Anh Hùng ơi, em giữ cho anh **bộ có phốt Wave Alpha** rồi ạ. Anh gửi em SĐT, địa chỉ để em gửi kịp đơn chiều nay nha 😊' },
    { k: 'p', a: 'r1', d: 900 },
    { k: 'time', nhan: '3 tiếng sau', gio: '17:49', ngay: 'T2 23/11/2026', d: 700 },
    { k: 'ai', text: 'Em gửi anh ảnh thật thợ thay bộ nhông sên dĩa cho xe số nha 🔧 Khoảng **30 phút** là xong, chạy êm hẳn.' },
    { k: 'ai', imgs: ['thay-xich', 'tho-sua', 'cua-hang'] },
    { k: 'p', a: 'r2', d: 900 },
    { k: 'time', nhan: '20 tiếng sau', gio: '10:49', ngay: 'T3 24/11/2026', d: 700 },
    { k: 'ai', text: 'Anh chỉ cần gửi **SĐT và địa chỉ** là em lên đơn liền, tặng **chai xịt dưỡng sên** 100ml, freeship ạ ⚡' },
    { k: 'p', a: 'r3', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 3, khách gửi SĐT, địa chỉ', s: 'AI kiểm tra ngay thông tin khách gửi' },
    { k: 'kh', text: '0908615247, lê văn việt thủ đức' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'cap', e: 'Kiểm tra dữ liệu', t: 'Thiếu số nhà và phường → hỏi lại ngay' },
    { k: 'ai', text: 'Dạ em ghi SĐT rồi ạ. Đường **Lê Văn Việt** khá dài, anh cho em xin thêm **số nhà và phường** để shipper giao đúng nha.' },
    { k: 'kh', text: 'số 45, P. Tăng Nhơn Phú A nha' },
    { k: 'cap', e: 'Chốt đơn', t: 'Tự tổng hợp đơn: đời xe, loại bộ, quà tặng, SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ anh kiểm tra lại đơn giúp em nha:\n– Bộ nhông sên dĩa có phốt · Wave Alpha 110\n– Tặng 1 chai xịt dưỡng sên\n– Tổng: **420.000đ** (freeship)\n– Người nhận: Hùng · 0908615247\n– 45 Lê Văn Việt, P. Tăng Nhơn Phú A, Thủ Đức\nAnh xác nhận giúp em đơn này nha.', nut: 'Quản lý đơn hàng', d: 3400 },
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
    { k: 'ai', text: 'Dạ cảm ơn anh Hùng nha 💛 Đơn đã được xác nhận, shop gửi hàng ngay hôm nay. Shop đang giảm giá mấy món xe số hay thay kèm, anh xem thử nha:' },
    { k: 'car', sp: [
        { img: 'nhot', ten: 'Nhớt xe số 10W40 0,8 lít', gia: '86.000đ', cu: '95.000đ', giam: '-10%' },
        { img: 'bugi', ten: 'Bugi xe số Wave, Sirius', gia: '59.000đ', cu: '65.000đ', giam: '-10%' },
        { img: 'dia-phanh', ten: 'Má phanh trước Wave Alpha', gia: '72.000đ', cu: '80.000đ', giam: '-10%' },
        { img: 'lop', ten: 'Lốp sau 80/90-17', gia: '289.000đ', cu: '320.000đ', giam: '-10%' },
        { img: 'xich-2', ten: 'Sên vàng 428 (thay riêng)', gia: '162.000đ', cu: '180.000đ', giam: '-10%' },
      ], d: 5200 },

    // Chăm sóc sau bán qua Zalo
    { k: 'zalo', gio: '19:30', ngay: 'T6 27/11/2026', chip: '2 ngày sau khi nhận · khách đã thay bộ mới', d: 1500 },
    { k: 'cap', e: 'Chăm sóc sau bán qua Zalo', t: 'Khách nhận hàng: AI hỏi xe chạy êm chưa', s: 'Dặn chỉnh sên cho bền, xin đánh giá trong tin Zalo OA' },
    { k: 'zns', zns: {
        img: 'thay-xich', tieuDe: 'Anh Hùng ơi, xe chạy êm chưa ạ?',
        noiDung: 'Phụ Tùng Minh Tiến cảm ơn anh đã nhận đơn **#MT24113** (Bộ nhông sên dĩa có phốt Wave Alpha). Chạy khoảng 500km anh nhớ chỉnh lại độ chùng sên, xịt dưỡng mỗi 1.000km nha!',
        nut: 'Đánh giá sản phẩm',
      }, d: 4200 },
    { k: 'cap', e: 'ZBS · Sản phẩm bán chạy', t: '1 tuần sau: gửi sản phẩm bán chạy qua Zalo', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'T6 04/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['nhot', 'bugi', 'dia-phanh', 'lop'], nhan: 'TOP BÁN CHẠY TUẦN NÀY', mau: '#F97316',
        tieuDe: '🔥 Top bán chạy tuần này tại Phụ Tùng Minh Tiến',
        noiDung: '**Nhớt xe số**, **bugi** và **má phanh trước** đang được khách xe số chọn nhiều nhất tuần qua.',
        nut: 'Xem ngay',
      }, d: 4600 },
    { k: 'cap', e: 'ZBS · Khuyến mãi', t: '1 tuần sau nữa: gửi ưu đãi cho khách cũ', s: 'Kéo khách quay lại mua tiếp, không cần khách nhắn' },
    { k: 'zstamp', gio: '19:30', ngay: 'T6 11/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['cua-hang', 'bugi-bo', 'xich-2', 'nhong-xich'], nhan: 'KHÁCH CŨ · GIẢM 10%',
        tieuDe: 'Ưu đãi riêng cho khách đã mua tại Phụ Tùng Minh Tiến',
        noiDung: 'Nhớt, bugi, lốp xe số đang giảm **10%**, freeship đơn từ 250k. Áp dụng đến hết 20/12/2026.',
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
    tag: { av: 'QH', ten: 'Nguyễn Quốc Hùng', sub: 'Messenger · bình luận quảng cáo Bộ nhông sên dĩa',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#nhongsendia', 'qt hot'], ['#xeso', 'qt hot'], ['#phutungxemay', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#BoCoPhot', 'qt']]]],
      im: 'Khách im từ 14:50, sau khi được xin SĐT, địa chỉ',
      rule: { lb: 'Bám đuổi theo thẻ #nhongsendia', tieuDe: '3 tin ngắn về đúng bộ khách đã chọn',
              dong: [['15 phút', 'Đã giữ bộ có phốt Wave Alpha'], ['3 tiếng', 'Gửi ảnh thật thợ thay bộ'], ['20 tiếng', 'Chỉ cần SĐT, địa chỉ là lên đơn']] },
      reply: 'Khách gửi SĐT, địa chỉ · dừng bám đuổi' },
    capi: { tieuDe: 'Gửi đơn hàng cho Facebook', event: 'Purchase', nhan: 'SỰ KIỆN MUA HÀNG', giaTri: '420.000đ', pk: 'Purchase · 420.000đ',
      dong: [['Đơn hàng', '#MT24113 · Bộ nhông sên dĩa có phốt'], ['Nguồn khách', 'Bình luận quảng cáo Bộ nhông sên dĩa → Messenger'], ['Giá trị', '420.000 VND'], ['Event ID', 'MT24113-PURCHASE (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện mua hàng' },
  },
  donHang: {
    ma: '#MT24113', sp: 'Bộ nhông sên dĩa có phốt', bien: 'Wave Alpha 110 · 2017–2022 · x1', img: 'nhong-xich', gia: '420.000đ',
    nv: { ten: 'Nhân viên Tiến', av: 'NT' },
    ten: 'Nguyễn Quốc Hùng', sdt: '0908615247', dc: '45 Lê Văn Việt, P. Tăng Nhơn Phú A, Thủ Đức, TP.HCM', gio: '11:05 · 24/11/2026',
  },
};
