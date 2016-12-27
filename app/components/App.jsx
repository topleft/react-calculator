import React from 'react';
import NumberPad from './NumberPad'
import Screen from './Screen'

const App = React.createClass({
  getInitialState: function() {
    return {userInput: ''}
  },

  onScreenChange: function(event) {
    let userInput = event.target.value
    this.setState({userInput: userInput})
  },

  onNumberClick: function(event) {
    let userInput = this.state.userInput + event.target.value
    this.setState({userInput: userInput})
  },

  render: function () {
    console.log('wtf')
    return <div>
      <Screen
        onScreenChange={this.onScreenChange}
        userInput={this.state.userInput}
      />
      <NumberPad onNumberClick={this.onNumberClick}/>
    </div>
  }
});



export default App;
