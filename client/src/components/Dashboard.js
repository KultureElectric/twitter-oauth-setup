import React, { Component } from "react";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    return <div className="Dashboard">This is your dashboard</div>; // TODO: wire up to show twitterid
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Dashboard);
