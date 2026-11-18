/* Kịch bản video demo NGANG 16:9: KHÓA HỌC CHỈNH NHA TRONG SUỐT (khóa online 3D Planning clear aligner cho bác sĩ, nhóm cân nhắc
   nhiều), làm 18/11/2026 theo mạch mẫu thẩm mỹ viện đã duyệt.
   Mạch: logo → cảnh 1 bình luận hỏi học phí + hỏi "ca Hạng II có dạy không" → AI trả lời cả 2 bằng 1 câu chung → inbox: học phí,
   ảnh bài học thật, hỏi số ca đã làm → mời học thử miễn phí 3 bài, xin tên + SĐT Zalo → báo tư vấn viên → cảnh 2 quảng cáo 3D Planning
   → bác sĩ hỏi học phí → AI gửi đúng ảnh quảng cáo + học phí → bác sĩ chụp khóa khác "Này thì sao" → AI nhận ra workshop Hạng II, III
   → xin SĐT Zalo → bác sĩ im → gắn thẻ + bám đuổi 5 tin → bác sĩ giữ suất Q&A online → xin SĐT Zalo → báo tư vấn viên gọi ngay
   → gửi Lead lên Facebook → Zalo 3 tin → tổng kết → logo.
   Không lên đơn tự động: học thử, Q&A rồi tư vấn viên mới chốt đăng ký, gửi form và QR thanh toán.
   Như bài 1: khóa chỉ dành cho bác sĩ đã làm aligner, AI không cam kết kết quả điều trị, chương trình không hoàn tiền.
   Không có tin nhắc trước buổi Q&A (Preny chưa có tính năng này).
   Nội dung lấy từ bài 1 (demo/kich-ban/chinh-nha-trong-suot-tc.js): tên học viện, học phí, ưu đãi, bác sĩ, SĐT là dữ liệu minh họa.
   Ảnh: Unsplash có sẵn trong máy (ảnh thật, không phải học viện của khách). Không dùng ảnh chứng chỉ giả: tin "giảng viên"
   là ảnh người thật + thẻ liệt kê. */
