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
  { kb: 'tham-my-spa-tc', ten: 'Thẩm mỹ, Spa', loai: 'cnn', icon: '✨' },
  { kb: 'lam-banh-tc', ten: 'Khóa học làm bánh', loai: 'cnn', icon: '🎂' },

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
