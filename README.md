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
      <ReactAwesomeClock style={{ color: "lightGrey", fontSize: 70 }} />
      <ReactAwesomeClock day={true} style={{ color: "grey", fontSize: 60, textShadow: "0 0 10px grey", fontFamily: "aerial" }} />

      // Clock Component With Days Count
      <ReactAwesomeClock day={true} style={{ color: "lightGrey", fontSize: 70 }} startDate="2018-09-06" />
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
// If set true then The clock will also show the day in clock.
day: boolean, // day={true}

/*
 * Sometimes we want to show the number of days passed since we start working or
 * launched a project. So this prop is helpful in such cases.
 * You can pass the object of date which contains the start date to this prop and it will 
 * calculate the number of days and display in days section of clock.
*/
startDate: string, // startDate="2017-06-01"

// Sets the separator between days, hours and minutes. We are using . as the default separator.
clockSeparator: string, // clockSeparator="."

// Set the styles of the app, you can pass in any valid styles here.
style: object, // style={{ color: "lightGrey" }}

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