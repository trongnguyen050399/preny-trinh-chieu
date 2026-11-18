/* Bài 2 (video demo ngang tự chạy): MỸ PHẨM, nhóm thương mại điện tử. Viết lại 18/11/2026 theo mạch mới (mẫu Yến chưng tươi):
   - 1 cảnh duy nhất: bài quảng cáo Serum B5 + rau má, 2 khách bình luận (hỏi giá, hỏi hàng auth + date) → trả lời cả 2 "Mình check ib shop nha"
     → AI nhắn inbox trước: giá + đúng ảnh quảng cáo, hỏi 1 điều (da đang thế nào, có dùng thuốc trị mụn không)
     → khách trả lời: da dầu mụn nhạy cảm, tối đang bôi thuốc bác sĩ kê → AI dặn serum buổi sáng, thuốc buổi tối, thử trên vùng da nhỏ,
       hỏi lại bác sĩ; nói rõ serum không thay thuốc trị mụn → khách lấy 1 lọ → AI xin SĐT + địa chỉ → khách im
     → gắn thẻ (3 hashtag quảng cáo + #baogia + #DaDauMun) → bám đuổi 3 tin 15 phút, 3 tiếng, 20 tiếng → khách gửi SĐT + địa chỉ
     (ca khó: thiếu phường, đường Lê Văn Sỹ đi qua nhiều quận) → tóm tắt đơn → Purchase lên Facebook
     → đơn tự động, nhân viên bấm xác nhận → cảm ơn + 5 sản phẩm giảm giá → Zalo: hỏi thăm da, bán chạy, voucher → tổng kết → logo.
   - Chỉ 1 sản phẩm từ đầu tới cuối (Serum B5 + rau má 30ml), không có đoạn khách hỏi sản phẩm khác. Sữa rửa mặt gel mini chỉ là quà tặng kèm.
   Ngành mỹ phẩm: AI không chẩn đoán, không hứa hết mụn, không bảo bỏ thuốc; luôn dặn thử trên da, hỏi lại bác sĩ.
   Nội dung lấy từ bài 1 (demo/kich-ban/my-pham-tc.js): shop Bông Mai Skincare, 420.000đ, không cồn khô, không hương liệu, hóa đơn nhập,
   date 2028, tặng sữa rửa mặt gel mini, freeship, chị Ngọc Thảo, 0938 216 457, 12 Lê Văn Sỹ P. Phú Nhuận, đơn #BM41207, voucher BONGMAI50.
   Tên shop, giá, khách, SĐT, địa chỉ: minh họa. Ảnh: ảnh Unsplash có sẵn trong máy của bài 1. */
