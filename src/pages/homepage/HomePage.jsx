import React, {Component} from "react";
import "./HomePage.css";
import Header from "../../components/header/Header";
import Modal from "../../components/modal/Modal";
import Card from "../../components/card/Card";
import Loading from "../../components/loading/Loading";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import ReactPaginate from "react-paginate";

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
    const params = new URLSearchParams(window.location.search);
    const number = params.get("page") ? params.get("page") : 0;
    this.fetchDoctors(number);
  };

  showModal = (doctor) => {
    this.setState({isModalVisible: true, currentDoctor: doctor});
  };

  hideModal = () => {
    this.setState({isModalVisible: false});
  };

  updateParentState = (obj) => {
    this.setState(obj);
  };

  fetchDoctors = async (page) => {
    const response = await fetch(
      `https://www.tebinja.com/api/v1/doctors/searchi?page=${page}`
    );
    const data = await response.json();
    this.setState({
      isLoad: true,
      doctors: data.doctors.hits.map((doctor) => doctor._source),
    });
  };

  handlePageClick = async (data) => {
    let currentPage = data.selected;
    this.fetchDoctors(currentPage);
    const newUrl = `?page=${currentPage}`
    window.history.pushState(null, document.title, newUrl)
  };

  render() {
    // console.log(window.location)
    if (!this.state.isLoad) return <Loading />
    return (
      <div className='mainContainer'>
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
        <ReactPaginate
          previousLabel={"<<"}
          nextLabel={">>"}
          breakLabel={"..."}
          pageCount={Math.ceil(999)}
          marginPagesDisplayed={6}
          pageRangeDisplayed={3}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      </div>
    );
  }
}

export default HomePage;