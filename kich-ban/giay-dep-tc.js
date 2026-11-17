/* Kịch bản: GIÀY DÉP (giày nữ, giày nam, sneaker, sandal) — BẢN TRÌNH CHIẾU, nhóm THƯƠNG MẠI ĐIỆN TỬ.
   Làm 17/11/2026 theo pipeline mới (TRINH-CHIEU.md mục 1). Demo chat chuẩn thương mại điện tử (mục 3), một mạch:
     chị Thảo (giáo viên đứng lớp cả ngày, chân bè) gửi ảnh giày búp bê lưới, phân vân size vì mỗi hãng một size, sợ đau chân
     → AI hỏi chiều dài bàn chân (23,5cm → size 37), giải thích form rộng mũi tròn, đế êm chống mỏi, gót mềm, đổi size 7 ngày
     → chị im → bám đuổi 2 tin theo thẻ #GiayBupBe (ảnh thật đủ màu), #HoiGia (giảm giá + freeship + lót gót êm)
     → chốt, lên đơn (xác nhận size, màu) → chăm sóc sau bán: dặn bảo quản giày lưới, gợi ý cao gót đi tiệc cuối năm, sneaker, giày da nam cho chồng.
   Không có tin tự động cập nhật vận chuyển. Không có bước kết thúc: bấm → là sang slide kế.
   Tên shop, giá, chính sách, tên khách, SĐT: dữ liệu minh họa. Ảnh: Unsplash (ảnh thật, không phải hàng của shop). */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'bup-be': '1758542988664-49951c5b1999',         // giày búp bê lưới đen, nơ nhỏ
    'bup-be-2': '1720604083961-88336789791e',       // búp bê nhiều màu: đỏ, kem, trắng, đen
    'sneaker': '1626379616459-b2ce1d9decbc',        // sneaker trắng
    'giay-da-nam': '1641893843833-a006778dc00b',    // giày da nam buộc dây, đục lỗ, nâu đỏ
    'giay-da-nam-2': '1603191659812-ee978eeeef76',  // giày da nam màu bò
    'cao-got': '1535043934128-cf0b28d52f95',        // cao gót mũi nhọn màu kem
    'sandal': '1662132090867-57a37fa1edf8',         // sandal quai ngang màu bò
    'cua-hang': '1633464129147-777bdcc97c1d',       // kệ giày trong cửa hàng
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    shop: { name: 'Giày Bước Êm', initials: 'BE' },
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
        kws: ['Trả lời ngay tức thì, 24/7', 'Hỏi chiều dài bàn chân trước khi chọn size', 'Chọn form theo dáng chân bè, chân thon', 'Giải thích đế êm, chống phồng gót', 'Báo giá, đổi size 7 ngày, chủ động chốt'] },
      { title: 'AI tự động bám đuổi khách hàng trong 7 ngày', desc: 'Tăng thêm khoảng 35% tỷ lệ chốt đơn.',
        kws: ['~65% khách nhắn tin rồi im lặng', 'Tự gắn thẻ mẫu khách xem, lý do im', 'Gửi ảnh thật đủ màu mẫu khách hỏi', 'Báo giá xong im → ưu đãi giá đúng lúc'] },
      { title: 'AI Agent tự động lên đơn và gửi sang đơn vị vận chuyển', desc: 'Tiết kiệm hơn 90% thời gian xử lý đơn.',
        kws: ['Thu đủ tên, SĐT, địa chỉ, size, màu', 'Gửi tin xác nhận đơn đầy đủ', 'Tự tạo đơn, gửi vận chuyển'] },
      { title: 'AI tự động chăm sóc khách hàng sau bán', desc: 'Tăng doanh thu từ khách hàng cũ.',
        kws: ['Hỏi thăm, dặn bảo quản giày', 'Gợi ý mẫu theo dịp, cho cả nhà', 'Khách mua thêm, tăng giá trị vòng đời'] },
    ],

    steps: [
      { intro: true, hold: 1800 },

      /* ---- 1. Tư vấn: ca khó mỗi hãng một size, chân bè sợ đau chân ---- */
      { feature: 1 },
      { sep: 'Khách nhắn tin từ quảng cáo Facebook', style: 'time', hold: 800 },
      { img: 'bup-be', hold: 1500 },
      { kh: 'Mẫu này còn k shop? C là gv đứng lớp cả ngày, chân bè, đi búp bê hay bị cấn ngón út với phồng gót 😩 C đi size 37 hãng này, 38 hãng kia, ko biết lấy size nào' },
      { ai: 'Dạ chào chị! Mẫu này bên em còn đủ size ạ 🌸', fast: true, meta: '⚡ Preny AI trả lời sau 2 giây', kw: 0 },
      { ai: 'Mỗi hãng một bảng size nên chị cho em xin **chiều dài bàn chân** nha: chị đặt chân lên tờ giấy, kẻ từ **gót tới ngón dài nhất** rồi đo bằng thước ạ.', kw: 1 },
      { kh: 'C đo được 23,5cm, ngang bàn chân hơi bè em' },
      { ai: 'Dạ chân **23,5cm** chị lấy **size 37** bên em là vừa ạ. Mẫu **búp bê lưới mũi tròn** này làm **form rộng ngang**, lưới mềm co giãn nên chân bè đi **không cấn ngón út**, chị không cần tăng size kẻo tuột gót ạ.', kw: 2 },
      { ai: 'Đế cao su **êm 1,5cm**, lót **đệm mút chống mỏi**, gót bọc vải mềm nên **không phồng gót**, đứng lớp cả ngày vẫn êm chân ạ.', kw: 3 },
      { ai: 'Giày giá **389.000đ**, **đổi size miễn phí 7 ngày** nếu chưa vừa. Chị lấy màu đen như hình để em giữ size 37 cho chị nha? 😊', kw: 4 },
      { kh: 'Để c tính đã, sợ mua về lại đau chân như mấy đôi trước' },

      /* ---- 2. Khách im → bám đuổi 2 tin theo thẻ ---- */
      { feature: 2 },
      { sep: 'Khách chưa phản hồi… · AI gắn thẻ #GiayBupBe #HoiGia', style: 'silent', kw: [0, 1], hold: 1800 },
      { sep: '— 1 ngày sau —' },
      { ai: 'Chị Thảo ơi, em gửi chị **ảnh thật mẫu búp bê lưới** đủ màu nè. Nhiều cô giáo bên em mua, đứng lớp cả ngày **không mỏi chân** ạ 😊', meta: '🔁 Tự động · Bám đuổi theo thẻ #GiayBupBe', kw: 2 },
      { aiImgs: [{ img: 'bup-be', label: 'Lưới đen, nơ nhỏ' }, { img: 'bup-be-2', label: 'Màu kem, trắng, đỏ' },
                 { img: 'sandal', label: 'Sandal cùng đế êm' }, { img: 'cua-hang', label: 'Thử tại cửa hàng' }], hold: 3200 },
      { sep: '— 2 ngày sau —' },
      { ai: 'Mẫu búp bê lưới chị hỏi giá, chốt trong hôm nay em **giảm còn 349.000đ** + **freeship**, tặng **cặp lót gót êm**, vẫn **đổi size 7 ngày** ạ 🎁', meta: '🔁 Tự động · Bám đuổi theo thẻ #HoiGia', kw: 3 },
      { kh: 'Ok chốt c 1 đôi size 37 màu đen nha em' },

      /* ---- 3. Lên đơn tự động (không có tin cập nhật vận chuyển) ---- */
      { feature: 3 },
      { ai: 'Dạ chị cho em xin **tên, SĐT và địa chỉ nhận hàng** nha. Em chốt **size 37, màu đen** cho chị đúng không ạ?', kw: 0 },
      { kh: 'Trần Thị Thảo – 0912 486 357\n18 ngõ 42 Trần Cung, Cầu Giấy, Hà Nội. Đúng rồi em' },
      { card: {
          tag: '✓ Tin xác nhận đơn',
          intro: 'Dạ chị kiểm tra lại đơn giúp em nhé:',
          lines: ['1 Giày búp bê lưới đế êm · Đen · Size 37', 'Tặng: 1 cặp lót gót êm', 'Tổng cộng: **349.000đ** · freeship, nhận hàng trả tiền', 'Người nhận: Trần Thị Thảo · 0912 486 357', 'Giao tới: 18 ngõ 42 Trần Cung, Cầu Giấy, Hà Nội'],
          button: 'Quản lý đơn hàng',
        }, kw: 1, hold: 4500 },
      { kh: 'Ok em' },
      { card: {
          tag: '✓ Đã tạo đơn & gửi vận chuyển', ok: true,
          lines: ['Mã đơn: **#BE20418**', 'Mã vận đơn: **VD61730582**', 'Dự kiến giao: **1–2 ngày**, được xem hàng trước khi nhận'],
        }, kw: 2, hold: 3500 },

      /* ---- 4. Chăm sóc sau bán ---- */
      { feature: 4 },
      { sep: '— 5 ngày sau —' },
      { ai: 'Chị Thảo ơi, giày đi lớp có êm chân không ạ? Giày lưới chị **lau bằng khăn ẩm**, **phơi chỗ mát**, đừng giặt máy hay phơi nắng gắt để **đế không bong** nha 💚', meta: '💚 Tự động · Chăm sóc sau bán', kw: 0 },
      { kh: 'Êm lắm em, đứng 4 tiết liền không mỏi chân 👍' },
      { sep: '— 1 tuần sau —' },
      { ai: 'Cuối năm nhiều **tiệc cưới**, họp mặt rồi chị, mấy mẫu khách cũ hay mua thêm để đi tiệc, tặng anh nhà, em **giảm 10%** cho chị ạ:', kw: 1 },
      { catalog: [
          { name: 'Cao gót mũi nhọn lót êm', color: 'Kem', price: '386.000đ', old: '429.000đ', tag: 'Đi tiệc cưới', art: 'cao-got' },
          { name: 'Sneaker trắng đế êm', color: 'Trắng', price: '413.000đ', old: '459.000đ', tag: 'Bán chạy', art: 'sneaker' },
          { name: 'Giày da nam buộc dây', color: 'Nâu đỏ', price: '801.000đ', old: '890.000đ', tag: 'Tặng chồng', art: 'giay-da-nam' },
        ], hold: 4000 },
      { kh: 'Lấy c thêm đôi giày da nam size 41 cho chồng nha em', kw: 2, hold: 1500 },
      // Không có { end: true }: bấm → thêm một lần là sang thẳng slide kế.
    ],

    /* ===== Nội dung slide trình chiếu (trinh-chieu.html). Slide thống kê dùng số minh họa (deck.dashboard). ===== */
    deck: {
      /* Demo chat dọc (demo-doc.js): tên khách trên Messenger, bài đăng Facebook (anh = khóa trong images), câu bình luận. */
      demoDoc: {
        khach: 'Thảo Trần',
        sanPham: 'Giày búp bê lưới đế êm',
        binhLuan: 'Chân bè đi được không shop?',
        post: {
          tieuDe: 'GIÀY BÚP BÊ LƯỚI ĐẾ ÊM 🌸',
          dong: ['Form rộng, chân bè đi êm', 'Đế êm, chống mỏi chân', 'Đủ size 35–40, nhiều màu', 'Đổi size miễn phí 7 ngày'],
          anh: ['bup-be', 'bup-be-2', 'sandal', 'cua-hang'],
        },
      },
      /* Pipeline thương mại điện tử 16/11/2026 (TRINH-CHIEU.md mục 1): dashboard, chatbot, afterSale. */
      dashboard: [
        { ten: 'Giày búp bê, <span class="grad">giày công sở</span>', den: '21/07/2026', khach: 14, tyLe: 0.56 },
        { ten: 'Sneaker, <span class="grad">giày thể thao</span>', den: '18/08/2026', khach: 18, tyLe: 0.54 },
        { ten: 'Giày da nam, <span class="grad">giày tây</span>', den: '26/09/2026', khach: 9, tyLe: 0.57 },
      ],
      chatbot: {
        chat: [
          { ref: { img: L(IMG['bup-be']), ten: 'Giày búp bê lưới đế êm' } },
          { kh: 'Mẫu này còn k shop? C đứng lớp cả ngày, chân bè, sợ đau chân' },
          { ai: 'Dạ còn ạ chị! Mỗi hãng một bảng size nên chị cho em xin **chiều dài bàn chân** (cm) để em chọn đúng size nha.', meta: '⚡ Preny AI trả lời sau 2 giây' },
          { kh: 'Chân c dài 23,5cm, hơi bè' },
          { ai: 'Dạ chị lấy **size 37** là vừa ạ. Mẫu này **form rộng mũi tròn**, lưới mềm, **đế êm chống mỏi**, chân bè đứng cả ngày không cấn. Giá **389.000đ**, **đổi size 7 ngày** ạ.' },
          { kh: 'Ok lấy c 1 đôi đen size 37. Trần Thị Thảo, 0912 486 357, 18 ngõ 42 Trần Cung, Cầu Giấy, HN' },
          { ai: 'Dạ em lên đơn, gửi vận chuyển cho chị ngay ạ ⚡' },
          { don: true },
          { ok: true },
        ],
        don: {
          ten: 'Trần Thị Thảo', sdt: '0912 486 357', diaChi: '18 ngõ 42 Trần Cung, Cầu Giấy, Hà Nội', ma: '#BE20418', phi: 'freeship',
          sp: [{ img: L(IMG['bup-be']), ten: 'Giày búp bê lưới đế êm · Đen · 37', sl: 1, gia: 389000 }],
        },
        anh: {
          img: L(IMG['giay-da-nam']),
          kh: 'Giày da nam như hình này bên em có không? Mua cho chồng',
          ai: 'Dạ hình chị gửi là **giày da nam buộc dây, mũi đục lỗ** ạ, da bò thật màu **nâu đỏ**, giá **890.000đ**. Chị đo giúp em **chiều dài bàn chân** anh nhà để em chọn đúng size nha.',
        },
      },
      afterSale: {
        loi: 'Cảm ơn chị Thảo đã tin Giày Bước Êm 💚 Khách mua búp bê đế êm hay lấy thêm mấy mẫu này ạ:',
        sp: [
          { img: L(IMG['sandal']), ten: 'Sandal quai ngang đế êm', gia: 329000 },
          { img: L(IMG['sneaker']), ten: 'Sneaker trắng đế êm', gia: 459000 },
          { img: L(IMG['cao-got']), ten: 'Cao gót mũi nhọn lót êm', gia: 386000, cu: 429000 },
          { img: L(IMG['giay-da-nam']), ten: 'Giày da nam buộc dây', gia: 890000 },
          { img: L(IMG['giay-da-nam-2']), ten: 'Giày da nam màu bò', gia: 950000, nut: 'Chọn size' },
        ],
        khach: 'Lấy thêm c đôi sandal quai ngang size 37 nha',
        pill: '🛍 Khách mua thêm ngay: đơn tăng từ 389.000đ lên 718.000đ',
        fmm: {
          chao: 'Chào chị Thảo 👋 Giày Bước Êm vừa về mẫu sneaker đế êm mới, gửi chị xem trước nha!',
          img: L(IMG['sneaker']), nhan: 'HÀNG MỚI VỀ',
          ten: 'Sneaker trắng đế êm đi cả ngày', mo: 'Khách cũ giảm 10%, đổi size 7 ngày.', nut: 'Xem sản phẩm',
        },
        zbs: {
          ten: 'Tặng chị Thảo voucher 50.000đ',
          mo: 'Cảm ơn chị đã mua giày tại Giày Bước Êm. Gửi chị ưu đãi cho lần mua tiếp theo:',
          dong: [['Mã voucher', '**BUOCEM50**'], ['Ưu đãi', 'Giảm 50.000đ đơn từ 400.000đ'], ['Hạn dùng', '31/01/2027']],
          nut: 'Dùng voucher ngay',
        },
      },
      bamDuoi: {
        cmpDung: ['Khách nhắn xong im → nhắc đúng mẫu khách đã xem (thẻ <b>#GiayBupBe</b> từ quảng cáo)',
                  'Báo giá xong im → bám đuổi theo giá: ưu đãi, quà tặng (thẻ <b>#HoiGia</b>)',
                  'Đúng nhu cầu, đúng lý do im → khách quay lại mua'],
        hoi: 'Giày búp bê này giá bao nhiêu shop?',
        traLoiThuong: 'Dạ giày giá 389.000đ ạ.',
        refImg: L(IMG['bup-be']), refTen: 'Giày búp bê lưới đế êm',
        vd1: {
          kh: 'Mẫu này còn size 37 không shop?',
          ai: 'Dạ còn ạ chị! Chị cho em xin chiều dài bàn chân để em chọn đúng size nha?',
          tag: '🏷 #GiayBupBe', tagNote: 'thẻ từ quảng cáo · khách im 1 ngày',
          nhac: 'Chị ơi, em gửi chị <b>ảnh thật mẫu búp bê lưới</b> đủ màu. Chị đo giúp em chiều dài bàn chân để em giữ đúng size nha 😊',
          dung: '🎯 Theo thẻ #GiayBupBe: nhắc đúng mẫu khách xem',
          khach: 'Chân c dài 23,5cm em',
        },
        vd2: {
          kh: 'Búp bê lưới bao nhiêu shop?',
          ai: 'Dạ mẫu <b>búp bê lưới đế êm</b> giá <b>389.000đ</b>, đổi size 7 ngày ạ.',
          tag: '🏷 #HoiGia', tagNote: 'báo giá xong khách im 1 ngày',
          nhac: 'Chị ơi, mẫu búp bê chị hỏi giá hôm qua, hôm nay em <b>giảm còn 349.000đ + freeship</b>, tặng lót gót êm ạ. Em giữ size cho chị nha?',
          dung: '🎯 Theo thẻ #HoiGia: bám đuổi theo giá, đúng lý do khách im',
          khach: 'Ok giữ c size 37 màu đen',
        },
      },
      binhLuan: {
        post: 'Giày búp bê <b>lưới đế êm</b> · form rộng cho chân bè, đổi size 7 ngày 🌸',
        img: L(IMG['bup-be-2']),
        kav: 'LH', kten: 'Lê Hương', hoi: 'Chân c to bè, mu bàn chân cao đi được không shop? Có size 39 không?',
        traLoi: 'Dạ chào chị Hương! Shop vừa nhắn tin tư vấn chi tiết cho chị, chị xem tin nhắn nhé 💬',
        act2: 'Nhắn tin riêng tư vấn đúng size',
        nhan: 'Chào chị Hương! Mẫu búp bê lưới làm <b>form rộng, mũi tròn</b>, lưới mềm nên mu bàn chân cao vẫn đi êm ạ. Bên em có đủ <b>size 35–40</b>. Chị đo giúp em <b>chiều dài bàn chân</b> để em chọn đúng size nha!',
        sp: { ten: 'Giày búp bê lưới đế êm', gia: '389.000đ', img: L(IMG['bup-be']) },
        khach: 'Chân c dài 24,5cm em',
      },
      duLieu: {
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: đổi trả, hoàn tiền', 'Khách đòi trả không được, shop mất uy tín'],
        hoi: 'Giày đi rồi không vừa thì trả lại được không em? Có hoàn tiền không?',
        aiSai: 'Dạ được ạ! Đi rồi không ưng chị cứ <b>gửi lại</b>, shop <b>hoàn tiền 100% trong 30 ngày</b> luôn chị nhé 🥰',
        thucTe: '⚠ Thực tế: chỉ đổi size trong 7 ngày, giày chưa đi ra ngoài',
        gian: 'Giày đi 2 tuần rồi sao không cho trả? Shop hứa hoàn tiền 30 ngày mà! 😠',
        cho: 'Dạ chị chờ em một chút để em kiểm tra chính xác chính sách đổi trả cho mình nhé!',
        nv: 'CSKH Ngân · người thật',
        nvTraLoi: 'Dạ shop hỗ trợ đổi size trong 7 ngày khi giày chưa đi ra ngoài chị ạ. Chị cần đổi size em gửi phiếu đổi, miễn phí ship nhé!',
      },
    },
  };
})();
