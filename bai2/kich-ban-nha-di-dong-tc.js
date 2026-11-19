/* Kịch bản video demo NGANG 16:9: THI CÔNG NHÀ DI ĐỘNG, RESORT (nhóm cân nhắc nhiều).
   Viết lại 18/11/2026 theo mạch cnn người dùng chốt (mẫu thẩm mỹ viện): 1 cảnh, không có bình luận, chỉ 1 mẫu nhà từ đầu tới cuối
   (cabin mái chữ A 24m²).
   Mạch: logo → quảng cáo → khách bấm "Gửi tin nhắn", hỏi giá → AI gửi đúng ảnh quảng cáo + giá tham khảo → hỏi đất ở đâu, rộng bao nhiêu
   → mời khảo sát đất miễn phí, xin tên + SĐT → khách im → gắn thẻ + bám đuổi 5 tin
   → khách hẹn khảo sát đất → xin SĐT → báo Sale gọi ngay (không lên đơn tự động) → gửi Lead lên Facebook → Zalo 3 tin → tổng kết → logo.
   AI không trả lời bừa về pháp lý đất, không hứa giá trọn gói khi chưa khảo sát. Không có tin nhắc trước buổi khảo sát (Preny chưa có tính năng này).
   Tên công ty, mẫu nhà, giá, khách, SĐT, feedback: dữ liệu minh họa lấy từ bài 1 (demo/kich-ban/nha-di-dong-tc.js). Ảnh: ảnh có sẵn của bài 1. */
