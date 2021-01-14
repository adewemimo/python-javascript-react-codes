import React from 'react';
import LogItem from './LogItem';
import Clock from './Clock';
import Header from './Header';

import './Timer.css';

class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      startDate: '',
      endDate: '',
      startTime: '',
      endTime: '',
      duration: '',
      timerLog: [],
      toggleTime: false,
      stopTime: false,
    };
  }

  startTimer = () => {
    this.setState(
      {
        startDate: new Date(),
        startTime: new Date().toLocaleTimeString(),
        endDate: '',
        endTime: '',
      },
      () => {
        this.setState({ toggleTime: true, stopTime: false });
      }
    );
  };

  stopTimer = () => {
    this.setState(
      {
        endDate: new Date(),
        endTime: new Date().toLocaleTimeString(),
      },
      () => {
        this.calculateTimeDifference();
        this.setState({ stopTime: true });
      }
    );
  };

  calculateTimeDifference = () => {
    const { startDate, endDate } = this.state;

    const diff = (endDate.getTime() - startDate.getTime()) / 1000;
    const minutes = (diff / 60).toFixed(0);
    const seconds = (diff % 60).toFixed(0);
    const duration = `Duration => minutes: ${minutes} seconds: ${seconds}`;

    this.setState({ timerLog: [...this.state.timerLog, duration] });
  };

  resetTimerValues = () => {
    this.setState({ startTime: ' ' });
    this.setState({ endTime: '' });
    this.setState({ timerLog: [] });
    this.setState({ toggleTime: false });
  };

  render() {
    const { startTime, endTime, toggleTime, stopTime } = this.state;
    return (
      <div className="timer-container">
        <Header />
        <hr />
        <div className="timer">
          <div className="formControl">
            <p>Start Time:</p>
            <input type="text" value={startTime} readOnly />
          </div>
          <div className="formControl">
            <p>End Time:</p>
            <input type="text" value={endTime} readOnly />
          </div>
          {toggleTime && <Clock stopTime={stopTime} />}
          <div className="formControl">
            <button type="button" onClick={this.startTimer}>
              Start
            </button>
            <button type="button" onClick={this.stopTimer}>
              Stop
            </button>
            <button id="btnReset" type="button" onClick={this.resetTimerValues}>
              Reset
            </button>
          </div>
        </div>
        <LogItem loggedtime={this.state.timerLog} />
      </div>
    );
  }
}

export default Timer;
