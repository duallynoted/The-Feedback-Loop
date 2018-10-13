import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'; 


class Feeling extends Component {
state = {
    feeling: '',
}

    handleFeelingChange = (event) => {
      this.setState({
          feeling:event.target.value,
      })
    };
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_FEELING', payload: this.state.feeling })
        this.props.history.push('/understanding')
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} method="get" action="/#/understanding">
                <input type="text" value={this.state.feeling} onChange={this.handleFeelingChange} placeholder="How are you feeling?" />
                <input type="submit" value="NEXT" />
                </form>
            </div>

        );
    }
}

const mapReduxStatetoProps = reduxState => {
    return {
        feedbackReducer: reduxState.feedbackReducer,
    }
}
export default connect()(Feeling);
