cd C:\Users\ADMIN\Downloads\RestaurantApp_B9\RestaurantApp_B9
mkdir screenshots
Copy-Item "C:\Users\ADMIN\Pictures\BT9\login.jpg" ".\screenshots\login.jpg"
Copy-Item "C:\Users\ADMIN\Pictures\BT9\main.jpg" ".\screenshots\main.jpg"
Copy-Item "C:\Users\ADMIN\Pictures\BT9\profile.jpg" ".\screenshots\profile.jpg"
@"
# BT9.1 - Lập trình di động

Ứng dụng React Native được xây dựng theo yêu cầu bài thực hành trong slide B9, sử dụng Stack Navigation kết hợp Bottom Navigation và triển khai theo 2 cách quản lý trạng thái đăng nhập: Context API và AsyncStorage.

## Chức năng chính
- Đăng nhập
- Đăng ký
- Quên mật khẩu
- Điều hướng giữa các màn hình bằng Bottom Tab
- Xem Home
- Xem Profile
- Chỉnh sửa thông tin cá nhân
- Lưu trạng thái đăng nhập với AsyncStorage

## Công nghệ sử dụng
- React Native
- Expo
- React Navigation
- Context API
- AsyncStorage

## Ảnh chụp màn hình chương trình

### Màn hình đăng nhập
![Login Screen](screenshots/login.jpg)

### Màn hình chính
![Main Screen](screenshots/main.jpg)

### Màn hình hồ sơ
![Profile Screen](screenshots/profile.jpg)
"@ | Set-Content README.md -Encoding UTF8
dir .\screenshots
git add README.md screenshots
git commit -m "Add README with screenshots"
git pull origin main --rebase
git push origin main
