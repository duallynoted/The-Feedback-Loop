import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import swal from 'sweetalert';


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

class Admin extends Component {
  state = {
    feedback: [],
  }

  //this will get feedback info from the database for use by the administrator(s)
  getFeedback = () => {
    axios({
      method: 'GET',
      url: '/feedback'
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
    swal({
      title: "Are you sure you want to delete this feedback?",
      text: "This feedback cannot be recovered once deleted.",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          axios({
            method: 'DELETE',
            url: '/feedback',
            params: feedbackToDelete
          }).then((response) => {
            console.log('deleted: ', response.data);
            this.getFeedback();
          }).catch((error) => {
            alert('Error deleting feedback');
            console.log('error', error);
          })//end axios DELETE
          swal("Feedback deleted successfully", {
            icon: "success",
          });
        } else {
          swal("Return to Administrator page");
        }
      });
  }//end deleteFeedback


  componentDidMount() {
    this.getFeedback();
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell numeric>Feeling</TableCell>
                <TableCell numeric>Understanding</TableCell>
                <TableCell numeric>Support</TableCell>
                <TableCell >Comments</TableCell>
                <TableCell >Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.feedback.map((item) => {
                return (
                  <TableRow key={item.id}>
                    <TableCell numeric>{item.feeling}</TableCell>
                    <TableCell numeric>{item.understanding}</TableCell>
                    <TableCell numeric>{item.support}</TableCell>
                    <TableCell >{item.comments}</TableCell>
                    <TableCell ><Button onClick={() => this.deleteFeedback(item)}
                      color="secondary">Delete</Button></TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

Admin.propTypes = {
  classes: PropTypes.object.isRequired,
};

const adminTable = withStyles(styles)(Admin);

export default connect()(adminTable);



