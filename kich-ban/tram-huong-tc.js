/* Kịch bản: TRẦM HƯƠNG (nhang trầm, nụ trầm, nhang vòng, vòng tay trầm) — BẢN TRÌNH CHIẾU, nhóm THƯƠNG MẠI ĐIỆN TỬ.
   Làm 26/11/2026 theo người dùng: "làm ngành bán sp về trầm hương TMDT", tham khảo trang Facebook người dùng gửi
   (xưởng nhang trầm ở Thường Tín, Hà Nội: trầm không hóa chất, nhiều phân khúc, có lấy sỉ dịp cuối năm).
   Từ 23/11/2026 bỏ demo chat vào thẳng (&demo): file chỉ có phần deck cho Bài 1 (slide), không viết steps/features.
   Mạch ngắn trên slide: chị Hằng hỏi giá nhang trầm → AI báo giá 2 loại (thường 220.000đ, đặc biệt 450.000đ/hộp 500g),
     hỏi loại nào, mấy hộp → khách lấy 2 hộp loại đặc biệt 900.000đ → xin SĐT + địa chỉ → lên đơn luôn
     → chăm sóc sau bán: gợi ý nụ trầm, nhang không tăm, nhang vòng, vòng tay trầm, lư xông.
   Theo quy tắc 25/11/2026: AI chỉ báo giá, gửi ảnh, hỏi số lượng, xin SĐT + địa chỉ; không check khách cũ/mới, không tự tính số lượng.
   Không hứa công dụng sức khỏe: slide "AI không trả lời bừa" lấy đúng ca AI sai hứa "tốt cho bé ngủ ngon".
   Tên xưởng (Trầm Hương Mộc An), giá, khách, SĐT, địa chỉ: dữ liệu minh họa, không dùng tên thật của khách.
   Ảnh: Unsplash, ảnh thật, không phải hàng của xưởng; dùng đường dẫn trong máy. */
