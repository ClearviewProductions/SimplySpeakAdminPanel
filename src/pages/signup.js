import React, { Fragment, useState } from 'react';
import {Login,Password,SignUp, ConfirmPassword, FullName, Email } from '../constant';
import { db, firebase_app, googleProvider , Jwt_token} from '../data/config';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/common/loader';
import { ToastContainer, toast } from 'react-toastify';
import { addDoc , collection, setDoc, doc } from 'firebase/firestore';
import man from '../assets/images/dashboard/user.png';

const Signup = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState('')
    const [name , setName] = useState('');
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const [value, setValue] = useState(
        localStorage.getItem('profileURL' || man)
    );

    const validatePassword = () => {
        let isValid = true
        if (password !== '' && confirmPassword !== ''){
          if (password !== confirmPassword) {
            isValid = false
            setError('Passwords does not match')
          }
        }
        return isValid
      }

    const register = e => {
        e.preventDefault()
        setError('')
        if(validatePassword()){

            firebase_app.auth().createUserWithEmailAndPassword(email, password)
            .then((result) => result.user.sendEmailVerification()
                    .then(() => {
                        result.user.updateProfile({
                            displayName: name
                        }).then(() => {
                            if(result.additionalUserInfo.isNewUser){
                                addUsers(name,email,password,'Email');
                            }
                        })
                    })).catch(function(error) {
                        alert(error);
                        navigate(`/pages/signup`);
              });
              setTimeout(() => {
                toast.warning('Verify your email by clicking the link.');
               }, 200);

        }
        navigate(`/verify-email`);
        setEmail('')
        setPassword('')
        setConfirmPassword('')
    }

    
    const googleAuth = async () => {
        try {
            firebase_app.auth().signInWithPopup(googleProvider).then(function (result) {
                setValue(result.user.photoURL);
                if(result.additionalUserInfo.isNewUser){
                    addUsers(result.user.displayName, result.user.email, '***', 'Google');
                }
                localStorage.setItem('token', Jwt_token);
                setTimeout(() => {
                    navigate(`/dashboard`);
                }, 200);
            });
        } catch (error) {
            setTimeout(() => {
                toast.error("Oppss.. The password is invalid or the user does not have a password.");
            }, 200);
        }
    };
    
      const addUsers=async(n,e,p,auth)=>{
        const userID = firebase_app.auth().currentUser.uid;
      
        setDoc(doc(db, "Users", userID), {
            Name: n,
            Email: e,
            Password: p,
            Authenticaion: auth
          });

        }

    return (
        <Fragment>
            <Loader/>
               <div className="page-wrapper">
                <div className="container-fluid">
                    {/* <!-- sign up page start--> */}
                    <div className="authentication-main">
                        <div className="row">
                            <div className="col-sm-12 p-0">
                                <div className="auth-innerright">
                                    <div className="authentication-box">
                                        {/* <div className="text-center"><img src={logo} alt="" /></div> */}
                                        <div className="card mt-4 p-4">
                                            <h4 className="text-center">{"NEW USER"}</h4>
                                            <h6 className="text-center">{"Enter the details For Signup"}</h6>
                                            
                                            {error && <div className='auth__error'>{error}</div>}

                                            <form className="theme-form" onSubmit={register} name='registration_form'>
                                                {/* <div className="form-row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="col-form-label">{FirstName}</label>
                                                            <input className="form-control" type="text" placeholder="John" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="col-form-label">{LastName}</label>
                                                            <input className="form-control" type="text" placeholder="Deo" />
                                                        </div>
                                                    </div>
                                                </div> */}

                                                 <div className="form-group">
                                                            <label className="col-form-label">{FullName}</label>
                                                            <input className="form-control" type="text" placeholder="John Doe" value={name}
                                                            onChange={e => setName(e.target.value)}/>
                                                        </div>
                                                
                                                <div className="form-group">
                                                    <label className="col-form-label">{Email}</label>
                                                    <input className="form-control" type="email"
                                                    value={email} placeholder="Email address" required
                                                    onChange={e => setEmail(e.target.value)}/>
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-form-label">{Password}</label>
                                                    <input className="form-control" type="password" required value={password}
                                                    placeholder="**********" onChange={e => setPassword(e.target.value)}/>
                                                </div>
                                                <div className="form-group">
                                                    <label className="col-form-label">{ConfirmPassword}</label>
                                                    <input className="form-control" type="password" required value={password}
                                                    placeholder="**********"  onChange={e => setConfirmPassword(e.target.value)}/>
                                                </div>
                                                {/* <div className="form-group">
                                                    <label className="col-form-label">{BOD}</label>
                                                    <div className="form-row">
                                                        <div className="col-sm-4">
                                                            <select className="form-control mb-1">
                                                                <option>{"DD"}</option>
                                                                <option>{"01"}</option>
                                                                <option>{"02"}</option>
                                                                <option>{"03"}</option>
                                                                <option>{"04"}</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-sm-4">
                                                            <select className="form-control mb-1">
                                                                <option>{"MM"}</option>
                                                                <option>{"01"}</option>
                                                                <option>{"02"}</option>
                                                                <option>{"03"}</option>
                                                                <option>{"04"}</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-sm-4">
                                                            <select className="form-control mb-1">
                                                                <option>{"YYYY"}</option>
                                                                <option>{"1990"}</option>
                                                                <option>{"1991"}</option>
                                                                <option>{"1992"}</option>
                                                                <option>{"1993"}</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div> */}
                                                <div className="form-row">
                                                    <div className="col-sm-4">
                                                        <button className="btn btn-primary" type="submit">{SignUp}</button>
                                                    </div>
                                                    <div className="col-sm-8">
                                                        <div className="text-start mt-2 m-l-20">{"Are you already user?"}  <a className="btn-link text-capitalize" href="/login">{Login}</a></div>
                                                    </div>
                                                </div>
                                                <div className="form-divider"></div>
                                                <div className="social mt-3">
                                                    <div className="form-group btn-showcase d-flex">
                                                        <button className="btn social-btn btn-fb d-inline-block"> <i className="fa fa-facebook"></i></button>
                                                        <button className="btn social-btn btn-twitter d-inline-block"><i className="fa fa-google" onClick={googleAuth}></i></button>
                                                        <button className="btn social-btn btn-google d-inline-block"><i className="fa fa-twitter"></i></button>
                                                        <button className="btn social-btn btn-github d-inline-block"><i className="fa fa-github"></i></button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- sign up page ends--> */}
                </div>
                <ToastContainer/>
            </div>
        </Fragment>
    );
};

export default Signup;