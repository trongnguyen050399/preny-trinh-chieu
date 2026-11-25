/* Bài 2 (video demo ngang tự chạy): THỰC PHẨM BÁN SỈ (chả lụa, giò thủ, pate, thịt nguội, có combo), nhóm thương mại điện tử.
   Làm 25/11/2026 theo người dùng: "AI lên kịch bản ngắn gọn, khách xin giá, AI hỏi số lượng, xin sđt và địa chỉ chốt đơn luôn".
   - 1 cảnh duy nhất: bài quảng cáo, 2 khách bình luận (giá sỉ chả lụa, pate có giao Thủ Đức) → trả lời cả 2 "Mình check ib shop nha"
     → AI nhắn inbox trước: báo giá sỉ + combo, gửi đúng ảnh quảng cáo, hỏi khách muốn lấy mấy ký → khách: lấy combo 5kg
     → AI xin SĐT + địa chỉ (25/11/2026 người dùng bỏ đoạn hỏi xe bán bao nhiêu ổ, "lấy như mọi khi"/đơn đầu, giao 2 ngày/lần:
       AI chưa check được khách cũ/mới, chưa tự tính số lượng; chỉ báo giá, gửi ảnh, xin số lượng, xin SĐT + địa chỉ lên đơn)
     → AI xin SĐT + địa chỉ → khách im → gắn thẻ → bám đuổi 3 tin 15 phút, 3 tiếng, 20 tiếng → khách gửi SĐT + địa chỉ
     → tóm tắt đơn → Purchase lên Facebook → đơn tự động, nhân viên bấm xác nhận → cảm ơn + 5 sản phẩm giảm giá
     → Zalo: hỏi thăm, bán chạy, đặt trước hàng Tết → tổng kết → logo.
   - Chỉ 1 sản phẩm từ đầu tới cuối (combo 5kg). Không hứa an toàn tuyệt đối, không tin cập nhật vận chuyển.
     Tên xưởng, giá, khách, SĐT, địa chỉ: minh họa. Ảnh: Pexels (file px-…) + Unsplash, ảnh thật, dùng chung với bài 1. */
