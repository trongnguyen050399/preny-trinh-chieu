/* Kịch bản video demo NGANG 16:9: RÈM CỬA THIẾT KẾ (nhóm cân nhắc nhiều, giá cao, cần lấy nhiều thông tin), làm 23/11/2026 theo người dùng:
   "Rèm cửa (thiết kế, giá cao, cần lấy nhiều thông tin)".
   Mạch cnn người dùng chốt 18/11/2026 (mẫu thẩm mỹ viện): 1 cảnh, KHÔNG có bình luận, chỉ 1 sản phẩm (rèm vải 2 lớp may đo cả nhà).
   Mạch: logo → quảng cáo → khách bấm "Gửi tin nhắn", hỏi giá → AI gửi đúng ảnh quảng cáo + giá tham khảo theo m²
   → hỏi lần lượt: loại nhà, số cửa → phong cách, cản sáng, ngân sách → khách sợ đo sai, sợ màu khác ảnh → đo laser, mẫu vải tới nhà,
   ảnh phối 3D trước khi may, KHÔNG chốt giá cuối trong chat, xin tên + SĐT + địa chỉ → khách im → gắn thẻ + bám đuổi 5 tin
   → khách hẹn khảo sát → xin tên, SĐT, địa chỉ → báo chuyên viên thiết kế gọi ngay → gửi Lead lên Facebook → Zalo 3 tin → tổng kết → logo.
   Không lên đơn tự động: khảo sát, duyệt ảnh phối màu rồi mới ký. Không có tin nhắc trước giờ khảo sát, không có tin vận chuyển.
   Nội dung lấy từ bài 1 (demo/kich-ban/rem-cua-thiet-ke-tc.js): đơn vị, giá, khách, SĐT, địa chỉ, feedback, ưu đãi là dữ liệu minh họa.
   Ảnh: Unsplash có sẵn trong máy (ảnh thật, không phải công trình của khách). */
