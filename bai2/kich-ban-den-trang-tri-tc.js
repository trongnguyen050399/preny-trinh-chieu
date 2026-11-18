/* Bài 2 (video demo ngang tự chạy): ĐÈN TRANG TRÍ NỘI THẤT, nhóm thương mại điện tử.
   Viết lại 18/11/2026 theo mạch mới người dùng chốt (file mẫu kich-ban-yen-chung-tuoi-tc.js), nội dung theo kịch bản 120 giây
   người dùng gửi (bài 1 demo/kich-ban/den-trang-tri-tc.js, fanpage Nội Thất Ánh Sáng Test, đèn Wabi-Sabi bộ 3):
   - 1 cảnh duy nhất: quảng cáo đèn Wabi-Sabi bộ 3 1.399.000đ, 2 khách bình luận (hỏi giá, hỏi ship Bình Dương)
     → trả lời cả 2 "Mình check ib shop nha" → AI nhắn inbox trước: giá + đúng ảnh quảng cáo, hỏi lắp phòng khách hay bàn ăn
     → anh Nam: lắp bàn ăn, trần thạch cao (ca khó) → AI không tự cam kết lắp được, hỏi điểm chờ điện → gửi ảnh tổng thể,
       lắp thực tế, chi tiết chóa vải + thông số → khách lấy 1 bộ → AI xin SĐT, địa chỉ → khách im
     → gắn thẻ (3 hashtag quảng cáo + #baogia + #LapBanAn) → bám đuổi đúng 3 mốc 15 phút, 3 tiếng, 20 tiếng
       (3 tiếng gửi ảnh đèn lắp trên bàn ăn) → khách gửi SĐT, địa chỉ (ca khó: SĐT dư 1 số) → tổng COD 1.499.000đ
       (đã gồm phí giao 100.000đ) → gửi sự kiện Lead (KHÔNG gửi Purchase khi đơn COD chưa giao, chưa thanh toán, đúng kịch bản 120 giây)
     → đơn tự động, nhân viên xác nhận → cảm ơn + 5 mẫu giảm giá → Zalo: hỏi thăm, bán chạy, hàng mới cho khách cũ.
   - Chỉ 1 sản phẩm từ đầu tới cuối (đèn Wabi-Sabi bộ 3), không có đoạn khách hỏi sản phẩm khác.
   Tên fanpage, giá, khách, SĐT, địa chỉ, phí giao: dữ liệu demo của bài 1. Giá giảm 10% trong carousel: tự đặt.
   Ảnh: ảnh Unsplash có sẵn trong máy của bài 1. */
