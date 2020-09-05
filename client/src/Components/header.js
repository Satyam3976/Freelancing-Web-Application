import React, { Component } from "react";
import { Link, HashRouter } from "react-router-dom";

class Header extends Component {
  render() {

    return (
      <header>
        <h1>
          <HashRouter>
            <Link to="/">QuickWork</Link>
          </HashRouter>
        </h1>
      </header>
    );
  }
}

export default Header;
