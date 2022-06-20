import React, {Component} from "react";
import "./Card.css";

class Card extends Component {
  render() {
    return (
      <div className='cardContainer'>
        {this.props.users
          .filter((item) =>
            item.name
              .toLowerCase()
              .includes(this.props.inputValue.toLowerCase())
          )
          .map((item, i) => {
            return (
              <div
                key={i}
                className='card'
                onClick={() => this.props.show(item)}>
                <img
                  className='avatar'
                  src={`https://robohash.org/${item.id}?set=set2&size=200x200`}
                />
                <h3>{item.name}</h3>
                <h4>{item.email}</h4>
              </div>
            );
          })}
      </div>
    );
  }
}

export default Card;
