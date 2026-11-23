/* Bài 2 (video demo ngang tự chạy): BÁN TOUR DU LỊCH (Du Lịch Biển Xanh: tour Đà Nẵng – Hội An – Bà Nà 4N3Đ), nhóm thương mại điện tử,
   ngành đặt chỗ ("lên đơn" là đơn đặt tour). Làm 23/11/2026: người dùng bỏ ngành "Du lịch, lưu trú", tách thành bán tour (file này)
   và khách sạn, homestay (kich-ban-homestay-tc.js). Theo mẫu tmdt kich-ban-rem-cua-tc.js / kich-ban-du-lich-luu-tru-tc.js:
   - 1 cảnh duy nhất: quảng cáo tour, 2 khách bình luận (giá + tối có tự do không, khách sạn có gần biển không) → trả lời cả 2 "Mình check ib nha"
     → AI nhắn inbox trước: giá + đúng ảnh quảng cáo, hỏi ngày đi, số người
     → ca khó: khách chỉ nói "nhóm đồng nghiệp tầm 5–7 người, tính đi dịp Tết Dương lịch", hỏi ghép đoàn có đông không, nhóm đông có giá tốt hơn không
     → AI trả lời các câu hỏi nhưng chưa báo giá: xin ngày đi cụ thể và chốt số người trước → khách: 30/12, chốt 6 người → báo giá nhóm
     → hỏi ghép đoàn hay tour riêng (xe riêng cho nhóm) → khách chọn ghép đoàn → AI xin họ tên, SĐT người đại diện → khách im
     → gắn thẻ (3 hashtag quảng cáo + #baogia + lựa chọn) → bám đuổi 3 tin 15 phút, 3 tiếng, 20 tiếng (giữ chỗ, ảnh thật, chia sẻ nhóm công ty đã đi)
     → khách gửi họ tên, SĐT → tóm tắt đơn đặt tour, cọc 30% → Purchase → đơn tự động, điều hành xác nhận → 5 dịch vụ giảm giá
     → Zalo sau chuyến đi: hỏi thăm, được đặt nhiều, voucher → tổng kết → logo.
   Khách là nhóm bạn đồng nghiệp (không có trẻ em) để khỏi trùng ngành "Nhà hàng, khách sạn" (gia đình 2 bé đi Đà Nẵng).
   Không có tin nhắc trước ngày khởi hành (Preny chưa có tính năng này), không có tin "đơn đang giao".
   Tên công ty, lịch trình, giá, giá nhóm, cọc, khách, SĐT, chia sẻ của khách: minh họa (khớp bài 1 demo/kich-ban/tour-du-lich-tc.js).
   Ảnh: Unsplash dùng chung với bài 1. */
