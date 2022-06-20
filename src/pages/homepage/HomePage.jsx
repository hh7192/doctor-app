import React, {Component} from "react";
import "./HomePage.css";
import Header from "../../components/header/Header";
import Modal from "../../components/modal/Modal";
import Card from "../../components/card/Card";
import Loading from "../../components/loading/Loading";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      doctors: [],
      inputValue: "",
      currentDoctor: null,
      isModalVisible: false,
      isLoad: false,
    };
  }

  componentDidMount = () => {
    fetch("https://www.tebinja.com/api/v1/doctors/searchi?page=1")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          isLoad: true,
          doctors: data.doctors.hits,
        });
        console.log(data.doctors.hits);
        console.log(this.state.doctors);
      });
  };

  showModal = (user) => {
    this.setState({isModalVisible: true, currentDoctor: user});
  };

  hideModal = () => {
    this.setState({isModalVisible: false});
  };

  updateParentState = (obj) => {
    this.setState(obj);
  };

  render() {
    if (!this.state.isLoad) {
      return (
        <div>
          <Loading />
        </div>
      );
    } else {
      return (
        <div className='container'>
          <Header
            update={this.updateParentState}
            inputValue={this.state.inputValue}
          />
          <Modal
            isVisible={this.state.isModalVisible}
            hide={this.hideModal}
            doctors={this.state.doctors}
            parentState={this.state}
          />
          <Card
            doctors={this.state.doctors}
            inputValue={this.state.inputValue}
            show={this.showModal}
          />
        </div>
      );
    }
  }
}

export default HomePage;