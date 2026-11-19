/* Kịch bản video demo NGANG 16:9: DÀN ÂM THANH (nhóm cân nhắc nhiều), làm 19/11/2026 theo người dùng:
   "dàn âm thanh (cân nhắc nhiều, mời khách tới cửa hàng trải nghiệm để chốt sale)".
   Mạch cnn người dùng chốt 18/11/2026 (mẫu thẩm mỹ viện): 1 cảnh, KHÔNG có bình luận, chỉ 1 sản phẩm (combo dàn karaoke gia đình)
   từ đầu tới cuối, không có đoạn khách chụp sản phẩm khác hỏi "Này thì sao".
   Mạch: logo → quảng cáo combo karaoke → khách bấm "Gửi tin nhắn", hỏi giá → AI gửi đúng ảnh quảng cáo + giá tham khảo
   → hỏi diện tích phòng → phòng khách chung cư 25m², sợ ồn hàng xóm, so bộ 15 triệu trên mạng → AI chọn loa theo phòng,
   không chê bên khác, mời mang USB nhạc tới phòng nghe thử, xin tên + SĐT → khách im → gắn thẻ + bám đuổi 5 tin
   → khách hẹn nghe thử → xin SĐT → báo nhân viên showroom gọi ngay → gửi Lead lên Facebook → Zalo 3 tin → tổng kết → logo.
   Không lên đơn tự động: khách nghe thử tại showroom rồi nhân viên mới chốt dàn. Không có tin nhắc trước giờ hẹn
   (Preny chưa có tính năng này).
   Nội dung lấy từ bài 1 (demo/kich-ban/dan-am-thanh-tc.js): showroom, giá, khách, SĐT, feedback, ưu đãi là dữ liệu minh họa.
   Ảnh: Unsplash có sẵn trong máy (ảnh thật, không phải showroom của khách). Không dùng ảnh giấy tờ giả:
   tin "giấy tờ" là ảnh hàng trưng bày + thẻ liệt kê. */
