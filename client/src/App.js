import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Header from "./Components/header";
import Logout from "./Components/Logout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Gigs from "./Pages/Gigslist";
import PostGig from "./Pages/PostGigs";
import ViewGig from "./Pages/ViewGig";

function App() {
  return (
    <div id="page-container">
      <Header />
      <HashRouter basename="/">
        <Route path="/" component={Home} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/logout" component={Logout} exact />
        <Route path="/signup" component={Signup} exact />
        <Route path="/gigs" component={Gigs} exact />
        <Route path="/postgig" component={PostGig} exact />
        <Route path="/viewgig" component={ViewGig} exact />
      </HashRouter>
      <img
        src="https://t3.ftcdn.net/jpg/02/31/04/60/240_F_231046089_SjH8WEU8VNfodwNPBTAk7o5oDQriuYVC.jpg"
        alt="bkg"
        id="bkg"
      />
    </div>
  );
}

export default App;
