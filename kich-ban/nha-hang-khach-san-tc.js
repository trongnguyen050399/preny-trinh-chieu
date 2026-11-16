/* Kịch bản: NHÀ HÀNG, KHÁCH SẠN (khách sạn biển có nhà hàng: đặt phòng, đặt bàn, tiệc) — BẢN TRÌNH CHIẾU,
   nhóm THƯƠNG MẠI ĐIỆN TỬ. Khung ngang 16:9.
   Demo chat theo chuẩn thương mại điện tử (TRINH-CHIEU.md mục 3), một mạch; "lên đơn" ở đây là đơn đặt phòng:
     anh Khoa gửi ảnh phòng hỏi (2 người lớn 2 bé, dịp Giáng sinh) → AI chủ động hỏi lịch trình: ngày đến, số đêm,
     giờ tới, tuổi 2 bé → tư vấn đúng hạng phòng, chính sách trẻ em, xếp nhận phòng sớm và đón sân bay theo giờ hạ cánh, báo giá
     → anh im → bám đuổi 2 tin theo thẻ #FamilySuite, #HoiGia (ảnh thật phòng, giữ phòng view biển; ưu đãi đặt trong ngày)
     → anh quay lại chốt → lên đơn đặt phòng tự động (AI nhớ sẵn giờ hạ cánh), xếp xe đón → chăm sóc sau khi trả phòng,
     mời đặt tiệc ở nhà hàng, khách đặt tiệc tất niên.
   Không có tin báo trước 1 ngày khách đến: Preny chưa có tính năng này (người dùng dặn 16/11/2026).
   Không có tin cập nhật vận chuyển. Không có bước kết thúc: bấm → là sang slide kế.
   Slide 6 đổi chữ "vận chuyển" thành đặt phòng qua deck.tinhNang (slide 3 tự động hoá đã bỏ 16/11/2026).
   Tên khách sạn, giá phòng, chính sách, tên khách, SĐT: dữ liệu minh họa. Ảnh: Unsplash (ảnh thật, không phải khách sạn của khách). */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'phong-family': '1609602126247-4ab7188b4aa1',
    'phong-2': '1776876648949-63ccabf63b10',
    'ban-cong': '1689717887631-088197cdc2ca',
    'ho-boi': '1520250497591-112f2f40a3f4',
    'buffet-sang': '1578704311587-4fbd590630d5',
    'hai-san': '1651323018466-b36b7df1d2b1',
    'nha-hang': '1493246318656-5bfd4cfb29b8',
    'tiec': '1524824267900-2fa9cbf7a506',
    'giang-sinh': '1763463608554-1a1d7ec7147b',
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    shop: { name: 'Khách Sạn Biển Lam', initials: 'BL' },
    headline: { pre: 'Hệ thống AI chatbot giúp tăng trung bình', em: '62% tỷ lệ chốt đơn' },
    sub: 'Tự động hóa toàn bộ quy trình chốt đơn đặt phòng, bám đuổi, lên đơn và chăm sóc khách để tăng doanh thu.',
    cta: 'Dùng thử miễn phí tại **preny.ai**\nHotline **0389 647 778**',
    speed: 1.13,
    timing: { read0: 1000, readPerChar: 28, readMax: 4500, type0: 800, typePerChar: 3, typeMax: 1500, fastType: 500,
              featureHold: 1400, sepHold: 1100, cardHold: 4000, introCard: 250 },

    images: Object.fromEntries(Object.entries(IMG).map(([k, id]) => [k, U(id)])),

    // Cột trái demo: đúng 4 tính năng được diễn, theo thứ tự diễn
    features: [
      { title: 'AI chatbot tư vấn, chốt đơn đặt phòng 24/7', desc: 'Tăng trung bình 62% tỷ lệ chốt đơn.',
        kws: ['Trả lời ngay tức thì, 24/7', 'Chủ động hỏi lịch trình: ngày đến, số đêm, giờ tới', 'Tư vấn đúng hạng phòng, chính sách trẻ em', 'Xếp nhận phòng sớm, đón sân bay theo giờ tới', 'Báo giá rõ, chủ động mời đặt'] },
      { title: 'AI tự động bám đuổi khách hàng trong 7 ngày', desc: 'Tăng thêm khoảng 35% tỷ lệ chốt đơn.',
        kws: ['~65% khách nhắn tin rồi im lặng', 'Tự gắn thẻ hạng phòng khách xem, lý do im', 'Gửi ảnh thật phòng, giữ phòng view biển', 'Báo giá xong im → ưu đãi đặt trong ngày'] },
      { title: 'AI Agent tự động lên đơn đặt phòng', desc: 'Tiết kiệm hơn 90% thời gian xử lý đơn.',
        kws: ['Thu tên, SĐT, nhớ sẵn lịch trình khách', 'Gửi tin xác nhận đặt phòng đầy đủ', 'Tự tạo đơn, xếp xe đón sân bay'] },
      { title: 'AI tự động chăm sóc khách hàng sau bán', desc: 'Tăng doanh thu từ khách hàng cũ.',
        kws: ['Hỏi thăm sau khi khách trả phòng', 'Mời nhà hàng: tiệc, buffet cho khách cũ', 'Khách đặt thêm, tăng giá trị vòng đời'] },
    ],

    steps: [
      { intro: true, hold: 1800 },

      /* ---- 1. Tư vấn: 2 người lớn 2 bé, chính sách trẻ em, đón sân bay, nhận phòng sớm ---- */
      { feature: 1 },
      { sep: 'Khách nhắn tin từ quảng cáo Facebook', style: 'time', hold: 800 },
      { img: 'phong-family', hold: 1500 },
      { kh: 'Phòng này còn ko em? Nhà a 2 người lớn 2 bé, muốn đi Đà Nẵng dịp Giáng sinh' },
      { ai: 'Dạ còn phòng ạ anh! Em kiểm tra cho gia đình mình ngay 🌊', fast: true, meta: '⚡ Preny AI trả lời sau 2 giây', kw: 0 },
      { ai: 'Anh cho em hỏi **lịch trình** để em giữ đúng phòng nha: gia đình mình **đến ngày nào, ở mấy đêm**, khoảng **mấy giờ tới Đà Nẵng**, và **2 bé mấy tuổi** ạ?', kw: 1 },
      { kh: '24/12 a bay vào, hạ cánh 11h40, ở 3 đêm. 2 bé 6t với 10t, bé có tính tiền ko em?' },
      { ai: 'Dạ 3 đêm 24–27/12 em gợi ý phòng **Family Suite view biển** (45m², 1 giường đôi + 1 giường đơn), ở vừa 2 người lớn 2 bé ạ. Bé 6 tuổi **miễn phí**, bé 10 tuổi **phụ thu ăn sáng 150.000đ/đêm**, không cần kê thêm giường.', kw: 2 },
      { ai: 'Anh hạ cánh 11h40 thì khoảng **12h15** tới khách sạn ạ. Nhận phòng chuẩn 14h, em **ghi chú nhận phòng sớm** cho nhà mình, phòng trống sớm là vào luôn; chưa có thì gửi hành lý, ăn trưa hoặc ra hồ bơi trước. Ở từ 3 đêm còn được **đón sân bay miễn phí** nha anh.', kw: 3 },
      { ai: 'Giá đêm 24–27/12 là **2.450.000đ/đêm**, gồm buffet sáng ạ. Dịp Giáng sinh phòng view biển kín nhanh, anh đặt để em giữ phòng luôn nha? 😊', kw: 4 },
      { kh: 'Để a bàn với vợ đã' },

      /* ---- 2. Khách im → bám đuổi 2 tin theo thẻ ---- */
      { feature: 2 },
      { sep: 'Khách chưa phản hồi… · AI gắn thẻ #FamilySuite #HoiGia', style: 'silent', kw: [0, 1], hold: 1800 },
      { sep: '— 1 ngày sau —' },
      { ai: 'Anh Khoa ơi, em gửi anh **ảnh thật phòng Family Suite** và hồ bơi để anh cho chị xem cùng nha. Em đang **giữ tạm 1 phòng tầng 12 view biển** đêm 24–27/12 cho nhà mình ạ 😊', meta: '🔁 Tự động · Bám đuổi theo thẻ #FamilySuite', kw: 2 },
      { aiImgs: [{ img: 'phong-family', label: 'Family Suite · 45m²' }, { img: 'ban-cong', label: 'Ban công view biển' },
                 { img: 'ho-boi', label: 'Hồ bơi ngoài trời' }, { img: 'buffet-sang', label: 'Buffet sáng' }], hold: 3200 },
      { sep: '— 2 ngày sau —' },
      { ai: 'Phòng anh hỏi giá, đặt trong hôm nay em **giảm 10% tiền phòng** và **miễn phụ thu ăn sáng cho bé 10 tuổi**, còn **6.615.000đ cho 3 đêm** ạ. Đêm 24/12 chỉ còn 2 phòng Family Suite thôi anh 🎄', meta: '🔁 Tự động · Bám đuổi theo thẻ #HoiGia', kw: 3 },
      { kh: 'Ok chốt cho a phòng tầng 12 đó nhé em' },

      /* ---- 3. Lên đơn đặt phòng tự động, xếp xe đón (không có tin cập nhật vận chuyển) ---- */
      { feature: 3 },
      { ai: 'Dạ anh cho em xin **họ tên, SĐT** người đặt nha. Xe đón em xếp theo giờ anh hạ cánh **11:40 ngày 24/12** luôn ạ.', kw: 0 },
      { kh: 'Trần Đăng Khoa – 0905 678 123' },
      { card: {
          tag: '✓ Tin xác nhận đặt phòng',
          intro: 'Dạ anh kiểm tra lại đơn đặt phòng giúp em nhé:',
          lines: ['Family Suite view biển · tầng 12 · 3 đêm 24–27/12', '2 người lớn, 2 bé (6 và 10 tuổi) · gồm buffet sáng', 'Xe đón sân bay miễn phí · 11:40 ngày 24/12', 'Tổng cộng: **6.615.000đ** (đã giảm 10%)', 'Người đặt: Trần Đăng Khoa · 0905 678 123'],
          button: 'Quản lý đặt phòng',
        }, kw: 1, hold: 4500 },
      { kh: 'Ok em' },
      { card: {
          tag: '✓ Đã tạo đơn đặt phòng', ok: true,
          lines: ['Mã đặt phòng: **#BL24127**', 'Nhận phòng: **Thứ Năm, 24/12**', 'Đã xếp xe đón sân bay lúc 11:40'],
        }, kw: 2, hold: 3500 },

      /* ---- 4. Chăm sóc sau bán (sau khi trả phòng), mời nhà hàng. Không có tin báo trước ngày khách đến (Preny chưa có). ---- */
      { feature: 4 },
      { sep: '— Sau khi khách trả phòng —' },
      { ai: 'Anh Khoa ơi, gia đình mình nghỉ ở Biển Lam có vui không ạ? Có gì chưa hài lòng anh cứ nhắn em nha 💜', meta: '💜 Tự động · Chăm sóc sau bán', kw: 0 },
      { kh: 'Vui lắm em, 2 bé mê hồ bơi luôn 👍' },
      { ai: 'Dạ vui quá ạ! Cuối năm nhà hàng bên em nhận **tiệc tất niên, tiệc gia đình**, khách cũ được **giảm 15%** ạ:', kw: 1 },
      { catalog: [
          { name: 'Tiệc tất niên công ty', sub: 'Giá mỗi khách · phòng riêng', price: '382.000đ', old: '450.000đ', tag: 'Tất niên', art: 'tiec' },
          { name: 'Buffet hải sản cuối tuần', sub: '18:30 · tầng thượng', price: '552.000đ', old: '650.000đ', tag: 'Bán chạy', art: 'hai-san' },
          { name: 'Bàn tiệc gia đình', sub: '4 người · có bánh cho bé', price: '2.380.000đ', old: '2.800.000đ', tag: 'Gia đình', art: 'giang-sinh' },
        ], hold: 4000 },
      { kh: 'Tất niên công ty anh 30 người, đặt bên em luôn nhé', kw: 2, hold: 1500 },
      // Không có { end: true }: bấm → thêm một lần là sang thẳng slide kế.
    ],

    /* ===== Nội dung slide trình chiếu (trinh-chieu.html). Slide thống kê dùng số minh họa (deck.dashboard). ===== */
    deck: {
      /* Pipeline thương mại điện tử 16/11/2026 (TRINH-CHIEU.md mục 1): dashboard, chatbot, afterSale. */
      dashboard: [
        { ten: 'Khách sạn <span class="grad">biển</span>', den: '21/07/2026', khach: 10, tyLe: 0.55 },
        { ten: 'Resort <span class="grad">nghỉ dưỡng</span>', den: '18/08/2026', khach: 8, tyLe: 0.53 },
        { ten: 'Nhà hàng, <span class="grad">tiệc</span>', den: '26/09/2026', khach: 12, tyLe: 0.57 },
      ],
      chatbot: {
        y: [
          ['Trả lời ngay tức thì, 24/7', 'Khách nhắn lúc nào, AI trả lời sau 2 giây'],
          ['Hỏi lịch trình, giữ chân khách', 'Chủ động hỏi ngày đến, số đêm, giờ tới'],
          ['Chốt phòng và tự lên đơn đặt phòng', 'Khách đồng ý là AI tạo đơn ngay trên Preny'],
          ['Hiểu hình ảnh khách gửi', 'Khách gửi ảnh, AI biết đúng phòng, khu nào'],
        ],
        chat: [
          { ref: { img: L(IMG['phong-family']), ten: 'Family Suite view biển' } },
          { kh: 'Phòng này còn ko em? Nhà a 2 người lớn 2 bé, muốn đi Đà Nẵng dịp Giáng sinh' },
          {
            ai: 'Dạ còn phòng ạ anh! 🌊 Anh cho em xin **lịch trình**: ngày đến, ở mấy đêm, **mấy giờ tới nơi** và tuổi 2 bé để em xếp phòng hợp nhất nha.',
            meta: '⚡ Preny AI trả lời sau 2 giây',
          },
          { kh: '24/12 a bay vào, hạ cánh 11h40, ở 3 đêm. 2 bé 6t với 10t' },
          {
            ai: 'Dạ **Family Suite view biển** hợp nhà mình ạ: bé 6 tuổi miễn phí, bé 10 tuổi phụ thu nhẹ. Em ghi chú **nhận phòng sớm** và **đón sân bay 11:40** miễn phí. Giá **2.450.000đ/đêm** gồm buffet sáng.',
          },
          { kh: 'Ok chốt cho a. Trần Đăng Khoa, 0905 678 123' },
          { ai: 'Dạ em lên đơn đặt phòng và xếp xe đón cho anh ngay ạ ⚡' },
          { don: true },
          { ok: true },
        ],
        don: {
          ten: 'Trần Đăng Khoa',
          sdt: '0905 678 123',
          diaChi: 'Nhận phòng 24/12 · trả phòng 27/12/2026',
          ma: '#BL24127',
          phi: 'gồm buffet sáng',
          ghiChu: 'Đón sân bay **11:40 ngày 24/12** · nhận phòng sớm · 2 người lớn, 2 bé (6 và 10 tuổi)',
          sp: [{ img: L(IMG['phong-family']), ten: 'Family Suite view biển', sl: 3, dv: 'đêm', gia: 2450000 }],
        },
        anh: {
          img: L(IMG['ho-boi']),
          kh: 'Hồ bơi như hình này có mở buổi tối không em?',
          ai: 'Dạ hình anh gửi là **hồ bơi ngoài trời** của Biển Lam ạ, mở **6h–21h**, có **khu riêng cho bé** và cứu hộ trực cả ngày nha anh.',
        },
      },
      afterSale: {
        y1: 'AI gửi tiếp 5 dịch vụ đi kèm để bán thêm (upsell)',
        y2: 'Tiệc tất niên, voucher, ưu đãi phòng',
        loi: 'Cảm ơn anh Khoa đã đặt phòng tại Biển Lam 💜 Nhiều gia đình đặt thêm mấy dịch vụ này cho chuyến đi trọn vẹn ạ:',
        sp: [
          { img: L(IMG['giang-sinh']), ten: 'Tiệc tối Giáng sinh 24/12', gia: 1290000, nut: 'Đặt thêm' },
          { img: L(IMG['hai-san']), ten: 'Set hải sản tối 2 người', gia: 890000, nut: 'Đặt thêm' },
          { img: L(IMG['buffet-sang']), ten: 'Buffet sáng thêm khách', gia: 250000, nut: 'Đặt thêm' },
          { img: L(IMG['nha-hang']), ten: 'Bàn ăn view biển', gia: 1500000, nut: 'Đặt thêm' },
          { img: L(IMG['ho-boi']), ten: 'Cabana hồ bơi nửa ngày', gia: 600000, nut: 'Đặt thêm' },
        ],
        khach: 'Đặt thêm cho a tiệc tối Giáng sinh 24/12 nhé',
        pill: '🛍 Khách đặt thêm ngay: đơn tăng từ 7.350.000đ lên 8.640.000đ',
        gio: 'Khách vừa đặt phòng',
        fmm: {
          sep: '1 tuần sau khi trả phòng · tin Facebook FMM',
          chao: 'Chào anh Khoa 👋 Cuối năm nhà hàng Biển Lam nhận tiệc tất niên, gửi anh xem trước nha!',
          img: L(IMG['tiec']),
          nhan: 'ƯU ĐÃI TẤT NIÊN',
          ten: 'Tiệc tất niên công ty 2026',
          mo: 'Khách cũ giảm 15%, phòng riêng cho 30–100 khách.',
          nut: 'Xem thực đơn',
        },
        zbs: {
          ten: 'Tặng anh Khoa voucher 15%',
          mo: 'Cảm ơn gia đình anh đã nghỉ tại Khách Sạn Biển Lam. Gửi anh ưu đãi cho lần nghỉ tiếp theo:',
          dong: [['Mã voucher', '**BIENLAM15**'], ['Ưu đãi', 'Giảm 15% giá phòng'], ['Hạn dùng', '30/06/2027']],
          nut: 'Đặt phòng ngay',
        },
      },
      // Slide 3: khách sạn không giao hàng → đổi bước "Gửi vận chuyển" thành lên đơn đặt phòng
      // Slide 6: có lên đơn (đặt phòng) → giữ 6 tính năng, chỉ đổi chữ "vận chuyển"
      tinhNang: [
        ['AI chatbot chốt đơn tự động 100%', 'Tăng trung bình 62% tỷ lệ chốt đơn'],
        ['AI Agent tự lên đơn đặt phòng', 'Tiết kiệm hơn 90% thời gian xử lý đơn'],
        ['AI tự bám đuổi khách trong 7 ngày', 'Tăng thêm khoảng 35% tỷ lệ chốt đơn'],
        ['AI tự chăm sóc khách sau bán', 'Mời nhà hàng, dịch vụ, mời quay lại'],
        ['Bộ công cụ Remarketing FMM và ZBS', 'Khai thác hiệu quả dữ liệu khách hàng'],
        ['Tự gửi sự kiện mua hàng qua Meta CAPI', 'Hỗ trợ tối ưu quảng cáo Facebook'],
      ],

      bamDuoi: {
        cmpDung: ['Khách nhắn xong im → nhắc đúng hạng phòng khách xem (thẻ <b>#FamilySuite</b> từ quảng cáo)',
                  'Báo giá xong im → bám đuổi theo giá: ưu đãi đặt trong ngày, đón sân bay (thẻ <b>#HoiGia</b>)',
                  'Đúng nhu cầu, đúng lý do im → khách quay lại đặt phòng'],
        hoi: 'Phòng Family Suite giá bao nhiêu em?',
        traLoiThuong: 'Dạ 2.450.000đ/đêm ạ.',
        refImg: L(IMG['phong-family']), refTen: 'Family Suite view biển',
        vd1: {
          kh: 'Phòng gia đình này còn trống không em?',
          ai: 'Dạ còn ạ! Anh đi ngày nào, mấy người lớn, mấy bé để em giữ đúng phòng nha?',
          tag: '🏷 #FamilySuite', tagNote: 'thẻ từ quảng cáo · khách im 1 ngày',
          nhac: 'Anh ơi, em gửi anh <b>ảnh thật phòng Family Suite</b> view biển anh xem hôm qua, em <b>giữ tạm 1 phòng tầng cao</b> cho nhà mình nha 😊',
          dung: '🎯 Theo thẻ #FamilySuite: nhắc đúng hạng phòng khách xem',
          khach: 'Gửi anh xem với',
        },
        vd2: {
          kh: 'Ở 3 đêm thì bao nhiêu em?',
          ai: 'Dạ 3 đêm Family Suite là <b>7.350.000đ</b>, gồm buffet sáng ạ.',
          tag: '🏷 #HoiGia', tagNote: 'báo giá xong khách im 1 ngày',
          nhac: 'Anh ơi, phòng anh hỏi giá hôm qua, đặt trong hôm nay em <b>giảm 10%</b> và <b>đón sân bay miễn phí</b> ạ. Em giữ phòng cho anh nha?',
          dung: '🎯 Theo thẻ #HoiGia: bám đuổi theo giá, đúng lý do khách im',
          khach: 'Ok giữ cho anh',
        },
      },
      binhLuan: {
        post: 'Ưu đãi <b>Giáng sinh – Tết</b>: phòng view biển, buffet hải sản, nhận đặt tiệc tất niên 🎄',
        img: L(IMG['tiec']),
        kav: 'NL', kten: 'Ngô Lan', hoi: 'Tiệc tất niên công ty 40 người có phòng riêng không shop? Giá sao?',
        traLoi: 'Dạ chào chị Lan! Khách sạn vừa nhắn tin tư vấn chi tiết cho chị, chị xem tin nhắn nhé 💬',
        act2: 'Nhắn tin riêng tư vấn tiệc',
        nhan: 'Chào chị Lan! Nhà hàng tầng 2 có <b>phòng tiệc riêng 50 khách</b>, có sân khấu, âm thanh ạ. Set tất niên <b>từ 450.000đ/khách</b>. Chị dự kiến ngày nào để em giữ phòng tiệc nha!',
        sp: { ten: 'Set tiệc tất niên', gia: 'từ 450.000đ/khách', img: L(IMG['hai-san']) },
        khach: 'Tối 15/1 nha em',
      },
      duLieu: {
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: tiện nghi, chính sách trẻ em', 'Khách khiếu nại, đánh giá xấu'],
        hoi: 'Phòng có bồn tắm không em? Bé 10 tuổi miễn phí đúng không?',
        aiSai: 'Dạ có bồn tắm ạ, bé dưới 12 tuổi <b>miễn phí hết</b> anh 🥰',
        thucTe: '⚠ Thực tế: phòng chỉ có vòi sen, bé từ 7 tuổi phụ thu ăn sáng',
        gian: 'Nhận phòng mới biết bị tính tiền bé! Sao tư vấn sai vậy? 😠',
        cho: 'Dạ anh chờ em một chút để em kiểm tra chính xác chính sách cho mình nhé!',
        nv: 'Lễ tân Vy · người thật',
        nvTraLoi: 'Dạ Family Suite có vòi sen, không có bồn tắm ạ. Bé từ 7 tuổi phụ thu ăn sáng 150.000đ/đêm, em gửi anh chính sách chi tiết nhé!',
      },
    },
  };
})();
