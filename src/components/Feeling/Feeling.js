import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';


class Feeling extends Component {
    handleFeelingChange = (event) => {
      console.log(event.target.value);
      
    };
    handleClick = () => {
        this.props.dispatch({ type: 'ADD_FEELING', payload: this.props.reduxState })
    }
    render() {
        return (
            <div>
                <input type="text" value={this.props.reduxState} onChange={this.handleFeelingChange} placeholder="How are you feeling?" />
                <button onClick={this.handleClick}>Next</button>
            </div>

        );
    }
}

const mapReduxStatetoProps = reduxState => {
    return {
        customer: reduxState.customer,
    }
}
export default connect()(Feeling);
