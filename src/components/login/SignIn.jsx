import { useState } from "react";
import firebase from "firebase/app";
import "./SignIn.css";
import "firebase/auth";
import { authService } from "../../firebase-config";
import { Link, useHistory, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default function SignIn() {
  const history = useHistory();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  let { from } = location.state || { from: { pathname: "/" } };

  const handleSignin = (event) => {
    event.preventDefault();
    if (email.length > 0 && password.length > 0) {
      authService
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          setEmail("");
          setPassword("");
          setError("");
          history.replace(from);
          console.log("you're signed in");
          setError(null);
        })
        .catch((error) => {
          console.log(error);
          setError(error.message);
        });
    } else {
      setError("One or more field is/are missing");
    }
  };

  const signInAsGuest = (event) => {
    event.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword("guest@gmail.com", "asdfgh")
      .then(() => {
        setEmail("");
        setPassword("");
        setError("");
        history.replace(from);
        console.log("you're signed in");
        setError(null);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <div className="container">
      <div className="page-title">Sign In</div>
      <form className="signin-form-container">
        <div className="input-container">
          <label className="input-label">Email</label>
          <input
            className="text-input"
            type="email"
            name=""
            placeholder="abc@email.com"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div className="input-container">
          <label className="input-label">Password</label>
          <input
            className="text-input"
            type="password"
            name=""
            placeholder="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          {error && <p className="error-msg">{error}</p>}
        </div>
        <Link to="/signup">Don't have an account</Link>
        <div className="btn-container">
          <button className="signin-btn" type="submit" onClick={handleSignin}>
            Sign In
          </button>
          <button className="signin-btn" onClick={signInAsGuest}>
            Guest
          </button>
        </div>
      </form>
      <ToastContainer
        position="bottom-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
