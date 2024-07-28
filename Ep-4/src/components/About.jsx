import React, { useEffect, useState } from 'react'
import ClassCompo from './ClassCompo';

const About = () => {
    const [data, setData] = useState("")
    const URL = "https://api.github.com/users/harishkgit9640";

    useEffect(() => {
        fetchApiData();
    }, []);

    const fetchApiData = async () => {
        const res = await fetch(URL);
        const resData = await res?.json();
        setData(resData);
    }

    return (
        <div className="about-page">
            <h1> Name : {data?.name} </h1>
            <h1> Designation : {data.bio} </h1>
            <h2> Location : {data.location}  </h2>
            <img src={data.avatar_url} alt="user-img" width={150} />
            {/* <ClassCompo name={data?.name} count2='05' /> */}
        </div>
    )
}

export default About