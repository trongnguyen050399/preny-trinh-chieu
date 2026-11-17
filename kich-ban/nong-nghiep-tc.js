/* Kịch bản: BÁN LẺ NÔNG NGHIỆP (thuốc trừ sâu, phân bón, cây giống, cây cảnh) — BẢN TRÌNH CHIẾU, nhóm THƯƠNG MẠI ĐIỆN TỬ.
   Làm 17/11/2026 theo pipeline mới (TRINH-CHIEU.md mục 1). Demo chat chuẩn thương mại điện tử (mục 3), một mạch:
     anh Lộc (3 sào rau cải ở Đức Trọng, Lâm Đồng) gửi ảnh con bọ ăn lá, đòi thuốc "mạnh, diệt sạch nhanh" trong khi chục ngày nữa cắt rau bán
     → AI không khuyên thuốc hóa học mạnh vì sắp thu hoạch, tư vấn thuốc trừ sâu sinh học, nói rõ thời gian cách ly trên nhãn,
       pha đúng liều trên nhãn, phun chiều mát, mặc đồ bảo hộ; không hứa diệt sạch 100%, không nêu tên hoạt chất
     → anh im → bám đuổi 2 tin theo thẻ #ThuocSinhHoc (ảnh thật chai thuốc, nhãn liều pha), #HoiGia (giảm giá + tặng phân bón)
     → chốt, lên đơn (hỏi có sẵn bình phun, đồ bảo hộ chưa), giao trong ngày → chăm sóc sau bán: hỏi thăm sau khi phun, dặn cách ly,
       gợi ý phân bón, cây giống, bonsai chưng Tết.
   Ngành nông dược: AI không chẩn đoán bừa, không hứa diệt 100%, dặn đọc nhãn (slide "không chế dữ liệu" dựng đúng chỗ này).
   Không có tin tự động cập nhật vận chuyển. Không có bước kết thúc: bấm → là sang slide kế.
   Tên shop, sản phẩm, giá, tên khách, SĐT: dữ liệu minh họa. Ảnh: Unsplash (ảnh thật, không phải hàng của shop). */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'phun-thuoc': '1593999094742-4f5280054b23',   // nông dân đeo bình phun thuốc ngoài ruộng
    'chai-thuoc': '1648712788842-b41bb3e1b041',   // chai thuốc trắng nhãn đỏ
    'chai-thuoc-2': '1648712788764-a2447a2d01d9', // 4 chai thuốc nhiều màu nhãn
    'phan-bon': '1710223221719-6251cb1b5c5b',     // phân bón dạng hạt trắng
    'cay-giong': '1457530378978-8bac673b8062',    // cây con mới nảy mầm
    'bonsai': '1599598177991-ec67b5c37318',       // bonsai tùng chậu gốm
    'vuon-rau': '1529313780224-1a12b68bed16',     // luống rau ăn lá
    'sau-la': '1525351636136-5f275635d285',       // con bọ cánh cứng trên cành lá
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    shop: { name: 'Nông Gia Phú Điền', initials: 'PĐ' },
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
        kws: ['Trả lời ngay tức thì, 24/7', 'Nhận ra sâu hại từ ảnh khách gửi', 'Hỏi ngày thu hoạch, khuyên thuốc sinh học', 'Dặn liều trên nhãn, đồ bảo hộ, cách ly', 'Báo hàng chính hãng, giao trong ngày, chủ động chốt'] },
      { title: 'AI tự động bám đuổi khách hàng trong 7 ngày', desc: 'Tăng thêm khoảng 35% tỷ lệ chốt đơn.',
        kws: ['~65% khách nhắn tin rồi im lặng', 'Tự gắn thẻ sản phẩm khách hỏi, lý do im', 'Gửi ảnh thật chai thuốc, nhãn liều pha', 'Báo giá xong im → ưu đãi giá đúng lúc'] },
      { title: 'AI Agent tự động lên đơn và gửi sang đơn vị vận chuyển', desc: 'Tiết kiệm hơn 90% thời gian xử lý đơn.',
        kws: ['Thu đủ tên, SĐT, địa chỉ vườn', 'Gửi tin xác nhận đơn đầy đủ', 'Tự tạo đơn, giao trong ngày'] },
      { title: 'AI tự động chăm sóc khách hàng sau bán', desc: 'Tăng doanh thu từ khách hàng cũ.',
        kws: ['Hỏi thăm sau khi phun, dặn cách ly', 'Gợi ý vật tư theo mùa vụ', 'Khách mua thêm, tăng giá trị vòng đời'] },
    ],

    steps: [
      { intro: true, hold: 1800 },

      /* ---- 1. Tư vấn: đòi thuốc mạnh diệt sạch nhanh trong khi rau sắp thu hoạch ---- */
      { feature: 1 },
      { sep: 'Khách nhắn tin từ quảng cáo Facebook', style: 'time', hold: 800 },
      { img: 'sau-la', hold: 1500 },
      { kh: 'Rau cải nhà a bị con này ăn lá thủng lỗ chỗ. Shop có thuốc nào mạnh mạnh diệt sạch nhanh k? Chục ngày nữa a cắt bán rồi' },
      { ai: 'Dạ chào anh! Em tư vấn cho anh ngay ạ 🌱', fast: true, meta: '⚡ Preny AI trả lời sau 2 giây', kw: 0 },
      { ai: 'Nhìn ảnh thì giống **bọ cánh cứng ăn lá** anh ạ, nó hay nấp **mặt dưới lá**. Rau **còn chục ngày là cắt** thì em **không khuyên thuốc hóa học mạnh**: thời gian cách ly dài, cắt bán sớm dễ **tồn dư thuốc** anh nha.', kw: [1, 2] },
      { ai: 'Anh dùng **thuốc trừ sâu sinh học** chai 500ml, giá **145.000đ**, nhãn ghi **cách ly 3 ngày**. Thuốc tác dụng chậm hơn, bọ **giảm rõ sau 2–3 ngày**, em không hứa sạch 100% được đâu anh.', kw: 2 },
      { kh: 'Sinh học yếu lắm, phun có ăn thua k e? 3 sào pha sao?' },
      { ai: 'Dạ 3 sào anh lấy **2 chai**, **pha đúng liều ghi trên nhãn**, đừng pha đặc hơn, phun kỹ **mặt dưới lá** lúc **chiều mát**. Nhớ **mặc áo dài tay, đeo khẩu trang, găng tay** khi phun nha anh.', kw: 3 },
      { ai: 'Hàng **chính hãng, có tem**, shop **giao trong ngày** quanh Đức Trọng ạ. Anh lấy 2 chai để em giao chiều nay kịp phun nha? 😊', kw: 4 },
      { kh: 'Để a ra vườn coi lại đã' },

      /* ---- 2. Khách im → bám đuổi 2 tin theo thẻ ---- */
      { feature: 2 },
      { sep: 'Khách chưa phản hồi… · AI gắn thẻ #ThuocSinhHoc #HoiGia', style: 'silent', kw: [0, 1], hold: 1800 },
      { sep: '— 1 ngày sau —' },
      { ai: 'Anh Lộc ơi, em gửi anh **ảnh thật chai thuốc sinh học** và **nhãn ghi liều pha, thời gian cách ly** để anh xem trước nha. Bọ ăn lá để lâu dễ lan sang luống khác đó anh 🌱', meta: '🔁 Tự động · Bám đuổi theo thẻ #ThuocSinhHoc', kw: 2 },
      { aiImgs: [{ img: 'chai-thuoc', label: 'Chai 500ml · tem chính hãng' }, { img: 'chai-thuoc-2', label: 'Đủ dòng cho rau, cây ăn trái' },
                 { img: 'phun-thuoc', label: 'Phun chiều mát, có bảo hộ' }, { img: 'vuon-rau', label: 'Phun kỹ mặt dưới lá' }], hold: 3200 },
      { sep: '— 2 ngày sau —' },
      { ai: 'Thuốc sinh học anh hỏi giá, lấy **2 chai** trong hôm nay em **giảm còn 260.000đ** + **tặng 1 gói phân bón hữu cơ**, vẫn giao trong ngày ạ 🎁', meta: '🔁 Tự động · Bám đuổi theo thẻ #HoiGia', kw: 3 },
      { kh: 'Ok lấy a 2 chai, giao chiều nay giúp a nha' },

      /* ---- 3. Lên đơn tự động (không có tin cập nhật vận chuyển) ---- */
      { feature: 3 },
      { ai: 'Dạ anh cho em xin **tên, SĐT và địa chỉ vườn** nha. Nhà mình có sẵn **bình phun, khẩu trang, găng tay** chưa anh?', kw: 0 },
      { kh: 'Trần Văn Lộc – 0976 418 253\nThôn Phú Thạnh, xã Hiệp An, Đức Trọng, Lâm Đồng. Bình có rồi, lấy thêm a 1 bộ bảo hộ' },
      { card: {
          tag: '✓ Tin xác nhận đơn',
          intro: 'Dạ anh kiểm tra lại đơn giúp em nhé:',
          lines: ['2 chai Thuốc trừ sâu sinh học 500ml + 1 bộ bảo hộ', 'Tặng: 1 gói phân bón hữu cơ', 'Tổng cộng: **345.000đ** · giao trong ngày', 'Người nhận: Trần Văn Lộc · 0976 418 253', 'Giao tới: Thôn Phú Thạnh, xã Hiệp An, Đức Trọng'],
          button: 'Quản lý đơn hàng',
        }, kw: 1, hold: 4500 },
      { kh: 'Ok em' },
      { card: {
          tag: '✓ Đã tạo đơn & gửi vận chuyển', ok: true,
          lines: ['Mã đơn: **#PD52107**', 'Mã vận đơn: **VD39071624**', 'Giao trong ngày: **chiều nay**, kèm giấy dặn liều pha'],
        }, kw: 2, hold: 3500 },

      /* ---- 4. Chăm sóc sau bán ---- */
      { feature: 4 },
      { sep: '— 3 ngày sau —' },
      { ai: 'Anh Lộc ơi, phun xong bọ giảm chưa anh? Anh nhớ **cách ly đủ ngày ghi trên nhãn** rồi mới cắt bán, rửa sạch bình phun và **cất thuốc xa tầm tay trẻ em** nha 💚', meta: '💚 Tự động · Chăm sóc sau bán', kw: 0 },
      { kh: 'Bọ giảm nhiều rồi e, lá non ra đẹp 👍' },
      { sep: '— 2 tuần sau —' },
      { ai: 'Cắt xong lứa rau rồi đúng không anh? Chuẩn bị lứa mới, bà con hay mua kèm mấy món này, khách cũ **giảm thêm 5%** ạ. Sắp Tết có cả **bonsai chưng nhà** nữa nè:', kw: 1 },
      { catalog: [
          { name: 'Phân bón hạt cho rau', sub: 'Bao 25kg', price: '375.000đ', old: '395.000đ', tag: 'Lứa mới', art: 'phan-bon' },
          { name: 'Khay cây giống rau cải', sub: 'Khay 100 cây', price: '57.000đ', old: '60.000đ', tag: 'Bán chạy', art: 'cay-giong' },
          { name: 'Bonsai tùng chậu gốm', sub: 'Cao 60cm', price: '1.757.000đ', old: '1.850.000đ', tag: 'Chưng Tết', art: 'bonsai' },
        ], hold: 4000 },
      { kh: 'Lấy a 2 bao phân với 3 khay cây giống nha e', kw: 2, hold: 1500 },
      // Không có { end: true }: bấm → thêm một lần là sang thẳng slide kế.
    ],

    /* ===== Nội dung slide trình chiếu (trinh-chieu.html). Slide thống kê dùng số minh họa (deck.dashboard). ===== */
    deck: {
      /* Demo chat dọc (demo-doc.js): tên khách trên Messenger, bài đăng Facebook (anh = khóa trong images), câu bình luận. */
      demoDoc: {
        khach: 'Lộc Trần',
        sanPham: 'Thuốc trừ sâu sinh học 500ml',
        binhLuan: 'Rau bị bọ ăn lá dùng thuốc gì shop',
        post: {
          tieuDe: 'THUỐC TRỪ SÂU SINH HỌC CHO RAU ĂN LÁ 🌿',
          dong: ['Cách ly ngắn, ghi rõ trên nhãn', 'Hàng chính hãng, có tem', 'Kỹ thuật dặn liều pha', 'Giao trong ngày'],
          anh: ['chai-thuoc', 'sau-la', 'phun-thuoc', 'vuon-rau'],
        },
      },
      /* Pipeline thương mại điện tử 16/11/2026 (TRINH-CHIEU.md mục 1): dashboard, chatbot, afterSale. */
      dashboard: [
        { ten: 'Thuốc <span class="grad">bảo vệ thực vật</span>', den: '23/07/2026', khach: 11, tyLe: 0.55 },
        { ten: 'Phân bón, <span class="grad">cây giống</span>', den: '20/08/2026', khach: 13, tyLe: 0.53 },
        { ten: 'Cây cảnh, <span class="grad">bonsai</span>', den: '28/09/2026', khach: 8, tyLe: 0.57 },
      ],
      chatbot: {
        chat: [
          { ref: { img: L(IMG['chai-thuoc']), ten: 'Thuốc trừ sâu sinh học 500ml' } },
          { kh: 'Rau cải bị bọ ăn lá, có thuốc nào mạnh diệt sạch nhanh k shop? Chục ngày nữa a cắt bán' },
          { ai: 'Dạ rau **sắp thu hoạch** thì anh đừng dùng thuốc hóa học mạnh, dễ **tồn dư thuốc** ạ. Anh dùng **thuốc trừ sâu sinh học** chai 500ml, giá **145.000đ**, nhãn ghi **cách ly 3 ngày**.', meta: '⚡ Preny AI trả lời sau 2 giây' },
          { kh: '3 sào lấy mấy chai, pha sao em?' },
          { ai: 'Dạ 3 sào anh lấy **2 chai**, **pha đúng liều trên nhãn**, phun **chiều mát**, mặc **đồ bảo hộ**. Hàng **chính hãng**, giao trong ngày ạ.' },
          { kh: 'Ok lấy a 2 chai. Trần Văn Lộc, 0976 418 253, xã Hiệp An, Đức Trọng, Lâm Đồng' },
          { ai: 'Dạ em lên đơn, giao trong ngày cho anh ngay ạ ⚡' },
          { don: true },
          { ok: true },
        ],
        don: {
          ten: 'Trần Văn Lộc', sdt: '0976 418 253', diaChi: 'Thôn Phú Thạnh, xã Hiệp An, Đức Trọng, Lâm Đồng', ma: '#PD52107', phi: 'giao trong ngày',
          sp: [{ img: L(IMG['chai-thuoc']), ten: 'Thuốc trừ sâu sinh học 500ml', sl: 2, gia: 145000 }],
        },
        anh: {
          img: L(IMG['bonsai']),
          kh: 'Cây bonsai như hình này shop có k, chưng Tết được k em?',
          ai: 'Dạ hình anh gửi là **bonsai tùng chậu gốm**, cao khoảng **60cm**, giá **1.850.000đ** ạ. Tùng **xanh quanh năm**, chưng Tết đẹp. Anh để chỗ có **nắng sáng**, tưới vừa ẩm là được nha.',
        },
      },
      afterSale: {
        loi: 'Cảm ơn anh Lộc đã tin Phú Điền 💚 Chuẩn bị lứa rau mới, bà con hay mua kèm mấy món này ạ:',
        sp: [
          { img: L(IMG['phan-bon']), ten: 'Phân bón hạt cho rau 25kg', gia: 395000 },
          { img: L(IMG['cay-giong']), ten: 'Khay cây giống rau 100 cây', gia: 60000 },
          { img: L(IMG['chai-thuoc-2']), ten: 'Bộ 4 chai thuốc sinh học', gia: 520000, cu: 580000 },
          { img: L(IMG['phun-thuoc']), ten: 'Bình phun đeo vai 16 lít', gia: 650000 },
          { img: L(IMG['bonsai']), ten: 'Bonsai tùng chưng Tết', gia: 1850000 },
        ],
        khach: 'Lấy thêm a 2 bao phân bón nha em',
        pill: '🛍 Khách mua thêm ngay: đơn tăng từ 290.000đ lên 1.080.000đ',
        fmm: {
          chao: 'Chào anh Lộc 👋 Sắp Tết rồi, Phú Điền vừa về lô bonsai, cây cảnh chưng Tết, gửi anh xem trước nha!',
          img: L(IMG['bonsai']), nhan: 'HÀNG MỚI VỀ',
          ten: 'Bonsai tùng, cây cảnh chưng Tết', mo: 'Khách cũ giảm 5%, giao tận nhà.', nut: 'Xem sản phẩm',
        },
        zbs: {
          ten: 'Tặng anh Lộc voucher 50.000đ',
          mo: 'Cảm ơn anh đã mua vật tư tại Phú Điền. Gửi anh ưu đãi cho lần mua tiếp theo:',
          dong: [['Mã voucher', '**PHUDIEN50**'], ['Ưu đãi', 'Giảm 50.000đ đơn từ 500.000đ'], ['Hạn dùng', '28/02/2027']],
          nut: 'Dùng voucher ngay',
        },
      },
      bamDuoi: {
        cmpDung: ['Khách nhắn xong im → nhắc đúng sản phẩm khách hỏi (thẻ <b>#ThuocSinhHoc</b> từ quảng cáo)',
                  'Báo giá xong im → bám đuổi theo giá: ưu đãi, quà tặng (thẻ <b>#HoiGia</b>)',
                  'Đúng nhu cầu, đúng lý do im → khách quay lại mua'],
        hoi: 'Thuốc trừ sâu này giá bao nhiêu shop?',
        traLoiThuong: 'Dạ chai 145.000đ ạ.',
        refImg: L(IMG['chai-thuoc']), refTen: 'Thuốc trừ sâu sinh học 500ml',
        vd1: {
          kh: 'Thuốc này phun rau cải được không shop?',
          ai: 'Dạ được ạ! Rau nhà mình còn mấy ngày nữa thu hoạch để em dặn thời gian cách ly cho đúng nha?',
          tag: '🏷 #ThuocSinhHoc', tagNote: 'thẻ từ quảng cáo · khách im 1 ngày',
          nhac: 'Anh ơi, em gửi anh <b>ảnh thật chai thuốc và nhãn ghi liều pha, thời gian cách ly</b> nha. Rau còn mấy ngày nữa cắt để em dặn anh phun cho đúng ạ 😊',
          dung: '🎯 Theo thẻ #ThuocSinhHoc: nhắc đúng sản phẩm khách hỏi',
          khach: 'Chục ngày nữa a cắt em',
        },
        vd2: {
          kh: 'Thuốc sinh học bao nhiêu 1 chai shop?',
          ai: 'Dạ chai <b>500ml</b> giá <b>145.000đ</b> ạ.',
          tag: '🏷 #HoiGia', tagNote: 'báo giá xong khách im 1 ngày',
          nhac: 'Anh ơi, thuốc anh hỏi giá hôm qua, lấy <b>2 chai hôm nay em giảm còn 260.000đ + tặng phân bón hữu cơ</b> ạ. Em giữ hàng cho anh nha?',
          dung: '🎯 Theo thẻ #HoiGia: bám đuổi theo giá, đúng lý do khách im',
          khach: 'Ok giữ a 2 chai',
        },
      },
      binhLuan: {
        post: 'Phân bón, thuốc sinh học, cây giống <b>chính hãng</b> · kỹ thuật tư vấn miễn phí 🌱',
        img: L(IMG['vuon-rau']),
        kav: 'HN', kten: 'Hoàng Nam', hoi: 'Rau muống nhà mình bị vàng lá, dùng phân gì shop?',
        traLoi: 'Dạ chào anh Nam! Shop vừa nhắn tin tư vấn chi tiết cho anh, anh xem tin nhắn nhé 💬',
        act2: 'Nhắn tin riêng, xin ảnh lá để tư vấn',
        nhan: 'Chào anh Nam! Vàng lá có nhiều nguyên nhân: <b>thiếu đạm, úng nước hay sâu bệnh</b> ạ. Anh chụp giúp em <b>lá và gốc rau</b> gửi qua đây để kỹ thuật xem rồi mới tư vấn phân, thuốc nha!',
        sp: { ten: 'Phân bón hạt cho rau 25kg', gia: '395.000đ', img: L(IMG['phan-bon']) },
        khach: 'Để mình chụp gửi em',
      },
      duLieu: {
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: diệt sạch 100%, cắt bán ngay', 'Rau tồn dư thuốc, shop mất uy tín'],
        hoi: 'Phun thuốc này xong mai cắt rau bán luôn được không em? Diệt sạch hết bọ không?',
        aiSai: 'Dạ được ạ! Thuốc <b>diệt sạch 100%</b>, phun xong <b>mai cắt bán luôn</b> anh nhé 🥰',
        thucTe: '⚠ Thực tế: phải cách ly đủ ngày ghi trên nhãn, không diệt sạch 100%',
        gian: 'Rau bị thương lái trả về vì dư thuốc! Sao bảo cắt bán luôn được? 😠',
        cho: 'Dạ anh chờ em một chút để kỹ thuật kiểm tra lại thông tin chính xác cho mình nhé!',
        nv: 'Kỹ sư Tín · người thật',
        nvTraLoi: 'Dạ thuốc phải cách ly đủ 3 ngày như nhãn ghi mới được cắt anh ạ. Bọ giảm rõ chứ không sạch 100%, anh phun chiều mát và mặc đồ bảo hộ nhé!',
      },
    },
  };
})();
