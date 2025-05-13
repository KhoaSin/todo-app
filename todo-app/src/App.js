import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  // State chứa danh sách công việc
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });

  // Bộ lọc công việc (all, active, completed)
  const [filter, setFilter] = useState('all');

  // Từ khoá tìm kiếm
  const [searchQuery, setSearchQuery] = useState('');

  // Chế độ Dark Mode
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved === 'true';
  });

  // Lưu todos mỗi khi thay đổi
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Lưu trạng thái dark mode
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  // Thêm công việc
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  // Toggle hoàn thành
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Xoá công việc
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Sửa nội dung công việc
  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  // Bộ lọc + tìm kiếm
  const filteredTodos = todos.filter((todo) => {
    const matchesFilter =
      filter === 'all' ||
      (filter === 'active' && !todo.completed) ||
      (filter === 'completed' && todo.completed);

    const matchesSearch = todo.text
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const completedCount = todos.filter((todo) => todo.completed).length;

  // Đánh dấu hoàn thành tất cả
  const completeAllTodos = () => {
    setTodos(todos.map((todo) => ({ ...todo, completed: true })));
  };

  // Bỏ huỷ tất cả
  const uncompleteAllTodos = () => {
    setTodos(todos.map((todo) => ({ ...todo, completed: false })));
  };

  // Xoá tất cả công việc
  const deleteAllTodos = () => {
    setTodos([]);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`} style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      <h1>To-Do App</h1>

      {/* Nút chuyển Dark Mode */}
      <div style={{ textAlign: 'right', marginBottom: '10px' }}>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      {/* Form thêm công việc */}
      <TodoForm onAdd={addTodo} />

      {/* Tìm kiếm */}
      <input
        type="text"
        placeholder="Search a task..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ padding: '5px', width: '100%', marginBottom: '10px' }}
      />

      {/* Bộ lọc */}
      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('active')}>Active</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
      </div>

      {/* Thống kê */}
      <div style={{ marginBottom: '10px' }}>
        Completed: {completedCount}/{todos.length}
      </div>

      {/* Nút thực hiện các hành động */}
      <div style={{ marginBottom: '10px' }}>
        <button onClick={completeAllTodos}>Complete All</button>
        <button onClick={uncompleteAllTodos}>Uncomplete All</button>
        <button onClick={deleteAllTodos}>Delete All</button>
      </div>

      {/* Danh sách công việc */}
      <TodoList
        todos={filteredTodos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        onEdit={editTodo}
      />
    </div>
  );
}

export default App;
