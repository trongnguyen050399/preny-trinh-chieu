/* Kịch bản: ĐỒ CHƠI NGƯỜI LỚN (máy massage cá nhân, gel, quà cho cặp đôi) — BẢN TRÌNH CHIẾU, nhóm THƯƠNG MẠI ĐIỆN TỬ.
   Làm 23/11/2026 theo người dùng ("TMĐT: ... Đồ chơi người lớn").
   Deck chia sẻ màn hình cho khách doanh nghiệp: lời lẽ lịch sự, tế nhị, không mô tả cách dùng. Điểm bán chính của ngành: KÍN ĐÁO.
   Bình luận công khai → AI chỉ trả lời ngắn, không nhắc tên sản phẩm; tư vấn trong tin nhắn riêng.
   Demo chat chuẩn thương mại điện tử (mục 3), một mạch ngắn:
     chị Vy gửi ảnh máy massage hoa hồng hỏi giá; ca khó: có ồn không, giao hàng có ai biết bên trong không
     → AI: silicon y tế, 10 chế độ, chạy êm, 420.000đ; hộp carton trơn, vận đơn ghi "phụ kiện", có thể nhận tại bưu cục, nhận rồi trả tiền
     → chị im → bám đuổi 2 tin theo thẻ #HoaHong (ảnh thật hộp đóng gói kín), #HoiGia (tặng gel mini, freeship)
     → chốt, xin SĐT + địa chỉ, lên đơn → chăm sóc sau bán: dặn vệ sinh, cất giữ; gợi ý gel, nến thơm, dầu massage.
   Không có tin tự động cập nhật vận chuyển. Không có bước kết thúc: bấm → là sang slide kế.
   Tên shop, giá, chính sách, tên khách, SĐT: dữ liệu minh họa. Ảnh: Unsplash (ảnh thật, không phải hàng của shop),
   chỉ dùng ảnh sản phẩm và ảnh hộp đóng gói, không dùng ảnh người. */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'hoa-hong': '1755642754869-2c69a62dc306',    // máy massage hình hoa hồng màu đỏ (ảnh quảng cáo)
    'xanh': '1648782360078-52084f329945',        // máy massage mini màu xanh mint trên tay
    'gel': '1785144983578-d6d11add431e',         // chai gel và hộp đen trên nền vải trắng
    'bcs': '1758577342471-1c15720f9d4d',         // vài bao cao su gói riêng
    'nen': '1602607202436-d1b8db3b7b32',         // nến thơm hũ thủy tinh nâu
    'nen-2': '1575108103651-e31aaef7ba56',       // nến thơm hương gỗ, đèn vàng
    'dau-massage': '1662467191853-dcb403313f16', // chai dầu massage trên khăn
    'hop-kin': '1607166452427-7e4477079cb9',     // hộp carton trơn đóng kín
    'hop-trang': '1573376670774-4427757f7963',   // hộp trắng trơn mở nắp
    'cap-doi': '1675704632448-cf726a8e1fd8',     // cặp đôi ôm nhau trong phòng ngủ (ăn mặc kín đáo)
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    shop: { name: 'Hồng Nhung Store', initials: 'HN' },
    headline: { pre: 'Hệ thống AI chatbot giúp tăng trung bình', em: '62% tỷ lệ chốt đơn' },
    sub: 'Tự động hóa toàn bộ quy trình chốt đơn, bám đuổi, lên đơn và chăm sóc khách để tăng hiệu quả bán hàng.',
    cta: 'Dùng thử miễn phí tại **preny.ai**\nHotline **0389 647 778**',
    speed: 1.13,
    timing: { read0: 1000, readPerChar: 28, readMax: 4500, type0: 800, typePerChar: 3, typeMax: 1500, fastType: 500,
              featureHold: 1400, sepHold: 1100, cardHold: 4000, introCard: 250 },

    images: Object.fromEntries(Object.entries(IMG).map(([k, id]) => [k, U(id)])),

    features: [
      { title: 'AI chatbot tư vấn, chốt đơn 24/7', desc: 'Tăng trung bình 62% tỷ lệ chốt đơn.',
        kws: ['Trả lời ngay tức thì, 24/7', 'Nhận diện đúng mẫu từ ảnh', 'Trả lời tế nhị: chất liệu, độ êm, giá', 'Nói rõ giao kín đáo, không in tên', 'Xin SĐT, chốt đơn ngay'] },
      { title: 'AI tự động bám đuổi khách hàng trong 7 ngày', desc: 'Tăng thêm khoảng 35% tỷ lệ chốt đơn.',
        kws: ['~65% khách nhắn tin rồi im lặng', 'Tự gắn thẻ mẫu khách xem, lý do im', 'Gửi ảnh thật hộp đóng gói kín', 'Báo giá xong im → quà tặng đúng lúc'] },
      { title: 'AI Agent tự động lên đơn và gửi sang đơn vị vận chuyển', desc: 'Tiết kiệm hơn 90% thời gian xử lý đơn.',
        kws: ['Thu đủ tên, SĐT, địa chỉ', 'Ghi chú đóng gói kín cho kho', 'Tự tạo đơn, gửi vận chuyển'] },
      { title: 'AI tự động chăm sóc khách hàng sau bán', desc: 'Tăng doanh thu từ khách hàng cũ.',
        kws: ['Hỏi thăm, dặn vệ sinh, cất giữ', 'Gợi ý gel, nến thơm, dầu massage', 'Khách mua thêm, tăng giá trị vòng đời'] },
    ],

    steps: [
      { intro: true, hold: 1800 },

      /* ---- 1. Tư vấn ngắn, tế nhị: giá, độ êm, giao kín ---- */
      { feature: 1 },
      { sep: 'Khách nhắn tin từ quảng cáo Facebook', style: 'time', hold: 800 },
      { img: 'hoa-hong', hold: 1500 },
      { kh: 'Mẫu này bn shop? Có ồn ko ạ' },
      { ai: 'Dạ chào chị! Shop tư vấn riêng cho chị liền ạ 🌹', fast: true, meta: '⚡ Preny AI trả lời sau 2 giây', kw: 0 },
      { ai: 'Mẫu chị gửi là **máy massage hoa hồng**, silicon y tế, **10 chế độ**, sạc USB, chạy **rất êm**. Giá **420.000đ** ạ.', kw: [1, 2] },
      { kh: 'Giao hàng có ghi tên sp ko e? Sợ ng nhà nhận giùm' },
      { ai: 'Dạ chị yên tâm, shop đóng **hộp carton trơn**, không in tên hay hình sản phẩm, vận đơn chỉ ghi **"phụ kiện"**. Chị chọn **nhận tại bưu cục** cũng được, nhận hàng rồi trả tiền ạ. Chị gửi em **SĐT, địa chỉ** để em lên đơn nha 💗', kw: [3, 4] },
      { kh: 'Để c suy nghĩ thêm' },

      /* ---- 2. Khách im → bám đuổi 2 tin theo thẻ ---- */
      { feature: 2 },
      { sep: 'Khách chưa phản hồi… · AI gắn thẻ #HoaHong #HoiGia', style: 'silent', kw: [0, 1], hold: 1800 },
      { sep: '— 1 ngày sau —' },
      { ai: 'Chị Vy ơi, em gửi chị **ảnh thật** cách shop đóng gói: bên ngoài chỉ là hộp carton trơn, không ai biết bên trong là gì ạ 📦', meta: '🔁 Tự động · Bám đuổi theo thẻ #HoaHong', kw: 2 },
      { aiImgs: [{ img: 'hop-kin', label: 'Hộp carton trơn' }, { img: 'hop-trang', label: 'Hộp trong không in hình' },
                 { img: 'hoa-hong', label: 'Silicon y tế, êm' }, { img: 'gel', label: 'Gel đi kèm' }], hold: 3200 },
      { sep: '— 2 ngày sau —' },
      { ai: 'Mẫu chị hỏi giá, chốt trong tuần này em **tặng gel gốc nước mini** và **freeship** ạ 🎁', meta: '🔁 Tự động · Bám đuổi theo thẻ #HoiGia', kw: 3 },
      { kh: 'Ok lấy c 1 máy nha e' },

      /* ---- 3. Xin SĐT, lên đơn tự động ---- */
      { feature: 3 },
      { ai: 'Dạ chị cho em xin **tên, SĐT và địa chỉ** nhận hàng nha ạ.', kw: 0 },
      { kh: 'Vy – 0938 516 274\n45 Nguyễn Văn Đậu, P.6, Bình Thạnh' },
      { card: {
          tag: '✓ Tin xác nhận đơn',
          intro: 'Dạ chị kiểm tra lại đơn giúp em nhé:',
          lines: ['1 **máy massage hoa hồng**, màu đỏ', 'Tặng 1 gel gốc nước mini', 'Tổng cộng: **420.000đ** · freeship · nhận hàng rồi trả tiền', 'Giao tới: Vy, 45 Nguyễn Văn Đậu · **hộp trơn, ghi "phụ kiện"**'],
          button: 'Quản lý đơn hàng',
        }, kw: 1, hold: 4200 },
      { kh: 'Ok em' },
      { card: {
          tag: '✓ Đã tạo đơn & gửi vận chuyển', ok: true,
          lines: ['Mã đơn: **#HN23115**', 'Mã vận đơn: **VD58316204**', 'Dự kiến giao: **25/11**'],
        }, kw: 2, hold: 3200 },

      /* ---- 4. Chăm sóc sau bán ---- */
      { feature: 4 },
      { sep: '— Ngày 27/11 · 2 ngày sau khi nhận —' },
      { ai: 'Chị Vy ơi, sản phẩm dùng ổn không ạ? Chị nhớ **vệ sinh bằng nước sạch**, lau khô rồi **cất trong túi vải** đi kèm là bền lâu nha 💗', meta: '💗 Tự động · Chăm sóc sau bán', kw: 0 },
      { kh: 'Ổn lắm e, êm thật 😊' },
      { sep: '— 1 tuần sau —' },
      { ai: 'Bên em đang **giảm 15%** mấy món khách hay mua kèm, chị xem thử nha:', kw: 1 },
      { catalog: [
          { name: 'Gel gốc nước', color: '100ml', price: '127.000đ', old: '149.000đ', tag: 'Bán chạy', art: 'gel' },
          { name: 'Nến thơm hương gỗ', color: '200g', price: '169.000đ', old: '199.000đ', tag: '-15%', art: 'nen-2' },
          { name: 'Dầu massage thư giãn', color: '120ml', price: '152.000đ', old: '179.000đ', tag: 'Mới về', art: 'dau-massage' },
        ], hold: 4000 },
      { kh: 'Lấy c thêm nến thơm nha', kw: 2, hold: 1500 },
    ],

    deck: {
      demoDoc: {
        khach: 'Thảo Vy',
        sanPham: 'Máy massage hoa hồng',
        binhLuan: 'Xin giá ạ',
        post: {
          tieuDe: 'MÁY MASSAGE HOA HỒNG – GIAO KÍN ĐÁO 🌹',
          dong: ['Silicon y tế, chạy êm', 'Sạc USB, chống nước', 'Hộp trơn, không in tên sản phẩm', 'Nhận hàng rồi trả tiền'],
          anh: ['hoa-hong', 'hop-kin', 'gel', 'nen'],
        },
      },
      dashboard: [
        { ten: 'Máy massage <span class="grad">silicon y tế</span>', den: '21/07/2026', khach: 22, tyLe: 0.62 },
        { ten: 'Gel, <span class="grad">dầu massage</span>', den: '18/08/2026', khach: 16, tyLe: 0.59 },
        { ten: 'Quà tặng <span class="grad">cho cặp đôi</span>', den: '26/09/2026', khach: 14, tyLe: 0.61 },
      ],
      chatbot: {
        chat: [
          { ref: { img: L(IMG['hoa-hong']), ten: 'Máy massage hoa hồng' } },
          { kh: 'Mẫu này có ồn ko shop? Giao có ai biết ko' },
          { ai: 'Dạ máy chạy **rất êm**, silicon y tế, giá **420.000đ** ạ. Shop giao **hộp trơn**, vận đơn ghi **"phụ kiện"** nha.', meta: '⚡ Preny AI trả lời sau 2 giây' },
          { kh: 'Nhận ở bưu cục đc ko e?' },
          { ai: 'Dạ được ạ, chị nhận tại bưu cục rồi trả tiền. Chị gửi em SĐT, địa chỉ nha.' },
          { kh: 'Vy, 0938 516 274, 45 Nguyễn Văn Đậu, P.6, Bình Thạnh' },
          { ai: 'Dạ em lên đơn, tặng chị gel mini luôn ạ ⚡' },
          { don: true },
          { ok: true },
        ],
        don: {
          ten: 'Vy', sdt: '0938 516 274', diaChi: '45 Nguyễn Văn Đậu, P.6, Bình Thạnh', ma: '#HN23115', phi: 'miễn phí',
          sp: [{ img: L(IMG['hoa-hong']), ten: 'Máy massage hoa hồng (hộp trơn)', sl: 1, dv: 'cái', gia: 420000 }],
        },
        anh: {
          img: L(IMG['xanh']),
          kh: 'Mẫu như hình này còn ko shop?',
          ai: 'Dạ mẫu chị gửi là **máy massage mini màu xanh mint**, bên em có giá **350.000đ** ạ. Giao **hộp trơn, kín đáo** như mọi đơn nha.',
        },
      },
      afterSale: {
        loi: 'Cảm ơn chị Vy đã tin chọn Hồng Nhung Store 💗 Nhiều khách lấy thêm mấy món này dùng kèm ạ:',
        sp: [
          { img: L(IMG['gel']), ten: 'Gel gốc nước 100ml', gia: 149000 },
          { img: L(IMG['nen-2']), ten: 'Nến thơm hương gỗ 200g', gia: 199000 },
          { img: L(IMG['dau-massage']), ten: 'Dầu massage thư giãn 120ml', gia: 179000 },
          { img: L(IMG['bcs']), ten: 'Bao cao su siêu mỏng hộp 10', gia: 89000, cu: 109000 },
          { img: L(IMG['xanh']), ten: 'Máy massage mini xanh mint', gia: 350000 },
        ],
        khach: 'Lấy thêm c chai gel nha',
        pill: '🛍 Khách mua thêm ngay: đơn tăng từ 420.000đ lên 569.000đ',
        fmm: {
          chao: 'Chào chị Vy 👋 Hồng Nhung Store vừa có bộ quà Giáng sinh cho cặp đôi, gửi chị xem trước nha!',
          img: L(IMG['nen-2']), nhan: 'QUÀ GIÁNG SINH',
          ten: 'Bộ quà nến thơm + dầu massage', mo: 'Khách cũ giảm 15%, giao hộp trơn.', nut: 'Xem ngay',
        },
        zbs: {
          ten: 'Tặng chị Vy voucher 30.000đ',
          mo: 'Cảm ơn chị đã mua hàng tại Hồng Nhung Store. Gửi chị ưu đãi cho lần mua tiếp theo:',
          dong: [['Mã voucher', '**HONGNHUNG30**'], ['Ưu đãi', 'Giảm 30.000đ đơn từ 300.000đ'], ['Hạn dùng', '31/01/2027']],
          nut: 'Dùng voucher ngay',
        },
      },
      bamDuoi: {
        cmpDung: ['Khách nhắn xong im → nhắc đúng mẫu khách đã xem (thẻ <b>#HoaHong</b> từ quảng cáo)',
                  'Báo giá xong im → bám đuổi theo giá: quà tặng, freeship (thẻ <b>#HoiGia</b>)',
                  'Đúng nhu cầu, đúng lý do im → khách quay lại mua'],
        hoi: 'Mẫu hoa hồng giá sao shop?',
        traLoiThuong: 'Dạ 420.000đ ạ.',
        refImg: L(IMG['hoa-hong']), refTen: 'Máy massage hoa hồng',
        vd1: {
          kh: 'Giao hàng có ai biết bên trong không shop?',
          ai: 'Dạ shop giao hộp trơn, không in tên sản phẩm ạ. Chị nhận ở nhà hay bưu cục để em ghi chú nha?',
          tag: '🏷 #HoaHong', tagNote: 'thẻ từ quảng cáo · khách im 1 ngày',
          nhac: 'Chị ơi, em gửi chị <b>ảnh thật hộp đóng gói</b>: carton trơn, vận đơn ghi "phụ kiện", không ai biết bên trong. Chị báo em nhận ở đâu để em lên đơn nha 😊',
          dung: '🎯 Theo thẻ #HoaHong: nhắc đúng nỗi lo kín đáo của khách',
          khach: 'Nhận ở bưu cục nha e',
        },
        vd2: {
          kh: 'Mẫu hoa hồng bao nhiêu vậy shop?',
          ai: 'Dạ máy massage hoa hồng <b>420.000đ</b>, freeship ạ.',
          tag: '🏷 #HoiGia', tagNote: 'báo giá xong khách im 1 ngày',
          nhac: 'Chị ơi, mẫu chị hỏi giá hôm qua, chốt trong tuần em <b>tặng gel mini, freeship</b> ạ. Em lên đơn cho chị nha?',
          dung: '🎯 Theo thẻ #HoiGia: bám đuổi theo giá, đúng lý do khách im',
          khach: 'Ok lấy c 1 máy nha e',
        },
      },
      binhLuan: {
        post: 'Máy massage <b>hoa hồng</b> silicon y tế · chạy êm, sạc USB · giao hộp trơn, kín đáo 🌹',
        img: L(IMG['hop-kin']),
        kav: 'MT', kten: 'Minh Thư', hoi: 'Giá sao shop? Giao có kín không?',
        traLoi: 'Dạ shop đã nhắn riêng cho bạn nha 💬',
        act2: 'Nhắn riêng, tư vấn kín đáo',
        nhan: 'Chào chị Thư! Máy massage hoa hồng giá <b>420.000đ</b>, combo kèm <b>gel gốc nước 520.000đ</b> ạ. Shop giao <b>hộp trơn</b>, vận đơn ghi "phụ kiện". Chị gửi em SĐT, địa chỉ để em lên đơn nha?',
        sp: { ten: 'Combo máy massage + gel gốc nước', gia: '520.000đ', img: L(IMG['gel']) },
        khach: 'Lấy c combo nha',
      },
      duLieu: {
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: bảo hành 2 năm, sạc 1 lần dùng cả tháng', 'Khách đổi trả, shop mất uy tín'],
        hoi: 'Máy này bảo hành 2 năm, sạc 1 lần dùng cả tháng đúng ko shop?',
        aiSai: 'Dạ đúng ạ! <b>Bảo hành 2 năm</b>, sạc 1 lần <b>dùng cả tháng</b> luôn chị 🥰',
        thucTe: '⚠ Thực tế: bảo hành 6 tháng; pin dùng khoảng 60–90 phút mỗi lần sạc',
        gian: 'Mới dùng 3 ngày đã phải sạc! Sao nói sạc 1 lần dùng cả tháng? 😠',
        cho: 'Dạ chị chờ em một chút để em kiểm tra chính xác thông tin sản phẩm cho chị nhé!',
        nv: 'Nhân viên Nhung · người thật',
        nvTraLoi: 'Dạ em xin lỗi chị ạ. Máy dùng khoảng 60–90 phút mỗi lần sạc, bảo hành 6 tháng. Em gửi chị cách sạc đúng, máy có lỗi em đổi mới liền cho chị nhé!',
      },
    },
  };
})();
