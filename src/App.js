import React from 'react';
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";

import Header from './components/Header';
import Navbar from './components/Navbar';
import Dates from './components/Dates';
import Home from './components/Home';
import CallForPaper from './components/CallForPaper';
import Instruction from './components/Instruction';
import Presentations from './components/Presentations';
import Submission from './components/Submission';
import Deadlines from './components/Deadlines';
import Registration from './components/Registration';
import Organizers from './components/Organizers';
import Patrons from './components/Patrons';
import Committee from './components/Committee';
import Technical from './components/Technical';
import Venue from './components/Venue';
import Speakers from './components/Speakers';
import Accommodation from './components/Accommodation';
import Social from './components/Social';
import Awards from './components/Awards';
import styles from './App.module.scss';


function App() {
    return (
        <HashRouter basename='/'>
            <Header />
            <div className={styles['App']}>
                <div className={styles['left-container']}>
                    <Navbar />
                    <Organizers />
                </div>
                <div className={styles['main-container']}>
                    <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/committee' component={Committee} />
                    <Route exact path='/call_for_paper' component={CallForPaper} />
                    <Route exact path='/presentations' component={Presentations} />
                    <Route exact path='/instruction' component={Instruction} />
                    <Route exact path='/submission' component={Submission} />
                    <Route exact path='/deadlines' component={Deadlines} />
                    <Route exact path='/registration' component={Registration} />
                    <Route exact path='/speakers' component={Speakers} />
                    <Route exact path='/technical' component={Technical} />
                    <Route exact path='/venue' component={Venue} />
                    <Route exact path='/accommodation' component={Accommodation} />
                    <Route exact path='/social' component={Social} />
                    <Route exact path='/awards' component={Awards} />
                    <Route path="/:something" render={() => <Redirect to="/"></Redirect>} />
                    </Switch>
                    {/*<!-- <Redirect from="/" to="/" /> -->*/}
                </div>
                <div className={styles['right-container']}>
                    <Dates />
                    
                </div>
            </div>
            <div className={styles['footer']}></div>
        </HashRouter>
    );
}
export default App;
