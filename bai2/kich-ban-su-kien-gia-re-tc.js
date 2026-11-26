/* Bài 2 (video demo ngang tự chạy): DỊCH VỤ SỰ KIỆN GIÁ RẺ (trang trí sinh nhật tại nhà, gói 1–2 triệu), nhóm thương mại điện tử.
   Làm 26/11/2026 theo người dùng: "thêm ngành dịch vụ sự kiện giá rẻ, cũng bên dịch vụ chạy sự kiện luôn nhưng làm theo hướng
   dịch vụ giá rẻ tầm khoảng 1, 2 triệu, ví dụ khách tổ chức sinh nhật, xin giá hỏi tư vấn dịch vụ, bên này báo giá tổ chức sự kiện,
   xin sđt và địa chỉ để triển khai". Khác `to-chuc-su-kien-tc` (YEP 45 triệu, cân nhắc nhiều, hẹn gặp): ở đây chốt luôn trong chat.
   - 1 cảnh duy nhất: bài quảng cáo, 2 khách bình luận (giá trang trí sinh nhật, có làm thôi nôi không) → trả lời "Mình check ib shop nha"
     → AI nhắn trước: báo 2 gói (990K, 1.590K), gửi đúng ảnh quảng cáo, hỏi tiệc cho ai, ngày nào
     → khách: sinh nhật bé gái 1 tuổi, tối T7 05/12 tại nhà → AI tư vấn gói 1.590K tone hồng, gửi ảnh mẫu → khách chốt
     → AI xin SĐT + địa chỉ tổ chức + tên bé in bảng → khách im → gắn thẻ → bám đuổi 3 tin → khách gửi, thiếu tầng/căn → AI hỏi lại
     → tóm tắt đơn → Purchase → đơn tự động, nhân viên xác nhận → cảm ơn + 5 dịch vụ thêm giảm giá
     → Zalo: hỏi thăm sau tiệc + xin ảnh, mẫu bán chạy, ưu đãi trang trí Tết → tổng kết → logo.
   - Theo quy tắc 25/11/2026: AI chỉ báo giá, gửi ảnh, hỏi số lượng/ngày, xin SĐT + địa chỉ; không tự tính, không check khách cũ/mới.
   - Không có tin nhắc trước ngày tiệc (Preny chưa có tính năng này). Ảnh không có nhân vật hoạt hình có bản quyền.
     Tên (Tiệc Xinh Decor), giá, khách, SĐT, địa chỉ: minh họa. Ảnh Unsplash, ảnh thật, dùng chung với bài 1. */
