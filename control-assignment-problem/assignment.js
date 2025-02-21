const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if (randomNumber > 0.7) {
  alert(`Number is ${randomNumber}, which is greater than 0.7.`)
}

const numbers = [1, 2, 3, 4, 5, 6]
for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(numbers[i])
}

for (const number of numbers) {
  console.log(number)
}

const randomNumber2 = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if (randomNumber > 0.5 && randomNumber2 > 0.5) {
  console.log(`We live ${randomNumber} ${randomNumber2}`)
} else if (randomNumber < 0.5 || randomNumber2 < 0.5) {
  console.log(`We're cooked ${randomNumber} ${randomNumber2}`);

}
