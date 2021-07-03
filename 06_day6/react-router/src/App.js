import "./App.css";
import {
  BrowserRouter as Router,
  // HashRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Nav from "./Nav";
import AllStudents from "./AllStudents";
import StudentDetails from "./StudentDetails";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/students" component={AllStudents} />
        <Route path="/students/:id" component={StudentDetails} />

        {/* random example routes */}
        {/* <Route path="/about/hello" render={() => <div>Hello About</div>} /> */}
        {/* <Route path="/about" render={() => <About name="test"/> } /> */}
        {/* <Route path="/about">
          <About name="test"/>
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
