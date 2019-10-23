import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
     date: new Date()
    };
    // this.hours = this.state.getHours();
    // this.minutes = this.state.getMinutes();
    // this.seconds = this.state.getSeconds();
    // const id = setInterval(this.tick(),1000);
    // this.tick = this.tick.bind(this);
    // this.componentDidMount = this.componentDidMount.bind(this);
  }

  tick() {
    setInterval(() => {
      this.setState({date: new Date()});  
    }, 1000);
  }

  componentDidMount() {
    this.tick();
  }
  componentWillUnmount() {
    this.tick();
  }

  render() {
    const hours = this.state.date.getHours();
    const minutes = this.state.date.getMinutes();
    const seconds = this.state.date.getSeconds();

    const year = this.state.date.getFullYear();
    const month = this.state.date.getMonth();
    const day = this.state.date.getDay();
   return (
    <div class ="clock">
       <div class="time"> 
         <span>Time:</span> <span>{[hours, minutes, seconds].join(':')}</span></div>
       <div class="date"> 
         <span>Date:</span> <span>{[month, day, year].join(':')}</span> 
       </div>
    </div>

    
    
   ) 
  }

}

export default Clock;