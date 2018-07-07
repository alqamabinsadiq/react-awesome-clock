# REACT AWESOME CLOCK

react-awesome-clock is a react component which can be used in any one of the following ways:
- A Normal Clock 
- Days Count from a certain date (StartDate as mentioned in docs).

Why react-awesome-clock?

1. **Single Component for every type of clock** - It provides you a generic clock component, which allows you to design it dynamically as you want. You can aply whatever style you want. You can also use it as a timer by just providing the starting date using momentJS.

## DEMO

### Simple Clock Component
![Simple Clock Component Gif](https://github.com/alqamabinsadiq/react-awesome-clock/blob/master/src/images/clock.gif)

### Clock Component With Days Count
![Clock Component With Days Count Gif](https://github.com/alqamabinsadiq/react-awesome-clock/blob/master/src/images/clockWithDays.gif)

## Getting Started

### Installation

```sh
npm install --save react-awesome-clock
```

### Exports
Here's how to use it:

```js
// ES6
import ReactAwesomeClock from 'react-awesome-clock'; // React Awesome Clock

// CommonJS
let ReactAwesomeClock = require('react-awesome-clock');
```

## `<ReactAwesomeClock>`
A `<ReactAwesomeClock>` element renders the clock. You can also add an additional days count to this component by just passing the startDate as props.

### ReactAwesomeClock Usage


```js
import React from 'react';
import ReactDOM from 'react-dom';
import ReactAwesomeClock from 'react-awesome-clock';

class App extends React.Component {
  render() {
    return (
      <div>
      // Simple Clock Component
      <ReactAwesomeClock color={"lightGrey"} size={70}/>
      <ReactAwesomeClock day={true} color={"grey"} size={60} clockShadow="0 0 10px grey" clockDigitStyle="aerial" />

      // Clock Component With Days Count
      <ReactAwesomeClock day={true} color={"lightGrey"} size={70} startDate={moment([2017, 6, 1])}/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.body);
```
#### `<ReactAwesomeClock>` Props:
```js

//
// Props:
//
{
// Sets the color of clock.
color: string, // color={"lightGrey"}

// Sets the size of a clock.
size: number, // size={70}

// If set true then The clock will also show the day in clock.
day: boolean, // day={true}
/*
Sometimes we want to show the number of days passed since we start working or
launched a project. So this prop is helpful in such cases.
*/
// If the day prop is set to true then this prop will work.
// You can pass the object of date which contains the start date to this prop and it will // calculate the number of days and display in days section of clock.
// It is strongly recommended to use the moment object
startDate: object, // startDate={moment([2017, 6, 1])}

// Just pass the css shadow property, if you want a shadow on your clock.
clockShadow: string, // clockShadow="0 0 10px grey" 


// sets the style of clock digits, you can pass any font type you want to this prop.
clockDigitStyle: string // clockDigitStyle="aerial"

```

## Contributing

- Fork the project
- Install the dependencies: `$ npm install`
- Run the project: `$ npm start`
- Make changes.
- Add appropriate tests
- `$ npm test`
- If tests don't pass, make them pass.
- Update README with appropriate docs.
- Commit and make Pull Request.

## License
This source code is licensed under the MIT license.

---
Made with ♥ by ALQAMA BIN SADIQ [github](https://github.com/alqamabinsadiq/react-awesome-clock)