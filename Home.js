import React, { Component } from 'react'
import './App.css';
import { render } from "react-dom";
import LoginVolunteer from './LoginVolunteer'
import LoginNonProfit from './LoginNonProfit'

class Home extends Component {
    
  state = {
      Volvisible : false,
      NonProfvisible : false
  };

  render () {

      return (

      
      <div className="Home">

          This is the Home Page:
          <div>
              {this.state.NonProfvisible ? <LoginNonProfit /> : null}
              {this.state.Volvisible ? <LoginVolunteer /> : null}
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


export default Home
