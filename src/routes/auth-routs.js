import React from 'react';
import { Route, Routes , Redirect } from 'react-router-dom';
import Callback from '../auth/callback';
import Signin from '../auth/signin';
import VerifyEmail from '../auth/verifyEmail';
import ServerComponent from '../components/dashboard/server/server-component';
import ComingSoon from '../pages/comingsoon';
import ComingSoonImg from '../pages/comingsoonImg';
import ComingSoonVideo from '../pages/comingsoonVideo';
import Error400 from '../pages/errors/error400';
import Error401 from '../pages/errors/error401';
import Error403 from '../pages/errors/error403';
import Error404 from '../pages/errors/error404';
import Error500 from '../pages/errors/error500';
import Error503 from '../pages/errors/error503';
import ForgetPwd from '../pages/forgetPwd';
import Logins from '../pages/login';
import LoginWithBgImg from '../pages/loginWithBgImg';
import LoginWithVideo from '../pages/loginWithVideo';
import Maintenance from '../pages/maintenance';
import ResetPwd from '../pages/resetPwd';
import Signup from '../pages/signup';
import SignupWithImg from '../pages/signupWithImg';
import SignupWithVideo from '../pages/signupWithVideo';
import UnlockUser from '../pages/unlockUser';

const AuthRoutes = () => {
    return (
        <Routes>
            <Route exact path="/">
            <Redirect to="/login" />
            </Route>
            <Route path={`/login`} component={Signin} />
            <Route path={`/verify-email`} component={VerifyEmail} />
            <Route path={`/AllUsers`} component={ServerComponent} />
            <Route path={`${process.env.PUBLIC_URL}/pages/login`} component={Logins} />
            <Route path={`${process.env.PUBLIC_URL}/pages/loginWithBgImg`} component={LoginWithBgImg} />
            <Route path={`${process.env.PUBLIC_URL}/pages/loginWithVideo`} component={LoginWithVideo} />
            <Route path={`/pages/signup`} component={Signup} />
            <Route path={`${process.env.PUBLIC_URL}/pages/signupWithImg`} component={SignupWithImg} />
            <Route path={`${process.env.PUBLIC_URL}/pages/signupWithVideo`} component={SignupWithVideo} />
            <Route path={`${process.env.PUBLIC_URL}/pages/unlockUser`} component={UnlockUser} />
            <Route path={`${process.env.PUBLIC_URL}/pages/forgetPwd`} component={ForgetPwd} />
            <Route path={`${process.env.PUBLIC_URL}/pages/resetPwd`} component={ResetPwd} />
            <Route path={`${process.env.PUBLIC_URL}/pages/comingsoon`} component={ComingSoon} />
            <Route path={`${process.env.PUBLIC_URL}/pages/comingsoonImg`} component={ComingSoonImg} />
            <Route path={`${process.env.PUBLIC_URL}/pages/comingsoonVideo`} component={ComingSoonVideo} />
            <Route path={`${process.env.PUBLIC_URL}/pages/maintenance`} component={Maintenance} />
            <Route path={`${process.env.PUBLIC_URL}/pages/errors/error400`} component={Error400} />
            <Route path={`${process.env.PUBLIC_URL}/pages/errors/error401`} component={Error401} />
            <Route path={`${process.env.PUBLIC_URL}/pages/errors/error403`} component={Error403} />
            <Route path={`${process.env.PUBLIC_URL}/pages/errors/error404`} component={Error404} />
            <Route path={`${process.env.PUBLIC_URL}/pages/errors/error500`} component={Error500} />
            <Route path={`${process.env.PUBLIC_URL}/pages/errors/error503`} component={Error503} />
            <Route  path={`${process.env.PUBLIC_URL}/callback`} render={() => <Callback />} />
        </Routes>
    )
}

export default AuthRoutes;