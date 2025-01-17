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
    </div>
  )
}

export default Calculator
