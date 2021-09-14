import React from 'react'
import { Switch } from 'react-router-dom'
import Route from "./Route"

import SignUp from '../pages/SingUp';
import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import Cadastro from '../pages/Cadastro';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={ SignIn }/>
        <Route path="/signup" component={ SignUp }/>
        <Route path="/dashboard" component={ Dashboard } isPrivate/>
        <Route path="/cadastro" component={Cadastro} isPrivate/>
    </Switch>
);

export default Routes;