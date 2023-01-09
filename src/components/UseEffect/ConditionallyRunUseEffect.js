import React, {useState, useEffect} from 'react'

const ConditionallyRunUseEffect = () => {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        console.log("Use Effect Run ");
        document.title = `Count - ${count}`
    },[count]);

    // console.log("Count :", count);

    return (
        <div>

            <div style={{textAlign: "center"}}>
                <h2>Conditionally Run UseEffect</h2>
                <hr/>
                <input type="text" value={name}
                       onChange={e => setName(e.target.value)}
                />
                <h3>Name is : {name}</h3>
                <h4>Count : {count}</h4>
                <button onClick={() => setCount(count + 1)}>Increment</button>
            </div>
        </div>
    )
};

export default ConditionallyRunUseEffect;