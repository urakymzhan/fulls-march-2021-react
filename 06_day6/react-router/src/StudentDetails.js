import {
    useHistory,
    useParams,
  } from "react-router-dom";
import { studentsAPI} from './students-data';


const StudentDetails = (props) => {
    console.log(props);
    console.log(props.location.search) // query params
    // gets single student
    const student = studentsAPI.getStudent(props.match.params.id);
  
    // return (
    //   <div>
    //     <button onClick={() => props.history.goBack()}>Go Back</button>
    //      <button onClick={() => props.history.push('/')}>Go to home page</button>
    //     <h1>Student ID: {props.match.params.id}</h1>
    //     <h1>Student Name: {student[0].name}</h1>
    //   </div>
    // )
  
    // HOOK VERSION -----------
    const history = useHistory();
    const {id } = useParams();
  
    return (
      <div>
        <button onClick={() => history.goBack()}>Go Back</button>
         <button onClick={() => history.push('/')}>Go to home page</button>
        <h1>Student ID: {id}</h1>
        <h1>Student Name: {student[0].name}</h1>
      </div>
    )
  }

  export default StudentDetails;