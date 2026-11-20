/* Kịch bản video demo NGANG 16:9: NẤU CỖ, TIỆC LƯU ĐỘNG (nhóm cân nhắc nhiều), làm 20/11/2026 theo yêu cầu khách:
   "Chatbot trực page, tư vấn thực đơn, menu, dịch vụ, xin tên, SĐT, thời gian, địa điểm đặt tiệc, thông báo nhân viên vào xác nhận".
   Mạch cnn người dùng chốt 18/11/2026 (mẫu thẩm mỹ viện): 1 cảnh, KHÔNG có bình luận, chỉ 1 dịch vụ (nấu cỗ mừng thọ tại nhà).
   Mạch: logo → quảng cáo nấu cỗ tại nhà → khách bấm "Gửi tin nhắn", hỏi giá → AI gửi đúng ảnh quảng cáo + giá mâm
   → hỏi dịp, số mâm, địa điểm → mừng thọ 12 mâm, ngõ nhỏ, 1 mâm chay, ngân sách 1,6 triệu → AI gợi ý thực đơn Mừng thọ,
   mâm chay cùng giá, xe nhỏ vào ngõ, trọn gói; xin tên, SĐT, ngày giờ, địa chỉ → khách im → gắn thẻ + bám đuổi 5 tin
   → khách giữ ngày → đưa thông tin → báo nhân viên điều phối xác nhận → gửi Lead lên Facebook → Zalo 3 tin → tổng kết → logo.
   Không lên đơn tự động: nhân viên xác nhận, khảo sát rồi mới nhận cọc. Không có tin nhắc trước ngày tiệc.
   Nội dung lấy từ bài 1 (demo/kich-ban/tiec-luu-dong-tc.js): đơn vị, giá, khách, SĐT, feedback, ưu đãi là dữ liệu minh họa.
   Ảnh: Unsplash có sẵn trong máy (ảnh thật, không phải tiệc của khách). */
