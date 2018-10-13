import React, { Component } from 'react';
import { connect } from 'react-redux';


class Feeling extends Component {
state = {
    feeling: '',
}

    handleFeelingChange = (event) => {
      console.log(event.target.value);
      this.setState({
          feeling:event.target.value,
      })
    };
    handleClick = () => {
        this.props.dispatch({ type: 'ADD_FEELING', payload: this.state.feeling })
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.feeling} onChange={this.handleFeelingChange} placeholder="How are you feeling?" />
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
export default connect()(Feeling);
