import React, { Component } from 'react';
import { connect } from 'react-redux';


class Comments extends Component {
state = {
    comments: '',
}

    handleFeelingChange = (event) => {
      console.log(event.target.value);
      this.setState({
          comments:event.target.value,
      })
    };
    handleClick = () => {
        this.props.dispatch({ type: 'ADD_COMMENTS', payload: this.state.comments })
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.comments} onChange={this.handleFeelingChange} placeholder="Anything else?" />
                <button onClick={this.handleClick}>Next</button>
            </div>

        );
    }
}

const mapReduxStatetoProps = reduxState => {
    return {
        feedbackReducer: reduxState.feedbackReducer,
    }
}
export default connect()(Comments);
