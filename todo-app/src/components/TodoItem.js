import React, { useState } from 'react';

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleToggle = () => {
    onToggle(todo.id);
  };

  const handleDelete = () => {
    onDelete(todo.id);
  };

  const handleEdit = () => {
    if (isEditing) {
      onEdit(todo.id, newText); // Lưu thay đổi nếu đang chỉnh sửa
    }
    setIsEditing(!isEditing); // Chuyển chế độ chỉnh sửa
  };

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
        <input
          type="text"
          value={newText}
          onChange={handleTextChange}
        />
      ) : (
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
