import React from "react";
import { Div } from "./ReusableStyles";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <Div con className="container-fluid">
        <a href="/">
          ATools<span>.</span>
        </a>
        <Div buttons className="buttons">
          <button>Start Free Trial</button>
          <button className="login">Login</button>
        </Div>
      </Div>
    </nav>
  );
}
