/* Bài 2 (video demo ngang tự chạy): NỘI THẤT GIA ĐÌNH (gương, bàn ghế, tủ), nhóm thương mại điện tử. Làm 23/11/2026 theo file mẫu Yến chưng tươi:
   - 1 cảnh duy nhất: bài quảng cáo gương đứng, 2 khách bình luận (giá, có size lớn không) → trả lời cả 2 "Mình check ib shop nha"
     → AI nhắn inbox trước: giá + đúng ảnh quảng cáo, hỏi 1 điều (phòng rộng bao nhiêu) → khách: phòng ngủ 12m², sợ méo hình, sợ vỡ khi ship
     → AI: kính tráng bạc 5 ly không méo, đóng gói 5 lớp, vỡ khi giao đổi mới, phòng nhỏ hợp 50x160 → hỏi 50x160 hay 60x180 → khách chọn 50x160
     → AI xin SĐT + địa chỉ → khách im → gắn thẻ (3 hashtag quảng cáo + #baogia + size khách chọn) → bám đuổi 3 tin 15 phút, 3 tiếng, 20 tiếng
     → ca khó: khách gửi địa chỉ chung cư thiếu tòa, tầng, căn → AI hỏi lại → tóm tắt đơn → Purchase lên Facebook → đơn tự động, nhân viên xác nhận
     → cảm ơn + 5 sản phẩm giảm giá → Zalo: hỏi thăm, bán chạy, khuyến mãi → tổng kết → logo.
   - Chỉ 1 sản phẩm từ đầu tới cuối (gương đứng khung đen 50x160cm). Tên shop, giá, kích thước, khách, SĐT, địa chỉ: minh họa.
     Ảnh: Unsplash dùng chung với bài 1. */
