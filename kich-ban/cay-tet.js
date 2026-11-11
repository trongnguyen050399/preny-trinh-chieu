/* Kịch bản: CÂY TẾT (quất – đào – mai) — video dọc 9:16, khoảng 150 giây. Làm theo kịch bản bạn gửi.
   Kênh: Facebook Ads → Messenger → Preny AI → Meta CAPI Lead. Không có LIVE, không có ZBS.
   Giao diện inbox của fanpage (view: 'page'): khách Nguyễn Nam bên trái (avatar mặc định), Preny AI bên phải.
   Mã cây, giá, tồn kho, phí ship, mã đơn, SĐT, địa chỉ: dữ liệu minh họa theo kịch bản, khi triển khai thay bằng thông tin thật của nhà vườn.

   ẢNH / VIDEO:
   - Cây "Q08": 4 ảnh + video đều lấy từ CÙNG một cây quất thật, trong video Pexels 3994596
     (pexels.com/video/a-close-up-shot-of-kumquat-fruit-3994596, giấy phép Pexels).
     Đây là tư liệu tạm. Cần thay bằng ảnh/video thật của cây Q08 từ nhà vườn: chép đè vào demo/assets/q08/.
   - Ảnh quảng cáo quất mini, đào mini, mai mini: Unsplash (ảnh chụp thật).
   Bước mới: { aiImgs: [...] } album ảnh · { aiVideo: 'key', dur } tin video · { kh, typing: ms } khách đang nhập
   · { sep, style: 'sys' | 'warn' } ghi chú hệ thống · overlay có flow + caption · endscreen có title + items. */