window.VN_KB = {
  ten: 'Nấu cỗ, tiệc lưu động video ngang',
  ketSub: 'Để AI trực page, tư vấn thực đơn và lấy thông tin đặt tiệc cho bạn',
  shop: { ten: 'Cỗ Lưu Động Hồng Phúc', av: 'HP', mau: '#B91C1C', sub: 'Thường trả lời ngay' },
  anh: {
    'mam-co': '../assets/img/u/1793345243332-1de3e20b8814_800x800.jpg',     // mâm cỗ Việt (ảnh quảng cáo)
    'mam-co-2': '../assets/img/u/1699670425934-b30d13e63fea_800x800.jpg',   // mâm cỗ nhiều món
    'ban-tiec': '../assets/img/u/1710186012500-68dd1e3e49f5_800x800.jpg',   // cả nhà quây quần
    'rap-tiec': '../assets/img/u/1780682569879-f271082ae2cd_800x800.jpg',   // rạp trắng, bàn ghế đỏ
    'dau-bep': '../assets/img/u/1661505300208-9f0857553690_800x800.jpg',    // đầu bếp bày món
    'nem': '../assets/img/u/1695712641569-05eee7b37b6d_800x800.jpg',        // nem rán
    'buffet': '../assets/img/u/1555244162-803834f70033_800x800.jpg',        // bàn buffet nồi hâm
    'trang-tri': '../assets/img/u/1511795409834-ef04bbd61622_800x800.jpg',  // bàn tiệc trang trí hoa
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= QUẢNG CÁO → MESSENGER (1 cảnh, không có bình luận, chỉ dịch vụ nấu cỗ tại nhà) ================= */
    { k: 'canh', nhan: 'Khách từ quảng cáo → Messenger', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'mam-co', nhan: 'MESSENGER', tieuDe: 'Nấu cỗ tại nhà · Trọn gói A–Z', nut: 'Gửi tin nhắn',
        text: 'Mừng thọ, thôi nôi, tân gia, tất niên 🍲 Nấu cỗ tại nhà, mâm 6 người từ 1.490.000đ, đầu bếp nấu tại chỗ, trọn gói bàn ghế, rạp, phục vụ, dọn rửa. Khảo sát địa điểm miễn phí. #naucotainha #tiecluudong #mungtho',
      }, d: 1500 },
    { k: 'cap', e: 'Quảng cáo Facebook', t: 'Khách bấm "Gửi tin nhắn" từ quảng cáo', s: 'Hỏi gì, AI trả lời ngay lập tức' },
    { k: 'tap', d: 1100 },
    { k: 'ms', ref: { loai: 'ad', img: 'mam-co', dong1: 'Ngọc Lan đã trả lời một quảng cáo', dong2: 'Nấu cỗ tại nhà · Trọn gói A–Z' }, gio: '14:47', d: 900 },
    { k: 'kh', text: 'Nấu cỗ tại nhà bên em bao nhiêu 1 mâm vậy?' },
    { k: 'cap', e: 'Khách hỏi giá', t: 'AI gửi đúng ảnh trên quảng cáo kèm giá mâm', s: 'Giá chốt sau khi khảo sát địa điểm' },
    { k: 'ai', text: 'Dạ chào chị Lan, thực đơn **mâm 6 người** bên em từ **1.490.000đ/mâm**, đã gồm nấu tại chỗ và phục vụ ạ.' },
    { k: 'ai', img: 'mam-co' },
    { k: 'cap', e: 'Hỏi đúng nhu cầu', t: 'Hỏi dịp tiệc, số mâm, địa điểm', s: 'Để gợi ý đúng thực đơn' },
    { k: 'ai', text: 'Chị đặt tiệc **dịp gì**, khoảng **bao nhiêu mâm** và làm **ở đâu** ạ, để em gợi ý thực đơn cho hợp?' },
    { k: 'kh', text: 'mừng thọ bố c 70t, tầm 12 mâm, làm ở nhà trong ngõ Long Biên, ngõ nhỏ ô tô k vào đc. có 1 mâm ăn chay. tầm 1tr6/mâm thôi e' },
    { k: 'cap', e: 'Tư vấn thực đơn', t: 'Gợi ý thực đơn hợp ngân sách, có mâm chay', s: 'Ngõ nhỏ vẫn làm được, xin thông tin đặt tiệc' },
    { k: 'ai', text: 'Dạ mừng thọ thì chị tham khảo **thực đơn Mừng thọ 1.590.000đ/mâm** nha: gà ta luộc lá chanh, nem rán, tôm sú hấp, chân giò hầm, xôi gấc… 10 món. **Mâm chay** bên em nấu riêng, cùng giá ạ.' },
    { k: 'ai', text: 'Ngõ nhỏ không sao chị, bên em có **xe nhỏ chở đồ vào ngõ**, trọn gói bàn ghế, rạp, bát đĩa, phục vụ, dọn rửa. Chị cho em xin **tên, SĐT, ngày giờ và địa chỉ** để bên em khảo sát miễn phí, gửi báo giá chốt nha 😊' },

    // Khách im → màn hình phụ: gắn thẻ (hashtag quảng cáo + thẻ từ cuộc chat), bám đuổi 5 tin
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Preny tự gắn thẻ dịp tiệc khách cần', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi 5 tin', t: '5 tin: 15 phút, rồi cách 1 ngày, 1 ngày, 1 ngày, 2 ngày', s: 'Mâm cỗ thật, feedback, đầu bếp, quy trình, giữ ngày' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Chị Lan ơi, em gửi chị ảnh **mâm cỗ và rạp tiệc thật** bên em làm tuần trước nha 🍲' },
    { k: 'ai', imgs: ['mam-co-2', 'rap-tiec', 'nem'] },
    { k: 'p', a: 'r1', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '15:04', ngay: 'T5 19/11/2026', d: 700 },
    { k: 'ai', text: 'Đây là chia sẻ của một gia đình vừa làm mừng thọ bên em ạ 💬' },
    { k: 'ai', review: { av: 'TH', ten: 'Thanh Hương', sub: 'đã đánh giá Cỗ Lưu Động Hồng Phúc', mau: '#F59E0B',
        text: 'Nhà mình ngõ bé, 15 mâm mà các bạn vào dựng rạp gọn gàng. Món nóng, vừa miệng, các cụ khen mãi. Tiệc xong dọn sạch trơn.' } },
    { k: 'p', a: 'r2', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '15:04', ngay: 'T6 20/11/2026', d: 700 },
    { k: 'ai', img: 'dau-bep' },
    { k: 'ai', checks: { tieuDe: 'Bên em nấu thế này để chị yên tâm ạ:', dong: [
        '**Đầu bếp hơn 10 năm** nấu cỗ, nấu tại chỗ nên món luôn nóng', '**Nguyên liệu tươi mua trong ngày**, có hóa đơn nguồn gốc', 'Trọn gói **bàn ghế, rạp, bát đĩa, phục vụ, dọn rửa**'] } },
    { k: 'p', a: 'r3', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '15:04', ngay: 'T7 21/11/2026', d: 700 },
    { k: 'ai', text: 'Quy trình bên em: **chốt ngày → khảo sát địa điểm miễn phí → chốt thực đơn, đặt cọc → nấu, phục vụ, dọn dẹp**. Chị chưa ưng thì chưa phải cọc ạ 😊' },
    { k: 'ai', img: 'ban-tiec' },
    { k: 'p', a: 'r4', d: 800 },
    { k: 'time', nhan: '2 ngày sau', gio: '15:04', ngay: 'T2 23/11/2026', d: 700 },
    { k: 'ai', text: 'Tháng 12 lịch cỗ cuối năm kín dần rồi chị, Chủ nhật 13/12 bên em còn nhận thêm 1 đám. Chị muốn em giữ ngày cho nhà mình không ạ?' },
    { k: 'p', a: 'r5', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 5, khách nhờ giữ ngày tiệc', s: 'AI xin đủ thông tin ngay' },
    { k: 'kh', text: 'Giữ giúp c trưa CN 13/12 nhé e' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'ai', text: 'Dạ em giữ **trưa Chủ nhật 13/12** cho nhà mình ạ. Chị cho em xin **tên, SĐT, giờ khai tiệc và địa chỉ** cụ thể nha 🍲' },
    { k: 'cap', e: 'Lấy thông tin đặt tiệc', t: 'Tên, SĐT, giờ, địa chỉ, số mâm', s: 'Đây là lúc AI chốt: chuyển khách cho người thật' },
    { k: 'kh', text: 'Lan, 0983 517 264. 11h trưa, số 18 ngõ 72 Ngọc Lâm, Long Biên. 11 mâm mặn 1 mâm chay' },
    { k: 'ai', text: 'Dạ em ghi rồi ạ: **11h trưa CN 13/12**, số 18 ngõ 72 Ngọc Lâm, **11 mâm mặn + 1 mâm chay**. Chị Thu bên điều phối tiệc sẽ gọi chị xác nhận và hẹn qua khảo sát liền nha 🍲', d: 1800 },

    // Có thông tin → màn hình phụ: báo nhân viên xác nhận (không lên đơn tự động) → gửi Lead lên Facebook
    { k: 'cap', e: 'Báo ngay nhân viên', t: 'Đủ thông tin: báo nhân viên vào kiểm tra, xác nhận', s: 'Không lên đơn tự động: khảo sát rồi mới nhận cọc' },
    { k: 'panel', v: 'sale', d: 800 },
    { k: 'p', a: 's1', d: 700 }, { k: 'p', a: 's2', d: 500 }, { k: 'p', a: 's3', d: 500 }, { k: 'p', a: 's4', d: 600 },
    { k: 'p', a: 's5', d: 1600 }, { k: 'p', a: 's6', d: 2600 },
    { k: 'cap', e: 'Gửi Lead về Facebook', t: 'Khách để lại SĐT: gửi sự kiện Lead lên Facebook', s: 'Quảng cáo tìm thêm khách giống khách thật' },
    { k: 'panel', v: 'capi', d: 900 },
    { k: 'p', a: 'flow', d: 1500 }, { k: 'p', a: 'event', d: 1300 }, { k: 'p', a: 'ok', d: 3200 },
    { k: 'panel', v: null, d: 600 },

    // Sau tiệc, qua Zalo: 3 tin (cảm ơn + xin đánh giá; mời đặt cỗ tất niên, cỗ Tết; ưu đãi khách quen)
    { k: 'cap', e: 'Chăm sóc sau tiệc', t: 'Tối hôm tiệc: cảm ơn, xin đánh giá', s: 'Tin sau tiệc gửi qua Zalo OA của đơn vị' },
    { k: 'zalo', gio: '20:00', ngay: 'CN 13/12/2026', chip: 'Sau tiệc mừng thọ', d: 1500 },
    { k: 'zns', zns: { img: 'ban-tiec', tieuDe: 'Chị Lan ơi, các cụ ăn có vừa miệng không ạ?',
        noiDung: 'Hồng Phúc cảm ơn nhà mình đã đặt tiệc mừng thọ 12 mâm. Chị chấm giúp em vài sao để bên em làm tốt hơn nha 💛',
        nut: 'Đánh giá dịch vụ' }, d: 4600 },
    { k: 'cap', e: 'Mời đặt tiệc tiếp', t: 'Gần Tết: mời đặt cỗ tất niên, cỗ cúng Tết', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '10:00', ngay: 'CN 27/12/2026', chip: '2 tuần sau', d: 800 },
    { k: 'zns', zns: { banner: ['mam-co-2', 'rap-tiec', 'mam-co', 'nem'], nhan: 'CỖ TẤT NIÊN · CỖ TẾT 2027', mau: '#F97316',
        tieuDe: 'Thực đơn cỗ tất niên, cỗ cúng Tết 2027',
        noiDung: 'Hồng Phúc nhận **cỗ tất niên** công ty, gia đình và **mâm cỗ cúng Tết** tại nhà. Lịch cuối năm kín nhanh, chị đặt sớm để giữ ngày nha.',
        nut: 'Xem thực đơn' }, d: 4600 },
    { k: 'cap', e: 'Ưu đãi khách quen', t: 'Gửi ưu đãi cho bữa tiệc tiếp theo', s: 'Kéo khách quay lại, không cần khách nhắn' },
    { k: 'zstamp', gio: '19:30', ngay: 'T6 15/01/2027', chip: 'Ưu đãi khách quen', d: 800 },
    { k: 'zns', zns: { banner: ['trang-tri', 'rap-tiec', 'buffet', 'ban-tiec'], nhan: 'KHÁCH QUEN · GIẢM 5%', mau: '#B91C1C',
        tieuDe: 'Ưu đãi riêng cho khách đã đặt tiệc ở Hồng Phúc',
        noiDung: 'Giảm **5%** tiệc từ 5 mâm, tặng mâm hoa quả tráng miệng. Mã **HONGPHUC5**, dùng đến hết 28/02/2027.',
        nut: 'Xem ưu đãi' }, d: 4800 },

    { k: 'tongket', d: 8500 },
    { k: 'outro', d: 5200 },
  ],
  // Slide tổng kết cuối video: lấy từ deck.chotLai của bài 1, theo mẫu thẩm mỹ viện (cột 3 là "Bám đuổi", 5 tin trong 7 ngày)
  tongKet: { tieuDe: 'Quy trình Preny AI giúp', em: 'tăng tỷ lệ chốt lịch đặt tiệc', cot: [
    { ten: 'Khách hàng', icon: 'users', dong: ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến'] },
    { ten: 'AI Chatbot', icon: 'bot', dong: ['Phản hồi nhanh tức thì', 'Hỏi đúng dịp, số mâm', 'Gợi ý thực đơn hợp ngân sách', 'Lấy tên, SĐT, ngày, địa chỉ'] },
    { ten: 'Bám đuổi', icon: 'heart', dong: ['Gửi 5 tin nhắn trong 7 ngày: mâm cỗ thật, feedback, đầu bếp, quy trình'] },
    { ten: 'Đặt tiệc', icon: 'calendar', dong: ['Nhân viên xác nhận, khảo sát miễn phí', 'Chốt thực đơn, nhận cọc'] },
    { ten: 'Đặt lại', icon: 'refresh', dong: ['Xin đánh giá, mời đặt cỗ tất niên, cỗ Tết, ưu đãi khách quen qua FB và Zalo'] },
  ] },
  panels: {
    tag: { av: 'NL', ten: 'Phạm Ngọc Lan', sub: 'Messenger · từ quảng cáo Nấu cỗ tại nhà',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#naucotainha', 'qt hot'], ['#tiecluudong', 'qt hot'], ['#mungtho', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#12mam', 'qt']]]],
      im: 'Khách im từ 14:49, chưa để lại SĐT',
      rule: { lb: 'Bám đuổi theo thẻ #mungtho', tieuDe: 'Bám đuổi bằng 5 tin ngắn',
              dong: [['15 phút', 'Ảnh mâm cỗ, rạp tiệc thật'], ['1 ngày', 'Feedback gia đình làm mừng thọ'], ['1 ngày', 'Đầu bếp, nguyên liệu tươi trong ngày'],
                     ['1 ngày', 'Quy trình: khảo sát, chốt thực đơn, nấu'], ['2 ngày', 'Mời giữ ngày Chủ nhật 13/12']] },
      reply: 'Khách giữ ngày 13/12 · dừng bám đuổi' },
    sale: { tieuDe: 'Báo khách mới cho nhân viên', ntTieuDe: 'Khách vừa để lại thông tin đặt tiệc', khNhan: 'Khách hàng · Số điện thoại', lichNhan: 'Ngày tiệc',
      nguon: 'Quảng cáo Nấu cỗ tại nhà → Messenger', ten: 'Phạm Ngọc Lan', sdt: '0983 517 264',
      nhuCau: 'Mừng thọ 70 tuổi, 11 mâm mặn + 1 mâm chay, số 18 ngõ 72 Ngọc Lâm (ngõ nhỏ)', lich: 'Tiệc tại nhà · 11:00 Chủ nhật 13/12',
      the: [['#mungtho', 'qt'], ['#12mam', 'qt'], ['Đã cho SĐT', 'ok']],
      sale: { av: 'TT', ten: 'Chị Thu · Điều phối tiệc', sub: 'Đang trực · nhận khách tự động' }, ok: 'Chị Thu đã nhận khách, gọi xác nhận ngay' },
    capi: { tieuDe: 'Gửi khách tiềm năng cho Facebook', event: 'Lead', nhan: 'SỰ KIỆN KHÁCH TIỀM NĂNG', giaTri: 'Có SĐT', pk: 'Lead · khách để lại SĐT',
      dong: [['Khách', 'Phạm Ngọc Lan · đã để lại SĐT'], ['Nguồn khách', 'Quảng cáo Nấu cỗ tại nhà → Messenger'], ['Nhu cầu', 'Tiệc mừng thọ 12 mâm tại nhà'], ['Event ID', 'HP2311-LEAD (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện Lead', khong: 'Không gửi Purchase khi khách chưa đặt cọc.' },
  },
};
