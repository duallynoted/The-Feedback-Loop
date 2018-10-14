import React, { Component } from 'react';
import { connect } from 'react-redux';
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


class Understanding extends Component {
    state = {
        understanding: '',
    }

    handleUnderstandingChange = (event) => {
        this.setState({
            understanding: event.target.value,
        })
    };
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_UNDERSTANDING', payload: this.state.understanding })
        this.props.history.push('/support');
    }

    render() {
        const { classes } = this.props;
        return (
            <Card className={classes.card}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        <div>
                            <form className={classes.container} noValidate autoComplete="off">
                                <TextField
                                    autoFocus
                                    id="standard-name"
                                    label="How well did you understand today's material?"
                                    type="number"
                                    className={classes.textField}
                                    value={this.state.understanding}
                                    onChange={this.handleUnderstandingChange}
                                    margin="normal"
                                />
                                <Button
                                    color="secondary"
                                    className={classes.button}
                                    type="submit"
                                    title="NEXT"
                                    onClick={this.handleSubmit}
                                    margin="normal"
                                >NEXT</Button>
                            </form>
                        </div>
                    </Typography>
                </CardContent>

            </Card>


        );
    }
}

Understanding.propTypes = {
    classes: PropTypes.object.isRequired,
};

const understandingCard = withStyles(styles)(Understanding);


const mapReduxStatetoProps = reduxState => {
    return {
        feedbackReducer: reduxState.feedbackReducer,
    }
}
export default connect(mapReduxStatetoProps)(understandingCard);