/* Kịch bản video demo NGANG 16:9: DỊCH VỤ THIẾT KẾ WEBSITE (nhóm cân nhắc nhiều), làm 26/11/2026 theo người dùng:
   "làm ngành dịch vụ thiết kế webside".
   Mạch cnn (mẫu dàn âm thanh / thẩm mỹ viện): 1 cảnh, không có bình luận, chỉ 1 dịch vụ (website bán hàng trọn gói) từ đầu tới cuối.
   Mạch: logo → quảng cáo → khách bấm "Gửi tin nhắn", hỏi giá → AI báo giá + gửi đúng ảnh quảng cáo → hỏi ngành, mục đích web
   → chị Thảo shop mỹ phẩm handmade, muốn giỏ hàng + thanh toán online, so bên khác 3 triệu làm theo mẫu, hỏi bao lâu xong
   → AI không chê bên khác, nói rõ khác nhau ở đâu, mời buổi tư vấn 30 phút qua Google Meet xem web mẫu, xin tên + SĐT
   → khách im → gắn thẻ + bám đuổi 5 tin → khách hẹn tư vấn → xin SĐT → báo tư vấn viên → gửi Lead lên Facebook
   → Zalo 3 tin → tổng kết → logo.
   Không lên đơn tự động: tư vấn viên chốt hợp đồng sau buổi tư vấn. Không có tin nhắc trước giờ hẹn. Không hứa kết quả bán hàng, thứ hạng Google.
   Tên công ty, giá, khách, SĐT, ưu đãi là dữ liệu minh họa. Ảnh: Unsplash (ảnh thật, không phải dự án của khách).
   Không làm ảnh giấy tờ giả: tin "cam kết" là ảnh màn hình code + thẻ liệt kê. */
