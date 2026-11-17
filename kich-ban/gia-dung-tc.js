/* Kịch bản: GIA DỤNG (robot hút bụi, đồ bếp, thiết bị gia đình) — BẢN TRÌNH CHIẾU, nhóm THƯƠNG MẠI ĐIỆN TỬ.
   Làm 17/11/2026 theo pipeline mới (TRINH-CHIEU.md mục 1). Demo chat chuẩn thương mại điện tử (mục 3), một mạch:
     chị Mai (nhà 2 tầng sàn gỗ, nuôi chó mèo rụng lông, con nhỏ) gửi ảnh robot hút bụi lau nhà có trạm hỏi giá
     → AI giải thích lực hút, chổi chống rối lông, tự đổ rác; ca khó hỏi dồn: lau có ướt sàn gỗ không, bậc cửa 2cm, cầu thang,
       so với robot 2,5 triệu trên sàn thương mại điện tử → robot không leo cầu thang, chỉ cách dùng 2 tầng (nhớ bản đồ từng tầng)
     → chị im → bám đuổi 2 tin theo thẻ #RobotHutLau (ảnh robot chạy thật ở nhà có cún, có bé), #HoiGia (giảm giá + tặng bộ chổi, giẻ)
     → chốt, lên đơn (hỏi giờ giao lắp) → chăm sóc sau bán: dặn gỡ lông ở chổi cuốn, thay giẻ; gợi ý nồi áp suất, lò nướng, ấm siêu tốc.
   Không có tin tự động cập nhật vận chuyển. Không có bước kết thúc: bấm → là sang slide kế.
   Tên shop, giá, chính sách, tên khách, SĐT: dữ liệu minh họa. Ảnh: Unsplash (ảnh thật, không phải hàng của shop). */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'robot-hut-bui': '1558317374-067fb5f30001',      // robot trắng hút thảm dưới gầm sofa
    'robot-2': '1653990480360-31a12ce9723e',         // robot đen chui gầm sofa, sàn gỗ
    'robot-3': '1762859731349-c9ff2808b672',         // robot trắng lau sàn gỗ, trạm phía sau, bố con chơi với chó
    'robot-4': '1757478558169-f09b4bd3918a',         // robot đen chạy, bé gái và chó con
    'lo-nuong': '1649264191931-9235c8dd03ef',        // lò nướng mini nhiều màu
    'noi-ap-suat': '1544233726-9f1d2b27be8b',        // nồi áp suất điện
    'may-xay': '1564940735784-b15466e8dc09',         // máy trộn bột để bàn (xanh cốm)
    'am-sieu-toc': '1643114786355-ff9e52736eab',     // ấm siêu tốc thủy tinh
    'bep': '1556911220-bff31c812dba',                // căn bếp
    'may-pha-ca-phe': '1570222094114-d054a817e56b',  // máy pha cà phê nhỏ giọt + máy xay hạt
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    shop: { name: 'Gia Dụng Tổ Ấm', initials: 'TA' },
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
        kws: ['Trả lời ngay tức thì, 24/7', 'Nhận diện đúng mẫu robot từ ảnh', 'Tư vấn theo nhà có thú cưng, con nhỏ', 'Gỡ từng lo ngại: sàn gỗ, bậc cửa, cầu thang', 'So máy rẻ, báo bảo hành, chủ động chốt'] },
      { title: 'AI tự động bám đuổi khách hàng trong 7 ngày', desc: 'Tăng thêm khoảng 35% tỷ lệ chốt đơn.',
        kws: ['~65% khách nhắn tin rồi im lặng', 'Tự gắn thẻ mẫu khách xem, lý do im', 'Gửi ảnh robot chạy thật ở nhà có cún', 'Báo giá xong im → ưu đãi giá đúng lúc'] },
      { title: 'AI Agent tự động lên đơn và gửi sang đơn vị vận chuyển', desc: 'Tiết kiệm hơn 90% thời gian xử lý đơn.',
        kws: ['Thu đủ tên, SĐT, địa chỉ, giờ giao lắp', 'Gửi tin xác nhận đơn đầy đủ', 'Tự tạo đơn, xếp lịch giao lắp'] },
      { title: 'AI tự động chăm sóc khách hàng sau bán', desc: 'Tăng doanh thu từ khách hàng cũ.',
        kws: ['Hỏi thăm, dặn vệ sinh chổi, thay giẻ', 'Gợi ý đồ bếp cả nhà cần', 'Khách mua thêm, tăng giá trị vòng đời'] },
    ],

    steps: [
      { intro: true, hold: 1800 },

      /* ---- 1. Tư vấn: ca khó hỏi dồn sàn gỗ, bậc cửa, cầu thang, so với robot rẻ ---- */
      { feature: 1 },
      { sep: 'Khách nhắn tin từ quảng cáo Facebook', style: 'time', hold: 800 },
      { img: 'robot-3', hold: 1500 },
      { kh: 'Robot này bao nhiêu shop? Nhà c sàn gỗ, nuôi 1 chó 1 mèo rụng lông quá trời, bé nhà c mới 2 tuổi hay bò dưới sàn' },
      { ai: 'Dạ chào chị! Em tư vấn cho chị ngay ạ 🏡', fast: true, meta: '⚡ Preny AI trả lời sau 2 giây', kw: 0 },
      { ai: 'Mẫu chị gửi là **robot hút bụi lau nhà có trạm**, giá **12.990.000đ** ạ. Nhà có chó mèo dùng con này hợp: **lực hút 8.000Pa**, **chổi cao su chống rối lông**, hút xong **tự đổ rác** vào túi 3 lít, 2 tháng chị mới thay túi một lần.', kw: [1, 2] },
      { kh: 'Lau có ướt sàn gỗ k e? Bậc cửa nhà c cao 2cm leo đc k? Nhà 2 tầng thì cầu thang sao? Trên sàn TMĐT có con 2tr5 thôi, khác gì k?' },
      { ai: 'Dạ **lau không ướt sàn gỗ** đâu chị: robot **tự chỉnh lượng nước** theo loại sàn, giẻ được trạm **giặt và sấy khô** nên không đọng nước, không mùi hôi. Bậc cửa **2cm** robot **vượt qua được** (tối đa 2,2cm) ạ.', kw: 3 },
      { ai: 'Robot **không leo được cầu thang** chị nhé, nhưng có **cảm biến chống rơi** nên không lăn xuống. Trạm đặt tầng 1, khi cần chị **bê robot lên tầng 2**, máy **nhớ bản đồ từng tầng**, tự nhận tầng và chạy luôn ạ.', kw: 3 },
      { ai: 'Con 2,5 triệu thường **chỉ hút, không có trạm**, lực hút yếu, **chổi hay quấn lông**, chị vẫn phải tự đổ rác, giặt giẻ mỗi ngày. Bên em **bảo hành 24 tháng**, **giao lắp, quét bản đồ tại nhà**. Chị chốt để em xếp lịch giao lắp nha? 😊', kw: 4 },
      { kh: 'Để c bàn với ông xã đã' },

      /* ---- 2. Khách im → bám đuổi 2 tin theo thẻ ---- */
      { feature: 2 },
      { sep: 'Khách chưa phản hồi… · AI gắn thẻ #RobotHutLau #HoiGia', style: 'silent', kw: [0, 1], hold: 1800 },
      { sep: '— 1 ngày sau —' },
      { ai: 'Chị Mai ơi, em gửi chị **ảnh thật robot chạy ở nhà khách** bên em, nhà cũng **nuôi cún, có bé nhỏ**, sàn gỗ y như nhà mình nè 😊', meta: '🔁 Tự động · Bám đuổi theo thẻ #RobotHutLau', kw: 2 },
      { aiImgs: [{ img: 'robot-3', label: 'Lau sàn gỗ, nhà có cún' }, { img: 'robot-4', label: 'Bé chạy chơi, robot né' },
                 { img: 'robot-2', label: 'Chui gầm sofa' }, { img: 'robot-hut-bui', label: 'Tăng lực hút trên thảm' }], hold: 3200 },
      { sep: '— 2 ngày sau —' },
      { ai: 'Robot chị hỏi giá, chốt trong hôm nay em **giảm 1.000.000đ còn 11.990.000đ** + **tặng bộ chổi, giẻ thay 6 tháng**, vẫn **giao lắp tại nhà** ạ 🎁', meta: '🔁 Tự động · Bám đuổi theo thẻ #HoiGia', kw: 3 },
      { kh: 'Ok chốt c 1 con nha em, ông xã đồng ý rồi 😄' },

      /* ---- 3. Lên đơn tự động (không có tin cập nhật vận chuyển) ---- */
      { feature: 3 },
      { ai: 'Dạ chị cho em xin **tên, SĐT, địa chỉ** và **giờ tiện nhận hàng** nha. Kỹ thuật tới **lắp trạm, quét bản đồ cả 2 tầng** luôn cho chị ạ.', kw: 0 },
      { kh: 'Nguyễn Thị Mai – 0938 275 614\n27 đường số 9, P. Tân Phong, Q.7, TP.HCM. Giao chiều thứ Bảy giúp c' },
      { card: {
          tag: '✓ Tin xác nhận đơn',
          intro: 'Dạ chị kiểm tra lại đơn giúp em nhé:',
          lines: ['1 Robot hút bụi lau nhà có trạm tự đổ rác', 'Tặng: bộ chổi, giẻ thay 6 tháng', 'Tổng cộng: **11.990.000đ** · giao lắp tại nhà', 'Người nhận: Nguyễn Thị Mai · 0938 275 614', 'Giao tới: 27 đường số 9, P. Tân Phong, Q.7, TP.HCM'],
          button: 'Quản lý đơn hàng',
        }, kw: 1, hold: 4500 },
      { kh: 'Ok em' },
      { card: {
          tag: '✓ Đã tạo đơn & gửi vận chuyển', ok: true,
          lines: ['Mã đơn: **#TA51326**', 'Mã vận đơn: **VD47205918**', 'Giao lắp: **chiều thứ Bảy**, quét bản đồ 2 tầng'],
        }, kw: 2, hold: 3500 },

      /* ---- 4. Chăm sóc sau bán ---- */
      { feature: 4 },
      { sep: '— 1 tuần sau —' },
      { ai: 'Chị Mai ơi, robot chạy ổn không ạ? Nhà có chó mèo chị **gỡ lông quấn ở chổi cuốn** mỗi tuần, **thay giẻ lau** 2–3 tháng/lần, lau **mắt cảm biến** bằng khăn khô để robot chạy chuẩn nha 💚', meta: '💚 Tự động · Chăm sóc sau bán', kw: 0 },
      { kh: 'Ổn lắm em, sàn hết sạch lông chó, bé bò thoải mái 👍' },
      { sep: '— 3 tuần sau —' },
      { ai: 'Mấy món bếp khách bên em dùng robot rồi hay sắm thêm, khách cũ **giảm 10%** ạ:', kw: 1 },
      { catalog: [
          { name: 'Nồi áp suất điện 6L', color: '', price: '1.701.000đ', old: '1.890.000đ', tag: 'Bán chạy', art: 'noi-ap-suat' },
          { name: 'Lò nướng mini 12L', color: 'Hồng, xám, kem', price: '1.161.000đ', old: '1.290.000đ', tag: 'Mới về', art: 'lo-nuong' },
          { name: 'Ấm siêu tốc thủy tinh', color: '1,7L', price: '405.000đ', old: '450.000đ', tag: '-10%', art: 'am-sieu-toc' },
        ], hold: 4000 },
      { kh: 'Lấy c thêm cái nồi áp suất nha em, nấu cháo cho bé', kw: 2, hold: 1500 },
      // Không có { end: true }: bấm → thêm một lần là sang thẳng slide kế.
    ],

    /* ===== Nội dung slide trình chiếu (trinh-chieu.html). Slide thống kê dùng số minh họa (deck.dashboard). ===== */
    deck: {
      /* Demo chat dọc (demo-doc.js): tên khách trên Messenger, bài đăng Facebook (anh = khóa trong images), câu bình luận. */
      demoDoc: {
        khach: 'Mai Nguyễn',
        sanPham: 'Robot hút bụi lau nhà có trạm',
        binhLuan: 'Nhà nuôi chó mèo dùng được không shop?',
        post: {
          tieuDe: 'ROBOT HÚT BỤI LAU NHÀ TỰ ĐỔ RÁC 🤖',
          dong: ['Hút sạch lông chó mèo', 'Lau không ướt sàn gỗ', 'Tự đổ rác, giặt sấy giẻ', 'Bảo hành 24 tháng'],
          anh: ['robot-3', 'robot-4', 'robot-2', 'noi-ap-suat'],
        },
      },
      /* Pipeline thương mại điện tử 16/11/2026 (TRINH-CHIEU.md mục 1): dashboard, chatbot, afterSale. */
      dashboard: [
        { ten: 'Robot hút bụi, <span class="grad">máy hút bụi</span>', den: '21/07/2026', khach: 11, tyLe: 0.55 },
        { ten: 'Nồi chiên, <span class="grad">lò nướng</span>', den: '18/08/2026', khach: 17, tyLe: 0.53 },
        { ten: 'Đồ bếp, <span class="grad">ấm, máy pha cà phê</span>', den: '26/09/2026', khach: 13, tyLe: 0.57 },
      ],
      chatbot: {
        chat: [
          { ref: { img: L(IMG['robot-3']), ten: 'Robot hút bụi lau nhà có trạm' } },
          { kh: 'Robot này bao nhiêu shop? Nhà c sàn gỗ, nuôi chó mèo rụng lông' },
          { ai: 'Dạ robot **hút bụi lau nhà có trạm** giá **12.990.000đ** ạ. Nhà có chó mèo dùng con này hợp: **lực hút 8.000Pa**, **chổi chống rối lông**, hút xong **tự đổ rác**.', meta: '⚡ Preny AI trả lời sau 2 giây' },
          { kh: 'Lau có ướt sàn gỗ k em? Nhà c 2 tầng' },
          { ai: 'Dạ robot **tự chỉnh lượng nước**, trạm **giặt, sấy giẻ** nên sàn gỗ không đọng nước ạ. Robot **nhớ bản đồ 2 tầng**, **bảo hành 24 tháng**, **giao lắp tại nhà**.' },
          { kh: 'Ok lấy c 1 con. Nguyễn Thị Mai, 0938 275 614, 27 đường số 9, P. Tân Phong, Q.7' },
          { ai: 'Dạ em lên đơn, xếp lịch giao lắp cho chị ngay ạ ⚡' },
          { don: true },
          { ok: true },
        ],
        don: {
          ten: 'Nguyễn Thị Mai', sdt: '0938 275 614', diaChi: '27 đường số 9, P. Tân Phong, Q.7, TP.HCM', ma: '#TA51326', phi: 'giao lắp miễn phí',
          sp: [{ img: L(IMG['robot-3']), ten: 'Robot hút bụi lau nhà có trạm', sl: 1, gia: 12990000 }],
        },
        anh: {
          img: L(IMG['may-pha-ca-phe']),
          kh: 'Máy pha cà phê như hình này bên em có không?',
          ai: 'Dạ hình chị gửi là **máy pha cà phê nhỏ giọt** kèm **máy xay hạt** ạ. Bên em có bộ này giá **3.290.000đ**, pha một lần **8–10 ly**, **giữ ấm 40 phút**. Nhà mình mỗi sáng uống mấy ly để em tư vấn đúng cỡ nha.',
        },
      },
      afterSale: {
        loi: 'Cảm ơn chị Mai đã tin Gia Dụng Tổ Ấm 💚 Nhà dùng robot rồi hay sắm thêm mấy món bếp này ạ:',
        sp: [
          { img: L(IMG['noi-ap-suat']), ten: 'Nồi áp suất điện 6L', gia: 1890000 },
          { img: L(IMG['lo-nuong']), ten: 'Lò nướng mini 12L', gia: 1290000 },
          { img: L(IMG['am-sieu-toc']), ten: 'Ấm siêu tốc thủy tinh 1,7L', gia: 450000, cu: 520000 },
          { img: L(IMG['may-xay']), ten: 'Máy trộn bột để bàn', gia: 2490000 },
          { img: L(IMG['may-pha-ca-phe']), ten: 'Máy pha cà phê, xay hạt', gia: 3290000, nut: 'Nhận tư vấn' },
        ],
        khach: 'Lấy thêm c cái nồi áp suất nha, nấu cháo cho bé',
        pill: '🛍 Khách mua thêm ngay: đơn tăng từ 12.990.000đ lên 14.880.000đ',
        fmm: {
          chao: 'Chào chị Mai 👋 Gia Dụng Tổ Ấm vừa về lò nướng mini mới, gửi chị xem trước nha!',
          img: L(IMG['lo-nuong']), nhan: 'HÀNG MỚI VỀ',
          ten: 'Lò nướng mini 12L màu pastel', mo: 'Khách cũ giảm 10%, giao nhanh trong ngày.', nut: 'Xem sản phẩm',
        },
        zbs: {
          ten: 'Tặng chị Mai voucher 200.000đ',
          mo: 'Cảm ơn chị đã mua robot tại Gia Dụng Tổ Ấm. Gửi chị ưu đãi cho lần mua tiếp theo:',
          dong: [['Mã voucher', '**TOAM200**'], ['Ưu đãi', 'Giảm 200.000đ đơn từ 1.000.000đ'], ['Hạn dùng', '31/03/2027']],
          nut: 'Dùng voucher ngay',
        },
      },
      bamDuoi: {
        cmpDung: ['Khách nhắn xong im → nhắc đúng mẫu khách đã xem (thẻ <b>#RobotHutLau</b> từ quảng cáo)',
                  'Báo giá xong im → bám đuổi theo giá: ưu đãi, quà tặng (thẻ <b>#HoiGia</b>)',
                  'Đúng nhu cầu, đúng lý do im → khách quay lại mua'],
        hoi: 'Robot hút bụi này giá bao nhiêu shop?',
        traLoiThuong: 'Dạ robot giá 12.990.000đ ạ.',
        refImg: L(IMG['robot-3']), refTen: 'Robot hút bụi lau nhà có trạm',
        vd1: {
          kh: 'Robot này hút lông chó mèo được không shop?',
          ai: 'Dạ được ạ chị! Nhà mình sàn gỗ hay gạch, rộng khoảng bao nhiêu m² để em tư vấn đúng mẫu nha?',
          tag: '🏷 #RobotHutLau', tagNote: 'thẻ từ quảng cáo · khách im 1 ngày',
          nhac: 'Chị ơi, em gửi chị <b>ảnh thật robot hút lông chó mèo</b> ở nhà khách bên em, sàn gỗ y như nhà mình. Chị cho em biết nhà rộng bao nhiêu để em tư vấn nha 😊',
          dung: '🎯 Theo thẻ #RobotHutLau: nhắc đúng mẫu khách xem',
          khach: 'Nhà c 2 tầng, mỗi tầng 60m² em',
        },
        vd2: {
          kh: 'Robot có trạm bao nhiêu shop?',
          ai: 'Dạ robot <b>có trạm tự đổ rác</b> giá <b>12.990.000đ</b>, bảo hành 24 tháng ạ.',
          tag: '🏷 #HoiGia', tagNote: 'báo giá xong khách im 1 ngày',
          nhac: 'Chị ơi, robot chị hỏi giá hôm qua, hôm nay em <b>giảm 1.000.000đ + tặng bộ chổi, giẻ 6 tháng</b>, giao lắp tại nhà ạ. Em giữ máy cho chị nha?',
          dung: '🎯 Theo thẻ #HoiGia: bám đuổi theo giá, đúng lý do khách im',
          khach: 'Ok giữ c 1 con',
        },
      },
      binhLuan: {
        post: 'Robot hút bụi lau nhà <b>có trạm tự đổ rác</b> · hút sạch lông thú cưng, bảo hành 24 tháng 🤖',
        img: L(IMG['robot-4']),
        kav: 'HL', kten: 'Hoàng Long', hoi: 'Nhà a có thảm lông, robot lau có làm ướt thảm k shop? Giao Biên Hòa được k?',
        traLoi: 'Dạ chào anh Long! Shop vừa nhắn tin tư vấn chi tiết cho anh, anh xem tin nhắn nhé 💬',
        act2: 'Nhắn tin riêng tư vấn đúng mẫu',
        nhan: 'Chào anh Long! Robot <b>tự nhấc giẻ lau</b> khi gặp thảm nên <b>không làm ướt thảm</b> ạ, chỗ thảm robot tự tăng lực hút. Giao lắp Biên Hòa <b>1–2 ngày</b>. Nhà mình rộng bao nhiêu m² để em tư vấn nha!',
        sp: { ten: 'Robot hút bụi lau nhà có trạm', gia: '12.990.000đ', img: L(IMG['robot-3']) },
        khach: 'Nhà a 90m² em',
      },
      duLieu: {
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: tính năng, bảo hành', 'Khách mua về thất vọng, shop mất uy tín'],
        hoi: 'Robot này tự leo cầu thang lên tầng 2 được không em? Bảo hành mấy năm?',
        aiSai: 'Dạ được ạ! Robot <b>tự leo cầu thang</b> lau cả 2 tầng, bảo hành <b>5 năm</b> luôn chị nhé 🥰',
        thucTe: '⚠ Thực tế: robot không leo cầu thang, bảo hành 24 tháng',
        gian: 'Robot đứng im dưới chân cầu thang! Sao bảo tự leo lên tầng 2? 😠',
        cho: 'Dạ chị chờ em một chút để em kiểm tra chính xác tính năng, bảo hành cho mình nhé!',
        nv: 'Kỹ thuật Phong · người thật',
        nvTraLoi: 'Dạ robot không leo cầu thang chị ạ, chị bê lên tầng 2 là robot nhớ bản đồ chạy luôn. Máy bảo hành 24 tháng, em gọi hướng dẫn chị cài 2 tầng nhé!',
      },
    },
  };
})();