window.VN_KB = {
  ten: 'Nhà di động, resort video ngang',
  ketSub: 'Để AI tư vấn và lấy SĐT khách cho công ty nhà di động của bạn',
  shop: { ten: 'Nhà Di Động Thông Xanh', av: 'TX', mau: '#166534', sub: 'Thường trả lời ngay' },
  anh: {
    'cabin-chu-a': '../assets/img/u/1666934209851-aeecb19afb4a_800x800.jpg',  // cabin chữ A gỗ, bồn tắm ngoài trời
    'cabin-co': '../assets/img/u/1697462248408-25479e5acfb0_800x800.jpg',     // cabin chữ A sơn đen trên bãi cỏ
    'khu-cabin': '../assets/img/u/1759150594926-69079830088f_800x800.jpg',    // khu cabin có lối đi
    'thi-cong': '../assets/img/u/1690719095815-549c60090c9f_800x800.jpg',     // dựng khung mái
    'phong-ngu': '../assets/img/u/1773423391716-04e278b07b1b_800x800.jpg',    // phòng ngủ ốp gỗ
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= QUẢNG CÁO → MESSENGER (1 cảnh, không có bình luận, chỉ 1 mẫu cabin chữ A từ đầu tới cuối) ================= */
    { k: 'canh', nhan: 'Khách từ quảng cáo → Messenger', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'cabin-chu-a', nhan: 'MESSENGER', tieuDe: 'Cabin chữ A · Lắp 5 ngày', nut: 'Gửi tin nhắn',
        text: 'Có đất muốn làm homestay? 🏡 Cabin mái chữ A của Thông Xanh làm sẵn tại xưởng, lắp tại đất 3–5 ngày, chịu gió bão cấp 10. #cabinchua #homestay #resort',
      }, d: 1500 },
    { k: 'cap', e: 'Quảng cáo Facebook', t: 'Khách bấm "Gửi tin nhắn" từ quảng cáo', s: 'Hỏi gì, AI trả lời ngay lập tức' },
    { k: 'tap', d: 1100 },
    { k: 'ms', ref: { loai: 'ad', img: 'cabin-chu-a', dong1: 'Hùng Nguyễn đã trả lời một quảng cáo', dong2: 'Cabin chữ A · Lắp 5 ngày' }, gio: '14:47', d: 900 },
    { k: 'kh', text: 'Mẫu này giá bn 1 căn vậy em?' },
    { k: 'cap', e: 'Khách hỏi giá', t: 'AI gửi đúng ảnh trên quảng cáo kèm giá', s: 'Giá tham khảo, nói rõ phần chưa gồm' },
    { k: 'ai', text: 'Dạ chào anh Hùng, **cabin mái chữ A 24m²** giá **từ 215 triệu/căn** ạ, đã gồm nội thất cơ bản, chưa gồm móng, điện nước.' },
    { k: 'ai', img: 'cabin-chu-a' },
    { k: 'cap', e: 'Hỏi đúng nhu cầu', t: 'Hỏi đất ở đâu, rộng khoảng bao nhiêu', s: 'Giá trọn gói cần kỹ sư xem đất' },
    { k: 'ai', text: 'Đất anh ở đâu, rộng khoảng bao nhiêu ạ? Kỹ sư xem đất rồi mới báo trọn gói được.' },
    { k: 'kh', text: 'a có 1200m2 ở Ba Vì, muốn làm 5-6 căn cho thuê cuối tuần. đất nông nghiệp thì làm đc k e' },
    { k: 'cap', e: 'Mời khảo sát đất', t: 'Mời khảo sát miễn phí, xin tên và SĐT', s: 'Không trả lời bừa về pháp lý đất' },
    { k: 'ai', text: 'Dạ 1.200m² làm **5–6 căn** là vừa ạ. Đất nông nghiệp còn tùy **quy hoạch địa phương**, kỹ sư phải xem sổ mới trả lời chắc được. Anh cho em xin **tên và SĐT** để kỹ sư **khảo sát đất miễn phí** nha 😊' },

    // Khách im → màn hình phụ: gắn thẻ (hashtag quảng cáo + thẻ từ cuộc chat), bám đuổi 5 tin nuôi khách
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Preny tự gắn thẻ mẫu nhà khách quan tâm', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi 5 tin', t: '5 tin: 15 phút, rồi cách 1 ngày, 1 ngày, 1 ngày, 2 ngày', s: 'Công trình thật, feedback, kỹ sư, quy trình, khảo sát' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Anh Hùng ơi, em gửi anh vài hình **khu cabin** bên em đã bàn giao nha 🏡' },
    { k: 'ai', imgs: ['khu-cabin', 'cabin-co', 'phong-ngu'] },
    { k: 'p', a: 'r1', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '15:04', ngay: 'T5 19/11/2026', d: 700 },
    { k: 'ai', text: 'Đây là chia sẻ của một anh chủ homestay ở Sóc Sơn ạ 💬' },
    { k: 'ai', review: { av: 'MK', ten: 'Minh Khang', sub: 'đã đánh giá Nhà Di Động Thông Xanh', mau: '#22C55E',
        text: 'Mình làm 6 căn cabin chữ A trên đất 1.000m². Bên này báo giá trọn gói từ đầu, lắp xong đúng hẹn, mùa mưa vừa rồi không dột căn nào.',
        note: 'Chi phí tùy địa hình, vị trí đất' } },
    { k: 'p', a: 'r2', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '15:04', ngay: 'T6 20/11/2026', d: 700 },
    { k: 'ai', img: 'thi-cong' },
    { k: 'ai', checks: { tieuDe: 'Bên em làm chắc chắn để anh yên tâm ạ:', dong: [
        '**Kỹ sư** xem sổ đất, khảo sát trước khi làm', 'Làm sẵn **tại xưởng**, chịu **gió bão cấp 10**', 'Hợp đồng **trọn gói**, ký rồi không phát sinh'] } },
    { k: 'p', a: 'r3', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '15:04', ngay: 'T7 21/11/2026', d: 700 },
    { k: 'ai', text: 'Quy trình bên em là **xem sổ đất → khảo sát → bản bố trí → báo giá trọn gói**, anh đồng ý mới làm ạ 😊' },
    { k: 'ai', img: 'cabin-co' },
    { k: 'p', a: 'r4', d: 800 },
    { k: 'time', nhan: '2 ngày sau', gio: '15:04', ngay: 'T2 23/11/2026', d: 700 },
    { k: 'ai', text: 'Thứ Bảy này kỹ sư bên em còn vài suất **khảo sát đất miễn phí**, làm từ 5 căn còn **giảm 5%**. Anh muốn em giữ một suất không ạ?' },
    { k: 'p', a: 'r5', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 5, khách hẹn khảo sát đất', s: 'AI giữ lịch, xin SĐT ngay' },
    { k: 'kh', text: 'thứ 7 a lên Ba Vì được, qua xem đất giúp a nha' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'ai', text: 'Dạ được ạ, **thứ Bảy 28/11** kỹ sư còn khung **8h** và **14h**. Anh cho em xin **tên và SĐT** để giữ lịch nha 🏡' },
    { k: 'cap', e: 'Lấy SĐT', t: 'Khách để lại tên, SĐT, giờ khảo sát', s: 'Đây là lúc AI chốt: chuyển khách cho người thật' },
    { k: 'kh', text: 'Hùng, 0983 456 789, 8h nha e' },
    { k: 'ai', text: 'Dạ em giữ lịch khảo sát **8h thứ Bảy 28/11** ở Ba Vì cho anh Hùng rồi ạ. Sale bên em sẽ gọi anh xác nhận liền nha 🏡', d: 1800 },

    // Có SĐT → màn hình phụ: báo Sale vào gọi ngay (không lên đơn tự động) → gửi Lead lên Facebook
    { k: 'cap', e: 'Báo ngay cho Sale', t: 'Có SĐT: thông báo Sale vào gọi, chăm sóc ngay', s: 'Không lên đơn tự động: người thật tư vấn, ký hợp đồng' },
    { k: 'panel', v: 'sale', d: 800 },
    { k: 'p', a: 's1', d: 700 }, { k: 'p', a: 's2', d: 500 }, { k: 'p', a: 's3', d: 500 }, { k: 'p', a: 's4', d: 600 },
    { k: 'p', a: 's5', d: 1600 }, { k: 'p', a: 's6', d: 2600 },
    { k: 'cap', e: 'Gửi Lead về Facebook', t: 'Khách để lại SĐT: gửi sự kiện Lead lên Facebook', s: 'Quảng cáo tìm thêm khách giống khách thật' },
    { k: 'panel', v: 'capi', d: 900 },
    { k: 'p', a: 'flow', d: 1500 }, { k: 'p', a: 'event', d: 1300 }, { k: 'p', a: 'ok', d: 3200 },
    { k: 'panel', v: null, d: 600 },

    // Sau khảo sát qua Zalo: 3 tin (hỏi thăm + bước tiếp theo, mời tham quan khu cabin, ưu đãi giới thiệu sau bàn giao)
    { k: 'cap', e: 'Chăm sóc qua Zalo', t: 'Sau buổi khảo sát: hỏi thăm, báo bước tiếp', s: 'Tin gửi qua Zalo OA của công ty' },
    { k: 'zalo', gio: '18:30', ngay: 'T7 28/11/2026', chip: 'Sau buổi khảo sát đất', d: 1500 },
    { k: 'zns', zns: { img: 'khu-cabin', sao: false, tieuDe: 'Anh Hùng ơi, buổi khảo sát sáng nay anh thấy ổn không ạ?',
        noiDung: 'Thông Xanh gửi anh các bước tiếp theo nha:',
        dong: ['Kỹ sư gửi **bản bố trí 5 căn** trong 2 ngày', 'Báo giá **trọn gói** gồm móng, điện nước', 'Anh gửi ảnh **sổ đất** để kỹ sư xem thủ tục'],
        nut: 'Nhắn cho kỹ sư' }, d: 5000 },
    { k: 'cap', e: 'Mời bước tiếp theo', t: 'Có bản bố trí: mời khách xem khu mẫu', s: 'Xem nhà thật rồi mới quyết định' },
    { k: 'zstamp', gio: '10:00', ngay: 'T2 30/11/2026', chip: '2 ngày sau', d: 800 },
    { k: 'zns', zns: { img: 'cabin-co', sao: false, tieuDe: 'Bản bố trí 5 căn cho đất Ba Vì đã xong ạ',
        noiDung: 'Kỹ sư đã gửi bản bố trí và báo giá trọn gói. Anh bấm đặt lịch, em mời anh **tham quan khu cabin** đã bàn giao nha 🏡',
        nut: 'Đặt lịch tham quan' }, d: 4400 },
    { k: 'cap', e: 'Ưu đãi khách quen', t: 'Sau bàn giao: mời giới thiệu bạn bè', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'T7 30/01/2027', chip: 'Sau khi bàn giao nhà', d: 800 },
    { k: 'zns', zns: { banner: ['cabin-co', 'khu-cabin', 'phong-ngu', 'cabin-chu-a'], nhan: 'ƯU ĐÃI GIỚI THIỆU · 10 TRIỆU', mau: '#16A34A',
        tieuDe: 'Ưu đãi giới thiệu cho anh Hùng',
        noiDung: 'Anh giới thiệu bạn bè làm **cabin chữ A**, mỗi hợp đồng anh được tặng **10.000.000đ**, mã **THONGXANH10**. Áp dụng đến hết 30/06/2027.',
        nut: 'Gửi cho bạn bè' }, d: 4800 },

    { k: 'tongket', d: 8500 },
    { k: 'outro', d: 5200 },
  ],
  // Slide tổng kết cuối video: theo deck.chotLai của bài 1; cột 3 là "Bám đuổi" (5 tin trong 7 ngày)
  tongKet: { tieuDe: 'Quy trình Preny AI giúp', em: 'tăng tỷ lệ chốt hợp đồng', cot: [
    { ten: 'Khách hàng', icon: 'users', dong: ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến'] },
    { ten: 'AI Chatbot', icon: 'bot', dong: ['Phản hồi nhanh tức thì', 'Tư vấn mẫu nhà, số căn theo đất', 'Xử lý băn khoăn: pháp lý, phát sinh', 'Lấy SĐT khách'] },
    { ten: 'Bám đuổi', icon: 'heart', dong: ['Gửi 5 tin nhắn trong 7 ngày: video công trình đã bàn giao, bản bố trí, ưu đãi'] },
    { ten: 'Khảo sát', icon: 'calendar', dong: ['Hẹn khảo sát đất, xem khu mẫu', 'Sale chốt hợp đồng thi công'] },
    { ten: 'Mua lại', icon: 'refresh', dong: ['Mời khách cũ làm thêm căn, giới thiệu khách qua FB và Zalo'] },
  ] },
  panels: {
    tag: { av: 'VH', ten: 'Nguyễn Văn Hùng', sub: 'Messenger · từ quảng cáo Cabin chữ A',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#cabinchua', 'qt hot'], ['#homestay', 'qt hot'], ['#resort', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#Homestay_5Can', 'qt']]]],
      im: 'Khách im từ 14:49, chưa để lại SĐT',
      rule: { lb: 'Bám đuổi theo thẻ #cabinchua', tieuDe: 'Bám đuổi bằng 5 tin ngắn',
              dong: [['15 phút', 'Ảnh khu cabin đã bàn giao'], ['1 ngày', 'Feedback chủ homestay 6 căn'], ['1 ngày', 'Kỹ sư, chịu bão, hợp đồng trọn gói'],
                     ['1 ngày', 'Quy trình: xem sổ đất, khảo sát trước'], ['2 ngày', 'Mời giữ suất khảo sát đất miễn phí']] },
      reply: 'Khách hẹn khảo sát đất thứ Bảy · dừng bám đuổi' },
    sale: { nguon: 'Quảng cáo Cabin chữ A → Messenger', ten: 'Nguyễn Văn Hùng', sdt: '0983 456 789',
      nhuCau: '1.200m² đất nông nghiệp ở Ba Vì, làm 5–6 căn cho thuê', lich: 'Khảo sát đất miễn phí · 8:00 Thứ Bảy 28/11',
      the: [['#cabinchua', 'qt'], ['#Homestay_5Can', 'qt'], ['Đã cho SĐT', 'ok']],
      sale: { av: 'T', ten: 'Sale Tuấn', sub: 'Đang trực · nhận khách tự động' }, ok: 'Sale Tuấn đã nhận khách, gọi tư vấn ngay' },
    capi: { tieuDe: 'Gửi khách tiềm năng cho Facebook', event: 'Lead', nhan: 'SỰ KIỆN KHÁCH TIỀM NĂNG', giaTri: 'Có SĐT', pk: 'Lead · khách để lại SĐT',
      dong: [['Khách', 'Nguyễn Văn Hùng · đã để lại SĐT'], ['Nguồn khách', 'Quảng cáo Cabin chữ A → Messenger'], ['Nhu cầu', 'Khảo sát đất, làm 5–6 căn'], ['Event ID', 'TX2811-LEAD (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện Lead', khong: 'Không gửi Purchase khi khách chưa ký hợp đồng.' },
  },
};
