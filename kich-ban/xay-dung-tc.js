/* Kịch bản: THI CÔNG XÂY DỰNG (xây nhà phố trọn gói, phần thô; khách là chủ đất muốn xây nhà ở) — BẢN TRÌNH CHIẾU,
   nhóm CÂN NHẮC NHIỀU. Làm 19/11/2026 theo người dùng: "dịch vụ thi công xây dựng (cân nhắc nhiều, lọc khách lấy thông tin
   số điện thoại cho sale)".
   "AI chốt đơn = lọc khách, lấy SĐT": AI báo đơn giá tham khảo, hỏi để lọc khách (diện tích đất, số tầng, ngân sách, thời gian
   khởi công, đã có sổ / bản vẽ / giấy phép chưa), phân loại khách (khách nóng: có sổ, ngân sách rõ, khởi công trong vài tháng),
   rồi lấy tên + SĐT chuyển Anh Long · Sale dự án hẹn kỹ sư khảo sát đất miễn phí, gửi dự toán. Gửi sự kiện Lead lên Facebook.
   Demo chat 1 khách từ đầu tới cuối (khớp Bài 2 video ngang, demo/bai2/kich-ban-xay-dung-tc.js):
   chị Hạnh có lô đất 5×20m ở Thủ Dầu Một, Bình Dương, muốn xây nhà phố 3 tầng trọn gói, khởi công tháng 3/2027,
   ngân sách khoảng 1,8 tỷ, đã có sổ, chưa có bản vẽ.
   Ca khó: khách đòi báo tổng chi phí ngay → AI giải thích tổng diện tích xây dựng tính theo hệ số móng, mái, sân
   (5×20m, 3 tầng thường 280–320m²), trọn gói tham khảo khoảng 1,7–2 tỷ; chưa khảo sát thì không báo chốt;
   chưa có bản vẽ thì bên em thiết kế và hỗ trợ hồ sơ xin phép xây dựng (không hứa giấy phép chắc chắn được duyệt).
   Đơn giá tham khảo: phần thô 3.600.000đ/m², trọn gói 6.200.000đ/m². Dự toán sơ bộ sau khảo sát: khoảng 1,85 tỷ.
   Không có tin nhắc trước buổi khảo sát (Preny chưa có tính năng này).
   Tên công ty, giá, khách, SĐT, feedback, sale: dữ liệu minh họa. Ảnh: Unsplash (ảnh thật, không phải công trình của khách). */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'nha-pho': '1781264896316-f47aef24272d',      // nhà nhiều tầng màu be, có gara, cây xanh
    'nha-pho-2': '1778375744848-e7757f0254e6',    // dãy nhà phố hiện đại trắng đen
    'nha-toi': '1767948693674-e96ae5a755c9',      // nhà hiện đại lên đèn lúc chiều tối
    'ban-ve': '1503387762-592deb58ef4e',          // kiến trúc sư vẽ bản vẽ
    'ban-ve-2': '1762146828422-50a8bd416d3c',     // bản vẽ trải trên bàn
    'ky-su': '1772442198624-4fc4d7281e89',        // người xem bản vẽ tại công trường
    'cong-trinh': '1580063665421-4c9cbe9ec11b',   // nhà đang xây có giàn giáo
    'cong-truong': '1659427921734-d4590f1e099f',  // công trường, cần cẩu
    'thep-san': '1582540730843-f4418d96ccbe',     // thợ đội mũ vàng buộc thép sàn
    'tho-xay': '1712711649566-16c7cfcf341c',      // nhóm thợ trên công trình
    'mong': '1640101086894-7d70c3e70179',         // thợ làm móng, cốt thép
    'cot-thep': '1530863506128-dc9eb5c3e0fc',     // cột thép nhìn từ dưới lên
    'tu-tren-cao': '1685233503586-0cb11f46e99f',  // nhìn từ trên cao công trình đang xây
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    badge: 'AI CHATBOT · THI CÔNG XÂY DỰNG',
    shop: { name: 'Xây Dựng Phú Gia', initials: 'PG' },
    headline: { pre: 'AI chatbot lọc khách xây nhà và', em: 'lấy SĐT cho sale' },
    sub: 'Báo đơn giá, hỏi đúng đất, số tầng, ngân sách, thời gian khởi công; phân loại khách nóng rồi chuyển SĐT cho sale hẹn kỹ sư khảo sát.',
    cta: 'Dùng thử miễn phí tại **preny.ai**\nHotline **0389 647 778**',
    speed: 1.13,
    timing: { read0: 1000, readPerChar: 28, readMax: 4500, type0: 800, typePerChar: 3, typeMax: 1500, fastType: 500,
              featureHold: 1400, sepHold: 1100, cardHold: 4000, introCard: 250 },

    images: Object.fromEntries(Object.entries(IMG).map(([k, id]) => [k, U(id)])),

    // Cột trái demo ngang (dùng khi xuất video khung ngang)
    features: [
      { title: 'AI báo giá, lọc khách ngay', desc: 'Hiểu cả tin viết tắt, hỏi dồn nhiều ý.',
        kws: ['Báo đơn giá phần thô, trọn gói theo m²', 'Hỏi đất, số tầng, khởi công, sổ, ngân sách', 'Khách trả lời dồn, AI hiểu đủ ý'] },
      { title: 'AI xử lý ca khó: đòi báo tổng', desc: 'Trả lời đúng dữ liệu, không hứa bừa.',
        kws: ['Giải thích hệ số móng, mái, sân', 'Chưa khảo sát: chỉ báo khoảng, không báo chốt', 'Hỗ trợ thiết kế, hồ sơ xin phép xây dựng'] },
      { title: 'Bám đuổi đúng nhu cầu', desc: 'Khách im, AI vẫn giữ liên lạc.',
        kws: ['Gửi nhà phố 3 tầng đã bàn giao', 'Kỹ sư giám sát, nghiệm thu từng giai đoạn', 'Mời giữ suất khảo sát đất miễn phí'] },
      { title: 'Lấy SĐT, phân loại, chuyển sale', desc: 'Khách nóng chuyển ngay cho sale.',
        kws: ['Giữ lịch kỹ sư khảo sát thứ Bảy', 'Gắn thẻ Khách nóng: có sổ, khởi công 3/2027', 'Chuyển Anh Long · Sale dự án'] },
    ],

    steps: [
      { intro: true, hold: 1800 },

      /* ---- 1. Báo đơn giá, hỏi để lọc khách ---- */
      { feature: 1 },
      { sep: 'Khách bấm Gửi tin nhắn từ quảng cáo Facebook', style: 'time', hold: 800 },
      { kh: 'Xây nhà trọn gói giá bao nhiêu 1m2 vậy em?' },
      { ai: 'Dạ chào chị! Phú Gia báo đơn giá tham khảo: **phần thô 3.600.000đ/m²**, **trọn gói 6.200.000đ/m²** ạ 🏡', fast: true, meta: '⚡ Preny AI trả lời sau 2 giây', kw: 0 },
      { aiImg: 'nha-pho', hold: 1400 },
      { ai: 'Đất mình **rộng bao nhiêu**, định xây **mấy tầng** ạ? Chị dự định **khi nào khởi công**, đã có **sổ** chưa để em tư vấn sát hơn nha.', kw: 1 },
      { kh: 'đất c 5x20 ở Thủ Dầu Một, có sổ rồi, chưa có bản vẽ. xây 3 tầng, tháng 3 năm sau làm, tầm 1,8 tỷ. báo c tổng hết bn luôn đi e', kw: 2 },

      /* ---- 2. Ca khó: đòi báo tổng ngay → giải thích cách tính, chỉ báo khoảng tham khảo, xin SĐT ---- */
      { feature: 2 },
      { ai: 'Dạ 5×20m xây 3 tầng, **tổng diện tích xây dựng** thường **280–320m²** vì còn tính hệ số **móng, mái, sân** ạ. Trọn gói tham khảo **khoảng 1,7–2 tỷ**, sát ngân sách của chị.', kw: 0 },
      { ai: 'Chưa khảo sát thì em chỉ báo được khoảng tham khảo, **chưa báo chốt** được ạ. Chị chưa có bản vẽ thì bên em **thiết kế** và **hỗ trợ hồ sơ xin phép xây dựng** luôn nha.', kw: 1 },
      { ai: 'Chị cho em xin **tên và SĐT**, kỹ sư qua **khảo sát đất miễn phí** rồi gửi **dự toán** chi tiết cho chị nha 😊', kw: 2 },
      { kh: 'để c bàn với ông xã đã nha e' },

      /* ---- 3. Khách im → bám đuổi đúng nhu cầu: nhà phố 3 tầng, khảo sát miễn phí ---- */
      { feature: 3 },
      { sep: '— 1 ngày sau —' },
      { ai: 'Chị Hạnh ơi, em gửi chị vài **nhà phố 3 tầng** bên em đã bàn giao ở Bình Dương nha 🏡', kw: 0 },
      { aiImgs: [{ img: 'nha-pho-2', label: 'Nhà phố 3 tầng' }, { img: 'nha-toi', label: 'Đã bàn giao' },
                 { img: 'ky-su', label: 'Kỹ sư giám sát' }, { img: 'thep-san', label: 'Nghiệm thu thép sàn' }], kw: 1, hold: 3000 },
      { sep: '— 4 ngày sau —' },
      { ai: 'Thứ Bảy này kỹ sư bên em còn vài suất **khảo sát đất miễn phí** ở Thủ Dầu Một. Chị muốn em giữ một suất không ạ?', kw: 2 },
      { kh: 'thứ 7 c ở nhà, qua xem đất giúp c nha' },

      /* ---- 4. Lấy tên + SĐT, phân loại khách nóng, chuyển sale ---- */
      { feature: 4 },
      { ai: 'Dạ được ạ, **thứ Bảy 28/11** kỹ sư còn khung **8h** và **15h**. Chị cho em xin **tên và SĐT** để giữ lịch nha 🏡', kw: 0 },
      { kh: 'Hạnh, 0907 318 562, 8h nha e' },
      { card: {
          tag: '✓ Đã giữ lịch khảo sát đất · chị Hạnh', ok: true,
          lines: ['Thời gian: **8h00 thứ Bảy 28/11/2026**', 'Kỹ sư đo đất 5×20m, xem sổ, tư vấn mặt bằng 3 tầng', 'Gửi **dự toán sơ bộ** sau khảo sát, miễn phí'],
        }, meta: '✓ Đã lưu khách, gắn thẻ #NhaPho3Tang · Khách nóng', kw: 1, hold: 4200 },
      { ai: '**Anh Long** bên dự án sẽ gọi chị xác nhận lịch liền nha. Chị có ảnh sổ đất thì gửi trước để kỹ sư xem giúp ạ.', meta: '✓ Đã chuyển Anh Long · Sale dự án', kw: 2, hold: 1500 },
      // Không có { end: true }: bấm → thêm một lần là sang thẳng slide kế.
    ],

    /* ===== Nội dung slide trình chiếu (trinh-chieu.html). Slide thống kê dùng số minh họa (deck.dashboard). ===== */
    deck: {
      /* Demo chat dọc (demo-doc.js): bài đăng → 1 bình luận → quảng cáo (bấm Gửi tin nhắn) → Messenger với chị Mỹ Hạnh
         → màn Meta CAPI Lead → màn kết. */
      demoDoc: {
        khach: 'Mỹ Hạnh',
        sanPham: 'Xây nhà phố trọn gói',
        ngay: '18/11/2026',
        gio: '14:46',
        binhLuan: [
          { ten: 'Võ Thanh Tâm', noiDung: 'Đất 4x16 ở Dĩ An xây 2 tầng hết khoảng bao nhiêu vậy?', traLoi: 'Dạ Phú Gia vừa nhắn tin báo giá chi tiết cho anh, anh xem inbox nha!' },
        ],
        post: {
          tieuDe: 'XÂY NHÀ PHỐ TRỌN GÓI · BÌNH DƯƠNG 🏡',
          dong: ['Trọn gói từ 6.200.000đ/m²', 'Kỹ sư khảo sát đất miễn phí', 'Hỗ trợ thiết kế, hồ sơ xin phép', 'Bảo hành kết cấu 10 năm'],
          anh: ['nha-pho', 'nha-pho-2', 'cong-trinh', 'ky-su'],
        },
        quangCao: {
          tieuDe: 'XÂY NHÀ PHỐ TRỌN GÓI · KHẢO SÁT MIỄN PHÍ',
          mo: 'Phần thô từ 3.600.000đ/m², trọn gói từ 6.200.000đ/m². Kỹ sư khảo sát đất, gửi dự toán miễn phí.',
          anh: 'nha-pho', nhan: 'MESSENGER', dong: 'Báo giá ngay · khảo sát đất miễn phí', nut: 'Gửi tin nhắn',
        },
        capi: {
          nhan: '⏩ Hệ thống · Ghi nhận khách hàng tiềm năng',
          event: 'Lead',
          dong: [['Event', 'Lead'], ['Event ID', 'PG2311-LEAD'], ['Nguồn', 'Facebook Ads → Messenger'], ['SĐT', 'Đã thu thập trong Preny'], ['Trạng thái', 'Khách nóng · hẹn khảo sát 28/11'], ['Chống trùng', 'Event ID']],
          chu: 'Chỉ gửi dữ liệu khi được phép, có cấu hình và quyền sử dụng dữ liệu phù hợp. Hiển thị là mô phỏng (demo).',
          khong: 'Không gửi Purchase khi khách chưa ký hợp đồng.',
        },
        ket: {
          tieuDe: 'PRENY AI – LỌC KHÁCH XÂY NHÀ, LẤY SĐT CHO SALE',
          y: ['Báo đơn giá, giải thích cách tính', 'Lọc khách: đất, số tầng, ngân sách, khởi công', 'Không báo chốt khi chưa khảo sát', 'Bám đuổi đúng kiểu nhà khách hỏi',
              'Lấy SĐT, phân loại khách nóng', 'Chuyển sale, hẹn kỹ sư khảo sát', 'Meta CAPI Lead'],
        },
      },
      /* Pipeline mới (TRINH-CHIEU.md mục 1): dashboard, chatbot (lead = AI chốt là lọc khách, lấy SĐT), afterSale. */
      dashboard: [
        { ten: 'Xây nhà phố <span class="grad">trọn gói</span>', den: '21/07/2026', khach: 9, tyLe: 0.55 },
        { ten: 'Xây <span class="grad">phần thô</span>, nhân công', den: '18/08/2026', khach: 7, tyLe: 0.54 },
        { ten: 'Biệt thự, <span class="grad">nhà vườn</span>', den: '26/09/2026', khach: 5, tyLe: 0.56 },
      ],
      chatbot: {
        gio: 'Khách nhắn lúc 21:30 · ngoài giờ làm việc',
        y: [
          ['Trả lời ngay tức thì, 24/7', 'Khách nhắn lúc nào, AI trả lời sau 2 giây'],
          ['Báo giá, lọc khách như sale giỏi', 'Đất, số tầng, ngân sách, khởi công, sổ'],
          ['Chốt đơn = lấy SĐT, phân loại khách', 'Khách nóng chuyển ngay cho sale dự án'],
          ['Hiểu hình ảnh khách gửi', 'Khách gửi ảnh mẫu nhà, AI hiểu đúng ý'],
        ],
        chat: [
          { ref: { img: L(IMG['nha-pho']), ten: 'Xây nhà phố trọn gói' } },
          { kh: 'xây trọn gói bn 1m2 vậy e? đất c 5x20 ở Thủ Dầu Một, tính xây 3 tầng' },
          {
            ai: 'Dạ chào chị! Trọn gói **6.200.000đ/m²**, phần thô **3.600.000đ/m²** ạ. Chị định **khi nào khởi công**, đã có **sổ** chưa ạ? 🏡',
            meta: '⚡ Preny AI trả lời sau 2 giây',
          },
          { kh: 'tháng 3 năm sau, tầm 1,8 tỷ, có sổ rồi. tính tổng giúp c luôn đi' },
          {
            ai: 'Dạ 3 tầng thường tính **280–320m²** vì cộng **móng, mái, sân**, trọn gói tham khảo **1,7–2 tỷ** ạ, chưa khảo sát em chưa báo chốt được. Chị cho em xin **SĐT** để kỹ sư **khảo sát đất miễn phí** nha.',
          },
          { kh: 'Hạnh - 0907 318 562' },
          { ai: 'Dạ em chuyển thông tin cho anh Long bên dự án ngay ạ ⚡' },
          { don: true },
          { ok: true },
        ],
        lead: {
          ten: 'Chị Hạnh',
          sdt: '0907 318 562',
          nhuCau: 'Đất **5×20m** Thủ Dầu Một, đã có sổ · nhà phố **3 tầng trọn gói** · ngân sách **~1,8 tỷ** · khởi công **3/2027**',
          the: [['FB Ads · Xây nhà trọn gói', 'ng'], ['#NhaPho3Tang', 'qt'], ['Khách nóng', 'lv'], ['Đã cho SĐT', 'ht']],
          lichNhan: 'Hẹn gọi lại',
          lich: ['Sale gọi hẹn khảo sát', 'Trong 15 phút'],
          sale: 'Anh Long · Sale dự án',
          nut: 'Chuyển cho sale',
          xong: 'Đã chuyển cho anh Long',
          okTieuDe: 'Đã chuyển khách nóng cho sale',
        },
        anh: {
          img: L(IMG['nha-pho-2']),
          nhan: 'Khách gửi ảnh mẫu nhà, không ghi tên mẫu',
          kh: 'C thích kiểu nhà như này, đất 5x20 làm được không e?',
          ai: 'Dạ ảnh chị gửi là **nhà phố hiện đại tông trắng đen, ban công kính** ạ. Lô 5×20m làm kiểu này được, kỹ sư lên **mặt bằng 3 tầng** theo đúng lô đất rồi báo dự toán theo vật tư chị chọn nha.',
          pill: '🔍 AI nhìn ảnh, hiểu đúng kiểu nhà khách thích',
        },
      },
      afterSale: {
        y1: 'AI gửi tiếp 5 hạng mục đi kèm để bán thêm (upsell)',
        y2: 'Gói nội thất, ưu đãi khách cũ, giới thiệu bạn bè',
        gio: 'Sale vừa ký hợp đồng thi công',
        don: { ma: '#PG26118', phi: 'hợp đồng trọn gói', sp: [{ ten: 'Nhà phố 3 tầng trọn gói', sl: 1, dv: 'căn', gia: 1850000000 }] },
        loi: 'Cảm ơn chị Hạnh đã chọn Phú Gia 🏡 Nhà phố 3 tầng, các chủ nhà hay làm thêm mấy hạng mục này ạ:',
        sp: [
          { img: L(IMG['nha-pho']), ten: 'Cổng, hàng rào, sân trước', gia: 45000000, nut: 'Nhận báo giá' },
          { img: L(IMG['ban-ve']), ten: 'Thiết kế, thi công nội thất', gia: 280000000, nut: 'Nhận báo giá' },
          { img: L(IMG['tu-tren-cao']), ten: 'Chống thấm sân thượng', gia: 25000000, nut: 'Nhận báo giá' },
          { img: L(IMG['nha-toi']), ten: 'Đèn trang trí mặt tiền', gia: 18000000, nut: 'Nhận báo giá' },
          { img: L(IMG['nha-pho-2']), ten: 'Nâng cấp vật tư hoàn thiện', gia: 120000000, nut: 'Nhận báo giá' },
        ],
        khach: 'Báo c thêm phần cổng với sân trước luôn nha e',
        pill: '🏗 Khách lấy thêm ngay: +45.000.000đ cổng, sân trước',
        fmm: {
          sep: '1 tháng sau · tin Facebook FMM',
          chao: 'Chào chị Hạnh 👋 Phú Gia vừa ra gói nội thất cho nhà phố, gửi chị xem trước nha!',
          img: L(IMG['nha-toi']),
          nhan: 'GÓI MỚI',
          ten: 'Nội thất trọn gói nhà phố 3 tầng',
          mo: 'Khách đang xây giảm 8%, thiết kế 3D nội thất miễn phí.',
          nut: 'Xem gói',
        },
        zbs: {
          ten: 'Ưu đãi giới thiệu cho chị Hạnh',
          mo: 'Cảm ơn chị đã tin chọn Xây Dựng Phú Gia. Chị giới thiệu người quen xây nhà được nhận ưu đãi:',
          dong: [
            ['Mã giới thiệu', '**PHUGIA20**'],
            ['Ưu đãi', 'Tặng 20.000.000đ mỗi hợp đồng'],
            ['Hạn dùng', '30/06/2027'],
          ],
          nut: 'Gửi cho bạn bè',
        },
      },
      tieuDe6: 'Hệ thống AI chatbot giúp tăng<br><span class="grad">tỷ lệ chốt SĐT khách hàng</span>',
      // Không lên đơn tự động (ký hợp đồng thi công với sale) → 5 tính năng, giống nhà di động
      tinhNang: [
        ['AI tư vấn, lọc khách, lấy lead', 'Hỏi đất, số tầng, ngân sách, khởi công'],
        ['Bám đuổi khách cân nhắc lâu', 'Gửi nhà đã bàn giao, feedback chủ nhà'],
        ['AI chăm sóc khách sau bán', 'Gửi dự toán, mời xem công trình'],
        ['Bộ công cụ Remarketing FMM và ZBS', 'Khai thác lại dữ liệu khách cũ'],
        ['Gửi sự kiện Lead qua Meta CAPI', 'Hỗ trợ tối ưu quảng cáo Facebook'],
      ],

      chotDon: {
        nganh: 'thi công xây dựng',
        nguoi: 'Sale',
        chotLa: 'AI chốt đơn = lọc khách, lấy SĐT',
        buoc: [
          { t: 'Chạy quảng cáo', d: 'Thu hút chủ đất muốn xây nhà', icon: 'megaphone', own: 'Công ty chạy quảng cáo', mock: 'ad', img: L(IMG['nha-pho']), text: 'Xây nhà phố trọn gói, khảo sát đất miễn phí 🏡', btn: 'Gửi tin nhắn' },
          { t: 'Bắt đầu chat', d: 'Báo đơn giá, giải thích cách tính', icon: 'chat', ai: true, mock: 'chat',
            msgs: [['kh', 'Xây trọn gói bao nhiêu 1m²?'], ['ai', 'Dạ trọn gói 6,2 triệu/m² ạ! Chị xây mấy tầng? 🏡']] },
          { t: 'Lọc khách, lấy SĐT', d: 'Đất, số tầng, ngân sách, khởi công', icon: 'phone', ai: true, chot: true, mock: 'form', fields: ['Chị Hạnh · 5×20m, 3 tầng', '0907 318 562'], ok: 'Khách nóng' },
          { t: 'Sale gọi tư vấn', d: 'Hẹn kỹ sư khảo sát đất', icon: 'call', mock: 'lich', ten: 'Khảo sát đất miễn phí', gio: '08:00 · Thứ Bảy 28/11', ok: 'Đã hẹn khảo sát' },
          { t: 'Khảo sát đất', d: 'Kỹ sư đo đất, gửi dự toán', icon: 'users', mock: 'img', img: L(IMG['ky-su']), cap: 'Gửi dự toán sơ bộ, mặt bằng' },
          { t: 'Chốt hợp đồng', d: 'Ký hợp đồng rõ hạng mục', icon: 'check', mock: 'img', img: L(IMG['mong']), cap: '✓ Ký hợp đồng trọn gói' },
        ],
        vong: { t: 'Chăm sóc lại & Remarketing', d: 'Gửi tiến độ, mời làm nội thất, xin giới thiệu khách mới' },
      },

      bamDuoi: {
        nhan: 'Vì sao bám đuổi của Preny đặc biệt', shopB: 'Công ty B',
        cmpSai: ['Khách im → gửi “Chị còn định xây nhà không ạ?”', 'Không biết khách cần nhà mấy tầng, vì sao im', 'Khách thấy phiền, bỏ qua tin nhắn'],
        cmpDung: ['Khách nhắn xong im → gửi đúng kiểu nhà khách hỏi (thẻ <b>#NhaPho3Tang</b>)',
                  'Báo giá xong im → gửi dự toán mẫu, mời khảo sát miễn phí (thẻ <b>#HoiGia</b>)',
                  'Đúng nhu cầu, đúng lý do im → khách quay lại hẹn khảo sát'],
        hoi: 'Xây trọn gói bao nhiêu 1m² vậy em?',
        traLoiThuong: 'Dạ 6.200.000đ/m² chị nhé.',
        nhacChung: 'Chị còn định xây nhà không ạ? 😊',
        refImg: L(IMG['nha-pho']), refTen: 'Xây nhà phố trọn gói',
        vd1: {
          ten: 'Khách nhắn xong im',
          kh: 'Đất 5x20 xây 3 tầng được không em?',
          ai: 'Dạ được ạ! Chị định khởi công khi nào, đã có sổ chưa để em tư vấn kỹ hơn nha?',
          tag: '🏷 #NhaPho3Tang', tagNote: 'thẻ từ cuộc chat · khách im 1 ngày',
          nhac: 'Chị Hạnh ơi, em gửi chị <b>ảnh nhà phố 3 tầng 5×20m</b> bên em vừa bàn giao ở Thủ Dầu Một 🏡 Chị muốn xem mặt bằng cho lô đất của chị không ạ?',
          dung: '🎯 Theo thẻ #NhaPho3Tang: gửi đúng kiểu nhà khách hỏi',
          khach: 'Gửi c xem với',
        },
        vd2: {
          ten: 'Báo giá xong im',
          kh: 'Vậy nhà c tổng hết bao nhiêu em?',
          ai: 'Dạ trọn gói tham khảo <b>khoảng 1,7–2 tỷ</b>, kỹ sư khảo sát rồi mới báo chốt được ạ.',
          tag: '🏷 #HoiGia', tagNote: 'báo giá xong khách im 2 ngày',
          nhac: 'Chị Hạnh ơi, em gửi chị <b>dự toán mẫu</b> nhà 3 tầng 5×20m, kê rõ từng hạng mục ạ. Thứ Bảy này kỹ sư còn suất <b>khảo sát đất miễn phí</b>, em giữ cho chị một suất nha?',
          dung: '🎯 Theo thẻ #HoiGia: gửi dự toán, đúng lý do khách im',
          khach: 'Ok giữ c thứ 7',
        },
      },

      binhLuan: {
        post: '<b>Xây nhà phố trọn gói</b> ở Bình Dương 🏡 Trọn gói từ 6.200.000đ/m², kỹ sư khảo sát đất miễn phí',
        img: L(IMG['nha-pho-2']),
        kav: 'TT', kten: 'Võ Thanh Tâm', hoi: 'Đất 4x16 ở Dĩ An xây 2 tầng hết khoảng bao nhiêu vậy?',
        traLoi: 'Dạ chào anh Tâm! Bên em vừa nhắn tin báo giá chi tiết cho anh, anh xem tin nhắn nhé 💬',
        act2: 'Nhắn tin riêng báo giá, lọc khách',
        nhan: 'Chào anh Tâm! Nhà 4×16m 2 tầng tổng diện tích xây dựng thường <b>160–180m²</b> (tính cả móng, mái), trọn gói tham khảo <b>khoảng 1–1,1 tỷ</b>. Anh cho em xin SĐT để kỹ sư khảo sát đất miễn phí, báo dự toán sát hơn nha!',
        sp: { ten: 'Xây nhà phố trọn gói', gia: '6.200.000đ/m²', img: L(IMG['cong-trinh']) },
        khach: 'Số anh 0938 205 471 nhé',
      },

      duLieu: {
        shopA: 'Công ty A',
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: báo chốt giá, chắc chắn có phép', 'Khách khiếu nại, công ty mất uy tín'],
        dung: ['Chỉ trả lời theo dữ liệu công ty cung cấp', 'Không chắc chắn → xin khách chờ, AI tạm dừng', 'Báo ngay sale thật vào trả lời'],
        hoi: 'Nhà 3 tầng trọn gói chốt 1,8 tỷ được không em? Giấy phép chắc được duyệt đúng không?',
        aiSai: 'Dạ <b>chốt 1,8 tỷ</b> chị nhé! Giấy phép bên em lo, <b>chắc chắn được duyệt</b> ạ 🥰',
        thucTe: '⚠ Thực tế: chưa khảo sát chưa báo chốt được, giấy phép do cơ quan nhà nước xét duyệt',
        gian: 'Giờ báo phát sinh 300 triệu, hồ sơ phép thì bị trả! Sao bảo chốt rồi? 😠',
        cho: 'Dạ chị chờ em một chút để em kiểm tra chính xác thông tin cho mình nhé!',
        nv: 'Anh Long · Sale dự án · người thật',
        nvTraLoi: 'Dạ chưa khảo sát bên em chỉ báo khoảng 1,7–2 tỷ để tham khảo ạ. Hồ sơ xin phép bên em làm đúng quy định, còn duyệt do cơ quan cấp phép. Em hẹn kỹ sư khảo sát cho chị nhé!',
      },

      tags: {
        rows: [
          { ten: 'Trần Mỹ Hạnh', av: 'MH', kenh: 'fb', msg: 'Đất 5x20 xây 3 tầng hết bao nhiêu?', gio: '14:47',
            tags: [['FB Ads · Xây nhà trọn gói', 'ng'], ['#NhaPho3Tang', 'qt'], ['Khách nóng', 'lv'], ['Hẹn khảo sát 28/11', 'ht']] },
          { ten: 'Võ Thanh Tâm', av: 'TT', kenh: 'fb', msg: 'Đất 4x16 Dĩ An xây 2 tầng bao nhiêu?', gio: '10:12',
            tags: [['Bình luận bài viết', 'ng'], ['#NhaPho2Tang', 'qt'], ['Đã cho SĐT', 'ht'], ['Gọi lần 1 ✓', 'sa']] },
          { ten: 'Lê Hoàng Phúc', av: 'HP', kenh: 'zalo', msg: 'Bên em có nhận xây phần thô không?', gio: '09:35',
            tags: [['Zalo OA', 'ng'], ['#PhanTho', 'qt'], ['Đang bám đuổi', 'ht']] },
          { ten: 'Nguyễn Thu Trang', av: 'NT', kenh: 'tiktok', msg: 'Nhà vườn 1 tầng ở Bến Cát làm bao lâu?', gio: 'Hôm qua',
            tags: [['TikTok · Video bàn giao nhà', 'ng'], ['#NhaVuon', 'qt'], ['Đã cho SĐT', 'ht'], ['Gọi lần 2 · không bắt máy', 'sa']] },
          { ten: 'Phạm Quốc Huy', av: 'QH', kenh: 'zalo', msg: 'Anh muốn làm thêm nội thất', gio: 'Hôm qua',
            tags: [['Zalo · Khách cũ giới thiệu', 'ng'], ['#NoiThat', 'qt'], ['Đã ký hợp đồng', 'ht'], ['Gọi lần 3 · đã chốt ✓', 'sa']] },
        ],
        chanDung: {
          ten: 'Trần Mỹ Hạnh', av: 'MH', kenh: 'fb', sub: 'Facebook Messenger · 0907 318 562',
          nhom: [
            ['Nguồn khách', [['Facebook Ads', 'ng'], ['Bài: Xây nhà phố trọn gói', 'ng']]],
            ['Quan tâm', [['#NhaPho3Tang', 'qt'], ['Đất 5×20m · có sổ', 'qt']]],
            ['Hành trình', [['Cho SĐT 23/11', 'ht'], ['Hẹn khảo sát 28/11', 'ht']]],
            ['Sale gọi', [['Anh Long · lần 1 ✓', 'sa']]],
            ['Kết nối', [['Đã kết nối Zalo', 'za'], ['Khách nóng · L1', 'lv']]],
          ],
          ghiChu: 'Đất 5×20m ở Thủ Dầu Một, có sổ, chưa có bản vẽ. Xây nhà phố 3 tầng trọn gói, ngân sách khoảng 1,8 tỷ, khởi công 3/2027.',
        },
      },

      chotLai: [
        ['KHÁCH HÀNG', ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến']],
        ['AI CHATBOT', ['Phản hồi nhanh tức thì', 'Báo đơn giá, giải thích cách tính', 'Lọc khách: đất, số tầng, ngân sách', 'Lấy SĐT, phân loại khách nóng']],
        ['BÁM ĐUỔI', ['Gửi 5 tin nhắn trong 7 ngày: nhà đã bàn giao, feedback chủ nhà, quy trình thi công']],
        ['KHẢO SÁT', ['Kỹ sư khảo sát đất, gửi dự toán', 'Sale chốt hợp đồng thi công']],
        ['MUA LẠI', ['Mời khách cũ làm nội thất, giới thiệu khách qua FB và Zalo']],
      ],
    },
  };
})();
