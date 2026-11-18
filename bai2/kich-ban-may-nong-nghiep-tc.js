/* Bài 2 (video demo ngang tự chạy): MÁY NÔNG NGHIỆP (Nông Cơ Đồng Xanh), nhóm thương mại điện tử. Viết lại 18/11/2026 theo mạch mới
   người dùng chốt cùng ngày (mẫu demo/bai2/kich-ban-yen-chung-tuoi-tc.js, video-ngang/HUONG-DAN-BAI2.md mục "Mạch tmdt"):
   - 1 cảnh duy nhất: quảng cáo máy xới dầu 7HP, 2 khách bình luận (hỏi giá, hỏi xới ruộng lúa + giao Đồng Tháp) → trả lời cả 2 "Mình check ib shop nha"
     → AI nhắn inbox trước: giá + đúng ảnh quảng cáo, hỏi vườn gì, rộng bao nhiêu → anh Dũng: 1,5ha cà phê đất đỏ, so với máy xăng 6,9 triệu (ca khó)
     → AI khuyên máy dầu, hỏi dàn tặng kèm (vun gốc hay bánh lồng) → khách chọn dàn vun gốc → AI xin SĐT + địa chỉ vườn → khách im
     → gắn thẻ (3 hashtag quảng cáo + #baogia + #DanVunGoc) → bám đuổi 3 tin 15 phút, 3 tiếng, 20 tiếng (tin 3: giảm 500.000đ của bài 1)
     → khách gửi SĐT + địa chỉ (ca khó: SĐT thiếu 1 số) → tóm tắt đơn → Purchase lên Facebook → đơn tự động, nhân viên bấm xác nhận
     → cảm ơn + 5 máy giảm giá → Zalo: hỏi thăm, dặn thay nhớt, bán chạy mùa khô, voucher → tổng kết → logo.
   - Chỉ 1 sản phẩm từ đầu tới cuối (máy xới dầu 7HP), không có đoạn khách hỏi sản phẩm khác.
   Tên shop, giá, chính sách, khách, SĐT, địa chỉ: minh họa của bài 1 (demo/kich-ban/may-nong-nghiep-tc.js). Tự đặt thêm: lựa chọn dàn tặng kèm
   (vun gốc hoặc bánh lồng), giá gốc máy cày 195.000.000đ. Ảnh: ảnh Unsplash có sẵn trong máy của bài 1. */
