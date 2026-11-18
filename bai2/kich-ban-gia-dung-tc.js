/* Kịch bản video demo NGANG 16:9: GIA DỤNG (nhóm thương mại điện tử), làm 18/11/2026 theo mẫu YaMe (kich-ban-yame.js).
   Nội dung lấy từ bài 1 (demo/kich-ban/gia-dung-tc.js): shop Gia Dụng Tổ Ấm, robot hút bụi lau nhà có trạm 12.990.000đ,
   chị Mai nhà 2 tầng sàn gỗ nuôi chó mèo, ca khó lau có ướt sàn gỗ, cầu thang (robot không leo, nhớ bản đồ từng tầng),
   bám đuổi #RobotHutLau (ảnh robot chạy thật ở nhà có cún) và theo giá (giảm 1.000.000đ + tặng chổi, giẻ 6 tháng),
   đơn #TA51326 giao lắp chiều thứ Bảy, máy pha cà phê khách gửi ảnh (3.290.000đ), sản phẩm bán thêm, voucher TOAM200.
   Mạch:
   - Cảnh 1: bài viết lò nướng mini 12L, khách hỏi giá + khách hỏi tư vấn → AI trả lời cả 2 → inbox: báo giá, ảnh, hỏi màu
     → khách chọn màu → xin SĐT, địa chỉ → lên đơn.
   - Cảnh 2: quảng cáo robot → chị Mai hỏi giá → AI gửi đúng ảnh quảng cáo → khách chụp máy pha cà phê "Này thì sao"
     → khách im → gắn thẻ, bám đuổi 3 tin → khách đưa diện tích nhà → chọn robot, chọn màu → SĐT thiếu số, hỏi lại → chốt đơn
     → gửi sự kiện mua hàng lên Facebook → đơn tự động → cảm ơn + 5 món giảm giá → Zalo: hỏi thăm, bán chạy, voucher.
   Tên shop, giá, khách, SĐT, địa chỉ: minh họa, dùng lại của bài 1. Tự đặt thêm: khách cảnh 1 (Thu Hà, câu hỏi bình luận
   của khách thứ 2, SĐT, địa chỉ), robot 2 màu Trắng/Đen (theo ảnh), giá giảm 10% trong carousel cho khách vừa mua.
   Ảnh: ảnh Unsplash có sẵn trong máy của bài 1. */
