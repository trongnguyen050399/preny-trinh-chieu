/* Bài 2 (video demo ngang tự chạy): TRANG SỨC, PHỤ KIỆN (nhẫn cầu hôn, nhẫn cưới, dây chuyền, bông tai, vòng tay), nhóm thương mại điện tử.
   Viết lại 18/11/2026 theo mạch tmdt người dùng chốt cùng ngày (mẫu: kich-ban-yen-chung-tuoi-tc.js):
   - 1 cảnh duy nhất: quảng cáo nhẫn cầu hôn, 2 khách bình luận (hỏi giá, hỏi giấy kiểm định, ship tỉnh) → trả lời cả 2
     "Mình check ib shop nha" → AI nhắn inbox trước: giá bản 5ly4 + đúng ảnh quảng cáo, hỏi 1 điều (ngân sách)
     → anh Quân: tầm 25 triệu, muốn bất ngờ nên chưa biết size tay bạn gái (ca khó bài 1)
     → AI gợi ý cùng mẫu bản kim cương 4ly5 22.900.000đ, chỉ cách đo ni bí mật bằng nhẫn cũ, đổi size miễn phí; hỏi chữ khắc
     → khách chọn 4ly5, khắc Q & L 24.12 → AI xin số đo nhẫn, SĐT, địa chỉ → khách im (đi đo nhẫn)
     → gắn thẻ (3 hashtag quảng cáo + #baogia + #KimCuong4ly5) → bám đuổi 3 tin 15 phút, 3 tiếng, 20 tiếng
     → khách gửi SĐT, địa chỉ, số đo 16,5mm → AI quy ra ni 10, phát hiện SĐT thiếu số → tóm tắt đơn → Purchase lên Facebook
     → đơn tự động, chuyên viên bấm xác nhận → cảm ơn + 5 món đang giảm → Zalo: hỏi thăm sau cầu hôn, bán chạy, ưu đãi trang sức cưới
     → tổng kết → logo.
   - Chỉ 1 sản phẩm từ đầu tới cuối (nhẫn cầu hôn vàng trắng 18K, chỉ đổi cỡ viên chủ), không có đoạn khách hỏi sản phẩm khác.
   Nội dung lấy từ bài 1 (demo/kich-ban/trang-suc-tc.js): shop Minh Khuê Jewelry, 5ly4 38.900.000đ, 4ly5 22.900.000đ, giấy kiểm định,
   khắc tên miễn phí, đổi size 30 ngày, hộp nhẫn có đèn, giao kín về công ty, anh Quân, đơn #MK61207, sản phẩm bán thêm, voucher MINHKHUE500.
   Tên shop, giá, chính sách, khách, SĐT: minh họa. Tự đặt thêm: câu hỏi bình luận của khách thứ 2, giá nhẫn đai đính tấm giảm còn
   42.750.000đ (giá cũ ghi "45 triệu" cho vừa thẻ carousel). Ảnh: ảnh có sẵn của bài 1 (Unsplash, không phải hàng của shop). */
