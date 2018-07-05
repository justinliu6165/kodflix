import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Details extends Component {
    constructor() {
        super()
        this.state = {
            message: 'Hello, this will be the details page for each Movie & TV show :)'
        }
    }



    componentDidMount() {
        setTimeout(() => this.setState({ message: 'Coming Soon :)!' }),
            3000
        );
    }


    render() {
        const style = {
            color: 'orange',
            margin: '0 auto',
            width: '50%',
            textAlign: 'center'
        }

        return (
            <div style={style}>
                <h2>{this.state.message}</h2>
                <Link to="/">Home</Link>
            </div>
        );
    }
}

export default Details;