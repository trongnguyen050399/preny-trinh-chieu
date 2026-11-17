/* Danh sách ngành hiện trong menu của trinh-chieu.html.
   loai: 'tmdt' = Thương mại điện tử (slide thống kê ghi "Tỷ lệ chốt đơn")
         'cnn'  = Cân nhắc nhiều     (slide thống kê ghi "Tỷ lệ chốt SĐT")
   kb: file kịch bản chat dùng khi trình chiếu (kich-ban/<kb>.js).
   hien: false = tạm ẩn khỏi menu (đang làm lại từng ngành một). Bật lại: xóa "hien: false". */
window.DANH_SACH = [
  { kb: 'thoi-trang-tc', ten: 'Thời trang', loai: 'tmdt', icon: '👕' },
  { kb: 'thiet-bi-ve-sinh-tc', ten: 'Thiết bị vệ sinh', loai: 'tmdt', icon: '🚽' },
  { kb: 've-sinh-o-to-tc', ten: 'Dung dịch vệ sinh ô tô', loai: 'tmdt', icon: '🚗' },
  { kb: 'servo-thao-may-tc', ten: 'Servo tháo máy', loai: 'tmdt', icon: '⚙️' },
  { kb: 'qua-tang-dn-tc', ten: 'Quà tặng doanh nghiệp', loai: 'tmdt', icon: '🎁' },
  { kb: 'noi-that-sofa-tc', ten: 'Nội thất, Sofa', loai: 'tmdt', icon: '🛋️' },
  { kb: 'in-ao-tc', ten: 'In áo theo yêu cầu', loai: 'tmdt', icon: '👚' },
  { kb: 'ban-tra-tc', ten: 'Bàn trà', loai: 'tmdt', icon: '🍵' },
  { kb: 'duoc-pham-tc', ten: 'Dược phẩm', loai: 'tmdt', icon: '💊' },
  { kb: 'nha-hang-khach-san-tc', ten: 'Nhà hàng, khách sạn', loai: 'tmdt', icon: '🏨' },
  { kb: 'du-lich-tc', ten: 'Du lịch, du thuyền', loai: 'tmdt', icon: '🛳️' },
  { kb: 'may-nong-nghiep-tc', ten: 'Máy nông nghiệp', loai: 'tmdt', icon: '🚜' },
  { kb: 'giay-dep-tc', ten: 'Giày dép', loai: 'tmdt', icon: '👟' },
  { kb: 'du-lich-luu-tru-tc', ten: 'Du lịch, lưu trú', loai: 'tmdt', icon: '🏝️' },
  { kb: 'gia-dung-tc', ten: 'Gia dụng', loai: 'tmdt', icon: '🧹' },
  { kb: 'dien-tu-tc', ten: 'Điện tử, điện thoại', loai: 'tmdt', icon: '📱' },
  { kb: 'my-pham-tc', ten: 'Mỹ phẩm', loai: 'tmdt', icon: '💄' },
  { kb: 'nong-nghiep-tc', ten: 'Nông nghiệp, cây cảnh', loai: 'tmdt', icon: '🌾' },
  { kb: 'trang-suc-tc', ten: 'Trang sức', loai: 'tmdt', icon: '💍' },
  { kb: 'xe-dien-tc', ten: 'Xe điện, xe máy', loai: 'tmdt', icon: '🛵' },
  { kb: 'loc-nuoc-tc', ten: 'Máy lọc nước', loai: 'tmdt', icon: '💧' },
  { kb: 'banh-keo-tc', ten: 'Bánh kẹo', loai: 'tmdt', icon: '🍬' },
  { kb: 'den-trang-tri-tc', ten: 'Đèn trang trí nội thất', loai: 'tmdt', icon: '💡' },
  { kb: 'tham-my-spa-tc', ten: 'Thẩm mỹ, Spa', loai: 'cnn', icon: '✨' },
  { kb: 'lam-banh-tc', ten: 'Khóa học làm bánh', loai: 'cnn', icon: '🎂' },
  { kb: 'nha-di-dong-tc', ten: 'Nhà di động, resort', loai: 'cnn', icon: '🏕️' },
  { kb: 'tuyen-dung-tc', ten: 'Tuyển dụng nhân sự', loai: 'cnn', icon: '🧑‍💼' },
  { kb: 'phong-kham-tc', ten: 'Y tế, phòng khám', loai: 'cnn', icon: '🏥' },
  { kb: 'nha-khoa-tc', ten: 'Nha khoa', loai: 'cnn', icon: '🦷' },
  { kb: 'ielts-giao-tiep-tc', ten: 'Khóa học IELTS & Giao tiếp', loai: 'cnn', icon: '🎓' },

  // Tạm ẩn — đã có video, sẽ làm lại bản trình chiếu từng ngành
  { kb: 'my-pham', ten: 'Mỹ phẩm', loai: 'tmdt', icon: '💄', hien: false },
  { kb: 'cay-tet', ten: 'Cây Tết (quất, đào, mai)', loai: 'tmdt', icon: '🍊', hien: false },
  { kb: 'benh-vien', ten: 'Bệnh viện', loai: 'cnn', icon: '🏥', hien: false },
  { kb: 'bat-dong-san', ten: 'Bất động sản', loai: 'cnn', icon: '🏡', hien: false },
  { kb: 'bds-nha-pho', ten: 'BĐS nhà phố – đất nền', loai: 'cnn', icon: '🏘️', hien: false },
  { kb: 'gym', ten: 'Phòng gym', loai: 'cnn', icon: '💪', hien: false },
  { kb: 'dien-thoai', ten: 'Cửa hàng điện thoại', loai: 'cnn', icon: '📱', hien: false },
  { kb: 'nha-container', ten: 'Nhà container', loai: 'cnn', icon: '🏠', hien: false },
  { kb: 'xuat-nhap-khau', ten: 'Xuất nhập khẩu', loai: 'cnn', icon: '🚢', hien: false },
  { kb: 'noi-that', ten: 'Nội thất', loai: 'cnn', icon: '🛋️', hien: false },
];
window.LOAI = { tmdt: 'Thương mại điện tử', cnn: 'Cân nhắc nhiều' };
