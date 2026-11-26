/* Kịch bản: TRÀ THÁI NGUYÊN (trà gói) — BẢN TRÌNH CHIẾU, nhóm THƯƠNG MẠI ĐIỆN TỬ.
   Làm 26/11/2026 theo đồng nghiệp: "Trà gói thái nguyên" (trang Facebook đồng nghiệp gửi không xem được).
   Từ 23/11/2026 bỏ demo chat vào thẳng (&demo): file chỉ có phần deck cho Bài 1 (slide), không viết steps/features.
   Mạch ngắn trên slide (khớp Bài 2 demo/bai2/kich-ban-tra-thai-nguyen-tc.js): chị Mai hỏi giá trà búp gói 500g
     → AI báo gói 200g 180.000đ / 500g 420.000đ, hỏi uống ở nhà hay biếu, lấy mấy gói → khách hỏi búp với móc câu khác nhau
     → khách uống đậm, lấy 2 gói búp 500g 840.000đ → xin SĐT + địa chỉ → lên đơn
     → chăm sóc sau bán: móc câu, nõn tôm, túi lọc, hộp quà Tết, bộ ấm chén.
   Theo quy tắc 25/11/2026: AI chỉ báo giá, gửi ảnh, hỏi số lượng, xin SĐT + địa chỉ; không tự tính, không check khách cũ/mới.
   Không hứa công dụng sức khỏe: slide "AI không trả lời bừa" lấy đúng ca AI sai hứa "giảm 3kg trong 1 tháng".
   Tên shop (Chè Đồi Xanh Thái Nguyên), giá, khách, SĐT, địa chỉ: dữ liệu minh họa. "Tân Cương" là tên vùng chè.
   Ảnh: Unsplash, ảnh thật; dùng đường dẫn trong máy. */
