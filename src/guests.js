// Danh sách khách mời. Mỗi người một mã riêng, link: <domain>/#<code>
// name: tên hiển thị trong trang quản trị (và trên thiệp nếu không có display)
// other / self: cách xưng hô, ví dụ "Cậu - Tớ"
export const ADMIN_CODE = 'quan-tri-gebvhu'; // trang quản trị: <domain>/#quan-tri-gebvhu

export const GUESTS = [
  { code: 'eezn2k', name: 'Group Sồn Sồn', other: 'Các vk', self: 'Ck' },
  { code: 'xn3jf5', name: 'Minh Khánh aka MK', other: 'Vk', self: 'Ck', display: 'Minh Khánh' },
  { code: 'ng7m56', name: 'Thảo Ly', other: 'Ck', self: 'Vk' },
  { code: 'dbvztb', name: 'Tín', other: 'Cậu', self: 'Tớ' },
  { code: 'swza63', name: 'Kỳ Duyên', other: 'Cậu', self: 'Tớ' },
  { code: '2u2fz6', name: 'Văn Hưng', other: 'Cậu', self: 'Tớ' },
  { code: 'u7w9rp', name: 'Thanh Tâm', other: 'Ck', self: 'Vk' },
  { code: 'hkx5s4', name: 'Ngọc Hiền', other: 'Cậu', self: 'Tớ' },
  { code: 'fdkvfa', name: 'Thanh Tuấn', other: 'Anh', self: 'Em' },
  { code: 'agv5ut', name: 'Minh Duy', other: 'Bạn', self: 'Mình' },
  { code: 'jr529r', name: 'Xuân Đào', other: 'Ck', self: 'Vk' },
  { code: 'ucsf8p', name: 'Thanh Phong', other: 'Bạn', self: 'Mình' },
  { code: 'tgav9c', name: 'Văn Hưng', other: 'Bạn', self: 'Mình' },
  { code: '4k9pb6', name: 'Minh Nhựt', other: 'Bạn', self: 'Mình' },
  { code: 'fwc4se', name: 'Minh Quân', other: 'Bạn', self: 'Mình' },
  { code: 'wavgh9', name: 'Đại Trí', other: 'Bạn', self: 'Mình' },
  { code: '2s82a9', name: 'Cao Thắng', other: 'Bạn', self: 'Mình' },
  { code: 'f9hmed', name: 'Quỳnh Như', other: 'Bạn', self: 'Mình' },
  { code: 'g6q6tc', name: 'Đức Duy', other: 'Bạn', self: 'Mình' },
  { code: 'hjqsjd', name: 'Hoài Vy', other: 'Cục Zàng', self: 'Tui' },
  { code: 'xze9he', name: 'Nhật Toàn', other: 'Bạn', self: 'Mình' },
  { code: 'h33p7b', name: 'Lâm Quyền', other: 'Bạn', self: 'Mình' },
  { code: 's5ns98', name: 'Vân Hà', other: 'Cục Zàng', self: 'Tui' },
  { code: '3jrgka', name: 'Hiếu', other: 'Bạn', self: 'Mình' },
  { code: 'zr8bks', name: 'Nguyệt Hà', other: 'Bạn', self: 'Mình' },
  { code: 'yn63d7', name: 'Hera', other: 'Chị', self: 'Em' },
  { code: 'yheccm', name: 'Jasmine', other: 'Chị', self: 'Em' },
  { code: 'syx5tz', name: 'Bảo Ngọc', other: 'Cậu', self: 'Tớ' },
];

export const findGuest = (code) =>
  GUESTS.find((g) => g.code === String(code || '').trim().toLowerCase()) || null;
