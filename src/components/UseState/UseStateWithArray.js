import React, {useState} from 'react'

const UseStateWithArray = () => {

    const [list, setList] = useState([]);

    const generateList = () =>{
        setList([...list,{
            id:list.length,
            value:Math.random(),
            text :"I am random data"
        }])
    };

    return (
        <div>
            <div style={{textAlign: "center"}}>
                <h2>Use state hook with Array</h2>
                <hr/>
                <ul>
                    {
                        list.map(list=>{
                            return <li>{list.id} - {list.value} - {list.text}</li>
                        })
                    }
                </ul>
                <button onClick={generateList}>Generate List</button>
            </div>
        </div>
    )
};

export default UseStateWithArray;