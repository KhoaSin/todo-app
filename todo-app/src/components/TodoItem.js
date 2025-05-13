import React, { useState } from 'react';

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  // Khởi tạo state isEditing để theo dõi xem có đang ở chế độ chỉnh sửa hay không
  const [isEditing, setIsEditing] = useState(false);
  // Khởi tạo state newText để lưu nội dung mới khi chỉnh sửa công việc
  const [newText, setNewText] = useState(todo.text);

  // Hàm xử lý khi người dùng đánh dấu hoàn thành hoặc chưa hoàn thành công việc
  const handleToggle = () => {
    onToggle(todo.id); // Gọi hàm onToggle với id công việc
  };

  // Hàm xử lý khi người dùng xóa công việc
  const handleDelete = () => {
    onDelete(todo.id); // Gọi hàm onDelete với id công việc
  };

  // Hàm xử lý khi người dùng nhấn nút chỉnh sửa
  const handleEdit = () => {
    if (isEditing) {
      onEdit(todo.id, newText); // Lưu thay đổi khi đang chỉnh sửa
    }
    setIsEditing(!isEditing); // Chuyển giữa chế độ chỉnh sửa và không chỉnh sửa
  };

  // Hàm xử lý thay đổi nội dung công việc khi người dùng nhập vào input
  const handleTextChange = (event) => {
    setNewText(event.target.value); // Cập nhật state newText khi người dùng thay đổi nội dung input
  };

  return (
    <li>
      {/* Checkbox để đánh dấu công việc hoàn thành hoặc chưa hoàn thành */}
      <input
        type="checkbox"
        checked={todo.completed} // Kiểm tra xem công việc đã hoàn thành chưa
        onChange={handleToggle} // Khi thay đổi trạng thái, gọi handleToggle
      />

      {/* Nếu đang chỉnh sửa, hiển thị ô input để người dùng thay đổi nội dung công việc */}
      {isEditing ? (
        <input
          type="text"
          value={newText} // Giá trị input được liên kết với state newText
          onChange={handleTextChange} // Cập nhật newText khi người dùng thay đổi nội dung
        />
      ) : (
        // Nếu không ở chế độ chỉnh sửa, hiển thị nội dung công việc
        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.text}
        </span>
      )}

      {/* Nút chỉnh sửa hoặc lưu thay đổi */}
      <button onClick={handleEdit}>
        {isEditing ? 'Save' : 'Edit'} {/* Tùy thuộc vào trạng thái chỉnh sửa, hiển thị "Save" hoặc "Edit" */}
      </button>

      {/* Nút xóa công việc */}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default TodoItem;
