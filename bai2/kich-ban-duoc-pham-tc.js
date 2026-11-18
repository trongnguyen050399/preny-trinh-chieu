/* Kịch bản Bài 2 (video demo NGANG 16:9 tự chạy): DƯỢC PHẨM · nhóm thương mại điện tử, theo mạch mẫu YaMe (18/11/2026).
   Nội dung lấy từ bài 1 (demo/kich-ban/duoc-pham-tc.js): Nhà Thuốc Minh Châu, Canxi + D3K2 295.000đ (bình luận anh Bình, mẹ
   đang uống thuốc huyết áp), Viên bổ gan Minh Châu 380.000đ/hộp 60 viên, liệu trình mua 3 tặng 1: 1.140.000đ cho 4 hộp
   (chị Hương mua cho chồng hay nhậu, men gan hơi cao, đang uống thuốc huyết áp), dầu cá Omega-3 350.000đ.
   Ngành sức khỏe: AI không chẩn đoán, không hứa chữa bệnh, không bảo bỏ thuốc; đang dùng thuốc thì dặn hỏi bác sĩ điều trị;
   nói rõ "thực phẩm bảo vệ sức khỏe, không phải thuốc, không thay thế thuốc chữa bệnh". Ca khó đơn hàng: SĐT thiếu 1 số.
   Tên nhà thuốc, khách, SĐT, giá, ưu đãi, cách dùng: dữ liệu minh họa. Ảnh: ảnh có sẵn của bài 1 (Unsplash, không phải hàng của shop). */
