/* Kịch bản Bài 2 (video demo NGANG 16:9 tự chạy): MÁY NÔNG NGHIỆP (Nông Cơ Đồng Xanh), nhóm thương mại điện tử, giao hàng tận vườn.
   Làm 18/11/2026 theo mạch mẫu YaMe (demo/bai2/kich-ban-yame.js) và video-ngang/HUONG-DAN-BAI2.md. Nội dung lấy từ bài 1 (demo/kich-ban/may-nong-nghiep-tc.js).
   Mạch:
   - Tình huống 1: bài viết bình phun thuốc chạy điện → khách hỏi giá, khách khác hỏi phun 1ha sạc mấy lần → trả lời 1 câu chung → inbox: giá, card, ảnh
     → hỏi diện tích vườn → khách trả lời → xin SĐT, địa chỉ → tóm tắt đơn.
   - Tình huống 2: quảng cáo máy xới dầu 7HP → anh Dũng hỏi giá → AI gửi đúng ảnh quảng cáo + giá, hỏi diện tích, loại đất → khách chụp máy bơm
     "Này thì sao" → AI nhận ra → khách im → gắn thẻ, bám đuổi 3 tin → khách quay lại, so với máy xăng 6,9 triệu (ca khó) → AI khuyên máy dầu,
     hỏi chọn máy, chọn dàn tặng kèm → xin SĐT, địa chỉ vườn (thiếu SĐT → hỏi lại) → đơn → sự kiện mua hàng → nhân viên xác nhận
     → cảm ơn + 5 máy đang giảm giá → Zalo sau khi nhận máy (hỏi thăm + dặn thay nhớt, bán chạy mùa khô, voucher) → tổng kết → logo.
   Không có tin "đơn đang giao".
   Tên shop, giá, chính sách, khách, SĐT: dữ liệu minh họa của bài 1. Tự đặt thêm: khách tình huống 1 (anh Hùng, 0978 452 136, Chư Sê, Gia Lai),
   lựa chọn tặng dàn vun gốc hoặc bánh lồng, giá gốc máy cày 195.000.000đ. Ảnh: ảnh Unsplash có sẵn của bài 1 (demo/assets/img/u/). */
