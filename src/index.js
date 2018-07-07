import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

// Default Styles
const styles = {
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
  constructor(props) {
    super(props);
    this.state = {
      dateTimestamp: Date.now()
    };
    this.tick = this.tick.bind(this);
    this.renderDay = this._renderDay.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  // clock tick.
  tick() {
    // let timestamp = Date.now();
    this.setState({
      dateTimestamp: Date.now(),
    });
  }

  // renders the day section of clock if the user set the day prop as true.
  _renderDay(day, heading = "DAYS") {
    if (this.props.day) {
      return (

        <div style={{ ...styles.clockHeaderStyle }}>
          <div style={{ ...styles.clockSubHeader }}> {heading} </div>
          <div>{day}</div>
        </div>

      );
    }
    else
      return null;
  }

  // Calculating no. of days.
  calculateDays(startDate) {
    let date = new Date();
    let curr_date = date.getDate();
    let curr_year = date.getFullYear();
    let curr_month = date.getMonth();
    let currentDate = moment([curr_year, curr_month + 1, curr_date]);
    return currentDate.diff(startDate, 'days');
  }

  render() {
    const { startDate, color, size, clockShadow, clockDigitStyle } = this.props;
    let day = this.calculateDays(startDate);

    return (
      <div
        style={{
          ...styles.clockStyle,
          color: color,
          fontSize: size,
          textShadow: clockShadow,
          fontFamily: clockDigitStyle,
        }}>
        {startDate ? this.renderDay(day) : this.renderDay(moment().format("DD"), "DAY")}
        {this.props.day ? <div>.</div> : null}
        <div style={{ ...styles.clockHeaderStyle }}>
          <div style={{ ...styles.clockSubHeader }}> HOURS </div>
          <div>{moment().format("HH")}</div>
        </div>
        <div>.</div>
        <div style={{ ...styles.clockHeaderStyle }}>
          <div style={{ ...styles.clockSubHeader }}> MINUTES </div>
          <div>{moment().format("mm")}</div>
        </div>
        <div>.</div>
        <div style={{ ...styles.clockHeaderStyle }}>
          <div style={{ ...styles.clockSubHeader }}> SECONDS </div>
          <div>{moment().format("ss")}</div>
        </div>
      </div>
    );
  }
}

ReactClock.propTypes = {
  startDate: PropTypes.object,
  color: PropTypes.string,
  size: PropTypes.number,
  clockShadow: PropTypes.string,
  day: PropTypes.bool,
  clockDigitStyle: PropTypes.string
};

export default ReactClock;