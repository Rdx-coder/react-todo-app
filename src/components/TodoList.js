import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Card, CardContent, IconButton, Grid, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';

const activeTodoStyle = {
  border: '2px solid #2196F3',
  backgroundColor: '#E3F2FD',
};

const completedTodoStyle = {
  border: '2px solid #4CAF50',
  backgroundColor: '#E8F5E9',
};

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

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const resetTodos = () => {
    setTodos([]);
  };

  const activeTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <Container maxWidth="sm">
      <Typography variant="h2" gutterBottom>
        TODO App
      </Typography>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Add a new todo..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={addTodo}>
        Add
      </Button>
      <Box mt={2}>
        <Button variant="contained" color="secondary" onClick={resetTodos}>
          Reset
        </Button>
      </Box>
      <Typography variant="h5" gutterBottom style={{ marginTop: '2rem' }}>
        Active Todos
      </Typography>
      {activeTodos.map((todo) => (
        <Card key={todo.id} style={activeTodoStyle}>
          <CardContent>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <IconButton color="primary" onClick={() => markComplete(todo.id)}>
                <DoneIcon />
              </IconButton>
              <Typography variant="body1">
                {todo.text}
              </Typography>
              <IconButton color="secondary" onClick={() => deleteTodo(todo.id)}>
                <DeleteIcon />
              </IconButton>
            </div>
          </CardContent>
        </Card>
      ))}
      <Typography variant="h5" gutterBottom style={{ marginTop: '2rem' }}>
        Completed Todos
      </Typography>
      {completedTodos.map((todo) => (
        <Card key={todo.id} style={completedTodoStyle}>
          <CardContent>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="body1" style={{ textDecoration: 'line-through' }}>
                {todo.text}
              </Typography>
              <IconButton color="secondary" onClick={() => deleteTodo(todo.id)}>
                <DeleteIcon />
              </IconButton>
            </div>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}

export default TodoList;
