import React from "react";
import Food from "./food";
import Beverage from "./beverage";
import Alcohol from "./alcohol";
import '../css/home.css'
import Footer from "./footer";

 const All=()=>{
    return(
        <div>
            
<Food/>
<Alcohol/>
<Beverage/>
<div>
    <Footer/>
</div>
        </div>
        
    )
 }
 export default All; 