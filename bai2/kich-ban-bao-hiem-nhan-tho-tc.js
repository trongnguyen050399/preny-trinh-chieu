/* Kịch bản video demo NGANG 16:9: BẢO HIỂM NHÂN THỌ (nhóm cân nhắc nhiều), làm 23/11/2026 theo người dùng:
   "Cân nhắc: Bán bảo hiểm nhân thọ".
   Mạch cnn người dùng chốt 18/11/2026 (mẫu thẩm mỹ viện): 1 cảnh, KHÔNG có bình luận, chỉ 1 sản phẩm (gói bảo vệ trụ cột + quỹ học vấn).
   Mạch: logo → quảng cáo → khách bấm "Gửi tin nhắn", hỏi → AI gửi đúng ảnh quảng cáo, giới thiệu gói
   → hỏi tuổi, số con, ưu tiên → 35 tuổi, 2 bé, hỏi đóng tháng bao nhiêu, có lời không, sợ khó chi trả
   → AI: không báo phí chung chung, không hứa lãi, chi trả theo điều khoản hợp đồng, 21 ngày cân nhắc, mời gọi video 30 phút,
   xin tên + SĐT → khách im → gắn thẻ + bám đuổi 5 tin → khách hẹn tư vấn → xin tên, SĐT
   → báo tư vấn viên ngay → gửi Lead lên Facebook → Zalo 3 tin → tổng kết → logo.
   Không ký tự động: tư vấn viên lập bảng minh họa rồi khách mới quyết định. Không có tin nhắc trước giờ hẹn.
   Không khuyến mại, quà tặng, giảm phí. Không dùng tên công ty bảo hiểm thật.
   Nội dung lấy từ bài 1 (demo/kich-ban/bao-hiem-nhan-tho-tc.js): đơn vị, khách, SĐT, feedback là dữ liệu minh họa.
   Ảnh: Unsplash có sẵn trong máy (ảnh thật, không phải khách của đơn vị). */
