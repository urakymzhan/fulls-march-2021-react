import "./App.css";
// import our Welcome component from Welcome.js
import Welcome from './Welcome';
// import our ClassComponent component from ClassComponent.js
import  ClassComponent from './ClassComponent';

// 1 componet - App
function App() {
  return (
    <div className="container">
      <h1 >Hello React!</h1>
      {/* rendering nested components inside parent App component */}
      <Welcome />
      <SideBar/>
      <ClassComponent/>
    </div>
  );
}

// 3 component - SideBar
function SideBar() {
  return <h3>I am a Sidebar</h3>
}

export default App;
