/* Kịch bản: NỆM (nệm cao su non) — BẢN TRÌNH CHIẾU, nhóm THƯƠNG MẠI ĐIỆN TỬ.
   Làm 26/11/2026 theo người dùng: "ngành nệm nữa: hỏi kích thước dài rộng cao, tư vấn báo giá, mời lên cửa hàng để trải nghiệm,
   khách hỏi muốn đặt gửi luôn, ai xin sđt và địa chỉ cho nệm".
   Từ 23/11/2026 bỏ demo chat vào thẳng (&demo): file chỉ có phần deck cho Bài 1 (slide), không viết steps/features.
   Mạch ngắn trên slide: chị Trâm hỏi giá nệm 1m6 → AI hỏi dài, rộng, dày → 1m6 x 2m dày 15cm 3.490.000đ
     → mời ghé showroom nằm thử → khách ở Dĩ An muốn đặt gửi luôn → xin SĐT + địa chỉ → lên đơn
     → chăm sóc sau bán: ga chống thấm, chăn ga, gối, topper, gối ôm.
   Theo quy tắc 25/11/2026: AI chỉ báo giá, gửi ảnh, hỏi kích thước/số lượng, xin SĐT + địa chỉ; không tự tính, không check khách cũ/mới.
   Không hứa chữa đau lưng: slide "AI không trả lời bừa" lấy đúng ca AI sai hứa "hết đau lưng".
   Tên cửa hàng (Nệm Thanh An), giá, khách, SĐT, địa chỉ: dữ liệu minh họa. Ảnh: Unsplash, ảnh thật; dùng đường dẫn trong máy. */
