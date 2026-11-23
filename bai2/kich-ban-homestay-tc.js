/* Bài 2 (video demo ngang tự chạy): KHÁCH SẠN, HOMESTAY (homestay nhà gỗ Đà Lạt), nhóm thương mại điện tử, ngành đặt chỗ
   ("lên đơn" = đơn đặt phòng). Làm 23/11/2026 khi tách ngành "Du lịch, lưu trú" cũ thành "Bán tour du lịch" và ngành này. Theo file mẫu Yến chưng tươi:
   - 1 cảnh duy nhất: bài quảng cáo, 2 khách bình luận (giá phòng cuối tuần, có mang thú cưng được không) → trả lời cả 2 "Mình check ib shop nha"
     → AI nhắn inbox trước: giá + đúng ảnh quảng cáo, hỏi 1 điều (ngày nhận, trả phòng) → ca khó: khách chỉ nói "cuối tuần này",
       chưa rõ mấy đêm → AI hỏi lại ngày nhận/trả phòng → T6 tới CN, có bé 3 tuổi, tới muộn khoảng 22h
     → AI: giữ phòng tới khuya, gửi mã tự nhận phòng; bé dưới 6 tuổi miễn phí, có nôi → hỏi phòng gác mái hay phòng gia đình có lò sưởi
     → khách chọn phòng lò sưởi → AI xin họ tên, SĐT → khách im
     → gắn thẻ (3 hashtag quảng cáo + #baogia + loại phòng) → bám đuổi 3 tin 15 phút, 3 tiếng, 20 tiếng → khách gửi tên, SĐT
     → tóm tắt đơn đặt phòng (cọc 50%) → Purchase lên Facebook → đơn tự động, lễ tân bấm xác nhận → cảm ơn + 5 dịch vụ giảm giá
     → Zalo sau kỳ nghỉ: hỏi thăm, phòng được đặt nhiều, voucher → tổng kết → logo.
   - Không có tin nhắc trước ngày nhận phòng. Chỉ 1 loại phòng từ khi khách chọn tới cuối (phòng gia đình có lò sưởi, 2 đêm).
     Tên homestay, giá, khách, SĐT, mã đơn: minh họa. Ảnh: Unsplash dùng chung với bài 1. */
