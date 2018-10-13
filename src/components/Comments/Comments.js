import React, { Component } from 'react';
import { connect } from 'react-redux';


class Comments extends Component {
state = {
    comments: '',
}

    handleFeelingChange = (event) => {
      this.setState({
          comments:event.target.value,
      })
    };
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_COMMENTS', payload: this.state.comments });
        this.props.history.push('/admin'); //make thank you page and change this
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} method="get" action="/#/admin"> 
                <input type="text" value={this.state.comments} onChange={this.handleFeelingChange} placeholder="Anything else?" />
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
export default connect()(Comments);
