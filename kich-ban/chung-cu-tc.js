/* Kịch bản: BẤT ĐỘNG SẢN CHUNG CƯ — BẢN TRÌNH CHIẾU, nhóm CÂN NHẮC NHIỀU. Làm 20/11/2026 theo người dùng:
   "làm thêm 1 ngành bất động sản chung cư (cân nhắc nhiều)". Cùng mạch với đất nền (bat-dong-san-tc.js).
   "AI chốt đơn = lấy tên + SĐT + hẹn đi xem căn hộ": chuyên viên đón khách ở sảnh, xem căn mẫu, căn thực tế, tính phương án vay;
   gửi sự kiện Lead (không gửi Purchase khi khách chưa cọc).
   Demo chat 1 khách từ đầu tới cuối (khớp Bài 2 video ngang, demo/bai2/kich-ban-chung-cu-tc.js):
   chị Mai Anh bấm quảng cáo căn hộ 2PN Long Biên, hỏi giá → AI báo căn 2PN 68m² từ 3,6 tỷ, gửi đúng ảnh quảng cáo
   → hỏi mua để ở hay cho thuê, mấy phòng ngủ, ngân sách → 31 tuổi, đang thuê nhà, có 1,5 tỷ muốn vay thêm, có bé 4 tuổi,
   hỏi phí quản lý, trường cho con, trả góp mỗi tháng bao nhiêu → AI: sổ hồng lâu dài, phí quản lý 12.000đ/m², mầm non trong khu,
   ngân hàng hỗ trợ vay, KHÔNG đưa con số trả góp cố định (tùy mức vay, lãi suất ngân hàng duyệt) → mời xem căn cuối tuần, xin tên + SĐT
   → khách im → bám đuổi 5 tin (ảnh thực tế căn 2PN, feedback cư dân, tiện ích + pháp lý, quy trình xem nhà, mời giữ lịch T7)
   → khách hẹn 9h30 T7 28/11 → chuyển chị Hương · Chuyên viên tư vấn
   → sau buổi xem: gửi lại thông tin 2 căn đã xem; cập nhật tiện ích; ưu đãi tháng 12.
   Không có tin nhắc trước giờ xem nhà (Preny chưa có tính năng này).
   Tên đơn vị, dự án, giá, phí, khách, SĐT, feedback, nhân viên: dữ liệu minh họa. Ảnh: Unsplash (ảnh thật, không phải dự án của khách). */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'toa-nha': '1694694314752-14a25e3cfdec',     // tòa căn hộ, hồ bơi, hàng dừa (ảnh quảng cáo)
    'toan-canh': '1768364635394-a3832eb6b815',   // toàn cảnh khu đô thị nhìn từ trên cao
    'ven-ho': '1768364635456-b2b6f11e8013',      // các tòa căn hộ cạnh hồ
    'phong-khach': '1758448511322-8bfc73daf606', // phòng khách căn hộ, cửa kính lớn
    'phong-khach-2': '1583847268964-b28dc8f51f92', // phòng khách có nội thất trang trí
    'phong-ngu': '1560448075-57d0285fc59b',      // phòng ngủ master
    'phong-be': '1652882860938-f90aa298e644',    // phòng ngủ trẻ em
    'bep': '1759691554646-8155da2172ee',         // bếp căn hộ
    'ban-cong': '1665249934445-1de680641f50',    // ban công nhìn ra tòa nhà
    'ho-boi': '1642651460396-b724a1a98485',      // hồ bơi dưới chân tòa
    'san-choi': '1787048884940-19b151fc48ea',    // sân chơi trẻ em trong khu
    'tu-van': '1650784854382-6d3b15e07b94',      // chuyên viên tư vấn cầm máy tính bảng
    'bat-tay': '1781229771042-2a859f8f8022',     // bắt tay bên mô hình nhà
    'chia-khoa': '1744782351841-9cc6b86a5add',   // chìa khóa nhà
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    badge: 'AI CHATBOT · CĂN HỘ CHUNG CƯ',
    shop: { name: 'Căn Hộ Phúc An', initials: 'PA' },
    headline: { pre: 'AI chatbot tư vấn căn hộ và', em: 'hẹn khách đi xem nhà' },
    sub: 'Hỏi đúng nhu cầu ở, ngân sách; nói rõ pháp lý, phí quản lý, không hứa con số vay; xin SĐT, giữ lịch xem căn rồi chuyển ngay cho sale.',
    cta: 'Dùng thử miễn phí tại **preny.ai**\nHotline **0389 647 778**',
    speed: 1.13,
    timing: { read0: 1000, readPerChar: 28, readMax: 4500, type0: 800, typePerChar: 3, typeMax: 1500, fastType: 500,
              featureHold: 1400, sepHold: 1100, cardHold: 4000, introCard: 250 },

    images: Object.fromEntries(Object.entries(IMG).map(([k, id]) => [k, U(id)])),

    // Cột trái demo ngang (dùng khi xuất video khung ngang), đúng thứ tự diễn trong steps
    features: [
      { title: 'AI tư vấn đúng nhu cầu mua căn hộ', desc: 'Trả lời ngay, cả lúc nửa đêm.',
        kws: ['Báo giá căn, gửi đúng ảnh quảng cáo', 'Hỏi để ở hay cho thuê, mấy phòng ngủ, ngân sách', 'Nói rõ pháp lý, phí quản lý, không hứa con số vay'] },
      { title: 'Bám đuổi khách cân nhắc lâu', desc: 'Dự án nằm đầu danh sách khi khách chọn.',
        kws: ['Khách chưa cho SĐT: tự gắn thẻ #canho2pn', 'Ảnh thực tế căn, cư dân đang ở', 'Tiện ích, sổ hồng, ngân hàng hỗ trợ vay', 'Quy trình rõ, mời giữ lịch xem'] },
      { title: 'AI xin SĐT, hẹn đi xem nhà', desc: 'Khách nóng chuyển ngay cho sale.',
        kws: ['Cho khách lý do để cho số: giữ khung giờ xem căn', 'Lưu khách, gắn thẻ ngân sách, nhu cầu', 'Chuyển chị Hương · Chuyên viên tư vấn'] },
      { title: 'AI chăm sóc sau buổi xem', desc: 'Khách quay lại chốt cọc.',
        kws: ['Gửi lại thông tin căn đã xem', 'Cập nhật tiện ích, cư dân', 'Ưu đãi tháng 12'] },
    ],

    steps: [
      { intro: true, hold: 1800 },

      /* ---- 1. Tư vấn: giá căn + ảnh quảng cáo → nhu cầu, ngân sách → hỏi phí, trường, trả góp → mời đi xem nhà ---- */
      { feature: 1 },
      { sep: 'Khách bấm Gửi tin nhắn từ quảng cáo Facebook', style: 'time', hold: 800 },
      { kh: 'Căn 2 phòng ngủ giá sao em?' },
      { ai: 'Dạ chào chị Mai Anh, căn **2PN 68m²** bên em giá **từ 3,6 tỷ**, nhà đã hoàn thiện, **nhận ở ngay** ạ.', fast: true, meta: '⚡ Preny AI trả lời sau 2 giây', kw: 0 },
      { aiImg: 'toa-nha' },
      { ai: 'Chị mua để **ở** hay **cho thuê**, nhà mình mấy người, ngân sách khoảng bao nhiêu ạ, để em lọc căn hợp với chị?' },
      { kh: 'c 31t, đang thuê nhà, 2 vc với bé 4 tuổi. có 1tỷ5 muốn vay thêm. phí quản lý bn, gần trường cho bé ko? vay thì tháng trả bn e?' },
      { ai: 'Dạ căn bên em **sổ hồng lâu dài**, phí quản lý **12.000đ/m²/tháng**, căn 68m² khoảng 816.000đ ạ. Trong khu có **trường mầm non**, sân chơi cho bé ngay dưới tòa.', kw: 1 },
      { ai: 'Phần thiếu chị vay qua **ngân hàng liên kết** được ạ. Tháng trả bao nhiêu thì tùy mức vay và lãi suất ngân hàng duyệt, em không dám báo số chung chung. Cuối tuần chị qua **xem căn thực tế**, chuyên viên tính phương án vay riêng cho mình. Chị cho em xin **tên và SĐT** để giữ lịch nha 🏢', kw: 2 },
      { seen: true },

      /* ---- 2. Khách im → bám đuổi 5 tin trong 7 ngày ---- */
      { feature: 2 },
      { sep: 'Khách chưa để lại SĐT… · AI gắn thẻ #canho2pn #VayNganHang', style: 'silent', kw: 0, hold: 1600 },
      { sep: '— 15 phút sau —' },
      { ai: 'Chị Mai Anh ơi, em gửi chị **ảnh thực tế căn 2PN** bên em chụp tuần này nha 🏢', meta: '🏢 Tự động · Bám đuổi', kw: 1 },
      { aiImgs: [{ img: 'phong-khach', label: 'Phòng khách' }, { img: 'phong-ngu', label: 'Phòng ngủ master' },
                 { img: 'bep', label: 'Bếp' }, { img: 'ban-cong', label: 'Ban công' }], hold: 3200 },
      { sep: '— 1 ngày sau —' },
      { card: {
          tag: '⭐ Feedback cư dân',
          intro: 'Đây là chia sẻ của một chị cư dân chuyển về ở năm ngoái ạ 💬',
          lines: ['“Nhà mình cũng có 2 bé nên mình chọn vì có mầm non ngay trong khu. Hầm xe rộng, chiều xuống sân chơi với con, không phải chạy đi đâu.”', 'Chị Thu Trang, cư dân tòa A'],
        }, meta: '🏢 Tự động · Bám đuổi', kw: 1, hold: 4200 },
      { sep: '— 1 ngày sau —' },
      { card: {
          tag: '✓ Căn Hộ Phúc An',
          intro: 'Tiện ích và pháp lý bên em thế này để chị yên tâm ạ:',
          lines: ['**Sổ hồng lâu dài**, xem sổ mẫu tại văn phòng', '**Mầm non, hồ bơi, sân chơi** trong khu, hầm xe 2 tầng', '**Ngân hàng liên kết** hỗ trợ vay, tùy hồ sơ duyệt'],
        }, meta: '🏢 Tự động · Bám đuổi', kw: 2, hold: 4000 },
      { sep: '— 1 ngày sau —' },
      { ai: 'Buổi xem nhà bên em là **đón chị ở sảnh → xem căn mẫu → xem căn thực tế → tính phương án vay**, khoảng 1 tiếng. Chị ưng mới cọc, không ép ạ 😊', meta: '🏢 Tự động · Bám đuổi', kw: 3 },
      { sep: '— 2 ngày sau —' },
      { ai: 'Thứ 7 ngày 28/11 bên em còn vài khung giờ xem căn, chị muốn em giữ lịch cho cả nhà mình không ạ?', meta: '🏢 Tự động · Bám đuổi', kw: 3 },
      { kh: 'T7 này 2 vc với bé qua xem đc, buổi sáng nha e' },

      /* ---- 3. Khách quay lại → xin tên + SĐT, giữ lịch → chuyển sale ---- */
      { feature: 3 },
      { ai: 'Dạ được ạ, em giữ khung **9h30 sáng Thứ 7 28/11** cho nhà mình. Chị cho em xin **tên và SĐT** để chuyên viên đón chị ở sảnh nha 🏢', fast: true, kw: 0 },
      { kh: 'Mai Anh, 0912 846 307 nha e' },
      { card: {
          tag: '✓ Đã giữ lịch xem căn hộ · chị Mai Anh', ok: true,
          lines: ['Thời gian: **9h30 sáng Thứ 7 28/11/2026**', 'Đón tại: **sảnh tòa A** · 2 người lớn, 1 bé', 'Xem căn mẫu và **căn 2PN thực tế**', 'Tính phương án vay riêng, **không ép cọc**'],
        }, meta: '✓ Đã lưu khách, gắn thẻ #canho2pn #VayNganHang', kw: 1, hold: 4200 },
      { ai: '**Chị Hương bên tư vấn** sẽ gọi chị xác nhận và gửi trước mặt bằng căn 2PN nha. Chị mang theo CCCD, chị Hương tính giúp phương án vay luôn ạ 🏢', meta: '✓ Đã chuyển chị Hương · Chuyên viên tư vấn', kw: 2, hold: 1500 },

      /* ---- 4. Sau buổi xem: gửi lại thông tin căn → cập nhật tiện ích → ưu đãi tháng 12 ---- */
      { feature: 4 },
      { sep: '— Tối 28/11 · sau buổi xem nhà —' },
      { ai: 'Chị Mai Anh ơi, em gửi lại chị thông tin **căn A-1208 và B-0915** chị xem sáng nay: A-1208 2PN 68m² view hồ **3,72 tỷ**, B-0915 2PN 65m² **3,58 tỷ** ạ. Phương án vay chị Hương đã gửi qua Zalo cho chị nha 🏢', meta: '🏢 Tự động · Chăm sóc sau buổi xem', kw: 0 },
      { kh: 'Nhà c ưng căn A-1208, để c bàn thêm với ông xã' },
      { sep: '— 1 tuần sau —' },
      { ai: 'Em cập nhật chị: tháng này khu bên em **mở thêm phòng gym cư dân**, sân chơi cho bé đã **lắp thêm cầu trượt** ạ. Căn A-1208 vẫn còn cho chị nha.', meta: '📅 Tự động · Cập nhật dự án', kw: 1 },
      { kh: 'Ok e, cuối tuần c qua cọc' },
      { ai: 'Dạ khách ký hợp đồng trong tháng 12 được **miễn 1 năm phí quản lý** và **tặng gói rèm cửa** ạ. Em báo chị Hương chuẩn bị hồ sơ cho chị nha 🏢', kw: 2 },
      // Không có { end: true }: bấm → thêm một lần là sang thẳng slide kế.
    ],

    /* ===== Nội dung slide trình chiếu (trinh-chieu.html). Slide thống kê dùng số minh họa (deck.dashboard). ===== */
    deck: {
      demoDoc: {
        khach: 'Mai Anh',
        sanPham: 'Căn hộ 2PN 68m² · Long Biên',
        ngay: '18/11/2026',
        gio: '20:12',
        binhLuan: [
          { ten: 'Đỗ Minh Quân', noiDung: 'Căn 3PN còn không em?', traLoi: 'Dạ bên em vừa nhắn tin tư vấn chi tiết cho anh, anh xem inbox nha!' },
        ],
        post: {
          tieuDe: 'CĂN HỘ 2PN LONG BIÊN · NHẬN NHÀ Ở NGAY 🏢',
          dong: ['Căn 2PN 68m² từ 3,6 tỷ', 'Sổ hồng lâu dài', 'Mầm non, hồ bơi, sân chơi trong khu', 'Ngân hàng hỗ trợ vay'],
          anh: ['toa-nha', 'phong-khach', 'phong-ngu', 'ho-boi'],
        },
        quangCao: {
          tieuDe: 'CĂN HỘ 2PN LONG BIÊN · NHẬN NHÀ Ở NGAY',
          mo: 'Căn 2PN 68m² từ 3,6 tỷ, sổ hồng lâu dài, mầm non và hồ bơi ngay trong khu. Cuối tuần mời xem căn thực tế.',
          anh: 'toa-nha', nhan: 'MESSENGER', dong: 'Tư vấn 24/7 · Giữ lịch xem căn hộ', nut: 'Gửi tin nhắn',
        },
        ket: {
          tieuDe: 'PRENY AI – TƯ VẤN CĂN HỘ, HẸN KHÁCH ĐI XEM NHÀ',
          y: ['Trả lời ngay 24/7', 'Hỏi đúng nhu cầu ở, ngân sách', 'Không hứa con số vay', 'Lấy SĐT, giữ lịch xem căn',
              'Bám đuổi 5 tin trong 7 ngày', 'Báo ngay sale dự án', 'Chăm sóc sau buổi xem qua Zalo', 'Meta CAPI Lead'],
        },
      },
      dashboard: [
        { ten: 'Căn hộ <span class="grad">2 phòng ngủ</span>', den: '20/07/2026', khach: 21, tyLe: 0.57 },
        { ten: 'Căn 3PN <span class="grad">view hồ</span>', den: '24/08/2026', khach: 12, tyLe: 0.54 },
        { ten: 'Studio <span class="grad">mua để cho thuê</span>', den: '29/09/2026', khach: 9, tyLe: 0.55 },
      ],
      chatbot: {
        y: [
          ['Trả lời ngay tức thì, 24/7', 'Khách nhắn lúc nào, AI trả lời sau 2 giây'],
          ['Tư vấn đúng nhu cầu', 'Hỏi để ở hay cho thuê, mấy người, ngân sách'],
          ['Chốt đơn = lấy SĐT + hẹn xem nhà', 'Giữ khung giờ xem căn, chuyển sale'],
          ['Hiểu hình ảnh khách gửi', 'Khách gửi ảnh căn hộ, AI nói rõ bàn giao gì'],
        ],
        chat: [
          { ref: { img: L(IMG['toa-nha']), ten: 'Căn hộ 2PN 68m² · Long Biên' } },
          { kh: 'có 1tỷ5 muốn vay thêm, phí quản lý bn e?' },
          {
            ai: 'Dạ căn 2PN 68m² **từ 3,6 tỷ** ạ. **Sổ hồng lâu dài**, phí quản lý **12.000đ/m²/tháng**, phần thiếu chị vay qua **ngân hàng liên kết** 🏢',
            meta: '⚡ Preny AI trả lời sau 2 giây',
          },
          { kh: 'vay thì tháng trả bn e?' },
          {
            ai: 'Dạ tùy mức vay và lãi suất ngân hàng duyệt ạ, em không dám báo số chung chung. Chị qua **xem căn thực tế**, chuyên viên tính riêng cho mình nha. Chị cho em xin **tên, SĐT** để giữ lịch ạ.',
          },
          { kh: 'Mai Anh - 0912 846 307. sáng T7 28/11 qua đc ko e?' },
          { ai: 'Dạ được ạ! Em giữ khung **9h30 sáng T7 28/11** cho nhà mình, chị Hương bên tư vấn gọi xác nhận liền nha ⚡' },
          { don: true },
          { ok: true },
        ],
        lead: {
          ten: 'Chị Mai Anh',
          sdt: '0912 846 307',
          nhuCau: '31 tuổi, đang thuê nhà · có **1,5 tỷ**, muốn **vay thêm** · 2 vợ chồng, bé 4 tuổi · cần trường mầm non gần nhà',
          the: [['FB Ads · Căn hộ 2PN Long Biên', 'ng'], ['#canho2pn', 'qt'], ['#VayNganHang', 'qt'], ['Đã cho SĐT', 'ht']],
          lichNhan: 'Lịch xem căn hộ',
          lich: ['Đón tại sảnh tòa A', '09:30 · Thứ 7 28/11'],
          sale: 'Chị Hương · Chuyên viên tư vấn',
          nut: 'Chuyển cho sale',
          xong: 'Đã chuyển cho chị Hương',
          okTieuDe: 'Đã giữ lịch xem căn 28/11',
        },
        anh: {
          img: L(IMG['phong-khach-2']),
          nhan: 'Khách gửi ảnh căn hộ trên mạng',
          kh: 'Căn 2PN bàn giao có được như hình này ko e?',
          ai: 'Ảnh chị gửi là căn **đã có nội thất trang trí** ạ. Căn bên em bàn giao **cơ bản**: sàn gỗ, tủ bếp, điều hòa, thiết bị vệ sinh. Sofa, rèm, tranh chủ nhà tự sắm. Em gửi chị ảnh căn bàn giao thực tế để chị so nha.',
          pill: '🔍 AI nhìn ảnh, nói rõ căn bàn giao gồm những gì',
        },
      },
      afterSale: {
        y1: 'AI gửi tiếp 5 dịch vụ cho khách vừa cọc',
        y2: 'Căn mới mở bán, ưu đãi khách giới thiệu',
        gio: 'Sale vừa chốt cọc căn A-1208 cho chị Mai Anh',
        don: { ma: '#PA2811', phi: 'miễn 1 năm phí quản lý', sp: [{ ten: 'Căn hộ A-1208 · 2PN 68m² view hồ', sl: 1, dv: 'căn', gia: 3720000000 }] },
        loi: 'Chúc mừng chị Mai Anh đã chọn được căn ưng ý 🏢 Cư dân mới bên em hay cần thêm mấy dịch vụ này ạ:',
        sp: [
          { img: L(IMG['phong-be']), ten: 'Gói nội thất phòng ngủ cho bé', gia: 35000000, nut: 'Thêm vào' },
          { img: L(IMG['phong-khach-2']), ten: 'Nội thất trọn gói căn 2PN', gia: 180000000, nut: 'Xem thêm' },
          { img: L(IMG['bep']), ten: 'Nâng cấp thiết bị bếp', gia: 45000000, nut: 'Xem thêm' },
          { img: L(IMG['chia-khoa']), ten: 'Dịch vụ sang tên sổ hồng trọn gói', gia: 5000000, nut: 'Đăng ký' },
          { img: L(IMG['ven-ho']), ten: 'Căn 3PN 92m² view hồ', gia: 4900000000, nut: 'Xem căn' },
        ],
        khach: 'Lấy thêm c gói phòng ngủ cho bé nha e',
        pill: '🛍 Khách thêm ngay: đơn tăng từ 3.720.000.000đ lên 3.755.000.000đ',
        fmm: {
          sep: '1 tháng sau · tin Facebook FMM',
          chao: 'Chào chị Mai Anh 👋 Phúc An vừa mở bán thêm tầng cao tòa B view hồ, gửi chị xem trước để giới thiệu người quen nha!',
          img: L(IMG['ven-ho']),
          nhan: 'MỞ BÁN MỚI',
          ten: 'Tầng cao tòa B · view hồ',
          mo: 'Cư dân giới thiệu được tặng 6 tháng phí quản lý.',
          nut: 'Xem mặt bằng',
        },
        zbs: {
          ten: 'Ưu đãi giới thiệu cho chị Mai Anh',
          mo: 'Cảm ơn chị đã chọn Phúc An làm nhà. Chị giới thiệu người quen mua căn sẽ nhận:',
          dong: [
            ['Mã giới thiệu', '**PHUCAN2026**'],
            ['Ưu đãi', 'Người quen chiết khấu 1%, chị nhận 6 tháng phí quản lý'],
            ['Hạn dùng', '28/02/2027'],
          ],
          nut: 'Gửi cho người quen',
        },
      },
      tieuDe6: 'Hệ thống AI chatbot giúp tăng<br><span class="grad">tỷ lệ hẹn xem căn hộ</span>',
      tinhNang: [
        ['AI tư vấn, chủ động mời xem nhà', 'Lấy SĐT, giữ khung giờ xem căn'],
        ['Bám đuổi khách cân nhắc lâu', 'Gửi ảnh thực tế, cư dân đang ở'],
        ['AI chăm sóc sau buổi xem', 'Gửi lại thông tin căn, cập nhật tiện ích'],
        ['Bộ công cụ Remarketing FMM và ZBS', 'Khai thác lại dữ liệu khách cũ'],
        ['Gửi sự kiện Lead qua Meta CAPI', 'Hỗ trợ tối ưu quảng cáo Facebook'],
      ],

      chotDon: {
        nganh: 'căn hộ chung cư',
        nguoi: 'Chuyên viên tư vấn',
        chotLa: 'AI chốt đơn = lấy SĐT + hẹn xem nhà',
        buoc: [
          { t: 'Chạy quảng cáo', d: 'Thu hút người đang tìm mua căn hộ', icon: 'megaphone', own: 'Đơn vị chạy quảng cáo', mock: 'ad', img: L(IMG['toa-nha']), text: 'Căn 2PN nhận nhà ở ngay 🏢', btn: 'Gửi tin nhắn' },
          { t: 'Bắt đầu chat', d: 'Hỏi nhu cầu ở, ngân sách', icon: 'chat', ai: true, mock: 'chat',
            msgs: [['kh', 'Căn 2PN giá sao em?'], ['ai', 'Dạ căn 68m² từ 3,6 tỷ ạ. Chị mua để ở hay cho thuê ạ? 🏢']] },
          { t: 'Mời đi xem nhà', d: 'Lấy SĐT, giữ khung giờ xem', icon: 'phone', ai: true, chot: true, mock: 'form', fields: ['Chị Mai Anh · có 1,5 tỷ, cần vay', '0912 846 307'], ok: 'Đã giữ lịch 28/11' },
          { t: 'Sale gọi xác nhận', d: 'Xác nhận giờ, gửi mặt bằng căn', icon: 'call', mock: 'lich', ten: 'Xem căn hộ 2PN', gio: '09:30 · Thứ 7 28/11', ok: 'Đã xác nhận lịch' },
          { t: 'Xem căn thực tế', d: 'Xem căn mẫu, căn thực tế', icon: 'users', mock: 'img', img: L(IMG['phong-khach']), cap: 'Khách xem căn thực tế' },
          { t: 'Sale chốt cọc', d: 'Chọn căn, tính vay, ký cọc', icon: 'check', mock: 'img', img: L(IMG['bat-tay']), cap: '✓ Khách cọc căn A-1208' },
        ],
        vong: { t: 'Chăm sóc sau buổi xem & Remarketing', d: 'Gửi lại thông tin căn, cập nhật tiện ích, ưu đãi tháng 12, căn mới mở bán' },
      },

      bamDuoi: {
        nhan: 'Vì sao bám đuổi của Preny đặc biệt', shopB: 'Đơn vị B',
        cmpSai: ['Khách im → gửi “Chị còn quan tâm căn hộ không ạ?”', 'Không biết khách mua để ở hay cho thuê, ngân sách bao nhiêu', 'Khách thấy phiền, bỏ qua tin nhắn'],
        cmpDung: ['Khách nhắn xong im → nhắc đúng nỗi lo của khách (thẻ <b>#canho2pn</b> từ quảng cáo)',
                  'Báo giá xong im → bám đuổi theo giá: ngân hàng hỗ trợ vay, ưu đãi phí quản lý (thẻ <b>#baogia</b>)',
                  'Đúng nhu cầu, đúng lý do im → khách quay lại giữ lịch xem căn'],
        hoi: 'Căn 2 phòng ngủ giá sao em?',
        traLoiThuong: 'Dạ từ 3,6 tỷ ạ.',
        nhacChung: 'Chị còn quan tâm căn hộ không ạ? 😊',
        refImg: L(IMG['toa-nha']), refTen: 'Căn hộ 2PN 68m² · Long Biên',
        vd1: {
          ten: 'Khách nhắn xong im',
          kh: 'Nhà có bé nhỏ, trong khu có trường không em?',
          ai: 'Dạ trong khu có trường mầm non và sân chơi ngay dưới tòa ạ. Chị mua để ở hay cho thuê ạ?',
          tag: '🏷 #canho2pn', tagNote: 'thẻ từ quảng cáo · khách im 1 ngày',
          nhac: 'Chị Mai Anh ơi, em gửi chị <b>chia sẻ của một chị cư dân</b> có 2 bé, chọn bên em vì có mầm non trong khu 🏢 Thứ 7 này chị qua <b>xem căn thực tế</b> nha.',
          dung: '🎯 Theo thẻ #canho2pn: nhắc đúng nỗi lo trường cho con',
          khach: 'T7 này qua xem được ko e?',
        },
        vd2: {
          ten: 'Báo giá xong im',
          kh: 'Căn 2PN bao nhiêu em?',
          ai: 'Dạ căn 2PN 68m² <b>từ 3,6 tỷ</b> ạ.',
          tag: '🏷 #baogia', tagNote: 'báo giá xong khách im 2 ngày',
          nhac: 'Chị ơi, phần thiếu chị vay được qua <b>ngân hàng liên kết</b>, ký trong tháng 12 <b>miễn 1 năm phí quản lý</b> ạ. Em giữ lịch xem căn T7 cho chị nha?',
          dung: '🎯 Theo thẻ #baogia: bám đuổi theo giá, đúng lý do khách im',
          khach: 'Ok giữ giúp c buổi sáng',
        },
      },

      binhLuan: {
        post: '<b>Căn hộ 2PN Long Biên</b> 68m² từ 3,6 tỷ · sổ hồng lâu dài, mầm non và hồ bơi trong khu 🏢',
        img: L(IMG['ho-boi']),
        kav: 'MQ', kten: 'Đỗ Minh Quân', hoi: 'Căn 3PN còn không em? Giá bao nhiêu?',
        traLoi: 'Dạ chào anh Quân! Bên em vừa nhắn tin tư vấn chi tiết cho anh, anh xem tin nhắn nhé 💬',
        act2: 'Nhắn riêng, gửi mặt bằng căn 3PN',
        nhan: 'Chào anh Quân! Căn 3PN 92m² view hồ bên em còn <b>3 căn</b>, giá <b>từ 4,9 tỷ</b> ạ. Em gửi anh mặt bằng căn, cuối tuần anh qua xem thực tế nha. Anh cho em xin SĐT để giữ lịch ạ!',
        sp: { ten: 'Căn 3PN 92m² view hồ', gia: 'từ 4,9 tỷ', img: L(IMG['ven-ho']) },
        khach: 'Số mình 0936 512 748 nhé',
      },

      duLieu: {
        shopA: 'Đơn vị A',
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: cam kết cho thuê 10%/năm, vay 90%', 'Khách khiếu nại, đơn vị mất uy tín'],
        dung: ['Chỉ trả lời theo dữ liệu đơn vị cung cấp', 'Không chắc chắn → xin khách chờ, AI tạm dừng', 'Báo ngay chuyên viên vào trả lời'],
        hoi: 'Mua căn này có cam kết cho thuê lại 10%/năm không em? Ngân hàng cho vay 90% luôn hả?',
        aiSai: 'Dạ <b>cam kết cho thuê 10%/năm</b> ạ, ngân hàng <b>cho vay 90%</b> luôn chị 🥰',
        thucTe: '⚠ Thực tế: dự án không có chương trình cam kết thuê; mức vay do ngân hàng duyệt theo hồ sơ',
        gian: 'Ngân hàng chỉ duyệt vay 60%! Sao hôm trước nói vay 90%, còn cam kết cho thuê? 😠',
        cho: 'Dạ chị chờ em một chút để em kiểm tra chính xác thông tin cho mình nhé!',
        nv: 'Chị Hương · Chuyên viên tư vấn · người thật',
        nvTraLoi: 'Dạ em xin lỗi chị ạ. Mức vay do ngân hàng duyệt theo hồ sơ, bên em không có cam kết cho thuê. Em tính lại phương án vay 60% và gửi chị 2 căn hợp ngân sách để chị chọn nhé!',
      },

      tags: {
        rows: [
          { ten: 'Nguyễn Mai Anh', av: 'MA', kenh: 'fb', msg: 'Căn 2 phòng ngủ giá sao em?', gio: '20:13',
            tags: [['FB Ads · Căn hộ 2PN Long Biên', 'ng'], ['#canho2pn', 'qt'], ['#VayNganHang', 'qt'], ['Hẹn xem căn 28/11', 'ht']] },
          { ten: 'Đỗ Minh Quân', av: 'MQ', kenh: 'fb', msg: 'Căn 3PN còn không em?', gio: '10:12',
            tags: [['Bình luận bài viết', 'ng'], ['#canho3pn', 'qt'], ['Đã cho SĐT', 'ht'], ['Gọi lần 1 ✓', 'sa']] },
          { ten: 'Lê Thanh Tùng', av: 'TT', kenh: 'tiktok', msg: 'Studio cho thuê được bao nhiêu/tháng?', gio: '16:30',
            tags: [['TikTok · Video căn mẫu', 'ng'], ['#chothue', 'qt'], ['Đã cho SĐT', 'ht'], ['Gọi lần 2 · không bắt máy', 'sa']] },
          { ten: 'Phạm Thu Hà', av: 'TH', kenh: 'zalo', msg: 'Có căn nào dưới 3 tỷ không?', gio: '09:05',
            tags: [['Zalo OA', 'ng'], ['#nganSachThap', 'qt'], ['Đang bám đuổi', 'ht']] },
          { ten: 'Vũ Đức Anh', av: 'ĐA', kenh: 'zalo', msg: 'Giới thiệu em gái mua căn tầng 10', gio: 'Hôm qua',
            tags: [['Zalo · Khách cũ', 'ng'], ['#gioithieu', 'qt'], ['Đã cọc', 'ht'], ['Đã kết nối Zalo', 'za']] },
        ],
        chanDung: {
          ten: 'Nguyễn Mai Anh', av: 'MA', kenh: 'fb', sub: 'Facebook Messenger · 0912 846 307',
          nhom: [
            ['Nguồn khách', [['Facebook Ads', 'ng'], ['Bài: Căn hộ 2PN Long Biên', 'ng']]],
            ['Quan tâm', [['#canho2pn', 'qt'], ['#VayNganHang', 'qt']]],
            ['Hành trình', [['Nhắn tin 18/11', 'ht'], ['Cho SĐT 23/11', 'ht'], ['Hẹn xem căn 28/11', 'ht']]],
            ['Sale gọi', [['Chị Hương · lần 1 ✓', 'sa']]],
            ['Kết nối', [['Đã kết nối Zalo', 'za'], ['Khách mới · L1', 'lv']]],
          ],
          ghiChu: '31 tuổi, đang thuê nhà, có sẵn 1,5 tỷ, muốn vay thêm. 2 vợ chồng, bé 4 tuổi, cần trường mầm non gần nhà, hỏi phí quản lý. Hẹn xem căn 9h30 T7 28/11, đón ở sảnh tòa A.',
        },
      },

      chotLai: [
        ['KHÁCH HÀNG', ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến']],
        ['AI CHATBOT', ['Phản hồi nhanh tức thì', 'Hỏi đúng nhu cầu ở, ngân sách', 'Không hứa con số vay', 'Lấy SĐT, hẹn xem nhà']],
        ['BÁM ĐUỔI', ['Gửi 5 tin nhắn trong 7 ngày: ảnh thực tế, cư dân, tiện ích, quy trình']],
        ['XEM NHÀ', ['Sale đón khách xem căn mẫu, căn thực tế', 'Tính phương án vay, chốt cọc']],
        ['GIỚI THIỆU', ['Gửi căn mới mở bán, ưu đãi cư dân giới thiệu người quen qua FB và Zalo']],
      ],
    },
  };
})();
