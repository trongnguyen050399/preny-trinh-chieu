/* Kịch bản: BÁN TOUR DU LỊCH (tour Đà Nẵng – Hội An – Bà Nà 4N3Đ, ghép đoàn hoặc tour riêng gia đình) — BẢN TRÌNH CHIẾU,
   nhóm THƯƠNG MẠI ĐIỆN TỬ, ngành đặt chỗ: "lên đơn" là đơn đặt tour. Làm 23/11/2026 theo người dùng: bỏ ngành "Du lịch, lưu trú"
   (du-lich-luu-tru-tc.js, đã ẩn), tách thành 2 ngành riêng: bán tour du lịch (file này) và khách sạn, homestay (homestay-tc.js).
   Từ 23/11/2026 bỏ demo chat vào thẳng (&demo): file chỉ có phần deck cho Bài 1 (slide), không viết steps/features.
   Mạch trên slide: chị Hoài An rủ nhóm 6 người bạn đồng nghiệp (không có trẻ em) đi tour Đà Nẵng – Hội An – Bà Nà dịp nghỉ
     Tết Dương lịch; hỏi tối có tự do đi chơi không, khách sạn có gần biển không, ghép đoàn có đông không, nhóm 6 người có giá tốt hơn không
     → AI hỏi ngày đi, chốt số người → tối tự do, khách sạn 4 sao cách biển Mỹ Khê 2 phút đi bộ, đoàn ghép tối đa 20 khách,
     nhóm từ 6 người giảm 200.000đ/khách → hỏi ghép đoàn hay tour riêng (xe riêng cho nhóm)
     → khách im → bám đuổi theo thẻ #TourDaNang4N3D (ảnh thật Cầu Vàng, phố cổ, chia sẻ của nhóm công ty đã đi), #HoiGia (giữ giá nhóm, tặng vé thả đèn)
     → chốt, lên đơn đặt tour, cọc 30% → chăm sóc sau chuyến đi: show Hội An, xe đón sân bay, tour Huế, bảo hiểm, vé máy bay.
   Ngành "Nhà hàng, khách sạn" có sẵn đã dùng mạch gia đình 2 bé đi Đà Nẵng, nên tour này dùng nhóm bạn đồng nghiệp cho khỏi trùng.
   Không có tin báo trước ngày khởi hành (Preny chưa có tính năng này). Không có tin cập nhật vận chuyển.
   Slide 6 đổi chữ "vận chuyển" thành đặt chỗ qua deck.tinhNang (giống bản cũ du-lich-luu-tru-tc.js).
   Tên công ty, lịch trình, giá, giá nhóm, cọc, tên khách, SĐT: dữ liệu minh họa. Ảnh: Unsplash (ảnh thật, không phải tour của khách). */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'cau-vang': '1741138327956-dfa75763b50d',     // Cầu Vàng Bà Nà, bàn tay đá (ảnh quảng cáo)
    'cau-vang-2': '1748674278237-00d4bc40fe2c',   // Cầu Vàng nhìn gần, trời xanh
    'cau-rong': '1788927793309-a1e53e23ca00',     // cầu Rồng Đà Nẵng về đêm
    'den-long': '1563354860-799d15199ac3',        // đèn lồng Hội An
    'hoi-an-dem': '1652731011413-93d4c5aa5c7c',   // phố cổ Hội An về đêm
    'hoi-an-ngay': '1562005094-c724030f99bd',     // phố Hội An ban ngày, đèn lồng giăng
    'bien-my-khe': '1674296067534-0f9769040781',  // biển Đà Nẵng nhìn từ trên cao
    'bien-2': '1723142282970-1fd415eec1ad',       // bãi biển, thành phố phía xa
    'bien-3': '1689825199899-c57cc46c2a9a',       // bãi biển có hàng ô dù
    'hdv': '1777523743673-fe2577163ede',          // hướng dẫn viên giới thiệu
    'doan-khach': '1766415007432-80738e830722',   // đoàn khách nghe hướng dẫn viên
    'xe-du-lich': '1570125909232-eb263c188f7e',   // xe du lịch
    'gia-dinh': '1523225918988-00624e6d8fee',     // hai vợ chồng kéo vali ngắm biển
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    shop: { name: 'Du Lịch Biển Xanh', initials: 'BX' },
    headline: { pre: 'Hệ thống AI chatbot giúp tăng trung bình', em: '62% tỷ lệ chốt đơn' },
    sub: 'Tự động hóa toàn bộ quy trình tư vấn lịch trình, bám đuổi, lên đơn đặt tour cho nhóm và chăm sóc khách sau chuyến đi.',
    cta: 'Dùng thử miễn phí tại **preny.ai**\nHotline **0389 647 778**',

    images: Object.fromEntries(Object.entries(IMG).map(([k, id]) => [k, U(id)])),
    features: [],
    steps: [],

    deck: {
      demoDoc: {
        khach: 'Hoài An',
        sanPham: 'Tour Đà Nẵng – Hội An – Bà Nà 4N3Đ',
        binhLuan: 'Tour này giá sao shop?',
        post: {
          tieuDe: 'TOUR ĐÀ NẴNG – HỘI AN – BÀ NÀ 4N3Đ 🌉',
          dong: ['Khởi hành hằng ngày từ Đà Nẵng', 'Khách sạn 4 sao gần biển Mỹ Khê', 'Vé cáp treo Bà Nà, hướng dẫn viên', 'Tối tự do, nhóm từ 6 người giá tốt'],
          anh: ['cau-vang', 'hoi-an-dem', 'bien-my-khe', 'cau-rong'],
        },
      },
      dashboard: [
        { ten: 'Tour <span class="grad">Đà Nẵng – Hội An</span>', den: '21/07/2026', khach: 24, tyLe: 0.58 },
        { ten: 'Tour <span class="grad">riêng cho nhóm</span>', den: '18/08/2026', khach: 13, tyLe: 0.56 },
        { ten: 'Tour <span class="grad">ghép đoàn dịp lễ</span>', den: '26/09/2026', khach: 19, tyLe: 0.54 },
      ],
      chatbot: {
        y: [
          ['Trả lời ngay tức thì, 24/7', 'Khách nhắn lúc nào, AI trả lời sau 2 giây'],
          ['Hỏi lịch trình, giữ chân khách', 'Chủ động hỏi ngày đi, chốt số người trong nhóm'],
          ['Chốt chỗ và tự lên đơn đặt tour', 'Khách đồng ý là AI tạo đơn ngay trên Preny'],
          ['Hiểu hình ảnh khách gửi', 'Khách gửi ảnh, AI biết đúng điểm đến nào'],
        ],
        chat: [
          { ref: { img: L(IMG['cau-vang']), ten: 'Tour Đà Nẵng – Hội An – Bà Nà 4N3Đ' } },
          { kh: 'Tour Đà Nẵng 4N3Đ giá sao em? Nhóm c đồng nghiệp đi chơi, tối có tự do ko? Ks gần biển ko?' },
          {
            ai: 'Dạ em chào chị! **Tối tự do** cả 3 tối ạ, khách sạn 4 sao cách **biển Mỹ Khê 2 phút đi bộ**. Chị cho em xin **ngày đi** và nhóm **mấy người** để em báo giá nhóm nha.',
            meta: '⚡ Preny AI trả lời sau 2 giây',
          },
          { kh: 'Đi 30/12, nhóm 6 người. Ghép đoàn có đông ko, nhóm 6 có giá tốt hơn ko e?' },
          {
            ai: 'Dạ đoàn ghép **tối đa 20 khách** ạ. Nhóm từ 6 người em giảm **200.000đ/khách**, còn **4.090.000đ**, cả nhóm **24.540.000đ**, gồm khách sạn 4 sao, xe, vé cáp treo Bà Nà.',
          },
          { kh: 'Ok chốt ghép đoàn cho nhóm c. Nguyễn Hoài An, 0938 615 724' },
          { ai: 'Dạ em lên đơn đặt tour cho cả nhóm ngay ạ ⚡' },
          { don: true },
          { ok: true },
        ],
        don: {
          ten: 'Nguyễn Hoài An',
          sdt: '0938 615 724',
          diaChi: 'Đón tại sân bay Đà Nẵng · ngày 30/12/2026',
          ma: '#BX23130',
          phi: 'gồm xe, hướng dẫn viên',
          ghiChu: 'Khởi hành **T4 30/12/2026** · nhóm 6 khách · 3 phòng đôi · ghép đoàn · cọc 30% giữ chỗ',
          // 1 dòng trọn gói (2 dòng thì màn hình Tạo đơn tràn khỏi slide)
          sp: [{ img: L(IMG['cau-vang']), ten: 'Tour Đà Nẵng – Hội An – Bà Nà 4N3Đ', sl: 6, dv: 'khách', gia: 4090000 }],
        },
        anh: {
          img: L(IMG['cau-rong']),
          kh: 'Cầu này có trong lịch trình không em? Nhóm c muốn đi xem buổi tối',
          ai: 'Dạ hình chị gửi là **cầu Rồng Đà Nẵng** ạ. Cầu **phun lửa, phun nước tối thứ 7, Chủ nhật** lúc 21h. Tour có **tối tự do**, khách sạn cách cầu khoảng 10 phút đi xe, cả nhóm đi xem được ạ.',
        },
      },
      afterSale: {
        y1: 'AI gửi tiếp 5 dịch vụ đi kèm để bán thêm (upsell)',
        y2: 'Tour mới, voucher, ưu đãi dịp lễ',
        gio: 'Khách vừa đặt tour',
        loi: 'Cảm ơn chị Hoài An đã đặt tour tại Biển Xanh 💙 Nhiều nhóm bạn, nhóm công ty đặt thêm mấy dịch vụ này cho chuyến đi trọn vẹn ạ:',
        sp: [
          { img: L(IMG['hoi-an-dem']), ten: 'Vé show diễn thực cảnh Hội An', gia: 600000, nut: 'Đặt thêm' },
          { img: L(IMG['xe-du-lich']), ten: 'Xe riêng đón sân bay Đà Nẵng', gia: 250000, nut: 'Đặt thêm' },
          { img: L(IMG['hdv']), ten: 'Tour Huế 1 ngày, có hướng dẫn viên', gia: 1190000, nut: 'Đặt thêm' },
          { img: L(IMG['gia-dinh']), ten: 'Bảo hiểm du lịch cả chuyến', gia: 60000, nut: 'Đặt thêm' },
          { img: L(IMG['bien-2']), ten: 'Combo vé máy bay khứ hồi (giá từ)', gia: 2490000, nut: 'Xem giá' },
        ],
        khach: 'Đặt thêm cho nhóm c 6 vé show Hội An nhé',
        pill: '🛍 Khách đặt thêm ngay: đơn tăng từ 24.540.000đ lên 28.140.000đ',
        fmm: {
          sep: '1 tuần sau chuyến đi · tin Facebook FMM',
          chao: 'Chào chị Hoài An 👋 Hè này Biển Xanh mở tour biển 4N3Đ cho nhóm bạn, nhóm công ty, gửi chị xem trước nha!',
          img: L(IMG['bien-3']),
          nhan: 'TOUR MỚI',
          ten: 'Tour biển hè 4 ngày 3 đêm',
          mo: 'Khách cũ giảm 10%, nhóm từ 6 người giảm thêm.',
          nut: 'Xem lịch trình',
        },
        zbs: {
          ten: 'Tặng chị Hoài An voucher 10%',
          mo: 'Cảm ơn chị và cả nhóm đã đồng hành cùng Du Lịch Biển Xanh. Gửi chị ưu đãi cho chuyến đi tiếp theo:',
          dong: [['Mã voucher', '**BIENXANH10**'], ['Ưu đãi', 'Giảm 10% mọi tour trong nước'], ['Hạn dùng', '30/06/2027']],
          nut: 'Đặt tour ngay',
        },
      },
      // Slide 6: có lên đơn (đặt chỗ) → giữ 6 tính năng, chỉ đổi chữ "vận chuyển"
      tinhNang: [
        ['AI chatbot chốt đơn tự động 100%', 'Tăng trung bình 62% tỷ lệ chốt đơn'],
        ['AI Agent tự lên đơn đặt tour', 'Tiết kiệm hơn 90% thời gian xử lý đơn'],
        ['AI tự bám đuổi khách trong 7 ngày', 'Tăng thêm khoảng 35% tỷ lệ chốt đơn'],
        ['AI tự chăm sóc khách sau chuyến đi', 'Gợi ý tour mới, khách đặt lại'],
        ['Bộ công cụ Remarketing FMM và ZBS', 'Khai thác hiệu quả dữ liệu khách hàng'],
        ['Tự gửi sự kiện mua hàng qua Meta CAPI', 'Hỗ trợ tối ưu quảng cáo Facebook'],
      ],

      bamDuoi: {
        cmpDung: ['Khách nhắn xong im → nhắc đúng tour khách xem (thẻ <b>#TourDaNang4N3D</b> từ quảng cáo)',
                  'Báo giá xong im → bám đuổi theo giá: giữ giá nhóm dịp lễ, quà tặng (thẻ <b>#HoiGia</b>)',
                  'Đúng nhu cầu, đúng lý do im → khách quay lại đặt tour'],
        hoi: 'Tour Đà Nẵng 4N3Đ giá bao nhiêu em?',
        traLoiThuong: 'Dạ 4.290.000đ/khách ạ.',
        refImg: L(IMG['cau-vang']), refTen: 'Tour Đà Nẵng – Hội An – Bà Nà 4N3Đ',
        vd1: {
          kh: 'Tour Đà Nẵng dịp Tết Dương lịch còn chỗ không em?',
          ai: 'Dạ còn ạ! Mình đi ngày nào, nhóm mấy người để em báo giá nhóm nha?',
          tag: '🏷 #TourDaNang4N3D', tagNote: 'thẻ từ quảng cáo · khách im 1 ngày',
          nhac: 'Chị ơi, em gửi chị <b>ảnh thật Cầu Vàng và phố cổ Hội An</b> trong tour chị xem hôm qua, kèm <b>chia sẻ của một nhóm công ty</b> vừa đi: tối tự do, khách sạn sát biển ạ 😊',
          dung: '🎯 Theo thẻ #TourDaNang4N3D: nhắc đúng tour khách xem',
          khach: 'Gửi c lịch trình chi tiết với',
        },
        vd2: {
          kh: 'Nhóm 6 người bao nhiêu em?',
          ai: 'Dạ nhóm 6 người là <b>24.540.000đ</b> (đã giảm giá nhóm), gồm khách sạn 4 sao, xe, vé cáp treo Bà Nà ạ.',
          tag: '🏷 #HoiGia', tagNote: 'báo giá xong khách im 1 ngày',
          nhac: 'Chị ơi, tour 30/12 chị hỏi giá hôm qua, đặt trong tuần này em <b>giữ giá nhóm</b> và <b>tặng 6 vé thả đèn hoa đăng</b> ạ. Em giữ chỗ cho nhóm mình nha?',
          dung: '🎯 Theo thẻ #HoiGia: bám đuổi theo giá, đúng lý do khách im',
          khach: 'Ok giữ chỗ cho nhóm c',
        },
      },
      binhLuan: {
        post: '<b>Tour Đà Nẵng – Hội An – Bà Nà 4N3Đ</b> · khởi hành hằng ngày, khách sạn 4 sao gần biển Mỹ Khê, vé cáp treo Bà Nà 🌉',
        img: L(IMG['cau-vang-2']),
        kav: 'BH', kten: 'Bích Hạnh', hoi: 'Nhóm mình 10 bạn trẻ muốn đi Hội An 1 ngày thôi có tour không shop?',
        traLoi: 'Dạ chào chị Hạnh! Shop vừa nhắn tin tư vấn chi tiết cho chị, chị xem tin nhắn nhé 💬',
        act2: 'Nhắn tin riêng gửi tour Hội An 1 ngày',
        nhan: 'Chào chị Hạnh! Bên em có <b>tour Hội An 1 ngày</b> cho nhóm bạn trẻ: phố cổ, thả đèn hoa đăng, ăn tối, <b>790.000đ/khách</b>. Nhóm 10 bạn em giảm thêm ạ. Chị cho em xin ngày đi nha?',
        sp: { ten: 'Tour Hội An 1 ngày', gia: '790.000đ/khách', img: L(IMG['hoi-an-ngay']) },
        khach: 'Thứ 7 này nhóm mình đi nha shop',
      },
      duLieu: {
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: chắc chắn nắng đẹp, hủy lúc nào cũng hoàn 100%', 'Khách khiếu nại, công ty mất uy tín'],
        hoi: 'Cuối tháng 12 Bà Nà chắc chắn nắng đẹp hả em? Hủy sát ngày có hoàn tiền 100% không?',
        aiSai: 'Dạ chắc chắn <b>nắng đẹp</b> ạ, hủy lúc nào cũng <b>hoàn 100%</b> chị nhé 🥰',
        thucTe: '⚠ Thực tế: tháng 12 Đà Nẵng có thể mưa; hủy sát ngày tính phí theo chính sách tour',
        gian: 'Lên Bà Nà mưa cả ngày, hủy thì bị trừ tiền! Sao hôm trước nói khác? 😠',
        cho: 'Dạ chị chờ em một chút để em kiểm tra chính xác chính sách tour cho chị nhé!',
        nv: 'Điều hành Biển Xanh · người thật',
        nvTraLoi: 'Dạ em xin lỗi chị ạ. Thời tiết không ai hứa trước được, hủy sát ngày tính phí theo chính sách đã gửi. Em hỗ trợ đổi ngày lên Bà Nà sang hôm nắng và tặng cả nhóm vé show Hội An nhé!',
      },
    },
  };
})();
