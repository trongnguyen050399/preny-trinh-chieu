/* Bài 2 (video demo ngang tự chạy): GIA DỤNG (Gia Dụng Tổ Ấm), nhóm thương mại điện tử. Viết lại 18/11/2026 theo mạch mới
   người dùng chốt cùng ngày (mẫu demo/bai2/kich-ban-yen-chung-tuoi-tc.js, video-ngang/HUONG-DAN-BAI2.md mục "Mạch tmdt"):
   - 1 cảnh duy nhất: quảng cáo robot hút bụi lau nhà có trạm, 2 khách bình luận (hỏi giá, hỏi lau có ướt thảm + giao Biên Hòa)
     → trả lời cả 2 "Mình check ib shop nha" → AI nhắn inbox trước: giá + đúng ảnh quảng cáo, hỏi sàn gỗ hay gạch, rộng bao nhiêu
     → chị Mai: 2 tầng sàn gỗ, hỏi lau có ướt sàn gỗ, cầu thang (ca khó) → AI nói thật: không ướt, không leo cầu thang, nhớ bản đồ từng tầng
     → hỏi màu → khách chọn Trắng → AI xin SĐT + địa chỉ → khách im → gắn thẻ (3 hashtag quảng cáo + #baogia + #MauTrang)
     → bám đuổi 3 tin 15 phút, 3 tiếng, 20 tiếng (tin 3: giảm 1.000.000đ + tặng chổi, giẻ 6 tháng của bài 1)
     → khách gửi SĐT + địa chỉ + lịch lắp (ca khó: thiếu phường, Q.7 có nhiều đường số 9) → tóm tắt đơn → Purchase lên Facebook
     → đơn tự động, nhân viên bấm xác nhận → cảm ơn + 5 món giảm giá → Zalo: hỏi thăm, dặn gỡ lông chổi, bán chạy, voucher → tổng kết → logo.
   - Chỉ 1 sản phẩm từ đầu tới cuối (robot hút bụi lau nhà có trạm), không có đoạn khách hỏi sản phẩm khác.
   Tên shop, giá, chính sách, khách, SĐT, địa chỉ: minh họa của bài 1 (demo/kich-ban/gia-dung-tc.js). Tự đặt thêm: robot 2 màu Trắng/Đen
   (theo ảnh), giá giảm 10% trong carousel cho khách vừa mua. Ảnh: ảnh Unsplash có sẵn trong máy của bài 1. */
