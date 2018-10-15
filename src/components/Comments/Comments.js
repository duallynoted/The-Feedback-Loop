import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

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

class Comments extends Component {
    state = {
        comments: '',
    }

    sendFeedback = (feedback) => {
        axios({
            method: 'POST',
            url: '/feedback',
            data: feedback
        }).then((response) => {
            console.log(response.data);
        }).catch((error) => {
            alert('Error sending feedback');
            console.log('error', error);
        });//end axios POST  
    };//end sendFeedback


    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value,
        })
    };
    handleSubmit = async (event) => {
        event.preventDefault();
        await this.props.dispatch({ type: 'ADD_COMMENTS', payload: this.state.comments });
        this.sendFeedback(this.props.feedbackReducer);
        this.props.history.push('/thankYou'); 
    }
    render() {
        const { classes } = this.props;
        return (
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        <div>
                            <form className={classes.container} noValidate autoComplete="off">
                                {/* <TextField
                                    autoFocus
                                    id="standard-name"
                                    label=
                                    className={classes.textField}
                                    value={this.state.comments}
                                    onChange={this.handleCommentsChange}
                                    margin="normal"
                                /> */}
                                <TextField
                                    autoFocus
                                    id="outlined-textarea"
                                    label="Comments"
                                    placeholder="Anything else?"
                                    multiline
                                    className={classes.textField}
                                    onChange={this.handleCommentsChange}
                                    value={this.state.comments}
                                    margin="normal"
                                    variant="outlined"
                                />
                                <Button
                                    color="secondary"
                                    className={classes.button}
                                    type="submit"
                                    title="Submit!"
                                    onClick={this.handleSubmit}
                                    margin="normal"
                                >Submit!</Button>
                            </form>
                        </div>
                    </Typography>
                    <Typography>
                        Please make any additional comments you feel are necessary. 
                        This is to help you, so be honest; we can take it. 
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}


Comments.propTypes = {
    classes: PropTypes.object.isRequired,
};

const commentsCard = withStyles(styles)(Comments);


const mapReduxStatetoProps = reduxState => {
    return {
        feedbackReducer: reduxState.feedbackReducer,
    }
}
export default connect(mapReduxStatetoProps)(commentsCard);
