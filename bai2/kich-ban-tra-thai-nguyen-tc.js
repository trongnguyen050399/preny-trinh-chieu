/* Kịch bản video demo NGANG 16:9: TRÀ THÁI NGUYÊN (trà gói), nhóm thương mại điện tử, làm 26/11/2026 theo đồng nghiệp: "Trà gói thái nguyên".
   Mạch tmdt (mẫu nệm / trầm hương): 1 cảnh. Quảng cáo trà búp Tân Cương, 2 bình luận (hỏi giá gói 500g, hỏi hộp quà biếu Tết)
   → trả lời cả 2 "Mình check ib shop nha" → AI nhắn trước: giá gói 200g / 500g + đúng ảnh quảng cáo, hỏi uống ở nhà hay biếu, lấy mấy gói
   → khách hỏi trà búp với móc câu khác nhau → AI giải thích ngắn → khách uống đậm, lấy 2 gói búp 500g → xin SĐT + địa chỉ
   → khách im → gắn thẻ + bám đuổi 3 tin → khách gửi SĐT, địa chỉ nhà mẹ nhưng thiếu tên người nhận → AI hỏi lại → tóm tắt đơn
   → Purchase → đơn tự động → nhân viên xác nhận → 5 sản phẩm giảm giá → Zalo 3 tin → tổng kết → logo.
   AI chỉ báo giá, gửi ảnh, hỏi số lượng, xin SĐT + địa chỉ. Không hứa công dụng sức khỏe (giảm cân, ngủ ngon...).
   Không có tin báo giao hàng. "Tân Cương" là tên vùng chè, không phải tên shop.
   Tên shop, giá, khách, SĐT, địa chỉ là dữ liệu minh họa. Ảnh: Unsplash (ảnh thật, không phải hàng của shop). */
