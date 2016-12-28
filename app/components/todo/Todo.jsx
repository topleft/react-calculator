import React from 'react';
import Task from './Task'


const Todo = React.createClass({
  getInitialState: function() {
    return {
      todos: [
        {task: 'Make a todo component'},
        {task: 'How about we get some weather?'},
        {task: 'Checkout brunch'},
      ]
    }
  },
  render: function(){
    let tasks = this.state.todos.map(function(todo, i){
      return <Task task={todo.task} key={i}/>
    })

    return(
      <div>
        <h2>Tasks</h2>
        <div>
          <ul>{tasks}</ul>
        </div>
      </div>)
  }


})




export default Todo;
