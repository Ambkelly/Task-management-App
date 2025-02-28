import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './signIn.css';
import { auth, Provider } from './firebase';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredentials.user;
      console.log("User created:", user);
      navigate("/home");
    } catch (error) {
      console.error("Error creating user:", error.message);
      if (error.code === 'auth/email-already-in-use') {
        alert('The email address is already in use by another account.');
      } else if (error.code === 'auth/invalid-email') {
        alert('The email address is not valid.');
      } else if (error.code === 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert('An error occurred. Please try again.');
      }
    }
  };

  const handleGoogleSignup = async () => {
    try{
      await signInWithPopup(auth, Provider)
    } catch(error) {
      console.log(error)
    }
  };

  const handleFacebookSignup = () => {
    alert('Facebook Signup clicked!');
    navigate('/home');
  };

  return (
    <div className='main_containers'>
      <div className="box">
        <div className="login-form">
          <h1>Create Your Account 🎉</h1>
          <p>Join us and start managing your projects easily.</p>
          <form onSubmit={handleFormSubmit}>
            <div className="input-field">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" placeholder="Your Username" required />
            </div>
            <div className="input-field">
              <label htmlFor="firstname">First Name</label>
              <input type="text" id="firstname" placeholder="Your First Name" required />
            </div>
            <div className="input-field">
              <label htmlFor="lastname">Last Name</label>
              <input type="text" id="lastname" placeholder="Your Last Name" required />
            </div>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <div className="password-container">
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  id="password"
                  placeholder="At least 8 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                >
                  {passwordVisible ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>
            <div className="input-field">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className="password-container">
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  id="confirmPassword"
                  placeholder="At least 8 characters"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                >
                  {passwordVisible ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>
            <button type="submit" className="sign-in">Sign Up</button>
            <div className="dividers">Or sign up with</div>
            <div className="social-buttons">
              <button type="button" className="google" onClick={handleGoogleSignup}>
                <img src="Google.png" alt="Google Logo" />
                Sign up with Google
              </button>
              <button type="button" className="facebook" onClick={handleFacebookSignup}>
                <img src="Facebook.png" alt="Facebook Logo" />
                Sign up with Facebook
              </button>
            </div>
            <p className="sign-up">Already have an account? <Link to="/">Sign In</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;