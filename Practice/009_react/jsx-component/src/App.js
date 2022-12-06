import logo from './logo.svg';
import './App.css';

function App() {
  let count=5;
  let name={
    firstname: "Roshini",
    lastname: "R"
  }
  let highlight={
    color: "blue",
    backgroundColor:"yellow"
  }

  let x=25,y=30;

  let element=null;
  let isLoggedIn=false;

  var employees = [
    { empId: 1234, name: "John", designation: "SE" },
    { empId: 4567, name: "Tom", designation: "SSE" },
    { empId: 8910, name: "Kevin", designation: "TA" },
  ];

  if(isLoggedIn){
    element= <h1>Welcome admin!!</h1>
  }
  else{
    element=<h1>Please logIn</h1>
  }
  return (
    <>
      <h3> React JS:</h3>
      
      <img src={logo} height="150"width="150"></img>
      <p>
      {" "}
      React is a JavaScript library for creating User Interfaces, open sourced
        to the world by Facebook and Instagram team in 2013.
        <br />
        React’s main goal is to make development of UI components easy and
        modular. It is intended to ease the process of building
        <br /> large applications using data that changes over time.
      </p>
      <p>
        <h3> counting numbers where count =5</h3>
          <h1>{count}</h1>
      <h2>{count * count}</h2>
      <h3> Displaying name</h3>
      <h3 style={highlight}>{name.firstname} {name.lastname}</h3>
      <br/>
      <h3>Evaluating expression</h3>
      <h3> {x} {">"}{y} {":"} {x>y?'True':'False'} </h3>
      <h2>Login </h2>
      <h3>{element}</h3>
      </p>
      <>
      <table>
        <thead>
          <tr>
            <th>EmpID</th>
            <th>Name</th>
            <th>Designation</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => {
            return (
              <tr key={employee.empId}>
                <td>{employee.empId}</td>
                <td>{employee.name}</td>
                <td>{employee.designation}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
    </>
  );
}

export default App;