window.VN_KB = {
  ten: 'Gia dụng video ngang',
  ketSub: 'Để AI tư vấn, bám đuổi và lên đơn đồ gia dụng cho shop của bạn',
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
    'may-pha-ca-phe': '../assets/img/u/1570222094114-d054a817e56b_800x800.jpg', // máy pha cà phê nhỏ giọt + máy xay hạt
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= BÌNH LUẬN QUẢNG CÁO → INBOX (cảnh duy nhất) ================= */
    { k: 'canh', nhan: 'Bình luận quảng cáo → Inbox', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'robot-3', nhan: 'MESSENGER', tieuDe: 'Robot hút lau có trạm · Nhắn shop tư vấn', nut: 'Gửi tin nhắn',
        text: 'Nhà có cún, có bé vẫn sạch bong 🐶 Robot hút bụi lau nhà có trạm: hút sạch lông chó mèo, lau không ướt sàn gỗ, tự đổ rác. Bảo hành 24 tháng. #robothutlau #thucung #mobile',
      }, d: 1500 },
    { k: 'cap', e: 'Bình luận hỏi giá', t: 'Khách hỏi giá ngay dưới quảng cáo', s: 'Một khách khác hỏi lau có ướt thảm không' },
    { k: 'cmt', i: 0, ten: 'Mai Nguyễn', av: 'MN', text: 'Robot này bao nhiêu shop?' },
    { k: 'cmt', i: 1, ten: 'Hoàng Long', av: 'HL', text: 'Nhà a có thảm, lau có ướt thảm k shop? Giao Biên Hòa được k?' },
    { k: 'cap', e: 'Trả lời cả 2 bình luận', t: 'Trả lời ngắn gọn, mời khách vào inbox', s: 'Tư vấn chi tiết trong tin nhắn riêng' },
    { k: 'rep', i: 0, text: 'Mình check ib shop nha 💬' },
    { k: 'rep', i: 1, text: 'Mình check ib shop nha 💬' },
    { k: 'ms', ref: { loai: 'cmt', img: 'robot-3', dong1: 'Bạn đã bình luận về quảng cáo của Gia Dụng Tổ Ấm', dong2: '"Robot này bao nhiêu shop?"' }, gio: '14:47' },
    { k: 'cap', e: 'AI nhắn trước', t: 'Inbox trước: báo giá, gửi đúng ảnh quảng cáo', s: 'Khách không cần mô tả lại sản phẩm' },
    { k: 'ai', text: 'Dạ chào chị Mai, **robot hút bụi lau nhà có trạm** giá **12.990.000đ** ạ, bảo hành 24 tháng, giao lắp tại nhà.' },
    { k: 'ai', img: 'robot-3' },
    { k: 'ai', text: 'Nhà mình **sàn gỗ hay gạch**, rộng khoảng **bao nhiêu m²** để em tư vấn đúng nha?' },

    { k: 'cap', e: 'Khách trả lời', t: 'Sàn gỗ, 2 tầng → nói thật từng điểm', s: 'Không ướt sàn gỗ, không leo cầu thang' },
    { k: 'kh', text: 'Nhà c 2 tầng sàn gỗ, mỗi tầng 60m². Lau có ướt sàn gỗ k e, cầu thang thì sao?' },
    { k: 'ai', text: 'Dạ robot **tự chỉnh lượng nước**, trạm sấy khô giẻ nên **không ướt sàn gỗ** ạ. Robot **không leo cầu thang**, chị bê lên tầng 2 là máy **nhớ bản đồ từng tầng**, chạy luôn.' },
    { k: 'cap', e: 'Hỏi đúng thứ còn thiếu', t: 'Hợp nhà rồi: AI hỏi tiếp màu robot', s: 'Gửi ảnh để khách chọn nhanh' },
    { k: 'ai', text: 'Robot có 2 màu **Trắng** và **Đen**, cùng giá ạ. Chị lấy màu nào ạ?' },
    { k: 'ai', imgs: ['robot-hut-bui', 'robot-2'] },
    { k: 'kh', text: 'Màu trắng nha e' },
    { k: 'cap', e: 'Xin thông tin lên đơn', t: 'Chọn xong: AI xin SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ em ghi **robot có trạm màu Trắng**, 12.990.000đ. Chị gửi em **SĐT và địa chỉ** để em lên đơn, xếp lịch lắp nha.' },

    // Khách im sau khi được xin SĐT, địa chỉ → màn hình phụ: gắn thẻ (3 hashtag quảng cáo + thẻ từ cuộc chat), bám đuổi 3 tin
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Chưa gửi SĐT: Preny tự gắn thẻ khách', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi theo thẻ', t: '3 tin ngắn: 15 phút, 3 tiếng, 20 tiếng', s: 'Chỉ nói về đúng robot khách đã chọn' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Chị Mai ơi, em giữ cho chị **1 robot màu Trắng** đợt này rồi ạ, máy về ít lắm. Chị gửi em SĐT, địa chỉ để em xếp lịch lắp nha 😊' },
    { k: 'p', a: 'r1', d: 900 },
    { k: 'time', nhan: '3 tiếng sau', gio: '17:49', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Em gửi chị ảnh robot chạy thật ở nhà khách nha 📸 Nhà cũng nuôi cún, có bé nhỏ, sàn gỗ y như nhà mình.' },
    { k: 'ai', imgs: ['robot-3', 'robot-4'] },
    { k: 'p', a: 'r2', d: 900 },
    { k: 'time', nhan: '20 tiếng sau', gio: '10:49', ngay: 'T5 19/11/2026', d: 700 },
    { k: 'ai', text: 'Chị chỉ cần gửi **SĐT và địa chỉ** là em lên đơn liền ạ. Chốt hôm nay em **giảm 1.000.000đ còn 11.990.000đ**, tặng bộ chổi, giẻ thay 6 tháng 🎁' },
    { k: 'p', a: 'r3', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 3, khách gửi SĐT, địa chỉ', s: 'AI kiểm tra ngay thông tin khách gửi' },
    { k: 'kh', text: '0938 275 614, 27 đường số 9 Q7. Lắp chiều t7 giúp c' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'cap', e: 'Kiểm tra dữ liệu', t: 'Thiếu phường → hỏi lại ngay lập tức', s: 'Quận 7 có nhiều đường số 9' },
    { k: 'ai', text: 'Dạ em ghi SĐT, lịch chiều thứ Bảy rồi ạ. Q.7 có mấy **đường số 9**, chị cho em xin thêm **phường** để kỹ thuật tới đúng nha.' },
    { k: 'kh', text: 'P. Tân Phong e' },
    { k: 'cap', e: 'Chốt đơn', t: 'Tự tổng hợp đơn: robot, màu, SĐT, địa chỉ, lịch lắp' },
    { k: 'ai', text: 'Dạ chị kiểm tra lại đơn giúp em nha:\n– Robot hút lau có trạm, Trắng\n– Tặng bộ chổi, giẻ thay 6 tháng\n– Tổng: **11.990.000đ**, giao lắp tại nhà\n– Người nhận: Mai · 0938 275 614\n– 27 đường số 9, P. Tân Phong, Q.7\n– Lắp chiều thứ Bảy 21/11\nChị xác nhận giúp em đơn này nha.', nut: 'Quản lý đơn hàng', d: 3800 },
    { k: 'cap', e: 'Xong', t: 'Khách chỉ cần nói "Ok e"' },
    { k: 'kh', text: 'Ok e' },
    { k: 'ai', text: 'Dạ em lên đơn, xếp kỹ thuật lắp chiều thứ Bảy cho chị liền nha ⚡', d: 1300 },

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

    // Mua xong: tin cảm ơn kèm 5 món đang giảm giá (deck.afterSale.sp của bài 1, giảm 10% cho khách vừa mua)
    { k: 'cap', e: 'Bán thêm sau mua', t: 'Cảm ơn khách, gửi kèm 5 món đang giảm giá', s: 'Khách bấm "Mua ngay" ngay trong Messenger' },
    { k: 'ai', text: 'Dạ cảm ơn chị Mai nha 🎉 Đơn đã được xác nhận, kỹ thuật tới lắp chiều thứ Bảy. Shop đang giảm giá mấy món bếp này, chị xem thử nha:' },
    { k: 'car', sp: [
        { img: 'noi-ap-suat', ten: 'Nồi áp suất điện 6L', gia: '1.701.000đ', cu: '1.890.000đ', giam: '-10%' },
        { img: 'lo-nuong', ten: 'Lò nướng mini 12L', gia: '1.161.000đ', cu: '1.290.000đ', giam: '-10%' },
        { img: 'am-sieu-toc', ten: 'Ấm siêu tốc thủy tinh 1,7L', gia: '405.000đ', cu: '450.000đ', giam: '-10%' },
        { img: 'may-xay', ten: 'Máy trộn bột để bàn', gia: '2.241.000đ', cu: '2.490.000đ', giam: '-10%' },
        { img: 'may-pha-ca-phe', ten: 'Máy pha cà phê, xay hạt', gia: '2.961.000đ', cu: '3.290.000đ', giam: '-10%' },
      ], d: 5200 },

    // Chăm sóc sau bán qua Zalo: hôm sau ngày lắp robot
    { k: 'zalo', gio: '19:30', ngay: 'CN 22/11/2026', chip: 'Hôm sau ngày lắp robot', d: 1500 },
    { k: 'cap', e: 'Chăm sóc sau bán qua Zalo', t: 'Khách nhận hàng: AI hỏi dùng có ổn không', s: 'Dặn vệ sinh, xin đánh giá ngay trong tin Zalo OA' },
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
  // Slide tổng kết cuối video (giống hệt file mẫu Yến chưng tươi, nhóm thương mại điện tử)
  tongKet: { tieuDe: 'Quy trình Preny AI giúp', em: 'tăng tỷ lệ chốt đơn', cot: [
    { ten: 'Khách hàng', icon: 'users', dong: ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến'] },
    { ten: 'AI Chatbot', icon: 'bot', dong: ['Phản hồi nhanh tức thì', 'Kêu gọi khách hàng mua hàng', 'Lấy thông tin và chốt đơn'] },
    { ten: 'Bám đuổi', icon: 'bell', dong: ['Gửi 5 tin nhắn trong 7 ngày để bám đuổi khách hàng'] },
    { ten: 'Chốt đơn', icon: 'check', dong: ['Lên đơn', 'Gửi sự kiện mua hàng lên Facebook'] },
    { ten: 'Mua lại', icon: 'refresh', dong: ['Tự động gửi 1 tin nhắn mỗi tuần qua FB và Zalo', 'Sản phẩm bán chạy, giảm giá, sản phẩm mới'] },
  ] },
  panels: {
    tag: { av: 'MN', ten: 'Nguyễn Thị Mai', sub: 'Messenger · bình luận quảng cáo Robot hút lau',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#robothutlau', 'qt hot'], ['#thucung', 'qt hot'], ['#mobile', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#MauTrang', 'qt']]]],
      im: 'Khách im từ 14:49, sau khi được xin SĐT, địa chỉ',
      rule: { lb: 'Bám đuổi theo thẻ #robothutlau', tieuDe: '3 tin ngắn về robot khách đã chọn',
              dong: [['15 phút', 'Đã giữ robot màu Trắng cho khách'], ['3 tiếng', 'Gửi ảnh thật robot chạy ở nhà'], ['20 tiếng', 'Chỉ cần SĐT, địa chỉ là lên đơn']] },
      reply: 'Khách gửi SĐT, địa chỉ · dừng bám đuổi' },
    capi: { tieuDe: 'Gửi đơn hàng cho Facebook', event: 'Purchase', nhan: 'SỰ KIỆN MUA HÀNG', giaTri: '11.990.000đ', pk: 'Purchase · 11.990.000đ',
      dong: [['Đơn hàng', '#TA51326 · Robot có trạm · Trắng'], ['Nguồn khách', 'Bình luận quảng cáo Robot hút lau → Messenger'], ['Giá trị', '11.990.000 VND'], ['Event ID', 'TA51326-PURCHASE (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện mua hàng' },
  },
  donHang: {
    ma: '#TA51326', sp: 'Robot hút bụi lau nhà có trạm tự đổ rác', bien: 'Trắng · x1 · tặng chổi, giẻ 6 tháng', img: 'robot-3', gia: '11.990.000đ',
    phi: ['Giao lắp tại nhà', 'miễn phí'],
    nv: { ten: 'Nhân viên Phong', av: 'PH' },
    ten: 'Nguyễn Thị Mai', sdt: '0938 275 614', dc: '27 đường số 9, P. Tân Phong, Q.7, TP.HCM · lắp chiều T7 21/11', gio: '11:05 · 19/11/2026',
  },
};
