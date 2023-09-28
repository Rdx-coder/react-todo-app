import React from 'react';
import './styles.css';

function TodoCard({ text, completed, onClick }) {
  return (
    <div className={`todo-card ${completed ? 'completed' : ''}`} onClick={onClick}>
      {text}
    </div>
  );
}

export default TodoCard;
