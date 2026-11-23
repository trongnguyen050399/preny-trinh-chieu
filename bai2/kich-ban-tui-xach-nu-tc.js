/* Bài 2 (video demo ngang tự chạy): THỜI TRANG TÚI XÁCH NỮ (túi đeo chéo), nhóm thương mại điện tử. Làm 23/11/2026 theo file mẫu Yến chưng tươi:
   - 1 cảnh duy nhất: bài quảng cáo, 2 khách bình luận (hỏi giá, hỏi màu đen đeo đi tiệc) → trả lời cả 2 "Mình check ib shop nha"
     → AI nhắn inbox trước: giá + đúng ảnh quảng cáo, hỏi 1 điều (hay đựng gì, đeo đi đâu) → khách: đi làm, điện thoại 6.7 inch + ví, sợ bong da
     → AI nói rõ đựng vừa, da PU mềm chống bong tróc, hỏi màu → khách chọn kem → AI xin SĐT + địa chỉ → khách im
     → gắn thẻ (3 hashtag quảng cáo + #baogia + màu khách chọn) → bám đuổi 3 tin 15 phút, 3 tiếng, 20 tiếng → khách gửi SĐT + địa chỉ
     (ca khó: địa chỉ chung cư thiếu tòa, số phòng) → tóm tắt đơn → Purchase lên Facebook
     → đơn tự động, nhân viên bấm xác nhận → cảm ơn + 5 sản phẩm giảm giá → Zalo: hỏi thăm, bán chạy, khuyến mãi → tổng kết → logo.
   - Chỉ 1 sản phẩm từ đầu tới cuối (túi đeo chéo da mềm). Ảnh 3 màu là 3 chiếc khác nhau nên gọi là "mẫu màu".
   - Tên shop, giá, khách, SĐT, địa chỉ: minh họa. Ảnh: Unsplash dùng chung với bài 1. */
