/* Kịch bản video demo NGANG 16:9: BẤT ĐỘNG SẢN CHUNG CƯ (nhóm cân nhắc nhiều), làm 20/11/2026 theo người dùng:
   "làm thêm 1 ngành bất động sản chung cư (cân nhắc nhiều)".
   Mạch cnn người dùng chốt 18/11/2026 (mẫu thẩm mỹ viện): 1 cảnh, KHÔNG có bình luận, chỉ 1 sản phẩm (căn hộ 2PN 68m² Long Biên).
   Mạch: logo → quảng cáo căn hộ → khách bấm "Gửi tin nhắn", hỏi giá → AI gửi đúng ảnh quảng cáo + giá căn
   → hỏi để ở hay cho thuê, mấy người, ngân sách → có 1,5 tỷ muốn vay, bé 4 tuổi, hỏi phí quản lý, trường, trả góp tháng
   → AI: sổ hồng lâu dài, phí quản lý, mầm non trong khu, ngân hàng hỗ trợ vay, KHÔNG báo con số trả góp chung chung,
   mời xem căn thực tế, xin tên + SĐT → khách im → gắn thẻ + bám đuổi 5 tin → khách hẹn xem căn → xin tên, SĐT
   → báo sale gọi ngay → gửi Lead lên Facebook → Zalo 3 tin → tổng kết → logo.
   Không lên đơn tự động: khách xem căn rồi sale mới chốt cọc. Không có tin nhắc trước giờ xem nhà.
   Nội dung lấy từ bài 1 (demo/kich-ban/chung-cu-tc.js): đơn vị, dự án, giá, khách, SĐT, feedback, ưu đãi là dữ liệu minh họa.
   Ảnh: Unsplash có sẵn trong máy (ảnh thật, không phải dự án của khách). */
