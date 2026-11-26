/* Kịch bản: XƯỞNG IN ẢNH (in ảnh, album, ảnh ép gỗ, tráng gương, khung, lịch) — BẢN TRÌNH CHIẾU, nhóm THƯƠNG MẠI ĐIỆN TỬ.
   Làm 26/11/2026 theo đồng nghiệp: "lĩnh vực in, cần AI trực tin nhắn page".
   Từ 23/11/2026 bỏ demo chat vào thẳng (&demo): file chỉ có phần deck cho Bài 1 (slide), không viết steps/features.
   Mạch ngắn trên slide (khớp Bài 2 demo/bai2/kich-ban-in-anh-tc.js): chị Vy hỏi giá in ảnh 10x15 → AI báo 3.000đ/tấm, hỏi size, số tấm
     → khách tự nói 60 tấm, hỏi album → 180.000đ + album 150.000đ → xin SĐT + địa chỉ → lên đơn 330.000đ
     → chăm sóc sau bán: album in tên, ảnh ép gỗ, tráng gương, khung để bàn, lịch 2027.
   Theo quy tắc 25/11/2026: AI chỉ báo giá, gửi ảnh, hỏi số lượng, xin SĐT + địa chỉ; số tấm do khách tự nói, không check khách cũ/mới.
   Slide "AI không trả lời bừa" lấy ca AI sai hứa "ảnh bền màu 100 năm".
   Tên xưởng (Xưởng In Ảnh Mộc Lam), giá, khách, SĐT, địa chỉ: dữ liệu minh họa. Ảnh: Unsplash, ảnh thật; dùng đường dẫn trong máy. */