window.VN_KB = {
  ten: 'Trang sức video ngang',
  ketSub: 'Để AI bán trang sức cho shop của bạn',
  shop: { ten: 'Minh Khuê Jewelry', av: 'MK', mau: '#A16207', sub: 'Thường trả lời ngay' },
  anh: {
    'nhan-cuoi': '../assets/img/u/1622398925373-3f91b1e275f5_800x800.jpg',      // cặp nhẫn cưới vàng trơn
    'nhan-kim-cuong': '../assets/img/u/1598560917807-1bae44bd2be8_800x800.jpg', // nhẫn vàng, kim cương chủ, đai đính tấm
    'hop-nhan': '../assets/img/u/1559006864-38a01f201f95_800x800.jpg',          // nhẫn kim cương vàng trắng trong hộp nhung
    'day-chuyen': '../assets/img/u/1589128777073-263566ae5e4d_800x800.jpg',     // dây chuyền vàng trắng mặt kim cương tấm
    'bong-tai': '../assets/img/u/1778182553300-7593326ca29d_800x800.jpg',       // bông tai vàng hình vỏ ốc
    'vong-tay': '../assets/img/u/1689367436629-1d288f1e23b6_800x800.jpg',       // vòng tay vàng đính 4 viên đá
    'cua-hang': '../assets/img/u/1622704776938-bed6cd156e04_800x800.jpg',       // cửa hàng trang sức, tủ kính
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= BÌNH LUẬN QUẢNG CÁO → INBOX (cảnh duy nhất) ================= */
    { k: 'canh', nhan: 'Bình luận quảng cáo → Inbox', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'hop-nhan', nhan: 'MESSENGER', tieuDe: 'Nhẫn cầu hôn 18K · Nhắn shop tư vấn', nut: 'Gửi tin nhắn',
        text: 'Khoảnh khắc "Em đồng ý" 💍 Nhẫn cầu hôn vàng trắng 18K, kim cương thiên nhiên có giấy kiểm định, khắc tên miễn phí, đổi size 30 ngày. #nhancauhon #kimcuong #mobile',
      }, d: 1500 },
    { k: 'cap', e: 'Bình luận hỏi giá', t: 'Khách hỏi giá ngay dưới quảng cáo', s: 'Một khách khác hỏi giấy kiểm định, ship tỉnh' },
    { k: 'cmt', i: 0, ten: 'Minh Quân', av: 'MQ', text: 'Nhẫn này giá bao nhiêu shop?' },
    { k: 'cmt', i: 1, ten: 'Thanh Vy', av: 'TV', text: 'Có giấy kiểm định không shop? Ship Cần Thơ được k?' },
    { k: 'cap', e: 'Trả lời cả 2 bình luận', t: 'Trả lời ngắn gọn, mời khách vào inbox', s: 'Tư vấn chi tiết trong tin nhắn riêng' },
    { k: 'rep', i: 0, text: 'Mình check ib shop nha 💬' },
    { k: 'rep', i: 1, text: 'Mình check ib shop nha 💬' },
    { k: 'ms', ref: { loai: 'cmt', img: 'hop-nhan', dong1: 'Bạn đã bình luận về quảng cáo của Minh Khuê Jewelry', dong2: '"Nhẫn này giá bao nhiêu shop?"' }, gio: '14:47' },
    { k: 'cap', e: 'AI nhắn trước', t: 'Inbox trước: báo giá, gửi đúng ảnh quảng cáo', s: 'Khách không cần mô tả lại sản phẩm' },
    { k: 'ai', text: 'Dạ chào anh Quân, nhẫn cầu hôn vàng trắng 18K, kim cương chủ **5ly4** giá **38.900.000đ** ạ, có giấy kiểm định.' },
    { k: 'ai', img: 'hop-nhan' },
    { k: 'ai', text: 'Anh dự tính **ngân sách** khoảng bao nhiêu để em tư vấn viên kim cương vừa tầm nha?' },

    { k: 'cap', e: 'Khách trả lời', t: 'Ngân sách 25 triệu, chưa biết size tay', s: 'Gợi ý cùng mẫu vừa tầm, chỉ cách đo bí mật' },
    { k: 'kh', text: 'Tầm 25tr thôi e. Mà a muốn bất ngờ nên k biết size tay cô ấy 😅' },
    { k: 'ai', text: 'Dạ 25 triệu anh lấy **cùng mẫu, kim cương 4ly5** giá **22.900.000đ** ạ, đeo lên tay vẫn sáng, có giấy kiểm định.' },
    { k: 'ai', text: 'Size thì anh **mượn lén 1 chiếc nhẫn** chị hay đeo, đo **đường kính trong** gửi em quy ra ni. Chưa vừa shop **đổi size miễn phí** 30 ngày ạ.' },
    { k: 'cap', e: 'Hỏi đúng thứ còn thiếu', t: 'Có mẫu rồi: AI hỏi chữ khắc trong nhẫn', s: 'Khắc tên miễn phí, giao kín hộp' },
    { k: 'ai', text: 'Shop **khắc tên miễn phí** trong nhẫn ạ. Anh muốn khắc chữ gì nha?' },
    { k: 'kh', text: 'Lấy bản 4ly5 nha e, khắc Q & L 24.12' },
    { k: 'cap', e: 'Xin thông tin lên đơn', t: 'Chọn xong: AI xin số đo, SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ em ghi nhẫn **kim cương 4ly5**, khắc **Q & L 24.12**, **22.900.000đ**. Anh gửi em **số đo nhẫn, SĐT và địa chỉ** để em lên đơn nha, giao về công ty cho kín cũng được ạ.' },

    // Khách im sau khi được xin SĐT, địa chỉ → màn hình phụ: gắn thẻ (3 hashtag quảng cáo + thẻ từ cuộc chat), bám đuổi 3 tin
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Chưa gửi SĐT: Preny tự gắn thẻ khách', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi theo thẻ', t: '3 tin ngắn: 15 phút, 3 tiếng, 20 tiếng', s: 'Chỉ nói về đúng chiếc nhẫn khách đã chọn' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Anh Quân ơi, em giữ viên **4ly5** đẹp nhất cho anh rồi ạ. Anh mượn được nhẫn của chị chưa, cần em chỉ cách đo cứ nhắn em nha 😊' },
    { k: 'p', a: 'r1', d: 900 },
    { k: 'time', nhan: '3 tiếng sau', gio: '17:49', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Em gửi anh ảnh thật nhẫn và cửa hàng nha 📸 Mã số khắc trên viên kim cương **trùng với giấy kiểm định** ạ.' },
    { k: 'ai', imgs: ['hop-nhan', 'cua-hang'] },
    { k: 'p', a: 'r2', d: 900 },
    { k: 'time', nhan: '20 tiếng sau', gio: '10:49', ngay: 'T5 19/11/2026', d: 700 },
    { k: 'ai', text: 'Anh chỉ cần gửi **số đo, SĐT và địa chỉ** là em lên đơn liền, tặng **hộp nhẫn có đèn**, giao kín tận tay ạ ⚡' },
    { k: 'p', a: 'r3', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 3, khách gửi SĐT, địa chỉ, số đo', s: 'AI kiểm tra ngay thông tin khách gửi' },
    { k: 'kh', text: '0909 735 12, giao công ty 25 Nguyễn Thị Minh Khai Q.1. Nhẫn cũ cô ấy a đo được 16,5mm' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'cap', e: 'Kiểm tra dữ liệu', t: '16,5mm → ni 10. SĐT thiếu số → hỏi lại ngay' },
    { k: 'ai', text: 'Dạ 16,5mm là **ni 10** ạ. Số **0909 735 12** hình như thiếu 1 số, anh kiểm tra lại giúp em nha.' },
    { k: 'kh', text: '0909 735 128 e' },
    { k: 'cap', e: 'Chốt đơn', t: 'Tự tổng hợp đơn: mẫu, ni, chữ khắc, SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ anh kiểm tra lại đơn giúp em nha:\n– Nhẫn cầu hôn vàng trắng 18K, kim cương 4ly5, ni 10\n– Khắc: Q & L 24.12 · tặng hộp nhẫn có đèn\n– Tổng: **22.900.000đ**, kiểm hàng rồi thanh toán\n– Người nhận: Quân · 0909 735 128\n– 25 Nguyễn Thị Minh Khai, Q.1, TP.HCM\nAnh xác nhận giúp em đơn này nha.', nut: 'Quản lý đơn hàng', d: 3600 },
    { k: 'cap', e: 'Xong', t: 'Khách chỉ cần nói "Ok em"' },
    { k: 'kh', text: 'Ok em' },
    { k: 'ai', text: 'Dạ em lên đơn, khắc tên xong giao kín tận tay anh nha ⚡', d: 1300 },

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
    { k: 'ai', text: 'Dạ cảm ơn anh Quân nha 🎉 Đơn đã xác nhận, khắc tên xong shop giao liền. Shop đang giảm mấy món cô dâu chú rể hay chọn, anh xem thử nha:' },
    { k: 'car', sp: [
        { img: 'nhan-cuoi', ten: 'Nhẫn cưới đôi vàng 18K', gia: '11.305.000đ', cu: '11.900.000đ', giam: '-5%' },
        { img: 'day-chuyen', ten: 'Dây chuyền kim cương vàng trắng', gia: '8.455.000đ', cu: '8.900.000đ', giam: '-5%' },
        { img: 'bong-tai', ten: 'Bông tai vàng 18K hình ốc', gia: '3.990.000đ', cu: '4.200.000đ', giam: '-5%' },
        { img: 'vong-tay', ten: 'Vòng tay vàng 18K đính đá', gia: '5.600.000đ', cu: '6.200.000đ', giam: '-10%' },
        { img: 'nhan-kim-cuong', ten: 'Nhẫn kim cương đai đính tấm', gia: '42.750.000đ', cu: '45 triệu', giam: '-5%' },
      ], d: 5200 },

    // Chăm sóc sau bán qua Zalo: hỏi thăm sau khi cầu hôn, dặn bảo quản, đổi size miễn phí
    { k: 'zalo', gio: '19:30', ngay: 'T5 26/11/2026', chip: '1 tuần sau · khách đã nhận nhẫn', d: 1500 },
    { k: 'cap', e: 'Chăm sóc sau bán qua Zalo', t: 'Khách nhận nhẫn: hỏi thăm, dặn bảo quản', s: 'Xin đánh giá ngay trong tin Zalo OA của shop' },
    { k: 'zns', zns: {
        img: 'hop-nhan', tieuDe: 'Anh Quân ơi, cầu hôn suôn sẻ không ạ? 💍',
        noiDung: 'Minh Khuê cảm ơn anh đã nhận đơn **#MK61207**. Anh dặn chị tháo nhẫn khi làm việc nhà, đi bơi; chưa vừa tay shop **đổi size miễn phí** nha!',
        nut: 'Đánh giá sản phẩm',
      }, d: 4200 },
    { k: 'cap', e: 'ZBS · Sản phẩm bán chạy', t: '1 tuần sau: gửi mẫu bán chạy qua Zalo', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'T5 03/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['nhan-cuoi', 'day-chuyen', 'bong-tai', 'vong-tay'], nhan: 'TOP BÁN CHẠY TUẦN NÀY', mau: '#F97316',
        tieuDe: '🔥 Top bán chạy tuần này tại Minh Khuê',
        noiDung: '**Nhẫn cưới đôi vàng 18K**, dây chuyền kim cương và **bông tai hình ốc** đang được khách Minh Khuê chọn nhiều nhất tuần qua.',
        nut: 'Xem ngay',
      }, d: 4600 },
    { k: 'cap', e: 'ZBS · Khuyến mãi', t: '1 tuần sau nữa: gửi ưu đãi cho khách cũ', s: 'Kéo khách quay lại mua tiếp, không cần khách nhắn' },
    { k: 'zstamp', gio: '19:30', ngay: 'T5 10/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['nhan-cuoi', 'day-chuyen', 'nhan-kim-cuong', 'bong-tai'], nhan: 'TRANG SỨC CƯỚI · KHÁCH CŨ GIẢM 5%',
        tieuDe: 'Ưu đãi riêng cho khách đã mua tại Minh Khuê',
        noiDung: 'Nhẫn cưới đôi, trang sức cô dâu giảm **5%**, khắc tên miễn phí. Tặng thêm voucher **MINHKHUE500** giảm 500.000đ cho đơn từ 5 triệu.',
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
    tag: { av: 'MQ', ten: 'Lê Minh Quân', sub: 'Messenger · bình luận quảng cáo Nhẫn cầu hôn 18K',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#nhancauhon', 'qt hot'], ['#kimcuong', 'qt hot'], ['#mobile', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#KimCuong4ly5', 'qt']]]],
      im: 'Khách im từ 14:49, sau khi được xin SĐT, địa chỉ',
      rule: { lb: 'Bám đuổi theo thẻ #nhancauhon', tieuDe: '3 tin ngắn về chiếc nhẫn khách đã chọn',
              dong: [['15 phút', 'Đã giữ viên 4ly5 cho khách'], ['3 tiếng', 'Gửi ảnh thật nhẫn, cửa hàng'], ['20 tiếng', 'Chỉ cần SĐT, địa chỉ là lên đơn']] },
      reply: 'Khách gửi SĐT, địa chỉ · dừng bám đuổi' },
    capi: { tieuDe: 'Gửi đơn hàng cho Facebook', event: 'Purchase', nhan: 'SỰ KIỆN MUA HÀNG', giaTri: '22.900.000đ', pk: 'Purchase · 22.900.000đ',
      dong: [['Đơn hàng', '#MK61207 · Nhẫn 4ly5 · ni 10'], ['Nguồn khách', 'Bình luận quảng cáo Nhẫn cầu hôn → Messenger'], ['Giá trị', '22.900.000 VND'], ['Event ID', 'MK61207-PURCHASE (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện mua hàng' },
  },
  donHang: {
    ma: '#MK61207', sp: 'Nhẫn cầu hôn vàng trắng 18K kim cương 4ly5', bien: 'Ni 10 · khắc Q & L 24.12 · x1', img: 'hop-nhan', gia: '22.900.000đ',
    nv: { ten: 'Chuyên viên Hà', av: 'CH' },
    ten: 'Lê Minh Quân', sdt: '0909 735 128', dc: '25 Nguyễn Thị Minh Khai, Q.1, TP.HCM (công ty)', gio: '11:05 · 19/11/2026',
  },
};