window.VN_KB = {
  ten: 'Mỹ phẩm video ngang',
  ketSub: 'Để AI tư vấn, bám đuổi và lên đơn cho shop mỹ phẩm của bạn',
  shop: { ten: 'Bông Mai Skincare', av: 'BM', mau: '#BE185D', sub: 'Thường trả lời ngay' },
  anh: {
    'serum': '../assets/img/u/1781344116880-029945a42b75_800x800.jpg',        // lọ serum thủy tinh nâu, nắp bóp giọt
    'cham-soc': '../assets/img/u/1581182800629-7d90925ad072_800x800.jpg',     // cô gái da căng ẩm, nhắm mắt
    'chong-nang': '../assets/img/u/1623676714504-edd78728155e_800x800.jpg',   // chai chống nắng SPF 50, thoa lên tay
    'sua-rua-mat': '../assets/img/u/1748639320154-6ba118bccc74_800x800.jpg',  // tuýp sữa rửa mặt dạng gel
    'toner': '../assets/img/u/1623143445418-40c192fa3d11_800x800.jpg',        // chai toner hồng có vòi nhấn
    'bo-my-pham': '../assets/img/u/1583209814683-c023dd293cc6_800x800.jpg',   // bộ mỹ phẩm màu hồng
    'kem-duong': '../assets/img/u/1761718209708-9ab9ba1c7252_800x800.jpg',    // thoa kem dưỡng lên mặt
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= BÌNH LUẬN QUẢNG CÁO → INBOX (cảnh duy nhất) ================= */
    { k: 'canh', nhan: 'Bình luận quảng cáo → Inbox', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'serum', nhan: 'MESSENGER', tieuDe: 'Serum B5 + rau má · Lọ 30ml', nut: 'Gửi tin nhắn',
        text: 'Da dầu mụn, nhạy cảm cần dịu và đủ ẩm 🌿 Serum B5 + rau má 30ml không cồn khô, không hương liệu, mỏng nhẹ thấm nhanh. Có hóa đơn nhập, date rõ. #serumb5 #damun #mobile',
      }, d: 1500 },
    { k: 'cap', e: 'Bình luận hỏi giá', t: 'Khách hỏi giá ngay dưới quảng cáo', s: 'Một khách khác hỏi hàng auth, date' },
    { k: 'cmt', i: 0, ten: 'Ngọc Thảo', av: 'NT', text: 'Serum này giá sao shop?' },
    { k: 'cmt', i: 1, ten: 'Minh Anh', av: 'MA', text: 'Hàng auth không shop, date tới bao giờ?' },
    { k: 'cap', e: 'Trả lời cả 2 bình luận', t: 'Trả lời ngắn gọn, mời khách vào inbox', s: 'Tư vấn chi tiết trong tin nhắn riêng' },
    { k: 'rep', i: 0, text: 'Mình check ib shop nha 💬' },
    { k: 'rep', i: 1, text: 'Mình check ib shop nha 💬' },
    { k: 'ms', ref: { loai: 'cmt', img: 'serum', dong1: 'Bạn đã bình luận về quảng cáo của Bông Mai Skincare', dong2: '"Serum này giá sao shop?"' }, gio: '14:47' },
    { k: 'cap', e: 'AI nhắn trước', t: 'Inbox trước: báo giá, gửi đúng ảnh quảng cáo', s: 'Khách không cần mô tả lại sản phẩm' },
    { k: 'ai', text: 'Dạ chào chị Thảo, **Serum B5 + rau má** lọ 30ml giá **420.000đ** ạ, không cồn khô, không hương liệu, freeship.' },
    { k: 'ai', img: 'serum' },
    { k: 'ai', text: 'Da chị đang thế nào, có dùng thuốc trị mụn không để em dặn cách dùng cho đúng nha?' },

    { k: 'cap', e: 'Khách trả lời', t: 'Da dầu mụn, đang bôi thuốc kê đơn', s: 'Không chẩn đoán, dặn thử trên da, hỏi bác sĩ' },
    { k: 'kh', text: 'Da c dầu mụn, nhạy cảm. Tối c đang bôi thuốc bs kê, dùng chung đc k e?' },
    { k: 'ai', text: 'Dạ chị dùng **serum buổi sáng**, **thuốc bôi buổi tối**, không bôi chồng lên nhau ạ. Chị **thử trên vùng da nhỏ** 2–3 ngày trước và **hỏi lại bác sĩ** đang điều trị cho chắc nha.' },
    { k: 'cap', e: 'Không hứa hết mụn', t: 'Nói rõ: serum không thay thuốc', s: 'Rồi hỏi luôn khách lấy mấy lọ' },
    { k: 'ai', text: 'Serum chỉ giúp **dịu da, cấp ẩm**, không thay thuốc trị mụn đâu chị. 1 lọ dùng khoảng 5–6 tuần, chị lấy 1 lọ để em giữ hàng nha?' },
    { k: 'kh', text: 'Ok lấy c 1 lọ nha e' },
    { k: 'cap', e: 'Xin thông tin lên đơn', t: 'Chọn xong: AI xin SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ em ghi **1 lọ Serum B5 + rau má 30ml**, 420.000đ, freeship. Chị gửi em **SĐT và địa chỉ** nhận hàng để em lên đơn nha.' },

    // Khách im sau khi được xin SĐT, địa chỉ → màn hình phụ: gắn thẻ (3 hashtag quảng cáo + thẻ từ cuộc chat), bám đuổi 3 tin
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Chưa gửi SĐT: Preny tự gắn thẻ khách', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi theo thẻ', t: '3 tin ngắn: 15 phút, 3 tiếng, 20 tiếng', s: 'Chỉ nói về đúng lọ serum khách đã chọn' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Chị Thảo ơi, em giữ cho chị **1 lọ serum B5** đợt mới về rồi ạ. Chị gửi em SĐT, địa chỉ để em giao sớm nha 😊' },
    { k: 'p', a: 'r1', d: 900 },
    { k: 'time', nhan: '3 tiếng sau', gio: '17:49', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Em gửi chị ảnh thật lọ serum nha 📸 Hàng có **hóa đơn nhập**, **date 2028** in trên vỏ ạ.' },
    { k: 'ai', imgs: ['serum', 'bo-my-pham', 'cham-soc'] },
    { k: 'p', a: 'r2', d: 900 },
    { k: 'time', nhan: '20 tiếng sau', gio: '10:49', ngay: 'T5 19/11/2026', d: 700 },
    { k: 'ai', text: 'Chị chỉ cần gửi **SĐT và địa chỉ** là em lên đơn liền, tặng thêm **sữa rửa mặt gel mini**, freeship ạ 🎁' },
    { k: 'p', a: 'r3', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 3, khách gửi SĐT, địa chỉ', s: 'AI kiểm tra ngay thông tin khách gửi' },
    { k: 'kh', text: '0938216457, 12 Lê Văn Sỹ HCM' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'cap', e: 'Kiểm tra dữ liệu', t: 'Thiếu phường → hỏi lại ngay lập tức', s: 'Đường Lê Văn Sỹ đi qua nhiều quận' },
    { k: 'ai', text: 'Dạ em ghi SĐT rồi ạ. Đường **Lê Văn Sỹ** đi qua cả Q.3, Phú Nhuận, Tân Bình, chị cho em xin **phường** để shipper giao đúng nha.' },
    { k: 'kh', text: 'P. Phú Nhuận nha e' },
    { k: 'cap', e: 'Chốt đơn', t: 'Tự tổng hợp đơn: sản phẩm, quà, SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ chị kiểm tra lại đơn giúp em nha:\n– 1 Serum B5 + rau má 30ml\n– Tặng sữa rửa mặt gel mini\n– Tổng: **420.000đ** (freeship)\n– Người nhận: Ngọc Thảo · 0938 216 457\n– 12 Lê Văn Sỹ, P. Phú Nhuận, TP.HCM\nChị xác nhận giúp em đơn này nha.', nut: 'Quản lý đơn hàng', d: 3600 },
    { k: 'cap', e: 'Xong', t: 'Khách chỉ cần nói "Ok e"' },
    { k: 'kh', text: 'Ok e' },
    { k: 'ai', text: 'Dạ em lên đơn cho chị liền nha ⚡', d: 1300 },

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

    // Mua xong: tin cảm ơn kèm 5 món đang giảm giá (afterSale.sp của bài 1, giảm 10% cho khách vừa mua)
    { k: 'cap', e: 'Bán thêm sau mua', t: 'Cảm ơn khách, gửi kèm 5 món đang giảm giá', s: 'Khách bấm "Mua ngay" ngay trong Messenger' },
    { k: 'ai', text: 'Dạ cảm ơn chị Thảo nha 🌸 Đơn đã được xác nhận, shop giao sớm cho chị. Khách vừa mua được giảm 10% mấy món dùng kèm này, chị xem thử nha:' },
    { k: 'car', sp: [
        { img: 'chong-nang', ten: 'Sữa chống nắng SPF 50', gia: '279.000đ', cu: '310.000đ', giam: '-10%' },
        { img: 'sua-rua-mat', ten: 'Sữa rửa mặt dạng gel', gia: '189.000đ', cu: '210.000đ', giam: '-10%' },
        { img: 'toner', ten: 'Toner không cồn 150ml', gia: '225.000đ', cu: '250.000đ', giam: '-10%' },
        { img: 'kem-duong', ten: 'Kem dưỡng ẩm phục hồi', gia: '315.000đ', cu: '350.000đ', giam: '-10%' },
        { img: 'bo-my-pham', ten: 'Bộ dưỡng da cơ bản 4 món', gia: '891.000đ', cu: '990.000đ', giam: '-10%' },
      ], d: 5200 },

    // Chăm sóc sau bán qua Zalo
    { k: 'zalo', gio: '19:30', ngay: 'CN 22/11/2026', chip: '3 ngày sau · khách đã nhận hàng', d: 1500 },
    { k: 'cap', e: 'Chăm sóc sau bán qua Zalo', t: 'Khách nhận hàng: AI hỏi da dùng thấy sao', s: 'Dặn lại cách dùng, xin đánh giá qua Zalo OA' },
    { k: 'zns', zns: {
        img: 'serum', tieuDe: 'Chị Thảo ơi, da dùng serum thấy sao ạ?',
        noiDung: 'Bông Mai cảm ơn chị đã nhận đơn **#BM41207** (Serum B5 + rau má). Sáng dùng serum, tối bôi thuốc bác sĩ kê. Da **rát, đỏ** thì chị ngưng và hỏi bác sĩ nha. Chị đánh giá giúp shop nha!',
        nut: 'Đánh giá sản phẩm',
      }, d: 4400 },
    { k: 'cap', e: 'ZBS · Sản phẩm bán chạy', t: '1 tuần sau: gửi món bán chạy qua Zalo', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'CN 29/11/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['chong-nang', 'sua-rua-mat', 'toner', 'kem-duong'], nhan: 'TOP BÁN CHẠY TUẦN NÀY', mau: '#F97316',
        tieuDe: '🔥 Top bán chạy tuần này tại Bông Mai',
        noiDung: 'Sữa chống nắng **SPF 50**, sữa rửa mặt **dạng gel** và toner **không cồn** đang được khách da dầu chọn nhiều nhất tuần qua.',
        nut: 'Xem ngay',
      }, d: 4600 },
    { k: 'cap', e: 'ZBS · Khuyến mãi', t: '1 tuần sau nữa: gửi ưu đãi cho khách cũ', s: 'Kéo khách quay lại mua tiếp, không cần khách nhắn' },
    { k: 'zstamp', gio: '19:30', ngay: 'CN 06/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['serum', 'chong-nang', 'kem-duong', 'bo-my-pham'], nhan: 'VOUCHER 50K · KHÁCH ĐÃ MUA',
        tieuDe: 'Tặng chị Thảo voucher 50.000đ',
        noiDung: 'Nhập mã **BONGMAI50** giảm 50.000đ cho đơn từ 400.000đ. Hạn dùng đến 31/01/2027.',
        nut: 'Dùng voucher ngay',
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
    tag: { av: 'NT', ten: 'Nguyễn Ngọc Thảo', sub: 'Messenger · bình luận quảng cáo Serum B5',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#serumb5', 'qt hot'], ['#damun', 'qt hot'], ['#mobile', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#DaDauMun', 'qt']]]],
      im: 'Khách im từ 14:49, sau khi được xin SĐT, địa chỉ',
      rule: { lb: 'Bám đuổi theo thẻ #serumb5', tieuDe: '3 tin ngắn về lọ serum khách đã chọn',
              dong: [['15 phút', 'Đã giữ 1 lọ serum cho khách'], ['3 tiếng', 'Gửi ảnh thật, hóa đơn, date'], ['20 tiếng', 'Chỉ cần SĐT, địa chỉ là lên đơn']] },
      reply: 'Khách gửi SĐT, địa chỉ · dừng bám đuổi' },
    capi: { tieuDe: 'Gửi đơn hàng cho Facebook', event: 'Purchase', nhan: 'SỰ KIỆN MUA HÀNG', giaTri: '420.000đ', pk: 'Purchase · 420.000đ',
      dong: [['Đơn hàng', '#BM41207 · Serum B5 + rau má 30ml'], ['Nguồn khách', 'Bình luận quảng cáo Serum B5 → Messenger'], ['Giá trị', '420.000 VND'], ['Event ID', 'BM41207-PURCHASE (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện mua hàng' },
  },
  donHang: {
    ma: '#BM41207', sp: 'Serum B5 + rau má 30ml', bien: 'x1 · tặng sữa rửa mặt gel mini', img: 'serum', gia: '420.000đ',
    phi: ['Phí vận chuyển', 'freeship'],
    nv: { ten: 'Nhân viên Vy', av: 'VY' },
    ten: 'Nguyễn Ngọc Thảo', sdt: '0938 216 457', dc: '12 Lê Văn Sỹ, P. Phú Nhuận, TP.HCM', gio: '11:05 · 19/11/2026',
  },
};
