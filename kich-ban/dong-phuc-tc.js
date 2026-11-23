/* Kịch bản: ĐỒNG PHỤC — BẢN TRÌNH CHIẾU, nhóm CÂN NHẮC NHIỀU. Làm 23/11/2026 theo người dùng: "Đồng phục".
   Từ 23/11/2026 bỏ demo chat vào thẳng (&demo): ngành mới chỉ có Bài 1 (phần deck dưới đây) + Bài 2 video ngang
   (demo/bai2/kich-ban-dong-phuc-tc.js), nên features/steps để trống.
   "AI chốt đơn = lấy tên + SĐT + thông tin đơn (số lượng, mẫu, màu, logo, hạn giao)": tư vấn viên mang vải mẫu, áo mẫu tới
   văn phòng khách, gửi báo giá + mockup logo; gửi sự kiện Lead (không gửi Purchase khi khách chưa cọc).
   Mạch: chị Tường Vi (nhân sự, công ty ~80 người ở Cầu Giấy) bấm quảng cáo áo polo đồng phục thêu logo, cần kịp tất niên 26/12
   → hỏi giá, vải có nóng không, bao lâu xong, may thử 1 áo xem trước được không → AI: polo cá sấu cotton 4 chiều từ ~145.000đ/áo
   (từ 50 áo, chưa thêu), may 10–12 ngày sau khi duyệt mẫu, có bảng size, có áo mẫu; KHÔNG chốt giá cuối trong chat
   → xin tên công ty, SĐT, số lượng, màu, file logo, hạn giao → khách im → bám đuổi 5 tin → hẹn nhận vải mẫu, áo mẫu
   10h T2 30/11 tại văn phòng → anh Đức · Tư vấn đồng phục → Zalo: báo giá + mockup; ảnh tiến độ may; gợi ý đặt thêm.
   Không có tin nhắc trước giờ hẹn, không có tin vận chuyển.
   Tên xưởng, khách, công ty, SĐT, giá, feedback, nhân viên: dữ liệu minh họa. Ảnh: Unsplash (ảnh thật, không phải hàng của xưởng). */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'polo-mau': '1714317438040-0e8584215699',   // polo nhiều màu xếp chồng (ảnh quảng cáo)
    'polo-mau-2': '1714317437452-e36880e5f385', // polo nhiều màu gấp sẵn
    'polo-vien': '1720514496268-44bb31c03815',  // polo viền cổ
    'polo-vien-2': '1720514496161-914011a9ee02',// polo trắng viền xanh
    'polo-theu': '1717127036020-83774f354008',  // polo xanh than thêu nhỏ ngực trái
    'theu-logo': '1772351721250-58367a2aecba',  // máy thêu đang thêu logo
    'may-theu': '1772351720165-d9218e428cf0',   // khung thêu trên áo
    'xuong-theu': '1772351721253-1008627c8c50', // dàn máy thêu công nghiệp
    'chi-mau': '1783070610671-1cc98dffba42',    // ống chỉ nhiều màu
    'xuong-may': '1772351721310-0aa6b2d5ee49',  // thợ trong xưởng may
    'staff': '1531844188816-f64ca68eecd1',      // nhân viên mặc áo in chữ STAFF
    'nhom': '1584365132623-e273491c69d2',       // nhóm người mặc áo thun in logo
    'vai-mau': '1781888699751-15f2b304693c',    // chọn vải mẫu
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    badge: 'AI CHATBOT · ĐỒNG PHỤC',
    shop: { name: 'Đồng Phục Hải Đăng', initials: 'HĐ' },
    headline: { pre: 'AI chatbot tư vấn đồng phục và', em: 'lấy đủ thông tin báo giá' },
    sub: 'Hỏi đúng số lượng, mẫu, màu, logo, hạn giao; không chốt giá bừa; xin SĐT, hẹn mang áo mẫu rồi chuyển ngay cho tư vấn viên.',
    cta: 'Dùng thử miễn phí tại **preny.ai**\nHotline **0389 647 778**',
    images: Object.fromEntries(Object.entries(IMG).map(([k, id]) => [k, U(id)])),
    // Đã bỏ demo chat vào thẳng (23/11/2026): không có features/steps
    features: [],
    steps: [],

    /* ===== Nội dung slide trình chiếu (trinh-chieu.html). Slide thống kê dùng số minh họa (deck.dashboard). ===== */
    deck: {
      demoDoc: {
        khach: 'Tường Vi',
        sanPham: 'Áo polo đồng phục thêu logo',
        ngay: '23/11/2026',
        gio: '10:12',
        binhLuan: [
          { ten: 'Phan Minh Tâm', noiDung: 'Đặt 30 áo thun in logo cho lớp được không shop?', traLoi: 'Dạ bên em vừa nhắn tin tư vấn chi tiết cho anh, anh xem inbox nha!' },
        ],
        post: {
          tieuDe: 'ÁO POLO ĐỒNG PHỤC · THÊU LOGO CÔNG TY 👕',
          dong: ['Polo cá sấu cotton 4 chiều', 'Thêu vi tính logo nhiều màu', 'May 10–12 ngày sau khi duyệt mẫu', 'Gửi áo mẫu, vải mẫu tận nơi'],
          anh: ['polo-mau', 'polo-theu', 'theu-logo', 'polo-vien'],
        },
        quangCao: {
          tieuDe: 'ÁO POLO ĐỒNG PHỤC · THÊU LOGO',
          mo: 'Đồng phục công ty, team building, tất niên. Polo cá sấu cotton 4 chiều, thêu logo vi tính, có áo mẫu xem trước.',
          anh: 'polo-mau', nhan: 'MESSENGER', dong: 'Tư vấn 24/7 · Báo giá theo số lượng', nut: 'Gửi tin nhắn',
        },
        ket: {
          tieuDe: 'PRENY AI – TƯ VẤN ĐỒNG PHỤC, LẤY ĐỦ THÔNG TIN BÁO GIÁ',
          y: ['Trả lời ngay 24/7', 'Hỏi số lượng, mẫu, màu, logo', 'Không chốt giá bừa trong chat', 'Lấy SĐT, hẹn mang áo mẫu',
              'Bám đuổi 5 tin trong 7 ngày', 'Báo ngay tư vấn viên', 'Gửi báo giá, tiến độ may qua Zalo', 'Meta CAPI Lead'],
        },
      },
      dashboard: [
        { ten: 'Áo polo <span class="grad">thêu logo công ty</span>', den: '20/07/2026', khach: 26, tyLe: 0.55 },
        { ten: 'Áo thun <span class="grad">in sự kiện</span>', den: '24/08/2026', khach: 19, tyLe: 0.57 },
        { ten: 'Áo khoác <span class="grad">đồng phục</span>', den: '29/09/2026', khach: 11, tyLe: 0.53 },
      ],
      chatbot: {
        y: [
          ['Trả lời ngay tức thì, 24/7', 'Khách nhắn lúc nào, AI trả lời sau 2 giây'],
          ['Tư vấn đúng nhu cầu', 'Hỏi số lượng, mẫu, màu, kiểu thêu hay in'],
          ['Chốt đơn = lấy SĐT + thông tin đơn', 'Hẹn mang áo mẫu, chuyển tư vấn viên'],
          ['Hiểu hình ảnh khách gửi', 'Khách gửi ảnh áo cũ, AI nhận ra kiểu thêu'],
        ],
        chat: [
          { ref: { img: L(IMG['polo-mau']), ten: 'Áo polo đồng phục · Thêu logo' } },
          { kh: 'cty c 80 người, may polo thêu logo bn 1 áo e?' },
          {
            ai: 'Dạ polo cá sấu cotton 4 chiều **từ khoảng 145.000đ/áo** khi đặt từ 50 áo, chưa gồm thêu ạ. Giá cuối tùy **số lượng từng size và logo** nên em chưa dám báo chốt 👕',
            meta: '⚡ Preny AI trả lời sau 2 giây',
          },
          { kh: 'bao lâu xong e? c cần trước 26/12' },
          {
            ai: 'Dạ may **10–12 ngày sau khi duyệt mẫu**, kịp tất niên ạ. Chị cho em xin **tên công ty, SĐT, màu áo và file logo** để bên em làm mockup, mang **áo mẫu** qua cho chị xem nha.',
          },
          { kh: 'Tường Vi - 0983 271 640. sáng T2 30/11 qua vp c được ko e?' },
          { ai: 'Dạ được ạ! Em hẹn **10h sáng T2 30/11** mang vải mẫu, áo mẫu tới văn phòng chị, anh Đức bên tư vấn gọi xác nhận liền nha ⚡' },
          { don: true },
          { ok: true },
        ],
        lead: {
          ten: 'Chị Tường Vi',
          sdt: '0983 271 640',
          nhuCau: 'Nhân sự công ty phần mềm, Cầu Giấy · **80 áo polo** xanh than, **thêu logo** ngực trái · cần trước **tất niên 26/12**',
          the: [['FB Ads · Áo polo thêu logo', 'ng'], ['#dongphuc', 'qt'], ['#TatNien', 'qt'], ['Đã cho SĐT', 'ht']],
          lichNhan: 'Lịch mang áo mẫu',
          lich: ['Văn phòng khách · Cầu Giấy', '10:00 · Thứ 2 30/11'],
          sale: 'Anh Đức · Tư vấn đồng phục',
          nut: 'Chuyển cho tư vấn viên',
          xong: 'Đã chuyển cho anh Đức',
          okTieuDe: 'Đã hẹn mang áo mẫu 30/11',
        },
        anh: {
          img: L(IMG['polo-theu']),
          nhan: 'Khách gửi ảnh áo đồng phục cũ',
          kh: 'Thêu logo nhỏ như áo này được ko e?',
          ai: 'Ảnh chị gửi là áo polo **thêu vi tính logo nhỏ ngực trái** ạ. Bên em thêu được kiểu này, logo nhiều màu vẫn thêu được. Chị gửi **file logo gốc** (AI hoặc PNG nét) để em làm mockup đúng màu nha.',
          pill: '🔍 AI nhìn ảnh, nhận ra kiểu thêu, xin đúng file logo',
        },
      },
      afterSale: {
        y1: 'AI gửi tiếp 5 sản phẩm cho khách vừa đặt',
        y2: 'Mẫu mới, ưu đãi khách cũ đặt lại',
        gio: 'Tư vấn viên vừa chốt đơn 80 áo polo cho công ty chị Tường Vi',
        don: { ma: '#HD3011', phi: 'giao tận văn phòng', sp: [{ ten: 'Áo polo cá sấu xanh than · thêu logo ngực trái', sl: 80, dv: 'áo', gia: 165000 }] },
        loi: 'Cảm ơn chị Tường Vi đã chọn Hải Đăng 👕 Công ty đặt đồng phục hay đặt thêm mấy món này cho sự kiện ạ:',
        sp: [
          { img: L(IMG['chi-mau']), ten: 'Nón lưỡi trai thêu logo', gia: 85000, nut: 'Thêm vào' },
          { img: L(IMG['xuong-theu']), ten: 'Áo khoác gió thêu logo', gia: 280000, nut: 'Xem thêm' },
          { img: L(IMG['nhom']), ten: 'Áo thun sự kiện in logo', gia: 95000, nut: 'Xem thêm' },
          { img: L(IMG['polo-vien']), ten: 'Áo polo viền cổ cho quản lý', gia: 185000, nut: 'Xem mẫu' },
          { img: L(IMG['staff']), ten: 'Áo thun in chữ STAFF cho ban tổ chức', gia: 90000, nut: 'Thêm vào' },
        ],
        khach: 'Lấy thêm 80 nón thêu logo nha e',
        pill: '🛍 Khách thêm ngay: đơn tăng từ 13.200.000đ lên 20.000.000đ',
        fmm: {
          sep: '1 tháng sau · tin Facebook FMM',
          chao: 'Chào chị Tường Vi 👋 Hải Đăng vừa có mẫu áo khoác gió đồng phục mới, gửi chị xem trước cho mùa team building nha!',
          img: L(IMG['xuong-theu']),
          nhan: 'MẪU MỚI',
          ten: 'Áo khoác gió thêu logo',
          mo: 'Khách cũ đặt lại được giữ nguyên file thêu, không tính phí lên mẫu.',
          nut: 'Xem mẫu áo khoác',
        },
        zbs: {
          ten: 'Ưu đãi đặt lại cho công ty chị Tường Vi',
          mo: 'Cảm ơn công ty đã tin chọn Hải Đăng. Lần đặt tiếp theo chị nhận:',
          dong: [
            ['Mã ưu đãi', '**HAIDANG10**'],
            ['Ưu đãi', 'Giảm 10% đơn đặt lại, giữ file thêu logo cũ'],
            ['Hạn dùng', '30/06/2027'],
          ],
          nut: 'Đặt lại đồng phục',
        },
      },
      tieuDe6: 'Hệ thống AI chatbot giúp tăng<br><span class="grad">tỷ lệ chốt đơn đồng phục</span>',
      tinhNang: [
        ['AI tư vấn, lấy đủ thông tin báo giá', 'Số lượng, mẫu, màu, logo, hạn giao'],
        ['Bám đuổi khách cân nhắc lâu', 'Ảnh áo đã giao, feedback công ty'],
        ['AI chăm sóc sau báo giá', 'Gửi mockup, ảnh tiến độ may qua Zalo'],
        ['Bộ công cụ Remarketing FMM và ZBS', 'Khai thác lại dữ liệu khách cũ'],
        ['Gửi sự kiện Lead qua Meta CAPI', 'Hỗ trợ tối ưu quảng cáo Facebook'],
      ],

      chotDon: {
        nganh: 'đồng phục',
        nguoi: 'Tư vấn viên',
        chotLa: 'AI chốt đơn = lấy SĐT + thông tin đơn',
        buoc: [
          { t: 'Chạy quảng cáo', d: 'Thu hút công ty cần đồng phục', icon: 'megaphone', own: 'Đơn vị chạy quảng cáo', mock: 'ad', img: L(IMG['polo-mau']), text: 'Áo polo đồng phục thêu logo 👕', btn: 'Gửi tin nhắn' },
          { t: 'Bắt đầu chat', d: 'Hỏi số lượng, mẫu, màu', icon: 'chat', ai: true, mock: 'chat',
            msgs: [['kh', 'May polo thêu logo bn 1 áo e?'], ['ai', 'Dạ công ty mình cần khoảng bao nhiêu áo ạ? 👕']] },
          { t: 'Lấy thông tin đơn', d: 'SĐT, số lượng, logo, hạn giao', icon: 'phone', ai: true, chot: true, mock: 'form', fields: ['Chị Tường Vi · 80 áo, trước 26/12', '0983 271 640'], ok: 'Đã hẹn 30/11' },
          { t: 'Mang áo mẫu', d: 'Vải mẫu, áo mẫu, bảng size', icon: 'call', mock: 'lich', ten: 'Mang áo mẫu tới văn phòng', gio: '10:00 · Thứ 2 30/11', ok: 'Đã xác nhận lịch' },
          { t: 'Duyệt mẫu thêu', d: 'Mockup logo, chốt size từng người', icon: 'users', mock: 'img', img: L(IMG['theu-logo']), cap: 'Khách duyệt mẫu thêu logo' },
          { t: 'Cọc và may', d: 'May 10–12 ngày, giao tận nơi', icon: 'check', mock: 'img', img: L(IMG['xuong-may']), cap: '✓ Xưởng may đơn 80 áo' },
        ],
        vong: { t: 'Chăm sóc sau báo giá & Remarketing', d: 'Gửi mockup logo, ảnh tiến độ may, gợi ý nón, áo khoác, đặt lại cho sự kiện sau' },
      },

      bamDuoi: {
        nhan: 'Vì sao bám đuổi của Preny đặc biệt', shopB: 'Xưởng B',
        cmpSai: ['Khách im → gửi “Chị còn quan tâm đồng phục không ạ?”', 'Không biết công ty bao nhiêu người, cần trước ngày nào', 'Khách thấy phiền, bỏ qua tin nhắn'],
        cmpDung: ['Khách nhắn xong im → nhắc đúng nỗi lo của khách (thẻ <b>#dongphuc</b> từ quảng cáo)',
                  'Hỏi giá xong im → bám đuổi theo giá: áo mẫu xem trước, giá theo số lượng (thẻ <b>#baogia</b>)',
                  'Đúng nhu cầu, đúng lý do im → khách quay lại gửi thông tin đơn'],
        hoi: 'May polo thêu logo bao nhiêu 1 áo em?',
        traLoiThuong: 'Dạ 145.000đ/áo ạ.',
        nhacChung: 'Chị còn quan tâm đồng phục không ạ? 😊',
        refImg: L(IMG['polo-mau']), refTen: 'Áo polo đồng phục · Thêu logo',
        vd1: {
          ten: 'Khách nhắn xong im',
          kh: 'Vải polo mặc có nóng không em? Văn phòng ít điều hòa',
          ai: 'Dạ vải cá sấu cotton 4 chiều thấm mồ hôi, mặc cả ngày không bí ạ. Công ty mình cần khoảng bao nhiêu áo ạ?',
          tag: '🏷 #dongphuc', tagNote: 'thẻ từ quảng cáo · khách im 1 ngày',
          nhac: 'Chị Tường Vi ơi, em gửi chị <b>chia sẻ của một chị nhân sự</b> công ty 60 người, mặc polo cá sấu bên em cả mùa hè 👕 Bên em mang <b>vải mẫu tận văn phòng</b> để chị sờ thử nha.',
          dung: '🎯 Theo thẻ #dongphuc: nhắc đúng nỗi lo vải nóng',
          khach: 'Mang qua vp c xem đc ko e?',
        },
        vd2: {
          ten: 'Hỏi giá xong im',
          kh: 'May polo thêu logo bao nhiêu 1 áo em?',
          ai: 'Dạ polo cá sấu <b>từ khoảng 145.000đ/áo</b> khi đặt từ 50 áo ạ.',
          tag: '🏷 #baogia', tagNote: 'hỏi giá xong khách im 2 ngày',
          nhac: 'Chị ơi, bên em <b>may 1 áo mẫu có thêu logo</b> để chị duyệt trước khi may cả lô ạ. Chị gửi em file logo, em làm mockup miễn phí nha?',
          dung: '🎯 Theo thẻ #baogia: bám đuổi theo giá, đúng lý do khách im',
          khach: 'Ok c gửi logo nha',
        },
      },

      binhLuan: {
        post: '<b>Áo polo đồng phục thêu logo</b> · cotton 4 chiều, may 10–12 ngày sau khi duyệt mẫu, có áo mẫu xem trước 👕',
        img: L(IMG['polo-mau-2']),
        kav: 'MT', kten: 'Phan Minh Tâm', hoi: 'Đặt 30 áo thun in logo cho lớp được không shop?',
        traLoi: 'Dạ chào anh Tâm! Bên em vừa nhắn tin tư vấn chi tiết cho anh, anh xem tin nhắn nhé 💬',
        act2: 'Nhắn riêng, gửi mẫu áo thun in',
        nhan: 'Chào anh Tâm! Bên em nhận may <b>từ 20 áo</b> ạ. Áo thun cotton in logo <b>từ khoảng 85.000đ/áo</b>, tùy số màu in. Anh cho em xin SĐT và file logo để em gửi mockup nha!',
        sp: { ten: 'Áo thun cotton in logo', gia: 'từ 85.000đ', img: L(IMG['nhom']) },
        khach: 'Số mình 0914 362 857 nhé',
      },

      duLieu: {
        shopA: 'Xưởng A',
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: giao 3 ngày, 99k đã gồm thêu', 'Khách khiếu nại, xưởng mất uy tín'],
        dung: ['Chỉ trả lời theo dữ liệu xưởng cung cấp', 'Không chắc chắn → xin khách chờ, AI tạm dừng', 'Báo ngay tư vấn viên vào trả lời'],
        hoi: 'Đặt 80 áo thêu logo thì 3 ngày có không em? Giá 99k gồm thêu luôn hả?',
        aiSai: 'Dạ <b>3 ngày có áo</b> ạ, <b>99k đã gồm thêu</b> luôn chị 🥰',
        thucTe: '⚠ Thực tế: may 10–12 ngày sau khi duyệt mẫu; giá theo số lượng, kiểu thêu và logo',
        gian: 'Sắp tới ngày tất niên mà chưa có áo, báo giá còn đội lên! Sao hôm trước nói 3 ngày, 99k? 😠',
        cho: 'Dạ chị chờ em một chút để em kiểm tra chính xác thông tin cho mình nhé!',
        nv: 'Anh Đức · Tư vấn đồng phục · người thật',
        nvTraLoi: 'Dạ em xin lỗi chị ạ. Đơn 80 áo thêu logo cần 10–12 ngày sau khi duyệt mẫu. Em ưu tiên xếp lịch may cho chị, gửi lại báo giá đúng theo logo và số lượng từng size nhé!',
      },

      tags: {
        rows: [
          { ten: 'Lê Tường Vi', av: 'TV', kenh: 'fb', msg: 'Cty 80 người, may polo thêu logo bao nhiêu?', gio: '10:13',
            tags: [['FB Ads · Áo polo thêu logo', 'ng'], ['#dongphuc', 'qt'], ['#TatNien', 'qt'], ['Hẹn mang áo mẫu 30/11', 'ht']] },
          { ten: 'Phan Minh Tâm', av: 'MT', kenh: 'fb', msg: 'Đặt 30 áo thun in logo cho lớp?', gio: '15:40',
            tags: [['Bình luận bài viết', 'ng'], ['#aothunlop', 'qt'], ['Đã cho SĐT', 'ht'], ['Gọi lần 1 ✓', 'sa']] },
          { ten: 'Vũ Thanh Bình', av: 'TB', kenh: 'tiktok', msg: 'Áo khoác gió thêu logo có không?', gio: '16:30',
            tags: [['TikTok · Video xưởng thêu', 'ng'], ['#aokhoac', 'qt'], ['Đã cho SĐT', 'ht'], ['Gọi lần 2 · không bắt máy', 'sa']] },
          { ten: 'Đinh Thu Trang', av: 'TT', kenh: 'zalo', msg: 'Đồng phục nhà hàng 25 người', gio: '09:05',
            tags: [['Zalo OA', 'ng'], ['#nhahang', 'qt'], ['Đang bám đuổi', 'ht']] },
          { ten: 'Hoàng Văn Sơn', av: 'VS', kenh: 'zalo', msg: 'Đặt lại 40 áo cho nhân viên mới', gio: 'Hôm qua',
            tags: [['Zalo · Khách cũ', 'ng'], ['#datlai', 'qt'], ['Đã cọc', 'ht'], ['Đã kết nối Zalo', 'za']] },
        ],
        chanDung: {
          ten: 'Lê Tường Vi', av: 'TV', kenh: 'fb', sub: 'Facebook Messenger · 0983 271 640',
          nhom: [
            ['Nguồn khách', [['Facebook Ads', 'ng'], ['Bài: Áo polo thêu logo', 'ng']]],
            ['Quan tâm', [['#dongphuc', 'qt'], ['#TatNien', 'qt']]],
            ['Hành trình', [['Nhắn tin 23/11', 'ht'], ['Cho SĐT 28/11', 'ht'], ['Hẹn áo mẫu 30/11', 'ht']]],
            ['Tư vấn viên', [['Anh Đức · lần 1 ✓', 'sa']]],
            ['Kết nối', [['Đã kết nối Zalo', 'za'], ['Khách mới · L1', 'lv']]],
          ],
          ghiChu: 'Phụ trách nhân sự công ty phần mềm ~80 người ở Cầu Giấy. Cần 80 áo polo xanh than thêu logo ngực trái, kịp tất niên 26/12. Hỏi vải có nóng không, muốn xem áo mẫu trước. Hẹn mang vải mẫu, áo mẫu 10h T2 30/11.',
        },
      },

      chotLai: [
        ['KHÁCH HÀNG', ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến']],
        ['AI CHATBOT', ['Phản hồi nhanh tức thì', 'Hỏi số lượng, mẫu, màu, logo', 'Không chốt giá bừa', 'Lấy SĐT, hẹn mang áo mẫu']],
        ['BÁM ĐUỔI', ['Gửi 5 tin nhắn trong 7 ngày: áo đã giao, khách công ty, quy trình, mẫu thêu, hạn tất niên']],
        ['DUYỆT MẪU', ['Tư vấn viên mang áo mẫu, gửi báo giá, mockup logo', 'Khách duyệt mẫu, chốt size, cọc']],
        ['ĐẶT LẠI', ['Gửi mẫu mới, ưu đãi đặt lại cho nhân viên mới, sự kiện sau qua FB và Zalo']],
      ],
    },
  };
})();
