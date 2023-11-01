import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>
    {links.map((link) => (
        <a href="http://" key={link.toString()}>{link}</a>
      ))}
    
    </nav>;
}

export default NavBar;
