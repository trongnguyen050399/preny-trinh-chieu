/* Kịch bản video demo NGANG 16:9: ĐÈN TRANG TRÍ NỘI THẤT (nhóm thương mại điện tử), làm 18/11/2026 theo mẫu YaMe (kich-ban-yame.js).
   Nội dung lấy từ bài 1 (demo/kich-ban/den-trang-tri-tc.js):
   - Cảnh 1 lấy deck.binhLuan: đèn tường ngoài trời mẫu mới 450.000đ (giá gốc 520.000đ), chống nước IP65, anh Long treo 2 bên cổng.
   - Cảnh 2 lấy deck.demoDoc (kịch bản 120 giây người dùng gửi, fanpage Nội Thất Ánh Sáng Test): quảng cáo đèn Wabi-Sabi bộ 3
     1.399.000đ → anh Nam hỏi giá → AI báo giá trước, hỏi chỗ lắp → trần thạch cao: không tự cam kết lắp được, hỏi điểm chờ điện
     → gửi ảnh tổng thể, lắp thực tế, chi tiết chóa vải + thông số → khách lấy 1 bộ → xin SĐT, địa chỉ → bám đuổi đúng 3 mốc
     15 phút, 3 tiếng, 20 tiếng (3 tiếng gửi ảnh đèn lắp trên bàn ăn) → tổng COD 1.499.000đ (đã gồm phí giao 100.000đ)
     → khách xác nhận → lên đơn → gửi sự kiện Lead (KHÔNG gửi Purchase khi đơn COD chưa giao, chưa thanh toán, đúng kịch bản 120 giây).
   Ghép vào mạch YaMe: khách hỏi giá → AI gửi đúng ảnh quảng cáo → khách chụp đèn chóa xếp ly "Này thì sao" (690.000đ/chiếc,
   deck.chatbot.anh) → khách im → gắn thẻ, bám đuổi 3 tin → khách quay lại hỏi trần thạch cao → chọn bộ Wabi-Sabi → chốt COD
   → Lead lên Facebook → đơn tự động → cảm ơn + 5 mẫu giảm giá → Zalo: hỏi thăm, bán chạy, hàng mới cho khách cũ.
   Tên fanpage, giá, khách, SĐT, địa chỉ, phí giao: dữ liệu demo của bài 1. Tự đặt thêm: khách cảnh 1 (Phạm Long: SĐT, địa chỉ),
   giá giảm 10% trong carousel cho khách vừa mua. Ảnh: ảnh Unsplash có sẵn trong máy của bài 1. */
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

    /* ================= CẢNH 1 · BÀI VIẾT → BÌNH LUẬN → INBOX ================= */
    { k: 'canh', nhan: 'Tình huống 1 · Bình luận xin giá → Inbox', gio: '20:05' },
    { k: 'fb', post: {
        gio: '5 giờ', img: 'den-tuong', likes: '980', soCmt: '63 bình luận',
        text: 'Đèn tường ngoài trời mẫu mới 💡 Ánh sáng ấm, chống nước IP65, treo cổng hay tường rào đều đẹp. Giao tận nhà, thanh toán COD!',
      }, d: 1600 },
    { k: 'cap', e: 'Bình luận xin giá', t: 'Khách hỏi giá ngay dưới bài viết', s: 'Một khách khác hỏi đèn có chịu mưa không' },
    { k: 'cmt', i: 0, ten: 'Phạm Long', av: 'PL', text: 'Giá sao shop ơi?' },
    { k: 'cmt', i: 1, ten: 'Thu Hà', av: 'TH', text: 'Treo ngoài cổng mưa tạt có sao không shop, tư vấn giúp mình với' },
    { k: 'cap', e: 'Trả lời cả 2 bình luận', t: 'Trả lời ngắn gọn, mời khách vào inbox', s: 'Tư vấn chi tiết trong tin nhắn riêng' },
    { k: 'rep', i: 0, text: 'Mình check ib shop nha 💬' },
    { k: 'rep', i: 1, text: 'Mình check ib shop nha 💬' },

    { k: 'ms', ref: { loai: 'cmt', img: 'den-tuong', dong1: 'Bạn đã bình luận về bài viết của Nội Thất Ánh Sáng Test', dong2: '"Giá sao shop ơi?"' }, gio: '20:07' },
    { k: 'cap', e: 'Tự động báo giá', t: 'Inbox trước: báo giá, gửi ảnh thật', s: 'Viết ngắn gọn, tự nhiên như người bán' },
    { k: 'ai', text: 'Dạ chào anh Long, đèn tường ngoài trời mẫu mới giá **450.000đ/chiếc** ạ (giá gốc 520.000đ).' },
    { k: 'ai', card: { title: 'Đèn tường ngoài trời chống nước IP65 · Ánh sáng ấm, treo cổng, tường rào', gia: '450.000đ', cu: '520.000đ' } },
    { k: 'ai', img: 'den-tuong' },
    { k: 'ai', text: 'Đèn chuẩn **IP65**, mưa tạt không sao ạ. Anh treo **ngoài cổng hay tường rào** để em tư vấn số đèn nha?' },
    { k: 'cap', e: 'Tư vấn số đèn', t: 'Khách trả lời 1 câu, AI chọn đúng số đèn', s: 'Treo 2 bên cổng: lấy 2 chiếc cho cân đối' },
    { k: 'kh', text: 'Anh treo 2 bên cổng em' },
    { k: 'ai', text: 'Dạ 2 bên cổng anh lấy **2 chiếc** là cân đối ạ, tổng **900.000đ**. Anh gửi em **SĐT và địa chỉ** để em lên đơn nha 😊' },
    { k: 'cap', e: 'Chốt đơn', t: 'Xin SĐT, địa chỉ: khách đưa đủ', s: 'AI tóm tắt đơn ngay trong chat' },
    { k: 'kh', text: '0908 152 637, 62 Lê Văn Việt, Tăng Nhơn Phú, Thủ Đức' },
    { k: 'ai', text: 'Dạ em lên đơn cho anh rồi nha:\n– 2 đèn tường ngoài trời IP65\n– **900.000đ**, thanh toán khi nhận hàng\n– 0908 152 637\n– 62 Lê Văn Việt, Tăng Nhơn Phú, Thủ Đức\nShop gọi anh xác nhận rồi giao liền ạ 🎉', d: 3800 },

    /* ================= CẢNH 2 · QUẢNG CÁO → MESSENGER (kịch bản 120 giây: đèn Wabi-Sabi bộ 3, COD) ================= */
    { k: 'canh', nhan: 'Tình huống 2 · Quảng cáo → Messenger', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'bo-3', nhan: 'MESSENGER', tieuDe: 'Đèn Wabi-Sabi bộ 3 · 1.399.000đ', nut: 'Gửi tin nhắn',
        text: 'ĐÈN THẢ WABI-SABI BỘ 3 – phong cách nội thất tối giản 💡 Ánh sáng dịu cho góc bàn ăn. Giao tận nhà, thanh toán khi nhận hàng. #wabisabi #denthabo3 #mobile',
      }, d: 1500 },
    { k: 'cap', e: 'Quảng cáo Facebook', t: 'Khách bấm "Gửi tin nhắn" từ quảng cáo', s: 'Hỏi gì, AI trả lời ngay lập tức' },
    { k: 'tap', d: 1100 },
    { k: 'ms', ref: { loai: 'ad', img: 'bo-3', dong1: 'Nam đã trả lời một quảng cáo', dong2: 'Đèn thả Wabi-Sabi bộ 3' }, gio: '14:47', d: 900 },
    { k: 'kh', text: 'Em ơi, bộ đèn này giá bao nhiêu?' },
    { k: 'cap', e: 'Khách hỏi giá', t: 'AI gửi đúng mẫu trên quảng cáo kèm giá', s: 'Báo giá trước, rồi mới hỏi chỗ lắp' },
    { k: 'ai', text: 'Dạ chào anh Nam, bộ **Wabi-Sabi 3 chóa vải** trên quảng cáo giá **1.399.000đ** anh nhé!' },
    { k: 'ai', img: 'bo-3' },
    { k: 'ai', text: 'Anh định lắp ở **phòng khách hay bàn ăn** ạ?' },
    { k: 'cap', e: 'Không hỏi lại khách', t: 'Khách chụp mẫu khác hỏi "Này thì sao"', s: 'Chỉ một câu cộc lốc, không ghi tên mẫu' },
    { k: 'kh', shot: { img: 'chao-xep-ly', cap: 'Đèn thả chóa vải xếp ly ✨ Ánh sáng dịu, treo bàn ăn dài cực xinh' } },
    { k: 'kh', text: 'Này thì sao' },
    { k: 'cap', e: 'Nhận diện sản phẩm từ ảnh', t: 'Đúng mẫu. Đúng giá. Đúng tồn kho.', s: 'AI đọc ảnh khách gửi, khớp với kho sản phẩm của shop' },
    { k: 'ai', text: 'Dạ đây là **đèn thả chóa vải xếp ly** màu trắng ạ, giá **690.000đ/chiếc**, còn hàng anh nha.' },
    { k: 'ai', card: { title: 'Đèn thả chóa vải xếp ly màu trắng · Treo 2–3 chiếc cho bàn ăn dài', gia: '690.000đ' } },
    { k: 'ai', img: 'chao-xep-ly' },
    { k: 'ai', text: 'Anh cho em biết chỗ lắp để em tư vấn cả 2 mẫu nha.' },

    // Khách im → màn hình phụ: gắn thẻ (3 hashtag của bài quảng cáo + thẻ từ cuộc chat), bám đuổi đúng 3 mốc của kịch bản 120 giây
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Preny tự gắn thẻ đúng mẫu khách quan tâm', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi theo thẻ', t: '3 tin ngắn: 15 phút, 3 tiếng, 20 tiếng', s: 'Chỉ nói về đúng mẫu đèn khách quan tâm' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Anh Nam ơi, bộ đèn **Wabi-Sabi** anh hỏi vẫn còn hàng ạ. Anh lắp phòng khách hay bàn ăn để em tư vấn nha 😊' },
    { k: 'p', a: 'r1', d: 900 },
    { k: 'time', nhan: '3 tiếng sau', gio: '17:49', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Em gửi anh thêm hình đèn lắp trên bàn ăn để mình dễ hình dung nhé 📸' },
    { k: 'ai', img: 'ban-an-2' },
    { k: 'p', a: 'r2', d: 900 },
    { k: 'time', nhan: '20 tiếng sau', gio: '10:49', ngay: 'T5 19/11/2026', d: 700 },
    { k: 'ai', text: 'Bộ **Wabi-Sabi** giao tận nhà, **thanh toán khi nhận hàng** ạ. Anh nhắn em chỗ lắp là em tư vấn liền nha ⚡' },
    { k: 'p', a: 'r3', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 3, khách trả lời để chốt đơn', s: 'Có ca khó: trần thạch cao' },
    { k: 'kh', text: 'Anh lắp bàn ăn. Trần thạch cao có lắp được không em?' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },

    { k: 'cap', e: 'Không cam kết bừa', t: 'Trần thạch cao: hỏi điểm chờ điện trước', s: 'Không tự hứa lắp được khi chưa kiểm tra' },
    { k: 'ai', text: 'Dạ có thể lắp nếu có phương án cố định phù hợp anh nhé. Anh có sẵn **điểm chờ điện** chưa ạ?' },
    { k: 'kh', text: 'Có rồi em.' },
    { k: 'cap', e: 'Tư vấn mẫu', t: 'Gửi ảnh, thông số rồi hỏi khách chọn mẫu', s: 'Tổng thể, lắp thực tế, chi tiết chóa vải' },
    { k: 'ai', text: 'Dạ em gửi anh thêm hình và thông số bộ đèn nhé!' },
    { k: 'ai', imgs: ['bo-3', 'ban-an', 'chi-tiet'] },
    { k: 'ai', checks: { tieuDe: 'Thông số bộ Wabi-Sabi', dong: ['Chóa vải **Ø30 × 40cm**', 'Dây treo **1,2m**, chỉnh được', 'Đui đèn **E27 × 3**', 'Bộ gồm **3 chóa**'] }, d: 2800 },
    { k: 'ai', text: 'Anh lấy bộ **Wabi-Sabi** hay đèn **chóa xếp ly** để em lên đơn nha?' },
    { k: 'kh', text: 'Ừ em, lấy anh một bộ Wabi-Sabi.' },
    { k: 'cap', e: 'Xin thông tin ngay', t: 'Khách đồng ý là xin SĐT, địa chỉ liền' },
    { k: 'ai', text: 'Dạ anh cho em xin **SĐT và địa chỉ** nhận hàng nhé?' },
    { k: 'kh', text: 'Anh Nguyễn Nam, SĐT 0900 000 286.\nGiao 125 Nguyễn Thị Thập, Quận 7, TP.HCM nha em.' },
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
    { k: 'ai', text: 'Dạ cảm ơn anh Nam nha 🎉 Đơn đã được xác nhận, shop giao sớm cho anh. Nhà lắp đèn bàn ăn hay chọn thêm mấy mẫu này cho đồng bộ, đang giảm giá ạ:' },
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
  // Slide tổng kết cuối video: giống hệt YaMe
  tongKet: { tieuDe: 'Quy trình Preny AI giúp', em: 'tăng tỷ lệ chốt đơn', cot: [
    { ten: 'Khách hàng', icon: 'users', dong: ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến'] },
    { ten: 'AI Chatbot', icon: 'bot', dong: ['Phản hồi nhanh tức thì', 'Kêu gọi khách hàng mua hàng', 'Lấy thông tin và chốt đơn'] },
    { ten: 'Bám đuổi', icon: 'bell', dong: ['Gửi 5 tin nhắn trong 7 ngày để bám đuổi khách hàng'] },
    { ten: 'Chốt đơn', icon: 'check', dong: ['Lên đơn', 'Gửi sự kiện mua hàng lên Facebook'] },
    { ten: 'Mua lại', icon: 'refresh', dong: ['Tự động gửi 1 tin nhắn mỗi tuần qua FB và Zalo', 'Sản phẩm bán chạy, giảm giá, sản phẩm mới'] },
  ] },
  panels: {
    tag: { av: 'NN', ten: 'Nguyễn Nam', sub: 'Messenger · từ quảng cáo đèn Wabi-Sabi bộ 3',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#wabisabi', 'qt hot'], ['#denthabo3', 'qt hot'], ['#mobile', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#DenXepLy', 'qt']]]],
      im: 'Khách im từ 14:49, sau khi được báo giá',
      rule: { lb: 'Bám đuổi theo thẻ #wabisabi', tieuDe: '3 tin ngắn về đèn Wabi-Sabi bộ 3',
              dong: [['15 phút', 'Nhắc bộ đèn còn hàng'], ['3 tiếng', 'Gửi ảnh đèn lắp bàn ăn'], ['20 tiếng', 'Nhắc giao tận nhà, COD']] },
      reply: 'Khách trả lời "Anh lắp bàn ăn…" · dừng bám đuổi' },
    // Kịch bản 120 giây: đơn COD chưa giao thì chỉ gửi Lead, không gửi Purchase
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