window.VN_KB = {
  ten: 'Máy nông nghiệp video ngang',
  ketSub: 'Để AI tư vấn và chốt đơn cho cửa hàng máy nông nghiệp của bạn',
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

    /* ================= TÌNH HUỐNG 1 · BÀI VIẾT → BÌNH LUẬN → INBOX ================= */
    { k: 'canh', nhan: 'Tình huống 1 · Bình luận xin giá → Inbox', gio: '20:16' },
    { k: 'fb', post: {
        gio: '5 giờ', img: 'phun-thuoc', likes: '942', soCmt: '63 bình luận',
        text: 'Phun thuốc không còn mỏi tay 💪 Bình phun chạy điện 20 lít đeo vai, pin phun liên tục 5–6 tiếng, hợp vườn cà phê, hồ tiêu, ruộng lúa.',
      }, d: 1600 },
    { k: 'cap', e: 'Bình luận xin giá', t: 'Khách hỏi giá ngay dưới bài viết', s: 'Một khách khác hỏi về pin ở bình luận kế bên' },
    { k: 'cmt', i: 0, ten: 'Quốc Hùng', av: 'QH', text: 'Bình này giá sao shop?' },
    { k: 'cmt', i: 1, ten: 'Nguyễn Thắng', av: 'NT', text: 'Phun 1ha lúa thì sạc mấy lần vậy shop?' },
    { k: 'cap', e: 'Trả lời cả 2 bình luận', t: 'Trả lời ngắn gọn, mời khách vào inbox', s: 'Tư vấn chi tiết trong tin nhắn riêng' },
    { k: 'rep', i: 0, text: 'Mình check ib shop nha 💬' },
    { k: 'rep', i: 1, text: 'Mình check ib shop nha 💬' },

    { k: 'ms', ref: { loai: 'cmt', img: 'phun-thuoc', dong1: 'Bạn đã bình luận về bài viết của Nông Cơ Đồng Xanh', dong2: '"Bình này giá sao shop?"' }, gio: '20:18' },
    { k: 'cap', e: 'Tự động báo giá', t: 'Inbox trước: báo giá, gửi ảnh thật', s: 'Viết ngắn gọn, tự nhiên như người bán' },
    { k: 'ai', text: 'Dạ chào anh Hùng, bình phun thuốc chạy điện **20 lít** giá **1.490.000đ** ạ, pin phun liên tục **5–6 tiếng**.' },
    { k: 'ai', card: { title: 'Bình Phun Thuốc Chạy Điện 20 Lít Đeo Vai · Pin Phun Liên Tục 5–6 Tiếng', gia: '1.490.000đ' } },
    { k: 'ai', img: 'phun-thuoc' },
    { k: 'ai', text: 'Anh phun **vườn rộng bao nhiêu** để em tư vấn cho vừa nha?' },
    { k: 'cap', e: 'Hỏi diện tích vườn', t: 'Khách trả lời 1 câu, AI chọn đúng bình', s: 'Kiểm tra luôn bình còn hàng' },
    { k: 'kh', text: 'vườn tiêu nhà a 1ha, phun buổi sáng thôi e' },
    { k: 'ai', text: 'Dạ 1ha thì bình **20 lít** là vừa, pin phun hết trong buổi sáng ạ. Anh gửi em **SĐT và địa chỉ** để em lên đơn nha 😊' },
    { k: 'cap', e: 'Chốt đơn', t: 'Xin SĐT, địa chỉ: khách đưa đủ', s: 'AI tóm tắt đơn ngay trong chat' },
    { k: 'kh', text: '0978 452 136, thôn 4 xã Chư Sê, Gia Lai' },
    { k: 'ai', text: 'Dạ em lên đơn cho anh rồi nha:\n– Bình phun thuốc chạy điện 20L\n– **1.490.000đ**\n– 0978 452 136\n– Thôn 4, xã Chư Sê, Gia Lai\nShop gọi anh xác nhận rồi giao liền ạ 🎉', d: 3800 },

    /* ================= TÌNH HUỐNG 2 · QUẢNG CÁO → MESSENGER ================= */
    { k: 'canh', nhan: 'Tình huống 2 · Quảng cáo → Messenger', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'may-xoi', nhan: 'MESSENGER', tieuDe: 'Máy xới dầu 7HP · Nhắn shop tư vấn', nut: 'Gửi tin nhắn',
        text: 'Vườn rộng, đất chặt cứ để máy dầu lo 🚜 Máy xới đa năng chạy dầu 7HP khỏe, ít nóng máy, đi lọt hàng cà phê 3m. #mayxoidau #7hp #mobile',
      }, d: 1500 },
    { k: 'cap', e: 'Quảng cáo Facebook', t: 'Khách bấm "Gửi tin nhắn" từ quảng cáo', s: 'Hỏi gì, AI trả lời ngay lập tức' },
    { k: 'tap', d: 1100 },
    { k: 'ms', ref: { loai: 'ad', img: 'may-xoi', dong1: 'Dũng đã trả lời một quảng cáo', dong2: 'Máy xới dầu 7HP · Đi lọt hàng cà phê' }, gio: '14:47', d: 900 },
    { k: 'kh', text: 'Máy xới này giá sao shop?' },
    { k: 'cap', e: 'Khách hỏi giá', t: 'AI gửi đúng máy trên quảng cáo kèm giá', s: 'Khách không cần mô tả lại máy' },
    { k: 'ai', text: 'Dạ chào anh Dũng, **máy xới đất chạy dầu 7HP** trên quảng cáo giá **11.900.000đ** ạ, bảo hành 12 tháng.' },
    { k: 'ai', img: 'may-xoi' },
    { k: 'ai', text: 'Anh cho em xin **diện tích vườn** và **loại đất** để em tư vấn đúng máy nha.' },
    { k: 'cap', e: 'Không hỏi lại khách', t: 'Khách chụp máy khác hỏi "Này thì sao"', s: 'Chỉ một câu cộc lốc, không ghi tên máy' },
    { k: 'kh', shot: { img: 'bom-nuoc', cap: 'Mùa khô tưới cà phê 💧 Máy bơm nước chạy dầu hút sâu, đẩy xa, chạy cả ngày' } },
    { k: 'kh', text: 'Này thì sao' },
    { k: 'cap', e: 'Nhận diện sản phẩm từ ảnh', t: 'Đúng máy. Đúng giá. Đúng tồn kho.', s: 'AI đọc ảnh khách gửi, khớp với kho sản phẩm của shop' },
    { k: 'ai', text: 'Dạ đây là **máy bơm nước chạy dầu** ạ, giá **4.700.000đ**, còn hàng anh nha.' },
    { k: 'ai', card: { title: 'Máy Bơm Nước Chạy Dầu · Tưới Cà Phê, Hồ Tiêu · Giao Tận Vườn', gia: '4.700.000đ' } },
    { k: 'ai', img: 'bom-nuoc' },
    { k: 'ai', text: 'Anh cho em xin **diện tích vườn** và **loại đất** để em tư vấn cả 2 máy nha.' },

    // Khách im → màn hình phụ: gắn thẻ (3 hashtag của quảng cáo + thẻ từ cuộc chat), bám đuổi 3 tin theo thẻ
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Preny tự gắn thẻ đúng máy khách quan tâm', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi theo thẻ', t: '3 tin ngắn: 15 phút, 3 tiếng, 20 tiếng', s: 'Chỉ nói về đúng máy khách quan tâm' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Anh Dũng ơi, máy xới 7HP **đi lọt hàng cà phê 3m**, làm được quanh năm ạ. Anh nhắn em diện tích vườn nha 😊' },
    { k: 'p', a: 'r1', d: 900 },
    { k: 'time', nhan: '3 tiếng sau', gio: '17:49', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Em gửi anh ảnh máy chạy thật ở vườn khách nha 📸 Đất chặt vẫn xới ngọt.' },
    { k: 'ai', imgs: ['may-xoi-2', 'may-xoi-3'] },
    { k: 'p', a: 'r2', d: 900 },
    { k: 'time', nhan: '20 tiếng sau', gio: '10:49', ngay: 'T5 19/11/2026', d: 700 },
    { k: 'ai', text: 'Chốt trong hôm nay em **giảm 500.000đ còn 11.400.000đ**, **tặng dàn vun gốc** ạ 🎁' },
    { k: 'p', a: 'r3', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 3, khách trả lời diện tích vườn', s: 'Ca khó: so với máy xăng 6,9 triệu trên mạng' },
    { k: 'kh', text: 'Vườn cà phê a 1,5ha đất đỏ hơi dốc. Trên mạng có máy xăng 6,9tr, mua loại đó được k?' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },

    { k: 'cap', e: 'Tư vấn đúng máy', t: '1,5ha đất đỏ → máy dầu, không phải máy xăng', s: 'Rồi chủ động hỏi: lấy máy xới hay máy bơm?' },
    { k: 'ai', text: 'Dạ vườn **1,5ha đất đỏ** chạy cả buổi thì anh nên lấy **máy dầu**: khỏe, ít nóng máy ạ. Máy xăng 6,9 triệu chỉ hợp vườn **dưới 3 sào**.' },
    { k: 'ai', text: 'Anh lấy **máy xới** trước hay lấy luôn **máy bơm** cho mùa khô ạ?' },
    { k: 'kh', text: 'Lấy máy xới trước em' },
    { k: 'cap', e: 'Hỏi đúng thứ còn thiếu', t: 'Khách chọn máy xới: AI hỏi dàn tặng kèm', s: 'Gửi ảnh 2 loại dàn để khách chọn nhanh' },
    { k: 'ai', text: 'Dạ máy xới **11.400.000đ** em tặng kèm 1 dàn: **dàn vun gốc** làm cỏ cà phê hay **bánh lồng** đi ruộng ngập ạ?' },
    { k: 'ai', imgs: ['may-xoi-xanh', 'xoi-ruong'] },
    { k: 'kh', text: 'Dàn vun gốc em, vườn cà phê mà' },
    { k: 'ai', text: 'Dạ em ghi máy xới 7HP + tặng **dàn vun gốc**. Anh gửi em **SĐT, địa chỉ vườn** nha, xe tải nhỏ vào tới vườn không anh?' },
    { k: 'cap', e: 'Kiểm tra dữ liệu', t: 'Thiếu SĐT → hỏi lại ngay lập tức' },
    { k: 'kh', text: 'Thôn 3, xã Ea Tu, Buôn Ma Thuột. Xe tải nhỏ vào tới vườn được em' },
    { k: 'ai', text: 'Dạ em ghi địa chỉ rồi ạ, anh cho em xin thêm **SĐT** để kỹ thuật gọi trước khi giao nha.' },
    { k: 'kh', text: '0905312468' },
    { k: 'cap', e: 'Chốt đơn', t: 'Tự tổng hợp đơn: máy, quà tặng, SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ anh kiểm tra lại đơn giúp em nha:\n– Máy xới đất chạy dầu 7HP\n– Tặng: 1 dàn vun gốc\n– Tổng: **11.400.000đ** · nhận máy mới trả tiền\n– 0905 312 468\n– Thôn 3, xã Ea Tu, TP. Buôn Ma Thuột\nAnh xác nhận giúp em đơn này nha.', nut: 'Quản lý đơn hàng', d: 3600 },
    { k: 'cap', e: 'Xong', t: 'Khách chỉ cần nói "Ok em"' },
    { k: 'kh', text: 'Ok em' },
    { k: 'ai', text: 'Dạ em lên đơn cho anh liền nha ⚡', d: 1300 },

    // Chốt đơn → màn hình phụ: gửi sự kiện mua hàng lên Facebook → đơn tự động → nhân viên xác nhận
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
    { k: 'ai', text: 'Dạ cảm ơn anh Dũng nha 🎉 Đơn đã xác nhận, kỹ thuật giao và chạy thử tận vườn. Mấy máy này đang giảm giá ạ:' },
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
        noiDung: 'Đồng Xanh cảm ơn anh đã nhận đơn **#DX31207** (Máy xới dầu 7HP). **20 giờ chạy đầu** anh nhớ thay nhớt máy nha. Anh đánh giá giúp shop nha!',
        nut: 'Đánh giá sản phẩm',
      }, d: 4200 },
    { k: 'cap', e: 'ZBS · Sản phẩm bán chạy', t: '1 tuần sau: gửi máy bán chạy mùa khô', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'CN 29/11/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['bom-nuoc', 'phun-thuoc', 'cat-co', 'may-xoi'], nhan: 'BÁN CHẠY MÙA KHÔ', mau: '#F97316',
        tieuDe: '🔥 Máy bán chạy mùa khô tại Đồng Xanh',
        noiDung: '**Máy bơm nước chạy dầu**, bình phun thuốc chạy điện và máy cắt cỏ đang được bà con làm vườn chọn nhiều nhất tuần qua.',
        nut: 'Xem ngay',
      }, d: 4200 },
    { k: 'cap', e: 'ZBS · Khuyến mãi', t: '1 tuần sau nữa: gửi voucher cho khách cũ', s: 'Kéo khách quay lại mua tiếp, không cần khách nhắn' },
    { k: 'zstamp', gio: '19:30', ngay: 'CN 06/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['bom-nuoc', 'cat-co', 'phun-thuoc', 'may-xoi-xanh'], nhan: 'KHÁCH CŨ · VOUCHER 300K',
        tieuDe: 'Tặng anh Dũng voucher 300.000đ',
        noiDung: 'Nhập mã **DONGXANH300** giảm **300.000đ** cho đơn từ 3.000.000đ. Hạn dùng đến 31/03/2027.',
        nut: 'Dùng voucher ngay',
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
    tag: { av: 'PD', ten: 'Phan Văn Dũng', sub: 'Messenger · từ quảng cáo Máy xới dầu 7HP',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#mayxoidau', 'qt hot'], ['#7hp', 'qt hot'], ['#mobile', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#MayBomDau', 'qt']]]],
      im: 'Khách im từ 14:49, sau khi được báo giá',
      rule: { lb: 'Bám đuổi theo thẻ #mayxoidau', tieuDe: '3 tin ngắn về máy xới dầu 7HP',
              dong: [['15 phút', 'Đi lọt hàng cà phê 3m'], ['3 tiếng', 'Gửi ảnh máy chạy thật'], ['20 tiếng', 'Giảm 500K, tặng dàn vun gốc']] },
      reply: 'Khách trả lời diện tích vườn · dừng bám đuổi' },
    capi: { tieuDe: 'Gửi đơn hàng cho Facebook', event: 'Purchase', nhan: 'SỰ KIỆN MUA HÀNG', giaTri: '11.400.000đ', pk: 'Purchase · 11.400.000đ',
      dong: [['Đơn hàng', '#DX31207 · Máy xới dầu 7HP · x1'], ['Nguồn khách', 'Quảng cáo Máy xới dầu 7HP → Messenger'], ['Giá trị', '11.400.000 VND'], ['Event ID', 'DX31207-PURCHASE (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện mua hàng' },
  },
  donHang: {
    ma: '#DX31207', sp: 'Máy xới đất đa năng chạy dầu 7HP', bien: 'Tặng kèm dàn vun gốc · x1', img: 'may-xoi', gia: '11.400.000đ',
    nv: { ten: 'Nhân viên Văn Hòa', av: 'VH' },
    ten: 'Phan Văn Dũng', sdt: '0905 312 468', dc: 'Thôn 3, xã Ea Tu, TP. Buôn Ma Thuột, Đắk Lắk', gio: '11:05 · 19/11/2026',
  },
};
