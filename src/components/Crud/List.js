import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

const StudentList = () => {

    const [student, setStudent] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(
                    `http://127.0.0.1:8000/api/student-list/`
                );
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                let actualData = await response.json();
                setStudent(actualData);
                setError(null);
            } catch (err) {
                setError(err.message);
                setStudent(null);
            } finally {
                setLoading(false);
            }
        };
        getData()
    }, []);


    // Get single data

    const getSingleData = (id) => {
        fetch(`http://127.0.0.1:8000/api/update-student/${id}/`)
            .then((response) => response.json())
            .then((actualData) => setStudent(actualData))
            .catch((err) => {
                console.log(err.message)
            });
    };


    // Delete user
    const deleteStudent = (id) => {
        fetch(`http://127.0.0.1:8000/api/delete-student/${id}/`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        }).then((remove) => console.log("removed :", remove))
            .catch((err) => {
                console.log(err.message)
            })

    };

    return (
        <div>
            <div className="container my-5">
                <h3>Student List</h3>
                <hr/>
                <div className="row">
                    <div className="col-md-2 mb-1">
                        <Link to="/add" className="btn btn-info mb-2">Add New</Link>
                    </div>
                    <div className="col-md-8 mb-1"/>
                    <div className="col-md-2 mb-1">
                        <form action="#">
                            <input type="text" placeholder="Search Here" className="form-control"/>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <table className="table table table-striped table-bordered">
                            <thead className="bg-dark text-white">
                            <tr>
                                <th scope="col" className="text-center">ID</th>
                                <th scope="col" className="text-center">Name</th>
                                <th scope="col" className="text-center">Dept</th>
                                <th scope="col" className="text-center">Roll</th>
                                <th scope="col" className="text-center">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                student.map((data) => (
                                    <tr>
                                        <th scope="row" className="text-center" key={data.id}>{data.id}</th>
                                        <td className="text-center">{data.name}</td>
                                        <td className="text-center">{data.dept}</td>
                                        <td className="text-center">{data.roll}</td>
                                        <td className="text-center">
                                            <Link to={`/update/${data.id}`} className="btn btn-info mx-2">Edit</Link>
                                            <button
                                                className="btn btn-danger"
                                                onClick={() => deleteStudent(data.id)}>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }

                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div style={{float: "right"}}>
                            <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                    <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default StudentList;