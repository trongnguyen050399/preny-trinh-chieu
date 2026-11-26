/* Kịch bản: LỒNG GÀ (lồng sắt sơn tĩnh điện, lồng gà đẻ, chuồng thả vườn) — BẢN TRÌNH CHIẾU, nhóm THƯƠNG MẠI ĐIỆN TỬ.
   Làm 26/11/2026 theo đồng nghiệp: "bán lồng gà hỏi kích thước dài rộng cao, tư vấn báo giá, mời xem, khách hỏi muốn đặt gửi luôn,
   ai xin sđt và địa chỉ". Mẫu: kich-ban/nem-tc.js.
   Từ 23/11/2026 bỏ demo chat vào thẳng (&demo): file chỉ có phần deck cho Bài 1 (slide), không viết steps/features.
   Mạch ngắn trên slide (khớp Bài 2 demo/bai2/kich-ban-long-ga-tc.js): anh Tuấn hỏi giá lồng nhốt gà → AI hỏi dài, rộng, cao
     → 2m x 1m x 1m2 giá 2.350.000đ → mời ghé xưởng Hóc Môn xem lồng mẫu → khách ở Đức Hòa muốn gửi luôn → xin SĐT + địa chỉ → lên đơn
     → chăm sóc sau bán: bình nước tự động, máng ăn, lồng úm, lưới rào, ổ đẻ.
   Theo quy tắc 25/11/2026: AI chỉ báo giá, gửi ảnh, hỏi kích thước/số lượng, xin SĐT + địa chỉ; không tự tính, không check khách cũ/mới.
   Không hứa "không bao giờ gỉ": slide "AI không trả lời bừa" lấy đúng ca AI sai hứa "để ngoài mưa nắng 10 năm không gỉ".
   Tên xưởng (Lồng Gà Thành Lợi), giá, khách, SĐT, địa chỉ: dữ liệu minh họa. Ảnh: Unsplash, ảnh thật; dùng đường dẫn trong máy. */
