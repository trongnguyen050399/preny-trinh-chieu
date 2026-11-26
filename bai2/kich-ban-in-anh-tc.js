/* Kịch bản video demo NGANG 16:9: XƯỞNG IN ẢNH (in ảnh, album, ảnh ép gỗ, tráng gương, khung, lịch), nhóm thương mại điện tử.
   Làm 26/11/2026 theo đồng nghiệp: "lĩnh vực in, cần AI trực tin nhắn page" (tham khảo trang xưởng in ảnh ở Thủ Đức:
   in ảnh cho cá nhân, freelance, studio; album, ảnh ép gỗ, tráng gương, khung; lịch 2027; giá từ vài nghìn đồng một tấm;
   chỉnh sáng miễn phí; kiểm tra hàng trước khi thanh toán).
   Mẫu trầm hương / nệm: 1 cảnh. Quảng cáo 3 hashtag → 2 bình luận (chị Vy hỏi giá 10x15, anh Tùng hỏi ảnh ép gỗ) → trả lời cả 2
   → AI nhắn trước: giá + đúng ảnh quảng cáo + hỏi size, bao nhiêu tấm → chị Vy tự nói 60 tấm 10x15, hỏi album → AI báo giá
   → khách lấy album → xin SĐT + địa chỉ → im → gắn thẻ + bám đuổi 3 tin → khách gửi SĐT, địa chỉ nhưng chưa gửi ảnh cần in
   → AI hỏi lại → tóm tắt đơn → Purchase → đơn tự động → nhân viên xác nhận → 5 sản phẩm giảm giá → Zalo 3 tin → tổng kết → logo.
   AI chỉ báo giá, gửi ảnh, hỏi số lượng, xin SĐT + địa chỉ; số tấm do khách tự nói. Không hứa "bền màu 100 năm".
   Không có tin báo giao hàng. Tên xưởng, giá, khách, SĐT, địa chỉ là dữ liệu minh họa. Ảnh: Unsplash (ảnh thật). */
