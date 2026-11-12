/* Kịch bản: NỘI THẤT, SOFA (sofa nhập châu Âu + xưởng gỗ công nghiệp làm kệ, tủ theo kích thước) — BẢN TRÌNH CHIẾU,
   nhóm THƯƠNG MẠI ĐIỆN TỬ. Khung ngang 16:9. Khách thật: chủ shop trực một mình, chạy quảng cáo, cần AI tư vấn thay.
   Demo chat theo chuẩn thương mại điện tử (TRINH-CHIEU.md mục 3), một mạch:
     22:15 chị Hà gửi ảnh sofa hỏi (ca khó: tường 3m6 chọn kích thước nào, nhà có trẻ nhỏ + mèo chọn da hay vải,
     hỏi thêm kệ tivi làm theo kích thước) → chị im → bám đuổi 2 tin theo thẻ #SofaMilano, #HoiGia → chị quay lại chốt combo
     → lên đơn tự động (hỏi cả thang máy để xếp xe) → chăm sóc sau bán, gợi ý tủ xưởng làm.
   Không có tin cập nhật vận chuyển. Không có bước kết thúc: bấm → là sang slide kế.
   Tên shop, mẫu sofa, giá, chính sách, tên khách, SĐT: dữ liệu minh họa. Ảnh: Unsplash (ảnh thật, không phải hàng của shop). */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'sofa-l': '1759722665610-e13e59aa117b',
    'phong-khach-1': '1759722668102-0d43a5696411',
    'phong-khach-2': '1583847268964-b28dc8f51f92',
    'ke-tivi-am': '1774716925888-190de2471de2',
    'ke-tivi-thap': '1586024486164-ce9b3d87e09f',
    'ban-tra': '1777513538143-8525eb3943f6',
    'showroom': '1687180498602-5a1046defaa4',
    'xuong-go': '1788296817269-8df0458ab799',
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    shop: { name: 'Casa Mộc', initials: 'CM' },
    headline: { pre: 'Hệ thống AI chatbot giúp tăng trung bình', em: '62% tỷ lệ chốt đơn' },
    sub: 'AI tư vấn thay chủ shop 24/7: hiểu đúng nhu cầu, bám đuổi, lên đơn và chăm sóc khách để tăng hiệu quả bán hàng.',
    cta: 'Dùng thử miễn phí tại **preny.ai**\nHotline **0389 647 778**',
    speed: 1.13,
    timing: { read0: 1000, readPerChar: 28, readMax: 4500, type0: 800, typePerChar: 3, typeMax: 1500, fastType: 500,
              featureHold: 1400, sepHold: 1100, cardHold: 4000, introCard: 250 },

    images: Object.fromEntries(Object.entries(IMG).map(([k, id]) => [k, U(id)])),

    // Cột trái demo: đúng 4 tính năng được diễn, theo thứ tự diễn
    features: [
      { title: 'AI chatbot tư vấn, chốt đơn 24/7', desc: 'Tăng trung bình 62% tỷ lệ chốt đơn.',
        kws: ['Trả lời ngay cả khi chủ shop bận, 24/7', 'Nhận diện đúng mẫu sofa từ ảnh', 'Tư vấn kích thước theo phòng khách', 'Chọn chất liệu hợp nhà có trẻ nhỏ, thú cưng', 'Gợi ý kệ tivi xưởng làm theo kích thước'] },
      { title: 'AI tự động bám đuổi khách hàng trong 7 ngày', desc: 'Tăng thêm khoảng 35% tỷ lệ chốt đơn.',
        kws: ['~65% khách nhắn tin rồi im lặng', 'Tự gắn thẻ mẫu khách xem, lý do im', 'Gửi ảnh thật, mời ghé showroom ngồi thử', 'Báo giá xong im → ưu đãi combo đúng lúc'] },
      { title: 'AI Agent tự động lên đơn và gửi sang đơn vị vận chuyển', desc: 'Tiết kiệm hơn 90% thời gian xử lý đơn.',
        kws: ['Thu đủ tên, SĐT, địa chỉ, thang máy', 'Gửi tin xác nhận đơn đầy đủ', 'Tự tạo đơn, xếp lịch giao và lắp'] },
      { title: 'AI tự động chăm sóc khách hàng sau bán', desc: 'Tăng doanh thu từ khách hàng cũ.',
        kws: ['Hỏi thăm sau khi giao, lắp', 'Hướng dẫn vệ sinh, giữ sofa bền đẹp', 'Gợi ý tủ giày, tủ áo xưởng làm'] },
    ],

    steps: [
      { intro: true, hold: 1800 },

      /* ---- 1. Tư vấn lúc 22:15, chủ shop đang nghỉ: kích thước, chất liệu, kệ tivi theo kích thước ---- */
      { feature: 1 },
      { sep: 'Khách nhắn tin từ quảng cáo Facebook · 22:15', style: 'time', hold: 800 },
      { img: 'sofa-l', hold: 1500 },
      { kh: 'Sofa này giá sao shop? Phòng khách nhà mình ngang 3m6, nhà có 2 bé với 1 bé mèo, nên chọn da hay vải ạ?' },
      { ai: 'Dạ chào chị! Em tư vấn cho chị ngay ạ 😊', fast: true, meta: '⚡ Preny AI trả lời thay chủ shop sau 2 giây', kw: 0 },
      { ai: 'Mẫu chị gửi là **sofa góc chữ L Milano**, nhập nguyên chiếc từ châu Âu ạ. Tường 3m6 chị chọn bản **2m4** (khoảng 2/3 bức tường) là cân đối, vẫn chừa lối đi.', kw: [1, 2] },
      { ai: 'Nhà có bé và mèo, em gợi ý **vải công nghệ chống thấm, chống cào** thay cho da thật: đổ sữa lau là sạch, móng mèo không để vết như trên da ạ. Bản 2m4 giá **28.900.000đ**, **bảo hành khung 5 năm**, giao lắp miễn phí nội thành.', kw: 3 },
      { kh: 'Shop có làm kệ tivi theo kích thước không? Tường tivi nhà mình 3m2' },
      { ai: 'Dạ có ạ! Bên em có **xưởng gỗ công nghiệp riêng**, làm kệ **đúng 3m2**, gỗ **MDF lõi xanh chống ẩm**, màu đồng bộ với sofa, xưởng làm **7–10 ngày** ạ:', kw: 4 },
      { catalog: [
          { name: 'Kệ tivi âm tường', sub: 'Đặt theo kích thước', price: '7.500.000đ', old: '', tag: 'Xưởng làm', art: 'ke-tivi-am' },
          { name: 'Kệ tivi thấp', sub: 'Dài 3m2 · chống ẩm', price: '5.900.000đ', old: '', tag: 'Bán chạy', art: 'ke-tivi-thap' },
          { name: 'Bàn trà gỗ mộc', sub: '120 × 60 cm', price: '3.200.000đ', old: '3.600.000đ', tag: 'Hợp sofa Milano', art: 'ban-tra' },
        ], hold: 4000 },
      { kh: 'Để tối nay mình bàn với chồng đã' },

      /* ---- 2. Khách im → bám đuổi 2 tin theo thẻ ---- */
      { feature: 2 },
      { sep: 'Khách chưa phản hồi… · AI gắn thẻ #SofaMilano #HoiGia', style: 'silent', kw: [0, 1], hold: 1800 },
      { sep: '— 1 ngày sau —' },
      { ai: 'Chị Hà ơi, em gửi chị ảnh thật **sofa chữ L bản 2m4** đặt trong phòng khách cỡ như nhà mình để anh chị dễ hình dung nha. Cuối tuần anh chị ghé **showroom ngồi thử** ạ 😊', meta: '🔁 Tự động · Bám đuổi theo thẻ #SofaMilano', kw: 2 },
      { aiImgs: [{ img: 'phong-khach-1', label: 'Sofa chữ L 2m4' }, { img: 'phong-khach-2', label: 'Vải chống cào màu kem' },
                 { img: 'showroom', label: 'Ngồi thử ở showroom' }, { img: 'xuong-go', label: 'Xưởng gỗ của shop' }], hold: 3200 },
      { sep: '— 2 ngày sau —' },
      { ai: 'Combo **sofa Milano 2m4 + kệ tivi âm tường** chị hỏi giá, đặt trong tuần này em **giảm 1.500.000đ + tặng bộ gối tựa** ạ. Xưởng chỉ còn trống lịch làm kệ tuần sau thôi chị 🎁', meta: '🔁 Tự động · Bám đuổi theo thẻ #HoiGia', kw: 3 },
      { kh: 'Chồng mình ưng rồi, chốt combo sofa + kệ âm tường nhé' },

      /* ---- 3. Lên đơn tự động, xếp lịch giao và lắp (không có tin cập nhật vận chuyển) ---- */
      { feature: 3 },
      { ai: 'Dạ chị cho em xin **tên, SĐT, địa chỉ** và nhà mình **có thang máy không** để em xếp xe giao sofa nha.', kw: 0 },
      { kh: 'Thu Hà – 0938 246 135\nCăn 12.05, Tòa B, 45 Nguyễn Thị Thập, Q.7. Có thang máy nhé' },
      { card: {
          tag: '✓ Tin xác nhận đơn',
          intro: 'Dạ chị kiểm tra lại đơn giúp em nhé:',
          lines: ['1 Sofa chữ L Milano 2m4 · vải chống cào', '1 Kệ tivi âm tường 3m2 · MDF lõi xanh chống ẩm', 'Tổng cộng: **34.900.000đ** (đã giảm 1.500.000đ, tặng gối tựa)', 'Người nhận: Thu Hà · 0938 246 135', 'Giao tới: Căn 12.05, Tòa B, 45 Nguyễn Thị Thập, Q.7'],
          button: 'Quản lý đơn hàng',
        }, kw: 1, hold: 4500 },
      { kh: 'Ok em' },
      { card: {
          tag: '✓ Đã tạo đơn & xếp lịch giao, lắp', ok: true,
          lines: ['Mã đơn: **#CM40719**', 'Sofa: giao & lắp **thứ Bảy, 21/11**', 'Kệ tivi: xưởng làm xong, lắp **thứ Bảy, 28/11**'],
        }, kw: 2, hold: 3500 },

      /* ---- 4. Chăm sóc sau bán ---- */
      { feature: 4 },
      { sep: '— 1 tuần sau khi lắp —' },
      { ai: 'Chị Hà ơi, sofa với kệ tivi dùng có ưng không ạ? Vải chống cào chị **hút bụi 1 lần/tuần**, đổ nước thì **thấm bằng khăn ẩm** là sạch, không cần giặt nha 💛', meta: '💛 Tự động · Chăm sóc sau bán', kw: [0, 1] },
      { kh: 'Ưng lắm em, mèo cào mà không sao luôn 😆' },
      { ai: 'Dạ vui quá ạ! Xưởng bên em còn làm **tủ giày, tủ quần áo** đúng kích thước nhà mình, khách cũ **giảm 5%**, chị cần em gửi mẫu nha 😊', kw: 2, hold: 1500 },
      // Không có { end: true }: bấm → thêm một lần là sang thẳng slide kế.
    ],

    /* ===== Nội dung slide trình chiếu (trinh-chieu.html). Chưa có số liệu thống kê thật → 2 slide thống kê tự ẩn. ===== */
    deck: {
      bamDuoi: {
        cmpDung: ['Khách nhắn xong im → nhắc đúng mẫu sofa khách xem (thẻ <b>#SofaMilano</b> từ quảng cáo)',
                  'Báo giá xong im → bám đuổi theo giá: ưu đãi combo, quà tặng (thẻ <b>#HoiGia</b>)',
                  'Đúng nhu cầu, đúng lý do im → khách quay lại mua'],
        hoi: 'Sofa chữ L này giá bao nhiêu shop?',
        traLoiThuong: 'Dạ giá 28.900.000đ ạ.',
        refImg: L(IMG['sofa-l']), refTen: 'Sofa chữ L Milano',
        vd1: {
          kh: 'Mẫu sofa này còn không shop?',
          ai: 'Dạ còn ạ chị! Phòng khách nhà mình ngang bao nhiêu để em tư vấn đúng kích thước nha?',
          tag: '🏷 #SofaMilano', tagNote: 'thẻ từ quảng cáo · khách im 1 ngày',
          nhac: 'Chị ơi, <b>sofa chữ L Milano</b> chị xem hôm qua có bản <b>2m4 và 2m8</b>, đang có sẵn ở showroom. Cuối tuần anh chị ghé <b>ngồi thử</b> nha, em giữ lịch cho chị 😊',
          dung: '🎯 Theo thẻ #SofaMilano: nhắc đúng mẫu khách xem',
          khach: 'Chủ nhật mình ghé nhé',
        },
        vd2: {
          kh: 'Sofa Milano 2m4 bao nhiêu shop?',
          ai: 'Dạ bản <b>2m4 vải chống cào</b> giá <b>28.900.000đ</b>, bảo hành khung 5 năm ạ.',
          tag: '🏷 #HoiGia', tagNote: 'báo giá xong khách im 1 ngày',
          nhac: 'Chị ơi, sofa Milano chị hỏi giá hôm qua, đặt trong tuần này em <b>giảm 1.500.000đ + tặng bộ gối tựa</b> ạ. Em giữ hàng cho chị nha?',
          dung: '🎯 Theo thẻ #HoiGia: bám đuổi theo giá, đúng lý do khách im',
          khach: 'Ok giữ cho mình nhé',
        },
      },
      binhLuan: {
        post: 'Sofa <b>nhập khẩu châu Âu</b> + kệ tivi, tủ <b>xưởng làm theo kích thước</b> · giao lắp miễn phí nội thành 🛋️',
        img: L(IMG['showroom']),
        kav: 'ĐK', kten: 'Đỗ Khánh', hoi: 'Sofa 3 chỗ giá bao nhiêu, giao Bình Dương được không shop?',
        traLoi: 'Dạ chào anh Khánh! Shop vừa nhắn tin tư vấn chi tiết cho anh, anh xem tin nhắn nhé 💬',
        act2: 'Nhắn tin riêng tư vấn mẫu và giá',
        nhan: 'Chào anh Khánh! Sofa 3 chỗ bên em có bản <b>2m1 và 2m3</b>, cả da và vải, giao lắp Bình Dương <b>2–3 ngày</b> ạ. Anh cho em xin <b>chiều ngang phòng khách</b> để em gợi ý đúng kích thước nha!',
        sp: { ten: 'Sofa 3 chỗ', gia: 'từ 24.500.000đ', img: L(IMG['phong-khach-2']) },
        khach: 'Phòng ngang 4m em',
      },
      duLieu: {
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: thời gian làm, bảo hành', 'Khách đặt cọc rồi khiếu nại, shop mất uy tín'],
        hoi: 'Kệ tivi đặt theo kích thước 3 ngày xong được không em, bảo hành 10 năm nhé?',
        aiSai: 'Dạ được ạ! <b>3 ngày</b> là xong, bảo hành <b>10 năm</b> luôn chị 🥰',
        thucTe: '⚠ Thực tế: xưởng làm 7–10 ngày, kệ gỗ công nghiệp bảo hành 2 năm',
        gian: 'Đã cọc rồi mà hẹn 3 ngày giờ chưa có kệ! Sao nói sai vậy? 😠',
        cho: 'Dạ chị chờ em một chút để em kiểm tra chính xác lịch xưởng và chính sách bảo hành cho mình nhé!',
        nv: 'Anh Tùng · chủ shop, người thật',
        nvTraLoi: 'Dạ kệ đặt theo kích thước xưởng làm 7–10 ngày ạ, bảo hành 2 năm. Em ưu tiên xếp lịch sớm nhất cho chị nhé!',
      },
    },
  };
})();
