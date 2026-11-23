/* Kịch bản: NỘI THẤT Ô TÔ (thảm lót sàn da 6D theo form xe) — BẢN TRÌNH CHIẾU, nhóm THƯƠNG MẠI ĐIỆN TỬ.
   Làm 23/11/2026 theo người dùng: "làm ngành TMDT bán nội thất oto".
   Demo chat chuẩn thương mại điện tử (mục 3), một mạch ngắn:
     anh Thịnh (Toyota Vios 2022) hỏi giá thảm lót sàn 6D; ca khó: sợ không vừa form, sợ có mùi, hỏi tự lắp được không
     → AI báo 1.350.000đ cho Vios 2018–2023, cắt theo form từng dòng xe, không vừa đổi, da PU không mùi, chống nước,
       đặt vào là xong (có video) → hỏi màu đen hay đỏ → anh im → bám đuổi 2 tin theo thẻ #ThamLotSan (ảnh thật thảm trên xe),
       #HoiGia (tặng khăn lau microfiber, freeship) → chốt, xin SĐT + địa chỉ, lên đơn
     → chăm sóc sau bán: dặn cách lau thảm; gợi ý lót cốp, bọc vô lăng, nước hoa xe.
   Không có tin tự động cập nhật vận chuyển. Không có bước kết thúc: bấm → là sang slide kế.
   Tên shop, giá, form xe, chính sách, tên khách, SĐT: dữ liệu minh họa.
   Ảnh: Unsplash (ảnh thật, không phải hàng của shop; vài ảnh là nội thất xe hãng khác, chữ không ghi đó là Vios). */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'tham-den': '1640705049944-de916f415bb4',  // thảm vân trám đen dưới ghế lái (ảnh quảng cáo)
    'tham-do': '1687455564554-4bdbb8f15437',   // thảm vân trám đỏ dưới chân lái
    'tham-sau': '1745243996628-eccec80eb2d6',  // thảm vân trám hàng ghế sau
    'lot-cop': '1602161755661-3781cddac355',   // lót cốp
    'vo-lang': '1598859159221-1fffc50b4932',   // vô lăng bọc da
    'nuoc-hoa': '1793690807352-04423426292a',  // nước hoa treo xe
    'camera': '1765959106936-851735565c12',    // camera hành trình
    'ghe-da': '1614530499660-fe1fbd7921d6',    // ghế da đen
    'lau-xe': '1732357624591-f2137085659b',    // khăn lau nội thất
    'sac': '1760818078878-6948eb2fc2cf',       // đế sạc không dây
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    shop: { name: 'Nội Thất Ô Tô Phát Đạt', initials: 'PĐ' },
    headline: { pre: 'Hệ thống AI chatbot giúp tăng trung bình', em: '62% tỷ lệ chốt đơn' },
    sub: 'Tự động hóa toàn bộ quy trình chốt đơn, bám đuổi, lên đơn và chăm sóc khách để tăng hiệu quả bán hàng.',
    cta: 'Dùng thử miễn phí tại **preny.ai**\nHotline **0389 647 778**',
    speed: 1.13,
    timing: { read0: 1000, readPerChar: 28, readMax: 4500, type0: 800, typePerChar: 3, typeMax: 1500, fastType: 500,
              featureHold: 1400, sepHold: 1100, cardHold: 4000, introCard: 250 },

    images: Object.fromEntries(Object.entries(IMG).map(([k, id]) => [k, U(id)])),

    features: [
      { title: 'AI chatbot tư vấn, chốt đơn 24/7', desc: 'Tăng trung bình 62% tỷ lệ chốt đơn.',
        kws: ['Trả lời ngay tức thì, 24/7', 'Hỏi đúng dòng xe, đời xe', 'Nói rõ đổi nếu không vừa form', 'Gợi ý màu thảm hợp nội thất', 'Xin SĐT, chốt đơn ngay'] },
      { title: 'AI tự động bám đuổi khách hàng trong 7 ngày', desc: 'Tăng thêm khoảng 35% tỷ lệ chốt đơn.',
        kws: ['~65% khách nhắn tin rồi im lặng', 'Tự gắn thẻ sản phẩm khách xem, lý do im', 'Gửi ảnh thật thảm lót trên xe', 'Báo giá xong im → quà tặng đúng lúc'] },
      { title: 'AI Agent tự động lên đơn và gửi sang đơn vị vận chuyển', desc: 'Tiết kiệm hơn 90% thời gian xử lý đơn.',
        kws: ['Thu đủ tên, SĐT, địa chỉ', 'Ghi đúng dòng xe, đời xe, màu thảm', 'Tự tạo đơn, gửi vận chuyển'] },
      { title: 'AI tự động chăm sóc khách hàng sau bán', desc: 'Tăng doanh thu từ khách hàng cũ.',
        kws: ['Hỏi thăm, dặn cách lau thảm', 'Gợi ý lót cốp, bọc vô lăng, nước hoa', 'Khách mua thêm, tăng giá trị vòng đời'] },
    ],

    steps: [
      { intro: true, hold: 1800 },

      /* ---- 1. Tư vấn ngắn: giá, sợ không vừa, sợ mùi → báo đúng form → màu đen hay đỏ ---- */
      { feature: 1 },
      { sep: 'Khách nhắn tin từ quảng cáo Facebook', style: 'time', hold: 800 },
      { img: 'tham-den', hold: 1500 },
      { kh: 'Thảm này Vios 2022 bn shop? Có vừa ko, có mùi ko?' },
      { ai: 'Dạ chào anh! Em báo anh liền ạ 🚗', fast: true, meta: '⚡ Preny AI trả lời sau 2 giây', kw: 0 },
      { ai: 'Vios 2022 anh lấy đúng form **Vios 2018–2023**, thảm 6D **1.350.000đ** trọn bộ sàn trước và sau ạ. Bên em **cắt theo form từng dòng xe**, lỡ không vừa em **đổi ngay**.', kw: [1, 2] },
      { kh: 'Có mùi ko e, tự lắp đc ko?' },
      { ai: 'Dạ da PU **không mùi, chống nước**, dơ chỉ cần **lau khăn ẩm** ạ. Thảm **đặt vào là xong**, không cần khoan bắt, em gửi kèm **video hướng dẫn**. Bảo hành **12 tháng** anh nha.', kw: 2 },
      { ai: 'Anh lấy **màu đen** hay **màu đỏ** ạ? Đen dễ hợp nội thất, đỏ nhìn thể thao hơn. Bên em **freeship toàn quốc**. Anh gửi em **SĐT, địa chỉ** để em lên đơn nha 😊', kw: [3, 4] },
      { kh: 'Để a xem lại đã' },

      /* ---- 2. Khách im → bám đuổi 2 tin theo thẻ ---- */
      { feature: 2 },
      { sep: 'Khách chưa phản hồi… · AI gắn thẻ #ThamLotSan #HoiGia', style: 'silent', kw: [0, 1], hold: 1800 },
      { sep: '— 1 ngày sau —' },
      { ai: 'Anh Thịnh ơi, em gửi anh **ảnh thật** thảm 6D vân trám bên em lắp trên xe khách, ôm kín sàn, không hở mép ạ 🚗', meta: '🔁 Tự động · Bám đuổi theo thẻ #ThamLotSan', kw: 2 },
      { aiImgs: [{ img: 'tham-den', label: 'Màu đen' }, { img: 'tham-do', label: 'Màu đỏ' },
                 { img: 'tham-sau', label: 'Hàng ghế sau' }, { img: 'lau-xe', label: 'Lau khăn ẩm là sạch' }], hold: 3200 },
      { sep: '— 2 ngày sau —' },
      { ai: 'Bộ thảm anh hỏi giá, chốt trong tuần này em **tặng khăn lau microfiber**, **freeship** tận nhà ạ 🎁', meta: '🔁 Tự động · Bám đuổi theo thẻ #HoiGia', kw: 3 },
      { kh: 'Ok lấy a màu đen nha e' },

      /* ---- 3. Xin SĐT, lên đơn tự động ---- */
      { feature: 3 },
      { ai: 'Dạ anh cho em xin **tên, SĐT và địa chỉ** nhận hàng nha ạ.', kw: 0 },
      { kh: 'Thịnh – 0938 472 615\n18 Nguyễn Thị Thập, P. Tân Hưng, Q.7' },
      { card: {
          tag: '✓ Tin xác nhận đơn',
          intro: 'Dạ anh kiểm tra lại đơn giúp em nhé:',
          lines: ['1 bộ **thảm lót sàn 6D màu đen** · Toyota Vios 2018–2023', 'Tặng 1 khăn lau microfiber', 'Tổng cộng: **1.350.000đ** · freeship · nhận hàng rồi trả tiền', 'Giao tới: Thịnh, 18 Nguyễn Thị Thập, P. Tân Hưng, Q.7'],
          button: 'Quản lý đơn hàng',
        }, kw: 1, hold: 4200 },
      { kh: 'Ok em' },
      { card: {
          tag: '✓ Đã tạo đơn & gửi vận chuyển', ok: true,
          lines: ['Mã đơn: **#PD24117**', 'Mã vận đơn: **VD58316927**', 'Dự kiến giao: **26/11**'],
        }, kw: 2, hold: 3200 },

      /* ---- 4. Chăm sóc sau bán ---- */
      { feature: 4 },
      { sep: '— Ngày 28/11 · 2 ngày sau khi nhận —' },
      { ai: 'Anh Thịnh ơi, thảm lên xe vừa form chưa ạ? Dơ anh chỉ cần **lau khăn ẩm**, không xịt nước trực tiếp vào mép may là thảm bền lâu nha 🚗', meta: '💛 Tự động · Chăm sóc sau bán', kw: 0 },
      { kh: 'Vừa khít e ơi, xe nhìn sang hẳn 👍' },
      { sep: '— 1 tuần sau —' },
      { ai: 'Bên em đang **giảm 10%** mấy món khách Vios hay lấy kèm, anh xem thử nha:', kw: 1 },
      { catalog: [
          { name: 'Lót cốp da 6D', color: 'Vios 2018–2023', price: '405.000đ', old: '450.000đ', tag: 'Bán chạy', art: 'lot-cop' },
          { name: 'Bọc vô lăng da', color: 'Đen chỉ đỏ', price: '225.000đ', old: '250.000đ', tag: '-10%', art: 'vo-lang' },
          { name: 'Nước hoa treo xe', color: 'Hương gỗ', price: '135.000đ', old: '150.000đ', tag: 'Mới về', art: 'nuoc-hoa' },
        ], hold: 4000 },
      { kh: 'Lấy a thêm cái lót cốp nha', kw: 2, hold: 1500 },
    ],

    deck: {
      demoDoc: {
        khach: 'Đức Thịnh',
        sanPham: 'Thảm lót sàn da 6D',
        binhLuan: 'Vios 2022 có form không shop?',
        post: {
          tieuDe: 'THẢM LÓT SÀN DA 6D – CẮT THEO FORM XE 🚗',
          dong: ['Sedan 5 chỗ chỉ 1.350K', 'Không mùi, chống nước', 'Không vừa form đổi ngay', 'Freeship toàn quốc'],
          anh: ['tham-den', 'tham-do', 'tham-sau', 'lot-cop'],
        },
      },
      dashboard: [
        { ten: 'Thảm lót sàn, <span class="grad">lót cốp</span>', den: '21/07/2026', khach: 24, tyLe: 0.59 },
        { ten: 'Bọc vô lăng, <span class="grad">bọc ghế da</span>', den: '18/08/2026', khach: 17, tyLe: 0.57 },
        { ten: 'Camera hành trình, <span class="grad">phụ kiện</span>', den: '26/09/2026', khach: 13, tyLe: 0.6 },
      ],
      chatbot: {
        chat: [
          { ref: { img: L(IMG['tham-den']), ten: 'Thảm lót sàn da 6D' } },
          { kh: 'Vios 2022 có vừa ko e? Có mùi ko?' },
          { ai: 'Dạ có ạ, đúng form **Vios 2018–2023**, giá **1.350.000đ**. Da PU **không mùi**, không vừa **đổi ngay** ạ.', meta: '⚡ Preny AI trả lời sau 2 giây' },
          { kh: 'Tự lắp đc ko e?' },
          { ai: 'Dạ **đặt vào là xong**, có video hướng dẫn, freeship ạ. Anh lấy màu đen hay đỏ, gửi em SĐT, địa chỉ nha.' },
          { kh: 'Màu đen. Thịnh, 0938 472 615, 18 Nguyễn Thị Thập, Q.7' },
          { ai: 'Dạ em lên đơn, tặng anh khăn lau microfiber luôn ạ ⚡' },
          { don: true },
          { ok: true },
        ],
        don: {
          ten: 'Thịnh', sdt: '0938 472 615', diaChi: '18 Nguyễn Thị Thập, P. Tân Hưng, Q.7', ma: '#PD24117', phi: 'miễn phí',
          sp: [{ img: L(IMG['tham-den']), ten: 'Thảm lót sàn 6D màu đen · Vios', sl: 1, dv: 'bộ', gia: 1350000 }],
        },
        anh: {
          img: L(IMG['ghe-da']),
          kh: 'Ghế da như hình này bên e có bọc ko?',
          ai: 'Dạ ảnh anh gửi là **ghế da đen may chỉ nổi**, bên em có **bọc ghế da theo form Vios** cùng kiểu này ạ. Anh lấy kèm thảm sàn em giảm thêm cho anh nha.',
        },
      },
      afterSale: {
        loi: 'Cảm ơn anh Thịnh đã mua ở Phát Đạt 💛 Khách Vios hay lấy kèm mấy món này ạ:',
        sp: [
          { img: L(IMG['lot-cop']), ten: 'Lót cốp da 6D Vios', gia: 450000 },
          { img: L(IMG['vo-lang']), ten: 'Bọc vô lăng da chỉ đỏ', gia: 250000 },
          { img: L(IMG['nuoc-hoa']), ten: 'Nước hoa treo xe hương gỗ', gia: 150000 },
          { img: L(IMG['camera']), ten: 'Camera hành trình 2K', gia: 1290000, cu: 1490000 },
          { img: L(IMG['sac']), ten: 'Đế sạc không dây', gia: 390000 },
        ],
        khach: 'Lấy thêm a cái lót cốp nha',
        pill: '🛍 Khách mua thêm ngay: đơn tăng từ 1.350.000đ lên 1.800.000đ',
        fmm: {
          chao: 'Chào anh Thịnh 👋 Nội Thất Ô Tô Phát Đạt vừa về camera hành trình 2K, gửi anh xem trước nha!',
          img: L(IMG['camera']), nhan: 'HÀNG MỚI VỀ',
          ten: 'Camera hành trình 2K', mo: 'Khách cũ giảm 10%, freeship.', nut: 'Xem ngay',
        },
        zbs: {
          ten: 'Tặng anh Thịnh voucher 50.000đ',
          mo: 'Cảm ơn anh đã mua hàng tại Nội Thất Ô Tô Phát Đạt. Gửi anh ưu đãi cho lần mua tiếp theo:',
          dong: [['Mã voucher', '**PHATDAT50**'], ['Ưu đãi', 'Giảm 50.000đ đơn từ 400.000đ'], ['Hạn dùng', '31/01/2027']],
          nut: 'Dùng voucher ngay',
        },
      },
      bamDuoi: {
        cmpDung: ['Khách nhắn xong im → nhắc đúng sản phẩm khách đã xem (thẻ <b>#ThamLotSan</b> từ quảng cáo)',
                  'Báo giá xong im → bám đuổi theo giá: quà tặng, freeship (thẻ <b>#HoiGia</b>)',
                  'Đúng nhu cầu, đúng lý do im → khách quay lại mua'],
        hoi: 'Thảm 6D Vios giá sao shop?',
        traLoiThuong: 'Dạ 1.350.000đ ạ.',
        refImg: L(IMG['tham-den']), refTen: 'Thảm lót sàn da 6D',
        vd1: {
          kh: 'Thảm này lắp Vios vừa không shop?',
          ai: 'Dạ vừa ạ, anh cho em xin đời xe để em báo đúng form nha?',
          tag: '🏷 #ThamLotSan', tagNote: 'thẻ từ quảng cáo · khách im 1 ngày',
          nhac: 'Anh ơi, em gửi anh <b>ảnh thật thảm 6D lắp trên xe khách</b>, ôm kín sàn. Không vừa form bên em <b>đổi ngay</b> ạ 🚗',
          dung: '🎯 Theo thẻ #ThamLotSan: nhắc đúng nỗi lo không vừa form',
          khach: 'Vios 2022 nha e',
        },
        vd2: {
          kh: 'Bộ thảm Vios bao nhiêu vậy shop?',
          ai: 'Dạ thảm 6D Vios <b>1.350.000đ</b>, freeship toàn quốc ạ.',
          tag: '🏷 #HoiGia', tagNote: 'báo giá xong khách im 1 ngày',
          nhac: 'Anh ơi, bộ thảm anh hỏi giá hôm qua, chốt trong tuần em <b>tặng khăn lau microfiber, freeship</b> ạ. Em lên đơn cho anh nha?',
          dung: '🎯 Theo thẻ #HoiGia: bám đuổi theo giá, đúng lý do khách im',
          khach: 'Ok lấy a màu đen nha e',
        },
      },
      binhLuan: {
        post: '<b>Thảm lót sàn da 6D</b> cắt theo form xe · sedan 5 chỗ 1.350K, không mùi, chống nước 🚗',
        img: L(IMG['tham-do']),
        kav: 'HN', kten: 'Hoàng Nam', hoi: 'Accent 2021 có form không shop? Giá sao?',
        traLoi: 'Dạ chào anh Nam! Shop vừa nhắn tin tư vấn chi tiết cho anh, anh xem tin nhắn nhé 💬',
        act2: 'Nhắn tin riêng báo đúng form Accent',
        nhan: 'Chào anh Nam! Accent 2021 bên em có <b>thảm 6D đúng form</b>, giá <b>1.350.000đ</b> trọn bộ, có màu đen và đỏ ạ. Anh gửi em SĐT, địa chỉ để em lên đơn nha?',
        sp: { ten: 'Thảm 6D Hyundai Accent', gia: '1.350.000đ', img: L(IMG['tham-do']) },
        khach: 'Lấy a màu đỏ nha',
      },
      duLieu: {
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: bảo hành 5 năm, xe nào cũng vừa', 'Khách đổi trả, shop mất uy tín'],
        hoi: 'Thảm này bảo hành 5 năm đúng k e? Xe nào cũng vừa hả?',
        aiSai: 'Dạ đúng ạ! Thảm <b>bảo hành 5 năm</b>, <b>xe nào cũng vừa</b> anh nhé 🥰',
        thucTe: '⚠ Thực tế: bảo hành 12 tháng; thảm cắt theo form từng dòng xe, đời xe',
        gian: 'Thảm về hở mép, không vừa xe! Sao nói xe nào cũng vừa, bảo hành 5 năm? 😠',
        cho: 'Dạ anh chờ em một chút để em kiểm tra chính xác thông tin sản phẩm cho anh nhé!',
        nv: 'Nhân viên Đạt · người thật',
        nvTraLoi: 'Dạ em xin lỗi anh ạ. Thảm cắt theo form từng dòng xe và đời xe, bảo hành 12 tháng. Anh gửi em ảnh xe, bên em đổi đúng form cho anh, miễn phí vận chuyển nhé!',
      },
    },
  };
})();