window.VN_KB = {
  ten: 'Máy nông nghiệp video ngang',
  ketSub: 'Để AI tư vấn, bám đuổi và lên đơn cho cửa hàng máy nông nghiệp của bạn',
  shop: { ten: 'Nông Cơ Đồng Xanh', av: 'ĐX', mau: '#4D7C0F', sub: 'Thường trả lời ngay' },
  anh: {
    'may-xoi': '../assets/img/u/1609992285716-5f33f03379ec_800x800.jpg',       // máy xới đỏ (cận cảnh)
    'may-xoi-2': '../assets/img/u/1768664355346-8c925e4c4e61_800x800.jpg',     // nông dân chạy máy xới ngoài ruộng
    'may-xoi-3': '../assets/img/u/1650106064812-aa4a122916df_800x800.jpg',     // xới đất khô
    'may-xoi-xanh': '../assets/img/u/1630267693768-824c7b5aaa1b_800x800.jpg',  // máy xới xanh lắp dàn xới
    'xoi-ruong': '../assets/img/u/1532929900024-6413d2ed39c8_800x800.jpg',     // xới ruộng ngập nước
    'may-cay': '../assets/img/u/1602621654899-73f01065284f_800x800.jpg',       // máy cày 4 bánh
    'cat-co': '../assets/img/u/1793441410243-e1c4e47a1a65_800x800.jpg',        // máy cắt cỏ cầm tay
    'bom-nuoc': '../assets/img/u/1700318092011-6e4666e94ab5_800x800.jpg',      // máy bơm nước
    'phun-thuoc': '../assets/img/u/1593999094742-4f5280054b23_800x800.jpg',    // bình phun thuốc đeo vai
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= BÌNH LUẬN QUẢNG CÁO → INBOX (cảnh duy nhất) ================= */
    { k: 'canh', nhan: 'Bình luận quảng cáo → Inbox', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'may-xoi', nhan: 'MESSENGER', tieuDe: 'Máy xới dầu 7HP · Nhắn shop tư vấn', nut: 'Gửi tin nhắn',
        text: 'Vườn rộng, đất chặt cứ để máy dầu lo 🚜 Máy xới đa năng chạy dầu 7HP khỏe, ít nóng máy, đi lọt hàng cà phê 3m. Giao tận vườn, chạy thử tại chỗ. #mayxoidau #7hp #mobile',
      }, d: 1500 },
    { k: 'cap', e: 'Bình luận hỏi giá', t: 'Khách hỏi giá ngay dưới quảng cáo', s: 'Một khách khác hỏi xới ruộng lúa được không' },
    { k: 'cmt', i: 0, ten: 'Dũng Phan', av: 'DP', text: 'Máy xới này giá sao shop?' },
    { k: 'cmt', i: 1, ten: 'Nguyễn Thắng', av: 'NT', text: 'Xới ruộng lúa được không, giao Đồng Tháp bao lâu shop?' },
    { k: 'cap', e: 'Trả lời cả 2 bình luận', t: 'Trả lời ngắn gọn, mời khách vào inbox', s: 'Tư vấn chi tiết trong tin nhắn riêng' },
    { k: 'rep', i: 0, text: 'Mình check ib shop nha 💬' },
    { k: 'rep', i: 1, text: 'Mình check ib shop nha 💬' },
    { k: 'ms', ref: { loai: 'cmt', img: 'may-xoi', dong1: 'Bạn đã bình luận về quảng cáo của Nông Cơ Đồng Xanh', dong2: '"Máy xới này giá sao shop?"' }, gio: '14:47' },
    { k: 'cap', e: 'AI nhắn trước', t: 'Inbox trước: báo giá, gửi đúng ảnh quảng cáo', s: 'Khách không cần mô tả lại máy' },
    { k: 'ai', text: 'Dạ chào anh Dũng, máy xới đất chạy dầu **7HP** giá **11.900.000đ** ạ, bảo hành 12 tháng, giao tận vườn.' },
    { k: 'ai', img: 'may-xoi' },
    { k: 'ai', text: 'Anh xới **vườn gì, rộng bao nhiêu** để em tư vấn đúng máy nha?' },

    { k: 'cap', e: 'Khách trả lời', t: 'So với máy xăng 6,9 triệu → khuyên máy dầu', s: 'Vườn rộng, đất chặt: máy xăng dễ nóng máy' },
    { k: 'kh', text: 'Vườn cà phê a 1,5ha đất đỏ hơi dốc. Trên mạng có máy xăng 6,9tr, mua loại đó được k?' },
    { k: 'ai', text: 'Dạ **1,5ha đất đỏ** chạy cả buổi thì anh nên lấy **máy dầu**: khỏe, ít nóng máy ạ. Máy xăng 6,9 triệu chỉ hợp vườn **dưới 3 sào** thôi anh.' },
    { k: 'cap', e: 'Hỏi đúng thứ còn thiếu', t: 'Chọn máy rồi: AI hỏi dàn tặng kèm', s: 'Gửi ảnh để khách chọn nhanh' },
    { k: 'ai', text: 'Máy tặng kèm 1 dàn: **dàn vun gốc** làm cỏ cà phê hay **bánh lồng** đi ruộng ngập ạ. Anh lấy dàn nào ạ?' },
    { k: 'ai', imgs: ['may-xoi-xanh', 'xoi-ruong'] },
    { k: 'kh', text: 'Dàn vun gốc em, vườn cà phê mà' },
    { k: 'cap', e: 'Xin thông tin lên đơn', t: 'Chọn xong: AI xin SĐT, địa chỉ vườn' },
    { k: 'ai', text: 'Dạ em ghi **máy xới dầu 7HP, tặng dàn vun gốc**, 11.900.000đ. Anh gửi em **SĐT và địa chỉ vườn** để em lên đơn nha.' },

    // Khách im sau khi được xin SĐT, địa chỉ → màn hình phụ: gắn thẻ (3 hashtag quảng cáo + thẻ từ cuộc chat), bám đuổi 3 tin
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Chưa gửi SĐT: Preny tự gắn thẻ khách', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi theo thẻ', t: '3 tin ngắn: 15 phút, 3 tiếng, 20 tiếng', s: 'Chỉ nói về đúng máy khách đã chọn' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Anh Dũng ơi, em giữ cho anh **1 máy xới 7HP kèm dàn vun gốc** rồi ạ. Anh gửi em SĐT, địa chỉ vườn để em xếp xe giao nha 😊' },
    { k: 'p', a: 'r1', d: 900 },
    { k: 'time', nhan: '3 tiếng sau', gio: '17:49', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Em gửi anh ảnh thật máy chạy ở vườn khách nha 📸 Đất đỏ chặt vẫn xới ngọt, lắp dàn vun gốc làm cỏ quanh năm.' },
    { k: 'ai', imgs: ['may-xoi-2', 'may-xoi-3'] },
    { k: 'p', a: 'r2', d: 900 },
    { k: 'time', nhan: '20 tiếng sau', gio: '10:49', ngay: 'T5 19/11/2026', d: 700 },
    { k: 'ai', text: 'Anh chỉ cần gửi **SĐT và địa chỉ vườn** là em lên đơn liền ạ. Chốt hôm nay em **giảm 500.000đ còn 11.400.000đ** 🎁' },
    { k: 'p', a: 'r3', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 3, khách gửi SĐT, địa chỉ', s: 'AI kiểm tra ngay thông tin khách gửi' },
    { k: 'kh', text: '090531246, thôn 3 xã Ea Tu, Buôn Ma Thuột em' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'cap', e: 'Kiểm tra dữ liệu', t: 'SĐT thiếu 1 số → hỏi lại ngay lập tức' },
    { k: 'ai', text: 'Dạ em ghi địa chỉ vườn rồi ạ. Số **090531246** mới có 9 số, anh kiểm tra lại giúp em nha.' },
    { k: 'kh', text: '0905312468 em' },
    { k: 'cap', e: 'Chốt đơn', t: 'Tự tổng hợp đơn: máy, quà tặng, SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ anh kiểm tra lại đơn giúp em nha:\n– Máy xới đất chạy dầu 7HP\n– Tặng: 1 dàn vun gốc\n– Tổng: **11.400.000đ** · nhận máy mới trả tiền\n– Người nhận: Dũng · 0905 312 468\n– Thôn 3, xã Ea Tu, TP. Buôn Ma Thuột\nAnh xác nhận giúp em đơn này nha.', nut: 'Quản lý đơn hàng', d: 3600 },
    { k: 'cap', e: 'Xong', t: 'Khách chỉ cần nói "Ok em"' },
    { k: 'kh', text: 'Ok em' },
    { k: 'ai', text: 'Dạ em lên đơn, xếp xe giao tận vườn cho anh liền nha ⚡', d: 1300 },

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

    // Mua xong: tin cảm ơn kèm 5 máy đang giảm giá (deck.afterSale.sp của bài 1)
    { k: 'cap', e: 'Bán thêm sau mua', t: 'Cảm ơn khách, gửi kèm 5 máy đang giảm giá', s: 'Khách bấm "Mua ngay" ngay trong Messenger' },
    { k: 'ai', text: 'Dạ cảm ơn anh Dũng nha 🎉 Đơn đã được xác nhận, kỹ thuật giao và chạy thử tận vườn. Shop đang giảm giá mấy máy này, anh xem thử nha:' },
    { k: 'car', sp: [
        { img: 'bom-nuoc', ten: 'Máy bơm nước chạy dầu', gia: '4.465.000đ', cu: '4.700.000đ', giam: '-5%' },
        { img: 'phun-thuoc', ten: 'Bình phun thuốc chạy điện 20L', gia: '1.415.500đ', cu: '1.490.000đ', giam: '-5%' },
        { img: 'cat-co', ten: 'Máy cắt cỏ cầm tay', gia: '2.565.000đ', cu: '2.700.000đ', giam: '-5%' },
        { img: 'may-xoi-xanh', ten: 'Dàn vun gốc, lưỡi làm cỏ', gia: '1.250.000đ', cu: '1.450.000đ', giam: '-14%' },
        { img: 'may-cay', ten: 'Máy cày 4 bánh cỡ nhỏ', gia: '185.000.000đ', cu: '195.000.000đ', giam: '-5%' },
      ], d: 5200 },

    // Chăm sóc sau bán qua Zalo: khách đã nhận máy
    { k: 'zalo', gio: '19:30', ngay: 'CN 22/11/2026', chip: '3 ngày sau · khách đã nhận máy', d: 1500 },
    { k: 'cap', e: 'Chăm sóc sau bán qua Zalo', t: 'Khách nhận máy: AI hỏi thăm, dặn bảo dưỡng', s: 'Xin đánh giá ngay trong tin Zalo OA của shop' },
    { k: 'zns', zns: {
        img: 'may-xoi-3', tieuDe: 'Anh Dũng ơi, máy xới chạy ổn không ạ?',
        noiDung: 'Đồng Xanh cảm ơn anh đã nhận đơn **#DX31207** (Máy xới dầu 7HP · dàn vun gốc). **20 giờ chạy đầu** anh nhớ thay nhớt máy nha. Anh đánh giá giúp shop nha!',
        nut: 'Đánh giá sản phẩm',
      }, d: 4200 },
    { k: 'cap', e: 'ZBS · Sản phẩm bán chạy', t: '1 tuần sau: gửi máy bán chạy mùa khô', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'CN 29/11/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['bom-nuoc', 'phun-thuoc', 'cat-co', 'may-xoi'], nhan: 'BÁN CHẠY MÙA KHÔ', mau: '#F97316',
        tieuDe: '🔥 Máy bán chạy mùa khô tại Đồng Xanh',
        noiDung: '**Máy bơm nước chạy dầu**, bình phun thuốc chạy điện và máy cắt cỏ đang được bà con làm vườn chọn nhiều nhất tuần qua.',
        nut: 'Xem ngay',
      }, d: 4600 },
    { k: 'cap', e: 'ZBS · Khuyến mãi', t: '1 tuần sau nữa: gửi voucher cho khách cũ', s: 'Kéo khách quay lại mua tiếp, không cần khách nhắn' },
    { k: 'zstamp', gio: '19:30', ngay: 'CN 06/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['bom-nuoc', 'cat-co', 'phun-thuoc', 'may-xoi-xanh'], nhan: 'KHÁCH CŨ · VOUCHER 300K',
        tieuDe: 'Tặng anh Dũng voucher 300.000đ',
        noiDung: 'Nhập mã **DONGXANH300** giảm **300.000đ** cho đơn từ 3.000.000đ. Hạn dùng đến 31/03/2027.',
        nut: 'Dùng voucher ngay',
      }, d: 4800 },

    { k: 'tongket', d: 8500 },
    { k: 'outro', d: 5200 },
  ],
  // Slide tổng kết cuối video (giống hệt file mẫu Yến chưng tươi, nhóm thương mại điện tử)
  tongKet: { tieuDe: 'Quy trình Preny AI giúp', em: 'tăng tỷ lệ chốt đơn', cot: [
    { ten: 'Khách hàng', icon: 'users', dong: ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến'] },
    { ten: 'AI Chatbot', icon: 'bot', dong: ['Phản hồi nhanh tức thì', 'Kêu gọi khách hàng mua hàng', 'Lấy thông tin và chốt đơn'] },
    { ten: 'Bám đuổi', icon: 'bell', dong: ['Gửi 5 tin nhắn trong 7 ngày để bám đuổi khách hàng'] },
    { ten: 'Chốt đơn', icon: 'check', dong: ['Lên đơn', 'Gửi sự kiện mua hàng lên Facebook'] },
    { ten: 'Mua lại', icon: 'refresh', dong: ['Tự động gửi 1 tin nhắn mỗi tuần qua FB và Zalo', 'Sản phẩm bán chạy, giảm giá, sản phẩm mới'] },
  ] },
  panels: {
    tag: { av: 'DP', ten: 'Phan Văn Dũng', sub: 'Messenger · bình luận quảng cáo Máy xới dầu 7HP',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#mayxoidau', 'qt hot'], ['#7hp', 'qt hot'], ['#mobile', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#DanVunGoc', 'qt']]]],
      im: 'Khách im từ 14:49, sau khi được xin SĐT, địa chỉ',
      rule: { lb: 'Bám đuổi theo thẻ #mayxoidau', tieuDe: '3 tin ngắn về máy xới khách đã chọn',
              dong: [['15 phút', 'Đã giữ máy kèm dàn vun gốc'], ['3 tiếng', 'Gửi ảnh thật máy chạy ở vườn'], ['20 tiếng', 'Chỉ cần SĐT, địa chỉ là lên đơn']] },
      reply: 'Khách gửi SĐT, địa chỉ · dừng bám đuổi' },
    capi: { tieuDe: 'Gửi đơn hàng cho Facebook', event: 'Purchase', nhan: 'SỰ KIỆN MUA HÀNG', giaTri: '11.400.000đ', pk: 'Purchase · 11.400.000đ',
      dong: [['Đơn hàng', '#DX31207 · Máy xới dầu 7HP · x1'], ['Nguồn khách', 'Bình luận quảng cáo Máy xới dầu 7HP → Messenger'], ['Giá trị', '11.400.000 VND'], ['Event ID', 'DX31207-PURCHASE (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện mua hàng' },
  },
  donHang: {
    ma: '#DX31207', sp: 'Máy xới đất đa năng chạy dầu 7HP', bien: 'Tặng kèm dàn vun gốc · x1', img: 'may-xoi', gia: '11.400.000đ',
    nv: { ten: 'Nhân viên Văn Hòa', av: 'VH' },
    ten: 'Phan Văn Dũng', sdt: '0905 312 468', dc: 'Thôn 3, xã Ea Tu, TP. Buôn Ma Thuột, Đắk Lắk', gio: '11:05 · 19/11/2026',
  },
};
