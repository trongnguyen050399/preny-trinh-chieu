/* Kịch bản: THIẾT BỊ LỌC NƯỚC (máy lọc nước RO nóng lạnh, cột lọc đầu nguồn, gói thay lõi) — BẢN TRÌNH CHIẾU, nhóm THƯƠNG MẠI ĐIỆN TỬ.
   Làm 17/11/2026 theo pipeline mới (TRINH-CHIEU.md mục 1). Demo chat chuẩn thương mại điện tử (mục 3), một mạch:
     anh Phúc ở ngoại thành dùng nước giếng khoan nhiễm phèn (vàng, tanh mùi sắt) gửi ảnh máy lọc hỏi máy RO có lọc được phèn không
     → AI: màng RO lọc được, nhưng phèn nặng vào thẳng thì màng nghẹt nhanh → khuyên thêm cột lọc thô đầu nguồn;
       ca khó: nhà có 2 con nhỏ hỏi nóng lạnh có nguy hiểm không, so với máy RO 3,9 triệu trên mạng
       → khóa nước nóng an toàn trẻ em, so chi phí thay lõi mỗi năm, kiểm tra nước và lắp đặt miễn phí
     → anh im (bàn với vợ) → bám đuổi 2 tin theo thẻ #MayLocRONongLanh (ảnh máy lắp thật), #HoiGia (giảm combo + tặng lõi thô)
     → chốt combo, lên đơn (hỏi vị trí giếng, bồn nước để mang đủ ống) → chăm sóc sau bán: dặn xả cột lọc, lịch thay lõi,
       gợi ý gói bảo dưỡng, bình giữ nhiệt cho bé, máy cho nhà ông bà.
   Không có tin tự động cập nhật vận chuyển. Không có bước kết thúc: bấm → là sang slide kế.
   Ảnh 'loi-loc' thật ra là 3 bình giữ nhiệt nên chữ gọi là bình giữ nhiệt.
   Tên shop, giá, chính sách, tên khách, SĐT: dữ liệu minh họa. Ảnh: Unsplash (ảnh thật, không phải hàng của shop). */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'may-loc-2': '1659346435902-9bd10146b5d9',   // máy lọc nước để bàn màu trắng trong bếp sáng
    'ly-nuoc': '1669139470813-827cbcf54b20',     // hứng ly nước tại vòi bồn rửa
    'loi-loc': '1606342384762-ddf691b59885',     // 3 bình giữ nhiệt (xanh, đen, trắng)
    'cot-loc': '1654220691341-be23a137bd0c',     // dãy cột lọc composite đầu nguồn
    'binh-nuoc': '1783309529184-75986d6e472a',   // rất nhiều bình nước 20 lít
    'bep': '1669211659110-3f3db4119b65',         // máy lọc trắng lắp cạnh bồn rửa bếp
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    shop: { name: 'Lọc Nước An Tâm', initials: 'AT' },
    headline: { pre: 'Hệ thống AI chatbot giúp tăng trung bình', em: '62% tỷ lệ chốt đơn' },
    sub: 'Tự động hóa toàn bộ quy trình chốt đơn, bám đuổi, lên đơn và chăm sóc khách để tăng hiệu quả bán hàng.',
    cta: 'Dùng thử miễn phí tại **preny.ai**\nHotline **0389 647 778**',
    speed: 1.13,
    timing: { read0: 1000, readPerChar: 28, readMax: 4500, type0: 800, typePerChar: 3, typeMax: 1500, fastType: 500,
              featureHold: 1400, sepHold: 1100, cardHold: 4000, introCard: 250 },

    images: Object.fromEntries(Object.entries(IMG).map(([k, id]) => [k, U(id)])),

    // Cột trái demo ngang (dùng khi xuất video): đúng 4 tính năng được diễn, theo thứ tự diễn
    features: [
      { title: 'AI chatbot tư vấn, chốt đơn 24/7', desc: 'Tăng trung bình 62% tỷ lệ chốt đơn.',
        kws: ['Trả lời ngay tức thì, 24/7', 'Nhận diện đúng máy từ ảnh khách gửi', 'Hỏi nguồn nước để chọn bộ lọc', 'Giải đáp lo ngại: an toàn cho bé, tiền lõi', 'Kiểm tra nước, lắp miễn phí, chủ động chốt'] },
      { title: 'AI tự động bám đuổi khách hàng trong 7 ngày', desc: 'Tăng thêm khoảng 35% tỷ lệ chốt đơn.',
        kws: ['~65% khách nhắn tin rồi im lặng', 'Tự gắn thẻ máy khách xem, lý do im', 'Gửi ảnh thật máy lắp ở nhà khách', 'Báo giá xong im → ưu đãi giá đúng lúc'] },
      { title: 'AI Agent tự động lên đơn và gửi sang đơn vị vận chuyển', desc: 'Tiết kiệm hơn 90% thời gian xử lý đơn.',
        kws: ['Thu đủ tên, SĐT, địa chỉ, vị trí giếng, bồn', 'Gửi tin xác nhận đơn đầy đủ', 'Tự tạo đơn, xếp kỹ thuật lắp đặt'] },
      { title: 'AI tự động chăm sóc khách hàng sau bán', desc: 'Tăng doanh thu từ khách hàng cũ.',
        kws: ['Hỏi thăm, dặn lịch thay lõi', 'Gợi ý sản phẩm đúng nhu cầu nhà', 'Khách mua thêm, tăng giá trị vòng đời'] },
    ],

    steps: [
      { intro: true, hold: 1800 },

      /* ---- 1. Tư vấn: nước giếng phèn → thêm cột lọc đầu nguồn; ca khó: con nhỏ + nóng lạnh, so máy rẻ hơn ---- */
      { feature: 1 },
      { sep: 'Khách nhắn tin từ quảng cáo Facebook', style: 'time', hold: 800 },
      { img: 'may-loc-2', hold: 1500 },
      { kh: 'Máy này lọc đc nước giếng khoan k shop? Nhà a ở Củ Chi, nước nhiễm phèn, để lâu vàng, tanh mùi sắt. Máy RO có lọc đc phèn k?' },
      { ai: 'Dạ chào anh! Em tư vấn cho anh ngay ạ 💧', fast: true, meta: '⚡ Preny AI trả lời sau 2 giây', kw: 0 },
      { ai: 'Mẫu anh gửi là **máy lọc nước RO nóng lạnh**, giá **8.490.000đ** ạ. Màng RO lọc được **phèn, sắt, vi khuẩn**, nước uống ngay tại vòi.', kw: [1, 2] },
      { ai: 'Nhưng nước giếng **phèn nặng** mà cho vào thẳng thì màng RO **nghẹt nhanh**, 2–3 tháng đã yếu. Anh nên lắp thêm **cột lọc thô đầu nguồn** (2.900.000đ): lọc phèn, sắt cho cả nhà, **nước tắm giặt cũng hết vàng** ạ.', kw: 2 },
      { kh: 'Nhà a có 2 đứa nhỏ 3t với 7t, máy nóng lạnh có nguy hiểm k? Trên mạng có máy RO 9 lõi 3tr9 thôi e' },
      { ai: 'Dạ vòi nóng có **khóa an toàn trẻ em**: phải **bấm mở khóa rồi mới gạt** ra nước nóng, bé 3 tuổi nghịch cũng không bị bỏng ạ.', kw: 3 },
      { ai: 'Máy 3,9 triệu thường **lõi nhỏ**, nước giếng phèn thì 3 tháng đã phải thay, tiền lõi mỗi năm **gần 2 triệu**. Máy bên em lõi lớn, thay lõi **khoảng 900.000đ/năm**, **bảo hành 3 năm** ạ.', kw: 3 },
      { ai: 'Bên em **kiểm tra nước miễn phí** tại nhà, đo trước và sau khi lọc cho anh xem, **lắp đặt miễn phí**. Anh chốt combo máy + cột lọc để em xếp kỹ thuật qua nha? 😊', kw: 4 },
      { kh: 'Để a bàn với vợ đã' },

      /* ---- 2. Khách im → bám đuổi 2 tin theo thẻ ---- */
      { feature: 2 },
      { sep: 'Khách chưa phản hồi… · AI gắn thẻ #MayLocRONongLanh #HoiGia', style: 'silent', kw: [0, 1], hold: 1800 },
      { sep: '— 1 ngày sau —' },
      { ai: 'Anh Phúc ơi, em gửi anh **ảnh thật máy RO nóng lạnh** và **cột lọc đầu nguồn** lắp cho nhà khách dùng nước giếng phèn, gần nhà anh luôn nè 😊', meta: '🔁 Tự động · Bám đuổi theo thẻ #MayLocRONongLanh', kw: 2 },
      { aiImgs: [{ img: 'may-loc-2', label: 'Máy RO nóng lạnh' }, { img: 'bep', label: 'Lắp gọn trên bàn bếp' },
                 { img: 'cot-loc', label: 'Cột lọc đầu nguồn' }, { img: 'ly-nuoc', label: 'Uống ngay tại vòi' }], hold: 3200 },
      { sep: '— 2 ngày sau —' },
      { ai: 'Combo **máy RO nóng lạnh + cột lọc đầu nguồn** anh hỏi giá, chốt trong hôm nay em **giảm 700.000đ còn 10.690.000đ** + **tặng bộ lõi thô thay lần đầu** ạ 🎁', meta: '🔁 Tự động · Bám đuổi theo thẻ #HoiGia', kw: 3 },
      { kh: 'Ok lấy a combo đó, lắp sớm giúp a' },

      /* ---- 3. Lên đơn tự động (không có tin cập nhật vận chuyển) ---- */
      { feature: 3 },
      { ai: 'Dạ anh cho em xin **tên, SĐT và địa chỉ** lắp đặt nha. **Giếng, bồn nước** nhà mình ở đâu, cách bếp xa không để kỹ thuật mang đủ ống ạ?', kw: 0 },
      { kh: 'Lê Văn Phúc – 0977 365 214\nẤp 4, xã Củ Chi, TP.HCM. Bồn nước trên mái, bếp ở tầng trệt em' },
      { card: {
          tag: '✓ Tin xác nhận đơn',
          intro: 'Dạ anh kiểm tra lại đơn giúp em nhé:',
          lines: ['1 Máy lọc RO nóng lạnh + 1 Cột lọc đầu nguồn', 'Tặng: bộ lõi thô thay lần đầu · lắp đặt miễn phí', 'Tổng cộng: **10.690.000đ** · lắp xong mới trả tiền', 'Người nhận: Lê Văn Phúc · 0977 365 214', 'Lắp tại: Ấp 4, xã Củ Chi, TP.HCM'],
          button: 'Quản lý đơn hàng',
        }, kw: 1, hold: 4500 },
      { kh: 'Ok em' },
      { card: {
          tag: '✓ Đã tạo đơn & gửi vận chuyển', ok: true,
          lines: ['Mã đơn: **#AT40726**', 'Mã vận đơn: **VD72046185**', 'Giao & lắp đặt: **1–2 ngày**, đo nước trước và sau lọc'],
        }, kw: 2, hold: 3500 },

      /* ---- 4. Chăm sóc sau bán ---- */
      { feature: 4 },
      { sep: '— 1 tuần sau —' },
      { ai: 'Anh Phúc ơi, nước nhà mình uống ổn không ạ? Anh nhớ **xả rửa cột lọc đầu nguồn 1 tuần/lần**. Lịch thay lõi: **lõi 1–3 sau 6 tháng**, **màng RO 2–3 năm**, em ghi sẵn trên tem dán cạnh máy nha 💙', meta: '💙 Tự động · Chăm sóc sau bán', kw: 0 },
      { kh: 'Nước trong veo, hết tanh rồi em 👍 Tắm giặt cũng hết vàng' },
      { sep: '— 3 tuần sau —' },
      { ai: 'Mấy món nhà dùng nước giếng bên em hay mua thêm, khách cũ **giảm 10%** ạ:', kw: 1 },
      { catalog: [
          { name: 'Gói bảo dưỡng tại nhà 2 năm', sub: 'Thay lõi, vệ sinh máy, đo nước', price: '1.161.000đ', old: '1.290.000đ', tag: 'Khách cũ', art: 'bep' },
          { name: 'Bình giữ nhiệt 500ml', sub: 'Đựng nước lọc cho bé đi học', price: '261.000đ', old: '290.000đ', tag: 'Bán chạy', art: 'loi-loc' },
          { name: 'Máy RO nóng lạnh tặng ông bà', sub: 'Có khóa nước nóng an toàn', price: '7.641.000đ', old: '8.490.000đ', tag: '-10%', art: 'may-loc-2' },
        ], hold: 4000 },
      { kh: 'Lấy a 2 bình giữ nhiệt cho 2 đứa nhỏ nha em', kw: 2, hold: 1500 },
      // Không có { end: true }: bấm → thêm một lần là sang thẳng slide kế.
    ],

    /* ===== Nội dung slide trình chiếu (trinh-chieu.html). Slide thống kê dùng số minh họa (deck.dashboard). ===== */
    deck: {
      /* Demo chat dọc (demo-doc.js): tên khách trên Messenger, bài đăng Facebook (anh = khóa trong images), câu bình luận. */
      demoDoc: {
        khach: 'Phúc Lê',
        sanPham: 'Máy lọc nước RO nóng lạnh',
        binhLuan: 'Lọc được nước giếng không shop?',
        post: {
          tieuDe: 'MÁY LỌC NƯỚC RO NÓNG LẠNH 💧',
          dong: ['Lọc phèn, sắt, vi khuẩn', 'Khóa nước nóng an toàn cho bé', 'Kiểm tra nước miễn phí', 'Lắp đặt tận nhà'],
          anh: ['may-loc-2', 'bep', 'cot-loc', 'ly-nuoc'],
        },
      },
      /* Pipeline thương mại điện tử 16/11/2026 (TRINH-CHIEU.md mục 1): dashboard, chatbot, afterSale. */
      dashboard: [
        { ten: 'Máy lọc <span class="grad">RO nóng lạnh</span>', den: '21/07/2026', khach: 10, tyLe: 0.55 },
        { ten: 'Lọc tổng <span class="grad">đầu nguồn</span>', den: '18/08/2026', khach: 7, tyLe: 0.57 },
        { ten: 'Lõi lọc, <span class="grad">phụ kiện</span>', den: '26/09/2026', khach: 12, tyLe: 0.54 },
      ],
      chatbot: {
        chat: [
          { ref: { img: L(IMG['may-loc-2']), ten: 'Máy lọc nước RO nóng lạnh' } },
          { kh: 'Máy này lọc đc nước giếng khoan nhiễm phèn k shop? Nước nhà a để lâu vàng, tanh' },
          { ai: 'Dạ màng RO lọc được **phèn, sắt, vi khuẩn** ạ. Nước phèn nặng anh nên lắp thêm **cột lọc thô đầu nguồn** để màng RO không nghẹt, tắm giặt cũng hết vàng. Bên em **kiểm tra nước, lắp đặt miễn phí** nha.', meta: '⚡ Preny AI trả lời sau 2 giây' },
          { kh: 'Nhà có con nhỏ, máy nóng lạnh có an toàn k e? Combo bao nhiêu?' },
          { ai: 'Dạ vòi nóng có **khóa an toàn trẻ em**, bấm mở khóa mới ra nước nóng ạ. Combo **máy RO nóng lạnh + cột lọc đầu nguồn** giá **11.390.000đ**, máy **bảo hành 3 năm**.' },
          { kh: 'Ok lấy a combo. Lê Văn Phúc, 0977 365 214, Ấp 4, xã Củ Chi, TP.HCM' },
          { ai: 'Dạ em lên đơn, xếp kỹ thuật qua lắp đặt cho anh ngay ạ ⚡' },
          { don: true },
          { ok: true },
        ],
        don: {
          ten: 'Lê Văn Phúc', sdt: '0977 365 214', diaChi: 'Ấp 4, xã Củ Chi, TP.HCM', ma: '#AT40726', phi: 'lắp đặt miễn phí',
          // 1 dòng combo (2 dòng thì màn hình Tạo đơn tràn khỏi slide)
          sp: [{ img: L(IMG['may-loc-2']), ten: 'Combo máy RO nóng lạnh + cột lọc đầu nguồn', sl: 1, gia: 11390000 }],
        },
        anh: {
          img: L(IMG['binh-nuoc']),
          kh: 'Nhà a đang mua nước bình như hình này, lắp máy rồi có cần mua nữa k?',
          ai: 'Dạ hình anh gửi là **nước bình 20 lít** ạ. Nhà 4–5 người mỗi tháng tốn khoảng **8–10 bình**. Lắp máy RO rồi anh **không cần mua nước bình nữa**, nước nóng lạnh có sẵn tại vòi, tầm **1 năm rưỡi** là đủ tiền máy nha.',
        },
      },
      afterSale: {
        loi: 'Cảm ơn anh Phúc đã tin Lọc Nước An Tâm 💙 Nhà dùng nước giếng hay sắm thêm mấy món này ạ:',
        sp: [
          { img: L(IMG['bep']), ten: 'Gói bảo dưỡng tại nhà 2 năm', gia: 1290000 },
          { img: L(IMG['loi-loc']), ten: 'Bình giữ nhiệt 500ml', gia: 290000 },
          { img: L(IMG['ly-nuoc']), ten: 'Xét nghiệm nước giếng tại nhà', gia: 350000, cu: 450000 },
          { img: L(IMG['cot-loc']), ten: 'Cột làm mềm nước, chống cặn', gia: 3500000 },
          { img: L(IMG['may-loc-2']), ten: 'Máy RO nóng lạnh tặng ông bà', gia: 8490000, nut: 'Xem máy' },
        ],
        khach: 'Lấy a thêm gói bảo dưỡng 2 năm với 2 bình giữ nhiệt cho 2 đứa nhỏ',
        pill: '🛍 Khách mua thêm ngay: đơn tăng từ 11.390.000đ lên 13.260.000đ',
        fmm: {
          chao: 'Chào anh Phúc 👋 An Tâm có gói bảo dưỡng tại nhà cho khách cũ, gửi anh xem trước nha!',
          img: L(IMG['bep']), nhan: 'ƯU ĐÃI KHÁCH CŨ',
          ten: 'Gói thay lõi, vệ sinh máy tại nhà', mo: 'Khách cũ giảm 15%, đo nước miễn phí.', nut: 'Xem gói',
        },
        zbs: {
          ten: 'Tặng anh Phúc voucher 300.000đ',
          mo: 'Cảm ơn anh đã chọn Lọc Nước An Tâm. Gửi anh ưu đãi cho lần mua tiếp theo:',
          dong: [['Mã voucher', '**ANTAM300**'], ['Ưu đãi', 'Giảm 300.000đ đơn từ 1.000.000đ'], ['Hạn dùng', '31/03/2027']],
          nut: 'Dùng voucher ngay',
        },
      },
      bamDuoi: {
        cmpDung: ['Khách nhắn xong im → nhắc đúng máy khách đã xem (thẻ <b>#MayLocRONongLanh</b> từ quảng cáo)',
                  'Báo giá xong im → bám đuổi theo giá: ưu đãi, quà tặng (thẻ <b>#HoiGia</b>)',
                  'Đúng nhu cầu, đúng lý do im → khách quay lại mua'],
        hoi: 'Máy lọc RO nóng lạnh giá bao nhiêu shop?',
        traLoiThuong: 'Dạ máy giá 8.490.000đ ạ.',
        refImg: L(IMG['may-loc-2']), refTen: 'Máy lọc nước RO nóng lạnh',
        vd1: {
          kh: 'Máy này lọc nước giếng được không shop?',
          ai: 'Dạ được ạ! Nước nhà mình có bị vàng, tanh mùi sắt không, nhà mấy người dùng để em tư vấn đúng bộ lọc nha?',
          tag: '🏷 #MayLocRONongLanh', tagNote: 'thẻ từ quảng cáo · khách im 1 ngày',
          nhac: 'Anh ơi, em gửi anh <b>ảnh thật máy RO nóng lạnh</b> lắp cho nhà khách dùng nước giếng phèn, kèm <b>kết quả đo nước trước và sau lọc</b> ạ 😊',
          dung: '🎯 Theo thẻ #MayLocRONongLanh: nhắc đúng máy khách xem',
          khach: 'Nước nhà a vàng lắm, gửi a xem',
        },
        vd2: {
          kh: 'Máy với cột lọc đầu nguồn tổng bao nhiêu e?',
          ai: 'Dạ combo <b>máy RO nóng lạnh + cột lọc đầu nguồn</b> là <b>11.390.000đ</b>, lắp đặt miễn phí ạ.',
          tag: '🏷 #HoiGia', tagNote: 'báo giá xong khách im 1 ngày',
          nhac: 'Anh ơi, combo anh hỏi giá hôm qua, hôm nay em <b>giảm 700.000đ + tặng bộ lõi thô thay lần đầu</b> ạ. Em xếp lịch kỹ thuật qua đo nước cho anh nha?',
          dung: '🎯 Theo thẻ #HoiGia: bám đuổi theo giá, đúng lý do khách im',
          khach: 'Ok xếp cho a cuối tuần',
        },
      },
      binhLuan: {
        post: 'Máy lọc nước <b>RO nóng lạnh</b> · lọc phèn, sắt, vi khuẩn, kiểm tra nước và lắp đặt miễn phí 💧',
        img: L(IMG['bep']),
        kav: 'TH', kten: 'Thanh Hà', hoi: 'Nhà mình dùng nước máy nhưng hay có mùi clo, 6 người dùng thì máy nào hợp shop?',
        traLoi: 'Dạ chào chị Hà! Shop vừa nhắn tin tư vấn chi tiết cho chị, chị xem tin nhắn nhé 💬',
        act2: 'Nhắn tin riêng tư vấn đúng máy',
        nhan: 'Chào chị Hà! Nước máy có mùi clo thì <b>lõi than hoạt tính</b> trong máy RO khử mùi tốt ạ. Nhà 6 người chị chọn <b>bản công suất lớn 15 lít/giờ</b> để nấu ăn, uống đủ. Chị ở khu nào để em xếp kỹ thuật qua đo nước miễn phí nha!',
        sp: { ten: 'Máy lọc RO nóng lạnh 15 lít/giờ', gia: '9.290.000đ', img: L(IMG['bep']) },
        khach: 'Mình ở Thủ Đức em nhé',
      },
      duLieu: {
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: lọc gì cũng được, lâu mới thay lõi', 'Máy nghẹt, nước yếu, khách khiếu nại'],
        hoi: 'Nước giếng phèn nặng cho vào thẳng máy luôn được không em? Lõi dùng 3 năm mới thay hả?',
        aiSai: 'Dạ được ạ! Cho nước giếng vào thẳng luôn, <b>lõi 3 năm mới phải thay</b> anh nhé 🥰',
        thucTe: '⚠ Thực tế: phèn nặng cần cột lọc đầu nguồn, lõi thô thay 6 tháng/lần',
        gian: 'Mới 3 tháng máy đã yếu, nước ra nhỏ giọt! Sao bảo 3 năm? 😠',
        cho: 'Dạ anh chờ em một chút để em kiểm tra chính xác nguồn nước và lịch thay lõi cho mình nhé!',
        nv: 'Kỹ thuật Khánh · người thật',
        nvTraLoi: 'Dạ nước giếng phèn nặng làm lõi thô nghẹt nhanh anh ạ. Em qua đo nước, thay lõi và tư vấn cột lọc đầu nguồn để máy chạy ổn định nhé!',
      },
    },
  };
})();
