/* Kịch bản: TRANH ẢNH TRANG TRÍ (bán lẻ tranh canvas giá rẻ, bộ 3 tranh treo phòng khách) — BẢN TRÌNH CHIẾU, nhóm THƯƠNG MẠI ĐIỆN TỬ.
   Làm 25/11/2026 theo người dùng: "Tranh ảnh, khách làm về lĩnh vực bán lẻ tranh ảnh (giá tranh giá rẻ, nên bán chốt đơn luôn)".
   Từ 23/11/2026 bỏ demo chat vào thẳng (&demo): file chỉ có phần deck cho Bài 1 (slide), không viết steps/features.
   Mạch ngắn trên slide: chị Bích Phương mới dọn nhà, sofa dài 2m, hỏi treo size nào cho cân, tường bê tông có cần khoan không, tranh có phai không
     → AI: sofa 2m hợp bộ 3 tranh 40x60cm (tổng ngang khoảng 1m3), 590.000đ/bộ, đinh 3 chân không cần khoan, mực in bền màu khi treo trong nhà
     → hỏi mẫu lá cây xanh / trừu tượng tông kem / đen trắng tối giản → khách im → bám đuổi theo thẻ #Bo3Tranh (ảnh thật tranh treo nhà khách),
       #HoiGia (freeship, tặng thêm bộ đinh) → chốt, xin SĐT + địa chỉ, lên đơn → chăm sóc sau bán: gợi ý tranh phòng ngủ, tranh đơn khổ lớn, đèn rọi tranh.
   Không có tin tự động cập nhật vận chuyển.
   Tên shop, giá, kích thước, chính sách, tên khách, SĐT, địa chỉ: dữ liệu minh họa. Ảnh: Unsplash (ảnh thật, không phải hàng của shop). */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'bo-3-truu-tuong': '1764010533326-c6916f3d6252', // bộ 3 tranh đen trắng tối giản trên sofa xám (ảnh quảng cáo)
    'la-cay': '1787507136009-19ae8d98d867',          // tranh lá cây xanh khung gỗ
    'truu-tuong-kem': '1767614373251-94259ec635f3',  // tranh trừu tượng tông kem, khung vàng
    'hoa-co-dien': '1787784492234-9063b22e2312',     // 3 tranh hoa cổ điển có đèn rọi
    'boho': '1638430323177-8cb2d1febb0c',            // bộ tranh boho tông cam đất
    'thanh-pho': '1773867567786-99e27b041610',       // tranh thành phố đen trắng
    'phong-canh': '1741671286168-64f619daf84d',      // tranh phong cảnh khổ lớn trên sofa
    'phong-ngu': '1724110657620-8ccbb7a40a4f',       // tranh treo đầu giường
    'bo-6': '1771287490586-356754be24dc',            // bộ 6 khung ảnh trên sofa
    'treo-tranh': '1789841417993-ce273eedcb09',      // người đang treo tranh lên tường
    'day-thung': '1793891546305-c8a3f57a5514',       // tranh dây thừng macrame
    'cay-dua': '1790683969772-74eaae32a0d3',         // 2 tranh cây dừa trên sofa
    'den-trang': '1774578342245-a9d9574a75f7',       // 2 tranh đen trắng nhỏ
    'son-dau': '1583766432613-4e668f167f3f',         // tranh phong cảnh núi đồi
    'hop-kin': '1607166452427-7e4477079cb9',         // hộp carton đóng gói
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    shop: { name: 'Tranh Treo Tường Mộc Lan', initials: 'ML' },
    headline: { pre: 'Hệ thống AI chatbot giúp tăng trung bình', em: '62% tỷ lệ chốt đơn' },
    sub: 'Tự động hóa toàn bộ quy trình chốt đơn, bám đuổi, lên đơn và chăm sóc khách để tăng hiệu quả bán hàng.',
    cta: 'Dùng thử miễn phí tại **preny.ai**\nHotline **0389 647 778**',

    images: Object.fromEntries(Object.entries(IMG).map(([k, id]) => [k, U(id)])),

    deck: {
      demoDoc: {
        khach: 'Bích Phương',
        sanPham: 'Bộ 3 tranh canvas 40x60',
        binhLuan: 'Sofa 2m treo size nào shop?',
        post: {
          tieuDe: 'BỘ 3 TRANH CANVAS TREO PHÒNG KHÁCH 🖼️',
          dong: ['Bộ 3 tranh 40x60cm chỉ 590K', 'Tráng gương, bền màu', 'Đinh 3 chân, không cần khoan', 'Freeship toàn quốc'],
          anh: ['bo-3-truu-tuong', 'la-cay', 'truu-tuong-kem', 'phong-canh'],
        },
      },
      dashboard: [
        { ten: 'Bộ 3 tranh <span class="grad">canvas phòng khách</span>', den: '21/07/2026', khach: 28, tyLe: 0.62 },
        { ten: 'Tranh phòng ngủ, <span class="grad">tranh đơn khổ lớn</span>', den: '18/08/2026', khach: 19, tyLe: 0.58 },
        { ten: 'Tranh lá cây, <span class="grad">tranh tối giản</span>', den: '26/09/2026', khach: 15, tyLe: 0.6 },
      ],
      chatbot: {
        chat: [
          { ref: { img: L(IMG['bo-3-truu-tuong']), ten: 'Bộ 3 tranh canvas 40x60' } },
          { kh: 'Sofa nhà c dài 2m treo size nào cho cân shop? Tường bê tông có phải khoan ko?' },
          { ai: 'Dạ sofa 2m chị treo **bộ 3 tranh 40x60cm** là cân ạ, tổng ngang khoảng 1m3. Giá **590.000đ/bộ**, kèm **đinh 3 chân, không cần khoan** ạ.', meta: '⚡ Preny AI trả lời sau 2 giây' },
          { kh: 'Tranh có bị phai ko e?' },
          { ai: 'Dạ tranh **tráng gương, mực in bền màu** khi treo trong nhà ạ. Chị lấy mẫu lá cây, trừu tượng tông kem hay đen trắng, gửi em SĐT, địa chỉ nha.' },
          { kh: 'Mẫu lá cây. Bích Phương, 0938 627 415, 32 Nguyễn Thượng Hiền, Q.3' },
          { ai: 'Dạ em lên đơn bộ 3 tranh lá cây, freeship cho chị luôn ạ ⚡' },
          { don: true },
          { ok: true },
        ],
        don: {
          ten: 'Bích Phương', sdt: '0938 627 415', diaChi: '32 Nguyễn Thượng Hiền, P.5, Q.3', ma: '#ML25118', phi: 'miễn phí',
          sp: [{ img: L(IMG['la-cay']), ten: 'Bộ 3 tranh canvas lá cây · 40x60cm', sl: 1, dv: 'bộ', gia: 590000 }],
        },
        anh: {
          img: L(IMG['boho']),
          kh: 'Bên e có mẫu giống hình này ko?',
          ai: 'Dạ ảnh chị gửi là **bộ tranh boho tông cam đất**, bên em có **bộ 3 tranh boho 40x60cm** cùng phong cách này ạ, giá 590.000đ/bộ. Em gửi chị ảnh thật mẫu bên em nha.',
        },
      },
      afterSale: {
        loi: 'Cảm ơn chị Bích Phương đã mua ở Mộc Lan 💛 Khách mua tranh phòng khách hay lấy kèm mấy món này ạ:',
        sp: [
          { img: L(IMG['phong-ngu']), ten: 'Tranh đầu giường phòng ngủ 50x70', gia: 450000 },
          { img: L(IMG['phong-canh']), ten: 'Tranh đơn khổ lớn 80x120', gia: 690000 },
          { img: L(IMG['den-trang']), ten: 'Bộ 2 tranh đen trắng 30x40', gia: 390000 },
          { img: L(IMG['bo-6']), ten: 'Bộ 6 khung ảnh gia đình', gia: 350000 },
          { img: L(IMG['hoa-co-dien']), ten: 'Đèn rọi tranh gắn tường', gia: 220000, cu: 250000 },
        ],
        khach: 'Lấy thêm c tranh phòng ngủ nha e',
        pill: '🛍 Khách mua thêm ngay: đơn tăng từ 590.000đ lên 1.040.000đ',
        fmm: {
          chao: 'Chào chị Bích Phương 👋 Mộc Lan vừa về bộ tranh lá cây mới cho phòng ngủ, hợp với bộ tranh phòng khách chị đã mua, gửi chị xem trước nha!',
          img: L(IMG['phong-ngu']), nhan: 'HÀNG MỚI VỀ',
          ten: 'Tranh lá cây phòng ngủ', mo: 'Khách cũ giảm 10%, freeship.', nut: 'Xem ngay',
        },
        zbs: {
          ten: 'Tặng chị Bích Phương voucher 50.000đ',
          mo: 'Cảm ơn chị đã mua tranh tại Tranh Treo Tường Mộc Lan. Gửi chị ưu đãi cho lần mua tiếp theo:',
          dong: [['Mã voucher', '**MOCLAN50**'], ['Ưu đãi', 'Giảm 50.000đ đơn từ 400.000đ'], ['Hạn dùng', '31/01/2027']],
          nut: 'Dùng voucher ngay',
        },
      },
      bamDuoi: {
        cmpDung: ['Khách nhắn xong im → nhắc đúng bộ tranh khách đã xem (thẻ <b>#Bo3Tranh</b> từ quảng cáo)',
                  'Báo giá xong im → bám đuổi theo giá: quà tặng, freeship (thẻ <b>#HoiGia</b>)',
                  'Đúng nhu cầu, đúng lý do im → khách quay lại mua'],
        hoi: 'Bộ 3 tranh giá sao shop?',
        traLoiThuong: 'Dạ 590.000đ 1 bộ ạ.',
        refImg: L(IMG['bo-3-truu-tuong']), refTen: 'Bộ 3 tranh canvas 40x60',
        vd1: {
          kh: 'Treo lên tường có nhìn rẻ tiền ko shop? Sợ màu ngoài đời khác ảnh',
          ai: 'Dạ tranh tráng gương, khung composite ạ. Phòng khách chị tông màu gì để em gợi ý mẫu nha?',
          tag: '🏷 #Bo3Tranh', tagNote: 'thẻ từ quảng cáo · khách im 1 ngày',
          nhac: 'Chị ơi, em gửi chị <b>ảnh thật bộ 3 tranh</b> khách bên em treo trên sofa xám, chụp bằng điện thoại, màu y như ngoài đời ạ 🖼️',
          dung: '🎯 Theo thẻ #Bo3Tranh: nhắc đúng nỗi lo màu thật khác ảnh',
          khach: 'Đẹp đó e, sofa c màu kem',
        },
        vd2: {
          kh: 'Bộ 3 tranh 40x60 hết bao nhiêu vậy shop?',
          ai: 'Dạ bộ 3 tranh 40x60cm <b>590.000đ</b>, kèm đinh 3 chân ạ.',
          tag: '🏷 #HoiGia', tagNote: 'báo giá xong khách im 1 ngày',
          nhac: 'Chị ơi, bộ tranh chị hỏi hôm qua, chốt trong tuần em <b>freeship, tặng thêm 1 bộ đinh 3 chân</b> ạ. Em lên đơn cho chị nha?',
          dung: '🎯 Theo thẻ #HoiGia: bám đuổi theo giá, đúng lý do khách im',
          khach: 'Ok lấy c mẫu lá cây nha e',
        },
      },
      binhLuan: {
        post: '<b>Bộ 3 tranh canvas</b> treo phòng khách · 40x60cm chỉ 590K, tráng gương, đinh 3 chân không cần khoan 🖼️',
        img: L(IMG['bo-3-truu-tuong']),
        kav: 'KO', kten: 'Kim Oanh', hoi: 'Phòng ngủ treo đầu giường thì size nào shop?',
        traLoi: 'Dạ chào chị Oanh! Shop vừa nhắn tin tư vấn chi tiết cho chị, chị xem tin nhắn nhé 💬',
        act2: 'Nhắn tin riêng gợi ý đúng size',
        nhan: 'Chào chị Oanh! Giường 1m6 chị treo <b>tranh đơn 50x70cm</b> hoặc bộ 2 tranh 40x60 là cân ạ, giá <b>từ 450.000đ</b>. Chị gửi em SĐT, địa chỉ để em lên đơn nha?',
        sp: { ten: 'Tranh đầu giường 50x70', gia: '450.000đ', img: L(IMG['phong-ngu']) },
        khach: 'Lấy c tranh 50x70 nha',
      },
      duLieu: {
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: không phai suốt đời, treo ngoài trời được', 'Khách đổi trả, shop mất uy tín'],
        hoi: 'Tranh này không phai suốt đời đúng k e? Treo ngoài ban công được ko?',
        aiSai: 'Dạ đúng ạ! Tranh <b>không phai suốt đời</b>, treo <b>ngoài trời</b> thoải mái chị nhé 🥰',
        thucTe: '⚠ Thực tế: tranh bền màu khi treo trong nhà; tránh nắng chiếu trực tiếp và mưa',
        gian: 'Treo ban công 2 tháng đã bạc màu! Sao nói không phai? 😠',
        cho: 'Dạ chị chờ em một chút để em kiểm tra chính xác thông tin sản phẩm cho chị nhé!',
        nv: 'Nhân viên Diệu · người thật',
        nvTraLoi: 'Dạ em xin lỗi chị ạ. Tranh canvas bền màu khi treo trong nhà, nắng mưa ngoài ban công làm tranh bạc nhanh. Em đổi cho chị bộ mới để treo trong phòng khách, miễn phí vận chuyển nhé!',
      },
    },
  };
})();
