import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <div className="navBar">
      <NavLink className="navBarLink" exact to="/">
        <img
          src="https://user-images.githubusercontent.com/35717793/122841755-c9674f00-d2b0-11eb-9875-cd58bf97a00b.png"
          alt="home"
          id="homeLogo"
        />
      </NavLink>
      {isLoaded && sessionLinks}
      <NavLink className="navBarLink" exact to="/groups">
        <p>Groups</p>
      </NavLink>
    </div>
  );
}

export default Navigation;
