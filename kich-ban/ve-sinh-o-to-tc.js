/* Kịch bản: DUNG DỊCH VỆ SINH Ô TÔ — BẢN TRÌNH CHIẾU, nhóm THƯƠNG MẠI ĐIỆN TỬ. Khung ngang 16:9.
   Demo chat theo chuẩn thương mại điện tử (TRINH-CHIEU.md mục 3), một mạch:
     anh Phong gửi ảnh ghế da bẩn hỏi dùng chai nào → AI tư vấn đúng loại, cách dùng, combo dưỡng da → anh im
     → bám đuổi 2 tin theo thẻ #NoiThatDa, #HoiGia → anh quay lại chốt → lên đơn tự động → chăm sóc sau bán, nhắc mua lại.
   Không có tin cập nhật vận chuyển. Không có bước kết thúc: bấm → là sang slide kế.
   Tên shop, sản phẩm, giá, SĐT: dữ liệu minh họa (không dùng tên hãng thật). Ảnh: Unsplash (ảnh thật). */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'ghe-da': '1563986642669-49162177a0bc',
    'xit-da-nang': '1550572017-4b7a301b9d81',
    'duong-da': '1652860316277-370ca5b1b1df',
    'khan': '1761934658331-2e00b20dc6c6',
    'bot-tuyet': '1608506375591-b90e1f955e4b',
    'rua-xe': '1633014041037-f5446fb4ce99',
    'phu-bong': '1652987086612-d948b775d358',
    'lau-noi-that': '1732357624591-f2137085659b',
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    shop: { name: 'Xe Sạch Store', initials: 'XS' },
    headline: { pre: 'Hệ thống AI chatbot giúp tăng trung bình', em: '62% tỷ lệ chốt đơn' },
    sub: 'Tự động hóa toàn bộ quy trình chốt đơn, chăm sóc và remarketing để tăng hiệu quả bán hàng.',
    cta: 'Dùng thử miễn phí tại **preny.ai**\nHotline **0389 647 778**',
    speed: 1.13,
    timing: { read0: 1000, readPerChar: 28, readMax: 4500, type0: 800, typePerChar: 3, typeMax: 1500, fastType: 500,
              featureHold: 1400, sepHold: 1100, cardHold: 4000, introCard: 250 },

    images: Object.fromEntries(Object.entries(IMG).map(([k, id]) => [k, U(id)])),

    // Cột trái demo: đúng 4 tính năng được diễn, theo thứ tự diễn (chuẩn thương mại điện tử lần 22)
    features: [
      { title: 'AI chatbot chốt đơn tự động 100%', desc: 'Tăng trung bình 62% tỷ lệ chốt đơn.',
        kws: ['Trả lời ngay tức thì, 24/7', 'Xem ảnh, tư vấn đúng loại dung dịch', 'Hướng dẫn cách dùng, an toàn bề mặt', 'Trả lời băn khoăn: mùi, số lần dùng', 'Gợi ý combo, chủ động chốt đơn'] },
      { title: 'AI tự động bám đuổi khách hàng trong 7 ngày', desc: 'Tăng thêm khoảng 35% tỷ lệ chốt đơn.',
        kws: ['~65% khách nhắn tin rồi im lặng', 'Tự gắn thẻ sản phẩm khách xem, lý do im', 'Nhắc đúng sản phẩm, cách dùng hiệu quả', 'Báo giá xong im → ưu đãi giá đúng lúc'] },
      { title: 'AI Agent tự động lên đơn và gửi sang đơn vị vận chuyển', desc: 'Tiết kiệm hơn 90% thời gian xử lý đơn.',
        kws: ['Thu đủ tên, SĐT, địa chỉ', 'Gửi tin xác nhận đơn đầy đủ', 'Tự tạo đơn, đẩy sang đơn vị vận chuyển'] },
      { title: 'AI tự động chăm sóc khách hàng sau bán', desc: 'Tăng doanh thu từ khách hàng cũ.',
        kws: ['Hỏi kết quả sau lần dùng đầu', 'Nhắc lịch dưỡng da, phủ bóng định kỳ', 'Nhắc mua lại khi chai sắp hết'] },
    ],

    steps: [
      { intro: true, hold: 1800 },

      /* ---- 1. Tư vấn: xem ảnh, đúng loại, cách dùng, combo ---- */
      { feature: 1 },
      { sep: 'Khách nhắn tin từ quảng cáo Facebook', style: 'time', hold: 800 },
      { img: 'ghe-da', hold: 1500 },
      { kh: 'Ghế da xe anh bị bẩn với xỉn màu vậy, dùng chai nào shop?' },
      { ai: 'Dạ shop xem ảnh rồi ạ anh! 🚗', fast: true, meta: '⚡ Preny AI trả lời sau 2 giây', kw: 0 },
      { ai: 'Ghế da như xe anh dùng **Dung dịch vệ sinh nội thất đa năng 500ml** là hợp ạ, giá **189.000đ**. Dùng được cho **da, nỉ, nhựa taplo**, không làm bạc màu ạ.', kw: 1 },
      { kh: '1 chai dùng được bao lâu em? Có mùi hắc không?' },
      { ai: 'Dạ 1 chai dùng khoảng **10–12 lần vệ sinh toàn xe**, mùi nhẹ, không hắc ạ. Anh xịt lên **khăn microfiber** rồi lau, không xịt thẳng lên da nha.', kw: [2, 3] },
      { ai: 'Ghế da đã xỉn màu anh nên **dưỡng da** sau khi lau. Combo 3 món bên em đang **giảm 15%** ạ:', kw: 4 },
      { catalog: [
          { name: 'Xịt nội thất đa năng', sub: 'Chai 500ml', price: '189.000đ', old: '', tag: 'Bán chạy', art: 'xit-da-nang' },
          { name: 'Dưỡng da ghế', sub: 'Chai 250ml', price: '169.000đ', old: '', tag: 'Ghế da', art: 'duong-da' },
          { name: 'Khăn microfiber', sub: 'Bộ 3 khăn', price: '79.000đ', old: '', tag: 'Combo −15%', art: 'khan' },
        ], hold: 4000 },
      { kh: 'Để anh xem lại đã' },

      /* ---- 2. Khách im → bám đuổi 2 tin theo thẻ ---- */
      { feature: 2 },
      { sep: 'Khách chưa phản hồi… · AI gắn thẻ #NoiThatDa #HoiGia', style: 'silent', kw: [0, 1], hold: 1800 },
      { sep: '— 1 ngày sau —' },
      { ai: 'Anh Phong ơi, ghế da xỉn màu như xe anh chỉ cần **lau bằng xịt đa năng rồi dưỡng da** là lên màu lại, làm tại nhà **khoảng 15 phút** ạ 👇', meta: '🔁 Tự động · Bám đuổi theo thẻ #NoiThatDa', kw: 2 },
      { aiImg: 'lau-noi-that', hold: 1600 },
      { sep: '— 2 ngày sau —' },
      { ai: 'Combo 3 món anh hỏi giá hôm nay **giảm 20% còn 349.000đ + freeship**, chỉ đến 23h tối nay thôi ạ 🎁', meta: '🔁 Tự động · Bám đuổi theo thẻ #HoiGia', kw: 3 },
      { kh: 'Ok lấy anh combo 3 món nha' },

      /* ---- 3. Lên đơn tự động (không có tin cập nhật vận chuyển) ---- */
      { feature: 3 },
      { ai: 'Dạ anh cho em xin **tên, SĐT và địa chỉ** nhận hàng nha.', kw: 0 },
      { kh: 'Lê Phong – 0912 888 246\n88 Nguyễn Văn Linh, Q.7, TP.HCM' },
      { card: {
          tag: '✓ Tin xác nhận đơn',
          intro: 'Dạ anh kiểm tra lại đơn giúp em nhé:',
          lines: ['Combo nội thất 3 món: xịt đa năng, dưỡng da, khăn microfiber', 'Tổng cộng: **349.000đ** (đã giảm 20%, freeship)', 'Người nhận: Lê Phong · 0912 888 246', 'Địa chỉ: 88 Nguyễn Văn Linh, Q.7, TP.HCM'],
          button: 'Quản lý đơn hàng',
        }, kw: 1, hold: 4500 },
      { kh: 'Ok em' },
      { card: {
          tag: '✓ Đã tạo đơn & gửi vận chuyển', ok: true,
          lines: ['Mã đơn: **#XS51836**', 'Mã vận đơn: **VD60418275**', 'Dự kiến giao: 1–2 ngày'],
        }, kw: 2, hold: 3500 },

      /* ---- 4. Chăm sóc sau bán, nhắc mua lại ---- */
      { feature: 4 },
      { sep: '— 3 ngày sau —' },
      { ai: 'Anh Phong ơi, ghế da lau xong có sạch, lên màu lại không ạ? Anh **dưỡng da 2–3 tuần/lần** để da mềm, không nứt nha 🚗', meta: '💙 Tự động · Chăm sóc sau bán', kw: [0, 1] },
      { kh: 'Sạch lắm em, ghế bóng lại luôn 👍' },
      { sep: '— 5 tuần sau —' },
      { ai: 'Chai xịt nội thất của anh **chắc sắp hết** rồi ạ. Khách cũ mua lại được **giảm 10%**, nhiều anh em hay lấy kèm **rửa xe bọt tuyết** nữa nha:', meta: '🔔 Tự động · Nhắc mua lại', kw: 2 },
      { catalog: [
          { name: 'Xịt nội thất đa năng', sub: 'Chai 500ml', price: '170.100đ', old: '189.000đ', tag: 'Mua lại -10%', art: 'xit-da-nang' },
          { name: 'Rửa xe bọt tuyết', sub: 'Can 1 lít', price: '143.100đ', old: '159.000đ', tag: 'Hay mua kèm', art: 'bot-tuyet' },
          { name: 'Phủ bóng nano', sub: 'Chai 500ml', price: '224.100đ', old: '249.000đ', tag: '-10%', art: 'phu-bong' },
        ], hold: 4000 },
      { kh: 'Lấy anh 1 xịt nội thất với 1 rửa xe bọt tuyết', hold: 1500 },
      // Không có { end: true }: bấm → thêm một lần là sang thẳng slide kế.
    ],

    /* ===== Nội dung slide trình chiếu (trinh-chieu.html). Chưa có số liệu thống kê thật → 2 slide thống kê tự ẩn. ===== */
    deck: {
      bamDuoi: {
        cmpDung: ['Khách nhắn xong im → nhắc đúng sản phẩm khách đã xem (thẻ <b>#RuaXeBotTuyet</b> từ quảng cáo)',
                  'Báo giá xong im → bám đuổi theo giá: mua 2 giảm, freeship (thẻ <b>#HoiGia</b>)',
                  'Đúng nhu cầu, đúng lý do im → khách quay lại mua'],
        hoi: 'Rửa xe bọt tuyết giá bao nhiêu shop?',
        traLoiThuong: 'Dạ giá 159.000đ ạ.',
        refImg: L(IMG['bot-tuyet']), refTen: 'Rửa xe bọt tuyết 1 lít',
        vd1: {
          kh: 'Chai này rửa xe màu đen được không shop?',
          ai: 'Dạ được ạ anh! Anh rửa tại nhà hay ngoài tiệm để em tư vấn cách pha nha?',
          tag: '🏷 #RuaXeBotTuyet', tagNote: 'thẻ từ quảng cáo · khách im 1 ngày',
          nhac: 'Anh Quân ơi, <b>rửa xe bọt tuyết</b> anh xem hôm qua bọt dày, <b>không cần chà mạnh nên không xước sơn đen</b> ạ. 1 can rửa khoảng 20 lần, em giữ hàng cho anh nha?',
          dung: '🎯 Theo thẻ #RuaXeBotTuyet: nhắc đúng sản phẩm khách xem',
          khach: 'Ok gửi anh 1 can',
        },
        vd2: {
          kh: 'Phủ bóng nano giá bao nhiêu em?',
          ai: 'Dạ <b>Phủ bóng nano 500ml</b> giá <b>249.000đ</b>, mỗi lần phủ bóng khoảng 4–6 tuần ạ.',
          tag: '🏷 #HoiGia', tagNote: 'báo giá xong khách im 1 ngày',
          nhac: 'Anh Đạt ơi, phủ bóng nano anh hỏi giá hôm qua hôm nay <b>mua 2 chai chỉ 219.000đ/chai + freeship</b>, đến 23h ạ. Em giữ 2 chai cho anh nha?',
          dung: '🎯 Theo thẻ #HoiGia: bám đuổi theo giá, đúng lý do khách im',
          khach: 'Lấy anh 2 chai nha',
        },
      },
      binhLuan: {
        post: 'Combo <b>vệ sinh nội thất ô tô</b>: xịt đa năng + dưỡng da + khăn microfiber, giảm 15% 🚗',
        img: L(IMG['lau-noi-that']),
        kav: 'TK', kten: 'Trần Khoa', hoi: 'Ghế da bò dùng được không shop? Combo giá sao?',
        traLoi: 'Dạ chào anh Khoa! Shop vừa nhắn tin tư vấn chi tiết cho anh, anh xem tin nhắn nhé 💬',
        act2: 'Nhắn tin riêng tư vấn combo đó',
        nhan: 'Chào anh Khoa! Combo dùng được cho <b>ghế da bò, nỉ, nhựa taplo</b>, giá <b>371.000đ</b> (giảm 15%), freeship ạ. Ghế xe anh màu gì để em tư vấn cách dưỡng da nha?',
        sp: { ten: 'Combo nội thất 3 món', gia: '371.000đ', img: L(IMG['xit-da-nang']) },
        khach: 'Ghế màu be em',
      },
      duLieu: {
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai công dụng: dùng cho mọi bề mặt', 'Khách khiếu nại, shop mất uy tín'],
        hoi: 'Chai này xịt được lên màn hình cảm ứng với kính phủ ceramic không em?',
        aiSai: 'Dạ được ạ! Dùng <b>cho mọi bề mặt</b> trong xe luôn anh 🥰',
        thucTe: '⚠ Thực tế: không dùng cho màn hình cảm ứng và bề mặt phủ ceramic',
        gian: 'Xịt lên màn hình bị loang vệt, sao nói dùng được? 😠',
        cho: 'Dạ anh chờ em một chút để em kiểm tra chính xác cách dùng cho mình nhé!',
        nv: 'Nhân viên Minh · người thật',
        nvTraLoi: 'Dạ màn hình cảm ứng anh lau bằng khăn khô hoặc dung dịch riêng cho màn hình ạ. Chai này dùng cho da, nỉ, nhựa taplo nhé!',
      },
    },
  };
})();
