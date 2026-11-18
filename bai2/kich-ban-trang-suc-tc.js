/* Kịch bản video demo NGANG 16:9: TRANG SỨC, PHỤ KIỆN (nhẫn cầu hôn, nhẫn cưới, dây chuyền, bông tai, vòng tay), nhóm thương mại điện tử.
   Làm 18/11/2026 theo mẫu YaMe (kich-ban-yame.js), nội dung lấy từ bài 1 (demo/kich-ban/trang-suc-tc.js).
   Mạch:
   - Cảnh 1: bài viết vòng tay vàng 18K đính đá, khách hỏi giá, khách khác hỏi da nhạy cảm đeo có ngứa không → AI trả lời cả 2
     → inbox: báo giá, gửi ảnh thật, hỏi cỡ cổ tay → khách trả lời → xin SĐT, địa chỉ → lên đơn.
   - Cảnh 2: quảng cáo nhẫn cầu hôn → anh Quân hỏi giá → AI gửi đúng ảnh quảng cáo kèm giá → khách chụp nhẫn đai đính tấm
     hỏi "Này thì sao" → khách im → gắn thẻ, bám đuổi 3 tin (cách đo ni bí mật, giấy kiểm định, bản 4ly5 giảm giá)
     → anh quay lại: ngân sách 25 triệu, đo nhẫn cũ của bạn gái 16,5mm (ca khó bài 1) → AI quy ra ni 10, gợi ý bản 4ly5
     → hỏi chữ khắc → SĐT thiếu số → chốt → gửi Purchase → đơn tự động → cảm ơn + 5 món đang giảm
     → Zalo: hỏi thăm sau cầu hôn, dặn bảo quản, đổi size miễn phí; bán chạy; ưu đãi trang sức cưới.
   Tên shop, giá, chính sách, khách, SĐT: dữ liệu minh họa của bài 1. Khách cảnh 1 (Ngọc Mai), size vòng 16, địa chỉ Đà Nẵng,
   giá nhẫn đai đính tấm giảm còn 42.750.000đ: tự đặt (giá cũ ghi "45 triệu" cho vừa thẻ carousel). Ảnh: ảnh có sẵn của bài 1 (Unsplash, không phải hàng của shop). */
