import React from 'react';
import NumberButton from './NumberButton'


const NumberPad = React.createClass({
  render: function () {
    let rows = [[7,8,9],[4,5,6],[1,2,3],[0, '.']]
    let buttons = rows.map((row, j) => {
      row = row.map((i) => {
        let id = typeof i == 'number' ? i : 'dot';
        let key = typeof i == 'number' ? i : 'dot';
        return <NumberButton
          id={id}
          number={i}
          onClick={this.props.onNumberClick}
          value={i}
          key={key}
        />
      })
      return <div key={rows[j]}>{row}</div>
    })
    return (
      <div>
        {buttons}
      </div>
    )
  }
});

export default NumberPad;
