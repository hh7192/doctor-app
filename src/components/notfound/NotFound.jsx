import React, {Component} from "react";
import "./NotFound.css";

class NotFound extends Component {
  render() {
    return (
      <div className='notFoundContainer'>
        <h2>Oops! Profile not found.</h2>
        <h1>404</h1>
        <p>We can't find the Doctor you are looking for.</p>
        <a href='/'>Go back home</a>
      </div>
    );
  }
}

export default NotFound;
