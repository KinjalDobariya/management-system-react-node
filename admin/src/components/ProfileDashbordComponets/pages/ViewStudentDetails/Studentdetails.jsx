import React from 'react'
import "./studentdetails.css";
import { Col, Container, Row, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import LogoName from "../../../../assets/images/eduction2.jpg"
import Logo from "../../../../assets/images/Logo.png"
import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Studentdetails() {
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
    }],
    complete_topic: ""
  }

  var [val, setVal] = useState(initialValue);

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


  return (
    <div>
      <div className="div_right">
        <div className="student_under_div">
          <Row>
            <Col lg="2" md="4" sm="4" xs="6" className=" text-center m-auto ">
              <div className='student_details_img student_header_sec'>
                <img src={LogoName} alt="" className='img-fluid' />
              </div>
            </Col>
            <Col lg="8" md="12" sm="12" className="my-2 text-center m-auto d-lg-block d-none">
              <div className='student_header_sec'>
                <div>
                  <img src={Logo} alt="" className='img-fluid' />

                </div>
                <div className='student_detail_content'>
                  EDUCATIONAL & IT TRAINING ACADEMY

                </div>
              </div>
            </Col>
            <Col lg="2" md="6" sm="6" className="my-2 text-center m-auto">
              <div className='student_header_sec'>
              <img src={'http://localhost:5000/images/' + val.image} style={{height:150,width:150,border:'1px solid black',borderRadius:"2px"}} />
              </div>
            </Col>
          </Row>

          <Row className="student_details">
            <Col lg="12" md="12" sm="12" className="my-2">
              <div className='student_course'>
                <h4> Personal Information </h4>
              </div>
            </Col>
            <Col lg="4" md="4" sm="6" className="my-2 ">
              <div className='student_info_div'>
                <label htmlFor="" className="student_label">Surname :</label>
                <p className='student_info'>{val?.surname || ''}</p>
              </div>
            </Col>
            <Col lg="4" md="4" sm="6" className="my-2">
              <div className='student_info_div'>
                <label htmlFor="" className="student_label">Student-Name :</label>
                <p className='student_info'>{val?.studentname || ''}</p>
              </div>
            </Col>
            <Col lg="4" md="4" sm="6" className="my-2">
              <div className='student_info_div'>
                <label htmlFor="" className="student_label">Father-Name :</label>
                <p className='student_info'>{val?.fathername || ''}</p>
              </div>
            </Col>
            <Col lg="4" md="4" sm="6" className="my-2">
              <div className='student_info_div'>
                <label htmlFor="" className="student_label">Date-Of-Birth :</label>
                <p className='student_info'>{val?.dob || ''}</p>
              </div>
            </Col>
            <Col lg="4" md="4" sm="6" className="my-2">
              <div className='student_info_div'>
                <label htmlFor="" className="student_label">Student-Contact-Number :</label>
                <p className='student_info'>{val?.stu_contact_no || ''}</p>
              </div>
            </Col>
            <Col lg="4" md="4" sm="6" className="my-2">
              <div className='student_info_div'>
                <label htmlFor="" className="student_label">Student-Whatsapp-Number :</label>
                <p className='student_info'>{val?.stu_whatsapp_no || ''}</p>
              </div>
            </Col>
            <Col lg="4" md="4" sm="6" className="my-2">
              <div className='student_info_div'>
                <label htmlFor="" className="student_label">Parent-Contact-Number :</label>
                <p className='student_info'>{val?.parent_contact_no || ''}</p>
              </div>
            </Col>
            <Col lg="4" md="4" sm="6" className="my-2">
              <div className='student_info_div'>
                <label htmlFor="" className="student_label">Parent-Whatsapp-Number :</label>
                <p className='student_info'>{val?.parent_whatsapp_no || ''}</p>
              </div>
            </Col>
            <Col lg="4" md="4" sm="6" className="my-2">
              <div className='student_info_div'>
                <label htmlFor="" className="student_label">Qulification :</label>
                <p className='student_info'>{val?.qualification || ''}</p>
              </div>
            </Col>
            <Col lg="4" md="4" sm="6" className="my-2">
              <div className='student_info_div'>
                <label htmlFor="" className="student_label">Refrence :</label>
                <p className='student_info'>{val?.reference || ''}</p>
              </div>
            </Col>
            <Col lg="4" md="4" sm="6" className="my-2">
              <div className='student_info_div'>
                <label htmlFor="" className="student_label">Refrence-Name :</label>
                <p className='student_info'>{val?.referencename || ''}</p>
              </div>
            </Col>
            <Col lg="12" md="6" sm="4">
              <Row className="student_address">
                <Col lg="8" md="6" sm="4" className="my-2">
                  <div className='student_info_div'>
                    <label htmlFor="" className="student_label">Address :</label>
                    <p className='student_info'>{val?.address || ''}</p>
                  </div>
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
            <Col lg="4" md="4" sm="6" className="my-2 ">
              <div className='student_info_div'>
                <label htmlFor="" className="student_label">Course :</label>
                <p className='student_info'>{val?.course || ''}</p>
              </div>
            </Col>
            <Col lg="4" md="4" sm="6" className="my-2">
              <div className='student_info_div'>
                <label htmlFor="" className="student_label">Course-Content :</label>
                <p className='student_info'>{val?.course_content || ''}</p>
              </div>
            </Col>
            <Col lg="4" md="4" sm="6" className="my-2">
              <div className='student_info_div'>
                <label htmlFor="" className="student_label">Course-Duration :</label>
                <p className='student_info'>{val?.course_duration || ''}</p>
              </div>
            </Col>
            <Col lg="4" md="4" sm="6" className="my-2">
              <div className='student_info_div'>
                <label htmlFor="" className="student_label">Total-fees :</label>
                <p className='student_info'>{val?.total_fees || ''}</p>
              </div>
            </Col>
            <Col lg="4" md="4" sm="6" className="my-2">
              <div className='student_info_div'>
                <label htmlFor="" className="student_label">Joining-Date :</label>
                <p className='student_info'>{val?.joining_date || ''}</p>
              </div>
            </Col>
            <Col lg="4" md="4" sm="6" className="my-2">
              <div className='student_info_div'>
                <label htmlFor="" className="student_label">Ending-Date :</label>
                <p className='student_info'>{val?.ending_date || ''}</p>
              </div>
            </Col>
            <Col lg="4" md="4" sm="6" className="my-2">
              <div className='student_info_div'>
                <label htmlFor="" className="student_label">Daily-Time :</label>
                <p className='student_info'>{val?.daily_time || ''}</p>
              </div>
            </Col>
            <Col lg="4" md="4" sm="6" className="my-2">
              <div className='student_info_div'>
                <label htmlFor="" className="student_label">Job-Responsibility :</label>
                <p className='student_info'>{val?.job_responsbility || ''}</p>
              </div>
            </Col>
            <Col lg="4" md="4" sm="6" className="my-2">
              <div className='student_info_div'>
                <label htmlFor="" className="student_label">College/Course :</label>
                <p className='student_info'>{val?.college_course || ''}</p>
              </div>
            </Col>
            <Col lg="4" md="4" sm="6" className="my-2">
              <div className='student_info_div'>
                <label htmlFor="" className="student_label">Batch-Times :</label>
                <p className='student_info'>{val?.batch_time || ''}</p>
              </div>
            </Col>
            <Col lg="4" md="4" sm="6" className="my-2">
              <div className='student_info_div'>
                <label htmlFor="" className="student_label">Runing-Topic :</label>
                <p className='student_info'>{val?.runnng_topic || ''}</p>
              </div>
            </Col>
            <Col lg="4" md="4" sm="6" className="my-2">
              <div className='student_info_div'>
                <label htmlFor="" className="student_label">Complete-Topic :</label>
                <p className='student_info'>{val?.complete_topic || ''}</p>
              </div>
            </Col>
            <Col lg="4" md="4" sm="6" className="my-2">
              <div className='student_info_div'>
                <label htmlFor="" className="student_label">Faculty :</label>
                <p className='student_info'>{val?.faculty || ''}</p>
              </div>
            </Col>
            <Col lg="4" md="4" sm="6" className="my-2">
              <div className='student_info_div'>
                <label htmlFor="" className="student_label">Pc/Laptop :</label>
                <p className='student_info'>{val?.pc_laptop || ''}</p>
              </div>
            </Col>
            <Col lg="4" md="4" sm="6" className="my-2">
              <div className='student_info_div'>
                <label htmlFor="" className="student_label">Pc-Number :</label>
                <p className='student_info'>{val?.pc_no || ''}</p>
              </div>
            </Col>
            <Col lg="4" md="4" sm="6" className="my-2">
              <div className='student_info_div'>
                <label htmlFor="" className="student_label">Laptop-Compulsory :</label>
                <p className='student_info'>{val?.laptop_compulsory || ''}</p>
              </div>
            </Col>
            <Col lg="4" md="4" sm="6" className="my-2">
              <div className='student_info_div'>
                <label htmlFor="" className="student_label">GST :</label>
                <p className='student_info'>{val?.gst || ''}</p>
              </div>
            </Col>
          </Row>
          <Row className="student_details">
            <Col lg="12" md="12" sm="12" className="my-2">
              <div className='student_course'>
                <h4> Installment Information </h4>
              </div>
            </Col>
            <div className="student-table-area">
              <table className=' w-50 table-responsive text-center scroll-inner table_border'>
                <thead className='table-shadow'>
                  <tr>
                    <th className='divCell'>Index</th>
                    <th className='divCell'>Amount</th>
                    <th className='divCell'>Date</th>
                    <th className='divCell'>Status</th>
                  </tr>
                </thead>
                <tbody className='body-table salon-pay-sidebar-scroll'>
                  {val.installment_details.map((item, index) => (
                    <tr key={index}>
                      <td className="bodyCell">{index + 1}</td>
                      <td className="bodyCell">{item.amount}</td>
                      <td className="bodyCell">{item.installment_date}</td>
                      <td className={`bodyCell ${item.status === 'Unpaid' ? 'unpaid' : 'paid'}`}>{item.status}</td>
                    </tr>

                  ))}
                </tbody>
              </table>
            </div>
          </Row>
          <Row className="student_details">
            <Col lg="12" md="12" sm="12" className="my-2">
              <div className='student_course'>
                <h4> Notes </h4>
              </div>
            </Col>
            <Col lg="12" md="12" sm="12" className="my-2 ">
              <div className='student_info_div'>
                <label htmlFor="" className="student_label">Extra Notes :</label>
                <p className='student_info'>{val?.extra_note || ''}</p>
              </div>
            </Col>
            <Col lg="12" md="12" sm="12" className="my-2">
              <div className='student_info_div'>
                <label htmlFor="" className="student_label">Reception Notes :</label>
                <p className='student_info'>{val?.reception_note || ''}</p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div >
  )
}

export default Studentdetails
