/* Kịch bản: NỘI THẤT GIA ĐÌNH (gương, bàn ghế, tủ) — BẢN TRÌNH CHIẾU, nhóm THƯƠNG MẠI ĐIỆN TỬ.
   Làm 23/11/2026 theo người dùng: "Nội thất ( gương, bàn ghế, tủ... )".
   Từ 23/11/2026 bỏ demo chat vào thẳng (&demo): ngành mới chỉ có Bài 1 (phần deck bên dưới) và Bài 2 (video ngang,
   demo/bai2/kich-ban-noi-that-gia-dinh-tc.js), nên không viết `steps` / `features` cho demo chat.
   Mạch trên slide: chị Quỳnh ở chung cư hỏi gương đứng toàn thân 790.000đ, sợ méo hình, sợ vỡ khi ship, phòng nhỏ để size nào
     → AI: kính tráng bạc 5 ly soi không méo, đóng gói 5 lớp, vỡ khi giao đổi mới, phòng nhỏ lấy 50x160
     → bám đuổi theo thẻ #guongdung, #HoiGia → lên đơn → gợi ý bàn trà, tủ quần áo, ghế đôn.
   Tên shop, giá, kích thước, chính sách, tên khách, SĐT, địa chỉ: dữ liệu minh họa.
   Ảnh: Unsplash (ảnh thật, không phải hàng của shop). */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'guong-den': '1718894070147-0c1e1921da93',    // gương đứng khung đen trong phòng ngủ (ảnh quảng cáo)
    'guong-den-2': '1718894070052-c7ec7c536ac1',  // gương đứng khung đen cạnh giường
    'guong-vom': '1570974797119-9d44484cd541',    // gương vòm viền vàng để bàn
    'guong-tron': '1774428571582-9bd41e95a6ca',   // gương tròn bàn trang điểm
    'ban-tra': '1581428982868-e410dd047a90',      // bàn trà gỗ chân sắt trước sofa
    'ban-go': '1777513538143-8525eb3943f6',       // bàn trà gỗ nguyên tấm
    'tu-ao': '1784651859318-d9300849bf34',        // tủ quần áo gỗ sáng màu
    'tu-ao-2': '1784651858840-0f077fad4e1e',      // tủ quần áo 5 cánh
    'ghe-go': '1699588772787-1eed3b726e0a',       // ghế gỗ tựa lưng
    'ghe-don': '1634798245965-03669c757183',      // ghế đôn gỗ
    'phong-ngu': '1784653549328-40d0f1d11376',    // phòng ngủ có bàn trang điểm
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    shop: { name: 'Nội Thất Mộc An', initials: 'MA' },
    headline: { pre: 'Hệ thống AI chatbot giúp tăng trung bình', em: '62% tỷ lệ chốt đơn' },
    sub: 'Tự động hóa toàn bộ quy trình chốt đơn, bám đuổi, lên đơn và chăm sóc khách để tăng hiệu quả bán hàng.',
    cta: 'Dùng thử miễn phí tại **preny.ai**\nHotline **0389 647 778**',
    images: Object.fromEntries(Object.entries(IMG).map(([k, id]) => [k, U(id)])),
    features: [],
    steps: [],

    deck: {
      dashboard: [
        { ten: 'Gương đứng, <span class="grad">gương treo tường</span>', den: '21/07/2026', khach: 26, tyLe: 0.58 },
        { ten: 'Bàn trà, <span class="grad">bàn ghế gỗ</span>', den: '18/08/2026', khach: 18, tyLe: 0.56 },
        { ten: 'Tủ quần áo, <span class="grad">kệ tủ</span>', den: '26/09/2026', khach: 12, tyLe: 0.61 },
      ],
      chatbot: {
        chat: [
          { ref: { img: L(IMG['guong-den']), ten: 'Gương đứng toàn thân khung đen' } },
          { kh: 'Gương này soi có méo hình ko shop? Ship có dễ vỡ ko?' },
          { ai: 'Dạ kính **tráng bạc 5 ly**, soi toàn thân **không méo** ạ. Bên em đóng gói **5 lớp**, lỡ vỡ khi giao em **đổi mới** ngay.', meta: '⚡ Preny AI trả lời sau 2 giây' },
          { kh: 'Phòng ngủ c nhỏ 12m² để size nào e?' },
          { ai: 'Dạ phòng 12m² chị lấy **50x160cm, 790.000đ** là vừa, không chiếm chỗ ạ. Chị gửi em SĐT, địa chỉ để em lên đơn nha.' },
          { kh: 'Ok 50x160. Quỳnh, 0909 361 528, căn 1206 tòa B2, 45 Phạm Văn Đồng, Bình Thạnh' },
          { ai: 'Dạ em lên đơn, giao trong 1–2 ngày, tặng chị bộ chặn chân chống trượt ạ ⚡' },
          { don: true },
          { ok: true },
        ],
        don: {
          ten: 'Quỳnh', sdt: '0909 361 528', diaChi: 'Căn 1206 tòa B2, 45 Phạm Văn Đồng, Bình Thạnh', ma: '#MA23118', phi: 'miễn phí nội thành',
          sp: [{ img: L(IMG['guong-den']), ten: 'Gương đứng khung đen 50x160cm', sl: 1, dv: 'cái', gia: 790000 }],
        },
        anh: {
          img: L(IMG['guong-vom']),
          kh: 'Gương như hình này shop có ko?',
          ai: 'Dạ ảnh chị gửi là **gương vòm viền vàng để bàn** ạ. Bên em có mẫu **gương vòm 40x80cm** cùng kiểu, để bàn hoặc treo tường đều được, giá 450.000đ. Em gửi chị ảnh thật nha.',
        },
      },
      afterSale: {
        loi: 'Cảm ơn chị Quỳnh đã mua ở Mộc An 💛 Khách mua gương hay chọn thêm mấy món này cho phòng ạ:',
        sp: [
          { img: L(IMG['ghe-don']), ten: 'Ghế đôn gỗ cao su', gia: 290000 },
          { img: L(IMG['guong-tron']), ten: 'Gương tròn bàn trang điểm', gia: 350000 },
          { img: L(IMG['ban-tra']), ten: 'Bàn trà gỗ chân sắt', gia: 1290000, cu: 1490000 },
          { img: L(IMG['ghe-go']), ten: 'Ghế gỗ tựa lưng', gia: 490000 },
          { img: L(IMG['tu-ao']), ten: 'Tủ quần áo 4 cánh', gia: 3490000 },
        ],
        khach: 'Lấy thêm c cái ghế đôn nha',
        pill: '🛍 Khách mua thêm ngay: đơn tăng từ 790.000đ lên 1.080.000đ',
        fmm: {
          chao: 'Chào chị Quỳnh 👋 Nội Thất Mộc An vừa về mẫu tủ quần áo 4 cánh gỗ sáng, gửi chị xem trước nha!',
          img: L(IMG['tu-ao']), nhan: 'HÀNG MỚI VỀ',
          ten: 'Tủ quần áo 4 cánh gỗ sáng', mo: 'Khách cũ giảm 10%, giao lắp miễn phí nội thành.', nut: 'Xem ngay',
        },
        zbs: {
          ten: 'Tặng chị Quỳnh voucher 50.000đ',
          mo: 'Cảm ơn chị đã mua hàng tại Nội Thất Mộc An. Gửi chị ưu đãi cho lần mua tiếp theo:',
          dong: [['Mã voucher', '**MOCAN50**'], ['Ưu đãi', 'Giảm 50.000đ đơn từ 500.000đ'], ['Hạn dùng', '31/01/2027']],
          nut: 'Dùng voucher ngay',
        },
      },
      bamDuoi: {
        cmpDung: ['Khách nhắn xong im → nhắc đúng sản phẩm khách đã xem (thẻ <b>#guongdung</b> từ quảng cáo)',
                  'Báo giá xong im → bám đuổi theo giá: quà tặng, freeship (thẻ <b>#HoiGia</b>)',
                  'Đúng nhu cầu, đúng lý do im → khách quay lại mua'],
        hoi: 'Gương đứng này giá sao shop?',
        traLoiThuong: 'Dạ 790.000đ ạ.',
        refImg: L(IMG['guong-den']), refTen: 'Gương đứng toàn thân khung đen',
        vd1: {
          kh: 'Gương này soi có méo hình không shop?',
          ai: 'Dạ kính tráng bạc 5 ly, soi không méo ạ. Phòng chị rộng khoảng bao nhiêu để em tư vấn size nha?',
          tag: '🏷 #guongdung', tagNote: 'thẻ từ quảng cáo · khách im 1 ngày',
          nhac: 'Chị ơi, em gửi chị <b>ảnh thật khách soi toàn thân</b> bằng gương bên em, nét, không méo. Lỡ vỡ khi giao em <b>đổi mới</b> ạ 🪞',
          dung: '🎯 Theo thẻ #guongdung: nhắc đúng nỗi lo méo hình, vỡ khi ship',
          khach: 'Phòng c 12m² nha e',
        },
        vd2: {
          kh: 'Gương đứng 50x160 bao nhiêu vậy shop?',
          ai: 'Dạ gương 50x160cm <b>790.000đ</b>, giao nội thành 1–2 ngày ạ.',
          tag: '🏷 #HoiGia', tagNote: 'báo giá xong khách im 1 ngày',
          nhac: 'Chị ơi, chiếc gương chị hỏi giá hôm qua, chốt trong tuần em <b>tặng bộ chặn chân chống trượt, freeship nội thành</b> ạ. Em lên đơn cho chị nha?',
          dung: '🎯 Theo thẻ #HoiGia: bám đuổi theo giá, đúng lý do khách im',
          khach: 'Ok lấy c size 50x160 nha',
        },
      },
      binhLuan: {
        post: '<b>Gương đứng toàn thân</b> khung nhôm đen, kính tráng bạc 5 ly · 50x160cm chỉ 790K, vỡ khi giao đổi mới 🪞',
        img: L(IMG['guong-den-2']),
        kav: 'MC', kten: 'Minh Châu', hoi: 'Có size 60x180 không shop? Giá sao?',
        traLoi: 'Dạ chào chị Châu! Shop vừa nhắn tin tư vấn chi tiết cho chị, chị xem tin nhắn nhé 💬',
        act2: 'Nhắn tin riêng báo giá size 60x180',
        nhan: 'Chào chị Châu! Bên em có <b>gương đứng 60x180cm</b> cùng mẫu, giá <b>950.000đ</b>, giao nội thành 1–2 ngày ạ. Chị gửi em SĐT, địa chỉ để em lên đơn nha?',
        sp: { ten: 'Gương đứng khung đen 60x180cm', gia: '950.000đ', img: L(IMG['guong-den-2']) },
        khach: 'Lấy c 1 cái 60x180 nha',
      },
      duLieu: {
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: kính không bao giờ vỡ, bảo hành 5 năm', 'Khách đổi trả, shop mất uy tín'],
        hoi: 'Kính này cường lực không bao giờ vỡ đúng k shop? Bảo hành 5 năm hả?',
        aiSai: 'Dạ đúng ạ! Kính <b>cường lực không bao giờ vỡ</b>, <b>bảo hành 5 năm</b> chị nhé 🥰',
        thucTe: '⚠ Thực tế: kính tráng bạc 5 ly; bảo hành khung 12 tháng; vỡ khi giao thì đổi mới',
        gian: 'Gương va nhẹ đã nứt! Sao nói không bao giờ vỡ, bảo hành 5 năm? 😠',
        cho: 'Dạ chị chờ em một chút để em kiểm tra chính xác thông tin sản phẩm cho chị nhé!',
        nv: 'Nhân viên Hiếu · người thật',
        nvTraLoi: 'Dạ em xin lỗi chị ạ. Gương là kính tráng bạc 5 ly, bảo hành khung 12 tháng, vỡ khi giao thì đổi mới. Chị gửi em ảnh gương, bên em hỗ trợ thay kính cho chị nhé!',
      },
    },
  };
})();
