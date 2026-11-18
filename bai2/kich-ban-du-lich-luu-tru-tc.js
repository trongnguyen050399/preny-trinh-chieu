/* Bài 2 (video demo ngang tự chạy): DU LỊCH, LƯU TRÚ (Du Lịch Mây Ngàn: tour Đà Lạt, resort, combo nghỉ dưỡng), nhóm thương mại điện tử,
   ngành đặt chỗ ("lên đơn" là đơn đặt tour). Viết lại 18/11/2026 theo mạch mới người dùng chốt (mẫu demo/bai2/kich-ban-yen-chung-tuoi-tc.js):
   - 1 cảnh duy nhất: quảng cáo tour Đà Lạt 3N2Đ cho cả nhà, 2 khách bình luận (hỏi giá, hỏi thời tiết) → trả lời cả 2 "Mình check ib nha"
     → AI nhắn inbox trước: giá + đúng ảnh quảng cáo, hỏi lịch trình (ngày đi, số người, có ông bà, bé không)
     → khách trả lời (ca khó của ngành): 6 người, ông bà ngoài 70, bà yếu chân, sợ ông bà mệt → AI lên lịch trình nhẹ, báo giá cả nhà
     → hỏi loại phòng → khách chọn phòng tầng 1 nhìn ra vườn → AI xin họ tên, SĐT, giờ bay → khách im
     → gắn thẻ (3 hashtag quảng cáo + #baogia + phòng khách chọn) → bám đuổi 3 tin 15 phút, 3 tiếng, 20 tiếng
     → khách gửi họ tên, SĐT, giờ bay (ca khó kiểm tra dữ liệu: ngày bay lệch ngày tour) → tóm tắt đơn đặt tour (có xe lăn cho bà)
     → Purchase lên Facebook → đơn tự động, điều hành bấm xác nhận → cảm ơn + 5 dịch vụ giảm giá
     → Zalo sau chuyến đi: hỏi thăm, được đặt nhiều, voucher → tổng kết → logo.
   - Chỉ 1 tour từ đầu tới cuối (tour Đà Lạt 3N2Đ trọn gói), không có đoạn khách hỏi gói khác.
   Không có tin nhắc trước ngày khởi hành (Preny chưa có tính năng này), không có tin "đơn đang giao".
   Tên công ty, lịch trình, giá, chính sách trẻ em, khách, SĐT: minh họa của bài 1 (demo/kich-ban/du-lich-luu-tru-tc.js). Tự đặt thêm: khách
   bình luận thứ 2, phòng nhìn ra hồ bơi / nhìn ra vườn, giá gốc và % giảm của 5 dịch vụ. Ảnh: Unsplash có sẵn của bài 1 (demo/assets/img/u/). */
