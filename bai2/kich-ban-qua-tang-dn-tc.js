/* Bài 2 (video demo ngang tự chạy): QUÀ TẶNG DOANH NGHIỆP, nhóm thương mại điện tử. Viết lại 18/11/2026 theo mạch Yến chưng tươi người dùng chốt cùng ngày:
   - 1 cảnh duy nhất: bài quảng cáo giỏ trái cây, 2 khách bình luận (hỏi giá, hỏi gửi tỉnh có dập không) → trả lời cả 2 "Mình check ib shop nha"
     → AI nhắn inbox trước: giá + đúng ảnh quảng cáo, hỏi 1 điều (công ty cần bao nhiêu giỏ) → khách trả lời: 30 giỏ, cần xuất VAT
     → AI báo giá số lượng (giảm 10% còn 711.000đ/giỏ), hỏi in logo lên thiệp hay ruy băng → khách chọn thiệp → AI xin SĐT + địa chỉ → khách im
     → gắn thẻ (3 hashtag quảng cáo + #baogia + #InLogoThiep) → bám đuổi 3 tin 15 phút, 3 tiếng, 20 tiếng → khách gửi SĐT, địa chỉ, thông tin VAT
     (ca khó: xuất VAT thiếu mã số thuế) → tóm tắt đơn → Purchase lên Facebook
     → đơn tự động, nhân viên bấm xác nhận → cảm ơn + 5 mẫu quà giảm giá → Zalo: hỏi thăm, bán chạy, khuyến mãi → tổng kết → logo.
   - Chỉ 1 sản phẩm từ đầu tới cuối (giỏ trái cây nhập khẩu); in logo, xuất VAT nằm trong cùng đơn này.
   Nội dung lấy từ bài 1 (demo/kich-ban/qua-tang-dn-tc.js): Quà Tặng Mộc An, giỏ trái cây 790.000đ, từ 30 phần giảm 10% (711.000đ),
   khách chị Lan (Cty CP Minh An, 25 Lý Thường Kiệt), 5 món bán thêm (afterSale.sp), mã MOCAN5 (afterSale.zbs).
   Tên shop, giá, khách, công ty, SĐT, mã số thuế: minh họa. Ảnh: ảnh có sẵn của bài 1 (demo/assets/img/u/). */
