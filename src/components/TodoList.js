import React, { useState } from 'react';
import TodoCard from './TodoCard';
import './styles.css';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim() === '') return;
    setTodos([...todos, { text: inputValue, completed: false, id: Date.now() }]);
    setInputValue('');
  };

  const markComplete = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: true };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const resetTodos = () => {
    setTodos([]);
  };

  return (
    <div className="todo-list">
      <h2>TODO App</h2>
      <input
        className="todo-input"
        type="text"
        placeholder="Add a new todo..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            addTodo();
          }
        }}
      />
      <div className="todo-buttons">
        <button onClick={addTodo}>Add</button>
        <button className="reset-button" onClick={resetTodos}>
          Reset
        </button>
      </div>
      <div>
        <h3>Active Todos</h3>
        {todos
          .filter((todo) => !todo.completed)
          .map((todo) => (
            <TodoCard
              key={todo.id}
              text={todo.text}
              completed={todo.completed}
              onClick={() => markComplete(todo.id)}
            />
          ))}
      </div>
      <div>
        <h3>Completed Todos</h3>
        {todos
          .filter((todo) => todo.completed)
          .map((todo) => (
            <TodoCard key={todo.id} text={todo.text} completed={todo.completed} />
          ))}
      </div>
    </div>
  );
}

export default TodoList;
