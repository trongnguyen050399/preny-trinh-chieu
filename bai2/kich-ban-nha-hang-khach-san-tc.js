/* Bài 2 (video demo ngang tự chạy): NHÀ HÀNG, KHÁCH SẠN (Khách Sạn Biển Lam, Đà Nẵng), nhóm thương mại điện tử, ngành đặt chỗ
   ("lên đơn" là đơn đặt phòng). Viết lại 18/11/2026 theo mạch mới người dùng chốt (mẫu demo/bai2/kich-ban-yen-chung-tuoi-tc.js):
   - 1 cảnh duy nhất: quảng cáo Family Suite Giáng sinh, 2 khách bình luận (hỏi giá, hỏi đón sân bay) → trả lời cả 2 "Mình check ib nha"
     → AI nhắn inbox trước: giá + đúng ảnh quảng cáo, hỏi lịch trình (ngày đến, số đêm, số người, tuổi bé)
     → khách trả lời: hạ cánh 11h40, bé 10 tuổi → AI báo giá 3 đêm, phụ thu bé, nhận phòng sớm, đón sân bay → hỏi tầng → khách chọn tầng 12
     → AI xin họ tên, SĐT → khách im → gắn thẻ (3 hashtag quảng cáo + #baogia + tầng khách chọn) → bám đuổi 3 tin 15 phút, 3 tiếng, 20 tiếng
     → khách gửi họ tên, SĐT (ca khó: SĐT thiếu 1 số) → tóm tắt đơn đặt phòng → Purchase lên Facebook
     → đơn tự động, lễ tân bấm xác nhận → cảm ơn + 5 dịch vụ giảm giá → Zalo sau khi trả phòng: hỏi thăm, được đặt nhiều, voucher → tổng kết → logo.
   - Chỉ 1 phòng từ đầu tới cuối (Family Suite view biển), không có đoạn khách hỏi phòng khác.
   Không có tin nhắc trước ngày đến (Preny chưa có tính năng này), không có tin "đơn đang giao".
   Tên khách sạn, giá, chính sách trẻ em, khách, SĐT: minh họa của bài 1 (demo/kich-ban/nha-hang-khach-san-tc.js). Tự đặt thêm: khách bình luận
   thứ 2, Family Suite tầng 2 sát hồ bơi, giá gốc và % giảm của 5 dịch vụ. Ảnh: Unsplash có sẵn của bài 1 (demo/assets/img/u/). */
