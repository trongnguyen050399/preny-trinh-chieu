/* Kịch bản Bài 2 (video demo NGANG 16:9 tự chạy): DU LỊCH, DU THUYỀN (Du Thuyền Hải Âu, vịnh Hạ Long), nhóm thương mại điện tử, ngành đặt chỗ.
   Làm 18/11/2026 theo mạch mẫu YaMe (demo/bai2/kich-ban-yame.js) và video-ngang/HUONG-DAN-BAI2.md. Nội dung lấy từ bài 1 (demo/kich-ban/du-lich-tc.js).
   Mạch:
   - Tình huống 1: bài viết du thuyền mới hạ thủy → khách hỏi giá, khách khác hỏi bé chèo kayak → trả lời 1 câu chung → inbox: giá cabin Deluxe,
     card, ảnh → hỏi ngày đi, số người → khách trả lời → xin họ tên, SĐT, địa chỉ đón → tóm tắt đơn đặt chỗ.
   - Tình huống 2: quảng cáo cabin Premium → anh Tuấn hỏi giá (kỷ niệm 10 năm cưới) → AI gửi đúng ảnh quảng cáo + giá, hỏi ngày đi, nơi đón
     → khách chụp hành trình 3 ngày 2 đêm "Này thì sao" → AI nhận ra → khách im → gắn thẻ, bám đuổi 3 tin → khách gửi lịch trình
     → AI hỏi chọn hành trình, chọn cabin → xin họ tên, SĐT, địa chỉ đón (thiếu số nhà → hỏi lại) → đơn đặt chỗ → sự kiện mua hàng
     → điều hành xác nhận → cảm ơn + 5 dịch vụ đặt thêm → Zalo sau chuyến đi (hỏi thăm, được đặt nhiều, voucher) → tổng kết → logo.
   Không có tin nhắc trước ngày khởi hành (Preny chưa có tính năng này), không có tin "đơn đang giao".
   Tên du thuyền, hành trình, giá, khách, SĐT: dữ liệu minh họa của bài 1. Tự đặt thêm: khách tình huống 1 (Hoàng Thu Thảo, 0983 216 547,
   25 Lý Thường Kiệt), vị trí cabin tầng 2 / tầng 3, giá gốc và % giảm của 5 dịch vụ đặt thêm. Ảnh: ảnh Unsplash có sẵn của bài 1 (demo/assets/img/u/). */
