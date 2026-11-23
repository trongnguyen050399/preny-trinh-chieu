/* Kịch bản video demo NGANG 16:9: NHÀ HÀNG BUFFET (nhóm cân nhắc nhiều), làm 23/11/2026 theo người dùng: "Nhà hàng buffet."
   Mạch cnn người dùng chốt 18/11/2026 (mẫu thẩm mỹ viện): 1 cảnh, KHÔNG có bình luận, chỉ 1 dịch vụ (đặt phòng riêng ăn buffet sinh nhật).
   Mạch: logo → quảng cáo buffet nướng lẩu → khách bấm "Gửi tin nhắn", hỏi giá → AI gửi đúng ảnh quảng cáo + giá 2 gói
   → hỏi dịp, số người lớn/trẻ em, ngày giờ → sinh nhật vợ 12 người có 2 bé, tối T7 28/11, hỏi phòng riêng, bánh kem, đỗ ô tô
   → AI: phòng riêng 10–16 người, bánh kem không thu phí, trang trí miễn phí, bãi đỗ ô tô, chính sách trẻ em; xin tên + SĐT
   → khách im → gắn thẻ + bám đuổi 5 tin trước ngày 28/11 → khách nhờ giữ phòng → xin tên, SĐT, giờ, chiều cao bé
   → báo quản lý nhà hàng xác nhận → gửi Lead lên Facebook → Zalo 3 tin sau bữa ăn → tổng kết → logo.
   Không lên đơn tự động: khách tới ăn mới thanh toán. Không có tin nhắc trước giờ tới ăn.
   Nội dung lấy từ bài 1 (demo/kich-ban/buffet-tc.js): nhà hàng, giá, khách, SĐT, feedback, ưu đãi là dữ liệu minh họa.
   Ảnh: Unsplash có sẵn trong máy (ảnh thật, không phải nhà hàng của khách). */
