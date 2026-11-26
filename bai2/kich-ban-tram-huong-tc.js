/* Bài 2 (video demo ngang tự chạy): TRẦM HƯƠNG (nhang trầm, nụ trầm, nhang vòng, vòng tay trầm), nhóm thương mại điện tử.
   Làm 26/11/2026 theo người dùng: "làm ngành bán sp về trầm hương TMDT", tham khảo trang Facebook người dùng gửi
   (xưởng nhang trầm ở Thường Tín, Hà Nội: trầm không hóa chất, nhiều phân khúc, có lấy sỉ dịp cuối năm).
   - 1 cảnh duy nhất: bài quảng cáo, 2 khách bình luận (giá nhang trầm, có lấy sỉ cho tiệm không) → trả lời cả 2 "Mình check ib shop nha"
     → AI nhắn inbox trước: báo giá 2 loại nhang cây, gửi đúng ảnh quảng cáo, hỏi khách lấy loại nào, mấy hộp
     → khách hỏi 2 loại khác nhau sao → AI nói ngắn → khách lấy 2 hộp loại đặc biệt
     → AI xin SĐT + địa chỉ → khách im → gắn thẻ → bám đuổi 3 tin 15 phút, 3 tiếng, 20 tiếng → khách gửi SĐT + địa chỉ
     → SĐT thiếu số, AI hỏi lại → tóm tắt đơn → Purchase lên Facebook → đơn tự động, nhân viên xác nhận → cảm ơn + 5 sản phẩm giảm giá
     → Zalo: hỏi thăm + cách bảo quản, bán chạy, đặt trước nhang Tết → tổng kết → logo.
   - Theo quy tắc 25/11/2026: AI chỉ báo giá, gửi ảnh, hỏi số lượng, xin SĐT + địa chỉ; không check khách cũ/mới, không tự tính số lượng.
   - Không hứa công dụng sức khỏe (không nói chữa bệnh, giúp ngủ ngon, an toàn cho bé). Không tin cập nhật vận chuyển.
     Tên xưởng (Trầm Hương Mộc An), giá, khách, SĐT, địa chỉ: minh họa, không dùng tên thật của khách. Ảnh Unsplash, ảnh thật, dùng chung với bài 1. */
