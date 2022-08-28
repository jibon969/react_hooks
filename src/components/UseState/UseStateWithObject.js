import React, {useState} from 'react'

const UseStateWithObject = () => {
    const [info, setInfo] = useState({
        name: "",
        id: null,
    });
    return (
        <div>
            <div style={{textAlign: "center"}}>
                <h2>Use state hook with object</h2>
                <hr/>
                <h4>Name is : {info.name}</h4>
                <h4>ID is : {info.id}</h4>
                <form action="#">
                    <input type="text"
                           placeholder="Enter your name .."
                           value={info.name}
                           onChange={(e) =>setInfo({...info, name:e.target.value})}
                    />
                    <br/>
                    <br/>
                    <input type="number"
                           placeholder="Enter your id .."
                           value={info.id}
                           onChange={(e) =>setInfo({...info, id:e.target.value})}
                    />
                </form>
            </div>
        </div>
    )
};

export default UseStateWithObject;