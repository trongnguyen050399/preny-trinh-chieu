/* Bài 2 (video demo ngang tự chạy): BÁN LẺ NÔNG NGHIỆP (thuốc bảo vệ thực vật, phân bón, cây giống), nhóm thương mại điện tử.
   Viết lại 18/11/2026 theo mạch tmdt người dùng chốt cùng ngày (mẫu: kich-ban-yen-chung-tuoi-tc.js):
   - 1 cảnh duy nhất: quảng cáo thuốc trừ sâu sinh học, 2 khách bình luận (hỏi giá, hỏi phun xong mấy ngày cắt được) → trả lời cả 2
     "Mình check ib shop nha" → AI nhắn inbox trước: giá, cách ly 3 ngày + đúng ảnh quảng cáo, hỏi 1 điều (mấy ngày nữa cắt rau)
     → anh Lộc: 3 sào cải bị bọ ăn lá, chục ngày nữa cắt, đòi thuốc mạnh diệt sạch nhanh (ca khó bài 1)
     → AI không khuyên thuốc hóa học mạnh, nói rõ cách ly, không hứa sạch 100%, tính 2 chai, dặn pha đúng liều trên nhãn,
       hỏi đồ bảo hộ → khách lấy thêm 1 bộ bảo hộ → AI xin SĐT + địa chỉ vườn → khách im
     → gắn thẻ (3 hashtag quảng cáo + #baogia + #2ChaiKemBaoHo) → bám đuổi 3 tin 15 phút, 3 tiếng, 20 tiếng → khách gửi SĐT + địa chỉ
     (ca khó: thiếu tên thôn) → tóm tắt đơn → Purchase lên Facebook → đơn tự động, kỹ sư bấm xác nhận
     → cảm ơn + 5 món đang giảm → Zalo: hỏi thăm sau khi phun, dặn cách ly; bán chạy; ưu đãi chưng Tết → tổng kết → logo.
   - Chỉ 1 sản phẩm từ đầu tới cuối (thuốc trừ sâu sinh học 500ml, kèm bộ bảo hộ để phun an toàn), không có đoạn khách hỏi sản phẩm khác.
   Ngành nông dược: AI không chẩn đoán bừa, không hứa diệt sạch 100%, không nêu tên hoạt chất, luôn dặn liều trên nhãn, cách ly, bảo hộ.
   Nội dung lấy từ bài 1 (demo/kich-ban/nong-nghiep-tc.js): shop Nông Gia Phú Điền, chai 145.000đ, 2 chai + 1 bộ bảo hộ 345.000đ,
   tặng phân hữu cơ, anh Lộc ở Đức Trọng, đơn #PD52107, sản phẩm bán thêm, voucher PHUDIEN50.
   Tên shop, sản phẩm, giá, khách, SĐT: minh họa. Tự đặt thêm: câu hỏi bình luận của khách thứ 2, giá bình phun giảm còn 617.000đ.
   Ảnh: ảnh có sẵn của bài 1 (Unsplash, không phải hàng của shop). */
