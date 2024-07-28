import React from 'react'

class ClassCompo extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0,
        }
    }
    componentDidMount() {
        console.log("ClassCompo didMount");
    }

    componentDidUpdate() {

    }

    render() {

        const { count } = this.state;
        const { count2, name } = this.props;

        console.log("count: " + count);

        return (
            <>
                <h1> this is {name} </h1>
                <h2> count1 is : {count} </h2>
                <h2> count2 is : {count2} </h2>
                <button onClick={() => this.setState({ count: this.state.count + 1 })} > Increase your Count </button>
            </>
        )
    }

}



export default ClassCompo