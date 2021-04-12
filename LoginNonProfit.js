import React, { Component } from "react";
import {useState} from "react";
import Axios from 'axios'


function LoginNonProfit() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const [nonProfitLogStatus, setNonProfitLogStatus] = useState("");
    

    const logNonProfit = () => {
        Axios.post("http://localhost:3001/organizationLogin", {
          username: username, 
          password: password
        }).then((response)=> {
          if (response.data.message) {
              setNonProfitLogStatus(response.data.message)
          }
          else {
              setNonProfitLogStatus(response.data[0].username)
          }
          
            console.log(response);
        });
    };


    return (
        <div>
            <div className="information">
            This is the nonProfit Page
            <label>Username:</label>
            <input type="text" onChange={
                (e) => {setUsername(e.target.value)}} />
            <label>Password:</label>
            <input type = "text" onChange={
                (e) => {setPassword(e.target.value)}}/>
            <button onClick={logNonProfit}>Login</button>

            <h1>{nonProfitLogStatus}</h1>
        </div>

        </div>
    );
}

export default LoginNonProfit