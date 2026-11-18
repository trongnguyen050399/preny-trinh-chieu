/* Bài 2 (video demo ngang tự chạy): THIẾT BỊ VỆ SINH, nhóm thương mại điện tử. Viết lại 18/11/2026 theo mạch mẫu Yến chưng tươi:
   - 1 cảnh duy nhất: bài quảng cáo bồn cầu một khối AP-1688, 2 khách bình luận (hỏi giá, hỏi lắp tận nơi ở Bình Dương)
     → trả lời cả 2 "Mình check ib shop nha" → AI nhắn inbox trước: giá + đúng ảnh quảng cáo, hỏi tâm xả
     → khách không rành tâm xả (ca khó) → AI chỉ cách đo → khách đo được 30 phân → AI chốt loại 305mm, xin SĐT + địa chỉ → khách im
     → gắn thẻ (3 hashtag quảng cáo + #baogia + #TamXa305) → bám đuổi 3 tin 15 phút, 3 tiếng, 20 tiếng → khách gửi SĐT + địa chỉ
     (ca khó: thiếu số nhà) → tóm tắt đơn → Purchase lên Facebook
     → đơn tự động, nhân viên bấm xác nhận → cảm ơn + 5 món hợp tông đang giảm giá → Zalo: hỏi thăm, bán chạy, voucher → tổng kết → logo.
   - Chỉ 1 sản phẩm từ đầu tới cuối (bồn cầu AP-1688), không có đoạn khách hỏi sản phẩm khác.
   Nội dung lấy từ bài 1 (demo/kich-ban/thiet-bi-ve-sinh-tc.js): shop TBVS An Phát, khách anh Tuấn (Thủ Đức), giao và lắp miễn phí,
   afterSale.sp, voucher ANPHAT300. Tên shop, mã sản phẩm, giá, khách, SĐT: minh họa. Ảnh: ảnh có sẵn của bài 1 (demo/assets/img/u/). */
