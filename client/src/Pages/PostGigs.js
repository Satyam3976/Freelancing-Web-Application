import React from "react";
import axios from "axios";
import "../styles/gigslist.css";

class PostGig extends React.Component {
  state = {
    title: '',
    desc: '',
    offer: '',
    deadline: new Date(),
    negotiable: false,
    err: ''
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value })
  }
  handleNegotiate = (e) => {
    this.setState(prevState => {
      return {
        negotiable: !prevState.negotiable
      }
    })
  }
  handleDate = e => {
    let date = new Date(e.target.value);
    this.setState({ deadline: date });
  }
  handleSubmit = (e) => {
    e.preventDefault();

    let userId = localStorage.getItem('userID');
    console.log(userId)

    const { title, desc, offer, deadline, negotiable } = this.state;
    if (!title || !desc || !offer || !deadline) {
      this.setState({ err: 'Please check your inputs' });
      return;
    }

    
    axios
      .post("/gigs/add", {
        title,
        desc,
        offer,
        deadline,
        negotiable,
        userId
      })
      .then(res => {
        this.props.history.push('/')
      })
      .catch(err => console.error(err));
  }
  render() {
    return (
      <section id="post-gig-container">
        {this.state.err}
        <form id="post-gig">
          <h2>Post A Gig:</h2>
          <label>Task Title:</label>
          <input type="text" name="title" onChange={this.handleChange} />
          <label>Description:</label>
          <textarea rows="10" cols="30" name="desc" onChange={this.handleChange}></textarea>
          <label>Offer:</label>
          <input type="number" placeholder="Enter the amount you offer" name="offer" onChange={this.handleChange} />
          <div style={{ marginBottom: "15px" }}>
            <input type="checkbox" name="negotiable" onClick={this.handleNegotiate} />
            <label style={{ marginLeft: "15px" }}>Negotiable</label>
          </div>
          <label>Deadline</label>
          <input type="date" name="deadline" onChange={this.handleDate} />
          <input className="btn" type="Submit" onClick={this.handleSubmit} />
        </form>
      </section>
    );
  }
}

export default PostGig;
