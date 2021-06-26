// 2 component - Welcome 
const Welcome = (props) => {
    console.log(`welcome props`, props)
    return <h2>Welcome {props.customerName} !</h2>
}

export default Welcome;

