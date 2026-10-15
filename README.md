# Website thiệp tốt nghiệp — Nguyễn Mỹ Duyên

Bản khởi đầu React + Vite gồm 4 trang, đã đặt hai ảnh bạn gửi vào thư mục `src/assets`.

## Chạy trên máy
1. Cài Node.js phiên bản LTS.
2. Mở terminal tại thư mục dự án.
3. Chạy `npm install`.
4. Chạy `npm run dev` và mở URL Vite hiển thị.
5. Chạy `npm run build` để kiểm tra build production.

## Nội dung từng trang
- **Page 1:** ảnh nền đầu tiên (`src/assets/page1-cover.png`), phần lời chào. Có thể cá nhân hóa tên bằng query parameter, ví dụ `/?to=Ba%20Mẹ`.
- **Page 2:** dùng nguyên ảnh thiệp dọc thứ hai (`src/assets/page2-invitation.png`).
- **Page 3:** điểm hẹn Tượng đài Bác Tôn; có ảnh bản đồ khuôn viên và link website trải nghiệm TDTU; hướng dẫn khách đi xe máy gửi tại Cổng 9 và khách đi xe công nghệ chọn Cổng 1 hoặc 2 (chỉ trả khách bên ngoài cổng).
- **Page 4:** liên hệ/Zalo 0334 340 410 và demo lấy vị trí của chính thiết bị đang mở trang.

## Lưu ý
- Page 4 **chưa phát trực tiếp vị trí của Duyên cho khách mời**. Hiện tại trình duyệt chỉ lấy vị trí cục bộ khi người dùng bấm nút. Để chia sẻ trực tiếp cần thêm backend/Firebase, xác thực người xem, thời hạn chia sẻ và nút dừng chia sẻ.
- Địa chỉ Google Maps và thông tin liên hệ cần được Duyên xác nhận/cập nhật.
- Geolocation cần chạy trên HTTPS khi triển khai (localhost dùng cho phát triển thường được trình duyệt cho phép).
- Page 1 đọc tên người nhận từ tham số `to` trên URL; khi có file danh sách khách mời có thể bổ sung cách tạo link riêng cho từng người.


## Quyền riêng tư
- Page 3 hiện có mã số sinh viên dự phòng để khách mời sử dụng nếu bảo vệ yêu cầu xác minh. Mọi người có đường link đều có thể xem thông tin này, vì vậy chỉ gửi link cho khách mời tin cậy hoặc xóa dòng mã số nếu muốn chia sẻ rộng hơn.
- Link website trải nghiệm TDTU: https://discovery.tdtu.edu.vn/
