import React from 'react';
import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import {
  authHeader,
  handleResponse,
  configureFakeBackend
} from '../services/fack.backend';
import configDB from '../data/customizer/config'
import PrivateRoute from './private-route';
import Signin from '../auth/signin';
import AppLayout from '../components/app';
import Login from '../pages/login';
import LoginWithBgImg from '../pages/loginWithBgImg';
import LoginWithVideo from '../pages/loginWithVideo';
import Signup from '../pages/signup';
import SignupWithImg from '../pages/signupWithImg';
import SignupWithVideo from '../pages/signupWithVideo';
import UnlockUser from '../pages/unlockUser';
import ForgetPwd from '../pages/forgetPwd';
import ResetPwd from '../pages/resetPwd';
import ComingSoon from '../pages/comingsoon';
import ComingSoonImg from '../pages/comingsoonImg';
import ComingSoonVideo from '../pages/comingsoonVideo';
import Maintenance from '../pages/maintenance';
import Error400 from '../pages/errors/error400';
import Error401 from '../pages/errors/error401';
import Error403 from '../pages/errors/error403';
import Error404 from '../pages/errors/error404';
import Error500 from '../pages/errors/error500';
import Error503 from '../pages/errors/error503';
import { routes } from './layouts-routes';
import Callback from '../auth/callback';
import VerifyEmail from '../auth/verifyEmail';
import ServerComponent from '../components/dashboard/server/server-component';

configureFakeBackend();

const MainRoutes = () => {
  const jwt_token = localStorage.getItem('token');

  useEffect(() => {
    const abortController = new AbortController();
    const requestOptions = { method: 'GET', headers: authHeader() };
    fetch('/users', requestOptions).then(handleResponse)
    const color = localStorage.getItem('color')
    const layout = localStorage.getItem('layout_version') || configDB.data.color.layout_version
    document.body.classList.add(layout);
    console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
    console.disableYellowBox = true;
    document.getElementById("color").setAttribute("href", `${process.env.PUBLIC_URL}/assets/css/${color}.css`);

    return function cleanup() {
      abortController.abort();
    }
  }, []);



  return (
    <>
      <Routes>
        <Route exact path='/' element={<PrivateRoute />} >
          {routes.map(({ path, Component }, i) => (
            <Route element={<AppLayout />} key={i}>
              {jwt_token && <Route exact
                path={`/`}
                element={<Navigate to={`/dashboard`} />}
              />}
              <Route exact path={path} element={Component} />
            </Route>
          ))}
        </Route>
        <Route exact path={`/login`} element={<Signin />} />
        <Route path={`/verify-email`} element={<VerifyEmail />} />
        <Route path={`/AllUsers`} element={<ServerComponent />} />
        <Route path={`${process.env.PUBLIC_URL}/pages/login`} element={<Login />} />
        <Route path={`${process.env.PUBLIC_URL}/pages/loginWithBgImg`} element={<LoginWithBgImg />} />
        <Route path={`${process.env.PUBLIC_URL}/pages/loginWithVideo`} element={<LoginWithVideo />} />
        <Route path={`/pages/signup`} element={<Signup />} />
        <Route path={`${process.env.PUBLIC_URL}/pages/signupWithImg`} element={<SignupWithImg />} />
        <Route path={`${process.env.PUBLIC_URL}/pages/signupWithVideo`} element={<SignupWithVideo />} />
        <Route path={`${process.env.PUBLIC_URL}/pages/unlockUser`} element={<UnlockUser />} />
        <Route path={`${process.env.PUBLIC_URL}/pages/forgetPwd`} element={<ForgetPwd />} />
        <Route path={`${process.env.PUBLIC_URL}/pages/resetPwd`} element={<ResetPwd />} />
        <Route path={`${process.env.PUBLIC_URL}/pages/comingsoon`} element={<ComingSoon />} />
        <Route path={`${process.env.PUBLIC_URL}/pages/comingsoonImg`} element={<ComingSoonImg />} />
        <Route path={`${process.env.PUBLIC_URL}/pages/comingsoonVideo`} element={<ComingSoonVideo />} />
        <Route path={`${process.env.PUBLIC_URL}/pages/maintenance`} element={<Maintenance />} />
        <Route path={`${process.env.PUBLIC_URL}/pages/errors/error400`} element={<Error400 />} />
        <Route path={`${process.env.PUBLIC_URL}/pages/errors/error401`} element={<Error401 />} />
        <Route path={`${process.env.PUBLIC_URL}/pages/errors/error403`} element={<Error403 />} />
        <Route path={`${process.env.PUBLIC_URL}/pages/errors/error404`} element={<Error404 />} />
        <Route path={`${process.env.PUBLIC_URL}/pages/errors/error500`} element={<Error500 />} />
        <Route path={`${process.env.PUBLIC_URL}/pages/errors/error503`} element={<Error503 />} />
        <Route path={`${process.env.PUBLIC_URL}/callback`} render={() => <Callback />} />
      </Routes>
    </>
  );


};

export default MainRoutes;