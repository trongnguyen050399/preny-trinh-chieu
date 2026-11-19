/* Kịch bản: SALON TÓC — BẢN TRÌNH CHIẾU, nhóm CÂN NHẮC NHIỀU. Làm 19/11/2026 theo người dùng: "làm thêm ngành salon tóc".
   Xếp nhóm cân nhắc nhiều vì salon bán dịch vụ đặt lịch (uốn, nhuộm, phục hồi giá cao, khách sợ hư tóc, so giá tiệm khác):
   "AI chốt đơn = lấy tên + SĐT + giữ lịch soi tóc với stylist"; salon làm tóc, thu tiền tại chỗ, gửi sự kiện Lead
   (không gửi Purchase khi khách chưa làm).
   Demo chat 1 khách từ đầu tới cuối (khớp Bài 2 video ngang, demo/bai2/kich-ban-salon-toc-tc.js):
   chị Thảo bấm quảng cáo uốn setting Hàn Quốc, hỏi giá → AI báo giá tham khảo từ 1.290.000đ (đã gồm hấp phục hồi), gửi đúng ảnh
   quảng cáo → hỏi độ dài, tóc đã tẩy nhuộm chưa → tóc qua vai, tẩy nhuộm 2 lần, khô, sợ uốn hư, tiệm gần nhà 500k
   → AI không hứa bừa (tóc đã tẩy phải soi tóc, test độ đàn hồi trước), không chê tiệm khác → mời soi tóc miễn phí, xin tên + SĐT
   → khách im → bám đuổi 5 tin (không gian salon, feedback khách tóc đã tẩy, stylist + thuốc chính hãng + báo giá chốt trước,
   quy trình soi tóc → phục hồi → uốn → hấp dưỡng, mời giữ lịch thứ Bảy) → khách hẹn 9h thứ Bảy 28/11 → chuyển chị Vy · Lễ tân
   → sau khi làm: hỏi thăm, cách giữ sóng; mời hấp phục hồi duy trì; ưu đãi phục hồi cho khách quen.
   Không có tin nhắc trước giờ hẹn (Preny chưa có tính năng này).
   Salon, giá, khách, SĐT, feedback, nhân viên: dữ liệu minh họa. Ảnh: Unsplash (ảnh thật, không phải salon của khách). */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'uon-song': '1596911647169-7085321c81b8',      // tóc đen uốn sóng, nhìn từ sau (ảnh quảng cáo)
    'salon': '1633681926022-84c23e8cb2d6',         // salon hiện đại, ghế đen, gương tròn
    'salon-sang': '1695527081848-1e46c06e6458',    // salon sáng, stylist làm tóc cho khách
    'goi-dau': '1634449571010-02389ed0f9b0',       // gội đầu ở bồn gội
    'stylist': '1774660810725-fb04e002003d',       // stylist đang làm tóc cho khách
    'uon-lo': '1582095133179-bfd08e2fc6b3',        // quấn lô uốn tóc
    'uon-may': '1629397685944-7073f5589754',       // uốn lọn bằng máy
    'dau-goi': '1760895535234-2c39c57cf187',       // dầu gội, dầu xả, serum
    'my-pham-toc': '1780952934157-f541e70c7ece',   // chai dưỡng tóc trên kệ
    'chai-bom': '1786737554096-4b22c03ad991',      // 2 chai vòi bơm trên kệ
    'ke-san-pham': '1776105609708-3d8908ab4dc2',   // kệ sản phẩm chăm sóc tóc
    'toc-kho': '1765490372652-13e7ce0f5dbc',       // tóc khô, rối cận cảnh
    'dung-cu': '1595475884562-073c30d45670',       // lược, kéo, cọ nhuộm
    'uon-nau': '1560869713-bf165a9cfac1',          // tóc nâu uốn lọn
    'toc-song-nau': '1585267676185-f4aa56ddbce4',  // cô gái tóc nâu uốn sóng
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    badge: 'AI CHATBOT · SALON TÓC',
    shop: { name: 'Mộc Lan Hair Salon', initials: 'ML' },
    headline: { pre: 'AI chatbot tư vấn làm tóc và', em: 'giữ lịch cho salon' },
    sub: 'Hỏi đúng tình trạng tóc, không hứa bừa, không chê tiệm khác, xin SĐT và giữ lịch soi tóc với stylist.',
    cta: 'Dùng thử miễn phí tại **preny.ai**\nHotline **0389 647 778**',
    speed: 1.13,
    timing: { read0: 1000, readPerChar: 28, readMax: 4500, type0: 800, typePerChar: 3, typeMax: 1500, fastType: 500,
              featureHold: 1400, sepHold: 1100, cardHold: 4000, introCard: 250 },

    images: Object.fromEntries(Object.entries(IMG).map(([k, id]) => [k, U(id)])),

    // Cột trái demo ngang (dùng khi xuất video khung ngang), đúng thứ tự diễn trong steps
    features: [
      { title: 'AI tư vấn đúng tóc, đúng nhu cầu', desc: 'Trả lời ngay, hiểu cả tin viết tắt.',
        kws: ['Báo giá tham khảo, gửi đúng ảnh quảng cáo', 'Hỏi độ dài, tóc đã tẩy nhuộm chưa', 'Không hứa bừa, không chê tiệm khác'] },
      { title: 'Bám đuổi khách cân nhắc lâu', desc: 'Salon nằm đầu danh sách khi khách chọn.',
        kws: ['Khách chưa cho SĐT: tự gắn thẻ #uonsetting', 'Ảnh salon, feedback khách tóc đã tẩy', 'Stylist lâu năm, thuốc chính hãng', 'Quy trình rõ, mời giữ lịch cuối tuần'] },
      { title: 'AI xin SĐT, giữ lịch stylist', desc: 'Khách nóng chuyển ngay cho lễ tân.',
        kws: ['Cho khách lý do để cho số: giữ lịch soi tóc', 'Lưu khách, gắn thẻ tình trạng tóc', 'Chuyển chị Vy · Lễ tân gọi xác nhận'] },
      { title: 'AI chăm sóc sau khi làm tóc', desc: 'Tăng tỷ lệ khách quay lại.',
        kws: ['Hỏi thăm, dặn cách giữ sóng uốn', 'Mời hấp phục hồi duy trì', 'Ưu đãi phục hồi cho khách quen'] },
    ],

    steps: [
      { intro: true, hold: 1800 },

      /* ---- 1. Tư vấn: giá tham khảo + ảnh quảng cáo → tình trạng tóc → sợ hư tóc, so giá tiệm gần nhà → mời soi tóc ---- */
      { feature: 1 },
      { sep: 'Khách bấm Gửi tin nhắn từ quảng cáo Facebook', style: 'time', hold: 800 },
      { kh: 'Uốn setting như hình giá bao nhiêu vậy em?' },
      { ai: 'Dạ chào chị Thảo, uốn setting Hàn Quốc bên em giá **từ 1.290.000đ**, đã gồm **hấp phục hồi** ạ.', fast: true, meta: '⚡ Preny AI trả lời sau 2 giây', kw: 0 },
      { aiImg: 'uon-song' },
      { ai: 'Tóc chị đang dài tới đâu, đã **tẩy hay nhuộm** chưa ạ? Em xem để báo đúng giá cho chị.' },
      { kh: 'tóc c dài qua vai, tẩy nhuộm 2 lần rồi, hơi khô. uốn có hư ko e? tiệm gần nhà uốn có 500k thôi' },
      { ai: 'Dạ tóc đã tẩy thì em **không dám hứa uốn ngay** ạ. Stylist cần **soi tóc, test độ đàn hồi** trước, tóc yếu thì phục hồi 1 buổi rồi mới uốn cho sóng bền.', kw: 1 },
      { ai: 'Giá tiệm khác em không dám nói, mỗi nơi khác nhau ở **thuốc uốn và phục hồi** đi kèm ạ. Chị ghé **soi tóc miễn phí 15 phút** nha, chưa cần làm gì. Chị cho em xin **tên và SĐT** để giữ lịch stylist ạ ✨', kw: 2 },
      { seen: true },

      /* ---- 2. Khách im → bám đuổi 5 tin trong 7 ngày ---- */
      { feature: 2 },
      { sep: 'Khách chưa để lại SĐT… · AI gắn thẻ #uonsetting #TocDaTay', style: 'silent', kw: 0, hold: 1600 },
      { sep: '— 15 phút sau —' },
      { ai: 'Chị Thảo ơi, em gửi chị vài hình **không gian salon** bên em nha ✨', meta: '✨ Tự động · Bám đuổi', kw: 1 },
      { aiImgs: [{ img: 'salon', label: 'Không gian salon' }, { img: 'goi-dau', label: 'Khu gội đầu' },
                 { img: 'uon-lo', label: 'Uốn setting' }, { img: 'ke-san-pham', label: 'Sản phẩm dưỡng' }], hold: 3200 },
      { sep: '— 1 ngày sau —' },
      { card: {
          tag: '⭐ Feedback khách hàng',
          intro: 'Đây là chia sẻ của một chị khách tóc đã tẩy bên em ạ 💬',
          lines: ['“Tóc mình tẩy 2 lần, khô lắm. Stylist soi tóc xong khuyên phục hồi 1 buổi rồi mới uốn, 2 tháng rồi sóng vẫn mềm, không bị xơ.”', 'Chị Ngọc Hân, Q. Bình Thạnh', '(Kết quả tùy tình trạng tóc của từng người)'],
        }, meta: '✨ Tự động · Bám đuổi', kw: 1, hold: 4200 },
      { sep: '— 1 ngày sau —' },
      { card: {
          tag: '✓ Mộc Lan Hair Salon',
          intro: 'Bên em làm vậy để chị yên tâm ạ:',
          lines: ['**Stylist trên 5 năm**, chuyên uốn tóc đã tẩy', 'Thuốc uốn, phục hồi **chính hãng**, mở hộp trước mặt khách', '**Báo giá chốt** trước khi làm, không phát sinh'],
        }, meta: '✨ Tự động · Bám đuổi', kw: 2, hold: 4000 },
      { sep: '— 1 ngày sau —' },
      { ai: 'Quy trình bên em là **soi tóc → phục hồi → uốn → hấp dưỡng**, chị ưng mới làm, không ép ạ 😊 Soi tóc **miễn phí**, không mất phí giữ lịch.', meta: '✨ Tự động · Bám đuổi', kw: 3 },
      { sep: '— 2 ngày sau —' },
      { ai: 'Thứ Bảy này stylist Minh còn vài khung giờ, chị muốn em giữ một giờ soi tóc cho chị không ạ?', meta: '✨ Tự động · Bám đuổi', kw: 3 },
      { kh: 'Sáng t7 này c rảnh, giữ giúp c 1 giờ nha' },

      /* ---- 3. Khách quay lại → xin tên + SĐT, giữ lịch soi tóc → chuyển lễ tân ---- */
      { feature: 3 },
      { ai: 'Dạ được ạ, **thứ Bảy 28/11** còn khung **9h** và **10h30**. Chị cho em xin **tên và SĐT** để giữ lịch nha ✨', fast: true, kw: 0 },
      { kh: 'Thảo, 0938 452 716, 9h nha e' },
      { card: {
          tag: '✓ Đã giữ lịch · chị Thảo', ok: true,
          lines: ['Thời gian: **9h00 thứ Bảy 28/11/2026**', 'Soi tóc, test độ đàn hồi **miễn phí**', 'Tư vấn uốn setting cho tóc đã tẩy, dài qua vai', 'Stylist: **anh Minh** · Mộc Lan Hair Salon'],
        }, meta: '✓ Đã lưu khách, gắn thẻ #uonsetting #TocDaTay', kw: 1, hold: 4200 },
      { ai: '**Chị Vy lễ tân** sẽ gọi chị xác nhận liền nha. Hôm đó chị cứ để tóc tự nhiên tới là được ạ 💇‍♀️', meta: '✓ Đã chuyển chị Vy · Lễ tân', kw: 2, hold: 1500 },

      /* ---- 4. Sau khi uốn: hỏi thăm, cách giữ sóng → mời hấp phục hồi duy trì → ưu đãi khách quen ---- */
      { feature: 4 },
      { sep: '— Tối 28/11 · sau khi uốn tóc —' },
      { ai: 'Chị Thảo ơi, tóc uốn mới thấy sao rồi ạ? **48 giờ đầu** chị chưa gội nha, gội thì dùng dầu gội **không sulfate** cho sóng bền ạ 💇‍♀️', meta: '💇‍♀️ Tự động · Chăm sóc sau khi làm tóc', kw: 0 },
      { kh: 'Tóc mềm lắm e, ai cũng khen 😄' },
      { sep: '— Ngày 26/12 · 4 tuần sau —' },
      { ai: 'Tóc uốn của chị được 4 tuần rồi, chị ghé **hấp phục hồi duy trì** cho sóng mềm, đỡ khô ngọn nha. Chị muốn em xếp lịch ngày nào ạ?', meta: '📅 Tự động · Mời hấp phục hồi', kw: 1 },
      { kh: 'Chủ nhật tuần sau nha e' },
      { ai: 'Dạ em xếp lịch rồi ạ. Khách quen đang được **giảm 20% gói phục hồi chuyên sâu**, stylist sẽ soi lại tóc cho chị luôn nha ✨', kw: 2 },
      // Không có { end: true }: bấm → thêm một lần là sang thẳng slide kế.
    ],

    /* ===== Nội dung slide trình chiếu (trinh-chieu.html). Slide thống kê dùng số minh họa (deck.dashboard). ===== */
    deck: {
      /* Demo chat dọc (demo-doc.js): bài đăng → 1 bình luận → quảng cáo uốn setting (bấm Gửi tin nhắn)
         → Messenger với chị Thảo (tư vấn, bám đuổi, giữ lịch soi tóc, chăm sóc sau khi làm tóc) → màn kết. */
      demoDoc: {
        khach: 'Thảo Nguyễn',
        sanPham: 'Uốn setting Hàn Quốc · Soi tóc miễn phí',
        ngay: '18/11/2026',
        gio: '14:46',
        binhLuan: [
          { ten: 'Trần Mai', noiDung: 'Tóc ngang vai uốn được không shop?', traLoi: 'Dạ salon vừa nhắn tin tư vấn chi tiết cho chị, chị xem inbox nha!' },
        ],
        post: {
          tieuDe: 'UỐN SETTING HÀN QUỐC · SOI TÓC MIỄN PHÍ 💇‍♀️',
          dong: ['Soi tóc, test độ đàn hồi miễn phí', 'Đã gồm hấp phục hồi', 'Stylist trên 5 năm', 'Báo giá chốt trước khi làm'],
          anh: ['uon-song', 'salon', 'uon-lo', 'goi-dau'],
        },
        quangCao: {
          tieuDe: 'UỐN SETTING HÀN QUỐC · SOI TÓC MIỄN PHÍ',
          mo: 'Uốn setting từ 1.290.000đ, đã gồm hấp phục hồi. Tóc đã tẩy nhuộm được soi tóc miễn phí trước khi làm.',
          anh: 'uon-song', nhan: 'MESSENGER', dong: 'Tư vấn 24/7 · Giữ lịch stylist', nut: 'Gửi tin nhắn',
        },
        ket: {
          tieuDe: 'PRENY AI – TƯ VẤN LÀM TÓC, GIỮ LỊCH CHO SALON',
          y: ['Trả lời ngay 24/7', 'Hỏi đúng tình trạng tóc', 'Không hứa bừa, không chê tiệm khác', 'Lấy SĐT, giữ lịch stylist',
              'Bám đuổi 5 tin trong 7 ngày', 'Báo ngay lễ tân salon', 'Chăm sóc sau khi làm tóc qua Zalo', 'Meta CAPI Lead'],
        },
      },
      /* Pipeline mới (TRINH-CHIEU.md mục 1): dashboard, chatbot (lead = AI chốt là lấy SĐT + giữ lịch), afterSale. */
      dashboard: [
        { ten: 'Uốn <span class="grad">setting Hàn Quốc</span>', den: '19/07/2026', khach: 14, tyLe: 0.56 },
        { ten: 'Nhuộm <span class="grad">màu thời trang</span>', den: '22/08/2026', khach: 11, tyLe: 0.54 },
        { ten: 'Phục hồi <span class="grad">tóc hư tổn</span>', den: '28/09/2026', khach: 9, tyLe: 0.58 },
      ],
      chatbot: {
        y: [
          ['Trả lời ngay tức thì, 24/7', 'Khách nhắn lúc nào, AI trả lời sau 2 giây'],
          ['Tư vấn đúng tóc, đúng nhu cầu', 'Hỏi độ dài, tóc đã tẩy nhuộm chưa'],
          ['Chốt đơn = lấy SĐT + giữ lịch', 'Giữ lịch soi tóc, chuyển lễ tân'],
          ['Hiểu hình ảnh khách gửi', 'Khách gửi ảnh tóc, AI nhận ra tóc khô, đã tẩy'],
        ],
        chat: [
          { ref: { img: L(IMG['uon-song']), ten: 'Uốn setting Hàn Quốc · Soi tóc miễn phí' } },
          { kh: 'tóc c dài qua vai, tẩy nhuộm 2 lần rồi, hơi khô. uốn setting có hư ko e?' },
          {
            ai: 'Dạ uốn setting bên em **từ 1.290.000đ**, đã gồm **hấp phục hồi** ạ. Tóc đã tẩy thì stylist cần **soi tóc, test độ đàn hồi** trước, em không dám hứa uốn ngay ạ 💇‍♀️',
            meta: '⚡ Preny AI trả lời sau 2 giây',
          },
          { kh: 'tiệm gần nhà uốn có 500k, khác gì e?' },
          {
            ai: 'Dạ em không dám nói tiệm khác, mỗi nơi khác ở **thuốc uốn và phục hồi** đi kèm ạ. Chị ghé **soi tóc miễn phí 15 phút** nha. Chị cho em xin **tên, SĐT** để giữ lịch ạ.',
          },
          { kh: 'Thảo - 0938 452 716. sáng t7 28/11 c qua dc ko e?' },
          { ai: 'Dạ được ạ! Em giữ lịch **9h thứ Bảy 28/11** với stylist Minh cho chị, chị Vy lễ tân gọi xác nhận liền nha ⚡' },
          { don: true },
          { ok: true },
        ],
        lead: {
          ten: 'Chị Thảo',
          sdt: '0938 452 716',
          nhuCau: 'Tóc dài qua vai, **đã tẩy nhuộm 2 lần**, hơi khô · muốn **uốn setting** · sợ hư tóc',
          the: [['FB Ads · Uốn setting Hàn Quốc', 'ng'], ['#uonsetting', 'qt'], ['#TocDaTay', 'qt'], ['Đã cho SĐT', 'ht']],
          lichNhan: 'Lịch soi tóc',
          lich: ['Soi tóc · stylist Minh', '09:00 · Thứ Bảy 28/11'],
          sale: 'Chị Vy · Lễ tân',
          nut: 'Chuyển cho lễ tân',
          xong: 'Đã chuyển cho chị Vy',
          okTieuDe: 'Đã giữ lịch soi tóc 28/11',
        },
        anh: {
          img: L(IMG['toc-kho']),
          nhan: 'Khách gửi ảnh tóc hiện tại',
          kh: 'Tóc c giờ như này, uốn dc ko e?',
          ai: 'Ảnh chị gửi thấy **ngọn tóc khô, xơ**, có màu tẩy ạ. Tóc vậy thường nên **cắt tỉa ngọn** và **phục hồi trước** rồi mới uốn. Stylist **soi tóc miễn phí** tại salon rồi báo chị uốn được ngay hay chưa nha.',
          pill: '🔍 AI nhìn ảnh tóc, nhận ra tóc khô, đã tẩy',
        },
      },
      afterSale: {
        y1: 'AI gửi tiếp 5 món chăm tóc uốn để bán thêm',
        y2: 'Màu nhuộm mới, ưu đãi phục hồi, hấp dưỡng duy trì',
        gio: 'Lễ tân vừa thanh toán cho chị Thảo',
        don: { ma: '#ML28113', phi: 'gội sấy miễn phí', sp: [{ ten: 'Uốn setting Hàn Quốc + phục hồi', sl: 1, dv: 'lần', gia: 1290000 }] },
        loi: 'Cảm ơn chị Thảo đã chọn Mộc Lan Hair Salon 💇‍♀️ Tóc uốn giữ sóng lâu hơn khi chăm đúng cách. Khách uốn setting hay dùng thêm mấy món này ạ:',
        sp: [
          { img: L(IMG['dau-goi']), ten: 'Dầu gội không sulfate cho tóc uốn', gia: 320000, cu: 380000, nut: 'Thêm vào' },
          { img: L(IMG['chai-bom']), ten: 'Kem tạo lọn, giữ sóng mềm', gia: 250000, nut: 'Thêm vào' },
          { img: L(IMG['my-pham-toc']), ten: 'Tinh dầu dưỡng ngọn tóc', gia: 280000, nut: 'Thêm vào' },
          { img: L(IMG['goi-dau']), ten: 'Gói hấp phục hồi 3 lần', gia: 990000, nut: 'Đăng ký' },
          { img: L(IMG['dung-cu']), ten: 'Lược răng thưa và khăn ủ tóc', gia: 150000, nut: 'Thêm vào' },
        ],
        khach: 'Lấy thêm c chai dầu gội với kem tạo lọn nha',
        pill: '🛍 Khách thêm ngay: hóa đơn tăng từ 1.290.000đ lên 1.860.000đ',
        fmm: {
          sep: '1 tháng sau · tin Facebook FMM',
          chao: 'Chào chị Thảo 👋 Salon vừa có bảng màu nhuộm đón Tết, mời chị ghé soi tóc nha!',
          img: L(IMG['toc-song-nau']),
          nhan: 'MÀU MỚI ĐÓN TẾT',
          ten: 'Nhuộm nâu socola cho tóc uốn',
          mo: 'Khách cũ giảm 10%, soi tóc miễn phí trước khi nhuộm.',
          nut: 'Xem bảng màu',
        },
        zbs: {
          ten: 'Ưu đãi phục hồi cho chị Thảo',
          mo: 'Cảm ơn chị đã làm tóc ở Mộc Lan. Gửi chị ưu đãi phục hồi cho tóc uốn của chị:',
          dong: [
            ['Mã ưu đãi', '**MOCLAN20**'],
            ['Ưu đãi', 'Giảm 20% gói phục hồi chuyên sâu'],
            ['Hạn dùng', '31/01/2027'],
          ],
          nut: 'Dùng ưu đãi',
        },
      },
      tieuDe6: 'Hệ thống AI chatbot giúp tăng<br><span class="grad">tỷ lệ chốt lịch làm tóc</span>',
      // Không lên đơn tự động (khách soi tóc tại salon rồi stylist mới báo giá chốt) → 5 tính năng
      tinhNang: [
        ['AI tư vấn, chủ động mời soi tóc', 'Lấy SĐT, giữ lịch stylist'],
        ['Bám đuổi khách cân nhắc lâu', 'Gửi không gian salon, khách thật'],
        ['AI chăm sóc khách sau khi làm tóc', 'Hỏi thăm, mời hấp phục hồi duy trì'],
        ['Bộ công cụ Remarketing FMM và ZBS', 'Khai thác lại dữ liệu khách cũ'],
        ['Gửi sự kiện Lead qua Meta CAPI', 'Hỗ trợ tối ưu quảng cáo Facebook'],
      ],

      chotDon: {
        nganh: 'salon tóc',
        nguoi: 'Lễ tân, stylist',
        chotLa: 'AI chốt đơn = lấy SĐT + giữ lịch',
        buoc: [
          { t: 'Chạy quảng cáo', d: 'Thu hút khách muốn làm tóc', icon: 'megaphone', own: 'Salon chạy quảng cáo', mock: 'ad', img: L(IMG['uon-song']), text: 'Uốn setting Hàn Quốc, soi tóc miễn phí 💇‍♀️', btn: 'Gửi tin nhắn' },
          { t: 'Bắt đầu chat', d: 'Hỏi độ dài, tóc đã tẩy nhuộm chưa', icon: 'chat', ai: true, mock: 'chat',
            msgs: [['kh', 'Uốn setting giá sao em?'], ['ai', 'Dạ từ 1.290.000đ ạ. Tóc chị đã tẩy nhuộm chưa? 💇‍♀️']] },
          { t: 'Mời soi tóc', d: 'Lấy SĐT, giữ lịch stylist', icon: 'phone', ai: true, chot: true, mock: 'form', fields: ['Chị Thảo · tóc đã tẩy, qua vai', '0938 452 716'], ok: 'Đã giữ lịch 28/11' },
          { t: 'Lễ tân gọi xác nhận', d: 'Xác nhận giờ, stylist phụ trách', icon: 'call', mock: 'lich', ten: 'Soi tóc · stylist Minh', gio: '09:00 · Thứ Bảy 28/11', ok: 'Đã xác nhận lịch' },
          { t: 'Soi tóc tại salon', d: 'Test độ đàn hồi, báo giá chốt', icon: 'users', mock: 'img', img: L(IMG['stylist']), cap: 'Stylist soi tóc, tư vấn kiểu hợp' },
          { t: 'Làm tóc, thanh toán', d: 'Phục hồi, uốn, hấp dưỡng', icon: 'check', mock: 'img', img: L(IMG['uon-lo']), cap: '✓ Khách uốn setting' },
        ],
        vong: { t: 'Chăm sóc sau khi làm tóc & Remarketing', d: 'Hỏi thăm, dặn cách giữ sóng, mời hấp phục hồi duy trì, gửi ưu đãi, màu nhuộm mới' },
      },

      bamDuoi: {
        nhan: 'Vì sao bám đuổi của Preny đặc biệt', shopB: 'Salon B',
        cmpSai: ['Khách im → gửi “Chị còn quan tâm làm tóc không ạ?”', 'Không biết khách muốn làm gì, vì sao im', 'Khách thấy phiền, bỏ qua tin nhắn'],
        cmpDung: ['Khách nhắn xong im → nhắc đúng dịch vụ khách hỏi (thẻ <b>#uonsetting</b> từ quảng cáo)',
                  'Báo giá xong im → bám đuổi theo giá: tặng phục hồi, soi tóc miễn phí (thẻ <b>#baogia</b>)',
                  'Đúng nhu cầu, đúng lý do im → khách quay lại giữ lịch'],
        hoi: 'Uốn setting giá sao em?',
        traLoiThuong: 'Dạ từ 1.290.000đ ạ.',
        nhacChung: 'Chị còn quan tâm làm tóc không ạ? 😊',
        refImg: L(IMG['uon-song']), refTen: 'Uốn setting Hàn Quốc',
        vd1: {
          ten: 'Khách nhắn xong im',
          kh: 'Tóc đã tẩy uốn setting được không em?',
          ai: 'Dạ được ạ, stylist cần soi tóc, test độ đàn hồi trước. Tóc chị dài tới đâu ạ?',
          tag: '🏷 #uonsetting', tagNote: 'thẻ từ quảng cáo · khách im 1 ngày',
          nhac: 'Chị Thảo ơi, em gửi chị <b>feedback một chị khách tóc đã tẩy</b> uốn setting bên em nè 💇‍♀️ Chị ghé <b>soi tóc miễn phí 15 phút</b> nha, chưa cần làm gì ạ.',
          dung: '🎯 Theo thẻ #uonsetting: nhắc đúng dịch vụ khách hỏi',
          khach: 'Cuối tuần c ghé được ko e?',
        },
        vd2: {
          ten: 'Báo giá xong im',
          kh: 'Uốn setting giá sao em?',
          ai: 'Dạ uốn setting Hàn Quốc <b>từ 1.290.000đ</b>, đã gồm hấp phục hồi ạ.',
          tag: '🏷 #baogia', tagNote: 'báo giá xong khách im 2 ngày',
          nhac: 'Chị ơi, tháng này uốn setting được <b>tặng thêm 1 lần hấp phục hồi</b>, <b>báo giá chốt trước khi làm</b>, không phát sinh ạ. Em giữ lịch thứ Bảy cho chị nha?',
          dung: '🎯 Theo thẻ #baogia: bám đuổi theo giá, đúng lý do khách im',
          khach: 'Ok giữ giúp c sáng t7',
        },
      },

      binhLuan: {
        post: '<b>Soi tóc miễn phí</b> trước khi uốn, tóc đã tẩy nhuộm vẫn được tư vấn kỹ 💇‍♀️ Uốn setting Hàn Quốc từ 1.290.000đ',
        img: L(IMG['uon-nau']),
        kav: 'TM', kten: 'Trần Mai', hoi: 'Tóc mình ngắn ngang vai uốn setting được không shop?',
        traLoi: 'Dạ chào chị Mai! Salon vừa nhắn tin tư vấn chi tiết cho chị, chị xem tin nhắn nhé 💬',
        act2: 'Nhắn riêng, mời soi tóc',
        nhan: 'Chào chị Mai! Tóc <b>ngang vai</b> uốn setting <b>lọn to</b> rất hợp ạ, giá từ 1.290.000đ. Chị ghé <b>soi tóc miễn phí</b> để stylist chọn cỡ lọn hợp mặt nha. Chị cho em xin SĐT để giữ lịch ạ!',
        sp: { ten: 'Soi tóc, tư vấn kiểu uốn', gia: 'Miễn phí · giữ lịch trước', img: L(IMG['salon']) },
        khach: 'Số mình 0905 318 624 nhé',
      },

      duLieu: {
        shopA: 'Salon A',
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: uốn không hư tóc, giữ sóng 1 năm', 'Khách khiếu nại, salon mất uy tín'],
        dung: ['Chỉ trả lời theo dữ liệu salon cung cấp', 'Không chắc chắn → xin khách chờ, AI tạm dừng', 'Báo ngay lễ tân, stylist vào trả lời'],
        hoi: 'Tóc chị tẩy rồi, uốn có cam kết không hư không em? Giữ sóng được bao lâu?',
        aiSai: 'Dạ <b>cam kết không hư tóc</b> ạ, sóng <b>giữ được 1 năm</b> luôn chị 🥰',
        thucTe: '⚠ Thực tế: độ bền sóng tùy tình trạng tóc và cách chăm; tóc đã tẩy phải soi tóc trước, không ai cam kết được',
        gian: 'Uốn xong 2 tuần tóc khô xơ, sóng duỗi gần hết! Sao nói giữ 1 năm? 😠',
        cho: 'Dạ chị chờ em một chút để em kiểm tra chính xác thông tin cho mình nhé!',
        nv: 'Chị Vy · Lễ tân · người thật',
        nvTraLoi: 'Dạ em xin lỗi chị, độ bền sóng còn tùy tóc và cách chăm ạ. Chị ghé salon để stylist kiểm tra, hấp phục hồi miễn phí cho chị, chị hẹn giờ giúp em nhé!',
      },

      tags: {
        rows: [
          { ten: 'Nguyễn Phương Thảo', av: 'PT', kenh: 'fb', msg: 'Tóc đã tẩy uốn setting được ko e?', gio: '14:47',
            tags: [['FB Ads · Uốn setting Hàn Quốc', 'ng'], ['#uonsetting', 'qt'], ['#TocDaTay', 'qt'], ['Hẹn soi tóc 28/11', 'ht']] },
          { ten: 'Trần Mai', av: 'TM', kenh: 'fb', msg: 'Tóc ngang vai uốn được không?', gio: '10:12',
            tags: [['Bình luận bài viết', 'ng'], ['#uonlonto', 'qt'], ['Đã cho SĐT', 'ht'], ['Gọi lần 1 ✓', 'sa']] },
          { ten: 'Lê Khánh Linh', av: 'KL', kenh: 'tiktok', msg: 'Nhuộm nâu tây có cần tẩy ko shop?', gio: '16:30',
            tags: [['TikTok · Video nhuộm màu', 'ng'], ['#nhuommau', 'qt'], ['Đã cho SĐT', 'ht'], ['Gọi lần 2 · không bắt máy', 'sa']] },
          { ten: 'Phạm Thu Hà', av: 'TH', kenh: 'zalo', msg: 'Tóc rụng nhiều phục hồi được ko?', gio: '09:05',
            tags: [['Zalo OA', 'ng'], ['#phuchoi', 'qt'], ['Đang bám đuổi', 'ht']] },
          { ten: 'Võ Ngọc Hân', av: 'NH', kenh: 'zalo', msg: 'Đặt lịch hấp phục hồi CN nha', gio: 'Hôm qua',
            tags: [['Zalo · Khách cũ', 'ng'], ['#happhuchoi', 'qt'], ['Đã làm tóc', 'ht'], ['Đã kết nối Zalo', 'za']] },
        ],
        chanDung: {
          ten: 'Nguyễn Phương Thảo', av: 'PT', kenh: 'fb', sub: 'Facebook Messenger · 0938 452 716',
          nhom: [
            ['Nguồn khách', [['Facebook Ads', 'ng'], ['Bài: Uốn setting Hàn Quốc', 'ng']]],
            ['Quan tâm', [['#uonsetting', 'qt'], ['#TocDaTay', 'qt']]],
            ['Hành trình', [['Nhắn tin 18/11', 'ht'], ['Cho SĐT 23/11', 'ht'], ['Hẹn soi tóc 28/11', 'ht']]],
            ['Lễ tân gọi', [['Chị Vy · lần 1 ✓', 'sa']]],
            ['Kết nối', [['Đã kết nối Zalo', 'za'], ['Khách mới · L1', 'lv']]],
          ],
          ghiChu: 'Tóc dài qua vai, đã tẩy nhuộm 2 lần, hơi khô. Muốn uốn setting, sợ hư tóc, đang so tiệm gần nhà 500k. Hẹn soi tóc 9h thứ Bảy 28/11 với stylist Minh.',
        },
      },

      chotLai: [
        ['KHÁCH HÀNG', ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến']],
        ['AI CHATBOT', ['Phản hồi nhanh tức thì', 'Hỏi đúng tình trạng tóc', 'Không hứa bừa, không chê tiệm khác', 'Lấy SĐT, giữ lịch stylist']],
        ['BÁM ĐUỔI', ['Gửi 5 tin nhắn trong 7 ngày: không gian salon, khách thật, stylist, quy trình']],
        ['GIỮ LỊCH', ['Khách soi tóc miễn phí', 'Stylist báo giá chốt, làm tóc']],
        ['MUA LẠI', ['Mời hấp phục hồi duy trì, gửi ưu đãi, màu nhuộm mới qua FB và Zalo']],
      ],
    },
  };
})();
