/* Kịch bản: ĐÈN TRANG TRÍ NỘI THẤT — BẢN TRÌNH CHIẾU, nhóm THƯƠNG MẠI ĐIỆN TỬ. Làm 17/11/2026 cho khách kiểu
   "Xưởng Đèn Trang Trí Nội Thất Đặng My" (facebook.com/profile.php?id=61553763524331).
   Demo chat dọc làm ĐÚNG kịch bản 120 giây người dùng gửi (fanpage NỘI THẤT ÁNH SÁNG TEST, đèn Wabi-Sabi bộ 3):
     C1 2 bình luận độc lập (Tư vấn / xin giá) → trang trả lời "check inbox" · C2 quảng cáo, khách bấm [Gửi tin nhắn]
     C3 khách hỏi giá → AI báo giá trước, hỏi chỗ lắp → trần thạch cao: không tự cam kết lắp được, hỏi điểm chờ điện → gửi 4 ảnh
     (tổng thể, lắp thực tế, chi tiết chóa vải, thông số) → khách đồng ý · C4 xin SĐT + địa chỉ ngay → khách đã xem, chưa trả lời
     C5 follow-up đúng 3 mốc 15 phút, 3 tiếng, 20 tiếng → khách bắt đầu nhập · C6 khách gửi thông tin → AI báo tổng COD, chờ xác nhận
     → tạo đơn, gửi lại thông tin đơn bằng tin nhắn văn bản · C7 màn hình Meta CAPI Lead (không gửi Purchase khi COD chưa giao)
     · C8 màn kết. Không FMM, ZBS, nhân viên gọi lại, form hay thẻ đăng ký.
   Tự chạy (Space) canh khoảng 120 giây: thời lượng từng tin ghi ở ddMs, các cảnh ngoài chat ghi ở deck.demoDoc.nhip.
   Kịch bản gốc ghi giá 1.399.000đ, "miễn phí ship" nhưng tổng COD 1.499.000đ: giữ tổng 1.499.000đ, ghi rõ phí giao 100.000đ cho khớp.
   Tên fanpage, giá, SĐT, địa chỉ, phí giao, trạng thái hệ thống: dữ liệu demo. Ảnh: Unsplash (ảnh thật, không phải hàng của shop). */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'bo-3': '1652067660507-bf311b58b9e8',          // bộ 3 đèn thả chóa vải
    'chi-tiet': '1728839505740-909e90654846',      // chi tiết chóa vải
    'ban-an': '1761658652336-95d31ce1d806',        // đèn thả trên bàn ăn
    'ban-an-2': '1593136596203-7212b076f4d2',
    'ban-an-3': '1629236714868-9e43db5bd7c3',
    'chao-mix': '1568563094147-ae8eb3a8a3c0',
    'chao-xep-ly': '1616248249569-0f31805d74dd',
    'chao-may': '1578678809569-1a8ead9cb802',
    'chao-trang': '1676935753336-8f1799b185f6',
    'chao-go': '1568482224714-7843360d588a',
    'den-chum': '1627306411131-358d6d0fd2cb',
    'den-tuong': '1759390304641-9490a433c34b',
    'den-hat': '1759722127805-39a77d665cb9',
    'den-dung': '1769146108350-8e99eea80bc1',
    'den-dung-2': '1673939859210-23d8444237ff',
    'chum-bi': '1656403002413-2ac6137237d6',
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    shop: { name: 'Nội Thất Ánh Sáng Test', initials: 'AS' },
    headline: { pre: 'Hệ thống AI chatbot giúp tăng trung bình', em: '62% tỷ lệ chốt đơn' },
    sub: 'Tự động trả lời bình luận, tư vấn mẫu đèn, follow-up và chốt đơn COD ngay trên Messenger.',
    cta: 'Dùng thử miễn phí tại **preny.ai**\nHotline **0389 647 778**',
    speed: 1.13,
    timing: { read0: 1000, readPerChar: 28, readMax: 4500, type0: 800, typePerChar: 3, typeMax: 1500, fastType: 500,
              featureHold: 1400, sepHold: 1100, cardHold: 4000, introCard: 250 },

    images: Object.fromEntries(Object.entries(IMG).map(([k, id]) => [k, U(id)])),

    // Cột trái demo ngang (dùng khi xuất video khung ngang)
    features: [
      { title: 'AI chatbot tư vấn, chốt đơn 24/7', desc: 'Tăng trung bình 62% tỷ lệ chốt đơn.',
        kws: ['Trả lời ngay tức thì, 24/7', 'Báo giá trước, hỏi chỗ lắp đèn', 'Không tự cam kết lắp đặt khi chưa kiểm tra', 'Gửi ảnh, thông số đúng sản phẩm', 'Khách đồng ý là xin SĐT, địa chỉ ngay'] },
      { title: 'AI tự động follow-up khách chưa phản hồi', desc: 'Tăng thêm khoảng 35% tỷ lệ chốt đơn.',
        kws: ['Đúng 3 mốc: 15 phút, 3 tiếng, 20 tiếng', 'Gửi thêm ảnh đèn lắp thực tế', 'Dừng khi khách phản hồi hoặc từ chối'] },
      { title: 'AI Agent tự động lên đơn COD', desc: 'Tiết kiệm hơn 90% thời gian xử lý đơn.',
        kws: ['Báo tổng COD, chờ khách xác nhận', 'Tạo đơn sau khi khách đồng ý', 'Gửi lại thông tin đơn bằng tin nhắn'] },
      { title: 'Gửi sự kiện Lead lên Meta CAPI', desc: 'Hỗ trợ tối ưu quảng cáo Facebook.',
        kws: ['Chỉ gửi khi được phép, có cấu hình', 'Chống trùng bằng Event ID', 'Không gửi Purchase khi đơn COD chưa giao'] },
    ],

    steps: [
      { intro: true, hold: 1800 },

      /* ---- Cảnh 3: khách hỏi giá, AI tư vấn (22–48 giây) ---- */
      { feature: 1 },
      { sep: 'Khách bấm Gửi tin nhắn từ quảng cáo Facebook', style: 'time', hold: 800 },
      { kh: 'Em ơi, bộ đèn này giá bao nhiêu?', ddMs: 2500 },
      { ai: 'Dạ bộ Wabi-Sabi 3 chóa vải giá **1.399.000đ** anh nhé! Anh định lắp ở phòng khách hay bàn ăn ạ?', fast: true, meta: '⚡ Preny AI trả lời sau 2 giây', kw: [0, 1], ddMs: 3500 },
      { kh: 'Anh lắp bàn ăn. Trần thạch cao có lắp được không em?', ddMs: 2700 },
      { ai: 'Dạ có thể lắp nếu có phương án cố định phù hợp anh nhé. Anh có sẵn điểm chờ điện chưa ạ?', kw: 2, ddMs: 3500 },
      { kh: 'Có rồi em.', ddMs: 1800 },
      { ai: 'Dạ em gửi anh thêm hình và thông số bộ đèn nhé! Anh muốn lấy một bộ này luôn không ạ?', kw: 3, ddMs: 3500 },
      { aiImgs: [{ img: 'bo-3', label: 'Tổng thể bộ 3' }, { img: 'ban-an', label: 'Lắp thực tế bàn ăn' }, { img: 'chi-tiet', label: 'Chi tiết chóa vải' },
                 { spec: { tieuDe: 'THÔNG SỐ', dong: [['Chóa vải', 'Ø30 × 40cm'], ['Dây treo', '1,2m chỉnh được'], ['Đui đèn', 'E27 × 3'], ['Bộ gồm', '3 chóa']] }, label: 'Thông số kích thước' }], hold: 3200, ddMs: 3200 },
      { kh: 'Ừ em, lấy anh một bộ.', ddMs: 2000 },

      /* ---- Cảnh 4: xin SĐT và địa chỉ (48–60 giây) ---- */
      { ai: 'Dạ anh cho em xin **SĐT và địa chỉ** nhận hàng nhé?', kw: 4, ddMs: 3000 },
      { seen: true, ddMs: 8000 },

      /* ---- Cảnh 5: follow-up đúng 3 mốc (60–82 giây) ---- */
      { feature: 2 },
      { sep: 'Khách đã xem, chưa phản hồi · AI follow-up trong phạm vi Meta cho phép', style: 'silent', kw: 0, hold: 1600 },
      { sep: '— Sau 15 phút —' },
      { ai: 'Anh ơi, bộ đèn Wabi-Sabi mình vừa chọn anh còn lấy không ạ?', meta: '🔁 Tự động · Follow-up sau 15 phút', kw: 0, ddMs: 4500 },
      { sep: '— Sau 3 tiếng —' },
      { ai: 'Em gửi anh thêm hình đèn lắp trên bàn ăn để mình dễ hình dung nhé! Anh thấy mẫu này ổn không ạ?', meta: '🔁 Tự động · Follow-up sau 3 tiếng', kw: 1, ddMs: 4000 },
      { aiImg: 'ban-an-2', hold: 1800, ddMs: 3000 },
      { sep: '— Sau 20 tiếng —' },
      { ai: 'Anh ơi, anh gửi em SĐT và địa chỉ nhận hàng để em lên đơn cho mình nhé?', meta: '🔁 Tự động · Follow-up sau 20 tiếng', kw: 2, ddMs: 4500 },

      /* ---- Cảnh 6: khách gửi thông tin, AI chốt COD (82–100 giây) ---- */
      { feature: 3 },
      { kh: 'Anh Nguyễn Nam, SĐT 0900 000 286.\nGiao 125 Nguyễn Thị Thập, Quận 7, TP.HCM nha em.', typing: true, ddMs: 3500 },
      { ai: 'Dạ tổng đơn là **1.499.000đ COD**, đã gồm phí giao 100.000đ. Anh xác nhận em lên đơn nhé?', kw: 0, ddMs: 3500 },
      { kh: 'Ok em, lên đơn giúp anh.', ddMs: 2000 },
      { ai: 'Dạ em đã tiếp nhận đơn rồi anh nhé! Em gửi lại thông tin để anh kiểm tra nha?', kw: 1, ddMs: 2200 },
      { ai: '**THÔNG TIN ĐƠN HÀNG**\n• Sản phẩm: Đèn Wabi-Sabi bộ 3\n• Số lượng: 1 bộ\n• Phí giao: 100.000đ\n• Tổng COD: **1.499.000đ**\n• Khách hàng: Nguyễn Nam\n• SĐT: 0900 000 286\n• Địa chỉ: 125 Nguyễn Thị Thập, Quận 7, TP.HCM', kw: 2, ddMs: 4500 },

      /* Cảnh 7 (Meta CAPI Lead) và cảnh 8 (màn kết) của demo dọc nằm ở deck.demoDoc.capi, deck.demoDoc.ket. */
      { feature: 4, hold: 2500 },
      // Không có { end: true }: bấm → thêm một lần là sang thẳng slide kế.
    ],

    /* ===== Nội dung slide trình chiếu (trinh-chieu.html). Slide thống kê dùng số minh họa (deck.dashboard). ===== */
    deck: {
      /* Demo chat dọc (demo-doc.js) theo kịch bản 120 giây người dùng gửi 17/11/2026 */
      demoDoc: {
        khach: 'Nguyễn Nam',
        sanPham: 'Đèn Wabi-Sabi bộ 3',
        gio: '09:00',
        binhLuan: [
          { ten: 'Khách Hàng A', noiDung: 'Tư vấn', traLoi: 'Dạ, mình check inbox giúp em nha!' },
          { ten: 'Khách Hàng B', noiDung: 'xin giá', traLoi: 'Dạ, mình check inbox giúp em nha!' },
        ],
        post: {
          tieuDe: 'ĐÈN CHÙM LỤA WABI-SABI BỘ 3 – ĐÈN THẢ CHÓA VẢI 💡',
          dong: ['Ánh sáng dịu, chóa vải lụa', 'Hợp bàn ăn, phòng khách', 'Gửi ảnh thực tế trước khi mua', 'Giao tận nhà, thanh toán COD'],
          anh: ['bo-3', 'ban-an', 'chi-tiet', 'ban-an-3'],
        },
        quangCao: {
          tieuDe: 'ĐÈN THẢ WABI-SABI BỘ 3 – PHONG CÁCH NỘI THẤT TỐI GIẢN',
          mo: 'Ánh sáng dịu cho góc bàn ăn. Giao tận nhà, thanh toán khi nhận hàng.',
          anh: 'ban-an', nhan: 'MESSENGER', dong: 'Đèn Wabi-Sabi bộ 3 · 1.399.000đ', nut: 'Gửi tin nhắn',
        },
        capi: {
          nhan: '⏩ Hệ thống · Ghi nhận khách hàng tiềm năng',
          event: 'Lead',
          dong: [['Event', 'Lead'], ['Event ID', 'LIGHTING-COD-LEAD-001'], ['Nguồn', 'Facebook Ads → Messenger'], ['SĐT', 'Đã thu thập trong Preny'], ['Trạng thái', 'Khách đã xác nhận đơn COD'], ['Chống trùng', 'Event ID']],
          chu: 'Chỉ gửi dữ liệu khi được phép, có cấu hình và quyền sử dụng dữ liệu phù hợp. Hiển thị là mô phỏng (demo).',
          khong: 'Không gửi Purchase khi đơn COD chưa giao và chưa thanh toán thành công.',
        },
        ket: {
          tieuDe: 'PRENY AI – TỰ ĐỘNG HÓA BÁN ĐÈN NỘI THẤT',
          y: ['Tự động trả lời bình luận', 'Tiếp nhận khách từ Facebook Ads', 'Tư vấn mẫu đèn, báo giá', 'Gửi hình ảnh sản phẩm', 'Xin SĐT và địa chỉ', 'Follow-up khách chưa phản hồi', 'Chốt đơn COD', 'Meta CAPI Lead'],
        },
        // Thời lượng (ms) các cảnh ngoài chat khi tự chạy: tổng cả demo khoảng 120 giây
        nhip: { start: 3000, cmt: 2000, rep: 2400, qc: 5000, bamqc: 2000, open: 2500, capi: 11000, ket: 9000 },
      },
      /* Pipeline thương mại điện tử 16/11/2026 (TRINH-CHIEU.md mục 1): dashboard, chatbot, afterSale. */
      dashboard: [
        { ten: 'Đèn thả <span class="grad">trang trí</span>', den: '21/07/2026', khach: 9, tyLe: 0.55 },
        { ten: 'Đèn chùm, <span class="grad">đèn tường</span>', den: '18/08/2026', khach: 11, tyLe: 0.53 },
        { ten: 'Đèn <span class="grad">LED nội thất</span>', den: '26/09/2026', khach: 13, tyLe: 0.57 },
      ],
      chatbot: {
        chat: [
          { ref: { img: L(IMG['bo-3']), ten: 'Đèn Wabi-Sabi bộ 3' } },
          { kh: 'Em ơi, bộ đèn này giá bao nhiêu?' },
          { ai: 'Dạ bộ Wabi-Sabi 3 chóa vải giá **1.399.000đ** anh nhé! Anh định lắp ở phòng khách hay bàn ăn ạ?', meta: '⚡ Preny AI trả lời sau 2 giây' },
          { kh: 'Anh lắp bàn ăn. Trần thạch cao có lắp được không em?' },
          { ai: 'Dạ có thể lắp nếu có phương án cố định phù hợp anh nhé. Anh có sẵn điểm chờ điện chưa ạ?' },
          { kh: 'Có rồi, lấy anh 1 bộ. Nguyễn Nam, 0900 000 286, 125 Nguyễn Thị Thập, Q.7' },
          { ai: 'Dạ tổng đơn **1.499.000đ COD**, đã gồm phí giao. Em lên đơn cho anh ngay ạ ⚡' },
          { don: true },
          { ok: true },
        ],
        don: {
          ten: 'Nguyễn Nam', sdt: '0900 000 286', diaChi: '125 Nguyễn Thị Thập, Quận 7, TP. Hồ Chí Minh', ma: '#AS11286', phi: 'COD', ship: 100000,
          sp: [{ img: L(IMG['bo-3']), ten: 'Đèn Wabi-Sabi bộ 3 chóa vải', sl: 1, dv: 'bộ', gia: 1399000 }],
        },
        anh: {
          img: L(IMG['chao-xep-ly']),
          kh: 'Đèn như hình này shop có không em?',
          ai: 'Dạ mẫu anh gửi là **đèn thả chóa vải xếp ly** màu trắng ạ, giá **690.000đ/chiếc**. Treo 2–3 chiếc trên bàn ăn dài là đẹp, anh định treo mấy chiếc để em tư vấn kích thước nha?',
        },
      },
      afterSale: {
        loi: 'Cảm ơn anh Nam đã chọn Nội Thất Ánh Sáng 💡 Nhiều nhà lắp đèn bàn ăn xong hay chọn thêm mấy mẫu này cho đồng bộ ạ:',
        sp: [
          { img: L(IMG['den-dung']), ten: 'Đèn cây đứng chóa vải', gia: 1190000 },
          { img: L(IMG['chao-xep-ly']), ten: 'Đèn thả chóa xếp ly', gia: 690000 },
          { img: L(IMG['den-tuong']), ten: 'Đèn tường ngoài trời', gia: 450000, cu: 520000 },
          { img: L(IMG['den-hat']), ten: 'Đèn hắt tường LED', gia: 290000 },
          { img: L(IMG['chum-bi']), ten: 'Đèn chùm bi thủy tinh', gia: 2490000 },
        ],
        khach: 'Lấy thêm anh 1 đèn cây đứng cho phòng khách nha',
        pill: '🛍 Khách mua thêm ngay: đơn tăng từ 1.499.000đ lên 2.689.000đ',
        fmm: {
          chao: 'Chào anh Nam 👋 Xưởng vừa về mẫu đèn tường ngoài trời mới, gửi anh xem trước nha!',
          img: L(IMG['den-tuong']), nhan: 'HÀNG MỚI VỀ',
          ten: 'Đèn tường ngoài trời chống nước', mo: 'Khách cũ giảm 10%, giao tận nhà, COD.', nut: 'Xem sản phẩm',
        },
        zbs: {
          ten: 'Tặng anh Nam voucher 100.000đ',
          mo: 'Cảm ơn anh đã mua đèn tại Nội Thất Ánh Sáng. Gửi anh ưu đãi cho lần mua tiếp theo:',
          dong: [['Mã voucher', '**ANHSANG100**'], ['Ưu đãi', 'Giảm 100.000đ đơn từ 1.000.000đ'], ['Hạn dùng', '31/12/2026']],
          nut: 'Dùng voucher ngay',
        },
      },
      bamDuoi: {
        cmpDung: ['Khách nhắn xong im → nhắc đúng mẫu đèn khách đã xem (thẻ <b>#DenWabiSabi</b> từ quảng cáo)',
                  'Báo giá xong im → bám đuổi theo giá: ưu đãi, quà tặng (thẻ <b>#HoiGia</b>)',
                  'Đúng nhu cầu, đúng lý do im → khách quay lại mua'],
        hoi: 'Bộ đèn này giá bao nhiêu shop?',
        traLoiThuong: 'Dạ 1.399.000đ ạ.',
        refImg: L(IMG['bo-3']), refTen: 'Đèn Wabi-Sabi bộ 3',
        vd1: {
          kh: 'Bộ đèn này còn hàng không shop?',
          ai: 'Dạ còn ạ anh! Anh định lắp ở phòng khách hay bàn ăn để em tư vấn kích thước nha?',
          tag: '🏷 #DenWabiSabi', tagNote: 'thẻ từ quảng cáo · khách im 1 ngày',
          nhac: 'Anh ơi, em gửi anh <b>ảnh thật bộ đèn Wabi-Sabi lắp trên bàn ăn</b> nhà khách bên em. Anh cho em biết chỗ lắp để em tư vấn chiều cao treo nha 😊',
          dung: '🎯 Theo thẻ #DenWabiSabi: nhắc đúng mẫu khách xem',
          khach: 'Anh lắp bàn ăn em',
        },
        vd2: {
          kh: 'Đèn Wabi-Sabi bộ 3 bao nhiêu shop?',
          ai: 'Dạ bộ <b>Wabi-Sabi 3 chóa vải</b> giá <b>1.399.000đ</b>, giao tận nhà, COD ạ.',
          tag: '🏷 #HoiGia', tagNote: 'báo giá xong khách im 1 ngày',
          nhac: 'Anh ơi, bộ đèn anh hỏi giá hôm qua hôm nay em <b>tặng thêm 3 bóng LED ánh vàng</b>, chỉ trong hôm nay ạ. Em giữ hàng cho anh nha?',
          dung: '🎯 Theo thẻ #HoiGia: bám đuổi theo giá, đúng lý do khách im',
          khach: 'Ok giữ anh 1 bộ',
        },
      },
      binhLuan: {
        post: 'Đèn tường ngoài trời <b>mẫu mới</b> · ánh sáng hắt 2 đầu, giao tận nhà, thanh toán COD 💡',
        img: L(IMG['den-tuong']),
        kav: 'PL', kten: 'Phạm Long', hoi: 'Đèn này treo ngoài cổng mưa có sao không shop? Giá bao nhiêu?',
        traLoi: 'Dạ chào anh Long! Shop vừa nhắn tin tư vấn chi tiết cho anh, anh xem tin nhắn nhé 💬',
        act2: 'Nhắn tin riêng tư vấn mẫu đèn',
        nhan: 'Chào anh Long! Mẫu đèn tường anh hỏi giá <b>450.000đ</b>, đạt chuẩn chống nước <b>IP65</b> nên mưa tạt không sao ạ. Anh treo ngoài cổng hay tường rào để em tư vấn ánh sáng phù hợp nha!',
        sp: { ten: 'Đèn tường ngoài trời', gia: '450.000đ', img: L(IMG['den-tuong']) },
        khach: 'Anh treo 2 bên cổng em',
      },
      duLieu: {
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: giá đã gồm lắp, lắp được mọi trần', 'Thợ tới không lắp được, khách bực, shop mất uy tín'],
        hoi: 'Giá này đã gồm công lắp chưa em? Trần thạch cao nhà anh lắp được chắc không?',
        aiSai: 'Dạ giá <b>đã gồm công lắp tận nhà</b>, trần thạch cao <b>lắp được hết</b> anh nhé 🥰',
        thucTe: '⚠ Thực tế: giá chưa gồm công lắp, trần thạch cao phải có thợ kiểm tra điểm treo',
        gian: 'Thợ tới bảo trần yếu không treo được, còn đòi thêm tiền công! 😠',
        cho: 'Dạ anh chờ em một chút để em kiểm tra chính xác chính sách lắp đặt cho mình nhé!',
        nv: 'Kỹ thuật Hưng · người thật',
        nvTraLoi: 'Dạ giá đèn chưa gồm công lắp ạ. Trần thạch cao thợ cần xem khung xương để gia cố điểm treo, em xếp thợ báo giá trước cho anh nhé!',
      },
    },
  };
})();
