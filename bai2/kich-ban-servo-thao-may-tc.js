/* Bài 2 (video demo ngang tự chạy): SERVO THÁO MÁY, nhóm thương mại điện tử. Viết lại 18/11/2026 theo mạch mẫu Yến chưng tươi:
   - 1 cảnh duy nhất: bài quảng cáo driver Panasonic MINAS A5 400W, 2 khách bình luận (hỏi giá, hỏi giao Hải Phòng mấy ngày)
     → trả lời cả 2 "Mình check ib shop nha" → AI nhắn inbox trước: giá + đúng ảnh quảng cáo, hỏi mã tem motor
     → khách gửi MSME042G1U, hỏi lắp driver A6 cho rẻ (ca khó: khác chuẩn encoder, không chạy) → AI chốt đúng driver A5
     → hỏi xuất VAT, khách chọn có → AI xin tên công ty, SĐT, địa chỉ xưởng → khách im
     → gắn thẻ (3 hashtag quảng cáo + #baogia + #MSME042G1U) → bám đuổi 3 tin 15 phút, 3 tiếng, 20 tiếng (tin 3: 2.200.000đ + tặng cáp encoder)
     → khách gửi thông tin (ca khó: thiếu số lô trong KCN) → tóm tắt đơn → Purchase lên Facebook
     → đơn tự động, nhân viên bấm xác nhận → cảm ơn + 5 món xưởng hay dùng kèm đang giảm giá → Zalo: hỏi thăm, bán chạy, mã SERVO5 → tổng kết → logo.
   - Chỉ 1 sản phẩm từ đầu tới cuối (driver A5 400W), không có đoạn khách hỏi sản phẩm khác.
   Nội dung lấy từ bài 1 (demo/kich-ban/servo-thao-may-tc.js): Kho Servo Bắc Ninh, khách anh Hùng (Cty TNHH Bao Bì Minh Phát, Lô C5 KCN Quế Võ),
   giá 2.400.000đ → 2.200.000đ + cáp encoder (bám đuổi #HoiGia), afterSale.sp, mã SERVO5. Tên shop, giá, khách, SĐT: minh họa.
   Mã motor Panasonic là mã thật. Ảnh: ảnh có sẵn của bài 1 (demo/assets/img/u/). */
