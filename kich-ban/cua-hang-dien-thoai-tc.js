/* Kịch bản: CỬA HÀNG ĐIỆN THOẠI (mời tới xem) — BẢN TRÌNH CHIẾU, nhóm CÂN NHẮC NHIỀU. Làm 26/11/2026 theo người dùng:
   "thêm 1 ngành bán điện thoại nhưng kịch bản là mời tới cửa hàng xem chứ k bán onl".
   "AI chốt đơn = lấy tên + SĐT + hẹn khách tới cửa hàng xem máy": cửa hàng chỉ bán tại quầy, không ship, không lên đơn online;
   nhân viên quầy chốt máy tại cửa hàng, gửi sự kiện Lead (không gửi Purchase khi khách chưa tới mua).
   Demo chat 1 khách từ đầu tới cuối (khớp Bài 2 video ngang, demo/bai2/kich-ban-cua-hang-dien-thoai-tc.js):
   anh Đức bấm quảng cáo iPhone 16 Pro Max 256GB like new, hỏi giá → AI báo giá từ 22.490.000đ, bảo hành 12 tháng, gửi đúng ảnh quảng cáo
   → hỏi máy đang dùng (thu cũ đổi mới) → đang dùng 13 Pro 128, hỏi giá thu, muốn ship về Dĩ An → AI không tự báo giá thu
   (kỹ thuật kiểm tra máy tại quầy khoảng 10 phút mới báo đúng), nói rõ chỉ bán tại cửa hàng, mời qua xem máy, xin tên + SĐT
   → khách im → bám đuổi 5 tin (máy thật, feedback khách đổi máy, máy zin + check IMEI + bảo hành, quy trình 20 phút, mời giữ máy)
   → khách hẹn 18h thứ Tư 02/12 → gửi địa chỉ cửa hàng → chuyển chị Ngân · Quầy Thủ Đức → sau khi mua: hỏi thăm, lưu ý giữ pin;
   mời kiểm tra máy 3 tháng; ưu đãi phụ kiện 20% cho khách quen.
   AI không tính giá thu cũ, không check khách cũ/mới. Không có tin nhắc trước giờ hẹn (Preny chưa có tính năng này).
   Cửa hàng, giá, khách, SĐT, địa chỉ, feedback, nhân viên: dữ liệu minh họa ("iPhone 16 Pro Max" là tên sản phẩm, không phải tên cửa hàng).
   Ảnh: Unsplash (ảnh thật, không phải cửa hàng của khách). */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'may': '1678685888221-cda773a3dcdb',          // tay cầm iPhone Pro màu xám
    'may-toi': '1592750475338-74b7b21085ab',      // mặt lưng iPhone Pro, nền tối
    'trung-bay': '1758467700568-05de57ed46c4',    // máy trên giá trưng bày
    'khach-xem': '1758467700917-3517eb11ec8c',    // khách xem máy trên bàn trưng bày
    'giao-may': '1697545806245-9795b6056141',     // đưa máy cho khách tại quầy kính
    'quay': '1556742049-0cfed4f6a45d',            // nhân viên quầy cười với khách
    'cua-hang': '1795532474580-ec14e4acb25e',     // cửa hàng nhiều bàn điện thoại
    'dong-khach': '1768137348738-ce11911f54f6',   // khách đông trong cửa hàng
    'chuyen-du-lieu': '1697545806080-7b79a876aa72', // cầm 2 máy, chuyển dữ liệu
    'kiem-tra': '1550041473-d296a3a8a18a',        // kỹ thuật mở máy kiểm tra
    'nhan-may': '1556742111-a301076d9d18',        // tay cầm máy
    'op-lung': '1785741612674-965f99d5c38f',      // kệ ốp lưng nhiều màu
    'op-carbon': '1692780256774-198bc0a3bbf0',    // ốp lưng vân carbon từ tính
    'phu-kien': '1609692814858-f7cd2f0afa4f',     // máy, đồng hồ, tai nghe
    'tai-nghe': '1606841837239-c5a1a4a07af7',     // tai nghe không dây
    'sac': '1731616103600-3fe7ccdc5a59',          // củ sạc nhanh kèm cáp
    'sac-du-phong': '1706275399494-fb26bbc5da63', // sạc dự phòng vỏ nhôm
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    badge: 'AI CHATBOT · CỬA HÀNG ĐIỆN THOẠI',
    shop: { name: 'Nam Phong Mobile', initials: 'NP' },
    headline: { pre: 'AI chatbot tư vấn điện thoại và', em: 'mời khách tới cửa hàng xem máy' },
    sub: 'Báo giá, gửi ảnh máy thật, mời mang máy cũ qua kiểm tra thu cũ tại quầy, xin SĐT và giữ máy; nhân viên quầy chốt máy tại cửa hàng.',
    cta: 'Dùng thử miễn phí tại **preny.ai**\nHotline **0389 647 778**',
    speed: 1.13,
    timing: { read0: 1000, readPerChar: 28, readMax: 4500, type0: 800, typePerChar: 3, typeMax: 1500, fastType: 500,
              featureHold: 1400, sepHold: 1100, cardHold: 4000, introCard: 250 },

    images: Object.fromEntries(Object.entries(IMG).map(([k, id]) => [k, U(id)])),

    // Cột trái demo ngang (dùng khi xuất video khung ngang), đúng thứ tự diễn trong steps
    features: [
      { title: 'AI báo giá, mời qua xem máy', desc: 'Trả lời ngay, hiểu cả tin viết tắt.',
        kws: ['Báo giá, gửi đúng ảnh quảng cáo', 'Hỏi máy đang dùng: thu cũ đổi mới', 'Chỉ bán tại cửa hàng: mời qua cầm máy tận tay'] },
      { title: 'Bám đuổi khách cân nhắc lâu', desc: 'Cửa hàng nằm đầu danh sách khi khách chọn.',
        kws: ['Khách chưa cho SĐT: tự gắn thẻ #iphone16promax', 'Ảnh máy thật, feedback khách đổi máy', 'Máy zin, check IMEI, bảo hành 12 tháng', 'Quy trình 20 phút, mời giữ máy'] },
      { title: 'AI xin SĐT, giữ máy cho khách', desc: 'Khách nóng chuyển ngay cho cửa hàng.',
        kws: ['Cho khách lý do để cho số: giữ máy đẹp', 'Gửi địa chỉ, dặn mang máy cũ', 'Chuyển chị Ngân · Quầy Thủ Đức gọi xác nhận'] },
      { title: 'AI chăm sóc sau khi mua máy', desc: 'Tăng tỷ lệ khách quay lại.',
        kws: ['Hỏi thăm máy mới, dặn giữ pin', 'Mời kiểm tra máy định kỳ miễn phí', 'Ưu đãi phụ kiện hợp đúng máy khách'] },
    ],

    steps: [
      { intro: true, hold: 1800 },

      /* ---- 1. Tư vấn: giá + ảnh quảng cáo → máy đang dùng → hỏi giá thu, muốn ship → chỉ bán tại cửa hàng, mời qua xem ---- */
      { feature: 1 },
      { sep: 'Khách bấm Gửi tin nhắn từ quảng cáo Facebook', style: 'time', hold: 800 },
      { kh: '16 Pro Max 256 giá sao e?' },
      { ai: 'Dạ chào anh Đức, iPhone 16 Pro Max 256GB like new 99% bên em giá **từ 22.490.000đ**, bảo hành **12 tháng** ạ.', fast: true, meta: '⚡ Preny AI trả lời sau 2 giây', kw: 0 },
      { aiImg: 'may' },
      { ai: 'Anh đang dùng máy nào ạ? Bên em có **thu cũ đổi mới**, máy cũ trừ thẳng vào giá luôn.', kw: 1 },
      { kh: 'a đang xài 13 pro 128, thu bn e? ship về Dĩ An cho a đc k, a ít rảnh' },
      { ai: 'Dạ máy cũ phải để kỹ thuật **kiểm tra trực tiếp** pin, màn, Face ID mới báo đúng giá thu được ạ, chỉ mất khoảng **10 phút**.', kw: 1 },
      { ai: 'Bên em **chỉ bán tại cửa hàng** để anh tự cầm máy, kiểm tra pin, màn, IMEI rồi mới mua. Cửa hàng mở **8h–21h30** cả Chủ nhật, anh cho em xin **tên và SĐT** để giữ máy đẹp cho anh nha 📱', kw: 2 },
      { seen: true },

      /* ---- 2. Khách im → bám đuổi 5 tin trong 7 ngày ---- */
      { feature: 2 },
      { sep: 'Khách chưa để lại SĐT… · AI gắn thẻ #iphone16promax #ThuCuDoiMoi', style: 'silent', kw: 0, hold: 1600 },
      { sep: '— 15 phút sau —' },
      { ai: 'Anh Đức ơi, em gửi anh vài hình **máy thật** và quầy trưng bày bên em nha 📱', meta: '📱 Tự động · Bám đuổi', kw: 1 },
      { aiImgs: [{ img: 'may-toi', label: 'Máy thật' }, { img: 'trung-bay', label: 'Quầy trưng bày' },
                 { img: 'khach-xem', label: 'Bàn xem máy' }, { img: 'cua-hang', label: 'Cửa hàng' }], hold: 3200 },
      { sep: '— 1 ngày sau —' },
      { card: {
          tag: '⭐ Feedback khách hàng',
          intro: 'Đây là chia sẻ của một anh khách vừa đổi máy bên em ạ 💬',
          lines: ['“Mang 12 Pro qua đổi, kỹ thuật kiểm tra máy cũ ngay tại quầy, báo giá thu rõ ràng. Tự cầm máy mới kiểm pin, Face ID xong mới trả tiền nên yên tâm.”', 'Anh Trọng Khang, Thủ Đức', '(Giá thu tùy tình trạng từng máy)'],
        }, meta: '📱 Tự động · Bám đuổi', kw: 1, hold: 4200 },
      { sep: '— 1 ngày sau —' },
      { card: {
          tag: '✓ Kiểm tra máy · Nam Phong Mobile',
          intro: 'Máy nào bên em cũng kiểm tra kỹ trước khi bán ạ:',
          lines: ['Máy **zin nguyên bản**, chưa qua sửa chữa', '**Check IMEI**, thoát iCloud ngay tại quầy', '**Bảo hành 12 tháng**, 1 đổi 1 trong 30 ngày'],
        }, meta: '📱 Tự động · Bám đuổi', kw: 2, hold: 4000 },
      { sep: '— 1 ngày sau —' },
      { ai: 'Qua cửa hàng chỉ mất khoảng **20 phút**: xem máy → kiểm tra máy cũ → chuyển dữ liệu sang máy mới, anh ưng mới mua ạ 😊', meta: '📱 Tự động · Bám đuổi', kw: 3 },
      { sep: '— 2 ngày sau —' },
      { ai: 'Lô 16 Pro Max pin trên 95% bên em còn **2 máy**. Anh muốn em giữ 1 máy tới khi anh ghé xem không ạ?', meta: '📱 Tự động · Bám đuổi', kw: 3 },
      { kh: 'Chiều mai a ghé, giữ giúp a 1 máy nha' },

      /* ---- 3. Khách quay lại → xin tên + SĐT, giữ máy → gửi địa chỉ → chuyển nhân viên quầy ---- */
      { feature: 3 },
      { ai: 'Dạ được ạ, em giữ máy cho anh tới **21h thứ Tư 02/12**. Anh cho em xin **tên và SĐT** để báo nhân viên quầy nha 📱', fast: true, kw: 0 },
      { kh: 'Đức, 0938 274 615, tầm 6h chiều a qua' },
      { card: {
          tag: '✓ Đã giữ máy · anh Đức', ok: true,
          lines: ['Thời gian: **18h00 thứ Tư 02/12/2026**', 'Xem máy **iPhone 16 Pro Max 256GB** like new', 'Kiểm tra thu cũ máy **13 Pro 128GB**', 'Địa điểm: **218 Võ Văn Ngân, Thủ Đức**'],
        }, meta: '✓ Đã lưu khách, gắn thẻ #iphone16promax #ThuCuDoiMoi', kw: 1, hold: 4200 },
      { ai: '**Chị Ngân bên cửa hàng** sẽ gọi anh xác nhận liền nha. Anh nhớ mang theo máy 13 Pro để kỹ thuật kiểm tra thu cũ ạ 📱', meta: '✓ Đã chuyển chị Ngân · Quầy Thủ Đức', kw: 2, hold: 1500 },

      /* ---- 4. Sau khi mua: hỏi thăm, lưu ý pin → mời kiểm tra định kỳ → ưu đãi phụ kiện khách quen ---- */
      { feature: 4 },
      { sep: '— Ngày 4/12 · sau khi mua máy tại cửa hàng —' },
      { ai: 'Anh Đức ơi, máy mới dùng ổn không ạ? Sạc qua đêm anh bật **Sạc tối ưu** để giữ pin nha 📱', meta: '📱 Tự động · Chăm sóc sau khi mua', kw: 0 },
      { kh: 'Máy ngon e, dữ liệu qua đủ hết 👍' },
      { sep: '— Ngày 4/3 · 3 tháng sau khi mua —' },
      { ai: 'Máy của anh dùng được 3 tháng rồi, anh ghé cửa hàng để kỹ thuật **kiểm tra pin, vệ sinh loa, cổng sạc miễn phí** nha. Anh muốn em xếp lịch ngày nào ạ?', meta: '📅 Tự động · Mời kiểm tra định kỳ', kw: 1 },
      { kh: 'Thứ 7 tuần sau nha e' },
      { ai: 'Dạ em xếp lịch rồi ạ. Khách quen đang được **giảm 20% phụ kiện** (ốp lưng, cường lực, tai nghe, củ sạc), hôm đó anh lắp thử luôn nha 📱', kw: 2 },
      // Không có { end: true }: bấm → thêm một lần là sang thẳng slide kế.
    ],

    /* ===== Nội dung slide trình chiếu (trinh-chieu.html). Slide thống kê dùng số minh họa (deck.dashboard). ===== */
    deck: {
      /* Demo chat dọc (demo-doc.js): bài đăng → 1 bình luận → quảng cáo iPhone 16 Pro Max like new (bấm Gửi tin nhắn)
         → Messenger với anh Đức (tư vấn, bám đuổi, giữ máy, chăm sóc sau khi mua) → màn kết. */
      demoDoc: {
        khach: 'Đức Lê',
        sanPham: 'iPhone 16 Pro Max like new · Xem máy tại cửa hàng',
        ngay: '26/11/2026',
        gio: '14:46',
        binhLuan: [
          { ten: 'Trần Bảo', noiDung: 'Có màu titan sa mạc không shop? Mình ở Biên Hòa', traLoi: 'Dạ cửa hàng vừa nhắn tin tư vấn chi tiết cho anh, anh xem inbox nha!' },
        ],
        post: {
          tieuDe: 'IPHONE 16 PRO MAX LIKE NEW · XEM MÁY TẠI CỬA HÀNG 📱',
          dong: ['Máy zin, pin từ 90%', 'Check IMEI tại quầy', 'Thu cũ đổi mới', 'Bảo hành 12 tháng'],
          anh: ['may', 'trung-bay', 'khach-xem', 'giao-may'],
        },
        quangCao: {
          tieuDe: 'IPHONE 16 PRO MAX LIKE NEW · XEM MÁY TẠI CỬA HÀNG',
          mo: 'iPhone 16 Pro Max 256GB like new 99% từ 22.490.000đ. Chỉ bán tại cửa hàng: tới cầm máy, kiểm tra tận tay rồi mới mua.',
          anh: 'may', nhan: 'MESSENGER', dong: 'Tư vấn 24/7 · Giữ máy cho khách', nut: 'Gửi tin nhắn',
        },
        ket: {
          tieuDe: 'PRENY AI – TƯ VẤN ĐIỆN THOẠI, MỜI KHÁCH TỚI CỬA HÀNG',
          y: ['Trả lời ngay 24/7', 'Báo giá, gửi ảnh máy thật', 'Không tự báo giá thu cũ', 'Lấy SĐT, giữ máy cho khách',
              'Bám đuổi 5 tin trong 7 ngày', 'Báo ngay nhân viên quầy', 'Chăm sóc sau khi mua qua Zalo', 'Meta CAPI Lead'],
        },
      },
      /* Pipeline mới (TRINH-CHIEU.md mục 1): dashboard, chatbot (lead = AI chốt là lấy SĐT + hẹn ghé cửa hàng), afterSale. */
      dashboard: [
        { ten: 'iPhone <span class="grad">like new</span>', den: '21/07/2026', khach: 14, tyLe: 0.56 },
        { ten: 'Thu cũ <span class="grad">đổi mới</span>', den: '18/08/2026', khach: 9, tyLe: 0.54 },
        { ten: 'Máy <span class="grad">Android cao cấp</span>', den: '26/09/2026', khach: 7, tyLe: 0.52 },
      ],
      chatbot: {
        y: [
          ['Trả lời ngay tức thì, 24/7', 'Khách nhắn lúc nào, AI trả lời sau 2 giây'],
          ['Báo giá, gửi ảnh máy thật', 'Hỏi máy đang dùng để mời thu cũ đổi mới'],
          ['Chốt đơn = lấy SĐT + hẹn ghé cửa hàng', 'Giữ máy cho khách, chuyển nhân viên quầy'],
          ['Hiểu hình ảnh khách gửi', 'Khách gửi ảnh máy cũ, AI mời mang qua kiểm tra'],
        ],
        chat: [
          { ref: { img: L(IMG['may']), ten: 'iPhone 16 Pro Max like new · Xem máy tại cửa hàng' } },
          { kh: 'a đang xài 13 pro 128, đổi lên 16 pro max thu bn e? ship về Dĩ An đc k' },
          {
            ai: 'Dạ máy cũ phải để kỹ thuật **kiểm tra trực tiếp** pin, màn, Face ID mới báo đúng giá thu được ạ, chỉ mất khoảng **10 phút** 📱',
            meta: '⚡ Preny AI trả lời sau 2 giây',
          },
          { kh: 'k ship hả e?' },
          {
            ai: 'Dạ bên em **chỉ bán tại cửa hàng** để anh tự cầm máy, kiểm tra pin, màn, IMEI rồi mới mua ạ. Anh cho em xin **tên, SĐT** để giữ máy đẹp cho anh nha.',
          },
          { kh: 'Đức - 0938 274 615. chiều t4 02/12 a qua nha' },
          { ai: 'Dạ được ạ! Em giữ máy cho anh tới **18h thứ Tư 02/12**, chị Ngân bên cửa hàng gọi xác nhận liền nha ⚡' },
          { don: true },
          { ok: true },
        ],
        lead: {
          ten: 'Anh Đức',
          sdt: '0938 274 615',
          nhuCau: '**iPhone 16 Pro Max 256GB** like new · thu cũ **13 Pro 128GB** · ở Dĩ An',
          the: [['FB Ads · iPhone 16 Pro Max like new', 'ng'], ['#iphone16promax', 'qt'], ['#ThuCuDoiMoi', 'qt'], ['Đã cho SĐT', 'ht']],
          lichNhan: 'Hẹn ghé cửa hàng',
          lich: ['Xem máy', '18:00 · Thứ Tư 02/12'],
          sale: 'Chị Ngân · Quầy Thủ Đức',
          nut: 'Chuyển cho cửa hàng',
          xong: 'Đã chuyển cho chị Ngân',
          okTieuDe: 'Đã giữ máy tới 02/12',
        },
        anh: {
          img: L(IMG['may-toi']),
          nhan: 'Khách gửi ảnh máy đang dùng',
          kh: 'Máy a như này đổi lên được ko e?',
          ai: 'Ảnh anh gửi là **iPhone dòng Pro 3 camera** ạ, bên em **thu đổi được**. Giá thu kỹ thuật báo sau khi **kiểm tra pin, màn, Face ID tại quầy**, chỉ khoảng 10 phút. Anh mang máy qua cửa hàng Thủ Đức nha.',
          pill: '🔍 AI nhìn ảnh máy, mời mang qua kiểm tra thu cũ',
        },
      },
      afterSale: {
        y1: 'AI gửi tiếp 5 phụ kiện hợp máy để bán thêm',
        y2: 'Máy mới về, ưu đãi phụ kiện, kiểm tra máy định kỳ',
        gio: 'Nhân viên quầy vừa chốt máy cho anh Đức tại cửa hàng',
        don: { ma: '#NP02121', phi: 'mua tại cửa hàng', sp: [{ ten: 'iPhone 16 Pro Max 256GB like new', sl: 1, dv: 'máy', gia: 22490000 }] },
        loi: 'Cảm ơn anh Đức đã chọn Nam Phong Mobile 📱 Khách dùng 16 Pro Max hay lấy thêm mấy món này, anh ghé cửa hàng là lắp thử ngay ạ:',
        sp: [
          { img: L(IMG['op-carbon']), ten: 'Ốp lưng từ tính vân carbon', gia: 290000, cu: 390000, nut: 'Giữ hàng' },
          { img: L(IMG['op-lung']), ten: 'Cường lực chống nhìn trộm', gia: 250000, nut: 'Giữ hàng' },
          { img: L(IMG['sac']), ten: 'Củ sạc nhanh 35W kèm cáp', gia: 590000, nut: 'Giữ hàng' },
          { img: L(IMG['tai-nghe']), ten: 'Tai nghe không dây chống ồn', gia: 2490000, nut: 'Nghe thử' },
          { img: L(IMG['sac-du-phong']), ten: 'Sạc dự phòng 10.000mAh', gia: 690000, nut: 'Giữ hàng' },
        ],
        khach: 'Giữ cho a cường lực với củ sạc, chiều nay a ghé lấy nha',
        pill: '🛍 Khách lấy thêm tại quầy: đơn tăng từ 22.490.000đ lên 23.330.000đ',
        fmm: {
          sep: '1 tháng sau · tin Facebook FMM',
          chao: 'Chào anh Đức 👋 Cửa hàng vừa về lô máy mới, mời anh ghé xem nha!',
          img: L(IMG['trung-bay']),
          nhan: 'MÁY MỚI VỀ',
          ten: 'Lô iPhone like new pin trên 95%',
          mo: 'Khách cũ được ưu tiên giữ máy, xem tận tay tại cửa hàng.',
          nut: 'Xem máy',
        },
        zbs: {
          ten: 'Ưu đãi phụ kiện cho anh Đức',
          mo: 'Cảm ơn anh đã chọn máy ở Nam Phong. Gửi anh ưu đãi phụ kiện hợp đúng máy 16 Pro Max của anh:',
          dong: [
            ['Mã ưu đãi', '**NAMPHONG20**'],
            ['Ưu đãi', 'Giảm 20% phụ kiện'],
            ['Hạn dùng', '30/04/2027'],
          ],
          nut: 'Dùng ưu đãi',
        },
      },
      tieuDe6: 'Hệ thống AI chatbot giúp tăng<br><span class="grad">tỷ lệ khách tới cửa hàng</span>',
      // Không lên đơn online (khách tới cửa hàng xem máy rồi nhân viên quầy mới chốt) → 5 tính năng
      tinhNang: [
        ['AI tư vấn, chủ động mời qua xem máy', 'Lấy SĐT, giữ máy cho khách'],
        ['Bám đuổi khách cân nhắc lâu', 'Gửi ảnh máy thật, khách thật'],
        ['AI chăm sóc khách sau khi mua', 'Hỏi thăm, mời kiểm tra máy định kỳ'],
        ['Bộ công cụ Remarketing FMM và ZBS', 'Khai thác lại dữ liệu khách cũ'],
        ['Gửi sự kiện Lead qua Meta CAPI', 'Hỗ trợ tối ưu quảng cáo Facebook'],
      ],

      chotDon: {
        nganh: 'điện thoại',
        nguoi: 'Nhân viên quầy',
        chotLa: 'AI chốt đơn = lấy SĐT + hẹn ghé cửa hàng',
        buoc: [
          { t: 'Chạy quảng cáo', d: 'Thu hút khách muốn đổi máy', icon: 'megaphone', own: 'Cửa hàng chạy quảng cáo', mock: 'ad', img: L(IMG['may']), text: 'iPhone 16 Pro Max like new, xem máy tại cửa hàng 📱', btn: 'Gửi tin nhắn' },
          { t: 'Bắt đầu chat', d: 'Báo giá, hỏi máy đang dùng', icon: 'chat', ai: true, mock: 'chat',
            msgs: [['kh', '16 Pro Max 256 giá sao e?'], ['ai', 'Dạ từ 22.490.000đ ạ. Anh đang dùng máy nào ạ? 📱']] },
          { t: 'Mời tới cửa hàng', d: 'Lấy SĐT, giữ máy cho khách', icon: 'phone', ai: true, chot: true, mock: 'form', fields: ['Anh Đức · đổi 13 Pro lên 16 Pro Max', '0938 274 615'], ok: 'Đã giữ máy tới 02/12' },
          { t: 'Cửa hàng gọi xác nhận', d: 'Xác nhận giờ, dặn mang máy cũ', icon: 'call', mock: 'lich', ten: 'Quầy Thủ Đức', gio: '18:00 · Thứ Tư 02/12', ok: 'Đã xác nhận lịch' },
          { t: 'Xem máy tại cửa hàng', d: 'Cầm máy, kiểm tra tận tay', icon: 'users', mock: 'img', img: L(IMG['khach-xem']), cap: 'Khách xem máy tại bàn trưng bày' },
          { t: 'Chốt máy, thu cũ', d: 'Kiểm máy cũ, chuyển dữ liệu', icon: 'check', mock: 'img', img: L(IMG['giao-may']), cap: '✓ Khách chốt iPhone 16 Pro Max' },
        ],
        vong: { t: 'Chăm sóc sau mua & Remarketing', d: 'Hỏi thăm máy mới, mời kiểm tra máy định kỳ, gửi ưu đãi phụ kiện, máy mới về' },
      },

      bamDuoi: {
        nhan: 'Vì sao bám đuổi của Preny đặc biệt', shopB: 'Cửa hàng B',
        cmpSai: ['Khách im → gửi “Anh còn quan tâm điện thoại không ạ?”', 'Không biết khách hỏi máy nào, vì sao im', 'Khách thấy phiền, bỏ qua tin nhắn'],
        cmpDung: ['Khách nhắn xong im → nhắc đúng máy khách hỏi (thẻ <b>#iphone16promax</b> từ quảng cáo)',
                  'Báo giá xong im → bám đuổi theo giá: quà tặng kèm máy (thẻ <b>#baogia</b>)',
                  'Đúng nhu cầu, đúng lý do im → khách quay lại hẹn ghé cửa hàng'],
        hoi: 'iPhone 16 Pro Max 256 giá sao em?',
        traLoiThuong: 'Dạ từ 22.490.000đ ạ.',
        nhacChung: 'Anh còn quan tâm điện thoại không ạ? 😊',
        refImg: L(IMG['may']), refTen: 'iPhone 16 Pro Max like new',
        vd1: {
          ten: 'Khách nhắn xong im',
          kh: 'Máy 16 Pro Max like new pin bao nhiêu % vậy em?',
          ai: 'Dạ lô máy bên em pin từ 90% trở lên ạ. Anh đang dùng máy nào để em tư vấn thu cũ ạ?',
          tag: '🏷 #iphone16promax', tagNote: 'thẻ từ quảng cáo · khách im 1 ngày',
          nhac: 'Anh Đức ơi, em gửi anh <b>ảnh máy thật</b> đang có ở cửa hàng nè 📱 Anh ghé <b>cầm máy, kiểm tra pin tận tay</b> nha, chưa cần mua gì ạ.',
          dung: '🎯 Theo thẻ #iphone16promax: nhắc đúng máy khách hỏi',
          khach: 'Cuối tuần a ghé được ko e?',
        },
        vd2: {
          ten: 'Báo giá xong im',
          kh: 'iPhone 16 Pro Max 256 giá sao em?',
          ai: 'Dạ máy like new 99% <b>từ 22.490.000đ</b>, bảo hành 12 tháng ạ.',
          tag: '🏷 #baogia', tagNote: 'báo giá xong khách im 2 ngày',
          nhac: 'Anh ơi, tuần này mua máy tại cửa hàng được <b>tặng ốp lưng + dán cường lực</b>, kỹ thuật <b>chuyển dữ liệu miễn phí</b> ạ. Em giữ 1 máy cho anh ghé xem nha?',
          dung: '🎯 Theo thẻ #baogia: bám đuổi theo giá, đúng lý do khách im',
          khach: 'Ok giữ giúp a, chiều t4 a qua',
        },
      },

      binhLuan: {
        post: '<b>Chỉ bán tại cửa hàng</b>: tới cầm máy, kiểm tra pin, IMEI tận tay rồi mới mua 📱 iPhone 16 Pro Max like new từ 22.490.000đ',
        img: L(IMG['trung-bay']),
        kav: 'TB', kten: 'Trần Bảo', hoi: 'Có 16 Pro Max màu titan sa mạc không shop? Mình ở Biên Hòa',
        traLoi: 'Dạ chào anh Bảo! Cửa hàng vừa nhắn tin tư vấn chi tiết cho anh, anh xem tin nhắn nhé 💬',
        act2: 'Nhắn riêng, mời tới cửa hàng xem máy',
        nhan: 'Chào anh Bảo! Màu <b>titan sa mạc</b> bên em đang có máy ạ. Anh ghé <b>cửa hàng Thủ Đức</b> cầm máy xem tận tay nha. Anh cho em xin SĐT để giữ máy ạ!',
        sp: { ten: 'Giữ máy, xem tại cửa hàng', gia: 'Miễn phí · giữ máy trước', img: L(IMG['khach-xem']) },
        khach: 'Số anh 0977 315 842 nhé',
      },

      duLieu: {
        shopA: 'Cửa hàng A',
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: pin 100%, tự báo giá thu cũ', 'Khách tới nơi thấy khác, cửa hàng mất uy tín'],
        dung: ['Chỉ trả lời theo dữ liệu cửa hàng cung cấp', 'Không chắc chắn → xin khách chờ, AI tạm dừng', 'Báo ngay nhân viên quầy vào trả lời'],
        hoi: 'Máy này pin 100% không em? 13 Pro của a thu bao nhiêu?',
        aiSai: 'Dạ máy <b>pin 100%</b> ạ, 13 Pro của anh bên em <b>thu 12 triệu</b> luôn anh 🥰',
        thucTe: '⚠ Thực tế: máy like new pin từ 90%; giá thu cũ phải kiểm tra máy tại quầy mới báo được',
        gian: 'Tới nơi pin có 91%, máy cũ thì trả 9 triệu! Sao nhắn nói 12 triệu? 😠',
        cho: 'Dạ anh chờ em một chút để em kiểm tra chính xác thông tin cho mình nhé!',
        nv: 'Chị Ngân · Quầy Thủ Đức · người thật',
        nvTraLoi: 'Dạ em xin lỗi anh, giá thu bên em chỉ báo sau khi kỹ thuật kiểm tra máy ạ. Lô máy pin trên 95% em giữ cho anh 1 máy, anh xem lại giúp em nhé!',
      },

      tags: {
        rows: [
          { ten: 'Lê Minh Đức', av: 'ĐL', kenh: 'fb', msg: '13 pro thu bn e? ship về Dĩ An đc k', gio: '14:47',
            tags: [['FB Ads · iPhone 16 Pro Max like new', 'ng'], ['#iphone16promax', 'qt'], ['#ThuCuDoiMoi', 'qt'], ['Hẹn ghé 02/12', 'ht']] },
          { ten: 'Trần Bảo', av: 'TB', kenh: 'fb', msg: 'Có màu titan sa mạc không shop?', gio: '10:12',
            tags: [['Bình luận bài viết', 'ng'], ['#likenew', 'qt'], ['Đã cho SĐT', 'ht'], ['Gọi lần 1 ✓', 'sa']] },
          { ten: 'Nguyễn Thảo Vy', av: 'TV', kenh: 'tiktok', msg: 'Có Samsung S25 Ultra cũ không shop?', gio: '16:30',
            tags: [['TikTok · Video quầy máy', 'ng'], ['#SamsungCu', 'qt'], ['Đã cho SĐT', 'ht'], ['Gọi lần 2 · không bắt máy', 'sa']] },
          { ten: 'Phan Gia Huy', av: 'GH', kenh: 'zalo', msg: 'Thay pin 12 Pro mất bao lâu vậy?', gio: '09:05',
            tags: [['Zalo OA', 'ng'], ['#ThayPin', 'qt'], ['Đang bám đuổi', 'ht']] },
          { ten: 'Võ Minh Thư', av: 'MT', kenh: 'zalo', msg: 'Giữ giúp mình 1 tai nghe nhé', gio: 'Hôm qua',
            tags: [['Zalo · Khách cũ', 'ng'], ['#PhuKien', 'qt'], ['Đã mua máy', 'ht'], ['Đã kết nối Zalo', 'za']] },
        ],
        chanDung: {
          ten: 'Lê Minh Đức', av: 'ĐL', kenh: 'fb', sub: 'Facebook Messenger · 0938 274 615',
          nhom: [
            ['Nguồn khách', [['Facebook Ads', 'ng'], ['Bài: iPhone 16 Pro Max like new', 'ng']]],
            ['Quan tâm', [['#iphone16promax', 'qt'], ['#ThuCuDoiMoi', 'qt']]],
            ['Hành trình', [['Nhắn tin 26/11', 'ht'], ['Cho SĐT 01/12', 'ht'], ['Hẹn ghé 02/12', 'ht']]],
            ['Sale gọi', [['Chị Ngân · lần 1 ✓', 'sa']]],
            ['Kết nối', [['Đã kết nối Zalo', 'za'], ['Khách mới · L1', 'lv']]],
          ],
          ghiChu: 'Đang dùng 13 Pro 128GB, muốn đổi lên 16 Pro Max 256GB like new. Ở Dĩ An, muốn ship nhưng cửa hàng chỉ bán tại quầy. Hẹn ghé 18h thứ Tư 02/12, mang máy cũ để kiểm tra thu cũ.',
        },
      },

      chotLai: [
        ['KHÁCH HÀNG', ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến']],
        ['AI CHATBOT', ['Phản hồi nhanh tức thì', 'Báo giá, gửi ảnh máy thật', 'Mời qua xem máy, thu cũ tại quầy', 'Lấy SĐT, giữ máy cho khách']],
        ['BÁM ĐUỔI', ['Gửi 5 tin nhắn trong 7 ngày: máy thật, khách thật, bảo hành, quy trình']],
        ['TỚI CỬA HÀNG', ['Khách cầm máy, kiểm tra tận tay', 'Nhân viên quầy chốt máy']],
        ['MUA LẠI', ['Mời kiểm tra máy định kỳ, gửi ưu đãi phụ kiện qua FB và Zalo']],
      ],
    },
  };
})();
