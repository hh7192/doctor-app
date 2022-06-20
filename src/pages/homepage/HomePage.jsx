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
        <h1 className='header'>Robo Friends</h1>
        <input
          type='text'
          className='inputField'
          placeholder='SEARCH...'
          onChange={(e) => this.props.update({inputValue: e.target.value})}
        />
      </div>
    );
  }
}

export default Header;