window.VN_KB = {
  ten: 'Xưởng in ảnh video ngang',
  ketSub: 'Để AI trực tin nhắn, báo giá và chốt đơn in ảnh cho xưởng của bạn',
  shop: { ten: 'Xưởng In Ảnh Mộc Lam', av: 'ML', mau: '#BE185D', sub: 'Thường trả lời ngay' },
  anh: {
    'anh-in': '../assets/img/u/1494621622354-777dad9c18e4_800x800.jpg',      // tay cầm xấp ảnh in (ảnh quảng cáo)
    'anh-gia-dinh': '../assets/img/u/1548849929-a63fe18c9ee4_800x800.jpg',   // tấm in ghép 4 ảnh gia đình
    'hop-go': '../assets/img/u/1593888165089-77f017e3bbfd_800x800.jpg',      // hộp gỗ khắc tên đựng ảnh
    'anh-ban': '../assets/img/u/1595981234058-a9302fb97229_800x800.jpg',     // ảnh in trên bàn
    'lich': '../assets/img/u/1611988615248-5d4f0b9ac31e_800x800.jpg',        // lịch để bàn
    'album-den': '../assets/img/u/1645497265272-5c92210a18b8_800x800.jpg',   // album ảnh đen trắng
    'album': '../assets/img/u/1676883344224-2fa5de6025db_800x800.jpg',       // tay mở album ảnh
    'scrapbook': '../assets/img/u/1677658288115-28905b06b520_800x800.jpg',   // sổ ảnh dán, hoa tulip
    'anh-canvas': '../assets/img/u/1677658990649-b50fe2cedd68_800x800.jpg',  // ảnh gia đình treo tường phòng bé
    'phong-ngu': '../assets/img/u/1684741891614-c244b9df0613_800x800.jpg',   // tường ảnh trên giường
    'khung-anh': '../assets/img/u/1722173205783-d602329f0743_800x800.jpg',   // khung ảnh gỗ và ảnh cũ
    'khung-ke': '../assets/img/u/1790683969771-9fd9a3d27180_800x800.jpg',    // 2 ảnh khung kính trên kệ
  },
  beats: [
    { k: 'intro', d: 4200 },
    /* ================= BÌNH LUẬN QUẢNG CÁO → INBOX (cảnh duy nhất) ================= */
    { k: 'canh', nhan: 'Bình luận quảng cáo → Inbox', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'anh-in', nhan: 'MESSENGER', tieuDe: 'In ảnh sắc nét · chỉ từ 3.000đ/tấm', nut: 'Gửi tin nhắn',
        text: 'IN ẢNH SẮC NÉT, CHỈ TỪ 3.000Đ/TẤM 📸 Biến ảnh trong điện thoại thành ảnh in, album, ảnh ép gỗ, ảnh tráng gương. Chỉnh sáng miễn phí, giấy ảnh dày chống ẩm, kiểm tra hàng rồi mới thanh toán. #inanh #inanhonline #quatangynghia',
      }, d: 1500 },
    { k: 'cap', e: 'Bình luận hỏi giá', t: 'Khách hỏi giá in ảnh dưới quảng cáo', s: 'Một khách khác hỏi có làm ảnh ép gỗ không' },
    { k: 'cmt', i: 0, ten: 'Tường Vy', av: 'TV', text: 'In ảnh 10x15 bao nhiêu 1 tấm shop?' },
    { k: 'cmt', i: 1, ten: 'Thanh Tùng', av: 'TT', text: 'Có làm ảnh ép gỗ treo tường ko shop?' },
    { k: 'cap', e: 'Trả lời cả 2 bình luận', t: 'Trả lời ngắn gọn, mời khách vào inbox', s: 'Báo giá chi tiết trong tin nhắn riêng' },
    { k: 'rep', i: 0, text: 'Mình check ib shop nha 💬' },
    { k: 'rep', i: 1, text: 'Mình check ib shop nha 💬' },
    { k: 'ms', ref: { loai: 'cmt', img: 'anh-in', dong1: 'Bạn đã bình luận về quảng cáo của Xưởng In Ảnh Mộc Lam', dong2: '"In ảnh 10x15 bao nhiêu 1 tấm shop?"' }, gio: '14:47' },
    { k: 'cap', e: 'AI nhắn trước', t: 'Inbox trước: báo giá, gửi đúng ảnh quảng cáo', s: 'Rồi hỏi size, số tấm khách muốn in' },
    { k: 'ai', text: 'Dạ chào chị Vy, ảnh **10x15** bên em **3.000đ/tấm**, ảnh **13x18** **5.000đ/tấm**, đã chỉnh sáng miễn phí ạ.' },
    { k: 'ai', img: 'anh-in' },
    { k: 'ai', text: 'Chị muốn in **size nào** và khoảng **bao nhiêu tấm** ạ?' },
    { k: 'cap', e: 'Khách báo số tấm', t: 'Khách tự nói size, số tấm và hỏi thêm album', s: 'AI báo giá đúng số khách cần' },
    { k: 'kh', text: 'c in 60 tấm 10x15, ảnh con c từ lúc sinh tới 1 tuổi. có album đựng ko e?' },
    { k: 'ai', text: 'Dạ 60 tấm 10x15 là **180.000đ** ạ. Bên em có **album bìa cứng 80 ảnh** giá **150.000đ**, xưởng xếp ảnh vào sẵn cho chị luôn.' },
    { k: 'ai', img: 'album' },
    { k: 'kh', text: 'ok lấy album luôn nha e' },
    { k: 'cap', e: 'Chốt đơn trong chat', t: 'AI chốt đúng số khách nói, xin SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ em ghi **60 ảnh 10x15 + 1 album bìa cứng**, tổng **330.000đ**, giao miễn phí, chị kiểm tra rồi mới thanh toán. Chị gửi em **SĐT và địa chỉ** để em lên đơn nha.', d: 3000 },

    // Khách im sau khi được xin SĐT, địa chỉ → màn hình phụ: gắn thẻ (3 hashtag quảng cáo + thẻ từ cuộc chat), bám đuổi 3 tin
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Chưa gửi SĐT: Preny tự gắn thẻ khách', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi theo thẻ', t: '3 tin ngắn: 15 phút, 3 tiếng, 20 tiếng', s: 'Chỉ nói về đúng đơn 60 ảnh + album khách đã chọn' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T5 26/11/2026', d: 700 },
    { k: 'ai', text: 'Chị Vy ơi, em giữ lịch in cho chị **60 ảnh 10x15 + album bìa cứng** rồi ạ. Chị gửi em SĐT, địa chỉ là xưởng in ngay nha 😊' },
    { k: 'p', a: 'r1', d: 900 },
    { k: 'time', nhan: '3 tiếng sau', gio: '17:49', ngay: 'T5 26/11/2026', d: 700 },
    { k: 'ai', text: 'Em gửi chị ảnh thật album và ảnh in bên em nha 📸 Giấy dày, màu lên đúng như ảnh trên điện thoại.' },
    { k: 'ai', imgs: ['album-den', 'anh-ban', 'anh-gia-dinh'] },
    { k: 'p', a: 'r2', d: 900 },
    { k: 'time', nhan: '20 tiếng sau', gio: '10:49', ngay: 'T6 27/11/2026', d: 700 },
    { k: 'ai', text: 'Chị gửi **SĐT và địa chỉ** trước 12h là em in và giao ngày mai, **tặng chị 1 ảnh ép gỗ 15x21** làm ảnh bìa cho bé ạ 🎁' },
    { k: 'p', a: 'r3', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 3, khách gửi SĐT, địa chỉ', s: 'AI kiểm tra đủ thông tin trước khi lên đơn' },
    { k: 'kh', text: 'Vy 0937645218, 41/7 Nguyễn Văn Đậu, Bình Thạnh' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'cap', e: 'Kiểm tra dữ liệu', t: 'Chưa có ảnh cần in: AI hỏi lại trước khi lên đơn' },
    { k: 'ai', text: 'Dạ chị gửi giúp em **60 ảnh** muốn in qua đây hoặc Zalo xưởng **0909 318 466** nha, xưởng chỉnh sáng từng tấm trước khi in ạ 😊' },
    { k: 'kh', text: 'c gửi qua zalo xưởng rồi đó e, đủ 60 tấm' },
    { k: 'cap', e: 'Chốt đơn', t: 'Tự tổng hợp đơn: số tấm, album, quà tặng, SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ xưởng nhận đủ 60 ảnh rồi ạ. Chị kiểm tra lại đơn giúp em nha:\n– In ảnh 10x15 x 60 tấm (chỉnh sáng miễn phí)\n– Album bìa cứng 80 ảnh x 1\n– Tặng 1 ảnh ép gỗ 15x21\n– Tổng: **330.000đ** (miễn phí giao)\n– Người nhận: Vy · 0937645218\n– 41/7 Nguyễn Văn Đậu, Bình Thạnh, TP.HCM\nChị xác nhận giúp em đơn này nha.', nut: 'Quản lý đơn hàng', d: 3400 },
    { k: 'cap', e: 'Xong', t: 'Khách chỉ cần nói "Ok e"' },
    { k: 'kh', text: 'Ok e' },
    { k: 'ai', text: 'Dạ em lên đơn, xưởng in xong giao cho chị ngày mai nha 📸', d: 1300 },

    // Chốt đơn → màn hình phụ: gửi đơn hàng cho Facebook → đơn tự động → nhân viên xác nhận
    { k: 'cap', e: 'Gửi đơn về Facebook', t: 'Sự kiện mua hàng gửi ngay lên Facebook', s: 'Quảng cáo tối ưu theo đơn thật' },
    { k: 'panel', v: 'capi', d: 900 },
    { k: 'p', a: 'flow', d: 1500 }, { k: 'p', a: 'event', d: 1300 }, { k: 'p', a: 'ok', d: 2200 },
    { k: 'cap', e: 'Đơn hàng tự động', t: 'Đơn tự lên trên Preny. Xưởng chỉ việc in và giao.' },
    { k: 'panel', v: 'don', d: 900 },
    { k: 'p', a: 'f1', d: 550 }, { k: 'p', a: 'f2', d: 550 }, { k: 'p', a: 'f3', d: 550 }, { k: 'p', a: 'f4', d: 550 },
    { k: 'p', a: 'cho', d: 900 },
    { k: 'cap', e: 'Nhân viên xác nhận', t: 'Báo nhân viên: bấm 1 lần là đơn lên', s: 'Người thật kiểm tra lại trước khi in' },
    { k: 'p', a: 'nv', d: 1700 }, { k: 'p', a: 'bam', d: 1100 },
    { k: 'p', a: 'xn', d: 3000 },
    { k: 'panel', v: null, d: 500 },

    // Mua xong: tin cảm ơn kèm 5 sản phẩm đang giảm giá
    { k: 'cap', e: 'Bán thêm sau mua', t: 'Cảm ơn khách, gửi kèm 5 sản phẩm đang giảm giá', s: 'Khách bấm "Mua ngay" ngay trong Messenger' },
    { k: 'ai', text: 'Dạ cảm ơn chị Vy nha 💛 Đơn đã được xác nhận, xưởng in xong giao chị ngày mai. Xưởng đang giảm giá mấy món khách hay làm thêm từ ảnh của bé, chị xem thử nha:' },
    { k: 'car', sp: [
        { img: 'scrapbook', ten: 'Album bìa cứng in tên bé, 30 trang', gia: '315.000đ', cu: '350.000đ', giam: '-10%' },
        { img: 'anh-canvas', ten: 'Ảnh ép gỗ treo tường 30x45', gia: '252.000đ', cu: '280.000đ', giam: '-10%' },
        { img: 'khung-ke', ten: 'Ảnh tráng gương 30x40', gia: '351.000đ', cu: '390.000đ', giam: '-10%' },
        { img: 'khung-anh', ten: 'Khung ảnh gỗ để bàn 20x25', gia: '135.000đ', cu: '150.000đ', giam: '-10%' },
        { img: 'lich', ten: 'Lịch để bàn 2027 in ảnh riêng', gia: '108.000đ', cu: '120.000đ', giam: '-10%' },
      ], d: 5200 },

    // Chăm sóc sau bán qua Zalo
    { k: 'zalo', gio: '19:30', ngay: 'T2 30/11/2026', chip: '2 ngày sau khi nhận album', d: 1500 },
    { k: 'cap', e: 'Chăm sóc sau bán qua Zalo', t: 'Khách nhận album: AI hỏi có ưng không', s: 'Dặn cách giữ ảnh bền màu, xin đánh giá trong tin Zalo OA' },
    { k: 'zns', zns: {
        img: 'album', tieuDe: 'Chị Vy ơi, album của bé chị xem có ưng không ạ?',
        noiDung: 'Xưởng In Ảnh Mộc Lam cảm ơn chị đã nhận đơn **#ML26127**. Chị lưu ý giúp em để ảnh giữ màu lâu nha:',
        dong: ['Để album **nơi khô ráo**, tránh nắng chiếu trực tiếp', 'Cầm ảnh ở **mép viền**, tránh dấu vân tay', 'Ảnh lỗi màu, lệch khung: xưởng **in lại miễn phí**'],
        nut: 'Đánh giá sản phẩm',
      }, d: 5000 },
    { k: 'cap', e: 'ZBS · Sản phẩm bán chạy', t: '1 tuần sau: gửi sản phẩm bán chạy qua Zalo', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'T2 07/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['anh-canvas', 'khung-ke', 'hop-go', 'scrapbook'], nhan: 'TOP BÁN CHẠY TUẦN NÀY', mau: '#F97316',
        tieuDe: '🔥 Top bán chạy tuần này tại Xưởng Mộc Lam',
        noiDung: '**Ảnh ép gỗ treo tường**, **ảnh tráng gương** và **hộp gỗ khắc tên đựng ảnh** đang được khách chọn làm quà nhiều nhất tuần qua.',
        nut: 'Xem ngay',
      }, d: 4600 },
    { k: 'cap', e: 'ZBS · Lịch Tết 2027', t: '1 tuần sau nữa: ưu đãi lịch 2027 in ảnh gia đình', s: 'Kéo khách quay lại đặt tiếp, không cần khách nhắn' },
    { k: 'zstamp', gio: '19:30', ngay: 'T2 14/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['lich', 'anh-gia-dinh', 'khung-anh', 'phong-ngu'], nhan: 'LỊCH TẾT 2027 · IN ẢNH GIA ĐÌNH',
        tieuDe: 'Lịch 2027 in ảnh của bé, giảm 15%',
        noiDung: 'Mỗi tháng một ảnh của bé trên lịch để bàn hoặc lịch treo tường. Giảm **15%** cho khách đã in ảnh tại xưởng, giao miễn phí. Áp dụng đến hết 15/01/2027.',
        nut: 'Xem ưu đãi',
      }, d: 4800 },

    { k: 'tongket', d: 8500 },
    { k: 'outro', d: 5200 },
  ],
  // Slide tổng kết cuối video (theo slide "Chốt lại 5 ô" nhóm thương mại điện tử; bám đuổi = 5 tin trong 7 ngày)
  tongKet: { tieuDe: 'Quy trình Preny AI giúp', em: 'tăng tỷ lệ chốt đơn', cot: [
    { ten: 'Khách hàng', icon: 'users', dong: ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến'] },
    { ten: 'AI Chatbot', icon: 'bot', dong: ['Phản hồi nhanh tức thì', 'Báo giá theo size, số tấm khách cần', 'Lấy thông tin và chốt đơn'] },
    { ten: 'Bám đuổi', icon: 'bell', dong: ['Gửi 5 tin nhắn trong 7 ngày để bám đuổi khách hàng'] },
    { ten: 'Chốt đơn', icon: 'check', dong: ['Lên đơn', 'Gửi sự kiện mua hàng lên Facebook'] },
    { ten: 'Mua lại', icon: 'refresh', dong: ['Tự động gửi 1 tin nhắn mỗi tuần qua FB và Zalo', 'Sản phẩm bán chạy, giảm giá, sản phẩm mới'] },
  ] },
  panels: {
    tag: { av: 'TV', ten: 'Nguyễn Tường Vy', sub: 'Messenger · bình luận quảng cáo In ảnh sắc nét',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#inanh', 'qt hot'], ['#inanhonline', 'qt hot'], ['#quatangynghia', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#60Anh10x15_Album', 'qt']]]],
      im: 'Khách im từ 14:50, sau khi được xin SĐT, địa chỉ',
      rule: { lb: 'Bám đuổi theo thẻ #inanhonline', tieuDe: '3 tin ngắn về đúng đơn khách đã chọn',
              dong: [['15 phút', 'Đã giữ lịch in 60 ảnh + album'], ['3 tiếng', 'Gửi ảnh thật album, ảnh in'], ['20 tiếng', 'Gửi SĐT trước 12h, tặng ảnh ép gỗ']] },
      reply: 'Khách gửi SĐT, địa chỉ · dừng bám đuổi' },
    capi: { tieuDe: 'Gửi đơn hàng cho Facebook', event: 'Purchase', nhan: 'SỰ KIỆN MUA HÀNG', giaTri: '330.000đ', pk: 'Purchase · 330.000đ',
      dong: [['Đơn hàng', '#ML26127 · 60 ảnh 10x15 + album bìa cứng'], ['Nguồn khách', 'Bình luận quảng cáo In ảnh → Messenger'], ['Giá trị', '330.000 VND'], ['Event ID', 'ML26127-PURCHASE (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện mua hàng' },
  },
  donHang: {
    ma: '#ML26127', sp: 'In ảnh 10x15 + album bìa cứng', bien: '60 tấm · album 80 ảnh · tặng ảnh ép gỗ 15x21', img: 'album', gia: '330.000đ',
    nv: { ten: 'Nhân viên Hạnh', av: 'NH' },
    ten: 'Nguyễn Tường Vy', sdt: '0937645218', dc: '41/7 Nguyễn Văn Đậu, Bình Thạnh, TP.HCM', gio: '11:04 · 27/11/2026',
  },
};
