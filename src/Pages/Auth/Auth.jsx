import React from 'react'
import classes from './Signup.module.css'
import { Link } from 'react-router-dom';


function Auth() {
  return (
    <section className={classes.login}>
      {/* logo */}
      <Link>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" alt="" />
      </Link>
      {/* form */}
      <div className={classes.login_container}>
        <h1>
          Sign In
        </h1>
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" />
          </div>
          <button className={classes.signIn_button}>Sign In</button>
        </form>
        {/* agreement */}
        <p>
          By signing-in you agree to AMAZON FAKE CLONE conditions of Use & Sale. Please see our Privacy Notice, our cookiew Notice and our Interest-Based Ads Notice
        </p>
        {/* create account btn */}
        <button className={classes.login_registerButton}>Create your Amazon Account</button>
      </div>

    </section>
  )
}

export default Auth;