window.VN_KB = {
  ten: 'Nông nghiệp video ngang',
  ketSub: 'Để AI bán vật tư nông nghiệp cho shop của bạn',
  shop: { ten: 'Nông Gia Phú Điền', av: 'PĐ', mau: '#15803D', sub: 'Thường trả lời ngay' },
  anh: {
    'phun-thuoc': '../assets/img/u/1593999094742-4f5280054b23_800x800.jpg',   // nông dân đeo bình phun, có bảo hộ
    'chai-thuoc': '../assets/img/u/1648712788842-b41bb3e1b041_800x800.jpg',   // chai thuốc trắng nhãn đỏ
    'chai-thuoc-2': '../assets/img/u/1648712788764-a2447a2d01d9_800x800.jpg', // 4 chai thuốc nhiều màu nhãn
    'phan-bon': '../assets/img/u/1710223221719-6251cb1b5c5b_800x800.jpg',     // phân bón dạng hạt
    'cay-giong': '../assets/img/u/1457530378978-8bac673b8062_800x800.jpg',    // cây con mới nảy mầm
    'bonsai': '../assets/img/u/1599598177991-ec67b5c37318_800x800.jpg',       // bonsai tùng chậu gốm
    'vuon-rau': '../assets/img/u/1529313780224-1a12b68bed16_800x800.jpg',     // luống rau ăn lá
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= BÌNH LUẬN QUẢNG CÁO → INBOX (cảnh duy nhất) ================= */
    { k: 'canh', nhan: 'Bình luận quảng cáo → Inbox', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'chai-thuoc', nhan: 'MESSENGER', tieuDe: 'Thuốc sinh học · Nhắn kỹ thuật tư vấn', nut: 'Gửi tin nhắn',
        text: 'Rau ăn lá bị sâu, bọ cắn phá? 🌿 Thuốc trừ sâu sinh học chai 500ml, nhãn ghi rõ thời gian cách ly, hàng chính hãng có tem, giao trong ngày. #thuocsinhhoc #rauanla #mobile',
      }, d: 1500 },
    { k: 'cap', e: 'Bình luận hỏi giá', t: 'Khách hỏi giá ngay dưới quảng cáo', s: 'Một khách khác hỏi phun xong mấy ngày cắt được' },
    { k: 'cmt', i: 0, ten: 'Văn Lộc', av: 'VL', text: 'Thuốc này bao nhiêu 1 chai shop?' },
    { k: 'cmt', i: 1, ten: 'Hoàng Nam', av: 'HN', text: 'Phun xong mấy ngày cắt rau được shop? Ship Bảo Lộc k?' },
    { k: 'cap', e: 'Trả lời cả 2 bình luận', t: 'Trả lời ngắn gọn, mời khách vào inbox', s: 'Tư vấn chi tiết trong tin nhắn riêng' },
    { k: 'rep', i: 0, text: 'Mình check ib shop nha 💬' },
    { k: 'rep', i: 1, text: 'Mình check ib shop nha 💬' },
    { k: 'ms', ref: { loai: 'cmt', img: 'chai-thuoc', dong1: 'Bạn đã bình luận về quảng cáo của Nông Gia Phú Điền', dong2: '"Thuốc này bao nhiêu 1 chai shop?"' }, gio: '14:47' },
    { k: 'cap', e: 'AI nhắn trước', t: 'Inbox trước: báo giá, gửi đúng ảnh quảng cáo', s: 'Nói rõ thời gian cách ly ngay từ đầu' },
    { k: 'ai', text: 'Dạ chào anh Lộc, thuốc trừ sâu sinh học chai 500ml giá **145.000đ** ạ, nhãn ghi **cách ly 3 ngày**.' },
    { k: 'ai', img: 'chai-thuoc' },
    { k: 'ai', text: 'Rau nhà mình **còn mấy ngày nữa cắt** để em dặn phun, cách ly cho đúng nha anh?' },

    { k: 'cap', e: 'Khách trả lời', t: 'Sắp cắt rau mà đòi thuốc mạnh diệt sạch', s: 'Không khuyên thuốc hóa học mạnh, không hứa sạch 100%' },
    { k: 'kh', text: '3 sào cải bị bọ ăn lá, chục ngày nữa a cắt. Có thuốc nào mạnh hơn diệt sạch nhanh k e?' },
    { k: 'ai', text: 'Dạ chục ngày nữa cắt thì em **không khuyên thuốc hóa học mạnh** ạ, dễ **tồn dư thuốc** khi bán. Thuốc sinh học **cách ly 3 ngày**, bọ giảm rõ sau 2–3 ngày, không sạch 100% đâu anh.' },
    { k: 'cap', e: 'Hỏi đúng thứ còn thiếu', t: 'Tính đủ 2 chai, hỏi đồ bảo hộ khi phun', s: 'Dặn pha đúng liều ghi trên nhãn' },
    { k: 'ai', text: '3 sào anh lấy **2 chai** là đủ, **pha đúng liều trên nhãn**, phun chiều mát. Nhà mình có sẵn **khẩu trang, găng tay** để phun chưa anh?' },
    { k: 'ai', img: 'phun-thuoc' },
    { k: 'kh', text: 'Chưa có, lấy a 1 bộ bảo hộ luôn' },
    { k: 'cap', e: 'Xin thông tin lên đơn', t: 'Chọn xong: AI xin SĐT, địa chỉ vườn' },
    { k: 'ai', text: 'Dạ em ghi **2 chai sinh học + 1 bộ bảo hộ**, tổng **345.000đ**. Anh gửi em **SĐT và địa chỉ vườn** để em lên đơn nha.' },

    // Khách im sau khi được xin SĐT, địa chỉ → màn hình phụ: gắn thẻ (3 hashtag quảng cáo + thẻ từ cuộc chat), bám đuổi 3 tin
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Chưa gửi SĐT: Preny tự gắn thẻ khách', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi theo thẻ', t: '3 tin ngắn: 15 phút, 3 tiếng, 20 tiếng', s: 'Chỉ nói về đúng đơn thuốc khách đã chọn' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Anh Lộc ơi, em giữ **2 chai sinh học + 1 bộ bảo hộ** cho anh rồi ạ. Bọ để lâu dễ lan luống khác, anh gửi SĐT, địa chỉ để em giao nha 🌱' },
    { k: 'p', a: 'r1', d: 900 },
    { k: 'time', nhan: '3 tiếng sau', gio: '17:49', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Em gửi anh ảnh thật chai thuốc nha 📸 Hàng **chính hãng, có tem**, nhãn ghi rõ liều pha và **cách ly 3 ngày**.' },
    { k: 'ai', imgs: ['chai-thuoc', 'phun-thuoc', 'vuon-rau'] },
    { k: 'p', a: 'r2', d: 900 },
    { k: 'time', nhan: '20 tiếng sau', gio: '10:49', ngay: 'T5 19/11/2026', d: 700 },
    { k: 'ai', text: 'Anh chỉ cần gửi **SĐT và địa chỉ vườn** là em lên đơn liền, tặng **1 gói phân bón hữu cơ**, giao trong ngày ạ ⚡' },
    { k: 'p', a: 'r3', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 3, khách gửi SĐT, địa chỉ', s: 'AI kiểm tra ngay thông tin khách gửi' },
    { k: 'kh', text: '0976 418 253, xã Hiệp An, Đức Trọng' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'cap', e: 'Kiểm tra dữ liệu', t: 'Thiếu tên thôn → hỏi lại ngay lập tức' },
    { k: 'ai', text: 'Dạ em ghi SĐT rồi ạ. Anh cho em xin thêm **tên thôn** để shipper tìm đúng vườn nha.' },
    { k: 'kh', text: 'Thôn Phú Thạnh e' },
    { k: 'cap', e: 'Chốt đơn', t: 'Tự tổng hợp đơn: sản phẩm, quà tặng, SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ anh kiểm tra lại đơn giúp em nha:\n– 2 chai thuốc trừ sâu sinh học 500ml + 1 bộ bảo hộ\n– Tặng 1 gói phân bón hữu cơ\n– Tổng: **345.000đ**, giao trong ngày\n– Người nhận: Lộc · 0976 418 253\n– Thôn Phú Thạnh, xã Hiệp An, Đức Trọng\nAnh xác nhận giúp em đơn này nha.', nut: 'Quản lý đơn hàng', d: 3600 },
    { k: 'cap', e: 'Xong', t: 'Khách chỉ cần nói "Ok em"' },
    { k: 'kh', text: 'Ok em' },
    { k: 'ai', text: 'Dạ em lên đơn, chiều nay giao cho anh liền nha ⚡', d: 1300 },

    // Chốt đơn → màn hình phụ: gửi đơn hàng cho Facebook → đơn tự động → nhân viên xác nhận
    { k: 'cap', e: 'Gửi đơn về Facebook', t: 'Sự kiện mua hàng gửi ngay lên Facebook', s: 'Quảng cáo tối ưu theo đơn thật' },
    { k: 'panel', v: 'capi', d: 900 },
    { k: 'p', a: 'flow', d: 1500 }, { k: 'p', a: 'event', d: 1300 }, { k: 'p', a: 'ok', d: 2200 },
    { k: 'cap', e: 'Đơn hàng tự động', t: 'Đơn tự lên trên Preny. Shop chỉ việc giao.' },
    { k: 'panel', v: 'don', d: 900 },
    { k: 'p', a: 'f1', d: 550 }, { k: 'p', a: 'f2', d: 550 }, { k: 'p', a: 'f3', d: 550 }, { k: 'p', a: 'f4', d: 550 },
    { k: 'p', a: 'cho', d: 900 },
    { k: 'cap', e: 'Nhân viên xác nhận', t: 'Báo nhân viên: bấm 1 lần là đơn lên', s: 'Người thật kiểm tra lại trước khi giao' },
    { k: 'p', a: 'nv', d: 1700 }, { k: 'p', a: 'bam', d: 1100 },
    { k: 'p', a: 'xn', d: 3000 },
    { k: 'panel', v: null, d: 500 },

    // Mua xong: tin cảm ơn kèm 5 món đang giảm giá (afterSale.sp của bài 1, khách cũ giảm 5%)
    { k: 'cap', e: 'Bán thêm sau mua', t: 'Cảm ơn khách, gửi kèm 5 món đang giảm giá', s: 'Khách bấm "Mua ngay" ngay trong Messenger' },
    { k: 'ai', text: 'Dạ cảm ơn anh Lộc nha 🎉 Đơn đã xác nhận, chiều nay shop giao. Chuẩn bị lứa rau mới, shop đang giảm mấy món này, anh xem thử nha:' },
    { k: 'car', sp: [
        { img: 'phan-bon', ten: 'Phân bón hạt cho rau bao 25kg', gia: '375.000đ', cu: '395.000đ', giam: '-5%' },
        { img: 'cay-giong', ten: 'Khay cây giống rau cải 100 cây', gia: '57.000đ', cu: '60.000đ', giam: '-5%' },
        { img: 'chai-thuoc-2', ten: 'Bộ 4 chai thuốc sinh học 500ml', gia: '520.000đ', cu: '580.000đ', giam: '-10%' },
        { img: 'phun-thuoc', ten: 'Bình phun đeo vai 16 lít', gia: '617.000đ', cu: '650.000đ', giam: '-5%' },
        { img: 'bonsai', ten: 'Bonsai tùng chậu gốm chưng Tết', gia: '1.757.000đ', cu: '1.850.000đ', giam: '-5%' },
      ], d: 5200 },

    // Chăm sóc sau bán qua Zalo: hỏi thăm sau khi phun, dặn cách ly, cất thuốc an toàn
    { k: 'zalo', gio: '19:30', ngay: 'CN 22/11/2026', chip: '3 ngày sau · khách đã nhận hàng', d: 1500 },
    { k: 'cap', e: 'Chăm sóc sau bán qua Zalo', t: 'Hỏi thăm sau khi phun, dặn cách ly đủ ngày', s: 'Xin đánh giá ngay trong tin Zalo OA của shop' },
    { k: 'zns', zns: {
        img: 'vuon-rau', tieuDe: 'Anh Lộc ơi, phun xong bọ giảm chưa ạ?',
        noiDung: 'Phú Điền cảm ơn anh đã nhận đơn **#PD52107**. Anh nhớ **cách ly đủ 3 ngày** như nhãn ghi rồi mới cắt bán, cất thuốc xa tầm tay trẻ em nha!',
        nut: 'Đánh giá sản phẩm',
      }, d: 4200 },
    { k: 'cap', e: 'ZBS · Sản phẩm bán chạy', t: '1 tuần sau: gửi vật tư bán chạy qua Zalo', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'CN 29/11/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['phan-bon', 'cay-giong', 'chai-thuoc-2', 'phun-thuoc'], nhan: 'TOP BÁN CHẠY TUẦN NÀY', mau: '#F97316',
        tieuDe: '🔥 Top bán chạy tuần này tại Phú Điền',
        noiDung: '**Phân bón hạt cho rau**, khay cây giống rau cải và **bộ 4 chai thuốc sinh học** đang được bà con chọn nhiều nhất tuần qua.',
        nut: 'Xem ngay',
      }, d: 4600 },
    { k: 'cap', e: 'ZBS · Khuyến mãi', t: '1 tuần sau nữa: gửi ưu đãi cho khách cũ', s: 'Kéo khách quay lại mua tiếp, không cần khách nhắn' },
    { k: 'zstamp', gio: '19:30', ngay: 'CN 06/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['bonsai', 'cay-giong', 'phan-bon', 'vuon-rau'], nhan: 'CHƯNG TẾT · KHÁCH CŨ GIẢM 5%',
        tieuDe: 'Ưu đãi riêng cho khách đã mua tại Phú Điền',
        noiDung: 'Bonsai tùng chưng Tết, phân bón, cây giống giảm **5%**. Tặng thêm voucher **PHUDIEN50** giảm 50.000đ cho đơn từ 500.000đ.',
        nut: 'Mua ngay',
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
    tag: { av: 'VL', ten: 'Trần Văn Lộc', sub: 'Messenger · bình luận quảng cáo Thuốc sinh học',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#thuocsinhhoc', 'qt hot'], ['#rauanla', 'qt hot'], ['#mobile', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#2ChaiKemBaoHo', 'qt']]]],
      im: 'Khách im từ 14:49, sau khi được xin SĐT, địa chỉ',
      rule: { lb: 'Bám đuổi theo thẻ #thuocsinhhoc', tieuDe: '3 tin ngắn về đơn thuốc khách đã chọn',
              dong: [['15 phút', 'Đã giữ 2 chai + bảo hộ cho khách'], ['3 tiếng', 'Gửi ảnh thật chai thuốc, có tem'], ['20 tiếng', 'Chỉ cần SĐT, địa chỉ là lên đơn']] },
      reply: 'Khách gửi SĐT, địa chỉ · dừng bám đuổi' },
    capi: { tieuDe: 'Gửi đơn hàng cho Facebook', event: 'Purchase', nhan: 'SỰ KIỆN MUA HÀNG', giaTri: '345.000đ', pk: 'Purchase · 345.000đ',
      dong: [['Đơn hàng', '#PD52107 · 2 chai sinh học + bảo hộ'], ['Nguồn khách', 'Bình luận quảng cáo Thuốc sinh học → Messenger'], ['Giá trị', '345.000 VND'], ['Event ID', 'PD52107-PURCHASE (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện mua hàng' },
  },
  donHang: {
    ma: '#PD52107', sp: 'Thuốc trừ sâu sinh học 500ml + bộ bảo hộ', bien: '2 chai + 1 bộ bảo hộ · tặng phân hữu cơ', img: 'chai-thuoc', gia: '345.000đ',
    nv: { ten: 'Kỹ sư Tín', av: 'KT' },
    ten: 'Trần Văn Lộc', sdt: '0976 418 253', dc: 'Thôn Phú Thạnh, xã Hiệp An, Đức Trọng, Lâm Đồng', gio: '11:05 · 19/11/2026',
  },
};
