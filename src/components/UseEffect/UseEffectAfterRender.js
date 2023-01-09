import React, {useState, useEffect} from 'react'

const UseEffectAfterRender = () => {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        document.title = `Count - ${count}`
    });

    // console.log("Count :", count);

    return (
        <div>

            <div style={{textAlign: "center"}}>
                <h2>Use Effect - After Render</h2>
                <hr/>
                <h4>Count : {count}</h4>
                <button onClick={() => setCount(count + 1)}>Increment</button>
            </div>
        </div>
    )
};

export default UseEffectAfterRender;