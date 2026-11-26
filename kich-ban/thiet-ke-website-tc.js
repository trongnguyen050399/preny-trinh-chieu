/* Kịch bản: DỊCH VỤ THIẾT KẾ WEBSITE — BẢN TRÌNH CHIẾU, nhóm CÂN NHẮC NHIỀU. Làm 26/11/2026 theo người dùng:
   "làm ngành dịch vụ thiết kế webside".
   "AI chốt đơn = lấy tên + SĐT + hẹn lịch tư vấn": không lên đơn tự động; tư vấn viên tư vấn qua Google Meet rồi mới ký hợp đồng,
   gửi sự kiện Lead (không gửi Purchase khi khách chưa ký hợp đồng).
   Demo chat 1 khách từ đầu tới cuối (khớp Bài 2 video ngang, demo/bai2/kich-ban-thiet-ke-website-tc.js):
   chị Thảo bấm quảng cáo Thiết kế website bán hàng, hỏi giá → AI báo giá từ 9.900.000đ (tên miền, hosting năm đầu, giao diện điện thoại),
   gửi đúng ảnh quảng cáo → hỏi ngành, mục đích làm web → shop mỹ phẩm handmade bán FB + Shopee, muốn giỏ hàng, thanh toán online,
   so bên khác 3 triệu làm theo mẫu, hỏi bao lâu xong → AI không chê, nói rõ khác nhau ở đâu, mời tư vấn 30 phút qua Google Meet
   xem web mẫu, xin tên + SĐT → khách im → bám đuổi 5 tin (web mẫu, feedback chủ shop, cam kết hợp đồng, quy trình, mời giữ lịch)
   → khách hẹn 20h thứ Năm 03/12 → chuyển anh Minh tư vấn → sau bàn giao: lưu ý tuần đầu; mời kiểm tra web 3 tháng;
   ưu đãi landing page 20% cho khách quen.
   AI không hứa kết quả bán hàng, không hứa thứ hạng Google, không tự tính giá, không check khách cũ/mới.
   Không có tin nhắc trước giờ hẹn (Preny chưa có tính năng này).
   Công ty, giá, khách, SĐT, feedback, nhân viên: dữ liệu minh họa. Ảnh: Unsplash (ảnh thật, không phải dự án của khách). */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'web': '1547658719-da2b51169166',          // web hiện trên màn hình, máy tính bảng, điện thoại
    'web-dt': '1545235617-9465d2a55698',       // web trên laptop và điện thoại
    'web-ban-hang': '1768293336571-c48f8765a82d', // web doanh nghiệp trên laptop + điện thoại
    'mau-1': '1499951360447-b19be8fe80f5',     // laptop + iMac mở web
    'wireframe': '1600132806608-231446b2e7af', // phác thảo giao diện web trên giấy
    'thiet-ke': '1587355760421-b9de3226a046',  // nhà thiết kế vẽ giao diện
    'phac-thao': '1587440871875-191322ee64b0', // nhóm phác thảo giao diện, giấy note
    'giao-dien': '1558655146-d09347e92766',    // màn hình bộ giao diện
    'code': '1498050108023-c5249f4df085',      // laptop mở code
    'meet': '1588196749597-9ff075ee6b5b',      // laptop họp video
    'chu-shop': '1520333789090-1afc82db536a',  // chủ shop xem điện thoại tại bàn làm việc
    'thong-ke': '1460925895917-afdab827c52f',  // laptop mở bảng số liệu
    'cua-hang': '1556740758-90de374c12ad',     // chủ cửa hàng nhỏ với máy tính bảng
    'lam-viec': '1759984782050-981de6a25d55',  // làm việc với laptop và sổ tay
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    badge: 'AI CHATBOT · THIẾT KẾ WEBSITE',
    shop: { name: 'Tâm Việt Web', initials: 'TV' },
    headline: { pre: 'AI chatbot tư vấn thiết kế website và', em: 'chốt lịch tư vấn cho khách' },
    sub: 'Báo giá, gửi web mẫu, không chê bên khác, mời tư vấn qua Google Meet và xin SĐT; tư vấn viên chốt hợp đồng sau buổi tư vấn.',
    cta: 'Dùng thử miễn phí tại **preny.ai**\nHotline **0389 647 778**',
    speed: 1.13,
    timing: { read0: 1000, readPerChar: 28, readMax: 4500, type0: 800, typePerChar: 3, typeMax: 1500, fastType: 500,
              featureHold: 1400, sepHold: 1100, cardHold: 4000, introCard: 250 },

    images: Object.fromEntries(Object.entries(IMG).map(([k, id]) => [k, U(id)])),

    // Cột trái demo ngang (dùng khi xuất video khung ngang), đúng thứ tự diễn trong steps
    features: [
      { title: 'AI báo giá, mời buổi tư vấn', desc: 'Trả lời ngay, hiểu cả tin viết tắt.',
        kws: ['Báo giá, gửi đúng ảnh quảng cáo', 'Hỏi ngành, mục đích làm web', 'Không chê bên khác, mời xem web mẫu qua Google Meet'] },
      { title: 'Bám đuổi khách cân nhắc lâu', desc: 'Công ty nằm đầu danh sách khi khách chọn.',
        kws: ['Khách chưa cho SĐT: tự gắn thẻ #websitebanhang', 'Web mẫu, feedback chủ shop', 'Bàn giao mã nguồn, bảo hành 12 tháng', 'Quy trình 4 bước, mời giữ lịch tư vấn'] },
      { title: 'AI xin SĐT, giữ lịch tư vấn', desc: 'Khách nóng chuyển ngay cho tư vấn viên.',
        kws: ['Cho khách lý do để cho số: giữ lịch, gửi link họp', 'Tóm tắt lịch tư vấn qua Google Meet', 'Chuyển anh Minh tư vấn gọi xác nhận'] },
      { title: 'AI chăm sóc sau bàn giao web', desc: 'Tăng tỷ lệ khách làm thêm dịch vụ.',
        kws: ['Hỏi thăm, dặn cách đăng sản phẩm', 'Mời kiểm tra web định kỳ miễn phí', 'Ưu đãi landing page cho khách quen'] },
    ],

    steps: [
      { intro: true, hold: 1800 },

      /* ---- 1. Tư vấn: giá + ảnh quảng cáo → ngành, mục đích → so bên khác 3 triệu → mời tư vấn qua Google Meet ---- */
      { feature: 1 },
      { sep: 'Khách bấm Gửi tin nhắn từ quảng cáo Facebook', style: 'time', hold: 800 },
      { kh: 'Làm web bán hàng bên em giá sao vậy?' },
      { ai: 'Dạ chào chị Thảo, website bán hàng trọn gói bên em **từ 9.900.000đ**, gồm **tên miền, hosting năm đầu** và giao diện điện thoại ạ.', fast: true, meta: '⚡ Preny AI trả lời sau 2 giây', kw: 0 },
      { aiImg: 'web' },
      { ai: 'Chị đang kinh doanh ngành gì, cần web để **bán hàng** hay để **giới thiệu thương hiệu** ạ?', kw: 1 },
      { kh: 'shop mỹ phẩm handmade, đang bán fb vs shopee. muốn web có giỏ hàng, thanh toán online. bên khác báo 3tr làm theo mẫu có sao ko e? bao lâu xong?' },
      { ai: 'Dạ web 3 triệu thường là **giao diện mẫu dùng chung** ạ. Bên em **thiết kế riêng theo shop**, có giỏ hàng, thanh toán online, làm khoảng **3–4 tuần** tùy số trang.', kw: 2 },
      { ai: 'Em mời chị **buổi tư vấn 30 phút qua Google Meet**, bên em mở web mẫu ngành mỹ phẩm cho chị xem trước, chưa cần ký gì. Chị cho em xin **tên và SĐT** để xếp lịch nha 💻', kw: 2 },
      { seen: true },

      /* ---- 2. Khách im → bám đuổi 5 tin trong 7 ngày ---- */
      { feature: 2 },
      { sep: 'Khách chưa để lại SĐT… · AI gắn thẻ #websitebanhang #MyPhamHandmade', style: 'silent', kw: 0, hold: 1600 },
      { sep: '— 15 phút sau —' },
      { ai: 'Chị Thảo ơi, em gửi chị vài **web bán hàng** bên em vừa làm nha, xem được cả trên điện thoại ạ 💻', meta: '📱 Tự động · Bám đuổi', kw: 1 },
      { aiImgs: [{ img: 'mau-1', label: 'Web bán hàng' }, { img: 'web-dt', label: 'Trên điện thoại' },
                 { img: 'web-ban-hang', label: 'Trang sản phẩm' }, { img: 'giao-dien', label: 'Bộ giao diện' }], hold: 3200 },
      { sep: '— 1 ngày sau —' },
      { card: {
          tag: '⭐ Feedback khách hàng',
          intro: 'Đây là chia sẻ của một chị chủ shop bên em vừa bàn giao web ạ 💬',
          lines: ['“Shop mình bán nến thơm, trước chỉ bán qua Facebook. Bên này cho xem bản thiết kế trước rồi mới làm, sửa 2 lần theo ý mình. Giờ khách tự xem giá, đặt hàng trên web.”', 'Chị Hoàng Lan, chủ shop nến thơm', '(Hiệu quả bán hàng tùy sản phẩm và cách vận hành của từng shop)'],
        }, meta: '📱 Tự động · Bám đuổi', kw: 1, hold: 4200 },
      { sep: '— 1 ngày sau —' },
      { card: {
          tag: '✓ Cam kết · Tâm Việt Web',
          intro: 'Bên em ghi rõ trong hợp đồng để chị yên tâm ạ:',
          lines: ['**Bàn giao mã nguồn**, tên miền đứng tên chị', '**Bảo hành 12 tháng**, lỗi kỹ thuật sửa miễn phí', '**Hướng dẫn** đăng sản phẩm, xử lý đơn tận tay'],
        }, meta: '📱 Tự động · Bám đuổi', kw: 2, hold: 4000 },
      { sep: '— 1 ngày sau —' },
      { ai: 'Quy trình bên em là **tư vấn → bản thiết kế giao diện → lập trình → bàn giao**, chị duyệt giao diện rồi mới làm tiếp ạ 😊', meta: '📱 Tự động · Bám đuổi', kw: 3 },
      { sep: '— 2 ngày sau —' },
      { ai: 'Thứ Tư, thứ Năm tuần này bên em còn vài **lịch tư vấn qua Google Meet**, chị muốn em giữ 1 lịch không ạ?', meta: '📱 Tự động · Bám đuổi', kw: 3 },
      { kh: 'T5 tối 8h được ko e' },

      /* ---- 3. Khách quay lại → xin tên + SĐT, giữ lịch → chuyển tư vấn viên ---- */
      { feature: 3 },
      { ai: 'Dạ được ạ, em giữ lịch **20h thứ Năm 03/12** qua Google Meet. Chị cho em xin **tên và SĐT** để bạn tư vấn gửi link họp nha 💻', fast: true, kw: 0 },
      { kh: 'Thảo, 0912 573 408' },
      { card: {
          tag: '✓ Đã giữ lịch tư vấn · chị Thảo', ok: true,
          lines: ['Thời gian: **20h00 thứ Năm 03/12/2026**', 'Hình thức: **Google Meet**, khoảng 30 phút', 'Nội dung: xem **web mẫu ngành mỹ phẩm**', 'Nhu cầu: web bán hàng, **giỏ hàng, thanh toán online**'],
        }, meta: '✓ Đã lưu khách, gắn thẻ #websitebanhang #MyPhamHandmade', kw: 1, hold: 4200 },
      { ai: '**Anh Minh bên em** sẽ gọi chị xác nhận và gửi link Google Meet qua Zalo liền nha 💻', meta: '✓ Đã chuyển anh Minh · Tư vấn', kw: 2, hold: 1500 },

      /* ---- 4. Sau bàn giao: lưu ý tuần đầu → mời kiểm tra định kỳ → ưu đãi landing page khách quen ---- */
      { feature: 4 },
      { sep: '— Ngày 4/1 · sau khi bàn giao website —' },
      { ai: 'Chị Thảo ơi, web mới chạy ổn không ạ? Ảnh sản phẩm chị chụp **vuông**, tên ghi rõ **loại + dung tích** để khách dễ chọn nha 💻', meta: '📱 Tự động · Chăm sóc sau bàn giao', kw: 0 },
      { kh: 'Ổn e, c đăng xong 20 sản phẩm rồi 👍' },
      { sep: '— Ngày 5/4 · 3 tháng sau bàn giao —' },
      { ai: 'Web của chị đã chạy được 3 tháng, bên em kiểm tra **tốc độ tải trang, sao lưu dữ liệu miễn phí** cho chị nha. Chị muốn em xếp lịch ngày nào ạ?', meta: '📅 Tự động · Mời kiểm tra định kỳ', kw: 1 },
      { kh: 'Thứ 2 tuần sau nha e' },
      { ai: 'Dạ em xếp lịch rồi ạ. Khách quen đang được **giảm 20% landing page** cho đợt khuyến mãi, chị cần thì em báo anh Minh tư vấn thêm nha 💻', kw: 2 },
      // Không có { end: true }: bấm → thêm một lần là sang thẳng slide kế.
    ],

    /* ===== Nội dung slide trình chiếu (trinh-chieu.html). Slide thống kê dùng số minh họa (deck.dashboard). ===== */
    deck: {
      /* Demo chat dọc (demo-doc.js): bài đăng → 1 bình luận → quảng cáo Thiết kế website bán hàng (bấm Gửi tin nhắn)
         → Messenger với chị Thảo (tư vấn, bám đuổi, giữ lịch tư vấn, chăm sóc sau bàn giao) → màn kết. */
      demoDoc: {
        khach: 'Thảo Nguyễn',
        sanPham: 'Thiết kế website bán hàng · Tư vấn miễn phí',
        ngay: '26/11/2026',
        gio: '14:46',
        binhLuan: [
          { ten: 'Lê Quang', noiDung: 'Làm web cho tiệm bánh được không bên ơi? Mình ở Đà Nẵng', traLoi: 'Dạ bên em vừa nhắn tin tư vấn chi tiết cho anh, anh xem inbox nha!' },
        ],
        post: {
          tieuDe: 'THIẾT KẾ WEBSITE BÁN HÀNG · XEM WEB MẪU TRƯỚC KHI LÀM 💻',
          dong: ['Giao diện riêng theo shop', 'Có giỏ hàng, thanh toán online', 'Chạy mượt trên điện thoại', 'Bàn giao mã nguồn'],
          anh: ['web', 'web-dt', 'wireframe', 'meet'],
        },
        quangCao: {
          tieuDe: 'THIẾT KẾ WEBSITE BÁN HÀNG · TƯ VẤN MIỄN PHÍ',
          mo: 'Website bán hàng trọn gói từ 9.900.000đ, gồm tên miền, hosting năm đầu. Xem web mẫu qua Google Meet trước khi làm.',
          anh: 'web', nhan: 'MESSENGER', dong: 'Tư vấn 24/7 · Giữ lịch tư vấn', nut: 'Gửi tin nhắn',
        },
        ket: {
          tieuDe: 'PRENY AI – TƯ VẤN THIẾT KẾ WEBSITE, CHỐT LỊCH TƯ VẤN',
          y: ['Trả lời ngay 24/7', 'Báo giá, gửi web mẫu', 'Không chê bên khác', 'Lấy SĐT, giữ lịch tư vấn',
              'Bám đuổi 5 tin trong 7 ngày', 'Báo ngay tư vấn viên', 'Chăm sóc sau bàn giao qua Zalo', 'Meta CAPI Lead'],
        },
      },
      /* Pipeline mới (TRINH-CHIEU.md mục 1): dashboard, chatbot (lead = AI chốt là lấy SĐT + hẹn lịch tư vấn), afterSale. */
      dashboard: [
        { ten: 'Website <span class="grad">bán hàng</span>', den: '21/07/2026', khach: 12, tyLe: 0.55 },
        { ten: 'Landing page <span class="grad">quảng cáo</span>', den: '18/08/2026', khach: 9, tyLe: 0.53 },
        { ten: 'Website <span class="grad">doanh nghiệp</span>', den: '26/09/2026', khach: 7, tyLe: 0.51 },
      ],
      chatbot: {
        y: [
          ['Trả lời ngay tức thì, 24/7', 'Khách nhắn lúc nào, AI trả lời sau 2 giây'],
          ['Báo giá, gửi web mẫu', 'Hỏi ngành, mục đích làm web của khách'],
          ['Chốt đơn = lấy SĐT + hẹn lịch tư vấn', 'Giữ lịch Google Meet, chuyển tư vấn viên'],
          ['Hiểu hình ảnh khách gửi', 'Khách gửi ảnh web mẫu thích, AI mời xem mẫu tương tự'],
        ],
        chat: [
          { ref: { img: L(IMG['web']), ten: 'Thiết kế website bán hàng · Tư vấn miễn phí' } },
          { kh: 'shop mỹ phẩm handmade, bên khác báo 3tr làm theo mẫu, bên em có gì khác ko?' },
          {
            ai: 'Dạ web 3 triệu thường là **giao diện mẫu dùng chung** ạ. Bên em **thiết kế riêng theo shop**, có giỏ hàng, thanh toán online 💻',
            meta: '⚡ Preny AI trả lời sau 2 giây',
          },
          { kh: 'c muốn xem web mẫu trước' },
          {
            ai: 'Dạ em mời chị **buổi tư vấn 30 phút qua Google Meet**, xem web mẫu ngành mỹ phẩm, chưa cần ký gì ạ. Chị cho em xin **tên, SĐT** để xếp lịch nha.',
          },
          { kh: 'Thảo - 0912 573 408. tối t5 03/12 lúc 8h nha' },
          { ai: 'Dạ được ạ! Em giữ lịch **20h thứ Năm 03/12**, anh Minh bên em gọi xác nhận và gửi link họp liền nha ⚡' },
          { don: true },
          { ok: true },
        ],
        lead: {
          ten: 'Chị Thảo',
          sdt: '0912 573 408',
          nhuCau: '**Website bán hàng** mỹ phẩm handmade · **giỏ hàng, thanh toán online** · đang bán FB, Shopee',
          the: [['FB Ads · Thiết kế website bán hàng', 'ng'], ['#websitebanhang', 'qt'], ['#MyPhamHandmade', 'qt'], ['Đã cho SĐT', 'ht']],
          lichNhan: 'Lịch tư vấn',
          lich: ['Google Meet', '20:00 · Thứ Năm 03/12'],
          sale: 'Anh Minh · Tư vấn',
          nut: 'Chuyển cho tư vấn viên',
          xong: 'Đã chuyển cho anh Minh',
          okTieuDe: 'Đã giữ lịch tư vấn 03/12',
        },
        anh: {
          img: L(IMG['web-ban-hang']),
          nhan: 'Khách gửi ảnh web mẫu mình thích',
          kh: 'Làm cho c kiểu web như này được ko e?',
          ai: 'Ảnh chị gửi là kiểu web **bán hàng có banner lớn, trang sản phẩm rõ ràng** ạ, bên em **thiết kế được theo phong cách này**. Trong buổi Google Meet, anh Minh mở mẫu tương tự cho chị xem nha.',
          pill: '🔍 AI nhìn ảnh web mẫu, mời xem mẫu tương tự khi tư vấn',
        },
      },
      afterSale: {
        y1: 'AI gửi tiếp 5 gói dịch vụ hợp web để bán thêm',
        y2: 'Mẫu giao diện mới, ưu đãi landing page, kiểm tra web định kỳ',
        gio: 'Tư vấn viên vừa ký hợp đồng với chị Thảo sau buổi tư vấn',
        don: { ma: '#TV03121', phi: 'ký hợp đồng sau tư vấn', sp: [{ ten: 'Website bán hàng trọn gói', sl: 1, dv: 'gói', gia: 9900000 }] },
        loi: 'Cảm ơn chị Thảo đã chọn Tâm Việt Web 💻 Shop mỹ phẩm hay làm thêm mấy gói này cho web, chị cần gói nào em báo anh Minh tư vấn nha:',
        sp: [
          { img: L(IMG['giao-dien']), ten: 'Landing page khuyến mãi', gia: 2900000, cu: 3900000, nut: 'Xem gói' },
          { img: L(IMG['thong-ke']), ten: 'Gói chăm sóc web 6 tháng', gia: 1800000, nut: 'Xem gói' },
          { img: L(IMG['lam-viec']), ten: 'Viết 10 bài chuẩn SEO', gia: 1500000, nut: 'Xem gói' },
          { img: L(IMG['thiet-ke']), ten: 'Thiết kế logo, bộ nhận diện', gia: 2500000, nut: 'Xem gói' },
          { img: L(IMG['code']), ten: 'Gia hạn tên miền, hosting năm 2', gia: 1200000, nut: 'Xem gói' },
        ],
        khach: 'Làm thêm cho c landing page với gói chăm sóc web nha e',
        pill: '🛍 Khách làm thêm 2 gói: hợp đồng tăng từ 9.900.000đ lên 14.600.000đ',
        fmm: {
          sep: '1 tháng sau · tin Facebook FMM',
          chao: 'Chào chị Thảo 👋 Bên em vừa ra mẫu giao diện mới cho ngành mỹ phẩm, mời chị xem nha!',
          img: L(IMG['web-dt']),
          nhan: 'MẪU MỚI',
          ten: 'Giao diện mùa lễ Tết cho shop mỹ phẩm',
          mo: 'Khách cũ được tư vấn đổi banner theo mùa, xem mẫu qua Google Meet.',
          nut: 'Xem mẫu',
        },
        zbs: {
          ten: 'Ưu đãi landing page cho chị Thảo',
          mo: 'Cảm ơn chị đã chọn Tâm Việt Web. Gửi chị ưu đãi landing page cùng giao diện web của chị cho đợt khuyến mãi:',
          dong: [
            ['Mã ưu đãi', '**TAMVIET20**'],
            ['Ưu đãi', 'Giảm 20% landing page'],
            ['Hạn dùng', '31/05/2027'],
          ],
          nut: 'Dùng ưu đãi',
        },
      },
      tieuDe6: 'Hệ thống AI chatbot giúp tăng<br><span class="grad">tỷ lệ chốt lịch tư vấn</span>',
      // Không lên đơn tự động (tư vấn viên tư vấn qua Google Meet rồi mới ký hợp đồng) → 5 tính năng
      tinhNang: [
        ['AI tư vấn, chủ động mời buổi tư vấn', 'Lấy SĐT, giữ lịch Google Meet'],
        ['Bám đuổi khách cân nhắc lâu', 'Gửi web mẫu, feedback chủ shop'],
        ['AI chăm sóc khách sau bàn giao', 'Hỏi thăm, mời kiểm tra web định kỳ'],
        ['Bộ công cụ Remarketing FMM và ZBS', 'Khai thác lại dữ liệu khách cũ'],
        ['Gửi sự kiện Lead qua Meta CAPI', 'Hỗ trợ tối ưu quảng cáo Facebook'],
      ],

      chotDon: {
        nganh: 'thiết kế website',
        nguoi: 'Tư vấn viên',
        chotLa: 'AI chốt đơn = lấy SĐT + hẹn lịch tư vấn',
        buoc: [
          { t: 'Chạy quảng cáo', d: 'Thu hút chủ shop cần web', icon: 'megaphone', own: 'Công ty chạy quảng cáo', mock: 'ad', img: L(IMG['web']), text: 'Thiết kế website bán hàng, xem web mẫu trước khi làm 💻', btn: 'Gửi tin nhắn' },
          { t: 'Bắt đầu chat', d: 'Báo giá, hỏi ngành, mục đích', icon: 'chat', ai: true, mock: 'chat',
            msgs: [['kh', 'Làm web bán hàng giá sao vậy?'], ['ai', 'Dạ từ 9.900.000đ ạ. Chị kinh doanh ngành gì ạ? 💻']] },
          { t: 'Mời buổi tư vấn', d: 'Lấy SĐT, giữ lịch Google Meet', icon: 'phone', ai: true, chot: true, mock: 'form', fields: ['Chị Thảo · web bán mỹ phẩm', '0912 573 408'], ok: 'Đã giữ lịch 03/12' },
          { t: 'Tư vấn viên gọi', d: 'Xác nhận lịch, gửi link họp', icon: 'call', mock: 'lich', ten: 'Google Meet', gio: '20:00 · Thứ Năm 03/12', ok: 'Đã xác nhận lịch' },
          { t: 'Tư vấn online', d: 'Xem web mẫu qua Google Meet', icon: 'users', mock: 'img', img: L(IMG['meet']), cap: 'Tư vấn viên mở web mẫu cho khách' },
          { t: 'Ký hợp đồng', d: 'Duyệt giao diện rồi mới làm', icon: 'check', mock: 'img', img: L(IMG['wireframe']), cap: '✓ Khách duyệt bản thiết kế giao diện' },
        ],
        vong: { t: 'Chăm sóc sau bàn giao & Remarketing', d: 'Hỏi thăm web mới, mời kiểm tra định kỳ, gửi ưu đãi landing page' },
      },

      bamDuoi: {
        nhan: 'Vì sao bám đuổi của Preny đặc biệt', shopB: 'Công ty B',
        cmpSai: ['Khách im → gửi “Chị còn quan tâm làm web không ạ?”', 'Không biết khách cần web gì, vì sao im', 'Khách thấy phiền, bỏ qua tin nhắn'],
        cmpDung: ['Khách nhắn xong im → nhắc đúng dịch vụ khách hỏi (thẻ <b>#websitebanhang</b> từ quảng cáo)',
                  'Báo giá xong im → bám đuổi theo giá: quà tặng khi ký hợp đồng (thẻ <b>#baogia</b>)',
                  'Đúng nhu cầu, đúng lý do im → khách quay lại hẹn lịch tư vấn'],
        hoi: 'Làm web bán hàng bên em giá sao vậy?',
        traLoiThuong: 'Dạ từ 9.900.000đ ạ.',
        nhacChung: 'Chị còn quan tâm làm web không ạ? 😊',
        refImg: L(IMG['web']), refTen: 'Thiết kế website bán hàng',
        vd1: {
          ten: 'Khách nhắn xong im',
          kh: 'Web bán hàng có làm được thanh toán online không em?',
          ai: 'Dạ được ạ, web bán hàng bên em có giỏ hàng, thanh toán online. Chị đang kinh doanh ngành gì ạ?',
          tag: '🏷 #websitebanhang', tagNote: 'thẻ từ quảng cáo · khách im 1 ngày',
          nhac: 'Chị Thảo ơi, em gửi chị <b>vài web bán hàng</b> bên em vừa làm nè 💻 Chị xem thử trên điện thoại, thích kiểu nào em <b>mở mẫu tương tự</b> trong buổi tư vấn nha.',
          dung: '🎯 Theo thẻ #websitebanhang: nhắc đúng dịch vụ khách hỏi',
          khach: 'Tuần này c xem được ko e?',
        },
        vd2: {
          ten: 'Báo giá xong im',
          kh: 'Làm web bán hàng bên em giá sao vậy?',
          ai: 'Dạ website bán hàng trọn gói <b>từ 9.900.000đ</b>, gồm tên miền, hosting năm đầu ạ.',
          tag: '🏷 #baogia', tagNote: 'báo giá xong khách im 2 ngày',
          nhac: 'Chị ơi, tuần này ký hợp đồng được <b>tặng thiết kế 3 banner</b> và <b>chứng chỉ bảo mật SSL năm đầu</b> ạ. Em giữ 1 lịch tư vấn qua Google Meet cho chị nha?',
          dung: '🎯 Theo thẻ #baogia: bám đuổi theo giá, đúng lý do khách im',
          khach: 'Ok giữ giúp c, tối t5 nha',
        },
      },

      binhLuan: {
        post: '<b>Xem web mẫu trước khi làm</b>: tư vấn 30 phút qua Google Meet, chưa cần ký gì 💻 Website bán hàng trọn gói từ 9.900.000đ',
        img: L(IMG['web-dt']),
        kav: 'LQ', kten: 'Lê Quang', hoi: 'Làm web cho tiệm bánh được không bên ơi? Mình ở Đà Nẵng',
        traLoi: 'Dạ chào anh Quang! Bên em vừa nhắn tin tư vấn chi tiết cho anh, anh xem tin nhắn nhé 💬',
        act2: 'Nhắn riêng, mời buổi tư vấn online',
        nhan: 'Chào anh Quang! Bên em làm web cho <b>tiệm bánh</b> được ạ, tư vấn <b>qua Google Meet</b> nên ở Đà Nẵng vẫn làm bình thường. Anh cho em xin SĐT để giữ lịch tư vấn ạ!',
        sp: { ten: 'Tư vấn qua Google Meet', gia: 'Miễn phí · 30 phút', img: L(IMG['meet']) },
        khach: 'Số anh 0905 284 617 nhé',
      },

      duLieu: {
        shopA: 'Công ty A',
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: lên top Google, làm 5 ngày là xong', 'Khách ký rồi thấy khác, công ty mất uy tín'],
        dung: ['Chỉ trả lời theo dữ liệu công ty cung cấp', 'Không chắc chắn → xin khách chờ, AI tạm dừng', 'Báo ngay tư vấn viên vào trả lời'],
        hoi: 'Làm web xong có lên top Google không em? Bao lâu xong?',
        aiSai: 'Dạ bên em <b>cam kết lên top 1 Google</b>, làm <b>5 ngày</b> là xong luôn chị 🥰',
        thucTe: '⚠ Thực tế: không ai cam kết được thứ hạng Google; web bán hàng làm khoảng 3–4 tuần tùy số trang',
        gian: 'Ký 3 tuần rồi web chưa xong, tìm Google cũng không thấy! Sao nhắn nói 5 ngày, top 1? 😠',
        cho: 'Dạ chị chờ em một chút để em kiểm tra chính xác thông tin cho mình nhé!',
        nv: 'Anh Minh · Tư vấn · người thật',
        nvTraLoi: 'Dạ em xin lỗi chị, bên em không cam kết thứ hạng Google ạ. Web của chị đang ở bước lập trình, em gửi chị lịch bàn giao cụ thể ngay nhé!',
      },

      tags: {
        rows: [
          { ten: 'Nguyễn Phương Thảo', av: 'PT', kenh: 'fb', msg: 'bên khác báo 3tr làm theo mẫu có sao ko e?', gio: '14:47',
            tags: [['FB Ads · Thiết kế website bán hàng', 'ng'], ['#websitebanhang', 'qt'], ['#MyPhamHandmade', 'qt'], ['Hẹn tư vấn 03/12', 'ht']] },
          { ten: 'Lê Quang', av: 'LQ', kenh: 'fb', msg: 'Làm web cho tiệm bánh được không?', gio: '10:12',
            tags: [['Bình luận bài viết', 'ng'], ['#thietkewebsite', 'qt'], ['Đã cho SĐT', 'ht'], ['Gọi lần 1 ✓', 'sa']] },
          { ten: 'Đỗ Hải Yến', av: 'HY', kenh: 'tiktok', msg: 'Làm landing page bán khóa học bao lâu?', gio: '16:30',
            tags: [['TikTok · Video web mẫu', 'ng'], ['#LandingPage', 'qt'], ['Đã cho SĐT', 'ht'], ['Gọi lần 2 · không bắt máy', 'sa']] },
          { ten: 'Trịnh Văn Nam', av: 'VN', kenh: 'zalo', msg: 'Web công ty mình bị chậm, sửa được không?', gio: '09:05',
            tags: [['Zalo OA', 'ng'], ['#SuaWebsite', 'qt'], ['Đang bám đuổi', 'ht']] },
          { ten: 'Mai Anh', av: 'MA', kenh: 'zalo', msg: 'Gia hạn hosting giúp mình nhé', gio: 'Hôm qua',
            tags: [['Zalo · Khách cũ', 'ng'], ['#GiaHanHosting', 'qt'], ['Đã có web', 'ht'], ['Đã kết nối Zalo', 'za']] },
        ],
        chanDung: {
          ten: 'Nguyễn Phương Thảo', av: 'PT', kenh: 'fb', sub: 'Facebook Messenger · 0912 573 408',
          nhom: [
            ['Nguồn khách', [['Facebook Ads', 'ng'], ['Bài: Thiết kế website bán hàng', 'ng']]],
            ['Quan tâm', [['#websitebanhang', 'qt'], ['#MyPhamHandmade', 'qt']]],
            ['Hành trình', [['Nhắn tin 26/11', 'ht'], ['Cho SĐT 01/12', 'ht'], ['Hẹn tư vấn 03/12', 'ht']]],
            ['Sale gọi', [['Anh Minh · lần 1 ✓', 'sa']]],
            ['Kết nối', [['Đã kết nối Zalo', 'za'], ['Khách mới · L1', 'lv']]],
          ],
          ghiChu: 'Chủ shop mỹ phẩm handmade, đang bán Facebook và Shopee. Cần web bán hàng có giỏ hàng, thanh toán online; đã được bên khác báo 3 triệu làm theo mẫu. Hẹn tư vấn qua Google Meet 20h thứ Năm 03/12.',
        },
      },

      chotLai: [
        ['KHÁCH HÀNG', ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến']],
        ['AI CHATBOT', ['Phản hồi nhanh tức thì', 'Báo giá, gửi web mẫu', 'Không chê bên khác', 'Lấy SĐT, hẹn tư vấn']],
        ['BÁM ĐUỔI', ['Gửi 5 tin nhắn trong 7 ngày: web mẫu, khách thật, cam kết, quy trình']],
        ['HẸN TƯ VẤN', ['Khách xem web mẫu qua Google Meet', 'Tư vấn viên chốt hợp đồng']],
        ['MUA LẠI', ['Mời kiểm tra web định kỳ, gửi ưu đãi landing page qua FB và Zalo']],
      ],
    },
  };
})();