(function () {
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'nhang-tram': '1424177558417-016f30ac3059',      // bó nhang cây màu trầm, khói (ảnh quảng cáo)
    'nhang-khong-tam': '1583182363039-59eac8609ab2', // nhang không tăm trên đĩa đồng
    'nu-tram': '1762541115443-d83816da748c',         // 2 nụ trầm đang cháy
    'nu-tram-2': '1639390167093-9c62311fe84d',       // nụ trầm trên đĩa, khói
    'nhang-vong': '1612704057720-e8f66bade6ca',      // nhang vòng trên lư đồng
    'vong-tay': '1634833132196-fcbb1594e665',        // vòng tay hạt gỗ nâu
    'tram-mieng': '1736098687867-3ec9f69aff2e',      // miếng gỗ trầm
    'phoi-nhang': '1774282621255-0ecd7eab1890',      // nhang phơi ngoài trời
    'bo-nhang': '1734980168784-9ecec6247821',        // bó nhang xòe phơi nắng
    'lu-xong': '1684039568465-24c31d0cc80f',         // lư xông có khói
    'ban-tho': '1743307237210-aba18ed486bf',         // bàn thờ hoa quả
    'hop-go': '1644125280477-0ea702960616',          // hộp gỗ đựng nhang
    'nhang-dot': '1783142978783-c141673fe042',       // nhang đang cháy trên bát hương
    'lu-sen': '1541795083-1b160cf4f3d7',             // nhang cắm đế hoa sen
    'thung-hang': '1607687441809-dd332b5b9c18',      // hộp giấy đóng hàng
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    shop: { name: 'Trầm Hương Mộc An', initials: 'MA' },
    headline: { pre: 'Hệ thống AI chatbot giúp tăng trung bình', em: '62% tỷ lệ chốt đơn' },
    sub: 'Tự động hóa toàn bộ quy trình chốt đơn, bám đuổi, lên đơn và chăm sóc khách để tăng hiệu quả bán hàng.',
    cta: 'Dùng thử miễn phí tại **preny.ai**\nHotline **0389 647 778**',

    images: Object.fromEntries(Object.entries(IMG).map(([k, id]) => [k, L(id)])),

    deck: {
      demoDoc: {
        khach: 'Hằng',
        sanPham: 'Nhang trầm sạch 30cm',
        binhLuan: 'Nhang trầm giá sao shop?',
        post: {
          tieuDe: 'NHANG TRẦM SẠCH, KHÔNG HÓA CHẤT 🪔',
          dong: ['Nhang cây trầm 30cm từ 220K/hộp 500g', 'Xưởng se tay, phơi nắng tự nhiên', 'Nụ trầm, nhang vòng, vòng tay trầm', 'Ship toàn quốc'],
          anh: ['nhang-tram', 'phoi-nhang', 'nu-tram', 'vong-tay'],
        },
      },
      dashboard: [
        { ten: 'Nhang cây <span class="grad">trầm 30cm</span>', den: '21/07/2026', khach: 34, tyLe: 0.64 },
        { ten: 'Nụ trầm, <span class="grad">nhang vòng</span>', den: '18/08/2026', khach: 21, tyLe: 0.6 },
        { ten: 'Vòng tay <span class="grad">trầm hương</span>', den: '26/09/2026', khach: 15, tyLe: 0.57 },
      ],
      chatbot: {
        chat: [
          { ref: { img: L(IMG['nhang-tram']), ten: 'Nhang trầm sạch 30cm' } },
          { kh: 'Nhang trầm giá sao shop? nhà c thắp hằng ngày' },
          { ai: 'Dạ nhang cây trầm 30cm: **loại thường 220.000đ**, **loại đặc biệt 450.000đ**/hộp 500g ạ. Chị muốn lấy **loại nào, mấy hộp** ạ?', meta: '⚡ Preny AI trả lời sau 2 giây' },
          { kh: 'lấy c 2 hộp loại đặc biệt nha' },
          { ai: 'Dạ em ghi **2 hộp nhang trầm đặc biệt**, **900.000đ**, miễn phí ship ạ. Chị gửi em SĐT, địa chỉ để em lên đơn nha.' },
          { kh: 'Hằng, 0983 615 274, 27 ngõ 85 Hạ Đình, Thanh Xuân' },
          { ai: 'Dạ em lên đơn, gửi hàng cho chị trong hôm nay ạ 🪔' },
          { don: true },
          { ok: true },
        ],
        don: {
          ten: 'Hằng', sdt: '0983 615 274', diaChi: '27 ngõ 85 Hạ Đình, Thanh Xuân, Hà Nội', ma: '#MA26126', phi: 'miễn phí',
          sp: [{ img: L(IMG['nhang-tram']), ten: 'Nhang trầm đặc biệt 30cm (hộp 500g)', sl: 2, dv: 'hộp', gia: 450000 }],
        },
        anh: {
          img: L(IMG['nhang-vong']),
          kh: 'Loại nhang cuộn tròn như hình shop có ko e?',
          ai: 'Dạ ảnh chị gửi là **nhang vòng trầm** ạ, bên em có hộp **24 khoanh, 180.000đ**, mỗi khoanh cháy khoảng 24 tiếng. Chị lấy thêm mấy hộp ạ?',
        },
      },
      afterSale: {
        loi: 'Cảm ơn chị Hằng đã chọn nhang trầm Mộc An 💛 Khách bên em hay lấy kèm mấy món này ạ:',
        sp: [
          { img: L(IMG['nu-tram-2']), ten: 'Nụ trầm hộp 120 viên', gia: 120000 },
          { img: L(IMG['nhang-khong-tam']), ten: 'Nhang trầm không tăm 20cm', gia: 160000 },
          { img: L(IMG['nhang-vong']), ten: 'Nhang vòng trầm 24 khoanh', gia: 180000 },
          { img: L(IMG['vong-tay']), ten: 'Vòng tay trầm 8 ly', gia: 590000 },
          { img: L(IMG['lu-xong']), ten: 'Lư xông trầm gốm', gia: 252000, cu: 280000 },
        ],
        khach: 'Lấy thêm c 1 hộp nụ trầm nha e',
        pill: '🛍 Khách lấy thêm ngay: đơn tăng từ 900.000đ lên 1.020.000đ',
        fmm: {
          chao: 'Chào chị Hằng 👋 Mộc An nhận đặt trước nhang trầm, nụ trầm cho Tết, đặt sớm được giảm giá, em gửi chị xem trước nha!',
          img: L(IMG['ban-tho']), nhan: 'ĐẶT TRƯỚC NHANG TẾT',
          ten: 'Nhang trầm, nụ trầm Tết', mo: 'Đặt trước giảm 10%, gửi đúng ngày hẹn.', nut: 'Đặt trước',
        },
        zbs: {
          ten: 'Tặng chị Hằng voucher 50.000đ',
          mo: 'Cảm ơn chị đã mua nhang tại Trầm Hương Mộc An. Gửi chị ưu đãi cho lần mua tiếp theo:',
          dong: [['Mã voucher', '**MOCAN50**'], ['Ưu đãi', 'Giảm 50.000đ đơn từ 500.000đ'], ['Hạn dùng', '31/01/2027']],
          nut: 'Dùng voucher ngay',
        },
      },
      bamDuoi: {
        cmpDung: ['Khách nhắn xong im → nhắc đúng loại nhang khách đã hỏi (thẻ <b>#NhangTram</b> từ quảng cáo)',
                  'Báo giá xong im → bám đuổi theo giá: miễn phí ship, quà tặng (thẻ <b>#HoiGia</b>)',
                  'Đúng nhu cầu, đúng lý do im → khách quay lại đặt hàng'],
        hoi: 'Nhang trầm giá sao shop?',
        traLoiThuong: 'Dạ 220.000đ/hộp ạ.',
        refImg: L(IMG['nhang-tram']), refTen: 'Nhang trầm sạch 30cm',
        vd1: {
          kh: 'Nhang bên shop thắp có mùi hắc không e? Nhà c thắp hằng ngày',
          ai: 'Dạ nhang bên em làm từ bột trầm, se tay, mùi ngọt dịu ạ. Chị muốn lấy loại nào ạ?',
          tag: '🏷 #NhangTram', tagNote: 'thẻ từ quảng cáo · khách im 1 ngày',
          nhac: 'Chị ơi, em gửi chị <b>ảnh thật nhang phơi ở xưởng</b> sáng nay, phơi nắng tự nhiên rồi mới đóng hộp ạ 🪔',
          dung: '🎯 Theo thẻ #NhangTram: nhắc đúng loại khách hỏi',
          khach: 'Lấy c 2 hộp loại thường nha e',
        },
        vd2: {
          kh: 'Loại đặc biệt bao nhiêu 1 hộp vậy shop?',
          ai: 'Dạ loại đặc biệt <b>450.000đ</b>/hộp 500g ạ.',
          tag: '🏷 #HoiGia', tagNote: 'báo giá xong khách im 1 ngày',
          nhac: 'Chị ơi, loại đặc biệt chị hỏi hôm qua, đặt từ 2 hộp là em <b>miễn phí ship, tặng 1 hộp nụ trầm</b> ạ. Em lên đơn cho chị nha?',
          dung: '🎯 Theo thẻ #HoiGia: bám đuổi theo giá, đúng lý do khách im',
          khach: 'Ok lên đơn cho c 2 hộp nha e',
        },
      },
      binhLuan: {
        post: '<b>Nhang trầm sạch</b>, không hóa chất · nhang cây 30cm từ 220K/hộp, nụ trầm, nhang vòng, vòng tay trầm 🪔',
        img: L(IMG['bo-nhang']),
        kav: 'QB', kten: 'Quốc Bảo', hoi: 'Shop có lấy sỉ nụ trầm cho tiệm đồ thờ không? Giá sao?',
        traLoi: 'Dạ chào anh Bảo! Shop vừa nhắn tin báo giá chi tiết cho anh, anh xem tin nhắn nhé 💬',
        act2: 'Nhắn tin riêng báo giá sỉ nụ trầm',
        nhan: 'Chào anh Bảo! Nụ trầm hộp 120 viên giá sỉ bên em <b>85.000đ/hộp</b> khi lấy từ 20 hộp ạ. Anh muốn lấy mấy hộp ạ?',
        sp: { ten: 'Nụ trầm hộp 120 viên (giá sỉ)', gia: '85.000đ/hộp', img: L(IMG['nu-tram']) },
        khach: 'Lấy a 30 hộp trước, bán được a lấy thêm',
      },
      duLieu: {
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: nhang trầm tốt cho bé ngủ ngon', 'Bé bị khói, khách giận, shop mất uy tín'],
        hoi: 'Đốt nhang trầm trong phòng ngủ có em bé được không e?',
        aiSai: 'Dạ trầm sạch đốt thoải mái, còn <b>giúp bé ngủ ngon</b> nữa chị nhé 🥰',
        thucTe: '⚠ Thực tế: nhang nào cũng có khói; nên thắp nơi thoáng, không đốt trong phòng kín có trẻ nhỏ',
        gian: 'Đốt trong phòng bé ho cả đêm! Sao nói giúp bé ngủ ngon? 😠',
        cho: 'Dạ chị chờ em một chút để em kiểm tra chính xác cho chị nhé!',
        nv: 'Nhân viên Mai · người thật',
        nvTraLoi: 'Dạ em xin lỗi chị ạ. Nhang trầm vẫn có khói, chị chỉ nên thắp ở phòng thờ hoặc nơi thoáng, không đốt trong phòng kín có bé. Em gửi tặng chị 1 hộp nụ trầm cho lần sau, mong chị thông cảm cho em nhé!',
      },
    },
  };
})();
