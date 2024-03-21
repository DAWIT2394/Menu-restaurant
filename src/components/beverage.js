import React from 'react'
import { Link } from "react-router-dom";

const Beverage=()=>{
    return(
        <div>
            <button className="button-33">
        <Link to="/">Go back to Home</Link>
        </button>
            <h1>Beverage</h1>
            
        </div>
    )
}

export default Beverage