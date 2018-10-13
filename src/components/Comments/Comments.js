import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';


class Comments extends Component {
state = {
    comments: '',
}

sendFeedback = (feedback) => {
  axios({
      method:'POST',
      url:'/feedback',
      data: feedback
  }).then((response)=>{
      console.log(response.data);      
  }).catch((error) => {
      alert('Error sending feedback');
      console.log('error', error);      
  });//end axios POST  
};//end sendFeedback


    handleFeelingChange = (event) => {
      this.setState({
          comments:event.target.value,
      })
    };
    handleSubmit = async (event) => {
        event.preventDefault();
        await this.props.dispatch({ type: 'ADD_COMMENTS', payload: this.state.comments });
        this.sendFeedback(this.props.feedbackReducer);
        this.props.history.push('/thankYou'); //make thank you page and change this
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
export default connect(mapReduxStatetoProps)(Comments);
