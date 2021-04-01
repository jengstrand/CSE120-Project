import React from 'react'
import {useHistory} from 'react-router-dom'
function About() {

    let history = useHistory()

    return (
        <div>
            This is the About page 
            <button onClick= {() => {history.push('/')}}>
                Go to the Home Page</button>
        </div>
    );
}

export default About