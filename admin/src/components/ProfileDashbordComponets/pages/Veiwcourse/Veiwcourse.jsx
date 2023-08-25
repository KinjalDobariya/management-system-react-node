import Table from 'react-bootstrap/Table';
import './veiwcourse.css'
import { useState, useEffect } from "react"
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Pagination } from 'reactstrap';


function VeiwCourse() {
    var [val, setval] = useState([]);
    const [page, setpage] = useState(1);
    const [lastpage, setLastpage] = useState(1);
    const itemsPerPage = 5;

    const CourseData = () => {
        axios.get(`http://localhost:5000/course/veiw_course?page_no=${page}`)
            .then(function (response) {
                setval(response.data.data);
                console.log(response.data.data);
                setLastpage(response.data.lastpage)
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    useEffect(() => {
        CourseData();
    }, [page]);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/course/deletecourse/${id}`)
            .then(function (response) {
                console.log(response.data);
                setval((prevVal) => prevVal.filter((item) => item._id !== id));
                CourseData();
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const handlePreviousPage = () => {
        if (page > 1) {
            setpage(page - 1);
        }
    }

    const handleNextPage = () => {
        setpage(page + 1);

    }

    const [searchQuery, setSearchQuery] = useState("");
    const handleSearchData = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        if (query.trim() !== "") {
            axios
                .get(`http://localhost:5000/course/searchcourse?course=${query}`)
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

    return (

        <div className='veiwcourse_sec'>
            <div className='search_div text-lg-end my-3 text-sm-center'>
                <input className="Search_input" type="search" placeholder="Search" aria-label="Search" value={searchQuery} onChange={handleSearchData} />
                <button className="btn my-2 my-sm-0" onChange={handleSearchData}> <i className="ri-search-line nav_icon_color"></i></button>
            </div>
            <div className="table-area">
                <div className="center-block fix-width scroll-inner ">
                    <table className=' w-75 m-auto table-responsive text-center scroll-inner table_border'>
                        <thead className='divTableHead table-header-shadow'>
                            <tr>
                                <th className="divTableCell">Index</th>
                                <th className="divTableCell">Course</th>
                                <th className="divTableCell">Total Fees</th>
                                <th className="divTableCell">Update</th>
                                <th className="divTableCell">Delete</th>
                            </tr>
                        </thead>
                        <tbody className='divTableBody table-body-shadow salon-pay-sidebar-scroll'>
                            {val.map((item, index) => (
                                <tr key={index}>
                                    <td className="bodyTableCell">{(page - 1) * itemsPerPage + index + 1}</td>
                                    <td className="bodyTableCell">{item.coursename}</td>
                                    <td className="bodyTableCell">{item.total_fees}</td>
                                    <td className="bodyTableCell">
                                        <Link to={`/updatecourse/${item._id}`}><i className="fa-solid fa-file-pen veiw_icon"></i></Link>
                                    </td>
                                    <td className="bodyTableCell">
                                        <Link to="" onClick={() => handleDelete(item._id)}> <i className="ri-delete-bin-6-fill veiw_icon "></i></Link>
                                    </td>
                                </tr>

                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
            <div className="paging-navigation">
                <div className="nav-links">

                    <button className="prev page-numbers" to="" onClick={handlePreviousPage} ><span aria-hidden="true"><i className="fas fa-chevron-left"></i></span></button>
                    <button className="next page-numbers" to="" onClick={handleNextPage}> <span aria-hidden="true"><i className="fas fa-chevron-right"></i></span></button>
                </div>
            </div>
        </div>
    );
}

export default VeiwCourse;