window.VN_KB = {
  ten: 'Bán tour du lịch video ngang',
  ketSub: 'Để AI tư vấn lịch trình, bám đuổi và chốt đơn đặt tour cho doanh nghiệp du lịch của bạn',
  shop: { ten: 'Du Lịch Biển Xanh', av: 'BX', mau: '#0369A1', sub: 'Thường trả lời ngay' },
  anh: {
    'cau-vang': '../assets/img/u/1741138327956-dfa75763b50d_800x800.jpg',     // Cầu Vàng Bà Nà (ảnh quảng cáo)
    'cau-vang-2': '../assets/img/u/1748674278237-00d4bc40fe2c_800x800.jpg',   // Cầu Vàng nhìn gần
    'cau-rong': '../assets/img/u/1788927793309-a1e53e23ca00_800x800.jpg',     // cầu Rồng về đêm
    'den-long': '../assets/img/u/1563354860-799d15199ac3_800x800.jpg',        // đèn lồng Hội An
    'hoi-an-dem': '../assets/img/u/1652731011413-93d4c5aa5c7c_800x800.jpg',   // phố cổ Hội An về đêm
    'hoi-an-ngay': '../assets/img/u/1562005094-c724030f99bd_800x800.jpg',     // phố Hội An ban ngày
    'bien-my-khe': '../assets/img/u/1674296067534-0f9769040781_800x800.jpg',  // biển Đà Nẵng từ trên cao
    'bien-2': '../assets/img/u/1723142282970-1fd415eec1ad_800x800.jpg',       // bãi biển, thành phố phía xa
    'bien-3': '../assets/img/u/1689825199899-c57cc46c2a9a_800x800.jpg',       // bãi biển hàng ô dù
    'hdv': '../assets/img/u/1777523743673-fe2577163ede_800x800.jpg',          // hướng dẫn viên
    'doan-khach': '../assets/img/u/1766415007432-80738e830722_800x800.jpg',   // đoàn khách nghe hướng dẫn viên
    'xe-du-lich': '../assets/img/u/1570125909232-eb263c188f7e_800x800.jpg',   // xe du lịch
    'gia-dinh': '../assets/img/u/1523225918988-00624e6d8fee_800x800.jpg',     // vợ chồng kéo vali ngắm biển
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= BÌNH LUẬN QUẢNG CÁO → INBOX (cảnh duy nhất) ================= */
    { k: 'canh', nhan: 'Bình luận quảng cáo → Inbox', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'cau-vang', nhan: 'MESSENGER', tieuDe: 'Tour Đà Nẵng – Hội An – Bà Nà 4N3Đ', nut: 'Gửi tin nhắn',
        text: 'Đà Nẵng – Hội An – Bà Nà 4N3Đ 🌉 Khởi hành hằng ngày, khách sạn 4 sao sát biển Mỹ Khê, vé cáp treo Bà Nà, tối tự do khám phá phố biển. Nhóm từ 6 người giá tốt. #tourdanang #bana #hoian',
      }, d: 1500 },
    { k: 'cap', e: 'Bình luận hỏi giá', t: 'Khách hỏi giá ngay dưới quảng cáo', s: 'Một khách khác hỏi khách sạn có gần biển không' },
    { k: 'cmt', i: 0, ten: 'Hoài An', av: 'HA', text: 'Tour 4N3Đ này giá sao ạ? Tối có tự do đi chơi ko?' },
    { k: 'cmt', i: 1, ten: 'Bích Hạnh', av: 'BH', text: 'Khách sạn có gần biển không shop?' },
    { k: 'cap', e: 'Trả lời cả 2 bình luận', t: 'Trả lời ngắn gọn, mời khách vào inbox', s: 'Tư vấn chi tiết trong tin nhắn riêng' },
    { k: 'rep', i: 0, text: 'Mình check ib nha 💬' },
    { k: 'rep', i: 1, text: 'Mình check ib nha 💬' },
    { k: 'ms', ref: { loai: 'cmt', img: 'cau-vang', dong1: 'Bạn đã bình luận về quảng cáo của Du Lịch Biển Xanh', dong2: '"Tour 4N3Đ này giá sao ạ? Tối có tự do đi chơi ko?"' }, gio: '14:47' },
    { k: 'cap', e: 'AI nhắn trước', t: 'Inbox trước: báo giá, gửi đúng ảnh quảng cáo', s: 'Khách không cần mô tả lại tour' },
    { k: 'ai', text: 'Dạ chào chị Hoài An, tour **Đà Nẵng – Hội An – Bà Nà 4N3Đ** giá **4.290.000đ/khách** ạ, gồm khách sạn 4 sao, xe, hướng dẫn viên, vé cáp treo Bà Nà. **Tối cả 3 tối đều tự do** chị nha.' },
    { k: 'ai', img: 'cau-vang' },
    { k: 'ai', text: 'Mình đi **ngày nào, mấy người** ạ, để em báo đúng giá và giữ chỗ cho mình nha?' },

    { k: 'cap', e: 'Khách trả lời thiếu', t: 'Chưa có ngày đi, chưa chốt số người', s: 'AI trả lời câu hỏi, chưa báo giá vội' },
    { k: 'kh', text: 'nhóm c đồng nghiệp tầm 5-7 ng, tính đi dịp tết dương. ghép đoàn có đông ko e, nhóm đông có giá tốt hơn ko?' },
    { k: 'ai', text: 'Dạ đoàn ghép **tối đa 20 khách**, khách sạn cách **biển Mỹ Khê 2 phút đi bộ** ạ. Nhóm **từ 6 người** có **giá nhóm**, chị cho em xin **ngày đi cụ thể** và **chốt số người** để em giữ chỗ, báo đúng giá nha.' },
    { k: 'kh', text: 'đi 30/12 nha e, chốt 6 người' },
    { k: 'ai', text: 'Dạ nhóm 6 người em giảm **200.000đ/khách**, còn **4.090.000đ**, cả nhóm **24.540.000đ**, 3 phòng đôi, đi **30/12 – 02/01** ạ.' },
    { k: 'cap', e: 'Hỏi đúng thứ còn thiếu', t: 'Có ngày, có số người: AI hỏi ghép đoàn hay tour riêng', s: 'Gửi ảnh để khách chọn nhanh' },
    { k: 'ai', text: 'Nhóm mình muốn **ghép đoàn** cho vui hay đi **tour riêng** có xe riêng cho nhóm (**4.890.000đ/khách**) ạ?' },
    { k: 'ai', imgs: ['doan-khach', 'xe-du-lich'] },
    { k: 'kh', text: 'ghép đoàn cho vui e' },
    { k: 'cap', e: 'Xin thông tin đặt tour', t: 'Chọn xong: AI xin họ tên, SĐT người đại diện' },
    { k: 'ai', text: 'Dạ em ghi **ghép đoàn, 6 khách, 30/12 – 02/01**. Chị gửi em **họ tên, SĐT** người đại diện nhóm để em giữ chỗ nha.' },

    // Khách im sau khi được xin họ tên, SĐT → màn hình phụ: gắn thẻ (3 hashtag quảng cáo + thẻ từ cuộc chat), bám đuổi 3 tin
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Chưa gửi SĐT: Preny tự gắn thẻ khách', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi theo thẻ', t: '3 tin ngắn: 15 phút, 3 tiếng, 20 tiếng', s: 'Chỉ nói về đúng tour nhóm khách đã chọn' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T2 23/11/2026', d: 700 },
    { k: 'ai', text: 'Chị Hoài An ơi, em đang giữ tạm **6 chỗ ghép đoàn ngày 30/12** cho nhóm mình ạ. Chị gửi em họ tên, SĐT để em giữ chắc nha 😊' },
    { k: 'p', a: 'r1', d: 900 },
    { k: 'time', nhan: '3 tiếng sau', gio: '17:49', ngay: 'T2 23/11/2026', d: 700 },
    { k: 'ai', text: 'Em gửi chị ảnh thật mấy điểm trong tour nha 📸 Cầu Vàng buổi sáng, phố cổ Hội An buổi tối và biển Mỹ Khê ngay trước khách sạn.' },
    { k: 'ai', imgs: ['cau-vang-2', 'hoi-an-dem', 'bien-my-khe'] },
    { k: 'p', a: 'r2', d: 900 },
    { k: 'time', nhan: '20 tiếng sau', gio: '10:49', ngay: 'T3 24/11/2026', d: 700 },
    { k: 'ai', review: { av: 'TP', ten: 'Thanh Phúc', sub: 'đã đánh giá Du Lịch Biển Xanh', mau: '#F59E0B',
        text: 'Team mình 8 người đi ghép đoàn, đoàn vừa phải, hướng dẫn viên vui. Tối tự do ra biển, đi Hội An thả đèn rất thích, khách sạn sát biển.' } },
    { k: 'ai', text: 'Chị chỉ cần gửi **họ tên, SĐT** là em giữ chỗ liền ạ. Đặt trong tuần này em **giữ giá nhóm** và tặng **6 vé thả đèn hoa đăng** sông Hoài 🎁' },
    { k: 'p', a: 'r3', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 3, khách gửi họ tên, SĐT', s: 'AI tóm tắt đơn đặt tour, báo cọc giữ chỗ' },
    { k: 'kh', text: 'Nguyễn Hoài An 0938615724. cọc sao e?' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'cap', e: 'Chốt đơn đặt tour', t: 'Tự tổng hợp đơn: tour, ngày đi, số khách, cọc' },
    { k: 'ai', text: 'Dạ chị kiểm tra lại đơn đặt tour giúp em nha:\n– Tour Đà Nẵng – Hội An – Bà Nà 4N3Đ · ghép đoàn\n– 30/12/2026 – 02/01/2027 · 6 khách, 3 phòng đôi\n– Tặng 6 vé thả đèn hoa đăng\n– Tổng: **24.540.000đ** · cọc 30% **7.362.000đ** giữ chỗ\n– Đại diện: Nguyễn Hoài An · 0938615724\nChị xác nhận giúp em đơn này nha.', nut: 'Quản lý đặt chỗ', d: 3600 },
    { k: 'cap', e: 'Xong', t: 'Khách chỉ cần nói "Ok em"' },
    { k: 'kh', text: 'Ok em, chiều c chuyển cọc' },
    { k: 'ai', text: 'Dạ em lên đơn và gửi chị thông tin chuyển cọc liền nha ⚡', d: 1300 },

    // Chốt đơn → màn hình phụ: gửi đơn đặt tour cho Facebook → đơn tự động → điều hành xác nhận
    { k: 'cap', e: 'Gửi đơn về Facebook', t: 'Sự kiện mua hàng gửi ngay lên Facebook', s: 'Quảng cáo tối ưu theo đơn thật' },
    { k: 'panel', v: 'capi', d: 900 },
    { k: 'p', a: 'flow', d: 1500 }, { k: 'p', a: 'event', d: 1300 }, { k: 'p', a: 'ok', d: 2200 },
    { k: 'cap', e: 'Đơn đặt tour tự động', t: 'Đơn tự lên Preny. Không cần ghi tay.' },
    { k: 'panel', v: 'don', d: 900 },
    { k: 'p', a: 'f1', d: 550 }, { k: 'p', a: 'f2', d: 550 }, { k: 'p', a: 'f3', d: 550 }, { k: 'p', a: 'f4', d: 550 },
    { k: 'p', a: 'cho', d: 900 },
    { k: 'cap', e: 'Nhân viên xác nhận', t: 'Báo điều hành: bấm 1 lần là đơn lên', s: 'Người thật kiểm tra lại chỗ trong đoàn, phòng khách sạn' },
    { k: 'p', a: 'nv', d: 1700 }, { k: 'p', a: 'bam', d: 1100 },
    { k: 'p', a: 'xn', d: 3000 },
    { k: 'panel', v: null, d: 500 },

    // Đặt xong: tin cảm ơn kèm 5 dịch vụ đang giảm giá (deck.afterSale.sp của bài 1)
    { k: 'cap', e: 'Bán thêm sau đặt tour', t: 'Cảm ơn khách, gửi kèm 5 dịch vụ đang giảm giá', s: 'Khách bấm đặt thêm ngay trong Messenger' },
    { k: 'ai', text: 'Dạ cảm ơn chị Hoài An nha 🎉 Tour đã được xác nhận. Mấy dịch vụ này đang giảm giá cho nhóm mình, chị xem thử nha:' },
    { k: 'car', sp: [
        { img: 'hoi-an-dem', ten: 'Vé show diễn thực cảnh Hội An', gia: '540.000đ', cu: '600.000đ', giam: '-10%' },
        { img: 'xe-du-lich', ten: 'Xe riêng đón sân bay Đà Nẵng', gia: '225.000đ', cu: '250.000đ', giam: '-10%' },
        { img: 'hdv', ten: 'Tour Huế 1 ngày, có hướng dẫn viên', gia: '1.070.000đ', cu: '1.190.000đ', giam: '-10%' },
        { img: 'gia-dinh', ten: 'Bảo hiểm du lịch cả chuyến', gia: '54.000đ', cu: '60.000đ', giam: '-10%' },
        { img: 'bien-2', ten: 'Combo vé máy bay khứ hồi (giá từ)', gia: '2.290.000đ', cu: '2.490.000đ', giam: '-8%' },
      ], d: 5200 },

    // Chăm sóc qua Zalo: sau chuyến đi (30/12 – 02/01). Không có tin nhắc trước ngày khởi hành.
    { k: 'zalo', gio: '19:30', ngay: 'T2 04/01/2027', chip: 'Sau chuyến đi', d: 1500 },
    { k: 'cap', e: 'Chăm sóc sau bán qua Zalo', t: 'Sau chuyến đi: AI hỏi thăm cả nhóm', s: 'Xin đánh giá ngay trong tin Zalo OA của công ty' },
    { k: 'zns', zns: {
        img: 'den-long', tieuDe: 'Chị Hoài An ơi, nhóm mình đi Đà Nẵng vui không ạ?',
        noiDung: 'Biển Xanh cảm ơn cả nhóm đã đi tour **Đà Nẵng – Hội An – Bà Nà 4N3Đ** (đơn **#BX23131** · 30/12 – 02/01). Chị đánh giá giúp Biển Xanh nha!',
        nut: 'Đánh giá chuyến đi',
      }, d: 4200 },
    { k: 'cap', e: 'ZBS · Được đặt nhiều', t: '1 tuần sau: gửi tour được đặt nhiều qua Zalo', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'T2 11/01/2027', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['bien-3', 'hoi-an-ngay', 'cau-rong', 'doan-khach'], nhan: 'ĐƯỢC ĐẶT NHIỀU TUẦN NÀY', mau: '#F97316',
        tieuDe: '🔥 Tour được đặt nhiều nhất tại Biển Xanh',
        noiDung: '**Tour biển hè 4N3Đ**, **tour Huế – Hội An 3N2Đ** và **tour team building cho công ty** đang được khách chọn nhiều nhất tuần qua.',
        nut: 'Xem lịch trình',
      }, d: 4600 },
    { k: 'cap', e: 'ZBS · Ưu đãi khách cũ', t: '1 tuần sau nữa: gửi voucher cho chuyến tới', s: 'Kéo khách quay lại đặt tiếp, không cần khách nhắn' },
    { k: 'zstamp', gio: '19:30', ngay: 'T2 18/01/2027', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['bien-my-khe', 'cau-vang-2', 'den-long', 'bien-2'], nhan: 'KHÁCH CŨ · GIẢM 10%',
        tieuDe: 'Tặng chị Hoài An voucher 10%',
        noiDung: 'Nhập mã **BIENXANH10** giảm **10%** mọi tour trong nước cho chuyến đi tiếp theo của nhóm. Hạn dùng đến 30/06/2027.',
        nut: 'Đặt tour ngay',
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
    tag: { av: 'HA', ten: 'Nguyễn Hoài An', sub: 'Messenger · bình luận quảng cáo Tour Đà Nẵng 4N3Đ',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#tourdanang', 'qt hot'], ['#bana', 'qt hot'], ['#hoian', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#GhepDoan6Khach', 'qt']]]],
      im: 'Khách im từ 14:52, sau khi được xin họ tên, SĐT',
      rule: { lb: 'Bám đuổi theo thẻ #tourdanang', tieuDe: '3 tin ngắn về tour nhóm khách đã chọn',
              dong: [['15 phút', 'Đã giữ tạm 6 chỗ ngày 30/12'], ['3 tiếng', 'Gửi ảnh thật Cầu Vàng, phố cổ, biển'], ['20 tiếng', 'Chia sẻ nhóm công ty, giữ giá nhóm']] },
      reply: 'Khách gửi họ tên, SĐT · dừng bám đuổi' },
    capi: { tieuDe: 'Gửi đơn đặt tour cho Facebook', event: 'Purchase', nhan: 'SỰ KIỆN MUA HÀNG', giaTri: '24.540.000đ', pk: 'Purchase · 24.540.000đ',
      dong: [['Đơn đặt tour', '#BX23131 · Tour Đà Nẵng 4N3Đ · 6 khách'], ['Nguồn khách', 'Bình luận quảng cáo Tour Đà Nẵng → Messenger'], ['Giá trị', '24.540.000 VND'], ['Event ID', 'BX23131-PURCHASE (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện mua hàng' },
  },
  donHang: {
    loai: 'Đơn đặt tour', ma: '#BX23131', spNhan: 'Tour',
    sp: 'Tour Đà Nẵng – Hội An – Bà Nà 4N3Đ', bien: 'Ghép đoàn · 6 khách · 3 phòng đôi', img: 'cau-vang', gia: '24.540.000đ',
    phi: ['Đã cọc', '30% · 7.362.000đ'], nguoiNhan: 'Khách đặt · Số điện thoại', dcNhan: 'Ngày khởi hành · Điểm đón',
    nv: { ten: 'Điều hành Biển Xanh', av: 'BX' },
    ten: 'Nguyễn Hoài An', sdt: '0938615724', dc: 'Thứ Tư 30/12/2026 · đón tại sân bay Đà Nẵng · 6 khách', gio: '11:05 · 24/11/2026',
  },
};
