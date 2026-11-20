/* Bài 2 (video demo ngang tự chạy): GIA DỤNG GIÁ RẺ (chảo chống dính), nhóm thương mại điện tử. Làm 20/11/2026 theo file mẫu Yến chưng tươi:
   - 1 cảnh duy nhất: bài quảng cáo, 2 khách bình luận (hỏi giá, hỏi bếp gas dùng được không) → trả lời cả 2 "Mình check ib shop nha"
     → AI nhắn inbox trước: giá + đúng ảnh quảng cáo, hỏi 1 điều (bếp gì, mấy người ăn) → khách: bếp từ, 4 người, sợ bong chống dính
     → AI chọn 26cm, nói rõ bảo hành chống dính 6 tháng, hỏi màu cán → khách chọn → AI xin SĐT + địa chỉ → khách im
     → gắn thẻ (3 hashtag quảng cáo + #baogia + size khách chọn) → bám đuổi 3 tin 15 phút, 3 tiếng, 20 tiếng → khách gửi SĐT + địa chỉ
     (ca khó: thiếu phường) → tóm tắt đơn → Purchase lên Facebook
     → đơn tự động, nhân viên bấm xác nhận → cảm ơn + 5 sản phẩm giảm giá → Zalo: hỏi thăm, bán chạy, khuyến mãi → tổng kết → logo.
   - Chỉ 1 sản phẩm từ đầu tới cuối (chảo chống dính đáy từ 26cm). Tên shop, giá, khách, SĐT, địa chỉ: minh họa. Ảnh: Unsplash dùng chung với bài 1. */
