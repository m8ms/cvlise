import React from 'react';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';

class FormField extends React.Component {

    static defaultProps = {
        value: ''
    };

    constructor(props) {
        super(props);


        this.state = {
            value: this.props.value
        }
    }

    handleChange = (e) => {
        this.props.onChange(this.props.name, e.target.value);
        this.setState({value: e.target.value});
    };

    render() {

        const {value, onChange, ...other} = this.props;

        return (
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <TextField
                    {...other}
                    onChange={this.handleChange}
                    value={this.state.value}
                    fullWidth
                    />
            </Grid>
        )
    }
}


export default FormField;
