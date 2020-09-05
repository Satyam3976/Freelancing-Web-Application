import React from "react";
import axios from 'axios';

class ViewGig extends React.Component {
  state = {
    gig: {
      title: '',
      desc: '',
      offer: '',
      _id: '',
      deadline: '',
      negotiable: ''
    }
  }
  componentDidMount() {
    // const { gigID } = this.props.location.state;
    let hash = this.props.location.hash;
    let gigID = hash.split('#')[1];
    axios.post('//localhost:3000/gigs/getOne', { gigID })
      .then(res => {
        this.setState({ gig: res.data.gig });
      })
      .catch(err => {
        console.log(err)
      })
  }
  render() {
    const { gig } = this.state;
    return (
      <section id="view-gig">
        {

          <div key={gig._id} classame="gig-card">
            <h2>Title: {gig.title}</h2>
            <p>Description: {gig.desc}</p>
            <p>Offer: {gig.offer}</p>
            <p>Negotiable: {gig.negotiable ? 'Yes' : 'No'}</p>
            <p>DeadLine: {gig.deadline}</p>
          </div>

        }
      </section>
    );
  }
}

export default ViewGig;
