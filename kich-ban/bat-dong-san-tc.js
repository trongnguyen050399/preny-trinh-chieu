/* Kịch bản: BẤT ĐỘNG SẢN (đất nền) — BẢN TRÌNH CHIẾU, nhóm CÂN NHẮC NHIỀU. Làm 20/11/2026 theo người dùng:
   "bất động sản cân nhắc nhiều (xin sđt cho sale, rủ khách coi đất..)".
   "AI chốt đơn = lấy tên + SĐT + hẹn đi xem đất": chuyên viên đưa khách xem lô thực tế, xem sổ gốc, chốt cọc tại chỗ;
   gửi sự kiện Lead (không gửi Purchase khi khách chưa cọc). Bản cũ `bat-dong-san.js` (đang ẩn) giữ nguyên.
   Demo chat 1 khách từ đầu tới cuối (khớp Bài 2 video ngang, demo/bai2/kich-ban-bat-dong-san-tc.js):
   anh Phong bấm quảng cáo đất nền Đức Hòa, hỏi giá → AI báo lô 5x20 từ 1,65 tỷ, gửi đúng ảnh quảng cáo
   → hỏi mua để ở hay giữ tài sản, ngân sách → 34 tuổi, ở Bình Tân, có 1,2 tỷ muốn vay thêm, mua để sau cất nhà cho ba mẹ,
   sợ đất chưa có sổ, sợ khu vắng, hỏi có lên giá không → AI: sổ riêng từng lô, công chứng sang tên ngay, ngân hàng hỗ trợ vay
   (tùy hồ sơ duyệt), đã có nhiều hộ cất nhà ở, KHÔNG hứa lên giá → mời đi xem đất cuối tuần, xe đưa đón miễn phí, xin tên + SĐT
   → khách im → bám đuổi 5 tin (ảnh thực tế, feedback khách đã cất nhà, pháp lý, quy trình xem đất, mời giữ chỗ xe CN)
   → khách hẹn sáng CN 29/11 → chuyển anh Tuấn · Chuyên viên tư vấn
   → sau buổi xem: gửi lại thông tin lô đã xem; cập nhật thực tế khu đất; ưu đãi thanh toán nhanh.
   Không có tin nhắc trước giờ xem đất (Preny chưa có tính năng này).
   Tên đơn vị, giá, khách, SĐT, feedback, nhân viên: dữ liệu minh họa. Ảnh: Unsplash (ảnh thật, không phải dự án của khách). */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'dat-nen': '1747854805840-9be7d5e360e6',     // khu đất phân lô, đường nội bộ (ảnh quảng cáo)
    'duong-noi-bo': '1637555754372-54538a035312', // đường mới giữa cánh đồng
    'toan-canh': '1764222233275-87dc016c11dc',   // toàn cảnh từ trên cao, đường và nhà
    'khu-dan-cu': '1776149420560-3e0ab05a0eac',  // khu dân cư nhìn từ trên cao
    'khu-do-thi': '1772325482422-55bc8dd65662',  // dãy nhà mới xây
    'pho-cay': '1768061521909-d9c28e8677c9',     // phố nhà liền kề, hàng cây
    'nha-pho': '1774939234567-3bf081ab2bc0',     // nhà phố mới, cây xanh
    'nha-pho-2': '1774939234418-a61a50a28a40',   // nhà phố 3 tầng
    'tu-van': '1650784854382-6d3b15e07b94',      // chuyên viên tư vấn cầm máy tính bảng
    'bat-tay': '1781229771042-2a859f8f8022',     // bắt tay bên mô hình nhà
    'chia-khoa': '1744782351841-9cc6b86a5add',   // chìa khóa nhà
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    badge: 'AI CHATBOT · BẤT ĐỘNG SẢN',
    shop: { name: 'Nhà Đất Kim Phát', initials: 'KP' },
    headline: { pre: 'AI chatbot tư vấn đất nền và', em: 'hẹn khách đi xem đất' },
    sub: 'Hỏi đúng mục đích, ngân sách; nói rõ pháp lý, không hứa lên giá; xin SĐT, giữ chỗ xe đi xem đất rồi chuyển ngay cho sale.',
    cta: 'Dùng thử miễn phí tại **preny.ai**\nHotline **0389 647 778**',
    speed: 1.13,
    timing: { read0: 1000, readPerChar: 28, readMax: 4500, type0: 800, typePerChar: 3, typeMax: 1500, fastType: 500,
              featureHold: 1400, sepHold: 1100, cardHold: 4000, introCard: 250 },

    images: Object.fromEntries(Object.entries(IMG).map(([k, id]) => [k, U(id)])),

    // Cột trái demo ngang (dùng khi xuất video khung ngang), đúng thứ tự diễn trong steps
    features: [
      { title: 'AI tư vấn đúng nhu cầu mua đất', desc: 'Trả lời ngay, cả lúc nửa đêm.',
        kws: ['Báo giá lô, gửi đúng ảnh quảng cáo', 'Hỏi mua để ở hay giữ tài sản, ngân sách', 'Nói rõ pháp lý, không hứa lên giá'] },
      { title: 'Bám đuổi khách cân nhắc lâu', desc: 'Dự án nằm đầu danh sách khi khách chọn.',
        kws: ['Khách chưa cho SĐT: tự gắn thẻ #datnen', 'Ảnh thực tế, khách đã cất nhà ở', 'Sổ riêng từng lô, ngân hàng hỗ trợ vay', 'Quy trình rõ, mời giữ chỗ xe'] },
      { title: 'AI xin SĐT, hẹn đi xem đất', desc: 'Khách nóng chuyển ngay cho sale.',
        kws: ['Cho khách lý do để cho số: giữ chỗ xe đưa đón', 'Lưu khách, gắn thẻ ngân sách, nhu cầu', 'Chuyển anh Tuấn · Chuyên viên tư vấn'] },
      { title: 'AI chăm sóc sau buổi xem', desc: 'Khách quay lại chốt cọc.',
        kws: ['Gửi lại thông tin lô đã xem', 'Cập nhật thực tế khu đất', 'Ưu đãi thanh toán nhanh'] },
    ],

    steps: [
      { intro: true, hold: 1800 },

      /* ---- 1. Tư vấn: giá lô + ảnh quảng cáo → mục đích, ngân sách → sợ pháp lý, khu vắng, hỏi lên giá → mời đi xem đất ---- */
      { feature: 1 },
      { sep: 'Khách bấm Gửi tin nhắn từ quảng cáo Facebook', style: 'time', hold: 800 },
      { kh: 'Đất nền Đức Hòa giá sao em?' },
      { ai: 'Dạ chào anh Phong, lô **5x20 (100m²) thổ cư** bên em giá **từ 1,65 tỷ/lô**, đường nội bộ 12m ạ.', fast: true, meta: '⚡ Preny AI trả lời sau 2 giây', kw: 0 },
      { aiImg: 'dat-nen' },
      { ai: 'Anh mua để **ở sau này** hay **giữ tài sản**, ngân sách khoảng bao nhiêu ạ, để em lọc lô hợp với anh?' },
      { kh: 'a 34t ở Bình Tân, có sẵn 1tỷ2 muốn vay thêm. mua để sau cất nhà cho ba mẹ. sợ đất chưa có sổ, khu vắng ko ai ở. mà có lên giá ko e?' },
      { ai: 'Dạ lô bên em **sổ riêng từng lô**, công chứng sang tên ngay ạ. Phần thiếu anh vay được qua **ngân hàng liên kết**, mức vay tùy hồ sơ ngân hàng duyệt. Khu này đã có **nhiều hộ cất nhà ở** rồi anh.', kw: 1 },
      { ai: 'Giá sau này em không dám hứa ạ, anh nên xem tận nơi rồi tự đánh giá. Cuối tuần bên em có **xe đưa đón miễn phí đi xem đất**, xem cả sổ gốc. Anh cho em xin **tên và SĐT** để giữ chỗ xe nha 🏡', kw: 2 },
      { seen: true },

      /* ---- 2. Khách im → bám đuổi 5 tin trong 7 ngày ---- */
      { feature: 2 },
      { sep: 'Khách chưa để lại SĐT… · AI gắn thẻ #datnen #VayNganHang', style: 'silent', kw: 0, hold: 1600 },
      { sep: '— 15 phút sau —' },
      { ai: 'Anh Phong ơi, em gửi anh **ảnh thực tế** khu đất bên em chụp tuần này nha 🏡', meta: '🏡 Tự động · Bám đuổi', kw: 1 },
      { aiImgs: [{ img: 'toan-canh', label: 'Toàn cảnh khu đất' }, { img: 'duong-noi-bo', label: 'Đường nội bộ 12m' },
                 { img: 'khu-dan-cu', label: 'Dân đã về ở' }, { img: 'nha-pho', label: 'Nhà đã cất' }], hold: 3200 },
      { sep: '— 1 ngày sau —' },
      { card: {
          tag: '⭐ Feedback khách hàng',
          intro: 'Đây là chia sẻ của một anh khách mua lô bên em năm ngoái ạ 💬',
          lines: ['“Mình cũng sợ đất chưa có sổ nên ra tận nơi xem sổ gốc, công chứng trong tuần. Giờ cất nhà cho ba mẹ rồi, hàng xóm ở kín dãy.”', 'Anh Quốc Hải, Bình Tân'],
        }, meta: '🏡 Tự động · Bám đuổi', kw: 1, hold: 4200 },
      { sep: '— 1 ngày sau —' },
      { card: {
          tag: '✓ Nhà Đất Kim Phát',
          intro: 'Pháp lý bên em thế này để anh yên tâm ạ:',
          lines: ['**Sổ riêng từng lô**, 100% thổ cư, xem sổ gốc tại văn phòng', 'Công chứng tại **phòng công chứng nhà nước**', '**Ngân hàng liên kết** hỗ trợ vay, tùy hồ sơ duyệt'],
        }, meta: '🏡 Tự động · Bám đuổi', kw: 2, hold: 4000 },
      { sep: '— 1 ngày sau —' },
      { ai: 'Buổi xem đất bên em là **đón anh → xem lô thực tế → xem sổ gốc → đưa anh về**, khoảng nửa ngày. Anh ưng mới cọc, không ép ạ 😊', meta: '🏡 Tự động · Bám đuổi', kw: 3 },
      { sep: '— 2 ngày sau —' },
      { ai: 'Sáng Chủ nhật 29/11 xe đi xem đất còn vài chỗ, anh muốn em giữ chỗ cho anh và gia đình không ạ?', meta: '🏡 Tự động · Bám đuổi', kw: 3 },
      { kh: 'CN này a đi xem đc, 2 vợ chồng. giữ giúp a nha' },

      /* ---- 3. Khách quay lại → xin tên + SĐT + điểm đón, giữ chỗ xe → chuyển sale ---- */
      { feature: 3 },
      { ai: 'Dạ được ạ, xe xuất phát **8h sáng Chủ nhật 29/11**. Anh cho em xin **tên, SĐT và điểm đón** để giữ 2 chỗ nha 🏡', fast: true, kw: 0 },
      { kh: 'Phong, 0907 318 642, đón ở vòng xoay An Lạc nha e' },
      { card: {
          tag: '✓ Đã giữ chỗ xem đất · anh Phong', ok: true,
          lines: ['Thời gian: **8h sáng Chủ nhật 29/11/2026**', 'Đón tại: **vòng xoay An Lạc, Bình Tân** · 2 người', 'Xem lô **5x20 thổ cư**, xem sổ gốc tại văn phòng', 'Xe đưa đón **miễn phí**, không ép cọc'],
        }, meta: '✓ Đã lưu khách, gắn thẻ #datnen #VayNganHang', kw: 1, hold: 4200 },
      { ai: '**Anh Tuấn bên tư vấn** sẽ gọi anh xác nhận và gửi trước bản đồ phân lô nha. Anh muốn tính vay thì mang theo CCCD, em nhờ anh Tuấn tính giúp luôn ạ 🏡', meta: '✓ Đã chuyển anh Tuấn · Chuyên viên tư vấn', kw: 2, hold: 1500 },

      /* ---- 4. Sau buổi xem: gửi lại thông tin lô → cập nhật thực tế → ưu đãi thanh toán nhanh ---- */
      { feature: 4 },
      { sep: '— Tối 29/11 · sau buổi xem đất —' },
      { ai: 'Anh Phong ơi, em gửi lại anh thông tin **lô B12 và B14** anh xem sáng nay: mặt tiền đường 12m, sổ riêng, giá **1,65 tỷ** và **1,72 tỷ** ạ. Anh cần tính vay thì nhắn em nha 🏡', meta: '🏡 Tự động · Chăm sóc sau buổi xem', kw: 0 },
      { kh: 'Vợ a ưng lô B12, để a tính thêm vụ vay' },
      { sep: '— 1 tuần sau —' },
      { ai: 'Em cập nhật anh: tuần này khu bên em có **thêm 3 hộ khởi công cất nhà**, đường nội bộ đã thảm nhựa xong ạ. Lô B12 vẫn đang giữ cho anh nha.', meta: '📅 Tự động · Cập nhật khu đất', kw: 1 },
      { kh: 'Ok e, cuối tuần a qua cọc' },
      { ai: 'Dạ khách thanh toán nhanh trong tháng 12 được **chiết khấu 2%**, bên em **hỗ trợ phí công chứng** ạ. Em báo anh Tuấn chuẩn bị hồ sơ cho anh nha 🏡', kw: 2 },
      // Không có { end: true }: bấm → thêm một lần là sang thẳng slide kế.
    ],

    /* ===== Nội dung slide trình chiếu (trinh-chieu.html). Slide thống kê dùng số minh họa (deck.dashboard). ===== */
    deck: {
      demoDoc: {
        khach: 'Hoàng Phong',
        sanPham: 'Đất nền Đức Hòa · lô 5x20',
        ngay: '18/11/2026',
        gio: '14:46',
        binhLuan: [
          { ten: 'Ngô Thùy Linh', noiDung: 'Lô góc giá bao nhiêu vậy em?', traLoi: 'Dạ bên em vừa nhắn tin tư vấn chi tiết cho chị, chị xem inbox nha!' },
        ],
        post: {
          tieuDe: 'ĐẤT NỀN ĐỨC HÒA · SỔ RIÊNG TỪNG LÔ 🏡',
          dong: ['Lô 5x20 thổ cư từ 1,65 tỷ', 'Đường nội bộ 12m', 'Ngân hàng hỗ trợ vay', 'Xe đưa đón xem đất miễn phí'],
          anh: ['dat-nen', 'toan-canh', 'duong-noi-bo', 'nha-pho'],
        },
        quangCao: {
          tieuDe: 'ĐẤT NỀN ĐỨC HÒA · SỔ RIÊNG TỪNG LÔ',
          mo: 'Lô 5x20 thổ cư từ 1,65 tỷ, đường nội bộ 12m. Cuối tuần có xe đưa đón đi xem đất, xem sổ gốc miễn phí.',
          anh: 'dat-nen', nhan: 'MESSENGER', dong: 'Tư vấn 24/7 · Giữ chỗ xe xem đất', nut: 'Gửi tin nhắn',
        },
        ket: {
          tieuDe: 'PRENY AI – TƯ VẤN ĐẤT NỀN, HẸN KHÁCH ĐI XEM ĐẤT',
          y: ['Trả lời ngay 24/7', 'Hỏi đúng mục đích, ngân sách', 'Không hứa lên giá', 'Lấy SĐT, giữ chỗ xe xem đất',
              'Bám đuổi 5 tin trong 7 ngày', 'Báo ngay sale dự án', 'Chăm sóc sau buổi xem qua Zalo', 'Meta CAPI Lead'],
        },
      },
      dashboard: [
        { ten: 'Đất nền <span class="grad">sổ riêng từng lô</span>', den: '20/07/2026', khach: 18, tyLe: 0.56 },
        { ten: 'Nhà phố <span class="grad">liền kề</span>', den: '24/08/2026', khach: 11, tyLe: 0.53 },
        { ten: 'Lô góc, <span class="grad">mặt tiền đường lớn</span>', den: '29/09/2026', khach: 8, tyLe: 0.55 },
      ],
      chatbot: {
        y: [
          ['Trả lời ngay tức thì, 24/7', 'Khách nhắn lúc nào, AI trả lời sau 2 giây'],
          ['Tư vấn đúng nhu cầu', 'Hỏi mua để ở hay giữ tài sản, ngân sách'],
          ['Chốt đơn = lấy SĐT + hẹn xem đất', 'Giữ chỗ xe đưa đón, chuyển sale'],
          ['Hiểu hình ảnh khách gửi', 'Khách gửi ảnh lô đất, AI nhận ra vị trí'],
        ],
        chat: [
          { ref: { img: L(IMG['dat-nen']), ten: 'Đất nền Đức Hòa · lô 5x20' } },
          { kh: 'có 1tỷ2 muốn vay thêm, sợ đất chưa có sổ e' },
          {
            ai: 'Dạ lô 5x20 thổ cư **từ 1,65 tỷ** ạ. Bên em **sổ riêng từng lô**, công chứng sang tên ngay, phần thiếu anh vay qua **ngân hàng liên kết** 🏡',
            meta: '⚡ Preny AI trả lời sau 2 giây',
          },
          { kh: 'mua giờ sau này có lên giá ko e?' },
          {
            ai: 'Dạ giá sau này em không dám hứa ạ. Anh đi **xem đất tận nơi**, xem sổ gốc rồi tự đánh giá nha. Anh cho em xin **tên, SĐT** để giữ chỗ xe ạ.',
          },
          { kh: 'Phong - 0907 318 642. sáng CN 29/11 đi đc ko e?' },
          { ai: 'Dạ được ạ! Em giữ 2 chỗ xe **8h sáng CN 29/11** cho anh, anh Tuấn bên tư vấn gọi xác nhận liền nha ⚡' },
          { don: true },
          { ok: true },
        ],
        lead: {
          ten: 'Anh Phong',
          sdt: '0907 318 642',
          nhuCau: '34 tuổi, ở Bình Tân · có **1,2 tỷ**, muốn **vay thêm** · mua để sau cất nhà cho ba mẹ · sợ đất chưa có sổ',
          the: [['FB Ads · Đất nền Đức Hòa', 'ng'], ['#datnen', 'qt'], ['#VayNganHang', 'qt'], ['Đã cho SĐT', 'ht']],
          lichNhan: 'Lịch xem đất',
          lich: ['Đón vòng xoay An Lạc', '08:00 · Chủ nhật 29/11'],
          sale: 'Anh Tuấn · Chuyên viên tư vấn',
          nut: 'Chuyển cho sale',
          xong: 'Đã chuyển cho anh Tuấn',
          okTieuDe: 'Đã giữ chỗ xem đất 29/11',
        },
        anh: {
          img: L(IMG['khu-do-thi']),
          nhan: 'Khách gửi ảnh khu nhà trên mạng',
          kh: 'Khu như hình này có phải bên em ko?',
          ai: 'Ảnh anh gửi là **khu nhà phố đã xây kín**, không phải dự án bên em ạ. Khu bên em hiện có **đường nội bộ 12m**, nhiều hộ đang cất nhà. Em gửi anh ảnh thực tế tuần này để anh so nha.',
          pill: '🔍 AI nhìn ảnh, nói thật đâu là dự án mình',
        },
      },
      afterSale: {
        y1: 'AI gửi tiếp 5 dịch vụ cho khách vừa cọc',
        y2: 'Lô mới mở bán, ưu đãi thanh toán nhanh',
        gio: 'Sale vừa chốt cọc lô B12 cho anh Phong',
        don: { ma: '#KP2911', phi: 'hỗ trợ phí công chứng', sp: [{ ten: 'Lô đất nền B12 · 5x20 thổ cư', sl: 1, dv: 'lô', gia: 1650000000 }] },
        loi: 'Chúc mừng anh Phong đã chọn được lô ưng ý 🏡 Khách mua lô bên em hay cần thêm mấy dịch vụ này ạ:',
        sp: [
          { img: L(IMG['nha-pho-2']), ten: 'Gói thiết kế nhà phố 5x20', gia: 15000000, nut: 'Thêm vào' },
          { img: L(IMG['nha-pho']), ten: 'Xây nhà trọn gói (giá từ, mỗi m²)', gia: 5500000, nut: 'Xem thêm' },
          { img: L(IMG['chia-khoa']), ten: 'Dịch vụ sang tên, làm sổ trọn gói', gia: 5000000, nut: 'Đăng ký' },
          { img: L(IMG['dat-nen']), ten: 'Lô liền kề B14 · 5x20', gia: 1720000000, nut: 'Xem lô' },
          { img: L(IMG['pho-cay']), ten: 'Nhà phố liền kề dự án mới', gia: 3200000000, nut: 'Xem thêm' },
        ],
        khach: 'Lấy thêm a gói thiết kế nhà nha e',
        pill: '🛍 Khách thêm ngay: đơn tăng từ 1.650.000.000đ lên 1.665.000.000đ',
        fmm: {
          sep: '1 tháng sau · tin Facebook FMM',
          chao: 'Chào anh Phong 👋 Kim Phát vừa mở bán thêm dãy lô góc ngay cổng khu, gửi anh xem trước để giới thiệu người quen nha!',
          img: L(IMG['toan-canh']),
          nhan: 'MỞ BÁN MỚI',
          ten: 'Dãy lô góc ngay cổng khu',
          mo: 'Khách cũ giới thiệu được tặng phí công chứng.',
          nut: 'Xem bản đồ lô',
        },
        zbs: {
          ten: 'Ưu đãi giới thiệu cho anh Phong',
          mo: 'Cảm ơn anh đã tin chọn Kim Phát. Anh giới thiệu người quen mua lô sẽ nhận:',
          dong: [
            ['Mã giới thiệu', '**KIMPHAT2026**'],
            ['Ưu đãi', 'Người quen chiết khấu 1%, anh nhận quà tân gia'],
            ['Hạn dùng', '28/02/2027'],
          ],
          nut: 'Gửi cho người quen',
        },
      },
      tieuDe6: 'Hệ thống AI chatbot giúp tăng<br><span class="grad">tỷ lệ hẹn xem đất</span>',
      tinhNang: [
        ['AI tư vấn, chủ động mời xem đất', 'Lấy SĐT, giữ chỗ xe đưa đón'],
        ['Bám đuổi khách cân nhắc lâu', 'Gửi ảnh thực tế, khách đã cất nhà'],
        ['AI chăm sóc sau buổi xem', 'Gửi lại thông tin lô, cập nhật khu đất'],
        ['Bộ công cụ Remarketing FMM và ZBS', 'Khai thác lại dữ liệu khách cũ'],
        ['Gửi sự kiện Lead qua Meta CAPI', 'Hỗ trợ tối ưu quảng cáo Facebook'],
      ],

      chotDon: {
        nganh: 'bất động sản',
        nguoi: 'Chuyên viên tư vấn',
        chotLa: 'AI chốt đơn = lấy SĐT + hẹn xem đất',
        buoc: [
          { t: 'Chạy quảng cáo', d: 'Thu hút người đang tìm mua đất', icon: 'megaphone', own: 'Đơn vị chạy quảng cáo', mock: 'ad', img: L(IMG['dat-nen']), text: 'Đất nền sổ riêng từng lô 🏡', btn: 'Gửi tin nhắn' },
          { t: 'Bắt đầu chat', d: 'Hỏi mục đích mua, ngân sách', icon: 'chat', ai: true, mock: 'chat',
            msgs: [['kh', 'Đất nền giá sao em?'], ['ai', 'Dạ lô 5x20 từ 1,65 tỷ ạ. Anh mua để ở hay giữ tài sản ạ? 🏡']] },
          { t: 'Mời đi xem đất', d: 'Lấy SĐT, giữ chỗ xe đưa đón', icon: 'phone', ai: true, chot: true, mock: 'form', fields: ['Anh Phong · có 1,2 tỷ, cần vay', '0907 318 642'], ok: 'Đã giữ chỗ 29/11' },
          { t: 'Sale gọi xác nhận', d: 'Xác nhận điểm đón, gửi bản đồ lô', icon: 'call', mock: 'lich', ten: 'Đi xem đất Đức Hòa', gio: '08:00 · Chủ nhật 29/11', ok: 'Đã xác nhận lịch' },
          { t: 'Xem đất, xem sổ', d: 'Xem lô thực tế, sổ gốc', icon: 'users', mock: 'img', img: L(IMG['duong-noi-bo']), cap: 'Khách xem lô thực tế' },
          { t: 'Sale chốt cọc', d: 'Chọn lô, tính vay, ký cọc', icon: 'check', mock: 'img', img: L(IMG['bat-tay']), cap: '✓ Khách cọc lô B12' },
        ],
        vong: { t: 'Chăm sóc sau buổi xem & Remarketing', d: 'Gửi lại thông tin lô, cập nhật khu đất, ưu đãi thanh toán nhanh, lô mới mở bán' },
      },

      bamDuoi: {
        nhan: 'Vì sao bám đuổi của Preny đặc biệt', shopB: 'Đơn vị B',
        cmpSai: ['Khách im → gửi “Anh còn quan tâm đất nền không ạ?”', 'Không biết khách mua để làm gì, ngân sách bao nhiêu', 'Khách thấy phiền, bỏ qua tin nhắn'],
        cmpDung: ['Khách nhắn xong im → nhắc đúng nỗi lo của khách (thẻ <b>#datnen</b> từ quảng cáo)',
                  'Báo giá xong im → bám đuổi theo giá: ngân hàng hỗ trợ vay, chiết khấu (thẻ <b>#baogia</b>)',
                  'Đúng nhu cầu, đúng lý do im → khách quay lại giữ chỗ xem đất'],
        hoi: 'Đất nền giá sao em?',
        traLoiThuong: 'Dạ từ 1,65 tỷ/lô ạ.',
        nhacChung: 'Anh còn quan tâm đất nền không ạ? 😊',
        refImg: L(IMG['dat-nen']), refTen: 'Đất nền Đức Hòa · lô 5x20',
        vd1: {
          ten: 'Khách nhắn xong im',
          kh: 'Đất này có sổ chưa em? Sợ mua đất dự án lắm',
          ai: 'Dạ sổ riêng từng lô, 100% thổ cư ạ. Anh mua để ở hay giữ tài sản ạ?',
          tag: '🏷 #datnen', tagNote: 'thẻ từ quảng cáo · khách im 1 ngày',
          nhac: 'Anh Phong ơi, em gửi anh <b>chia sẻ của một anh khách</b> cũng sợ pháp lý, ra xem sổ gốc rồi mới mua 🏡 Cuối tuần có <b>xe đưa đón miễn phí</b> đi xem đất ạ.',
          dung: '🎯 Theo thẻ #datnen: nhắc đúng nỗi lo pháp lý',
          khach: 'CN này đi xem được ko e?',
        },
        vd2: {
          ten: 'Báo giá xong im',
          kh: 'Lô 5x20 bao nhiêu em?',
          ai: 'Dạ lô 5x20 thổ cư <b>từ 1,65 tỷ</b> ạ.',
          tag: '🏷 #baogia', tagNote: 'báo giá xong khách im 2 ngày',
          nhac: 'Anh ơi, phần thiếu anh vay được qua <b>ngân hàng liên kết</b>, tháng này thanh toán nhanh <b>chiết khấu 2%</b> ạ. Em giữ chỗ xe xem đất CN cho anh nha?',
          dung: '🎯 Theo thẻ #baogia: bám đuổi theo giá, đúng lý do khách im',
          khach: 'Ok giữ giúp a 2 chỗ',
        },
      },

      binhLuan: {
        post: '<b>Đất nền Đức Hòa</b> lô 5x20 thổ cư từ 1,65 tỷ · sổ riêng từng lô, xe đưa đón xem đất miễn phí 🏡',
        img: L(IMG['toan-canh']),
        kav: 'TL', kten: 'Ngô Thùy Linh', hoi: 'Lô góc còn không em? Giá bao nhiêu?',
        traLoi: 'Dạ chào chị Linh! Bên em vừa nhắn tin tư vấn chi tiết cho chị, chị xem tin nhắn nhé 💬',
        act2: 'Nhắn riêng, gửi bản đồ lô góc',
        nhan: 'Chào chị Linh! Dãy lô góc bên em còn <b>2 lô</b>, giá <b>từ 2,1 tỷ</b> ạ. Em gửi chị bản đồ phân lô, cuối tuần có xe đưa đón đi xem. Chị cho em xin SĐT để giữ chỗ nha!',
        sp: { ten: 'Lô góc 6x20 thổ cư', gia: 'từ 2,1 tỷ', img: L(IMG['khu-dan-cu']) },
        khach: 'Số mình 0938 274 195 nhé',
      },

      duLieu: {
        shopA: 'Đơn vị A',
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: cam kết lãi 30%/năm, vay 100%', 'Khách khiếu nại, đơn vị mất uy tín'],
        dung: ['Chỉ trả lời theo dữ liệu đơn vị cung cấp', 'Không chắc chắn → xin khách chờ, AI tạm dừng', 'Báo ngay chuyên viên vào trả lời'],
        hoi: 'Mua lô này có cam kết lãi 30%/năm không em? Ngân hàng cho vay 100% luôn hả?',
        aiSai: 'Dạ <b>cam kết lãi 30%/năm</b> ạ, ngân hàng <b>cho vay 100%</b> luôn anh 🥰',
        thucTe: '⚠ Thực tế: không ai cam kết được giá đất; mức vay do ngân hàng duyệt theo hồ sơ',
        gian: 'Ngân hàng chỉ duyệt vay 50%! Sao hôm trước nói vay 100%, còn cam kết lãi? 😠',
        cho: 'Dạ anh chờ em một chút để em kiểm tra chính xác thông tin cho mình nhé!',
        nv: 'Anh Tuấn · Chuyên viên tư vấn · người thật',
        nvTraLoi: 'Dạ em xin lỗi anh ạ. Mức vay do ngân hàng duyệt theo hồ sơ, bên em không cam kết lãi. Em tính lại phương án vay 50% và gửi anh 2 lô hợp ngân sách để anh chọn nhé!',
      },

      tags: {
        rows: [
          { ten: 'Lê Hoàng Phong', av: 'HP', kenh: 'fb', msg: 'Đất nền Đức Hòa giá sao em?', gio: '14:47',
            tags: [['FB Ads · Đất nền Đức Hòa', 'ng'], ['#datnen', 'qt'], ['#VayNganHang', 'qt'], ['Hẹn xem đất 29/11', 'ht']] },
          { ten: 'Ngô Thùy Linh', av: 'TL', kenh: 'fb', msg: 'Lô góc còn không em?', gio: '10:12',
            tags: [['Bình luận bài viết', 'ng'], ['#logoc', 'qt'], ['Đã cho SĐT', 'ht'], ['Gọi lần 1 ✓', 'sa']] },
          { ten: 'Trần Minh Khang', av: 'MK', kenh: 'tiktok', msg: 'Đất này cách Q.1 bao xa?', gio: '16:30',
            tags: [['TikTok · Video flycam', 'ng'], ['#dautu', 'qt'], ['Đã cho SĐT', 'ht'], ['Gọi lần 2 · không bắt máy', 'sa']] },
          { ten: 'Phan Thị Hồng', av: 'TH', kenh: 'zalo', msg: 'Có lô nào dưới 1,5 tỷ không?', gio: '09:05',
            tags: [['Zalo OA', 'ng'], ['#nganSachThap', 'qt'], ['Đang bám đuổi', 'ht']] },
          { ten: 'Võ Đức Thắng', av: 'ĐT', kenh: 'zalo', msg: 'Giới thiệu em trai mua lô bên cạnh', gio: 'Hôm qua',
            tags: [['Zalo · Khách cũ', 'ng'], ['#gioithieu', 'qt'], ['Đã cọc', 'ht'], ['Đã kết nối Zalo', 'za']] },
        ],
        chanDung: {
          ten: 'Lê Hoàng Phong', av: 'HP', kenh: 'fb', sub: 'Facebook Messenger · 0907 318 642',
          nhom: [
            ['Nguồn khách', [['Facebook Ads', 'ng'], ['Bài: Đất nền Đức Hòa', 'ng']]],
            ['Quan tâm', [['#datnen', 'qt'], ['#VayNganHang', 'qt']]],
            ['Hành trình', [['Nhắn tin 18/11', 'ht'], ['Cho SĐT 23/11', 'ht'], ['Hẹn xem đất 29/11', 'ht']]],
            ['Sale gọi', [['Anh Tuấn · lần 1 ✓', 'sa']]],
            ['Kết nối', [['Đã kết nối Zalo', 'za'], ['Khách mới · L1', 'lv']]],
          ],
          ghiChu: '34 tuổi, ở Bình Tân, có sẵn 1,2 tỷ, muốn vay thêm. Mua để sau cất nhà cho ba mẹ, sợ đất chưa có sổ, sợ khu vắng. Hẹn xem đất 8h CN 29/11, 2 người, đón vòng xoay An Lạc.',
        },
      },

      chotLai: [
        ['KHÁCH HÀNG', ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến']],
        ['AI CHATBOT', ['Phản hồi nhanh tức thì', 'Hỏi đúng mục đích, ngân sách', 'Không hứa lên giá', 'Lấy SĐT, hẹn xem đất']],
        ['BÁM ĐUỔI', ['Gửi 5 tin nhắn trong 7 ngày: ảnh thực tế, khách đã mua, pháp lý, quy trình']],
        ['XEM ĐẤT', ['Sale đưa khách xem lô, xem sổ gốc', 'Tính vay, chốt cọc tại chỗ']],
        ['GIỚI THIỆU', ['Gửi lô mới mở bán, ưu đãi khách giới thiệu người quen qua FB và Zalo']],
      ],
    },
  };
})();
