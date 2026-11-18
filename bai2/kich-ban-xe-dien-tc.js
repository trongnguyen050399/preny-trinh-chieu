/* Kịch bản video demo NGANG 16:9: PHƯƠNG TIỆN (xe máy điện, xe đạp điện, mũ bảo hiểm, phụ kiện), nhóm thương mại điện tử.
   Làm 18/11/2026 theo mẫu YaMe (kich-ban-yame.js), nội dung lấy từ bài 1 (demo/kich-ban/xe-dien-tc.js).
   Mạch:
   - Cảnh 1: bài viết mũ bảo hiểm cả đầu mùa mưa rét, khách hỏi giá, khách khác hỏi con đội size gì → AI trả lời cả 2
     → inbox: báo giá, gửi ảnh thật, hỏi vòng đầu → khách trả lời → xin SĐT, địa chỉ → lên đơn.
   - Cảnh 2: quảng cáo xe máy điện học sinh → chị Hạnh hỏi giá → AI gửi đúng ảnh quảng cáo kèm giá → khách chụp xe bản cổ điển
     hỏi "Này thì sao" → khách im → gắn thẻ, bám đuổi 3 tin (pin tháo rời mang lên nhà sạc, ảnh cửa hàng, giảm giá + áo mưa)
     → chị quay lại: con đi 15km/ngày, đường hay ngập (ca khó bài 1) → AI tính số ngày sạc, nói chống nước IP67, ngập sâu thì dắt bộ
     → khách chọn xe học sinh → hỏi màu → xin SĐT, địa chỉ, người đứng tên xe → thiếu số căn → chốt → gửi Purchase → đơn tự động
     → cảm ơn + 5 món đang giảm → Zalo: hỏi thăm, dặn sạc đúng cách; bán chạy; ưu đãi mùa mưa rét.
   Không bịa luật: chỉ nói "làm đủ giấy tờ, biển số trọn gói" như bài 1.
   Tên shop, giá, chính sách, khách, SĐT: dữ liệu minh họa của bài 1. Khách cảnh 1 (Bảo Ngọc), vòng đầu 57cm → size M, địa chỉ Long Biên,
   giá bảo hiểm thân xe giảm còn 405.000đ: tự đặt. Ảnh: ảnh có sẵn của bài 1 (Unsplash, không phải hàng của shop). */
