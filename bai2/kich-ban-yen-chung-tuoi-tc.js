/* Bài 2 (video demo ngang tự chạy): YẾN CHƯNG TƯƠI, nhóm thương mại điện tử. Làm 18/11/2026 theo mạch YaMe người dùng chốt cùng ngày:
   - 1 cảnh duy nhất: bài quảng cáo, 2 khách bình luận (hỏi giá, hỏi để được mấy ngày) → trả lời cả 2 "Mình check ib shop nha"
     → AI nhắn inbox trước: giá + đúng ảnh quảng cáo, hỏi 1 điều (dùng hay biếu, có kiêng đường không) → khách im
     → gắn thẻ (3 hashtag quảng cáo + #baogia) → bám đuổi 3 tin 15 phút, 3 tiếng, 20 tiếng → khách quay lại: biếu mẹ bị tiểu đường
     → AI chọn bản không đường, không hứa chữa bệnh, hỏi vị → xin SĐT + địa chỉ (ca khó: thiếu số nhà) → tóm tắt đơn → Purchase lên Facebook
     → đơn tự động, nhân viên bấm xác nhận → cảm ơn + 5 sản phẩm giảm giá → Zalo: hỏi thăm, bán chạy, khuyến mãi → tổng kết → logo.
   - Chỉ 1 sản phẩm từ đầu tới cuối (set 6 hũ yến chưng tươi), không có đoạn khách hỏi sản phẩm khác.
   Tham khảo fanpage Yến Tươi Công Hậu (Thủ Đức). Tên shop, giá, khách, SĐT, địa chỉ: minh họa. Ảnh: Unsplash dùng chung với bài 1. */
