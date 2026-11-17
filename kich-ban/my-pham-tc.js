/* Kịch bản: MỸ PHẨM (sản phẩm chăm sóc da: serum, sữa rửa mặt, toner, kem dưỡng, kem chống nắng) — BẢN TRÌNH CHIẾU, nhóm THƯƠNG MẠI ĐIỆN TỬ.
   Làm 17/11/2026 theo pipeline mới (TRINH-CHIEU.md mục 1). Demo chat chuẩn thương mại điện tử (mục 3), một mạch:
     chị Thảo (da dầu mụn, nhạy cảm, đang bôi thuốc trị mụn bác sĩ kê buổi tối) gửi ảnh serum hỏi dồn, viết tắt:
     dùng chung với thuốc được không, có cồn/hương liệu không, hàng chính hãng không
     → AI dặn thử trên vùng da nhỏ, serum buổi sáng còn thuốc bôi buổi tối, hỏi lại bác sĩ; nói rõ serum không thay thuốc trị mụn;
       báo hóa đơn nhập, date → chị im ("để hỏi bác sĩ") → bám đuổi 2 tin theo thẻ #SerumB5 (ảnh thật, hóa đơn, date), #HoiGia
     → chị quay lại chốt → lên đơn tự động → chăm sóc sau bán: hỏi thăm da sau 3 ngày, dặn thứ tự dùng, nhắc mua lại khi sắp hết,
       gợi ý chống nắng, sữa rửa mặt, toner.
   Ngành mỹ phẩm: AI không chẩn đoán, không hứa "hết mụn", không bảo bỏ thuốc bác sĩ kê (slide "không chế dữ liệu" dựng đúng chỗ này).
   Không có tin tự động cập nhật vận chuyển. Không có bước kết thúc: bấm → là sang slide kế.
   Tên shop, sản phẩm, giá, tên khách, SĐT: dữ liệu minh họa. Ảnh: Unsplash (ảnh thật, không phải hàng của shop). */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'serum': '1781344116880-029945a42b75',        // lọ serum thủy tinh nâu, nắp bóp giọt
    'cham-soc': '1581182800629-7d90925ad072',     // cô gái da căng ẩm, nhắm mắt
    'chong-nang': '1623676714504-edd78728155e',   // chai chống nắng SPF 50, thoa lên tay
    'sua-rua-mat': '1748639320154-6ba118bccc74',  // tuýp sữa rửa mặt dạng gel
    'toner': '1623143445418-40c192fa3d11',        // chai toner hồng có vòi nhấn
    'bo-my-pham': '1583209814683-c023dd293cc6',   // bộ mỹ phẩm màu hồng
    'kem-duong': '1761718209708-9ab9ba1c7252',    // thoa kem dưỡng lên mặt
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    shop: { name: 'Bông Mai Skincare', initials: 'BM' },
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
        kws: ['Trả lời ngay tức thì, 24/7', 'Nhận diện đúng sản phẩm từ ảnh khách gửi', 'Hỏi kỹ loại da, thuốc đang dùng', 'Dặn thử vùng da nhỏ, hỏi lại bác sĩ', 'Báo hóa đơn nhập, date, chủ động chốt'] },
      { title: 'AI tự động bám đuổi khách hàng trong 7 ngày', desc: 'Tăng thêm khoảng 35% tỷ lệ chốt đơn.',
        kws: ['~65% khách nhắn tin rồi im lặng', 'Tự gắn thẻ sản phẩm khách hỏi, lý do im', 'Gửi ảnh thật, hóa đơn nhập, date', 'Báo giá xong im → ưu đãi giá đúng lúc'] },
      { title: 'AI Agent tự động lên đơn và gửi sang đơn vị vận chuyển', desc: 'Tiết kiệm hơn 90% thời gian xử lý đơn.',
        kws: ['Thu đủ tên, SĐT, địa chỉ', 'Gửi tin xác nhận đơn đầy đủ', 'Tự tạo đơn, đẩy sang đơn vị vận chuyển'] },
      { title: 'AI tự động chăm sóc khách hàng sau bán', desc: 'Tăng doanh thu từ khách hàng cũ.',
        kws: ['Hỏi thăm da, dặn thứ tự dùng', 'Nhắc mua lại khi sắp hết', 'Gợi ý sản phẩm hợp da, khách mua thêm'] },
    ],

    steps: [
      { intro: true, hold: 1800 },

      /* ---- 1. Tư vấn: da dầu mụn nhạy cảm, đang bôi thuốc bác sĩ kê, hỏi dồn ---- */
      { feature: 1 },
      { sep: 'Khách nhắn tin từ quảng cáo Facebook', style: 'time', hold: 800 },
      { img: 'serum', hold: 1500 },
      { kh: 'Serum này da dầu mụn xài đc k shop? Da c nhạy cảm, tối đang bôi thuốc trị mụn bs kê. Dùng chung đc k, có cồn hương liệu k? Hàng auth k e?' },
      { ai: 'Dạ em chào chị! Em tư vấn cho chị ngay ạ 🌸', fast: true, meta: '⚡ Preny AI trả lời sau 2 giây', kw: 0 },
      { ai: 'Mẫu chị gửi là **Serum B5 + rau má** (lọ 30ml), giá **420.000đ** ạ. Serum **không cồn khô, không hương liệu**, mỏng nhẹ, giúp **làm dịu, cấp ẩm** cho da dầu, nhạy cảm.', kw: [1, 2] },
      { ai: 'Chị đang bôi thuốc bác sĩ kê thì dùng **serum buổi sáng**, **thuốc bôi buổi tối**, không bôi chồng lên nhau ạ. Chị **thử trên vùng da nhỏ** (quai hàm) 2–3 ngày trước, và **hỏi lại bác sĩ** đang điều trị cho chắc nha.', kw: 3 },
      { ai: 'Serum **không thay thuốc trị mụn** đâu chị, chỉ giúp da đỡ khô bong khi bôi thuốc. Hàng **chính hãng có hóa đơn nhập**, **date 2028** in trên vỏ ạ. Chị lấy 1 lọ để em giữ hàng, freeship luôn nha? 😊', kw: 4 },
      { kh: 'Để c hỏi bs đã nha e' },

      /* ---- 2. Khách im → bám đuổi 2 tin theo thẻ ---- */
      { feature: 2 },
      { sep: 'Khách chưa phản hồi… · AI gắn thẻ #SerumB5 #HoiGia', style: 'silent', kw: [0, 1], hold: 1800 },
      { sep: '— 1 ngày sau —' },
      { ai: 'Chị Thảo ơi, em gửi chị **ảnh thật lọ serum B5**, **hóa đơn nhập** và **date** để chị yên tâm nha. Chị hỏi bác sĩ được chưa ạ? Cần em dặn thêm cách dùng cứ nhắn em nha 😊', meta: '🔁 Tự động · Bám đuổi theo thẻ #SerumB5', kw: 2 },
      { aiImgs: [{ img: 'serum', label: 'Lọ 30ml · date 2028' }, { img: 'cham-soc', label: 'Thấm nhanh, không bết' },
                 { img: 'bo-my-pham', label: 'Hàng nhập, có hóa đơn' }, { img: 'kem-duong', label: 'Dịu da, đỡ khô bong' }], hold: 3200 },
      { sep: '— 2 ngày sau —' },
      { ai: 'Serum B5 chị hỏi giá, chốt trong hôm nay em **giảm 10% còn 378.000đ** + **tặng sữa rửa mặt gel mini**, vẫn freeship ạ 🎁', meta: '🔁 Tự động · Bám đuổi theo thẻ #HoiGia', kw: 3 },
      { kh: 'Bs bảo serum dùng buổi sáng đc. Lấy c 1 lọ nha e' },

      /* ---- 3. Lên đơn tự động (không có tin cập nhật vận chuyển) ---- */
      { feature: 3 },
      { ai: 'Dạ chị cho em xin **tên, SĐT và địa chỉ** nhận hàng nha. Chị đang dùng **sữa rửa mặt** loại nào ạ, để em ghi kèm **thứ tự dùng** cho đúng?', kw: 0 },
      { kh: 'Nguyễn Ngọc Thảo – 0938 216 457\n12 Lê Văn Sỹ, P. Phú Nhuận, TP.HCM. Sữa rửa mặt c dùng loại tạo bọt' },
      { card: {
          tag: '✓ Tin xác nhận đơn',
          intro: 'Dạ chị kiểm tra lại đơn giúp em nhé:',
          lines: ['1 Serum B5 + rau má 30ml', 'Tặng: 1 sữa rửa mặt gel mini', 'Tổng cộng: **378.000đ** (freeship)', 'Người nhận: Nguyễn Ngọc Thảo · 0938 216 457', 'Địa chỉ: 12 Lê Văn Sỹ, P. Phú Nhuận, TP.HCM'],
          button: 'Quản lý đơn hàng',
        }, kw: 1, hold: 4500 },
      { kh: 'Ok em' },
      { card: {
          tag: '✓ Đã tạo đơn & gửi vận chuyển', ok: true,
          lines: ['Mã đơn: **#BM41207**', 'Mã vận đơn: **VD62093175**', 'Dự kiến giao: 1–2 ngày, kèm giấy thứ tự dùng'],
        }, kw: 2, hold: 3500 },

      /* ---- 4. Chăm sóc sau bán ---- */
      { feature: 4 },
      { sep: '— 3 ngày sau —' },
      { ai: 'Chị Thảo ơi, da chị dùng serum 3 ngày thấy sao ạ? Chị nhớ **sáng: rửa mặt → serum → chống nắng**, **tối: rửa mặt → thuốc bôi bác sĩ kê** nha. Da **rát, đỏ** thì chị ngưng serum và hỏi bác sĩ giúp em 💚', meta: '💚 Tự động · Chăm sóc sau bán', kw: 0 },
      { kh: 'Da c dịu hơn, đỡ khô bong rồi e 👍' },
      { sep: '— 4 tuần sau —' },
      { ai: 'Lọ serum 30ml dùng khoảng **5–6 tuần**, sắp hết rồi chị ạ. Da dầu mụn hay dùng kèm mấy món này, khách cũ **giảm thêm 10%** nè:', kw: [1, 2] },
      { catalog: [
          { name: 'Sữa chống nắng SPF 50', sub: 'Chai 50ml', price: '279.000đ', old: '310.000đ', tag: 'Da dầu', art: 'chong-nang' },
          { name: 'Sữa rửa mặt dạng gel', sub: 'Tuýp 100ml', price: '189.000đ', old: '210.000đ', tag: 'Dịu nhẹ', art: 'sua-rua-mat' },
          { name: 'Toner không cồn', sub: 'Chai 150ml', price: '225.000đ', old: '250.000đ', tag: 'Bán chạy', art: 'toner' },
        ], hold: 4000 },
      { kh: 'Lấy c thêm 1 lọ serum với 1 chai chống nắng nha e', kw: 2, hold: 1500 },
      // Không có { end: true }: bấm → thêm một lần là sang thẳng slide kế.
    ],

    /* ===== Nội dung slide trình chiếu (trinh-chieu.html). Slide thống kê dùng số minh họa (deck.dashboard). ===== */
    deck: {
      /* Demo chat dọc (demo-doc.js): tên khách trên Messenger, bài đăng Facebook (anh = khóa trong images), câu bình luận. */
      demoDoc: {
        khach: 'Ngọc Thảo',
        sanPham: 'Serum B5 + rau má 30ml',
        binhLuan: 'Da dầu mụn dùng được k shop',
        post: {
          tieuDe: 'SERUM B5 + RAU MÁ – DỊU DA, CẤP ẨM 🌿',
          dong: ['Không cồn khô, không hương liệu', 'Hợp da dầu, da nhạy cảm', 'Có hóa đơn nhập, date rõ', 'Freeship đơn từ 300k'],
          anh: ['serum', 'cham-soc', 'sua-rua-mat', 'chong-nang'],
        },
      },
      /* Pipeline thương mại điện tử 16/11/2026 (TRINH-CHIEU.md mục 1): dashboard, chatbot, afterSale. */
      dashboard: [
        { ten: 'Mỹ phẩm <span class="grad">chăm sóc da</span>', den: '24/07/2026', khach: 15, tyLe: 0.55 },
        { ten: 'Shop <span class="grad">mỹ phẩm nhập khẩu</span>', den: '22/08/2026', khach: 12, tyLe: 0.53 },
        { ten: 'Mỹ phẩm <span class="grad">thiên nhiên</span>', den: '30/09/2026', khach: 9, tyLe: 0.57 },
      ],
      chatbot: {
        chat: [
          { ref: { img: L(IMG['serum']), ten: 'Serum B5 + rau má 30ml' } },
          { kh: 'Serum này da dầu mụn xài đc k shop? Tối c đang bôi thuốc trị mụn bs kê' },
          { ai: 'Dạ **Serum B5 + rau má** giá **420.000đ**, **không cồn khô, không hương liệu** ạ. Chị dùng **serum buổi sáng**, **thuốc bôi buổi tối**, thử trên vùng da nhỏ trước và **hỏi lại bác sĩ** cho chắc nha.', meta: '⚡ Preny AI trả lời sau 2 giây' },
          { kh: 'Hàng auth k em? Còn date xa k?' },
          { ai: 'Dạ hàng **chính hãng, có hóa đơn nhập**, **date 2028** in trên vỏ ạ. Đang **freeship**, tặng kèm **sữa rửa mặt gel mini** nha chị.' },
          { kh: 'Ok lấy c 1 lọ. Ngọc Thảo, 0938 216 457, 12 Lê Văn Sỹ, Phú Nhuận, HCM' },
          { ai: 'Dạ em lên đơn cho chị ngay ạ ⚡' },
          { don: true },
          { ok: true },
        ],
        don: {
          ten: 'Nguyễn Ngọc Thảo', sdt: '0938 216 457', diaChi: '12 Lê Văn Sỹ, P. Phú Nhuận, TP.HCM', ma: '#BM41207', phi: 'freeship',
          sp: [{ img: L(IMG['serum']), ten: 'Serum B5 + rau má 30ml', sl: 1, gia: 420000 }],
        },
        anh: {
          img: L(IMG['chong-nang']),
          kh: 'Chống nắng như hình này da dầu xài đc k shop?',
          ai: 'Dạ mẫu chị gửi là **sữa chống nắng SPF 50**, chất lỏng nhẹ, **kiềm dầu, không bết**, giá **310.000đ** ạ. Da dầu mụn dùng hợp, chị thoa **trước khi ra nắng 15 phút** nha.',
        },
      },
      afterSale: {
        loi: 'Cảm ơn chị Thảo đã tin Bông Mai Skincare 🌸 Da dầu mụn hay dùng kèm mấy món này ạ:',
        sp: [
          { img: L(IMG['chong-nang']), ten: 'Sữa chống nắng SPF 50', gia: 310000 },
          { img: L(IMG['sua-rua-mat']), ten: 'Sữa rửa mặt dạng gel', gia: 210000 },
          { img: L(IMG['toner']), ten: 'Toner không cồn 150ml', gia: 250000, cu: 290000 },
          { img: L(IMG['kem-duong']), ten: 'Kem dưỡng ẩm phục hồi', gia: 350000 },
          { img: L(IMG['bo-my-pham']), ten: 'Bộ dưỡng da cơ bản 4 món', gia: 990000 },
        ],
        khach: 'Lấy thêm c 1 chai chống nắng nha',
        pill: '🛍 Khách mua thêm ngay: đơn tăng từ 420.000đ lên 730.000đ',
        fmm: {
          chao: 'Chào chị Thảo 👋 Lọ serum B5 của chị sắp hết rồi ạ, em gửi chị ưu đãi mua lại nha!',
          img: L(IMG['serum']), nhan: 'MUA LẠI GIẢM 10%',
          ten: 'Serum B5 + rau má 30ml', mo: 'Khách cũ giảm 10%, freeship toàn quốc.', nut: 'Mua lại ngay',
        },
        zbs: {
          ten: 'Tặng chị Thảo voucher 50.000đ',
          mo: 'Cảm ơn chị đã tin dùng sản phẩm tại Bông Mai Skincare. Gửi chị ưu đãi cho lần mua tiếp theo:',
          dong: [['Mã voucher', '**BONGMAI50**'], ['Ưu đãi', 'Giảm 50.000đ đơn từ 400.000đ'], ['Hạn dùng', '31/01/2027']],
          nut: 'Dùng voucher ngay',
        },
      },
      bamDuoi: {
        cmpDung: ['Khách nhắn xong im → nhắc đúng sản phẩm khách hỏi (thẻ <b>#SerumB5</b> từ quảng cáo)',
                  'Báo giá xong im → bám đuổi theo giá: ưu đãi, quà tặng (thẻ <b>#HoiGia</b>)',
                  'Đúng nhu cầu, đúng lý do im → khách quay lại mua'],
        hoi: 'Serum này giá bao nhiêu shop?',
        traLoiThuong: 'Dạ giá 420.000đ ạ.',
        refImg: L(IMG['serum']), refTen: 'Serum B5 + rau má 30ml',
        vd1: {
          kh: 'Serum này da dầu mụn dùng được không shop?',
          ai: 'Dạ được ạ! Chị đang dùng thuốc bôi hay sản phẩm trị mụn nào không để em dặn cách dùng cho đúng nha?',
          tag: '🏷 #SerumB5', tagNote: 'thẻ từ quảng cáo · khách im 1 ngày',
          nhac: 'Chị ơi, em gửi chị <b>ảnh thật lọ serum B5, hóa đơn nhập và date</b> để chị yên tâm nha. Da chị dầu nhiều hay hỗn hợp để em dặn cách dùng ạ 😊',
          dung: '🎯 Theo thẻ #SerumB5: nhắc đúng sản phẩm khách hỏi',
          khach: 'Da c dầu, hay nổi mụn em',
        },
        vd2: {
          kh: 'Serum B5 bao nhiêu shop?',
          ai: 'Dạ serum <b>B5 + rau má</b> giá <b>420.000đ</b>, freeship ạ.',
          tag: '🏷 #HoiGia', tagNote: 'báo giá xong khách im 1 ngày',
          nhac: 'Chị ơi, serum chị hỏi giá hôm qua hôm nay em <b>giảm 10% + tặng sữa rửa mặt mini</b>, đến hết hôm nay thôi ạ. Em giữ hàng cho chị nha?',
          dung: '🎯 Theo thẻ #HoiGia: bám đuổi theo giá, đúng lý do khách im',
          khach: 'Ok giữ c 1 lọ',
        },
      },
      binhLuan: {
        post: 'Sữa chống nắng <b>SPF 50</b> cho da dầu · kiềm dầu, không bết, freeship đơn từ 300k ☀️',
        img: L(IMG['chong-nang']),
        kav: 'MA', kten: 'Minh Anh', hoi: 'Da mình đang treatment, bôi kem này có bị kích ứng không shop?',
        traLoi: 'Dạ chào bạn Minh Anh! Shop vừa nhắn tin tư vấn chi tiết cho bạn, bạn xem tin nhắn nhé 💬',
        act2: 'Nhắn tin riêng tư vấn đúng loại da',
        nhan: 'Chào bạn Minh Anh! Da đang treatment bạn <b>thử trên vùng da nhỏ</b> 1–2 ngày trước nha. Kem <b>không cồn khô, không hương liệu</b>, giá <b>310.000đ</b>. Bạn đang dùng gì để shop dặn thứ tự bôi ạ?',
        sp: { ten: 'Sữa chống nắng SPF 50', gia: '310.000đ', img: L(IMG['chong-nang']) },
        khach: 'Mình đang bôi thuốc bs kê',
      },
      duLieu: {
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: hết mụn, thay được thuốc', 'Da kích ứng, shop mất uy tín'],
        hoi: 'Dùng serum này là hết mụn, bỏ thuốc bác sĩ kê được đúng không em?',
        aiSai: 'Dạ đúng ạ! Dùng 2 tuần là <b>hết sạch mụn</b>, <b>bỏ thuốc</b> luôn được chị 🥰',
        thucTe: '⚠ Thực tế: serum làm dịu, cấp ẩm, không thay thế thuốc trị mụn',
        gian: 'Bỏ thuốc xong mụn nổi lại đầy mặt! Sao tư vấn bậy vậy? 😠',
        cho: 'Dạ chị chờ em một chút để chuyên viên kiểm tra lại thông tin chính xác cho mình nhé!',
        nv: 'Chuyên viên da Vy · người thật',
        nvTraLoi: 'Dạ serum chỉ giúp dịu da, cấp ẩm, không thay thuốc trị mụn ạ. Chị cứ bôi thuốc bác sĩ kê buổi tối, serum dùng buổi sáng và tái khám đúng hẹn nhé!',
      },
    },
  };
})();
