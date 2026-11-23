/* Kịch bản video demo NGANG 16:9: ĐỒNG PHỤC (nhóm cân nhắc nhiều), làm 23/11/2026 theo người dùng: "Đồng phục".
   Mạch cnn người dùng chốt 18/11/2026 (mẫu thẩm mỹ viện): 1 cảnh, KHÔNG có bình luận, chỉ 1 sản phẩm (áo polo đồng phục thêu logo).
   Mạch: logo → quảng cáo → khách bấm "Gửi tin nhắn", hỏi → AI gửi đúng ảnh quảng cáo, giới thiệu áo
   → hỏi số lượng, hạn cần áo → 80 người, cần trước tất niên 26/12, hỏi giá, vải có nóng không, bao lâu xong, may thử được không
   → AI: giá từ khoảng 145.000đ/áo (từ 50 áo, chưa thêu), KHÔNG chốt giá cuối trong chat, may 10–12 ngày sau khi duyệt mẫu,
   có áo mẫu → xin tên công ty, SĐT, màu, file logo → khách im → gắn thẻ + bám đuổi 5 tin → khách hẹn nhận áo mẫu
   → xin tên, SĐT → báo tư vấn viên ngay → gửi Lead lên Facebook → Zalo 3 tin (báo giá + mockup, tiến độ may, gợi ý đặt thêm)
   → tổng kết → logo. Không lên đơn tự động: duyệt mẫu, cọc rồi mới may. Không có tin nhắc trước giờ hẹn, không có tin vận chuyển.
   Nội dung lấy từ bài 1 (demo/kich-ban/dong-phuc-tc.js): xưởng, khách, công ty, SĐT, giá, feedback là dữ liệu minh họa.
   Ảnh: Unsplash có sẵn trong máy (ảnh thật, không phải hàng của xưởng). */
