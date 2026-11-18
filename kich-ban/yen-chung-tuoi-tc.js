/* Kịch bản: YẾN CHƯNG TƯƠI (yến chưng tươi đóng hũ, yến tinh chế, yến thô, hộp quà biếu) — BẢN TRÌNH CHIẾU, nhóm THƯƠNG MẠI ĐIỆN TỬ.
   Làm 18/11/2026 theo pipeline mới (TRINH-CHIEU.md mục 1), tham khảo fanpage Yến Tươi Công Hậu (Thủ Đức, TP.HCM):
   yến thô, yến tinh chế, yến chưng tươi, yến chưng táo đỏ, kỷ tử, long nhãn, đông trùng hạ thảo; quà biếu cuối năm.
   Demo chat chuẩn thương mại điện tử (mục 3), một mạch:
     chị Thảo mua set yến chưng tươi biếu mẹ cuối năm; ca khó: mẹ bị tiểu đường, gửi về nhà mẹ ở Thủ Đức, hỏi để được mấy ngày
     → AI báo set 6 hũ bản KHÔNG ĐƯỜNG (đường cỏ ngọt), dặn hỏi bác sĩ lượng dùng, nói rõ yến là thực phẩm, không phải thuốc;
       yến chưng tươi không chất bảo quản: ngăn mát 5 ngày, giao nội thành trong ngày, có túi giữ lạnh
     → chị im → bám đuổi 2 tin theo thẻ #YenKhongDuong (ảnh thật quy trình chưng), #HoiGia (tặng hộp quà + thiệp)
     → chốt, lên đơn (giao sáng mai, ghi thiệp) → chăm sóc sau bán: dặn dùng trong 5 ngày, gợi ý hộp quà Tết yến tinh chế.
   Không có tin tự động cập nhật vận chuyển, không có tin nhắc trước giờ giao. Không có bước kết thúc: bấm → là sang slide kế.
   Tên shop, giá, tên khách, SĐT, địa chỉ: dữ liệu minh họa (fanpage không ghi giá). Ảnh: Unsplash (ảnh thật, không phải hàng của shop). */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'hu-yen': '1768203635611-c8542d3d1c6f',        // hũ thủy tinh, yến chưng trắng
    'chen-yen': '1621658537360-dfcb008fe19f',      // chén yến chưng, nền vải bố
    'chen-yen-2': '1621658537105-fd4c446d525c',    // chén yến chưng, nền xám, muỗng
    'yen-coc': '1633674863358-5391dd60f3d3',       // yến chưng trong chén nhỏ
    'tho-chung': '1603094110083-36267836e66b',     // thố chưng có nắp
    'yen-sup': '1636520326974-f3ff71fe2515',       // chén yến sợi
    'yen-tinh-che': '1767969202119-97dea27c7c68',  // yến tinh chế xếp hộp tròn
    'yen-hop': '1767969202156-344e76a7b659',
    'yen-hop-2': '1767969202094-37902db22c28',
    'ky-tu': '1653989451597-21b2fa4036bf',         // kỷ tử
    'tao-do': '1537203374277-c6cf7cebea4a',        // táo đỏ
    'dong-trung': '1630623093190-166d69e55f41',    // đông trùng hạ thảo sấy
    'long-nhan': '1597975371283-5461cdf69d5e',     // long nhãn
    'qua-tet': '1765524080215-01d6e4d48928',       // hộp quà đỏ nơ vàng
    'hop-qua': '1545844568-98bb15133ec0',          // hộp quà trắng nơ đỏ
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    shop: { name: 'Yến Sào An Khang', initials: 'AK' },
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
        kws: ['Trả lời ngay tức thì, 24/7', 'Nhận diện đúng set yến từ ảnh', 'Chọn bản không đường cho người tiểu đường', 'Không hứa chữa bệnh', 'Báo hạn dùng, giao trong ngày, chủ động chốt'] },
      { title: 'AI tự động bám đuổi khách hàng trong 7 ngày', desc: 'Tăng thêm khoảng 35% tỷ lệ chốt đơn.',
        kws: ['~65% khách nhắn tin rồi im lặng', 'Tự gắn thẻ loại yến khách xem, lý do im', 'Gửi ảnh thật quy trình chưng yến', 'Báo giá xong im → quà tặng đúng lúc'] },
      { title: 'AI Agent tự động lên đơn và gửi sang đơn vị vận chuyển', desc: 'Tiết kiệm hơn 90% thời gian xử lý đơn.',
        kws: ['Thu đủ tên, SĐT, địa chỉ người nhận', 'Ghi đúng lời chúc trên thiệp', 'Tự tạo đơn, hẹn giờ giao'] },
      { title: 'AI tự động chăm sóc khách hàng sau bán', desc: 'Tăng doanh thu từ khách hàng cũ.',
        kws: ['Hỏi thăm, dặn bảo quản yến chưng', 'Gợi ý hộp quà Tết đúng dịp', 'Khách mua thêm, tăng giá trị vòng đời'] },
    ],

    steps: [
      { intro: true, hold: 1800 },

      /* ---- 1. Tư vấn: ca khó mẹ bị tiểu đường, hỏi để được mấy ngày ---- */
      { feature: 1 },
      { sep: 'Khách nhắn tin từ quảng cáo Facebook', style: 'time', hold: 800 },
      { img: 'hu-yen', hold: 1500 },
      { kh: 'Shop ơi c muốn mua set yến chưng như này biếu mẹ. Mẹ c bị tiểu đường ăn đc k e? Giao về Thủ Đức, để đc mấy ngày vậy?' },
      { ai: 'Dạ chào chị! Em tư vấn set yến cho mẹ chị liền ạ 🥣', fast: true, meta: '⚡ Preny AI trả lời sau 2 giây', kw: 0 },
      { ai: 'Mẫu chị gửi là **set 6 hũ yến chưng tươi 70ml**. Bên em có bản **không đường, dùng đường cỏ ngọt**, giá **330.000đ/set**, hợp cho người cần kiêng đường ạ.', kw: [1, 2] },
      { ai: 'Yến là thực phẩm bồi bổ, **không phải thuốc** chị nha. Mẹ đang điều trị tiểu đường thì chị hỏi bác sĩ giúp em nên dùng mấy hũ một tuần là yên tâm nhất ạ.', kw: 3 },
      { kh: 'Có chất bảo quản k e, mẹ c ở 1 mình sợ để lâu' },
      { ai: 'Dạ yến chưng tươi **không chất bảo quản**, để **ngăn mát được 5 ngày** ạ. Bên em giao **nội thành trong ngày**, có túi giữ lạnh. Chị chốt để em chưng mẻ sáng mai cho mẹ nha? 😊', kw: 4 },
      { kh: 'Để c hỏi lại mẹ đã' },

      /* ---- 2. Khách im → bám đuổi 2 tin theo thẻ ---- */
      { feature: 2 },
      { sep: 'Khách chưa phản hồi… · AI gắn thẻ #YenKhongDuong #HoiGia', style: 'silent', kw: [0, 1], hold: 1800 },
      { sep: '— 1 ngày sau —' },
      { ai: 'Chị Thảo ơi, em gửi chị **ảnh thật** mẻ yến không đường bên em vừa chưng sáng nay: yến tinh chế, chưng cách thủy, đóng hũ trong ngày ạ 🥣', meta: '🔁 Tự động · Bám đuổi theo thẻ #YenKhongDuong', kw: 2 },
      { aiImgs: [{ img: 'yen-tinh-che', label: 'Yến tinh chế' }, { img: 'tho-chung', label: 'Chưng cách thủy' },
                 { img: 'chen-yen', label: 'Yến chưng xong' }, { img: 'hu-yen', label: 'Đóng hũ 70ml' }], hold: 3200 },
      { sep: '— 2 ngày sau —' },
      { ai: 'Set yến chị hỏi giá, chốt trong tuần này em **tặng hộp quà và thiệp** viết lời chúc, **miễn phí giao Thủ Đức** ạ 🎁', meta: '🔁 Tự động · Bám đuổi theo thẻ #HoiGia', kw: 3 },
      { kh: 'Ok lấy c 1 set không đường nha e, ghi thiệp giúp c' },

      /* ---- 3. Lên đơn tự động (không có tin cập nhật vận chuyển) ---- */
      { feature: 3 },
      { ai: 'Dạ chị cho em xin **tên, SĐT và địa chỉ người nhận** nha. Chị muốn ghi trên thiệp lời chúc gì ạ?', kw: 0 },
      { kh: 'Người nhận Lê Thị Hoa – 0906 284 351\n56 đường số 9, P. Linh Xuân, Thủ Đức. Thiệp ghi "Con chúc mẹ luôn khỏe mạnh"' },
      { card: {
          tag: '✓ Tin xác nhận đơn',
          intro: 'Dạ chị kiểm tra lại đơn giúp em nhé:',
          lines: ['1 Set 6 hũ yến chưng tươi **không đường** 70ml', 'Tặng hộp quà + thiệp: "Con chúc mẹ luôn khỏe mạnh"', 'Tổng cộng: **330.000đ** · miễn phí giao · nhận hàng rồi trả tiền', 'Giao tới: Lê Thị Hoa, 56 đường số 9, P. Linh Xuân, Thủ Đức', 'Giao sáng mai, có túi giữ lạnh'],
          button: 'Quản lý đơn hàng',
        }, kw: 1, hold: 4500 },
      { kh: 'Ok em' },
      { card: {
          tag: '✓ Đã tạo đơn & gửi vận chuyển', ok: true,
          lines: ['Mã đơn: **#AK21118**', 'Mã vận đơn: **VD58240931**', 'Giao: **sáng 21/11, 8h–10h**'],
        }, kw: 2, hold: 3500 },

      /* ---- 4. Chăm sóc sau bán ---- */
      { feature: 4 },
      { sep: '— Ngày 22/11 · sau khi mẹ nhận yến —' },
      { ai: 'Chị Thảo ơi, mẹ dùng yến thấy hợp không ạ? Chị nhắc mẹ **để ngăn mát, dùng hết trong 5 ngày**, ngon nhất là buổi sáng hoặc trước khi ngủ nha 💛', meta: '💛 Tự động · Chăm sóc sau bán', kw: 0 },
      { kh: 'Mẹ c khen ngon, không ngọt gắt em ơi 😍' },
      { sep: '— 2 tuần sau —' },
      { ai: 'Sắp Tết rồi chị, bên em có **hộp quà Tết** biếu ông bà, đối tác, khách cũ được **giảm 10%** ạ:', kw: 1 },
      { catalog: [
          { name: 'Hộp quà yến tinh chế', color: '50g', price: '1.530.000đ', old: '1.700.000đ', tag: 'Mới về', art: 'yen-tinh-che' },
          { name: 'Set yến đông trùng', color: '6 hũ', price: '378.000đ', old: '420.000đ', tag: 'Bán chạy', art: 'dong-trung' },
          { name: 'Set yến táo đỏ, kỷ tử', color: '6 hũ', price: '297.000đ', old: '330.000đ', tag: '-10%', art: 'tao-do' },
        ], hold: 4000 },
      { kh: 'Lấy c 2 hộp yến tinh chế biếu sếp nha', kw: 2, hold: 1500 },
      // Không có { end: true }: bấm → thêm một lần là sang thẳng slide kế.
    ],

    /* ===== Nội dung slide trình chiếu (trinh-chieu.html). Slide thống kê dùng số minh họa (deck.dashboard). ===== */
    deck: {
      /* Demo chat dọc (demo-doc.js): tên khách trên Messenger, bài đăng Facebook (anh = khóa trong images), câu bình luận. */
      demoDoc: {
        khach: 'Minh Thảo',
        sanPham: 'Set 6 hũ yến chưng tươi',
        binhLuan: 'Xin giá set yến chưng',
        post: {
          tieuDe: 'YẾN CHƯNG TƯƠI – QUÀ SỨC KHỎE CUỐI NĂM 🥣',
          dong: ['Chưng mỗi sáng, không chất bảo quản', 'Có bản không đường cho người kiêng', 'Vị táo đỏ, kỷ tử, đông trùng', 'Giao nội thành trong ngày'],
          anh: ['hu-yen', 'chen-yen', 'yen-tinh-che', 'tao-do'],
        },
      },
      /* Pipeline thương mại điện tử 16/11/2026 (TRINH-CHIEU.md mục 1): dashboard, chatbot, afterSale. */
      dashboard: [
        { ten: 'Yến <span class="grad">chưng tươi</span>', den: '21/07/2026', khach: 13, tyLe: 0.56 },
        { ten: 'Yến <span class="grad">tinh chế, yến thô</span>', den: '18/08/2026', khach: 9, tyLe: 0.53 },
        { ten: 'Hộp quà <span class="grad">yến biếu Tết</span>', den: '26/09/2026', khach: 11, tyLe: 0.58 },
      ],
      chatbot: {
        chat: [
          { ref: { img: L(IMG['hu-yen']), ten: 'Set 6 hũ yến chưng tươi' } },
          { kh: 'Shop ơi c mua set yến chưng biếu mẹ. Mẹ c bị tiểu đường ăn đc k e?' },
          { ai: 'Dạ bên em có **set 6 hũ yến chưng không đường**, dùng đường cỏ ngọt, giá **330.000đ** ạ. Yến là thực phẩm, không phải thuốc, chị hỏi bác sĩ lượng dùng cho mẹ giúp em nha.', meta: '⚡ Preny AI trả lời sau 2 giây' },
          { kh: 'Để được mấy ngày e, giao Thủ Đức k?' },
          { ai: 'Dạ **không chất bảo quản**, ngăn mát **5 ngày** ạ. Giao **nội thành trong ngày**, có túi giữ lạnh, tặng hộp quà và thiệp.' },
          { kh: 'Ok chốt 1 set. Lê Thị Hoa, 0906 284 351, 56 đường số 9, P. Linh Xuân, Thủ Đức' },
          { ai: 'Dạ em lên đơn, chưng mẻ sáng mai cho mẹ chị ngay ạ ⚡' },
          { don: true },
          { ok: true },
        ],
        don: {
          ten: 'Lê Thị Hoa', sdt: '0906 284 351', diaChi: '56 đường số 9, P. Linh Xuân, Thủ Đức', ma: '#AK21118', phi: 'miễn phí',
          sp: [{ img: L(IMG['hu-yen']), ten: 'Set 6 hũ yến chưng không đường', sl: 1, dv: 'set', gia: 330000 }],
        },
        anh: {
          img: L(IMG['yen-tinh-che']),
          kh: 'Hộp yến như hình này bao nhiêu e?',
          ai: 'Dạ mẫu chị gửi là **yến tinh chế hộp 50g**, giá **1.700.000đ** ạ. Chị mua biếu em **gói hộp quà, kèm thiệp** miễn phí nha.',
        },
      },
      afterSale: {
        loi: 'Cảm ơn chị Thảo đã đặt yến biếu mẹ 💛 Nhiều khách mua thêm mấy món này làm quà cuối năm ạ:',
        sp: [
          { img: L(IMG['dong-trung']), ten: 'Set yến đông trùng 6 hũ', gia: 420000 },
          { img: L(IMG['tao-do']), ten: 'Set yến táo đỏ, kỷ tử 6 hũ', gia: 330000 },
          { img: L(IMG['long-nhan']), ten: 'Set yến long nhãn 6 hũ', gia: 330000 },
          { img: L(IMG['yen-tinh-che']), ten: 'Yến tinh chế hộp 50g', gia: 1530000, cu: 1700000 },
          { img: L(IMG['qua-tet']), ten: 'Hộp quà Tết yến cao cấp', gia: 890000 },
        ],
        khach: 'Lấy thêm c 1 set đông trùng cho ba nha',
        pill: '🛍 Khách mua thêm ngay: đơn tăng từ 330.000đ lên 750.000đ',
        fmm: {
          chao: 'Chào chị Thảo 👋 Yến Sào An Khang vừa ra hộp quà Tết 2027, gửi chị xem trước nha!',
          img: L(IMG['qua-tet']), nhan: 'QUÀ TẾT 2027',
          ten: 'Hộp quà yến tinh chế, yến chưng', mo: 'Khách cũ giảm 10%, viết thiệp miễn phí.', nut: 'Xem hộp quà',
        },
        zbs: {
          ten: 'Tặng chị Thảo voucher 30.000đ',
          mo: 'Cảm ơn chị đã mua yến tại Yến Sào An Khang. Gửi chị ưu đãi cho lần mua tiếp theo:',
          dong: [['Mã voucher', '**ANKHANG30**'], ['Ưu đãi', 'Giảm 30.000đ đơn từ 300.000đ'], ['Hạn dùng', '31/01/2027']],
          nut: 'Dùng voucher ngay',
        },
      },
      bamDuoi: {
        cmpDung: ['Khách nhắn xong im → nhắc đúng loại yến khách đã xem (thẻ <b>#YenKhongDuong</b> từ quảng cáo)',
                  'Báo giá xong im → bám đuổi theo giá: quà tặng, miễn phí giao (thẻ <b>#HoiGia</b>)',
                  'Đúng nhu cầu, đúng lý do im → khách quay lại mua'],
        hoi: 'Set yến chưng không đường giá sao shop?',
        traLoiThuong: 'Dạ 330.000đ/set ạ.',
        refImg: L(IMG['hu-yen']), refTen: 'Set 6 hũ yến chưng tươi',
        vd1: {
          kh: 'Yến không đường này người tiểu đường ăn được không shop?',
          ai: 'Dạ bản này dùng đường cỏ ngọt ạ. Chị mua cho ai dùng để em tư vấn kỹ hơn nha?',
          tag: '🏷 #YenKhongDuong', tagNote: 'thẻ từ quảng cáo · khách im 1 ngày',
          nhac: 'Chị ơi, em gửi chị <b>ảnh thật mẻ yến không đường</b> sáng nay. Chị báo em người dùng để em chưng mẻ mới, giao trong ngày nha 😊',
          dung: '🎯 Theo thẻ #YenKhongDuong: nhắc đúng loại yến khách xem',
          khach: 'Mua cho mẹ c em',
        },
        vd2: {
          kh: 'Set 6 hũ bao nhiêu vậy shop?',
          ai: 'Dạ set 6 hũ yến chưng tươi <b>330.000đ</b>, giao nội thành trong ngày ạ.',
          tag: '🏷 #HoiGia', tagNote: 'báo giá xong khách im 1 ngày',
          nhac: 'Chị ơi, set yến chị hỏi giá hôm qua, chốt trong tuần em <b>tặng hộp quà + thiệp, miễn phí giao</b> ạ. Em chưng mẻ sáng mai cho chị nha?',
          dung: '🎯 Theo thẻ #HoiGia: bám đuổi theo giá, đúng lý do khách im',
          khach: 'Ok lấy c 1 set nha e',
        },
      },
      binhLuan: {
        post: 'Yến chưng tươi <b>chưng mỗi sáng</b> · không chất bảo quản, có bản không đường, giao nội thành trong ngày 🥣',
        img: L(IMG['chen-yen']),
        kav: 'NP', kten: 'Ngọc Phương', hoi: 'Bà bầu ăn yến chưng được không shop? Giao Bình Thạnh không?',
        traLoi: 'Dạ chào chị Phương! Shop vừa nhắn tin tư vấn chi tiết cho chị, chị xem tin nhắn nhé 💬',
        act2: 'Nhắn tin riêng tư vấn yến cho mẹ bầu',
        nhan: 'Chào chị Phương! Mẹ bầu nhiều chị vẫn dùng yến, nhưng chị nên <b>hỏi bác sĩ khám thai</b> lượng dùng trước nha. Bên em có <b>yến chưng ít đường</b>, giao Bình Thạnh <b>trong ngày</b>. Chị muốn em gửi giá set mấy hũ ạ?',
        sp: { ten: 'Set yến chưng ít đường', gia: 'từ 300.000đ', img: L(IMG['chen-yen-2']) },
        khach: 'Gửi c giá set 6 hũ nha',
      },
      duLieu: {
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: chữa tiểu đường, để cả tháng', 'Khách dùng sai cách, shop mất uy tín'],
        hoi: 'Yến này người tiểu đường ăn hằng ngày hạ đường huyết luôn đúng k em? Để ngoài được 1 tháng k?',
        aiSai: 'Dạ đúng ạ! Yến <b>hạ đường huyết</b>, ăn hằng ngày thay thuốc được, để ngoài <b>cả tháng</b> vẫn ngon chị nhé 🥰',
        thucTe: '⚠ Thực tế: yến không phải thuốc; yến chưng tươi không chất bảo quản, chỉ để ngăn mát 5 ngày',
        gian: 'Mẹ tôi bỏ thuốc ăn yến, đường huyết tăng! Sao nói thay thuốc được? 😠',
        cho: 'Dạ chị chờ em một chút để em kiểm tra chính xác thông tin sản phẩm cho chị nhé!',
        nv: 'Nhân viên Vy · người thật',
        nvTraLoi: 'Dạ yến là thực phẩm bồi bổ, không thay thuốc chữa bệnh ạ. Mẹ chị cần dùng thuốc theo bác sĩ. Yến chưng tươi để ngăn mát, dùng trong 5 ngày chị nhé!',
      },
    },
  };
})();
