/* Kịch bản: DỊCH VỤ TỔ CHỨC SỰ KIỆN — BẢN TRÌNH CHIẾU, nhóm CÂN NHẮC NHIỀU. Làm 26/11/2026 theo người dùng:
   "thêm ngành kinh doanh dịch vụ chạy sự kiện (cân nhắc nhiều)".
   "AI chốt đơn = lấy tên + SĐT + hẹn gặp tư vấn": không lên đơn tự động; chuyên viên sự kiện qua văn phòng khách gặp 30 phút,
   mang phương án chủ đề, rồi mới ký hợp đồng; gửi sự kiện Lead (không gửi Purchase khi khách chưa ký hợp đồng).
   Demo chat 1 khách từ đầu tới cuối (khớp Bài 2 video ngang, demo/bai2/kich-ban-to-chuc-su-kien-tc.js):
   chị Hương phòng nhân sự bấm quảng cáo Year End Party trọn gói, hỏi giá → AI báo giá từ 45.000.000đ (sân khấu, âm thanh ánh sáng,
   MC, kịch bản), gửi đúng ảnh quảng cáo → hỏi số người, ngày, địa điểm → 80 người, tối 16/01/2027, chưa chốt địa điểm, muốn chủ đề,
   gameshow, bốc thăm, so bên khác 35 triệu → AI không chê, không tự tính giá (báo giá chính xác cần địa điểm + kịch bản), mời chuyên viên
   qua văn phòng gặp 30 phút mang 3 phương án chủ đề, xin tên + SĐT → khách im → bám đuổi 5 tin (ảnh tiệc đã làm, feedback nhân sự,
   cam kết hợp đồng, quy trình, mời hẹn gặp) → khách hẹn 15h thứ Năm 03/12 tại văn phòng → chuyển chị Vy chuyên viên
   → sau đêm tiệc: gửi album, xin góp ý; mời tư vấn team building hè; ưu đãi đặt sớm Year End Party 2027 cho khách quen.
   AI không hứa kết quả, không tự tính giá hay số lượng, không check khách cũ/mới.
   Không có tin nhắc trước giờ hẹn, trước ngày sự kiện (Preny chưa có tính năng này).
   Công ty, giá, khách, SĐT, địa chỉ, feedback, nhân viên: dữ liệu minh họa. Ảnh: Unsplash (ảnh thật, không phải sự kiện của khách). */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'tiec': '1768508951262-42931f7ad924',       // khách nâng ly trong đêm tiệc công ty
    'san-khau': '1700514077430-3659e38eb5e7',   // sân khấu ánh sáng tím, bàn tiệc
    'anh-sang': '1599739291060-4578e77dac5d',   // đèn sân khấu
    'ban-tiec': '1768508951405-10e83c4a2872',   // sảnh tiệc bàn tròn
    'phong-tiec': '1783314867628-220ab03cac99', // phòng tiệc lớn đã bày bàn
    'nang-ly': '1699730164892-d7c433524ff3',    // nhóm bạn nâng ly
    'nhay': '1645730826845-cd2ddec9984f',       // khách nhảy trong tiệc
    'phao-giay': '1492684223066-81342ee5ff30',  // pháo giấy trên sân khấu
    'am-thanh': '1762952805560-130ccc74c3fa',   // bàn trộn âm thanh
    'ky-thuat': '1590377800256-5de17549a63c',   // kỹ thuật viên đứng bàn âm thanh
    'ke-hoach': '1768055105012-4c53791b2877',   // đánh dấu danh sách việc cần làm
    'lich': '1513128034602-7814ccaddd4e',       // sổ ghi chú kế hoạch
    'team': '1774599661166-ae302f07dd37',       // team building ngoài trời
    'tay': '1582213782179-e0d53f98f2ca',        // chồng tay đồng đội
    'micro': '1511671782779-c97d3d27a1d4',      // micro sân khấu
    'khach-moi': '1768508947825-0a63f7c46a2b',  // khách mời cười trong sảnh tiệc
    'ban-tron': '1768508950719-4d76978fdf44',   // khách ngồi bàn tiệc có hoa
    'hop': '1542744173-8e7e53415bb0',           // buổi họp với khách tại văn phòng
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    badge: 'AI CHATBOT · TỔ CHỨC SỰ KIỆN',
    shop: { name: 'Sao Mai Event', initials: 'SM' },
    headline: { pre: 'AI chatbot tư vấn tổ chức sự kiện và', em: 'chốt lịch gặp cho khách' },
    sub: 'Báo giá, gửi ảnh sự kiện đã làm, không chê bên khác, mời chuyên viên qua gặp và xin SĐT; chuyên viên chốt hợp đồng sau buổi gặp.',
    cta: 'Dùng thử miễn phí tại **preny.ai**\nHotline **0389 647 778**',
    speed: 1.13,
    timing: { read0: 1000, readPerChar: 28, readMax: 4500, type0: 800, typePerChar: 3, typeMax: 1500, fastType: 500,
              featureHold: 1400, sepHold: 1100, cardHold: 4000, introCard: 250 },

    images: Object.fromEntries(Object.entries(IMG).map(([k, id]) => [k, U(id)])),

    // Cột trái demo ngang (dùng khi xuất video khung ngang), đúng thứ tự diễn trong steps
    features: [
      { title: 'AI báo giá, mời buổi gặp tư vấn', desc: 'Trả lời ngay, hiểu cả tin viết tắt.',
        kws: ['Báo giá, gửi đúng ảnh quảng cáo', 'Hỏi số người, ngày, địa điểm', 'Không chê bên khác, mời chuyên viên qua gặp'] },
      { title: 'Bám đuổi khách cân nhắc lâu', desc: 'Công ty nằm đầu danh sách khi khách chọn.',
        kws: ['Khách chưa cho SĐT: tự gắn thẻ #yearendparty', 'Ảnh tiệc đã làm, feedback nhân sự', 'Báo giá từng hạng mục, tổng duyệt', 'Quy trình 5 bước, mời hẹn gặp'] },
      { title: 'AI xin SĐT, giữ lịch gặp', desc: 'Khách nóng chuyển ngay cho chuyên viên.',
        kws: ['Cho khách lý do để cho số: giữ lịch, mang phương án', 'Tóm tắt lịch gặp tại văn phòng khách', 'Chuyển chị Vy chuyên viên gọi xác nhận'] },
      { title: 'AI chăm sóc sau sự kiện', desc: 'Tăng tỷ lệ khách đặt sự kiện tiếp theo.',
        kws: ['Gửi album ảnh, xin góp ý', 'Mời tư vấn team building hè', 'Ưu đãi đặt sớm tiệc năm sau'] },
    ],

    steps: [
      { intro: true, hold: 1800 },

      /* ---- 1. Tư vấn: giá + ảnh quảng cáo → số người, ngày, địa điểm → so bên khác 35 triệu → mời chuyên viên qua gặp ---- */
      { feature: 1 },
      { sep: 'Khách bấm Gửi tin nhắn từ quảng cáo Facebook', style: 'time', hold: 800 },
      { kh: 'Tổ chức YEP trọn gói bên em giá sao?' },
      { ai: 'Dạ chào chị Hương, gói Year End Party trọn gói bên em **từ 45.000.000đ**, gồm **sân khấu, âm thanh ánh sáng, MC, kịch bản** chương trình ạ.', fast: true, meta: '⚡ Preny AI trả lời sau 2 giây', kw: 0 },
      { aiImg: 'tiec' },
      { ai: 'Công ty mình dự kiến **bao nhiêu người**, tổ chức **ngày nào** và đã chọn được **địa điểm** chưa ạ?', kw: 1 },
      { kh: 'tầm 80 người, tối 16/1, chưa chốt địa điểm. sếp muốn có chủ đề, gameshow, bốc thăm trúng thưởng. bên khác báo 35tr, bên e sao cao hơn?' },
      { ai: 'Dạ mỗi bên tính các hạng mục khác nhau nên em chưa dám so ạ. Giá chính xác còn tùy **địa điểm** và **kịch bản**, bên em báo rõ từng hạng mục để chị dễ so.', kw: 2 },
      { ai: 'Em mời chị **buổi gặp 30 phút**, chuyên viên bên em qua văn phòng công ty chị, mang **3 phương án chủ đề** và gợi ý địa điểm cho 80 người, chưa cần ký gì. Chị cho em xin **tên và SĐT** để hẹn nha 🎉', kw: 2 },
      { seen: true },

      /* ---- 2. Khách im → bám đuổi 5 tin trong 7 ngày ---- */
      { feature: 2 },
      { sep: 'Khách chưa để lại SĐT… · AI gắn thẻ #yearendparty #CongTy80Nguoi', style: 'silent', kw: 0, hold: 1600 },
      { sep: '— 15 phút sau —' },
      { ai: 'Chị Hương ơi, em gửi chị vài hình **tiệc tất niên** bên em vừa tổ chức nha 🎉', meta: '📱 Tự động · Bám đuổi', kw: 1 },
      { aiImgs: [{ img: 'san-khau', label: 'Sân khấu' }, { img: 'ban-tiec', label: 'Sảnh tiệc' },
                 { img: 'phao-giay', label: 'Màn mở đầu' }, { img: 'nhay', label: 'Gameshow' }], hold: 3200 },
      { sep: '— 1 ngày sau —' },
      { card: {
          tag: '⭐ Feedback khách hàng',
          intro: 'Đây là chia sẻ của một chị phụ trách nhân sự bên em từng làm tiệc cùng ạ 💬',
          lines: ['“Công ty mình 120 người. Bên này lên 3 chủ đề cho sếp chọn, tổng duyệt chương trình trước 1 ngày, gameshow với bốc thăm chạy đúng giờ. Đêm tiệc mình chỉ việc ngồi chơi.”', 'Chị Ngọc Trâm, phụ trách nhân sự', '(Chương trình tùy ngân sách và địa điểm của từng công ty)'],
        }, meta: '📱 Tự động · Bám đuổi', kw: 1, hold: 4200 },
      { sep: '— 1 ngày sau —' },
      { card: {
          tag: '✓ Cam kết · Sao Mai Event',
          intro: 'Bên em ghi rõ trong hợp đồng để chị yên tâm ạ:',
          lines: ['**Báo giá từng hạng mục**, phát sinh báo trước', '**Âm thanh, ánh sáng** của công ty, có kỹ thuật trực', '**Tổng duyệt** chương trình trước ngày diễn'],
        }, meta: '📱 Tự động · Bám đuổi', kw: 2, hold: 4000 },
      { sep: '— 1 ngày sau —' },
      { ai: 'Quy trình bên em là **gặp tư vấn → kịch bản, chủ đề → duyệt báo giá → tổng duyệt → đêm tiệc**, chị duyệt từng bước rồi mới làm tiếp ạ 😊', meta: '📱 Tự động · Bám đuổi', kw: 3 },
      { sep: '— 2 ngày sau —' },
      { ai: 'Tối thứ Bảy tháng 1 thường kín lịch sớm ạ. Tuần này chị muốn em hẹn chuyên viên qua gặp chị không ạ?', meta: '📱 Tự động · Bám đuổi', kw: 3 },
      { kh: 'Chiều t5 qua cty c được ko, 3h' },

      /* ---- 3. Khách quay lại → xin tên, SĐT, địa chỉ công ty → chuyển chuyên viên sự kiện ---- */
      { feature: 3 },
      { ai: 'Dạ được ạ, em hẹn **15h thứ Năm 03/12** tại văn phòng công ty chị. Chị cho em xin **tên, SĐT và địa chỉ công ty** nha 🎉', fast: true, kw: 0 },
      { kh: 'Hương, 0987 214 360, tầng 8 tòa nhà 72 Lê Thánh Tôn Q1' },
      { card: {
          tag: '✓ Đã hẹn gặp tư vấn · chị Hương', ok: true,
          lines: ['Thời gian: **15h00 thứ Năm 03/12/2026**', 'Địa điểm: **tầng 8, 72 Lê Thánh Tôn, Q1**', 'Nội dung: **3 phương án chủ đề**, gợi ý địa điểm', 'Sự kiện: Year End Party **80 người, tối 16/01/2027**'],
        }, meta: '✓ Đã lưu khách, gắn thẻ #yearendparty #CongTy80Nguoi', kw: 1, hold: 4200 },
      { ai: '**Chị Vy bên em** sẽ gọi chị xác nhận, thứ Năm mang 3 phương án chủ đề qua công ty chị nha 🎉', meta: '✓ Đã chuyển chị Vy · Chuyên viên sự kiện', kw: 2, hold: 1500 },

      /* ---- 4. Sau đêm tiệc: album + góp ý → mời team building hè → ưu đãi đặt sớm năm sau ---- */
      { feature: 4 },
      { sep: '— Ngày 18/1 · sau đêm Year End Party —' },
      { ai: 'Chị Hương ơi, đêm tiệc thứ Bảy mọi người vui không ạ? **Album ảnh, video** em gửi qua link trong 3 ngày, chị góp ý giúp em **1 phút** nha 🎉', meta: '📱 Tự động · Chăm sóc sau sự kiện', kw: 0 },
      { kh: 'Vui lắm e, sếp khen phần bốc thăm 👍' },
      { sep: '— Ngày 5/4 · mùa team building —' },
      { ai: 'Hè này công ty mình có đi **team building** không ạ? Bên em mở lịch khảo sát địa điểm **tháng 5–6**, chị muốn em hẹn chuyên viên ngày nào ạ?', meta: '📅 Tự động · Mời sự kiện tiếp theo', kw: 1 },
      { kh: 'Tuần sau nha e, c hỏi sếp đã' },
      { ai: 'Dạ em báo chị Vy rồi ạ. Tháng 10 bên em có **ưu đãi đặt sớm Year End Party** cho khách quen, tới lúc đó em gửi chị nha 🎉', kw: 2 },
      // Không có { end: true }: bấm → thêm một lần là sang thẳng slide kế.
    ],

    /* ===== Nội dung slide trình chiếu (trinh-chieu.html). Slide thống kê dùng số minh họa (deck.dashboard). ===== */
    deck: {
      /* Demo chat dọc (demo-doc.js): bài đăng → 1 bình luận → quảng cáo Year End Party trọn gói (bấm Gửi tin nhắn)
         → Messenger với chị Hương (tư vấn, bám đuổi, hẹn gặp, chăm sóc sau sự kiện) → màn kết. */
      demoDoc: {
        khach: 'Thu Hương',
        sanPham: 'Year End Party trọn gói · Tư vấn chủ đề miễn phí',
        ngay: '26/11/2026',
        gio: '14:46',
        binhLuan: [
          { ten: 'Đặng Khoa', noiDung: 'Bên mình có làm khai trương showroom ở Bình Dương không?', traLoi: 'Dạ bên em vừa nhắn tin tư vấn chi tiết cho anh, anh xem inbox nha!' },
        ],
        post: {
          tieuDe: 'YEAR END PARTY TRỌN GÓI · TƯ VẤN CHỦ ĐỀ MIỄN PHÍ 🎉',
          dong: ['Lên chủ đề, kịch bản riêng', 'Sân khấu, âm thanh ánh sáng', 'MC, gameshow, bốc thăm', 'Tổng duyệt trước ngày diễn'],
          anh: ['tiec', 'san-khau', 'phao-giay', 'ban-tiec'],
        },
        quangCao: {
          tieuDe: 'YEAR END PARTY TRỌN GÓI · TƯ VẤN MIỄN PHÍ',
          mo: 'Gói Year End Party trọn gói từ 45.000.000đ: sân khấu, âm thanh ánh sáng, MC, kịch bản. Chuyên viên qua gặp, báo giá theo ngân sách.',
          anh: 'tiec', nhan: 'MESSENGER', dong: 'Tư vấn 24/7 · Hẹn gặp chuyên viên', nut: 'Gửi tin nhắn',
        },
        ket: {
          tieuDe: 'PRENY AI – TƯ VẤN TỔ CHỨC SỰ KIỆN, CHỐT LỊCH GẶP',
          y: ['Trả lời ngay 24/7', 'Báo giá, gửi ảnh sự kiện', 'Không chê bên khác', 'Lấy SĐT, hẹn gặp tư vấn',
              'Bám đuổi 5 tin trong 7 ngày', 'Báo ngay chuyên viên', 'Chăm sóc sau sự kiện qua Zalo', 'Meta CAPI Lead'],
        },
      },
      /* Pipeline mới (TRINH-CHIEU.md mục 1): dashboard, chatbot (lead = AI chốt là lấy SĐT + hẹn gặp), afterSale. */
      dashboard: [
        { ten: 'Year End <span class="grad">Party</span>', den: '21/07/2026', khach: 12, tyLe: 0.55 },
        { ten: 'Hội nghị <span class="grad">khách hàng</span>', den: '18/08/2026', khach: 9, tyLe: 0.53 },
        { ten: 'Lễ <span class="grad">khai trương</span>', den: '26/09/2026', khach: 7, tyLe: 0.51 },
      ],
      chatbot: {
        y: [
          ['Trả lời ngay tức thì, 24/7', 'Khách nhắn lúc nào, AI trả lời sau 2 giây'],
          ['Báo giá, gửi ảnh sự kiện', 'Hỏi số người, ngày, địa điểm của khách'],
          ['Chốt đơn = lấy SĐT + hẹn gặp tư vấn', 'Giữ lịch gặp, chuyển chuyên viên sự kiện'],
          ['Hiểu hình ảnh khách gửi', 'Khách gửi ảnh sân khấu thích, AI mời xem phương án tương tự'],
        ],
        chat: [
          { ref: { img: L(IMG['tiec']), ten: 'Year End Party trọn gói · Tư vấn chủ đề miễn phí' } },
          { kh: 'YEP 80 người, bên khác báo 35tr, bên em có gì khác ko?' },
          {
            ai: 'Dạ mỗi bên tính các hạng mục khác nhau nên em chưa dám so ạ. Bên em **báo rõ từng hạng mục**, giá còn tùy **địa điểm và kịch bản** 🎉',
            meta: '⚡ Preny AI trả lời sau 2 giây',
          },
          { kh: 'c muốn xem phương án chủ đề trước' },
          {
            ai: 'Dạ em mời chị **buổi gặp 30 phút**, chuyên viên qua văn phòng mang **3 phương án chủ đề**, chưa cần ký gì ạ. Chị cho em xin **tên, SĐT** để hẹn nha.',
          },
          { kh: 'Hương - 0987 214 360. chiều t5 03/12 lúc 3h nha' },
          { ai: 'Dạ được ạ! Em hẹn **15h thứ Năm 03/12**, chị Vy bên em gọi xác nhận liền nha ⚡' },
          { don: true },
          { ok: true },
        ],
        lead: {
          ten: 'Chị Hương',
          sdt: '0987 214 360',
          nhuCau: '**Year End Party 80 người** · tối 16/01/2027 · **chủ đề, gameshow, bốc thăm** · chưa có địa điểm',
          the: [['FB Ads · Year End Party trọn gói', 'ng'], ['#yearendparty', 'qt'], ['#CongTy80Nguoi', 'qt'], ['Đã cho SĐT', 'ht']],
          lichNhan: 'Lịch gặp tư vấn',
          lich: ['Văn phòng khách · Q1', '15:00 · Thứ Năm 03/12'],
          sale: 'Chị Vy · Chuyên viên',
          nut: 'Chuyển cho chuyên viên',
          xong: 'Đã chuyển cho chị Vy',
          okTieuDe: 'Đã hẹn gặp tư vấn 03/12',
        },
        anh: {
          img: L(IMG['san-khau']),
          nhan: 'Khách gửi ảnh sân khấu mình thích',
          kh: 'Làm sân khấu kiểu như này được ko e?',
          ai: 'Ảnh chị gửi là kiểu **sân khấu ánh sáng tím, màn LED lớn** ạ, bên em **làm được theo phong cách này**. Buổi gặp thứ Năm, chị Vy mang phương án tương tự cho chị xem nha.',
          pill: '🔍 AI nhìn ảnh sân khấu, mời xem phương án tương tự khi gặp',
        },
      },
      afterSale: {
        y1: 'AI gửi tiếp 5 hạng mục hợp đêm tiệc để bán thêm',
        y2: 'Gói tiệc đầu năm, team building, ưu đãi đặt sớm tiệc năm sau',
        gio: 'Chuyên viên vừa ký hợp đồng với chị Hương sau buổi gặp',
        don: { ma: '#SM03121', phi: 'ký hợp đồng sau buổi gặp', sp: [{ ten: 'Year End Party trọn gói 80 khách', sl: 1, dv: 'gói', gia: 45000000 }] },
        loi: 'Cảm ơn chị Hương đã chọn Sao Mai Event 🎉 Tiệc tất niên hay làm thêm mấy hạng mục này, chị cần hạng mục nào em báo chị Vy tư vấn nha:',
        sp: [
          { img: L(IMG['khach-moi']), ten: 'Photobooth in ảnh lấy liền', gia: 4900000, cu: 5900000, nut: 'Xem gói' },
          { img: L(IMG['am-thanh']), ten: 'Chụp ảnh, quay phim, flycam', gia: 6500000, nut: 'Xem gói' },
          { img: L(IMG['ban-tron']), ten: 'Backdrop, trang trí theo chủ đề', gia: 7500000, nut: 'Xem gói' },
          { img: L(IMG['micro']), ten: 'Ca sĩ khách mời, nhóm nhảy', gia: 15000000, nut: 'Xem gói' },
          { img: L(IMG['nang-ly']), ten: 'Gói quà bốc thăm trúng thưởng', gia: 8000000, nut: 'Xem gói' },
        ],
        khach: 'Lấy thêm photobooth với gói chụp ảnh quay phim nha e',
        pill: '🛍 Khách làm thêm 2 hạng mục: hợp đồng tăng từ 45.000.000đ lên 56.400.000đ',
        fmm: {
          sep: '1 tháng sau · tin Facebook FMM',
          chao: 'Chào chị Hương 👋 Bên em vừa ra gói tiệc khai xuân, kick-off đầu năm, mời chị xem nha!',
          img: L(IMG['phao-giay']),
          nhan: 'GÓI MỚI',
          ten: 'Tiệc khai xuân, kick-off đầu năm',
          mo: 'Khách cũ được chuyên viên qua gặp, lên chủ đề riêng cho đầu năm.',
          nut: 'Xem gói',
        },
        zbs: {
          ten: 'Ưu đãi đặt sớm cho chị Hương',
          mo: 'Cảm ơn chị đã chọn Sao Mai Event. Gửi chị ưu đãi đặt sớm Year End Party 2027 cho khách quen:',
          dong: [
            ['Mã ưu đãi', '**SAOMAI10**'],
            ['Ưu đãi', 'Giảm 10% gói trọn gói'],
            ['Hạn dùng', 'Đặt trước 31/10/2027'],
          ],
          nut: 'Dùng ưu đãi',
        },
      },
      tieuDe6: 'Hệ thống AI chatbot giúp tăng<br><span class="grad">tỷ lệ chốt lịch gặp tư vấn</span>',
      // Không lên đơn tự động (chuyên viên gặp khách rồi mới ký hợp đồng) → 5 tính năng
      tinhNang: [
        ['AI tư vấn, chủ động mời buổi gặp', 'Lấy SĐT, hẹn chuyên viên qua gặp'],
        ['Bám đuổi khách cân nhắc lâu', 'Gửi ảnh sự kiện, feedback nhân sự'],
        ['AI chăm sóc khách sau sự kiện', 'Gửi album, mời sự kiện tiếp theo'],
        ['Bộ công cụ Remarketing FMM và ZBS', 'Khai thác lại dữ liệu khách cũ'],
        ['Gửi sự kiện Lead qua Meta CAPI', 'Hỗ trợ tối ưu quảng cáo Facebook'],
      ],

      chotDon: {
        nganh: 'tổ chức sự kiện',
        nguoi: 'Chuyên viên',
        chotLa: 'AI chốt đơn = lấy SĐT + hẹn gặp tư vấn',
        buoc: [
          { t: 'Chạy quảng cáo', d: 'Thu hút công ty cần làm tiệc', icon: 'megaphone', own: 'Công ty chạy quảng cáo', mock: 'ad', img: L(IMG['tiec']), text: 'Year End Party trọn gói, tư vấn chủ đề miễn phí 🎉', btn: 'Gửi tin nhắn' },
          { t: 'Bắt đầu chat', d: 'Báo giá, hỏi số người, ngày', icon: 'chat', ai: true, mock: 'chat',
            msgs: [['kh', 'Tổ chức YEP trọn gói giá sao?'], ['ai', 'Dạ từ 45.000.000đ ạ. Công ty mình bao nhiêu người ạ? 🎉']] },
          { t: 'Mời buổi gặp', d: 'Lấy SĐT, hẹn chuyên viên qua', icon: 'phone', ai: true, chot: true, mock: 'form', fields: ['Chị Hương · YEP 80 người', '0987 214 360'], ok: 'Đã hẹn gặp 03/12' },
          { t: 'Chuyên viên gọi', d: 'Xác nhận lịch gặp', icon: 'call', mock: 'lich', ten: 'Văn phòng khách · Q1', gio: '15:00 · Thứ Năm 03/12', ok: 'Đã xác nhận lịch' },
          { t: 'Gặp tư vấn', d: 'Mang 3 phương án chủ đề', icon: 'users', mock: 'img', img: L(IMG['hop']), cap: 'Chuyên viên trình bày phương án' },
          { t: 'Ký hợp đồng', d: 'Duyệt kịch bản rồi mới làm', icon: 'check', mock: 'img', img: L(IMG['ke-hoach']), cap: '✓ Khách duyệt kịch bản, báo giá' },
        ],
        vong: { t: 'Chăm sóc sau sự kiện & Remarketing', d: 'Gửi album, mời team building, ưu đãi đặt sớm tiệc năm sau' },
      },

      bamDuoi: {
        nhan: 'Vì sao bám đuổi của Preny đặc biệt', shopB: 'Công ty B',
        cmpSai: ['Khách im → gửi “Chị còn quan tâm tổ chức tiệc không ạ?”', 'Không biết khách làm sự kiện gì, vì sao im', 'Khách thấy phiền, bỏ qua tin nhắn'],
        cmpDung: ['Khách nhắn xong im → nhắc đúng sự kiện khách hỏi (thẻ <b>#yearendparty</b> từ quảng cáo)',
                  'Báo giá xong im → bám đuổi theo giá: báo rõ từng hạng mục theo ngân sách (thẻ <b>#baogia</b>)',
                  'Đúng nhu cầu, đúng lý do im → khách quay lại hẹn gặp tư vấn'],
        hoi: 'Tổ chức YEP trọn gói bên em giá sao?',
        traLoiThuong: 'Dạ từ 45.000.000đ ạ.',
        nhacChung: 'Chị còn quan tâm tổ chức tiệc không ạ? 😊',
        refImg: L(IMG['tiec']), refTen: 'Year End Party trọn gói',
        vd1: {
          ten: 'Khách nhắn xong im',
          kh: 'Bên em có làm gameshow với bốc thăm trúng thưởng không?',
          ai: 'Dạ có ạ, gameshow, bốc thăm nằm trong kịch bản bên em lên. Công ty mình bao nhiêu người ạ?',
          tag: '🏷 #yearendparty', tagNote: 'thẻ từ quảng cáo · khách im 1 ngày',
          nhac: 'Chị Hương ơi, em gửi chị <b>vài hình tiệc tất niên</b> bên em vừa làm nè 🎉 Chị thích phần nào em ghi lại để chuyên viên <b>đưa vào phương án</b> cho mình nha.',
          dung: '🎯 Theo thẻ #yearendparty: nhắc đúng sự kiện khách hỏi',
          khach: 'Tuần này qua gặp c được ko e?',
        },
        vd2: {
          ten: 'Báo giá xong im',
          kh: 'Tổ chức YEP trọn gói bên em giá sao?',
          ai: 'Dạ gói Year End Party trọn gói <b>từ 45.000.000đ</b>, gồm sân khấu, âm thanh ánh sáng, MC, kịch bản ạ.',
          tag: '🏷 #baogia', tagNote: 'báo giá xong khách im 2 ngày',
          nhac: 'Chị ơi, bên em có thể lên <b>phương án theo đúng ngân sách</b> chị đưa ra, chuyên viên mang qua <b>báo giá từng hạng mục</b> để chị dễ so ạ. Em hẹn 1 buổi gặp cho chị nha?',
          dung: '🎯 Theo thẻ #baogia: bám đuổi theo giá, đúng lý do khách im',
          khach: 'Ok hẹn giúp c, chiều t5 nha',
        },
      },

      binhLuan: {
        post: '<b>Gặp tư vấn miễn phí</b>: chuyên viên qua tận nơi, mang phương án chủ đề, chưa cần ký gì 🎉 Year End Party trọn gói từ 45.000.000đ',
        img: L(IMG['san-khau']),
        kav: 'ĐK', kten: 'Đặng Khoa', hoi: 'Bên mình có làm khai trương showroom ở Bình Dương không?',
        traLoi: 'Dạ chào anh Khoa! Bên em vừa nhắn tin tư vấn chi tiết cho anh, anh xem tin nhắn nhé 💬',
        act2: 'Nhắn riêng, mời khảo sát mặt bằng',
        nhan: 'Chào anh Khoa! Bên em làm <b>lễ khai trương</b> ở Bình Dương được ạ, chuyên viên <b>qua tận nơi khảo sát mặt bằng</b> trước khi lên phương án. Anh cho em xin SĐT để hẹn lịch ạ!',
        sp: { ten: 'Khảo sát mặt bằng tận nơi', gia: 'Miễn phí · 30 phút', img: L(IMG['phong-tiec']) },
        khach: 'Số anh 0938 615 207 nhé',
      },

      duLieu: {
        shopA: 'Công ty A',
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: giá 35 triệu, giữ được tối 16/1', 'Khách ký rồi thấy khác, công ty mất uy tín'],
        dung: ['Chỉ trả lời theo dữ liệu công ty cung cấp', 'Không chắc chắn → xin khách chờ, AI tạm dừng', 'Báo ngay chuyên viên vào trả lời'],
        hoi: 'Bên em làm 35tr được ko? Giữ giúp c tối 16/1 luôn nha',
        aiSai: 'Dạ được chị, bên em <b>bao trọn 35 triệu</b>, em <b>giữ tối 16/1</b> cho chị luôn ạ 🥰',
        thucTe: '⚠ Thực tế: giá tùy địa điểm và kịch bản; lịch tối 16/1 phải để chuyên viên kiểm tra',
        gian: 'Hợp đồng gửi qua 52 triệu, tối 16/1 lại kín lịch! Sao nhắn nói 35 triệu, giữ được ngày? 😠',
        cho: 'Dạ chị chờ em một chút để em kiểm tra chính xác thông tin cho mình nhé!',
        nv: 'Chị Vy · Chuyên viên · người thật',
        nvTraLoi: 'Dạ em xin lỗi chị, giá còn tùy địa điểm và kịch bản ạ. Em gửi chị phương án theo ngân sách và các tối còn trống của tháng 1 ngay nhé!',
      },

      tags: {
        rows: [
          { ten: 'Phạm Thu Hương', av: 'TH', kenh: 'fb', msg: 'bên khác báo 35tr, bên e sao cao hơn?', gio: '14:47',
            tags: [['FB Ads · Year End Party trọn gói', 'ng'], ['#yearendparty', 'qt'], ['#CongTy80Nguoi', 'qt'], ['Hẹn gặp 03/12', 'ht']] },
          { ten: 'Đặng Khoa', av: 'ĐK', kenh: 'fb', msg: 'Làm khai trương showroom ở Bình Dương không?', gio: '10:12',
            tags: [['Bình luận bài viết', 'ng'], ['#KhaiTruong', 'qt'], ['Đã cho SĐT', 'ht'], ['Gọi lần 1 ✓', 'sa']] },
          { ten: 'Lý Bảo Ngọc', av: 'BN', kenh: 'tiktok', msg: 'Hội nghị khách hàng 200 người làm được ko?', gio: '16:30',
            tags: [['TikTok · Video sân khấu', 'ng'], ['#HoiNghi', 'qt'], ['Đã cho SĐT', 'ht'], ['Gọi lần 2 · không bắt máy', 'sa']] },
          { ten: 'Hồ Văn Tài', av: 'VT', kenh: 'zalo', msg: 'Team building Vũng Tàu 2 ngày 1 đêm có gói ko?', gio: '09:05',
            tags: [['Zalo OA', 'ng'], ['#TeamBuilding', 'qt'], ['Đang bám đuổi', 'ht']] },
          { ten: 'Kim Oanh', av: 'KO', kenh: 'zalo', msg: 'Cho mình xin lại album tiệc năm ngoái nhé', gio: 'Hôm qua',
            tags: [['Zalo · Khách cũ', 'ng'], ['#AlbumAnh', 'qt'], ['Đã làm tiệc', 'ht'], ['Đã kết nối Zalo', 'za']] },
        ],
        chanDung: {
          ten: 'Phạm Thu Hương', av: 'TH', kenh: 'fb', sub: 'Facebook Messenger · 0987 214 360',
          nhom: [
            ['Nguồn khách', [['Facebook Ads', 'ng'], ['Bài: Year End Party trọn gói', 'ng']]],
            ['Quan tâm', [['#yearendparty', 'qt'], ['#CongTy80Nguoi', 'qt']]],
            ['Hành trình', [['Nhắn tin 26/11', 'ht'], ['Cho SĐT 01/12', 'ht'], ['Hẹn gặp 03/12', 'ht']]],
            ['Sale gọi', [['Chị Vy · lần 1 ✓', 'sa']]],
            ['Kết nối', [['Đã kết nối Zalo', 'za'], ['Khách mới · L1', 'lv']]],
          ],
          ghiChu: 'Phụ trách nhân sự, công ty khoảng 80 người. Cần Year End Party tối 16/01/2027, chưa chốt địa điểm; sếp muốn có chủ đề, gameshow, bốc thăm; đã được bên khác báo 35 triệu. Hẹn gặp 15h thứ Năm 03/12 tại văn phòng, tầng 8, 72 Lê Thánh Tôn, Q1.',
        },
      },

      chotLai: [
        ['KHÁCH HÀNG', ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến']],
        ['AI CHATBOT', ['Phản hồi nhanh tức thì', 'Báo giá, gửi ảnh sự kiện', 'Không chê bên khác', 'Lấy SĐT, hẹn gặp tư vấn']],
        ['BÁM ĐUỔI', ['Gửi 5 tin nhắn trong 7 ngày: sự kiện đã làm, khách thật, cam kết, quy trình']],
        ['GẶP TƯ VẤN', ['Chuyên viên mang phương án chủ đề', 'Chốt hợp đồng sau buổi gặp']],
        ['MUA LẠI', ['Mời team building, ưu đãi đặt sớm tiệc năm sau qua FB và Zalo']],
      ],
    },
  };
})();
