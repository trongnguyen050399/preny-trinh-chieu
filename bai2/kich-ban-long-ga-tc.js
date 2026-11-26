/* Kịch bản video demo NGANG 16:9: LỒNG GÀ (lồng sắt sơn tĩnh điện, lồng gà đẻ, chuồng thả vườn), nhóm thương mại điện tử.
   Làm 26/11/2026 theo đồng nghiệp: "bán lồng gà hỏi kích thước dài rộng cao, tư vấn báo giá, mời xem, khách hỏi muốn đặt gửi luôn,
   ai xin sđt và địa chỉ". Mẫu: kich-ban-nem-tc.js (cùng mạch hỏi kích thước → báo giá → mời xem → khách xa muốn gửi luôn).
   1 cảnh: quảng cáo 3 hashtag, 2 bình luận (hỏi giá lồng nhốt 20 con, hỏi có giao Long An) → trả lời "Mình check ib shop nha"
   → AI nhắn trước giá từ + đúng ảnh quảng cáo, hỏi dài, rộng, cao → khách tự nói 2m x 1m x 1m2 → báo giá → mời ghé xưởng xem lồng mẫu
   → khách ở Đức Hòa xa, muốn gửi luôn → xin SĐT, địa chỉ → im → gắn thẻ + bám đuổi 3 tin → khách gửi SĐT, địa chỉ nhưng thiếu tên
   người nhận → AI hỏi lại → tóm tắt đơn → Purchase → đơn tự động → nhân viên xác nhận → 5 sản phẩm giảm giá → Zalo 3 tin → tổng kết.
   AI chỉ báo giá, gửi ảnh, hỏi kích thước, xin SĐT + địa chỉ; kích thước do khách tự nói, AI không tự tính lồng cho mấy con.
   Không hứa "không bao giờ gỉ", không hứa gà không bệnh. Không có tin báo giao hàng. Không phải lồng gà chọi.
   Tên xưởng, giá, khách, SĐT, địa chỉ là dữ liệu minh họa. Ảnh: Unsplash (ảnh thật, không phải hàng của xưởng). */
