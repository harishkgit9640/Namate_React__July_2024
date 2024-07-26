import React from 'react'


class ClassCompo extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <h1> this is {this.props.name} </h1>
        )
    }

}



export default ClassCompo