window.VN_KB = {
  ten: 'Du lịch, lưu trú video ngang',
  ketSub: 'Để AI tư vấn và chốt đơn đặt tour cho doanh nghiệp du lịch của bạn',
  shop: { ten: 'Du Lịch Mây Ngàn', av: 'MN', mau: '#15803D', sub: 'Thường trả lời ngay' },
  anh: {
    'da-lat': '../assets/img/u/1586595276832-b6840c79bdfc_800x800.jpg',       // ga Đà Lạt
    'chua-da-lat': '../assets/img/u/1603053342277-4e49271c9a9d_800x800.jpg',  // chùa Linh Phước
    'rung-thong': '../assets/img/u/1580824378537-e119885b93f7_800x800.jpg',   // rừng thông có lối đi
    'ho-thong': '../assets/img/u/1628873525512-82ad482c44ae_800x800.jpg',     // hồ nước, rừng thông
    'doi-che': '../assets/img/u/1579436938466-92a9ba75812f_800x800.jpg',      // đồi chè
    'resort': '../assets/img/u/1711114378532-bab7d55311f3_800x800.jpg',       // biệt thự resort có hồ bơi
    'phong': '../assets/img/u/1696217612904-64c78f5c588a_800x800.jpg',        // phòng 2 giường nhìn ra cây xanh
    'ong-ba': '../assets/img/u/1554331292-735256644d5f_800x800.jpg',          // ông bà ngắm đồi xanh
    'gia-dinh': '../assets/img/u/1523225918988-00624e6d8fee_800x800.jpg',     // ông bà kéo vali ngắm biển
    'xe-du-lich': '../assets/img/u/1570125909232-eb263c188f7e_800x800.jpg',   // xe du lịch
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= BÌNH LUẬN QUẢNG CÁO → INBOX (cảnh duy nhất) ================= */
    { k: 'canh', nhan: 'Bình luận quảng cáo → Inbox', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'da-lat', nhan: 'MESSENGER', tieuDe: 'Tour Đà Lạt 3N2Đ · Nhắn tư vấn lịch trình', nut: 'Gửi tin nhắn',
        text: 'Đà Lạt cả nhà cùng đi 🌲 Tour 3 ngày 2 đêm xe riêng đón sân bay, lịch trình nhẹ cho ông bà, resort có hồ bơi. #tourdalat #giadinh #mobile',
      }, d: 1500 },
    { k: 'cap', e: 'Bình luận hỏi giá', t: 'Khách hỏi giá ngay dưới quảng cáo', s: 'Một khách khác hỏi thời tiết Đà Lạt' },
    { k: 'cmt', i: 0, ten: 'Thu Lan', av: 'TL', text: 'Tour 3N2Đ này giá sao ạ?' },
    { k: 'cmt', i: 1, ten: 'Gia Huy', av: 'GH', text: 'Tháng 12 Đà Lạt lạnh không, cần mang gì ạ?' },
    { k: 'cap', e: 'Trả lời cả 2 bình luận', t: 'Trả lời ngắn gọn, mời khách vào inbox', s: 'Tư vấn chi tiết trong tin nhắn riêng' },
    { k: 'rep', i: 0, text: 'Mình check ib nha 💬' },
    { k: 'rep', i: 1, text: 'Mình check ib nha 💬' },
    { k: 'ms', ref: { loai: 'cmt', img: 'da-lat', dong1: 'Bạn đã bình luận về quảng cáo của Du Lịch Mây Ngàn', dong2: '"Tour 3N2Đ này giá sao ạ?"' }, gio: '14:47' },
    { k: 'cap', e: 'AI nhắn trước', t: 'Inbox trước: báo giá, gửi đúng ảnh quảng cáo', s: 'Khách không cần mô tả lại tour' },
    { k: 'ai', text: 'Dạ chào chị Lan, tour **Đà Lạt 3N2Đ** giá **4.200.000đ/người lớn** ạ, gồm xe riêng, 2 đêm resort, ăn sáng, vé tham quan.' },
    { k: 'ai', img: 'da-lat' },
    { k: 'ai', text: 'Nhà mình đi **ngày nào, mấy người**, có ông bà hay bé không để em lên lịch trình nha?' },

    { k: 'cap', e: 'Khách trả lời', t: 'Ông bà ngoài 70, bà yếu chân → lịch trình nhẹ', s: 'Không leo dốc, resort có thang máy' },
    { k: 'kh', text: 'Đi 20/12, nhà c 6 người: ông bà ngoài 70, 2 bé 8t với 4t. Bà yếu chân, c sợ ông bà mệt' },
    { k: 'ai', text: 'Dạ em lên **lịch trình nhẹ**: xe riêng, mỗi ngày **2–3 điểm đường bằng**, trưa về nghỉ, resort **có thang máy** ạ.' },
    { k: 'ai', text: 'Cả nhà 6 người **18.900.000đ**, bé 8 tuổi giảm 50%, bé 4 tuổi **miễn phí** ạ.' },
    { k: 'cap', e: 'Hỏi đúng thứ còn thiếu', t: 'Có ngày rồi: AI hỏi tiếp loại phòng', s: 'Gửi ảnh để khách chọn nhanh' },
    { k: 'ai', text: 'Resort còn **2 phòng tầng 1**, loại **nhìn ra hồ bơi** và **nhìn ra vườn**, cùng giá ạ. Chị thích loại nào ạ?' },
    { k: 'ai', imgs: ['resort', 'phong'] },
    { k: 'kh', text: 'Nhìn ra vườn cho yên tĩnh em' },
    { k: 'cap', e: 'Xin thông tin đặt tour', t: 'Chọn xong: AI xin họ tên, SĐT, giờ bay' },
    { k: 'ai', text: 'Dạ em ghi **2 phòng tầng 1 nhìn ra vườn**, 20–22/12. Chị gửi em **họ tên, SĐT** và **giờ bay đáp** để em xếp xe đón nha.' },

    // Khách im sau khi được xin họ tên, SĐT, giờ bay → màn hình phụ: gắn thẻ (3 hashtag quảng cáo + thẻ từ cuộc chat), bám đuổi 3 tin
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Chưa gửi SĐT: Preny tự gắn thẻ khách', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi theo thẻ', t: '3 tin ngắn: 15 phút, 3 tiếng, 20 tiếng', s: 'Chỉ nói về đúng tour khách đã chọn' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Chị Lan ơi, em đang giữ tạm **2 phòng tầng 1 nhìn ra vườn** ngày 20/12 cho nhà mình ạ. Chị gửi em tên, SĐT để em giữ chắc nha 😊' },
    { k: 'p', a: 'r1', d: 900 },
    { k: 'time', nhan: '3 tiếng sau', gio: '17:49', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Em gửi chị ảnh thật phòng và mấy điểm **đường bằng** trong lịch trình nha 📸 Ông bà đi nhẹ nhàng, không leo dốc.' },
    { k: 'ai', imgs: ['phong', 'doi-che', 'ho-thong'] },
    { k: 'p', a: 'r2', d: 900 },
    { k: 'time', nhan: '20 tiếng sau', gio: '10:49', ngay: 'T5 19/11/2026', d: 700 },
    { k: 'ai', text: 'Chị chỉ cần gửi **họ tên, SĐT** là em giữ chỗ liền ạ. Đặt trong hôm nay em **giảm 5%** còn **17.955.000đ**, tặng **bữa tối lẩu gà lá é** 🎁' },
    { k: 'p', a: 'r3', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 3, khách gửi tên, SĐT, giờ bay', s: 'AI kiểm tra ngay thông tin khách gửi' },
    { k: 'kh', text: 'Trần Thu Lan 0904 375 128, bay đáp Liên Khương 10h ngày 21/12' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'cap', e: 'Kiểm tra dữ liệu', t: 'Ngày bay lệch ngày tour → hỏi lại ngay lập tức' },
    { k: 'ai', text: 'Dạ tour em giữ ngày **20/12**, chị bay đáp ngày **21/12** hay **20/12** ạ, để em xếp xe đón đúng ngày nha.' },
    { k: 'kh', text: 'À 20/12 nha em, c gõ nhầm. Bà cần xe lăn ở sân bay nha' },
    { k: 'cap', e: 'Chốt đơn đặt tour', t: 'Tự tổng hợp đơn: tour, ngày đi, phòng, xe đón' },
    { k: 'ai', text: 'Dạ chị kiểm tra lại đơn đặt tour giúp em nha:\n– Tour Đà Lạt 3N2Đ · 20/12 – 22/12\n– 4 người lớn, 2 bé · 2 phòng tầng 1 nhìn ra vườn\n– Xe riêng đón Liên Khương 10h · xe lăn cho bà\n– Tổng: **17.955.000đ** (đã giảm 5%)\n– Trần Thu Lan · 0904 375 128\nChị xác nhận giúp em đơn này nha.', nut: 'Quản lý đặt chỗ', d: 3600 },
    { k: 'cap', e: 'Xong', t: 'Khách chỉ cần nói "Ok em"' },
    { k: 'kh', text: 'Ok em' },
    { k: 'ai', text: 'Dạ em lên đơn, xếp xe riêng và xe lăn cho bà ở Liên Khương liền nha ⚡', d: 1300 },

    // Chốt đơn → màn hình phụ: gửi đơn đặt tour cho Facebook → đơn tự động → điều hành xác nhận
    { k: 'cap', e: 'Gửi đơn về Facebook', t: 'Sự kiện mua hàng gửi ngay lên Facebook', s: 'Quảng cáo tối ưu theo đơn thật' },
    { k: 'panel', v: 'capi', d: 900 },
    { k: 'p', a: 'flow', d: 1500 }, { k: 'p', a: 'event', d: 1300 }, { k: 'p', a: 'ok', d: 2200 },
    { k: 'cap', e: 'Đơn đặt tour tự động', t: 'Đơn tự lên Preny. Không cần ghi tay.' },
    { k: 'panel', v: 'don', d: 900 },
    { k: 'p', a: 'f1', d: 550 }, { k: 'p', a: 'f2', d: 550 }, { k: 'p', a: 'f3', d: 550 }, { k: 'p', a: 'f4', d: 550 },
    { k: 'p', a: 'cho', d: 900 },
    { k: 'cap', e: 'Nhân viên xác nhận', t: 'Báo điều hành: bấm 1 lần là đơn lên', s: 'Người thật kiểm tra lại phòng, xe đón, xe lăn' },
    { k: 'p', a: 'nv', d: 1700 }, { k: 'p', a: 'bam', d: 1100 },
    { k: 'p', a: 'xn', d: 3000 },
    { k: 'panel', v: null, d: 500 },

    // Đặt xong: tin cảm ơn kèm 5 dịch vụ đang giảm giá (deck.afterSale.sp của bài 1)
    { k: 'cap', e: 'Bán thêm sau đặt tour', t: 'Cảm ơn khách, gửi kèm 5 dịch vụ đang giảm giá', s: 'Khách bấm đặt thêm ngay trong Messenger' },
    { k: 'ai', text: 'Dạ cảm ơn chị Lan nha 🎉 Tour đã được xác nhận. Mấy dịch vụ này đang giảm giá cho cả nhà, chị xem thử nha:' },
    { k: 'car', sp: [
        { img: 'ong-ba', ten: 'Chụp ảnh gia đình cùng ông bà', gia: '1.200.000đ', cu: '1.500.000đ', giam: '-20%' },
        { img: 'doi-che', ten: 'Tiệc trà chiều trên đồi chè', gia: '450.000đ', cu: '550.000đ', giam: '-18%' },
        { img: 'phong', ten: 'Nâng phòng gia đình thông nhau', gia: '900.000đ', cu: '1.100.000đ', giam: '-18%' },
        { img: 'xe-du-lich', ten: 'Xe riêng thêm 1 ngày tự do', gia: '1.500.000đ', cu: '1.800.000đ', giam: '-17%' },
        { img: 'rung-thong', ten: 'Dã ngoại rừng thông xe điện', gia: '800.000đ', cu: '1.000.000đ', giam: '-20%' },
      ], d: 5200 },

    // Chăm sóc qua Zalo: sau chuyến đi (20–22/12). Không có tin nhắc trước ngày khởi hành.
    { k: 'zalo', gio: '19:30', ngay: 'T4 23/12/2026', chip: 'Sau chuyến đi', d: 1500 },
    { k: 'cap', e: 'Chăm sóc sau bán qua Zalo', t: 'Sau chuyến đi: AI hỏi thăm cả nhà', s: 'Xin đánh giá ngay trong tin Zalo OA của công ty' },
    { k: 'zns', zns: {
        img: 'ong-ba', tieuDe: 'Chị Lan ơi, ông bà đi Đà Lạt có mệt không ạ?',
        noiDung: 'Mây Ngàn cảm ơn cả nhà đã đi tour **Đà Lạt 3N2Đ** (đơn **#MN51220** · 20–22/12). Chị đánh giá giúp Mây Ngàn nha!',
        nut: 'Đánh giá chuyến đi',
      }, d: 4200 },
    { k: 'cap', e: 'ZBS · Được đặt nhiều', t: '1 tuần sau: gửi tour được đặt nhiều qua Zalo', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'T4 30/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['gia-dinh', 'resort', 'rung-thong', 'chua-da-lat'], nhan: 'ĐƯỢC ĐẶT NHIỀU TUẦN NÀY', mau: '#F97316',
        tieuDe: '🔥 Tour được đặt nhiều nhất tại Mây Ngàn',
        noiDung: '**Tour Đà Lạt mùa hoa**, combo resort Đà Lạt 2 đêm và combo nghỉ biển 3N2Đ đang được khách chọn nhiều nhất tuần qua.',
        nut: 'Xem lịch trình',
      }, d: 4600 },
    { k: 'cap', e: 'ZBS · Ưu đãi khách cũ', t: '1 tuần sau nữa: gửi voucher cho chuyến tới', s: 'Kéo khách quay lại đặt tiếp, không cần khách nhắn' },
    { k: 'zstamp', gio: '19:30', ngay: 'T4 06/01/2027', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['gia-dinh', 'resort', 'doi-che', 'ho-thong'], nhan: 'KHÁCH CŨ · GIẢM 10%',
        tieuDe: 'Tặng chị Lan voucher 10%',
        noiDung: 'Nhập mã **MAYNGAN10** giảm **10%** mọi tour, combo cho chuyến đi tiếp theo. Hạn dùng đến 30/06/2027.',
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
    tag: { av: 'TL', ten: 'Trần Thu Lan', sub: 'Messenger · bình luận quảng cáo Tour Đà Lạt 3N2Đ',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#tourdalat', 'qt hot'], ['#giadinh', 'qt hot'], ['#mobile', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#PhongNhinRaVuon', 'qt']]]],
      im: 'Khách im từ 14:49, sau khi được xin tên, SĐT, giờ bay',
      rule: { lb: 'Bám đuổi theo thẻ #tourdalat', tieuDe: '3 tin ngắn về tour khách đã chọn',
              dong: [['15 phút', 'Đã giữ 2 phòng tầng 1 cho khách'], ['3 tiếng', 'Gửi ảnh thật phòng, điểm đường bằng'], ['20 tiếng', 'Chỉ cần tên, SĐT là giữ chỗ']] },
      reply: 'Khách gửi tên, SĐT, giờ bay · dừng bám đuổi' },
    capi: { tieuDe: 'Gửi đơn đặt tour cho Facebook', event: 'Purchase', nhan: 'SỰ KIỆN MUA HÀNG', giaTri: '17.955.000đ', pk: 'Purchase · 17.955.000đ',
      dong: [['Đơn đặt tour', '#MN51220 · Tour Đà Lạt 3N2Đ · 6 khách'], ['Nguồn khách', 'Bình luận quảng cáo Tour Đà Lạt → Messenger'], ['Giá trị', '17.955.000 VND'], ['Event ID', 'MN51220-PURCHASE (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện mua hàng' },
  },
  donHang: {
    loai: 'Đơn đặt tour', ma: '#MN51220', spNhan: 'Tour',
    sp: 'Tour Đà Lạt 3N2Đ trọn gói', bien: '4 người lớn, 2 bé · 2 phòng tầng 1 nhìn ra vườn', img: 'da-lat', gia: '17.955.000đ',
    phi: ['Phụ thu', 'không có'], nguoiNhan: 'Khách đặt · Số điện thoại', dcNhan: 'Ngày khởi hành · Điểm đón',
    nv: { ten: 'Điều hành Thu Hương', av: 'TH' },
    ten: 'Trần Thu Lan', sdt: '0904 375 128', dc: 'Chủ Nhật 20/12/2026 · đón sân bay Liên Khương 10:00 · xe lăn cho bà', gio: '11:05 · 19/11/2026',
  },
};
