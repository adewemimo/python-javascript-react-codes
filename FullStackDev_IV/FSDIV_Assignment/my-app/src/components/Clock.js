import React from 'react';

import './Clock.css';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.startInterval();
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  startInterval = () => {
    this.timer = setInterval(() => this.setState({ date: new Date() }), 1000);
  };

  componentDidUpdate(prevProps) {
    if (prevProps.stopTime !== this.props.stopTime) {
      if (this.props.stopTime) {
        clearInterval(this.timer);
      } else {
        this.startInterval();
      }
    }
  }

  render() {
    return <div className="clock">{this.state.date.toLocaleTimeString()}</div>;
  }
}

export default Clock;
