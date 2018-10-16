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

|Prop name|Type|Description|Example values|
|----|----|----|----|
|day|`boolean`|Displays the day section.|`day={true}`|
|startDate|`string`|Displays the date count from startDate.|`startDate="2017-06-01"`|
|clockSeparator|`string`|Sets the separator between days, hours and minutes. We are using `.` as the default separator|`clockSeparator="."`|
|style|`object`|Sets the styles of the app, you can pass in any valid styles here.|`style={{ color: "lightGrey" }}`|

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

## Author

<table>
  <tr>
    <td>
      <img src="https://github.com/alqamabinsadiq.png?s=100" width="100">
    </td>
    <td>
      Alqama Bin Sadiq<br />
      <a href="mailto:alqamabinsadiq@gmail.com">alqamabinsadiq@gmail.com</a><br />
      <a href="https://alqamabinsadiq.github.io/">https://alqamabinsadiq.github.io/</a>
    </td>
  </tr>
</table>