window.VN_KB = {
  ten: 'Thiết kế website video ngang',
  ketSub: 'Để AI tư vấn và chốt lịch tư vấn thiết kế website cho bạn',
  shop: { ten: 'Tâm Việt Web', av: 'TV', mau: '#0F766E', sub: 'Thường trả lời ngay' },
  anh: {
    'web': '../assets/img/u/1547658719-da2b51169166_800x800.jpg',          // web hiện trên màn hình, máy tính bảng, điện thoại
    'web-dt': '../assets/img/u/1545235617-9465d2a55698_800x800.jpg',       // web trên laptop và điện thoại
    'web-ban-hang': '../assets/img/u/1768293336571-c48f8765a82d_800x800.jpg', // web doanh nghiệp trên laptop + điện thoại
    'mau-1': '../assets/img/u/1499951360447-b19be8fe80f5_800x800.jpg',     // laptop + iMac mở web
    'wireframe': '../assets/img/u/1600132806608-231446b2e7af_800x800.jpg', // phác thảo giao diện web trên giấy
    'thiet-ke': '../assets/img/u/1587355760421-b9de3226a046_800x800.jpg',  // nhà thiết kế vẽ giao diện
    'phac-thao': '../assets/img/u/1587440871875-191322ee64b0_800x800.jpg', // nhóm phác thảo giao diện, giấy note
    'giao-dien': '../assets/img/u/1558655146-d09347e92766_800x800.jpg',    // màn hình bộ giao diện
    'code': '../assets/img/u/1498050108023-c5249f4df085_800x800.jpg',      // laptop mở code
    'meet': '../assets/img/u/1588196749597-9ff075ee6b5b_800x800.jpg',      // laptop họp video
    'chu-shop': '../assets/img/u/1520333789090-1afc82db536a_800x800.jpg',  // chủ shop xem điện thoại tại bàn làm việc
    'thong-ke': '../assets/img/u/1460925895917-afdab827c52f_800x800.jpg',  // laptop mở bảng số liệu
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= QUẢNG CÁO → MESSENGER (1 cảnh, không có bình luận, chỉ website bán hàng trọn gói) ================= */
    { k: 'canh', nhan: 'Khách từ quảng cáo → Messenger', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'web', nhan: 'MESSENGER', tieuDe: 'Thiết kế website bán hàng · Tư vấn miễn phí', nut: 'Gửi tin nhắn',
        text: 'Bán hàng qua tin nhắn mãi mà chưa có website riêng? 💻 Tâm Việt Web thiết kế website bán hàng trọn gói: giao diện riêng, có giỏ hàng, chạy mượt trên điện thoại. Xem web mẫu trước khi làm. #thietkewebsite #websitebanhang #tuvanmienphi',
      }, d: 1500 },
    { k: 'cap', e: 'Quảng cáo Facebook', t: 'Khách bấm "Gửi tin nhắn" từ quảng cáo', s: 'Hỏi gì, AI trả lời ngay lập tức' },
    { k: 'tap', d: 1100 },
    { k: 'ms', ref: { loai: 'ad', img: 'web', dong1: 'Thảo Nguyễn đã trả lời một quảng cáo', dong2: 'Thiết kế website bán hàng · Tư vấn miễn phí' }, gio: '14:47', d: 900 },
    { k: 'kh', text: 'Làm web bán hàng bên em giá sao vậy?' },
    { k: 'cap', e: 'Khách hỏi giá', t: 'AI gửi đúng ảnh trên quảng cáo kèm giá', s: 'Giá tham khảo, tư vấn rồi mới báo chính xác' },
    { k: 'ai', text: 'Dạ chào chị Thảo, website bán hàng trọn gói bên em **từ 9.900.000đ**, gồm **tên miền, hosting năm đầu** và giao diện điện thoại ạ.' },
    { k: 'ai', img: 'web' },
    { k: 'cap', e: 'Hỏi đúng nhu cầu', t: 'Hỏi ngành và mục đích làm web', s: 'Mỗi ngành cần tính năng khác nhau' },
    { k: 'ai', text: 'Chị đang kinh doanh ngành gì, cần web để **bán hàng** hay để **giới thiệu thương hiệu** ạ?' },
    { k: 'kh', text: 'shop mỹ phẩm handmade, đang bán fb vs shopee. muốn web có giỏ hàng, thanh toán online. bên khác báo 3tr làm theo mẫu có sao ko e? bao lâu xong?' },
    { k: 'cap', e: 'Mời buổi tư vấn', t: 'Không chê bên khác, mời xem web mẫu qua Google Meet', s: 'Chưa cần ký gì, xem trước rồi mới quyết' },
    { k: 'ai', text: 'Dạ web 3 triệu thường là **giao diện mẫu dùng chung** ạ. Bên em **thiết kế riêng theo shop**, có giỏ hàng, thanh toán online, làm khoảng **3–4 tuần** tùy số trang.', d: 2700 },
    { k: 'ai', text: 'Em mời chị **buổi tư vấn 30 phút qua Google Meet**, bên em mở web mẫu ngành mỹ phẩm cho chị xem trước, chưa cần ký gì. Chị cho em xin **tên và SĐT** để xếp lịch nha 💻', d: 3000 },

    // Khách im → màn hình phụ: gắn thẻ (hashtag quảng cáo + thẻ từ cuộc chat), bám đuổi 5 tin
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Preny tự gắn thẻ dịch vụ khách quan tâm', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi 5 tin', t: '5 tin: 15 phút, rồi cách 1 ngày, 1 ngày, 1 ngày, 2 ngày', s: 'Web mẫu, feedback, cam kết, quy trình, lịch tư vấn' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T5 26/11/2026', d: 700 },
    { k: 'ai', text: 'Chị Thảo ơi, em gửi chị vài **web bán hàng** bên em vừa làm nha, xem được cả trên điện thoại ạ 💻' },
    { k: 'ai', imgs: ['mau-1', 'web-dt', 'web-ban-hang'] },
    { k: 'p', a: 'r1', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '15:04', ngay: 'T6 27/11/2026', d: 700 },
    { k: 'ai', text: 'Đây là chia sẻ của một chị chủ shop bên em vừa bàn giao web ạ 💬' },
    { k: 'ai', review: { av: 'HL', ten: 'Hoàng Lan', sub: 'đã đánh giá Tâm Việt Web', mau: '#F59E0B',
        text: 'Shop mình bán nến thơm, trước chỉ bán qua Facebook. Bên này cho xem bản thiết kế trước rồi mới làm, sửa 2 lần theo ý mình. Giờ khách tự xem giá, đặt hàng trên web.',
        note: 'Hiệu quả bán hàng tùy sản phẩm và cách vận hành của từng shop' } },
    { k: 'p', a: 'r2', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '15:04', ngay: 'T7 28/11/2026', d: 700 },
    { k: 'ai', img: 'code' },
    { k: 'ai', checks: { tieuDe: 'Bên em ghi rõ trong hợp đồng để chị yên tâm ạ:', dong: [
        '**Bàn giao mã nguồn**, tên miền đứng tên chị', '**Bảo hành 12 tháng**, lỗi kỹ thuật sửa miễn phí', '**Hướng dẫn** đăng sản phẩm, xử lý đơn tận tay'] } },
    { k: 'p', a: 'r3', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '15:04', ngay: 'CN 29/11/2026', d: 700 },
    { k: 'ai', text: 'Quy trình bên em là **tư vấn → bản thiết kế giao diện → lập trình → bàn giao**, chị duyệt giao diện rồi mới làm tiếp ạ 😊' },
    { k: 'ai', img: 'wireframe' },
    { k: 'p', a: 'r4', d: 800 },
    { k: 'time', nhan: '2 ngày sau', gio: '15:04', ngay: 'T3 01/12/2026', d: 700 },
    { k: 'ai', text: 'Thứ Tư, thứ Năm tuần này bên em còn vài **lịch tư vấn qua Google Meet**, chị muốn em giữ 1 lịch không ạ?' },
    { k: 'p', a: 'r5', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 5, khách hẹn lịch tư vấn', s: 'AI giữ lịch, xin SĐT ngay' },
    { k: 'kh', text: 'T5 tối 8h được ko e' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'ai', text: 'Dạ được ạ, em giữ lịch **20h thứ Năm 03/12** qua Google Meet. Chị cho em xin **tên và SĐT** để bạn tư vấn gửi link họp nha 💻' },
    { k: 'cap', e: 'Lấy SĐT', t: 'Khách để lại tên, SĐT cho lịch tư vấn', s: 'Đây là lúc AI chốt: chuyển khách cho người thật' },
    { k: 'kh', text: 'Thảo, 0912 573 408' },
    { k: 'ai', text: 'Dạ em giữ lịch cho chị Thảo rồi ạ. Anh Minh bên em sẽ gọi chị xác nhận và gửi link Google Meet qua Zalo liền nha 💻', d: 2200 },

    // Có SĐT → màn hình phụ: báo tư vấn viên gọi ngay (không lên đơn tự động) → gửi Lead lên Facebook
    { k: 'cap', e: 'Báo ngay cho tư vấn viên', t: 'Có SĐT: báo tư vấn viên gọi ngay', s: 'Không lên đơn tự động: tư vấn xong mới ký hợp đồng' },
    { k: 'panel', v: 'sale', d: 800 },
    { k: 'p', a: 's1', d: 700 }, { k: 'p', a: 's2', d: 500 }, { k: 'p', a: 's3', d: 500 }, { k: 'p', a: 's4', d: 600 },
    { k: 'p', a: 's5', d: 1600 }, { k: 'p', a: 's6', d: 2600 },
    { k: 'cap', e: 'Gửi Lead về Facebook', t: 'Khách để lại SĐT: gửi sự kiện Lead lên Facebook', s: 'Quảng cáo tìm thêm khách giống khách thật' },
    { k: 'panel', v: 'capi', d: 900 },
    { k: 'p', a: 'flow', d: 1500 }, { k: 'p', a: 'event', d: 1300 }, { k: 'p', a: 'ok', d: 3200 },
    { k: 'panel', v: null, d: 600 },

    // Sau khi bàn giao web, qua Zalo: 3 tin (hỏi thăm + lưu ý tuần đầu; mời kiểm tra web định kỳ; ưu đãi landing page cho khách quen)
    { k: 'cap', e: 'Chăm sóc sau bàn giao qua Zalo', t: 'Sau bàn giao: hỏi thăm, dặn cách đăng sản phẩm', s: 'Tin sau bán gửi qua Zalo OA của công ty' },
    { k: 'zalo', gio: '19:30', ngay: 'T2 04/01/2027', chip: 'Sau khi bàn giao website', d: 1500 },
    { k: 'zns', zns: { img: 'chu-shop', sao: false, tieuDe: 'Chị Thảo ơi, web mới chạy ổn không ạ?',
        noiDung: 'Tâm Việt gửi chị vài lưu ý cho tuần đầu nha:',
        dong: ['Ảnh sản phẩm chụp **vuông**, tên ghi rõ **loại + dung tích**', 'Đơn mới báo về **email và Zalo**, chị xử lý trong ngày', 'Cần sửa gì trong **12 tháng** bảo hành: nhắn em liền'],
        nut: 'Nhắn kỹ thuật' }, d: 5000 },
    { k: 'cap', e: 'Mời kiểm tra định kỳ', t: 'Web chạy 3 tháng: mời kiểm tra miễn phí', s: 'Khách tự chọn ngày' },
    { k: 'zstamp', gio: '10:00', ngay: 'T2 05/04/2027', chip: '3 tháng sau', d: 800 },
    { k: 'zns', zns: { img: 'thong-ke', sao: false, tieuDe: 'Web của chị đã chạy được 3 tháng ạ',
        noiDung: 'Bên em kiểm tra **tốc độ tải trang, sao lưu dữ liệu** cho chị **miễn phí** nha. Chị bấm chọn ngày, em xếp lịch ạ 💻',
        nut: 'Đặt lịch kiểm tra' }, d: 4400 },
    { k: 'cap', e: 'Ưu đãi khách quen', t: 'Gửi ưu đãi landing page cho đợt khuyến mãi', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'T7 08/05/2027', chip: 'Ưu đãi khách quen', d: 800 },
    { k: 'zns', zns: { banner: ['web', 'web-dt', 'giao-dien', 'thiet-ke'], nhan: 'ƯU ĐÃI KHÁCH QUEN · GIẢM 20%', mau: '#0F766E',
        tieuDe: 'Làm thêm landing page cho đợt khuyến mãi',
        noiDung: 'Landing page cho từng chương trình sale, cùng giao diện web của chị, khách quen giảm **20%**. Mã **TAMVIET20**, dùng đến hết 31/05/2027.',
        nut: 'Xem ưu đãi' }, d: 4800 },

    { k: 'tongket', d: 8500 },
    { k: 'outro', d: 5200 },
  ],
  // Slide tổng kết cuối video: theo mẫu dàn âm thanh (cột 3 là "Bám đuổi", 5 tin trong 7 ngày)
  tongKet: { tieuDe: 'Quy trình Preny AI giúp', em: 'tăng tỷ lệ chốt lịch tư vấn', cot: [
    { ten: 'Khách hàng', icon: 'users', dong: ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến'] },
    { ten: 'AI Chatbot', icon: 'bot', dong: ['Phản hồi nhanh tức thì', 'Báo giá, gửi web mẫu', 'Không chê bên khác', 'Lấy SĐT, hẹn tư vấn'] },
    { ten: 'Bám đuổi', icon: 'heart', dong: ['Gửi 5 tin nhắn trong 7 ngày: web mẫu, khách thật, cam kết, quy trình'] },
    { ten: 'Hẹn tư vấn', icon: 'calendar', dong: ['Khách xem web mẫu qua Google Meet', 'Tư vấn viên chốt hợp đồng'] },
    { ten: 'Mua lại', icon: 'refresh', dong: ['Mời kiểm tra web định kỳ, gửi ưu đãi landing page qua FB và Zalo'] },
  ] },
  panels: {
    tag: { av: 'PT', ten: 'Nguyễn Phương Thảo', sub: 'Messenger · từ quảng cáo Thiết kế website bán hàng',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#thietkewebsite', 'qt hot'], ['#websitebanhang', 'qt hot'], ['#tuvanmienphi', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#MyPhamHandmade', 'qt']]]],
      im: 'Khách im từ 14:49, chưa để lại SĐT',
      rule: { lb: 'Bám đuổi theo thẻ #websitebanhang', tieuDe: 'Bám đuổi bằng 5 tin ngắn',
              dong: [['15 phút', 'Web bán hàng bên mình vừa làm'], ['1 ngày', 'Feedback chủ shop'], ['1 ngày', 'Bàn giao mã nguồn, bảo hành'],
                     ['1 ngày', 'Quy trình: tư vấn, thiết kế, lập trình, bàn giao'], ['2 ngày', 'Mời giữ lịch tư vấn qua Google Meet']] },
      reply: 'Khách hẹn lịch tư vấn · dừng bám đuổi' },
    sale: { tieuDe: 'Báo khách mới cho tư vấn viên', ntTieuDe: 'Khách mới vừa để lại SĐT', khNhan: 'Khách hàng · Số điện thoại', lichNhan: 'Lịch tư vấn',
      nguon: 'Quảng cáo Thiết kế website bán hàng → Messenger', ten: 'Nguyễn Phương Thảo', sdt: '0912 573 408',
      nhuCau: 'Web bán mỹ phẩm handmade, có giỏ hàng, thanh toán online; đang bán Facebook, Shopee', lich: 'Google Meet · 20:00 Thứ Năm 03/12',
      the: [['#websitebanhang', 'qt'], ['#MyPhamHandmade', 'qt'], ['Đã cho SĐT', 'ok']],
      sale: { av: 'MN', ten: 'Anh Minh · Tư vấn', sub: 'Đang trực · nhận khách tự động' }, ok: 'Anh Minh đã nhận khách, gọi xác nhận ngay' },
    capi: { tieuDe: 'Gửi khách tiềm năng cho Facebook', event: 'Lead', nhan: 'SỰ KIỆN KHÁCH TIỀM NĂNG', giaTri: 'Có SĐT', pk: 'Lead · khách để lại SĐT',
      dong: [['Khách', 'Nguyễn Phương Thảo · đã để lại SĐT'], ['Nguồn khách', 'Quảng cáo Thiết kế website bán hàng → Messenger'], ['Nhu cầu', 'Website bán hàng, tư vấn qua Google Meet'], ['Event ID', 'TV0312-LEAD (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện Lead', khong: 'Không gửi Purchase khi khách chưa ký hợp đồng.' },
  },
};
