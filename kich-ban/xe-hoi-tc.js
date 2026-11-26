/* Kịch bản: SHOWROOM XE HƠI (mời lái thử) — BẢN TRÌNH CHIẾU, nhóm CÂN NHẮC NHIỀU. Làm 26/11/2026 theo đồng nghiệp:
   "Bán xe hơi (tư vấn, hỏi thông tin và xin sđt đặt lịch mời lên showroom để trải nghiệm)".
   "AI chốt đơn = lấy tên + SĐT + hẹn lái thử tại showroom": không lên đơn online; tư vấn viên chốt xe tại showroom sau khi khách lái thử,
   gửi sự kiện Lead (không gửi Purchase khi khách chưa mua).
   Demo chat 1 khách từ đầu tới cuối (khớp Bài 2 video ngang, demo/bai2/kich-ban-xe-hoi-tc.js):
   anh Tuấn bấm quảng cáo SUV 7 chỗ hybrid, hỏi giá → AI báo giá niêm yết từ 1.089.000.000đ, gửi đúng ảnh quảng cáo
   → hỏi nhà mấy người, đi phố hay đường dài → 5 người, cuối tuần về Bến Tre, muốn đổi xe 5 chỗ cũ, hỏi giá thu và trả góp
   → AI không tự báo giá thu cũ (kỹ thuật thẩm định tại showroom), không tự tính trả góp (tư vấn viên tính theo hồ sơ, ngân hàng),
   mời lái thử 30 phút, xin tên + SĐT → khách im → bám đuổi 5 tin (xe thật, feedback khách đổi xe, chuẩn bị sẵn, quy trình 45 phút, mời giữ lịch)
   → khách hẹn 9h Chủ nhật 06/12 → gửi địa chỉ showroom → chuyển anh Minh tư vấn → sau khi mua: hỏi thăm, lưu ý 1.000km đầu;
   mời bảo dưỡng 5.000km; ưu đãi phụ kiện 20% cho khách quen.
   AI không tính giá thu cũ, không tính trả góp, không hứa giá lăn bánh, không check khách cũ/mới. Không có tin nhắc trước giờ hẹn.
   Không dùng tên hãng, tên mẫu xe thật. Showroom, giá, khách, SĐT, địa chỉ, feedback, nhân viên: dữ liệu minh họa.
   Ảnh: Unsplash (ảnh thật, không thấy logo hãng xe). */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'xe': '1760713164476-7eb5063b3d07',           // SUV 7 chỗ màu xanh đậm, nhìn ngang (ảnh quảng cáo)
    'xe-trang': '1789044488410-839d90ac9061',     // SUV trắng, cận thân xe
    'xe-duong-dai': '1690278289651-895463644114', // SUV đỗ bên đường, trời xanh
    'man-hinh': '1562618817-253b06cf2b6e',        // màn hình đồng hồ, bản đồ
    'chia-khoa': '1761014586544-53fe5e1f1e25',    // trao chìa khóa xe
    'den': '1763313299304-606adcbcc965',          // đèn pha LED
    'hang-ghe': '1770290405640-5daf7593c92a',     // hàng ghế sau bọc da
    'hanh-ly': '1772466669620-310c35f9deb2',      // cất vali vào cốp sau
    'cua-so-troi': '1786733048266-906986f2ddd4',  // cửa sổ trời nhìn núi
    'lai-thu': '1787571354001-b2c975845e09',      // nhìn từ ghế lái ra đường đèo
    'showroom': '1794208709697-cc599aeb7ac9',     // showroom sáng, xe trưng bày
    'kiem-tra': '1794208709772-1055087b6d22',     // ngồi xuống kiểm tra bánh xe
    'ky-hd': '1794208710075-7196255b683e',        // ký giấy tờ tại bàn showroom
    'ngoi-thu': '1794208710086-80217978a360',     // vợ chồng ngồi thử trong xe
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    badge: 'AI CHATBOT · SHOWROOM XE HƠI',
    shop: { name: 'Ô tô Phú Thành', initials: 'PT' },
    headline: { pre: 'AI chatbot tư vấn xe hơi và', em: 'mời khách tới showroom lái thử' },
    sub: 'Báo giá niêm yết, gửi ảnh xe thật, mời mang xe cũ qua thẩm định tại showroom, xin SĐT và giữ lịch lái thử; tư vấn viên chốt xe tại showroom.',
    cta: 'Dùng thử miễn phí tại **preny.ai**\nHotline **0389 647 778**',
    speed: 1.13,
    timing: { read0: 1000, readPerChar: 28, readMax: 4500, type0: 800, typePerChar: 3, typeMax: 1500, fastType: 500,
              featureHold: 1400, sepHold: 1100, cardHold: 4000, introCard: 250 },

    images: Object.fromEntries(Object.entries(IMG).map(([k, id]) => [k, U(id)])),

    // Cột trái demo ngang (dùng khi xuất video khung ngang), đúng thứ tự diễn trong steps
    features: [
      { title: 'AI báo giá, mời lái thử', desc: 'Trả lời ngay, hiểu cả tin viết tắt.',
        kws: ['Báo giá niêm yết, gửi đúng ảnh quảng cáo', 'Hỏi nhà mấy người, đi phố hay đường dài', 'Không tự báo giá thu cũ, trả góp: mời qua showroom'] },
      { title: 'Bám đuổi khách cân nhắc lâu', desc: 'Showroom nằm đầu danh sách khi khách chọn.',
        kws: ['Khách chưa cho SĐT: tự gắn thẻ #suv7cho', 'Ảnh xe thật, feedback khách đổi xe', 'Xe lái thử, thẩm định, bảng trả góp sẵn', 'Quy trình 45 phút, mời giữ lịch'] },
      { title: 'AI xin SĐT, giữ lịch lái thử', desc: 'Khách nóng chuyển ngay cho tư vấn viên.',
        kws: ['Cho khách lý do để cho số: giữ khung giờ', 'Gửi địa chỉ, dặn mang giấy tờ xe cũ', 'Chuyển anh Minh tư vấn gọi xác nhận'] },
      { title: 'AI chăm sóc sau khi mua xe', desc: 'Tăng tỷ lệ khách quay lại xưởng.',
        kws: ['Hỏi thăm xe mới, dặn 1.000km đầu', 'Mời bảo dưỡng định kỳ', 'Ưu đãi phụ kiện hợp đúng xe khách'] },
    ],

    steps: [
      { intro: true, hold: 1800 },

      /* ---- 1. Tư vấn: giá + ảnh quảng cáo → nhu cầu → hỏi giá thu, trả góp → mời lái thử ---- */
      { feature: 1 },
      { sep: 'Khách bấm Gửi tin nhắn từ quảng cáo Facebook', style: 'time', hold: 800 },
      { kh: 'xe 7 chỗ hybrid giá sao em?' },
      { ai: 'Dạ chào anh Tuấn, SUV 7 chỗ hybrid bên em giá niêm yết **từ 1.089.000.000đ** ạ.', fast: true, meta: '⚡ Preny AI trả lời sau 2 giây', kw: 0 },
      { aiImg: 'xe' },
      { ai: 'Nhà mình thường đi **mấy người**, chủ yếu **đi phố** hay **đường dài** ạ?', kw: 1 },
      { kh: 'nhà a 5 người, cuối tuần hay về quê Bến Tre. a đang đi xe 5 chỗ muốn đổi, thu bn? trả góp tháng bn e?' },
      { ai: 'Dạ giá thu xe cũ phải để **kỹ thuật thẩm định trực tiếp** mới báo đúng được ạ. Còn **trả góp** thì tư vấn viên tính theo hồ sơ và ngân hàng anh chọn.', kw: 2 },
      { ai: 'Cả nhà 5 người hay đi đường dài, anh nên **lái thử 30 phút** cho chắc ạ. Showroom mở **8h–20h** cả Chủ nhật, anh cho em xin **tên và SĐT** để đặt lịch lái thử nha 🚘', kw: 2 },
      { seen: true },

      /* ---- 2. Khách im → bám đuổi 5 tin trong 7 ngày ---- */
      { feature: 2 },
      { sep: 'Khách chưa để lại SĐT… · AI gắn thẻ #suv7cho #ThuCuDoiMoi', style: 'silent', kw: 0, hold: 1600 },
      { sep: '— 15 phút sau —' },
      { ai: 'Anh Tuấn ơi, em gửi anh vài hình **xe thật** tại showroom: thân xe, hàng ghế sau và cốp chở đồ nha 🚘', meta: '📱 Tự động · Bám đuổi', kw: 1 },
      { aiImgs: [{ img: 'xe-trang', label: 'Xe thật' }, { img: 'hang-ghe', label: 'Hàng ghế sau' },
                 { img: 'hanh-ly', label: 'Cốp chở đồ' }, { img: 'showroom', label: 'Showroom' }], hold: 3200 },
      { sep: '— 1 ngày sau —' },
      { card: {
          tag: '⭐ Feedback khách hàng',
          intro: 'Đây là chia sẻ của một anh khách vừa đổi xe bên em ạ 💬',
          lines: ['“Nhà mình 6 người, lái thử chạy cao tốc mới thấy xe êm, hàng ghế 3 vẫn ngồi được. Xe cũ thẩm định ngay tại showroom, giá thu ghi rõ trên phiếu nên yên tâm.”', 'Anh Quốc Hưng, Quận 7', '(Giá thu tùy tình trạng từng xe)'],
        }, meta: '📱 Tự động · Bám đuổi', kw: 1, hold: 4200 },
      { sep: '— 1 ngày sau —' },
      { card: {
          tag: '✓ Chuẩn bị sẵn · Ô tô Phú Thành',
          intro: 'Khi anh ghé, bên em chuẩn bị sẵn cho mình ạ:',
          lines: ['**Xe lái thử** đầy xăng, tư vấn viên đi cùng', '**Thẩm định xe cũ** miễn phí, giá ghi trên phiếu', '**Bảng tính trả góp** theo ngân hàng anh chọn'],
        }, meta: '📱 Tự động · Bám đuổi', kw: 2, hold: 4000 },
      { sep: '— 1 ngày sau —' },
      { ai: 'Lái thử chỉ mất khoảng **45 phút**: xem xe → lái thử đường phố và cao tốc → thẩm định xe cũ, anh ưng mới bàn tiếp ạ 😊', meta: '📱 Tự động · Bám đuổi', kw: 3 },
      { sep: '— 2 ngày sau —' },
      { ai: 'Cuối tuần này showroom còn **3 khung giờ lái thử** buổi sáng. Anh muốn em giữ 1 khung cho cả nhà mình đi thử không ạ?', meta: '📱 Tự động · Bám đuổi', kw: 3 },
      { kh: 'Sáng CN a dẫn vợ con qua lái thử, giữ giúp a nha' },

      /* ---- 3. Khách quay lại → xin tên + SĐT, giữ lịch → gửi địa chỉ → chuyển tư vấn viên ---- */
      { feature: 3 },
      { ai: 'Dạ được ạ, em giữ lịch lái thử sáng **Chủ nhật 06/12** cho anh. Anh cho em xin **tên và SĐT** để báo tư vấn viên nha 🚘', fast: true, kw: 0 },
      { kh: 'Tuấn, 0909 316 528, tầm 9h a qua' },
      { card: {
          tag: '✓ Đã đặt lịch lái thử · anh Tuấn', ok: true,
          lines: ['Thời gian: **9h00 Chủ nhật 06/12/2026**', 'Lái thử **SUV 7 chỗ hybrid**, cả nhà 5 người', 'Thẩm định xe cũ **5 chỗ** để thu cũ đổi mới', 'Địa điểm: **468 Nguyễn Văn Linh, Quận 7**'],
        }, meta: '✓ Đã lưu khách, gắn thẻ #suv7cho #ThuCuDoiMoi', kw: 1, hold: 4200 },
      { ai: '**Anh Minh bên showroom** sẽ gọi anh xác nhận liền nha. Anh nhớ mang theo **giấy đăng ký xe cũ** để kỹ thuật thẩm định luôn ạ 🚘', meta: '✓ Đã chuyển anh Minh · Tư vấn bán hàng', kw: 2, hold: 1500 },

      /* ---- 4. Sau khi mua: hỏi thăm, 1.000km đầu → mời bảo dưỡng → ưu đãi phụ kiện ---- */
      { feature: 4 },
      { sep: '— Ngày 19/12 · sau khi nhận xe —' },
      { ai: 'Anh Tuấn ơi, xe mới đi ổn không ạ? **1.000km** đầu anh hạn chế tăng tốc, phanh gấp nha, tới mốc này xưởng kiểm tra **miễn phí** ạ 🚘', meta: '📱 Tự động · Chăm sóc sau khi mua', kw: 0 },
      { kh: 'Xe êm e, về quê cả nhà khen 👍' },
      { sep: '— Ngày 19/3 · 3 tháng sau —' },
      { ai: 'Xe của anh sắp tới mốc **bảo dưỡng 5.000km** rồi ạ, xưởng bên em kiểm tra phanh, lốp, hệ thống hybrid cho anh. Anh muốn em xếp lịch ngày nào ạ?', meta: '📅 Tự động · Mời bảo dưỡng định kỳ', kw: 1 },
      { kh: 'Thứ 7 tuần sau nha e' },
      { ai: 'Dạ em xếp lịch rồi ạ. Khách quen đang được **giảm 20% phụ kiện** (phim cách nhiệt, thảm sàn, camera hành trình), hôm đó anh lắp luôn nha 🚘', kw: 2 },
      // Không có { end: true }: bấm → thêm một lần là sang thẳng slide kế.
    ],

    /* ===== Nội dung slide trình chiếu (trinh-chieu.html). Slide thống kê dùng số minh họa (deck.dashboard). ===== */
    deck: {
      /* Demo chat dọc (demo-doc.js): bài đăng → 1 bình luận → quảng cáo SUV 7 chỗ hybrid (bấm Gửi tin nhắn)
         → Messenger với anh Tuấn (tư vấn, bám đuổi, hẹn lái thử, chăm sóc sau khi mua) → màn kết. */
      demoDoc: {
        khach: 'Tuấn Võ',
        sanPham: 'SUV 7 chỗ hybrid · Đặt lịch lái thử tại showroom',
        ngay: '26/11/2026',
        gio: '14:46',
        binhLuan: [
          { ten: 'Lâm Khánh', noiDung: 'Có màu trắng không shop? Mình ở Long An', traLoi: 'Dạ showroom vừa nhắn tin tư vấn chi tiết cho anh, anh xem inbox nha!' },
        ],
        post: {
          tieuDe: 'SUV 7 CHỖ HYBRID · LÁI THỬ MIỄN PHÍ 🚘',
          dong: ['Đi phố tiết kiệm xăng', 'Rộng cho cả nhà 7 người', 'Thu cũ đổi mới tại showroom', 'Hỗ trợ trả góp'],
          anh: ['xe', 'hang-ghe', 'xe-trang', 'showroom'],
        },
        quangCao: {
          tieuDe: 'SUV 7 CHỖ HYBRID · ĐẶT LỊCH LÁI THỬ',
          mo: 'SUV 7 chỗ hybrid giá niêm yết từ 1.089.000.000đ. Đặt lịch lái thử miễn phí tại showroom Quận 7, có thu cũ đổi mới.',
          anh: 'xe', nhan: 'MESSENGER', dong: 'Tư vấn 24/7 · Giữ lịch lái thử', nut: 'Gửi tin nhắn',
        },
        ket: {
          tieuDe: 'PRENY AI – TƯ VẤN XE HƠI, MỜI KHÁCH LÁI THỬ',
          y: ['Trả lời ngay 24/7', 'Báo giá, gửi ảnh xe thật', 'Không tự báo giá thu cũ, trả góp', 'Lấy SĐT, giữ lịch lái thử',
              'Bám đuổi 5 tin trong 7 ngày', 'Báo ngay tư vấn viên', 'Chăm sóc sau khi mua qua Zalo', 'Meta CAPI Lead'],
        },
      },
      /* Pipeline mới (TRINH-CHIEU.md mục 1): dashboard, chatbot (lead = AI chốt là lấy SĐT + hẹn lái thử), afterSale. */
      dashboard: [
        { ten: 'SUV <span class="grad">7 chỗ hybrid</span>', den: '21/07/2026', khach: 11, tyLe: 0.54 },
        { ten: 'Thu cũ <span class="grad">đổi mới</span>', den: '18/08/2026', khach: 8, tyLe: 0.52 },
        { ten: 'Sedan <span class="grad">đi phố</span>', den: '26/09/2026', khach: 6, tyLe: 0.5 },
      ],
      chatbot: {
        y: [
          ['Trả lời ngay tức thì, 24/7', 'Khách nhắn lúc nào, AI trả lời sau 2 giây'],
          ['Báo giá, gửi ảnh xe thật', 'Hỏi nhà mấy người, đi phố hay đường dài'],
          ['Chốt đơn = lấy SĐT + hẹn lái thử', 'Giữ lịch cho khách, chuyển tư vấn viên'],
          ['Hiểu hình ảnh khách gửi', 'Khách gửi ảnh xe cũ, AI mời mang qua thẩm định'],
        ],
        chat: [
          { ref: { img: L(IMG['xe']), ten: 'SUV 7 chỗ hybrid · Đặt lịch lái thử tại showroom' } },
          { kh: 'nhà a 5 người, đổi xe 5 chỗ cũ lên 7 chỗ thu bn e? trả góp tháng bn?' },
          {
            ai: 'Dạ giá thu xe cũ phải để **kỹ thuật thẩm định trực tiếp** mới báo đúng được ạ, **trả góp** thì tư vấn viên tính theo hồ sơ và ngân hàng anh chọn 🚘',
            meta: '⚡ Preny AI trả lời sau 2 giây',
          },
          { kh: 'v phải qua showroom hả e?' },
          {
            ai: 'Dạ anh qua **lái thử 30 phút** cho chắc ạ, kỹ thuật thẩm định xe cũ luôn. Anh cho em xin **tên, SĐT** để giữ lịch lái thử nha.',
          },
          { kh: 'Tuấn - 0909 316 528. sáng CN 06/12 9h a qua nha' },
          { ai: 'Dạ được ạ! Em giữ lịch lái thử **9h Chủ nhật 06/12**, anh Minh bên showroom gọi xác nhận liền nha ⚡' },
          { don: true },
          { ok: true },
        ],
        lead: {
          ten: 'Anh Tuấn',
          sdt: '0909 316 528',
          nhuCau: '**SUV 7 chỗ hybrid** · nhà 5 người, hay đi Bến Tre · thu cũ **xe 5 chỗ**',
          the: [['FB Ads · SUV 7 chỗ hybrid', 'ng'], ['#suv7cho', 'qt'], ['#ThuCuDoiMoi', 'qt'], ['Đã cho SĐT', 'ht']],
          lichNhan: 'Hẹn lái thử',
          lich: ['Lái thử', '9:00 · Chủ nhật 06/12'],
          sale: 'Anh Minh · Tư vấn bán hàng',
          nut: 'Chuyển cho showroom',
          xong: 'Đã chuyển cho anh Minh',
          okTieuDe: 'Đã giữ lịch lái thử 06/12',
        },
        anh: {
          img: L(IMG['xe-duong-dai']),
          nhan: 'Khách gửi ảnh xe đang đi',
          kh: 'Xe a như này đổi lên được ko e?',
          ai: 'Ảnh anh gửi là **xe gầm cao 5 chỗ** ạ, bên em **thu đổi được**. Giá thu kỹ thuật báo sau khi **thẩm định trực tiếp tại showroom**, khoảng 20 phút. Anh mang xe qua khi lái thử luôn nha.',
          pill: '🔍 AI nhìn ảnh xe, mời mang qua thẩm định thu cũ',
        },
      },
      afterSale: {
        y1: 'AI gửi tiếp 5 phụ kiện hợp xe để bán thêm',
        y2: 'Xe mới về, ưu đãi phụ kiện, bảo dưỡng định kỳ',
        gio: 'Tư vấn viên vừa chốt xe cho anh Tuấn tại showroom',
        don: { ma: '#PT06121', phi: 'mua tại showroom', sp: [{ ten: 'SUV 7 chỗ hybrid', sl: 1, dv: 'xe', gia: 1089000000 }] },
        loi: 'Cảm ơn anh Tuấn đã chọn Ô tô Phú Thành 🚘 Khách mua SUV 7 chỗ hay lắp thêm mấy món này, anh qua xưởng là lắp ngay ạ:',
        sp: [
          { img: L(IMG['cua-so-troi']), ten: 'Dán phim cách nhiệt toàn xe', gia: 6900000, cu: 8500000, nut: 'Giữ lịch lắp' },
          { img: L(IMG['hang-ghe']), ten: 'Bọc da, thảm sàn 3 hàng ghế', gia: 4500000, nut: 'Giữ lịch lắp' },
          { img: L(IMG['man-hinh']), ten: 'Camera hành trình trước sau', gia: 3200000, nut: 'Giữ lịch lắp' },
          { img: L(IMG['den']), ten: 'Gói chăm sóc sơn, phủ ceramic', gia: 7500000, nut: 'Xem gói' },
          { img: L(IMG['hanh-ly']), ten: 'Khay cốp, giá nóc chở đồ', gia: 2900000, nut: 'Giữ lịch lắp' },
        ],
        khach: 'Lắp a phim cách nhiệt với camera hành trình nha e',
        pill: '🛍 Khách lắp thêm tại xưởng: đơn tăng thêm 10.100.000đ',
        fmm: {
          sep: '1 tháng sau · tin Facebook FMM',
          chao: 'Chào anh Tuấn 👋 Showroom có lịch kiểm tra xe miễn phí trước Tết, mời anh đặt lịch nha!',
          img: L(IMG['kiem-tra']),
          nhan: 'KIỂM TRA XE TRƯỚC TẾT',
          ten: 'Kiểm tra miễn phí 20 hạng mục',
          mo: 'Phanh, lốp, nước làm mát, hệ thống hybrid trước chuyến về quê.',
          nut: 'Đặt lịch',
        },
        zbs: {
          ten: 'Ưu đãi phụ kiện cho anh Tuấn',
          mo: 'Cảm ơn anh đã chọn xe ở Phú Thành. Gửi anh ưu đãi phụ kiện hợp đúng SUV 7 chỗ của anh:',
          dong: [
            ['Mã ưu đãi', '**PHUTHANH20**'],
            ['Ưu đãi', 'Giảm 20% phụ kiện'],
            ['Hạn dùng', '31/05/2027'],
          ],
          nut: 'Dùng ưu đãi',
        },
      },
      tieuDe6: 'Hệ thống AI chatbot giúp tăng<br><span class="grad">tỷ lệ khách tới lái thử</span>',
      // Không lên đơn online (khách lái thử rồi tư vấn viên mới chốt) → 5 tính năng
      tinhNang: [
        ['AI tư vấn, chủ động mời lái thử', 'Lấy SĐT, giữ lịch cho khách'],
        ['Bám đuổi khách cân nhắc lâu', 'Gửi ảnh xe thật, khách thật'],
        ['AI chăm sóc khách sau khi mua', 'Hỏi thăm, mời bảo dưỡng định kỳ'],
        ['Bộ công cụ Remarketing FMM và ZBS', 'Khai thác lại dữ liệu khách cũ'],
        ['Gửi sự kiện Lead qua Meta CAPI', 'Hỗ trợ tối ưu quảng cáo Facebook'],
      ],

      chotDon: {
        nganh: 'xe hơi',
        nguoi: 'Tư vấn viên',
        chotLa: 'AI chốt đơn = lấy SĐT + hẹn lái thử',
        buoc: [
          { t: 'Chạy quảng cáo', d: 'Thu hút khách muốn mua xe', icon: 'megaphone', own: 'Showroom chạy quảng cáo', mock: 'ad', img: L(IMG['xe']), text: 'SUV 7 chỗ hybrid, đặt lịch lái thử miễn phí 🚘', btn: 'Gửi tin nhắn' },
          { t: 'Bắt đầu chat', d: 'Báo giá, hỏi nhu cầu', icon: 'chat', ai: true, mock: 'chat',
            msgs: [['kh', 'xe 7 chỗ hybrid giá sao em?'], ['ai', 'Dạ từ 1.089.000.000đ ạ. Nhà mình mấy người đi ạ? 🚘']] },
          { t: 'Mời lái thử', d: 'Lấy SĐT, giữ khung giờ', icon: 'phone', ai: true, chot: true, mock: 'form', fields: ['Anh Tuấn · đổi xe 5 chỗ lên 7 chỗ', '0909 316 528'], ok: 'Đã giữ lịch 06/12' },
          { t: 'Showroom gọi xác nhận', d: 'Xác nhận giờ, dặn mang giấy tờ', icon: 'call', mock: 'lich', ten: 'Showroom Quận 7', gio: '9:00 · Chủ nhật 06/12', ok: 'Đã xác nhận lịch' },
          { t: 'Lái thử tại showroom', d: 'Cả nhà ngồi thử, lái thử', icon: 'users', mock: 'img', img: L(IMG['ngoi-thu']), cap: 'Khách ngồi thử xe tại showroom' },
          { t: 'Chốt xe, thu cũ', d: 'Thẩm định xe cũ, ký hợp đồng', icon: 'check', mock: 'img', img: L(IMG['ky-hd']), cap: '✓ Khách ký hợp đồng mua xe' },
        ],
        vong: { t: 'Chăm sóc sau mua & Remarketing', d: 'Hỏi thăm xe mới, mời bảo dưỡng định kỳ, gửi ưu đãi phụ kiện, xe mới về' },
      },

      bamDuoi: {
        nhan: 'Vì sao bám đuổi của Preny đặc biệt', shopB: 'Showroom B',
        cmpSai: ['Khách im → gửi “Anh còn quan tâm xe không ạ?”', 'Không biết khách hỏi xe nào, vì sao im', 'Khách thấy phiền, bỏ qua tin nhắn'],
        cmpDung: ['Khách nhắn xong im → nhắc đúng mẫu xe khách hỏi (thẻ <b>#suv7cho</b> từ quảng cáo)',
                  'Báo giá xong im → bám đuổi theo giá: quà tặng khi lái thử, thu cũ đổi mới (thẻ <b>#baogia</b>)',
                  'Đúng nhu cầu, đúng lý do im → khách quay lại hẹn lái thử'],
        hoi: 'SUV 7 chỗ hybrid giá sao em?',
        traLoiThuong: 'Dạ từ 1.089.000.000đ ạ.',
        nhacChung: 'Anh còn quan tâm xe không ạ? 😊',
        refImg: L(IMG['xe']), refTen: 'SUV 7 chỗ hybrid',
        vd1: {
          ten: 'Khách nhắn xong im',
          kh: 'Hàng ghế 3 người lớn ngồi được không em?',
          ai: 'Dạ hàng ghế 3 người lớn ngồi được, hợp đi đường ngắn ạ. Nhà mình mấy người hay đi ạ?',
          tag: '🏷 #suv7cho', tagNote: 'thẻ từ quảng cáo · khách im 1 ngày',
          nhac: 'Anh Tuấn ơi, em gửi anh <b>ảnh thật hàng ghế 2, 3</b> của xe đang có ở showroom nè 🚘 Anh ghé <b>cả nhà ngồi thử</b> nha, chưa cần mua gì ạ.',
          dung: '🎯 Theo thẻ #suv7cho: nhắc đúng mẫu xe khách hỏi',
          khach: 'Cuối tuần a dẫn vợ con qua được ko e?',
        },
        vd2: {
          ten: 'Báo giá xong im',
          kh: 'SUV 7 chỗ hybrid giá sao em?',
          ai: 'Dạ giá niêm yết <b>từ 1.089.000.000đ</b> ạ.',
          tag: '🏷 #baogia', tagNote: 'báo giá xong khách im 2 ngày',
          nhac: 'Anh ơi, tháng này khách lái thử và mua xe tại showroom được <b>tặng gói phim cách nhiệt</b>, xe cũ <b>thẩm định miễn phí</b> ạ. Em giữ 1 khung giờ lái thử cho anh nha?',
          dung: '🎯 Theo thẻ #baogia: bám đuổi theo giá, đúng lý do khách im',
          khach: 'Ok giữ giúp a sáng CN',
        },
      },

      binhLuan: {
        post: '<b>Lái thử miễn phí</b> tại showroom Quận 7: cả nhà ngồi thử, chạy thử cao tốc 🚘 SUV 7 chỗ hybrid từ 1.089.000.000đ',
        img: L(IMG['showroom']),
        kav: 'LK', kten: 'Lâm Khánh', hoi: 'Có màu trắng không shop? Mình ở Long An',
        traLoi: 'Dạ chào anh Khánh! Showroom vừa nhắn tin tư vấn chi tiết cho anh, anh xem tin nhắn nhé 💬',
        act2: 'Nhắn riêng, mời tới showroom lái thử',
        nhan: 'Chào anh Khánh! Màu <b>trắng</b> bên em đang có xe lái thử ạ. Từ Long An lên <b>showroom Quận 7</b> khoảng 40 phút, anh ghé lái thử nha. Anh cho em xin SĐT để giữ lịch ạ!',
        sp: { ten: 'Giữ lịch lái thử tại showroom', gia: 'Miễn phí · 30 phút', img: L(IMG['xe-trang']) },
        khach: 'Số anh 0938 702 461 nhé',
      },

      duLieu: {
        shopA: 'Showroom A',
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: giảm 100 triệu, tặng 100% trước bạ', 'Khách tới nơi thấy khác, showroom mất uy tín'],
        dung: ['Chỉ trả lời theo dữ liệu showroom cung cấp', 'Không chắc chắn → xin khách chờ, AI tạm dừng', 'Báo ngay tư vấn viên vào trả lời'],
        hoi: 'Tháng này có giảm giá gì không em? Có tặng trước bạ không?',
        aiSai: 'Dạ tháng này bên em <b>giảm thẳng 100 triệu</b>, <b>tặng 100% lệ phí trước bạ</b> luôn anh 🥰',
        thucTe: '⚠ Thực tế: tháng này chỉ tặng gói phim cách nhiệt; không có chương trình giảm 100 triệu hay tặng trước bạ',
        gian: 'Tới showroom lại bảo không có giảm 100 triệu, không tặng trước bạ! Sao nhắn nói vậy? 😠',
        cho: 'Dạ anh chờ em một chút để em kiểm tra chính xác thông tin cho mình nhé!',
        nv: 'Anh Minh · Tư vấn bán hàng · người thật',
        nvTraLoi: 'Dạ em xin lỗi anh, tháng này showroom đang tặng gói phim cách nhiệt khi mua xe ạ. Em gửi anh bảng giá và chương trình chính xác ngay nhé!',
      },

      tags: {
        rows: [
          { ten: 'Võ Minh Tuấn', av: 'TV', kenh: 'fb', msg: 'đổi xe 5 chỗ thu bn? trả góp tháng bn e?', gio: '14:47',
            tags: [['FB Ads · SUV 7 chỗ hybrid', 'ng'], ['#suv7cho', 'qt'], ['#ThuCuDoiMoi', 'qt'], ['Hẹn lái thử 06/12', 'ht']] },
          { ten: 'Lâm Khánh', av: 'LK', kenh: 'fb', msg: 'Có màu trắng không shop? Mình ở Long An', gio: '10:12',
            tags: [['Bình luận bài viết', 'ng'], ['#xehybrid', 'qt'], ['Đã cho SĐT', 'ht'], ['Gọi lần 1 ✓', 'sa']] },
          { ten: 'Đỗ Thanh Mai', av: 'TM', kenh: 'tiktok', msg: 'Sedan đi phố bản thấp nhất giá sao?', gio: '16:30',
            tags: [['TikTok · Video lái thử', 'ng'], ['#SedanDiPho', 'qt'], ['Đã cho SĐT', 'ht'], ['Gọi lần 2 · không bắt máy', 'sa']] },
          { ten: 'Ngô Đức Long', av: 'ĐL', kenh: 'zalo', msg: 'Xe chạy công ty, mua 3 chiếc có giá riêng ko?', gio: '09:05',
            tags: [['Zalo OA', 'ng'], ['#XeDoanhNghiep', 'qt'], ['Đang bám đuổi', 'ht']] },
          { ten: 'Phan Ngọc Hân', av: 'NH', kenh: 'zalo', msg: 'Đặt lịch bảo dưỡng 10.000km giúp mình', gio: 'Hôm qua',
            tags: [['Zalo · Khách cũ', 'ng'], ['#BaoDuong', 'qt'], ['Đã mua xe', 'ht'], ['Đã kết nối Zalo', 'za']] },
        ],
        chanDung: {
          ten: 'Võ Minh Tuấn', av: 'TV', kenh: 'fb', sub: 'Facebook Messenger · 0909 316 528',
          nhom: [
            ['Nguồn khách', [['Facebook Ads', 'ng'], ['Bài: SUV 7 chỗ hybrid', 'ng']]],
            ['Quan tâm', [['#suv7cho', 'qt'], ['#ThuCuDoiMoi', 'qt']]],
            ['Hành trình', [['Nhắn tin 26/11', 'ht'], ['Cho SĐT 01/12', 'ht'], ['Hẹn lái thử 06/12', 'ht']]],
            ['Sale gọi', [['Anh Minh · lần 1 ✓', 'sa']]],
            ['Kết nối', [['Đã kết nối Zalo', 'za'], ['Khách mới · L1', 'lv']]],
          ],
          ghiChu: 'Nhà 5 người, cuối tuần hay về quê Bến Tre. Đang đi xe 5 chỗ, muốn đổi lên SUV 7 chỗ hybrid, hỏi giá thu cũ và trả góp (để kỹ thuật thẩm định, tư vấn viên tính tại showroom). Hẹn lái thử 9h Chủ nhật 06/12, mang giấy đăng ký xe cũ.',
        },
      },

      chotLai: [
        ['KHÁCH HÀNG', ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến']],
        ['AI CHATBOT', ['Phản hồi nhanh tức thì', 'Báo giá, gửi ảnh xe thật', 'Mời lái thử, thẩm định xe cũ tại showroom', 'Lấy SĐT, giữ lịch cho khách']],
        ['BÁM ĐUỔI', ['Gửi 5 tin nhắn trong 7 ngày: xe thật, khách thật, chuẩn bị sẵn, quy trình']],
        ['TỚI LÁI THỬ', ['Cả nhà ngồi thử, lái thử', 'Tư vấn viên chốt xe tại showroom']],
        ['MUA LẠI', ['Mời bảo dưỡng định kỳ, gửi ưu đãi phụ kiện qua FB và Zalo']],
      ],
    },
  };
})();
