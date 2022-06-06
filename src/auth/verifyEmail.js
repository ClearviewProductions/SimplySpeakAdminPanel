import './verifyEmail.css'
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  {firebase_app} from "../data/config";
import { useNavigate } from 'react-router-dom';

function VerifyEmail() {

  const [time, setTime] = useState(60);
  const navigate = useNavigate();

  const cUser = firebase_app.auth().currentUser;

  useEffect(() => {
    const interval = setInterval(() => {
        cUser?.reload()
      .then(() => {
        if(cUser?.emailVerified){
          clearInterval(interval)
          navigate('/login')
            setTimeout(() => {
                toast.success('Email Verified. Please enter your credentials on login page. Redirecting you to login...');
               }, 200);
        }
      })
      .catch((err) => {
        console.log(err.message)
      })
    }, 4000)
  }, [navigate, cUser])
  

  useEffect(() => {
    let interval = null
    if(time !== 0 ){
      interval = setInterval(() => {
        setTime((time) => time - 1)
      }, 1000)
    }else if(time === 0){
      setTime(60)
      clearInterval(interval)
    }
    return () => clearInterval(interval);
  })

  const resendEmailVerification = () => {
    firebase_app.auth().currentUser.sendEmailVerification()
    .then(() => {
    }).catch((err) => {
      console.log(err.message)
    })
  }

  const redirectToLogin = () => {
    navigate(`/login`)
  }

  return (
    <div className='center'>
    <div className='verifyEmail'>
      <h1>Verify your Email Address</h1>
      <p>
        <strong>A Verification email has been sent to:</strong><br/>
        <span>{cUser?.email}</span>
      </p>
      <span>Follow the instruction in the email to verify your account</span>       
      <button className="btn btn-primary"
        onClick={resendEmailVerification}
      >Resend Email {time}</button>
      <br/>
      <button className="btn btn-secondary"
        onClick={redirectToLogin}
      >Login directly</button>
    </div>
    <ToastContainer/>
  </div>
)
}

export default VerifyEmail
