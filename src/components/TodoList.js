import React from 'react';
import Todo from '../components/Todo';

import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';

const TodoList = ({ todos, removeTodo, toggleTodo }) => {
  return (
    <Paper>
      <List>
        {todos.map(todo => (
          <Todo
            id={todo.id}
            task={todo.task}
            key={todo.id}
            completed={todo.completed}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
          />
        ))}
      </List>
    </Paper>
  );
};

export default TodoList;
