import { useEffect, useState } from "react";

const useFetchApi = function () {
    const [data, setData] = useState([])
    useEffect(() => {
        fetchApiData();
    }, []);

    const fetchApiData = async () => {
        const res = await fetch("https://api.freeapi.app/api/v1/public/meals?page=1&limit=10");
        const resData = await res.json();
        setData(resData?.data?.data)
    }
    return data;
}

export default useFetchApi;