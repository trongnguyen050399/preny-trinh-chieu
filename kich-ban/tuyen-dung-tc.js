/* Kịch bản: TUYỂN DỤNG NHÂN SỰ (công ty cung ứng nhân sự cho nhà máy ở khu công nghiệp; "khách" là ứng viên)
   — BẢN TRÌNH CHIẾU, nhóm CÂN NHẮC NHIỀU. Khung ngang 16:9.
   AI không tuyển thẳng được: "AI chốt đơn = lấy SĐT ứng viên + hẹn phỏng vấn", HR gọi xác nhận, nhà máy phỏng vấn, ký hợp đồng.
   Demo chat gọn như khóa học làm bánh: anh Tuấn 24 tuổi ở Thanh Hóa gửi ảnh tin tuyển công nhân điện tử, hỏi dồn
   (chưa có kinh nghiệm, lương thực nhận, tăng ca, ký túc xá, có mất phí giới thiệu không) → AI trả lời theo dữ liệu công ty,
   nói rõ KHÔNG thu phí ứng viên, hợp đồng ký thẳng với nhà máy, xe đón ở bến xe → xin SĐT với lý do rõ (giữ suất phỏng vấn,
   giữ chỗ ký túc xá, không mất phí) → chuyển HR.
   Không diễn chăm sóc sau bán, Meta CAPI, remarketing. Không có bước kết thúc: xin được SĐT rồi bấm → là sang slide kế.
   Tên công ty, nhà máy, lương, thưởng, tên ứng viên, SĐT: dữ liệu minh họa. Ảnh: Unsplash (ảnh thật, không phải nhà máy của khách). */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'nha-may': '1589793463357-5fb813435467',
    'day-chuyen': '1651525670114-2b8117390b28',
    'phong-van': '1758691737278-3af15b37af48',
    'kho': '1664382953403-fc1ac77073a0',
    'ky-tuc-xa': '1709805619372-40de3f158e83',
    'cong-nhan': '1581091212991-8891c7d4bd9b',
    'van-phong': '1698047682091-782b1e5c6536',
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    badge: 'AI CHATBOT · TUYỂN DỤNG NHÂN SỰ',
    shop: { name: 'Việc Làm Hải Âu', initials: 'HA' },
    headline: { pre: 'AI chatbot tư vấn ứng viên và', em: 'hẹn lịch phỏng vấn' },
    sub: 'Trả lời đúng lương, chỗ ở, chi phí; xử lý băn khoăn của ứng viên rồi xin SĐT, giữ suất phỏng vấn.',
    cta: 'Dùng thử miễn phí tại **preny.ai**\nHotline **0389 647 778**',
    speed: 1.13,
    timing: { read0: 1000, readPerChar: 28, readMax: 4500, type0: 800, typePerChar: 3, typeMax: 1500, fastType: 500,
              featureHold: 1400, sepHold: 1100, cardHold: 4000, introCard: 250 },

    images: Object.fromEntries(Object.entries(IMG).map(([k, id]) => [k, U(id)])),

    features: [
      { title: 'AI hiểu đúng ứng viên, tư vấn đúng vị trí', desc: 'Đọc ảnh tin tuyển, hiểu cả tin viết tắt.',
        kws: ['Nhận ra đợt tuyển trong ảnh ứng viên gửi', 'Chưa có kinh nghiệm: nói rõ được đào tạo', 'Trả lời đủ: lương thực nhận, tăng ca, ký túc xá'] },
      { title: 'AI xử lý băn khoăn như HR giỏi', desc: 'Trả lời đúng dữ liệu, không hứa bừa.',
        kws: ['Nói rõ không thu phí ứng viên', 'Hợp đồng ký thẳng với nhà máy, có BHXH', 'Xe đón, xếp ký túc xá ngay hôm phỏng vấn'] },
      { title: 'AI xin SĐT, hẹn lịch phỏng vấn', desc: 'Ứng viên nóng chuyển ngay cho HR.',
        kws: ['Cho ứng viên lý do để cho số: giữ suất, giữ chỗ ở', 'Lấy được SĐT, chốt lịch phỏng vấn', 'Chuyển HR gọi xác nhận trong 15 phút'] },
    ],

    steps: [
      { intro: true, hold: 1800 },

      /* ---- 1. Hiểu đúng ứng viên: ảnh tin tuyển + tin viết tắt, hỏi dồn ---- */
      { feature: 1 },
      { sep: 'Ứng viên nhắn tin từ quảng cáo Facebook', style: 'time', hold: 800 },
      { img: 'nha-may', hold: 1500 },
      { kh: 'e ơi a 24t ở Thanh Hóa, chưa làm cty bao giờ. tin này còn tuyển k? lương thực nhận đc bn, tăng ca nhiều k, có ktx k. vào làm có mất phí gt k e' },
      { ai: 'Dạ chào anh! Ảnh anh gửi là đợt tuyển **công nhân lắp ráp linh kiện điện tử** ở **KCN Yên Phong, Bắc Ninh**, đang cần 200 bạn ạ 🏭', fast: true, meta: '⚡ Preny AI trả lời sau 2 giây', kw: 0 },
      { ai: 'Chưa có kinh nghiệm vẫn nhận anh nhé: vào được **đào tạo 3 ngày, có lương**. Việc làm ngồi, lắp linh kiện theo hướng dẫn, nam nữ 18–35 tuổi đều được ạ.', kw: 1 },
      { ai: 'Lương cơ bản **5.500.000đ** + phụ cấp chuyên cần, nhà ở **900.000đ**. Tăng ca **2–3 tiếng/ngày**, tính **150%**, nên **thực nhận 9–11 triệu/tháng** ạ. Có **ký túc xá miễn phí**, phòng 6 người, điều hòa, nóng lạnh.', kw: 2 },

      /* ---- 2. Xử lý băn khoăn khó: phí giới thiệu, độ tin cậy, đi lại, chỗ ở ---- */
      { feature: 2 },
      { ai: 'Còn phí giới thiệu: Hải Âu **không thu bất kỳ khoản phí nào** của ứng viên ạ, phí tuyển dụng do nhà máy trả. Ai đòi tiền anh để "chắc chắn đỗ" thì không phải bên em, anh báo hotline giúp em nha.', kw: 0 },
      { kh: 'thật k e, chỗ trước a hỏi đòi 2 củ. mà a lên đấy chưa có chỗ ở, đi xe gì lên' },
      { ai: 'Dạ thật ạ, anh ký **hợp đồng thẳng với nhà máy**, đóng **BHXH từ tháng đầu**. Anh đi xe khách tới **bến xe Bắc Ninh**, bên em có **xe đón về nhà máy** và xếp chỗ ký túc xá **ngay hôm phỏng vấn** ạ.', kw: [1, 2] },
      { kh: 'ok để a bàn với nhà đã' },

      /* ---- 3. Xin SĐT: cho ứng viên lý do để cho số → hẹn phỏng vấn, chuyển HR ---- */
      { feature: 3 },
      { ai: 'Dạ anh cứ bàn ạ. Đợt phỏng vấn gần nhất là **8h sáng thứ Hai 23/11** tại nhà máy, chỉ cần mang **CCCD**. Anh cho em xin **SĐT**, em **giữ suất phỏng vấn** và **giữ chỗ ký túc xá** cho anh, không mất phí gì đâu ạ 😊', kw: 0 },
      { kh: 'Tuấn - 0978 216 539', kw: 1 },
      { ai: 'Dạ em đã giữ suất phỏng vấn 23/11 cho anh Tuấn ạ. Chuyên viên tuyển dụng sẽ gọi anh trong **15 phút** để xác nhận lịch và chỉ đường nha 🙌', meta: '✓ Đã chuyển SĐT cho HR', kw: 2, hold: 1500 },
      // Không có { end: true }: bấm → thêm một lần là sang thẳng slide kế.
    ],

    /* ===== Nội dung slide trình chiếu (trinh-chieu.html). Slide thống kê dùng số minh họa (deck.dashboard). ===== */
    deck: {
      /* Demo chat dọc (demo-doc.js): tên ứng viên trên Messenger, bài đăng Facebook (anh = khóa trong images), câu bình luận. */
      demoDoc: {
        khach: 'Tuấn Lê',
        sanPham: 'Công nhân lắp ráp điện tử',
        binhLuan: 'Còn tuyển không ạ',
        post: {
          tieuDe: 'TUYỂN GẤP 300 LAO ĐỘNG PHỔ THÔNG · KCN BẮC NINH 🏭',
          dong: ['Lắp ráp điện tử, đóng gói, kho', 'Thực nhận 9–11 triệu/tháng', 'Ký túc xá miễn phí', 'Không thu phí ứng viên'],
          anh: ['nha-may', 'day-chuyen', 'kho', 'ky-tuc-xa'],
        },
      },
      /* Pipeline mới (TRINH-CHIEU.md mục 1): dashboard, chatbot (lead = AI chốt là lấy SĐT + hẹn phỏng vấn), afterSale. */
      dashboard: [
        { ten: 'Tuyển <span class="grad">công nhân KCN</span>', den: '21/07/2026', khach: 9, tyLe: 0.56 },
        { ten: 'Tuyển <span class="grad">lao động thời vụ</span>', den: '18/08/2026', khach: 7, tyLe: 0.54 },
        { ten: 'Tuyển <span class="grad">nhân viên kho vận</span>', den: '26/09/2026', khach: 5, tyLe: 0.57 },
      ],
      chatbot: {
        y: [
          ['Trả lời ngay tức thì, 24/7', 'Ứng viên nhắn lúc nào, AI trả lời sau 2 giây'],
          ['Tư vấn đúng vị trí, xử lý băn khoăn', 'Lương thực nhận, ký túc xá, phí tuyển dụng'],
          ['Chốt đơn = lấy SĐT + hẹn phỏng vấn', 'AI giữ suất, chuyển ngay cho HR'],
          ['Hiểu hình ảnh ứng viên gửi', 'Ứng viên gửi ảnh, AI biết đúng vị trí đang tuyển'],
        ],
        chat: [
          { ref: { img: L(IMG['nha-may']), ten: 'Tuyển 200 công nhân điện tử KCN Yên Phong' } },
          { kh: 'a chưa có kinh nghiệm thì làm đc k e? lương thực nhận bn, có ktx k' },
          {
            ai: 'Dạ được ạ! Chưa có kinh nghiệm được **đào tạo 3 ngày, có lương**. Lương cơ bản **5.500.000đ** + phụ cấp, tăng ca → **thực nhận 9–11 triệu/tháng**, có **ký túc xá miễn phí** ạ 🏭',
            meta: '⚡ Preny AI trả lời sau 2 giây',
          },
          { kh: 'vào làm có mất phí giới thiệu k e? chỗ trước đòi a 2 củ' },
          {
            ai: 'Dạ bên em **không thu bất kỳ khoản phí nào** của ứng viên ạ. Sáng thứ Hai 23/11 có đợt **phỏng vấn tại nhà máy**, anh cho em xin **SĐT** để em giữ suất và chỗ ký túc xá nha 😊',
          },
          { kh: 'Tuấn - 0978 216 539' },
          { ai: 'Dạ em giữ suất phỏng vấn và chuyển HR gọi anh ngay ạ ⚡' },
          { don: true },
          { ok: true },
        ],
        lead: {
          ten: 'Anh Tuấn',
          sdt: '0978 216 539',
          nhuCau: '24 tuổi, ở Thanh Hóa, chưa có kinh nghiệm · ứng tuyển **công nhân điện tử**, cần **ký túc xá**',
          the: [['FB Ads · Tuyển CN điện tử', 'ng'], ['#CongNhanDienTu', 'qt'], ['#CanKyTucXa', 'qt'], ['Đã cho SĐT', 'ht']],
          lichNhan: 'Lịch phỏng vấn',
          lich: ['Phỏng vấn tại nhà máy', '08:00 · Thứ Hai 23/11'],
          sale: 'HR Phương',
          nut: 'Chuyển cho HR',
          xong: 'Đã chuyển cho HR Phương',
          okTieuDe: 'Đã hẹn phỏng vấn 23/11',
        },
        anh: {
          img: L(IMG['day-chuyen']),
          kh: 'Việc như hình này bên mình còn tuyển không em?',
          ai: 'Dạ ảnh anh gửi là **dây chuyền đóng gói trái cây** ạ. Bên em đang tuyển **công nhân đóng gói thực phẩm** ở KCN Quế Võ: làm đứng, mặc đồ bảo hộ, **thực nhận 8,5–10 triệu/tháng**, cũng có ký túc xá nha anh.',
          pill: '🔍 AI nhìn ảnh, nhận ra đúng vị trí ứng viên hỏi',
        },
      },
      afterSale: {
        y1: 'AI gửi 5 vị trí đang tuyển, mời giới thiệu bạn bè',
        y2: 'Đợt tuyển mới, thưởng giới thiệu',
        gio: 'HR vừa chốt ứng viên nhận việc',
        // Thẻ đầu slide: ứng viên đã nhận việc (dạng thẻ khách, không phải đơn hàng)
        don: { okTieuDe: 'Ứng viên đã nhận việc', ten: 'Anh Tuấn', sdt: '0978 216 539', lich: ['Nhận việc', 'Thứ Hai 30/11 · KCN Yên Phong'], sale: 'HR Phương' },
        loi: 'Chúc mừng anh Tuấn đã nhận việc 🎉 Anh rủ bạn bè vào làm, mỗi bạn nhận việc anh được **thưởng 500.000đ**. Bên em đang tuyển mấy vị trí này, lương thực nhận từ:',
        sp: [
          { img: L(IMG['day-chuyen']), ten: 'Công nhân đóng gói thực phẩm', gia: 8500000, nut: 'Giới thiệu bạn' },
          { img: L(IMG['kho']), ten: 'Nhân viên kho, soạn hàng', gia: 9000000, nut: 'Giới thiệu bạn' },
          { img: L(IMG['nha-may']), ten: 'Công nhân lắp ráp điện tử', gia: 9000000, nut: 'Giới thiệu bạn' },
          { img: L(IMG['cong-nhan']), ten: 'Kỹ thuật viên lắp ráp ô tô', gia: 12000000, nut: 'Giới thiệu bạn' },
          { img: L(IMG['van-phong']), ten: 'Nhân viên hành chính xưởng', gia: 8000000, nut: 'Giới thiệu bạn' },
        ],
        khach: 'A giới thiệu 2 đứa bạn cùng quê vào đóng gói nhé e',
        pill: '🤝 Ứng viên giới thiệu ngay 2 bạn: thưởng 1.000.000đ khi 2 bạn nhận việc',
        fmm: {
          sep: '1 tháng sau khi nhận việc · tin Facebook FMM',
          chao: 'Chào anh Tuấn 👋 Hải Âu mở đợt tuyển tháng 12, gửi anh xem trước để rủ bạn bè nha!',
          img: L(IMG['kho']),
          nhan: 'ĐỢT TUYỂN MỚI',
          ten: 'Tuyển 150 nhân viên kho dịp Tết',
          mo: 'Thực nhận 9–12 triệu, có ký túc xá, không thu phí.',
          nut: 'Xem vị trí',
        },
        zbs: {
          ten: 'Thưởng giới thiệu cho anh Tuấn',
          mo: 'Cảm ơn anh đã đồng hành cùng Việc Làm Hải Âu. Anh giới thiệu bạn bè vào làm được nhận thưởng:',
          dong: [
            ['Mã giới thiệu', '**HAIAU-TUAN**'],
            ['Thưởng', '500.000đ mỗi bạn nhận việc'],
            ['Hạn dùng', '31/01/2027'],
          ],
          nut: 'Gửi cho bạn bè',
        },
      },
      tieuDe6: 'Hệ thống AI chatbot giúp tăng<br><span class="grad">tỷ lệ chốt SĐT ứng viên</span>',
      // Không lên đơn tự động (ứng viên ký hợp đồng tại nhà máy) → 5 tính năng
      tinhNang: [
        ['AI tư vấn, chủ động lấy SĐT ứng viên', 'Lọc ứng viên, hẹn lịch phỏng vấn'],
        ['Bám đuổi ứng viên cân nhắc lâu', 'Gửi ảnh nhà máy, ký túc xá, đợt tuyển mới'],
        ['AI chăm sóc ứng viên sau nhận việc', 'Hỏi thăm, mời giới thiệu bạn bè'],
        ['Bộ công cụ Remarketing FMM và ZBS', 'Khai thác lại dữ liệu ứng viên cũ'],
        ['Gửi sự kiện Lead qua Meta CAPI', 'Hỗ trợ tối ưu quảng cáo Facebook'],
      ],

      chotDon: {
        nganh: 'tuyển dụng nhân sự',
        nguoi: 'HR',
        chotLa: 'AI chốt đơn = lấy SĐT + hẹn phỏng vấn',
        buoc: [
          { t: 'Chạy quảng cáo', d: 'Thu hút người đang tìm việc', icon: 'megaphone', own: 'Công ty chạy quảng cáo', mock: 'ad', img: L(IMG['nha-may']), text: 'Tuyển 200 công nhân điện tử, có ký túc xá 🏭', btn: 'Gửi tin nhắn' },
          { t: 'Bắt đầu chat', d: 'Tư vấn vị trí, lương, chỗ ở', icon: 'chat', ai: true, mock: 'chat',
            msgs: [['kh', 'Chưa có kinh nghiệm làm được không ạ?'], ['ai', 'Dạ được ạ! Anh bao nhiêu tuổi, ở đâu để em tư vấn nha? 🏭']] },
          { t: 'Hẹn phỏng vấn', d: 'Lọc ứng viên, lấy SĐT, giữ suất', icon: 'phone', ai: true, chot: true, mock: 'form', fields: ['Anh Tuấn · 24 tuổi, cần ký túc xá', '0978 216 539'], ok: 'Đã hẹn phỏng vấn' },
          { t: 'HR gọi xác nhận', d: 'Chỉ đường, dặn mang CCCD', icon: 'call', mock: 'lich', ten: 'Phỏng vấn tại nhà máy', gio: '08:00 · Thứ Hai 23/11', ok: 'Đã xác nhận lịch' },
          { t: 'Phỏng vấn', d: 'Tại nhà máy, xem chuyền, ký túc xá', icon: 'users', mock: 'img', img: L(IMG['phong-van']), cap: 'Ứng viên phỏng vấn tại nhà máy' },
          { t: 'Nhận việc', d: 'Ký hợp đồng lao động, vào ca', icon: 'check', mock: 'img', img: L(IMG['van-phong']), cap: '✓ Ứng viên ký hợp đồng, nhận việc' },
        ],
        vong: { t: 'Chăm sóc lại & Remarketing', d: 'Hỏi thăm sau nhận việc, gửi đợt tuyển mới, mời giới thiệu bạn bè' },
      },

      bamDuoi: {
        nhan: 'Vì sao bám đuổi của Preny đặc biệt', shopB: 'Công ty B',
        cmpSai: ['Ứng viên im → gửi “Bạn còn quan tâm việc làm không ạ?”', 'Không biết ứng viên quan tâm vị trí nào, vì sao im', 'Ứng viên thấy phiền, bỏ qua tin nhắn'],
        cmpDung: ['Ứng viên nhắn xong im → nhắc đúng vị trí đã hỏi (thẻ <b>#CongNhanDienTu</b> từ quảng cáo)',
                  'Hỏi lương xong im → bám đuổi theo thu nhập: thưởng nhận việc, ký túc xá miễn phí (thẻ <b>#HoiLuong</b>)',
                  'Đúng nhu cầu, đúng lý do im → ứng viên quay lại hẹn phỏng vấn'],
        hoi: 'Lương công nhân điện tử bao nhiêu ạ?',
        traLoiThuong: 'Dạ 5.500.000đ ạ.',
        nhacChung: 'Bạn còn quan tâm việc làm không ạ? 😊',
        refImg: L(IMG['nha-may']), refTen: 'Tuyển công nhân điện tử',
        vd1: {
          kh: 'Việc này nữ làm được không ạ?',
          ai: 'Dạ được ạ! Chị bao nhiêu tuổi, đang ở đâu để em tư vấn ca làm nha?',
          tag: '🏷 #CongNhanDienTu', tagNote: 'thẻ từ quảng cáo · ứng viên im 1 ngày',
          nhac: 'Chị ơi, em gửi chị <b>video một ngày làm việc ở chuyền điện tử</b> và phòng ký túc xá nữ nè, việc làm ngồi, nhẹ nhàng ạ 🏭 Chị muốn phỏng vấn thứ Hai hay thứ Năm ạ?',
          dung: '🎯 Theo thẻ #CongNhanDienTu: nhắc đúng vị trí ứng viên hỏi',
          khach: 'Thứ Năm nha em',
        },
        vd2: {
          kh: 'Lương công nhân điện tử bao nhiêu ạ?',
          ai: 'Dạ lương cơ bản <b>5.500.000đ</b>, cộng phụ cấp, tăng ca thì thực nhận <b>9–11 triệu</b> ạ.',
          tag: '🏷 #HoiLuong', tagNote: 'báo lương xong ứng viên im 1 ngày',
          nhac: 'Anh ơi, đợt phỏng vấn 23/11 nhà máy có <b>thưởng 1.000.000đ khi đủ 2 tháng làm việc</b>, ký túc xá vẫn miễn phí ạ. Em giữ suất phỏng vấn cho anh nha?',
          dung: '🎯 Theo thẻ #HoiLuong: bám đuổi theo thu nhập, đúng lý do ứng viên im',
          khach: 'Ok giữ suất giúp a',
        },
      },

      binhLuan: {
        post: 'Tuyển gấp <b>300 lao động phổ thông</b> KCN Bắc Ninh: lắp ráp điện tử, đóng gói, kho. Có ký túc xá 🏭',
        img: L(IMG['kho']),
        kav: 'TH', kten: 'Nguyễn Thị Hoa', hoi: 'Nữ 32 tuổi, có con nhỏ làm được không ạ? Có phải đóng phí gì không?',
        traLoi: 'Dạ chào chị Hoa! Bên em vừa nhắn tin tư vấn chi tiết cho chị, chị xem tin nhắn nhé 💬',
        act2: 'Nhắn tin riêng tư vấn vị trí hợp',
        nhan: 'Chào chị Hoa! Nữ đến <b>35 tuổi</b> vẫn ứng tuyển được ạ, có <b>ca hành chính</b> cho người có con nhỏ. Bên em <b>không thu phí</b> ứng viên. Chị cho em xin SĐT để HR hẹn lịch phỏng vấn nha!',
        sp: { ten: 'Lắp ráp điện tử · ca hành chính', gia: 'thực nhận 8–9 triệu', img: L(IMG['nha-may']) },
        khach: 'Số chị 0386 214 557 nhé',
      },

      duLieu: {
        shopA: 'Công ty A',
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: lương cao, chắc chắn đỗ', 'Ứng viên khiếu nại, công ty mất uy tín'],
        dung: ['Chỉ trả lời theo dữ liệu công ty cung cấp', 'Không chắc chắn → xin ứng viên chờ, AI tạm dừng', 'Báo ngay HR thật vào trả lời'],
        hoi: 'Vào làm có chắc được 15 triệu/tháng không em? Có bao đỗ không?',
        aiSai: 'Dạ chắc chắn ạ! Vào làm <b>bao đỗ 100%</b>, lương <b>15 triệu/tháng</b> luôn anh 🥰',
        thucTe: '⚠ Thực tế: thực nhận 9–11 triệu tùy tăng ca, nhà máy phỏng vấn mới quyết định',
        gian: 'Làm cả tháng được có 9 triệu, sao bảo 15 triệu? 😠',
        cho: 'Dạ anh chờ em một chút để em kiểm tra chính xác thông tin cho mình nhé!',
        nv: 'HR Phương · người thật',
        nvTraLoi: 'Dạ thực nhận 9–11 triệu tùy số giờ tăng ca, kết quả do nhà máy phỏng vấn quyết định ạ. Em gửi anh bảng lương chi tiết để anh xem nhé!',
      },

      tags: {
        rows: [
          { ten: 'Lê Văn Tuấn', av: 'VT', kenh: 'fb', msg: 'Chưa có kinh nghiệm làm được không?', gio: '20:46',
            tags: [['FB Ads · Tuyển CN điện tử', 'ng'], ['#CongNhanDienTu', 'qt'], ['Đã cho SĐT', 'ht'], ['Gọi lần 1 ✓', 'sa']] },
          { ten: 'Nguyễn Thị Hoa', av: 'TH', kenh: 'fb', msg: 'Có ca hành chính không em?', gio: '17:12',
            tags: [['Bình luận bài viết', 'ng'], ['#CaHanhChinh', 'qt'], ['Đã hẹn phỏng vấn', 'ht'], ['Đã kết nối Zalo', 'za']] },
          { ten: 'Phạm Minh Đức', av: 'MĐ', kenh: 'tiktok', msg: 'Làm kho có phải bốc vác không?', gio: '11:05',
            tags: [['TikTok · Video ký túc xá', 'ng'], ['#NhanVienKho', 'qt'], ['Đã cho SĐT', 'ht'], ['Gọi lần 2 · không bắt máy', 'sa']] },
          { ten: 'Trần Thị Thu', av: 'TT', kenh: 'zalo', msg: 'Đóng gói có tăng ca không ạ?', gio: 'Hôm qua',
            tags: [['Zalo OA', 'ng'], ['#DongGoi', 'qt'], ['Đang bám đuổi', 'ht']] },
          { ten: 'Hoàng Văn Nam', av: 'VN', kenh: 'zalo', msg: 'Em giới thiệu thêm 2 bạn nữa', gio: 'Hôm qua',
            tags: [['Zalo · Công nhân giới thiệu', 'ng'], ['#LapRapOTo', 'qt'], ['Đã nhận việc', 'ht'], ['Gọi lần 2 · đã chốt ✓', 'sa']] },
        ],
        chanDung: {
          ten: 'Lê Văn Tuấn', av: 'VT', kenh: 'fb', sub: 'Facebook Messenger · 0978 216 539',
          nhom: [
            ['Nguồn khách', [['Facebook Ads', 'ng'], ['Bài: Tuyển 200 công nhân điện tử', 'ng']]],
            ['Quan tâm', [['#CongNhanDienTu', 'qt'], ['#CanKyTucXa', 'qt']]],
            ['Hành trình', [['Cho SĐT 16/11', 'ht'], ['Hẹn phỏng vấn 23/11', 'ht']]],
            ['Sale gọi', [['Lần 1 · đã xác nhận lịch ✓', 'sa']]],
            ['Kết nối', [['Đã kết nối Zalo', 'za'], ['Chưa có kinh nghiệm · L1', 'lv']]],
          ],
          ghiChu: '24 tuổi, ở Thanh Hóa, chưa làm công ty, cần ký túc xá. Từng bị chỗ khác đòi phí 2 triệu nên lo mất phí.',
        },
      },

      chotLai: [
        ['ỨNG VIÊN', ['Data thô', 'Hội chợ việc làm', 'Ads', 'Giới thiệu', 'Tự tìm đến']],
        ['AI CHATBOT', ['Phản hồi nhanh tức thì', 'Tư vấn đúng vị trí, lương, chỗ ở', 'Xử lý băn khoăn: phí, kinh nghiệm', 'Lấy SĐT, hẹn phỏng vấn']],
        ['BÁM ĐUỔI', ['Gửi 5 tin nhắn trong 7 ngày: video nhà máy, ký túc xá, đợt tuyển mới']],
        ['PHỎNG VẤN', ['HR xác nhận lịch, xe đón', 'Phỏng vấn tại nhà máy, ký hợp đồng']],
        ['GIỚI THIỆU', ['Mời ứng viên cũ giới thiệu bạn bè, gửi đợt tuyển mới qua FB và Zalo']],
      ],
    },
  };
})();
