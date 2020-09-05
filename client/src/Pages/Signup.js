import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import Password from '../Components/Password'


class Signup extends React.Component {
  state = {
    showPass: true,
    name: '',
    email: '',
    password: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()

    let { name, email, password } = this.state;
    axios.post('//localhost:3000/auth/add', { name: name, email: email, password: password })
      .then(res => {
        if (res.data.success) {
          console.log(res.data)
          localStorage.setItem('token', res.data.accessToken)
          this.props.history.push('/');
        } else {
          console.log(res.data)
          this.props.history.push('/signup');
        }
      })
  }

  render() {
    return (
      <section className="form">
        <h2 className="title">Sign Up:</h2>
        <form id="log-in" onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <input type="text" required name="name" onChange={(e) => this.setState({ name: e.target.value })} />
          <label>Email:</label>
          <input type="email" required email="email" onChange={(e) => this.setState({ email: e.target.value })} />
          <div id="show-pass">
            <label style={{ paddingBottom: "10px" }}>Password</label>
            <input type={this.state.showPass ? "password" : "text"} required
              onChange={(e) => this.setState({ password: e.target.value })}
            />
            <div id="check-box">
              <input id="check" type="checkbox" onClick={() => this.setState({ showPass: !this.state.showPass })} />
              <label>Show Password</label>
            </div>
          </div>
          <input type="submit" className="btn" />
          <Link to="/login">Already have an account? Login</Link>
        </form>
      </section>
    );
  }
}

export default Signup;
