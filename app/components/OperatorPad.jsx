import React from 'react';
import InputButton from './InputButton'


const OperatorPad = React.createClass({
  render: function () {
    return(
      <div>
        <InputButton
          id='clear'
          value='clear'
          text='X'
          onClick={this.props.onOperatorClick}
          key='clear'
        />
        <InputButton
          id='equals'
          value='equals'
          text='='
          onClick={this.props.onOperatorClick}
          key='equals'
        />
        <InputButton
          id='plus'
          value='plus'
          text='+'
          onClick={this.props.onOperatorClick}
          key='plus'
        />
        <InputButton
          id='minus'
          value='minus'
          text='-'
          onClick={this.props.onOperatorClick}
          key='minus'
        />
      </div>
    )
  }
})

export default OperatorPad;
