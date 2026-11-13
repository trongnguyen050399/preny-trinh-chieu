/* Kịch bản: DƯỢC PHẨM (nhà thuốc bán thực phẩm bảo vệ sức khỏe, thuốc không kê đơn, mỹ phẩm) — BẢN TRÌNH CHIẾU,
   nhóm THƯƠNG MẠI ĐIỆN TỬ. Khung ngang 16:9. Làm cho khách kiểu Công ty TNHH Meza Vietnam (Hải Dương:
   "kinh doanh dược, mỹ phẩm, thực phẩm chức năng", có dược sĩ tư vấn, sản phẩm chủ lực là viên bổ gan).
   Demo chat theo chuẩn thương mại điện tử (TRINH-CHIEU.md mục 3), một mạch:
     chị Hương gửi ảnh hỏi viên bổ gan cho chồng (ca khó: chồng hay nhậu, men gan cao, đang uống thuốc huyết áp,
     uống chung được không) → AI hỏi kỹ, dặn hỏi bác sĩ, uống cách thuốc 2 tiếng, nói rõ "không phải thuốc"
     → chị im → bám đuổi 2 tin theo thẻ #BoGan, #HoiGia (gửi thành phần, giấy công bố, tem chính hãng; ưu đãi liệu trình)
     → chị quay lại chốt → lên đơn tự động → chăm sóc sau bán: nhắc uống đúng cách, xét nghiệm lại, gợi ý mua thêm.
   Không có tin cập nhật vận chuyển. Không có bước kết thúc: bấm → là sang slide kế.
   Ngành sức khỏe: AI không hứa chữa bệnh, không bảo bỏ thuốc bác sĩ kê (slide "không chế dữ liệu" dựng đúng chỗ này).
   Tên nhà thuốc, sản phẩm, giá, liều dùng, tên khách, SĐT: dữ liệu minh họa. Ảnh: Unsplash (ảnh thật, không phải hàng của shop). */
