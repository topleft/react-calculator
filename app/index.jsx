import Calculator from './components/calculator/Calculator';
import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './components/todo/Todo';

ReactDOM.render(
  <Calculator />,
  document.getElementById('calculator')
);

ReactDOM.render(
  <Todo />,
  document.getElementById('todo')
);
