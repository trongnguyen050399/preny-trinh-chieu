/* Bài 2 (video demo ngang tự chạy): NỆM (nệm cao su non), nhóm thương mại điện tử.
   Làm 26/11/2026 theo người dùng: "ngành nệm nữa: hỏi kích thước dài rộng cao, tư vấn báo giá, mời lên cửa hàng để trải nghiệm,
   khách hỏi muốn đặt gửi luôn, ai xin sđt và địa chỉ cho nệm".
   - 1 cảnh duy nhất: bài quảng cáo, 2 khách bình luận (nệm 1m6 giá bao nhiêu, có giao Bình Dương không) → trả lời "Mình check ib shop nha"
     → AI nhắn inbox trước: giá từ, gửi đúng ảnh quảng cáo, hỏi giường dài rộng bao nhiêu, muốn nệm dày mấy phân
     → khách: 1m6 x 2m, dày 15cm, thích nằm hơi cứng → AI báo giá đúng size + mời ghé showroom nằm thử
     → khách: nhà ở Dĩ An xa, muốn đặt gửi luôn → AI xin SĐT + địa chỉ → khách im → gắn thẻ → bám đuổi 3 tin
     → khách gửi SĐT, địa chỉ thiếu số nhà → AI hỏi lại → tóm tắt đơn → Purchase → đơn tự động, nhân viên xác nhận
     → cảm ơn + 5 sản phẩm giảm giá → Zalo: hỏi thăm sau mấy đêm nằm + cách xoay nệm, bán chạy, chăn ga Tết → tổng kết → logo.
   - Theo quy tắc 25/11/2026: AI chỉ báo giá, gửi ảnh, hỏi kích thước/số lượng, xin SĐT + địa chỉ; không tự tính, không check khách cũ/mới.
   - Không hứa chữa đau lưng (chỉ nói độ cứng vừa, nằm không lún). Không tin cập nhật vận chuyển.
     Tên cửa hàng (Nệm Thanh An), giá, khách, SĐT, địa chỉ: minh họa. Ảnh Unsplash, ảnh thật, dùng chung với bài 1. */
