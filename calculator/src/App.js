import Buttons from './Components/Buttons';
import DisplayScreen from './Components/DisplayScreen';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentNumber: 0,
      operation: '',
      result: 0,
    }
  }



  handleNumberClick = (event) => {
    this.setState({
      currentNumber: this.state.currentNumber += event.target.value
    })
  }

  handleOperatorClick = (event) => {
    this.setState({
      operation: event.target.value
    })
    console.log(event.target.value)
  }

  handleClearButton = (event) => {
    this.setState({
      operation: event.target.value,
      currentNumber: 0,
      result: 0,
    })
  }


  render() {
    const numberButton = Array.from(Array(10).keys()).map((eachNumber) => {
      return <button name={eachNumber} value={eachNumber} onClick={this.handleNumberClick}>{eachNumber}</button>
    })



    const { currentNumber } = this.state;
    return (

      <div className="App">
        <div className='DisplayScreen'>{this.state.currentNumber}{this.state.operation}</div>
        <div className='NumberButtons'>
          {numberButton}
        </div>
        <div className='OperationButton'>
          <button name='multiply' value='*' onClick={this.handleOperatorClick}>x</button>
          <button name='divide' value='/' onClick={this.handleOperatorClick}>/</button>
          <button name='add' value='+' onClick={this.handleOperatorClick}>+</button>
          <button name='subtract' value='-' onClick={this.handleOperatorClick}>-</button>
        </div>
        <button name='equals' value='equals' onClick={this.calculateButton}>=</button>
        <button name='clear' value='clear' onClick={this.handleClearButton}>Clear</button>

      </div>

    );
  }
}

export default App;
