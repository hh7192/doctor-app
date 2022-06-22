import React, {Component} from "react";
import "./Modal.css";
import {Link} from "react-router-dom";

class Modal extends Component {
  render() {
    return (
      <div>
        {this.props.isVisible && this.props.parentState.currentDoctor ? (
          <>
            <div className='backdrop' onClick={this.props.hide}></div>
            <div className='modalBox'>
              <p className='ModalPara'>
                {`${this.props.parentState.currentDoctor.clinics[0].name}
                 در
                ${this.props.parentState.currentDoctor.clinics[0].address}
                واقع شده است. جهت مشاهده پروفایل کامل دکتر
                ${this.props.parentState.currentDoctor.fname} ${this.props.parentState.currentDoctor.lname}
                بر روی دکمه زیر کلیک کنید .`}
              </p>

              <Link to={`/profile/${this.props.parentState.currentDoctor.id}`}>
                <button className='readMoreBtn'>مشاهده پروفایل</button>
              </Link>
            </div>
          </>
        ) : null}
      </div>
    );
  }
}

export default Modal;
