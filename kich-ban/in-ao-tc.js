/* Kịch bản: IN ÁO THEO YÊU CẦU (áo lớp, áo nhóm, đồng phục) — BẢN TRÌNH CHIẾU, nhóm THƯƠNG MẠI ĐIỆN TỬ. Khung ngang 16:9.
   Demo chat theo chuẩn thương mại điện tử (TRINH-CHIEU.md mục 3), một mạch:
     chị Ngọc Anh gửi ảnh hỏi in 35 áo lớp đi Đà Lạt (ca khó: in tên + số riêng từng bạn → khuyên DTF thay in lụa;
     size cho bạn 95kg và bạn nữ nhỏ; Đà Lạt lạnh → gợi ý thêm hoodie) → chị im → bám đuổi 2 tin theo thẻ #AoLop, #HoiGia
     → chị quay lại chốt → lên đơn tự động (có bảng size) → chăm sóc sau bán, nhắc cách giặt, mời làm áo kỷ yếu.
   Không có tin cập nhật vận chuyển. Không có bước kết thúc: bấm → là sang slide kế.
   Tên shop, giá, chính sách, tên khách, SĐT: dữ liệu minh họa. Ảnh: Unsplash (ảnh thật, không phải hàng của shop). */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'ao-nhom': '1702564635728-7aeacaa370c8',   // nhóm bạn mặc áo in giống nhau
    'ao-do': '1519568470290-c0c1fbfff16f',
    'ao-vang': '1720278726501-8576150684aa',
    'in-lua': '1614494731690-53925976ea29',
    'ao-den': '1618354691373-d851c5c3a990',
    'hoodie': '1556821840-3a63f95609a7',
    'ao-xep': '1716951735063-3d60c2c288e4',
    'polo': '1625910513399-c9fcba54338c',
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    shop: { name: 'Xưởng In Áo An Vy', initials: 'AV' },
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
        kws: ['Trả lời ngay tức thì, 24/7', 'Hiểu mẫu khách gửi, tư vấn đúng kiểu in', 'Báo giá theo số lượng, chất vải, ngày cần', 'Tư vấn size cho cả lớp, cả nhóm', 'Gợi ý thêm đúng nhu cầu chuyến đi'] },
      { title: 'AI tự động bám đuổi khách hàng trong 7 ngày', desc: 'Tăng thêm khoảng 35% tỷ lệ chốt đơn.',
        kws: ['~65% khách nhắn tin rồi im lặng', 'Tự gắn thẻ nhu cầu khách, lý do im', 'Gửi mẫu áo để cả lớp duyệt nhanh', 'Báo giá xong im → ưu đãi giá đúng lúc'] },
      { title: 'AI Agent tự động lên đơn và gửi sang đơn vị vận chuyển', desc: 'Tiết kiệm hơn 90% thời gian xử lý đơn.',
        kws: ['Thu đủ tên, SĐT, địa chỉ, bảng size', 'Gửi tin xác nhận đơn đầy đủ', 'Tự tạo đơn, báo ngày in xong và ngày giao'] },
      { title: 'AI tự động chăm sóc khách hàng sau bán', desc: 'Tăng doanh thu từ khách hàng cũ.',
        kws: ['Hỏi thăm sau khi khách dùng', 'Hướng dẫn giặt giữ hình in bền', 'Lưu file thiết kế, mời đặt lại'] },
    ],

    steps: [
      { intro: true, hold: 1800 },

      /* ---- 1. Tư vấn: kiểu in, giá, size, gợi ý hoodie ---- */
      { feature: 1 },
      { sep: 'Khách nhắn tin từ quảng cáo Facebook', style: 'time', hold: 800 },
      { img: 'ao-nhom', hold: 1500 },
      { kh: 'Shop ơi lớp mình cần 35 áo như này đi Đà Lạt thứ 7 tuần sau, sau lưng in tên với số từng bạn. In lụa hay in gì đẹp, giá sao ạ?' },
      { ai: 'Dạ kịp ạ chị! Shop chuyên áo lớp, áo nhóm, in nhanh 😊', fast: true, meta: '⚡ Preny AI trả lời sau 2 giây', kw: 0 },
      { ai: 'Áo có **tên, số riêng từng bạn** em khuyên in **DTF (chuyển nhiệt)** ạ. In lụa phải làm **khuôn riêng cho mỗi tên** nên không hợp. DTF in được nhiều màu, giặt máy thoải mái.', kw: 1 },
      { ai: 'Áo **cotton 2 chiều 250gsm**, in trước + tên, số sau lưng: **129.000đ/áo** cho 35 áo. Shop **lên mẫu miễn phí trong 2 tiếng**, in **3–4 ngày**, kịp trước thứ 7 ạ.', kw: 2 },
      { kh: 'Lớp có 2 bạn nam tầm 95kg với mấy bạn nữ nhỏ xíu, có size không em?' },
      { ai: 'Dạ áo có **từ S tới 3XL**: bạn 95kg mặc **3XL** thoải mái, bạn nữ dưới 45kg mặc **S** ạ. Đà Lạt tối lạnh, lớp mình muốn thì có thêm **hoodie** in cùng mẫu nha:', kw: [3, 4] },
      { catalog: [
          { name: 'Áo thun cotton 2 chiều', sub: 'Size S – 3XL', price: '129.000đ', old: '149.000đ', tag: 'Áo lớp', art: 'ao-den' },
          { name: 'Áo polo đồng phục', sub: 'Cá sấu 4 chiều', price: '169.000đ', old: '', tag: 'Đồng phục', art: 'polo' },
          { name: 'Hoodie nỉ bông', sub: 'Đi Đà Lạt', price: '249.000đ', old: '279.000đ', tag: 'Giữ ấm', art: 'hoodie' },
        ], hold: 4000 },
      { kh: 'Để mình chốt mẫu với lớp đã nha' },

      /* ---- 2. Khách im → bám đuổi 2 tin theo thẻ ---- */
      { feature: 2 },
      { sep: 'Khách chưa phản hồi… · AI gắn thẻ #AoLop #HoiGia', style: 'silent', kw: [0, 1], hold: 1800 },
      { sep: '— 1 ngày sau —' },
      { ai: 'Chị Ngọc Anh ơi, em gửi chị vài **mẫu áo lớp shop vừa in** cùng kiểu chị hỏi, chị gửi nhóm lớp chọn cho nhanh nha 😊', meta: '🔁 Tự động · Bám đuổi theo thẻ #AoLop', kw: 2 },
      { aiImgs: [{ img: 'ao-den', label: 'Áo đen in mặt trước' }, { img: 'ao-do', label: 'Áo nhóm in chữ' },
                 { img: 'ao-vang', label: 'Áo đôi in tên' }, { img: 'in-lua', label: 'Xưởng in của shop' }], hold: 3200 },
      { sep: '— 2 ngày sau —' },
      { ai: '35 áo chị hỏi giá, chốt **trước 17h hôm nay** em để **119.000đ/áo + tặng 35 túi rút**, vẫn **kịp giao trước chuyến đi** ạ. Qua hôm nay lịch in kín rồi chị 🎁', meta: '🔁 Tự động · Bám đuổi theo thẻ #HoiGia', kw: 3 },
      { kh: 'Lớp duyệt rồi, chốt 35 áo đen nhé. Danh sách tên, số, size mình gửi đây' },

      /* ---- 3. Lên đơn tự động (không có tin cập nhật vận chuyển) ---- */
      { feature: 3 },
      { ai: 'Dạ em đã nhận đủ danh sách **35 bạn** ạ. Chị cho em xin **tên, SĐT và địa chỉ nhận** nha.', kw: 0 },
      { kh: 'Ngọc Anh – 0976 135 246\nKTX khu B, ĐHQG, Dĩ An, Bình Dương' },
      { card: {
          tag: '✓ Tin xác nhận đơn',
          intro: 'Dạ chị kiểm tra lại đơn giúp em nhé:',
          lines: ['35 Áo cotton 2 chiều đen · in DTF trước + tên, số sau', 'Size: S 4 · M 10 · L 12 · XL 6 · XXL 1 · 3XL 2', 'Tổng cộng: **4.165.000đ** (119.000đ/áo, tặng 35 túi rút)', 'Người nhận: Ngọc Anh · 0976 135 246', 'Giao tới: KTX khu B, ĐHQG, Dĩ An, Bình Dương'],
          button: 'Quản lý đơn hàng',
        }, kw: 1, hold: 4500 },
      { kh: 'Ok em' },
      { card: {
          tag: '✓ Đã tạo đơn & lên lịch in', ok: true,
          lines: ['Mã đơn: **#AV31528**', 'In xong: **thứ Ba, 17/11**', 'Giao: **thứ Tư, 18/11**, trước chuyến đi 3 ngày'],
        }, kw: 2, hold: 3500 },

      /* ---- 4. Chăm sóc sau bán ---- */
      { feature: 4 },
      { sep: '— Sau chuyến đi —' },
      { ai: 'Chị Ngọc Anh ơi, chuyến Đà Lạt vui không ạ? Áo in DTF chị nhớ **giặt mặt trái, không ủi lên hình in** để hình bền lâu nha 💜', meta: '💜 Tự động · Chăm sóc sau bán', kw: [0, 1] },
      { kh: 'Cả lớp khen áo đẹp, chụp hình xịn lắm luôn 😍' },
      { ai: 'Dạ vui quá ạ! Shop **lưu sẵn file thiết kế** của lớp mình rồi. Cuối năm làm **áo kỷ yếu, hoodie** thì chị nhắn em, khách cũ **giảm 10%** nha 🎁', kw: 2, hold: 1500 },
      // Không có { end: true }: bấm → thêm một lần là sang thẳng slide kế.
    ],

    /* ===== Nội dung slide trình chiếu (trinh-chieu.html). Chưa có số liệu thống kê thật → 2 slide thống kê tự ẩn. ===== */
    deck: {
      bamDuoi: {
        cmpDung: ['Khách nhắn xong im → nhắc đúng nhu cầu khách hỏi (thẻ <b>#AoLop</b> từ quảng cáo)',
                  'Báo giá xong im → bám đuổi theo giá: ưu đãi số lượng, quà tặng (thẻ <b>#HoiGia</b>)',
                  'Đúng nhu cầu, đúng lý do im → khách quay lại mua'],
        hoi: 'In 35 áo lớp giá bao nhiêu shop?',
        traLoiThuong: 'Dạ 129.000đ/áo ạ.',
        refImg: L(IMG['ao-nhom']), refTen: 'Áo lớp in DTF',
        vd1: {
          kh: 'Shop có in áo lớp không ạ?',
          ai: 'Dạ có ạ! Lớp mình bao nhiêu bạn, cần ngày nào để em báo kịp lịch in nha?',
          tag: '🏷 #AoLop', tagNote: 'thẻ từ quảng cáo · khách im 1 ngày',
          nhac: 'Chị ơi, <b>áo lớp</b> chị hỏi hôm qua shop <b>lên mẫu miễn phí</b> trong 2 tiếng, 1 áo cũng in ạ. Chị gửi em ý tưởng để em lên mẫu nha 😊',
          dung: '🎯 Theo thẻ #AoLop: nhắc đúng nhu cầu khách hỏi',
          khach: 'Gửi em ý tưởng nè',
        },
        vd2: {
          kh: '35 áo in DTF bao nhiêu shop?',
          ai: 'Dạ áo cotton 2 chiều in DTF trước + sau <b>129.000đ/áo</b> ạ.',
          tag: '🏷 #HoiGia', tagNote: 'báo giá xong khách im 1 ngày',
          nhac: 'Chị ơi, 35 áo chị hỏi giá hôm qua, chốt trong hôm nay em để <b>119.000đ/áo + tặng túi rút</b> ạ. Em giữ lịch in cho chị nha?',
          dung: '🎯 Theo thẻ #HoiGia: bám đuổi theo giá, đúng lý do khách im',
          khach: 'Ok chốt 35 áo nhé',
        },
      },
      binhLuan: {
        post: 'In áo lớp, áo nhóm, đồng phục <b>theo yêu cầu</b> · 1 áo cũng in, lên mẫu miễn phí 👕',
        img: L(IMG['ao-nhom']),
        kav: 'HT', kten: 'Hoàng Tâm', hoi: 'Cty mình cần 80 áo polo in logo, 1 tuần có kịp không shop?',
        traLoi: 'Dạ chào anh Tâm! Shop vừa nhắn tin tư vấn chi tiết cho anh, anh xem tin nhắn nhé 💬',
        act2: 'Nhắn tin riêng tư vấn kiểu in và giá',
        nhan: 'Chào anh Tâm! <b>80 áo polo in logo</b> bên em làm <b>5–7 ngày</b> ạ. Logo ít màu, số lượng nhiều em gợi ý <b>in lụa</b>: bền, giá tốt hơn DTF. Anh gửi em <b>file logo</b> để em lên mẫu nha!',
        sp: { ten: 'Áo polo đồng phục', gia: 'từ 159.000đ', img: L(IMG['polo']) },
        khach: 'File logo đây em',
      },
      duLieu: {
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: ngày giao, kiểu in, giá', 'Lỡ sự kiện của khách, shop mất uy tín'],
        hoi: 'Mai mình cần 50 áo in tên từng người, kịp không em?',
        aiSai: 'Dạ kịp ạ! <b>Sáng mai</b> có đủ <b>50 áo</b> luôn chị 🥰',
        thucTe: '⚠ Thực tế: 50 áo in tên riêng cần ít nhất 2 ngày',
        gian: 'Sự kiện sáng nay mà chưa có áo! Sao hứa kịp vậy? 😠',
        cho: 'Dạ chị chờ em một chút để em kiểm tra chính xác lịch in cho mình nhé!',
        nv: 'Nhân viên Vy · người thật',
        nvTraLoi: 'Dạ 50 áo in tên riêng bên em cần 2 ngày ạ. Chị cần gấp thì em in trước 20 áo, giao trong tối mai nhé!',
      },
    },
  };
})();