window.VN_KB = {
  ten: 'Trà Thái Nguyên video ngang',
  ketSub: 'Để AI tư vấn và chốt đơn trà cho bạn 24/7',
  shop: { ten: 'Chè Đồi Xanh Thái Nguyên', av: 'ĐX', mau: '#15803D', sub: 'Thường trả lời ngay' },
  anh: {
    'tra': '../assets/img/u/1715016811010-e67e6f3d440c_800x800.jpg',       // trà búp khô quanh chén nước trà (ảnh quảng cáo)
    'tra-bup': '../assets/img/u/1715016808399-aa26d9fc71f9_800x800.jpg',   // 3 chén trà búp khô
    'moc-cau': '../assets/img/u/1766482280244-afd07a7028fc_800x800.jpg',   // cánh trà xoăn cận cảnh
    'non-tom': '../assets/img/u/1674141833226-9a28eb5935b4_800x800.jpg',   // trà viên xoăn nhỏ
    'la-tuoi': '../assets/img/u/1641997829221-a7d363722a1b_800x800.jpg',   // nong búp chè tươi
    'doi-che': '../assets/img/u/1729524462636-80fa3d6b5d14_800x800.jpg',   // đồi chè trong sương
    'hai-che': '../assets/img/u/1764034372439-cf34b61ea0b9_800x800.jpg',   // 2 người hái chè trên đồi
    'hai-che-2': '../assets/img/u/1775573348847-4bd5d91b709e_800x800.jpg', // người hái chè giữa đồi
    'khay-tra': '../assets/img/u/1470162656305-6f429ba817bf_800x800.jpg',  // ống trà, ấm, 2 chén trên khay gỗ
    'am-tra': '../assets/img/u/1532136868905-8094ef8ef5f2_800x800.jpg',    // ấm đất nâu, chén trắng
    'chen-tra': '../assets/img/u/1546852199-2d8e8c4aaada_800x800.jpg',     // chén khải lá trà trên khay
    'pha-tra': '../assets/img/u/1652780080440-9067470afc94_800x800.jpg',   // pha trà ấm thủy tinh
    'rot-tra': '../assets/img/u/1782094673090-efde6c10cb91_800x800.jpg',   // rót trà vàng ra chén
    'tui-loc': '../assets/img/u/1546648596-d8318bfcf491_800x800.jpg',      // túi lọc trà
    'goi-giay': '../assets/img/u/1695245503558-5cdb37f49092_800x800.jpg',  // túi giấy kraft đựng trà
    'khay-go': '../assets/img/u/1577016029703-cc22a7c0c28c_800x800.jpg',   // khay trà gỗ, ấm, chén
    'ban-tra': '../assets/img/u/1773394473042-0544a86abe61_800x800.jpg',   // bàn trà cạnh cửa sổ
    'tra-dao': '../assets/img/u/1531970227416-f0cddeb1f748_800x800.jpg',   // bàn trà nhiều chén
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= BÌNH LUẬN QUẢNG CÁO → INBOX (cảnh duy nhất) ================= */
    { k: 'canh', nhan: 'Bình luận quảng cáo → Inbox', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'tra', nhan: 'MESSENGER', tieuDe: 'Trà búp Tân Cương · sao tay · chỉ từ 180K', nut: 'Gửi tin nhắn',
        text: 'TRÀ BÚP TÂN CƯƠNG THÁI NGUYÊN 🍃 Sao tay theo mẻ nhỏ, nước xanh vàng, chát dịu, hậu ngọt. Gói 200g chỉ từ 180K, có hộp quà biếu Tết. Giao toàn quốc, kiểm tra hàng rồi mới thanh toán. #trathainguyen #trabup #chetancuong',
      }, d: 1500 },
    { k: 'cap', e: 'Bình luận hỏi giá', t: 'Khách hỏi giá gói 500g dưới quảng cáo', s: 'Một khách khác hỏi có hộp quà biếu Tết không' },
    { k: 'cmt', i: 0, ten: 'Thanh Mai', av: 'TM', text: 'Trà búp gói 500g giá sao shop?' },
    { k: 'cmt', i: 1, ten: 'Đức Thắng', av: 'ĐT', text: 'Có hộp quà biếu Tết ko shop?' },
    { k: 'cap', e: 'Trả lời cả 2 bình luận', t: 'Trả lời ngắn gọn, mời khách vào inbox', s: 'Báo giá chi tiết trong tin nhắn riêng' },
    { k: 'rep', i: 0, text: 'Mình check ib shop nha 💬' },
    { k: 'rep', i: 1, text: 'Mình check ib shop nha 💬' },
    { k: 'ms', ref: { loai: 'cmt', img: 'tra', dong1: 'Bạn đã bình luận về quảng cáo của Chè Đồi Xanh Thái Nguyên', dong2: '"Trà búp gói 500g giá sao shop?"' }, gio: '14:47' },
    { k: 'cap', e: 'AI nhắn trước', t: 'Inbox trước: giá 2 cỡ gói, gửi đúng ảnh quảng cáo', s: 'Rồi hỏi uống ở nhà hay biếu, lấy mấy gói' },
    { k: 'ai', text: 'Dạ chào chị Mai, trà búp Tân Cương bên em gói **200g 180.000đ**, gói **500g 420.000đ** ạ.' },
    { k: 'ai', img: 'tra' },
    { k: 'ai', text: 'Chị mua **uống ở nhà hay biếu** ạ, và chị định lấy **mấy gói** ạ?' },
    { k: 'cap', e: 'Khách hỏi thêm', t: 'Khách hỏi 2 loại trà khác nhau chỗ nào', s: 'AI trả lời ngắn, đúng dữ liệu của shop' },
    { k: 'kh', text: 'uống ở nhà e. trà búp với móc câu khác nhau sao?' },
    { k: 'ai', text: 'Dạ **móc câu** búp nhỏ, cánh xoăn, nước xanh, thơm cốm, vị dịu, gói 500g **650.000đ**. **Trà búp** cánh to hơn, vị **đậm, chát hơn**, hợp uống hằng ngày ạ.' },
    { k: 'kh', text: 'nhà c uống đậm. lấy 2 gói búp 500g nha' },
    { k: 'cap', e: 'Khách chọn xong', t: 'AI chốt đúng loại, đúng số gói khách nói', s: 'Rồi xin SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ em ghi **2 gói trà búp 500g**, **840.000đ**, giao miễn phí, chị kiểm tra hàng rồi mới thanh toán. Chị gửi em **SĐT và địa chỉ** để em lên đơn nha 🍃' },

    // Khách im sau khi được xin SĐT, địa chỉ → màn hình phụ: gắn thẻ (3 hashtag quảng cáo + thẻ từ cuộc chat), bám đuổi 3 tin
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Chưa gửi SĐT: Preny tự gắn thẻ khách', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi theo thẻ', t: '3 tin ngắn: 15 phút, 3 tiếng, 20 tiếng', s: 'Chỉ nói về đúng 2 gói trà khách đã chọn' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T5 26/11/2026', d: 700 },
    { k: 'ai', text: 'Chị Mai ơi, em giữ cho chị **2 gói trà búp 500g** lô mới sao tuần này rồi ạ. Chị gửi em SĐT, địa chỉ để em gửi đi sớm nha 😊' },
    { k: 'p', a: 'r1', d: 900 },
    { k: 'time', nhan: '3 tiếng sau', gio: '17:49', ngay: 'T5 26/11/2026', d: 700 },
    { k: 'ai', text: 'Em gửi chị ảnh thật đồi chè và búp chè bên em vừa hái nha 🍃 Búp hái sáng, sao tay trong ngày nên giữ được vị đậm.' },
    { k: 'ai', imgs: ['doi-che', 'hai-che', 'la-tuoi'] },
    { k: 'p', a: 'r2', d: 900 },
    { k: 'time', nhan: '20 tiếng sau', gio: '10:49', ngay: 'T6 27/11/2026', d: 700 },
    { k: 'ai', text: 'Chị gửi **SĐT và địa chỉ** trước 12h là em gửi trà ngay hôm nay, **tặng chị 1 gói trà nõn tôm 100g** uống thử ạ 🎁' },
    { k: 'p', a: 'r3', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 3, khách gửi SĐT, địa chỉ', s: 'AI kiểm tra thông tin trước khi lên đơn' },
    { k: 'kh', text: '0986214735, gửi giúp c về nhà mẹ c: 45 ngõ 112 Định Công, Hoàng Mai, HN' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'cap', e: 'Kiểm tra dữ liệu', t: 'Gửi nhà mẹ: AI hỏi tên người nhận trước khi lên đơn' },
    { k: 'ai', text: 'Dạ chị cho em xin **tên người nhận** ở nhà mẹ để shipper gọi đúng người nha 😊' },
    { k: 'kh', text: 'bà Lan nha e' },
    { k: 'cap', e: 'Chốt đơn', t: 'Tự tổng hợp đơn: loại trà, quà tặng, người nhận, địa chỉ' },
    { k: 'ai', text: 'Dạ chị kiểm tra lại đơn giúp em nha:\n– Trà búp Tân Cương gói 500g x 2\n– Tặng 1 gói trà nõn tôm 100g\n– Tổng: **840.000đ** (miễn phí giao)\n– Người nhận: bà Lan · 0986214735\n– 45 ngõ 112 Định Công, Hoàng Mai, Hà Nội\nChị xác nhận giúp em đơn này nha.', nut: 'Quản lý đơn hàng', d: 3400 },
    { k: 'cap', e: 'Xong', t: 'Khách chỉ cần nói "Ok e"' },
    { k: 'kh', text: 'Ok e' },
    { k: 'ai', text: 'Dạ em lên đơn, gửi trà về cho bà Lan hôm nay nha 🍃', d: 1300 },

    // Chốt đơn → màn hình phụ: gửi đơn hàng cho Facebook → đơn tự động → nhân viên xác nhận
    { k: 'cap', e: 'Gửi đơn về Facebook', t: 'Sự kiện mua hàng gửi ngay lên Facebook', s: 'Quảng cáo tối ưu theo đơn thật' },
    { k: 'panel', v: 'capi', d: 900 },
    { k: 'p', a: 'flow', d: 1500 }, { k: 'p', a: 'event', d: 1300 }, { k: 'p', a: 'ok', d: 2200 },
    { k: 'cap', e: 'Đơn hàng tự động', t: 'Đơn tự lên trên Preny. Shop chỉ việc gửi hàng.' },
    { k: 'panel', v: 'don', d: 900 },
    { k: 'p', a: 'f1', d: 550 }, { k: 'p', a: 'f2', d: 550 }, { k: 'p', a: 'f3', d: 550 }, { k: 'p', a: 'f4', d: 550 },
    { k: 'p', a: 'cho', d: 900 },
    { k: 'cap', e: 'Nhân viên xác nhận', t: 'Báo nhân viên: bấm 1 lần là đơn lên', s: 'Người thật kiểm tra lại trước khi gửi' },
    { k: 'p', a: 'nv', d: 1700 }, { k: 'p', a: 'bam', d: 1100 },
    { k: 'p', a: 'xn', d: 3000 },
    { k: 'panel', v: null, d: 500 },

    // Mua xong: tin cảm ơn kèm 5 sản phẩm đang giảm giá
    { k: 'cap', e: 'Bán thêm sau mua', t: 'Cảm ơn khách, gửi kèm 5 sản phẩm đang giảm giá', s: 'Khách bấm "Mua ngay" ngay trong Messenger' },
    { k: 'ai', text: 'Dạ cảm ơn chị Mai nha 💚 Đơn đã được xác nhận, bên em gửi trà hôm nay. Shop đang giảm giá mấy món khách hay lấy thêm, chị xem thử nha:' },
    { k: 'car', sp: [
        { img: 'moc-cau', ten: 'Trà móc câu gói 500g', gia: '585.000đ', cu: '650.000đ', giam: '-10%' },
        { img: 'non-tom', ten: 'Trà nõn tôm gói 200g', gia: '342.000đ', cu: '380.000đ', giam: '-10%' },
        { img: 'tui-loc', ten: 'Trà xanh túi lọc (50 túi)', gia: '108.000đ', cu: '120.000đ', giam: '-10%' },
        { img: 'khay-tra', ten: 'Hộp quà trà Tết 2 ống', gia: '765.000đ', cu: '850.000đ', giam: '-10%' },
        { img: 'am-tra', ten: 'Bộ ấm chén đất nung', gia: '387.000đ', cu: '430.000đ', giam: '-10%' },
      ], d: 5200 },

    // Chăm sóc sau bán qua Zalo
    { k: 'zalo', gio: '19:30', ngay: 'T2 30/11/2026', chip: '3 ngày sau khi nhận · khách đã pha thử', d: 1500 },
    { k: 'cap', e: 'Chăm sóc sau bán qua Zalo', t: 'Khách nhận trà: AI hỏi pha thấy vị sao', s: 'Dặn cách pha, bảo quản, xin đánh giá trong tin Zalo OA' },
    { k: 'zns', zns: {
        img: 'rot-tra', tieuDe: 'Chị Mai ơi, trà pha thấy vị sao ạ?',
        noiDung: 'Chè Đồi Xanh cảm ơn chị đã nhận đơn **#DX26127**. Chị lưu ý giúp em vài điều để trà giữ vị nha:',
        dong: ['Pha nước **80–85°C**, tráng trà 1 lần trước khi pha', 'Buộc kín miệng túi, để nơi **khô ráo, thoáng mát**', 'Không để trà gần đồ có **mùi mạnh**'],
        nut: 'Đánh giá sản phẩm',
      }, d: 5000 },
    { k: 'cap', e: 'ZBS · Sản phẩm bán chạy', t: '1 tuần sau: gửi sản phẩm bán chạy qua Zalo', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'T2 07/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['moc-cau', 'non-tom', 'tui-loc', 'goi-giay'], nhan: 'TOP BÁN CHẠY TUẦN NÀY', mau: '#F97316',
        tieuDe: '🔥 Top bán chạy tuần này tại Chè Đồi Xanh',
        noiDung: '**Trà móc câu**, **trà nõn tôm** và **trà xanh túi lọc** đang được khách chọn nhiều nhất tuần qua.',
        nut: 'Xem ngay',
      }, d: 4600 },
    { k: 'cap', e: 'ZBS · Hộp quà trà Tết', t: '1 tuần sau nữa: ưu đãi hộp quà trà biếu Tết', s: 'Kéo khách quay lại mua tiếp, không cần khách nhắn' },
    { k: 'zstamp', gio: '19:30', ngay: 'T2 14/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['khay-tra', 'ban-tra', 'khay-go', 'doi-che'], nhan: 'HỘP QUÀ TRÀ ĐÓN TẾT',
        tieuDe: 'Hộp quà trà biếu Tết giảm 15%',
        noiDung: 'Hộp quà trà búp, móc câu đóng hộp sẵn, kèm túi xách và thiệp, giảm **15%** cho khách đã mua. Áp dụng đến hết 20/01/2027.',
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
    tag: { av: 'TM', ten: 'Nguyễn Thanh Mai', sub: 'Messenger · bình luận quảng cáo Trà búp Tân Cương',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#trathainguyen', 'qt hot'], ['#trabup', 'qt hot'], ['#chetancuong', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#2GoiBup500g', 'qt']]]],
      im: 'Khách im từ 14:50, sau khi được xin SĐT, địa chỉ',
      rule: { lb: 'Bám đuổi theo thẻ #trabup', tieuDe: '3 tin ngắn về đúng 2 gói trà khách đã chọn',
              dong: [['15 phút', 'Đã giữ 2 gói trà búp 500g lô mới'], ['3 tiếng', 'Gửi ảnh thật đồi chè, búp chè'], ['20 tiếng', 'Gửi SĐT trước 12h, tặng trà nõn tôm']] },
      reply: 'Khách gửi SĐT, địa chỉ · dừng bám đuổi' },
    capi: { tieuDe: 'Gửi đơn hàng cho Facebook', event: 'Purchase', nhan: 'SỰ KIỆN MUA HÀNG', giaTri: '840.000đ', pk: 'Purchase · 840.000đ',
      dong: [['Đơn hàng', '#DX26127 · 2 gói trà búp 500g'], ['Nguồn khách', 'Bình luận quảng cáo Trà búp Tân Cương → Messenger'], ['Giá trị', '840.000 VND'], ['Event ID', 'DX26127-PURCHASE (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện mua hàng' },
  },
  donHang: {
    ma: '#DX26127', sp: 'Trà búp Tân Cương', bien: 'Gói 500g · x2 · tặng 1 gói nõn tôm 100g', img: 'tra', gia: '840.000đ',
    nv: { ten: 'Nhân viên Hà', av: 'NH' },
    ten: 'Bà Lan (người nhận) · đặt bởi Thanh Mai', sdt: '0986214735', dc: '45 ngõ 112 Định Công, P. Định Công, Hoàng Mai, Hà Nội', gio: '11:04 · 27/11/2026',
  },
};
