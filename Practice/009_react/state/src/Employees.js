import { useState } from "react"


const Employees =()=>{
    const [employees, setEmployees] = useState([
        { empId: 1234, name: "John", designation: "SE" },
        { empId: 4567, name: "Tom", designation: "SSE" },
        { empId: 8910, name: "Kevin", designation: "TA" },
      ]);
    }