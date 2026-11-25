/* Kịch bản: THỰC PHẨM BÁN SỈ (chả lụa, giò thủ, pate, thịt nguội, có combo) — BẢN TRÌNH CHIẾU, nhóm THƯƠNG MẠI ĐIỆN TỬ.
   Làm 25/11/2026 theo người dùng: "Thực phẩm chuyên bán sỉ: bán sỉ lẻ chả lụa, giò thủ, pate, thịt nguội có combo
   (AI lên kịch bản ngắn gọn, khách xin giá, AI hỏi số lượng, xin sđt và địa chỉ chốt đơn luôn)".
   Từ 23/11/2026 bỏ demo chat vào thẳng (&demo): file chỉ có phần deck cho Bài 1 (slide), không viết steps/features.
   Mạch ngắn trên slide: anh Tài chủ xe bánh mì hỏi giá sỉ chả lụa, pate
     → AI báo giá sỉ (từ 5kg), hỏi khách muốn lấy mấy ký → khách lấy combo 5kg 830.000đ (25/11/2026 bỏ hỏi số ổ: AI chưa tự tính số lượng)
     → xin SĐT + địa chỉ → lên đơn luôn → chăm sóc sau bán: gợi ý chả bò, pate hũ, thịt nguội, giò lụa Tết đặt trước.
   Không có tin tự động cập nhật vận chuyển. Không hứa an toàn tuyệt đối: chỉ nói hàng làm mỗi ngày, bảo quản ngăn mát 5–7 ngày.
   Tên xưởng, giá, khách, SĐT, địa chỉ: dữ liệu minh họa (không dùng thương hiệu giò chả thật).
   Ảnh: Pexels (file px-…, phần lớn chụp ở Việt Nam) + Unsplash, ảnh thật, không phải hàng của xưởng.
   Ảnh Pexels không đi qua hàm U() kiểu Unsplash: mọi ảnh ở đây dùng đường dẫn trong máy. */
