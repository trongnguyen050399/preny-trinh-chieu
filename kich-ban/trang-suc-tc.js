/* Kịch bản: TRANG SỨC, PHỤ KIỆN (nhẫn cầu hôn, nhẫn cưới, dây chuyền, bông tai, vòng tay) — BẢN TRÌNH CHIẾU, nhóm THƯƠNG MẠI ĐIỆN TỬ.
   Làm 17/11/2026 theo pipeline mới (TRINH-CHIEU.md mục 1). Demo chat chuẩn thương mại điện tử (mục 3), một mạch:
     anh Quân gửi ảnh nhẫn cầu hôn hỏi dồn: không biết size tay bạn gái, muốn giữ bí mật, ngân sách khoảng 25 triệu, lo kim cương thật giả
     → AI gợi ý cùng mẫu nhưng kim cương 4ly5 cho vừa ngân sách, chỉ cách đo ni bằng nhẫn cũ của bạn gái, đổi size miễn phí,
       có giấy kiểm định, khắc tên miễn phí, hộp quà, giao kín → anh im ("lần đầu mua hơi run")
     → bám đuổi 2 tin theo thẻ #NhanCauHon (ảnh thật mẫu nhẫn, hộp nhẫn, cửa hàng), #HoiGia (giảm giá + tặng hộp nhẫn có đèn)
     → anh quay lại chốt, báo đường kính nhẫn cũ → AI quy ra ni, lên đơn (hỏi chữ khắc, giao về công ty để giữ bí mật)
     → chăm sóc sau bán: hỏi thăm sau khi cầu hôn, dặn bảo quản, làm sạch; gợi ý nhẫn cưới đôi, dây chuyền, bông tai.
   Không có tin tự động cập nhật vận chuyển. Không có bước kết thúc: bấm → là sang slide kế.
   Tên shop, giá, chính sách, tên khách, SĐT: dữ liệu minh họa. Ảnh: Unsplash (ảnh thật, không phải hàng của shop). */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'nhan-cuoi': '1622398925373-3f91b1e275f5',      // cặp nhẫn cưới vàng trơn
    'nhan-kim-cuong': '1598560917807-1bae44bd2be8', // nhẫn vàng, kim cương chủ, đai đính tấm
    'hop-nhan': '1559006864-38a01f201f95',          // nhẫn kim cương vàng trắng trong hộp nhung
    'day-chuyen': '1589128777073-263566ae5e4d',     // dây chuyền vàng trắng mặt kim cương tấm
    'bong-tai': '1778182553300-7593326ca29d',       // bông tai vàng hình vỏ ốc
    'vong-tay': '1689367436629-1d288f1e23b6',       // vòng tay vàng đính 4 viên đá
    'cua-hang': '1622704776938-bed6cd156e04',       // cửa hàng trang sức, tủ kính
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    shop: { name: 'Minh Khuê Jewelry', initials: 'MK' },
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
        kws: ['Trả lời ngay tức thì, 24/7', 'Nhận diện đúng mẫu nhẫn từ ảnh khách gửi', 'Gợi ý mẫu vừa ngân sách', 'Chỉ cách đo ni bí mật, đổi size miễn phí', 'Báo giấy kiểm định, khắc tên, chủ động chốt'] },
      { title: 'AI tự động bám đuổi khách hàng trong 7 ngày', desc: 'Tăng thêm khoảng 35% tỷ lệ chốt đơn.',
        kws: ['~65% khách nhắn tin rồi im lặng', 'Tự gắn thẻ mẫu khách xem, lý do im', 'Gửi ảnh thật mẫu nhẫn, hộp quà, cửa hàng', 'Báo giá xong im → ưu đãi giá đúng lúc'] },
      { title: 'AI Agent tự động lên đơn và gửi sang đơn vị vận chuyển', desc: 'Tiết kiệm hơn 90% thời gian xử lý đơn.',
        kws: ['Thu đủ tên, SĐT, địa chỉ, chữ khắc', 'Gửi tin xác nhận đơn đầy đủ', 'Tự tạo đơn, giao kín tận tay'] },
      { title: 'AI tự động chăm sóc khách hàng sau bán', desc: 'Tăng doanh thu từ khách hàng cũ.',
        kws: ['Hỏi thăm, dặn bảo quản, làm sạch', 'Gợi ý nhẫn cưới, trang sức cưới', 'Khách mua thêm, tăng giá trị vòng đời'] },
    ],

    steps: [
      { intro: true, hold: 1800 },

      /* ---- 1. Tư vấn: không biết size tay, giữ bí mật, ngân sách giới hạn, lo thật giả ---- */
      { feature: 1 },
      { sep: 'Khách nhắn tin từ quảng cáo Facebook', style: 'time', hold: 800 },
      { img: 'hop-nhan', hold: 1500 },
      { kh: 'Nhẫn này giá sao shop? A định cầu hôn bạn gái mà k biết size tay cô ấy, muốn giữ bí mật. Ngân sách tầm 25tr thôi, kim cương có thật k e?' },
      { ai: 'Dạ chúc mừng anh! Em tư vấn cho anh ngay ạ 💍', fast: true, meta: '⚡ Preny AI trả lời sau 2 giây', kw: 0 },
      { ai: 'Mẫu anh gửi là **nhẫn cầu hôn vàng trắng 18K**, ổ 6 chấu, kim cương chủ **5ly4**, giá **38.900.000đ** ạ. Ngân sách **25 triệu** thì anh lấy **cùng mẫu, kim cương 4ly5**: **22.900.000đ**, đeo lên tay vẫn sáng, thanh lịch nha anh.', kw: [1, 2] },
      { ai: 'Size tay thì anh **mượn lén 1 chiếc nhẫn** chị hay đeo **ngón áp út**, đo **đường kính trong** bằng thước hoặc chụp nhẫn đặt cạnh thước gửi em, em quy ra ni cho anh. Lỡ chưa vừa thì shop **đổi size miễn phí** trong 30 ngày ạ.', kw: 3 },
      { ai: 'Kim cương **thiên nhiên**, có **giấy kiểm định** ghi kích thước, nước, độ sạch, mã số khắc trên viên trùng với giấy ạ. Shop **khắc tên miễn phí**, tặng **hộp nhung**, giao kín hộp để anh giữ bí mật. Anh chốt để em giữ viên đẹp cho anh nha? 😊', kw: 4 },
      { kh: 'Để a tính thêm đã, lần đầu mua a hơi run 😅' },

      /* ---- 2. Khách im → bám đuổi 2 tin theo thẻ ---- */
      { feature: 2 },
      { sep: 'Khách chưa phản hồi… · AI gắn thẻ #NhanCauHon #HoiGia', style: 'silent', kw: [0, 1], hold: 1800 },
      { sep: '— 1 ngày sau —' },
      { ai: 'Anh Quân ơi, em gửi anh **ảnh thật mẫu nhẫn, hộp nhẫn** và cửa hàng để anh xem trước nha. Anh mượn được nhẫn cũ của chị chưa ạ? Cần em chỉ cách đo cứ nhắn em nha 😊', meta: '🔁 Tự động · Bám đuổi theo thẻ #NhanCauHon', kw: 2 },
      { aiImgs: [{ img: 'hop-nhan', label: 'Hộp nhung tặng kèm' }, { img: 'nhan-kim-cuong', label: 'Mẫu đai đính tấm' },
                 { img: 'nhan-cuoi', label: 'Nhẫn cưới cùng bộ' }, { img: 'cua-hang', label: 'Xem nhẫn tại cửa hàng' }], hold: 3200 },
      { sep: '— 2 ngày sau —' },
      { ai: 'Nhẫn kim cương 4ly5 anh hỏi giá, chốt trong hôm nay em **giảm 1.000.000đ còn 21.900.000đ** + **tặng hộp nhẫn có đèn**, vẫn khắc tên miễn phí ạ 🎁', meta: '🔁 Tự động · Bám đuổi theo thẻ #HoiGia', kw: 3 },
      { kh: 'Ok chốt a nha. Nhẫn cũ của cô ấy a đo được 16,5mm' },

      /* ---- 3. Lên đơn tự động (không có tin cập nhật vận chuyển) ---- */
      { feature: 3 },
      { ai: 'Dạ đường kính 16,5mm là **ni 10** ạ. Anh cho em xin **tên, SĐT, địa chỉ nhận** và **chữ muốn khắc** trong nhẫn nha. Giao về **công ty** cho kín đáo được không anh?', kw: 0 },
      { kh: 'Lê Minh Quân – 0909 735 128\nGiao công ty: 25 Nguyễn Thị Minh Khai, Q.1, TP.HCM. Khắc: Q & L 24.12' },
      { card: {
          tag: '✓ Tin xác nhận đơn',
          intro: 'Dạ anh kiểm tra lại đơn giúp em nhé:',
          lines: ['1 Nhẫn cầu hôn vàng trắng 18K, kim cương 4ly5 · ni 10', 'Khắc: **Q & L 24.12** · tặng hộp nhẫn có đèn', 'Tổng cộng: **21.900.000đ** · kiểm hàng rồi thanh toán', 'Người nhận: Lê Minh Quân · 0909 735 128', 'Giao tới: 25 Nguyễn Thị Minh Khai, Q.1, TP.HCM'],
          button: 'Quản lý đơn hàng',
        }, kw: 1, hold: 4500 },
      { kh: 'Ok em' },
      { card: {
          tag: '✓ Đã tạo đơn & gửi vận chuyển', ok: true,
          lines: ['Mã đơn: **#MK61207**', 'Mã vận đơn: **VD47120368**', 'Khắc tên xong giao kín tận tay: **3–4 ngày**'],
        }, kw: 2, hold: 3500 },

      /* ---- 4. Chăm sóc sau bán ---- */
      { feature: 4 },
      { sep: '— 1 tuần sau —' },
      { ai: 'Anh Quân ơi, cầu hôn suôn sẻ không anh? 💍 Anh dặn chị **tháo nhẫn khi làm việc nhà, đi bơi**, thỉnh thoảng **ngâm nước ấm pha xà phòng, chải nhẹ bằng bàn chải mềm** cho sáng nha. Chưa vừa tay thì shop **đổi size miễn phí** ạ 💚', meta: '💚 Tự động · Chăm sóc sau bán', kw: 0 },
      { kh: 'Cô ấy đồng ý rồi e 😍 nhẫn vừa in luôn' },
      { sep: '— 2 tuần sau —' },
      { ai: 'Chúc mừng anh chị! Chuẩn bị đám cưới, khách cũ được **giảm thêm 5%**, anh xem mấy món cô dâu chú rể hay chọn nha:', kw: 1 },
      { catalog: [
          { name: 'Nhẫn cưới đôi vàng 18K', sub: 'Khắc tên miễn phí', price: '11.305.000đ', old: '11.900.000đ', tag: 'Cặp đôi', art: 'nhan-cuoi' },
          { name: 'Dây chuyền kim cương', sub: 'Vàng trắng 18K', price: '8.455.000đ', old: '8.900.000đ', tag: 'Quà cô dâu', art: 'day-chuyen' },
          { name: 'Bông tai vàng hình ốc', sub: 'Vàng 18K', price: '3.990.000đ', old: '4.200.000đ', tag: 'Bán chạy', art: 'bong-tai' },
        ], hold: 4000 },
      { kh: 'Lấy a cặp nhẫn cưới nha e, khắc tên 2 đứa luôn', kw: 2, hold: 1500 },
      // Không có { end: true }: bấm → thêm một lần là sang thẳng slide kế.
    ],

    /* ===== Nội dung slide trình chiếu (trinh-chieu.html). Slide thống kê dùng số minh họa (deck.dashboard). ===== */
    deck: {
      /* Demo chat dọc (demo-doc.js): tên khách trên Messenger, bài đăng Facebook (anh = khóa trong images), câu bình luận. */
      demoDoc: {
        khach: 'Minh Quân',
        sanPham: 'Nhẫn cầu hôn kim cương 18K',
        binhLuan: 'Xin giá nhẫn cầu hôn',
        post: {
          tieuDe: 'NHẪN CẦU HÔN KIM CƯƠNG VÀNG TRẮNG 18K 💍',
          dong: ['Kim cương có giấy kiểm định', 'Khắc tên miễn phí', 'Đổi size miễn phí 30 ngày', 'Tặng hộp nhung, giao kín'],
          anh: ['hop-nhan', 'nhan-kim-cuong', 'nhan-cuoi', 'cua-hang'],
        },
      },
      /* Pipeline thương mại điện tử 16/11/2026 (TRINH-CHIEU.md mục 1): dashboard, chatbot, afterSale. */
      dashboard: [
        { ten: 'Nhẫn cầu hôn, <span class="grad">nhẫn cưới</span>', den: '25/07/2026', khach: 8, tyLe: 0.55 },
        { ten: 'Trang sức <span class="grad">vàng 18K</span>', den: '24/08/2026', khach: 11, tyLe: 0.53 },
        { ten: 'Phụ kiện <span class="grad">bạc, thời trang</span>', den: '29/09/2026', khach: 14, tyLe: 0.57 },
      ],
      chatbot: {
        chat: [
          { ref: { img: L(IMG['hop-nhan']), ten: 'Nhẫn cầu hôn kim cương 18K' } },
          { kh: 'Nhẫn này giá sao shop? A muốn cầu hôn mà k biết size tay bạn gái, ngân sách tầm 25tr' },
          { ai: 'Dạ mẫu này kim cương **5ly4** giá **38.900.000đ** ạ. Ngân sách 25 triệu anh lấy **cùng mẫu, kim cương 4ly5**: **22.900.000đ**. Size tay anh **mượn lén nhẫn cũ** của chị, chụp đặt cạnh thước gửi em quy ra ni nha.', meta: '⚡ Preny AI trả lời sau 2 giây' },
          { kh: 'Kim cương thật k em? Đeo k vừa thì sao?' },
          { ai: 'Dạ kim cương có **giấy kiểm định**, **khắc tên miễn phí**, **đổi size miễn phí** 30 ngày, tặng **hộp nhung**, giao kín để anh giữ bí mật ạ.' },
          { kh: 'Ok lấy a mẫu 4ly5, ni 10. Lê Minh Quân, 0909 735 128, 25 Nguyễn Thị Minh Khai, Q.1, HCM' },
          { ai: 'Dạ em lên đơn, giao kín tận tay cho anh ngay ạ ⚡' },
          { don: true },
          { ok: true },
        ],
        don: {
          ten: 'Lê Minh Quân', sdt: '0909 735 128', diaChi: '25 Nguyễn Thị Minh Khai, Q.1, TP.HCM', ma: '#MK61207', phi: 'giao kín',
          sp: [{ img: L(IMG['hop-nhan']), ten: 'Nhẫn cầu hôn kim cương 4ly5 · ni 10', sl: 1, gia: 22900000 }],
        },
        anh: {
          img: L(IMG['day-chuyen']),
          kh: 'Dây chuyền như hình này shop có k em?',
          ai: 'Dạ hình anh gửi là **dây chuyền vàng trắng 18K**, mặt **kim cương tấm xếp vuông** ạ, giá **8.900.000đ**, khắc chữ sau mặt miễn phí. Anh tặng chị kèm nhẫn là **thành bộ** đẹp lắm nha.',
        },
      },
      afterSale: {
        loi: 'Cảm ơn anh Quân đã tin Minh Khuê Jewelry 💍 Cô dâu chú rể hay chọn thêm mấy món này ạ:',
        sp: [
          { img: L(IMG['nhan-cuoi']), ten: 'Nhẫn cưới đôi vàng 18K', gia: 11900000 },
          { img: L(IMG['day-chuyen']), ten: 'Dây chuyền kim cương vàng trắng', gia: 8900000 },
          { img: L(IMG['bong-tai']), ten: 'Bông tai vàng 18K hình ốc', gia: 4200000 },
          { img: L(IMG['vong-tay']), ten: 'Vòng tay vàng đính đá', gia: 5600000, cu: 6200000 },
          { img: L(IMG['nhan-kim-cuong']), ten: 'Nhẫn kim cương đai đính tấm', gia: 45000000, nut: 'Nhận báo giá' },
        ],
        khach: 'Lấy thêm a cặp nhẫn cưới nha em',
        pill: '🛍 Khách mua thêm ngay: đơn tăng từ 22.900.000đ lên 34.800.000đ',
        fmm: {
          chao: 'Chào anh Quân 👋 Minh Khuê vừa về bộ sưu tập trang sức cưới, gửi anh chị xem trước nha!',
          img: L(IMG['nhan-cuoi']), nhan: 'BỘ SƯU TẬP MỚI',
          ten: 'Nhẫn cưới đôi, trang sức cô dâu', mo: 'Khách cũ giảm 5%, khắc tên miễn phí.', nut: 'Xem bộ sưu tập',
        },
        zbs: {
          ten: 'Tặng anh Quân voucher 500.000đ',
          mo: 'Cảm ơn anh đã chọn nhẫn cầu hôn tại Minh Khuê Jewelry. Gửi anh ưu đãi cho lần mua tiếp theo:',
          dong: [['Mã voucher', '**MINHKHUE500**'], ['Ưu đãi', 'Giảm 500.000đ đơn từ 5 triệu'], ['Hạn dùng', '30/06/2027']],
          nut: 'Dùng voucher ngay',
        },
      },
      bamDuoi: {
        cmpDung: ['Khách nhắn xong im → nhắc đúng mẫu khách đã xem (thẻ <b>#NhanCauHon</b> từ quảng cáo)',
                  'Báo giá xong im → bám đuổi theo giá: ưu đãi, quà tặng (thẻ <b>#HoiGia</b>)',
                  'Đúng nhu cầu, đúng lý do im → khách quay lại mua'],
        hoi: 'Nhẫn này giá bao nhiêu shop?',
        traLoiThuong: 'Dạ nhẫn giá 38.900.000đ ạ.',
        refImg: L(IMG['hop-nhan']), refTen: 'Nhẫn cầu hôn kim cương 18K',
        vd1: {
          kh: 'Mẫu nhẫn này còn không shop?',
          ai: 'Dạ còn ạ! Anh mua để cầu hôn hay làm quà, ngân sách khoảng bao nhiêu để em tư vấn viên kim cương vừa tầm nha?',
          tag: '🏷 #NhanCauHon', tagNote: 'thẻ từ quảng cáo · khách im 1 ngày',
          nhac: 'Anh ơi, em gửi anh <b>ảnh thật mẫu nhẫn, giấy kiểm định và hộp nhẫn</b> nha. Anh chưa biết size tay chị thì em chỉ cách đo bí mật bằng nhẫn cũ ạ 😊',
          dung: '🎯 Theo thẻ #NhanCauHon: nhắc đúng mẫu khách xem',
          khach: 'Chỉ a cách đo với em',
        },
        vd2: {
          kh: 'Nhẫn kim cương 4ly5 bao nhiêu shop?',
          ai: 'Dạ nhẫn <b>kim cương 4ly5</b> giá <b>22.900.000đ</b>, khắc tên miễn phí ạ.',
          tag: '🏷 #HoiGia', tagNote: 'báo giá xong khách im 1 ngày',
          nhac: 'Anh ơi, nhẫn 4ly5 anh hỏi giá hôm qua hôm nay em <b>giảm 1.000.000đ + tặng hộp nhẫn có đèn</b> ạ. Em giữ viên đẹp cho anh nha?',
          dung: '🎯 Theo thẻ #HoiGia: bám đuổi theo giá, đúng lý do khách im',
          khach: 'Ok giữ a 1 chiếc',
        },
      },
      binhLuan: {
        post: 'Bông tai, dây chuyền <b>vàng 18K</b> · có hóa đơn ghi tuổi vàng, khắc chữ miễn phí ✨',
        img: L(IMG['bong-tai']),
        kav: 'TV', kten: 'Thanh Vy', hoi: 'Bông tai này da nhạy cảm đeo có bị ngứa không shop? Giá sao ạ?',
        traLoi: 'Dạ chào chị Vy! Shop vừa nhắn tin tư vấn chi tiết cho chị, chị xem tin nhắn nhé 💬',
        act2: 'Nhắn tin riêng tư vấn đúng mẫu',
        nhan: 'Chào chị Vy! Bông tai <b>vàng 18K</b>, chốt cài cũng bằng vàng nên <b>ít gây ngứa hơn hàng mạ</b> ạ, giá <b>4.200.000đ</b>. Chị hay bị ngứa với loại nào để em tư vấn thêm nha!',
        sp: { ten: 'Bông tai vàng 18K hình ốc', gia: '4.200.000đ', img: L(IMG['bong-tai']) },
        khach: 'Đeo hàng mạ là mình bị ngứa',
      },
      duLieu: {
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: thu lại 100% giá', 'Khách bán lại bị trừ tiền, shop mất uy tín'],
        hoi: 'Nhẫn này sau này bán lại, shop thu lại đủ 100% giá đúng không em?',
        aiSai: 'Dạ đúng ạ! Shop <b>thu lại 100% giá</b> bất cứ lúc nào anh nhé 🥰',
        thucTe: '⚠ Thực tế: vàng thu theo giá ngày bán, kim cương thu theo chính sách niêm yết',
        gian: 'Mang nhẫn ra bán lại bị trừ tiền! Sao bảo thu đủ 100%? 😠',
        cho: 'Dạ anh chờ em một chút để em kiểm tra chính xác chính sách thu đổi cho mình nhé!',
        nv: 'Chuyên viên Hà · người thật',
        nvTraLoi: 'Dạ vàng thu lại theo giá vàng ngày bán, kim cương có giấy kiểm định thu theo chính sách niêm yết ạ. Em gửi anh bảng chính sách chi tiết nhé!',
      },
    },
  };
})();
