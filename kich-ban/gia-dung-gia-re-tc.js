/* Kịch bản: GIA DỤNG GIÁ RẺ (chảo chống dính, đồ bếp vài trăm nghìn) — BẢN TRÌNH CHIẾU, nhóm THƯƠNG MẠI ĐIỆN TỬ.
   Làm 20/11/2026 theo người dùng: "gia dụng TMDT (giá trị nhỏ, pipeline ngắn gọn, xin SĐT chốt đơn)".
   Ngành Gia dụng cũ (gia-dung-tc.js, robot hút bụi giá cao) giữ nguyên; bản này cho hàng giá nhỏ, khách quyết nhanh.
   Demo chat chuẩn thương mại điện tử (mục 3), một mạch ngắn:
     chị Ngân gửi ảnh chảo chống dính hỏi giá; ca khó: bếp từ dùng được không, có bong lớp chống dính không
     → AI: đáy từ dùng mọi loại bếp, chống dính không chứa PFOA, bảo hành chống dính 6 tháng, đổi trả 7 ngày; nhà 4 người lấy 26cm
     → chị im → bám đuổi 2 tin theo thẻ #ChaoDayTu (ảnh thật rán trứng ít dầu trên bếp từ), #HoiGia (tặng xẻng silicon, freeship)
     → chốt, xin SĐT + địa chỉ, lên đơn → chăm sóc sau bán: dặn rửa khi chảo nguội, không dùng búi sắt; gợi ý dao, hũ thủy tinh.
   Không có tin tự động cập nhật vận chuyển. Không có bước kết thúc: bấm → là sang slide kế.
   Tên shop, giá, chính sách, tên khách, SĐT: dữ liệu minh họa. Ảnh: Unsplash (ảnh thật, không phải hàng của shop). */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'chao': '1592156328697-079f6ee0cfa5',         // chảo chống dính đen cán cam, nền trắng (ảnh quảng cáo)
    'chao-2': '1592156328757-ae2941276b2c',       // chảo đen cán cam, góc gần
    'chao-trung': '1760192716247-382af2aa9b35',   // rán 2 quả trứng trong chảo
    'chao-bep-tu': '1757920337591-02aa3c80cabc',  // chảo xào trên bếp từ
    'chao-rua': '1592824555997-fdf785dad8d4',     // rửa chảo dưới vòi nước
    'bo-noi': '1518291344630-4857135fb581',       // chảo + nồi trên nền xanh
    'ke-bep': '1556910602-38f53e68e15d',          // kệ bếp xếp nồi chảo
    'dao': '1514986888952-8cd320577b68',          // dao thái rau
    'xeng-go': '1730597363352-0a8fe6eb5d12',      // ống đựng xẻng, muỗng gỗ
    'hu-thuy-tinh': '1774569037314-7a4353f6ae04', // hũ thủy tinh nắp kẹp
    'hu-gia-vi': '1776219189350-728ddf739d6d',    // bộ hũ đựng gia vị
    'treo-do': '1586969593928-1c87c1f9c2ef',      // giá treo dụng cụ bếp
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    shop: { name: 'Gia Dụng Nhà Xinh', initials: 'NX' },
    headline: { pre: 'Hệ thống AI chatbot giúp tăng trung bình', em: '62% tỷ lệ chốt đơn' },
    sub: 'Tự động hóa toàn bộ quy trình chốt đơn, bám đuổi, lên đơn và chăm sóc khách để tăng hiệu quả bán hàng.',
    cta: 'Dùng thử miễn phí tại **preny.ai**\nHotline **0389 647 778**',
    speed: 1.13,
    timing: { read0: 1000, readPerChar: 28, readMax: 4500, type0: 800, typePerChar: 3, typeMax: 1500, fastType: 500,
              featureHold: 1400, sepHold: 1100, cardHold: 4000, introCard: 250 },

    images: Object.fromEntries(Object.entries(IMG).map(([k, id]) => [k, U(id)])),

    features: [
      { title: 'AI chatbot tư vấn, chốt đơn 24/7', desc: 'Tăng trung bình 62% tỷ lệ chốt đơn.',
        kws: ['Trả lời ngay tức thì, 24/7', 'Nhận diện đúng mẫu chảo từ ảnh', 'Trả lời gọn: bếp từ, chống dính, bảo hành', 'Chọn size theo số người ăn', 'Xin SĐT, chốt đơn ngay'] },
      { title: 'AI tự động bám đuổi khách hàng trong 7 ngày', desc: 'Tăng thêm khoảng 35% tỷ lệ chốt đơn.',
        kws: ['~65% khách nhắn tin rồi im lặng', 'Tự gắn thẻ mẫu khách xem, lý do im', 'Gửi ảnh thật chảo rán trứng ít dầu', 'Báo giá xong im → quà tặng đúng lúc'] },
      { title: 'AI Agent tự động lên đơn và gửi sang đơn vị vận chuyển', desc: 'Tiết kiệm hơn 90% thời gian xử lý đơn.',
        kws: ['Thu đủ tên, SĐT, địa chỉ', 'Ghi đúng size, quà tặng', 'Tự tạo đơn, gửi vận chuyển'] },
      { title: 'AI tự động chăm sóc khách hàng sau bán', desc: 'Tăng doanh thu từ khách hàng cũ.',
        kws: ['Hỏi thăm, dặn cách dùng cho bền', 'Gợi ý dao, hũ đựng, đồ bếp', 'Khách mua thêm, tăng giá trị vòng đời'] },
    ],

    steps: [
      { intro: true, hold: 1800 },

      /* ---- 1. Tư vấn ngắn: giá, bếp từ, bong chống dính → size ---- */
      { feature: 1 },
      { sep: 'Khách nhắn tin từ quảng cáo Facebook', style: 'time', hold: 800 },
      { img: 'chao', hold: 1500 },
      { kh: 'Chảo này bn shop? Bếp từ dùng đc k, có bị bong chống dính k e?' },
      { ai: 'Dạ chào chị! Em báo chị liền ạ 🍳', fast: true, meta: '⚡ Preny AI trả lời sau 2 giây', kw: 0 },
      { ai: 'Mẫu chị gửi là **chảo chống dính đáy từ**, dùng được **mọi loại bếp**, chống dính **không chứa PFOA**. Size 26cm giá **189.000đ**, **bảo hành chống dính 6 tháng** ạ.', kw: [1, 2] },
      { kh: 'Nhà c 4 người lấy size nào e?' },
      { ai: 'Dạ 4 người chị lấy **26cm** là vừa, rán cá, xào rau đều gọn ạ. Đơn từ 150.000đ **freeship**, lỗi đổi trong 7 ngày. Chị gửi em **SĐT, địa chỉ** để em lên đơn nha? 😊', kw: [3, 4] },
      { kh: 'Để c xem thêm đã' },

      /* ---- 2. Khách im → bám đuổi 2 tin theo thẻ ---- */
      { feature: 2 },
      { sep: 'Khách chưa phản hồi… · AI gắn thẻ #ChaoDayTu #HoiGia', style: 'silent', kw: [0, 1], hold: 1800 },
      { sep: '— 1 ngày sau —' },
      { ai: 'Chị Ngân ơi, em gửi chị **ảnh thật** chảo 26cm rán trứng trên **bếp từ**, chỉ cần chút dầu là trứng trượt ra liền ạ 🍳', meta: '🔁 Tự động · Bám đuổi theo thẻ #ChaoDayTu', kw: 2 },
      { aiImgs: [{ img: 'chao-bep-tu', label: 'Trên bếp từ' }, { img: 'chao-trung', label: 'Rán trứng ít dầu' },
                 { img: 'chao-rua', label: 'Rửa nhẹ là sạch' }, { img: 'chao-2', label: 'Đáy từ dày' }], hold: 3200 },
      { sep: '— 2 ngày sau —' },
      { ai: 'Chảo chị hỏi giá, chốt trong tuần này em **tặng xẻng silicon** chống trầy, **freeship** tận nhà ạ 🎁', meta: '🔁 Tự động · Bám đuổi theo thẻ #HoiGia', kw: 3 },
      { kh: 'Ok lấy c 1 cái 26cm nha e' },

      /* ---- 3. Xin SĐT, lên đơn tự động ---- */
      { feature: 3 },
      { ai: 'Dạ chị cho em xin **tên, SĐT và địa chỉ** nhận hàng nha ạ.', kw: 0 },
      { kh: 'Ngân – 0976 284 153\n27 Phan Huy Ích, P.15, Tân Bình' },
      { card: {
          tag: '✓ Tin xác nhận đơn',
          intro: 'Dạ chị kiểm tra lại đơn giúp em nhé:',
          lines: ['1 **chảo chống dính đáy từ 26cm**', 'Tặng 1 xẻng silicon chống trầy', 'Tổng cộng: **189.000đ** · freeship · nhận hàng rồi trả tiền', 'Giao tới: Ngân, 27 Phan Huy Ích, P.15, Tân Bình'],
          button: 'Quản lý đơn hàng',
        }, kw: 1, hold: 4200 },
      { kh: 'Ok em' },
      { card: {
          tag: '✓ Đã tạo đơn & gửi vận chuyển', ok: true,
          lines: ['Mã đơn: **#NX20114**', 'Mã vận đơn: **VD47205318**', 'Dự kiến giao: **22/11**'],
        }, kw: 2, hold: 3200 },

      /* ---- 4. Chăm sóc sau bán ---- */
      { feature: 4 },
      { sep: '— Ngày 24/11 · 2 ngày sau khi nhận —' },
      { ai: 'Chị Ngân ơi, chảo dùng ổn không ạ? Chị nhớ **rửa khi chảo đã nguội**, dùng miếng rửa mềm, **không dùng búi sắt** là chảo bền lâu nha 🍳', meta: '💛 Tự động · Chăm sóc sau bán', kw: 0 },
      { kh: 'Rán cá không dính miếng nào em ơi 😍' },
      { sep: '— 1 tuần sau —' },
      { ai: 'Bên em đang **giảm 15%** mấy món bếp khách hay mua kèm chảo, chị xem thử nha:', kw: 1 },
      { catalog: [
          { name: 'Dao thái inox', color: '20cm', price: '127.000đ', old: '149.000đ', tag: 'Bán chạy', art: 'dao' },
          { name: 'Bộ 3 hũ thủy tinh', color: 'nắp kẹp', price: '169.000đ', old: '199.000đ', tag: '-15%', art: 'hu-thuy-tinh' },
          { name: 'Bộ xẻng muỗng gỗ', color: '5 món', price: '101.000đ', old: '119.000đ', tag: 'Mới về', art: 'xeng-go' },
        ], hold: 4000 },
      { kh: 'Lấy c thêm bộ hũ thủy tinh nha', kw: 2, hold: 1500 },
    ],

    deck: {
      demoDoc: {
        khach: 'Kim Ngân',
        sanPham: 'Chảo chống dính đáy từ 26cm',
        binhLuan: 'Xin giá chảo 26cm',
        post: {
          tieuDe: 'CHẢO CHỐNG DÍNH ĐÁY TỪ – CHỈ 189K 🍳',
          dong: ['Dùng được mọi loại bếp', 'Chống dính không chứa PFOA', 'Bảo hành chống dính 6 tháng', 'Freeship đơn từ 150k'],
          anh: ['chao', 'chao-trung', 'chao-bep-tu', 'bo-noi'],
        },
      },
      dashboard: [
        { ten: 'Chảo, <span class="grad">nồi chống dính</span>', den: '21/07/2026', khach: 24, tyLe: 0.61 },
        { ten: 'Dao, <span class="grad">thớt, dụng cụ bếp</span>', den: '18/08/2026', khach: 17, tyLe: 0.58 },
        { ten: 'Hũ đựng, <span class="grad">đồ sắp xếp bếp</span>', den: '26/09/2026', khach: 15, tyLe: 0.6 },
      ],
      chatbot: {
        chat: [
          { ref: { img: L(IMG['chao']), ten: 'Chảo chống dính đáy từ 26cm' } },
          { kh: 'Chảo này bếp từ dùng đc k e? Có bong chống dính k?' },
          { ai: 'Dạ **đáy từ**, dùng được mọi loại bếp ạ. Size 26cm **189.000đ**, **bảo hành chống dính 6 tháng**.', meta: '⚡ Preny AI trả lời sau 2 giây' },
          { kh: 'Nhà 4 người lấy size nào?' },
          { ai: 'Dạ chị lấy **26cm** là vừa ạ, freeship, lỗi đổi trong 7 ngày. Chị gửi em SĐT, địa chỉ nha.' },
          { kh: 'Ngân, 0976 284 153, 27 Phan Huy Ích, P.15, Tân Bình' },
          { ai: 'Dạ em lên đơn, tặng chị xẻng silicon luôn ạ ⚡' },
          { don: true },
          { ok: true },
        ],
        don: {
          ten: 'Ngân', sdt: '0976 284 153', diaChi: '27 Phan Huy Ích, P.15, Tân Bình', ma: '#NX20114', phi: 'miễn phí',
          sp: [{ img: L(IMG['chao']), ten: 'Chảo chống dính đáy từ 26cm', sl: 1, dv: 'cái', gia: 189000 }],
        },
        anh: {
          img: L(IMG['dao']),
          kh: 'Dao như hình này có không e?',
          ai: 'Dạ mẫu chị gửi là **dao thái inox lưỡi 20cm**, bên em có giá **149.000đ** ạ. Chị lấy kèm chảo em freeship luôn nha.',
        },
      },
      afterSale: {
        loi: 'Cảm ơn chị Ngân đã mua chảo ở Nhà Xinh 💛 Nhiều khách lấy thêm mấy món này dùng kèm ạ:',
        sp: [
          { img: L(IMG['dao']), ten: 'Dao thái inox 20cm', gia: 149000 },
          { img: L(IMG['hu-thuy-tinh']), ten: 'Bộ 3 hũ thủy tinh nắp kẹp', gia: 199000 },
          { img: L(IMG['xeng-go']), ten: 'Bộ xẻng muỗng gỗ 5 món', gia: 119000 },
          { img: L(IMG['hu-gia-vi']), ten: 'Bộ hũ đựng gia vị 3 món', gia: 159000, cu: 189000 },
          { img: L(IMG['bo-noi']), ten: 'Nồi chống dính đáy từ 20cm', gia: 249000 },
        ],
        khach: 'Lấy thêm c bộ xẻng gỗ nha',
        pill: '🛍 Khách mua thêm ngay: đơn tăng từ 189.000đ lên 308.000đ',
        fmm: {
          chao: 'Chào chị Ngân 👋 Gia Dụng Nhà Xinh vừa về bộ nồi chảo đáy từ mới, gửi chị xem trước nha!',
          img: L(IMG['ke-bep']), nhan: 'HÀNG MỚI VỀ',
          ten: 'Bộ nồi chảo đáy từ 3 món', mo: 'Khách cũ giảm 15%, freeship.', nut: 'Xem ngay',
        },
        zbs: {
          ten: 'Tặng chị Ngân voucher 20.000đ',
          mo: 'Cảm ơn chị đã mua hàng tại Gia Dụng Nhà Xinh. Gửi chị ưu đãi cho lần mua tiếp theo:',
          dong: [['Mã voucher', '**NHAXINH20**'], ['Ưu đãi', 'Giảm 20.000đ đơn từ 150.000đ'], ['Hạn dùng', '31/01/2027']],
          nut: 'Dùng voucher ngay',
        },
      },
      bamDuoi: {
        cmpDung: ['Khách nhắn xong im → nhắc đúng mẫu chảo khách đã xem (thẻ <b>#ChaoDayTu</b> từ quảng cáo)',
                  'Báo giá xong im → bám đuổi theo giá: quà tặng, freeship (thẻ <b>#HoiGia</b>)',
                  'Đúng nhu cầu, đúng lý do im → khách quay lại mua'],
        hoi: 'Chảo 26cm giá sao shop?',
        traLoiThuong: 'Dạ 189.000đ ạ.',
        refImg: L(IMG['chao']), refTen: 'Chảo chống dính đáy từ 26cm',
        vd1: {
          kh: 'Chảo này bếp từ dùng được không shop?',
          ai: 'Dạ đáy từ, dùng được mọi loại bếp ạ. Nhà mình mấy người ăn để em chọn size nha?',
          tag: '🏷 #ChaoDayTu', tagNote: 'thẻ từ quảng cáo · khách im 1 ngày',
          nhac: 'Chị ơi, em gửi chị <b>ảnh thật chảo rán trứng trên bếp từ</b>, chút dầu là trứng trượt ra liền. Chị báo em số người ăn để em chọn size nha 😊',
          dung: '🎯 Theo thẻ #ChaoDayTu: nhắc đúng mẫu chảo khách xem',
          khach: 'Nhà c 4 người em',
        },
        vd2: {
          kh: 'Chảo 26cm bao nhiêu vậy shop?',
          ai: 'Dạ chảo 26cm <b>189.000đ</b>, freeship đơn từ 150k ạ.',
          tag: '🏷 #HoiGia', tagNote: 'báo giá xong khách im 1 ngày',
          nhac: 'Chị ơi, chảo chị hỏi giá hôm qua, chốt trong tuần em <b>tặng xẻng silicon, freeship</b> ạ. Em lên đơn cho chị nha?',
          dung: '🎯 Theo thẻ #HoiGia: bám đuổi theo giá, đúng lý do khách im',
          khach: 'Ok lấy c 1 cái nha e',
        },
      },
      binhLuan: {
        post: 'Chảo chống dính <b>đáy từ</b> chỉ 189k · dùng mọi loại bếp, bảo hành chống dính 6 tháng 🍳',
        img: L(IMG['chao-trung']),
        kav: 'TH', kten: 'Thu Hằng', hoi: 'Bếp gas dùng được không shop? Có size 30 không?',
        traLoi: 'Dạ chào chị Hằng! Shop vừa nhắn tin tư vấn chi tiết cho chị, chị xem tin nhắn nhé 💬',
        act2: 'Nhắn tin riêng tư vấn size chảo',
        nhan: 'Chào chị Hằng! Chảo đáy từ dùng được cả <b>bếp gas, bếp từ, hồng ngoại</b> ạ. Bên em có size <b>28cm 219.000đ</b>, lớn nhất là 28cm. Chị gửi em SĐT, địa chỉ để em lên đơn nha?',
        sp: { ten: 'Chảo chống dính đáy từ 28cm', gia: '219.000đ', img: L(IMG['chao-2']) },
        khach: 'Lấy c 1 cái 28 nha',
      },
      duLieu: {
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: bảo hành trọn đời, dùng búi sắt thoải mái', 'Khách đổi trả, shop mất uy tín'],
        hoi: 'Chảo này bảo hành trọn đời đúng k em? Chà búi sắt được k?',
        aiSai: 'Dạ đúng ạ! Chảo <b>bảo hành trọn đời</b>, chà <b>búi sắt thoải mái</b> chị nhé 🥰',
        thucTe: '⚠ Thực tế: bảo hành chống dính 6 tháng; chà búi sắt làm trầy lớp chống dính',
        gian: 'Chảo dùng 2 tháng bong hết chống dính! Sao nói bảo hành trọn đời, chà búi sắt được? 😠',
        cho: 'Dạ chị chờ em một chút để em kiểm tra chính xác thông tin sản phẩm cho chị nhé!',
        nv: 'Nhân viên Thảo · người thật',
        nvTraLoi: 'Dạ em xin lỗi chị ạ. Chảo bảo hành chống dính 6 tháng, còn trong hạn nên em đổi chảo mới cho chị liền. Chị dùng miếng rửa mềm giúp em để chảo bền hơn nhé!',
      },
    },
  };
})();
