import React from 'react'
//import {useParams} from 'react-router-dom'
import {useState} from "react";
//import App from './App'
import './App.css';
import Axios from 'axios'
//import Register from './Register'
//import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
//import {useState} from "react";
function Home() {
    //let {name} = useParams();
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [country, setCountry] = useState("");
    const [position, setPosition] = useState("");
    const [wage, setWage] = useState(0);
    
    const [employeeList, setEmployeeList] = useState([])


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
<div className="Home">
    this is the Home page
    <div className="information">
        <label>Username:</label>
        
    </div>


{/* <div className="information">
<label>Name:</label>
<input type = "text" onChange={(event) => {
  setName(event.target.value);
}}
/>

<label>Age:</label>
<input type = "number" onChange={(event) => {
  setAge(event.target.value);
}}
/>
  
<label>Country:</label>
<input type = "text"onChange={(event) => {
  setCountry(event.target.value);
}}
/>

<label>Position:</label>
<input type = "text" onChange={(event) => {
  setPosition(event.target.value);
}}
/>

<label>Wage (year):</label>
<input type = "number" onChange={(event) => {
  setWage(event.target.value);
}}
/>
<button onClick= {addEmployee}>Add Employee</button>
</div>
<div className = "employees">
<button onClick={getEmployees}>Show Employees</button>

{employeeList.map((val, key) => {
  return <div className="employee"> 
  <h3>Name: {val.name}</h3> 
  <h3>Age: {val.age}</h3> 
  <h3>Country: {val.country}</h3> 
  <h3>Position: {val.position}</h3> 
  <h3>Wage: {val.wage}</h3> 
  </div>
})}
</div>
*/}
</div> 
    );
}

export default Home
