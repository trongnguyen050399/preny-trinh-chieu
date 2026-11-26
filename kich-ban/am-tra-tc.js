/* Kịch bản: ẤM TRÀ, BỘ ẤM CHÉN (ấm tử sa) — BẢN TRÌNH CHIẾU, nhóm THƯƠNG MẠI ĐIỆN TỬ.
   Làm 26/11/2026 theo đồng nghiệp: "thêm kịch bản ấm trà nha (tư vấn, hỏi thông tin, báo giá và xin sđt và địa chỉ để chốt đơn)".
   Từ 23/11/2026 bỏ demo chat vào thẳng (&demo): file chỉ có phần deck cho Bài 1 (slide), không viết steps/features.
   Mạch ngắn trên slide (khớp Bài 2 demo/bai2/kich-ban-am-tra-tc.js): anh Quân hỏi giá ấm Thạch Biều → AI báo giá từ, hỏi mấy người uống,
     pha trà gì → gửi bảng 2 cỡ 150ml / 250ml → khách chọn 250ml 1.690.000đ, tặng 4 chén → xin SĐT + địa chỉ (giao biếu bố ở Hải Phòng)
     → lên đơn → chăm sóc sau bán: chén khải, khay trà tre, bộ chén, trà ô long, ấm 150ml.
   Theo quy tắc 25/11/2026: AI chỉ báo giá theo bảng của shop, gửi ảnh, hỏi số lượng/dung tích, xin SĐT + địa chỉ; khách tự chọn.
   Không hứa công dụng sức khỏe: slide "AI không trả lời bừa" lấy đúng ca AI sai hứa "ấm tử sa giúp hạ mỡ máu".
   Tên cửa hàng (Ấm Trà Tĩnh Tâm), giá, khách, SĐT, địa chỉ: dữ liệu minh họa. Ảnh: Unsplash, ảnh thật; dùng đường dẫn trong máy. */
