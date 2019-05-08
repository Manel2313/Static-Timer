import React, { Component } from 'react';
import './timer.css'
class Timer extends Component {
  state = {}
  render() {
    return (
      <div className="timer">
        <div className="the-hours">
          <span className="hour">01</span>
          <p className="text"> Hour </p>
        </div>
        <span className="seperate">:</span>
        <div className="the-minutes">
          <span className="minute">35</span>
          <p className="text"> Minute </p>
        </div>
        <span className="seperate">:</span>
        <div className="the-seconds">
          <span className="second">55</span>
          <p className="text"> Second </p>
        </div>
      </div>
    );
  }
}

export default Timer;