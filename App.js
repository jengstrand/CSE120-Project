
import './App.css';
import {useState} from "react";
import Axios from 'axios'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import About from './About'
import Home from './Home'
import PageNotFound from './PageNotFound'
import Register from './Register'
function App() {

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);
  
  const [employeeList, setEmployeeList] = useState([])

  // const displayInfo = () => {
  //   console.log(name + age + country + position + wage);
  // }



  const addEmployee = () => {
      Axios.post("http://localhost:3001/create", {
        name: name, 
        age: age, 
        country: country,
        position: position,
        wage: wage
      }).then(()=> {
        setEmployeeList([
          ...employeeList, 
          {
          name: name, 
          age: age, 
          country: country,
          position: position,
          wage: wage,
          },

        ]);
        console.log("success");
      });
  }

  const getEmployees = () => {
    Axios.get("http://localhost:3001/employees").then((response)=> {
        //console.log(response);
        setEmployeeList(response.data)
      });
  }

  return (
    <div className="App"><>
    This is the Volunteer App
    <Router>
    <div style={{width: 100 + "vw", height: 80, backgroundColor: 'lightblue'}}>
        <Link to="/"> Home </Link>  
      <Link to="/about"> About  </Link>
      <Link to="/register"> Register  </Link>
    </div>
    
        <Switch>
          <Route exact path="/about" exact component={About}/>
          <Route exact path="/" exact component={Home}/>
          <Route path="/register" exact component={Register}/>
          <Route path="*" exact component={PageNotFound}/>
        </Switch>
      </Router>
    </>

    </div>


    
    
  );
  
}

export default App;