window.VN_KB = {
  ten: 'Yến chưng tươi video ngang',
  ketSub: 'Để AI tư vấn, bám đuổi và lên đơn yến cho shop của bạn',
  shop: { ten: 'Yến Sào An Khang', av: 'AK', mau: '#B45309', sub: 'Thường trả lời ngay' },
  anh: {
    'hu-yen': '../assets/img/u/1768203635611-c8542d3d1c6f_800x800.jpg',
    'chen-yen': '../assets/img/u/1621658537360-dfcb008fe19f_800x800.jpg',
    'chen-yen-2': '../assets/img/u/1621658537105-fd4c446d525c_800x800.jpg',
    'tho-chung': '../assets/img/u/1603094110083-36267836e66b_800x800.jpg',
    'yen-tinh-che': '../assets/img/u/1767969202119-97dea27c7c68_800x800.jpg',
    'tao-do': '../assets/img/u/1537203374277-c6cf7cebea4a_800x800.jpg',
    'dong-trung': '../assets/img/u/1630623093190-166d69e55f41_800x800.jpg',
    'long-nhan': '../assets/img/u/1597975371283-5461cdf69d5e_800x800.jpg',
    'qua-tet': '../assets/img/u/1765524080215-01d6e4d48928_800x800.jpg',
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= BÌNH LUẬN QUẢNG CÁO → INBOX (cảnh duy nhất) ================= */
    { k: 'canh', nhan: 'Bình luận quảng cáo → Inbox', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'hu-yen', nhan: 'MESSENGER', tieuDe: 'Yến chưng tươi · Set 6 hũ 70ml', nut: 'Gửi tin nhắn',
        text: 'YẾN CHƯNG TƯƠI 🥣 Chưng mỗi sáng, không chất bảo quản, có bản không đường cho người cần kiêng. Giao nội thành TP.HCM trong ngày. #yenchungtuoi #quabieu #khongduong',
      }, d: 1500 },
    { k: 'cap', e: 'Bình luận hỏi giá', t: 'Khách hỏi giá ngay dưới quảng cáo', s: 'Một khách khác hỏi để được mấy ngày' },
    { k: 'cmt', i: 0, ten: 'Minh Thảo', av: 'MT', text: 'Set 6 hũ giá sao shop?' },
    { k: 'cmt', i: 1, ten: 'Hoàng Long', av: 'HL', text: 'Để được mấy ngày vậy shop, ship Biên Hòa không?' },
    { k: 'cap', e: 'Trả lời cả 2 bình luận', t: 'Trả lời ngắn gọn, mời khách vào inbox', s: 'Tư vấn chi tiết trong tin nhắn riêng' },
    { k: 'rep', i: 0, text: 'Mình check ib shop nha 💬' },
    { k: 'rep', i: 1, text: 'Mình check ib shop nha 💬' },
    { k: 'ms', ref: { loai: 'cmt', img: 'hu-yen', dong1: 'Bạn đã bình luận về quảng cáo của Yến Sào An Khang', dong2: '"Set 6 hũ giá sao shop?"' }, gio: '14:47' },
    { k: 'cap', e: 'AI nhắn trước', t: 'Inbox trước: báo giá, gửi đúng ảnh quảng cáo', s: 'Khách không cần mô tả lại sản phẩm' },
    { k: 'ai', text: 'Dạ chào chị Thảo, set 6 hũ yến chưng tươi 70ml giá **330.000đ** ạ, có bản đường phèn và bản không đường.' },
    { k: 'ai', img: 'hu-yen' },
    { k: 'ai', text: 'Chị mua dùng hay biếu ạ, người dùng có cần kiêng đường không để em chọn đúng bản nha?' },

    // Khách im → màn hình phụ: gắn thẻ (3 hashtag của bài quảng cáo + thẻ từ cuộc chat), bám đuổi 3 tin theo thẻ
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Preny tự gắn thẻ đúng sản phẩm khách quan tâm', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi theo thẻ', t: '3 tin ngắn: 15 phút, 3 tiếng, 20 tiếng', s: 'Chỉ nói về đúng set yến khách quan tâm' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Chị Thảo ơi, mẻ yến chưng sáng nay còn ít set lắm ạ. Chị báo em người dùng để em giữ đúng bản cho chị nha 😊' },
    { k: 'p', a: 'r1', d: 900 },
    { k: 'time', nhan: '3 tiếng sau', gio: '17:49', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Em gửi chị ảnh thật mẻ yến bên em chưng sáng nay nha 📸 Yến tinh chế, chưng cách thủy, đóng hũ trong ngày.' },
    { k: 'ai', imgs: ['yen-tinh-che', 'tho-chung', 'chen-yen'] },
    { k: 'p', a: 'r2', d: 900 },
    { k: 'time', nhan: '20 tiếng sau', gio: '10:49', ngay: 'T5 19/11/2026', d: 700 },
    { k: 'ai', text: 'Set yến **330.000đ** vẫn còn ạ. Chốt hôm nay em **tặng hộp quà + thiệp**, giao nội thành trong ngày nha ⚡' },
    { k: 'p', a: 'r3', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 3, khách trả lời để chốt đơn', s: 'AI tư vấn ngay khi khách nhắn' },
    { k: 'kh', text: 'c mua biếu mẹ, mẹ c bị tiểu đường e' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },

    { k: 'cap', e: 'Tư vấn đúng người dùng', t: 'Người tiểu đường → bản không đường', s: 'Không hứa chữa bệnh, dặn hỏi bác sĩ' },
    { k: 'ai', text: 'Dạ vậy chị lấy **bản không đường**, dùng đường cỏ ngọt ạ, cùng giá **330.000đ**. Yến là thực phẩm, không phải thuốc, chị hỏi bác sĩ lượng dùng cho mẹ giúp em nha.' },
    { k: 'cap', e: 'Hỏi đúng thứ còn thiếu', t: 'Có bản rồi: AI hỏi tiếp vị yến', s: 'Gửi ảnh để khách chọn nhanh' },
    { k: 'ai', text: 'Bản không đường có 2 vị **nguyên chất** và **táo đỏ, kỷ tử** ạ. Chị lấy vị nào ạ?' },
    { k: 'ai', imgs: ['chen-yen-2', 'tao-do'] },
    { k: 'kh', text: 'Táo đỏ kỷ tử nha e' },
    { k: 'ai', text: 'Dạ em ghi **set 6 hũ không đường, vị táo đỏ kỷ tử**, 330.000đ. Chị gửi em **SĐT và địa chỉ** người nhận nha.' },
    { k: 'cap', e: 'Kiểm tra dữ liệu', t: 'Thiếu số nhà → hỏi lại ngay lập tức' },
    { k: 'kh', text: '0906284351, đường số 9 linh xuân thủ đức' },
    { k: 'ai', text: 'Dạ em ghi SĐT rồi ạ. Địa chỉ **đường số 9** chị cho em xin thêm **số nhà** để shipper giao đúng nha.' },
    { k: 'kh', text: '56 nha e, người nhận tên Hoa' },
    { k: 'cap', e: 'Chốt đơn', t: 'Tự tổng hợp đơn: sản phẩm, vị, SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ chị kiểm tra lại đơn giúp em nha:\n– Set 6 hũ yến chưng không đường, vị táo đỏ kỷ tử\n– Tổng: **330.000đ** (tặng hộp quà + thiệp, miễn phí giao)\n– Người nhận: Hoa · 0906284351\n– 56 đường số 9, P. Linh Xuân, Thủ Đức\nChị xác nhận giúp em đơn này nha.', nut: 'Quản lý đơn hàng', d: 3600 },
    { k: 'cap', e: 'Xong', t: 'Khách chỉ cần nói "Ok e"' },
    { k: 'kh', text: 'Ok e' },
    { k: 'ai', text: 'Dạ em lên đơn, chưng mẻ sáng mai cho mẹ chị liền nha ⚡', d: 1300 },

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
    { k: 'ai', text: 'Dạ cảm ơn chị Thảo nha 💛 Đơn đã được xác nhận, sáng mai shop giao cho mẹ chị. Shop đang giảm giá mấy món làm quà cuối năm, chị xem thử nha:' },
    { k: 'car', sp: [
        { img: 'dong-trung', ten: 'Set yến đông trùng hạ thảo 6 hũ', gia: '378.000đ', cu: '420.000đ', giam: '-10%' },
        { img: 'yen-tinh-che', ten: 'Yến tinh chế hộp quà 50g', gia: '1.530.000đ', cu: '1.700.000đ', giam: '-10%' },
        { img: 'long-nhan', ten: 'Set yến long nhãn 6 hũ', gia: '297.000đ', cu: '330.000đ', giam: '-10%' },
        { img: 'qua-tet', ten: 'Hộp quà Tết yến cao cấp', gia: '801.000đ', cu: '890.000đ', giam: '-10%' },
        { img: 'chen-yen', ten: 'Set yến đường phèn 6 hũ', gia: '279.000đ', cu: '310.000đ', giam: '-10%' },
      ], d: 5200 },

    // Chăm sóc sau bán qua Zalo
    { k: 'zalo', gio: '19:30', ngay: 'T6 20/11/2026', chip: 'Tối hôm nhận · mẹ đã nhận yến', d: 1500 },
    { k: 'cap', e: 'Chăm sóc sau bán qua Zalo', t: 'Khách nhận hàng: AI hỏi dùng có hợp không', s: 'Dặn bảo quản, xin đánh giá ngay trong tin Zalo OA' },
    { k: 'zns', zns: {
        img: 'hu-yen', tieuDe: 'Chị Thảo ơi, mẹ dùng yến thấy hợp không ạ?',
        noiDung: 'Yến Sào An Khang cảm ơn chị đã nhận đơn **#AK19118** (Set 6 hũ không đường · táo đỏ kỷ tử). Chị nhắc mẹ để ngăn mát, dùng hết trong 5 ngày nha!',
        nut: 'Đánh giá sản phẩm',
      }, d: 4200 },
    { k: 'cap', e: 'ZBS · Sản phẩm bán chạy', t: '1 tuần sau: gửi sản phẩm bán chạy qua Zalo', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'T6 27/11/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['dong-trung', 'yen-tinh-che', 'tao-do', 'hu-yen'], nhan: 'TOP BÁN CHẠY TUẦN NÀY', mau: '#F97316',
        tieuDe: '🔥 Top bán chạy tuần này tại Yến Sào An Khang',
        noiDung: 'Set yến **đông trùng**, yến **táo đỏ kỷ tử** và **yến tinh chế** hộp quà đang được khách chọn nhiều nhất tuần qua.',
        nut: 'Xem ngay',
      }, d: 4600 },
    { k: 'cap', e: 'ZBS · Khuyến mãi', t: '1 tuần sau nữa: gửi ưu đãi cho khách cũ', s: 'Kéo khách quay lại mua tiếp, không cần khách nhắn' },
    { k: 'zstamp', gio: '19:30', ngay: 'T6 04/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['qua-tet', 'yen-tinh-che', 'dong-trung', 'long-nhan'], nhan: 'QUÀ TẾT 2027 · GIẢM 10%',
        tieuDe: 'Ưu đãi riêng cho khách đã mua tại Yến Sào An Khang',
        noiDung: 'Hộp quà yến tinh chế, set yến chưng đang giảm **10%**, viết thiệp miễn phí. Áp dụng đến hết 13/12/2026.',
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
    tag: { av: 'MT', ten: 'Trần Minh Thảo', sub: 'Messenger · bình luận quảng cáo Yến chưng tươi',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#yenchungtuoi', 'qt hot'], ['#quabieu', 'qt hot'], ['#khongduong', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht']]]],
      im: 'Khách im từ 14:49, sau khi được báo giá',
      rule: { lb: 'Bám đuổi theo thẻ #yenchungtuoi', tieuDe: '3 tin ngắn về set yến chưng tươi',
              dong: [['15 phút', 'Nhắc mẻ sáng nay còn ít set'], ['3 tiếng', 'Gửi ảnh thật mẻ yến'], ['20 tiếng', 'Nhắc giá, tặng hộp quà']] },
      reply: 'Khách trả lời "c mua biếu mẹ" · dừng bám đuổi' },
    capi: { tieuDe: 'Gửi đơn hàng cho Facebook', event: 'Purchase', nhan: 'SỰ KIỆN MUA HÀNG', giaTri: '330.000đ', pk: 'Purchase · 330.000đ',
      dong: [['Đơn hàng', '#AK19118 · Set 6 hũ không đường'], ['Nguồn khách', 'Bình luận quảng cáo Yến chưng tươi → Messenger'], ['Giá trị', '330.000 VND'], ['Event ID', 'AK19118-PURCHASE (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện mua hàng' },
  },
  donHang: {
    ma: '#AK19118', sp: 'Set 6 hũ yến chưng tươi không đường', bien: 'Táo đỏ, kỷ tử · 70ml · x1', img: 'hu-yen', gia: '330.000đ',
    nv: { ten: 'Nhân viên Thu Vy', av: 'TV' },
    ten: 'Lê Thị Hoa', sdt: '0906284351', dc: '56 đường số 9, P. Linh Xuân, Thủ Đức, TP.HCM', gio: '11:05 · 19/11/2026',
  },
};
