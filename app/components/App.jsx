import React from 'react';
import NumberPad from './NumberPad'
import OperatorPad from './OperatorPad'
import Screen from './Screen'

const App = React.createClass({
  getInitialState: function() {
    return {
      userInput: '',
      storedNumber: null,
      operator: null,
      clearOnNextClick: false
    }
  },

  onScreenChange: function(event) {

    let userInput = event.target.value
    if (userInput.match(/[^\d\.]/g)) {
      return
    }
    this.setState({userInput: userInput})
  },

  onNumberClick: function(event) {
    let userInput = event.target.value
    if (this.state.clearOnNextClick) {
      userInput = event.target.value
    } else {
      userInput = this.state.userInput + event.target.value
    }
    this.setState({userInput: userInput})
  },

  calculate: function(operator){
    console.log('in the clac', operator);
    let result = null;
    let storedNumber = this.state.storedNumber
    let inputNumber = this.state.userInput
    let storedOperator = this.state.operator
    if (storedNumber && storedOperator) {
       switch(storedOperator) {
        case 'plus':
          result = +storedNumber + +inputNumber
          break;
        case 'minus':
          result = +storedNumber - +inputNumber
          break;
      }
      console.log('result', result);
      this.setState({userInput: result, storedNumber: result, operator: operator, clearOnNextClick: true})
    } else if (storedNumber) {
      this.setState({operator: operator, clearOnNextClick: true})
    } else {
      this.setState({storedNumber: inputNumber, operator: operator, clearOnNextClick: true})
    }
  },

  onOperatorClick: function(event) {
    this.calculate(event.target.value)
  },

  render: function () {
    console.log('wtf')
    return <div>
      <Screen
        onScreenChange={this.onScreenChange}
        userInput={this.state.userInput}
      />
      <OperatorPad
        onOperatorClick={this.onOperatorClick}
      />
      <NumberPad onNumberClick={this.onNumberClick}/>
    </div>
  }
});



export default App;
