/* Kịch bản: BẤT ĐỘNG SẢN NHÀ PHỐ – ĐẤT NỀN — dọc 9:16, khoảng 160 giây. Làm theo kịch bản bạn gửi (Google Docs "Bất động sản").
   Kênh: Facebook Ads → Messenger → Preny AI → Sales → Meta CAPI Lead → (vài tháng sau) Zalo ZBS theo chiến dịch.
   Không chốt giao dịch, không thu cọc, không hứa lợi nhuận, không xác nhận pháp lý khi chưa kiểm tra hồ sơ.
   Tên, SĐT, mã nhà (NP01, NP05, NP08, NP12), giá, thời điểm ra mắt, kết quả API: dữ liệu minh họa.

   ẢNH / VIDEO:
   - NP01: 4 ảnh cắt từ loạt video Pexels quay CÙNG một căn nhà (7577932, 7578013, 7578207, 7578117):
     mặt tiền, phòng khách, một phòng trống, bếp. Loạt này không có cảnh phòng ngủ rõ ràng nên ảnh thứ ba ghi "Phòng trống".
   - NP08: ảnh + video cắt từ CÙNG video Pexels 7578545.
   - NP05, NP12, ảnh quảng cáo, ảnh dự án ZBS: Unsplash (ảnh chụp thật). Ảnh dự án ghi rõ "minh họa".
   - Đây là tư liệu tạm, cần thay bằng ảnh/video bất động sản thật được phép quảng bá. */
