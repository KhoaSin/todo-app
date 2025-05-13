import React from 'react';
import TodoItem from './TodoItem'; // Import component TodoItem để hiển thị từng công việc

function TodoList({ todos, onToggle, onDelete, onEdit }) {
  return (
    <ul>
      {/* Duyệt qua tất cả công việc trong danh sách todos và hiển thị mỗi công việc dưới dạng TodoItem */}
      {todos.map((todo) => (
        <TodoItem
          key={todo.id} // Dùng id công việc làm key để React có thể theo dõi hiệu quả các phần tử trong danh sách
          todo={todo} // Truyền thông tin của công việc cho component TodoItem
          onToggle={onToggle} // Truyền hàm onToggle để thay đổi trạng thái hoàn thành của công việc
          onDelete={onDelete} // Truyền hàm onDelete để xóa công việc
          onEdit={onEdit} // Truyền hàm onEdit để chỉnh sửa công việc
        />
      ))}
    </ul>
  );
}

export default TodoList;
