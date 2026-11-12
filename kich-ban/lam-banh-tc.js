/* Kịch bản: KHÓA HỌC LÀM BÁNH — BẢN TRÌNH CHIẾU, nhóm CÂN NHẮC NHIỀU. Khung ngang 16:9.
   Demo chat gọn theo yêu cầu: khách gửi ảnh hỏi khóa học → AI tư vấn (ca khó: tin nhắn dài, viết tắt, hỏi dồn nhiều ý,
   so với khóa online rẻ hơn, lo nghỉ buổi / học xong chưa vững) → xin được SĐT là xong.
   Không diễn chăm sóc sau bán, Meta CAPI, remarketing. Không có bước kết thúc: xin được SĐT rồi bấm → là sang slide kế.
   Tên trung tâm, khóa học, học phí, SĐT: dữ liệu minh họa. Ảnh: Unsplash (ảnh thật). */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'banh-hoa': '1609663642184-513594444403',
    'banh-hoa-2': '1788281802522-ca7f7c2e6c9b',
    'thanh-pham': '1604413191066-4dd20bedf486',
    'lop-hoc': '1758874960663-a534d512dd1d',
    'bat-kem': '1786114352364-b354a97bfbce',
    'giao-vien': '1709837167684-47d7ccf0ed89',
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    badge: 'AI CHATBOT · KHÓA HỌC LÀM BÁNH',
    shop: { name: 'Lớp Bánh Mây', initials: 'BM' },
    headline: { pre: 'AI chatbot tư vấn khóa học và', em: 'lấy SĐT học viên' },
    sub: 'Hiểu đúng nhu cầu từng người, xử lý băn khoăn khó rồi xin số điện thoại ngay trong cuộc chat.',
    cta: 'Dùng thử miễn phí tại **preny.ai**\nHotline **0389 647 778**',
    speed: 1.13,
    timing: { read0: 1000, readPerChar: 28, readMax: 4500, type0: 800, typePerChar: 3, typeMax: 1500, fastType: 500,
              featureHold: 1400, sepHold: 1100, cardHold: 4000, introCard: 250 },

    images: Object.fromEntries(Object.entries(IMG).map(([k, id]) => [k, U(id)])),

    features: [
      { title: 'AI hiểu đúng nhu cầu, tư vấn đúng khóa', desc: 'Đọc ảnh, hiểu cả tin nhắn viết tắt.',
        kws: ['Nhận ra mẫu bánh trong ảnh khách gửi', 'Hiểu tin dài, viết tắt, hỏi dồn nhiều ý', 'Gợi ý đúng khóa, đúng lịch, đúng học phí'] },
      { title: 'AI xử lý băn khoăn như tư vấn viên giỏi', desc: 'Trả lời đủ ý, đúng chính sách trung tâm.',
        kws: ['So với khóa online rẻ hơn', 'Lo nghỉ buổi, học xong chưa vững', 'Học phí chia 2 lần'] },
      { title: 'AI xin SĐT, giữ chỗ cho học viên', desc: 'Lead nóng chuyển ngay cho tư vấn viên.',
        kws: ['Cho khách lý do để cho số: giữ chỗ, chưa cần đóng tiền', 'Lấy được SĐT ngay trong cuộc chat', 'Chuyển tư vấn viên gọi lại trong 15 phút'] },
    ],

    steps: [
      { intro: true, hold: 1800 },

      /* ---- 1. Hiểu đúng nhu cầu: ảnh + tin nhắn dài, viết tắt, hỏi dồn ---- */
      { feature: 1 },
      { sep: 'Khách nhắn tin từ quảng cáo Facebook', style: 'time', hold: 800 },
      { img: 'banh-hoa', hold: 1500 },
      { kh: 'e muốn học làm đc bánh như này thì học khóa nào ạ? e chưa bt gì luôn, đi lm hc 8h-17h, học xong muốn bán onl kiếm thêm. hp sao ạ, có lớp tối k? onl e thấy có khóa 500k thôi' },
      { ai: 'Dạ chào chị! Mẫu chị gửi là **bánh kem trang trí hoa buttercream** kiểu Hàn ạ 🌸', fast: true, meta: '⚡ Preny AI trả lời sau 2 giây', kw: 0 },
      { ai: 'Người **mới bắt đầu** như chị, em gợi ý **Khóa bánh kem căn bản & hoa buttercream** (8 buổi): học từ cốt bánh, đánh kem đến bắt hoa như mẫu này ạ.', kw: 1 },
      { ai: 'Chị đi làm giờ hành chính thì có **lớp tối thứ 3 – thứ 5, 18h30–21h**. Học phí **3.900.000đ**, đã gồm nguyên liệu, dụng cụ, buổi nào chị cũng mang bánh về ạ.', kw: 2 },

      /* ---- 2. Xử lý băn khoăn khó ---- */
      { feature: 2 },
      { ai: 'Còn khóa online 500k thì chị chỉ xem video ạ. Ở lớp, giáo viên **sửa tay trực tiếp** từng lần bắt hoa, phần người mới hay hỏng nhất. Buổi cuối còn dạy **tính giá vốn, chụp ảnh bánh để bán online**, đúng mục tiêu của chị ạ.', kw: 0 },
      { kh: 'Nhưng lỡ e bận đột xuất nghỉ 1 buổi, hoặc học xong vẫn làm k đẹp thì sao ạ?' },
      { ai: 'Dạ chị yên tâm: nghỉ buổi nào được **học bù miễn phí** ở lớp khác, học xong chưa vững được **học lại miễn phí trong 6 tháng** ạ. Học phí cũng **đóng được 2 lần** chị nhé.', kw: [1, 2] },
      { kh: 'Vậy cũng ổn, để e sắp xếp thêm' },

      /* ---- 3. Xin SĐT: cho khách lý do để cho số ---- */
      { feature: 3 },
      { ai: 'Dạ lớp tối khai giảng **24/11** chỉ còn **3 chỗ** ạ. Chị cho em xin **SĐT**, em gửi lịch học chi tiết và **giữ chỗ trước** cho chị, chưa cần đóng tiền đâu ạ 😊', kw: 0 },
      { kh: 'Ngọc - 0912 345 678', kw: 1 },
      { ai: 'Dạ em đã giữ chỗ lớp tối 24/11 cho chị Ngọc ạ. Tư vấn viên sẽ gọi chị trong **15 phút** để gửi lịch học nha 💜', meta: '✓ Đã chuyển SĐT cho tư vấn viên', kw: 2, hold: 1500 },
      // Không có { end: true }: bấm → thêm một lần là sang thẳng slide kế.
    ],

    /* ===== Nội dung slide trình chiếu (trinh-chieu.html). Chưa có số liệu thống kê thật → 2 slide thống kê tự ẩn. ===== */
    deck: {
      tieuDe6: 'Hệ thống AI chatbot giúp tăng<br><span class="grad">tỷ lệ chốt SĐT học viên</span>',
      // Không bán hàng vật lý, không lên đơn → 5 tính năng (ngành có lên đơn thì giữ 6 như thường)
      tinhNang: [
        ['AI tư vấn, chủ động lấy lead', 'Lead chất lượng, rủ học thử, chốt khóa'],
        ['Soft follow-up nuôi học viên', 'Gửi video lớp, thành phẩm học viên'],
        ['AI chăm sóc học viên sau bán', 'Nhắc lịch học, mời học khóa nâng cao'],
        ['Bộ công cụ Remarketing FMM và ZBS', 'Khai thác lại dữ liệu học viên cũ'],
        ['Gửi sự kiện Lead qua Meta CAPI', 'Hỗ trợ tối ưu quảng cáo Facebook'],
      ],

      chotDon: {
        nganh: 'dạy làm bánh',
        nguoi: 'Tư vấn viên',
        chotLa: 'AI chốt đơn = lấy SĐT học viên',
        buoc: [
          { t: 'Chạy quảng cáo', d: 'Thu hút người muốn học làm bánh', icon: 'megaphone', own: 'Trung tâm chạy quảng cáo', mock: 'ad', img: L(IMG['banh-hoa-2']), text: 'Khai giảng lớp bánh kem tháng 11 🎂', btn: 'Gửi tin nhắn' },
          { t: 'Bắt đầu chat', d: 'Tư vấn đúng khóa, đúng lịch học', icon: 'chat', ai: true, mock: 'chat',
            msgs: [['kh', 'Mình chưa biết gì, học được không ạ?'], ['ai', 'Dạ được ạ! Chị muốn làm tại nhà hay để bán ạ? 🎂']] },
          { t: 'Xử lý băn khoăn, lấy SĐT', d: 'Học phí, học bù, lớp tối', icon: 'phone', ai: true, chot: true, mock: 'form', fields: ['Chị Ngọc · mới bắt đầu, lớp tối', '0912 345 678'], ok: 'Đã lấy SĐT' },
          { t: 'Tư vấn viên gọi lại', d: 'Gửi lịch, mời học thử miễn phí', icon: 'call', mock: 'lich', ten: 'Học thử miễn phí', gio: '18:30 · Thứ Ba 24/11', ok: 'Đã hẹn học thử' },
          { t: 'Học thử tại lớp', d: 'Trải nghiệm, gặp giáo viên', icon: 'users', mock: 'img', img: L(IMG['lop-hoc']), cap: 'Buổi học thử tại lớp' },
          { t: 'Chốt đơn', d: 'Đóng học phí, giữ chỗ khóa học', icon: 'check', mock: 'img', img: L(IMG['bat-kem']), cap: '✓ Học viên đăng ký khóa' },
        ],
        vong: { t: 'Chăm sóc lại & Remarketing', d: 'Gửi lịch khai giảng mới, mời học viên cũ học khóa nâng cao' },
      },

      bamDuoi: {
        nhan: 'Vì sao soft follow-up của Preny đặc biệt', shopB: 'Trung tâm B',
        cmpSai: ['Khách im → gửi “Bạn còn quan tâm khóa học không ạ?”', 'Không biết khách quan tâm khóa nào, vì sao im', 'Khách thấy phiền, bỏ qua tin nhắn'],
        cmpDung: ['Khách nhắn xong im → nhắc đúng khóa khách quan tâm (thẻ <b>#BanhKem</b> từ quảng cáo)',
                  'Báo giá xong im → bám đuổi theo giá: ưu đãi đăng ký sớm, chia 2 lần (thẻ <b>#HoiGia</b>)',
                  'Đúng nhu cầu, đúng lý do im → học viên quay lại đăng ký'],
        hoi: 'Khóa bánh kem học phí sao ạ?',
        traLoiThuong: 'Dạ 3.900.000đ ạ.',
        nhacChung: 'Bạn còn quan tâm khóa học không ạ? 😊',
        refImg: L(IMG['banh-hoa-2']), refTen: 'Lớp bánh kem căn bản',
        vd1: {
          kh: 'Mình muốn hỏi lớp bánh kem ạ',
          ai: 'Dạ chị đã từng làm bánh chưa ạ? Chị học để làm tại nhà hay để bán nha?',
          tag: '🏷 #BanhKem', tagNote: 'thẻ từ quảng cáo · khách im 1 ngày',
          nhac: 'Chị ơi, em gửi chị thành phẩm <b>buổi đầu của học viên lớp bánh kem</b> tuần này nè, toàn bạn mới bắt đầu như chị 🎂 Chị muốn học lớp tối hay cuối tuần ạ?',
          dung: '🎯 Theo thẻ #BanhKem: nhắc đúng khóa khách quan tâm',
          khach: 'Lớp tối nha em',
        },
        vd2: {
          kh: 'Khóa bánh kem học phí sao ạ?',
          ai: 'Dạ <b>Khóa bánh kem căn bản</b> 8 buổi, học phí <b>3.900.000đ</b>, đã gồm nguyên liệu ạ.',
          tag: '🏷 #HoiGia', tagNote: 'báo giá xong khách im 1 ngày',
          nhac: 'Chị Ngọc ơi, tuần này <b>đăng ký sớm giảm 500.000đ, còn 3.400.000đ</b>, đóng được 2 lần ạ. Em giữ chỗ lớp tối cho chị nha?',
          dung: '🎯 Theo thẻ #HoiGia: bám đuổi theo giá, đúng lý do khách im',
          khach: 'Ok giữ chỗ giúp chị',
        },
      },

      binhLuan: {
        post: 'Khai giảng <b>lớp bánh kem căn bản & hoa buttercream</b>, có lớp tối và cuối tuần 🎂',
        img: L(IMG['banh-hoa-2']),
        kav: 'TA', kten: 'Trần Thảo Anh', hoi: 'Người chưa biết gì học được không ạ? Học phí bao nhiêu?',
        traLoi: 'Dạ chào chị Thảo Anh! Lớp vừa nhắn tin tư vấn chi tiết cho chị, chị xem tin nhắn nhé 💬',
        act2: 'Nhắn tin riêng tư vấn khóa đó',
        nhan: 'Chào chị Thảo Anh! Khóa <b>bánh kem căn bản</b> dạy từ đầu nên người mới học được ạ. 8 buổi, học phí <b>3.900.000đ</b>, đã gồm nguyên liệu. Chị muốn học lớp tối hay cuối tuần ạ?',
        sp: { ten: 'Bánh kem căn bản · 8 buổi', gia: '3.900.000đ', img: L(IMG['thanh-pham']) },
        khach: 'Lớp cuối tuần em ơi',
      },

      duLieu: {
        shopA: 'Trung tâm A',
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: cam kết việc làm, lương cao', 'Học viên khiếu nại, trung tâm mất uy tín'],
        dung: ['Chỉ trả lời theo dữ liệu trung tâm cung cấp', 'Không chắc chắn → xin khách chờ, AI tạm dừng', 'Báo ngay tư vấn viên thật vào trả lời'],
        hoi: 'Học xong trung tâm có cam kết giới thiệu việc làm lương 15 triệu không ạ?',
        aiSai: 'Dạ có ạ! Học xong <b>cam kết việc làm lương 15 triệu</b> luôn chị 🥰',
        thucTe: '⚠ Thực tế: trung tâm không cam kết việc làm, không hứa mức lương',
        gian: 'Học xong có ai giới thiệu việc đâu, sao nói cam kết? 😠',
        cho: 'Dạ chị chờ em một chút để em kiểm tra chính xác thông tin cho mình nhé!',
        nv: 'Tư vấn viên Hạnh · người thật',
        nvTraLoi: 'Dạ trung tâm không cam kết việc làm ạ. Khóa có buổi hướng dẫn tính giá vốn, bán online và được học lại miễn phí 6 tháng chị nhé!',
      },

      tags: {
        rows: [
          { ten: 'Nguyễn Hồng Ngọc', av: 'HN', kenh: 'fb', msg: 'Mình muốn học bánh kem lớp tối', gio: '13:58',
            tags: [['FB Ads · Lớp bánh kem T11', 'ng'], ['#BanhKem', 'qt'], ['Đã cho SĐT', 'ht'], ['Gọi lần 1 ✓', 'sa']] },
          { ten: 'Trần Thu Trang', av: 'TT', kenh: 'zalo', msg: 'Có lớp bánh mì không ạ?', gio: '11:20',
            tags: [['Zalo OA', 'ng'], ['#BanhMi', 'qt'], ['Đang nuôi · Soft follow-up', 'ht']] },
          { ten: 'Lê Minh Châu', av: 'MC', kenh: 'tiktok', msg: 'Khóa online học được không?', gio: '09:41',
            tags: [['TikTok · Video học viên', 'ng'], ['#KhoaOnline', 'qt'], ['Đã cho SĐT', 'ht'], ['Gọi lần 2 · không bắt máy', 'sa']] },
          { ten: 'Phạm Quỳnh Anh', av: 'QA', kenh: 'fb', msg: 'Cuối tuần còn chỗ không ạ?', gio: 'Hôm qua',
            tags: [['Bình luận bài viết', 'ng'], ['#BanhKem', 'qt'], ['Đã học thử', 'ht'], ['Đã kết nối Zalo', 'za']] },
          { ten: 'Võ Thanh Hà', av: 'TH', kenh: 'zalo', msg: 'Mình muốn mở tiệm bánh nhỏ', gio: 'Hôm qua',
            tags: [['Zalo · Học viên giới thiệu', 'ng'], ['#MoTiem', 'qt'], ['Đã đăng ký khóa', 'ht'], ['Gọi lần 3 · đã chốt ✓', 'sa']] },
        ],
        chanDung: {
          ten: 'Nguyễn Hồng Ngọc', av: 'HN', kenh: 'fb', sub: 'Facebook Messenger · 0912 345 678',
          nhom: [
            ['Nguồn khách', [['Facebook Ads', 'ng'], ['Bài: Khai giảng lớp bánh kem T11', 'ng']]],
            ['Quan tâm', [['#BanhKem', 'qt'], ['#LopToi', 'qt'], ['#BanOnline', 'qt']]],
            ['Hành trình', [['Nhắn tin 12/11', 'ht'], ['Cho SĐT', 'ht'], ['Hẹn học thử 24/11', 'ht']]],
            ['Sale gọi', [['Lần 1 · đã tư vấn ✓', 'sa']]],
            ['Kết nối', [['Đã kết nối Zalo', 'za'], ['Mới bắt đầu · L1', 'lv']]],
          ],
          ghiChu: 'Chưa biết làm bánh, đi làm 8h–17h, muốn học lớp tối để bán online kiếm thêm. Băn khoăn học bù và so với khóa online 500k.',
        },
      },

      chotLai: [
        ['KHÁCH HÀNG', ['Data thô', 'Sự kiện', 'Ads', 'Giới thiệu', 'Tự tìm đến']],
        ['AI CHATBOT', ['Phản hồi nhanh tức thì', 'Tư vấn đúng khóa, lịch học', 'Xử lý băn khoăn: học phí, học bù', 'Lấy SĐT học viên']],
        ['SOFT FOLLOW‑UP', ['Gửi video lớp học, thành phẩm học viên, lịch khai giảng', 'Nuôi học viên để trung tâm nằm đầu danh sách']],
        ['HỌC THỬ', ['Hẹn học thử, tham quan lớp', 'Tư vấn viên chốt học phí']],
        ['MUA LẠI', ['Mời học viên cũ học khóa nâng cao qua FB và Zalo']],
      ],
    },
  };
})();
