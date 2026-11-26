/* Kịch bản video demo NGANG 16:9: HẠT GIỐNG, CÂY GIỐNG (nhóm thương mại điện tử), làm 26/11/2026 theo đồng nghiệp:
   "hạt giống cây giống (tư vấn, hỏi thông tin, báo giá và xin sđt và địa chỉ để chốt đơn)".
   Khác ngành nong-nghiep-tc (thuốc trừ sâu): ở đây bán hạt giống rau, hoa và cây giống ghép cho người trồng sân thượng, ban công.
   Mạch tmdt (mẫu nệm / trầm hương): 1 cảnh. Quảng cáo combo 10 gói hạt giống rau ăn lá 99K → 2 bình luận (chị Mai hỏi giá,
   anh Tuấn hỏi cây giống chanh) → trả lời "Mình check ib shop nha" → AI nhắn trước: giá + đúng ảnh quảng cáo + hỏi trồng ở đâu, nắng mấy tiếng
   → chị Mai trồng thùng xốp sân thượng, nắng chiều, muốn thêm cà chua bi → AI báo giá hạt cà chua bi, đất sạch, hỏi lấy mấy bao
   → khách nói 2 bao → AI tóm giá, xin SĐT + địa chỉ → im → gắn thẻ + bám đuổi 3 tin → khách gửi SĐT + địa chỉ nhưng thiếu tên người nhận
   → AI hỏi lại → tóm tắt đơn → Purchase → đơn tự động → nhân viên xác nhận → 5 sản phẩm giảm giá → Zalo 3 tin → tổng kết → logo.
   AI chỉ báo giá, gửi ảnh, hỏi số lượng, xin SĐT + địa chỉ; số bao đất do khách tự nói. Không hứa nảy mầm 100%, không hứa ngày ra trái.
   Không có tin báo giao hàng. Tên shop, giá, khách, SĐT, địa chỉ là dữ liệu minh họa. Ảnh: Unsplash (ảnh thật, không có nhãn hiệu). */