(function () {
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'nem': '1583535045024-e2479a694777',           // nệm chần gòn trên giường (ảnh quảng cáo)
    'nem-chan': '1647376036543-f9f543601a1d',      // mặt nệm chần gòn cận cảnh
    'nem-vien': '1759176170553-7c078c66c514',      // viền nệm trắng
    'nem-mat': '1759176170879-6bd7073ab4f4',       // mặt nệm chần ô
    'phong-ngu': '1560185128-e173042f79dd',        // phòng ngủ, giường nệm trắng
    'phong-ngu-2': '1505693416388-ac5ce068fe85',   // phòng ngủ đầu giường bọc nệm
    'giuong-cua-so': '1506720186575-11354d325017', // giường cạnh cửa sổ
    'nam-thu': '1495197359483-d092478c170a',       // người nằm trên nệm
    'ngu-day': '1552650272-b8a34e21bc4b',          // ngủ dậy vươn vai trên giường
    'goi': '1584100936595-c0654b55a2e2',           // gối trắng
    'goi-2': '1600414428640-f78a67c2aa3b',         // 2 gối trên giường
    'ga': '1598535746036-87d13382f6a6',            // ga trắng
    'chan-ga': '1762199904138-d163fe89540a',       // bộ chăn ga trắng
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    shop: { name: 'Nệm Thanh An', initials: 'TA' },
    headline: { pre: 'Hệ thống AI chatbot giúp tăng trung bình', em: '62% tỷ lệ chốt đơn' },
    sub: 'Tự động hóa toàn bộ quy trình chốt đơn, bám đuổi, lên đơn và chăm sóc khách để tăng hiệu quả bán hàng.',
    cta: 'Dùng thử miễn phí tại **preny.ai**\nHotline **0389 647 778**',

    images: Object.fromEntries(Object.entries(IMG).map(([k, id]) => [k, L(id)])),

    deck: {
      demoDoc: {
        khach: 'Trâm',
        sanPham: 'Nệm cao su non 5 vùng',
        binhLuan: 'Nệm 1m6 giá bao nhiêu shop?',
        post: {
          tieuDe: 'NỆM CAO SU NON 5 VÙNG 🛏️',
          dong: ['Đủ size 1m2 – 1m8, dày 10 / 15cm', 'Chỉ từ 2.690K, bảo hành 10 năm', 'Giao miễn phí TP.HCM, Bình Dương', 'Showroom Tân Bình mời nằm thử'],
          anh: ['nem', 'phong-ngu', 'nem-chan', 'nam-thu'],
        },
      },
      dashboard: [
        { ten: 'Nệm cao su non <span class="grad">1m6</span>', den: '21/07/2026', khach: 29, tyLe: 0.62 },
        { ten: 'Nệm cao su non <span class="grad">1m8</span>', den: '18/08/2026', khach: 20, tyLe: 0.59 },
        { ten: 'Gối, <span class="grad">chăn ga</span>', den: '26/09/2026', khach: 16, tyLe: 0.65 },
      ],
      chatbot: {
        chat: [
          { ref: { img: L(IMG['nem']), ten: 'Nệm cao su non 5 vùng' } },
          { kh: 'Nệm 1m6 giá bao nhiêu shop?' },
          { ai: 'Dạ nệm bên em **từ 2.690.000đ**, tùy size ạ. Giường nhà mình **dài, rộng bao nhiêu**, chị muốn nệm **dày mấy phân** ạ?', meta: '⚡ Preny AI trả lời sau 2 giây' },
          { kh: '1m6 x 2m, dày 15 phân' },
          { ai: 'Dạ nệm **1m6 x 2m, dày 15cm** giá **3.490.000đ** ạ. Chị rảnh ghé showroom **145 Cộng Hòa, Tân Bình** nằm thử nha.' },
          { kh: 'nhà c ở Dĩ An xa, đặt gửi luôn được ko e?' },
          { ai: 'Dạ được ạ, giao miễn phí tận nhà. Chị gửi em **SĐT và địa chỉ** để em lên đơn nha.' },
          { kh: 'Trâm, 0908 517 362, 27 đường số 9 KDC Tân Hòa, Dĩ An' },
          { don: true },
          { ok: true },
        ],
        don: {
          ten: 'Trâm', sdt: '0908 517 362', diaChi: '27 đường số 9, KDC Tân Hòa, Đông Hòa, Dĩ An', ma: '#TA26126', phi: 'miễn phí',
          sp: [{ img: L(IMG['nem']), ten: 'Nệm cao su non 5 vùng 1m6 x 2m, dày 15cm', sl: 1, dv: 'tấm', gia: 3490000 }],
        },
        anh: {
          img: L(IMG['phong-ngu-2']),
          kh: 'Giường c giống hình này, đặt nệm 15 phân có bị cao quá ko e?',
          ai: 'Dạ giường chị là **giường bọc nệm có đầu giường cao**, đặt nệm **dày 15cm** vẫn vừa ạ. Chị đo giúp em **dài, rộng lòng giường** để em báo đúng size nha.',
        },
      },
      afterSale: {
        loi: 'Cảm ơn chị Trâm đã chọn nệm Thanh An 💛 Khách mua nệm bên em hay lấy kèm mấy món này ạ:',
        sp: [
          { img: L(IMG['ga']), ten: 'Ga chống thấm 1m6 x 2m', gia: 330000 },
          { img: L(IMG['chan-ga']), ten: 'Bộ chăn ga cotton 1m6', gia: 990000 },
          { img: L(IMG['goi-2']), ten: 'Gối cao su non (cặp)', gia: 450000 },
          { img: L(IMG['nem-mat']), ten: 'Topper làm mềm mặt nệm 1m6', gia: 1190000 },
          { img: L(IMG['goi']), ten: 'Gối ôm cao su non', gia: 252000, cu: 280000 },
        ],
        khach: 'Lấy thêm c 1 ga chống thấm nha e',
        pill: '🛍 Khách lấy thêm ngay: đơn tăng từ 3.490.000đ lên 3.820.000đ',
        fmm: {
          chao: 'Chào chị Trâm 👋 Nệm Thanh An đang giảm 15% chăn ga cotton cho khách đã mua nệm, thay bộ mới đón Tết, em gửi chị xem nha!',
          img: L(IMG['chan-ga']), nhan: 'CHĂN GA ĐÓN TẾT',
          ten: 'Bộ chăn ga cotton đủ size', mo: 'Giảm 15% cho khách đã mua nệm.', nut: 'Xem ưu đãi',
        },
        zbs: {
          ten: 'Tặng chị Trâm voucher 100.000đ',
          mo: 'Cảm ơn chị đã mua nệm tại Nệm Thanh An. Gửi chị ưu đãi cho lần mua tiếp theo:',
          dong: [['Mã voucher', '**THANHAN100**'], ['Ưu đãi', 'Giảm 100.000đ đơn từ 1.000.000đ'], ['Hạn dùng', '31/01/2027']],
          nut: 'Dùng voucher ngay',
        },
      },
      bamDuoi: {
        cmpDung: ['Khách nhắn xong im → nhắc đúng size nệm khách đã hỏi (thẻ <b>#Nem1m6</b> từ quảng cáo)',
                  'Báo giá xong im → bám đuổi theo giá: giao miễn phí, quà tặng (thẻ <b>#HoiGia</b>)',
                  'Đúng nhu cầu, đúng lý do im → khách quay lại đặt hàng'],
        hoi: 'Nệm 1m6 giá bao nhiêu shop?',
        traLoiThuong: 'Dạ từ 2.690.000đ ạ.',
        refImg: L(IMG['nem']), refTen: 'Nệm cao su non 5 vùng',
        vd1: {
          kh: 'Nệm này nằm có bị nóng lưng không shop? Phòng c không có máy lạnh',
          ai: 'Dạ mặt nệm bọc vải chần gòn, thoáng hơn nệm mút thường ạ. Giường chị dài, rộng bao nhiêu ạ?',
          tag: '🏷 #Nem1m6', tagNote: 'thẻ từ quảng cáo · khách im 1 ngày',
          nhac: 'Chị ơi, em gửi chị <b>ảnh thật mặt nệm 1m6</b> bên em, vải chần gòn, viền may chắc ạ 🛏️',
          dung: '🎯 Theo thẻ #Nem1m6: nhắc đúng size khách hỏi',
          khach: 'Giường c 1m6 x 2m, lấy loại dày 15 phân',
        },
        vd2: {
          kh: 'Nệm 1m8 x 2m dày 15 phân bao nhiêu vậy shop?',
          ai: 'Dạ nệm 1m8 x 2m, dày 15cm giá <b>3.890.000đ</b> ạ.',
          tag: '🏷 #HoiGia', tagNote: 'báo giá xong khách im 1 ngày',
          nhac: 'Chị ơi, nệm 1m8 chị hỏi hôm qua, bên em <b>giao miễn phí, tặng 2 gối cao su non</b> ạ. Em lên đơn cho chị nha?',
          dung: '🎯 Theo thẻ #HoiGia: bám đuổi theo giá, đúng lý do khách im',
          khach: 'Ok lên đơn cho c nha e',
        },
      },
      binhLuan: {
        post: '<b>Nệm cao su non 5 vùng</b> · đủ size 1m2 – 1m8, chỉ từ 2.690K, bảo hành 10 năm, giao miễn phí 🛏️',
        img: L(IMG['phong-ngu']),
        kav: 'ĐH', kten: 'Đức Huy', hoi: 'Có giao Bình Dương không shop? Nệm 1m8 bao nhiêu?',
        traLoi: 'Dạ chào anh Huy! Shop vừa nhắn tin báo giá chi tiết cho anh, anh xem tin nhắn nhé 💬',
        act2: 'Nhắn tin riêng báo giá nệm 1m8',
        nhan: 'Chào anh Huy! Nệm 1m8 x 2m bên em <b>dày 10cm 3.090.000đ</b>, <b>dày 15cm 3.890.000đ</b>, giao miễn phí Bình Dương ạ. Anh lấy loại dày mấy phân ạ?',
        sp: { ten: 'Nệm cao su non 1m8 x 2m', gia: 'từ 3.090.000đ', img: L(IMG['phong-ngu']) },
        khach: 'Lấy a loại 15 phân, giao Thuận An nha',
      },
      duLieu: {
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: nằm nệm này hết đau lưng', 'Khách thất vọng, đòi trả, shop mất uy tín'],
        hoi: 'Mẹ c hay đau lưng, nằm nệm này có hết đau không e?',
        aiSai: 'Dạ nệm 5 vùng nằm 1 tuần là <b>hết đau lưng</b> luôn chị nhé 🥰',
        thucTe: '⚠ Thực tế: nệm chỉ giúp nằm êm, không lún; đau lưng cần đi khám, nệm không chữa được',
        gian: 'Nằm 2 tuần mẹ c vẫn đau! Sao nói hết đau lưng? 😠',
        cho: 'Dạ chị chờ em một chút để em kiểm tra chính xác cho chị nhé!',
        nv: 'Nhân viên Phúc · người thật',
        nvTraLoi: 'Dạ em xin lỗi chị ạ. Nệm chỉ giúp nằm êm, nâng đỡ đều, không chữa được đau lưng, mẹ chị nên đi khám ạ. Nếu mẹ thấy nệm hơi cứng, em đổi qua loại mềm hơn cho chị nhé!',
      },
    },
  };
})();
