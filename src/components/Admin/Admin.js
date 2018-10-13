import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Admin extends Component {
state = {
    feedback: [],
}

//this will get feedback info from the database for use by the administrator(s)
getFeedback = () => {
    axios({
        method:'GET',
        url:'/feedback'
    }).then((response) => {
        this.setState({
            feedback: [...response.data]
        });
    }).catch((error) => {
        alert('Error getting feedback from server')
        console.log('error', error);
    });//end GET call to server
};//end getFeedback

deleteFeedback = (feedbackToDelete) => {
    axios({
      method:'DELETE',
      url:'/feedback',
      params: feedbackToDelete
    }).then((response) =>{
    console.log('deleted: ', response.data);
    this.getFeedback();
  }).catch((error) =>{
    alert('Error deleting feedback');
    console.log('error', error);    
  })
};//end delete feedback


componentDidMount () {
    this.getFeedback();
}
    render() {
      return (
        <div>
        <table>
          <thead>
            <tr>
              <th>Feeling</th>
              <th>Understanding</th>
              <th>Support</th>
              <th>Comments</th>
              <th>Delete</th>
            </tr>
            {this.state.feedback.map((item) => {
              return (<tr key={item.id}>
                <td>{item.feeling}</td>
                <td>{item.understanding}</td>
                <td>{item.support}</td>
                <td>{item.comments}</td>
                <td><button onClick={()=>this.deleteFeedback(item)}>Delete</button></td>
              </tr>)
            })}
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
      );
    }
  }

export default connect()(Admin);
