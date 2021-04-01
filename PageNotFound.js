import React from 'react'
import {useLocation} from 'react-router-dom'
function PageNotFound() {
   
   let location = useLocation();
    return (
        <div>
    Sorry, the page {location.pathname} does not exist!
            
        </div>
    );
}

export default PageNotFound