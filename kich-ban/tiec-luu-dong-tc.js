/* Kịch bản: NẤU CỖ, TIỆC LƯU ĐỘNG — BẢN TRÌNH CHIẾU, nhóm CÂN NHẮC NHIỀU. Làm 20/11/2026 theo yêu cầu khách thật
   (đơn vị nấu cỗ, tiệc lưu động ở Hà Nội): "Chatbot trực page, trả lời tin nhắn, tư vấn thực đơn, menu, dịch vụ phù hợp,
   xin tên, SĐT, thời gian, địa điểm đặt tiệc, thông báo tới nhân viên vào kiểm tra lại và xác nhận".
   "AI chốt đơn = lấy tên + SĐT + ngày giờ + địa điểm tiệc": nhân viên điều phối gọi xác nhận, khảo sát địa điểm, chốt thực đơn,
   nhận cọc; gửi sự kiện Lead (không gửi Purchase khi khách chưa đặt cọc).
   Demo chat 1 khách từ đầu tới cuối (khớp Bài 2 video ngang, demo/bai2/kich-ban-tiec-luu-dong-tc.js):
   chị Lan bấm quảng cáo nấu cỗ tại nhà, hỏi giá → AI báo thực đơn mâm 6 từ 1.490.000đ, gửi đúng ảnh quảng cáo
   → hỏi dịp gì, bao nhiêu mâm, ở đâu → mừng thọ bố 70 tuổi, 12 mâm, tại nhà trong ngõ Long Biên ô tô không vào được,
   có 1 mâm chay, ngân sách khoảng 1,6 triệu/mâm → AI gợi ý thực đơn Mừng thọ 1.590.000đ, mâm chay cùng giá, xe nhỏ chở đồ vào ngõ,
   trọn gói bàn ghế, rạp, bát đĩa, phục vụ, dọn rửa; giá chốt sau khi khảo sát → xin tên, SĐT, ngày giờ, địa chỉ → khách im
   → bám đuổi 5 tin (ảnh mâm cỗ thật, feedback gia đình làm mừng thọ, đầu bếp + nguyên liệu, quy trình, mời giữ ngày)
   → khách giữ trưa Chủ nhật 13/12 → báo chị Thu · Điều phối tiệc gọi xác nhận
   → sau tiệc: cảm ơn, xin đánh giá; mời đặt cỗ tất niên, cỗ Tết; ưu đãi khách quen.
   Không có tin nhắc trước ngày tiệc (Preny chưa có tính năng này).
   Tên đơn vị, giá, thực đơn, khách, SĐT, feedback, nhân viên: dữ liệu minh họa. Ảnh: Unsplash (ảnh thật, không phải tiệc của khách). */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'mam-co': '1793345243332-1de3e20b8814',      // mâm cỗ Việt: tôm, gà, cá, rau (ảnh quảng cáo)
    'mam-co-2': '1699670425934-b30d13e63fea',    // mâm cỗ nhiều món, chiếu đỏ
    'mam-com': '1754542074715-1abd310e7851',     // mâm cơm Việt nhiều món
    'ban-tiec': '1710186012500-68dd1e3e49f5',    // cả nhà quây quần bên mâm cỗ
    'rap-tiec': '1780682569879-f271082ae2cd',    // rạp trắng, bàn ghế đỏ
    'rap-trang': '1780682571078-242672d1dd59',   // rạp trên bãi cỏ
    'buffet': '1555244162-803834f70033',         // bàn buffet nồi hâm inox
    'buffet-rau': '1783949397986-87d4fbf2fbea',  // bàn buffet salad, hoa quả
    'dau-bep': '1661505300208-9f0857553690',     // đầu bếp bày món
    'nem': '1695712641569-05eee7b37b6d',         // nem rán trên lá chuối
    'ga': '1617636423451-0db0119c14cd',          // gà quay nguyên con
    'trang-tri': '1511795409834-ef04bbd61622',   // bàn tiệc trang trí hoa
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    badge: 'AI CHATBOT · NẤU CỖ, TIỆC LƯU ĐỘNG',
    shop: { name: 'Cỗ Lưu Động Hồng Phúc', initials: 'HP' },
    headline: { pre: 'AI chatbot trực page, tư vấn thực đơn và', em: 'lấy thông tin đặt tiệc' },
    sub: 'Hỏi đúng dịp, số mâm, địa điểm; gợi ý thực đơn hợp ngân sách; xin tên, SĐT, ngày giờ, địa chỉ rồi báo ngay nhân viên xác nhận.',
    cta: 'Dùng thử miễn phí tại **preny.ai**\nHotline **0389 647 778**',
    speed: 1.13,
    timing: { read0: 1000, readPerChar: 28, readMax: 4500, type0: 800, typePerChar: 3, typeMax: 1500, fastType: 500,
              featureHold: 1400, sepHold: 1100, cardHold: 4000, introCard: 250 },

    images: Object.fromEntries(Object.entries(IMG).map(([k, id]) => [k, U(id)])),

    // Cột trái demo ngang (dùng khi xuất video khung ngang), đúng thứ tự diễn trong steps
    features: [
      { title: 'AI trực page, tư vấn thực đơn', desc: 'Trả lời ngay, cả lúc nửa đêm.',
        kws: ['Báo giá mâm, gửi đúng ảnh quảng cáo', 'Hỏi dịp gì, bao nhiêu mâm, ở đâu', 'Gợi ý thực đơn hợp ngân sách, có mâm chay'] },
      { title: 'Bám đuổi khách cân nhắc lâu', desc: 'Đơn vị nằm đầu danh sách khi khách chọn.',
        kws: ['Khách chưa cho SĐT: tự gắn thẻ #mungtho', 'Ảnh mâm cỗ thật, feedback gia đình', 'Đầu bếp, nguyên liệu tươi trong ngày', 'Quy trình rõ, mời giữ ngày'] },
      { title: 'AI lấy thông tin đặt tiệc', desc: 'Báo ngay nhân viên vào xác nhận.',
        kws: ['Tên, SĐT, ngày giờ, địa chỉ, số mâm', 'Lưu khách, gắn thẻ dịp tiệc', 'Chuyển chị Thu · Điều phối tiệc'] },
      { title: 'AI chăm sóc khách sau tiệc', desc: 'Khách quay lại đặt tiệc tiếp.',
        kws: ['Cảm ơn, xin đánh giá sau tiệc', 'Mời đặt cỗ tất niên, cỗ Tết', 'Ưu đãi riêng cho khách quen'] },
    ],

    steps: [
      { intro: true, hold: 1800 },

      /* ---- 1. Tư vấn: giá mâm + ảnh quảng cáo → dịp, số mâm, địa điểm → ngõ nhỏ, mâm chay, ngân sách → xin thông tin ---- */
      { feature: 1 },
      { sep: 'Khách bấm Gửi tin nhắn từ quảng cáo Facebook', style: 'time', hold: 800 },
      { kh: 'Nấu cỗ tại nhà bên em bao nhiêu 1 mâm vậy?' },
      { ai: 'Dạ chào chị Lan, thực đơn **mâm 6 người** bên em từ **1.490.000đ/mâm**, đã gồm nấu tại chỗ và phục vụ ạ.', fast: true, meta: '⚡ Preny AI trả lời sau 2 giây', kw: 0 },
      { aiImg: 'mam-co' },
      { ai: 'Chị đặt tiệc **dịp gì**, khoảng **bao nhiêu mâm** và làm **ở đâu** ạ, để em gợi ý thực đơn cho hợp?' },
      { kh: 'mừng thọ bố c 70t, tầm 12 mâm, làm ở nhà trong ngõ Long Biên, ngõ nhỏ ô tô k vào đc. có 1 mâm ăn chay. tầm 1tr6/mâm thôi e' },
      { ai: 'Dạ mừng thọ thì chị tham khảo **thực đơn Mừng thọ 1.590.000đ/mâm** nha: gà ta luộc lá chanh, nem rán, tôm sú hấp, chân giò hầm, xôi gấc… 10 món. **Mâm chay** bên em nấu riêng, cùng giá ạ.', kw: [1, 2] },
      { ai: 'Ngõ nhỏ không sao chị, bên em có **xe nhỏ chở đồ vào ngõ**, trọn gói bàn ghế, rạp, bát đĩa, phục vụ, dọn rửa. Chị cho em xin **tên, SĐT, ngày giờ và địa chỉ** để bên em khảo sát miễn phí, gửi báo giá chốt nha 😊', kw: 2 },
      { seen: true },

      /* ---- 2. Khách im → bám đuổi 5 tin trong 7 ngày ---- */
      { feature: 2 },
      { sep: 'Khách chưa để lại SĐT… · AI gắn thẻ #mungtho #12mam', style: 'silent', kw: 0, hold: 1600 },
      { sep: '— 15 phút sau —' },
      { ai: 'Chị Lan ơi, em gửi chị ảnh **mâm cỗ và rạp tiệc thật** bên em làm tuần trước nha 🍲', meta: '🍲 Tự động · Bám đuổi', kw: 1 },
      { aiImgs: [{ img: 'mam-co-2', label: 'Mâm cỗ 10 món' }, { img: 'rap-tiec', label: 'Rạp tiệc tại nhà' },
                 { img: 'nem', label: 'Nem rán nóng' }, { img: 'ban-tiec', label: 'Cả nhà quây quần' }], hold: 3200 },
      { sep: '— 1 ngày sau —' },
      { card: {
          tag: '⭐ Feedback khách hàng',
          intro: 'Đây là chia sẻ của một gia đình vừa làm mừng thọ bên em ạ 💬',
          lines: ['“Nhà mình ngõ bé, 15 mâm mà các bạn vào dựng rạp gọn gàng. Món nóng, vừa miệng, các cụ khen mãi. Tiệc xong dọn sạch trơn.”', 'Chị Thanh Hương, Gia Lâm'],
        }, meta: '🍲 Tự động · Bám đuổi', kw: 1, hold: 4200 },
      { sep: '— 1 ngày sau —' },
      { card: {
          tag: '✓ Cỗ Lưu Động Hồng Phúc',
          intro: 'Bên em nấu thế này để chị yên tâm ạ:',
          lines: ['**Đầu bếp hơn 10 năm** nấu cỗ, nấu tại chỗ nên món luôn nóng', '**Nguyên liệu tươi mua trong ngày**, có hóa đơn nguồn gốc', 'Trọn gói **bàn ghế, rạp, bát đĩa, phục vụ, dọn rửa**'],
        }, meta: '🍲 Tự động · Bám đuổi', kw: 2, hold: 4000 },
      { sep: '— 1 ngày sau —' },
      { ai: 'Quy trình bên em: **chốt ngày → khảo sát địa điểm miễn phí → chốt thực đơn, đặt cọc → nấu, phục vụ, dọn dẹp**. Chị chưa ưng thì chưa phải cọc ạ 😊', meta: '🍲 Tự động · Bám đuổi', kw: 3 },
      { sep: '— 2 ngày sau —' },
      { ai: 'Tháng 12 lịch cỗ cuối năm kín dần rồi chị, Chủ nhật 13/12 bên em còn nhận thêm 1 đám. Chị muốn em giữ ngày cho nhà mình không ạ?', meta: '🍲 Tự động · Bám đuổi', kw: 3 },
      { kh: 'Giữ giúp c trưa CN 13/12 nhé e' },

      /* ---- 3. Khách quay lại → xin tên, SĐT, giờ, địa chỉ → báo nhân viên xác nhận ---- */
      { feature: 3 },
      { ai: 'Dạ em giữ **trưa Chủ nhật 13/12** cho nhà mình ạ. Chị cho em xin **tên, SĐT, giờ khai tiệc và địa chỉ** cụ thể nha 🍲', fast: true, kw: 0 },
      { kh: 'Lan, 0983 517 264. 11h trưa, số 18 ngõ 72 Ngọc Lâm, Long Biên. 11 mâm mặn 1 mâm chay' },
      { card: {
          tag: '✓ Đã giữ ngày tiệc · chị Lan', ok: true,
          lines: ['Tiệc mừng thọ: **11h trưa Chủ nhật 13/12/2026**', 'Số 18 ngõ 72 Ngọc Lâm, Long Biên · ngõ nhỏ, xe nhỏ vào', '**11 mâm mặn + 1 mâm chay**, thực đơn Mừng thọ 1.590.000đ/mâm', 'Trọn gói bàn ghế, rạp, phục vụ · **khảo sát miễn phí**'],
        }, meta: '✓ Đã lưu khách, gắn thẻ #mungtho #12mam', kw: 1, hold: 4200 },
      { ai: '**Chị Thu bên điều phối tiệc** sẽ gọi chị xác nhận và hẹn giờ qua khảo sát nhà mình liền nha ạ 🍲', meta: '✓ Đã báo chị Thu · Điều phối tiệc', kw: 2, hold: 1500 },

      /* ---- 4. Sau tiệc: cảm ơn, xin đánh giá → mời đặt cỗ tất niên, Tết → ưu đãi khách quen ---- */
      { feature: 4 },
      { sep: '— Tối 13/12 · sau tiệc mừng thọ —' },
      { ai: 'Chị Lan ơi, cảm ơn nhà mình đã tin tưởng Hồng Phúc ạ. Các cụ ăn có vừa miệng không chị? Chị chấm giúp em **vài sao** để bên em làm tốt hơn nha 💛', meta: '💛 Tự động · Chăm sóc sau tiệc', kw: 0 },
      { kh: 'Ngon lắm e, ông bà khen mãi, dọn cũng sạch 😍' },
      { sep: '— 2 tuần sau —' },
      { ai: 'Sắp tất niên rồi chị, bên em nhận **cỗ tất niên, cỗ cúng Tết** tại nhà. Khách quen như chị được **giảm 5%, tặng mâm hoa quả** ạ. Nhà mình có định làm không chị?', meta: '📅 Tự động · Mời đặt tiệc', kw: 1 },
      { kh: 'Công ty c đang tìm chỗ tất niên 20 mâm, để c giới thiệu nhé' },
      { ai: 'Dạ em cảm ơn chị nhiều ạ! Chị gửi em số người phụ trách, em báo chị Thu gọi tư vấn thực đơn tất niên luôn nha 🍲', kw: 2 },
      // Không có { end: true }: bấm → thêm một lần là sang thẳng slide kế.
    ],

    /* ===== Nội dung slide trình chiếu (trinh-chieu.html). Slide thống kê dùng số minh họa (deck.dashboard). ===== */
    deck: {
      /* Demo chat dọc (demo-doc.js): bài đăng → 1 bình luận → quảng cáo nấu cỗ tại nhà (bấm Gửi tin nhắn)
         → Messenger với chị Lan (tư vấn, bám đuổi, giữ ngày, chăm sóc sau tiệc) → màn kết. */
      demoDoc: {
        khach: 'Ngọc Lan',
        sanPham: 'Nấu cỗ tại nhà · mâm 6 người',
        ngay: '18/11/2026',
        gio: '14:46',
        binhLuan: [
          { ten: 'Đỗ Minh Tuấn', noiDung: 'Công ty 30 mâm tất niên có nhận không?', traLoi: 'Dạ bên em vừa nhắn tin tư vấn chi tiết cho anh, anh xem inbox nha!' },
        ],
        post: {
          tieuDe: 'NẤU CỖ TẠI NHÀ · TRỌN GÓI A–Z 🍲',
          dong: ['Mâm 6 người từ 1.490.000đ', 'Nấu tại chỗ, món luôn nóng', 'Bàn ghế, rạp, phục vụ, dọn rửa', 'Khảo sát địa điểm miễn phí'],
          anh: ['mam-co', 'rap-tiec', 'mam-co-2', 'dau-bep'],
        },
        quangCao: {
          tieuDe: 'NẤU CỖ TẠI NHÀ · TRỌN GÓI A–Z',
          mo: 'Mừng thọ, thôi nôi, tân gia, tất niên. Mâm 6 người từ 1.490.000đ, nấu tại chỗ, trọn gói bàn ghế, rạp, phục vụ.',
          anh: 'mam-co', nhan: 'MESSENGER', dong: 'Tư vấn 24/7 · Khảo sát miễn phí', nut: 'Gửi tin nhắn',
        },
        ket: {
          tieuDe: 'PRENY AI – TRỰC PAGE, TƯ VẤN THỰC ĐƠN, LẤY THÔNG TIN ĐẶT TIỆC',
          y: ['Trả lời ngay 24/7', 'Hỏi đúng dịp, số mâm', 'Gợi ý thực đơn hợp ngân sách', 'Lấy tên, SĐT, ngày, địa chỉ',
              'Bám đuổi 5 tin trong 7 ngày', 'Báo ngay nhân viên xác nhận', 'Chăm sóc sau tiệc qua Zalo', 'Meta CAPI Lead'],
        },
      },
      /* Pipeline mới (TRINH-CHIEU.md mục 1): dashboard, chatbot (lead = AI chốt là lấy thông tin đặt tiệc), afterSale. */
      dashboard: [
        { ten: 'Cỗ <span class="grad">mừng thọ, tân gia</span>', den: '20/07/2026', khach: 16, tyLe: 0.58 },
        { ten: 'Tiệc <span class="grad">liên hoan công ty</span>', den: '24/08/2026', khach: 11, tyLe: 0.55 },
        { ten: 'Tiệc <span class="grad">thôi nôi, buffet</span>', den: '29/09/2026', khach: 9, tyLe: 0.54 },
      ],
      chatbot: {
        y: [
          ['Trả lời ngay tức thì, 24/7', 'Khách nhắn lúc nào, AI trả lời sau 2 giây'],
          ['Tư vấn đúng thực đơn', 'Hỏi dịp tiệc, số mâm, ngân sách, mâm chay'],
          ['Chốt đơn = lấy thông tin đặt tiệc', 'Tên, SĐT, ngày giờ, địa chỉ → báo nhân viên'],
          ['Hiểu hình ảnh khách gửi', 'Khách gửi ảnh mâm cỗ, AI nhận ra món'],
        ],
        chat: [
          { ref: { img: L(IMG['mam-co']), ten: 'Nấu cỗ tại nhà · mâm 6 người' } },
          { kh: 'mừng thọ bố c 70t, tầm 12 mâm, nhà trong ngõ nhỏ Long Biên. có 1 mâm chay' },
          {
            ai: 'Dạ chị tham khảo **thực đơn Mừng thọ 1.590.000đ/mâm**, 10 món ạ. **Mâm chay** nấu riêng cùng giá, ngõ nhỏ bên em có **xe nhỏ chở đồ vào** 🍲',
            meta: '⚡ Preny AI trả lời sau 2 giây',
          },
          { kh: 'có bàn ghế, rạp luôn k e?' },
          {
            ai: 'Dạ trọn gói **bàn ghế, rạp, bát đĩa, phục vụ, dọn rửa** ạ. Chị cho em xin **tên, SĐT, ngày giờ, địa chỉ** để khảo sát miễn phí nha.',
          },
          { kh: 'Lan - 0983 517 264. 11h trưa CN 13/12, số 18 ngõ 72 Ngọc Lâm' },
          { ai: 'Dạ em giữ ngày **13/12** cho nhà mình rồi ạ, chị Thu bên điều phối tiệc gọi xác nhận liền nha ⚡' },
          { don: true },
          { ok: true },
        ],
        lead: {
          ten: 'Chị Lan',
          sdt: '0983 517 264',
          nhuCau: 'Mừng thọ bố 70 tuổi · **12 mâm** (1 mâm chay) · tại nhà, **ngõ nhỏ** ô tô không vào · ngân sách ~1,6 triệu/mâm',
          the: [['FB Ads · Nấu cỗ tại nhà', 'ng'], ['#mungtho', 'qt'], ['#12mam', 'qt'], ['Đã cho SĐT', 'ht']],
          lichNhan: 'Ngày tiệc',
          lich: ['Số 18 ngõ 72 Ngọc Lâm', '11:00 · Chủ nhật 13/12'],
          sale: 'Chị Thu · Điều phối tiệc',
          nut: 'Báo nhân viên',
          xong: 'Đã báo chị Thu',
          okTieuDe: 'Đã giữ ngày tiệc 13/12',
        },
        anh: {
          img: L(IMG['mam-com']),
          nhan: 'Khách gửi ảnh mâm cỗ trên mạng',
          kh: 'Làm được mâm như này k e?',
          ai: 'Ảnh chị gửi có **rau xà lách, thịt kho, gà rang, nem**, kiểu mâm cơm gia đình ạ. Bên em làm được, thực đơn tương tự khoảng **1.490.000đ/mâm 6 người**, chị muốn thêm món nào em báo đầu bếp nha.',
          pill: '🔍 AI nhìn ảnh mâm cỗ, nhận ra từng món',
        },
      },
      afterSale: {
        y1: 'AI gửi tiếp 5 dịch vụ thêm cho tiệc',
        y2: 'Cỗ tất niên, cỗ Tết, ưu đãi khách quen',
        gio: 'Nhân viên vừa chốt tiệc cho chị Lan',
        don: { ma: '#HP1312', phi: 'miễn phí khảo sát, vận chuyển', sp: [{ ten: 'Thực đơn Mừng thọ mâm 6 người', sl: 12, dv: 'mâm', gia: 1590000 }] },
        loi: 'Cảm ơn chị Lan đã đặt tiệc mừng thọ ở Hồng Phúc 💛 Nhiều gia đình đặt thêm mấy món này cho tiệc trọn vẹn hơn ạ:',
        sp: [
          { img: L(IMG['trang-tri']), ten: 'Phông, hoa trang trí mừng thọ', gia: 1500000, nut: 'Thêm vào' },
          { img: L(IMG['ga']), ten: 'Thêm món gà quay mật ong (mâm)', gia: 180000, nut: 'Thêm vào' },
          { img: L(IMG['buffet-rau']), ten: 'Mâm hoa quả tráng miệng', gia: 150000, cu: 180000, nut: 'Thêm vào' },
          { img: L(IMG['nem']), ten: 'Thêm đĩa nem rán (mâm)', gia: 90000, nut: 'Thêm vào' },
          { img: L(IMG['rap-trang']), ten: 'Nâng cấp rạp trắng có rèm', gia: 2200000, nut: 'Xem thêm' },
        ],
        khach: 'Lấy thêm c phông trang trí với 12 mâm hoa quả nha',
        pill: '🛍 Khách thêm ngay: đơn tăng từ 19.080.000đ lên 22.380.000đ',
        fmm: {
          sep: '2 tuần sau · tin Facebook FMM',
          chao: 'Chào chị Lan 👋 Hồng Phúc vừa ra thực đơn cỗ tất niên, cỗ cúng Tết 2027, gửi chị xem trước nha!',
          img: L(IMG['mam-co-2']),
          nhan: 'CỖ TẾT 2027',
          ten: 'Thực đơn tất niên, cỗ cúng Tết',
          mo: 'Khách quen giảm 5%, tặng mâm hoa quả.',
          nut: 'Xem thực đơn',
        },
        zbs: {
          ten: 'Ưu đãi khách quen cho chị Lan',
          mo: 'Cảm ơn chị đã đặt tiệc ở Hồng Phúc. Gửi chị ưu đãi cho bữa tiệc tiếp theo:',
          dong: [
            ['Mã ưu đãi', '**HONGPHUC5**'],
            ['Ưu đãi', 'Giảm 5% tiệc từ 5 mâm, tặng mâm hoa quả'],
            ['Hạn dùng', '28/02/2027'],
          ],
          nut: 'Dùng ưu đãi',
        },
      },
      tieuDe6: 'Hệ thống AI chatbot giúp tăng<br><span class="grad">tỷ lệ chốt lịch đặt tiệc</span>',
      // Nấu cỗ: không lên đơn tự động (nhân viên xác nhận, khảo sát, nhận cọc) → 5 tính năng
      tinhNang: [
        ['AI trực page, tư vấn thực đơn', 'Lấy tên, SĐT, ngày giờ, địa chỉ'],
        ['Bám đuổi khách cân nhắc lâu', 'Gửi mâm cỗ thật, feedback gia đình'],
        ['AI chăm sóc khách sau tiệc', 'Xin đánh giá, mời đặt tiệc tiếp'],
        ['Bộ công cụ Remarketing FMM và ZBS', 'Khai thác lại dữ liệu khách cũ'],
        ['Gửi sự kiện Lead qua Meta CAPI', 'Hỗ trợ tối ưu quảng cáo Facebook'],
      ],

      chotDon: {
        nganh: 'nấu cỗ, tiệc lưu động',
        nguoi: 'Nhân viên điều phối',
        chotLa: 'AI chốt đơn = lấy thông tin đặt tiệc',
        buoc: [
          { t: 'Chạy quảng cáo', d: 'Thu hút gia đình, công ty cần đặt tiệc', icon: 'megaphone', own: 'Đơn vị chạy quảng cáo', mock: 'ad', img: L(IMG['mam-co']), text: 'Nấu cỗ tại nhà, trọn gói A–Z 🍲', btn: 'Gửi tin nhắn' },
          { t: 'Bắt đầu chat', d: 'Hỏi dịp tiệc, số mâm, địa điểm', icon: 'chat', ai: true, mock: 'chat',
            msgs: [['kh', 'Nấu cỗ bao nhiêu 1 mâm e?'], ['ai', 'Dạ mâm 6 người từ 1.490.000đ ạ. Chị đặt dịp gì, bao nhiêu mâm ạ? 🍲']] },
          { t: 'Lấy thông tin tiệc', d: 'Tên, SĐT, ngày giờ, địa chỉ', icon: 'phone', ai: true, chot: true, mock: 'form', fields: ['Chị Lan · mừng thọ 12 mâm', '0983 517 264 · CN 13/12'], ok: 'Đã giữ ngày 13/12' },
          { t: 'Nhân viên xác nhận', d: 'Gọi lại, hẹn khảo sát địa điểm', icon: 'call', mock: 'lich', ten: 'Khảo sát nhà chị Lan', gio: '16:00 · Thứ Bảy 28/11', ok: 'Đã xác nhận lịch' },
          { t: 'Khảo sát, chốt thực đơn', d: 'Xem ngõ, chỗ dựng rạp, chốt món', icon: 'users', mock: 'img', img: L(IMG['rap-tiec']), cap: 'Khảo sát chỗ dựng rạp' },
          { t: 'Đặt cọc, nấu cỗ', d: 'Nhận cọc, nấu và phục vụ tại nhà', icon: 'check', mock: 'img', img: L(IMG['ban-tiec']), cap: '✓ Tiệc mừng thọ 12 mâm' },
        ],
        vong: { t: 'Chăm sóc sau tiệc & Remarketing', d: 'Xin đánh giá, mời đặt cỗ tất niên, cỗ Tết, gửi ưu đãi khách quen' },
      },

      bamDuoi: {
        nhan: 'Vì sao bám đuổi của Preny đặc biệt', shopB: 'Đơn vị B',
        cmpSai: ['Khách im → gửi “Chị còn quan tâm đặt cỗ không ạ?”', 'Không biết khách đặt dịp gì, bao nhiêu mâm', 'Khách thấy phiền, bỏ qua tin nhắn'],
        cmpDung: ['Khách nhắn xong im → nhắc đúng dịp tiệc khách hỏi (thẻ <b>#mungtho</b> từ cuộc chat)',
                  'Báo giá xong im → bám đuổi theo giá: khảo sát miễn phí, tặng hoa quả (thẻ <b>#baogia</b>)',
                  'Đúng nhu cầu, đúng lý do im → khách quay lại giữ ngày tiệc'],
        hoi: 'Nấu cỗ bao nhiêu 1 mâm vậy em?',
        traLoiThuong: 'Dạ từ 1.490.000đ/mâm ạ.',
        nhacChung: 'Chị còn quan tâm đặt cỗ không ạ? 😊',
        refImg: L(IMG['mam-co']), refTen: 'Nấu cỗ tại nhà · mâm 6 người',
        vd1: {
          ten: 'Khách nhắn xong im',
          kh: 'Làm mừng thọ ở nhà trong ngõ nhỏ có được không em?',
          ai: 'Dạ được ạ, bên em có xe nhỏ chở đồ vào ngõ. Nhà mình khoảng bao nhiêu mâm ạ?',
          tag: '🏷 #mungtho', tagNote: 'thẻ từ cuộc chat · khách im 1 ngày',
          nhac: 'Chị Lan ơi, em gửi chị <b>feedback một gia đình làm mừng thọ 15 mâm</b> trong ngõ nhỏ bên em nè 🍲 Bên em <b>khảo sát nhà miễn phí</b> trước khi báo giá ạ.',
          dung: '🎯 Theo thẻ #mungtho: nhắc đúng dịp tiệc khách hỏi',
          khach: 'Nhà c tầm 12 mâm e',
        },
        vd2: {
          ten: 'Báo giá xong im',
          kh: 'Thực đơn mừng thọ bao nhiêu 1 mâm em?',
          ai: 'Dạ thực đơn Mừng thọ 10 món <b>1.590.000đ/mâm</b> ạ.',
          tag: '🏷 #baogia', tagNote: 'báo giá xong khách im 2 ngày',
          nhac: 'Chị ơi, đặt tiệc từ 10 mâm trong tháng này bên em <b>tặng mâm hoa quả tráng miệng</b>, khảo sát miễn phí ạ. Em giữ ngày cho nhà mình nha?',
          dung: '🎯 Theo thẻ #baogia: bám đuổi theo giá, đúng lý do khách im',
          khach: 'Giữ giúp c CN 13/12',
        },
      },

      binhLuan: {
        post: '<b>Nấu cỗ tại nhà</b> mâm 6 người từ 1.490.000đ · trọn gói bàn ghế, rạp, phục vụ, dọn rửa 🍲',
        img: L(IMG['mam-co-2']),
        kav: 'MT', kten: 'Đỗ Minh Tuấn', hoi: 'Công ty mình 30 mâm tất niên ở sân công ty, có nhận không?',
        traLoi: 'Dạ chào anh Tuấn! Bên em vừa nhắn tin tư vấn chi tiết cho anh, anh xem tin nhắn nhé 💬',
        act2: 'Nhắn riêng, tư vấn tiệc tất niên',
        nhan: 'Chào anh Tuấn! Bên em nhận tiệc <b>30 mâm tại sân công ty</b>, có rạp, bàn ghế, sân khấu nhỏ ạ. Thực đơn tất niên từ <b>1.490.000đ/mâm</b>. Anh cho em xin SĐT, ngày tiệc và địa chỉ để bên em khảo sát miễn phí nha!',
        sp: { ten: 'Tiệc tất niên công ty', gia: 'từ 1.490.000đ/mâm', img: L(IMG['rap-tiec']) },
        khach: 'Số mình 0904 618 392, tiệc 15/1 nhé',
      },

      duLieu: {
        shopA: 'Đơn vị A',
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: 1 triệu/mâm đã gồm rạp, bia nước', 'Khách nhận báo giá khác lời hứa, mất uy tín'],
        dung: ['Chỉ trả lời theo dữ liệu đơn vị cung cấp', 'Không chắc chắn → xin khách chờ, AI tạm dừng', 'Báo ngay nhân viên điều phối vào trả lời'],
        hoi: 'Em báo chốt luôn 1 triệu/mâm đã gồm rạp, bia nước được không? 12 mâm thì miễn phí hết nhé?',
        aiSai: 'Dạ được ạ! <b>1 triệu/mâm trọn gói</b> cả rạp, bia nước luôn chị, 12 mâm <b>miễn phí hết</b> ạ 🥰',
        thucTe: '⚠ Thực tế: thực đơn từ 1.490.000đ/mâm; đồ uống tính riêng, giá chốt sau khi khảo sát địa điểm',
        gian: 'Báo giá gửi về 1tr5 một mâm, bia nước tính riêng! Sao hôm trước nói 1 triệu trọn gói? 😠',
        cho: 'Dạ chị chờ em một chút để em kiểm tra chính xác thông tin cho mình nhé!',
        nv: 'Chị Thu · Điều phối tiệc · người thật',
        nvTraLoi: 'Dạ em xin lỗi chị ạ. Thực đơn bên em từ 1.490.000đ/mâm, đã gồm rạp, bàn ghế, phục vụ; đồ uống tính riêng. Em gửi chị 2 thực đơn hợp ngân sách và tặng mâm hoa quả để chị chọn nhé!',
      },

      tags: {
        rows: [
          { ten: 'Phạm Ngọc Lan', av: 'NL', kenh: 'fb', msg: 'Nấu cỗ bao nhiêu 1 mâm vậy?', gio: '14:47',
            tags: [['FB Ads · Nấu cỗ tại nhà', 'ng'], ['#mungtho', 'qt'], ['#12mam', 'qt'], ['Giữ ngày 13/12', 'ht']] },
          { ten: 'Đỗ Minh Tuấn', av: 'MT', kenh: 'fb', msg: 'Công ty 30 mâm tất niên có nhận không?', gio: '10:12',
            tags: [['Bình luận bài viết', 'ng'], ['#tatnien', 'qt'], ['Đã cho SĐT', 'ht'], ['Gọi lần 1 ✓', 'sa']] },
          { ten: 'Trần Hải Yến', av: 'HY', kenh: 'tiktok', msg: 'Thôi nôi 5 mâm có nhận không shop?', gio: '16:30',
            tags: [['TikTok · Video mâm cỗ', 'ng'], ['#thoinoi', 'qt'], ['Đã cho SĐT', 'ht'], ['Gọi lần 2 · không bắt máy', 'sa']] },
          { ten: 'Lê Quang Vinh', av: 'QV', kenh: 'zalo', msg: 'Buffet 80 khách khai trương giá sao?', gio: '09:05',
            tags: [['Zalo OA', 'ng'], ['#buffet', 'qt'], ['Đang bám đuổi', 'ht']] },
          { ten: 'Nguyễn Thị Hòa', av: 'TH', kenh: 'zalo', msg: 'Đặt lại cỗ cúng Tết như năm ngoái nhé', gio: 'Hôm qua',
            tags: [['Zalo · Khách cũ', 'ng'], ['#cotet', 'qt'], ['Đã đặt cọc', 'ht'], ['Đã kết nối Zalo', 'za']] },
        ],
        chanDung: {
          ten: 'Phạm Ngọc Lan', av: 'NL', kenh: 'fb', sub: 'Facebook Messenger · 0983 517 264',
          nhom: [
            ['Nguồn khách', [['Facebook Ads', 'ng'], ['Bài: Nấu cỗ tại nhà', 'ng']]],
            ['Quan tâm', [['#mungtho', 'qt'], ['#12mam', 'qt'], ['#mamchay', 'qt']]],
            ['Hành trình', [['Nhắn tin 18/11', 'ht'], ['Cho SĐT 23/11', 'ht'], ['Giữ ngày 13/12', 'ht']]],
            ['Nhân viên gọi', [['Chị Thu · lần 1 ✓', 'sa']]],
            ['Kết nối', [['Đã kết nối Zalo', 'za'], ['Khách mới · L1', 'lv']]],
          ],
          ghiChu: 'Mừng thọ bố 70 tuổi, 11 mâm mặn + 1 mâm chay, 11h trưa CN 13/12 tại số 18 ngõ 72 Ngọc Lâm, Long Biên. Ngõ nhỏ ô tô không vào, ngân sách khoảng 1,6 triệu/mâm.',
        },
      },

      chotLai: [
        ['KHÁCH HÀNG', ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến']],
        ['AI CHATBOT', ['Phản hồi nhanh tức thì', 'Hỏi đúng dịp, số mâm', 'Gợi ý thực đơn hợp ngân sách', 'Lấy tên, SĐT, ngày, địa chỉ']],
        ['BÁM ĐUỔI', ['Gửi 5 tin nhắn trong 7 ngày: mâm cỗ thật, feedback, đầu bếp, quy trình']],
        ['ĐẶT TIỆC', ['Nhân viên xác nhận, khảo sát miễn phí', 'Chốt thực đơn, nhận cọc']],
        ['ĐẶT LẠI', ['Xin đánh giá, mời đặt cỗ tất niên, cỗ Tết, ưu đãi khách quen qua FB và Zalo']],
      ],
    },
  };
})();
