import React, { Component } from "react";

export default class NotFound extends Component {
  render() {
    return (
      <>
        <section className="vh-100 p-5">
          <h1>Not Found</h1>
          <p>
            This page doesn’t exist. If this is a mistake, let us know, and we
            will try to fix it!
          </p>
        </section>
      </>
    );
  }
}
