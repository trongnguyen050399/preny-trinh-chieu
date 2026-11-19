/* Kịch bản: KHÓA HỌC BOXING — BẢN TRÌNH CHIẾU, nhóm CÂN NHẮC NHIỀU. Làm 19/11/2026 theo người dùng:
   "làm ngành khóa học boxing cân nhắc nhiều, pipeline mời khách tới tham quan phòng tập và tập thử để sale chốt".
   "AI chốt đơn = lấy tên + SĐT + hẹn tham quan, tập thử 1 buổi miễn phí": sale phòng tập chốt khóa tại chỗ, gửi sự kiện Lead
   (không gửi Purchase khi khách chưa đăng ký).
   Demo chat 1 khách từ đầu tới cuối (khớp Bài 2 video ngang, demo/bai2/kich-ban-boxing-tc.js):
   anh Khoa bấm quảng cáo tập thử boxing, hỏi giá → AI báo khóa cơ bản 3 tháng 4.500.000đ, gửi đúng ảnh quảng cáo
   → hỏi mục tiêu, đã tập môn nào chưa → 28 tuổi, 82kg, dân văn phòng, chưa tập gì, muốn giảm cân + tự vệ, sợ bị đánh đau,
   7h tối mới tan làm, gym gần nhà 500k/tháng → AI: tháng đầu chưa đấu đối kháng, lớp tối 18h30/19h30, không so với gym,
   không hứa giảm bao nhiêu kg → mời tham quan + tập thử miễn phí, cho mượn găng, xin tên + SĐT → khách im
   → bám đuổi 5 tin (ảnh phòng tập, feedback học viên văn phòng, HLV + bảo hộ, quy trình tham quan → tập thử → đánh giá thể lực,
   mời giữ suất tối thứ Tư) → khách hẹn 19h30 thứ Tư 25/11 → chuyển anh Hùng · Tư vấn khóa học
   → sau khi đăng ký: hỏi thăm buổi đầu, cách giãn cơ; mời đo thể lực sau 1 tháng; ưu đãi gia hạn khóa.
   Không có tin nhắc trước giờ tập thử (Preny chưa có tính năng này).
   Phòng tập, giá, khách, SĐT, feedback, nhân viên: dữ liệu minh họa. Ảnh: Unsplash (ảnh thật, không phải phòng tập của khách). */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'hlv-kem': '1517438322307-e67111335449',     // HLV cầm đích đấm cho học viên (ảnh quảng cáo)
    'phong-tap': '1716307046875-4c4ba2f43cab',   // phòng tập có bao cát và võ đài
    'bao-cat-hang': '1716306886418-f84f6d4c2f3a', // hàng bao cát treo
    'hlv-nu': '1583187856683-dddad0e87f79',      // HLV cầm đích, học viên nữ cười
    'hoc-vien-nu': '1593352216894-89108a0d2653', // học viên nữ châu Á đeo găng
    'gang-tay': '1766264183468-c163676c5154',    // đôi găng da nâu giơ lên
    'gang-hong': '1521800641212-77d98bb90d21',   // đôi găng đỏ trắng trên sàn
    'bang-quan': '1770734265339-d2d3005cc267',   // tay quấn băng đỏ trên thảm
    'gian-co': '1593431763017-c689a61b729a',     // giãn cơ sau buổi tập
    'nghi-tap': '1787651038594-2bf7bf5ec423',    // học viên nghỉ giữa buổi, tay quấn băng
    'doi-khang': '1726867825984-0582b27728b8',   // 2 người tập đối kháng có HLV
    'bong-dam': '1522968980377-27006b1e62f8',    // bóng đấm phản xạ
    'tap-bong': '1606335543042-57c525922933',    // học viên tập đấm
    'dam-bao': '1773289338573-2efcc69a2dfb',     // đấm bao cát trong phòng tập
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    badge: 'AI CHATBOT · KHÓA HỌC BOXING',
    shop: { name: 'Bản Lĩnh Boxing Club', initials: 'BL' },
    headline: { pre: 'AI chatbot tư vấn khóa boxing và', em: 'mời khách tới tập thử' },
    sub: 'Hỏi đúng mục tiêu, không hứa giảm bao nhiêu kg, xin SĐT và giữ suất tham quan, tập thử; sale phòng tập chốt khóa tại chỗ.',
    cta: 'Dùng thử miễn phí tại **preny.ai**\nHotline **0389 647 778**',
    speed: 1.13,
    timing: { read0: 1000, readPerChar: 28, readMax: 4500, type0: 800, typePerChar: 3, typeMax: 1500, fastType: 500,
              featureHold: 1400, sepHold: 1100, cardHold: 4000, introCard: 250 },

    images: Object.fromEntries(Object.entries(IMG).map(([k, id]) => [k, U(id)])),

    // Cột trái demo ngang (dùng khi xuất video khung ngang), đúng thứ tự diễn trong steps
    features: [
      { title: 'AI tư vấn đúng mục tiêu tập', desc: 'Trả lời ngay, hiểu cả tin viết tắt.',
        kws: ['Báo học phí, gửi đúng ảnh quảng cáo', 'Hỏi mục tiêu, đã tập môn nào chưa', 'Không so với gym, không hứa giảm bao nhiêu kg'] },
      { title: 'Bám đuổi khách cân nhắc lâu', desc: 'Phòng tập nằm đầu danh sách khi khách chọn.',
        kws: ['Khách chưa cho SĐT: tự gắn thẻ #boxingcoban', 'Ảnh phòng tập, feedback học viên văn phòng', 'HLV kèm sát, bảo hộ đầy đủ', 'Quy trình rõ, mời giữ suất tối thứ Tư'] },
      { title: 'AI xin SĐT, giữ suất tập thử', desc: 'Khách nóng chuyển ngay cho sale.',
        kws: ['Cho khách lý do để cho số: giữ suất, mượn găng', 'Lưu khách, gắn thẻ mục tiêu tập', 'Chuyển anh Hùng · Tư vấn khóa học'] },
      { title: 'AI chăm sóc học viên', desc: 'Tăng tỷ lệ gia hạn khóa.',
        kws: ['Hỏi thăm buổi đầu, dặn giãn cơ', 'Mời đo thể lực sau 1 tháng', 'Ưu đãi gia hạn khóa cho học viên'] },
    ],

    steps: [
      { intro: true, hold: 1800 },

      /* ---- 1. Tư vấn: học phí + ảnh quảng cáo → mục tiêu, đã tập chưa → sợ đau, giờ tan làm, so gym → mời tham quan, tập thử ---- */
      { feature: 1 },
      { sep: 'Khách bấm Gửi tin nhắn từ quảng cáo Facebook', style: 'time', hold: 800 },
      { kh: 'Học boxing ở đây giá sao em?' },
      { ai: 'Dạ chào anh Khoa, khóa **Boxing cơ bản 3 tháng** (36 buổi, lớp tối đa 8 người) giá **4.500.000đ** ạ.', fast: true, meta: '⚡ Preny AI trả lời sau 2 giây', kw: 0 },
      { aiImg: 'hlv-kem' },
      { ai: 'Anh tập để **giảm cân, tự vệ** hay thi đấu, trước giờ đã tập môn nào chưa ạ?' },
      { kh: 'a 28t, 82kg, dân văn phòng chưa tập gì hết. muốn giảm cân vs biết tự vệ. sợ bị đánh đau, 7h tối mới tan làm. gym gần nhà có 500k/tháng thôi' },
      { ai: 'Dạ người mới thì **tháng đầu chưa đấu đối kháng** ạ, HLV dạy kỹ thuật, đấm bao, cầm đích, tăng thể lực trước. Lớp tối có khung **18h30** và **19h30**, anh tan làm qua kịp.', kw: 1 },
      { ai: 'Gym với boxing mỗi bên một kiểu, em không so ạ. Anh ghé **tham quan phòng tập và tập thử 1 buổi miễn phí** nha, găng và băng quấn bên em cho mượn. Anh cho em xin **tên và SĐT** để giữ suất ạ 🥊', kw: 2 },
      { seen: true },

      /* ---- 2. Khách im → bám đuổi 5 tin trong 7 ngày ---- */
      { feature: 2 },
      { sep: 'Khách chưa để lại SĐT… · AI gắn thẻ #boxingcoban #GiamCan', style: 'silent', kw: 0, hold: 1600 },
      { sep: '— 15 phút sau —' },
      { ai: 'Anh Khoa ơi, em gửi anh vài hình **phòng tập** bên em nha 🥊', meta: '🥊 Tự động · Bám đuổi', kw: 1 },
      { aiImgs: [{ img: 'phong-tap', label: 'Khu võ đài' }, { img: 'bao-cat-hang', label: 'Khu bao cát' },
                 { img: 'hlv-nu', label: 'HLV cầm đích' }, { img: 'nghi-tap', label: 'Lớp buổi tối' }], hold: 3200 },
      { sep: '— 1 ngày sau —' },
      { card: {
          tag: '⭐ Feedback học viên',
          intro: 'Đây là chia sẻ của một anh học viên văn phòng bên em ạ 💬',
          lines: ['“Mình 85kg, chưa tập gì bao giờ. Tháng đầu HLV cho tập kỹ thuật với thể lực, không bị ép đấu. 3 tháng xuống 6kg, tối về ngủ ngon hẳn.”', 'Anh Minh Đức, Q.3', '(Kết quả tùy thể trạng và mức chăm tập)'],
        }, meta: '🥊 Tự động · Bám đuổi', kw: 1, hold: 4200 },
      { sep: '— 1 ngày sau —' },
      { card: {
          tag: '✓ Bản Lĩnh Boxing Club',
          intro: 'Bên em tập vậy để anh yên tâm ạ:',
          lines: ['**HLV từng thi đấu**, lớp tối đa 8 người, kèm sát từng người', '**Bảo hộ đầy đủ**: găng, băng quấn tay, mũ bảo hộ', 'Khởi động, giãn cơ kỹ, **không ép sức** người mới'],
        }, meta: '🥊 Tự động · Bám đuổi', kw: 2, hold: 4000 },
      { sep: '— 1 ngày sau —' },
      { ai: 'Buổi đầu bên em là **tham quan → tập thử 60 phút → HLV đánh giá thể lực** rồi mới tư vấn lớp, anh ưng mới đăng ký, không ép ạ 😊', meta: '🥊 Tự động · Bám đuổi', kw: 3 },
      { sep: '— 2 ngày sau —' },
      { ai: 'Tối thứ Tư này lớp người mới còn vài suất tập thử, anh muốn em giữ một suất cho anh không ạ?', meta: '🥊 Tự động · Bám đuổi', kw: 3 },
      { kh: 'Tối t4 này a qua tập thử dc, giữ giúp a 1 suất nha' },

      /* ---- 3. Khách quay lại → xin tên + SĐT, giữ suất tham quan + tập thử → chuyển sale ---- */
      { feature: 3 },
      { ai: 'Dạ được ạ, **thứ Tư 25/11** còn khung **18h30** và **19h30**. Anh cho em xin **tên và SĐT** để giữ suất nha 🥊', fast: true, kw: 0 },
      { kh: 'Khoa, 0912 735 468, 19h30 nha e' },
      { card: {
          tag: '✓ Đã giữ suất tập thử · anh Khoa', ok: true,
          lines: ['Thời gian: **19h30 thứ Tư 25/11/2026**', 'Tham quan phòng tập, **tập thử 60 phút miễn phí**', 'HLV đánh giá thể lực, tư vấn lớp người mới', 'Găng, băng quấn tay: **phòng tập cho mượn**'],
        }, meta: '✓ Đã lưu khách, gắn thẻ #boxingcoban #GiamCan', kw: 1, hold: 4200 },
      { ai: '**Anh Hùng bên tư vấn khóa học** sẽ gọi anh xác nhận liền nha. Hôm đó anh mặc đồ thể thao, mang giày êm là được ạ 🥊', meta: '✓ Đã chuyển anh Hùng · Tư vấn khóa học', kw: 2, hold: 1500 },

      /* ---- 4. Sau khi đăng ký: hỏi thăm buổi đầu → mời đo thể lực sau 1 tháng → ưu đãi gia hạn ---- */
      { feature: 4 },
      { sep: '— Tối 27/11 · sau buổi tập đầu —' },
      { ai: 'Anh Khoa ơi, buổi tập đầu thấy sao rồi ạ? Đau cơ 1–2 ngày đầu là bình thường, anh **giãn cơ 10 phút**, uống đủ nước nha 🥊', meta: '🥊 Tự động · Chăm sóc học viên', kw: 0 },
      { kh: 'Mỏi tay mà vui lắm e, mai a tập tiếp 😄' },
      { sep: '— Ngày 26/12 · 1 tháng sau —' },
      { ai: 'Anh tập được 1 tháng rồi, HLV mời anh **đo thể lực, cân nặng miễn phí** để chỉnh bài tập nha. Anh muốn em xếp ngày nào ạ?', meta: '📅 Tự động · Mời đo thể lực', kw: 1 },
      { kh: 'Thứ 2 tuần sau nha e' },
      { ai: 'Dạ em xếp lịch rồi ạ. Học viên gia hạn khóa sớm đang được **giảm 15%, tặng băng quấn tay**, HLV sẽ báo anh luôn hôm đo nha 🥊', kw: 2 },
      // Không có { end: true }: bấm → thêm một lần là sang thẳng slide kế.
    ],

    /* ===== Nội dung slide trình chiếu (trinh-chieu.html). Slide thống kê dùng số minh họa (deck.dashboard). ===== */
    deck: {
      /* Demo chat dọc (demo-doc.js): bài đăng → 1 bình luận → quảng cáo tập thử boxing (bấm Gửi tin nhắn)
         → Messenger với anh Khoa (tư vấn, bám đuổi, giữ suất tập thử, chăm sóc học viên) → màn kết. */
      demoDoc: {
        khach: 'Khoa Trần',
        sanPham: 'Boxing cơ bản · Tập thử miễn phí',
        ngay: '18/11/2026',
        gio: '14:46',
        binhLuan: [
          { ten: 'Lê Ngọc Trâm', noiDung: 'Con gái 45kg tập được không shop?', traLoi: 'Dạ phòng tập vừa nhắn tin tư vấn chi tiết cho chị, chị xem inbox nha!' },
        ],
        post: {
          tieuDe: 'BOXING CƠ BẢN · TẬP THỬ MIỄN PHÍ 🥊',
          dong: ['Tham quan, tập thử 1 buổi', 'Tháng đầu chưa đấu đối kháng', 'Lớp tối đa 8 người', 'Cho mượn găng, băng quấn'],
          anh: ['hlv-kem', 'phong-tap', 'hlv-nu', 'bao-cat-hang'],
        },
        quangCao: {
          tieuDe: 'BOXING CƠ BẢN · TẬP THỬ MIỄN PHÍ',
          mo: 'Khóa 3 tháng 36 buổi, lớp tối 18h30 và 19h30. Người mới được tham quan, tập thử 1 buổi miễn phí.',
          anh: 'hlv-kem', nhan: 'MESSENGER', dong: 'Tư vấn 24/7 · Giữ suất tập thử', nut: 'Gửi tin nhắn',
        },
        ket: {
          tieuDe: 'PRENY AI – TƯ VẤN KHÓA BOXING, MỜI KHÁCH TỚI TẬP THỬ',
          y: ['Trả lời ngay 24/7', 'Hỏi đúng mục tiêu tập', 'Không hứa giảm bao nhiêu kg', 'Lấy SĐT, giữ suất tập thử',
              'Bám đuổi 5 tin trong 7 ngày', 'Báo ngay sale phòng tập', 'Chăm sóc học viên qua Zalo', 'Meta CAPI Lead'],
        },
      },
      /* Pipeline mới (TRINH-CHIEU.md mục 1): dashboard, chatbot (lead = AI chốt là lấy SĐT + hẹn tập thử), afterSale. */
      dashboard: [
        { ten: 'Boxing <span class="grad">cơ bản 3 tháng</span>', den: '20/07/2026', khach: 15, tyLe: 0.57 },
        { ten: 'Boxing <span class="grad">cho nữ, giảm cân</span>', den: '24/08/2026', khach: 10, tyLe: 0.55 },
        { ten: 'Kèm <span class="grad">1 HLV 1 học viên</span>', den: '29/09/2026', khach: 7, tyLe: 0.53 },
      ],
      chatbot: {
        y: [
          ['Trả lời ngay tức thì, 24/7', 'Khách nhắn lúc nào, AI trả lời sau 2 giây'],
          ['Tư vấn đúng mục tiêu tập', 'Hỏi giảm cân, tự vệ hay thi đấu'],
          ['Chốt đơn = lấy SĐT + hẹn tập thử', 'Giữ suất tham quan, chuyển sale'],
          ['Hiểu hình ảnh khách gửi', 'Khách gửi ảnh găng, AI tư vấn đúng cỡ'],
        ],
        chat: [
          { ref: { img: L(IMG['hlv-kem']), ten: 'Boxing cơ bản · Tập thử miễn phí' } },
          { kh: 'a 82kg, dân văn phòng chưa tập gì. muốn giảm cân vs tự vệ, sợ bị đánh đau' },
          {
            ai: 'Dạ khóa **Boxing cơ bản 3 tháng** giá **4.500.000đ** ạ. Người mới thì **tháng đầu chưa đấu đối kháng**, HLV dạy kỹ thuật, đấm bao, tăng thể lực trước 🥊',
            meta: '⚡ Preny AI trả lời sau 2 giây',
          },
          { kh: 'gym gần nhà có 500k/tháng, khác gì e?' },
          {
            ai: 'Dạ mỗi bên một kiểu, em không so ạ. Anh ghé **tham quan và tập thử 1 buổi miễn phí** nha, găng bên em cho mượn. Anh cho em xin **tên, SĐT** để giữ suất ạ.',
          },
          { kh: 'Khoa - 0912 735 468. tối t4 25/11 a qua dc ko e?' },
          { ai: 'Dạ được ạ! Em giữ suất tập thử **19h30 thứ Tư 25/11** cho anh, anh Hùng bên tư vấn gọi xác nhận liền nha ⚡' },
          { don: true },
          { ok: true },
        ],
        lead: {
          ten: 'Anh Khoa',
          sdt: '0912 735 468',
          nhuCau: '28 tuổi, **82kg**, chưa tập môn nào · muốn **giảm cân, tự vệ** · tan làm 7h tối · sợ bị đánh đau',
          the: [['FB Ads · Boxing cơ bản', 'ng'], ['#boxingcoban', 'qt'], ['#GiamCan', 'qt'], ['Đã cho SĐT', 'ht']],
          lichNhan: 'Lịch tập thử',
          lich: ['Tham quan, tập thử', '19:30 · Thứ Tư 25/11'],
          sale: 'Anh Hùng · Tư vấn khóa học',
          nut: 'Chuyển cho sale',
          xong: 'Đã chuyển cho anh Hùng',
          okTieuDe: 'Đã giữ suất tập thử 25/11',
        },
        anh: {
          img: L(IMG['gang-hong']),
          nhan: 'Khách gửi ảnh găng mua online',
          kh: 'Găng a mua trên mạng như này tập được ko e?',
          ai: 'Ảnh anh gửi là găng **có dán khóa cổ tay**, tập bao cát được ạ. Anh nặng 82kg thì khi tập đối kháng HLV hay khuyên găng **14–16oz**. Anh mang qua buổi tập thử để HLV xem độ dày đệm giúp anh nha.',
          pill: '🔍 AI nhìn ảnh găng, tư vấn đúng cỡ',
        },
      },
      afterSale: {
        y1: 'AI gửi tiếp 5 món đồ tập để bán thêm',
        y2: 'Lớp mới mở, ưu đãi gia hạn, đo thể lực định kỳ',
        gio: 'Sale vừa chốt khóa cho anh Khoa',
        don: { ma: '#BL25111', phi: 'tặng 1 buổi kèm riêng', sp: [{ ten: 'Khóa Boxing cơ bản 3 tháng', sl: 1, dv: 'khóa', gia: 4500000 }] },
        loi: 'Cảm ơn anh Khoa đã chọn Bản Lĩnh Boxing Club 🥊 Có đồ tập riêng thì tập sạch và vừa tay hơn. Học viên mới hay lấy thêm mấy món này ạ:',
        sp: [
          { img: L(IMG['gang-tay']), ten: 'Găng tay boxing 14oz', gia: 890000, cu: 1050000, nut: 'Thêm vào' },
          { img: L(IMG['bang-quan']), ten: 'Băng quấn tay 4,5m', gia: 120000, nut: 'Thêm vào' },
          { img: L(IMG['hlv-nu']), ten: 'Gói kèm riêng HLV 10 buổi', gia: 3500000, nut: 'Đăng ký' },
          { img: L(IMG['bong-dam']), ten: 'Bóng đấm phản xạ tập tại nhà', gia: 450000, nut: 'Thêm vào' },
          { img: L(IMG['dam-bao']), ten: 'Bao cát treo tại nhà 1m', gia: 1690000, nut: 'Xem thêm' },
        ],
        khach: 'Lấy thêm a đôi găng với cuộn băng quấn nha',
        pill: '🛍 Khách thêm ngay: đơn tăng từ 4.500.000đ lên 5.510.000đ',
        fmm: {
          sep: '1 tháng sau · tin Facebook FMM',
          chao: 'Chào anh Khoa 👋 Phòng tập vừa mở lớp đối kháng nhẹ cho học viên đã tập 1 tháng, mời anh ghé xem nha!',
          img: L(IMG['doi-khang']),
          nhan: 'LỚP MỚI',
          ten: 'Lớp đối kháng nhẹ có HLV kèm',
          mo: 'Học viên đang tập được tham gia thử miễn phí 1 buổi.',
          nut: 'Xem lịch lớp',
        },
        zbs: {
          ten: 'Ưu đãi gia hạn cho anh Khoa',
          mo: 'Cảm ơn anh đã tập ở Bản Lĩnh. Gửi anh ưu đãi gia hạn khóa tiếp theo:',
          dong: [
            ['Mã ưu đãi', '**BANLINH15**'],
            ['Ưu đãi', 'Giảm 15% khóa 3 tháng, tặng băng quấn tay'],
            ['Hạn dùng', '28/02/2027'],
          ],
          nut: 'Dùng ưu đãi',
        },
      },
      tieuDe6: 'Hệ thống AI chatbot giúp tăng<br><span class="grad">tỷ lệ chốt lịch tập thử</span>',
      // Bán khóa học: không lên đơn tự động (khách tập thử rồi sale mới chốt khóa) → 5 tính năng
      tinhNang: [
        ['AI tư vấn, chủ động mời tập thử', 'Lấy SĐT, giữ suất tham quan'],
        ['Bám đuổi khách cân nhắc lâu', 'Gửi phòng tập, học viên thật'],
        ['AI chăm sóc học viên', 'Hỏi thăm, mời đo thể lực định kỳ'],
        ['Bộ công cụ Remarketing FMM và ZBS', 'Khai thác lại dữ liệu khách cũ'],
        ['Gửi sự kiện Lead qua Meta CAPI', 'Hỗ trợ tối ưu quảng cáo Facebook'],
      ],

      chotDon: {
        nganh: 'khóa học boxing',
        nguoi: 'Sale phòng tập',
        chotLa: 'AI chốt đơn = lấy SĐT + hẹn tập thử',
        buoc: [
          { t: 'Chạy quảng cáo', d: 'Thu hút người muốn tập boxing', icon: 'megaphone', own: 'Phòng tập chạy quảng cáo', mock: 'ad', img: L(IMG['hlv-kem']), text: 'Boxing cơ bản, tập thử miễn phí 🥊', btn: 'Gửi tin nhắn' },
          { t: 'Bắt đầu chat', d: 'Hỏi mục tiêu, đã tập môn nào chưa', icon: 'chat', ai: true, mock: 'chat',
            msgs: [['kh', 'Học boxing giá sao em?'], ['ai', 'Dạ khóa 3 tháng 4.500.000đ ạ. Anh tập để giảm cân hay tự vệ? 🥊']] },
          { t: 'Mời tập thử', d: 'Lấy SĐT, giữ suất tham quan', icon: 'phone', ai: true, chot: true, mock: 'form', fields: ['Anh Khoa · 82kg, người mới', '0912 735 468'], ok: 'Đã giữ suất 25/11' },
          { t: 'Sale gọi xác nhận', d: 'Xác nhận giờ, dặn đồ mang theo', icon: 'call', mock: 'lich', ten: 'Tham quan, tập thử', gio: '19:30 · Thứ Tư 25/11', ok: 'Đã xác nhận lịch' },
          { t: 'Tham quan, tập thử', d: 'Tập 60 phút, HLV đánh giá thể lực', icon: 'users', mock: 'img', img: L(IMG['hlv-nu']), cap: 'HLV kèm khách tập thử' },
          { t: 'Sale chốt khóa học', d: 'Chọn lớp hợp giờ, đăng ký', icon: 'check', mock: 'img', img: L(IMG['phong-tap']), cap: '✓ Khách đăng ký khóa 3 tháng' },
        ],
        vong: { t: 'Chăm sóc học viên & Remarketing', d: 'Hỏi thăm buổi đầu, mời đo thể lực định kỳ, gửi ưu đãi gia hạn, lớp mới mở' },
      },

      bamDuoi: {
        nhan: 'Vì sao bám đuổi của Preny đặc biệt', shopB: 'Phòng tập B',
        cmpSai: ['Khách im → gửi “Anh còn quan tâm khóa boxing không ạ?”', 'Không biết khách tập để làm gì, vì sao im', 'Khách thấy phiền, bỏ qua tin nhắn'],
        cmpDung: ['Khách nhắn xong im → nhắc đúng khóa khách hỏi (thẻ <b>#boxingcoban</b> từ quảng cáo)',
                  'Báo giá xong im → bám đuổi theo giá: tặng buổi kèm riêng, tập thử miễn phí (thẻ <b>#baogia</b>)',
                  'Đúng nhu cầu, đúng lý do im → khách quay lại giữ suất tập thử'],
        hoi: 'Học boxing giá sao em?',
        traLoiThuong: 'Dạ khóa 3 tháng 4.500.000đ ạ.',
        nhacChung: 'Anh còn quan tâm khóa boxing không ạ? 😊',
        refImg: L(IMG['hlv-kem']), refTen: 'Boxing cơ bản 3 tháng',
        vd1: {
          ten: 'Khách nhắn xong im',
          kh: 'Người chưa tập gì học boxing được không em?',
          ai: 'Dạ được ạ, lớp cơ bản tháng đầu chưa đấu đối kháng. Anh tập để giảm cân hay tự vệ ạ?',
          tag: '🏷 #boxingcoban', tagNote: 'thẻ từ quảng cáo · khách im 1 ngày',
          nhac: 'Anh Khoa ơi, em gửi anh <b>feedback một anh học viên văn phòng</b> mới tập bên em nè 🥊 Anh ghé <b>tập thử 1 buổi miễn phí</b> nha, găng bên em cho mượn ạ.',
          dung: '🎯 Theo thẻ #boxingcoban: nhắc đúng khóa khách hỏi',
          khach: 'Tối t4 a ghé được ko e?',
        },
        vd2: {
          ten: 'Báo giá xong im',
          kh: 'Học boxing giá sao em?',
          ai: 'Dạ khóa Boxing cơ bản 3 tháng 36 buổi <b>4.500.000đ</b> ạ.',
          tag: '🏷 #baogia', tagNote: 'báo giá xong khách im 2 ngày',
          nhac: 'Anh ơi, tháng này đăng ký khóa 3 tháng được <b>tặng 1 buổi kèm riêng HLV</b>, tính ra chỉ <b>125.000đ/buổi</b> ạ. Em giữ suất tập thử tối thứ Tư cho anh nha?',
          dung: '🎯 Theo thẻ #baogia: bám đuổi theo giá, đúng lý do khách im',
          khach: 'Ok giữ giúp a tối t4',
        },
      },

      binhLuan: {
        post: '<b>Tập thử boxing miễn phí</b> 1 buổi, tháng đầu chưa đấu đối kháng, HLV kèm sát 🥊 Khóa cơ bản 3 tháng 4.500.000đ',
        img: L(IMG['hoc-vien-nu']),
        kav: 'NT', kten: 'Lê Ngọc Trâm', hoi: 'Con gái 45kg, chưa tập gì thì tập boxing được không shop?',
        traLoi: 'Dạ chào chị Trâm! Phòng tập vừa nhắn tin tư vấn chi tiết cho chị, chị xem tin nhắn nhé 💬',
        act2: 'Nhắn riêng, mời tập thử',
        nhan: 'Chào chị Trâm! Lớp tối bên em có <b>nhiều học viên nữ</b>, người mới tập kỹ thuật và thể lực trước, chưa đấu đối kháng ạ. Chị ghé <b>tập thử 1 buổi miễn phí</b> nha. Chị cho em xin SĐT để giữ suất ạ!',
        sp: { ten: 'Tập thử boxing 1 buổi', gia: 'Miễn phí · giữ suất trước', img: L(IMG['hlv-nu']) },
        khach: 'Số mình 0936 207 581 nhé',
      },

      duLieu: {
        shopA: 'Phòng tập A',
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: 3 tháng giảm 10kg, không chấn thương', 'Khách khiếu nại, phòng tập mất uy tín'],
        dung: ['Chỉ trả lời theo dữ liệu phòng tập cung cấp', 'Không chắc chắn → xin khách chờ, AI tạm dừng', 'Báo ngay sale, HLV vào trả lời'],
        hoi: 'Tập 3 tháng có cam kết giảm 10kg không em? Có bị chấn thương không?',
        aiSai: 'Dạ <b>cam kết giảm 10kg</b> ạ, tập ở đây <b>không bao giờ chấn thương</b> luôn anh 🥰',
        thucTe: '⚠ Thực tế: cân nặng tùy thể trạng, ăn uống, mức chăm tập; thể thao luôn có rủi ro, bảo hộ và HLV giúp giảm rủi ro',
        gian: 'Tập 1 tháng mới giảm 2kg, lại bong gân cổ tay! Sao nói cam kết? 😠',
        cho: 'Dạ anh chờ em một chút để em kiểm tra chính xác thông tin cho mình nhé!',
        nv: 'Anh Hùng · Tư vấn khóa học · người thật',
        nvTraLoi: 'Dạ em xin lỗi anh ạ. Anh nghỉ tay cho khỏi hẳn, buổi tới HLV xem lại cách quấn băng, chỉnh bài tập và đo thể lực miễn phí cho anh, anh hẹn giờ giúp em nhé!',
      },

      tags: {
        rows: [
          { ten: 'Trần Đăng Khoa', av: 'DK', kenh: 'fb', msg: 'Người chưa tập gì học được ko e?', gio: '14:47',
            tags: [['FB Ads · Boxing cơ bản', 'ng'], ['#boxingcoban', 'qt'], ['#GiamCan', 'qt'], ['Hẹn tập thử 25/11', 'ht']] },
          { ten: 'Lê Ngọc Trâm', av: 'NT', kenh: 'fb', msg: 'Con gái 45kg tập được không?', gio: '10:12',
            tags: [['Bình luận bài viết', 'ng'], ['#boxingnu', 'qt'], ['Đã cho SĐT', 'ht'], ['Gọi lần 1 ✓', 'sa']] },
          { ten: 'Nguyễn Gia Huy', av: 'GH', kenh: 'tiktok', msg: 'Con 12 tuổi có lớp không shop?', gio: '16:30',
            tags: [['TikTok · Video lớp tối', 'ng'], ['#boxingtreem', 'qt'], ['Đã cho SĐT', 'ht'], ['Gọi lần 2 · không bắt máy', 'sa']] },
          { ten: 'Phạm Quốc Bảo', av: 'QB', kenh: 'zalo', msg: 'Có lớp 6h sáng không em?', gio: '09:05',
            tags: [['Zalo OA', 'ng'], ['#lopsang', 'qt'], ['Đang bám đuổi', 'ht']] },
          { ten: 'Võ Thanh Tùng', av: 'TT', kenh: 'zalo', msg: 'Gia hạn thêm 3 tháng nha', gio: 'Hôm qua',
            tags: [['Zalo · Học viên cũ', 'ng'], ['#giahan', 'qt'], ['Đã đăng ký', 'ht'], ['Đã kết nối Zalo', 'za']] },
        ],
        chanDung: {
          ten: 'Trần Đăng Khoa', av: 'DK', kenh: 'fb', sub: 'Facebook Messenger · 0912 735 468',
          nhom: [
            ['Nguồn khách', [['Facebook Ads', 'ng'], ['Bài: Boxing cơ bản', 'ng']]],
            ['Quan tâm', [['#boxingcoban', 'qt'], ['#GiamCan', 'qt']]],
            ['Hành trình', [['Nhắn tin 18/11', 'ht'], ['Cho SĐT 23/11', 'ht'], ['Hẹn tập thử 25/11', 'ht']]],
            ['Sale gọi', [['Anh Hùng · lần 1 ✓', 'sa']]],
            ['Kết nối', [['Đã kết nối Zalo', 'za'], ['Khách mới · L1', 'lv']]],
          ],
          ghiChu: '28 tuổi, 82kg, dân văn phòng, chưa tập môn nào. Muốn giảm cân, tự vệ, sợ bị đánh đau, tan làm 7h tối, đang so gym 500k/tháng. Hẹn tập thử 19h30 thứ Tư 25/11.',
        },
      },

      chotLai: [
        ['KHÁCH HÀNG', ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến']],
        ['AI CHATBOT', ['Phản hồi nhanh tức thì', 'Hỏi đúng mục tiêu tập', 'Không hứa giảm bao nhiêu kg', 'Lấy SĐT, mời tập thử']],
        ['BÁM ĐUỔI', ['Gửi 5 tin nhắn trong 7 ngày: phòng tập, học viên thật, HLV, quy trình']],
        ['TẬP THỬ', ['Khách tham quan, tập thử miễn phí', 'Sale chốt khóa tại phòng tập']],
        ['GIA HẠN', ['Mời đo thể lực định kỳ, gửi ưu đãi gia hạn, lớp mới qua FB và Zalo']],
      ],
    },
  };
})();
