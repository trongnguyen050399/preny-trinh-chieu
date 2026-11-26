/* Kịch bản: HẠT GIỐNG, CÂY GIỐNG — BẢN TRÌNH CHIẾU, nhóm THƯƠNG MẠI ĐIỆN TỬ.
   Làm 26/11/2026 theo đồng nghiệp: "hạt giống cây giống (tư vấn, hỏi thông tin, báo giá và xin sđt và địa chỉ để chốt đơn)".
   Khác ngành nong-nghiep-tc (thuốc trừ sâu): ở đây bán hạt giống rau, hoa và cây giống ghép cho người trồng sân thượng, ban công.
   Từ 23/11/2026 bỏ demo chat vào thẳng (&demo): file chỉ có phần deck cho Bài 1 (slide), không viết steps/features.
   Mạch ngắn trên slide (khớp Bài 2 demo/bai2/kich-ban-hat-giong-tc.js): chị Mai hỏi giá combo 10 gói hạt giống rau
     → AI báo 99.000đ, hỏi trồng ở đâu, nắng mấy tiếng → thùng xốp sân thượng, nắng chiều, thêm cà chua bi
     → AI báo giá hạt cà chua bi + đất sạch, hỏi mấy bao → khách lấy 2 bao → 254.000đ → xin SĐT + địa chỉ → lên đơn
     → chăm sóc sau bán: cây giống chanh ghép, ớt chỉ thiên, vạn thọ, khay ươm, bình tưới.
   Theo quy tắc 25/11/2026: AI chỉ báo giá, gửi ảnh, hỏi số lượng, xin SĐT + địa chỉ; không tự tính, không check khách cũ/mới.
   Không hứa nảy mầm 100%: slide "AI không trả lời bừa" lấy đúng ca AI sai hứa "nảy mầm 100%, 30 ngày có trái".
   Tên shop (Vườn Mầm Xanh), giá, khách, SĐT, địa chỉ: dữ liệu minh họa. Ảnh: Unsplash, ảnh thật, không nhãn hiệu; dùng đường dẫn trong máy. */
