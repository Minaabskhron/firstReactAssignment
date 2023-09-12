import React, { Component } from "react";
import homeCss from "../Home/Home.module.css";


export default class About extends Component {
  render() {
    return (
      <section className={homeCss.main + " vh-100 d-flex justify-content-center align-items-center"}>
        <div>
          <div className="text-center">
            <h1 className="text-white">ABOUT COMPONENT</h1>
            <div className={homeCss.homeInner}>
              <div className={homeCss.homeInnerI}>
                <i className="fa-solid fa-star"></i>
              </div>
            </div>
          </div>
          <div className="container text-white pt-5">
            <div className="row">
              <div className="col-md-5 offset-1">
                <div>
                  <p>
                    Freelancer is a free bootstrap theme created by Route. The
                    download includes the complete source files including HTML,
                    CSS, and JavaScript as well as optional SASS stylesheets for
                    easy customization.
                  </p>
                </div>
              </div>

              <div className="col-md-5">
                <div>
                  <p>
                    Freelancer is a free bootstrap theme created by Route. The
                    download includes the complete source files including HTML,
                    CSS, and JavaScript as well as optional SASS stylesheets for
                    easy customization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
