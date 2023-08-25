import Table from 'react-bootstrap/Table';
import './viewcontent.css'
import { useState, useEffect } from "react"
import axios from 'axios';
import { Link } from 'react-router-dom';


function Viewcontent() {
    var [val, setval] = useState([]);
    const [page, setPage] = useState(1);
    const itemsPerPage = 5;

    const CourseData = () => {
        axios.get(`http://localhost:5000/course/viewcontent?page_no=${page}`)
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
            setPage(page - 1);
        }
    }

    const handleNextPage = () => {
        setPage(page + 1);
    }

    const totalPages = Math.ceil(val.length / itemsPerPage);
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

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
            <div className="viewcourse_main_title">
                <h3>View Content</h3>
            </div>
            <div className="table-area ">
                <div className='search_div text-end my-3'>
                    <input className="Search_input" type="search" placeholder="Search" aria-label="Search" value={searchQuery} onChange={handleSearchData} />
                    <button className="btn my-2 my-sm-0"> <i className="ri-search-line nav_icon_color"></i></button>
                </div>

                <div className="center-block fix-width scroll-inner ">
                    <table className=' w-75 m-auto table-responsive text-center scroll-inner table_border'>
                        <thead className='divTableHead table-header-shadow'>
                            <tr>
                                <th className="divTableCell">Index</th>
                                <th className="divTableCell">CourseName</th>
                                <th className="divTableCell">Content</th>
                                <th className="divTableCell">Duration</th>
                                <th className="divTableCell">Update</th>
                                <th className="divTableCell">Delete</th>
                            </tr>
                        </thead>
                        <tbody className='divTableBody table-body-shadow salon-pay-sidebar-scroll'>
                            {val.map((item, index) => (
                                <tr key={index}>
                                    <td className="bodyTableCell">{(page - 1) * itemsPerPage + index + 1}</td>
                                    <td className="bodyTableCell">{item.coursename}</td>
                                    <td className="bodyTableCell">{item.content_id?.content || ""}</td>
                                    <td className="bodyTableCell">{item.content_id?.duration || ""}</td>
                                    <td className="bodyTableCell">
                                        <Link to={`/updatecontent/${item.content_id?._id || ""}`}><i className="ri-settings-5-line veiw_icon "></i></Link>
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
                    <Link className="prev page-numbers" to="" onClick={handlePreviousPage}><span aria-hidden="true"><i className="fas fa-chevron-left"></i></span></Link>
                    {pageNumbers.map((pageNumber) => (
                        <Link
                            key={pageNumber}
                            className={`page-numbers ${pageNumber === page ? 'active' : ''}`}
                            to=""
                            onClick={() => setPage(pageNumber)}
                        >
                            {pageNumber}
                        </Link>
                    ))}
                    <Link className="next page-numbers" to="" onClick={handleNextPage}><span aria-hidden="true"><i className="fas fa-chevron-right"></i></span></Link>
                </div>
            </div>
        </div>
    );
}

export default Viewcontent;