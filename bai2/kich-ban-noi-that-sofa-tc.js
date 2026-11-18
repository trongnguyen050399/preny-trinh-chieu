/* Kịch bản Bài 2 (video demo NGANG 16:9 tự chạy): NỘI THẤT, SOFA · nhóm thương mại điện tử, theo mạch mẫu YaMe (18/11/2026).
   Nội dung lấy từ bài 1 (demo/kich-ban/noi-that-sofa-tc.js): shop Casa Mộc, sofa 3 chỗ (bình luận anh Khánh, Bình Dương),
   sofa góc chữ L Milano 2m4 28.900.000đ + kệ tivi âm tường 3m2 7.500.000đ (chị Thu Hà, combo 34.900.000đ đã giảm 1.500.000đ),
   ca khó: căn hộ tầng 12 → hỏi thang máy để xếp xe, người khiêng.
   Tên shop, khách, SĐT, giá, ưu đãi: dữ liệu minh họa. Ảnh: ảnh có sẵn của bài 1 (Unsplash, không phải hàng của shop). */
window.VN_KB = {
  ten: 'Nội thất, Sofa video ngang',
  ketSub: 'Để AI bán hàng cho shop nội thất của bạn',
  shop: { ten: 'Casa Mộc', av: 'CM', mau: '#8B5E34', sub: 'Thường trả lời ngay' },
  anh: {
    'sofa-l': '../assets/img/u/1759722665610-e13e59aa117b_800x800.jpg',        // sofa góc chữ L màu kem
    'phong-khach-1': '../assets/img/u/1759722668102-0d43a5696411_800x800.jpg', // sofa chữ L xám ghi + bàn trà
    'phong-khach-2': '../assets/img/u/1583847268964-b28dc8f51f92_800x800.jpg', // sofa 3 chỗ vải xám, bàn tròn gỗ
    'ke-tivi-am': '../assets/img/u/1774716925888-190de2471de2_800x800.jpg',    // kệ tivi âm tường trắng
    'ke-tivi-thap': '../assets/img/u/1586024486164-ce9b3d87e09f_800x800.jpg',  // kệ tivi thấp
    'ban-tra': '../assets/img/u/1777513538143-8525eb3943f6_800x800.jpg',       // bàn trà gỗ mộc
    'showroom': '../assets/img/u/1687180498602-5a1046defaa4_800x800.jpg',      // showroom sofa
    'tham': '../assets/img/u/1534889156217-d643df14f14a_800x800.jpg',          // sofa vải + thảm
    'goi-tua': '../assets/img/u/1696774276390-6ce82111140f_800x800.jpg',       // gối tựa trên sofa da
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= TÌNH HUỐNG 1 · BÀI VIẾT → BÌNH LUẬN → INBOX ================= */
    { k: 'canh', nhan: 'Tình huống 1 · Bình luận xin giá → Inbox', gio: '22:10' },
    { k: 'fb', post: {
        gio: '3 giờ', img: 'phong-khach-2', likes: '864', soCmt: '57 bình luận',
        text: 'Sofa 3 chỗ nhập khẩu châu Âu 🛋️ Có bản 2m1 và 2m3, bọc vải chống cào hoặc da. Giao lắp tận nhà, bảo hành khung 5 năm.',
      }, d: 1600 },
    { k: 'cap', e: 'Bình luận xin giá', t: 'Khách hỏi giá ngay dưới bài viết', s: 'Một khách khác hỏi nên chọn da hay vải' },
    { k: 'cmt', i: 0, ten: 'Đỗ Khánh', av: 'ĐK', text: 'Sofa 3 chỗ giá bao nhiêu, giao Bình Dương được không shop?' },
    { k: 'cmt', i: 1, ten: 'Thảo Vy', av: 'TV', text: 'Nhà có mèo thì nên chọn da hay vải vậy shop?' },
    { k: 'cap', e: 'Trả lời cả 2 bình luận', t: 'Trả lời ngắn gọn, mời khách vào inbox', s: 'Tư vấn chi tiết trong tin nhắn riêng' },
    { k: 'rep', i: 0, text: 'Mình check ib shop nha 💬' },
    { k: 'rep', i: 1, text: 'Mình check ib shop nha 💬' },

    { k: 'ms', ref: { loai: 'cmt', img: 'phong-khach-2', dong1: 'Bạn đã bình luận về bài viết của Casa Mộc', dong2: '"Sofa 3 chỗ giá bao nhiêu, giao Bình Dương được không shop?"' }, gio: '22:12' },
    { k: 'cap', e: 'Tự động báo giá', t: 'Inbox trước: báo giá, gửi ảnh thật', s: 'Viết ngắn gọn, tự nhiên như người bán' },
    { k: 'ai', text: 'Dạ chào anh Khánh, sofa 3 chỗ bên em giá **từ 24.500.000đ** ạ, giao lắp Bình Dương **2–3 ngày**.' },
    { k: 'ai', card: { title: 'Sofa 3 chỗ nhập khẩu châu Âu · Bản 2m1, 2m3 · Bảo hành khung 5 năm', gia: '24.500.000đ' } },
    { k: 'ai', imgs: ['phong-khach-2', 'tham', 'goi-tua'] },
    { k: 'ai', text: 'Sofa có bản **2m1, 2m3**, bọc **vải chống cào** hoặc **da**. Phòng khách nhà anh ngang bao nhiêu ạ?' },
    { k: 'cap', e: 'Tư vấn kích thước', t: 'Khách trả lời 1 câu, AI chọn đúng bản', s: 'Kiểm tra luôn bản khách chọn còn hàng' },
    { k: 'kh', text: 'phòng ngang 3m2 e, lấy vải xám nha' },
    { k: 'ai', text: 'Dạ tường 3m2 anh lấy bản **2m1** là vừa ạ, vải xám còn hàng. Anh gửi em **SĐT và địa chỉ** để em lên đơn nha 😊' },
    { k: 'cap', e: 'Chốt đơn', t: 'Xin SĐT, địa chỉ: khách đưa đủ', s: 'AI tóm tắt đơn ngay trong chat' },
    { k: 'kh', text: '0977 418 260, 18 Đại lộ Bình Dương, Thuận An, Bình Dương' },
    { k: 'ai', text: 'Dạ em lên đơn cho anh rồi nha:\n– Sofa 3 chỗ bản 2m1, vải xám\n– **24.500.000đ**\n– 0977 418 260\n– 18 Đại lộ Bình Dương, Thuận An, Bình Dương\nShop gọi anh xác nhận rồi hẹn ngày giao lắp ạ 🎉', d: 3800 },

    /* ================= TÌNH HUỐNG 2 · QUẢNG CÁO → MESSENGER ================= */
    { k: 'canh', nhan: 'Tình huống 2 · Quảng cáo → Messenger', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'sofa-l', nhan: 'MESSENGER', tieuDe: 'Sofa Milano · Nhắn shop tư vấn kích thước', nut: 'Gửi tin nhắn',
        text: 'Sofa góc chữ L Milano nhập nguyên chiếc châu Âu 🛋️ Vải chống thấm, chống cào, nhà có bé và thú cưng vẫn yên tâm. Giao lắp miễn phí nội thành. #sofamilano #sofagoc #mobile',
      }, d: 1500 },
    { k: 'cap', e: 'Quảng cáo Facebook', t: 'Khách bấm "Gửi tin nhắn" từ quảng cáo', s: 'Hỏi gì, AI trả lời ngay lập tức' },
    { k: 'tap', d: 1100 },
    { k: 'ms', ref: { loai: 'ad', img: 'sofa-l', dong1: 'Hà đã trả lời một quảng cáo', dong2: 'Sofa Milano · Sofa góc chữ L' }, gio: '14:47', d: 900 },
    { k: 'kh', text: 'Sofa này giá bao nhiêu shop?' },
    { k: 'cap', e: 'Khách hỏi giá', t: 'AI gửi đúng mẫu trên quảng cáo kèm giá', s: 'Khách không cần mô tả lại sản phẩm' },
    { k: 'ai', text: 'Dạ chào chị Hà, sofa **Milano** trên quảng cáo bản 2m4 giá **28.900.000đ** ạ, bảo hành khung 5 năm.' },
    { k: 'ai', img: 'sofa-l' },
    { k: 'ai', text: 'Phòng khách nhà mình ngang bao nhiêu để em tư vấn kích thước nha chị?' },
    { k: 'cap', e: 'Không hỏi lại khách', t: 'Khách chụp mẫu khác hỏi "Này thì sao"', s: 'Chỉ một câu cộc lốc, không ghi tên mẫu' },
    { k: 'kh', shot: { img: 'ke-tivi-am', cap: 'Kệ tivi âm tường xưởng làm đúng kích thước nhà bạn 📺' } },
    { k: 'kh', text: 'Này thì sao' },
    { k: 'cap', e: 'Nhận diện sản phẩm từ ảnh', t: 'Đúng mẫu. Đúng giá. Đúng lịch xưởng.', s: 'AI đọc ảnh khách gửi, khớp với kho sản phẩm của shop' },
    { k: 'ai', text: 'Dạ đây là **kệ tivi âm tường** xưởng em làm theo kích thước, **7–10 ngày** là xong ạ.' },
    { k: 'ai', card: { title: 'Kệ tivi âm tường · MDF lõi xanh chống ẩm · Làm theo kích thước', gia: '7.500.000đ' } },
    { k: 'ai', img: 'ke-tivi-am' },
    { k: 'ai', text: 'Chị cho em xin chiều ngang phòng và tường tivi để em tư vấn cả 2 nha.' },

    // Khách im → màn hình phụ: gắn thẻ (3 hashtag của quảng cáo + thẻ từ cuộc chat), bám đuổi 3 tin theo thẻ
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Preny tự gắn thẻ đúng mẫu khách quan tâm', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi theo thẻ', t: '3 tin ngắn: 15 phút, 3 tiếng, 20 tiếng', s: 'Chỉ nói về đúng mẫu khách quan tâm' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Chị Hà ơi, sofa **Milano 2m4** vải chống cào còn sẵn ở kho ạ. Chị nhắn em chiều ngang phòng để em tư vấn nha 😊' },
    { k: 'p', a: 'r1', d: 900 },
    { k: 'time', nhan: '3 tiếng sau', gio: '17:49', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Em gửi chị ảnh thật sofa Milano đặt trong phòng khách nha 📸 Đổ sữa lau là sạch, mèo cào không để vết.' },
    { k: 'ai', img: 'phong-khach-1' },
    { k: 'p', a: 'r2', d: 900 },
    { k: 'time', nhan: '20 tiếng sau', gio: '10:49', ngay: 'T5 19/11/2026', d: 700 },
    { k: 'ai', text: 'Combo **sofa Milano + kệ tivi âm tường** đặt trong tuần em **giảm 1.500.000đ + tặng gối tựa** ạ 🎁 Em giữ hàng cho chị nha?' },
    { k: 'p', a: 'r3', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 3, khách trả lời để chốt đơn', s: 'AI tư vấn kích thước ngay khi khách nhắn' },
    { k: 'kh', text: 'Phòng ngang 3m6, tường tivi 3m2 e' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },

    { k: 'cap', e: 'Tư vấn kích thước', t: 'Tường 3m6 → sofa 2m4. Kệ làm đúng 3m2.', s: 'Rồi chủ động hỏi: lấy combo hay chỉ sofa?' },
    { k: 'ai', text: 'Dạ tường 3m6 chị lấy sofa **2m4** là cân đối ạ, kệ tivi xưởng làm **đúng 3m2**. Chị lấy combo hay chỉ sofa nha?' },
    { k: 'kh', text: 'Lấy combo nha em' },
    { k: 'cap', e: 'Hỏi đúng thứ còn thiếu', t: 'Khách chọn combo: AI hỏi tiếp màu vải', s: 'Gửi ảnh 2 màu để khách chọn nhanh' },
    { k: 'ai', text: 'Dạ sofa Milano có 2 màu vải **Kem** và **Xám ghi**, cùng giá ạ. Chị lấy màu nào nha?' },
    { k: 'ai', imgs: ['sofa-l', 'phong-khach-1'] },
    { k: 'kh', text: 'Màu kem nha' },
    { k: 'ai', text: 'Dạ em ghi combo **sofa 2m4 màu Kem + kệ tivi 3m2**, **34.900.000đ** ạ. Chị gửi em **SĐT và địa chỉ** nhận hàng nha.' },
    { k: 'cap', e: 'Kiểm tra dữ liệu', t: 'Căn hộ tầng 12 → hỏi ngay thang máy', s: 'Để xếp xe và người khiêng sofa 2m4' },
    { k: 'kh', text: '0938 246 135, căn 12.05 tòa B, 45 Nguyễn Thị Thập Q7' },
    { k: 'ai', text: 'Dạ căn 12.05 là tầng 12, tòa nhà mình **có thang máy** chở được sofa 2m4 không chị?' },
    { k: 'kh', text: 'Có thang máy hàng nha em' },
    { k: 'cap', e: 'Chốt đơn', t: 'Tự tổng hợp đơn: sản phẩm, màu, kích thước, SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ chị kiểm tra lại đơn giúp em nha:\n– Sofa Milano 2m4, vải chống cào Kem\n– Kệ tivi âm tường 3m2\n– Tổng: **34.900.000đ** (đã giảm 1.500.000đ, tặng gối tựa)\n– 0938 246 135\n– Căn 12.05 tòa B, 45 Nguyễn Thị Thập, Q.7 · có thang máy\nChị xác nhận giúp em đơn này nha.', nut: 'Quản lý đơn hàng', d: 3800 },
    { k: 'cap', e: 'Xong', t: 'Khách chỉ cần nói "Ok em"' },
    { k: 'kh', text: 'Ok em' },
    { k: 'ai', text: 'Dạ em lên đơn cho chị liền nha ⚡', d: 1300 },

    // Chốt đơn → màn hình phụ: gửi đơn hàng cho Facebook → đơn tự động
    { k: 'cap', e: 'Gửi đơn về Facebook', t: 'Sự kiện mua hàng gửi ngay lên Facebook', s: 'Quảng cáo tối ưu theo đơn thật' },
    { k: 'panel', v: 'capi', d: 900 },
    { k: 'p', a: 'flow', d: 1500 }, { k: 'p', a: 'event', d: 1300 }, { k: 'p', a: 'ok', d: 2200 },
    { k: 'cap', e: 'Đơn hàng tự động', t: 'Đơn tự lên trên Preny. Shop chỉ việc giao.' },
    { k: 'panel', v: 'don', d: 900 },
    { k: 'p', a: 'f1', d: 550 }, { k: 'p', a: 'f2', d: 550 }, { k: 'p', a: 'f3', d: 550 }, { k: 'p', a: 'f4', d: 550 },
    { k: 'p', a: 'cho', d: 900 },
    { k: 'cap', e: 'Nhân viên xác nhận', t: 'Báo chủ shop: bấm 1 lần là đơn lên', s: 'Người thật kiểm tra lại trước khi giao' },
    { k: 'p', a: 'nv', d: 1700 }, { k: 'p', a: 'bam', d: 1100 },
    { k: 'p', a: 'xn', d: 3000 },
    { k: 'panel', v: null, d: 500 },

    // Mua xong: tin cảm ơn kèm 5 món đang giảm giá
    { k: 'cap', e: 'Bán thêm sau mua', t: 'Cảm ơn khách, gửi kèm 5 món đang giảm giá', s: 'Khách bấm "Mua ngay" ngay trong Messenger' },
    { k: 'ai', text: 'Dạ cảm ơn chị Hà nha 🎉 Shop giao lắp sofa thứ Bảy 21/11 ạ. Mấy món phối cùng sofa Milano đang giảm giá, chị xem thử nha:' },
    { k: 'car', sp: [
        { img: 'ban-tra', ten: 'Bàn trà gỗ mộc 120 × 60 cm', gia: '3.200.000đ', cu: '3.600.000đ', giam: '-11%' },
        { img: 'tham', ten: 'Thảm phòng khách 2m × 3m', gia: '2.400.000đ', cu: '2.900.000đ', giam: '-17%' },
        { img: 'goi-tua', ten: 'Bộ gối tựa sofa', gia: '890.000đ', cu: '1.090.000đ', giam: '-18%' },
        { img: 'phong-khach-2', ten: 'Bàn tròn gỗ đặt cạnh sofa (bộ 2)', gia: '2.900.000đ', cu: '3.500.000đ', giam: '-17%' },
        { img: 'ke-tivi-thap', ten: 'Kệ tivi thấp cho phòng ngủ', gia: '5.900.000đ', cu: '6.900.000đ', giam: '-14%' },
      ], d: 5200 },

    // Chăm sóc sau bán qua Zalo
    { k: 'zalo', gio: '19:30', ngay: 'CN 22/11/2026', chip: '3 ngày sau · khách đã nhận sofa', d: 1500 },
    { k: 'cap', e: 'Chăm sóc sau bán qua Zalo', t: 'Khách nhận sofa: AI hỏi dùng có ưng không', s: 'Xin đánh giá ngay trong tin Zalo OA của shop' },
    { k: 'zns', zns: {
        img: 'sofa-l', tieuDe: 'Chị Hà ơi, sofa có ưng không ạ?',
        noiDung: 'Casa Mộc cảm ơn chị đã nhận sofa đơn **#CM40719** (Sofa Milano 2m4 · Kem). Vải chống cào chị hút bụi 1 lần/tuần là sạch. Chị đánh giá giúp shop nha!',
        nut: 'Đánh giá sản phẩm',
      }, d: 4200 },
    { k: 'cap', e: 'ZBS · Sản phẩm bán chạy', t: '1 tuần sau: gửi mẫu bán chạy qua Zalo', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'CN 29/11/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['phong-khach-1', 'ke-tivi-am', 'ban-tra', 'tham'], nhan: 'TOP BÁN CHẠY TUẦN NÀY', mau: '#F97316',
        tieuDe: '🔥 Top bán chạy tuần này tại Casa Mộc',
        noiDung: 'Sofa góc **Milano**, kệ tivi **âm tường** xưởng làm và bàn trà **gỗ mộc** đang được khách Casa Mộc chọn nhiều nhất tuần qua.',
        nut: 'Xem ngay',
      }, d: 4600 },
    { k: 'cap', e: 'ZBS · Khuyến mãi', t: '1 tuần sau nữa: gửi ưu đãi cho khách cũ', s: 'Kéo khách quay lại mua tiếp, không cần khách nhắn' },
    { k: 'zstamp', gio: '19:30', ngay: 'CN 06/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['showroom', 'ke-tivi-thap', 'goi-tua', 'phong-khach-2'], nhan: 'KHÁCH CŨ · VOUCHER 1.000.000Đ',
        tieuDe: 'Ưu đãi riêng cho khách đã mua tại Casa Mộc',
        noiDung: 'Tặng chị Hà voucher **1.000.000đ** (mã **CASA1TR**) cho đơn từ 10.000.000đ, áp dụng cả tủ giày, tủ áo xưởng làm. Hạn dùng đến 31/01/2027.',
        nut: 'Dùng voucher ngay',
      }, d: 4800 },

    { k: 'tongket', d: 8500 },
    { k: 'outro', d: 5200 },
  ],
  // Slide tổng kết cuối video: giống hệt YaMe
  tongKet: { tieuDe: 'Quy trình Preny AI giúp', em: 'tăng tỷ lệ chốt đơn', cot: [
    { ten: 'Khách hàng', icon: 'users', dong: ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến'] },
    { ten: 'AI Chatbot', icon: 'bot', dong: ['Phản hồi nhanh tức thì', 'Kêu gọi khách hàng mua hàng', 'Lấy thông tin và chốt đơn'] },
    { ten: 'Bám đuổi', icon: 'bell', dong: ['Gửi 5 tin nhắn trong 7 ngày để bám đuổi khách hàng'] },
    { ten: 'Chốt đơn', icon: 'check', dong: ['Lên đơn', 'Gửi sự kiện mua hàng lên Facebook'] },
    { ten: 'Mua lại', icon: 'refresh', dong: ['Tự động gửi 1 tin nhắn mỗi tuần qua FB và Zalo', 'Sản phẩm bán chạy, giảm giá, sản phẩm mới'] },
  ] },
  panels: {
    tag: { av: 'TH', ten: 'Nguyễn Thu Hà', sub: 'Messenger · từ quảng cáo Sofa Milano',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#sofamilano', 'qt hot'], ['#sofagoc', 'qt hot'], ['#mobile', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#KeTiviAmTuong', 'qt']]]],
      im: 'Khách im từ 14:49, sau khi được báo giá',
      rule: { lb: 'Bám đuổi theo thẻ #sofamilano', tieuDe: '3 tin ngắn về sofa Milano',
              dong: [['15 phút', 'Nhắc bản 2m4 còn sẵn'], ['3 tiếng', 'Gửi ảnh thật trong phòng khách'], ['20 tiếng', 'Ưu đãi combo sofa + kệ tivi']] },
      reply: 'Khách gửi kích thước phòng · dừng bám đuổi' },
    capi: { tieuDe: 'Gửi đơn hàng cho Facebook', event: 'Purchase', nhan: 'SỰ KIỆN MUA HÀNG', giaTri: '34.900.000đ', pk: 'Purchase · 34.900.000đ',
      dong: [['Đơn hàng', '#CM40719 · Sofa Milano 2m4 + kệ tivi'], ['Nguồn khách', 'Quảng cáo Sofa Milano → Messenger'], ['Giá trị', '34.900.000 VND'], ['Event ID', 'CM40719-PURCHASE (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện mua hàng' },
  },
  donHang: {
    ma: '#CM40719', sp: 'Combo sofa Milano 2m4 + kệ tivi âm tường 3m2', bien: 'Vải chống cào Kem · tặng gối tựa · x1', img: 'sofa-l', gia: '34.900.000đ',
    phi: ['Giao & lắp', 'miễn phí nội thành'],
    nv: { ten: 'Anh Tùng · chủ shop', av: 'AT' },
    ten: 'Nguyễn Thu Hà', sdt: '0938 246 135', dc: 'Căn 12.05, Tòa B, 45 Nguyễn Thị Thập, Q.7, TP.HCM · có thang máy', gio: '11:05 · 19/11/2026',
  },
};