(function () {
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'am': '1680210963123-cc25aafa7a47',         // ấm tử sa dáng Thạch Biều trên bàn gỗ (ảnh quảng cáo)
    'am-do': '1565550967973-727d4372df7c',      // ấm tử sa đất đỏ cam
    'am-khay': '1629440400842-9108c0ccf336',    // ấm tử sa đỏ trên khay gỗ
    'am-toi': '1629440404898-4a527437484f',     // ấm tử sa đỏ, nền tối
    'am-nau': '1562996069-90bc7c450c58',        // ấm tử sa nâu cận cảnh
    'bo-suu-tap': '1607644962019-09feffe09624', // 3 ấm tử sa trên bàn gỗ
    'vong-am': '1793502618440-25a5214d251d',    // nhiều ấm tử sa xếp vòng
    'trung-bay': '1765808270869-855ab9b7f5c4',  // ấm tử sa trưng bày trên hộp
    'bo-am-chen': '1783915817252-1d81ed28ed9d', // ấm nâu với chén men xanh
    'ban-tra': '1470162656305-6f429ba817bf',    // khay tre, ấm đen, 2 chén trà
    'khay': '1577016029703-cc22a7c0c28c',       // khay trà tre có ấm, chén
    'pha-tra': '1531969179221-3946e6b5a5e7',    // rót trà vào chén, hơi nóng
    'chen': '1631682477691-9021a9218860',       // 2 chén trà trên gỗ
    'chen-trang': '1610701596007-11502861dcfa', // chén gốm men trắng
    'chen-khai': '1546852199-2d8e8c4aaada',     // chén khải men ngọc trên khay
    'la-tra': '1760074057726-53a88633cf67',     // lá trà khô cận cảnh
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    shop: { name: 'Ấm Trà Tĩnh Tâm', initials: 'TT' },
    headline: { pre: 'Hệ thống AI chatbot giúp tăng trung bình', em: '57% tỷ lệ chốt đơn' },
    sub: 'Tự động hóa toàn bộ quy trình chốt đơn, bám đuổi, lên đơn và chăm sóc khách để tăng hiệu quả bán hàng.',
    cta: 'Dùng thử miễn phí tại **preny.ai**\nHotline **0389 647 778**',

    images: Object.fromEntries(Object.entries(IMG).map(([k, id]) => [k, L(id)])),

    deck: {
      demoDoc: {
        khach: 'Quân',
        sanPham: 'Ấm tử sa Thạch Biều',
        binhLuan: 'Ấm Thạch Biều giá bao nhiêu shop?',
        post: {
          tieuDe: 'ẤM TỬ SA THẠCH BIỀU 🫖',
          dong: ['Làm thủ công, 150ml và 250ml', 'Chỉ từ 1.290K, tặng kèm 4 chén', 'Giao toàn quốc, kiểm tra rồi mới trả tiền', 'Có hộp quà biếu Tết'],
          anh: ['am', 'bo-am-chen', 'khay', 'vong-am'],
        },
      },
      dashboard: [
        { ten: 'Ấm tử sa <span class="grad">Thạch Biều</span>', den: '21/07/2026', khach: 24, tyLe: 0.57 },
        { ten: 'Bộ ấm chén <span class="grad">quà biếu</span>', den: '18/08/2026', khach: 19, tyLe: 0.6 },
        { ten: 'Chén, <span class="grad">khay trà</span>', den: '26/09/2026', khach: 15, tyLe: 0.63 },
      ],
      chatbot: {
        chat: [
          { ref: { img: L(IMG['am']), ten: 'Ấm tử sa Thạch Biều' } },
          { kh: 'Ấm Thạch Biều giá bao nhiêu shop?' },
          { ai: 'Dạ ấm bên em **từ 1.290.000đ**, tùy dung tích ạ. Nhà mình **mấy người uống**, hay pha **trà gì** ạ?', meta: '⚡ Preny AI trả lời sau 2 giây' },
          { kh: 'nhà a 4 người, hay pha trà Thái' },
          { ai: 'Dạ bên em có **150ml: 1.290.000đ** và **250ml: 1.690.000đ** ạ, pha trà Thái đều hợp.' },
          { kh: 'lấy a loại 250 nha' },
          { ai: 'Dạ em ghi **ấm 250ml**, tặng **4 chén**, giao miễn phí. Anh gửi em **SĐT và địa chỉ** để em lên đơn nha.' },
          { kh: 'Quân, 0987 315 246, 26 Lạch Tray, Ngô Quyền, Hải Phòng' },
          { don: true },
          { ok: true },
        ],
        don: {
          ten: 'Quân', sdt: '0987 315 246', diaChi: '26 Lạch Tray, Ngô Quyền, Hải Phòng', ma: '#TT26126', phi: 'miễn phí',
          sp: [{ img: L(IMG['am']), ten: 'Ấm tử sa Thạch Biều 250ml, tặng 4 chén', sl: 1, dv: 'ấm', gia: 1690000 }],
        },
        anh: {
          img: L(IMG['am-toi']),
          kh: 'Ấm này có giống ấm trong hình a gửi ko e?',
          ai: 'Dạ ấm trong ảnh anh gửi là **ấm tử sa đất đỏ, dáng tròn**, bên em có mẫu gần giống là **ấm đất đỏ 150ml** giá 1.290.000đ ạ. Em gửi anh ảnh thật mẫu này nha.',
        },
      },
      afterSale: {
        loi: 'Cảm ơn anh Quân đã chọn Ấm Trà Tĩnh Tâm 💛 Khách mua ấm bên em hay lấy kèm mấy món này ạ:',
        sp: [
          { img: L(IMG['chen-khai']), ten: 'Chén khải gốm men ngọc', gia: 350000 },
          { img: L(IMG['khay']), ten: 'Khay trà tre có ngăn thoát nước', gia: 590000 },
          { img: L(IMG['chen-trang']), ten: 'Bộ 6 chén gốm men trắng', gia: 280000 },
          { img: L(IMG['la-tra']), ten: 'Trà ô long hộp 200g', gia: 290000 },
          { img: L(IMG['am-do']), ten: 'Ấm tử sa đất đỏ 150ml', gia: 1161000, cu: 1290000 },
        ],
        khach: 'Lấy thêm a 1 hộp trà ô long nha e',
        pill: '🛍 Khách lấy thêm ngay: đơn tăng từ 1.690.000đ lên 1.980.000đ',
        fmm: {
          chao: 'Chào anh Quân 👋 Ấm Trà Tĩnh Tâm đang giảm 15% bộ ấm chén đóng hộp quà biếu Tết cho khách đã mua, em gửi anh xem nha!',
          img: L(IMG['bo-am-chen']), nhan: 'QUÀ BIẾU TẾT',
          ten: 'Bộ ấm tử sa kèm chén', mo: 'Giảm 15% cho khách đã mua ấm.', nut: 'Xem ưu đãi',
        },
        zbs: {
          ten: 'Tặng anh Quân voucher 100.000đ',
          mo: 'Cảm ơn anh đã mua ấm tại Ấm Trà Tĩnh Tâm. Gửi anh ưu đãi cho lần mua tiếp theo:',
          dong: [['Mã voucher', '**TINHTAM100**'], ['Ưu đãi', 'Giảm 100.000đ đơn từ 1.000.000đ'], ['Hạn dùng', '31/01/2027']],
          nut: 'Dùng voucher ngay',
        },
      },
      bamDuoi: {
        cmpDung: ['Khách nhắn xong im → nhắc đúng mẫu ấm khách đã hỏi (thẻ <b>#thachbieu</b> từ quảng cáo)',
                  'Báo giá xong im → bám đuổi theo giá: tặng chén, giao miễn phí (thẻ <b>#HoiGia</b>)',
                  'Đúng nhu cầu, đúng lý do im → khách quay lại đặt hàng'],
        hoi: 'Ấm Thạch Biều giá bao nhiêu shop?',
        traLoiThuong: 'Dạ từ 1.290.000đ ạ.',
        refImg: L(IMG['am']), refTen: 'Ấm tử sa Thạch Biều',
        vd1: {
          kh: 'Ấm này rót có bị nhỏ giọt ra ngoài không shop?',
          ai: 'Dạ vòi ấm cắt gọn, rót nước ra đều ạ. Nhà mình mấy người uống ạ?',
          tag: '🏷 #thachbieu', tagNote: 'thẻ từ quảng cáo · khách im 1 ngày',
          nhac: 'Anh ơi, em gửi anh <b>video thật rót trà từ ấm Thạch Biều</b> bên em, nước ra đều, không nhỏ giọt ạ 🫖',
          dung: '🎯 Theo thẻ #thachbieu: nhắc đúng mẫu khách hỏi',
          khach: 'Ok lấy a loại 250ml',
        },
        vd2: {
          kh: 'Bộ ấm kèm 6 chén đóng hộp bao nhiêu vậy shop?',
          ai: 'Dạ bộ ấm Thạch Biều 250ml kèm 6 chén, hộp quà giá <b>1.890.000đ</b> ạ.',
          tag: '🏷 #HoiGia', tagNote: 'báo giá xong khách im 1 ngày',
          nhac: 'Anh ơi, bộ ấm chén anh hỏi hôm qua, bên em <b>giao miễn phí, tặng thêm khay trà tre</b> ạ. Em lên đơn cho anh nha?',
          dung: '🎯 Theo thẻ #HoiGia: bám đuổi theo giá, đúng lý do khách im',
          khach: 'Ok lên đơn cho a nha e',
        },
      },
      binhLuan: {
        post: '<b>Ấm tử sa Thạch Biều</b> · làm thủ công, chỉ từ 1.290K, tặng kèm 4 chén, giao toàn quốc 🫖',
        img: L(IMG['bo-suu-tap']),
        kav: 'TT', kten: 'Thu Trang', hoi: 'Có bộ ấm chén làm quà biếu Tết không shop? Giá sao?',
        traLoi: 'Dạ chào chị Trang! Shop vừa nhắn tin báo giá chi tiết cho chị, chị xem tin nhắn nhé 💬',
        act2: 'Nhắn tin riêng báo giá bộ ấm chén quà biếu',
        nhan: 'Chào chị Trang! Bộ ấm tử sa 250ml kèm 6 chén, đóng hộp quà bên em giá <b>1.890.000đ</b>, giao miễn phí ạ. Chị cần mấy bộ ạ?',
        sp: { ten: 'Bộ ấm chén hộp quà biếu', gia: '1.890.000đ', img: L(IMG['bo-am-chen']) },
        khach: 'Lấy c 2 bộ, giao Cầu Giấy nha',
      },
      duLieu: {
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: pha ấm tử sa giúp hạ mỡ máu', 'Khách thất vọng, đòi trả, shop mất uy tín'],
        hoi: 'Nghe nói pha trà bằng ấm tử sa tốt cho sức khỏe, bố a mỡ máu cao uống có đỡ ko e?',
        aiSai: 'Dạ ấm tử sa nguyên khoáng, uống đều <b>giúp hạ mỡ máu</b> luôn anh nhé 🥰',
        thucTe: '⚠ Thực tế: ấm tử sa chỉ giữ nhiệt, giữ hương trà; ấm không chữa được bệnh, mỡ máu cao cần đi khám',
        gian: 'Bố a uống cả tháng, đi khám mỡ máu vẫn cao! Sao nói giúp hạ mỡ máu? 😠',
        cho: 'Dạ anh chờ em một chút để em kiểm tra chính xác cho anh nhé!',
        nv: 'Nhân viên Hà · người thật',
        nvTraLoi: 'Dạ em xin lỗi anh ạ. Ấm tử sa chỉ giúp giữ nhiệt và hương trà, không chữa được bệnh, bác nên theo lời bác sĩ ạ. Nếu bác không ưng ấm, em đổi mẫu khác cho anh nhé!',
      },
    },
  };
})();
