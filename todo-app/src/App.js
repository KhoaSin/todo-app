import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  // Khởi tạo state todos và lấy dữ liệu từ localStorage nếu có
  const [todos, setTodos] = useState(() => {
    // Lấy danh sách todos từ localStorage khi app khởi động
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : []; // Nếu có dữ liệu thì chuyển từ JSON thành mảng, nếu không thì trả về mảng rỗng
  });

  // Lưu danh sách todos vào localStorage mỗi khi todos thay đổi
  useEffect(() => {
    // Chuyển todos thành chuỗi JSON và lưu vào localStorage
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]); // useEffect sẽ chạy khi todos thay đổi

  // Thêm một công việc mới vào danh sách todos
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(), // Sử dụng thời gian hiện tại để tạo id duy nhất cho công việc
      text, // Nội dung công việc
      completed: false, // Trạng thái công việc mặc định là chưa hoàn thành
    };
    setTodos([...todos, newTodo]); // Cập nhật danh sách todos với công việc mới
  };

  // Đánh dấu một công việc là hoàn thành hoặc chưa hoàn thành
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    ); // Duyệt qua danh sách todos và thay đổi trạng thái completed của công việc có id tương ứng
  };

  // Xóa công việc khỏi danh sách
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id)); // Lọc ra các công việc không có id trùng với id cần xóa
  };

  // Chỉnh sửa nội dung của một công việc
  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    ); // Duyệt qua danh sách todos và thay đổi nội dung công việc có id tương ứng
  };

  return (
    <div className="App">
      <h1>To-Do App</h1>
      {/* Component TodoForm nhận props onAdd để thêm công việc mới */}
      <TodoForm onAdd={addTodo} />

      {/* Component TodoList nhận props todos, onToggle, onDelete và onEdit để hiển thị và thao tác với danh sách công việc */}
      <TodoList
        todos={todos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        onEdit={editTodo}
      />
    </div>
  );
}

export default App;
