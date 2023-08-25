import { Button, Col, Row, Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import './addcontent.css'
import axios from 'axios';
import { useState, useEffect } from "react";

function Addcontent() {
    var initialValue = {
        content: "",
        duration: "",
        joining_date: "",
        ending_date: "",
        daily_time: "",
    }
    var [val, setval] = useState(initialValue);
    var [Arr, setArr] = useState([]);
    var [courseId, setCourseId] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [error, setError] = useState("");

    const handleCourse = () => {

        axios.post('http://localhost:5000/course/add_content',
            {
                course_id: courseId,
                content: val.content,
                duration: val.duration,
                joining_date: val.joining_date,
                ending_date: val.ending_date,
                daily_time: val.daily_time,
            })
            .then(function (response) {
                console.log(response);
                setError("")
                setval(initialValue)
                setCourseId("")
                toggleModal();
            })
            .catch(function (error) {
                console.log(error);
                setError("Failed to add course!");
                setCourseId("");
                setTimeout(() => setError(""), 5000)
            })


    }

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const CourseData = () => {
        axios.get(`http://localhost:5000/course/allcontent_course`)
            .then(function (response) {
                setArr(response.data.data);
                console.log(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    useEffect(() => {
        CourseData();
    }, []);

    const handleChange = (e) => {
        setval({ ...val, [e.target.name]: e.target.value })
    }

    const handleCourseSelection = (selectedCourseName) => {
        const selectedCourse = Arr.find(item => item.coursename === selectedCourseName);
        if (selectedCourse) {
            setCourseId(selectedCourse._id);
        } else {
            setCourseId("");
        }
    }
    return (
        <div>
            <div className="Addcourse_wrapper">
                <Row>
                    <Col lg="12" className="Addcourse-card">
                        <div className="Addcourse_inner_info">
                            <div className="Addcourse_top_title">
                                <div className="Addcourse_main_title">
                                    <h4>ADD CONTENT</h4>
                                </div>
                                <form>
                                    <div className="Addcourse-change-course ">
                                        <Row className="Addcontent_course ">
                                            <Col lg={6} md={12} sm={12} xs={12} className="text-center input_first">
                                                <select onChange={(e) => {
                                                    handleCourseSelection(e.target.value);
                                                }}>
                                                    <option selected className="color_select">Course</option>
                                                    {Arr.map((item, index) => (
                                                        <option key={index} value={item.coursename} className="option_padd">{item.coursename}</option>
                                                    ))}
                                                </select>
                                            </Col>
                                            <Col lg={6} md={12} sm={12} xs={12} className="text-center input_first">
                                                <input type="text" name="content" placeholder="Add content" value={val.content} onChange={handleChange} />
                                            </Col>
                                            <Col lg={6} md={12} sm={12} xs={12} className="text-center input_first">
                                                <input type="text" name="duration" placeholder="Duration" value={val.duration} onChange={handleChange} />
                                            </Col>
                                            <Col lg={6} md={12} sm={12} xs={12} className="text-center input_first">
                                                <input type="text" name="daily_time" placeholder="Daily-Time" value={val.daily_time} onChange={handleChange} />
                                            </Col>
                                            <Col lg={6} md={12} sm={12} xs={12} className="text-center input_first">
                                                <input type="date" name="joining_date" placeholder="Joining Date" value={val.joining_date} onChange={handleChange} />
                                            </Col>
                                            <Col lg={6} md={12} sm={12} xs={12} className="text-center input_first">
                                                <input type="date" name="ending_date" placeholder="Endning Date" value={val.ending_date} onChange={handleChange} />
                                            </Col>
                                            
                                            <div className=" addbutton  text-center">
                                                <Button variant="primary" onClick={handleCourse}>Add</Button>
                                            </div>
                                        </Row>
                                        {error && <div className="alert alert-danger alert-dismissible d-flex align-items-center fade show"> <i className=" ri-spam-fill msgicon"></i><strong className="mx-2">Faild!</strong>{error}</div>}
                                        <Modal isOpen={showModal} toggle={toggleModal} className="custom-centered-modal">
                                            <ModalHeader toggle={toggleModal}>Success!</ModalHeader>
                                            <ModalBody>
                                                <div>
                                                    <i className="fa-solid fa-circle-check modal_icon"></i>
                                                </div>
                                                Content added successfully!
                                            </ModalBody>
                                            <ModalFooter>
                                                <Button className="addcourse_button" onClick={toggleModal}>Ok</Button>
                                            </ModalFooter>
                                        </Modal>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div >
        </div>
    )
}

export default Addcontent