window.VN_KB = {
  ten: 'Dịch vụ sự kiện giá rẻ video ngang',
  ketSub: 'Để AI báo giá, gửi mẫu và chốt lịch trang trí tiệc cho bạn',
  shop: { ten: 'Tiệc Xinh Decor', av: 'TX', mau: '#DB2777', sub: 'Thường trả lời ngay' },
  anh: {
    'trang-tri': '../assets/img/u/1741969494307-55394e3e4071_800x800.jpg',
    'cong-bong': '../assets/img/u/1560128411-79892dd93bf8_800x800.jpg',
    'thoi-noi': '../assets/img/u/1615373282418-72e3146a17f5_800x800.jpg',
    'bong-hong': '../assets/img/u/1776162241196-baecafaeb305_800x800.jpg',
    'bong-hong-vang': '../assets/img/u/1727178757622-26389a0538f5_800x800.jpg',
    'chu-so': '../assets/img/u/1636256373111-cddaa1470363_800x800.jpg',
    'backdrop-vang': '../assets/img/u/1643175816971-a463dee6ae61_800x800.jpg',
    'vong-bong': '../assets/img/u/1509909756405-be0199881695_800x800.jpg',
    'tiec-be': '../assets/img/u/1608790672275-309c02d888ff_800x800.jpg',
    'be-an-banh': '../assets/img/u/1757693075207-32944391b4de_800x800.jpg',
    'ban-banh': '../assets/img/u/1764380746818-18c01e96df12_800x800.jpg',
    'bong-vang': '../assets/img/u/1634037227458-abdbf697806e_800x800.jpg',
    'cau-vong': '../assets/img/u/1611142287927-64cede3148da_800x800.jpg',
    'cong-bong-2': '../assets/img/u/1707589338174-dc1ddc18945a_800x800.jpg',
    'sn-50': '../assets/img/u/1604668915840-580c30026e5f_800x800.jpg',
    'ban-ngoai-troi': '../assets/img/u/1765946026563-4f9db06eb328_800x800.jpg',
    'nen-1': '../assets/img/u/1670491191890-7ffc7c4c0b58_800x800.jpg',
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= BÌNH LUẬN QUẢNG CÁO → INBOX (cảnh duy nhất) ================= */
    { k: 'canh', nhan: 'Bình luận quảng cáo → Inbox', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'trang-tri', nhan: 'MESSENGER', tieuDe: 'Trang trí sinh nhật tại nhà · từ 990K', nut: 'Gửi tin nhắn',
        text: 'TRANG TRÍ SINH NHẬT TẠI NHÀ CHỈ TỪ 990K 🎈 Phông bóng bay, chữ Happy Birthday, bảng tên, bàn bánh. Thợ tới tận nơi setup trong 2 tiếng, nhận thôi nôi, đầy tháng, sinh nhật người lớn. #trangtrisinhnhat #bongbay #sinhnhattainha',
      }, d: 1500 },
    { k: 'cap', e: 'Bình luận hỏi giá', t: 'Khách hỏi giá trang trí dưới quảng cáo', s: 'Một khách khác hỏi có nhận thôi nôi không' },
    { k: 'cmt', i: 0, ten: 'Kim Ngân', av: 'KN', text: 'Trang trí sinh nhật bao nhiêu shop?' },
    { k: 'cmt', i: 1, ten: 'Thanh Tâm', av: 'TT', text: 'Có nhận trang trí thôi nôi ko shop?' },
    { k: 'cap', e: 'Trả lời cả 2 bình luận', t: 'Trả lời ngắn gọn, mời khách vào inbox', s: 'Báo giá chi tiết trong tin nhắn riêng' },
    { k: 'rep', i: 0, text: 'Mình check ib shop nha 💬' },
    { k: 'rep', i: 1, text: 'Mình check ib shop nha 💬' },
    { k: 'ms', ref: { loai: 'cmt', img: 'trang-tri', dong1: 'Bạn đã bình luận về quảng cáo của Tiệc Xinh Decor', dong2: '"Trang trí sinh nhật bao nhiêu shop?"' }, gio: '14:47' },
    { k: 'cap', e: 'AI nhắn trước', t: 'Inbox trước: báo giá 2 gói, gửi đúng ảnh quảng cáo', s: 'Rồi hỏi tiệc cho ai, ngày nào' },
    { k: 'ai', text: 'Dạ chào chị Ngân, trang trí sinh nhật tại nhà bên em có 2 gói: **gói cơ bản 990.000đ**, **gói tiêu chuẩn 1.590.000đ** ạ.' },
    { k: 'ai', img: 'trang-tri' },
    { k: 'ai', text: 'Tiệc mình **cho ai, tổ chức ngày nào** ạ?' },
    { k: 'cap', e: 'Khách kể nhu cầu', t: 'Khách nói tiệc cho ai, ngày giờ, chỗ tổ chức', s: 'AI tư vấn đúng gói, gửi ảnh mẫu' },
    { k: 'kh', text: 'sn bé gái nhà c 1 tuổi, tối T7 5/12 làm ở nhà. 2 gói khác nhau sao e?' },
    { k: 'ai', text: 'Dạ gói cơ bản có phông bóng và chữ Happy Birthday. **Gói tiêu chuẩn 1.590.000đ** thêm **cổng bóng, bảng tên bé, bàn bánh**, hợp tiệc thôi nôi ạ. Em gửi chị mẫu **tone hồng** cho bé gái nha:' },
    { k: 'ai', imgs: ['thoi-noi', 'bong-hong', 'cong-bong'] },
    { k: 'cap', e: 'Khách chốt gói', t: 'Khách tự chọn gói và tone màu' },
    { k: 'kh', text: 'lấy gói 1.590 tone hồng nha e' },
    { k: 'cap', e: 'Xin thông tin triển khai', t: 'Có gói: AI xin SĐT, địa chỉ để lên lịch thợ' },
    { k: 'ai', text: 'Dạ em ghi **gói tiêu chuẩn tone hồng**, **1.590.000đ**, tối **T7 05/12**, thợ tới setup lúc **16h** ạ. Chị gửi em **SĐT, địa chỉ tổ chức** và **tên bé** để em in bảng tên nha.' },

    // Khách im sau khi được xin SĐT, địa chỉ → màn hình phụ: gắn thẻ (3 hashtag quảng cáo + thẻ từ cuộc chat), bám đuổi 3 tin
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Chưa gửi SĐT: Preny tự gắn thẻ khách', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi theo thẻ', t: '3 tin ngắn: 15 phút, 3 tiếng, 20 tiếng', s: 'Chỉ nói về đúng gói và ngày khách đã chọn' },
    { k: 'time', nhan: '15 phút sau', gio: '15:05', ngay: 'T5 26/11/2026', d: 700 },
    { k: 'ai', text: 'Chị Ngân ơi, em giữ lịch **tối T7 05/12** cho chị rồi ạ, cuối tuần thợ kín lịch nhanh. Chị gửi em SĐT, địa chỉ để em xếp thợ nha 😊' },
    { k: 'p', a: 'r1', d: 900 },
    { k: 'time', nhan: '3 tiếng sau', gio: '17:50', ngay: 'T5 26/11/2026', d: 700 },
    { k: 'ai', text: 'Em gửi chị ảnh thật mấy tiệc thôi nôi tone hồng bên em làm tuần rồi nha 🎈 Setup gọn trong phòng khách nhỏ vẫn đẹp.' },
    { k: 'ai', imgs: ['nen-1', 'bong-hong-vang', 'be-an-banh'] },
    { k: 'p', a: 'r2', d: 900 },
    { k: 'time', nhan: '20 tiếng sau', gio: '10:50', ngay: 'T6 27/11/2026', d: 700 },
    { k: 'ai', text: 'Chị chỉ cần gửi **SĐT, địa chỉ** trước 12h hôm nay là em chốt thợ, **tặng thêm bóng số 1 màu hồng** cho bé ạ 🎁' },
    { k: 'p', a: 'r3', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 3, khách gửi SĐT, địa chỉ', s: 'AI kiểm tra thông tin trước khi lên lịch' },
    { k: 'kh', text: 'Ngân 0903418275, cc Phan Văn Trị p5 gò vấp. bé tên Su nha' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'cap', e: 'Kiểm tra dữ liệu', t: 'Thiếu lô, tầng, căn: AI hỏi lại trước khi lên lịch' },
    { k: 'ai', text: 'Dạ chị cho em xin thêm **lô, tầng và số căn** để thợ mang đồ lên setup đúng nhà nha 😊' },
    { k: 'kh', text: 'lô B tầng 6 căn B6.08 e' },
    { k: 'cap', e: 'Chốt đơn', t: 'Tự tổng hợp: gói, ngày giờ, bảng tên, SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ chị kiểm tra lại giúp em nha:\n– Gói trang trí tiêu chuẩn, tone hồng\n– Bảng tên "Bé Su 1 tuổi" · tặng bóng số 1\n– Thợ setup 16h, T7 05/12/2026\n– Tổng: **1.590.000đ** (miễn phí công setup)\n– Người đặt: Ngân · 0903418275\n– Căn B6.08, lô B, CC Phan Văn Trị, P.5, Gò Vấp\nChị xác nhận giúp em nha.', nut: 'Quản lý đơn hàng', d: 3400 },
    { k: 'cap', e: 'Xong', t: 'Khách chỉ cần nói "Ok e"' },
    { k: 'kh', text: 'Ok e' },
    { k: 'ai', text: 'Dạ em lên lịch thợ cho chị rồi nha 🎈', d: 1300 },

    // Chốt đơn → màn hình phụ: gửi đơn hàng cho Facebook → đơn tự động → nhân viên xác nhận
    { k: 'cap', e: 'Gửi đơn về Facebook', t: 'Sự kiện mua hàng gửi ngay lên Facebook', s: 'Quảng cáo tối ưu theo đơn thật' },
    { k: 'panel', v: 'capi', d: 900 },
    { k: 'p', a: 'flow', d: 1500 }, { k: 'p', a: 'event', d: 1300 }, { k: 'p', a: 'ok', d: 2200 },
    { k: 'cap', e: 'Đơn hàng tự động', t: 'Đơn tự lên trên Preny. Đội thợ chỉ việc đi làm.' },
    { k: 'panel', v: 'don', d: 900 },
    { k: 'p', a: 'f1', d: 550 }, { k: 'p', a: 'f2', d: 550 }, { k: 'p', a: 'f3', d: 550 }, { k: 'p', a: 'f4', d: 550 },
    { k: 'p', a: 'cho', d: 900 },
    { k: 'cap', e: 'Nhân viên xác nhận', t: 'Báo nhân viên: bấm 1 lần là lịch lên', s: 'Người thật kiểm tra lại trước khi xếp thợ' },
    { k: 'p', a: 'nv', d: 1700 }, { k: 'p', a: 'bam', d: 1100 },
    { k: 'p', a: 'xn', d: 3000 },
    { k: 'panel', v: null, d: 500 },

    // Mua xong: tin cảm ơn kèm 5 dịch vụ thêm đang giảm giá
    { k: 'cap', e: 'Bán thêm sau mua', t: 'Cảm ơn khách, gửi kèm 5 món thêm đang giảm giá', s: 'Khách bấm "Mua ngay" ngay trong Messenger' },
    { k: 'ai', text: 'Dạ cảm ơn chị Ngân nha 💛 Lịch đã được xác nhận. Bên em đang giảm giá mấy món khách hay thêm cho tiệc, chị xem thử nha:' },
    { k: 'car', sp: [
        { img: 'bong-vang', ten: 'Chùm bóng bay heli 10 quả', gia: '270.000đ', cu: '300.000đ', giam: '-10%' },
        { img: 'ban-banh', ten: 'Bàn kẹo, bánh ngọt trang trí', gia: '585.000đ', cu: '650.000đ', giam: '-10%' },
        { img: 'chu-so', ten: 'Chữ số bóng bạc cỡ lớn', gia: '135.000đ', cu: '150.000đ', giam: '-10%' },
        { img: 'cong-bong-2', ten: 'Cổng bóng ngoài cửa', gia: '405.000đ', cu: '450.000đ', giam: '-10%' },
        { img: 'tiec-be', ten: 'Chụp ảnh tiệc 1 tiếng', gia: '540.000đ', cu: '600.000đ', giam: '-10%' },
      ], d: 5200 },

    // Chăm sóc sau bán qua Zalo
    { k: 'zalo', gio: '19:30', ngay: 'T2 07/12/2026', chip: '2 ngày sau tiệc', d: 1500 },
    { k: 'cap', e: 'Chăm sóc sau bán qua Zalo', t: 'Sau tiệc: AI hỏi thăm, xin ảnh và đánh giá', s: 'Tin Zalo OA, khách không cần trả lời' },
    { k: 'zns', zns: {
        img: 'be-an-banh', tieuDe: 'Chị Ngân ơi, tiệc của bé Su vui không ạ?',
        noiDung: 'Tiệc Xinh Decor cảm ơn chị đã chọn gói **#TX26127** (gói tiêu chuẩn tone hồng). Chị gửi em vài tấm ảnh tiệc và đánh giá giúp em nha!',
        nut: 'Đánh giá dịch vụ',
      }, d: 4200 },
    { k: 'cap', e: 'ZBS · Mẫu bán chạy', t: '1 tuần sau: gửi mẫu trang trí được đặt nhiều', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'T2 14/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['vong-bong', 'cau-vong', 'backdrop-vang', 'sn-50'], nhan: 'MẪU ĐƯỢC ĐẶT NHIỀU', mau: '#F97316',
        tieuDe: '🔥 Mẫu được đặt nhiều tuần này tại Tiệc Xinh Decor',
        noiDung: '**Chùm bóng pastel**, **cầu vồng bóng** cho bé và **phông kim tuyến vàng** cho sinh nhật người lớn đang được đặt nhiều nhất.',
        nut: 'Xem mẫu',
      }, d: 4600 },
    { k: 'cap', e: 'ZBS · Trang trí Tết', t: '1 tuần sau nữa: ưu đãi trang trí tất niên, Tết', s: 'Kéo khách quay lại đặt tiếp, không cần khách nhắn' },
    { k: 'zstamp', gio: '19:30', ngay: 'T2 21/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['backdrop-vang', 'bong-vang', 'ban-ngoai-troi', 'cong-bong'], nhan: 'ƯU ĐÃI TẤT NIÊN',
        tieuDe: 'Trang trí tiệc tất niên tại nhà, giảm 15%',
        noiDung: 'Khách đã đặt tiệc bên em được giảm **15%** gói trang trí tất niên, tiệc Tết tại nhà. Áp dụng đến hết 31/01/2027.',
        nut: 'Đặt lịch',
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
    tag: { av: 'KN', ten: 'Trần Kim Ngân', sub: 'Messenger · bình luận quảng cáo Trang trí sinh nhật tại nhà',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#trangtrisinhnhat', 'qt hot'], ['#bongbay', 'qt hot'], ['#sinhnhattainha', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#ThoiNoiToneHong', 'qt']]]],
      im: 'Khách im từ 14:50, sau khi được xin SĐT, địa chỉ',
      rule: { lb: 'Bám đuổi theo thẻ #trangtrisinhnhat', tieuDe: '3 tin ngắn về đúng gói và ngày khách đã chọn',
              dong: [['15 phút', 'Đã giữ lịch tối T7 05/12'], ['3 tiếng', 'Gửi ảnh thật tiệc thôi nôi tone hồng'], ['20 tiếng', 'Gửi SĐT trước 12h, tặng bóng số 1']] },
      reply: 'Khách gửi SĐT, địa chỉ · dừng bám đuổi' },
    capi: { tieuDe: 'Gửi đơn hàng cho Facebook', event: 'Purchase', nhan: 'SỰ KIỆN MUA HÀNG', giaTri: '1.590.000đ', pk: 'Purchase · 1.590.000đ',
      dong: [['Đơn hàng', '#TX26127 · gói tiêu chuẩn tone hồng'], ['Nguồn khách', 'Bình luận quảng cáo Trang trí sinh nhật → Messenger'], ['Giá trị', '1.590.000 VND'], ['Event ID', 'TX26127-PURCHASE (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện mua hàng' },
  },
  donHang: {
    ma: '#TX26127', sp: 'Gói trang trí sinh nhật tiêu chuẩn', bien: 'Tone hồng · bảng tên "Bé Su 1 tuổi" · setup 16h T7 05/12', img: 'thoi-noi', gia: '1.590.000đ',
    nv: { ten: 'Nhân viên Linh', av: 'NL' },
    ten: 'Trần Kim Ngân', sdt: '0903418275', dc: 'Căn B6.08, lô B, CC Phan Văn Trị, P.5, Q. Gò Vấp, TP.HCM', gio: '11:05 · 27/11/2026',
  },
};
