import "./viewadmission.css";
import { useState, useEffect } from "react"
import { Col, Row, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Viewadmission() {

  var [val, setval] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [statusModal, setStatusModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  var [topic, setTopic] = useState({
    complete_topic: "",
  });

  const CourseData = () => {
    axios.get(`http://localhost:5000/addmission/alladmission`)
      .then(function (response) {
        setval(response.data.data);
        console.log(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    CourseData();
  }, []);

  const handleDelete = (id) => {

    axios.delete(`http://localhost:5000/addmission/delete-admission/${id}`)
      .then(function (response) {
        console.log(response.data);
        setval((prevVal) => prevVal.filter((item) => item._id !== id))
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  const handleSearchData = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.trim() !== "") {
      axios
        .get(`http://localhost:5000/addmission/search_admission?admission=${query}`)
        .then(function (response) {
          setval(response.data.data);
          console.log(response.data.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {

      CourseData();
    }
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const toggleStatusmodal = () => {
    setStatusModal(!statusModal);
  };

  const handleTopic = (id) => {
    axios.get(`http://localhost:5000/addmission/student-detail/${id}`)
      .then(function (response) {
        console.log(response.data.data);
        setTopic(response.data.data);
        toggleModal()
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  const handleModalOk = () => {
    toggleModal()

    axios.put(`http://localhost:5000/addmission/topic-update`, {
      id: topic._id,
      complete_topic: topic.complete_topic,
    })
      .then(function (response) {
        console.log(response.data.data);
        if (response.data.status === "update") {
          val.complete_topic = "";
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const handleStatus = (id) => {
    axios.get(`http://localhost:5000/addmission/student-detail/${id}`)
      .then(function (response) {
        console.log(response.data.data);
        const topicData = response.data.data;
        setTopic(topicData);
        toggleStatusmodal()
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  const handleStatusok = () => {
    toggleStatusmodal()

    axios.put(`http://localhost:5000/addmission/topic-update`, {
      id: topic._id,
      student_status: topic.student_status,
    })
      .then(function (response) {
        console.log(response.data.data);
        CourseData()
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const handleChange = (e) => {
    setTopic({ ...topic, [e.target.name]: e.target.value })
  }




  return (
    <div>
      <div className='veiwcourse_sec'>
        <div className='search_div text-lg-end my-3 text-sm-center'>
          <input className="Search_input" type="search" placeholder="Search" aria-label="Search" value={searchQuery} onChange={handleSearchData} />
          <button className="btn my-2 my-sm-0" onChange={handleSearchData}> <i className="ri-search-line nav_icon_color"></i></button>
        </div>
        <div className="overfolw_div">
          <div className="admission-table-area">
            <table className=' w-75 m-auto table-responsive text-center scroll-inner table_border'>
              <thead className='divTableHead table-header-shadow'>
                <tr>
                  <th className="p-3" style={{ color: '#fff' }}><i className="fa-solid fa-circle-user  veiw_icon"></i></th>
                  <th className="p-2" style={{ color: '#fff', fontSize: '18px', fontWeight: 'normal' }}>Index</th>
                  <th className='divTableCell'>Image</th>
                  <th className='divTableCell' colSpan={2}> Full Name</th>
                  <th className='divTableCell'>Contact</th>
                  <th className='divTableCell'>Course</th>
                  <th className='divTableCell'>View</th>
                  <th className='divTableCell'>Topic</th>
                  <th className='divTableCell'>Status</th>
                  <th className='divTableCell'>Update</th>
                  <th className='divTableCell'>Delete</th>

                </tr>
              </thead>
              <tbody className='divTableBody table-body-shadow salon-pay-sidebar-scroll'>
                {val.map((item, index) => (
                  <tr key={index} >
                    <td className={
                      item.student_status === 'Runing' ? 'runing' : item.student_status === 'Complete' ? 'complete' : item.student_status === 'Drop' ? 'drop' : item.student_status === 'Leave' ? 'leave' : ''
                    }><i className="fa-solid fa-circle"></i></td>
                    <td className="bodyTableCell">{index + 1}</td>
                    <td className="bodyTableCell"><img src={'http://localhost:5000/images/' + item.image} style={{width:120,height:120}} /></td>
                    <td className="bodyTableCell">{item.surname}</td>
                    <td className="bodyTableCell">{item.studentname}</td>
                    <td className="bodyTableCell">{item.stu_contact_no}</td>
                    <td className="bodyTableCell">{item.course}</td>
                    <td className="bodyTableCell">
                      <Link to={`/student_details/${item._id}`}><i className="fa-solid fa-eye veiw_icon"></i></Link>
                    </td>
                    <td className="bodyTableCell">
                      <Link to="" onClick={() => handleTopic(item._id)}><i className="ri-edit-fill veiw_icon"></i></Link>
                    </td>
                    <td  >
                      <Link to="" onClick={() => handleStatus(item._id)}><i className="fa-solid fa-clock-rotate-left veiw_icon"></i></Link>
                    </td>
                    <td className="bodyTableCell">
                      <Link to={`/student_update/${item._id}`}><i className="fa-solid fa-file-pen veiw_icon"></i></Link>
                    </td>
                    <td className="bodyTableCell">
                      <Link to=""> <i className="ri-delete-bin-6-fill veiw_icon " onClick={() => handleDelete(item._id)}></i></Link>
                    </td>
                  </tr>

                ))}

              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Modal isOpen={showModal} toggle={toggleModal} className="viewadmission-centered-modal">
        <ModalHeader toggle={toggleModal}></ModalHeader>
        <ModalBody>
          <Row className="student_details">
            <Col lg="12" md="12" sm="12" className="my-2">
              <div className='student_course'>
                <h4>Complete Topic </h4>
              </div>
            </Col>
            <Col lg="12" md="12" sm="12" className="my-2  ">
              <input type="text" name="complete_topic" id="" value={topic?.complete_topic || ''} placeholder="Enter Topic" onChange={handleChange} />
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button className="addcourse_button" onClick={handleModalOk}>Submit</Button>
          {/* <Button className="addcourse_button">Submit</Button> */}

        </ModalFooter>
      </Modal>
      <Modal isOpen={statusModal} toggle={toggleStatusmodal} className="viewadmission-centered-modal">
        <ModalHeader toggle={toggleStatusmodal}>Student Status</ModalHeader>
        <ModalBody>
          <Row className="">
            <Col lg="12" md="12" sm="12" className="my-2  ">
              <select value={val.student_status} name="student_status" onChange={handleChange} placeholder="">
                <option value="" className="color_select">Select One</option>
                <option value="Runing" className="runing">Runing</option>
                <option value="Leave" className="leave">Leave</option>
                <option value="Drop" className="color_select">Drop</option>
                <option value="Complete" className="color_select">Complete</option>
              </select>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button className="addcourse_button" onClick={handleStatusok}>Submit</Button>
          {/* <Button className="addcourse_button">Submit</Button> */}

        </ModalFooter>
      </Modal>
    </div>
  )
}

export default Viewadmission
