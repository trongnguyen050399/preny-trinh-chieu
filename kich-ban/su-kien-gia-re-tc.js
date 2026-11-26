/* Kịch bản: DỊCH VỤ SỰ KIỆN GIÁ RẺ (trang trí sinh nhật tại nhà, gói 1–2 triệu) — BẢN TRÌNH CHIẾU, nhóm THƯƠNG MẠI ĐIỆN TỬ.
   Làm 26/11/2026 theo người dùng: "thêm ngành dịch vụ sự kiện giá rẻ ... dịch vụ giá rẻ tầm khoảng 1, 2 triệu, ví dụ khách tổ chức
   sinh nhật, xin giá hỏi tư vấn dịch vụ, bên này báo giá tổ chức sự kiện, xin sđt và địa chỉ để triển khai".
   Khác `to-chuc-su-kien-tc` (Year End Party 45 triệu, cân nhắc nhiều): ở đây báo giá gói và chốt lịch ngay trong chat.
   Từ 23/11/2026 bỏ demo chat vào thẳng (&demo): file chỉ có phần deck cho Bài 1 (slide), không viết steps/features.
   Mạch ngắn trên slide: chị Ngân hỏi giá trang trí sinh nhật → AI báo 2 gói (990K, 1.590K), hỏi tiệc cho ai, ngày nào
     → bé gái 1 tuổi, tối T7 05/12 tại nhà → gói tiêu chuẩn tone hồng 1.590.000đ → xin SĐT, địa chỉ, tên bé → lên lịch thợ
     → bán thêm: bóng heli, bàn kẹo, chữ số bóng, cổng bóng, chụp ảnh tiệc.
   Theo quy tắc 25/11/2026: AI chỉ báo giá, gửi ảnh, hỏi ngày/số lượng, xin SĐT + địa chỉ; không tự tính, không check khách cũ/mới.
   Không có tin nhắc trước ngày tiệc. Ảnh không có nhân vật hoạt hình có bản quyền.
   Tên (Tiệc Xinh Decor), giá, khách, SĐT, địa chỉ: dữ liệu minh họa. Ảnh: Unsplash, ảnh thật; dùng đường dẫn trong máy. */
