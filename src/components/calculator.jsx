import React, { useState } from 'react'

const Calculator = () => {
    const [firstNumber, setFirstNumber] = useState('')
    const [secondNumber, setSecondNumber] = useState('')
    const [operator, setOperator] = useState('')
    const [display, setDisplay] = useState('')

  return (
    <div className='calculator' data-testid="calculator">
        <div className='display' data-testid="display">
            {/* Display the complete equation the user wants to run */}
            <div data-testid="equation">
                {firstNumber} {operator} {secondNumber}
            </div>
            {/* Displays user inputs and results */}
            <div data-testid="input-result">
                {display}
            </div>
        </div>
        <div className='button-wrapper'>
            {/* Number Inputs */}
            <div className='input-wrapper'>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button className='last-input'>0</button>
            </div>
            <div className='action-wrapper'>
                {/* Operator Buttons */}
                <div className='operator'>
                    <button>+</button>
                    <button>-</button>
                    <button>*</button>
                    <button>/</button>
                </div>
                {/* Utility Buttons */}
                <div className='utility'>
                    <button className='bg-danger'>C</button>
                    <button className='bg-success'>=</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Calculator
