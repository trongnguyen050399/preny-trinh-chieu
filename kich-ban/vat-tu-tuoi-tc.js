/* Kịch bản: VẬT TƯ TƯỚI CÔNG NGHỆ CAO (tưới nhỏ giọt, béc tưới gốc, phun mưa, phun sương, hẹn giờ, châm phân) — BẢN TRÌNH CHIẾU,
   nhóm THƯƠNG MẠI ĐIỆN TỬ. Làm 26/11/2026 theo đồng nghiệp: "hệ thống vật tư tưới công nghệ cao, cần AI trực page
   (tư vấn, hỏi thông tin, báo giá và xin sđt và địa chỉ để chốt đơn)".
   Từ 23/11/2026 bỏ demo chat vào thẳng (&demo): file chỉ có phần deck cho Bài 1 (slide), không viết steps/features.
   Mạch ngắn trên slide (khớp Bài 2 demo/bai2/kich-ban-vat-tu-tuoi-tc.js): anh Tâm hỏi giá tưới vườn 100 gốc sầu riêng
     → AI hỏi tuổi cây, nguồn nước → cây 4 năm, giếng khoan, hàng cách 8m → gợi ý combo có sẵn "béc tưới gốc 100 gốc" 3.290.000đ
     → xin SĐT + địa chỉ vườn → lên đơn → chăm sóc sau bán: bồn châm phân, phun sương, dây nhỏ giọt, béc phun mưa, van lọc.
   Theo quy tắc 25/11/2026: AI chỉ báo giá, gửi ảnh, hỏi thông tin vườn/số lượng, xin SĐT + địa chỉ; AI không tự tính vật tư
   (shop bán combo làm sẵn theo diện tích/số gốc; vườn khác chuẩn thì kỹ thuật kiểm tra), không check khách cũ/mới.
   Không hứa con số: slide "AI không trả lời bừa" lấy đúng ca AI sai hứa "tiết kiệm 90% nước, năng suất tăng gấp đôi".
   Tên cửa hàng (Tưới Nông Việt), giá, khách, SĐT, địa chỉ: dữ liệu minh họa. Ảnh: Unsplash, ảnh thật; dùng đường dẫn trong máy. */
