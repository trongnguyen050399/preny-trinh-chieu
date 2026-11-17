/* Kịch bản: KHÓA HỌC IELTS & GIAO TIẾP (trung tâm tiếng Anh cho người đi làm, sinh viên)
   — BẢN TRÌNH CHIẾU, nhóm CÂN NHẮC NHIỀU. Làm 17/11/2026 theo pipeline người dùng dặn:
   chạy quảng cáo phễu → chat với khách → mời làm bài test đầu vào → chốt sale.
   "AI chốt đơn = lấy SĐT + hẹn bài test": AI hỏi mục tiêu (band IELTS, hạn thi hoặc giao tiếp để đi làm) và trình độ,
   mời test đầu vào MIỄN PHÍ (online khoảng 20 phút, hoặc tại trung tâm), xin SĐT, lưu khách; có điểm test thì tư vấn lộ trình,
   học phí, ưu đãi, giữ chỗ rồi chuyển tư vấn viên chốt đăng ký, đóng học phí.
   Demo chat dọc 2 khách: (1) anh Minh cần IELTS 6.5 nộp hồ sơ thạc sĩ trước 5/2027, chưa thi bao giờ, so chỗ "cam kết đầu ra
   3 tháng" → AI không hứa điểm khi chưa biết trình độ → test online → khách báo điểm 5.0 → lộ trình 2 khóa, ưu đãi → giữ chỗ.
   (2) chị Hà 32 tuổi cần giao tiếp để họp với sếp nước ngoài → test tại trung tâm sáng thứ Bảy 21/11 → sau buổi test AI hỏi
   thăm, khách kể kết quả A2 → khóa Giao tiếp công sở, ưu đãi → giữ chỗ.
   Không có tin nhắc lịch trước buổi test hay trước ngày khai giảng (Preny chưa có tính năng này).
   Tin sau buổi test ở tương lai ghi "— Ngày 21/11 · … —" để demo dọc không ghi ngày trước cả buổi test.
   Tên trung tâm, địa chỉ, học phí, ưu đãi, điểm test, tên khách, SĐT: dữ liệu minh họa, tự đặt.
   Ảnh: Unsplash (ảnh thật, không phải trung tâm của khách). */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'lop-hoc': '1758270704262-ecc82b23dc37',        // lớp học người lớn, giáo viên đứng lớp
    'lop-giao-tiep': '1758270704763-22072a90d3b6',  // học viên nói chuyện với nhau trong lớp
    'giao-vien': '1758270705031-ebd46917a454',      // giáo viên giảng bài
    'test-online': '1758612214848-04e700d192ce',    // học viên đeo tai nghe làm bài trên laptop
    'bai-test': '1606326608606-aa0b62935f2b',       // phiếu trả lời trắc nghiệm
    'bai-viet': '1688488496687-73e4e98dfc6b',       // bài viết tay tiếng Anh
    'thuyet-trinh': '1758691736545-5c33b6255dca',   // thuyết trình trong phòng họp
    'hop': '1758518730037-a16581a040e8',            // họp nhóm ở công ty
    'kem-1-1': '1664382953647-5c6c76dd63b9',        // giáo viên kèm 1-1
    'hoc-online': '1612831455359-970e23a1e4e9',     // học qua video call
    'tot-nghiep': '1743327544772-52ca61ce0c27',     // sinh viên tốt nghiệp
    'hoc-vien': '1544168190-79c17527004f',          // học viên nam
    'tu-hoc': '1514355315815-2b64b0216b14',         // học viên nữ tự học
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    badge: 'AI CHATBOT · TIẾNG ANH',
    shop: { name: 'Anh Ngữ Hải Âu', initials: 'HA' },
    headline: { pre: 'AI chatbot tư vấn khóa học và', em: 'mời làm bài test' },
    sub: 'Hỏi đúng mục tiêu và trình độ, không hứa điểm bừa: mời test đầu vào miễn phí, xin SĐT, tư vấn lộ trình rồi chốt giữ chỗ.',
    cta: 'Dùng thử miễn phí tại **preny.ai**\nHotline **0389 647 778**',
    speed: 1.13,
    timing: { read0: 1000, readPerChar: 28, readMax: 4500, type0: 800, typePerChar: 3, typeMax: 1500, fastType: 500,
              featureHold: 1400, sepHold: 1100, cardHold: 4000, introCard: 250 },

    images: Object.fromEntries(Object.entries(IMG).map(([k, id]) => [k, U(id)])),

    // Cột trái demo ngang (dùng khi xuất video khung ngang)
    features: [
      { title: 'AI hỏi đúng mục tiêu và trình độ', desc: 'Hiểu cả tin dài, viết tắt, hỏi dồn.',
        kws: ['Band cần đạt, hạn thi hay giao tiếp đi làm', 'Đã thi chưa, kỹ năng nào yếu', 'Không hứa điểm khi chưa biết trình độ'] },
      { title: 'AI mời test đầu vào miễn phí, xin SĐT', desc: 'Lưu khách, gắn thẻ tự động.',
        kws: ['Test online 20 phút hoặc tại trung tâm', 'Cho khách lý do để cho số: gửi link test', 'Lưu khách, gắn thẻ #IELTS, #GiaoTiep'] },
      { title: 'Có điểm test: tư vấn lộ trình, chốt giữ chỗ', desc: 'Chuyển tư vấn viên chốt đăng ký.',
        kws: ['Lộ trình theo đúng điểm test', 'Học phí, ưu đãi trong tuần', 'Giữ chỗ lớp, chuyển tư vấn viên'] },
    ],

    steps: [
      { intro: true, hold: 1800 },

      /* ===== KHÁCH 1 · IELTS: mục tiêu + hạn thi → trình độ → test online → có điểm → lộ trình, học phí → giữ chỗ ===== */
      { feature: 1 },
      { sep: 'Tình huống 1 · Khách bấm Gửi tin nhắn từ quảng cáo Facebook', style: 'time', hold: 800 },
      { kh: 'e ơi a cần ielts 6.5 để nộp hồ sơ thạc sĩ, hạn tháng 5 năm sau. giờ a mất gốc thì kịp k e? học phí bn' },
      { ai: 'Dạ chào anh! Mục tiêu **IELTS 6.5 trước tháng 5/2027** là còn khoảng 6 tháng, bên em có lộ trình cho người đi làm ạ 📚', fast: true, meta: '⚡ Preny AI trả lời sau 2 giây', kw: 0 },
      { ai: 'Để tư vấn đúng, anh cho em hỏi: anh **đã từng thi IELTS** chưa, và anh thấy **kỹ năng nào yếu nhất** (Nghe, Nói, Đọc, Viết) ạ?', kw: 1 },
      { kh: 'chưa thi bao giờ. đọc thì tạm, nói với viết yếu lắm. a đi làm cả ngày chỉ học tối đc' },
      { ai: 'Dạ em hiểu ạ. Lộ trình và học phí phụ thuộc **trình độ đầu vào**, nên em chưa báo con số chung chung được. Anh làm **bài test đầu vào miễn phí** nha: online khoảng **20 phút**, có điểm 4 kỹ năng ngay, hoặc test tại trung tâm có giáo viên hỏi Nói trực tiếp ạ.', kw: 2 },
      { kh: 'test online đi. mà học tối thì bao lâu lên 6.5 e? chỗ a hỏi cam kết đầu ra 3 tháng' },
      { ai: 'Dạ thời gian lên 6.5 **tùy điểm test** của anh, em không hứa trước khi chưa biết trình độ ạ. Chỗ cam kết đầu ra, anh nên hỏi kỹ **cam kết từ điểm đầu vào nào, học lại có mất phí không** nha. Bên em có **lớp tối 19h30 thứ 2-4-6** cho người đi làm ạ.', kw: 2 },

      { feature: 2 },
      { ai: 'Anh cho em xin **tên và SĐT** để em lưu kết quả test và gửi lộ trình cho anh nha. Test miễn phí, chưa cần đóng phí gì ạ 😊', kw: 0 },
      { kh: 'Minh - 0912 486 753', kw: 1 },
      { card: {
          tag: '✓ Bài test đầu vào miễn phí · anh Minh',
          lines: ['Thời gian: khoảng **20 phút**, làm lúc nào cũng được', 'Gồm: Nghe, Đọc, Viết, Nói (ghi âm)', 'Làm xong: có điểm từng kỹ năng ngay', '👉 **Bấm để bắt đầu bài test**'],
        }, meta: '✓ Đã lưu khách, gắn thẻ #IELTS #TestDauVao', kw: 2, hold: 4200 },

      { feature: 3 },
      { sep: '— 40 phút sau · anh Minh làm xong bài test —' },
      { kh: 'a làm xong rồi e. Listening 5.5, Reading 6.0, Writing 4.5, Speaking 4.5, tổng 5.0' },
      { ai: 'Dạ anh **5.0** là nền khá ổn rồi ạ 👏 Nghe, Đọc của anh tốt, cần kéo **Viết và Nói** từ 4.5 lên. Lộ trình gợi ý cho anh: **khóa 5.0 lên 6.0** (3 tháng) rồi **khóa 6.0 lên 6.5+** (3 tháng), học tối 2-4-6, vừa kịp hạn tháng 5 ạ.', kw: 0 },
      { ai: 'Học phí trọn lộ trình **15.800.000đ**, đăng ký trong tuần này **giảm 2.000.000đ** còn **13.800.000đ**, tặng **2 buổi chữa Writing 1 kèm 1** ạ. Lớp tối khai giảng **thứ Hai 23/11** còn 4 chỗ, anh muốn em giữ chỗ không ạ?', kw: 1 },
      { kh: 'ok giữ chỗ cho a lớp 23/11 nhé' },
      { ai: 'Dạ em đã giữ chỗ lớp tối khai giảng 23/11 cho anh Minh ạ. Tư vấn viên sẽ gọi anh trong **15 phút** để gửi lịch học và hướng dẫn đóng học phí nha 📚', meta: '✓ Đã chuyển tư vấn viên chốt đăng ký', kw: 2, hold: 1500 },

      /* ===== KHÁCH 2 · GIAO TIẾP: mục tiêu đi làm → trình độ → test tại trung tâm → sau buổi test → khóa, ưu đãi → giữ chỗ ===== */
      { screen: 'chat', hold: 600 },
      { feature: 1 },
      { sep: 'Tình huống 2 · Khách học giao tiếp để đi làm', style: 'time', hold: 900 },
      { kh: 'chị muốn học giao tiếp để đi làm, công ty mới có sếp nước ngoài, họp toàn tiếng anh. chị 32 tuổi rồi học có muộn k em' },
      { ai: 'Dạ không muộn đâu chị ạ! Lớp giao tiếp bên em phần lớn là **người đi làm 25–40 tuổi** 😊', fast: true, meta: '⚡ Preny AI trả lời sau 2 giây', kw: 0 },
      { ai: 'Chị cho em hỏi thêm: chị dùng tiếng Anh **nhiều nhất ở đâu** (họp, email, thuyết trình), và chị đang **nghe hiểu nhưng chưa nói được**, hay nghe cũng chưa theo kịp ạ?', kw: 1 },
      { kh: 'chủ yếu họp với nói chuyện với sếp. nghe đc chút chút mà nói thì đơ, k phản xạ đc' },
      { feature: 2 },
      { ai: 'Dạ "nghe được mà không nói ra được" rất nhiều người đi làm gặp ạ. Để xếp đúng lớp, chị làm **bài test đầu vào miễn phí** nha: tại trung tâm giáo viên **nói chuyện trực tiếp** với chị khoảng 30 phút, hoặc test online 20 phút ạ.', kw: 0 },
      { kh: 'chị test ở trung tâm đi, sáng thứ 7 đc k em' },
      { ai: 'Dạ được ạ! Sáng **thứ Bảy 21/11** bên em còn khung **8h30**. Chị cho em xin **tên và SĐT** để em giữ lịch test nha, test miễn phí, chưa cần đăng ký gì ạ.', kw: 1 },
      { kh: 'Thu Hà, 0987 215 640' },
      { ai: 'Dạ em đã giữ lịch test **8h30 thứ Bảy 21/11** cho chị Hà ạ. Địa chỉ: **Anh Ngữ Hải Âu, 45 Trần Quốc Hoàn, Cầu Giấy**. Tư vấn viên sẽ gọi chị xác nhận nha 😊', meta: '✓ Đã lưu khách, gắn thẻ #GiaoTiep #TestTaiTrungTam', kw: 2 },

      { feature: 3 },
      { sep: '— Ngày 21/11 · sau buổi test tại trung tâm —' },
      { ai: 'Chị Hà ơi, buổi test sáng nay chị thấy thế nào ạ? Giáo viên nhận xét chị ra sao, chị kể em nghe để em tư vấn lớp hợp nhất nha 😊', meta: '💬 Tự động · Chăm sóc sau buổi test', kw: 0 },
      { kh: 'cô bảo chị trình độ A2, nghe ổn mà phát âm với phản xạ yếu. học sao cho nhanh em' },
      { ai: 'Dạ A2 thì hợp nhất là khóa **Giao tiếp công sở**: **3 tháng, 36 buổi**, lớp tối đa 10 người, buổi nào cũng luyện nói: đóng vai họp, báo cáo, nói chuyện với sếp. Có lớp **tối 2-4-6** hoặc **sáng thứ Bảy, Chủ nhật** ạ.', kw: 0 },
      { ai: 'Học phí khóa **6.900.000đ**, đăng ký trong tuần này tặng **4 buổi luyện nói 1 kèm 1** với giáo viên nước ngoài ạ. Lớp tối khai giảng **thứ Hai 30/11** còn 3 chỗ, chị muốn em giữ chỗ không ạ?', kw: 1 },
      { kh: 'ok em giữ chỗ lớp tối cho chị nhé' },
      { ai: 'Dạ em đã giữ chỗ lớp Giao tiếp công sở tối 2-4-6, khai giảng 30/11 cho chị Hà ạ. Tư vấn viên sẽ gọi chị để hướng dẫn đóng học phí và gửi lịch học nha 🎉', meta: '✓ Đã chuyển tư vấn viên chốt đăng ký', kw: 2, hold: 1500 },
      // Không có { end: true }: bấm → thêm một lần là sang thẳng slide kế.
    ],

    /* ===== Nội dung slide trình chiếu (trinh-chieu.html). Slide thống kê dùng số minh họa (deck.dashboard). ===== */
    deck: {
      /* Demo chat dọc (demo-doc.js): bài đăng → bình luận → quảng cáo phễu (bấm Gửi tin nhắn) → Messenger 2 khách
         → màn hình Meta CAPI Lead → màn kết. Khách thứ hai mở bằng sep 'time' thứ hai. */
      demoDoc: {
        khach: ['Minh Trần', 'Thu Hà'],
        sanPham: 'Test đầu vào miễn phí',
        ngay: '17/11/2026',
        gio: '20:30',
        binhLuan: [
          { ten: 'Phạm Ngọc Lan', noiDung: 'Mất gốc học được không ạ?', traLoi: 'Dạ được ạ, trung tâm vừa nhắn tin tư vấn cho chị, chị xem inbox nha!' },
        ],
        post: {
          tieuDe: 'IELTS & GIAO TIẾP CHO NGƯỜI ĐI LÀM 📚',
          dong: ['Test đầu vào miễn phí 20 phút', 'Lớp tối cho người đi làm', 'Lộ trình theo điểm test', 'Tối đa 10 học viên mỗi lớp'],
          anh: ['lop-hoc', 'lop-giao-tiep', 'test-online', 'giao-vien'],
        },
        quangCao: {
          tieuDe: 'LỘ TRÌNH IELTS 6.5 & GIAO TIẾP CHO NGƯỜI ĐI LÀM',
          mo: 'Làm bài test miễn phí 20 phút, biết ngay trình độ và lộ trình hợp với mình.',
          anh: 'lop-hoc', nhan: 'MESSENGER', dong: 'Test đầu vào miễn phí · Lớp tối', nut: 'Gửi tin nhắn',
        },
        capi: {
          nhan: '⏩ Hệ thống · Ghi nhận khách hàng tiềm năng',
          event: 'Lead',
          dong: [['Event', 'Lead'], ['Event ID', 'IELTS-TEST-LEAD-001'], ['Nguồn', 'Facebook Ads → Messenger'], ['SĐT', 'Đã thu thập trong Preny'], ['Trạng thái', 'Đã làm test, giữ chỗ lớp'], ['Chống trùng', 'Event ID']],
          chu: 'Chỉ gửi dữ liệu khi được phép, có cấu hình và quyền sử dụng dữ liệu phù hợp. Hiển thị là mô phỏng (demo).',
          khong: 'Không gửi Purchase khi học viên chưa đóng học phí.',
        },
        ket: {
          tieuDe: 'PRENY AI – TỰ ĐỘNG HÓA TUYỂN SINH TIẾNG ANH',
          y: ['Tự động trả lời bình luận', 'Tiếp nhận khách từ quảng cáo phễu', 'Hỏi mục tiêu, trình độ, hạn thi', 'Mời làm bài test miễn phí', 'Xin SĐT, lưu khách, gắn thẻ', 'Chăm sóc sau buổi test', 'Tư vấn lộ trình, chốt giữ chỗ', 'Meta CAPI Lead'],
        },
      },
      /* Pipeline mới (TRINH-CHIEU.md mục 1): dashboard, chatbot (lead = AI chốt là lấy SĐT + hẹn bài test), afterSale. */
      dashboard: [
        { ten: 'Luyện thi <span class="grad">IELTS</span>', den: '21/07/2026', khach: 12, tyLe: 0.56 },
        { ten: 'Tiếng Anh <span class="grad">giao tiếp</span>', den: '18/08/2026', khach: 10, tyLe: 0.53 },
        { ten: 'Tiếng Anh <span class="grad">cho người đi làm</span>', den: '26/09/2026', khach: 8, tyLe: 0.57 },
      ],
      chatbot: {
        y: [
          ['Trả lời ngay tức thì, 24/7', 'Khách nhắn tối muộn, AI trả lời sau 2 giây'],
          ['Hỏi đúng mục tiêu, trình độ', 'Band cần đạt, hạn thi, kỹ năng yếu'],
          ['Chốt đơn = lấy SĐT + hẹn bài test', 'Mời test miễn phí, chuyển tư vấn viên'],
          ['Hiểu hình ảnh khách gửi', 'Khách gửi bài viết, AI hiểu đúng nhu cầu'],
        ],
        chat: [
          { ref: { img: L(IMG['lop-hoc']), ten: 'Lộ trình IELTS 6.5 · test đầu vào miễn phí' } },
          { kh: 'a cần ielts 6.5 trước tháng 5, mất gốc thì kịp k e? học phí bn' },
          {
            ai: 'Dạ lộ trình và học phí tùy **trình độ đầu vào** ạ. Anh đã thi IELTS chưa, kỹ năng nào yếu nhất ạ? Anh làm **bài test miễn phí 20 phút** để em gửi lộ trình đúng nha 📚',
            meta: '⚡ Preny AI trả lời sau 2 giây',
          },
          { kh: 'chưa thi bao giờ, nói với viết yếu. tối nay a làm test luôn' },
          {
            ai: 'Dạ anh cho em xin **tên và SĐT** để em lưu kết quả test và gửi lộ trình cho anh nha, test miễn phí, chưa cần đóng phí gì ạ 😊',
          },
          { kh: 'Minh - 0912 486 753' },
          { ai: 'Dạ em gửi link test và chuyển tư vấn viên theo sát anh ngay ạ ⚡' },
          { don: true },
          { ok: true },
        ],
        lead: {
          ten: 'Anh Minh',
          sdt: '0912 486 753',
          nhuCau: 'Cần **IELTS 6.5** nộp hồ sơ thạc sĩ trước 5/2027 · chưa thi, yếu Nói, Viết · chỉ học tối',
          the: [['FB Ads · Lộ trình IELTS 6.5', 'ng'], ['#IELTS', 'qt'], ['#TestDauVao', 'qt'], ['Đã cho SĐT', 'ht']],
          lichNhan: 'Bài test đầu vào',
          lich: ['Test online miễn phí', '21:00 · Thứ Ba 17/11'],
          sale: 'Tư vấn viên Hằng',
          nut: 'Chuyển cho tư vấn viên',
          xong: 'Đã chuyển cho tư vấn viên Hằng',
          okTieuDe: 'Đã hẹn test 17/11',
        },
        anh: {
          img: L(IMG['bai-viet']),
          kh: 'Bài Writing của em viết như này thì được khoảng band mấy ạ?',
          ai: 'Dạ ảnh em gửi là **bài Writing viết tay** ạ. Band Writing chấm theo 4 tiêu chí nên em không chấm chính xác qua ảnh được. Em làm **bài test đầu vào miễn phí** nha, giáo viên chấm cả bài viết này và gửi **nhận xét chi tiết** cho em ạ.',
          pill: '🔍 AI nhìn ảnh, hiểu đúng khách đang cần gì',
        },
      },
      afterSale: {
        y1: 'AI gửi tiếp 5 khóa, dịch vụ để bán thêm',
        y2: 'Lớp mới khai giảng, ưu đãi học viên cũ, giới thiệu bạn',
        gio: 'Học viên vừa đóng học phí',
        don: { ma: '#HA21123', phi: 'đã đóng học phí', sp: [{ ten: 'Lộ trình IELTS 5.0 lên 6.5+ (2 khóa)', sl: 1, gia: 13800000 }] },
        loi: 'Cảm ơn anh Minh đã chọn Anh Ngữ Hải Âu 📚 Lịch học và tài liệu tư vấn viên đã gửi anh qua Zalo ạ. Bên em có thêm mấy khóa học viên IELTS hay học kèm:',
        sp: [
          { img: L(IMG['kem-1-1']), ten: 'Luyện Speaking 1 kèm 1 (8 buổi)', gia: 3200000, nut: 'Đăng ký' },
          { img: L(IMG['bai-test']), ten: 'Thi thử IELTS trên máy', gia: 350000, cu: 500000, nut: 'Đặt lịch' },
          { img: L(IMG['bai-viet']), ten: 'Chữa Writing chuyên sâu (10 bài)', gia: 1500000, nut: 'Đăng ký' },
          { img: L(IMG['thuyet-trinh']), ten: 'Giao tiếp công sở', gia: 6900000, nut: 'Tư vấn' },
          { img: L(IMG['hoc-online']), ten: 'Lớp tiếng Anh online buổi tối', gia: 4500000, nut: 'Tư vấn' },
        ],
        khach: 'Cho a đăng ký thêm 8 buổi Speaking 1 kèm 1 nhé',
        pill: '🛍 Học viên đăng ký thêm ngay: đơn tăng từ 13.800.000đ lên 17.000.000đ',
        fmm: {
          sep: '2 tháng sau · tin Facebook FMM',
          chao: 'Chào anh Minh 👋 Anh Ngữ Hải Âu vừa mở lớp mới, gửi anh xem trước nha!',
          img: L(IMG['giao-vien']),
          nhan: 'KHAI GIẢNG MỚI',
          ten: 'Lớp Writing Task 2 cấp tốc',
          mo: 'Học viên cũ giảm 15%, học thử 1 buổi miễn phí.',
          nut: 'Xem lớp',
        },
        zbs: {
          ten: 'Ưu đãi giới thiệu bạn cho anh Minh',
          mo: 'Cảm ơn anh đã học tại Anh Ngữ Hải Âu. Giới thiệu bạn bè cùng học, cả hai cùng nhận ưu đãi:',
          dong: [
            ['Mã ưu đãi', '**HAIAU-BANBE**'],
            ['Ưu đãi', 'Giảm 1.000.000đ cho cả 2 người'],
            ['Hạn dùng', '28/02/2027'],
          ],
          nut: 'Gửi cho bạn',
        },
      },
      tieuDe6: 'Hệ thống AI chatbot giúp tăng<br><span class="grad">tỷ lệ chốt học viên</span>',
      // Không lên đơn tự động (test, tư vấn lộ trình rồi tư vấn viên mới chốt đăng ký) → 5 tính năng
      tinhNang: [
        ['AI tư vấn, chủ động lấy lead', 'Hỏi mục tiêu, mời làm bài test miễn phí'],
        ['Soft follow-up nuôi học viên', 'Gửi lộ trình, lớp học, học viên thật'],
        ['AI chăm sóc học viên sau bán', 'Hỏi thăm sau test, mời khóa tiếp theo'],
        ['Bộ công cụ Remarketing FMM và ZBS', 'Khai thác lại dữ liệu học viên cũ'],
        ['Gửi sự kiện Lead qua Meta CAPI', 'Hỗ trợ tối ưu quảng cáo Facebook'],
      ],

      chotDon: {
        nganh: 'tiếng Anh',
        nguoi: 'Tư vấn viên',
        chotLa: 'AI chốt đơn = lấy SĐT + hẹn bài test',
        buoc: [
          { t: 'Chạy quảng cáo', d: 'Thu hút người cần IELTS, giao tiếp', icon: 'megaphone', own: 'Trung tâm chạy quảng cáo', mock: 'ad', img: L(IMG['lop-hoc']), text: 'Lộ trình IELTS 6.5 cho người đi làm, test đầu vào miễn phí 📚', btn: 'Gửi tin nhắn' },
          { t: 'Bắt đầu chat', d: 'Hỏi mục tiêu, hạn thi, trình độ', icon: 'chat', ai: true, mock: 'chat',
            msgs: [['kh', 'Cần IELTS 6.5 trước tháng 5 thì sao em?'], ['ai', 'Dạ anh đã thi chưa, kỹ năng nào yếu nhất ạ? 📚']] },
          { t: 'Mời test, lấy SĐT', d: 'Test miễn phí, online hoặc tại trung tâm', icon: 'phone', ai: true, chot: true, mock: 'form', fields: ['Anh Minh · IELTS 6.5, chỉ học tối', '0912 486 753'], ok: 'Đã hẹn test 17/11' },
          { t: 'Làm bài test', d: 'Có điểm 4 kỹ năng, nhận xét', icon: 'calendar', own: 'Giáo viên chấm', mock: 'lich', ten: 'Test đầu vào online', gio: '21:00 · Thứ Ba 17/11', ok: 'Đã có điểm: 5.0' },
          { t: 'Tư vấn lộ trình', d: 'Lộ trình theo điểm test, học phí, ưu đãi', icon: 'chat', ai: true, mock: 'img', img: L(IMG['kem-1-1']), cap: 'Lộ trình 5.0 lên 6.5+, học tối 2-4-6' },
          { t: 'Chốt đăng ký', d: 'Giữ chỗ lớp, đóng học phí', icon: 'check', mock: 'img', img: L(IMG['lop-giao-tiep']), cap: '✓ Học viên đăng ký lớp khai giảng 23/11' },
        ],
        vong: { t: 'Chăm sóc lại & Remarketing', d: 'Mời học viên cũ học khóa tiếp theo, giới thiệu bạn, gửi lớp mới khai giảng' },
      },

      bamDuoi: {
        nhan: 'Vì sao soft follow-up của Preny đặc biệt', shopB: 'Trung tâm B',
        cmpSai: ['Khách im → gửi “Anh còn quan tâm khóa học không ạ?”', 'Không biết khách cần IELTS hay giao tiếp, vì sao im', 'Khách thấy phiền, bỏ qua tin nhắn'],
        cmpDung: ['Khách nhắn xong im → nhắc đúng khóa khách hỏi (thẻ <b>#IELTS</b> từ quảng cáo)',
                  'Báo học phí xong im → bám đuổi theo giá: ưu đãi trong tuần, quà học kèm (thẻ <b>#HoiGia</b>)',
                  'Đúng nhu cầu, đúng lý do im → khách quay lại làm bài test'],
        hoi: 'Khóa IELTS học phí bao nhiêu em?',
        traLoiThuong: 'Dạ từ 6.900.000đ ạ.',
        nhacChung: 'Anh còn quan tâm khóa học không ạ? 😊',
        refImg: L(IMG['lop-hoc']), refTen: 'Lộ trình IELTS 6.5',
        vd1: {
          kh: 'Mất gốc thì học IELTS bao lâu được 6.5 em?',
          ai: 'Dạ tùy trình độ đầu vào ạ. Anh làm bài test miễn phí 20 phút để em gửi lộ trình đúng nha?',
          tag: '🏷 #IELTS', tagNote: 'thẻ từ quảng cáo · khách im 1 ngày',
          nhac: 'Anh ơi, em gửi anh <b>lộ trình của một học viên đi làm</b> từ 4.5 lên 6.5, học tối 2-4-6 ạ 📚 Bài test chỉ 20 phút, anh làm tối nay hay mai ạ?',
          dung: '🎯 Theo thẻ #IELTS: nhắc đúng khóa khách hỏi',
          khach: 'Tối nay a làm nhé',
        },
        vd2: {
          kh: 'Khóa IELTS học phí bao nhiêu em?',
          ai: 'Dạ lộ trình 2 khóa <b>15.800.000đ</b>, có điểm test em tư vấn khóa hợp với anh ạ.',
          tag: '🏷 #HoiGia', tagNote: 'báo học phí xong khách im 2 ngày',
          nhac: 'Anh Minh ơi, tuần này bên em <b>giảm 2.000.000đ</b> cho lộ trình IELTS, tặng thêm <b>2 buổi chữa Writing 1 kèm 1</b> ạ. Em giữ ưu đãi cho anh nha?',
          dung: '🎯 Theo thẻ #HoiGia: bám đuổi theo giá, đúng lý do khách im',
          khach: 'Ok giữ giúp a',
        },
      },

      binhLuan: {
        post: '<b>Test đầu vào miễn phí 20 phút</b>, biết ngay trình độ và lộ trình IELTS, giao tiếp hợp với mình 📚',
        img: L(IMG['lop-hoc']),
        kav: 'NL', kten: 'Phạm Ngọc Lan', hoi: 'Mình mất gốc tiếng Anh lâu rồi, 28 tuổi học giao tiếp có kịp không ạ?',
        traLoi: 'Dạ chào chị Lan! Trung tâm vừa nhắn tin tư vấn chi tiết cho chị, chị xem tin nhắn nhé 💬',
        act2: 'Nhắn tin riêng mời test miễn phí',
        nhan: 'Chào chị Lan! Mất gốc vẫn học được ạ, lớp giao tiếp bên em nhiều anh chị đi làm. Chị làm <b>bài test đầu vào miễn phí</b> để em xếp đúng lớp nha, chị cho em xin SĐT để gửi link test ạ!',
        sp: { ten: 'Bài test đầu vào', gia: 'Miễn phí', img: L(IMG['test-online']) },
        khach: 'Số chị 0868 527 194 nhé',
      },

      duLieu: {
        shopA: 'Trung tâm A',
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: chắc chắn đạt điểm, hoàn học phí', 'Học viên khiếu nại, trung tâm mất uy tín'],
        dung: ['Chỉ trả lời theo dữ liệu trung tâm cung cấp', 'Không chắc chắn → xin khách chờ, AI tạm dừng', 'Báo ngay tư vấn viên thật vào trả lời'],
        hoi: 'Học 3 tháng chắc chắn lên 7.0 đúng không em?',
        aiSai: 'Dạ đúng ạ! Học 3 tháng <b>chắc chắn 7.0</b>, không đạt <b>hoàn 100% học phí</b> luôn anh 🥰',
        thucTe: '⚠ Thực tế: thời gian lên band tùy điểm đầu vào, trung tâm không có chính sách hoàn 100%',
        gian: 'Học xong mới 6.0! Sao bảo chắc chắn 7.0, hoàn học phí đâu? 😠',
        cho: 'Dạ anh chờ em một chút để em kiểm tra chính xác thông tin cho mình nhé!',
        nv: 'Tư vấn viên Hằng · người thật',
        nvTraLoi: 'Dạ thời gian lên band tùy điểm test đầu vào và thời gian tự học ạ. Anh làm test miễn phí, giáo viên gửi lộ trình và cam kết cụ thể bằng văn bản trước khi học nhé!',
      },

      tags: {
        rows: [
          { ten: 'Trần Quang Minh', av: 'QM', kenh: 'fb', msg: 'Cần IELTS 6.5 trước tháng 5', gio: '20:31',
            tags: [['FB Ads · Lộ trình IELTS 6.5', 'ng'], ['#IELTS', 'qt'], ['Đã làm test · 5.0', 'ht'], ['Gọi lần 1 ✓', 'sa']] },
          { ten: 'Nguyễn Thu Hà', av: 'TH', kenh: 'fb', msg: 'Họp với sếp nói bị đơ em ạ', gio: '10:07',
            tags: [['FB Ads · Giao tiếp đi làm', 'ng'], ['#GiaoTiep', 'qt'], ['Đã hẹn test', 'ht'], ['Đã kết nối Zalo', 'za']] },
          { ten: 'Phạm Ngọc Lan', av: 'NL', kenh: 'fb', msg: 'Mất gốc học được không ạ?', gio: '15:42',
            tags: [['Bình luận bài viết', 'ng'], ['#MatGoc', 'qt'], ['Đã cho SĐT', 'ht'], ['Gọi lần 2 · không bắt máy', 'sa']] },
          { ten: 'Lê Hoàng Nam', av: 'HN', kenh: 'tiktok', msg: 'Học IELTS online được không?', gio: '09:18',
            tags: [['TikTok · Video lớp học', 'ng'], ['#HocOnline', 'qt'], ['Đang nuôi · Soft follow-up', 'ht']] },
          { ten: 'Vũ Bảo Châu', av: 'BC', kenh: 'zalo', msg: 'Đăng ký thêm cho em gái nhé', gio: 'Hôm qua',
            tags: [['Zalo · Học viên cũ giới thiệu', 'ng'], ['#IELTS', 'qt'], ['Đã đăng ký', 'ht'], ['Gọi lần 2 · đã chốt ✓', 'sa']] },
        ],
        chanDung: {
          ten: 'Trần Quang Minh', av: 'QM', kenh: 'fb', sub: 'Facebook Messenger · 0912 486 753',
          nhom: [
            ['Nguồn khách', [['Facebook Ads', 'ng'], ['Bài: Lộ trình IELTS 6.5', 'ng']]],
            ['Quan tâm', [['#IELTS', 'qt'], ['#TestDauVao', 'qt'], ['#HocToi', 'qt']]],
            ['Hành trình', [['Cho SĐT 17/11', 'ht'], ['Test online 5.0', 'ht'], ['Giữ chỗ lớp 23/11', 'ht']]],
            ['Sale gọi', [['Lần 1 · đã xác nhận ✓', 'sa']]],
            ['Kết nối', [['Đã kết nối Zalo', 'za'], ['Khách mới · L1', 'lv']]],
          ],
          ghiChu: 'Cần IELTS 6.5 nộp hồ sơ thạc sĩ trước 5/2027. Test 5.0: Nghe, Đọc ổn, Viết và Nói 4.5. Chỉ học được buổi tối.',
        },
      },

      chotLai: [
        ['KHÁCH HÀNG', ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến']],
        ['AI CHATBOT', ['Phản hồi nhanh tức thì', 'Hỏi mục tiêu, hạn thi, trình độ', 'Không hứa bừa điểm đầu ra', 'Lấy SĐT, mời làm bài test miễn phí']],
        ['SOFT FOLLOW‑UP', ['Gửi lộ trình, lớp học, học viên thật', 'Nuôi khách để trung tâm nằm đầu danh sách']],
        ['TEST & CHỐT', ['Test đầu vào online hoặc tại trung tâm', 'Tư vấn lộ trình, tư vấn viên chốt đăng ký']],
        ['MUA LẠI', ['Mời học viên cũ học khóa tiếp, giới thiệu bạn qua FB và Zalo']],
      ],
    },
  };
})();
