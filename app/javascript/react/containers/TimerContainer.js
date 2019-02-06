import React from 'react';
import moment from 'moment';

import Timer from '../components/Timer';

class TimerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: '00',
      value: '',
      isClicked : false
    }
    this.secondsRemaining;
    this.intervalHandle;
    this.dropTime = this.props.dropDateMoment;
    this.handleChange = this.handleChange.bind(this);
    this.startCountDown = this.startCountDown.bind(this);
    this.tick = this.tick.bind(this);
  }

  componentDidMount(){
    this.startCountDown()
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  tick() {
    var min = Math.floor(this.secondsRemaining / 60);
    var sec = this.secondsRemaining - (min * 60);

    this.setState({
      value: min,
      seconds: sec,
    })

    if (sec < 10) {
      this.setState({
        seconds: "0" + this.state.seconds,
      })

    }

    if (min < 10) {
      this.setState({
        value: "0" + min,
      })

    }

    if (min === 0 & sec === 0) {
      clearInterval(this.intervalHandle);
    }


    this.secondsRemaining--
  }

  startCountDown() {
    this.intervalHandle = setInterval(this.tick, 1000);
    var now = moment().format()
    // var dropMoment = moment(this.dropTime).format("dddd, MMMM Do YYYY, h:mm:ss a z")
    // var secondsTotal = dropMoment.diff(now, 'seconds')
    // var minutesTotal = dropMoment.diff(now, 'minutes')
    // var hoursTotal = dropMoment.diff(now, 'hours')
    // var daysUntil = dropMoment.diff(now, 'days')
    //
    // var secondsUntil = secondsTotal % 60
    // var minutesTotal2 = Math.floor(Math.round((secondsTotal / 60) * 100) / 100)
    // var minutesUntil = minutesTotal % 60
    // var hoursTotal2 = Math.floor(Math.round((minutesTotal / 60) * 100) / 100)
    // var hoursUntil = (hoursTotal % 24)


    // debugger
    let time = 30;
    this.secondsRemaining = time * 60;
    this.setState({
      isClicked : true
    })
  }

  render() {
    const clicked = this.state.isClicked;
    if(clicked){
    return (
      <div>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <Timer value={this.state.value} seconds={this.state.seconds} />

          </div>
        </div>
      </div>
    );
    }else{
      return (
        <div>
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <Timer value={this.state.value} seconds={this.state.seconds} />
              <div style={{ marginLeft: 30 }}>
                <button className="button button-medium" disabled={!this.state.value} onClick={this.startCountDown}>Start</button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default TimerContainer
