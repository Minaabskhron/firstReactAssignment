import React, { Component } from 'react';
import $ from 'jquery'

import './NavBar.css'
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    return (
        <>
        <nav className="navbar navbar-expand-lg myNavBar py-4">
        <div className="container">
            <Link className="navbar-brand myNavBarLinks" to="/">START FRAMEWORK</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                <li className="nav-item pe-2">
                <Link className="nav-link myNavBarLinks" to="about">ABOUT</Link>
                </li>


                <li className="nav-item pe-2">
                <Link className="nav-link myNavBarLinks" to="portfolio">PORTFOLIO</Link>
                </li>

                <li className="nav-item pe-2">
                <Link className="nav-link myNavBarLinks" to="contact">CONTACT</Link>
                </li>
                </ul>
            </div>
        </div>
        </nav>
        </>
    );
  }

  componentDidMount(){
    const navLinks = $(".myNavBarLinks")
    navLinks.click(
      function(e)
      {
        navLinks.removeClass("navbarColor")
        $(e.target).addClass("navbarColor").addClass("rounded-3")
        $(".navbar-brand").removeClass("navbarColor")
      }
    )
  }
}
