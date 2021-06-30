import {Component} from 'react';
import './App.css';
import User from './User';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Spider",
      date: "Monday",
      show: true
    }
    console.log('Constructor called')
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps called")
    return null;
  }

  componentDidMount(){
    // call api here
    this.setState({name: 'Batman'});
    console.log('componentDidMount called')
    console.log('UPDATING PHASE ------');
    
    // Uncomment this to see how timer is created
    // this.timerID=setInterval(() =>{
    //   // if you use this, get rid of above setState
    //   // this.setState({name: 'Batman', date: new Date().toLocaleDateString()})
    //   this.setState({date: new Date().toLocaleTimeString()});
    // }, 1000);
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate called');
    return true; // don't update
  }

  componentDidUpdate(prevState, prevProps, snapshot) {
    console.log('componentDidUpdate called');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount called');
    // cleanup timer
     // Uncomment this to see how timer is cleared
    // clearInterval(this.timerID);
  }

  showBox = () => {
    this.setState({show: !this.state.show})
  }

  render() {
    // never use setState inside render()
    console.log('Render called');
    return (
      <div className="App">
        <h1>React (class) lifecycle </h1>
        <h3>Hello, {this.state.name}</h3>
        <h4>Today is: {this.state.date}</h4>
       
        <button onClick={this.showBox}>Toggle</button>
        {this.state.show && <Child name={this.state.name}/>}

        <User/>
      </div>
    );
  }
}


class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Alan" // Spider
    }
  }
  componentDidUpdate(prevProps) {
    // console.log(this.props.name);
    // console.log(prevProps.name);
    if (this.props.name !== prevProps.name) {
      console.log('SUCCESS');
    }
}

  // static getDerivedStateFromProps(props, state) {
  //   console.log("props.name", props.name);
  //   console.log(`state.name`, state.name)
  //   return {name: props.name}
  // }

  componentWillUnmount() {
    console.log('componentWillUnmount inside Child called');
  }

  render() {
    return (
      <div style={{padding: "20px", border: "1px solid", margin: "10px"}}>
        <h1>Child Name: {this.props.name}</h1>
      </div>
    )
  }
}

// function Box() {
//   return <div style={{padding: "20px", border: "1px solid"}}>BOX</div>
// }
export default App;