(function () {
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'cha-lua': 'px-9834372',                         // chả lụa cắt lát, chén nước mắm ớt (ảnh quảng cáo)
    'banh-mi': 'px-17748170',                        // ổ bánh mì kẹp chả, rau
    'banh-mi-2': 'px-17748172',                      // bánh mì thịt nguội cận cảnh
    'banh-mi-chao': 'px-6138758',                    // bánh mì chảo: trứng, pate, xúc xích
    'cho-thit': 'px-3543662',                        // sạp thịt chợ Việt
    'pate': 'px-7491909',                            // hũ pate với bánh mì nướng
    'pate-2': 'px-8696528',                          // pate gan cắt khối
    'thit-nguoi': 'px-5491285',                      // thịt nguội cuộn lát
    'thit-nguoi-2': 'px-6389705',                    // thịt nguội xếp đĩa
    'cha-lat': 'px-34020921',                        // chả cắt lát trên đĩa gỗ
    'quay-deli': 'px-34756070',                      // tủ kính quầy thịt nguội
    'banh-chung': 'px-30326157',                     // mâm Tết có bánh chưng
    'thit-nguoi-3': '1607756794535-ba48a526b73a',    // jambon cắt lát
    'board': '1692311358804-34b31f6ef43c',           // thớt gỗ nhiều loại thịt nguội
    'thung-hang': '1607687441809-dd332b5b9c18',      // hộp giấy đóng hàng
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    shop: { name: 'Giò Chả Bà Sáu', initials: 'BS' },
    headline: { pre: 'Hệ thống AI chatbot giúp tăng trung bình', em: '62% tỷ lệ chốt đơn' },
    sub: 'Tự động hóa toàn bộ quy trình chốt đơn, bám đuổi, lên đơn và chăm sóc khách để tăng hiệu quả bán hàng.',
    cta: 'Dùng thử miễn phí tại **preny.ai**\nHotline **0389 647 778**',

    images: Object.fromEntries(Object.entries(IMG).map(([k, id]) => [k, L(id)])),

    deck: {
      demoDoc: {
        khach: 'Tài',
        sanPham: 'Chả lụa, giò thủ, pate bán sỉ',
        binhLuan: 'Giá sỉ chả lụa sao shop?',
        post: {
          tieuDe: 'GIÒ CHẢ, PATE BÁN SỈ CHO XE BÁNH MÌ 🥖',
          dong: ['Chả lụa sỉ 175K/kg', 'Combo bánh mì 5kg chỉ 830K', 'Hàng làm mỗi ngày', 'Giao trong ngày nội thành'],
          anh: ['cha-lua', 'pate', 'thit-nguoi', 'banh-mi'],
        },
      },
      dashboard: [
        { ten: 'Chả lụa, <span class="grad">giò thủ</span>', den: '21/07/2026', khach: 31, tyLe: 0.63 },
        { ten: 'Pate, <span class="grad">thịt nguội</span>', den: '18/08/2026', khach: 22, tyLe: 0.6 },
        { ten: 'Combo <span class="grad">bánh mì 5kg</span>', den: '26/09/2026', khach: 17, tyLe: 0.65 },
      ],
      chatbot: {
        chat: [
          { ref: { img: L(IMG['cha-lua']), ten: 'Chả lụa, giò thủ, pate bán sỉ' } },
          { kh: 'Giá sỉ chả lụa vs pate sao shop? a bán xe bánh mì' },
          { ai: 'Dạ sỉ từ 5kg: **chả lụa 175.000đ/kg**, **pate gan 120.000đ/kg** ạ. Anh muốn lấy **mấy ký, loại nào** ạ?', meta: '⚡ Preny AI trả lời sau 2 giây' },
          { kh: 'lấy a combo 5kg nha e' },
          { ai: 'Dạ em ghi **combo 5kg** (2kg chả lụa, 1kg giò thủ, 1kg pate, 1kg thịt nguội) **830.000đ**, giao trong ngày ạ. Anh gửi em SĐT, địa chỉ để em lên đơn nha.' },
          { kh: 'Tài, 0937 254 816, 112 Quang Trung, Gò Vấp' },
          { ai: 'Dạ em lên đơn combo 5kg, giao trước 3h chiều nay cho anh ạ ⚡' },
          { don: true },
          { ok: true },
        ],
        don: {
          ten: 'Tài', sdt: '0937 254 816', diaChi: '112 Quang Trung, P.10, Gò Vấp', ma: '#BS25118', phi: 'miễn phí',
          sp: [{ img: L(IMG['cha-lua']), ten: 'Combo bánh mì 5kg (chả lụa, giò thủ, pate, thịt nguội)', sl: 1, dv: 'combo', gia: 830000 }],
        },
        anh: {
          img: L(IMG['banh-mi-chao']),
          kh: 'Bán thêm bánh mì chảo như hình thì lấy loại nào e?',
          ai: 'Dạ ảnh anh gửi là **bánh mì chảo** có pate, chả, xúc xích ạ. Anh lấy thêm **pate gan** và **chả lụa** cắt hạt lựu, bên em có **combo bánh mì chảo 5kg** giá sỉ cho anh luôn nha.',
        },
      },
      afterSale: {
        loi: 'Cảm ơn anh Tài đã lấy hàng ở Bà Sáu 💛 Xe bánh mì bên em hay lấy kèm mấy món này ạ:',
        sp: [
          { img: L(IMG['cha-lat']), ten: 'Chả bò (1kg)', gia: 260000 },
          { img: L(IMG['pate-2']), ten: 'Pate gan hũ 500g', gia: 65000 },
          { img: L(IMG['thit-nguoi-2']), ten: 'Thịt nguội jambon (1kg)', gia: 190000 },
          { img: L(IMG['banh-mi-chao']), ten: 'Combo bánh mì chảo 5kg', gia: 790000 },
          { img: L(IMG['banh-chung']), ten: 'Giò lụa Tết đặt trước (1kg)', gia: 230000, cu: 250000 },
        ],
        khach: 'Lấy thêm a 1kg chả bò nha e',
        pill: '🛍 Khách lấy thêm ngay: đơn tăng từ 830.000đ lên 1.090.000đ',
        fmm: {
          chao: 'Chào anh Tài 👋 Bà Sáu nhận đặt trước giò lụa, giò thủ cho Tết, xe bánh mì đặt sớm giữ giá sỉ, em gửi anh xem trước nha!',
          img: L(IMG['banh-chung']), nhan: 'ĐẶT TRƯỚC HÀNG TẾT',
          ten: 'Giò lụa, giò thủ Tết', mo: 'Khách sỉ đặt trước giảm 20.000đ/kg.', nut: 'Đặt trước',
        },
        zbs: {
          ten: 'Tặng anh Tài voucher 50.000đ',
          mo: 'Cảm ơn anh đã lấy hàng tại Giò Chả Bà Sáu. Gửi anh ưu đãi cho lần đặt tiếp theo:',
          dong: [['Mã voucher', '**BASAU50**'], ['Ưu đãi', 'Giảm 50.000đ đơn sỉ từ 800.000đ'], ['Hạn dùng', '31/01/2027']],
          nut: 'Dùng voucher ngay',
        },
      },
      bamDuoi: {
        cmpDung: ['Khách nhắn xong im → nhắc đúng món khách đã hỏi (thẻ <b>#ChaLua</b> từ quảng cáo)',
                  'Báo giá xong im → bám đuổi theo giá: giá combo, giao trong ngày (thẻ <b>#HoiGia</b>)',
                  'Đúng nhu cầu, đúng lý do im → khách quay lại đặt hàng'],
        hoi: 'Giá sỉ chả lụa sao shop?',
        traLoiThuong: 'Dạ 175.000đ/kg ạ.',
        refImg: L(IMG['cha-lua']), refTen: 'Chả lụa bán sỉ',
        vd1: {
          kh: 'Chả lụa bên shop có dai, có thơm không? A bán bánh mì',
          ai: 'Dạ chả bên em giã thịt nạc mỗi sáng, dai giòn ạ. Anh muốn lấy mấy ký ạ?',
          tag: '🏷 #ChaLua', tagNote: 'thẻ từ quảng cáo · khách im 1 ngày',
          nhac: 'Anh ơi, em gửi anh <b>ảnh thật mẻ chả lụa</b> sáng nay, cắt lát dày vừa ổ bánh mì ạ 🥖',
          dung: '🎯 Theo thẻ #ChaLua: nhắc đúng món khách hỏi',
          khach: 'Lấy a 3kg chả lụa nha e',
        },
        vd2: {
          kh: 'Combo 5kg bao nhiêu vậy shop?',
          ai: 'Dạ anh lấy combo bánh mì 5kg <b>830.000đ</b> ạ.',
          tag: '🏷 #HoiGia', tagNote: 'báo giá xong khách im 1 ngày',
          nhac: 'Anh ơi, combo 5kg anh hỏi hôm qua, đặt trước 11h là em <b>giao trong ngày, miễn phí giao</b> ạ. Em lên đơn cho anh nha?',
          dung: '🎯 Theo thẻ #HoiGia: bám đuổi theo giá, đúng lý do khách im',
          khach: 'Ok lên đơn cho a nha e',
        },
      },
      binhLuan: {
        post: '<b>Giò chả, pate bán sỉ</b> cho xe bánh mì · chả lụa 175K/kg, combo bánh mì 5kg chỉ 830K, giao trong ngày 🥖',
        img: L(IMG['pate']),
        kav: 'TB', kten: 'Thanh Bình', hoi: 'Pate sỉ cho quán ăn sáng giá sao? Có giao Thủ Đức không?',
        traLoi: 'Dạ chào anh Bình! Shop vừa nhắn tin báo giá chi tiết cho anh, anh xem tin nhắn nhé 💬',
        act2: 'Nhắn tin riêng báo giá sỉ pate',
        nhan: 'Chào anh Bình! Pate gan sỉ bên em <b>120.000đ/kg</b>, từ 5kg giao Thủ Đức trong ngày ạ. Anh muốn lấy mấy ký ạ?',
        sp: { ten: 'Pate gan bán sỉ', gia: '120.000đ/kg', img: L(IMG['pate']) },
        khach: 'Tầm 3kg/ngày, lấy a 6kg trước',
      },
      duLieu: {
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: để ngoài tủ lạnh vẫn không hư', 'Hàng hư, khách mất mối, shop mất uy tín'],
        hoi: 'Chả này để ngoài không tủ lạnh được mấy ngày e? Xe a không có tủ',
        aiSai: 'Dạ để ngoài <b>3 ngày vẫn ngon</b>, không cần tủ lạnh anh nhé 🥰',
        thucTe: '⚠ Thực tế: giò chả cần bảo quản ngăn mát, dùng trong 5–7 ngày; để ngoài trời nóng dễ hư',
        gian: 'Để ngoài có 1 ngày mà chả chua rồi! Sao nói 3 ngày? 😠',
        cho: 'Dạ anh chờ em một chút để em kiểm tra chính xác cách bảo quản cho anh nhé!',
        nv: 'Nhân viên Sáu · người thật',
        nvTraLoi: 'Dạ em xin lỗi anh ạ. Giò chả cần để ngăn mát, xe không có tủ thì anh lấy ít, để thùng đá và dùng trong ngày. Em đổi cho anh phần bị chua và chia đơn giao 2 ngày/lần cho hàng luôn mới nhé!',
      },
    },
  };
})();
