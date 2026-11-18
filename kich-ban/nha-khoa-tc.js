/* Kịch bản: NHA KHOA (phòng khám nha khoa: implant, niềng răng, bọc sứ, tẩy trắng, cạo vôi)
   — BẢN TRÌNH CHIẾU, nhóm CÂN NHẮC NHIỀU. Khung ngang 16:9.
   "AI chốt đơn = lấy SĐT + hẹn lịch khám": AI mời tới khám, chụp phim và cạo vôi răng MIỄN PHÍ (người dùng dặn),
   tư vấn viên gọi xác nhận lịch, bác sĩ khám, chụp phim rồi mới chốt kế hoạch điều trị và giá chính xác.
   Demo chat gọn như khóa học làm bánh: anh Bình mất 1 răng hàm, gửi ảnh mô hình implant hỏi dồn (giá, có đau không,
   bao lâu xong, chỗ khác có 8 triệu) → AI không báo giá chốt khi chưa chụp phim, chỉ nói giá tham khảo "từ…",
   chỉ khách hỏi kỹ loại trụ, mão, bảo hành khi so chỗ rẻ hơn; sợ đau: gây tê tại chỗ; thời gian: bác sĩ báo theo phim
   → xin SĐT với lý do rõ (khám, chụp phim, cạo vôi miễn phí, giữ lịch, chưa cần cọc) → chuyển tư vấn viên.
   Không có tin nhắc trước giờ hẹn (Preny chưa có tính năng này). Chăm sóc chỉ làm sau buổi khám, sau điều trị.
   Không có bước kết thúc: xin được SĐT rồi bấm → là sang slide kế.
   Tên nha khoa, giá, tên khách, SĐT: dữ liệu minh họa. Ảnh: Unsplash (ảnh thật, không phải phòng khám của khách). */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'nha-si': '1606811841689-23dfddce3e95',
    'phong-kham': '1629909613654-28e377c37b09',
    'nu-cuoi': '1769559893692-c6d0623bf8e4',
    'x-quang': '1777445374290-eedda5be8e5b',
    'nieng-rang': '1656514894252-fb336a3ad6a6',
    'implant': '1593022356769-11f762e25ed9',
    'cao-voi': '1606811971618-4486d14f3f99',
    'nu-cuoi-2': '1654373535457-383a0a4d00f9',
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    badge: 'AI CHATBOT · NHA KHOA',
    shop: { name: 'Nha Khoa Ngà', initials: 'NG' },
    headline: { pre: 'AI chatbot tư vấn nha khoa và', em: 'hẹn lịch khám' },
    sub: 'Không báo giá bừa khi chưa chụp phim: xử lý băn khoăn, mời khám và cạo vôi miễn phí rồi xin SĐT, giữ lịch.',
    cta: 'Dùng thử miễn phí tại **preny.ai**\nHotline **0389 647 778**',
    speed: 1.13,
    timing: { read0: 1000, readPerChar: 28, readMax: 4500, type0: 800, typePerChar: 3, typeMax: 1500, fastType: 500,
              featureHold: 1400, sepHold: 1100, cardHold: 4000, introCard: 250 },

    images: Object.fromEntries(Object.entries(IMG).map(([k, id]) => [k, U(id)])),

    features: [
      { title: 'AI hiểu đúng nhu cầu, tư vấn đúng dịch vụ', desc: 'Đọc ảnh, hiểu cả tin dài, viết tắt.',
        kws: ['Nhận ra dịch vụ implant trong ảnh khách gửi', 'Mất răng lâu: phải chụp phim xem xương hàm', 'Không báo giá chốt khi chưa có phim'] },
      { title: 'AI xử lý băn khoăn như tư vấn viên giỏi', desc: 'Trả lời đúng dữ liệu, không hứa bừa.',
        kws: ['So chỗ rẻ hơn: hỏi kỹ trụ, mão, bảo hành', 'Sợ đau: bác sĩ gây tê tại chỗ', 'Bao lâu xong: bác sĩ báo theo phim'] },
      { title: 'AI xin SĐT, mời khám và cạo vôi miễn phí', desc: 'Khách nóng chuyển ngay cho tư vấn viên.',
        kws: ['Cho khách lý do để cho số: khám, chụp phim, cạo vôi miễn phí', 'Lấy được SĐT, giữ lịch hẹn', 'Chuyển tư vấn viên gọi lại trong 15 phút'] },
    ],

    steps: [
      { intro: true, hold: 1800 },

      /* ---- 1. Hiểu đúng nhu cầu: ảnh implant + tin dài, viết tắt, hỏi dồn; không báo giá chốt ---- */
      { feature: 1 },
      { sep: 'Khách nhắn tin từ quảng cáo Facebook', style: 'time', hold: 800 },
      { img: 'implant', hold: 1500 },
      { kh: 'a mất 1 cái răng hàm dưới, nhổ 2 năm rồi, giờ nhai lệch 1 bên. trồng như hình này giá bn e? làm có đau k, bao lâu thì xong. chỗ a hỏi có 8tr thôi' },
      { ai: 'Dạ chào anh! Hình anh gửi là mô hình **trụ implant** thay chân răng đã mất, bên trên gắn **mão sứ** như răng thật ạ 🦷', fast: true, meta: '⚡ Preny AI trả lời sau 2 giây', kw: 0 },
      { ai: 'Mất 1 răng hàm như anh thì trồng implant là hợp, không phải mài 2 răng bên cạnh như làm cầu răng. Nhưng **nhổ 2 năm** thì xương hàm có thể đã tiêu bớt, phải **chụp phim** mới biết có cần ghép xương không ạ.', kw: 1 },
      { ai: 'Nên em chưa dám báo giá chốt khi chưa có phim ạ. Giá tham khảo **từ 13.500.000đ/răng**, gồm trụ và mão sứ; bác sĩ báo **giá chính xác sau khi chụp phim** nha anh.', kw: 2 },

      /* ---- 2. Xử lý băn khoăn khó: so chỗ rẻ hơn, sợ đau, bao lâu xong ---- */
      { feature: 2 },
      { ai: 'Còn chỗ anh hỏi 8 triệu, anh nên hỏi kỹ **trụ loại gì, đã gồm mão sứ chưa, bảo hành bao lâu** ạ. Giá implant chênh nhau chủ yếu ở trụ và mão. Bên em ghi rõ **loại trụ, bảo hành** trong phiếu điều trị, không thu thêm ngoài phiếu ạ.', kw: 0 },
      { kh: 'làm có đau k e, a sợ khoan lắm. bao lâu thì ăn nhai lại đc' },
      { ai: 'Dạ khi cắm trụ bác sĩ **gây tê tại chỗ**, đa số khách chỉ thấy ê nhẹ, mỗi trụ làm khoảng **30–45 phút** ạ. Thường sau **3–6 tháng** trụ liền với xương mới gắn răng sứ; thời gian cụ thể **bác sĩ báo theo phim** của anh nha.', kw: [1, 2] },
      { kh: 'ok để a sắp xếp đã' },

      /* ---- 3. Xin SĐT: mời khám, chụp phim, cạo vôi miễn phí → giữ lịch, chuyển tư vấn viên ---- */
      { feature: 3 },
      { ai: 'Dạ anh cứ sắp xếp ạ. Tuần này bên em **khám, chụp phim miễn phí** và **tặng cạo vôi răng miễn phí** cho khách hẹn trước. Anh cho em xin **SĐT**, em **giữ lịch** sáng thứ Bảy 21/11 cho anh, chưa cần đặt cọc gì đâu ạ 😊', kw: 0 },
      { kh: 'Bình - 0914 357 286', kw: 1 },
      { ai: 'Dạ em đã giữ lịch khám, chụp phim và cạo vôi miễn phí sáng thứ Bảy 21/11 cho anh Bình ạ. Tư vấn viên sẽ gọi anh trong **15 phút** để xác nhận giờ nha 🦷', meta: '✓ Đã chuyển SĐT cho tư vấn viên', kw: 2, hold: 1500 },
      // Không có { end: true }: bấm → thêm một lần là sang thẳng slide kế.
    ],

    /* ===== Nội dung slide trình chiếu (trinh-chieu.html). Slide thống kê dùng số minh họa (deck.dashboard). ===== */
    deck: {
      /* Demo chat dọc (demo-doc.js): tên khách trên Messenger, bài đăng Facebook (anh = khóa trong images), câu bình luận. */
      demoDoc: {
        khach: 'Bình Nguyễn',
        sanPham: 'Trồng răng implant',
        binhLuan: 'Xin giá implant',
        post: {
          tieuDe: 'TRỒNG RĂNG IMPLANT · KHÁM, CHỤP PHIM MIỄN PHÍ 🦷',
          dong: ['Khám, chụp phim miễn phí', 'Tặng cạo vôi răng', 'Gây tê tại chỗ, nhẹ nhàng', 'Báo giá rõ, không phát sinh'],
          anh: ['implant', 'nha-si', 'phong-kham', 'nu-cuoi'],
        },
      },
      /* Pipeline mới (TRINH-CHIEU.md mục 1): dashboard, chatbot (lead = AI chốt là lấy SĐT + hẹn lịch khám), afterSale. */
      dashboard: [
        { ten: 'Nha khoa <span class="grad">trồng răng implant</span>', den: '21/07/2026', khach: 6, tyLe: 0.55 },
        { ten: 'Nha khoa <span class="grad">niềng răng</span>', den: '18/08/2026', khach: 7, tyLe: 0.53 },
        { ten: 'Nha khoa <span class="grad">thẩm mỹ</span>', den: '26/09/2026', khach: 8, tyLe: 0.57 },
      ],
      chatbot: {
        y: [
          ['Trả lời ngay tức thì, 24/7', 'Khách nhắn lúc nào, AI trả lời sau 2 giây'],
          ['Tư vấn đúng, không báo giá bừa', 'Giá tham khảo, chụp phim mới báo chính xác'],
          ['Chốt đơn = lấy SĐT + hẹn lịch khám', 'Mời khám, cạo vôi miễn phí, chuyển tư vấn viên'],
          ['Hiểu hình ảnh khách gửi', 'Khách gửi ảnh răng, AI biết đúng dịch vụ'],
        ],
        chat: [
          { ref: { img: L(IMG['implant']), ten: 'Trồng răng implant · khám, chụp phim miễn phí' } },
          { kh: 'a mất 1 răng hàm, trồng implant giá bn e? chỗ khác có 8tr' },
          {
            ai: 'Dạ giá tham khảo **từ 13.500.000đ/răng**, gồm trụ và mão sứ ạ. Anh mất răng lâu thì phải **chụp phim** xem xương hàm, bác sĩ mới báo **giá chính xác** được nha 🦷',
            meta: '⚡ Preny AI trả lời sau 2 giây',
          },
          { kh: 'làm có đau k e? a sợ khoan lắm' },
          {
            ai: 'Dạ bác sĩ **gây tê tại chỗ**, đa số chỉ thấy ê nhẹ ạ. Tuần này bên em **khám, chụp phim, cạo vôi răng miễn phí**, anh cho em xin **SĐT** để em giữ lịch nha 😊',
          },
          { kh: 'Bình - 0914 357 286' },
          { ai: 'Dạ em giữ lịch và chuyển tư vấn viên gọi anh ngay ạ ⚡' },
          { don: true },
          { ok: true },
        ],
        lead: {
          ten: 'Anh Bình',
          sdt: '0914 357 286',
          nhuCau: 'Mất 1 răng hàm dưới 2 năm · muốn **trồng implant**, sợ đau, so giá chỗ khác',
          the: [['FB Ads · Trồng răng implant', 'ng'], ['#Implant', 'qt'], ['#CaoVoiMienPhi', 'qt'], ['Đã cho SĐT', 'ht']],
          lichNhan: 'Lịch hẹn',
          lich: ['Khám, chụp phim, cạo vôi', '09:00 · Thứ Bảy 21/11'],
          sale: 'Tư vấn viên Trang',
          nut: 'Chuyển cho tư vấn viên',
          xong: 'Đã chuyển cho tư vấn viên Trang',
          okTieuDe: 'Đã hẹn khám 21/11',
        },
        anh: {
          img: L(IMG['nieng-rang']),
          kh: 'Con a 15 tuổi răng hô, niềng như này được k e?',
          ai: 'Dạ ảnh anh gửi là **niềng răng mắc cài kim loại** ạ. 15 tuổi là độ tuổi niềng khá thuận lợi, còn niềng kiểu nào, bao lâu thì bác sĩ phải **khám, chụp phim** mới tư vấn được. Hôm khám anh cho bé đi cùng, bé cũng được **khám miễn phí** nha.',
          pill: '🔍 AI nhìn ảnh, nhận ra đúng dịch vụ khách hỏi',
        },
      },
      afterSale: {
        y1: 'AI gửi tiếp 5 dịch vụ nha khoa để bán thêm',
        y2: 'Dịch vụ mới, ưu đãi khách cũ, cạo vôi định kỳ',
        gio: 'Bác sĩ vừa chốt kế hoạch điều trị',
        don: { ma: '#NG21115', phi: 'đã cọc 3.000.000đ', sp: [{ ten: 'Trồng răng implant, trụ + mão sứ', sl: 1, gia: 15900000 }] },
        loi: 'Cảm ơn anh Bình đã tin chọn Nha Khoa Ngà 🦷 Anh giữ vệ sinh và tái khám **đúng lịch bác sĩ hẹn** nha. Bên em có thêm mấy dịch vụ này, khách hay làm cùng ạ:',
        sp: [
          { img: L(IMG['nu-cuoi']), ten: 'Tẩy trắng răng tại phòng khám', gia: 2500000, cu: 3000000, nut: 'Đặt lịch' },
          { img: L(IMG['nieng-rang']), ten: 'Niềng răng mắc cài', gia: 28000000, nut: 'Tư vấn' },
          { img: L(IMG['implant']), ten: 'Trồng răng implant', gia: 13500000, nut: 'Tư vấn' },
          { img: L(IMG['nu-cuoi-2']), ten: 'Bọc răng sứ (1 răng)', gia: 3500000, nut: 'Đặt lịch' },
          { img: L(IMG['cao-voi']), ten: 'Cạo vôi định kỳ 6 tháng', gia: 300000, nut: 'Đặt lịch' },
        ],
        khach: 'Cho vợ a đặt lịch tẩy trắng nhé',
        pill: '🛍 Khách đặt thêm ngay: đơn tăng từ 15.900.000đ lên 18.400.000đ',
        fmm: {
          sep: '1 tháng sau buổi điều trị · tin Facebook FMM',
          chao: 'Chào anh Bình 👋 Nha Khoa Ngà vừa có dịch vụ mới, gửi anh xem trước nha!',
          img: L(IMG['nu-cuoi-2']),
          nhan: 'DỊCH VỤ MỚI',
          ten: 'Dán sứ veneer mỏng',
          mo: 'Khách cũ giảm 15%, khám và tư vấn miễn phí.',
          nut: 'Xem dịch vụ',
        },
        zbs: {
          ten: 'Ưu đãi cạo vôi định kỳ cho anh Bình',
          mo: 'Cảm ơn anh đã điều trị tại Nha Khoa Ngà. Gửi anh ưu đãi cho lần khám tiếp theo:',
          dong: [
            ['Mã ưu đãi', '**NHAKHOANGA6T**'],
            ['Ưu đãi', 'Cạo vôi miễn phí + giảm 10% dịch vụ'],
            ['Hạn dùng', '31/05/2027'],
          ],
          nut: 'Đặt lịch ngay',
        },
      },
      tieuDe6: 'Hệ thống AI chatbot giúp tăng<br><span class="grad">tỷ lệ chốt lịch khám</span>',
      // Không lên đơn tự động (bác sĩ khám, chụp phim rồi mới chốt kế hoạch điều trị) → 5 tính năng
      tinhNang: [
        ['AI tư vấn, chủ động lấy lịch hẹn', 'Lấy SĐT, mời khám, cạo vôi miễn phí'],
        ['Soft follow-up nuôi khách', 'Gửi bác sĩ, ca điều trị, phòng khám thật'],
        ['AI chăm sóc khách sau điều trị', 'Hỏi thăm, mời cạo vôi định kỳ'],
        ['Bộ công cụ Remarketing FMM và ZBS', 'Khai thác lại dữ liệu khách cũ'],
        ['Gửi sự kiện Lead qua Meta CAPI', 'Hỗ trợ tối ưu quảng cáo Facebook'],
      ],

      chotDon: {
        nganh: 'nha khoa',
        nguoi: 'Tư vấn viên',
        chotLa: 'AI chốt đơn = lấy SĐT + hẹn lịch khám',
        buoc: [
          { t: 'Chạy quảng cáo', d: 'Thu hút người cần làm răng', icon: 'megaphone', own: 'Nha khoa chạy quảng cáo', mock: 'ad', img: L(IMG['implant']), text: 'Trồng răng implant, khám và chụp phim miễn phí 🦷', btn: 'Gửi tin nhắn' },
          { t: 'Bắt đầu chat', d: 'Hỏi tình trạng răng, tư vấn dịch vụ', icon: 'chat', ai: true, mock: 'chat',
            msgs: [['kh', 'Mất 1 răng hàm thì làm sao em?'], ['ai', 'Dạ anh mất răng lâu chưa ạ? Em tư vấn trồng implant nha 🦷']] },
          { t: 'Mời khám miễn phí', d: 'Lấy SĐT, mời khám, cạo vôi miễn phí', icon: 'phone', ai: true, chot: true, mock: 'form', fields: ['Anh Bình · mất 1 răng hàm, sợ đau', '0914 357 286'], ok: 'Đã hẹn khám 21/11' },
          { t: 'Tư vấn viên gọi', d: 'Xác nhận giờ hẹn với khách', icon: 'call', mock: 'lich', ten: 'Khám, chụp phim, cạo vôi', gio: '09:00 · Thứ Bảy 21/11', ok: 'Đã xác nhận lịch' },
          { t: 'Khám, chụp phim', d: 'Bác sĩ khám, chụp phim răng', icon: 'users', own: 'Bác sĩ', mock: 'img', img: L(IMG['nha-si']), cap: 'Bác sĩ xem phim, giải thích cho khách' },
          { t: 'Chốt điều trị', d: 'Báo giá chính xác, khách đồng ý làm', icon: 'check', own: 'Bác sĩ', mock: 'img', img: L(IMG['x-quang']), cap: '✓ Khách chốt kế hoạch trồng implant' },
        ],
        vong: { t: 'Chăm sóc sau điều trị & Remarketing', d: 'Hỏi thăm sau điều trị, mời cạo vôi định kỳ, gửi dịch vụ mới' },
      },

      bamDuoi: {
        nhan: 'Vì sao soft follow-up của Preny đặc biệt', shopB: 'Nha khoa B',
        cmpSai: ['Khách im → gửi “Anh còn quan tâm làm răng không ạ?”', 'Không biết khách quan tâm dịch vụ nào, vì sao im', 'Khách thấy phiền, bỏ qua tin nhắn'],
        cmpDung: ['Khách nhắn xong im → nhắc đúng dịch vụ khách hỏi (thẻ <b>#Implant</b> từ quảng cáo)',
                  'Báo giá xong im → bám đuổi theo giá: khám, chụp phim miễn phí, ưu đãi trong tháng (thẻ <b>#HoiGia</b>)',
                  'Đúng nhu cầu, đúng lý do im → khách quay lại hẹn khám'],
        hoi: 'Trồng implant giá bao nhiêu em?',
        traLoiThuong: 'Dạ từ 13.500.000đ ạ.',
        nhacChung: 'Anh còn quan tâm làm răng không ạ? 😊',
        refImg: L(IMG['implant']), refTen: 'Trồng răng implant',
        vd1: {
          kh: 'Mất răng lâu rồi trồng implant được không em?',
          ai: 'Dạ thường vẫn làm được ạ, cần chụp phim xem xương hàm. Anh mất răng nào, bao lâu rồi ạ?',
          tag: '🏷 #Implant', tagNote: 'thẻ từ quảng cáo · khách im 1 ngày',
          nhac: 'Anh ơi, em gửi anh <b>video bác sĩ cắm trụ implant răng hàm</b> cho một khách mất răng 3 năm, gây tê nên khách làm nhẹ nhàng ạ 🦷 Anh muốn qua chụp phim miễn phí thứ Bảy hay Chủ nhật ạ?',
          dung: '🎯 Theo thẻ #Implant: nhắc đúng dịch vụ khách hỏi',
          khach: 'Thứ Bảy nha em',
        },
        vd2: {
          kh: 'Trồng implant giá bao nhiêu em?',
          ai: 'Dạ giá tham khảo <b>từ 13.500.000đ/răng</b>, gồm trụ và mão sứ, chụp phim mới báo chính xác ạ.',
          tag: '🏷 #HoiGia', tagNote: 'báo giá xong khách im 2 ngày',
          nhac: 'Anh Bình ơi, tháng này bên em <b>giảm 2.000.000đ mỗi trụ implant</b>, khám, chụp phim và cạo vôi vẫn <b>miễn phí</b> ạ. Em giữ lịch thứ Bảy cho anh nha?',
          dung: '🎯 Theo thẻ #HoiGia: bám đuổi theo giá, đúng lý do khách im',
          khach: 'Ok giữ lịch giúp a',
        },
      },

      binhLuan: {
        post: '<b>Khám răng, chụp phim miễn phí</b>, tặng cạo vôi răng cho khách đặt lịch trước 🦷',
        img: L(IMG['cao-voi']),
        kav: 'MT', kten: 'Ngô Minh Thư', hoi: 'Răng mình hay ê buốt, chảy máu chân răng, cạo vôi có đỡ không ạ?',
        traLoi: 'Dạ chào chị Thư! Nha khoa vừa nhắn tin tư vấn chi tiết cho chị, chị xem tin nhắn nhé 💬',
        act2: 'Nhắn tin riêng mời khám miễn phí',
        nhan: 'Chào chị Thư! Ê buốt, chảy máu chân răng có nhiều nguyên nhân, <b>bác sĩ cần khám trực tiếp</b> mới biết ạ. Bên em đang <b>khám và cạo vôi răng miễn phí</b>, chị cho em xin SĐT để em giữ lịch cho chị nha!',
        sp: { ten: 'Khám răng + cạo vôi', gia: 'Miễn phí', img: L(IMG['phong-kham']) },
        khach: 'Số chị 0868 413 920 nhé',
      },

      duLieu: {
        shopA: 'Nha khoa A',
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: báo giá chốt, không phát sinh', 'Khách khiếu nại, nha khoa mất uy tín'],
        dung: ['Chỉ trả lời theo dữ liệu nha khoa cung cấp', 'Không chắc chắn → xin khách chờ, AI tạm dừng', 'Báo ngay tư vấn viên, bác sĩ thật vào trả lời'],
        hoi: 'Trồng implant trọn gói 8 triệu, không phát sinh gì đúng không em?',
        aiSai: 'Dạ đúng ạ! Trồng implant <b>trọn gói 8 triệu</b>, <b>không phát sinh</b> gì luôn anh 🥰',
        thucTe: '⚠ Thực tế: giá tùy loại trụ, có cần ghép xương không, phải chụp phim mới báo được',
        gian: 'Chụp phim xong báo phải ghép xương, thêm 6 triệu! Sao nói không phát sinh? 😠',
        cho: 'Dạ anh chờ em một chút để em kiểm tra chính xác thông tin cho mình nhé!',
        nv: 'Tư vấn viên Trang · người thật',
        nvTraLoi: 'Dạ giá implant tùy loại trụ và tình trạng xương hàm ạ. Anh qua chụp phim miễn phí, bác sĩ báo giá chính xác trước khi làm, không thu ngoài phiếu điều trị nhé!',
      },

      tags: {
        rows: [
          { ten: 'Nguyễn Văn Bình', av: 'VB', kenh: 'fb', msg: 'Trồng implant có đau không em?', gio: '22:05',
            tags: [['FB Ads · Trồng răng implant', 'ng'], ['#Implant', 'qt'], ['Đã cho SĐT', 'ht'], ['Gọi lần 1 ✓', 'sa']] },
          { ten: 'Ngô Minh Thư', av: 'MT', kenh: 'fb', msg: 'Răng ê buốt cạo vôi có đỡ không?', gio: '15:47',
            tags: [['Bình luận bài viết', 'ng'], ['#CaoVoi', 'qt'], ['Đã hẹn khám', 'ht'], ['Đã kết nối Zalo', 'za']] },
          { ten: 'Lý Gia Hân', av: 'GH', kenh: 'tiktok', msg: 'Niềng răng trong suốt giá sao ạ?', gio: '10:16',
            tags: [['TikTok · Video niềng răng', 'ng'], ['#NiengRang', 'qt'], ['Đã cho SĐT', 'ht'], ['Gọi lần 2 · không bắt máy', 'sa']] },
          { ten: 'Phan Thùy Linh', av: 'TL', kenh: 'zalo', msg: 'Tẩy trắng giữ được bao lâu?', gio: 'Hôm qua',
            tags: [['Zalo OA', 'ng'], ['#TayTrang', 'qt'], ['Đang nuôi · Soft follow-up', 'ht']] },
          { ten: 'Võ Đức Tài', av: 'ĐT', kenh: 'zalo', msg: 'Bọc sứ thêm 2 răng cửa nhé', gio: 'Hôm qua',
            tags: [['Zalo · Khách cũ giới thiệu', 'ng'], ['#BocSu', 'qt'], ['Đã điều trị', 'ht'], ['Gọi lần 2 · đã chốt ✓', 'sa']] },
        ],
        chanDung: {
          ten: 'Nguyễn Văn Bình', av: 'VB', kenh: 'fb', sub: 'Facebook Messenger · 0914 357 286',
          nhom: [
            ['Nguồn khách', [['Facebook Ads', 'ng'], ['Bài: Trồng răng implant', 'ng']]],
            ['Quan tâm', [['#Implant', 'qt'], ['#CaoVoiMienPhi', 'qt'], ['#HoiGia', 'qt']]],
            ['Hành trình', [['Cho SĐT 17/11', 'ht'], ['Hẹn khám 21/11', 'ht']]],
            ['Sale gọi', [['Lần 1 · đã xác nhận lịch ✓', 'sa']]],
            ['Kết nối', [['Đã kết nối Zalo', 'za'], ['Khách mới · L1', 'lv']]],
          ],
          ghiChu: 'Mất 1 răng hàm dưới đã 2 năm, nhai lệch một bên. Sợ đau, đang so với chỗ báo giá 8 triệu.',
        },
      },

      chotLai: [
        ['KHÁCH HÀNG', ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến']],
        ['AI CHATBOT', ['Phản hồi nhanh tức thì', 'Tư vấn đúng dịch vụ, không báo giá bừa', 'Xử lý băn khoăn: sợ đau, giá, thời gian', 'Lấy SĐT, mời khám, cạo vôi miễn phí']],
        ['BÁM ĐUỔI', ['Gửi 5 tin nhắn trong 7 ngày: bác sĩ, ca điều trị, phòng khám thật', 'Nuôi khách để nha khoa nằm đầu danh sách']],
        ['KHÁM TẠI CHỖ', ['Khám, chụp phim, cạo vôi miễn phí', 'Bác sĩ chốt kế hoạch điều trị']],
        ['MUA LẠI', ['Mời khách cũ cạo vôi định kỳ, làm thêm dịch vụ qua FB và Zalo']],
      ],
    },
  };
})();
