const sayHello = (name) => console.log('Hi ' + name);


const sayHello2 = (phrase, name) => console.log(phrase + ' ' + name);
const sayHello3 = () => console.log('Hello my good sir');
const sayHello4 = name => 'Yo ' + name;


sayHello('Jaydon');
sayHello2("What's up", 'Jaydon')
sayHello3()
console.log(sayHello4('Jaydon'))

const sayHello5 = (name, phrase = 'Greetings') => console.log(phrase + ' ' + name);

sayHello5('Jaydon')

const checkInput = (cb, ...strings) => {
  let hasEmptyText = false;
  for (const text of strings) {
    if (!text) {
      hasEmptyText = true
      break;
    }
  }
  if (!hasEmptyText) {
    cb()
  }
}

checkInput(() => {
  console.log('All not empty!');

}, 'Hello', 'Foo', 'Bar', 'deez')
