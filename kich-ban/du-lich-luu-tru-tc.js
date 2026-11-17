/* Kịch bản: DU LỊCH – LƯU TRÚ (tour trong nước, resort, khách sạn, combo nghỉ dưỡng) — BẢN TRÌNH CHIẾU, nhóm THƯƠNG MẠI ĐIỆN TỬ,
   ngành đặt chỗ: "lên đơn" là đơn đặt tour. Làm 17/11/2026 theo pipeline mới (TRINH-CHIEU.md mục 1), demo chat chuẩn mục 3, một mạch:
     chị Lan gửi ảnh tour Đà Lạt 3 ngày 2 đêm hỏi giá, nhà 6 người có ông bà ngoài 70 và 2 bé
     → AI chủ động hỏi lịch trình trước: ngày đi, đi từ đâu, giờ tới, tuổi 2 bé, sức khỏe ông bà
     → ca khó: bà yếu chân, sợ ông bà mệt vì Đà Lạt leo dốc nhiều → AI lên lịch trình nhẹ (xe riêng, 2–3 điểm đường bằng/ngày,
       trưa về nghỉ), resort có thang máy, 2 phòng tầng 1 gần hồ bơi; báo giá trọn gói, chính sách trẻ em
     → chị im (hỏi ông bà, chồng) → bám đuổi 2 tin theo thẻ #TourDaLat3N2D (ảnh thật resort, phòng, giữ phòng), #HoiGia (giảm 5% + quà)
     → chốt, lên đơn đặt tour (AI nhớ sẵn giờ hạ cánh, hỏi xe lăn cho bà), xếp xe đón → chăm sóc sau chuyến đi, gợi ý combo khác.
   Không có tin báo trước ngày khởi hành (Preny chưa có tính năng này). Không có tin cập nhật vận chuyển.
   Không có bước kết thúc: bấm → là sang slide kế. Slide 6 đổi chữ "vận chuyển" thành đặt chỗ qua deck.tinhNang.
   Tên công ty, lịch trình, giá, chính sách, tên khách, SĐT: dữ liệu minh họa. Ảnh: Unsplash (ảnh thật, không phải tour của khách). */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'da-lat': '1586595276832-b6840c79bdfc',        // ga Đà Lạt, nhà vàng mái nhọn
    'chua-da-lat': '1603053342277-4e49271c9a9d',   // chùa Linh Phước (chùa Ve Chai)
    'rung-thong': '1580824378537-e119885b93f7',    // rừng thông có lối đi bộ
    'ho-thong': '1628873525512-82ad482c44ae',      // hồ nước, rừng thông soi bóng
    'doi-che': '1579436938466-92a9ba75812f',       // đồi chè xanh
    'resort': '1711114378532-bab7d55311f3',        // biệt thự resort có hồ bơi
    'phong': '1696217612904-64c78f5c588a',         // phòng 2 giường, cửa sổ nhìn cây xanh
    'ong-ba': '1554331292-735256644d5f',           // ông bà ngồi ngắm đồi xanh
    'gia-dinh': '1523225918988-00624e6d8fee',      // ông bà kéo vali ngắm biển
    'xe-du-lich': '1570125909232-eb263c188f7e',    // xe du lịch lớn
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    shop: { name: 'Du Lịch Mây Ngàn', initials: 'MN' },
    headline: { pre: 'Hệ thống AI chatbot giúp tăng trung bình', em: '62% tỷ lệ chốt đơn' },
    sub: 'Tự động hóa toàn bộ quy trình chốt đơn đặt tour, bám đuổi, lên đơn và chăm sóc khách để tăng doanh thu.',
    cta: 'Dùng thử miễn phí tại **preny.ai**\nHotline **0389 647 778**',
    speed: 1.13,
    timing: { read0: 1000, readPerChar: 28, readMax: 4500, type0: 800, typePerChar: 3, typeMax: 1500, fastType: 500,
              featureHold: 1400, sepHold: 1100, cardHold: 4000, introCard: 250 },

    images: Object.fromEntries(Object.entries(IMG).map(([k, id]) => [k, U(id)])),

    // Cột trái demo: đúng 4 tính năng được diễn, theo thứ tự diễn
    features: [
      { title: 'AI chatbot tư vấn, chốt đơn đặt tour 24/7', desc: 'Tăng trung bình 62% tỷ lệ chốt đơn.',
        kws: ['Trả lời ngay tức thì, 24/7', 'Chủ động hỏi lịch trình, tuổi, sức khỏe', 'Lên lịch trình nhẹ cho ông bà, bé', 'Resort có thang máy, phòng tầng 1', 'Báo giá trọn gói, chủ động mời đặt'] },
      { title: 'AI tự động bám đuổi khách hàng trong 7 ngày', desc: 'Tăng thêm khoảng 35% tỷ lệ chốt đơn.',
        kws: ['~65% khách nhắn tin rồi im lặng', 'Tự gắn thẻ tour khách xem, lý do im', 'Gửi ảnh thật resort, giữ phòng cho khách', 'Báo giá xong im → ưu đãi đặt trong ngày'] },
      { title: 'AI Agent tự động lên đơn đặt tour', desc: 'Tiết kiệm hơn 90% thời gian xử lý đơn.',
        kws: ['Thu tên, SĐT, nhớ sẵn lịch trình khách', 'Gửi tin xác nhận đặt chỗ đầy đủ', 'Tự tạo đơn, xếp xe đón sân bay'] },
      { title: 'AI tự động chăm sóc khách hàng sau bán', desc: 'Tăng doanh thu từ khách hàng cũ.',
        kws: ['Hỏi thăm sau chuyến đi', 'Gợi ý tour, combo mới, ưu đãi khách cũ', 'Khách đặt lại cho cả nhà'] },
    ],

    steps: [
      { intro: true, hold: 1800 },

      /* ---- 1. Tư vấn: AI hỏi lịch trình trước; ca khó: ông bà ngoài 70, bà yếu chân, sợ leo dốc ---- */
      { feature: 1 },
      { sep: 'Khách nhắn tin từ quảng cáo Facebook', style: 'time', hold: 800 },
      { img: 'da-lat', hold: 1500 },
      { kh: 'Tour Đà Lạt 3N2Đ này giá sao em? Nhà c đi 6 người, có ông bà ngoài 70 với 2 bé' },
      { ai: 'Dạ em chào chị! Em tư vấn ngay cho cả nhà mình nha 🌲', fast: true, meta: '⚡ Preny AI trả lời sau 2 giây', kw: 0 },
      { ai: 'Có ông bà và bé nên em hỏi kỹ **lịch trình** chút ạ: nhà mình định đi **ngày nào**, đi từ **đâu** (bay hay xe), **2 bé mấy tuổi**, và ông bà **đi bộ, leo dốc** có ổn không chị?', kw: 1 },
      { kh: 'Đi 20/12, bay từ HN đáp Liên Khương tầm 10h. 2 bé 8t với 4t. Ông 75 bà 72, bà yếu chân. Nghe ĐL leo dốc nhiều, c sợ ông bà mệt' },
      { ai: 'Dạ em lên **lịch trình nhẹ** cho nhà mình: **xe riêng** đón tại sân bay, mỗi ngày chỉ **2–3 điểm đường bằng, ít bậc thang** như đồi chè Cầu Đất, hồ Tuyền Lâm, ga Đà Lạt. **Trưa về nghỉ 2 tiếng**, bỏ hẳn các điểm phải leo dốc ạ.', kw: 2 },
      { ai: 'Nghỉ **resort có thang máy**, em xếp **2 phòng tầng 1 gần hồ bơi**, bà không phải leo cầu thang. Giá **4.200.000đ/người lớn**, bé 8 tuổi **giảm 50%**, bé 4 tuổi **miễn phí**, đã gồm xe riêng, 2 đêm resort, ăn sáng, vé tham quan.', kw: 3 },
      { ai: 'Cả nhà 6 người tổng **18.900.000đ** ạ. Dịp 20/12 resort chỉ còn **2 phòng tầng 1**, chị đặt để em giữ phòng luôn nha? 😊', kw: 4 },
      { kh: 'Để c hỏi ông bà với chồng đã' },

      /* ---- 2. Khách im → bám đuổi 2 tin theo thẻ ---- */
      { feature: 2 },
      { sep: 'Khách chưa phản hồi… · AI gắn thẻ #TourDaLat3N2D #HoiGia', style: 'silent', kw: [0, 1], hold: 1800 },
      { sep: '— 1 ngày sau —' },
      { ai: 'Chị Lan ơi, em gửi chị **ảnh thật resort, phòng tầng 1** và mấy điểm **đường bằng** trong lịch trình để chị cho ông bà xem cùng nha. Em đang **giữ tạm 2 phòng** ngày 20/12 cho nhà mình ạ 😊', meta: '🔁 Tự động · Bám đuổi theo thẻ #TourDaLat3N2D', kw: 2 },
      { aiImgs: [{ img: 'resort', label: 'Resort có hồ bơi' }, { img: 'phong', label: 'Phòng tầng 1' },
                 { img: 'doi-che', label: 'Đồi chè Cầu Đất' }, { img: 'ho-thong', label: 'Hồ Tuyền Lâm' }], hold: 3200 },
      { sep: '— 2 ngày sau —' },
      { ai: 'Tour Đà Lạt chị hỏi giá, đặt trong hôm nay em **giảm 5% còn 17.955.000đ** cho cả nhà, tặng thêm **bữa tối lẩu gà lá é** ạ 🎁', meta: '🔁 Tự động · Bám đuổi theo thẻ #HoiGia', kw: 3 },
      { kh: 'Ông bà đồng ý rồi em, chốt cho nhà c 6 người nha' },

      /* ---- 3. Lên đơn đặt tour tự động, xếp xe đón (không có tin cập nhật vận chuyển) ---- */
      { feature: 3 },
      { ai: 'Dạ chị cho em xin **họ tên, SĐT** người đặt nha. Em đã ghi chuyến **đáp Liên Khương 10h ngày 20/12**. Ông bà có cần **xe lăn ở sân bay** không để em báo trước ạ?', kw: 0 },
      { kh: 'Trần Thu Lan – 0904 375 128\nBà cần xe lăn em nhé' },
      { card: {
          tag: '✓ Tin xác nhận đặt chỗ',
          intro: 'Dạ chị kiểm tra lại đơn đặt tour giúp em nhé:',
          lines: ['Tour Đà Lạt 3 ngày 2 đêm · 20/12 – 22/12', '4 người lớn, 2 bé (8 và 4 tuổi) · 2 phòng tầng 1', 'Xe riêng đón Liên Khương 10h · xe lăn cho bà', 'Tổng cộng: **17.955.000đ** (đã giảm 5%)', 'Người đặt: Trần Thu Lan · 0904 375 128'],
          button: 'Quản lý đặt chỗ',
        }, kw: 1, hold: 4500 },
      { kh: 'Ok em' },
      { card: {
          tag: '✓ Đã tạo đơn đặt chỗ', ok: true,
          lines: ['Mã đặt chỗ: **#MN51220**', 'Khởi hành: **Chủ Nhật, 20/12**', 'Đã xếp xe riêng đón tại sân bay Liên Khương'],
        }, kw: 2, hold: 3500 },

      /* ---- 4. Chăm sóc sau chuyến đi. Không có tin báo trước ngày khởi hành. ---- */
      { feature: 4 },
      { sep: '— Ngày 23/12 · sau chuyến đi —' },   // ghi rõ ngày để demo dọc không đặt tin này trước ngày khởi hành 20/12
      { ai: 'Chị Lan ơi, chuyến Đà Lạt ông bà có mệt không ạ? Có gì chưa hài lòng chị cứ nhắn em nha 💚', meta: '💚 Tự động · Chăm sóc sau bán', kw: 0 },
      { kh: 'Ông bà vui lắm em, lịch nhẹ nên không mệt. 2 đứa nhỏ mê đồi chè 👍' },
      { ai: 'Dạ vui quá ạ! Khách cũ đặt tiếp được **giảm 10%** các tour, combo này ạ:', kw: 1 },
      { catalog: [
          { name: 'Combo nghỉ biển 3N2Đ', sub: 'Giá mỗi người lớn · resort sát biển', price: '3.420.000đ', old: '3.800.000đ', tag: 'Dịp hè', art: 'gia-dinh' },
          { name: 'Combo resort Đà Lạt 2 đêm', sub: 'Giá mỗi phòng · có thang máy', price: '2.700.000đ', old: '3.000.000đ', tag: 'Bán chạy', art: 'resort' },
          { name: 'Tour Đà Lạt mùa hoa', sub: 'Giá mỗi người lớn · lịch trình nhẹ', price: '3.780.000đ', old: '4.200.000đ', tag: 'Dịp Tết', art: 'rung-thong' },
        ], hold: 4000 },
      { kh: 'Hè c đặt combo biển cho cả nhà nha em', kw: 2, hold: 1500 },
      // Không có { end: true }: bấm → thêm một lần là sang thẳng slide kế.
    ],

    /* ===== Nội dung slide trình chiếu (trinh-chieu.html). Slide thống kê dùng số minh họa (deck.dashboard). ===== */
    deck: {
      /* Demo chat dọc (demo-doc.js): tên khách trên Messenger, bài đăng Facebook (anh = khóa trong images), câu bình luận. */
      demoDoc: {
        khach: 'Thu Lan',
        sanPham: 'Tour Đà Lạt 3 ngày 2 đêm',
        binhLuan: 'Đi có ông bà thì sao em?',
        post: {
          tieuDe: 'TOUR ĐÀ LẠT 3 NGÀY 2 ĐÊM 🌲',
          dong: ['Xe riêng đón sân bay', 'Lịch trình nhẹ cho ông bà', 'Resort có thang máy, hồ bơi', 'Bé dưới 6 tuổi miễn phí'],
          anh: ['da-lat', 'doi-che', 'ho-thong', 'resort'],
        },
      },
      /* Pipeline thương mại điện tử 16/11/2026 (TRINH-CHIEU.md mục 1): dashboard, chatbot, afterSale. */
      dashboard: [
        { ten: 'Tour <span class="grad">trong nước</span>', den: '21/07/2026', khach: 12, tyLe: 0.55 },
        { ten: 'Resort, <span class="grad">khách sạn</span>', den: '18/08/2026', khach: 9, tyLe: 0.57 },
        { ten: 'Combo <span class="grad">nghỉ dưỡng</span>', den: '26/09/2026', khach: 8, tyLe: 0.53 },
      ],
      chatbot: {
        y: [
          ['Trả lời ngay tức thì, 24/7', 'Khách nhắn lúc nào, AI trả lời sau 2 giây'],
          ['Hỏi lịch trình, giữ chân khách', 'Chủ động hỏi ngày đi, số người, tuổi, sức khỏe'],
          ['Chốt chỗ và tự lên đơn đặt tour', 'Khách đồng ý là AI tạo đơn ngay trên Preny'],
          ['Hiểu hình ảnh khách gửi', 'Khách gửi ảnh, AI biết đúng điểm đến nào'],
        ],
        chat: [
          { ref: { img: L(IMG['da-lat']), ten: 'Tour Đà Lạt 3 ngày 2 đêm' } },
          { kh: 'Tour Đà Lạt 3N2Đ giá sao em? Nhà c 6 người, có ông bà ngoài 70 với 2 bé' },
          {
            ai: 'Dạ em chào chị! Chị cho em xin **lịch trình**: **ngày đi**, đi từ đâu, **tuổi 2 bé** và ông bà **đi bộ, leo dốc** có ổn không để em lên lịch hợp nhất nha.',
            meta: '⚡ Preny AI trả lời sau 2 giây',
          },
          { kh: '20/12 bay từ HN, đáp 10h. Bé 8t với 4t. Bà yếu chân, c sợ ông bà mệt' },
          {
            ai: 'Dạ em lên **lịch trình nhẹ**: **xe riêng** đón sân bay, mỗi ngày 2–3 điểm **đường bằng**, nghỉ **resort có thang máy**, **2 phòng tầng 1**. Giá **4.200.000đ/người lớn**, bé 8 tuổi giảm 50%, bé 4 tuổi miễn phí ạ.',
          },
          { kh: 'Ok chốt cho nhà c. Trần Thu Lan, 0904 375 128' },
          { ai: 'Dạ em lên đơn đặt tour và xếp xe đón cả nhà ngay ạ ⚡' },
          { don: true },
          { ok: true },
        ],
        don: {
          ten: 'Trần Thu Lan',
          sdt: '0904 375 128',
          diaChi: 'Đón tại sân bay Liên Khương · 10h ngày 20/12/2026',
          ma: '#MN51220',
          phi: 'gồm xe riêng',
          ghiChu: 'Khởi hành **Chủ Nhật 20/12** · 4 người lớn, 2 bé (8 và 4 tuổi) · 2 phòng tầng 1 · xe lăn cho bà',
          // 1 dòng trọn gói (2 dòng thì màn hình Tạo đơn tràn khỏi slide)
          sp: [{ img: L(IMG['da-lat']), ten: 'Tour Đà Lạt 3N2Đ trọn gói', sl: 1, dv: 'đoàn 6 người', gia: 18900000 }],
        },
        anh: {
          img: L(IMG['chua-da-lat']),
          kh: 'Chùa như hình này có trong lịch trình không em? Ông bà c thích đi chùa',
          ai: 'Dạ hình chị gửi là **chùa Linh Phước** (chùa Ve Chai) ạ. Em thêm vào **sáng ngày 3**, xe đỗ sát cổng, sân chùa **bằng phẳng**, ông bà đi lại nhẹ nhàng, chỉ cần tránh lên tháp chuông nhiều bậc nha.',
        },
      },
      afterSale: {
        y1: 'AI gửi tiếp 5 dịch vụ đi kèm để bán thêm (upsell)',
        y2: 'Tour mới, voucher, ưu đãi dịp lễ',
        gio: 'Khách vừa đặt tour',
        loi: 'Cảm ơn chị Lan đã đặt tour tại Mây Ngàn 💚 Nhiều gia đình có ông bà, bé nhỏ đặt thêm mấy dịch vụ này cho chuyến đi trọn vẹn ạ:',
        sp: [
          { img: L(IMG['ong-ba']), ten: 'Chụp ảnh gia đình cùng ông bà', gia: 1200000, nut: 'Đặt thêm' },
          { img: L(IMG['doi-che']), ten: 'Tiệc trà chiều trên đồi chè', gia: 450000, nut: 'Đặt thêm' },
          { img: L(IMG['phong']), ten: 'Nâng phòng gia đình thông nhau', gia: 900000, nut: 'Đặt thêm' },
          { img: L(IMG['xe-du-lich']), ten: 'Xe riêng thêm 1 ngày tự do', gia: 1500000, nut: 'Đặt thêm' },
          { img: L(IMG['rung-thong']), ten: 'Dã ngoại rừng thông bằng xe điện', gia: 800000, nut: 'Đặt thêm' },
        ],
        khach: 'Đặt thêm cho c chụp ảnh gia đình với tiệc trà chiều trên đồi chè nhé',
        pill: '🛍 Khách đặt thêm ngay: đơn tăng từ 18.900.000đ lên 20.550.000đ',
        fmm: {
          sep: '1 tuần sau chuyến đi · tin Facebook FMM',
          chao: 'Chào chị Lan 👋 Hè này Mây Ngàn mở combo nghỉ biển cho gia đình có ông bà, gửi chị xem trước nha!',
          img: L(IMG['gia-dinh']),
          nhan: 'COMBO MỚI',
          ten: 'Combo nghỉ biển 3 ngày 2 đêm',
          mo: 'Khách cũ giảm 10%, phòng tầng thấp, xe riêng đón.',
          nut: 'Xem lịch trình',
        },
        zbs: {
          ten: 'Tặng chị Lan voucher 10%',
          mo: 'Cảm ơn chị và gia đình đã đồng hành cùng Du Lịch Mây Ngàn. Gửi chị ưu đãi cho chuyến đi tiếp theo:',
          dong: [['Mã voucher', '**MAYNGAN10**'], ['Ưu đãi', 'Giảm 10% mọi tour, combo'], ['Hạn dùng', '30/06/2027']],
          nut: 'Đặt tour ngay',
        },
      },
      // Slide 6: có lên đơn (đặt chỗ) → giữ 6 tính năng, chỉ đổi chữ "vận chuyển"
      tinhNang: [
        ['AI chatbot chốt đơn tự động 100%', 'Tăng trung bình 62% tỷ lệ chốt đơn'],
        ['AI Agent tự lên đơn đặt chỗ', 'Tiết kiệm hơn 90% thời gian xử lý đơn'],
        ['AI tự bám đuổi khách trong 7 ngày', 'Tăng thêm khoảng 35% tỷ lệ chốt đơn'],
        ['AI tự chăm sóc khách sau chuyến đi', 'Gợi ý tour, combo mới, khách đặt lại'],
        ['Bộ công cụ Remarketing FMM và ZBS', 'Khai thác hiệu quả dữ liệu khách hàng'],
        ['Tự gửi sự kiện mua hàng qua Meta CAPI', 'Hỗ trợ tối ưu quảng cáo Facebook'],
      ],

      bamDuoi: {
        cmpDung: ['Khách nhắn xong im → nhắc đúng tour khách xem (thẻ <b>#TourDaLat3N2D</b> từ quảng cáo)',
                  'Báo giá xong im → bám đuổi theo giá: ưu đãi đặt trong ngày, quà tặng (thẻ <b>#HoiGia</b>)',
                  'Đúng nhu cầu, đúng lý do im → khách quay lại đặt tour'],
        hoi: 'Tour Đà Lạt 3 ngày 2 đêm giá bao nhiêu em?',
        traLoiThuong: 'Dạ 4.200.000đ/khách ạ.',
        refImg: L(IMG['da-lat']), refTen: 'Tour Đà Lạt 3 ngày 2 đêm',
        vd1: {
          kh: 'Tour Đà Lạt cuối tháng 12 còn chỗ không em?',
          ai: 'Dạ còn ạ! Nhà mình đi ngày nào, mấy người, có ông bà hay bé nhỏ không để em lên lịch trình hợp nha?',
          tag: '🏷 #TourDaLat3N2D', tagNote: 'thẻ từ quảng cáo · khách im 1 ngày',
          nhac: 'Chị ơi, em gửi chị <b>ảnh thật resort và lịch trình nhẹ</b> tour Đà Lạt chị xem hôm qua, em <b>giữ tạm phòng tầng 1</b> cuối tháng 12 cho nhà mình nha 😊',
          dung: '🎯 Theo thẻ #TourDaLat3N2D: nhắc đúng tour khách xem',
          khach: 'Gửi c lịch trình chi tiết với',
        },
        vd2: {
          kh: '4 người lớn 1 bé 8 tuổi bao nhiêu em?',
          ai: 'Dạ cả nhà là <b>18.900.000đ</b>, gồm xe riêng, 2 đêm resort, ăn sáng ạ.',
          tag: '🏷 #HoiGia', tagNote: 'báo giá xong khách im 1 ngày',
          nhac: 'Chị ơi, tour chị hỏi giá hôm qua, đặt trong hôm nay em <b>giảm 5%</b> và <b>tặng bữa tối lẩu gà lá é</b> ạ. Em giữ chỗ cho nhà mình nha?',
          dung: '🎯 Theo thẻ #HoiGia: bám đuổi theo giá, đúng lý do khách im',
          khach: 'Ok giữ chỗ cho c',
        },
      },
      binhLuan: {
        post: 'Tour Đà Lạt <b>3 ngày 2 đêm</b>: xe riêng đón sân bay, resort có hồ bơi, lịch trình nhẹ cho cả nhà 🌲',
        img: L(IMG['ho-thong']),
        kav: 'NH', kten: 'Ngọc Hân', hoi: 'Nhóm mình 8 bạn trẻ, muốn đi săn mây với cắm trại thì có tour không shop?',
        traLoi: 'Dạ chào chị Hân! Mây Ngàn vừa nhắn tin tư vấn chi tiết cho chị, chị xem tin nhắn nhé 💬',
        act2: 'Nhắn tin riêng tư vấn tour',
        nhan: 'Chào chị Hân! Nhóm bạn trẻ chị đi <b>tour săn mây, cắm trại rừng thông</b> 2 ngày 1 đêm ạ, nhóm từ 8 người <b>giảm 10%</b>. Nhóm mình định đi ngày nào, đi từ đâu để em giữ chỗ nha!',
        sp: { ten: 'Tour săn mây, cắm trại 2N1Đ', gia: '1.890.000đ/khách', img: L(IMG['rung-thong']) },
        khach: 'Đầu tháng 1 tụi mình đi từ Sài Gòn',
      },
      duLieu: {
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: phòng, tiện ích cho người lớn tuổi', 'Khách khiếu nại, đánh giá xấu'],
        hoi: 'Resort có thang máy, phòng nào cũng có tay vịn cho người già đúng không em?',
        aiSai: 'Dạ đúng ạ! <b>Phòng nào cũng có tay vịn</b>, có cả <b>xe lăn miễn phí</b> cho ông bà luôn chị 🥰',
        thucTe: '⚠ Thực tế: chỉ phòng tầng 1 có tay vịn, xe lăn phải đặt trước',
        gian: 'Phòng không có tay vịn, mẹ tôi suýt trượt ngã! Sao bảo phòng nào cũng có? 😠',
        cho: 'Dạ chị chờ em một chút để em kiểm tra chính xác loại phòng và tiện ích cho người lớn tuổi nhé!',
        nv: 'Điều hành Hương · người thật',
        nvTraLoi: 'Dạ phòng tầng 1 có tay vịn trong nhà tắm và gần thang máy ạ. Em giữ 2 phòng tầng 1 và đặt trước xe lăn cho bà, gửi chị xác nhận nhé!',
      },
    },
  };
})();
