/* Kịch bản: MÁY NÔNG NGHIỆP (máy xới đất, máy bơm, máy phun thuốc, máy cắt cỏ, máy cày mini) — BẢN TRÌNH CHIẾU, nhóm THƯƠNG MẠI ĐIỆN TỬ.
   Làm 17/11/2026 theo pipeline mới (TRINH-CHIEU.md mục 1). Demo chat chuẩn thương mại điện tử (mục 3), một mạch:
     anh Dũng (1,5ha cà phê đất đỏ bazan ở Đắk Lắk) gửi ảnh máy xới hỏi giá, so với máy xăng 6,9 triệu trên mạng
     → AI khuyên máy dầu 7HP (vườn rộng, đất chặt, chạy cả buổi), hàng cà phê 3m vẫn lọt, thay dàn vun gốc làm quanh năm
     → anh im (cuối vụ kẹt tiền) → bám đuổi 2 tin theo thẻ #MayXoiDau7HP (ảnh máy chạy thật), #HoiGia (giảm giá + tặng dàn vun gốc)
     → chốt, lên đơn giao tận vườn, nhận máy mới trả tiền → chăm sóc sau bán: dặn thay nhớt 20 giờ đầu, mùa khô gợi ý máy bơm.
   Không có tin tự động cập nhật vận chuyển. Không có bước kết thúc: bấm → là sang slide kế.
   Tên shop, giá, chính sách, tên khách, SĐT: dữ liệu minh họa. Ảnh: Unsplash (ảnh thật, không phải hàng của shop). */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'may-xoi': '1609992285716-5f33f03379ec',        // máy xới đất (cận cảnh)
    'may-xoi-2': '1768664355346-8c925e4c4e61',      // nông dân chạy máy xới ngoài ruộng
    'may-xoi-3': '1650106064812-aa4a122916df',      // xới đất khô
    'may-xoi-xanh': '1630267693768-824c7b5aaa1b',   // máy xới lắp dàn xới
    'xoi-ruong': '1532929900024-6413d2ed39c8',      // xới ruộng ngập nước
    'may-cay': '1602621654899-73f01065284f',        // máy cày 4 bánh
    'cat-co': '1793441410243-e1c4e47a1a65',         // máy cắt cỏ cầm tay
    'bom-nuoc': '1700318092011-6e4666e94ab5',       // máy bơm nước
    'phun-thuoc': '1593999094742-4f5280054b23',     // bình phun thuốc đeo vai
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    shop: { name: 'Nông Cơ Đồng Xanh', initials: 'ĐX' },
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
        kws: ['Trả lời ngay tức thì, 24/7', 'Nhận diện đúng máy từ ảnh khách gửi', 'Hỏi diện tích, loại đất để chọn máy', 'So máy dầu, máy xăng cho đúng nhu cầu', 'Báo bảo hành, giao tận vườn, chủ động chốt'] },
      { title: 'AI tự động bám đuổi khách hàng trong 7 ngày', desc: 'Tăng thêm khoảng 35% tỷ lệ chốt đơn.',
        kws: ['~65% khách nhắn tin rồi im lặng', 'Tự gắn thẻ máy khách xem, lý do im', 'Gửi ảnh máy chạy thật đúng loại đất', 'Báo giá xong im → ưu đãi giá đúng lúc'] },
      { title: 'AI Agent tự động lên đơn và gửi sang đơn vị vận chuyển', desc: 'Tiết kiệm hơn 90% thời gian xử lý đơn.',
        kws: ['Thu đủ tên, SĐT, địa chỉ vườn', 'Gửi tin xác nhận đơn đầy đủ', 'Tự tạo đơn, xếp xe giao tận vườn'] },
      { title: 'AI tự động chăm sóc khách hàng sau bán', desc: 'Tăng doanh thu từ khách hàng cũ.',
        kws: ['Hỏi thăm, dặn bảo dưỡng máy', 'Gợi ý máy theo mùa vụ', 'Khách mua thêm, tăng giá trị vòng đời'] },
    ],

    steps: [
      { intro: true, hold: 1800 },

      /* ---- 1. Tư vấn: ca khó so với máy xăng rẻ hơn, hàng cà phê hẹp ---- */
      { feature: 1 },
      { sep: 'Khách nhắn tin từ quảng cáo Facebook', style: 'time', hold: 800 },
      { img: 'may-xoi', hold: 1500 },
      { kh: 'Máy xới này giá sao shop? Vườn cà phê a 1,5ha ở Đắk Lắk, đất đỏ hơi dốc. Trên mạng thấy máy xăng có 6,9 triệu, mua loại đó được k?' },
      { ai: 'Dạ chào anh! Em tư vấn cho anh ngay ạ 🌱', fast: true, meta: '⚡ Preny AI trả lời sau 2 giây', kw: 0 },
      { ai: 'Mẫu anh gửi là **máy xới đất đa năng chạy dầu 7HP**, giá **11.900.000đ** ạ. Vườn **1,5ha đất đỏ bazan** chạy cả buổi thì anh nên lấy **máy dầu**: khỏe hơn, ít nóng máy, tốn khoảng **1 lít dầu/giờ**.', kw: [1, 2] },
      { ai: 'Máy xăng 6,9 triệu hợp vườn nhỏ **dưới 3 sào** ạ. Đất đỏ chặt mà chạy lâu thì máy xăng **dễ nóng, hao xăng**, mau xuống máy anh nhé.', kw: 3 },
      { kh: 'Hàng cà phê nhà a cách nhau 3m, cành sà thấp, máy có lọt k em? Làm cỏ được k?' },
      { ai: 'Dạ được ạ! Bánh xới **chỉnh rộng 60–90cm**, tay lái **hạ thấp** nên đi lọt hàng 3m, không quẹt cành. Thay **dàn vun gốc, lưỡi làm cỏ** là dùng được quanh năm ạ.', kw: 3 },
      { ai: 'Máy **bảo hành 12 tháng**, phụ tùng có sẵn, **giao tận vườn**, kỹ thuật **chạy thử tại chỗ**, nhận máy rồi mới trả tiền ạ. Anh chốt để em giữ máy nha? 😊', kw: 4 },
      { kh: 'Để a tính đã, cuối vụ hơi kẹt tiền' },

      /* ---- 2. Khách im → bám đuổi 2 tin theo thẻ ---- */
      { feature: 2 },
      { sep: 'Khách chưa phản hồi… · AI gắn thẻ #MayXoiDau7HP #HoiGia', style: 'silent', kw: [0, 1], hold: 1800 },
      { sep: '— 1 ngày sau —' },
      { ai: 'Anh Dũng ơi, em gửi anh **ảnh thật máy xới dầu 7HP** chạy ở vườn khách bên em, đất đỏ dốc y như vườn nhà anh nè 😊', meta: '🔁 Tự động · Bám đuổi theo thẻ #MayXoiDau7HP', kw: 2 },
      { aiImgs: [{ img: 'may-xoi-2', label: 'Xới đất đỏ' }, { img: 'may-xoi-3', label: 'Chạy giữa hàng cây' },
                 { img: 'xoi-ruong', label: 'Xới ruộng ngập' }, { img: 'may-xoi-xanh', label: 'Lắp dàn vun gốc' }], hold: 3200 },
      { sep: '— 2 ngày sau —' },
      { ai: 'Máy xới 7HP anh hỏi giá, chốt trong hôm nay em **giảm 500.000đ còn 11.400.000đ** + **tặng dàn vun gốc**, vẫn giao tận vườn, nhận máy mới trả tiền ạ 🎁', meta: '🔁 Tự động · Bám đuổi theo thẻ #HoiGia', kw: 3 },
      { kh: 'Ok chốt a 1 máy nha em, giao sớm giúp a' },

      /* ---- 3. Lên đơn tự động (không có tin cập nhật vận chuyển) ---- */
      { feature: 3 },
      { ai: 'Dạ anh cho em xin **tên, SĐT và địa chỉ vườn** nha. Xe tải nhỏ có **vào tới vườn** được không anh?', kw: 0 },
      { kh: 'Phan Văn Dũng – 0905 312 468\nThôn 3, xã Ea Tu, TP. Buôn Ma Thuột, Đắk Lắk. Xe tải nhỏ vào tới vườn được em' },
      { card: {
          tag: '✓ Tin xác nhận đơn',
          intro: 'Dạ anh kiểm tra lại đơn giúp em nhé:',
          lines: ['1 Máy xới đất đa năng chạy dầu 7HP', 'Tặng: 1 dàn vun gốc', 'Tổng cộng: **11.400.000đ** · nhận máy mới trả tiền', 'Người nhận: Phan Văn Dũng · 0905 312 468', 'Giao tới: Thôn 3, xã Ea Tu, TP. Buôn Ma Thuột'],
          button: 'Quản lý đơn hàng',
        }, kw: 1, hold: 4500 },
      { kh: 'Ok em' },
      { card: {
          tag: '✓ Đã tạo đơn & gửi vận chuyển', ok: true,
          lines: ['Mã đơn: **#DX31207**', 'Mã vận đơn: **VD80213546**', 'Giao tận vườn: **2–3 ngày**, kỹ thuật chạy thử tại chỗ'],
        }, kw: 2, hold: 3500 },

      /* ---- 4. Chăm sóc sau bán ---- */
      { feature: 4 },
      { sep: '— 1 tuần sau —' },
      { ai: 'Anh Dũng ơi, máy xới chạy ổn không ạ? **20 giờ chạy đầu** anh nhớ **thay nhớt máy** và **xiết lại ốc bánh xới** để máy bền nha 💚', meta: '💚 Tự động · Chăm sóc sau bán', kw: 0 },
      { kh: 'Máy khỏe lắm em, xới đất đỏ ngon lành 👍' },
      { sep: '— 3 tuần sau —' },
      { ai: 'Sắp vào **mùa khô tưới cà phê** rồi anh. Mấy máy anh em làm vườn hay mua kèm, khách cũ **giảm thêm 5%** ạ:', kw: 1 },
      { catalog: [
          { name: 'Máy bơm nước chạy dầu', color: '', price: '4.465.000đ', old: '4.700.000đ', tag: 'Mùa khô', art: 'bom-nuoc' },
          { name: 'Bình phun thuốc chạy điện', color: '20L', price: '1.415.500đ', old: '1.490.000đ', tag: 'Bán chạy', art: 'phun-thuoc' },
          { name: 'Máy cắt cỏ cầm tay', color: '', price: '2.565.000đ', old: '2.700.000đ', tag: '-5%', art: 'cat-co' },
        ], hold: 4000 },
      { kh: 'Lấy a thêm 1 máy bơm nước nha em', kw: 2, hold: 1500 },
      // Không có { end: true }: bấm → thêm một lần là sang thẳng slide kế.
    ],

    /* ===== Nội dung slide trình chiếu (trinh-chieu.html). Slide thống kê dùng số minh họa (deck.dashboard). ===== */
    deck: {
      /* Demo chat dọc (demo-doc.js): tên khách trên Messenger, bài đăng Facebook (anh = khóa trong images), câu bình luận. */
      demoDoc: {
        khach: 'Dũng Phan',
        sanPham: 'Máy xới đất chạy dầu 7HP',
        binhLuan: 'Xin giá máy xới',
        post: {
          tieuDe: 'MÁY XỚI ĐẤT ĐA NĂNG CHẠY DẦU 7HP 🚜',
          dong: ['Khỏe, ít nóng máy', 'Đi lọt hàng cà phê 3m', 'Bảo hành 12 tháng', 'Giao tận vườn, chạy thử'],
          anh: ['may-xoi', 'may-xoi-2', 'may-xoi-3', 'bom-nuoc'],
        },
      },
      /* Pipeline thương mại điện tử 16/11/2026 (TRINH-CHIEU.md mục 1): dashboard, chatbot, afterSale. */
      dashboard: [
        { ten: 'Máy xới, <span class="grad">máy cày mini</span>', den: '21/07/2026', khach: 7, tyLe: 0.55 },
        { ten: 'Máy bơm, <span class="grad">máy phun thuốc</span>', den: '18/08/2026', khach: 10, tyLe: 0.53 },
        { ten: 'Máy gặt, <span class="grad">máy cắt cỏ</span>', den: '26/09/2026', khach: 6, tyLe: 0.57 },
      ],
      chatbot: {
        chat: [
          { ref: { img: L(IMG['may-xoi']), ten: 'Máy xới đất chạy dầu 7HP' } },
          { kh: 'Máy xới này giá sao shop? Vườn cà phê a 1,5ha, đất đỏ hơi dốc' },
          { ai: 'Dạ máy **xới đất chạy dầu 7HP** giá **11.900.000đ** ạ. Vườn 1,5ha đất đỏ bazan anh dùng máy dầu là hợp: **khỏe, ít nóng máy**, tốn khoảng **1 lít dầu/giờ**.', meta: '⚡ Preny AI trả lời sau 2 giây' },
          { kh: 'Hàng cà phê cách nhau 3m, máy có lọt k em?' },
          { ai: 'Dạ bánh xới **chỉnh rộng 60–90cm**, tay lái hạ thấp nên đi lọt hàng 3m. Máy **bảo hành 12 tháng**, **giao tận vườn**, kỹ thuật chạy thử, nhận máy mới trả tiền ạ.' },
          { kh: 'Ok lấy a 1 máy. Phan Văn Dũng, 0905 312 468, Thôn 3, xã Ea Tu, Buôn Ma Thuột' },
          { ai: 'Dạ em lên đơn, xếp xe giao tận vườn cho anh ngay ạ ⚡' },
          { don: true },
          { ok: true },
        ],
        don: {
          ten: 'Phan Văn Dũng', sdt: '0905 312 468', diaChi: 'Thôn 3, xã Ea Tu, TP. Buôn Ma Thuột, Đắk Lắk', ma: '#DX31207', phi: 'giao tận vườn',
          sp: [{ img: L(IMG['may-xoi']), ten: 'Máy xới đất chạy dầu 7HP', sl: 1, gia: 11900000 }],
        },
        anh: {
          img: L(IMG['phun-thuoc']),
          kh: 'Bình phun như hình này bên em có không?',
          ai: 'Dạ hình anh gửi là **bình phun thuốc chạy điện đeo vai** ạ, bình **20 lít**, pin phun liên tục **5–6 tiếng**, giá **1.490.000đ**. Vườn cà phê 1,5ha anh dùng loại này đỡ mỏi tay hơn bình bơm tay nhiều nha.',
        },
      },
      afterSale: {
        loi: 'Cảm ơn anh Dũng đã tin Nông Cơ Đồng Xanh 💚 Anh em làm vườn cà phê hay sắm thêm mấy máy này ạ:',
        sp: [
          { img: L(IMG['bom-nuoc']), ten: 'Máy bơm nước chạy dầu', gia: 4700000 },
          { img: L(IMG['phun-thuoc']), ten: 'Bình phun thuốc chạy điện 20L', gia: 1490000 },
          { img: L(IMG['cat-co']), ten: 'Máy cắt cỏ cầm tay', gia: 2700000 },
          { img: L(IMG['may-xoi-xanh']), ten: 'Dàn vun gốc, lưỡi làm cỏ', gia: 1250000, cu: 1450000 },
          { img: L(IMG['may-cay']), ten: 'Máy cày 4 bánh cỡ nhỏ', gia: 185000000, nut: 'Nhận báo giá' },
        ],
        khach: 'Lấy thêm a máy bơm nước nha, sắp mùa khô',
        pill: '🛍 Khách mua thêm ngay: đơn tăng từ 11.900.000đ lên 16.600.000đ',
        fmm: {
          chao: 'Chào anh Dũng 👋 Mùa khô tới rồi, Nông Cơ Đồng Xanh vừa về máy bơm mới, gửi anh xem trước nha!',
          img: L(IMG['bom-nuoc']), nhan: 'HÀNG MỚI VỀ',
          ten: 'Máy bơm nước chạy dầu tưới cà phê', mo: 'Khách cũ giảm 5%, giao tận vườn.', nut: 'Xem sản phẩm',
        },
        zbs: {
          ten: 'Tặng anh Dũng voucher 300.000đ',
          mo: 'Cảm ơn anh đã mua máy tại Nông Cơ Đồng Xanh. Gửi anh ưu đãi cho lần mua tiếp theo:',
          dong: [['Mã voucher', '**DONGXANH300**'], ['Ưu đãi', 'Giảm 300.000đ đơn từ 3.000.000đ'], ['Hạn dùng', '31/03/2027']],
          nut: 'Dùng voucher ngay',
        },
      },
      bamDuoi: {
        cmpDung: ['Khách nhắn xong im → nhắc đúng máy khách đã xem (thẻ <b>#MayXoiDau7HP</b> từ quảng cáo)',
                  'Báo giá xong im → bám đuổi theo giá: ưu đãi, quà tặng (thẻ <b>#HoiGia</b>)',
                  'Đúng nhu cầu, đúng lý do im → khách quay lại mua'],
        hoi: 'Máy xới đất giá bao nhiêu shop?',
        traLoiThuong: 'Dạ máy giá 11.900.000đ ạ.',
        refImg: L(IMG['may-xoi']), refTen: 'Máy xới đất chạy dầu 7HP',
        vd1: {
          kh: 'Máy xới này còn hàng không shop?',
          ai: 'Dạ còn ạ anh! Vườn nhà mình rộng bao nhiêu, đất gì để em tư vấn đúng máy nha?',
          tag: '🏷 #MayXoiDau7HP', tagNote: 'thẻ từ quảng cáo · khách im 1 ngày',
          nhac: 'Anh ơi, em gửi anh <b>ảnh máy xới dầu 7HP chạy thật trên đất đỏ</b> ở vườn khách bên em. Anh cho em biết diện tích vườn để em tư vấn đúng máy nha 😊',
          dung: '🎯 Theo thẻ #MayXoiDau7HP: nhắc đúng máy khách xem',
          khach: 'Vườn a 1,5ha cà phê em',
        },
        vd2: {
          kh: 'Máy xới dầu 7HP bao nhiêu shop?',
          ai: 'Dạ máy <b>xới dầu 7HP</b> giá <b>11.900.000đ</b>, bảo hành 12 tháng ạ.',
          tag: '🏷 #HoiGia', tagNote: 'báo giá xong khách im 1 ngày',
          nhac: 'Anh ơi, máy xới 7HP anh hỏi giá hôm qua hôm nay em <b>giảm 500.000đ + tặng dàn vun gốc</b>, giao tận vườn ạ. Em giữ máy cho anh nha?',
          dung: '🎯 Theo thẻ #HoiGia: bám đuổi theo giá, đúng lý do khách im',
          khach: 'Ok giữ a 1 máy',
        },
      },
      binhLuan: {
        post: 'Máy xới đất <b>chạy dầu 7HP</b> · đi lọt hàng cà phê, bảo hành 12 tháng, giao tận vườn 🚜',
        img: L(IMG['may-xoi-3']),
        kav: 'NT', kten: 'Nguyễn Thắng', hoi: 'Máy này xới ruộng lúa được không, giao Đồng Tháp bao lâu shop?',
        traLoi: 'Dạ chào anh Thắng! Shop vừa nhắn tin tư vấn chi tiết cho anh, anh xem tin nhắn nhé 💬',
        act2: 'Nhắn tin riêng tư vấn đúng máy',
        nhan: 'Chào anh Thắng! Máy xới dầu 7HP <b>xới được ruộng lúa</b>, anh lắp thêm <b>bánh lồng</b> để máy không lún ạ. Giao Đồng Tháp <b>3–4 ngày</b>. Ruộng nhà mình bao nhiêu công để em tư vấn bánh lồng phù hợp nha!',
        sp: { ten: 'Máy xới đất chạy dầu 7HP', gia: '11.900.000đ', img: L(IMG['may-xoi']) },
        khach: 'Ruộng a 3 công em',
      },
      duLieu: {
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: bảo hành, sửa chữa tận nơi', 'Máy hư không ai sửa, shop mất uy tín'],
        hoi: 'Máy này bảo hành 3 năm đúng không em? Hư thì bên em lên tận vườn sửa luôn hả?',
        aiSai: 'Dạ đúng ạ! Bảo hành <b>3 năm</b>, hư là <b>thợ lên tận vườn sửa miễn phí</b> luôn anh nhé 🥰',
        thucTe: '⚠ Thực tế: bảo hành 12 tháng, sửa tại trạm bảo hành gần nhất',
        gian: 'Máy hư gọi mãi không ai lên sửa! Sao hứa bảo hành 3 năm? 😠',
        cho: 'Dạ anh chờ em một chút để em kiểm tra chính xác chính sách bảo hành, sửa chữa cho mình nhé!',
        nv: 'Kỹ thuật Hòa · người thật',
        nvTraLoi: 'Dạ máy bảo hành 12 tháng anh ạ. Buôn Ma Thuột có trạm bảo hành, máy hư anh gọi em xếp thợ kiểm tra trong 24 giờ nhé!',
      },
    },
  };
})();
