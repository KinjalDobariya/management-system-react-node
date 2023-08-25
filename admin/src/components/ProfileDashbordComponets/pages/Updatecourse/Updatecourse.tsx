import { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Button, Col, Row, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";


const Updatecourse = () => {
    const { id } = useParams();
    const [coursename, setCoursename] = useState("");
    const [total_fees, setTotalfees] = useState("");
    const [error, setError] = useState("");
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:5000/course/singlecourse/${id}`)
            .then(function (response) {
                console.log(response.data.data);
                setCoursename(response.data.data.coursename);
                setTotalfees(response.data.data.total_fees);

            })
            .catch(function (error) {
                console.log(error);
            });
    }, [id])

    const handleUpdate = () => {

        axios.put(`http://localhost:5000/course/updatecourse/${id}`, {
            coursename: coursename,
            total_fees: total_fees,

        })
            .then(function (response) {
                console.log(response.data.data);
                if (response.data.status === "update") {
                    toggleModal();
                }
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    const toggleModal = () => {

        setShowModal(!showModal);

    };
    const handleModalOk = () => {
        toggleModal();
        navigate("/veiwcourse");
    };
    return (
        <div>
            <div className="Addcourse_wrapper">
                <div>
                    <div>
                        <Row>
                            <Col lg="12" className="Addcourse-card">
                                <div className="Addcourse_inner_info">
                                    <div className="Addcourse_top_title">
                                        <div className="Addcourse_main_title">
                                            <h4>UPDATE-CPURSE</h4>
                                        </div>
                                        <div className="Addcourse-change-course m-ay=">
                                            {error && <div className="alert alert-danger alert-dismissible d-flex align-items-center fade show"> <i className=" ri-spam-fill msgicon"></i><strong className="mx-2">Faild!</strong>{error}</div>}

                                            <Row className="Addcourse_course ">
                                                <Col lg="12">
                                                    <input type="text" name="coursename" value={coursename} onChange={(e) => setCoursename(e.target.value)} placeholder="Update Data" />
                                                </Col>
                                                <Col lg="12">
                                                    <input type="text" name="total_fees" value={total_fees} onChange={(e) => setTotalfees(e.target.value)} placeholder="Update Fees" />
                                                </Col>
                                                <Col lg="4" md="4" className="mb-4 mt-2 m-auto text-center addbutton">
                                                    <Button variant="primary" onClick={handleUpdate}>Save</Button>
                                                </Col>
                                            </Row>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div >
            <Modal isOpen={showModal} toggle={toggleModal} className="custom-centered-modal">
                <ModalHeader toggle={toggleModal}>Success!</ModalHeader>
                <ModalBody>
                    <div>
                        <i className="fa-solid fa-circle-check modal_icon"></i>
                    </div>
                    Course Update successfully!
                </ModalBody>
                <ModalFooter>
                    <Button className="addcourse_button" onClick={handleModalOk}>Ok</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default Updatecourse;
