import React, { useState, useContext } from "react";
import classes from "./Signup.module.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from '../../Utillty/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { DataContext } from '../../components/DataProvider/DataProvider'
import { Type } from "../../Utillty/acthion.type";
import { ClipLoader } from "react-spinners"

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({
    signIn: false,
    signup: false
  })

  const [{ user }, despatch] = useContext(DataContext)
  // console.log(user)
  const navigate = useNavigate()

  const aithHandler = async (e, actionType) => {
    e.preventDefault();
    console.log(e.target.name)
    if (e.target.name == "signIn") {
      setLoading({ ...loading, signIn: true })
      signInWithEmailAndPassword(auth, email, password).then((userInfo) => {
        despatch({
          type: Type.SET_USER,
          user: userInfo.user
        })
        setLoading({ ...loading, signIn: false })
        navigate("/")
      }).catch((err) => {
        setError(err.message)
        setLoading({ ...loading, signIn: false })
      })

    } else {
      setLoading({ ...loading, signup: true })
      createUserWithEmailAndPassword(auth, email, password).then((userInfo) => {
        despatch({
          type: Type.SET_USER,
          user: userInfo.user
        })
        setLoading({ ...loading, signup: false })
        navigate("/")

      }).catch((err) => {
        setError(err.message)
        setLoading({ ...loading, signup: false })
      })
    }
  };

  return (
    <section className={classes.login}>
      {/* Logo */}
      <Link to={"/"}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
          alt="Amazon Logo"
        />
      </Link>

      {/* Form */}
      <div className={classes.login_container}>
        <h1>Sign In</h1>
        <form>
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>

          {/* Sign In button */}
          <button
            type="button"
            onClick={(e) => aithHandler(e, "signin")}
            className={classes.signIn_button}
            name="signIn"
          >
            {
              loading.signIn ? (<ClipLoader color="#000" size={15} />) : ('Sign In')
            }
          </button>
        </form>

        <p>
          By signing-in you agree to AMAZON FAKE CLONE conditions of Use & Sale.
          Please see our Privacy Notice, our Cookie Notice, and our Interest-Based Ads Notice.
        </p>

        {/* Create Account button */}
        <button
          type="button"
          onClick={(e) => aithHandler(e, "signup")}
          className={classes.login_registerButton}
          name="signup"
        >
          {
            loading.signup ? (<ClipLoader color="#000" size={15} />) : ('Create your Amazon Account')
          }
        </button>
        {
          error && <small style={{ paddingTop: "5px", color: "red", fontSize: "11px" }}>
            {error}
          </small>
        }
      </div>
    </section>
  );
}

export default Auth;