window.VN_KB = {
  ten: 'Gia dụng giá rẻ video ngang',
  ketSub: 'Để AI tư vấn, bám đuổi và lên đơn đồ gia dụng cho shop của bạn',
  shop: { ten: 'Gia Dụng Nhà Xinh', av: 'NX', mau: '#EA580C', sub: 'Thường trả lời ngay' },
  anh: {
    'chao': '../assets/img/u/1592156328697-079f6ee0cfa5_800x800.jpg',
    'chao-2': '../assets/img/u/1592156328757-ae2941276b2c_800x800.jpg',
    'chao-trung': '../assets/img/u/1760192716247-382af2aa9b35_800x800.jpg',
    'chao-bep-tu': '../assets/img/u/1757920337591-02aa3c80cabc_800x800.jpg',
    'chao-rua': '../assets/img/u/1592824555997-fdf785dad8d4_800x800.jpg',
    'bo-noi': '../assets/img/u/1518291344630-4857135fb581_800x800.jpg',
    'ke-bep': '../assets/img/u/1556910602-38f53e68e15d_800x800.jpg',
    'dao': '../assets/img/u/1514986888952-8cd320577b68_800x800.jpg',
    'xeng-go': '../assets/img/u/1730597363352-0a8fe6eb5d12_800x800.jpg',
    'hu-thuy-tinh': '../assets/img/u/1774569037314-7a4353f6ae04_800x800.jpg',
    'hu-gia-vi': '../assets/img/u/1776219189350-728ddf739d6d_800x800.jpg',
    'treo-do': '../assets/img/u/1586969593928-1c87c1f9c2ef_800x800.jpg',
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= BÌNH LUẬN QUẢNG CÁO → INBOX (cảnh duy nhất) ================= */
    { k: 'canh', nhan: 'Bình luận quảng cáo → Inbox', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'chao', nhan: 'MESSENGER', tieuDe: 'Chảo chống dính đáy từ · chỉ 189K', nut: 'Gửi tin nhắn',
        text: 'CHẢO CHỐNG DÍNH ĐÁY TỪ 🍳 Dùng được mọi loại bếp, chống dính không chứa PFOA, bảo hành chống dính 6 tháng. Freeship đơn từ 150k. #chaochongdinh #daytu #giadung',
      }, d: 1500 },
    { k: 'cap', e: 'Bình luận hỏi giá', t: 'Khách hỏi giá ngay dưới quảng cáo', s: 'Một khách khác hỏi bếp gas dùng được không' },
    { k: 'cmt', i: 0, ten: 'Kim Ngân', av: 'KN', text: 'Chảo 26 giá sao shop?' },
    { k: 'cmt', i: 1, ten: 'Thu Hằng', av: 'TH', text: 'Bếp gas dùng được không shop?' },
    { k: 'cap', e: 'Trả lời cả 2 bình luận', t: 'Trả lời ngắn gọn, mời khách vào inbox', s: 'Tư vấn chi tiết trong tin nhắn riêng' },
    { k: 'rep', i: 0, text: 'Mình check ib shop nha 💬' },
    { k: 'rep', i: 1, text: 'Mình check ib shop nha 💬' },
    { k: 'ms', ref: { loai: 'cmt', img: 'chao', dong1: 'Bạn đã bình luận về quảng cáo của Gia Dụng Nhà Xinh', dong2: '"Chảo 26 giá sao shop?"' }, gio: '14:47' },
    { k: 'cap', e: 'AI nhắn trước', t: 'Inbox trước: báo giá, gửi đúng ảnh quảng cáo', s: 'Khách không cần mô tả lại sản phẩm' },
    { k: 'ai', text: 'Dạ chào chị Ngân, chảo chống dính đáy từ size 26cm giá **189.000đ** ạ, freeship đơn từ 150k.' },
    { k: 'ai', img: 'chao' },
    { k: 'ai', text: 'Nhà mình dùng **bếp gì** và **mấy người ăn** ạ, để em chọn size cho vừa nha?' },

    { k: 'cap', e: 'Khách trả lời', t: 'Bếp từ, 4 người, sợ bong chống dính', s: 'Nói rõ bảo hành, không hứa trọn đời' },
    { k: 'kh', text: 'bếp từ, nhà 4 ng. mà có bị bong chống dính ko e' },
    { k: 'ai', text: 'Dạ chảo **đáy từ** dùng bếp từ ngon lành ạ, 4 người chị lấy **26cm** là vừa. Chống dính **bảo hành 6 tháng**, chị dùng xẻng gỗ, silicon là bền lâu nha.' },
    { k: 'cap', e: 'Hỏi đúng thứ còn thiếu', t: 'Có size rồi: AI hỏi lấy lẻ hay combo', s: 'Gửi ảnh để khách chọn nhanh' },
    { k: 'ai', text: 'Chị lấy **1 chảo 26cm** hay **combo chảo 26cm + nồi 20cm** giá **399.000đ** ạ?' },
    { k: 'ai', imgs: ['chao', 'bo-noi'] },
    { k: 'kh', text: '1 chảo thôi e' },
    { k: 'cap', e: 'Xin thông tin lên đơn', t: 'Chọn xong: AI xin SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ em ghi **1 chảo 26cm**, 189.000đ, freeship. Chị gửi em **SĐT và địa chỉ** để em lên đơn nha.' },

    // Khách im sau khi được xin SĐT, địa chỉ → màn hình phụ: gắn thẻ (3 hashtag quảng cáo + thẻ từ cuộc chat), bám đuổi 3 tin
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Chưa gửi SĐT: Preny tự gắn thẻ khách', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi theo thẻ', t: '3 tin ngắn: 15 phút, 3 tiếng, 20 tiếng', s: 'Chỉ nói về đúng chiếc chảo khách đã chọn' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Chị Ngân ơi, em giữ cho chị **chảo 26cm** rồi ạ. Chị gửi em SĐT, địa chỉ để em gửi kịp đơn chiều nay nha 😊' },
    { k: 'p', a: 'r1', d: 900 },
    { k: 'time', nhan: '3 tiếng sau', gio: '17:49', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Em gửi chị ảnh thật chảo rán trứng trên **bếp từ** nha 📸 Chút dầu là trứng trượt ra liền, rửa nhẹ là sạch.' },
    { k: 'ai', imgs: ['chao-bep-tu', 'chao-trung', 'chao-rua'] },
    { k: 'p', a: 'r2', d: 900 },
    { k: 'time', nhan: '20 tiếng sau', gio: '10:49', ngay: 'T5 19/11/2026', d: 700 },
    { k: 'ai', text: 'Chị chỉ cần gửi **SĐT và địa chỉ** là em lên đơn liền, tặng **xẻng silicon** chống trầy, freeship ạ ⚡' },
    { k: 'p', a: 'r3', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 3, khách gửi SĐT, địa chỉ', s: 'AI kiểm tra ngay thông tin khách gửi' },
    { k: 'kh', text: '0976284153, 27 phan huy ích tân bình' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'cap', e: 'Kiểm tra dữ liệu', t: 'Phan Huy Ích dài qua 2 phường → hỏi lại ngay' },
    { k: 'ai', text: 'Dạ em ghi SĐT rồi ạ. Đường **Phan Huy Ích** đi qua 2 phường, chị cho em xin thêm **phường** để shipper giao đúng nha.' },
    { k: 'kh', text: 'P.15 nha e' },
    { k: 'cap', e: 'Chốt đơn', t: 'Tự tổng hợp đơn: size, quà tặng, SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ chị kiểm tra lại đơn giúp em nha:\n– Chảo chống dính đáy từ 26cm\n– Tặng 1 xẻng silicon\n– Tổng: **189.000đ** (freeship)\n– Người nhận: Ngân · 0976284153\n– 27 Phan Huy Ích, P.15, Tân Bình\nChị xác nhận giúp em đơn này nha.', nut: 'Quản lý đơn hàng', d: 3400 },
    { k: 'cap', e: 'Xong', t: 'Khách chỉ cần nói "Ok e"' },
    { k: 'kh', text: 'Ok e' },
    { k: 'ai', text: 'Dạ em lên đơn, gửi hàng cho chị liền nha ⚡', d: 1300 },

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

    // Mua xong: tin cảm ơn kèm 5 sản phẩm đang giảm giá
    { k: 'cap', e: 'Bán thêm sau mua', t: 'Cảm ơn khách, gửi kèm 5 sản phẩm đang giảm giá', s: 'Khách bấm "Mua ngay" ngay trong Messenger' },
    { k: 'ai', text: 'Dạ cảm ơn chị Ngân nha 💛 Đơn đã được xác nhận, shop gửi hàng ngay hôm nay. Shop đang giảm giá mấy món bếp hay mua kèm, chị xem thử nha:' },
    { k: 'car', sp: [
        { img: 'dao', ten: 'Dao thái inox 20cm', gia: '127.000đ', cu: '149.000đ', giam: '-15%' },
        { img: 'hu-thuy-tinh', ten: 'Bộ 3 hũ thủy tinh nắp kẹp', gia: '169.000đ', cu: '199.000đ', giam: '-15%' },
        { img: 'xeng-go', ten: 'Bộ xẻng muỗng gỗ 5 món', gia: '101.000đ', cu: '119.000đ', giam: '-15%' },
        { img: 'hu-gia-vi', ten: 'Bộ hũ đựng gia vị 3 món', gia: '159.000đ', cu: '189.000đ', giam: '-16%' },
        { img: 'bo-noi', ten: 'Nồi chống dính đáy từ 20cm', gia: '212.000đ', cu: '249.000đ', giam: '-15%' },
      ], d: 5200 },

    // Chăm sóc sau bán qua Zalo
    { k: 'zalo', gio: '19:30', ngay: 'T7 21/11/2026', chip: 'Tối hôm nhận · khách đã nhận chảo', d: 1500 },
    { k: 'cap', e: 'Chăm sóc sau bán qua Zalo', t: 'Khách nhận hàng: AI hỏi chảo dùng ổn không', s: 'Dặn cách dùng cho bền, xin đánh giá trong tin Zalo OA' },
    { k: 'zns', zns: {
        img: 'chao-trung', tieuDe: 'Chị Ngân ơi, chảo dùng ổn không ạ?',
        noiDung: 'Gia Dụng Nhà Xinh cảm ơn chị đã nhận đơn **#NX19114** (Chảo đáy từ 26cm). Chị rửa khi chảo nguội, không dùng búi sắt là chảo bền lâu nha!',
        nut: 'Đánh giá sản phẩm',
      }, d: 4200 },
    { k: 'cap', e: 'ZBS · Sản phẩm bán chạy', t: '1 tuần sau: gửi sản phẩm bán chạy qua Zalo', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'T7 28/11/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['dao', 'hu-thuy-tinh', 'xeng-go', 'bo-noi'], nhan: 'TOP BÁN CHẠY TUẦN NÀY', mau: '#F97316',
        tieuDe: '🔥 Top bán chạy tuần này tại Gia Dụng Nhà Xinh',
        noiDung: '**Dao thái inox**, **hũ thủy tinh nắp kẹp** và **nồi đáy từ** đang được khách chọn nhiều nhất tuần qua.',
        nut: 'Xem ngay',
      }, d: 4600 },
    { k: 'cap', e: 'ZBS · Khuyến mãi', t: '1 tuần sau nữa: gửi ưu đãi cho khách cũ', s: 'Kéo khách quay lại mua tiếp, không cần khách nhắn' },
    { k: 'zstamp', gio: '19:30', ngay: 'T7 05/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['ke-bep', 'treo-do', 'hu-gia-vi', 'chao'], nhan: 'KHÁCH CŨ · GIẢM 15%',
        tieuDe: 'Ưu đãi riêng cho khách đã mua tại Gia Dụng Nhà Xinh',
        noiDung: 'Bộ nồi chảo đáy từ, đồ sắp xếp bếp đang giảm **15%**, freeship. Áp dụng đến hết 13/12/2026.',
        nut: 'Mua ngay',
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
    tag: { av: 'KN', ten: 'Trần Kim Ngân', sub: 'Messenger · bình luận quảng cáo Chảo chống dính',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#chaochongdinh', 'qt hot'], ['#daytu', 'qt hot'], ['#giadung', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#Size26', 'qt']]]],
      im: 'Khách im từ 14:49, sau khi được xin SĐT, địa chỉ',
      rule: { lb: 'Bám đuổi theo thẻ #chaochongdinh', tieuDe: '3 tin ngắn về chiếc chảo khách đã chọn',
              dong: [['15 phút', 'Đã giữ chảo 26cm cho khách'], ['3 tiếng', 'Gửi ảnh thật chảo trên bếp từ'], ['20 tiếng', 'Chỉ cần SĐT, địa chỉ là lên đơn']] },
      reply: 'Khách gửi SĐT, địa chỉ · dừng bám đuổi' },
    capi: { tieuDe: 'Gửi đơn hàng cho Facebook', event: 'Purchase', nhan: 'SỰ KIỆN MUA HÀNG', giaTri: '189.000đ', pk: 'Purchase · 189.000đ',
      dong: [['Đơn hàng', '#NX19114 · Chảo đáy từ 26cm'], ['Nguồn khách', 'Bình luận quảng cáo Chảo chống dính → Messenger'], ['Giá trị', '189.000 VND'], ['Event ID', 'NX19114-PURCHASE (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện mua hàng' },
  },
  donHang: {
    ma: '#NX19114', sp: 'Chảo chống dính đáy từ', bien: '26cm · đáy từ · x1', img: 'chao', gia: '189.000đ',
    nv: { ten: 'Nhân viên Thảo', av: 'NT' },
    ten: 'Trần Kim Ngân', sdt: '0976284153', dc: '27 Phan Huy Ích, P.15, Tân Bình, TP.HCM', gio: '11:05 · 19/11/2026',
  },
};
