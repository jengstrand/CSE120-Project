import React, { Component } from "react";
import {useState} from "react";
import Axios from 'axios'

function RegVolunteer () {
    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const [emailReg, setEmailReg] = useState("");
    const [firstNameReg, setFirstNameReg] = useState("");
    const [lastNameReg, setLastNameReg] = useState("");
    const [phoneNumReg, setPhoneNumReg] = useState(0);
    const [ageReg, setAgeReg] = useState(0);
    const [zipcodeReg, setZipcodeReg] = useState(0);
    const [TravelReg, setTravelReg] = useState(0);

    const [VolunteerUserList, setVolunteerUserList] = useState([])

    const addVolunteer = () => {
        Axios.post("http://localhost:3001/RegVolunteer", {
          username: usernameReg, 
          password: passwordReg, 
          email: emailReg,
          firstname: firstNameReg,
          lastname: lastNameReg,
          phone: phoneNumReg,
          age: ageReg,
          zipcode: zipcodeReg,
          travel: TravelReg
        }).then((response)=> {
          console.log("success");
        });
    };


    return (

        <div className="information">
            This is the Volunteer Registration Page
            <label> Set Username:</label>
            <input type="text" onChange={
                (e) => {setUsernameReg(e.target.value)}} />
            <label>Set Password:</label>
            <input type = "text" onChange={
                (e) => {setPasswordReg(e.target.value)}}/>
            <label>Set Email:</label>
            <input type = "text" onChange={
                (e) => {setEmailReg(e.target.value)}}/>
            <label>Set First Name:</label>
            <input type = "text" onChange={
                (e) => {setFirstNameReg(e.target.value)}}/>
            <label>Set Last Name:</label>
            <input type = "text" onChange={
                (e) => {setLastNameReg(e.target.value)}}/>
            <label>Set Phone Number:</label>
            <input type = "text" onChange={
                (e) => {setPhoneNumReg(e.target.value)}}/>
            <label>Set Age:</label>
            <input type = "text" onChange={
                (e) => {setAgeReg(e.target.value)}}/>
            <label>Set Zipcode:</label>
            <input type = "text" onChange={
                (e) => {setZipcodeReg(e.target.value)}}/>
            <label>Set Travel Distance (miles):</label>
            <input type = "text" onChange={
                (e) => {setTravelReg(e.target.value)}}/>
            <button onClick={addVolunteer}>Register Volunteer</button>

            
        </div>

    );
}

export default RegVolunteer;
