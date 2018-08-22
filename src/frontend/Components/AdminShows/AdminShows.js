import React from 'react';
import './AdminShows.css';
import { Redirect, Route, Switch } from "react-router-dom";
import AdminShowsAdd from './AdminShowsAdd/AdminShowsAdd.js';
import AdminShowsEdit from './AdminShowsEdit/AdminShowsEdit.js';
import AdminShowsList from './AdminShowsList/AdminShowsList.js';

export default function AdminShows({match}) {
    return (
            <Switch>
                <Route 
                    exact path={`${match.path}/list`}
                    render={(props) => {
                        return <AdminShowsList {...props} />
                    }}
                />
                <Route exact path={`${match.path}/add`} component={AdminShowsAdd} />
                <Route 
                    exact path={`${match.path}/edit/:id`} 
                    render={(props) => {
                        return <AdminShowsEdit {...props} />
                    }}
                />
                <Redirect from={`${match.path}`} to={`${match.path}/list`}/>
            </Switch>
    )
}




