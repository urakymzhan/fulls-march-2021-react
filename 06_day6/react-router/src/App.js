import "./App.css";
import {
  BrowserRouter as Router,
  // HashRouter,
  Route,
  Switch,
  Link
} from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Nav from "./Nav";

const studentsAPI = {
  students: [
    { number: 1, name: "John", class: "A" },
    { number: 2, name: "Doe", class: "B" },
    { number: 3, name: "Ryan", class: "C" },
  ],
  // get() {
  //   return this.students
  // },
};

const AllStudents = (props) => {
  console.log(props);
  return (
    <ul>
      {studentsAPI.students.map((student) => {
        return <li key={student.number}><Link to={`/students/${student.number}`}>{student.name}</Link></li>;
      })}
    </ul>
  );
};

const StudentDetails = (props) => {
  console.log(props);
  return <h1>Student ID: {props.match.params.id}</h1>
}

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/students" component={AllStudents} />
        <Route path="/students/:id" component={StudentDetails} />
      </Switch>
    </Router>
  );
}

export default App;
