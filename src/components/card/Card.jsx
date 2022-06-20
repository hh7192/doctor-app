import React, {Component} from "react";
import "./Card.css";

class Card extends Component {
  render() {
    return (
      <div className='cardContainer'>
        {this.props.doctors
          .filter(
            (doctor) =>
              doctor._source.fname.includes(this.props.inputValue) ||
              doctor._source.lname.includes(this.props.inputValue)
          )
          .map((doctor, i) => {
            return (
              <div
                key={i}
                className='card'
                onClick={() => this.props.show(doctor)}>
                <img
                  className='avatar'
                  src={`https://www.tebinja.com/img/uploads/doctors/thumbnails/${doctor._source.url}`}
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://icon-library.com/images/doctor-icon-png/doctor-icon-png-6.jpg";
                    e.currentTarget.style = "width : 200px; height: 200px";
                  }}
                />
                <h3>
                  {doctor._source.fname} {doctor._source.lname}
                </h3>
                <h4>کد نظام پزشکی: {doctor._source.pezeshkCode}</h4>
              </div>
            );
          })}
      </div>
    );
  }
}

export default Card;
