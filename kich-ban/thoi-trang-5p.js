/* Kịch bản: THỜI TRANG (loại 1 — thương mại điện tử)
   Thứ tự demo: 1 chốt đơn → 3 bám đuổi → 2 lên đơn → 4 sau bán → 5 remarketing → 6 Meta CAPI → kết thúc.

   Cách viết bước:
     { feature: 1 }                      bật tính năng số 1 ở cột trái (to + sáng lên, sổ keyword)
     { kh: 'nội dung' }                  tin của khách     | { img: 'polo-den' } khách gửi ảnh
     { ai: 'nội dung', meta: '…' }       tin của AI (có "đang nhập…"); meta = dòng chú thích nhỏ bên dưới
     { aiImg: 'polo-den' }               AI gửi ảnh
     { sep: '— 1 ngày sau —' }           vạch ngắt thời gian (style: 'time' | 'silent')
     { card: {...} }                     tin nổi bật trong chat (xác nhận đơn, đã tạo đơn…)
     { catalog: [...] }                  danh sách sản phẩm trượt ngang
     { screen: {title, sub} }            đổi điện thoại sang màn hình quản trị Preny | { screen: 'chat' } quay lại chat
     { tags } { customers } { campaign } { status } { flow } { endcard }   các khối trên màn hình quản trị
     kw: 0                               hiện keyword số 0 của tính năng đang bật (đếm từ 0)
     hold: 3000                          giữ lâu hơn/ngắn hơn (ms)
   **chữ đậm**, \n xuống dòng.
   Ảnh: Unsplash (giấy phép Unsplash, dùng thương mại miễn phí). */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    shop: { name: 'Thời Trang Smart', initials: 'TS' },
    headline: { pre: 'Hệ thống AI chatbot giúp tăng trung bình', em: '62% tỷ lệ chốt đơn' },
    sub: 'Tự động hóa toàn bộ quy trình chốt đơn, chăm sóc và remarketing để tăng hiệu quả bán hàng.',
    cta: 'Dùng thử miễn phí tại **preny.ai**\nHotline **0389 647 778**',
    speed: 0.9,   // < 1 là chậm hơn (0.9 ≈ video 5 phút)

    images: {
      'polo-den': U('1625910513399-c9fcba54338c'),
      'kaki-be': U('1473966968600-fa801b869a1a'),
      'polo-trang': U('1671438118097-479e63198629'),
      'polo-xam': U('1586363090844-099253d6a1cb'),
      'vay-den': U('1522218296581-1244648997fb'),
    },

    features: [
      { title: 'AI chatbot chốt đơn tự động 100%', desc: 'Tăng trung bình 62% tỷ lệ chốt đơn.',
        kws: ['Trả lời ngay tức thì, 24/7', 'Nhận diện đúng sản phẩm, màu, giá', 'Tư vấn size theo số đo khách', 'Xử lý băn khoăn: chất liệu, đổi trả', 'Chủ động kêu gọi chốt đơn'] },
      { title: 'AI Agent tự động lên đơn và gửi sang đơn vị vận chuyển', desc: 'Tiết kiệm hơn 90% thời gian xử lý đơn.',
        kws: ['Thu đủ tên, SĐT, địa chỉ', 'Gửi tin xác nhận đơn đầy đủ', 'Tự tạo đơn, đẩy sang đơn vị vận chuyển', 'Tự cập nhật trạng thái giao hàng'] },
      { title: 'AI tự động bám đuổi khách hàng trong 7 ngày', desc: 'Tăng thêm khoảng 35% tỷ lệ chốt đơn.',
        kws: ['~65% khách nhắn tin rồi im lặng', 'Nhắc đúng sản phẩm khách đã xem', 'Mỗi ngày 1 tin, kèm ưu đãi đúng lúc', 'Kéo khách quay lại chốt đơn'] },
      { title: 'AI tự động chăm sóc khách hàng sau bán', desc: 'Tăng doanh thu từ khách hàng cũ.',
        kws: ['Hỏi thăm sau khi khách nhận hàng', 'Gợi ý sản phẩm hợp với đơn đã mua', 'Gửi mẫu mới, ưu đãi riêng khách cũ', 'Khách mua lại, tăng giá trị vòng đời'] },
      { title: 'Bộ công cụ Remarketing FMM và ZBS', desc: 'Khai thác hiệu quả dữ liệu khách hàng.',
        kws: ['AI tự phân loại và gắn thẻ khách', 'Mini CRM lưu toàn bộ dữ liệu khách', 'Gửi chiến dịch qua Messenger và Zalo', 'Khách cũ quay lại mua tiếp'] },
      { title: 'AI tự động gửi sự kiện mua hàng qua Meta CAPI', desc: 'Hỗ trợ tối ưu quảng cáo Facebook.',
        kws: ['Gửi sự kiện mua hàng + giá trị đơn về Meta', 'Meta tối ưu quảng cáo theo người mua thật', 'Hướng tới giảm chi phí mỗi đơn (CPO)'] },
    ],

    steps: [
      { intro: true, hold: 3500 },

      /* ---- 1. Khách hỏi, AI trả lời tức thì và tư vấn ---- */
      { feature: 1 },
      { sep: 'Khách nhắn tin từ quảng cáo Facebook', style: 'time', hold: 1200 },
      { img: 'polo-den' },
      { kh: 'Shop ơi mẫu này còn không ạ?' },
      { ai: 'Dạ còn hàng ạ anh! Em gửi anh thông tin mẫu này nha 🥰', fast: true, meta: '⚡ Preny AI trả lời sau 2 giây', kw: 0 },
      { ai: 'Đây là **Áo Polo Cotton Classic** màu Đen, giá **317.600đ** (đang giảm 20%), freeship toàn quốc ạ.', kw: 1 },
      { ai: 'Anh cho em xin chiều cao, cân nặng để em tư vấn size chuẩn cho mình nha.' },
      { kh: '1m72, 68kg em' },
      { ai: 'Dạ với 1m72 – 68kg anh mặc **size L** là vừa đẹp, form suông thoải mái ạ.', kw: 2 },
      { kh: 'Vải có nóng không em? Mặc không vừa có đổi được không?' },
      { ai: 'Dạ áo vải **cotton cá sấu 100%**, thấm hút tốt, mặc mùa hè không bí ạ. Shop **đổi size miễn phí trong 7 ngày** nếu anh mặc không vừa nha.', kw: 3 },
      { ai: 'Size L màu đen chỉ còn 4 áo thôi ạ. Anh chốt 1 áo để em giữ hàng cho mình luôn nha? 😊', kw: 4 },
      { kh: 'Để anh suy nghĩ thêm đã' },
      { wait: 1500 },

      /* ---- 3. Khách im lặng, AI bám đuổi ---- */
      { feature: 3 },
      { sep: 'Khách chưa phản hồi…', style: 'silent', kw: 0, hold: 3000 },
      { sep: '— 1 ngày sau —' },
      { aiImg: 'polo-den' },
      { ai: 'Anh Minh ơi, mẫu **Polo Cotton Classic màu Đen size L** anh xem hôm qua em vẫn đang giữ cho anh nè. Anh còn băn khoăn gì về chất vải hay size không ạ?', meta: '🔁 Tự động · Bám đuổi ngày 1', kw: 1 },
      { sep: '— 2 ngày sau —' },
      { ai: 'Hôm nay shop **tặng 1 đôi tất cổ ngắn** cho đơn áo polo, ưu đãi chỉ đến 23h tối nay thôi ạ 🎁', meta: '🔁 Tự động · Bám đuổi ngày 2', kw: 2 },
      { kh: 'Ok lấy anh 1 áo size L nha', kw: 3 },
      { wait: 1500 },

      /* ---- 2. AI tự lên đơn, gửi vận chuyển ---- */
      { feature: 2 },
      { ai: 'Dạ tuyệt quá ạ! Anh cho em xin **tên, SĐT và địa chỉ** nhận hàng nha.', kw: 0 },
      { kh: 'Trần Minh – 0901 234 567\n456 Cao Thắng, P. Hòa Hưng, TP.HCM' },
      { card: {
          tag: '✓ Tin xác nhận đơn',
          intro: 'Dạ anh Minh kiểm tra lại đơn hàng giúp em nhé:',
          lines: ['1 Áo Polo Cotton Classic, Đen, size L: 317.600đ', 'Quà tặng: 1 đôi tất cổ ngắn', 'Tổng cộng: **317.600đ** (freeship)', 'Người nhận: Trần Minh', 'SĐT: 0901 234 567', 'Địa chỉ: 456 Cao Thắng, P. Hòa Hưng, TP.HCM'],
          outro: 'Anh xác nhận giúp em đơn này nha.',
          button: 'Quản lý đơn hàng',
        }, kw: 1 },
      { kh: 'Ok em' },
      { card: {
          tag: '✓ Đã tạo đơn & gửi vận chuyển', ok: true,
          intro: 'Em đã lên đơn cho anh rồi ạ:',
          lines: ['Mã đơn: **#SM24118**', 'Đã chuyển cho đơn vị vận chuyển', 'Mã vận đơn: **VD58210473**', 'Dự kiến giao: 1–2 ngày'],
        }, kw: 2, hold: 6000 },
      { sep: '— 1 ngày sau —' },
      { ai: '📦 Đơn **#SM24118** của anh đang được giao, dự kiến tới tay anh chiều nay ạ. Anh để ý điện thoại giúp em nha!', meta: '🚚 Tự động · Cập nhật vận chuyển', kw: 3 },
      { wait: 1500 },

      /* ---- 4. Chăm sóc sau bán ---- */
      { feature: 4 },
      { sep: '— 3 ngày sau —' },
      { ai: 'Anh Minh ơi, áo polo mặc có vừa ý anh không ạ? Nếu cần đổi size anh cứ nhắn em nha 💜', meta: '💜 Tự động · Chăm sóc sau bán', kw: 0 },
      { kh: 'Áo đẹp, mặc vừa lắm em 👍' },
      { sep: '— 1 tuần sau —' },
      { ai: 'Tuần này shop có mẫu mới **phối cực hợp với áo polo đen** anh đã mua nè. Khách cũ được **giảm thêm 10%** ạ:', kw: 1 },
      { catalog: [
          { name: 'Quần Kaki Jogger', color: 'Be', price: '350.100đ', old: '389.000đ', tag: 'Mới về', art: 'kaki-be' },
          { name: 'Áo Polo Classic', color: 'Trắng', price: '251.100đ', old: '279.000đ', tag: 'Bán chạy', art: 'polo-trang' },
          { name: 'Áo Polo Classic', color: 'Xám', price: '251.100đ', old: '279.000đ', tag: '-10%', art: 'polo-xam' },
        ], kw: 2 },
      { kh: 'Lấy thêm anh quần kaki be size 31 nha' },
      { ai: 'Dạ em lên đơn ngay cho anh, giao về địa chỉ cũ **456 Cao Thắng** nha anh ✅', kw: 3 },
      { wait: 1500 },

      /* ---- 5. Remarketing FMM & ZBS ---- */
      { feature: 5 },
      { screen: { title: 'Preny · Mini CRM', sub: 'Dữ liệu khách hàng của shop' } },
      { tags: { title: 'AI tự gắn thẻ theo nội dung chat', tags: [
          { t: 'Hỏi giá chưa mua', n: '1.248', c: 'amber' },
          { t: 'Đã đặt hàng', n: '863', c: 'green' },
          { t: 'Khách cũ có thể mua lại', n: '412', c: 'purple' },
          { t: 'Cần tư vấn thêm', n: '157', c: 'blue' },
        ] }, kw: 0, hold: 4500 },
      { customers: { title: 'Khách hàng', rows: [
          { name: 'Trần Minh', note: '2 đơn · Polo đen, Kaki be', tag: 'Khách cũ', c: 'purple' },
          { name: 'Lê Thu Lan', note: 'Hỏi váy đen size M', tag: 'Hỏi giá chưa mua', c: 'amber' },
          { name: 'Phạm Quốc Huy', note: 'Hỏi giá áo sơ mi trắng', tag: 'Hỏi giá chưa mua', c: 'amber' },
        ] }, kw: 1, hold: 5000 },
      { campaign: { title: 'Tạo chiến dịch remarketing', name: 'Flash sale cuối tuần −15%', audience: 'Hỏi giá chưa mua · 1.248 khách',
          channels: [{ t: 'Messenger · FMM', k: 'mess' }, { t: 'Zalo · ZBS', k: 'zalo' }], button: 'Gửi chiến dịch' }, kw: 2, hold: 5000 },
      { status: { tag: '✓ Đã gửi chiến dịch', ok: true, lines: ['Đã gửi **1.248** tin qua Messenger và Zalo', 'Nhóm khách: Hỏi giá chưa mua'] }, hold: 3500 },
      { screen: 'chat' },
      { sep: 'Tin nhắn chiến dịch · Messenger', style: 'time', hold: 1000 },
      { aiImg: 'vay-den' },
      { ai: '🔥 **Flash sale cuối tuần −15%** cho mẫu váy đen chị Lan đã hỏi! Size M chỉ còn 3 chiếc thôi ạ.', meta: '📣 Tự động · Chiến dịch FMM' },
      { kh: 'Còn thì lấy chị 1 váy size M nha', kw: 3 },
      { wait: 1500 },

      /* ---- 6. Meta CAPI ---- */
      { feature: 6 },
      { screen: { title: 'Preny · Meta CAPI', sub: 'Sự kiện chuyển đổi gửi về Meta' } },
      { flow: { i: 1, text: 'Khách nhấp quảng cáo Facebook' } },
      { flow: { i: 2, text: 'AI tư vấn và chốt đơn' } },
      { flow: { i: 3, text: 'Hệ thống tự tạo đơn' } },
      { flow: { i: 4, text: 'Gửi sự kiện **Purchase** + giá trị đơn về Meta', hl: 'key' }, kw: 0, hold: 3200 },
      { flow: { i: 5, text: 'Meta tối ưu quảng cáo theo người mua thật', hl: 'ok' }, kw: 1, hold: 3200 },
      { status: { tag: '✓ Đã gửi về Meta', ok: true,
          lines: ['Purchase · **317.600đ** · Trần Minh', 'Purchase · **350.100đ** · Trần Minh', 'Purchase · **237.150đ** · Lê Thu Lan'],
          outro: 'Quảng cáo học từ đơn thật, hướng tới **giảm CPO**.' }, kw: 2, hold: 6500 },
      { wait: 1000 },

      /* ---- Kết thúc ---- */
      { end: true },
      { screen: { title: 'Preny AI', sub: 'Giải pháp AI bán hàng tự động' } },
      { endcard: { title: 'Tăng tỷ lệ chốt đơn với **Preny AI**',
          sub: 'Chốt đơn, lên đơn, bám đuổi, chăm sóc khách cũ, remarketing và tối ưu quảng cáo trong một hệ thống.',
          button: 'Đăng ký dùng thử miễn phí', contact: '**preny.ai** · Hotline 0389 647 778' }, hold: 9000 },
    ],
  };
})();
