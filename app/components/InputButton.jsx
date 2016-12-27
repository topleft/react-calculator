import React from 'react';

const InputButton = React.createClass({
  render: function () {
    return <button
      onClick={this.props.onClick}
      value={this.props.value}>
        {this.props.number}
      </button>
  }
});

export default InputButton;
