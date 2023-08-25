import './updatecontent.css'
import { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Button, Col, Row, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";


function Updatecontent() {
    const { id } = useParams();
    const [content, setContent] = useState("");
    const [duration, setDuration] = useState("");
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate()


    useEffect(() => {
        axios.get(`http://localhost:5000/course/singlecontent/${id}`)
            .then(function (response) {
                console.log(response.data.data);
                setContent(response.data.data.content);
                setDuration(response.data.data.duration);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [id])

    const handleUpdate = () => {

        axios.put(`http://localhost:5000/course/updatecontent/${id}`, {
            content: content,
            duration: duration
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
    const handleContentChange = (e) => {
        setContent(e.target.value);
    }

    const handleDurationChange = (e) => {
        setDuration(e.target.value);
    }
    const toggleModal = () => {

        setShowModal(!showModal);

    };
    const handleModalOk = () => {
        toggleModal();
        navigate("/viewcontent");
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
                                            <h4>UPDATE-CONTENT</h4>
                                        </div>
                                        <div className="Addcourse-change-course m-ay=">
                                            <Row className="Addcontent_course ">
                                                <Col lg="12" className="text-center input_first">
                                                    <input type="text" name="content" placeholder="Add content" />
                                                </Col>
                                                <Col lg="12" className="text-center input_first">
                                                    <input type="text" name="content" placeholder="Add content" value={content} onChange={handleContentChange} />
                                                </Col>
                                                <Col lg="12" className="text-center input_first">
                                                    <input type="text" name="duration" placeholder="Duration" value={duration} onChange={handleDurationChange} />
                                                </Col>
                                                <div className=" addbutton  text-center">
                                                    <Button variant="primary" onClick={handleUpdate}>Save</Button>
                                                </div>
                                            </Row>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div >
            </div >
            <Modal isOpen={showModal} toggle={toggleModal} className="custom-centered-modal">
                <ModalHeader toggle={toggleModal}>Success!</ModalHeader>
                <ModalBody>
                    <div>
                        <i className="fa-solid fa-circle-check modal_icon"></i>
                    </div>
                    Content Update successfully!
                </ModalBody>
                <ModalFooter>
                    <Button className="addcourse_button" onClick={handleModalOk}>Ok</Button>
                </ModalFooter>
            </Modal>

        </div >
    )
}

export default Updatecontent