(function () {
  const U = (id, w = 700, h = 700) => 'https://images.unsplash.com/photo-' + id + `?w=${w}&h=${h}&fit=crop&q=80&auto=format`;

  window.KICH_BAN = {
    format: '9:16',
    view: 'page',
    logo: 'https://preny.ai/images/logo.svg',
    badge: 'PRENY AI · BẤT ĐỘNG SẢN',
    shop: { name: 'Bất Động Sản Test', initials: 'BĐ' },
    chatHead: { title: 'Nguyễn Nam', sub: 'Messenger · nhắn từ quảng cáo', avatar: 'default' },
    headline: { pre: 'AI chatbot tư vấn & lấy SĐT', em: 'nhà phố – đất nền' },
    sub: 'Gửi ảnh nhà thật, giá tham khảo, xin SĐT sớm, chuyển Sales và ZBS khi có dự án mới.',
    speed: 1.18,   // canh cho video khoảng 160 giây
    timing: { read0: 1100, readPerChar: 30, readMax: 4800, type0: 900, typePerChar: 4, typeMax: 1700, fastType: 600,
              featureHold: 1500, sepHold: 1400, cardHold: 3200 },

    images: {
      'ad-pho': U('1768061521909-d9c28e8677c9'),
      'ad-dat': U('1774697443203-0f54409d1613'),
      'np05': U('1774939234567-3bf081ab2bc0'),
      'np12': U('1774939234418-a61a50a28a40'),
      'du-an': U('1768061521909-d9c28e8677c9', 800, 600),
      'np01-mat-tien': 'assets/bds/np01-mat-tien.jpg',
      'np01-phong-khach': 'assets/bds/np01-phong-khach.jpg',
      'np01-phong': 'assets/bds/np01-phong.jpg',
      'np01-bep': 'assets/bds/np01-bep.jpg',
      'np08-1': 'assets/bds/np08-1.jpg',
      'np08-2': 'assets/bds/np08-2.jpg',
      'np08-3': 'assets/bds/np08-3.jpg',
      'np08-4': 'assets/bds/np08-4.jpg',
      'np08-video': 'assets/bds/np08-video.mp4',
    },

    features: [
      { title: 'Khách nhắn từ quảng cáo Facebook', desc: 'Quảng cáo nhà phố – đất nền TP.HCM, khách bấm "Gửi tin nhắn".' },
      { title: 'Gửi nhà phố thực tế, giá tham khảo', desc: '4 ảnh thật của cùng một căn và giá tham khảo ngay.' },
      { title: 'Khai thác nhanh nhu cầu, ngân sách', desc: 'Mua để ở hay đầu tư, ngân sách, số phòng ngủ.' },
      { title: 'Giải đáp, xin SĐT sớm', desc: 'Pháp lý cần kiểm tra hồ sơ: xin SĐT để Sales hỗ trợ.' },
      { title: 'Follow-up 5 tin trong 7 ngày', desc: 'Ngày 1, 2, 3, 5, 7 · chỉ gửi khi Meta cho phép, dừng khi khách từ chối.' },
      { title: 'Có SĐT, chuyển Sales', desc: 'Chuyển SĐT, ngân sách, nhu cầu và mã nhà quan tâm.' },
      { title: 'Gửi Meta CAPI Lead', desc: 'Ghi nhận khách tiềm năng để đo lường, tối ưu quảng cáo.',
        kws: ['Gửi Lead 1 lần, chống trùng', 'Không gửi tài chính, hồ sơ nhạy cảm', 'Không gửi Purchase'] },
      { title: 'ZBS giới thiệu dự án mới', desc: 'Chỉ khi doanh nghiệp kích hoạt chiến dịch, không gửi định kỳ.' },
    ],

    steps: [
      { screen: { title: 'Facebook', sub: 'Bảng tin · Được tài trợ', avatar: 'fb', logo: false }, hold: 100 },
      { intro: true, hold: 1400 },

      /* CẢNH 1 – Khách nhắn từ quảng cáo Facebook */
      { feature: 1 },
      { ad: { label: 'Anh Nam đang xem bảng tin Facebook', head: 'NHÀ PHỐ – ĐẤT NỀN – BẤT ĐỘNG SẢN KHU VỰC TP.HCM',
              text: 'Nhà phố để ở · Nhà phố đầu tư · Đất nền xây dựng · Nhiều lựa chọn theo ngân sách.',
              imgs: [{ img: 'ad-pho', label: 'Nhà phố' }, { img: 'np01-mat-tien', label: 'Nhà phố NP01' }, { img: 'ad-dat', label: 'Đất nền' }, { img: 'np05', label: 'Nhà phố NP05' }],
              title: 'Nhà phố – đất nền theo ngân sách', cta: 'Gửi tin nhắn' }, press: 3000, hold: 1100 },
      { screen: 'chat', hold: 400 },
      { sep: 'Nguyễn Nam nhắn tin từ quảng cáo · Nhà phố – đất nền TP.HCM', style: 'time', hold: 800 },
      { kh: 'Bên em có nhà phố tầm 5 tỷ không? Anh đang tìm nhà để ở.' },

      /* CẢNH 2 – AI trả lời và giới thiệu nhà phố */
      { feature: 2 },
      { ai: 'Dạ bên em có các sản phẩm **nhà phố ở nhiều mức giá** ạ!', fast: true, meta: '⚡ Preny AI trả lời ngay' },
      { ai: 'Em gửi anh tham khảo một căn nhà phố đang được giới thiệu bên em nhé!', fast: true, hold: 800 },
      { aiImgs: [{ img: 'np01-mat-tien', label: 'NP01 · Mặt tiền' }, { img: 'np01-phong-khach', label: 'NP01 · Phòng khách' }, { img: 'np01-phong', label: 'NP01 · Phòng trống' }, { img: 'np01-bep', label: 'NP01 · Khu bếp' }], hold: 2800 },
      { product: { img: 'np01-mat-tien', name: 'Nhà phố NP01', price: 'Giá tham khảo: 4,9 tỷ', note: 'Giá minh họa · pháp lý theo hồ sơ được kiểm tra', button: 'Xem thông tin' }, fast: true, hold: 3000 },
      { ai: 'Anh đang tìm nhà chủ yếu **để ở hay kết hợp đầu tư** ạ? Em chọn thông tin phù hợp gửi mình nhé!' },
      { kh: 'Anh mua để ở em.' },

      /* CẢNH 3 – AI khai thác nhu cầu ngắn gọn */
      { feature: 3 },
      { ai: 'Dạ anh muốn tìm nhà trong khoảng **ngân sách** khoảng bao nhiêu để em tư vấn ạ?' },
      { kh: 'Khoảng 1-3 tỷ thì được em. Anh muốn nhà có 3 phòng ngủ.' },
      { ai: 'Dạ em hiểu rồi ạ! Với nhu cầu **mua để ở**, khoảng **1–3 tỷ** và ưu tiên **3 phòng ngủ**, em gửi anh thêm một số mẫu nhà phố để tham khảo nhé!' },
      { catalog: [
          { name: 'Nhà phố NP05', sub: '3 PN · giá minh họa', price: '2,6 tỷ', tag: 'NP05', art: 'np05', buy: 'Xem chi tiết' },
          { name: 'Nhà phố NP08', sub: '3 PN · giá minh họa', price: '2,9 tỷ', tag: 'NP08', art: 'np08-1', buy: 'Xem chi tiết' },
          { name: 'Nhà phố NP12', sub: '3 PN · giá minh họa', price: '2,4 tỷ', tag: 'NP12', art: 'np12', buy: 'Xem chi tiết' },
        ], fast: true, hold: 4200 },
      { aiVideo: 'np08-video', dur: '0:09', label: 'Video thực tế · NP08', hold: 4200 },
      { kh: 'Nhà NP08 này có sổ riêng không em? Anh muốn xem thông tin rõ hơn.' },

      /* CẢNH 4 – AI giải đáp và xin SĐT sớm */
      { feature: 4 },
      { ai: 'Dạ về **hồ sơ pháp lý** của căn NP08, bên em sẽ **kiểm tra thông tin cụ thể** trước khi báo chính xác cho anh ạ.' },
      { ai: 'Anh cho em xin **SĐT** nhé! Em chuyển thông tin cho bạn Sales hỗ trợ anh kiểm tra pháp lý, gửi thêm nhà phù hợp và tư vấn chi tiết ạ.' },
      { sep: 'Đã xem · khách chưa phản hồi…', style: 'silent', hold: 1400 },
      { sep: 'KHÁCH QUAN TÂM NHÀ PHỐ – CHƯA CUNG CẤP SĐT', style: 'warn', hold: 2400 },
      { sep: 'Preny đưa khách vào danh sách Follow-up', style: 'sys', hold: 1800 },

      /* CẢNH 5 – Follow-up 5 tin trong 7 ngày */
      { feature: 5 },
      { sep: '— Ngày 1 —' },
      { ai: 'Anh ơi, căn nhà phố mình tham khảo hôm qua anh còn quan tâm không ạ? Nếu anh muốn xem thêm thông tin, em hỗ trợ mình nhé!', meta: '🔁 Follow-up · Ngày 1 · Nhắc lại nhu cầu' },
      { sep: '— Ngày 2 —' },
      { ai: 'Em gửi anh thêm **hình thực tế** căn nhà phố mình tham khảo để xem rõ mặt tiền và không gian bên trong nhé!', meta: '🔁 Follow-up · Ngày 2 · Hình ảnh nhà thật' },
      { aiImgs: [{ img: 'np08-1', label: 'NP08 · Phòng khách' }, { img: 'np08-2', label: 'NP08 · Không gian' }, { img: 'np08-3', label: 'NP08 · Bên trong' }, { img: 'np08-4', label: 'NP08 · Lối vào' }], hold: 2400 },
      { sep: '— Ngày 3 —' },
      { ai: 'Anh ơi, hôm trước mình có hỏi về **giấy tờ pháp lý** của căn nhà. Em có thể chuyển yêu cầu để bạn Sales kiểm tra và giải thích hồ sơ cho anh nhé!', meta: '🔁 Follow-up · Ngày 3 · Hỗ trợ pháp lý' },
      { sep: '— Ngày 5 —' },
      { ai: 'Anh ơi, nếu anh vẫn đang tìm nhà phố khoảng **1–3 tỷ** để ở, em có thể gửi thêm các căn phù hợp với nhu cầu **3 phòng ngủ** của mình nhé!', meta: '🔁 Follow-up · Ngày 5 · Nhà cùng nhu cầu' },
      { aiImg: 'np12', meta: 'Nhà phố NP12 · ảnh thật', hold: 1600 },
      { sep: '— Ngày 7 —' },
      { ai: 'Anh ơi, em nhắn lại về nhu cầu tìm nhà phố của mình ạ. Nếu anh vẫn quan tâm, anh cho em xin **SĐT** nhé. Em chuyển cho bạn Sales hỗ trợ gửi danh sách nhà, thông tin pháp lý và tư vấn kỹ hơn ạ!', meta: '🔁 Follow-up · Ngày 7 · Xin SĐT lần cuối' },

      /* CẢNH 6 – Khách cung cấp SĐT */
      { feature: 6 },
      { kh: 'Ok em, anh Nguyễn Nam, SĐT 0900 000 286 nhé.\nNhờ bên em gửi anh thông tin căn NP08 và mấy căn khác tầm 1-3 tỷ.', typing: 2000 },
      { ai: 'Dạ em nhận thông tin anh Nam rồi ạ! Em sẽ chuyển thông tin cho bạn Sales tư vấn chi tiết hơn cho mình.', fast: true },
      { ai: 'Em ghi nhận anh đang tìm **nhà phố để ở**, ngân sách khoảng **1–3 tỷ**, ưu tiên **3 phòng ngủ** và muốn kiểm tra thêm **hồ sơ pháp lý** nhé!' },
      { sep: '✓ Preny đã lưu thông tin và dừng chuỗi Follow-up', style: 'sys', hold: 1800 },
      { overlay: { head: '🔔 LEAD MỚI CHUYỂN SALES · NỘI BỘ', note: 'Chỉ đội Sales nhìn thấy · khách không nhìn thấy',
          rows: [['Khách hàng', 'Nguyễn Nam'], ['SĐT', '0900 000 286'], ['Nhu cầu', 'Mua nhà phố để ở'], ['Ngân sách', 'Khoảng 1–3 tỷ'], ['Ưu tiên', '3 phòng ngủ'], ['Mã quan tâm', 'NP08 · cần kiểm tra pháp lý']],
          status: 'Sales đã tiếp nhận' }, hold: 6000 },

      /* CẢNH 7 – Meta CAPI Lead */
      { feature: 7 },
      { overlay: { head: 'PRENY AI → META CONVERSIONS API', note: 'Hiệu ứng hệ thống · khách không nhìn thấy',
          rows: [['Event', 'Lead'], ['Event ID', 'REALTY-LEAD-001'], ['Nguồn', 'Facebook Ads → Messenger'], ['SĐT', 'Đã thu thập'], ['Nhu cầu', 'Quan tâm bất động sản'], ['Sales', 'Đã tiếp nhận']],
          flow: ['Preny AI', 'Meta CAPI', 'Lead ✓'], status: 'Gửi thành công (demo)',
          caption: 'Preny AI giúp ghi nhận khách hàng tiềm năng để hỗ trợ đo lường và tối ưu hiệu quả quảng cáo Facebook.' },
        kw: [0, 1, 2], hold: 7500 },

      /* CẢNH 10 – Vài tháng sau: ZBS giới thiệu dự án mới khi có chiến dịch */
      { feature: 8 },
      { overlay: { head: '⏩ VÀI THÁNG SAU', note: 'Doanh nghiệp có đợt giới thiệu dự án mới',
          rows: [['Chiến dịch', 'Giới thiệu dự án nhà phố mới'], ['Kích hoạt', 'Doanh nghiệp chủ động'], ['Tệp nhận', 'Khách đủ điều kiện nhận tin tiếp thị'], ['Phân nhóm', 'Nhà phố · TP.HCM'], ['Kênh', 'Zalo OA · ZBS']],
          status: 'Theo từng chiến dịch, không gửi định kỳ' }, hold: 5600 },
      { screen: { title: 'Bất Động Sản Test', sub: 'Zalo Official Account', avatar: 'oa', initials: 'BĐ', theme: 'zalo', logo: false }, hold: 700 },
      { sep: 'Tin nhắn ZBS · chiến dịch dự án mới', style: 'time', hold: 800 },
      { ai: 'Anh Nam ơi, bên em vừa cập nhật **một dự án nhà phố mới** trong khu vực TP.HCM ạ! Em gửi anh thông tin và hình ảnh để mình tham khảo khi có nhu cầu nhé!', meta: '📣 ZBS · Chiến dịch dự án mới' },
      { aiImg: 'du-an', meta: 'Ảnh dự án thực tế (minh họa)', hold: 1600 },
      { card: { tag: 'Dự án nhà phố mới · thông tin minh họa',
          lines: ['Loại hình: Nhà phố', 'Khu vực: Theo thông tin dự án thực tế', 'Diện tích: Theo tài liệu đã xác minh', 'Giá tham khảo: Theo bảng giá được phép công bố', 'Pháp lý, mở bán: Theo hồ sơ đã kiểm tra'],
          button: 'Xem thông tin dự án' }, fast: true, hold: 5200 },

      /* CẢNH 11 – Kết thúc */
      { end: true },
      { endscreen: { title: 'PRENY AI – TỰ ĐỘNG HÓA TÌM KIẾM KHÁCH HÀNG BẤT ĐỘNG SẢN',
          items: ['Tiếp nhận khách từ quảng cáo Facebook', 'Tư vấn nhà phố và đất nền', 'Gửi hình ảnh, video bất động sản thực tế', 'Cung cấp giá và thông tin tham khảo', 'Xác định nhu cầu, ngân sách',
                  'Ưu tiên thu thập SĐT', 'Follow-up khách chưa phản hồi', 'Chuyển Lead cho đội Sales', 'Meta CAPI Lead', 'ZBS giới thiệu dự án mới theo chiến dịch'],
          sub: 'preny.ai' }, hold: 5000 },
    ],
  };
})();
