import React from "react";

import "../App.css"



const Button = ({color,text,starticon,endicon}) =>{
    return <button className={`${color}`}>
        {starticon && <span className="starticon"><i className="fa-solid fa-cart-shopping"></i></span> }
    {text}
        {endicon && <span className="endicon"><i className="fa-solid fa-cart-shopping"></i></span> }
        </button>
}

export default Button;