window.VN_KB = {
  ten: 'Đèn trang trí nội thất video ngang',
  ketSub: 'Để AI bán đèn trang trí cho shop của bạn',
  shop: { ten: 'Nội Thất Ánh Sáng Test', av: 'AS', mau: '#B45309', sub: 'Thường trả lời ngay' },
  anh: {
    'bo-3': '../assets/img/u/1652067660507-bf311b58b9e8_800x800.jpg',         // bộ 3 đèn thả chóa vải
    'chi-tiet': '../assets/img/u/1728839505740-909e90654846_800x800.jpg',     // chi tiết chóa vải
    'ban-an': '../assets/img/u/1761658652336-95d31ce1d806_800x800.jpg',       // đèn thả trên bàn ăn
    'ban-an-2': '../assets/img/u/1593136596203-7212b076f4d2_800x800.jpg',     // phòng ăn có đèn thả
    'chao-xep-ly': '../assets/img/u/1616248249569-0f31805d74dd_800x800.jpg',  // đèn thả chóa vải xếp ly trắng
    'chao-may': '../assets/img/u/1578678809569-1a8ead9cb802_800x800.jpg',     // đèn thả chóa mây
    'den-tuong': '../assets/img/u/1759390304641-9490a433c34b_800x800.jpg',    // đèn tường ngoài trời
    'den-hat': '../assets/img/u/1759722127805-39a77d665cb9_800x800.jpg',      // đèn hắt tường LED
    'den-dung': '../assets/img/u/1769146108350-8e99eea80bc1_800x800.jpg',     // đèn cây đứng chóa vải
    'chum-bi': '../assets/img/u/1656403002413-2ac6137237d6_800x800.jpg',      // đèn chùm bi thủy tinh trên bàn ăn
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= BÌNH LUẬN QUẢNG CÁO → INBOX (cảnh duy nhất) ================= */
    { k: 'canh', nhan: 'Bình luận quảng cáo → Inbox', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'bo-3', nhan: 'MESSENGER', tieuDe: 'Đèn Wabi-Sabi bộ 3 · 1.399.000đ', nut: 'Gửi tin nhắn',
        text: 'ĐÈN THẢ WABI-SABI BỘ 3 – phong cách nội thất tối giản 💡 Ánh sáng dịu cho góc bàn ăn. Giao tận nhà, thanh toán khi nhận hàng. #wabisabi #denthabo3 #mobile',
      }, d: 1500 },
    { k: 'cap', e: 'Bình luận hỏi giá', t: 'Khách hỏi giá ngay dưới quảng cáo', s: 'Một khách khác hỏi có ship tỉnh không' },
    { k: 'cmt', i: 0, ten: 'Nguyễn Nam', av: 'NN', text: 'Em ơi, bộ đèn này giá bao nhiêu?' },
    { k: 'cmt', i: 1, ten: 'Thu Hà', av: 'TH', text: 'Ship Bình Dương được không shop?' },
    { k: 'cap', e: 'Trả lời cả 2 bình luận', t: 'Trả lời ngắn gọn, mời khách vào inbox', s: 'Tư vấn chi tiết trong tin nhắn riêng' },
    { k: 'rep', i: 0, text: 'Mình check ib shop nha 💬' },
    { k: 'rep', i: 1, text: 'Mình check ib shop nha 💬' },
    { k: 'ms', ref: { loai: 'cmt', img: 'bo-3', dong1: 'Bạn đã bình luận về quảng cáo của Nội Thất Ánh Sáng Test', dong2: '"Em ơi, bộ đèn này giá bao nhiêu?"' }, gio: '14:47' },
    { k: 'cap', e: 'AI nhắn trước', t: 'Inbox trước: báo giá, gửi đúng ảnh quảng cáo', s: 'Báo giá trước, rồi mới hỏi chỗ lắp' },
    { k: 'ai', text: 'Dạ chào anh Nam, bộ **Wabi-Sabi 3 chóa vải** giá **1.399.000đ** anh nhé!' },
    { k: 'ai', img: 'bo-3' },
    { k: 'ai', text: 'Anh định lắp ở **phòng khách hay bàn ăn** ạ?' },

    { k: 'cap', e: 'Khách trả lời', t: 'Lắp bàn ăn, hỏi trần thạch cao', s: 'Không tự hứa lắp được khi chưa kiểm tra' },
    { k: 'kh', text: 'Anh lắp bàn ăn. Trần thạch cao có lắp được không em?' },
    { k: 'ai', text: 'Dạ có thể lắp nếu có phương án cố định phù hợp anh nhé. Anh có sẵn **điểm chờ điện** chưa ạ?' },
    { k: 'kh', text: 'Có rồi em.' },
    { k: 'cap', e: 'Gửi ảnh, thông số', t: 'Tổng thể, lắp thực tế, chi tiết chóa vải', s: 'Rồi hỏi khách lấy luôn không' },
    { k: 'ai', text: 'Dạ em gửi anh thêm hình và thông số bộ đèn nhé!' },
    { k: 'ai', imgs: ['bo-3', 'ban-an', 'chi-tiet'] },
    { k: 'ai', checks: { tieuDe: 'Thông số bộ Wabi-Sabi', dong: ['Chóa vải **Ø30 × 40cm**', 'Dây treo **1,2m**, chỉnh được', 'Đui đèn **E27 × 3**', 'Bộ gồm **3 chóa**'] }, d: 2800 },
    { k: 'ai', text: 'Anh muốn lấy **một bộ** này luôn không ạ?' },
    { k: 'kh', text: 'Ừ em, lấy anh một bộ.' },
    { k: 'cap', e: 'Xin thông tin lên đơn', t: 'Khách đồng ý: AI xin SĐT, địa chỉ liền' },
    { k: 'ai', text: 'Dạ em ghi **1 bộ Wabi-Sabi** lắp bàn ăn, 1.399.000đ. Anh cho em xin **SĐT và địa chỉ** nhận hàng nhé?' },

    // Khách im sau khi được xin SĐT, địa chỉ → màn hình phụ: gắn thẻ (3 hashtag quảng cáo + thẻ từ cuộc chat), bám đuổi đúng 3 mốc
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Chưa gửi SĐT: Preny tự gắn thẻ khách', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi theo thẻ', t: '3 tin ngắn: 15 phút, 3 tiếng, 20 tiếng', s: 'Chỉ nói về đúng bộ đèn khách đã chọn' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Anh Nam ơi, em đang **giữ 1 bộ Wabi-Sabi** anh vừa chọn ạ. Anh gửi em SĐT, địa chỉ để em lên đơn nha 😊' },
    { k: 'p', a: 'r1', d: 900 },
    { k: 'time', nhan: '3 tiếng sau', gio: '17:49', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Em gửi anh thêm hình đèn lắp trên bàn ăn để mình dễ hình dung nhé 📸' },
    { k: 'ai', imgs: ['ban-an-2', 'ban-an'] },
    { k: 'p', a: 'r2', d: 900 },
    { k: 'time', nhan: '20 tiếng sau', gio: '10:49', ngay: 'T5 19/11/2026', d: 700 },
    { k: 'ai', text: 'Anh chỉ cần gửi **SĐT và địa chỉ** nhận hàng là em lên đơn liền, giao tận nhà, **thanh toán khi nhận hàng** ạ ⚡' },
    { k: 'p', a: 'r3', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 3, khách gửi SĐT, địa chỉ', s: 'AI kiểm tra ngay thông tin khách gửi' },
    { k: 'kh', text: 'Nguyễn Nam, 0900 000 2866.\nGiao 125 Nguyễn Thị Thập, Quận 7, TP.HCM nha em.' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'cap', e: 'Kiểm tra dữ liệu', t: 'SĐT dư 1 số → hỏi lại ngay lập tức' },
    { k: 'ai', text: 'Dạ em ghi địa chỉ rồi ạ. SĐT anh gửi có **11 số**, anh xem lại giúp em để shipper gọi được nha.' },
    { k: 'kh', text: '0900 000 286 em, gõ dư 1 số.' },
    { k: 'cap', e: 'Chốt đơn COD', t: 'Báo tổng COD đã gồm phí giao, chờ xác nhận', s: 'Tự tổng hợp: mẫu, số lượng, SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ anh kiểm tra lại đơn giúp em nha:\n– Đèn Wabi-Sabi bộ 3 chóa vải, 1 bộ\n– Phí giao: 100.000đ\n– Tổng COD: **1.499.000đ**\n– Nguyễn Nam · 0900 000 286\n– 125 Nguyễn Thị Thập, Quận 7, TP.HCM\nAnh xác nhận em lên đơn nhé?', nut: 'Quản lý đơn hàng', d: 3600 },
    { k: 'cap', e: 'Xong', t: 'Khách chỉ cần nói "Ok em"' },
    { k: 'kh', text: 'Ok em, lên đơn giúp anh.' },
    { k: 'ai', text: 'Dạ em đã tiếp nhận đơn rồi anh nhé ⚡', d: 1300 },

    // Chốt đơn COD → màn hình phụ: gửi sự kiện Lead cho Facebook (chưa gửi Purchase khi đơn COD chưa giao) → đơn tự động
    { k: 'cap', e: 'Gửi Lead về Facebook', t: 'Khách xác nhận COD: gửi sự kiện Lead', s: 'Purchase chỉ gửi khi đơn đã giao, đã thanh toán' },
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

    // Mua xong: tin cảm ơn kèm 5 mẫu đang giảm giá (deck.afterSale.sp của bài 1)
    { k: 'cap', e: 'Bán thêm sau mua', t: 'Cảm ơn khách, gửi kèm 5 mẫu đang giảm giá', s: 'Khách bấm "Mua ngay" ngay trong Messenger' },
    { k: 'ai', text: 'Dạ cảm ơn anh Nam nha 💡 Đơn đã được xác nhận, shop giao sớm cho anh. Nhà lắp đèn bàn ăn hay chọn thêm mấy mẫu này cho đồng bộ, đang giảm giá ạ:' },
    { k: 'car', sp: [
        { img: 'den-dung', ten: 'Đèn cây đứng chóa vải', gia: '1.071.000đ', cu: '1.190.000đ', giam: '-10%' },
        { img: 'chao-xep-ly', ten: 'Đèn thả chóa xếp ly', gia: '621.000đ', cu: '690.000đ', giam: '-10%' },
        { img: 'den-tuong', ten: 'Đèn tường ngoài trời IP65', gia: '450.000đ', cu: '520.000đ', giam: '-13%' },
        { img: 'den-hat', ten: 'Đèn hắt tường LED', gia: '261.000đ', cu: '290.000đ', giam: '-10%' },
        { img: 'chum-bi', ten: 'Đèn chùm bi thủy tinh', gia: '2.241.000đ', cu: '2.490.000đ', giam: '-10%' },
      ], d: 5200 },

    // Chăm sóc sau bán qua Zalo
    { k: 'zalo', gio: '19:30', ngay: 'CN 22/11/2026', chip: '3 ngày sau · khách đã nhận hàng', d: 1500 },
    { k: 'cap', e: 'Chăm sóc sau bán qua Zalo', t: 'Khách nhận đèn: AI hỏi lắp lên có ổn không', s: 'Xin đánh giá ngay trong tin Zalo OA của shop' },
    { k: 'zns', zns: {
        img: 'bo-3', tieuDe: 'Anh Nam ơi, bộ đèn lắp lên ổn không ạ?',
        noiDung: 'Nội Thất Ánh Sáng cảm ơn anh đã nhận đơn **#AS11286** (Đèn Wabi-Sabi bộ 3). Anh dùng thấy ổn không, đánh giá giúp shop nha!',
        nut: 'Đánh giá sản phẩm',
      }, d: 4200 },
    { k: 'cap', e: 'ZBS · Sản phẩm bán chạy', t: '1 tuần sau: gửi mẫu bán chạy qua Zalo', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'CN 29/11/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['bo-3', 'chao-xep-ly', 'den-dung', 'chum-bi'], nhan: 'TOP BÁN CHẠY TUẦN NÀY', mau: '#F97316',
        tieuDe: '🔥 Top bán chạy tuần này tại Ánh Sáng',
        noiDung: 'Đèn **Wabi-Sabi bộ 3**, đèn thả **chóa xếp ly** và **đèn cây đứng chóa vải** đang được khách chọn nhiều nhất tuần qua.',
        nut: 'Xem ngay',
      }, d: 4600 },
    { k: 'cap', e: 'ZBS · Khuyến mãi', t: '1 tuần sau nữa: gửi ưu đãi cho khách cũ', s: 'Kéo khách quay lại mua tiếp, không cần khách nhắn' },
    { k: 'zstamp', gio: '19:30', ngay: 'CN 06/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['den-tuong', 'den-hat', 'chao-may', 'den-dung'], nhan: 'HÀNG MỚI VỀ · KHÁCH CŨ GIẢM 10%',
        tieuDe: 'Ưu đãi riêng cho khách đã mua tại Ánh Sáng',
        noiDung: 'Đèn tường ngoài trời chống nước mới về, khách cũ giảm **10%**. Tặng thêm voucher **ANHSANG100** cho đơn từ 1.000.000đ.',
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
    { ten: 'Chốt đơn', icon: 'check', dong: ['Lên đơn', 'Gửi sự kiện khách tiềm năng (Lead) lên Facebook'] },
    { ten: 'Mua lại', icon: 'refresh', dong: ['Tự động gửi 1 tin nhắn mỗi tuần qua FB và Zalo', 'Sản phẩm bán chạy, giảm giá, sản phẩm mới'] },
  ] },
  panels: {
    tag: { av: 'NN', ten: 'Nguyễn Nam', sub: 'Messenger · bình luận quảng cáo đèn Wabi-Sabi bộ 3',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#wabisabi', 'qt hot'], ['#denthabo3', 'qt hot'], ['#mobile', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#LapBanAn', 'qt']]]],
      im: 'Khách im từ 14:49, sau khi được xin SĐT, địa chỉ',
      rule: { lb: 'Bám đuổi theo thẻ #wabisabi', tieuDe: '3 tin ngắn về bộ đèn khách đã chọn',
              dong: [['15 phút', 'Đã giữ 1 bộ Wabi-Sabi cho khách'], ['3 tiếng', 'Gửi ảnh thật đèn lắp bàn ăn'], ['20 tiếng', 'Chỉ cần SĐT, địa chỉ là lên đơn']] },
      reply: 'Khách gửi SĐT, địa chỉ · dừng bám đuổi' },
    // Kịch bản 120 giây: đơn COD chưa giao thì chỉ gửi Lead, không gửi Purchase (giữ nguyên như bản trước)
    capi: { tieuDe: 'Gửi khách tiềm năng cho Facebook', event: 'Lead', nhan: 'SỰ KIỆN KHÁCH TIỀM NĂNG', giaTri: 'Đơn COD', pk: 'Lead · khách xác nhận đơn COD',
      dong: [['Event ID', 'LIGHTING-COD-LEAD-001'], ['Nguồn khách', 'Facebook Ads → Messenger'], ['SĐT', 'Đã thu thập trong Preny'], ['Trạng thái', 'Khách đã xác nhận đơn COD']],
      ok: 'Facebook đã nhận sự kiện Lead', khong: 'Không gửi Purchase khi đơn COD chưa giao và chưa thanh toán thành công.' },
  },
  donHang: {
    ma: '#AS11286', sp: 'Đèn Wabi-Sabi bộ 3 chóa vải', bien: '1 bộ · 3 chóa · x1', img: 'bo-3', gia: '1.399.000đ',
    phi: ['Phí giao', '100.000đ'], tong: '1.499.000đ (COD)',
    nv: { ten: 'Nhân viên Hưng', av: 'NH' },
    ten: 'Nguyễn Nam', sdt: '0900 000 286', dc: '125 Nguyễn Thị Thập, Quận 7, TP.HCM', gio: '11:05 · 19/11/2026',
  },
};
