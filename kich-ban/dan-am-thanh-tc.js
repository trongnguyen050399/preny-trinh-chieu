/* Kịch bản: DÀN ÂM THANH — BẢN TRÌNH CHIẾU, nhóm CÂN NHẮC NHIỀU. Làm 19/11/2026 theo người dùng:
   "dàn âm thanh (cân nhắc nhiều, mời khách tới cửa hàng trải nghiệm để chốt sale)".
   "AI chốt đơn = lấy tên + SĐT + hẹn khách tới showroom nghe thử": nhân viên showroom chốt dàn tại cửa hàng, gửi sự kiện Lead
   (không gửi Purchase khi khách chưa mua).
   Demo chat 1 khách từ đầu tới cuối (khớp Bài 2 video ngang, demo/bai2/kich-ban-dan-am-thanh-tc.js):
   anh Tuấn bấm quảng cáo combo dàn karaoke gia đình, hỏi giá → AI báo giá tham khảo từ 28.900.000đ, gửi đúng ảnh quảng cáo
   → hỏi diện tích phòng → phòng khách chung cư 25m², karaoke + nghe nhạc, tầm 30 triệu, sợ ồn hàng xóm, hỏi có cần cách âm,
   so với bộ 15 triệu trên mạng → AI chọn loa theo diện tích phòng, không phải cách âm cả phòng (kỹ thuật viên chỉnh âm lượng, bass),
   không chê bên khác: nghe tận tai mới chọn đúng → mời mang USB nhạc quen tới phòng nghe thử, xin tên + SĐT → khách im
   → bám đuổi 5 tin (phòng nghe thử, feedback khách chung cư, bảo hành chính hãng + CO CQ + kỹ thuật viên, quy trình nghe thử →
   khảo sát → lắp, mời giữ giờ thứ Bảy) → khách hẹn 9h thứ Bảy 28/11 → chuyển anh Khánh · Showroom → sau khi lắp: hỏi thăm,
   mẹo chỉnh micro, echo; mời kiểm tra dàn định kỳ; ưu đãi micro không dây cho khách quen.
   Không có tin nhắc trước giờ hẹn nghe thử (Preny chưa có tính năng này).
   Showroom, giá, khách, SĐT, feedback, nhân viên: dữ liệu minh họa. Ảnh: Unsplash (ảnh thật, không phải showroom của khách). */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'phong-nghe': '1609263842618-006cd27e5431',   // phòng nghe thử hi-end, 2 loa cột, amply
    'cua-hang': '1776083760846-e7faea00a6e2',     // cửa hàng nhiều loa, thiết bị âm thanh
    'loa-cot': '1595432541891-a461100d3054',      // cặp loa cột đứng
    'loa-bookshelf': '1545454675-3531b543be5d',   // loa bookshelf gỗ
    'loa-den': '1531104985437-603d6490e6d4',      // loa đen trên bàn
    'loa-trang': '1609702847389-b8aec1b0b929',    // loa trắng và đen cận cảnh
    'loa-go': '1786875950828-d15928cd2772',       // loa vân gỗ
    'mang-loa': '1597183739841-5ca26ab0a604',     // cận cảnh màng loa
    'loa-chong': '1724858103797-6d388eb1006a',    // nhiều loa xếp chồng
    'micro': '1507676184212-d03ab07a01bf',        // micro trong phòng tiệc
    'amply': '1574199960812-3bb320659f3f',        // amply / bàn trộn có núm vặn
    'loa-xem': '1590783609742-82564b33e5fd',      // loa cận cảnh
    'nhieu-loa': '1645536729479-83c35cb5411d',    // nhiều loa trên bàn
    'hat-karaoke': '1706381078164-9cd97457c582',  // nhóm bạn người Việt hát micro
    'phong-khach': '1770513649169-d69855f991a0',  // phòng khách có tivi, cây xanh
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    badge: 'AI CHATBOT · DÀN ÂM THANH',
    shop: { name: 'Âm Thanh An Phúc', initials: 'AP' },
    headline: { pre: 'AI chatbot tư vấn dàn âm thanh và', em: 'mời khách tới nghe thử' },
    sub: 'Tư vấn theo diện tích phòng, không chê bên khác, xin SĐT và giữ giờ phòng nghe thử; nhân viên showroom chốt dàn tại chỗ.',
    cta: 'Dùng thử miễn phí tại **preny.ai**\nHotline **0389 647 778**',
    speed: 1.13,
    timing: { read0: 1000, readPerChar: 28, readMax: 4500, type0: 800, typePerChar: 3, typeMax: 1500, fastType: 500,
              featureHold: 1400, sepHold: 1100, cardHold: 4000, introCard: 250 },

    images: Object.fromEntries(Object.entries(IMG).map(([k, id]) => [k, U(id)])),

    // Cột trái demo ngang (dùng khi xuất video khung ngang), đúng thứ tự diễn trong steps
    features: [
      { title: 'AI tư vấn đúng phòng, đúng nhu cầu', desc: 'Trả lời ngay, hiểu cả tin viết tắt.',
        kws: ['Báo giá tham khảo, gửi đúng ảnh quảng cáo', 'Hỏi diện tích phòng, xử lý lo ồn chung cư', 'Không chê bên khác: nghe tận tai mới chọn đúng'] },
      { title: 'Bám đuổi khách cân nhắc lâu', desc: 'Showroom nằm đầu danh sách khi khách chọn.',
        kws: ['Khách chưa cho SĐT: tự gắn thẻ #dankaraoke', 'Ảnh phòng nghe thử, feedback khách chung cư', 'Bảo hành chính hãng, CO CQ, kỹ thuật viên', 'Quy trình rõ, mời giữ giờ cuối tuần'] },
      { title: 'AI xin SĐT, giữ giờ nghe thử', desc: 'Khách nóng chuyển ngay cho showroom.',
        kws: ['Cho khách lý do để cho số: giữ phòng nghe thử', 'Lưu khách, gắn thẻ, dặn mang USB nhạc', 'Chuyển anh Khánh · Showroom gọi xác nhận'] },
      { title: 'AI chăm sóc sau khi lắp dàn', desc: 'Tăng tỷ lệ khách quay lại.',
        kws: ['Hỏi thăm âm thanh, mẹo chỉnh micro, echo', 'Mời kiểm tra dàn định kỳ miễn phí', 'Ưu đãi micro hợp đúng dàn khách'] },
    ],

    steps: [
      { intro: true, hold: 1800 },

      /* ---- 1. Tư vấn: giá tham khảo + ảnh quảng cáo → diện tích phòng → lo ồn chung cư, so bộ rẻ trên mạng → mời nghe thử ---- */
      { feature: 1 },
      { sep: 'Khách bấm Gửi tin nhắn từ quảng cáo Facebook', style: 'time', hold: 800 },
      { kh: 'Dàn karaoke gia đình này giá bao nhiêu vậy em?' },
      { ai: 'Dạ chào anh Tuấn, combo dàn karaoke gia đình gồm **loa, amply, micro không dây** giá **từ 28.900.000đ** ạ.', fast: true, meta: '⚡ Preny AI trả lời sau 2 giây', kw: 0 },
      { aiImg: 'loa-cot' },
      { ai: 'Phòng anh định đặt dàn rộng khoảng bao nhiêu m² ạ? Loa phải hợp diện tích phòng thì tiếng mới hay.' },
      { kh: 'phòng khách chung cư tầm 25m2, hát karaoke vs nghe nhạc, tầm 30tr. sợ ồn hàng xóm, có phải làm cách âm ko e? trên mạng có bộ 15tr thôi' },
      { ai: 'Dạ phòng 25m² dùng **combo 28.900.000đ** là vừa, không cần loa to ạ. Chung cư thì **không phải cách âm cả phòng**, kỹ thuật viên chỉnh **âm lượng, bass** cho gọn tiếng là được.', kw: 1 },
      { ai: 'Bộ trên mạng em không dám nói hay dở, loa thì **nghe tận tai mới chọn đúng** ạ. Anh mang **USB nhạc quen** tới **phòng nghe thử** bên em so cả hai nha, chưa cần mua gì. Anh cho em xin **tên và SĐT** để giữ giờ ạ 🎶', kw: 2 },
      { seen: true },

      /* ---- 2. Khách im → bám đuổi 5 tin trong 7 ngày ---- */
      { feature: 2 },
      { sep: 'Khách chưa để lại SĐT… · AI gắn thẻ #dankaraoke #ChungCu25m2', style: 'silent', kw: 0, hold: 1600 },
      { sep: '— 15 phút sau —' },
      { ai: 'Anh Tuấn ơi, em gửi anh vài hình **phòng nghe thử** bên em nha 🎶', meta: '🎶 Tự động · Bám đuổi', kw: 1 },
      { aiImgs: [{ img: 'phong-nghe', label: 'Phòng nghe thử' }, { img: 'cua-hang', label: 'Showroom' },
                 { img: 'amply', label: 'Amply, vang số' }, { img: 'loa-chong', label: 'Loa trưng bày' }], hold: 3200 },
      { sep: '— 1 ngày sau —' },
      { card: {
          tag: '⭐ Feedback khách hàng',
          intro: 'Đây là chia sẻ của một anh khách ở chung cư bên em ạ 💬',
          lines: ['“Phòng khách nhà mình tầm 24m². Mang USB tới nghe thử 3 bộ rồi mới chọn, kỹ thuật viên lên nhà chỉnh bass gọn, hát buổi tối hàng xóm không phàn nàn.”', 'Anh Quốc Huy, chung cư Q.7', '(Âm thanh tùy phòng và cách lắp của từng nhà)'],
        }, meta: '🎶 Tự động · Bám đuổi', kw: 1, hold: 4200 },
      { sep: '— 1 ngày sau —' },
      { card: {
          tag: '✓ Hàng chính hãng · Âm Thanh An Phúc',
          intro: 'Bên em có đủ giấy tờ để anh yên tâm ạ:',
          lines: ['Hàng chính hãng, có **CO, CQ** đầy đủ', '**Bảo hành chính hãng**, phiếu ghi rõ từng món', '**Kỹ thuật viên** lắp đặt, chỉnh âm tận nhà'],
        }, meta: '🎶 Tự động · Bám đuổi', kw: 2, hold: 4000 },
      { sep: '— 1 ngày sau —' },
      { ai: 'Quy trình bên em là **nghe thử → khảo sát tại nhà → lắp, chỉnh âm**, anh ưng mới mua, không ép ạ 😊 Kỹ thuật viên **khảo sát tại nhà miễn phí**.', meta: '🎶 Tự động · Bám đuổi', kw: 3 },
      { sep: '— 2 ngày sau —' },
      { ai: 'Thứ Bảy này phòng nghe thử còn vài khung giờ, anh muốn em giữ một giờ cho anh mang USB tới nghe không ạ?', meta: '🎶 Tự động · Bám đuổi', kw: 3 },
      { kh: 'Sáng t7 này a qua được, giữ giúp a 1 giờ nha' },

      /* ---- 3. Khách quay lại → xin tên + SĐT, giữ giờ phòng nghe thử → chuyển nhân viên showroom ---- */
      { feature: 3 },
      { ai: 'Dạ được ạ, **thứ Bảy 28/11** còn khung **9h** và **10h30**. Anh cho em xin **tên và SĐT** để giữ phòng nghe thử nha 🎶', fast: true, kw: 0 },
      { kh: 'Tuấn, 0903 618 275, 9h nha e' },
      { card: {
          tag: '✓ Đã giữ phòng nghe thử · anh Tuấn', ok: true,
          lines: ['Thời gian: **9h00 thứ Bảy 28/11/2026**', 'Nghe thử combo karaoke bằng **USB nhạc của anh**', 'Tư vấn chỗ đặt loa cho phòng khách 25m²', 'Địa điểm: **Phòng nghe thử, Showroom An Phúc**'],
        }, meta: '✓ Đã lưu khách, gắn thẻ #dankaraoke #ChungCu25m2', kw: 1, hold: 4200 },
      { ai: '**Anh Khánh bên showroom** sẽ gọi anh xác nhận liền nha. Hôm đó anh mang theo vài bài anh hay hát là được ạ 🎤', meta: '✓ Đã chuyển anh Khánh · Showroom', kw: 2, hold: 1500 },

      /* ---- 4. Sau khi mua và lắp: hỏi thăm, mẹo chỉnh micro → mời kiểm tra định kỳ → ưu đãi micro khách quen ---- */
      { feature: 4 },
      { sep: '— Ngày 3/12 · sau khi lắp dàn tại nhà —' },
      { ai: 'Anh Tuấn ơi, dàn karaoke mới hát thấy sao rồi ạ? Micro bị hú thì anh hạ **echo**, đừng chĩa micro vào loa nha 🎤', meta: '🎤 Tự động · Chăm sóc sau khi lắp', kw: 0 },
      { kh: 'Hát ok lắm e, tối qua cả nhà hát tới 9h 😄' },
      { sep: '— Ngày 6/3 · 3 tháng sau khi lắp —' },
      { ai: 'Dàn của anh dùng được 3 tháng rồi, kỹ thuật viên ghé **kiểm tra, chỉnh lại âm miễn phí** cho anh nha. Anh muốn em xếp lịch ngày nào ạ?', meta: '📅 Tự động · Mời kiểm tra định kỳ', kw: 1 },
      { kh: 'Chủ nhật tuần sau nha e' },
      { ai: 'Dạ em xếp lịch rồi ạ. Khách quen đang được **giảm 20% micro không dây** để song ca, kỹ thuật viên mang theo cho anh thử luôn nha 🎶', kw: 2 },
      // Không có { end: true }: bấm → thêm một lần là sang thẳng slide kế.
    ],

    /* ===== Nội dung slide trình chiếu (trinh-chieu.html). Slide thống kê dùng số minh họa (deck.dashboard). ===== */
    deck: {
      /* Demo chat dọc (demo-doc.js): bài đăng → 1 bình luận → quảng cáo combo karaoke (bấm Gửi tin nhắn)
         → Messenger với anh Tuấn (tư vấn, bám đuổi, giữ giờ nghe thử, chăm sóc sau khi lắp) → màn kết.
         Không có màn Meta CAPI vì cảnh cuối đứng sau 3 tháng (slide 13 đã có Lead). */
      demoDoc: {
        khach: 'Tuấn Phạm',
        sanPham: 'Dàn karaoke gia đình · Nghe thử miễn phí',
        ngay: '18/11/2026',
        gio: '14:46',
        binhLuan: [
          { ten: 'Lê Hoàng', noiDung: 'Phòng 35m² hát karaoke thì cần loa cỡ nào vậy shop?', traLoi: 'Dạ showroom vừa nhắn tin tư vấn chi tiết cho anh, anh xem inbox nha!' },
        ],
        post: {
          tieuDe: 'DÀN KARAOKE GIA ĐÌNH · NGHE THỬ MIỄN PHÍ 🎤',
          dong: ['Phòng nghe thử cách âm', 'Mang nhạc của bạn tới nghe', 'Bảo hành chính hãng', 'Khảo sát, lắp đặt tận nhà'],
          anh: ['loa-cot', 'phong-nghe', 'hat-karaoke', 'amply'],
        },
        quangCao: {
          tieuDe: 'DÀN KARAOKE GIA ĐÌNH · NGHE THỬ MIỄN PHÍ',
          mo: 'Loa, amply, micro không dây từ 28.900.000đ. Mời anh chị tới phòng nghe thử trước khi chọn.',
          anh: 'loa-cot', nhan: 'MESSENGER', dong: 'Tư vấn 24/7 · Giữ giờ phòng nghe thử', nut: 'Gửi tin nhắn',
        },
        ket: {
          tieuDe: 'PRENY AI – TƯ VẤN DÀN ÂM THANH, MỜI KHÁCH TỚI NGHE THỬ',
          y: ['Trả lời ngay 24/7', 'Tư vấn theo diện tích phòng', 'Không chê bên khác, không hứa bừa', 'Lấy SĐT, giữ giờ phòng nghe thử',
              'Bám đuổi 5 tin trong 7 ngày', 'Báo ngay nhân viên showroom', 'Chăm sóc sau khi lắp qua Zalo', 'Meta CAPI Lead'],
        },
      },
      /* Pipeline mới (TRINH-CHIEU.md mục 1): dashboard, chatbot (lead = AI chốt là lấy SĐT + hẹn nghe thử), afterSale. */
      dashboard: [
        { ten: 'Dàn <span class="grad">karaoke gia đình</span>', den: '21/07/2026', khach: 12, tyLe: 0.55 },
        { ten: 'Loa <span class="grad">nghe nhạc hi-end</span>', den: '18/08/2026', khach: 6, tyLe: 0.53 },
        { ten: 'Âm thanh <span class="grad">quán, phòng hát</span>', den: '26/09/2026', khach: 8, tyLe: 0.57 },
      ],
      chatbot: {
        y: [
          ['Trả lời ngay tức thì, 24/7', 'Khách nhắn lúc nào, AI trả lời sau 2 giây'],
          ['Tư vấn đúng phòng, đúng nhu cầu', 'Hỏi diện tích, chung cư hay nhà phố'],
          ['Chốt đơn = lấy SĐT + hẹn nghe thử', 'Giữ giờ phòng nghe thử, chuyển showroom'],
          ['Hiểu hình ảnh khách gửi', 'Khách gửi ảnh phòng, AI gợi ý chỗ đặt loa'],
        ],
        chat: [
          { ref: { img: L(IMG['loa-cot']), ten: 'Dàn karaoke gia đình · Nghe thử miễn phí' } },
          { kh: 'phòng khách chung cư 25m2, muốn dàn karaoke tầm 30tr. sợ ồn hàng xóm, có cần cách âm ko e?' },
          {
            ai: 'Dạ phòng 25m² dùng **combo karaoke gia đình từ 28.900.000đ** là vừa, không cần loa to ạ. Chung cư **không phải cách âm cả phòng**, kỹ thuật viên chỉnh **âm lượng, bass** cho gọn tiếng là được 🎶',
            meta: '⚡ Preny AI trả lời sau 2 giây',
          },
          { kh: 'trên mạng có bộ 15tr, khác gì e?' },
          {
            ai: 'Dạ em không dám nói hay dở, loa thì **nghe tận tai mới chọn đúng** ạ. Anh mang **USB nhạc quen** tới **phòng nghe thử** so cả hai nha. Anh cho em xin **tên, SĐT** để giữ giờ ạ.',
          },
          { kh: 'Tuấn - 0903 618 275. sáng t7 28/11 a qua dc ko e?' },
          { ai: 'Dạ được ạ! Em giữ phòng nghe thử **9h thứ Bảy 28/11** cho anh, anh Khánh bên showroom gọi xác nhận liền nha ⚡' },
          { don: true },
          { ok: true },
        ],
        lead: {
          ten: 'Anh Tuấn',
          sdt: '0903 618 275',
          nhuCau: 'Phòng khách chung cư **25m²** · karaoke + nghe nhạc · ngân sách **khoảng 30 triệu** · sợ ồn hàng xóm',
          the: [['FB Ads · Dàn karaoke gia đình', 'ng'], ['#dankaraoke', 'qt'], ['#ChungCu25m2', 'qt'], ['Đã cho SĐT', 'ht']],
          lichNhan: 'Lịch nghe thử',
          lich: ['Nghe thử', '09:00 · Thứ Bảy 28/11'],
          sale: 'Anh Khánh · Showroom',
          nut: 'Chuyển cho showroom',
          xong: 'Đã chuyển cho anh Khánh',
          okTieuDe: 'Đã giữ giờ nghe thử 28/11',
        },
        anh: {
          img: L(IMG['phong-khach']),
          nhan: 'Khách gửi ảnh phòng khách',
          kh: 'Phòng a như này đặt loa chỗ nào cho hay e?',
          ai: 'Ảnh anh gửi là phòng khách có **kệ tivi sát tường** ạ. Cặp loa nên đặt **2 bên tivi**, cách tường sau khoảng **30–50cm** cho bass gọn, đỡ dội. Kỹ thuật viên **khảo sát tại nhà miễn phí** để chốt vị trí cho anh nha.',
          pill: '🔍 AI nhìn ảnh phòng, gợi ý đúng chỗ đặt loa',
        },
      },
      afterSale: {
        y1: 'AI gửi tiếp 5 món đi kèm dàn để bán thêm',
        y2: 'Loa mới về, ưu đãi micro, kiểm tra dàn định kỳ',
        gio: 'Nhân viên showroom vừa chốt dàn cho anh Tuấn',
        don: { ma: '#AP28112', phi: 'lắp đặt miễn phí', sp: [{ ten: 'Combo dàn karaoke gia đình', sl: 1, dv: 'bộ', gia: 28900000 }] },
        loi: 'Cảm ơn anh Tuấn đã chọn Âm Thanh An Phúc 🎶 Kỹ thuật viên sẽ lắp, chỉnh âm tận nhà cho anh. Khách dùng combo này hay thêm mấy món này ạ:',
        sp: [
          { img: L(IMG['micro']), ten: 'Micro không dây thêm để song ca', gia: 3900000, cu: 4500000, nut: 'Thêm vào' },
          { img: L(IMG['amply']), ten: 'Vang số chống hú, chỉnh echo', gia: 4500000, nut: 'Thêm vào' },
          { img: L(IMG['loa-bookshelf']), ten: 'Cặp loa bookshelf nghe nhạc', gia: 6900000, nut: 'Nghe thử' },
          { img: L(IMG['loa-den']), ten: 'Chân loa chống rung, giảm dội sàn', gia: 850000, nut: 'Thêm vào' },
          { img: L(IMG['loa-chong']), ten: 'Gói bảo dưỡng dàn 12 tháng', gia: 1200000, nut: 'Đăng ký' },
        ],
        khach: 'Lấy thêm cho a cặp chân loa chống rung với 1 micro nữa nha',
        pill: '🛍 Khách thêm ngay: đơn tăng từ 28.900.000đ lên 33.650.000đ',
        fmm: {
          sep: '1 tháng sau · tin Facebook FMM',
          chao: 'Chào anh Tuấn 👋 Showroom vừa về mẫu loa mới, mời anh ghé phòng nghe thử nha!',
          img: L(IMG['loa-go']),
          nhan: 'HÀNG MỚI VỀ',
          ten: 'Loa vân gỗ nghe nhạc',
          mo: 'Khách cũ giảm 10%, nghe thử miễn phí tại showroom.',
          nut: 'Xem sản phẩm',
        },
        zbs: {
          ten: 'Ưu đãi micro cho anh Tuấn',
          mo: 'Cảm ơn anh đã chọn dàn karaoke ở An Phúc. Gửi anh ưu đãi micro hợp đúng dàn của anh:',
          dong: [
            ['Mã ưu đãi', '**ANPHUC20**'],
            ['Ưu đãi', 'Giảm 20% micro không dây'],
            ['Hạn dùng', '30/04/2027'],
          ],
          nut: 'Dùng ưu đãi',
        },
      },
      tieuDe6: 'Hệ thống AI chatbot giúp tăng<br><span class="grad">tỷ lệ chốt lịch nghe thử</span>',
      // Không lên đơn tự động (khách nghe thử tại showroom rồi nhân viên mới chốt dàn) → 5 tính năng
      tinhNang: [
        ['AI tư vấn, chủ động mời nghe thử', 'Lấy SĐT, giữ giờ phòng nghe thử'],
        ['Bám đuổi khách cân nhắc lâu', 'Gửi phòng nghe thử, khách thật'],
        ['AI chăm sóc khách sau khi lắp', 'Hỏi thăm, mời kiểm tra dàn định kỳ'],
        ['Bộ công cụ Remarketing FMM và ZBS', 'Khai thác lại dữ liệu khách cũ'],
        ['Gửi sự kiện Lead qua Meta CAPI', 'Hỗ trợ tối ưu quảng cáo Facebook'],
      ],

      chotDon: {
        nganh: 'dàn âm thanh',
        nguoi: 'Nhân viên showroom',
        chotLa: 'AI chốt đơn = lấy SĐT + hẹn nghe thử',
        buoc: [
          { t: 'Chạy quảng cáo', d: 'Thu hút khách muốn mua dàn', icon: 'megaphone', own: 'Showroom chạy quảng cáo', mock: 'ad', img: L(IMG['loa-cot']), text: 'Dàn karaoke gia đình, nghe thử miễn phí 🎤', btn: 'Gửi tin nhắn' },
          { t: 'Bắt đầu chat', d: 'Hỏi diện tích phòng, nhu cầu nghe', icon: 'chat', ai: true, mock: 'chat',
            msgs: [['kh', 'Dàn karaoke này giá sao em?'], ['ai', 'Dạ từ 28.900.000đ ạ. Phòng anh rộng bao nhiêu m²? 🎶']] },
          { t: 'Mời tới nghe thử', d: 'Lấy SĐT, giữ giờ phòng nghe thử', icon: 'phone', ai: true, chot: true, mock: 'form', fields: ['Anh Tuấn · chung cư 25m², karaoke', '0903 618 275'], ok: 'Đã giữ giờ 28/11' },
          { t: 'Showroom gọi xác nhận', d: 'Xác nhận giờ, dặn mang USB nhạc', icon: 'call', mock: 'lich', ten: 'Phòng nghe thử', gio: '09:00 · Thứ Bảy 28/11', ok: 'Đã xác nhận lịch' },
          { t: 'Nghe thử tại showroom', d: 'Nghe bằng nhạc khách mang tới', icon: 'users', mock: 'img', img: L(IMG['phong-nghe']), cap: 'Khách nghe thử ở phòng cách âm' },
          { t: 'Chốt dàn, lắp đặt', d: 'Khảo sát nhà, lắp và chỉnh âm', icon: 'check', mock: 'img', img: L(IMG['amply']), cap: '✓ Khách chốt combo karaoke' },
        ],
        vong: { t: 'Chăm sóc sau lắp & Remarketing', d: 'Hỏi thăm âm thanh, mời kiểm tra dàn định kỳ, gửi ưu đãi micro, loa mới về' },
      },

      bamDuoi: {
        nhan: 'Vì sao bám đuổi của Preny đặc biệt', shopB: 'Showroom B',
        cmpSai: ['Khách im → gửi “Anh còn quan tâm dàn âm thanh không ạ?”', 'Không biết khách cần dàn gì, vì sao im', 'Khách thấy phiền, bỏ qua tin nhắn'],
        cmpDung: ['Khách nhắn xong im → nhắc đúng dàn khách hỏi (thẻ <b>#dankaraoke</b> từ quảng cáo)',
                  'Báo giá xong im → bám đuổi theo giá: quà tặng, lắp miễn phí (thẻ <b>#baogia</b>)',
                  'Đúng nhu cầu, đúng lý do im → khách quay lại hẹn nghe thử'],
        hoi: 'Dàn karaoke gia đình giá sao em?',
        traLoiThuong: 'Dạ từ 28.900.000đ ạ.',
        nhacChung: 'Anh còn quan tâm dàn âm thanh không ạ? 😊',
        refImg: L(IMG['loa-cot']), refTen: 'Dàn karaoke gia đình',
        vd1: {
          ten: 'Khách nhắn xong im',
          kh: 'Phòng 25m² chung cư dùng dàn nào vậy em?',
          ai: 'Dạ phòng 25m² dùng combo karaoke gia đình là vừa ạ. Anh hát nhiều hay nghe nhạc nhiều hơn ạ?',
          tag: '🏷 #dankaraoke', tagNote: 'thẻ từ quảng cáo · khách im 1 ngày',
          nhac: 'Anh Tuấn ơi, em gửi anh <b>ảnh phòng nghe thử</b> bên em nè 🎶 Anh mang <b>USB nhạc quen</b> tới nghe combo karaoke cho phòng 25m² nha, chưa cần mua gì ạ.',
          dung: '🎯 Theo thẻ #dankaraoke: nhắc đúng dàn khách hỏi',
          khach: 'Cuối tuần a ghé được ko e?',
        },
        vd2: {
          ten: 'Báo giá xong im',
          kh: 'Dàn karaoke gia đình giá sao em?',
          ai: 'Dạ combo gồm loa, amply, micro không dây <b>từ 28.900.000đ</b> ạ.',
          tag: '🏷 #baogia', tagNote: 'báo giá xong khách im 2 ngày',
          nhac: 'Anh ơi, tháng này mua combo karaoke được <b>tặng chân loa chống rung</b>, kỹ thuật viên <b>khảo sát, lắp tận nhà miễn phí</b> ạ. Em giữ giờ nghe thử thứ Bảy cho anh nha?',
          dung: '🎯 Theo thẻ #baogia: bám đuổi theo giá, đúng lý do khách im',
          khach: 'Ok giữ giúp a sáng t7',
        },
      },

      binhLuan: {
        post: '<b>Nghe thử miễn phí</b> ở phòng cách âm, mang nhạc của bạn tới so loa 🎶 Combo karaoke gia đình từ 28.900.000đ',
        img: L(IMG['hat-karaoke']),
        kav: 'LH', kten: 'Lê Hoàng', hoi: 'Nhà phố phòng khách 35m² hát karaoke thì cần loa cỡ nào vậy shop?',
        traLoi: 'Dạ chào anh Hoàng! Showroom vừa nhắn tin tư vấn chi tiết cho anh, anh xem tin nhắn nhé 💬',
        act2: 'Nhắn riêng, mời tới nghe thử',
        nhan: 'Chào anh Hoàng! Phòng <b>35m²</b> nên dùng loa bass lớn hơn bản chung cư một chút ạ. Anh ghé <b>phòng nghe thử</b> so 2–3 bộ bằng nhạc anh hay hát nha. Anh cho em xin SĐT để giữ giờ ạ!',
        sp: { ten: 'Nghe thử dàn karaoke', gia: 'Miễn phí · giữ giờ trước', img: L(IMG['phong-nghe']) },
        khach: 'Số anh 0977 254 813 nhé',
      },

      duLieu: {
        shopA: 'Showroom A',
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: cam kết không ồn, bảo hành trọn đời', 'Khách khiếu nại, showroom mất uy tín'],
        dung: ['Chỉ trả lời theo dữ liệu showroom cung cấp', 'Không chắc chắn → xin khách chờ, AI tạm dừng', 'Báo ngay nhân viên showroom vào trả lời'],
        hoi: 'Lắp dàn này ở chung cư có cam kết hàng xóm không nghe thấy không em? Bảo hành mấy năm?',
        aiSai: 'Dạ <b>cam kết hàng xóm không nghe thấy</b> ạ, dàn được <b>bảo hành trọn đời</b> luôn anh 🥰',
        thucTe: '⚠ Thực tế: độ ồn tùy tường, giờ hát, âm lượng; bảo hành theo từng thiết bị, không có trọn đời',
        gian: 'Mới hát tối qua hàng xóm đã sang gõ cửa, loa rè thì bảo hết bảo hành! Sao nói trọn đời? 😠',
        cho: 'Dạ anh chờ em một chút để em kiểm tra chính xác thông tin cho mình nhé!',
        nv: 'Anh Khánh · Showroom · người thật',
        nvTraLoi: 'Dạ bảo hành theo phiếu của từng thiết bị ạ, bên em ghi rõ trong phiếu. Kỹ thuật viên ghé chỉnh lại âm lượng, bass cho gọn tiếng miễn phí, anh hẹn giờ giúp em nhé!',
      },

      tags: {
        rows: [
          { ten: 'Phạm Minh Tuấn', av: 'MT', kenh: 'fb', msg: 'Phòng 25m² chung cư dùng dàn nào e?', gio: '14:47',
            tags: [['FB Ads · Dàn karaoke gia đình', 'ng'], ['#dankaraoke', 'qt'], ['#ChungCu25m2', 'qt'], ['Hẹn nghe thử 28/11', 'ht']] },
          { ten: 'Lê Hoàng', av: 'LH', kenh: 'fb', msg: 'Phòng 35m² cần loa cỡ nào?', gio: '10:12',
            tags: [['Bình luận bài viết', 'ng'], ['#karaokegiadinh', 'qt'], ['Đã cho SĐT', 'ht'], ['Gọi lần 1 ✓', 'sa']] },
          { ten: 'Trần Thu Ngân', av: 'TN', kenh: 'tiktok', msg: 'Có loa nghe nhạc vinyl không shop?', gio: '16:30',
            tags: [['TikTok · Video phòng nghe thử', 'ng'], ['#LoaNgheNhac', 'qt'], ['Đã cho SĐT', 'ht'], ['Gọi lần 2 · không bắt máy', 'sa']] },
          { ten: 'Đỗ Minh Khôi', av: 'MK', kenh: 'zalo', msg: 'Quán cafe 60m² lắp loa trần được ko?', gio: '09:05',
            tags: [['Zalo OA', 'ng'], ['#AmThanhQuan', 'qt'], ['Đang bám đuổi', 'ht']] },
          { ten: 'Vũ Thanh Hải', av: 'TH', kenh: 'zalo', msg: 'Thêm 1 micro không dây nhé', gio: 'Hôm qua',
            tags: [['Zalo · Khách cũ', 'ng'], ['#MicroKhongDay', 'qt'], ['Đã mua dàn', 'ht'], ['Đã kết nối Zalo', 'za']] },
        ],
        chanDung: {
          ten: 'Phạm Minh Tuấn', av: 'MT', kenh: 'fb', sub: 'Facebook Messenger · 0903 618 275',
          nhom: [
            ['Nguồn khách', [['Facebook Ads', 'ng'], ['Bài: Dàn karaoke gia đình', 'ng']]],
            ['Quan tâm', [['#dankaraoke', 'qt'], ['#ChungCu25m2', 'qt']]],
            ['Hành trình', [['Nhắn tin 18/11', 'ht'], ['Cho SĐT 23/11', 'ht'], ['Hẹn nghe thử 28/11', 'ht']]],
            ['Sale gọi', [['Anh Khánh · lần 1 ✓', 'sa']]],
            ['Kết nối', [['Đã kết nối Zalo', 'za'], ['Khách mới · L1', 'lv']]],
          ],
          ghiChu: 'Chung cư, phòng khách 25m², karaoke + nghe nhạc, tầm 30 triệu. Sợ ồn hàng xóm, đang so bộ 15 triệu trên mạng. Hẹn nghe thử 9h thứ Bảy 28/11.',
        },
      },

      chotLai: [
        ['KHÁCH HÀNG', ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến']],
        ['AI CHATBOT', ['Phản hồi nhanh tức thì', 'Tư vấn theo diện tích phòng', 'Không chê bên khác, không hứa bừa', 'Lấy SĐT, mời tới nghe thử']],
        ['BÁM ĐUỔI', ['Gửi 5 tin nhắn trong 7 ngày: phòng nghe thử, khách thật, bảo hành, quy trình']],
        ['HẸN NGHE THỬ',['Khách nghe bằng nhạc của mình', 'Nhân viên showroom chốt dàn']],
        ['MUA LẠI', ['Mời kiểm tra dàn định kỳ, gửi ưu đãi micro, loa qua FB và Zalo']],
      ],
    },
  };
})();
