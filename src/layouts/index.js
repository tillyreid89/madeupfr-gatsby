import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import logoBlack from "../img/logoBlack.svg";
import logoWhite from "../img/logoWhite.svg";
import "./all.sass";

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      {/* <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logoBlack} alt="Kaldi" style={{ width: "88px" }} />
          </figure>
        </Link>
      </div> */}
      <div className="navbar-start">
        <Link className="navbar-item" to="/">
          Blog
        </Link>
        <Link className="navbar-item" to="/about">
          About
        </Link>
        <Link className="navbar-item" to="/products">
          Products
        </Link>
      </div>
    </div>
  </nav>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Gatsby + Netlify CMS" />

    <section className="hero is-primary is-medium">
      {/* <div className="hero-head">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item">
                <img
                  src="https://bulma.io/images/bulma-type-white.png"
                  alt="Logo"
                />
              </a>
              <span className="navbar-burger burger" data-target="navbarMenuHeroA">
                <span />
                <span />
                <span />
              </span>
            </div>
            <div id="navbarMenuHeroA" className="navbar-menu">
              <div className="navbar-end">
                <a className="navbar-item is-active">Home</a>
                <a className="navbar-item">Examples</a>
                <a className="navbar-item">Documentation</a>
                <span className="navbar-item">
                  <a className="button is-primary is-inverted">
                    <span className="icon">
                      <i className="fa fa-github" />
                    </span>
                    <span>Download</span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div> */}

      <div
        className="hero-body"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundPosition: "center bottom",
          backgroundImage: "url(/img/background.jpg)",
          backgroundSize: "cover"
        }}
      >
        <div className="container has-text-centered">
          <Link to="/">
            <img src={logoWhite} alt="Kaldi" style={{ width: "30%" }} />
            {/* <h1 className="title">Title</h1> */}
            {/* <h2 className="subtitle">Subtitle</h2> */}
          </Link>
        </div>
      </div>
      {/*
      <div className="hero-foot">
        <nav className="tabs">
          <div className="container">
            <ul>
              <li className="is-active">
                <a>Overview</a>
              </li>
              <li>
                <a>Modifiers</a>
              </li>
              <li>
                <a>Grid</a>
              </li>
              <li>
                <a>Elements</a>
              </li>
              <li>
                <a>Components</a>
              </li>
              <li>
                <a>Layout</a>
              </li>
            </ul>
          </div>
        </nav>
      </div> */}
    </section>

    <Navbar />
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
