/* Kịch bản: BẢO HIỂM NHÂN THỌ — BẢN TRÌNH CHIẾU, nhóm CÂN NHẮC NHIỀU. Làm 23/11/2026 theo người dùng:
   "Cân nhắc: Bán bảo hiểm nhân thọ". Cùng mạch với bất động sản (chung-cu-tc.js).
   "AI chốt đơn = lấy tên + SĐT + hẹn buổi tư vấn 1-1 với tư vấn viên": tư vấn viên gọi video Zalo, nghe nhu cầu,
   lập bảng minh họa 2 phương án; gửi sự kiện Lead (không gửi Purchase khi khách chưa ký hợp đồng).
   Demo chat 1 khách từ đầu tới cuối (khớp Bài 2 video ngang, demo/bai2/kich-ban-bao-hiem-nhan-tho-tc.js):
   anh Khoa bấm quảng cáo bảo hiểm gia đình → AI giới thiệu gói bảo vệ trụ cột + quỹ học vấn, gửi đúng ảnh quảng cáo
   → hỏi tuổi, số con, ưu tiên → 35 tuổi, 2 bé 6 và 3 tuổi, hỏi đóng tháng bao nhiêu, có lời không, sợ khó chi trả
   → AI: KHÔNG báo phí chung chung (tùy tuổi, sức khỏe, số tiền bảo hiểm), KHÔNG hứa lãi (phần đầu tư không đảm bảo),
   chi trả theo điều khoản hợp đồng, 21 ngày cân nhắc, không ép ký → mời gọi video 30 phút, xin tên + SĐT
   → khách im → bám đuổi 5 tin (3 lớp bảo vệ, feedback khách, 21 ngày cân nhắc, quy trình buổi tư vấn, mời giữ lịch)
   → khách hẹn 19h30 CN 29/11 → chuyển chị Ngọc · Tư vấn viên bảo hiểm
   → sau buổi tư vấn: gửi lại bảng minh họa 2 phương án; bài cách nộp hồ sơ chi trả; mời buổi chia sẻ online miễn phí.
   Không khuyến mại, quà tặng, giảm phí (ngành bảo hiểm không được). Không có tin nhắc trước giờ hẹn.
   Không dùng tên công ty bảo hiểm thật. Tên đơn vị, khách, SĐT, phí, feedback, tư vấn viên: dữ liệu minh họa.
   Ảnh: Unsplash (ảnh thật, không phải khách của đơn vị). */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'bo-con': '1657664072470-99b02c2143f2',   // bố con ngồi sofa (ảnh quảng cáo)
    'gia-dinh': '1586865972793-c07ba4785d85', // mẹ và 2 bé
    'bo-be': '1536541667880-3945b221a85d',    // bố hôn bé
    'bo-con-2': '1609220136736-443140cffec6', // bố bế 2 con
    'tu-van': '1650784854382-6d3b15e07b94',   // tư vấn viên cầm máy tính bảng
    'tu-van-2': '1581065178047-8ee15951ede6', // tư vấn viên áo vest
    'ky-hd': '1664463760781-f159dfe3af30',    // vợ chồng ký giấy tờ
    'bat-tay': '1686771416282-3888ddaf249b',  // bắt tay bên bàn làm việc
    'gap-mat': '1573496267526-08a69e46a409',  // 2 người trao đổi bên bàn
    'bac-si': '1758691462430-81160850496c',   // bác sĩ ghi hồ sơ
    'ky-giay': '1562564055-71e051d33c19',     // ký giấy tờ
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    badge: 'AI CHATBOT · BẢO HIỂM NHÂN THỌ',
    shop: { name: 'Tư Vấn Bảo Hiểm Gia An', initials: 'GA' },
    headline: { pre: 'AI chatbot tư vấn bảo hiểm và', em: 'hẹn khách gặp tư vấn viên' },
    sub: 'Hỏi đúng nhu cầu gia đình; không báo phí chung chung, không hứa lãi; xin SĐT, giữ lịch tư vấn 1-1 rồi chuyển ngay cho tư vấn viên.',
    cta: 'Dùng thử miễn phí tại **preny.ai**\nHotline **0389 647 778**',
    speed: 1.13,
    timing: { read0: 1000, readPerChar: 28, readMax: 4500, type0: 800, typePerChar: 3, typeMax: 1500, fastType: 500,
              featureHold: 1400, sepHold: 1100, cardHold: 4000, introCard: 250 },

    images: Object.fromEntries(Object.entries(IMG).map(([k, id]) => [k, U(id)])),

    // Cột trái demo ngang (dùng khi xuất video khung ngang), đúng thứ tự diễn trong steps
    features: [
      { title: 'AI tư vấn đúng nhu cầu gia đình', desc: 'Trả lời ngay, cả lúc nửa đêm.',
        kws: ['Giới thiệu gói, gửi đúng ảnh quảng cáo', 'Hỏi tuổi, số con, ưu tiên bảo vệ hay quỹ học', 'Không báo phí chung chung, không hứa lãi'] },
      { title: 'Bám đuổi khách cân nhắc lâu', desc: 'Đơn vị nằm đầu danh sách khi khách chọn.',
        kws: ['Khách chưa cho SĐT: tự gắn thẻ #baohiemgiadinh', 'Feedback khách được chi trả', '21 ngày cân nhắc, quyền lợi theo hợp đồng', 'Quy trình rõ, mời giữ lịch'] },
      { title: 'AI xin SĐT, hẹn tư vấn 1-1', desc: 'Khách nóng chuyển ngay cho tư vấn viên.',
        kws: ['Cho khách lý do để cho số: lập bảng minh họa riêng', 'Lưu khách, gắn thẻ nhu cầu, số con', 'Chuyển chị Ngọc · Tư vấn viên bảo hiểm'] },
      { title: 'AI chăm sóc sau buổi tư vấn', desc: 'Khách quay lại ký hợp đồng.',
        kws: ['Gửi lại bảng minh họa 2 phương án', 'Chia sẻ cách nộp hồ sơ chi trả', 'Mời buổi chia sẻ online miễn phí'] },
    ],

    steps: [
      { intro: true, hold: 1800 },

      /* ---- 1. Tư vấn: giới thiệu gói + ảnh quảng cáo → nhu cầu → hỏi phí, lời, chi trả → mời hẹn tư vấn ---- */
      { feature: 1 },
      { sep: 'Khách bấm Gửi tin nhắn từ quảng cáo Facebook', style: 'time', hold: 800 },
      { kh: 'Bảo hiểm cho bố với con tư vấn sao em?' },
      { ai: 'Dạ chào anh Khoa, bên em tư vấn gói **bảo vệ trụ cột gia đình** kết hợp **quỹ học vấn cho con**, tư vấn viên có chứng chỉ hành nghề ạ.', fast: true, meta: '⚡ Preny AI trả lời sau 2 giây', kw: 0 },
      { aiImg: 'bo-con' },
      { ai: 'Anh năm nay bao nhiêu tuổi, nhà mình mấy bé, anh muốn ưu tiên **bảo vệ thu nhập** hay **để dành học cho con** ạ?' },
      { kh: 'a 35t, 2 bé 6t với 3t, vợ làm vp. muốn có cái bảo vệ cho a với để dành tiền học cho tụi nhỏ. đóng tháng bn e? có lời ko? nghe nói bh khó chi trả lắm' },
      { ai: 'Dạ phí tùy **tuổi, sức khỏe và số tiền bảo hiểm** anh chọn nên em không dám báo số chung chung ạ. Phần quỹ học nếu có đầu tư thì lãi **không được đảm bảo**, em không hứa lời. Quyền lợi chi trả theo đúng **điều khoản hợp đồng** anh nha.', kw: 1 },
      { ai: 'Nhận hợp đồng xong anh còn **21 ngày cân nhắc**, đổi ý được hoàn phí theo quy định ạ. Anh chị dành **30 phút gọi video Zalo** với tư vấn viên, tư vấn viên lập **bảng minh họa riêng**, không ký ngay. Anh cho em xin **tên và SĐT** để giữ lịch nha 🛡️', kw: 2 },
      { seen: true },

      /* ---- 2. Khách im → bám đuổi 5 tin trong 7 ngày ---- */
      { feature: 2 },
      { sep: 'Khách chưa để lại SĐT… · AI gắn thẻ #baohiemgiadinh #QuyHocVan', style: 'silent', kw: 0, hold: 1600 },
      { sep: '— 15 phút sau —' },
      { ai: 'Anh Khoa ơi, em tóm tắt **3 lớp bảo vệ** các gia đình có con nhỏ hay cần nha 🛡️', meta: '🛡️ Tự động · Bám đuổi', kw: 1 },
      { aiImgs: [{ img: 'bo-con-2', label: 'Bảo vệ thu nhập' }, { img: 'gia-dinh', label: 'Quỹ học cho con' },
                 { img: 'bo-be', label: 'Sức khỏe cho bé' }, { img: 'tu-van', label: 'Tư vấn 1-1' }], hold: 3200 },
      { sep: '— 1 ngày sau —' },
      { card: {
          tag: '⭐ Feedback khách hàng',
          intro: 'Đây là chia sẻ của một anh khách bên em năm ngoái ạ 💬',
          lines: ['“Lúc đầu mình cũng sợ khó chi trả. Bé nhà mình nằm viện 4 ngày, mình nộp hồ sơ qua app, khoảng 1 tuần là nhận tiền viện phí theo hợp đồng.”', 'Anh Minh Tuấn, Thủ Đức'],
        }, meta: '🛡️ Tự động · Bám đuổi', kw: 1, hold: 4200 },
      { sep: '— 1 ngày sau —' },
      { card: {
          tag: '✓ Tư Vấn Bảo Hiểm Gia An',
          intro: 'Mấy điều anh nên biết trước khi tham gia ạ:',
          lines: ['**21 ngày cân nhắc** sau khi nhận hợp đồng, đổi ý được hoàn phí theo quy định', 'Quyền lợi và điều khoản loại trừ ghi rõ trong **hợp đồng**', 'Tư vấn viên có **chứng chỉ hành nghề**, giải thích từng điều khoản'],
        }, meta: '🛡️ Tự động · Bám đuổi', kw: 2, hold: 4000 },
      { sep: '— 1 ngày sau —' },
      { ai: 'Buổi tư vấn bên em là **nghe nhu cầu nhà mình → bảng minh họa 2 phương án → hỏi đáp**, khoảng 30 phút. Anh chị chưa ưng thì chưa ký, không ép ạ 😊', meta: '🛡️ Tự động · Bám đuổi', kw: 3 },
      { sep: '— 2 ngày sau —' },
      { ai: 'Tối Chủ nhật 29/11 chị Ngọc bên em còn vài khung giờ gọi video, anh muốn em giữ lịch cho anh chị không ạ?', meta: '🛡️ Tự động · Bám đuổi', kw: 3 },
      { kh: 'tối CN này 2 vc rảnh, gọi video đc e' },

      /* ---- 3. Khách quay lại → xin tên + SĐT, giữ lịch → chuyển tư vấn viên ---- */
      { feature: 3 },
      { ai: 'Dạ được ạ, em giữ khung **19h30 tối Chủ nhật 29/11** gọi video Zalo. Anh cho em xin **tên và SĐT có Zalo** để tư vấn viên gọi nha 🛡️', fast: true, kw: 0 },
      { kh: 'Khoa, 0938 615 204 nha e' },
      { card: {
          tag: '✓ Đã giữ lịch tư vấn · anh Khoa', ok: true,
          lines: ['Thời gian: **19h30 tối Chủ nhật 29/11/2026**', 'Hình thức: **gọi video Zalo** · 2 vợ chồng', 'Nhu cầu: **bảo vệ trụ cột + quỹ học cho 2 bé**', 'Lập bảng minh họa riêng, **không ký ngay**'],
        }, meta: '✓ Đã lưu khách, gắn thẻ #baohiemgiadinh #QuyHocVan', kw: 1, hold: 4200 },
      { ai: '**Chị Ngọc bên tư vấn** sẽ nhắn anh xác nhận và hỏi thêm vài thông tin sức khỏe để chuẩn bị bảng minh họa nha 🛡️', meta: '✓ Đã chuyển chị Ngọc · Tư vấn viên bảo hiểm', kw: 2, hold: 1500 },

      /* ---- 4. Sau buổi tư vấn: bảng minh họa → cách nộp hồ sơ chi trả → buổi chia sẻ online ---- */
      { feature: 4 },
      { sep: '— Tối 29/11 · sau buổi tư vấn —' },
      { ai: 'Anh Khoa ơi, em gửi lại anh **bảng minh họa 2 phương án** chị Ngọc trao đổi tối nay: **phương án A** tập trung bảo vệ thu nhập, **phương án B** thêm quỹ học vấn cho 2 bé. Anh chị cần hỏi thêm cứ nhắn em nha 🛡️', meta: '🛡️ Tự động · Chăm sóc sau buổi tư vấn', kw: 0 },
      { kh: 'Vợ a nghiêng phương án B, để a đọc kỹ điều khoản đã' },
      { sep: '— 1 tuần sau —' },
      { ai: 'Em gửi anh bài **cách nộp hồ sơ chi trả khi nằm viện**: chụp hóa đơn, giấy ra viện, nộp qua app là xong ạ. Anh đọc thêm để yên tâm nha.', meta: '📅 Tự động · Chia sẻ quyền lợi', kw: 1 },
      { kh: 'Ok e, cuối tuần a chị hẹn chị Ngọc ký phương án B' },
      { ai: 'Dạ em báo chị Ngọc chuẩn bị hồ sơ ạ. Nhận hợp đồng xong anh chị vẫn có **21 ngày cân nhắc** nha. Tối 19/12 bên em có buổi chia sẻ online miễn phí **“Lập kế hoạch tài chính cho con”**, anh chị muốn tham gia em gửi link ạ 🛡️', kw: 2 },
      // Không có { end: true }: bấm → thêm một lần là sang thẳng slide kế.
    ],

    /* ===== Nội dung slide trình chiếu (trinh-chieu.html). Slide thống kê dùng số minh họa (deck.dashboard). ===== */
    deck: {
      demoDoc: {
        khach: 'Minh Khoa',
        sanPham: 'Bảo hiểm trụ cột + quỹ học vấn',
        ngay: '23/11/2026',
        gio: '21:05',
        binhLuan: [
          { ten: 'Trần Thu Hương', noiDung: 'Bảo hiểm cho bé 3 tuổi đóng bao nhiêu em?', traLoi: 'Dạ bên em vừa nhắn tin tư vấn chi tiết cho chị, chị xem inbox nha!' },
        ],
        post: {
          tieuDe: 'BẢO VỆ TRỤ CỘT · QUỸ HỌC CHO CON 🛡️',
          dong: ['Tư vấn 1-1 miễn phí', 'Bảng minh họa riêng theo nhu cầu', '21 ngày cân nhắc sau khi nhận hợp đồng', 'Tư vấn viên có chứng chỉ hành nghề'],
          anh: ['bo-con', 'gia-dinh', 'bo-be', 'tu-van'],
        },
        quangCao: {
          tieuDe: 'BẢO VỆ TRỤ CỘT · QUỸ HỌC CHO CON',
          mo: 'Bố là trụ cột, con đang tuổi đi học? Tư vấn 1-1 miễn phí, lập bảng minh họa riêng theo nhu cầu nhà mình.',
          anh: 'bo-con', nhan: 'MESSENGER', dong: 'Tư vấn 24/7 · Hẹn gặp tư vấn viên', nut: 'Gửi tin nhắn',
        },
        ket: {
          tieuDe: 'PRENY AI – TƯ VẤN BẢO HIỂM, HẸN KHÁCH GẶP TƯ VẤN VIÊN',
          y: ['Trả lời ngay 24/7', 'Hỏi đúng nhu cầu gia đình', 'Không báo phí chung chung, không hứa lãi', 'Lấy SĐT, giữ lịch tư vấn 1-1',
              'Bám đuổi 5 tin trong 7 ngày', 'Báo ngay tư vấn viên', 'Chăm sóc sau buổi tư vấn qua Zalo', 'Meta CAPI Lead'],
        },
      },
      dashboard: [
        { ten: 'Bảo hiểm <span class="grad">trụ cột gia đình</span>', den: '20/07/2026', khach: 24, tyLe: 0.54 },
        { ten: 'Quỹ <span class="grad">học vấn cho con</span>', den: '24/08/2026', khach: 17, tyLe: 0.56 },
        { ten: 'Thẻ <span class="grad">sức khỏe cả nhà</span>', den: '29/09/2026', khach: 13, tyLe: 0.53 },
      ],
      chatbot: {
        y: [
          ['Trả lời ngay tức thì, 24/7', 'Khách nhắn lúc nào, AI trả lời sau 2 giây'],
          ['Tư vấn đúng nhu cầu', 'Hỏi tuổi, số con, ưu tiên bảo vệ hay quỹ học'],
          ['Chốt đơn = lấy SĐT + hẹn tư vấn', 'Giữ lịch gọi video, chuyển tư vấn viên'],
          ['Hiểu hình ảnh khách gửi', 'Khách gửi ảnh hợp đồng cũ, AI chuyển tư vấn viên'],
        ],
        chat: [
          { ref: { img: L(IMG['bo-con']), ten: 'Bảo vệ trụ cột · Quỹ học cho con' } },
          { kh: 'đóng tháng bn e? có lời ko?' },
          {
            ai: 'Dạ phí tùy **tuổi, sức khỏe, số tiền bảo hiểm** nên em không dám báo số chung chung ạ. Phần đầu tư (nếu có) **không đảm bảo lãi**, quyền lợi theo **điều khoản hợp đồng** 🛡️',
            meta: '⚡ Preny AI trả lời sau 2 giây',
          },
          { kh: 'nghe nói bh khó chi trả lắm e' },
          {
            ai: 'Dạ chi trả theo đúng hợp đồng, nhận hợp đồng xong anh còn **21 ngày cân nhắc** ạ. Anh cho em xin **tên, SĐT** để tư vấn viên lập **bảng minh họa riêng** nha.',
          },
          { kh: 'Khoa - 0938 615 204. tối CN 29/11 gọi video đc ko e?' },
          { ai: 'Dạ được ạ! Em giữ khung **19h30 tối CN 29/11**, chị Ngọc bên tư vấn nhắn xác nhận liền nha ⚡' },
          { don: true },
          { ok: true },
        ],
        lead: {
          ten: 'Anh Minh Khoa',
          sdt: '0938 615 204',
          nhuCau: '35 tuổi, trụ cột gia đình · 2 bé **6 tuổi và 3 tuổi** · muốn **bảo vệ thu nhập + quỹ học cho con** · lo khó chi trả',
          the: [['FB Ads · Bảo hiểm gia đình', 'ng'], ['#baohiemgiadinh', 'qt'], ['#QuyHocVan', 'qt'], ['Đã cho SĐT', 'ht']],
          lichNhan: 'Lịch tư vấn',
          lich: ['Gọi video Zalo', '19:30 · Chủ nhật 29/11'],
          sale: 'Chị Ngọc · Tư vấn viên bảo hiểm',
          nut: 'Chuyển cho tư vấn viên',
          xong: 'Đã chuyển cho chị Ngọc',
          okTieuDe: 'Đã giữ lịch tư vấn 29/11',
        },
        anh: {
          img: L(IMG['ky-giay']),
          nhan: 'Khách gửi ảnh hợp đồng cũ',
          kh: 'A có hợp đồng bên khác rồi, mua thêm bên em có trùng ko?',
          ai: 'Ảnh anh gửi là **trang hợp đồng bảo hiểm** anh đang có ạ. Em không nhận xét hợp đồng bên khác. Em chuyển ảnh cho **chị Ngọc** xem cùng anh quyền lợi hiện có, để phần mới chỉ bù đúng chỗ còn thiếu nha.',
          pill: '🔍 AI nhìn ảnh, không chê bên khác, chuyển tư vấn viên',
        },
      },
      afterSale: {
        y1: 'AI gửi tiếp 5 sản phẩm bổ trợ cho khách vừa ký',
        y2: 'Buổi chia sẻ online, thông tin quyền lợi hợp đồng',
        gio: 'Tư vấn viên vừa ký hợp đồng phương án B cho anh Khoa',
        don: { ma: '#GA2911', phi: 'đóng phí theo năm', sp: [{ ten: 'Hợp đồng bảo vệ trụ cột + quỹ học vấn · phương án B', sl: 1, dv: 'năm', gia: 24000000 }] },
        loi: 'Cảm ơn anh Khoa đã tin chọn Gia An 🛡️ Gia đình có con nhỏ hay cân nhắc thêm mấy sản phẩm bổ trợ này ạ (phí năm tham khảo):',
        sp: [
          { img: L(IMG['bo-be']), ten: 'Thẻ sức khỏe cho bé (mỗi bé)', gia: 3500000, nut: 'Thêm vào' },
          { img: L(IMG['gia-dinh']), ten: 'Bảo hiểm cho vợ · trụ cột thứ 2', gia: 15000000, nut: 'Xem thêm' },
          { img: L(IMG['bo-con-2']), ten: 'Quỹ học vấn riêng cho bé út', gia: 12000000, nut: 'Xem thêm' },
          { img: L(IMG['bac-si']), ten: 'Bảo hiểm tai nạn cá nhân', gia: 800000, nut: 'Thêm vào' },
          { img: L(IMG['tu-van-2']), ten: 'Thẻ sức khỏe cả nhà 4 người', gia: 11000000, nut: 'Xem thêm' },
        ],
        khach: 'Thêm thẻ sức khỏe cho 2 bé nha e',
        pill: '🛍 Khách thêm ngay: phí năm từ 24.000.000đ lên 31.000.000đ',
        fmm: {
          sep: '1 tháng sau · tin Facebook FMM',
          chao: 'Chào anh Khoa 👋 Gia An mở buổi chia sẻ online miễn phí cho phụ huynh, anh chị và người quen cùng tham gia nha!',
          img: L(IMG['gia-dinh']),
          nhan: 'CHIA SẺ ONLINE',
          ten: 'Lập kế hoạch tài chính cho con',
          mo: 'Tối thứ 7 · 45 phút · hỏi đáp với tư vấn viên.',
          nut: 'Đăng ký tham gia',
        },
        zbs: {
          ten: 'Thông tin hợp đồng của anh Khoa',
          mo: 'Gia An gửi anh thông tin hợp đồng để tiện theo dõi:',
          dong: [
            ['Số hợp đồng', '**GA2911**'],
            ['Kỳ đóng phí tiếp theo', '29/11/2027'],
            ['Hỗ trợ chi trả', 'Chị Ngọc · nhắn Zalo OA 24/7'],
          ],
          nut: 'Xem quyền lợi',
        },
      },
      tieuDe6: 'Hệ thống AI chatbot giúp tăng<br><span class="grad">tỷ lệ hẹn tư vấn</span>',
      tinhNang: [
        ['AI tư vấn, chủ động mời gặp tư vấn viên', 'Lấy SĐT, giữ lịch tư vấn 1-1'],
        ['Bám đuổi khách cân nhắc lâu', 'Feedback khách được chi trả, quy trình rõ'],
        ['AI chăm sóc sau buổi tư vấn', 'Gửi lại bảng minh họa, chia sẻ quyền lợi'],
        ['Bộ công cụ Remarketing FMM và ZBS', 'Khai thác lại dữ liệu khách cũ'],
        ['Gửi sự kiện Lead qua Meta CAPI', 'Hỗ trợ tối ưu quảng cáo Facebook'],
      ],

      chotDon: {
        nganh: 'bảo hiểm nhân thọ',
        nguoi: 'Tư vấn viên',
        chotLa: 'AI chốt đơn = lấy SĐT + hẹn tư vấn 1-1',
        buoc: [
          { t: 'Chạy quảng cáo', d: 'Thu hút gia đình có con nhỏ', icon: 'megaphone', own: 'Đơn vị chạy quảng cáo', mock: 'ad', img: L(IMG['bo-con']), text: 'Bảo vệ trụ cột, quỹ học cho con 🛡️', btn: 'Gửi tin nhắn' },
          { t: 'Bắt đầu chat', d: 'Hỏi tuổi, số con, ưu tiên', icon: 'chat', ai: true, mock: 'chat',
            msgs: [['kh', 'Bảo hiểm cho bố với con sao em?'], ['ai', 'Dạ anh bao nhiêu tuổi, nhà mình mấy bé ạ? 🛡️']] },
          { t: 'Mời hẹn tư vấn', d: 'Lấy SĐT, giữ lịch gọi video', icon: 'phone', ai: true, chot: true, mock: 'form', fields: ['Anh Khoa · 35 tuổi, 2 bé', '0938 615 204'], ok: 'Đã giữ lịch 29/11' },
          { t: 'Tư vấn viên xác nhận', d: 'Hỏi thông tin sức khỏe, chuẩn bị', icon: 'call', mock: 'lich', ten: 'Tư vấn 1-1 qua Zalo', gio: '19:30 · Chủ nhật 29/11', ok: 'Đã xác nhận lịch' },
          { t: 'Buổi tư vấn 1-1', d: 'Bảng minh họa 2 phương án', icon: 'users', mock: 'img', img: L(IMG['gap-mat']), cap: 'Tư vấn viên giải thích quyền lợi' },
          { t: 'Ký hợp đồng', d: 'Chọn phương án, ký, 21 ngày cân nhắc', icon: 'check', mock: 'img', img: L(IMG['ky-hd']), cap: '✓ Khách ký phương án B' },
        ],
        vong: { t: 'Chăm sóc sau buổi tư vấn & Remarketing', d: 'Gửi lại bảng minh họa, chia sẻ quyền lợi, buổi chia sẻ online, sản phẩm bổ trợ' },
      },

      bamDuoi: {
        nhan: 'Vì sao bám đuổi của Preny đặc biệt', shopB: 'Đơn vị B',
        cmpSai: ['Khách im → gửi “Anh còn quan tâm bảo hiểm không ạ?”', 'Không biết khách mấy con, ưu tiên bảo vệ hay quỹ học', 'Khách thấy phiền, bỏ qua tin nhắn'],
        cmpDung: ['Khách nhắn xong im → nhắc đúng nỗi lo của khách (thẻ <b>#baohiemgiadinh</b> từ quảng cáo)',
                  'Hỏi phí xong im → bám đuổi theo phí: bảng minh họa riêng, 21 ngày cân nhắc (thẻ <b>#hoiphi</b>)',
                  'Đúng nhu cầu, đúng lý do im → khách quay lại giữ lịch tư vấn'],
        hoi: 'Bảo hiểm cho bố với con sao em?',
        traLoiThuong: 'Dạ phí từ 1 triệu/tháng ạ.',
        nhacChung: 'Anh còn quan tâm bảo hiểm không ạ? 😊',
        refImg: L(IMG['bo-con']), refTen: 'Bảo vệ trụ cột · Quỹ học cho con',
        vd1: {
          ten: 'Khách nhắn xong im',
          kh: 'Nghe nói bảo hiểm khó chi trả lắm phải không em?',
          ai: 'Dạ quyền lợi chi trả theo đúng điều khoản hợp đồng ạ. Anh muốn ưu tiên bảo vệ thu nhập hay quỹ học cho con ạ?',
          tag: '🏷 #baohiemgiadinh', tagNote: 'thẻ từ quảng cáo · khách im 1 ngày',
          nhac: 'Anh Khoa ơi, em gửi anh <b>chia sẻ của một anh khách</b> được chi trả viện phí cho bé, nộp hồ sơ qua app 🛡️ Anh chị dành <b>30 phút gọi video</b> với tư vấn viên nha.',
          dung: '🎯 Theo thẻ #baohiemgiadinh: nhắc đúng nỗi lo chi trả',
          khach: 'Tối CN gọi được ko e?',
        },
        vd2: {
          ten: 'Hỏi phí xong im',
          kh: 'Đóng tháng bao nhiêu em?',
          ai: 'Dạ phí tùy <b>tuổi, sức khỏe, số tiền bảo hiểm</b> ạ.',
          tag: '🏷 #hoiphi', tagNote: 'hỏi phí xong khách im 2 ngày',
          nhac: 'Anh ơi, tư vấn viên lập <b>bảng minh họa riêng</b> theo đúng ngân sách nhà mình, nhận hợp đồng xong còn <b>21 ngày cân nhắc</b> ạ. Em giữ lịch tư vấn tối CN cho anh nha?',
          dung: '🎯 Theo thẻ #hoiphi: bám đuổi theo phí, đúng lý do khách im',
          khach: 'Ok giữ giúp a 19h30',
        },
      },

      binhLuan: {
        post: '<b>Bảo vệ trụ cột, quỹ học cho con</b> · tư vấn 1-1 miễn phí, bảng minh họa riêng theo nhu cầu 🛡️',
        img: L(IMG['bo-con-2']),
        kav: 'TH', kten: 'Trần Thu Hương', hoi: 'Bảo hiểm cho bé 3 tuổi đóng bao nhiêu em?',
        traLoi: 'Dạ chào chị Hương! Bên em vừa nhắn tin tư vấn chi tiết cho chị, chị xem tin nhắn nhé 💬',
        act2: 'Nhắn riêng, gửi tóm tắt quyền lợi',
        nhan: 'Chào chị Hương! Phí bảo hiểm cho bé tùy <b>độ tuổi và quyền lợi</b> chị chọn ạ. Em gửi chị tóm tắt quyền lợi <b>thẻ sức khỏe trẻ em</b>. Chị cho em xin SĐT để tư vấn viên lập bảng minh họa riêng cho bé nha!',
        sp: { ten: 'Thẻ sức khỏe cho bé', gia: 'phí tùy độ tuổi', img: L(IMG['gia-dinh']) },
        khach: 'Số mình 0906 273 418 nhé',
      },

      duLieu: {
        shopA: 'Đơn vị A',
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: cam kết lãi 8%/năm, bệnh gì cũng trả', 'Khách khiếu nại, đơn vị mất uy tín'],
        dung: ['Chỉ trả lời theo dữ liệu đơn vị cung cấp', 'Không chắc chắn → xin khách chờ, AI tạm dừng', 'Báo ngay tư vấn viên vào trả lời'],
        hoi: 'Mua gói này có cam kết lãi 8%/năm không em? Bệnh gì cũng được chi trả hả?',
        aiSai: 'Dạ <b>cam kết lãi 8%/năm</b> ạ, <b>bệnh gì cũng chi trả</b> luôn anh 🥰',
        thucTe: '⚠ Thực tế: phần đầu tư không đảm bảo lãi; chi trả theo điều khoản hợp đồng, có điều khoản loại trừ',
        gian: 'Hồ sơ bị từ chối vì bệnh có sẵn! Sao hôm trước nói bệnh gì cũng trả, còn cam kết lãi? 😠',
        cho: 'Dạ anh chờ em một chút để em kiểm tra chính xác thông tin cho mình nhé!',
        nv: 'Chị Ngọc · Tư vấn viên bảo hiểm · người thật',
        nvTraLoi: 'Dạ em xin lỗi anh ạ. Quyền lợi chi trả theo điều khoản hợp đồng, phần đầu tư không cam kết lãi. Em cùng anh xem lại hợp đồng, giải thích rõ điều khoản loại trừ và các quyền lợi anh vẫn được hưởng nhé!',
      },

      tags: {
        rows: [
          { ten: 'Ngô Minh Khoa', av: 'MK', kenh: 'fb', msg: 'Bảo hiểm cho bố với con tư vấn sao em?', gio: '21:06',
            tags: [['FB Ads · Bảo hiểm gia đình', 'ng'], ['#baohiemgiadinh', 'qt'], ['#QuyHocVan', 'qt'], ['Hẹn tư vấn 29/11', 'ht']] },
          { ten: 'Trần Thu Hương', av: 'TH', kenh: 'fb', msg: 'Bảo hiểm cho bé 3 tuổi bao nhiêu?', gio: '10:12',
            tags: [['Bình luận bài viết', 'ng'], ['#baohiemtreem', 'qt'], ['Đã cho SĐT', 'ht'], ['Gọi lần 1 ✓', 'sa']] },
          { ten: 'Phạm Quốc Việt', av: 'QV', kenh: 'tiktok', msg: 'Hợp đồng rút trước hạn được không?', gio: '16:30',
            tags: [['TikTok · Video hỏi đáp', 'ng'], ['#hopdong', 'qt'], ['Đã cho SĐT', 'ht'], ['Gọi lần 2 · không bắt máy', 'sa']] },
          { ten: 'Lê Thị Hạnh', av: 'TH', kenh: 'zalo', msg: 'Có gói nào cho bố mẹ 60 tuổi không?', gio: '09:05',
            tags: [['Zalo OA', 'ng'], ['#chobome', 'qt'], ['Đang bám đuổi', 'ht']] },
          { ten: 'Đỗ Văn Lâm', av: 'VL', kenh: 'zalo', msg: 'Giới thiệu em trai mới cưới', gio: 'Hôm qua',
            tags: [['Zalo · Khách cũ', 'ng'], ['#gioithieu', 'qt'], ['Đã ký hợp đồng', 'ht'], ['Đã kết nối Zalo', 'za']] },
        ],
        chanDung: {
          ten: 'Ngô Minh Khoa', av: 'MK', kenh: 'fb', sub: 'Facebook Messenger · 0938 615 204',
          nhom: [
            ['Nguồn khách', [['Facebook Ads', 'ng'], ['Bài: Bảo vệ trụ cột gia đình', 'ng']]],
            ['Quan tâm', [['#baohiemgiadinh', 'qt'], ['#QuyHocVan', 'qt']]],
            ['Hành trình', [['Nhắn tin 23/11', 'ht'], ['Cho SĐT 28/11', 'ht'], ['Hẹn tư vấn 29/11', 'ht']]],
            ['Tư vấn viên', [['Chị Ngọc · lần 1 ✓', 'sa']]],
            ['Kết nối', [['Đã kết nối Zalo', 'za'], ['Khách mới · L1', 'lv']]],
          ],
          ghiChu: '35 tuổi, trụ cột gia đình, 2 bé 6 tuổi và 3 tuổi, vợ làm văn phòng. Muốn bảo vệ thu nhập và để dành quỹ học cho con, lo bảo hiểm khó chi trả. Hẹn gọi video Zalo 19h30 CN 29/11, cả 2 vợ chồng.',
        },
      },

      chotLai: [
        ['KHÁCH HÀNG', ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến']],
        ['AI CHATBOT', ['Phản hồi nhanh tức thì', 'Hỏi đúng nhu cầu gia đình', 'Không báo phí chung chung, không hứa lãi', 'Lấy SĐT, hẹn tư vấn']],
        ['BÁM ĐUỔI', ['Gửi 5 tin nhắn trong 7 ngày: 3 lớp bảo vệ, khách được chi trả, 21 ngày cân nhắc, quy trình']],
        ['TƯ VẤN', ['Tư vấn viên gọi video 1-1, bảng minh họa 2 phương án', 'Khách chọn phương án, ký hợp đồng']],
        ['GIỚI THIỆU', ['Mời buổi chia sẻ online, sản phẩm bổ trợ cho khách cũ và người quen qua FB và Zalo']],
      ],
    },
  };
})();
