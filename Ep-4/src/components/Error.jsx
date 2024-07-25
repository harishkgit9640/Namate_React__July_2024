import React from 'react'
import { useRouteError } from 'react-router-dom'
const Error = () => {
    const error = useRouteError();
    // console.log(error);
    return (
        <div> Ops! {error.status} {error.data} . SOMETHING WENT WRONG! </div>
    )
}

export default Error