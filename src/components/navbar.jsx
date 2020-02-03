import React from "react";

// Stateless Functional Component
// It does not have a `this` keyword so we need to pass the `props` as an argument
// React will pass the `props` on the runtime

const NavBar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
