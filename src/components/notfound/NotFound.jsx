import React, {Component} from "react";
import "./NotFound.css";

class NotFound extends Component {
  render() {
    return (
      <div className='notFoundContainer'>
        <h2>پروفایل پزشک پیدا نشد!</h2>
        <h1>404</h1>
        <p>ما موفق به پیدا کردن صفحه پروفایل پزشک مورد نظر شما نشدیم.</p>
        <a href='/'>صفحه اصلی</a>
      </div>
    );
  }
}

export default NotFound;
