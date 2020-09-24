import React from 'react';
import M from 'materialize-css';
import { Button, Icon, SideNav, SideNavItem, } from 'react-materialize';

import './style.css';

export default function Index() {
    M.AutoInit();



    return (
        <div>
  <style>
    {`
            #root > div > div {
              z-index: 99999 !important;
            }
          `}
  </style>
  <SideNav
    id="SideNav-10"
    options={{
      draggable: true
    }}
    trigger={<Button
        className="green accent-5 nav-button"
        floating
        icon={<Icon>menu</Icon>}
        large
        node="button"
        waves="light"
      />}
  >
    <SideNavItem
      user={{
        background: 'https://placeimg.com/640/480/tech',
        email: 'jdandturk@gmail.com',
        image: 'http://placekitten.com/200/200',
        name: 'John Doe'
      }}
      userView
    />
    <SideNavItem
      href="/newuser"
      waves
      icon={<Icon>cloud</Icon>}
    >
      New User Registration
    </SideNavItem>
    <SideNavItem href="/home" waves>
      Back to Main Page
    </SideNavItem>
    <SideNavItem divider />
    <SideNavItem subheader>
      Subheader
    </SideNavItem>
    <SideNavItem
      href="/search"
      waves
    >
        Search Page
    </SideNavItem>
    <SideNavItem
      href="/login"
      waves
    >
        Login page
    </SideNavItem>
  </SideNav>
</div>
    )
}
