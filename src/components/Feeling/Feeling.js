import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
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

class Feeling extends Component {
    state = {
        feeling: '',
    }

    handleFeelingChange = (event) => {
        this.setState({
            feeling: event.target.value,
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
            <div>
            <h1>The F E E D B A C K Loop</h1>
            <h3>Please use this form to let us know how you're progressing in the program.</h3>
            <h5>On a scale of 1-10, rate yourself in each field for how you did today. There is a section for comments at the end. </h5>   
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        <div>
                            <form className={classes.container} noValidate autoComplete="off">
                                <TextField
                                    autoFocus
                                    id="standard-name"
                                    label="Feeling"
                                    type="number"
                                    className={classes.textField}
                                    value={this.state.feeling}
                                    onChange={this.handleFeelingChange}
                                    margin="normal"
                                />
                                <Button  
                                    color="default" 
                                    className={classes.button}                    
                                    type="submit"
                                    title="NEXT"
                                    onClick={this.handleSubmit}
                                    margin="normal"
                                >NEXT</Button>                                
                            </form>
                        </div>
                    </Typography>
                    <Typography>
                        Are feeling stressed, great, or somewhere in-between?
                    </Typography>
                </CardContent>
            </Card>
            </div>
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
