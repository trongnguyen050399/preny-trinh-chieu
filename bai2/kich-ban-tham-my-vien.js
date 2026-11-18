/* Kịch bản video demo NGANG 16:9: THẨM MỸ VIỆN (nhóm cân nhắc nhiều), làm 18/11/2026 theo người dùng:
   "làm giống video thời trang (YaMe), nhắn tin tới bước chốt số điện thoại cho nhân viên. Xin được SĐT thì nhảy màn hình
   thông báo cho nhân viên sale vào gọi và chăm sóc ngay. Không có lên đơn tự động, vẫn có soft follow-up nuôi khách cách nhau
   15 phút, 30 phút, 20 tiếng (không gian thẩm mỹ viện, feedback, chứng chỉ…), vẫn có sự kiện gửi thông tin Lead lên Facebook."
   Sửa 18/11/2026: bỏ cảnh bình luận → inbox (video YaMe vẫn giữ), bỏ đoạn khách hỏi dịch vụ khác: chỉ 1 dịch vụ trị nám từ đầu tới cuối.
   Chốt 18/11/2026 (người dùng): thẩm mỹ viện KHÔNG có bình luận; khách bấm "Gửi tin nhắn" trên quảng cáo và nhắn trước. YaMe thì ngược lại.
   Mạch: logo → quảng cáo → khách hỏi giá → AI gửi đúng ảnh quảng cáo + giá → hỏi tình trạng nám → mời soi da miễn phí, xin tên + SĐT
   → khách im → gắn thẻ + bám đuổi 5 tin
   → khách hẹn soi da → xin SĐT → báo Sale gọi ngay → gửi Lead lên Facebook → logo.
   AI không chẩn đoán, không hứa kết quả khi chưa soi da. Không có tin nhắc lịch trước buổi hẹn (Preny chưa có tính năng này).
   Tên thẩm mỹ viện, giá, khách, SĐT, feedback, sale: dữ liệu minh họa. Ảnh: Unsplash (ảnh thật, không phải cơ sở của khách).
   Không dùng ảnh giấy phép, chứng chỉ giả: tin "chứng chỉ" là ảnh bác sĩ + thẻ liệt kê giấy tờ. */