window.VN_KB = {
  ten: 'Căn hộ chung cư video ngang',
  ketSub: 'Để AI tư vấn và hẹn khách đi xem căn hộ cho đội sale của bạn',
  shop: { ten: 'Căn Hộ Phúc An', av: 'PA', mau: '#1D4ED8', sub: 'Thường trả lời ngay' },
  anh: {
    'toa-nha': '../assets/img/u/1694694314752-14a25e3cfdec_800x800.jpg',     // tòa căn hộ, hồ bơi (ảnh quảng cáo)
    'toan-canh': '../assets/img/u/1768364635394-a3832eb6b815_800x800.jpg',   // toàn cảnh khu đô thị
    'ven-ho': '../assets/img/u/1768364635456-b2b6f11e8013_800x800.jpg',      // tòa căn hộ cạnh hồ
    'phong-khach': '../assets/img/u/1758448511322-8bfc73daf606_800x800.jpg', // phòng khách
    'phong-ngu': '../assets/img/u/1560448075-57d0285fc59b_800x800.jpg',      // phòng ngủ master
    'phong-be': '../assets/img/u/1652882860938-f90aa298e644_800x800.jpg',    // phòng ngủ trẻ em
    'bep': '../assets/img/u/1759691554646-8155da2172ee_800x800.jpg',         // bếp
    'ban-cong': '../assets/img/u/1665249934445-1de680641f50_800x800.jpg',    // ban công
    'ho-boi': '../assets/img/u/1642651460396-b724a1a98485_800x800.jpg',      // hồ bơi
    'san-choi': '../assets/img/u/1787048884940-19b151fc48ea_800x800.jpg',    // sân chơi trẻ em
    'tu-van': '../assets/img/u/1650784854382-6d3b15e07b94_800x800.jpg',      // chuyên viên tư vấn
    'bat-tay': '../assets/img/u/1781229771042-2a859f8f8022_800x800.jpg',     // bắt tay bên mô hình nhà
    'chia-khoa': '../assets/img/u/1744782351841-9cc6b86a5add_800x800.jpg',   // chìa khóa nhà
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= QUẢNG CÁO → MESSENGER (1 cảnh, không có bình luận, chỉ căn 2PN) ================= */
    { k: 'canh', nhan: 'Khách từ quảng cáo → Messenger', gio: '20:12' },
    { k: 'ad', ad: {
        img: 'toa-nha', nhan: 'MESSENGER', tieuDe: 'Căn hộ 2PN Long Biên · Nhận nhà ở ngay', nut: 'Gửi tin nhắn',
        text: 'Căn hộ 2PN Long Biên, Hà Nội 🏢 Căn 68m² từ 3,6 tỷ, sổ hồng lâu dài, mầm non, hồ bơi, sân chơi ngay trong khu, ngân hàng hỗ trợ vay. Cuối tuần mời xem căn thực tế. #canho2pn #longbien #xemcanthucte',
      }, d: 1500 },
    { k: 'cap', e: 'Quảng cáo Facebook', t: 'Khách bấm "Gửi tin nhắn" từ quảng cáo', s: 'Hỏi gì, AI trả lời ngay lập tức' },
    { k: 'tap', d: 1100 },
    { k: 'ms', ref: { loai: 'ad', img: 'toa-nha', dong1: 'Mai Anh đã trả lời một quảng cáo', dong2: 'Căn hộ 2PN Long Biên · Nhận nhà ở ngay' }, gio: '20:13', d: 900 },
    { k: 'kh', text: 'Căn 2 phòng ngủ giá sao em?' },
    { k: 'cap', e: 'Khách hỏi giá', t: 'AI gửi đúng ảnh trên quảng cáo kèm giá căn', s: 'Xem căn thực tế rồi mới cọc' },
    { k: 'ai', text: 'Dạ chào chị Mai Anh, căn **2PN 68m²** bên em giá **từ 3,6 tỷ**, nhà đã hoàn thiện, **nhận ở ngay** ạ.' },
    { k: 'ai', img: 'toa-nha' },
    { k: 'cap', e: 'Hỏi đúng nhu cầu', t: 'Hỏi để ở hay cho thuê, mấy người, ngân sách', s: 'Để lọc đúng căn cho khách' },
    { k: 'ai', text: 'Chị mua để **ở** hay **cho thuê**, nhà mình mấy người, ngân sách khoảng bao nhiêu ạ, để em lọc căn hợp với chị?' },
    { k: 'kh', text: 'c 31t, đang thuê nhà, 2 vc với bé 4 tuổi. có 1tỷ5 muốn vay thêm. phí quản lý bn, gần trường cho bé ko? vay thì tháng trả bn e?' },
    { k: 'cap', e: 'Mời đi xem nhà', t: 'Nói rõ pháp lý, phí, mời xem căn thực tế', s: 'Không báo con số trả góp chung chung' },
    { k: 'ai', text: 'Dạ căn bên em **sổ hồng lâu dài**, phí quản lý **12.000đ/m²/tháng**, căn 68m² khoảng 816.000đ ạ. Trong khu có **trường mầm non**, sân chơi cho bé ngay dưới tòa.' },
    { k: 'ai', text: 'Phần thiếu chị vay qua **ngân hàng liên kết** được ạ. Tháng trả bao nhiêu thì tùy mức vay và lãi suất ngân hàng duyệt, em không dám báo số chung chung. Cuối tuần chị qua **xem căn thực tế**, chuyên viên tính phương án vay riêng cho mình. Chị cho em xin **tên và SĐT** để giữ lịch nha 🏢' },

    // Khách im → màn hình phụ: gắn thẻ (hashtag quảng cáo + thẻ từ cuộc chat), bám đuổi 5 tin
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Preny tự gắn thẻ nhu cầu của khách', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi 5 tin', t: '5 tin: 15 phút, rồi cách 1 ngày, 1 ngày, 1 ngày, 2 ngày', s: 'Ảnh thực tế, cư dân, tiện ích, quy trình, giữ lịch' },
    { k: 'time', nhan: '15 phút sau', gio: '20:30', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Chị Mai Anh ơi, em gửi chị **ảnh thực tế căn 2PN** bên em chụp tuần này nha 🏢' },
    { k: 'ai', imgs: ['phong-khach', 'phong-ngu', 'bep'] },
    { k: 'p', a: 'r1', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '20:30', ngay: 'T5 19/11/2026', d: 700 },
    { k: 'ai', text: 'Đây là chia sẻ của một chị cư dân chuyển về ở năm ngoái ạ 💬' },
    { k: 'ai', review: { av: 'TT', ten: 'Thu Trang', sub: 'đã đánh giá Căn Hộ Phúc An', mau: '#F59E0B',
        text: 'Nhà mình cũng có 2 bé nên mình chọn vì có mầm non ngay trong khu. Hầm xe rộng, chiều xuống sân chơi với con, không phải chạy đi đâu.' } },
    { k: 'p', a: 'r2', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '20:30', ngay: 'T6 20/11/2026', d: 700 },
    { k: 'ai', imgs: ['ho-boi', 'san-choi'] },
    { k: 'ai', checks: { tieuDe: 'Tiện ích và pháp lý bên em thế này để chị yên tâm ạ:', dong: [
        '**Sổ hồng lâu dài**, xem sổ mẫu tại văn phòng', '**Mầm non, hồ bơi, sân chơi** trong khu, hầm xe 2 tầng', '**Ngân hàng liên kết** hỗ trợ vay, tùy hồ sơ duyệt'] } },
    { k: 'p', a: 'r3', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '20:30', ngay: 'T7 21/11/2026', d: 700 },
    { k: 'ai', text: 'Buổi xem nhà bên em là **đón chị ở sảnh → xem căn mẫu → xem căn thực tế → tính phương án vay**, khoảng 1 tiếng. Chị ưng mới cọc, không ép ạ 😊' },
    { k: 'ai', img: 'tu-van' },
    { k: 'p', a: 'r4', d: 800 },
    { k: 'time', nhan: '2 ngày sau', gio: '20:30', ngay: 'T2 23/11/2026', d: 700 },
    { k: 'ai', text: 'Thứ 7 ngày 28/11 bên em còn vài khung giờ xem căn, chị muốn em giữ lịch cho cả nhà mình không ạ?' },
    { k: 'p', a: 'r5', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 5, khách hẹn đi xem căn', s: 'AI giữ khung giờ, xin SĐT ngay' },
    { k: 'kh', text: 'T7 này 2 vc với bé qua xem đc, buổi sáng nha e' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'ai', text: 'Dạ được ạ, em giữ khung **9h30 sáng Thứ 7 28/11** cho nhà mình. Chị cho em xin **tên và SĐT** để chuyên viên đón chị ở sảnh nha 🏢' },
    { k: 'cap', e: 'Lấy SĐT', t: 'Khách để lại tên, SĐT', s: 'Đây là lúc AI chốt: chuyển khách cho người thật' },
    { k: 'kh', text: 'Mai Anh, 0912 846 307 nha e' },
    { k: 'ai', text: 'Dạ em giữ lịch **9h30 sáng T7 28/11** cho chị Mai Anh rồi ạ, đón ở **sảnh tòa A**. Chị Hương bên tư vấn sẽ gọi chị xác nhận và gửi trước mặt bằng căn 2PN nha 🏢', d: 1800 },

    // Có SĐT → màn hình phụ: báo sale gọi ngay (không lên đơn tự động) → gửi Lead lên Facebook
    { k: 'cap', e: 'Báo ngay cho Sale', t: 'Có SĐT: báo chuyên viên gọi ngay', s: 'Không lên đơn tự động: xem căn rồi mới chốt cọc' },
    { k: 'panel', v: 'sale', d: 800 },
    { k: 'p', a: 's1', d: 700 }, { k: 'p', a: 's2', d: 500 }, { k: 'p', a: 's3', d: 500 }, { k: 'p', a: 's4', d: 600 },
    { k: 'p', a: 's5', d: 1600 }, { k: 'p', a: 's6', d: 2600 },
    { k: 'cap', e: 'Gửi Lead về Facebook', t: 'Khách để lại SĐT: gửi sự kiện Lead lên Facebook', s: 'Quảng cáo tìm thêm khách giống khách thật' },
    { k: 'panel', v: 'capi', d: 900 },
    { k: 'p', a: 'flow', d: 1500 }, { k: 'p', a: 'event', d: 1300 }, { k: 'p', a: 'ok', d: 3200 },
    { k: 'panel', v: null, d: 600 },

    // Sau buổi xem, qua Zalo: 3 tin (gửi lại thông tin căn đã xem; cập nhật tiện ích; ưu đãi tháng 12)
    { k: 'cap', e: 'Chăm sóc sau buổi xem', t: 'Tối hôm xem: gửi lại thông tin căn đã xem', s: 'Tin gửi qua Zalo OA của đơn vị' },
    { k: 'zalo', gio: '19:30', ngay: 'T7 28/11/2026', chip: 'Sau buổi xem nhà', d: 1500 },
    { k: 'zns', zns: { img: 'phong-khach', sao: false, tieuDe: 'Thông tin 2 căn chị Mai Anh xem sáng nay',
        noiDung: 'Phúc An gửi lại chị thông tin căn đã xem:',
        dong: ['**A-1208** · 2PN 68m², view hồ · **3,72 tỷ**', '**B-0915** · 2PN 65m², gần sân chơi · **3,58 tỷ**', 'Phương án vay: chị Hương đã gửi riêng cho chị'],
        nut: 'Nhắn chuyên viên' }, d: 5000 },
    { k: 'cap', e: 'Cập nhật dự án', t: '1 tuần sau: cập nhật tiện ích mới', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '10:00', ngay: 'T7 05/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: { banner: ['san-choi', 'ho-boi', 'ven-ho', 'toan-canh'], nhan: 'CẬP NHẬT DỰ ÁN', mau: '#F97316',
        tieuDe: 'Phúc An tháng này có gì mới',
        noiDung: 'Mở thêm **phòng gym cư dân**, sân chơi cho bé **lắp thêm cầu trượt**. Căn A-1208 chị xem vẫn còn cho chị nha.',
        nut: 'Xem ảnh mới' }, d: 4600 },
    { k: 'cap', e: 'Ưu đãi tháng 12', t: 'Gửi ưu đãi đúng căn khách đã xem', s: 'Kéo khách quay lại chốt cọc' },
    { k: 'zstamp', gio: '19:30', ngay: 'T6 11/12/2026', chip: 'Ưu đãi tháng 12', d: 800 },
    { k: 'zns', zns: { banner: ['toa-nha', 'bat-tay', 'chia-khoa', 'phong-be'], nhan: 'THÁNG 12 · MIỄN PHÍ QUẢN LÝ', mau: '#1D4ED8',
        tieuDe: 'Ưu đãi ký hợp đồng tháng 12',
        noiDung: 'Khách ký hợp đồng trong tháng 12 được **miễn 1 năm phí quản lý** và **tặng gói rèm cửa**. Áp dụng đến hết 31/12/2026.',
        nut: 'Xem ưu đãi' }, d: 4800 },

    { k: 'tongket', d: 8500 },
    { k: 'outro', d: 5200 },
  ],
  // Slide tổng kết cuối video: lấy từ deck.chotLai của bài 1, theo mẫu thẩm mỹ viện (cột 3 là "Bám đuổi", 5 tin trong 7 ngày)
  tongKet: { tieuDe: 'Quy trình Preny AI giúp', em: 'tăng tỷ lệ hẹn xem căn hộ', cot: [
    { ten: 'Khách hàng', icon: 'users', dong: ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến'] },
    { ten: 'AI Chatbot', icon: 'bot', dong: ['Phản hồi nhanh tức thì', 'Hỏi đúng nhu cầu ở, ngân sách', 'Không hứa con số vay', 'Lấy SĐT, hẹn xem nhà'] },
    { ten: 'Bám đuổi', icon: 'heart', dong: ['Gửi 5 tin nhắn trong 7 ngày: ảnh thực tế, cư dân, tiện ích, quy trình'] },
    { ten: 'Xem nhà', icon: 'calendar', dong: ['Sale đón khách xem căn mẫu, căn thực tế', 'Tính phương án vay, chốt cọc'] },
    { ten: 'Giới thiệu', icon: 'refresh', dong: ['Gửi căn mới mở bán, ưu đãi cư dân giới thiệu người quen qua FB và Zalo'] },
  ] },
  panels: {
    tag: { av: 'MA', ten: 'Nguyễn Mai Anh', sub: 'Messenger · từ quảng cáo Căn hộ 2PN Long Biên',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#canho2pn', 'qt hot'], ['#longbien', 'qt hot'], ['#xemcanthucte', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#VayNganHang', 'qt']]]],
      im: 'Khách im từ 20:15, chưa để lại SĐT',
      rule: { lb: 'Bám đuổi theo thẻ #canho2pn', tieuDe: 'Bám đuổi bằng 5 tin ngắn',
              dong: [['15 phút', 'Ảnh thực tế căn 2PN'], ['1 ngày', 'Feedback cư dân có con nhỏ'], ['1 ngày', 'Tiện ích, sổ hồng, ngân hàng hỗ trợ vay'],
                     ['1 ngày', 'Quy trình xem nhà, không ép cọc'], ['2 ngày', 'Mời giữ lịch xem căn Thứ 7']] },
      reply: 'Khách hẹn xem căn Thứ 7 · dừng bám đuổi' },
    sale: { tieuDe: 'Báo khách mới cho Sale', ntTieuDe: 'Khách mới vừa để lại SĐT', khNhan: 'Khách hàng · Số điện thoại', lichNhan: 'Lịch xem căn hộ',
      nguon: 'Quảng cáo Căn hộ 2PN Long Biên → Messenger', ten: 'Nguyễn Mai Anh', sdt: '0912 846 307',
      nhuCau: '31 tuổi, có 1,5 tỷ, muốn vay thêm, 2 vợ chồng và bé 4 tuổi', lich: 'Xem căn · 09:30 Thứ 7 28/11 · đón ở sảnh tòa A',
      the: [['#canho2pn', 'qt'], ['#VayNganHang', 'qt'], ['Đã cho SĐT', 'ok']],
      sale: { av: 'CH', ten: 'Chị Hương · Chuyên viên tư vấn', sub: 'Đang trực · nhận khách tự động' }, ok: 'Chị Hương đã nhận khách, gọi xác nhận ngay' },
    capi: { tieuDe: 'Gửi khách tiềm năng cho Facebook', event: 'Lead', nhan: 'SỰ KIỆN KHÁCH TIỀM NĂNG', giaTri: 'Có SĐT', pk: 'Lead · khách để lại SĐT',
      dong: [['Khách', 'Nguyễn Mai Anh · đã để lại SĐT'], ['Nguồn khách', 'Quảng cáo Căn hộ 2PN Long Biên → Messenger'], ['Nhu cầu', 'Đi xem căn, căn 2PN 68m²'], ['Event ID', 'PA2311-LEAD (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện Lead', khong: 'Không gửi Purchase khi khách chưa cọc.' },
  },
};
