/* Bài 2 (video demo ngang tự chạy): RÈM CỬA MAY SẴN (rèm vải cản sáng khoen inox), nhóm thương mại điện tử. Làm 23/11/2026 theo file mẫu Yến chưng tươi:
   - 1 cảnh duy nhất: bài quảng cáo, 2 khách bình luận (giá, cửa 1m8 lấy mấy tấm) → trả lời cả 2 "Mình check ib shop nha"
     → AI nhắn inbox trước: giá + đúng ảnh quảng cáo, hỏi 1 điều (kích thước cửa) → ca khó: khách chỉ nói "cửa to lắm", hỏi có cản nắng không
     → AI hỏi lại chiều rộng, chiều cao (không đoán số tấm) → khách: rộng 2m4, cao 2m5 → AI: lấy 2 tấm cho rèm xếp ly đẹp, cản sáng 90%, treo là xong
     → hỏi màu xám / kem / be → khách chọn kem → AI xin SĐT + địa chỉ → khách im
     → gắn thẻ (3 hashtag quảng cáo + #baogia + màu khách chọn) → bám đuổi 3 tin 15 phút, 3 tiếng, 20 tiếng → khách gửi SĐT + địa chỉ
     → tóm tắt đơn → Purchase lên Facebook → đơn tự động, nhân viên bấm xác nhận → cảm ơn + 5 sản phẩm giảm giá
     → Zalo: hỏi thăm, bán chạy, khuyến mãi → tổng kết → logo.
   - Chỉ 1 sản phẩm từ đầu tới cuối (2 tấm rèm cản sáng màu kem). Tên shop, giá, khách, SĐT, địa chỉ: minh họa.
     Ảnh: Unsplash dùng chung với bài 1. */
