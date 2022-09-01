import React, {useState} from "react";

const AddStudent = () => {

    const [name, setName] = useState('');
    const [dept, setDept] = useState('');
    const [roll, setRoll] = useState('');

    // POST
    const addStudent = (event) => {
        event.preventDefault();
        let data = {name, dept, roll};
        fetch(`http://127.0.0.1:8000/api/add-student/`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then((res) => console.log("adding ....", res))
            .catch((err) => {
                console.log(err.message)
            })

    };

    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    <h3>Add Student</h3>
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
                                placeholder="Department"
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
                            <button className="btn btn-success" onClick={addStudent}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AddStudent;