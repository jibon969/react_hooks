import React, {useState, useEffect} from "react";

const AsyncAwaitFetchData = () => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(
                    `https://jsonplaceholder.typicode.com/posts?_limit=10`
                );
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                let actualData = await response.json();
                setData(actualData);
                setError(null);
            } catch (err) {
                setError(err.message);
                setData(null);
            } finally {
                setLoading(false);
            }
        };
        getData()
    }, []);

    return (
        <>

            <div style={{textAlign: "center"}}>
                <h2>Using the async/await syntax</h2>
                <hr/>
                {
                    loading && <div>A mount please ... </div>
                }
                {
                    error && <div>{`There is Problem fetching the post data - ${error}`}</div>
                }


                {
                    data && data.map((data) => (
                        <div key={data.id}>
                            <h4>{data.title}</h4>
                        </div>
                    ))
                }
            </div>

        </>
    );
};

export default AsyncAwaitFetchData;