window.VN_KB = {
  ten: 'Du lịch, du thuyền video ngang',
  ketSub: 'Để AI tư vấn và chốt đơn đặt chỗ cho du thuyền của bạn',
  shop: { ten: 'Du Thuyền Hải Âu', av: 'HA', mau: '#1D4ED8', sub: 'Thường trả lời ngay' },
  anh: {
    'du-thuyen': '../assets/img/u/1680357981460-f00398bafd42_800x800.jpg',    // du thuyền trắng trên vịnh
    'du-thuyen-2': '../assets/img/u/1730270342669-d0e175b36293_800x800.jpg',  // du thuyền lúc hoàng hôn
    'cabin': '../assets/img/u/1785495640197-f3b4a86c018a_800x800.jpg',        // cabin rộng có sofa
    'cabin-2': '../assets/img/u/1580789724132-7f75abddbe0f_800x800.jpg',      // cabin cửa sổ tròn
    'bon-tam': '../assets/img/u/1781456507603-39653d5f434a_800x800.jpg',      // ban công nhìn ra vịnh
    'kayak-hang': '../assets/img/u/1697850084120-4896a446a04d_800x800.jpg',   // chèo kayak trong hang
    'hoang-hon': '../assets/img/u/1774281018832-c6df6eceec70_800x800.jpg',    // boong tàu lúc hoàng hôn
    'vinh': '../assets/img/u/1764645859246-8c6db98330a7_800x800.jpg',         // vịnh nhìn từ trên cao
    'tour-ngay': '../assets/img/u/1772867342647-6e6d87a0b014_800x800.jpg',    // tàu tham quan trong ngày
    'tau-tiec': '../assets/img/u/1732272933438-e04c490a293d_800x800.jpg',     // tàu buồm
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= TÌNH HUỐNG 1 · BÀI VIẾT → BÌNH LUẬN → INBOX ================= */
    { k: 'canh', nhan: 'Tình huống 1 · Bình luận xin giá → Inbox', gio: '21:08' },
    { k: 'fb', post: {
        gio: '3 giờ', img: 'du-thuyen-2', likes: '1,6K', soCmt: '78 bình luận',
        text: 'Du thuyền mới hạ thủy 🛳️ 2 ngày 1 đêm trên vịnh Hạ Long: ngủ đêm trên vịnh, chèo kayak trong hang, xe limousine đón tận nơi ở Hà Nội.',
      }, d: 1600 },
    { k: 'cap', e: 'Bình luận xin giá', t: 'Khách hỏi giá ngay dưới bài viết', s: 'Một khách khác hỏi về bé ở bình luận kế bên' },
    { k: 'cmt', i: 0, ten: 'Hoàng Thảo', av: 'HT', text: 'Giá 2 ngày 1 đêm sao ạ?' },
    { k: 'cmt', i: 1, ten: 'Minh Đức', av: 'MĐ', text: 'Bé 4 tuổi đi chèo kayak được không ạ?' },
    { k: 'cap', e: 'Trả lời cả 2 bình luận', t: 'Trả lời ngắn gọn, mời khách vào inbox', s: 'Tư vấn chi tiết trong tin nhắn riêng' },
    { k: 'rep', i: 0, text: 'Mình check ib nha 💬' },
    { k: 'rep', i: 1, text: 'Mình check ib nha 💬' },

    { k: 'ms', ref: { loai: 'cmt', img: 'du-thuyen-2', dong1: 'Bạn đã bình luận về bài viết của Du Thuyền Hải Âu', dong2: '"Giá 2 ngày 1 đêm sao ạ?"' }, gio: '21:10' },
    { k: 'cap', e: 'Tự động báo giá', t: 'Inbox trước: báo giá, gửi ảnh thật', s: 'Viết ngắn gọn, tự nhiên như người bán' },
    { k: 'ai', text: 'Dạ chào chị Thảo, du thuyền 2 ngày 1 đêm cabin **Deluxe** giá **3.900.000đ/khách** ạ, gồm xe đón, 3 bữa ăn, vé tham quan.' },
    { k: 'ai', card: { title: 'Du thuyền Hải Âu 2 ngày 1 đêm vịnh Hạ Long · Cabin Deluxe cửa sổ nhìn ra vịnh', gia: '3.900.000đ/khách' } },
    { k: 'ai', imgs: ['cabin-2', 'kayak-hang', 'hoang-hon'] },
    { k: 'ai', text: 'Chị đi **ngày nào, mấy người** để em giữ cabin nha?' },
    { k: 'cap', e: 'Hỏi ngày đi, số người', t: 'Khách trả lời 1 câu, AI giữ đúng cabin', s: 'Kiểm tra luôn cabin còn trống ngày khách đi' },
    { k: 'kh', text: '2 vợ chồng với bé 4t, đi thứ 7 26/12 nha e' },
    { k: 'ai', text: 'Dạ bé 4 tuổi **miễn phí** ạ. 26/12 còn cabin Deluxe, 2 người lớn **7.800.000đ**. Chị gửi em **họ tên, SĐT, địa chỉ đón** nha 😊' },
    { k: 'cap', e: 'Chốt đơn đặt chỗ', t: 'Xin họ tên, SĐT, điểm đón: khách đưa đủ', s: 'AI tóm tắt đơn ngay trong chat' },
    { k: 'kh', text: 'Hoàng Thu Thảo, 0983 216 547, 25 Lý Thường Kiệt, Hoàn Kiếm' },
    { k: 'ai', text: 'Dạ em giữ cabin cho chị rồi nha:\n– Du thuyền 2N1Đ · cabin Deluxe\n– Thứ Bảy 26/12 · 2 người lớn, 1 bé\n– **7.800.000đ**\n– Hoàng Thu Thảo · 0983 216 547\n– Đón: 25 Lý Thường Kiệt, Hoàn Kiếm\nĐiều hành gọi chị xác nhận liền ạ 🎉', d: 3800 },

    /* ================= TÌNH HUỐNG 2 · QUẢNG CÁO → MESSENGER ================= */
    { k: 'canh', nhan: 'Tình huống 2 · Quảng cáo → Messenger', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'du-thuyen', nhan: 'MESSENGER', tieuDe: 'Du thuyền 2N1Đ vịnh Hạ Long · Nhắn giữ cabin', nut: 'Gửi tin nhắn',
        text: 'Kỷ niệm ngày cưới trên vịnh Hạ Long 💍 Cabin Premium ban công riêng, bồn tắm nhìn ra vịnh, bữa tối trên boong. #cabinpremium #halong #mobile',
      }, d: 1500 },
    { k: 'cap', e: 'Quảng cáo Facebook', t: 'Khách bấm "Gửi tin nhắn" từ quảng cáo', s: 'Hỏi gì, AI trả lời ngay lập tức' },
    { k: 'tap', d: 1100 },
    { k: 'ms', ref: { loai: 'ad', img: 'du-thuyen', dong1: 'Tuấn đã trả lời một quảng cáo', dong2: 'Du thuyền 2N1Đ · Cabin Premium' }, gio: '14:47', d: 900 },
    { k: 'kh', text: 'Du thuyền này giá sao em? Vợ chồng a đi kỷ niệm 10 năm cưới' },
    { k: 'cap', e: 'Khách hỏi giá', t: 'AI gửi đúng du thuyền trên quảng cáo kèm giá', s: 'Khách không cần mô tả lại hành trình' },
    { k: 'ai', text: 'Dạ em chúc mừng anh chị ạ 🎉 Cabin **Premium** trên quảng cáo giá **4.900.000đ/khách**, gồm xe limousine đón, 3 bữa ăn, vé tham quan.' },
    { k: 'ai', img: 'du-thuyen' },
    { k: 'ai', text: 'Anh cho em xin **ngày đi** và **nơi đón** để em giữ cabin nha.' },
    { k: 'cap', e: 'Không hỏi lại khách', t: 'Khách chụp hành trình khác hỏi "Này thì sao"', s: 'Chỉ một câu cộc lốc, không ghi tên hành trình' },
    { k: 'kh', shot: { img: 'vinh', cap: 'Hành trình 3 ngày 2 đêm trên vịnh 🌅 Thêm 1 ngày chèo kayak, ngắm hoàng hôn' } },
    { k: 'kh', text: 'Này thì sao' },
    { k: 'cap', e: 'Nhận diện hành trình từ ảnh', t: 'Đúng hành trình. Đúng giá. Còn cabin.', s: 'AI đọc ảnh khách gửi, khớp với các hành trình của du thuyền' },
    { k: 'ai', text: 'Dạ đây là hành trình **3 ngày 2 đêm** ạ, cabin Premium giá **8.900.000đ/khách**, còn cabin anh nha.' },
    { k: 'ai', card: { title: 'Du thuyền Hải Âu 3 ngày 2 đêm vịnh Hạ Long · Cabin Premium ban công', gia: '8.900.000đ/khách' } },
    { k: 'ai', img: 'vinh' },
    { k: 'ai', text: 'Anh cho em xin **ngày đi** và **nơi đón** để em check cabin cả 2 hành trình nha.' },

    // Khách im → màn hình phụ: gắn thẻ (3 hashtag của quảng cáo + thẻ từ cuộc chat), bám đuổi 3 tin theo thẻ
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Preny tự gắn thẻ đúng cabin khách quan tâm', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi theo thẻ', t: '3 tin ngắn: 15 phút, 3 tiếng, 20 tiếng', s: 'Chỉ nói về đúng cabin khách quan tâm' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Anh Tuấn ơi, cabin **Premium** cuối tuần còn ít lắm ạ. Anh nhắn em ngày đi để em giữ cabin cho anh chị nha 😊' },
    { k: 'p', a: 'r1', d: 900 },
    { k: 'time', nhan: '3 tiếng sau', gio: '17:49', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Em gửi anh ảnh thật cabin Premium nha 📸 Ban công riêng, **bồn tắm nhìn ra vịnh**.' },
    { k: 'ai', imgs: ['cabin', 'bon-tam'] },
    { k: 'p', a: 'r2', d: 900 },
    { k: 'time', nhan: '20 tiếng sau', gio: '10:49', ngay: 'T5 19/11/2026', d: 700 },
    { k: 'ai', text: 'Đặt trong hôm nay em **giảm 10%** và tặng **bữa tối lãng mạn trên boong** cho anh chị ạ 🎁' },
    { k: 'p', a: 'r3', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 3, khách gửi ngày đi', s: 'AI tư vấn hành trình ngay khi khách nhắn' },
    { k: 'kh', text: 'Thứ 7 5/12 em, đi từ Hà Nội, đón ở phố cổ' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },

    { k: 'cap', e: 'Tư vấn hành trình', t: 'Thứ Bảy 5/12 còn 2 cabin Premium', s: 'Rồi chủ động hỏi: 2 ngày 1 đêm hay 3 ngày 2 đêm?' },
    { k: 'ai', text: 'Dạ Thứ Bảy 5/12 còn **2 cabin Premium** ạ. Anh chị đi **2 ngày 1 đêm** hay **3 ngày 2 đêm**?' },
    { k: 'kh', text: '2 ngày 1 đêm thôi em' },
    { k: 'cap', e: 'Hỏi đúng thứ còn thiếu', t: 'Khách chọn 2N1Đ: AI hỏi tiếp vị trí cabin', s: 'Gửi ảnh 2 cabin để khách chọn nhanh' },
    { k: 'ai', text: 'Dạ còn **cabin tầng 2 ban công** và **cabin tầng 3 sát boong**, cùng giá ạ. Anh chị thích cabin nào?' },
    { k: 'ai', imgs: ['bon-tam', 'hoang-hon'] },
    { k: 'kh', text: 'Tầng 2 ban công nha em' },
    { k: 'ai', text: 'Dạ em giữ cabin **tầng 2 ban công**, trang trí kỷ niệm miễn phí ạ. Anh gửi em **họ tên, SĐT, địa chỉ đón** nha.' },
    { k: 'cap', e: 'Kiểm tra dữ liệu', t: 'Thiếu số nhà → hỏi lại ngay lập tức' },
    { k: 'kh', text: 'Phạm Minh Tuấn, 0912 888 246, phố Hàng Bè' },
    { k: 'ai', text: 'Dạ anh cho em xin **số nhà** ở Hàng Bè để xe đón đúng chỗ nha.' },
    { k: 'kh', text: '18 Hàng Bè em' },
    { k: 'cap', e: 'Chốt đơn đặt chỗ', t: 'Tự tổng hợp đơn: hành trình, ngày đi, điểm đón' },
    { k: 'ai', text: 'Dạ anh kiểm tra lại đơn đặt chỗ giúp em nha:\n– Du thuyền 2N1Đ · cabin Premium tầng 2\n– Thứ Bảy 5/12 · 2 khách · trang trí kỷ niệm\n– Tổng: **8.820.000đ** (đã giảm 10%)\n– Phạm Minh Tuấn · 0912 888 246\n– Xe đón: 18 Hàng Bè, P. Hoàn Kiếm\nAnh xác nhận giúp em nha.', nut: 'Quản lý đặt chỗ', d: 3600 },
    { k: 'cap', e: 'Xong', t: 'Khách chỉ cần nói "Ok em"' },
    { k: 'kh', text: 'Ok em' },
    { k: 'ai', text: 'Dạ em lên đơn đặt chỗ cho anh chị liền nha ⚡', d: 1300 },

    // Chốt đơn → màn hình phụ: gửi sự kiện mua hàng lên Facebook → đơn đặt chỗ tự động → điều hành xác nhận
    { k: 'cap', e: 'Gửi đơn về Facebook', t: 'Sự kiện mua hàng gửi ngay lên Facebook', s: 'Quảng cáo tối ưu theo đơn thật' },
    { k: 'panel', v: 'capi', d: 900 },
    { k: 'p', a: 'flow', d: 1500 }, { k: 'p', a: 'event', d: 1300 }, { k: 'p', a: 'ok', d: 2200 },
    { k: 'cap', e: 'Đơn đặt chỗ tự động', t: 'Đơn tự lên trên Preny. Không cần ghi tay.' },
    { k: 'panel', v: 'don', d: 900 },
    { k: 'p', a: 'f1', d: 550 }, { k: 'p', a: 'f2', d: 550 }, { k: 'p', a: 'f3', d: 550 }, { k: 'p', a: 'f4', d: 550 },
    { k: 'p', a: 'cho', d: 900 },
    { k: 'cap', e: 'Điều hành xác nhận', t: 'Báo điều hành: bấm 1 lần là đơn lên', s: 'Người thật kiểm tra lại cabin, xe đón' },
    { k: 'p', a: 'nv', d: 1700 }, { k: 'p', a: 'bam', d: 1100 },
    { k: 'p', a: 'xn', d: 3000 },
    { k: 'panel', v: null, d: 500 },

    // Đặt xong: tin cảm ơn kèm 5 dịch vụ đặt thêm (deck.afterSale.sp của bài 1)
    { k: 'cap', e: 'Bán thêm sau đặt chỗ', t: 'Cảm ơn khách, gửi kèm 5 dịch vụ đang giảm giá', s: 'Khách bấm đặt thêm ngay trong Messenger' },
    { k: 'ai', text: 'Dạ cảm ơn anh Tuấn nha 🎉 Cabin đã được xác nhận. Mấy dịch vụ này đang giảm giá, anh xem thử nha:' },
    { k: 'car', sp: [
        { img: 'hoang-hon', ten: 'Bữa tối hoàng hôn trên boong', gia: '1.200.000đ', cu: '1.500.000đ', giam: '-20%' },
        { img: 'bon-tam', ten: 'Trang trí bồn tắm hoa hồng', gia: '450.000đ', cu: '550.000đ', giam: '-18%' },
        { img: 'vinh', ten: 'Nâng lên 3 ngày 2 đêm', gia: '3.200.000đ', cu: '3.800.000đ', giam: '-16%' },
        { img: 'tour-ngay', ten: 'Tour trong ngày trên vịnh', gia: '1.445.000đ', cu: '1.700.000đ', giam: '-15%' },
        { img: 'tau-tiec', ten: 'Tiệc riêng trên du thuyền', gia: '1.275.000đ', cu: '1.500.000đ', giam: '-15%' },
      ], d: 5200 },

    // Chăm sóc qua Zalo: sau chuyến đi (5–6/12). Không có tin nhắc trước ngày khởi hành.
    { k: 'zalo', gio: '19:30', ngay: 'T2 07/12/2026', chip: 'Sau chuyến đi', d: 1500 },
    { k: 'cap', e: 'Chăm sóc qua Zalo', t: 'Sau chuyến đi: AI hỏi thăm khách', s: 'Xin đánh giá ngay trong tin Zalo OA của du thuyền' },
    { k: 'zns', zns: {
        img: 'hoang-hon', tieuDe: 'Anh Tuấn ơi, chuyến kỷ niệm có trọn vẹn không ạ?',
        noiDung: 'Hải Âu cảm ơn anh chị đã đi du thuyền (đơn **#HA51205** · Cabin Premium · 2 khách). Anh đánh giá giúp Hải Âu nha!',
        nut: 'Đánh giá chuyến đi',
      }, d: 4200 },
    { k: 'cap', e: 'ZBS · Được đặt nhiều', t: '1 tuần sau: gửi hành trình được đặt nhiều', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'T2 14/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['vinh', 'tour-ngay', 'tau-tiec', 'du-thuyen-2'], nhan: 'ĐƯỢC ĐẶT NHIỀU TUẦN NÀY', mau: '#F97316',
        tieuDe: '🔥 Hành trình được đặt nhiều nhất tại Hải Âu',
        noiDung: 'Du thuyền **3 ngày 2 đêm** dịp Tết, tour trong ngày trên vịnh và tiệc tất niên trên du thuyền đang được khách chọn nhiều nhất.',
        nut: 'Xem lịch trình',
      }, d: 4200 },
    { k: 'cap', e: 'ZBS · Ưu đãi khách cũ', t: '1 tuần sau nữa: gửi voucher cho chuyến tới', s: 'Kéo khách quay lại đặt tiếp, không cần khách nhắn' },
    { k: 'zstamp', gio: '19:30', ngay: 'T2 21/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['cabin', 'bon-tam', 'kayak-hang', 'hoang-hon'], nhan: 'KHÁCH CŨ · GIẢM 15%',
        tieuDe: 'Tặng anh Tuấn voucher 15%',
        noiDung: 'Nhập mã **HAIAU15** giảm **15%** mọi hành trình cho chuyến đi tiếp theo. Hạn dùng đến 30/06/2027.',
        nut: 'Đặt chỗ ngay',
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
    tag: { av: 'MT', ten: 'Phạm Minh Tuấn', sub: 'Messenger · từ quảng cáo Cabin Premium',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#cabinpremium', 'qt hot'], ['#halong', 'qt hot'], ['#mobile', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#DuThuyen3N2D', 'qt']]]],
      im: 'Khách im từ 14:49, sau khi được báo giá',
      rule: { lb: 'Bám đuổi theo thẻ #cabinpremium', tieuDe: '3 tin ngắn về cabin Premium',
              dong: [['15 phút', 'Nhắc cabin cuối tuần còn ít'], ['3 tiếng', 'Gửi ảnh thật cabin, ban công'], ['20 tiếng', 'Ưu đãi đặt trong ngày']] },
      reply: 'Khách gửi ngày đi, nơi đón · dừng bám đuổi' },
    capi: { tieuDe: 'Gửi đơn đặt chỗ cho Facebook', event: 'Purchase', nhan: 'SỰ KIỆN MUA HÀNG', giaTri: '8.820.000đ', pk: 'Purchase · 8.820.000đ',
      dong: [['Đơn đặt chỗ', '#HA51205 · Cabin Premium · 2 khách'], ['Nguồn khách', 'Quảng cáo Cabin Premium → Messenger'], ['Giá trị', '8.820.000 VND'], ['Event ID', 'HA51205-PURCHASE (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện mua hàng' },
  },
  donHang: {
    loai: 'Đơn đặt chỗ', ma: '#HA51205', spNhan: 'Hành trình',
    sp: 'Du thuyền 2 ngày 1 đêm · Cabin Premium', bien: 'Tầng 2 ban công · 2 khách · trang trí kỷ niệm', img: 'cabin', gia: '8.820.000đ',
    phi: ['Phụ thu', 'không có'], nguoiNhan: 'Khách đặt · Số điện thoại', dcNhan: 'Ngày khởi hành · Điểm đón',
    nv: { ten: 'Điều hành Mai Linh', av: 'ML' },
    ten: 'Phạm Minh Tuấn', sdt: '0912 888 246', dc: 'Thứ Bảy 05/12/2026 · xe đón 18 Hàng Bè, P. Hoàn Kiếm', gio: '11:05 · 19/11/2026',
  },
};
