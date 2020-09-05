import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="define">
      <h2>Find the work that suits you</h2>
      <h2>Or get your tasks done</h2>
      <p>
        <br />
        Carry out the jobs posted and help others or get your own stuff done.
        Make and save money on the way.
        <br />
        <br />
      </p>
      <h3>We only serve Win-wins</h3>
      <h3 style={{ marginTop: "10px" }}>Have A job? Get it done here:</h3>
      <Link to="/postgig">Post A Gig</Link>
      <h3>Want to work? Look here:</h3>
      <Link to="/gigs">View Gigs</Link>


      <Link to="/signup" id="left_hover">
        Sign Up
      </Link>
      <Link to="/login" id="right_hover">
        Log In
       </Link>


      {localStorage.getItem('token') === '' ? '' : <Link to='/logout'>Logout</Link>}

    </section>
  );
}

export default Home;