(function () {
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'anh-in': '1494621622354-777dad9c18e4',       // tay cầm xấp ảnh in (ảnh quảng cáo)
    'anh-gia-dinh': '1548849929-a63fe18c9ee4',    // tấm in ghép 4 ảnh gia đình
    'hop-go': '1593888165089-77f017e3bbfd',       // hộp gỗ khắc tên đựng ảnh
    'anh-ban': '1595981234058-a9302fb97229',      // ảnh in trên bàn
    'lich': '1611988615248-5d4f0b9ac31e',         // lịch để bàn
    'album-den': '1645497265272-5c92210a18b8',    // album ảnh đen trắng
    'album': '1676883344224-2fa5de6025db',        // tay mở album ảnh
    'scrapbook': '1677658288115-28905b06b520',    // sổ ảnh dán, hoa tulip
    'anh-canvas': '1677658990649-b50fe2cedd68',   // ảnh gia đình treo tường phòng bé
    'phong-ngu': '1684741891614-c244b9df0613',    // tường ảnh trên giường
    'khung-anh': '1722173205783-d602329f0743',    // khung ảnh gỗ và ảnh cũ
    'khung-ke': '1790683969771-9fd9a3d27180',     // 2 ảnh khung kính trên kệ
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    shop: { name: 'Xưởng In Ảnh Mộc Lam', initials: 'ML' },
    headline: { pre: 'Hệ thống AI chatbot giúp tăng trung bình', em: '64% tỷ lệ chốt đơn' },
    sub: 'Tự động hóa toàn bộ quy trình chốt đơn, bám đuổi, lên đơn và chăm sóc khách để tăng hiệu quả bán hàng.',
    cta: 'Dùng thử miễn phí tại **preny.ai**\nHotline **0389 647 778**',

    images: Object.fromEntries(Object.entries(IMG).map(([k, id]) => [k, L(id)])),

    deck: {
      demoDoc: {
        khach: 'Vy',
        sanPham: 'In ảnh sắc nét, từ 3.000đ/tấm',
        binhLuan: 'In ảnh 10x15 bao nhiêu 1 tấm shop?',
        post: {
          tieuDe: 'IN ẢNH SẮC NÉT, CHỈ TỪ 3.000Đ/TẤM 📸',
          dong: ['Ảnh in, album, ảnh ép gỗ, tráng gương', 'Chỉnh sáng miễn phí từng tấm', 'Giấy ảnh dày, chống ẩm', 'Kiểm tra hàng rồi mới thanh toán'],
          anh: ['anh-in', 'album', 'anh-canvas', 'khung-ke'],
        },
      },
      dashboard: [
        { ten: 'In ảnh <span class="grad">10x15</span>', den: '21/07/2026', khach: 41, tyLe: 0.64 },
        { ten: 'Album <span class="grad">bìa cứng</span>', den: '18/08/2026', khach: 26, tyLe: 0.6 },
        { ten: 'Ảnh <span class="grad">ép gỗ, tráng gương</span>', den: '26/09/2026', khach: 18, tyLe: 0.57 },
      ],
      chatbot: {
        chat: [
          { ref: { img: L(IMG['anh-in']), ten: 'In ảnh sắc nét, từ 3.000đ/tấm' } },
          { kh: 'In ảnh 10x15 bao nhiêu 1 tấm shop?' },
          { ai: 'Dạ ảnh **10x15** bên em **3.000đ/tấm**, đã chỉnh sáng miễn phí ạ. Chị muốn in **size nào**, khoảng **bao nhiêu tấm** ạ?', meta: '⚡ Preny AI trả lời sau 2 giây' },
          { kh: '60 tấm 10x15, có album đựng ko e?' },
          { ai: 'Dạ 60 tấm là **180.000đ**, album bìa cứng 80 ảnh **150.000đ**, xưởng xếp ảnh vào sẵn ạ.' },
          { kh: 'ok lấy album luôn' },
          { ai: 'Dạ tổng **330.000đ**, giao miễn phí. Chị gửi em **SĐT và địa chỉ** để em lên đơn nha.' },
          { kh: 'Vy, 0937 645 218, 41/7 Nguyễn Văn Đậu, Bình Thạnh' },
          { don: true },
          { ok: true },
        ],
        don: {
          ten: 'Vy', sdt: '0937 645 218', diaChi: '41/7 Nguyễn Văn Đậu, Bình Thạnh, TP.HCM', ma: '#ML26126', phi: 'miễn phí',
          sp: [
            { img: L(IMG['anh-in']), ten: 'In ảnh 10x15 (chỉnh sáng miễn phí)', sl: 60, dv: 'tấm', gia: 3000 },
            { img: L(IMG['album']), ten: 'Album bìa cứng 80 ảnh', sl: 1, dv: 'cuốn', gia: 150000 },
          ],
        },
        anh: {
          img: L(IMG['anh-gia-dinh']),
          kh: 'C muốn in kiểu ghép 4 ảnh như này được ko e?',
          ai: 'Dạ ảnh chị gửi là **ảnh ghép 4 khung** trên 1 tấm ạ, xưởng làm được, ghép sẵn chữ như mẫu. Chị muốn in **size nào** và **mấy tấm** ạ?',
        },
      },
      afterSale: {
        loi: 'Cảm ơn chị Vy đã in ảnh tại Xưởng Mộc Lam 💛 Khách in ảnh cho bé hay làm thêm mấy món này ạ:',
        sp: [
          { img: L(IMG['scrapbook']), ten: 'Album bìa cứng in tên bé, 30 trang', gia: 350000 },
          { img: L(IMG['anh-canvas']), ten: 'Ảnh ép gỗ treo tường 30x45', gia: 280000 },
          { img: L(IMG['khung-ke']), ten: 'Ảnh tráng gương 30x40', gia: 390000 },
          { img: L(IMG['khung-anh']), ten: 'Khung ảnh gỗ để bàn 20x25', gia: 150000 },
          { img: L(IMG['lich']), ten: 'Lịch để bàn 2027 in ảnh riêng', gia: 108000, cu: 120000 },
        ],
        khach: 'Làm thêm c 1 ảnh ép gỗ 30x45 treo phòng bé nha e',
        pill: '🛍 Khách lấy thêm ngay: đơn tăng từ 330.000đ lên 610.000đ',
        fmm: {
          chao: 'Chào chị Vy 👋 Lịch 2027 in ảnh của bé đang giảm 15% cho khách đã in ảnh tại xưởng, mỗi tháng một ảnh, em gửi chị xem nha!',
          img: L(IMG['lich']), nhan: 'LỊCH TẾT 2027',
          ten: 'Lịch để bàn in ảnh gia đình', mo: 'Giảm 15% cho khách đã in ảnh.', nut: 'Xem ưu đãi',
        },
        zbs: {
          ten: 'Tặng chị Vy voucher 50.000đ',
          mo: 'Cảm ơn chị đã in ảnh tại Xưởng In Ảnh Mộc Lam. Gửi chị ưu đãi cho lần in tiếp theo:',
          dong: [['Mã voucher', '**MOCLAM50**'], ['Ưu đãi', 'Giảm 50.000đ đơn từ 300.000đ'], ['Hạn dùng', '31/01/2027']],
          nut: 'Dùng voucher ngay',
        },
      },
      bamDuoi: {
        cmpDung: ['Khách nhắn xong im → nhắc đúng loại ảnh khách đã hỏi (thẻ <b>#inanhonline</b> từ quảng cáo)',
                  'Báo giá xong im → bám đuổi theo giá: giao miễn phí, quà tặng (thẻ <b>#HoiGia</b>)',
                  'Đúng nhu cầu, đúng lý do im → khách quay lại đặt in'],
        hoi: 'In ảnh 10x15 bao nhiêu 1 tấm shop?',
        traLoiThuong: 'Dạ 3.000đ ạ.',
        refImg: L(IMG['anh-in']), refTen: 'In ảnh sắc nét, từ 3.000đ/tấm',
        vd1: {
          kh: 'Ảnh chụp bằng điện thoại in ra có bị mờ không shop?',
          ai: 'Dạ ảnh điện thoại in 10x15, 13x18 vẫn nét, xưởng chỉnh sáng từng tấm ạ. Chị muốn in bao nhiêu tấm ạ?',
          tag: '🏷 #inanhonline', tagNote: 'thẻ từ quảng cáo · khách im 1 ngày',
          nhac: 'Chị ơi, em gửi chị <b>ảnh thật in từ điện thoại</b> của khách bên em, màu lên đúng như trên máy ạ 📸',
          dung: '🎯 Theo thẻ #inanhonline: nhắc đúng loại ảnh khách hỏi',
          khach: 'Ok in c 40 tấm 10x15 nha',
        },
        vd2: {
          kh: 'Ảnh ép gỗ 30x45 bao nhiêu vậy shop?',
          ai: 'Dạ ảnh ép gỗ 30x45 giá <b>280.000đ</b> ạ.',
          tag: '🏷 #HoiGia', tagNote: 'báo giá xong khách im 1 ngày',
          nhac: 'Anh ơi, ảnh ép gỗ 30x45 anh hỏi hôm qua, xưởng <b>giao miễn phí, tặng móc treo không cần khoan</b> ạ. Em lên đơn cho anh nha?',
          dung: '🎯 Theo thẻ #HoiGia: bám đuổi theo giá, đúng lý do khách im',
          khach: 'Ok làm cho a 2 tấm nha e',
        },
      },
      binhLuan: {
        post: '<b>In ảnh sắc nét</b> · chỉ từ 3.000đ/tấm, album, ảnh ép gỗ, tráng gương, chỉnh sáng miễn phí 📸',
        img: L(IMG['phong-ngu']),
        kav: 'TT', kten: 'Thanh Tùng', hoi: 'Có làm ảnh ép gỗ treo tường không shop? Giá sao?',
        traLoi: 'Dạ chào anh Tùng! Xưởng vừa nhắn tin báo giá chi tiết cho anh, anh xem tin nhắn nhé 💬',
        act2: 'Nhắn tin riêng báo giá ảnh ép gỗ',
        nhan: 'Chào anh Tùng! Ảnh ép gỗ bên em <b>20x30 180.000đ</b>, <b>30x45 280.000đ</b>, giao miễn phí ạ. Anh muốn làm size nào, mấy tấm ạ?',
        sp: { ten: 'Ảnh ép gỗ treo tường', gia: 'từ 180.000đ', img: L(IMG['anh-canvas']) },
        khach: 'Lấy a 2 tấm 30x45, giao Gò Vấp nha',
      },
      duLieu: {
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: ảnh in bền màu 100 năm', 'Khách thất vọng, đòi in lại, xưởng mất uy tín'],
        hoi: 'Ảnh ép gỗ này treo được bao lâu thì phai màu vậy e?',
        aiSai: 'Dạ ảnh bên em <b>bền màu 100 năm</b> luôn chị, không bao giờ phai 🥰',
        thucTe: '⚠ Thực tế: ảnh giữ màu nhiều năm khi để nơi khô ráo; nắng chiếu trực tiếp lâu ngày vẫn có thể bạc màu',
        gian: 'Treo cạnh cửa sổ có 1 năm đã bạc màu! Sao nói bền 100 năm? 😠',
        cho: 'Dạ chị chờ em một chút để em kiểm tra chính xác cho chị nhé!',
        nv: 'Nhân viên Hạnh · người thật',
        nvTraLoi: 'Dạ em xin lỗi chị ạ. Ảnh để nơi khô ráo giữ màu nhiều năm, nhưng nắng chiếu trực tiếp lâu ngày vẫn có thể bạc màu. Xưởng in lại miễn phí cho chị, chị treo chỗ ít nắng giúp em nhé!',
      },
    },
  };
})();