window.VN_KB = {
  ten: 'Nệm video ngang',
  ketSub: 'Để AI hỏi đúng kích thước, báo giá và chốt đơn nệm cho cửa hàng của bạn',
  shop: { ten: 'Nệm Thanh An', av: 'TA', mau: '#1E40AF', sub: 'Thường trả lời ngay' },
  anh: {
    'nem': '../assets/img/u/1583535045024-e2479a694777_800x800.jpg',
    'nem-chan': '../assets/img/u/1647376036543-f9f543601a1d_800x800.jpg',
    'nem-vien': '../assets/img/u/1759176170553-7c078c66c514_800x800.jpg',
    'nem-mat': '../assets/img/u/1759176170879-6bd7073ab4f4_800x800.jpg',
    'phong-ngu': '../assets/img/u/1560185128-e173042f79dd_800x800.jpg',
    'phong-ngu-2': '../assets/img/u/1505693416388-ac5ce068fe85_800x800.jpg',
    'giuong-cua-so': '../assets/img/u/1506720186575-11354d325017_800x800.jpg',
    'nam-thu': '../assets/img/u/1495197359483-d092478c170a_800x800.jpg',
    'ngu-day': '../assets/img/u/1552650272-b8a34e21bc4b_800x800.jpg',
    'goi': '../assets/img/u/1584100936595-c0654b55a2e2_800x800.jpg',
    'goi-2': '../assets/img/u/1600414428640-f78a67c2aa3b_800x800.jpg',
    'ga': '../assets/img/u/1598535746036-87d13382f6a6_800x800.jpg',
    'chan-ga': '../assets/img/u/1762199904138-d163fe89540a_800x800.jpg',
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= BÌNH LUẬN QUẢNG CÁO → INBOX (cảnh duy nhất) ================= */
    { k: 'canh', nhan: 'Bình luận quảng cáo → Inbox', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'nem', nhan: 'MESSENGER', tieuDe: 'Nệm cao su non 5 vùng · bảo hành 10 năm', nut: 'Gửi tin nhắn',
        text: 'NỆM CAO SU NON 5 VÙNG 🛏️ Đủ size 1m2 – 1m8, dày 10cm hoặc 15cm, chỉ từ 2.690K. Bảo hành 10 năm, giao miễn phí TP.HCM và Bình Dương. Showroom Tân Bình mời nằm thử. #nemcaosunon #nem1m6 #nemgiare',
      }, d: 1500 },
    { k: 'cap', e: 'Bình luận hỏi giá', t: 'Khách hỏi giá nệm 1m6 dưới quảng cáo', s: 'Một khách khác hỏi có giao Bình Dương không' },
    { k: 'cmt', i: 0, ten: 'Ngọc Trâm', av: 'NT', text: 'Nệm 1m6 giá bao nhiêu shop?' },
    { k: 'cmt', i: 1, ten: 'Đức Huy', av: 'ĐH', text: 'Có giao Bình Dương ko shop?' },
    { k: 'cap', e: 'Trả lời cả 2 bình luận', t: 'Trả lời ngắn gọn, mời khách vào inbox', s: 'Báo giá chi tiết trong tin nhắn riêng' },
    { k: 'rep', i: 0, text: 'Mình check ib shop nha 💬' },
    { k: 'rep', i: 1, text: 'Mình check ib shop nha 💬' },
    { k: 'ms', ref: { loai: 'cmt', img: 'nem', dong1: 'Bạn đã bình luận về quảng cáo của Nệm Thanh An', dong2: '"Nệm 1m6 giá bao nhiêu shop?"' }, gio: '14:47' },
    { k: 'cap', e: 'AI nhắn trước', t: 'Inbox trước: giá từ, gửi đúng ảnh quảng cáo', s: 'Rồi hỏi đúng kích thước giường' },
    { k: 'ai', text: 'Dạ chào chị Trâm, nệm cao su non 5 vùng bên em giá **từ 2.690.000đ**, tùy kích thước và độ dày ạ.' },
    { k: 'ai', img: 'nem' },
    { k: 'ai', text: 'Giường nhà mình **dài, rộng bao nhiêu** và chị muốn nệm **dày mấy phân** ạ?' },
    { k: 'cap', e: 'Khách báo kích thước', t: 'Khách nói dài, rộng, dày và kiểu nằm thích', s: 'AI báo giá đúng size khách cần' },
    { k: 'kh', text: 'giường c 1m6 x 2m, dày chắc 15 phân. c thích nằm hơi cứng' },
    { k: 'ai', text: 'Dạ nệm **1m6 x 2m, dày 15cm** giá **3.490.000đ** ạ. Loại này độ cứng vừa, nằm không bị lún, bảo hành 10 năm.' },
    { k: 'cap', e: 'Mời ghé nằm thử', t: 'AI mời khách qua showroom trải nghiệm trước' },
    { k: 'ai', text: 'Chị rảnh thì ghé showroom **145 Cộng Hòa, Tân Bình** nằm thử cho chắc nha, bên em mở cửa **8h – 21h** mỗi ngày ạ 😊' },
    { k: 'cap', e: 'Khách muốn đặt luôn', t: 'Nhà xa: khách muốn đặt gửi về nhà', s: 'AI chốt đúng size, xin SĐT, địa chỉ' },
    { k: 'kh', text: 'nhà c ở Dĩ An, xa quá. đặt gửi luôn được ko e?' },
    { k: 'ai', text: 'Dạ được ạ. Em ghi **nệm 1m6 x 2m, dày 15cm**, **3.490.000đ**, giao miễn phí tận nhà, chị kiểm tra nệm rồi mới thanh toán. Chị gửi em **SĐT và địa chỉ** để em lên đơn nha.' },

    // Khách im sau khi được xin SĐT, địa chỉ → màn hình phụ: gắn thẻ (3 hashtag quảng cáo + thẻ từ cuộc chat), bám đuổi 3 tin
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Chưa gửi SĐT: Preny tự gắn thẻ khách', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi theo thẻ', t: '3 tin ngắn: 15 phút, 3 tiếng, 20 tiếng', s: 'Chỉ nói về đúng size nệm khách đã chọn' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T5 26/11/2026', d: 700 },
    { k: 'ai', text: 'Chị Trâm ơi, em giữ cho chị **nệm 1m6 x 2m, dày 15cm** rồi ạ, kho còn sẵn. Chị gửi em SĐT, địa chỉ để em xếp xe giao nha 😊' },
    { k: 'p', a: 'r1', d: 900 },
    { k: 'time', nhan: '3 tiếng sau', gio: '17:49', ngay: 'T5 26/11/2026', d: 700 },
    { k: 'ai', text: 'Em gửi chị ảnh thật nệm 1m6 bên em nha 🛏️ Mặt vải chần gòn, viền may chắc, nệm đặt lên giường vừa khít.' },
    { k: 'ai', imgs: ['nem-chan', 'nem-vien', 'phong-ngu'] },
    { k: 'p', a: 'r2', d: 900 },
    { k: 'time', nhan: '20 tiếng sau', gio: '10:49', ngay: 'T6 27/11/2026', d: 700 },
    { k: 'ai', text: 'Chị chỉ cần gửi **SĐT và địa chỉ** trước 12h là em giao nệm ngày mai, **tặng chị 2 gối cao su non** ạ 🎁' },
    { k: 'p', a: 'r3', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 3, khách gửi SĐT, địa chỉ', s: 'AI kiểm tra thông tin trước khi lên đơn' },
    { k: 'kh', text: 'Trâm 0908517362, đường số 9 kdc Tân Hòa, Đông Hòa, Dĩ An' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'cap', e: 'Kiểm tra dữ liệu', t: 'Thiếu số nhà: AI hỏi lại trước khi lên đơn' },
    { k: 'ai', text: 'Dạ chị cho em xin thêm **số nhà** trên đường số 9 để xe giao nệm tới đúng cửa nha 😊' },
    { k: 'kh', text: 'số 27 nha e' },
    { k: 'cap', e: 'Chốt đơn', t: 'Tự tổng hợp đơn: size, quà tặng, SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ chị kiểm tra lại đơn giúp em nha:\n– Nệm cao su non 5 vùng 1m6 x 2m, dày 15cm\n– Tặng 2 gối cao su non\n– Tổng: **3.490.000đ** (miễn phí giao)\n– Người nhận: Trâm · 0908517362\n– 27 đường số 9, KDC Tân Hòa, Đông Hòa, Dĩ An\nChị xác nhận giúp em đơn này nha.', nut: 'Quản lý đơn hàng', d: 3400 },
    { k: 'cap', e: 'Xong', t: 'Khách chỉ cần nói "Ok e"' },
    { k: 'kh', text: 'Ok e' },
    { k: 'ai', text: 'Dạ em lên đơn, giao nệm cho chị ngày mai nha 🛏️', d: 1300 },

    // Chốt đơn → màn hình phụ: gửi đơn hàng cho Facebook → đơn tự động → nhân viên xác nhận
    { k: 'cap', e: 'Gửi đơn về Facebook', t: 'Sự kiện mua hàng gửi ngay lên Facebook', s: 'Quảng cáo tối ưu theo đơn thật' },
    { k: 'panel', v: 'capi', d: 900 },
    { k: 'p', a: 'flow', d: 1500 }, { k: 'p', a: 'event', d: 1300 }, { k: 'p', a: 'ok', d: 2200 },
    { k: 'cap', e: 'Đơn hàng tự động', t: 'Đơn tự lên trên Preny. Cửa hàng chỉ việc giao.' },
    { k: 'panel', v: 'don', d: 900 },
    { k: 'p', a: 'f1', d: 550 }, { k: 'p', a: 'f2', d: 550 }, { k: 'p', a: 'f3', d: 550 }, { k: 'p', a: 'f4', d: 550 },
    { k: 'p', a: 'cho', d: 900 },
    { k: 'cap', e: 'Nhân viên xác nhận', t: 'Báo nhân viên: bấm 1 lần là đơn lên', s: 'Người thật kiểm tra lại trước khi giao' },
    { k: 'p', a: 'nv', d: 1700 }, { k: 'p', a: 'bam', d: 1100 },
    { k: 'p', a: 'xn', d: 3000 },
    { k: 'panel', v: null, d: 500 },

    // Mua xong: tin cảm ơn kèm 5 sản phẩm đang giảm giá
    { k: 'cap', e: 'Bán thêm sau mua', t: 'Cảm ơn khách, gửi kèm 5 sản phẩm đang giảm giá', s: 'Khách bấm "Mua ngay" ngay trong Messenger' },
    { k: 'ai', text: 'Dạ cảm ơn chị Trâm nha 💛 Đơn đã được xác nhận, bên em giao nệm ngày mai. Cửa hàng đang giảm giá mấy món khách hay lấy kèm nệm, chị xem thử nha:' },
    { k: 'car', sp: [
        { img: 'ga', ten: 'Ga chống thấm 1m6 x 2m', gia: '297.000đ', cu: '330.000đ', giam: '-10%' },
        { img: 'chan-ga', ten: 'Bộ chăn ga cotton 1m6', gia: '891.000đ', cu: '990.000đ', giam: '-10%' },
        { img: 'goi-2', ten: 'Gối cao su non (cặp)', gia: '405.000đ', cu: '450.000đ', giam: '-10%' },
        { img: 'nem-mat', ten: 'Topper làm mềm mặt nệm 1m6', gia: '1.071.000đ', cu: '1.190.000đ', giam: '-10%' },
        { img: 'goi', ten: 'Gối ôm cao su non', gia: '252.000đ', cu: '280.000đ', giam: '-10%' },
      ], d: 5200 },

    // Chăm sóc sau bán qua Zalo
    { k: 'zalo', gio: '19:30', ngay: 'T2 30/11/2026', chip: '2 đêm sau khi nhận · khách đã nằm thử', d: 1500 },
    { k: 'cap', e: 'Chăm sóc sau bán qua Zalo', t: 'Khách nhận nệm: AI hỏi nằm mấy đêm thấy sao', s: 'Dặn cách xoay nệm, xin đánh giá trong tin Zalo OA' },
    { k: 'zns', zns: {
        img: 'ngu-day', tieuDe: 'Chị Trâm ơi, nằm nệm mới mấy đêm thấy sao ạ?',
        noiDung: 'Nệm Thanh An cảm ơn chị đã nhận đơn **#TA26127** (nệm 1m6 x 2m, dày 15cm). Chị nhớ xoay đầu nệm 3 tháng/lần để nệm êm đều, bền lâu nha!',
        nut: 'Đánh giá sản phẩm',
      }, d: 4200 },
    { k: 'cap', e: 'ZBS · Sản phẩm bán chạy', t: '1 tuần sau: gửi sản phẩm bán chạy qua Zalo', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'T2 07/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['goi-2', 'ga', 'nem-mat', 'chan-ga'], nhan: 'TOP BÁN CHẠY TUẦN NÀY', mau: '#F97316',
        tieuDe: '🔥 Top bán chạy tuần này tại Nệm Thanh An',
        noiDung: '**Gối cao su non**, **ga chống thấm** và **topper làm mềm mặt nệm** đang được khách chọn nhiều nhất tuần qua.',
        nut: 'Xem ngay',
      }, d: 4600 },
    { k: 'cap', e: 'ZBS · Chăn ga đón Tết', t: '1 tuần sau nữa: ưu đãi chăn ga đón Tết', s: 'Kéo khách quay lại mua tiếp, không cần khách nhắn' },
    { k: 'zstamp', gio: '19:30', ngay: 'T2 14/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['phong-ngu-2', 'chan-ga', 'giuong-cua-so', 'goi'], nhan: 'CHĂN GA ĐÓN TẾT',
        tieuDe: 'Thay chăn ga mới đón Tết, giảm 15%',
        noiDung: 'Bộ chăn ga cotton đủ size 1m2 – 1m8 giảm **15%** cho khách đã mua nệm, giao miễn phí. Áp dụng đến hết 20/01/2027.',
        nut: 'Xem ưu đãi',
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
    tag: { av: 'NT', ten: 'Lê Ngọc Trâm', sub: 'Messenger · bình luận quảng cáo Nệm cao su non 5 vùng',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#nemcaosunon', 'qt hot'], ['#nem1m6', 'qt hot'], ['#nemgiare', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#1m6x2m_15cm', 'qt']]]],
      im: 'Khách im từ 14:50, sau khi được xin SĐT, địa chỉ',
      rule: { lb: 'Bám đuổi theo thẻ #nem1m6', tieuDe: '3 tin ngắn về đúng size nệm khách đã chọn',
              dong: [['15 phút', 'Đã giữ nệm 1m6 x 2m, dày 15cm'], ['3 tiếng', 'Gửi ảnh thật nệm 1m6'], ['20 tiếng', 'Gửi SĐT trước 12h, tặng 2 gối']] },
      reply: 'Khách gửi SĐT, địa chỉ · dừng bám đuổi' },
    capi: { tieuDe: 'Gửi đơn hàng cho Facebook', event: 'Purchase', nhan: 'SỰ KIỆN MUA HÀNG', giaTri: '3.490.000đ', pk: 'Purchase · 3.490.000đ',
      dong: [['Đơn hàng', '#TA26127 · nệm 1m6 x 2m, dày 15cm'], ['Nguồn khách', 'Bình luận quảng cáo Nệm cao su non → Messenger'], ['Giá trị', '3.490.000 VND'], ['Event ID', 'TA26127-PURCHASE (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện mua hàng' },
  },
  donHang: {
    ma: '#TA26127', sp: 'Nệm cao su non 5 vùng', bien: '1m6 x 2m · dày 15cm · x1 · tặng 2 gối', img: 'nem', gia: '3.490.000đ',
    nv: { ten: 'Nhân viên Phúc', av: 'NP' },
    ten: 'Lê Ngọc Trâm', sdt: '0908517362', dc: '27 đường số 9, KDC Tân Hòa, P. Đông Hòa, TP. Dĩ An, Bình Dương', gio: '11:04 · 27/11/2026',
  },
};
