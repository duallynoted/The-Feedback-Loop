import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';


const styles = {
    card: {
        minHeight: 200,
        minWidth: 500,
        display: "inline-block",
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    button: {
        margin: 12,
    },
};

class ThankYou extends Component {

    handleClick = (event) => {
        event.preventDefault();
        this.props.history.push('/start');
    }
   
    render() {
        const { classes } = this.props;
        return (
            <div>
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                    <h2>Thank you for sharing!</h2>
                        <div>
                            <form className={classes.container} noValidate autoComplete="off">
                                <Button
                                    color="primary"
                                    className={classes.button}
                                    type="submit"
                                    title="Leave New Feedback"
                                    onClick={this.handleClick}
                                    margin="normal"
                                >Leave New Feedback</Button>
                            </form>
                        </div>
                    </Typography>
                </CardContent>
            </Card>
            </div>    
        );
    }
}

ThankYou.propTypes = {
    classes: PropTypes.object.isRequired,
};

const thankYouCard = withStyles(styles)(ThankYou);


const mapReduxStatetoProps = reduxState => {
    return {
        feedbackReducer: reduxState.feedbackReducer,
    }
}
export default connect(mapReduxStatetoProps)(thankYouCard);
