/* Kịch bản video demo NGANG 16:9: VẬT TƯ TƯỚI CÔNG NGHỆ CAO (tưới nhỏ giọt, béc tưới gốc, phun mưa, phun sương, hẹn giờ, châm phân),
   nhóm thương mại điện tử. Làm 26/11/2026 theo đồng nghiệp: "hệ thống vật tư tưới công nghệ cao, cần AI trực page
   (tư vấn, hỏi thông tin, báo giá và xin sđt và địa chỉ để chốt đơn)". Mẫu: kich-ban-nem-tc.js / kich-ban-tram-huong-tc.js.
   Mạch: quảng cáo combo tưới trọn gói → 2 bình luận (anh Tâm hỏi giá vườn 100 gốc sầu riêng, chị Hạnh hỏi phun sương vườn lan)
   → trả lời cả 2 "Mình check ib shop nha" → AI nhắn trước: giá từ + đúng ảnh quảng cáo, hỏi cây mấy năm, nước giếng hay ao
   → cây 4 năm, 100 gốc, có giếng khoan + máy bơm, hàng cách hàng 8m → AI gợi ý đúng combo có sẵn "béc tưới gốc 100 gốc" 3.290.000đ
     (combo tính sẵn theo dữ liệu shop; vườn khác chuẩn thì kỹ thuật kiểm tra, AI không tự tính vật tư)
   → khách hỏi hẹn giờ → bộ hẹn giờ 650.000đ, cộng 3.940.000đ → khách lấy → xin SĐT + địa chỉ vườn → im
   → gắn thẻ + bám đuổi 3 tin (15 phút, 3 tiếng, 20 tiếng) → khách gửi SĐT, địa chỉ thôn xã → thiếu mốc chỉ đường, AI hỏi lại
   → tóm tắt đơn → Purchase → đơn tự động → nhân viên xác nhận → 5 sản phẩm giảm giá → Zalo 3 tin → tổng kết → logo.
   Không hứa tiết kiệm bao nhiêu % nước hay tăng năng suất. Không có tin báo giao hàng.
   Tên cửa hàng, giá, khách, SĐT, địa chỉ là dữ liệu minh họa. Ảnh: Unsplash (ảnh thật, không logo hãng). */
