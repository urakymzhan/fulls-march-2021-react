import { studentsAPI} from './students-data';
import {
    Link
  } from "react-router-dom";

  
const AllStudents = () => {
    return (
      <ul>
        {studentsAPI.getAll().map((student) => {
          return <li key={student.number}><Link to={`/students/${student.number}`}>{student.name}</Link></li>;
        })}
      </ul>
    );
  };

  export default AllStudents;