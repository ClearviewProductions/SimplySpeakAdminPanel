import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { firebase_app } from '../data/config';
import { authHeader, handleResponse } from '../services/fack.backend';

const PrivateRoute = () => {
    const [currentUser, setCurrentUser] = useState(false);
    const [authenticated,setAuthenticated] = useState(false)
    const jwt_token = localStorage.getItem('token');

    useEffect(() => {
        const abortController = new AbortController();
        const requestOptions = { method: 'GET', headers: authHeader() };
        fetch('/users', requestOptions).then(handleResponse)
        firebase_app.auth().onAuthStateChanged(setCurrentUser);
        setAuthenticated(JSON.parse(localStorage.getItem("authenticated")))
      
        return function cleanup() {
            abortController.abort();
        }
    }, []);

    return (
        currentUser !== null || authenticated || jwt_token  ? <Outlet /> : <Navigate to={`/login`} />);
}

export default PrivateRoute;