window.VN_KB = {
  ten: 'Rèm cửa thiết kế video ngang',
  ketSub: 'Để AI tư vấn và hẹn khách khảo sát rèm tận nhà cho đội thiết kế của bạn',
  shop: { ten: 'Rèm Thiết Kế Lumière', av: 'LM', mau: '#7C2D12', sub: 'Thường trả lời ngay' },
  anh: {
    'rem-phong-khach': '../assets/img/u/1704040686510-b747ff423ebb_800x800.jpg', // phòng khách cửa kính lớn (ảnh quảng cáo)
    'rem-cao-cap': '../assets/img/u/1778731660454-38133bfb3a3d_800x800.jpg',     // cửa sổ lớn, rèm vải nâu
    'rem-co-dien': '../assets/img/u/1688506900123-0ae2c0b063a7_800x800.jpg',     // rèm tân cổ điển
    'rem-2-lop': '../assets/img/u/1763939919676-97187d9f4db0_800x800.jpg',       // rèm 2 lớp vải + voan
    'rem-voan': '../assets/img/u/1528822855841-e8bf3134cdc9_800x800.jpg',        // rèm voan cửa kính
    'rem-phong-ngu': '../assets/img/u/1672122816795-49ff5cbc75e8_800x800.jpg',   // phòng ngủ cản sáng
    'rem-voan-2': '../assets/img/u/1759328257280-28bdb3050be3_800x800.jpg',      // voan + vải phòng ngủ
    'rem-cau-vong': '../assets/img/u/1643949914872-317d6047f107_800x800.jpg',    // rèm cầu vồng
    'do-dac': '../assets/img/u/1716698288217-2a2b6c042a2c_800x800.jpg',          // thước đo
    'ban-ve': '../assets/img/u/1603901622056-0a5bee231395_800x800.jpg',          // bản vẽ
    'vai-mau': '../assets/img/u/1705412877691-70f6913aaa1e_800x800.jpg',         // mẫu vải
    'mau-vai-2': '../assets/img/u/1781888699751-15f2b304693c_800x800.jpg',       // tay chọn mẫu vải
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= QUẢNG CÁO → MESSENGER (1 cảnh, không có bình luận, chỉ rèm may đo cả nhà) ================= */
    { k: 'canh', nhan: 'Khách từ quảng cáo → Messenger', gio: '20:12' },
    { k: 'ad', ad: {
        img: 'rem-phong-khach', nhan: 'MESSENGER', tieuDe: 'Rèm cửa thiết kế · Khảo sát tận nhà miễn phí', nut: 'Gửi tin nhắn',
        text: 'Rèm cửa thiết kế may đo cả nhà ✨ Rèm vải 2 lớp từ 650.000đ/m², đo bằng máy laser, mang 120+ mẫu vải tới tận nhà, gửi ảnh phối màu 3D trước khi may. #remthietke #nhapho #khaosatmienphi',
      }, d: 1500 },
    { k: 'cap', e: 'Quảng cáo Facebook', t: 'Khách bấm "Gửi tin nhắn" từ quảng cáo', s: 'Hỏi gì, AI trả lời ngay lập tức' },
    { k: 'tap', d: 1100 },
    { k: 'ms', ref: { loai: 'ad', img: 'rem-phong-khach', dong1: 'Khánh Vân đã trả lời một quảng cáo', dong2: 'Rèm cửa thiết kế · Khảo sát tận nhà miễn phí' }, gio: '20:13', d: 900 },
    { k: 'kh', text: 'Làm rèm cả nhà phố giá sao em?' },
    { k: 'cap', e: 'Khách hỏi giá', t: 'AI gửi đúng ảnh quảng cáo kèm giá tham khảo', s: 'Giá chính xác sau khi đo thực tế' },
    { k: 'ai', text: 'Dạ chào chị Vân, rèm vải 2 lớp (lớp cản sáng + lớp voan) bên em tham khảo **từ 650.000đ/m²** ạ. Giá chính xác sau khi **đo thực tế** từng cửa.' },
    { k: 'ai', img: 'rem-phong-khach' },
    { k: 'cap', e: 'Hỏi lần lượt từng thông tin', t: 'Loại nhà, số cửa trước', s: 'Mỗi tin một câu hỏi, khách dễ trả lời' },
    { k: 'ai', text: 'Nhà mình là **nhà phố** hay **biệt thự**, khoảng **bao nhiêu cửa** cần làm rèm ạ?' },
    { k: 'kh', text: 'nhà phố 4 tầng mới nhận ở Thủ Đức, tầm 11 cửa. phòng khách cửa kính lớn khoảng 4m ngang' },
    { k: 'ai', text: 'Dạ chị thích **phong cách** nào, phòng ngủ có cần **cản sáng** hẳn không, ngân sách dự kiến khoảng bao nhiêu ạ?' },
    { k: 'kh', text: 'hiện đại sang sang, tông kem xám. phòng ngủ cản sáng. tầm 60tr cả nhà. mà c sợ đo sai, màu ngoài đời khác ảnh lắm' },
    { k: 'cap', e: 'Mời khảo sát tận nhà', t: 'Giải đúng nỗi lo: đo sai, lệch màu', s: 'Không chốt giá cuối trong chat' },
    { k: 'ai', text: 'Dạ bên em đo bằng **máy laser**, mang **120+ mẫu vải** tới để chị xem dưới ánh sáng thật nhà mình, rồi gửi **ảnh phối màu 3D** để chị duyệt trước khi may ạ.' },
    { k: 'ai', text: 'Ngân sách 60 triệu làm đẹp cả nhà được ạ. Bên em **khảo sát đo đạc tận nhà miễn phí**, chị cho em xin **tên, SĐT và địa chỉ** để giữ lịch nha ✨' },

    // Khách im → màn hình phụ: gắn thẻ (hashtag quảng cáo + thẻ từ cuộc chat), bám đuổi 5 tin
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Preny tự gắn thẻ nhu cầu của khách', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi 5 tin', t: '5 tin: 15 phút, rồi cách 1 ngày, 1 ngày, 1 ngày, 2 ngày', s: 'Công trình thật, chủ nhà, quy trình, mẫu vải, giữ lịch' },
    { k: 'time', nhan: '15 phút sau', gio: '20:30', ngay: 'T2 23/11/2026', d: 700 },
    { k: 'ai', text: 'Chị Vân ơi, em gửi chị ảnh **công trình nhà phố** bên em vừa lắp tuần này nha ✨' },
    { k: 'ai', imgs: ['rem-cao-cap', 'rem-2-lop', 'rem-phong-ngu'] },
    { k: 'p', a: 'r1', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '20:30', ngay: 'T3 24/11/2026', d: 700 },
    { k: 'ai', text: 'Đây là chia sẻ của một chị chủ nhà cũng sợ lệch màu như chị ạ 💬' },
    { k: 'ai', review: { av: 'BT', ten: 'Bảo Trâm', sub: 'đã đánh giá Rèm Thiết Kế Lumière', mau: '#F59E0B',
        text: 'Nhà mình cửa kính 5m, bên Lumière đo laser, gửi ảnh phối 3D cho duyệt rồi mới may. Lắp xong y như ảnh, phòng ngủ tối hẳn, ngủ trưa ngon.' } },
    { k: 'p', a: 'r2', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '20:30', ngay: 'T4 25/11/2026', d: 700 },
    { k: 'ai', img: 'mau-vai-2' },
    { k: 'ai', checks: { tieuDe: 'Quy trình bên em thế này để chị yên tâm ạ:', dong: [
        '**Khảo sát, đo laser** tận nhà miễn phí', '**Phối mẫu**, gửi ảnh 3D để chị duyệt trước khi may', 'May tại xưởng, lắp đặt, **bảo hành 2 năm**'] } },
    { k: 'p', a: 'r3', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '20:30', ngay: 'T5 26/11/2026', d: 700 },
    { k: 'ai', text: 'Cửa kính lớn phòng khách bên em hay làm **ray êm** và **motor tự động**, đóng mở bằng điện thoại. Khi khảo sát em mang mẫu để chị xem tận tay nha 😊' },
    { k: 'ai', img: 'rem-voan' },
    { k: 'p', a: 'r4', d: 800 },
    { k: 'time', nhan: '2 ngày sau', gio: '20:30', ngay: 'T7 28/11/2026', d: 700 },
    { k: 'ai', text: 'Sáng Chủ nhật 29/11 bên em còn lịch khảo sát khu Thủ Đức, chị muốn em giữ lịch cho nhà mình không ạ?' },
    { k: 'p', a: 'r5', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 5, khách hẹn khảo sát', s: 'AI giữ lịch, xin SĐT ngay' },
    { k: 'kh', text: 'CN này 9h qua nhà c đo luôn đc e' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'ai', text: 'Dạ được ạ, em giữ lịch **9h sáng Chủ nhật 29/11** cho chị. Chị cho em xin **tên, SĐT và địa chỉ nhà** để chuyên viên tới khảo sát nha ✨' },
    { k: 'cap', e: 'Lấy SĐT', t: 'Khách để lại tên, SĐT, địa chỉ', s: 'Đây là lúc AI chốt: chuyển khách cho người thật' },
    { k: 'kh', text: 'Vân, 0903 726 418, 25 đường số 9, P. Hiệp Bình Phước, Thủ Đức nha e' },
    { k: 'ai', text: 'Dạ em giữ lịch khảo sát **9h sáng CN 29/11** tại nhà chị Vân rồi ạ. Chị Uyên bên thiết kế sẽ gọi chị xác nhận, mang theo **120+ mẫu vải** tới nha ✨', d: 1800 },

    // Có SĐT → màn hình phụ: báo chuyên viên gọi ngay (không lên đơn tự động) → gửi Lead lên Facebook
    { k: 'cap', e: 'Báo ngay chuyên viên', t: 'Có SĐT: báo chuyên viên thiết kế gọi ngay', s: 'Không lên đơn tự động: khảo sát rồi mới báo giá' },
    { k: 'panel', v: 'sale', d: 800 },
    { k: 'p', a: 's1', d: 700 }, { k: 'p', a: 's2', d: 500 }, { k: 'p', a: 's3', d: 500 }, { k: 'p', a: 's4', d: 600 },
    { k: 'p', a: 's5', d: 1600 }, { k: 'p', a: 's6', d: 2600 },
    { k: 'cap', e: 'Gửi Lead về Facebook', t: 'Khách để lại SĐT: gửi sự kiện Lead lên Facebook', s: 'Quảng cáo tìm thêm khách giống khách thật' },
    { k: 'panel', v: 'capi', d: 900 },
    { k: 'p', a: 'flow', d: 1500 }, { k: 'p', a: 'event', d: 1300 }, { k: 'p', a: 'ok', d: 3200 },
    { k: 'panel', v: null, d: 600 },

    // Sau khảo sát, qua Zalo: 3 tin (ảnh phối màu + báo giá; mẫu vải mới đúng tông; ưu đãi motor nhẹ nhàng)
    { k: 'cap', e: 'Chăm sóc sau khảo sát', t: 'Tối hôm khảo sát: gửi ảnh phối màu và báo giá', s: 'Tin gửi qua Zalo OA của đơn vị' },
    { k: 'zalo', gio: '19:30', ngay: 'CN 29/11/2026', chip: 'Sau buổi khảo sát', d: 1500 },
    { k: 'zns', zns: { img: 'rem-phong-khach', sao: false, tieuDe: 'Ảnh phối màu và báo giá cho nhà chị Vân',
        noiDung: 'Lumière gửi chị phương án theo số đo sáng nay:',
        dong: ['**Phòng khách** · vải kem ánh kim + voan trắng, ray êm', '**3 phòng ngủ** · vải cản sáng tông xám', 'Tạm tính 11 cửa: **58,6 triệu**, chị duyệt màu rồi mới may'],
        nut: 'Xem ảnh phối 3D' }, d: 5000 },
    { k: 'cap', e: 'Mẫu vải mới', t: '3 ngày sau: gửi mẫu vải mới đúng tông khách thích', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '10:00', ngay: 'T4 02/12/2026', chip: '3 ngày sau', d: 800 },
    { k: 'zns', zns: { banner: ['vai-mau', 'mau-vai-2', 'rem-2-lop', 'rem-cao-cap'], nhan: 'MẪU VẢI MỚI', mau: '#F97316',
        tieuDe: 'Thêm 2 mẫu kem xám vừa về xưởng',
        noiDung: 'Đúng tông **kem xám** chị thích, vải dày hơn, rủ đẹp hơn. Chị muốn xem tận tay, chị Uyên mang qua nhà cho chị nha.',
        nut: 'Xem mẫu vải' }, d: 4600 },
    { k: 'cap', e: 'Ưu đãi tháng 12', t: 'Gửi ưu đãi đúng phương án khách đã xem', s: 'Kéo khách quay lại ký hợp đồng' },
    { k: 'zstamp', gio: '19:30', ngay: 'T6 11/12/2026', chip: 'Ưu đãi tháng 12', d: 800 },
    { k: 'zns', zns: { banner: ['rem-phong-khach', 'rem-voan', 'rem-phong-ngu', 'rem-voan-2'], nhan: 'THÁNG 12 · TẶNG MOTOR', mau: '#7C2D12',
        tieuDe: 'Ưu đãi ký hợp đồng tháng 12',
        noiDung: 'Khách ký hợp đồng trong tháng 12 được **tặng motor tự động** cho 1 cửa phòng khách và **miễn phí lắp đặt**. Áp dụng đến hết 31/12/2026.',
        nut: 'Xem ưu đãi' }, d: 4800 },

    { k: 'tongket', d: 8500 },
    { k: 'outro', d: 5200 },
  ],
  // Slide tổng kết cuối video: lấy từ deck.chotLai của bài 1, theo mẫu thẩm mỹ viện (cột 3 là "Bám đuổi", 5 tin trong 7 ngày)
  tongKet: { tieuDe: 'Quy trình Preny AI giúp', em: 'tăng tỷ lệ hẹn khảo sát', cot: [
    { ten: 'Khách hàng', icon: 'users', dong: ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến'] },
    { ten: 'AI Chatbot', icon: 'bot', dong: ['Phản hồi nhanh tức thì', 'Hỏi lần lượt từng thông tin', 'Không chốt giá cuối trong chat', 'Lấy SĐT, hẹn khảo sát'] },
    { ten: 'Bám đuổi', icon: 'heart', dong: ['Gửi 5 tin nhắn trong 7 ngày: công trình thật, chủ nhà đã làm, quy trình, mẫu vải'] },
    { ten: 'Khảo sát', icon: 'calendar', dong: ['Chuyên viên đo laser tận nhà, mang mẫu vải', 'Ảnh phối 3D, báo giá, ký hợp đồng'] },
    { ten: 'Giới thiệu', icon: 'refresh', dong: ['Gửi mẫu vải mới, ưu đãi khách giới thiệu người quen qua FB và Zalo'] },
  ] },
  panels: {
    tag: { av: 'KV', ten: 'Lê Khánh Vân', sub: 'Messenger · từ quảng cáo Rèm cửa thiết kế',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#remthietke', 'qt hot'], ['#nhapho', 'qt hot'], ['#khaosatmienphi', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#CanSang', 'qt']]]],
      im: 'Khách im từ 20:16, chưa để lại SĐT',
      rule: { lb: 'Bám đuổi theo thẻ #remthietke', tieuDe: 'Bám đuổi bằng 5 tin ngắn',
              dong: [['15 phút', 'Ảnh công trình nhà phố thật'], ['1 ngày', 'Chủ nhà cũng sợ lệch màu'], ['1 ngày', 'Quy trình: đo laser, ảnh 3D, bảo hành'],
                     ['1 ngày', 'Ray êm, motor cho cửa kính lớn'], ['2 ngày', 'Mời giữ lịch khảo sát Chủ nhật']] },
      reply: 'Khách hẹn khảo sát Chủ nhật · dừng bám đuổi' },
    sale: { tieuDe: 'Báo khách mới cho Chuyên viên', ntTieuDe: 'Khách mới vừa để lại SĐT', khNhan: 'Khách hàng · Số điện thoại', lichNhan: 'Lịch khảo sát',
      nguon: 'Quảng cáo Rèm cửa thiết kế → Messenger', ten: 'Lê Khánh Vân', sdt: '0903 726 418',
      nhuCau: 'Nhà phố 4 tầng, 11 cửa, kính lớn phòng khách, kem xám, ngủ cản sáng, ~60 triệu', lich: 'Khảo sát · 09:00 Chủ nhật 29/11 · tại nhà, Thủ Đức',
      the: [['#remthietke', 'qt'], ['#CanSang', 'qt'], ['Đã cho SĐT', 'ok']],
      sale: { av: 'CU', ten: 'Chị Uyên · Chuyên viên thiết kế', sub: 'Đang trực · nhận khách tự động' }, ok: 'Chị Uyên đã nhận khách, gọi xác nhận ngay' },
    capi: { tieuDe: 'Gửi khách tiềm năng cho Facebook', event: 'Lead', nhan: 'SỰ KIỆN KHÁCH TIỀM NĂNG', giaTri: 'Có SĐT', pk: 'Lead · khách để lại SĐT',
      dong: [['Khách', 'Lê Khánh Vân · đã để lại SĐT'], ['Nguồn khách', 'Quảng cáo Rèm cửa thiết kế → Messenger'], ['Nhu cầu', 'Khảo sát rèm cả nhà, 11 cửa'], ['Event ID', 'LM2811-LEAD (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện Lead', khong: 'Không gửi Purchase khi khách chưa ký hợp đồng.' },
  },
};
