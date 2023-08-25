import { Button, Col, Container, Row, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useState, useEffect } from "react";
import axios from 'axios';
import "./admission.css";



const Admission = () => {

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
      status: "Unpaid",
    }],
    complete_topic: "",
    student_status: "Runing",

  }
  var [val, setVal] = useState(initialValue);
  var [Arr, setArr] = useState([]);
  const [activeTab, setActiveTab] = useState("home");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [totalError, setTotalerror] = useState("");
  const [validationErrors, setValidationErrors] = useState({});

  const resetForm = () => {
    setVal(initialValue);
  };

  const handleClick = () => {

    setValidationErrors({});
    const errors = {};

    // --- surname ---
    let letter = /^[A-Za-z]+$/;
    if (!val.surname) {

      errors.surname = '*This field is required'

    } else if (!letter.test(val.surname)) {

      errors.surname = '*invalid Surname'

    }

    // --- studentName ---
    if (!val.studentname) {

      errors.studentname = '*This field is required'

    } else if (!letter.test(val.studentname)) {

      errors.studentname = '*invalid Student Name'

    }

    // --- studentName ---
    if (!val.fathername) {

      errors.fathername = '*This field is required'

    } else if (!letter.test(val.fathername)) {

      errors.fathername = '*invalid Father Name'

    }

    // --- stu_contact_no ---
    let contact = /^[0-9]+$/;
    if (!val.stu_contact_no) {
      errors.stu_contact_no = '*This field is required'

    } else if (!contact.test(val.stu_contact_no)) {

      errors.stu_contact_no = '*Not a number'

    } else if (val.stu_contact_no.length > 10) {

      errors.stu_contact_no = '*Contact number is not valid'

    } else if (val.stu_contact_no.length < 10) {

      errors.stu_contact_no = '*10 number must be'
    }

    // --- stu_whatsapp_no ---
    if (!val.stu_whatsapp_no) {
      errors.stu_whatsapp_no = '*This field is required'

    } else if (!contact.test(val.stu_whatsapp_no)) {

      errors.stu_whatsapp_no = '*Not a number'

    } else if (val.stu_whatsapp_no.length > 10) {

      errors.stu_whatsapp_no = '*Whatsapp number is not valid'

    } else if (val.stu_whatsapp_no.length < 10) {

      errors.stu_whatsapp_no = '*10 number must be'
    }

    // --- parent_contact_no ---
    if (!val.parent_contact_no) {
      errors.parent_contact_no = '*This field is required'

    } else if (!contact.test(val.parent_contact_no)) {

      errors.parent_contact_no = '*Not a number'

    } else if (val.parent_contact_no.length > 10) {

      errors.parent_contact_no = '*Contact number is not valid'

    } else if (val.parent_contact_no.length < 10) {

      errors.parent_contact_no = '*10 number must be'
    }

    // --- stu_whatsapp_no ---
    if (!val.parent_whatsapp_no) {
      errors.parent_whatsapp_no = '*This field is required'

    } else if (!contact.test(val.parent_whatsapp_no)) {

      errors.parent_whatsapp_no = '*Not a number'

    } else if (val.parent_whatsapp_no.length > 10) {

      errors.parent_whatsapp_no = '*Whatsapp number is not valid'

    } else if (val.parent_whatsapp_no.length < 10) {

      errors.parent_whatsapp_no = '*10 number must be'
    }

    // --- dob ---
    if (!val.dob) {

      errors.dob = '*This field is required'

    }

    // --- qualification ---
    if (!val.qualification) {

      errors.qualification = '*This field is required'

    }

    // --- reference ---
    if (!val.reference) {

      errors.reference = '*This field is required'

    }

    // --- reference name---
    if (!val.referencename) {

      errors.referencename = '*This field is required'

    }

    // ------------ address ---------------
    if (!val.address) {

      errors.address = '*This field is required'

    } else if (val.address.length > 50) {
      errors.address = '*Only 50 words will work '
    }

    // --- course ---
    if (!val.course) {

      errors.course = '*This field is required'

    }

    // --- course_content ---
    if (!val.course_content) {

      errors.course_content = '*This field is required'

    }

    // --- course_duration ---
    if (!val.course_duration) {

      errors.course_duration = '*This field is required'

    }

    // --- course_duration ---
    if (!val.total_fees) {

      errors.total_fees = '*This field is required'

    }

    // --- joining_date ---
    if (!val.joining_date) {

      errors.joining_date = '*This field is required'

    }

    // --- ending_date ---
    if (!val.ending_date) {

      errors.ending_date = '*This field is required'

    }

    // --- daily_time ---
    if (!val.daily_time) {

      errors.daily_time = '*This field is required'

    }

    // --- Job-Responsibility ---
    if (!val.job_responsbility) {

      errors.job_responsbility = '*This field is required '

    } else if (!letter.test(val.job_responsbility)) {

      errors.job_responsbility = '*Only letter valid'

    }

    // --- College-Course ---
    if (!val.college_course) {

      errors.college_course = '*This field is required'

    } else if (!letter.test(val.college_course)) {

      errors.college_course = '*Only letter valid'

    }

    // --- batch_time ---
    if (!val.batch_time) {

      errors.batch_time = '*This field is required'

    }

    // --- batch_time ---
    if (!val.runnng_topic) {

      errors.runnng_topic = '*This field is required'

    }

    // --- faculty ---
    if (!val.faculty) {

      errors.faculty = '*This field is required'

    }

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

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

    const totalInstallmentfees = val.installment_details.reduce((total, item) => total + parseInt(item.amount), 0)
    const totalFees = parseInt(val.total_fees);


    if (totalInstallmentfees === totalFees) {
      axios.post('http://localhost:5000/addmission/addmissionData', formData,{
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
        .then(function (response) {
          console.log(response.data.data);
          setError("")
          toggleModal();
          resetForm();
        })
        .catch(function (error) {
          console.log(error);
        })
    } else {
      setTotalerror("Total fees and total installment fees do not match.");
      setTimeout(() => setTotalerror(""), 3000)
    }
  }

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    axios.get(`http://localhost:5000/course/viewcontent`)
      .then(function (response) {
        setArr(response.data.data1);
        console.log(response.data.data1);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);


  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === 'file') {
      setVal((prevVal) => ({
        ...prevVal,
        [name]: e.target.files[0],
      }));
    } else {
      setVal((prevVal) => {
        if (name === "course") {
          const selectedCourse = Arr.find((item) => item.coursename === value);
          return {
            ...prevVal,
            course: value,
            course_content: selectedCourse ? selectedCourse.content_id.content : "",
            course_duration: selectedCourse ? selectedCourse.content_id.duration : "",
            total_fees: selectedCourse ? selectedCourse.total_fees : "",
            joining_date: selectedCourse ? selectedCourse.content_id.joining_date : "",
            ending_date: selectedCourse ? selectedCourse.content_id.ending_date : "",
            daily_time: selectedCourse ? selectedCourse.content_id.daily_time : "",
          };
        } else {
          return {
            ...prevVal,
            [name]: value,
          };
        }
      });
    }
  };

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

  const handleNextTab = () => {
    setActiveTab("profile");
  }

  return (

    <div className="admission_sec">
      {error && <div className="alert alert-danger alert-dismissible d-flex align-items-center fade show"> <i className=" ri-spam-fill msgicon"></i><strong className="mx-2">Faild!</strong>{error}</div>}

      <form  encType="multipart/form-data">
        <Tabs defaultActiveKey="home" activeKey={activeTab} onSelect={(tab) => setActiveTab(tab)} id="uncontrolled-tab-example" className="mb-5 mx-4">
          <Tab eventKey="home" title="Personal Detail">
            <Container>
              <div className="admission_section">
                <div className="admission_details">
                  <h3>Personal information</h3>
                  <div className="addmission_per_details">
                    <Row className="personal_details">
                      <Col lg="4" md="4" sm="6" className="my-2">
                        <label htmlFor="" className="lable">Surname</label>
                        <input type="text" name="surname" id="" value={val.surname} onChange={handleChange} placeholder="Enter Surname" />
                        {validationErrors.surname && <span className="validation-span">{validationErrors.surname}</span>}
                      </Col>
                      <Col lg="4" md="4" sm="6" className="my-2">
                        <label htmlFor="" className="lable">Student-Name</label>
                        <input type="text" name="studentname" id="" value={val.studentname} onChange={handleChange} placeholder="Enter Student Name" />
                        {validationErrors.studentname && <span className="validation-span">{validationErrors.studentname}</span>}
                      </Col>
                      <Col lg="4" md="4" sm="6" className="my-2">
                        <label htmlFor="" className="lable">Father-Name</label>
                        <input type="text" name="fathername" id="" value={val.fathername} onChange={handleChange} placeholder="Enter Father Name" />
                        {validationErrors.fathername && <span className="validation-span">{validationErrors.fathername}</span>}
                      </Col>
                      <Col lg="4" md="4" sm="6" className="my-2">
                        <label htmlFor="" className="lable">Student-Contact-Number</label>
                        <input type="tel" name="stu_contact_no" id="" value={val.stu_contact_no} onChange={handleChange} placeholder="Contact Number" />
                        {validationErrors.stu_contact_no && <span className="validation-span">{validationErrors.stu_contact_no}</span>}
                      </Col>
                      <Col lg="4" md="4" sm="6" className="my-2">
                        <label htmlFor="" className="lable">Student-Whatsapp-Number</label>
                        <input type="tel" name="stu_whatsapp_no" id="" value={val.stu_whatsapp_no} onChange={handleChange} placeholder="Whatsapp Number" />
                        {validationErrors.stu_whatsapp_no && <span className="validation-span">{validationErrors.stu_whatsapp_no}</span>}
                      </Col>
                      <Col lg="4" md="4" sm="6" className="my-2">
                        <label htmlFor="" className="lable">Parent-Contact-Number</label>
                        <input type="tel" name="parent_contact_no" id="" value={val.parent_contact_no} onChange={handleChange} placeholder="Contact Number" />
                        {validationErrors.parent_contact_no && <span className="validation-span">{validationErrors.parent_contact_no}</span>}
                      </Col>
                      <Col lg="4" md="4" sm="6" className="my-2">
                        <label htmlFor="" className="lable">Parent-Whatsapp-Number</label>
                        <input type="tel" name="parent_whatsapp_no" id="" value={val.parent_whatsapp_no} onChange={handleChange} placeholder="Whatsapp Number" />
                        {validationErrors.parent_whatsapp_no && <span className="validation-span">{validationErrors.parent_whatsapp_no}</span>}
                      </Col>
                      <Col lg="4" md="4" sm="6" className="my-2">
                        <label htmlFor="" className="lable">Date-Of-Birth</label>
                        <input type="date" name="dob" id="" value={val.dob} onChange={handleChange} placeholder="" />
                        {validationErrors.dob && <span className="validation-span">{validationErrors.dob}</span>}
                      </Col>
                      <Col lg="4" md="4" sm="6" className="my-2">
                        <label htmlFor="" className="lable">Qulification</label>
                        <input type="text" name="qualification" id="" value={val.qualification} onChange={handleChange} placeholder="Enter Qulification" />
                        {validationErrors.qualification && <span className="validation-span">{validationErrors.qualification}</span>}
                      </Col>
                      <Col lg="4" md="4" sm="6" className="my-2">
                        <label htmlFor="" className="lable">Refrence</label>
                        <input type="text" name="reference" id="" value={val.reference} onChange={handleChange} placeholder="Refrence" />
                        {validationErrors.reference && <span className="validation-span">{validationErrors.reference}</span>}
                      </Col>
                      <Col lg="4" md="4" sm="6" className="my-2">
                        <label htmlFor="" className="lable">Refrence Name</label>
                        <input type="text" name="referencename" id="" value={val.referencename} onChange={handleChange} placeholder="Enter Refrence Name" />
                        {validationErrors.referencename && <span className="validation-span">{validationErrors.referencename}</span>}
                      </Col>
                      <Col lg="4" md="4" sm="6" className="my-2">
                        <label htmlFor="" className="lable">Image</label>
                        <input type="file" name="image" accept="image/*" onChange={handleChange} />
                      </Col>
                    </Row>
                    <Row className="personal_details personal_address">
                      <Col lg="8" md="6" sm="4" className="my-2">
                        <label htmlFor="" className="lable">Address</label>
                        <input type="text" name="address" id="" value={val.address} onChange={handleChange} placeholder="Address" />
                        {validationErrors.address && <span className="validation-span">{validationErrors.address}</span>}
                      </Col>
                    </Row>
                    {activeTab === "home" && (
                      <div className="admission_btn text-end">
                        <Button variant="primary" onClick={handleNextTab} className="btn">Next<i className="fa-sharp fa-solid fa-angles-right"></i></Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Container>
          </Tab>
          <Tab eventKey="profile" title="Course Detail">
            <Container>
              <div className="admission_section">
                <div className="admission_details">
                  <h3>Course information</h3>
                  <div className="addmission_per_details">
                    <Row className="personal_details">
                      <Col lg="4" md="4" sm="6" className="my-2">
                        <label htmlFor="" className="lable">Course</label>
                        <select value={val.course} name="course" onChange={handleChange} placeholder="">
                          <option value="" className="color_select">Select a course</option>
                          {Arr.map((item) => (
                            <option key={item.id} value={item.course}>
                              {item.coursename}
                            </option>
                          ))}
                        </select>
                        {validationErrors.course && <span className="validation-span">{validationErrors.course}</span>}

                      </Col>
                      <Col lg="4" md="4" sm="6" className="my-2">
                        <label htmlFor="" className="lable">Course-Content</label>
                        <input type="text" name="course_content" id="" value={val.course_content} onChange={handleChange} placeholder="Content"></input>
                        {validationErrors.course_content && <span className="validation-span">{validationErrors.course_content}</span>}
                      </Col>
                      <Col lg="4" md="4" sm="6" className="my-2">
                        <label htmlFor="" className="lable">Course-Duration</label>
                        <input type="text" name="course_duration" id="" value={val.course_duration} onChange={handleChange} placeholder="Duration" />
                        {validationErrors.course_duration && <span className="validation-span">{validationErrors.course_duration}</span>}
                      </Col>
                      <Col lg="4" md="4" sm="6" className="my-2">
                        <label htmlFor="" className="lable">Total-Fees</label>
                        <input type="text" name="total_fees" id="" value={val.total_fees} onChange={handleChange} placeholder="Enter Total-Fees" />
                        {validationErrors.total_fees && <span className="validation-span">{validationErrors.total_fees}</span>}
                      </Col>
                      <Col lg="4" md="4" sm="6" className="my-2">
                        <label htmlFor="" className="lable">Joining-Date</label>
                        <input type="date" name="joining_date" id="" value={val.joining_date} onChange={handleChange} />
                        {validationErrors.joining_date && <span className="validation-span">{validationErrors.joining_date}</span>}
                      </Col>
                      <Col lg="4" md="4" sm="6" className="my-2">
                        <label htmlFor="" className="lable">Ending-Date</label>
                        <input type="date" name="ending_date" id="" value={val.ending_date} onChange={handleChange} />
                        {validationErrors.ending_date && <span className="validation-span">{validationErrors.ending_date}</span>}
                      </Col>
                      <Col lg="4" md="4" sm="6" className="my-2">
                        <label htmlFor="" className="lable">Daily-Time</label>
                        <input type="text" name="daily_time" id="" value={val.daily_time} onChange={handleChange} placeholder="Hours" />
                        {validationErrors.daily_time && <span className="validation-span">{validationErrors.daily_time}</span>}
                      </Col>
                      <Col lg="4" md="4" sm="6" className="my-2">
                        <label htmlFor="" className="lable">Job-Responsibility</label>
                        <input type="text" name="job_responsbility" id="" value={val.job_responsbility} onChange={handleChange} placeholder="Yes/No" />
                        {validationErrors.job_responsbility && <span className="validation-span">{validationErrors.job_responsbility}</span>}
                      </Col>
                      <Col lg="4" md="4" sm="6" className="my-2">
                        <label htmlFor="" className="lable">College-Course</label>
                        <input type="text" name="college_course" id="" value={val.college_course} onChange={handleChange} placeholder="Yes/No" />
                        {validationErrors.college_course && <span className="validation-span">{validationErrors.college_course}</span>}
                      </Col>
                      <Col lg="4" md="4" sm="6" className="my-2">
                        <label htmlFor="" className="lable">Batch-Time</label>
                        <input type="text" name="batch_time" id="" value={val.batch_time} onChange={handleChange} placeholder="Time" />
                        {validationErrors.batch_time && <span className="validation-span">{validationErrors.batch_time}</span>}
                      </Col>
                      <Col lg="4" md="4" sm="6" className="my-2">
                        <label htmlFor="" className="lable">Runing-Topic</label>
                        <input type="text" name="runnng_topic" id="" value={val.runnng_topic} onChange={handleChange} placeholder="Enter Runing-Topic " />
                        {validationErrors.runnng_topic && <span className="validation-span">{validationErrors.runnng_topic}</span>}
                      </Col>

                      <Col lg="4" md="4" sm="6" className="my-2">
                        <label htmlFor="" className="lable">Faculty</label>
                        <input type="text" name="faculty" id="" value={val.faculty} onChange={handleChange} placeholder="Enter Name" />
                        {validationErrors.faculty && <span className="validation-span">{validationErrors.faculty}</span>}
                      </Col>
                      <Col lg="4" md="4" sm="6" className="my-2">
                        <label htmlFor="" className="lable">PC/Laptop</label>
                        <input type="text" name="pc_laptop" value={val.pc_laptop} id="" onChange={handleChange} placeholder='Divices' />
                        {/* {validationErrors.pc_laptop && <span className="validation-span">{validationErrors.pc_laptop}</span>} */}
                      </Col>
                      <Col lg="4" md="4" sm="6" className="my-2">
                        <label htmlFor="" className="lable">PC-Number</label>
                        <input type="text" name="pc_no" id="" value={val.pc_no} onChange={handleChange} placeholder="Pc Number" />
                        {/* {validationErrors.pc_no && <span className="validation-span">{validationErrors.pc_no}</span>} */}
                      </Col>
                      <Col lg="4" md="4" sm="6" className="my-2">
                        <label htmlFor="" className="lable">Laptop-Compulsory</label>
                        <input type="text" name="laptop_compulsory" value={val.laptop_compulsory} onChange={handleChange} id="" placeholder='Yes/No' />
                        {/* {validationErrors.laptop_compulsory && <span className="validation-span">{validationErrors.laptop_compulsory}</span>} */}
                      </Col>
                      <Col lg="4" md="4" sm="6" className="my-2">
                        <label htmlFor="" className="lable">GST</label>
                        <input type="text" name="gst" id="" value={val.gst} onChange={handleChange} placeholder="Yes/No" />
                        {/* {validationErrors.gst && <span className="validation-span">{validationErrors.gst}</span>} */}
                      </Col>
                    </Row>
                    <h4>Installment Details</h4>
                    {totalError && <div className="alert alert-danger alert-dismissible d-flex align-items-center fade show"> <i className=" ri-spam-fill msgicon"></i><strong className="mx-2">Faild!</strong>{totalError}</div>}

                    <Row className="personal_details">
                      <Col lg="2" md="4" sm="6" className="my-2">
                        <input type="text" name="total_fees" id="" value={val.total_fees} onChange={handleChange} placeholder="Enter Total-Fees" />
                        {validationErrors.total_fees && <span className="validation-span">{validationErrors.total_fees}</span>}
                      </Col>
                      <Col lg="2" md="4" sm="6" className="my-2">
                        <div className="admission_button">
                          <button className="btn" type="button" onClick={addInstallment}><i className="fa-solid fa-plus"></i></button>
                        </div>
                      </Col>
                    </Row>
                    {val.installment_details.map((item, index) => (
                      <Row className="personal_details">
                        <Col lg="4" md="4" sm="6" className="my-2">
                          <input type="text" name="amount" id="" value={item.amount} onChange={(e) => handleInstallmentChange(e, index)} placeholder="Installment Amount" />
                        </Col>
                        <Col lg="4" md="4" sm="6" className="my-2">
                          <div className="input-group">
                            <input type="date" className="form-control" name="installment_date" value={item.installment_date} placeholder="Installment Date" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={(e) => handleInstallmentChange(e, index)} />
                            <div className="input-group-append">
                              <button className="btn" type="button" onClick={() => removeInstallment(index)}><i className="fa-solid fa-trash"></i></button>
                            </div>
                          </div>
                        </Col>
                      </Row>))}

                    <h4>Notes</h4>
                    <Row className="personal_details">
                      <Col lg="4" md="4" sm="6" className="my-2">
                        <label htmlFor="" className="lable">Extra-note</label>
                        <input type="text" name="extra_note" id="" value={val.extra_note} onChange={handleChange} placeholder="Enter Notes" />
                      </Col>
                      <Col lg="4" md="4" sm="6" className="my-2">
                        <label htmlFor="" className="lable">Reception-note</label>
                        <input type="text" name="reception_note" id="" value={val.reception_note} onChange={handleChange} placeholder="Enter Notes" />
                      </Col>
                    </Row>
                    <div className="admission_btn text-end">
                      <Button variant="primary" onClick={handleClick} className="btn">Submit</Button>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </Tab>
        </Tabs>
      </form>
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

    </div>
  );
};

export default Admission;
