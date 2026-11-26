/* Kịch bản: CAMERA AN NINH (camera wifi) — BẢN TRÌNH CHIẾU, nhóm THƯƠNG MẠI ĐIỆN TỬ.
   Làm 26/11/2026 theo người dùng: "làm ngành camera, làm giống case đt hồi sáng mời người dùng lên cửa hàng.
   nếu khách hàng họ muốn giao luôn, cho AI chatbot xin sđt và địa chỉ để chốt đơn giao luôn nha".
   Từ 23/11/2026 bỏ demo chat vào thẳng (&demo): file chỉ có phần deck cho Bài 1 (slide), không viết steps/features.
   Mạch ngắn trên slide (khớp Bài 2 demo/bai2/kich-ban-camera-tc.js): anh Hùng hỏi giá camera ngoài trời, cần gắn trước cổng và ngoài sân
     → AI báo 890.000đ/cái, hỏi mấy cái, có wifi không → 2 cái 1.780.000đ → mời ghé showroom Gò Vấp xem hình ngày/đêm
     → khách ở Biên Hòa muốn giao luôn → xin SĐT + địa chỉ → lên đơn
     → chăm sóc sau bán: camera trong nhà, camera dùng pin, camera thân, kích sóng wifi, cảm biến cửa.
   Theo quy tắc 25/11/2026: AI chỉ báo giá, gửi ảnh, hỏi số lượng, xin SĐT + địa chỉ; số camera do khách tự nói, không check khách cũ/mới.
   Không hứa chống trộm 100%: slide "AI không trả lời bừa" lấy đúng ca AI sai hứa "nhìn rõ biển số xe cách 50m".
   Tên cửa hàng (Camera Gia An), giá, khách, SĐT, địa chỉ: dữ liệu minh họa. Ảnh: Unsplash, ảnh thật, không logo hãng; dùng đường dẫn trong máy. */
