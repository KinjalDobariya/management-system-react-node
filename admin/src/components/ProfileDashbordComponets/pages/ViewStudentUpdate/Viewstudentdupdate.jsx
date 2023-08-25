import "./viewstudentdetail.css";
import { Col, Container, Row, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import LogoName from "../../../../assets/images/eduction2.jpg"
import Logo from "../../../../assets/images/Logo.png"



function Viewstudentupdate() {

    const { id } = useParams();
    var initialValue = {
        // -- personal data --
        surname: "",
        studentname: "",
        fathername: "",
        stu_contact_no: "",
        stu_whatsapp_no: "",
        parent_contact_no: "",
        parent_whatsapp_no: "",
        address: "",
        dob: "",
        image: "",
        qualification: "",
        reference: "",
        referencename: "",
        // -- personal data end --

        // -- course data --
        course: "",
        course_content: "",
        course_duration: "",
        total_fees: "",
        joining_date: "",
        ending_date: "",
        daily_time: "",
        job_responsbility: "",
        college_course: "",
        batch_time: "",
        runnng_topic: "",
        faculty: "",

        // -- default data --
        pc_laptop: "",
        pc_no: "",
        laptop_compulsory: "",
        gst: "",
        // -- default data  end--

        // -- notes data --
        extra_note: "",
        reception_note: "",
        // -- notes data  end--

        // -- installments data --
        installment_details: [{
            amount: "",
            installment_date: "",
            status: "",

        }],
    }
    var [val, setVal] = useState(initialValue);

    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate()


    useEffect(() => {
        axios.get(`http://localhost:5000/addmission/student-detail/${id}`)
            .then(function (response) {
                console.log(response.data.data);
                setVal(response.data.data);

            })
            .catch(function (error) {
                console.log(error);
            });
    }, [id])

    const handleUpdate = () => {
        const formData = new FormData();

        // Personal Data
        formData.append('surname', val.surname);
        formData.append('studentname', val.studentname);
        formData.append('fathername', val.fathername);
        formData.append('stu_contact_no', val.stu_contact_no);
        formData.append('stu_whatsapp_no', val.stu_whatsapp_no);
        formData.append('parent_contact_no', val.parent_contact_no);
        formData.append('parent_whatsapp_no', val.parent_whatsapp_no);
        formData.append('address', val.address);
        formData.append('dob', val.dob);
        formData.append('image', val.image);
        formData.append('qualification', val.qualification);
        formData.append('reference', val.reference);
        formData.append('referencename', val.referencename);
        // Course Data
        formData.append('course', val.course);
        formData.append('course_content', val.course_content);
        formData.append('course_duration', val.course_duration);
        formData.append('total_fees', val.total_fees);
        formData.append('joining_date', val.joining_date);
        formData.append('ending_date', val.ending_date);
        formData.append('daily_time', val.daily_time);
        formData.append('job_responsbility', val.job_responsbility);
        formData.append('college_course', val.college_course);
        formData.append('batch_time', val.batch_time);
        formData.append('runnng_topic', val.runnng_topic);
        formData.append('faculty', val.faculty);
        formData.append('pc_laptop', val.pc_laptop);
        formData.append('pc_no', val.pc_no);
        formData.append('laptop_compulsory', val.laptop_compulsory);
        formData.append('gst', val.gst);
        formData.append('complete_topic', val.complete_topic);
        formData.append('student_status', val.student_status);
        // Notes Data
        formData.append('extra_note', val.extra_note);
        formData.append('reception_note', val.reception_note);
        // Installments Data
        val.installment_details.forEach((installment, index) => {
            formData.append(`installment_details[${index}][amount]`, installment.amount);
            formData.append(`installment_details[${index}][installment_date]`, installment.installment_date);
            formData.append(`installment_details[${index}][status]`, installment.status);

        });


        axios.put(`http://localhost:5000/addmission/student-update/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
            .then(function (response) {
                console.log(response.data.data);
                toggleModal();
            })
            .catch(function (error) {
                console.log(error);
            })


    }

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        if (type === 'file') {
            setVal((prevVal) => ({
                ...prevVal,
                [name]: e.target.files[0],
            }));
        } else {
            setVal(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    }


    const handleInstallmentChange = (e, index) => {
        const { name, value } = e.target;
        if (name === "amount" || name === "installment_date") {
            setVal((prevVal) => {
                const newInstallments = prevVal.installment_details.map((item, i) =>
                    i === index ? { ...item, [name]: value } : item
                );

                return {
                    ...prevVal,
                    installment_details: newInstallments,
                };
            });
        }
    };

    const addInstallment = () => {
        setVal((prevVal) => ({
            ...prevVal,
            installment_details: [
                ...prevVal.installment_details,
                {
                    amount: "",
                    installment_date: "",
                    status: "Unpaid",

                },
            ],
        }));
    };

    const removeInstallment = (index) => {
        setVal((prevVal) => {
            const installments = [...prevVal.installment_details];
            installments.splice(index, 1);
            return { ...prevVal, installment_details: installments };
        });
    };


    const toggleModal = () => {
        setShowModal(!showModal);
    };
    const handleStatus = (e, index) => {
        const { name, value } = e.target;
        if (name === "status") {
            setVal((prevVal) => {
                const newInstallments = prevVal.installment_details.map((item, i) =>
                    i === index ? { ...item, [name]: value } : item
                );

                return {
                    ...prevVal,
                    installment_details: newInstallments,
                };
            });
        }
    };

    const handleModalOk = () => {
        toggleModal();
        navigate("/admissiondata");
    };

    return (
        <div>
            <div className="div_right">
                <form encType="multipart/form-data">
                    <div className="student_under_div">
                        <Row>
                            <Col lg="2" md="4" sm="4" xs="6" className=" text-center m-auto ">
                                <div className='student_details_img student_header_sec'>
                                    <img src={LogoName} alt="" className='img-fluid' />
                                </div>
                            </Col>
                            <Col lg="8" md="12" sm="12" className="my-2  text-center m-auto d-lg-block d-none">
                                <div className='student_header_sec'>
                                    <div>
                                        <img src={Logo} alt="" className='img-fluid' />

                                    </div>
                                    <div className='student_detail_content'>
                                        EDUCATIONAL & IT TRAINING ACADEMY

                                    </div>
                                </div>
                            </Col>
                            <Col lg="2" md="6" sm="6" className="my-2  text-center m-auto">
                                <div className='student_header_sec'>
                                    <img src={'http://localhost:5000/images/' + val.image} style={{ height: 150, width: 150, border: '1px solid black', borderRadius: "2px" }} />
                                    <input type="file" name="image" id="" onChange={handleChange} placeholder='Enter Refrence Name' />
                                </div>
                            </Col>
                        </Row>

                        <Row className="student_details">
                            <Col lg="12" md="12" sm="12" className="my-2">
                                <div className='student_course'>
                                    <h4> Personal Information </h4>
                                </div>
                            </Col>
                            <Col lg="4" md="4" sm="6" className="my-2  ">
                                <label htmlFor="" className="lable">Surname</label>
                                <input type="text" name="surname" id="" value={val?.surname || ''} onChange={handleChange} placeholder="Enter Surname" />
                            </Col>
                            <Col lg="4" md="4" sm="6" className="my-2 ">
                                <label htmlFor="" className="lable">Student-Name</label>
                                <input type="text" name="studentname" id="" value={val?.studentname || ''} onChange={handleChange} placeholder='Enter Student Name' />
                            </Col>
                            <Col lg="4" md="4" sm="6" className="my-2 ">
                                <label htmlFor="" className="lable">Father-Name</label>
                                <input type="text" name="ending_date" id="" value={val?.fathername || ''} onChange={handleChange} placeholder='Enter Father Name' />
                            </Col>
                            <Col lg="4" md="4" sm="6" className="my-2 ">
                                <label htmlFor="" className="lable">Date-Of-Birth</label>
                                <input type="date" name="dob" id="" value={val?.dob} />
                            </Col>
                            <Col lg="4" md="4" sm="6" className="my-2 ">
                                <label htmlFor="" className="lable">Student-Contact-Number</label>
                                <input type="text" name="stu_contact_no" id="" value={val?.stu_contact_no || ''} onChange={handleChange} placeholder="Contact Number" />
                            </Col>
                            <Col lg="4" md="4" sm="6" className="my-2 ">
                                <label htmlFor="" className="lable">Student-Whatsapp-Number</label>
                                <input type="text" name="stu_whatsapp_no" id="" value={val?.stu_whatsapp_no || ''} onChange={handleChange} placeholder='Whatsapp Number' />
                            </Col>
                            <Col lg="4" md="4" sm="6" className="my-2 ">
                                <label htmlFor="" className="lable">Parent-Contact-Number</label>
                                <input type="text" name="parent_contact_no" id="" value={val?.parent_contact_no || ''} onChange={handleChange} placeholder='Contact Number' />
                            </Col>
                            <Col lg="4" md="4" sm="6" className="my-2 ">
                                <label htmlFor="" className="lable">Parent-Whatsapp-Number</label>
                                <input type="text" name="parent_whatsapp_no" id="" value={val?.parent_whatsapp_no || ''} onChange={handleChange} placeholder='Whatsapp Number' />
                            </Col>
                            <Col lg="4" md="4" sm="6" className="my-2 ">
                                <label htmlFor="" className="lable">Qulification</label>
                                <input type="text" name="qualification" id="" value={val?.qualification || ''} onChange={handleChange} placeholder='Enter Qulification' />
                            </Col>
                            <Col lg="4" md="4" sm="6" className="my-2 ">
                                <label htmlFor="" className="lable">Refrence</label>
                                <input type="text" name="reference" id="" value={val?.reference || ''} onChange={handleChange} placeholder='Enter Refrence' />
                            </Col>
                            <Col lg="4" md="4" sm="6" className="my-2 ">
                                <label htmlFor="" className="lable">Refrence-Name</label>
                                <input type="text" name="referencename" id="" value={val?.referencename || ''} onChange={handleChange} placeholder='Enter Refrence Name' />
                            </Col>

                            <Col lg="12" md="6" sm="4">
                                <Row className="student_address">
                                    <Col lg="8" md="6" sm="4" className="my-2">
                                        <label htmlFor="" className="lable">Address</label>
                                        <input type="text" name="address" id="" value={val?.address || ''} onChange={handleChange} placeholder="Address" />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row className="student_details">
                            <Col lg="12" md="12" sm="12" className="my-2">
                                <div className='student_course'>
                                    <h4> Course Information </h4>
                                </div>
                            </Col>
                            <Col lg="4" md="4" sm="6" className="my-2  ">
                                <label htmlFor="" className="lable">Course</label>
                                <input type="text" name="course" id="" value={val?.course || ''} onChange={handleChange} placeholder="Enter Course" />
                            </Col>
                            <Col lg="4" md="4" sm="6" className="my-2 ">
                                <label htmlFor="" className="lable">Course-Content</label>
                                <input type="text" name="course_content" id="" value={val?.course_content || ''} onChange={handleChange} placeholder='Enter Student Name' />
                            </Col>
                            <Col lg="4" md="4" sm="6" className="my-2 ">
                                <label htmlFor="" className="lable">Course-Duration</label>
                                <input type="text" name="course_duration" id="" value={val?.course_duration || ''} onChange={handleChange} placeholder='Enter Father Name' />
                            </Col>
                            <Col lg="4" md="4" sm="6" className="my-2 ">
                                <label htmlFor="" className="lable">Total-fees</label>
                                <input type="text" name="total_fees" id="" value={val?.total_fees || ''} onChange={handleChange} placeholder='Total-Fees' />
                            </Col>
                            <Col lg="4" md="4" sm="6" className="my-2 ">
                                <label htmlFor="" className="lable">Joining-Date</label>
                                <input type="date" name="joining_date" id="" value={val?.joining_date} />
                            </Col>
                            <Col lg="4" md="4" sm="6" className="my-2 ">
                                <label htmlFor="" className="lable">Ending-Date</label>
                                <input type="date" name="ending_date" id="" value={val?.ending_date} />
                            </Col>
                            <Col lg="4" md="4" sm="6" className="my-2 ">
                                <label htmlFor="" className="lable">Daily-Time</label>
                                <input type="text" name="daily_time" id="" value={val?.daily_time || ''} onChange={handleChange} placeholder='Hours' />
                            </Col>
                            <Col lg="4" md="4" sm="6" className="my-2 ">
                                <label htmlFor="" className="lable">Job-Responsibility</label>
                                <input type="text" name="job_responsbility" id="" value={val?.job_responsbility || ''} onChange={handleChange} placeholder='Yes/No' />
                            </Col>
                            <Col lg="4" md="4" sm="6" className="my-2 ">
                                <label htmlFor="" className="lable">College/Course</label>
                                <input type="text" name="college_course" id="" value={val?.college_course || ''} onChange={handleChange} placeholder='Enter Qulification' />
                            </Col>
                            <Col lg="4" md="4" sm="6" className="my-2 ">
                                <label htmlFor="" className="lable">Batch-Times</label>
                                <input type="text" name="batch_time" id="" value={val?.batch_time || ''} onChange={handleChange} placeholder='Enter Refrence' />
                            </Col>
                            <Col lg="4" md="4" sm="6" className="my-2 ">
                                <label htmlFor="" className="lable">Runing-Topic</label>
                                <input type="text" name="runnng_topic" id="" value={val?.runnng_topic || ''} onChange={handleChange} placeholder='Enter Refrence Name' />
                            </Col>
                            <Col lg="4" md="4" sm="6" className="my-2 ">
                                <label htmlFor="" className="lable">Faculty</label>
                                <input type="text" name="faculty" id="" value={val?.faculty || ''} onChange={handleChange} placeholder='Enter Name' />
                            </Col>
                            <Col lg="4" md="4" sm="6" className="my-2 ">
                                <label htmlFor="" className="lable">Pc/Laptop</label>
                                <input type="text" name="pc_laptop" id="" value={val?.pc_laptop || ''} onChange={handleChange} placeholder='Choose One' />
                            </Col>
                            <Col lg="4" md="4" sm="6" className="my-2 ">
                                <label htmlFor="" className="lable">Pc-Number</label>
                                <input type="text" name="pc_no" id="" value={val?.pc_no || ''} onChange={handleChange} placeholder='Enter Pc number' />
                            </Col>
                            <Col lg="4" md="4" sm="6" className="my-2 ">
                                <label htmlFor="" className="lable">Laptop-Compulsory</label>
                                <input type="text" name="laptop_compulsory" id="" value={val?.laptop_compulsory || ''} onChange={handleChange} placeholder='Yes/No' />
                            </Col>
                            <Col lg="4" md="4" sm="6" className="my-2 ">
                                <label htmlFor="" className="lable">GST</label>
                                <input type="text" name="gst" id="" value={val?.gst || ''} onChange={handleChange} placeholder='Enter GST Number' />
                            </Col>
                        </Row>
                        <Row className="student_details">
                            <Col lg="12" md="12" sm="12" className="my-2">
                                <div className='student_course'>
                                    <h4> Installment Information </h4>
                                </div>
                            </Col>
                            <Col lg="2" md="4" sm="6" className="my-2">
                                <input type="text" name="total_fees" id="" value={val.total_fees} onChange={handleChange} placeholder="Enter Total-Fees" />
                            </Col>
                            <Col lg="6" md="4" sm="6" className="my-2 p-0">
                                <div className="input-group mb-3">
                                    <div className="input-group-append">
                                        <button className="btn" type="button" onClick={addInstallment}><i className="fa-solid fa-plus"></i></button>
                                    </div>
                                </div>
                            </Col>
                            {val.installment_details.map((item, index) => {
                                return (
                                    <Row className="personal_details">
                                        <Col lg="4" md="4" sm="6" className="sm-my-2">
                                            <input type="text" name="amount" id="" value={item.amount} onChange={(e) => handleInstallmentChange(e, index)} placeholder="Installment Amount" />
                                        </Col>
                                        <Col lg="3" md="4" sm="6" className="sm-my-2">
                                            <input type="date" className="form-control" name="installment_date" value={item.installment_date} placeholder="Installment Date" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={(e) => handleInstallmentChange(e, index)} />
                                        </Col>
                                        <Col lg="2" md="4" sm="6" className="sm-my-2">
                                            <div className="input-group">
                                                <select name="status" id="" onChange={(e) => handleStatus(e, index)} value={item.status} className={item.status === 'Paid' ? 'paid-option' : 'unpaid-option'} disabled={item.status === "Paid"}>
                                                    <option value="Unpaid" className="unpaid-option">Unpaid</option>
                                                    <option value="Paid" className="paid-option">Paid</option>
                                                </select>
                                            </div>
                                        </Col>
                                        <Col lg="2" md="4" sm="6" className="sm-my-2 p-0">
                                            <div className="input-group mb-3">
                                                <div className="input-group-append">
                                                    <button className="btn" type="button" onClick={() => removeInstallment(index)}><i className="fa-solid fa-trash"></i></button>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>)
                            })}

                        </Row>
                        <Row className="student_details">
                            <Col lg="12" md="12" sm="12" className="my-2">
                                <div className='student_course'>
                                    <h4> Notes </h4>
                                </div>
                            </Col>
                            <Col lg="4" md="4" sm="6" className="my-2  ">
                                <label htmlFor="" className="lable">Extra-Notes</label>
                                <input type="text" name="extra_note" id="" value={val?.extra_note || ''} onChange={handleChange} placeholder="Enter Notes" />
                            </Col>
                            <Col lg="4" md="4" sm="6" className="my-2 ">
                                <label htmlFor="" className="lable">Reception-Notes</label>
                                <input type="text" name="reception_note" id="" value={val?.reception_note || ''} onChange={handleChange} placeholder='Enter Notes' />
                            </Col>
                        </Row>
                        <div className="admission_btn text-end">
                            <Button variant="primary" onClick={handleUpdate} className="btn">Update</Button>
                        </div>
                    </div>
                </form>
            </div>
            <Modal isOpen={showModal} toggle={toggleModal} className="custom-centered-modal">
                <ModalHeader toggle={toggleModal}>Success!</ModalHeader>
                <ModalBody>
                    <div>
                        <i className="fa-solid fa-circle-check modal_icon"></i>
                    </div>
                    Update Successfully!
                </ModalBody>
                <ModalFooter>
                    <Button className="addcourse_button" onClick={handleModalOk}>Ok</Button>
                </ModalFooter>
            </Modal>
        </div >
    )
}

export default Viewstudentupdate
