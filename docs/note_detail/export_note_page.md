---
sidebar_position: 1
---

# Export Note

## 1. Overview

Tính năng **Export Note** cho phép bạn xuất ghi chú (note),thành nhiều định dạng khác nhau, giúp bạn dễ dàng chia sẻ, lưu trữ hoặc sử dụng cho các mục đích học tập, làm việc. Bạn có thể xuất nội dung dưới dạng Summary, bản ghi Transcript, bộ thẻ Flashcards, hoặc bộ câu hỏi Quiz.

**Lợi ích nổi bật:**

- Dễ dàng lưu trữ và chia sẻ nội dung học tập.
- Đa dạng lựa chọn xuất: Summary, Transcript, Flashcards, Quiz.
- Hỗ trợ xuất riêng từng định dạng, thuận tiện cho từng mục đích sử dụng.

—

## 2. UI/UX Specification

<p align="center">
<img src="https://pub-661d733d32f14d8684c7617d2f2e3372.r2.dev/docs/export_type.jpg"/>
<br />
<em>Options for exporting</em>
</p>

## 3. How to Use

### Bước 1: Mở note muốn export trong Note Detail

- Truy cập vào mục note hoặc nội dung mà bạn muốn xuất.

### Bước 2: Mở menu thao tác

- Nhấn vào biểu tượng ba chấm (⋮) ở góc trên bên phải màn hình.

### Bước 3: Chọn **Export**

- Trong menu hiện ra, chọn mục **Export**.

### Bước 4: Chọn định dạng export

- Một danh sách các tùy chọn export sẽ xuất hiện, gồm:
  - **Summary**: Xuất bản tóm tắt nội dung
  - **Transcript**: Xuất bản ghi nội dung
  - **Flashcards**: Xuất bộ thẻ ghi nhớ
  - **Quiz**: Xuất bộ câu hỏi trắc nghiệm
- Chọn định dạng phù hợp với nhu cầu.

### Bước 5: Hoàn tất export

- Làm theo hướng dẫn tiếp theo trên màn hình (tùy từng nền tảng, file sẽ được tải xuống hoặc chia sẻ qua ứng dụng khác).

---

## 4. Notes / Tips & Tricks

- **Chỉ khi note có 1 set quiz hoặc 1 set flashcard, tuỳ chọn export Flashcards/Quiz mới hiển thị trong menu Export.**
  Nếu bạn không thấy tuỳ chọn này, vui lòng kiểm tra lại nội dung note đã có đủ bộ Quiz hoặc Flashcard chưa.
- Có thể sử dụng chức năng “Share Note” để gửi nhanh nội dung qua các ứng dụng chat/email.
- Khi xuất bản Flashcards hoặc Quiz, hãy đảm bảo note đã được tạo đúng cấu trúc bộ câu hỏi/trả lời.

---

## 5. FAQ – Câu hỏi thường gặp

**Q1. Tại sao tôi không thấy tuỳ chọn export Flashcards hoặc Quiz?**
A1: Chỉ khi note đang mở có đúng 1 set quiz hoặc flashcard, các tuỳ chọn này mới hiển thị. Hãy kiểm tra lại note đã tạo bộ quiz/flashcard chưa, và đảm bảo mỗi note chỉ có một set.

**Q2. Tôi có thể export note sang các ứng dụng khác không?**
A2: Có, sau khi export bạn có thể chia sẻ file qua email, chat, Google Drive, hoặc các nền tảng lưu trữ khác.

**Q3. Export có giới hạn số lượng nội dung không?**
A3: Với các note lớn, thời gian export có thể lâu hơn. Tuy nhiên, thông thường bạn có thể export toàn bộ nội dung của note hiện tại.

**Q4. Tôi có thể export nhiều note cùng lúc không?**
A4: Hiện tại, bạn chỉ có thể export từng note một. Nếu cần xuất nhiều note, hãy lặp lại thao tác cho từng note.

---

## 6. Lưu ý về Flashcard/Quiz Export và định dạng file

- Tuỳ chọn **Flashcards** hoặc **Quiz** sẽ chỉ hiển thị trong phần Export nếu:

  - Ghi chú của bạn **có đúng 1 bộ Flashcard hoặc 1 bộ Quiz**.
  - Nếu không thấy các lựa chọn này, vui lòng tạo hoặc gom lại bộ Flashcard/Quiz thành một set duy nhất.

- **Lưu ý về định dạng file export:**
  - Với các dạng export **Summary**, **Flashcards**, **Quiz**: chỉ có thể export dưới dạng **PDF** hoặc **DOCX**.
  - Riêng với export **Transcript**: có thể export thêm dưới dạng **SubRip (.srt)** (phù hợp làm phụ đề).
