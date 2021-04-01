import React from 'react'
import {useParams} from 'react-router-dom'
import {useState} from "react";
import App from './App'

function Home() {
    let {name} = useParams();
  
    return (
        
        
        <div>
         This is the Home Page
            
         </div>
    //     <div>
    //     This is the Home Page, you are {name}
           
    //    </div>
    );
}

export default Home