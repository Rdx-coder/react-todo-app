import React from 'react';
function TodoCard({ text, completed, onClick }) {
  return (
    <div className={`todo-card ${completed ? 'completed' : ''}`} onClick={onClick}>
      {text}
    </div>
  );
}

export default TodoCard;
