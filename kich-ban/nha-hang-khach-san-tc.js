/* Kịch bản: NHÀ HÀNG, KHÁCH SẠN (khách sạn biển có nhà hàng: đặt phòng, đặt bàn, tiệc) — BẢN TRÌNH CHIẾU,
   nhóm THƯƠNG MẠI ĐIỆN TỬ. Khung ngang 16:9.
   Demo chat theo chuẩn thương mại điện tử (TRINH-CHIEU.md mục 3), một mạch; "lên đơn" ở đây là đơn đặt phòng:
     anh Khoa gửi ảnh phòng hỏi dồn (ca khó: 2 người lớn 2 bé 6 và 10 tuổi, bé có tính tiền không, đón sân bay,
     hạ cánh 11:40 có nhận phòng sớm được không) → AI tư vấn đúng hạng phòng, chính sách trẻ em, đưa đón, báo giá
     → anh im → bám đuổi 2 tin theo thẻ #FamilySuite, #HoiGia (ảnh thật phòng, giữ phòng view biển; ưu đãi đặt trong ngày)
     → anh quay lại chốt → lên đơn đặt phòng tự động, xếp xe đón → chăm sóc: nhắc trước ngày đến, tối Giáng sinh
     mời buffet ở nhà hàng tầng thượng, khách đặt bàn.
   Không có tin cập nhật vận chuyển. Không có bước kết thúc: bấm → là sang slide kế.
   Slide 3 và slide 6 đổi chữ "vận chuyển" thành đặt phòng qua deck.quyTrinh, deck.tinhNang.
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
        kws: ['Trả lời ngay tức thì, 24/7', 'Tư vấn đúng hạng phòng theo số người', 'Nói rõ chính sách trẻ em, phụ thu', 'Giải đáp: đón sân bay, nhận phòng sớm', 'Báo giá rõ, chủ động mời đặt'] },
      { title: 'AI tự động bám đuổi khách hàng trong 7 ngày', desc: 'Tăng thêm khoảng 35% tỷ lệ chốt đơn.',
        kws: ['~65% khách nhắn tin rồi im lặng', 'Tự gắn thẻ hạng phòng khách xem, lý do im', 'Gửi ảnh thật phòng, giữ phòng view biển', 'Báo giá xong im → ưu đãi đặt trong ngày'] },
      { title: 'AI Agent tự động lên đơn đặt phòng', desc: 'Tiết kiệm hơn 90% thời gian xử lý đơn.',
        kws: ['Thu đủ tên, SĐT, giờ hạ cánh', 'Gửi tin xác nhận đặt phòng đầy đủ', 'Tự tạo đơn, xếp xe đón sân bay'] },
      { title: 'AI tự động chăm sóc khách trước và trong lưu trú', desc: 'Tăng doanh thu từ mỗi khách.',
        kws: ['Nhắc trước ngày đến: xe đón, thời tiết', 'Mời nhà hàng, dịch vụ đúng dịp', 'Khách đặt thêm bàn, tăng doanh thu'] },
    ],

    steps: [
      { intro: true, hold: 1800 },

      /* ---- 1. Tư vấn: 2 người lớn 2 bé, chính sách trẻ em, đón sân bay, nhận phòng sớm ---- */
      { feature: 1 },
      { sep: 'Khách nhắn tin từ quảng cáo Facebook', style: 'time', hold: 800 },
      { img: 'phong-family', hold: 1500 },
      { kh: 'Phòng này còn ko em? Nhà a 2 người lớn 2 bé (6t và 10t) đi Đà Nẵng 3 đêm 24-27/12. Bé có tính tiền ko, có đón sân bay ko, a hạ cánh 11h40 nhận phòng sớm đc ko' },
      { ai: 'Dạ còn phòng ạ anh! Em kiểm tra cho gia đình mình ngay 🌊', fast: true, meta: '⚡ Preny AI trả lời sau 2 giây', kw: 0 },
      { ai: 'Anh gửi là phòng **Family Suite view biển** (45m², 1 giường đôi + 1 giường đơn), ở vừa 2 người lớn 2 bé ạ. Bé 6 tuổi **miễn phí**, bé 10 tuổi **phụ thu ăn sáng 150.000đ/đêm**, không cần kê thêm giường.', kw: [1, 2] },
      { ai: 'Đặt từ 3 đêm khách sạn **đón sân bay miễn phí** ạ. Nhận phòng chuẩn 14h, anh tới khoảng 12h15 em **ưu tiên nhận phòng sớm** nếu phòng trống; chưa có thì gia đình mình gửi hành lý, ăn trưa hoặc ra hồ bơi trước nha.', kw: 3 },
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
      { ai: 'Dạ anh cho em xin **họ tên, SĐT** và **giờ hạ cánh** để em xếp xe đón nha.', kw: 0 },
      { kh: 'Trần Đăng Khoa – 0905 678 123\nHạ cánh 11:40 ngày 24/12, sân bay Đà Nẵng' },
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

      /* ---- 4. Chăm sóc trước và trong lưu trú, mời nhà hàng ---- */
      { feature: 4 },
      { sep: '— 1 ngày trước khi đến —' },
      { ai: 'Anh Khoa ơi, mai xe khách sạn đón gia đình mình ở **sảnh ga quốc nội lúc 11:40**, tài xế cầm bảng tên anh nha. Đà Nẵng mai khoảng 24°C, anh nhớ mang áo khoác mỏng cho bé ạ 🌊', meta: '💜 Tự động · Chăm sóc khách', kw: 0 },
      { kh: 'Ok em, cảm ơn em nhé' },
      { sep: '— Tối 24/12, khách đang lưu trú —' },
      { ai: 'Tối nay nhà hàng tầng thượng có **buffet hải sản Giáng sinh**, khách đang ở khách sạn được **giảm 15%** ạ:', kw: 1 },
      { catalog: [
          { name: 'Buffet hải sản Giáng sinh', sub: '19:00 · tầng thượng', price: '552.000đ', old: '650.000đ', tag: 'Tối nay', art: 'hai-san' },
          { name: 'Bàn tiệc Giáng sinh gia đình', sub: '4 người · có bánh cho bé', price: '2.380.000đ', old: '2.800.000đ', tag: 'Gia đình', art: 'giang-sinh' },
          { name: 'Set tối tầng thượng', sub: '2 người lớn', price: '1.190.000đ', old: '1.400.000đ', tag: 'Lãng mạn', art: 'nha-hang' },
        ], hold: 4000 },
      { kh: 'Giữ anh bàn buffet 4 người lúc 19h nha em', kw: 2, hold: 1500 },
      // Không có { end: true }: bấm → thêm một lần là sang thẳng slide kế.
    ],

    /* ===== Nội dung slide trình chiếu (trinh-chieu.html). Chưa có số liệu thống kê thật → 2 slide thống kê tự ẩn. ===== */
    deck: {
      // Slide 3: khách sạn không giao hàng → đổi bước "Gửi vận chuyển" thành lên đơn đặt phòng
      quyTrinh: {
        m1: '<span class="mb">Còn phòng không ạ?</span><span class="mb ok">Đặt phòng ngay</span>',
        nc2: '<i data-i="calendar"></i><em>2</em>',
        t2: 'Lên đơn đặt phòng tự động',
        d2: 'Tự tạo đơn đặt phòng, đặt bàn, xếp xe đón, đỡ nhập tay.',
        m2: '<span class="ck"><i data-i="check"></i>Tạo đơn</span><span class="ck"><i data-i="check"></i>Xếp xe đón</span>',
        d6: 'Nhắc trước ngày đến, mời nhà hàng, dịch vụ, mời quay lại.',
        banner: '<i data-i="layers"></i>Từ chốt đơn, đặt phòng, tối ưu quảng cáo đến <b>chăm sóc và bán lại</b>',
      },
      // Slide 6: có lên đơn (đặt phòng) → giữ 6 tính năng, chỉ đổi chữ "vận chuyển"
      tinhNang: [
        ['AI chatbot chốt đơn tự động 100%', 'Tăng trung bình 62% tỷ lệ chốt đơn'],
        ['AI Agent tự lên đơn đặt phòng', 'Tiết kiệm hơn 90% thời gian xử lý đơn'],
        ['AI tự bám đuổi khách trong 7 ngày', 'Tăng thêm khoảng 35% tỷ lệ chốt đơn'],
        ['AI tự chăm sóc khách lưu trú', 'Mời nhà hàng, dịch vụ, mời quay lại'],
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
