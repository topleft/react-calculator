import React from 'react';
import InputButton from './InputButton'


const NumberPad = React.createClass({
  render: function () {
    let rows = [
      [
        {text:7},
        {text:8},
        {text:9},
      ],
      [
        {text:4},
        {text:5},
        {text:6},
      ],
      [
        {text:1},
        {text:2},
        {text:3},
      ],
      [
        {text:0},
        {text:'.', key: 'dot', id: 'dot'},
      ],
    ]

    let buttons = rows.map((row, j) => {
      row = row.map((button) => {
        return <InputButton
          id={button.id  || button.text}
          number={button.text}
          onClick={this.props.onNumberClick}
          value={button.text}
          key={button.key || button.text}
        />
      })
      return <div key={rows[j][0]['text']+'row'}>{row}</div>
    })
    return (
      <div>
        {buttons}
      </div>
    )

  }
});

export default NumberPad;
