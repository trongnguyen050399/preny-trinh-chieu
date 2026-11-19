/* Kịch bản video demo NGANG 16:9: SALON TÓC (nhóm cân nhắc nhiều), làm 19/11/2026 theo người dùng: "làm thêm ngành salon tóc".
   Mạch cnn người dùng chốt 18/11/2026 (mẫu thẩm mỹ viện): 1 cảnh, KHÔNG có bình luận, chỉ 1 dịch vụ (uốn setting Hàn Quốc)
   từ đầu tới cuối, không có đoạn khách chụp sản phẩm khác hỏi "Này thì sao".
   Mạch: logo → quảng cáo uốn setting → khách bấm "Gửi tin nhắn", hỏi giá → AI gửi đúng ảnh quảng cáo + giá tham khảo
   → hỏi độ dài, tóc đã tẩy nhuộm chưa → tóc qua vai, tẩy nhuộm 2 lần, khô, sợ hư tóc, so tiệm gần nhà 500k → AI không hứa bừa,
   không chê tiệm khác, mời soi tóc miễn phí, xin tên + SĐT → khách im → gắn thẻ + bám đuổi 5 tin
   → khách hẹn soi tóc → xin SĐT → báo lễ tân gọi ngay → gửi Lead lên Facebook → Zalo 3 tin → tổng kết → logo.
   Không lên đơn tự động: khách soi tóc tại salon rồi stylist mới báo giá chốt. Không có tin nhắc trước giờ hẹn
   (Preny chưa có tính năng này).
   Nội dung lấy từ bài 1 (demo/kich-ban/salon-toc-tc.js): salon, giá, khách, SĐT, feedback, ưu đãi là dữ liệu minh họa.
   Ảnh: Unsplash có sẵn trong máy (ảnh thật, không phải salon của khách). Không dùng ảnh chứng chỉ giả:
   tin "stylist" là ảnh stylist đang làm tóc + thẻ liệt kê. */
