/* Kịch bản: DỊCH VỤ XUẤT NHẬP KHẨU (Hàn Quốc → Việt Nam) — dọc 9:16, khoảng 140 giây. Làm theo kịch bản bạn gửi (Google Docs "Xuất nhập khẩu").
   Kênh: Facebook Ads → Messenger → Preny AI → Nhân viên Logistics → Meta CAPI Lead. Không ZBS, không Purchase.
   Tuyến: Busan, Hàn Quốc → TP.HCM, Việt Nam. Không cam kết cước, thuế, thông quan; không chốt hợp đồng.
   Tên, SĐT, dữ liệu lô hàng, kết quả API: dữ liệu demo.
   ẢNH: Unsplash (ảnh chụp thật), ghi "ảnh tham khảo" — không giới thiệu là kho bãi / phương tiện của doanh nghiệp.
   Ảnh "Hàn Quốc" là xưởng tàu có biển chữ Hàn; các ảnh cảng, container, kho, tàu khác không xác định được địa điểm. */
(function () {
  const U = (id, w = 700, h = 700) => 'https://images.unsplash.com/photo-' + id + `?w=${w}&h=${h}&fit=crop&q=80&auto=format`;

  window.KICH_BAN = {
    format: '9:16',
    view: 'page',
    logo: 'https://preny.ai/images/logo.svg',
    badge: 'PRENY AI · XUẤT NHẬP KHẨU',
    shop: { name: 'Xuất Nhập Khẩu Test', initials: 'XN' },
    chatHead: { title: 'Nguyễn Nam', sub: 'Messenger · nhắn từ quảng cáo', avatar: 'default' },
    headline: { pre: 'AI chatbot tư vấn & lấy SĐT', em: 'dịch vụ xuất nhập khẩu' },
    sub: 'Tiếp nhận khách từ quảng cáo, khai thác thông tin lô hàng, xin SĐT sớm và chuyển nhân viên Logistics.',
    speed: 1.163,   // canh cho video khoảng 140 giây
    timing: { read0: 1100, readPerChar: 30, readMax: 4800, type0: 900, typePerChar: 4, typeMax: 1700, fastType: 600,
              featureHold: 1500, sepHold: 1400, cardHold: 3200 },

    images: {
      'han-quoc': U('1763887487252-c92388925e95'),
      'kho': U('1553413077-190dd305871c'),
      'tau': U('1670121180530-cfcba4438038'),
      'xe': U('1616432043562-3671ea2e5242'),
      'cang': U('1601561831532-6870badf3e29'),
      'container': U('1573030889348-c6b0f8b15e40'),
      'kho-2': U('1586528116311-ad8dd3c8310d'),
      'van-tai': U('1606185540834-d6e7483ee1a4'),
      'tau-cont': U('1769144256207-bc4bb75b29db', 800, 600),
    },

    features: [
      { title: 'Khách nhắn từ quảng cáo Facebook', desc: 'Quảng cáo nhập khẩu hàng Hàn Quốc về Việt Nam, khách bấm "Gửi tin nhắn".' },
      { title: 'Giới thiệu dịch vụ, hỏi loại hàng', desc: 'Gửi 4 ảnh logistics thực tế, hỏi mặt hàng cần nhập.' },
      { title: 'Khai thác thông tin lô hàng', desc: 'Điểm xuất phát, thể tích, điểm đến; không hỏi lại điều khách đã nói.' },
      { title: 'Khách hỏi giá, xin SĐT sớm', desc: 'Chi phí phụ thuộc nhiều yếu tố: nhân viên Logistics báo giá chính xác.' },
      { title: 'Follow-up 5 tin trong 7 ngày', desc: 'Ngày 1, 2, 3, 5, 7 · chỉ gửi khi Meta cho phép, dừng khi khách phản hồi hoặc từ chối.' },
      { title: 'Lưu CRM, chuyển nhân viên Logistics', desc: 'Thông tin lô hàng chuyển cho nhân viên phụ trách báo giá.' },
      { title: 'Gửi Meta CAPI Lead', desc: 'Ghi nhận khách tiềm năng để đo lường, tối ưu quảng cáo.',
        kws: ['Gửi Lead 1 lần, có Event ID', 'Không gửi chứng từ, thông tin mật', 'Không gửi Purchase khi mới hỏi giá'] },
    ],

    steps: [
      { screen: { title: 'Facebook', sub: 'Bảng tin · Được tài trợ', avatar: 'fb', logo: false }, hold: 100 },
      { intro: true, hold: 1400 },

      /* CẢNH 1 – Khách nhắn từ quảng cáo Facebook */
      { feature: 1 },
      { ad: { label: 'Anh Nam đang xem bảng tin Facebook', head: 'DỊCH VỤ NHẬP KHẨU HÀNG HÓA TỪ HÀN QUỐC VỀ VIỆT NAM',
              text: 'Vận chuyển từ Hàn Quốc · Nhập khẩu hàng hóa · Đường biển, đường hàng không theo tuyến hỗ trợ · Hỗ trợ thủ tục hải quan, hồ sơ, chứng từ.',
              imgs: [{ img: 'han-quoc', label: 'Hàn Quốc' }, { img: 'kho', label: 'Kho hàng' }, { img: 'tau', label: 'Tàu vận tải' }, { img: 'xe', label: 'Logistics' }],
              title: 'Nhập khẩu hàng Hàn Quốc về Việt Nam', cta: 'Gửi tin nhắn' }, press: 3000, hold: 1100 },
      { screen: 'chat', hold: 400 },
      { sep: 'Nguyễn Nam nhắn tin từ quảng cáo · Nhập khẩu hàng Hàn Quốc', style: 'time', hold: 800 },
      { kh: 'Bên em có nhận nhập hàng từ Hàn Quốc về Việt Nam không? Anh muốn hỏi chi phí vận chuyển.' },

      /* CẢNH 2 – AI giới thiệu dịch vụ và xác định nhu cầu */
      { feature: 2 },
      { ai: 'Dạ bên em có hỗ trợ **dịch vụ nhập khẩu và vận chuyển hàng từ Hàn Quốc về Việt Nam** ạ!', fast: true, meta: '⚡ Preny AI trả lời ngay' },
      { ai: 'Em gửi anh tham khảo một số thông tin dịch vụ nhé!', fast: true, hold: 800 },
      { aiImgs: [{ img: 'cang', label: 'Cảng biển · ảnh tham khảo' }, { img: 'container', label: 'Container' }, { img: 'kho-2', label: 'Kho hàng' }, { img: 'van-tai', label: 'Vận tải quốc tế' }], hold: 2800 },
      { ai: 'Anh đang muốn nhập **mặt hàng gì** từ Hàn Quốc về Việt Nam để em hỗ trợ mình nhé?' },
      { kh: 'Anh nhập đồ gia dụng em.' },

      /* CẢNH 3 – AI khai thác thông tin lô hàng */
      { feature: 3 },
      { ai: 'Dạ hàng của anh hiện đang ở **khu vực nào** bên Hàn Quốc ạ?' },
      { kh: 'Ở Busan em.' },
      { ai: 'Dạ anh dự kiến nhập khoảng **bao nhiêu hàng** để em ghi nhận thông tin báo giá nhé?' },
      { kh: 'Khoảng 2 khối hàng, muốn chuyển về TP.HCM.' },
      { ai: 'Dạ em ghi nhận lô hàng gia dụng khoảng **2 CBM**, xuất phát từ **Busan, Hàn Quốc** và dự kiến nhận tại **TP.HCM, Việt Nam** nhé!' },

      /* CẢNH 4 – Khách hỏi giá, AI xin SĐT sớm */
      { feature: 4 },
      { kh: 'Vậy vận chuyển từ Hàn Quốc về TP.HCM khoảng bao nhiêu tiền em? Bên em có hỗ trợ làm thủ tục hải quan luôn không?' },
      { ai: 'Dạ bên em có hỗ trợ **tư vấn thủ tục hải quan** theo từng loại hàng ạ. Chi phí sẽ phụ thuộc **loại hàng, số lượng, phương án vận chuyển, địa điểm giao nhận** và **chứng từ thực tế**.' },
      { ai: 'Để báo giá chính xác, anh cho em xin **SĐT** nhé! Em chuyển thông tin lô hàng cho bạn nhân viên Logistics liên hệ tư vấn, kiểm tra chứng từ và gửi báo giá phù hợp cho anh ạ.' },
      { sep: 'Đã xem · khách chưa phản hồi…', style: 'silent', hold: 1400 },
      { sep: 'KHÁCH CẦN BÁO GIÁ NHẬP KHẨU HÀN QUỐC – CHƯA CUNG CẤP SĐT', style: 'warn', hold: 2400 },
      { sep: 'Preny AI đưa khách vào danh sách Follow-up khi đủ điều kiện', style: 'sys', hold: 1800 },

      /* CẢNH 5 – Follow-up 5 tin trong 7 ngày */
      { feature: 5 },
      { sep: '— Ngày 1 —' },
      { ai: 'Anh ơi, lô hàng gia dụng từ **Busan, Hàn Quốc về TP.HCM** mình tham khảo hôm qua anh còn cần báo giá không ạ? Em hỗ trợ chuyển thông tin cho nhân viên nhé!', meta: '🔁 Follow-up · Ngày 1 · Nhắc nhu cầu báo giá' },
      { sep: '— Ngày 2 —' },
      { ai: 'Em gửi anh tham khảo **quy trình vận chuyển** hàng nhập khẩu từ Hàn Quốc về Việt Nam để mình nắm rõ các bước nhé!', meta: '🔁 Follow-up · Ngày 2 · Quy trình vận chuyển' },
      { aiImg: 'tau-cont', meta: 'Ảnh tham khảo', hold: 1400 },
      { card: { tag: '🚢 Quy trình vận chuyển hàng nhập khẩu',
          lines: ['1. Tiếp nhận hàng tại Hàn Quốc', '2. Vận chuyển quốc tế', '3. Xử lý thủ tục hải quan', '4. Giao hàng tại Việt Nam'] }, fast: true, hold: 3200 },
      { sep: '— Ngày 3 —' },
      { ai: 'Anh ơi, khi nhập khẩu hàng từ Hàn Quốc, **hồ sơ cần chuẩn bị** sẽ tùy theo loại hàng và hình thức nhập khẩu ạ. Bên em có thể hỗ trợ kiểm tra yêu cầu chứng từ cho lô hàng của anh nhé!', meta: '🔁 Follow-up · Ngày 3 · Thông tin chứng từ' },
      { sep: '— Ngày 5 —' },
      { ai: 'Anh ơi, nếu mình vẫn dự kiến nhập khoảng **2 CBM** hàng gia dụng từ Busan về TP.HCM, bên em có thể hỗ trợ kiểm tra **phương án vận chuyển** và các khoản chi phí liên quan ạ!', meta: '🔁 Follow-up · Ngày 5 · Phương án vận chuyển' },
      { sep: '— Ngày 7 —' },
      { ai: 'Anh ơi, em nhắn lại về lô hàng nhập khẩu từ Hàn Quốc mình đã tham khảo ạ. Nếu anh vẫn cần báo giá, anh cho em xin **SĐT** nhé. Em chuyển bạn Logistics tư vấn phương án vận chuyển và thủ tục phù hợp ạ!', meta: '🔁 Follow-up · Ngày 7 · Xin SĐT lần cuối' },

      /* CẢNH 6 – Khách cung cấp SĐT */
      { feature: 6 },
      { kh: 'Ok em, anh Nguyễn Nam, SĐT 0900 000 286 nhé.\nEm nhờ bạn báo giá giúp anh lô hàng này.', typing: 2000 },
      { ai: 'Dạ em nhận thông tin anh Nam rồi ạ! Em ghi nhận anh đang cần nhập **hàng gia dụng khoảng 2 CBM** từ **Busan, Hàn Quốc về TP.HCM**, cần tư vấn **vận chuyển và thủ tục hải quan** nhé!' },
      { ai: 'Em chuyển thông tin cho bạn Logistics hỗ trợ báo giá chi tiết ạ.', fast: true },
      { overlay: { head: 'THÔNG TIN KHÁCH HÀNG · NỘI BỘ', note: 'Lưu vào CRM · chuyển nhân viên Logistics phụ trách',
          rows: [['Khách hàng', 'Nguyễn Nam'], ['SĐT', '0900 000 286'], ['Nhu cầu', 'Nhập khẩu hàng hóa'], ['Mặt hàng', 'Đồ gia dụng'], ['Quốc gia', 'Hàn Quốc'],
                 ['Xuất phát', 'Busan, Hàn Quốc'], ['Điểm đến', 'TP.HCM, Việt Nam'], ['Thể tích', 'Khoảng 2 CBM'], ['Dịch vụ', 'Vận chuyển và thủ tục hải quan']],
          status: 'Đã chuyển nhân viên Logistics' }, hold: 6500 },
      { sep: '✓ Preny đã lưu thông tin và dừng chuỗi Follow-up', style: 'sys', hold: 2000 },

      /* CẢNH 7 – Meta CAPI Lead */
      { feature: 7 },
      { overlay: { head: 'PRENY AI → META CONVERSIONS API', note: 'Hiệu ứng hệ thống · khách không nhìn thấy',
          rows: [['Event', 'Lead'], ['Event ID', 'KOREA-IMPORT-LEAD-001'], ['Nguồn', 'Facebook Ads → Messenger'], ['SĐT', 'Đã thu thập'], ['Nhu cầu', 'Tư vấn dịch vụ nhập khẩu hàng hóa']],
          flow: ['Preny AI', 'Meta CAPI', 'Lead ✓'], status: 'Gửi thành công (demo)',
          caption: 'Preny AI hỗ trợ ghi nhận khách hàng tiềm năng để đo lường và tối ưu hiệu quả quảng cáo Facebook.' },
        kw: [0, 1, 2], hold: 7500 },

      /* CẢNH 8 – Kết thúc */
      { end: true },
      { endscreen: { title: 'PRENY AI – TỰ ĐỘNG HÓA TƯ VẤN DỊCH VỤ XUẤT NHẬP KHẨU',
          items: ['Tiếp nhận khách từ quảng cáo Facebook', 'Tư vấn nhập khẩu hàng từ Hàn Quốc về Việt Nam', 'Giới thiệu quy trình vận chuyển', 'Xác định loại hàng và tuyến vận chuyển',
                  'Thu thập thông tin lô hàng cơ bản', 'Ưu tiên thu thập SĐT', 'Chuyển Lead cho nhân viên Logistics', 'Meta CAPI Lead'],
          sub: 'preny.ai' }, hold: 6000 },
    ],
  };
})();
