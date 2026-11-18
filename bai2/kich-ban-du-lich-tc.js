/* Bài 2 (video demo ngang tự chạy): DU LỊCH, DU THUYỀN (Du Thuyền Hải Âu, vịnh Hạ Long), nhóm thương mại điện tử, ngành đặt chỗ
   ("lên đơn" là đơn đặt chỗ). Viết lại 18/11/2026 theo mạch mới người dùng chốt (mẫu demo/bai2/kich-ban-yen-chung-tuoi-tc.js):
   - 1 cảnh duy nhất: quảng cáo cabin Premium kỷ niệm ngày cưới, 2 khách bình luận (hỏi giá, hỏi bé chèo kayak) → trả lời cả 2 "Mình check ib nha"
     → AI nhắn inbox trước: giá + đúng ảnh quảng cáo, hỏi lịch trình (ngày đi, số người, nơi đón)
     → khách trả lời: 2 vợ chồng kỷ niệm 10 năm cưới, Thứ Bảy 5/12, đón phố cổ → AI báo giá 2 khách, tặng trang trí, bánh kem
     → hỏi vị trí cabin → khách chọn tầng 2 ban công → AI xin họ tên, SĐT, địa chỉ đón → khách im
     → gắn thẻ (3 hashtag quảng cáo + #baogia + cabin khách chọn) → bám đuổi 3 tin 15 phút, 3 tiếng, 20 tiếng
     → khách gửi họ tên, SĐT, phố đón (ca khó: thiếu số nhà) → tóm tắt đơn đặt chỗ → Purchase lên Facebook
     → đơn tự động, điều hành bấm xác nhận → cảm ơn + 5 dịch vụ giảm giá → Zalo sau chuyến đi: hỏi thăm, được đặt nhiều, voucher → tổng kết → logo.
   - Chỉ 1 hành trình, 1 hạng cabin từ đầu tới cuối (2 ngày 1 đêm, cabin Premium), không có đoạn khách hỏi hành trình khác.
   Không có tin nhắc trước ngày khởi hành (Preny chưa có tính năng này), không có tin "đơn đang giao".
   Tên du thuyền, hành trình, giá, khách, SĐT: minh họa của bài 1 (demo/kich-ban/du-lich-tc.js). Tự đặt thêm: khách bình luận thứ 2,
   vị trí cabin tầng 2 / tầng 3, giá gốc và % giảm của 5 dịch vụ. Ảnh: Unsplash có sẵn của bài 1 (demo/assets/img/u/). */
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

    /* ================= BÌNH LUẬN QUẢNG CÁO → INBOX (cảnh duy nhất) ================= */
    { k: 'canh', nhan: 'Bình luận quảng cáo → Inbox', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'du-thuyen', nhan: 'MESSENGER', tieuDe: 'Du thuyền 2N1Đ vịnh Hạ Long · Nhắn giữ cabin', nut: 'Gửi tin nhắn',
        text: 'Kỷ niệm ngày cưới trên vịnh Hạ Long 💍 Cabin Premium ban công riêng, bồn tắm nhìn ra vịnh, bữa tối trên boong. #cabinpremium #halong #mobile',
      }, d: 1500 },
    { k: 'cap', e: 'Bình luận hỏi giá', t: 'Khách hỏi giá ngay dưới quảng cáo', s: 'Một khách khác hỏi bé chèo kayak được không' },
    { k: 'cmt', i: 0, ten: 'Minh Tuấn', av: 'MT', text: 'Cabin Premium 2 ngày 1 đêm giá sao ạ?' },
    { k: 'cmt', i: 1, ten: 'Hoàng Thảo', av: 'HT', text: 'Bé 4 tuổi đi chèo kayak được không ạ?' },
    { k: 'cap', e: 'Trả lời cả 2 bình luận', t: 'Trả lời ngắn gọn, mời khách vào inbox', s: 'Tư vấn chi tiết trong tin nhắn riêng' },
    { k: 'rep', i: 0, text: 'Mình check ib nha 💬' },
    { k: 'rep', i: 1, text: 'Mình check ib nha 💬' },
    { k: 'ms', ref: { loai: 'cmt', img: 'du-thuyen', dong1: 'Bạn đã bình luận về quảng cáo của Du Thuyền Hải Âu', dong2: '"Cabin Premium 2 ngày 1 đêm giá sao ạ?"' }, gio: '14:47' },
    { k: 'cap', e: 'AI nhắn trước', t: 'Inbox trước: báo giá, gửi đúng ảnh quảng cáo', s: 'Khách không cần mô tả lại hành trình' },
    { k: 'ai', text: 'Dạ chào anh Tuấn, cabin **Premium** 2 ngày 1 đêm giá **4.900.000đ/khách** ạ, gồm xe limousine đón, 3 bữa ăn, vé tham quan.' },
    { k: 'ai', img: 'du-thuyen' },
    { k: 'ai', text: 'Anh chị đi **ngày nào, mấy người** và cần xe đón ở **đâu** để em giữ cabin nha?' },

    { k: 'cap', e: 'Khách trả lời', t: 'Đi kỷ niệm 10 năm cưới → AI tặng quà kỷ niệm', s: 'Kiểm tra luôn cabin trống ngày khách đi' },
    { k: 'kh', text: 'Vợ chồng a đi kỷ niệm 10 năm cưới, thứ 7 5/12, đón ở phố cổ HN em' },
    { k: 'ai', text: 'Dạ em chúc mừng anh chị 🎉 Thứ Bảy 5/12 còn **2 cabin Premium**, 2 khách **9.800.000đ**, em **trang trí cabin, tặng bánh kem** dịp kỷ niệm ạ.' },
    { k: 'cap', e: 'Hỏi đúng thứ còn thiếu', t: 'Có ngày đi rồi: AI hỏi tiếp vị trí cabin', s: 'Gửi ảnh để khách chọn nhanh' },
    { k: 'ai', text: 'Còn **cabin tầng 2 ban công** và **cabin tầng 3 sát boong**, cùng giá ạ. Anh chị thích cabin nào ạ?' },
    { k: 'ai', imgs: ['bon-tam', 'hoang-hon'] },
    { k: 'kh', text: 'Tầng 2 ban công nha em' },
    { k: 'cap', e: 'Xin thông tin đặt chỗ', t: 'Chọn xong: AI xin họ tên, SĐT, điểm đón' },
    { k: 'ai', text: 'Dạ em ghi **cabin Premium tầng 2**, Thứ Bảy 5/12. Anh gửi em **họ tên, SĐT** và **địa chỉ đón** ở phố cổ để em giữ cabin nha.' },

    // Khách im sau khi được xin họ tên, SĐT, điểm đón → màn hình phụ: gắn thẻ (3 hashtag quảng cáo + thẻ từ cuộc chat), bám đuổi 3 tin
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Chưa gửi SĐT: Preny tự gắn thẻ khách', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi theo thẻ', t: '3 tin ngắn: 15 phút, 3 tiếng, 20 tiếng', s: 'Chỉ nói về đúng cabin khách đã chọn' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Anh Tuấn ơi, em đang giữ tạm **cabin Premium tầng 2** ngày 5/12 cho anh chị ạ. Anh gửi em tên, SĐT, địa chỉ đón để em giữ chắc nha 😊' },
    { k: 'p', a: 'r1', d: 900 },
    { k: 'time', nhan: '3 tiếng sau', gio: '17:49', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Em gửi anh ảnh thật cabin tầng 2 nha 📸 Ban công riêng, **bồn tắm nhìn ra vịnh**, chiều chèo kayak trong hang.' },
    { k: 'ai', imgs: ['cabin', 'bon-tam', 'kayak-hang'] },
    { k: 'p', a: 'r2', d: 900 },
    { k: 'time', nhan: '20 tiếng sau', gio: '10:49', ngay: 'T5 19/11/2026', d: 700 },
    { k: 'ai', text: 'Anh chỉ cần gửi **họ tên, SĐT, địa chỉ đón** là em giữ cabin liền ạ. Đặt trong hôm nay em **giảm 10%** còn **8.820.000đ**, tặng **bữa tối trên boong** 🎁' },
    { k: 'p', a: 'r3', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 3, khách gửi tên, SĐT, điểm đón', s: 'AI kiểm tra ngay thông tin khách gửi' },
    { k: 'kh', text: 'Phạm Minh Tuấn, 0912 888 246, phố Hàng Bè' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'cap', e: 'Kiểm tra dữ liệu', t: 'Thiếu số nhà → hỏi lại ngay lập tức' },
    { k: 'ai', text: 'Dạ em ghi SĐT rồi ạ. Phố **Hàng Bè** anh cho em xin thêm **số nhà** để xe đón đúng chỗ nha.' },
    { k: 'kh', text: '18 Hàng Bè em' },
    { k: 'cap', e: 'Chốt đơn đặt chỗ', t: 'Tự tổng hợp đơn: hành trình, ngày đi, điểm đón' },
    { k: 'ai', text: 'Dạ anh kiểm tra lại đơn đặt chỗ giúp em nha:\n– Du thuyền 2N1Đ · cabin Premium tầng 2\n– Thứ Bảy 5/12 · 2 khách · trang trí kỷ niệm\n– Tổng: **8.820.000đ** (đã giảm 10%)\n– Phạm Minh Tuấn · 0912 888 246\n– Xe đón: 18 Hàng Bè, P. Hoàn Kiếm\nAnh xác nhận giúp em đơn này nha.', nut: 'Quản lý đặt chỗ', d: 3600 },
    { k: 'cap', e: 'Xong', t: 'Khách chỉ cần nói "Ok em"' },
    { k: 'kh', text: 'Ok em' },
    { k: 'ai', text: 'Dạ em lên đơn, xếp xe limousine đón anh chị sáng 5/12 liền nha ⚡', d: 1300 },

    // Chốt đơn → màn hình phụ: gửi đơn đặt chỗ cho Facebook → đơn tự động → điều hành xác nhận
    { k: 'cap', e: 'Gửi đơn về Facebook', t: 'Sự kiện mua hàng gửi ngay lên Facebook', s: 'Quảng cáo tối ưu theo đơn thật' },
    { k: 'panel', v: 'capi', d: 900 },
    { k: 'p', a: 'flow', d: 1500 }, { k: 'p', a: 'event', d: 1300 }, { k: 'p', a: 'ok', d: 2200 },
    { k: 'cap', e: 'Đơn đặt chỗ tự động', t: 'Đơn tự lên Preny. Không cần ghi tay.' },
    { k: 'panel', v: 'don', d: 900 },
    { k: 'p', a: 'f1', d: 550 }, { k: 'p', a: 'f2', d: 550 }, { k: 'p', a: 'f3', d: 550 }, { k: 'p', a: 'f4', d: 550 },
    { k: 'p', a: 'cho', d: 900 },
    { k: 'cap', e: 'Nhân viên xác nhận', t: 'Báo điều hành: bấm 1 lần là đơn lên', s: 'Người thật kiểm tra lại cabin, xe đón' },
    { k: 'p', a: 'nv', d: 1700 }, { k: 'p', a: 'bam', d: 1100 },
    { k: 'p', a: 'xn', d: 3000 },
    { k: 'panel', v: null, d: 500 },

    // Đặt xong: tin cảm ơn kèm 5 dịch vụ đang giảm giá (deck.afterSale.sp của bài 1)
    { k: 'cap', e: 'Bán thêm sau đặt chỗ', t: 'Cảm ơn khách, gửi kèm 5 dịch vụ đang giảm giá', s: 'Khách bấm đặt thêm ngay trong Messenger' },
    { k: 'ai', text: 'Dạ cảm ơn anh Tuấn nha 🎉 Cabin đã được xác nhận. Mấy dịch vụ này đang giảm giá cho chuyến kỷ niệm, anh xem thử nha:' },
    { k: 'car', sp: [
        { img: 'hoang-hon', ten: 'Bữa tối hoàng hôn trên boong', gia: '1.200.000đ', cu: '1.500.000đ', giam: '-20%' },
        { img: 'bon-tam', ten: 'Trang trí bồn tắm hoa hồng', gia: '450.000đ', cu: '550.000đ', giam: '-18%' },
        { img: 'vinh', ten: 'Nâng lên 3 ngày 2 đêm', gia: '3.200.000đ', cu: '3.800.000đ', giam: '-16%' },
        { img: 'tour-ngay', ten: 'Tour trong ngày trên vịnh', gia: '1.445.000đ', cu: '1.700.000đ', giam: '-15%' },
        { img: 'tau-tiec', ten: 'Tiệc riêng trên du thuyền', gia: '1.275.000đ', cu: '1.500.000đ', giam: '-15%' },
      ], d: 5200 },

    // Chăm sóc qua Zalo: sau chuyến đi (5–6/12). Không có tin nhắc trước ngày khởi hành.
    { k: 'zalo', gio: '19:30', ngay: 'T2 07/12/2026', chip: 'Sau chuyến đi', d: 1500 },
    { k: 'cap', e: 'Chăm sóc sau bán qua Zalo', t: 'Sau chuyến đi: AI hỏi thăm anh chị', s: 'Xin đánh giá ngay trong tin Zalo OA của du thuyền' },
    { k: 'zns', zns: {
        img: 'hoang-hon', tieuDe: 'Anh Tuấn ơi, chuyến kỷ niệm có trọn vẹn không ạ?',
        noiDung: 'Hải Âu cảm ơn anh chị đã đi du thuyền (đơn **#HA51205** · Cabin Premium · 2 khách). Anh đánh giá giúp Hải Âu nha!',
        nut: 'Đánh giá chuyến đi',
      }, d: 4200 },
    { k: 'cap', e: 'ZBS · Được đặt nhiều', t: '1 tuần sau: gửi hành trình được đặt nhiều qua Zalo', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'T2 14/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['vinh', 'tour-ngay', 'tau-tiec', 'du-thuyen-2'], nhan: 'ĐƯỢC ĐẶT NHIỀU TUẦN NÀY', mau: '#F97316',
        tieuDe: '🔥 Hành trình được đặt nhiều nhất tại Hải Âu',
        noiDung: 'Du thuyền **3 ngày 2 đêm** dịp Tết, tour trong ngày trên vịnh và tiệc tất niên trên du thuyền đang được khách chọn nhiều nhất.',
        nut: 'Xem lịch trình',
      }, d: 4600 },
    { k: 'cap', e: 'ZBS · Ưu đãi khách cũ', t: '1 tuần sau nữa: gửi voucher cho chuyến tới', s: 'Kéo khách quay lại đặt tiếp, không cần khách nhắn' },
    { k: 'zstamp', gio: '19:30', ngay: 'T2 21/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['cabin', 'bon-tam', 'kayak-hang', 'hoang-hon'], nhan: 'KHÁCH CŨ · GIẢM 15%',
        tieuDe: 'Tặng anh Tuấn voucher 15%',
        noiDung: 'Nhập mã **HAIAU15** giảm **15%** mọi hành trình cho chuyến đi tiếp theo. Hạn dùng đến 30/06/2027.',
        nut: 'Đặt chỗ ngay',
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
    tag: { av: 'MT', ten: 'Phạm Minh Tuấn', sub: 'Messenger · bình luận quảng cáo Cabin Premium',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#cabinpremium', 'qt hot'], ['#halong', 'qt hot'], ['#mobile', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#Tang2BanCong', 'qt']]]],
      im: 'Khách im từ 14:49, sau khi được xin tên, SĐT, điểm đón',
      rule: { lb: 'Bám đuổi theo thẻ #cabinpremium', tieuDe: '3 tin ngắn về cabin khách đã chọn',
              dong: [['15 phút', 'Đã giữ cabin tầng 2 cho khách'], ['3 tiếng', 'Gửi ảnh thật cabin, bồn tắm'], ['20 tiếng', 'Chỉ cần tên, SĐT là giữ cabin']] },
      reply: 'Khách gửi tên, SĐT, điểm đón · dừng bám đuổi' },
    capi: { tieuDe: 'Gửi đơn đặt chỗ cho Facebook', event: 'Purchase', nhan: 'SỰ KIỆN MUA HÀNG', giaTri: '8.820.000đ', pk: 'Purchase · 8.820.000đ',
      dong: [['Đơn đặt chỗ', '#HA51205 · Cabin Premium · 2 khách'], ['Nguồn khách', 'Bình luận quảng cáo Cabin Premium → Messenger'], ['Giá trị', '8.820.000 VND'], ['Event ID', 'HA51205-PURCHASE (chống trùng)']],
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
