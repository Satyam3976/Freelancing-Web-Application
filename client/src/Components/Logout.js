import React from 'react'


export default class Logout extends React.Component {
  componentDidMount() {
    localStorage.setItem('token', '');
    localStorage.setItem('user', '');
    this.props.history.push('/');
  }
  render() {
    return (
      <div>

      </div>
    )
  }
}
