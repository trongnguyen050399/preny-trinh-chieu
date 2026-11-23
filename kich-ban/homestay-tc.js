/* Kịch bản: KHÁCH SẠN, HOMESTAY (homestay nhà gỗ Đà Lạt) — BẢN TRÌNH CHIẾU, nhóm THƯƠNG MẠI ĐIỆN TỬ,
   ngành đặt chỗ: "lên đơn" là đơn đặt phòng. Làm 23/11/2026 khi người dùng bỏ ngành "Du lịch, lưu trú" (du-lich-luu-tru-tc, đã ẩn)
   và tách thành 2 ngành riêng: "Bán tour du lịch" (tour-du-lich-tc) và ngành này.
   Từ 23/11/2026 bỏ demo chat vào thẳng (&demo): file chỉ có phần deck cho Bài 1 (slide), không viết steps/features.
   Mạch ngắn trên slide: anh Gia Bảo, 2 vợ chồng + bé 3 tuổi, muốn ở 2 đêm cuối tuần, hỏi phòng có view thật không, đêm có lạnh không,
     ô tô lên được không → AI hỏi ngày nhận/trả phòng, giờ tới; báo phòng gác mái 990.000đ/đêm T6–T7, phòng gia đình có lò sưởi 1.250.000đ,
     bé dưới 6 tuổi ở miễn phí, có nôi, có chỗ đậu ô tô → khách im → bám đuổi theo thẻ #HomestayDaLat (ảnh thật view mây), #HoiGia (tặng set trà)
     → chốt, lên đơn đặt phòng (cọc 50%) → chăm sóc sau kỳ nghỉ: gợi ý BBQ, thuê xe máy, tour săn mây, đêm thứ 3 giảm giá.
   Không có tin nhắc trước ngày nhận phòng (Preny chưa có tính năng này). Slide 6 đổi chữ "vận chuyển" thành đặt phòng qua deck.tinhNang.
   Tên homestay, giá, chính sách, tên khách, SĐT: dữ liệu minh họa. Ảnh: Unsplash (ảnh thật, không phải homestay của khách). */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'nha-go': '1609319172668-8b4f021f3b7b',        // nhà gỗ giữa rừng thông (ảnh quảng cáo)
    'a-frame': '1771749607057-17163af1f0f3',       // dãy nhà mái nhọn A-frame trên đồi
    'phong-gac-mai': '1758983065583-9cea714214f9', // phòng gác mái A-frame, cửa nhìn ra đồi
    'phong-go': '1727706572437-4fcda0cbd66f',      // phòng gỗ 2 giường, mái dốc
    'phong-lo-suoi': '1773423389979-b28b469967f8', // phòng ốp gỗ có lò sưởi
    'ban-cong': '1790417468758-e24735a390f3',      // ban công bàn ghế nhìn ra núi mây
    'view-may': '1771749607076-b6c940404f73',      // đồi rừng mây sáng sớm
    'lua-trai': '1568494354623-3d36e8d537b4',      // lửa trại buổi tối
    'lua-trai-2': '1530541930197-ff16ac917b0e',    // nhóm bạn quanh lửa trại
    'an-sang': '1641924676578-ed2792eb24de',       // khay ăn sáng trên giường
    'phong-khach': '1767348922879-a5cade5cceff',   // phòng sinh hoạt chung ấm cúng
    'rung-thong': '1580824378537-e119885b93f7',    // rừng thông có lối đi bộ
    'ho-thong': '1628873525512-82ad482c44ae',      // hồ nước, rừng thông soi bóng
    'doi-che': '1579436938466-92a9ba75812f',       // đồi chè xanh
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    shop: { name: 'Homestay Nhà Gỗ Đồi Thông', initials: 'ĐT' },
    headline: { pre: 'Hệ thống AI chatbot giúp tăng trung bình', em: '62% tỷ lệ chốt đơn' },
    sub: 'Tự động hóa toàn bộ quy trình tư vấn, bám đuổi, lên đơn đặt phòng và chăm sóc khách để lấp kín phòng.',
    cta: 'Dùng thử miễn phí tại **preny.ai**\nHotline **0389 647 778**',
    features: [],
    steps: [],

    images: Object.fromEntries(Object.entries(IMG).map(([k, id]) => [k, U(id)])),

    deck: {
      demoDoc: {
        khach: 'Gia Bảo',
        sanPham: 'Phòng gác mái view đồi thông',
        binhLuan: 'Cuối tuần còn phòng không shop?',
        post: {
          tieuDe: 'HOMESTAY NHÀ GỖ GIỮA RỪNG THÔNG 🌲',
          dong: ['Phòng gác mái view đồi thông', 'Ăn sáng, lửa trại tối thứ 7', 'Cách chợ Đà Lạt 4km', 'Có chỗ đậu ô tô'],
          anh: ['nha-go', 'phong-gac-mai', 'view-may', 'lua-trai'],
        },
      },
      dashboard: [
        { ten: 'Phòng gác mái <span class="grad">view đồi thông</span>', den: '21/07/2026', khach: 24, tyLe: 0.6 },
        { ten: 'Phòng gia đình <span class="grad">có lò sưởi</span>', den: '18/08/2026', khach: 16, tyLe: 0.56 },
        { ten: 'Combo <span class="grad">2 đêm cuối tuần</span>', den: '26/09/2026', khach: 13, tyLe: 0.54 },
      ],
      chatbot: {
        y: [
          ['Trả lời ngay tức thì, 24/7', 'Khách nhắn lúc nào, AI trả lời sau 2 giây'],
          ['Hỏi ngày ở, số người, giờ tới', 'Báo đúng phòng còn trống, đúng giá'],
          ['Giữ phòng và tự lên đơn đặt phòng', 'Khách đồng ý là AI tạo đơn ngay trên Preny'],
          ['Hiểu hình ảnh khách gửi', 'Khách gửi ảnh phòng, AI biết đúng loại phòng'],
        ],
        chat: [
          { ref: { img: L(IMG['nha-go']), ten: 'Phòng gác mái view đồi thông' } },
          { kh: '2 vc với bé 3t ở 2 đêm cuối tuần này. Phòng view thật ko e, đêm lạnh ko?' },
          {
            ai: 'Dạ nhà mình nhận phòng **T6 27/11**, trả **CN 29/11** đúng không ạ? Phòng gác mái **990.000đ/đêm**, có máy sưởi, chăn lông. Bé 3 tuổi ở **miễn phí**, có nôi cho bé ạ.',
            meta: '⚡ Preny AI trả lời sau 2 giây',
          },
          { kh: 'Đúng r e. Có phòng nào ấm hơn ko, ô tô lên được ko?' },
          {
            ai: 'Dạ có **phòng gia đình có lò sưởi** 1.250.000đ/đêm ạ. Đường lên trải nhựa, có **chỗ đậu ô tô** sát nhà. 2 đêm là **2.500.000đ**, anh cho em xin tên, SĐT để giữ phòng nha.',
          },
          { kh: 'Lấy phòng lò sưởi. Nguyễn Gia Bảo, 0937 264 815' },
          { ai: 'Dạ em lên đơn đặt phòng và gửi anh thông tin cọc ngay ạ ⚡' },
          { don: true },
          { ok: true },
        ],
        don: {
          ten: 'Nguyễn Gia Bảo',
          sdt: '0937 264 815',
          diaChi: 'Nhận phòng T6 27/11/2026 · trả phòng CN 29/11/2026',
          ma: '#DT27112',
          phi: 'cọc 50%',
          ghiChu: '2 người lớn, 1 bé 3 tuổi · có nôi · đi ô tô · tới khoảng 16h',
          sp: [{ img: L(IMG['phong-lo-suoi']), ten: 'Phòng gia đình có lò sưởi', sl: 2, dv: 'đêm', gia: 1250000 }],
        },
        anh: {
          img: L(IMG['phong-go']),
          kh: 'Phòng như hình này là phòng nào e? Có cho thêm 1 người ko',
          ai: 'Dạ hình anh gửi là **phòng gỗ 2 giường** trên tầng 2 ạ, ở thoải mái **4 người lớn**, giá **1.150.000đ/đêm** cuối tuần. Nhà anh đi 5 người thì em kê thêm **nệm phụ** cho anh nha.',
        },
      },
      afterSale: {
        y1: 'AI gửi tiếp 5 dịch vụ đi kèm để bán thêm (upsell)',
        y2: 'Phòng trống, voucher, ưu đãi mùa hoa',
        gio: 'Khách vừa đặt phòng',
        loi: 'Cảm ơn anh Gia Bảo đã đặt phòng ở Nhà Gỗ Đồi Thông 🌲 Khách đi cùng bé nhỏ hay đặt thêm mấy dịch vụ này ạ:',
        sp: [
          { img: L(IMG['lua-trai']), ten: 'Set BBQ tối cho 3 người', gia: 450000, nut: 'Đặt thêm' },
          { img: L(IMG['view-may']), ten: 'Tour săn mây sáng sớm', gia: 350000, nut: 'Đặt thêm' },
          { img: L(IMG['rung-thong']), ten: 'Thuê xe máy 1 ngày', gia: 150000, nut: 'Đặt thêm' },
          { img: L(IMG['phong-gac-mai']), ten: 'Trang trí phòng kỷ niệm', gia: 300000, nut: 'Đặt thêm' },
          { img: L(IMG['an-sang']), ten: 'Ở thêm đêm thứ 3 (giảm 30%)', gia: 875000, nut: 'Đặt thêm' },
        ],
        khach: 'Đặt thêm cho a set BBQ tối thứ 7 nha e',
        pill: '🛍 Khách đặt thêm ngay: đơn tăng từ 2.500.000đ lên 2.950.000đ',
        fmm: {
          sep: '2 tuần sau kỳ nghỉ · tin Facebook FMM',
          chao: 'Chào anh Gia Bảo 👋 Đà Lạt vào mùa hoa dã quỳ, Nhà Gỗ Đồi Thông còn vài phòng gia đình cuối tuần, gửi anh xem trước nha!',
          img: L(IMG['doi-che']),
          nhan: 'MÙA HOA DÃ QUỲ',
          ten: 'Phòng gia đình cuối tuần',
          mo: 'Khách cũ giảm 10%, tặng set BBQ.',
          nut: 'Xem phòng trống',
        },
        zbs: {
          ten: 'Tặng anh Gia Bảo voucher 10%',
          mo: 'Cảm ơn anh và gia đình đã nghỉ tại Homestay Nhà Gỗ Đồi Thông. Gửi anh ưu đãi cho lần nghỉ tiếp theo:',
          dong: [['Mã voucher', '**DOITHONG10**'], ['Ưu đãi', 'Giảm 10% mọi loại phòng'], ['Hạn dùng', '30/06/2027']],
          nut: 'Đặt phòng ngay',
        },
      },
      // Slide 6: có lên đơn (đặt phòng) → giữ 6 tính năng, chỉ đổi chữ "vận chuyển"
      tinhNang: [
        ['AI chatbot chốt đơn tự động 100%', 'Tăng trung bình 62% tỷ lệ chốt đơn'],
        ['AI Agent tự lên đơn đặt phòng', 'Tiết kiệm hơn 90% thời gian xử lý đơn'],
        ['AI tự bám đuổi khách trong 7 ngày', 'Tăng thêm khoảng 35% tỷ lệ chốt đơn'],
        ['AI tự chăm sóc khách sau kỳ nghỉ', 'Gợi ý phòng trống, ưu đãi, khách đặt lại'],
        ['Bộ công cụ Remarketing FMM và ZBS', 'Khai thác hiệu quả dữ liệu khách hàng'],
        ['Tự gửi sự kiện mua hàng qua Meta CAPI', 'Hỗ trợ tối ưu quảng cáo Facebook'],
      ],

      bamDuoi: {
        cmpDung: ['Khách nhắn xong im → nhắc đúng phòng khách xem (thẻ <b>#HomestayDaLat</b> từ quảng cáo)',
                  'Báo giá xong im → bám đuổi theo giá: quà tặng, ưu đãi đặt sớm (thẻ <b>#HoiGia</b>)',
                  'Đúng nhu cầu, đúng lý do im → khách quay lại đặt phòng'],
        hoi: 'Phòng gác mái cuối tuần giá sao shop?',
        traLoiThuong: 'Dạ 990.000đ/đêm ạ.',
        refImg: L(IMG['nha-go']), refTen: 'Phòng gác mái view đồi thông',
        vd1: {
          kh: 'Phòng có view đồi thông thật không shop? Sợ lên hình khác',
          ai: 'Dạ view thật ạ! Nhà mình đi ngày nào, mấy người để em kiểm tra phòng trống nha?',
          tag: '🏷 #HomestayDaLat', tagNote: 'thẻ từ quảng cáo · khách im 1 ngày',
          nhac: 'Anh ơi, em gửi anh <b>ảnh thật view mây</b> khách chụp từ ban công phòng gác mái sáng nay ạ 🌲 Cuối tuần này em <b>giữ tạm 1 phòng</b> cho anh nha.',
          dung: '🎯 Theo thẻ #HomestayDaLat: nhắc đúng nỗi lo view',
          khach: 'Đẹp vậy, giữ a T6 tới CN',
        },
        vd2: {
          kh: '2 đêm phòng lò sưởi bao nhiêu e?',
          ai: 'Dạ 2 đêm phòng gia đình có lò sưởi là <b>2.500.000đ</b>, gồm ăn sáng ạ.',
          tag: '🏷 #HoiGia', tagNote: 'báo giá xong khách im 1 ngày',
          nhac: 'Anh ơi, phòng anh hỏi giá hôm qua, đặt trong hôm nay em <b>tặng set trà gừng, khoai lang nướng</b> bên lửa trại tối T7 ạ. Em giữ phòng cho anh nha?',
          dung: '🎯 Theo thẻ #HoiGia: bám đuổi theo giá, đúng lý do khách im',
          khach: 'Ok giữ phòng cho a',
        },
      },
      binhLuan: {
        post: '<b>Homestay nhà gỗ giữa rừng thông</b> Đà Lạt · phòng gác mái view đồi, ăn sáng, lửa trại tối thứ 7 🌲',
        img: L(IMG['a-frame']),
        kav: 'TD', kten: 'Thùy Dương', hoi: 'Nhóm 6 bạn ở 1 đêm thì có phòng nào không shop?',
        traLoi: 'Dạ chào chị Dương! Homestay vừa nhắn tin tư vấn chi tiết cho chị, chị xem tin nhắn nhé 💬',
        act2: 'Nhắn tin riêng báo phòng nhóm',
        nhan: 'Chào chị Dương! Nhóm 6 bạn chị ở <b>2 phòng gỗ 2 giường</b> sát nhau là vừa ạ, <b>1.150.000đ/phòng/đêm</b> cuối tuần, có lửa trại tối T7. Nhóm mình đi ngày nào để em giữ phòng nha!',
        sp: { ten: 'Phòng gỗ 2 giường · 4 người', gia: '1.150.000đ/đêm', img: L(IMG['phong-go']) },
        khach: 'Tụi mình đi T7 tuần sau',
      },
      duLieu: {
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: phòng nào cũng view, có hồ bơi nước nóng', 'Khách đánh giá xấu trên mạng'],
        hoi: 'Phòng nào cũng nhìn ra đồi thông hả em? Có hồ bơi nước nóng không?',
        aiSai: 'Dạ đúng ạ! <b>Phòng nào cũng view đồi thông</b>, có cả <b>hồ bơi nước nóng</b> luôn anh 🥰',
        thucTe: '⚠ Thực tế: chỉ phòng gác mái nhìn thẳng ra đồi; homestay không có hồ bơi',
        gian: 'Phòng tôi nhìn ra bãi xe, hồ bơi cũng không có! Sao nói khác vậy? 😠',
        cho: 'Dạ anh chờ em một chút để em kiểm tra chính xác loại phòng và tiện ích cho anh nhé!',
        nv: 'Lễ tân Thanh Trúc · người thật',
        nvTraLoi: 'Dạ em xin lỗi anh ạ. Chỉ phòng gác mái nhìn thẳng ra đồi thông, homestay không có hồ bơi. Em đổi cho anh lên phòng gác mái, không tính thêm tiền nhé!',
      },
    },
  };
})();
