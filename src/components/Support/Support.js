import React, { Component } from 'react';
import { connect } from 'react-redux';


class Support extends Component {
state = {
    support: '',
}

    handleFeelingChange = (event) => {
      this.setState({
          support:event.target.value,
      })
    };
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_SUPPORT', payload: this.state.support });
        this.props.history.push('/comments');
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} method="get" action="/#/comments">
                <input type="number" value={this.state.support} onChange={this.handleFeelingChange} placeholder="Feeling supported?" />
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
export default connect()(Support);