window.VN_KB = {
  ten: 'Quà tặng doanh nghiệp video ngang',
  ketSub: 'Để AI báo giá, chốt đơn quà tặng cho doanh nghiệp của bạn',
  shop: { ten: 'Quà Tặng Mộc An', av: 'MA', mau: '#B45309', sub: 'Thường trả lời ngay' },
  anh: {
    'gio-trai-cay': '../assets/img/u/1773823307113-2dcc3609aa79_800x800.jpg',
    'gio-trai-cay-2': '../assets/img/u/1629905707362-03cf1a9f6e2d_800x800.jpg',
    'hop-go': '../assets/img/u/1773450970959-cef81e9b1053_800x800.jpg',
    'hop-den': '../assets/img/u/1608755727748-dfa2e44f255b_800x800.jpg',
    'hop-trang': '../assets/img/u/1625552186152-668cd2f0b707_800x800.jpg',
    'gio-hoa': '../assets/img/u/1649789093457-3a973148fa27_800x800.jpg',
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= BÌNH LUẬN QUẢNG CÁO → INBOX (cảnh duy nhất) ================= */
    { k: 'canh', nhan: 'Bình luận quảng cáo → Inbox', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'gio-trai-cay', nhan: 'MESSENGER', tieuDe: 'Giỏ trái cây nhập khẩu · In logo, xuất VAT', nut: 'Gửi tin nhắn',
        text: 'Quà cuối năm gửi đối tác 🍇 Giỏ trái cây nhập khẩu nho, lê, mận tươi, in logo lên thiệp, ruy băng, xuất VAT cho công ty. Giao tận tay từng người nhận. #giotraicay #quadoanhnghiep #mobile',
      }, d: 1500 },
    { k: 'cap', e: 'Bình luận hỏi giá', t: 'Khách hỏi giá ngay dưới quảng cáo', s: 'Một khách khác hỏi gửi tỉnh có dập không' },
    { k: 'cmt', i: 0, ten: 'Lan Phạm', av: 'LP', text: 'Giỏ này giá sao shop?' },
    { k: 'cmt', i: 1, ten: 'Hoàng Yến', av: 'HY', text: 'Gửi Đà Nẵng trái cây có bị dập không shop?' },
    { k: 'cap', e: 'Trả lời cả 2 bình luận', t: 'Trả lời ngắn gọn, mời khách vào inbox', s: 'Tư vấn chi tiết trong tin nhắn riêng' },
    { k: 'rep', i: 0, text: 'Mình check ib shop nha 💬' },
    { k: 'rep', i: 1, text: 'Mình check ib shop nha 💬' },
    { k: 'ms', ref: { loai: 'cmt', img: 'gio-trai-cay', dong1: 'Bạn đã bình luận về quảng cáo của Quà Tặng Mộc An', dong2: '"Giỏ này giá sao shop?"' }, gio: '14:47' },
    { k: 'cap', e: 'AI nhắn trước', t: 'Inbox trước: báo giá, gửi đúng ảnh quảng cáo', s: 'Khách không cần mô tả lại sản phẩm' },
    { k: 'ai', text: 'Dạ chào chị Lan, giỏ trái cây nhập khẩu trên quảng cáo giá **790.000đ/giỏ** ạ, in logo công ty miễn phí.' },
    { k: 'ai', img: 'gio-trai-cay' },
    { k: 'ai', text: 'Công ty mình cần **bao nhiêu giỏ** để em báo giá số lượng nha chị?' },

    { k: 'cap', e: 'Khách trả lời', t: '30 giỏ, cần xuất VAT → báo giá sỉ', s: 'Đơn từ 30 giỏ tự giảm 10%' },
    { k: 'kh', text: '30 giỏ tặng đối tác e, có xuất VAT k?' },
    { k: 'ai', text: 'Dạ 30 giỏ bên em **giảm 10%**, còn **711.000đ/giỏ** ạ, có **xuất VAT** cho công ty mình nha.' },
    { k: 'cap', e: 'Hỏi đúng thứ còn thiếu', t: 'Có số lượng rồi: AI hỏi chỗ in logo', s: 'In lên thiệp hay ruy băng đều miễn phí' },
    { k: 'ai', text: 'Logo công ty mình in lên **thiệp** hay **ruy băng** ạ? Kiểu nào bên em cũng in miễn phí.' },
    { k: 'kh', text: 'In lên thiệp nha e' },
    { k: 'cap', e: 'Xin thông tin lên đơn', t: 'Chọn xong: AI xin SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ em ghi **30 giỏ trái cây, in logo lên thiệp**, tổng **21.330.000đ** ạ. Chị gửi em **SĐT và địa chỉ** nhận quà để em lên đơn nha.' },

    // Khách im sau khi được xin SĐT, địa chỉ → màn hình phụ: gắn thẻ (3 hashtag quảng cáo + thẻ từ cuộc chat), bám đuổi 3 tin
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Chưa gửi SĐT: Preny tự gắn thẻ khách', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi theo thẻ', t: '3 tin ngắn: 15 phút, 3 tiếng, 20 tiếng', s: 'Chỉ nói về đúng 30 giỏ khách đã chọn' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Chị Lan ơi, em giữ cho chị **30 giỏ trái cây in logo lên thiệp** rồi ạ. Chị gửi em SĐT, địa chỉ để em xếp lịch giao nha 😊' },
    { k: 'p', a: 'r1', d: 900 },
    { k: 'time', nhan: '3 tiếng sau', gio: '17:49', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Em gửi chị ảnh thật giỏ bên em vừa giao cho công ty khác nha 📸 Trái cây nhập trong tuần, thiệp in logo, thắt ruy băng.' },
    { k: 'ai', imgs: ['gio-trai-cay-2', 'gio-trai-cay'] },
    { k: 'p', a: 'r2', d: 900 },
    { k: 'time', nhan: '20 tiếng sau', gio: '10:49', ngay: 'T5 19/11/2026', d: 700 },
    { k: 'ai', text: 'Chị chỉ cần gửi **SĐT và địa chỉ** là em lên đơn, **xuất VAT** luôn ạ. Cuối năm lịch giao kín nhanh, em giữ lịch cho công ty mình nha ⚡' },
    { k: 'p', a: 'r3', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 3, khách gửi SĐT, địa chỉ', s: 'AI kiểm tra ngay thông tin khách gửi' },
    { k: 'kh', text: 'Chị Lan 0904223456, 25 Lý Thường Kiệt Hoàn Kiếm. Xuất VAT cty CP Minh An nhé' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'cap', e: 'Kiểm tra dữ liệu', t: 'Xuất VAT thiếu mã số thuế → hỏi lại ngay' },
    { k: 'ai', text: 'Dạ em ghi SĐT, địa chỉ rồi ạ. Chị cho em xin thêm **mã số thuế** Cty CP Minh An để em xuất hóa đơn đúng nha.' },
    { k: 'kh', text: '0108457692 e, file logo c gửi sau nha' },
    { k: 'cap', e: 'Chốt đơn', t: 'Tự tổng hợp đơn: số lượng, VAT, SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ chị kiểm tra lại đơn giúp em nha:\n– 30 giỏ trái cây nhập khẩu, in logo lên thiệp\n– Tổng: **21.330.000đ** (đã giảm 10%)\n– Xuất VAT: Cty CP Minh An · MST 0108457692\n– Chị Lan · 0904 223 456\n– 25 Lý Thường Kiệt, Hoàn Kiếm, HN\nChị xác nhận giúp em đơn này nha.', nut: 'Quản lý đơn hàng', d: 3800 },
    { k: 'cap', e: 'Xong', t: 'Khách chỉ cần nói "Ok e"' },
    { k: 'kh', text: 'Ok e' },
    { k: 'ai', text: 'Dạ em lên đơn, chị gửi file logo là em in thiệp liền nha ⚡', d: 1300 },

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

    // Mua xong: tin cảm ơn kèm 5 mẫu quà đang giảm giá (afterSale.sp của bài 1)
    { k: 'cap', e: 'Bán thêm sau mua', t: 'Cảm ơn khách, gửi kèm 5 mẫu đang giảm giá', s: 'Khách bấm "Mua ngay" ngay trong Messenger' },
    { k: 'ai', text: 'Dạ cảm ơn chị Lan nha 🎉 Đơn đã được xác nhận, shop chuẩn bị quà ngay cho chị. Cuối năm công ty hay đặt thêm quà cho nhân viên, chị xem thử nha:' },
    { k: 'car', sp: [
        { img: 'hop-trang', ten: 'Hộp quà Tết sang trọng', gia: '990.000đ', cu: '1.150.000đ', giam: '-14%' },
        { img: 'hop-den', ten: 'Hộp quà trà & hạt cao cấp', gia: '690.000đ', cu: '750.000đ', giam: '-8%' },
        { img: 'gio-hoa', ten: 'Giỏ quà chúc mừng kèm hoa', gia: '1.080.000đ', cu: '1.200.000đ', giam: '-10%' },
        { img: 'gio-trai-cay-2', ten: 'Giỏ trái cây mini', gia: '441.000đ', cu: '490.000đ', giam: '-10%' },
        { img: 'hop-go', ten: 'Hộp quà gỗ bánh & mứt', gia: '850.000đ', cu: '950.000đ', giam: '-11%' },
      ], d: 5200 },

    // Chăm sóc sau bán qua Zalo
    { k: 'zalo', gio: '19:30', ngay: 'CN 22/11/2026', chip: '3 ngày sau · công ty đã nhận quà', d: 1500 },
    { k: 'cap', e: 'Chăm sóc sau bán qua Zalo', t: 'Giao xong: AI hỏi đối tác có ưng không', s: 'Xin đánh giá ngay trong tin Zalo OA của shop' },
    { k: 'zns', zns: {
        img: 'gio-trai-cay', tieuDe: 'Chị Lan ơi, đối tác có ưng quà không ạ?',
        noiDung: 'Mộc An cảm ơn chị đã đặt đơn **#MA20512** (30 giỏ trái cây · in logo lên thiệp). 30/30 giỏ đã giao đủ, chị đánh giá giúp shop nha!',
        nut: 'Đánh giá dịch vụ',
      }, d: 4200 },
    { k: 'cap', e: 'ZBS · Sản phẩm bán chạy', t: '1 tuần sau: gửi mẫu bán chạy qua Zalo', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'CN 29/11/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['hop-trang', 'gio-trai-cay', 'hop-den', 'gio-hoa'], nhan: 'TOP BÁN CHẠY TUẦN NÀY', mau: '#F97316',
        tieuDe: '🔥 Top quà được đặt nhiều tuần này',
        noiDung: '**Hộp quà Tết sang trọng**, **giỏ trái cây nhập khẩu** và **hộp quà trà & hạt** đang được các công ty đặt nhiều nhất tuần qua.',
        nut: 'Xem ngay',
      }, d: 4600 },
    { k: 'cap', e: 'ZBS · Khuyến mãi', t: '1 tuần sau nữa: gửi ưu đãi cho khách cũ', s: 'Kéo khách quay lại đặt quà Tết, không cần khách nhắn' },
    { k: 'zstamp', gio: '19:30', ngay: 'CN 06/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['hop-trang', 'hop-go', 'hop-den', 'gio-hoa'], nhan: 'QUÀ TẾT 2027 · GIẢM THÊM 5%',
        tieuDe: 'Ưu đãi riêng cho Cty CP Minh An',
        noiDung: 'Em đã lưu sẵn logo, mẫu thiệp của công ty mình. Nhập mã **MOCAN5** giảm thêm **5%** đơn quà Tết, đến hết 15/01/2027.',
        nut: 'Đặt quà Tết ngay',
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
    tag: { av: 'LP', ten: 'Lan Phạm', sub: 'Messenger · bình luận quảng cáo Giỏ trái cây nhập khẩu',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#giotraicay', 'qt hot'], ['#quadoanhnghiep', 'qt hot'], ['#mobile', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#InLogoThiep', 'qt']]]],
      im: 'Khách im từ 14:49, sau khi được xin SĐT, địa chỉ',
      rule: { lb: 'Bám đuổi theo thẻ #giotraicay', tieuDe: '3 tin ngắn về 30 giỏ khách đã chọn',
              dong: [['15 phút', 'Đã giữ 30 giỏ in logo cho khách'], ['3 tiếng', 'Gửi ảnh thật giỏ vừa giao'], ['20 tiếng', 'Chỉ cần SĐT, địa chỉ là lên đơn']] },
      reply: 'Khách gửi SĐT, địa chỉ · dừng bám đuổi' },
    capi: { tieuDe: 'Gửi đơn hàng cho Facebook', event: 'Purchase', nhan: 'SỰ KIỆN MUA HÀNG', giaTri: '21.330.000đ', pk: 'Purchase · 21.330.000đ',
      dong: [['Đơn hàng', '#MA20512 · 30 giỏ trái cây in logo'], ['Nguồn khách', 'Bình luận quảng cáo Giỏ trái cây → Messenger'], ['Giá trị', '21.330.000 VND'], ['Event ID', 'MA20512-PURCHASE (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện mua hàng' },
  },
  donHang: {
    ma: '#MA20512', sp: 'Giỏ trái cây nhập khẩu', bien: 'In logo lên thiệp · x30 · xuất VAT', img: 'gio-trai-cay', gia: '21.330.000đ',
    phi: ['Giao hàng', 'miễn phí nội thành HN'],
    nv: { ten: 'Nhân viên Hà', av: 'H' },
    ten: 'Lan · Cty CP Minh An', sdt: '0904 223 456', dc: '25 Lý Thường Kiệt, P. Hoàn Kiếm, Hà Nội · xuất VAT', gio: '11:05 · 19/11/2026',
  },
};
