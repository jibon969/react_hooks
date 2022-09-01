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
                                        <th scope="row" key={data.id}>{data.id}</th>
                                        <td className="text-center">{data.name}</td>
                                        <td className="text-center">{data.dept}</td>
                                        <td className="text-center">{data.roll}</td>
                                        <td className="text-center">
                                            <button className="btn btn-info mx-2">Edit</button>
                                            <button className="btn btn-warning">Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default StudentList;