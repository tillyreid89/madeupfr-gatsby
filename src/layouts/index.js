import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import logoBlack from "../img/logoBlack.svg";
import logoWhite from "../img/logoWhite.svg";
import "./all.sass";

class Navbar extends React.Component {
  state = { active: false };
  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          {/* <Link to="/" className="navbar-item">
            <figure className="image">
              <img src={logoBlack} alt="Kaldi" style={{ width: "88px" }} />
            </figure>
          </Link> */}
          <button
            className={`navbar-burger button ${this.state.active
              ? "is-active"
              : ""}`}
            onClick={() => this.setState({ active: !this.state.active })}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div className={`navbar-menu  ${this.state.active ? "is-active" : ""}`}>
          <div
            className="navbar-start"
            onClick={() => this.setState({ active: !this.state.active })}
          >
            <Link className="navbar-item" to="/">
              Blog
            </Link>
            <Link className="navbar-item" to="/about">
              About
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Made Up" />

    <section className="hero is-primary is-medium">

      <div
        className="hero-body"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "local",
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

    </section>
    <Navbar />

    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
