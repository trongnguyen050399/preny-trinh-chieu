/* Bài 2 (video demo ngang tự chạy): MÁY LỌC NƯỚC, nhóm thương mại điện tử.
   Viết lại 18/11/2026 theo mạch mới người dùng chốt (file mẫu kich-ban-yen-chung-tuoi-tc.js):
   - 1 cảnh duy nhất: quảng cáo máy lọc RO nóng lạnh cho nước giếng, 2 khách bình luận (hỏi giá, hỏi bao lâu thay lõi)
     → trả lời cả 2 "Mình check ib shop nha" → AI nhắn inbox trước: giá + đúng ảnh quảng cáo, hỏi nhà dùng nước máy hay nước giếng
     → anh Phúc: giếng khoan phèn, nhà có 2 con nhỏ (ca khó bài 1) → AI: vòi nóng có khóa an toàn trẻ em; nước phèn nên lắp kèm
       cột lọc đầu nguồn (combo 11.390.000đ, bài 1) → hỏi combo hay riêng máy → khách chọn combo → AI xin SĐT, địa chỉ → khách im
     → gắn thẻ (3 hashtag quảng cáo + #baogia + #ComboCotLoc) → bám đuổi 3 tin 15 phút, 3 tiếng, 20 tiếng (tin 3: giảm 700.000đ
       còn 10.690.000đ, tặng bộ lõi thô như bài 1) → khách gửi SĐT, địa chỉ (ca khó: SĐT thiếu 1 số) → tóm tắt đơn
     → Purchase lên Facebook → đơn tự động, kỹ thuật xác nhận → cảm ơn + 5 món giảm giá → Zalo: hỏi thăm, bán chạy, ưu đãi.
   - Chỉ 1 sản phẩm từ đầu tới cuối (máy RO nóng lạnh, khách chọn bản combo kèm cột lọc đầu nguồn), không có đoạn khách hỏi sản phẩm khác.
   Tên shop, giá, khách, SĐT, địa chỉ: minh họa, dùng lại của bài 1. Ảnh: ảnh Unsplash có sẵn trong máy của bài 1. */
