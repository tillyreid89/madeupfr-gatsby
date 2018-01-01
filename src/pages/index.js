import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import Script from "react-load-script";
import chunk from "lodash/fp/chunk";
import map from "lodash/fp/map";
import filter from "lodash/fp/filter";
import isNil from "lodash/fp/isNil";

const mapUncapped = map.convert({ cap: false });

class BlogPostElement extends React.Component {
  render() {
    const { edge } = this.props;
    if (isNil(edge)) {
      return null;
    } else {
      return (
        <div className="tile is-child is-parent is-6" key={edge.node.id}>
          <Link
            className="tile is-child box"
            style={{
              color: "white",
              textShadow: "0px 0px 3px rgba(0, 0, 0, 0.5)",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "local",
              backgroundPosition: "center center",
              backgroundImage: `url(${edge.node.frontmatter.image})`,
              backgroundSize: "cover",
              height: "96px"
            }}
            to={edge.node.frontmatter.path}
          >
            <div className="content">
              <h1
                className="title"
                style={{
                  color: "white"
                }}
              >
                {edge.node.frontmatter.title}
              </h1>
              <h4
                className="subTitle"
                style={{
                  color: "white"
                }}
              >
                {edge.node.frontmatter.date}
              </h4>
              {/* &bull; */}
              {/* {edge.node.excerpt} */}
              {/* <br />
              <br />
              <Link className="button is-small" to={edge.node.frontmatter.path}>
                Keep Reading →
              </Link> */}
            </div>
          </Link>
        </div>
      );
    }
  }
}

export default class IndexPage extends React.Component {
  handleScriptLoad() {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
    window.netlifyIdentity.init();
  }

  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    return (
      <section className="section">
        <Script
          url="https://identity.netlify.com/v1/netlify-identity-widget.js"
          onLoad={this.handleScriptLoad.bind(this)}
        />
        <div className="tile is-ancestor is-vertical">
          {mapUncapped(([edge1, edge2], index) => {
            return (
              <div key={index} className="tile">
                <BlogPostElement edge={edge1} />
                <BlogPostElement edge={edge2} />
              </div>
            );
          }, chunk(2, filter(post => post.node.frontmatter.templateKey === "blog-post", posts)))}
        </div>
      </section>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          frontmatter {
            image
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;
