import React, {useState} from 'react'

const UseSate = () => {

    const [count, setCount] = useState(0);

    return (
        <div>

            <div style={{textAlign: "center"}}>
                <h2>How react use state works</h2>
                <hr/>
                <h4>Count : {count}</h4>
                <button onClick={() => setCount(count + 1)}>Increment</button>
            </div>
        </div>
    )
};

export default UseSate;