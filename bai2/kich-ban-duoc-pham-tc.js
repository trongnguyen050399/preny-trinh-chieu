/* Bài 2 (video demo ngang tự chạy): DƯỢC PHẨM, nhóm thương mại điện tử. Viết lại 18/11/2026 theo mạch mới (mẫu Yến chưng tươi):
   - 1 cảnh duy nhất: bài quảng cáo viên bổ gan, 2 khách bình luận (hỏi giá, hỏi tem chống giả + ship Hải Dương) → trả lời cả 2 "Mình check ib nha"
     → AI nhắn inbox trước: giá + đúng ảnh quảng cáo, hỏi 1 điều (mua cho ai, người dùng có đang uống thuốc gì không)
     → khách trả lời: mua cho chồng hay nhậu, men gan hơi cao, đang uống thuốc huyết áp → AI dặn hỏi bác sĩ, uống cách thuốc 2 tiếng,
       nói rõ không phải thuốc → AI hỏi lẻ hay liệu trình → khách chọn liệu trình 3 tặng 1 → AI xin SĐT + địa chỉ → khách im
     → gắn thẻ (3 hashtag quảng cáo + #baogia + #LieuTrinh3Tang1) → bám đuổi 3 tin 15 phút, 3 tiếng, 20 tiếng → khách gửi SĐT + địa chỉ
     (ca khó: SĐT thiếu 1 số) → tóm tắt đơn → Purchase lên Facebook
     → đơn tự động, dược sĩ bấm xác nhận → cảm ơn + 5 sản phẩm giảm giá → Zalo: hỏi thăm, bán chạy, khuyến mãi → tổng kết → logo.
   - Chỉ 1 sản phẩm từ đầu tới cuối (Viên bổ gan Minh Châu), không có đoạn khách hỏi sản phẩm khác.
   Ngành sức khỏe: AI không chẩn đoán, không hứa chữa bệnh, không bảo bỏ thuốc; đang dùng thuốc thì dặn hỏi bác sĩ điều trị;
   nói rõ "thực phẩm bảo vệ sức khỏe, không phải thuốc".
   Nội dung lấy từ bài 1 (demo/kich-ban/duoc-pham-tc.js): Nhà Thuốc Minh Châu, 380.000đ/hộp 60 viên, mua 3 tặng 1: 1.140.000đ cho 4 hộp,
   chị Hương, 2 viên sau ăn sáng cách thuốc huyết áp 2 tiếng, đơn #MC51207, voucher MINHCHAU50, dược sĩ Lan.
   Tên nhà thuốc, khách, SĐT, giá, ưu đãi, cách dùng: dữ liệu minh họa. Ảnh: ảnh có sẵn của bài 1 (Unsplash, không phải hàng của shop). */
