import { Button, Col, Row, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./addcourse.css";
import axios from 'axios';
import { useState } from "react";

const Addcourse = () => {
  var [coursename, setCoursename] = useState("");
  var [total_fees, setTotalfees] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleCourse = () => {
    axios.post('http://localhost:5000/course/addcourse',
      {
        coursename: coursename,
        total_fees: total_fees
      })
      .then(function (response) {
        console.log(response);
        setError("")
        setCoursename("");
        setTotalfees("");
        toggleModal();
      })
      .catch(function (error) {
        console.log(error);
        setError(error.response.data.error);
        setCoursename("");
        setTotalfees("");
        setTimeout(() => setError(""), 5000)
      })


  }
  const toggleModal = () => {
    setShowModal(!showModal);
  };


  return (
    <div className="Addcourse_wrapper">

      <Row>
        <Col lg="12" className="Addcourse-card">
          <div className="Addcourse_inner_info">
            <div className="Addcourse_top_title">
              <div className="Addcourse_main_title">
                <h4>Add Course</h4>
              </div>
              <form>
                <div className="Addcourse-change-course m-ay=">
                  {error && <div className="alert alert-danger alert-dismissible d-flex align-items-center fade show"> <i className=" ri-spam-fill msgicon"></i><strong className="mx-2">Faild!</strong>{error}</div>}
                  <Row className="Addcourse_course ">
                    <Col lg="12">
                      <input type="text" name="coursename" value={coursename} onChange={(e) => setCoursename(e.target.value)} placeholder="Add course" />
                    </Col>
                    <Col lg="12">
                      <input type="text" name="total_fees" value={total_fees} onChange={(e) => setTotalfees(e.target.value)} placeholder="Total fees" />
                    </Col>
                    <div className="mb-4 mt-2 text-center addbutton">
                      <Button variant="primary" onClick={handleCourse} >Add</Button>
                    </div>
                  </Row>
                </div>
              </form>
            </div>
          </div>
        </Col>
      </Row>
      <Modal isOpen={showModal} toggle={toggleModal} className="custom-centered-modal">
        <ModalHeader toggle={toggleModal}>Success!</ModalHeader>
        <ModalBody>
          <div>
            <i className="fa-solid fa-circle-check modal_icon"></i>
          </div>
          Course added successfully!
        </ModalBody>
        <ModalFooter>
          <Button className="addcourse_button" onClick={toggleModal}>Ok</Button>
        </ModalFooter>
      </Modal>

    </div >
  );
};

export default Addcourse;
