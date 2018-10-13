import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'; 

const styles = {
    card: {
      maxWidth: 150,
      minWidth: 100,
      display:"inline-block",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  };

class Feeling extends Component {
state = {
    feeling: '',
}

    handleFeelingChange = (event) => {
      this.setState({
          feeling:event.target.value,
      })
    };
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_FEELING', payload: this.state.feeling })
        this.props.history.push('/understanding')
    }
    render() {
        const { classes } = this.props;
        return (
            <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          
        </Typography>
        <Typography variant="h5" component="h2">
        <div>
                <form onSubmit={this.handleSubmit} method="get" action="/#/understanding">
                <input autoFocus type="number" value={this.state.feeling} onChange={this.handleFeelingChange} placeholder="How are you feeling?" />
                <input type="submit" value="NEXT" />
                </form>
            </div>
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        
        </Typography>
        <Typography component="p">
    
          <br />
        </Typography>
      </CardContent>
      <CardActions>
      
        <Button color="primary" size="small">yum</Button>
      </CardActions>
    </Card>
            

        );
    }
}
Feeling.propTypes = {
    classes: PropTypes.object.isRequired,
  };

const feelingCard = withStyles(styles)(Feeling);


const mapReduxStatetoProps = reduxState => {
    return {
        feedbackReducer: reduxState.feedbackReducer,
    }
}
export default connect(mapReduxStatetoProps)(feelingCard);

// import React, {Component} from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

// const styles = {
//   card: {
//     maxWidth: 150,
//     minWidth: 100,
//     display:"inline-block",
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
// };


// class SnackList extends Component {

//   render(){
//     const { classes } = this.props;
//   return (
    // <Card className={classes.card}>
    //   <CardContent>
    //     <Typography className={classes.title} color="textSecondary" gutterBottom>
          
    //     </Typography>
    //     <Typography variant="h5" component="h2">
    //     {this.props.item}
    //     </Typography>
    //     <Typography className={classes.pos} color="textSecondary">
    //       Calories: 240
    //     </Typography>
    //     <Typography component="p">
    //       A moment on the lips, then it's in my belly.
    //       <br />
    //     </Typography>
    //   </CardContent>
    //   <CardActions>
      
    //     <Button color="primary" size="small">yum</Button>
    //   </CardActions>
    // </Card>
//   );
// }
// }

// SnackList.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// const snackListCards = withStyles(styles)(SnackList);

// const mapReduxStateToProps = (reduxState) => {
//   return {
//     reduxState,
//   }
// }

// export default connect(mapReduxStateToProps)(snackListCards);