window.VN_KB = {
  ten: 'Vật tư tưới công nghệ cao video ngang',
  ketSub: 'Để AI tư vấn đúng combo tưới, báo giá và chốt đơn giao tận vườn',
  shop: { ten: 'Tưới Nông Việt', av: 'NV', mau: '#0E7490', sub: 'Thường trả lời ngay' },
  anh: {
    'nho-giot': '../assets/img/u/1748432171507-c1d62fe2e859_800x800.jpg',     // ống nhỏ giọt dọc luống ớt (ảnh quảng cáo)
    'ong-nho-giot': '../assets/img/u/1662392559315-fb7035900d1f_800x800.jpg', // ống nhỏ giọt cạnh cây con
    'luong-rau': '../assets/img/u/1640677117376-573b9dbb8ea8_800x800.jpg',    // luống rau có dây nhỏ giọt
    'day-ruong': '../assets/img/u/1663079402880-97a2e68aafc7_800x800.jpg',    // ống tưới kéo dọc luống đất
    'bec-goc': '../assets/img/u/1718565524318-b58b8b86b813_800x800.jpg',      // béc tưới gốc dưới tán cây
    'bec-mua': '../assets/img/u/1738598665698-7fd7af4b5e0c_800x800.jpg',      // béc phun mưa trên ruộng
    'phun-suong': '../assets/img/u/1623136299195-570a06bdae6b_800x800.jpg',   // phun sương trong nhà kính
    'nha-mang': '../assets/img/u/1708796705570-33fd29ef67d0_800x800.jpg',     // nhà màng trồng rau
    'van-ong': '../assets/img/u/1738598665806-7ecc32c3594c_800x800.jpg',      // ống PE, van đầu luống
    'bon-nuoc': '../assets/img/u/1579908195863-2a7b4307a8cf_800x800.jpg',     // bồn chứa nước
    'sau-rieng': '../assets/img/u/1764232288442-f80108db48b2_800x800.jpg',    // trái sầu riêng trên cây
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= BÌNH LUẬN QUẢNG CÁO → INBOX (cảnh duy nhất) ================= */
    { k: 'canh', nhan: 'Bình luận quảng cáo → Inbox', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'nho-giot', nhan: 'MESSENGER', tieuDe: 'Bộ tưới nhỏ giọt trọn gói · tự lắp trong 1 buổi', nut: 'Gửi tin nhắn',
        text: 'BỘ TƯỚI NHỎ GIỌT TRỌN GÓI 💧 Combo sẵn cho 100 gốc cây ăn trái hoặc 1.000m² rau: đủ ống PE, béc, van, bộ lọc. Chỉ từ 2.450K, tự lắp trong 1 buổi, kỹ thuật hướng dẫn qua video. Giao tận vườn toàn quốc. #tuoinhogiot #tuoitudong #vattutuoi',
      }, d: 1500 },
    { k: 'cap', e: 'Bình luận hỏi giá', t: 'Khách hỏi giá tưới cho vườn 100 gốc', s: 'Một khách khác hỏi bộ phun sương vườn lan' },
    { k: 'cmt', i: 0, ten: 'Minh Tâm', av: 'MT', text: 'Vườn 100 gốc sầu riêng giá sao shop?' },
    { k: 'cmt', i: 1, ten: 'Mỹ Hạnh', av: 'MH', text: 'Có bộ phun sương cho vườn lan ko shop?' },
    { k: 'cap', e: 'Trả lời cả 2 bình luận', t: 'Trả lời ngắn gọn, mời khách vào inbox', s: 'Báo giá chi tiết trong tin nhắn riêng' },
    { k: 'rep', i: 0, text: 'Mình check ib shop nha 💬' },
    { k: 'rep', i: 1, text: 'Mình check ib shop nha 💬' },
    { k: 'ms', ref: { loai: 'cmt', img: 'nho-giot', dong1: 'Bạn đã bình luận về quảng cáo của Tưới Nông Việt', dong2: '"Vườn 100 gốc sầu riêng giá sao shop?"' }, gio: '14:47' },
    { k: 'cap', e: 'AI nhắn trước', t: 'Inbox trước: giá từ, gửi đúng ảnh quảng cáo', s: 'Rồi hỏi tuổi cây và nguồn nước' },
    { k: 'ai', text: 'Dạ chào anh Tâm, combo tưới cho vườn **100 gốc** bên em giá **từ 2.450.000đ** ạ.' },
    { k: 'ai', img: 'nho-giot' },
    { k: 'ai', text: 'Cây nhà mình **mấy năm tuổi** và vườn lấy nước từ **giếng khoan hay ao** ạ?' },
    { k: 'cap', e: 'Khách báo thông tin vườn', t: 'Khách nói tuổi cây, nguồn nước, khoảng cách hàng', s: 'AI gợi ý đúng combo có sẵn, không tự tính vật tư' },
    { k: 'kh', text: 'cây 4 năm, 100 gốc. có giếng khoan với máy bơm rồi, hàng cách hàng tầm 8m' },
    { k: 'ai', text: 'Dạ cây 4 năm nên dùng **combo béc tưới gốc 100 gốc**: mỗi gốc 1 béc, đủ ống PE, van, bộ lọc, giá **3.290.000đ** ạ. Combo làm sẵn cho vườn hàng cách hàng tới 8m, chạy được với máy bơm giếng khoan nhà mình.', d: 3000 },
    { k: 'cap', e: 'Khách hỏi thêm', t: 'Khách hỏi tưới tự động khi đi vắng', s: 'AI báo giá món kèm đúng nhu cầu' },
    { k: 'kh', text: 'có cái hẹn giờ tự tưới ko e? a hay đi vắng' },
    { k: 'ai', text: 'Dạ có **bộ hẹn giờ tưới** **650.000đ**, gắn vào là máy bơm tự tưới theo giờ anh cài ạ. Combo béc 100 gốc kèm hẹn giờ là **3.940.000đ**.' },
    { k: 'cap', e: 'Khách chốt', t: 'Khách lấy combo kèm hẹn giờ', s: 'AI chốt đúng món, xin SĐT, địa chỉ vườn' },
    { k: 'kh', text: 'ok lấy a combo với cái hẹn giờ' },
    { k: 'ai', text: 'Dạ em ghi **combo béc tưới gốc 100 gốc + bộ hẹn giờ**, **3.940.000đ**, giao tận vườn, anh kiểm tra hàng rồi mới thanh toán. Anh gửi em **SĐT và địa chỉ vườn** để em lên đơn nha.', d: 2800 },

    // Khách im sau khi được xin SĐT, địa chỉ → màn hình phụ: gắn thẻ (3 hashtag quảng cáo + thẻ từ cuộc chat), bám đuổi 3 tin
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Chưa gửi SĐT: Preny tự gắn thẻ khách', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi theo thẻ', t: '3 tin ngắn: 15 phút, 3 tiếng, 20 tiếng', s: 'Chỉ nói về đúng combo khách đã chọn' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T5 26/11/2026', d: 700 },
    { k: 'ai', text: 'Anh Tâm ơi, em giữ cho anh **combo béc tưới gốc 100 gốc + hẹn giờ** rồi ạ, kho còn sẵn. Anh gửi em SĐT, địa chỉ vườn để em xếp xe giao nha 😊' },
    { k: 'p', a: 'r1', d: 900 },
    { k: 'time', nhan: '3 tiếng sau', gio: '17:49', ngay: 'T5 26/11/2026', d: 700 },
    { k: 'ai', text: 'Em gửi anh ảnh béc tưới gốc và ống PE khách bên em đã lắp nha 💧 Mỗi gốc 1 béc, nước ra đều quanh gốc.' },
    { k: 'ai', imgs: ['bec-goc', 'van-ong', 'sau-rieng'] },
    { k: 'p', a: 'r2', d: 900 },
    { k: 'time', nhan: '20 tiếng sau', gio: '10:49', ngay: 'T6 27/11/2026', d: 700 },
    { k: 'ai', text: 'Anh gửi **SĐT và địa chỉ** trước 12h là em giao ngày mai, **tặng anh 10 béc dự phòng** ạ 🎁' },
    { k: 'p', a: 'r3', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 3, khách gửi SĐT, địa chỉ', s: 'AI kiểm tra thông tin trước khi lên đơn' },
    { k: 'kh', text: 'Tâm 0978314562, thôn 3 xã Ea Tu, Buôn Ma Thuột' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'cap', e: 'Kiểm tra dữ liệu', t: 'Địa chỉ vườn chưa có mốc: AI hỏi lại trước khi lên đơn' },
    { k: 'ai', text: 'Dạ vườn anh **gần mốc nào** (trường, chợ, cổng chào) để xe giao tìm đúng đường vào vườn nha anh 😊' },
    { k: 'kh', text: 'gần trường tiểu học thôn 3, cổng sắt xanh' },
    { k: 'cap', e: 'Chốt đơn', t: 'Tự tổng hợp đơn: combo, quà tặng, SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ anh kiểm tra lại đơn giúp em nha:\n– Combo béc tưới gốc 100 gốc (ống PE, béc, van, lọc)\n– Bộ hẹn giờ tưới\n– Tặng 10 béc dự phòng\n– Tổng: **3.940.000đ** (miễn phí giao)\n– Người nhận: Tâm · 0978314562\n– Thôn 3 xã Ea Tu (gần trường tiểu học, cổng sắt xanh), Buôn Ma Thuột, Đắk Lắk\nAnh xác nhận giúp em đơn này nha.', nut: 'Quản lý đơn hàng', d: 3600 },
    { k: 'cap', e: 'Xong', t: 'Khách chỉ cần nói "Ok e"' },
    { k: 'kh', text: 'Ok e' },
    { k: 'ai', text: 'Dạ em lên đơn, giao tận vườn cho anh ngày mai nha 💧', d: 1300 },

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
    { k: 'ai', text: 'Dạ cảm ơn anh Tâm nha 💛 Đơn đã được xác nhận, bên em giao tận vườn ngày mai. Cửa hàng đang giảm giá mấy món khách làm vườn hay lấy thêm, anh xem thử nha:' },
    { k: 'car', sp: [
        { img: 'bon-nuoc', ten: 'Bồn châm phân 200 lít', gia: '1.071.000đ', cu: '1.190.000đ', giam: '-10%' },
        { img: 'phun-suong', ten: 'Combo phun sương nhà màng 500m²', gia: '1.152.000đ', cu: '1.280.000đ', giam: '-10%' },
        { img: 'ong-nho-giot', ten: 'Cuộn dây nhỏ giọt 200m', gia: '585.000đ', cu: '650.000đ', giam: '-10%' },
        { img: 'bec-mua', ten: 'Bộ 10 béc phun mưa', gia: '405.000đ', cu: '450.000đ', giam: '-10%' },
        { img: 'van-ong', ten: 'Bộ van, lọc đĩa đầu nguồn', gia: '279.000đ', cu: '310.000đ', giam: '-10%' },
      ], d: 5200 },

    // Chăm sóc sau bán qua Zalo
    { k: 'zalo', gio: '19:30', ngay: 'T2 30/11/2026', chip: '3 ngày sau khi nhận · khách đã lắp xong', d: 1500 },
    { k: 'cap', e: 'Chăm sóc sau bán qua Zalo', t: 'Khách nhận hàng: AI hỏi hệ thống tưới chạy ổn chưa', s: 'Dặn vài lưu ý, xin đánh giá trong tin Zalo OA' },
    { k: 'zns', zns: {
        img: 'bec-goc', tieuDe: 'Anh Tâm ơi, hệ thống tưới chạy ổn chưa ạ?',
        noiDung: 'Tưới Nông Việt cảm ơn anh đã nhận đơn **#NV26127**. Anh lưu ý giúp em vài điều nha:',
        dong: ['Súc **bộ lọc** 2 tuần/lần cho béc không nghẹt', 'Xem béc **đầu và cuối hàng** có ra nước đều', 'Cài **hẹn giờ** tưới sáng sớm hoặc chiều mát'],
        nut: 'Nhắn kỹ thuật viên',
      }, d: 5000 },
    { k: 'cap', e: 'ZBS · Sản phẩm bán chạy', t: '1 tuần sau: gửi sản phẩm bán chạy qua Zalo', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'T2 07/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['phun-suong', 'ong-nho-giot', 'bec-mua', 'bon-nuoc'], nhan: 'TOP BÁN CHẠY TUẦN NÀY', mau: '#F97316',
        tieuDe: '🔥 Top bán chạy tuần này tại Tưới Nông Việt',
        noiDung: '**Combo phun sương nhà màng**, **dây nhỏ giọt** và **bồn châm phân** đang được nhà vườn chọn nhiều nhất tuần qua.',
        nut: 'Xem ngay',
      }, d: 4600 },
    { k: 'cap', e: 'ZBS · Chuẩn bị mùa khô', t: '1 tuần sau nữa: ưu đãi bồn châm phân mùa khô', s: 'Kéo khách quay lại mua tiếp, không cần khách nhắn' },
    { k: 'zstamp', gio: '19:30', ngay: 'T2 14/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['bon-nuoc', 'luong-rau', 'day-ruong', 'nha-mang'], nhan: 'CHUẨN BỊ MÙA KHÔ',
        tieuDe: 'Bồn châm phân giảm 15% cho khách đã lắp hệ thống',
        noiDung: 'Châm phân ngay khi tưới, đỡ công rải tay mùa khô. Bồn châm phân 200 lít giảm **15%** cho khách đã mua, giao tận vườn. Áp dụng đến hết 20/01/2027.',
        nut: 'Xem ưu đãi',
      }, d: 4800 },

    { k: 'tongket', d: 8500 },
    { k: 'outro', d: 5200 },
  ],
  // Slide tổng kết cuối video (theo slide "Chốt lại 5 ô" nhóm thương mại điện tử; bám đuổi = 5 tin trong 7 ngày)
  tongKet: { tieuDe: 'Quy trình Preny AI giúp', em: 'tăng tỷ lệ chốt đơn', cot: [
    { ten: 'Khách hàng', icon: 'users', dong: ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến'] },
    { ten: 'AI Chatbot', icon: 'bot', dong: ['Phản hồi nhanh tức thì', 'Hỏi tuổi cây, nguồn nước, gợi ý đúng combo', 'Lấy thông tin và chốt đơn'] },
    { ten: 'Bám đuổi', icon: 'bell', dong: ['Gửi 5 tin nhắn trong 7 ngày để bám đuổi khách hàng'] },
    { ten: 'Chốt đơn', icon: 'check', dong: ['Lên đơn', 'Gửi sự kiện mua hàng lên Facebook'] },
    { ten: 'Mua lại', icon: 'refresh', dong: ['Tự động gửi 1 tin nhắn mỗi tuần qua FB và Zalo', 'Sản phẩm bán chạy, giảm giá, sản phẩm mới'] },
  ] },
  panels: {
    tag: { av: 'MT', ten: 'Nguyễn Minh Tâm', sub: 'Messenger · bình luận quảng cáo Bộ tưới nhỏ giọt trọn gói',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#tuoinhogiot', 'qt hot'], ['#tuoitudong', 'qt hot'], ['#vattutuoi', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#Combo100Goc', 'qt']]]],
      im: 'Khách im từ 14:51, sau khi được xin SĐT, địa chỉ',
      rule: { lb: 'Bám đuổi theo thẻ #tuoinhogiot', tieuDe: '3 tin ngắn về đúng combo khách đã chọn',
              dong: [['15 phút', 'Đã giữ combo 100 gốc + hẹn giờ'], ['3 tiếng', 'Gửi ảnh béc, ống khách đã lắp'], ['20 tiếng', 'Gửi SĐT trước 12h, tặng 10 béc']] },
      reply: 'Khách gửi SĐT, địa chỉ · dừng bám đuổi' },
    capi: { tieuDe: 'Gửi đơn hàng cho Facebook', event: 'Purchase', nhan: 'SỰ KIỆN MUA HÀNG', giaTri: '3.940.000đ', pk: 'Purchase · 3.940.000đ',
      dong: [['Đơn hàng', '#NV26127 · combo béc tưới gốc 100 gốc + hẹn giờ'], ['Nguồn khách', 'Bình luận quảng cáo Bộ tưới nhỏ giọt → Messenger'], ['Giá trị', '3.940.000 VND'], ['Event ID', 'NV26127-PURCHASE (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện mua hàng' },
  },
  donHang: {
    ma: '#NV26127', sp: 'Combo béc tưới gốc 100 gốc', bien: '+ bộ hẹn giờ · tặng 10 béc dự phòng', img: 'bec-goc', gia: '3.940.000đ',
    nv: { ten: 'Nhân viên Hải', av: 'NH' },
    ten: 'Nguyễn Minh Tâm', sdt: '0978314562', dc: 'Thôn 3, xã Ea Tu (gần trường tiểu học, cổng sắt xanh), Buôn Ma Thuột, Đắk Lắk', gio: '11:04 · 27/11/2026',
  },
};
