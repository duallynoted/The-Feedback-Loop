import React, { Component } from 'react';
import { connect } from 'react-redux';


class Support extends Component {
state = {
    support: '',
}

    handleFeelingChange = (event) => {
      console.log(event.target.value);
      this.setState({
          support:event.target.value,
      })
    };
    handleClick = () => {
        this.props.dispatch({ type: 'ADD_SUPPORT', payload: this.state.support })
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.support} onChange={this.handleFeelingChange} placeholder="Feeling supported?" />
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
export default connect()(Support);