window.VN_KB = {
  ten: 'Salon tóc video ngang',
  ketSub: 'Để AI tư vấn và giữ lịch làm tóc cho salon của bạn',
  shop: { ten: 'Mộc Lan Hair Salon', av: 'ML', mau: '#BE185D', sub: 'Thường trả lời ngay' },
  anh: {
    'uon-song': '../assets/img/u/1596911647169-7085321c81b8_800x800.jpg',     // tóc đen uốn sóng (ảnh quảng cáo)
    'salon': '../assets/img/u/1633681926022-84c23e8cb2d6_800x800.jpg',        // salon hiện đại
    'goi-dau': '../assets/img/u/1634449571010-02389ed0f9b0_800x800.jpg',      // gội đầu ở bồn gội
    'uon-lo': '../assets/img/u/1582095133179-bfd08e2fc6b3_800x800.jpg',       // quấn lô uốn tóc
    'stylist': '../assets/img/u/1774660810725-fb04e002003d_800x800.jpg',      // stylist làm tóc cho khách
    'salon-sang': '../assets/img/u/1695527081848-1e46c06e6458_800x800.jpg',   // salon sáng, stylist và khách
    'dau-goi': '../assets/img/u/1760895535234-2c39c57cf187_800x800.jpg',      // dầu gội, dầu xả, serum
    'uon-nau': '../assets/img/u/1560869713-bf165a9cfac1_800x800.jpg',         // tóc nâu uốn lọn
    'toc-song-nau': '../assets/img/u/1585267676185-f4aa56ddbce4_800x800.jpg', // cô gái tóc uốn sóng
    'uon-may': '../assets/img/u/1629397685944-7073f5589754_800x800.jpg',      // uốn lọn bằng máy
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= QUẢNG CÁO → MESSENGER (1 cảnh, không có bình luận, chỉ uốn setting Hàn Quốc) ================= */
    { k: 'canh', nhan: 'Khách từ quảng cáo → Messenger', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'uon-song', nhan: 'MESSENGER', tieuDe: 'Uốn setting Hàn Quốc · Soi tóc miễn phí', nut: 'Gửi tin nhắn',
        text: 'Muốn uốn mà sợ tóc đã tẩy bị hư? 💇‍♀️ Uốn setting Hàn Quốc tại Mộc Lan Hair Salon đã gồm hấp phục hồi, stylist soi tóc, test độ đàn hồi miễn phí trước khi làm. #uontoc #uonsetting #soitocmienphi',
      }, d: 1500 },
    { k: 'cap', e: 'Quảng cáo Facebook', t: 'Khách bấm "Gửi tin nhắn" từ quảng cáo', s: 'Hỏi gì, AI trả lời ngay lập tức' },
    { k: 'tap', d: 1100 },
    { k: 'ms', ref: { loai: 'ad', img: 'uon-song', dong1: 'Thảo Nguyễn đã trả lời một quảng cáo', dong2: 'Uốn setting Hàn Quốc · Soi tóc miễn phí' }, gio: '14:47', d: 900 },
    { k: 'kh', text: 'Uốn setting như hình giá bao nhiêu vậy em?' },
    { k: 'cap', e: 'Khách hỏi giá', t: 'AI gửi đúng ảnh trên quảng cáo kèm giá', s: 'Giá tham khảo, soi tóc rồi mới báo giá chốt' },
    { k: 'ai', text: 'Dạ chào chị Thảo, uốn setting Hàn Quốc bên em giá **từ 1.290.000đ**, đã gồm **hấp phục hồi** ạ.' },
    { k: 'ai', img: 'uon-song' },
    { k: 'cap', e: 'Hỏi đúng tình trạng', t: 'Hỏi độ dài, tóc đã tẩy nhuộm chưa', s: 'Tóc khác nhau thì cách uốn khác nhau' },
    { k: 'ai', text: 'Tóc chị đang dài tới đâu, đã **tẩy hay nhuộm** chưa ạ? Em xem để báo đúng giá cho chị.' },
    { k: 'kh', text: 'tóc c dài qua vai, tẩy nhuộm 2 lần rồi, hơi khô. uốn có hư ko e? tiệm gần nhà uốn có 500k thôi' },
    { k: 'cap', e: 'Mời soi tóc', t: 'Không hứa bừa, mời tới salon soi tóc', s: 'Không chê tiệm khác, xin SĐT để giữ lịch' },
    { k: 'ai', text: 'Dạ tóc đã tẩy thì em **không dám hứa uốn ngay** ạ. Stylist cần **soi tóc, test độ đàn hồi** trước, tóc yếu thì phục hồi 1 buổi rồi mới uốn cho sóng bền.' },
    { k: 'ai', text: 'Giá tiệm khác em không dám nói, mỗi nơi khác nhau ở **thuốc uốn và phục hồi** đi kèm ạ. Chị ghé **soi tóc miễn phí 15 phút** nha, chưa cần làm gì. Chị cho em xin **tên và SĐT** để giữ lịch stylist ạ ✨' },

    // Khách im → màn hình phụ: gắn thẻ (hashtag quảng cáo + thẻ từ cuộc chat), bám đuổi 5 tin
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Preny tự gắn thẻ dịch vụ khách quan tâm', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi 5 tin', t: '5 tin: 15 phút, rồi cách 1 ngày, 1 ngày, 1 ngày, 2 ngày', s: 'Không gian, feedback, stylist, quy trình, giữ lịch' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Chị Thảo ơi, em gửi chị vài hình **không gian salon** bên em nha ✨' },
    { k: 'ai', imgs: ['salon', 'goi-dau', 'uon-lo'] },
    { k: 'p', a: 'r1', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '15:04', ngay: 'T5 19/11/2026', d: 700 },
    { k: 'ai', text: 'Đây là chia sẻ của một chị khách tóc đã tẩy bên em ạ 💬' },
    { k: 'ai', review: { av: 'NH', ten: 'Ngọc Hân', sub: 'đã đánh giá Mộc Lan Hair Salon', mau: '#F59E0B',
        text: 'Tóc mình tẩy 2 lần, khô lắm. Stylist soi tóc xong khuyên phục hồi 1 buổi rồi mới uốn, 2 tháng rồi sóng vẫn mềm, không bị xơ.',
        note: 'Kết quả tùy tình trạng tóc của từng người' } },
    { k: 'p', a: 'r2', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '15:04', ngay: 'T6 20/11/2026', d: 700 },
    { k: 'ai', img: 'stylist' },
    { k: 'ai', checks: { tieuDe: 'Bên em làm vậy để chị yên tâm ạ:', dong: [
        '**Stylist trên 5 năm**, chuyên uốn tóc đã tẩy', 'Thuốc uốn, phục hồi **chính hãng**, mở hộp trước mặt khách', '**Báo giá chốt** trước khi làm, không phát sinh'] } },
    { k: 'p', a: 'r3', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '15:04', ngay: 'T7 21/11/2026', d: 700 },
    { k: 'ai', text: 'Quy trình bên em là **soi tóc → phục hồi → uốn → hấp dưỡng**, chị ưng mới làm, không ép ạ 😊' },
    { k: 'ai', img: 'salon-sang' },
    { k: 'p', a: 'r4', d: 800 },
    { k: 'time', nhan: '2 ngày sau', gio: '15:04', ngay: 'T2 23/11/2026', d: 700 },
    { k: 'ai', text: 'Thứ Bảy này stylist Minh còn vài khung giờ, chị muốn em giữ một giờ soi tóc cho chị không ạ?' },
    { k: 'p', a: 'r5', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 5, khách hẹn tới soi tóc', s: 'AI giữ lịch, xin SĐT ngay' },
    { k: 'kh', text: 'Sáng t7 này c rảnh, giữ giúp c 1 giờ nha' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'ai', text: 'Dạ được ạ, **thứ Bảy 28/11** còn khung **9h** và **10h30**. Chị cho em xin **tên và SĐT** để giữ lịch nha ✨' },
    { k: 'cap', e: 'Lấy SĐT', t: 'Khách để lại tên, SĐT, giờ hẹn', s: 'Đây là lúc AI chốt: chuyển khách cho người thật' },
    { k: 'kh', text: 'Thảo, 0938 452 716, 9h nha e' },
    { k: 'ai', text: 'Dạ em giữ lịch **9h thứ Bảy 28/11** với stylist Minh cho chị Thảo rồi ạ. Chị Vy lễ tân sẽ gọi chị xác nhận liền nha ✨', d: 1800 },

    // Có SĐT → màn hình phụ: báo lễ tân gọi ngay (không lên đơn tự động) → gửi Lead lên Facebook
    { k: 'cap', e: 'Báo ngay cho lễ tân', t: 'Có SĐT: báo lễ tân salon gọi ngay', s: 'Không lên đơn tự động: soi tóc rồi mới báo giá chốt' },
    { k: 'panel', v: 'sale', d: 800 },
    { k: 'p', a: 's1', d: 700 }, { k: 'p', a: 's2', d: 500 }, { k: 'p', a: 's3', d: 500 }, { k: 'p', a: 's4', d: 600 },
    { k: 'p', a: 's5', d: 1600 }, { k: 'p', a: 's6', d: 2600 },
    { k: 'cap', e: 'Gửi Lead về Facebook', t: 'Khách để lại SĐT: gửi sự kiện Lead lên Facebook', s: 'Quảng cáo tìm thêm khách giống khách thật' },
    { k: 'panel', v: 'capi', d: 900 },
    { k: 'p', a: 'flow', d: 1500 }, { k: 'p', a: 'event', d: 1300 }, { k: 'p', a: 'ok', d: 3200 },
    { k: 'panel', v: null, d: 600 },

    // Sau khi uốn, qua Zalo: 3 tin (hỏi thăm + cách giữ sóng; mời hấp phục hồi duy trì; ưu đãi phục hồi cho khách quen)
    { k: 'cap', e: 'Chăm sóc sau khi làm tóc', t: 'Tối hôm uốn: hỏi thăm, dặn cách giữ sóng', s: 'Tin sau bán gửi qua Zalo OA của salon' },
    { k: 'zalo', gio: '19:30', ngay: 'T7 28/11/2026', chip: 'Sau khi uốn tóc', d: 1500 },
    { k: 'zns', zns: { img: 'uon-nau', sao: false, tieuDe: 'Chị Thảo ơi, tóc uốn mới thấy sao rồi ạ?',
        noiDung: 'Mộc Lan gửi chị mấy lưu ý để sóng bền nha:',
        dong: ['**48 giờ đầu** chưa gội, chưa buộc chặt', 'Gội bằng dầu gội **không sulfate**', 'Sấy **gió mát**, vò nhẹ lọn bằng tay'],
        nut: 'Nhắn stylist' }, d: 5000 },
    { k: 'cap', e: 'Mời hấp phục hồi', t: 'Uốn được 4 tuần: mời hấp phục hồi duy trì', s: 'Khách tự chọn ngày đặt lịch' },
    { k: 'zstamp', gio: '10:00', ngay: 'T7 26/12/2026', chip: '4 tuần sau', d: 800 },
    { k: 'zns', zns: { img: 'goi-dau', sao: false, tieuDe: 'Tới lịch hấp phục hồi cho tóc uốn của chị ạ',
        noiDung: 'Tóc uốn được 4 tuần, chị ghé **hấp phục hồi** cho sóng mềm, đỡ khô ngọn nha. Chị bấm chọn ngày, em xếp lịch với stylist Minh ✨',
        nut: 'Đặt lịch hấp' }, d: 4400 },
    { k: 'cap', e: 'Ưu đãi khách quen', t: 'Gửi ưu đãi phục hồi đúng tóc khách', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'T7 09/01/2027', chip: 'Ưu đãi khách quen', d: 800 },
    { k: 'zns', zns: { banner: ['toc-song-nau', 'uon-may', 'salon', 'dau-goi'], nhan: 'ƯU ĐÃI KHÁCH QUEN · GIẢM 20%', mau: '#BE185D',
        tieuDe: 'Phục hồi chuyên sâu cho tóc uốn',
        noiDung: 'Khách quen giảm **20%** gói phục hồi chuyên sâu, giữ sóng uốn mềm lâu hơn. Mã **MOCLAN20**, dùng đến hết 31/01/2027.',
        nut: 'Xem ưu đãi' }, d: 4800 },

    { k: 'tongket', d: 8500 },
    { k: 'outro', d: 5200 },
  ],
  // Slide tổng kết cuối video: lấy từ deck.chotLai của bài 1, theo mẫu thẩm mỹ viện (cột 3 là "Bám đuổi", 5 tin trong 7 ngày)
  tongKet: { tieuDe: 'Quy trình Preny AI giúp', em: 'tăng tỷ lệ chốt lịch làm tóc', cot: [
    { ten: 'Khách hàng', icon: 'users', dong: ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến'] },
    { ten: 'AI Chatbot', icon: 'bot', dong: ['Phản hồi nhanh tức thì', 'Hỏi đúng tình trạng tóc', 'Không hứa bừa', 'Lấy SĐT, giữ lịch stylist'] },
    { ten: 'Bám đuổi', icon: 'heart', dong: ['Gửi 5 tin nhắn trong 7 ngày: không gian salon, khách thật, stylist, quy trình'] },
    { ten: 'Giữ lịch', icon: 'calendar', dong: ['Khách soi tóc miễn phí', 'Stylist báo giá chốt, làm tóc'] },
    { ten: 'Mua lại', icon: 'refresh', dong: ['Mời hấp phục hồi duy trì, gửi ưu đãi, màu nhuộm mới qua FB và Zalo'] },
  ] },
  panels: {
    tag: { av: 'PT', ten: 'Nguyễn Phương Thảo', sub: 'Messenger · từ quảng cáo Uốn setting Hàn Quốc',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#uonsetting', 'qt hot'], ['#uontoc', 'qt hot'], ['#soitocmienphi', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#TocDaTay', 'qt']]]],
      im: 'Khách im từ 14:49, chưa để lại SĐT',
      rule: { lb: 'Bám đuổi theo thẻ #uonsetting', tieuDe: 'Bám đuổi bằng 5 tin ngắn',
              dong: [['15 phút', 'Ảnh không gian salon, khu gội'], ['1 ngày', 'Feedback khách tóc đã tẩy'], ['1 ngày', 'Stylist lâu năm, thuốc chính hãng'],
                     ['1 ngày', 'Quy trình: soi tóc, phục hồi, uốn'], ['2 ngày', 'Mời giữ lịch soi tóc thứ Bảy']] },
      reply: 'Khách giữ lịch soi tóc thứ Bảy · dừng bám đuổi' },
    sale: { tieuDe: 'Báo khách mới cho lễ tân', ntTieuDe: 'Khách mới vừa để lại SĐT', khNhan: 'Khách hàng · Số điện thoại', lichNhan: 'Lịch soi tóc',
      nguon: 'Quảng cáo Uốn setting Hàn Quốc → Messenger', ten: 'Nguyễn Phương Thảo', sdt: '0938 452 716',
      nhuCau: 'Tóc qua vai, đã tẩy nhuộm 2 lần, hơi khô, muốn uốn setting, sợ hư tóc', lich: 'Stylist Minh · 9:00 Thứ Bảy 28/11',
      the: [['#uonsetting', 'qt'], ['#TocDaTay', 'qt'], ['Đã cho SĐT', 'ok']],
      sale: { av: 'VY', ten: 'Chị Vy · Lễ tân salon', sub: 'Đang trực · nhận khách tự động' }, ok: 'Chị Vy đã nhận khách, gọi xác nhận ngay' },
    capi: { tieuDe: 'Gửi khách tiềm năng cho Facebook', event: 'Lead', nhan: 'SỰ KIỆN KHÁCH TIỀM NĂNG', giaTri: 'Có SĐT', pk: 'Lead · khách để lại SĐT',
      dong: [['Khách', 'Nguyễn Phương Thảo · đã để lại SĐT'], ['Nguồn khách', 'Quảng cáo Uốn setting Hàn Quốc → Messenger'], ['Nhu cầu', 'Soi tóc, uốn setting cho tóc đã tẩy'], ['Event ID', 'ML2311-LEAD (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện Lead', khong: 'Không gửi Purchase khi khách chưa làm tóc.' },
  },
};
