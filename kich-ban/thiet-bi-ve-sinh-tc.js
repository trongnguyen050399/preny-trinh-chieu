/* Kịch bản: THIẾT BỊ VỆ SINH (bồn cầu, lavabo, vòi, sen) — BẢN TRÌNH CHIẾU, nhóm THƯƠNG MẠI ĐIỆN TỬ. Khung ngang 16:9.
   Demo chat theo chuẩn thương mại điện tử (TRINH-CHIEU.md mục 3), một mạch:
     anh Tuấn gửi ảnh bồn cầu hỏi → AI hỏi tâm xả, báo lắp đặt, gợi ý combo lavabo → anh im → bám đuổi 2 tin theo thẻ
     #BonCauMotKhoi, #HoiGia → anh quay lại chốt → lên đơn, hẹn giao + lắp → chăm sóc sau bán, gợi ý sen tắm/gương.
   Không có tin cập nhật vận chuyển. Không có bước kết thúc: bấm → là sang slide kế.
   Tên shop, mã sản phẩm, giá, SĐT: dữ liệu minh họa (không dùng tên hãng thật). Ảnh: Unsplash (ảnh thật). */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'bon-cau': '1589824783837-6169889fa20f',
    'lavabo-vuong': '1595514535316-b8c85bf9bbf9',
    'lavabo-tron': '1621953884578-02a3ddb96f46',
    'voi': '1610278764397-388d11c35ddb',
    'sen-tam': '1584622650111-993a426fbf0a',
    'guong': '1629079447777-1e605162dc8d',
    'phong-tam-1': '1576698483491-8c43f0862543',
    'phong-tam-2': '1631048499052-e6d9f305d2c0',
    'phong-tam-3': '1630699376443-a79cea41ed80',
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    shop: { name: 'TBVS An Phát', initials: 'AP' },
    headline: { pre: 'Hệ thống AI chatbot giúp tăng trung bình', em: '62% tỷ lệ chốt đơn' },
    sub: 'Tự động hóa toàn bộ quy trình chốt đơn, chăm sóc và remarketing để tăng hiệu quả bán hàng.',
    cta: 'Dùng thử miễn phí tại **preny.ai**\nHotline **0389 647 778**',
    speed: 1.13,
    timing: { read0: 1000, readPerChar: 28, readMax: 4500, type0: 800, typePerChar: 3, typeMax: 1500, fastType: 500,
              featureHold: 1400, sepHold: 1100, cardHold: 4000, introCard: 250 },

    images: Object.fromEntries(Object.entries(IMG).map(([k, id]) => [k, U(id)])),

    // Cột trái demo: đúng 4 tính năng được diễn, theo thứ tự diễn (chuẩn thương mại điện tử lần 22)
    features: [
      { title: 'AI chatbot chốt đơn tự động 100%', desc: 'Tăng trung bình 62% tỷ lệ chốt đơn.',
        kws: ['Trả lời ngay tức thì, 24/7', 'Nhận diện đúng mẫu, giá từ ảnh khách gửi', 'Hỏi tâm xả, kích thước để chọn đúng', 'Báo bảo hành, lắp đặt tận nơi', 'Gợi ý combo, chủ động chốt đơn'] },
      { title: 'AI tự động bám đuổi khách hàng trong 7 ngày', desc: 'Tăng thêm khoảng 35% tỷ lệ chốt đơn.',
        kws: ['~65% khách nhắn tin rồi im lặng', 'Tự gắn thẻ mẫu khách xem, lý do im', 'Gửi ảnh phối phòng tắm đúng mẫu', 'Báo giá xong im → ưu đãi giá đúng lúc'] },
      { title: 'AI Agent tự động lên đơn và gửi sang đơn vị vận chuyển', desc: 'Tiết kiệm hơn 90% thời gian xử lý đơn.',
        kws: ['Thu đủ tên, SĐT, địa chỉ lắp đặt', 'Gửi tin xác nhận đơn đầy đủ', 'Tự tạo đơn, hẹn lịch giao và lắp'] },
      { title: 'AI tự động chăm sóc khách hàng sau bán', desc: 'Tăng doanh thu từ khách hàng cũ.',
        kws: ['Hỏi thăm sau khi lắp đặt', 'Hướng dẫn vệ sinh, giữ men sứ bền đẹp', 'Gợi ý sen tắm, gương hợp phòng tắm'] },
    ],

    steps: [
      { intro: true, hold: 1800 },

      /* ---- 1. Tư vấn: tâm xả, lắp đặt, combo ---- */
      { feature: 1 },
      { sep: 'Khách nhắn tin từ quảng cáo Facebook', style: 'time', hold: 800 },
      { img: 'bon-cau', hold: 1500 },
      { kh: 'Shop ơi mẫu bồn cầu này còn không, giá sao ạ?' },
      { ai: 'Dạ còn hàng ạ anh! 😊', fast: true, meta: '⚡ Preny AI trả lời sau 2 giây', kw: 0 },
      { ai: 'Mẫu anh gửi là **Bồn cầu một khối AP-1688**, nắp đóng êm, xả xoáy, giá **4.290.000đ** (đang giảm 15%) ạ. Anh cho em xin **tâm xả** (từ tường tới tâm lỗ thoát) để em chọn đúng loại nha.', kw: [1, 2] },
      { kh: 'Tâm xả 305mm, nhà anh ở Thủ Đức. Có lắp luôn không em?' },
      { ai: 'Dạ tâm 305mm lắp vừa mẫu này ạ. Thủ Đức bên em **giao và lắp đặt miễn phí**, men sứ **bảo hành 5 năm** nha anh.', kw: 3 },
      { ai: 'Anh làm lại phòng tắm thì có **lavabo, vòi** hợp tông, mua kèm bồn cầu **giảm thêm 300.000đ** ạ:', kw: 4 },
      { catalog: [
          { name: 'Lavabo đặt bàn vuông', sub: 'AP-L12 · trắng', price: '1.150.000đ', old: '1.290.000đ', tag: 'Bán chạy', art: 'lavabo-vuong' },
          { name: 'Lavabo đặt bàn tròn', sub: 'AP-L08 · trắng', price: '990.000đ', old: '1.090.000đ', tag: 'Mới về', art: 'lavabo-tron' },
          { name: 'Vòi lavabo nóng lạnh', sub: 'Inox 304', price: '890.000đ', old: '990.000đ', tag: '-10%', art: 'voi' },
        ], hold: 4000 },
      { kh: 'Để anh tính lại phòng tắm đã' },

      /* ---- 2. Khách im → bám đuổi 2 tin theo thẻ ---- */
      { feature: 2 },
      { sep: 'Khách chưa phản hồi… · AI gắn thẻ #BonCauMotKhoi #HoiGia', style: 'silent', kw: [0, 1], hold: 1800 },
      { sep: '— 1 ngày sau —' },
      { ai: 'Anh Tuấn ơi, em gửi anh vài mẫu **phòng tắm lắp bồn cầu AP-1688** với lavabo hợp tông để anh dễ hình dung nha 😊', meta: '🔁 Tự động · Bám đuổi theo thẻ #BonCauMotKhoi', kw: 2 },
      { aiImgs: [{ img: 'phong-tam-1', label: 'Bàn đá vân mây' }, { img: 'phong-tam-2', label: 'Tủ gỗ ấm' },
                 { img: 'bon-cau', label: 'Bồn cầu AP-1688' }, { img: 'phong-tam-3', label: 'Phòng tắm trắng' }], hold: 3200 },
      { sep: '— 2 ngày sau —' },
      { ai: 'Combo **bồn cầu + lavabo vuông** anh hỏi giá hôm nay **giảm tổng 500.000đ**, vẫn **lắp miễn phí**, chỉ đến 23h tối nay thôi ạ 🎁', meta: '🔁 Tự động · Bám đuổi theo thẻ #HoiGia', kw: 3 },
      { kh: 'Ok lấy anh bồn cầu với lavabo vuông nha' },

      /* ---- 3. Lên đơn tự động, hẹn lịch giao và lắp (không có tin cập nhật vận chuyển) ---- */
      { feature: 3 },
      { ai: 'Dạ anh cho em xin **tên, SĐT và địa chỉ lắp đặt** nha.', kw: 0 },
      { kh: 'Nguyễn Tuấn – 0903 456 789\n12 Võ Văn Ngân, TP. Thủ Đức' },
      { card: {
          tag: '✓ Tin xác nhận đơn',
          intro: 'Dạ anh kiểm tra lại đơn giúp em nhé:',
          lines: ['1 Bồn cầu một khối AP-1688', '1 Lavabo đặt bàn vuông AP-L12', 'Tổng cộng: **4.940.000đ** (đã giảm 500.000đ, miễn phí lắp đặt)', 'Người nhận: Nguyễn Tuấn · 0903 456 789', 'Địa chỉ lắp: 12 Võ Văn Ngân, TP. Thủ Đức'],
          button: 'Quản lý đơn hàng',
        }, kw: 1, hold: 4500 },
      { kh: 'Ok em' },
      { card: {
          tag: '✓ Đã tạo đơn & hẹn lịch giao, lắp', ok: true,
          lines: ['Mã đơn: **#AP30217**', 'Mã vận đơn: **VD77310492**', 'Giao & lắp: **9h sáng thứ Bảy, 21/11**'],
        }, kw: 2, hold: 3500 },

      /* ---- 4. Chăm sóc sau bán ---- */
      { feature: 4 },
      { sep: '— 3 ngày sau khi lắp —' },
      { ai: 'Anh Tuấn ơi, bồn cầu dùng có êm, xả mạnh không ạ? Anh lau men sứ bằng khăn mềm, **không dùng chất tẩy có axit** để men luôn bóng nha 💙', meta: '💙 Tự động · Chăm sóc sau bán', kw: [0, 1] },
      { kh: 'Xả êm lắm em 👍' },
      { sep: '— 2 tuần sau —' },
      { ai: 'Shop có **sen tắm và gương** hợp tông lavabo vuông của anh, khách cũ được **giảm thêm 10%** ạ:', kw: 2 },
      { catalog: [
          { name: 'Sen tắm nóng lạnh', sub: 'Inox 304', price: '1.791.000đ', old: '1.990.000đ', tag: 'Khách cũ -10%', art: 'sen-tam' },
          { name: 'Gương phòng tắm', sub: '60 × 80 cm', price: '1.071.000đ', old: '1.190.000đ', tag: 'Hợp lavabo vuông', art: 'guong' },
          { name: 'Vòi lavabo nóng lạnh', sub: 'Inox 304', price: '801.000đ', old: '890.000đ', tag: '-10%', art: 'voi' },
        ], hold: 4000 },
      { kh: 'Lấy thêm anh bộ sen tắm nha', hold: 1500 },
      // Không có { end: true }: bấm → thêm một lần là sang thẳng slide kế.
    ],

    /* ===== Nội dung slide trình chiếu (trinh-chieu.html). Chưa có số liệu thống kê thật → 2 slide thống kê tự ẩn. ===== */
    deck: {
      bamDuoi: {
        cmpDung: ['Khách nhắn xong im → nhắc đúng mẫu khách đã xem (thẻ <b>#BonCauMotKhoi</b> từ quảng cáo)',
                  'Báo giá xong im → bám đuổi theo giá: ưu đãi, quà tặng (thẻ <b>#HoiGia</b>)',
                  'Đúng nhu cầu, đúng lý do im → khách quay lại mua'],
        hoi: 'Bồn cầu này giá bao nhiêu shop?',
        traLoiThuong: 'Dạ giá 4.290.000đ ạ.',
        refImg: L(IMG['bon-cau']), refTen: 'Bồn cầu một khối AP-1688',
        vd1: {
          kh: 'Mẫu bồn cầu này còn không shop?',
          ai: 'Dạ còn ạ anh! Anh cho em xin tâm xả nhà mình để chọn đúng loại nha?',
          tag: '🏷 #BonCauMotKhoi', tagNote: 'thẻ từ quảng cáo · khách im 1 ngày',
          nhac: 'Anh Tuấn ơi, <b>bồn cầu một khối AP-1688</b> anh xem hôm qua có loại tâm xả <b>305mm và 400mm</b>, lắp miễn phí nội thành ạ. Anh đo giúp em tâm xả để em giữ đúng loại nha 😊',
          dung: '🎯 Theo thẻ #BonCauMotKhoi: nhắc đúng mẫu khách xem',
          khach: 'Nhà anh tâm 305 em',
        },
        vd2: {
          kh: 'Lavabo tròn này giá bao nhiêu shop?',
          ai: 'Dạ <b>Lavabo đặt bàn tròn AP-L08</b> giá <b>990.000đ</b>, bảo hành men 5 năm ạ.',
          tag: '🏷 #HoiGia', tagNote: 'báo giá xong khách im 1 ngày',
          nhac: 'Chị Hằng ơi, lavabo tròn chị hỏi giá hôm qua hôm nay <b>còn 890.000đ + tặng vòi lạnh</b>, chỉ đến 23h ạ. Em giữ hàng cho chị nha?',
          dung: '🎯 Theo thẻ #HoiGia: bám đuổi theo giá, đúng lý do khách im',
          khach: 'Ok lấy chị 1 cái nha',
        },
      },
      binhLuan: {
        post: 'Combo <b>bồn cầu một khối + lavabo</b> giảm 15%, miễn phí lắp đặt nội thành 🚿',
        img: L(IMG['phong-tam-2']),
        kav: 'LN', kten: 'Lê Nam', hoi: 'Combo này giá bao nhiêu, có lắp ở Bình Dương không shop?',
        traLoi: 'Dạ chào anh Nam! Shop vừa nhắn tin báo giá chi tiết cho anh, anh xem tin nhắn nhé 💬',
        act2: 'Nhắn tin riêng tư vấn combo đó',
        nhan: 'Chào anh Nam! <b>Combo bồn cầu một khối + lavabo</b> giá <b>4.490.000đ</b> (giảm 15%). Bình Dương bên em giao tận nơi, phí lắp em báo theo địa chỉ ạ. Anh cho em xin <b>tâm xả</b> bồn cầu nhà mình nha!',
        sp: { ten: 'Combo bồn cầu + lavabo', gia: '4.490.000đ', img: L(IMG['bon-cau']) },
        khach: 'Tâm xả 305mm em',
      },
      duLieu: {
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai chính sách: bảo hành, lắp đặt', 'Khách khiếu nại, shop mất uy tín'],
        hoi: 'Bồn cầu này bảo hành 10 năm, lắp miễn phí cả ở Đà Nẵng đúng không em?',
        aiSai: 'Dạ đúng ạ! Bảo hành <b>10 năm</b>, <b>lắp miễn phí toàn quốc</b> luôn anh 🥰',
        thucTe: '⚠ Thực tế: men sứ bảo hành 5 năm, chỉ lắp miễn phí nội thành TP.HCM',
        gian: 'Thợ tới đòi phí lắp, sao nói miễn phí? Shop nói sai vậy? 😠',
        cho: 'Dạ anh chờ em một chút để em kiểm tra chính xác chính sách bảo hành, lắp đặt cho mình nhé!',
        nv: 'Nhân viên Hùng · người thật',
        nvTraLoi: 'Dạ men sứ bảo hành 5 năm ạ. Ở Đà Nẵng bên em giao tận nơi, phí lắp em báo chính xác theo địa chỉ của anh nhé!',
      },
    },
  };
})();
