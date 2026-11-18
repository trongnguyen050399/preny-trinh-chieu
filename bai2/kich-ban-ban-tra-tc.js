/* Kịch bản Bài 2 (video demo NGANG 16:9 tự chạy): BÀN TRÀ · nhóm thương mại điện tử, theo mạch mẫu YaMe (18/11/2026).
   Nội dung lấy từ bài 1 (demo/kich-ban/ban-tra-tc.js): shop Bàn Trà Gia Mộc, bàn nguyên khối 1m2 8.900.000đ (bình luận anh Hưng,
   phòng 3×4m, giao Long An 1–2 ngày), bàn trà gỗ me tây nguyên khối 1m6 có bếp đun + bơm nước tự động 12.900.000đ (anh Quang,
   phòng 4×5m tiếp 5–6 khách, không cần đi đường nước), bộ 6 đôn 3.600.000đ, combo giảm 1.000.000đ → 15.500.000đ,
   ảnh thật tấm vân gỗ. Ca khó: khách gửi địa chỉ thiếu số nhà → AI hỏi lại.
   Tên shop, khách, SĐT, giá, ưu đãi: dữ liệu minh họa. Ảnh: ảnh có sẵn của bài 1 (Unsplash, không phải hàng của shop). */
window.VN_KB = {
  ten: 'Bàn trà video ngang',
  ketSub: 'Để AI bán hàng cho shop bàn trà của bạn',
  shop: { ten: 'Bàn Trà Gia Mộc', av: 'GM', mau: '#92400E', sub: 'Thường trả lời ngay' },
  anh: {
    'ban-tra': '../assets/img/u/1531970227416-f0cddeb1f748_800x800.jpg',    // bàn trà có bộ ấm chén
    'mat-go': '../assets/img/u/1583596838470-10ae8e96a95a_800x800.jpg',     // mặt gỗ vân sẫm
    'van-go-1': '../assets/img/u/1628630468252-a086c2bc7255_800x800.jpg',   // mặt bàn nguyên tấm
    'don-go': '../assets/img/u/1540809799-5da9372c3f64_800x800.jpg',        // đôn gỗ
    'am-chen': '../assets/img/u/1548386581-23b700b33be0_800x800.jpg',       // ấm tử sa + chén
    'khay-tra': '../assets/img/u/1577016029703-cc22a7c0c28c_800x800.jpg',   // khay trà gỗ
    'phong-tra': '../assets/img/u/1610375233775-6e0166927193_800x800.jpg',  // phòng trà bàn thấp
    'tra-o-long': '../assets/img/u/1627894006066-b45786537103_800x800.jpg', // trà ô long
    'tra-shan': '../assets/img/u/1543060895-03f57478a710_800x800.jpg',      // trà shan tuyết
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= TÌNH HUỐNG 1 · BÀI VIẾT → BÌNH LUẬN → INBOX ================= */
    { k: 'canh', nhan: 'Tình huống 1 · Bình luận xin giá → Inbox', gio: '21:05' },
    { k: 'fb', post: {
        gio: '5 giờ', img: 'mat-go', likes: '932', soCmt: '61 bình luận',
        text: 'Bàn trà gỗ nguyên khối có sẵn bếp đun, bơm nước tự động 🍵 Không cần đi đường nước, giao lắp và chạy thử tận nhà.',
      }, d: 1600 },
    { k: 'cap', e: 'Bình luận xin giá', t: 'Khách hỏi giá ngay dưới bài viết', s: 'Một khách khác hỏi gỗ có bị nứt không' },
    { k: 'cmt', i: 0, ten: 'Võ Hưng', av: 'VH', text: 'Bàn nhỏ cho phòng 3x4m giá bao nhiêu shop?' },
    { k: 'cmt', i: 1, ten: 'Thanh Tùng', av: 'TT', text: 'Gỗ nguyên khối để phòng máy lạnh có nứt không shop?' },
    { k: 'cap', e: 'Trả lời cả 2 bình luận', t: 'Trả lời ngắn gọn, mời khách vào inbox', s: 'Tư vấn chi tiết trong tin nhắn riêng' },
    { k: 'rep', i: 0, text: 'Mình check ib shop nha 💬' },
    { k: 'rep', i: 1, text: 'Mình check ib shop nha 💬' },

    { k: 'ms', ref: { loai: 'cmt', img: 'mat-go', dong1: 'Bạn đã bình luận về bài viết của Bàn Trà Gia Mộc', dong2: '"Bàn nhỏ cho phòng 3x4m giá bao nhiêu shop?"' }, gio: '21:07' },
    { k: 'cap', e: 'Tự động báo giá', t: 'Inbox trước: báo giá, gửi ảnh thật', s: 'Viết ngắn gọn, tự nhiên như người bán' },
    { k: 'ai', text: 'Dạ chào anh Hưng, bàn trà nguyên khối bản **1m2** giá **8.900.000đ** ạ, có sẵn bếp đun, bơm tự động.' },
    { k: 'ai', card: { title: 'Bàn trà gỗ nguyên khối 1m2 · Bếp đun, bơm nước tự động · Ngồi 3–4 người', gia: '8.900.000đ' } },
    { k: 'ai', imgs: ['van-go-1', 'mat-go', 'khay-tra'] },
    { k: 'ai', text: 'Phòng 3×4m bản **1m2** là vừa ạ. Anh hay tiếp mấy khách để em tư vấn cho chuẩn nha?' },
    { k: 'cap', e: 'Tư vấn kích thước', t: 'Khách trả lời 1 câu, AI chọn đúng cỡ bàn', s: 'Kiểm tra luôn bản khách chọn còn hàng' },
    { k: 'kh', text: 'thường 3 người e, giao Long An đc ko' },
    { k: 'ai', text: 'Dạ 3 người bản **1m2** là vừa, còn hàng ạ. Giao lắp Long An **1–2 ngày**. Anh gửi em **SĐT và địa chỉ** nha 😊' },
    { k: 'cap', e: 'Chốt đơn', t: 'Xin SĐT, địa chỉ: khách đưa đủ', s: 'AI tóm tắt đơn ngay trong chat' },
    { k: 'kh', text: '0918 637 205, 42 Hùng Vương, P.1, Tân An, Long An' },
    { k: 'ai', text: 'Dạ em lên đơn cho anh rồi nha:\n– Bàn trà nguyên khối 1m2, bếp đun + bơm\n– **8.900.000đ**\n– 0918 637 205\n– 42 Hùng Vương, P.1, Tân An, Long An\nShop gọi anh xác nhận rồi hẹn ngày giao lắp ạ 🎉', d: 3800 },

    /* ================= TÌNH HUỐNG 2 · QUẢNG CÁO → MESSENGER ================= */
    { k: 'canh', nhan: 'Tình huống 2 · Quảng cáo → Messenger', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'ban-tra', nhan: 'MESSENGER', tieuDe: 'Bàn trà nguyên khối · Nhắn shop tư vấn cỡ bàn', nut: 'Gửi tin nhắn',
        text: 'Bàn trà gỗ me tây nguyên khối 🍵 Có sẵn bếp đun và bơm nước tự động, không cần đi đường nước. Giao lắp miễn phí nội thành. #bantranguyenkhoi #gometay #mobile',
      }, d: 1500 },
    { k: 'cap', e: 'Quảng cáo Facebook', t: 'Khách bấm "Gửi tin nhắn" từ quảng cáo', s: 'Hỏi gì, AI trả lời ngay lập tức' },
    { k: 'tap', d: 1100 },
    { k: 'ms', ref: { loai: 'ad', img: 'ban-tra', dong1: 'Quang đã trả lời một quảng cáo', dong2: 'Bàn trà nguyên khối · Gỗ me tây' }, gio: '14:47', d: 900 },
    { k: 'kh', text: 'Bàn này giá sao shop?' },
    { k: 'cap', e: 'Khách hỏi giá', t: 'AI gửi đúng mẫu trên quảng cáo kèm giá', s: 'Khách không cần mô tả lại sản phẩm' },
    { k: 'ai', text: 'Dạ chào anh Quang, bàn trà me tây trên quảng cáo bản **1m6** giá **12.900.000đ** ạ, bếp và bơm bảo hành 12 tháng.' },
    { k: 'ai', img: 'ban-tra' },
    { k: 'ai', text: 'Phòng nhà mình rộng bao nhiêu, hay tiếp mấy khách để em tư vấn cỡ bàn nha?' },
    { k: 'cap', e: 'Không hỏi lại khách', t: 'Khách chụp mẫu khác hỏi "Này thì sao"', s: 'Chỉ một câu cộc lốc, không ghi tên mẫu' },
    { k: 'kh', shot: { img: 'don-go', cap: 'Đôn gỗ me tây nguyên khối, cao 45 cm vừa bàn trà 🪵' } },
    { k: 'kh', text: 'Này thì sao' },
    { k: 'cap', e: 'Nhận diện sản phẩm từ ảnh', t: 'Đúng mẫu. Đúng giá. Đúng tồn kho.', s: 'AI đọc ảnh khách gửi, khớp với kho sản phẩm của shop' },
    { k: 'ai', text: 'Dạ đây là **đôn gỗ me tây** cao 45 cm ạ, bộ 6 đôn còn hàng anh nha.' },
    { k: 'ai', card: { title: 'Bộ 6 đôn gỗ me tây nguyên khối · Cao 45 cm · Hợp bàn 1m6', gia: '3.600.000đ', cu: '4.200.000đ' } },
    { k: 'ai', img: 'don-go' },
    { k: 'ai', text: 'Anh cho em xin kích thước phòng để em tư vấn trọn bộ nha.' },

    // Khách im → màn hình phụ: gắn thẻ (3 hashtag của quảng cáo + thẻ từ cuộc chat), bám đuổi 3 tin theo thẻ
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Preny tự gắn thẻ đúng mẫu khách quan tâm', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi theo thẻ', t: '3 tin ngắn: 15 phút, 3 tiếng, 20 tiếng', s: 'Chỉ nói về đúng mẫu khách quan tâm' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Anh Quang ơi, bàn có **bơm hút từ bình 19 lít** dưới gầm nên **không cần đi đường nước** ạ. Anh nhắn em kích thước phòng nha 😊' },
    { k: 'p', a: 'r1', d: 900 },
    { k: 'time', nhan: '3 tiếng sau', gio: '17:49', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Em gửi anh ảnh thật **2 tấm vân gỗ** bản 1m6 đang có sẵn nha 📸 Anh chọn trước em giữ tấm đó cho anh.' },
    { k: 'ai', imgs: ['van-go-1', 'mat-go'] },
    { k: 'p', a: 'r2', d: 900 },
    { k: 'time', nhan: '20 tiếng sau', gio: '10:49', ngay: 'T5 19/11/2026', d: 700 },
    { k: 'ai', text: 'Combo **bàn 1m6 + 6 đôn** đặt trong tuần em **giảm 1.000.000đ**, giao lắp miễn phí nội thành ạ 🎁 Em giữ hàng cho anh nha?' },
    { k: 'p', a: 'r3', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 3, khách trả lời để chốt đơn', s: 'AI tư vấn cỡ bàn ngay khi khách nhắn' },
    { k: 'kh', text: 'Phòng 4x5m, hay tiếp 5-6 khách e' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },

    { k: 'cap', e: 'Tư vấn cỡ bàn', t: 'Phòng 4×5m, 5–6 khách → bàn 1m6', s: 'Rồi chủ động hỏi: lấy combo hay chỉ bàn?' },
    { k: 'ai', text: 'Dạ phòng 4×5m tiếp 5–6 khách anh lấy bản **1m6** là vừa ạ. Anh lấy combo kèm 6 đôn hay chỉ bàn nha?' },
    { k: 'kh', text: 'Lấy combo nha' },
    { k: 'cap', e: 'Hỏi đúng thứ còn thiếu', t: 'Khách chọn combo: AI hỏi tiếp tấm vân gỗ', s: 'Gửi ảnh thật 2 tấm để khách chọn nhanh' },
    { k: 'ai', text: 'Dạ bản 1m6 đang còn **2 tấm vân**, mỗi tấm một khác ạ. Anh chọn tấm số 1 hay số 2 nha?' },
    { k: 'ai', imgs: ['van-go-1', 'mat-go'] },
    { k: 'kh', text: 'Tấm số 2 nha e' },
    { k: 'ai', text: 'Dạ em ghi combo **bàn 1m6 tấm vân số 2 + 6 đôn**, **15.500.000đ** ạ. Anh gửi em **SĐT và địa chỉ** nhận hàng nha.' },
    { k: 'cap', e: 'Kiểm tra dữ liệu', t: 'Địa chỉ thiếu số nhà → hỏi lại ngay', s: 'Để xe giao và người khiêng tới đúng nhà' },
    { k: 'kh', text: '0909 112 358, đường Trần Não, Thủ Đức, nhà phố' },
    { k: 'ai', text: 'Dạ anh cho em xin thêm **số nhà** trên đường Trần Não để xe giao đúng nha.' },
    { k: 'kh', text: '27 Trần Não e' },
    { k: 'cap', e: 'Chốt đơn', t: 'Tự tổng hợp đơn: bàn, tấm vân, đôn, SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ anh kiểm tra lại đơn giúp em nha:\n– Bàn trà me tây 1m6, tấm vân số 2\n– Bộ 6 đôn gỗ me tây\n– Tổng: **15.500.000đ** (đã giảm 1.000.000đ)\n– 0909 112 358\n– 27 Trần Não, TP. Thủ Đức · nhà phố\nAnh xác nhận giúp em đơn này nha.', nut: 'Quản lý đơn hàng', d: 3800 },
    { k: 'cap', e: 'Xong', t: 'Khách chỉ cần nói "Ok e"' },
    { k: 'kh', text: 'Ok e' },
    { k: 'ai', text: 'Dạ em lên đơn cho anh liền nha ⚡', d: 1300 },

    // Chốt đơn → màn hình phụ: gửi đơn hàng cho Facebook → đơn tự động
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

    // Mua xong: tin cảm ơn kèm 5 món dùng cùng bàn trà đang giảm giá
    { k: 'cap', e: 'Bán thêm sau mua', t: 'Cảm ơn khách, gửi kèm 5 món đang giảm giá', s: 'Khách bấm "Mua ngay" ngay trong Messenger' },
    { k: 'ai', text: 'Dạ cảm ơn anh Quang nha 🎉 Shop giao lắp, chạy thử bếp Chủ nhật 22/11 ạ. Mấy món dùng cùng bàn trà đang giảm giá, anh xem nha:' },
    { k: 'car', sp: [
        { img: 'am-chen', ten: 'Bộ ấm tử sa kèm 6 chén', gia: '690.000đ', cu: '890.000đ', giam: '-22%' },
        { img: 'khay-tra', ten: 'Khay trà gỗ có ống thoát nước', gia: '650.000đ', cu: '790.000đ', giam: '-18%' },
        { img: 'tra-shan', ten: 'Trà Shan tuyết 500g', gia: '450.000đ', cu: '520.000đ', giam: '-13%' },
        { img: 'tra-o-long', ten: 'Trà Ô long 500g', gia: '320.000đ', cu: '380.000đ', giam: '-16%' },
        { img: 'phong-tra', ten: 'Bàn trà ngồi bệt kiểu Nhật', gia: '6.900.000đ', cu: '7.900.000đ', giam: '-13%' },
      ], d: 5200 },

    // Chăm sóc sau bán qua Zalo
    { k: 'zalo', gio: '19:30', ngay: 'T4 25/11/2026', chip: '3 ngày sau · khách đã nhận bàn', d: 1500 },
    { k: 'cap', e: 'Chăm sóc sau bán qua Zalo', t: 'Khách nhận bàn: AI hỏi dùng có ổn không', s: 'Xin đánh giá ngay trong tin Zalo OA của shop' },
    { k: 'zns', zns: {
        img: 'ban-tra', tieuDe: 'Bàn trà dùng ổn không anh Quang?',
        noiDung: 'Gia Mộc cảm ơn anh đã nhận đơn **#GM62014** (Bàn trà me tây 1m6 · 6 đôn). Anh nhớ súc bơm bằng nước sạch 1 tháng/lần nha. Đánh giá giúp shop nha!',
        nut: 'Đánh giá sản phẩm',
      }, d: 4200 },
    { k: 'cap', e: 'ZBS · Sản phẩm bán chạy', t: '1 tuần sau: gửi mẫu bán chạy qua Zalo', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'T4 02/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['ban-tra', 'am-chen', 'tra-shan', 'don-go'], nhan: 'TOP BÁN CHẠY TUẦN NÀY', mau: '#F97316',
        tieuDe: '🔥 Top bán chạy tuần này tại Gia Mộc',
        noiDung: 'Bàn trà **me tây có bếp đun**, bộ **ấm tử sa** và **trà Shan tuyết** đang được khách Gia Mộc chọn nhiều nhất tuần qua.',
        nut: 'Xem ngay',
      }, d: 4600 },
    { k: 'cap', e: 'ZBS · Khuyến mãi', t: '1 tuần sau nữa: gửi ưu đãi cho khách cũ', s: 'Kéo khách quay lại mua tiếp, không cần khách nhắn' },
    { k: 'zstamp', gio: '19:30', ngay: 'T4 09/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['tra-o-long', 'tra-shan', 'khay-tra', 'am-chen'], nhan: 'TRÀ MỚI VỀ · KHÁCH CŨ GIẢM 10%',
        tieuDe: 'Ưu đãi riêng cho khách cũ Gia Mộc',
        noiDung: 'Trà Shan tuyết, Ô long vụ đông vừa về. Tặng anh voucher **200.000đ** (mã **GIAMOC200**) cho đơn từ 1.000.000đ, hạn đến 31/12/2026.',
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
    tag: { av: 'LQ', ten: 'Lê Quang', sub: 'Messenger · từ quảng cáo Bàn trà nguyên khối',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#bantranguyenkhoi', 'qt hot'], ['#gometay', 'qt hot'], ['#mobile', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#DonGo', 'qt']]]],
      im: 'Khách im từ 14:49, sau khi được báo giá',
      rule: { lb: 'Bám đuổi theo thẻ #bantranguyenkhoi', tieuDe: '3 tin ngắn về bàn trà nguyên khối',
              dong: [['15 phút', 'Giải đáp: không cần đường nước'], ['3 tiếng', 'Gửi ảnh thật tấm vân gỗ'], ['20 tiếng', 'Ưu đãi combo bàn + 6 đôn']] },
      reply: 'Khách gửi kích thước phòng · dừng bám đuổi' },
    capi: { tieuDe: 'Gửi đơn hàng cho Facebook', event: 'Purchase', nhan: 'SỰ KIỆN MUA HÀNG', giaTri: '15.500.000đ', pk: 'Purchase · 15.500.000đ',
      dong: [['Đơn hàng', '#GM62014 · Bàn trà 1m6 + 6 đôn'], ['Nguồn khách', 'Quảng cáo Bàn trà → Messenger'], ['Giá trị', '15.500.000 VND'], ['Event ID', 'GM62014-PURCHASE (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện mua hàng' },
  },
  donHang: {
    ma: '#GM62014', sp: 'Combo bàn trà me tây 1m6 + 6 đôn', bien: 'Tấm vân số 2 · bếp đun, bơm tự động · x1', img: 'ban-tra', gia: '15.500.000đ',
    phi: ['Giao & lắp', 'miễn phí nội thành'],
    nv: { ten: 'Nhân viên Minh', av: 'NM' },
    ten: 'Lê Quang', sdt: '0909 112 358', dc: '27 Trần Não, TP. Thủ Đức, TP.HCM · nhà phố', gio: '11:06 · 19/11/2026',
  },
};
