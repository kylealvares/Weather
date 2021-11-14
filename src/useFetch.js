import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const abortController = new AbortController();

        fetch(url, { signal: abortController.signal })
            .then(resp => {
                if (!resp.ok) {
                    throw Error('Unable to fetch data.');
                }
                return resp.json();
            })
            .then((data) => {
                setIsPending(false);
                setData(data);
                setError(null);
            })
            .catch(err => {
                if(err.name === 'AbortError') {
                    console.log('fetch aborted')
                } else {
                    setIsPending(false);
                    setError(err.message);
                }
            });
        
        return () => abortController.abort();

    }, [url]);

    return { data, isPending, error };
}

export default useFetch;