window.VN_KB = {
  ten: 'Rèm cửa may sẵn video ngang',
  ketSub: 'Để AI tư vấn đúng số tấm, bám đuổi và lên đơn rèm cửa cho shop của bạn',
  shop: { ten: 'Rèm Cửa Nhà Mây', av: 'NM', mau: '#0F766E', sub: 'Thường trả lời ngay' },
  anh: {
    'rem-xam': '../assets/img/u/1771039622303-71545f266c1b_800x800.jpg',
    'rem-kem': '../assets/img/u/1771039622311-24e73898b641_800x800.jpg',
    'rem-be': '../assets/img/u/1771039622237-2725bdf33edf_800x800.jpg',
    'rem-trang': '../assets/img/u/1771039621838-4c8dd6ae0f9d_800x800.jpg',
    'rem-xam-2': '../assets/img/u/1754611380518-61a923cc47ca_800x800.jpg',
    'rem-phong-khach': '../assets/img/u/1754611362309-71297e9f42fd_800x800.jpg',
    'rem-voan': '../assets/img/u/1530914507926-36d0f98a9f1f_800x800.jpg',
    'day-buoc': '../assets/img/u/1688489307301-f6e3b15e01bd_800x800.jpg',
    'tua-rua': '../assets/img/u/1766684412414-57b272c62d45_800x800.jpg',
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= BÌNH LUẬN QUẢNG CÁO → INBOX (cảnh duy nhất) ================= */
    { k: 'canh', nhan: 'Bình luận quảng cáo → Inbox', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'rem-xam', nhan: 'MESSENGER', tieuDe: 'Rèm cản sáng may sẵn · treo là xong', nut: 'Gửi tin nhắn',
        text: 'RÈM CẢN SÁNG MAY SẴN 🪟 1 tấm 1m4 x 2m5 chỉ 290K. Cản sáng 90%, chống nắng nóng, khoen inox xỏ vào thanh là xong, giặt máy được. 3 màu xám, kem, be. #remcuamaysan #remcansang #remkhoen',
      }, d: 1500 },
    { k: 'cap', e: 'Bình luận hỏi giá', t: 'Khách hỏi giá ngay dưới quảng cáo', s: 'Một khách khác hỏi cửa 1m8 lấy mấy tấm' },
    { k: 'cmt', i: 0, ten: 'Hà My', av: 'HM', text: 'Giá sao shop? Có cản nắng ko?' },
    { k: 'cmt', i: 1, ten: 'Bảo Trân', av: 'BT', text: 'Cửa 1m8 lấy mấy tấm shop?' },
    { k: 'cap', e: 'Trả lời cả 2 bình luận', t: 'Trả lời ngắn gọn, mời khách vào inbox', s: 'Tư vấn chi tiết trong tin nhắn riêng' },
    { k: 'rep', i: 0, text: 'Mình check ib shop nha 💬' },
    { k: 'rep', i: 1, text: 'Mình check ib shop nha 💬' },
    { k: 'ms', ref: { loai: 'cmt', img: 'rem-xam', dong1: 'Bạn đã bình luận về quảng cáo của Rèm Cửa Nhà Mây', dong2: '"Giá sao shop? Có cản nắng ko?"' }, gio: '14:47' },
    { k: 'cap', e: 'AI nhắn trước', t: 'Inbox trước: báo giá, gửi đúng ảnh quảng cáo', s: 'Khách không cần mô tả lại sản phẩm' },
    { k: 'ai', text: 'Dạ chào chị Hà My, rèm cản sáng may sẵn bên em giá **290.000đ/tấm** (1m4 x 2m5) ạ. Vải **cản sáng 90%**, chống nắng nóng.' },
    { k: 'ai', img: 'rem-xam' },
    { k: 'ai', text: 'Chị cho em xin **kích thước cửa** (rộng x cao) ạ, để em báo đúng số tấm cho rèm phủ kín cửa nha?' },

    { k: 'cap', e: 'Khách trả lời thiếu', t: 'Khách chỉ nói "cửa to", chưa có số đo', s: 'AI hỏi lại cho đúng, không đoán số tấm' },
    { k: 'kh', text: 'cửa phòng ngủ to lắm e, nắng chiều chói lắm' },
    { k: 'ai', text: 'Dạ chị đo giúp em **chiều rộng** cửa sổ và **chiều cao** từ thanh treo xuống sàn nha. Rộng bao nhiêu em mới báo đúng số tấm, rèm mới xếp ly đẹp, không hở mép ạ.' },
    { k: 'kh', text: 'rộng 2m4, cao 2m5 e' },
    { k: 'ai', text: 'Dạ cửa 2m4 chị lấy **2 tấm** 1m4 x 2m5 ạ, rèm xếp ly đẹp, phủ kín mép. Vải cản sáng 90%, nắng chiều vẫn tối dịu. **Khoen inox may sẵn**, xỏ vào thanh có sẵn là xong, giặt máy được.' },
    { k: 'cap', e: 'Hỏi đúng thứ còn thiếu', t: 'Có số tấm rồi: AI hỏi màu xám, kem hay be', s: 'Gửi ảnh từng màu để khách chọn nhanh' },
    { k: 'ai', text: 'Chị lấy **màu xám**, **kem** hay **be** ạ? Kem, be hợp phòng ngủ sáng màu, xám hợp phòng hiện đại.' },
    { k: 'ai', imgs: ['rem-xam', 'rem-kem', 'rem-be'] },
    { k: 'kh', text: 'màu kem đi e' },
    { k: 'cap', e: 'Xin thông tin lên đơn', t: 'Chọn xong: AI xin SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ em ghi **2 tấm rèm cản sáng màu kem** 1m4 x 2m5, tổng **580.000đ**, freeship. Chị gửi em **SĐT và địa chỉ** để em lên đơn nha.' },

    // Khách im sau khi được xin SĐT, địa chỉ → màn hình phụ: gắn thẻ (3 hashtag quảng cáo + thẻ từ cuộc chat), bám đuổi 3 tin
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Chưa gửi SĐT: Preny tự gắn thẻ khách', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi theo thẻ', t: '3 tin ngắn: 15 phút, 3 tiếng, 20 tiếng', s: 'Chỉ nói về đúng 2 tấm rèm khách đã chọn' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T2 23/11/2026', d: 700 },
    { k: 'ai', text: 'Chị Hà My ơi, em giữ cho chị **2 tấm rèm cản sáng màu kem** rồi ạ. Chị gửi em SĐT, địa chỉ để em gửi kịp đơn chiều nay nha 😊' },
    { k: 'p', a: 'r1', d: 900 },
    { k: 'time', nhan: '3 tiếng sau', gio: '17:49', ngay: 'T2 23/11/2026', d: 700 },
    { k: 'ai', text: 'Em gửi chị ảnh thật rèm cản sáng treo phòng khách bên em nha 🪟 Xếp ly đều, phủ kín cửa, nắng chiều vẫn tối dịu.' },
    { k: 'ai', imgs: ['rem-kem', 'rem-xam-2', 'rem-phong-khach'] },
    { k: 'p', a: 'r2', d: 900 },
    { k: 'time', nhan: '20 tiếng sau', gio: '10:49', ngay: 'T3 24/11/2026', d: 700 },
    { k: 'ai', text: 'Chị chỉ cần gửi **SĐT và địa chỉ** là em lên đơn liền, tặng **cặp dây buộc rèm**, freeship ạ ⚡' },
    { k: 'p', a: 'r3', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 3, khách gửi SĐT, địa chỉ', s: 'AI kiểm tra ngay thông tin khách gửi' },
    { k: 'kh', text: 'Hà My 0909318764, 56 đường số 7, p bình trị đông b, bình tân' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'cap', e: 'Chốt đơn', t: 'Tự tổng hợp đơn: số tấm, màu, quà tặng, SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ chị kiểm tra lại đơn giúp em nha:\n– 2 tấm rèm cản sáng màu kem · 1m4 x 2m5\n– Tặng 1 cặp dây buộc rèm\n– Tổng: **580.000đ** (freeship)\n– Người nhận: Hà My · 0909318764\n– 56 Đường số 7, P. Bình Trị Đông B, Bình Tân\nChị xác nhận giúp em đơn này nha.', nut: 'Quản lý đơn hàng', d: 3400 },
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
    { k: 'ai', text: 'Dạ cảm ơn chị Hà My nha 💛 Đơn đã được xác nhận, shop gửi hàng ngay hôm nay. Shop đang giảm giá mấy món khách mua rèm hay lấy kèm, chị xem thử nha:' },
    { k: 'car', sp: [
        { img: 'rem-xam-2', ten: 'Thanh treo rèm inox 2m4', gia: '162.000đ', cu: '180.000đ', giam: '-10%' },
        { img: 'rem-voan', ten: 'Rèm voan lớp trong 1m4 x 2m5', gia: '135.000đ', cu: '150.000đ', giam: '-10%' },
        { img: 'day-buoc', ten: 'Dây buộc rèm (cặp)', gia: '54.000đ', cu: '60.000đ', giam: '-10%' },
        { img: 'tua-rua', ten: 'Tua rua trang trí rèm', gia: '81.000đ', cu: '90.000đ', giam: '-10%' },
        { img: 'rem-trang', ten: 'Rèm cản sáng màu trắng ngà', gia: '261.000đ', cu: '290.000đ', giam: '-10%' },
      ], d: 5200 },

    // Chăm sóc sau bán qua Zalo
    { k: 'zalo', gio: '19:30', ngay: 'T6 27/11/2026', chip: '2 ngày sau khi nhận · khách đã treo rèm', d: 1500 },
    { k: 'cap', e: 'Chăm sóc sau bán qua Zalo', t: 'Khách nhận hàng: AI hỏi rèm treo vừa chưa', s: 'Dặn cách giặt rèm, xin đánh giá trong tin Zalo OA' },
    { k: 'zns', zns: {
        img: 'rem-kem', tieuDe: 'Chị Hà My ơi, rèm treo vừa cửa chưa ạ?',
        noiDung: 'Rèm Cửa Nhà Mây cảm ơn chị đã nhận đơn **#NM24117** (2 tấm rèm cản sáng màu kem). Chị giặt máy chế độ nhẹ, nước lạnh, không dùng thuốc tẩy là rèm giữ màu lâu nha!',
        nut: 'Đánh giá sản phẩm',
      }, d: 4200 },
    { k: 'cap', e: 'ZBS · Sản phẩm bán chạy', t: '1 tuần sau: gửi sản phẩm bán chạy qua Zalo', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'T6 04/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['rem-voan', 'rem-xam-2', 'day-buoc', 'rem-be'], nhan: 'TOP BÁN CHẠY TUẦN NÀY', mau: '#F97316',
        tieuDe: '🔥 Top bán chạy tuần này tại Rèm Cửa Nhà Mây',
        noiDung: '**Rèm voan lớp trong**, **thanh treo inox** và **rèm cản sáng màu be** đang được khách chọn nhiều nhất tuần qua.',
        nut: 'Xem ngay',
      }, d: 4600 },
    { k: 'cap', e: 'ZBS · Khuyến mãi', t: '1 tuần sau nữa: gửi ưu đãi cho khách cũ', s: 'Kéo khách quay lại mua tiếp, không cần khách nhắn' },
    { k: 'zstamp', gio: '19:30', ngay: 'T6 11/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['rem-phong-khach', 'rem-trang', 'tua-rua', 'rem-xam'], nhan: 'KHÁCH CŨ · GIẢM 10%',
        tieuDe: 'Ưu đãi riêng cho khách đã mua tại Nhà Mây',
        noiDung: 'Rèm phòng khách, rèm voan, phụ kiện rèm đang giảm **10%**, freeship toàn quốc. Áp dụng đến hết 20/12/2026.',
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
    tag: { av: 'HM', ten: 'Lê Hà My', sub: 'Messenger · bình luận quảng cáo Rèm cản sáng may sẵn',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#remcuamaysan', 'qt hot'], ['#remcansang', 'qt hot'], ['#remkhoen', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#MauKem', 'qt']]]],
      im: 'Khách im từ 14:51, sau khi được xin SĐT, địa chỉ',
      rule: { lb: 'Bám đuổi theo thẻ #remcansang', tieuDe: '3 tin ngắn về đúng 2 tấm rèm khách đã chọn',
              dong: [['15 phút', 'Đã giữ 2 tấm rèm màu kem'], ['3 tiếng', 'Gửi ảnh thật rèm treo phòng'], ['20 tiếng', 'Chỉ cần SĐT, địa chỉ là lên đơn']] },
      reply: 'Khách gửi SĐT, địa chỉ · dừng bám đuổi' },
    capi: { tieuDe: 'Gửi đơn hàng cho Facebook', event: 'Purchase', nhan: 'SỰ KIỆN MUA HÀNG', giaTri: '580.000đ', pk: 'Purchase · 580.000đ',
      dong: [['Đơn hàng', '#NM24117 · 2 tấm rèm cản sáng màu kem'], ['Nguồn khách', 'Bình luận quảng cáo Rèm cản sáng → Messenger'], ['Giá trị', '580.000 VND'], ['Event ID', 'NM24117-PURCHASE (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện mua hàng' },
  },
  donHang: {
    ma: '#NM24117', sp: 'Rèm cản sáng may sẵn màu kem', bien: '1m4 x 2m5 · x2', img: 'rem-kem', gia: '580.000đ',
    nv: { ten: 'Nhân viên Mây', av: 'NM' },
    ten: 'Lê Hà My', sdt: '0909318764', dc: '56 Đường số 7, P. Bình Trị Đông B, Q. Bình Tân, TP.HCM', gio: '11:05 · 24/11/2026',
  },
};