(function () {
  const U = (id, w = 700, h = 700) => 'https://images.unsplash.com/photo-' + id + `?w=${w}&h=${h}&fit=crop&q=80&auto=format`;

  window.KICH_BAN = {
    format: '9:16',
    view: 'page',
    logo: 'https://preny.ai/images/logo.svg',
    badge: 'PRENY AI · NGÀNH CÂY TẾT',
    shop: { name: 'Vườn Cây Tết Test', initials: 'VT' },
    chatHead: { title: 'Nguyễn Nam', sub: 'Messenger · nhắn từ quảng cáo', avatar: 'default' },
    headline: { pre: 'AI chatbot tư vấn & chốt đơn', em: 'cây Tết quất – đào – mai' },
    sub: 'Tiếp nhận khách từ quảng cáo, báo giá, gửi ảnh cây thật, follow-up và chốt đơn COD tự động.',
    speed: 1.15,   // canh cho video dài khoảng 150 giây
    timing: { read0: 1100, readPerChar: 30, readMax: 4800, type0: 900, typePerChar: 4, typeMax: 1700, fastType: 600,
              featureHold: 1500, sepHold: 1400, cardHold: 3200 },

    images: {
      'ad-quat': U('1560296090-74173c1bfb90'),
      'ad-dao': U('1647594701022-e995313b6fe4'),
      'ad-mai': U('1791121918960-d956ee97bde2'),
      'q08-1': 'assets/q08/q08-1.jpg',
      'q08-2': 'assets/q08/q08-2.jpg',
      'q08-3': 'assets/q08/q08-3.jpg',
      'q08-4': 'assets/q08/q08-4.jpg',
      'q08-video': 'assets/q08/q08-video.mp4',
    },

    features: [
      { title: 'Khách bấm quảng cáo Facebook', desc: 'Quảng cáo quất – đào – mai Tết, khách bấm "Gửi tin nhắn".' },
      { title: 'Khách hỏi giá, AI báo giá ngay', desc: 'Báo giá Q08, gửi 4 ảnh thật và thẻ cây, hỏi vị trí trưng bày.' },
      { title: 'Gửi video cây thực tế', desc: 'Video quay đúng cây Q08, hỏi khu vực nhận hàng.' },
      { title: 'Kiểm tra miễn phí ship', desc: 'Đối chiếu Quận 7 với chính sách vận chuyển: phí ship 0đ.' },
      { title: 'Xin SĐT và địa chỉ', desc: 'Khách đã chọn cây nhưng chưa gửi thông tin nhận hàng.' },
      { title: 'Follow-up 5 tin trong 7 ngày', desc: 'Ngày 1, 2, 3, 5, 7 · chỉ gửi khi Meta cho phép, dừng khi khách mua hoặc từ chối.' },
      { title: 'Chốt đơn COD tự động', desc: 'Tổng hợp thông tin, kiểm tra còn hàng, tạo đơn và khóa mã cây.' },
      { title: 'Gửi Meta CAPI Lead', desc: 'Gửi khách tiềm năng về Facebook để đo lường, tối ưu quảng cáo.',
        kws: ['Gửi Lead 1 lần, chống trùng', 'Không gửi địa chỉ chi tiết', 'Không gửi Purchase khi mới đặt COD'] },
    ],

    steps: [
      { screen: { title: 'Facebook', sub: 'Bảng tin · Được tài trợ', avatar: 'fb', logo: false }, hold: 100 },
      { intro: true, hold: 1400 },

      /* CẢNH 1 – Khách bấm vào quảng cáo Facebook (0–10 giây) */
      { feature: 1 },
      { ad: { label: 'Anh Nam đang xem bảng tin Facebook', head: 'QUẤT – ĐÀO – MAI MINI ĐÓN TẾT',
              text: 'Cây đẹp, giá bình dân, phù hợp trang trí nhà cửa dịp Tết.',
              imgs: [{ img: 'ad-quat', label: 'Quất mini' }, { img: 'ad-dao', label: 'Đào mini' }, { img: 'ad-mai', label: 'Mai mini' }, { img: 'q08-2', label: 'Quất Q08' }],
              title: 'QUẤT MINI CHỈ 350.000Đ – MIỄN PHÍ SHIP KHU VỰC ÁP DỤNG', cta: 'Gửi tin nhắn' }, press: 3600, hold: 1300 },
      { screen: 'chat', hold: 400 },
      { sep: 'Nguyễn Nam nhắn tin từ quảng cáo · Quất – Đào – Mai mini đón Tết', style: 'time', hold: 900 },

      /* CẢNH 2 – Khách hỏi giá, AI tư vấn ngay (10–28 giây) */
      { feature: 2 },
      { kh: 'Shop ơi, cây quất mini 350k trong quảng cáo còn không em?' },
      { ai: 'Dạ bên em có mẫu **quất mini Q08** giá **350.000đ/cây** ạ!', fast: true, meta: '⚡ Preny AI báo giá ngay' },
      { ai: 'Em gửi anh hình thực tế để mình tham khảo nhé!', fast: true, hold: 900 },
      { aiImgs: ['q08-1', 'q08-2', 'q08-3', 'q08-4'], hold: 3000 },
      { product: { img: 'q08-1', name: 'Quất mini Q08', price: '350.000đ / cây', note: 'Ảnh thật của cây Q08 · miễn phí ship khu vực áp dụng', button: 'Xem chi tiết' }, fast: true, hold: 3000 },
      { ai: 'Anh định đặt cây **trên bàn phòng khách** hay **trước cửa nhà** ạ? Em hỗ trợ chọn kích thước phù hợp nhé!' },
      { kh: 'Anh để trên bàn phòng khách em.' },

      /* CẢNH 3 – AI giới thiệu hình ảnh và video thực tế (28–43 giây) */
      { feature: 3 },
      { ai: 'Dạ anh có thể tham khảo mẫu **Q08** này nhé! Em gửi anh thêm **video quay cây thực tế** để mình xem rõ tán, quả và chậu ạ.' },
      { aiVideo: 'q08-video', dur: '0:08', hold: 4600 },
      { kh: 'Cây này nhìn được đó. Có giao tận nhà không em?' },
      { ai: 'Dạ bên em có **giao tận nhà** anh nhé! Anh nhận ở khu vực nào để em kiểm tra phí ship cho mình ạ?' },
      { kh: 'Anh ở Quận 7, TP.HCM.' },

      /* CẢNH 4 – AI xác nhận miễn phí ship và mời chốt (43–56 giây) */
      { feature: 4 },
      { sep: '⚙ Hệ thống đối chiếu khu vực giao hàng · Quận 7 thuộc khu vực miễn phí vận chuyển', style: 'sys', hold: 2400 },
      { ai: 'Dạ **Quận 7** nằm trong khu vực đang được **miễn phí giao hàng** bên em ạ! Cây Q08 giá **350.000đ**, phí vận chuyển **0đ**.' },
      { kh: 'Ok em. Anh lấy cây Q08 này nhé.' },

      /* CẢNH 5 – AI xin SĐT và địa chỉ (56–67 giây) */
      { feature: 5 },
      { ai: 'Dạ anh cho em xin **họ tên, SĐT và địa chỉ** nhận cây để em hỗ trợ lên đơn cho mình nhé!' },
      { sep: 'Đã xem · khách chưa phản hồi…', style: 'silent', hold: 1500 },
      { sep: 'KHÁCH ĐÃ CHỌN CÂY Q08 – CHƯA CUNG CẤP THÔNG TIN NHẬN HÀNG', style: 'warn', hold: 2600 },
      { sep: 'Preny AI đưa khách vào chuỗi Follow-up khi đủ điều kiện', style: 'sys', hold: 2200 },

      /* CẢNH 6 – AI follow-up 5 tin trong 7 ngày (67–96 giây) */
      { feature: 6 },
      { sep: '— Ngày 1 —' },
      { ai: 'Anh ơi, cây **quất mini Q08** mình chọn hôm qua anh còn muốn lấy không ạ? Em hỗ trợ hoàn tất đơn cho mình nhé!', meta: '🔁 Follow-up · Ngày 1 · Nhắc lại sản phẩm' },
      { sep: '— Ngày 2 —' },
      { ai: 'Em gửi anh thêm **hình thực tế** cây quất mini mình thích để xem rõ dáng và chậu nhé!', meta: '🔁 Follow-up · Ngày 2 · Hình ảnh thực tế' },
      { aiImg: 'q08-3', hold: 1500 },
      { sep: '— Ngày 3 —' },
      { ai: 'Anh ơi, em gửi anh thêm **hướng dẫn chăm sóc quất mini** trong dịp Tết để cây được trưng bày phù hợp nhé!', meta: '🔁 Follow-up · Ngày 3 · Hướng dẫn chăm cây' },
      { card: { tag: '📄 Tài liệu từ nhà vườn', lines: ['Hướng dẫn chăm sóc quất mini dịp Tết', 'Vườn Cây Tết Test · bản PDF'], button: 'Xem hướng dẫn' }, fast: true, hold: 2000 },
      { sep: '— Ngày 5 —' },
      { ai: 'Anh ơi, nếu mình vẫn muốn mua quất mini, em hỗ trợ kiểm tra **cây còn hàng** và chương trình **miễn phí ship về Quận 7** cho anh nhé!', meta: '🔁 Follow-up · Ngày 5 · Ưu đãi giao hàng' },
      { sep: '— Ngày 7 —' },
      { ai: 'Anh ơi, em nhắn lại về mẫu quất mini mình đã chọn ạ. Nếu anh vẫn muốn đặt, anh cho em xin **SĐT và địa chỉ** nhận hàng nhé! Em hỗ trợ kiểm tra cây và lên đơn cho mình ạ.', meta: '🔁 Follow-up · Ngày 7 · Xin SĐT và địa chỉ' },

      /* CẢNH 7 – Khách gửi SĐT và địa chỉ (96–110 giây) */
      { feature: 7 },
      { kh: 'Ok em, anh lấy cây nhé.\nAnh Nguyễn Nam, SĐT 0900 000 286.\nĐịa chỉ 125 Nguyễn Thị Thập, Quận 7, TP.HCM.', typing: 2200 },
      { ai: 'Dạ em nhận thông tin anh Nam rồi ạ! Em lên đơn cho anh nhé!', fast: true },
      { card: { tag: '✓ Thông tin khách hàng',
          lines: ['Họ tên: Nguyễn Nam', 'SĐT: 0900 000 286', 'Địa chỉ: 125 Nguyễn Thị Thập, Quận 7, TP.HCM', 'Sản phẩm: Quất mini Q08', 'Số lượng: 1 cây', 'Nhu cầu: Giao tận nhà, thanh toán COD'] },
        fast: true, hold: 5200 },
      { sep: '✓ Preny đã lưu thông tin và dừng chuỗi Follow-up', style: 'sys', hold: 1800 },

      /* Tạo đơn COD: kiểm tra trước khi chốt, thẻ đơn hàng, khóa mã cây */
      { sep: '⚙ Kiểm tra: cây Q08 còn hàng · giao được Quận 7 · phí ship 0đ', style: 'sys', hold: 2200 },
      { card: { tag: '✓ Đã tạo đơn COD', ok: true,
          lines: ['Mã đơn: **#VCT-0108**', 'Quất mini Q08 × 1: 350.000đ', 'Phí vận chuyển: **0đ**', 'Tổng thanh toán: **350.000đ**, trả khi nhận cây (COD)', 'Trạng thái: **Đã tạo đơn, chờ giao**'],
          button: 'Quản lý đơn hàng' }, fast: true, hold: 5600 },
      { sep: '🔒 Đã khóa mã cây Q08 để tránh bán trùng', style: 'sys', hold: 1800 },
      { kh: 'Ok em, cảm ơn nhé!' },
      { ai: 'Dạ em cảm ơn anh đã ủng hộ nhà vườn ạ! 🌸', fast: true, hold: 2600 },

      /* CẢNH 10 – Meta CAPI Lead (137–145 giây) */
      { feature: 8 },
      { overlay: { head: 'PRENY AI → META CONVERSIONS API', note: 'Hiệu ứng hệ thống · khách không nhìn thấy',
          rows: [['Event', 'Lead'], ['Event ID', 'TETTREE-LEAD-001'], ['Nguồn', 'Facebook Ads → Messenger'], ['SĐT', 'Đã thu thập'], ['Sản phẩm', 'Quất mini Q08'], ['Nhu cầu', 'Đặt mua cây Tết']],
          flow: ['Preny AI', 'Meta CAPI', 'Lead ✓'], status: 'Gửi thành công (demo)',
          caption: 'Preny AI gửi sự kiện khách hàng tiềm năng về Facebook để hỗ trợ đo lường và tối ưu hiệu quả chiến dịch quảng cáo.' },
        kw: [0, 1, 2], hold: 8000 },

      /* CẢNH 11 – Kết thúc (145–150 giây) */
      { end: true },
      { endscreen: { title: 'PRENY AI – TỰ ĐỘNG HÓA BÁN CÂY TẾT',
          items: ['Tiếp nhận khách từ quảng cáo Facebook', 'Tư vấn quất, đào, mai theo nhu cầu', 'Báo giá và gửi hình cây thật', 'Tư vấn kích thước, vị trí trưng bày',
                  'Xin SĐT và địa chỉ nhận hàng', 'Follow-up ngày 1, 2, 3, 5 và 7', 'Miễn phí ship theo khu vực', 'Tự động chốt đơn COD', 'Gửi thẻ Quản lý đơn hàng', 'Meta CAPI Lead'],
          sub: 'preny.ai' }, hold: 5000 },
    ],
  };
})();