window.VN_KB = {
  ten: 'Khóa chỉnh nha trong suốt video ngang',
  ketSub: 'Để AI tư vấn và lấy SĐT học viên cho học viện của bạn',
  shop: { ten: 'Aligner Minh Tâm', av: 'MT', mau: '#0F766E', sub: 'Thường trả lời ngay' },
  anh: {
    'khay': '../assets/img/u/1609840114035-3c981b782dfe_800x800.jpg',          // tay đeo khay chỉnh nha trong suốt
    'scan-3d': '../assets/img/u/1777443726993-8f9c8e96e46e_800x800.jpg',       // bản scan 3D hàm răng trên máy tính bảng
    'scan-tablet': '../assets/img/u/1600170311833-c2cf5280ce49_800x800.jpg',   // tay đeo găng chỉ vào bản scan răng
    'may-tinh': '../assets/img/u/1666214280250-41f16ba24a26_800x800.jpg',      // bác sĩ làm việc trên 2 màn hình
    'quet-mieng': '../assets/img/u/1656428964836-78d54bf76231_800x800.jpg',    // bác sĩ quét trong miệng
    'mau-ham': '../assets/img/u/1675516030465-e2ad117e870f_800x800.jpg',       // mẫu hàm in 3D
    'mau-ham-2': '../assets/img/u/1775630159225-362225844076_800x800.jpg',     // tay đeo găng cầm mẫu hàm
    'hoi-thao': '../assets/img/u/1603478804503-dc909c7f5ce5_800x800.jpg',      // học viên nghe hội thảo
    'thuc-hanh': '../assets/img/u/1758205307854-5f0b57c27f17_800x800.jpg',     // bác sĩ thực hành
    'bac-si-laptop': '../assets/img/u/1675270855267-3c73bfd13849_800x800.jpg', // bác sĩ học trên laptop
    'hoc-online': '../assets/img/u/1766074903112-79661da9ab45_800x800.jpg',    // laptop họp video nhiều người
    'bac-si-nu': '../assets/img/u/1758691462651-611d730c5272_800x800.jpg',     // bác sĩ nữ ngồi bàn làm việc
    'nu-cuoi': '../assets/img/u/1677026010083-78ec7f1b84ed_800x800.jpg',       // nụ cười răng đều
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= CẢNH 1 · BÀI VIẾT → BÌNH LUẬN → INBOX ================= */
    { k: 'canh', nhan: 'Tình huống 1 · Bình luận hỏi giá → Inbox', gio: '19:38' },
    { k: 'fb', post: {
        gio: '3 giờ', img: 'scan-tablet', likes: '1,2K', soCmt: '87 bình luận',
        text: 'Đừng chỉ duyệt plan, hãy tự thiết kế điều trị clear aligner 🦷 14 chương, 9 ca STL thực hành, học thử MIỄN PHÍ 3 bài đầu. #3dplanning #clearaligner',
      }, d: 1600 },
    { k: 'cap', e: 'Bình luận hỏi giá', t: 'Bác sĩ hỏi học phí ngay dưới bài viết', s: 'Bác sĩ khác hỏi "ca Hạng II có dạy không"' },
    { k: 'cmt', i: 0, ten: 'Hải Yến', av: 'HY', text: 'Khóa 3D Planning học phí sao vậy ạ?' },
    { k: 'cmt', i: 1, ten: 'Quốc Bảo', av: 'QB', text: 'Ca Hạng II khóa có dạy không ạ?' },
    { k: 'cap', e: 'Trả lời cả 2 bình luận', t: 'Trả lời ngắn gọn, mời bác sĩ vào inbox', s: 'Không tư vấn công khai dưới bài' },
    { k: 'rep', i: 0, text: 'Mình check ib nha 💬' },
    { k: 'rep', i: 1, text: 'Mình check ib nha 💬' },

    { k: 'ms', ref: { loai: 'cmt', img: 'scan-tablet', dong1: 'Bạn đã bình luận về bài viết của Aligner Minh Tâm', dong2: '"Khóa 3D Planning học phí sao vậy ạ?"' }, gio: '19:40' },
    { k: 'cap', e: 'Tự động báo học phí', t: 'Inbox trước: học phí, ảnh bài học thật', s: 'Viết ngắn gọn, tự nhiên như người tư vấn' },
    { k: 'ai', text: 'Dạ chào bác sĩ Yến, khóa **Làm chủ 3D Planning** học phí **12.960.000đ**, học online trọn đời ạ.' },
    { k: 'ai', imgs: ['may-tinh', 'mau-ham', 'khay'] },
    { k: 'cap', e: 'Hỏi đúng chuyên môn', t: 'Hỏi đã làm bao nhiêu ca aligner', s: 'Đúng đối tượng mới tư vấn khóa' },
    { k: 'ai', text: 'Bác sĩ đã làm ca aligner nào chưa, đang vướng ở khâu nào ạ?' },
    { k: 'kh', text: 'c làm đc 4 ca, toàn duyệt plan lab gửi. pk chưa có máy scan, học đc k em' },
    { k: 'cap', e: 'Lấy SĐT', t: 'Mời học thử miễn phí, xin tên, SĐT Zalo', s: 'Không cam kết kết quả điều trị' },
    { k: 'ai', text: 'Dạ chưa có máy scan vẫn học được ạ, khóa có sẵn **thư viện STL** để luyện. Bác sĩ **học thử miễn phí 3 bài** trước nha. Bác sĩ cho em xin **tên và SĐT Zalo** để gửi link ạ 😊' },
    { k: 'kh', text: 'Yến, zalo 0978 135 246' },
    { k: 'ai', text: 'Dạ em ghi nhận rồi ạ. Lát tư vấn viên gửi link học thử qua Zalo cho bác sĩ Yến nha 🦷', d: 1800 },
    { k: 'cap', e: 'Báo ngay tư vấn viên', t: 'Có SĐT: tư vấn viên nhận khách, gọi ngay', s: 'AI chuyển đủ thông tin, không phải hỏi lại' },
    { k: 'panel', v: 'sale1', d: 800 },
    { k: 'p', a: 's1', d: 700 }, { k: 'p', a: 's2', d: 500 }, { k: 'p', a: 's3', d: 500 }, { k: 'p', a: 's4', d: 600 },
    { k: 'p', a: 's5', d: 1500 }, { k: 'p', a: 's6', d: 2600 },
    { k: 'panel', v: null, d: 500 },

    /* ================= CẢNH 2 · QUẢNG CÁO → MESSENGER ================= */
    { k: 'canh', nhan: 'Tình huống 2 · Quảng cáo → Messenger', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'scan-3d', nhan: 'MESSENGER', tieuDe: '3D Planning Clear Aligner · Học thử', nut: 'Gửi tin nhắn',
        text: 'Làm aligner rồi mà toàn duyệt plan lab gửi? 🦷 Khóa online Làm chủ 3D Planning cho bác sĩ, học trọn đời, học thử miễn phí 3 bài đầu. #3dplanning #clearaligner #hocthu',
      }, d: 1500 },
    { k: 'cap', e: 'Quảng cáo Facebook', t: 'Bác sĩ bấm "Gửi tin nhắn" từ quảng cáo', s: 'Hỏi gì, AI trả lời ngay lập tức' },
    { k: 'tap', d: 1100 },
    { k: 'ms', ref: { loai: 'ad', img: 'scan-3d', dong1: 'Trần Anh Tuấn đã trả lời một quảng cáo', dong2: '3D Planning Clear Aligner · Học thử' }, gio: '14:47', d: 900 },
    { k: 'kh', text: 'Khóa này học phí bao nhiêu vậy em?' },
    { k: 'cap', e: 'Bác sĩ hỏi học phí', t: 'AI gửi đúng ảnh trên quảng cáo kèm học phí', s: 'Hỏi lại số ca để tư vấn đúng khóa' },
    { k: 'ai', text: 'Dạ chào bác sĩ Tuấn, khóa **Làm chủ 3D Planning** học phí **12.960.000đ**, học online trọn đời ạ.' },
    { k: 'ai', img: 'scan-3d' },
    { k: 'ai', text: 'Bác sĩ đã làm bao nhiêu ca aligner rồi ạ? Khóa dành cho bác sĩ **đã làm aligner**, muốn tự thiết kế plan.' },
    { k: 'cap', e: 'Không hỏi lại khách', t: 'Bác sĩ chụp khóa khác hỏi "Này thì sao"', s: 'Chỉ một câu cộc lốc, không ghi tên khóa' },
    { k: 'kh', shot: { img: 'thuc-hanh', cap: 'Workshop thực hành ca Hạng II, Hạng III ✨ Aligner Minh Tâm' } },
    { k: 'kh', text: 'Này thì sao' },
    { k: 'cap', e: 'Nhận diện khóa từ ảnh', t: 'Đúng khóa học. Đúng học phí.', s: 'AI đọc ảnh bác sĩ gửi, khớp với danh sách khóa của học viện' },
    { k: 'ai', text: 'Dạ đây là **Workshop thực hành ca Hạng II, III**, học phí **6.500.000đ** ạ. Học 3D Planning trước rồi lên workshop sẽ dễ theo hơn.' },
    { k: 'ai', text: 'Bác sĩ cho em xin **tên và SĐT Zalo** để em gửi link **học thử miễn phí** nha 😊' },

    // Bác sĩ im → màn hình phụ: gắn thẻ (hashtag quảng cáo + thẻ từ cuộc chat), bám đuổi 5 tin nuôi khách
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Bác sĩ im', t: 'Preny tự gắn thẻ khóa học bác sĩ quan tâm', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi nuôi khách', t: '5 tin: 15 phút, rồi cách 1 ngày, 1 ngày, 1 ngày, 2 ngày', s: 'Bài học, feedback, giảng viên, lộ trình, suất Q&A' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Bác sĩ Tuấn ơi, em gửi bác sĩ xem **lớp online** và ca thực hành trong khóa nha 🦷' },
    { k: 'ai', imgs: ['hoc-online', 'mau-ham-2', 'quet-mieng'] },
    { k: 'p', a: 'r1', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '15:04', ngay: 'T5 19/11/2026', d: 700 },
    { k: 'ai', text: 'Đây là chia sẻ của một bác sĩ học viên bên em ạ 💬' },
    { k: 'ai', review: { av: 'MH', ten: 'BS. Minh Hoàng', sub: 'đã đánh giá Aligner Minh Tâm', mau: '#2DD4BF',
        text: 'Làm aligner 2 năm mà mình toàn duyệt plan lab. Học xong tự dựng được plan ca hở kẽ, ca đầu tiên giảng viên review rất kỹ, chỉ rõ chỗ sai để sửa.',
        note: 'Kết quả tùy từng ca và tay nghề mỗi bác sĩ' } },
    { k: 'p', a: 'r2', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '15:04', ngay: 'T6 20/11/2026', d: 700 },
    { k: 'ai', img: 'bac-si-nu' },
    { k: 'ai', checks: { tieuDe: 'Bên em nói rõ trước để bác sĩ yên tâm ạ:', dong: [
        'Giảng viên là **bác sĩ chỉnh nha** nhiều năm làm aligner', 'Review **ca đầu tiên** trong 90 ngày, phản hồi 24–48 giờ', '**Không cam kết** kết quả điều trị, **không hoàn tiền**'] } },
    { k: 'p', a: 'r3', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '15:04', ngay: 'T7 21/11/2026', d: 700 },
    { k: 'ai', text: 'Lộ trình là **học thử 3 bài → 14 chương, 9 ca STL → nộp ca đầu tiên để review**, học online lúc nào cũng được ạ 😊' },
    { k: 'ai', img: 'bac-si-laptop' },
    { k: 'p', a: 'r4', d: 800 },
    { k: 'time', nhan: '2 ngày sau', gio: '15:04', ngay: 'T2 23/11/2026', d: 700 },
    { k: 'ai', text: 'Tối **thứ Năm 26/11** lúc **20h** bên em có buổi **Q&A online miễn phí** với giảng viên. Bác sĩ muốn em giữ một suất không ạ?' },
    { k: 'p', a: 'r5', d: 1000 },
    { k: 'cap', e: 'Bác sĩ quay lại', t: 'Sau tin thứ 5, bác sĩ giữ suất Q&A', s: 'AI giữ suất, xin SĐT Zalo ngay' },
    { k: 'kh', text: 'Tối T5 a rảnh, giữ giúp a 1 suất nha' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'ai', text: 'Dạ được ạ, em gửi link Q&A kèm **3 bài học thử** qua Zalo luôn. Bác sĩ cho em xin **tên và SĐT Zalo** nha 🦷' },
    { k: 'cap', e: 'Lấy SĐT', t: 'Bác sĩ để lại tên, SĐT Zalo', s: 'Đây là lúc AI chốt: chuyển khách cho người thật' },
    { k: 'kh', text: 'Tuấn - 0905 318 427' },
    { k: 'ai', text: 'Dạ em giữ suất Q&A **20h thứ Năm 26/11** cho bác sĩ Tuấn rồi ạ. Tư vấn viên sẽ gọi Zalo cho bác sĩ liền nha 🦷', d: 1800 },

    // Có SĐT → màn hình phụ: báo tư vấn viên vào gọi ngay (không lên đơn tự động) → gửi Lead lên Facebook
    { k: 'cap', e: 'Báo ngay tư vấn viên', t: 'Có SĐT: báo tư vấn viên vào gọi ngay', s: 'Không lên đơn tự động: tư vấn viên chốt đăng ký, gửi QR' },
    { k: 'panel', v: 'sale', d: 800 },
    { k: 'p', a: 's1', d: 700 }, { k: 'p', a: 's2', d: 500 }, { k: 'p', a: 's3', d: 500 }, { k: 'p', a: 's4', d: 600 },
    { k: 'p', a: 's5', d: 1600 }, { k: 'p', a: 's6', d: 2600 },
    { k: 'cap', e: 'Gửi Lead về Facebook', t: 'Bác sĩ để lại SĐT: gửi sự kiện Lead lên Facebook', s: 'Quảng cáo tìm thêm bác sĩ giống khách thật' },
    { k: 'panel', v: 'capi', d: 900 },
    { k: 'p', a: 'flow', d: 1500 }, { k: 'p', a: 'event', d: 1300 }, { k: 'p', a: 'ok', d: 3200 },
    { k: 'panel', v: null, d: 600 },

    // Sau buổi Q&A qua Zalo: 3 tin (hỏi thăm + tài liệu sau Q&A, mời học tiếp sau 3 bài học thử, workshop mới cho học viên)
    { k: 'cap', e: 'Chăm sóc sau Q&A qua Zalo', t: 'Sau buổi Q&A: hỏi thăm, gửi tài liệu', s: 'Tin sau bán gửi qua Zalo OA của học viện' },
    { k: 'zalo', gio: '09:00', ngay: 'T6 27/11/2026', chip: 'Sáng hôm sau buổi Q&A', d: 1500 },
    { k: 'zns', zns: { img: 'hoc-online', sao: false, tieuDe: 'Bác sĩ Tuấn ơi, buổi Q&A tối qua bác sĩ thấy sao ạ?',
        noiDung: 'Minh Tâm gửi bác sĩ tài liệu sau buổi Q&A nha:',
        dong: ['**Video ghi lại** buổi Q&A để xem lại', 'Ca STL mẫu giảng viên phân tích tối qua', 'Còn băn khoăn, bác sĩ nhắn để giảng viên trả lời'],
        nut: 'Xem lại buổi Q&A' }, d: 5000 },
    { k: 'cap', e: 'Mời bước tiếp theo', t: 'Học thử xong: mời bác sĩ giữ suất học', s: 'Bác sĩ tự quyết, không ép đăng ký' },
    { k: 'zstamp', gio: '10:00', ngay: 'T3 01/12/2026', chip: '4 ngày sau', d: 800 },
    { k: 'zns', zns: { img: 'may-tinh', sao: false, tieuDe: 'Bác sĩ học thử tới bài mấy rồi ạ?',
        noiDung: 'Học xong 3 bài, bác sĩ thử dựng plan **ca STL mẫu** nha. Muốn học tiếp, bác sĩ bấm giữ suất, tư vấn viên gửi form đăng ký ạ 🦷',
        nut: 'Giữ suất học' }, d: 4400 },
    { k: 'cap', e: 'Ưu đãi học viên', t: 'Gửi workshop mới, ưu đãi học viên', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'CN 03/01/2027', chip: 'Đầu năm mới', d: 800 },
    { k: 'zns', zns: { banner: ['thuc-hanh', 'mau-ham-2', 'hoi-thao', 'quet-mieng'], nhan: 'WORKSHOP MỚI · HỌC VIÊN GIẢM 15%', mau: '#0F766E',
        tieuDe: 'Workshop thực hành ca Hạng II, Hạng III',
        noiDung: 'Học viên **giảm 15%**, số chỗ giới hạn. Giới thiệu đồng nghiệp cùng học, cả hai được **giảm 1.000.000đ**.',
        nut: 'Xem lịch workshop' }, d: 4800 },

    { k: 'tongket', d: 8500 },
    { k: 'outro', d: 5200 },
  ],
  // Slide tổng kết cuối video: lấy từ deck.chotLai của bài 1 khóa chỉnh nha, theo mẫu thẩm mỹ viện (cột 3 là "Bám đuổi", 5 tin trong 7 ngày)
  tongKet: { tieuDe: 'Quy trình Preny AI giúp', em: 'tăng tỷ lệ chốt học viên', cot: [
    { ten: 'Khách hàng', icon: 'users', dong: ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến'] },
    { ten: 'AI Chatbot', icon: 'bot', dong: ['Phản hồi nhanh tức thì', 'Hỏi chuyên môn, số ca đã làm', 'Không hứa bừa kết quả điều trị', 'Lấy SĐT Zalo, mời học thử miễn phí'] },
    { ten: 'Bám đuổi', icon: 'heart', dong: ['Gửi 5 tin nhắn trong 7 ngày: đúng ca bác sĩ vướng, bài học thử', 'Nuôi khách để học viện nằm đầu danh sách'] },
    { ten: 'Học thử', icon: 'calendar', dong: ['Học thử 3 bài, Q&A với giảng viên', 'Tư vấn gói học, tư vấn viên chốt đăng ký'] },
    { ten: 'Mua lại', icon: 'refresh', dong: ['Mời bác sĩ học khóa nâng cao, giới thiệu đồng nghiệp qua FB và Zalo'] },
  ] },
  panels: {
    sale1: { kieu: 'sale', tieuDe: 'Báo khách mới cho tư vấn viên', nguon: 'Bình luận bài viết → Messenger', ten: 'BS. Đỗ Hải Yến', sdt: '0978 135 246',
      nhuCau: 'Đã làm 4 ca aligner, toàn duyệt plan lab · chưa có máy scan', lich: 'Học thử miễn phí 3 bài · link gửi qua Zalo',
      the: [['#3dplanning', 'qt'], ['Bình luận bài viết', 'ng'], ['Đã cho SĐT Zalo', 'ok']],
      sale: { av: 'NG', ten: 'Tư vấn viên Ngân', sub: 'Đang trực · nhận khách tự động' }, ok: 'Tư vấn viên Ngân đã nhận khách, gọi Zalo ngay' },
    tag: { av: 'AT', ten: 'BS. Trần Anh Tuấn', sub: 'Messenger · từ quảng cáo 3D Planning Clear Aligner',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#3dplanning', 'qt hot'], ['#clearaligner', 'qt hot'], ['#hocthu', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#WorkshopHangII', 'qt']]]],
      im: 'Bác sĩ im từ 14:49, chưa để lại SĐT',
      rule: { lb: 'Bám đuổi theo thẻ #3dplanning', tieuDe: 'Nuôi khách bằng 5 tin ngắn',
              dong: [['15 phút', 'Ảnh lớp online, ca thực hành'], ['1 ngày', 'Feedback bác sĩ học viên'], ['1 ngày', 'Giảng viên, review ca, chính sách'],
                     ['1 ngày', 'Lộ trình: học thử trước, học sau'], ['2 ngày', 'Mời giữ suất Q&A với giảng viên']] },
      reply: 'Bác sĩ giữ suất Q&A thứ Năm · dừng bám đuổi' },
    sale: { tieuDe: 'Báo khách mới cho tư vấn viên', nguon: 'Quảng cáo 3D Planning Clear Aligner → Messenger', ten: 'BS. Trần Anh Tuấn', sdt: '0905 318 427',
      nhuCau: 'Khóa 3D Planning, quan tâm thêm workshop Hạng II, III', lich: 'Q&A online miễn phí · 20:00 Thứ Năm 26/11',
      the: [['#3dplanning', 'qt'], ['#WorkshopHangII', 'qt'], ['Đã cho SĐT Zalo', 'ok']],
      sale: { av: 'TH', ten: 'Tư vấn viên Thảo', sub: 'Đang trực · nhận khách tự động' }, ok: 'Tư vấn viên Thảo đã nhận khách, gọi Zalo ngay' },
    capi: { tieuDe: 'Gửi khách tiềm năng cho Facebook', event: 'Lead', nhan: 'SỰ KIỆN KHÁCH TIỀM NĂNG', giaTri: 'Có SĐT', pk: 'Lead · bác sĩ để lại SĐT',
      dong: [['Khách', 'BS. Trần Anh Tuấn · đã để lại SĐT'], ['Nguồn khách', 'Quảng cáo 3D Planning → Messenger'], ['Nhu cầu', 'Q&A online, học thử 3D Planning'], ['Event ID', 'MT2311-LEAD (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện Lead', khong: 'Không gửi Purchase khi bác sĩ chưa thanh toán học phí.' },
  },
};
