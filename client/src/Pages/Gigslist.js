import React, { Component } from "react";
import axios from 'axios';
import "../styles/gigslist.css";
import { Link } from "react-router-dom";

class Gigs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gigs: [
        {
          Firstname: "Satyam",
          Lastname: "Chaudhary",
          task: "Get veggies",
          details: "Get 1kg cauliflower",
          pay: 20,
          location: "Delhi",
          _id: 1
        }
      ]
    };
  }
  componentDidMount() {
    axios.get('//localhost:3000/gigs/allGigs')
      .then(res => {
        this.setState({ gigs: res.data.gigs });
      })
      .catch(err => {
        console.log(err)
      })
  }
  render() {
    return (
      <section id="gig-cards-list">
        {this.state.gigs.map(function (e) {
          return (
            <div key={e._id} className="gig-card">
              <div>
                <h2>{e.title}</h2>
                <p>{e.desc}</p>
                <h4>Offer: {e.offer}</h4>
              </div>
              <Link to={`viewgig#${e._id}`}>View</Link>
            </div>
          );
        })}
      </section>
    );
  }
}

export default Gigs;
