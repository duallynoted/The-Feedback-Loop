import React, { Component } from 'react';
import { connect } from 'react-redux';


class Understanding extends Component {
state = {
    understanding: '',
}

    handleFeelingChange = (event) => {
      console.log(event.target.value);
      this.setState({
          understanding:event.target.value,
      })
    };
    handleClick = () => {
        this.props.dispatch({ type: 'ADD_UNDERSTANDING', payload: this.state.understanding })
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.understanding} onChange={this.handleFeelingChange} placeholder="Get the material?" />
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
export default connect()(Understanding);
