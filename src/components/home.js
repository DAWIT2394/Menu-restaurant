import React from "react";
import logo from '../images/lod.png';
import '../css/home.css'
import { Link } from "react-router-dom";
import Footer from "./footer";
import Slider from "./slider";
// import ItemsSlider from '../components/itemslider'
function  Home () {
    
     
     
    return (    
        <div className="container">  
        
        <div className="nav-bar"
       style={{
        backgroundColor: "#d3eac8",
        color:"#000",
        paddingTop:'2px',
        borderRadius:"10px",
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
       }

       }
       >
            <h1><bdo>ሀ</bdo>ንተር Restaurant</h1>
<img src={logo}
className="App-logo" alt="logo" 
style={{ 
    width: '10vw', // 10% of viewport width
    height: 'auto', // Maintain aspect ratio
    border: '2px solid #61ce78',
    borderRadius: '50%',
  }}
/>
        </div>
        <div className="button-cont" style={{
           borderRadius:'5px',
           height:"45px",
          paddingTop:'3px',
          marginTop:'0.5rem'
            
      }}>

        <Link to ="/all">
      <button className="button-77">All</button>
        </Link>

  <Link to="/food">
  <button className="button-77">Food</button>
  </Link>

<Link to="/alcohol">
<button className="button-77">Alcohol</button>
</Link>

<Link to="/beverage">
<button className="button-77">Beverage</button>
</Link>
<div className="scroll-container">
      <img src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1380&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
      {/* <Slider/> */}
      <img src="https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
      <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"></img>
      <img src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"></img>
      
      <img src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"></img>
      
      </div>
    </div>
         <Footer/>     
                 </div>

            );
                };
export default Home;