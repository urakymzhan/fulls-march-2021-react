import "./App.css";
// import our Welcome component from Welcome.js
import Welcome from './Welcome';
// import our ClassComponent component from ClassComponent.js
import  ClassComponent from './ClassComponent';

import Counter from './Counter';

// 1 componet - App
function App() {
  // data
  const name = 'Alan';
  const title = 'SideBar';
  const who = 'I am ';
  const message = "Yooooo class"

  return (
    <div className="container">
      <h1 >Hello React!</h1>
      {/* rendering nested components inside parent App component */}
      <Welcome customerName={name}/>
      <SideBar title={title} who={who}/>
      <ClassComponent message={message}/>

      <Counter/>
      
      {/* children prop passed */}
      <Footer year={2021}>Footer text </Footer>
      {/* no children prop passed */}
      <Footer year={2021} />
    </div>
  );
}

// 3 component - SideBar
function SideBar(props) {
  console.log("sidebar props",  props);
  return <h3>{props.who} a {props.title}</h3>
}

function Footer(props) {
  console.log(`props from Footer`, props)
  return <h3>{props.children} - {props.year}</h3>
}

export default App;
