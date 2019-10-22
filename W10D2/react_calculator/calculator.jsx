import React from 'react';

class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state = { num1 = '', num2 = '', result: 0};
    this.setNum1 = this.setNum1.bind(this);
  }

  setNum1(e) {

  }

  setNum2(e) {

  }

  add(e) {
    e.preventDefault();

  }

  subtract(e) {
    e.preventDefault();
  }

  divide(e) {
    e.preventDefault();
  }

  multiply(e) {
    e.preventDefault();
    const result = 
  }


  render() {
    const { num1, num2, result } = this.state;
    return (
      <div>
        <h1>Hello World</h1> // replace this with your code
      </div>
      <div>
        <h1>{result}</h1>

        <input onChange={this.setNum1} value={num1} />
        <input onChange={this.setNum2} value={num2} />
        <button onClick={this.clear}>Clear</button>
        <br />
        <button onClick={this.add}>+</button>
      </div>
    );
  }
}

export default Calculator;
