import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SignIn from "../Component/SignIn";
import SignUp from "../Component/SignUp";
import Dashboard from '../Component/Dashboard';

function Router() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={SignIn} />
                    <Route path="/SignUp" component={SignUp} />
                    <Route path="/Dashboard" component={Dashboard} />
                 
                </Switch>
            </BrowserRouter>
        </>
    )
}
export default Router;