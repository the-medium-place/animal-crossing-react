import React, { Component } from 'react';
import M from 'materialize-css';
import { Button, Icon, SideNav, SideNavItem } from 'react-materialize';

import './style.css';

// export default function Index(props) {
export default class Nav extends Component {
  // M.AutoInit();

  componentDidMount() {
    var elem = document.querySelector(".sidenav");
    var instance = M.Sidenav.init(elem, {
      edge: "left",
      inDuration: 250
    });
  }



  render() {
    // console.log(this.props)

    return (
      <div>
        <ul id="slide-out" className="sidenav">
          <li />
          {(this.props.loggedInUser.isLoggedIn) ?
            <li>
              <a>Welcome back, {this.props.loggedInUser.username}!</a>
            </li> :
            <li>
              <a>Welcome! Login or Signup Below!</a>
            </li>
          }
          <li>
            <div className="divider" />
          </li>
          <li>
            <a href="/search">Search the ACNH Database!</a>
          </li>
          <li>
            <a href="/newuser">
              {/* <i className="material-icons">cloud</i> */}
              Sign Up!
              </a>
          </li>
          {(!this.props.loggedInUser.isLoggedIn) ?
            <li>
              <a href="/login">Login</a>
            </li> :
            <li>
              <a className="waves-effect" href="/login" onClick={this.props.logoutHandle}>
                Logout
            </a>
            </li>
          }
          
          <li>
            <a className="waves-effect" href={"/users/" + this.props.loggedInUser.id}>
              My Dashboard
              </a>
          </li>

        </ul>
        <a href="#" data-target="slide-out" className="sidenav-trigger">
          <Button
            className="green accent-5 nav-button"
            floating
            icon={<Icon>menu</Icon>}
            large
            node="button"
            waves="light"
          />
        </a>
      </div>
    )
  }
}
