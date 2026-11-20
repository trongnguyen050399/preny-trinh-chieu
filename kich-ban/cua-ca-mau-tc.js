/* Kịch bản: CUA CÀ MAU (cua gạch son, cua thịt, ghẹ, tôm khô, khô cá) — BẢN TRÌNH CHIẾU, nhóm THƯƠNG MẠI ĐIỆN TỬ.
   Làm 20/11/2026 theo pipeline mới (TRINH-CHIEU.md mục 1), mẫu Yến chưng tươi.
   Demo chat chuẩn thương mại điện tử (mục 3), một mạch:
     chị Thu Hà ở Q7 mua cua gạch đãi cả nhà 6 người; ca khó: hỏi cân có tính dây không, sợ cua ốm toàn nước
     → AI tư vấn 2kg cua gạch son (5–6 con), cân đã tháo dây, bóp yếm chọn từng con, cua ốm đổi liền, cua chết đền 1 đổi 1
     → chị im → bám đuổi 2 tin theo thẻ #CuaGachSon (ảnh thật cua vừa bắt ở rừng đước), #HoiGia (tặng muối ớt xanh, miễn phí giao)
     → chốt, lên đơn (giao chiều nay) → chăm sóc sau bán: dặn cách giữ cua sống chưa nấu, gợi ý tôm khô, khô cá biếu Tết.
   Không có tin tự động cập nhật vận chuyển, không có tin nhắc trước giờ giao. Không có bước kết thúc: bấm → là sang slide kế.
   Tên shop, giá, tên khách, SĐT, địa chỉ: dữ liệu minh họa. Ảnh: Unsplash (ảnh thật, không phải hàng của shop). */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'cua-hap': '1766065998279-1b565706ad25',      // cua cột dây hấp trong nồi
    'cua-gach': '1586735165774-32cfe5339073',     // cua hấp tách mai, đầy gạch
    'cua-dia': '1550586554-a5a846e56593',         // 3 con cua hấp trên đĩa đen
    'cua-song': '1615834751896-b15e2330b289',     // cua bùn sống
    'cua-da': '1547571233-02e0e8dc6a76',          // cua cột dây trên đá
    'ngu-dan': '1763968556861-ab0eb4635525',      // ngư dân thả lồng bắt cua
    'ghe': '1569904400880-17901e6acc0c',          // ghẹ hấp
    'tom-su': '1703756292793-287f082d3a45',       // tôm sú trên đá
    'tom-kho': '1789016863091-67e4dd9aa12f',      // tôm khô ở chợ
    'kho-ca': '1772588159763-749e2fb4cac4',       // khô cá
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    shop: { name: 'Cua Cà Mau Út Hiền', initials: 'UH' },
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
        kws: ['Trả lời ngay tức thì, 24/7', 'Nhận diện đúng loại cua từ ảnh', 'Tư vấn số ký theo số người ăn', 'Nói rõ cân trừ dây, cua ốm đổi liền', 'Báo giờ giao, chủ động chốt'] },
      { title: 'AI tự động bám đuổi khách hàng trong 7 ngày', desc: 'Tăng thêm khoảng 35% tỷ lệ chốt đơn.',
        kws: ['~65% khách nhắn tin rồi im lặng', 'Tự gắn thẻ loại cua khách xem, lý do im', 'Gửi ảnh thật cua vừa bắt', 'Báo giá xong im → quà tặng đúng lúc'] },
      { title: 'AI Agent tự động lên đơn và gửi sang đơn vị vận chuyển', desc: 'Tiết kiệm hơn 90% thời gian xử lý đơn.',
        kws: ['Thu đủ tên, SĐT, địa chỉ người nhận', 'Ghi đúng loại cua, số ký', 'Tự tạo đơn, hẹn giờ giao'] },
      { title: 'AI tự động chăm sóc khách hàng sau bán', desc: 'Tăng doanh thu từ khách hàng cũ.',
        kws: ['Hỏi thăm, dặn cách giữ cua sống', 'Gợi ý tôm khô, khô cá biếu Tết', 'Khách mua thêm, tăng giá trị vòng đời'] },
    ],

    steps: [
      { intro: true, hold: 1800 },

      /* ---- 1. Tư vấn: ca khó cân có tính dây không, sợ cua ốm ---- */
      { feature: 1 },
      { sep: 'Khách nhắn tin từ quảng cáo Facebook', style: 'time', hold: 800 },
      { img: 'cua-hap', hold: 1500 },
      { kh: 'Shop ơi cua gạch như hình bao nhiêu 1kg e? Nhà c 6 người ăn thì lấy mấy ký, giao Q7 được k?' },
      { ai: 'Dạ chào chị! Em tư vấn cua cho nhà mình liền ạ 🦀', fast: true, meta: '⚡ Preny AI trả lời sau 2 giây', kw: 0 },
      { ai: 'Mẫu chị gửi là **cua gạch son Cà Mau** loại 2–3 con/kg, giá **690.000đ/kg** ạ. Nhà 6 người chị lấy **2kg** là vừa, khoảng 5–6 con.', kw: [1, 2] },
      { kh: 'Cân có tính dây k e? Hay bị cua ốm toàn nước lắm' },
      { ai: 'Dạ bên em **cân cua đã tháo dây** ạ. Cua được **bóp yếm chọn từng con**, chắc gạch. Nhận cua ốm em đổi liền, cua chết **đền 1 đổi 1** chị nha.', kw: 3 },
      { ai: 'Giao Q7 **trong ngày**, cua sống đóng thùng xốp giữ ẩm. Chị chốt để em lựa cua mẻ chiều nay cho chị nha? 😊', kw: 4 },
      { kh: 'Để c hỏi chồng đã' },

      /* ---- 2. Khách im → bám đuổi 2 tin theo thẻ ---- */
      { feature: 2 },
      { sep: 'Khách chưa phản hồi… · AI gắn thẻ #CuaGachSon #HoiGia', style: 'silent', kw: [0, 1], hold: 1800 },
      { sep: '— 1 ngày sau —' },
      { ai: 'Chị Hà ơi, em gửi chị **ảnh thật** mẻ cua gạch vừa bắt sáng nay ở rừng đước Năm Căn: cua sống, cột dây, đóng thùng trong ngày ạ 🦀', meta: '🔁 Tự động · Bám đuổi theo thẻ #CuaGachSon', kw: 2 },
      { aiImgs: [{ img: 'ngu-dan', label: 'Bắt cua sáng nay' }, { img: 'cua-song', label: 'Cua sống, chắc' },
                 { img: 'cua-da', label: 'Cột dây, giữ lạnh' }, { img: 'cua-gach', label: 'Gạch son đầy mai' }], hold: 3200 },
      { sep: '— 2 ngày sau —' },
      { ai: 'Cua gạch chị hỏi giá, chốt trong tuần này em **tặng muối ớt xanh** chấm cua, **miễn phí giao Q7** ạ 🎁', meta: '🔁 Tự động · Bám đuổi theo thẻ #HoiGia', kw: 3 },
      { kh: 'Ok lấy c 2kg cua gạch son nha e' },

      /* ---- 3. Lên đơn tự động (không có tin cập nhật vận chuyển) ---- */
      { feature: 3 },
      { ai: 'Dạ chị cho em xin **tên, SĐT và địa chỉ người nhận** nha. Chị muốn nhận trước mấy giờ để kịp nấu ạ?', kw: 0 },
      { kh: 'Nguyễn Thu Hà – 0938 461 275\n42 đường số 15, P. Tân Phong, Q7. Giao trước 5h chiều nha e' },
      { card: {
          tag: '✓ Tin xác nhận đơn',
          intro: 'Dạ chị kiểm tra lại đơn giúp em nhé:',
          lines: ['2kg **cua gạch son Cà Mau** (2–3 con/kg, cân đã tháo dây)', 'Tặng 1 hũ muối ớt xanh chấm cua', 'Tổng cộng: **1.380.000đ** · miễn phí giao · nhận hàng rồi trả tiền', 'Giao tới: Nguyễn Thu Hà, 42 đường số 15, P. Tân Phong, Q7', 'Giao chiều nay, trước 17h'],
          button: 'Quản lý đơn hàng',
        }, kw: 1, hold: 4500 },
      { kh: 'Ok em' },
      { card: {
          tag: '✓ Đã tạo đơn & gửi vận chuyển', ok: true,
          lines: ['Mã đơn: **#UH20112**', 'Mã vận đơn: **VD61730284**', 'Giao: **chiều 20/11, 15h–17h**'],
        }, kw: 2, hold: 3500 },

      /* ---- 4. Chăm sóc sau bán ---- */
      { feature: 4 },
      { sep: '— Tối 20/11 · sau khi khách nhận cua —' },
      { ai: 'Chị Hà ơi, cua nhà mình ăn thấy chắc không ạ? Cua sống chưa nấu chị **để ngăn mát, phủ khăn ẩm, nấu trong 1 ngày** là ngon nhất nha 🦀', meta: '💛 Tự động · Chăm sóc sau bán', kw: 0 },
      { kh: 'Cua chắc, gạch đầy luôn em ơi 😍' },
      { sep: '— 2 tuần sau —' },
      { ai: 'Sắp Tết rồi chị, bên em có **tôm khô, khô cá Cà Mau** làm quà biếu, khách cũ được **giảm 10%** ạ:', kw: 1 },
      { catalog: [
          { name: 'Tôm khô Cà Mau', color: '500g', price: '675.000đ', old: '750.000đ', tag: 'Bán chạy', art: 'tom-kho' },
          { name: 'Khô cá Cà Mau', color: '500g', price: '279.000đ', old: '310.000đ', tag: 'Mới về', art: 'kho-ca' },
          { name: 'Ghẹ xanh sống', color: '1kg', price: '378.000đ', old: '420.000đ', tag: '-10%', art: 'ghe' },
        ], hold: 4000 },
      { kh: 'Lấy c 2 bịch tôm khô biếu nội ngoại nha', kw: 2, hold: 1500 },
      // Không có { end: true }: bấm → thêm một lần là sang thẳng slide kế.
    ],

    /* ===== Nội dung slide trình chiếu (trinh-chieu.html). Slide thống kê dùng số minh họa (deck.dashboard). ===== */
    deck: {
      /* Demo chat dọc (demo-doc.js): tên khách trên Messenger, bài đăng Facebook (anh = khóa trong images), câu bình luận. */
      demoDoc: {
        khach: 'Thu Hà',
        sanPham: 'Cua gạch son Cà Mau',
        binhLuan: 'Xin giá cua gạch',
        post: {
          tieuDe: 'CUA GẠCH SON CÀ MAU – BẮT SÁNG, GIAO CHIỀU 🦀',
          dong: ['Cua sống rừng đước Năm Căn', 'Bóp yếm chọn từng con, chắc gạch', 'Cân đã tháo dây', 'Cua chết đền 1 đổi 1'],
          anh: ['cua-hap', 'cua-gach', 'cua-song', 'cua-dia'],
        },
      },
      /* Pipeline thương mại điện tử 16/11/2026 (TRINH-CHIEU.md mục 1): dashboard, chatbot, afterSale. */
      dashboard: [
        { ten: 'Cua <span class="grad">gạch son, cua thịt</span>', den: '21/07/2026', khach: 14, tyLe: 0.57 },
        { ten: 'Ghẹ, <span class="grad">tôm sú sống</span>', den: '18/08/2026', khach: 9, tyLe: 0.52 },
        { ten: 'Tôm khô, <span class="grad">khô cá biếu Tết</span>', den: '26/09/2026', khach: 12, tyLe: 0.59 },
      ],
      chatbot: {
        chat: [
          { ref: { img: L(IMG['cua-hap']), ten: 'Cua gạch son Cà Mau' } },
          { kh: 'Cua gạch bao nhiêu 1kg e? Nhà c 6 người lấy mấy ký?' },
          { ai: 'Dạ **cua gạch son** loại 2–3 con/kg giá **690.000đ/kg** ạ. Nhà 6 người chị lấy **2kg** là vừa, khoảng 5–6 con.', meta: '⚡ Preny AI trả lời sau 2 giây' },
          { kh: 'Cân có tính dây k? Sợ cua ốm lắm' },
          { ai: 'Dạ **cân đã tháo dây**, bóp yếm chọn từng con ạ. Cua ốm em đổi liền, cua chết **đền 1 đổi 1**. Giao Q7 **trong ngày**.' },
          { kh: 'Ok lấy 2kg. Nguyễn Thu Hà, 0938 461 275, 42 đường số 15, P. Tân Phong, Q7' },
          { ai: 'Dạ em lên đơn, lựa cua mẻ chiều nay cho chị ngay ạ ⚡' },
          { don: true },
          { ok: true },
        ],
        don: {
          ten: 'Nguyễn Thu Hà', sdt: '0938 461 275', diaChi: '42 đường số 15, P. Tân Phong, Q7', ma: '#UH20112', phi: 'miễn phí',
          sp: [{ img: L(IMG['cua-hap']), ten: 'Cua gạch son Cà Mau 2–3 con/kg', sl: 2, dv: 'kg', gia: 690000 }],
        },
        anh: {
          img: L(IMG['tom-kho']),
          kh: 'Tôm khô như hình này bao nhiêu e?',
          ai: 'Dạ mẫu chị gửi là **tôm khô Cà Mau** loại vừa, giá **750.000đ/500g** ạ. Chị mua biếu em **đóng hộp quà** miễn phí nha.',
        },
      },
      afterSale: {
        loi: 'Cảm ơn chị Hà đã đặt cua Cà Mau 💛 Nhiều khách mua thêm mấy món này ăn kèm, làm quà ạ:',
        sp: [
          { img: L(IMG['tom-kho']), ten: 'Tôm khô Cà Mau 500g', gia: 750000 },
          { img: L(IMG['kho-ca']), ten: 'Khô cá Cà Mau 500g', gia: 310000 },
          { img: L(IMG['ghe']), ten: 'Ghẹ xanh sống 1kg', gia: 420000 },
          { img: L(IMG['tom-su']), ten: 'Tôm sú sống 1kg', gia: 380000, cu: 420000 },
          { img: L(IMG['cua-dia']), ten: 'Cua thịt Cà Mau 1kg', gia: 450000 },
        ],
        khach: 'Lấy thêm c 1 bịch tôm khô nha',
        pill: '🛍 Khách mua thêm ngay: đơn tăng từ 1.380.000đ lên 2.130.000đ',
        fmm: {
          chao: 'Chào chị Hà 👋 Cua Cà Mau Út Hiền vừa ra hộp quà Tết 2027, gửi chị xem trước nha!',
          img: L(IMG['tom-kho']), nhan: 'QUÀ TẾT 2027',
          ten: 'Hộp quà tôm khô, khô cá Cà Mau', mo: 'Khách cũ giảm 10%, đóng hộp miễn phí.', nut: 'Xem hộp quà',
        },
        zbs: {
          ten: 'Tặng chị Hà voucher 50.000đ',
          mo: 'Cảm ơn chị đã mua cua tại Cua Cà Mau Út Hiền. Gửi chị ưu đãi cho lần mua tiếp theo:',
          dong: [['Mã voucher', '**UTHIEN50**'], ['Ưu đãi', 'Giảm 50.000đ đơn từ 500.000đ'], ['Hạn dùng', '31/01/2027']],
          nut: 'Dùng voucher ngay',
        },
      },
      bamDuoi: {
        cmpDung: ['Khách nhắn xong im → nhắc đúng loại cua khách đã xem (thẻ <b>#CuaGachSon</b> từ quảng cáo)',
                  'Báo giá xong im → bám đuổi theo giá: quà tặng, miễn phí giao (thẻ <b>#HoiGia</b>)',
                  'Đúng nhu cầu, đúng lý do im → khách quay lại mua'],
        hoi: 'Cua gạch son giá sao shop?',
        traLoiThuong: 'Dạ 690.000đ/kg ạ.',
        refImg: L(IMG['cua-hap']), refTen: 'Cua gạch son Cà Mau',
        vd1: {
          kh: 'Cua gạch này chắc không shop, hay bị cua ốm lắm?',
          ai: 'Dạ bên em bóp yếm chọn từng con ạ. Chị mua mấy người ăn để em tư vấn số ký nha?',
          tag: '🏷 #CuaGachSon', tagNote: 'thẻ từ quảng cáo · khách im 1 ngày',
          nhac: 'Chị ơi, em gửi chị <b>ảnh thật mẻ cua gạch</b> vừa bắt sáng nay. Chị báo em số người ăn để em lựa cua, giao trong ngày nha 😊',
          dung: '🎯 Theo thẻ #CuaGachSon: nhắc đúng loại cua khách xem',
          khach: 'Nhà c 6 người em',
        },
        vd2: {
          kh: '2kg cua gạch bao nhiêu vậy shop?',
          ai: 'Dạ 2kg cua gạch son <b>1.380.000đ</b>, giao nội thành trong ngày ạ.',
          tag: '🏷 #HoiGia', tagNote: 'báo giá xong khách im 1 ngày',
          nhac: 'Chị ơi, cua gạch chị hỏi giá hôm qua, chốt trong tuần em <b>tặng muối ớt xanh, miễn phí giao</b> ạ. Em lựa cua mẻ chiều nay cho chị nha?',
          dung: '🎯 Theo thẻ #HoiGia: bám đuổi theo giá, đúng lý do khách im',
          khach: 'Ok lấy c 2kg nha e',
        },
      },
      binhLuan: {
        post: 'Cua gạch son Cà Mau <b>bắt sáng, giao chiều</b> · cân đã tháo dây, cua chết đền 1 đổi 1 🦀',
        img: L(IMG['cua-gach']),
        kav: 'KN', kten: 'Kim Ngân', hoi: 'Ship ra Hà Nội cua có còn sống không shop? Mấy ngày tới?',
        traLoi: 'Dạ chào chị Ngân! Shop vừa nhắn tin tư vấn chi tiết cho chị, chị xem tin nhắn nhé 💬',
        act2: 'Nhắn tin riêng tư vấn giao cua ra Hà Nội',
        nhan: 'Chào chị Ngân! Cua ra Hà Nội bên em <b>gửi bay</b>, đóng thùng xốp giữ ẩm, nhận <b>trong 24 giờ</b> ạ. Cua chết khi mở thùng em <b>đền 1 đổi 1</b>. Chị lấy mấy ký để em báo giá kèm phí bay nha?',
        sp: { ten: 'Cua thịt Cà Mau 3 con/kg', gia: 'từ 450.000đ', img: L(IMG['cua-dia']) },
        khach: 'Báo c giá 3kg cua thịt nha',
      },
      duLieu: {
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: 1 con 1kg, để cả tuần vẫn sống', 'Khách nhận hàng khác lời hứa, shop mất uy tín'],
        hoi: 'Cua gạch này 1 con nặng 1kg luôn hả em? Để tủ lạnh 1 tuần còn sống k?',
        aiSai: 'Dạ đúng ạ! Cua bên em <b>1 con 1kg</b>, để tủ lạnh <b>cả tuần</b> vẫn sống khỏe chị nhé 🥰',
        thucTe: '⚠ Thực tế: cua gạch loại này 2–3 con/kg; cua sống chỉ giữ ngăn mát khoảng 1 ngày',
        gian: 'Cua nhận về nhỏ hơn nói, để 3 ngày chết hết! Sao bảo 1 con 1kg, để cả tuần? 😠',
        cho: 'Dạ chị chờ em một chút để em kiểm tra chính xác thông tin sản phẩm cho chị nhé!',
        nv: 'Nhân viên Hiền · người thật',
        nvTraLoi: 'Dạ em xin lỗi chị, cua gạch bên em loại 2–3 con/kg ạ. Cua sống chị để ngăn mát, phủ khăn ẩm, nấu trong 1 ngày. Cua chết em đền 1 đổi 1 cho chị nhé!',
      },
    },
  };
})();
