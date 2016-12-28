import React from 'react';


const Task = React.createClass({
  render: function(){
    return <li>{this.props.task}</li>
  }
})


export default Task;
