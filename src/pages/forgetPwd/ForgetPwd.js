import React, { useRef, useState } from 'react';
import { ArrowLeft } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createUserWithEmailAndPassword, updateProfile, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from "../../firebase/firebase";
import './forgotpwd.css';

const ForgotPwd = () => {
  const [values, setValues] = useState({
    email: '',
  });

  const [errorMss, setErrorMss] = useState(false);

  const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const emailRef = useRef();

  const notifySuccess = () =>
    toast.success("Un email de réinitialisation a été envoyé !");

  const notifyError = () =>
    toast.error("Une erreur s'est produite lors de l'envoi de l'email de réinitialisation.");

  const forgotPasswordHandler = () => {
    const email = emailRef.current.value;
    if (email) {
      forgotPassword(email)
        .then(() => {
          emailRef.current.value = '';
          setErrorMss(false);
          notifySuccess();
        })
        .catch((error) => {
          notifyError();
        });
    } else if (values.email === '') {
      notifyError();
    }
  };

  return (
    <div className='forgotBox'>
      <div className='password shadow'>
        <div className='text-center'>
          <h3 className='shadow header-pwd p-1'>
            <span>Récupération du mot de passe</span>
          </h3>
          <p className='bg-text text-center text-light'>
            Afin de protéger votre compte, <br /> On veut s'assurer que c'est bien vous qui <br /> essayez de vous
            connecter
          </p>
        </div>
        <div className='d-flex flex-column justify-content-center align-items-center'>
          <input
            ref={emailRef}
            type='text'
            placeholder='Entrer votre email'
            className='shadow'
          />
          <input
            type='submit'
            className='my-1 text-white shadow'
            value='Récuperer'
            style={{ background: '#8f8f8f' }}
            onClick={forgotPasswordHandler}
          />
        </div>

        <div className='alert animate__animated animate__backInDown'>
          <div className='text-center animate__animated animate__backInDown'>{errorMss}</div>
        </div>
        <div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default ForgotPwd;
