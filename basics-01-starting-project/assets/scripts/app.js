let currentResult = 0
let logEntries = [];

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const description = `${resultBeforeCalc} ${operator} ${calcNumber}`
  outputResult(currentResult, description)
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    operand: operationNumber,
    newResult: newResult
  }
  logEntries.push(logEntry)
  console.log(logEntries)
}

function getUserNumberInput() {
  return parseFloat(userInput.value)
}

function calculateResults(operation) {
  const enteredNumber = getUserNumberInput()
  const initialResult = currentResult
  let operator;
  if (operation === 'ADD') {
    currentResult += enteredNumber
    operator = '+'
  } else if (operation === 'SUBTRACT') {
    currentResult -= enteredNumber
    operator = '-'
  }
  else if (operation === 'MULTIPLY') {
    currentResult *= enteredNumber
    operator = '*'
  }
  else if (operation === 'DIVIDE') {
    currentResult /= enteredNumber
    operator = '/'
  }
  createAndWriteOutput(operator, initialResult, enteredNumber)
  writeToLog(operation, initialResult, enteredNumber, currentResult)
}


addBtn.addEventListener('click', calculateResults.bind(this, 'ADD'))
subtractBtn.addEventListener('click', calculateResults.bind(this, 'SUBTRACT'))
multiplyBtn.addEventListener('click', calculateResults.bind(this, 'MULTIPLY'))
divideBtn.addEventListener('click', calculateResults.bind(this, 'DIVIDE'))

// function add() {
//   const enteredNumber = parseFloat(userInput.value)
//   const initialResult = currentResult
//   currentResult += enteredNumber
//   createAndWriteOutput('+', initialResult, enteredNumber)
//   writeToLog('ADD', initialResult, enteredNumber, currentResult)
// }


// function subtract() {
//   const enteredNumber = parseFloat(userInput.value)
//   const initialResult = currentResult
//   currentResult -= enteredNumber
//   createAndWriteOutput('-', initialResult, enteredNumber)
//   writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult)
// }


// function multiply() {
//   const enteredNumber = parseFloat(userInput.value)
//   const initialResult = currentResult
//   currentResult *= enteredNumber
//   createAndWriteOutput('*', initialResult, enteredNumber)
//   writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult)

// }


// function divide() {
//   const enteredNumber = parseFloat(userInput.value)
//   const initialResult = currentResult
//   currentResult /= enteredNumber
//   createAndWriteOutput('/', initialResult, enteredNumber)
//   writeToLog('DIVIDE', initialResult, enteredNumber, currentResult)

// }

