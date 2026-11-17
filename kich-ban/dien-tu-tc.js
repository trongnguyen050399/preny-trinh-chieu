/* Kịch bản: BÁN LẺ ĐIỆN TỬ (điện thoại đã qua sử dụng, phụ kiện) — BẢN TRÌNH CHIẾU, nhóm THƯƠNG MẠI ĐIỆN TỬ.
   Làm 17/11/2026 theo pipeline mới (TRINH-CHIEU.md mục 1). Demo chat chuẩn thương mại điện tử (mục 3), một mạch:
     anh Huy gửi ảnh hỏi iPhone 15 Pro Max 256GB like new, hỏi dồn viết tắt: máy zin hay dựng, dính iCloud không, pin bao nhiêu
     → AI báo đúng máy, pin 91%, thoát iCloud, check IMEI, chỉ cách tự xem Lịch sử bộ phận và dịch vụ; ca khó so máy 16,9 triệu
       chỗ khác → AI chỉ ra máy rẻ hơn thường pin thấp, đã thay linh kiện; bảo hành 12 tháng, 1 đổi 1 30 ngày, mời xem máy trực tiếp
     → anh im → bám đuổi 2 tin theo thẻ #IPhone15ProMax (ảnh máy thật, kiểm tra máy, quà kèm), #HoiGia (giảm giá + cường lực)
     → chốt, lên đơn COD (hỏi màu ốp tặng kèm) → chăm sóc sau bán: dặn sạc đúng cách; gợi ý tai nghe, sạc nhanh, sạc dự phòng.
   Không có tin tự động cập nhật vận chuyển. Không có bước kết thúc: bấm → là sang slide kế.
   Tên shop, giá, chính sách, tên khách, SĐT: dữ liệu minh họa ("iPhone 15 Pro Max" là tên sản phẩm, không phải tên shop).
   Ảnh: Unsplash (ảnh thật, không phải hàng của shop). */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'iphone': '1758186378952-68ac2d1c8d39',        // 2 máy iPhone Pro mặt lưng titan
    'iphone-2': '1511707171634-5f897ff02aa9',      // iPhone đời cũ màn tai thỏ, mặt trước
    'kiem-tra': '1550041473-d296a3a8a18a',         // kỹ thuật mở máy kiểm tra bo mạch
    'op-lung': '1692780256774-198bc0a3bbf0',       // ốp lưng vân carbon từ tính nhiều màu
    'tai-nghe': '1606841837239-c5a1a4a07af7',      // tai nghe không dây hộp sạc trắng
    'sac': '1731616103600-3fe7ccdc5a59',           // củ sạc nhanh kèm cáp
    'sac-du-phong': '1706275399494-fb26bbc5da63',  // sạc dự phòng vỏ nhôm
    'linh-kien': '1769085794153-54fd3d57efaf',     // pin, bo mạch bên trong laptop
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    shop: { name: 'Khang Phúc Mobile', initials: 'KP' },
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
        kws: ['Trả lời ngay tức thì, 24/7', 'Báo đúng máy: dung lượng, màu, % pin', 'Cam kết zin, thoát iCloud, check IMEI', 'Giải thích vì sao máy chỗ khác rẻ hơn', 'Bảo hành, 1 đổi 1, mời xem máy trực tiếp'] },
      { title: 'AI tự động bám đuổi khách hàng trong 7 ngày', desc: 'Tăng thêm khoảng 35% tỷ lệ chốt đơn.',
        kws: ['~65% khách nhắn tin rồi im lặng', 'Tự gắn thẻ máy khách xem, lý do im', 'Gửi ảnh máy thật, quy trình kiểm tra', 'Báo giá xong im → ưu đãi giá đúng lúc'] },
      { title: 'AI Agent tự động lên đơn và gửi sang đơn vị vận chuyển', desc: 'Tiết kiệm hơn 90% thời gian xử lý đơn.',
        kws: ['Thu đủ tên, SĐT, địa chỉ, quà kèm', 'Gửi tin xác nhận đơn đầy đủ', 'Tự tạo đơn, gửi COD kiểm tra máy'] },
      { title: 'AI tự động chăm sóc khách hàng sau bán', desc: 'Tăng doanh thu từ khách hàng cũ.',
        kws: ['Hỏi thăm, dặn sạc đúng cách', 'Gợi ý phụ kiện hợp máy khách dùng', 'Khách mua thêm, tăng giá trị vòng đời'] },
    ],

    steps: [
      { intro: true, hold: 1800 },

      /* ---- 1. Tư vấn: ca khó sợ máy dựng, dính iCloud, so máy rẻ hơn ---- */
      { feature: 1 },
      { sep: 'Khách nhắn tin từ quảng cáo Facebook', style: 'time', hold: 800 },
      { img: 'iphone', hold: 1500 },
      { kh: '15PM 256 like new còn k shop? Bn? Máy zin hay dựng lại, có dính icloud k, pin bn %?' },
      { ai: 'Dạ chào anh! Máy bên em còn sẵn ạ 📱', fast: true, meta: '⚡ Preny AI trả lời sau 2 giây', kw: 0 },
      { ai: 'Máy anh hỏi là **iPhone 15 Pro Max 256GB** like new 99%, màu **Titan tự nhiên**, giá **18.490.000đ** ạ. Máy **pin 91%**, **zin nguyên bản**, chưa sửa chữa, chưa thay linh kiện.', kw: 1 },
      { ai: 'Máy bên em đều đã **thoát iCloud, ID sạch** và **check IMEI** trước khi bán. Anh vào **Cài đặt > Cài đặt chung > Giới thiệu**, mục **Lịch sử bộ phận và dịch vụ**: máy thay màn, thay pin là hiện ngay, anh **tự kiểm tra** được ạ.', kw: 2 },
      { kh: 'Chỗ khác báo a 16tr9 cũng 15PM 256, sao bên e cao hơn v?' },
      { ai: 'Dạ máy 16,9 triệu anh hỏi kỹ giúp em **pin bao nhiêu %**, đã **thay màn, thay pin** chưa, có phải **máy khóa mạng** không ạ. Máy rẻ hơn 1,5 triệu thường **pin dưới 85%** hoặc **đã thay linh kiện**, dùng vài tháng là lộ lỗi.', kw: 3 },
      { ai: 'Máy bên em **bảo hành 12 tháng**, **1 đổi 1 trong 30 ngày** nếu lỗi phần cứng. Anh **qua shop xem máy trực tiếp**, test thoải mái rồi mới mua ạ. Em giữ máy cho anh nha? 😊', kw: 4 },
      { kh: 'Để a tính đã, cuối tuần a qua xem' },

      /* ---- 2. Khách im → bám đuổi 2 tin theo thẻ ---- */
      { feature: 2 },
      { sep: 'Khách chưa phản hồi… · AI gắn thẻ #IPhone15ProMax #HoiGia', style: 'silent', kw: [0, 1], hold: 1800 },
      { sep: '— 1 ngày sau —' },
      { ai: 'Anh Huy ơi, em gửi anh **ảnh thật máy 15 Pro Max** anh hỏi và ảnh **kỹ thuật kiểm tra từng máy** nè. Lấy máy bên em **tặng ốp lưng**, máy cũ của anh em **thu lại trợ giá** nha 😊', meta: '🔁 Tự động · Bám đuổi theo thẻ #IPhone15ProMax', kw: 2 },
      { aiImgs: [{ img: 'iphone', label: 'Máy thật tại shop' }, { img: 'kiem-tra', label: 'Kiểm tra từng máy' },
                 { img: 'op-lung', label: 'Tặng ốp lưng' }, { img: 'iphone-2', label: 'Thu máy cũ trợ giá' }], hold: 3200 },
      { sep: '— 2 ngày sau —' },
      { ai: 'Máy 15 Pro Max anh hỏi giá, chốt trong hôm nay em **giảm 500.000đ còn 17.990.000đ** + **tặng dán cường lực**, ship COD **kiểm tra máy rồi mới trả tiền** ạ 🎁', meta: '🔁 Tự động · Bám đuổi theo thẻ #HoiGia', kw: 3 },
      { kh: 'Ok chốt a máy đó nha em, a bận ko qua đc, ship giúp a' },

      /* ---- 3. Lên đơn tự động (không có tin cập nhật vận chuyển) ---- */
      { feature: 3 },
      { ai: 'Dạ anh cho em xin **tên, SĐT và địa chỉ nhận máy** nha. Ốp lưng tặng kèm anh lấy màu **đen, xanh hay đỏ** ạ?', kw: 0 },
      { kh: 'Lê Quang Huy – 0976 154 382\n52 Nguyễn Văn Linh, Hải Châu, Đà Nẵng. Ốp màu đen nha em' },
      { card: {
          tag: '✓ Tin xác nhận đơn',
          intro: 'Dạ anh kiểm tra lại đơn giúp em nhé:',
          lines: ['1 iPhone 15 Pro Max 256GB · Titan tự nhiên · pin 91%', 'Tặng: ốp lưng đen + dán cường lực', 'Tổng cộng: **17.990.000đ** · COD, kiểm tra máy rồi trả tiền', 'Người nhận: Lê Quang Huy · 0976 154 382', 'Giao tới: 52 Nguyễn Văn Linh, Hải Châu, Đà Nẵng'],
          button: 'Quản lý đơn hàng',
        }, kw: 1, hold: 4500 },
      { kh: 'Ok em' },
      { card: {
          tag: '✓ Đã tạo đơn & gửi vận chuyển', ok: true,
          lines: ['Mã đơn: **#KP70925**', 'Mã vận đơn: **VD39581274**', 'Dự kiến giao: **2–3 ngày**, bảo hành 12 tháng theo IMEI'],
        }, kw: 2, hold: 3500 },

      /* ---- 4. Chăm sóc sau bán ---- */
      { feature: 4 },
      { sep: '— 1 tuần sau —' },
      { ai: 'Anh Huy ơi, máy dùng ổn không ạ? Để pin bền anh dùng **củ sạc, cáp đạt chuẩn**, đừng dùng sạc trôi nổi, hạn chế **vừa sạc vừa chơi game**, bật **sạc tối ưu** trong Cài đặt > Pin nha 💚', meta: '💚 Tự động · Chăm sóc sau bán', kw: 0 },
      { kh: 'Máy ngon em, pin trâu lắm 👍' },
      { sep: '— 2 tuần sau —' },
      { ai: 'Mấy phụ kiện khách dùng 15 Pro Max hay mua thêm, khách cũ **giảm 10%** ạ:', kw: 1 },
      { catalog: [
          { name: 'Tai nghe không dây chống ồn', color: 'Trắng', price: '1.161.000đ', old: '1.290.000đ', tag: 'Bán chạy', art: 'tai-nghe' },
          { name: 'Củ sạc nhanh kèm cáp C', color: '', price: '351.000đ', old: '390.000đ', tag: 'Sạc nhanh', art: 'sac' },
          { name: 'Sạc dự phòng vỏ nhôm', color: '10.000mAh', price: '531.000đ', old: '590.000đ', tag: '-10%', art: 'sac-du-phong' },
        ], hold: 4000 },
      { kh: 'Lấy a thêm cái tai nghe nha em', kw: 2, hold: 1500 },
      // Không có { end: true }: bấm → thêm một lần là sang thẳng slide kế.
    ],

    /* ===== Nội dung slide trình chiếu (trinh-chieu.html). Slide thống kê dùng số minh họa (deck.dashboard). ===== */
    deck: {
      /* Demo chat dọc (demo-doc.js): tên khách trên Messenger, bài đăng Facebook (anh = khóa trong images), câu bình luận. */
      demoDoc: {
        khach: 'Huy Lê',
        sanPham: 'iPhone 15 Pro Max 256GB like new',
        binhLuan: 'Máy zin k shop, pin bn %?',
        post: {
          tieuDe: 'IPHONE 15 PRO MAX LIKE NEW 99% 📱',
          dong: ['Zin nguyên bản, pin từ 90%', 'Thoát iCloud, check IMEI', 'Bảo hành 12 tháng', 'Xem máy trực tiếp, ship COD'],
          anh: ['iphone', 'kiem-tra', 'op-lung', 'tai-nghe'],
        },
      },
      /* Pipeline thương mại điện tử 16/11/2026 (TRINH-CHIEU.md mục 1): dashboard, chatbot, afterSale. */
      dashboard: [
        { ten: 'Điện thoại, <span class="grad">máy like new</span>', den: '21/07/2026', khach: 16, tyLe: 0.55 },
        { ten: 'Thu cũ, <span class="grad">đổi máy mới</span>', den: '18/08/2026', khach: 9, tyLe: 0.57 },
        { ten: 'Phụ kiện, <span class="grad">tai nghe, sạc</span>', den: '26/09/2026', khach: 21, tyLe: 0.53 },
      ],
      chatbot: {
        chat: [
          { ref: { img: L(IMG['iphone']), ten: 'iPhone 15 Pro Max 256GB like new' } },
          { kh: '15PM 256 còn k shop? Máy zin k, có dính iCloud k?' },
          { ai: 'Dạ máy **iPhone 15 Pro Max 256GB** like new giá **18.490.000đ** ạ. Máy **zin nguyên bản**, **pin 91%**, đã **thoát iCloud sạch**, check IMEI trước khi bán.', meta: '⚡ Preny AI trả lời sau 2 giây' },
          { kh: 'Bảo hành sao em? A xem máy trước đc k?' },
          { ai: 'Dạ máy **bảo hành 12 tháng**, **1 đổi 1 trong 30 ngày**. Anh qua shop xem trực tiếp, hoặc em ship COD **kiểm tra máy rồi mới trả tiền** ạ.' },
          { kh: 'Ok ship a 1 máy. Lê Quang Huy, 0976 154 382, 52 Nguyễn Văn Linh, Hải Châu, Đà Nẵng' },
          { ai: 'Dạ em lên đơn, gửi vận chuyển cho anh ngay ạ ⚡' },
          { don: true },
          { ok: true },
        ],
        don: {
          ten: 'Lê Quang Huy', sdt: '0976 154 382', diaChi: '52 Nguyễn Văn Linh, Hải Châu, Đà Nẵng', ma: '#KP70925', phi: 'COD, kiểm tra máy',
          sp: [{ img: L(IMG['iphone']), ten: 'iPhone 15 Pro Max 256GB like new', sl: 1, gia: 18490000 }],
        },
        anh: {
          img: L(IMG['linh-kien']),
          kh: 'Laptop a chai pin, sạc đầy xài 1 tiếng là hết. Bên e thay pin như hình k?',
          ai: 'Dạ hình anh gửi là **pin bên trong laptop** ạ. Bên em có nhận **thay pin laptop lấy liền trong 60 phút**, bảo hành **6 tháng**. Anh cho em xin **tên dòng máy** (ghi dưới đáy máy) để em báo giá đúng pin nha.',
        },
      },
      afterSale: {
        loi: 'Cảm ơn anh Huy đã tin Khang Phúc Mobile 💚 Khách dùng 15 Pro Max hay sắm thêm mấy món này ạ:',
        sp: [
          { img: L(IMG['op-lung']), ten: 'Ốp lưng vân carbon từ tính', gia: 290000 },
          { img: L(IMG['tai-nghe']), ten: 'Tai nghe không dây chống ồn', gia: 1290000 },
          { img: L(IMG['sac']), ten: 'Củ sạc nhanh kèm cáp C', gia: 390000, cu: 450000 },
          { img: L(IMG['sac-du-phong']), ten: 'Sạc dự phòng vỏ nhôm 10.000mAh', gia: 590000 },
          { img: L(IMG['kiem-tra']), ten: 'Gói bảo hành mở rộng thêm 12 tháng', gia: 890000, nut: 'Đăng ký' },
        ],
        khach: 'Lấy thêm a cái tai nghe nha em',
        pill: '🛍 Khách mua thêm ngay: đơn tăng từ 18.490.000đ lên 19.780.000đ',
        fmm: {
          chao: 'Chào anh Huy 👋 Khang Phúc Mobile vừa về sạc dự phòng vỏ nhôm mới, gửi anh xem trước nha!',
          img: L(IMG['sac-du-phong']), nhan: 'HÀNG MỚI VỀ',
          ten: 'Sạc dự phòng vỏ nhôm 10.000mAh', mo: 'Khách cũ giảm 10%, bảo hành 12 tháng.', nut: 'Xem sản phẩm',
        },
        zbs: {
          ten: 'Tặng anh Huy voucher 200.000đ',
          mo: 'Cảm ơn anh đã mua máy tại Khang Phúc Mobile. Gửi anh ưu đãi cho lần mua tiếp theo:',
          dong: [['Mã voucher', '**KHANGPHUC200**'], ['Ưu đãi', 'Giảm 200.000đ đơn từ 1.000.000đ'], ['Hạn dùng', '31/03/2027']],
          nut: 'Dùng voucher ngay',
        },
      },
      bamDuoi: {
        cmpDung: ['Khách nhắn xong im → nhắc đúng máy khách đã xem (thẻ <b>#IPhone15ProMax</b> từ quảng cáo)',
                  'Báo giá xong im → bám đuổi theo giá: ưu đãi, quà tặng (thẻ <b>#HoiGia</b>)',
                  'Đúng nhu cầu, đúng lý do im → khách quay lại mua'],
        hoi: 'iPhone 15 Pro Max like new giá bao nhiêu shop?',
        traLoiThuong: 'Dạ máy giá 18.490.000đ ạ.',
        refImg: L(IMG['iphone']), refTen: 'iPhone 15 Pro Max 256GB like new',
        vd1: {
          kh: 'Máy này còn không shop?',
          ai: 'Dạ còn ạ anh! Anh cần bản 256GB hay 512GB, thích màu gì để em báo đúng máy nha?',
          tag: '🏷 #IPhone15ProMax', tagNote: 'thẻ từ quảng cáo · khách im 1 ngày',
          nhac: 'Anh ơi, em gửi anh <b>ảnh thật máy 15 Pro Max</b> tại shop, kèm <b>% pin, check iCloud</b> từng máy. Anh cần bản bao nhiêu GB để em giữ máy nha 😊',
          dung: '🎯 Theo thẻ #IPhone15ProMax: nhắc đúng máy khách xem',
          khach: 'Bản 256GB em, màu titan',
        },
        vd2: {
          kh: '15 Pro Max 256 bao nhiêu shop?',
          ai: 'Dạ máy <b>15 Pro Max 256GB</b> like new giá <b>18.490.000đ</b>, bảo hành 12 tháng ạ.',
          tag: '🏷 #HoiGia', tagNote: 'báo giá xong khách im 1 ngày',
          nhac: 'Anh ơi, máy 15 Pro Max anh hỏi giá hôm qua, hôm nay em <b>giảm 500.000đ + tặng ốp lưng, cường lực</b> ạ. Em giữ máy cho anh nha?',
          dung: '🎯 Theo thẻ #HoiGia: bám đuổi theo giá, đúng lý do khách im',
          khach: 'Ok giữ a 1 máy',
        },
      },
      binhLuan: {
        post: 'iPhone 15 Pro Max <b>like new 99%</b> · zin nguyên bản, thoát iCloud, bảo hành 12 tháng 📱',
        img: L(IMG['iphone']),
        kav: 'TN', kten: 'Trần Nam', hoi: 'Máy bản quốc tế k shop? Ship ra Hải Phòng, trả góp đc k?',
        traLoi: 'Dạ chào anh Nam! Shop vừa nhắn tin tư vấn chi tiết cho anh, anh xem tin nhắn nhé 💬',
        act2: 'Nhắn tin riêng tư vấn đúng máy',
        nhan: 'Chào anh Nam! Máy bên em đều là <b>bản quốc tế</b>, dùng mọi nhà mạng ạ. Ship Hải Phòng <b>2–3 ngày</b>, hỗ trợ <b>trả góp 0%</b> qua thẻ tín dụng. Anh cần bản bao nhiêu GB để em báo máy, % pin cụ thể nha!',
        sp: { ten: 'iPhone 15 Pro Max 256GB like new', gia: '18.490.000đ', img: L(IMG['iphone']) },
        khach: 'Bản 256GB em',
      },
      duLieu: {
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: pin, bảo hành, đổi máy', 'Khách đòi đổi máy, shop mất uy tín'],
        hoi: 'Máy này pin 100% đúng không em? Lỗi gì cũng 1 đổi 1 hả?',
        aiSai: 'Dạ đúng ạ! Pin <b>100%</b>, lỗi gì cũng <b>1 đổi 1 trong 12 tháng</b> luôn anh nhé 🥰',
        thucTe: '⚠ Thực tế: pin 91%, 1 đổi 1 trong 30 ngày khi lỗi phần cứng',
        gian: 'Pin có 91% mà bảo 100%! Rơi máy sao không cho đổi? 😠',
        cho: 'Dạ anh chờ em một chút để em kiểm tra chính xác thông tin máy, chính sách bảo hành cho mình nhé!',
        nv: 'Kỹ thuật Tùng · người thật',
        nvTraLoi: 'Dạ máy này pin 91% anh ạ. Máy 1 đổi 1 trong 30 ngày khi lỗi phần cứng, sau đó bảo hành 12 tháng sửa miễn phí. Anh qua shop em kiểm tra máy tận tay nhé!',
      },
    },
  };
})();
