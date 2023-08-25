import React from 'react'
import "./viewadmission.css";
import { useState, useEffect } from "react"
import axios from 'axios';
import { Link } from 'react-router-dom';

function Viewadmission() {
  var [val, setval] = useState<any[]>([]);

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


  return (
    <div>
      <div className='veiw_sec'>
        <div className="overfolw_div">
          <div className="admission-table-area">
            <table className=' w-75 m-auto table-responsive text-center scroll-inner table_border'>
              <thead className='divTableHead table-header-shadow'>
                <tr>
                  <th className="divTableCell">Index</th>
                  <th className='divTableCell'>Surname</th>
                  <th className='divTableCell'>Studentname</th>
                  <th className='divTableCell'>Fathername</th>
                  <th className='divTableCell'>Image</th>
                  {/* <th className='divTableCell'>Stu_contact_no</th>
                  <th className='divTableCell'>Stu_whatsapp_no</th>
                  <th className='divTableCell'>Parent_contact_no</th>
                  <th className='divTableCell'>Parent_whatsapp_no</th> */}
                  {/* <th className='divTableCell'>Address</th>
                  <th className='divTableCell'>Date_Of_Birth</th> */}
                  {/* <th className='divTableCell'>Image</th>
                  <th className='divTableCell'>Qualification</th>
                  <th className='divTableCell'>Reference</th>
                  <th className='divTableCell'>Referencename</th>
                  <th className='divTableCell'>Course</th>
                  <th className='divTableCell'>Course_content</th>
                  <th className='divTableCell'>Course_duration</th>
                  <th className='divTableCell'>Total_fees</th>
                  <th className='divTableCell'>Joining_date</th>
                  <th className='divTableCell'>Ending_date</th>
                  <th className='divTableCell'>Daily_time</th>
                  <th className='divTableCell'>Job_responsbility</th>
                  <th className='divTableCell'>College_course</th>
                  <th className='divTableCell'>Batch_time</th>
                  <th className='divTableCell'>Runnng_topic</th>
                  <th className='divTableCell'>Faculty</th>
                  <th className='divTableCell'>Pc_laptop</th>
                  <th className='divTableCell'>Pc_no</th>
                  <th className='divTableCell'>Laptop-compulsory</th>
                  <th className='divTableCell'>GST</th>
                  <th className='divTableCell'>Extra_note</th>
                  <th className='divTableCell'>Reception_note</th> */}
                  {/* <th className='divTableCell'>Update</th> */}
                  <th className='divTableCell'>View_Detail</th>
                  <th className='divTableCell'>Delete</th>

                </tr>
              </thead>
              <tbody className='divTableBody table-body-shadow salon-pay-sidebar-scroll'>
                {val.map((item, index) => (
                  <tr key={index}>
                    <td className="bodyTableCell">{index + 1}</td>
                    <td className="bodyTableCell">{item.surname}</td>
                    <td className="bodyTableCell">{item.studentname}</td>
                    <td className="bodyTableCell">{item.fathername}</td>
                    <td className="bodyTableCell">{item.image}</td>
                    {/* <td className="bodyTableCell">{item.stu_contact_no}</td>
                    <td className="bodyTableCell">{item.stu_whatsapp_no}</td>
                    <td className="bodyTableCell">{item.parent_contact_no}</td>
                    <td className="bodyTableCell">{item.parent_whatsapp_no}</td>
                    <td className="bodyTableCell">{item.address}</td>
                    <td className="bodyTableCell">{item.dob}</td>
                    <td className="bodyTableCell">{item.image}</td>
                    <td className="bodyTableCell">{item.qualification}</td>
                    <td className="bodyTableCell">{item.reference}</td>
                    <td className="bodyTableCell">{item.referencename}</td>
                    <td className="bodyTableCell">{item.course}</td>
                    <td className="bodyTableCell">{item.course_content}</td>
                    <td className="bodyTableCell">{item.course_duration}</td>
                    <td className="bodyTableCell">{item.total_fees}</td>
                    <td className="bodyTableCell">{item.joining_date}</td>
                    <td className="bodyTableCell">{item.ending_date}</td>
                    <td className="bodyTableCell">{item.daily_time}</td>
                    <td className="bodyTableCell">{item.job_responsbility}</td>
                    <td className="bodyTableCell">{item.college_course}</td>
                    <td className="bodyTableCell">{item.batch_time}</td>
                    <td className="bodyTableCell">{item.runnng_topic}</td>
                    <td className="bodyTableCell">{item.faculty}</td>
                    <td className="bodyTableCell">{item.pc_laptop}</td>
                    <td className="bodyTableCell">{item.pc_no}</td>
                    <td className="bodyTableCell">{item.Laptop_compulsory}</td>
                    <td className="bodyTableCell">{item.gst}</td>
                    <td className="bodyTableCell">{item.extra_note}</td>
                    <td className="bodyTableCell">{item.reception_note}</td> */}
                    {/* <td className="bodyTableCell">
                      <Link to={`/updatecourse/${item._id}`}><i className="ri-settings-5-line veiw_icon "></i></Link>
                    </td> */}
                    {/* <td className="bodyTableCell">
                      <Link to=""> <i className="ri-delete-bin-6-fill veiw_icon "></i></Link>
                    </td> */}
                    <td className="bodyTableCell">
                      <Link to={`/student_details/${item._id}`}><i className="fa-solid fa-eye veiw_icon"></i></Link>
                    </td>
                     <td className="bodyTableCell">
                      <Link to=""> <i className="ri-delete-bin-6-fill veiw_icon "></i></Link>
                    </td>
                  </tr>

                ))}

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Viewadmission
