/* Kịch bản: PHỤ TÙNG XE MÁY (bộ nhông sên dĩa cho xe số) — BẢN TRÌNH CHIẾU, nhóm THƯƠNG MẠI ĐIỆN TỬ.
   Làm 23/11/2026 theo người dùng: "TMĐT: kinh doanh phụ tùng xe máy".
   Demo chat chuẩn thương mại điện tử (mục 3), một mạch ngắn:
     anh Hùng (Wave Alpha 2018, sên kêu) hỏi giá bộ nhông sên dĩa; ca khó: sợ mua về không vừa xe
     → AI hỏi đời xe, báo đúng mã cho Wave Alpha 110 đời 2017–2022, không vừa đổi trong 7 ngày, có video tự thay hoặc mang ra tiệm gần nhà
     → hỏi bộ thường 285.000đ hay bộ có phốt cao su 420.000đ → anh im → bám đuổi 2 tin theo thẻ #NhongSenDia (ảnh thật thợ thay bộ),
       #HoiGia (tặng chai xịt dưỡng sên, freeship) → chốt, xin SĐT + địa chỉ, lên đơn
     → chăm sóc sau bán: dặn chỉnh độ chùng sên sau 500km; gợi ý nhớt, bugi, má phanh.
   Không có tin tự động cập nhật vận chuyển. Không có bước kết thúc: bấm → là sang slide kế.
   Tên shop, giá, mã phụ tùng, chính sách, tên khách, SĐT: dữ liệu minh họa. Ảnh: Unsplash (ảnh thật, không phải hàng của shop). */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'nhong-xich': '1769537754999-724044ec2e32', // bộ nhông sên dĩa trên bánh sau (ảnh quảng cáo)
    'xich-xe-so': '1519307786984-f09ae1102e8f', // sên dĩa xe số bánh căm
    'xich-2': '1745688810792-f7d036403673',     // sên vàng, nhông trước
    'dia-phanh': '1770400770192-05b8b1cdb8fb',  // đĩa phanh, cùm phanh
    'bugi': '1782885044249-863562f7e93e',       // bugi mới
    'bugi-bo': '1782885044133-27c4df887d96',    // nhiều bugi
    'nhot': '1746014994836-d3a15937e674',       // can nhớt đặt trên xe
    'cua-hang': '1767281075781-4ba2655958f0',   // tiệm phụ tùng xe máy
    'tho-sua': '1766170507864-cdd271978132',    // thợ sửa xe trước tiệm
    'thay-xich': '1674006597225-26515c7f9ffc',  // tay thợ chỉnh sên
    'lop': '1634071257121-8cd59787ff1c',        // lốp, vành căm
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    shop: { name: 'Phụ Tùng Xe Máy Minh Tiến', initials: 'MT' },
    headline: { pre: 'Hệ thống AI chatbot giúp tăng trung bình', em: '62% tỷ lệ chốt đơn' },
    sub: 'Tự động hóa toàn bộ quy trình chốt đơn, bám đuổi, lên đơn và chăm sóc khách để tăng hiệu quả bán hàng.',
    cta: 'Dùng thử miễn phí tại **preny.ai**\nHotline **0389 647 778**',
    speed: 1.13,
    timing: { read0: 1000, readPerChar: 28, readMax: 4500, type0: 800, typePerChar: 3, typeMax: 1500, fastType: 500,
              featureHold: 1400, sepHold: 1100, cardHold: 4000, introCard: 250 },

    images: Object.fromEntries(Object.entries(IMG).map(([k, id]) => [k, U(id)])),

    features: [
      { title: 'AI chatbot tư vấn, chốt đơn 24/7', desc: 'Tăng trung bình 62% tỷ lệ chốt đơn.',
        kws: ['Trả lời ngay tức thì, 24/7', 'Hỏi đúng đời xe trước khi báo mã', 'Nói rõ đổi trả nếu không vừa', 'Gợi ý bộ thường hay bộ có phốt', 'Xin SĐT, chốt đơn ngay'] },
      { title: 'AI tự động bám đuổi khách hàng trong 7 ngày', desc: 'Tăng thêm khoảng 35% tỷ lệ chốt đơn.',
        kws: ['~65% khách nhắn tin rồi im lặng', 'Tự gắn thẻ phụ tùng khách xem, lý do im', 'Gửi ảnh thật thợ thay bộ nhông sên dĩa', 'Báo giá xong im → quà tặng đúng lúc'] },
      { title: 'AI Agent tự động lên đơn và gửi sang đơn vị vận chuyển', desc: 'Tiết kiệm hơn 90% thời gian xử lý đơn.',
        kws: ['Thu đủ tên, SĐT, địa chỉ', 'Ghi đúng đời xe, loại bộ, quà tặng', 'Tự tạo đơn, gửi vận chuyển'] },
      { title: 'AI tự động chăm sóc khách hàng sau bán', desc: 'Tăng doanh thu từ khách hàng cũ.',
        kws: ['Hỏi thăm, dặn chỉnh sên sau 500km', 'Gợi ý nhớt, bugi, má phanh', 'Khách mua thêm, tăng giá trị vòng đời'] },
    ],

    steps: [
      { intro: true, hold: 1800 },

      /* ---- 1. Tư vấn ngắn: giá, sợ không vừa → hỏi đời xe → bộ thường hay có phốt ---- */
      { feature: 1 },
      { sep: 'Khách nhắn tin từ quảng cáo Facebook', style: 'time', hold: 800 },
      { img: 'nhong-xich', hold: 1500 },
      { kh: 'Bộ nhông sên dĩa này bn shop? Sợ mua về ko vừa xe' },
      { ai: 'Dạ chào anh! Em báo anh liền ạ 🏍️', fast: true, meta: '⚡ Preny AI trả lời sau 2 giây', kw: 0 },
      { ai: 'Để em báo **đúng mã cho vừa xe**, anh cho em xin **dòng xe và năm sản xuất** nha? Bên em có bộ cho Wave, Sirius, Future… giá **từ 285.000đ** ạ.', kw: 1 },
      { kh: 'Wave Alpha 2018, sên kêu quá e' },
      { ai: 'Dạ Wave Alpha 2018 anh lấy đúng mã **bộ cho Wave Alpha 110 đời 2017–2022** ạ. Lỡ không vừa bên em **đổi trong 7 ngày**, có **video hướng dẫn tự thay** hoặc anh mang ra tiệm gần nhà thay cũng được.', kw: 2 },
      { ai: 'Anh lấy **bộ thường 285.000đ** hay **bộ có phốt cao su 420.000đ** (giữ mỡ, ít kêu, đi mưa bền hơn) ạ? Đơn từ 250.000đ **freeship**. Anh gửi em **SĐT, địa chỉ** để em lên đơn nha 😊', kw: [3, 4] },
      { kh: 'Để a tính đã' },

      /* ---- 2. Khách im → bám đuổi 2 tin theo thẻ ---- */
      { feature: 2 },
      { sep: 'Khách chưa phản hồi… · AI gắn thẻ #NhongSenDia #HoiGia', style: 'silent', kw: [0, 1], hold: 1800 },
      { sep: '— 1 ngày sau —' },
      { ai: 'Anh Hùng ơi, em gửi anh **ảnh thật** thợ thay bộ nhông sên dĩa cho xe số, khoảng **30 phút** là xong, chạy êm hẳn ạ 🔧', meta: '🔁 Tự động · Bám đuổi theo thẻ #NhongSenDia', kw: 2 },
      { aiImgs: [{ img: 'thay-xich', label: 'Chỉnh độ chùng sên' }, { img: 'xich-xe-so', label: 'Bộ lắp trên xe số' },
                 { img: 'tho-sua', label: 'Thay tại tiệm' }, { img: 'nhong-xich', label: 'Dĩa, sên mới' }], hold: 3200 },
      { sep: '— 2 ngày sau —' },
      { ai: 'Bộ anh hỏi giá, chốt trong tuần này em **tặng chai xịt dưỡng sên** 100ml, **freeship** tận nhà ạ 🎁', meta: '🔁 Tự động · Bám đuổi theo thẻ #HoiGia', kw: 3 },
      { kh: 'Ok lấy a bộ có phốt nha e' },

      /* ---- 3. Xin SĐT, lên đơn tự động ---- */
      { feature: 3 },
      { ai: 'Dạ anh cho em xin **tên, SĐT và địa chỉ** nhận hàng nha ạ.', kw: 0 },
      { kh: 'Hùng – 0908 615 247\n45 Lê Văn Việt, P. Tăng Nhơn Phú A, Thủ Đức' },
      { card: {
          tag: '✓ Tin xác nhận đơn',
          intro: 'Dạ anh kiểm tra lại đơn giúp em nhé:',
          lines: ['1 **bộ nhông sên dĩa có phốt** · Wave Alpha 110 (2017–2022)', 'Tặng 1 chai xịt dưỡng sên 100ml', 'Tổng cộng: **420.000đ** · freeship · nhận hàng rồi trả tiền', 'Giao tới: Hùng, 45 Lê Văn Việt, P. Tăng Nhơn Phú A, Thủ Đức'],
          button: 'Quản lý đơn hàng',
        }, kw: 1, hold: 4200 },
      { kh: 'Ok em' },
      { card: {
          tag: '✓ Đã tạo đơn & gửi vận chuyển', ok: true,
          lines: ['Mã đơn: **#MT24112**', 'Mã vận đơn: **VD58316402**', 'Dự kiến giao: **26/11**'],
        }, kw: 2, hold: 3200 },

      /* ---- 4. Chăm sóc sau bán ---- */
      { feature: 4 },
      { sep: '— Ngày 28/11 · 2 ngày sau khi nhận —' },
      { ai: 'Anh Hùng ơi, xe thay bộ mới chạy êm chưa ạ? Chạy khoảng **500km** anh nhớ **chỉnh lại độ chùng sên**, xịt dưỡng mỗi 1.000km là bộ bền lâu nha 🔧', meta: '💛 Tự động · Chăm sóc sau bán', kw: 0 },
      { kh: 'Êm re e ơi, hết kêu rồi 👍' },
      { sep: '— 1 tuần sau —' },
      { ai: 'Bên em đang **giảm 10%** mấy món khách xe số hay thay kèm, anh xem thử nha:', kw: 1 },
      { catalog: [
          { name: 'Nhớt xe số 10W40', color: '0,8 lít', price: '86.000đ', old: '95.000đ', tag: 'Bán chạy', art: 'nhot' },
          { name: 'Bugi xe số', color: 'Wave, Sirius', price: '59.000đ', old: '65.000đ', tag: '-10%', art: 'bugi' },
          { name: 'Má phanh trước', color: 'Wave Alpha', price: '72.000đ', old: '80.000đ', tag: 'Mới về', art: 'dia-phanh' },
        ], hold: 4000 },
      { kh: 'Lấy a thêm chai nhớt nha', kw: 2, hold: 1500 },
    ],

    deck: {
      demoDoc: {
        khach: 'Quốc Hùng',
        sanPham: 'Bộ nhông sên dĩa xe số',
        binhLuan: 'Wave Alpha có bộ không shop?',
        post: {
          tieuDe: 'BỘ NHÔNG SÊN DĨA XE SỐ – TỪ 285K 🏍️',
          dong: ['Đúng mã cho Wave, Sirius, Future', 'Không vừa xe đổi trong 7 ngày', 'Có video hướng dẫn tự thay', 'Freeship đơn từ 250k'],
          anh: ['nhong-xich', 'xich-xe-so', 'thay-xich', 'cua-hang'],
        },
      },
      dashboard: [
        { ten: 'Nhông sên dĩa, <span class="grad">bộ truyền động</span>', den: '21/07/2026', khach: 26, tyLe: 0.6 },
        { ten: 'Nhớt, <span class="grad">bugi, lọc gió</span>', den: '18/08/2026', khach: 19, tyLe: 0.58 },
        { ten: 'Má phanh, <span class="grad">lốp xe</span>', den: '26/09/2026', khach: 14, tyLe: 0.61 },
      ],
      chatbot: {
        chat: [
          { ref: { img: L(IMG['nhong-xich']), ten: 'Bộ nhông sên dĩa xe số' } },
          { kh: 'Wave Alpha 2018 có bộ ko e? Sợ ko vừa' },
          { ai: 'Dạ có ạ, đúng mã **Wave Alpha 110 đời 2017–2022**, giá **từ 285.000đ**. Không vừa **đổi trong 7 ngày** ạ.', meta: '⚡ Preny AI trả lời sau 2 giây' },
          { kh: 'Bộ có phốt khác gì e?' },
          { ai: 'Dạ bộ có phốt **giữ mỡ, ít kêu, đi mưa bền hơn**, giá 420.000đ, freeship ạ. Anh gửi em SĐT, địa chỉ nha.' },
          { kh: 'Hùng, 0908 615 247, 45 Lê Văn Việt, Thủ Đức' },
          { ai: 'Dạ em lên đơn, tặng anh chai xịt dưỡng sên luôn ạ ⚡' },
          { don: true },
          { ok: true },
        ],
        don: {
          ten: 'Hùng', sdt: '0908 615 247', diaChi: '45 Lê Văn Việt, P. Tăng Nhơn Phú A, Thủ Đức', ma: '#MT24112', phi: 'miễn phí',
          sp: [{ img: L(IMG['nhong-xich']), ten: 'Bộ nhông sên dĩa có phốt · Wave Alpha', sl: 1, dv: 'bộ', gia: 420000 }],
        },
        anh: {
          img: L(IMG['bugi']),
          kh: 'Bugi như hình này có cho Wave ko e?',
          ai: 'Dạ ảnh anh gửi là **bugi đầu ren ngắn**, bên em có đúng loại cho **Wave Alpha 110**, giá **65.000đ** ạ. Anh lấy kèm bộ nhông sên dĩa em freeship luôn nha.',
        },
      },
      afterSale: {
        loi: 'Cảm ơn anh Hùng đã mua ở Minh Tiến 💛 Khách xe số hay thay kèm mấy món này ạ:',
        sp: [
          { img: L(IMG['nhot']), ten: 'Nhớt xe số 10W40 0,8 lít', gia: 95000 },
          { img: L(IMG['bugi']), ten: 'Bugi xe số Wave, Sirius', gia: 65000 },
          { img: L(IMG['dia-phanh']), ten: 'Má phanh trước Wave Alpha', gia: 80000 },
          { img: L(IMG['lop']), ten: 'Lốp sau 80/90-17', gia: 289000, cu: 320000 },
          { img: L(IMG['xich-2']), ten: 'Sên vàng 428 (thay riêng)', gia: 180000 },
        ],
        khach: 'Lấy thêm a chai nhớt nha',
        pill: '🛍 Khách mua thêm ngay: đơn tăng từ 420.000đ lên 515.000đ',
        fmm: {
          chao: 'Chào anh Hùng 👋 Phụ Tùng Minh Tiến vừa về lốp xe số mới, gửi anh xem trước nha!',
          img: L(IMG['lop']), nhan: 'HÀNG MỚI VỀ',
          ten: 'Lốp xe số 80/90-17', mo: 'Khách cũ giảm 10%, freeship.', nut: 'Xem ngay',
        },
        zbs: {
          ten: 'Tặng anh Hùng voucher 30.000đ',
          mo: 'Cảm ơn anh đã mua hàng tại Phụ Tùng Xe Máy Minh Tiến. Gửi anh ưu đãi cho lần mua tiếp theo:',
          dong: [['Mã voucher', '**MINHTIEN30**'], ['Ưu đãi', 'Giảm 30.000đ đơn từ 250.000đ'], ['Hạn dùng', '31/01/2027']],
          nut: 'Dùng voucher ngay',
        },
      },
      bamDuoi: {
        cmpDung: ['Khách nhắn xong im → nhắc đúng phụ tùng khách đã xem (thẻ <b>#NhongSenDia</b> từ quảng cáo)',
                  'Báo giá xong im → bám đuổi theo giá: quà tặng, freeship (thẻ <b>#HoiGia</b>)',
                  'Đúng nhu cầu, đúng lý do im → khách quay lại mua'],
        hoi: 'Bộ nhông sên dĩa Wave giá sao shop?',
        traLoiThuong: 'Dạ 285.000đ ạ.',
        refImg: L(IMG['nhong-xich']), refTen: 'Bộ nhông sên dĩa xe số',
        vd1: {
          kh: 'Bộ này lắp Wave Alpha vừa không shop?',
          ai: 'Dạ vừa ạ, anh cho em xin năm sản xuất để em báo đúng mã nha?',
          tag: '🏷 #NhongSenDia', tagNote: 'thẻ từ quảng cáo · khách im 1 ngày',
          nhac: 'Anh ơi, em gửi anh <b>ảnh thật thợ thay bộ nhông sên dĩa</b> cho Wave, 30 phút là xong. Không vừa xe bên em <b>đổi trong 7 ngày</b> ạ 🔧',
          dung: '🎯 Theo thẻ #NhongSenDia: nhắc đúng nỗi lo không vừa xe',
          khach: 'Wave 2018 nha e',
        },
        vd2: {
          kh: 'Bộ có phốt bao nhiêu vậy shop?',
          ai: 'Dạ bộ có phốt <b>420.000đ</b>, freeship đơn từ 250k ạ.',
          tag: '🏷 #HoiGia', tagNote: 'báo giá xong khách im 1 ngày',
          nhac: 'Anh ơi, bộ anh hỏi giá hôm qua, chốt trong tuần em <b>tặng chai xịt dưỡng sên, freeship</b> ạ. Em lên đơn cho anh nha?',
          dung: '🎯 Theo thẻ #HoiGia: bám đuổi theo giá, đúng lý do khách im',
          khach: 'Ok lấy a 1 bộ nha e',
        },
      },
      binhLuan: {
        post: 'Bộ <b>nhông sên dĩa xe số</b> từ 285k · đúng mã Wave, Sirius, Future, không vừa đổi trong 7 ngày 🏍️',
        img: L(IMG['xich-xe-so']),
        kav: 'TR', kten: 'Minh Trí', hoi: 'Sirius 2015 có bộ không shop? Giá sao?',
        traLoi: 'Dạ chào anh Trí! Shop vừa nhắn tin tư vấn chi tiết cho anh, anh xem tin nhắn nhé 💬',
        act2: 'Nhắn tin riêng báo đúng mã cho Sirius',
        nhan: 'Chào anh Trí! Sirius 2015 bên em có <b>bộ nhông sên dĩa đúng mã</b>, bộ thường <b>285.000đ</b>, bộ có phốt <b>420.000đ</b> ạ. Anh gửi em SĐT, địa chỉ để em lên đơn nha?',
        sp: { ten: 'Bộ nhông sên dĩa Sirius', gia: '285.000đ', img: L(IMG['xich-2']) },
        khach: 'Lấy a bộ thường nha',
      },
      duLieu: {
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: bảo hành 2 năm, chạy 50.000km không mòn', 'Khách đổi trả, shop mất uy tín'],
        hoi: 'Bộ này bảo hành 2 năm đúng k e? Chạy 50.000km không mòn hả?',
        aiSai: 'Dạ đúng ạ! Bộ <b>bảo hành 2 năm</b>, chạy <b>50.000km không mòn</b> anh nhé 🥰',
        thucTe: '⚠ Thực tế: bảo hành 3 tháng lỗi kỹ thuật; độ bền tùy cách chạy và chăm dưỡng sên',
        gian: 'Mới 4 tháng sên đã giãn! Sao nói bảo hành 2 năm, chạy 50.000km không mòn? 😠',
        cho: 'Dạ anh chờ em một chút để em kiểm tra chính xác thông tin sản phẩm cho anh nhé!',
        nv: 'Nhân viên Tiến · người thật',
        nvTraLoi: 'Dạ em xin lỗi anh ạ. Bộ bảo hành 3 tháng lỗi kỹ thuật, sên giãn thường do chưa chỉnh độ chùng. Anh ghé tiệm gần nhà chỉnh giúp, bên em gửi tặng anh chai xịt dưỡng sên nhé!',
      },
    },
  };
})();