(function () {
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'rau-chau': '1688176939869-27718ebf6ad9',   // xà lách xanh, tím trong chậu gỗ (ảnh quảng cáo)
    'khay-uom': '1466692476868-aef1dfb1e735',   // khay ươm mầm
    'cay-con': '1647550232391-f758832be5c2',    // cây con trong khay ươm đen
    'mam': '1457530378978-8bac673b8062',        // mầm cây non cận cảnh
    'bau-uom': '1523348837708-15d4a09cfac2',    // cây con trong bầu nhựa đen
    'vuon-rau': '1591857177580-dc82b9ac4e1e',   // luống rau trong thùng gỗ
    'ca-chua': '1632770464350-e73ae4aaa11c',    // cà chua bi trồng chậu
    'ca-chua-2': '1758552219061-5148ccb5bc5d',  // chùm cà chua chín trên cây
    'cay-ca-chua': '1682879398507-ea8d66d216f3', // cây cà chua con trong cốc nhựa
    'ot-chau': '1637795257839-896afee861fd',    // chậu ớt nhiều trái
    'ot': '1792758783307-419e611b8469',         // cây ớt chỉ thiên
    'chanh': '1763066696319-d1093663bbd2',      // cây chanh ra trái
    'chanh-2': '1775731677272-6be17f76d396',    // cành chanh vàng
    'van-tho': '1620005807545-2e08850d6591',    // hoa vạn thọ cam
    'hoa-zinnia': '1771680615824-47282861544d', // vườn cúc ngũ sắc
    'dat': '1642952273588-ed6fa28870ac',        // nắm đất tơi trên tay
    'binh-tuoi': '1599277100479-3252d492a19a',  // bình tưới đang tưới
    'ban-cong': '1486484290742-0ce4eb743a34',   // ban công trồng cây
    'vuon-uom': '1625758474222-92183cb2c02c',   // cây giống trong bầu ở vườn ươm
    'trong-cay': '1779085031158-a2519daf9747',  // tay trồng cây con xuống đất
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    shop: { name: 'Vườn Mầm Xanh', initials: 'VM' },
    headline: { pre: 'Hệ thống AI chatbot giúp tăng trung bình', em: '57% tỷ lệ chốt đơn' },
    sub: 'Tự động hóa toàn bộ quy trình chốt đơn, bám đuổi, lên đơn và chăm sóc khách để tăng hiệu quả bán hàng.',
    cta: 'Dùng thử miễn phí tại **preny.ai**\nHotline **0389 647 778**',

    images: Object.fromEntries(Object.entries(IMG).map(([k, id]) => [k, L(id)])),

    deck: {
      demoDoc: {
        khach: 'Mai',
        sanPham: 'Combo hạt giống rau sân thượng',
        binhLuan: 'Combo 10 gói giá sao shop?',
        post: {
          tieuDe: 'COMBO 10 GÓI HẠT GIỐNG RAU ĂN LÁ 🌱',
          dong: ['Cải ngọt, xà lách, rau muống, mồng tơi…', 'Hợp thùng xốp, chậu ban công', 'Chỉ 99K, tặng hướng dẫn ươm', 'Có cây giống chanh, ổi, bưởi ghép'],
          anh: ['rau-chau', 'khay-uom', 'vuon-rau', 'chanh'],
        },
      },
      dashboard: [
        { ten: 'Hạt giống <span class="grad">rau ăn lá</span>', den: '21/07/2026', khach: 31, tyLe: 0.57 },
        { ten: 'Cây giống <span class="grad">ăn quả ghép</span>', den: '18/08/2026', khach: 18, tyLe: 0.53 },
        { ten: 'Cây giống <span class="grad">hoa Tết</span>', den: '26/09/2026', khach: 24, tyLe: 0.61 },
      ],
      chatbot: {
        chat: [
          { ref: { img: L(IMG['rau-chau']), ten: 'Combo hạt giống rau sân thượng' } },
          { kh: 'Combo 10 gói giá sao shop?' },
          { ai: 'Dạ combo 10 gói hạt giống rau ăn lá bên em **99.000đ** ạ. Chị trồng **thùng xốp, ban công** hay **đất vườn**, chỗ trồng **nắng mấy tiếng** ạ?', meta: '⚡ Preny AI trả lời sau 2 giây' },
          { kh: 'thùng xốp sân thượng, nắng chiều. thêm cà chua bi nữa' },
          { ai: 'Dạ hạt cà chua bi **25.000đ/gói**, đất sạch trộn sẵn **65.000đ/bao** ạ. Chị cần lấy **mấy bao đất** ạ?' },
          { kh: '2 bao nha e' },
          { ai: 'Dạ tổng **254.000đ**, miễn phí giao. Chị gửi em **SĐT và địa chỉ** để em lên đơn nha.' },
          { kh: 'Mai, 0937 615 284, 42 Lê Văn Sỹ, P.13, Q.3' },
          { don: true },
          { ok: true },
        ],
        don: {
          ten: 'Mai', sdt: '0937 615 284', diaChi: '42 Lê Văn Sỹ, P.13, Q.3, TP.HCM', ma: '#VM26126', phi: 'miễn phí',
          sp: [
            { img: L(IMG['rau-chau']), ten: 'Combo 10 gói hạt giống rau ăn lá', sl: 1, dv: 'combo', gia: 99000 },
            { img: L(IMG['ca-chua']), ten: 'Hạt giống cà chua bi', sl: 1, dv: 'gói', gia: 25000 },
            { img: L(IMG['dat']), ten: 'Đất sạch trộn sẵn 20dm³', sl: 2, dv: 'bao', gia: 65000 },
          ],
        },
        anh: {
          img: L(IMG['cay-ca-chua']),
          kh: 'Cây cà chua c ươm được như này, trồng ra thùng được chưa e?',
          ai: 'Dạ ảnh chị gửi là **cây cà chua con đã có 4–5 lá thật**, thân cứng, trồng ra thùng được rồi ạ. Chị trồng chiều mát, tưới đẫm và cắm cọc cho cây bám nha.',
        },
      },
      afterSale: {
        loi: 'Cảm ơn chị Mai đã chọn Vườn Mầm Xanh 💛 Khách trồng sân thượng bên em hay lấy kèm mấy món này ạ:',
        sp: [
          { img: L(IMG['chanh']), ten: 'Cây giống chanh không hạt (ghép)', gia: 150000 },
          { img: L(IMG['ot']), ten: 'Cây giống ớt chỉ thiên (bầu)', gia: 20000 },
          { img: L(IMG['van-tho']), ten: 'Cây giống vạn thọ (bầu)', gia: 10000 },
          { img: L(IMG['cay-con']), ten: 'Khay ươm hạt 50 lỗ', gia: 30000 },
          { img: L(IMG['binh-tuoi']), ten: 'Bình tưới 5 lít vòi sen', gia: 117000, cu: 130000 },
        ],
        khach: 'Lấy thêm c 1 cây chanh ghép nha e',
        pill: '🛍 Khách lấy thêm ngay: đơn tăng từ 254.000đ lên 404.000đ',
        fmm: {
          chao: 'Chào chị Mai 👋 Vườn Mầm Xanh vừa có cây giống vạn thọ, cúc ngũ sắc ươm sẵn trong bầu để chuẩn bị hoa chưng Tết, em gửi chị xem nha!',
          img: L(IMG['hoa-zinnia']), nhan: 'CÂY GIỐNG HOA TẾT',
          ten: 'Vạn thọ, cúc ngũ sắc trong bầu', mo: 'Giảm 15% cho khách đã mua hạt giống.', nut: 'Xem ưu đãi',
        },
        zbs: {
          ten: 'Tặng chị Mai voucher 30.000đ',
          mo: 'Cảm ơn chị đã mua hạt giống tại Vườn Mầm Xanh. Gửi chị ưu đãi cho lần mua tiếp theo:',
          dong: [['Mã voucher', '**MAMXANH30**'], ['Ưu đãi', 'Giảm 30.000đ đơn từ 200.000đ'], ['Hạn dùng', '31/01/2027']],
          nut: 'Dùng voucher ngay',
        },
      },
      bamDuoi: {
        cmpDung: ['Khách nhắn xong im → nhắc đúng loại hạt giống khách đã hỏi (thẻ <b>#rausanthuong</b> từ quảng cáo)',
                  'Báo giá xong im → bám đuổi theo giá: giao miễn phí, quà tặng (thẻ <b>#HoiGia</b>)',
                  'Đúng nhu cầu, đúng lý do im → khách quay lại đặt hàng'],
        hoi: 'Combo 10 gói giá sao shop?',
        traLoiThuong: 'Dạ 99.000đ ạ.',
        refImg: L(IMG['rau-chau']), refTen: 'Combo hạt giống rau sân thượng',
        vd1: {
          kh: 'Ban công nhà c ít nắng, trồng rau này được không shop?',
          ai: 'Dạ rau ăn lá cần nắng khoảng 3–4 tiếng mỗi ngày ạ. Ban công chị nắng sáng hay nắng chiều ạ?',
          tag: '🏷 #rausanthuong', tagNote: 'thẻ từ quảng cáo · khách im 1 ngày',
          nhac: 'Chị ơi, em gửi chị <b>ảnh rau khách bên em trồng ban công</b> nắng sáng, cải ngọt và xà lách lên đều ạ 🌱',
          dung: '🎯 Theo thẻ #rausanthuong: nhắc đúng nhu cầu khách hỏi',
          khach: 'Ok lấy c 1 combo rau ăn lá nha',
        },
        vd2: {
          kh: 'Cây giống chanh ghép bao nhiêu vậy shop?',
          ai: 'Dạ cây giống chanh không hạt ghép giá <b>150.000đ</b>/cây ạ.',
          tag: '🏷 #HoiGia', tagNote: 'báo giá xong khách im 1 ngày',
          nhac: 'Anh ơi, cây chanh ghép anh hỏi hôm qua, bên em <b>giao miễn phí, tặng 1 bao đất sạch</b> trồng chậu ạ. Em lên đơn cho anh nha?',
          dung: '🎯 Theo thẻ #HoiGia: bám đuổi theo giá, đúng lý do khách im',
          khach: 'Ok lên đơn cho a 2 cây nha e',
        },
      },
      binhLuan: {
        post: '<b>Cây giống ăn quả ghép</b> · chanh, ổi, bưởi trong bầu, giao toàn quốc 🌱 Combo hạt giống rau sân thượng chỉ 99K',
        img: L(IMG['vuon-uom']),
        kav: 'AT', kten: 'Anh Tuấn', hoi: 'Có cây giống chanh không shop? Giá sao?',
        traLoi: 'Dạ chào anh Tuấn! Shop vừa nhắn tin báo giá chi tiết cho anh, anh xem tin nhắn nhé 💬',
        act2: 'Nhắn tin riêng báo giá cây giống chanh',
        nhan: 'Chào anh Tuấn! Cây giống chanh không hạt ghép bên em <b>150.000đ/cây</b>, cây trong bầu cao khoảng 50–60cm ạ. Anh trồng chậu hay đất vườn ạ?',
        sp: { ten: 'Cây giống chanh không hạt (ghép)', gia: '150.000đ', img: L(IMG['chanh']) },
        khach: 'Trồng chậu, lấy a 2 cây giao Bình Dương nha',
      },
      duLieu: {
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: nảy mầm 100%, 30 ngày là có trái', 'Khách thất vọng, đòi trả, shop mất uy tín'],
        hoi: 'Hạt cà chua bi này gieo có lên hết không e? Bao lâu có trái?',
        aiSai: 'Dạ hạt bên em <b>nảy mầm 100%</b>, trồng <b>30 ngày là có trái</b> luôn chị nhé 🥰',
        thucTe: '⚠ Thực tế: tỷ lệ nảy mầm ghi trên bao bì, thường 85–90%; cà chua bi cần khoảng 2–3 tháng mới cho trái',
        gian: 'Gieo 10 hạt chỉ lên 8, trồng hơn tháng chưa thấy trái! Sao nói 30 ngày? 😠',
        cho: 'Dạ chị chờ em một chút để em kiểm tra chính xác cho chị nhé!',
        nv: 'Nhân viên Thảo · người thật',
        nvTraLoi: 'Dạ em xin lỗi chị ạ. Hạt cà chua bi nảy mầm khoảng 85–90%, cây cần 2–3 tháng mới ra trái. Em gửi bù chị 1 gói hạt mới và hướng dẫn chăm cây ra hoa nhé!',
      },
    },
  };
})();
