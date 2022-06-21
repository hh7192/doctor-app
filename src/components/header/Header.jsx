import React, {Component} from "react";
import "./Header.css";

class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className='headerContainer'>
        <h1 className='header'>اپلیکیشن جستجوی پزشکان</h1>
        <input
          type='text'
          className='inputField'
          placeholder='جستجو ...'
          onChange={(e) => this.props.update({inputValue: e.target.value})}
        />
      </div>
    );
  }
}

export default Header;
