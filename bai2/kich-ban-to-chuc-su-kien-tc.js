/* Kịch bản video demo NGANG 16:9: DỊCH VỤ TỔ CHỨC SỰ KIỆN (nhóm cân nhắc nhiều), làm 26/11/2026 theo người dùng:
   "thêm ngành kinh doanh dịch vụ chạy sự kiện (cân nhắc nhiều)".
   Mạch cnn (mẫu dàn âm thanh / thẩm mỹ viện): 1 cảnh, không có bình luận, chỉ 1 dịch vụ (Year End Party trọn gói) từ đầu tới cuối.
   Mạch: logo → quảng cáo → khách bấm "Gửi tin nhắn", hỏi giá → AI báo giá + gửi đúng ảnh quảng cáo → hỏi số người, ngày, địa điểm
   → chị Hương phòng nhân sự: 80 người, tối 16/1, chưa chốt địa điểm, muốn có chủ đề, gameshow, bốc thăm, so bên khác 35 triệu
   → AI không chê, không tự tính giá (báo giá chính xác cần địa điểm + kịch bản), mời chuyên viên qua văn phòng gặp 30 phút,
   mang phương án chủ đề, xin tên + SĐT → khách im → gắn thẻ + bám đuổi 5 tin → khách hẹn gặp → xin SĐT, địa chỉ công ty
   → báo chuyên viên sự kiện → gửi Lead lên Facebook → Zalo 3 tin → tổng kết → logo.
   Không lên đơn tự động: chuyên viên chốt hợp đồng sau buổi gặp. Không có tin nhắc trước giờ hẹn, trước ngày sự kiện.
   Tên công ty, giá, khách, SĐT, địa chỉ, ưu đãi là dữ liệu minh họa. Ảnh: Unsplash (ảnh thật, không phải sự kiện của khách).
   Không làm ảnh giấy tờ giả: tin "cam kết" là ảnh bàn âm thanh + thẻ liệt kê. */