window.VN_KB = {
  ten: 'Gia dụng video ngang',
  shop: { ten: 'Gia Dụng Tổ Ấm', av: 'TA', mau: '#0E7490', sub: 'Thường trả lời ngay' },
  anh: {
    'robot-hut-bui': '../assets/img/u/1558317374-067fb5f30001_800x800.jpg',     // robot trắng hút thảm dưới gầm sofa
    'robot-2': '../assets/img/u/1653990480360-31a12ce9723e_800x800.jpg',        // robot đen chui gầm sofa
    'robot-3': '../assets/img/u/1762859731349-c9ff2808b672_800x800.jpg',        // robot trắng lau sàn gỗ, trạm phía sau, bố con chơi với chó
    'robot-4': '../assets/img/u/1757478558169-f09b4bd3918a_800x800.jpg',        // robot đen chạy, bé gái và chó con
    'lo-nuong': '../assets/img/u/1649264191931-9235c8dd03ef_800x800.jpg',       // lò nướng mini 3 màu hồng, xám, kem
    'noi-ap-suat': '../assets/img/u/1544233726-9f1d2b27be8b_800x800.jpg',       // nồi áp suất điện
    'may-xay': '../assets/img/u/1564940735784-b15466e8dc09_800x800.jpg',        // máy trộn bột để bàn
    'am-sieu-toc': '../assets/img/u/1643114786355-ff9e52736eab_800x800.jpg',    // ấm siêu tốc thủy tinh
    'bep': '../assets/img/u/1556911220-bff31c812dba_800x800.jpg',               // căn bếp
    'may-pha-ca-phe': '../assets/img/u/1570222094114-d054a817e56b_800x800.jpg', // máy pha cà phê nhỏ giọt + máy xay hạt
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= CẢNH 1 · BÀI VIẾT → BÌNH LUẬN → INBOX ================= */
    { k: 'canh', nhan: 'Tình huống 1 · Bình luận xin giá → Inbox', gio: '21:14' },
    { k: 'fb', post: {
        gio: '2 giờ', img: 'lo-nuong', likes: '1,1K', soCmt: '74 bình luận',
        text: 'Hàng mới về 🍞 Lò nướng mini 12L màu pastel, nướng bánh mì, đùi gà, khoai lang thơm phức. Nhỏ gọn, bếp nào cũng vừa. Giao nhanh trong ngày!',
      }, d: 1600 },
    { k: 'cap', e: 'Bình luận xin giá', t: 'Khách hỏi giá ngay dưới bài viết', s: 'Một khách khác hỏi tư vấn ở bình luận kế bên' },
    { k: 'cmt', i: 0, ten: 'Thu Hà', av: 'TH', text: 'Giá sao shop ơi?' },
    { k: 'cmt', i: 1, ten: 'Hoàng Long', av: 'HL', text: 'Lò 12L nướng bánh với đùi gà được k shop? Giao Biên Hòa được k?' },
    { k: 'cap', e: 'Trả lời cả 2 bình luận', t: 'Trả lời ngắn gọn, mời khách vào inbox', s: 'Tư vấn chi tiết trong tin nhắn riêng' },
    { k: 'rep', i: 0, text: 'Mình check ib shop nha 💬' },
    { k: 'rep', i: 1, text: 'Mình check ib shop nha 💬' },

    { k: 'ms', ref: { loai: 'cmt', img: 'lo-nuong', dong1: 'Bạn đã bình luận về bài viết của Gia Dụng Tổ Ấm', dong2: '"Giá sao shop ơi?"' }, gio: '21:16' },
    { k: 'cap', e: 'Tự động báo giá', t: 'Inbox trước: báo giá, gửi ảnh thật', s: 'Viết ngắn gọn, tự nhiên như người bán' },
    { k: 'ai', text: 'Dạ chào chị Hà, lò nướng mini **12L** giá **1.290.000đ** ạ, giao nhanh trong ngày.' },
    { k: 'ai', card: { title: 'Lò nướng mini 12L màu pastel, nhỏ gọn cho căn bếp nhỏ', gia: '1.290.000đ' } },
    { k: 'ai', img: 'lo-nuong' },
    { k: 'ai', text: 'Lò có 3 màu **Hồng, Xám, Kem** ạ. Chị lấy màu nào để em check hàng nha?' },
    { k: 'cap', e: 'Hỏi đúng 1 điều', t: 'Khách trả lời 1 câu, AI chốt đúng màu', s: 'Kiểm tra luôn màu khách chọn còn hàng' },
    { k: 'kh', text: 'lấy c màu hồng nha e' },
    { k: 'ai', text: 'Dạ lò màu **Hồng** còn hàng ạ. Chị gửi em **SĐT và địa chỉ** để em lên đơn nha 😊' },
    { k: 'cap', e: 'Chốt đơn', t: 'Xin SĐT, địa chỉ: khách đưa đủ', s: 'AI tóm tắt đơn ngay trong chat' },
    { k: 'kh', text: '0903 512 748, 15 Nguyễn Huệ, P. Bến Nghé, Q.1, HCM' },
    { k: 'ai', text: 'Dạ em lên đơn cho chị rồi nha:\n– Lò nướng mini 12L, màu Hồng\n– **1.290.000đ**\n– 0903 512 748\n– 15 Nguyễn Huệ, P. Bến Nghé, Q.1, HCM\nShop gọi chị xác nhận rồi giao liền ạ 🎉', d: 3800 },

    /* ================= CẢNH 2 · QUẢNG CÁO → MESSENGER ================= */
    { k: 'canh', nhan: 'Tình huống 2 · Quảng cáo → Messenger', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'robot-3', nhan: 'MESSENGER', tieuDe: 'Robot hút lau có trạm · Nhắn shop tư vấn', nut: 'Gửi tin nhắn',
        text: 'Nhà có cún, có bé vẫn sạch bong 🐶 Robot hút bụi lau nhà có trạm: hút sạch lông chó mèo, lau không ướt sàn gỗ, tự đổ rác. Bảo hành 24 tháng. #robothutlau #thucung #mobile',
      }, d: 1500 },
    { k: 'cap', e: 'Quảng cáo Facebook', t: 'Khách bấm "Gửi tin nhắn" từ quảng cáo', s: 'Hỏi gì, AI trả lời ngay lập tức' },
    { k: 'tap', d: 1100 },
    { k: 'ms', ref: { loai: 'ad', img: 'robot-3', dong1: 'Mai đã trả lời một quảng cáo', dong2: 'Robot hút lau có trạm' }, gio: '14:47', d: 900 },
    { k: 'kh', text: 'Robot này bao nhiêu shop?' },
    { k: 'cap', e: 'Khách hỏi giá', t: 'AI gửi đúng mẫu trên quảng cáo kèm giá', s: 'Khách không cần mô tả lại sản phẩm' },
    { k: 'ai', text: 'Dạ chào chị Mai, **robot hút bụi lau nhà có trạm** trên quảng cáo giá **12.990.000đ** ạ, bảo hành 24 tháng, giao lắp tại nhà.' },
    { k: 'ai', img: 'robot-3' },
    { k: 'ai', text: 'Nhà mình **sàn gỗ hay gạch**, rộng khoảng **bao nhiêu m²** để em tư vấn đúng nha?' },
    { k: 'cap', e: 'Không hỏi lại khách', t: 'Khách chụp mẫu khác hỏi "Này thì sao"', s: 'Chỉ một câu cộc lốc, không ghi tên mẫu' },
    { k: 'kh', shot: { img: 'may-pha-ca-phe', cap: 'Sáng nào cũng có cà phê nóng ☕ Máy pha cà phê nhỏ giọt kèm máy xay hạt' } },
    { k: 'kh', text: 'Này thì sao' },
    { k: 'cap', e: 'Nhận diện sản phẩm từ ảnh', t: 'Đúng mẫu. Đúng giá. Đúng tồn kho.', s: 'AI đọc ảnh khách gửi, khớp với kho sản phẩm của shop' },
    { k: 'ai', text: 'Dạ đây là **máy pha cà phê nhỏ giọt** kèm **máy xay hạt** ạ, bộ này còn hàng chị nha.' },
    { k: 'ai', card: { title: 'Bộ máy pha cà phê nhỏ giọt + máy xay hạt, pha 8–10 ly, giữ ấm 40 phút', gia: '3.290.000đ' } },
    { k: 'ai', img: 'may-pha-ca-phe' },
    { k: 'ai', text: 'Chị cho em xin **diện tích nhà** và mỗi sáng nhà mình **uống mấy ly** để em tư vấn cả 2 món nha.' },

    // Khách im → màn hình phụ: gắn thẻ (3 hashtag của bài quảng cáo + thẻ từ cuộc chat), bám đuổi 3 tin theo thẻ
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Preny tự gắn thẻ đúng mẫu khách quan tâm', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi theo thẻ', t: '3 tin ngắn: 15 phút, 3 tiếng, 20 tiếng', s: 'Chỉ nói về đúng mẫu khách quan tâm' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Chị Mai ơi, robot có trạm đợt này về **còn ít máy** lắm ạ. Chị nhắn em diện tích nhà để em giữ máy, xếp lịch lắp nha 😊' },
    { k: 'p', a: 'r1', d: 900 },
    { k: 'time', nhan: '3 tiếng sau', gio: '17:49', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Em gửi chị ảnh robot chạy thật nha 📸 Nhà khách bên em cũng nuôi cún, có bé nhỏ, robot tự né, hút sạch lông.' },
    { k: 'ai', img: 'robot-4' },
    { k: 'p', a: 'r2', d: 900 },
    { k: 'time', nhan: '20 tiếng sau', gio: '10:49', ngay: 'T5 19/11/2026', d: 700 },
    { k: 'ai', text: 'Robot chị hỏi, chốt trong hôm nay em **giảm 1.000.000đ còn 11.990.000đ** + **tặng bộ chổi, giẻ thay 6 tháng** ạ 🎁' },
    { k: 'p', a: 'r3', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 3, khách trả lời để chốt đơn', s: 'AI tư vấn ngay khi khách nhắn' },
    { k: 'kh', text: 'Nhà c 2 tầng, mỗi tầng 60m² sàn gỗ e' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },

    { k: 'cap', e: 'Tư vấn đúng nhà', t: '2 tầng sàn gỗ → lau không ướt, nhớ bản đồ từng tầng', s: 'Rồi chủ động hỏi: lấy robot hay máy pha cà phê?' },
    { k: 'ai', text: 'Dạ nhà 2 tầng, 60m² mỗi tầng dùng robot này vừa đẹp ạ. Lau **không ướt sàn gỗ**, robot **nhớ bản đồ từng tầng**, chị bê lên tầng 2 là chạy luôn. Chị lấy robot hay máy pha cà phê để em lên đơn nha?' },
    { k: 'kh', text: 'Lấy robot trước e' },
    { k: 'cap', e: 'Hỏi đúng thứ còn thiếu', t: 'Khách chọn robot: AI hỏi tiếp màu', s: 'Gửi ảnh 2 màu để khách chọn nhanh' },
    { k: 'ai', text: 'Dạ robot có 2 màu **Trắng** và **Đen**, cùng giá **11.990.000đ** hôm nay. Chị lấy màu nào ạ?' },
    { k: 'ai', imgs: ['robot-3', 'robot-4'] },
    { k: 'kh', text: 'Màu trắng nha e' },
    { k: 'ai', text: 'Dạ em ghi robot màu **Trắng**, 11.990.000đ, tặng bộ chổi, giẻ 6 tháng. Chị gửi em **SĐT, địa chỉ** và giờ tiện nhận để kỹ thuật tới lắp nha.' },
    { k: 'cap', e: 'Kiểm tra dữ liệu', t: 'SĐT thiếu số → hỏi lại ngay lập tức' },
    { k: 'kh', text: '093827561, 27 đường số 9, P. Tân Phong, Q.7. Giao chiều t7 giúp c' },
    { k: 'ai', text: 'Dạ em ghi địa chỉ, lịch chiều thứ Bảy rồi ạ, nhưng số **093827561** mới có 9 số, chị kiểm tra lại giúp em nha.' },
    { k: 'kh', text: '0938275614' },
    { k: 'cap', e: 'Chốt đơn', t: 'Tự tổng hợp đơn: sản phẩm, màu, SĐT, địa chỉ, lịch lắp' },
    { k: 'ai', text: 'Dạ chị kiểm tra lại đơn giúp em nha:\n– Robot hút lau có trạm, Trắng\n– Tặng bộ chổi, giẻ 6 tháng\n– Tổng: **11.990.000đ**, lắp tại nhà\n– 0938 275 614\n– 27 đường số 9, P. Tân Phong, Q.7\n– Lắp chiều thứ Bảy\nChị xác nhận giúp em đơn này nha.', nut: 'Quản lý đơn hàng', d: 3800 },
    { k: 'cap', e: 'Xong', t: 'Khách chỉ cần nói "Ok e"' },
    { k: 'kh', text: 'Ok e' },
    { k: 'ai', text: 'Dạ em lên đơn cho chị liền nha ⚡', d: 1300 },

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

    // Mua xong: tin cảm ơn kèm 5 món đang giảm giá (afterSale.sp của bài 1, giảm 10% cho khách vừa mua)
    { k: 'cap', e: 'Bán thêm sau mua', t: 'Cảm ơn khách, gửi kèm 5 món đang giảm giá', s: 'Khách bấm "Mua ngay" ngay trong Messenger' },
    { k: 'ai', text: 'Dạ cảm ơn chị Mai nha 🎉 Đơn đã được xác nhận, kỹ thuật tới lắp chiều thứ Bảy. Khách vừa mua được giảm 10% mấy món bếp này, chị xem thử nha:' },
    { k: 'car', sp: [
        { img: 'noi-ap-suat', ten: 'Nồi áp suất điện 6L', gia: '1.701.000đ', cu: '1.890.000đ', giam: '-10%' },
        { img: 'lo-nuong', ten: 'Lò nướng mini 12L', gia: '1.161.000đ', cu: '1.290.000đ', giam: '-10%' },
        { img: 'am-sieu-toc', ten: 'Ấm siêu tốc thủy tinh 1,7L', gia: '405.000đ', cu: '450.000đ', giam: '-10%' },
        { img: 'may-xay', ten: 'Máy trộn bột để bàn', gia: '2.241.000đ', cu: '2.490.000đ', giam: '-10%' },
        { img: 'may-pha-ca-phe', ten: 'Máy pha cà phê, xay hạt', gia: '2.961.000đ', cu: '3.290.000đ', giam: '-10%' },
      ], d: 5200 },

    // Chăm sóc sau bán qua Zalo
    { k: 'zalo', gio: '19:30', ngay: 'CN 22/11/2026', chip: '3 ngày sau · khách đã nhận hàng', d: 1500 },
    { k: 'cap', e: 'Chăm sóc sau bán qua Zalo', t: 'Khách nhận hàng: AI hỏi dùng có ổn không', s: 'Xin đánh giá ngay trong tin Zalo OA của shop' },
    { k: 'zns', zns: {
        img: 'robot-3', tieuDe: 'Chị Mai ơi, robot chạy có ổn không ạ?',
        noiDung: 'Gia Dụng Tổ Ấm cảm ơn chị đã nhận đơn **#TA51326** (Robot hút lau có trạm · Trắng). Nhà có chó mèo chị gỡ lông ở chổi cuốn mỗi tuần nha. Chị đánh giá giúp shop nha!',
        nut: 'Đánh giá sản phẩm',
      }, d: 4200 },
    { k: 'cap', e: 'ZBS · Sản phẩm bán chạy', t: '1 tuần sau: gửi món bán chạy qua Zalo', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'CN 29/11/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['noi-ap-suat', 'lo-nuong', 'am-sieu-toc', 'may-pha-ca-phe'], nhan: 'TOP BÁN CHẠY TUẦN NÀY', mau: '#F97316',
        tieuDe: '🔥 Top bán chạy tuần này tại Gia Dụng Tổ Ấm',
        noiDung: 'Nồi áp suất điện **6L**, lò nướng mini **12L** và **máy pha cà phê** kèm máy xay hạt đang được khách chọn nhiều nhất tuần qua.',
        nut: 'Xem ngay',
      }, d: 4600 },
    { k: 'cap', e: 'ZBS · Khuyến mãi', t: '1 tuần sau nữa: gửi ưu đãi cho khách cũ', s: 'Kéo khách quay lại mua tiếp, không cần khách nhắn' },
    { k: 'zstamp', gio: '19:30', ngay: 'CN 06/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['lo-nuong', 'noi-ap-suat', 'may-xay', 'am-sieu-toc'], nhan: 'VOUCHER 200K · KHÁCH ĐÃ MUA',
        tieuDe: 'Tặng chị Mai voucher 200.000đ',
        noiDung: 'Nhập mã **TOAM200** giảm 200.000đ cho đơn từ 1.000.000đ. Hạn dùng đến 31/03/2027.',
        nut: 'Dùng voucher ngay',
      }, d: 4800 },

    { k: 'tongket', d: 8500 },
    { k: 'outro', d: 5200 },
  ],
  // Slide tổng kết cuối video (giống hệt YaMe)
  tongKet: { tieuDe: 'Quy trình Preny AI giúp', em: 'tăng tỷ lệ chốt đơn', cot: [
    { ten: 'Khách hàng', icon: 'users', dong: ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến'] },
    { ten: 'AI Chatbot', icon: 'bot', dong: ['Phản hồi nhanh tức thì', 'Kêu gọi khách hàng mua hàng', 'Lấy thông tin và chốt đơn'] },
    { ten: 'Bám đuổi', icon: 'bell', dong: ['Gửi 5 tin nhắn trong 7 ngày để bám đuổi khách hàng'] },
    { ten: 'Chốt đơn', icon: 'check', dong: ['Lên đơn', 'Gửi sự kiện mua hàng lên Facebook'] },
    { ten: 'Mua lại', icon: 'refresh', dong: ['Tự động gửi 1 tin nhắn mỗi tuần qua FB và Zalo', 'Sản phẩm bán chạy, giảm giá, sản phẩm mới'] },
  ] },
  panels: {
    tag: { av: 'NM', ten: 'Nguyễn Thị Mai', sub: 'Messenger · từ quảng cáo Robot hút lau',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#robothutlau', 'qt hot'], ['#thucung', 'qt hot'], ['#mobile', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#MayPhaCaPhe', 'qt']]]],
      im: 'Khách im từ 14:49, sau khi được báo giá',
      rule: { lb: 'Bám đuổi theo thẻ #robothutlau', tieuDe: '3 tin ngắn về robot hút lau có trạm',
              dong: [['15 phút', 'Nhắc máy còn ít, giữ máy'], ['3 tiếng', 'Gửi ảnh robot chạy thật'], ['20 tiếng', 'Giảm giá, tặng chổi, giẻ']] },
      reply: 'Khách trả lời "Nhà c 2 tầng…" · dừng bám đuổi' },
    capi: { tieuDe: 'Gửi đơn hàng cho Facebook', event: 'Purchase', nhan: 'SỰ KIỆN MUA HÀNG', giaTri: '11.990.000đ', pk: 'Purchase · 11.990.000đ',
      dong: [['Đơn hàng', '#TA51326 · Robot có trạm · Trắng'], ['Nguồn khách', 'Quảng cáo Robot hút lau → Messenger'], ['Giá trị', '11.990.000 VND'], ['Event ID', 'TA51326-PURCHASE (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện mua hàng' },
  },
  donHang: {
    ma: '#TA51326', sp: 'Robot hút bụi lau nhà có trạm tự đổ rác', bien: 'Trắng · x1 · tặng chổi, giẻ 6 tháng', img: 'robot-3', gia: '11.990.000đ',
    phi: ['Giao lắp tại nhà', 'miễn phí'],
    nv: { ten: 'Nhân viên Phong', av: 'PH' },
    ten: 'Nguyễn Thị Mai', sdt: '0938 275 614', dc: '27 đường số 9, P. Tân Phong, Q.7, TP.HCM · lắp chiều T7', gio: '11:05 · 19/11/2026',
  },
};
