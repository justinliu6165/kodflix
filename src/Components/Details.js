import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Details extends Component {
    state = {
        message: 'Hello, this will be the details page for each Movie and TV show :)'
    }

    componentDidMount(){
        setTimeout(
            function() {
                this.setState({message: 'Coming Soon!'});
            }
            .bind(this),
            3000
        );
    }


    render() {
        const style = {
            color: 'yellow',
            margin: '0 auto',
            width: '50%',
            textAlign: 'center'
        }

        return (
            <div style={style}>
                <h2 onClick={this.TimeIntervalHandler}>{this.state.message}</h2><br/>
                <Link to="/">Home</Link>
            </div>
        );
    }
}

export default Details;