window.VN_KB = {
  ten: 'Máy lọc nước video ngang',
  ketSub: 'Để AI bán máy lọc nước cho shop của bạn',
  shop: { ten: 'Lọc Nước An Tâm', av: 'AT', mau: '#0369A1', sub: 'Thường trả lời ngay' },
  anh: {
    'may-loc': '../assets/img/u/1659346435902-9bd10146b5d9_800x800.jpg',   // máy lọc nước để bàn màu trắng trong bếp sáng
    'bep': '../assets/img/u/1669211659110-3f3db4119b65_800x800.jpg',       // máy lọc trắng lắp cạnh bồn rửa bếp
    'ly-nuoc': '../assets/img/u/1669139470813-827cbcf54b20_800x800.jpg',   // hứng ly nước tại vòi bồn rửa
    'cot-loc': '../assets/img/u/1654220691341-be23a137bd0c_800x800.jpg',   // dãy cột lọc composite đầu nguồn
    'binh-gn': '../assets/img/u/1606342384762-ddf691b59885_800x800.jpg',   // 3 bình giữ nhiệt (xanh, đen, trắng)
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= BÌNH LUẬN QUẢNG CÁO → INBOX (cảnh duy nhất) ================= */
    { k: 'canh', nhan: 'Bình luận quảng cáo → Inbox', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'may-loc', nhan: 'MESSENGER', tieuDe: 'Máy lọc RO nóng lạnh · Lắp miễn phí', nut: 'Gửi tin nhắn',
        text: 'Nước giếng vàng, tanh mùi sắt? 💧 Máy lọc RO nóng lạnh lọc phèn, sắt, vi khuẩn, uống ngay tại vòi. Kiểm tra nước miễn phí tại nhà. #maylocRO #nonglanh #mobile',
      }, d: 1500 },
    { k: 'cap', e: 'Bình luận hỏi giá', t: 'Khách hỏi giá ngay dưới quảng cáo', s: 'Một khách khác hỏi bao lâu phải thay lõi' },
    { k: 'cmt', i: 0, ten: 'Phúc Lê', av: 'PL', text: 'Máy này giá sao shop?' },
    { k: 'cmt', i: 1, ten: 'Quốc Bảo', av: 'QB', text: 'Bao lâu phải thay lõi vậy shop, lắp Hóc Môn được không?' },
    { k: 'cap', e: 'Trả lời cả 2 bình luận', t: 'Trả lời ngắn gọn, mời khách vào inbox', s: 'Tư vấn chi tiết trong tin nhắn riêng' },
    { k: 'rep', i: 0, text: 'Mình check ib shop nha 💬' },
    { k: 'rep', i: 1, text: 'Mình check ib shop nha 💬' },
    { k: 'ms', ref: { loai: 'cmt', img: 'may-loc', dong1: 'Bạn đã bình luận về quảng cáo của Lọc Nước An Tâm', dong2: '"Máy này giá sao shop?"' }, gio: '14:47' },
    { k: 'cap', e: 'AI nhắn trước', t: 'Inbox trước: báo giá, gửi đúng ảnh quảng cáo', s: 'Khách không cần mô tả lại sản phẩm' },
    { k: 'ai', text: 'Dạ chào anh Phúc, máy lọc **RO nóng lạnh** giá **8.490.000đ** ạ, bảo hành 3 năm, lắp đặt miễn phí.' },
    { k: 'ai', img: 'may-loc' },
    { k: 'ai', text: 'Nhà mình dùng **nước máy hay nước giếng** để em tư vấn đúng bộ lọc nha anh?' },

    { k: 'cap', e: 'Khách trả lời', t: 'Giếng phèn, nhà có 2 con nhỏ', s: 'Vòi nóng có khóa an toàn trẻ em' },
    { k: 'kh', text: 'Giếng khoan e, để lâu vàng, tanh mùi sắt. Nhà có 2 đứa nhỏ, nóng lạnh có nguy hiểm k?' },
    { k: 'ai', text: 'Dạ vòi nóng có **khóa an toàn trẻ em**, phải bấm mở khóa mới ra nước nóng nên bé nghịch không bị bỏng ạ.' },
    { k: 'cap', e: 'Hỏi đúng thứ còn thiếu', t: 'Nước phèn: AI hỏi lắp kèm cột lọc không', s: 'Gửi ảnh để khách hình dung nhanh' },
    { k: 'ai', text: 'Nước giếng phèn vào thẳng thì màng RO **nghẹt nhanh** ạ. Anh lắp kèm **cột lọc đầu nguồn** (combo **11.390.000đ**) thì tắm giặt cũng hết vàng.' },
    { k: 'ai', imgs: ['may-loc', 'cot-loc'] },
    { k: 'ai', text: 'Anh lấy **combo** hay riêng máy ạ?' },
    { k: 'kh', text: 'Lấy combo e' },
    { k: 'cap', e: 'Xin thông tin lên đơn', t: 'Chọn xong: AI xin SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ em ghi **combo máy RO nóng lạnh + cột lọc đầu nguồn**, 11.390.000đ. Anh gửi em **SĐT và địa chỉ** lắp đặt để em lên đơn nha.' },

    // Khách im sau khi được xin SĐT, địa chỉ → màn hình phụ: gắn thẻ (3 hashtag quảng cáo + thẻ từ cuộc chat), bám đuổi 3 tin
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Chưa gửi SĐT: Preny tự gắn thẻ khách', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi theo thẻ', t: '3 tin ngắn: 15 phút, 3 tiếng, 20 tiếng', s: 'Chỉ nói về đúng combo khách đã chọn' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Anh Phúc ơi, em đã **giữ lịch lắp combo** cho anh trong tuần này rồi ạ. Anh gửi em SĐT, địa chỉ để kỹ thuật qua đo nước nha 😊' },
    { k: 'p', a: 'r1', d: 900 },
    { k: 'time', nhan: '3 tiếng sau', gio: '17:49', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Em gửi anh ảnh thật combo lắp ở nhà khách dùng nước giếng nha 📸 Máy gọn trên bàn bếp, cột lọc đặt ngoài sân.' },
    { k: 'ai', imgs: ['bep', 'cot-loc', 'ly-nuoc'] },
    { k: 'p', a: 'r2', d: 900 },
    { k: 'time', nhan: '20 tiếng sau', gio: '10:49', ngay: 'T5 19/11/2026', d: 700 },
    { k: 'ai', text: 'Chốt hôm nay em **giảm 700.000đ còn 10.690.000đ**, tặng bộ lõi thô thay lần đầu ạ. Anh chỉ cần gửi **SĐT, địa chỉ** là em lên đơn liền ⚡' },
    { k: 'p', a: 'r3', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 3, khách gửi SĐT, địa chỉ', s: 'AI kiểm tra ngay thông tin khách gửi' },
    { k: 'kh', text: 'Lê Văn Phúc 0977 365 21, ấp 4 xã Củ Chi' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'cap', e: 'Kiểm tra dữ liệu', t: 'SĐT thiếu 1 số → hỏi lại ngay lập tức' },
    { k: 'ai', text: 'Dạ em ghi địa chỉ rồi ạ. SĐT anh gửi mới có **9 số**, anh xem lại giúp em để kỹ thuật gọi trước khi qua lắp nha.' },
    { k: 'kh', text: '0977 365 214 e, gõ thiếu' },
    { k: 'cap', e: 'Chốt đơn', t: 'Tự tổng hợp đơn: combo, quà tặng, SĐT, địa chỉ', s: 'Tổng tiền đã trừ ưu đãi bám đuổi' },
    { k: 'ai', text: 'Dạ anh kiểm tra lại đơn giúp em nha:\n– Combo máy RO nóng lạnh + cột lọc đầu nguồn\n– Tặng bộ lõi thô, lắp đặt miễn phí\n– Tổng: **10.690.000đ** (lắp xong mới trả tiền)\n– Lê Văn Phúc · 0977 365 214\n– Ấp 4, xã Củ Chi, TP.HCM\nAnh xác nhận giúp em đơn này nha.', nut: 'Quản lý đơn hàng', d: 3600 },
    { k: 'cap', e: 'Xong', t: 'Khách chỉ cần nói "Ok em"' },
    { k: 'kh', text: 'Ok em' },
    { k: 'ai', text: 'Dạ em lên đơn, xếp kỹ thuật qua lắp cho anh liền nha ⚡', d: 1300 },

    // Chốt đơn → màn hình phụ: gửi đơn hàng cho Facebook → đơn tự động → kỹ thuật xác nhận
    { k: 'cap', e: 'Gửi đơn về Facebook', t: 'Sự kiện mua hàng gửi ngay lên Facebook', s: 'Quảng cáo tối ưu theo đơn thật' },
    { k: 'panel', v: 'capi', d: 900 },
    { k: 'p', a: 'flow', d: 1500 }, { k: 'p', a: 'event', d: 1300 }, { k: 'p', a: 'ok', d: 2200 },
    { k: 'cap', e: 'Đơn hàng tự động', t: 'Đơn tự lên trên Preny. Shop chỉ việc lắp.' },
    { k: 'panel', v: 'don', d: 900 },
    { k: 'p', a: 'f1', d: 550 }, { k: 'p', a: 'f2', d: 550 }, { k: 'p', a: 'f3', d: 550 }, { k: 'p', a: 'f4', d: 550 },
    { k: 'p', a: 'cho', d: 900 },
    { k: 'cap', e: 'Nhân viên xác nhận', t: 'Báo nhân viên: bấm 1 lần là đơn lên', s: 'Người thật kiểm tra lại trước khi lắp' },
    { k: 'p', a: 'nv', d: 1700 }, { k: 'p', a: 'bam', d: 1100 },
    { k: 'p', a: 'xn', d: 3000 },
    { k: 'panel', v: null, d: 500 },

    // Mua xong: tin cảm ơn kèm 5 món đang giảm giá (deck.afterSale.sp của bài 1)
    { k: 'cap', e: 'Bán thêm sau mua', t: 'Cảm ơn khách, gửi kèm 5 món đang giảm giá', s: 'Khách bấm "Mua ngay" ngay trong Messenger' },
    { k: 'ai', text: 'Dạ cảm ơn anh Phúc nha 💙 Đơn đã được xác nhận, kỹ thuật qua lắp sớm cho anh. Nhà dùng nước giếng hay sắm thêm mấy món này, đang giảm giá ạ:' },
    { k: 'car', sp: [
        { img: 'bep', ten: 'Gói bảo dưỡng tại nhà 2 năm', gia: '1.161.000đ', cu: '1.290.000đ', giam: '-10%' },
        { img: 'binh-gn', ten: 'Bình giữ nhiệt 500ml cho bé', gia: '261.000đ', cu: '290.000đ', giam: '-10%' },
        { img: 'ly-nuoc', ten: 'Xét nghiệm nước giếng tại nhà', gia: '350.000đ', cu: '450.000đ', giam: '-22%' },
        { img: 'cot-loc', ten: 'Cột làm mềm nước, chống cặn', gia: '3.150.000đ', cu: '3.500.000đ', giam: '-10%' },
        { img: 'may-loc', ten: 'Máy RO nóng lạnh tặng ông bà', gia: '7.641.000đ', cu: '8.490.000đ', giam: '-10%' },
      ], d: 5200 },

    // Chăm sóc sau bán qua Zalo
    { k: 'zalo', gio: '19:30', ngay: 'CN 22/11/2026', chip: '3 ngày sau · khách đã lắp máy', d: 1500 },
    { k: 'cap', e: 'Chăm sóc sau bán qua Zalo', t: 'Lắp xong: AI hỏi nước uống có ổn không', s: 'Dặn xả cột lọc, xin đánh giá ngay trong tin Zalo OA' },
    { k: 'zns', zns: {
        img: 'bep', tieuDe: 'Anh Phúc ơi, nước nhà mình uống ổn không ạ?',
        noiDung: 'An Tâm cảm ơn anh đã lắp đơn **#AT40726** (Combo máy RO + cột lọc đầu nguồn). Anh nhớ xả rửa cột lọc **1 tuần/lần** nha. Anh đánh giá giúp shop nhé!',
        nut: 'Đánh giá sản phẩm',
      }, d: 4200 },
    { k: 'cap', e: 'ZBS · Sản phẩm bán chạy', t: '1 tuần sau: gửi sản phẩm bán chạy qua Zalo', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'CN 29/11/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['may-loc', 'cot-loc', 'binh-gn', 'bep'], nhan: 'TOP BÁN CHẠY TUẦN NÀY', mau: '#F97316',
        tieuDe: '🔥 Top bán chạy tuần này tại An Tâm',
        noiDung: 'Máy **RO nóng lạnh**, **cột lọc đầu nguồn** và **bình giữ nhiệt 500ml** đang được khách An Tâm chọn nhiều nhất tuần qua.',
        nut: 'Xem ngay',
      }, d: 4600 },
    { k: 'cap', e: 'ZBS · Khuyến mãi', t: '1 tuần sau nữa: gửi ưu đãi cho khách cũ', s: 'Kéo khách quay lại mua tiếp, không cần khách nhắn' },
    { k: 'zstamp', gio: '19:30', ngay: 'CN 06/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['bep', 'ly-nuoc', 'cot-loc', 'may-loc'], nhan: 'ƯU ĐÃI KHÁCH CŨ · GIẢM 15%',
        tieuDe: 'Ưu đãi riêng cho khách đã lắp máy tại An Tâm',
        noiDung: 'Gói **thay lõi, vệ sinh máy tại nhà** giảm **15%**, đo nước miễn phí. Tặng thêm voucher **ANTAM300** cho đơn từ 1.000.000đ.',
        nut: 'Xem gói',
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
    tag: { av: 'PL', ten: 'Lê Văn Phúc', sub: 'Messenger · bình luận quảng cáo máy RO nóng lạnh',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#maylocRO', 'qt hot'], ['#nonglanh', 'qt hot'], ['#mobile', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#ComboCotLoc', 'qt']]]],
      im: 'Khách im từ 14:49, sau khi được xin SĐT, địa chỉ',
      rule: { lb: 'Bám đuổi theo thẻ #maylocRO', tieuDe: '3 tin ngắn về combo khách đã chọn',
              dong: [['15 phút', 'Đã giữ lịch lắp combo cho khách'], ['3 tiếng', 'Gửi ảnh thật combo lắp ở nhà khách'], ['20 tiếng', 'Chỉ cần SĐT, địa chỉ là lên đơn']] },
      reply: 'Khách gửi SĐT, địa chỉ · dừng bám đuổi' },
    capi: { tieuDe: 'Gửi đơn hàng cho Facebook', event: 'Purchase', nhan: 'SỰ KIỆN MUA HÀNG', giaTri: '10.690.000đ', pk: 'Purchase · 10.690.000đ',
      dong: [['Đơn hàng', '#AT40726 · Combo RO + cột lọc'], ['Nguồn khách', 'Bình luận quảng cáo máy RO nóng lạnh → Messenger'], ['Giá trị', '10.690.000 VND'], ['Event ID', 'AT40726-PURCHASE (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện mua hàng' },
  },
  donHang: {
    ma: '#AT40726', sp: 'Combo máy lọc RO nóng lạnh + cột lọc đầu nguồn', bien: 'Tặng bộ lõi thô thay lần đầu · x1', img: 'may-loc', gia: '10.690.000đ',
    phi: ['Lắp đặt', 'miễn phí'],
    nv: { ten: 'Kỹ thuật Khánh', av: 'KK' },
    ten: 'Lê Văn Phúc', sdt: '0977 365 214', dc: 'Ấp 4, xã Củ Chi, TP.HCM', gio: '11:05 · 19/11/2026',
  },
};