window.VN_KB = {
  ten: 'Thiết bị vệ sinh video ngang',
  ketSub: 'Để AI bán hàng cho showroom của bạn',
  shop: { ten: 'TBVS An Phát', av: 'AP', mau: '#0E7490', sub: 'Thường trả lời ngay' },
  anh: {
    'bon-cau': '../assets/img/u/1589824783837-6169889fa20f_800x800.jpg',
    'lavabo-vuong': '../assets/img/u/1595514535316-b8c85bf9bbf9_800x800.jpg',
    'lavabo-tron': '../assets/img/u/1621953884578-02a3ddb96f46_800x800.jpg',
    'voi': '../assets/img/u/1610278764397-388d11c35ddb_800x800.jpg',
    'sen-tam': '../assets/img/u/1584622650111-993a426fbf0a_800x800.jpg',
    'guong': '../assets/img/u/1629079447777-1e605162dc8d_800x800.jpg',
    'phong-tam-1': '../assets/img/u/1576698483491-8c43f0862543_800x800.jpg',
    'phong-tam-2': '../assets/img/u/1631048499052-e6d9f305d2c0_800x800.jpg',
    'phong-tam-3': '../assets/img/u/1630699376443-a79cea41ed80_800x800.jpg',
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= BÌNH LUẬN QUẢNG CÁO → INBOX (cảnh duy nhất) ================= */
    { k: 'canh', nhan: 'Bình luận quảng cáo → Inbox', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'bon-cau', nhan: 'MESSENGER', tieuDe: 'Bồn cầu một khối · AP-1688', nut: 'Gửi tin nhắn',
        text: 'Xả êm, sạch, cả nhà đều ưng 🚽 Bồn cầu một khối AP-1688 nắp đóng êm, xả xoáy, men sứ bảo hành 5 năm. Giao và lắp miễn phí nội thành TP.HCM. #boncaumotkhoi #boncau #mobile',
      }, d: 1500 },
    { k: 'cap', e: 'Bình luận hỏi giá', t: 'Khách hỏi giá ngay dưới quảng cáo', s: 'Một khách khác hỏi có lắp tận nơi không' },
    { k: 'cmt', i: 0, ten: 'Nguyễn Tuấn', av: 'NT', text: 'Bồn cầu này giá bao nhiêu shop?' },
    { k: 'cmt', i: 1, ten: 'Lê Nam', av: 'LN', text: 'Nhà mình ở Bình Dương có lắp tận nơi không shop?' },
    { k: 'cap', e: 'Trả lời cả 2 bình luận', t: 'Trả lời ngắn gọn, mời khách vào inbox', s: 'Tư vấn chi tiết trong tin nhắn riêng' },
    { k: 'rep', i: 0, text: 'Mình check ib shop nha 💬' },
    { k: 'rep', i: 1, text: 'Mình check ib shop nha 💬' },
    { k: 'ms', ref: { loai: 'cmt', img: 'bon-cau', dong1: 'Bạn đã bình luận về quảng cáo của TBVS An Phát', dong2: '"Bồn cầu này giá bao nhiêu shop?"' }, gio: '14:47' },
    { k: 'cap', e: 'AI nhắn trước', t: 'Inbox trước: báo giá, gửi đúng ảnh quảng cáo', s: 'Khách không cần mô tả lại sản phẩm' },
    { k: 'ai', text: 'Dạ chào anh Tuấn, bồn cầu một khối **AP-1688** giá **4.290.000đ** ạ (đang giảm 15%), giao và lắp miễn phí nội thành.' },
    { k: 'ai', img: 'bon-cau' },
    { k: 'ai', text: 'Mẫu này có loại **tâm xả 305mm** và **400mm**. Anh cho em xin tâm xả nhà mình để em chọn đúng loại nha?' },

    { k: 'cap', e: 'Khách trả lời', t: 'Không rành tâm xả → AI chỉ cách đo', s: 'Một câu dễ hiểu, khách tự đo được' },
    { k: 'kh', text: 'tâm xả là sao e, a k rành' },
    { k: 'ai', text: 'Dạ anh đo từ **mặt tường** tới **tâm lỗ thoát** dưới sàn nha. Khoảng 30 phân là loại **305mm**, khoảng 40 phân là loại **400mm** ạ.' },
    { k: 'kh', text: 'đo được 30 phân e, nhà a ở Thủ Đức' },
    { k: 'cap', e: 'Xin thông tin lên đơn', t: 'Đo xong: AI chốt loại 305mm, xin SĐT', s: 'Báo luôn Thủ Đức được lắp miễn phí' },
    { k: 'ai', text: 'Dạ vậy là **tâm xả 305mm** ạ. Em ghi **bồn cầu AP-1688 tâm 305mm**, 4.290.000đ, Thủ Đức lắp miễn phí. Anh gửi em **SĐT và địa chỉ** lắp đặt để em lên đơn nha.' },

    // Khách im sau khi được xin SĐT, địa chỉ → màn hình phụ: gắn thẻ (3 hashtag quảng cáo + thẻ từ cuộc chat), bám đuổi 3 tin
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Chưa gửi SĐT: Preny tự gắn thẻ khách', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi theo thẻ', t: '3 tin ngắn: 15 phút, 3 tiếng, 20 tiếng', s: 'Chỉ nói về đúng bồn cầu khách đã chọn' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Anh Tuấn ơi, em giữ cho anh **bồn cầu AP-1688 tâm xả 305mm** rồi ạ. Anh gửi em SĐT, địa chỉ để em hẹn thợ qua lắp nha 😊' },
    { k: 'p', a: 'r1', d: 900 },
    { k: 'time', nhan: '3 tiếng sau', gio: '17:49', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Em gửi anh ảnh thật phòng tắm khách vừa lắp bên em nha 📸 Bồn một khối nhìn gọn, lau chùi cũng dễ hơn.' },
    { k: 'ai', imgs: ['phong-tam-2', 'bon-cau'] },
    { k: 'p', a: 'r2', d: 900 },
    { k: 'time', nhan: '20 tiếng sau', gio: '10:49', ngay: 'T5 19/11/2026', d: 700 },
    { k: 'ai', text: 'Anh chỉ cần gửi **SĐT và địa chỉ** là em lên đơn liền, **giao và lắp miễn phí**, men sứ bảo hành 5 năm ạ ⚡' },
    { k: 'p', a: 'r3', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 3, khách gửi SĐT, địa chỉ', s: 'AI kiểm tra ngay thông tin khách gửi' },
    { k: 'kh', text: '0903456789, đường Võ Văn Ngân, Thủ Đức' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'cap', e: 'Kiểm tra dữ liệu', t: 'Thiếu số nhà → hỏi lại ngay lập tức' },
    { k: 'ai', text: 'Dạ em ghi SĐT rồi ạ. Đường **Võ Văn Ngân** anh cho em xin thêm **số nhà** để thợ tới lắp đúng chỗ nha.' },
    { k: 'kh', text: 'Số 12 e' },
    { k: 'cap', e: 'Chốt đơn', t: 'Tự tổng hợp đơn: mẫu, tâm xả, SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ anh kiểm tra lại đơn giúp em nha:\n– Bồn cầu một khối AP-1688, tâm xả 305mm\n– Tổng: **4.290.000đ** (giao và lắp miễn phí)\n– Người nhận: Tuấn · 0903 456 789\n– 12 Võ Văn Ngân, TP. Thủ Đức\nAnh xác nhận giúp em đơn này nha.', nut: 'Quản lý đơn hàng', d: 3600 },
    { k: 'cap', e: 'Xong', t: 'Khách chỉ cần nói "Ok e"' },
    { k: 'kh', text: 'Ok e' },
    { k: 'ai', text: 'Dạ em lên đơn, hẹn thợ qua lắp cho anh liền nha ⚡', d: 1300 },

    // Chốt đơn → màn hình phụ: gửi đơn hàng cho Facebook → đơn tự động → nhân viên xác nhận
    { k: 'cap', e: 'Gửi đơn về Facebook', t: 'Sự kiện mua hàng gửi ngay lên Facebook', s: 'Quảng cáo tối ưu theo đơn thật' },
    { k: 'panel', v: 'capi', d: 900 },
    { k: 'p', a: 'flow', d: 1500 }, { k: 'p', a: 'event', d: 1300 }, { k: 'p', a: 'ok', d: 2200 },
    { k: 'cap', e: 'Đơn hàng tự động', t: 'Đơn tự lên trên Preny. Shop chỉ việc giao, lắp.' },
    { k: 'panel', v: 'don', d: 900 },
    { k: 'p', a: 'f1', d: 550 }, { k: 'p', a: 'f2', d: 550 }, { k: 'p', a: 'f3', d: 550 }, { k: 'p', a: 'f4', d: 550 },
    { k: 'p', a: 'cho', d: 900 },
    { k: 'cap', e: 'Nhân viên xác nhận', t: 'Báo nhân viên: bấm 1 lần là đơn lên', s: 'Người thật kiểm tra lại trước khi giao' },
    { k: 'p', a: 'nv', d: 1700 }, { k: 'p', a: 'bam', d: 1100 },
    { k: 'p', a: 'xn', d: 3000 },
    { k: 'panel', v: null, d: 500 },

    // Mua xong: tin cảm ơn kèm 5 món hợp tông đang giảm giá (afterSale.sp của bài 1)
    { k: 'cap', e: 'Bán thêm sau mua', t: 'Cảm ơn khách, gửi kèm 5 món đang giảm giá', s: 'Khách bấm "Mua ngay" ngay trong Messenger' },
    { k: 'ai', text: 'Dạ cảm ơn anh Tuấn nha 🎉 Đơn đã được xác nhận, thợ sẽ gọi anh hẹn lịch lắp. Shop đang giảm giá mấy món hợp tông bồn cầu AP-1688, anh xem thử nha:' },
    { k: 'car', sp: [
        { img: 'lavabo-vuong', ten: 'Lavabo đặt bàn vuông AP-L12', gia: '1.150.000đ', cu: '1.350.000đ', giam: '-15%' },
        { img: 'lavabo-tron', ten: 'Lavabo đặt bàn tròn AP-L08', gia: '990.000đ', cu: '1.090.000đ', giam: '-9%' },
        { img: 'voi', ten: 'Vòi lavabo nóng lạnh inox 304', gia: '890.000đ', cu: '990.000đ', giam: '-10%' },
        { img: 'sen-tam', ten: 'Sen tắm nóng lạnh inox 304', gia: '1.990.000đ', cu: '2.290.000đ', giam: '-13%' },
        { img: 'guong', ten: 'Gương phòng tắm 60 × 80 cm', gia: '1.071.000đ', cu: '1.190.000đ', giam: '-10%' },
      ], d: 5200 },

    // Chăm sóc sau bán qua Zalo
    { k: 'zalo', gio: '19:30', ngay: 'T7 21/11/2026', chip: 'Tối hôm lắp · bồn cầu đã lắp xong', d: 1500 },
    { k: 'cap', e: 'Chăm sóc sau bán qua Zalo', t: 'Lắp xong: AI hỏi dùng có êm không', s: 'Dặn giữ men sứ, xin đánh giá ngay trong tin Zalo OA' },
    { k: 'zns', zns: {
        img: 'bon-cau', tieuDe: 'Anh Tuấn ơi, bồn cầu dùng có êm không ạ?',
        noiDung: 'An Phát cảm ơn anh đã nhận đơn **#AP30217** (Bồn cầu AP-1688 · tâm xả 305mm). Anh lau men bằng khăn mềm, không dùng chất tẩy có axit nha!',
        nut: 'Đánh giá sản phẩm',
      }, d: 4200 },
    { k: 'cap', e: 'ZBS · Sản phẩm bán chạy', t: '1 tuần sau: gửi mẫu bán chạy qua Zalo', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'T7 28/11/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['sen-tam', 'lavabo-vuong', 'guong', 'voi'], nhan: 'TOP BÁN CHẠY TUẦN NÀY', mau: '#F97316',
        tieuDe: '🔥 Top bán chạy tuần này tại An Phát',
        noiDung: '**Sen tắm nóng lạnh**, **lavabo vuông AP-L12** và **gương phòng tắm** đang được khách An Phát chọn nhiều nhất tuần qua.',
        nut: 'Xem ngay',
      }, d: 4600 },
    { k: 'cap', e: 'ZBS · Khuyến mãi', t: '1 tuần sau nữa: gửi ưu đãi cho khách cũ', s: 'Kéo khách quay lại mua tiếp, không cần khách nhắn' },
    { k: 'zstamp', gio: '19:30', ngay: 'T7 05/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['lavabo-tron', 'sen-tam', 'phong-tam-1', 'guong'], nhan: 'VOUCHER 300.000Đ CHO KHÁCH CŨ',
        tieuDe: 'Tặng anh Tuấn voucher 300.000đ',
        noiDung: 'Nhập mã **ANPHAT300** giảm **300.000đ** cho đơn từ 2.000.000đ. Ưu đãi áp dụng đến hết 31/12/2026.',
        nut: 'Dùng voucher ngay',
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
    tag: { av: 'NT', ten: 'Nguyễn Tuấn', sub: 'Messenger · bình luận quảng cáo Bồn cầu một khối',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#boncaumotkhoi', 'qt hot'], ['#boncau', 'qt hot'], ['#mobile', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#TamXa305', 'qt']]]],
      im: 'Khách im từ 14:49, sau khi được xin SĐT, địa chỉ',
      rule: { lb: 'Bám đuổi theo thẻ #boncaumotkhoi', tieuDe: '3 tin ngắn về bồn cầu khách đã chọn',
              dong: [['15 phút', 'Đã giữ AP-1688 tâm 305mm cho khách'], ['3 tiếng', 'Gửi ảnh lắp thật'], ['20 tiếng', 'Chỉ cần SĐT, địa chỉ là lên đơn']] },
      reply: 'Khách gửi SĐT, địa chỉ · dừng bám đuổi' },
    capi: { tieuDe: 'Gửi đơn hàng cho Facebook', event: 'Purchase', nhan: 'SỰ KIỆN MUA HÀNG', giaTri: '4.290.000đ', pk: 'Purchase · 4.290.000đ',
      dong: [['Đơn hàng', '#AP30217 · Bồn cầu AP-1688 · 305mm'], ['Nguồn khách', 'Bình luận quảng cáo Bồn cầu một khối → Messenger'], ['Giá trị', '4.290.000 VND'], ['Event ID', 'AP30217-PURCHASE (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện mua hàng' },
  },
  donHang: {
    ma: '#AP30217', sp: 'Bồn cầu một khối AP-1688', bien: 'Tâm xả 305mm · x1', img: 'bon-cau', gia: '4.290.000đ',
    phi: ['Giao và lắp đặt', 'miễn phí'],
    nv: { ten: 'Nhân viên Hùng', av: 'H' },
    ten: 'Nguyễn Tuấn', sdt: '0903 456 789', dc: '12 Võ Văn Ngân, TP. Thủ Đức, TP.HCM', gio: '11:05 · 19/11/2026',
  },
};
