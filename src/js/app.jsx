import React from 'react';
import ReactDOM from 'react-dom';
import {
    Switch,
    Route,
    BrowserRouter as Router
} from 'react-router-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import CssBaseline from 'material-ui/CssBaseline';

import theme from './cfg/muiTheme';
import AppHeader from './components/AppHeader';
import Form from './pages/Form';

import '../sass/main.scss';


ReactDOM.render(
    <Router>
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <div className="app-wrap">
                <AppHeader/>
                <div className="app-content">
                    <Switch>
                        <Route path="/form" component={Form}/>
                    </Switch>
                </div>
            </div>
        </MuiThemeProvider>
    </Router>
    ,
    document.getElementById('app')
);

