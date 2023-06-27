import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [name, setName] = useState('mario');
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        // const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url)
                .then(res => {
                    console.log(res);
                    if (!res.ok) {
                        throw Error('Could not find the fetch data');

                    }
                    return res.json();
                })
                .then(data => {
                    // console.log(data)
                    setData(data)
                    setIsPending(false)
                    setError(null)
                })
                .catch(err => {
                    setIsPending(false)
                    setError(err.message)
                })
        }, 1000)
        // return () => abortCont.abort()
    }, [url]);

    return { data, isPending, Error }
}

export default useFetch