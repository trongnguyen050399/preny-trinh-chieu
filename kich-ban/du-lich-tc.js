/* Kịch bản: DU LỊCH, DU THUYỀN (du thuyền nghỉ đêm vịnh Hạ Long 2 ngày 1 đêm; cabin Deluxe, Premium, Royal) — BẢN TRÌNH CHIẾU,
   nhóm THƯƠNG MẠI ĐIỆN TỬ. Khung ngang 16:9. Làm cho khách kiểu Arcadia Luxury Cruise (cảng Tuần Châu, Hạ Long; hạ thủy 5/10/2026;
   12 cabin Deluxe, 4 Premium, 2 Royal).
   Demo chat theo chuẩn thương mại điện tử (TRINH-CHIEU.md mục 3), một mạch; "lên đơn" ở đây là đơn đặt chỗ:
     anh Tuấn gửi ảnh du thuyền hỏi giá, đi kỷ niệm 10 năm cưới → AI chủ động hỏi lịch trình: ngày đi, đi từ đâu, có cần xe đón
     → tư vấn cabin Premium ban công, bồn tắm nhìn ra vịnh, giá đã gồm gì, quà kỷ niệm → anh im → bám đuổi 2 tin theo thẻ
     #CabinPremium, #HoiGia (ảnh thật cabin, giữ cabin; ưu đãi đặt trong ngày) → anh quay lại chốt → lên đơn đặt chỗ tự động
     (AI nhớ sẵn nơi đón), xếp xe đón → chăm sóc sau chuyến đi, mời hành trình mới, khách đặt tiếp cho cả nhà.
   Không có tin báo trước ngày khởi hành (Preny chưa có tính năng này). Không có tin cập nhật vận chuyển.
   Không có bước kết thúc: bấm → là sang slide kế. Slide 3 và slide 6 đổi chữ "vận chuyển" thành đặt chỗ qua deck.quyTrinh, deck.tinhNang.
   Tên du thuyền, hành trình, giá, chính sách, tên khách, SĐT: dữ liệu minh họa. Ảnh: Unsplash (ảnh thật, không phải tàu của khách). */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'du-thuyen': '1680357981460-f00398bafd42',
    'du-thuyen-2': '1730270342669-d0e175b36293',
    'cabin': '1785495640197-f3b4a86c018a',
    'cabin-2': '1580789724132-7f75abddbe0f',
    'bon-tam': '1781456507603-39653d5f434a',
    'kayak-hang': '1697850084120-4896a446a04d',
    'hoang-hon': '1774281018832-c6df6eceec70',
    'vinh': '1764645859246-8c6db98330a7',
    'tour-ngay': '1772867342647-6e6d87a0b014',
    'tau-tiec': '1732272933438-e04c490a293d',
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    shop: { name: 'Du Thuyền Hải Âu', initials: 'HA' },
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
        kws: ['Trả lời ngay tức thì, 24/7', 'Chủ động hỏi lịch trình: ngày đi, nơi đón', 'Tư vấn đúng hạng cabin theo dịp', 'Nói rõ hành trình, giá đã gồm gì', 'Gợi ý quà kỷ niệm, chủ động mời đặt'] },
      { title: 'AI tự động bám đuổi khách hàng trong 7 ngày', desc: 'Tăng thêm khoảng 35% tỷ lệ chốt đơn.',
        kws: ['~65% khách nhắn tin rồi im lặng', 'Tự gắn thẻ hạng cabin khách xem, lý do im', 'Gửi ảnh thật cabin, giữ cabin cho khách', 'Báo giá xong im → ưu đãi đặt trong ngày'] },
      { title: 'AI Agent tự động lên đơn đặt tour', desc: 'Tiết kiệm hơn 90% thời gian xử lý đơn.',
        kws: ['Thu tên, SĐT, nhớ sẵn lịch trình khách', 'Gửi tin xác nhận đặt chỗ đầy đủ', 'Tự tạo đơn, xếp xe đón'] },
      { title: 'AI tự động chăm sóc khách hàng sau bán', desc: 'Tăng doanh thu từ khách hàng cũ.',
        kws: ['Hỏi thăm sau chuyến đi', 'Mời hành trình mới, ưu đãi khách cũ', 'Khách đặt lại, rủ thêm người đi'] },
    ],

    steps: [
      { intro: true, hold: 1800 },

      /* ---- 1. Tư vấn: AI hỏi lịch trình trước, rồi tư vấn đúng cabin cho dịp kỷ niệm ---- */
      { feature: 1 },
      { sep: 'Khách nhắn tin từ quảng cáo Facebook', style: 'time', hold: 800 },
      { img: 'du-thuyen', hold: 1500 },
      { kh: 'Du thuyền này đi 2 ngày 1 đêm giá sao em? Vợ chồng a đi kỷ niệm 10 năm cưới' },
      { ai: 'Dạ em chúc mừng anh chị ạ! 🎉 Em tư vấn ngay nha', fast: true, meta: '⚡ Preny AI trả lời sau 2 giây', kw: 0 },
      { ai: 'Anh cho em hỏi **lịch trình** để em giữ đúng cabin nha: anh chị định đi **ngày nào**, xuất phát từ **Hà Nội** hay đã ở Hạ Long, và có cần **xe đón** không ạ?', kw: 1 },
      { kh: 'Thứ 7 ngày 5/12 em, đi từ Hà Nội, cần xe đón ở phố cổ. Phòng nào view đẹp, có bồn tắm ko?' },
      { ai: 'Dạ dịp kỷ niệm em gợi ý **cabin Premium**: có **ban công riêng, bồn tắm nhìn ra vịnh** ạ. Giá **4.900.000đ/khách**, đã gồm **xe limousine đón tại phố cổ**, 3 bữa ăn, vé tham quan.', kw: 2 },
      { ai: 'Tàu xuất phát từ **cảng Tuần Châu** khoảng 12h, đi **hang Sửng Sốt, đảo Ti Tốp**, chèo kayak trong hang. Dịp kỷ niệm bên em **trang trí cabin, tặng bánh kem và rượu vang** ạ. Thứ 7 5/12 chỉ còn **2 cabin Premium**, anh đặt để em giữ cabin luôn nha? 😊', kw: [3, 4] },
      { kh: 'Để a hỏi vợ đã' },

      /* ---- 2. Khách im → bám đuổi 2 tin theo thẻ ---- */
      { feature: 2 },
      { sep: 'Khách chưa phản hồi… · AI gắn thẻ #CabinPremium #HoiGia', style: 'silent', kw: [0, 1], hold: 1800 },
      { sep: '— 1 ngày sau —' },
      { ai: 'Anh Tuấn ơi, em gửi anh **ảnh thật cabin Premium** và hành trình trên vịnh để anh cho chị xem cùng nha. Em đang **giữ tạm 1 cabin** ngày 5/12 cho anh chị ạ 😊', meta: '🔁 Tự động · Bám đuổi theo thẻ #CabinPremium', kw: 2 },
      { aiImgs: [{ img: 'cabin', label: 'Cabin Premium' }, { img: 'bon-tam', label: 'Bồn tắm nhìn ra vịnh' },
                 { img: 'kayak-hang', label: 'Chèo kayak trong hang' }, { img: 'hoang-hon', label: 'Ngắm hoàng hôn trên boong' }], hold: 3200 },
      { sep: '— 2 ngày sau —' },
      { ai: 'Cabin anh hỏi giá, đặt trong hôm nay em **giảm 10%**, còn **8.820.000đ cho 2 khách**, tặng thêm **bữa tối lãng mạn trên boong** ạ 🎁', meta: '🔁 Tự động · Bám đuổi theo thẻ #HoiGia', kw: 3 },
      { kh: 'Ok chốt cho a chị cabin đó nhé em' },

      /* ---- 3. Lên đơn đặt chỗ tự động, xếp xe đón (không có tin cập nhật vận chuyển) ---- */
      { feature: 3 },
      { ai: 'Dạ anh cho em xin **họ tên, SĐT** và **địa chỉ ở phố cổ** để xe limousine đón anh chị sáng 5/12 nha.', kw: 0 },
      { kh: 'Phạm Minh Tuấn – 0912 888 246\n18 Hàng Bè, P. Hoàn Kiếm, Hà Nội' },
      { card: {
          tag: '✓ Tin xác nhận đặt chỗ',
          intro: 'Dạ anh kiểm tra lại đơn đặt chỗ giúp em nhé:',
          lines: ['Du thuyền 2 ngày 1 đêm · Thứ Bảy 5/12 – 6/12', 'Cabin Premium ban công · 2 khách · trang trí kỷ niệm', 'Xe limousine đón: 18 Hàng Bè, P. Hoàn Kiếm', 'Tổng cộng: **8.820.000đ** (đã giảm 10%)', 'Người đặt: Phạm Minh Tuấn · 0912 888 246'],
          button: 'Quản lý đặt chỗ',
        }, kw: 1, hold: 4500 },
      { kh: 'Ok em' },
      { card: {
          tag: '✓ Đã tạo đơn đặt chỗ', ok: true,
          lines: ['Mã đặt chỗ: **#HA51205**', 'Khởi hành: **Thứ Bảy, 5/12**', 'Đã xếp xe limousine đón tại phố cổ'],
        }, kw: 2, hold: 3500 },

      /* ---- 4. Chăm sóc sau bán (sau chuyến đi). Không có tin báo trước ngày khởi hành. ---- */
      { feature: 4 },
      { sep: '— Sau chuyến đi —' },
      { ai: 'Anh Tuấn ơi, chuyến kỷ niệm của anh chị trên vịnh có trọn vẹn không ạ? Có gì chưa hài lòng anh cứ nhắn em nha 💜', meta: '💜 Tự động · Chăm sóc sau bán', kw: 0 },
      { kh: 'Tuyệt lắm em, vợ a thích bữa tối trên boong 👍' },
      { ai: 'Dạ vui quá ạ! Khách cũ đi lại hoặc rủ thêm người được **giảm 15%** các hành trình này ạ:', kw: 1 },
      { catalog: [
          { name: 'Du thuyền 3 ngày 2 đêm', sub: 'Giá mỗi khách · cabin Premium', price: '7.565.000đ', old: '8.900.000đ', tag: 'Dịp Tết', art: 'vinh' },
          { name: 'Tour trong ngày trên vịnh', sub: 'Giá mỗi khách · ăn trưa trên tàu', price: '1.445.000đ', old: '1.700.000đ', tag: 'Bán chạy', art: 'tour-ngay' },
          { name: 'Tiệc tất niên trên du thuyền', sub: 'Giá mỗi khách · đoàn 30–60 người', price: '1.275.000đ', old: '1.500.000đ', tag: 'Công ty', art: 'tau-tiec' },
        ], hold: 4000 },
      { kh: 'Tết a đưa cả nhà 6 người đi 3 ngày 2 đêm nhé em', kw: 2, hold: 1500 },
      // Không có { end: true }: bấm → thêm một lần là sang thẳng slide kế.
    ],

    /* ===== Nội dung slide trình chiếu (trinh-chieu.html). Chưa có số liệu thống kê thật → 2 slide thống kê tự ẩn. ===== */
    deck: {
      // Slide 3: du lịch không giao hàng → đổi bước "Gửi vận chuyển" thành lên đơn đặt chỗ
      quyTrinh: {
        m1: '<span class="mb">Còn cabin không ạ?</span><span class="mb ok">Đặt chỗ ngay</span>',
        nc2: '<i data-i="calendar"></i><em>2</em>',
        t2: 'Lên đơn đặt chỗ tự động',
        d2: 'Tự tạo đơn đặt tour, xếp xe đón, đỡ nhập tay.',
        m2: '<span class="ck"><i data-i="check"></i>Tạo đơn</span><span class="ck"><i data-i="check"></i>Xếp xe đón</span>',
        d6: 'Hỏi thăm sau chuyến đi, mời hành trình mới, rủ thêm khách.',
        banner: '<i data-i="layers"></i>Từ chốt đơn, đặt chỗ, tối ưu quảng cáo đến <b>chăm sóc và bán lại</b>',
      },
      // Slide 6: có lên đơn (đặt chỗ) → giữ 6 tính năng, chỉ đổi chữ "vận chuyển"
      tinhNang: [
        ['AI chatbot chốt đơn tự động 100%', 'Tăng trung bình 62% tỷ lệ chốt đơn'],
        ['AI Agent tự lên đơn đặt tour', 'Tiết kiệm hơn 90% thời gian xử lý đơn'],
        ['AI tự bám đuổi khách trong 7 ngày', 'Tăng thêm khoảng 35% tỷ lệ chốt đơn'],
        ['AI tự chăm sóc khách sau bán', 'Mời hành trình mới, khách đặt lại'],
        ['Bộ công cụ Remarketing FMM và ZBS', 'Khai thác hiệu quả dữ liệu khách hàng'],
        ['Tự gửi sự kiện mua hàng qua Meta CAPI', 'Hỗ trợ tối ưu quảng cáo Facebook'],
      ],

      bamDuoi: {
        cmpDung: ['Khách nhắn xong im → nhắc đúng hạng cabin khách xem (thẻ <b>#CabinPremium</b> từ quảng cáo)',
                  'Báo giá xong im → bám đuổi theo giá: ưu đãi đặt trong ngày, quà tặng (thẻ <b>#HoiGia</b>)',
                  'Đúng nhu cầu, đúng lý do im → khách quay lại đặt tour'],
        hoi: 'Cabin Premium giá bao nhiêu em?',
        traLoiThuong: 'Dạ 4.900.000đ/khách ạ.',
        refImg: L(IMG['cabin']), refTen: 'Cabin Premium ban công',
        vd1: {
          kh: 'Du thuyền này còn cabin cuối tuần không em?',
          ai: 'Dạ còn ạ! Anh chị đi ngày nào, mấy người, đón ở Hà Nội hay Hạ Long để em giữ đúng cabin nha?',
          tag: '🏷 #CabinPremium', tagNote: 'thẻ từ quảng cáo · khách im 1 ngày',
          nhac: 'Anh ơi, em gửi anh <b>ảnh thật cabin Premium</b> có ban công nhìn ra vịnh anh xem hôm qua, em <b>giữ tạm 1 cabin</b> cuối tuần này cho anh nha 😊',
          dung: '🎯 Theo thẻ #CabinPremium: nhắc đúng hạng cabin khách xem',
          khach: 'Gửi anh xem với',
        },
        vd2: {
          kh: '2 người đi 2 ngày 1 đêm bao nhiêu em?',
          ai: 'Dạ cabin Premium 2 khách là <b>9.800.000đ</b>, gồm xe đón và 3 bữa ăn ạ.',
          tag: '🏷 #HoiGia', tagNote: 'báo giá xong khách im 1 ngày',
          nhac: 'Anh ơi, cabin anh hỏi giá hôm qua, đặt trong hôm nay em <b>giảm 10%</b> và <b>tặng bữa tối trên boong</b> ạ. Em giữ cabin cho anh nha?',
          dung: '🎯 Theo thẻ #HoiGia: bám đuổi theo giá, đúng lý do khách im',
          khach: 'Ok giữ cho anh',
        },
      },
      binhLuan: {
        post: 'Du thuyền <b>mới hạ thủy</b>: 2 ngày 1 đêm trên vịnh Hạ Long, xe limousine đón tận nơi 🛳️',
        img: L(IMG['du-thuyen-2']),
        kav: 'HT', kten: 'Hoàng Thảo', hoi: 'Đi 2 người lớn 1 bé 4 tuổi tính sao shop? Bé chèo kayak được không?',
        traLoi: 'Dạ chào chị Thảo! Du thuyền vừa nhắn tin tư vấn chi tiết cho chị, chị xem tin nhắn nhé 💬',
        act2: 'Nhắn tin riêng tư vấn hành trình',
        nhan: 'Chào chị Thảo! Bé 4 tuổi <b>miễn phí</b>, ngủ chung giường bố mẹ ạ. Bé chèo kayak cùng bố mẹ, có <b>áo phao trẻ em</b>. Chị định đi ngày nào để em giữ cabin nha!',
        sp: { ten: 'Cabin Deluxe 2 ngày 1 đêm', gia: '3.900.000đ/khách', img: L(IMG['cabin-2']) },
        khach: 'Cuối tháng 12 em ơi',
      },
      duLieu: {
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: lịch trình, chính sách hoàn hủy', 'Khách khiếu nại, đánh giá xấu'],
        hoi: 'Nếu mình hủy chuyến thì được hoàn 100% tiền đúng không em?',
        aiSai: 'Dạ đúng ạ! Hủy vì lý do gì cũng <b>hoàn 100%</b> anh 🥰',
        thucTe: '⚠ Thực tế: hoàn 100% khi cảng vụ cấm tàu, khách tự hủy thì tính phí',
        gian: 'Tôi hủy trước 5 ngày mà vẫn bị trừ tiền! Sao bảo hoàn hết? 😠',
        cho: 'Dạ anh chờ em một chút để em kiểm tra chính xác chính sách hoàn hủy cho mình nhé!',
        nv: 'Điều hành Linh · người thật',
        nvTraLoi: 'Dạ cảng vụ cấm tàu vì thời tiết thì bên em hoàn 100% hoặc đổi ngày miễn phí ạ. Khách tự hủy tính theo số ngày báo trước, em gửi anh chính sách chi tiết nhé!',
      },
    },
  };
})();
