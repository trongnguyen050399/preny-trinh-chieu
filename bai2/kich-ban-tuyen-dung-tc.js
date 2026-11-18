/* Kịch bản video demo NGANG 16:9: TUYỂN DỤNG NHÂN SỰ (cung ứng lao động cho nhà máy KCN; "khách" là ứng viên), nhóm cân nhắc nhiều,
   làm 18/11/2026 theo mẫu thẩm mỹ viện đã duyệt.
   Mạch: logo → cảnh 1 bình luận hỏi lương + hỏi "có phải đóng phí không" → AI trả lời cả 2 → inbox: lương thực nhận, ảnh nhà máy, ký túc xá,
   hỏi tuổi, làm ca → nói rõ không thu phí, xin tên + SĐT, hẹn phỏng vấn → báo HR → cảnh 2 quảng cáo → ứng viên hỏi lương → AI gửi đúng ảnh
   quảng cáo + lương → ứng viên chụp vị trí khác "Này thì sao" → AI nhận ra → xin SĐT → ứng viên im → gắn thẻ + bám đuổi 5 tin
   → ứng viên giữ suất phỏng vấn → xin SĐT → báo HR gọi ngay (không lên đơn tự động) → gửi Lead lên Facebook → Zalo 3 tin → tổng kết → logo.
   Không thu bất kỳ khoản phí nào của ứng viên; hợp đồng ký thẳng với nhà máy; không hứa lương cao, không bao đỗ.
   Không có tin nhắc trước giờ phỏng vấn (Preny chưa có tính năng này).
   Tên công ty, nhà máy, lương, thưởng, ứng viên, SĐT: dữ liệu minh họa lấy từ bài 1 (demo/kich-ban/tuyen-dung-tc.js). Ảnh: ảnh có sẵn của bài 1. */
