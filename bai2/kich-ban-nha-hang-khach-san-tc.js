/* Kịch bản Bài 2 (video demo NGANG 16:9 tự chạy): NHÀ HÀNG, KHÁCH SẠN (Khách Sạn Biển Lam, Đà Nẵng), nhóm thương mại điện tử, ngành đặt chỗ.
   Làm 18/11/2026 theo mạch mẫu YaMe (demo/bai2/kich-ban-yame.js) và video-ngang/HUONG-DAN-BAI2.md. Nội dung lấy từ bài 1 (demo/kich-ban/nha-hang-khach-san-tc.js).
   Mạch:
   - Tình huống 1: bài viết buffet hải sản → khách hỏi giá, khách khác hỏi giá cho bé → trả lời 1 câu chung → inbox: giá, card, ảnh
     → hỏi ngày, giờ, số người → khách trả lời → xin họ tên, SĐT → tóm tắt đơn đặt bàn.
   - Tình huống 2: quảng cáo Family Suite → anh Khoa hỏi giá → AI gửi đúng ảnh quảng cáo + giá, hỏi lịch trình (ngày đến, số đêm, tuổi 2 bé)
     → khách chụp phòng Deluxe "Này thì sao" → AI nhận ra → khách im → gắn thẻ, bám đuổi 3 tin → khách gửi lịch trình
     → AI tư vấn đúng hạng phòng, hỏi tầng → xin họ tên, SĐT (SĐT thiếu số → hỏi lại) → đơn đặt phòng → sự kiện mua hàng → nhân viên xác nhận
     → cảm ơn + 5 dịch vụ đặt thêm → Zalo sau khi trả phòng (hỏi thăm, được đặt nhiều, voucher) → tổng kết → logo.
   Không có tin nhắc trước ngày đến (Preny chưa có tính năng này), không có tin "đơn đang giao".
   Tên khách sạn, giá, chính sách, khách, SĐT: dữ liệu minh họa của bài 1. Tự đặt thêm: buffet hải sản 650.000đ/khách (giá gốc bài 1), giá Deluxe
   1.850.000đ/đêm, giá gốc và % giảm của 5 dịch vụ đặt thêm. Ảnh: ảnh Unsplash có sẵn của bài 1 (demo/assets/img/u/). */
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

    /* ================= TÌNH HUỐNG 1 · BÀI VIẾT → BÌNH LUẬN → INBOX ================= */
    { k: 'canh', nhan: 'Tình huống 1 · Bình luận xin giá → Inbox', gio: '20:32' },
    { k: 'fb', post: {
        gio: '2 giờ', img: 'hai-san', likes: '2,1K', soCmt: '112 bình luận',
        text: 'Cuối tuần lên tầng thượng ăn hải sản ngắm biển 🦐 Buffet hải sản tươi sống mỗi tối Thứ Bảy, Chủ nhật từ 18:30 tại nhà hàng Biển Lam.',
      }, d: 1600 },
    { k: 'cap', e: 'Bình luận xin giá', t: 'Khách hỏi giá ngay dưới bài viết', s: 'Một khách khác hỏi giá cho bé ở bình luận kế bên' },
    { k: 'cmt', i: 0, ten: 'Phương Thảo', av: 'PT', text: 'Buffet giá sao ạ?' },
    { k: 'cmt', i: 1, ten: 'Ngô Lan', av: 'NL', text: 'Đi 2 người lớn với bé 5 tuổi thì tính sao ạ?' },
    { k: 'cap', e: 'Trả lời cả 2 bình luận', t: 'Trả lời ngắn gọn, mời khách vào inbox', s: 'Tư vấn chi tiết trong tin nhắn riêng' },
    { k: 'rep', i: 0, text: 'Mình check ib nha 💬' },
    { k: 'rep', i: 1, text: 'Mình check ib nha 💬' },

    { k: 'ms', ref: { loai: 'cmt', img: 'hai-san', dong1: 'Bạn đã bình luận về bài viết của Khách Sạn Biển Lam', dong2: '"Buffet giá sao ạ?"' }, gio: '20:34' },
    { k: 'cap', e: 'Tự động báo giá', t: 'Inbox trước: báo giá, gửi ảnh thật', s: 'Viết ngắn gọn, tự nhiên như lễ tân' },
    { k: 'ai', text: 'Dạ chào chị Thảo, buffet hải sản cuối tuần giá **650.000đ/khách** ạ, bé dưới 1m miễn phí.' },
    { k: 'ai', card: { title: 'Buffet hải sản cuối tuần · nhà hàng tầng thượng view biển · Thứ Bảy, Chủ nhật từ 18:30', gia: '650.000đ/khách' } },
    { k: 'ai', imgs: ['hai-san', 'nha-hang'] },
    { k: 'ai', text: 'Chị đi **tối nào, mấy người** để em giữ bàn đẹp nha?' },
    { k: 'cap', e: 'Hỏi ngày, số người', t: 'Khách trả lời 1 câu, AI giữ đúng bàn', s: 'Kiểm tra luôn bàn view biển còn trống' },
    { k: 'kh', text: 'tối thứ 7 này 21/11, 4 người lớn, tầm 7h nha e' },
    { k: 'ai', text: 'Dạ tối Thứ Bảy 21/11 còn **bàn sát lan can view biển** ạ, 4 khách là **2.600.000đ**. Chị gửi em **họ tên và SĐT** để em giữ bàn nha 😊' },
    { k: 'cap', e: 'Chốt đơn đặt bàn', t: 'Xin họ tên, SĐT: khách đưa đủ', s: 'AI tóm tắt đơn ngay trong chat' },
    { k: 'kh', text: 'Lê Phương Thảo, 0938 425 716' },
    { k: 'ai', text: 'Dạ em giữ bàn cho chị rồi nha:\n– Buffet hải sản · 19:00 Thứ Bảy 21/11\n– 4 người lớn · bàn view biển\n– **2.600.000đ**\n– Lê Phương Thảo · 0938 425 716\nNhà hàng gọi chị xác nhận liền ạ 🎉', d: 3800 },

    /* ================= TÌNH HUỐNG 2 · QUẢNG CÁO → MESSENGER ================= */
    { k: 'canh', nhan: 'Tình huống 2 · Quảng cáo → Messenger', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'phong-family', nhan: 'MESSENGER', tieuDe: 'Family Suite view biển · Nhắn giữ phòng', nut: 'Gửi tin nhắn',
        text: 'Giáng sinh này cả nhà ra biển 🎄 Family Suite view biển 45m², ở vừa 2 người lớn 2 bé, gồm buffet sáng, hồ bơi có khu riêng cho bé. #familysuite #giangsinh #mobile',
      }, d: 1500 },
    { k: 'cap', e: 'Quảng cáo Facebook', t: 'Khách bấm "Gửi tin nhắn" từ quảng cáo', s: 'Hỏi gì, AI trả lời ngay lập tức' },
    { k: 'tap', d: 1100 },
    { k: 'ms', ref: { loai: 'ad', img: 'phong-family', dong1: 'Khoa đã trả lời một quảng cáo', dong2: 'Family Suite view biển · Giáng sinh' }, gio: '14:47', d: 900 },
    { k: 'kh', text: 'Phòng này giá sao em? Nhà a 2 người lớn 2 bé, đi dịp Giáng sinh' },
    { k: 'cap', e: 'Khách hỏi giá', t: 'AI gửi đúng phòng trên quảng cáo kèm giá', s: 'Khách không cần mô tả lại phòng' },
    { k: 'ai', text: 'Dạ chào anh Khoa, **Family Suite view biển** trên quảng cáo giá **2.450.000đ/đêm** ạ, gồm buffet sáng, ở vừa 2 người lớn 2 bé.' },
    { k: 'ai', img: 'phong-family' },
    { k: 'ai', text: 'Anh cho em xin **ngày đến, số đêm** và **tuổi 2 bé** để em giữ phòng nha.' },
    { k: 'cap', e: 'Không hỏi lại khách', t: 'Khách chụp phòng khác hỏi "Này thì sao"', s: 'Chỉ một câu cộc lốc, không ghi tên phòng' },
    { k: 'kh', shot: { img: 'phong-2', cap: 'Deluxe ban công nhìn thẳng ra biển 🌊 Mở mắt là thấy bình minh' } },
    { k: 'kh', text: 'Này thì sao' },
    { k: 'cap', e: 'Nhận diện phòng từ ảnh', t: 'Đúng phòng. Đúng giá. Còn phòng trống.', s: 'AI đọc ảnh khách gửi, khớp với các hạng phòng của khách sạn' },
    { k: 'ai', text: 'Dạ đây là phòng **Deluxe view biển** ạ, giá **1.850.000đ/đêm**, ở tối đa 2 người lớn 1 bé.' },
    { k: 'ai', card: { title: 'Phòng Deluxe Ocean View ban công · 32m² · 1 giường đôi · gồm buffet sáng', gia: '1.850.000đ/đêm' } },
    { k: 'ai', img: 'phong-2' },
    { k: 'ai', text: 'Anh cho em xin **ngày đến, số đêm** và **tuổi 2 bé** để em check phòng cả 2 hạng nha.' },

    // Khách im → màn hình phụ: gắn thẻ (3 hashtag của quảng cáo + thẻ từ cuộc chat), bám đuổi 3 tin theo thẻ
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Preny tự gắn thẻ đúng phòng khách quan tâm', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi theo thẻ', t: '3 tin ngắn: 15 phút, 3 tiếng, 20 tiếng', s: 'Chỉ nói về đúng phòng khách quan tâm' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Anh Khoa ơi, Giáng sinh **Family Suite** kín nhanh lắm ạ. Anh nhắn em ngày đến, số đêm để em giữ phòng nha 😊' },
    { k: 'p', a: 'r1', d: 900 },
    { k: 'time', nhan: '3 tiếng sau', gio: '17:49', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Em gửi anh ảnh thật hồ bơi và buffet sáng nha 📸 Hồ bơi có **khu riêng cho bé**, mở 6h–21h.' },
    { k: 'ai', imgs: ['ho-boi', 'buffet-sang'] },
    { k: 'p', a: 'r2', d: 900 },
    { k: 'time', nhan: '20 tiếng sau', gio: '10:49', ngay: 'T5 19/11/2026', d: 700 },
    { k: 'ai', text: 'Đặt trong hôm nay em **giảm 10% tiền phòng**, **miễn phụ thu ăn sáng cho bé** ạ. Giáng sinh chỉ còn 2 phòng Family Suite thôi anh 🎄' },
    { k: 'p', a: 'r3', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 3, khách gửi lịch trình', s: 'AI tư vấn hạng phòng ngay khi khách nhắn' },
    { k: 'kh', text: '24/12 a bay vào, hạ cánh 11h40, ở 3 đêm. 2 bé 6t với 10t' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },

    { k: 'cap', e: 'Tư vấn đúng hạng phòng', t: '2 người lớn, 2 bé → Family Suite vừa nhất', s: 'Rồi chủ động hỏi: 1 Family Suite hay 2 phòng Deluxe?' },
    { k: 'ai', text: 'Dạ 2 người lớn 2 bé ở **1 Family Suite** là vừa ạ, Deluxe thì phải lấy 2 phòng. Anh chọn loại nào nha?' },
    { k: 'kh', text: '1 Family Suite thôi em' },
    { k: 'cap', e: 'Hỏi đúng thứ còn thiếu', t: 'Khách chọn Family Suite: AI hỏi tiếp tầng', s: 'Gửi ảnh 2 vị trí phòng để khách chọn nhanh' },
    { k: 'ai', text: 'Dạ Family Suite còn **tầng 12 view biển** và **tầng 2 sát hồ bơi**, cùng giá ạ. Anh thích tầng nào?' },
    { k: 'ai', imgs: ['ban-cong', 'ho-boi'] },
    { k: 'kh', text: 'Tầng 12 nha em' },
    { k: 'ai', text: 'Dạ em giữ Family Suite **tầng 12**, 24–27/12, đón sân bay **11:40** miễn phí ạ. Anh gửi em **họ tên, SĐT** người đặt nha.' },
    { k: 'cap', e: 'Kiểm tra dữ liệu', t: 'SĐT thiếu số → hỏi lại ngay lập tức' },
    { k: 'kh', text: 'Trần Đăng Khoa 090567812' },
    { k: 'ai', text: 'Dạ số **090567812** hình như thiếu 1 số, anh kiểm tra lại giúp em nha.' },
    { k: 'kh', text: '0905678123' },
    { k: 'cap', e: 'Chốt đơn đặt phòng', t: 'Tự tổng hợp đơn: phòng, ngày, số khách, SĐT' },
    { k: 'ai', text: 'Dạ anh kiểm tra lại đơn đặt phòng giúp em nha:\n– Family Suite view biển, tầng 12\n– 3 đêm 24–27/12 · 2 người lớn, 2 bé\n– Đón sân bay 11:40 · nhận phòng sớm\n– Tổng: **6.615.000đ** (đã giảm 10%)\n– Trần Đăng Khoa · 0905 678 123\nAnh xác nhận giúp em nha.', nut: 'Quản lý đặt phòng', d: 3600 },
    { k: 'cap', e: 'Xong', t: 'Khách chỉ cần nói "Ok em"' },
    { k: 'kh', text: 'Ok em' },
    { k: 'ai', text: 'Dạ em lên đơn đặt phòng cho anh liền nha ⚡', d: 1300 },

    // Chốt đơn → màn hình phụ: gửi sự kiện mua hàng lên Facebook → đơn đặt phòng tự động → lễ tân xác nhận
    { k: 'cap', e: 'Gửi đơn về Facebook', t: 'Sự kiện mua hàng gửi ngay lên Facebook', s: 'Quảng cáo tối ưu theo đơn thật' },
    { k: 'panel', v: 'capi', d: 900 },
    { k: 'p', a: 'flow', d: 1500 }, { k: 'p', a: 'event', d: 1300 }, { k: 'p', a: 'ok', d: 2200 },
    { k: 'cap', e: 'Đơn đặt phòng tự động', t: 'Đơn tự lên trên Preny. Không cần ghi tay.' },
    { k: 'panel', v: 'don', d: 900 },
    { k: 'p', a: 'f1', d: 550 }, { k: 'p', a: 'f2', d: 550 }, { k: 'p', a: 'f3', d: 550 }, { k: 'p', a: 'f4', d: 550 },
    { k: 'p', a: 'cho', d: 900 },
    { k: 'cap', e: 'Lễ tân xác nhận', t: 'Báo lễ tân: bấm 1 lần là đơn lên', s: 'Người thật kiểm tra lại phòng trước khi giữ' },
    { k: 'p', a: 'nv', d: 1700 }, { k: 'p', a: 'bam', d: 1100 },
    { k: 'p', a: 'xn', d: 3000 },
    { k: 'panel', v: null, d: 500 },

    // Đặt xong: tin cảm ơn kèm 5 dịch vụ đặt thêm (deck.afterSale.sp của bài 1)
    { k: 'cap', e: 'Bán thêm sau đặt phòng', t: 'Cảm ơn khách, gửi kèm 5 dịch vụ đang giảm giá', s: 'Khách bấm đặt thêm ngay trong Messenger' },
    { k: 'ai', text: 'Dạ cảm ơn anh Khoa nha 🎉 Phòng đã được xác nhận. Mấy dịch vụ này đang giảm giá, anh xem thử nha:' },
    { k: 'car', sp: [
        { img: 'giang-sinh', ten: 'Tiệc tối Giáng sinh 24/12', gia: '1.290.000đ', cu: '1.520.000đ', giam: '-15%' },
        { img: 'hai-san', ten: 'Set hải sản tối 2 người', gia: '890.000đ', cu: '1.050.000đ', giam: '-15%' },
        { img: 'nha-hang', ten: 'Bàn ăn tối view biển', gia: '1.500.000đ', cu: '1.800.000đ', giam: '-17%' },
        { img: 'buffet-sang', ten: 'Buffet sáng thêm khách', gia: '250.000đ', cu: '300.000đ', giam: '-17%' },
        { img: 'ho-boi', ten: 'Cabana hồ bơi nửa ngày', gia: '600.000đ', cu: '750.000đ', giam: '-20%' },
      ], d: 5200 },

    // Chăm sóc qua Zalo: sau khi khách trả phòng (27/12). Không có tin nhắc trước ngày đến.
    { k: 'zalo', gio: '10:00', ngay: 'T2 28/12/2026', chip: 'Sau khi khách trả phòng', d: 1500 },
    { k: 'cap', e: 'Chăm sóc qua Zalo', t: 'Khách trả phòng: AI hỏi thăm kỳ nghỉ', s: 'Xin đánh giá ngay trong tin Zalo OA của khách sạn' },
    { k: 'zns', zns: {
        img: 'ho-boi', tieuDe: 'Anh Khoa ơi, kỳ nghỉ của cả nhà có vui không ạ?',
        noiDung: 'Biển Lam cảm ơn gia đình anh đã nghỉ tại phòng **Family Suite** (đơn **#BL24127** · 24–27/12). Anh đánh giá giúp Biển Lam nha!',
        nut: 'Đánh giá kỳ nghỉ',
      }, d: 4200 },
    { k: 'cap', e: 'ZBS · Được đặt nhiều', t: '1 tuần sau: gửi dịch vụ được đặt nhiều', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '10:00', ngay: 'T2 04/01/2027', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['tiec', 'hai-san', 'nha-hang', 'phong-family'], nhan: 'ĐƯỢC ĐẶT NHIỀU THÁNG NÀY', mau: '#F97316',
        tieuDe: '🔥 Được đặt nhiều nhất tại Biển Lam',
        noiDung: '**Tiệc tất niên** phòng riêng, buffet hải sản cuối tuần và phòng **Family Suite** đang được khách Biển Lam chọn nhiều nhất tháng này.',
        nut: 'Xem ngay',
      }, d: 4200 },
    { k: 'cap', e: 'ZBS · Ưu đãi khách cũ', t: '1 tuần sau nữa: gửi voucher cho lần nghỉ tới', s: 'Kéo khách quay lại đặt tiếp, không cần khách nhắn' },
    { k: 'zstamp', gio: '10:00', ngay: 'T2 11/01/2027', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['ban-cong', 'phong-2', 'ho-boi', 'buffet-sang'], nhan: 'KHÁCH CŨ · GIẢM 15% GIÁ PHÒNG',
        tieuDe: 'Tặng anh Khoa voucher 15%',
        noiDung: 'Nhập mã **BIENLAM15** giảm **15%** giá phòng cho lần nghỉ tiếp theo. Hạn dùng đến 30/06/2027.',
        nut: 'Đặt phòng ngay',
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
    tag: { av: 'TK', ten: 'Trần Đăng Khoa', sub: 'Messenger · từ quảng cáo Family Suite',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#familysuite', 'qt hot'], ['#giangsinh', 'qt hot'], ['#mobile', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#DeluxeViewBien', 'qt']]]],
      im: 'Khách im từ 14:49, sau khi được báo giá',
      rule: { lb: 'Bám đuổi theo thẻ #familysuite', tieuDe: '3 tin ngắn về phòng Family Suite',
              dong: [['15 phút', 'Nhắc phòng Giáng sinh kín nhanh'], ['3 tiếng', 'Gửi ảnh thật hồ bơi, buffet'], ['20 tiếng', 'Ưu đãi đặt trong ngày']] },
      reply: 'Khách gửi lịch trình · dừng bám đuổi' },
    capi: { tieuDe: 'Gửi đơn đặt phòng cho Facebook', event: 'Purchase', nhan: 'SỰ KIỆN MUA HÀNG', giaTri: '6.615.000đ', pk: 'Purchase · 6.615.000đ',
      dong: [['Đơn đặt phòng', '#BL24127 · Family Suite · 3 đêm'], ['Nguồn khách', 'Quảng cáo Family Suite → Messenger'], ['Giá trị', '6.615.000 VND'], ['Event ID', 'BL24127-PURCHASE (chống trùng)']],
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
