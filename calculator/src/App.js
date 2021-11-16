import Buttons from './Components/Buttons';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentNumber: '',
      savedNumbers: [],
      operation: '',
      result: 0,
    }
  }

  handleNumberClick = (event) => {
    this.setState({
      currentNumber: Number(this.state.currentNumber += event.target.value)
    })
  }

  handleOperatorClick = (event) => {
    this.setState({
      operation: event.target.value,
      savedNumbers: [...this.state.savedNumbers, Number(this.state.currentNumber)],
      currentNumber: '',
    })
  }

  handleClearButton = () => {
    this.setState({
      operation: '',
      currentNumber: 0,
      savedNumbers: [],
    })
  }

  handleCalculateButton = async () => {
    //map over the values and provide a result of the operation over the value
    await this.setState({
      savedNumbers: [...this.state.savedNumbers, Number(this.state.currentNumber)],
      currentNumber: '',
    })
    let total;
    if (this.state.operation === '+') {
      total = this.state.savedNumbers.reduce(function (passedIn, Item) {
        return passedIn + Number(Item)
      }, 0);
    }
    if (this.state.operation === '*') {
      total = this.state.savedNumbers.reduce(function (passedIn, Item) {
        return passedIn * Number(Item)
      }, 1);
    }
    if (this.state.operation === '/') {
      total = this.state.savedNumbers.reduce(function (passedIn, Item) {
        return passedIn / Number(Item)
      });
    }
    if (this.state.operation === '-') {
      total = this.state.savedNumbers.reduce(function (passedIn, Item) {
        return passedIn - Number(Item)
      });
    }
    this.setState({ currentNumber: total })
  }


  render() {
    const numberButton = Array.from(Array(10).keys()).map((eachNumber) => {
      return <button name={eachNumber} value={eachNumber} onClick={this.handleNumberClick}>{eachNumber}</button>
    })


    return (
      <div className="App">
        <div className='DisplayScreen'>{this.state.currentNumber}</div>
        <div className='NumberButtons'>
          {numberButton}
        </div>
        <Buttons handleCalculateButton={this.handleCalculateButton} handleClearButton={this.handleClearButton} handleNumberClick={this.handleNumberClick} handleOperatorClick={this.handleOperatorClick} />

      </div>

    );
  }
}

export default App;
