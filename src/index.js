const Car = require('./lib/car');
const Instance = require('./lib/Instance')
const Door = require('./lib/Door')
const Event = require('./lib/Event')

const car = new Car(null, 4);

console.log(car.IsA(Car));

console.log(car.Children);

const someEvent = new Event();

let connection = someEvent.Connect((...args) => {
  console.log('Event fired!');
  console.log(args);
})

someEvent.Fire('Hello', 'World');

connection.Disconnect();

someEvent.Fire('Hello', 'World', 'again');

connection = car.Changed.Connect((Property) => {
  console.log(`Property ${Property} changed!`);
})

car.Lock();