window.VN_KB = {
  ten: 'Khách sạn, homestay video ngang',
  ketSub: 'Để AI tư vấn đúng phòng, bám đuổi và lên đơn đặt phòng cho homestay của bạn',
  shop: { ten: 'Homestay Nhà Gỗ Đồi Thông', av: 'ĐT', mau: '#166534', sub: 'Thường trả lời ngay' },
  anh: {
    'nha-go': '../assets/img/u/1609319172668-8b4f021f3b7b_800x800.jpg',
    'a-frame': '../assets/img/u/1771749607057-17163af1f0f3_800x800.jpg',
    'phong-gac-mai': '../assets/img/u/1758983065583-9cea714214f9_800x800.jpg',
    'phong-go': '../assets/img/u/1727706572437-4fcda0cbd66f_800x800.jpg',
    'phong-lo-suoi': '../assets/img/u/1773423389979-b28b469967f8_800x800.jpg',
    'ban-cong': '../assets/img/u/1790417468758-e24735a390f3_800x800.jpg',
    'view-may': '../assets/img/u/1771749607076-b6c940404f73_800x800.jpg',
    'lua-trai': '../assets/img/u/1568494354623-3d36e8d537b4_800x800.jpg',
    'lua-trai-2': '../assets/img/u/1530541930197-ff16ac917b0e_800x800.jpg',
    'an-sang': '../assets/img/u/1641924676578-ed2792eb24de_800x800.jpg',
    'phong-khach': '../assets/img/u/1767348922879-a5cade5cceff_800x800.jpg',
    'rung-thong': '../assets/img/u/1580824378537-e119885b93f7_800x800.jpg',
    'ho-thong': '../assets/img/u/1628873525512-82ad482c44ae_800x800.jpg',
    'doi-che': '../assets/img/u/1579436938466-92a9ba75812f_800x800.jpg',
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= BÌNH LUẬN QUẢNG CÁO → INBOX (cảnh duy nhất) ================= */
    { k: 'canh', nhan: 'Bình luận quảng cáo → Inbox', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'nha-go', nhan: 'MESSENGER', tieuDe: 'Homestay nhà gỗ giữa rừng thông Đà Lạt', nut: 'Gửi tin nhắn',
        text: 'NHÀ GỖ GIỮA RỪNG THÔNG ĐÀ LẠT 🌲 Phòng gác mái view đồi thông từ 850K/đêm, gồm ăn sáng, lửa trại tối thứ 7. Cách chợ Đà Lạt 4km, có chỗ đậu ô tô. #homestaydalat #nhagodoithong #sanmay',
      }, d: 1500 },
    { k: 'cap', e: 'Bình luận hỏi giá', t: 'Khách hỏi giá ngay dưới quảng cáo', s: 'Một khách khác hỏi mang thú cưng được không' },
    { k: 'cmt', i: 0, ten: 'Gia Bảo', av: 'GB', text: 'Phòng cuối tuần giá sao shop? Còn trống ko?' },
    { k: 'cmt', i: 1, ten: 'Thùy Dương', av: 'TD', text: 'Có cho mang chó nhỏ theo không shop?' },
    { k: 'cap', e: 'Trả lời cả 2 bình luận', t: 'Trả lời ngắn gọn, mời khách vào inbox', s: 'Tư vấn chi tiết trong tin nhắn riêng' },
    { k: 'rep', i: 0, text: 'Mình check ib shop nha 💬' },
    { k: 'rep', i: 1, text: 'Mình check ib shop nha 💬' },
    { k: 'ms', ref: { loai: 'cmt', img: 'nha-go', dong1: 'Bạn đã bình luận về quảng cáo của Homestay Nhà Gỗ Đồi Thông', dong2: '"Phòng cuối tuần giá sao shop? Còn trống ko?"' }, gio: '14:47' },
    { k: 'cap', e: 'AI nhắn trước', t: 'Inbox trước: báo giá, gửi đúng ảnh quảng cáo', s: 'Khách không cần hỏi lại từ đầu' },
    { k: 'ai', text: 'Dạ chào anh Gia Bảo, phòng gác mái view đồi thông bên em **850.000đ/đêm** ngày thường, **990.000đ/đêm** tối T6, T7 ạ. Đã gồm ăn sáng, lửa trại tối thứ 7.' },
    { k: 'ai', img: 'nha-go' },
    { k: 'ai', text: 'Anh cho em xin **ngày nhận và trả phòng** ạ, để em kiểm tra phòng còn trống cho mình nha?' },

    { k: 'cap', e: 'Khách trả lời thiếu', t: 'Khách chỉ nói "cuối tuần này", chưa rõ mấy đêm', s: 'AI hỏi lại cho đúng, không tự đoán ngày' },
    { k: 'kh', text: 'cuối tuần này e, 2 vc với bé 3t. view có thật ko, đêm lạnh ko e?' },
    { k: 'ai', text: 'Dạ view đồi thông thật ạ, đêm khoảng 15 độ, phòng có máy sưởi, chăn lông. Anh nhận phòng **tối T6 27/11** hay **sáng T7 28/11**, ở **mấy đêm** ạ? Em giữ đúng ngày cho anh nha.' },
    { k: 'kh', text: 'T6 tới CN e. Mà a lái xe từ SG lên, chắc 22h mới tới' },
    { k: 'ai', text: 'Dạ vậy là **2 đêm, nhận T6 27/11, trả CN 29/11** ạ. Anh tới 22h không sao, em **giữ phòng tới khuya** và gửi anh **mã tự nhận phòng** chiều T6. Bé 3 tuổi ở **miễn phí**, có nôi, có chỗ đậu ô tô sát nhà ạ.' },
    { k: 'cap', e: 'Hỏi đúng thứ còn thiếu', t: 'Có ngày rồi: AI hỏi loại phòng', s: 'Gửi ảnh từng phòng để khách chọn nhanh' },
    { k: 'ai', text: 'Anh lấy **phòng gác mái** 990.000đ/đêm hay **phòng gia đình có lò sưởi** 1.250.000đ/đêm ạ? Đi với bé thì phòng lò sưởi ấm và rộng hơn.' },
    { k: 'ai', imgs: ['phong-gac-mai', 'phong-lo-suoi'] },
    { k: 'kh', text: 'lấy phòng lò sưởi đi e' },
    { k: 'cap', e: 'Xin thông tin lên đơn', t: 'Chọn xong: AI xin họ tên, SĐT để giữ phòng' },
    { k: 'ai', text: 'Dạ em ghi **phòng gia đình có lò sưởi**, 2 đêm T6 27/11 – CN 29/11, tổng **2.500.000đ**. Anh gửi em **họ tên và SĐT** để em giữ phòng nha.' },

    // Khách im sau khi được xin tên, SĐT → màn hình phụ: gắn thẻ (3 hashtag quảng cáo + thẻ từ cuộc chat), bám đuổi 3 tin
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Chưa gửi SĐT: Preny tự gắn thẻ khách', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi theo thẻ', t: '3 tin ngắn: 15 phút, 3 tiếng, 20 tiếng', s: 'Chỉ nói về đúng phòng khách đã chọn' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T2 23/11/2026', d: 700 },
    { k: 'ai', text: 'Anh Gia Bảo ơi, em **giữ tạm phòng gia đình có lò sưởi** T6 27/11 – CN 29/11 cho anh rồi ạ. Anh gửi em tên, SĐT để em giữ chắc nha 😊' },
    { k: 'p', a: 'r1', d: 900 },
    { k: 'time', nhan: '3 tiếng sau', gio: '17:49', ngay: 'T2 23/11/2026', d: 700 },
    { k: 'ai', text: 'Em gửi anh ảnh thật khách chụp sáng nay nha 🌲 Một gia đình có bé 2 tuổi vừa ở phòng lò sưởi, khen bé ngủ ấm, sáng ra ban công ngắm mây.' },
    { k: 'ai', imgs: ['view-may', 'ban-cong', 'an-sang'] },
    { k: 'p', a: 'r2', d: 900 },
    { k: 'time', nhan: '20 tiếng sau', gio: '10:49', ngay: 'T3 24/11/2026', d: 700 },
    { k: 'ai', text: 'Cuối tuần này bên em còn **2 phòng gia đình** ạ. Anh chỉ cần gửi **họ tên, SĐT** là em lên đơn giữ phòng, tặng **set trà gừng** bên lửa trại tối T7 ⚡' },
    { k: 'p', a: 'r3', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 3, khách gửi tên, SĐT', s: 'AI kiểm tra ngay thông tin khách gửi' },
    { k: 'kh', text: 'Nguyễn Gia Bảo 0937264815 nha e' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'cap', e: 'Chốt đơn đặt phòng', t: 'Tự tổng hợp đơn: phòng, ngày ở, giờ tới, cọc' },
    { k: 'ai', text: 'Dạ anh kiểm tra lại đơn đặt phòng giúp em nha:\n– Phòng gia đình có lò sưởi · 2 đêm\n– Nhận T6 27/11 (tới khoảng 22h) · trả CN 29/11\n– 2 người lớn, 1 bé 3 tuổi · có nôi\n– Tổng: **2.500.000đ** · cọc 50% **1.250.000đ**\n– Khách đặt: Nguyễn Gia Bảo · 0937264815\nAnh xác nhận giúp em đơn này nha.', nut: 'Quản lý đơn hàng', d: 3400 },
    { k: 'cap', e: 'Xong', t: 'Khách chỉ cần nói "Ok e"' },
    { k: 'kh', text: 'Ok e' },
    { k: 'ai', text: 'Dạ em lên đơn đặt phòng và gửi anh thông tin chuyển khoản cọc liền nha ⚡', d: 1300 },

    // Chốt đơn → màn hình phụ: gửi đơn cho Facebook → đơn đặt phòng tự động → lễ tân xác nhận
    { k: 'cap', e: 'Gửi đơn về Facebook', t: 'Sự kiện mua hàng gửi ngay lên Facebook', s: 'Quảng cáo tối ưu theo đơn thật' },
    { k: 'panel', v: 'capi', d: 900 },
    { k: 'p', a: 'flow', d: 1500 }, { k: 'p', a: 'event', d: 1300 }, { k: 'p', a: 'ok', d: 2200 },
    { k: 'cap', e: 'Đơn đặt phòng tự động', t: 'Đơn tự lên Preny. Không cần ghi tay.' },
    { k: 'panel', v: 'don', d: 900 },
    { k: 'p', a: 'f1', d: 550 }, { k: 'p', a: 'f2', d: 550 }, { k: 'p', a: 'f3', d: 550 }, { k: 'p', a: 'f4', d: 550 },
    { k: 'p', a: 'cho', d: 900 },
    { k: 'cap', e: 'Lễ tân xác nhận', t: 'Báo lễ tân: bấm 1 lần là đơn lên', s: 'Người thật kiểm tra lại phòng, nôi, giờ tới' },
    { k: 'p', a: 'nv', d: 1700 }, { k: 'p', a: 'bam', d: 1100 },
    { k: 'p', a: 'xn', d: 3000 },
    { k: 'panel', v: null, d: 500 },

    // Đặt xong: tin cảm ơn kèm 5 dịch vụ đang giảm giá (deck.afterSale.sp của bài 1)
    { k: 'cap', e: 'Bán thêm sau đặt phòng', t: 'Cảm ơn khách, gửi kèm 5 dịch vụ đang giảm giá', s: 'Khách bấm đặt thêm ngay trong Messenger' },
    { k: 'ai', text: 'Dạ cảm ơn anh Gia Bảo nha 🌲 Phòng đã được xác nhận. Mấy dịch vụ này đang giảm giá cho khách đặt phòng, anh xem thử nha:' },
    { k: 'car', sp: [
        { img: 'lua-trai', ten: 'Set BBQ tối cho 3 người', gia: '405.000đ', cu: '450.000đ', giam: '-10%' },
        { img: 'view-may', ten: 'Tour săn mây sáng sớm', gia: '315.000đ', cu: '350.000đ', giam: '-10%' },
        { img: 'rung-thong', ten: 'Thuê xe máy 1 ngày', gia: '135.000đ', cu: '150.000đ', giam: '-10%' },
        { img: 'phong-gac-mai', ten: 'Trang trí phòng kỷ niệm', gia: '270.000đ', cu: '300.000đ', giam: '-10%' },
        { img: 'an-sang', ten: 'Ở thêm đêm thứ 3', gia: '875.000đ', cu: '1.250.000đ', giam: '-30%' },
      ], d: 5200 },

    // Chăm sóc qua Zalo: sau kỳ nghỉ (27–29/11). Không có tin nhắc trước ngày nhận phòng.
    { k: 'zalo', gio: '19:30', ngay: 'T2 30/11/2026', chip: 'Sau kỳ nghỉ', d: 1500 },
    { k: 'cap', e: 'Chăm sóc sau bán qua Zalo', t: 'Sau kỳ nghỉ: AI hỏi thăm cả nhà', s: 'Xin đánh giá ngay trong tin Zalo OA của homestay' },
    { k: 'zns', zns: {
        img: 'phong-lo-suoi', tieuDe: 'Anh Gia Bảo ơi, bé ngủ ở Đà Lạt có ấm không ạ?',
        noiDung: 'Nhà Gỗ Đồi Thông cảm ơn cả nhà đã nghỉ tại phòng gia đình có lò sưởi (đơn **#DT27113** · 27–29/11). Anh đánh giá giúp homestay nha!',
        nut: 'Đánh giá kỳ nghỉ',
      }, d: 4200 },
    { k: 'cap', e: 'ZBS · Được đặt nhiều', t: '1 tuần sau: gửi phòng được đặt nhiều qua Zalo', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'T2 07/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['a-frame', 'phong-gac-mai', 'lua-trai-2', 'ho-thong'], nhan: 'ĐƯỢC ĐẶT NHIỀU TUẦN NÀY', mau: '#F97316',
        tieuDe: '🔥 Phòng được đặt nhiều nhất tại Nhà Gỗ Đồi Thông',
        noiDung: '**Phòng gác mái view đồi thông**, combo 2 đêm cuối tuần và gói lửa trại nhóm bạn đang được khách chọn nhiều nhất tuần qua.',
        nut: 'Xem phòng trống',
      }, d: 4600 },
    { k: 'cap', e: 'ZBS · Ưu đãi khách cũ', t: '1 tuần sau nữa: gửi voucher cho lần nghỉ tới', s: 'Kéo khách quay lại đặt tiếp, không cần khách nhắn' },
    { k: 'zstamp', gio: '19:30', ngay: 'T2 14/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['nha-go', 'doi-che', 'phong-khach', 'rung-thong'], nhan: 'KHÁCH CŨ · GIẢM 10%',
        tieuDe: 'Tặng anh Gia Bảo voucher 10%',
        noiDung: 'Nhập mã **DOITHONG10** giảm **10%** mọi loại phòng cho lần nghỉ tiếp theo. Hạn dùng đến 30/06/2027.',
        nut: 'Đặt phòng ngay',
      }, d: 4800 },

    { k: 'tongket', d: 8500 },
    { k: 'outro', d: 5200 },
  ],
  // Slide tổng kết cuối video (theo slide "Chốt lại 5 ô" nhóm thương mại điện tử; bám đuổi = 5 tin trong 7 ngày)
  tongKet: { tieuDe: 'Quy trình Preny AI giúp', em: 'tăng tỷ lệ chốt đơn', cot: [
    { ten: 'Khách hàng', icon: 'users', dong: ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến'] },
    { ten: 'AI Chatbot', icon: 'bot', dong: ['Phản hồi nhanh tức thì', 'Kêu gọi khách hàng đặt phòng', 'Lấy thông tin và chốt đơn'] },
    { ten: 'Bám đuổi', icon: 'bell', dong: ['Gửi 5 tin nhắn trong 7 ngày để bám đuổi khách hàng'] },
    { ten: 'Chốt đơn', icon: 'check', dong: ['Lên đơn đặt phòng', 'Gửi sự kiện mua hàng lên Facebook'] },
    { ten: 'Mua lại', icon: 'refresh', dong: ['Tự động gửi 1 tin nhắn mỗi tuần qua FB và Zalo', 'Phòng được đặt nhiều, ưu đãi, mùa hoa'] },
  ] },
  panels: {
    tag: { av: 'GB', ten: 'Nguyễn Gia Bảo', sub: 'Messenger · bình luận quảng cáo Homestay nhà gỗ Đà Lạt',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#homestaydalat', 'qt hot'], ['#nhagodoithong', 'qt hot'], ['#sanmay', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#PhongLoSuoi', 'qt']]]],
      im: 'Khách im từ 14:52, sau khi được xin họ tên, SĐT',
      rule: { lb: 'Bám đuổi theo thẻ #homestaydalat', tieuDe: '3 tin ngắn về đúng phòng khách đã chọn',
              dong: [['15 phút', 'Đã giữ tạm phòng lò sưởi T6–CN'], ['3 tiếng', 'Ảnh thật view mây, gia đình có bé'], ['20 tiếng', 'Còn 2 phòng, chỉ cần tên, SĐT']] },
      reply: 'Khách gửi họ tên, SĐT · dừng bám đuổi' },
    capi: { tieuDe: 'Gửi đơn đặt phòng cho Facebook', event: 'Purchase', nhan: 'SỰ KIỆN MUA HÀNG', giaTri: '2.500.000đ', pk: 'Purchase · 2.500.000đ',
      dong: [['Đơn đặt phòng', '#DT27113 · Phòng gia đình có lò sưởi · 2 đêm'], ['Nguồn khách', 'Bình luận quảng cáo Homestay Đà Lạt → Messenger'], ['Giá trị', '2.500.000 VND'], ['Event ID', 'DT27113-PURCHASE (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện mua hàng' },
  },
  donHang: {
    loai: 'Đơn đặt phòng', ma: '#DT27113', spNhan: 'Phòng',
    sp: 'Phòng gia đình có lò sưởi', bien: '2 đêm · 2 người lớn, 1 bé 3 tuổi · có nôi', img: 'phong-lo-suoi', gia: '2.500.000đ',
    phi: ['Đặt cọc', '1.250.000đ (50%)'], nguoiNhan: 'Khách đặt · Số điện thoại', dcNhan: 'Ngày nhận phòng · Giờ tới',
    nv: { ten: 'Lễ tân Thanh Trúc', av: 'TT' },
    ten: 'Nguyễn Gia Bảo', sdt: '0937264815', dc: 'T6 27/11/2026 · tới khoảng 22:00 (tự nhận phòng bằng mã) · trả phòng CN 29/11', gio: '11:05 · 24/11/2026',
  },
};
