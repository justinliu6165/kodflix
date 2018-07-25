import React from 'react';
import './AdminShows.css';
import { Redirect, Route, Switch, BrowserRouter as Router } from "react-router-dom";
import AdminShowsAdd from './AdminShowsAdd/AdminShowsAdd.js';
import AdminShowsEdit from './AdminShowsEdit/AdminShowsEdit.js';
import AdminShowsList from './AdminShowsList/AdminShowsList.js';

export default function AdminShows({match}) {
    return (
        <Router>
            <Switch>
                <Route path={`${match.path}/list`} component={AdminShowsList} />
                <Route path={`${match.path}/add`} component={AdminShowsAdd} />
                <Route path={`${match.path}/edit`} component={AdminShowsEdit} />
                <Redirect from={`${match.path}`} to={`${match.path}/list`}/>
            </Switch>
        </Router>
    )
}




