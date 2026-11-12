/* Kịch bản: QUÀ TẶNG DOANH NGHIỆP (giỏ trái cây, hộp quà) — BẢN TRÌNH CHIẾU, nhóm THƯƠNG MẠI ĐIỆN TỬ. Khung ngang 16:9.
   Demo chat theo chuẩn thương mại điện tử mới (TRINH-CHIEU.md mục 3), một mạch:
     tư vấn (ca khó: 30 phần, in logo, VAT, 10 phần gửi tỉnh xa → đổi sang hộp quà khô) → khách im → bám đuổi 2 tin theo thẻ
     → khách quay lại chốt → lên đơn tự động → chăm sóc sau bán. Không có tin tự động cập nhật vận chuyển.
   Không có bước kết thúc: bấm → là sang slide kế.
   Tên shop, giá, chính sách, tên khách, công ty, SĐT: dữ liệu minh họa. Ảnh: Unsplash (ảnh thật). */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'gio-trai-cay': '1773823307113-2dcc3609aa79',
    'gio-trai-cay-2': '1629905707362-03cf1a9f6e2d',
    'hop-go': '1773450970959-cef81e9b1053',
    'hop-den': '1608755727748-dfa2e44f255b',
    'hop-trang': '1625552186152-668cd2f0b707',
    'gio-hoa': '1649789093457-3a973148fa27',
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    shop: { name: 'Quà Tặng Mộc An', initials: 'MA' },
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
        kws: ['Trả lời ngay tức thì, 24/7', 'Nhận diện đúng mẫu, giá từ ảnh khách gửi', 'Báo in logo, xuất VAT cho doanh nghiệp', 'Đổi quà hợp với nơi giao xa', 'Báo ưu đãi số lượng, chủ động chốt'] },
      { title: 'AI tự động bám đuổi khách hàng trong 7 ngày', desc: 'Tăng thêm khoảng 35% tỷ lệ chốt đơn.',
        kws: ['~65% khách nhắn tin rồi im lặng', 'Tự gắn thẻ nhu cầu khách, lý do im', 'Gửi ảnh thật để khách trình sếp duyệt', 'Báo giá xong im → ưu đãi giá đúng lúc'] },
      { title: 'AI Agent tự động lên đơn và gửi sang đơn vị vận chuyển', desc: 'Tiết kiệm hơn 90% thời gian xử lý đơn.',
        kws: ['Thu đủ thông tin VAT, logo, người nhận', 'Gửi tin xác nhận đơn đầy đủ', 'Tự tạo đơn, chia vận đơn theo địa chỉ'] },
      { title: 'AI tự động chăm sóc khách hàng sau bán', desc: 'Tăng doanh thu từ khách hàng cũ.',
        kws: ['Báo đã giao đủ, gửi ảnh xác nhận', 'Hỏi thăm cảm nhận của đối tác', 'Lưu logo, mẫu thiệp, mời đặt quà Tết'] },
    ],

    steps: [
      { intro: true, hold: 1800 },

      /* ---- 1. Tư vấn: đơn số lượng, in logo, VAT, gửi tỉnh xa ---- */
      { feature: 1 },
      { sep: 'Khách nhắn tin từ quảng cáo Facebook', style: 'time', hold: 800 },
      { img: 'gio-trai-cay', hold: 1500 },
      { kh: 'Shop ơi cty mình cần 30 giỏ như này tặng đối tác cuối năm, tầm 800k/giỏ. Có in logo cty, xuất VAT k? 20 giỏ giao HN, 10 giỏ gửi Đà Nẵng với HCM' },
      { ai: 'Dạ có ạ chị! Shop chuyên quà tặng doanh nghiệp số lượng lớn 😊', fast: true, meta: '⚡ Preny AI trả lời sau 2 giây', kw: 0 },
      { ai: 'Mẫu chị gửi là **giỏ trái cây nhập khẩu** (nho, lê, mận), giá **790.000đ/giỏ**, vừa ngân sách ạ. Shop **in logo lên thiệp, ruy băng** và **xuất hóa đơn VAT** cho công ty mình.', kw: [1, 2] },
      { ai: 'Riêng **10 phần gửi Đà Nẵng, HCM**, trái cây đi xa 1–2 ngày dễ dập, em gợi ý đổi sang **hộp quà khô** cùng tầm giá, giữ được lâu mà vẫn sang ạ:', kw: 3 },
      { catalog: [
          { name: 'Giỏ trái cây nhập khẩu', sub: 'Giao nội thành HN', price: '790.000đ', old: '850.000đ', tag: 'Bán chạy', art: 'gio-trai-cay-2' },
          { name: 'Hộp quà gỗ bánh & mứt', sub: 'Gửi đi tỉnh được', price: '850.000đ', old: '950.000đ', tag: 'Sang trọng', art: 'hop-go' },
          { name: 'Hộp quà trà & hạt', sub: 'Gửi đi tỉnh được', price: '690.000đ', old: '750.000đ', tag: 'Giữ lâu', art: 'hop-den' },
        ], hold: 4000 },
      { ai: 'Đơn từ **30 phần** shop **giảm 10%** và giao tận tay từng đối tác ạ.', kw: 4 },
      { kh: 'Ok để mình gửi sếp duyệt mẫu đã' },

      /* ---- 2. Khách im → bám đuổi 2 tin theo thẻ ---- */
      { feature: 2 },
      { sep: 'Khách chưa phản hồi… · AI gắn thẻ #QuaDoanhNghiep #HoiGia', style: 'silent', kw: [0, 1], hold: 1800 },
      { sep: '— 1 ngày sau —' },
      { ai: 'Chị Lan ơi, em gửi chị **ảnh thật** các mẫu giỏ trái cây và hộp quà khô để chị trình sếp duyệt cho nhanh nha 😊', meta: '🔁 Tự động · Bám đuổi theo thẻ #QuaDoanhNghiep', kw: 2 },
      { aiImgs: [{ img: 'gio-trai-cay', label: 'Giỏ trái cây nhập khẩu' }, { img: 'hop-go', label: 'Hộp quà gỗ' },
                 { img: 'hop-trang', label: 'Hộp quà thắt nơ' }, { img: 'gio-hoa', label: 'Giỏ quà kèm hoa' }], hold: 3200 },
      { sep: '— 2 ngày sau —' },
      { ai: 'Đơn 30 phần chị hỏi giá hôm trước, chốt trước **15/12** em **giảm 15%** (thêm 5%) và giữ lịch giao **ngày 20/12** cho chị ạ. Cuối năm lịch giao kín nhanh lắm chị 🎁', meta: '🔁 Tự động · Bám đuổi theo thẻ #HoiGia', kw: 3 },
      { kh: 'Sếp duyệt rồi. Chốt 20 giỏ trái cây giao VP HN, 10 hộp quà gỗ gửi ĐN với HCM nhé' },

      /* ---- 3. Lên đơn tự động (không có tin cập nhật vận chuyển) ---- */
      { feature: 3 },
      { ai: 'Dạ chị gửi em **thông tin xuất VAT**, **file logo** và **danh sách người nhận** để em lên đơn nha.', kw: 0 },
      { kh: 'Cty CP Minh An, xuất VAT nhé. Logo với danh sách 30 người nhận mình gửi file đây' },
      { card: {
          tag: '✓ Tin xác nhận đơn',
          intro: 'Dạ chị kiểm tra lại đơn giúp em nhé:',
          lines: ['20 Giỏ trái cây nhập khẩu · giao VP Hà Nội', '10 Hộp quà gỗ bánh & mứt · gửi Đà Nẵng, TP.HCM', 'In logo Minh An lên thiệp, ruy băng', 'Tổng cộng: **20.655.000đ** (đã giảm 15%) · xuất VAT', 'Giao: **ngày 20/12**, đủ 30 địa chỉ'],
          button: 'Quản lý đơn hàng',
        }, kw: 1, hold: 4500 },
      { kh: 'Ok em' },
      { card: {
          tag: '✓ Đã tạo đơn & lên lịch giao', ok: true,
          lines: ['Mã đơn: **#MA20512**', '30 vận đơn: **20 nội thành, 10 gửi tỉnh**', 'Giao: **ngày 20/12**'],
        }, kw: 2, hold: 3500 },

      /* ---- 4. Chăm sóc sau bán ---- */
      { feature: 4 },
      { sep: '— Ngày 21/12 —' },
      { ai: 'Chị Lan ơi, **30/30 phần quà** đã tới tay đối tác ạ, em gửi chị **ảnh xác nhận giao** từng nơi nha. Mọi người có ưng quà không chị? 💙', meta: '💙 Tự động · Chăm sóc sau bán', kw: [0, 1] },
      { kh: 'Đối tác khen đẹp lắm em 👍' },
      { ai: 'Dạ em lưu sẵn **logo, mẫu thiệp** của công ty mình rồi ạ. Dịp **Tết** chị cần quà cho nhân viên, đối tác thì chỉ cần nhắn số lượng, khách cũ **giảm thêm 5%** nha 🎁', kw: 2, hold: 1500 },
      // Không có { end: true }: bấm → thêm một lần là sang thẳng slide kế.
    ],

    /* ===== Nội dung slide trình chiếu (trinh-chieu.html). Chưa có số liệu thống kê thật → 2 slide thống kê tự ẩn. ===== */
    deck: {
      bamDuoi: {
        cmpDung: ['Khách nhắn xong im → nhắc đúng mẫu quà khách xem (thẻ <b>#GioTraiCay</b> từ quảng cáo)',
                  'Báo giá xong im → bám đuổi theo giá: ưu đãi số lượng (thẻ <b>#HoiGia</b>)',
                  'Đúng nhu cầu, đúng lý do im → khách quay lại mua'],
        hoi: 'Giỏ trái cây này giá bao nhiêu shop?',
        traLoiThuong: 'Dạ giá 790.000đ ạ.',
        refImg: L(IMG['gio-trai-cay']), refTen: 'Giỏ trái cây nhập khẩu',
        vd1: {
          kh: 'Giỏ trái cây này còn đặt được không shop?',
          ai: 'Dạ còn ạ chị! Chị đặt tặng người thân hay tặng đối tác để em tư vấn mẫu nha?',
          tag: '🏷 #GioTraiCay', tagNote: 'thẻ từ quảng cáo · khách im 1 ngày',
          nhac: 'Chị ơi, <b>giỏ trái cây nhập khẩu</b> chị xem hôm qua có thêm bản <b>kèm hoa và thiệp in logo</b>, giao tận nơi trong ngày ạ. Em gửi chị ảnh thật để chọn nha 😊',
          dung: '🎯 Theo thẻ #GioTraiCay: nhắc đúng mẫu khách xem',
          khach: 'Gửi chị xem mẫu kèm hoa nhé',
        },
        vd2: {
          kh: 'Đặt 30 giỏ thì giá sao shop?',
          ai: 'Dạ giỏ trái cây nhập khẩu <b>790.000đ/giỏ</b>, từ 30 giỏ giảm 10% ạ.',
          tag: '🏷 #HoiGia', tagNote: 'báo giá xong khách im 1 ngày',
          nhac: 'Chị ơi, 30 giỏ chị hỏi giá hôm qua, chốt trước <b>15/12</b> em <b>giảm 15% + in logo miễn phí</b> ạ. Em giữ lịch giao cho chị nha?',
          dung: '🎯 Theo thẻ #HoiGia: bám đuổi theo giá, đúng lý do khách im',
          khach: 'Ok chốt 30 giỏ nhé em',
        },
      },
      binhLuan: {
        post: 'Giỏ trái cây, hộp quà <b>in logo doanh nghiệp</b> · xuất VAT, giao tận tay từng đối tác 🎁',
        img: L(IMG['gio-trai-cay-2']),
        kav: 'PT', kten: 'Phạm Thu', hoi: 'Cty mình cần 50 hộp quà Tết, có giao trong ngày ở Hà Nội không shop?',
        traLoi: 'Dạ chào chị Thu! Shop vừa nhắn tin tư vấn chi tiết cho chị, chị xem tin nhắn nhé 💬',
        act2: 'Nhắn tin riêng tư vấn mẫu và giá',
        nhan: 'Chào chị Thu! <b>50 hộp quà Tết</b> bên em giao <b>trong ngày nội thành Hà Nội</b>, in logo miễn phí, xuất VAT ạ. Chị cho em xin <b>ngân sách mỗi hộp</b> để em gửi mẫu phù hợp nha!',
        sp: { ten: 'Hộp quà trà & hạt', gia: '690.000đ', img: L(IMG['hop-den']) },
        khach: 'Tầm 700k một hộp em',
      },
      duLieu: {
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: giao gấp, in logo, xuất VAT', 'Lỡ sự kiện của khách, shop mất uy tín'],
        hoi: 'Mai cty mình cần 50 giỏ in logo, giao kịp không em?',
        aiSai: 'Dạ kịp ạ! <b>Sáng mai</b> có đủ <b>50 giỏ in logo</b> luôn chị 🥰',
        thucTe: '⚠ Thực tế: in logo cần 2 ngày, đơn 50 giỏ phải đặt trước 3 ngày',
        gian: 'Sự kiện sáng nay mà giờ chưa có quà! Sao hứa kịp vậy? 😠',
        cho: 'Dạ chị chờ em một chút để em kiểm tra chính xác lịch in logo và giao hàng cho mình nhé!',
        nv: 'Nhân viên Hà · người thật',
        nvTraLoi: 'Dạ in logo cần 2 ngày ạ. Mai chị cần gấp thì em làm 50 giỏ kèm thiệp viết tay tên công ty, giao trước 9h nhé!',
      },
    },
  };
})();
