/* Kịch bản: Y TẾ, PHÒNG KHÁM (phòng khám đa khoa có nội soi, xét nghiệm, siêu âm, khám sức khỏe)
   — BẢN TRÌNH CHIẾU, nhóm CÂN NHẮC NHIỀU. Khung ngang 16:9.
   "AI chốt đơn = lấy SĐT + đặt lịch khám": điều dưỡng gọi xác nhận, bác sĩ khám rồi mới chỉ định, điều trị.
   Demo chat gọn như khóa học làm bánh: chị Mai hay đau thượng vị, gửi ảnh gói khám hỏi dồn (có nội soi dạ dày không,
   sợ nội soi đau, giá, có phải nhịn ăn, dùng BHYT được không) → AI KHÔNG chẩn đoán, không hứa kết quả: khuyên bác sĩ khám trực tiếp,
   nội soi làm hay không do bác sĩ chỉ định; giới thiệu nội soi gây mê (không đau), nhịn ăn theo hướng dẫn của bác sĩ,
   giá tham khảo, BHYT theo quy định, báo chi phí trước → xin SĐT với lý do rõ (giữ suất sáng, chưa cần đặt cọc) → chuyển điều dưỡng.
   Không có tin nhắc trước giờ khám (Preny chưa có tính năng này). Chăm sóc chỉ làm sau buổi khám.
   Không có bước kết thúc: xin được SĐT rồi bấm → là sang slide kế.
   Tên phòng khám, gói khám, giá, tên khách, SĐT: dữ liệu minh họa. Ảnh: Unsplash (ảnh thật, không phải phòng khám của khách). */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'le-tan': '1629909614456-6b1c5c94cecc',
    'bac-si': '1758273240360-76b908e7582a',
    'hanh-lang': '1777269749032-d8d458ae594d',
    'xet-nghiem': '1606206591513-adbfbdd7a177',
    'sieu-am': '1691933880037-ce9d151ab922',
    'kham-tong-quat': '1631815587646-b85a1bb027e1',
    'bac-si-2': '1631217868264-e5b90bb7e133',
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    badge: 'AI CHATBOT · Y TẾ, PHÒNG KHÁM',
    shop: { name: 'Đa Khoa Mộc Lan', initials: 'ML' },
    headline: { pre: 'AI chatbot tư vấn gói khám và', em: 'đặt lịch khám' },
    sub: 'Không chẩn đoán bừa, không hứa kết quả: tư vấn đúng gói khám, xử lý băn khoăn rồi xin SĐT, đặt lịch.',
    cta: 'Dùng thử miễn phí tại **preny.ai**\nHotline **0389 647 778**',
    speed: 1.13,
    timing: { read0: 1000, readPerChar: 28, readMax: 4500, type0: 800, typePerChar: 3, typeMax: 1500, fastType: 500,
              featureHold: 1400, sepHold: 1100, cardHold: 4000, introCard: 250 },

    images: Object.fromEntries(Object.entries(IMG).map(([k, id]) => [k, U(id)])),

    features: [
      { title: 'AI hiểu đúng nhu cầu, tư vấn đúng gói khám', desc: 'Đọc ảnh, hiểu cả tin dài, viết tắt.',
        kws: ['Nhận ra gói khám trong ảnh khách gửi', 'Không đoán bệnh qua tin nhắn, khuyên khám trực tiếp', 'Sợ đau → giới thiệu nội soi gây mê'] },
      { title: 'AI xử lý băn khoăn như điều dưỡng tư vấn', desc: 'Trả lời đúng dữ liệu, không hứa bừa.',
        kws: ['Nhịn ăn: theo hướng dẫn của bác sĩ', 'BHYT áp dụng theo quy định', 'Báo chi phí trước, khách đồng ý mới làm'] },
      { title: 'AI xin SĐT, đặt lịch khám', desc: 'Khách nóng chuyển ngay cho điều dưỡng.',
        kws: ['Cho khách lý do để cho số: giữ suất sáng, chưa cần cọc', 'Lấy được SĐT, đặt lịch khám', 'Chuyển điều dưỡng gọi lại trong 15 phút'] },
    ],

    steps: [
      { intro: true, hold: 1800 },

      /* ---- 1. Hiểu đúng nhu cầu: ảnh gói khám + tin dài, viết tắt, hỏi dồn; không chẩn đoán ---- */
      { feature: 1 },
      { sep: 'Khách nhắn tin từ quảng cáo Facebook', style: 'time', hold: 800 },
      { img: 'bac-si', hold: 1500 },
      { kh: 'c hay bị đau vùng thượng vị, ợ chua mấy tháng nay, ăn xong hay đầy bụng. gói này có nội soi dạ dày k e? c sợ nội soi lắm, nghe bảo đau vs buồn nôn. giá bn, có phải nhịn ăn k, dùng bhyt đc k' },
      { ai: 'Dạ chào chị! Ảnh chị gửi là **Gói khám tiêu hóa** bên em, có khám với **bác sĩ chuyên khoa tiêu hóa** và **nội soi dạ dày** nếu bác sĩ chỉ định ạ 🩺', fast: true, meta: '⚡ Preny AI trả lời sau 2 giây', kw: 0 },
      { ai: 'Chị đau thượng vị, ợ chua kéo dài thì nên để **bác sĩ khám trực tiếp** tìm nguyên nhân ạ, em không dám đoán bệnh qua tin nhắn. Có cần nội soi hay không cũng do **bác sĩ quyết định** sau khi khám chị nha.', kw: 1 },
      { ai: 'Chị sợ đau thì bên em có **nội soi gây mê**: chị ngủ trong lúc soi khoảng 15–20 phút nên **không đau, không bị nôn ọe** ạ. Gói khám tiêu hóa có nội soi gây mê giá tham khảo **1.850.000đ**.', kw: 2 },

      /* ---- 2. Xử lý băn khoăn: nhịn ăn, BHYT, sợ tốn kém ---- */
      { feature: 2 },
      { ai: 'Còn nhịn ăn: trước nội soi cần **nhịn ăn, nhịn uống** một khoảng thời gian, chị làm đúng **theo hướng dẫn của bác sĩ** nha. Điều dưỡng sẽ dặn kỹ khi xác nhận lịch, nên chị đặt **buổi sáng** là tiện nhất ạ.', kw: 0 },
      { kh: 'bhyt dùng đc k e? c sợ làm xong phát sinh tốn kém' },
      { ai: 'Dạ **BHYT áp dụng theo quy định** ạ, phần nào được chi trả bác sĩ, thu ngân báo chị khi khám. Mọi chi phí bên em **báo trước**, chị đồng ý mới làm, **không phát sinh** ngoài phần chị đã nghe ạ.', kw: [1, 2] },
      { kh: 'ok để c thu xếp công việc đã' },

      /* ---- 3. Xin SĐT: cho khách lý do để cho số → đặt lịch, chuyển điều dưỡng ---- */
      { feature: 3 },
      { ai: 'Dạ chị cứ thu xếp ạ. Sáng **thứ Bảy 21/11** bác sĩ tiêu hóa còn **3 suất nội soi**. Chị cho em xin **SĐT**, em **giữ suất sáng sớm** để chị khỏi nhịn ăn lâu, chưa cần đặt cọc đâu ạ 😊', kw: 0 },
      { kh: 'Mai - 0936 482 175', kw: 1 },
      { ai: 'Dạ em đã giữ suất khám sáng thứ Bảy 21/11 cho chị Mai ạ. Điều dưỡng sẽ gọi chị trong **15 phút** để xác nhận lịch và dặn chị cách chuẩn bị nha 💙', meta: '✓ Đã chuyển SĐT cho điều dưỡng', kw: 2, hold: 1500 },
      // Không có { end: true }: bấm → thêm một lần là sang thẳng slide kế.
    ],

    /* ===== Nội dung slide trình chiếu (trinh-chieu.html). Slide thống kê dùng số minh họa (deck.dashboard). ===== */
    deck: {
      /* Demo chat dọc (demo-doc.js): tên khách trên Messenger, bài đăng Facebook (anh = khóa trong images), câu bình luận. */
      demoDoc: {
        khach: 'Thanh Mai',
        sanPham: 'Gói khám tiêu hóa',
        binhLuan: 'Xin giá nội soi',
        post: {
          tieuDe: 'GÓI KHÁM TIÊU HÓA · NỘI SOI DẠ DÀY GÂY MÊ 🩺',
          dong: ['Khám với bác sĩ chuyên khoa', 'Nội soi gây mê, không đau', 'Có kết quả trong ngày', 'Báo chi phí trước khi làm'],
          anh: ['bac-si', 'bac-si-2', 'le-tan', 'hanh-lang'],
        },
      },
      /* Pipeline mới (TRINH-CHIEU.md mục 1): dashboard, chatbot (lead = AI chốt là lấy SĐT + đặt lịch khám), afterSale. */
      dashboard: [
        { ten: 'Phòng khám <span class="grad">tiêu hóa</span>', den: '21/07/2026', khach: 7, tyLe: 0.56 },
        { ten: 'Gói khám <span class="grad">sức khỏe tổng quát</span>', den: '18/08/2026', khach: 9, tyLe: 0.54 },
        { ten: 'Phòng khám <span class="grad">đa khoa</span>', den: '26/09/2026', khach: 8, tyLe: 0.57 },
      ],
      chatbot: {
        y: [
          ['Trả lời ngay tức thì, 24/7', 'Khách nhắn lúc nào, AI trả lời sau 2 giây'],
          ['Tư vấn đúng gói, không đoán bệnh', 'Sợ đau, nhịn ăn, chi phí, BHYT'],
          ['Chốt đơn = lấy SĐT + đặt lịch khám', 'AI giữ suất, chuyển ngay cho điều dưỡng'],
          ['Hiểu hình ảnh khách gửi', 'Khách gửi ảnh, AI biết đúng dịch vụ khách hỏi'],
        ],
        chat: [
          { ref: { img: L(IMG['bac-si']), ten: 'Gói khám tiêu hóa · nội soi gây mê' } },
          { kh: 'c hay đau thượng vị, ợ chua. gói này có nội soi dạ dày k e? c sợ đau lắm' },
          {
            ai: 'Dạ có ạ! Chị sợ đau thì bên em có **nội soi gây mê**, chị ngủ khoảng 15–20 phút nên **không đau** ạ. Gói khám tiêu hóa giá tham khảo **1.850.000đ**, nội soi hay không do **bác sĩ chỉ định** sau khi khám chị nha 🩺',
            meta: '⚡ Preny AI trả lời sau 2 giây',
          },
          { kh: 'có phải nhịn ăn k e? bảo hiểm y tế dùng đc k' },
          {
            ai: 'Dạ chị nhịn ăn **theo hướng dẫn của bác sĩ**, điều dưỡng sẽ dặn kỹ ạ. BHYT áp dụng **theo quy định**. Sáng thứ Bảy 21/11 còn **3 suất**, chị cho em xin **SĐT** để em giữ suất nha 😊',
          },
          { kh: 'Mai - 0936 482 175' },
          { ai: 'Dạ em đặt lịch và chuyển điều dưỡng gọi chị ngay ạ ⚡' },
          { don: true },
          { ok: true },
        ],
        lead: {
          ten: 'Chị Mai',
          sdt: '0936 482 175',
          nhuCau: 'Hay đau thượng vị, ợ chua mấy tháng · sợ đau, muốn **nội soi gây mê**, hỏi **BHYT**',
          the: [['FB Ads · Gói khám tiêu hóa', 'ng'], ['#NoiSoiDaDay', 'qt'], ['#GayMe', 'qt'], ['Đã cho SĐT', 'ht']],
          lichNhan: 'Lịch khám',
          lich: ['Khám tiêu hóa, nội soi', '07:30 · Thứ Bảy 21/11'],
          sale: 'Điều dưỡng Hằng',
          nut: 'Chuyển cho điều dưỡng',
          xong: 'Đã chuyển cho điều dưỡng Hằng',
          okTieuDe: 'Đã đặt lịch khám 21/11',
        },
        anh: {
          img: L(IMG['sieu-am']),
          kh: 'Siêu âm như này có thấy được dạ dày không em?',
          ai: 'Dạ ảnh chị gửi là **máy siêu âm** ạ. Siêu âm bụng thường dùng xem **gan, mật, thận, tụy**; muốn quan sát niêm mạc dạ dày thì bác sĩ hay chỉ định **nội soi**. Làm gì là do **bác sĩ quyết định** sau khi khám chị nha.',
          pill: '🔍 AI nhìn ảnh, nhận ra đúng dịch vụ khách hỏi',
        },
      },
      afterSale: {
        y1: 'AI gửi tiếp 5 gói khám liên quan để bán thêm',
        y2: 'Gói khám mới, ưu đãi khám định kỳ',
        gio: 'Bác sĩ vừa khám xong cho chị Mai',
        don: { ma: '#ML21118', phi: 'đã thanh toán tại quầy', sp: [{ ten: 'Gói khám tiêu hóa, nội soi gây mê', sl: 1, gia: 1850000 }] },
        loi: 'Cảm ơn chị Mai đã tin tưởng phòng khám 💙 Chị dùng thuốc và tái khám **đúng chỉ định của bác sĩ** nha. Bên em có thêm mấy gói này, nhiều khách đăng ký cho cả nhà ạ:',
        sp: [
          { img: L(IMG['kham-tong-quat']), ten: 'Khám sức khỏe tổng quát', gia: 1650000, cu: 1950000, nut: 'Đặt lịch' },
          { img: L(IMG['xet-nghiem']), ten: 'Xét nghiệm máu tổng quát', gia: 450000, nut: 'Đặt lịch' },
          { img: L(IMG['sieu-am']), ten: 'Siêu âm ổ bụng', gia: 300000, nut: 'Đặt lịch' },
          { img: L(IMG['bac-si-2']), ten: 'Gói khám cho bố mẹ', gia: 2490000, nut: 'Đặt lịch' },
          { img: L(IMG['le-tan']), ten: 'Thẻ khám gia đình 1 năm', gia: 4900000, nut: 'Xem chi tiết' },
        ],
        khach: 'Đặt thêm c gói khám tổng quát cho chồng nhé',
        pill: '🛍 Khách đăng ký thêm ngay: đơn tăng từ 1.850.000đ lên 3.500.000đ',
        fmm: {
          sep: '1 tháng sau buổi khám · tin Facebook FMM',
          chao: 'Chào chị Mai 👋 Phòng khám Mộc Lan vừa có gói khám mới, gửi chị xem trước nha!',
          img: L(IMG['xet-nghiem']),
          nhan: 'GÓI KHÁM MỚI',
          ten: 'Gói tầm soát tiểu đường, mỡ máu',
          mo: 'Khách cũ giảm 20%, có kết quả trong ngày.',
          nut: 'Xem gói khám',
        },
        zbs: {
          ten: 'Ưu đãi khám định kỳ cho chị Mai',
          mo: 'Cảm ơn chị đã khám tại Phòng khám Đa khoa Mộc Lan. Gửi chị ưu đãi cho lần khám định kỳ:',
          dong: [
            ['Mã ưu đãi', '**MOCLAN15**'],
            ['Ưu đãi', 'Giảm 15% gói khám định kỳ'],
            ['Hạn dùng', '31/03/2027'],
          ],
          nut: 'Đặt lịch khám',
        },
      },
      tieuDe6: 'Hệ thống AI chatbot giúp tăng<br><span class="grad">tỷ lệ chốt lịch khám</span>',
      // Không lên đơn tự động (bác sĩ khám rồi mới chỉ định, khách thanh toán tại quầy) → 5 tính năng
      tinhNang: [
        ['AI tư vấn, chủ động đặt lịch khám', 'Lấy SĐT, giữ suất, không chẩn đoán bừa'],
        ['Bám đuổi khách cân nhắc lâu', 'Gửi bác sĩ, quy trình, phòng khám thật'],
        ['AI chăm sóc khách sau khám', 'Hỏi thăm, nhắc tái khám theo chỉ định'],
        ['Bộ công cụ Remarketing FMM và ZBS', 'Khai thác lại dữ liệu khách cũ'],
        ['Gửi sự kiện Lead qua Meta CAPI', 'Hỗ trợ tối ưu quảng cáo Facebook'],
      ],

      chotDon: {
        nganh: 'y tế, phòng khám',
        nguoi: 'Điều dưỡng',
        chotLa: 'AI chốt đơn = lấy SĐT + đặt lịch khám',
        buoc: [
          { t: 'Chạy quảng cáo', d: 'Thu hút người cần đi khám', icon: 'megaphone', own: 'Phòng khám chạy quảng cáo', mock: 'ad', img: L(IMG['bac-si']), text: 'Nội soi dạ dày gây mê, không đau 🩺', btn: 'Gửi tin nhắn' },
          { t: 'Bắt đầu chat', d: 'Hỏi tình trạng, tư vấn gói khám', icon: 'chat', ai: true, mock: 'chat',
            msgs: [['kh', 'Chị hay đau thượng vị, khám gì em?'], ['ai', 'Dạ chị bị bao lâu rồi ạ? Em tư vấn gói khám tiêu hóa nha 🩺']] },
          { t: 'Đặt lịch khám', d: 'Lấy SĐT, giữ suất, chưa cần cọc', icon: 'phone', ai: true, chot: true, mock: 'form', fields: ['Chị Mai · đau thượng vị, sợ đau', '0936 482 175'], ok: 'Đã đặt lịch khám' },
          { t: 'Điều dưỡng gọi', d: 'Xác nhận lịch, dặn chuẩn bị', icon: 'call', mock: 'lich', ten: 'Khám tiêu hóa, nội soi', gio: '07:30 · Thứ Bảy 21/11', ok: 'Đã xác nhận lịch' },
          { t: 'Bác sĩ khám', d: 'Khám, chỉ định cận lâm sàng', icon: 'users', own: 'Bác sĩ', mock: 'img', img: L(IMG['bac-si-2']), cap: 'Bác sĩ khám, tư vấn trực tiếp' },
          { t: 'Điều trị, gói khám', d: 'Điều trị theo chỉ định của bác sĩ', icon: 'check', own: 'Bác sĩ', mock: 'img', img: L(IMG['xet-nghiem']), cap: '✓ Khách làm gói khám theo chỉ định' },
        ],
        vong: { t: 'Chăm sóc sau khám & Remarketing', d: 'Hỏi thăm sau khám, nhắc tái khám theo chỉ định, gửi gói khám định kỳ' },
      },

      bamDuoi: {
        nhan: 'Vì sao bám đuổi của Preny đặc biệt', shopB: 'Phòng khám B',
        cmpSai: ['Khách im → gửi “Chị còn quan tâm gói khám không ạ?”', 'Không biết khách quan tâm gói khám nào, vì sao im', 'Khách thấy phiền, bỏ qua tin nhắn'],
        cmpDung: ['Khách nhắn xong im → nhắc đúng dịch vụ khách hỏi (thẻ <b>#NoiSoiDaDay</b> từ quảng cáo)',
                  'Báo giá xong im → bám đuổi theo giá: ưu đãi trong tuần, chi phí báo trước (thẻ <b>#HoiGia</b>)',
                  'Đúng nhu cầu, đúng lý do im → khách quay lại đặt lịch khám'],
        hoi: 'Nội soi dạ dày giá bao nhiêu em?',
        traLoiThuong: 'Dạ 1.850.000đ ạ.',
        nhacChung: 'Chị còn quan tâm gói khám không ạ? 😊',
        refImg: L(IMG['bac-si']), refTen: 'Gói khám tiêu hóa',
        vd1: {
          kh: 'Nội soi gây mê có an toàn không em?',
          ai: 'Dạ trước khi gây mê, bác sĩ sẽ khám và hỏi tiền sử của chị ạ. Chị đang có bệnh nền gì không ạ?',
          tag: '🏷 #NoiSoiDaDay', tagNote: 'thẻ từ quảng cáo · khách im 1 ngày',
          nhac: 'Chị ơi, em gửi chị <b>video quy trình nội soi gây mê</b> ở phòng khám: bác sĩ khám trước khi gây mê, có phòng hồi tỉnh riêng, người theo dõi suốt ạ 🩺 Chị muốn khám sáng thứ Bảy hay Chủ nhật ạ?',
          dung: '🎯 Theo thẻ #NoiSoiDaDay: nhắc đúng dịch vụ khách hỏi',
          khach: 'Sáng thứ Bảy nha em',
        },
        vd2: {
          kh: 'Nội soi dạ dày giá bao nhiêu em?',
          ai: 'Dạ gói khám tiêu hóa có nội soi gây mê giá tham khảo <b>1.850.000đ</b> ạ.',
          tag: '🏷 #HoiGia', tagNote: 'báo giá xong khách im 1 ngày',
          nhac: 'Chị Mai ơi, tuần này <b>đặt lịch qua tin nhắn giảm 200.000đ, còn 1.650.000đ</b>, mọi chi phí báo trước khi làm ạ. Em giữ suất sáng thứ Bảy cho chị nha?',
          dung: '🎯 Theo thẻ #HoiGia: bám đuổi theo giá, đúng lý do khách im',
          khach: 'Ok giữ suất giúp chị',
        },
      },

      binhLuan: {
        post: '<b>Gói khám tiêu hóa</b>: khám bác sĩ chuyên khoa, nội soi dạ dày gây mê, có kết quả trong ngày 🩺',
        img: L(IMG['bac-si-2']),
        kav: 'TL', kten: 'Trần Thị Lan', hoi: 'Bố mình 65 tuổi, bị huyết áp, nội soi gây mê được không ạ? Giá bao nhiêu?',
        traLoi: 'Dạ chào chị Lan! Phòng khám vừa nhắn tin tư vấn chi tiết cho chị, chị xem tin nhắn nhé 💬',
        act2: 'Nhắn tin riêng tư vấn gói khám',
        nhan: 'Chào chị Lan! Người lớn tuổi, có huyết áp thì <b>bác sĩ sẽ khám, đánh giá trước</b> mới quyết định gây mê được không ạ, em không dám trả lời chắc. Gói khám tiêu hóa giá tham khảo <b>1.850.000đ</b>. Chị cho em xin SĐT để điều dưỡng tư vấn kỹ nha!',
        sp: { ten: 'Gói khám tiêu hóa · nội soi gây mê', gia: 'từ 1.850.000đ', img: L(IMG['kham-tong-quat']) },
        khach: 'Số chị 0912 778 064 nhé',
      },

      duLieu: {
        shopA: 'Phòng khám A',
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: đoán bệnh qua tin nhắn, hứa khỏi hẳn', 'Khách khiếu nại, phòng khám mất uy tín'],
        dung: ['Chỉ trả lời theo dữ liệu phòng khám cung cấp', 'Không chắc chắn → xin khách chờ, AI tạm dừng', 'Báo ngay điều dưỡng, bác sĩ thật vào trả lời'],
        hoi: 'Chị đau thượng vị vậy là viêm dạ dày đúng không em? Uống thuốc 1 tuần có khỏi hẳn không?',
        aiSai: 'Dạ đúng là <b>viêm dạ dày</b> rồi chị! Uống thuốc bên em <b>1 tuần là khỏi hẳn</b> luôn ạ 🥰',
        thucTe: '⚠ Thực tế: phải được bác sĩ khám mới biết nguyên nhân, không ai hứa khỏi hẳn',
        gian: 'Uống hết thuốc vẫn đau, sao bảo 1 tuần khỏi hẳn? 😠',
        cho: 'Dạ chị chờ em một chút để em kiểm tra chính xác thông tin cho mình nhé!',
        nv: 'Điều dưỡng Hằng · người thật',
        nvTraLoi: 'Dạ đau thượng vị có nhiều nguyên nhân, cần bác sĩ khám trực tiếp mới kết luận được ạ. Em xếp lịch bác sĩ tiêu hóa khám sớm cho chị nhé!',
      },

      tags: {
        rows: [
          { ten: 'Nguyễn Thanh Mai', av: 'TM', kenh: 'fb', msg: 'Nội soi gây mê có đau không em?', gio: '21:38',
            tags: [['FB Ads · Gói khám tiêu hóa', 'ng'], ['#NoiSoiDaDay', 'qt'], ['Đã cho SĐT', 'ht'], ['Gọi lần 1 ✓', 'sa']] },
          { ten: 'Trần Thị Lan', av: 'TL', kenh: 'fb', msg: 'Bố mình 65 tuổi nội soi được không?', gio: '16:20',
            tags: [['Bình luận bài viết', 'ng'], ['#NguoiLonTuoi', 'qt'], ['Đã đặt lịch', 'ht'], ['Đã kết nối Zalo', 'za']] },
          { ten: 'Lê Quốc Huy', av: 'QH', kenh: 'tiktok', msg: 'Khám tổng quát gồm những gì ạ?', gio: '10:42',
            tags: [['TikTok · Video quy trình khám', 'ng'], ['#KhamTongQuat', 'qt'], ['Đã cho SĐT', 'ht'], ['Gọi lần 2 · không bắt máy', 'sa']] },
          { ten: 'Phạm Ngọc Ánh', av: 'NA', kenh: 'zalo', msg: 'Siêu âm có cần nhịn ăn không?', gio: 'Hôm qua',
            tags: [['Zalo OA', 'ng'], ['#SieuAm', 'qt'], ['Đang bám đuổi', 'ht']] },
          { ten: 'Đỗ Văn Khải', av: 'VK', kenh: 'zalo', msg: 'Đặt thêm gói khám cho vợ mình', gio: 'Hôm qua',
            tags: [['Zalo · Khách cũ', 'ng'], ['#XetNghiemMau', 'qt'], ['Đã khám xong', 'ht'], ['Gọi lần 2 · đã chốt ✓', 'sa']] },
        ],
        chanDung: {
          ten: 'Nguyễn Thanh Mai', av: 'TM', kenh: 'fb', sub: 'Facebook Messenger · 0936 482 175',
          nhom: [
            ['Nguồn khách', [['Facebook Ads', 'ng'], ['Bài: Gói khám tiêu hóa', 'ng']]],
            ['Quan tâm', [['#NoiSoiDaDay', 'qt'], ['#GayMe', 'qt'], ['#BHYT', 'qt']]],
            ['Hành trình', [['Cho SĐT 17/11', 'ht'], ['Đặt lịch khám 21/11', 'ht']]],
            ['Sale gọi', [['Lần 1 · đã xác nhận lịch ✓', 'sa']]],
            ['Kết nối', [['Đã kết nối Zalo', 'za'], ['Khách mới · L1', 'lv']]],
          ],
          ghiChu: 'Hay đau thượng vị, ợ chua mấy tháng nay. Sợ nội soi đau, muốn nội soi gây mê, hỏi BHYT và sợ phát sinh chi phí.',
        },
      },

      chotLai: [
        ['KHÁCH HÀNG', ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến']],
        ['AI CHATBOT', ['Phản hồi nhanh tức thì', 'Tư vấn đúng gói khám, không chẩn đoán bừa', 'Xử lý băn khoăn: sợ đau, chi phí, BHYT', 'Lấy SĐT, đặt lịch khám']],
        ['BÁM ĐUỔI', ['Gửi 5 tin nhắn trong 7 ngày: bác sĩ, quy trình nội soi, phòng khám thật']],
        ['KHÁM TẠI CHỖ', ['Điều dưỡng xác nhận lịch', 'Bác sĩ khám, chỉ định điều trị']],
        ['TÁI KHÁM', ['Nhắc tái khám theo chỉ định, mời khám định kỳ qua FB và Zalo']],
      ],
    },
  };
})();
