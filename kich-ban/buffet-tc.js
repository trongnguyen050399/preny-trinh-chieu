/* Kịch bản: NHÀ HÀNG BUFFET — BẢN TRÌNH CHIẾU, nhóm CÂN NHẮC NHIỀU. Làm 23/11/2026 theo người dùng: "Nhà hàng buffet."
   "AI chốt đơn = lấy tên + SĐT + số người + ngày giờ (+ dịp, yêu cầu) → giữ bàn/phòng → báo quản lý nhà hàng xác nhận";
   gửi sự kiện Lead (không gửi Purchase khi khách chưa tới ăn).
   Từ 23/11/2026 bỏ demo chat vào thẳng (&demo): ngành mới chỉ có Bài 1 (phần deck dưới đây) + Bài 2 video
   (demo/bai2/kich-ban-buffet-tc.js), nên không viết features/steps.
   Mạch khách (khớp Bài 2): anh Quang bấm quảng cáo buffet nướng lẩu, hỏi giá → AI báo gói nướng lẩu 349.000đ, gói hải sản 499.000đ
   → hỏi dịp, số người lớn/trẻ em, ngày giờ → sinh nhật vợ, khoảng 12 người có 2 bé, tối Thứ 7 28/11; hỏi phòng riêng, mang bánh kem,
   chỗ đỗ ô tô → AI: phòng riêng 10–16 người, mang bánh kem không thu phí, trang trí sinh nhật miễn phí, bãi đỗ ô tô, chính sách trẻ em
   → xin tên + SĐT để giữ phòng → khách im → bám đuổi 5 tin trước ngày 28/11 → khách giữ phòng 18h30 T7 28/11
   → báo chị Hà · Quản lý nhà hàng xác nhận → sau bữa ăn: cảm ơn, xin đánh giá; ưu đãi khách quay lại; ưu đãi tiệc nhóm cuối năm.
   Không có tin nhắc trước giờ tới ăn (Preny chưa có tính năng này).
   Tên nhà hàng, giá, món, khách, SĐT, feedback, nhân viên, mã ưu đãi: dữ liệu minh họa. Ảnh: Unsplash (ảnh thật, không phải nhà hàng của khách). */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'nuong': '1708388064672-6536507fdf6e',        // vỉ nướng than, thịt bò (ảnh quảng cáo)
    'nuong-2': '1708388064360-a561ca19c0ff',      // gắp thịt trên vỉ nướng, khói
    'bo-wagyu': '1709433420612-8cad609df914',     // đĩa bò vân mỡ, banchan
    'lau': '1784429611794-aecb6ebaef48',          // nồi lẩu cay, rau, viên
    'hai-san': '1651323018466-b36b7df1d2b1',      // quầy hải sản: tôm, sò, ốc
    'hai-san-2': '1765100479761-2359e22fbe16',    // sò điệp, vẹm, hải sản
    'oc': '1679694140422-aecfd3d5dd0b',           // hàu, ốc trên đá
    'quay-buffet': '1769638913840-2ca96d90e8a9',  // quầy buffet nồi hâm
    'quay-buffet-2': '1662982696492-057328dce48b',// quầy buffet món nguội
    'salad': '1720443000468-89d509202615',        // quầy salad, rau củ
    'khong-gian': '1778650451432-f08ed467e2c4',   // không gian nhà hàng
    'khong-gian-2': '1716177489813-ee2fd5b25355', // sảnh nhà hàng đèn chùm
    'nhom-ban': '1765582870011-ff3cfdb06700',     // nhóm bạn quây quần bàn ăn
    'nhom-ban-2': '1786113706143-96b4a62ebb71',   // nhóm khách ăn nướng
    'trang-mieng': '1563245372-169c439d29b5',     // khay bánh tráng miệng
    'dimsum': '1563245370-63ffc97abdbd',          // xửng dimsum hấp
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    badge: 'AI CHATBOT · NHÀ HÀNG BUFFET',
    shop: { name: 'Buffet Nướng Lẩu Than Hồng', initials: 'TH' },
    headline: { pre: 'AI chatbot tư vấn gói buffet và', em: 'giữ bàn cho khách' },
    sub: 'Hỏi đúng dịp, số người lớn, trẻ em, ngày giờ; tư vấn gói hợp ngân sách; xin tên, SĐT để giữ bàn rồi báo ngay quản lý xác nhận.',
    cta: 'Dùng thử miễn phí tại **preny.ai**\nHotline **0389 647 778**',
    images: Object.fromEntries(Object.entries(IMG).map(([k, id]) => [k, U(id)])),
    features: [],
    steps: [],

    /* ===== Nội dung slide trình chiếu (trinh-chieu.html). Slide thống kê dùng số minh họa (deck.dashboard). ===== */
    deck: {
      dashboard: [
        { ten: 'Buffet <span class="grad">nướng lẩu</span>', den: '20/07/2026', khach: 24, tyLe: 0.62 },
        { ten: 'Buffet <span class="grad">hải sản</span>', den: '24/08/2026', khach: 15, tyLe: 0.58 },
        { ten: 'Tiệc <span class="grad">sinh nhật, liên hoan</span>', den: '29/09/2026', khach: 11, tyLe: 0.6 },
      ],
      chatbot: {
        y: [
          ['Trả lời ngay tức thì, 24/7', 'Khách nhắn lúc nào, AI trả lời sau 2 giây'],
          ['Tư vấn đúng gói buffet', 'Hỏi dịp, số người lớn, trẻ em, ngân sách'],
          ['Chốt đơn = giữ bàn cho khách', 'Tên, SĐT, số người, giờ → báo quản lý'],
          ['Hiểu hình ảnh khách gửi', 'Khách gửi ảnh món, AI nói rõ có trong gói nào'],
        ],
        chat: [
          { ref: { img: L(IMG['nuong']), ten: 'Buffet nướng lẩu · từ 349.000đ' } },
          { kh: 'sinh nhật vợ a tầm 12 người, có 2 bé. có phòng riêng ko e?' },
          {
            ai: 'Dạ có ạ! Bên em có **phòng riêng 10–16 người**, **trang trí sinh nhật miễn phí**, anh mang bánh kem vào **không thu phí** 🎂',
            meta: '⚡ Preny AI trả lời sau 2 giây',
          },
          { kh: 'gói hải sản bao nhiêu e? bé thì tính sao?' },
          {
            ai: 'Dạ gói hải sản **499.000đ/người lớn**, bé dưới 1m miễn phí, bé 1m–1m3 giảm 50% ạ. Anh cho em xin **tên, SĐT và giờ** để em giữ phòng nha.',
          },
          { kh: 'Quang - 0912 735 486. 18h30 T7 28/11 nhé' },
          { ai: 'Dạ em giữ **phòng VIP 3 lúc 18h30 T7 28/11** cho anh rồi ạ, chị Hà quản lý nhà hàng gọi xác nhận liền nha ⚡' },
          { don: true },
          { ok: true },
        ],
        lead: {
          ten: 'Anh Quang',
          sdt: '0912 735 486',
          nhuCau: 'Sinh nhật vợ · **10 người lớn, 2 bé** (0,9m và 1,2m) · **gói hải sản** · cần phòng riêng, mang bánh kem, đỗ ô tô',
          the: [['FB Ads · Buffet nướng lẩu', 'ng'], ['#sinhnhat', 'qt'], ['#12nguoi', 'qt'], ['Đã cho SĐT', 'ht']],
          lichNhan: 'Giữ phòng',
          lich: ['Phòng VIP 3 · 12 khách', '18:30 · Thứ Bảy 28/11'],
          sale: 'Chị Hà · Quản lý nhà hàng',
          nut: 'Báo quản lý',
          xong: 'Đã báo chị Hà',
          okTieuDe: 'Đã giữ phòng 28/11',
        },
        anh: {
          img: L(IMG['hai-san']),
          nhan: 'Khách gửi ảnh quầy hải sản trên mạng',
          kh: 'Buffet có hải sản như hình này ko e?',
          ai: 'Ảnh anh gửi có **tôm, sò điệp, ốc, chanh** ạ. Gói hải sản 499k bên em có **tôm sú, sò điệp, hàu nướng, ốc hương**; cua và tôm hùm không nằm trong buffet, anh muốn thì gọi thêm ạ.',
          pill: '🔍 AI nhìn ảnh món, nói rõ món nào có trong gói',
        },
      },
      afterSale: {
        y1: 'AI gợi ý thêm 5 món, dịch vụ cho bữa tiệc',
        y2: 'Món mới, ưu đãi khách quay lại',
        gio: 'Quản lý vừa xác nhận phòng cho anh Quang',
        don: { ma: '#TH2811', phi: 'bé dưới 1m miễn phí', sp: [{ ten: 'Buffet hải sản người lớn', sl: 10, dv: 'suất', gia: 499000 }] },
        loi: 'Cảm ơn anh Quang đã chọn Than Hồng cho sinh nhật chị nhà 🎂 Nhiều nhóm đặt thêm mấy món này cho bữa tiệc trọn vẹn hơn ạ:',
        sp: [
          { img: L(IMG['trang-mieng']), ten: 'Bánh kem sinh nhật 16cm', gia: 350000, nut: 'Thêm vào' },
          { img: L(IMG['khong-gian-2']), ten: 'Trang trí bóng bay, phông tên', gia: 450000, nut: 'Thêm vào' },
          { img: L(IMG['hai-san-2']), ten: 'Khay tôm hùm baby, sò điệp', gia: 390000, nut: 'Thêm vào' },
          { img: L(IMG['lau']), ten: 'Nâng cấp lẩu nấm thượng hạng', gia: 120000, nut: 'Thêm vào' },
          { img: L(IMG['salad']), ten: 'Bình nước ép cam tươi 1,5L', gia: 150000, cu: 180000, nut: 'Thêm vào' },
        ],
        khach: 'Lấy thêm a bánh kem với gói trang trí nha e',
        pill: '🛍 Khách thêm ngay: đơn tăng từ 4.990.000đ lên 5.790.000đ',
        fmm: {
          sep: '3 tuần sau · tin Facebook FMM',
          chao: 'Chào anh Quang 👋 Than Hồng vừa mở menu tiệc tất niên cho nhóm từ 15 người, gửi anh xem trước nha!',
          img: L(IMG['nhom-ban-2']),
          nhan: 'TIỆC TẤT NIÊN',
          ten: 'Menu tất niên nhóm từ 15 người',
          mo: 'Khách quen đặt trước 15/12 tặng 1 suất cho nhóm 15 người.',
          nut: 'Xem menu',
        },
        zbs: {
          ten: 'Ưu đãi khách quen cho anh Quang',
          mo: 'Cảm ơn anh đã tổ chức sinh nhật ở Than Hồng. Gửi anh ưu đãi cho lần ghé tiếp theo:',
          dong: [
            ['Mã ưu đãi', '**THANHONG10**'],
            ['Ưu đãi', 'Giảm 10% hóa đơn buffet từ 4 người'],
            ['Hạn dùng', '31/01/2027'],
          ],
          nut: 'Dùng ưu đãi',
        },
      },
      tieuDe6: 'Hệ thống AI chatbot giúp tăng<br><span class="grad">tỷ lệ giữ bàn thành công</span>',
      // Buffet: không lên đơn tự động (quản lý xác nhận phòng, khách tới ăn mới thanh toán) → 5 tính năng
      tinhNang: [
        ['AI tư vấn gói buffet, giữ bàn', 'Lấy tên, SĐT, số người, giờ'],
        ['Bám đuổi khách cân nhắc', 'Gửi ảnh quầy buffet thật, feedback'],
        ['AI chăm sóc khách sau bữa ăn', 'Xin đánh giá, mời quay lại'],
        ['Bộ công cụ Remarketing FMM và ZBS', 'Khai thác lại dữ liệu khách cũ'],
        ['Gửi sự kiện Lead qua Meta CAPI', 'Hỗ trợ tối ưu quảng cáo Facebook'],
      ],

      chotDon: {
        nganh: 'nhà hàng buffet',
        nguoi: 'Quản lý nhà hàng',
        chotLa: 'AI chốt đơn = giữ bàn cho khách',
        buoc: [
          { t: 'Chạy quảng cáo', d: 'Thu hút nhóm bạn, gia đình đi ăn', icon: 'megaphone', own: 'Nhà hàng chạy quảng cáo', mock: 'ad', img: L(IMG['nuong']), text: 'Buffet nướng lẩu từ 349k 🔥', btn: 'Gửi tin nhắn' },
          { t: 'Bắt đầu chat', d: 'Hỏi dịp, số người, ngày giờ', icon: 'chat', ai: true, mock: 'chat',
            msgs: [['kh', 'Buffet bao nhiêu 1 người e?'], ['ai', 'Dạ gói nướng lẩu 349k ạ. Mình đi mấy người, dịp gì ạ? 🔥']] },
          { t: 'Giữ bàn', d: 'Tên, SĐT, số người, giờ', icon: 'phone', ai: true, chot: true, mock: 'form', fields: ['Anh Quang · sinh nhật 12 người', '0912 735 486 · T7 28/11'], ok: 'Đã giữ phòng 28/11' },
          { t: 'Quản lý xác nhận', d: 'Gọi lại, chuẩn bị phòng, trang trí', icon: 'call', mock: 'lich', ten: 'Phòng VIP 3 · sinh nhật', gio: '18:30 · Thứ Bảy 28/11', ok: 'Đã xác nhận phòng' },
          { t: 'Khách tới ăn', d: 'Phòng riêng đã trang trí sẵn', icon: 'users', mock: 'img', img: L(IMG['khong-gian']), cap: 'Phòng riêng sẵn sàng' },
          { t: 'Thanh toán, xin đánh giá', d: 'Khách ăn xong, thanh toán tại quầy', icon: 'check', mock: 'img', img: L(IMG['nhom-ban']), cap: '✓ Sinh nhật 12 khách' },
        ],
        vong: { t: 'Chăm sóc sau bữa ăn & Remarketing', d: 'Xin đánh giá, ưu đãi khách quay lại, menu mới, tiệc nhóm cuối năm' },
      },

      bamDuoi: {
        nhan: 'Vì sao bám đuổi của Preny đặc biệt', shopB: 'Nhà hàng B',
        cmpSai: ['Khách im → gửi “Anh còn quan tâm đặt bàn không ạ?”', 'Không biết khách đi mấy người, dịp gì', 'Khách thấy phiền, bỏ qua tin nhắn'],
        cmpDung: ['Khách nhắn xong im → nhắc đúng dịp khách hỏi (thẻ <b>#sinhnhat</b> từ cuộc chat)',
                  'Báo giá xong im → bám đuổi theo giá: bé dưới 1m miễn phí, trang trí miễn phí (thẻ <b>#baogia</b>)',
                  'Đúng nhu cầu, đúng lý do im → khách quay lại giữ bàn'],
        hoi: 'Buffet bên em bao nhiêu 1 người vậy?',
        traLoiThuong: 'Dạ 349.000đ/người ạ.',
        nhacChung: 'Anh còn quan tâm đặt bàn không ạ? 😊',
        refImg: L(IMG['nuong']), refTen: 'Buffet nướng lẩu · từ 349.000đ',
        vd1: {
          ten: 'Khách nhắn xong im',
          kh: 'Tổ chức sinh nhật có phòng riêng không em?',
          ai: 'Dạ có phòng riêng 10–16 người ạ. Nhà mình đi khoảng mấy người ạ?',
          tag: '🏷 #sinhnhat', tagNote: 'thẻ từ cuộc chat · khách im 1 ngày',
          nhac: 'Anh Quang ơi, em gửi anh <b>ảnh phòng riêng một nhóm vừa tổ chức sinh nhật</b> bên em 🎂 Bên em <b>trang trí miễn phí</b>, anh mang bánh kem vào không thu phí ạ.',
          dung: '🎯 Theo thẻ #sinhnhat: nhắc đúng dịp khách hỏi',
          khach: 'Nhà a tầm 12 người e',
        },
        vd2: {
          ten: 'Báo giá xong im',
          kh: 'Gói hải sản bao nhiêu em?',
          ai: 'Dạ gói hải sản <b>499.000đ/người lớn</b> ạ.',
          tag: '🏷 #baogia', tagNote: 'báo giá xong khách im 1 ngày',
          nhac: 'Anh ơi, <b>bé dưới 1m miễn phí</b>, bé 1m–1m3 giảm 50%, nhóm từ 10 người được <b>phòng riêng không phụ thu</b> ạ. Em giữ phòng tối T7 cho anh nha?',
          dung: '🎯 Theo thẻ #baogia: bám đuổi theo giá, đúng lý do khách im',
          khach: 'Giữ giúp a tối T7 nhé',
        },
      },

      binhLuan: {
        post: '<b>Buffet nướng lẩu</b> từ 349.000đ · hơn 60 món, phòng riêng 10–16 người, trang trí sinh nhật miễn phí 🔥',
        img: L(IMG['quay-buffet']),
        kav: 'MC', kten: 'Lương Minh Châu', hoi: 'Công ty mình 25 người đi tất niên có phòng riêng không shop?',
        traLoi: 'Dạ chào chị Châu! Bên em vừa nhắn tin tư vấn chi tiết cho chị, chị xem tin nhắn nhé 💬',
        act2: 'Nhắn riêng, tư vấn tiệc nhóm 25 người',
        nhan: 'Chào chị Châu! Bên em có <b>sảnh riêng 20–30 người</b>, có màn chiếu, loa cho tiệc tất niên ạ. Buffet nướng lẩu <b>từ 349.000đ/người</b>. Chị cho em xin SĐT và ngày dự kiến để em giữ sảnh nha!',
        sp: { ten: 'Tiệc tất niên nhóm 25 người', gia: 'từ 349.000đ/người', img: L(IMG['khong-gian']) },
        khach: 'Số mình 0936 284 517, tối 18/12 nhé',
      },

      duLieu: {
        shopA: 'Nhà hàng A',
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: tặng 2 suất, bia không giới hạn', 'Khách tới nơi bị tính tiền, mất uy tín'],
        dung: ['Chỉ trả lời theo dữ liệu nhà hàng cung cấp', 'Không chắc chắn → xin khách chờ, AI tạm dừng', 'Báo ngay quản lý vào trả lời'],
        hoi: 'Đặt 12 người thì được miễn phí 2 suất, bia không giới hạn đúng không em?',
        aiSai: 'Dạ đúng ạ! <b>Miễn phí 2 suất</b> và <b>bia không giới hạn</b> luôn anh 🥰',
        thucTe: '⚠ Thực tế: buffet không gồm đồ uống có cồn; chỉ bé dưới 1m được miễn phí',
        gian: 'Thanh toán vẫn tính đủ 12 suất, bia tính riêng! Sao hôm trước nói miễn phí 2 suất? 😠',
        cho: 'Dạ anh chờ em một chút để em kiểm tra chính xác thông tin cho mình nhé!',
        nv: 'Chị Hà · Quản lý nhà hàng · người thật',
        nvTraLoi: 'Dạ em xin lỗi anh ạ. Buffet chưa gồm bia; bé dưới 1m miễn phí, bé 1m–1m3 giảm 50%. Nhóm anh từ 10 người em tặng thêm bình nước ép và trang trí sinh nhật miễn phí nhé!',
      },

      tags: {
        rows: [
          { ten: 'Trần Minh Quang', av: 'MQ', kenh: 'fb', msg: 'Buffet bên em bao nhiêu 1 người vậy?', gio: '20:11',
            tags: [['FB Ads · Buffet nướng lẩu', 'ng'], ['#sinhnhat', 'qt'], ['#12nguoi', 'qt'], ['Giữ phòng 28/11', 'ht']] },
          { ten: 'Lương Minh Châu', av: 'MC', kenh: 'fb', msg: 'Công ty 25 người có phòng riêng không?', gio: '10:12',
            tags: [['Bình luận bài viết', 'ng'], ['#tatnien', 'qt'], ['Đã cho SĐT', 'ht'], ['Gọi lần 1 ✓', 'sa']] },
          { ten: 'Ngô Đức Bình', av: 'ĐB', kenh: 'tiktok', msg: 'Trưa ngày thường có giảm giá không?', gio: '16:30',
            tags: [['TikTok · Video quầy hải sản', 'ng'], ['#buoitrua', 'qt'], ['Đã cho SĐT', 'ht'], ['Gọi lần 2 · không bắt máy', 'sa']] },
          { ten: 'Hà Thu Phương', av: 'TP', kenh: 'zalo', msg: 'Bé 1m2 tính tiền sao em?', gio: '09:05',
            tags: [['Zalo OA', 'ng'], ['#treem', 'qt'], ['Đang bám đuổi', 'ht']] },
          { ten: 'Vũ Thanh Sơn', av: 'TS', kenh: 'zalo', msg: 'Đặt lại phòng như lần trước nhé', gio: 'Hôm qua',
            tags: [['Zalo · Khách cũ', 'ng'], ['#khachquen', 'qt'], ['Đã giữ bàn', 'ht'], ['Đã kết nối Zalo', 'za']] },
        ],
        chanDung: {
          ten: 'Trần Minh Quang', av: 'MQ', kenh: 'fb', sub: 'Facebook Messenger · 0912 735 486',
          nhom: [
            ['Nguồn khách', [['Facebook Ads', 'ng'], ['Bài: Buffet nướng lẩu', 'ng']]],
            ['Quan tâm', [['#sinhnhat', 'qt'], ['#12nguoi', 'qt'], ['#haisan', 'qt']]],
            ['Hành trình', [['Nhắn tin 23/11', 'ht'], ['Cho SĐT 26/11', 'ht'], ['Giữ phòng 28/11', 'ht']]],
            ['Quản lý gọi', [['Chị Hà · lần 1 ✓', 'sa']]],
            ['Kết nối', [['Đã kết nối Zalo', 'za'], ['Khách mới · L1', 'lv']]],
          ],
          ghiChu: 'Sinh nhật vợ, 10 người lớn và 2 bé (0,9m, 1,2m), gói hải sản. Giữ phòng VIP 3 lúc 18h30 Thứ Bảy 28/11. Mang bánh kem, đi ô tô.',
        },
      },

      chotLai: [
        ['KHÁCH HÀNG', ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến']],
        ['AI CHATBOT', ['Phản hồi nhanh tức thì', 'Hỏi dịp, số người lớn, trẻ em', 'Tư vấn gói hợp ngân sách', 'Lấy tên, SĐT, giữ bàn']],
        ['BÁM ĐUỔI', ['Gửi 5 tin nhắn trước ngày ăn: quầy buffet thật, feedback, menu, phòng riêng']],
        ['ĐẶT BÀN', ['Quản lý xác nhận, chuẩn bị phòng', 'Trang trí sinh nhật miễn phí']],
        ['QUAY LẠI', ['Xin đánh giá, ưu đãi khách quen, menu mới, tiệc tất niên qua FB và Zalo']],
      ],
    },
  };
})();
