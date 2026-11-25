/* Kịch bản: NHÀ HÀNG ĂN UỐNG (nhà hàng Nhật, nhiều chi nhánh) — BẢN TRÌNH CHIẾU, nhóm CÂN NHẮC NHIỀU. Làm 25/11/2026 theo người dùng:
   "làm thêm ngành nhà hàng ăn. video thì theo kịch bản này" (video kịch bản người dùng gửi: bài đăng nhà hàng Nhật 3 chi nhánh,
   2 bình luận "Cần đặt bàn" / "Quán có ship tận nơi không ạ?", kịch bản đặt bàn và kịch bản giao món).
   "AI chốt đơn = lấy tên + SĐT + chi nhánh + ngày giờ + số người → chuyển nhân viên chi nhánh, gửi địa chỉ + Google Maps";
   gửi sự kiện Lead (không gửi Purchase khi khách mới yêu cầu đặt bàn).
   Ngành mới từ 23/11/2026: chỉ Bài 1 (deck dưới đây) + Bài 2 video (demo/bai2/kich-ban-nha-hang-an-tc.js), không viết features/steps.
   Mạch khách (khớp Bài 2): chị Minh Anh nhắn hỏi đặt bàn → AI gửi 3 chi nhánh, hỏi chi nhánh nào → Quận 7 → AI gửi menu chi nhánh Q7
   → tối thứ Bảy này, 19h, 4 người → AI ghi nhận, xin tên + SĐT → khách im → bám đuổi 5 tin (15 phút, ngày 2, 3, 5, 7)
   → khách gửi tên, SĐT → AI chuyển anh Khoa · Quản lý chi nhánh Quận 7, gửi địa chỉ + Google Maps → Lead → Zalo: ưu đãi món ăn, dịp lễ.
   Luồng phụ: chị Thu Hà hỏi giao tận nơi Quận 7 → menu → 2 Carpaccio cá hồi + 1 Đậu nành Nhật → xin tên, SĐT, địa chỉ lên đơn giao.
   AI không kiểm tra khách cũ/mới, không tự tính số lượng, không nhắc trước giờ tới ăn.
   Tên nhà hàng, địa chỉ, giá, món, khách, SĐT, nhân viên, mã ưu đãi: dữ liệu minh họa. Ảnh: Unsplash (ảnh thật, không phải nhà hàng của khách). */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'sushi-thuyen': '1553621042-f6e147245754', // thuyền sushi (ảnh bài đăng)
    'maki': '1709984110217-57d7d18e5299',      // khay maki cá hồi, bơ
    'sushi-ban': '1763647756796-af9230245bf8', // bàn sushi nhiều món
    'sashimi': '1772285283419-b34f42b4a4df',   // đĩa sashimi
    'sashimi-2': '1741318714462-6ba81356840b', // sashimi cá hồi, cá ngừ
    'sake-don': '1775889184887-9bc308c98aee',  // cơm cá hồi
    'nigiri': '1563612116625-3012372fccce',    // khay nigiri
    'carpaccio': '1721108917805-16fddd9cc06d', // carpaccio cá hồi
    'edamame': '1557621956-ce58555aa0ce',      // đậu nành Nhật
    'quay-bar': '1693822998952-b8d18c61043b',  // quầy bar gỗ nhà hàng Nhật
    'dau-bep': '1752135534175-44aa59a1bb50',   // đầu bếp sushi
    'ban-ghe': '1774705740253-fc1e515aa4ee',   // bàn ghế cạnh cửa sổ
    'ramen-tom': '1569718212165-3a8278d5f624', // ramen tôm, trứng
    'ramen': '1779453873118-0321c47aa1fd',     // ramen thịt heo
    'onigiri': '1696463469919-def9b2830857',   // cơm nắm
    'tempura': '1570078362689-c57c33cca104',   // tempura tôm
    'sushi-hop': '1636425732174-8700a53e8dd4', // hộp sushi mang đi
    'nhom-ban': '1729037049420-fd0ead54286a',  // nhóm bạn ăn sushi
    'nigiri-2': '1790643063016-f5c8365366e3',  // nigiri trên đĩa đá
    'mat-tien': '1778071073381-1a4dc5650727',  // mặt tiền đèn lồng
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    badge: 'AI CHATBOT · NHÀ HÀNG ĂN UỐNG',
    shop: { name: 'Nhà Hàng Nhật Koharu', initials: 'KH' },
    headline: { pre: 'AI chatbot nhận đặt bàn, giao món và', em: 'chuyển khách đúng chi nhánh' },
    sub: 'Giới thiệu chi nhánh, gửi đúng menu; hỏi ngày, giờ, số người; xin tên, SĐT rồi chuyển ngay nhân viên chi nhánh kèm địa chỉ, Google Maps.',
    cta: 'Dùng thử miễn phí tại **preny.ai**\nHotline **0389 647 778**',
    images: Object.fromEntries(Object.entries(IMG).map(([k, id]) => [k, U(id)])),
    features: [],
    steps: [],

    /* ===== Nội dung slide trình chiếu (trinh-chieu.html). Slide thống kê dùng số minh họa (deck.dashboard). ===== */
    deck: {
      dashboard: [
        { ten: 'Đặt bàn <span class="grad">chi nhánh Quận 7</span>', den: '20/07/2026', khach: 26, tyLe: 0.6 },
        { ten: 'Giao món <span class="grad">tận nơi</span>', den: '24/08/2026', khach: 19, tyLe: 0.64 },
        { ten: 'Combo <span class="grad">sushi, sashimi</span>', den: '29/09/2026', khach: 13, tyLe: 0.57 },
      ],
      chatbot: {
        y: [
          ['Trả lời ngay tức thì, 24/7', 'Khách nhắn lúc nào, AI trả lời sau 2 giây'],
          ['Giới thiệu đúng chi nhánh', 'Gửi địa chỉ, menu của chi nhánh khách chọn'],
          ['Chốt đơn = giữ bàn, lên đơn giao', 'Ngày, giờ, số người, tên, SĐT → nhân viên'],
          ['Hiểu hình ảnh khách gửi', 'Khách gửi ảnh món, AI nói rõ món nào có trong menu'],
        ],
        chat: [
          { ref: { img: L(IMG['sushi-thuyen']), ten: 'Sushi · Sashimi · 3 chi nhánh' } },
          { kh: 'Hello, mình muốn hỏi đặt bàn, hỗ trợ giúp mình.' },
          {
            ai: 'Dạ em chào chị! Bên em có 3 chi nhánh: **Quận 1** (12 Nguyễn Huệ), **Quận 3** (45 Võ Văn Tần), **Quận 7** (125 Nguyễn Thị Thập). Chị muốn đặt ở chi nhánh nào ạ?',
            meta: '⚡ Preny AI trả lời sau 2 giây',
          },
          { kh: 'Chị muốn đặt ở Quận 7 em, tối thứ Bảy này.' },
          {
            ai: 'Dạ em gửi chị **menu chi nhánh Quận 7** ạ. Chị muốn đặt **khoảng mấy giờ**, đi **bao nhiêu người** ạ?',
          },
          { kh: '7 giờ tối, 4 người nha em.' },
          { ai: 'Dạ em ghi nhận **4 người lúc 19h thứ Bảy 05/12, chi nhánh Quận 7**. Chị cho em xin **tên và SĐT** để em chuyển nhân viên nhà hàng hỗ trợ nha!' },
          { don: true },
          { ok: true },
        ],
        lead: {
          ten: 'Chị Minh Anh',
          sdt: '0908 416 286',
          nhuCau: 'Đặt bàn **4 người** · **19h thứ Bảy 05/12** · **chi nhánh Quận 7** · đã xem menu chi nhánh',
          the: [['Bình luận · Bài sushi, sashimi', 'ng'], ['#datban', 'qt'], ['#quan7', 'qt'], ['Đã cho SĐT', 'ht']],
          lichNhan: 'Đặt bàn',
          lich: ['Chi nhánh Quận 7 · 4 khách', '19:00 · Thứ Bảy 05/12'],
          sale: 'Anh Khoa · Quản lý chi nhánh Quận 7',
          nut: 'Chuyển chi nhánh',
          xong: 'Đã chuyển anh Khoa',
          okTieuDe: 'Đã giữ bàn 05/12',
        },
        anh: {
          img: L(IMG['carpaccio']),
          nhan: 'Khách gửi ảnh món cá hồi trên mạng',
          kh: 'Món này bên em có ko, giao Quận 7 được ko?',
          ai: 'Ảnh chị gửi là **cá hồi cắt lát rưới sốt** ạ. Bên em có **Carpaccio cá hồi kiểu Nhật 159.000đ**, chi nhánh Quận 7 **giao tận nơi** được ạ. Chị lấy mấy phần để em lên đơn nha?',
          pill: '🔍 AI nhìn ảnh món, tìm món giống trong menu',
        },
      },
      afterSale: {
        y1: 'AI gợi ý thêm 5 món ăn kèm',
        y2: 'Món mới, ưu đãi, dịp lễ',
        gio: 'Quận 7 vừa xác nhận đơn giao cho chị Thu Hà',
        don: { ma: '#KH2911', phi: 'giao tận nơi Quận 7', sp: [{ ten: 'Carpaccio cá hồi kiểu Nhật', sl: 2, dv: 'phần', gia: 159000 }, { ten: 'Đậu nành Nhật', sl: 1, dv: 'phần', gia: 49000 }] },
        loi: 'Cảm ơn chị Thu Hà đã đặt món ở Koharu 🍣 Nhiều khách gọi thêm mấy món này ăn kèm, chị xem thử nha:',
        sp: [
          { img: L(IMG['sashimi']), ten: 'Sashimi cá hồi', gia: 189000, nut: 'Thêm vào' },
          { img: L(IMG['maki']), ten: 'Combo sushi 24 miếng', gia: 399000, nut: 'Thêm vào' },
          { img: L(IMG['tempura']), ten: 'Tempura tôm', gia: 139000, nut: 'Thêm vào' },
          { img: L(IMG['sake-don']), ten: 'Cơm cá hồi Sake don', gia: 149000, nut: 'Thêm vào' },
          { img: L(IMG['ramen']), ten: 'Ramen', gia: 129000, cu: 149000, nut: 'Thêm vào' },
        ],
        khach: 'Lấy thêm chị 1 tempura tôm nha em',
        pill: '🛍 Khách thêm ngay 1 phần tempura tôm vào đơn giao',
        fmm: {
          sep: '2 tuần sau · tin Facebook FMM',
          chao: 'Chào chị Thu Hà 👋 Koharu vừa có menu mới tháng 12, gửi chị xem trước nha!',
          img: L(IMG['ramen-tom']),
          nhan: 'MENU MỚI',
          ten: 'Ramen tôm, cơm nắm, sushi cuộn mới',
          mo: 'Áp dụng cả 3 chi nhánh Quận 1, Quận 3, Quận 7.',
          nut: 'Xem menu',
        },
        zbs: {
          ten: 'Ưu đãi dịp lễ cho chị Thu Hà',
          mo: 'Cảm ơn chị đã đặt món ở Koharu. Dịp lễ cuối năm, bên em gửi chị ưu đãi:',
          dong: [
            ['Mã ưu đãi', '**KOHARU10**'],
            ['Ưu đãi', 'Giảm 10% hóa đơn từ 4 người'],
            ['Hạn dùng', '31/01/2027'],
          ],
          nut: 'Dùng ưu đãi',
        },
      },
      tieuDe6: 'Hệ thống AI chatbot giúp tăng<br><span class="grad">tỷ lệ đặt bàn thành công</span>',
      // Nhà hàng: đặt bàn không lên đơn tự động (nhân viên chi nhánh xác nhận, khách tới ăn mới thanh toán) → 5 tính năng
      tinhNang: [
        ['AI nhận đặt bàn, giao món', 'Chi nhánh, ngày giờ, số người, tên, SĐT'],
        ['Bám đuổi khách chưa để lại SĐT', 'Gửi ảnh món, nhắc đúng yêu cầu đặt bàn'],
        ['Chuyển nhân viên đúng chi nhánh', 'Gửi khách địa chỉ, Google Maps'],
        ['Bộ công cụ Remarketing FMM và ZBS', 'Menu mới, giảm giá, món bán chạy, dịp lễ'],
        ['Gửi sự kiện Lead qua Meta CAPI', 'Hỗ trợ tối ưu quảng cáo Facebook'],
      ],

      chotDon: {
        nganh: 'nhà hàng ăn uống',
        nguoi: 'Nhân viên chi nhánh',
        chotLa: 'AI chốt đơn = giữ bàn cho khách',
        buoc: [
          { t: 'Đăng bài, chạy quảng cáo', d: 'Sushi, sashimi, 3 chi nhánh', icon: 'megaphone', own: 'Nhà hàng đăng bài', mock: 'ad', img: L(IMG['sushi-thuyen']), text: 'Sushi · Sashimi · 3 chi nhánh 🍣', btn: 'Gửi tin nhắn' },
          { t: 'Bắt đầu chat', d: 'Chi nhánh, menu, ngày giờ, số người', icon: 'chat', ai: true, mock: 'chat',
            msgs: [['kh', 'Mình muốn hỏi đặt bàn'], ['ai', 'Dạ bên em có 3 chi nhánh, chị muốn đặt ở đâu ạ? 🍣']] },
          { t: 'Giữ bàn', d: 'Tên, SĐT, chi nhánh, giờ', icon: 'phone', ai: true, chot: true, mock: 'form', fields: ['Chị Minh Anh · 4 người · Quận 7', '0908 416 286 · T7 05/12'], ok: 'Đã giữ bàn 05/12' },
          { t: 'Chi nhánh xác nhận', d: 'Nhân viên gọi lại, xếp bàn', icon: 'call', mock: 'lich', ten: 'Chi nhánh Quận 7 · 4 khách', gio: '19:00 · Thứ Bảy 05/12', ok: 'Đã xác nhận bàn' },
          { t: 'Khách tới ăn', d: 'Có sẵn địa chỉ, Google Maps', icon: 'users', mock: 'img', img: L(IMG['quay-bar']), cap: 'Bàn đã sẵn sàng' },
          { t: 'Thanh toán, xin đánh giá', d: 'Khách ăn xong, thanh toán tại quầy', icon: 'check', mock: 'img', img: L(IMG['nhom-ban']), cap: '✓ Bàn 4 khách' },
        ],
        vong: { t: 'Chăm sóc sau bữa ăn & Remarketing', d: 'Menu mới, giảm giá, món bán chạy, ưu đãi dịp lễ qua Facebook và Zalo' },
      },

      bamDuoi: {
        nhan: 'Vì sao bám đuổi của Preny đặc biệt', shopB: 'Nhà hàng B',
        cmpSai: ['Khách im → gửi “Chị còn muốn đặt bàn không ạ?”', 'Không nhớ khách chọn chi nhánh nào, đi mấy người', 'Khách thấy phiền, bỏ qua tin nhắn'],
        cmpDung: ['Khách hỏi xong im → nhắc đúng yêu cầu: 4 người, 19h thứ Bảy, Quận 7 (thẻ <b>#datban</b> từ cuộc chat)',
                  'Xem menu xong im → gửi ảnh món của đúng chi nhánh khách chọn (thẻ <b>#quan7</b>)',
                  'Đúng nhu cầu, đúng lý do im → khách quay lại để lại SĐT'],
        hoi: 'Mình muốn đặt bàn tối thứ Bảy, Quận 7',
        traLoiThuong: 'Dạ chị cho em xin SĐT ạ.',
        nhacChung: 'Chị còn muốn đặt bàn không ạ? 😊',
        refImg: L(IMG['sushi-thuyen']), refTen: 'Sushi · Sashimi · 3 chi nhánh',
        vd1: {
          ten: 'Khách hỏi đặt bàn xong im',
          kh: '4 người, 7h tối thứ Bảy nha em',
          ai: 'Dạ chị cho em xin tên và SĐT để em chuyển nhân viên chi nhánh Quận 7 nha!',
          tag: '🏷 #datban', tagNote: 'thẻ từ cuộc chat · khách im 1 ngày',
          nhac: 'Chị ơi, em nhắn lại về <b>bàn 4 người lúc 19h thứ Bảy</b> ở chi nhánh Quận 7 ạ. Chị cho em xin <b>tên và SĐT</b> để em chuyển nhân viên hỗ trợ nhé!',
          dung: '🎯 Theo thẻ #datban: nhắc đúng yêu cầu khách đã nói',
          khach: 'Minh Anh, 0908 416 286 nha em',
        },
        vd2: {
          ten: 'Xem menu xong im',
          kh: 'Gửi chị menu Quận 7 xem với',
          ai: 'Dạ em gửi chị <b>menu chi nhánh Quận 7</b> ạ.',
          tag: '🏷 #quan7', tagNote: 'xem menu xong khách im 2 ngày',
          nhac: 'Em gửi chị thêm <b>hình món Nhật trong menu chi nhánh Quận 7</b>: sashimi cá hồi, tempura tôm, cơm cá hồi để mình tham khảo nhé!',
          dung: '🎯 Theo thẻ #quan7: gửi ảnh món đúng chi nhánh khách chọn',
          khach: 'Đặt giúp chị bàn tối thứ Bảy nha',
        },
      },

      binhLuan: {
        post: '<b>Nhà Hàng Nhật Koharu</b> · Sushi, sashimi mỗi ngày · 3 chi nhánh Quận 1, Quận 3, Quận 7 · nhận đặt bàn trước, giao món tận nơi 🍣',
        img: L(IMG['sushi-thuyen']),
        kav: 'TH', kten: 'Trần Thu Hà', hoi: 'Quán có ship tận nơi không ạ?',
        traLoi: 'Dạ, mình check inbox giúp em nha! 💬',
        act2: 'Nhắn riêng, gửi menu, nhận đơn giao',
        nhan: 'Dạ chào chị Thu Hà! <b>Chi nhánh Quận 7</b> bên em có giao món tận nơi ạ. Em gửi menu để chị chọn món: <b>Carpaccio cá hồi kiểu Nhật 159.000đ</b>, <b>Đậu nành Nhật 49.000đ</b>… Chị chọn món nào ạ?',
        sp: { ten: 'Carpaccio cá hồi kiểu Nhật', gia: '159.000đ', img: L(IMG['carpaccio']) },
        khach: 'Lấy chị 2 Carpaccio, 1 đậu nành nha em',
      },

      duLieu: {
        shopA: 'Nhà hàng A',
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: chi nhánh nào cũng giao, miễn phí ship', 'Khách đặt xong không ai giao, mất uy tín'],
        dung: ['Chỉ trả lời theo dữ liệu nhà hàng cung cấp', 'Không chắc chắn → xin khách chờ, AI tạm dừng', 'Báo ngay nhân viên chi nhánh vào trả lời'],
        hoi: 'Mình ở Thủ Đức, chi nhánh Quận 1 giao miễn phí qua được không em?',
        aiSai: 'Dạ được ạ! <b>Giao miễn phí</b> tới Thủ Đức luôn chị 🥰',
        thucTe: '⚠ Thực tế: chi nhánh Quận 1 chỉ giao trong bán kính 5km, ngoài khu vực tính phí theo app',
        gian: 'Đặt rồi giờ báo không giao được, sao lúc nãy nói miễn phí? 😠',
        cho: 'Dạ chị chờ em một chút để em kiểm tra chính xác thông tin cho mình nhé!',
        nv: 'Chị Ngân · Nhân viên chi nhánh Quận 1 · người thật',
        nvTraLoi: 'Dạ em xin lỗi chị ạ. Chi nhánh Quận 1 giao trong bán kính 5km; Thủ Đức em đặt giúp chị qua app giao hàng, phí ship theo app. Bên em tặng chị 1 phần đậu nành Nhật cho đơn này nhé!',
      },

      tags: {
        rows: [
          { ten: 'Nguyễn Minh Anh', av: 'MA', kenh: 'fb', msg: 'Mình muốn hỏi đặt bàn, hỗ trợ giúp mình.', gio: '18:00',
            tags: [['Bình luận · Bài sushi, sashimi', 'ng'], ['#datban', 'qt'], ['#quan7', 'qt'], ['Giữ bàn 05/12', 'ht']] },
          { ten: 'Trần Thu Hà', av: 'TH', kenh: 'fb', msg: 'Quán có ship tận nơi không ạ?', gio: '17:30',
            tags: [['Bình luận bài viết', 'ng'], ['#giaomon', 'qt'], ['Đã cho SĐT', 'ht'], ['Đã lên đơn giao', 'sa']] },
          { ten: 'Phạm Quốc Huy', av: 'QH', kenh: 'tiktok', msg: 'Trưa ngày thường có set cơm không?', gio: '11:20',
            tags: [['TikTok · Video sashimi', 'ng'], ['#buoitrua', 'qt'], ['Đã cho SĐT', 'ht'], ['Gọi lần 1 · không bắt máy', 'sa']] },
          { ten: 'Lê Bảo Ngọc', av: 'BN', kenh: 'zalo', msg: 'Chi nhánh Quận 3 có phòng riêng 10 người không?', gio: '09:05',
            tags: [['Zalo OA', 'ng'], ['#quan3', 'qt'], ['#phongrieng', 'qt'], ['Đang bám đuổi', 'ht']] },
          { ten: 'Đỗ Hoàng Nam', av: 'HN', kenh: 'zalo', msg: 'Đặt bàn 6 người tối Chủ nhật nhé', gio: 'Hôm qua',
            tags: [['Zalo OA', 'ng'], ['#quan1', 'qt'], ['Đã giữ bàn', 'ht'], ['Đã kết nối Zalo', 'za']] },
        ],
        chanDung: {
          ten: 'Nguyễn Minh Anh', av: 'MA', kenh: 'fb', sub: 'Facebook Messenger · 0908 416 286',
          nhom: [
            ['Nguồn khách', [['Bình luận bài viết', 'ng'], ['Bài: Sushi · Sashimi', 'ng']]],
            ['Quan tâm', [['#datban', 'qt'], ['#quan7', 'qt'], ['#4nguoi', 'qt']]],
            ['Hành trình', [['Nhắn tin 29/11', 'ht'], ['Cho SĐT 05/12', 'ht'], ['Giữ bàn 05/12', 'ht']]],
            ['Nhân viên gọi', [['Anh Khoa · lần 1 ✓', 'sa']]],
            ['Kết nối', [['Đã kết nối Zalo', 'za'], ['Khách mới · L1', 'lv']]],
          ],
          ghiChu: 'Đặt bàn 4 người lúc 19h thứ Bảy 05/12, chi nhánh Quận 7. Đã xem menu chi nhánh, đã nhận địa chỉ và Google Maps.',
        },
      },

      chotLai: [
        ['KHÁCH HÀNG', ['Bình luận', 'Ads', 'Sự kiện', 'Giới thiệu', 'Tự tìm đến']],
        ['AI CHATBOT', ['Phản hồi nhanh tức thì', 'Giới thiệu chi nhánh, gửi menu', 'Hỏi ngày, giờ, số người', 'Lấy tên, SĐT; nhận đơn giao món']],
        ['BÁM ĐUỔI', ['Gửi 5 tin nhắn trong 7 ngày: nhắc yêu cầu đặt bàn, ảnh món của chi nhánh']],
        ['ĐẶT BÀN', ['Chuyển nhân viên đúng chi nhánh', 'Gửi khách địa chỉ, Google Maps']],
        ['QUAY LẠI', ['Menu mới, giảm giá, món bán chạy, ưu đãi dịp lễ qua FB và Zalo']],
      ],
    },
  };
})();
