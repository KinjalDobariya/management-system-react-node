import { Button, Col, Container, Row } from "reactstrap";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useState, useEffect } from "react";
import axios from 'axios';
import "./admission.css";

type ItemType = {
  id: number;
  coursename: string;
  total_fees: string;
  content_id: {
    content: string,
    duration: string;
  };

};

type InstallmentType = {
  installment_date: string;
  amount: string;
};

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
    installments: [] as InstallmentType[],
  }
  var [val, setVal] = useState(initialValue);
  var [Arr, setArr] = useState<Array<ItemType>>([]);;

  const handleClick = () => {
    console.log("Form data to be sent:", val);
    axios.post('http://localhost:5000/addmission/addmissionData', {
      // -- personal data --
      surname: val.surname,
      studentname: val.studentname,
      fathername: val.fathername,
      stu_contact_no: val.stu_contact_no,
      stu_whatsapp_no: val.stu_whatsapp_no,
      parent_contact_no: val.parent_contact_no,
      parent_whatsapp_no: val.parent_whatsapp_no,
      address: val.address,
      dob: val.dob,
      image: val.image,
      qualification: val.qualification,
      reference: val.reference,
      referencename: val.referencename,
      // -- personal data end --

      // -- course data --
      course: val.course,
      course_content: val.course_content,
      course_duration: val.course_duration,
      total_fees: val.total_fees,
      joining_date: val.joining_date,
      ending_date: val.ending_date,
      daily_time: val.daily_time,
      job_responsbility: val.job_responsbility,
      college_course: val.college_course,
      batch_time: val.batch_time,
      runnng_topic: val.runnng_topic,
      faculty: val.faculty,

      // -- default data --
      pc_laptop: val.pc_laptop,
      pc_no: val.pc_no,
      laptop_compulsory: val.laptop_compulsory,
      gst: val.gst,
      // -- default data  end--

      // -- notes data --
      extra_note: val.extra_note,
      reception_note: val.reception_note,
      // -- notes data  end--

      installments: val.installments,
    })
      .then(function (response) {
        console.log(response);

      })
      .catch(function (error) {
        console.log(error);

      })
  }

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

  const handleChange = (e: any) => {

    const { name, value } = e.target;
    setVal((prevVal) => {
      if (name === "course") {
        const selectedCourse = Arr.find((item) => item.coursename === value);
        return {
          ...prevVal,
          course: value,
          course_content: selectedCourse ? selectedCourse.content_id.content : "",
          course_duration: selectedCourse ? selectedCourse.content_id.duration : "",
          total_fees: selectedCourse ? selectedCourse.total_fees : "",

        };
      } else {
        return {
          ...prevVal,
          [name]: value,
        };
      }
    });
  }

  const handleInstallmentChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { name, value } = e.target;
    setVal((prevVal) => {
      const installments = [...prevVal.installments];
      installments[index] = {
        ...installments[index],
        [name]: value,
      };
      return { ...prevVal, installments };
    });
  };

  const addInstallment = () => {
    setVal((prevVal) => ({
      ...prevVal,
      installments: [...prevVal.installments, { installment_date: "", amount: "" }],
    }));
  };

  const removeInstallment = (index: any) => {
    setVal((prevVal) => {
      const installments = [...prevVal.installments];
      installments.splice(index, 1);
      return { ...prevVal, installments };
    });
  };

  return (

    <div className="admission_sec">
      <form action="">
        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-5 mx-4">
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
                      </Col>
                      <Col lg="4" md="4" sm="6" className="my-2">
                        <label htmlFor="" className="lable">Student Name</label>
                        <input type="text" name="studentname" id="" value={val.studentname} onChange={handleChange} placeholder="Enter Student Name" />
                      </Col>
                      <Col lg="4" md="4" sm="6" className="my-2">
                        <label htmlFor="" className="lable">Father Name</label>
                        <input type="text" name="fathername" id="" value={val.fathername} onChange={handleChange} placeholder="Enter Father Name" />
                      </Col>

                    </Row>
                    <Row className="personal_details">
                      <Col lg="4" md="4" sm="6" className="my-2">
                        <label htmlFor="" className="lable">Std-contact-no</label>
                        <input type="text" name="stu_contact_no" id="" value={val.stu_contact_no} onChange={handleChange} placeholder="Contact number" />
                      </Col>
                      <Col lg="4" md="4" sm="6" className="my-2">
                        <label htmlFor="" className="lable">Std-whatsapp-no</label>
                        <input type="text" name="stu_whatsapp_no" id="" value={val.stu_whatsapp_no} onChange={handleChange} placeholder="Whatsapp number" />
                      </Col>
                      <Col lg="4" md="4" sm="6" className="my-2">
                        <label htmlFor="" className="lable">Parent-contact-no</label>
                        <input type="text" name="parent_contact_no" id="" value={val.parent_contact_no} onChange={handleChange} placeholder="Contact number" />
                      </Col>

                    </Row>
                    <Row className="personal_details">
                      <Col lg="4" md="4" sm="6" className="my-2">
                        <label htmlFor="" className="lable">Parent-whatsapp-no</label>
                        <input type="text" name="parent_whatsapp_no" id="" value={val.parent_whatsapp_no} onChange={handleChange} placeholder="Whatsapp number" />
                      </Col>
                      <Col lg="4" md="4" sm="6" className="my-2">
                        <label htmlFor="" className="lable">D.O.B</label>
                        <input type="date" name="dob" id="" value={val.dob} onChange={handleChange} placeholder="" />
                      </Col>
                      <Col lg="4" md="4" sm="6" className="my-2">
                        <label htmlFor="" className="lable">Qulification</label>
                        <input type="text" name="qualification" id="" value={val.qualification} onChange={handleChange} placeholder="Enter qulification" />
                      </Col>
                    </Row>
                    <Row className="personal_details">
                      <Col lg="4" md="4" sm="6" className="my-2">
                        <label htmlFor="" className="lable">Refrence</label>
                        <input type="text" name="reference" id="" value={val.reference} onChange={handleChange} placeholder="Refrence" />
                      </Col>
                      <Col lg="4" md="4" sm="6" className="my-2">
                        <label htmlFor="" className="lable">Refrence Name</label>
                        <input type="text" name="referencename" id="" value={val.referencename} onChange={handleChange} placeholder="Enter Name" />
                      </Col>
                      <Col lg="4" md="4" sm="6" className="my-2">
                        <label htmlFor="" className="lable">Image</label>
                        <input type="file" name="image" id="" value={val.image} onChange={handleChange} placeholder="" />
                      </Col>
                    </Row>
                    <Row className="personal_details personal_address">
                      <Col lg="8" md="6" sm="4" className="my-2">
                        <label htmlFor="" className="lable">Address</label>
                        <input type="text" name="address" id="" value={val.address} onChange={handleChange} placeholder="Address" />
                      </Col>
                    </Row>
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
                          {Arr.map((item: any) => (
                            <option key={item.id} value={item.coursename}>
                              {item.coursename}
                            </option>
                          ))}
                        </select>
                        {/* <input type="text" name="course" id="" value={val.course} onChange={handleChange} placeholder="" /> */}
                      </Col>
                      <Col lg="4" md="4" sm="6" className="my-2">
                        <label htmlFor="" className="lable">Course-content</label>
                        <input type="text" name="course_content" id="" value={val.course_content} onChange={handleChange} placeholder="Content"></input>
                      </Col>
                      <Col lg="4" md="4" sm="6" className="my-2">
                        <label htmlFor="" className="lable">Course-duration</label>
                        <input type="text" name="course_duration" id="" value={val.course_duration} onChange={handleChange} placeholder="Duration" />
                      </Col>
                    </Row>
                    <Row className="personal_details">
                      <Col lg="4" md="4" sm="6" className="my-2">
                        <label htmlFor="" className="lable">Total-fees</label>
                        <input type="text" name="total_fees" id="" value={val.total_fees} onChange={handleChange} placeholder="Enter total-fees" />
                      </Col>
                      <Col lg="4" md="4" sm="6" className="my-2">
                        <label htmlFor="" className="lable">Joining-date</label>
                        <input type="date" name="joining_date" id="" value={val.joining_date} onChange={handleChange} />
                      </Col>
                      <Col lg="4" md="4" sm="6" className="my-2">
                        <label htmlFor="" className="lable">Ending-date</label>
                        <input type="date" name="ending_date" id="" value={val.ending_date} onChange={handleChange} />
                      </Col>
                    </Row>
                    <Row className="personal_details">
                      <Col lg="4" md="4" sm="6" className="my-2">
                        <label htmlFor="" className="lable">Daily-time</label>
                        <input type="text" name="daily_time" id="" value={val.daily_time} onChange={handleChange} placeholder="Hours" />
                      </Col>
                      <Col lg="4" md="4" sm="6" className="my-2">
                        <label htmlFor="" className="lable">Job Responsibility</label>
                        <input type="text" name="job_responsbility" id="" value={val.job_responsbility} onChange={handleChange} placeholder="Yes/No" />
                      </Col>
                      <Col lg="4" md="4" sm="6" className="my-2">
                        <label htmlFor="" className="lable">College-course</label>
                        <input type="text" name="college_course" id="" value={val.college_course} onChange={handleChange} placeholder="Yes/No" />
                      </Col>
                    </Row>
                    <Row className="personal_details">
                      <Col lg="4" md="4" sm="6" className="my-2">
                        <label htmlFor="" className="lable">Batch-time</label>
                        <input type="text" name="batch_time" id="" value={val.batch_time} onChange={handleChange} placeholder="Time" />
                      </Col>
                      <Col lg="4" md="4" sm="6" className="my-2">
                        <label htmlFor="" className="lable">Runing-topic</label>
                        <input type="text" name="runnng_topic" id="" value={val.runnng_topic} onChange={handleChange} placeholder="Enter Runing-topic " />
                      </Col>

                      <Col lg="4" md="4" sm="6" className="my-2">
                        <label htmlFor="" className="lable">Faculty</label>
                        <input type="text" name="faculty" id="" value={val.faculty} onChange={handleChange} placeholder="Enter Name" />
                      </Col>

                    </Row>
                    <Row className="personal_details">
                      <Col lg="4" md="4" sm="6" className="my-2">
                        <label htmlFor="" className="lable">Pc/Laptop</label>
                        {/* <input type="" name="pc_laptop" id="" value={val.pc_laptop} onChange={handleChange} placeholder="" /> */}
                        <select>
                          <option selected className="color_select">One select</option>
                          <option value={val.pc_laptop}>Pc</option>
                          <option value={val.pc_laptop}>Laptop</option>
                        </select>
                      </Col>
                      <Col lg="4" md="4" sm="6" className="my-2">
                        <label htmlFor="" className="lable">Pc-no</label>
                        <input type="text" name="pc_no" id="" value={val.pc_no} onChange={handleChange} placeholder="Pc Number" />
                      </Col>
                      <Col lg="4" md="4" sm="6" className="my-2">
                        <label htmlFor="" className="lable">Laptop-compulsory</label>
                        {/* <input type="text" name="laptop_compulsory" id="" value={val.laptop_compulsory} onChange={handleChange} placeholder="" /> */}
                        <select>
                          <option selected className="color_select">One select</option>
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </Col>
                    </Row>
                    <Row className="personal_details">
                      <Col lg="4" md="4" sm="6" className="my-2">
                        <label htmlFor="" className="lable">Gst</label>
                        <input type="text" name="gst" id="" value={val.gst} onChange={handleChange} placeholder="Gst" />
                      </Col>
                    </Row>
                    <h4>Installment Details</h4>
                    <Row className="personal_details">
                      <Col lg="2" md="4" sm="6" className="my-2">
                      <input type="text" name="total_fees" id="" value={val.total_fees} onChange={handleChange} placeholder="Enter total-fees" />
                      </Col>
                      <Col lg="6" md="4" sm="6" className="my-2">
                        <div className="input-group mb-3">
                          <input type="text" className="form-control" name="installments" placeholder="instalments" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                          <div className="input-group-append">
                            <button className="btn" type="button" onClick={addInstallment}><i className="fa-solid fa-plus"></i></button>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    {val.installments.map((item, index) => (
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
    </div>
  );
};

export default Admission;