window.VN_KB = {
  ten: 'Trang sức video ngang',
  ketSub: 'Để AI bán trang sức cho shop của bạn',
  shop: { ten: 'Minh Khuê Jewelry', av: 'MK', mau: '#A16207', sub: 'Thường trả lời ngay' },
  anh: {
    'nhan-cuoi': '../assets/img/u/1622398925373-3f91b1e275f5_800x800.jpg',      // cặp nhẫn cưới vàng trơn
    'nhan-kim-cuong': '../assets/img/u/1598560917807-1bae44bd2be8_800x800.jpg', // nhẫn vàng, kim cương chủ, đai đính tấm
    'hop-nhan': '../assets/img/u/1559006864-38a01f201f95_800x800.jpg',          // nhẫn kim cương vàng trắng trong hộp nhung
    'day-chuyen': '../assets/img/u/1589128777073-263566ae5e4d_800x800.jpg',     // dây chuyền vàng trắng mặt kim cương tấm
    'bong-tai': '../assets/img/u/1778182553300-7593326ca29d_800x800.jpg',       // bông tai vàng hình vỏ ốc
    'vong-tay': '../assets/img/u/1689367436629-1d288f1e23b6_800x800.jpg',       // vòng tay vàng đính 4 viên đá
    'cua-hang': '../assets/img/u/1622704776938-bed6cd156e04_800x800.jpg',       // cửa hàng trang sức, tủ kính
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= CẢNH 1 · BÀI VIẾT → BÌNH LUẬN → INBOX ================= */
    { k: 'canh', nhan: 'Tình huống 1 · Bình luận xin giá → Inbox', gio: '21:14' },
    { k: 'fb', post: {
        gio: '2 giờ', img: 'vong-tay', likes: '1,5K', soCmt: '92 bình luận',
        text: 'Nhỏ xinh mà sang ✨ Vòng tay vàng 18K đính 4 viên đá, có hóa đơn ghi tuổi vàng, khắc chữ miễn phí. Giá chỉ còn 5,6 triệu!',
      }, d: 1600 },
    { k: 'cap', e: 'Bình luận xin giá', t: 'Khách hỏi giá ngay dưới bài viết', s: 'Một khách khác hỏi da nhạy cảm đeo có ngứa không' },
    { k: 'cmt', i: 0, ten: 'Ngọc Mai', av: 'NM', text: 'Giá sao shop ơi?' },
    { k: 'cmt', i: 1, ten: 'Thanh Vy', av: 'TV', text: 'Da mình nhạy cảm, đeo vòng này có bị ngứa không shop?' },
    { k: 'cap', e: 'Trả lời cả 2 bình luận', t: 'Trả lời ngắn gọn, mời khách vào inbox', s: 'Tư vấn chi tiết trong tin nhắn riêng' },
    { k: 'rep', i: 0, text: 'Mình check ib shop nha 💬' },
    { k: 'rep', i: 1, text: 'Mình check ib shop nha 💬' },

    { k: 'ms', ref: { loai: 'cmt', img: 'vong-tay', dong1: 'Bạn đã bình luận về bài viết của Minh Khuê Jewelry', dong2: '"Giá sao shop ơi?"' }, gio: '21:16' },
    { k: 'cap', e: 'Tự động báo giá', t: 'Inbox trước: báo giá, gửi ảnh thật', s: 'Viết ngắn gọn, tự nhiên như người bán' },
    { k: 'ai', text: 'Dạ chào chị Mai, vòng tay vàng 18K đính đá giá **5.600.000đ** ạ (giá gốc 6.200.000đ).' },
    { k: 'ai', card: { title: 'Vòng tay vàng 18K đính 4 viên đá · có hóa đơn ghi tuổi vàng', gia: '5.600.000đ', cu: '6.200.000đ' } },
    { k: 'ai', img: 'vong-tay' },
    { k: 'ai', text: 'Vòng vàng 18K, khóa cài cũng bằng vàng nên ít gây ngứa. Cổ tay chị khoảng **bao nhiêu cm** để em chọn size nha?' },
    { k: 'cap', e: 'Tư vấn size', t: 'Khách trả lời 1 câu, AI chọn đúng size', s: 'Kiểm tra luôn size đó còn hàng' },
    { k: 'kh', text: 'cổ tay c 15cm nha e' },
    { k: 'ai', text: 'Dạ cổ tay 15cm chị đeo **size 16** vừa xinh ạ, size 16 còn hàng. Chị gửi em **SĐT và địa chỉ** để em lên đơn nha 😊' },
    { k: 'cap', e: 'Chốt đơn', t: 'Xin SĐT, địa chỉ: khách đưa đủ', s: 'AI tóm tắt đơn ngay trong chat' },
    { k: 'kh', text: '0935 618 274, 12 Trần Phú, Hải Châu, Đà Nẵng' },
    { k: 'ai', text: 'Dạ em lên đơn cho chị rồi nha:\n– Vòng tay vàng 18K đính đá, size 16\n– **5.600.000đ**\n– 0935 618 274\n– 12 Trần Phú, Hải Châu, Đà Nẵng\nShop gọi chị xác nhận rồi giao liền ạ 🎉', d: 3800 },

    /* ================= CẢNH 2 · QUẢNG CÁO → MESSENGER ================= */
    { k: 'canh', nhan: 'Tình huống 2 · Quảng cáo → Messenger', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'hop-nhan', nhan: 'MESSENGER', tieuDe: 'Nhẫn cầu hôn 18K · Nhắn shop tư vấn', nut: 'Gửi tin nhắn',
        text: 'Khoảnh khắc "Em đồng ý" 💍 Nhẫn cầu hôn vàng trắng 18K, kim cương thiên nhiên có giấy kiểm định, khắc tên miễn phí, đổi size 30 ngày. #nhancauhon #kimcuong #mobile',
      }, d: 1500 },
    { k: 'cap', e: 'Quảng cáo Facebook', t: 'Khách bấm "Gửi tin nhắn" từ quảng cáo', s: 'Hỏi gì, AI trả lời ngay lập tức' },
    { k: 'tap', d: 1100 },
    { k: 'ms', ref: { loai: 'ad', img: 'hop-nhan', dong1: 'Quân đã trả lời một quảng cáo', dong2: 'Nhẫn cầu hôn 18K · Nhắn shop tư vấn' }, gio: '14:47', d: 900 },
    { k: 'kh', text: 'Nhẫn này giá bao nhiêu shop?' },
    { k: 'cap', e: 'Khách hỏi giá', t: 'AI gửi đúng mẫu trên quảng cáo kèm giá', s: 'Khách không cần mô tả lại sản phẩm' },
    { k: 'ai', text: 'Dạ chào anh Quân, nhẫn cầu hôn vàng trắng 18K, kim cương chủ **5ly4** giá **38.900.000đ** ạ.' },
    { k: 'ai', img: 'hop-nhan' },
    { k: 'ai', text: 'Anh cho em xin **ni tay** của chị và **ngân sách** dự kiến để em tư vấn viên vừa tầm nha.' },
    { k: 'cap', e: 'Không hỏi lại khách', t: 'Khách chụp mẫu khác hỏi "Này thì sao"', s: 'Chỉ một câu cộc lốc, không ghi tên mẫu' },
    { k: 'kh', shot: { img: 'nhan-kim-cuong', cap: 'Nhẫn kim cương đai đính tấm ✨ Vàng 18K, có giấy kiểm định' } },
    { k: 'kh', text: 'Này thì sao' },
    { k: 'cap', e: 'Nhận diện sản phẩm từ ảnh', t: 'Đúng mẫu. Đúng giá. Đúng tồn kho.', s: 'AI đọc ảnh khách gửi, khớp với kho sản phẩm của shop' },
    { k: 'ai', text: 'Dạ đây là **nhẫn kim cương đai đính tấm** vàng 18K ạ, shop còn hàng anh nha.' },
    { k: 'ai', card: { title: 'Nhẫn kim cương vàng 18K đai đính tấm · kim cương chủ có giấy kiểm định', gia: '45.000.000đ' } },
    { k: 'ai', img: 'nhan-kim-cuong' },
    { k: 'ai', text: 'Anh cho em xin ni tay và ngân sách để em tư vấn cả 2 mẫu nha.' },

    // Khách im → màn hình phụ: gắn thẻ (3 hashtag của bài quảng cáo + thẻ từ cuộc chat), bám đuổi 3 tin theo thẻ
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Preny tự gắn thẻ đúng mẫu khách quan tâm', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi theo thẻ', t: '3 tin ngắn: 15 phút, 3 tiếng, 20 tiếng', s: 'Chỉ nói về đúng mẫu khách quan tâm' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Anh Quân ơi, chưa biết ni tay chị thì anh **mượn lén 1 chiếc nhẫn** chị hay đeo, đo đường kính trong gửi em là được nha 😊' },
    { k: 'p', a: 'r1', d: 900 },
    { k: 'time', nhan: '3 tiếng sau', gio: '17:49', ngay: 'T4 18/11/2026', d: 700 },
    { k: 'ai', text: 'Em gửi anh ảnh cửa hàng nha 📸 Kim cương có **giấy kiểm định**, mã số khắc trên viên trùng với giấy.' },
    { k: 'ai', img: 'cua-hang' },
    { k: 'p', a: 'r2', d: 900 },
    { k: 'time', nhan: '20 tiếng sau', gio: '10:49', ngay: 'T5 19/11/2026', d: 700 },
    { k: 'ai', text: 'Mẫu anh xem có bản **kim cương 4ly5**, chốt hôm nay em **giảm 1 triệu còn 21.900.000đ** + tặng **hộp nhẫn có đèn** ạ 🎁' },
    { k: 'p', a: 'r3', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 3, khách trả lời để chốt đơn', s: 'AI quy ra ni, tư vấn theo ngân sách' },
    { k: 'kh', text: 'Tầm 25tr thôi e. Nhẫn cũ của cô ấy a đo được 16,5mm' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },

    { k: 'cap', e: 'Tư vấn theo ngân sách', t: '16,5mm → ni 10. Ngân sách 25 triệu → bản 4ly5.', s: 'Rồi chủ động hỏi: lấy mẫu nào?' },
    { k: 'ai', text: 'Dạ 16,5mm là **ni 10** ạ. Ngân sách 25 triệu thì bản **4ly5** giá **21.900.000đ** là vừa, mẫu đai đính tấm sẽ vượt. Anh lấy mẫu nào để em lên đơn nha?' },
    { k: 'kh', text: 'Lấy bản 4ly5 em' },
    { k: 'cap', e: 'Hỏi đúng thứ còn thiếu', t: 'Chọn xong mẫu: AI hỏi chữ muốn khắc', s: 'Khắc tên miễn phí, giao kín hộp' },
    { k: 'ai', text: 'Dạ shop **khắc tên miễn phí** trong nhẫn, giao kín hộp để anh giữ bí mật ạ. Anh muốn khắc chữ gì nha?' },
    { k: 'kh', text: 'Khắc Q & L 24.12 nha' },
    { k: 'ai', text: 'Dạ em ghi nhẫn **4ly5, ni 10**, khắc **Q & L 24.12**, giá **21.900.000đ**. Anh gửi em **SĐT và địa chỉ** nhận nha, giao về công ty cho kín đáo cũng được ạ.' },
    { k: 'cap', e: 'Kiểm tra dữ liệu', t: 'SĐT thiếu số → hỏi lại ngay lập tức' },
    { k: 'kh', text: '0909 735 12, giao công ty 25 Nguyễn Thị Minh Khai, Q.1' },
    { k: 'ai', text: 'Dạ em ghi địa chỉ công ty rồi ạ, nhưng số **0909 735 12** hình như thiếu 1 số, anh kiểm tra lại giúp em nha.' },
    { k: 'kh', text: '0909 735 128' },
    { k: 'cap', e: 'Chốt đơn', t: 'Tự tổng hợp đơn: mẫu, ni, chữ khắc, SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ anh kiểm tra lại đơn giúp em nha:\n– Nhẫn cầu hôn vàng trắng 18K, kim cương 4ly5, ni 10\n– Khắc: Q & L 24.12 · tặng hộp nhẫn có đèn\n– Tổng: **21.900.000đ**, kiểm hàng rồi thanh toán\n– 0909 735 128\n– 25 Nguyễn Thị Minh Khai, Q.1, TP.HCM\nAnh xác nhận giúp em đơn này nha.', nut: 'Quản lý đơn hàng', d: 3600 },
    { k: 'cap', e: 'Xong', t: 'Khách chỉ cần nói "Ok em"' },
    { k: 'kh', text: 'Ok em' },
    { k: 'ai', text: 'Dạ em lên đơn, khắc tên xong giao kín tận tay anh nha ⚡', d: 1300 },

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

    // Mua xong: tin cảm ơn kèm 5 món đang giảm giá (afterSale.sp của bài 1, khách cũ giảm 5%)
    { k: 'cap', e: 'Bán thêm sau mua', t: 'Cảm ơn khách, gửi kèm 5 món đang giảm giá', s: 'Khách bấm "Mua ngay" ngay trong Messenger' },
    { k: 'ai', text: 'Dạ cảm ơn anh Quân nha 🎉 Đơn đã xác nhận, khắc tên xong shop giao liền. Shop đang giảm mấy món cô dâu chú rể hay chọn, anh xem thử nha:' },
    { k: 'car', sp: [
        { img: 'nhan-cuoi', ten: 'Nhẫn cưới đôi vàng 18K', gia: '11.305.000đ', cu: '11.900.000đ', giam: '-5%' },
        { img: 'day-chuyen', ten: 'Dây chuyền kim cương vàng trắng', gia: '8.455.000đ', cu: '8.900.000đ', giam: '-5%' },
        { img: 'bong-tai', ten: 'Bông tai vàng 18K hình ốc', gia: '3.990.000đ', cu: '4.200.000đ', giam: '-5%' },
        { img: 'vong-tay', ten: 'Vòng tay vàng 18K đính đá', gia: '5.600.000đ', cu: '6.200.000đ', giam: '-10%' },
        { img: 'nhan-kim-cuong', ten: 'Nhẫn kim cương đai đính tấm', gia: '42.750.000đ', cu: '45 triệu', giam: '-5%' },
      ], d: 5200 },

    // Chăm sóc sau bán qua Zalo: hỏi thăm sau khi cầu hôn, dặn bảo quản, đổi size miễn phí
    { k: 'zalo', gio: '19:30', ngay: 'T5 26/11/2026', chip: '1 tuần sau · khách đã nhận nhẫn', d: 1500 },
    { k: 'cap', e: 'Chăm sóc sau bán qua Zalo', t: 'Khách nhận nhẫn: hỏi thăm, dặn bảo quản', s: 'Xin đánh giá ngay trong tin Zalo OA của shop' },
    { k: 'zns', zns: {
        img: 'hop-nhan', tieuDe: 'Anh Quân ơi, cầu hôn suôn sẻ không ạ? 💍',
        noiDung: 'Minh Khuê cảm ơn anh đã nhận đơn **#MK61207**. Anh dặn chị tháo nhẫn khi làm việc nhà, đi bơi; chưa vừa tay shop **đổi size miễn phí** nha!',
        nut: 'Đánh giá sản phẩm',
      }, d: 4200 },
    { k: 'cap', e: 'ZBS · Sản phẩm bán chạy', t: '1 tuần sau: gửi mẫu bán chạy qua Zalo', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'T5 03/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['nhan-cuoi', 'day-chuyen', 'bong-tai', 'vong-tay'], nhan: 'TOP BÁN CHẠY TUẦN NÀY', mau: '#F97316',
        tieuDe: '🔥 Top bán chạy tuần này tại Minh Khuê',
        noiDung: '**Nhẫn cưới đôi vàng 18K**, dây chuyền kim cương và **bông tai hình ốc** đang được khách Minh Khuê chọn nhiều nhất tuần qua.',
        nut: 'Xem ngay',
      }, d: 4600 },
    { k: 'cap', e: 'ZBS · Khuyến mãi', t: '1 tuần sau nữa: gửi ưu đãi cho khách cũ', s: 'Kéo khách quay lại mua tiếp, không cần khách nhắn' },
    { k: 'zstamp', gio: '19:30', ngay: 'T5 10/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['nhan-cuoi', 'day-chuyen', 'nhan-kim-cuong', 'bong-tai'], nhan: 'TRANG SỨC CƯỚI · KHÁCH CŨ GIẢM 5%',
        tieuDe: 'Ưu đãi riêng cho khách đã mua tại Minh Khuê',
        noiDung: 'Nhẫn cưới đôi, trang sức cô dâu giảm **5%**, khắc tên miễn phí. Tặng thêm voucher **MINHKHUE500** giảm 500.000đ cho đơn từ 5 triệu.',
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
    tag: { av: 'MQ', ten: 'Lê Minh Quân', sub: 'Messenger · từ quảng cáo Nhẫn cầu hôn 18K',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#nhancauhon', 'qt hot'], ['#kimcuong', 'qt hot'], ['#mobile', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#NhanDaiDinhTam', 'qt']]]],
      im: 'Khách im từ 14:49, sau khi được báo giá',
      rule: { lb: 'Bám đuổi theo thẻ #nhancauhon', tieuDe: '3 tin ngắn về nhẫn cầu hôn',
              dong: [['15 phút', 'Chỉ cách đo ni bí mật'], ['3 tiếng', 'Ảnh cửa hàng, giấy kiểm định'], ['20 tiếng', 'Bản 4ly5 giảm giá, tặng hộp đèn']] },
      reply: 'Khách trả lời "Tầm 25tr thôi e" · dừng bám đuổi' },
    capi: { tieuDe: 'Gửi đơn hàng cho Facebook', event: 'Purchase', nhan: 'SỰ KIỆN MUA HÀNG', giaTri: '21.900.000đ', pk: 'Purchase · 21.900.000đ',
      dong: [['Đơn hàng', '#MK61207 · Nhẫn 4ly5 · ni 10'], ['Nguồn khách', 'Quảng cáo Nhẫn cầu hôn 18K → Messenger'], ['Giá trị', '21.900.000 VND'], ['Event ID', 'MK61207-PURCHASE (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện mua hàng' },
  },
  donHang: {
    ma: '#MK61207', sp: 'Nhẫn cầu hôn vàng trắng 18K kim cương 4ly5', bien: 'Ni 10 · khắc Q & L 24.12 · x1', img: 'hop-nhan', gia: '21.900.000đ',
    nv: { ten: 'Chuyên viên Hà', av: 'CH' },
    ten: 'Lê Minh Quân', sdt: '0909 735 128', dc: '25 Nguyễn Thị Minh Khai, Q.1, TP.HCM (công ty)', gio: '11:05 · 19/11/2026',
  },
};
