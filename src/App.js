import React, {Component} from 'react';
import './App.css'

 class App extends Component {
currentTime(){
  return new Date();
};
birth(){
  return new Date("1998-11-13 07:15:00")
  }
constructor(props) {
    super(props);
      this.state = {
      birthDay : this.birth(),
      time : this.currentTime(),
      age : undefined,
    };
  }

  
render() {
let years = this.state.age / 31556900000
let majorminor=years.toFixed(9).toString().split('.');


console.log(years)
  return ( 
  <div className = "App" >
    <div className = "try">
      <h1>{majorminor[0]}<span>.{majorminor[1]}</span></h1>
    </div>
  </div>
  );
}
componentDidMount(){
  this.interval = setInterval(()=>
  {
    this.setState({age:this.currentTime()-this.birth()})
    console.log(this.state.age)}
    ,100)
}
componentWillUnmount(){
  clearInterval(this.interval)
}
}

export default App;