/* Kịch bản video demo NGANG 16:9: THI CÔNG XÂY DỰNG (nhóm cân nhắc nhiều), làm 19/11/2026 theo người dùng:
   "dịch vụ thi công xây dựng (cân nhắc nhiều, lọc khách lấy thông tin số điện thoại cho sale)".
   Theo mạch cnn người dùng chốt 18/11/2026 (mẫu thẩm mỹ viện): 1 cảnh, không có bình luận, chỉ 1 gói xây nhà phố trọn gói
   từ đầu tới cuối.
   Mạch: logo → quảng cáo → khách bấm "Gửi tin nhắn", hỏi giá → AI gửi đơn giá tham khảo + đúng ảnh quảng cáo
   → hỏi lọc khách (đất, số tầng, khởi công, sổ) → khách trả lời dồn, đòi báo tổng → AI giải thích hệ số móng, mái, sân,
   chỉ báo khoảng tham khảo, mời kỹ sư khảo sát đất miễn phí, xin tên + SĐT → khách im → gắn thẻ + bám đuổi 5 tin
   → khách hẹn khảo sát → tên + SĐT → báo Sale (có phân loại Khách nóng) → gửi Lead lên Facebook → Zalo 3 tin → tổng kết → logo.
   AI không báo chốt khi chưa khảo sát, không hứa giấy phép chắc chắn được duyệt. Không có tin nhắc trước buổi khảo sát
   (Preny chưa có tính năng này).
   Tên công ty, giá, khách, SĐT, feedback, sale: dữ liệu minh họa lấy từ bài 1 (demo/kich-ban/xay-dung-tc.js). Ảnh: ảnh có sẵn của bài 1.
   Không dùng ảnh giấy phép giả: tin "giấy tờ" là ảnh kỹ sư thật + thẻ liệt kê. */
