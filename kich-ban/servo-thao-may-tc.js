/* Kịch bản: SERVO THÁO MÁY (driver, motor servo, thiết bị tự động hóa đã qua sử dụng) — BẢN TRÌNH CHIẾU, nhóm THƯƠNG MẠI ĐIỆN TỬ.
   Khung ngang 16:9. Demo chat theo chuẩn thương mại điện tử mới (TRINH-CHIEU.md mục 3), một mạch:
     tư vấn (ca khó: driver khác đời) → khách im → bám đuổi 2 tin theo thẻ → khách quay lại chốt → lên đơn tự động
     → chăm sóc sau bán. Không có tin tự động cập nhật vận chuyển. Không có bước kết thúc: bấm → là sang slide kế.
   Tên shop, giá, chính sách, tên khách, SĐT: dữ liệu minh họa. Mã motor Panasonic, Yaskawa là mã thật để tư vấn cho đúng nghề.
   Ảnh: Unsplash (ảnh thật, không phải hàng của shop). */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'tu-driver': '1780034766228-3fd70d9463c3',   // tủ điện có hàng driver
    'lo-servo': '1618853471839-75ccc8d75e2d',    // lô motor
    'tu-dien': '1780034766295-43db0f2a0fb7',
    'tho-lap': '1649038780045-235e4b6e40b4',
    'may-cnc': '1717386255773-a456c611dc4e',
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    shop: { name: 'Kho Servo Bắc Ninh', initials: 'KS' },
    headline: { pre: 'Hệ thống AI chatbot giúp tăng trung bình', em: '62% tỷ lệ chốt đơn' },
    sub: 'Tự động hóa toàn bộ quy trình chốt đơn, bám đuổi, lên đơn và chăm sóc khách để tăng hiệu quả bán hàng.',
    cta: 'Dùng thử miễn phí tại **preny.ai**\nHotline **0389 647 778**',
    speed: 1.13,
    timing: { read0: 1000, readPerChar: 28, readMax: 4500, type0: 800, typePerChar: 3, typeMax: 1500, fastType: 500,
              featureHold: 1400, sepHold: 1100, cardHold: 4000, introCard: 250 },

    images: Object.fromEntries(Object.entries(IMG).map(([k, id]) => [k, U(id)])),

    // Cột trái demo: đúng 4 tính năng được diễn, theo thứ tự diễn
    features: [
      { title: 'AI chatbot tư vấn, chốt đơn 24/7', desc: 'Tăng trung bình 62% tỷ lệ chốt đơn.',
        kws: ['Trả lời ngay tức thì, 24/7', 'Hỏi đúng mã motor trước khi báo hàng', 'Đọc mã ra đời, công suất, điện áp', 'Giải thích vì sao lắp khác đời không chạy', 'Báo giá, bảo hành, cam kết test'] },
      { title: 'AI tự động bám đuổi khách hàng trong 7 ngày', desc: 'Tăng thêm khoảng 35% tỷ lệ chốt đơn.',
        kws: ['~65% khách nhắn tin rồi im lặng', 'Tự gắn thẻ mã hàng khách hỏi, lý do im', 'Gửi ảnh test đúng mã khách hỏi', 'Báo giá xong im → ưu đãi giá đúng lúc'] },
      { title: 'AI Agent tự động lên đơn và gửi sang đơn vị vận chuyển', desc: 'Tiết kiệm hơn 90% thời gian xử lý đơn.',
        kws: ['Thu đủ tên công ty, SĐT, địa chỉ, VAT', 'Gửi tin xác nhận đơn đầy đủ', 'Tự tạo đơn, gửi giao nhanh'] },
      { title: 'AI tự động chăm sóc khách hàng sau bán', desc: 'Tăng doanh thu từ khách hàng cũ.',
        kws: ['Hỏi thăm sau khi lắp lên máy', 'Nhắc cài thông số, gửi hướng dẫn', 'Gợi ý thiết bị xưởng đang cần'] },
    ],

    steps: [
      { intro: true, hold: 1800 },

      /* ---- 1. Tư vấn: hỏi đúng mã, ca khó driver khác đời ---- */
      { feature: 1 },
      { sep: 'Khách nhắn tin từ quảng cáo Facebook', style: 'time', hold: 800 },
      { img: 'tu-driver', hold: 1500 },
      { kh: 'Shop ơi driver servo máy cắt xưởng a ở KCN Quế Võ báo lỗi, chạy là nhảy alarm. Có driver tháo máy thay k, giá sao?' },
      { ai: 'Dạ có ạ anh! Bên em sẵn nhiều driver servo tháo máy Nhật 😊', fast: true, meta: '⚡ Preny AI trả lời sau 2 giây', kw: 0 },
      { ai: 'Để lấy đúng loại, anh đọc giúp em **mã trên tem motor** nha. Driver phải **cùng đời, cùng công suất** với motor thì mới chạy ạ.', kw: 1 },
      { kh: 'Tem ghi MSME042G1U. Bên kia báo a con driver A6 rẻ hơn, lắp thay được k?' },
      { ai: 'Dạ mã **MSME042G1U** là motor **Panasonic MINAS A5, 400W, 200V** ạ.', kw: 2 },
      { ai: 'Driver **A6 khác chuẩn encoder** với motor A5, lắp vào sẽ **báo lỗi encoder, máy không chạy** anh nhé. Anh lấy đúng **driver A5 400W** là cắm lại cáp cũ chạy luôn, không phải đổi motor ạ.', kw: 3 },
      { ai: 'Driver A5 400W tháo máy Nhật bên em **2.400.000đ**, đã **test chạy có tải**, **bảo hành 3 tháng, lỗi 1 đổi 1** ạ.', kw: 4 },
      { kh: 'Để a báo sếp duyệt đã' },

      /* ---- 2. Khách im → bám đuổi 2 tin theo thẻ ---- */
      { feature: 2 },
      { sep: 'Khách chưa phản hồi… · AI gắn thẻ #ServoA5_400W #HoiGia', style: 'silent', kw: [0, 1], hold: 1800 },
      { sep: '— 1 ngày sau —' },
      { ai: 'Anh Hùng ơi, em vừa test lại đúng **driver A5 400W** anh hỏi hôm qua: chạy êm, **không báo lỗi**. Em gửi anh ảnh để anh báo sếp nha 😊', meta: '🔁 Tự động · Bám đuổi theo thẻ #ServoA5_400W', kw: 2 },
      { aiImgs: [{ img: 'tu-dien', label: 'Test trên tủ điện' }, { img: 'lo-servo', label: 'Kho hàng tháo máy' },
                 { img: 'tho-lap', label: 'Kiểm tra trước khi gửi' }, { img: 'may-cnc', label: 'Chạy thử trên máy' }], hold: 3200 },
      { sep: '— 2 ngày sau —' },
      { ai: 'Driver A5 400W anh hỏi giá chỉ còn **2 con** ạ. Anh chốt hôm nay em để **2.200.000đ + tặng cáp encoder dự phòng**, giao nhanh trong ngày tới **KCN Quế Võ** luôn ạ 🎁', meta: '🔁 Tự động · Bám đuổi theo thẻ #HoiGia', kw: 3 },
      { kh: 'Sếp duyệt rồi, chốt a 1 con. Máy đang dừng, giao sớm giúp a nhé' },

      /* ---- 3. Lên đơn tự động (không có tin cập nhật vận chuyển) ---- */
      { feature: 3 },
      { ai: 'Dạ anh cho em xin **tên công ty, SĐT người nhận và địa chỉ xưởng** nha. Anh có cần **xuất hóa đơn VAT** không ạ?', kw: 0 },
      { kh: 'Cty TNHH Bao Bì Minh Phát – a Hùng 0987 654 321\nLô C5, KCN Quế Võ, Bắc Ninh. Có xuất VAT nhé' },
      { card: {
          tag: '✓ Tin xác nhận đơn',
          intro: 'Dạ anh kiểm tra lại đơn giúp em nhé:',
          lines: ['1 Driver Panasonic MINAS A5 400W (tháo máy, đã test)', 'Tặng: 1 cáp encoder dự phòng', 'Tổng cộng: **2.200.000đ** · có xuất hóa đơn VAT', 'Người nhận: anh Hùng · 0987 654 321', 'Giao tới: Lô C5, KCN Quế Võ, Bắc Ninh'],
          button: 'Quản lý đơn hàng',
        }, kw: 1, hold: 4500 },
      { kh: 'Ok em' },
      { card: {
          tag: '✓ Đã tạo đơn & gửi giao nhanh', ok: true,
          lines: ['Mã đơn: **#KS10842**', 'Mã vận đơn: **GN5521037**', 'Giao nhanh: **trong chiều nay**'],
        }, kw: 2, hold: 3500 },

      /* ---- 4. Chăm sóc sau bán ---- */
      { feature: 4 },
      { sep: '— 2 ngày sau —' },
      { ai: 'Anh Hùng ơi, driver lắp lên máy cắt chạy ổn chưa ạ? Anh nhớ **cài lại thông số (Pr) theo máy cũ**, cần file hướng dẫn em gửi ngay nha 💙', meta: '💙 Tự động · Chăm sóc sau bán', kw: [0, 1] },
      { kh: 'Chạy ngon rồi em. Xưởng đang cần thêm nguồn 24V với PLC' },
      { ai: 'Dạ bên em có sẵn **nguồn tổ ong 24V** và **PLC tháo máy** đã test, khách cũ **giảm 5%** ạ. Em gửi anh báo giá ngay nha 😊', kw: 2, hold: 1500 },
      // Không có { end: true }: bấm → thêm một lần là sang thẳng slide kế.
    ],

    /* ===== Nội dung slide trình chiếu (trinh-chieu.html). Chưa có số liệu thống kê thật → 2 slide thống kê tự ẩn. ===== */
    deck: {
      bamDuoi: {
        cmpDung: ['Khách nhắn xong im → nhắc đúng mã hàng khách hỏi (thẻ <b>#ServoA5_400W</b> từ quảng cáo)',
                  'Báo giá xong im → bám đuổi theo giá: ưu đãi, quà tặng (thẻ <b>#HoiGia</b>)',
                  'Đúng nhu cầu, đúng lý do im → khách quay lại mua'],
        hoi: 'Driver servo 400W giá sao shop?',
        traLoiThuong: 'Dạ giá 2.400.000đ ạ.',
        refImg: L(IMG['lo-servo']), refTen: 'Servo Panasonic A5 400W',
        vd1: {
          kh: 'Shop có driver servo Panasonic A5 không?',
          ai: 'Dạ có ạ anh! Anh đọc giúp em mã trên tem motor để em lấy đúng công suất nha?',
          tag: '🏷 #ServoA5_400W', tagNote: 'thẻ từ quảng cáo · khách im 1 ngày',
          nhac: 'Anh ơi, <b>driver Panasonic A5 400W</b> anh hỏi hôm qua em vừa <b>test chạy có tải</b>, không báo lỗi. Anh gửi em mã motor để em giữ đúng con cho anh nha 😊',
          dung: '🎯 Theo thẻ #ServoA5_400W: nhắc đúng mã hàng khách hỏi',
          khach: 'Motor MSME042G1U em ơi',
        },
        vd2: {
          kh: 'Driver A5 400W bao nhiêu shop?',
          ai: 'Dạ driver <b>Panasonic A5 400W</b> tháo máy giá <b>2.400.000đ</b>, bảo hành 3 tháng ạ.',
          tag: '🏷 #HoiGia', tagNote: 'báo giá xong khách im 1 ngày',
          nhac: 'Anh ơi, driver A5 400W anh hỏi giá hôm qua hôm nay em để <b>2.200.000đ + tặng cáp encoder</b>, chỉ còn 2 con ạ. Em giữ cho anh nha?',
          dung: '🎯 Theo thẻ #HoiGia: bám đuổi theo giá, đúng lý do khách im',
          khach: 'Ok giữ a 1 con',
        },
      },
      binhLuan: {
        post: 'Driver, motor servo <b>tháo máy Nhật</b> đủ đời A4, A5, A6 · test chạy trước khi gửi, bảo hành 3 tháng ⚙️',
        img: L(IMG['lo-servo']),
        kav: 'TQ', kten: 'Trần Quang', hoi: 'Có driver Yaskawa 750W không shop, giao Hải Phòng được không?',
        traLoi: 'Dạ chào anh Quang! Shop vừa nhắn tin tư vấn chi tiết cho anh, anh xem tin nhắn nhé 💬',
        act2: 'Nhắn tin riêng tư vấn đúng mã',
        nhan: 'Chào anh Quang! Driver <b>Yaskawa 750W</b> bên em có hàng tháo máy đã test, giao Hải Phòng <b>1–2 ngày</b> ạ. Anh đọc giúp em <b>mã trên tem motor</b> để em lấy đúng đời nha!',
        sp: { ten: 'Driver servo tháo máy', gia: 'từ 1.800.000đ', img: L(IMG['tu-driver']) },
        khach: 'Motor SGMJV-08ADE6S em',
      },
      duLieu: {
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: lắp khác đời, bảo hành', 'Khách mua về không chạy, shop mất uy tín'],
        hoi: 'Driver A6 lắp cho motor A5 được không em, bảo hành 1 năm đúng không?',
        aiSai: 'Dạ được ạ! Lắp <b>vừa luôn</b>, bảo hành <b>12 tháng</b> anh nhé 🥰',
        thucTe: '⚠ Thực tế: driver A6 không chạy motor A5, hàng tháo máy bảo hành 3 tháng',
        gian: 'Lắp vào báo lỗi encoder, máy dừng cả ngày! Sao tư vấn sai vậy? 😠',
        cho: 'Dạ anh chờ em một chút để em kiểm tra chính xác mã hàng và chính sách bảo hành cho mình nhé!',
        nv: 'Nhân viên Long · người thật',
        nvTraLoi: 'Dạ motor A5 phải đi driver A5 cùng công suất ạ. Hàng tháo máy bên em bảo hành 3 tháng, lỗi 1 đổi 1 anh nhé!',
      },
    },
  };
})();