(function () {
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'cam': '1549109926-58f039549485',          // camera wifi 2 râu gắn tường (ảnh quảng cáo)
    'cam-hien': '1621886943381-cb97cc18b17a',  // camera gắn dưới hiên nhà
    'cam-dome': '1614469422872-6e09d2569cc0',  // camera bán cầu trên tường gạch
    'cam-xanh': '1585206031650-9e9a7c87dcfe',  // camera thân nhỏ trên tường xanh
    'cam-than': '1773767797729-f3ae24353399',  // camera thân có đèn trợ sáng
    'cam-tuong': '1496368077930-c1e31b4e5b44', // camera thân trên tường xám
    'cam-pin': '1795575634292-4ec25d657087',   // camera dùng pin màu đen
    'trong-nha': '1715869618915-a7bf6608d4c3', // camera trong nhà xoay 360
    'trong-nha-2': '1728971975421-50f3dc9663a4', // camera trong nhà trên bàn
    'xem-app': '1715869428589-366729e7fdcd',   // camera trong nhà cạnh điện thoại
    'bo-smart': '1730967844913-29eb5cae5f34',  // camera, cảm biến, ổ cắm thông minh
    'wifi': '1606904825846-647eb07f5be2',      // bộ phát wifi
    'lap-dat': '1676630656246-3047520adfdf',   // thợ lắp camera
    'cua-hang': '1697545806136-92d30cb7081e',  // tư vấn tại quầy cửa hàng
    'cong-nha': '1645005049035-c35644b627ba',  // cổng nhà, lối xe vào
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    shop: { name: 'Camera Gia An', initials: 'GA' },
    headline: { pre: 'Hệ thống AI chatbot giúp tăng trung bình', em: '58% tỷ lệ chốt đơn' },
    sub: 'Tự động hóa toàn bộ quy trình chốt đơn, bám đuổi, lên đơn và chăm sóc khách để tăng hiệu quả bán hàng.',
    cta: 'Dùng thử miễn phí tại **preny.ai**\nHotline **0389 647 778**',

    images: Object.fromEntries(Object.entries(IMG).map(([k, id]) => [k, L(id)])),

    deck: {
      demoDoc: {
        khach: 'Hùng',
        sanPham: 'Camera wifi ngoài trời 2K',
        binhLuan: 'Camera ngoài trời giá sao shop?',
        post: {
          tieuDe: 'CAMERA WIFI NGOÀI TRỜI 2K 📷',
          dong: ['Có màu ban đêm, đàm thoại 2 chiều', 'Chỉ từ 890K, bảo hành 24 tháng', 'Giao toàn quốc, tự lắp được', 'Showroom Gò Vấp xem hình thực tế'],
          anh: ['cam', 'cam-hien', 'cam-dome', 'xem-app'],
        },
      },
      dashboard: [
        { ten: 'Camera wifi <span class="grad">ngoài trời</span>', den: '21/07/2026', khach: 27, tyLe: 0.58 },
        { ten: 'Camera <span class="grad">trong nhà 360°</span>', den: '18/08/2026', khach: 22, tyLe: 0.61 },
        { ten: 'Camera <span class="grad">dùng pin</span>', den: '26/09/2026', khach: 13, tyLe: 0.55 },
      ],
      chatbot: {
        chat: [
          { ref: { img: L(IMG['cam']), ten: 'Camera wifi ngoài trời 2K' } },
          { kh: 'camera ngoài trời giá sao e? a cần gắn trước cổng với ngoài sân' },
          { ai: 'Dạ camera wifi ngoài trời 2K bên em **890.000đ/cái**, bảo hành 24 tháng ạ. Anh cần gắn **mấy cái**, chỗ gắn có **wifi** tới không ạ?', meta: '⚡ Preny AI trả lời sau 2 giây' },
          { kh: '2 cái, wifi có tới cổng' },
          { ai: 'Dạ 2 cái là **1.780.000đ** ạ. Anh rảnh ghé showroom **312 Quang Trung, Gò Vấp** xem hình ngày, đêm thực tế nha.' },
          { kh: 'a ở Biên Hòa xa, gửi về luôn đc ko e?' },
          { ai: 'Dạ được ạ, giao miễn phí, camera wifi tự lắp được. Anh gửi em **SĐT và địa chỉ** để em lên đơn nha.' },
          { kh: 'Hùng, 0913 482 576, 18 Phạm Văn Thuận, P. Tân Mai, Biên Hòa' },
          { don: true },
          { ok: true },
        ],
        don: {
          ten: 'Hùng', sdt: '0913 482 576', diaChi: '18 Phạm Văn Thuận, P. Tân Mai, Biên Hòa, Đồng Nai', ma: '#GA26126', phi: 'miễn phí',
          sp: [{ img: L(IMG['cam']), ten: 'Camera wifi ngoài trời 2K', sl: 2, dv: 'cái', gia: 890000 }],
        },
        anh: {
          img: L(IMG['cam-hien']),
          kh: 'Nhà a có hiên như này, gắn camera dưới hiên được ko e?',
          ai: 'Dạ ảnh anh gửi là **hiên mái che**, gắn camera ngoài trời dưới hiên rất hợp, đỡ mưa nắng trực tiếp ạ. Anh cho em biết chỗ đó **có sóng wifi** không để em tư vấn thêm nha.',
        },
      },
      afterSale: {
        loi: 'Cảm ơn anh Hùng đã chọn Camera Gia An 💛 Khách mua camera ngoài trời bên em hay lấy kèm mấy món này ạ:',
        sp: [
          { img: L(IMG['trong-nha']), ten: 'Camera trong nhà xoay 360°', gia: 490000 },
          { img: L(IMG['cam-pin']), ten: 'Camera dùng pin, không cần dây', gia: 1290000 },
          { img: L(IMG['cam-than']), ten: 'Camera thân 4MP có màu ban đêm', gia: 1190000 },
          { img: L(IMG['wifi']), ten: 'Bộ kích sóng wifi ra cổng', gia: 350000 },
          { img: L(IMG['bo-smart']), ten: 'Bộ cảm biến cửa, báo động', gia: 531000, cu: 590000 },
        ],
        khach: 'Lấy thêm a 1 camera trong nhà nha e',
        pill: '🛍 Khách lấy thêm ngay: đơn tăng từ 1.780.000đ lên 2.270.000đ',
        fmm: {
          chao: 'Chào anh Hùng 👋 Tết này về quê vẫn xem được nhà qua điện thoại. Camera Gia An giảm 15% camera trong nhà cho khách quen, em gửi anh xem nha!',
          img: L(IMG['trong-nha-2']), nhan: 'VỀ QUÊ ĂN TẾT',
          ten: 'Camera trong nhà xoay 360°', mo: 'Giảm 15% cho khách đã mua camera.', nut: 'Xem ưu đãi',
        },
        zbs: {
          ten: 'Tặng anh Hùng voucher 100.000đ',
          mo: 'Cảm ơn anh đã mua camera tại Camera Gia An. Gửi anh ưu đãi cho lần mua tiếp theo:',
          dong: [['Mã voucher', '**GIAAN100**'], ['Ưu đãi', 'Giảm 100.000đ đơn từ 1.000.000đ'], ['Hạn dùng', '31/01/2027']],
          nut: 'Dùng voucher ngay',
        },
      },
      bamDuoi: {
        cmpDung: ['Khách nhắn xong im → nhắc đúng loại camera khách đã hỏi (thẻ <b>#camerangoaitroi</b> từ quảng cáo)',
                  'Báo giá xong im → bám đuổi theo giá: giao miễn phí, quà tặng (thẻ <b>#HoiGia</b>)',
                  'Đúng nhu cầu, đúng lý do im → khách quay lại đặt hàng'],
        hoi: 'Camera ngoài trời giá sao shop?',
        traLoiThuong: 'Dạ 890.000đ ạ.',
        refImg: L(IMG['cam']), refTen: 'Camera wifi ngoài trời 2K',
        vd1: {
          kh: 'Camera này để ngoài mưa có bị hư không shop?',
          ai: 'Dạ vỏ camera chống nước, gắn ngoài trời được ạ. Anh cần gắn mấy cái ạ?',
          tag: '🏷 #camerangoaitroi', tagNote: 'thẻ từ quảng cáo · khách im 1 ngày',
          nhac: 'Anh ơi, em gửi anh <b>ảnh camera khách bên em đã gắn</b> dưới hiên, ngoài cổng, chạy ổn qua mùa mưa ạ 📷',
          dung: '🎯 Theo thẻ #camerangoaitroi: nhắc đúng loại khách hỏi',
          khach: 'Ok lấy a 2 cái gắn cổng với sân',
        },
        vd2: {
          kh: 'Camera trong nhà xoay 360 bao nhiêu vậy shop?',
          ai: 'Dạ camera trong nhà xoay 360° giá <b>490.000đ</b> ạ.',
          tag: '🏷 #HoiGia', tagNote: 'báo giá xong khách im 1 ngày',
          nhac: 'Anh ơi, camera trong nhà anh hỏi hôm qua, bên em <b>giao miễn phí, tặng thẻ nhớ 64GB</b> ạ. Em lên đơn cho anh nha?',
          dung: '🎯 Theo thẻ #HoiGia: bám đuổi theo giá, đúng lý do khách im',
          khach: 'Ok lên đơn cho a 1 cái nha e',
        },
      },
      binhLuan: {
        post: '<b>Camera wifi ngoài trời 2K</b> · có màu ban đêm, chỉ từ 890K, bảo hành 24 tháng, giao toàn quốc 📷',
        img: L(IMG['cam-dome']),
        kav: 'TL', kten: 'Thu Loan', hoi: 'Có camera trong nhà xem em bé không shop? Giá sao?',
        traLoi: 'Dạ chào chị Loan! Shop vừa nhắn tin báo giá chi tiết cho chị, chị xem tin nhắn nhé 💬',
        act2: 'Nhắn tin riêng báo giá camera trong nhà',
        nhan: 'Chào chị Loan! Camera trong nhà xoay 360° bên em giá <b>490.000đ</b>, đàm thoại 2 chiều, xem qua điện thoại ạ. Chị cần gắn mấy phòng ạ?',
        sp: { ten: 'Camera trong nhà xoay 360°', gia: '490.000đ', img: L(IMG['trong-nha']) },
        khach: 'Lấy c 1 cái, giao Thủ Đức nha',
      },
      duLieu: {
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: nhìn rõ biển số xe cách 50m', 'Khách thất vọng, đòi trả, shop mất uy tín'],
        hoi: 'Camera này gắn ở cổng có nhìn rõ biển số xe ngoài đường không e?',
        aiSai: 'Dạ camera 2K <b>nhìn rõ biển số xe cách 50m</b> luôn anh nhé 🥰',
        thucTe: '⚠ Thực tế: camera 2K nhìn rõ mặt người trong khoảng 8–10m; xem biển số ở xa cần camera chuyên dụng',
        gian: 'Gắn rồi xe cách 20m đã mờ biển số! Sao nói 50m? 😠',
        cho: 'Dạ anh chờ em một chút để em kiểm tra chính xác cho anh nhé!',
        nv: 'Nhân viên Khoa · người thật',
        nvTraLoi: 'Dạ em xin lỗi anh ạ. Camera này nhìn rõ trong khoảng 8–10m, xem biển số ở xa phải dùng camera chuyên dụng. Anh muốn đổi, em đổi miễn phí cho anh nhé!',
      },
    },
  };
})();