window.VN_KB = {
  ten: 'Dược phẩm video ngang',
  ketSub: 'Để AI tư vấn, bám đuổi và lên đơn cho nhà thuốc của bạn',
  shop: { ten: 'Nhà Thuốc Minh Châu', av: 'MC', mau: '#059669', sub: 'Thường trả lời ngay' },
  anh: {
    'lo-vien': '../assets/img/u/1763668331599-487470fb85b2_800x800.jpg',        // lọ viên nang
    'vien-nang': '../assets/img/u/1664956618021-73c47736845e_800x800.jpg',      // viên nang
    'ke-sua': '../assets/img/u/1720722992835-f10fa913c2a4_800x800.jpg',         // hoa kế sữa
    'actiso': '../assets/img/u/1760108273010-7f2e53840a83_800x800.jpg',         // actiso
    'lo-trang': '../assets/img/u/1664216294580-079bc527ae49_800x800.jpg',       // lọ trắng
    'omega': '../assets/img/u/1670850756988-a1943aa0e554_800x800.jpg',          // dầu cá
    'vitamin': '../assets/img/u/1707129785947-ddc627a8bab9_800x800.jpg',        // vitamin
    'kem-chong-nang': '../assets/img/u/1686831451322-8d8e234a51e1_800x800.jpg', // kem chống nắng
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= BÌNH LUẬN QUẢNG CÁO → INBOX (cảnh duy nhất) ================= */
    { k: 'canh', nhan: 'Bình luận quảng cáo → Inbox', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'lo-vien', nhan: 'MESSENGER', tieuDe: 'Viên bổ gan Minh Châu · 60 viên', nut: 'Gửi tin nhắn',
        text: 'Hay tiếp khách, dùng bia rượu nhiều? 🌿 Viên bổ gan Minh Châu chiết xuất cà gai leo, actiso, kế sữa, hỗ trợ bảo vệ gan. Thực phẩm này không phải là thuốc. #bogan #actiso #mobile',
      }, d: 1500 },
    { k: 'cap', e: 'Bình luận hỏi giá', t: 'Khách hỏi giá ngay dưới quảng cáo', s: 'Một khách khác hỏi tem chính hãng, ship tỉnh' },
    { k: 'cmt', i: 0, ten: 'Thu Hương', av: 'TH', text: 'Viên bổ gan này giá bao nhiêu ạ?' },
    { k: 'cmt', i: 1, ten: 'Trần Bình', av: 'TB', text: 'Có tem chống giả không, ship Hải Dương mấy ngày ạ?' },
    { k: 'cap', e: 'Trả lời cả 2 bình luận', t: 'Trả lời ngắn gọn, mời khách vào inbox', s: 'Tư vấn chi tiết trong tin nhắn riêng' },
    { k: 'rep', i: 0, text: 'Mình check ib nha 💬' },
    { k: 'rep', i: 1, text: 'Mình check ib nha 💬' },
    { k: 'ms', ref: { loai: 'cmt', img: 'lo-vien', dong1: 'Bạn đã bình luận về quảng cáo của Nhà Thuốc Minh Châu', dong2: '"Viên bổ gan này giá bao nhiêu ạ?"' }, gio: '14:47' },
    { k: 'cap', e: 'AI nhắn trước', t: 'Inbox trước: báo giá, gửi đúng ảnh quảng cáo', s: 'Khách không cần mô tả lại sản phẩm' },
    { k: 'ai', text: 'Dạ chào chị Hương, **Viên bổ gan Minh Châu** hộp 60 viên giá **380.000đ** ạ, dùng được 1 tháng.' },
    { k: 'ai', img: 'lo-vien' },
    { k: 'ai', text: 'Chị mua cho ai dùng, người dùng có đang uống thuốc gì không để em dặn cách uống cho đúng nha?' },

    { k: 'cap', e: 'Khách trả lời', t: 'Mua cho chồng, đang uống thuốc huyết áp', s: 'Không chẩn đoán, dặn hỏi bác sĩ điều trị' },
    { k: 'kh', text: 'Mua cho chồng c, hay nhậu, men gan hơi cao. Ổng đang uống thuốc huyết áp e' },
    { k: 'ai', text: 'Dạ anh đang uống thuốc huyết áp thì chị **hỏi bác sĩ điều trị** trước giúp em nha. Bác sĩ đồng ý thì anh uống **2 viên sau ăn sáng**, cách thuốc khoảng 2 tiếng ạ.' },
    { k: 'ai', text: 'Sản phẩm là thực phẩm bảo vệ sức khỏe, **không phải thuốc**, anh vẫn uống thuốc bác sĩ kê và tái khám đúng hẹn nha chị.' },
    { k: 'cap', e: 'Hỏi đúng thứ còn thiếu', t: 'Rõ người dùng rồi: AI hỏi lẻ hay liệu trình', s: 'Giá liệu trình ghi rõ ngay trong tin' },
    { k: 'ai', text: '1 hộp dùng 1 tháng ạ. Chị lấy **1 hộp lẻ** hay **liệu trình mua 3 tặng 1** (**1.140.000đ** cho 4 hộp) nha?' },
    { k: 'kh', text: 'Lấy liệu trình 3 tặng 1 nha e' },
    { k: 'cap', e: 'Xin thông tin lên đơn', t: 'Chọn xong: AI xin SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ em ghi **4 hộp viên bổ gan** (mua 3 tặng 1), 1.140.000đ, freeship. Chị gửi em **SĐT và địa chỉ** nhận hàng để em lên đơn nha.' },

    // Khách im sau khi được xin SĐT, địa chỉ → màn hình phụ: gắn thẻ (3 hashtag quảng cáo + thẻ từ cuộc chat), bám đuổi 3 tin
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Chưa gửi SĐT: Preny tự gắn thẻ khách', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi theo thẻ', t: '3 tin ngắn: 15 phút, 3 tiếng, 20 tiếng', s: 'Chỉ nói về đúng liệu trình khách đã chọn' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Chị Hương ơi, em giữ cho chị **suất mua 3 tặng 1** viên bổ gan rồi ạ. Chị gửi em SĐT, địa chỉ để em giao sớm cho anh nha 😊' },
    { k: 'p', a: 'r1', d: 900 },
    { k: 'time', nhan: '3 tiếng sau', gio: '17:49', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Em gửi chị ảnh thật hộp và thành phần nha 📸 **Cà gai leo, actiso, kế sữa**, có **tem chống giả**, quét mã là kiểm tra được ạ.' },
    { k: 'ai', imgs: ['lo-vien', 'ke-sua', 'actiso'] },
    { k: 'p', a: 'r2', d: 900 },
    { k: 'time', nhan: '20 tiếng sau', gio: '10:49', ngay: 'T5 19/11/2026', d: 700 },
    { k: 'ai', text: 'Chị chỉ cần gửi **SĐT và địa chỉ** là em lên đơn liền, **freeship**, kèm giấy dặn cách uống cho anh ạ ⚡' },
    { k: 'p', a: 'r3', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 3, khách gửi SĐT, địa chỉ', s: 'AI kiểm tra ngay thông tin khách gửi' },
    { k: 'kh', text: '091234567, 35 Nguyễn Trãi Thanh Xuân HN' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'cap', e: 'Kiểm tra dữ liệu', t: 'SĐT thiếu số → hỏi lại ngay lập tức', s: 'Để shipper gọi được khi giao hàng' },
    { k: 'ai', text: 'Dạ em ghi địa chỉ rồi ạ. Số **091234567** mới có 9 số, chị kiểm tra lại giúp em nha.' },
    { k: 'kh', text: '0912345678 e' },
    { k: 'cap', e: 'Chốt đơn', t: 'Tự tổng hợp đơn: sản phẩm, số hộp, SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ chị kiểm tra lại đơn giúp em nha:\n– 4 hộp Viên bổ gan Minh Châu (mua 3 tặng 1)\n– Tổng: **1.140.000đ** (freeship)\n– Người nhận: Thu Hương · 0912 345 678\n– 35 Nguyễn Trãi, P. Thanh Xuân, Hà Nội\nChị xác nhận giúp em đơn này nha.', nut: 'Quản lý đơn hàng', d: 3600 },
    { k: 'cap', e: 'Xong', t: 'Khách chỉ cần nói "Ok em"' },
    { k: 'kh', text: 'Ok em' },
    { k: 'ai', text: 'Dạ em lên đơn cho chị liền nha ⚡', d: 1300 },

    // Chốt đơn → màn hình phụ: gửi đơn hàng cho Facebook → đơn tự động → dược sĩ xác nhận
    { k: 'cap', e: 'Gửi đơn về Facebook', t: 'Sự kiện mua hàng gửi ngay lên Facebook', s: 'Quảng cáo tối ưu theo đơn thật' },
    { k: 'panel', v: 'capi', d: 900 },
    { k: 'p', a: 'flow', d: 1500 }, { k: 'p', a: 'event', d: 1300 }, { k: 'p', a: 'ok', d: 2200 },
    { k: 'cap', e: 'Đơn hàng tự động', t: 'Đơn tự lên Preny. Nhà thuốc chỉ việc giao.' },
    { k: 'panel', v: 'don', d: 900 },
    { k: 'p', a: 'f1', d: 550 }, { k: 'p', a: 'f2', d: 550 }, { k: 'p', a: 'f3', d: 550 }, { k: 'p', a: 'f4', d: 550 },
    { k: 'p', a: 'cho', d: 900 },
    { k: 'cap', e: 'Dược sĩ xác nhận', t: 'Báo dược sĩ: bấm 1 lần là đơn lên', s: 'Người thật kiểm tra lại trước khi giao' },
    { k: 'p', a: 'nv', d: 1700 }, { k: 'p', a: 'bam', d: 1100 },
    { k: 'p', a: 'xn', d: 3000 },
    { k: 'panel', v: null, d: 500 },

    // Mua xong: tin cảm ơn kèm 5 sản phẩm khách hay mua kèm đang giảm giá (khách cũ giảm 10%, như bài 1)
    { k: 'cap', e: 'Bán thêm sau mua', t: 'Cảm ơn khách, gửi kèm 5 sản phẩm đang giảm giá', s: 'Khách bấm "Mua ngay" ngay trong Messenger' },
    { k: 'ai', text: 'Dạ cảm ơn chị Hương nha 💚 Đơn đã được dược sĩ xác nhận, nhà thuốc giao sớm cho chị. Mấy sản phẩm khách hay mua kèm đang giảm giá, chị xem thử nha:' },
    { k: 'car', sp: [
        { img: 'omega', ten: 'Dầu cá Omega-3 hộp 100 viên', gia: '315.000đ', cu: '350.000đ', giam: '-10%' },
        { img: 'vitamin', ten: 'Vitamin tổng hợp hộp 60 viên', gia: '252.000đ', cu: '280.000đ', giam: '-10%' },
        { img: 'lo-trang', ten: 'Canxi + D3 hộp 60 viên', gia: '234.000đ', cu: '260.000đ', giam: '-10%' },
        { img: 'kem-chong-nang', ten: 'Kem chống nắng SPF 45', gia: '279.000đ', cu: '310.000đ', giam: '-10%' },
        { img: 'vien-nang', ten: 'Men vi sinh dạng viên', gia: '207.000đ', cu: '230.000đ', giam: '-10%' },
      ], d: 5200 },

    // Chăm sóc sau bán qua Zalo
    { k: 'zalo', gio: '19:30', ngay: 'CN 22/11/2026', chip: '3 ngày sau · khách đã nhận hàng', d: 1500 },
    { k: 'cap', e: 'Chăm sóc sau bán qua Zalo', t: 'Khách nhận hàng: AI nhắc uống đúng cách', s: 'Xin đánh giá ngay trong tin Zalo OA của nhà thuốc' },
    { k: 'zns', zns: {
        img: 'lo-vien', tieuDe: 'Anh nhà uống có đều không chị?',
        noiDung: 'Minh Châu cảm ơn chị đã nhận đơn **#MC51207** (Viên bổ gan · 4 hộp). Anh nhớ uống cách thuốc huyết áp 2 tiếng, vẫn dùng thuốc bác sĩ kê nha. Đánh giá giúp nhà thuốc nha!',
        nut: 'Đánh giá sản phẩm',
      }, d: 4200 },
    { k: 'cap', e: 'ZBS · Sản phẩm bán chạy', t: '1 tuần sau: gửi sản phẩm bán chạy qua Zalo', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'CN 29/11/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['omega', 'vitamin', 'lo-trang', 'kem-chong-nang'], nhan: 'TOP BÁN CHẠY TUẦN NÀY', mau: '#F97316',
        tieuDe: '🔥 Top bán chạy tuần này tại Minh Châu',
        noiDung: 'Dầu cá **Omega-3**, **vitamin tổng hợp** và **Canxi + D3** đang được khách Minh Châu chọn nhiều nhất tuần qua.',
        nut: 'Xem ngay',
      }, d: 4600 },
    { k: 'cap', e: 'ZBS · Khuyến mãi', t: '1 tuần sau nữa: gửi ưu đãi cho khách cũ', s: 'Kéo khách quay lại mua tiếp, không cần khách nhắn' },
    { k: 'zstamp', gio: '19:30', ngay: 'CN 06/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['lo-vien', 'omega', 'vitamin', 'vien-nang'], nhan: 'KHÁCH CŨ · VOUCHER 50.000Đ',
        tieuDe: 'Ưu đãi riêng cho khách cũ Minh Châu',
        noiDung: 'Tặng chị Hương voucher **50.000đ** (mã **MINHCHAU50**) cho đơn từ 300.000đ, freeship toàn quốc. Hạn dùng đến 31/12/2026.',
        nut: 'Dùng voucher ngay',
      }, d: 4800 },

    { k: 'tongket', d: 8500 },
    { k: 'outro', d: 5200 },
  ],
  // Slide tổng kết cuối video (theo slide "Chốt lại 5 ô" nhóm thương mại điện tử; bám đuổi = 5 tin trong 7 ngày)
  tongKet: { tieuDe: 'Quy trình Preny AI giúp', em: 'tăng tỷ lệ chốt đơn', cot: [
    { ten: 'Khách hàng', icon: 'users', dong: ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến'] },
    { ten: 'AI Chatbot', icon: 'bot', dong: ['Phản hồi nhanh tức thì', 'Kêu gọi khách hàng mua hàng', 'Lấy thông tin và chốt đơn'] },
    { ten: 'Bám đuổi', icon: 'bell', dong: ['Gửi 5 tin nhắn trong 7 ngày để bám đuổi khách hàng'] },
    { ten: 'Chốt đơn', icon: 'check', dong: ['Lên đơn', 'Gửi sự kiện mua hàng lên Facebook'] },
    { ten: 'Mua lại', icon: 'refresh', dong: ['Tự động gửi 1 tin nhắn mỗi tuần qua FB và Zalo', 'Sản phẩm bán chạy, giảm giá, sản phẩm mới'] },
  ] },
  panels: {
    tag: { av: 'TH', ten: 'Nguyễn Thu Hương', sub: 'Messenger · bình luận quảng cáo Viên bổ gan',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#bogan', 'qt hot'], ['#actiso', 'qt hot'], ['#mobile', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#LieuTrinh3Tang1', 'qt']]]],
      im: 'Khách im từ 14:49, sau khi được xin SĐT, địa chỉ',
      rule: { lb: 'Bám đuổi theo thẻ #bogan', tieuDe: '3 tin ngắn về liệu trình khách đã chọn',
              dong: [['15 phút', 'Đã giữ suất 3 tặng 1 cho khách'], ['3 tiếng', 'Gửi ảnh thật thành phần, tem'], ['20 tiếng', 'Chỉ cần SĐT, địa chỉ là lên đơn']] },
      reply: 'Khách gửi SĐT, địa chỉ · dừng bám đuổi' },
    capi: { tieuDe: 'Gửi đơn hàng cho Facebook', event: 'Purchase', nhan: 'SỰ KIỆN MUA HÀNG', giaTri: '1.140.000đ', pk: 'Purchase · 1.140.000đ',
      dong: [['Đơn hàng', '#MC51207 · Viên bổ gan · 4 hộp'], ['Nguồn khách', 'Bình luận quảng cáo Viên bổ gan → Messenger'], ['Giá trị', '1.140.000 VND'], ['Event ID', 'MC51207-PURCHASE (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện mua hàng' },
  },
  donHang: {
    ma: '#MC51207', sp: 'Viên bổ gan Minh Châu · hộp 60 viên', bien: 'Mua 3 tặng 1 · x4 hộp', img: 'lo-vien', gia: '1.140.000đ',
    phi: ['Phí vận chuyển', 'freeship'],
    nv: { ten: 'Dược sĩ Lan', av: 'DL' },
    ten: 'Nguyễn Thu Hương', sdt: '0912 345 678', dc: '35 Nguyễn Trãi, P. Thanh Xuân, Hà Nội', gio: '11:05 · 19/11/2026',
  },
};
