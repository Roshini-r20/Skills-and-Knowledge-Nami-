//import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
//import { Button } from 'react-bootstrap';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
function App() {
  return (
    <div className="App">
      <h1 style={{color:"Green"}}>Welcome to React</h1>
      {/* <button className='btn btn-success'>Submit</button> */}
      {/* <Button variant="warning"> Click here </Button> */}
      {/* <Button variant="success">Submit</Button> */}
      <Typography variant="h4" gutterBottom>
        Welcome to React
      </Typography>
      <Button variant="contained" color="primary">
        Submit
      </Button>
    </div>
  );
}

export default App;

// bootstrap
// bootstrap/dist/css/bootstrap.min.css
// <button className="btn btn-success">Submit</button>

// Inline styling
// define in style -> className={}

// react-bootstrap
// <Button variant="success">Submit</Button>

// material- UI
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";

// <Typography variant="h4" gutterBottom>
//         Welcome to React
//       </Typography>
//       <Button variant="contained" color="primary">
//         Submit
//       </Button>