window.VN_KB = {
  ten: 'Thẩm mỹ viện video ngang',
  ketSub: 'Để AI tư vấn và giúp thẩm mỹ viện bạn đặt lịch với khách',   // sửa 18/11/2026 theo người dùng
  shop: { ten: 'Thẩm Mỹ Viện Lam Khuê', av: 'LK', mau: '#9D174D', sub: 'Thường trả lời ngay' },
  anh: {
    'khong-gian': 'assets/tmv/1648775507324-b48dd3791fa5.jpg',  // sảnh trắng có cây
    'phong-cho': 'assets/tmv/1762625570087-6d98fca29531.jpg',   // phòng chờ
    'le-tan': 'assets/tmv/1764727291644-5dcb0b1a0375.jpg',      // quầy lễ tân
    'phong-dt': 'assets/tmv/1787651343620-8d5303006ecb.jpg',    // phòng điều trị
    'tri-nam': 'assets/tmv/1713085085470-fba013d67e65.jpg',     // điều trị da mặt bằng máy
    'may-laser': 'assets/tmv/1689103229376-3fbfe1257242.jpg',   // đầu máy cầm tay
    'may-soi-da': 'assets/tmv/1689103722266-1f2f837145e7.jpg',  // màn hình máy
    'cham-soc': 'assets/tmv/1552693673-1bf958298935.jpg',       // chăm sóc da, găng tay
    'tu-van': 'assets/tmv/1785861001619-b263ebd4e615.jpg',      // tư vấn khách
    'bac-si': 'assets/tmv/1706565029539-d09af5896340.jpg',      // bác sĩ áo blouse
    'da-sang': 'assets/tmv/1728727217834-b190862837a3.jpg',     // khách da sáng, cười
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= QUẢNG CÁO → MESSENGER (sửa 18/11/2026: bỏ cảnh bình luận, chỉ 1 dịch vụ trị nám từ đầu tới cuối) ================= */
    { k: 'canh', nhan: 'Khách từ quảng cáo → Messenger', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'tri-nam', nhan: 'MESSENGER', tieuDe: 'Trị nám Pico · Soi da miễn phí', nut: 'Gửi tin nhắn',
        text: 'Nám, sạm, tàn nhang lâu năm? ✨ Trị nám công nghệ Pico tại Thẩm Mỹ Viện Lam Khuê, bác sĩ da liễu soi da miễn phí trước khi làm. #trinam #pico #soidamienphi',
      }, d: 1500 },
    { k: 'cap', e: 'Quảng cáo Facebook', t: 'Khách bấm "Gửi tin nhắn" từ quảng cáo', s: 'Hỏi gì, AI trả lời ngay lập tức' },
    { k: 'tap', d: 1100 },
    { k: 'ms', ref: { loai: 'ad', img: 'tri-nam', dong1: 'Lan Anh đã trả lời một quảng cáo', dong2: 'Trị nám Pico · Soi da miễn phí' }, gio: '14:47', d: 900 },
    { k: 'kh', text: 'Trị nám giá bao nhiêu vậy em?' },
    { k: 'cap', e: 'Khách hỏi giá', t: 'AI gửi đúng ảnh trên quảng cáo kèm giá', s: 'Giá tham khảo, nói rõ cần soi da' },
    { k: 'ai', text: 'Dạ chào chị Lan Anh, trị nám Pico giá **từ 1.500.000đ/buổi** ạ, số buổi tùy tình trạng da.' },
    { k: 'ai', img: 'tri-nam' },
    { k: 'cap', e: 'Hỏi đúng tình trạng', t: 'Hỏi nám bao lâu, nám mảng hay chân sâu', s: 'Giá chính xác cần bác sĩ soi da' },
    { k: 'ai', text: 'Chị bị nám lâu chưa, nám mảng hay chân sâu ạ? Bác sĩ soi da rồi mới báo chính xác được.' },
    { k: 'kh', text: 'c bị nám 2 bên má hơn 2 năm rồi, chắc nám mảng. bôi kem hoài k đỡ' },
    { k: 'cap', e: 'Mời soi da miễn phí', t: 'Mời soi da, xin tên và SĐT', s: 'Không hứa kết quả khi chưa soi da' },
    { k: 'ai', text: 'Dạ nám mảng 2 năm vẫn cải thiện được ạ, nhưng phải soi da mới biết làm mấy buổi. Chị qua **soi da miễn phí** nha, chưa cần làm liệu trình. Chị cho em xin **tên và SĐT** để giữ lịch ạ 😊' },

    // Khách im → màn hình phụ: gắn thẻ (hashtag quảng cáo + thẻ từ cuộc chat), bám đuổi 5 tin nuôi khách
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Preny tự gắn thẻ dịch vụ khách quan tâm', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi nuôi khách', t: '5 tin: 15 phút, rồi cách 1 ngày, 1 ngày, 1 ngày, 2 ngày', s: 'Không gian, feedback, giấy tờ, quy trình, suất soi da' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Chị Lan Anh ơi, em gửi chị vài hình **không gian** bên em nha 🌿' },
    { k: 'ai', imgs: ['khong-gian', 'phong-dt', 'le-tan'] },
    { k: 'p', a: 'r1', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '15:04', ngay: 'T5 19/11/2026', d: 700 },
    { k: 'ai', text: 'Đây là chia sẻ của một chị khách nám mảng bên em ạ 💬' },
    { k: 'ai', review: { av: 'PT', ten: 'Phương Thảo', sub: 'đã đánh giá Thẩm Mỹ Viện Lam Khuê', mau: '#F472B6',
        text: 'Mình bị nám mảng 3 năm, bác sĩ soi da kỹ rồi mới lên liệu trình, không ép mua gói. Sau 6 buổi da sáng hơn, nám mờ rõ.',
        note: 'Kết quả tùy tình trạng da từng người' } },
    { k: 'p', a: 'r2', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '15:04', ngay: 'T6 20/11/2026', d: 700 },
    { k: 'ai', img: 'bac-si' },
    { k: 'ai', checks: { tieuDe: 'Bên em có đủ giấy tờ để chị yên tâm ạ:', dong: [
        'Giấy phép hoạt động do **Sở Y tế** cấp', '**Bác sĩ da liễu** soi da và điều trị trực tiếp', 'Máy Pico chính hãng, có **CO, CQ**'] } },
    { k: 'p', a: 'r3', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '15:04', ngay: 'T7 21/11/2026', d: 700 },
    { k: 'ai', text: 'Quy trình bên em là **soi da → bác sĩ tư vấn → chị đồng ý mới làm**, không bị ép làm ngay đâu ạ 😊' },
    { k: 'ai', img: 'tu-van' },
    { k: 'p', a: 'r4', d: 800 },
    { k: 'time', nhan: '2 ngày sau', gio: '15:04', ngay: 'T2 23/11/2026', d: 700 },
    { k: 'ai', text: 'Thứ Bảy này bên em còn vài suất **soi da miễn phí** với bác sĩ, chị muốn em giữ một suất không ạ?' },
    { k: 'p', a: 'r5', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 5, khách hẹn soi da', s: 'AI giữ lịch, xin SĐT ngay' },
    { k: 'kh', text: 'Thứ 7 này c qua được, giữ giúp c 1 suất nha' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'ai', text: 'Dạ được ạ, **thứ Bảy 28/11** còn khung **9h** và **14h**. Chị cho em xin **tên và SĐT** để giữ lịch nha 🌿' },
    { k: 'cap', e: 'Lấy SĐT', t: 'Khách để lại tên, SĐT, giờ hẹn', s: 'Đây là lúc AI chốt: chuyển khách cho người thật' },
    { k: 'kh', text: 'Lan Anh, 0938 274 615, 9h nha e' },
    { k: 'ai', text: 'Dạ em giữ lịch **9h thứ Bảy 28/11** cho chị Lan Anh rồi ạ. Bạn tư vấn sẽ gọi chị xác nhận liền nha 🌿', d: 1800 },

    // Có SĐT → màn hình phụ: báo Sale vào gọi, chăm sóc ngay (không lên đơn tự động) → gửi Lead lên Facebook
    { k: 'cap', e: 'Báo ngay cho Sale', t: 'Có SĐT: thông báo Sale vào gọi, chăm sóc ngay', s: 'Không lên đơn tự động: người thật tư vấn, chốt liệu trình' },
    { k: 'panel', v: 'sale', d: 800 },
    { k: 'p', a: 's1', d: 700 }, { k: 'p', a: 's2', d: 500 }, { k: 'p', a: 's3', d: 500 }, { k: 'p', a: 's4', d: 600 },
    { k: 'p', a: 's5', d: 1600 }, { k: 'p', a: 's6', d: 2600 },
    { k: 'cap', e: 'Gửi Lead về Facebook', t: 'Khách để lại SĐT: gửi sự kiện Lead lên Facebook', s: 'Quảng cáo tìm thêm khách giống khách thật' },
    { k: 'panel', v: 'capi', d: 900 },
    { k: 'p', a: 'flow', d: 1500 }, { k: 'p', a: 'event', d: 1300 }, { k: 'p', a: 'ok', d: 3200 },
    { k: 'panel', v: null, d: 600 },


    // Sau bán qua Zalo: 3 tin (hỏi thăm + lưu ý chăm sóc da, nhắc đặt lịch buổi tiếp theo của liệu trình, ưu đãi khách quen)
    { k: 'cap', e: 'Chăm sóc sau bán qua Zalo', t: 'Sau buổi điều trị: hỏi thăm, dặn chăm sóc da', s: 'Tin sau bán gửi qua Zalo OA của thẩm mỹ viện' },
    { k: 'zalo', gio: '19:30', ngay: 'CN 29/11/2026', chip: 'Sau buổi Pico đầu tiên', d: 1500 },
    { k: 'zns', zns: { img: 'cham-soc', sao: false, tieuDe: 'Chị Lan Anh ơi, da sau buổi đầu thấy sao rồi ạ?',
        noiDung: 'Lam Khuê gửi chị vài lưu ý mấy ngày đầu nha:',
        dong: ['Thoa kem chống nắng, che chắn kỹ khi ra ngoài', 'Không chà xát, không lột da 3 ngày đầu', 'Da có gì lạ, chị nhắn ngay để bác sĩ hỗ trợ'],
        nut: 'Nhắn cho bác sĩ' }, d: 5000 },
    { k: 'cap', e: 'Nhắc buổi tiếp theo', t: 'Đến hạn buổi 2: mời khách đặt lịch', s: 'Liệu trình đều thì kết quả mới ổn định' },
    { k: 'zstamp', gio: '10:00', ngay: 'T7 26/12/2026', chip: '4 tuần sau', d: 800 },
    { k: 'zns', zns: { img: 'tri-nam', sao: false, tieuDe: 'Đã đến hạn buổi Pico thứ 2 của chị ạ',
        noiDung: 'Theo liệu trình bác sĩ lên, chị nên làm buổi 2 trong tuần này. Chị bấm đặt lịch, em giữ giờ đẹp cho chị nha 🌿',
        nut: 'Đặt lịch buổi 2' }, d: 4400 },
    { k: 'cap', e: 'Ưu đãi khách quen', t: 'Gửi ưu đãi, mời giới thiệu bạn bè', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'CN 03/01/2027', chip: 'Đầu năm mới', d: 800 },
    { k: 'zns', zns: { banner: ['da-sang', 'khong-gian', 'tri-nam', 'tu-van'], nhan: 'ƯU ĐÃI ĐẦU NĂM · GIẢM 15%', mau: '#DB2777',
        tieuDe: 'Quà đầu năm cho khách của Lam Khuê',
        noiDung: 'Giảm **15%** các buổi trị nám tiếp theo cho khách đang điều trị. Giới thiệu bạn bè được soi da miễn phí. Áp dụng đến hết 31/01/2027.',
        nut: 'Xem ưu đãi' }, d: 4800 },

    { k: 'tongket', d: 8500 },
    { k: 'outro', d: 5200 },
  ],
  // Slide tổng kết cuối video (theo slide "Chốt lại 5 ô" nhóm cân nhắc nhiều; người dùng dặn 18/11/2026: bám đuổi = 5 tin trong 7 ngày,
  // không dùng chữ follow-up / soft follow-up)
  tongKet: { tieuDe: 'Quy trình Preny AI giúp', em: 'tăng tỷ lệ bán hàng', cot: [
    { ten: 'Khách hàng', icon: 'users', dong: ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến'] },
    { ten: 'AI Chatbot', icon: 'bot', dong: ['Phản hồi nhanh tức thì', 'Tư vấn khách', 'Kêu gọi khách tới dùng thử dịch vụ', 'Lấy số điện thoại nếu khách chưa có'] },
    { ten: 'Bám đuổi', icon: 'heart', dong: ['Gửi 5 tin nhắn trong 7 ngày: giới thiệu dịch vụ, before–after, giải thích quy trình', 'Nuôi khách để thẩm mỹ viện nằm đầu danh sách khi khách quyết định'] },
    { ten: 'Chốt lịch hẹn', icon: 'calendar', dong: ['Chốt lịch hẹn đến thẩm mỹ viện thử dịch vụ', 'Thẩm mỹ viện chốt đơn'] },
    { ten: 'Mua lại', icon: 'refresh', dong: ['Tự động gửi 1 tin nhắn mỗi tuần qua FB và Zalo'] },
  ] },
  panels: {
    tag: { av: 'LA', ten: 'Trần Lan Anh', sub: 'Messenger · từ quảng cáo Trị nám Pico',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#trinam', 'qt hot'], ['#pico', 'qt hot'], ['#soidamienphi', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#NamMang', 'qt']]]],
      im: 'Khách im từ 14:49, chưa để lại SĐT',
      rule: { lb: 'Bám đuổi theo thẻ #trinam', tieuDe: 'Nuôi khách bằng 5 tin ngắn',
              dong: [['15 phút', 'Ảnh không gian thẩm mỹ viện'], ['1 ngày', 'Feedback khách trị nám'], ['1 ngày', 'Bác sĩ, giấy phép, máy chính hãng'],
                     ['1 ngày', 'Quy trình: soi da trước, không ép làm'], ['2 ngày', 'Mời giữ suất soi da miễn phí']] },
      reply: 'Khách giữ suất soi da thứ Bảy · dừng bám đuổi' },
    sale: { nguon: 'Quảng cáo Trị nám Pico → Messenger', ten: 'Trần Lan Anh', sdt: '0938 274 615',
      nhuCau: 'Nám mảng 2 bên má hơn 2 năm, bôi kem không đỡ', lich: 'Soi da miễn phí · 9:00 Thứ Bảy 28/11',
      the: [['#trinam', 'qt'], ['#NamMang', 'qt'], ['Đã cho SĐT', 'ok']],
      sale: { av: 'HM', ten: 'Sale Hồng Mai', sub: 'Đang trực · nhận khách tự động' }, ok: 'Sale Hồng Mai đã nhận khách, gọi tư vấn ngay' },
    capi: { tieuDe: 'Gửi khách tiềm năng cho Facebook', event: 'Lead', nhan: 'SỰ KIỆN KHÁCH TIỀM NĂNG', giaTri: 'Có SĐT', pk: 'Lead · khách để lại SĐT',
      dong: [['Khách', 'Trần Lan Anh · đã để lại SĐT'], ['Nguồn khách', 'Quảng cáo Trị nám Pico → Messenger'], ['Nhu cầu', 'Soi da, trị nám'], ['Event ID', 'LK1911-LEAD (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện Lead', khong: 'Không gửi Purchase khi khách chưa làm dịch vụ.' },
  },
};