(function () {
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'tra': '1715016811010-e67e6f3d440c',       // trà búp khô quanh chén nước trà (ảnh quảng cáo)
    'tra-bup': '1715016808399-aa26d9fc71f9',   // 3 chén trà búp khô
    'moc-cau': '1766482280244-afd07a7028fc',   // cánh trà xoăn cận cảnh
    'non-tom': '1674141833226-9a28eb5935b4',   // trà viên xoăn nhỏ
    'la-tuoi': '1641997829221-a7d363722a1b',   // nong búp chè tươi
    'doi-che': '1729524462636-80fa3d6b5d14',   // đồi chè trong sương
    'hai-che': '1764034372439-cf34b61ea0b9',   // 2 người hái chè trên đồi
    'hai-che-2': '1775573348847-4bd5d91b709e', // người hái chè giữa đồi
    'khay-tra': '1470162656305-6f429ba817bf',  // ống trà, ấm, 2 chén trên khay gỗ
    'am-tra': '1532136868905-8094ef8ef5f2',    // ấm đất nâu, chén trắng
    'chen-tra': '1546852199-2d8e8c4aaada',     // chén khải lá trà trên khay
    'pha-tra': '1652780080440-9067470afc94',   // pha trà ấm thủy tinh
    'rot-tra': '1782094673090-efde6c10cb91',   // rót trà vàng ra chén
    'tui-loc': '1546648596-d8318bfcf491',      // túi lọc trà
    'goi-giay': '1695245503558-5cdb37f49092',  // túi giấy kraft đựng trà
    'khay-go': '1577016029703-cc22a7c0c28c',   // khay trà gỗ, ấm, chén
    'ban-tra': '1773394473042-0544a86abe61',   // bàn trà cạnh cửa sổ
    'tra-dao': '1531970227416-f0cddeb1f748',   // bàn trà nhiều chén
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    shop: { name: 'Chè Đồi Xanh Thái Nguyên', initials: 'ĐX' },
    headline: { pre: 'Hệ thống AI chatbot giúp tăng trung bình', em: '64% tỷ lệ chốt đơn' },
    sub: 'Tự động hóa toàn bộ quy trình chốt đơn, bám đuổi, lên đơn và chăm sóc khách để tăng hiệu quả bán hàng.',
    cta: 'Dùng thử miễn phí tại **preny.ai**\nHotline **0389 647 778**',

    images: Object.fromEntries(Object.entries(IMG).map(([k, id]) => [k, L(id)])),

    deck: {
      demoDoc: {
        khach: 'Mai',
        sanPham: 'Trà búp Tân Cương',
        binhLuan: 'Trà búp gói 500g giá sao shop?',
        post: {
          tieuDe: 'TRÀ BÚP TÂN CƯƠNG THÁI NGUYÊN 🍃',
          dong: ['Sao tay theo mẻ nhỏ', 'Nước xanh vàng, chát dịu, hậu ngọt', 'Gói 200g chỉ từ 180K', 'Có hộp quà biếu Tết'],
          anh: ['tra', 'doi-che', 'la-tuoi', 'rot-tra'],
        },
      },
      dashboard: [
        { ten: 'Trà búp <span class="grad">Tân Cương</span>', den: '21/07/2026', khach: 31, tyLe: 0.64 },
        { ten: 'Trà <span class="grad">móc câu</span>', den: '18/08/2026', khach: 24, tyLe: 0.6 },
        { ten: 'Hộp quà <span class="grad">trà biếu</span>', den: '26/09/2026', khach: 18, tyLe: 0.67 },
      ],
      chatbot: {
        chat: [
          { ref: { img: L(IMG['tra']), ten: 'Trà búp Tân Cương' } },
          { kh: 'Trà búp gói 500g giá sao shop?' },
          { ai: 'Dạ trà búp Tân Cương gói **200g 180.000đ**, gói **500g 420.000đ** ạ. Chị mua **uống ở nhà hay biếu**, lấy **mấy gói** ạ?', meta: '⚡ Preny AI trả lời sau 2 giây' },
          { kh: 'uống ở nhà, búp với móc câu khác sao e?' },
          { ai: 'Dạ **móc câu** búp nhỏ, vị dịu, thơm cốm. **Trà búp** cánh to hơn, vị **đậm, chát hơn**, hợp uống hằng ngày ạ.' },
          { kh: 'nhà c uống đậm, lấy 2 gói búp 500g nha' },
          { ai: 'Dạ 2 gói là **840.000đ**, giao miễn phí ạ. Chị gửi em **SĐT và địa chỉ** để em lên đơn nha.' },
          { kh: 'bà Lan, 0986 214 735, 45 ngõ 112 Định Công, Hoàng Mai' },
          { don: true },
          { ok: true },
        ],
        don: {
          ten: 'Bà Lan', sdt: '0986 214 735', diaChi: '45 ngõ 112 Định Công, Hoàng Mai, Hà Nội', ma: '#DX26126', phi: 'miễn phí',
          sp: [{ img: L(IMG['tra']), ten: 'Trà búp Tân Cương gói 500g', sl: 2, dv: 'gói', gia: 420000 }],
        },
        anh: {
          img: L(IMG['moc-cau']),
          kh: 'Trà c đang uống cánh như này, bên e có loại giống vậy ko?',
          ai: 'Dạ ảnh chị gửi là **trà cánh xoăn, búp nhỏ**, giống trà **móc câu** bên em ạ. Gói 500g **650.000đ**, vị dịu, thơm cốm. Chị uống đậm hay dịu để em tư vấn đúng loại nha.',
        },
      },
      afterSale: {
        loi: 'Cảm ơn chị Mai đã chọn Chè Đồi Xanh 💚 Khách mua trà búp bên em hay lấy kèm mấy món này ạ:',
        sp: [
          { img: L(IMG['moc-cau']), ten: 'Trà móc câu gói 500g', gia: 650000 },
          { img: L(IMG['non-tom']), ten: 'Trà nõn tôm gói 200g', gia: 380000 },
          { img: L(IMG['tui-loc']), ten: 'Trà xanh túi lọc (50 túi)', gia: 120000 },
          { img: L(IMG['khay-tra']), ten: 'Hộp quà trà Tết 2 ống', gia: 850000 },
          { img: L(IMG['am-tra']), ten: 'Bộ ấm chén đất nung', gia: 387000, cu: 430000 },
        ],
        khach: 'Lấy thêm c 1 hộp quà trà Tết nha e',
        pill: '🛍 Khách lấy thêm ngay: đơn tăng từ 840.000đ lên 1.690.000đ',
        fmm: {
          chao: 'Chào chị Mai 👋 Tết sắp tới, Chè Đồi Xanh giảm 15% hộp quà trà biếu cho khách đã mua, em gửi chị xem nha!',
          img: L(IMG['khay-tra']), nhan: 'HỘP QUÀ TRÀ ĐÓN TẾT',
          ten: 'Hộp quà trà búp, móc câu', mo: 'Giảm 15% cho khách đã mua trà.', nut: 'Xem ưu đãi',
        },
        zbs: {
          ten: 'Tặng chị Mai voucher 50.000đ',
          mo: 'Cảm ơn chị đã mua trà tại Chè Đồi Xanh. Gửi chị ưu đãi cho lần mua tiếp theo:',
          dong: [['Mã voucher', '**DOIXANH50**'], ['Ưu đãi', 'Giảm 50.000đ đơn từ 500.000đ'], ['Hạn dùng', '31/01/2027']],
          nut: 'Dùng voucher ngay',
        },
      },
      bamDuoi: {
        cmpDung: ['Khách nhắn xong im → nhắc đúng loại trà khách đã hỏi (thẻ <b>#trabup</b> từ quảng cáo)',
                  'Báo giá xong im → bám đuổi theo giá: giao miễn phí, quà tặng (thẻ <b>#HoiGia</b>)',
                  'Đúng nhu cầu, đúng lý do im → khách quay lại đặt hàng'],
        hoi: 'Trà búp gói 500g giá sao shop?',
        traLoiThuong: 'Dạ 420.000đ ạ.',
        refImg: L(IMG['tra']), refTen: 'Trà búp Tân Cương',
        vd1: {
          kh: 'Trà này pha có bị đắng gắt không shop?',
          ai: 'Dạ trà búp vị chát dịu, hậu ngọt, pha nước 80–85°C là không bị gắt ạ. Chị lấy gói mấy gam ạ?',
          tag: '🏷 #trabup', tagNote: 'thẻ từ quảng cáo · khách im 1 ngày',
          nhac: 'Chị ơi, em gửi chị <b>ảnh thật búp chè vừa hái và sao tay</b> sáng nay bên em ạ 🍃',
          dung: '🎯 Theo thẻ #trabup: nhắc đúng loại khách hỏi',
          khach: 'Lấy c 1 gói 500g nha',
        },
        vd2: {
          kh: 'Trà móc câu gói 500g bao nhiêu vậy shop?',
          ai: 'Dạ trà móc câu gói 500g giá <b>650.000đ</b> ạ.',
          tag: '🏷 #HoiGia', tagNote: 'báo giá xong khách im 1 ngày',
          nhac: 'Chị ơi, trà móc câu chị hỏi hôm qua, bên em <b>giao miễn phí, tặng 1 gói nõn tôm 100g</b> ạ. Em lên đơn cho chị nha?',
          dung: '🎯 Theo thẻ #HoiGia: bám đuổi theo giá, đúng lý do khách im',
          khach: 'Ok lên đơn cho c nha e',
        },
      },
      binhLuan: {
        post: '<b>Trà búp Tân Cương Thái Nguyên</b> · sao tay, chát dịu hậu ngọt, gói 200g chỉ từ 180K, có hộp quà biếu Tết 🍃',
        img: L(IMG['khay-tra']),
        kav: 'ĐT', kten: 'Đức Thắng', hoi: 'Có hộp quà biếu Tết không shop? Giá sao?',
        traLoi: 'Dạ chào anh Thắng! Shop vừa nhắn tin báo giá chi tiết cho anh, anh xem tin nhắn nhé 💬',
        act2: 'Nhắn tin riêng báo giá hộp quà Tết',
        nhan: 'Chào anh Thắng! Hộp quà trà Tết 2 ống (trà búp + móc câu) bên em giá <b>850.000đ</b>, kèm túi xách và thiệp ạ. Anh cần mấy hộp ạ?',
        sp: { ten: 'Hộp quà trà Tết 2 ống', gia: '850.000đ', img: L(IMG['khay-tra']) },
        khach: 'Lấy a 3 hộp, giao Cầu Giấy nha',
      },
      duLieu: {
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: uống trà này giảm 3kg trong 1 tháng', 'Khách thất vọng, đòi trả, shop mất uy tín'],
        hoi: 'Uống trà này mỗi ngày có giảm cân không e?',
        aiSai: 'Dạ uống mỗi ngày là <b>giảm 3kg trong 1 tháng</b> luôn chị nhé 🥰',
        thucTe: '⚠ Thực tế: trà là đồ uống hằng ngày, không phải thuốc giảm cân; shop không có dữ liệu nào nói trà giúp giảm cân',
        gian: 'Uống cả tháng không giảm cân nào! Sao nói giảm 3kg? 😠',
        cho: 'Dạ chị chờ em một chút để em kiểm tra chính xác cho chị nhé!',
        nv: 'Nhân viên Hà · người thật',
        nvTraLoi: 'Dạ em xin lỗi chị ạ. Trà bên em là đồ uống hằng ngày, không có tác dụng giảm cân. Nếu chị chưa ưng vị, em đổi qua loại dịu hơn cho chị nhé!',
      },
    },
  };
})();