window.VN_KB = {
  ten: 'Thực phẩm bán sỉ video ngang',
  ketSub: 'Để AI báo giá sỉ, hỏi đúng số lượng và chốt đơn giò chả cho xưởng của bạn',
  shop: { ten: 'Giò Chả Bà Sáu', av: 'BS', mau: '#B91C1C', sub: 'Thường trả lời ngay' },
  anh: {
    'cha-lua': '../assets/img/u/px-9834372_800x800.jpg',
    'banh-mi': '../assets/img/u/px-17748170_800x800.jpg',
    'banh-mi-2': '../assets/img/u/px-17748172_800x800.jpg',
    'banh-mi-chao': '../assets/img/u/px-6138758_800x800.jpg',
    'cho-thit': '../assets/img/u/px-3543662_800x800.jpg',
    'pate': '../assets/img/u/px-7491909_800x800.jpg',
    'pate-2': '../assets/img/u/px-8696528_800x800.jpg',
    'thit-nguoi': '../assets/img/u/px-5491285_800x800.jpg',
    'thit-nguoi-2': '../assets/img/u/px-6389705_800x800.jpg',
    'cha-lat': '../assets/img/u/px-34020921_800x800.jpg',
    'quay-deli': '../assets/img/u/px-34756070_800x800.jpg',
    'banh-chung': '../assets/img/u/px-30326157_800x800.jpg',
    'thit-nguoi-3': '../assets/img/u/1607756794535-ba48a526b73a_800x800.jpg',
    'board': '../assets/img/u/1692311358804-34b31f6ef43c_800x800.jpg',
    'thung-hang': '../assets/img/u/1607687441809-dd332b5b9c18_800x800.jpg',
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= BÌNH LUẬN QUẢNG CÁO → INBOX (cảnh duy nhất) ================= */
    { k: 'canh', nhan: 'Bình luận quảng cáo → Inbox', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'cha-lua', nhan: 'MESSENGER', tieuDe: 'Giò chả, pate bán sỉ · giao trong ngày', nut: 'Gửi tin nhắn',
        text: 'GIÒ CHẢ, PATE BÁN SỈ CHO XE BÁNH MÌ 🥖 Chả lụa sỉ 175K/kg, giò thủ, pate gan, thịt nguội. Combo 5kg chỉ 830K. Hàng làm mỗi ngày, giao trong ngày nội thành. #giochasi #chalua #patebanhmi',
      }, d: 1500 },
    { k: 'cap', e: 'Bình luận hỏi giá', t: 'Chủ xe bánh mì hỏi giá sỉ dưới quảng cáo', s: 'Một khách khác hỏi pate có giao Thủ Đức không' },
    { k: 'cmt', i: 0, ten: 'Văn Tài', av: 'VT', text: 'Giá sỉ chả lụa sao shop?' },
    { k: 'cmt', i: 1, ten: 'Thanh Bình', av: 'TB', text: 'Pate có giao Thủ Đức ko shop?' },
    { k: 'cap', e: 'Trả lời cả 2 bình luận', t: 'Trả lời ngắn gọn, mời khách vào inbox', s: 'Báo giá chi tiết trong tin nhắn riêng' },
    { k: 'rep', i: 0, text: 'Mình check ib shop nha 💬' },
    { k: 'rep', i: 1, text: 'Mình check ib shop nha 💬' },
    { k: 'ms', ref: { loai: 'cmt', img: 'cha-lua', dong1: 'Bạn đã bình luận về quảng cáo của Giò Chả Bà Sáu', dong2: '"Giá sỉ chả lụa sao shop?"' }, gio: '14:47' },
    { k: 'cap', e: 'AI nhắn trước', t: 'Inbox trước: báo giá sỉ, gửi đúng ảnh quảng cáo', s: 'Rồi hỏi khách muốn lấy bao nhiêu' },
    { k: 'ai', text: 'Dạ chào anh Tài, giá sỉ bên em từ 5kg: **chả lụa 175.000đ/kg**, giò thủ 210.000đ, pate gan 120.000đ, thịt nguội 190.000đ ạ. **Combo 5kg** (2kg chả lụa, 1kg giò thủ, 1kg pate, 1kg thịt nguội) giá **830.000đ**.' },
    { k: 'ai', img: 'cha-lua' },
    { k: 'ai', text: 'Anh muốn lấy **mấy ký, loại nào** ạ?' },
    { k: 'cap', e: 'Khách báo số lượng', t: 'Khách tự nói muốn lấy bao nhiêu', s: 'AI ghi đúng số lượng khách đặt' },
    { k: 'kh', text: 'lấy a combo 5kg nha e' },
    { k: 'cap', e: 'Xin thông tin lên đơn', t: 'Có số lượng: AI xin SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ em ghi **combo 5kg** (2kg chả lụa, 1kg giò thủ, 1kg pate, 1kg thịt nguội), **830.000đ**, miễn phí giao nội thành. Anh gửi em **SĐT và địa chỉ** để em lên đơn nha.' },

    // Khách im sau khi được xin SĐT, địa chỉ → màn hình phụ: gắn thẻ (3 hashtag quảng cáo + thẻ từ cuộc chat), bám đuổi 3 tin
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Chưa gửi SĐT: Preny tự gắn thẻ khách', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi theo thẻ', t: '3 tin ngắn: 15 phút, 3 tiếng, 20 tiếng', s: 'Chỉ nói về đúng combo khách đã chọn' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T4 25/11/2026', d: 700 },
    { k: 'ai', text: 'Anh Tài ơi, em giữ cho anh **combo 5kg** rồi ạ. Anh gửi em SĐT, địa chỉ để em xếp xe giao kịp chiều nay nha 😊' },
    { k: 'p', a: 'r1', d: 900 },
    { k: 'time', nhan: '3 tiếng sau', gio: '17:49', ngay: 'T4 25/11/2026', d: 700 },
    { k: 'ai', text: 'Em gửi anh ảnh thật mẻ chả lụa, pate làm sáng nay bên em nha 🥖 Cắt lát dày vừa ổ bánh mì, khách xe bánh mì lấy đều mỗi tuần.' },
    { k: 'ai', imgs: ['cha-lat', 'pate-2', 'banh-mi'] },
    { k: 'p', a: 'r2', d: 900 },
    { k: 'time', nhan: '20 tiếng sau', gio: '10:49', ngay: 'T5 26/11/2026', d: 700 },
    { k: 'ai', text: 'Anh chỉ cần gửi **SĐT và địa chỉ** trước 11h là em giao combo trong ngày, **tặng 500g pate** ạ ⚡' },
    { k: 'p', a: 'r3', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 3, khách gửi SĐT, địa chỉ', s: 'AI tổng hợp đơn ngay' },
    { k: 'kh', text: 'Tài 0937254816, 112 quang trung p10 gò vấp' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'cap', e: 'Chốt đơn', t: 'Tự tổng hợp đơn: combo, quà tặng, SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ anh kiểm tra lại đơn giúp em nha:\n– Combo 5kg (chả lụa, giò thủ, pate, thịt nguội)\n– Tặng 500g pate\n– Tổng: **830.000đ** (miễn phí giao)\n– Người nhận: Tài · 0937254816\n– 112 Quang Trung, P.10, Gò Vấp\nAnh xác nhận giúp em đơn này nha.', nut: 'Quản lý đơn hàng', d: 3400 },
    { k: 'cap', e: 'Xong', t: 'Khách chỉ cần nói "Ok e"' },
    { k: 'kh', text: 'Ok e' },
    { k: 'ai', text: 'Dạ em lên đơn, giao anh trong chiều nay nha ⚡', d: 1300 },

    // Chốt đơn → màn hình phụ: gửi đơn hàng cho Facebook → đơn tự động → nhân viên xác nhận
    { k: 'cap', e: 'Gửi đơn về Facebook', t: 'Sự kiện mua hàng gửi ngay lên Facebook', s: 'Quảng cáo tối ưu theo đơn thật' },
    { k: 'panel', v: 'capi', d: 900 },
    { k: 'p', a: 'flow', d: 1500 }, { k: 'p', a: 'event', d: 1300 }, { k: 'p', a: 'ok', d: 2200 },
    { k: 'cap', e: 'Đơn hàng tự động', t: 'Đơn tự lên trên Preny. Xưởng chỉ việc giao.' },
    { k: 'panel', v: 'don', d: 900 },
    { k: 'p', a: 'f1', d: 550 }, { k: 'p', a: 'f2', d: 550 }, { k: 'p', a: 'f3', d: 550 }, { k: 'p', a: 'f4', d: 550 },
    { k: 'p', a: 'cho', d: 900 },
    { k: 'cap', e: 'Nhân viên xác nhận', t: 'Báo nhân viên: bấm 1 lần là đơn lên', s: 'Người thật kiểm tra lại trước khi giao' },
    { k: 'p', a: 'nv', d: 1700 }, { k: 'p', a: 'bam', d: 1100 },
    { k: 'p', a: 'xn', d: 3000 },
    { k: 'panel', v: null, d: 500 },

    // Mua xong: tin cảm ơn kèm 5 sản phẩm đang giảm giá
    { k: 'cap', e: 'Bán thêm sau mua', t: 'Cảm ơn khách, gửi kèm 5 sản phẩm đang giảm giá', s: 'Khách bấm "Mua ngay" ngay trong Messenger' },
    { k: 'ai', text: 'Dạ cảm ơn anh Tài nha 💛 Đơn đã được xác nhận, xưởng giao trong chiều nay. Bên em đang giảm giá mấy món xe bánh mì hay lấy kèm, anh xem thử nha:' },
    { k: 'car', sp: [
        { img: 'cha-lat', ten: 'Chả bò (1kg)', gia: '234.000đ', cu: '260.000đ', giam: '-10%' },
        { img: 'pate-2', ten: 'Pate gan hũ 500g', gia: '58.000đ', cu: '65.000đ', giam: '-10%' },
        { img: 'thit-nguoi-2', ten: 'Thịt nguội jambon (1kg)', gia: '171.000đ', cu: '190.000đ', giam: '-10%' },
        { img: 'banh-mi-chao', ten: 'Combo bánh mì chảo 5kg', gia: '711.000đ', cu: '790.000đ', giam: '-10%' },
        { img: 'thit-nguoi-3', ten: 'Jambon cắt lát sẵn (1kg)', gia: '189.000đ', cu: '210.000đ', giam: '-10%' },
      ], d: 5200 },

    // Chăm sóc sau bán qua Zalo
    { k: 'zalo', gio: '19:30', ngay: 'T7 28/11/2026', chip: '2 ngày sau khi nhận · khách đã bán thử', d: 1500 },
    { k: 'cap', e: 'Chăm sóc sau bán qua Zalo', t: 'Khách nhận hàng: AI hỏi chả bán có hợp khách không', s: 'Dặn cách bảo quản, xin đánh giá trong tin Zalo OA' },
    { k: 'zns', zns: {
        img: 'banh-mi', tieuDe: 'Anh Tài ơi, chả bán có hợp khách không ạ?',
        noiDung: 'Giò Chả Bà Sáu cảm ơn anh đã nhận đơn **#BS25119** (combo 5kg). Anh để giò chả ngăn mát, xe không có tủ thì để thùng đá và dùng trong ngày cho ngon nha!',
        nut: 'Đánh giá sản phẩm',
      }, d: 4200 },
    { k: 'cap', e: 'ZBS · Sản phẩm bán chạy', t: '1 tuần sau: gửi sản phẩm bán chạy qua Zalo', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'T7 05/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['cha-lua', 'pate', 'thit-nguoi-2', 'banh-mi-chao'], nhan: 'TOP BÁN CHẠY TUẦN NÀY', mau: '#F97316',
        tieuDe: '🔥 Top bán chạy tuần này tại Giò Chả Bà Sáu',
        noiDung: '**Chả lụa**, **pate gan** và **combo bánh mì chảo** đang được các xe bánh mì lấy nhiều nhất tuần qua.',
        nut: 'Xem ngay',
      }, d: 4600 },
    { k: 'cap', e: 'ZBS · Đặt trước hàng Tết', t: '1 tuần sau nữa: mời khách sỉ đặt trước hàng Tết', s: 'Kéo khách quay lại đặt tiếp, không cần khách nhắn' },
    { k: 'zstamp', gio: '19:30', ngay: 'T7 12/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['banh-chung', 'cha-lua', 'board', 'thung-hang'], nhan: 'ĐẶT TRƯỚC HÀNG TẾT',
        tieuDe: 'Khách sỉ đặt trước giò lụa, giò thủ Tết',
        noiDung: 'Đặt trước giò lụa, giò thủ Tết giảm **20.000đ/kg**, giữ giá sỉ, giao đúng ngày anh hẹn. Nhận đặt đến hết 15/01/2027.',
        nut: 'Đặt trước',
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
    tag: { av: 'VT', ten: 'Nguyễn Văn Tài', sub: 'Messenger · bình luận quảng cáo Giò chả, pate bán sỉ',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#giochasi', 'qt hot'], ['#chalua', 'qt hot'], ['#patebanhmi', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#Combo5kg', 'qt']]]],
      im: 'Khách im từ 14:52, sau khi được xin SĐT, địa chỉ',
      rule: { lb: 'Bám đuổi theo thẻ #chalua', tieuDe: '3 tin ngắn về đúng combo khách đã chọn',
              dong: [['15 phút', 'Đã giữ combo 5kg'], ['3 tiếng', 'Gửi ảnh thật mẻ chả, pate sáng nay'], ['20 tiếng', 'Gửi SĐT trước 11h là giao trong ngày']] },
      reply: 'Khách gửi SĐT, địa chỉ · dừng bám đuổi' },
    capi: { tieuDe: 'Gửi đơn hàng cho Facebook', event: 'Purchase', nhan: 'SỰ KIỆN MUA HÀNG', giaTri: '830.000đ', pk: 'Purchase · 830.000đ',
      dong: [['Đơn hàng', '#BS25119 · combo 5kg'], ['Nguồn khách', 'Bình luận quảng cáo Giò chả bán sỉ → Messenger'], ['Giá trị', '830.000 VND'], ['Event ID', 'BS25119-PURCHASE (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện mua hàng' },
  },
  donHang: {
    ma: '#BS25119', sp: 'Combo 5kg', bien: 'Chả lụa, giò thủ, pate, thịt nguội · x1 combo', img: 'cha-lua', gia: '830.000đ',
    nv: { ten: 'Nhân viên Sáu', av: 'NS' },
    ten: 'Nguyễn Văn Tài', sdt: '0937254816', dc: '112 Quang Trung, P.10, Q. Gò Vấp, TP.HCM', gio: '11:02 · 26/11/2026',
  },
};
