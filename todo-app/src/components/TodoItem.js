import React, { useState } from 'react';

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false); // Kiểm tra xem công việc đang chỉnh sửa hay không
  const [newText, setNewText] = useState(todo.text); // Lưu trữ nội dung công việc mới khi chỉnh sửa

  // Xử lý khi người dùng thay đổi trạng thái hoàn thành của công việc
  const handleToggle = () => {
    onToggle(todo.id);
  };

  // Xử lý khi người dùng nhấn nút xóa công việc
  const handleDelete = () => {
    onDelete(todo.id);
  };

  // Xử lý khi người dùng nhấn nút chỉnh sửa công việc
  const handleEdit = () => {
    if (isEditing) {
      onEdit(todo.id, newText); // Lưu thay đổi nếu đang chỉnh sửa
    }
    setIsEditing(!isEditing); // Chuyển chế độ chỉnh sửa
  };

  // Xử lý khi người dùng thay đổi nội dung công việc trong ô input
  const handleTextChange = (event) => {
    setNewText(event.target.value);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggle}
      />
      {isEditing ? (
        // Nếu đang chỉnh sửa, hiển thị ô input để người dùng sửa lại nội dung
        <input
          type="text"
          value={newText}
          onChange={handleTextChange}
        />
      ) : (
        // Nếu không chỉnh sửa, hiển thị nội dung công việc
        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.text}
        </span>
      )}
      <button onClick={handleEdit}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default TodoItem;
