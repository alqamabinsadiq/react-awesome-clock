import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

const defaultStyles = {
  clockStyle: {
    height: '8rem',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    fontSize: '61px',
    fontFamily: 'sans-serif',
    letterSpacing: '5px',
    textShadow: '0 0 10px #fff',
    textTransform: 'uppercase'
  },
  clockHeaderStyle: {
    margin: '13px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  clockSubHeader: {
    marginBottom: '10px',
    fontSize: '13px',
    letterSpacing: 'initial'
  }
};

class ReactClock extends Component {

  static propTypes = {
    startDate: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.number,
    clockShadow: PropTypes.string,
    day: PropTypes.bool,
    clockDigitStyle: PropTypes.string,
    clockSeparator: PropTypes.string
  };

  state = {
    dateTimestamp: Date.now()
  };

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick = () => {
    this.setState({ dateTimestamp: Date.now() });
  }

  calculateNumberOfDaysLeft = startDate => {
    return moment().diff(startDate, 'days');
  }

  // pad string with zero
  pad = (str, max = 2) => str.length < max ? `0 ${str}` : str;

  static Day = ({ daysLeft, startDate, isDayEnabled }) => {
    return <div>
      {
        isDayEnabled ?
          <div style={{ ...defaultStyles.clockHeaderStyle }}>
            <div style={{ ...defaultStyles.clockSubHeader }}> {startDate ? 'DAYS' : 'DAY'} </div>
            <div>{startDate ? daysLeft : moment().format('DD')}</div>
          </div> :
          ''
      }
    </div>;
  }

  static Seperator = ({ clockSeparator, shouldShow = true }) => {
    return <span>{shouldShow ? (clockSeparator ? clockSeparator : '.') : ''}</span>;
  }

  static Hour = () => {
    return <div style={{ ...defaultStyles.clockHeaderStyle }}>
      <div style={{ ...defaultStyles.clockSubHeader }}> hours </div>
      <div>{moment().format('HH')}</div>
    </div>;
  }

  static Minutes = () => {
    return <div style={{ ...defaultStyles.clockHeaderStyle }}>
      <div style={{ ...defaultStyles.clockSubHeader }}> minutes </div>
      <div>{moment().format('mm')}</div>
    </div>
  }

  static Seconds = () => {
    return <div style={{ ...defaultStyles.clockHeaderStyle }}>
      <div style={{ ...defaultStyles.clockSubHeader }}> seconds </div>
      <div>{moment().format('ss')}</div>
    </div>
  }

  render() {
    const { startDate, day, style, clockSeparator } = this.props;
    const daysLeft = this.pad(this.calculateNumberOfDaysLeft(startDate).toString());
    const isDayEnabled = day === undefined ? false : day;
    return (
      <div
        style={{
          ...defaultStyles.clockStyle,
          ...style
        }}>
        <ReactClock.Day daysLeft={daysLeft} startDate={startDate} isDayEnabled={isDayEnabled} />
        <ReactClock.Seperator clockSeparator={clockSeparator} shouldShow={isDayEnabled} />
        <ReactClock.Hour />
        <ReactClock.Seperator clockSeparator={clockSeparator} />
        <ReactClock.Minutes />
        <ReactClock.Seperator clockSeparator={clockSeparator} />
        <ReactClock.Seconds />
      </div>
    );
  }
}

export default ReactClock;