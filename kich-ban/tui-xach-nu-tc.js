/* Kịch bản: THỜI TRANG TÚI XÁCH NỮ (túi đeo chéo vài trăm nghìn) — BẢN TRÌNH CHIẾU, nhóm THƯƠNG MẠI ĐIỆN TỬ.
   Làm 23/11/2026 theo người dùng: "TMĐT: thời trang túi xách nữ".
   Demo chat chuẩn thương mại điện tử (mục 3), một mạch ngắn:
     chị Thảo (dân văn phòng) gửi ảnh túi đeo chéo hỏi giá; ca khó: đựng vừa điện thoại 6.7 inch và ví không, da có bong không, đeo đi làm hợp không
     → AI: da PU mềm chống bong tróc, đựng vừa điện thoại 6.7 inch + ví + son, dây chỉnh dài ngắn; 3 mẫu màu kem / đen / nâu
     → chị chọn kem rồi im → bám đuổi 2 tin theo thẻ #TuiDeoCheo (ảnh thật đựng điện thoại, phối đồ đi làm), #HoiGia (freeship, đổi màu 7 ngày)
     → chốt, xin SĐT + địa chỉ, lên đơn → chăm sóc sau bán: dặn lau bằng khăn mềm, không phơi nắng; gợi ý ví, khăn lụa, kính mát.
   Ảnh mỗi màu là một chiếc túi khác nhau nên gọi là "mẫu màu", không khẳng định cùng một dáng y hệt.
   Không có tin tự động cập nhật vận chuyển. Không có bước kết thúc: bấm → là sang slide kế.
   Tên shop, giá, chính sách, tên khách, SĐT, địa chỉ: dữ liệu minh họa. Ảnh: Unsplash (ảnh thật, không phải hàng của shop). */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'tui-kem': '1760624294514-3548bee70d26',   // người đeo túi đeo chéo màu kem (ảnh quảng cáo)
    'tui-kem-2': '1789110854684-eb5a433a68c2', // túi đeo chéo kem, khóa kéo bạc
    'tui-den': '1620786514669-06e2340fce71',   // túi đeo chéo đen, nền trắng
    'tui-nau': '1760624294699-3d3156314391',   // bỏ điện thoại vào túi đeo chéo nâu
    'phoi-do': '1765114470103-b68286cf9c6d',   // phối áo sơ mi trắng, quần jean, túi nhỏ
    'ao-dai': '1773394177841-0feb4fc370c4',    // cô gái áo dài hồng cầm túi trắng
    'vi': '1743244948210-8d70a7f2b556',        // ví nữ nhiều màu
    'vi-kem': '1789110854823-381c81e48b4b',    // ví cầm tay màu kem
    'khan': '1761369332487-777e59fa4bcf',      // khăn lụa treo nhiều màu
    'kinh': '1593821684772-6865bb9413a0',      // kính mát, mũ, phụ kiện
    'tui-hong': '1681747685985-a401c271156c',  // túi xách tay hồng
    'tote': '1624687943971-e86af76d57de',      // túi tote da nâu
    'ke-tui': '1789098286012-c085db27219f',    // kệ trưng bày túi xách
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    shop: { name: 'Túi Xách Lam Anh', initials: 'LA' },
    headline: { pre: 'Hệ thống AI chatbot giúp tăng trung bình', em: '62% tỷ lệ chốt đơn' },
    sub: 'Tự động hóa toàn bộ quy trình chốt đơn, bám đuổi, lên đơn và chăm sóc khách để tăng hiệu quả bán hàng.',
    cta: 'Dùng thử miễn phí tại **preny.ai**\nHotline **0389 647 778**',
    speed: 1.13,
    timing: { read0: 1000, readPerChar: 28, readMax: 4500, type0: 800, typePerChar: 3, typeMax: 1500, fastType: 500,
              featureHold: 1400, sepHold: 1100, cardHold: 4000, introCard: 250 },

    images: Object.fromEntries(Object.entries(IMG).map(([k, id]) => [k, U(id)])),

    features: [
      { title: 'AI chatbot tư vấn, chốt đơn 24/7', desc: 'Tăng trung bình 62% tỷ lệ chốt đơn.',
        kws: ['Trả lời ngay tức thì, 24/7', 'Nhận diện đúng mẫu túi từ ảnh', 'Trả lời gọn: đựng vừa gì, chất da, đeo đi làm', 'Gửi 3 mẫu màu cho khách chọn', 'Xin SĐT, chốt đơn ngay'] },
      { title: 'AI tự động bám đuổi khách hàng trong 7 ngày', desc: 'Tăng thêm khoảng 35% tỷ lệ chốt đơn.',
        kws: ['~65% khách nhắn tin rồi im lặng', 'Tự gắn thẻ mẫu khách xem, lý do im', 'Gửi ảnh thật túi đựng điện thoại, phối đồ', 'Báo giá xong im → freeship đúng lúc'] },
      { title: 'AI Agent tự động lên đơn và gửi sang đơn vị vận chuyển', desc: 'Tiết kiệm hơn 90% thời gian xử lý đơn.',
        kws: ['Thu đủ tên, SĐT, địa chỉ', 'Ghi đúng mẫu, màu khách chọn', 'Tự tạo đơn, gửi vận chuyển'] },
      { title: 'AI tự động chăm sóc khách hàng sau bán', desc: 'Tăng doanh thu từ khách hàng cũ.',
        kws: ['Hỏi thăm, dặn cách giữ túi bền', 'Gợi ý ví, khăn lụa, kính mát', 'Khách mua thêm, tăng giá trị vòng đời'] },
    ],

    steps: [
      { intro: true, hold: 1800 },

      /* ---- 1. Tư vấn ngắn: giá, đựng vừa gì, chất da → chọn màu ---- */
      { feature: 1 },
      { sep: 'Khách nhắn tin từ quảng cáo Facebook', style: 'time', hold: 800 },
      { img: 'tui-kem', hold: 1500 },
      { kh: 'Túi này bn shop? Đựng vừa đt 6.7 inch với ví k, da có bị bong k e?' },
      { ai: 'Dạ chào chị! Em báo chị liền ạ 👜', fast: true, meta: '⚡ Preny AI trả lời sau 2 giây', kw: 0 },
      { ai: 'Mẫu chị gửi là **túi đeo chéo da mềm**, giá **390.000đ** ạ. Túi đựng vừa **điện thoại 6.7 inch + ví + son**, da PU mềm **chống bong tróc**, dây chỉnh dài ngắn được.', kw: [1, 2] },
      { kh: 'C đi làm văn phòng đeo có hợp k e?' },
      { ai: 'Dạ hợp lắm ạ, túi gọn, phối sơ mi hay áo dài đều xinh. Bên em có **3 mẫu màu kem, đen, nâu**, đơn từ 300.000đ **freeship**, **đổi màu trong 7 ngày**. Chị ưng màu nào để em giữ hàng ạ? 😊', kw: [3, 4] },
      { aiImgs: [{ img: 'tui-kem-2', label: 'Màu kem' }, { img: 'tui-den', label: 'Màu đen' },
                 { img: 'tui-nau', label: 'Màu nâu' }, { img: 'phoi-do', label: 'Phối đồ đi làm' }], hold: 3000 },
      { kh: 'Màu kem đẹp á, để c suy nghĩ thêm' },

      /* ---- 2. Khách im → bám đuổi 2 tin theo thẻ ---- */
      { feature: 2 },
      { sep: 'Khách chưa phản hồi… · AI gắn thẻ #TuiDeoCheo #HoiGia', style: 'silent', kw: [0, 1], hold: 1800 },
      { sep: '— 1 ngày sau —' },
      { ai: 'Chị Thảo ơi, em gửi chị **ảnh thật** túi đeo chéo bỏ vừa điện thoại và ví, đeo đi làm gọn gàng lắm ạ 👜', meta: '🔁 Tự động · Bám đuổi theo thẻ #TuiDeoCheo', kw: 2 },
      { aiImgs: [{ img: 'tui-nau', label: 'Vừa điện thoại 6.7"' }, { img: 'tui-kem', label: 'Màu kem chị chọn' },
                 { img: 'ao-dai', label: 'Phối áo dài' }, { img: 'phoi-do', label: 'Đi làm văn phòng' }], hold: 3200 },
      { sep: '— 2 ngày sau —' },
      { ai: 'Túi màu kem chị hỏi giá, em vẫn giữ cho chị ạ. Đơn này **freeship**, nhận túi không ưng màu chị **đổi trong 7 ngày** nha 🎁', meta: '🔁 Tự động · Bám đuổi theo thẻ #HoiGia', kw: 3 },
      { kh: 'Ok lấy c 1 cái màu kem nha e' },

      /* ---- 3. Xin SĐT, lên đơn tự động ---- */
      { feature: 3 },
      { ai: 'Dạ chị cho em xin **tên, SĐT và địa chỉ** nhận hàng nha ạ.', kw: 0 },
      { kh: 'Thảo – 0938 615 207\nP.1208 tòa B, 12 Nguyễn Văn Bảo, P.4, Gò Vấp' },
      { card: {
          tag: '✓ Tin xác nhận đơn',
          intro: 'Dạ chị kiểm tra lại đơn giúp em nhé:',
          lines: ['1 **túi đeo chéo da mềm · màu kem**', 'Đổi màu trong 7 ngày nếu chưa ưng', 'Tổng cộng: **390.000đ** · freeship · nhận hàng rồi trả tiền', 'Giao tới: Thảo, P.1208 tòa B, 12 Nguyễn Văn Bảo, Gò Vấp'],
          button: 'Quản lý đơn hàng',
        }, kw: 1, hold: 4200 },
      { kh: 'Ok em' },
      { card: {
          tag: '✓ Đã tạo đơn & gửi vận chuyển', ok: true,
          lines: ['Mã đơn: **#LA23116**', 'Mã vận đơn: **VD58316402**', 'Dự kiến giao: **27/11**'],
        }, kw: 2, hold: 3200 },

      /* ---- 4. Chăm sóc sau bán ---- */
      { feature: 4 },
      { sep: '— Ngày 29/11 · 2 ngày sau khi nhận —' },
      { ai: 'Chị Thảo ơi, túi đeo có ưng không ạ? Chị nhớ **lau bằng khăn mềm**, **không phơi nắng gắt**, cất túi nhét giấy cho giữ dáng là túi bền lâu nha 👜', meta: '💛 Tự động · Chăm sóc sau bán', kw: 0 },
      { kh: 'Đeo đi làm ai cũng hỏi mua ở đâu e ơi 😍' },
      { sep: '— 1 tuần sau —' },
      { ai: 'Bên em đang **giảm 15%** mấy món khách hay mua kèm túi, chị xem thử nha:', kw: 1 },
      { catalog: [
          { name: 'Ví cầm tay', color: 'màu kem', price: '161.000đ', old: '189.000đ', tag: 'Bán chạy', art: 'vi-kem' },
          { name: 'Khăn lụa buộc quai', color: 'nhiều màu', price: '101.000đ', old: '119.000đ', tag: '-15%', art: 'khan' },
          { name: 'Kính mát nữ', color: 'gọng đen', price: '135.000đ', old: '159.000đ', tag: 'Mới về', art: 'kinh' },
        ], hold: 4000 },
      { kh: 'Lấy c thêm cái ví màu kem cho đồng bộ nha', kw: 2, hold: 1500 },
    ],

    deck: {
      demoDoc: {
        khach: 'Phương Thảo',
        sanPham: 'Túi đeo chéo da mềm',
        binhLuan: 'Xin giá túi màu kem',
        post: {
          tieuDe: 'TÚI ĐEO CHÉO DA MỀM – CHỈ 390K 👜',
          dong: ['Đựng vừa điện thoại 6.7 inch + ví', 'Da PU mềm, chống bong tróc', '3 mẫu màu kem, đen, nâu', 'Freeship đơn từ 300k'],
          anh: ['tui-kem', 'tui-kem-2', 'tui-den', 'tui-nau'],
        },
      },
      dashboard: [
        { ten: 'Túi đeo chéo, <span class="grad">túi đi làm</span>', den: '21/07/2026', khach: 26, tyLe: 0.62 },
        { ten: 'Ví nữ, <span class="grad">ví cầm tay</span>', den: '18/08/2026', khach: 18, tyLe: 0.58 },
        { ten: 'Khăn lụa, <span class="grad">phụ kiện</span>', den: '26/09/2026', khach: 14, tyLe: 0.6 },
      ],
      chatbot: {
        chat: [
          { ref: { img: L(IMG['tui-kem']), ten: 'Túi đeo chéo da mềm · màu kem' } },
          { kh: 'Túi này đựng vừa đt 6.7 inch với ví k e? Da có bong k?' },
          { ai: 'Dạ đựng vừa **điện thoại 6.7 inch + ví + son** ạ. Da PU mềm **chống bong tróc**, giá **390.000đ**.', meta: '⚡ Preny AI trả lời sau 2 giây' },
          { kh: 'Màu kem còn k e?' },
          { ai: 'Dạ màu kem còn ạ, freeship, đổi màu trong 7 ngày. Chị gửi em SĐT, địa chỉ nha.' },
          { kh: 'Thảo, 0938 615 207, P.1208 tòa B, 12 Nguyễn Văn Bảo, Gò Vấp' },
          { ai: 'Dạ em lên đơn túi màu kem cho chị liền ạ ⚡' },
          { don: true },
          { ok: true },
        ],
        don: {
          ten: 'Thảo', sdt: '0938 615 207', diaChi: 'P.1208 tòa B, 12 Nguyễn Văn Bảo, P.4, Gò Vấp', ma: '#LA23116', phi: 'miễn phí',
          sp: [{ img: L(IMG['tui-kem']), ten: 'Túi đeo chéo da mềm · màu kem', sl: 1, dv: 'cái', gia: 390000 }],
        },
        anh: {
          img: L(IMG['tui-hong']),
          kh: 'Mẫu như hình này có không shop?',
          ai: 'Dạ mẫu chị gửi là **túi xách tay quai ngắn màu hồng đất**, bên em có giá **459.000đ** ạ. Chị lấy kèm túi đeo chéo em freeship luôn nha.',
        },
      },
      afterSale: {
        loi: 'Cảm ơn chị Thảo đã mua túi ở Lam Anh 💛 Nhiều khách lấy thêm mấy món này dùng kèm ạ:',
        sp: [
          { img: L(IMG['vi-kem']), ten: 'Ví cầm tay màu kem', gia: 189000 },
          { img: L(IMG['khan']), ten: 'Khăn lụa buộc quai túi', gia: 119000 },
          { img: L(IMG['kinh']), ten: 'Kính mát nữ gọng đen', gia: 159000 },
          { img: L(IMG['tote']), ten: 'Túi tote da đi làm', gia: 349000, cu: 399000 },
          { img: L(IMG['tui-hong']), ten: 'Túi xách tay quai ngắn', gia: 459000 },
        ],
        khach: 'Lấy thêm c khăn lụa buộc quai nha',
        pill: '🛍 Khách mua thêm ngay: đơn tăng từ 390.000đ lên 509.000đ',
        fmm: {
          chao: 'Chào chị Thảo 👋 Túi Xách Lam Anh vừa về mẫu túi đi làm mới, gửi chị xem trước nha!',
          img: L(IMG['ke-tui']), nhan: 'HÀNG MỚI VỀ',
          ten: 'Bộ sưu tập túi đi làm mùa Tết', mo: 'Khách cũ giảm 15%, freeship.', nut: 'Xem ngay',
        },
        zbs: {
          ten: 'Tặng chị Thảo voucher 30.000đ',
          mo: 'Cảm ơn chị đã mua hàng tại Túi Xách Lam Anh. Gửi chị ưu đãi cho lần mua tiếp theo:',
          dong: [['Mã voucher', '**LAMANH30**'], ['Ưu đãi', 'Giảm 30.000đ đơn từ 300.000đ'], ['Hạn dùng', '31/01/2027']],
          nut: 'Dùng voucher ngay',
        },
      },
      bamDuoi: {
        cmpDung: ['Khách nhắn xong im → nhắc đúng mẫu túi khách đã xem (thẻ <b>#TuiDeoCheo</b> từ quảng cáo)',
                  'Báo giá xong im → bám đuổi theo giá: freeship, đổi màu 7 ngày (thẻ <b>#HoiGia</b>)',
                  'Đúng nhu cầu, đúng lý do im → khách quay lại mua'],
        hoi: 'Túi đeo chéo giá sao shop?',
        traLoiThuong: 'Dạ 390.000đ ạ.',
        refImg: L(IMG['tui-kem']), refTen: 'Túi đeo chéo da mềm · màu kem',
        vd1: {
          kh: 'Túi này đựng vừa điện thoại không shop?',
          ai: 'Dạ đựng vừa điện thoại 6.7 inch + ví ạ. Chị thích màu kem, đen hay nâu ạ?',
          tag: '🏷 #TuiDeoCheo', tagNote: 'thẻ từ quảng cáo · khách im 1 ngày',
          nhac: 'Chị ơi, em gửi chị <b>ảnh thật túi bỏ vừa điện thoại và ví</b>, đeo đi làm gọn lắm ạ. Chị báo em màu chị thích để em giữ hàng nha 😊',
          dung: '🎯 Theo thẻ #TuiDeoCheo: nhắc đúng mẫu túi khách xem',
          khach: 'C lấy màu kem nha',
        },
        vd2: {
          kh: 'Túi đeo chéo bao nhiêu vậy shop?',
          ai: 'Dạ túi đeo chéo da mềm <b>390.000đ</b>, freeship đơn từ 300k ạ.',
          tag: '🏷 #HoiGia', tagNote: 'báo giá xong khách im 1 ngày',
          nhac: 'Chị ơi, túi chị hỏi giá hôm qua em vẫn giữ ạ, <b>freeship</b>, không ưng màu <b>đổi trong 7 ngày</b>. Em lên đơn cho chị nha?',
          dung: '🎯 Theo thẻ #HoiGia: bám đuổi theo giá, đúng lý do khách im',
          khach: 'Ok lấy c 1 cái nha e',
        },
      },
      binhLuan: {
        post: 'Túi đeo chéo <b>da mềm</b> chỉ 390k · đựng vừa điện thoại 6.7 inch, 3 mẫu màu kem, đen, nâu 👜',
        img: L(IMG['tui-kem']),
        kav: 'NT', kten: 'Ngọc Trâm', hoi: 'Màu đen còn không shop? Đeo đi tiệc được không?',
        traLoi: 'Dạ chào chị Trâm! Shop vừa nhắn tin tư vấn chi tiết cho chị, chị xem tin nhắn nhé 💬',
        act2: 'Nhắn tin riêng gửi mẫu màu đen',
        nhan: 'Chào chị Trâm! Túi đeo chéo <b>màu đen</b> bên em còn hàng ạ, khóa kéo kim loại sang, đeo đi làm hay đi tiệc đều hợp. Giá <b>390.000đ</b>, freeship. Chị gửi em SĐT, địa chỉ để em lên đơn nha?',
        sp: { ten: 'Túi đeo chéo da mềm · màu đen', gia: '390.000đ', img: L(IMG['tui-den']) },
        khach: 'Lấy c 1 cái màu đen nha',
      },
      duLieu: {
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: da bò thật, đi mưa thoải mái', 'Khách đổi trả, shop mất uy tín'],
        hoi: 'Túi này da bò thật đúng k em? Đi mưa ướt được k?',
        aiSai: 'Dạ đúng ạ! Túi <b>da bò thật 100%</b>, <b>đi mưa thoải mái</b> chị nhé 🥰',
        thucTe: '⚠ Thực tế: túi làm từ da PU mềm; để ngấm nước lâu làm da nhanh hỏng',
        gian: 'Túi đi mưa 1 lần là phồng da! Sao nói da bò thật, đi mưa được? 😠',
        cho: 'Dạ chị chờ em một chút để em kiểm tra chính xác thông tin sản phẩm cho chị nhé!',
        nv: 'Nhân viên Linh · người thật',
        nvTraLoi: 'Dạ em xin lỗi chị ạ. Túi làm từ da PU mềm, không phải da bò, và không nên để ngấm nước. Túi còn trong 7 ngày nên em đổi túi mới cho chị liền nhé!',
      },
    },
  };
})();
