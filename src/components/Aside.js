import React from "react";

import "../App.css"

// logo
const logo = (
      <h3 className="logo">
        <span className="highlight">dev</span>
        challenge.io</h3>
  );

  // nav-menu
  const menu = (
    <ul className="nav-menu">
        <li className="nav-link">Colors</li>
        <li className="nav-link">Typography</li>
        <li className="nav-link">Spaces</li>
        <li className="nav-link">Buttons</li>
        <li className="nav-link">Inputs</li>
        <li className="nav-link">Grid</li>
    </ul>
  )


const Aside = () =>{

    return(
        <div className="aside">
            {logo}
            <nav>{menu}</nav>
        </div>
    )
}

export default Aside;