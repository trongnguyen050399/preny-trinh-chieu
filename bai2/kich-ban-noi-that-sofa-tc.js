/* Bài 2 (video demo ngang tự chạy): NỘI THẤT, SOFA, nhóm thương mại điện tử. Viết lại 18/11/2026 theo mạch Yến chưng tươi người dùng chốt cùng ngày:
   - 1 cảnh duy nhất: bài quảng cáo sofa Milano, 2 khách bình luận (hỏi giá, hỏi giao lắp Bình Dương) → trả lời cả 2 "Mình check ib shop nha"
     → AI nhắn inbox trước: giá + đúng ảnh quảng cáo, hỏi 1 điều (phòng khách ngang bao nhiêu) → khách trả lời: tường 3m6, nhà có 2 bé + 1 mèo
     → AI chọn bản 2m4, vải chống thấm chống cào, hỏi màu vải → khách chọn Kem → AI xin SĐT + địa chỉ → khách im
     → gắn thẻ (3 hashtag quảng cáo + #baogia + #MauKem) → bám đuổi 3 tin 15 phút, 3 tiếng, 20 tiếng → khách gửi SĐT, địa chỉ
     (ca khó: căn hộ tầng 12 → hỏi thang máy để xếp xe, người khiêng) → tóm tắt đơn → Purchase lên Facebook
     → đơn tự động, chủ shop bấm xác nhận → cảm ơn + 5 món phối cùng sofa đang giảm giá → Zalo: hỏi thăm, bán chạy, khuyến mãi → tổng kết → logo.
   - Chỉ 1 sản phẩm từ đầu tới cuối (sofa góc chữ L Milano 2m4), không có đoạn khách hỏi kệ tivi.
   Nội dung lấy từ bài 1 (demo/kich-ban/noi-that-sofa-tc.js): shop Casa Mộc, sofa Milano 2m4 28.900.000đ, chị Thu Hà (căn 12.05 tòa B, Q.7),
   5 món bán thêm (afterSale.sp), voucher CASA1TR (afterSale.zbs).
   Tên shop, khách, SĐT, giá, ưu đãi: minh họa. Ảnh: ảnh có sẵn của bài 1 (Unsplash, không phải hàng của shop). */
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
    'xuong-go': '../assets/img/u/1788296817269-8df0458ab799_800x800.jpg',      // xưởng gỗ của shop
    'tham': '../assets/img/u/1534889156217-d643df14f14a_800x800.jpg',          // sofa vải + thảm
    'goi-tua': '../assets/img/u/1696774276390-6ce82111140f_800x800.jpg',       // gối tựa trên sofa da
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= BÌNH LUẬN QUẢNG CÁO → INBOX (cảnh duy nhất) ================= */
    { k: 'canh', nhan: 'Bình luận quảng cáo → Inbox', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'sofa-l', nhan: 'MESSENGER', tieuDe: 'Sofa Milano · Nhắn shop tư vấn kích thước', nut: 'Gửi tin nhắn',
        text: 'Sofa góc chữ L Milano nhập nguyên chiếc châu Âu 🛋️ Vải chống thấm, chống cào, nhà có bé và thú cưng vẫn yên tâm. Giao lắp miễn phí nội thành. #sofamilano #sofagoc #mobile',
      }, d: 1500 },
    { k: 'cap', e: 'Bình luận hỏi giá', t: 'Khách hỏi giá ngay dưới quảng cáo', s: 'Một khách khác hỏi giao lắp Bình Dương' },
    { k: 'cmt', i: 0, ten: 'Thu Hà', av: 'TH', text: 'Sofa này giá sao shop?' },
    { k: 'cmt', i: 1, ten: 'Đỗ Khánh', av: 'ĐK', text: 'Giao lắp Bình Dương được không shop?' },
    { k: 'cap', e: 'Trả lời cả 2 bình luận', t: 'Trả lời ngắn gọn, mời khách vào inbox', s: 'Tư vấn chi tiết trong tin nhắn riêng' },
    { k: 'rep', i: 0, text: 'Mình check ib shop nha 💬' },
    { k: 'rep', i: 1, text: 'Mình check ib shop nha 💬' },
    { k: 'ms', ref: { loai: 'cmt', img: 'sofa-l', dong1: 'Bạn đã bình luận về quảng cáo của Casa Mộc', dong2: '"Sofa này giá sao shop?"' }, gio: '14:47' },
    { k: 'cap', e: 'AI nhắn trước', t: 'Inbox trước: báo giá, gửi đúng ảnh quảng cáo', s: 'Khách không cần mô tả lại sản phẩm' },
    { k: 'ai', text: 'Dạ chào chị Hà, sofa góc chữ L **Milano** trên quảng cáo bản 2m4 giá **28.900.000đ** ạ, bảo hành khung 5 năm.' },
    { k: 'ai', img: 'sofa-l' },
    { k: 'ai', text: 'Phòng khách nhà mình **ngang bao nhiêu** để em tư vấn đúng kích thước nha chị?' },

    { k: 'cap', e: 'Khách trả lời', t: 'Tường 3m6, nhà có bé và mèo', s: 'AI chọn đúng kích thước, đúng chất vải' },
    { k: 'kh', text: 'Phòng ngang 3m6 e, nhà có 2 bé với 1 bé mèo' },
    { k: 'ai', text: 'Dạ tường 3m6 chị lấy bản **2m4** là cân đối ạ. Nhà có bé và mèo em gợi ý **vải chống thấm, chống cào**, đổ sữa lau là sạch nha.' },
    { k: 'cap', e: 'Hỏi đúng thứ còn thiếu', t: 'Có kích thước rồi: AI hỏi tiếp màu vải', s: 'Gửi ảnh 2 màu để khách chọn nhanh' },
    { k: 'ai', text: 'Vải chống cào có 2 màu **Kem** và **Xám ghi**, cùng giá ạ. Chị lấy màu nào nha?' },
    { k: 'ai', imgs: ['sofa-l', 'phong-khach-1'] },
    { k: 'kh', text: 'Màu kem nha e' },
    { k: 'cap', e: 'Xin thông tin lên đơn', t: 'Chọn xong: AI xin SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ em ghi **sofa Milano 2m4, vải chống cào màu Kem**, 28.900.000đ. Chị gửi em **SĐT và địa chỉ** nhận hàng để em lên đơn nha.' },

    // Khách im sau khi được xin SĐT, địa chỉ → màn hình phụ: gắn thẻ (3 hashtag quảng cáo + thẻ từ cuộc chat), bám đuổi 3 tin
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Chưa gửi SĐT: Preny tự gắn thẻ khách', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi theo thẻ', t: '3 tin ngắn: 15 phút, 3 tiếng, 20 tiếng', s: 'Chỉ nói về đúng sofa khách đã chọn' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Chị Hà ơi, em giữ cho chị **sofa Milano 2m4 màu Kem** ở kho rồi ạ. Chị gửi em SĐT, địa chỉ để em xếp lịch giao lắp nha 😊' },
    { k: 'p', a: 'r1', d: 900 },
    { k: 'time', nhan: '3 tiếng sau', gio: '17:49', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Em gửi chị ảnh thật showroom và xưởng bên em nha 📸 Sofa Milano màu Kem có sẵn, anh chị ghé ngồi thử cũng được ạ.' },
    { k: 'ai', imgs: ['showroom', 'xuong-go'] },
    { k: 'p', a: 'r2', d: 900 },
    { k: 'time', nhan: '20 tiếng sau', gio: '10:49', ngay: 'T5 19/11/2026', d: 700 },
    { k: 'ai', text: 'Chị chỉ cần gửi **SĐT và địa chỉ** là em lên đơn, **giao lắp miễn phí** nội thành, bảo hành khung 5 năm ạ ⚡' },
    { k: 'p', a: 'r3', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 3, khách gửi SĐT, địa chỉ', s: 'AI kiểm tra ngay thông tin khách gửi' },
    { k: 'kh', text: '0938246135, căn 12.05 tòa B 45 Nguyễn Thị Thập Q7' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'cap', e: 'Kiểm tra dữ liệu', t: 'Căn hộ tầng 12 → hỏi ngay thang máy', s: 'Để xếp xe và người khiêng sofa 2m4' },
    { k: 'ai', text: 'Dạ em ghi SĐT, địa chỉ rồi ạ. Căn 12.05 là tầng 12, tòa nhà mình **có thang máy** chở được sofa 2m4 không chị?' },
    { k: 'kh', text: 'Có thang máy hàng nha em' },
    { k: 'cap', e: 'Chốt đơn', t: 'Tự tổng hợp đơn: kích thước, màu, SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ chị kiểm tra lại đơn giúp em nha:\n– Sofa góc chữ L Milano 2m4, vải chống cào màu Kem\n– Tổng: **28.900.000đ** (giao lắp miễn phí)\n– Thu Hà · 0938 246 135\n– Căn 12.05 tòa B, 45 Nguyễn Thị Thập, Q.7 · có thang máy\nChị xác nhận giúp em đơn này nha.', nut: 'Quản lý đơn hàng', d: 3600 },
    { k: 'cap', e: 'Xong', t: 'Khách chỉ cần nói "Ok em"' },
    { k: 'kh', text: 'Ok em' },
    { k: 'ai', text: 'Dạ em lên đơn, xếp lịch giao lắp cho chị liền nha ⚡', d: 1300 },

    // Chốt đơn → màn hình phụ: gửi đơn hàng cho Facebook → đơn tự động → chủ shop xác nhận
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

    // Mua xong: tin cảm ơn kèm 5 món phối cùng sofa đang giảm giá (afterSale.sp của bài 1)
    { k: 'cap', e: 'Bán thêm sau mua', t: 'Cảm ơn khách, gửi kèm 5 món đang giảm giá', s: 'Khách bấm "Mua ngay" ngay trong Messenger' },
    { k: 'ai', text: 'Dạ cảm ơn chị Hà nha 🎉 Đơn đã được xác nhận, shop giao lắp sofa **thứ Bảy 21/11** ạ. Mấy món phối cùng sofa Milano đang giảm giá, chị xem thử nha:' },
    { k: 'car', sp: [
        { img: 'ke-tivi-am', ten: 'Kệ tivi âm tường 3m2', gia: '6.750.000đ', cu: '7.500.000đ', giam: '-10%' },
        { img: 'ban-tra', ten: 'Bàn trà gỗ mộc 120 × 60 cm', gia: '3.200.000đ', cu: '3.600.000đ', giam: '-11%' },
        { img: 'tham', ten: 'Thảm phòng khách 2m × 3m', gia: '2.400.000đ', cu: '2.900.000đ', giam: '-17%' },
        { img: 'goi-tua', ten: 'Bộ gối tựa sofa', gia: '890.000đ', cu: '1.090.000đ', giam: '-18%' },
        { img: 'ke-tivi-thap', ten: 'Kệ tivi thấp', gia: '5.900.000đ', cu: '6.900.000đ', giam: '-14%' },
      ], d: 5200 },

    // Chăm sóc sau bán qua Zalo
    { k: 'zalo', gio: '19:30', ngay: 'CN 22/11/2026', chip: 'Hôm sau · khách đã nhận sofa', d: 1500 },
    { k: 'cap', e: 'Chăm sóc sau bán qua Zalo', t: 'Khách nhận sofa: AI hỏi dùng có ưng không', s: 'Dặn cách vệ sinh, xin đánh giá ngay trong tin Zalo OA' },
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
  // Slide tổng kết cuối video (giống hệt file mẫu Yến chưng tươi)
  tongKet: { tieuDe: 'Quy trình Preny AI giúp', em: 'tăng tỷ lệ chốt đơn', cot: [
    { ten: 'Khách hàng', icon: 'users', dong: ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến'] },
    { ten: 'AI Chatbot', icon: 'bot', dong: ['Phản hồi nhanh tức thì', 'Kêu gọi khách hàng mua hàng', 'Lấy thông tin và chốt đơn'] },
    { ten: 'Bám đuổi', icon: 'bell', dong: ['Gửi 5 tin nhắn trong 7 ngày để bám đuổi khách hàng'] },
    { ten: 'Chốt đơn', icon: 'check', dong: ['Lên đơn', 'Gửi sự kiện mua hàng lên Facebook'] },
    { ten: 'Mua lại', icon: 'refresh', dong: ['Tự động gửi 1 tin nhắn mỗi tuần qua FB và Zalo', 'Sản phẩm bán chạy, giảm giá, sản phẩm mới'] },
  ] },
  panels: {
    tag: { av: 'TH', ten: 'Nguyễn Thu Hà', sub: 'Messenger · bình luận quảng cáo Sofa Milano',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#sofamilano', 'qt hot'], ['#sofagoc', 'qt hot'], ['#mobile', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#MauKem', 'qt']]]],
      im: 'Khách im từ 14:49, sau khi được xin SĐT, địa chỉ',
      rule: { lb: 'Bám đuổi theo thẻ #sofamilano', tieuDe: '3 tin ngắn về sofa khách đã chọn',
              dong: [['15 phút', 'Đã giữ sofa 2m4 màu Kem cho khách'], ['3 tiếng', 'Gửi ảnh thật showroom, xưởng'], ['20 tiếng', 'Chỉ cần SĐT, địa chỉ là lên đơn']] },
      reply: 'Khách gửi SĐT, địa chỉ · dừng bám đuổi' },
    capi: { tieuDe: 'Gửi đơn hàng cho Facebook', event: 'Purchase', nhan: 'SỰ KIỆN MUA HÀNG', giaTri: '28.900.000đ', pk: 'Purchase · 28.900.000đ',
      dong: [['Đơn hàng', '#CM40719 · Sofa Milano 2m4 Kem'], ['Nguồn khách', 'Bình luận quảng cáo Sofa Milano → Messenger'], ['Giá trị', '28.900.000 VND'], ['Event ID', 'CM40719-PURCHASE (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện mua hàng' },
  },
  donHang: {
    ma: '#CM40719', sp: 'Sofa góc chữ L Milano 2m4', bien: 'Vải chống cào · Kem · x1', img: 'sofa-l', gia: '28.900.000đ',
    phi: ['Giao & lắp', 'miễn phí nội thành'],
    nv: { ten: 'Anh Tùng · chủ shop', av: 'AT' },
    ten: 'Nguyễn Thu Hà', sdt: '0938 246 135', dc: 'Căn 12.05, Tòa B, 45 Nguyễn Thị Thập, Q.7, TP.HCM · có thang máy', gio: '11:05 · 19/11/2026',
  },
};
