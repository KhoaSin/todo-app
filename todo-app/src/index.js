import React from 'react'; // Import React để sử dụng JSX và các tính năng của React
import ReactDOM from 'react-dom/client'; // Import ReactDOM để render ứng dụng React vào DOM
import App from './App'; // Import component App là component chính của ứng dụng

// Tạo root element để render ứng dụng React vào phần tử HTML có id 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render ứng dụng React vào DOM trong chế độ StrictMode
root.render(
  <React.StrictMode>
    <App /> {/* Render component App vào root */}
  </React.StrictMode>
);