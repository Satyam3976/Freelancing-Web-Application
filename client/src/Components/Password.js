import React, { Component } from "react";
import "../styles/show-pass.css";

class Password extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true
    };
  }

  showPass = () => {
    this.setState({ hidden: !this.state.hidden });
  };



  render() {
    return (
      <div id="show-pass">
        <label style={{ paddingBottom: "10px" }}>Password</label>
        <input type={this.state.hidden ? "password" : "text"} required
        />
        <div id="check-box">
          <input id="check" type="checkbox" onClick={this.showPass} />
          <label>Show Password</label>
        </div>
      </div>
    );
  }
}
export default Password;
