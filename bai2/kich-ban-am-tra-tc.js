/* Kịch bản video demo NGANG 16:9: ẤM TRÀ, BỘ ẤM CHÉN (ấm tử sa), nhóm thương mại điện tử. Làm 26/11/2026 theo đồng nghiệp:
   "thêm kịch bản ấm trà nha (tư vấn, hỏi thông tin, báo giá và xin sđt và địa chỉ để chốt đơn)" (trang tham khảo: một phòng trà ở Hà Nội bán ấm tử sa).
   Mẫu TMĐT (kich-ban-nem-tc.js): 1 cảnh. Quảng cáo ấm tử sa Thạch Biều, 3 hashtag → 2 bình luận (hỏi giá, hỏi bộ ấm chén biếu)
   → trả lời "Mình check ib shop nha" → AI nhắn trước: giá từ + đúng ảnh quảng cáo + hỏi mấy người uống, pha trà gì
   → AI gửi bảng dung tích của shop (150ml / 250ml), khách tự chọn 250ml → báo giá, tặng 4 chén → xin SĐT + địa chỉ
   → khách im → gắn thẻ + bám đuổi 3 tin (15 phút, 3 tiếng, 20 tiếng) → khách gửi địa chỉ nhà bố nhưng thiếu tên, SĐT người nhận
   → AI hỏi lại → tóm tắt đơn → Purchase → đơn tự động → nhân viên xác nhận → 5 sản phẩm giảm giá → Zalo 3 tin (khai ấm, dưỡng ấm)
   → tổng kết → logo.
   AI chỉ báo giá theo bảng của shop, gửi ảnh, hỏi số lượng/dung tích, xin SĐT + địa chỉ; khách tự chọn dung tích.
   Không hứa công dụng sức khỏe của ấm hay trà. Không có tin báo giao hàng.
   Tên cửa hàng (Ấm Trà Tĩnh Tâm), giá, khách, SĐT, địa chỉ: dữ liệu minh họa. Ảnh: Unsplash (ảnh thật, không phải hàng của shop). */