window.VN_KB = {
  ten: 'Tổ chức sự kiện video ngang',
  ketSub: 'Để AI tư vấn và chốt lịch gặp cho công ty sự kiện của bạn',
  shop: { ten: 'Sao Mai Event', av: 'SM', mau: '#9333EA', sub: 'Thường trả lời ngay' },
  anh: {
    'tiec': '../assets/img/u/1768508951262-42931f7ad924_800x800.jpg',       // khách nâng ly trong đêm tiệc công ty
    'san-khau': '../assets/img/u/1700514077430-3659e38eb5e7_800x800.jpg',   // sân khấu ánh sáng tím, bàn tiệc
    'anh-sang': '../assets/img/u/1599739291060-4578e77dac5d_800x800.jpg',   // đèn sân khấu
    'ban-tiec': '../assets/img/u/1768508951405-10e83c4a2872_800x800.jpg',   // sảnh tiệc bàn tròn
    'phong-tiec': '../assets/img/u/1783314867628-220ab03cac99_800x800.jpg', // phòng tiệc lớn đã bày bàn
    'nang-ly': '../assets/img/u/1699730164892-d7c433524ff3_800x800.jpg',    // nhóm bạn nâng ly
    'nhay': '../assets/img/u/1645730826845-cd2ddec9984f_800x800.jpg',       // khách nhảy trong tiệc
    'phao-giay': '../assets/img/u/1492684223066-81342ee5ff30_800x800.jpg',  // pháo giấy trên sân khấu
    'am-thanh': '../assets/img/u/1762952805560-130ccc74c3fa_800x800.jpg',   // bàn trộn âm thanh
    'ky-thuat': '../assets/img/u/1590377800256-5de17549a63c_800x800.jpg',   // kỹ thuật viên đứng bàn âm thanh
    'ke-hoach': '../assets/img/u/1768055105012-4c53791b2877_800x800.jpg',   // đánh dấu danh sách việc cần làm
    'lich': '../assets/img/u/1513128034602-7814ccaddd4e_800x800.jpg',       // sổ ghi chú kế hoạch
    'team': '../assets/img/u/1774599661166-ae302f07dd37_800x800.jpg',       // team building ngoài trời
    'tay': '../assets/img/u/1582213782179-e0d53f98f2ca_800x800.jpg',        // chồng tay đồng đội
    'micro': '../assets/img/u/1511671782779-c97d3d27a1d4_800x800.jpg',      // micro sân khấu
    'khach-moi': '../assets/img/u/1768508947825-0a63f7c46a2b_800x800.jpg',  // khách mời cười trong sảnh tiệc
    'ban-tron': '../assets/img/u/1768508950719-4d76978fdf44_800x800.jpg',   // khách ngồi bàn tiệc có hoa
    'hop': '../assets/img/u/1542744173-8e7e53415bb0_800x800.jpg',           // buổi họp với khách tại văn phòng
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= QUẢNG CÁO → MESSENGER (1 cảnh, không có bình luận, chỉ Year End Party trọn gói) ================= */
    { k: 'canh', nhan: 'Khách từ quảng cáo → Messenger', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'tiec', nhan: 'MESSENGER', tieuDe: 'Year End Party trọn gói · Tư vấn chủ đề miễn phí', nut: 'Gửi tin nhắn',
        text: 'Cuối năm rồi, tiệc tất niên công ty đã có kịch bản chưa? 🎉 Sao Mai Event lo trọn gói: chủ đề, sân khấu, âm thanh ánh sáng, MC, gameshow. Gặp tư vấn miễn phí, báo giá theo đúng ngân sách. #yearendparty #tochucsukien #tieccongty',
      }, d: 1500 },
    { k: 'cap', e: 'Quảng cáo Facebook', t: 'Khách bấm "Gửi tin nhắn" từ quảng cáo', s: 'Hỏi gì, AI trả lời ngay lập tức' },
    { k: 'tap', d: 1100 },
    { k: 'ms', ref: { loai: 'ad', img: 'tiec', dong1: 'Thu Hương đã trả lời một quảng cáo', dong2: 'Year End Party trọn gói · Tư vấn chủ đề miễn phí' }, gio: '14:47', d: 900 },
    { k: 'kh', text: 'Tổ chức YEP trọn gói bên em giá sao?' },
    { k: 'cap', e: 'Khách hỏi giá', t: 'AI gửi đúng ảnh trên quảng cáo kèm giá', s: 'Giá tham khảo, gặp tư vấn rồi mới báo chính xác' },
    { k: 'ai', text: 'Dạ chào chị Hương, gói Year End Party trọn gói bên em **từ 45.000.000đ**, gồm **sân khấu, âm thanh ánh sáng, MC, kịch bản** chương trình ạ.' },
    { k: 'ai', img: 'tiec' },
    { k: 'cap', e: 'Hỏi đúng nhu cầu', t: 'Hỏi số người, ngày và địa điểm', s: 'Mỗi sự kiện cần phương án khác nhau' },
    { k: 'ai', text: 'Công ty mình dự kiến **bao nhiêu người**, tổ chức **ngày nào** và đã chọn được **địa điểm** chưa ạ?' },
    { k: 'kh', text: 'tầm 80 người, tối 16/1, chưa chốt địa điểm. sếp muốn có chủ đề, gameshow, bốc thăm trúng thưởng. bên khác báo 35tr, bên e sao cao hơn?' },
    { k: 'cap', e: 'Mời gặp tư vấn', t: 'Không chê bên khác, mời chuyên viên qua gặp', s: 'Báo giá chính xác cần địa điểm và kịch bản' },
    { k: 'ai', text: 'Dạ mỗi bên tính các hạng mục khác nhau nên em chưa dám so ạ. Giá chính xác còn tùy **địa điểm** và **kịch bản**, bên em báo rõ từng hạng mục để chị dễ so.', d: 2700 },
    { k: 'ai', text: 'Em mời chị **buổi gặp 30 phút**, chuyên viên bên em qua văn phòng công ty chị, mang **3 phương án chủ đề** và gợi ý địa điểm cho 80 người, chưa cần ký gì. Chị cho em xin **tên và SĐT** để hẹn nha 🎉', d: 3000 },

    // Khách im → màn hình phụ: gắn thẻ (hashtag quảng cáo + thẻ từ cuộc chat), bám đuổi 5 tin
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Preny tự gắn thẻ sự kiện khách quan tâm', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi 5 tin', t: '5 tin: 15 phút, rồi cách 1 ngày, 1 ngày, 1 ngày, 2 ngày', s: 'Sự kiện đã làm, feedback, cam kết, quy trình, lịch gặp' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T5 26/11/2026', d: 700 },
    { k: 'ai', text: 'Chị Hương ơi, em gửi chị vài hình **tiệc tất niên** bên em vừa tổ chức nha 🎉' },
    { k: 'ai', imgs: ['san-khau', 'ban-tiec', 'phao-giay'] },
    { k: 'p', a: 'r1', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '15:04', ngay: 'T6 27/11/2026', d: 700 },
    { k: 'ai', text: 'Đây là chia sẻ của một chị phụ trách nhân sự bên em từng làm tiệc cùng ạ 💬' },
    { k: 'ai', review: { av: 'NT', ten: 'Ngọc Trâm', sub: 'đã đánh giá Sao Mai Event', mau: '#F59E0B',
        text: 'Công ty mình 120 người. Bên này lên 3 chủ đề cho sếp chọn, tổng duyệt chương trình trước 1 ngày, gameshow với bốc thăm chạy đúng giờ. Đêm tiệc mình chỉ việc ngồi chơi.',
        note: 'Chương trình tùy ngân sách và địa điểm của từng công ty' } },
    { k: 'p', a: 'r2', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '15:04', ngay: 'T7 28/11/2026', d: 700 },
    { k: 'ai', img: 'ky-thuat' },
    { k: 'ai', checks: { tieuDe: 'Bên em ghi rõ trong hợp đồng để chị yên tâm ạ:', dong: [
        '**Báo giá từng hạng mục**, phát sinh báo trước', '**Âm thanh, ánh sáng** của công ty, có kỹ thuật trực', '**Tổng duyệt** chương trình trước ngày diễn'] } },
    { k: 'p', a: 'r3', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '15:04', ngay: 'CN 29/11/2026', d: 700 },
    { k: 'ai', text: 'Quy trình bên em là **gặp tư vấn → kịch bản, chủ đề → duyệt báo giá → tổng duyệt → đêm tiệc**, chị duyệt từng bước rồi mới làm tiếp ạ 😊' },
    { k: 'ai', img: 'ke-hoach' },
    { k: 'p', a: 'r4', d: 800 },
    { k: 'time', nhan: '2 ngày sau', gio: '15:04', ngay: 'T3 01/12/2026', d: 700 },
    { k: 'ai', text: 'Tối thứ Bảy tháng 1 thường kín lịch sớm ạ. Tuần này chị muốn em hẹn chuyên viên qua gặp chị không ạ?' },
    { k: 'p', a: 'r5', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 5, khách hẹn gặp tư vấn', s: 'AI giữ lịch, xin SĐT ngay' },
    { k: 'kh', text: 'Chiều t5 qua cty c được ko, 3h' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'ai', text: 'Dạ được ạ, em hẹn **15h thứ Năm 03/12** tại văn phòng công ty chị. Chị cho em xin **tên, SĐT và địa chỉ công ty** nha 🎉' },
    { k: 'cap', e: 'Lấy SĐT', t: 'Khách để lại tên, SĐT, địa chỉ công ty', s: 'Đây là lúc AI chốt: chuyển khách cho người thật' },
    { k: 'kh', text: 'Hương, 0987 214 360, tầng 8 tòa nhà 72 Lê Thánh Tôn Q1' },
    { k: 'ai', text: 'Dạ em hẹn cho chị Hương rồi ạ. Chị Vy bên em sẽ gọi chị xác nhận, thứ Năm mang 3 phương án chủ đề qua công ty chị nha 🎉', d: 2200 },

    // Có SĐT → màn hình phụ: báo chuyên viên sự kiện gọi ngay (không lên đơn tự động) → gửi Lead lên Facebook
    { k: 'cap', e: 'Báo ngay cho chuyên viên', t: 'Có SĐT: báo chuyên viên sự kiện gọi ngay', s: 'Không lên đơn tự động: gặp xong mới ký hợp đồng' },
    { k: 'panel', v: 'sale', d: 800 },
    { k: 'p', a: 's1', d: 700 }, { k: 'p', a: 's2', d: 500 }, { k: 'p', a: 's3', d: 500 }, { k: 'p', a: 's4', d: 600 },
    { k: 'p', a: 's5', d: 1600 }, { k: 'p', a: 's6', d: 2600 },
    { k: 'cap', e: 'Gửi Lead về Facebook', t: 'Khách để lại SĐT: gửi sự kiện Lead lên Facebook', s: 'Quảng cáo tìm thêm khách giống khách thật' },
    { k: 'panel', v: 'capi', d: 900 },
    { k: 'p', a: 'flow', d: 1500 }, { k: 'p', a: 'event', d: 1300 }, { k: 'p', a: 'ok', d: 3200 },
    { k: 'panel', v: null, d: 600 },

    // Sau đêm tiệc, qua Zalo: 3 tin (gửi ảnh + xin góp ý; mời tư vấn team building hè; ưu đãi đặt sớm YEP năm sau)
    { k: 'cap', e: 'Chăm sóc sau sự kiện qua Zalo', t: 'Sau đêm tiệc: gửi ảnh, xin góp ý', s: 'Tin sau bán gửi qua Zalo OA của công ty' },
    { k: 'zalo', gio: '10:00', ngay: 'T2 18/01/2027', chip: 'Sau đêm Year End Party', d: 1500 },
    { k: 'zns', zns: { img: 'nang-ly', sao: false, tieuDe: 'Chị Hương ơi, đêm tiệc thứ Bảy mọi người vui không ạ?',
        noiDung: 'Sao Mai gửi chị mấy việc sau đêm tiệc nha:',
        dong: ['**Album ảnh, video** đêm tiệc gửi qua link trong 3 ngày', 'Chị góp ý giúp em **1 phút** để lần sau làm tốt hơn', 'Cần **xuất hóa đơn** bổ sung: nhắn em liền'],
        nut: 'Gửi góp ý' }, d: 5000 },
    { k: 'cap', e: 'Mời sự kiện tiếp theo', t: 'Mùa hè: mời tư vấn team building', s: 'Đặt sớm để chọn được ngày đẹp' },
    { k: 'zstamp', gio: '10:00', ngay: 'T2 05/04/2027', chip: 'Team building hè', d: 800 },
    { k: 'zns', zns: { img: 'team', sao: false, tieuDe: 'Hè này công ty mình có đi team building không ạ?',
        noiDung: 'Bên em mở lịch khảo sát địa điểm **tháng 5–6**, có sẵn gợi ý biển, rừng cho đoàn 80 người. Chị bấm chọn ngày, em hẹn chuyên viên nha 🎉',
        nut: 'Đặt lịch tư vấn' }, d: 4400 },
    { k: 'cap', e: 'Ưu đãi khách quen', t: 'Gửi ưu đãi đặt sớm tiệc tất niên năm sau', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'T6 01/10/2027', chip: 'Ưu đãi khách quen', d: 800 },
    { k: 'zns', zns: { banner: ['san-khau', 'phao-giay', 'ban-tron', 'nhay'], nhan: 'ƯU ĐÃI KHÁCH QUEN · GIẢM 10%', mau: '#9333EA',
        tieuDe: 'Đặt sớm Year End Party 2027',
        noiDung: 'Khách quen đặt trước 31/10/2027 giảm **10%** gói trọn gói, được ưu tiên chọn tối thứ Sáu, thứ Bảy tháng 1. Mã **SAOMAI10**.',
        nut: 'Xem ưu đãi' }, d: 4800 },

    { k: 'tongket', d: 8500 },
    { k: 'outro', d: 5200 },
  ],
  // Slide tổng kết cuối video: theo mẫu dàn âm thanh (cột 3 là "Bám đuổi", 5 tin trong 7 ngày)
  tongKet: { tieuDe: 'Quy trình Preny AI giúp', em: 'tăng tỷ lệ chốt lịch gặp tư vấn', cot: [
    { ten: 'Khách hàng', icon: 'users', dong: ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến'] },
    { ten: 'AI Chatbot', icon: 'bot', dong: ['Phản hồi nhanh tức thì', 'Báo giá, gửi ảnh sự kiện', 'Không chê bên khác', 'Lấy SĐT, hẹn gặp tư vấn'] },
    { ten: 'Bám đuổi', icon: 'heart', dong: ['Gửi 5 tin nhắn trong 7 ngày: sự kiện đã làm, khách thật, cam kết, quy trình'] },
    { ten: 'Hẹn gặp tư vấn', icon: 'calendar', dong: ['Chuyên viên mang phương án chủ đề', 'Chốt hợp đồng sau buổi gặp'] },
    { ten: 'Mua lại', icon: 'refresh', dong: ['Mời team building, ưu đãi đặt sớm tiệc năm sau qua FB và Zalo'] },
  ] },
  panels: {
    tag: { av: 'TH', ten: 'Phạm Thu Hương', sub: 'Messenger · từ quảng cáo Year End Party trọn gói',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#yearendparty', 'qt hot'], ['#tochucsukien', 'qt hot'], ['#tieccongty', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#CongTy80Nguoi', 'qt']]]],
      im: 'Khách im từ 14:49, chưa để lại SĐT',
      rule: { lb: 'Bám đuổi theo thẻ #yearendparty', tieuDe: 'Bám đuổi bằng 5 tin ngắn',
              dong: [['15 phút', 'Ảnh tiệc tất niên vừa tổ chức'], ['1 ngày', 'Feedback phụ trách nhân sự'], ['1 ngày', 'Báo giá rõ hạng mục, tổng duyệt'],
                     ['1 ngày', 'Quy trình: gặp, kịch bản, báo giá, tổng duyệt'], ['2 ngày', 'Mời hẹn chuyên viên qua gặp']] },
      reply: 'Khách hẹn gặp tư vấn · dừng bám đuổi' },
    sale: { tieuDe: 'Báo khách mới cho chuyên viên', ntTieuDe: 'Khách mới vừa để lại SĐT', khNhan: 'Khách hàng · Số điện thoại', lichNhan: 'Lịch gặp tư vấn',
      nguon: 'Quảng cáo Year End Party trọn gói → Messenger', ten: 'Phạm Thu Hương', sdt: '0987 214 360',
      nhuCau: 'YEP 80 người, tối 16/01/2027, chưa có địa điểm; cần chủ đề, gameshow, bốc thăm', lich: '15:00 Thứ Năm 03/12 · Tầng 8, 72 Lê Thánh Tôn, Q1',
      the: [['#yearendparty', 'qt'], ['#CongTy80Nguoi', 'qt'], ['Đã cho SĐT', 'ok']],
      sale: { av: 'VY', ten: 'Chị Vy · Chuyên viên sự kiện', sub: 'Đang trực · nhận khách tự động' }, ok: 'Chị Vy đã nhận khách, gọi xác nhận ngay' },
    capi: { tieuDe: 'Gửi khách tiềm năng cho Facebook', event: 'Lead', nhan: 'SỰ KIỆN KHÁCH TIỀM NĂNG', giaTri: 'Có SĐT', pk: 'Lead · khách để lại SĐT',
      dong: [['Khách', 'Phạm Thu Hương · đã để lại SĐT'], ['Nguồn khách', 'Quảng cáo Year End Party trọn gói → Messenger'], ['Nhu cầu', 'Year End Party 80 người, gặp tư vấn'], ['Event ID', 'SM0312-LEAD (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện Lead', khong: 'Không gửi Purchase khi khách chưa ký hợp đồng.' },
  },
};
