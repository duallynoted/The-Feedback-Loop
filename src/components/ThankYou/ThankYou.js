import React, { Component } from 'react';
import { connect } from 'react-redux';


class ThankYou extends Component {

    handleClick = (event) => {
        event.preventDefault();
        this.props.history.push('/start');
    }
    render() {
        return (
            <div>
                <h1>Thank You!</h1>
                <button onClick={this.handleClick}>Leave New Feedback</button>
            </div>

        );
    }
}

const mapReduxStatetoProps = reduxState => {
    return {
        feedbackReducer: reduxState.feedbackReducer,
    }
}
export default connect()(ThankYou );