window.VN_KB = {
  ten: 'Ấm trà video ngang',
  ketSub: 'Để AI tư vấn, báo giá và chốt đơn ấm trà cho bạn',
  shop: { ten: 'Ấm Trà Tĩnh Tâm', av: 'TT', mau: '#7C2D12', sub: 'Thường trả lời ngay' },
  anh: {
    'am': '../assets/img/u/1680210963123-cc25aafa7a47_800x800.jpg',        // ấm tử sa dáng Thạch Biều trên bàn gỗ (ảnh quảng cáo)
    'am-do': '../assets/img/u/1565550967973-727d4372df7c_800x800.jpg',     // ấm tử sa đất đỏ cam
    'am-khay': '../assets/img/u/1629440400842-9108c0ccf336_800x800.jpg',   // ấm tử sa đỏ trên khay gỗ
    'am-toi': '../assets/img/u/1629440404898-4a527437484f_800x800.jpg',    // ấm tử sa đỏ, nền tối
    'am-nau': '../assets/img/u/1562996069-90bc7c450c58_800x800.jpg',       // ấm tử sa nâu cận cảnh
    'bo-suu-tap': '../assets/img/u/1607644962019-09feffe09624_800x800.jpg', // 3 ấm tử sa trên bàn gỗ
    'vong-am': '../assets/img/u/1793502618440-25a5214d251d_800x800.jpg',   // nhiều ấm tử sa xếp vòng
    'trung-bay': '../assets/img/u/1765808270869-855ab9b7f5c4_800x800.jpg', // ấm tử sa trưng bày trên hộp
    'bo-am-chen': '../assets/img/u/1783915817252-1d81ed28ed9d_800x800.jpg', // ấm nâu với chén men xanh
    'ban-tra': '../assets/img/u/1470162656305-6f429ba817bf_800x800.jpg',   // khay tre, ấm đen, 2 chén trà
    'khay': '../assets/img/u/1577016029703-cc22a7c0c28c_800x800.jpg',      // khay trà tre có ấm, chén
    'pha-tra': '../assets/img/u/1531969179221-3946e6b5a5e7_800x800.jpg',   // rót trà vào chén, hơi nóng
    'chen': '../assets/img/u/1631682477691-9021a9218860_800x800.jpg',      // 2 chén trà trên gỗ
    'chen-trang': '../assets/img/u/1610701596007-11502861dcfa_800x800.jpg', // chén gốm men trắng
    'chen-khai': '../assets/img/u/1546852199-2d8e8c4aaada_800x800.jpg',    // chén khải men ngọc trên khay
    'la-tra': '../assets/img/u/1760074057726-53a88633cf67_800x800.jpg',    // lá trà khô cận cảnh
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= BÌNH LUẬN QUẢNG CÁO → INBOX (cảnh duy nhất) ================= */
    { k: 'canh', nhan: 'Bình luận quảng cáo → Inbox', gio: '20:16' },
    { k: 'ad', ad: {
        img: 'am', nhan: 'MESSENGER', tieuDe: 'Ấm tử sa Thạch Biều · tặng kèm chén', nut: 'Gửi tin nhắn',
        text: 'ẤM TỬ SA THẠCH BIỀU 🫖 Làm thủ công, dung tích 150ml và 250ml, chỉ từ 1.290K. Đặt trong tuần tặng kèm 4 chén, giao toàn quốc, kiểm tra ấm rồi mới thanh toán. #amtusa #thachbieu #amtra',
      }, d: 1500 },
    { k: 'cap', e: 'Bình luận hỏi giá', t: 'Khách hỏi giá ấm Thạch Biều dưới quảng cáo', s: 'Một khách khác hỏi bộ ấm chén làm quà biếu' },
    { k: 'cmt', i: 0, ten: 'Minh Quân', av: 'MQ', text: 'Ấm Thạch Biều giá bao nhiêu shop?' },
    { k: 'cmt', i: 1, ten: 'Thu Trang', av: 'TT', text: 'Có bộ ấm chén làm quà biếu Tết không shop?' },
    { k: 'cap', e: 'Trả lời cả 2 bình luận', t: 'Trả lời ngắn gọn, mời khách vào inbox', s: 'Báo giá chi tiết trong tin nhắn riêng' },
    { k: 'rep', i: 0, text: 'Mình check ib shop nha 💬' },
    { k: 'rep', i: 1, text: 'Mình check ib shop nha 💬' },
    { k: 'ms', ref: { loai: 'cmt', img: 'am', dong1: 'Bạn đã bình luận về quảng cáo của Ấm Trà Tĩnh Tâm', dong2: '"Ấm Thạch Biều giá bao nhiêu shop?"' }, gio: '20:17' },
    { k: 'cap', e: 'AI nhắn trước', t: 'Inbox trước: giá từ, gửi đúng ảnh quảng cáo', s: 'Rồi hỏi nhà mấy người uống, hay pha trà gì' },
    { k: 'ai', text: 'Dạ chào anh Quân, ấm tử sa Thạch Biều bên em giá **từ 1.290.000đ**, tùy dung tích ạ.' },
    { k: 'ai', img: 'am' },
    { k: 'ai', text: 'Nhà mình thường **mấy người uống** và hay pha **trà gì** ạ? Em gửi anh dung tích cho dễ chọn.' },
    { k: 'cap', e: 'Khách kể nhu cầu', t: 'Khách nói số người uống và loại trà hay pha', s: 'AI gửi bảng dung tích của shop, khách tự chọn' },
    { k: 'kh', text: 'nhà a 4 người, hay pha trà Thái. có mấy loại e?' },
    { k: 'ai', text: 'Dạ ấm Thạch Biều bên em có 2 cỡ ạ:\n– **150ml** (2–3 chén nhỏ): **1.290.000đ**\n– **250ml** (4–5 chén nhỏ): **1.690.000đ**\nCả 2 cỡ pha trà Thái hay ô long đều hợp ạ.', d: 2800 },
    { k: 'kh', text: 'lấy a loại 250 nha. có kèm chén ko e' },
    { k: 'cap', e: 'Chốt đúng cỡ khách chọn', t: 'AI báo giá, quà tặng, xin SĐT và địa chỉ', s: 'Khách kiểm tra ấm rồi mới thanh toán' },
    { k: 'ai', text: 'Dạ có ạ. Em ghi **ấm Thạch Biều 250ml**, **1.690.000đ**, tặng kèm **4 chén tử sa**, giao miễn phí, anh kiểm tra ấm rồi mới thanh toán. Anh gửi em **SĐT và địa chỉ** để em lên đơn nha 🫖', d: 3000 },

    // Khách im sau khi được xin SĐT, địa chỉ → màn hình phụ: gắn thẻ (3 hashtag quảng cáo + thẻ từ cuộc chat), bám đuổi 3 tin
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Chưa gửi SĐT: Preny tự gắn thẻ khách', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi theo thẻ', t: '3 tin ngắn: 15 phút, 3 tiếng, 20 tiếng', s: 'Chỉ nói về đúng ấm 250ml khách đã chọn' },
    { k: 'time', nhan: '15 phút sau', gio: '20:35', ngay: 'T5 26/11/2026', d: 700 },
    { k: 'ai', text: 'Anh Quân ơi, em giữ cho anh **ấm Thạch Biều 250ml** kèm 4 chén rồi ạ. Anh gửi em SĐT, địa chỉ để em đóng hộp giao nha 😊' },
    { k: 'p', a: 'r1', d: 900 },
    { k: 'time', nhan: '3 tiếng sau', gio: '23:20', ngay: 'T5 26/11/2026', d: 700 },
    { k: 'ai', text: 'Em gửi anh ảnh thật ấm tử sa bên em nha 🫖 Thân ấm mịn, nắp khít, rót nước ra đều, không nhỏ giọt.' },
    { k: 'ai', imgs: ['am-nau', 'bo-am-chen', 'chen'] },
    { k: 'p', a: 'r2', d: 900 },
    { k: 'time', nhan: '20 tiếng sau', gio: '16:20', ngay: 'T6 27/11/2026', d: 700 },
    { k: 'ai', text: 'Anh gửi **SĐT và địa chỉ** trong hôm nay là em giao ấm cho anh trong 2 ngày, **tặng thêm 1 khay trà tre** ạ 🎁' },
    { k: 'p', a: 'r3', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 3, khách gửi địa chỉ', s: 'AI kiểm tra thông tin trước khi lên đơn' },
    { k: 'kh', text: 'a biếu bố a. giao về 26 Lạch Tray, Ngô Quyền, Hải Phòng. sđt a 0987315246' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'cap', e: 'Kiểm tra dữ liệu', t: 'Giao cho người khác: AI xin tên, SĐT người nhận', s: 'Để shipper gọi đúng người ra nhận' },
    { k: 'ai', text: 'Dạ anh cho em xin **tên và SĐT của bác** để shipper gọi bác ra nhận hàng nha 😊' },
    { k: 'kh', text: 'bố a tên Tùng, 0912604873' },
    { k: 'cap', e: 'Chốt đơn', t: 'Tự tổng hợp đơn: cỡ ấm, quà tặng, người đặt, người nhận' },
    { k: 'ai', text: 'Dạ anh kiểm tra lại đơn giúp em nha:\n– Ấm tử sa Thạch Biều 250ml\n– Tặng 4 chén tử sa + 1 khay trà tre\n– Tổng: **1.690.000đ** (miễn phí giao)\n– Người đặt: Quân · 0987315246\n– Người nhận: bác Tùng · 0912604873\n– 26 Lạch Tray, Ngô Quyền, Hải Phòng\nAnh xác nhận giúp em đơn này nha.', nut: 'Quản lý đơn hàng', d: 3600 },
    { k: 'cap', e: 'Xong', t: 'Khách chỉ cần nói "Ok e"' },
    { k: 'kh', text: 'Ok e' },
    { k: 'ai', text: 'Dạ em lên đơn, gói hộp quà giao cho bác Tùng nha 🫖', d: 1300 },

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
    { k: 'ai', text: 'Dạ cảm ơn anh Quân nha 💛 Đơn đã được xác nhận, bên em gói hộp quà giao cho bác. Cửa hàng đang giảm giá mấy món khách hay lấy kèm ấm, anh xem thử nha:' },
    { k: 'car', sp: [
        { img: 'chen-khai', ten: 'Chén khải gốm men ngọc', gia: '315.000đ', cu: '350.000đ', giam: '-10%' },
        { img: 'khay', ten: 'Khay trà tre có ngăn thoát nước', gia: '531.000đ', cu: '590.000đ', giam: '-10%' },
        { img: 'chen-trang', ten: 'Bộ 6 chén gốm men trắng', gia: '252.000đ', cu: '280.000đ', giam: '-10%' },
        { img: 'la-tra', ten: 'Trà ô long hộp 200g', gia: '261.000đ', cu: '290.000đ', giam: '-10%' },
        { img: 'am-do', ten: 'Ấm tử sa đất đỏ 150ml', gia: '1.161.000đ', cu: '1.290.000đ', giam: '-10%' },
      ], d: 5200 },

    // Chăm sóc sau bán qua Zalo
    { k: 'zalo', gio: '19:30', ngay: 'T2 30/11/2026', chip: '2 ngày sau khi nhận ấm', d: 1500 },
    { k: 'cap', e: 'Chăm sóc sau bán qua Zalo', t: 'Khách nhận ấm: AI gửi cách khai ấm, dưỡng ấm', s: 'Xin đánh giá ngay trong tin Zalo OA' },
    { k: 'zns', zns: {
        img: 'pha-tra', tieuDe: 'Anh Quân ơi, bác Tùng dùng ấm mới thấy sao ạ?',
        noiDung: 'Ấm Trà Tĩnh Tâm cảm ơn anh đã đặt đơn **#TT26127**. Em gửi bác vài lưu ý cho ấm mới nha:',
        dong: ['**Khai ấm**: tráng nước sôi, ngâm trà 1 lần rồi đổ đi', 'Mỗi ấm nên pha **một loại trà** để giữ hương', 'Pha xong đổ bã, tráng nước nóng, **để khô tự nhiên**, không rửa xà phòng'],
        nut: 'Đánh giá sản phẩm',
      }, d: 5000 },
    { k: 'cap', e: 'ZBS · Sản phẩm bán chạy', t: '1 tuần sau: gửi sản phẩm bán chạy qua Zalo', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'T2 07/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['chen-khai', 'khay', 'la-tra', 'am-toi'], nhan: 'TOP BÁN CHẠY TUẦN NÀY', mau: '#F97316',
        tieuDe: '🔥 Top bán chạy tuần này tại Ấm Trà Tĩnh Tâm',
        noiDung: '**Chén khải men ngọc**, **khay trà tre** và **trà ô long hộp 200g** đang được khách chọn nhiều nhất tuần qua.',
        nut: 'Xem ngay',
      }, d: 4600 },
    { k: 'cap', e: 'ZBS · Quà biếu Tết', t: '1 tuần sau nữa: ưu đãi bộ ấm chén biếu Tết', s: 'Kéo khách quay lại mua tiếp, không cần khách nhắn' },
    { k: 'zstamp', gio: '19:30', ngay: 'T2 14/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['bo-am-chen', 'ban-tra', 'trung-bay', 'am-khay'], nhan: 'QUÀ BIẾU TẾT',
        tieuDe: 'Bộ ấm chén biếu Tết, giảm 15%',
        noiDung: 'Bộ ấm tử sa kèm chén, đóng hộp quà sẵn, giảm **15%** cho khách đã mua. Giao miễn phí toàn quốc, áp dụng đến hết 20/01/2027.',
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
    tag: { av: 'MQ', ten: 'Đỗ Minh Quân', sub: 'Messenger · bình luận quảng cáo Ấm tử sa Thạch Biều',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#amtusa', 'qt hot'], ['#thachbieu', 'qt hot'], ['#amtra', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#Am250ml', 'qt']]]],
      im: 'Khách im từ 20:20, sau khi được xin SĐT, địa chỉ',
      rule: { lb: 'Bám đuổi theo thẻ #thachbieu', tieuDe: '3 tin ngắn về đúng ấm khách đã chọn',
              dong: [['15 phút', 'Đã giữ ấm 250ml kèm 4 chén'], ['3 tiếng', 'Gửi ảnh thật ấm tử sa'], ['20 tiếng', 'Gửi SĐT hôm nay, tặng khay trà tre']] },
      reply: 'Khách gửi địa chỉ · dừng bám đuổi' },
    capi: { tieuDe: 'Gửi đơn hàng cho Facebook', event: 'Purchase', nhan: 'SỰ KIỆN MUA HÀNG', giaTri: '1.690.000đ', pk: 'Purchase · 1.690.000đ',
      dong: [['Đơn hàng', '#TT26127 · ấm Thạch Biều 250ml'], ['Nguồn khách', 'Bình luận quảng cáo Ấm tử sa Thạch Biều → Messenger'], ['Giá trị', '1.690.000 VND'], ['Event ID', 'TT26127-PURCHASE (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện mua hàng' },
  },
  donHang: {
    ma: '#TT26127', sp: 'Ấm tử sa Thạch Biều', bien: '250ml · x1 · tặng 4 chén + khay tre', img: 'am', gia: '1.690.000đ',
    nv: { ten: 'Nhân viên Hà', av: 'NH' },
    ten: 'Đỗ Văn Tùng (người nhận)', sdt: '0912604873', dc: '26 Lạch Tray, Q. Ngô Quyền, TP. Hải Phòng', gio: '16:34 · 27/11/2026',
  },
};
