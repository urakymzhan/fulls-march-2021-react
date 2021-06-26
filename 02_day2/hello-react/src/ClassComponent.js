import React from 'react';

// 2 rules
    // 1. extending React.Component
    // 2. render()

// 4 component - ClassComponent
class ClassComponent extends React.Component {
    // contructor is optional
    // constructor(props) {
    //     super(props)
    // }

    render() {
        console.log("props from classComponent", this.props)
        return (
            <div>
                <h1>Hello from Class Component!</h1>
                <h2>Message: {this.props.message}</h2>
            </div>
        )
    }  
}

export default ClassComponent;