window.VN_KB = {
  ten: 'Bảo hiểm nhân thọ video ngang',
  ketSub: 'Để AI tư vấn và hẹn khách gặp tư vấn viên cho đội của bạn',
  shop: { ten: 'Tư Vấn Bảo Hiểm Gia An', av: 'GA', mau: '#0E7490', sub: 'Thường trả lời ngay' },
  anh: {
    'bo-con': '../assets/img/u/1657664072470-99b02c2143f2_800x800.jpg',   // bố con ngồi sofa (ảnh quảng cáo)
    'gia-dinh': '../assets/img/u/1586865972793-c07ba4785d85_800x800.jpg', // mẹ và 2 bé
    'bo-be': '../assets/img/u/1536541667880-3945b221a85d_800x800.jpg',    // bố hôn bé
    'bo-con-2': '../assets/img/u/1609220136736-443140cffec6_800x800.jpg', // bố bế 2 con
    'tu-van': '../assets/img/u/1650784854382-6d3b15e07b94_800x800.jpg',   // tư vấn viên cầm máy tính bảng
    'tu-van-2': '../assets/img/u/1581065178047-8ee15951ede6_800x800.jpg', // tư vấn viên áo vest
    'ky-hd': '../assets/img/u/1664463760781-f159dfe3af30_800x800.jpg',    // vợ chồng ký giấy tờ
    'gap-mat': '../assets/img/u/1573496267526-08a69e46a409_800x800.jpg',  // 2 người trao đổi bên bàn
    'bac-si': '../assets/img/u/1758691462430-81160850496c_800x800.jpg',   // bác sĩ ghi hồ sơ
    'ky-giay': '../assets/img/u/1562564055-71e051d33c19_800x800.jpg',     // ký giấy tờ
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= QUẢNG CÁO → MESSENGER (1 cảnh, không có bình luận, chỉ 1 gói) ================= */
    { k: 'canh', nhan: 'Khách từ quảng cáo → Messenger', gio: '21:05' },
    { k: 'ad', ad: {
        img: 'bo-con', nhan: 'MESSENGER', tieuDe: 'Bảo vệ trụ cột · Quỹ học cho con', nut: 'Gửi tin nhắn',
        text: 'Bố là trụ cột, con đang tuổi đi học? 🛡️ Tư vấn 1-1 miễn phí, lập bảng minh họa riêng theo nhu cầu nhà mình. Tư vấn viên có chứng chỉ hành nghề, 21 ngày cân nhắc sau khi nhận hợp đồng. #baohiemgiadinh #quyhocchocon #tuvanmienphi',
      }, d: 1500 },
    { k: 'cap', e: 'Quảng cáo Facebook', t: 'Khách bấm "Gửi tin nhắn" từ quảng cáo', s: 'Hỏi gì, AI trả lời ngay lập tức' },
    { k: 'tap', d: 1100 },
    { k: 'ms', ref: { loai: 'ad', img: 'bo-con', dong1: 'Minh Khoa đã trả lời một quảng cáo', dong2: 'Bảo vệ trụ cột · Quỹ học cho con' }, gio: '21:06', d: 900 },
    { k: 'kh', text: 'Bảo hiểm cho bố với con tư vấn sao em?' },
    { k: 'cap', e: 'Khách hỏi', t: 'AI gửi đúng ảnh trên quảng cáo, giới thiệu gói', s: 'Tư vấn viên có chứng chỉ hành nghề' },
    { k: 'ai', text: 'Dạ chào anh Khoa, bên em tư vấn gói **bảo vệ trụ cột gia đình** kết hợp **quỹ học vấn cho con**, tư vấn viên có chứng chỉ hành nghề ạ.' },
    { k: 'ai', img: 'bo-con' },
    { k: 'cap', e: 'Hỏi đúng nhu cầu', t: 'Hỏi tuổi, số con, ưu tiên bảo vệ hay quỹ học', s: 'Để tư vấn đúng cho từng gia đình' },
    { k: 'ai', text: 'Anh năm nay bao nhiêu tuổi, nhà mình mấy bé, anh muốn ưu tiên **bảo vệ thu nhập** hay **để dành học cho con** ạ?' },
    { k: 'kh', text: 'a 35t, 2 bé 6t với 3t, vợ làm vp. muốn có cái bảo vệ cho a với để dành tiền học cho tụi nhỏ. đóng tháng bn e? có lời ko? nghe nói bh khó chi trả lắm' },
    { k: 'cap', e: 'Mời hẹn tư vấn', t: 'Không báo phí chung chung, không hứa lãi', s: 'Chi trả theo hợp đồng, 21 ngày cân nhắc' },
    { k: 'ai', text: 'Dạ phí tùy **tuổi, sức khỏe và số tiền bảo hiểm** anh chọn nên em không dám báo số chung chung ạ. Phần quỹ học nếu có đầu tư thì lãi **không được đảm bảo**, em không hứa lời. Quyền lợi chi trả theo đúng **điều khoản hợp đồng** anh nha.' },
    { k: 'ai', text: 'Nhận hợp đồng xong anh còn **21 ngày cân nhắc**, đổi ý được hoàn phí theo quy định ạ. Anh chị dành **30 phút gọi video Zalo** với tư vấn viên, tư vấn viên lập **bảng minh họa riêng**, không ký ngay. Anh cho em xin **tên và SĐT** để giữ lịch nha 🛡️' },

    // Khách im → màn hình phụ: gắn thẻ (hashtag quảng cáo + thẻ từ cuộc chat), bám đuổi 5 tin
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Preny tự gắn thẻ nhu cầu của khách', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi 5 tin', t: '5 tin: 15 phút, rồi cách 1 ngày, 1 ngày, 1 ngày, 2 ngày', s: '3 lớp bảo vệ, khách được chi trả, 21 ngày cân nhắc, quy trình, giữ lịch' },
    { k: 'time', nhan: '15 phút sau', gio: '21:25', ngay: 'T2 23/11/2026', d: 700 },
    { k: 'ai', text: 'Anh Khoa ơi, em tóm tắt **3 lớp bảo vệ** các gia đình có con nhỏ hay cần nha 🛡️' },
    { k: 'ai', imgs: ['bo-con-2', 'gia-dinh', 'bo-be'] },
    { k: 'p', a: 'r1', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '21:25', ngay: 'T3 24/11/2026', d: 700 },
    { k: 'ai', text: 'Đây là chia sẻ của một anh khách bên em năm ngoái ạ 💬' },
    { k: 'ai', review: { av: 'MT', ten: 'Minh Tuấn', sub: 'đã đánh giá Tư Vấn Bảo Hiểm Gia An', mau: '#F59E0B',
        text: 'Lúc đầu mình cũng sợ khó chi trả. Bé nhà mình nằm viện 4 ngày, mình nộp hồ sơ qua app, khoảng 1 tuần là nhận tiền viện phí theo hợp đồng.' } },
    { k: 'p', a: 'r2', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '21:25', ngay: 'T4 25/11/2026', d: 700 },
    { k: 'ai', img: 'ky-hd' },
    { k: 'ai', checks: { tieuDe: 'Mấy điều anh nên biết trước khi tham gia ạ:', dong: [
        '**21 ngày cân nhắc** sau khi nhận hợp đồng, đổi ý được hoàn phí theo quy định', 'Quyền lợi và điều khoản loại trừ ghi rõ trong **hợp đồng**', 'Tư vấn viên có **chứng chỉ hành nghề**, giải thích từng điều khoản'] } },
    { k: 'p', a: 'r3', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '21:25', ngay: 'T5 26/11/2026', d: 700 },
    { k: 'ai', text: 'Buổi tư vấn bên em là **nghe nhu cầu nhà mình → bảng minh họa 2 phương án → hỏi đáp**, khoảng 30 phút. Anh chị chưa ưng thì chưa ký, không ép ạ 😊' },
    { k: 'ai', img: 'tu-van' },
    { k: 'p', a: 'r4', d: 800 },
    { k: 'time', nhan: '2 ngày sau', gio: '21:25', ngay: 'T7 28/11/2026', d: 700 },
    { k: 'ai', text: 'Tối Chủ nhật 29/11 chị Ngọc bên em còn vài khung giờ gọi video, anh muốn em giữ lịch cho anh chị không ạ?' },
    { k: 'p', a: 'r5', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 5, khách hẹn gọi video tư vấn', s: 'AI giữ khung giờ, xin SĐT ngay' },
    { k: 'kh', text: 'tối CN này 2 vc rảnh, gọi video đc e' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'ai', text: 'Dạ được ạ, em giữ khung **19h30 tối Chủ nhật 29/11** gọi video Zalo. Anh cho em xin **tên và SĐT có Zalo** để tư vấn viên gọi nha 🛡️' },
    { k: 'cap', e: 'Lấy SĐT', t: 'Khách để lại tên, SĐT', s: 'Đây là lúc AI chốt: chuyển khách cho người thật' },
    { k: 'kh', text: 'Khoa, 0938 615 204 nha e' },
    { k: 'ai', text: 'Dạ em giữ lịch **19h30 tối CN 29/11** gọi video Zalo cho anh Khoa rồi ạ. Chị Ngọc bên tư vấn sẽ nhắn anh xác nhận và hỏi thêm vài thông tin sức khỏe để chuẩn bị bảng minh họa nha 🛡️', d: 1800 },

    // Có SĐT → màn hình phụ: báo tư vấn viên ngay (không ký tự động) → gửi Lead lên Facebook
    { k: 'cap', e: 'Báo ngay tư vấn viên', t: 'Có SĐT: báo tư vấn viên nhận khách ngay', s: 'Không ký tự động: tư vấn xong khách mới quyết định' },
    { k: 'panel', v: 'sale', d: 800 },
    { k: 'p', a: 's1', d: 700 }, { k: 'p', a: 's2', d: 500 }, { k: 'p', a: 's3', d: 500 }, { k: 'p', a: 's4', d: 600 },
    { k: 'p', a: 's5', d: 1600 }, { k: 'p', a: 's6', d: 2600 },
    { k: 'cap', e: 'Gửi Lead về Facebook', t: 'Khách để lại SĐT: gửi sự kiện Lead lên Facebook', s: 'Quảng cáo tìm thêm khách giống khách thật' },
    { k: 'panel', v: 'capi', d: 900 },
    { k: 'p', a: 'flow', d: 1500 }, { k: 'p', a: 'event', d: 1300 }, { k: 'p', a: 'ok', d: 3200 },
    { k: 'panel', v: null, d: 600 },

    // Sau buổi tư vấn, qua Zalo: 3 tin (bảng minh họa 2 phương án; cách nộp hồ sơ chi trả; buổi chia sẻ online miễn phí)
    { k: 'cap', e: 'Chăm sóc sau buổi tư vấn', t: 'Tối hôm tư vấn: gửi lại bảng minh họa', s: 'Tin gửi qua Zalo OA của đơn vị' },
    { k: 'zalo', gio: '21:00', ngay: 'CN 29/11/2026', chip: 'Sau buổi tư vấn', d: 1500 },
    { k: 'zns', zns: { img: 'gap-mat', sao: false, tieuDe: 'Bảng minh họa cho gia đình anh Khoa',
        noiDung: 'Gia An gửi lại anh 2 phương án chị Ngọc trao đổi tối nay:',
        dong: ['**Phương án A** · tập trung bảo vệ thu nhập trụ cột', '**Phương án B** · bảo vệ trụ cột + quỹ học vấn cho 2 bé', 'Phí, quyền lợi chi tiết: theo bảng minh họa đính kèm'],
        nut: 'Nhắn tư vấn viên' }, d: 5000 },
    { k: 'cap', e: 'Chia sẻ quyền lợi', t: '1 tuần sau: cách nộp hồ sơ chi trả', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '10:00', ngay: 'T7 05/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: { banner: ['bac-si', 'bo-be', 'gia-dinh', 'ky-giay'], nhan: 'QUYỀN LỢI CỦA BẠN', mau: '#F97316',
        tieuDe: 'Nằm viện thì nộp hồ sơ chi trả thế nào?',
        noiDung: 'Chụp **hóa đơn viện phí** và **giấy ra viện**, nộp qua app là xong. Quyền lợi theo đúng điều khoản hợp đồng.',
        nut: 'Xem hướng dẫn' }, d: 4600 },
    { k: 'cap', e: 'Mời buổi chia sẻ online', t: 'Mời buổi chia sẻ miễn phí cho phụ huynh', s: 'Kéo khách quay lại trao đổi với tư vấn viên' },
    { k: 'zstamp', gio: '19:30', ngay: 'T6 11/12/2026', chip: 'Chia sẻ online', d: 800 },
    { k: 'zns', zns: { banner: ['bo-con', 'bo-con-2', 'gia-dinh', 'tu-van-2'], nhan: 'CHIA SẺ ONLINE · MIỄN PHÍ', mau: '#0E7490',
        tieuDe: 'Lập kế hoạch tài chính cho con',
        noiDung: 'Buổi chia sẻ online **20h tối T7 19/12/2026**, khoảng 45 phút: cách tính quỹ học cho con, đọc hiểu quyền lợi hợp đồng, hỏi đáp với tư vấn viên.',
        nut: 'Đăng ký tham gia' }, d: 4800 },

    { k: 'tongket', d: 8500 },
    { k: 'outro', d: 5200 },
  ],
  // Slide tổng kết cuối video: lấy từ deck.chotLai của bài 1, theo mẫu thẩm mỹ viện (cột 3 là "Bám đuổi", 5 tin trong 7 ngày)
  tongKet: { tieuDe: 'Quy trình Preny AI giúp', em: 'tăng tỷ lệ hẹn tư vấn', cot: [
    { ten: 'Khách hàng', icon: 'users', dong: ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến'] },
    { ten: 'AI Chatbot', icon: 'bot', dong: ['Phản hồi nhanh tức thì', 'Hỏi đúng nhu cầu gia đình', 'Không báo phí chung chung, không hứa lãi', 'Lấy SĐT, hẹn tư vấn'] },
    { ten: 'Bám đuổi', icon: 'heart', dong: ['Gửi 5 tin nhắn trong 7 ngày: 3 lớp bảo vệ, khách được chi trả, 21 ngày cân nhắc, quy trình'] },
    { ten: 'Tư vấn', icon: 'calendar', dong: ['Tư vấn viên gọi video 1-1, bảng minh họa 2 phương án', 'Khách chọn phương án, ký hợp đồng'] },
    { ten: 'Giới thiệu', icon: 'refresh', dong: ['Mời buổi chia sẻ online, sản phẩm bổ trợ cho khách cũ và người quen qua FB và Zalo'] },
  ] },
  panels: {
    tag: { av: 'MK', ten: 'Ngô Minh Khoa', sub: 'Messenger · từ quảng cáo Bảo vệ trụ cột gia đình',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#baohiemgiadinh', 'qt hot'], ['#quyhocchocon', 'qt hot'], ['#tuvanmienphi', 'ng']]],
             ['Thẻ từ cuộc chat', [['#hoiphi', 'ht'], ['#QuyHocVan', 'qt']]]],
      im: 'Khách im từ 21:09, chưa để lại SĐT',
      rule: { lb: 'Bám đuổi theo thẻ #baohiemgiadinh', tieuDe: 'Bám đuổi bằng 5 tin ngắn',
              dong: [['15 phút', '3 lớp bảo vệ cho gia đình có con nhỏ'], ['1 ngày', 'Feedback khách được chi trả viện phí'], ['1 ngày', '21 ngày cân nhắc, quyền lợi theo hợp đồng'],
                     ['1 ngày', 'Quy trình buổi tư vấn, không ép ký'], ['2 ngày', 'Mời giữ lịch gọi video Chủ nhật']] },
      reply: 'Khách hẹn tư vấn Chủ nhật · dừng bám đuổi' },
    sale: { tieuDe: 'Báo khách mới cho Tư vấn viên', ntTieuDe: 'Khách mới vừa để lại SĐT', khNhan: 'Khách hàng · Số điện thoại', lichNhan: 'Lịch tư vấn',
      nguon: 'Quảng cáo Bảo vệ trụ cột gia đình → Messenger', ten: 'Ngô Minh Khoa', sdt: '0938 615 204',
      nhuCau: '35 tuổi, 2 bé 6 và 3 tuổi, muốn bảo vệ thu nhập + quỹ học cho con', lich: 'Gọi video Zalo · 19:30 Chủ nhật 29/11 · cả 2 vợ chồng',
      the: [['#baohiemgiadinh', 'qt'], ['#QuyHocVan', 'qt'], ['Đã cho SĐT', 'ok']],
      sale: { av: 'CN', ten: 'Chị Ngọc · Tư vấn viên bảo hiểm', sub: 'Đang trực · nhận khách tự động' }, ok: 'Chị Ngọc đã nhận khách, nhắn xác nhận ngay' },
    capi: { tieuDe: 'Gửi khách tiềm năng cho Facebook', event: 'Lead', nhan: 'SỰ KIỆN KHÁCH TIỀM NĂNG', giaTri: 'Có SĐT', pk: 'Lead · khách để lại SĐT',
      dong: [['Khách', 'Ngô Minh Khoa · đã để lại SĐT'], ['Nguồn khách', 'Quảng cáo Bảo vệ trụ cột gia đình → Messenger'], ['Nhu cầu', 'Hẹn tư vấn 1-1, bảo vệ + quỹ học vấn'], ['Event ID', 'GA2811-LEAD (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện Lead', khong: 'Không gửi Purchase khi khách chưa ký hợp đồng.' },
  },
};