window.VN_KB = {
  ten: 'Nhà hàng buffet video ngang',
  ketSub: 'Để AI tư vấn gói buffet và giữ bàn cho nhà hàng của bạn',
  shop: { ten: 'Buffet Nướng Lẩu Than Hồng', av: 'TH', mau: '#9A3412', sub: 'Thường trả lời ngay' },
  anh: {
    'nuong': '../assets/img/u/1708388064672-6536507fdf6e_800x800.jpg',        // vỉ nướng than (ảnh quảng cáo)
    'nuong-2': '../assets/img/u/1708388064360-a561ca19c0ff_800x800.jpg',      // gắp thịt trên vỉ nướng
    'bo-wagyu': '../assets/img/u/1709433420612-8cad609df914_800x800.jpg',     // đĩa bò vân mỡ
    'lau': '../assets/img/u/1784429611794-aecb6ebaef48_800x800.jpg',          // nồi lẩu
    'hai-san': '../assets/img/u/1651323018466-b36b7df1d2b1_800x800.jpg',      // quầy hải sản
    'oc': '../assets/img/u/1679694140422-aecfd3d5dd0b_800x800.jpg',           // hàu, ốc trên đá
    'quay-buffet': '../assets/img/u/1769638913840-2ca96d90e8a9_800x800.jpg',  // quầy buffet nồi hâm
    'quay-buffet-2': '../assets/img/u/1662982696492-057328dce48b_800x800.jpg',// quầy buffet món nguội
    'khong-gian': '../assets/img/u/1778650451432-f08ed467e2c4_800x800.jpg',   // không gian nhà hàng
    'khong-gian-2': '../assets/img/u/1716177489813-ee2fd5b25355_800x800.jpg', // sảnh đèn chùm
    'nhom-ban': '../assets/img/u/1765582870011-ff3cfdb06700_800x800.jpg',     // nhóm bạn quây quần
    'nhom-ban-2': '../assets/img/u/1786113706143-96b4a62ebb71_800x800.jpg',   // nhóm khách ăn nướng
    'trang-mieng': '../assets/img/u/1563245372-169c439d29b5_800x800.jpg',     // khay bánh tráng miệng
    'dimsum': '../assets/img/u/1563245370-63ffc97abdbd_800x800.jpg',          // xửng dimsum
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= QUẢNG CÁO → MESSENGER (1 cảnh, không có bình luận, chỉ đặt phòng buffet sinh nhật) ================= */
    { k: 'canh', nhan: 'Khách từ quảng cáo → Messenger', gio: '20:10' },
    { k: 'ad', ad: {
        img: 'nuong', nhan: 'MESSENGER', tieuDe: 'Buffet nướng lẩu · Từ 349.000đ', nut: 'Gửi tin nhắn',
        text: 'Buffet nướng lẩu hơn 60 món 🔥 Gói nướng lẩu 349.000đ, gói hải sản 499.000đ. Phòng riêng 10–16 người, trang trí sinh nhật miễn phí, bãi đỗ ô tô rộng. #buffetnuonglau #sinhnhat #phongrieng',
      }, d: 1500 },
    { k: 'cap', e: 'Quảng cáo Facebook', t: 'Khách bấm "Gửi tin nhắn" từ quảng cáo', s: 'Hỏi gì, AI trả lời ngay lập tức' },
    { k: 'tap', d: 1100 },
    { k: 'ms', ref: { loai: 'ad', img: 'nuong', dong1: 'Minh Quang đã trả lời một quảng cáo', dong2: 'Buffet nướng lẩu · Từ 349.000đ' }, gio: '20:11', d: 900 },
    { k: 'kh', text: 'Buffet bên em bao nhiêu 1 người vậy?' },
    { k: 'cap', e: 'Khách hỏi giá', t: 'AI gửi đúng ảnh trên quảng cáo kèm giá 2 gói', s: 'Tư vấn gói hợp nhu cầu' },
    { k: 'ai', text: 'Dạ chào anh Quang, bên em có **gói nướng lẩu 349.000đ** và **gói hải sản 499.000đ/người lớn**, hơn 60 món ạ.' },
    { k: 'ai', img: 'nuong' },
    { k: 'cap', e: 'Hỏi đúng nhu cầu', t: 'Hỏi dịp, số người lớn, trẻ em, ngày giờ', s: 'Để giữ đúng bàn, đúng phòng' },
    { k: 'ai', text: 'Anh đi **dịp gì**, khoảng **mấy người lớn, mấy bé** và định **tới ngày nào** ạ, để em xếp bàn cho hợp?' },
    { k: 'kh', text: 'sinh nhật vợ a, tầm 12 người có 2 bé, tối T7 28/11. có phòng riêng ko e? mang bánh kem vào đc ko, có chỗ đỗ ô tô ko?' },
    { k: 'cap', e: 'Tư vấn phòng riêng', t: 'Trả lời đủ: phòng, bánh kem, đỗ xe, trẻ em', s: 'Rồi xin tên, SĐT để giữ phòng' },
    { k: 'ai', text: 'Dạ có ạ! Bên em có **phòng riêng 10–16 người**, **trang trí sinh nhật miễn phí**, anh mang bánh kem vào **không thu phí**, có **bãi đỗ ô tô** ngay cạnh nhà hàng 🎂' },
    { k: 'ai', text: 'Bé **dưới 1m miễn phí**, bé 1m–1m3 giảm 50% ạ. Tối Thứ 7 phòng riêng đặt nhanh, anh cho em xin **tên và SĐT** để em giữ phòng cho nhà mình nha 😊' },

    // Khách im → màn hình phụ: gắn thẻ (hashtag quảng cáo + thẻ từ cuộc chat), bám đuổi 5 tin trước ngày 28/11
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Preny tự gắn thẻ dịp và số người khách cần', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi 5 tin', t: '5 tin trong 4 ngày, xong trước ngày sinh nhật', s: 'Quầy buffet thật, feedback, menu, phòng riêng, giữ phòng' },
    { k: 'time', nhan: '15 phút sau', gio: '20:28', ngay: 'T2 23/11/2026', d: 700 },
    { k: 'ai', text: 'Anh Quang ơi, em gửi anh ảnh **quầy buffet thật** bên em chụp tối nay nha 🔥' },
    { k: 'ai', imgs: ['quay-buffet', 'hai-san', 'nuong-2'] },
    { k: 'p', a: 'r1', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '11:30', ngay: 'T3 24/11/2026', d: 700 },
    { k: 'ai', text: 'Đây là chia sẻ của một anh khách vừa tổ chức sinh nhật cho vợ ở bên em ạ 💬' },
    { k: 'ai', review: { av: 'ĐL', ten: 'Đức Long', sub: 'đã đánh giá Buffet Nướng Lẩu Than Hồng', mau: '#F59E0B',
        text: 'Nhà mình 14 người, được phòng riêng trang trí sẵn bóng bay, nhân viên còn hát chúc mừng. Hải sản tươi, bé con ăn dimsum mãi không chán.' } },
    { k: 'p', a: 'r2', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '11:30', ngay: 'T4 25/11/2026', d: 700 },
    { k: 'ai', img: 'bo-wagyu' },
    { k: 'ai', checks: { tieuDe: 'Gói hải sản 499k bên em có những món này ạ:', dong: [
        '**Tôm sú, sò điệp, hàu nướng mỡ hành, ốc hương**', '**Bò Mỹ, ba chỉ, sườn non** nướng than hoa', '**Lẩu 4 vị**, dimsum, tráng miệng cho bé'] } },
    { k: 'p', a: 'r3', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '11:30', ngay: 'T5 26/11/2026', d: 700 },
    { k: 'ai', text: 'Phòng riêng bên em **trang trí bóng bay, phông chúc mừng miễn phí**, nhóm từ 10 người **không phụ thu phòng**. Giữ phòng không cần đặt cọc anh nha 😊' },
    { k: 'ai', img: 'khong-gian' },
    { k: 'p', a: 'r4', d: 800 },
    { k: 'time', nhan: '8 tiếng sau', gio: '19:30', ngay: 'T5 26/11/2026', d: 700 },
    { k: 'ai', text: 'Tối Thứ 7 28/11 bên em còn **2 phòng riêng** cho nhóm 12 người, anh muốn em giữ một phòng cho sinh nhật chị nhà không ạ?' },
    { k: 'p', a: 'r5', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 5, khách nhờ giữ phòng', s: 'AI xin đủ thông tin ngay' },
    { k: 'kh', text: 'Giữ giúp a 1 phòng tối T7 nhé e' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'ai', text: 'Dạ được ạ! Anh cho em xin **tên, SĐT, giờ tới**, và **2 bé cao khoảng bao nhiêu** để em tính suất cho đúng nha 🎂' },
    { k: 'cap', e: 'Lấy thông tin giữ bàn', t: 'Tên, SĐT, giờ, số người lớn, trẻ em', s: 'Đây là lúc AI chốt: chuyển khách cho người thật' },
    { k: 'kh', text: 'Quang, 0912 735 486. 18h30, 10 người lớn, 1 bé 0.9m 1 bé 1.2m. lấy gói hải sản nhé' },
    { k: 'ai', text: 'Dạ em giữ **phòng VIP 3 lúc 18h30 Thứ 7 28/11** cho anh Quang rồi ạ: 10 người lớn gói hải sản, bé 0,9m miễn phí, bé 1,2m giảm 50%, trang trí sinh nhật sẵn. Chị Hà quản lý nhà hàng sẽ gọi anh xác nhận nha 🎂', d: 1800 },

    // Có thông tin → màn hình phụ: báo quản lý xác nhận (không lên đơn tự động) → gửi Lead lên Facebook
    { k: 'cap', e: 'Báo ngay quản lý', t: 'Đủ thông tin: báo quản lý xác nhận, chuẩn bị phòng', s: 'Không lên đơn tự động: khách tới ăn mới thanh toán' },
    { k: 'panel', v: 'sale', d: 800 },
    { k: 'p', a: 's1', d: 700 }, { k: 'p', a: 's2', d: 500 }, { k: 'p', a: 's3', d: 500 }, { k: 'p', a: 's4', d: 600 },
    { k: 'p', a: 's5', d: 1600 }, { k: 'p', a: 's6', d: 2600 },
    { k: 'cap', e: 'Gửi Lead về Facebook', t: 'Khách để lại SĐT: gửi sự kiện Lead lên Facebook', s: 'Quảng cáo tìm thêm khách giống khách thật' },
    { k: 'panel', v: 'capi', d: 900 },
    { k: 'p', a: 'flow', d: 1500 }, { k: 'p', a: 'event', d: 1300 }, { k: 'p', a: 'ok', d: 3200 },
    { k: 'panel', v: null, d: 600 },

    // Sau bữa ăn, qua Zalo: 3 tin (cảm ơn + xin đánh giá; ưu đãi khách quay lại; ưu đãi tiệc nhóm cuối năm)
    { k: 'cap', e: 'Chăm sóc sau bữa ăn', t: 'Tối hôm đó: cảm ơn, xin đánh giá', s: 'Tin sau bữa ăn gửi qua Zalo OA của nhà hàng' },
    { k: 'zalo', gio: '21:30', ngay: 'T7 28/11/2026', chip: 'Sau bữa tiệc sinh nhật', d: 1500 },
    { k: 'zns', zns: { img: 'nhom-ban', tieuDe: 'Anh Quang ơi, cả nhà ăn có vừa miệng không ạ?',
        noiDung: 'Than Hồng cảm ơn anh đã tổ chức sinh nhật chị nhà ở bên em. Anh chấm giúp em vài sao để bên em phục vụ tốt hơn nha 💛',
        nut: 'Đánh giá nhà hàng' }, d: 4600 },
    { k: 'cap', e: 'Mời quay lại', t: '1 tuần sau: ưu đãi khách quen, món mới', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '10:00', ngay: 'T7 05/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: { banner: ['oc', 'lau', 'dimsum', 'nuong-2'], nhan: 'KHÁCH QUEN · GIẢM 10%', mau: '#F97316',
        tieuDe: 'Món mới tháng 12: hàu nướng phô mai, lẩu nấm',
        noiDung: 'Gửi anh mã **THANHONG10** giảm **10%** hóa đơn buffet từ 4 người cho lần ghé tiếp theo, dùng đến hết 31/01/2027.',
        nut: 'Xem món mới' }, d: 4600 },
    { k: 'cap', e: 'Tiệc nhóm cuối năm', t: 'Gần Tết: mời đặt tiệc tất niên cho nhóm', s: 'Kéo khách quay lại với nhóm đông hơn' },
    { k: 'zstamp', gio: '19:30', ngay: 'T6 11/12/2026', chip: 'Tiệc tất niên', d: 800 },
    { k: 'zns', zns: { banner: ['khong-gian-2', 'nhom-ban-2', 'quay-buffet-2', 'trang-mieng'], nhan: 'TẤT NIÊN · NHÓM TỪ 15 NGƯỜI', mau: '#9A3412',
        tieuDe: 'Tiệc tất niên công ty, nhóm bạn',
        noiDung: 'Sảnh riêng 20–30 người, có màn chiếu, loa. Nhóm từ 15 người đặt trước **15/12** được **tặng 1 suất** buffet.',
        nut: 'Giữ sảnh tất niên' }, d: 4800 },

    { k: 'tongket', d: 8500 },
    { k: 'outro', d: 5200 },
  ],
  // Slide tổng kết cuối video: lấy từ deck.chotLai của bài 1 (cột 3 là "Bám đuổi")
  tongKet: { tieuDe: 'Quy trình Preny AI giúp', em: 'tăng tỷ lệ giữ bàn thành công', cot: [
    { ten: 'Khách hàng', icon: 'users', dong: ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến'] },
    { ten: 'AI Chatbot', icon: 'bot', dong: ['Phản hồi nhanh tức thì', 'Hỏi dịp, số người lớn, trẻ em', 'Tư vấn gói hợp ngân sách', 'Lấy tên, SĐT, giữ bàn'] },
    { ten: 'Bám đuổi', icon: 'heart', dong: ['Gửi 5 tin nhắn trước ngày ăn: quầy buffet thật, feedback, menu, phòng riêng'] },
    { ten: 'Đặt bàn', icon: 'calendar', dong: ['Quản lý xác nhận, chuẩn bị phòng', 'Trang trí sinh nhật miễn phí'] },
    { ten: 'Quay lại', icon: 'refresh', dong: ['Xin đánh giá, ưu đãi khách quen, menu mới, tiệc tất niên qua FB và Zalo'] },
  ] },
  panels: {
    tag: { av: 'MQ', ten: 'Trần Minh Quang', sub: 'Messenger · từ quảng cáo Buffet nướng lẩu',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#buffetnuonglau', 'qt hot'], ['#sinhnhat', 'qt hot'], ['#phongrieng', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#12nguoi', 'qt']]]],
      im: 'Khách im từ 20:13, chưa để lại SĐT',
      rule: { lb: 'Bám đuổi theo thẻ #sinhnhat', tieuDe: 'Bám đuổi bằng 5 tin ngắn',
              dong: [['15 phút', 'Ảnh quầy buffet thật'], ['1 ngày', 'Feedback khách tổ chức sinh nhật'], ['1 ngày', 'Menu gói hải sản, bò Mỹ'],
                     ['1 ngày', 'Phòng riêng, trang trí miễn phí'], ['8 tiếng', 'Mời giữ phòng tối Thứ 7']] },
      reply: 'Khách nhờ giữ phòng 28/11 · dừng bám đuổi' },
    sale: { tieuDe: 'Báo khách mới cho quản lý', ntTieuDe: 'Khách vừa để lại thông tin giữ bàn', khNhan: 'Khách hàng · Số điện thoại', lichNhan: 'Giữ phòng',
      nguon: 'Quảng cáo Buffet nướng lẩu → Messenger', ten: 'Trần Minh Quang', sdt: '0912 735 486',
      nhuCau: 'Sinh nhật vợ, 10 người lớn + 2 bé (0,9m, 1,2m), gói hải sản, mang bánh kem', lich: 'Phòng VIP 3 · 18:30 Thứ Bảy 28/11',
      the: [['#sinhnhat', 'qt'], ['#12nguoi', 'qt'], ['Đã cho SĐT', 'ok']],
      sale: { av: 'CH', ten: 'Chị Hà · Quản lý nhà hàng', sub: 'Đang trực · nhận khách tự động' }, ok: 'Chị Hà đã nhận khách, gọi xác nhận ngay' },
    capi: { tieuDe: 'Gửi khách tiềm năng cho Facebook', event: 'Lead', nhan: 'SỰ KIỆN KHÁCH TIỀM NĂNG', giaTri: 'Có SĐT', pk: 'Lead · khách để lại SĐT',
      dong: [['Khách', 'Trần Minh Quang · đã để lại SĐT'], ['Nguồn khách', 'Quảng cáo Buffet nướng lẩu → Messenger'], ['Nhu cầu', 'Phòng riêng sinh nhật 12 khách'], ['Event ID', 'TH2611-LEAD (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện Lead', khong: 'Không gửi Purchase khi khách chưa tới ăn.' },
  },
};