(function () {
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'trang-tri': '1741969494307-55394e3e4071',     // phông bóng hồng + bàn bánh Happy Birthday (ảnh quảng cáo)
    'cong-bong': '1560128411-79892dd93bf8',        // cổng bóng nhiều màu
    'thoi-noi': '1615373282418-72e3146a17f5',      // bánh thôi nôi số 1, cờ hồng
    'bong-hong': '1776162241196-baecafaeb305',     // chùm bóng hồng
    'bong-hong-vang': '1727178757622-26389a0538f5',// bóng hồng và vàng
    'chu-so': '1636256373111-cddaa1470363',        // chữ số bóng bạc 1ST
    'backdrop-vang': '1643175816971-a463dee6ae61', // phông kim tuyến vàng Happy Birthday
    'vong-bong': '1509909756405-be0199881695',     // chùm bóng pastel mặt cười
    'tiec-be': '1608790672275-309c02d888ff',       // bé thổi nến
    'be-an-banh': '1757693075207-32944391b4de',    // bé ăn bánh kem
    'ban-banh': '1764380746818-18c01e96df12',      // bàn bánh ngọt
    'bong-vang': '1634037227458-abdbf697806e',     // chùm bóng vàng
    'cau-vong': '1611142287927-64cede3148da',      // cầu vồng bóng
    'cong-bong-2': '1707589338174-dc1ddc18945a',   // cổng bóng ngoài cửa
    'sn-50': '1604668915840-580c30026e5f',         // sinh nhật người lớn số 50
    'ban-ngoai-troi': '1765946026563-4f9db06eb328',// bàn tiệc ngoài trời
    'nen-1': '1670491191890-7ffc7c4c0b58',         // nến số 1 trên bánh
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    shop: { name: 'Tiệc Xinh Decor', initials: 'TX' },
    headline: { pre: 'Hệ thống AI chatbot giúp tăng trung bình', em: '62% tỷ lệ chốt đơn' },
    sub: 'Tự động hóa toàn bộ quy trình chốt đơn, bám đuổi, lên đơn và chăm sóc khách để tăng hiệu quả bán hàng.',
    cta: 'Dùng thử miễn phí tại **preny.ai**\nHotline **0389 647 778**',

    images: Object.fromEntries(Object.entries(IMG).map(([k, id]) => [k, L(id)])),

    deck: {
      demoDoc: {
        khach: 'Ngân',
        sanPham: 'Trang trí sinh nhật tại nhà',
        binhLuan: 'Trang trí sinh nhật bao nhiêu shop?',
        post: {
          tieuDe: 'TRANG TRÍ SINH NHẬT TẠI NHÀ CHỈ TỪ 990K 🎈',
          dong: ['Phông bóng, chữ Happy Birthday', 'Bảng tên, bàn bánh', 'Thợ tới tận nơi setup trong 2 tiếng', 'Nhận thôi nôi, đầy tháng, sinh nhật'],
          anh: ['trang-tri', 'thoi-noi', 'cong-bong', 'vong-bong'],
        },
      },
      dashboard: [
        { ten: 'Sinh nhật <span class="grad">cho bé</span>', den: '21/07/2026', khach: 36, tyLe: 0.66 },
        { ten: 'Thôi nôi, <span class="grad">đầy tháng</span>', den: '18/08/2026', khach: 24, tyLe: 0.63 },
        { ten: 'Sinh nhật <span class="grad">người lớn</span>', den: '26/09/2026', khach: 18, tyLe: 0.58 },
      ],
      chatbot: {
        chat: [
          { ref: { img: L(IMG['trang-tri']), ten: 'Trang trí sinh nhật tại nhà' } },
          { kh: 'Trang trí sinh nhật bao nhiêu shop?' },
          { ai: 'Dạ bên em có **gói cơ bản 990.000đ**, **gói tiêu chuẩn 1.590.000đ** ạ. Tiệc mình **cho ai, ngày nào** ạ?', meta: '⚡ Preny AI trả lời sau 2 giây' },
          { kh: 'sn bé gái 1 tuổi, tối T7 5/12 ở nhà' },
          { ai: 'Dạ thôi nôi bé gái chị chọn **gói tiêu chuẩn tone hồng 1.590.000đ**, có cổng bóng, bảng tên bé, bàn bánh ạ. Chị gửi em SĐT, địa chỉ để em lên lịch thợ nha.' },
          { kh: 'Ngân, 0903 418 275, B6.08 CC Phan Văn Trị, Gò Vấp. Bé tên Su' },
          { ai: 'Dạ em lên lịch thợ setup 16h T7 05/12 cho chị ạ 🎈' },
          { don: true },
          { ok: true },
        ],
        don: {
          ten: 'Ngân', sdt: '0903 418 275', diaChi: 'Căn B6.08, lô B, CC Phan Văn Trị, P.5, Gò Vấp', ma: '#TX26126', phi: 'miễn phí công setup',
          sp: [{ img: L(IMG['thoi-noi']), ten: 'Gói trang trí sinh nhật tiêu chuẩn, tone hồng (T7 05/12)', sl: 1, dv: 'gói', gia: 1590000 }],
        },
        anh: {
          img: L(IMG['cau-vong']),
          kh: 'Bé c thích cầu vồng như hình này, làm được ko e?',
          ai: 'Dạ ảnh chị gửi là mẫu **cầu vồng bóng** ạ, bên em làm được, gắn vào **gói tiêu chuẩn 1.590.000đ** thay cho cổng bóng luôn. Tiệc mình tổ chức ngày nào ạ?',
        },
      },
      afterSale: {
        loi: 'Cảm ơn chị Ngân đã chọn Tiệc Xinh Decor 💛 Khách bên em hay thêm mấy món này cho tiệc ạ:',
        sp: [
          { img: L(IMG['bong-vang']), ten: 'Chùm bóng bay heli 10 quả', gia: 300000 },
          { img: L(IMG['ban-banh']), ten: 'Bàn kẹo, bánh ngọt trang trí', gia: 650000 },
          { img: L(IMG['chu-so']), ten: 'Chữ số bóng bạc cỡ lớn', gia: 150000 },
          { img: L(IMG['cong-bong-2']), ten: 'Cổng bóng ngoài cửa', gia: 450000 },
          { img: L(IMG['tiec-be']), ten: 'Chụp ảnh tiệc 1 tiếng', gia: 540000, cu: 600000 },
        ],
        khach: 'Thêm c chùm bóng heli nha e',
        pill: '🛍 Khách thêm ngay: đơn tăng từ 1.590.000đ lên 1.890.000đ',
        fmm: {
          chao: 'Chào chị Ngân 👋 Tiệc Xinh Decor nhận trang trí tiệc tất niên, Tết tại nhà, khách cũ được giảm 15%, em gửi chị xem mẫu nha!',
          img: L(IMG['backdrop-vang']), nhan: 'ƯU ĐÃI TẤT NIÊN',
          ten: 'Trang trí tất niên tại nhà', mo: 'Giảm 15% cho khách đã đặt tiệc.', nut: 'Đặt lịch',
        },
        zbs: {
          ten: 'Tặng chị Ngân voucher 100.000đ',
          mo: 'Cảm ơn chị đã đặt tiệc tại Tiệc Xinh Decor. Gửi chị ưu đãi cho lần đặt tiếp theo:',
          dong: [['Mã voucher', '**TIECXINH100**'], ['Ưu đãi', 'Giảm 100.000đ gói từ 990.000đ'], ['Hạn dùng', '31/03/2027']],
          nut: 'Dùng voucher ngay',
        },
      },
      bamDuoi: {
        cmpDung: ['Khách nhắn xong im → nhắc đúng gói, đúng ngày khách đã hỏi (thẻ <b>#TrangTriSinhNhat</b> từ quảng cáo)',
                  'Báo giá xong im → bám đuổi theo giá: miễn phí công setup, quà tặng (thẻ <b>#HoiGia</b>)',
                  'Đúng nhu cầu, đúng lý do im → khách quay lại đặt lịch'],
        hoi: 'Trang trí sinh nhật bao nhiêu shop?',
        traLoiThuong: 'Dạ từ 990.000đ ạ.',
        refImg: L(IMG['trang-tri']), refTen: 'Trang trí sinh nhật tại nhà',
        vd1: {
          kh: 'Nhà c phòng khách nhỏ, trang trí có chật ko e?',
          ai: 'Dạ thợ bên em setup gọn theo diện tích nhà mình ạ. Tiệc mình ngày nào ạ?',
          tag: '🏷 #TrangTriSinhNhat', tagNote: 'thẻ từ quảng cáo · khách im 1 ngày',
          nhac: 'Chị ơi, em gửi chị <b>ảnh thật tiệc làm trong phòng khách nhỏ</b> tuần rồi, vẫn đủ phông bóng, bàn bánh ạ 🎈',
          dung: '🎯 Theo thẻ #TrangTriSinhNhat: nhắc đúng nỗi lo của khách',
          khach: 'Đẹp ghê, c lấy gói cơ bản nha e',
        },
        vd2: {
          kh: 'Gói tiêu chuẩn bao nhiêu vậy shop?',
          ai: 'Dạ gói tiêu chuẩn <b>1.590.000đ</b> ạ.',
          tag: '🏷 #HoiGia', tagNote: 'báo giá xong khách im 1 ngày',
          nhac: 'Chị ơi, gói tiêu chuẩn chị hỏi hôm qua <b>miễn phí công setup, tặng bóng chữ số</b> cho bé ạ. Em giữ lịch cho chị nha?',
          dung: '🎯 Theo thẻ #HoiGia: bám đuổi theo giá, đúng lý do khách im',
          khach: 'Ok giữ lịch T7 cho c nha e',
        },
      },
      binhLuan: {
        post: '<b>Trang trí sinh nhật tại nhà</b> chỉ từ 990K · phông bóng, bảng tên, bàn bánh, thợ setup tận nơi 🎈',
        img: L(IMG['vong-bong']),
        kav: 'TT', kten: 'Thanh Tâm', hoi: 'Có nhận trang trí thôi nôi không shop? Giá sao?',
        traLoi: 'Dạ chào chị Tâm! Shop vừa nhắn tin báo giá chi tiết cho chị, chị xem tin nhắn nhé 💬',
        act2: 'Nhắn tin riêng báo giá gói thôi nôi',
        nhan: 'Chào chị Tâm! Trang trí thôi nôi bên em có <b>gói tiêu chuẩn 1.590.000đ</b>, có bảng tên bé, cổng bóng, bàn bánh ạ. Tiệc mình ngày nào ạ?',
        sp: { ten: 'Gói trang trí thôi nôi', gia: '1.590.000đ', img: L(IMG['vong-bong']) },
        khach: 'CN 13/12 nha, bé trai tone xanh',
      },
      duLieu: {
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: bóng heli bay 3 ngày không xẹp', 'Bóng rơi giữa tiệc, khách giận, shop mất uy tín'],
        hoi: 'Bóng heli thả trần giữ được mấy ngày e? Sáng mai c mới làm tiệc',
        aiSai: 'Dạ bóng heli bay <b>3 ngày vẫn căng</b> chị nhé 🥰',
        thucTe: '⚠ Thực tế: bóng heli thường chỉ bay tốt khoảng 8–12 tiếng, nên bơm trong ngày tiệc',
        gian: 'Mới sáng ra bóng rớt hết xuống sàn! Sao nói 3 ngày? 😠',
        cho: 'Dạ chị chờ em một chút để em kiểm tra chính xác cho chị nhé!',
        nv: 'Nhân viên Linh · người thật',
        nvTraLoi: 'Dạ em xin lỗi chị ạ. Bóng heli chỉ bay tốt khoảng 8–12 tiếng. Em cho thợ qua bơm lại chùm bóng mới miễn phí trước giờ tiệc của chị nhé!',
      },
    },
  };
})();
