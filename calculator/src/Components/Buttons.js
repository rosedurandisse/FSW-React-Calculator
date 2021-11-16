const Buttons = (props) => {
    return (
        <div className='OperationButton'>
            <button name='multiply' value='*' onClick={(event) => props.handleOperatorClick(event)}>x</button>
            <button name='divide' value='/' onClick={(event) => props.handleOperatorClick(event)}>/</button>
            <button name='add' value='+' onClick={(event) => props.handleOperatorClick(event)}>+</button>
            <button name='subtract' value='-' onClick={(event) => props.handleOperatorClick(event)}>-</button>
            <button name='equals' value='equals' onClick={(event) => props.handleCalculateButton(event)}>=</button>
            <button name='clear' value='clear' onClick={(event) => props.handleClearButton(event)}>Clear</button>

        </div>
    )
}

export default Buttons;
