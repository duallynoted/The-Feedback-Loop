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

class Support extends Component {
state = {
    support: '',
}

    handleSupportChange = (event) => {
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
                                    label="Do you feel supported?"
                                    type="number"
                                    className={classes.textField}
                                    value={this.state.support}
                                    onChange={this.handleSupportChange}
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
                        If you need help, do you feel comfortable seeking and finding it?
                    </Typography>
                </CardContent>
            </Card>


        );
    }
}

Support.propTypes = {
    classes: PropTypes.object.isRequired,
};

const supportCard = withStyles(styles)(Support);


const mapReduxStatetoProps = reduxState => {
    return {
        feedbackReducer: reduxState.feedbackReducer,
    }
}
export default connect(mapReduxStatetoProps)(supportCard);