(function () {
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'nho-giot': '1748432171507-c1d62fe2e859',     // ống nhỏ giọt dọc luống ớt (ảnh quảng cáo)
    'ong-nho-giot': '1662392559315-fb7035900d1f', // ống nhỏ giọt cạnh cây con
    'luong-rau': '1640677117376-573b9dbb8ea8',    // luống rau có dây nhỏ giọt
    'day-ruong': '1663079402880-97a2e68aafc7',    // ống tưới kéo dọc luống đất
    'bec-goc': '1718565524318-b58b8b86b813',      // béc tưới gốc dưới tán cây
    'bec-mua': '1738598665698-7fd7af4b5e0c',      // béc phun mưa trên ruộng
    'phun-suong': '1623136299195-570a06bdae6b',   // phun sương trong nhà kính
    'nha-mang': '1708796705570-33fd29ef67d0',     // nhà màng trồng rau
    'van-ong': '1738598665806-7ecc32c3594c',      // ống PE, van đầu luống
    'bon-nuoc': '1579908195863-2a7b4307a8cf',     // bồn chứa nước
    'sau-rieng': '1764232288442-f80108db48b2',    // trái sầu riêng trên cây
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    shop: { name: 'Tưới Nông Việt', initials: 'NV' },
    headline: { pre: 'Hệ thống AI chatbot giúp tăng trung bình', em: '57% tỷ lệ chốt đơn' },
    sub: 'Tự động hóa toàn bộ quy trình chốt đơn, bám đuổi, lên đơn và chăm sóc khách để tăng hiệu quả bán hàng.',
    cta: 'Dùng thử miễn phí tại **preny.ai**\nHotline **0389 647 778**',

    images: Object.fromEntries(Object.entries(IMG).map(([k, id]) => [k, L(id)])),

    deck: {
      demoDoc: {
        khach: 'Tâm',
        sanPham: 'Bộ tưới nhỏ giọt trọn gói',
        binhLuan: 'Vườn 100 gốc sầu riêng giá sao shop?',
        post: {
          tieuDe: 'BỘ TƯỚI NHỎ GIỌT TRỌN GÓI 💧',
          dong: ['Combo sẵn cho 100 gốc hoặc 1.000m² rau', 'Đủ ống PE, béc, van, bộ lọc', 'Chỉ từ 2.450K, tự lắp trong 1 buổi', 'Giao tận vườn toàn quốc'],
          anh: ['nho-giot', 'bec-goc', 'phun-suong', 'sau-rieng'],
        },
      },
      dashboard: [
        { ten: 'Combo tưới <span class="grad">nhỏ giọt</span>', den: '21/07/2026', khach: 24, tyLe: 0.57 },
        { ten: 'Bộ <span class="grad">phun sương</span>', den: '18/08/2026', khach: 17, tyLe: 0.6 },
        { ten: 'Béc <span class="grad">phun mưa</span>', den: '26/09/2026', khach: 12, tyLe: 0.55 },
      ],
      chatbot: {
        chat: [
          { ref: { img: L(IMG['nho-giot']), ten: 'Bộ tưới nhỏ giọt trọn gói' } },
          { kh: 'Vườn 100 gốc sầu riêng giá sao shop?' },
          { ai: 'Dạ combo tưới cho vườn **100 gốc** bên em **từ 2.450.000đ** ạ. Cây nhà mình **mấy năm tuổi**, vườn lấy nước từ **giếng khoan hay ao** ạ?', meta: '⚡ Preny AI trả lời sau 2 giây' },
          { kh: 'cây 4 năm, có giếng khoan, hàng cách hàng 8m' },
          { ai: 'Dạ anh dùng **combo béc tưới gốc 100 gốc**: mỗi gốc 1 béc, đủ ống PE, van, lọc, giá **3.290.000đ** ạ. Combo làm sẵn cho vườn hàng cách tới 8m.' },
          { kh: 'ok lấy a 1 bộ' },
          { ai: 'Dạ em ghi combo béc tưới gốc 100 gốc, giao tận vườn. Anh gửi em **SĐT và địa chỉ vườn** để em lên đơn nha.' },
          { kh: 'Tâm, 0978 314 562, thôn 3 xã Ea Tu, gần trường tiểu học, Buôn Ma Thuột' },
          { don: true },
          { ok: true },
        ],
        don: {
          ten: 'Tâm', sdt: '0978 314 562', diaChi: 'Thôn 3, xã Ea Tu (gần trường tiểu học), Buôn Ma Thuột, Đắk Lắk', ma: '#NV26126', phi: 'miễn phí',
          sp: [{ img: L(IMG['bec-goc']), ten: 'Combo béc tưới gốc 100 gốc (ống PE, béc, van, lọc)', sl: 1, dv: 'bộ', gia: 3290000 }],
        },
        anh: {
          img: L(IMG['day-ruong']),
          kh: 'Vườn a đang kéo ống như này, gắn thêm béc nhỏ giọt được ko e?',
          ai: 'Dạ ảnh anh gửi là **ống tưới đặt dọc luống** ạ, gắn thêm béc nhỏ giọt được. Anh cho em biết **ống cỡ phi mấy** và luống trồng cây gì để kỹ thuật bên em kiểm tra, báo đúng loại béc cho anh nha.',
        },
      },
      afterSale: {
        loi: 'Cảm ơn anh Tâm đã chọn Tưới Nông Việt 💛 Nhà vườn lắp tưới bên em hay lấy kèm mấy món này ạ:',
        sp: [
          { img: L(IMG['bon-nuoc']), ten: 'Bồn châm phân 200 lít', gia: 1190000 },
          { img: L(IMG['phun-suong']), ten: 'Combo phun sương nhà màng 500m²', gia: 1280000 },
          { img: L(IMG['ong-nho-giot']), ten: 'Cuộn dây nhỏ giọt 200m', gia: 650000 },
          { img: L(IMG['bec-mua']), ten: 'Bộ 10 béc phun mưa', gia: 450000 },
          { img: L(IMG['van-ong']), ten: 'Bộ van, lọc đĩa đầu nguồn', gia: 279000, cu: 310000 },
        ],
        khach: 'Lấy thêm a 1 bồn châm phân nha e',
        pill: '🛍 Khách lấy thêm ngay: đơn tăng từ 3.290.000đ lên 4.480.000đ',
        fmm: {
          chao: 'Chào anh Tâm 👋 Sắp vào mùa khô rồi, Tưới Nông Việt giảm 15% bồn châm phân cho khách đã lắp hệ thống, em gửi anh xem nha!',
          img: L(IMG['bon-nuoc']), nhan: 'CHUẨN BỊ MÙA KHÔ',
          ten: 'Bồn châm phân 200 lít', mo: 'Giảm 15% cho khách đã lắp hệ thống tưới.', nut: 'Xem ưu đãi',
        },
        zbs: {
          ten: 'Tặng anh Tâm voucher 100.000đ',
          mo: 'Cảm ơn anh đã mua vật tư tưới tại Tưới Nông Việt. Gửi anh ưu đãi cho lần mua tiếp theo:',
          dong: [['Mã voucher', '**NONGVIET100**'], ['Ưu đãi', 'Giảm 100.000đ đơn từ 1.000.000đ'], ['Hạn dùng', '31/01/2027']],
          nut: 'Dùng voucher ngay',
        },
      },
      bamDuoi: {
        cmpDung: ['Khách nhắn xong im → nhắc đúng loại tưới khách đã hỏi (thẻ <b>#tuoinhogiot</b> từ quảng cáo)',
                  'Báo giá xong im → bám đuổi theo giá: giao tận vườn, quà tặng (thẻ <b>#HoiGia</b>)',
                  'Đúng nhu cầu, đúng lý do im → khách quay lại đặt hàng'],
        hoi: 'Vườn 100 gốc sầu riêng giá sao shop?',
        traLoiThuong: 'Dạ từ 2.450.000đ ạ.',
        refImg: L(IMG['nho-giot']), refTen: 'Bộ tưới nhỏ giọt trọn gói',
        vd1: {
          kh: 'Ống nhỏ giọt này để ngoài nắng có bị giòn không shop?',
          ai: 'Dạ ống PE bên em có chất chống tia UV, để ngoài vườn được ạ. Vườn anh trồng cây gì, bao nhiêu gốc ạ?',
          tag: '🏷 #tuoinhogiot', tagNote: 'thẻ từ quảng cáo · khách im 1 ngày',
          nhac: 'Anh ơi, em gửi anh <b>ảnh thật ống nhỏ giọt khách bên em đã kéo</b> dọc luống, nước ra đều từng gốc ạ 💧',
          dung: '🎯 Theo thẻ #tuoinhogiot: nhắc đúng loại tưới khách hỏi',
          khach: 'Vườn a 100 gốc sầu riêng, lấy combo nha',
        },
        vd2: {
          kh: 'Bộ phun sương cho nhà màng 500m² bao nhiêu vậy shop?',
          ai: 'Dạ combo phun sương nhà màng 500m² giá <b>1.280.000đ</b> ạ.',
          tag: '🏷 #HoiGia', tagNote: 'báo giá xong khách im 1 ngày',
          nhac: 'Anh ơi, combo phun sương 500m² anh hỏi hôm qua, bên em <b>giao tận vườn, tặng 10 béc dự phòng</b> ạ. Em lên đơn cho anh nha?',
          dung: '🎯 Theo thẻ #HoiGia: bám đuổi theo giá, đúng lý do khách im',
          khach: 'Ok lên đơn cho a nha e',
        },
      },
      binhLuan: {
        post: '<b>Bộ tưới nhỏ giọt trọn gói</b> · combo sẵn cho 100 gốc hoặc 1.000m² rau, chỉ từ 2.450K, giao tận vườn 💧',
        img: L(IMG['phun-suong']),
        kav: 'MH', kten: 'Mỹ Hạnh', hoi: 'Có bộ phun sương cho vườn lan không shop? Giá sao?',
        traLoi: 'Dạ chào chị Hạnh! Shop vừa nhắn tin báo giá chi tiết cho chị, chị xem tin nhắn nhé 💬',
        act2: 'Nhắn tin riêng báo giá bộ phun sương',
        nhan: 'Chào chị Hạnh! Combo phun sương cho vườn lan, nhà màng <b>500m² giá 1.280.000đ</b>, có sẵn béc, ống, van ạ. Vườn lan nhà chị rộng khoảng bao nhiêu ạ?',
        sp: { ten: 'Combo phun sương nhà màng 500m²', gia: '1.280.000đ', img: L(IMG['nha-mang']) },
        khach: 'Vườn c tầm 400m², lấy 1 bộ giao Bảo Lộc nha',
      },
      duLieu: {
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: tiết kiệm 90% nước, năng suất gấp đôi', 'Khách thất vọng, đòi trả, shop mất uy tín'],
        hoi: 'Lắp bộ tưới này tiết kiệm được bao nhiêu nước vậy e? Có tăng năng suất ko?',
        aiSai: 'Dạ lắp bộ này là <b>tiết kiệm 90% nước, năng suất tăng gấp đôi</b> luôn anh 🥰',
        thucTe: '⚠ Thực tế: nước tiết kiệm được và năng suất tùy vườn, đất, cách chăm; cửa hàng không cam kết con số',
        gian: 'Lắp 1 tháng tiền điện bơm vẫn vậy, trái cũng vậy! Sao nói gấp đôi? 😠',
        cho: 'Dạ anh chờ em một chút để em kiểm tra chính xác cho anh nhé!',
        nv: 'Nhân viên Hải · người thật',
        nvTraLoi: 'Dạ em xin lỗi anh ạ. Tưới nhỏ giọt giúp nước tới đúng gốc, đỡ công tưới tay, còn tiết kiệm bao nhiêu và năng suất ra sao tùy từng vườn, bên em không cam kết con số. Kỹ thuật bên em gọi anh chỉnh lại giờ tưới cho hợp vườn nhé!',
      },
    },
  };
})();
