import React from 'react';
import Grid from 'material-ui/Grid';

import FormField from '../components/FormField';

class Form extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            names: '',
            email: '',
            phone: '',
            address: '',
            website: '',
            jobName: ''
        };
        window.getState = () => {
            console.log(this.state);
        }
    }

    getFieldValue = (fieldName, value) => {
        console.log('here', fieldName, value);
        const state = {};
        state[fieldName] = value;
        this.setState(state);
    };


    render() {
        return (
            <form className="cv-form" autoComplete="off">
                <h2>Cześć!</h2>

                <p>Wpisz dane i siup.</p>

                <h3>Podstawy</h3>
                <section className="cv-form__section">
                    <Grid container spacing={24}>

                        <FormField
                            label="Imię i nazwisko"
                            value={this.state.name}
                            name="name"
                            onChange={this.getFieldValue}
                            />
                        <FormField
                            label="Adres e-mail"
                            value={this.state.email}
                            name="email"
                            onChange={this.getFieldValue}
                            />
                        <FormField
                            label="Telefon"
                            value={this.state.phone}
                            name="phone"
                            onChange={this.getFieldValue}
                            />
                        <FormField
                            label="Strona Internetowa"
                            value={this.state.website}
                            name="website"
                            onChange={this.getFieldValue}
                            />
                        <FormField
                            label="Stanowisko"
                            value={this.state.jobName}
                            name="jobName"
                            onChange={this.getFieldValue}
                            placeholder="...na które aplikujesz"
                            />
                        <FormField
                            label="Adres"
                            value={this.state.address}
                            name="address"
                            onChange={this.getFieldValue}
                            placeholder="użyj 'enter', by wpisać kilka linijek"
                            multiline
                            />
                    </Grid>
                </section>
            </form>
        )
    }
}

export default Form;
