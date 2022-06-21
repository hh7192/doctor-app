import React, {Component} from "react";
import "./Loading.css";

class Loading extends Component {
  state = {};
  render() {
    return (
      <div className='loadingContainer'>
        <h1>LOADING !</h1>
        <p>صفحه در حال بارگزاری است. لطفا صبر کنید ...</p>
      </div>
    );
  }
}

export default Loading;
