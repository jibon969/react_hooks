import React, {useState} from 'react'

const PrevState = () => {

    const [count, setCount] = useState(0);

    const incrementTen = () =>{
        for (let i = 0; i < 10; i++){
            setCount(prevState => prevState + 1)
        }
    };

    return (
        <div>

            <div style={{textAlign: "center"}}>
                <h2>Use state hook with prev state</h2>
                <hr/>
                <h4>Count : {count}</h4>
                <button onClick={() => incrementTen()}>Increment</button>
            </div>
        </div>
    )
};

export default PrevState;