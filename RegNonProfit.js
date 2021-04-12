import React, { Component } from "react";
import {useState} from "react";
import Axios from 'axios'


function RegNonProfit() {

    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const [emailReg, setEmailReg] = useState("");
    const [orgnameReg, setOrgNameReg] = useState("");
    const [phoneNumReg, setPhoneNumReg] = useState(0);
    const [addressReg, setAddressReg] = useState(0);
    
    const [nonProfitStatusReg, setNonProfitStatusReg] = useState("");

    const addOrganization = () => {
        Axios.post("http://localhost:3001/RegOrganization", {
          username: usernameReg, 
          password: passwordReg, 
          email: emailReg,
          orgname: orgnameReg,
          phone: phoneNumReg,
          address: addressReg,
        }).then((response)=> {
            if (response.data.message) {
                setNonProfitStatusReg(response.data.message)
            }
            else {
                setNonProfitStatusReg("Successfully Registered")
            }
          
            console.log(response);
        });
    };



    return (
        <div>
            This is the nonProfit Page
            <div className="information">
            <label> Set Username:</label>
            <input type="text" onChange={
                (e) => {setUsernameReg(e.target.value)}} />
            <label>Set Password:</label>
            <input type = "text" onChange={
                (e) => {setPasswordReg(e.target.value)}}/>
            <label>Set Email:</label>
            <input type = "text" onChange={
                (e) => {setEmailReg(e.target.value)}}/>
            <label>Set Organization Name:</label>
            <input type = "text" onChange={
                (e) => {setOrgNameReg(e.target.value)}}/>
            <label>Set Phone Number:</label>
            <input type = "number" onChange={
                (e) => {setPhoneNumReg(e.target.value)}}/>
            <label>Set Address:</label>
            <input type = "text" onChange={
                (e) => {setAddressReg(e.target.value)}}/>
            <button onClick={addOrganization}>Register Organization</button>

            
        </div>

        </div>
    );
}

export default RegNonProfit
