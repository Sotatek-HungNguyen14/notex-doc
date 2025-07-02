---
sidebar_position: 8
---

# Share Note

## 1. Overview

Tính năng **Share Note** cho phép người dùng chia sẻ nội dung ghi chú (note) dưới dạng đường link công khai. Người nhận link có thể xem các nội dung đã chọn như tóm tắt, transcript, document, mindmap, slideshow, flashcard... Ngoài ra, bạn có thể đặt mật khẩu để tăng tính bảo mật, chỉ ai có mật khẩu mới truy cập được note đã chia sẻ.

**Lợi ích nổi bật:**

- Chia sẻ ghi chú nhanh chóng qua một đường link duy nhất.
- Tùy chọn nội dung muốn chia sẻ: chỉ tóm tắt, tài liệu, sơ đồ tư duy, flashcard, v.v.
- Bảo vệ quyền riêng tư bằng mật khẩu nếu cần.
- Truy cập đa nền tảng, chỉ cần trình duyệt web.

---

## 2. UI/UX Specification

<p align="center">
<img src="https://pub-661d733d32f14d8684c7617d2f2e3372.r2.dev/docs/share_note.jpg"/>
<br />
<em>Share Note </em>
</p>

<p align="center">
<img src="https://pub-661d733d32f14d8684c7617d2f2e3372.r2.dev/docs/share_note_password.jpg"/>
<br />
<em>Share Note With Password</em>
</p>

---

## 3. How to use

**Các bước thực hiện chức năng Share Note:**

1. **Mở note muốn chia sẻ**
   Vào chi tiết note bất kỳ, nhấn vào nút ba chấm (⋮) góc phải trên cùng.

2. **Chọn 'Share Note'**
   Chọn chức năng 'Share Note', bottom sheet Share Note sẽ xuất hiện.

3. **Lựa chọn tab nội dung muốn chia sẻ**

- Có thể chọn các tab: Summary, Transcript, Document, Mindmap, Slideshow, Flashcards, Quizzes mà mình muốn hiển thị.
- Nhấn vào từng tab để chọn hoặc bỏ chọn. Tab nào có dấu tick xanh nghĩa là sẽ hiển thị khi mở link chia sẻ.
- Có thể nhấn 'Select All' hoặc 'Deselect' để chọn tất cả, hoặc bỏ chọn tất cả.

4. **Lấy link chia sẻ**

- Sau khi chọn xong tab, link chia sẻ sẽ hiển thị ở mục 'Share with link'.
- Nhấn biểu tượng copy để sao chép link.

5. **(Tuỳ chọn) Thêm mật khẩu bảo vệ link**

- Bật nút 'Add password' (gạt sang phải).
- Hệ thống sẽ tạo và hiển thị một mật khẩu.
- Khi gửi link này cho người khác, người nhận phải nhập đúng mật khẩu mới xem được nội dung.

6. **Gửi link chia sẻ cho bạn bè, đồng nghiệp**

- Người nhận mở link trên trình duyệt sẽ thấy đúng các tab bạn đã chọn.
- Nếu bật mật khẩu, người nhận phải nhập đúng password mới xem được.

---

## 4. Notes / Tips & Tricks

- **Chỉ những tab được chọn mới xuất hiện khi mở link chia sẻ.** Nếu không muốn người khác xem phần nào, chỉ cần bỏ chọn tab đó.
- **Mật khẩu sẽ được tự động sinh ra** Hãy lưu mật khẩu cẩn thận để gửi cho người nhận.
- **Có thể thay đổi lựa chọn tab bất kỳ lúc nào** bằng cách vào lại Share Note và cập nhật.
- **Link chia sẻ là công khai** nhưng nội dung sẽ được bảo vệ nếu có mật khẩu.
- **Nhấn vào Save** để lưu lại các giá trị

---

## 5. FAQ

**Q: Nếu không bật mật khẩu, ai cũng xem được nội dung chia sẻ đúng không?**
A: Đúng, chỉ cần có link là xem được, trừ khi bạn bật bảo vệ bằng mật khẩu.

**Q: Có thể chọn nhiều tab cùng lúc không?**
A: Có. Bạn có thể chọn tất cả hoặc chỉ những tab muốn chia sẻ.

**Q: Khi đổi tab đã chọn hoặc thay đổi mật khẩu, link có thay đổi không?**
A: Link giữ nguyên, nhưng nội dung hiển thị sẽ cập nhật theo các thay đổi mới nhất bạn lưu.

**Q: Người nhận link xem trên web có cần tài khoản NoteX không?**
A: Không cần. Chỉ cần truy cập link, nhập mật khẩu (nếu có), là xem được.

**Q: Có giới hạn số lần chia sẻ hoặc số người truy cập không?**
A: Hiện tại không giới hạn số lần truy cập với link chia sẻ công khai.
