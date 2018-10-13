import React, { Component } from 'react';
import { connect } from 'react-redux';


class Understanding extends Component {
state = {
    understanding: '',
}

    handleFeelingChange = (event) => {
      this.setState({
          understanding:event.target.value,
      })
    };
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_UNDERSTANDING', payload: this.state.understanding })
        this.props.history.push('/support');
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}method="get" action="/#/support">
                <input type="text" value={this.state.understanding} onChange={this.handleFeelingChange} placeholder="Get the material?" />
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
export default connect()(Understanding);
