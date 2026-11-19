/* Kịch bản video demo NGANG 16:9: Y TẾ, PHÒNG KHÁM (phòng khám đa khoa có nội soi, xét nghiệm, siêu âm), nhóm cân nhắc nhiều.
   Viết lại 18/11/2026 theo mạch cnn người dùng chốt (mẫu thẩm mỹ viện): 1 cảnh, KHÔNG có bình luận, chỉ 1 gói khám tiêu hóa
   từ đầu tới cuối, không có đoạn khách chụp gói khác hỏi "Này thì sao".
   Mạch: logo → quảng cáo khám tiêu hóa → khách bấm "Gửi tin nhắn", hỏi giá → AI gửi đúng ảnh quảng cáo + giá tham khảo
   → hỏi khó chịu ở đâu, bị bao lâu → khách đau thượng vị, sợ nội soi đau → mời bác sĩ khám trực tiếp, xin tên + SĐT
   → khách im → gắn thẻ + bám đuổi 5 tin → khách giữ suất khám → xin SĐT → báo điều dưỡng gọi ngay (không lên đơn tự động)
   → gửi Lead lên Facebook → Zalo 3 tin → tổng kết → logo.
   AI không chẩn đoán, không hứa kết quả, không bảo bỏ thuốc; nội soi làm hay không do bác sĩ chỉ định (như bài 1). Feedback có ghi "Kết quả tùy …".
   Không gửi triệu chứng, thông tin sức khỏe lên Facebook. Không có tin nhắc trước giờ khám (Preny chưa có tính năng này); Zalo chỉ gửi sau buổi khám.
   Không dùng ảnh giấy phép giả: tin "giấy tờ" là ảnh bác sĩ + thẻ liệt kê.
   Tên phòng khám, gói khám, giá, khách, SĐT, feedback: dữ liệu minh họa lấy từ bài 1 (demo/kich-ban/phong-kham-tc.js). Ảnh: ảnh có sẵn của bài 1. */