(function () {
  const U = id => 'https://images.unsplash.com/photo-' + id + '?w=800&h=800&fit=crop&q=80&auto=format';
  const L = id => 'assets/img/u/' + id + '_800x800.jpg';
  const IMG = {
    'lo-vien': '1763668331599-487470fb85b2',
    'vien-nang': '1664956618021-73c47736845e',
    'ke-sua': '1720722992835-f10fa913c2a4',
    'actiso': '1760108273010-7f2e53840a83',
    'duoc-si': '1576091358783-a212ec293ff3',
    'lo-trang': '1664216294580-079bc527ae49',
    'omega': '1670850756988-a1943aa0e554',
    'vitamin': '1707129785947-ddc627a8bab9',
    'kem-chong-nang': '1686831451322-8d8e234a51e1',
  };

  window.KICH_BAN = {
    logo: 'https://preny.ai/images/logo.svg',
    shop: { name: 'Nhà Thuốc Minh Châu', initials: 'MC' },
    headline: { pre: 'Hệ thống AI chatbot giúp tăng trung bình', em: '62% tỷ lệ chốt đơn' },
    sub: 'Tự động hóa toàn bộ quy trình chốt đơn, bám đuổi, lên đơn và chăm sóc khách để tăng hiệu quả bán hàng.',
    cta: 'Dùng thử miễn phí tại **preny.ai**\nHotline **0389 647 778**',
    speed: 1.13,
    timing: { read0: 1000, readPerChar: 28, readMax: 4500, type0: 800, typePerChar: 3, typeMax: 1500, fastType: 500,
              featureHold: 1400, sepHold: 1100, cardHold: 4000, introCard: 250 },

    images: Object.fromEntries(Object.entries(IMG).map(([k, id]) => [k, U(id)])),

    // Cột trái demo: đúng 4 tính năng được diễn, theo thứ tự diễn
    features: [
      { title: 'AI chatbot tư vấn, chốt đơn 24/7', desc: 'Tăng trung bình 62% tỷ lệ chốt đơn.',
        kws: ['Trả lời ngay tức thì, 24/7', 'Nhận diện đúng sản phẩm, thành phần, giá', 'Hỏi kỹ thuốc đang dùng, dặn cách uống', 'Nói rõ: không phải thuốc, không hứa chữa bệnh', 'Gợi ý liệu trình phù hợp'] },
      { title: 'AI tự động bám đuổi khách hàng trong 7 ngày', desc: 'Tăng thêm khoảng 35% tỷ lệ chốt đơn.',
        kws: ['~65% khách nhắn tin rồi im lặng', 'Tự gắn thẻ sản phẩm khách hỏi, lý do im', 'Gửi thành phần, giấy công bố, tem chính hãng', 'Báo giá xong im → ưu đãi liệu trình đúng lúc'] },
      { title: 'AI Agent tự động lên đơn và gửi sang đơn vị vận chuyển', desc: 'Tiết kiệm hơn 90% thời gian xử lý đơn.',
        kws: ['Thu đủ tên, SĐT, địa chỉ', 'Gửi tin xác nhận đơn đầy đủ', 'Tự tạo đơn, đẩy sang đơn vị vận chuyển'] },
      { title: 'AI tự động chăm sóc khách hàng sau bán', desc: 'Tăng doanh thu từ khách hàng cũ.',
        kws: ['Nhắc uống đều, đúng cách', 'Nhắc xét nghiệm lại, mua tiếp liệu trình', 'Gợi ý sản phẩm hợp với khách mua thêm'] },
    ],

    steps: [
      { intro: true, hold: 1800 },

      /* ---- 1. Tư vấn: mua cho chồng hay nhậu, men gan cao, đang uống thuốc huyết áp ---- */
      { feature: 1 },
      { sep: 'Khách nhắn tin từ quảng cáo Facebook', style: 'time', hold: 800 },
      { img: 'lo-vien', hold: 1500 },
      { kh: 'Viên bổ gan này giá bao nhiêu em? Chồng chị hay tiếp khách, nhậu nhiều, đi khám men gan hơi cao' },
      { ai: 'Dạ em chào chị! Em tư vấn cho chị ngay ạ 🌿', fast: true, meta: '⚡ Preny AI trả lời sau 2 giây', kw: 0 },
      { ai: 'Mẫu chị gửi là **Viên bổ gan Minh Châu** (hộp 60 viên), chiết xuất **cà gai leo, actiso, kế sữa (silymarin)**, hỗ trợ bảo vệ gan cho người hay dùng bia rượu. Giá **380.000đ**/hộp, dùng được 1 tháng ạ.', kw: 1 },
      { kh: 'Ông đang uống thuốc huyết áp, uống chung được không em?' },
      { ai: 'Dạ anh đang dùng thuốc huyết áp thì chị **hỏi bác sĩ điều trị** trước giúp em nha. Bác sĩ đồng ý thì anh uống **2 viên sau ăn sáng**, **cách thuốc huyết áp khoảng 2 tiếng** ạ.', kw: 2 },
      { ai: 'Sản phẩm là **thực phẩm bảo vệ sức khỏe, không phải thuốc**, không thay thế thuốc chữa bệnh ạ. Anh vẫn uống thuốc bác sĩ kê và **xét nghiệm lại men gan sau 3 tháng**. Liệu trình em gợi ý cho anh là **3 hộp** nha chị.', kw: [3, 4] },
      { kh: 'Để chị bàn với chồng đã' },

      /* ---- 2. Khách im → bám đuổi 2 tin theo thẻ ---- */
      { feature: 2 },
      { sep: 'Khách chưa phản hồi… · AI gắn thẻ #BoGan #HoiGia', style: 'silent', kw: [0, 1], hold: 1800 },
      { sep: '— 1 ngày sau —' },
      { ai: 'Chị Hương ơi, em gửi chị **thành phần và giấy công bố** của viên bổ gan để chị đưa anh xem cùng nha. Hàng **chính hãng, có tem chống giả**, quét mã là kiểm tra được ạ 😊', meta: '🔁 Tự động · Bám đuổi theo thẻ #BoGan', kw: 2 },
      { aiImgs: [{ img: 'lo-vien', label: 'Hộp 60 viên · tem chống giả' }, { img: 'vien-nang', label: 'Viên nang thảo dược' },
                 { img: 'ke-sua', label: 'Kế sữa (silymarin)' }, { img: 'actiso', label: 'Actiso' }], hold: 3200 },
      { sep: '— 2 ngày sau —' },
      { ai: 'Liệu trình 3 hộp chị hỏi giá đang **mua 3 tặng 1**: **1.140.000đ cho 4 hộp** + freeship, đến hết Chủ nhật này thôi ạ 🎁', meta: '🔁 Tự động · Bám đuổi theo thẻ #HoiGia', kw: 3 },
      { kh: 'Ok chị lấy liệu trình 3 tặng 1 nha em' },

      /* ---- 3. Lên đơn tự động (không có tin cập nhật vận chuyển) ---- */
      { feature: 3 },
      { ai: 'Dạ chị cho em xin **tên, SĐT và địa chỉ** nhận hàng nha.', kw: 0 },
      { kh: 'Nguyễn Thu Hương – 0912 345 678\n35 Nguyễn Trãi, P. Thanh Xuân, Hà Nội' },
      { card: {
          tag: '✓ Tin xác nhận đơn',
          intro: 'Dạ chị kiểm tra lại đơn giúp em nhé:',
          lines: ['4 hộp Viên bổ gan Minh Châu (mua 3 tặng 1)', 'Tổng cộng: **1.140.000đ** (freeship)', 'Người nhận: Nguyễn Thu Hương · 0912 345 678', 'Địa chỉ: 35 Nguyễn Trãi, P. Thanh Xuân, Hà Nội'],
          button: 'Quản lý đơn hàng',
        }, kw: 1, hold: 4500 },
      { kh: 'Ok em' },
      { card: {
          tag: '✓ Đã tạo đơn & gửi vận chuyển', ok: true,
          lines: ['Mã đơn: **#MC51207**', 'Mã vận đơn: **VD73019284**', 'Dự kiến giao: 1–2 ngày'],
        }, kw: 2, hold: 3500 },

      /* ---- 4. Chăm sóc sau bán ---- */
      { feature: 4 },
      { sep: '— 3 ngày sau —' },
      { ai: 'Chị Hương ơi, anh uống đều chưa ạ? Anh nhớ **2 viên sau ăn sáng, cách thuốc huyết áp 2 tiếng** nha. Dùng đủ 3 tháng chị nhắc anh **xét nghiệm lại men gan** giúp em 💚', meta: '💚 Tự động · Chăm sóc sau bán', kw: [0, 1] },
      { kh: 'Anh uống đều rồi em, viên dễ uống 👍' },
      { sep: '— 2 tuần sau —' },
      { ai: 'Cuối năm nhiều tiệc, nhà thuốc có mấy sản phẩm anh chị hay dùng kèm, khách cũ được **giảm thêm 10%** ạ:', kw: 2 },
      { catalog: [
          { name: 'Dầu cá Omega-3', sub: 'Hộp 100 viên', price: '315.000đ', old: '350.000đ', tag: 'Bán chạy', art: 'omega' },
          { name: 'Vitamin tổng hợp', sub: 'Hộp 60 viên', price: '252.000đ', old: '280.000đ', tag: 'Hay mua kèm', art: 'vitamin' },
          { name: 'Kem chống nắng', sub: 'Tuýp 50 ml', price: '279.000đ', old: '310.000đ', tag: 'Mỹ phẩm', art: 'kem-chong-nang' },
        ], hold: 4000 },
      { kh: 'Lấy thêm chị 1 tuýp kem chống nắng nha', hold: 1500 },
      // Không có { end: true }: bấm → thêm một lần là sang thẳng slide kế.
    ],

    /* ===== Nội dung slide trình chiếu (trinh-chieu.html). Chưa có số liệu thống kê thật → 2 slide thống kê tự ẩn. ===== */
    deck: {
      bamDuoi: {
        cmpDung: ['Khách nhắn xong im → nhắc đúng sản phẩm khách hỏi (thẻ <b>#BoGan</b> từ quảng cáo)',
                  'Báo giá xong im → bám đuổi theo giá: ưu đãi liệu trình, quà tặng (thẻ <b>#HoiGia</b>)',
                  'Đúng nhu cầu, đúng lý do im → khách quay lại mua'],
        hoi: 'Viên bổ gan này giá bao nhiêu shop?',
        traLoiThuong: 'Dạ giá 380.000đ ạ.',
        refImg: L(IMG['lo-vien']), refTen: 'Viên bổ gan hộp 60 viên',
        vd1: {
          kh: 'Viên bổ gan này còn không shop?',
          ai: 'Dạ còn ạ! Chị mua cho mình hay người nhà, đang dùng thuốc gì không để em dặn cách uống cho đúng nha?',
          tag: '🏷 #BoGan', tagNote: 'thẻ từ quảng cáo · khách im 1 ngày',
          nhac: 'Chị ơi, em gửi chị <b>thành phần và giấy công bố</b> của viên bổ gan chị hỏi hôm qua để chị đưa anh xem cùng nha 😊',
          dung: '🎯 Theo thẻ #BoGan: nhắc đúng sản phẩm khách hỏi',
          khach: 'Gửi chị xem với',
        },
        vd2: {
          kh: 'Liệu trình 3 hộp bao nhiêu shop?',
          ai: 'Dạ liệu trình 3 hộp giá <b>1.140.000đ</b> ạ.',
          tag: '🏷 #HoiGia', tagNote: 'báo giá xong khách im 1 ngày',
          nhac: 'Chị ơi, liệu trình chị hỏi giá hôm qua đang <b>mua 3 tặng 1</b> + freeship, đến hết Chủ nhật thôi ạ. Em giữ suất cho chị nha?',
          dung: '🎯 Theo thẻ #HoiGia: bám đuổi theo giá, đúng lý do khách im',
          khach: 'Ok giữ cho chị',
        },
      },
      binhLuan: {
        post: 'Canxi, vitamin, thực phẩm bảo vệ sức khỏe <b>chính hãng</b> · dược sĩ tư vấn miễn phí 💊',
        img: L(IMG['duoc-si']),
        kav: 'TB', kten: 'Trần Bình', hoi: 'Có canxi cho người lớn tuổi không shop? Mẹ mình 68 tuổi, hay mỏi gối',
        traLoi: 'Dạ chào anh Bình! Nhà thuốc vừa nhắn tin tư vấn chi tiết cho anh, anh xem tin nhắn nhé 💬',
        act2: 'Nhắn tin riêng tư vấn sản phẩm',
        nhan: 'Chào anh Bình! Người lớn tuổi bên em hay dùng <b>Canxi + D3K2</b> viên nhỏ, dễ uống ạ. Bác đang dùng thuốc gì, có bệnh thận không để em dặn liều cho đúng nha!',
        sp: { ten: 'Canxi + D3K2 hộp 60 viên', gia: '295.000đ', img: L(IMG['lo-trang']) },
        khach: 'Mẹ mình uống thuốc huyết áp em',
      },
      duLieu: {
        sai: ['Không có dữ liệu thì tự suy đoán', 'Hứa sai: chữa khỏi bệnh, thay thuốc', 'Vi phạm quảng cáo, shop mất uy tín'],
        hoi: 'Uống cái này là hết men gan cao, bỏ thuốc được đúng không em?',
        aiSai: 'Dạ uống 1 liệu trình là <b>khỏi hẳn</b> ạ, <b>bỏ thuốc</b> luôn được chị 🥰',
        thucTe: '⚠ Thực tế: thực phẩm bảo vệ sức khỏe, không phải thuốc, không thay thế thuốc chữa bệnh',
        gian: 'Bác sĩ bảo không được bỏ thuốc! Sao tư vấn bậy vậy? 😠',
        cho: 'Dạ chị chờ em một chút để dược sĩ kiểm tra lại thông tin chính xác cho mình nhé!',
        nv: 'Dược sĩ Lan · người thật',
        nvTraLoi: 'Dạ đây là thực phẩm bảo vệ sức khỏe, hỗ trợ bảo vệ gan, không phải thuốc ạ. Chị đừng bỏ thuốc bác sĩ kê, anh dùng kèm và tái khám đúng hẹn nhé!',
      },
    },
  };
})();
