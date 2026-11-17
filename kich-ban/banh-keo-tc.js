/* Kịch bản: BÁNH KẸO (bánh quy, kẹo, socola, túi quà sinh nhật, quà Tết) — BẢN TRÌNH CHIẾU, nhóm THƯƠNG MẠI ĐIỆN TỬ.
   Làm 17/11/2026 theo pipeline mới (TRINH-CHIEU.md mục 1). Demo chat chuẩn thương mại điện tử (mục 3), một mạch:
     chị Ngân đặt 30 túi quà bánh kẹo cho sinh nhật bé ở lớp mầm non, ngân sách ~50k/túi; ca khó: lớp có 1 bé dị ứng đậu phộng,
     cần giao trước 8h sáng → AI lên túi 45k in tên bé, làm 1 túi riêng không đậu phộng, không hứa "an toàn tuyệt đối" (dặn xem thành phần)
     → chị im → bám đuổi 2 tin theo thẻ #TuiQuaSinhNhat (ảnh thật túi quà), #HoiGia (42k/túi + 2 túi dự phòng)
     → chốt, lên đơn (chữ in trên túi, giao tận trường) → chăm sóc sau sinh nhật bé, dặn bảo quản, gợi ý quà Tết.
   Không có tin tự động cập nhật vận chuyển, không có tin nhắc trước giờ giao. Không có bước kết thúc: bấm → là sang slide kế.
   Tên shop, giá, tên khách, SĐT, trường: dữ liệu minh họa. Ảnh: Unsplash (ảnh thật, không phải hàng của shop). */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'tui-qua': '1765317269952-82ca1acdd2ca',        // túi quà kẹo thắt nơ vàng
    'banh-quy-bo': '1626025645971-ad4780528ff5',
    'banh-quy-2': '1573827196605-0a95831e07f9',
    'banh-quy-3': '1588070141852-b6bed371e15f',
    'keo-deo': '1582058091505-f87a2e55a40f',        // kẹo dẻo hình gấu
    'keo-deo-2': '1617627191898-1408bf607b4d',
    'socola-hop': '1526081347589-7fa3cb41b4b2',     // hộp socola nhiều viên
    'socola': '1702744217578-109f77831534',
    'keo-mix': '1641420421863-4b7f0940f287',        // kẹo dẻo trái cây
    'sinh-nhat': '1766770301468-0fff596420b0',
    'tiec-keo': '1673197225588-26ff70189680',       // bàn kẹo tiệc
    'hop-banh': '1449049607083-e29383d58423',       // hộp bánh quy giấy
    'hop-banh-2': '1693464323440-e2d55f520411',
    'hat': '1605024344839-e6e41aea6b23',
    'mut-gung': '1721460204999-f3e89df4377a',
    'banh-tet': '1784386124506-617d0bec2e02',       // bánh quy nhiều loại xếp hộp
    'keo-mut': '1640310820557-248ea182a387',
    'keo-socola-mau': '1646072561229-a4549f6b45f9',
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    shop: { name: 'Kẹo Mây Hồng', initials: 'MH' },
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
        kws: ['Trả lời ngay tức thì, 24/7', 'Nhận diện đúng mẫu túi quà từ ảnh', 'Lên túi quà theo ngân sách, số bé', 'Làm túi riêng cho bé dị ứng', 'Báo hạn dùng, giao đúng giờ, chủ động chốt'] },
      { title: 'AI tự động bám đuổi khách hàng trong 7 ngày', desc: 'Tăng thêm khoảng 35% tỷ lệ chốt đơn.',
        kws: ['~65% khách nhắn tin rồi im lặng', 'Tự gắn thẻ mẫu khách xem, lý do im', 'Gửi ảnh thật túi quà đã đóng', 'Báo giá xong im → ưu đãi giá đúng lúc'] },
      { title: 'AI Agent tự động lên đơn và gửi sang đơn vị vận chuyển', desc: 'Tiết kiệm hơn 90% thời gian xử lý đơn.',
        kws: ['Thu đủ tên, SĐT, địa chỉ trường', 'Ghi đúng chữ in trên túi', 'Tự tạo đơn, hẹn giờ giao'] },
      { title: 'AI tự động chăm sóc khách hàng sau bán', desc: 'Tăng doanh thu từ khách hàng cũ.',
        kws: ['Hỏi thăm, dặn bảo quản bánh kẹo', 'Gợi ý quà Tết đúng dịp', 'Khách mua thêm, tăng giá trị vòng đời'] },
    ],

    steps: [
      { intro: true, hold: 1800 },

      /* ---- 1. Tư vấn: ca khó bé dị ứng đậu phộng, giao trước 8h ---- */
      { feature: 1 },
      { sep: 'Khách nhắn tin từ quảng cáo Facebook', style: 'time', hold: 800 },
      { img: 'tui-qua', hold: 1500 },
      { kh: 'Shop ơi sinh nhật bé nhà c ở lớp, c cần 30 túi quà bánh kẹo như này, tầm 50k/túi. Lớp có 1 bé dị ứng đậu phộng, làm riêng đc k? Giao trước 8h sáng thứ 6 đc k e?' },
      { ai: 'Dạ chào chị! Em lên túi quà cho bé ngay ạ 🎂', fast: true, meta: '⚡ Preny AI trả lời sau 2 giây', kw: 0 },
      { ai: 'Mẫu chị gửi là **túi quà sinh nhật 45.000đ/túi**: bánh quy bơ, kẹo dẻo trái cây, socola sữa, kẹo mút, **in tên bé lên túi miễn phí** ạ. 30 túi là **1.350.000đ**, vừa ngân sách chị.', kw: [1, 2] },
      { ai: 'Bé dị ứng đậu phộng em làm **1 túi riêng không có đậu phộng và các loại hạt**, dán tên bé. Thành phần ghi rõ trên từng gói, bé dị ứng nặng chị nhờ cô giáo xem lại giúp em nha.', kw: 3 },
      { kh: 'Bánh hạn dùng bao lâu e, lớp chia mấy hôm có sao k?' },
      { ai: 'Dạ bánh quy, kẹo **hạn 6 tháng**, socola để nơi thoáng mát là ổn ạ. Bên em **giao tận trường trước 8h** sáng thứ Sáu, chị kiểm tra rồi mới trả tiền. Chị chốt để em xếp lịch đóng túi nha? 😊', kw: 4 },
      { kh: 'Để c bàn với ba bé đã' },

      /* ---- 2. Khách im → bám đuổi 2 tin theo thẻ ---- */
      { feature: 2 },
      { sep: 'Khách chưa phản hồi… · AI gắn thẻ #TuiQuaSinhNhat #HoiGia', style: 'silent', kw: [0, 1], hold: 1800 },
      { sep: '— 1 ngày sau —' },
      { ai: 'Chị Ngân ơi, em gửi chị **ảnh thật túi quà sinh nhật** bên em vừa đóng cho lớp khác, có in tên bé trên túi, các bé thích lắm ạ 😊', meta: '🔁 Tự động · Bám đuổi theo thẻ #TuiQuaSinhNhat', kw: 2 },
      { aiImgs: [{ img: 'tui-qua', label: 'Túi quà in tên bé' }, { img: 'keo-mix', label: 'Kẹo dẻo trái cây' },
                 { img: 'banh-quy-bo', label: 'Bánh quy bơ' }, { img: 'socola', label: 'Socola sữa' }], hold: 3200 },
      { sep: '— 2 ngày sau —' },
      { ai: 'Túi quà chị hỏi giá, chốt hôm nay em để **42.000đ/túi**, tặng thêm **2 túi dự phòng** cho cô giáo, vẫn in tên bé miễn phí ạ 🎁', meta: '🔁 Tự động · Bám đuổi theo thẻ #HoiGia', kw: 3 },
      { kh: 'Ok chốt 30 túi nha e, bé tên Su' },

      /* ---- 3. Lên đơn tự động (không có tin cập nhật vận chuyển) ---- */
      { feature: 3 },
      { ai: 'Dạ chị cho em xin **tên, SĐT và địa chỉ trường** nha. Chị muốn in trên túi chữ gì ạ?', kw: 0 },
      { kh: 'Nguyễn Kim Ngân – 0938 517 264\nMầm non Hoa Mai, 45 Trần Quang Khải, P. Tân Định, Q.1. In "Mừng sinh nhật bé Su 5 tuổi"' },
      { card: {
          tag: '✓ Tin xác nhận đơn',
          intro: 'Dạ chị kiểm tra lại đơn giúp em nhé:',
          lines: ['30 Túi quà sinh nhật (bánh quy, kẹo dẻo, socola, kẹo mút)', '1 túi không đậu phộng, dán tên riêng · tặng 2 túi dự phòng', 'In trên túi: "Mừng sinh nhật bé Su 5 tuổi"', 'Tổng cộng: **1.260.000đ** · nhận hàng rồi trả tiền', 'Giao tới: Mầm non Hoa Mai, 45 Trần Quang Khải, Q.1'],
          button: 'Quản lý đơn hàng',
        }, kw: 1, hold: 4500 },
      { kh: 'Ok em' },
      { card: {
          tag: '✓ Đã tạo đơn & gửi vận chuyển', ok: true,
          lines: ['Mã đơn: **#MH27115**', 'Mã vận đơn: **VD61820457**', 'Giao tận trường: **trước 8h sáng thứ Sáu, 27/11**'],
        }, kw: 2, hold: 3500 },

      /* ---- 4. Chăm sóc sau bán ---- */
      { feature: 4 },
      { sep: '— Ngày 28/11 · sau sinh nhật bé —' },
      { ai: 'Chị Ngân ơi, sinh nhật bé Su ở lớp vui không ạ? Socola còn dư chị **cất ngăn mát**, kẹo dẻo để nơi khô ráo là giữ được lâu nha 💗', meta: '💗 Tự động · Chăm sóc sau bán', kw: 0 },
      { kh: 'Các bé thích lắm em, cô giáo còn khen túi đẹp 😍' },
      { sep: '— 2 tuần sau —' },
      { ai: 'Sắp Tết rồi chị, bên em có **hộp quà Tết** biếu ông bà, khách cũ được **giảm 10%** ạ:', kw: 1 },
      { catalog: [
          { name: 'Hộp bánh quy bơ Tết', color: '', price: '279.000đ', old: '310.000đ', tag: 'Mới về', art: 'banh-tet' },
          { name: 'Mứt gừng dẻo', color: '500g', price: '107.100đ', old: '119.000đ', tag: 'Bán chạy', art: 'mut-gung' },
          { name: 'Hạt dinh dưỡng mix', color: '500g', price: '224.100đ', old: '249.000đ', tag: '-10%', art: 'hat' },
        ], hold: 4000 },
      { kh: 'Lấy c 2 hộp bánh quy Tết biếu ông bà nha', kw: 2, hold: 1500 },
      // Không có { end: true }: bấm → thêm một lần là sang thẳng slide kế.
    ],

    /* ===== Nội dung slide trình chiếu (trinh-chieu.html). Slide thống kê dùng số minh họa (deck.dashboard). ===== */
    deck: {
      /* Demo chat dọc (demo-doc.js): tên khách trên Messenger, bài đăng Facebook (anh = khóa trong images), câu bình luận. */
      demoDoc: {
        khach: 'Kim Ngân',
        sanPham: 'Túi quà sinh nhật bé',
        binhLuan: 'Xin giá túi quà',
        post: {
          tieuDe: 'TÚI QUÀ SINH NHẬT CHO BÉ – IN TÊN MIỄN PHÍ 🎂',
          dong: ['Bánh quy, kẹo dẻo, socola', 'In tên bé lên túi', 'Làm túi riêng bé dị ứng', 'Giao tận trường đúng giờ'],
          anh: ['tui-qua', 'keo-deo', 'socola-hop', 'banh-quy-bo'],
        },
      },
      /* Pipeline thương mại điện tử 16/11/2026 (TRINH-CHIEU.md mục 1): dashboard, chatbot, afterSale. */
      dashboard: [
        { ten: 'Bánh kẹo <span class="grad">sinh nhật</span>', den: '21/07/2026', khach: 12, tyLe: 0.56 },
        { ten: 'Bánh quy, <span class="grad">socola</span>', den: '18/08/2026', khach: 14, tyLe: 0.53 },
        { ten: 'Quà <span class="grad">bánh kẹo Tết</span>', den: '26/09/2026', khach: 10, tyLe: 0.57 },
      ],
      chatbot: {
        chat: [
          { ref: { img: L(IMG['tui-qua']), ten: 'Túi quà sinh nhật in tên bé' } },
          { kh: 'Shop ơi c cần 30 túi quà sinh nhật cho lớp bé, tầm 50k/túi. Có 1 bé dị ứng đậu phộng' },
          { ai: 'Dạ **túi quà 45.000đ/túi**: bánh quy bơ, kẹo dẻo, socola, kẹo mút, **in tên bé miễn phí** ạ. Bé dị ứng em làm **1 túi riêng không đậu phộng, không hạt**, dán tên bé.', meta: '⚡ Preny AI trả lời sau 2 giây' },
          { kh: 'Giao trước 8h sáng thứ 6 ở trường đc k e?' },
          { ai: 'Dạ được ạ! Bên em **giao tận trường trước 8h**, chị kiểm tra rồi mới trả tiền. Bánh kẹo **hạn 6 tháng**, thành phần ghi rõ trên từng gói.' },
          { kh: 'Ok chốt 30 túi. Nguyễn Kim Ngân, 0938 517 264, Mầm non Hoa Mai, 45 Trần Quang Khải, Q.1' },
          { ai: 'Dạ em lên đơn, xếp lịch đóng túi cho chị ngay ạ ⚡' },
          { don: true },
          { ok: true },
        ],
        don: {
          ten: 'Nguyễn Kim Ngân', sdt: '0938 517 264', diaChi: 'Mầm non Hoa Mai, 45 Trần Quang Khải, P. Tân Định, Q.1', ma: '#MH27115', phi: 'giao trước 8h',
          sp: [{ img: L(IMG['tui-qua']), ten: 'Túi quà sinh nhật in tên bé', sl: 30, dv: 'túi', gia: 45000 }],
        },
        anh: {
          img: L(IMG['socola-hop']),
          kh: 'Hộp socola như hình này shop có k?',
          ai: 'Dạ mẫu chị gửi là **hộp socola 24 viên** nhiều vị ạ, giá **259.000đ**. Chị mua làm quà cho cô giáo em **gói nơ, kèm thiệp** miễn phí nha.',
        },
      },
      afterSale: {
        loi: 'Cảm ơn chị Ngân đã đặt quà cho bé Su 💗 Nhiều mẹ đặt thêm mấy món này cho tiệc sinh nhật ạ:',
        sp: [
          { img: L(IMG['socola-hop']), ten: 'Hộp socola 24 viên', gia: 259000 },
          { img: L(IMG['keo-mut']), ten: 'Kẹo mút xoắn (20 cây)', gia: 89000 },
          { img: L(IMG['keo-deo']), ten: 'Kẹo dẻo hình gấu 500g', gia: 65000 },
          { img: L(IMG['hop-banh']), ten: 'Hộp bánh quy bơ', gia: 149000, cu: 169000 },
          { img: L(IMG['tiec-keo']), ten: 'Set kẹo trang trí bàn tiệc', gia: 199000 },
        ],
        khach: 'Lấy thêm c 1 hộp socola tặng cô giáo nha',
        pill: '🛍 Khách mua thêm ngay: đơn tăng từ 1.350.000đ lên 1.609.000đ',
        fmm: {
          chao: 'Chào chị Ngân 👋 Kẹo Mây Hồng vừa về hộp quà Tết 2027, gửi chị xem trước nha!',
          img: L(IMG['banh-tet']), nhan: 'QUÀ TẾT 2027',
          ten: 'Hộp bánh quy bơ, mứt, hạt Tết', mo: 'Khách cũ giảm 10%, gói quà miễn phí.', nut: 'Xem hộp quà',
        },
        zbs: {
          ten: 'Tặng chị Ngân voucher 30.000đ',
          mo: 'Cảm ơn chị đã mua quà tại Kẹo Mây Hồng. Gửi chị ưu đãi cho lần mua tiếp theo:',
          dong: [['Mã voucher', '**MAYHONG30**'], ['Ưu đãi', 'Giảm 30.000đ đơn từ 300.000đ'], ['Hạn dùng', '31/01/2027']],
          nut: 'Dùng voucher ngay',
        },
      },
      bamDuoi: {
        cmpDung: ['Khách nhắn xong im → nhắc đúng mẫu khách đã xem (thẻ <b>#TuiQuaSinhNhat</b> từ quảng cáo)',
                  'Báo giá xong im → bám đuổi theo giá: ưu đãi, quà tặng (thẻ <b>#HoiGia</b>)',
                  'Đúng nhu cầu, đúng lý do im → khách quay lại mua'],
        hoi: 'Túi quà sinh nhật giá sao shop?',
        traLoiThuong: 'Dạ 45.000đ/túi ạ.',
        refImg: L(IMG['tui-qua']), refTen: 'Túi quà sinh nhật in tên bé',
        vd1: {
          kh: 'Túi quà này còn làm kịp cuối tuần không shop?',
          ai: 'Dạ kịp ạ chị! Lớp bé mình bao nhiêu bạn để em lên số túi nha?',
          tag: '🏷 #TuiQuaSinhNhat', tagNote: 'thẻ từ quảng cáo · khách im 1 ngày',
          nhac: 'Chị ơi, em gửi chị <b>ảnh thật túi quà in tên bé</b> lớp khác vừa đặt. Chị báo em số bạn trong lớp để em giữ lịch đóng túi kịp cuối tuần nha 😊',
          dung: '🎯 Theo thẻ #TuiQuaSinhNhat: nhắc đúng mẫu khách xem',
          khach: 'Lớp c 28 bé em',
        },
        vd2: {
          kh: 'Túi quà bao nhiêu 1 túi vậy shop?',
          ai: 'Dạ túi quà sinh nhật <b>45.000đ/túi</b>, in tên bé miễn phí ạ.',
          tag: '🏷 #HoiGia', tagNote: 'báo giá xong khách im 1 ngày',
          nhac: 'Chị ơi, túi quà chị hỏi giá hôm qua hôm nay em để <b>42.000đ/túi + tặng 2 túi dự phòng</b> ạ. Em giữ lịch đóng túi cho chị nha?',
          dung: '🎯 Theo thẻ #HoiGia: bám đuổi theo giá, đúng lý do khách im',
          khach: 'Ok chốt 30 túi nha e',
        },
      },
      binhLuan: {
        post: 'Túi quà sinh nhật cho bé <b>in tên miễn phí</b> · bánh quy, kẹo dẻo, socola, giao tận trường 🎂',
        img: L(IMG['tiec-keo']),
        kav: 'TP', kten: 'Trần Phương', hoi: 'Có làm túi quà ít đường cho bé không shop? Giao Thủ Đức không?',
        traLoi: 'Dạ chào chị Phương! Shop vừa nhắn tin tư vấn chi tiết cho chị, chị xem tin nhắn nhé 💬',
        act2: 'Nhắn tin riêng tư vấn túi quà',
        nhan: 'Chào chị Phương! Bên em có <b>túi quà ít đường</b>: bánh quy yến mạch, trái cây sấy, kẹo dẻo ít đường ạ. Giao Thủ Đức <b>trong ngày</b>. Lớp bé mình bao nhiêu bạn để em báo giá nha!',
        sp: { ten: 'Túi quà ít đường cho bé', gia: 'từ 49.000đ', img: L(IMG['banh-quy-3']) },
        khach: 'Lớp c 25 bé em',
      },
      duLieu: {
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: không đường, an toàn dị ứng', 'Bé ăn bị phản ứng, shop mất uy tín'],
        hoi: 'Kẹo dẻo này không đường hoàn toàn đúng k em? Bé dị ứng sữa ăn socola được k?',
        aiSai: 'Dạ đúng ạ! Kẹo <b>không đường 100%</b>, bé dị ứng gì ăn cũng <b>an toàn tuyệt đối</b> chị nhé 🥰',
        thucTe: '⚠ Thực tế: kẹo có đường, socola có sữa, không dùng được cho bé dị ứng sữa',
        gian: 'Bé ăn xong nổi mẩn đỏ! Sao nói an toàn tuyệt đối? 😠',
        cho: 'Dạ chị chờ em một chút để em kiểm tra chính xác thành phần từng loại bánh kẹo cho bé nhé!',
        nv: 'Nhân viên Thư · người thật',
        nvTraLoi: 'Dạ kẹo dẻo có đường, socola có sữa nên bé dị ứng sữa không dùng được ạ. Em làm túi riêng không sữa, dán tên bé, thành phần ghi trên từng gói chị nhé!',
      },
    },
  };
})();