window.VN_KB = {
  ten: 'Nhà hàng, khách sạn video ngang',
  ketSub: 'Để AI tư vấn và chốt đơn đặt phòng cho khách sạn của bạn',
  shop: { ten: 'Khách Sạn Biển Lam', av: 'BL', mau: '#0E7490', sub: 'Thường trả lời ngay' },
  anh: {
    'phong-family': '../assets/img/u/1609602126247-4ab7188b4aa1_800x800.jpg',  // phòng mở ra biển
    'phong-2': '../assets/img/u/1776876648949-63ccabf63b10_800x800.jpg',       // phòng cửa kính nhìn biển
    'ban-cong': '../assets/img/u/1689717887631-088197cdc2ca_800x800.jpg',      // ban công nhìn biển
    'ho-boi': '../assets/img/u/1520250497591-112f2f40a3f4_800x800.jpg',        // hồ bơi
    'buffet-sang': '../assets/img/u/1578704311587-4fbd590630d5_800x800.jpg',   // buffet sáng
    'hai-san': '../assets/img/u/1651323018466-b36b7df1d2b1_800x800.jpg',       // quầy hải sản
    'nha-hang': '../assets/img/u/1493246318656-5bfd4cfb29b8_800x800.jpg',      // nhà hàng tầng thượng
    'tiec': '../assets/img/u/1524824267900-2fa9cbf7a506_800x800.jpg',          // sảnh tiệc
    'giang-sinh': '../assets/img/u/1763463608554-1a1d7ec7147b_800x800.jpg',    // bàn tiệc Giáng sinh
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= BÌNH LUẬN QUẢNG CÁO → INBOX (cảnh duy nhất) ================= */
    { k: 'canh', nhan: 'Bình luận quảng cáo → Inbox', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'phong-family', nhan: 'MESSENGER', tieuDe: 'Family Suite view biển · Nhắn giữ phòng', nut: 'Gửi tin nhắn',
        text: 'Giáng sinh này cả nhà ra biển 🎄 Family Suite view biển 45m², ở vừa 2 người lớn 2 bé, gồm buffet sáng, hồ bơi có khu riêng cho bé. #familysuite #giangsinh #mobile',
      }, d: 1500 },
    { k: 'cap', e: 'Bình luận hỏi giá', t: 'Khách hỏi giá ngay dưới quảng cáo', s: 'Một khách khác hỏi có đón sân bay không' },
    { k: 'cmt', i: 0, ten: 'Đăng Khoa', av: 'ĐK', text: 'Phòng này dịp Giáng sinh giá sao ạ?' },
    { k: 'cmt', i: 1, ten: 'Ngô Lan', av: 'NL', text: 'Có xe đón sân bay Đà Nẵng không ạ?' },
    { k: 'cap', e: 'Trả lời cả 2 bình luận', t: 'Trả lời ngắn gọn, mời khách vào inbox', s: 'Tư vấn chi tiết trong tin nhắn riêng' },
    { k: 'rep', i: 0, text: 'Mình check ib nha 💬' },
    { k: 'rep', i: 1, text: 'Mình check ib nha 💬' },
    { k: 'ms', ref: { loai: 'cmt', img: 'phong-family', dong1: 'Bạn đã bình luận về quảng cáo của Khách Sạn Biển Lam', dong2: '"Phòng này dịp Giáng sinh giá sao ạ?"' }, gio: '14:47' },
    { k: 'cap', e: 'AI nhắn trước', t: 'Inbox trước: báo giá, gửi đúng ảnh quảng cáo', s: 'Khách không cần mô tả lại phòng' },
    { k: 'ai', text: 'Dạ chào anh Khoa, **Family Suite view biển** dịp Giáng sinh giá **2.450.000đ/đêm** ạ, gồm buffet sáng, ở vừa 2 người lớn 2 bé.' },
    { k: 'ai', img: 'phong-family' },
    { k: 'ai', text: 'Anh cho em xin **ngày đến, số đêm** và nhà mình **mấy người, bé mấy tuổi** để em giữ đúng phòng nha?' },

    { k: 'cap', e: 'Khách trả lời', t: 'Hạ cánh 11h40, bé 10 tuổi: AI xếp đủ', s: 'Báo rõ phụ thu, nhận phòng sớm, đón sân bay' },
    { k: 'kh', text: '24/12 a bay vào, hạ cánh 11h40, ở 3 đêm. 2 vợ chồng với 2 bé 6t, 10t' },
    { k: 'ai', text: 'Dạ 3 đêm 24–27/12 là **7.350.000đ** ạ. Bé 6 tuổi miễn phí, bé 10 tuổi phụ thu ăn sáng **150.000đ/đêm**.' },
    { k: 'ai', text: 'Anh hạ cánh 11h40, em ghi **nhận phòng sớm** và **đón sân bay miễn phí** cho nhà mình nha.' },
    { k: 'cap', e: 'Hỏi đúng thứ còn thiếu', t: 'Có ngày rồi: AI hỏi tiếp tầng phòng', s: 'Gửi ảnh để khách chọn nhanh' },
    { k: 'ai', text: 'Family Suite còn **tầng 12 view biển** và **tầng 2 sát hồ bơi**, cùng giá ạ. Anh thích tầng nào ạ?' },
    { k: 'ai', imgs: ['ban-cong', 'ho-boi'] },
    { k: 'kh', text: 'Tầng 12 nha em' },
    { k: 'cap', e: 'Xin thông tin đặt phòng', t: 'Chọn xong: AI xin họ tên, SĐT' },
    { k: 'ai', text: 'Dạ em ghi **Family Suite tầng 12**, 3 đêm 24–27/12. Anh gửi em **họ tên, SĐT** người đặt để em giữ phòng nha.' },

    // Khách im sau khi được xin họ tên, SĐT → màn hình phụ: gắn thẻ (3 hashtag quảng cáo + thẻ từ cuộc chat), bám đuổi 3 tin
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Chưa gửi SĐT: Preny tự gắn thẻ khách', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi theo thẻ', t: '3 tin ngắn: 15 phút, 3 tiếng, 20 tiếng', s: 'Chỉ nói về đúng phòng khách đã chọn' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Anh Khoa ơi, em đang giữ tạm **Family Suite tầng 12** đêm 24–27/12 cho nhà mình ạ. Anh gửi em họ tên, SĐT để em giữ chắc nha 😊' },
    { k: 'p', a: 'r1', d: 900 },
    { k: 'time', nhan: '3 tiếng sau', gio: '17:49', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Em gửi anh ảnh thật phòng, hồ bơi và buffet sáng nha 📸 Hồ bơi có **khu riêng cho bé**, mở 6h–21h.' },
    { k: 'ai', imgs: ['phong-2', 'ho-boi', 'buffet-sang'] },
    { k: 'p', a: 'r2', d: 900 },
    { k: 'time', nhan: '20 tiếng sau', gio: '10:49', ngay: 'T5 19/11/2026', d: 700 },
    { k: 'ai', text: 'Anh chỉ cần gửi **họ tên, SĐT** là em giữ phòng liền ạ. Đặt trong hôm nay em **giảm 10% tiền phòng**, **miễn phụ thu cho bé**, còn **6.615.000đ** 🎄' },
    { k: 'p', a: 'r3', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 3, khách gửi họ tên, SĐT', s: 'AI kiểm tra ngay thông tin khách gửi' },
    { k: 'kh', text: 'Trần Đăng Khoa 090567812' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'cap', e: 'Kiểm tra dữ liệu', t: 'SĐT thiếu số → hỏi lại ngay lập tức' },
    { k: 'ai', text: 'Dạ số **090567812** mới có 9 số, anh kiểm tra lại giúp em nha.' },
    { k: 'kh', text: '0905678123 em' },
    { k: 'cap', e: 'Chốt đơn đặt phòng', t: 'Tự tổng hợp đơn: phòng, ngày, SĐT' },
    { k: 'ai', text: 'Dạ anh kiểm tra lại đơn đặt phòng giúp em nha:\n– Family Suite view biển, tầng 12\n– 3 đêm 24–27/12 · 2 người lớn, 2 bé\n– Đón sân bay 11:40 · nhận phòng sớm\n– Tổng: **6.615.000đ** (đã giảm 10%, miễn phụ thu bé)\n– Trần Đăng Khoa · 0905 678 123\nAnh xác nhận giúp em đơn này nha.', nut: 'Quản lý đặt phòng', d: 3600 },
    { k: 'cap', e: 'Xong', t: 'Khách chỉ cần nói "Ok em"' },
    { k: 'kh', text: 'Ok em' },
    { k: 'ai', text: 'Dạ em lên đơn, xếp xe đón anh lúc 11:40 ngày 24/12 liền nha ⚡', d: 1300 },

    // Chốt đơn → màn hình phụ: gửi đơn đặt phòng cho Facebook → đơn tự động → lễ tân xác nhận
    { k: 'cap', e: 'Gửi đơn về Facebook', t: 'Sự kiện mua hàng gửi ngay lên Facebook', s: 'Quảng cáo tối ưu theo đơn thật' },
    { k: 'panel', v: 'capi', d: 900 },
    { k: 'p', a: 'flow', d: 1500 }, { k: 'p', a: 'event', d: 1300 }, { k: 'p', a: 'ok', d: 2200 },
    { k: 'cap', e: 'Đơn đặt phòng tự động', t: 'Đơn tự lên Preny. Không cần ghi tay.' },
    { k: 'panel', v: 'don', d: 900 },
    { k: 'p', a: 'f1', d: 550 }, { k: 'p', a: 'f2', d: 550 }, { k: 'p', a: 'f3', d: 550 }, { k: 'p', a: 'f4', d: 550 },
    { k: 'p', a: 'cho', d: 900 },
    { k: 'cap', e: 'Nhân viên xác nhận', t: 'Báo lễ tân: bấm 1 lần là đơn lên', s: 'Người thật kiểm tra lại phòng trước khi giữ' },
    { k: 'p', a: 'nv', d: 1700 }, { k: 'p', a: 'bam', d: 1100 },
    { k: 'p', a: 'xn', d: 3000 },
    { k: 'panel', v: null, d: 500 },

    // Đặt xong: tin cảm ơn kèm 5 dịch vụ đang giảm giá (deck.afterSale.sp của bài 1)
    { k: 'cap', e: 'Bán thêm sau đặt phòng', t: 'Cảm ơn khách, gửi kèm 5 dịch vụ đang giảm giá', s: 'Khách bấm đặt thêm ngay trong Messenger' },
    { k: 'ai', text: 'Dạ cảm ơn anh Khoa nha 🎉 Phòng đã được xác nhận. Mấy dịch vụ này đang giảm giá dịp Giáng sinh, anh xem thử nha:' },
    { k: 'car', sp: [
        { img: 'giang-sinh', ten: 'Tiệc tối Giáng sinh 24/12', gia: '1.290.000đ', cu: '1.520.000đ', giam: '-15%' },
        { img: 'hai-san', ten: 'Set hải sản tối 2 người', gia: '890.000đ', cu: '1.050.000đ', giam: '-15%' },
        { img: 'nha-hang', ten: 'Bàn ăn tối view biển', gia: '1.500.000đ', cu: '1.800.000đ', giam: '-17%' },
        { img: 'buffet-sang', ten: 'Buffet sáng thêm khách', gia: '250.000đ', cu: '300.000đ', giam: '-17%' },
        { img: 'ho-boi', ten: 'Cabana hồ bơi nửa ngày', gia: '600.000đ', cu: '750.000đ', giam: '-20%' },
      ], d: 5200 },

    // Chăm sóc qua Zalo: sau khi khách trả phòng (27/12). Không có tin nhắc trước ngày đến.
    { k: 'zalo', gio: '10:00', ngay: 'T2 28/12/2026', chip: 'Sau khi khách trả phòng', d: 1500 },
    { k: 'cap', e: 'Chăm sóc sau bán qua Zalo', t: 'Khách trả phòng: AI hỏi thăm kỳ nghỉ', s: 'Xin đánh giá ngay trong tin Zalo OA của khách sạn' },
    { k: 'zns', zns: {
        img: 'ho-boi', tieuDe: 'Anh Khoa ơi, kỳ nghỉ của cả nhà có vui không ạ?',
        noiDung: 'Biển Lam cảm ơn gia đình anh đã nghỉ tại phòng **Family Suite** (đơn **#BL24127** · 24–27/12). Anh đánh giá giúp Biển Lam nha!',
        nut: 'Đánh giá kỳ nghỉ',
      }, d: 4200 },
    { k: 'cap', e: 'ZBS · Được đặt nhiều', t: '1 tuần sau: gửi dịch vụ được đặt nhiều qua Zalo', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '10:00', ngay: 'T2 04/01/2027', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['tiec', 'hai-san', 'nha-hang', 'phong-family'], nhan: 'ĐƯỢC ĐẶT NHIỀU THÁNG NÀY', mau: '#F97316',
        tieuDe: '🔥 Được đặt nhiều nhất tại Biển Lam',
        noiDung: '**Tiệc tất niên** phòng riêng, buffet hải sản cuối tuần và phòng **Family Suite** đang được khách Biển Lam chọn nhiều nhất tháng này.',
        nut: 'Xem ngay',
      }, d: 4600 },
    { k: 'cap', e: 'ZBS · Ưu đãi khách cũ', t: '1 tuần sau nữa: gửi voucher cho lần nghỉ tới', s: 'Kéo khách quay lại đặt tiếp, không cần khách nhắn' },
    { k: 'zstamp', gio: '10:00', ngay: 'T2 11/01/2027', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['ban-cong', 'phong-2', 'ho-boi', 'buffet-sang'], nhan: 'KHÁCH CŨ · GIẢM 15% GIÁ PHÒNG',
        tieuDe: 'Tặng anh Khoa voucher 15%',
        noiDung: 'Nhập mã **BIENLAM15** giảm **15%** giá phòng cho lần nghỉ tiếp theo. Hạn dùng đến 30/06/2027.',
        nut: 'Đặt phòng ngay',
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
    tag: { av: 'ĐK', ten: 'Trần Đăng Khoa', sub: 'Messenger · bình luận quảng cáo Family Suite',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#familysuite', 'qt hot'], ['#giangsinh', 'qt hot'], ['#mobile', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#Tang12ViewBien', 'qt']]]],
      im: 'Khách im từ 14:49, sau khi được xin họ tên, SĐT',
      rule: { lb: 'Bám đuổi theo thẻ #familysuite', tieuDe: '3 tin ngắn về phòng khách đã chọn',
              dong: [['15 phút', 'Đã giữ phòng tầng 12 cho khách'], ['3 tiếng', 'Gửi ảnh thật phòng, hồ bơi'], ['20 tiếng', 'Chỉ cần tên, SĐT là giữ phòng']] },
      reply: 'Khách gửi họ tên, SĐT · dừng bám đuổi' },
    capi: { tieuDe: 'Gửi đơn đặt phòng cho Facebook', event: 'Purchase', nhan: 'SỰ KIỆN MUA HÀNG', giaTri: '6.615.000đ', pk: 'Purchase · 6.615.000đ',
      dong: [['Đơn đặt phòng', '#BL24127 · Family Suite · 3 đêm'], ['Nguồn khách', 'Bình luận quảng cáo Family Suite → Messenger'], ['Giá trị', '6.615.000 VND'], ['Event ID', 'BL24127-PURCHASE (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện mua hàng' },
  },
  donHang: {
    loai: 'Đơn đặt phòng', ma: '#BL24127', spNhan: 'Phòng',
    sp: 'Family Suite view biển · tầng 12', bien: '3 đêm · 2 người lớn, 2 bé', img: 'phong-family', gia: '6.615.000đ',
    phi: ['Phụ thu', 'không có'], nguoiNhan: 'Khách đặt · Số điện thoại', dcNhan: 'Ngày nhận phòng',
    nv: { ten: 'Lễ tân Tường Vy', av: 'TV' },
    ten: 'Trần Đăng Khoa', sdt: '0905 678 123', dc: 'Thứ Năm 24/12/2026 · 3 đêm · đón sân bay 11:40', gio: '11:05 · 19/11/2026',
  },
};