window.VN_KB = {
  ten: 'Trầm hương video ngang',
  ketSub: 'Để AI báo giá, gửi ảnh và chốt đơn nhang trầm cho xưởng của bạn',
  shop: { ten: 'Trầm Hương Mộc An', av: 'MA', mau: '#92400E', sub: 'Thường trả lời ngay' },
  anh: {
    'nhang-tram': '../assets/img/u/1424177558417-016f30ac3059_800x800.jpg',
    'nhang-khong-tam': '../assets/img/u/1583182363039-59eac8609ab2_800x800.jpg',
    'nu-tram': '../assets/img/u/1762541115443-d83816da748c_800x800.jpg',
    'nu-tram-2': '../assets/img/u/1639390167093-9c62311fe84d_800x800.jpg',
    'nhang-vong': '../assets/img/u/1612704057720-e8f66bade6ca_800x800.jpg',
    'vong-tay': '../assets/img/u/1634833132196-fcbb1594e665_800x800.jpg',
    'tram-mieng': '../assets/img/u/1736098687867-3ec9f69aff2e_800x800.jpg',
    'phoi-nhang': '../assets/img/u/1774282621255-0ecd7eab1890_800x800.jpg',
    'bo-nhang': '../assets/img/u/1734980168784-9ecec6247821_800x800.jpg',
    'lu-xong': '../assets/img/u/1684039568465-24c31d0cc80f_800x800.jpg',
    'ban-tho': '../assets/img/u/1743307237210-aba18ed486bf_800x800.jpg',
    'hop-go': '../assets/img/u/1644125280477-0ea702960616_800x800.jpg',
    'nhang-dot': '../assets/img/u/1783142978783-c141673fe042_800x800.jpg',
    'lu-sen': '../assets/img/u/1541795083-1b160cf4f3d7_800x800.jpg',
    'thung-hang': '../assets/img/u/1607687441809-dd332b5b9c18_800x800.jpg',
  },
  beats: [
    { k: 'intro', d: 4200 },

    /* ================= BÌNH LUẬN QUẢNG CÁO → INBOX (cảnh duy nhất) ================= */
    { k: 'canh', nhan: 'Bình luận quảng cáo → Inbox', gio: '14:46' },
    { k: 'ad', ad: {
        img: 'nhang-tram', nhan: 'MESSENGER', tieuDe: 'Nhang trầm sạch · xưởng làm thủ công', nut: 'Gửi tin nhắn',
        text: 'NHANG TRẦM SẠCH, KHÔNG HÓA CHẤT 🪔 Nhang cây trầm 30cm hộp 500g chỉ từ 220K. Xưởng se tay, phơi nắng tự nhiên. Có nụ trầm, nhang vòng, vòng tay trầm. Ship toàn quốc. #nhangtram #tramhuong #nhangsach',
      }, d: 1500 },
    { k: 'cap', e: 'Bình luận hỏi giá', t: 'Khách hỏi giá nhang trầm dưới quảng cáo', s: 'Một khách khác hỏi có lấy sỉ cho tiệm không' },
    { k: 'cmt', i: 0, ten: 'Thu Hằng', av: 'TH', text: 'Nhang trầm giá sao shop?' },
    { k: 'cmt', i: 1, ten: 'Quốc Bảo', av: 'QB', text: 'Shop có lấy sỉ cho tiệm đồ thờ ko?' },
    { k: 'cap', e: 'Trả lời cả 2 bình luận', t: 'Trả lời ngắn gọn, mời khách vào inbox', s: 'Báo giá chi tiết trong tin nhắn riêng' },
    { k: 'rep', i: 0, text: 'Mình check ib shop nha 💬' },
    { k: 'rep', i: 1, text: 'Mình check ib shop nha 💬' },
    { k: 'ms', ref: { loai: 'cmt', img: 'nhang-tram', dong1: 'Bạn đã bình luận về quảng cáo của Trầm Hương Mộc An', dong2: '"Nhang trầm giá sao shop?"' }, gio: '14:47' },
    { k: 'cap', e: 'AI nhắn trước', t: 'Inbox trước: báo giá, gửi đúng ảnh quảng cáo', s: 'Rồi hỏi khách lấy loại nào, mấy hộp' },
    { k: 'ai', text: 'Dạ chào chị Hằng, nhang cây trầm 30cm bên em có 2 loại: **loại thường 220.000đ/hộp 500g**, **loại đặc biệt 450.000đ/hộp 500g** ạ.' },
    { k: 'ai', img: 'nhang-tram' },
    { k: 'ai', text: 'Chị muốn lấy **loại nào, mấy hộp** ạ?' },
    { k: 'cap', e: 'Khách hỏi thêm', t: 'Khách hỏi 2 loại khác nhau chỗ nào', s: 'AI nói ngắn, đúng sản phẩm' },
    { k: 'kh', text: '2 loại khác nhau sao e? nhà c thắp hằng ngày' },
    { k: 'ai', text: 'Dạ loại đặc biệt nhiều bột trầm hơn nên mùi **ngọt, đậm và lưu lâu hơn**, mỗi cây cháy khoảng **45 phút** ạ. Loại thường mùi nhẹ hơn, hợp thắp nhiều cây mỗi ngày.' },
    { k: 'cap', e: 'Khách báo số lượng', t: 'Khách tự nói loại và số hộp', s: 'AI ghi đúng số lượng khách đặt' },
    { k: 'kh', text: 'lấy c 2 hộp loại đặc biệt nha' },
    { k: 'cap', e: 'Xin thông tin lên đơn', t: 'Có số lượng: AI xin SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ em ghi **2 hộp nhang trầm đặc biệt** (500g/hộp), **900.000đ**, miễn phí ship ạ. Chị gửi em **SĐT và địa chỉ** để em lên đơn nha.' },

    // Khách im sau khi được xin SĐT, địa chỉ → màn hình phụ: gắn thẻ (3 hashtag quảng cáo + thẻ từ cuộc chat), bám đuổi 3 tin
    { k: 'seen', d: 1200 },
    { k: 'cap', e: 'Khách im', t: 'Chưa gửi SĐT: Preny tự gắn thẻ khách', s: 'Hashtag của bài quảng cáo thành thẻ của khách' },
    { k: 'panel', v: 'tag', d: 900 },
    { k: 'p', a: 'tag1', d: 450 }, { k: 'p', a: 'tag2', d: 450 }, { k: 'p', a: 'tag3', d: 750 }, { k: 'p', a: 'tag4', d: 650 }, { k: 'p', a: 'tag5', d: 900 },
    { k: 'p', a: 'im', d: 1300 },
    { k: 'p', a: 'rule', d: 2600 },
    { k: 'cap', e: 'Bám đuổi theo thẻ', t: '3 tin ngắn: 15 phút, 3 tiếng, 20 tiếng', s: 'Chỉ nói về đúng loại nhang khách đã chọn' },
    { k: 'time', nhan: '15 phút sau', gio: '15:04', ngay: 'T5 26/11/2026', d: 700 },
    { k: 'ai', text: 'Chị Hằng ơi, em giữ cho chị **2 hộp nhang trầm đặc biệt** rồi ạ. Chị gửi em SĐT, địa chỉ để em đóng hàng gửi chị luôn nha 😊' },
    { k: 'p', a: 'r1', d: 900 },
    { k: 'time', nhan: '3 tiếng sau', gio: '17:49', ngay: 'T5 26/11/2026', d: 700 },
    { k: 'ai', text: 'Em gửi chị ảnh thật nhang bên xưởng nha 🪔 Nhang se tay, phơi nắng tự nhiên rồi mới đóng hộp.' },
    { k: 'ai', imgs: ['phoi-nhang', 'bo-nhang', 'nhang-dot'] },
    { k: 'p', a: 'r2', d: 900 },
    { k: 'time', nhan: '20 tiếng sau', gio: '10:49', ngay: 'T6 27/11/2026', d: 700 },
    { k: 'ai', text: 'Chị chỉ cần gửi **SĐT và địa chỉ** trước 12h là em gửi hàng trong hôm nay, **tặng chị 1 hộp nụ trầm** ạ 🎁' },
    { k: 'p', a: 'r3', d: 1000 },
    { k: 'cap', e: 'Khách quay lại', t: 'Sau tin thứ 3, khách gửi SĐT, địa chỉ', s: 'AI kiểm tra thông tin trước khi lên đơn' },
    { k: 'kh', text: 'Hằng 098361527, 27 ngõ 85 hạ đình thanh xuân hn' },
    { k: 'p', a: 'reply', d: 1600 },
    { k: 'panel', v: null, d: 500 },
    { k: 'cap', e: 'Kiểm tra dữ liệu', t: 'SĐT thiếu 1 số: AI hỏi lại trước khi lên đơn' },
    { k: 'ai', text: 'Dạ SĐT chị gửi mới có **9 số**, chị kiểm tra lại giúp em để shipper gọi được nha 😊' },
    { k: 'kh', text: 'à 0983615274 e' },
    { k: 'cap', e: 'Chốt đơn', t: 'Tự tổng hợp đơn: sản phẩm, quà tặng, SĐT, địa chỉ' },
    { k: 'ai', text: 'Dạ chị kiểm tra lại đơn giúp em nha:\n– 2 hộp nhang trầm đặc biệt 30cm (500g/hộp)\n– Tặng 1 hộp nụ trầm\n– Tổng: **900.000đ** (miễn phí ship)\n– Người nhận: Hằng · 0983615274\n– 27 ngõ 85 Hạ Đình, Thanh Xuân, Hà Nội\nChị xác nhận giúp em đơn này nha.', nut: 'Quản lý đơn hàng', d: 3400 },
    { k: 'cap', e: 'Xong', t: 'Khách chỉ cần nói "Ok e"' },
    { k: 'kh', text: 'Ok e' },
    { k: 'ai', text: 'Dạ em lên đơn, gửi hàng cho chị trong hôm nay nha 🪔', d: 1300 },

    // Chốt đơn → màn hình phụ: gửi đơn hàng cho Facebook → đơn tự động → nhân viên xác nhận
    { k: 'cap', e: 'Gửi đơn về Facebook', t: 'Sự kiện mua hàng gửi ngay lên Facebook', s: 'Quảng cáo tối ưu theo đơn thật' },
    { k: 'panel', v: 'capi', d: 900 },
    { k: 'p', a: 'flow', d: 1500 }, { k: 'p', a: 'event', d: 1300 }, { k: 'p', a: 'ok', d: 2200 },
    { k: 'cap', e: 'Đơn hàng tự động', t: 'Đơn tự lên trên Preny. Xưởng chỉ việc đóng hàng.' },
    { k: 'panel', v: 'don', d: 900 },
    { k: 'p', a: 'f1', d: 550 }, { k: 'p', a: 'f2', d: 550 }, { k: 'p', a: 'f3', d: 550 }, { k: 'p', a: 'f4', d: 550 },
    { k: 'p', a: 'cho', d: 900 },
    { k: 'cap', e: 'Nhân viên xác nhận', t: 'Báo nhân viên: bấm 1 lần là đơn lên', s: 'Người thật kiểm tra lại trước khi gửi' },
    { k: 'p', a: 'nv', d: 1700 }, { k: 'p', a: 'bam', d: 1100 },
    { k: 'p', a: 'xn', d: 3000 },
    { k: 'panel', v: null, d: 500 },

    // Mua xong: tin cảm ơn kèm 5 sản phẩm đang giảm giá
    { k: 'cap', e: 'Bán thêm sau mua', t: 'Cảm ơn khách, gửi kèm 5 sản phẩm đang giảm giá', s: 'Khách bấm "Mua ngay" ngay trong Messenger' },
    { k: 'ai', text: 'Dạ cảm ơn chị Hằng nha 💛 Đơn đã được xác nhận, xưởng gửi hàng trong hôm nay. Bên em đang giảm giá mấy món khách hay lấy kèm, chị xem thử nha:' },
    { k: 'car', sp: [
        { img: 'nu-tram-2', ten: 'Nụ trầm hộp 120 viên', gia: '108.000đ', cu: '120.000đ', giam: '-10%' },
        { img: 'nhang-khong-tam', ten: 'Nhang trầm không tăm 20cm', gia: '144.000đ', cu: '160.000đ', giam: '-10%' },
        { img: 'nhang-vong', ten: 'Nhang vòng trầm 24 khoanh', gia: '162.000đ', cu: '180.000đ', giam: '-10%' },
        { img: 'vong-tay', ten: 'Vòng tay trầm 8 ly', gia: '531.000đ', cu: '590.000đ', giam: '-10%' },
        { img: 'lu-xong', ten: 'Lư xông trầm gốm', gia: '252.000đ', cu: '280.000đ', giam: '-10%' },
      ], d: 5200 },

    // Chăm sóc sau bán qua Zalo
    { k: 'zalo', gio: '19:30', ngay: 'T2 30/11/2026', chip: '2 ngày sau khi nhận · khách đã thắp thử', d: 1500 },
    { k: 'cap', e: 'Chăm sóc sau bán qua Zalo', t: 'Khách nhận hàng: AI hỏi mùi nhang có hợp không', s: 'Dặn cách bảo quản, xin đánh giá trong tin Zalo OA' },
    { k: 'zns', zns: {
        img: 'nhang-dot', tieuDe: 'Chị Hằng ơi, mùi nhang có hợp nhà mình không ạ?',
        noiDung: 'Trầm Hương Mộc An cảm ơn chị đã nhận đơn **#MA26127** (2 hộp nhang trầm đặc biệt). Chị đậy kín hộp, để nơi khô ráo để nhang giữ mùi lâu nha!',
        nut: 'Đánh giá sản phẩm',
      }, d: 4200 },
    { k: 'cap', e: 'ZBS · Sản phẩm bán chạy', t: '1 tuần sau: gửi sản phẩm bán chạy qua Zalo', s: 'Khách không cần trả lời' },
    { k: 'zstamp', gio: '19:30', ngay: 'T2 07/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['nu-tram', 'nhang-vong', 'vong-tay', 'tram-mieng'], nhan: 'TOP BÁN CHẠY TUẦN NÀY', mau: '#F97316',
        tieuDe: '🔥 Top bán chạy tuần này tại Trầm Hương Mộc An',
        noiDung: '**Nụ trầm**, **nhang vòng 24 khoanh** và **vòng tay trầm 8 ly** đang được khách chọn nhiều nhất tuần qua.',
        nut: 'Xem ngay',
      }, d: 4600 },
    { k: 'cap', e: 'ZBS · Đặt trước nhang Tết', t: '1 tuần sau nữa: mời khách đặt trước nhang Tết', s: 'Kéo khách quay lại mua tiếp, không cần khách nhắn' },
    { k: 'zstamp', gio: '19:30', ngay: 'T2 14/12/2026', chip: '1 tuần sau', d: 800 },
    { k: 'zns', zns: {
        banner: ['ban-tho', 'nhang-tram', 'hop-go', 'nu-tram-2'], nhan: 'ĐẶT TRƯỚC NHANG TẾT',
        tieuDe: 'Đặt trước nhang trầm cho Tết Đinh Mùi',
        noiDung: 'Đặt trước nhang trầm, nụ trầm cho Tết giảm **10%**, gửi hàng đúng ngày chị hẹn. Nhận đặt đến hết 20/01/2027.',
        nut: 'Đặt trước',
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
    tag: { av: 'TH', ten: 'Đinh Thu Hằng', sub: 'Messenger · bình luận quảng cáo Nhang trầm sạch',
      nhom: [['Thẻ từ hashtag bài quảng cáo', [['#nhangtram', 'qt hot'], ['#tramhuong', 'qt hot'], ['#nhangsach', 'ng']]],
             ['Thẻ từ cuộc chat', [['#baogia', 'ht'], ['#NhangDacBiet', 'qt']]]],
      im: 'Khách im từ 14:49, sau khi được xin SĐT, địa chỉ',
      rule: { lb: 'Bám đuổi theo thẻ #nhangtram', tieuDe: '3 tin ngắn về đúng loại nhang khách đã chọn',
              dong: [['15 phút', 'Đã giữ 2 hộp nhang đặc biệt'], ['3 tiếng', 'Gửi ảnh thật nhang phơi ở xưởng'], ['20 tiếng', 'Gửi SĐT trước 12h, tặng nụ trầm']] },
      reply: 'Khách gửi SĐT, địa chỉ · dừng bám đuổi' },
    capi: { tieuDe: 'Gửi đơn hàng cho Facebook', event: 'Purchase', nhan: 'SỰ KIỆN MUA HÀNG', giaTri: '900.000đ', pk: 'Purchase · 900.000đ',
      dong: [['Đơn hàng', '#MA26127 · 2 hộp nhang đặc biệt'], ['Nguồn khách', 'Bình luận quảng cáo Nhang trầm sạch → Messenger'], ['Giá trị', '900.000 VND'], ['Event ID', 'MA26127-PURCHASE (chống trùng)']],
      ok: 'Facebook đã nhận sự kiện mua hàng' },
  },
  donHang: {
    ma: '#MA26127', sp: 'Nhang trầm đặc biệt 30cm', bien: 'Hộp 500g · x2 hộp · tặng 1 hộp nụ trầm', img: 'nhang-tram', gia: '900.000đ',
    nv: { ten: 'Nhân viên Mai', av: 'NM' },
    ten: 'Đinh Thu Hằng', sdt: '0983615274', dc: '27 ngõ 85 Hạ Đình, Q. Thanh Xuân, Hà Nội', gio: '11:03 · 27/11/2026',
  },
};
