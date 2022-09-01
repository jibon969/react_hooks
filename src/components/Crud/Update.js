import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom/index";

const UpdateList = () => {
    const [name, setName] = useState('');
    const [dept, setDept] = useState('');
    const [roll, setRoll] = useState('');
    const {id } = useParams();


    // console.log(id);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/student-list/${id}/`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setName(data.name);
                setDept(data.dept);
                setRoll(data.roll)
            })
    }, []);


    // POST
    const updateStudent = (event) => {


        event.preventDefault();
        let data = {name, dept, roll};
        fetch(`http://127.0.0.1:8000/api/update-student/${id}/`, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then((res) => {
            setName(res.name);
            setDept(res.dept);
            setRoll(res.roll);
        })
            .catch((err) => {
                console.log(err.message)
            })

    };


    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    <h3>Update Student</h3>
                    <hr/>
                    <div className="col">
                        <form>
                            <input
                                type="text"
                                className="form-control mb-3"
                                placeholder="Name"
                                name="name"
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value)
                                }}
                            />
                            <input
                                type="text"
                                className="form-control mb-3"
                                placeholder="dept .."
                                name="dept"
                                value={dept}
                                onChange={(e) => {
                                    setDept(e.target.value)
                                }}
                            />
                            <input
                                type="number"
                                className="form-control mb-3"
                                placeholder="Roll"
                                name="roll"
                                value={roll}
                                onChange={(e) => {
                                    setRoll(e.target.value)
                                }}
                            />
                            <button className="btn btn-success" onClick={updateStudent} >Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default UpdateList;