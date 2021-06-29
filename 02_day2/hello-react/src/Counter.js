// class component
import {Component} from 'react';

// styling in js
const style = {
    border: "1px solid red"
}

class Counter extends Component {
    constructor() {
        super();
        this.state = { count: 2 }
        // required
        // this.handleClick = this.handleClick.bind(this);
    }
    // * if you want this function to work uncomment above binding
    // handleClick(){
    //     // functions has their own 'this'
    //     this.setState({ count: this.state.count+1})
    // }
    // you don't have to bind it.
    handleClickArrow = () => {
        this.setState({ count: this.state.count+1})
    }
    render() {
        return (
            <div className="counter" style={style}>
                <button onClick={this.handleClickArrow}>Increase</button>
                <p>{this.state.count}</p>
            </div>
        )
    }

}

// in vanilla JS
// button.addEventListener('click', handleClick)
// <button onclick="handleClick()">Increase</button>

export default Counter;