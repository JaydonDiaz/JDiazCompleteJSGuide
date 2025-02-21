const task3Element = document.getElementById('task-3');

function greet() {
  alert("Hello")
}

function greetUser(userName) {
  alert('Hi ' + userName)
}

function combine(str1, str2, str3) {
  const combinedText = `${str1} ${str2} ${str3}`;
  return combinedText
}

const combinedString = combine('sugma', 'ligma', 'strogma')
alert(combinedString)

greetUser("Joe")

task3Element.addEventListener('click', greet)
