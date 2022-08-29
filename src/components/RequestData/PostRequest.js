import React, {useState} from "react";

const PostRequest = () => {

    const [subject, setSubject] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [isPending, setPending] = useState(false);

    const onClickFormHandler = () => {
        let data = {subject, name, phone, message};
        setPending(true);
        fetch("http://127.0.0.1:8000/contact/", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then((resp) => {
            resp.json().then(() => {
                setSubject('');
                setName('');
                setPhone('');
                setMessage('');
                setPending(false);
            })
        })
    };

    return (
        <>
            <div className="contentSection">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 mt-5">
                            <div className="card">
                                <div className="card-body">
                                    <form>
                                        <input type="text" name="subject" className="form-control mb-3" placeholder="Subject" value={subject}
                                               onChange={(e) => {
                                                   setSubject(e.target.value)
                                               }}/>
                                        <input type="text" name="name" className="form-control mb-3" placeholder="Name" value={name}
                                               onChange={(e) => {
                                                   setName(e.target.value)
                                               }}/>
                                        <input type="text" name="phone" className="form-control mb-3" placeholder="Phone" value={phone}
                                               onChange={(e) => {
                                                   setPhone(e.target.value)
                                               }}/>
                                        <input type="text" name="message" className="form-control mb-3" placeholder="Subject" value={message}
                                               onChange={(e) => {
                                                   setMessage(e.target.value)
                                               }}/>
                                        {!isPending && <button type="button" className="btn btn-primary" onClick={onClickFormHandler}>Add Contact</button>}
                                        {isPending && <button type="button" className="btn btn-primary" disabled>Adding .......</button>}

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PostRequest;