window.VN_KB = {
  ten: 'Dược phẩm video ngang',
  ketSub: 'Để AI tư vấn và bán hàng cho nhà thuốc của bạn',
  shop: { ten: 'Nhà Thuốc Minh Châu', av: 'MC', mau: '#059669', sub: 'Thường trả lời ngay' },
  anh: {
    'lo-vien': '../assets/img/u/1763668331599-487470fb85b2_800x800.jpg',        // lọ viên nang
    'vien-nang': '../assets/img/u/1664956618021-73c47736845e_800x800.jpg',      // viên nang
    'ke-sua': '../assets/img/u/1720722992835-f10fa913c2a4_800x800.jpg',         // hoa kế sữa
    'actiso': '../assets/img/u/1760108273010-7f2e53840a83_800x800.jpg',         // actiso
    'duoc-si': '../assets/img/u/1576091358783-a212ec293ff3_800x800.jpg',        // dược sĩ tư vấn
    'lo-trang': '../assets/img/u/1664216294580-079bc527ae49_800x800.jpg',       // lọ trắng
    'omega': '../assets/img/u/1670850756988-a1943aa0e554_800x800.jpg',          // dầu cá
    'vitamin': '../assets/img/u/1707129785947-ddc627a8bab9_800x800.jpg',        // vitamin
    'kem-chong-nang': '../assets/img/u/1686831451322-8d8e234a51e1_800x800.jpg', // kem chống nắng
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= TÌNH HUỐNG 1 · BÀI VIẾT → BÌNH LUẬN → INBOX ================= */
    { k: 'canh', nhan: 'Tình huống 1 · Bình luận xin giá → Inbox', gio: '20:15' },
    { k: 'fb', post: {
        gio: '4 giờ', img: 'duoc-si', likes: '1,3K', soCmt: '92 bình luận',
        text: 'Canxi, vitamin, thực phẩm bảo vệ sức khỏe chính hãng 💊 Có tem chống giả, dược sĩ tư vấn miễn phí cách dùng cho từng người.',
      }, d: 1600 },
    { k: 'cap', e: 'Bình luận xin giá', t: 'Khách hỏi giá ngay dưới bài viết', s: 'Một khách khác hỏi loại dễ uống cho mẹ' },
    { k: 'cmt', i: 0, ten: 'Trần Bình', av: 'TB', text: 'Canxi cho người lớn tuổi giá bao nhiêu shop?' },
    { k: 'cmt', i: 1, ten: 'Mai Lan', av: 'ML', text: 'Mẹ mình 70 tuổi khó nuốt viên to, có loại dễ uống không shop?' },
    { k: 'cap', e: 'Trả lời cả 2 bình luận', t: 'Trả lời ngắn gọn, mời khách vào inbox', s: 'Tư vấn chi tiết trong tin nhắn riêng' },
    { k: 'rep', i: 0, text: 'Mình check ib nha 💬' },
    { k: 'rep', i: 1, text: 'Mình check ib nha 💬' },

    { k: 'ms', ref: { loai: 'cmt', img: 'duoc-si', dong1: 'Bạn đã bình luận về bài viết của Nhà Thuốc Minh Châu', dong2: '"Canxi cho người lớn tuổi giá bao nhiêu shop?"' }, gio: '20:17' },
    { k: 'cap', e: 'Tự động báo giá', t: 'Inbox trước: báo giá, gửi ảnh thật', s: 'Viết ngắn gọn, tự nhiên như người bán' },
    { k: 'ai', text: 'Dạ chào anh Bình, **Canxi + D3K2** hộp 60 viên bên em giá **295.000đ** ạ, viên nhỏ dễ uống.' },
    { k: 'ai', card: { title: 'Canxi + D3K2 hộp 60 viên · Thực phẩm bảo vệ sức khỏe · Chính hãng, có tem chống giả', gia: '295.000đ' } },
    { k: 'ai', img: 'lo-trang' },
    { k: 'ai', text: 'Bác đang dùng thuốc gì, có bệnh thận không để em dặn cách uống cho đúng nha anh?' },
    { k: 'cap', e: 'Hỏi kỹ trước khi bán', t: 'Khách trả lời 1 câu, AI dặn cách uống an toàn', s: 'Đang dùng thuốc → nhắc hỏi bác sĩ điều trị' },
    { k: 'kh', text: 'mẹ mình uống thuốc huyết áp, ko bệnh thận e' },
    { k: 'ai', text: 'Dạ bác uống thuốc huyết áp thì anh **hỏi bác sĩ điều trị** trước giúp em, uống **cách thuốc khoảng 2 tiếng** nha. Sản phẩm **không phải thuốc** ạ. Anh gửi em **SĐT và địa chỉ** để em lên đơn nha 😊' },
    { k: 'cap', e: 'Chốt đơn', t: 'Xin SĐT, địa chỉ: khách đưa đủ', s: 'AI tóm tắt đơn ngay trong chat' },
    { k: 'kh', text: '0935 162 748, 18 Lê Thanh Nghị, Hai Bà Trưng, HN' },
    { k: 'ai', text: 'Dạ em lên đơn cho anh rồi nha:\n– Canxi + D3K2, hộp 60 viên\n– **295.000đ**\n– 0935 162 748\n– 18 Lê Thanh Nghị, Hai Bà Trưng, HN\nNhà thuốc gọi anh xác nhận rồi giao liền ạ 🎉', d: 3800 },

    /* ================= TÌNH HUỐNG 2 · QUẢNG CÁO → MESSENGER ================= */
    { k: 'canh', nhan: 'Tình huống 2 · Quảng cáo → Messenger', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'lo-vien', nhan: 'MESSENGER', tieuDe: 'Viên bổ gan · Nhắn dược sĩ tư vấn', nut: 'Gửi tin nhắn',
        text: 'Hay tiếp khách, dùng bia rượu nhiều? 🌿 Viên bổ gan Minh Châu chiết xuất cà gai leo, actiso, kế sữa, hỗ trợ bảo vệ gan. Thực phẩm này không phải là thuốc. #bogan #actiso #mobile',
      }, d: 1500 },
    { k: 'cap', e: 'Quảng cáo Facebook', t: 'Khách bấm "Gửi tin nhắn" từ quảng cáo', s: 'Hỏi gì, AI trả lời ngay lập tức' },
    { k: 'tap', d: 1100 },
    { k: 'ms', ref: { loai: 'ad', img: 'lo-vien', dong1: 'Hương đã trả lời một quảng cáo', dong2: 'Viên bổ gan Minh Châu · Cà gai leo, actiso' }, gio: '14:47', d: 900 },
    { k: 'kh', text: 'Viên bổ gan này giá bao nhiêu em?' },
    { k: 'cap', e: 'Khách hỏi giá', t: 'AI gửi đúng sản phẩm trên quảng cáo kèm giá', s: 'Khách không cần mô tả lại sản phẩm' },
    { k: 'ai', text: 'Dạ chào chị Hương, **viên bổ gan** trên quảng cáo giá **380.000đ**/hộp 60 viên ạ, dùng 1 tháng.' },
    { k: 'ai', img: 'lo-vien' },
    { k: 'ai', text: 'Chị mua cho ai, người dùng đang uống thuốc gì không để em dặn cách uống nha?' },
    { k: 'cap', e: 'Không hỏi lại khách', t: 'Khách chụp sản phẩm khác hỏi "Này thì sao"', s: 'Chỉ một câu cộc lốc, không ghi tên sản phẩm' },
    { k: 'kh', shot: { img: 'omega', cap: 'Dầu cá Omega-3 hộp 100 viên, chính hãng có tem chống giả 💊' } },
    { k: 'kh', text: 'Này thì sao' },
    { k: 'cap', e: 'Nhận diện sản phẩm từ ảnh', t: 'Đúng sản phẩm. Đúng giá. Đúng tồn kho.', s: 'AI đọc ảnh khách gửi, khớp với kho sản phẩm của nhà thuốc' },
    { k: 'ai', text: 'Dạ đây là **Dầu cá Omega-3** hộp 100 viên ạ, còn hàng chị nha.' },
    { k: 'ai', card: { title: 'Dầu cá Omega-3 hộp 100 viên · Thực phẩm bảo vệ sức khỏe · Chính hãng', gia: '350.000đ' } },
    { k: 'ai', img: 'omega' },
    { k: 'ai', text: 'Người dùng đang uống thuốc gì không chị, để em dặn cách dùng cả 2 nha.' },

    // Khách im → màn hình phụ: gắn thẻ (3 hashtag của quảng cáo + thẻ từ cuộc chat), bám đuổi 3 tin theo thẻ
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Preny tự gắn thẻ đúng sản phẩm khách quan tâm', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi theo thẻ', t: '3 tin ngắn: 15 phút, 3 tiếng, 20 tiếng', s: 'Chỉ nói về đúng sản phẩm khách quan tâm' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Chị Hương ơi, chị nhắn em người dùng đang uống thuốc gì để em dặn cách uống **viên bổ gan** cho đúng nha 😊' },
    { k: 'p', a: 'r1', d: 900 },
    { k: 'time', nhan: '3 tiếng sau', gio: '17:49', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Em gửi chị thành phần viên bổ gan nha 📸 **Cà gai leo, actiso, kế sữa**, hàng chính hãng có tem chống giả.' },
    { k: 'ai', imgs: ['ke-sua', 'actiso'] },
    { k: 'p', a: 'r2', d: 900 },
    { k: 'time', nhan: '20 tiếng sau', gio: '10:49', ngay: 'T5 19/11/2026', d: 700 },
    { k: 'ai', text: 'Liệu trình **3 hộp** đang **mua 3 tặng 1**: **1.140.000đ cho 4 hộp** + freeship, đến hết Chủ nhật ạ 🎁 Em giữ suất cho chị nha?' },
    { k: 'p', a: 'r3', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 3, khách trả lời để chốt đơn', s: 'AI dặn cách dùng an toàn ngay khi khách nhắn' },
    { k: 'kh', text: 'Mua cho chồng c, hay nhậu, men gan hơi cao. Ổng đang uống thuốc huyết áp' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },

    { k: 'cap', e: 'Tư vấn an toàn', t: 'Đang uống thuốc huyết áp → dặn hỏi bác sĩ', s: 'Không chẩn đoán, không hứa chữa bệnh, không bảo bỏ thuốc' },
    { k: 'ai', text: 'Dạ anh đang uống thuốc huyết áp, chị **hỏi bác sĩ điều trị** trước giúp em nha. Bác sĩ đồng ý thì uống **2 viên sau ăn sáng**, cách thuốc 2 tiếng.' },
    { k: 'ai', text: 'Sản phẩm **không phải thuốc**, không thay thế thuốc chữa bệnh, anh vẫn uống thuốc bác sĩ kê nha. Chị lấy viên bổ gan hay dầu cá ạ?' },
    { k: 'kh', text: 'Lấy bổ gan thôi e' },
    { k: 'cap', e: 'Hỏi đúng thứ còn thiếu', t: 'Khách chọn bổ gan: AI hỏi lấy lẻ hay liệu trình', s: 'Liệu trình 3 tháng, đúng hẹn xét nghiệm lại men gan' },
    { k: 'ai', text: 'Dạ 1 hộp dùng 1 tháng ạ. Chị lấy **liệu trình 3 tặng 1** hay 1 hộp lẻ nha?' },
    { k: 'kh', text: 'Lấy liệu trình 3 tặng 1 nha' },
    { k: 'ai', text: 'Dạ em ghi **4 hộp bổ gan** (mua 3 tặng 1), **1.140.000đ** ạ. Chị gửi em **SĐT và địa chỉ** nha.' },
    { k: 'cap', e: 'Kiểm tra dữ liệu', t: 'SĐT thiếu số → hỏi lại ngay lập tức' },
    { k: 'kh', text: '091234567, 35 Nguyễn Trãi Thanh Xuân HN' },
    { k: 'ai', text: 'Dạ số **091234567** mới có 9 số, chị kiểm tra lại giúp em nha.' },
    { k: 'kh', text: '0912345678 e' },
    { k: 'cap', e: 'Chốt đơn', t: 'Tự tổng hợp đơn: sản phẩm, số hộp, SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ chị kiểm tra lại đơn giúp em nha:\n– 4 hộp Viên bổ gan Minh Châu (mua 3 tặng 1)\n– Tổng: **1.140.000đ** (freeship)\n– 0912 345 678\n– 35 Nguyễn Trãi, P. Thanh Xuân, Hà Nội\nChị xác nhận giúp em đơn này nha.', nut: 'Quản lý đơn hàng', d: 3400 },
    { k: 'cap', e: 'Xong', t: 'Khách chỉ cần nói "Ok em"' },
    { k: 'kh', text: 'Ok em' },
    { k: 'ai', text: 'Dạ em lên đơn cho chị liền nha ⚡', d: 1300 },

    // Chốt đơn → màn hình phụ: gửi đơn hàng cho Facebook → đơn tự động
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
    { k: 'ai', text: 'Dạ cảm ơn chị Hương nha 🎉 Mấy sản phẩm khách hay mua kèm đang giảm giá, chị xem thử nha:' },
    { k: 'car', sp: [
        { img: 'omega', ten: 'Dầu cá Omega-3 hộp 100 viên', gia: '315.000đ', cu: '350.000đ', giam: '-10%' },
        { img: 'vitamin', ten: 'Vitamin tổng hợp hộp 60 viên', gia: '252.000đ', cu: '280.000đ', giam: '-10%' },
        { img: 'lo-trang', ten: 'Canxi + D3K2 hộp 60 viên', gia: '265.000đ', cu: '295.000đ', giam: '-10%' },
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
      }, d: 4000 },
    { k: 'cap', e: 'ZBS · Sản phẩm bán chạy', t: '1 tuần sau: gửi sản phẩm bán chạy qua Zalo', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'CN 29/11/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['omega', 'vitamin', 'lo-trang', 'kem-chong-nang'], nhan: 'TOP BÁN CHẠY TUẦN NÀY', mau: '#F97316',
        tieuDe: '🔥 Top bán chạy tuần này tại Minh Châu',
        noiDung: 'Dầu cá **Omega-3**, **vitamin tổng hợp** và **Canxi + D3K2** đang được khách Minh Châu chọn nhiều nhất tuần qua.',
        nut: 'Xem ngay',
      }, d: 4300 },
    { k: 'cap', e: 'ZBS · Khuyến mãi', t: '1 tuần sau nữa: gửi ưu đãi cho khách cũ', s: 'Kéo khách quay lại mua tiếp, không cần khách nhắn' },
    { k: 'zstamp', gio: '19:30', ngay: 'CN 06/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['lo-vien', 'omega', 'vitamin', 'vien-nang'], nhan: 'KHÁCH CŨ · VOUCHER 50.000Đ',
        tieuDe: 'Ưu đãi riêng cho khách cũ',
        noiDung: 'Tặng chị Hương voucher **50.000đ** (mã **MINHCHAU50**) cho đơn từ 300.000đ, freeship toàn quốc. Hạn dùng đến 31/12/2026.',
        nut: 'Dùng voucher ngay',
      }, d: 4400 },

    { k: 'tongket', d: 8500 },
    { k: 'outro', d: 5200 },
  ],
  // Slide tổng kết cuối video: giống hệt YaMe
  tongKet: { tieuDe: 'Quy trình Preny AI giúp', em: 'tăng tỷ lệ chốt đơn', cot: [
    { ten: 'Khách hàng', icon: 'users', dong: ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến'] },
    { ten: 'AI Chatbot', icon: 'bot', dong: ['Phản hồi nhanh tức thì', 'Kêu gọi khách hàng mua hàng', 'Lấy thông tin và chốt đơn'] },
    { ten: 'Bám đuổi', icon: 'bell', dong: ['Gửi 5 tin nhắn trong 7 ngày để bám đuổi khách hàng'] },
    { ten: 'Chốt đơn', icon: 'check', dong: ['Lên đơn', 'Gửi sự kiện mua hàng lên Facebook'] },
    { ten: 'Mua lại', icon: 'refresh', dong: ['Tự động gửi 1 tin nhắn mỗi tuần qua FB và Zalo', 'Sản phẩm bán chạy, giảm giá, sản phẩm mới'] },
  ] },
  panels: {
    tag: { av: 'TH', ten: 'Nguyễn Thu Hương', sub: 'Messenger · từ quảng cáo Viên bổ gan',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#bogan', 'qt hot'], ['#actiso', 'qt hot'], ['#mobile', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#Omega3', 'qt']]]],
      im: 'Khách im từ 14:49, sau khi được báo giá',
      rule: { lb: 'Bám đuổi theo thẻ #bogan', tieuDe: '3 tin ngắn về viên bổ gan',
              dong: [['15 phút', 'Hỏi người dùng, thuốc đang uống'], ['3 tiếng', 'Gửi thành phần, tem chính hãng'], ['20 tiếng', 'Ưu đãi liệu trình 3 tặng 1']] },
      reply: 'Khách báo người dùng, thuốc đang uống · dừng bám đuổi' },
    capi: { tieuDe: 'Gửi đơn hàng cho Facebook', event: 'Purchase', nhan: 'SỰ KIỆN MUA HÀNG', giaTri: '1.140.000đ', pk: 'Purchase · 1.140.000đ',
      dong: [['Đơn hàng', '#MC51207 · Viên bổ gan · 4 hộp'], ['Nguồn khách', 'Quảng cáo Viên bổ gan → Messenger'], ['Giá trị', '1.140.000 VND'], ['Event ID', 'MC51207-PURCHASE (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện mua hàng' },
  },
  donHang: {
    ma: '#MC51207', sp: 'Viên bổ gan Minh Châu · hộp 60 viên', bien: 'Mua 3 tặng 1 · x4 hộp', img: 'lo-vien', gia: '1.140.000đ',
    phi: ['Phí vận chuyển', 'freeship'],
    nv: { ten: 'Dược sĩ Lan', av: 'DL' },
    ten: 'Nguyễn Thu Hương', sdt: '0912 345 678', dc: '35 Nguyễn Trãi, P. Thanh Xuân, Hà Nội', gio: '11:07 · 19/11/2026',
  },
};
