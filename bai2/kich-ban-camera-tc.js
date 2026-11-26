/* Kịch bản video demo NGANG 16:9: CAMERA AN NINH (camera wifi), làm 26/11/2026 theo người dùng:
   "làm ngành camera, làm giống case đt hồi sáng mời người dùng lên cửa hàng. nếu khách hàng họ muốn giao luôn,
   cho AI chatbot xin sđt và địa chỉ để chốt đơn giao luôn nha".
   Mở đầu giống cửa hàng điện thoại (1 cảnh, không có bình luận: khách bấm "Gửi tin nhắn" từ quảng cáo và hỏi trước),
   AI báo giá + gửi đúng ảnh quảng cáo → hỏi số lượng, chỗ gắn có wifi → mời ghé showroom xem hình ngày/đêm thực tế
   → khách ở xa muốn giao luôn → AI chốt đúng số lượng khách nói, xin SĐT + địa chỉ → khách im → gắn thẻ + bám đuổi 3 tin
   → khách gửi thông tin, thiếu phường → AI hỏi lại → tóm tắt đơn → Purchase → đơn tự động → nhân viên xác nhận
   → 5 sản phẩm giảm giá → Zalo 3 tin → tổng kết → logo.
   AI chỉ báo giá, gửi ảnh, hỏi số lượng, xin SĐT + địa chỉ; số camera do khách tự nói, AI không tự tính cần mấy mắt.
   Không hứa "chống trộm 100%", không hứa nhìn rõ biển số xa. Không có tin báo giao hàng, không nhắc trước ngày giao.
   Tên cửa hàng, giá, khách, SĐT, địa chỉ là dữ liệu minh họa. Ảnh: Unsplash (ảnh thật, không có logo hãng). */
