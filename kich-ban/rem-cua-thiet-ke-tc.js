/* Kịch bản: RÈM CỬA THIẾT KẾ — BẢN TRÌNH CHIẾU, nhóm CÂN NHẮC NHIỀU. Làm 23/11/2026 theo người dùng:
   "Rèm cửa (thiết kế, giá cao, cần lấy nhiều thông tin)".
   "AI chốt đơn = lấy đủ thông tin (loại nhà, số cửa, kích thước gần đúng, phong cách, cản sáng, ngân sách, địa chỉ) + tên + SĐT
   + hẹn khảo sát đo đạc tận nhà miễn phí (mang mẫu vải tới)". Gửi sự kiện Lead (không gửi Purchase khi chưa ký hợp đồng).
   Từ 23/11/2026 bỏ demo chat vào thẳng (&demo): file này chỉ có phần deck cho Bài 1, không có steps/features.
   Khớp Bài 2 video ngang (demo/bai2/kich-ban-rem-cua-thiet-ke-tc.js): chị Vân vừa nhận nhà phố 4 tầng ở Thủ Đức, 11 cửa,
   phòng khách cửa kính lớn, muốn hiện đại sang, phòng ngủ cản sáng, ngân sách khoảng 60 triệu, sợ đo sai, sợ màu ngoài đời khác ảnh
   → AI báo giá tham khảo theo m², hỏi lần lượt từng thông tin, đo laser, mang 120+ mẫu vải, ảnh phối màu 3D trước khi may,
   KHÔNG chốt giá cuối trong chat → bám đuổi 5 tin → hẹn khảo sát 9h CN 29/11 → chuyển chị Uyên · Chuyên viên thiết kế.
   Không có tin nhắc trước giờ khảo sát, không có tin vận chuyển.
   Tên đơn vị, giá, khách, SĐT, địa chỉ, feedback, nhân viên: dữ liệu minh họa. Ảnh: Unsplash (ảnh thật, không phải công trình của khách). */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'rem-phong-khach': '1704040686510-b747ff423ebb', // phòng khách cửa kính lớn, rèm vải (ảnh quảng cáo)
    'rem-cao-cap': '1778731660454-38133bfb3a3d',     // cửa sổ lớn, rèm vải nâu
    'rem-co-dien': '1688506900123-0ae2c0b063a7',     // rèm hoa văn tân cổ điển
    'rem-2-lop': '1763939919676-97187d9f4db0',       // rèm 2 lớp vải + voan
    'rem-voan': '1528822855841-e8bf3134cdc9',        // rèm voan cửa kính lớn
    'rem-phong-ngu': '1672122816795-49ff5cbc75e8',   // phòng ngủ rèm cản sáng
    'rem-voan-2': '1759328257280-28bdb3050be3',      // voan và rèm vải phòng ngủ
    'rem-cau-vong': '1643949914872-317d6047f107',    // rèm cầu vồng phòng khách
    'do-dac': '1716698288217-2a2b6c042a2c',          // thước đo
    'ban-ve': '1603901622056-0a5bee231395',          // bản vẽ, dụng cụ thiết kế
    'vai-mau': '1705412877691-70f6913aaa1e',         // mẫu vải
    'mau-vai-2': '1781888699751-15f2b304693c',       // tay chọn mẫu vải
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    badge: 'AI CHATBOT · RÈM CỬA THIẾT KẾ',
    shop: { name: 'Rèm Thiết Kế Lumière', initials: 'LM' },
    headline: { pre: 'AI chatbot tư vấn rèm cửa và', em: 'hẹn khảo sát tận nhà' },
    sub: 'Hỏi lần lượt loại nhà, số cửa, phong cách, ngân sách; không chốt giá cuối trong chat; xin SĐT, giữ lịch khảo sát đo đạc rồi chuyển ngay cho chuyên viên.',
    images: Object.fromEntries(Object.entries(IMG).map(([k, id]) => [k, U(id)])),

    /* ===== Nội dung slide trình chiếu (trinh-chieu.html). Slide thống kê dùng số minh họa (deck.dashboard). ===== */
    deck: {
      demoDoc: {
        khach: 'Khánh Vân',
        sanPham: 'Rèm vải 2 lớp · nhà phố',
        ngay: '23/11/2026',
        gio: '20:12',
        binhLuan: [
          { ten: 'Đỗ Hoàng Yến', noiDung: 'Cửa kính 5m làm rèm được không shop?', traLoi: 'Dạ bên em vừa nhắn tin tư vấn chi tiết cho chị, chị xem inbox nha!' },
        ],
        post: {
          tieuDe: 'RÈM CỬA THIẾT KẾ · KHẢO SÁT TẬN NHÀ MIỄN PHÍ ✨',
          dong: ['Rèm vải 2 lớp từ 650.000đ/m²', 'Đo bằng máy laser', 'Mang 120+ mẫu vải tới nhà', 'Ảnh phối màu 3D trước khi may'],
          anh: ['rem-phong-khach', 'rem-2-lop', 'rem-phong-ngu', 'vai-mau'],
        },
        quangCao: {
          tieuDe: 'RÈM CỬA THIẾT KẾ · KHẢO SÁT TẬN NHÀ MIỄN PHÍ',
          mo: 'Rèm vải 2 lớp từ 650.000đ/m², đo bằng máy laser, mang 120+ mẫu vải tới nhà, gửi ảnh phối màu 3D trước khi may.',
          anh: 'rem-phong-khach', nhan: 'MESSENGER', dong: 'Tư vấn 24/7 · Giữ lịch khảo sát', nut: 'Gửi tin nhắn',
        },
        ket: {
          tieuDe: 'PRENY AI – TƯ VẤN RÈM CỬA, HẸN KHẢO SÁT TẬN NHÀ',
          y: ['Trả lời ngay 24/7', 'Hỏi lần lượt từng thông tin', 'Không chốt giá cuối trong chat', 'Lấy SĐT, giữ lịch khảo sát',
              'Bám đuổi 5 tin trong 7 ngày', 'Báo ngay chuyên viên thiết kế', 'Chăm sóc sau khảo sát qua Zalo', 'Meta CAPI Lead'],
        },
      },
      dashboard: [
        { ten: 'Rèm vải <span class="grad">2 lớp cản sáng</span>', den: '20/07/2026', khach: 19, tyLe: 0.56 },
        { ten: 'Rèm voan <span class="grad">cửa kính lớn</span>', den: '24/08/2026', khach: 13, tyLe: 0.54 },
        { ten: 'Rèm <span class="grad">motor tự động</span>', den: '29/09/2026', khach: 8, tyLe: 0.55 },
      ],
      chatbot: {
        y: [
          ['Trả lời ngay tức thì, 24/7', 'Khách nhắn lúc nào, AI trả lời sau 2 giây'],
          ['Hỏi lần lượt từng thông tin', 'Loại nhà, số cửa, phong cách, ngân sách'],
          ['Chốt đơn = lấy SĐT + hẹn khảo sát', 'Giữ lịch đo đạc tận nhà, chuyển chuyên viên'],
          ['Hiểu hình ảnh khách gửi', 'Khách gửi ảnh mẫu rèm, AI nhận ra kiểu rèm'],
        ],
        chat: [
          { ref: { img: L(IMG['rem-phong-khach']), ten: 'Rèm vải 2 lớp · khảo sát tận nhà' } },
          { kh: 'nhà phố 4 tầng 11 cửa, làm rèm cả nhà giá sao e?' },
          {
            ai: 'Dạ rèm vải 2 lớp bên em tham khảo **từ 650.000đ/m²** ạ. Giá chính xác sau khi **đo thực tế**, vì mỗi cửa một kích thước. Chị thích phong cách nào, phòng ngủ có cần cản sáng không ạ? ✨',
            meta: '⚡ Preny AI trả lời sau 2 giây',
          },
          { kh: 'hiện đại tông kem xám, ngủ cản sáng. sợ đo sai, màu ngoài đời khác ảnh' },
          {
            ai: 'Dạ bên em đo bằng **máy laser**, mang **120+ mẫu vải** tới để chị xem dưới ánh sáng thật nhà mình, gửi **ảnh phối màu 3D** trước khi may ạ. Chị cho em xin **tên, SĐT** để giữ lịch khảo sát nha.',
          },
          { kh: 'Vân - 0903 726 418. sáng CN 29/11 qua đc ko e?' },
          { ai: 'Dạ được ạ! Em giữ lịch khảo sát **9h sáng CN 29/11** cho chị, chị Uyên bên thiết kế gọi xác nhận liền nha ⚡' },
          { don: true },
          { ok: true },
        ],
        lead: {
          ten: 'Chị Khánh Vân',
          sdt: '0903 726 418',
          nhuCau: 'Nhà phố 4 tầng mới nhận ở Thủ Đức · **11 cửa**, phòng khách cửa kính lớn · hiện đại tông kem xám · phòng ngủ cản sáng · ngân sách **khoảng 60 triệu**',
          the: [['FB Ads · Rèm thiết kế', 'ng'], ['#remthietke', 'qt'], ['#CanSang', 'qt'], ['Đã cho SĐT', 'ht']],
          lichNhan: 'Lịch khảo sát',
          lich: ['Tại nhà khách, Thủ Đức', '09:00 · Chủ nhật 29/11'],
          sale: 'Chị Uyên · Chuyên viên thiết kế',
          nut: 'Chuyển cho chuyên viên',
          xong: 'Đã chuyển cho chị Uyên',
          okTieuDe: 'Đã giữ lịch khảo sát 29/11',
        },
        anh: {
          img: L(IMG['rem-co-dien']),
          nhan: 'Khách gửi ảnh mẫu rèm trên mạng',
          kh: 'Làm được kiểu rèm như hình này ko e?',
          ai: 'Ảnh chị gửi là **rèm tân cổ điển**, vải gấm hoa văn, có rủ và dây buộc tua rua ạ. Bên em làm được, nhưng nhà chị hiện đại tông kem xám thì em gợi ý giữ dáng rủ, đổi sang **vải trơn ánh kim**. Khi khảo sát em mang mẫu để chị so trực tiếp nha.',
          pill: '🔍 AI nhìn ảnh, nhận ra kiểu rèm và gợi ý hợp nhà khách',
        },
      },
      afterSale: {
        y1: 'AI gửi tiếp 5 sản phẩm cho khách vừa ký hợp đồng',
        y2: 'Mẫu vải mới, ưu đãi khách giới thiệu',
        gio: 'Chuyên viên vừa chốt hợp đồng rèm cả nhà cho chị Vân',
        don: { ma: '#LM2911', phi: 'miễn phí lắp đặt', sp: [{ ten: 'Rèm cả nhà 11 cửa · vải 2 lớp + voan', sl: 1, dv: 'gói', gia: 58600000 }] },
        loi: 'Cảm ơn chị Vân đã chọn Lumière ✨ Chủ nhà bên em hay làm thêm mấy món này cho đồng bộ ạ:',
        sp: [
          { img: L(IMG['rem-cao-cap']), ten: 'Motor rèm tự động phòng khách', gia: 6900000, nut: 'Thêm vào' },
          { img: L(IMG['rem-cau-vong']), ten: 'Rèm cầu vồng phòng làm việc', gia: 2400000, nut: 'Xem thêm' },
          { img: L(IMG['vai-mau']), ten: 'Gối sofa may đồng bộ vải rèm (bộ 4)', gia: 1600000, nut: 'Thêm vào' },
          { img: L(IMG['rem-voan-2']), ten: 'Thêm lớp voan cho phòng ngủ', gia: 1800000, nut: 'Xem thêm' },
          { img: L(IMG['rem-2-lop']), ten: 'Vệ sinh rèm tận nhà (gói 1 năm)', gia: 1200000, nut: 'Đăng ký' },
        ],
        khach: 'Lấy thêm c motor cho phòng khách nha e',
        pill: '🛍 Khách thêm ngay: hợp đồng tăng từ 58.600.000đ lên 65.500.000đ',
        fmm: {
          sep: '1 tháng sau · tin Facebook FMM',
          chao: 'Chào chị Vân 👋 Lumière vừa về bộ sưu tập vải nhung cho mùa Tết, gửi chị xem trước để giới thiệu người quen nha!',
          img: L(IMG['mau-vai-2']),
          nhan: 'MẪU MỚI',
          ten: 'Bộ sưu tập vải nhung Tết',
          mo: 'Khách cũ giới thiệu được tặng gói vệ sinh rèm 1 năm.',
          nut: 'Xem mẫu vải',
        },
        zbs: {
          ten: 'Ưu đãi giới thiệu cho chị Vân',
          mo: 'Cảm ơn chị đã tin chọn Lumière. Chị giới thiệu người quen làm rèm sẽ nhận:',
          dong: [
            ['Mã giới thiệu', '**LUMIERE2026**'],
            ['Ưu đãi', 'Người quen giảm 5%, chị nhận gói vệ sinh rèm 1 năm'],
            ['Hạn dùng', '28/02/2027'],
          ],
          nut: 'Gửi cho người quen',
        },
      },
      tieuDe6: 'Hệ thống AI chatbot giúp tăng<br><span class="grad">tỷ lệ hẹn khảo sát</span>',
      tinhNang: [
        ['AI tư vấn, chủ động mời khảo sát', 'Lấy đủ thông tin, SĐT, giữ lịch đo đạc'],
        ['Bám đuổi khách cân nhắc lâu', 'Gửi ảnh công trình thật, chủ nhà đã làm'],
        ['AI chăm sóc sau khảo sát', 'Gửi ảnh phối màu, báo giá, mẫu vải mới'],
        ['Bộ công cụ Remarketing FMM và ZBS', 'Khai thác lại dữ liệu khách cũ'],
        ['Gửi sự kiện Lead qua Meta CAPI', 'Hỗ trợ tối ưu quảng cáo Facebook'],
      ],

      chotDon: {
        nganh: 'rèm cửa thiết kế',
        nguoi: 'Chuyên viên thiết kế',
        chotLa: 'AI chốt đơn = lấy SĐT + hẹn khảo sát',
        buoc: [
          { t: 'Chạy quảng cáo', d: 'Thu hút người đang làm nhà', icon: 'megaphone', own: 'Đơn vị chạy quảng cáo', mock: 'ad', img: L(IMG['rem-phong-khach']), text: 'Rèm thiết kế, khảo sát miễn phí ✨', btn: 'Gửi tin nhắn' },
          { t: 'Bắt đầu chat', d: 'Hỏi loại nhà, số cửa, phong cách', icon: 'chat', ai: true, mock: 'chat',
            msgs: [['kh', 'Rèm cả nhà giá sao em?'], ['ai', 'Dạ từ 650.000đ/m² ạ. Nhà mình khoảng bao nhiêu cửa ạ? ✨']] },
          { t: 'Mời khảo sát', d: 'Lấy SĐT, giữ lịch đo đạc', icon: 'phone', ai: true, chot: true, mock: 'form', fields: ['Chị Vân · 11 cửa, ~60 triệu', '0903 726 418'], ok: 'Đã giữ lịch 29/11' },
          { t: 'Chuyên viên gọi', d: 'Xác nhận giờ, địa chỉ', icon: 'call', mock: 'lich', ten: 'Khảo sát rèm nhà phố', gio: '09:00 · Chủ nhật 29/11', ok: 'Đã xác nhận lịch' },
          { t: 'Khảo sát tận nhà', d: 'Đo laser, chọn mẫu vải', icon: 'users', mock: 'img', img: L(IMG['mau-vai-2']), cap: 'Khách chọn mẫu vải tại nhà' },
          { t: 'Chốt hợp đồng', d: 'Ảnh phối 3D, báo giá, ký', icon: 'check', mock: 'img', img: L(IMG['ban-ve']), cap: '✓ Khách ký hợp đồng rèm cả nhà' },
        ],
        vong: { t: 'Chăm sóc sau khảo sát & Remarketing', d: 'Gửi ảnh phối màu, báo giá, mẫu vải mới, ưu đãi khách giới thiệu' },
      },

      bamDuoi: {
        nhan: 'Vì sao bám đuổi của Preny đặc biệt', shopB: 'Đơn vị B',
        cmpSai: ['Khách im → gửi “Chị còn quan tâm rèm cửa không ạ?”', 'Không biết nhà khách bao nhiêu cửa, phong cách gì', 'Khách thấy phiền, bỏ qua tin nhắn'],
        cmpDung: ['Khách nhắn xong im → nhắc đúng nỗi lo của khách (thẻ <b>#remthietke</b> từ quảng cáo)',
                  'Báo giá xong im → bám đuổi theo giá: khảo sát miễn phí, ảnh 3D trước khi may (thẻ <b>#baogia</b>)',
                  'Đúng nhu cầu, đúng lý do im → khách quay lại giữ lịch khảo sát'],
        hoi: 'Làm rèm cả nhà giá sao em?',
        traLoiThuong: 'Dạ từ 650.000đ/m² ạ.',
        nhacChung: 'Chị còn quan tâm rèm cửa không ạ? 😊',
        refImg: L(IMG['rem-phong-khach']), refTen: 'Rèm vải 2 lớp · khảo sát tận nhà',
        vd1: {
          ten: 'Khách nhắn xong im',
          kh: 'Sợ đo sai với màu ngoài đời khác ảnh lắm em',
          ai: 'Dạ bên em đo bằng máy laser, mang mẫu vải tới tận nhà ạ. Nhà mình bao nhiêu cửa ạ?',
          tag: '🏷 #remthietke', tagNote: 'thẻ từ quảng cáo · khách im 1 ngày',
          nhac: 'Chị Vân ơi, em gửi chị <b>chia sẻ của một chủ nhà</b> cũng sợ màu khác ảnh, xem ảnh phối 3D rồi mới may ✨ Cuối tuần bên em <b>khảo sát miễn phí</b> ạ.',
          dung: '🎯 Theo thẻ #remthietke: nhắc đúng nỗi lo đo sai, lệch màu',
          khach: 'CN này qua khảo sát được ko e?',
        },
        vd2: {
          ten: 'Báo giá xong im',
          kh: 'Rèm vải 2 lớp bao nhiêu em?',
          ai: 'Dạ rèm vải 2 lớp <b>từ 650.000đ/m²</b> ạ.',
          tag: '🏷 #baogia', tagNote: 'báo giá xong khách im 2 ngày',
          nhac: 'Chị ơi, bên em <b>khảo sát, đo laser miễn phí</b>, gửi <b>ảnh phối màu 3D</b> để chị duyệt rồi mới may ạ. Em giữ lịch khảo sát CN cho chị nha?',
          dung: '🎯 Theo thẻ #baogia: bám đuổi theo giá, đúng lý do khách im',
          khach: 'Ok giữ giúp c sáng CN',
        },
      },

      binhLuan: {
        post: '<b>Rèm cửa thiết kế</b> vải 2 lớp từ 650.000đ/m² · đo laser, mang 120+ mẫu vải tới nhà ✨',
        img: L(IMG['rem-voan']),
        kav: 'HY', kten: 'Đỗ Hoàng Yến', hoi: 'Cửa kính 5m làm rèm được không shop? Giá sao?',
        traLoi: 'Dạ chào chị Yến! Bên em vừa nhắn tin tư vấn chi tiết cho chị, chị xem tin nhắn nhé 💬',
        act2: 'Nhắn riêng, gửi mẫu rèm cửa kính lớn',
        nhan: 'Chào chị Yến! Cửa kính 5m bên em làm <b>rèm voan + vải 2 lớp</b> trên ray êm, tham khảo <b>từ 650.000đ/m²</b> ạ. Em gửi chị ảnh công trình cửa kính lớn. Chị cho em xin SĐT để giữ lịch khảo sát nha!',
        sp: { ten: 'Rèm voan cửa kính lớn', gia: 'từ 650.000đ/m²', img: L(IMG['rem-voan']) },
        khach: 'Số mình 0937 215 864 nhé',
      },

      duLieu: {
        shopA: 'Đơn vị A',
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: cản sáng 100%, trọn gói 30 triệu', 'Khách khiếu nại, đơn vị mất uy tín'],
        dung: ['Chỉ trả lời theo dữ liệu đơn vị cung cấp', 'Không chắc chắn → xin khách chờ, AI tạm dừng', 'Báo ngay chuyên viên vào trả lời'],
        hoi: 'Rèm này cản sáng 100% không em? Cả nhà 11 cửa trọn gói bao nhiêu?',
        aiSai: 'Dạ <b>cản sáng 100%</b> ạ, cả nhà <b>trọn gói 30 triệu</b> luôn chị 🥰',
        thucTe: '⚠ Thực tế: độ cản sáng tùy mẫu vải; giá theo kích thước đo thực tế từng cửa',
        gian: 'Báo giá thực tế 58 triệu! Sao hôm trước nói trọn gói 30 triệu? 😠',
        cho: 'Dạ chị chờ em một chút để em kiểm tra chính xác thông tin cho mình nhé!',
        nv: 'Chị Uyên · Chuyên viên thiết kế · người thật',
        nvTraLoi: 'Dạ em xin lỗi chị ạ. Giá rèm tính theo kích thước đo thực tế từng cửa, vải cản sáng 95–99% tùy mẫu. Em gửi chị 2 phương án vải trong ngân sách 60 triệu để chị chọn nhé!',
      },

      tags: {
        rows: [
          { ten: 'Lê Khánh Vân', av: 'KV', kenh: 'fb', msg: 'Làm rèm cả nhà phố giá sao em?', gio: '20:13',
            tags: [['FB Ads · Rèm thiết kế', 'ng'], ['#remthietke', 'qt'], ['#CanSang', 'qt'], ['Hẹn khảo sát 29/11', 'ht']] },
          { ten: 'Đỗ Hoàng Yến', av: 'HY', kenh: 'fb', msg: 'Cửa kính 5m làm rèm được không?', gio: '10:12',
            tags: [['Bình luận bài viết', 'ng'], ['#cuakinhlon', 'qt'], ['Đã cho SĐT', 'ht'], ['Gọi lần 1 ✓', 'sa']] },
          { ten: 'Ngô Minh Trí', av: 'MT', kenh: 'tiktok', msg: 'Motor rèm tự động giá bao nhiêu?', gio: '16:30',
            tags: [['TikTok · Video rèm motor', 'ng'], ['#motor', 'qt'], ['Đã cho SĐT', 'ht'], ['Gọi lần 2 · không bắt máy', 'sa']] },
          { ten: 'Phan Bích Hà', av: 'BH', kenh: 'zalo', msg: 'Chung cư 3 cửa làm được không?', gio: '09:05',
            tags: [['Zalo OA', 'ng'], ['#chungcu', 'qt'], ['Đang bám đuổi', 'ht']] },
          { ten: 'Vũ Đức Lâm', av: 'ĐL', kenh: 'zalo', msg: 'Giới thiệu chị gái làm rèm biệt thự', gio: 'Hôm qua',
            tags: [['Zalo · Khách cũ', 'ng'], ['#gioithieu', 'qt'], ['Đã ký', 'ht'], ['Đã kết nối Zalo', 'za']] },
        ],
        chanDung: {
          ten: 'Lê Khánh Vân', av: 'KV', kenh: 'fb', sub: 'Facebook Messenger · 0903 726 418',
          nhom: [
            ['Nguồn khách', [['Facebook Ads', 'ng'], ['Bài: Rèm thiết kế', 'ng']]],
            ['Quan tâm', [['#remthietke', 'qt'], ['#CanSang', 'qt']]],
            ['Hành trình', [['Nhắn tin 23/11', 'ht'], ['Cho SĐT 28/11', 'ht'], ['Hẹn khảo sát 29/11', 'ht']]],
            ['Chuyên viên gọi', [['Chị Uyên · lần 1 ✓', 'sa']]],
            ['Kết nối', [['Đã kết nối Zalo', 'za'], ['Khách mới · L1', 'lv']]],
          ],
          ghiChu: 'Vừa nhận nhà phố 4 tầng ở Thủ Đức, 11 cửa, phòng khách cửa kính lớn khoảng 4m ngang. Thích hiện đại tông kem xám, phòng ngủ cản sáng, ngân sách khoảng 60 triệu. Sợ đo sai, sợ màu khác ảnh. Hẹn khảo sát 9h CN 29/11.',
        },
      },

      chotLai: [
        ['KHÁCH HÀNG', ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến']],
        ['AI CHATBOT', ['Phản hồi nhanh tức thì', 'Hỏi lần lượt từng thông tin', 'Không chốt giá cuối trong chat', 'Lấy SĐT, hẹn khảo sát']],
        ['BÁM ĐUỔI', ['Gửi 5 tin nhắn trong 7 ngày: công trình thật, chủ nhà đã làm, quy trình, mẫu vải']],
        ['KHẢO SÁT', ['Chuyên viên đo laser tận nhà, mang mẫu vải', 'Ảnh phối 3D, báo giá, ký hợp đồng']],
        ['GIỚI THIỆU', ['Gửi mẫu vải mới, ưu đãi khách giới thiệu người quen qua FB và Zalo']],
      ],
    },
  };
})();
