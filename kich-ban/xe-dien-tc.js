/* Kịch bản: PHƯƠNG TIỆN (xe máy điện, xe đạp điện, xe máy, mũ bảo hiểm, phụ kiện) — BẢN TRÌNH CHIẾU, nhóm THƯƠNG MẠI ĐIỆN TỬ.
   Làm 17/11/2026 theo pipeline mới (TRINH-CHIEU.md mục 1). Demo chat chuẩn thương mại điện tử (mục 3), một mạch:
     chị Hạnh mua xe máy điện cho con gái đi học cấp 3, mỗi ngày khoảng 15km, chung cư không cho sạc dưới hầm
     → AI tính quãng đường mỗi lần sạc, pin tháo rời mang lên nhà sạc; ca khó hỏi dồn: đi mưa ngập, pin bao lâu phải thay,
       so với xe 13 triệu chỗ khác (ắc quy chì), có cần bằng lái, biển số → AI trả lời chung "làm đủ giấy tờ, biển số", không bịa luật
     → chị im (bàn với chồng) → bám đuổi 2 tin theo thẻ #XeMayDienHocSinh (ảnh thật các mẫu, màu), #HoiGia (giảm giá + tặng áo mưa)
     → chốt, lên đơn (hỏi xe đứng tên ai để làm biển số), giao xe tận nhà → chăm sóc sau bán: dặn sạc đúng cách, bảo dưỡng,
       gợi ý mũ bảo hiểm cả đầu, xe cho em út, xe cho mẹ.
   Không có tin tự động cập nhật vận chuyển. Không có bước kết thúc: bấm → là sang slide kế.
   Tên shop, giá, chính sách, tên khách, SĐT: dữ liệu minh họa. Ảnh: Unsplash (ảnh thật, không phải hàng của shop). */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'xe-may-dien': '1642665129048-4440bf8f97db',     // xe máy điện trắng, cô gái đội mũ bảo hiểm
    'xe-may-dien-2': '1749035803294-61356ea3cad8',   // xe đạp điện bánh to, đậu dưới hầm
    'xe-vang': '1538895490524-0ded232a96d8',         // xe tay ga màu vàng kiểu cổ điển
    'xe-den': '1648204834832-78e68052c04f',          // xe máy điện đen nhám trên đường
    'mu-bao-hiem': '1649027421785-6827863f0891',     // mũ bảo hiểm cả đầu màu đen
    'cua-hang': '1671354925315-229af5178a83',        // showroom xe nhìn từ trên
    'duong-pho': '1644377931361-8a509fa5c4cd',       // đường phố đông xe máy
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    shop: { name: 'Xe Điện Gió Xanh', initials: 'GX' },
    headline: { pre: 'Hệ thống AI chatbot giúp tăng trung bình', em: '62% tỷ lệ chốt đơn' },
    sub: 'Tự động hóa toàn bộ quy trình chốt đơn, bám đuổi, lên đơn và chăm sóc khách để tăng hiệu quả bán hàng.',
    cta: 'Dùng thử miễn phí tại **preny.ai**\nHotline **0389 647 778**',
    speed: 1.13,
    timing: { read0: 1000, readPerChar: 28, readMax: 4500, type0: 800, typePerChar: 3, typeMax: 1500, fastType: 500,
              featureHold: 1400, sepHold: 1100, cardHold: 4000, introCard: 250 },

    images: Object.fromEntries(Object.entries(IMG).map(([k, id]) => [k, U(id)])),

    // Cột trái demo ngang (dùng khi xuất video): đúng 4 tính năng được diễn, theo thứ tự diễn
    features: [
      { title: 'AI chatbot tư vấn, chốt đơn 24/7', desc: 'Tăng trung bình 62% tỷ lệ chốt đơn.',
        kws: ['Trả lời ngay tức thì, 24/7', 'Nhận diện đúng mẫu xe từ ảnh khách gửi', 'Tính quãng đường theo nhu cầu đi học', 'Giải đáp lo ngại: sạc, đi mưa, thay pin', 'Lo giấy tờ, biển số, chủ động chốt'] },
      { title: 'AI tự động bám đuổi khách hàng trong 7 ngày', desc: 'Tăng thêm khoảng 35% tỷ lệ chốt đơn.',
        kws: ['~65% khách nhắn tin rồi im lặng', 'Tự gắn thẻ mẫu xe khách xem, lý do im', 'Gửi ảnh thật các mẫu, màu xe', 'Báo giá xong im → ưu đãi giá đúng lúc'] },
      { title: 'AI Agent tự động lên đơn và gửi sang đơn vị vận chuyển', desc: 'Tiết kiệm hơn 90% thời gian xử lý đơn.',
        kws: ['Thu đủ tên, SĐT, địa chỉ, người đứng tên xe', 'Gửi tin xác nhận đơn đầy đủ', 'Tự tạo đơn, giao xe tận nhà'] },
      { title: 'AI tự động chăm sóc khách hàng sau bán', desc: 'Tăng doanh thu từ khách hàng cũ.',
        kws: ['Hỏi thăm, dặn sạc pin đúng cách', 'Gợi ý phụ kiện theo mùa', 'Khách mua thêm, tăng giá trị vòng đời'] },
    ],

    steps: [
      { intro: true, hold: 1800 },

      /* ---- 1. Tư vấn: quãng đường, chỗ sạc; ca khó hỏi dồn (đi mưa, thay pin, so giá rẻ hơn, bằng lái, biển số) ---- */
      { feature: 1 },
      { sep: 'Khách nhắn tin từ quảng cáo Facebook', style: 'time', hold: 800 },
      { img: 'xe-may-dien', hold: 1500 },
      { kh: 'Xe này giá sao e? Mua cho con gái lên lớp 11 đi học, đi về tầm 15km/ngày. Chung cư c k cho sạc dưới hầm thì sạc kiểu gì?' },
      { ai: 'Dạ chào chị! Em tư vấn cho chị ngay ạ 🛵', fast: true, meta: '⚡ Preny AI trả lời sau 2 giây', kw: 0 },
      { ai: 'Mẫu chị gửi là **xe máy điện học sinh pin tháo rời**, giá **16.900.000đ** ạ. Xe đi khoảng **80km mỗi lần sạc**, con đi 15km/ngày thì **4–5 ngày mới sạc 1 lần**.', kw: [1, 2] },
      { ai: 'Pin **tháo rời được**, nặng khoảng **9kg, có quai xách**: con rút pin mang lên nhà cắm sạc như sạc laptop, **không cần sạc dưới hầm** chị nhé. Sạc đầy khoảng **6 tiếng**.', kw: 2 },
      { kh: 'Mùa mưa đường nhà c hay ngập, đi qua có sao k? Pin bao lâu phải thay? Bên kia báo có 13tr thôi e' },
      { ai: 'Dạ pin và động cơ đạt **chuẩn chống nước IP67**, đi mưa bình thường, nước ngập **dưới nửa bánh xe** thì đi chậm qua được. Ngập sâu hơn chị dặn con **dắt bộ**, đừng cố chạy nha.', kw: 3 },
      { ai: 'Pin lithium **bảo hành 3 năm**, dùng đúng cách thường **5–6 năm** mới phải thay. Xe 13 triệu đa số dùng **ắc quy chì**: nặng, **không tháo mang lên nhà sạc** được, 1,5–2 năm đã phải thay ắc quy ạ.', kw: 3 },
      { kh: 'Có cần bằng lái, biển số gì k e?' },
      { ai: 'Dạ xe máy điện cần **đăng ký biển số** ạ. Bên em **làm đủ giấy tờ, biển số trọn gói**, kèm hướng dẫn quy định mới nhất để con đi đúng luật. Tháng này mua xe **tặng áo mưa bộ**, chị chốt màu để em giữ xe cho con nha? 😊', kw: 4 },
      { kh: 'Để c bàn với ba nó đã' },

      /* ---- 2. Khách im → bám đuổi 2 tin theo thẻ ---- */
      { feature: 2 },
      { sep: 'Khách chưa phản hồi… · AI gắn thẻ #XeMayDienHocSinh #HoiGia', style: 'silent', kw: [0, 1], hold: 1800 },
      { sep: '— 1 ngày sau —' },
      { ai: 'Chị Hạnh ơi, em gửi chị **ảnh thật các mẫu, màu xe** đang có sẵn để chị với anh cho con chọn nha 😊 Em đang **giữ tạm 1 xe màu trắng** cho con kịp đi học ạ.', meta: '🔁 Tự động · Bám đuổi theo thẻ #XeMayDienHocSinh', kw: 2 },
      { aiImgs: [{ img: 'xe-may-dien', label: 'Màu trắng' }, { img: 'xe-den', label: 'Màu đen nhám' },
                 { img: 'xe-vang', label: 'Bản cổ điển màu vàng' }, { img: 'duong-pho', label: 'Gọn nhẹ đi phố đông' }], hold: 3200 },
      { sep: '— 2 ngày sau —' },
      { ai: 'Xe chị hỏi giá, chốt trong hôm nay em **giảm 1.000.000đ còn 15.900.000đ**, vẫn **tặng áo mưa bộ** và **làm biển số trọn gói** ạ 🎁', meta: '🔁 Tự động · Bám đuổi theo thẻ #HoiGia', kw: 3 },
      { kh: 'Ok c lấy màu trắng cho con nha em' },

      /* ---- 3. Lên đơn tự động (không có tin cập nhật vận chuyển) ---- */
      { feature: 3 },
      { ai: 'Dạ chị cho em xin **tên, SĐT và địa chỉ** nhận xe nha. Xe **đứng tên chị hay anh** để em làm giấy tờ, biển số ạ?', kw: 0 },
      { kh: 'Nguyễn Thu Hạnh – 0938 214 657\nCăn 1208 tòa B2, chung cư Hoa Sen, P. Yên Hòa, Hà Nội. Đứng tên c nha' },
      { card: {
          tag: '✓ Tin xác nhận đơn',
          intro: 'Dạ chị kiểm tra lại đơn giúp em nhé:',
          lines: ['1 Xe máy điện học sinh pin tháo rời · màu trắng', 'Tặng: 1 áo mưa bộ · làm biển số trọn gói', 'Tổng cộng: **15.900.000đ** · trả khi nhận xe', 'Người nhận: Nguyễn Thu Hạnh · 0938 214 657', 'Giao tới: Căn 1208 tòa B2, chung cư Hoa Sen'],
          button: 'Quản lý đơn hàng',
        }, kw: 1, hold: 4500 },
      { kh: 'Ok em' },
      { card: {
          tag: '✓ Đã tạo đơn & gửi vận chuyển', ok: true,
          lines: ['Mã đơn: **#GX21508**', 'Mã vận đơn: **VD60418273**', 'Giao xe tận nhà: **2–3 ngày**, pin đã sạc đầy'],
        }, kw: 2, hold: 3500 },

      /* ---- 4. Chăm sóc sau bán ---- */
      { feature: 4 },
      { sep: '— 1 tuần sau —' },
      { ai: 'Chị Hạnh ơi, con đi xe ổn không ạ? Chị dặn con **sạc khi pin còn 20–30%**, đầy thì rút sạc, **không sạc trong phòng ngủ**. Xe được **bảo dưỡng miễn phí 3 tháng/lần** tại cửa hàng nha 💚', meta: '💚 Tự động · Chăm sóc sau bán', kw: 0 },
      { kh: 'Con đi thích lắm em, 4–5 ngày mới sạc 1 lần thật 👍' },
      { sep: '— 3 tuần sau —' },
      { ai: 'Sắp vào **mùa mưa rét** rồi chị. Mấy món phụ huynh bên em hay mua thêm cho con, khách cũ **giảm 10%** ạ:', kw: 1 },
      { catalog: [
          { name: 'Mũ bảo hiểm cả đầu', sub: 'Kính chắn mưa, lót tháo giặt', price: '585.000đ', old: '650.000đ', tag: 'Mùa mưa', art: 'mu-bao-hiem' },
          { name: 'Xe đạp điện cho em út', sub: 'Pin tháo rời, đi khoảng 50km', price: '9.810.000đ', old: '10.900.000đ', tag: 'Bán chạy', art: 'xe-may-dien-2' },
          { name: 'Xe máy điện bản cổ điển', sub: 'Cho mẹ đi chợ, đi làm', price: '17.910.000đ', old: '19.900.000đ', tag: '-10%', art: 'xe-vang' },
        ], hold: 4000 },
      { kh: 'Lấy c thêm 1 mũ bảo hiểm cả đầu cho con nha em', kw: 2, hold: 1500 },
      // Không có { end: true }: bấm → thêm một lần là sang thẳng slide kế.
    ],

    /* ===== Nội dung slide trình chiếu (trinh-chieu.html). Slide thống kê dùng số minh họa (deck.dashboard). ===== */
    deck: {
      /* Demo chat dọc (demo-doc.js): tên khách trên Messenger, bài đăng Facebook (anh = khóa trong images), câu bình luận. */
      demoDoc: {
        khach: 'Thu Hạnh',
        sanPham: 'Xe máy điện học sinh',
        binhLuan: 'Xin giá xe màu trắng',
        post: {
          tieuDe: 'XE MÁY ĐIỆN HỌC SINH PIN THÁO RỜI 🛵',
          dong: ['Đi khoảng 80km mỗi lần sạc', 'Pin xách lên nhà sạc', 'Chống nước chuẩn IP67', 'Làm biển số trọn gói'],
          anh: ['xe-may-dien', 'xe-den', 'xe-vang', 'mu-bao-hiem'],
        },
      },
      /* Pipeline thương mại điện tử 16/11/2026 (TRINH-CHIEU.md mục 1): dashboard, chatbot, afterSale. */
      dashboard: [
        { ten: 'Xe máy điện <span class="grad">học sinh</span>', den: '21/07/2026', khach: 11, tyLe: 0.56 },
        { ten: 'Xe đạp điện, <span class="grad">xe điện gấp</span>', den: '18/08/2026', khach: 8, tyLe: 0.54 },
        { ten: 'Xe máy, <span class="grad">phụ kiện</span>', den: '26/09/2026', khach: 9, tyLe: 0.57 },
      ],
      chatbot: {
        chat: [
          { ref: { img: L(IMG['xe-may-dien']), ten: 'Xe máy điện học sinh pin tháo rời' } },
          { kh: 'Xe này giá sao e? Mua cho con đi học, tầm 15km/ngày. Chung cư k cho sạc dưới hầm thì sao?' },
          { ai: 'Dạ xe giá **16.900.000đ**, đi khoảng **80km mỗi lần sạc**, con đi 15km/ngày thì **4–5 ngày sạc 1 lần** ạ. Pin **tháo rời, có quai xách**, con mang lên nhà sạc, không cần sạc dưới hầm nha chị.', meta: '⚡ Preny AI trả lời sau 2 giây' },
          { kh: 'Đi mưa ngập có sao k? Có làm biển số luôn k e?' },
          { ai: 'Dạ pin, động cơ **chống nước IP67**, ngập dưới nửa bánh xe vẫn đi chậm qua được ạ. Bên em **làm đủ giấy tờ, biển số trọn gói**, tặng **áo mưa bộ**, giao xe tận nhà chị nha.' },
          { kh: 'Ok lấy c màu trắng. Nguyễn Thu Hạnh, 0938 214 657, B2 chung cư Hoa Sen, Yên Hòa' },
          { ai: 'Dạ em lên đơn, xếp giao xe tận nhà cho chị ngay ạ ⚡' },
          { don: true },
          { ok: true },
        ],
        don: {
          ten: 'Nguyễn Thu Hạnh', sdt: '0938 214 657', diaChi: 'Căn 1208 tòa B2, chung cư Hoa Sen, P. Yên Hòa, Hà Nội', ma: '#GX21508', phi: 'giao tận nhà',
          sp: [{ img: L(IMG['xe-may-dien']), ten: 'Xe máy điện học sinh pin tháo rời', sl: 1, gia: 16900000 }],
        },
        anh: {
          img: L(IMG['mu-bao-hiem']),
          kh: 'Mũ bảo hiểm như hình này bên em có bán k?',
          ai: 'Dạ hình chị gửi là **mũ bảo hiểm cả đầu** ạ, có **kính chắn mưa**, lót tháo ra giặt được, giá **650.000đ**. Con đi học mùa mưa rét đội loại này **kín gió, đỡ ướt mặt** hơn mũ nửa đầu nhiều nha chị.',
        },
      },
      afterSale: {
        loi: 'Cảm ơn chị Hạnh đã tin Xe Điện Gió Xanh 💚 Phụ huynh mua xe cho con hay sắm thêm mấy món này ạ:',
        sp: [
          { img: L(IMG['mu-bao-hiem']), ten: 'Mũ bảo hiểm cả đầu', gia: 650000 },
          { img: L(IMG['cua-hang']), ten: 'Gói bảo dưỡng 2 năm', gia: 990000, cu: 1200000 },
          { img: L(IMG['duong-pho']), ten: 'Bảo hiểm thân xe 1 năm', gia: 450000 },
          { img: L(IMG['xe-may-dien-2']), ten: 'Xe đạp điện cho em út', gia: 10900000 },
          { img: L(IMG['xe-vang']), ten: 'Xe máy điện bản cổ điển', gia: 19900000, nut: 'Xem xe' },
        ],
        khach: 'Lấy c thêm mũ bảo hiểm cả đầu với gói bảo dưỡng 2 năm nha',
        pill: '🛍 Khách mua thêm ngay: đơn tăng từ 16.900.000đ lên 18.540.000đ',
        fmm: {
          chao: 'Chào chị Hạnh 👋 Gió Xanh vừa về xe máy điện bản cổ điển, gửi chị xem trước nha!',
          img: L(IMG['xe-vang']), nhan: 'HÀNG MỚI VỀ',
          ten: 'Xe máy điện bản cổ điển màu vàng', mo: 'Khách cũ giảm 10%, làm biển số trọn gói.', nut: 'Xem xe',
        },
        zbs: {
          ten: 'Tặng chị Hạnh voucher 500.000đ',
          mo: 'Cảm ơn chị đã mua xe tại Xe Điện Gió Xanh. Gửi chị ưu đãi cho lần mua tiếp theo:',
          dong: [['Mã voucher', '**GIOXANH500**'], ['Ưu đãi', 'Giảm 500.000đ đơn từ 5.000.000đ'], ['Hạn dùng', '31/03/2027']],
          nut: 'Dùng voucher ngay',
        },
      },
      bamDuoi: {
        cmpDung: ['Khách nhắn xong im → nhắc đúng mẫu xe khách đã xem (thẻ <b>#XeMayDienHocSinh</b> từ quảng cáo)',
                  'Báo giá xong im → bám đuổi theo giá: ưu đãi, quà tặng (thẻ <b>#HoiGia</b>)',
                  'Đúng nhu cầu, đúng lý do im → khách quay lại mua'],
        hoi: 'Xe máy điện học sinh giá bao nhiêu shop?',
        traLoiThuong: 'Dạ xe giá 16.900.000đ ạ.',
        refImg: L(IMG['xe-may-dien']), refTen: 'Xe máy điện học sinh pin tháo rời',
        vd1: {
          kh: 'Xe này còn màu trắng không shop?',
          ai: 'Dạ còn ạ chị! Con đi học mỗi ngày khoảng bao nhiêu km, nhà mình sạc ở đâu để em tư vấn đúng xe nha?',
          tag: '🏷 #XeMayDienHocSinh', tagNote: 'thẻ từ quảng cáo · khách im 1 ngày',
          nhac: 'Chị ơi, em gửi chị <b>ảnh thật xe máy điện học sinh màu trắng</b> chị xem hôm qua. Pin <b>tháo rời mang lên nhà sạc</b>, đi khoảng 80km mỗi lần sạc ạ 😊',
          dung: '🎯 Theo thẻ #XeMayDienHocSinh: nhắc đúng mẫu xe khách xem',
          khach: 'Gửi c xem thêm màu khác với',
        },
        vd2: {
          kh: 'Xe máy điện này bao nhiêu e?',
          ai: 'Dạ xe giá <b>16.900.000đ</b>, pin bảo hành 3 năm ạ.',
          tag: '🏷 #HoiGia', tagNote: 'báo giá xong khách im 1 ngày',
          nhac: 'Chị ơi, xe chị hỏi giá hôm qua, hôm nay em <b>giảm 1.000.000đ + tặng áo mưa bộ</b>, làm biển số trọn gói ạ. Em giữ xe cho chị nha?',
          dung: '🎯 Theo thẻ #HoiGia: bám đuổi theo giá, đúng lý do khách im',
          khach: 'Ok giữ c 1 xe',
        },
      },
      binhLuan: {
        post: 'Xe máy điện <b>học sinh</b> · pin tháo rời mang lên nhà sạc, đi khoảng 80km mỗi lần sạc 🛵',
        img: L(IMG['xe-den']),
        kav: 'MT', kten: 'Minh Tuấn', hoi: 'Con mình cao 1m75 đi xe này có chật không, có trả góp không shop?',
        traLoi: 'Dạ chào anh Tuấn! Shop vừa nhắn tin tư vấn chi tiết cho anh, anh xem tin nhắn nhé 💬',
        act2: 'Nhắn tin riêng tư vấn đúng xe',
        nhan: 'Chào anh Tuấn! Bạn cao 1m75 anh chọn <b>bản sàn rộng màu đen nhám</b>, yên cao, để chân thoải mái ạ. Bên em có <b>trả góp 0%</b>, trả trước từ 30%. Anh muốn em gửi bảng trả góp theo tháng không ạ?',
        sp: { ten: 'Xe máy điện đen nhám sàn rộng', gia: '18.900.000đ', img: L(IMG['xe-den']) },
        khach: 'Gửi a bảng trả góp 6 tháng nhé',
      },
      duLieu: {
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: quãng đường, bảo hành pin', 'Khách mua về thấy khác, shop mất uy tín'],
        hoi: 'Xe này sạc 1 lần đi được 150km đúng không em? Pin bảo hành 5 năm hả?',
        aiSai: 'Dạ đúng ạ! Sạc đầy đi <b>150km</b>, pin <b>bảo hành 5 năm</b> luôn chị nhé 🥰',
        thucTe: '⚠ Thực tế: khoảng 80km mỗi lần sạc, pin bảo hành 3 năm',
        gian: 'Con tôi đi 60km đã hết pin! Sao bảo 150km? 😠',
        cho: 'Dạ chị chờ em một chút để em kiểm tra chính xác quãng đường mỗi lần sạc, bảo hành pin cho mình nhé!',
        nv: 'Kỹ thuật Nam · người thật',
        nvTraLoi: 'Dạ xe đi khoảng 80km mỗi lần sạc ở điều kiện tiêu chuẩn, chở nặng, leo dốc thì giảm ạ. Pin bảo hành 3 năm, em gửi chị phiếu bảo hành nhé!',
      },
    },
  };
})();