window.VN_KB = {
  ten: 'Camera an ninh video ngang',
  ketSub: 'Để AI tư vấn, mời khách ghé cửa hàng hoặc chốt đơn giao tận nhà',
  shop: { ten: 'Camera Gia An', av: 'GA', mau: '#0F766E', sub: 'Thường trả lời ngay' },
  anh: {
    'cam': '../assets/img/u/1549109926-58f039549485_800x800.jpg',            // camera wifi 2 râu gắn tường (ảnh quảng cáo)
    'cam-hien': '../assets/img/u/1621886943381-cb97cc18b17a_800x800.jpg',    // camera gắn dưới hiên nhà
    'cam-dome': '../assets/img/u/1614469422872-6e09d2569cc0_800x800.jpg',    // camera bán cầu trên tường gạch
    'cam-xanh': '../assets/img/u/1585206031650-9e9a7c87dcfe_800x800.jpg',    // camera thân nhỏ trên tường xanh
    'cam-than': '../assets/img/u/1773767797729-f3ae24353399_800x800.jpg',    // camera thân có đèn trợ sáng
    'cam-tuong': '../assets/img/u/1496368077930-c1e31b4e5b44_800x800.jpg',   // camera thân trên tường xám
    'cam-pin': '../assets/img/u/1795575634292-4ec25d657087_800x800.jpg',     // camera dùng pin màu đen
    'trong-nha': '../assets/img/u/1715869618915-a7bf6608d4c3_800x800.jpg',   // camera trong nhà xoay 360
    'trong-nha-2': '../assets/img/u/1728971975421-50f3dc9663a4_800x800.jpg', // camera trong nhà trên bàn
    'xem-app': '../assets/img/u/1715869428589-366729e7fdcd_800x800.jpg',     // camera trong nhà cạnh điện thoại
    'bo-smart': '../assets/img/u/1730967844913-29eb5cae5f34_800x800.jpg',    // camera, cảm biến, ổ cắm thông minh
    'wifi': '../assets/img/u/1606904825846-647eb07f5be2_800x800.jpg',        // bộ phát wifi
    'lap-dat': '../assets/img/u/1676630656246-3047520adfdf_800x800.jpg',     // thợ lắp camera
    'cua-hang': '../assets/img/u/1697545806136-92d30cb7081e_800x800.jpg',    // tư vấn tại quầy cửa hàng
    'cong-nha': '../assets/img/u/1645005049035-c35644b627ba_800x800.jpg',    // cổng nhà, lối xe vào
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= QUẢNG CÁO → MESSENGER (1 cảnh, không có bình luận) ================= */
    { k: 'canh', nhan: 'Khách từ quảng cáo → Messenger', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'cam', nhan: 'MESSENGER', tieuDe: 'Camera wifi ngoài trời 2K · có màu ban đêm', nut: 'Gửi tin nhắn',
        text: 'CAMERA WIFI NGOÀI TRỜI 2K 📷 Có màu ban đêm, đàm thoại 2 chiều, báo động về điện thoại khi có người lạ. Chỉ từ 890K, bảo hành 24 tháng, giao toàn quốc. Showroom Gò Vấp mời ghé xem hình thực tế. #camerawifi #camerangoaitroi #camera2k',
      }, d: 1500 },
    { k: 'cap', e: 'Quảng cáo Facebook', t: 'Khách bấm "Gửi tin nhắn" từ quảng cáo', s: 'Hỏi gì, AI trả lời ngay lập tức' },
    { k: 'tap', d: 1100 },
    { k: 'ms', ref: { loai: 'ad', img: 'cam', dong1: 'Hùng Phạm đã trả lời một quảng cáo', dong2: 'Camera wifi ngoài trời 2K · có màu ban đêm' }, gio: '14:47', d: 900 },
    { k: 'kh', text: 'camera ngoài trời giá sao e? a cần gắn trước cổng với ngoài sân' },
    { k: 'cap', e: 'Khách hỏi giá', t: 'AI gửi đúng ảnh trên quảng cáo kèm giá', s: 'Rồi hỏi số lượng, chỗ gắn có wifi không' },
    { k: 'ai', text: 'Dạ chào anh Hùng, camera wifi ngoài trời 2K bên em giá **890.000đ/cái**, bảo hành **24 tháng** ạ.' },
    { k: 'ai', img: 'cam' },
    { k: 'ai', text: 'Anh cần gắn **mấy cái** và chỗ gắn có **sóng wifi** tới không ạ?' },
    { k: 'kh', text: '2 cái, wifi nhà a có tới cổng. ban đêm coi có rõ ko e' },
    { k: 'ai', text: 'Dạ ban đêm camera tự bật đèn, xem **có màu trong khoảng 10m** ạ. 2 cái là **1.780.000đ**, đã có chân đế, vít và nguồn.' },
    { k: 'cap', e: 'Mời ghé cửa hàng', t: 'AI mời khách qua showroom xem hình thực tế', s: 'Xem tận mắt hình ban ngày, ban đêm' },
    { k: 'ai', text: 'Anh rảnh thì ghé showroom **312 Quang Trung, Gò Vấp** xem hình ngày và đêm trên màn hình thực tế nha, bên em mở cửa **8h – 21h** mỗi ngày ạ 😊' },
    { k: 'cap', e: 'Khách muốn giao luôn', t: 'Nhà xa: khách muốn đặt giao về nhà', s: 'AI chốt đúng số lượng, xin SĐT, địa chỉ' },
    { k: 'kh', text: 'a ở Biên Hòa, xa quá. gửi về luôn đc ko, a tự lắp đc ko e?' },
    { k: 'ai', text: 'Dạ được ạ. Camera wifi **tự lắp được**, bên em gửi kèm video hướng dẫn cài app, vướng chỗ nào kỹ thuật gọi hỗ trợ ngay. Em ghi **2 camera ngoài trời 2K**, **1.780.000đ**, giao miễn phí, anh kiểm tra hàng rồi mới thanh toán. Anh gửi em **SĐT và địa chỉ** để em lên đơn nha.', d: 3400 },

    // Khách im sau khi được xin SĐT, địa chỉ → màn hình phụ: gắn thẻ (3 hashtag quảng cáo + thẻ từ cuộc chat), bám đuổi 3 tin
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Chưa gửi SĐT: Preny tự gắn thẻ khách', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi theo thẻ', t: '3 tin ngắn: 15 phút, 3 tiếng, 20 tiếng', s: 'Chỉ nói về đúng 2 camera khách đã chọn' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T5 26/11/2026', d: 700 },
    { k: 'ai', text: 'Anh Hùng ơi, em giữ cho anh **2 camera ngoài trời 2K** rồi ạ, kho còn sẵn. Anh gửi em SĐT, địa chỉ để em xếp giao nha 😊' },
    { k: 'p', a: 'r1', d: 900 },
    { k: 'time', nhan: '3 tiếng sau', gio: '17:49', ngay: 'T5 26/11/2026', d: 700 },
    { k: 'ai', text: 'Em gửi anh ảnh camera khách bên em đã gắn ở cổng, dưới hiên và ngoài sân nha 📷 Vỏ chống mưa nắng, gắn ngoài trời thoải mái.' },
    { k: 'ai', imgs: ['cam-hien', 'cong-nha', 'cam-dome'] },
    { k: 'p', a: 'r2', d: 900 },
    { k: 'time', nhan: '20 tiếng sau', gio: '10:49', ngay: 'T6 27/11/2026', d: 700 },
    { k: 'ai', text: 'Anh gửi **SĐT và địa chỉ** trước 12h là em giao camera ngày mai, **tặng anh 2 thẻ nhớ 64GB** để lưu lại hình ạ 🎁' },
    { k: 'p', a: 'r3', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 3, khách gửi SĐT, địa chỉ', s: 'AI kiểm tra thông tin trước khi lên đơn' },
    { k: 'kh', text: 'Hùng 0913482576, 18 Phạm Văn Thuận, Biên Hòa' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'cap', e: 'Kiểm tra dữ liệu', t: 'Thiếu phường: AI hỏi lại trước khi lên đơn' },
    { k: 'ai', text: 'Dạ anh cho em xin thêm **phường** để bên giao hàng tới đúng nhà nha 😊' },
    { k: 'kh', text: 'P. Tân Mai nha e' },
    { k: 'cap', e: 'Chốt đơn', t: 'Tự tổng hợp đơn: số lượng, quà tặng, SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ anh kiểm tra lại đơn giúp em nha:\n– Camera wifi ngoài trời 2K x 2\n– Tặng 2 thẻ nhớ 64GB\n– Tổng: **1.780.000đ** (miễn phí giao)\n– Người nhận: Hùng · 0913482576\n– 18 Phạm Văn Thuận, P. Tân Mai, Biên Hòa, Đồng Nai\nAnh xác nhận giúp em đơn này nha.', nut: 'Quản lý đơn hàng', d: 3400 },
    { k: 'cap', e: 'Xong', t: 'Khách chỉ cần nói "Ok e"' },
    { k: 'kh', text: 'Ok e' },
    { k: 'ai', text: 'Dạ em lên đơn, giao camera cho anh ngày mai nha 📷', d: 1300 },

    // Chốt đơn → màn hình phụ: gửi đơn hàng cho Facebook → đơn tự động → nhân viên xác nhận
    { k: 'cap', e: 'Gửi đơn về Facebook', t: 'Sự kiện mua hàng gửi ngay lên Facebook', s: 'Quảng cáo tối ưu theo đơn thật' },
    { k: 'panel', v: 'capi', d: 900 },
    { k: 'p', a: 'flow', d: 1500 }, { k: 'p', a: 'event', d: 1300 }, { k: 'p', a: 'ok', d: 2200 },
    { k: 'cap', e: 'Đơn hàng tự động', t: 'Đơn tự lên trên Preny. Cửa hàng chỉ việc giao.' },
    { k: 'panel', v: 'don', d: 900 },
    { k: 'p', a: 'f1', d: 550 }, { k: 'p', a: 'f2', d: 550 }, { k: 'p', a: 'f3', d: 550 }, { k: 'p', a: 'f4', d: 550 },
    { k: 'p', a: 'cho', d: 900 },
    { k: 'cap', e: 'Nhân viên xác nhận', t: 'Báo nhân viên: bấm 1 lần là đơn lên', s: 'Người thật kiểm tra lại trước khi giao' },
    { k: 'p', a: 'nv', d: 1700 }, { k: 'p', a: 'bam', d: 1100 },
    { k: 'p', a: 'xn', d: 3000 },
    { k: 'panel', v: null, d: 500 },

    // Mua xong: tin cảm ơn kèm 5 sản phẩm đang giảm giá
    { k: 'cap', e: 'Bán thêm sau mua', t: 'Cảm ơn khách, gửi kèm 5 sản phẩm đang giảm giá', s: 'Khách bấm "Mua ngay" ngay trong Messenger' },
    { k: 'ai', text: 'Dạ cảm ơn anh Hùng nha 💛 Đơn đã được xác nhận, bên em giao camera ngày mai. Cửa hàng đang giảm giá mấy món khách hay lấy thêm, anh xem thử nha:' },
    { k: 'car', sp: [
        { img: 'trong-nha', ten: 'Camera trong nhà xoay 360°', gia: '441.000đ', cu: '490.000đ', giam: '-10%' },
        { img: 'cam-pin', ten: 'Camera dùng pin, không cần dây', gia: '1.161.000đ', cu: '1.290.000đ', giam: '-10%' },
        { img: 'cam-than', ten: 'Camera thân 4MP có màu ban đêm', gia: '1.071.000đ', cu: '1.190.000đ', giam: '-10%' },
        { img: 'wifi', ten: 'Bộ kích sóng wifi ra cổng', gia: '315.000đ', cu: '350.000đ', giam: '-10%' },
        { img: 'bo-smart', ten: 'Bộ cảm biến cửa, báo động', gia: '531.000đ', cu: '590.000đ', giam: '-10%' },
      ], d: 5200 },

    // Chăm sóc sau bán qua Zalo
    { k: 'zalo', gio: '19:30', ngay: 'T2 30/11/2026', chip: '3 ngày sau khi nhận · khách đã lắp xong', d: 1500 },
    { k: 'cap', e: 'Chăm sóc sau bán qua Zalo', t: 'Khách nhận hàng: AI hỏi camera chạy ổn chưa', s: 'Dặn vài lưu ý, xin đánh giá trong tin Zalo OA' },
    { k: 'zns', zns: {
        img: 'xem-app', tieuDe: 'Anh Hùng ơi, 2 camera chạy ổn chưa ạ?',
        noiDung: 'Camera Gia An cảm ơn anh đã nhận đơn **#GA26127**. Anh lưu ý giúp em vài điều nha:',
        dong: ['Đổi **mật khẩu app** mặc định để giữ an toàn', 'Bật **báo động** khi có người vào sân lúc tối', 'Lau mặt kính camera **1 tháng/lần** cho hình rõ'],
        nut: 'Nhắn kỹ thuật viên',
      }, d: 5000 },
    { k: 'cap', e: 'ZBS · Sản phẩm bán chạy', t: '1 tuần sau: gửi sản phẩm bán chạy qua Zalo', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'T2 07/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['trong-nha-2', 'cam-pin', 'cam-than', 'wifi'], nhan: 'TOP BÁN CHẠY TUẦN NÀY', mau: '#F97316',
        tieuDe: '🔥 Top bán chạy tuần này tại Camera Gia An',
        noiDung: '**Camera trong nhà xoay 360°**, **camera dùng pin** và **bộ kích sóng wifi** đang được khách chọn nhiều nhất tuần qua.',
        nut: 'Xem ngay',
      }, d: 4600 },
    { k: 'cap', e: 'ZBS · Về quê ăn Tết', t: '1 tuần sau nữa: ưu đãi camera trong nhà dịp Tết', s: 'Kéo khách quay lại mua tiếp, không cần khách nhắn' },
    { k: 'zstamp', gio: '19:30', ngay: 'T2 14/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['trong-nha', 'xem-app', 'cam-hien', 'cong-nha'], nhan: 'VỀ QUÊ ĂN TẾT · XEM NHÀ QUA ĐIỆN THOẠI',
        tieuDe: 'Camera trong nhà giảm 15% cho khách quen',
        noiDung: 'Về quê ăn Tết vẫn xem được nhà qua điện thoại. Camera trong nhà xoay 360° giảm **15%** cho khách đã mua, giao miễn phí. Áp dụng đến hết 20/01/2027.',
        nut: 'Xem ưu đãi',
      }, d: 4800 },

    { k: 'tongket', d: 8500 },
    { k: 'outro', d: 5200 },
  ],
  // Slide tổng kết cuối video (theo slide "Chốt lại 5 ô" nhóm thương mại điện tử; bám đuổi = 5 tin trong 7 ngày)
  tongKet: { tieuDe: 'Quy trình Preny AI giúp', em: 'tăng tỷ lệ chốt đơn', cot: [
    { ten: 'Khách hàng', icon: 'users', dong: ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến'] },
    { ten: 'AI Chatbot', icon: 'bot', dong: ['Phản hồi nhanh tức thì', 'Báo giá, mời ghé cửa hàng xem hình thực tế', 'Khách ở xa: lấy SĐT, địa chỉ, chốt đơn giao'] },
    { ten: 'Bám đuổi', icon: 'bell', dong: ['Gửi 5 tin nhắn trong 7 ngày để bám đuổi khách hàng'] },
    { ten: 'Chốt đơn', icon: 'check', dong: ['Lên đơn', 'Gửi sự kiện mua hàng lên Facebook'] },
    { ten: 'Mua lại', icon: 'refresh', dong: ['Tự động gửi 1 tin nhắn mỗi tuần qua FB và Zalo', 'Sản phẩm bán chạy, giảm giá, sản phẩm mới'] },
  ] },
  panels: {
    tag: { av: 'PH', ten: 'Phạm Văn Hùng', sub: 'Messenger · từ quảng cáo Camera wifi ngoài trời 2K',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#camerawifi', 'qt hot'], ['#camerangoaitroi', 'qt hot'], ['#camera2k', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#2CameraNgoaiTroi', 'qt']]]],
      im: 'Khách im từ 14:50, sau khi được xin SĐT, địa chỉ',
      rule: { lb: 'Bám đuổi theo thẻ #camerangoaitroi', tieuDe: '3 tin ngắn về đúng 2 camera khách đã chọn',
              dong: [['15 phút', 'Đã giữ 2 camera ngoài trời 2K'], ['3 tiếng', 'Gửi ảnh camera khách đã gắn'], ['20 tiếng', 'Gửi SĐT trước 12h, tặng 2 thẻ nhớ']] },
      reply: 'Khách gửi SĐT, địa chỉ · dừng bám đuổi' },
    capi: { tieuDe: 'Gửi đơn hàng cho Facebook', event: 'Purchase', nhan: 'SỰ KIỆN MUA HÀNG', giaTri: '1.780.000đ', pk: 'Purchase · 1.780.000đ',
      dong: [['Đơn hàng', '#GA26127 · 2 camera wifi ngoài trời 2K'], ['Nguồn khách', 'Quảng cáo Camera wifi ngoài trời → Messenger'], ['Giá trị', '1.780.000 VND'], ['Event ID', 'GA26127-PURCHASE (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện mua hàng' },
  },
  donHang: {
    ma: '#GA26127', sp: 'Camera wifi ngoài trời 2K', bien: 'x2 · tặng 2 thẻ nhớ 64GB', img: 'cam', gia: '1.780.000đ',
    nv: { ten: 'Nhân viên Khoa', av: 'NK' },
    ten: 'Phạm Văn Hùng', sdt: '0913482576', dc: '18 Phạm Văn Thuận, P. Tân Mai, TP. Biên Hòa, Đồng Nai', gio: '11:04 · 27/11/2026',
  },
};