window.VN_KB = {
  ten: 'Tuyển dụng nhân sự video ngang',
  ketSub: 'Để AI tư vấn ứng viên và hẹn phỏng vấn cho công ty của bạn',
  shop: { ten: 'Việc Làm Hải Âu', av: 'HA', mau: '#1D4ED8', sub: 'Thường trả lời ngay' },
  anh: {
    'nha-may': '../assets/img/u/1589793463357-5fb813435467_800x800.jpg',     // chuyền lắp ráp điện tử
    'day-chuyen': '../assets/img/u/1651525670114-2b8117390b28_800x800.jpg',  // dây chuyền đóng gói
    'phong-van': '../assets/img/u/1758691737278-3af15b37af48_800x800.jpg',   // phỏng vấn tại văn phòng
    'kho': '../assets/img/u/1664382953403-fc1ac77073a0_800x800.jpg',         // kho hàng
    'ky-tuc-xa': '../assets/img/u/1709805619372-40de3f158e83_800x800.jpg',   // phòng ký túc xá
    'cong-nhan': '../assets/img/u/1581091212991-8891c7d4bd9b_800x800.jpg',   // xưởng lắp ráp ô tô
    'van-phong': '../assets/img/u/1698047682091-782b1e5c6536_800x800.jpg',   // HR bắt tay ứng viên
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= CẢNH 1 · BÀI VIẾT → BÌNH LUẬN → INBOX ================= */
    { k: 'canh', nhan: 'Tình huống 1 · Bình luận hỏi lương → Inbox', gio: '19:38' },
    { k: 'fb', post: {
        gio: '2 giờ', img: 'kho', likes: '2,7K', soCmt: '342 bình luận',
        text: 'Tuyển gấp 300 lao động phổ thông KCN Bắc Ninh 🏭 Lắp ráp điện tử, đóng gói, kho. Có ký túc xá, không thu phí ứng viên. #tuyendung #bacninh',
      }, d: 1600 },
    { k: 'cap', e: 'Bình luận hỏi lương', t: 'Ứng viên hỏi lương ngay dưới bài viết', s: 'Ứng viên khác hỏi "có phải đóng phí không"' },
    { k: 'cmt', i: 0, ten: 'Thị Hoa', av: 'TH', text: 'Lương tháng được bao nhiêu vậy ạ?' },
    { k: 'cmt', i: 1, ten: 'Minh Đức', av: 'MĐ', text: 'Vào làm có phải đóng phí gì không ạ?' },
    { k: 'cap', e: 'Trả lời cả 2 bình luận', t: 'Trả lời ngắn gọn, mời ứng viên vào inbox', s: 'Không tư vấn công khai dưới bài' },
    { k: 'rep', i: 0, text: 'Mình check ib nha 💬' },
    { k: 'rep', i: 1, text: 'Mình check ib nha 💬' },

    { k: 'ms', ref: { loai: 'cmt', img: 'kho', dong1: 'Bạn đã bình luận về bài viết của Việc Làm Hải Âu', dong2: '"Lương tháng được bao nhiêu vậy ạ?"' }, gio: '19:40' },
    { k: 'cap', e: 'Tự động báo lương', t: 'Inbox trước: lương thực nhận, ảnh thật', s: 'Viết ngắn gọn, tự nhiên như HR thật' },
    { k: 'ai', text: 'Dạ chào chị Hoa, lương cơ bản **5.500.000đ** + phụ cấp, tăng ca thì **thực nhận 9–11 triệu/tháng** ạ.' },
    { k: 'ai', imgs: ['nha-may', 'ky-tuc-xa', 'day-chuyen'] },
    { k: 'cap', e: 'Hỏi đúng ứng viên', t: 'Hỏi tuổi, có làm được tăng ca không', s: 'Tư vấn đúng vị trí, đúng ca làm' },
    { k: 'ai', text: 'Chị năm nay bao nhiêu tuổi, làm được tăng ca không ạ?' },
    { k: 'kh', text: 'c 32t, có con nhỏ nên k tăng ca đc. có phải đóng phí gì k e' },
    { k: 'cap', e: 'Lấy SĐT', t: 'Mời phỏng vấn, xin tên và SĐT', s: 'Nói rõ: không thu phí ứng viên' },
    { k: 'ai', text: 'Dạ nữ đến **35 tuổi** vẫn nhận ạ, có **ca hành chính** thực nhận **8–9 triệu**. Bên em **không thu phí** ứng viên. Chị cho em xin **tên và SĐT** để HR hẹn phỏng vấn nha 😊' },
    { k: 'kh', text: 'Hoa, 0386 214 557. sáng thứ 2 c đi đc' },
    { k: 'ai', text: 'Dạ em giữ suất phỏng vấn **sáng thứ Hai 23/11** cho chị Hoa rồi ạ. Lát HR gọi chị chỉ đường nha 🙌', d: 1800 },
    { k: 'cap', e: 'Báo ngay cho HR', t: 'Có SĐT: HR nhận ứng viên, gọi ngay', s: 'AI chuyển đủ thông tin, HR không phải hỏi lại' },
    { k: 'panel', v: 'sale1', d: 800 },
    { k: 'p', a: 's1', d: 700 }, { k: 'p', a: 's2', d: 500 }, { k: 'p', a: 's3', d: 500 }, { k: 'p', a: 's4', d: 600 },
    { k: 'p', a: 's5', d: 1500 }, { k: 'p', a: 's6', d: 2600 },
    { k: 'panel', v: null, d: 500 },

    /* ================= CẢNH 2 · QUẢNG CÁO → MESSENGER ================= */
    { k: 'canh', nhan: 'Tình huống 2 · Quảng cáo → Messenger', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'nha-may', nhan: 'MESSENGER', tieuDe: 'Tuyển 200 công nhân điện tử', nut: 'Gửi tin nhắn',
        text: 'Tuyển 200 công nhân lắp ráp điện tử KCN Yên Phong 🏭 Chưa có kinh nghiệm được đào tạo, ký túc xá miễn phí, không thu phí ứng viên. #congnhandientu #kytucxa #yenphong',
      }, d: 1500 },
    { k: 'cap', e: 'Quảng cáo Facebook', t: 'Ứng viên bấm "Gửi tin nhắn" từ quảng cáo', s: 'Hỏi gì, AI trả lời ngay lập tức' },
    { k: 'tap', d: 1100 },
    { k: 'ms', ref: { loai: 'ad', img: 'nha-may', dong1: 'Tuấn Lê đã trả lời một quảng cáo', dong2: 'Tuyển 200 công nhân điện tử' }, gio: '14:47', d: 900 },
    { k: 'kh', text: 'Việc này lương bn vậy e?' },
    { k: 'cap', e: 'Ứng viên hỏi lương', t: 'AI gửi đúng ảnh trên quảng cáo kèm lương', s: 'Nói rõ lương thực nhận, không hứa bừa' },
    { k: 'ai', text: 'Dạ chào anh Tuấn, lương cơ bản **5.500.000đ** + phụ cấp, tăng ca thì **thực nhận 9–11 triệu/tháng** ạ.' },
    { k: 'ai', img: 'nha-may' },
    { k: 'ai', text: 'Việc làm ngồi, lắp linh kiện theo hướng dẫn ạ. Anh bao nhiêu tuổi, đang ở đâu ạ?' },
    { k: 'cap', e: 'Không hỏi lại ứng viên', t: 'Ứng viên chụp vị trí khác hỏi "Này thì sao"', s: 'Chỉ một câu cộc lốc, không ghi tên vị trí' },
    { k: 'kh', shot: { img: 'cong-nhan', cap: 'Tuyển kỹ thuật viên lắp ráp ô tô, thu nhập tốt 🚗 Việc Làm Hải Âu' } },
    { k: 'kh', text: 'Này thì sao' },
    { k: 'cap', e: 'Nhận diện vị trí từ ảnh', t: 'Đúng vị trí. Đúng mức lương.', s: 'AI đọc ảnh ứng viên gửi, khớp với các vị trí đang tuyển' },
    { k: 'ai', text: 'Dạ đây là **Kỹ thuật viên lắp ráp ô tô**, thực nhận **từ 12 triệu/tháng** ạ. Vị trí này cần có tay nghề, HR sẽ xem hồ sơ cho anh.' },
    { k: 'ai', text: 'Anh cho em xin **tên và SĐT** để HR tư vấn vị trí hợp nha, bên em **không thu phí** ứng viên ạ 😊' },

    // Ứng viên im → màn hình phụ: gắn thẻ (hashtag quảng cáo + thẻ từ cuộc chat), bám đuổi 5 tin nuôi ứng viên
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Ứng viên im', t: 'Preny tự gắn thẻ vị trí ứng viên quan tâm', s: 'Hashtag của bài quảng cáo thành thẻ của ứng viên' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi nuôi ứng viên', t: '5 tin: 15 phút, rồi cách 1 ngày, 1 ngày, 1 ngày, 2 ngày', s: 'Nhà máy, chia sẻ, không thu phí, xe đón, suất phỏng vấn' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Anh Tuấn ơi, em gửi anh vài hình **nhà máy và ký túc xá** bên em nha 🏭' },
    { k: 'ai', imgs: ['nha-may', 'ky-tuc-xa', 'kho'] },
    { k: 'p', a: 'r1', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '15:04', ngay: 'T5 19/11/2026', d: 700 },
    { k: 'ai', text: 'Đây là chia sẻ của một bạn công nhân đang làm ở nhà máy ạ 💬' },
    { k: 'ai', review: { av: 'VN', ten: 'Hoàng Văn Nam', sub: 'đã đánh giá Việc Làm Hải Âu', mau: '#3B82F6',
        text: 'Mình ở Nghệ An ra, chưa làm công ty bao giờ. Được đào tạo 3 ngày có lương, ở ký túc xá miễn phí, không mất đồng phí nào.',
        note: 'Thu nhập tùy số giờ tăng ca' } },
    { k: 'p', a: 'r2', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '15:04', ngay: 'T6 20/11/2026', d: 700 },
    { k: 'ai', img: 'van-phong' },
    { k: 'ai', checks: { tieuDe: 'Anh yên tâm về chi phí và hợp đồng ạ:', dong: [
        '**Không thu bất kỳ khoản phí nào** của ứng viên', 'Ký **hợp đồng thẳng với nhà máy**', 'Đóng **BHXH từ tháng đầu**'] } },
    { k: 'p', a: 'r3', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '15:04', ngay: 'T7 21/11/2026', d: 700 },
    { k: 'ai', text: 'Anh đi xe khách tới **bến xe Bắc Ninh** là có **xe đón** về nhà máy, phỏng vấn xong xếp **ký túc xá** luôn ạ 😊' },
    { k: 'ai', img: 'phong-van' },
    { k: 'p', a: 'r4', d: 800 },
    { k: 'time', nhan: '2 ngày sau', gio: '15:04', ngay: 'T2 23/11/2026', d: 700 },
    { k: 'ai', text: '**Thứ Năm 26/11** nhà máy còn vài suất phỏng vấn, đủ 2 tháng làm còn **thưởng 1.000.000đ**. Anh muốn em giữ một suất không ạ?' },
    { k: 'p', a: 'r5', d: 1000 },
    { k: 'cap', e: 'Ứng viên quay lại', t: 'Sau tin thứ 5, ứng viên giữ suất phỏng vấn', s: 'AI giữ suất, xin SĐT ngay' },
    { k: 'kh', text: 'a 24t ở Thanh Hóa, thứ 5 lên đc. giữ a 1 suất vs chỗ ktx nha' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'ai', text: 'Dạ được ạ, **thứ Năm 26/11** phỏng vấn lúc **8h** tại nhà máy, anh chỉ cần mang **CCCD**. Anh cho em xin **tên và SĐT** để giữ suất nha 🙌' },
    { k: 'cap', e: 'Lấy SĐT', t: 'Ứng viên để lại tên, SĐT, lịch phỏng vấn', s: 'Đây là lúc AI chốt: chuyển ứng viên cho HR' },
    { k: 'kh', text: 'Tuấn, 0978 216 539 nha e' },
    { k: 'ai', text: 'Dạ em giữ suất phỏng vấn **8h thứ Năm 26/11** và chỗ ký túc xá cho anh Tuấn rồi ạ. HR sẽ gọi anh xác nhận, chỉ đường liền nha 🙌', d: 1800 },

    // Có SĐT → màn hình phụ: báo HR vào gọi ngay (không lên đơn tự động) → gửi Lead lên Facebook
    { k: 'cap', e: 'Báo ngay cho HR', t: 'Có SĐT: thông báo HR vào gọi, xác nhận lịch', s: 'Không lên đơn tự động: nhà máy phỏng vấn, ký hợp đồng' },
    { k: 'panel', v: 'sale', d: 800 },
    { k: 'p', a: 's1', d: 700 }, { k: 'p', a: 's2', d: 500 }, { k: 'p', a: 's3', d: 500 }, { k: 'p', a: 's4', d: 600 },
    { k: 'p', a: 's5', d: 1600 }, { k: 'p', a: 's6', d: 2600 },
    { k: 'cap', e: 'Gửi Lead về Facebook', t: 'Ứng viên để lại SĐT: gửi sự kiện Lead lên Facebook', s: 'Quảng cáo tìm thêm ứng viên giống ứng viên thật' },
    { k: 'panel', v: 'capi', d: 900 },
    { k: 'p', a: 'flow', d: 1500 }, { k: 'p', a: 'event', d: 1300 }, { k: 'p', a: 'ok', d: 3200 },
    { k: 'panel', v: null, d: 600 },

    // Sau phỏng vấn qua Zalo: 3 tin (hỏi thăm + lưu ý nhận việc, hỏi thăm tuần đầu đi làm, thưởng giới thiệu bạn bè)
    { k: 'cap', e: 'Chăm sóc qua Zalo', t: 'Sau phỏng vấn: hỏi thăm, dặn khi nhận việc', s: 'Tin gửi qua Zalo OA của công ty' },
    { k: 'zalo', gio: '18:30', ngay: 'T5 26/11/2026', chip: 'Sau buổi phỏng vấn', d: 1500 },
    { k: 'zns', zns: { img: 'ky-tuc-xa', sao: false, tieuDe: 'Anh Tuấn ơi, phỏng vấn hôm nay ổn không ạ?',
        noiDung: 'Hải Âu gửi anh vài lưu ý khi nhận việc nha:',
        dong: ['Mang **CCCD** gốc, 2 ảnh 3×4 để làm hợp đồng', 'Bên em **không thu phí**, ai đòi tiền anh báo hotline', 'Có gì chưa rõ, anh nhắn để HR hỗ trợ'],
        nut: 'Nhắn cho HR' }, d: 5000 },
    { k: 'cap', e: 'Hỏi thăm tuần đầu', t: 'Tuần đầu đi làm: hỏi thăm, hỗ trợ ngay', s: 'Giữ chân công nhân mới' },
    { k: 'zstamp', gio: '18:00', ngay: 'CN 06/12/2026', chip: '1 tuần sau nhận việc', d: 800 },
    { k: 'zns', zns: { img: 'nha-may', sao: false, tieuDe: 'Tuần đầu đi làm của anh thế nào ạ?',
        noiDung: 'Ca làm, ký túc xá, đồ ăn có gì chưa ổn, anh bấm nhắn để HR hỗ trợ liền nha 🙌',
        nut: 'Nhắn cho HR' }, d: 4400 },
    { k: 'cap', e: 'Thưởng giới thiệu', t: 'Gửi đợt tuyển mới, mời giới thiệu bạn bè', s: 'Ứng viên không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'CN 27/12/2026', chip: 'Đợt tuyển dịp Tết', d: 800 },
    { k: 'zns', zns: { banner: ['kho', 'day-chuyen', 'nha-may', 'cong-nhan'], nhan: 'THƯỞNG GIỚI THIỆU · 500K', mau: '#2563EB',
        tieuDe: 'Thưởng giới thiệu cho anh Tuấn',
        noiDung: 'Hải Âu đang tuyển **150 nhân viên kho** dịp Tết. Anh giới thiệu bạn bè, mỗi bạn nhận việc anh được **thưởng 500.000đ**, mã **HAIAU-TUAN**.',
        nut: 'Gửi cho bạn bè' }, d: 4800 },

    { k: 'tongket', d: 8500 },
    { k: 'outro', d: 5200 },
  ],
  // Slide tổng kết cuối video: theo deck.chotLai của bài 1; cột 3 là "Bám đuổi" (5 tin trong 7 ngày)
  tongKet: { tieuDe: 'Quy trình Preny AI giúp', em: 'tăng tỷ lệ chốt ứng viên', cot: [
    { ten: 'Ứng viên', icon: 'users', dong: ['Data thô', 'Hội chợ việc làm', 'Ads', 'Giới thiệu', 'Tự tìm đến'] },
    { ten: 'AI Chatbot', icon: 'bot', dong: ['Phản hồi nhanh tức thì', 'Tư vấn đúng vị trí, lương, chỗ ở', 'Xử lý băn khoăn: phí, kinh nghiệm', 'Lấy SĐT, hẹn phỏng vấn'] },
    { ten: 'Bám đuổi', icon: 'heart', dong: ['Gửi 5 tin nhắn trong 7 ngày: video nhà máy, ký túc xá, đợt tuyển mới', 'Nuôi ứng viên để công ty nằm đầu danh sách'] },
    { ten: 'Phỏng vấn', icon: 'calendar', dong: ['HR xác nhận lịch, xe đón', 'Phỏng vấn tại nhà máy, ký hợp đồng'] },
    { ten: 'Giới thiệu', icon: 'refresh', dong: ['Mời ứng viên cũ giới thiệu bạn bè, gửi đợt tuyển mới qua FB và Zalo'] },
  ] },
  panels: {
    sale1: { kieu: 'sale',  ntTieuDe: 'Ứng viên mới vừa để lại SĐT', khNhan: 'Ứng viên · Số điện thoại', lichNhan: 'Lịch phỏng vấn', tieuDe: 'Báo ứng viên mới cho HR', nguon: 'Bình luận bài viết → Messenger', ten: 'Nguyễn Thị Hoa', sdt: '0386 214 557',
      nhuCau: '32 tuổi, có con nhỏ, cần ca hành chính', lich: 'Phỏng vấn · sáng thứ Hai 23/11',
      the: [['#CaHanhChinh', 'qt'], ['Bình luận bài viết', 'ng'], ['Đã cho SĐT', 'ok']],
      sale: { av: 'MT', ten: 'HR Minh Thu', sub: 'Đang trực · nhận ứng viên tự động' }, ok: 'HR Minh Thu đã nhận ứng viên, gọi ngay' },
    tag: { tieuDe: 'Thẻ ứng viên', av: 'VT', ten: 'Lê Văn Tuấn', sub: 'Messenger · từ quảng cáo Tuyển công nhân điện tử',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#congnhandientu', 'qt hot'], ['#kytucxa', 'qt hot'], ['#yenphong', 'ng']]],
             ['Thẻ từ cuộc chat', [['#hoiluong', 'ht'], ['#LapRapOTo', 'qt']]]],
      im: 'Ứng viên im từ 14:49, chưa để lại SĐT',
      rule: { lb: 'Bám đuổi theo thẻ #congnhandientu', tieuDe: 'Nuôi ứng viên bằng 5 tin ngắn',
              dong: [['15 phút', 'Ảnh nhà máy, ký túc xá'], ['1 ngày', 'Chia sẻ của công nhân đang làm'], ['1 ngày', 'Không thu phí, hợp đồng với nhà máy'],
                     ['1 ngày', 'Xe đón, phỏng vấn, xếp ký túc xá'], ['2 ngày', 'Mời giữ suất phỏng vấn thứ Năm']] },
      reply: 'Ứng viên giữ suất phỏng vấn · dừng bám đuổi' },
    sale: { ntTieuDe: 'Ứng viên mới vừa để lại SĐT', khNhan: 'Ứng viên · Số điện thoại', lichNhan: 'Lịch phỏng vấn', tieuDe: 'Báo ứng viên mới cho HR', nguon: 'Quảng cáo Tuyển công nhân điện tử → Messenger', ten: 'Lê Văn Tuấn', sdt: '0978 216 539',
      nhuCau: '24 tuổi ở Thanh Hóa, cần ký túc xá, hỏi thêm lắp ráp ô tô', lich: 'Phỏng vấn tại nhà máy · 8:00 Thứ Năm 26/11',
      the: [['#congnhandientu', 'qt'], ['#kytucxa', 'qt'], ['Đã cho SĐT', 'ok']],
      sale: { av: 'P', ten: 'HR Phương', sub: 'Đang trực · nhận ứng viên tự động' }, ok: 'HR Phương đã nhận ứng viên, gọi ngay' },
    capi: { tieuDe: 'Gửi ứng viên tiềm năng cho Facebook', event: 'Lead', nhan: 'SỰ KIỆN ỨNG VIÊN TIỀM NĂNG', giaTri: 'Có SĐT', pk: 'Lead · ứng viên để lại SĐT',
      dong: [['Ứng viên', 'Lê Văn Tuấn · đã để lại SĐT'], ['Nguồn', 'Quảng cáo Tuyển công nhân điện tử → Messenger'], ['Nhu cầu', 'Phỏng vấn công nhân điện tử'], ['Event ID', 'HA2611-LEAD (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện Lead', khong: 'Ứng viên không trả phí nên không gửi Purchase.' },
  },
};