window.VN_KB = {
  ten: 'Xe điện video ngang',
  ketSub: 'Để AI bán xe điện cho shop của bạn',
  shop: { ten: 'Xe Điện Gió Xanh', av: 'GX', mau: '#0F766E', sub: 'Thường trả lời ngay' },
  anh: {
    'xe-may-dien': '../assets/img/u/1642665129048-4440bf8f97db_800x800.jpg',   // xe máy điện trắng, cô gái đội mũ bảo hiểm
    'xe-may-dien-2': '../assets/img/u/1749035803294-61356ea3cad8_800x800.jpg', // xe đạp điện bánh to, đậu dưới hầm
    'xe-vang': '../assets/img/u/1538895490524-0ded232a96d8_800x800.jpg',       // xe tay ga màu vàng kiểu cổ điển
    'xe-den': '../assets/img/u/1648204834832-78e68052c04f_800x800.jpg',        // xe máy điện đen nhám trên đường
    'mu-bao-hiem': '../assets/img/u/1649027421785-6827863f0891_800x800.jpg',   // mũ bảo hiểm cả đầu màu đen
    'cua-hang': '../assets/img/u/1671354925315-229af5178a83_800x800.jpg',      // showroom xe nhìn từ trên
    'duong-pho': '../assets/img/u/1644377931361-8a509fa5c4cd_800x800.jpg',     // đường phố đông xe máy
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= CẢNH 1 · BÀI VIẾT → BÌNH LUẬN → INBOX ================= */
    { k: 'canh', nhan: 'Tình huống 1 · Bình luận xin giá → Inbox', gio: '21:14' },
    { k: 'fb', post: {
        gio: '2 giờ', img: 'mu-bao-hiem', likes: '1,3K', soCmt: '81 bình luận',
        text: 'Mùa mưa rét tới rồi 🌧 Mũ bảo hiểm cả đầu có kính chắn mưa, lót tháo ra giặt được, kín gió cho con đi học. Giá chỉ 650K!',
      }, d: 1600 },
    { k: 'cap', e: 'Bình luận xin giá', t: 'Khách hỏi giá ngay dưới bài viết', s: 'Một khách khác hỏi tư vấn size ở bình luận kế bên' },
    { k: 'cmt', i: 0, ten: 'Bảo Ngọc', av: 'BN', text: 'Giá sao shop ơi?' },
    { k: 'cmt', i: 1, ten: 'Minh Tuấn', av: 'MT', text: 'Con mình 15 tuổi đội size gì vừa shop, tư vấn giúp mình với' },
    { k: 'cap', e: 'Trả lời cả 2 bình luận', t: 'Trả lời ngắn gọn, mời khách vào inbox', s: 'Tư vấn chi tiết trong tin nhắn riêng' },
    { k: 'rep', i: 0, text: 'Mình check ib shop nha 💬' },
    { k: 'rep', i: 1, text: 'Mình check ib shop nha 💬' },

    { k: 'ms', ref: { loai: 'cmt', img: 'mu-bao-hiem', dong1: 'Bạn đã bình luận về bài viết của Xe Điện Gió Xanh', dong2: '"Giá sao shop ơi?"' }, gio: '21:16' },
    { k: 'cap', e: 'Tự động báo giá', t: 'Inbox trước: báo giá, gửi ảnh thật', s: 'Viết ngắn gọn, tự nhiên như người bán' },
    { k: 'ai', text: 'Dạ chào chị Ngọc, mũ bảo hiểm cả đầu có kính chắn mưa giá **650.000đ** ạ.' },
    { k: 'ai', card: { title: 'Mũ bảo hiểm cả đầu · kính chắn mưa · lót tháo giặt · màu đen', gia: '650.000đ' } },
    { k: 'ai', img: 'mu-bao-hiem' },
    { k: 'ai', text: 'Mũ kín gió, đỡ ướt mặt. Chị cho em xin **vòng đầu** người đội để em chọn size nha?' },
    { k: 'cap', e: 'Tư vấn size', t: 'Khách trả lời 1 câu, AI chọn đúng size', s: 'Kiểm tra luôn size đó còn hàng' },
    { k: 'kh', text: 'vòng đầu con c 57cm e' },
    { k: 'ai', text: 'Dạ vòng đầu 57cm đội **size M** vừa khít ạ, size M còn hàng. Chị gửi em **SĐT và địa chỉ** để em lên đơn nha 😊' },
    { k: 'cap', e: 'Chốt đơn', t: 'Xin SĐT, địa chỉ: khách đưa đủ', s: 'AI tóm tắt đơn ngay trong chat' },
    { k: 'kh', text: '0983 427 615, 46 Nguyễn Văn Cừ, Long Biên, HN' },
    { k: 'ai', text: 'Dạ em lên đơn cho chị rồi nha:\n– Mũ bảo hiểm cả đầu, size M\n– **650.000đ**\n– 0983 427 615\n– 46 Nguyễn Văn Cừ, Long Biên, HN\nShop gọi chị xác nhận rồi giao liền ạ 🎉', d: 3800 },

    /* ================= CẢNH 2 · QUẢNG CÁO → MESSENGER ================= */
    { k: 'canh', nhan: 'Tình huống 2 · Quảng cáo → Messenger', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'xe-may-dien', nhan: 'MESSENGER', tieuDe: 'Xe điện học sinh · Nhắn shop tư vấn', nut: 'Gửi tin nhắn',
        text: 'Con lên cấp 3 tự đi học 🛵 Xe máy điện học sinh pin tháo rời, đi khoảng 80km mỗi lần sạc, pin xách lên nhà sạc, chống nước IP67. #xemaydien #hocsinh #mobile',
      }, d: 1500 },
    { k: 'cap', e: 'Quảng cáo Facebook', t: 'Khách bấm "Gửi tin nhắn" từ quảng cáo', s: 'Hỏi gì, AI trả lời ngay lập tức' },
    { k: 'tap', d: 1100 },
    { k: 'ms', ref: { loai: 'ad', img: 'xe-may-dien', dong1: 'Hạnh đã trả lời một quảng cáo', dong2: 'Xe điện học sinh · Nhắn shop tư vấn' }, gio: '14:47', d: 900 },
    { k: 'kh', text: 'Xe này giá bao nhiêu shop?' },
    { k: 'cap', e: 'Khách hỏi giá', t: 'AI gửi đúng mẫu trên quảng cáo kèm giá', s: 'Khách không cần mô tả lại sản phẩm' },
    { k: 'ai', text: 'Dạ chào chị Hạnh, xe máy điện học sinh pin tháo rời giá **16.900.000đ** ạ, làm biển số trọn gói.' },
    { k: 'ai', img: 'xe-may-dien' },
    { k: 'ai', text: 'Con đi học mỗi ngày **khoảng bao nhiêu km** để em tư vấn đúng xe nha chị?' },
    { k: 'cap', e: 'Không hỏi lại khách', t: 'Khách chụp mẫu khác hỏi "Này thì sao"', s: 'Chỉ một câu cộc lốc, không ghi tên mẫu' },
    { k: 'kh', shot: { img: 'xe-vang', cap: 'Hàng mới về 🔥 Xe máy điện bản cổ điển màu vàng' } },
    { k: 'kh', text: 'Này thì sao' },
    { k: 'cap', e: 'Nhận diện sản phẩm từ ảnh', t: 'Đúng mẫu. Đúng giá. Đúng tồn kho.', s: 'AI đọc ảnh khách gửi, khớp với kho sản phẩm của shop' },
    { k: 'ai', text: 'Dạ đây là xe máy điện **bản cổ điển màu vàng** ạ, hàng mới về, shop còn xe chị nha.' },
    { k: 'ai', card: { title: 'Xe máy điện bản cổ điển màu vàng · làm biển số trọn gói', gia: '19.900.000đ' } },
    { k: 'ai', img: 'xe-vang' },
    { k: 'ai', text: 'Chị cho em xin quãng đường đi mỗi ngày để em tư vấn cả 2 xe nha.' },

    // Khách im → màn hình phụ: gắn thẻ (3 hashtag của bài quảng cáo + thẻ từ cuộc chat), bám đuổi 3 tin theo thẻ
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Preny tự gắn thẻ đúng mẫu khách quan tâm', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi theo thẻ', t: '3 tin ngắn: 15 phút, 3 tiếng, 20 tiếng', s: 'Chỉ nói về đúng mẫu khách quan tâm' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Chị Hạnh ơi, xe học sinh pin **tháo rời, có quai xách**, con mang lên nhà sạc được, không cần sạc dưới hầm ạ 🔋' },
    { k: 'p', a: 'r1', d: 900 },
    { k: 'time', nhan: '3 tiếng sau', gio: '17:49', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Em gửi chị ảnh cửa hàng nha 📸 Xe có sẵn, chị dẫn con qua chạy thử được ạ.' },
    { k: 'ai', img: 'cua-hang' },
    { k: 'p', a: 'r2', d: 900 },
    { k: 'time', nhan: '20 tiếng sau', gio: '10:49', ngay: 'T5 19/11/2026', d: 700 },
    { k: 'ai', text: 'Xe học sinh chị hỏi, chốt hôm nay em **giảm 1 triệu còn 15.900.000đ**, tặng thêm **áo mưa bộ** ạ 🎁' },
    { k: 'p', a: 'r3', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 3, khách trả lời để chốt đơn', s: 'Kèm câu hỏi khó: đường hay ngập' },
    { k: 'kh', text: 'Con đi tầm 15km/ngày. Mùa mưa đường nhà c hay ngập, đi qua có sao k e?' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },

    { k: 'cap', e: 'Tư vấn đúng nhu cầu', t: '15km/ngày → 4–5 ngày mới sạc 1 lần', s: 'Nói rõ ngập tới đâu thì đi được, rồi hỏi chọn xe' },
    { k: 'ai', text: 'Dạ con đi 15km/ngày thì **4–5 ngày mới sạc 1 lần** ạ. Xe **chống nước IP67**, ngập dưới nửa bánh đi chậm qua được, sâu hơn thì dắt bộ nha chị.' },
    { k: 'ai', text: 'Con đi học thì **xe học sinh** nhẹ, tiện hơn ạ. Chị lấy xe học sinh hay bản cổ điển để em lên đơn nha?' },
    { k: 'kh', text: 'Xe học sinh nha em' },
    { k: 'cap', e: 'Hỏi đúng thứ còn thiếu', t: 'Khách chọn xe học sinh: AI hỏi tiếp màu', s: 'Gửi ảnh 2 màu để khách chọn nhanh' },
    { k: 'ai', text: 'Dạ xe học sinh có màu **Trắng** và **Đen nhám**, cùng giá **15.900.000đ**. Chị lấy màu nào ạ?' },
    { k: 'ai', imgs: ['xe-may-dien', 'xe-den'] },
    { k: 'kh', text: 'Màu trắng e' },
    { k: 'ai', text: 'Dạ em ghi xe **màu Trắng**, 15.900.000đ. Chị gửi em **SĐT, địa chỉ** và **tên người đứng tên xe** để làm biển số nha.' },
    { k: 'cap', e: 'Kiểm tra dữ liệu', t: 'Thiếu số căn hộ → hỏi lại ngay lập tức' },
    { k: 'kh', text: '0938 214 657, chung cư Hoa Sen, P. Yên Hòa. Đứng tên c Nguyễn Thu Hạnh' },
    { k: 'ai', text: 'Dạ em ghi rồi ạ. Chị cho em xin thêm **số căn, tòa** để em giao xe tận nhà nha.' },
    { k: 'kh', text: 'Căn 1208 tòa B2 e' },
    { k: 'cap', e: 'Chốt đơn', t: 'Tự tổng hợp đơn: xe, màu, quà tặng, SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ chị kiểm tra lại đơn giúp em nha:\n– Xe máy điện học sinh pin tháo rời, màu Trắng\n– Tặng áo mưa bộ, làm biển số trọn gói\n– Tổng: **15.900.000đ**, trả khi nhận xe\n– Nguyễn Thu Hạnh · 0938 214 657\n– Căn 1208 tòa B2, chung cư Hoa Sen, P. Yên Hòa\nChị xác nhận giúp em đơn này nha.', nut: 'Quản lý đơn hàng', d: 3600 },
    { k: 'cap', e: 'Xong', t: 'Khách chỉ cần nói "Ok em"' },
    { k: 'kh', text: 'Ok em' },
    { k: 'ai', text: 'Dạ em lên đơn, xếp giao xe tận nhà cho chị liền nha ⚡', d: 1300 },

    // Chốt đơn → màn hình phụ: gửi đơn hàng cho Facebook → đơn tự động
    { k: 'cap', e: 'Gửi đơn về Facebook', t: 'Sự kiện mua hàng gửi ngay lên Facebook', s: 'Quảng cáo tối ưu theo đơn thật' },
    { k: 'panel', v: 'capi', d: 900 },
    { k: 'p', a: 'flow', d: 1500 }, { k: 'p', a: 'event', d: 1300 }, { k: 'p', a: 'ok', d: 2200 },
    { k: 'cap', e: 'Đơn hàng tự động', t: 'Đơn tự lên trên Preny. Shop chỉ việc giao.' },
    { k: 'panel', v: 'don', d: 900 },
    { k: 'p', a: 'f1', d: 550 }, { k: 'p', a: 'f2', d: 550 }, { k: 'p', a: 'f3', d: 550 }, { k: 'p', a: 'f4', d: 550 },
    { k: 'p', a: 'cho', d: 900 },
    { k: 'cap', e: 'Nhân viên xác nhận', t: 'Báo nhân viên: bấm 1 lần là đơn lên', s: 'Người thật kiểm tra lại trước khi giao' },
    { k: 'p', a: 'nv', d: 1700 }, { k: 'p', a: 'bam', d: 1100 },
    { k: 'p', a: 'xn', d: 3000 },
    { k: 'panel', v: null, d: 500 },

    // Mua xong: tin cảm ơn kèm 5 món đang giảm giá (afterSale.sp của bài 1, khách cũ giảm 10%)
    { k: 'cap', e: 'Bán thêm sau mua', t: 'Cảm ơn khách, gửi kèm 5 món đang giảm giá', s: 'Khách bấm "Mua ngay" ngay trong Messenger' },
    { k: 'ai', text: 'Dạ cảm ơn chị Hạnh nha 🎉 Shop giao xe tận nhà trong 2–3 ngày. Phụ huynh hay sắm thêm mấy món này cho con nè:' },
    { k: 'car', sp: [
        { img: 'mu-bao-hiem', ten: 'Mũ bảo hiểm cả đầu kính chắn mưa', gia: '585.000đ', cu: '650.000đ', giam: '-10%' },
        { img: 'cua-hang', ten: 'Gói bảo dưỡng xe 2 năm', gia: '990.000đ', cu: '1.200.000đ', giam: '-18%' },
        { img: 'duong-pho', ten: 'Bảo hiểm thân xe 1 năm', gia: '405.000đ', cu: '450.000đ', giam: '-10%' },
        { img: 'xe-may-dien-2', ten: 'Xe đạp điện cho em út', gia: '9.810.000đ', cu: '10.900.000đ', giam: '-10%' },
        { img: 'xe-vang', ten: 'Xe máy điện bản cổ điển', gia: '17.910.000đ', cu: '19,9 triệu', giam: '-10%' },
      ], d: 5200 },

    // Chăm sóc sau bán qua Zalo: hỏi thăm sau 1 tuần đi xe, dặn sạc đúng cách
    { k: 'zalo', gio: '19:30', ngay: 'T4 25/11/2026', chip: '1 tuần sau · khách đã nhận xe', d: 1500 },
    { k: 'cap', e: 'Chăm sóc sau bán qua Zalo', t: 'Khách nhận xe: AI hỏi đi có ổn không', s: 'Xin đánh giá ngay trong tin Zalo OA của shop' },
    { k: 'zns', zns: {
        img: 'xe-may-dien', tieuDe: 'Chị Hạnh ơi, con đi xe ổn không ạ?',
        noiDung: 'Gió Xanh cảm ơn chị đã nhận đơn **#GX21508**. Chị dặn con **sạc khi pin còn 20–30%**, không sạc trong phòng ngủ nha!',
        nut: 'Đánh giá sản phẩm',
      }, d: 4200 },
    { k: 'cap', e: 'ZBS · Sản phẩm bán chạy', t: '1 tuần sau: gửi mẫu bán chạy qua Zalo', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'T4 02/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['xe-may-dien', 'mu-bao-hiem', 'xe-may-dien-2', 'xe-den'], nhan: 'TOP BÁN CHẠY TUẦN NÀY', mau: '#F97316',
        tieuDe: '🔥 Top bán chạy tuần này tại Gió Xanh',
        noiDung: '**Xe máy điện học sinh**, mũ bảo hiểm cả đầu và **xe đạp điện** cho em út đang được phụ huynh chọn nhiều nhất tuần qua.',
        nut: 'Xem ngay',
      }, d: 4600 },
    { k: 'cap', e: 'ZBS · Khuyến mãi', t: '1 tuần sau nữa: gửi ưu đãi cho khách cũ', s: 'Kéo khách quay lại mua tiếp, không cần khách nhắn' },
    { k: 'zstamp', gio: '19:30', ngay: 'T4 09/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['xe-vang', 'mu-bao-hiem', 'xe-may-dien-2', 'cua-hang'], nhan: 'MÙA MƯA RÉT · KHÁCH CŨ GIẢM 10%',
        tieuDe: 'Ưu đãi riêng cho khách đã mua tại Gió Xanh',
        noiDung: 'Xe bản cổ điển, xe đạp điện, mũ bảo hiểm giảm **10%**. Tặng thêm voucher **GIOXANH500** giảm 500.000đ cho đơn từ 5 triệu.',
        nut: 'Mua ngay',
      }, d: 4800 },

    { k: 'tongket', d: 8500 },
    { k: 'outro', d: 5200 },
  ],
  // Slide tổng kết cuối video: giống hệt YaMe (nhóm thương mại điện tử; bám đuổi = 5 tin trong 7 ngày)
  tongKet: { tieuDe: 'Quy trình Preny AI giúp', em: 'tăng tỷ lệ chốt đơn', cot: [
    { ten: 'Khách hàng', icon: 'users', dong: ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến'] },
    { ten: 'AI Chatbot', icon: 'bot', dong: ['Phản hồi nhanh tức thì', 'Kêu gọi khách hàng mua hàng', 'Lấy thông tin và chốt đơn'] },
    { ten: 'Bám đuổi', icon: 'bell', dong: ['Gửi 5 tin nhắn trong 7 ngày để bám đuổi khách hàng'] },
    { ten: 'Chốt đơn', icon: 'check', dong: ['Lên đơn', 'Gửi sự kiện mua hàng lên Facebook'] },
    { ten: 'Mua lại', icon: 'refresh', dong: ['Tự động gửi 1 tin nhắn mỗi tuần qua FB và Zalo', 'Sản phẩm bán chạy, giảm giá, sản phẩm mới'] },
  ] },
  panels: {
    tag: { av: 'TH', ten: 'Nguyễn Thu Hạnh', sub: 'Messenger · từ quảng cáo Xe điện học sinh',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#xemaydien', 'qt hot'], ['#hocsinh', 'qt hot'], ['#mobile', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#XeCoDienVang', 'qt']]]],
      im: 'Khách im từ 14:49, sau khi được báo giá',
      rule: { lb: 'Bám đuổi theo thẻ #xemaydien', tieuDe: '3 tin ngắn về xe máy điện học sinh',
              dong: [['15 phút', 'Pin tháo rời, mang lên nhà sạc'], ['3 tiếng', 'Ảnh cửa hàng, mời chạy thử'], ['20 tiếng', 'Giảm 1 triệu, tặng áo mưa bộ']] },
      reply: 'Khách trả lời "Con đi tầm 15km/ngày" · dừng bám đuổi' },
    capi: { tieuDe: 'Gửi đơn hàng cho Facebook', event: 'Purchase', nhan: 'SỰ KIỆN MUA HÀNG', giaTri: '15.900.000đ', pk: 'Purchase · 15.900.000đ',
      dong: [['Đơn hàng', '#GX21508 · Xe học sinh · Trắng'], ['Nguồn khách', 'Quảng cáo Xe điện học sinh → Messenger'], ['Giá trị', '15.900.000 VND'], ['Event ID', 'GX21508-PURCHASE (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện mua hàng' },
  },
  donHang: {
    ma: '#GX21508', sp: 'Xe máy điện học sinh pin tháo rời', bien: 'Trắng · tặng áo mưa bộ · x1', img: 'xe-may-dien', gia: '15.900.000đ',
    nv: { ten: 'Kỹ thuật Nam', av: 'KN' },
    ten: 'Nguyễn Thu Hạnh', sdt: '0938 214 657', dc: 'Căn 1208 tòa B2, chung cư Hoa Sen, P. Yên Hòa, Hà Nội', gio: '11:05 · 19/11/2026',
  },
};