window.VN_KB = {
  ten: 'Lồng gà video ngang',
  ketSub: 'Để AI hỏi kích thước, báo giá và chốt đơn lồng gà giao tận nơi',
  shop: { ten: 'Lồng Gà Thành Lợi', av: 'TL', mau: '#B45309', sub: 'Thường trả lời ngay' },
  anh: {
    'long': '../assets/img/u/1781195029229-a8c1cf552831_800x800.jpg',        // gà trong lồng sắt (ảnh quảng cáo)
    'long-de': '../assets/img/u/1541329444622-e85b1a8980df_800x800.jpg',     // dãy lồng gà đẻ
    'long-luoi': '../assets/img/u/1570858556974-71401b1e08d5_800x800.jpg',   // lồng lưới ô vuông đặt trên cỏ
    'ga-luoi': '../assets/img/u/1761284827145-06ea2fe270bd_800x800.jpg',     // gà sau lưới lồng
    'chuong-go': '../assets/img/u/1615018997980-610ffc167e1b_800x800.jpg',   // chuồng gỗ mái nghiêng
    'ga-san': '../assets/img/u/1441122456239-401e92b73c65_800x800.jpg',      // đàn gà trong sân
    'ga-chuong': '../assets/img/u/1553531009-c4605f302b47_800x800.jpg',      // gà ra cửa chuồng
    'trung': '../assets/img/u/1598965675045-45c5e72c7d05_800x800.jpg',       // trứng gà trên rơm
    'o-trung': '../assets/img/u/1624905916901-61c7e2782998_800x800.jpg',     // ổ trứng trong thau
    'long-um': '../assets/img/u/1694854038360-56b29a16fb0c_800x800.jpg',     // khu úm gà con có đèn, máng
    'binh-nuoc': '../assets/img/u/1778715684164-53d224e872b5_800x800.jpg',   // gà uống ở bình nước tự động
    'mang-an': '../assets/img/u/1788350168791-5a8aaff32093_800x800.jpg',     // gà con ăn ở máng nhựa
  },
  beats: [
    { k: 'intro', d: 4200 },
    /* ================= BÌNH LUẬN QUẢNG CÁO → INBOX (cảnh duy nhất) ================= */
    { k: 'canh', nhan: 'Bình luận quảng cáo → Inbox', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'long', nhan: 'MESSENGER', tieuDe: 'Lồng gà sắt sơn tĩnh điện · làm theo kích thước', nut: 'Gửi tin nhắn',
        text: 'LỒNG GÀ SẮT SƠN TĨNH ĐIỆN 🐔 Làm theo đúng kích thước dài, rộng, cao nhà mình cần, có cửa và khay hứng phân. Chỉ từ 890K, giao tận nơi các tỉnh miền Nam. Xưởng Hóc Môn mời ghé xem lồng mẫu. #longga #longgade #longsatsontinhdien',
      }, d: 1500 },
    { k: 'cap', e: 'Bình luận hỏi giá', t: 'Khách hỏi giá lồng nhốt gà dưới quảng cáo', s: 'Một khách khác hỏi có giao Long An không' },
    { k: 'cmt', i: 0, ten: 'Minh Tuấn', av: 'MT', text: 'Lồng nhốt chục con gà giá sao shop?' },
    { k: 'cmt', i: 1, ten: 'Thanh Mai', av: 'TM', text: 'Có giao Long An ko shop?' },
    { k: 'cap', e: 'Trả lời cả 2 bình luận', t: 'Trả lời ngắn gọn, mời khách vào inbox', s: 'Báo giá chi tiết trong tin nhắn riêng' },
    { k: 'rep', i: 0, text: 'Mình check ib shop nha 💬' },
    { k: 'rep', i: 1, text: 'Mình check ib shop nha 💬' },
    { k: 'ms', ref: { loai: 'cmt', img: 'long', dong1: 'Bạn đã bình luận về quảng cáo của Lồng Gà Thành Lợi', dong2: '"Lồng nhốt chục con gà giá sao shop?"' }, gio: '14:47' },
    { k: 'cap', e: 'AI nhắn trước', t: 'Inbox trước: giá từ, gửi đúng ảnh quảng cáo', s: 'Rồi hỏi đúng kích thước khách cần' },
    { k: 'ai', text: 'Dạ chào anh Tuấn, lồng gà sắt sơn tĩnh điện bên em giá **từ 890.000đ**, tùy kích thước anh cần ạ.' },
    { k: 'ai', img: 'long' },
    { k: 'ai', text: 'Anh muốn lồng **dài, rộng, cao bao nhiêu** để em báo đúng giá ạ?' },
    { k: 'cap', e: 'Khách báo kích thước', t: 'Khách tự nói dài, rộng, cao và chỗ đặt lồng', s: 'AI báo giá đúng kích thước khách cần' },
    { k: 'kh', text: 'a tính làm dài 2m rộng 1m cao 1m2, để sau vườn nhốt ban đêm' },
    { k: 'ai', text: 'Dạ lồng **2m x 1m x 1m2** giá **2.350.000đ** ạ. Khung sắt hộp sơn tĩnh điện, lưới ô 2,5cm, có 2 cửa và khay hứng phân kéo ra được.' },
    { k: 'cap', e: 'Mời ghé xem lồng mẫu', t: 'AI mời khách qua xưởng xem lồng thật trước' },
    { k: 'ai', text: 'Anh rảnh thì ghé xưởng **88 Đặng Thúc Vịnh, Hóc Môn** xem lồng mẫu cho chắc nha, bên em làm việc **7h – 18h** mỗi ngày ạ 😊' },
    { k: 'cap', e: 'Khách muốn đặt luôn', t: 'Nhà xa: khách muốn đặt gửi về nhà', s: 'AI chốt đúng kích thước, xin SĐT, địa chỉ' },
    { k: 'kh', text: 'nhà a ở Đức Hòa, Long An, lên xưởng ko tiện. đặt gửi luôn đc ko e?' },
    { k: 'ai', text: 'Dạ được ạ. Em ghi **lồng 2m x 1m x 1m2**, **2.350.000đ**, giao miễn phí về Đức Hòa, lồng tháo rời kèm ốc vít và video hướng dẫn lắp. Anh kiểm tra hàng rồi mới thanh toán. Anh gửi em **SĐT và địa chỉ** để em lên đơn nha.', d: 3400 },
    // Khách im sau khi được xin SĐT, địa chỉ → màn hình phụ: gắn thẻ (3 hashtag quảng cáo + thẻ từ cuộc chat), bám đuổi 3 tin
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Chưa gửi SĐT: Preny tự gắn thẻ khách', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi theo thẻ', t: '3 tin ngắn: 15 phút, 3 tiếng, 20 tiếng', s: 'Chỉ nói về đúng kích thước lồng khách đã chọn' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T5 26/11/2026', d: 700 },
    { k: 'ai', text: 'Anh Tuấn ơi, em giữ lịch làm cho anh **lồng 2m x 1m x 1m2** rồi ạ. Anh gửi em SĐT, địa chỉ để em xếp xe giao nha 😊' },
    { k: 'p', a: 'r1', d: 900 },
    { k: 'time', nhan: '3 tiếng sau', gio: '17:49', ngay: 'T5 26/11/2026', d: 700 },
    { k: 'ai', text: 'Em gửi anh ảnh lồng thật khách bên em đã lắp nha 🐔 Lưới ô nhỏ, gà không chui ra được, khay phân kéo ra rửa nhanh.' },
    { k: 'ai', imgs: ['long-luoi', 'long-de', 'ga-chuong'] },
    { k: 'p', a: 'r2', d: 900 },
    { k: 'time', nhan: '20 tiếng sau', gio: '10:49', ngay: 'T6 27/11/2026', d: 700 },
    { k: 'ai', text: 'Anh gửi **SĐT và địa chỉ** trước 12h là em giao lồng ngày mai, **tặng anh 2 máng ăn** gắn sẵn lên lồng ạ 🎁' },
    { k: 'p', a: 'r3', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 3, khách gửi SĐT, địa chỉ', s: 'AI kiểm tra thông tin trước khi lên đơn' },
    { k: 'kh', text: '0937216458, ấp Bình Tiền 2, xã Đức Hòa Hạ, Đức Hòa, Long An. ba a ở nhà nhận' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'cap', e: 'Kiểm tra dữ liệu', t: 'Thiếu tên người nhận: AI hỏi lại trước khi lên đơn' },
    { k: 'ai', text: 'Dạ anh cho em xin **tên người nhận** để tài xế gọi đúng người khi tới nơi nha 😊' },
    { k: 'kh', text: 'ghi Nguyễn Văn Sáu nha e' },
    { k: 'cap', e: 'Chốt đơn', t: 'Tự tổng hợp đơn: kích thước, quà tặng, SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ anh kiểm tra lại đơn giúp em nha:\n– Lồng gà sắt sơn tĩnh điện 2m x 1m x 1m2\n– Tặng 2 máng ăn\n– Tổng: **2.350.000đ** (miễn phí giao)\n– Người nhận: Nguyễn Văn Sáu · 0937216458\n– Ấp Bình Tiền 2, xã Đức Hòa Hạ, Đức Hòa, Long An\nAnh xác nhận giúp em đơn này nha.', nut: 'Quản lý đơn hàng', d: 3400 },
    { k: 'cap', e: 'Xong', t: 'Khách chỉ cần nói "Ok e"' },
    { k: 'kh', text: 'Ok e' },
    { k: 'ai', text: 'Dạ em lên đơn, giao lồng cho anh ngày mai nha 🐔', d: 1300 },
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
    { k: 'ai', text: 'Dạ cảm ơn anh Tuấn nha 💛 Đơn đã được xác nhận, bên em giao lồng ngày mai. Xưởng đang giảm giá mấy món khách hay lấy kèm lồng, anh xem thử nha:' },
    { k: 'car', sp: [
        { img: 'binh-nuoc', ten: 'Bình nước uống tự động 8 lít', gia: '162.000đ', cu: '180.000đ', giam: '-10%' },
        { img: 'mang-an', ten: 'Máng ăn nhựa dài 50cm', gia: '45.000đ', cu: '50.000đ', giam: '-10%' },
        { img: 'long-um', ten: 'Lồng úm gà con kèm đèn sưởi', gia: '765.000đ', cu: '850.000đ', giam: '-10%' },
        { img: 'ga-luoi', ten: 'Lưới rào ô 2,5cm cuộn 10m', gia: '297.000đ', cu: '330.000đ', giam: '-10%' },
        { img: 'o-trung', ten: 'Ổ đẻ trứng gắn lồng', gia: '108.000đ', cu: '120.000đ', giam: '-10%' },
      ], d: 5200 },
    // Chăm sóc sau bán qua Zalo
    { k: 'zalo', gio: '19:30', ngay: 'T2 30/11/2026', chip: '3 ngày sau khi nhận · khách đã lắp lồng', d: 1500 },
    { k: 'cap', e: 'Chăm sóc sau bán qua Zalo', t: 'Khách nhận lồng: AI hỏi lắp xong dùng thấy sao', s: 'Dặn cách dùng cho bền, xin đánh giá trong tin Zalo OA' },
    { k: 'zns', zns: {
        img: 'ga-chuong', tieuDe: 'Anh Tuấn ơi, lồng mới lắp dùng ổn không ạ?',
        noiDung: 'Lồng Gà Thành Lợi cảm ơn anh đã nhận đơn **#TL26127**. Anh lưu ý giúp em vài điều cho lồng bền lâu nha:',
        dong: ['Siết lại **ốc vít** sau 1 tuần sử dụng', 'Rửa **khay hứng phân** mỗi ngày cho lồng khô, sạch', 'Đặt lồng dưới **mái che**, tránh mưa nắng trực tiếp'],
        nut: 'Đánh giá sản phẩm',
      }, d: 5000 },
    { k: 'cap', e: 'ZBS · Sản phẩm bán chạy', t: '1 tuần sau: gửi sản phẩm bán chạy qua Zalo', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'T2 07/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['binh-nuoc', 'mang-an', 'long-de', 'o-trung'], nhan: 'TOP BÁN CHẠY TUẦN NÀY', mau: '#F97316',
        tieuDe: '🔥 Top bán chạy tuần này tại Lồng Gà Thành Lợi',
        noiDung: '**Bình nước uống tự động**, **máng ăn dài** và **lồng gà đẻ 2 tầng** đang được khách chọn nhiều nhất tuần qua.',
        nut: 'Xem ngay',
      }, d: 4600 },
    { k: 'cap', e: 'ZBS · Mùa nuôi gà Tết', t: '1 tuần sau nữa: ưu đãi lồng úm gà con', s: 'Kéo khách quay lại mua tiếp, không cần khách nhắn' },
    { k: 'zstamp', gio: '19:30', ngay: 'T2 14/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['long-um', 'mang-an', 'ga-san', 'trung'], nhan: 'MÙA NUÔI GÀ TẾT',
        tieuDe: 'Lồng úm gà con giảm 15% cho khách quen',
        noiDung: 'Lồng úm có sẵn đèn sưởi, máng ăn, máng uống, giảm **15%** cho khách đã mua lồng, giao miễn phí. Áp dụng đến hết 20/01/2027.',
        nut: 'Xem ưu đãi',
      }, d: 4800 },
    { k: 'tongket', d: 8500 },
    { k: 'outro', d: 5200 },
  ],
  // Slide tổng kết cuối video (theo slide "Chốt lại 5 ô" nhóm thương mại điện tử; bám đuổi = 5 tin trong 7 ngày)
  tongKet: { tieuDe: 'Quy trình Preny AI giúp', em: 'tăng tỷ lệ chốt đơn', cot: [
    { ten: 'Khách hàng', icon: 'users', dong: ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến'] },
    { ten: 'AI Chatbot', icon: 'bot', dong: ['Phản hồi nhanh tức thì', 'Hỏi kích thước, báo giá, mời ghé xưởng', 'Khách ở xa: lấy SĐT, địa chỉ, chốt đơn giao'] },
    { ten: 'Bám đuổi', icon: 'bell', dong: ['Gửi 5 tin nhắn trong 7 ngày để bám đuổi khách hàng'] },
    { ten: 'Chốt đơn', icon: 'check', dong: ['Lên đơn', 'Gửi sự kiện mua hàng lên Facebook'] },
    { ten: 'Mua lại', icon: 'refresh', dong: ['Tự động gửi 1 tin nhắn mỗi tuần qua FB và Zalo', 'Sản phẩm bán chạy, giảm giá, sản phẩm mới'] },
  ] },
  panels: {
    tag: { av: 'MT', ten: 'Trần Minh Tuấn', sub: 'Messenger · bình luận quảng cáo Lồng gà sắt sơn tĩnh điện',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#longga', 'qt hot'], ['#longgade', 'qt hot'], ['#longsatsontinhdien', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#2mx1mx1m2', 'qt']]]],
      im: 'Khách im từ 14:50, sau khi được xin SĐT, địa chỉ',
      rule: { lb: 'Bám đuổi theo thẻ #longga', tieuDe: '3 tin ngắn về đúng kích thước lồng khách đã chọn',
              dong: [['15 phút', 'Đã giữ lịch làm lồng 2m x 1m x 1m2'], ['3 tiếng', 'Gửi ảnh lồng thật khách đã lắp'], ['20 tiếng', 'Gửi SĐT trước 12h, tặng 2 máng ăn']] },
      reply: 'Khách gửi SĐT, địa chỉ · dừng bám đuổi' },
    capi: { tieuDe: 'Gửi đơn hàng cho Facebook', event: 'Purchase', nhan: 'SỰ KIỆN MUA HÀNG', giaTri: '2.350.000đ', pk: 'Purchase · 2.350.000đ',
      dong: [['Đơn hàng', '#TL26127 · lồng gà 2m x 1m x 1m2'], ['Nguồn khách', 'Bình luận quảng cáo Lồng gà sắt → Messenger'], ['Giá trị', '2.350.000 VND'], ['Event ID', 'TL26127-PURCHASE (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện mua hàng' },
  },
  donHang: {
    ma: '#TL26127', sp: 'Lồng gà sắt sơn tĩnh điện', bien: '2m x 1m x 1m2 · x1 · tặng 2 máng ăn', img: 'long', gia: '2.350.000đ',
    nv: { ten: 'Nhân viên Hậu', av: 'NH' },
    ten: 'Nguyễn Văn Sáu', sdt: '0937216458', dc: 'Ấp Bình Tiền 2, xã Đức Hòa Hạ, huyện Đức Hòa, Long An', gio: '11:04 · 27/11/2026',
  },
};
