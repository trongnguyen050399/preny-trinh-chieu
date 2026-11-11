/* Kịch bản: THẨM MỸ / SPA — BẢN TRÌNH CHIẾU (nhóm CÂN NHẮC NHIỀU). Khung ngang 16:9.
   Video MP4 cũ vẫn dùng kich-ban/tham-my-spa.js; file này cho phần demo chat + nội dung slide (deck) khi thuyết trình.
   Hai tình huống:
     1. Chị Linh từ quảng cáo hỏi trị mụn → AI khai thác tình trạng, xin hình → xin SĐT → mời soi da miễn phí, chốt lịch
        → nhắc lịch → (Meta CAPI ở cột trái) → chăm sóc sau buổi làm, nhắc buổi tiếp theo → (Remarketing ở cột trái).
     2. Xóa chat → chị Vy hỏi giá, cho SĐT rồi "để tham khảo thêm" → SOFT FOLLOW-UP vài ngày 1 tin:
        giới thiệu cơ sở + công nghệ, feedback khách thật, giải thích quy trình + ưu đãi → chị Vy đặt lịch làm thử.
   Tên spa, khách, giá, SĐT: dữ liệu minh họa. Ảnh: Unsplash (ảnh thật). Không có ảnh before–after thật nên phần
   kết quả khách dùng thẻ chữ; khi spa gửi ảnh before–after thật thì thay vào. */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';   // ảnh đã tải về máy (tai-offline.py) cho các slide

  const IMG = {
    'da-mun': '1660646463659-df77c1580723',
    'cham-soc-da': '1552693673-1bf958298935',
    'phong-dv': '1787651343620-8d5303006ecb',
    'may-soi-da': '1689103722266-1f2f837145e7',
    'massage-mat': '1706795033728-9232ef548a16',
    'tu-van': '1785861001619-b263ebd4e615',
    'dap-mat-na': '1570172619644-dfd03ed5d881',
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    badge: 'AI CHATBOT · THẨM MỸ & SPA',
    shop: { name: 'An Nhiên Spa', initials: 'AN' },
    headline: { pre: 'AI chatbot tư vấn, lấy SĐT và', em: 'chốt lịch hẹn ngành Spa' },
    sub: 'Lọc khách, mời soi da, nhắc lịch và nuôi khách cân nhắc lâu bằng soft follow-up.',
    cta: 'Dùng thử miễn phí tại **preny.ai**\nHotline **0389 647 778**',
    speed: 1.13,
    timing: { read0: 1000, readPerChar: 28, readMax: 4500, type0: 800, typePerChar: 3, typeMax: 1500, fastType: 500,
              featureHold: 1400, sepHold: 1100, cardHold: 4000, introCard: 250 },

    images: Object.fromEntries(Object.entries(IMG).map(([k, id]) => [k, U(id)])),

    features: [
      { title: 'AI tư vấn và lọc khách 24/7', desc: 'Trả lời ngay, không bỏ lỡ khách nào.',
        kws: ['Trả lời ngay giá, dịch vụ', 'Xin hình, hỏi tình trạng da, bị bao lâu', 'Hỏi đã điều trị chưa, mong muốn gì'] },
      { title: 'AI lấy SĐT và chốt lịch hẹn', desc: 'Lead nóng chuyển ngay cho chuyên viên.',
        kws: ['Xin SĐT để chuyên viên tư vấn kỹ', 'Mời ghé soi da miễn phí', 'Gửi xác nhận lịch hẹn', 'Tự nhắc lịch trước giờ hẹn'] },
      { title: 'Soft follow-up: nuôi khách cân nhắc lâu', desc: 'Spa nằm đầu danh sách khi khách quyết định.',
        kws: ['Khách cho SĐT nhưng chưa đặt lịch', 'Giới thiệu cơ sở, công nghệ', 'Gửi feedback, kết quả khách thật', 'Giải thích quy trình, ưu đãi đúng lúc'] },
      { title: 'AI tự động chăm sóc sau liệu trình', desc: 'Tăng tỷ lệ khách quay lại.',
        kws: ['Hỏi thăm da sau buổi làm', 'Nhắc buổi tiếp theo của liệu trình', 'Chuyên viên tư vấn thêm dịch vụ hợp'] },
      { title: 'Bộ công cụ Remarketing FMM và ZBS', desc: 'Khai thác hiệu quả dữ liệu khách hàng.',
        kws: ['AI tự gắn thẻ theo dịch vụ quan tâm', 'Mini CRM lưu toàn bộ dữ liệu khách', 'Gửi chiến dịch qua Messenger và Zalo'] },
      { title: 'AI tự động gửi sự kiện qua Meta CAPI', desc: 'Hỗ trợ tối ưu quảng cáo Facebook.',
        kws: ['Gửi sự kiện Lead, đặt lịch về Meta', 'Meta tối ưu quảng cáo theo khách thật', 'Hướng tới giảm chi phí mỗi lead'] },
    ],

    steps: [
      { intro: true, hold: 1800 },

      /* ===== TÌNH HUỐNG 1: hỏi → khai thác → SĐT → chốt lịch soi da → nhắc lịch → chăm sóc sau buổi làm ===== */
      { feature: 1 },
      { sep: 'Tình huống 1 · Khách nhắn tin từ quảng cáo Facebook', style: 'time', hold: 800 },
      { kh: 'Spa ơi bên mình có trị mụn không, giá sao ạ?' },
      { ai: 'Dạ có ạ chị! 🌸', fast: true, meta: '⚡ Preny AI trả lời sau 2 giây', kw: 0 },
      { ai: 'Bên em có **liệu trình trị mụn chuẩn y khoa**, giá tùy tình trạng da, **từ 450.000đ/buổi** ạ. Chị cho em xin **1 tấm hình da mặt** hiện tại và chị bị mụn **bao lâu rồi** ạ?', kw: 1 },
      { img: 'da-mun', hold: 1500 },
      { kh: 'Khoảng 1 năm nay, nổi nhiều ở má với cằm. Tự mua thuốc bôi mà không đỡ.' },
      { ai: 'Dạ em hiểu ạ. Chị muốn **cải thiện điểm nào nhất**: hết mụn viêm, mờ thâm hay se lỗ chân lông ạ?', kw: 2 },
      { kh: 'Hết mụn với mờ thâm là được em.' },

      { feature: 2 },
      { ai: 'Dạ mụn viêm lâu ngày cần **soi da trực tiếp** để chuyên viên lên liệu trình đúng ạ. Chị cho em xin **SĐT** để chuyên viên tư vấn kỹ hơn nha!', kw: 0 },
      { kh: '0909 876 543 nhé' },
      { ai: 'Dạ tuần này spa có **soi da miễn phí** ạ. Chị muốn ghé ngày nào để em giữ lịch cho chị ạ?', meta: '✓ Đã chuyển SĐT cho chuyên viên', kw: 1 },
      { kh: 'Chiều thứ Năm 5h được không em?' },
      { card: {
          tag: '✓ Xác nhận lịch hẹn',
          lines: ['Khách hàng: Chị Linh · 0909 876 543', 'Dịch vụ: Soi da miễn phí & tư vấn trị mụn', 'Thời gian: **17h00 thứ Năm, 19/11**', 'Địa chỉ: An Nhiên Spa, 56 Hai Bà Trưng, Q.1'],
        }, kw: 2, hold: 4500 },
      { sep: '— Thứ Năm, trước giờ hẹn 2 tiếng —' },
      { ai: '⏰ Chị Linh ơi, **17h00 chiều nay** chị có lịch soi da ở An Nhiên Spa nha. Chị nhớ **không trang điểm đậm** để soi da chính xác hơn ạ 🌸', meta: '⏰ Tự động · Nhắc lịch hẹn', kw: 3 },
      { kh: 'Ok em, chị tới đúng giờ' },

      // Meta CAPI: chỉ bật thẻ ở cột trái để bạn tự nói, điện thoại đứng yên
      { feature: 6, kw: [0, 1, 2], hold: 3000 },

      { feature: 4 },
      { sep: '— 1 ngày sau buổi làm đầu tiên —' },
      { ai: 'Chị Linh ơi, da chị hôm nay **đỡ đỏ** chưa ạ? Chị nhớ thoa kem phục hồi như chuyên viên dặn nha 💜', meta: '💜 Tự động · Chăm sóc sau liệu trình', kw: 0 },
      { kh: 'Đỡ rồi em, mụn xẹp bớt rồi 😍' },
      { sep: '— 6 ngày sau —' },
      { ai: 'Em nhắc chị **buổi 2 của liệu trình** vào thứ Năm tuần sau ạ. Em giữ khung **17h00** cho chị như lần trước nha?', meta: '📅 Tự động · Nhắc buổi tiếp theo', kw: 1 },
      { kh: 'Ok em giữ giúp chị', kw: 2 },

      // Remarketing FMM & ZBS: chỉ bật thẻ ở cột trái
      { feature: 5, kw: [0, 1, 2], hold: 3000 },

      /* ===== TÌNH HUỐNG 2: khách cho SĐT nhưng cân nhắc lâu → SOFT FOLLOW-UP → quay lại đặt lịch ===== */
      { screen: 'chat', hold: 600 },
      { feature: 3 },
      { sep: 'Tình huống 2 · Khách cân nhắc lâu, hỏi nhiều nơi', style: 'time', hold: 900 },
      { kh: 'Cho chị hỏi giá gói trẻ hóa da với em' },
      { ai: 'Dạ gói **trẻ hóa da công nghệ RF** bên em **890.000đ/buổi**, liệu trình 5 buổi có ưu đãi riêng ạ. Chị cho em xin **SĐT** để chuyên viên tư vấn kỹ hơn nha?', fast: true, meta: '⚡ Preny AI trả lời sau 2 giây' },
      { kh: '0938 112 233. Để chị tham khảo thêm vài chỗ đã nha' },
      { ai: 'Dạ chị cứ tham khảo thoải mái ạ, cần gì chị nhắn em nha 🌸', fast: true },
      { sep: 'Khách đã cho SĐT nhưng chưa đặt lịch…', style: 'silent', kw: 0, hold: 1600 },

      { sep: '— 2 ngày sau —' },
      { ai: 'Chị Vy ơi, em gửi chị vài hình **không gian và công nghệ** ở An Nhiên Spa để chị tham khảo nha 🌿', meta: '🌿 Tự động · Soft follow-up', kw: 1 },
      { aiImgs: [{ img: 'phong-dv', label: 'Phòng dịch vụ riêng' }, { img: 'may-soi-da', label: 'Máy soi da' },
                 { img: 'massage-mat', label: 'Chăm sóc da mặt' }, { img: 'tu-van', label: 'Chuyên viên tư vấn' }], hold: 3200 },
      { sep: '— 5 ngày sau —' },
      { card: {
          tag: '⭐ Feedback khách hàng',
          intro: 'Chị Vy ơi, em gửi chị cảm nhận của một khách vừa làm xong liệu trình trẻ hóa RF ạ:',
          lines: ['“Sau 5 buổi da săn lại rõ, chuyên viên tư vấn rất kỹ, không ép mua thêm.”', 'Chị Thảo, 34 tuổi, Q.3'],
        }, meta: '🌿 Tự động · Soft follow-up', kw: 2, hold: 4200 },
      { sep: '— 9 ngày sau —' },
      { ai: 'Một buổi trẻ hóa RF ở spa gồm **4 bước**: soi da → làm sạch sâu → RF nâng cơ → mặt nạ phục hồi, khoảng **60 phút**, làm xong đi làm luôn được ạ. Tuần này khách mới được **tặng buổi soi da + mặt nạ phục hồi** nha chị 🎁', meta: '🌿 Tự động · Soft follow-up', kw: 3 },
      { kh: 'Thứ Bảy này chị qua làm thử được không em?' },
      { ai: 'Dạ được ạ! Chị muốn ghé **sáng hay chiều thứ Bảy** ạ? Em giữ lịch cho chị liền nha 💜', fast: true },

      { end: true, hold: 600 },
    ],

    /* ===== Nội dung các slide trình chiếu (trinh-chieu.html đọc phần này) ===== */
    deck: {
      // Slide 6 + cột trái demo: 6 tính năng (tiêu đề ngắn cho slide)
      tieuDe6: 'Hệ thống AI chatbot giúp tăng<br><span class="grad">tỷ lệ chốt SĐT và lịch hẹn</span>',
      tinhNang: [
        ['AI tư vấn và lọc khách 24/7', 'Trả lời ngay, không bỏ lỡ khách'],
        ['AI lấy SĐT, chốt lịch hẹn', 'Lead nóng chuyển ngay cho chuyên viên'],
        ['Soft follow-up nuôi khách', 'Spa nằm đầu danh sách khi khách chốt'],
        ['AI chăm sóc sau liệu trình', 'Tăng tỷ lệ khách quay lại'],
        ['Bộ công cụ Remarketing FMM và ZBS', 'Khai thác hiệu quả dữ liệu khách hàng'],
        ['Gửi sự kiện Lead qua Meta CAPI', 'Hỗ trợ tối ưu quảng cáo Facebook'],
      ],

      // Slide "Định nghĩa chốt đơn" (thay slide Tự động hoá của nhóm thương mại điện tử)
      chotDon: {
        nganh: 'Spa',
        nguoi: 'Nhân viên spa',
        buoc: [
          { t: 'Chạy quảng cáo', d: 'Thu hút khách tiềm năng', icon: 'megaphone', own: 'Spa chạy quảng cáo', mock: 'ad', img: L(IMG['cham-soc-da']), text: 'Soi da miễn phí tháng 11 🌸', btn: 'Gửi tin nhắn' },
          { t: 'Bắt đầu chat', d: 'Tư vấn, tìm hiểu nhu cầu', icon: 'chat', ai: true, mock: 'chat',
            msgs: [['kh', 'Spa trị mụn giá sao ạ?'], ['ai', 'Dạ chị bị mụn viêm hay thâm ạ? Chị gửi em hình da nha 🌸']] },
          { t: 'Lọc khách, lấy SĐT', d: 'Khai thác tình trạng, xin số', icon: 'phone', ai: true, mock: 'form', fields: ['Chị Linh · mụn viêm, thâm', '0909 876 543'], ok: 'Đã lấy SĐT' },
          { t: 'Mời soi da miễn phí', d: 'Chốt lịch hẹn đến spa', icon: 'calendar', ai: true, chot: true, mock: 'lich', ten: 'Soi da miễn phí', gio: '17:00 · Thứ Năm 19/11', ok: 'Đã chốt lịch' },
          { t: 'Tư vấn tại spa, upsale', d: 'Người thật soi da, lên liệu trình', icon: 'users', mock: 'img', img: L(IMG['tu-van']), cap: 'Chuyên viên tư vấn trực tiếp' },
          { t: 'Chốt đơn', d: 'Bán liệu trình, dịch vụ', icon: 'check', mock: 'img', img: L(IMG['dap-mat-na']), cap: '✓ Khách mua liệu trình' },
        ],
        vong: { t: 'Chăm sóc lại & Remarketing', d: 'Hỏi thăm sau liệu trình, nhắc buổi tiếp theo, gửi ưu đãi để khách quay lại' },
      },

      // Slide 7: trả lời bình luận
      binhLuan: {
        post: 'Tháng 11 <b>soi da miễn phí</b> + giảm 30% liệu trình trị mụn 🌸 Đặt lịch ngay hôm nay!',
        img: L(IMG['cham-soc-da']),
        kav: 'TM', kten: 'Trần Mai', hoi: 'Trị mụn ở đây bao nhiêu tiền vậy ạ? Có đau không?',
        traLoi: 'Dạ chào chị Mai! Spa vừa nhắn tin tư vấn chi tiết cho chị, chị xem tin nhắn nhé 💬',
        act2: 'Nhắn tin riêng tư vấn dịch vụ đó',
        nhan: 'Chào chị Mai! Liệu trình <b>trị mụn chuẩn y khoa</b> bên em từ <b>450.000đ/buổi</b>, làm nhẹ nhàng, không đau ạ. Chị gửi em hình da hiện tại để tư vấn đúng liệu trình nha!',
        sp: { ten: 'Trị mụn chuẩn y khoa', gia: 'từ 450.000đ', img: L(IMG['cham-soc-da']) },
        khach: 'Mụn viêm ở má với cằm em ạ',
      },

      // Slide 8: không chế dữ liệu
      duLieu: {
        shopA: 'Spa A',
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: cam kết kết quả, hoàn tiền', 'Khách khiếu nại, spa mất uy tín'],
        dung: ['Chỉ trả lời theo dữ liệu spa cung cấp', 'Không chắc chắn → xin khách chờ, AI tạm dừng', 'Báo ngay chuyên viên thật vào trả lời'],
        hoi: 'Trị mụn bên em có cam kết hết hẳn sau 1 buổi không? Không hết có hoàn tiền không?',
        aiSai: 'Dạ có ạ! Bên em <b>cam kết hết mụn sau 1 buổi</b>, không hết <b>hoàn tiền 100%</b> luôn ạ 🥰',
        thucTe: '⚠ Thực tế spa không cam kết hết sau 1 buổi, không có chính sách hoàn tiền',
        gian: 'Làm xong vẫn còn mụn, sao nói hoàn tiền mà giờ không hoàn? 😠',
        cho: 'Dạ chị chờ em một chút để em kiểm tra chính xác chính sách cho mình nhé!',
        nv: 'Chuyên viên Thu · người thật',
        nvTraLoi: 'Dạ kết quả tùy tình trạng da ạ. Chị ghé soi da miễn phí để chuyên viên báo chính xác số buổi cho chị nhé!',
      },

      // Slide bám đuổi theo thẻ tag (ngay sau demo): bên khác nhắn chung chung → 2 ví dụ Preny
      bamDuoi: {
        nhan: 'Vì sao soft follow-up của Preny đặc biệt', shopB: 'Spa B',
        cmpSai: ['Khách im → gửi “Chị còn quan tâm dịch vụ không ạ?”', 'Không biết khách quan tâm gì, vì sao im', 'Khách thấy phiền, bỏ qua tin nhắn'],
        cmpDung: ['Khách nhắn xong im → nhắc đúng dịch vụ khách quan tâm (thẻ <b>#TriMun</b> từ quảng cáo)',
                  'Báo giá xong im → bám đuổi theo giá: ưu đãi, quà tặng (thẻ <b>#HoiGia</b>)',
                  'Đúng nhu cầu, đúng lý do im → khách quay lại đặt lịch'],
        hoi: 'Trị mụn bên em giá sao vậy?',
        traLoiThuong: 'Dạ từ 450.000đ/buổi ạ.',
        nhacChung: 'Chị còn quan tâm dịch vụ không ạ? 😊',
        refImg: L(IMG['cham-soc-da']), refTen: 'Trị mụn chuẩn y khoa',
        vd1: {
          kh: 'Spa ơi mình muốn tư vấn trị mụn',
          ai: 'Dạ chị bị mụn viêm hay thâm ạ? Chị gửi em hình da để tư vấn đúng nha 🌸',
          tag: '🏷 #TriMun', tagNote: 'thẻ từ quảng cáo · khách im 1 ngày',
          nhac: 'Chị Linh ơi, mụn viêm như chị hỏi nên <b>soi da trực tiếp</b> để chuyên viên lên liệu trình ạ. Tuần này spa <b>soi da miễn phí</b>, em giữ lịch cho chị nha?',
          dung: '🎯 Theo thẻ #TriMun: nhắc đúng dịch vụ khách quan tâm',
          khach: 'Cuối tuần còn lịch không em?',
        },
        vd2: {
          kh: 'Trị mụn giá sao em?',
          ai: 'Dạ <b>trị mụn chuẩn y khoa</b> bên em <b>từ 450.000đ/buổi</b>, tùy tình trạng da ạ.',
          tag: '🏷 #HoiGia', tagNote: 'báo giá xong khách im 1 ngày',
          nhac: 'Chị Vy ơi, tuần này khách mới được <b>giảm 30% buổi đầu trị mụn, còn 315.000đ</b>, kèm soi da miễn phí ạ. Em giữ lịch cho chị nha?',
          dung: '🎯 Theo thẻ #HoiGia: bám đuổi theo giá, đúng lý do khách im',
          khach: 'Thứ Năm chị ghé được không em?',
        },
      },

      // Slide tracking qua thẻ tag (chỉ nhóm cân nhắc nhiều)
      tags: {
        rows: [
          { ten: 'Nguyễn Thu Hà', av: 'TH', kenh: 'fb', msg: 'Mình muốn tư vấn trị mụn', gio: '13:58',
            tags: [['FB Ads · Soi da T11', 'ng'], ['#TriMun', 'qt'], ['Đã đặt lịch', 'ht'], ['Gọi lần 1 ✓', 'sa']] },
          { ten: 'Lê Minh Thư', av: 'MT', kenh: 'zalo', msg: 'Gói trẻ hóa da giá sao em?', gio: '11:20',
            tags: [['Zalo OA', 'ng'], ['#TreHoaDa', 'qt'], ['Đã cho SĐT', 'ht'], ['Gọi lần 2 · không bắt máy', 'sa']] },
          { ten: 'Phạm Ngọc Vy', av: 'NV', kenh: 'tiktok', msg: 'Có trị nám không ạ?', gio: '09:41',
            tags: [['TikTok · Video trị nám', 'ng'], ['#TriNam', 'qt'], ['Đang nuôi · Soft follow-up', 'ht']] },
          { ten: 'Trần Bảo Ngọc', av: 'BN', kenh: 'fb', msg: 'Cuối tuần còn lịch không spa?', gio: 'Hôm qua',
            tags: [['Bình luận bài viết', 'ng'], ['#ChamSocDa', 'qt'], ['Đã đến spa', 'ht'], ['Đã kết nối Zalo', 'za']] },
          { ten: 'Đỗ Hoàng Yến', av: 'HY', kenh: 'zalo', msg: 'Mình muốn đặt lịch triệt lông', gio: 'Hôm qua',
            tags: [['Zalo · Khách giới thiệu', 'ng'], ['#TrietLong', 'qt'], ['Đã cho SĐT', 'ht'], ['Gọi lần 3 · đã chốt lịch ✓', 'sa']] },
        ],
        chanDung: {
          ten: 'Nguyễn Thu Hà', av: 'TH', kenh: 'fb', sub: 'Facebook Messenger · 0912 345 678',
          nhom: [
            ['Nguồn khách', [['Facebook Ads', 'ng'], ['Bài: Soi da miễn phí T11', 'ng']]],
            ['Quan tâm', [['#TriMun', 'qt'], ['#MoTham', 'qt']]],
            ['Hành trình', [['Nhắn tin 12/11', 'ht'], ['Cho SĐT', 'ht'], ['Đặt lịch 19/11', 'ht']]],
            ['Sale gọi', [['Lần 1 · không bắt máy', 'sa'], ['Lần 2 · đã tư vấn ✓', 'sa']]],
            ['Kết nối', [['Đã kết nối Zalo', 'za'], ['Khách mới · L1', 'lv']]],
          ],
          ghiChu: 'Mụn viêm ở má, cằm khoảng 1 năm, đã tự bôi thuốc. Muốn hết mụn và mờ thâm. Rảnh chiều tối trong tuần.',
        },
      },

      // Slide chốt lại quy trình (nhóm cân nhắc nhiều): [tiêu đề cột, các dòng]
      chotLai: [
        ['KHÁCH HÀNG', ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến']],
        ['AI CHATBOT', ['Phản hồi nhanh tức thì', 'Tư vấn khách', 'Kêu gọi khách tới dùng thử dịch vụ', 'Lấy số điện thoại nếu khách chưa có']],
        ['SOFT FOLLOW‑UP', ['Gửi tin nhắn giới thiệu dịch vụ, before–after, giải thích quy trình', 'Nuôi khách để spa nằm đầu danh sách khi khách quyết định']],
        ['CHỐT LỊCH HẸN', ['Chốt lịch hẹn đến spa thử dịch vụ', 'Spa chốt đơn']],
        ['MUA LẠI', ['Tự động gửi 1 tin nhắn mỗi tuần qua FB và Zalo']],
      ],
    },
  };
})();