window.VN_KB = {
  ten: 'Dàn âm thanh video ngang',
  ketSub: 'Để AI tư vấn và mời khách tới showroom của bạn nghe thử',
  shop: { ten: 'Âm Thanh An Phúc', av: 'AP', mau: '#B45309', sub: 'Thường trả lời ngay' },
  anh: {
    'loa-cot': '../assets/img/u/1595432541891-a461100d3054_800x800.jpg',     // cặp loa cột đứng
    'phong-nghe': '../assets/img/u/1609263842618-006cd27e5431_800x800.jpg',  // phòng nghe thử, 2 loa, amply
    'cua-hang': '../assets/img/u/1776083760846-e7faea00a6e2_800x800.jpg',    // cửa hàng nhiều loa
    'amply': '../assets/img/u/1574199960812-3bb320659f3f_800x800.jpg',       // amply, núm vặn
    'loa-chong': '../assets/img/u/1724858103797-6d388eb1006a_800x800.jpg',   // loa xếp chồng
    'phong-khach': '../assets/img/u/1770513649169-d69855f991a0_800x800.jpg', // phòng khách có tivi
    'micro': '../assets/img/u/1507676184212-d03ab07a01bf_800x800.jpg',       // micro
    'hat-karaoke': '../assets/img/u/1706381078164-9cd97457c582_800x800.jpg', // nhóm bạn hát karaoke
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= QUẢNG CÁO → MESSENGER (1 cảnh, không có bình luận, chỉ combo dàn karaoke gia đình) ================= */
    { k: 'canh', nhan: 'Khách từ quảng cáo → Messenger', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'loa-cot', nhan: 'MESSENGER', tieuDe: 'Dàn karaoke gia đình · Nghe thử miễn phí', nut: 'Gửi tin nhắn',
        text: 'Hát karaoke ở nhà mà tiếng rè, micro hú? 🎤 Combo dàn karaoke gia đình tại Âm Thanh An Phúc: loa, amply, micro không dây, mời anh chị tới phòng nghe thử trước khi chọn. #dankaraoke #karaokegiadinh #nghethumienphi',
      }, d: 1500 },
    { k: 'cap', e: 'Quảng cáo Facebook', t: 'Khách bấm "Gửi tin nhắn" từ quảng cáo', s: 'Hỏi gì, AI trả lời ngay lập tức' },
    { k: 'tap', d: 1100 },
    { k: 'ms', ref: { loai: 'ad', img: 'loa-cot', dong1: 'Tuấn Phạm đã trả lời một quảng cáo', dong2: 'Dàn karaoke gia đình · Nghe thử miễn phí' }, gio: '14:47', d: 900 },
    { k: 'kh', text: 'Dàn karaoke gia đình này giá bao nhiêu vậy em?' },
    { k: 'cap', e: 'Khách hỏi giá', t: 'AI gửi đúng ảnh trên quảng cáo kèm giá', s: 'Giá tham khảo, nghe thử rồi mới chọn' },
    { k: 'ai', text: 'Dạ chào anh Tuấn, combo dàn karaoke gia đình gồm **loa, amply, micro không dây** giá **từ 28.900.000đ** ạ.' },
    { k: 'ai', img: 'loa-cot' },
    { k: 'cap', e: 'Hỏi đúng nhu cầu', t: 'Hỏi phòng đặt dàn rộng bao nhiêu m²', s: 'Chọn loa theo diện tích phòng' },
    { k: 'ai', text: 'Phòng anh định đặt dàn rộng khoảng bao nhiêu m² ạ? Loa phải hợp diện tích phòng thì tiếng mới hay.' },
    { k: 'kh', text: 'phòng khách chung cư tầm 25m2, hát karaoke vs nghe nhạc, tầm 30tr. sợ ồn hàng xóm, có phải làm cách âm ko e? trên mạng có bộ 15tr thôi' },
    { k: 'cap', e: 'Mời nghe thử', t: 'Tư vấn ngắn, mời tới showroom nghe thử', s: 'Không chê bên khác, nghe tận tai mới chọn đúng' },
    { k: 'ai', text: 'Dạ phòng 25m² dùng **combo 28.900.000đ** là vừa, không cần loa to ạ. Chung cư thì **không phải cách âm cả phòng**, kỹ thuật viên chỉnh **âm lượng, bass** cho gọn tiếng là được.' },
    { k: 'ai', text: 'Bộ trên mạng em không dám nói hay dở, loa thì **nghe tận tai mới chọn đúng** ạ. Anh mang **USB nhạc quen** tới **phòng nghe thử** bên em so cả hai nha, chưa cần mua gì. Anh cho em xin **tên và SĐT** để giữ giờ ạ 🎶' },

    // Khách im → màn hình phụ: gắn thẻ (hashtag quảng cáo + thẻ từ cuộc chat), bám đuổi 5 tin
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Preny tự gắn thẻ dàn khách quan tâm', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi 5 tin', t: '5 tin: 15 phút, rồi cách 1 ngày, 1 ngày, 1 ngày, 2 ngày', s: 'Phòng nghe thử, feedback, bảo hành, quy trình, giờ nghe thử' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Anh Tuấn ơi, em gửi anh vài hình **phòng nghe thử** bên em nha 🎶' },
    { k: 'ai', imgs: ['phong-nghe', 'cua-hang', 'amply'] },
    { k: 'p', a: 'r1', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '15:04', ngay: 'T5 19/11/2026', d: 700 },
    { k: 'ai', text: 'Đây là chia sẻ của một anh khách ở chung cư bên em ạ 💬' },
    { k: 'ai', review: { av: 'QH', ten: 'Quốc Huy', sub: 'đã đánh giá Âm Thanh An Phúc', mau: '#F59E0B',
        text: 'Phòng khách nhà mình tầm 24m². Mang USB tới nghe thử 3 bộ rồi mới chọn, kỹ thuật viên lên nhà chỉnh bass gọn, hát buổi tối hàng xóm không phàn nàn.',
        note: 'Âm thanh tùy phòng và cách lắp của từng nhà' } },
    { k: 'p', a: 'r2', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '15:04', ngay: 'T6 20/11/2026', d: 700 },
    { k: 'ai', img: 'loa-chong' },
    { k: 'ai', checks: { tieuDe: 'Bên em có đủ giấy tờ để anh yên tâm ạ:', dong: [
        'Hàng chính hãng, có **CO, CQ** đầy đủ', '**Bảo hành chính hãng**, phiếu ghi rõ từng món', '**Kỹ thuật viên** lắp đặt, chỉnh âm tận nhà'] } },
    { k: 'p', a: 'r3', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '15:04', ngay: 'T7 21/11/2026', d: 700 },
    { k: 'ai', text: 'Quy trình bên em là **nghe thử → khảo sát tại nhà → lắp, chỉnh âm**, anh ưng mới mua, không ép ạ 😊' },
    { k: 'ai', img: 'phong-khach' },
    { k: 'p', a: 'r4', d: 800 },
    { k: 'time', nhan: '2 ngày sau', gio: '15:04', ngay: 'T2 23/11/2026', d: 700 },
    { k: 'ai', text: 'Thứ Bảy này phòng nghe thử còn vài khung giờ, anh muốn em giữ một giờ cho anh mang USB tới nghe không ạ?' },
    { k: 'p', a: 'r5', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 5, khách hẹn tới nghe thử', s: 'AI giữ giờ, xin SĐT ngay' },
    { k: 'kh', text: 'Sáng t7 này a qua được, giữ giúp a 1 giờ nha' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'ai', text: 'Dạ được ạ, **thứ Bảy 28/11** còn khung **9h** và **10h30**. Anh cho em xin **tên và SĐT** để giữ phòng nghe thử nha 🎶' },
    { k: 'cap', e: 'Lấy SĐT', t: 'Khách để lại tên, SĐT, giờ hẹn', s: 'Đây là lúc AI chốt: chuyển khách cho người thật' },
    { k: 'kh', text: 'Tuấn, 0903 618 275, 9h nha e' },
    { k: 'ai', text: 'Dạ em giữ phòng nghe thử **9h thứ Bảy 28/11** cho anh Tuấn rồi ạ. Anh Khánh bên showroom sẽ gọi anh xác nhận liền nha 🎶', d: 1800 },

    // Có SĐT → màn hình phụ: báo nhân viên showroom gọi ngay (không lên đơn tự động) → gửi Lead lên Facebook
    { k: 'cap', e: 'Báo ngay cho showroom', t: 'Có SĐT: báo nhân viên showroom gọi ngay', s: 'Không lên đơn tự động: khách nghe thử rồi mới chốt dàn' },
    { k: 'panel', v: 'sale', d: 800 },
    { k: 'p', a: 's1', d: 700 }, { k: 'p', a: 's2', d: 500 }, { k: 'p', a: 's3', d: 500 }, { k: 'p', a: 's4', d: 600 },
    { k: 'p', a: 's5', d: 1600 }, { k: 'p', a: 's6', d: 2600 },
    { k: 'cap', e: 'Gửi Lead về Facebook', t: 'Khách để lại SĐT: gửi sự kiện Lead lên Facebook', s: 'Quảng cáo tìm thêm khách giống khách thật' },
    { k: 'panel', v: 'capi', d: 900 },
    { k: 'p', a: 'flow', d: 1500 }, { k: 'p', a: 'event', d: 1300 }, { k: 'p', a: 'ok', d: 3200 },
    { k: 'panel', v: null, d: 600 },

    // Sau khi mua và lắp, qua Zalo: 3 tin (hỏi thăm + mẹo chỉnh micro, echo; mời kiểm tra dàn định kỳ; ưu đãi micro cho khách quen)
    { k: 'cap', e: 'Chăm sóc sau lắp qua Zalo', t: 'Sau khi lắp: hỏi thăm, dặn chỉnh micro, echo', s: 'Tin sau bán gửi qua Zalo OA của showroom' },
    { k: 'zalo', gio: '19:30', ngay: 'T5 03/12/2026', chip: 'Sau khi lắp dàn tại nhà', d: 1500 },
    { k: 'zns', zns: { img: 'micro', sao: false, tieuDe: 'Anh Tuấn ơi, dàn karaoke mới hát thấy sao rồi ạ?',
        noiDung: 'An Phúc gửi anh mấy mẹo chỉnh nhanh nha:',
        dong: ['Micro bị hú: hạ **echo**, đừng chĩa micro vào loa', 'Nghe nhạc thì tắt **echo**, hát mới bật lại', 'Hát buổi tối: giảm **bass** 1–2 nấc cho gọn tiếng'],
        nut: 'Nhắn kỹ thuật viên' }, d: 5000 },
    { k: 'cap', e: 'Mời kiểm tra định kỳ', t: 'Dùng 3 tháng: mời kỹ thuật viên kiểm tra dàn', s: 'Khách tự chọn ngày, kiểm tra miễn phí' },
    { k: 'zstamp', gio: '10:00', ngay: 'T7 06/03/2027', chip: '3 tháng sau', d: 800 },
    { k: 'zns', zns: { img: 'amply', sao: false, tieuDe: 'Đã tới hạn kiểm tra dàn miễn phí của anh ạ',
        noiDung: 'Dàn dùng 3 tháng, kỹ thuật viên ghé kiểm tra dây, chỉnh lại âm cho anh **miễn phí**. Anh bấm chọn ngày, em xếp lịch nha 🎶',
        nut: 'Đặt lịch kiểm tra' }, d: 4400 },
    { k: 'cap', e: 'Ưu đãi khách quen', t: 'Gửi ưu đãi micro hợp đúng dàn khách', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'T7 03/04/2027', chip: 'Ưu đãi khách quen', d: 800 },
    { k: 'zns', zns: { banner: ['micro', 'hat-karaoke', 'loa-cot', 'phong-nghe'], nhan: 'ƯU ĐÃI KHÁCH QUEN · GIẢM 20%', mau: '#B45309',
        tieuDe: 'Thêm micro không dây để song ca',
        noiDung: 'Micro không dây hợp đúng amply anh đang dùng, khách quen giảm **20%**, kỹ thuật viên ghé cài sẵn. Mã **ANPHUC20**, dùng đến hết 30/04/2027.',
        nut: 'Xem ưu đãi' }, d: 4800 },

    { k: 'tongket', d: 8500 },
    { k: 'outro', d: 5200 },
  ],
  // Slide tổng kết cuối video: lấy từ deck.chotLai của bài 1, theo mẫu thẩm mỹ viện (cột 3 là "Bám đuổi", 5 tin trong 7 ngày)
  tongKet: { tieuDe: 'Quy trình Preny AI giúp', em: 'tăng tỷ lệ chốt lịch nghe thử', cot: [
    { ten: 'Khách hàng', icon: 'users', dong: ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến'] },
    { ten: 'AI Chatbot', icon: 'bot', dong: ['Phản hồi nhanh tức thì', 'Tư vấn theo diện tích phòng', 'Không chê bên khác', 'Lấy SĐT, mời nghe thử'] },
    { ten: 'Bám đuổi', icon: 'heart', dong: ['Gửi 5 tin nhắn trong 7 ngày: phòng nghe thử, khách thật, bảo hành, quy trình'] },
    { ten: 'Hẹn nghe thử', icon: 'calendar', dong: ['Khách nghe bằng nhạc của mình', 'Nhân viên showroom chốt dàn'] },
    { ten: 'Mua lại', icon: 'refresh', dong: ['Mời kiểm tra dàn định kỳ, gửi ưu đãi micro, loa qua FB và Zalo'] },
  ] },
  panels: {
    tag: { av: 'MT', ten: 'Phạm Minh Tuấn', sub: 'Messenger · từ quảng cáo Dàn karaoke gia đình',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#dankaraoke', 'qt hot'], ['#karaokegiadinh', 'qt hot'], ['#nghethumienphi', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#ChungCu25m2', 'qt']]]],
      im: 'Khách im từ 14:49, chưa để lại SĐT',
      rule: { lb: 'Bám đuổi theo thẻ #dankaraoke', tieuDe: 'Bám đuổi bằng 5 tin ngắn',
              dong: [['15 phút', 'Ảnh phòng nghe thử ở showroom'], ['1 ngày', 'Feedback khách ở chung cư'], ['1 ngày', 'Hàng chính hãng, bảo hành, kỹ thuật viên'],
                     ['1 ngày', 'Quy trình: nghe thử, khảo sát, lắp'], ['2 ngày', 'Mời giữ giờ nghe thử thứ Bảy']] },
      reply: 'Khách giữ giờ nghe thử thứ Bảy · dừng bám đuổi' },
    sale: { tieuDe: 'Báo khách mới cho showroom', ntTieuDe: 'Khách mới vừa để lại SĐT', khNhan: 'Khách hàng · Số điện thoại', lichNhan: 'Lịch nghe thử',
      nguon: 'Quảng cáo Dàn karaoke gia đình → Messenger', ten: 'Phạm Minh Tuấn', sdt: '0903 618 275',
      nhuCau: 'Phòng khách chung cư 25m², karaoke + nghe nhạc, tầm 30 triệu, sợ ồn hàng xóm', lich: 'Phòng nghe thử · 9:00 Thứ Bảy 28/11',
      the: [['#dankaraoke', 'qt'], ['#ChungCu25m2', 'qt'], ['Đã cho SĐT', 'ok']],
      sale: { av: 'KH', ten: 'Anh Khánh · Showroom', sub: 'Đang trực · nhận khách tự động' }, ok: 'Anh Khánh đã nhận khách, gọi xác nhận ngay' },
    capi: { tieuDe: 'Gửi khách tiềm năng cho Facebook', event: 'Lead', nhan: 'SỰ KIỆN KHÁCH TIỀM NĂNG', giaTri: 'Có SĐT', pk: 'Lead · khách để lại SĐT',
      dong: [['Khách', 'Phạm Minh Tuấn · đã để lại SĐT'], ['Nguồn khách', 'Quảng cáo Dàn karaoke gia đình → Messenger'], ['Nhu cầu', 'Nghe thử combo karaoke gia đình'], ['Event ID', 'AP2311-LEAD (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện Lead', khong: 'Không gửi Purchase khi khách chưa mua dàn.' },
  },
};