window.VN_KB = {
  ten: 'Y tế, phòng khám video ngang',
  ketSub: 'Để AI tư vấn và đặt lịch khám cho phòng khám của bạn',
  shop: { ten: 'Đa Khoa Mộc Lan', av: 'ML', mau: '#0E7490', sub: 'Thường trả lời ngay' },
  anh: {
    'le-tan': '../assets/img/u/1629909614456-6b1c5c94cecc_800x800.jpg',          // sảnh chờ ghế xanh
    'bac-si': '../assets/img/u/1758273240360-76b908e7582a_800x800.jpg',          // bác sĩ tư vấn khách
    'hanh-lang': '../assets/img/u/1777269749032-d8d458ae594d_800x800.jpg',       // hành lang phòng khám
    'xet-nghiem': '../assets/img/u/1606206591513-adbfbdd7a177_800x800.jpg',      // ống xét nghiệm
    'sieu-am': '../assets/img/u/1691933880037-ce9d151ab922_800x800.jpg',         // máy siêu âm
    'kham-tong-quat': '../assets/img/u/1631815587646-b85a1bb027e1_800x800.jpg',  // đo huyết áp
    'bac-si-2': '../assets/img/u/1631217868264-e5b90bb7e133_800x800.jpg',        // bác sĩ áo blouse
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= QUẢNG CÁO → MESSENGER (1 cảnh, không có bình luận, chỉ gói khám tiêu hóa) ================= */
    { k: 'canh', nhan: 'Khách từ quảng cáo → Messenger', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'bac-si', nhan: 'MESSENGER', tieuDe: 'Khám tiêu hóa · Nội soi gây mê', nut: 'Gửi tin nhắn',
        text: 'Khám tiêu hóa với bác sĩ chuyên khoa tại Đa Khoa Mộc Lan 🩺 Nội soi dạ dày gây mê không đau khi bác sĩ chỉ định. #khamtieuhoa #noisoidaday #gayme',
      }, d: 1500 },
    { k: 'cap', e: 'Quảng cáo Facebook', t: 'Khách bấm "Gửi tin nhắn" từ quảng cáo', s: 'Hỏi gì, AI trả lời ngay lập tức' },
    { k: 'tap', d: 1100 },
    { k: 'ms', ref: { loai: 'ad', img: 'bac-si', dong1: 'Thanh Mai đã trả lời một quảng cáo', dong2: 'Khám tiêu hóa · Nội soi gây mê' }, gio: '14:47', d: 900 },
    { k: 'kh', text: 'Gói khám tiêu hóa giá bao nhiêu vậy em?' },
    { k: 'cap', e: 'Khách hỏi giá', t: 'AI gửi đúng ảnh trên quảng cáo kèm giá', s: 'Giá tham khảo, nói rõ bác sĩ chỉ định' },
    { k: 'ai', text: 'Dạ chào chị Mai, gói khám tiêu hóa có nội soi gây mê giá tham khảo **1.850.000đ** ạ, nội soi hay không do **bác sĩ chỉ định**.' },
    { k: 'ai', img: 'bac-si' },
    { k: 'cap', e: 'Hỏi đúng tình trạng', t: 'Hỏi khó chịu ở đâu, bị bao lâu', s: 'Không đoán bệnh qua tin nhắn' },
    { k: 'ai', text: 'Chị đang khó chịu ở đâu, bị lâu chưa ạ? Em xếp đúng bác sĩ tiêu hóa cho chị.' },
    { k: 'kh', text: 'c hay đau thượng vị, ợ chua mấy tháng nay. c sợ nội soi đau lắm' },
    { k: 'cap', e: 'Mời bác sĩ khám', t: 'Mời khám trực tiếp, xin tên và SĐT', s: 'AI không chẩn đoán, không trả lời chắc thay bác sĩ' },
    { k: 'ai', text: 'Dạ đau thượng vị kéo dài thì chị nên để **bác sĩ khám trực tiếp** ạ, em không dám đoán bệnh qua tin nhắn. Nếu bác sĩ chỉ định nội soi thì có **gây mê**, chị ngủ trong lúc soi nên đỡ sợ. Chị cho em xin **tên và SĐT** để giữ lịch khám nha 💙' },

    // Khách im → màn hình phụ: gắn thẻ (hashtag quảng cáo + thẻ từ cuộc chat), bám đuổi 5 tin nuôi khách
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Preny tự gắn thẻ gói khám khách quan tâm', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi 5 tin', t: '5 tin: 15 phút, rồi cách 1 ngày, 1 ngày, 1 ngày, 2 ngày', s: 'Phòng khám, feedback, bác sĩ, quy trình, suất khám' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Chị Mai ơi, em gửi chị vài hình **phòng khám** bên em nha 💙' },
    { k: 'ai', imgs: ['le-tan', 'hanh-lang', 'sieu-am'] },
    { k: 'p', a: 'r1', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '15:04', ngay: 'T5 19/11/2026', d: 700 },
    { k: 'ai', text: 'Đây là chia sẻ của một chị khách nội soi gây mê bên em ạ 💬' },
    { k: 'ai', review: { av: 'PA', ten: 'Phương Anh', sub: 'đã đánh giá Đa Khoa Mộc Lan', mau: '#06B6D4',
        text: 'Mình sợ nội soi nên chọn gây mê. Bác sĩ khám, hỏi tiền sử kỹ rồi mới làm, ngủ một giấc dậy là xong. Chi phí báo trước, không phát sinh.',
        note: 'Kết quả tùy tình trạng sức khỏe từng người' } },
    { k: 'p', a: 'r2', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '15:04', ngay: 'T6 20/11/2026', d: 700 },
    { k: 'ai', img: 'bac-si-2' },
    { k: 'ai', checks: { tieuDe: 'Bên em có đủ giấy tờ để chị yên tâm ạ:', dong: [
        'Giấy phép hoạt động do **Sở Y tế** cấp', '**Bác sĩ chuyên khoa tiêu hóa** khám trực tiếp', '**BHYT** áp dụng theo quy định'] } },
    { k: 'p', a: 'r3', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '15:04', ngay: 'T7 21/11/2026', d: 700 },
    { k: 'ai', text: 'Quy trình bên em là **bác sĩ khám → chỉ định nếu cần → báo chi phí trước**, chị đồng ý mới làm ạ 😊' },
    { k: 'ai', img: 'kham-tong-quat' },
    { k: 'p', a: 'r4', d: 800 },
    { k: 'time', nhan: '2 ngày sau', gio: '15:04', ngay: 'T2 23/11/2026', d: 700 },
    { k: 'ai', text: 'Sáng thứ Bảy này bác sĩ tiêu hóa còn **3 suất**, chưa cần đặt cọc ạ. Chị muốn em giữ một suất không?' },
    { k: 'p', a: 'r5', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 5, khách giữ suất khám', s: 'AI giữ suất, xin SĐT ngay' },
    { k: 'kh', text: 'Thứ 7 này c qua được, giữ giúp c 1 suất sáng sớm nha' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'ai', text: 'Dạ được ạ, **thứ Bảy 28/11** còn khung **7h30** và **9h**. Chị cho em xin **tên và SĐT** để giữ lịch nha 💙' },
    { k: 'cap', e: 'Lấy SĐT', t: 'Khách để lại tên, SĐT, giờ khám', s: 'Đây là lúc AI chốt: chuyển khách cho người thật' },
    { k: 'kh', text: 'Mai, 0936 482 175, 7h30 nha e' },
    { k: 'ai', text: 'Dạ em giữ lịch **7h30 thứ Bảy 28/11** cho chị Mai rồi ạ. Điều dưỡng sẽ gọi chị xác nhận, dặn cách chuẩn bị nha 💙', d: 1800 },

    // Có SĐT → màn hình phụ: báo điều dưỡng vào gọi ngay (không lên đơn tự động) → gửi Lead lên Facebook (không kèm thông tin sức khỏe)
    { k: 'cap', e: 'Báo ngay cho điều dưỡng', t: 'Có SĐT: thông báo điều dưỡng gọi ngay', s: 'Không lên đơn tự động: bác sĩ khám rồi mới chỉ định' },
    { k: 'panel', v: 'sale', d: 800 },
    { k: 'p', a: 's1', d: 700 }, { k: 'p', a: 's2', d: 500 }, { k: 'p', a: 's3', d: 500 }, { k: 'p', a: 's4', d: 600 },
    { k: 'p', a: 's5', d: 1600 }, { k: 'p', a: 's6', d: 2600 },
    { k: 'cap', e: 'Gửi Lead về Facebook', t: 'Khách để lại SĐT: gửi sự kiện Lead lên Facebook', s: 'Không gửi triệu chứng, thông tin sức khỏe' },
    { k: 'panel', v: 'capi', d: 900 },
    { k: 'p', a: 'flow', d: 1500 }, { k: 'p', a: 'event', d: 1300 }, { k: 'p', a: 'ok', d: 3200 },
    { k: 'panel', v: null, d: 600 },

    // Sau khám qua Zalo: 3 tin (hỏi thăm + lưu ý theo chỉ định bác sĩ, mời đặt lịch tái khám, ưu đãi gói khám tiêu hóa)
    { k: 'cap', e: 'Chăm sóc qua Zalo', t: 'Sau buổi khám: hỏi thăm, dặn theo chỉ định', s: 'Tin gửi qua Zalo OA của phòng khám' },
    { k: 'zalo', gio: '19:30', ngay: 'T7 28/11/2026', chip: 'Sau buổi khám tiêu hóa', d: 1500 },
    { k: 'zns', zns: { img: 'bac-si-2', sao: false, tieuDe: 'Chị Mai ơi, sau buổi khám chị thấy trong người sao rồi ạ?',
        noiDung: 'Mộc Lan gửi chị vài lưu ý nha:',
        dong: ['Dùng thuốc, tái khám **đúng chỉ định của bác sĩ**', 'Không tự ý ngưng thuốc khi chưa hỏi bác sĩ', 'Có gì bất thường, chị nhắn ngay để bác sĩ hỗ trợ'],
        nut: 'Nhắn cho phòng khám' }, d: 5000 },
    { k: 'cap', e: 'Mời đặt lịch tái khám', t: 'Đến hạn bác sĩ hẹn: mời khách đặt lịch', s: 'Khách bấm đặt lịch, điều dưỡng giữ giờ' },
    { k: 'zstamp', gio: '09:00', ngay: 'T7 12/12/2026', chip: '2 tuần sau', d: 800 },
    { k: 'zns', zns: { img: 'le-tan', sao: false, tieuDe: 'Đã đến hạn tái khám tiêu hóa bác sĩ hẹn chị ạ',
        noiDung: 'Theo hẹn của bác sĩ, chị nên tái khám trong tuần này. Chị bấm đặt lịch, em giữ suất sáng cho chị nha 💙',
        nut: 'Đặt lịch tái khám' }, d: 4400 },
    { k: 'cap', e: 'Ưu đãi khách quen', t: 'Gửi ưu đãi khám tiêu hóa cho người nhà', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'CN 03/01/2027', chip: 'Đầu năm mới', d: 800 },
    { k: 'zns', zns: { banner: ['bac-si', 'hanh-lang', 'bac-si-2', 'sieu-am'], nhan: 'ƯU ĐÃI KHÁCH QUEN · GIẢM 15%', mau: '#0891B2',
        tieuDe: 'Ưu đãi khám tiêu hóa cho người nhà chị Mai',
        noiDung: 'Giảm **15%** gói khám tiêu hóa cho người nhà chị, mã **MOCLAN15**. Áp dụng đến hết 31/03/2027.',
        nut: 'Đặt lịch khám' }, d: 4800 },

    { k: 'tongket', d: 8500 },
    { k: 'outro', d: 5200 },
  ],
  // Slide tổng kết cuối video: theo deck.chotLai của bài 1; cột 3 là "Bám đuổi" (5 tin trong 7 ngày)
  tongKet: { tieuDe: 'Quy trình Preny AI giúp', em: 'tăng tỷ lệ chốt lịch khám', cot: [
    { ten: 'Khách hàng', icon: 'users', dong: ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến'] },
    { ten: 'AI Chatbot', icon: 'bot', dong: ['Phản hồi nhanh tức thì', 'Tư vấn gói khám, không đoán bệnh', 'Xử lý băn khoăn: sợ đau, BHYT', 'Lấy SĐT, đặt lịch khám'] },
    { ten: 'Bám đuổi', icon: 'heart', dong: ['Gửi 5 tin nhắn trong 7 ngày: bác sĩ, quy trình nội soi, phòng khám thật'] },
    { ten: 'Khám tại chỗ', icon: 'calendar', dong: ['Điều dưỡng xác nhận lịch', 'Bác sĩ khám, chỉ định điều trị'] },
    { ten: 'Tái khám', icon: 'refresh', dong: ['Mời tái khám theo chỉ định, mời khám định kỳ qua FB và Zalo'] },
  ] },
  panels: {
    tag: { av: 'TM', ten: 'Nguyễn Thanh Mai', sub: 'Messenger · từ quảng cáo Khám tiêu hóa',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#khamtieuhoa', 'qt hot'], ['#noisoidaday', 'qt hot'], ['#gayme', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#DauThuongVi', 'qt']]]],
      im: 'Khách im từ 14:49, chưa để lại SĐT',
      rule: { lb: 'Bám đuổi theo thẻ #noisoidaday', tieuDe: 'Bám đuổi bằng 5 tin ngắn',
              dong: [['15 phút', 'Ảnh phòng khám thật'], ['1 ngày', 'Chia sẻ của khách nội soi gây mê'], ['1 ngày', 'Bác sĩ chuyên khoa, giấy phép, BHYT'],
                     ['1 ngày', 'Quy trình: khám trước, báo chi phí trước'], ['2 ngày', 'Mời giữ suất khám sáng thứ Bảy']] },
      reply: 'Khách giữ suất khám thứ Bảy · dừng bám đuổi' },
    sale: { tieuDe: 'Báo khách mới cho điều dưỡng', nguon: 'Quảng cáo Khám tiêu hóa → Messenger', ten: 'Nguyễn Thanh Mai', sdt: '0936 482 175',
      nhuCau: 'Đau thượng vị, ợ chua mấy tháng, sợ nội soi đau', lich: 'Khám tiêu hóa · 7:30 Thứ Bảy 28/11',
      the: [['#noisoidaday', 'qt'], ['#DauThuongVi', 'qt'], ['Đã cho SĐT', 'ok']],
      sale: { av: 'H', ten: 'Điều dưỡng Hằng', sub: 'Đang trực · nhận khách tự động' }, ok: 'Điều dưỡng Hằng đã nhận khách, gọi ngay' },
    capi: { tieuDe: 'Gửi khách tiềm năng cho Facebook', event: 'Lead', nhan: 'SỰ KIỆN KHÁCH TIỀM NĂNG', giaTri: 'Có SĐT', pk: 'Lead · khách để lại SĐT',
      dong: [['Khách', 'Nguyễn Thanh Mai · đã để lại SĐT'], ['Nguồn khách', 'Quảng cáo Khám tiêu hóa → Messenger'], ['Sự kiện', 'Đặt lịch khám'], ['Event ID', 'ML2811-LEAD (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện Lead', khong: 'Không gửi Purchase khi khách chưa khám, không gửi thông tin sức khỏe.' },
  },
};
