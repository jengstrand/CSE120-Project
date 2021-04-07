import React, { Component } from 'react'
//import {useParams} from 'react-router-dom'
import {useState} from "react";
import RegNonProfit from './RegNonProfit'
import RegVolunteer from './RegVolunteer'
import { render } from "react-dom";
import './App.css';
import Axios from 'axios'

class Register extends Component {
    
    state = {
        Volvisible : false,
        NonProfvisible : false
    };
  
    render () {

        return (

        
        <div className="Register">

            this is the registration page
            <div>
                {this.state.NonProfvisible ? <RegNonProfit /> : null}
                {this.state.Volvisible ? <RegVolunteer /> : null}
                Are you a NonProfit or a Volunteer?
                
                <button onClick={() => {
                    this.setState({ Volvisible : true});
                    this.setState({ NonProfvisible : false});
                }}
                > Volunteer </button>

                <button onClick={() => {
                    this.setState({ NonProfvisible : true});
                    this.setState({ Volvisible : false});
                }}
                > NonProfit </button>
            </div>

        </div>
        );
    }
}


export default Register