window.VN_KB = {
  ten: 'Túi xách nữ video ngang',
  ketSub: 'Để AI tư vấn, bám đuổi và lên đơn túi xách cho shop của bạn',
  shop: { ten: 'Túi Xách Lam Anh', av: 'LA', mau: '#B45309', sub: 'Thường trả lời ngay' },
  anh: {
    'tui-kem': '../assets/img/u/1760624294514-3548bee70d26_800x800.jpg',
    'tui-kem-2': '../assets/img/u/1789110854684-eb5a433a68c2_800x800.jpg',
    'tui-den': '../assets/img/u/1620786514669-06e2340fce71_800x800.jpg',
    'tui-nau': '../assets/img/u/1760624294699-3d3156314391_800x800.jpg',
    'phoi-do': '../assets/img/u/1765114470103-b68286cf9c6d_800x800.jpg',
    'ao-dai': '../assets/img/u/1773394177841-0feb4fc370c4_800x800.jpg',
    'vi-kem': '../assets/img/u/1789110854823-381c81e48b4b_800x800.jpg',
    'vi': '../assets/img/u/1743244948210-8d70a7f2b556_800x800.jpg',
    'khan': '../assets/img/u/1761369332487-777e59fa4bcf_800x800.jpg',
    'kinh': '../assets/img/u/1593821684772-6865bb9413a0_800x800.jpg',
    'tui-hong': '../assets/img/u/1681747685985-a401c271156c_800x800.jpg',
    'tote': '../assets/img/u/1624687943971-e86af76d57de_800x800.jpg',
    'ke-tui': '../assets/img/u/1789098286012-c085db27219f_800x800.jpg',
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= BÌNH LUẬN QUẢNG CÁO → INBOX (cảnh duy nhất) ================= */
    { k: 'canh', nhan: 'Bình luận quảng cáo → Inbox', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'tui-kem', nhan: 'MESSENGER', tieuDe: 'Túi đeo chéo da mềm · chỉ 390K', nut: 'Gửi tin nhắn',
        text: 'TÚI ĐEO CHÉO DA MỀM 👜 Đựng vừa điện thoại 6.7 inch + ví + son, da PU mềm chống bong tróc, 3 mẫu màu kem, đen, nâu. Freeship đơn từ 300k. #tuideocheo #tuixachnu #tuidilam',
      }, d: 1500 },
    { k: 'cap', e: 'Bình luận hỏi giá', t: 'Khách hỏi giá ngay dưới quảng cáo', s: 'Một khách khác hỏi màu đen đeo đi tiệc' },
    { k: 'cmt', i: 0, ten: 'Phương Thảo', av: 'PT', text: 'Túi màu kem giá sao shop?' },
    { k: 'cmt', i: 1, ten: 'Ngọc Trâm', av: 'NT', text: 'Màu đen đeo đi tiệc được không shop?' },
    { k: 'cap', e: 'Trả lời cả 2 bình luận', t: 'Trả lời ngắn gọn, mời khách vào inbox', s: 'Tư vấn chi tiết trong tin nhắn riêng' },
    { k: 'rep', i: 0, text: 'Mình check ib shop nha 💬' },
    { k: 'rep', i: 1, text: 'Mình check ib shop nha 💬' },
    { k: 'ms', ref: { loai: 'cmt', img: 'tui-kem', dong1: 'Bạn đã bình luận về quảng cáo của Túi Xách Lam Anh', dong2: '"Túi màu kem giá sao shop?"' }, gio: '14:47' },
    { k: 'cap', e: 'AI nhắn trước', t: 'Inbox trước: báo giá, gửi đúng ảnh quảng cáo', s: 'Khách không cần mô tả lại sản phẩm' },
    { k: 'ai', text: 'Dạ chào chị Thảo, túi đeo chéo da mềm giá **390.000đ** ạ, freeship đơn từ 300k.' },
    { k: 'ai', img: 'tui-kem' },
    { k: 'ai', text: 'Chị hay **đựng những gì** và **đeo đi đâu** nhiều ạ, để em tư vấn cho vừa nha?' },

    { k: 'cap', e: 'Khách trả lời', t: 'Đi làm, đựng điện thoại 6.7 inch + ví, sợ bong da', s: 'Nói đúng chất da, không nói quá' },
    { k: 'kh', text: 'c đi làm vp, đựng đt 6.7 inch vs cái ví. mà da có bị bong ko e' },
    { k: 'ai', text: 'Dạ túi đựng vừa **điện thoại 6.7 inch + ví + son** ạ, dây chỉnh dài ngắn, đeo đi làm gọn gàng. Da **PU mềm chống bong tróc**, chị lau khăn mềm, tránh ngấm nước là túi bền lâu nha.' },
    { k: 'cap', e: 'Hỏi đúng thứ còn thiếu', t: 'Đủ nhu cầu rồi: AI hỏi khách thích màu nào', s: 'Gửi ảnh 3 mẫu màu để khách chọn nhanh' },
    { k: 'ai', text: 'Bên em có **3 mẫu màu kem, đen, nâu**, chị thích màu nào ạ?' },
    { k: 'ai', imgs: ['tui-kem-2', 'tui-den', 'tui-nau'] },
    { k: 'kh', text: 'màu kem nha e' },
    { k: 'cap', e: 'Xin thông tin lên đơn', t: 'Chọn xong: AI xin SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ em ghi **1 túi đeo chéo màu kem**, 390.000đ, freeship. Chị gửi em **SĐT và địa chỉ** để em lên đơn nha.' },

    // Khách im sau khi được xin SĐT, địa chỉ → màn hình phụ: gắn thẻ (3 hashtag quảng cáo + thẻ từ cuộc chat), bám đuổi 3 tin
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Chưa gửi SĐT: Preny tự gắn thẻ khách', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi theo thẻ', t: '3 tin ngắn: 15 phút, 3 tiếng, 20 tiếng', s: 'Chỉ nói về đúng chiếc túi khách đã chọn' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T2 23/11/2026', d: 700 },
    { k: 'ai', text: 'Chị Thảo ơi, em giữ cho chị **túi màu kem** rồi ạ. Chị gửi em SĐT, địa chỉ để em gửi kịp đơn chiều nay nha 😊' },
    { k: 'p', a: 'r1', d: 900 },
    { k: 'time', nhan: '3 tiếng sau', gio: '17:49', ngay: 'T2 23/11/2026', d: 700 },
    { k: 'ai', text: 'Em gửi chị ảnh thật túi **bỏ vừa điện thoại và ví**, phối đồ đi làm nha 📸' },
    { k: 'ai', imgs: ['tui-nau', 'phoi-do', 'ao-dai'] },
    { k: 'p', a: 'r2', d: 900 },
    { k: 'time', nhan: '20 tiếng sau', gio: '10:49', ngay: 'T3 24/11/2026', d: 700 },
    { k: 'ai', text: 'Chị chỉ cần gửi **SĐT và địa chỉ** là em lên đơn liền, freeship, không ưng màu **đổi trong 7 ngày** ạ ⚡' },
    { k: 'p', a: 'r3', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 3, khách gửi SĐT, địa chỉ', s: 'AI kiểm tra ngay thông tin khách gửi' },
    { k: 'kh', text: '0938615207, chung cư 12 nguyễn văn bảo gò vấp' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'cap', e: 'Kiểm tra dữ liệu', t: 'Địa chỉ chung cư thiếu tòa, số phòng → hỏi lại ngay' },
    { k: 'ai', text: 'Dạ em ghi SĐT rồi ạ. Chung cư có nhiều tòa, chị cho em xin thêm **tòa và số phòng** để shipper giao tận cửa nha.' },
    { k: 'kh', text: 'Tòa B phòng 1208 nha e' },
    { k: 'cap', e: 'Chốt đơn', t: 'Tự tổng hợp đơn: mẫu, màu, SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ chị kiểm tra lại đơn giúp em nha:\n– Túi đeo chéo da mềm · màu kem\n– Đổi màu trong 7 ngày\n– Tổng: **390.000đ** (freeship)\n– Người nhận: Thảo · 0938615207\n– P.1208 tòa B, 12 Nguyễn Văn Bảo, Gò Vấp\nChị xác nhận giúp em đơn này nha.', nut: 'Quản lý đơn hàng', d: 3400 },
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
    { k: 'ai', text: 'Dạ cảm ơn chị Thảo nha 💛 Đơn đã được xác nhận, shop gửi hàng ngay hôm nay. Shop đang giảm giá mấy món hay mua kèm túi, chị xem thử nha:' },
    { k: 'car', sp: [
        { img: 'vi-kem', ten: 'Ví cầm tay màu kem', gia: '161.000đ', cu: '189.000đ', giam: '-15%' },
        { img: 'khan', ten: 'Khăn lụa buộc quai túi', gia: '101.000đ', cu: '119.000đ', giam: '-15%' },
        { img: 'kinh', ten: 'Kính mát nữ gọng đen', gia: '135.000đ', cu: '159.000đ', giam: '-15%' },
        { img: 'tote', ten: 'Túi tote da đi làm', gia: '339.000đ', cu: '399.000đ', giam: '-15%' },
        { img: 'tui-hong', ten: 'Túi xách tay quai ngắn', gia: '390.000đ', cu: '459.000đ', giam: '-15%' },
      ], d: 5200 },

    // Chăm sóc sau bán qua Zalo
    { k: 'zalo', gio: '19:30', ngay: 'T5 26/11/2026', chip: 'Tối hôm nhận · khách đã nhận túi', d: 1500 },
    { k: 'cap', e: 'Chăm sóc sau bán qua Zalo', t: 'Khách nhận hàng: AI hỏi túi đeo có ưng không', s: 'Dặn cách giữ túi bền, xin đánh giá trong tin Zalo OA' },
    { k: 'zns', zns: {
        img: 'tui-kem', tieuDe: 'Chị Thảo ơi, túi đeo có ưng không ạ?',
        noiDung: 'Túi Xách Lam Anh cảm ơn chị đã nhận đơn **#LA23112** (Túi đeo chéo màu kem). Chị lau bằng khăn mềm, tránh phơi nắng gắt là túi bền lâu nha!',
        nut: 'Đánh giá sản phẩm',
      }, d: 4200 },
    { k: 'cap', e: 'ZBS · Sản phẩm bán chạy', t: '1 tuần sau: gửi sản phẩm bán chạy qua Zalo', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'T5 03/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['vi', 'khan', 'tote', 'tui-den'], nhan: 'TOP BÁN CHẠY TUẦN NÀY', mau: '#F97316',
        tieuDe: '🔥 Top bán chạy tuần này tại Túi Xách Lam Anh',
        noiDung: '**Ví cầm tay**, **khăn lụa buộc quai** và **túi tote đi làm** đang được khách chọn nhiều nhất tuần qua.',
        nut: 'Xem ngay',
      }, d: 4600 },
    { k: 'cap', e: 'ZBS · Khuyến mãi', t: '1 tuần sau nữa: gửi ưu đãi cho khách cũ', s: 'Kéo khách quay lại mua tiếp, không cần khách nhắn' },
    { k: 'zstamp', gio: '19:30', ngay: 'T5 10/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['ke-tui', 'tui-hong', 'ao-dai', 'kinh'], nhan: 'KHÁCH CŨ · GIẢM 15%',
        tieuDe: 'Ưu đãi riêng cho khách đã mua tại Túi Xách Lam Anh',
        noiDung: 'Bộ sưu tập túi đi làm mùa Tết đang giảm **15%**, freeship. Áp dụng đến hết 20/12/2026.',
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
    tag: { av: 'PT', ten: 'Nguyễn Phương Thảo', sub: 'Messenger · bình luận quảng cáo Túi đeo chéo',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#tuideocheo', 'qt hot'], ['#tuixachnu', 'qt hot'], ['#tuidilam', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#MauKem', 'qt']]]],
      im: 'Khách im từ 14:49, sau khi được xin SĐT, địa chỉ',
      rule: { lb: 'Bám đuổi theo thẻ #tuideocheo', tieuDe: '3 tin ngắn về chiếc túi khách đã chọn',
              dong: [['15 phút', 'Đã giữ túi màu kem cho khách'], ['3 tiếng', 'Gửi ảnh thật túi đựng điện thoại, phối đồ'], ['20 tiếng', 'Chỉ cần SĐT, địa chỉ là lên đơn']] },
      reply: 'Khách gửi SĐT, địa chỉ · dừng bám đuổi' },
    capi: { tieuDe: 'Gửi đơn hàng cho Facebook', event: 'Purchase', nhan: 'SỰ KIỆN MUA HÀNG', giaTri: '390.000đ', pk: 'Purchase · 390.000đ',
      dong: [['Đơn hàng', '#LA23112 · Túi đeo chéo màu kem'], ['Nguồn khách', 'Bình luận quảng cáo Túi đeo chéo → Messenger'], ['Giá trị', '390.000 VND'], ['Event ID', 'LA23112-PURCHASE (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện mua hàng' },
  },
  donHang: {
    ma: '#LA23112', sp: 'Túi đeo chéo da mềm', bien: 'màu kem · x1', img: 'tui-kem', gia: '390.000đ',
    nv: { ten: 'Nhân viên Linh', av: 'NL' },
    ten: 'Nguyễn Phương Thảo', sdt: '0938615207', dc: 'P.1208 tòa B, 12 Nguyễn Văn Bảo, P.4, Gò Vấp, TP.HCM', gio: '11:05 · 24/11/2026',
  },
};