window.VN_KB = {
  ten: 'Đồng phục video ngang',
  ketSub: 'Để AI tư vấn và lấy đủ thông tin báo giá đồng phục cho đội của bạn',
  shop: { ten: 'Đồng Phục Hải Đăng', av: 'HĐ', mau: '#1E40AF', sub: 'Thường trả lời ngay' },
  anh: {
    'polo-mau': '../assets/img/u/1714317438040-0e8584215699_800x800.jpg',    // polo nhiều màu (ảnh quảng cáo)
    'polo-mau-2': '../assets/img/u/1714317437452-e36880e5f385_800x800.jpg',  // polo nhiều màu gấp sẵn
    'polo-vien': '../assets/img/u/1720514496268-44bb31c03815_800x800.jpg',   // polo viền cổ
    'polo-vien-2': '../assets/img/u/1720514496161-914011a9ee02_800x800.jpg', // polo trắng viền xanh
    'polo-theu': '../assets/img/u/1717127036020-83774f354008_800x800.jpg',   // polo thêu nhỏ ngực trái
    'theu-logo': '../assets/img/u/1772351721250-58367a2aecba_800x800.jpg',   // máy thêu đang thêu logo
    'may-theu': '../assets/img/u/1772351720165-d9218e428cf0_800x800.jpg',    // khung thêu trên áo
    'xuong-theu': '../assets/img/u/1772351721253-1008627c8c50_800x800.jpg',  // dàn máy thêu
    'chi-mau': '../assets/img/u/1783070610671-1cc98dffba42_800x800.jpg',     // ống chỉ nhiều màu
    'xuong-may': '../assets/img/u/1772351721310-0aa6b2d5ee49_800x800.jpg',   // thợ trong xưởng may
    'nhom': '../assets/img/u/1584365132623-e273491c69d2_800x800.jpg',        // nhóm mặc áo in logo
    'vai-mau': '../assets/img/u/1781888699751-15f2b304693c_800x800.jpg',     // chọn vải mẫu
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= QUẢNG CÁO → MESSENGER (1 cảnh, không có bình luận, chỉ áo polo thêu logo) ================= */
    { k: 'canh', nhan: 'Khách từ quảng cáo → Messenger', gio: '10:12' },
    { k: 'ad', ad: {
        img: 'polo-mau', nhan: 'MESSENGER', tieuDe: 'Áo polo đồng phục · Thêu logo', nut: 'Gửi tin nhắn',
        text: 'Đồng phục công ty, team building, tất niên 👕 Polo cá sấu cotton 4 chiều, thêu logo vi tính, may 10–12 ngày sau khi duyệt mẫu. Có áo mẫu, vải mẫu xem trước. #dongphuc #aopolo #theulogo',
      }, d: 1500 },
    { k: 'cap', e: 'Quảng cáo Facebook', t: 'Khách bấm "Gửi tin nhắn" từ quảng cáo', s: 'Hỏi gì, AI trả lời ngay lập tức' },
    { k: 'tap', d: 1100 },
    { k: 'ms', ref: { loai: 'ad', img: 'polo-mau', dong1: 'Tường Vi đã trả lời một quảng cáo', dong2: 'Áo polo đồng phục · Thêu logo' }, gio: '10:13', d: 900 },
    { k: 'kh', text: 'Shop may áo polo đồng phục cho công ty ko em?' },
    { k: 'cap', e: 'Khách hỏi', t: 'AI gửi đúng ảnh trên quảng cáo, giới thiệu áo', s: 'Có áo mẫu, vải mẫu xem trước' },
    { k: 'ai', text: 'Dạ chào chị Tường Vi, bên em may **áo polo cá sấu cotton 4 chiều**, thêu logo công ty bằng **máy thêu vi tính** ạ.' },
    { k: 'ai', img: 'polo-mau' },
    { k: 'cap', e: 'Hỏi đúng nhu cầu', t: 'Hỏi số lượng, hạn cần áo', s: 'Để báo đúng giá và lịch may' },
    { k: 'ai', text: 'Công ty mình cần khoảng **bao nhiêu áo**, và cần có áo **trước ngày nào** ạ?' },
    { k: 'kh', text: 'cty c 80 người, cần trước tất niên 26/12. giá bn 1 áo e? vải có nóng ko? may thử 1 cái xem trước đc ko?' },
    { k: 'cap', e: 'Không chốt giá bừa', t: 'Giá tham khảo, cần logo và số lượng từng size', s: 'May 10–12 ngày sau khi duyệt mẫu' },
    { k: 'ai', text: 'Dạ polo cá sấu **từ khoảng 145.000đ/áo** khi đặt từ 50 áo, chưa gồm thêu ạ. Giá cuối tùy **logo và số lượng từng size** nên em chưa dám báo chốt. Vải cotton 4 chiều **thấm mồ hôi**, mặc cả ngày không bí chị nha.' },
    { k: 'ai', text: 'Bên em may **10–12 ngày sau khi duyệt mẫu**, kịp 26/12 ạ. Em làm **mockup logo** và mang **áo mẫu, vải mẫu** tới văn phòng cho chị xem trước. Chị cho em xin **tên công ty, SĐT, màu áo và file logo** nha 👕' },

    // Khách im → màn hình phụ: gắn thẻ (hashtag quảng cáo + thẻ từ cuộc chat), bám đuổi 5 tin
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Preny tự gắn thẻ nhu cầu của khách', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi 5 tin', t: '5 tin: 15 phút, rồi cách 1 ngày, 1 ngày, 1 ngày, 2 ngày', s: 'Áo đã giao, khách công ty, quy trình, mẫu thêu, hạn tất niên' },
    { k: 'time', nhan: '15 phút sau', gio: '10:32', ngay: 'T2 23/11/2026', d: 700 },
    { k: 'ai', text: 'Chị Tường Vi ơi, em gửi chị **ảnh thật lô áo polo** bên em vừa giao tuần này nha 👕' },
    { k: 'ai', imgs: ['polo-mau-2', 'polo-theu', 'polo-vien'] },
    { k: 'p', a: 'r1', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '10:32', ngay: 'T3 24/11/2026', d: 700 },
    { k: 'ai', text: 'Đây là chia sẻ của một chị nhân sự đặt đồng phục bên em đầu năm ạ 💬' },
    { k: 'ai', review: { av: 'PL', ten: 'Phương Linh', sub: 'đã đánh giá Đồng Phục Hải Đăng', mau: '#F59E0B',
        text: 'Công ty mình 60 người, được may 1 áo mẫu duyệt trước nên yên tâm. Áo giao đúng hẹn, logo thêu sắc, anh em mặc cả mùa hè không kêu nóng.' } },
    { k: 'p', a: 'r2', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '10:32', ngay: 'T4 25/11/2026', d: 700 },
    { k: 'ai', img: 'vai-mau' },
    { k: 'ai', checks: { tieuDe: 'Quy trình may đồng phục bên em ạ:', dong: [
        '**Gửi logo** → em làm mockup, mang vải mẫu, áo mẫu tới văn phòng', '**Duyệt mẫu**, chốt size từng người theo bảng size', '**May 10–12 ngày**, giao tận văn phòng'] } },
    { k: 'p', a: 'r3', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '10:32', ngay: 'T5 26/11/2026', d: 700 },
    { k: 'ai', text: 'Logo nhiều màu bên em vẫn **thêu vi tính** được, đường chỉ sắc, giặt không bung ạ. Đây là máy đang thêu logo cho một khách tuần này 😊' },
    { k: 'ai', img: 'theu-logo' },
    { k: 'p', a: 'r4', d: 800 },
    { k: 'time', nhan: '2 ngày sau', gio: '10:32', ngay: 'T7 28/11/2026', d: 700 },
    { k: 'ai', text: 'Để kịp tất niên 26/12, mình nên **duyệt mẫu trong tuần sau** chị ạ. Sáng T2 30/11 em mang áo mẫu qua văn phòng chị được không ạ?' },
    { k: 'p', a: 'r5', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 5, khách hẹn xem áo mẫu', s: 'AI giữ lịch, xin SĐT ngay' },
    { k: 'kh', text: 'ok e, sáng T2 qua vp c ở Cầu Giấy nha. c gửi logo luôn' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'ai', text: 'Dạ em hẹn **10h sáng Thứ 2 30/11** mang vải mẫu, áo mẫu tới văn phòng chị ạ. Chị cho em xin **tên công ty và SĐT** để tư vấn viên gọi xác nhận nha 👕' },
    { k: 'cap', e: 'Lấy SĐT', t: 'Khách để lại tên, SĐT, thông tin đơn', s: 'Đây là lúc AI chốt: chuyển khách cho người thật' },
    { k: 'kh', text: 'Tường Vi, cty An Khang Tech, 0983 271 640. 80 áo màu xanh than nha' },
    { k: 'ai', text: 'Dạ em ghi **80 áo polo xanh than, thêu logo ngực trái**, cần trước 26/12 ạ. Anh Đức bên tư vấn sẽ gọi chị xác nhận và gửi **mockup logo** trước buổi hẹn nha 👕', d: 1800 },

    // Có SĐT → màn hình phụ: báo tư vấn viên ngay (không lên đơn tự động) → gửi Lead lên Facebook
    { k: 'cap', e: 'Báo ngay tư vấn viên', t: 'Có SĐT: báo tư vấn viên nhận khách ngay', s: 'Không lên đơn tự động: duyệt mẫu, cọc rồi mới may' },
    { k: 'panel', v: 'sale', d: 800 },
    { k: 'p', a: 's1', d: 700 }, { k: 'p', a: 's2', d: 500 }, { k: 'p', a: 's3', d: 500 }, { k: 'p', a: 's4', d: 600 },
    { k: 'p', a: 's5', d: 1600 }, { k: 'p', a: 's6', d: 2600 },
    { k: 'cap', e: 'Gửi Lead về Facebook', t: 'Khách để lại SĐT: gửi sự kiện Lead lên Facebook', s: 'Quảng cáo tìm thêm khách giống khách thật' },
    { k: 'panel', v: 'capi', d: 900 },
    { k: 'p', a: 'flow', d: 1500 }, { k: 'p', a: 'event', d: 1300 }, { k: 'p', a: 'ok', d: 3200 },
    { k: 'panel', v: null, d: 600 },

    // Sau buổi xem áo mẫu, qua Zalo: 3 tin (báo giá + mockup logo; ảnh tiến độ may; gợi ý đặt thêm)
    { k: 'cap', e: 'Gửi báo giá', t: 'Sau buổi xem mẫu: gửi báo giá + mockup logo', s: 'Tin gửi qua Zalo OA của xưởng' },
    { k: 'zalo', gio: '16:00', ngay: 'T2 30/11/2026', chip: 'Sau buổi xem mẫu', d: 1500 },
    { k: 'zns', zns: { img: 'polo-theu', sao: false, tieuDe: 'Báo giá đồng phục cho công ty chị Tường Vi',
        noiDung: 'Hải Đăng gửi chị báo giá theo mẫu đã xem sáng nay:',
        dong: ['**80 áo polo** cá sấu xanh than · thêu logo ngực trái', 'Đơn giá **165.000đ/áo** (đã gồm thêu) · tổng **13.200.000đ**', 'Duyệt mẫu xong may 10–12 ngày, giao tận văn phòng'],
        nut: 'Duyệt mockup' }, d: 5000 },
    { k: 'cap', e: 'Tiến độ may', t: 'Gửi ảnh xưởng đang may đơn của khách', s: 'Khách không cần hỏi, không phải tin vận chuyển' },
    { k: 'zstamp', gio: '10:00', ngay: 'T5 10/12/2026', chip: 'Tiến độ may', d: 800 },
    { k: 'zns', zns: { banner: ['xuong-may', 'may-theu', 'xuong-theu', 'chi-mau'], nhan: 'TIẾN ĐỘ ĐƠN #HD3011', mau: '#F97316',
        tieuDe: 'Đơn 80 áo của công ty chị đang thêu logo',
        noiDung: 'Xưởng đã **cắt vải xong**, đang **thêu logo**. Dự kiến hoàn thiện **16/12/2026**, kịp tất niên 26/12.',
        nut: 'Xem ảnh xưởng' }, d: 4600 },
    { k: 'cap', e: 'Gợi ý đặt thêm', t: 'Gợi ý nón, áo khoác cho sự kiện sau', s: 'Kéo khách đặt lại đồng phục' },
    { k: 'zstamp', gio: '10:00', ngay: 'T6 08/01/2027', chip: 'Gợi ý đặt thêm', d: 800 },
    { k: 'zns', zns: { banner: ['nhom', 'polo-vien-2', 'polo-mau-2', 'theu-logo'], nhan: 'KHÁCH CŨ · GIẢM 10%', mau: '#1E40AF',
        tieuDe: 'Nón, áo khoác thêu logo cho năm mới',
        noiDung: 'Công ty đặt lại được **giữ nguyên file thêu**, **giảm 10%** đơn đặt lại với mã **HAIDANG10**. Áp dụng đến hết 30/06/2027.',
        nut: 'Xem mẫu mới' }, d: 4800 },

    { k: 'tongket', d: 8500 },
    { k: 'outro', d: 5200 },
  ],
  // Slide tổng kết cuối video: lấy từ deck.chotLai của bài 1, theo mẫu thẩm mỹ viện (cột 3 là "Bám đuổi", 5 tin trong 7 ngày)
  tongKet: { tieuDe: 'Quy trình Preny AI giúp', em: 'tăng tỷ lệ chốt đơn đồng phục', cot: [
    { ten: 'Khách hàng', icon: 'users', dong: ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến'] },
    { ten: 'AI Chatbot', icon: 'bot', dong: ['Phản hồi nhanh tức thì', 'Hỏi số lượng, mẫu, màu, logo', 'Không chốt giá bừa', 'Lấy SĐT, hẹn mang áo mẫu'] },
    { ten: 'Bám đuổi', icon: 'heart', dong: ['Gửi 5 tin nhắn trong 7 ngày: áo đã giao, khách công ty, quy trình, mẫu thêu, hạn tất niên'] },
    { ten: 'Duyệt mẫu', icon: 'calendar', dong: ['Tư vấn viên mang áo mẫu, gửi báo giá, mockup logo', 'Khách duyệt mẫu, chốt size, cọc'] },
    { ten: 'Đặt lại', icon: 'refresh', dong: ['Gửi mẫu mới, ưu đãi đặt lại cho nhân viên mới, sự kiện sau qua FB và Zalo'] },
  ] },
  panels: {
    tag: { av: 'TV', ten: 'Lê Tường Vi', sub: 'Messenger · từ quảng cáo Áo polo thêu logo',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#dongphuc', 'qt hot'], ['#aopolo', 'qt hot'], ['#theulogo', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#TatNien', 'qt']]]],
      im: 'Khách im từ 10:16, chưa để lại SĐT',
      rule: { lb: 'Bám đuổi theo thẻ #dongphuc', tieuDe: 'Bám đuổi bằng 5 tin ngắn',
              dong: [['15 phút', 'Ảnh thật lô áo vừa giao'], ['1 ngày', 'Feedback chị nhân sự công ty khác'], ['1 ngày', 'Quy trình: mockup, duyệt mẫu, may'],
                     ['1 ngày', 'Mẫu thêu logo thật'], ['2 ngày', 'Hạn duyệt mẫu để kịp tất niên']] },
      reply: 'Khách hẹn xem áo mẫu Thứ 2 · dừng bám đuổi' },
    sale: { tieuDe: 'Báo khách mới cho Tư vấn viên', ntTieuDe: 'Khách mới vừa để lại SĐT', khNhan: 'Khách hàng · Số điện thoại', lichNhan: 'Lịch mang áo mẫu',
      nguon: 'Quảng cáo Áo polo thêu logo → Messenger', ten: 'Lê Tường Vi · An Khang Tech', sdt: '0983 271 640',
      nhuCau: '80 áo polo xanh than, thêu logo ngực trái, cần trước tất niên 26/12', lich: 'Mang áo mẫu · 10:00 Thứ 2 30/11 · văn phòng Cầu Giấy',
      the: [['#dongphuc', 'qt'], ['#TatNien', 'qt'], ['Đã cho SĐT', 'ok']],
      sale: { av: 'AĐ', ten: 'Anh Đức · Tư vấn đồng phục', sub: 'Đang trực · nhận khách tự động' }, ok: 'Anh Đức đã nhận khách, gọi xác nhận ngay' },
    capi: { tieuDe: 'Gửi khách tiềm năng cho Facebook', event: 'Lead', nhan: 'SỰ KIỆN KHÁCH TIỀM NĂNG', giaTri: 'Có SĐT', pk: 'Lead · khách để lại SĐT',
      dong: [['Khách', 'Lê Tường Vi · đã để lại SĐT'], ['Nguồn khách', 'Quảng cáo Áo polo thêu logo → Messenger'], ['Nhu cầu', '80 áo polo thêu logo, hẹn xem áo mẫu'], ['Event ID', 'HD2811-LEAD (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện Lead', khong: 'Không gửi Purchase khi khách chưa cọc.' },
  },
};
