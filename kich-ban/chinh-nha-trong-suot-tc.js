/* Kịch bản: KHÓA HỌC CHỈNH NHA TRONG SUỐT (khóa online 3D Planning clear aligner cho bác sĩ nha khoa)
   — BẢN TRÌNH CHIẾU, nhóm CÂN NHẮC NHIỀU. Làm 18/11/2026, tham khảo trang khóa học người dùng gửi
   (earlybird.drphu.academy/ao3: "Làm chủ 3D Planning trong Clear Aligner", 14 chương 123 bài, 9 ca STL,
   khung F+S+A=M, học online trọn đời, review ca đầu tiên trong 90 ngày, không hoàn tiền, không cam kết kết quả điều trị,
   chỉ nhận bác sĩ, chưa làm aligner thì học khóa nhập môn FIRST PLAN).
   Pipeline: quảng cáo phễu → chat hỏi chuyên môn (bác sĩ RHM? đã làm bao nhiêu ca aligner? vướng ở đâu?) →
   mời HỌC THỬ MIỄN PHÍ 3 bài hoặc Q&A online với giảng viên → xin SĐT Zalo → soft follow-up → tư vấn gói học → giữ suất,
   tư vấn viên gửi form đăng ký, QR thanh toán. "AI chốt đơn = lấy SĐT Zalo + mời học thử".
   Demo chat dọc 2 khách: (1) BS. Tuấn ở Đà Nẵng đã làm 7 ca aligner, toàn duyệt plan lab gửi, 2 ca hở kẽ; chưa có máy scan;
   so chỗ "cam kết 1 tháng làm được ca khó" → AI không cam kết kết quả điều trị → học thử → 2 ngày sau bám đuổi đúng ca hở kẽ
   → hỏi phí phần mềm, hoàn tiền → AI nói thật (phí theo ca khi xuất ca thật, không hoàn tiền) → giữ suất, VAT.
   (2) BS. Linh mới tốt nghiệp, chưa làm ca nào, hỏi cho cả kỹ thuật viên → AI nói thật khóa chỉ cho bác sĩ đã làm aligner,
   gợi ý FIRST PLAN, mời Q&A online tối 26/11 → sáng hôm sau (sep "— Ngày 27/11 · … —") → đăng ký, tư vấn viên báo học phí.
   Không có tin nhắc trước buổi Q&A (Preny chưa có tính năng này).
   Tên học viện, giảng viên, tư vấn viên, tên khách, SĐT, ưu đãi, giá khóa đi kèm: dữ liệu minh họa, tự đặt.
   Ảnh: Unsplash (ảnh thật, không phải học viện của khách). */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'khay': '1609840114035-3c981b782dfe',          // tay đeo khay chỉnh nha trong suốt
    'khay-2': '1777793636393-a0fec488f3fb',        // chỉnh khay trong suốt trên răng
    'nu-cuoi-khay': '1609840113929-b130355987e1',  // cô gái cười, cầm khay trong suốt
    'scan-3d': '1777443726993-8f9c8e96e46e',       // bác sĩ xem bản scan 3D hàm răng trên máy tính bảng
    'scan-tablet': '1600170311833-c2cf5280ce49',   // tay đeo găng chỉ vào bản scan răng
    'may-tinh': '1666214280250-41f16ba24a26',      // bác sĩ áo blouse làm việc trên 2 màn hình
    'quet-mieng': '1656428964836-78d54bf76231',    // bác sĩ quét trong miệng, màn hình laptop
    'mau-ham': '1675516030465-e2ad117e870f',       // mẫu hàm in 3D
    'mau-ham-2': '1775630159225-362225844076',     // tay đeo găng cầm mẫu hàm
    'hoi-thao': '1603478804503-dc909c7f5ce5',      // học viên chăm chú nghe trong hội thảo
    'thuc-hanh': '1758205307854-5f0b57c27f17',     // bác sĩ thực hành trên mô hình
    'tu-van': '1777331903190-341a3dd0441b',        // bác sĩ trò chuyện với bệnh nhân
    'bac-si-laptop': '1675270855267-3c73bfd13849', // bác sĩ áo blouse học trên laptop
    'hoc-online': '1766074903112-79661da9ab45',    // laptop đang họp video nhiều người
    'bac-si-nu': '1758691462651-611d730c5272',     // bác sĩ nữ ngồi bàn làm việc
    'nu-cuoi': '1677026010083-78ec7f1b84ed',       // nụ cười răng đều
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    badge: 'AI CHATBOT · ĐÀO TẠO NHA KHOA',
    shop: { name: 'Aligner Minh Tâm', initials: 'MT' },
    headline: { pre: 'AI chatbot tư vấn khóa học và', em: 'mời học thử' },
    sub: 'Hỏi đúng chuyên môn, số ca bác sĩ đã làm, không hứa bừa kết quả: mời học thử miễn phí, xin SĐT Zalo rồi chốt giữ suất.',
    cta: 'Dùng thử miễn phí tại **preny.ai**\nHotline **0389 647 778**',
    speed: 1.13,
    timing: { read0: 1000, readPerChar: 28, readMax: 4500, type0: 800, typePerChar: 3, typeMax: 1500, fastType: 500,
              featureHold: 1400, sepHold: 1100, cardHold: 4000, introCard: 250 },

    images: Object.fromEntries(Object.entries(IMG).map(([k, id]) => [k, U(id)])),

    // Cột trái demo ngang (dùng khi xuất video khung ngang)
    features: [
      { title: 'AI hỏi đúng chuyên môn, số ca đã làm', desc: 'Hiểu cả tin dài, viết tắt, hỏi dồn.',
        kws: ['Bác sĩ RHM, đã làm bao nhiêu ca aligner', 'Đang vướng ở đâu: hở kẽ, không khớp plan', 'Không cam kết kết quả điều trị'] },
      { title: 'AI mời học thử miễn phí, xin SĐT Zalo', desc: 'Lưu khách, gắn thẻ tự động.',
        kws: ['Học thử 3 bài hoặc Q&A với giảng viên', 'Cho bác sĩ lý do để cho số: gửi link học thử', 'Lưu khách, gắn thẻ #3DPlanning, #FirstPlan'] },
      { title: 'Bám đuổi đúng ca vướng, chốt giữ suất', desc: 'Chuyển tư vấn viên chốt đăng ký.',
        kws: ['Gửi đúng ca bác sĩ đang vướng', 'Nói rõ phí phần mềm, chính sách hoàn tiền', 'Giữ suất, chuyển tư vấn viên'] },
    ],

    steps: [
      { intro: true, hold: 1800 },

      /* ===== KHÁCH 1 · BS đã làm aligner: vướng ca hở kẽ → học thử → bám đuổi → phí phần mềm, hoàn tiền → giữ suất ===== */
      { feature: 1 },
      { sep: 'Tình huống 1 · Bác sĩ bấm Gửi tin nhắn từ quảng cáo Facebook', style: 'time', hold: 800 },
      { kh: 'chào em, a là bs rhm ở đà nẵng, làm aligner đc 7 ca rồi mà toàn duyệt plan lab gửi. 2 ca cuối bị hở kẽ, k khớp như plan. khóa này có dạy tự thiết kế plan k, học phí bn' },
      { ai: 'Dạ chào bác sĩ! Khóa **Làm chủ 3D Planning** dành đúng cho bác sĩ đã làm aligner và muốn **tự thiết kế điều trị**, không chỉ duyệt plan lab gửi ạ 🦷', fast: true, meta: '⚡ Preny AI trả lời sau 2 giây', kw: 0 },
      { ai: 'Ca hở kẽ, không khớp như plan thường sai ở khâu **lực, khoảng, neo chặn** khi dựng plan. Khóa dạy theo khung **F+S+A=M** và thực hành **9 ca STL**, có cả ca Hạng II, Hạng III, cắn hở ạ. Bác sĩ đang có **máy scan trong miệng** chưa ạ?', kw: 1 },
      { kh: 'chưa có scanner, toàn lấy dấu gửi lab. a khám cả ngày tối mới rảnh. chỗ khác a hỏi cam kết học 1 tháng tự làm đc ca khó' },
      { ai: 'Dạ chưa có máy scan vẫn học được ạ, khóa có sẵn **thư viện STL** để bác sĩ luyện. Học **online bằng bài quay sẵn**, không có lịch cố định, **xem lại trọn đời**, tối rảnh là học được ạ.', kw: 1 },
      { ai: 'Về cam kết em nói thật: bên em **không cam kết kết quả điều trị** sau 1 tháng. Cam kết là bác sĩ nộp **ca đầu tiên trong 90 ngày**, giảng viên **review, giải thích và cho sửa lại**, phản hồi trong 24–48 giờ ạ.', kw: 2 },

      { feature: 2 },
      { ai: 'Bác sĩ **học thử miễn phí 3 bài đầu** của chương F+S+A=M trước nha, xem cách dạy có hợp không rồi mình tính ạ. Bác sĩ cho em xin **tên và SĐT Zalo** để em gửi link học thử ạ 😊', kw: 1 },
      { kh: 'Tuấn - 0905 318 427', kw: 1 },
      { card: {
          tag: '✓ Học thử miễn phí · BS. Tuấn',
          lines: ['3 bài đầu chương **F+S+A=M**', 'Kèm **1 ca STL mẫu** để tự dựng plan', 'Học trên điện thoại hoặc máy tính', '👉 **Bấm để vào học thử**'],
        }, meta: '✓ Đã lưu khách, gắn thẻ #3DPlanning #HocThu #HoKe', kw: 2, hold: 4200 },

      { feature: 3 },
      { sep: '— 2 ngày sau · BS. Tuấn chưa nhắn lại —' },
      { ai: 'Bác sĩ Tuấn ơi, em gửi bác sĩ thêm **1 ca hở kẽ sau aligner** được dựng lại plan trong khóa: sai ở khoảng và neo chặn, sửa thế nào ạ 🦷 Bác sĩ xem tới bài 2 chưa ạ?', meta: '💬 Tự động · Soft follow-up theo thẻ #HoKe', kw: 0 },
      { kh: 'a xem hết 3 bài rồi, dễ hiểu. mà học xong làm ca thật thì phần mềm có mất phí k e? học k theo đc có hoàn tiền k' },
      { ai: 'Dạ phần mềm **không có phí hàng tháng** ạ. Cài đặt và luyện trên ca mẫu không mất phí, chỉ khi **xuất file ca thật** mới tính phí theo ca của phần mềm, khoảng **30–50 USD/ca** ạ.', kw: 1 },
      { ai: 'Em cũng nói rõ trước: chương trình **không hoàn tiền**, nên bên em mới mời bác sĩ học thử trước ạ. Học phí gói hiện tại **12.960.000đ**, học trọn đời, kèm **voucher trợ giá máy ép máng** và **review ca đầu tiên**. Bác sĩ muốn em giữ suất không ạ?', kw: 1 },
      { kh: 'ok giữ cho a 1 suất, a lấy hóa đơn VAT cho phòng khám nhé' },
      { ai: 'Dạ em đã giữ suất cho bác sĩ Tuấn, ghi chú **xuất hóa đơn VAT** ạ. Tư vấn viên sẽ gọi Zalo cho bác sĩ trong **15 phút** để gửi form đăng ký và **mã QR thanh toán** nha 🎉', meta: '✓ Đã chuyển tư vấn viên chốt đăng ký', kw: 2, hold: 1500 },

      /* ===== KHÁCH 2 · BS mới, chưa làm aligner: AI nói thật đúng đối tượng → FIRST PLAN → Q&A online → sau Q&A → đăng ký ===== */
      { screen: 'chat', hold: 600 },
      { feature: 1 },
      { sep: 'Tình huống 2 · Bác sĩ mới tốt nghiệp, chưa làm aligner', style: 'time', hold: 900 },
      { kh: 'em mới tốt nghiệp RHM năm nay, chưa làm ca aligner nào, học khóa 3D planning luôn đc k ạ? phòng khám em có 1 bạn kỹ thuật viên muốn học cùng' },
      { ai: 'Dạ chào bác sĩ! Chúc mừng bác sĩ mới tốt nghiệp ạ 🎓', fast: true, meta: '⚡ Preny AI trả lời sau 2 giây', kw: 0 },
      { ai: 'Em nói thật để bác sĩ chọn đúng khóa: 3D Planning dành cho bác sĩ **đã làm aligner**. Bác sĩ chưa làm ca nào thì nên bắt đầu từ **khóa nhập môn FIRST PLAN**, học xong lên 3D Planning dễ hơn nhiều ạ. Còn bạn kỹ thuật viên, em xin lỗi, chương trình **chỉ nhận bác sĩ** ạ.', kw: 2 },
      { kh: 'vâng ạ. khóa nhập môn học ntn, có buổi nào hỏi trực tiếp thầy k ạ' },
      { feature: 2 },
      { ai: 'Dạ có ạ! Tối **thứ Năm 26/11** lúc **20h** bên em có buổi **Q&A online miễn phí** với giảng viên, giới thiệu lộ trình từ FIRST PLAN lên 3D Planning cho bác sĩ mới ạ. Bác sĩ cho em xin **tên và SĐT Zalo** để em gửi link tham gia nha.', kw: 0 },
      { kh: 'Khánh Linh, 0932 604 815' },
      { ai: 'Dạ em đã đăng ký cho bác sĩ Linh buổi **Q&A online 20h thứ Năm 26/11** ạ. Link tham gia em gửi qua Zalo, tư vấn viên sẽ nhắn bác sĩ xác nhận nha 😊', meta: '✓ Đã lưu khách, gắn thẻ #FirstPlan #BacSiMoi', kw: 2 },

      { feature: 3 },
      { sep: '— Ngày 27/11 · sáng hôm sau buổi Q&A online —' },
      { ai: 'Bác sĩ Linh ơi, buổi Q&A tối qua bác sĩ thấy thế nào ạ? Bác sĩ còn băn khoăn gì về lộ trình, em gửi thêm thông tin nha 😊', meta: '💬 Tự động · Chăm sóc sau buổi Q&A', kw: 0 },
      { kh: 'hay lắm ạ, thầy giải thích dễ hiểu. em muốn đăng ký FIRST PLAN, phòng khám em cũng muốn bắt đầu nhận ca aligner' },
      { ai: 'Dạ tuyệt quá ạ! Em ghi nhận bác sĩ Linh đăng ký **khóa nhập môn FIRST PLAN**. Học phí và ưu đãi cho bác sĩ dự Q&A, tư vấn viên sẽ gọi Zalo báo chính xác và gửi form đăng ký cho bác sĩ ngay ạ 🎉', meta: '✓ Đã chuyển tư vấn viên chốt đăng ký', kw: 2, hold: 1500 },
      // Không có { end: true }: bấm → thêm một lần là sang thẳng slide kế.
    ],

    /* ===== Nội dung slide trình chiếu (trinh-chieu.html). Slide thống kê dùng số minh họa (deck.dashboard). ===== */
    deck: {
      /* Demo chat dọc (demo-doc.js): bài đăng → bình luận → quảng cáo phễu (bấm Gửi tin nhắn) → Messenger 2 khách
         → màn hình Meta CAPI Lead → màn kết. Khách thứ hai mở bằng sep 'time' thứ hai. */
      demoDoc: {
        khach: ['Trần Anh Tuấn', 'Khánh Linh'],
        sanPham: 'Học thử miễn phí 3 bài',
        ngay: '18/11/2026',
        gio: '21:40',
        binhLuan: [
          { ten: 'Đỗ Hải Yến', noiDung: 'Chưa có máy scan học được không ạ?', traLoi: 'Dạ được ạ, học viện vừa nhắn tin tư vấn cho bác sĩ, bác sĩ xem inbox nha!' },
        ],
        post: {
          tieuDe: 'LÀM CHỦ 3D PLANNING CLEAR ALIGNER 🦷',
          dong: ['Tự thiết kế plan, không chỉ duyệt', '14 chương · 123 bài · học trọn đời', '9 ca STL thực hành', 'Review ca đầu tiên trong 90 ngày'],
          anh: ['scan-3d', 'khay', 'mau-ham', 'quet-mieng'],
        },
        quangCao: {
          tieuDe: 'ĐỪNG CHỈ DUYỆT PLAN, HÃY TỰ THIẾT KẾ ĐIỀU TRỊ',
          mo: 'Khóa online cho bác sĩ đã làm clear aligner. Học thử miễn phí 3 bài đầu.',
          anh: 'scan-3d', nhan: 'MESSENGER', dong: 'Học thử miễn phí · Học trọn đời', nut: 'Gửi tin nhắn',
        },
        capi: {
          nhan: '⏩ Hệ thống · Ghi nhận khách hàng tiềm năng',
          event: 'Lead',
          dong: [['Event', 'Lead'], ['Event ID', 'ALIGNER-LEAD-001'], ['Nguồn', 'Facebook Ads → Messenger'], ['SĐT', 'Đã thu thập trong Preny'], ['Trạng thái', 'Đã học thử, giữ suất'], ['Chống trùng', 'Event ID']],
          chu: 'Chỉ gửi dữ liệu khi được phép, có cấu hình và quyền sử dụng dữ liệu phù hợp. Hiển thị là mô phỏng (demo).',
          khong: 'Không gửi Purchase khi bác sĩ chưa thanh toán học phí.',
        },
        ket: {
          tieuDe: 'PRENY AI – TỰ ĐỘNG HÓA TUYỂN SINH KHÓA NHA KHOA',
          y: ['Tự động trả lời bình luận', 'Tiếp nhận khách từ quảng cáo phễu', 'Hỏi chuyên môn, số ca đã làm', 'Mời học thử miễn phí', 'Xin SĐT Zalo, lưu khách, gắn thẻ', 'Bám đuổi đúng ca bác sĩ vướng', 'Tư vấn gói học, chốt giữ suất', 'Meta CAPI Lead'],
        },
      },
      /* Pipeline mới (TRINH-CHIEU.md mục 1): dashboard, chatbot (lead = AI chốt là lấy SĐT Zalo + mời học thử), afterSale. */
      dashboard: [
        { ten: 'Khóa học <span class="grad">chỉnh nha trong suốt</span>', den: '21/07/2026', khach: 11, tyLe: 0.55 },
        { ten: 'Đào tạo <span class="grad">bác sĩ nha khoa</span>', den: '18/08/2026', khach: 9, tyLe: 0.52 },
        { ten: 'Khóa <span class="grad">3D Planning aligner</span>', den: '26/09/2026', khach: 7, tyLe: 0.57 },
      ],
      chatbot: {
        y: [
          ['Trả lời ngay tức thì, 24/7', 'Bác sĩ nhắn sau giờ khám, AI trả lời sau 2 giây'],
          ['Hỏi đúng chuyên môn, số ca đã làm', 'Đúng đối tượng mới tư vấn khóa phù hợp'],
          ['Chốt đơn = lấy SĐT Zalo + học thử', 'Gửi bài học thử, chuyển tư vấn viên'],
          ['Hiểu hình ảnh khách gửi', 'Bác sĩ gửi ảnh plan, AI hiểu đúng nhu cầu'],
        ],
        chat: [
          { ref: { img: L(IMG['scan-3d']), ten: 'Làm chủ 3D Planning · học thử miễn phí' } },
          { kh: 'a làm aligner 7 ca rồi mà toàn duyệt plan lab gửi, khóa có dạy tự thiết kế plan k e' },
          {
            ai: 'Dạ có ạ! Khóa dạy bác sĩ **tự thiết kế plan** theo khung F+S+A=M, thực hành **9 ca STL** ạ. Bác sĩ đang vướng ca nào nhất ạ? 🦷',
            meta: '⚡ Preny AI trả lời sau 2 giây',
          },
          { kh: '2 ca cuối bị hở kẽ, k khớp như plan. a chưa có máy scan' },
          {
            ai: 'Dạ chưa có máy scan vẫn học được bằng **thư viện STL** ạ. Bác sĩ **học thử 3 bài miễn phí** nha, cho em xin **tên và SĐT Zalo** để em gửi link ạ 😊',
          },
          { kh: 'Tuấn - 0905 318 427' },
          { ai: 'Dạ em gửi link học thử và chuyển tư vấn viên theo sát bác sĩ ngay ạ ⚡' },
          { don: true },
          { ok: true },
        ],
        lead: {
          ten: 'BS. Tuấn',
          sdt: '0905 318 427',
          nhuCau: 'Đã làm **7 ca aligner**, muốn **tự thiết kế plan** · 2 ca hở kẽ · chưa có máy scan · chỉ học tối',
          the: [['FB Ads · 3D Planning Aligner', 'ng'], ['#3DPlanning', 'qt'], ['#HoKe', 'qt'], ['Đã cho SĐT Zalo', 'ht']],
          lichNhan: 'Học thử',
          lich: ['3 bài học thử miễn phí', '21:45 · Thứ Tư 18/11'],
          sale: 'Tư vấn viên Thảo',
          nut: 'Chuyển cho tư vấn viên',
          xong: 'Đã chuyển cho tư vấn viên Thảo',
          okTieuDe: 'Đã gửi học thử 18/11',
        },
        anh: {
          img: L(IMG['scan-3d']),
          kh: 'Plan lab gửi như này thì duyệt được chưa em?',
          ai: 'Dạ ảnh bác sĩ gửi là **màn hình plan 3D** ca chỉnh nha ạ. Duyệt plan cần xem lực, khoảng, neo chặn từng giai đoạn nên em không đánh giá chính xác qua 1 ảnh được. Trong khóa có bài **đọc và sửa plan lab gửi**, bác sĩ học thử miễn phí nha ạ.',
          pill: '🔍 AI nhìn ảnh, hiểu đúng khách đang cần gì',
        },
      },
      afterSale: {
        y1: 'AI gửi tiếp 5 khóa, dịch vụ để bán thêm',
        y2: 'Workshop mới, ưu đãi học viên cũ, giới thiệu đồng nghiệp',
        gio: 'Bác sĩ vừa thanh toán học phí',
        don: { ma: '#MT20112', phi: 'đã thanh toán học phí', sp: [{ ten: 'Làm chủ 3D Planning trong Clear Aligner', sl: 1, gia: 12960000 }] },
        loi: 'Cảm ơn bác sĩ Tuấn đã chọn Học Viện Aligner Minh Tâm 🦷 Tài khoản học tư vấn viên đã gửi bác sĩ qua Zalo ạ. Bác sĩ học 3D Planning hay đăng ký thêm:',
        sp: [
          { img: L(IMG['mau-ham']), ten: 'Review thêm 5 ca thật 1 kèm 1', gia: 4500000, nut: 'Đăng ký' },
          { img: L(IMG['mau-ham-2']), ten: 'Thư viện 20 ca STL nâng cao', gia: 2900000, cu: 3500000, nut: 'Đăng ký' },
          { img: L(IMG['thuc-hanh']), ten: 'Workshop thực hành ca Hạng II, III', gia: 6500000, nut: 'Giữ chỗ' },
          { img: L(IMG['quet-mieng']), ten: 'Quy trình số: scan, chụp ảnh lâm sàng', gia: 1900000, nut: 'Đăng ký' },
          { img: L(IMG['tu-van']), ten: 'Tư vấn triển khai aligner cho phòng khám', gia: 3900000, nut: 'Tư vấn' },
        ],
        khach: 'Cho a đăng ký thêm gói review 5 ca thật nhé',
        pill: '🛍 Bác sĩ đăng ký thêm ngay: đơn tăng từ 12.960.000đ lên 17.460.000đ',
        fmm: {
          sep: '2 tháng sau · tin Facebook FMM',
          chao: 'Chào bác sĩ Tuấn 👋 Học Viện Aligner Minh Tâm vừa mở workshop mới, gửi bác sĩ xem trước nha!',
          img: L(IMG['thuc-hanh']),
          nhan: 'WORKSHOP MỚI',
          ten: 'Thực hành ca Hạng II, Hạng III',
          mo: 'Học viên cũ giảm 15%, số chỗ giới hạn.',
          nut: 'Xem lịch',
        },
        zbs: {
          ten: 'Ưu đãi giới thiệu đồng nghiệp cho BS. Tuấn',
          mo: 'Cảm ơn bác sĩ đã học tại Học Viện Aligner Minh Tâm. Giới thiệu đồng nghiệp cùng học, cả hai cùng nhận ưu đãi:',
          dong: [
            ['Mã ưu đãi', '**MINHTAM-DONGNGHIEP**'],
            ['Ưu đãi', 'Giảm 1.000.000đ cho cả 2 bác sĩ'],
            ['Hạn dùng', '28/02/2027'],
          ],
          nut: 'Gửi cho đồng nghiệp',
        },
      },
      tieuDe6: 'Hệ thống AI chatbot giúp tăng<br><span class="grad">tỷ lệ chốt học viên</span>',
      // Không lên đơn tự động (học thử, Q&A rồi tư vấn viên mới chốt đăng ký, thanh toán QR) → 5 tính năng
      tinhNang: [
        ['AI tư vấn, chủ động lấy lead', 'Hỏi chuyên môn, mời học thử miễn phí'],
        ['Soft follow-up nuôi học viên', 'Gửi đúng ca bác sĩ vướng, bài học thử'],
        ['AI chăm sóc học viên sau bán', 'Hỏi thăm sau Q&A, mời khóa tiếp theo'],
        ['Bộ công cụ Remarketing FMM và ZBS', 'Khai thác lại dữ liệu bác sĩ cũ'],
        ['Gửi sự kiện Lead qua Meta CAPI', 'Hỗ trợ tối ưu quảng cáo Facebook'],
      ],

      chotDon: {
        nganh: 'khóa học chỉnh nha',
        nguoi: 'Tư vấn viên',
        chotLa: 'AI chốt đơn = lấy SĐT Zalo + mời học thử',
        buoc: [
          { t: 'Chạy quảng cáo', d: 'Thu hút bác sĩ đã làm aligner', icon: 'megaphone', own: 'Học viện chạy quảng cáo', mock: 'ad', img: L(IMG['scan-3d']), text: 'Đừng chỉ duyệt plan, hãy tự thiết kế điều trị clear aligner 🦷', btn: 'Gửi tin nhắn' },
          { t: 'Bắt đầu chat', d: 'Hỏi chuyên môn, số ca, ca đang vướng', icon: 'chat', ai: true, mock: 'chat',
            msgs: [['kh', 'Khóa có dạy tự thiết kế plan không em?'], ['ai', 'Dạ có ạ, bác sĩ đã làm bao nhiêu ca aligner rồi ạ? 🦷']] },
          { t: 'Mời học thử, lấy SĐT', d: 'Học thử 3 bài hoặc Q&A online', icon: 'phone', ai: true, chot: true, mock: 'form', fields: ['BS. Tuấn · 7 ca aligner, chỉ học tối', '0905 318 427'], ok: 'Đã gửi học thử 18/11' },
          { t: 'Học thử', d: '3 bài F+S+A=M, 1 ca STL mẫu', icon: 'calendar', own: 'Bác sĩ tự học', mock: 'lich', ten: '3 bài học thử miễn phí', gio: '21:45 · Thứ Tư 18/11', ok: 'Đã học xong 3 bài' },
          { t: 'Tư vấn gói học', d: 'Phí phần mềm, học phí, quyền lợi', icon: 'chat', ai: true, mock: 'img', img: L(IMG['may-tinh']), cap: 'Học trọn đời, review ca đầu tiên' },
          { t: 'Chốt đăng ký', d: 'Giữ suất, thanh toán QR, VAT', icon: 'check', mock: 'img', img: L(IMG['bac-si-laptop']), cap: '✓ BS. Tuấn đăng ký khóa 3D Planning' },
        ],
        vong: { t: 'Chăm sóc lại & Remarketing', d: 'Mời bác sĩ học khóa nâng cao, workshop mới, giới thiệu đồng nghiệp' },
      },

      bamDuoi: {
        nhan: 'Vì sao soft follow-up của Preny đặc biệt', shopB: 'Học viện B',
        cmpSai: ['Khách im → gửi “Bác sĩ còn quan tâm khóa học không ạ?”', 'Không biết bác sĩ vướng ca nào, vì sao im', 'Bác sĩ thấy phiền, bỏ qua tin nhắn'],
        cmpDung: ['Bác sĩ nhắn xong im → gửi đúng ca đang vướng (thẻ <b>#HoKe</b> từ nội dung chat)',
                  'Báo học phí xong im → bám đuổi theo giá: suất ưu đãi, voucher máy ép máng (thẻ <b>#HoiGia</b>)',
                  'Đúng nhu cầu, đúng lý do im → bác sĩ quay lại học thử'],
        hoi: 'Khóa 3D Planning học phí bao nhiêu em?',
        traLoiThuong: 'Dạ 12.960.000đ ạ.',
        nhacChung: 'Bác sĩ còn quan tâm khóa học không ạ? 😊',
        refImg: L(IMG['scan-3d']), refTen: 'Khóa 3D Planning Aligner',
        vd1: {
          kh: 'Ca aligner bị hở kẽ cuối liệu trình thì khóa có dạy sửa không em?',
          ai: 'Dạ có ạ, khóa dạy dựng lại plan theo lực, khoảng, neo chặn. Bác sĩ học thử 3 bài miễn phí nha?',
          tag: '🏷 #HoKe', tagNote: 'thẻ từ nội dung chat · khách im 1 ngày',
          nhac: 'Bác sĩ ơi, em gửi bác sĩ <b>1 ca hở kẽ được dựng lại plan</b> trong khóa: sai ở đâu, sửa thế nào ạ 🦷 Bài học thử chỉ khoảng 30 phút, tối nay bác sĩ xem nha?',
          dung: '🎯 Theo thẻ #HoKe: gửi đúng ca bác sĩ đang vướng',
          khach: 'Tối nay a xem nhé',
        },
        vd2: {
          kh: 'Khóa 3D Planning học phí bao nhiêu em?',
          ai: 'Dạ gói hiện tại <b>12.960.000đ</b>, học trọn đời, có review ca đầu tiên ạ.',
          tag: '🏷 #HoiGia', tagNote: 'báo học phí xong khách im 2 ngày',
          nhac: 'Bác sĩ Tuấn ơi, gói hiện tại còn <b>vài suất</b> kèm <b>voucher trợ giá máy ép máng</b> ạ. Giai đoạn sau học phí sẽ tăng, em giữ suất cho bác sĩ nha?',
          dung: '🎯 Theo thẻ #HoiGia: bám đuổi theo giá, đúng lý do khách im',
          khach: 'Ok giữ giúp a',
        },
      },

      binhLuan: {
        post: '<b>Đừng chỉ duyệt plan</b>, hãy tự thiết kế điều trị clear aligner: 14 chương, 9 ca STL thực hành, học thử miễn phí 🦷',
        img: L(IMG['scan-3d']),
        kav: 'HY', kten: 'Đỗ Hải Yến', hoi: 'Phòng khám em chưa có máy scan trong miệng thì học khóa này được không ạ?',
        traLoi: 'Dạ chào bác sĩ Yến! Học viện vừa nhắn tin tư vấn chi tiết cho bác sĩ, bác sĩ xem tin nhắn nhé 💬',
        act2: 'Nhắn tin riêng mời học thử miễn phí',
        nhan: 'Chào bác sĩ Yến! Chưa có máy scan vẫn học được ạ, khóa có <b>thư viện STL</b> để luyện. Bác sĩ <b>học thử 3 bài miễn phí</b> trước nha, bác sĩ cho em xin SĐT Zalo để gửi link ạ!',
        sp: { ten: 'Học thử 3 bài', gia: 'Miễn phí', img: L(IMG['mau-ham']) },
        khach: 'Zalo của chị 0978 135 246 nhé',
      },

      duLieu: {
        shopA: 'Học viện A',
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: chắc chắn làm được ca khó, hoàn tiền', 'Bác sĩ khiếu nại, học viện mất uy tín'],
        dung: ['Chỉ trả lời theo dữ liệu học viện cung cấp', 'Không chắc chắn → xin khách chờ, AI tạm dừng', 'Báo ngay tư vấn viên thật vào trả lời'],
        hoi: 'Học xong 1 tháng là tự làm được ca Hạng III đúng không em?',
        aiSai: 'Dạ đúng ạ! Học 1 tháng <b>chắc chắn làm được ca Hạng III</b>, không được <b>hoàn 100% học phí</b> luôn bác sĩ 🥰',
        thucTe: '⚠ Thực tế: học viện không cam kết kết quả điều trị, chương trình không hoàn tiền',
        gian: 'Ca Hạng III đầu tiên tôi làm không đạt! Sao bảo chắc chắn, hoàn học phí đâu? 😠',
        cho: 'Dạ bác sĩ chờ em một chút để em kiểm tra chính xác thông tin cho mình nhé!',
        nv: 'Tư vấn viên Thảo · người thật',
        nvTraLoi: 'Dạ học viện không cam kết kết quả điều trị ạ. Bác sĩ nộp ca đầu tiên trong 90 ngày, giảng viên sẽ review, giải thích và hướng dẫn sửa lại plan cho bác sĩ nhé!',
      },

      tags: {
        rows: [
          { ten: 'Trần Anh Tuấn', av: 'AT', kenh: 'fb', msg: 'Toàn duyệt plan lab gửi em ạ', gio: '21:41',
            tags: [['FB Ads · 3D Planning Aligner', 'ng'], ['#3DPlanning', 'qt'], ['Đã học thử', 'ht'], ['Gọi lần 1 ✓', 'sa']] },
          { ten: 'Nguyễn Khánh Linh', av: 'KL', kenh: 'fb', msg: 'Em chưa làm ca aligner nào', gio: '10:12',
            tags: [['FB Ads · Bác sĩ mới', 'ng'], ['#FirstPlan', 'qt'], ['Đã hẹn Q&A', 'ht'], ['Đã kết nối Zalo', 'za']] },
          { ten: 'Đỗ Hải Yến', av: 'HY', kenh: 'fb', msg: 'Chưa có máy scan học được không?', gio: '14:36',
            tags: [['Bình luận bài viết', 'ng'], ['#ThuVienSTL', 'qt'], ['Đã cho SĐT', 'ht'], ['Gọi lần 2 · không bắt máy', 'sa']] },
          { ten: 'Lê Quốc Bảo', av: 'QB', kenh: 'tiktok', msg: 'Ca Hạng II khóa có dạy không?', gio: '09:05',
            tags: [['TikTok · Video phân tích ca', 'ng'], ['#HangII', 'qt'], ['Đang nuôi · Soft follow-up', 'ht']] },
          { ten: 'Phạm Thu Trang', av: 'TT', kenh: 'zalo', msg: 'Đăng ký thêm cho bác sĩ phòng khám em', gio: 'Hôm qua',
            tags: [['Zalo · Học viên cũ giới thiệu', 'ng'], ['#3DPlanning', 'qt'], ['Đã đăng ký', 'ht'], ['Gọi lần 2 · đã chốt ✓', 'sa']] },
        ],
        chanDung: {
          ten: 'Trần Anh Tuấn', av: 'AT', kenh: 'fb', sub: 'Facebook Messenger · 0905 318 427',
          nhom: [
            ['Nguồn khách', [['Facebook Ads', 'ng'], ['Bài: Đừng chỉ duyệt plan', 'ng']]],
            ['Quan tâm', [['#3DPlanning', 'qt'], ['#HoKe', 'qt'], ['#HocToi', 'qt']]],
            ['Hành trình', [['Cho SĐT 18/11', 'ht'], ['Học thử 3 bài', 'ht'], ['Giữ suất 20/11', 'ht']]],
            ['Sale gọi', [['Lần 1 · đã xác nhận ✓', 'sa']]],
            ['Kết nối', [['Đã kết nối Zalo', 'za'], ['Khách mới · L1', 'lv']]],
          ],
          ghiChu: 'Bác sĩ RHM ở Đà Nẵng, đã làm 7 ca aligner qua lab, 2 ca cuối hở kẽ. Chưa có máy scan, chỉ học buổi tối. Cần hóa đơn VAT cho phòng khám.',
        },
      },

      chotLai: [
        ['KHÁCH HÀNG', ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến']],
        ['AI CHATBOT', ['Phản hồi nhanh tức thì', 'Hỏi chuyên môn, số ca đã làm', 'Không hứa bừa kết quả điều trị', 'Lấy SĐT Zalo, mời học thử miễn phí']],
        ['BÁM ĐUỔI', ['Gửi 5 tin nhắn trong 7 ngày: đúng ca bác sĩ vướng, bài học thử', 'Nuôi khách để học viện nằm đầu danh sách']],
        ['HỌC THỬ & CHỐT', ['Học thử 3 bài, Q&A với giảng viên', 'Tư vấn gói học, tư vấn viên chốt đăng ký']],
        ['MUA LẠI', ['Mời bác sĩ học khóa nâng cao, giới thiệu đồng nghiệp qua FB và Zalo']],
      ],
    },
  };
})();
