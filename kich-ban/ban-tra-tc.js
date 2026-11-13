/* Kịch bản: BÀN TRÀ (bàn trà gỗ nguyên khối tích hợp bếp đun, bơm nước tự động; đôn, ấm chén, khay) — BẢN TRÌNH CHIẾU,
   nhóm THƯƠNG MẠI ĐIỆN TỬ. Khung ngang 16:9.
   Demo chat theo chuẩn thương mại điện tử (TRINH-CHIEU.md mục 3), một mạch:
     anh Quang gửi ảnh hỏi (ca khó: phòng 4×5m tiếp 5–6 khách chọn cỡ nào; có phải đi đường nước không;
     gỗ nguyên khối để phòng máy lạnh có nứt không) → anh im → bám đuổi 2 tin theo thẻ #BanTraNguyenKhoi, #HoiGia
     (gửi ảnh thật từng tấm vân gỗ, giữ tấm khách chọn) → anh quay lại chốt → lên đơn tự động (hỏi nhà phố hay chung cư
     để xếp người khiêng) → chăm sóc sau bán, nhắc vệ sinh bơm, dưỡng gỗ, gợi ý trà.
   Không có tin cập nhật vận chuyển. Không có bước kết thúc: bấm → là sang slide kế.
   Tên shop, giá, chính sách, tên khách, SĐT: dữ liệu minh họa. Ảnh: Unsplash (ảnh thật, không phải hàng của shop). */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'ban-tra': '1531970227416-f0cddeb1f748',
    'mat-go': '1583596838470-10ae8e96a95a',
    'van-go-1': '1628630468252-a086c2bc7255',
    'van-go-2': '1583418007992-a8e33a92e7ad',
    'don-go': '1540809799-5da9372c3f64',
    'am-chen': '1548386581-23b700b33be0',
    'khay-tra': '1577016029703-cc22a7c0c28c',
    'phong-tra': '1610375233775-6e0166927193',
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    shop: { name: 'Bàn Trà Gia Mộc', initials: 'GM' },
    headline: { pre: 'Hệ thống AI chatbot giúp tăng trung bình', em: '62% tỷ lệ chốt đơn' },
    sub: 'Tự động hóa toàn bộ quy trình chốt đơn, bám đuổi, lên đơn và chăm sóc khách để tăng hiệu quả bán hàng.',
    cta: 'Dùng thử miễn phí tại **preny.ai**\nHotline **0389 647 778**',
    speed: 1.13,
    timing: { read0: 1000, readPerChar: 28, readMax: 4500, type0: 800, typePerChar: 3, typeMax: 1500, fastType: 500,
              featureHold: 1400, sepHold: 1100, cardHold: 4000, introCard: 250 },

    images: Object.fromEntries(Object.entries(IMG).map(([k, id]) => [k, U(id)])),

    // Cột trái demo: đúng 4 tính năng được diễn, theo thứ tự diễn
    features: [
      { title: 'AI chatbot tư vấn, chốt đơn 24/7', desc: 'Tăng trung bình 62% tỷ lệ chốt đơn.',
        kws: ['Trả lời ngay tức thì, 24/7', 'Nhận diện đúng mẫu bàn từ ảnh', 'Tư vấn kích thước theo phòng, số khách', 'Giải đáp kỹ thuật: nước, bếp, gỗ nứt', 'Gợi ý combo đôn, ấm chén, khay'] },
      { title: 'AI tự động bám đuổi khách hàng trong 7 ngày', desc: 'Tăng thêm khoảng 35% tỷ lệ chốt đơn.',
        kws: ['~65% khách nhắn tin rồi im lặng', 'Tự gắn thẻ mẫu khách xem, lý do im', 'Gửi ảnh thật vân gỗ, giữ tấm khách chọn', 'Báo giá xong im → ưu đãi combo đúng lúc'] },
      { title: 'AI Agent tự động lên đơn và gửi sang đơn vị vận chuyển', desc: 'Tiết kiệm hơn 90% thời gian xử lý đơn.',
        kws: ['Thu đủ tên, SĐT, địa chỉ, loại nhà', 'Gửi tin xác nhận đơn đầy đủ', 'Tự tạo đơn, xếp lịch giao và lắp'] },
      { title: 'AI tự động chăm sóc khách hàng sau bán', desc: 'Tăng doanh thu từ khách hàng cũ.',
        kws: ['Hỏi thăm sau khi dùng', 'Nhắc vệ sinh bơm, dưỡng gỗ định kỳ', 'Gợi ý trà, phụ kiện mua thêm'] },
    ],

    steps: [
      { intro: true, hold: 1800 },

      /* ---- 1. Tư vấn: cỡ bàn theo phòng + số khách, không cần đường nước, gỗ có nứt không ---- */
      { feature: 1 },
      { sep: 'Khách nhắn tin từ quảng cáo Facebook', style: 'time', hold: 800 },
      { img: 'ban-tra', hold: 1500 },
      { kh: 'Bàn này giá sao shop? Phòng khách nhà anh 4m x 5m, hay tiếp 5-6 khách uống trà. Có phải đi đường nước không em?' },
      { ai: 'Dạ chào anh! Em tư vấn cho anh ngay ạ 🍵', fast: true, meta: '⚡ Preny AI trả lời sau 2 giây', kw: 0 },
      { ai: 'Mẫu anh gửi là **bàn trà gỗ me tây nguyên khối**, có sẵn **bếp đun và bơm nước tự động** ạ. Tiếp 5–6 khách, phòng 4×5m anh chọn bản **1m6** là vừa: ngồi thoải mái, không chật lối đi.', kw: [1, 2] },
      { ai: 'Anh **không cần đi đường nước** đâu ạ: bơm hút nước từ **bình 19 lít** để dưới gầm bàn, nước thừa trên khay chảy xuống **thùng chứa riêng**. Bản 1m6 giá **12.900.000đ**, bếp và bơm **bảo hành 12 tháng**.', kw: 3 },
      { kh: 'Gỗ nguyên khối để phòng máy lạnh có bị nứt không em?' },
      { ai: 'Dạ gỗ bên em **sấy tới độ ẩm 10–12%** rồi mới làm nên rất ít co ngót ạ. Anh **lau dầu dưỡng gỗ 3–4 tháng/lần**, đừng để gió máy lạnh thổi thẳng vào mặt bàn là bền đẹp. Kèm bàn có combo phụ kiện nè:', kw: 4 },
      { catalog: [
          { name: 'Bộ 6 đôn gỗ me tây', sub: 'Cao 45 cm', price: '3.600.000đ', old: '4.200.000đ', tag: 'Hay mua kèm', art: 'don-go' },
          { name: 'Bộ ấm chén gốm', sub: '1 ấm · 6 chén', price: '890.000đ', old: '', tag: 'Bán chạy', art: 'am-chen' },
          { name: 'Khay trà gỗ', sub: 'Có ống thoát nước', price: '650.000đ', old: '', tag: 'Phụ kiện', art: 'khay-tra' },
        ], hold: 4000 },
      { kh: 'Để cuối tuần anh qua xem gỗ đã' },

      /* ---- 2. Khách im → bám đuổi 2 tin theo thẻ ---- */
      { feature: 2 },
      { sep: 'Khách chưa phản hồi… · AI gắn thẻ #BanTraNguyenKhoi #HoiGia', style: 'silent', kw: [0, 1], hold: 1800 },
      { sep: '— 1 ngày sau —' },
      { ai: 'Anh Quang ơi, em gửi anh **ảnh thật 3 tấm vân gỗ** bản 1m6 đang có sẵn. Mỗi tấm vân một khác, anh chọn trước em **giữ tấm đó** cho anh tới cuối tuần nha 😊', meta: '🔁 Tự động · Bám đuổi theo thẻ #BanTraNguyenKhoi', kw: 2 },
      { aiImgs: [{ img: 'mat-go', label: 'Tấm vân số 1' }, { img: 'van-go-1', label: 'Tấm vân số 2' },
                 { img: 'van-go-2', label: 'Tấm vân số 3' }, { img: 'ban-tra', label: 'Bàn đã lắp bếp, bơm' }], hold: 3200 },
      { sep: '— 2 ngày sau —' },
      { ai: 'Combo **bàn 1m6 + 6 đôn** anh hỏi giá, chốt trong tuần em **giảm 1.000.000đ + tặng bộ ấm chén**, giao lắp miễn phí nội thành ạ 🎁', meta: '🔁 Tự động · Bám đuổi theo thẻ #HoiGia', kw: 3 },
      { kh: 'Ok chốt anh tấm vân số 2, kèm 6 đôn nhé' },

      /* ---- 3. Lên đơn tự động, xếp lịch giao và lắp (không có tin cập nhật vận chuyển) ---- */
      { feature: 3 },
      { ai: 'Dạ anh cho em xin **tên, SĐT, địa chỉ** và nhà mình là **nhà phố hay chung cư** để em xếp người khiêng bàn nha. Mặt gỗ nguyên khối nặng lắm ạ.', kw: 0 },
      { kh: 'Lê Quang – 0909 112 358\n27 Trần Não, TP. Thủ Đức. Nhà phố, đặt tầng trệt' },
      { card: {
          tag: '✓ Tin xác nhận đơn',
          intro: 'Dạ anh kiểm tra lại đơn giúp em nhé:',
          lines: ['1 Bàn trà gỗ me tây nguyên khối 1m6 · tấm vân số 2', '6 Đôn gỗ me tây · tặng bộ ấm chén gốm', 'Tổng cộng: **15.500.000đ** (đã giảm 1.000.000đ)', 'Người nhận: Lê Quang · 0909 112 358', 'Giao tới: 27 Trần Não, TP. Thủ Đức · tầng trệt'],
          button: 'Quản lý đơn hàng',
        }, kw: 1, hold: 4500 },
      { kh: 'Ok em' },
      { card: {
          tag: '✓ Đã tạo đơn & xếp lịch giao, lắp', ok: true,
          lines: ['Mã đơn: **#GM62014**', 'Giao & lắp: **Chủ nhật, 22/11**', 'Kỹ thuật lắp bếp, bơm và chạy thử tại nhà'],
        }, kw: 2, hold: 3500 },

      /* ---- 4. Chăm sóc sau bán ---- */
      { feature: 4 },
      { sep: '— 1 tuần sau —' },
      { ai: 'Anh Quang ơi, bàn trà dùng ổn không ạ? Anh nhớ **súc bơm bằng nước sạch 1 tháng/lần** và **lau dầu gỗ** sau 3 tháng nha 🍵', meta: '🍵 Tự động · Chăm sóc sau bán', kw: [0, 1] },
      { kh: 'Khách tới ai cũng khen bàn đẹp em 👍' },
      { ai: 'Dạ vui quá ạ! Shop mới về **trà Shan tuyết, trà Thái Nguyên**, khách cũ **giảm 10%** ạ. Em gửi anh mẫu để tiếp khách nha 😊', kw: 2, hold: 1500 },
      // Không có { end: true }: bấm → thêm một lần là sang thẳng slide kế.
    ],

    /* ===== Nội dung slide trình chiếu (trinh-chieu.html). Chưa có số liệu thống kê thật → 2 slide thống kê tự ẩn. ===== */
    deck: {
      bamDuoi: {
        cmpDung: ['Khách nhắn xong im → nhắc đúng mẫu bàn khách xem (thẻ <b>#BanTraNguyenKhoi</b> từ quảng cáo)',
                  'Báo giá xong im → bám đuổi theo giá: ưu đãi combo, quà tặng (thẻ <b>#HoiGia</b>)',
                  'Đúng nhu cầu, đúng lý do im → khách quay lại mua'],
        hoi: 'Bàn trà nguyên khối 1m6 giá bao nhiêu shop?',
        traLoiThuong: 'Dạ giá 12.900.000đ ạ.',
        refImg: L(IMG['ban-tra']), refTen: 'Bàn trà nguyên khối 1m6',
        vd1: {
          kh: 'Bàn trà này còn không shop?',
          ai: 'Dạ còn ạ anh! Phòng nhà mình rộng bao nhiêu, hay tiếp mấy khách để em tư vấn đúng cỡ bàn nha?',
          tag: '🏷 #BanTraNguyenKhoi', tagNote: 'thẻ từ quảng cáo · khách im 1 ngày',
          nhac: 'Anh ơi, <b>bàn trà nguyên khối</b> anh xem hôm qua em vừa chụp <b>ảnh thật 3 tấm vân gỗ</b> đang có sẵn. Anh chọn trước em giữ tấm đó cho anh nha 😊',
          dung: '🎯 Theo thẻ #BanTraNguyenKhoi: nhắc đúng mẫu khách xem',
          khach: 'Gửi anh xem vân gỗ',
        },
        vd2: {
          kh: 'Bàn 1m6 kèm 6 đôn bao nhiêu shop?',
          ai: 'Dạ combo <b>bàn 1m6 + 6 đôn</b> giá <b>16.500.000đ</b> ạ.',
          tag: '🏷 #HoiGia', tagNote: 'báo giá xong khách im 1 ngày',
          nhac: 'Anh ơi, combo anh hỏi giá hôm qua, chốt trong tuần em <b>giảm 1.000.000đ + tặng bộ ấm chén</b> ạ. Em giữ hàng cho anh nha?',
          dung: '🎯 Theo thẻ #HoiGia: bám đuổi theo giá, đúng lý do khách im',
          khach: 'Ok giữ cho anh',
        },
      },
      binhLuan: {
        post: 'Bàn trà <b>gỗ nguyên khối</b> có sẵn bếp đun, bơm nước tự động · không cần đi đường nước 🍵',
        img: L(IMG['mat-go']),
        kav: 'VH', kten: 'Võ Hưng', hoi: 'Có bàn nhỏ cho phòng 3m x 4m không shop, giao Long An được không?',
        traLoi: 'Dạ chào anh Hưng! Shop vừa nhắn tin tư vấn chi tiết cho anh, anh xem tin nhắn nhé 💬',
        act2: 'Nhắn tin riêng tư vấn cỡ bàn',
        nhan: 'Chào anh Hưng! Phòng 3×4m anh hợp bản <b>1m2</b>, ngồi 3–4 người ạ. Bên em giao lắp Long An <b>1–2 ngày</b>, có kỹ thuật chạy thử bếp, bơm tại nhà. Anh hay tiếp mấy khách để em tư vấn chuẩn nha!',
        sp: { ten: 'Bàn trà nguyên khối 1m2', gia: 'từ 8.900.000đ', img: L(IMG['van-go-1']) },
        khach: 'Thường 3 người em',
      },
      duLieu: {
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: loại gỗ, bảo hành', 'Khách khiếu nại, shop mất uy tín'],
        hoi: 'Bàn này gỗ gì em, bảo hành trọn đời đúng không?',
        aiSai: 'Dạ <b>gỗ hương</b> ạ, bảo hành <b>trọn đời</b> luôn anh 🥰',
        thucTe: '⚠ Thực tế: gỗ me tây, bếp và bơm bảo hành 12 tháng',
        gian: 'Thợ nói không phải gỗ hương! Sao tư vấn sai vậy? 😠',
        cho: 'Dạ anh chờ em một chút để em kiểm tra chính xác loại gỗ và chính sách bảo hành cho mình nhé!',
        nv: 'Nhân viên Minh · người thật',
        nvTraLoi: 'Dạ mặt bàn là gỗ me tây nguyên khối ạ. Bếp, bơm bảo hành 12 tháng, gỗ nứt do lỗi sấy em đổi trong 1 năm anh nhé!',
      },
    },
  };
})();
