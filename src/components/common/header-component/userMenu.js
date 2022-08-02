import React, { Fragment, useState, useEffect } from 'react';
import man from '../../../assets/images/dashboard/user.png'
import { User, Mail, Lock, Settings, LogOut, Smile } from 'react-feather';
import {firebase_app} from "../../../data/config";
import { Link, useNavigate } from 'react-router-dom';
import {useAuth0} from '@auth0/auth0-react'
import {EditProfile,Inbox,LockScreen} from '../../../constant'

import { createCheckoutSession } from '../../../stripe/createCheckoutSession';

const UserMenu = () => {

    const showMe = true;

    const [profile, setProfile] = useState('');
    // auth0 profile
    const {logout} = useAuth0()
    const authenticated = JSON.parse(localStorage.getItem("authenticated"))
    const auth0_profile = JSON.parse(localStorage.getItem("auth0_profile"))
    const navigate  = useNavigate();

    useEffect(() => {
        setProfile(localStorage.getItem('profileURL') || man);
    }, []);

    const Logout_From_Firebase = () => {
        console.log("Logout_From_Firebase call");
        localStorage.removeItem('profileURL')
        localStorage.removeItem('token');
        firebase_app.auth().signOut()
        navigate(`/login`)
    }

    const  Logout_From_Auth0 = () =>  {
        localStorage.removeItem("auth0_profile")
        localStorage.setItem("authenticated",false)
        navigate(`/login`)
        logout()
    }
    
   // const userId = firebase_app.auth().currentUser.uid;

    return (
        <Fragment>
            <li className="onhover-dropdown">
                <div className="d-flex align-items-center">
                    <img className="align-self-center pull-right img-50 rounded-circle blur-up lazyloaded" src={authenticated ? auth0_profile.picture : profile} alt="header-user" />
                    
                    { showMe ?
                    <div className="dotted-animation">
                        <span className="animate-circle"></span>
                        <span className="main-circle"></span>
                    </div>
                    : ''}
                  
                </div>
                <ul className="profile-dropdown onhover-show-div p-20 profile-dropdown-hover">
                    <li><Link to={`${process.env.PUBLIC_URL}/users/userEdit`}><User />{EditProfile}</Link></li>
                    <li><Link to={`${process.env.PUBLIC_URL}/email-app/emailDefault`}><Mail />{Inbox}</Link></li>
                    <li><a href="#javascript"><Lock />{LockScreen}</a></li>
                    <li><a href="#javascript"><Settings />{"Settings"}</a></li>
                    <li><a onClick={authenticated ? Logout_From_Auth0 : Logout_From_Firebase} href="/login" ><LogOut /> {"Log out"}</a></li>
                    {/* <li><a onClick={() => createCheckoutSession(userId)}>Upgrade to premium!</a></li> */}
                    <li><Link to={`/pricing`}><Smile />Upgrade to premium!</Link></li>
                </ul>
            </li>
        </Fragment>
    );
};


export default UserMenu;