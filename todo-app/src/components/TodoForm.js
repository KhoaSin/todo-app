import React, { useState } from 'react';

function TodoForm({ onAdd }) {
  // Khởi tạo state text để lưu nội dung công việc mới
  const [text, setText] = useState('');

  // Hàm xử lý khi người dùng submit form
  const handleSubmit = (event) => {
    event.preventDefault(); // Ngừng hành động mặc định của form (không reload trang)

    // Kiểm tra xem người dùng đã nhập nội dung công việc chưa
    if (text.trim()) {
      onAdd(text); // Gọi hàm onAdd để thêm công việc vào danh sách
      setText(''); // Sau khi thêm, xóa nội dung trong input
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input để người dùng nhập nội dung công việc mới */}
      <input
        type="text"
        value={text} // Giá trị của input được liên kết với state text
        onChange={(e) => setText(e.target.value)} // Cập nhật state text khi người dùng nhập
        placeholder="Add a new task" // Hiển thị placeholder trong trường hợp chưa nhập gì
      />
      {/* Nút submit để thêm công việc mới */}
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