window.VN_KB = {
  ten: 'Servo tháo máy video ngang',
  ketSub: 'Để AI tư vấn đúng mã, chốt đơn cho kho hàng của bạn',
  shop: { ten: 'Kho Servo Bắc Ninh', av: 'KS', mau: '#C2410C', sub: 'Thường trả lời ngay' },
  anh: {
    'tu-driver': '../assets/img/u/1780034766228-3fd70d9463c3_800x800.jpg',
    'lo-servo': '../assets/img/u/1618853471839-75ccc8d75e2d_800x800.jpg',
    'tu-dien': '../assets/img/u/1780034766295-43db0f2a0fb7_800x800.jpg',
    'tho-lap': '../assets/img/u/1649038780045-235e4b6e40b4_800x800.jpg',
    'may-cnc': '../assets/img/u/1717386255773-a456c611dc4e_800x800.jpg',
    'plc': '../assets/img/u/1697071612388-1d1a86fb8cc1_800x800.jpg',
    'bien-tan': '../assets/img/u/1661593073138-db1b788304e3_800x800.jpg',
    'cap-encoder': '../assets/img/u/1741626270900-a0a606876f5a_800x800.jpg',
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= BÌNH LUẬN QUẢNG CÁO → INBOX (cảnh duy nhất) ================= */
    { k: 'canh', nhan: 'Bình luận quảng cáo → Inbox', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'tu-driver', nhan: 'MESSENGER', tieuDe: 'Driver servo A5 · 400W tháo máy', nut: 'Gửi tin nhắn',
        text: 'Máy dừng vì driver báo lỗi? ⚙️ Driver Panasonic MINAS A5 400W tháo máy Nhật, test chạy có tải, bảo hành 3 tháng, lỗi 1 đổi 1. Giao nhanh trong ngày tới KCN. #servoa5 #driverservo #mobile',
      }, d: 1500 },
    { k: 'cap', e: 'Bình luận hỏi giá', t: 'Khách hỏi giá ngay dưới quảng cáo', s: 'Một khách khác hỏi giao Hải Phòng mấy ngày' },
    { k: 'cmt', i: 0, ten: 'Hùng Nguyễn', av: 'HN', text: 'Driver này giá sao shop?' },
    { k: 'cmt', i: 1, ten: 'Trần Quang', av: 'TQ', text: 'Giao Hải Phòng mất mấy ngày vậy shop?' },
    { k: 'cap', e: 'Trả lời cả 2 bình luận', t: 'Trả lời ngắn gọn, mời khách vào inbox', s: 'Tư vấn chi tiết trong tin nhắn riêng' },
    { k: 'rep', i: 0, text: 'Mình check ib shop nha 💬' },
    { k: 'rep', i: 1, text: 'Mình check ib shop nha 💬' },
    { k: 'ms', ref: { loai: 'cmt', img: 'tu-driver', dong1: 'Bạn đã bình luận về quảng cáo của Kho Servo Bắc Ninh', dong2: '"Driver này giá sao shop?"' }, gio: '14:47' },
    { k: 'cap', e: 'AI nhắn trước', t: 'Inbox trước: báo giá, gửi đúng ảnh quảng cáo', s: 'Khách không cần mô tả lại sản phẩm' },
    { k: 'ai', text: 'Dạ chào anh Hùng, driver **Panasonic A5 400W** tháo máy giá **2.400.000đ** ạ, đã test có tải, bảo hành 3 tháng.' },
    { k: 'ai', img: 'tu-driver' },
    { k: 'ai', text: 'Anh đọc giúp em **mã trên tem motor** để em lấy đúng đời, đúng công suất nha?' },

    { k: 'cap', e: 'Khách trả lời', t: 'Motor A5 hỏi lắp A6 → AI báo không chạy', s: 'Đọc mã tem ra đời, công suất, điện áp' },
    { k: 'kh', text: 'Tem ghi MSME042G1U. Lắp con A6 được k e, rẻ hơn' },
    { k: 'ai', text: 'Dạ **MSME042G1U** là motor **Panasonic A5, 400W, 200V** ạ. Driver A6 **khác chuẩn encoder**, lắp vào sẽ báo lỗi, anh lấy đúng **driver A5** là cắm lại cáp cũ chạy luôn nha.' },
    { k: 'cap', e: 'Hỏi đúng thứ còn thiếu', t: 'Khách doanh nghiệp: AI hỏi xuất VAT', s: 'Hỏi 1 câu, khách chỉ cần chọn' },
    { k: 'ai', text: 'Anh lấy cho xưởng thì có cần **xuất VAT** không ạ?' },
    { k: 'kh', text: 'Có xuất VAT nhé' },
    { k: 'cap', e: 'Xin thông tin lên đơn', t: 'Chọn xong: AI xin công ty, SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ em ghi **driver A5 400W**, 2.400.000đ, có xuất VAT. Anh gửi em **tên công ty, SĐT và địa chỉ xưởng** để em lên đơn nha.' },

    // Khách im sau khi được xin thông tin → màn hình phụ: gắn thẻ (3 hashtag quảng cáo + thẻ từ cuộc chat), bám đuổi 3 tin
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Chưa gửi SĐT: Preny tự gắn thẻ khách', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi theo thẻ', t: '3 tin ngắn: 15 phút, 3 tiếng, 20 tiếng', s: 'Chỉ nói về đúng driver khách đã chọn' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Anh Hùng ơi, em giữ cho anh **driver A5 400W** đúng motor **MSME042G1U** rồi ạ. Anh gửi em thông tin để em giao nhanh trong ngày nha 😊' },
    { k: 'p', a: 'r1', d: 900 },
    { k: 'time', nhan: '3 tiếng sau', gio: '17:49', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Em gửi anh ảnh thật test có tải con driver A5 này nha 📸 Chạy êm, không báo lỗi.' },
    { k: 'ai', imgs: ['tu-dien', 'may-cnc', 'tho-lap'] },
    { k: 'p', a: 'r2', d: 900 },
    { k: 'time', nhan: '20 tiếng sau', gio: '10:49', ngay: 'T5 19/11/2026', d: 700 },
    { k: 'ai', text: 'Anh chỉ cần gửi **SĐT và địa chỉ xưởng** là em lên đơn liền. Chốt hôm nay em để **2.200.000đ**, tặng **cáp encoder** dự phòng ạ 🎁' },
    { k: 'p', a: 'r3', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 3, khách gửi SĐT, địa chỉ', s: 'AI kiểm tra ngay thông tin khách gửi' },
    { k: 'kh', text: 'Cty TNHH Bao Bì Minh Phát, a Hùng 0987654321, KCN Quế Võ' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'cap', e: 'Kiểm tra dữ liệu', t: 'Thiếu số lô trong KCN → hỏi lại ngay' },
    { k: 'ai', text: 'Dạ em ghi rồi ạ. Anh cho em xin thêm **số lô** trong KCN Quế Võ để giao đúng xưởng nha.' },
    { k: 'kh', text: 'Lô C5 e' },
    { k: 'cap', e: 'Chốt đơn', t: 'Tự tổng hợp đơn: mã hàng, VAT, SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ anh kiểm tra lại đơn giúp em nha:\n– Driver Panasonic A5 400W (tháo máy, đã test)\n– Tặng 1 cáp encoder dự phòng\n– Tổng: **2.200.000đ**, có xuất VAT\n– Cty TNHH Bao Bì Minh Phát\n– Người nhận: Hùng · 0987 654 321\n– Lô C5, KCN Quế Võ, Bắc Ninh\nAnh xác nhận giúp em đơn này nha.', nut: 'Quản lý đơn hàng', d: 3600 },
    { k: 'cap', e: 'Xong', t: 'Khách chỉ cần nói "Ok e"' },
    { k: 'kh', text: 'Ok e' },
    { k: 'ai', text: 'Dạ em lên đơn, giao nhanh trong ngày cho anh nha ⚡', d: 1300 },

    // Chốt đơn → màn hình phụ: gửi đơn hàng cho Facebook → đơn tự động → nhân viên xác nhận
    { k: 'cap', e: 'Gửi đơn về Facebook', t: 'Sự kiện mua hàng gửi ngay lên Facebook', s: 'Quảng cáo tối ưu theo đơn thật' },
    { k: 'panel', v: 'capi', d: 900 },
    { k: 'p', a: 'flow', d: 1500 }, { k: 'p', a: 'event', d: 1300 }, { k: 'p', a: 'ok', d: 2200 },
    { k: 'cap', e: 'Đơn hàng tự động', t: 'Đơn tự lên trên Preny. Kho chỉ việc giao.' },
    { k: 'panel', v: 'don', d: 900 },
    { k: 'p', a: 'f1', d: 550 }, { k: 'p', a: 'f2', d: 550 }, { k: 'p', a: 'f3', d: 550 }, { k: 'p', a: 'f4', d: 550 },
    { k: 'p', a: 'cho', d: 900 },
    { k: 'cap', e: 'Nhân viên xác nhận', t: 'Báo nhân viên: bấm 1 lần là đơn lên', s: 'Người thật kiểm tra lại trước khi giao' },
    { k: 'p', a: 'nv', d: 1700 }, { k: 'p', a: 'bam', d: 1100 },
    { k: 'p', a: 'xn', d: 3000 },
    { k: 'panel', v: null, d: 500 },

    // Mua xong: tin cảm ơn kèm 5 món xưởng hay dùng kèm (afterSale.sp của bài 1), đang giảm giá
    { k: 'cap', e: 'Bán thêm sau mua', t: 'Cảm ơn khách, gửi kèm 5 món đang giảm giá', s: 'Khách bấm "Mua ngay" ngay trong Messenger' },
    { k: 'ai', text: 'Dạ cảm ơn anh Hùng nha 🎉 Đơn đã được xác nhận, kho giao nhanh trong ngày cho anh. Kho đang giảm giá mấy món xưởng hay dùng kèm, anh xem thử nha:' },
    { k: 'car', sp: [
        { img: 'plc', ten: 'PLC Mitsubishi FX3G-24M tháo máy', gia: '3.200.000đ', cu: '3.600.000đ', giam: '-11%' },
        { img: 'bien-tan', ten: 'Biến tần 1.5kW tháo máy, đã test', gia: '2.660.000đ', cu: '2.800.000đ', giam: '-5%' },
        { img: 'lo-servo', ten: 'Servo motor Panasonic A5 400W', gia: '2.755.000đ', cu: '2.900.000đ', giam: '-5%' },
        { img: 'cap-encoder', ten: 'Cáp encoder servo dự phòng', gia: '405.000đ', cu: '450.000đ', giam: '-10%' },
        { img: 'tu-dien', ten: 'Lắp tủ điện servo trọn gói', gia: '8.075.000đ', cu: '8.500.000đ', giam: '-5%' },
      ], d: 5200 },

    // Chăm sóc sau bán qua Zalo
    { k: 'zalo', gio: '19:30', ngay: 'T7 21/11/2026', chip: '2 ngày sau · driver đã lắp lên máy', d: 1500 },
    { k: 'cap', e: 'Chăm sóc sau bán qua Zalo', t: 'Lắp xong: AI hỏi máy chạy có ổn không', s: 'Nhắc cài thông số, xin đánh giá ngay trong tin Zalo OA' },
    { k: 'zns', zns: {
        img: 'tu-driver', tieuDe: 'Anh Hùng ơi, máy cắt chạy ổn chưa ạ?',
        noiDung: 'Kho Servo cảm ơn anh đã nhận đơn **#KS10842** (Driver Panasonic A5 400W). Anh nhớ cài lại **thông số Pr** theo máy cũ, cần hướng dẫn kho gửi ngay nha!',
        nut: 'Đánh giá sản phẩm',
      }, d: 4200 },
    { k: 'cap', e: 'ZBS · Sản phẩm bán chạy', t: '1 tuần sau: gửi mẫu bán chạy qua Zalo', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'T7 28/11/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['tu-driver', 'plc', 'bien-tan', 'lo-servo'], nhan: 'TOP BÁN CHẠY TUẦN NÀY', mau: '#F97316',
        tieuDe: '🔥 Top bán chạy tuần này tại Kho Servo',
        noiDung: '**Driver Panasonic A5**, **PLC Mitsubishi** và **biến tần 1.5kW** tháo máy đang được các xưởng chọn nhiều nhất tuần qua.',
        nut: 'Xem ngay',
      }, d: 4600 },
    { k: 'cap', e: 'ZBS · Khuyến mãi', t: '1 tuần sau nữa: gửi ưu đãi cho khách cũ', s: 'Kéo khách quay lại mua tiếp, không cần khách nhắn' },
    { k: 'zstamp', gio: '19:30', ngay: 'T7 05/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['lo-servo', 'tu-dien', 'plc', 'cap-encoder'], nhan: 'KHÁCH CŨ GIẢM 5% · MÃ SERVO5',
        tieuDe: 'Ưu đãi riêng cho Cty Bao Bì Minh Phát',
        noiDung: 'Nhập mã **SERVO5** giảm **5%** (tối đa 1.000.000đ) cho đơn tiếp theo. Ưu đãi áp dụng đến hết 31/12/2026.',
        nut: 'Dùng mã ngay',
      }, d: 4800 },

    { k: 'tongket', d: 8500 },
    { k: 'outro', d: 5200 },
  ],
  // Slide tổng kết cuối video (theo slide "Chốt lại 5 ô" nhóm thương mại điện tử; bám đuổi = 5 tin trong 7 ngày)
  tongKet: { tieuDe: 'Quy trình Preny AI giúp', em: 'tăng tỷ lệ chốt đơn', cot: [
    { ten: 'Khách hàng', icon: 'users', dong: ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến'] },
    { ten: 'AI Chatbot', icon: 'bot', dong: ['Phản hồi nhanh tức thì', 'Kêu gọi khách hàng mua hàng', 'Lấy thông tin và chốt đơn'] },
    { ten: 'Bám đuổi', icon: 'bell', dong: ['Gửi 5 tin nhắn trong 7 ngày để bám đuổi khách hàng'] },
    { ten: 'Chốt đơn', icon: 'check', dong: ['Lên đơn', 'Gửi sự kiện mua hàng lên Facebook'] },
    { ten: 'Mua lại', icon: 'refresh', dong: ['Tự động gửi 1 tin nhắn mỗi tuần qua FB và Zalo', 'Sản phẩm bán chạy, giảm giá, sản phẩm mới'] },
  ] },
  panels: {
    tag: { av: 'HN', ten: 'Hùng Nguyễn', sub: 'Messenger · bình luận quảng cáo Driver servo A5',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#servoa5', 'qt hot'], ['#driverservo', 'qt hot'], ['#mobile', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#MSME042G1U', 'qt']]]],
      im: 'Khách im từ 14:49, sau khi được xin SĐT, địa chỉ',
      rule: { lb: 'Bám đuổi theo thẻ #servoa5', tieuDe: '3 tin ngắn về driver khách đã chọn',
              dong: [['15 phút', 'Đã giữ driver A5 400W cho khách'], ['3 tiếng', 'Gửi ảnh thật test có tải'], ['20 tiếng', 'Chỉ cần SĐT, địa chỉ là lên đơn']] },
      reply: 'Khách gửi SĐT, địa chỉ · dừng bám đuổi' },
    capi: { tieuDe: 'Gửi đơn hàng cho Facebook', event: 'Purchase', nhan: 'SỰ KIỆN MUA HÀNG', giaTri: '2.200.000đ', pk: 'Purchase · 2.200.000đ',
      dong: [['Đơn hàng', '#KS10842 · Driver Panasonic A5 400W'], ['Nguồn khách', 'Bình luận quảng cáo Driver servo A5 → Messenger'], ['Giá trị', '2.200.000 VND'], ['Event ID', 'KS10842-PURCHASE (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện mua hàng' },
  },
  donHang: {
    ma: '#KS10842', sp: 'Driver Panasonic MINAS A5 400W (tháo máy)', bien: 'Đã test có tải · tặng cáp encoder · x1', img: 'tu-driver', gia: '2.200.000đ',
    phi: ['Giao nhanh', 'trong ngày'],
    nv: { ten: 'Nhân viên Long', av: 'L' },
    ten: 'Hùng · Cty Bao Bì Minh Phát', sdt: '0987 654 321', dc: 'Lô C5, KCN Quế Võ, Bắc Ninh · xuất VAT', gio: '11:05 · 19/11/2026',
  },
};
