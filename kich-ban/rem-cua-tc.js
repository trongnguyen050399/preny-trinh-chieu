/* Kịch bản: RÈM CỬA MAY SẴN (rèm vải cản sáng khoen inox, có mẫu sẵn) — BẢN TRÌNH CHIẾU, nhóm THƯƠNG MẠI ĐIỆN TỬ.
   Làm 23/11/2026 theo người dùng: "rem cửa TMDT có mẫu sẵn bán nhanh chốt đơn nhanh".
   Từ 23/11/2026 bỏ demo chat vào thẳng (&demo): file chỉ có phần deck cho Bài 1 (slide), không viết steps/features.
   Mạch ngắn trên slide: chị Hà My hỏi cửa sổ phòng ngủ rộng 2m4 lấy mấy tấm, có cản nắng thật không
     → AI: 1 tấm 1m4 x 2m5 290.000đ, cửa 2m4 lấy 2 tấm cho rèm xếp ly đẹp, cản sáng 90%, giặt máy được, treo lên thanh có sẵn là xong
     → hỏi màu xám / kem / be → khách im → bám đuổi theo thẻ #RemCanSang (ảnh thật rèm treo), #HoiGia (freeship, tặng dây buộc)
     → chốt, xin SĐT + địa chỉ, lên đơn → chăm sóc sau bán: gợi ý thanh treo, rèm voan lớp trong, dây buộc, tua rua.
   Không có tin tự động cập nhật vận chuyển. Rèm cửa thiết kế (nhóm cân nhắc nhiều) là ngành riêng, file rem-cua-thiet-ke-tc.js.
   Tên shop, giá, kích thước, chính sách, tên khách, SĐT, địa chỉ: dữ liệu minh họa. Ảnh: Unsplash (ảnh thật, không phải hàng của shop). */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'rem-xam': '1771039622303-71545f266c1b',        // rèm xám khoen, cửa sổ phòng (ảnh quảng cáo)
    'rem-kem': '1771039622311-24e73898b641',        // rèm kem khoen, cùng kiểu
    'rem-be': '1771039622237-2725bdf33edf',         // rèm be khoen, cùng kiểu
    'rem-trang': '1771039621838-4c8dd6ae0f9d',      // rèm trắng ngà khoen
    'rem-xam-2': '1754611380518-61a923cc47ca',      // rèm xám xếp ly cạnh cửa sổ
    'rem-phong-khach': '1754611362309-71297e9f42fd', // phòng khách rèm xám treo sát trần
    'rem-voan': '1530914507926-36d0f98a9f1f',       // rèm voan trắng trên thanh treo
    'day-buoc': '1688489307301-f6e3b15e01bd',       // dây buộc rèm
    'tua-rua': '1766684412414-57b272c62d45',        // tua rua trang trí rèm
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    shop: { name: 'Rèm Cửa Nhà Mây', initials: 'NM' },
    headline: { pre: 'Hệ thống AI chatbot giúp tăng trung bình', em: '62% tỷ lệ chốt đơn' },
    sub: 'Tự động hóa toàn bộ quy trình chốt đơn, bám đuổi, lên đơn và chăm sóc khách để tăng hiệu quả bán hàng.',
    cta: 'Dùng thử miễn phí tại **preny.ai**\nHotline **0389 647 778**',

    images: Object.fromEntries(Object.entries(IMG).map(([k, id]) => [k, U(id)])),

    deck: {
      demoDoc: {
        khach: 'Hà My',
        sanPham: 'Rèm cản sáng may sẵn',
        binhLuan: 'Cửa 2m4 lấy mấy tấm shop?',
        post: {
          tieuDe: 'RÈM CẢN SÁNG MAY SẴN – TREO LÀ XONG 🪟',
          dong: ['1 tấm 1m4 x 2m5 chỉ 290K', 'Cản sáng 90%, chống nắng nóng', 'Khoen inox, giặt máy được', '3 màu xám, kem, be'],
          anh: ['rem-xam', 'rem-kem', 'rem-be', 'rem-phong-khach'],
        },
      },
      dashboard: [
        { ten: 'Rèm cản sáng, <span class="grad">rèm khoen may sẵn</span>', den: '21/07/2026', khach: 26, tyLe: 0.61 },
        { ten: 'Rèm voan, <span class="grad">rèm 2 lớp</span>', den: '18/08/2026', khach: 18, tyLe: 0.58 },
        { ten: 'Thanh treo, <span class="grad">phụ kiện rèm</span>', den: '26/09/2026', khach: 14, tyLe: 0.57 },
      ],
      chatbot: {
        chat: [
          { ref: { img: L(IMG['rem-xam']), ten: 'Rèm cản sáng may sẵn' } },
          { kh: 'Cửa sổ phòng ngủ rộng 2m4 lấy mấy tấm shop? Có cản nắng thật ko?' },
          { ai: 'Dạ cửa 2m4 chị lấy **2 tấm** (mỗi tấm 1m4 x 2m5) cho rèm xếp ly đẹp ạ, **290.000đ/tấm**. Vải **cản sáng 90%**, chống nắng nóng ạ.', meta: '⚡ Preny AI trả lời sau 2 giây' },
          { kh: 'Treo khó ko e?' },
          { ai: 'Dạ rèm **khoen inox may sẵn**, xỏ vào thanh có sẵn là xong, **giặt máy được** ạ. Chị lấy màu xám, kem hay be, gửi em SĐT, địa chỉ nha.' },
          { kh: 'Màu kem. Hà My, 0909 318 764, 56 Đường số 7, Bình Tân' },
          { ai: 'Dạ em lên đơn 2 tấm rèm kem, freeship cho chị luôn ạ ⚡' },
          { don: true },
          { ok: true },
        ],
        don: {
          ten: 'Hà My', sdt: '0909 318 764', diaChi: '56 Đường số 7, P. Bình Trị Đông B, Bình Tân', ma: '#NM24116', phi: 'miễn phí',
          sp: [{ img: L(IMG['rem-kem']), ten: 'Rèm cản sáng màu kem · 1m4 x 2m5', sl: 2, dv: 'tấm', gia: 290000 }],
        },
        anh: {
          img: L(IMG['rem-phong-khach']),
          kh: 'Phòng khách treo kiểu như hình này bên e có mẫu ko?',
          ai: 'Dạ ảnh chị gửi là **rèm xám xếp ly treo sát trần**, bên em có **rèm cản sáng màu xám** cùng kiểu này ạ. Trần nhà chị cao hơn 2m5 thì em may thêm bản **cao 2m7** cho chị nha.',
        },
      },
      afterSale: {
        loi: 'Cảm ơn chị Hà My đã mua ở Nhà Mây 💛 Khách mua rèm hay lấy kèm mấy món này ạ:',
        sp: [
          { img: L(IMG['rem-xam-2']), ten: 'Thanh treo rèm inox 2m4', gia: 180000 },
          { img: L(IMG['rem-voan']), ten: 'Rèm voan lớp trong 1m4 x 2m5', gia: 150000 },
          { img: L(IMG['day-buoc']), ten: 'Dây buộc rèm (cặp)', gia: 60000 },
          { img: L(IMG['tua-rua']), ten: 'Tua rua trang trí rèm', gia: 90000 },
          { img: L(IMG['rem-trang']), ten: 'Rèm cản sáng màu trắng ngà', gia: 290000, cu: 320000 },
        ],
        khach: 'Lấy thêm c thanh treo nha e',
        pill: '🛍 Khách mua thêm ngay: đơn tăng từ 580.000đ lên 760.000đ',
        fmm: {
          chao: 'Chào chị Hà My 👋 Rèm Cửa Nhà Mây vừa về rèm voan lớp trong, treo cùng rèm cản sáng cho phòng sáng dịu ban ngày, gửi chị xem trước nha!',
          img: L(IMG['rem-voan']), nhan: 'HÀNG MỚI VỀ',
          ten: 'Rèm voan lớp trong', mo: 'Khách cũ giảm 10%, freeship.', nut: 'Xem ngay',
        },
        zbs: {
          ten: 'Tặng chị Hà My voucher 30.000đ',
          mo: 'Cảm ơn chị đã mua hàng tại Rèm Cửa Nhà Mây. Gửi chị ưu đãi cho lần mua tiếp theo:',
          dong: [['Mã voucher', '**NHAMAY30**'], ['Ưu đãi', 'Giảm 30.000đ đơn từ 300.000đ'], ['Hạn dùng', '31/01/2027']],
          nut: 'Dùng voucher ngay',
        },
      },
      bamDuoi: {
        cmpDung: ['Khách nhắn xong im → nhắc đúng sản phẩm khách đã xem (thẻ <b>#RemCanSang</b> từ quảng cáo)',
                  'Báo giá xong im → bám đuổi theo giá: quà tặng, freeship (thẻ <b>#HoiGia</b>)',
                  'Đúng nhu cầu, đúng lý do im → khách quay lại mua'],
        hoi: 'Rèm cản sáng giá sao shop?',
        traLoiThuong: 'Dạ 290.000đ 1 tấm ạ.',
        refImg: L(IMG['rem-xam']), refTen: 'Rèm cản sáng may sẵn',
        vd1: {
          kh: 'Rèm này cản nắng thật không shop? Phòng chị hướng Tây',
          ai: 'Dạ vải cản sáng 90% ạ, cửa chị rộng bao nhiêu để em báo số tấm nha?',
          tag: '🏷 #RemCanSang', tagNote: 'thẻ từ quảng cáo · khách im 1 ngày',
          nhac: 'Chị ơi, em gửi chị <b>ảnh thật rèm cản sáng</b> treo phòng hướng Tây của khách, trưa nắng vẫn tối dịu ạ 🪟',
          dung: '🎯 Theo thẻ #RemCanSang: nhắc đúng nỗi lo nắng nóng',
          khach: 'Cửa 2m4 nha e',
        },
        vd2: {
          kh: 'Cửa 2m4 thì hết bao nhiêu vậy shop?',
          ai: 'Dạ cửa 2m4 lấy 2 tấm, tổng <b>580.000đ</b> ạ.',
          tag: '🏷 #HoiGia', tagNote: 'báo giá xong khách im 1 ngày',
          nhac: 'Chị ơi, 2 tấm rèm chị hỏi hôm qua, chốt trong tuần em <b>freeship, tặng cặp dây buộc rèm</b> ạ. Em lên đơn cho chị nha?',
          dung: '🎯 Theo thẻ #HoiGia: bám đuổi theo giá, đúng lý do khách im',
          khach: 'Ok lấy c màu kem nha e',
        },
      },
      binhLuan: {
        post: '<b>Rèm cản sáng may sẵn</b> khoen inox · 1 tấm 1m4 x 2m5 chỉ 290K, cản sáng 90%, giặt máy được 🪟',
        img: L(IMG['rem-kem']),
        kav: 'BT', kten: 'Bảo Trân', hoi: 'Cửa sổ 1m8 lấy mấy tấm shop? Có màu kem không?',
        traLoi: 'Dạ chào chị Trân! Shop vừa nhắn tin tư vấn chi tiết cho chị, chị xem tin nhắn nhé 💬',
        act2: 'Nhắn tin riêng báo đúng số tấm',
        nhan: 'Chào chị Trân! Cửa 1m8 chị lấy <b>2 tấm</b> cho rèm xếp ly đẹp, <b>290.000đ/tấm</b>, có màu kem ạ. Chị gửi em SĐT, địa chỉ để em lên đơn nha?',
        sp: { ten: 'Rèm cản sáng màu kem', gia: '290.000đ/tấm', img: L(IMG['rem-kem']) },
        khach: 'Lấy c 2 tấm màu kem nha',
      },
      duLieu: {
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: cản sáng 100%, không phai màu', 'Khách đổi trả, shop mất uy tín'],
        hoi: 'Rèm này cản sáng 100% đúng k e? Giặt nhiều có phai không?',
        aiSai: 'Dạ đúng ạ! Rèm <b>cản sáng 100%</b>, giặt mãi <b>không phai</b> chị nhé 🥰',
        thucTe: '⚠ Thực tế: vải cản sáng khoảng 90%; giặt nước lạnh, không tẩy để giữ màu',
        gian: 'Treo lên vẫn lọt sáng mép! Sao nói cản sáng 100%? 😠',
        cho: 'Dạ chị chờ em một chút để em kiểm tra chính xác thông tin sản phẩm cho chị nhé!',
        nv: 'Nhân viên Mây · người thật',
        nvTraLoi: 'Dạ em xin lỗi chị ạ. Vải cản sáng khoảng 90%, sáng lọt ở mép là do rèm hẹp hơn cửa. Em đổi cho chị bản rộng hơn để rèm phủ kín mép, miễn phí vận chuyển nhé!',
      },
    },
  };
})();