window.VN_KB = {
  ten: 'Hạt giống, cây giống video ngang',
  ketSub: 'Để AI tư vấn hạt giống, cây giống và chốt đơn cho bạn',
  shop: { ten: 'Vườn Mầm Xanh', av: 'VM', mau: '#15803D', sub: 'Thường trả lời ngay' },
  anh: {
    'rau-chau': '../assets/img/u/1688176939869-27718ebf6ad9_800x800.jpg',   // xà lách xanh, tím trong chậu gỗ (ảnh quảng cáo)
    'khay-uom': '../assets/img/u/1466692476868-aef1dfb1e735_800x800.jpg',   // khay ươm mầm
    'cay-con': '../assets/img/u/1647550232391-f758832be5c2_800x800.jpg',    // cây con trong khay ươm đen
    'mam': '../assets/img/u/1457530378978-8bac673b8062_800x800.jpg',        // mầm cây non cận cảnh
    'bau-uom': '../assets/img/u/1523348837708-15d4a09cfac2_800x800.jpg',    // cây con trong bầu nhựa đen
    'vuon-rau': '../assets/img/u/1591857177580-dc82b9ac4e1e_800x800.jpg',   // luống rau trong thùng gỗ
    'ca-chua': '../assets/img/u/1632770464350-e73ae4aaa11c_800x800.jpg',    // cà chua bi trồng chậu
    'ca-chua-2': '../assets/img/u/1758552219061-5148ccb5bc5d_800x800.jpg',  // chùm cà chua chín trên cây
    'ot-chau': '../assets/img/u/1637795257839-896afee861fd_800x800.jpg',    // chậu ớt nhiều trái
    'ot': '../assets/img/u/1792758783307-419e611b8469_800x800.jpg',         // cây ớt chỉ thiên
    'chanh': '../assets/img/u/1763066696319-d1093663bbd2_800x800.jpg',      // cây chanh ra trái
    'chanh-2': '../assets/img/u/1775731677272-6be17f76d396_800x800.jpg',    // cành chanh vàng
    'van-tho': '../assets/img/u/1620005807545-2e08850d6591_800x800.jpg',    // hoa vạn thọ cam
    'van-tho-2': '../assets/img/u/1442458017215-285b83f65851_800x800.jpg',  // luống vạn thọ nhìn từ trên
    'hoa-zinnia': '../assets/img/u/1771680615824-47282861544d_800x800.jpg', // vườn cúc ngũ sắc
    'dat': '../assets/img/u/1642952273588-ed6fa28870ac_800x800.jpg',        // nắm đất tơi trên tay
    'binh-tuoi': '../assets/img/u/1599277100479-3252d492a19a_800x800.jpg',  // bình tưới đang tưới
    'ban-cong': '../assets/img/u/1486484290742-0ce4eb743a34_800x800.jpg',   // ban công trồng cây
    'vuon-uom': '../assets/img/u/1625758474222-92183cb2c02c_800x800.jpg',   // cây giống trong bầu ở vườn ươm
    'trong-cay': '../assets/img/u/1779085031158-a2519daf9747_800x800.jpg',  // tay trồng cây con xuống đất
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= BÌNH LUẬN QUẢNG CÁO → INBOX (cảnh duy nhất) ================= */
    { k: 'canh', nhan: 'Bình luận quảng cáo → Inbox', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'rau-chau', nhan: 'MESSENGER', tieuDe: 'Combo hạt giống rau sân thượng · dễ trồng', nut: 'Gửi tin nhắn',
        text: 'COMBO 10 GÓI HẠT GIỐNG RAU ĂN LÁ 🌱 Cải ngọt, xà lách, rau muống, mồng tơi, cải bẹ xanh… hợp trồng thùng xốp, chậu ban công. Chỉ 99K, tặng kèm hướng dẫn ươm. Có sẵn cây giống chanh, ổi, bưởi ghép. #hatgiongrau #rausanthuong #caygiong',
      }, d: 1500 },
    { k: 'cap', e: 'Bình luận hỏi giá', t: 'Khách hỏi giá combo hạt giống dưới quảng cáo', s: 'Một khách khác hỏi có cây giống chanh không' },
    { k: 'cmt', i: 0, ten: 'Thanh Mai', av: 'TM', text: 'Combo 10 gói giá sao shop?' },
    { k: 'cmt', i: 1, ten: 'Anh Tuấn', av: 'AT', text: 'Có cây giống chanh ko shop?' },
    { k: 'cap', e: 'Trả lời cả 2 bình luận', t: 'Trả lời ngắn gọn, mời khách vào inbox', s: 'Báo giá chi tiết trong tin nhắn riêng' },
    { k: 'rep', i: 0, text: 'Mình check ib shop nha 💬' },
    { k: 'rep', i: 1, text: 'Mình check ib shop nha 💬' },
    { k: 'ms', ref: { loai: 'cmt', img: 'rau-chau', dong1: 'Bạn đã bình luận về quảng cáo của Vườn Mầm Xanh', dong2: '"Combo 10 gói giá sao shop?"' }, gio: '14:47' },
    { k: 'cap', e: 'AI nhắn trước', t: 'Inbox trước: báo giá, gửi đúng ảnh quảng cáo', s: 'Rồi hỏi chỗ trồng, nắng mấy tiếng' },
    { k: 'ai', text: 'Dạ chào chị Mai, combo 10 gói hạt giống rau ăn lá bên em giá **99.000đ**, tặng kèm hướng dẫn ươm ạ.' },
    { k: 'ai', img: 'rau-chau' },
    { k: 'ai', text: 'Chị định trồng **thùng xốp, chậu ban công** hay **đất vườn** ạ? Chỗ trồng có **nắng mấy tiếng** một ngày chị?' },
    { k: 'cap', e: 'Khách kể chỗ trồng', t: 'Thùng xốp sân thượng, nắng chiều', s: 'Khách muốn trồng thêm cà chua bi' },
    { k: 'kh', text: 'c trồng thùng xốp trên sân thượng, nắng chiều. muốn trồng thêm cà chua bi nữa' },
    { k: 'ai', text: 'Dạ sân thượng nắng chiều trồng rau ăn lá với cà chua bi đều hợp ạ. Hạt giống cà chua bi **25.000đ/gói**. Bên em có **đất sạch trộn sẵn** bao 20dm³ giá **65.000đ**, chị cần lấy **mấy bao** ạ?' },
    { k: 'cap', e: 'Khách chọn số lượng', t: 'Khách tự nói lấy mấy bao đất', s: 'AI ghi đúng đơn, xin SĐT, địa chỉ' },
    { k: 'kh', text: 'lấy 2 bao đất nha e' },
    { k: 'ai', text: 'Dạ em ghi cho chị:\n– Combo 10 gói hạt giống rau ăn lá: 99.000đ\n– 1 gói hạt giống cà chua bi: 25.000đ\n– 2 bao đất sạch trộn sẵn: 130.000đ\nTổng **254.000đ**, miễn phí giao đơn từ 200K. Chị gửi em **SĐT và địa chỉ** để em lên đơn nha.', d: 3200 },

    // Khách im sau khi được xin SĐT, địa chỉ → màn hình phụ: gắn thẻ (3 hashtag quảng cáo + thẻ từ cuộc chat), bám đuổi 3 tin
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Chưa gửi SĐT: Preny tự gắn thẻ khách', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi theo thẻ', t: '3 tin ngắn: 15 phút, 3 tiếng, 20 tiếng', s: 'Chỉ nói về đúng đơn hạt giống khách đã chọn' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T5 26/11/2026', d: 700 },
    { k: 'ai', text: 'Chị Mai ơi, em giữ cho chị **combo rau ăn lá, hạt cà chua bi và 2 bao đất** rồi ạ. Chị gửi em SĐT, địa chỉ để em giao nha 😊' },
    { k: 'p', a: 'r1', d: 900 },
    { k: 'time', nhan: '3 tiếng sau', gio: '17:49', ngay: 'T5 26/11/2026', d: 700 },
    { k: 'ai', text: 'Em gửi chị ảnh khay ươm và rau khách bên em trồng thùng xốp nha 🌱 Hạt rau ăn lá ngâm nước ấm rồi gieo, thường **3–5 ngày** là lên mầm.' },
    { k: 'ai', imgs: ['khay-uom', 'mam', 'vuon-rau'] },
    { k: 'p', a: 'r2', d: 900 },
    { k: 'time', nhan: '20 tiếng sau', gio: '10:49', ngay: 'T6 27/11/2026', d: 700 },
    { k: 'ai', text: 'Chị gửi **SĐT và địa chỉ** trước 12h là em giao ngày mai, **tặng chị thêm 1 gói hạt giống cúc ngũ sắc** để trồng chơi ạ 🌼' },
    { k: 'p', a: 'r3', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 3, khách gửi SĐT, địa chỉ', s: 'AI kiểm tra thông tin trước khi lên đơn' },
    { k: 'kh', text: '0937615284, 42 Lê Văn Sỹ, P.13, Q.3' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'cap', e: 'Kiểm tra dữ liệu', t: 'Thiếu tên người nhận: AI hỏi lại trước khi lên đơn' },
    { k: 'ai', text: 'Dạ chị cho em xin **tên người nhận** để bên giao hàng gọi đúng người nha 😊' },
    { k: 'kh', text: 'Nguyễn Thị Mai nha e' },
    { k: 'cap', e: 'Chốt đơn', t: 'Tự tổng hợp đơn: hạt giống, đất, quà tặng, SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ chị kiểm tra lại đơn giúp em nha:\n– Combo 10 gói hạt giống rau ăn lá\n– 1 gói hạt giống cà chua bi\n– 2 bao đất sạch trộn sẵn 20dm³\n– Tặng 1 gói hạt giống cúc ngũ sắc\n– Tổng: **254.000đ** (miễn phí giao)\n– Người nhận: Nguyễn Thị Mai · 0937615284\n– 42 Lê Văn Sỹ, P.13, Q.3, TP.HCM\nChị xác nhận giúp em đơn này nha.', nut: 'Quản lý đơn hàng', d: 3400 },
    { k: 'cap', e: 'Xong', t: 'Khách chỉ cần nói "Ok e"' },
    { k: 'kh', text: 'Ok e' },
    { k: 'ai', text: 'Dạ em lên đơn, giao hạt giống cho chị ngày mai nha 🌱', d: 1300 },

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
    { k: 'ai', text: 'Dạ cảm ơn chị Mai nha 💛 Đơn đã được xác nhận, bên em giao ngày mai. Vườn đang giảm giá mấy món khách trồng sân thượng hay lấy thêm, chị xem thử nha:' },
    { k: 'car', sp: [
        { img: 'chanh', ten: 'Cây giống chanh không hạt (ghép)', gia: '135.000đ', cu: '150.000đ', giam: '-10%' },
        { img: 'ot', ten: 'Cây giống ớt chỉ thiên (bầu)', gia: '18.000đ', cu: '20.000đ', giam: '-10%' },
        { img: 'van-tho', ten: 'Cây giống vạn thọ (bầu)', gia: '9.000đ', cu: '10.000đ', giam: '-10%' },
        { img: 'cay-con', ten: 'Khay ươm hạt 50 lỗ', gia: '27.000đ', cu: '30.000đ', giam: '-10%' },
        { img: 'binh-tuoi', ten: 'Bình tưới 5 lít vòi sen', gia: '117.000đ', cu: '130.000đ', giam: '-10%' },
      ], d: 5200 },

    // Chăm sóc sau bán qua Zalo
    { k: 'zalo', gio: '19:30', ngay: 'T2 30/11/2026', chip: '3 ngày sau khi nhận · khách đã gieo hạt', d: 1500 },
    { k: 'cap', e: 'Chăm sóc sau bán qua Zalo', t: 'Khách gieo hạt: AI hỏi lên mầm chưa', s: 'Dặn cách ươm, xin đánh giá trong tin Zalo OA' },
    { k: 'zns', zns: {
        img: 'khay-uom', tieuDe: 'Chị Mai ơi, hạt gieo lên mầm chưa ạ?',
        noiDung: 'Vườn Mầm Xanh cảm ơn chị đã nhận đơn **#VM26127**. Chị lưu ý giúp em khi ươm nha:',
        dong: ['Ngâm hạt **nước ấm 2–3 tiếng** trước khi gieo', 'Giữ đất **ẩm, không đọng nước**', 'Cây có **3–4 lá thật** thì tỉa bớt cho thưa'],
        nut: 'Nhắn kỹ thuật vườn',
      }, d: 5000 },
    { k: 'cap', e: 'ZBS · Sản phẩm bán chạy', t: '1 tuần sau: gửi sản phẩm bán chạy qua Zalo', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'T2 07/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['chanh-2', 'ot-chau', 'ca-chua-2', 'bau-uom'], nhan: 'TOP BÁN CHẠY TUẦN NÀY', mau: '#F97316',
        tieuDe: '🔥 Top bán chạy tuần này tại Vườn Mầm Xanh',
        noiDung: '**Cây giống chanh ghép**, **cây giống ớt chỉ thiên** và **hạt giống cà chua bi** đang được khách trồng sân thượng chọn nhiều nhất tuần qua.',
        nut: 'Xem ngay',
      }, d: 4600 },
    { k: 'cap', e: 'ZBS · Cây giống hoa Tết', t: '1 tuần sau nữa: ưu đãi cây giống hoa Tết', s: 'Kéo khách quay lại mua tiếp, không cần khách nhắn' },
    { k: 'zstamp', gio: '19:30', ngay: 'T2 14/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['van-tho', 'van-tho-2', 'hoa-zinnia', 'ban-cong'], nhan: 'CÂY GIỐNG HOA TẾT',
        tieuDe: 'Cây giống hoa Tết giảm 15%',
        noiDung: 'Cây giống **vạn thọ, cúc ngũ sắc** ươm sẵn trong bầu, trồng sớm để chuẩn bị hoa chưng Tết. Giảm **15%** cho khách đã mua, giao miễn phí đơn từ 200K. Áp dụng đến hết 31/12/2026.',
        nut: 'Xem ưu đãi',
      }, d: 4800 },

    { k: 'tongket', d: 8500 },
    { k: 'outro', d: 5200 },
  ],
  // Slide tổng kết cuối video (theo slide "Chốt lại 5 ô" nhóm thương mại điện tử; bám đuổi = 5 tin trong 7 ngày)
  tongKet: { tieuDe: 'Quy trình Preny AI giúp', em: 'tăng tỷ lệ chốt đơn', cot: [
    { ten: 'Khách hàng', icon: 'users', dong: ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến'] },
    { ten: 'AI Chatbot', icon: 'bot', dong: ['Phản hồi nhanh tức thì', 'Hỏi chỗ trồng, báo giá đúng nhu cầu', 'Lấy thông tin và chốt đơn'] },
    { ten: 'Bám đuổi', icon: 'bell', dong: ['Gửi 5 tin nhắn trong 7 ngày để bám đuổi khách hàng'] },
    { ten: 'Chốt đơn', icon: 'check', dong: ['Lên đơn', 'Gửi sự kiện mua hàng lên Facebook'] },
    { ten: 'Mua lại', icon: 'refresh', dong: ['Tự động gửi 1 tin nhắn mỗi tuần qua FB và Zalo', 'Sản phẩm bán chạy, giảm giá, sản phẩm mới'] },
  ] },
  panels: {
    tag: { av: 'TM', ten: 'Nguyễn Thanh Mai', sub: 'Messenger · bình luận quảng cáo Combo hạt giống rau sân thượng',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#hatgiongrau', 'qt hot'], ['#rausanthuong', 'qt hot'], ['#caygiong', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#ComboRau_CaChuaBi', 'qt']]]],
      im: 'Khách im từ 14:51, sau khi được xin SĐT, địa chỉ',
      rule: { lb: 'Bám đuổi theo thẻ #rausanthuong', tieuDe: '3 tin ngắn về đúng đơn hạt giống khách đã chọn',
              dong: [['15 phút', 'Đã giữ combo rau, cà chua bi, 2 bao đất'], ['3 tiếng', 'Gửi ảnh khay ươm, rau khách trồng'], ['20 tiếng', 'Gửi SĐT trước 12h, tặng hạt hoa']] },
      reply: 'Khách gửi SĐT, địa chỉ · dừng bám đuổi' },
    capi: { tieuDe: 'Gửi đơn hàng cho Facebook', event: 'Purchase', nhan: 'SỰ KIỆN MUA HÀNG', giaTri: '254.000đ', pk: 'Purchase · 254.000đ',
      dong: [['Đơn hàng', '#VM26127 · combo hạt giống rau + cà chua bi'], ['Nguồn khách', 'Bình luận quảng cáo Combo hạt giống → Messenger'], ['Giá trị', '254.000 VND'], ['Event ID', 'VM26127-PURCHASE (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện mua hàng' },
  },
  donHang: {
    ma: '#VM26127', sp: 'Combo hạt giống rau ăn lá + cà chua bi', bien: '10 gói rau · 1 gói cà chua bi · 2 bao đất · tặng hạt hoa', img: 'rau-chau', gia: '254.000đ',
    nv: { ten: 'Nhân viên Thảo', av: 'NT' },
    ten: 'Nguyễn Thị Mai', sdt: '0937615284', dc: '42 Lê Văn Sỹ, P.13, Q.3, TP.HCM', gio: '11:04 · 27/11/2026',
  },
};