window.VN_KB = {
  ten: 'Nội thất gia đình video ngang',
  ketSub: 'Để AI tư vấn đúng size, bám đuổi và lên đơn nội thất cho shop của bạn',
  shop: { ten: 'Nội Thất Mộc An', av: 'MA', mau: '#92400E', sub: 'Thường trả lời ngay' },
  anh: {
    'guong-den': '../assets/img/u/1718894070147-0c1e1921da93_800x800.jpg',
    'guong-den-2': '../assets/img/u/1718894070052-c7ec7c536ac1_800x800.jpg',
    'guong-go': '../assets/img/u/1660324407967-572d05e41def_800x800.jpg',
    'guong-tron': '../assets/img/u/1774428571582-9bd41e95a6ca_800x800.jpg',
    'ban-tra': '../assets/img/u/1581428982868-e410dd047a90_800x800.jpg',
    'ban-tra-kinh': '../assets/img/u/1647967527216-adea2f078e07_800x800.jpg',
    'ban-go': '../assets/img/u/1777513538143-8525eb3943f6_800x800.jpg',
    'tu-ao': '../assets/img/u/1784651859318-d9300849bf34_800x800.jpg',
    'tu-ao-2': '../assets/img/u/1784651858840-0f077fad4e1e_800x800.jpg',
    'ghe-den': '../assets/img/u/1592078615290-033ee584e267_800x800.jpg',
    'ghe-go': '../assets/img/u/1699588772787-1eed3b726e0a_800x800.jpg',
    'ghe-don': '../assets/img/u/1634798245965-03669c757183_800x800.jpg',
    'phong-ngu': '../assets/img/u/1784653549328-40d0f1d11376_800x800.jpg',
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= BÌNH LUẬN QUẢNG CÁO → INBOX (cảnh duy nhất) ================= */
    { k: 'canh', nhan: 'Bình luận quảng cáo → Inbox', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'guong-den', nhan: 'MESSENGER', tieuDe: 'Gương đứng toàn thân · khung nhôm đen', nut: 'Gửi tin nhắn',
        text: 'GƯƠNG ĐỨNG TOÀN THÂN 🪞 Khung nhôm sơn tĩnh điện đen, kính tráng bạc 5 ly soi không méo. Size 50x160cm chỉ 790K. Đóng gói 5 lớp, vỡ khi giao đổi mới, giao nội thành 1–2 ngày. #guongdung #noithat #guongtoanthan',
      }, d: 1500 },
    { k: 'cap', e: 'Bình luận hỏi giá', t: 'Khách hỏi giá ngay dưới quảng cáo', s: 'Một khách khác hỏi có size lớn hơn không' },
    { k: 'cmt', i: 0, ten: 'Ngọc Quỳnh', av: 'NQ', text: 'Gương này giá sao shop?' },
    { k: 'cmt', i: 1, ten: 'Minh Châu', av: 'MC', text: 'Có size 60x180 ko shop?' },
    { k: 'cap', e: 'Trả lời cả 2 bình luận', t: 'Trả lời ngắn gọn, mời khách vào inbox', s: 'Tư vấn chi tiết trong tin nhắn riêng' },
    { k: 'rep', i: 0, text: 'Mình check ib shop nha 💬' },
    { k: 'rep', i: 1, text: 'Mình check ib shop nha 💬' },
    { k: 'ms', ref: { loai: 'cmt', img: 'guong-den', dong1: 'Bạn đã bình luận về quảng cáo của Nội Thất Mộc An', dong2: '"Gương này giá sao shop?"' }, gio: '14:47' },
    { k: 'cap', e: 'AI nhắn trước', t: 'Inbox trước: báo giá, gửi đúng ảnh quảng cáo', s: 'Khách không cần mô tả lại sản phẩm' },
    { k: 'ai', text: 'Dạ chào chị Quỳnh, gương đứng toàn thân khung nhôm đen size **50x160cm** bên em giá **790.000đ** ạ, giao nội thành 1–2 ngày.' },
    { k: 'ai', img: 'guong-den' },
    { k: 'ai', text: 'Chị định đặt gương ở **phòng nào, rộng khoảng bao nhiêu** ạ, để em tư vấn size cho vừa nha?' },

    { k: 'cap', e: 'Khách hỏi nỗi lo', t: 'Phòng nhỏ, sợ méo hình, sợ vỡ khi ship', s: 'AI trả lời đúng từng nỗi lo' },
    { k: 'kh', text: 'phòng ngủ c 12m2 thôi. gương soi có méo ko, ship có bể ko e' },
    { k: 'ai', text: 'Dạ kính **tráng bạc 5 ly**, soi toàn thân **không méo** ạ. Gương đóng gói **5 lớp** (xốp, góc chống va, thùng carton), lỡ vỡ khi giao em **đổi mới** ngay cho chị.' },
    { k: 'cap', e: 'Gợi ý đúng size', t: 'Phòng 12m²: AI gợi ý 50x160, hỏi chị chọn size nào', s: 'Gửi ảnh thật để khách hình dung' },
    { k: 'ai', text: 'Phòng 12m² chị lấy **50x160cm** là vừa, không chiếm chỗ ạ. Nếu muốn soi rõ cả chân thì có **60x180cm, 950.000đ**. Chị chọn size nào ạ?' },
    { k: 'ai', imgs: ['guong-den', 'guong-den-2'] },
    { k: 'kh', text: '50x160 đi e' },
    { k: 'cap', e: 'Xin thông tin lên đơn', t: 'Chọn xong: AI xin SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ em ghi **1 gương đứng khung đen 50x160cm**, 790.000đ, freeship nội thành. Chị gửi em **SĐT và địa chỉ** để em lên đơn nha.' },

    // Khách im sau khi được xin SĐT, địa chỉ → màn hình phụ: gắn thẻ (3 hashtag quảng cáo + thẻ từ cuộc chat), bám đuổi 3 tin
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Chưa gửi SĐT: Preny tự gắn thẻ khách', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi theo thẻ', t: '3 tin ngắn: 15 phút, 3 tiếng, 20 tiếng', s: 'Chỉ nói về đúng chiếc gương khách đã chọn' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T2 23/11/2026', d: 700 },
    { k: 'ai', text: 'Chị Quỳnh ơi, em giữ cho chị **gương đứng khung đen 50x160cm** rồi ạ. Chị gửi em SĐT, địa chỉ để em giao kịp ngày mai nha 😊' },
    { k: 'p', a: 'r1', d: 900 },
    { k: 'time', nhan: '3 tiếng sau', gio: '17:49', ngay: 'T2 23/11/2026', d: 700 },
    { k: 'ai', text: 'Em gửi chị ảnh thật gương bên em đặt trong phòng ngủ khách nha 🪞 Soi toàn thân nét, không méo, khung đen hợp mọi kiểu phòng.' },
    { k: 'ai', imgs: ['guong-den-2', 'guong-den', 'phong-ngu'] },
    { k: 'p', a: 'r2', d: 900 },
    { k: 'time', nhan: '20 tiếng sau', gio: '10:49', ngay: 'T3 24/11/2026', d: 700 },
    { k: 'ai', text: 'Chị chỉ cần gửi **SĐT và địa chỉ** là em lên đơn liền, tặng **bộ chặn chân chống trượt**, freeship nội thành ạ ⚡' },
    { k: 'p', a: 'r3', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 3, khách gửi SĐT, địa chỉ', s: 'AI kiểm tra ngay thông tin khách gửi' },
    { k: 'kh', text: 'Quỳnh 0909361528, chung cư 45 phạm văn đồng bình thạnh nha' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'cap', e: 'Ca khó: địa chỉ thiếu', t: 'Chung cư thiếu tòa, tầng, căn', s: 'AI hỏi lại, kèm hỏi thang máy vì gương cao 1m6' },
    { k: 'ai', text: 'Dạ chị cho em xin thêm **tòa, tầng và số căn** ạ. Gương cao 1m6, em hỏi luôn tòa mình có **thang máy** không để bên giao hàng chuẩn bị nha.' },
    { k: 'kh', text: 'căn 1206 tòa B2, có thang máy e' },
    { k: 'cap', e: 'Chốt đơn', t: 'Tự tổng hợp đơn: size, quà tặng, SĐT, địa chỉ đủ tòa, căn' },
    { k: 'ai', text: 'Dạ chị kiểm tra lại đơn giúp em nha:\n– Gương đứng khung nhôm đen 50x160cm\n– Tặng 1 bộ chặn chân chống trượt\n– Tổng: **790.000đ** (freeship nội thành)\n– Người nhận: Quỳnh · 0909361528\n– Căn 1206 tòa B2, 45 Phạm Văn Đồng, Bình Thạnh\nChị xác nhận giúp em đơn này nha.', nut: 'Quản lý đơn hàng', d: 3400 },
    { k: 'cap', e: 'Xong', t: 'Khách chỉ cần nói "Ok e"' },
    { k: 'kh', text: 'Ok e' },
    { k: 'ai', text: 'Dạ em lên đơn, giao cho chị trong ngày mai nha ⚡', d: 1300 },

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
    { k: 'ai', text: 'Dạ cảm ơn chị Quỳnh nha 💛 Đơn đã được xác nhận, shop giao cho chị ngày mai. Shop đang giảm giá mấy món khách hay chọn thêm cho phòng ngủ, chị xem thử nha:' },
    { k: 'car', sp: [
        { img: 'ghe-don', ten: 'Ghế đôn gỗ cao su', gia: '261.000đ', cu: '290.000đ', giam: '-10%' },
        { img: 'guong-tron', ten: 'Gương tròn bàn trang điểm', gia: '315.000đ', cu: '350.000đ', giam: '-10%' },
        { img: 'ban-tra', ten: 'Bàn trà gỗ chân sắt', gia: '1.290.000đ', cu: '1.490.000đ', giam: '-13%' },
        { img: 'ghe-go', ten: 'Ghế gỗ tựa lưng', gia: '441.000đ', cu: '490.000đ', giam: '-10%' },
        { img: 'tu-ao', ten: 'Tủ quần áo 4 cánh', gia: '3.140.000đ', cu: '3.490.000đ', giam: '-10%' },
      ], d: 5200 },

    // Chăm sóc sau bán qua Zalo
    { k: 'zalo', gio: '19:30', ngay: 'T6 27/11/2026', chip: '2 ngày sau khi nhận · khách đã dùng gương', d: 1500 },
    { k: 'cap', e: 'Chăm sóc sau bán qua Zalo', t: 'Khách nhận hàng: AI hỏi gương dùng ổn không', s: 'Dặn cách lau kính, xin đánh giá trong tin Zalo OA' },
    { k: 'zns', zns: {
        img: 'guong-den', tieuDe: 'Chị Quỳnh ơi, gương dùng ổn không ạ?',
        noiDung: 'Nội Thất Mộc An cảm ơn chị đã nhận đơn **#MA23119** (Gương đứng khung đen 50x160cm). Chị lau kính bằng khăn mềm khô, không dùng nước tẩy mạnh là gương sáng bền lâu nha!',
        nut: 'Đánh giá sản phẩm',
      }, d: 4200 },
    { k: 'cap', e: 'ZBS · Sản phẩm bán chạy', t: '1 tuần sau: gửi sản phẩm bán chạy qua Zalo', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'T6 04/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['ban-go', 'tu-ao-2', 'guong-go', 'ghe-den'], nhan: 'TOP BÁN CHẠY TUẦN NÀY', mau: '#F97316',
        tieuDe: '🔥 Top bán chạy tuần này tại Nội Thất Mộc An',
        noiDung: '**Bàn trà gỗ nguyên tấm**, **tủ quần áo 5 cánh** và **gương khung gỗ** đang được khách chọn nhiều nhất tuần qua.',
        nut: 'Xem ngay',
      }, d: 4600 },
    { k: 'cap', e: 'ZBS · Khuyến mãi', t: '1 tuần sau nữa: gửi ưu đãi cho khách cũ', s: 'Kéo khách quay lại mua tiếp, không cần khách nhắn' },
    { k: 'zstamp', gio: '19:30', ngay: 'T6 11/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['tu-ao', 'ban-tra-kinh', 'ghe-go', 'guong-tron'], nhan: 'KHÁCH CŨ · GIẢM 10%',
        tieuDe: 'Ưu đãi riêng cho khách đã mua tại Mộc An',
        noiDung: 'Tủ quần áo, bàn trà, ghế gỗ đang giảm **10%**, giao lắp miễn phí nội thành. Áp dụng đến hết 20/12/2026.',
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
    tag: { av: 'NQ', ten: 'Trần Ngọc Quỳnh', sub: 'Messenger · bình luận quảng cáo Gương đứng toàn thân',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#guongdung', 'qt hot'], ['#noithat', 'qt hot'], ['#guongtoanthan', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#Size50x160', 'qt']]]],
      im: 'Khách im từ 14:51, sau khi được xin SĐT, địa chỉ',
      rule: { lb: 'Bám đuổi theo thẻ #guongdung', tieuDe: '3 tin ngắn về đúng chiếc gương khách đã chọn',
              dong: [['15 phút', 'Đã giữ gương 50x160 khung đen'], ['3 tiếng', 'Gửi ảnh thật gương trong phòng'], ['20 tiếng', 'Chỉ cần SĐT, địa chỉ là lên đơn']] },
      reply: 'Khách gửi SĐT, địa chỉ · dừng bám đuổi' },
    capi: { tieuDe: 'Gửi đơn hàng cho Facebook', event: 'Purchase', nhan: 'SỰ KIỆN MUA HÀNG', giaTri: '790.000đ', pk: 'Purchase · 790.000đ',
      dong: [['Đơn hàng', '#MA23119 · Gương đứng khung đen 50x160cm'], ['Nguồn khách', 'Bình luận quảng cáo Gương đứng → Messenger'], ['Giá trị', '790.000 VND'], ['Event ID', 'MA23119-PURCHASE (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện mua hàng' },
  },
  donHang: {
    ma: '#MA23119', sp: 'Gương đứng khung nhôm đen', bien: '50x160cm · x1', img: 'guong-den', gia: '790.000đ',
    nv: { ten: 'Nhân viên Hiếu', av: 'NH' },
    ten: 'Trần Ngọc Quỳnh', sdt: '0909361528', dc: 'Căn 1206 tòa B2, 45 Phạm Văn Đồng, Q. Bình Thạnh, TP.HCM', gio: '11:08 · 24/11/2026',
  },
};