(function () {
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'long': '1781195029229-a8c1cf552831',        // gà trong lồng sắt (ảnh quảng cáo)
    'long-de': '1541329444622-e85b1a8980df',     // dãy lồng gà đẻ
    'long-luoi': '1570858556974-71401b1e08d5',   // lồng lưới ô vuông đặt trên cỏ
    'ga-luoi': '1761284827145-06ea2fe270bd',     // gà sau lưới lồng
    'chuong-go': '1615018997980-610ffc167e1b',   // chuồng gỗ mái nghiêng
    'ga-san': '1441122456239-401e92b73c65',      // đàn gà trong sân
    'ga-chuong': '1553531009-c4605f302b47',      // gà ra cửa chuồng
    'trung': '1598965675045-45c5e72c7d05',       // trứng gà trên rơm
    'o-trung': '1624905916901-61c7e2782998',     // ổ trứng trong thau
    'long-um': '1694854038360-56b29a16fb0c',     // khu úm gà con có đèn, máng
    'binh-nuoc': '1778715684164-53d224e872b5',   // gà uống ở bình nước tự động
    'mang-an': '1788350168791-5a8aaff32093',     // gà con ăn ở máng nhựa
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    shop: { name: 'Lồng Gà Thành Lợi', initials: 'TL' },
    headline: { pre: 'Hệ thống AI chatbot giúp tăng trung bình', em: '60% tỷ lệ chốt đơn' },
    sub: 'Tự động hóa toàn bộ quy trình chốt đơn, bám đuổi, lên đơn và chăm sóc khách để tăng hiệu quả bán hàng.',
    cta: 'Dùng thử miễn phí tại **preny.ai**\nHotline **0389 647 778**',

    images: Object.fromEntries(Object.entries(IMG).map(([k, id]) => [k, L(id)])),

    deck: {
      demoDoc: {
        khach: 'Tuấn',
        sanPham: 'Lồng gà sắt sơn tĩnh điện',
        binhLuan: 'Lồng nhốt chục con gà giá sao shop?',
        post: {
          tieuDe: 'LỒNG GÀ SẮT SƠN TĨNH ĐIỆN 🐔',
          dong: ['Làm theo kích thước dài, rộng, cao', 'Chỉ từ 890K, có cửa, khay hứng phân', 'Giao tận nơi các tỉnh miền Nam', 'Xưởng Hóc Môn mời ghé xem lồng mẫu'],
          anh: ['long', 'long-luoi', 'long-de', 'ga-chuong'],
        },
      },
      dashboard: [
        { ten: 'Lồng gà <span class="grad">sơn tĩnh điện</span>', den: '21/07/2026', khach: 26, tyLe: 0.60 },
        { ten: 'Lồng <span class="grad">gà đẻ</span>', den: '18/08/2026', khach: 19, tyLe: 0.58 },
        { ten: 'Lồng úm, <span class="grad">máng uống</span>', den: '26/09/2026', khach: 15, tyLe: 0.64 },
      ],
      chatbot: {
        chat: [
          { ref: { img: L(IMG['long']), ten: 'Lồng gà sắt sơn tĩnh điện' } },
          { kh: 'Lồng nhốt chục con gà giá sao shop?' },
          { ai: 'Dạ lồng bên em **từ 890.000đ**, tùy kích thước ạ. Anh muốn lồng **dài, rộng, cao bao nhiêu** ạ?', meta: '⚡ Preny AI trả lời sau 2 giây' },
          { kh: 'dài 2m rộng 1m cao 1m2' },
          { ai: 'Dạ lồng **2m x 1m x 1m2** giá **2.350.000đ** ạ. Anh rảnh ghé xưởng **88 Đặng Thúc Vịnh, Hóc Môn** xem lồng mẫu nha.' },
          { kh: 'nhà a ở Đức Hòa xa, gửi luôn được ko e?' },
          { ai: 'Dạ được ạ, giao miễn phí, lồng tháo rời kèm video hướng dẫn lắp. Anh gửi em **SĐT và địa chỉ** để em lên đơn nha.' },
          { kh: 'Sáu, 0937 216 458, ấp Bình Tiền 2, Đức Hòa Hạ, Long An' },
          { don: true },
          { ok: true },
        ],
        don: {
          ten: 'Sáu', sdt: '0937 216 458', diaChi: 'Ấp Bình Tiền 2, xã Đức Hòa Hạ, Đức Hòa, Long An', ma: '#TL26126', phi: 'miễn phí',
          sp: [{ img: L(IMG['long']), ten: 'Lồng gà sắt sơn tĩnh điện 2m x 1m x 1m2', sl: 1, dv: 'cái', gia: 2350000 }],
        },
        anh: {
          img: L(IMG['chuong-go']),
          kh: 'Nhà a đang có cái chuồng gỗ như này, làm lồng sắt thay được ko e?',
          ai: 'Dạ ảnh anh gửi là **chuồng gỗ mái nghiêng**, bên em làm lồng sắt thay được ạ. Anh đo giúp em **dài, rộng, cao** chỗ đặt chuồng để em báo đúng giá nha.',
        },
      },
      afterSale: {
        loi: 'Cảm ơn anh Tuấn đã chọn Lồng Gà Thành Lợi 💛 Khách mua lồng bên em hay lấy kèm mấy món này ạ:',
        sp: [
          { img: L(IMG['binh-nuoc']), ten: 'Bình nước uống tự động 8 lít', gia: 180000 },
          { img: L(IMG['mang-an']), ten: 'Máng ăn nhựa dài 50cm', gia: 50000 },
          { img: L(IMG['long-um']), ten: 'Lồng úm gà con kèm đèn sưởi', gia: 850000 },
          { img: L(IMG['ga-luoi']), ten: 'Lưới rào ô 2,5cm cuộn 10m', gia: 330000 },
          { img: L(IMG['o-trung']), ten: 'Ổ đẻ trứng gắn lồng', gia: 108000, cu: 120000 },
        ],
        khach: 'Lấy thêm a 1 bình nước tự động nha e',
        pill: '🛍 Khách lấy thêm ngay: đơn tăng từ 2.350.000đ lên 2.530.000đ',
        fmm: {
          chao: 'Chào anh Tuấn 👋 Mùa nuôi gà Tết, Lồng Gà Thành Lợi giảm 15% lồng úm gà con cho khách đã mua lồng, em gửi anh xem nha!',
          img: L(IMG['long-um']), nhan: 'MÙA NUÔI GÀ TẾT',
          ten: 'Lồng úm gà con kèm đèn sưởi', mo: 'Giảm 15% cho khách đã mua lồng.', nut: 'Xem ưu đãi',
        },
        zbs: {
          ten: 'Tặng anh Tuấn voucher 100.000đ',
          mo: 'Cảm ơn anh đã mua lồng tại Lồng Gà Thành Lợi. Gửi anh ưu đãi cho lần mua tiếp theo:',
          dong: [['Mã voucher', '**THANHLOI100**'], ['Ưu đãi', 'Giảm 100.000đ đơn từ 1.000.000đ'], ['Hạn dùng', '31/01/2027']],
          nut: 'Dùng voucher ngay',
        },
      },
      bamDuoi: {
        cmpDung: ['Khách nhắn xong im → nhắc đúng loại lồng khách đã hỏi (thẻ <b>#longga</b> từ quảng cáo)',
                  'Báo giá xong im → bám đuổi theo giá: giao miễn phí, quà tặng (thẻ <b>#HoiGia</b>)',
                  'Đúng nhu cầu, đúng lý do im → khách quay lại đặt hàng'],
        hoi: 'Lồng nhốt chục con gà giá sao shop?',
        traLoiThuong: 'Dạ từ 890.000đ ạ.',
        refImg: L(IMG['long']), refTen: 'Lồng gà sắt sơn tĩnh điện',
        vd1: {
          kh: 'Lồng này có khay hứng phân không shop? Nhà c nuôi gà đẻ',
          ai: 'Dạ lồng nào bên em cũng có khay hứng phân kéo ra được ạ. Chị muốn lồng dài, rộng, cao bao nhiêu ạ?',
          tag: '🏷 #longgade', tagNote: 'thẻ từ quảng cáo · khách im 1 ngày',
          nhac: 'Chị ơi, em gửi chị <b>ảnh thật lồng gà đẻ</b> khách bên em đã lắp, máng trứng lăn ra ngoài, không bị gà mổ ạ 🐔',
          dung: '🎯 Theo thẻ #longgade: nhắc đúng loại lồng khách hỏi',
          khach: 'Làm c cái dài 1m8, rộng 60, cao 1m nha',
        },
        vd2: {
          kh: 'Lồng 1m5 x 1m x 1m bao nhiêu vậy shop?',
          ai: 'Dạ lồng 1m5 x 1m x 1m giá <b>1.790.000đ</b> ạ.',
          tag: '🏷 #HoiGia', tagNote: 'báo giá xong khách im 1 ngày',
          nhac: 'Anh ơi, lồng 1m5 anh hỏi hôm qua, bên em <b>giao miễn phí, tặng 2 máng ăn</b> ạ. Em lên đơn cho anh nha?',
          dung: '🎯 Theo thẻ #HoiGia: bám đuổi theo giá, đúng lý do khách im',
          khach: 'Ok lên đơn cho a nha e',
        },
      },
      binhLuan: {
        post: '<b>Lồng gà sắt sơn tĩnh điện</b> · làm theo kích thước, chỉ từ 890K, có cửa và khay hứng phân, giao tận nơi 🐔',
        img: L(IMG['long-luoi']),
        kav: 'TM', kten: 'Thanh Mai', hoi: 'Có giao Long An không shop? Lồng 1m5 bao nhiêu?',
        traLoi: 'Dạ chào chị Mai! Xưởng vừa nhắn tin báo giá chi tiết cho chị, chị xem tin nhắn nhé 💬',
        act2: 'Nhắn tin riêng báo giá lồng 1m5',
        nhan: 'Chào chị Mai! Lồng <b>1m5 x 1m x 1m giá 1.790.000đ</b>, giao miễn phí Long An ạ. Chị muốn cao 1m hay 1m2 ạ?',
        sp: { ten: 'Lồng gà sắt 1m5 x 1m x 1m', gia: 'từ 1.790.000đ', img: L(IMG['long-luoi']) },
        khach: 'Lấy c cao 1m, giao Bến Lức nha',
      },
      duLieu: {
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: để ngoài mưa nắng 10 năm không gỉ', 'Khách thất vọng, đòi trả, xưởng mất uy tín'],
        hoi: 'Lồng này để ngoài vườn mưa nắng có bị gỉ không e?',
        aiSai: 'Dạ lồng sơn tĩnh điện để ngoài mưa nắng <b>10 năm không gỉ</b> luôn anh nhé 🥰',
        thucTe: '⚠ Thực tế: sơn tĩnh điện bền hơn sắt thường nhưng vẫn nên đặt dưới mái che; bảo hành sơn 12 tháng',
        gian: 'Mới để ngoài vườn 4 tháng đã lốm đốm gỉ! Sao nói 10 năm? 😠',
        cho: 'Dạ anh chờ em một chút để em kiểm tra chính xác cho anh nhé!',
        nv: 'Nhân viên Hậu · người thật',
        nvTraLoi: 'Dạ em xin lỗi anh ạ. Lồng sơn tĩnh điện cần đặt dưới mái che mới bền, sơn bảo hành 12 tháng. Em cho thợ qua sơn lại miễn phí chỗ gỉ cho anh nhé!',
      },
    },
  };
})();
