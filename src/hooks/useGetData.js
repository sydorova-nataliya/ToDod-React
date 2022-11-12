import { useEffect, useState } from "react"

const useGetData=(url)=>{
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true);
    fetch(url)
        .then(res=>res.json())
        .then(data=>setData(data))
        .catch(error=>setError(error))
        .finally(()=> setLoading(false))
    },[])

    return{
        data,
        error,
        loading
    }
}

export default useGetData;