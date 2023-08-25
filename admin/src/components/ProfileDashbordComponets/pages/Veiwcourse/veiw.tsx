import Table from 'react-bootstrap/Table';
import './veiwcourse.css'
import { useState, useEffect } from "react"
import axios from 'axios';


function VeiwCourse() {
    var [val, setval] = useState<any[]>([]);

    useEffect(() => {

        axios.get('http://localhost:5000/course/veiw_course')
            .then(function (response) {
                // handle success
                setval(response.data.data)
                console.log(response.data.data);

            })
            .catch(function (error) {
                console.log(error);
            })

    },[])


    return (
        <div className='veiw_sec'>
            <Table striped bordered hover className=' m-auto '>
                <thead>
                    <tr >
                        <th>Index</th>
                        <th>CourseName</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {val?.map((iteme,index) => (
                        <tr>
                            <td>{index+1}</td>
                            <td>{iteme.coursename}</td>
                            <td>Update button</td>
                            <td>Delete button</td>
                        </tr>

                    ))}

                </tbody>
            </Table>
        </div>
    );
}

export default VeiwCourse;