window.VN_KB = {
  ten: 'Thi công xây dựng video ngang',
  ketSub: 'Để AI lọc khách và lấy SĐT cho sale của công ty xây dựng bạn',
  shop: { ten: 'Xây Dựng Phú Gia', av: 'PG', mau: '#B45309', sub: 'Thường trả lời ngay' },
  anh: {
    'nha-pho': '../assets/img/u/1781264896316-f47aef24272d_800x800.jpg',      // nhà nhiều tầng màu be, có gara, cây xanh
    'nha-pho-2': '../assets/img/u/1778375744848-e7757f0254e6_800x800.jpg',    // dãy nhà phố hiện đại trắng đen
    'nha-toi': '../assets/img/u/1767948693674-e96ae5a755c9_800x800.jpg',      // nhà hiện đại lên đèn lúc chiều tối
    'ban-ve': '../assets/img/u/1503387762-592deb58ef4e_800x800.jpg',          // kiến trúc sư vẽ bản vẽ
    'ban-ve-2': '../assets/img/u/1762146828422-50a8bd416d3c_800x800.jpg',     // bản vẽ trải trên bàn
    'ky-su': '../assets/img/u/1772442198624-4fc4d7281e89_800x800.jpg',        // người xem bản vẽ tại công trường
    'cong-trinh': '../assets/img/u/1580063665421-4c9cbe9ec11b_800x800.jpg',   // nhà đang xây có giàn giáo
    'thep-san': '../assets/img/u/1582540730843-f4418d96ccbe_800x800.jpg',     // thợ đội mũ vàng buộc thép sàn
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= QUẢNG CÁO → MESSENGER (1 cảnh, không có bình luận, chỉ 1 gói xây nhà phố trọn gói từ đầu tới cuối) ================= */
    { k: 'canh', nhan: 'Khách từ quảng cáo → Messenger', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'nha-pho', nhan: 'MESSENGER', tieuDe: 'Xây nhà phố trọn gói · Khảo sát miễn phí', nut: 'Gửi tin nhắn',
        text: 'Có đất muốn xây nhà? 🏡 Xây Dựng Phú Gia nhận xây nhà phố trọn gói ở Bình Dương, kỹ sư khảo sát đất và gửi dự toán miễn phí. #xaynhatrongoi #nhapho #binhduong',
      }, d: 1500 },
    { k: 'cap', e: 'Quảng cáo Facebook', t: 'Khách bấm "Gửi tin nhắn" từ quảng cáo', s: 'Hỏi gì, AI trả lời ngay lập tức' },
    { k: 'tap', d: 1100 },
    { k: 'ms', ref: { loai: 'ad', img: 'nha-pho', dong1: 'Mỹ Hạnh đã trả lời một quảng cáo', dong2: 'Xây nhà phố trọn gói · Khảo sát miễn phí' }, gio: '14:47', d: 900 },
    { k: 'kh', text: 'Xây nhà trọn gói giá bao nhiêu 1m2 vậy em?' },
    { k: 'cap', e: 'Khách hỏi giá', t: 'AI báo đơn giá, gửi đúng ảnh quảng cáo', s: 'Giá tham khảo theo m²' },
    { k: 'ai', text: 'Dạ chào chị Hạnh, Phú Gia báo đơn giá tham khảo: **phần thô 3.600.000đ/m²**, **trọn gói 6.200.000đ/m²** ạ.' },
    { k: 'ai', img: 'nha-pho' },
    { k: 'cap', e: 'Lọc khách', t: 'Hỏi đất, số tầng, khởi công, sổ', s: 'Đúng thông tin sale cần để phân loại khách' },
    { k: 'ai', text: 'Đất mình **rộng bao nhiêu**, định xây **mấy tầng** ạ? Chị dự định **khi nào khởi công**, đã có **sổ** chưa ạ?' },
    { k: 'kh', text: 'đất c 5x20 ở Thủ Dầu Một, có sổ rồi, chưa có bản vẽ. xây 3 tầng, tháng 3 năm sau làm, tầm 1,8 tỷ. báo c tổng luôn đi e' },
    { k: 'cap', e: 'Khách đòi báo tổng', t: 'Giải thích cách tính, chỉ báo khoảng', s: 'Chưa khảo sát thì không báo chốt' },
    { k: 'ai', text: 'Dạ 5×20m xây 3 tầng, tổng diện tích xây dựng thường **280–320m²** vì tính thêm hệ số **móng, mái, sân**. Trọn gói tham khảo **khoảng 1,7–2 tỷ** ạ.' },
    { k: 'cap', e: 'Mời khảo sát miễn phí', t: 'Mời kỹ sư khảo sát, xin tên và SĐT', s: 'Cho khách lý do để lại số' },
    { k: 'ai', text: 'Chưa khảo sát em chưa báo chốt được ạ. Chị cho em xin **tên và SĐT**, kỹ sư qua **khảo sát đất miễn phí** rồi gửi **dự toán** cho chị nha 😊' },

    // Khách im → màn hình phụ: gắn thẻ (hashtag quảng cáo + thẻ từ cuộc chat), bám đuổi 5 tin
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Preny tự gắn thẻ đúng nhu cầu của khách', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi 5 tin', t: '5 tin: 15 phút, rồi cách 1 ngày, 1 ngày, 1 ngày, 2 ngày', s: 'Nhà đã bàn giao, feedback, kỹ sư, quy trình, khảo sát' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Chị Hạnh ơi, em gửi chị vài **nhà phố 3 tầng** bên em đã bàn giao ở Bình Dương nha 🏡' },
    { k: 'ai', imgs: ['nha-pho-2', 'nha-toi'] },
    { k: 'p', a: 'r1', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '15:04', ngay: 'T5 19/11/2026', d: 700 },
    { k: 'ai', text: 'Đây là chia sẻ của một chị chủ nhà phố ở Dĩ An ạ 💬' },
    { k: 'ai', review: { av: 'TL', ten: 'Thu Loan', sub: 'đã đánh giá Xây Dựng Phú Gia', mau: '#F59E0B',
        text: 'Nhà mình 5×18m, 3 tầng. Phú Gia gửi dự toán từng hạng mục từ đầu, kỹ sư giám sát mỗi ngày, bàn giao đúng hẹn, không phát sinh ngoài hợp đồng.',
        note: 'Chi phí tùy thiết kế, vật tư, nền đất' } },
    { k: 'p', a: 'r2', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '15:04', ngay: 'T6 20/11/2026', d: 700 },
    { k: 'ai', img: 'ky-su' },
    { k: 'ai', checks: { tieuDe: 'Bên em làm đủ giấy tờ để chị yên tâm ạ:', dong: [
        '**Giấy phép kinh doanh** ngành xây dựng', '**Kỹ sư giám sát** công trình mỗi ngày', '**Bảo hành kết cấu 10 năm**, ghi rõ trong hợp đồng'] } },
    { k: 'p', a: 'r3', d: 800 },
    { k: 'time', nhan: '1 ngày sau', gio: '15:04', ngay: 'T7 21/11/2026', d: 700 },
    { k: 'ai', text: 'Quy trình bên em là **khảo sát → dự toán → hợp đồng rõ hạng mục → thi công**, nghiệm thu từng giai đoạn ạ 😊' },
    { k: 'ai', img: 'thep-san' },
    { k: 'p', a: 'r4', d: 800 },
    { k: 'time', nhan: '2 ngày sau', gio: '15:04', ngay: 'T2 23/11/2026', d: 700 },
    { k: 'ai', text: 'Thứ Bảy này kỹ sư bên em còn vài suất **khảo sát đất miễn phí** ở Thủ Dầu Một, chị muốn em giữ một suất không ạ?' },
    { k: 'p', a: 'r5', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 5, khách hẹn khảo sát đất', s: 'AI giữ lịch, xin SĐT ngay' },
    { k: 'kh', text: 'thứ 7 c ở nhà, qua xem đất giúp c nha' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'ai', text: 'Dạ được ạ, **thứ Bảy 28/11** kỹ sư còn khung **8h** và **15h**. Chị cho em xin **tên và SĐT** để giữ lịch nha 🏡' },
    { k: 'cap', e: 'Lấy SĐT', t: 'Khách để lại tên, SĐT, giờ khảo sát', s: 'Đây là lúc AI chốt: chuyển khách cho người thật' },
    { k: 'kh', text: 'Hạnh, 0907 318 562, 8h nha e' },
    { k: 'ai', text: 'Dạ em giữ lịch khảo sát **8h thứ Bảy 28/11** ở Thủ Dầu Một cho chị Hạnh rồi ạ. Anh Long bên em sẽ gọi chị xác nhận liền nha 🏡', d: 1800 },

    // Có SĐT → màn hình phụ: báo Sale vào gọi ngay, có phân loại Khách nóng (không lên đơn tự động) → gửi Lead lên Facebook
    { k: 'cap', e: 'Báo ngay cho Sale', t: 'Có SĐT: báo Sale kèm thông tin đã lọc', s: 'Phân loại Khách nóng: có sổ, sắp khởi công' },
    { k: 'panel', v: 'sale', d: 800 },
    { k: 'p', a: 's1', d: 700 }, { k: 'p', a: 's2', d: 500 }, { k: 'p', a: 's3', d: 900 }, { k: 'p', a: 's4', d: 900 },
    { k: 'p', a: 's5', d: 1600 }, { k: 'p', a: 's6', d: 2600 },
    { k: 'cap', e: 'Gửi Lead về Facebook', t: 'Khách để lại SĐT: gửi sự kiện Lead lên Facebook', s: 'Quảng cáo tìm thêm khách giống khách thật' },
    { k: 'panel', v: 'capi', d: 900 },
    { k: 'p', a: 'flow', d: 1500 }, { k: 'p', a: 'event', d: 1300 }, { k: 'p', a: 'ok', d: 3200 },
    { k: 'panel', v: null, d: 600 },

    // Sau khảo sát qua Zalo: 3 tin (dự toán sơ bộ + mặt bằng, mời xem công trình đang thi công, ưu đãi đúng gói trọn gói)
    { k: 'cap', e: 'Chăm sóc qua Zalo', t: 'Sau khảo sát: gửi dự toán sơ bộ, mặt bằng', s: 'Tin gửi qua Zalo OA của công ty' },
    { k: 'zalo', gio: '18:30', ngay: 'T3 01/12/2026', chip: '3 ngày sau buổi khảo sát', d: 1500 },
    { k: 'zns', zns: { img: 'ban-ve-2', sao: false, tieuDe: 'Chị Hạnh ơi, dự toán sơ bộ nhà 3 tầng đã xong ạ',
        noiDung: 'Kỹ sư Phú Gia gửi chị sau buổi khảo sát:',
        dong: ['**Mặt bằng 3 tầng** cho lô 5×20m', 'Dự toán sơ bộ trọn gói **khoảng 1,85 tỷ**', 'Kê rõ từng hạng mục, vật tư'],
        nut: 'Xem dự toán' }, d: 5000 },
    { k: 'cap', e: 'Mời bước tiếp theo', t: 'Mời xem công trình đang thi công', s: 'Xem thép, móng tận nơi rồi mới ký' },
    { k: 'zstamp', gio: '10:00', ngay: 'T7 05/12/2026', chip: '4 ngày sau', d: 800 },
    { k: 'zns', zns: { img: 'cong-trinh', sao: false, tieuDe: 'Mời chị xem nhà phố bên em đang thi công',
        noiDung: 'Nhà 3 tầng ở Phú Hòa, Thủ Dầu Một đang đổ sàn tầng 2. Chị qua xem thép, móng tận nơi, kỹ sư tư vấn hợp đồng luôn nha 🏗️',
        nut: 'Đặt lịch xem công trình' }, d: 4400 },
    { k: 'cap', e: 'Ưu đãi đúng gói', t: 'Ký trọn gói: tặng thiết kế 3D mặt tiền', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'T2 14/12/2026', chip: 'Ưu đãi tháng 12', d: 800 },
    { k: 'zns', zns: { banner: ['nha-pho', 'nha-toi', 'nha-pho-2', 'ban-ve'], nhan: 'KÝ TRƯỚC 31/12 · TẶNG 3D MẶT TIỀN', mau: '#EA580C',
        tieuDe: 'Quà cho chị Hạnh khi ký trọn gói',
        noiDung: 'Ký hợp đồng **trọn gói nhà phố 3 tầng** trước 31/12/2026, Phú Gia **tặng thiết kế 3D mặt tiền** và giữ đơn giá **6.200.000đ/m²** cho chị ạ.',
        nut: 'Xem ưu đãi' }, d: 4800 },

    { k: 'tongket', d: 8500 },
    { k: 'outro', d: 5200 },
  ],
  // Slide tổng kết cuối video: theo deck.chotLai của bài 1; cột 3 là "Bám đuổi" (5 tin trong 7 ngày)
  tongKet: { tieuDe: 'Quy trình Preny AI giúp', em: 'tăng tỷ lệ chốt hợp đồng', cot: [
    { ten: 'Khách hàng', icon: 'users', dong: ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến'] },
    { ten: 'AI Chatbot', icon: 'bot', dong: ['Phản hồi nhanh tức thì', 'Báo đơn giá, giải thích cách tính', 'Lọc khách: đất, số tầng, ngân sách', 'Lấy SĐT, phân loại khách nóng'] },
    { ten: 'Bám đuổi', icon: 'heart', dong: ['Gửi 5 tin nhắn trong 7 ngày: nhà đã bàn giao, feedback chủ nhà, quy trình thi công'] },
    { ten: 'Khảo sát', icon: 'calendar', dong: ['Kỹ sư khảo sát đất, gửi dự toán', 'Sale chốt hợp đồng thi công'] },
    { ten: 'Mua lại', icon: 'refresh', dong: ['Mời khách cũ làm nội thất, giới thiệu khách qua FB và Zalo'] },
  ] },
  panels: {
    tag: { av: 'MH', ten: 'Trần Mỹ Hạnh', sub: 'Messenger · từ quảng cáo Xây nhà phố trọn gói',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#xaynhatrongoi', 'qt hot'], ['#nhapho', 'qt hot'], ['#binhduong', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#NhaPho3Tang', 'qt']]]],
      im: 'Khách im từ 14:49, chưa để lại SĐT',
      rule: { lb: 'Bám đuổi theo thẻ #xaynhatrongoi', tieuDe: 'Bám đuổi bằng 5 tin ngắn',
              dong: [['15 phút', 'Ảnh nhà phố 3 tầng đã bàn giao'], ['1 ngày', 'Feedback chủ nhà phố ở Dĩ An'], ['1 ngày', 'Giấy phép, kỹ sư giám sát, bảo hành'],
                     ['1 ngày', 'Quy trình: khảo sát, dự toán, hợp đồng'], ['2 ngày', 'Mời giữ suất khảo sát đất miễn phí']] },
      reply: 'Khách hẹn khảo sát đất thứ Bảy · dừng bám đuổi' },
    sale: { nguon: 'Quảng cáo Xây nhà phố trọn gói → Messenger', ten: 'Trần Mỹ Hạnh', sdt: '0907 318 562',
      nhuCau: 'Đất 5×20m Thủ Dầu Một, đã có sổ, chưa có bản vẽ · nhà phố 3 tầng trọn gói · ngân sách ~1,8 tỷ · khởi công 3/2027',
      lichNhan: 'Lịch khảo sát', lich: 'Kỹ sư khảo sát đất miễn phí · 8:00 Thứ Bảy 28/11',
      the: [['Khách nóng', 'qt hot'], ['#NhaPho3Tang', 'qt'], ['Đã có sổ', 'ht'], ['Đã cho SĐT', 'ok']],
      sale: { av: 'L', ten: 'Anh Long · Sale dự án', sub: 'Đang trực · nhận khách tự động' }, ok: 'Anh Long đã nhận khách nóng, gọi xác nhận lịch khảo sát' },
    capi: { tieuDe: 'Gửi khách tiềm năng cho Facebook', event: 'Lead', nhan: 'SỰ KIỆN KHÁCH TIỀM NĂNG', giaTri: 'Có SĐT', pk: 'Lead · khách để lại SĐT',
      dong: [['Khách', 'Trần Mỹ Hạnh · đã để lại SĐT'], ['Nguồn khách', 'Quảng cáo Xây nhà trọn gói → Messenger'], ['Nhu cầu', 'Khảo sát đất, xây nhà phố 3 tầng'], ['Event ID', 'PG2311-LEAD (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện Lead', khong: 'Không gửi Purchase khi khách chưa ký hợp đồng.' },
  },
};
