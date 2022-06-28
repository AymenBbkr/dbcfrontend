import React, { Component } from 'react';
import ReactDOM from 'react-dom';




import './main.scss';


import Demo from './demo/Demo';

import Home from './pages/Home';

import Badge from './pages/Badge';
import Group from './pages/Group';
import Member from './pages/Member';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import Account from './pages/Account';
import Contactinfo from './pages/Contactinfo';
import Socialaccount from './pages/Socialaccount';
import Password from './pages/Password';
import Notification from './pages/Notification';
import Login from './pages/Login';
import Register from './pages/Register';
import Forgot from './pages/Forgot';
import Notfound from './pages/Notfound';
import Event from './pages/Event';
import Grouppage from './pages/Grouppage';
import Userpage from './pages/Userpage';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Maps from './pages/Maps';
import ProfileInfo from './pages/ProfileInfo';
import Postview from './components/Postview';
import ProfilecardOne from './components/ProfilecardOne';
import UserProfile from './pages/UserProfile';

class Root extends Component{
  render(){
      return(
          <BrowserRouter basename={'/'}>
              <Switch>
                    {/* <Route exact path={`${process.env.PUBLIC_URL}/`} component={Demo}/> */}
                    <Route exact path={`${process.env.PUBLIC_URL}/UserProfile/:id`} component={UserProfile}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/ProfilecardOne`} component={ProfilecardOne}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/`} component={Badge}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/Home`} component={Home}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/profileinfo/`} component={ProfileInfo}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/connections`} component={Badge}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/defaultgroup`} component={Group}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/map`} component={Maps}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/profile`} component={Profile}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/setting`} component={Settings}/>
                    
                    
                    <Route exact path={`${process.env.PUBLIC_URL}/accountinformation`} component={Account}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/defaultmember`} component={Member}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/contactinformation`} component={Contactinfo}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/socialaccount`} component={Socialaccount}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/password`} component={Password}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/defaultnoti`} component={Notification}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/register`} component={Register}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/forgot`} component={Forgot}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/notfound`} component={Notfound}/>

                    <Route exact path={`${process.env.PUBLIC_URL}/defaultevent`} component={Event}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/grouppage`} component={Grouppage}/>
                    <Route exact path={`${process.env.PUBLIC_URL}/userpage`} component={Userpage}/>

                    
              </Switch>
          </BrowserRouter>
      )
  }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
serviceWorker.register();