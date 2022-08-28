import React, {useState, useEffect} from 'react'

const FetchDataWithUseEffect = () => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                return response.json();
            })
            .then((actualData) => {
                setData(actualData);
                setError(null);
            })
            .catch((err) => {
                setError(err.message);
                setData(null);
            })
            .finally(() => {
                setLoading(false);
            });

    }, []);

    return (
        <div>
            {
                loading && <div>A mount please ... </div>
            }
            {
                error && <div>{`There is Problem fetching the post data - ${error}`}</div>
            }


            <div style={{textAlign: "center"}}>
                <h2>Fetch Data with useEffect : </h2>
                <hr/>
                {
                    data && data.map((data) => (
                        <div key={data.id}>
                            <h4>{data.title}</h4>
                        </div>
                    ))
                }
            </div>

        </div>
    )
};

export default FetchDataWithUseEffect;