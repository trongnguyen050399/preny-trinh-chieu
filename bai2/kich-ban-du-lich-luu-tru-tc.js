/* Kịch bản Bài 2 (video demo NGANG 16:9 tự chạy): DU LỊCH, LƯU TRÚ (Du Lịch Mây Ngàn: tour Đà Lạt, resort, combo nghỉ dưỡng), nhóm thương mại điện tử,
   ngành đặt chỗ. Làm 18/11/2026 theo mạch mẫu YaMe (demo/bai2/kich-ban-yame.js) và video-ngang/HUONG-DAN-BAI2.md.
   Nội dung lấy từ bài 1 (demo/kich-ban/du-lich-luu-tru-tc.js).
   Mạch:
   - Tình huống 1: bài viết tour săn mây, cắm trại → khách hỏi giá, khách khác hỏi có lạnh không → trả lời 1 câu chung → inbox: giá, card, ảnh
     → hỏi ngày đi, số người → khách trả lời → xin họ tên, SĐT → tóm tắt đơn đặt tour.
   - Tình huống 2: quảng cáo tour Đà Lạt 3N2Đ → chị Lan hỏi giá (6 người, ông bà ngoài 70, 2 bé) → AI gửi đúng ảnh quảng cáo + giá, hỏi lịch trình
     → khách chụp combo resort "Này thì sao" → AI nhận ra → khách im → gắn thẻ, bám đuổi 3 tin → khách gửi lịch trình, bà yếu chân (ca khó)
     → AI lên lịch trình nhẹ, hỏi chọn tour hay combo, chọn phòng → xin họ tên, SĐT (khách xin xe lăn cho bà) → đơn đặt tour → sự kiện mua hàng
     → điều hành xác nhận → cảm ơn + 5 dịch vụ đặt thêm → Zalo sau chuyến đi (hỏi thăm, được đặt nhiều, voucher) → tổng kết → logo.
   Không có tin nhắc trước ngày khởi hành (Preny chưa có tính năng này), không có tin "đơn đang giao".
   Tên công ty, lịch trình, giá, khách, SĐT: dữ liệu minh họa của bài 1. Tự đặt thêm: khách tình huống 1 (Lê Ngọc Hân, 0937 518 264), giá combo resort
   3.000.000đ/phòng (giá gốc bài 1), phòng nhìn ra hồ bơi / nhìn ra vườn, giá gốc và % giảm của 5 dịch vụ đặt thêm.
   Ảnh: ảnh Unsplash có sẵn của bài 1 (demo/assets/img/u/). */
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

    /* ================= TÌNH HUỐNG 1 · BÀI VIẾT → BÌNH LUẬN → INBOX ================= */
    { k: 'canh', nhan: 'Tình huống 1 · Bình luận xin giá → Inbox', gio: '20:52' },
    { k: 'fb', post: {
        gio: '4 giờ', img: 'rung-thong', likes: '3,2K', soCmt: '146 bình luận',
        text: 'Săn mây Đà Lạt, ngủ lều giữa rừng thông 🌲 Tour 2 ngày 1 đêm cho nhóm bạn: BBQ tối, đốt lửa trại, sáng sớm lên đồi đón biển mây.',
      }, d: 1600 },
    { k: 'cap', e: 'Bình luận xin giá', t: 'Khách hỏi giá ngay dưới bài viết', s: 'Một khách khác hỏi thời tiết ở bình luận kế bên' },
    { k: 'cmt', i: 0, ten: 'Ngọc Hân', av: 'NH', text: 'Tour này giá sao ạ?' },
    { k: 'cmt', i: 1, ten: 'Gia Huy', av: 'GH', text: 'Tháng 1 ngủ lều có lạnh lắm không, cần mang gì ạ?' },
    { k: 'cap', e: 'Trả lời cả 2 bình luận', t: 'Trả lời ngắn gọn, mời khách vào inbox', s: 'Tư vấn chi tiết trong tin nhắn riêng' },
    { k: 'rep', i: 0, text: 'Mình check ib nha 💬' },
    { k: 'rep', i: 1, text: 'Mình check ib nha 💬' },

    { k: 'ms', ref: { loai: 'cmt', img: 'rung-thong', dong1: 'Bạn đã bình luận về bài viết của Du Lịch Mây Ngàn', dong2: '"Tour này giá sao ạ?"' }, gio: '20:54' },
    { k: 'cap', e: 'Tự động báo giá', t: 'Inbox trước: báo giá, gửi ảnh thật', s: 'Viết ngắn gọn, tự nhiên như người bán' },
    { k: 'ai', text: 'Dạ chào chị Hân, tour **săn mây, cắm trại 2N1Đ** giá **1.890.000đ/khách** ạ, nhóm từ 8 người **giảm 10%**.' },
    { k: 'ai', card: { title: 'Tour săn mây, cắm trại rừng thông Đà Lạt 2 ngày 1 đêm · lều, BBQ, lửa trại', gia: '1.890.000đ/khách' } },
    { k: 'ai', imgs: ['rung-thong', 'ho-thong', 'doi-che'] },
    { k: 'ai', text: 'Nhóm mình **đi ngày nào, mấy người** để em giữ chỗ nha?' },
    { k: 'cap', e: 'Hỏi ngày đi, số người', t: 'Khách trả lời 1 câu, AI tính đúng giá nhóm', s: 'Kiểm tra luôn còn chỗ ngày khách đi' },
    { k: 'kh', text: 'nhóm 8 đứa, đi thứ 7 2/1 nha e' },
    { k: 'ai', text: 'Dạ nhóm 8 bạn còn **1.701.000đ/khách**, cả nhóm **13.608.000đ** ạ. Chị gửi em **họ tên và SĐT** người đặt nha 😊' },
    { k: 'cap', e: 'Chốt đơn đặt tour', t: 'Xin họ tên, SĐT: khách đưa đủ', s: 'AI tóm tắt đơn ngay trong chat' },
    { k: 'kh', text: 'Lê Ngọc Hân, 0937 518 264' },
    { k: 'ai', text: 'Dạ em giữ chỗ cho nhóm chị rồi nha:\n– Tour săn mây, cắm trại 2N1Đ\n– Thứ Bảy 2/1/2027 · 8 khách\n– **13.608.000đ** (đã giảm 10%)\n– Lê Ngọc Hân · 0937 518 264\nĐiều hành gọi chị xác nhận liền ạ 🎉', d: 3800 },

    /* ================= TÌNH HUỐNG 2 · QUẢNG CÁO → MESSENGER ================= */
    { k: 'canh', nhan: 'Tình huống 2 · Quảng cáo → Messenger', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'da-lat', nhan: 'MESSENGER', tieuDe: 'Tour Đà Lạt 3N2Đ · Nhắn tư vấn lịch trình', nut: 'Gửi tin nhắn',
        text: 'Đà Lạt cả nhà cùng đi 🌲 Tour 3 ngày 2 đêm xe riêng đón sân bay, lịch trình nhẹ cho ông bà, resort có hồ bơi. #tourdalat #giadinh #mobile',
      }, d: 1500 },
    { k: 'cap', e: 'Quảng cáo Facebook', t: 'Khách bấm "Gửi tin nhắn" từ quảng cáo', s: 'Hỏi gì, AI trả lời ngay lập tức' },
    { k: 'tap', d: 1100 },
    { k: 'ms', ref: { loai: 'ad', img: 'da-lat', dong1: 'Lan đã trả lời một quảng cáo', dong2: 'Tour Đà Lạt 3N2Đ · Cả nhà cùng đi' }, gio: '14:47', d: 900 },
    { k: 'kh', text: 'Tour này giá sao em? Nhà c 6 người, có ông bà ngoài 70 với 2 bé' },
    { k: 'cap', e: 'Khách hỏi giá', t: 'AI gửi đúng tour trên quảng cáo kèm giá', s: 'Khách không cần mô tả lại tour' },
    { k: 'ai', text: 'Dạ chào chị Lan, tour **Đà Lạt 3N2Đ** trên quảng cáo giá **4.200.000đ/người lớn** ạ, gồm xe riêng, 2 đêm resort, ăn sáng, vé tham quan.' },
    { k: 'ai', img: 'da-lat' },
    { k: 'ai', text: 'Chị cho em xin **ngày đi, tuổi 2 bé** và ông bà **đi bộ, leo dốc** có ổn không nha.' },
    { k: 'cap', e: 'Không hỏi lại khách', t: 'Khách chụp gói khác hỏi "Này thì sao"', s: 'Chỉ một câu cộc lốc, không ghi tên gói' },
    { k: 'kh', shot: { img: 'resort', cap: 'Combo resort Đà Lạt 2 đêm 🏡 Biệt thự có hồ bơi, ăn sáng mỗi ngày' } },
    { k: 'kh', text: 'Này thì sao' },
    { k: 'cap', e: 'Nhận diện gói từ ảnh', t: 'Đúng gói. Đúng giá. Còn phòng.', s: 'AI đọc ảnh khách gửi, khớp với các tour, combo của công ty' },
    { k: 'ai', text: 'Dạ đây là **combo resort Đà Lạt 2 đêm** ạ, giá **3.000.000đ/phòng**, gồm ăn sáng, chưa gồm xe và tham quan.' },
    { k: 'ai', card: { title: 'Combo resort Đà Lạt 2 đêm · phòng gia đình · có thang máy, hồ bơi', gia: '3.000.000đ/phòng' } },
    { k: 'ai', img: 'resort' },
    { k: 'ai', text: 'Chị cho em xin **ngày đi, tuổi 2 bé** để em tư vấn cả 2 gói nha.' },

    // Khách im → màn hình phụ: gắn thẻ (3 hashtag của quảng cáo + thẻ từ cuộc chat), bám đuổi 3 tin theo thẻ
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Preny tự gắn thẻ đúng tour khách quan tâm', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi theo thẻ', t: '3 tin ngắn: 15 phút, 3 tiếng, 20 tiếng', s: 'Chỉ nói về đúng tour khách quan tâm' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Chị Lan ơi, tour có **lịch trình nhẹ** cho ông bà: xe riêng, điểm đường bằng, trưa về nghỉ ạ. Chị nhắn em ngày đi nha 😊' },
    { k: 'p', a: 'r1', d: 900 },
    { k: 'time', nhan: '3 tiếng sau', gio: '17:49', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Em gửi chị ảnh thật phòng và đồi chè Cầu Đất nha 📸 Resort **có thang máy** cho ông bà.' },
    { k: 'ai', imgs: ['phong', 'doi-che'] },
    { k: 'p', a: 'r2', d: 900 },
    { k: 'time', nhan: '20 tiếng sau', gio: '10:49', ngay: 'T5 19/11/2026', d: 700 },
    { k: 'ai', text: 'Đặt trong hôm nay em **giảm 5%** và tặng **bữa tối lẩu gà lá é** cho cả nhà ạ 🎁' },
    { k: 'p', a: 'r3', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 3, khách gửi lịch trình', s: 'Ca khó: bà yếu chân, sợ ông bà mệt' },
    { k: 'kh', text: 'Đi 20/12, bay HN đáp Liên Khương 10h. Bé 8t với 4t. Bà yếu chân, c sợ ông bà mệt' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },

    { k: 'cap', e: 'Lịch trình nhẹ cho ông bà', t: 'Xe riêng, điểm đường bằng, trưa về nghỉ', s: 'Rồi chủ động hỏi: tour trọn gói hay combo resort?' },
    { k: 'ai', text: 'Dạ em lên **lịch trình nhẹ**: xe riêng, mỗi ngày **2–3 điểm đường bằng**, trưa về nghỉ, không leo dốc ạ.' },
    { k: 'ai', text: 'Tour trọn gói cả nhà **17.955.000đ** (đã giảm 5%), bé 4 tuổi miễn phí. Chị lấy **tour trọn gói** hay **combo resort** ạ?' },
    { k: 'kh', text: 'Lấy tour trọn gói em' },
    { k: 'cap', e: 'Hỏi đúng thứ còn thiếu', t: 'Khách chọn tour: AI hỏi tiếp loại phòng', s: 'Gửi ảnh 2 loại phòng để khách chọn nhanh' },
    { k: 'ai', text: 'Dạ resort còn **2 phòng tầng 1**: loại **nhìn ra hồ bơi** và **nhìn ra vườn**, cùng giá ạ. Chị thích loại nào?' },
    { k: 'ai', imgs: ['resort', 'phong'] },
    { k: 'kh', text: 'Nhìn ra vườn cho yên tĩnh em' },
    { k: 'ai', text: 'Dạ em giữ **2 phòng tầng 1 nhìn ra vườn** ạ. Chị gửi em **họ tên, SĐT** người đặt nha.' },
    { k: 'cap', e: 'Ghi đủ yêu cầu', t: 'Khách xin xe lăn cho bà → AI ghi vào đơn' },
    { k: 'kh', text: 'Trần Thu Lan 0904 375 128. Bà cần xe lăn ở sân bay nha em' },
    { k: 'cap', e: 'Chốt đơn đặt tour', t: 'Tự tổng hợp đơn: tour, ngày đi, phòng, xe đón' },
    { k: 'ai', text: 'Dạ chị kiểm tra lại đơn đặt tour giúp em nha:\n– Tour Đà Lạt 3N2Đ · 20/12 – 22/12\n– 4 người lớn, 2 bé · 2 phòng tầng 1\n– Xe riêng đón Liên Khương 10h · xe lăn cho bà\n– Tổng: **17.955.000đ** (đã giảm 5%)\n– Trần Thu Lan · 0904 375 128\nChị xác nhận giúp em nha.', nut: 'Quản lý đặt chỗ', d: 3600 },
    { k: 'cap', e: 'Xong', t: 'Khách chỉ cần nói "Ok em"' },
    { k: 'kh', text: 'Ok em' },
    { k: 'ai', text: 'Dạ em lên đơn đặt tour cho cả nhà liền nha ⚡', d: 1300 },

    // Chốt đơn → màn hình phụ: gửi sự kiện mua hàng lên Facebook → đơn đặt tour tự động → điều hành xác nhận
    { k: 'cap', e: 'Gửi đơn về Facebook', t: 'Sự kiện mua hàng gửi ngay lên Facebook', s: 'Quảng cáo tối ưu theo đơn thật' },
    { k: 'panel', v: 'capi', d: 900 },
    { k: 'p', a: 'flow', d: 1500 }, { k: 'p', a: 'event', d: 1300 }, { k: 'p', a: 'ok', d: 2200 },
    { k: 'cap', e: 'Đơn đặt tour tự động', t: 'Đơn tự lên trên Preny. Không cần ghi tay.' },
    { k: 'panel', v: 'don', d: 900 },
    { k: 'p', a: 'f1', d: 550 }, { k: 'p', a: 'f2', d: 550 }, { k: 'p', a: 'f3', d: 550 }, { k: 'p', a: 'f4', d: 550 },
    { k: 'p', a: 'cho', d: 900 },
    { k: 'cap', e: 'Điều hành xác nhận', t: 'Báo điều hành: bấm 1 lần là đơn lên', s: 'Người thật kiểm tra lại phòng, xe đón, xe lăn' },
    { k: 'p', a: 'nv', d: 1700 }, { k: 'p', a: 'bam', d: 1100 },
    { k: 'p', a: 'xn', d: 3000 },
    { k: 'panel', v: null, d: 500 },

    // Đặt xong: tin cảm ơn kèm 5 dịch vụ đặt thêm (deck.afterSale.sp của bài 1)
    { k: 'cap', e: 'Bán thêm sau đặt tour', t: 'Cảm ơn khách, gửi kèm 5 dịch vụ đang giảm giá', s: 'Khách bấm đặt thêm ngay trong Messenger' },
    { k: 'ai', text: 'Dạ cảm ơn chị Lan nha 🎉 Tour đã được xác nhận. Mấy dịch vụ này đang giảm giá, chị xem thử nha:' },
    { k: 'car', sp: [
        { img: 'ong-ba', ten: 'Chụp ảnh gia đình cùng ông bà', gia: '1.200.000đ', cu: '1.500.000đ', giam: '-20%' },
        { img: 'doi-che', ten: 'Tiệc trà chiều trên đồi chè', gia: '450.000đ', cu: '550.000đ', giam: '-18%' },
        { img: 'phong', ten: 'Nâng phòng gia đình thông nhau', gia: '900.000đ', cu: '1.100.000đ', giam: '-18%' },
        { img: 'xe-du-lich', ten: 'Xe riêng thêm 1 ngày tự do', gia: '1.500.000đ', cu: '1.800.000đ', giam: '-17%' },
        { img: 'rung-thong', ten: 'Dã ngoại rừng thông xe điện', gia: '800.000đ', cu: '1.000.000đ', giam: '-20%' },
      ], d: 5200 },

    // Chăm sóc qua Zalo: sau chuyến đi (20–22/12). Không có tin nhắc trước ngày khởi hành.
    { k: 'zalo', gio: '19:30', ngay: 'T4 23/12/2026', chip: 'Sau chuyến đi', d: 1500 },
    { k: 'cap', e: 'Chăm sóc qua Zalo', t: 'Sau chuyến đi: AI hỏi thăm cả nhà', s: 'Xin đánh giá ngay trong tin Zalo OA của công ty' },
    { k: 'zns', zns: {
        img: 'ong-ba', tieuDe: 'Chị Lan ơi, ông bà đi Đà Lạt có mệt không ạ?',
        noiDung: 'Mây Ngàn cảm ơn cả nhà đã đi tour **Đà Lạt 3N2Đ** (đơn **#MN51220** · 20–22/12). Chị đánh giá giúp Mây Ngàn nha!',
        nut: 'Đánh giá chuyến đi',
      }, d: 4200 },
    { k: 'cap', e: 'ZBS · Được đặt nhiều', t: '1 tuần sau: gửi tour được đặt nhiều', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'T4 30/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['gia-dinh', 'resort', 'rung-thong', 'chua-da-lat'], nhan: 'ĐƯỢC ĐẶT NHIỀU TUẦN NÀY', mau: '#F97316',
        tieuDe: '🔥 Tour được đặt nhiều nhất tại Mây Ngàn',
        noiDung: '**Tour Đà Lạt mùa hoa**, combo resort Đà Lạt 2 đêm và combo nghỉ biển 3N2Đ đang được khách chọn nhiều nhất tuần qua.',
        nut: 'Xem lịch trình',
      }, d: 4200 },
    { k: 'cap', e: 'ZBS · Ưu đãi khách cũ', t: '1 tuần sau nữa: gửi voucher cho chuyến tới', s: 'Kéo khách quay lại đặt tiếp, không cần khách nhắn' },
    { k: 'zstamp', gio: '19:30', ngay: 'T4 06/01/2027', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['gia-dinh', 'resort', 'doi-che', 'ho-thong'], nhan: 'KHÁCH CŨ · GIẢM 10%',
        tieuDe: 'Tặng chị Lan voucher 10%',
        noiDung: 'Nhập mã **MAYNGAN10** giảm **10%** mọi tour, combo cho chuyến đi tiếp theo. Hạn dùng đến 30/06/2027.',
        nut: 'Đặt tour ngay',
      }, d: 4400 },

    { k: 'tongket', d: 8500 },
    { k: 'outro', d: 5200 },
  ],
  // Slide tổng kết cuối video: giống hệt YaMe (nhóm thương mại điện tử)
  tongKet: { tieuDe: 'Quy trình Preny AI giúp', em: 'tăng tỷ lệ chốt đơn', cot: [
    { ten: 'Khách hàng', icon: 'users', dong: ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến'] },
    { ten: 'AI Chatbot', icon: 'bot', dong: ['Phản hồi nhanh tức thì', 'Kêu gọi khách hàng mua hàng', 'Lấy thông tin và chốt đơn'] },
    { ten: 'Bám đuổi', icon: 'bell', dong: ['Gửi 5 tin nhắn trong 7 ngày để bám đuổi khách hàng'] },
    { ten: 'Chốt đơn', icon: 'check', dong: ['Lên đơn', 'Gửi sự kiện mua hàng lên Facebook'] },
    { ten: 'Mua lại', icon: 'refresh', dong: ['Tự động gửi 1 tin nhắn mỗi tuần qua FB và Zalo', 'Sản phẩm bán chạy, giảm giá, sản phẩm mới'] },
  ] },
  panels: {
    tag: { av: 'TL', ten: 'Trần Thu Lan', sub: 'Messenger · từ quảng cáo Tour Đà Lạt 3N2Đ',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#tourdalat', 'qt hot'], ['#giadinh', 'qt hot'], ['#mobile', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#ComboResort', 'qt']]]],
      im: 'Khách im từ 14:49, sau khi được báo giá',
      rule: { lb: 'Bám đuổi theo thẻ #tourdalat', tieuDe: '3 tin ngắn về tour Đà Lạt 3N2Đ',
              dong: [['15 phút', 'Lịch trình nhẹ cho ông bà'], ['3 tiếng', 'Gửi ảnh thật phòng, đồi chè'], ['20 tiếng', 'Ưu đãi đặt trong ngày']] },
      reply: 'Khách gửi lịch trình · dừng bám đuổi' },
    capi: { tieuDe: 'Gửi đơn đặt tour cho Facebook', event: 'Purchase', nhan: 'SỰ KIỆN MUA HÀNG', giaTri: '17.955.000đ', pk: 'Purchase · 17.955.000đ',
      dong: [['Đơn đặt tour', '#MN51220 · Tour Đà Lạt 3N2Đ · 6 khách'], ['Nguồn khách', 'Quảng cáo Tour Đà Lạt → Messenger'], ['Giá trị', '17.955.000 VND'], ['Event ID', 'MN51220-PURCHASE (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện mua hàng' },
  },
  donHang: {
    loai: 'Đơn đặt tour', ma: '#MN51220', spNhan: 'Tour',
    sp: 'Tour Đà Lạt 3N2Đ trọn gói', bien: '4 người lớn, 2 bé · 2 phòng tầng 1', img: 'da-lat', gia: '17.955.000đ',
    phi: ['Phụ thu', 'không có'], nguoiNhan: 'Khách đặt · Số điện thoại', dcNhan: 'Ngày khởi hành · Điểm đón',
    nv: { ten: 'Điều hành Thu Hương', av: 'TH' },
    ten: 'Trần Thu Lan', sdt: '0904 375 128', dc: 'Chủ Nhật 20/12/2026 · đón sân bay Liên Khương 10:00', gio: '11:05 · 19/11/2026',
  },
};
