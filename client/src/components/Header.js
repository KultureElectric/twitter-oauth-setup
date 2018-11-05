import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Header extends Component {
  showButtons() {
    switch (this.props.auth) {
      case null:
        return;

      case false:
        return (
          <li>
            <a href="/auth/twitter">Sign in with Twitter</a>
          </li>
        );
      default:
        return [
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>,
          <li>
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">
            twitter-oauth-setup
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {this.showButtons()}
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps)(Header);
