import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './signIn.css';

const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert('SignUp form submitted!');
    navigate('/home'); // Navigate to the Home page after form submission
  };

  const handleGoogleSignup = () => {
    alert('Google Signup clicked!');
    navigate('/home'); // Navigate to the Home page after Google signup
  };

  const handleFacebookSignup = () => {
    alert('Facebook Signup clicked!');
    navigate('/home'); // Navigate to the Home page after Facebook signup
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
              <input type="text" id="firstname" placeholder="Your Username" required />
            </div>
            <div className="input-field">
              <label htmlFor="lastname">Last Name</label>
              <input type="text" id="firstname" placeholder="Your Username" required />
            </div>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Example@email.com" required />
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <div className="password-container">
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  id="password"
                  placeholder="At least 8 characters"
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
              <label htmlFor="password">Confirm Password</label>
              <div className="password-container">
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  id="password"
                  placeholder="At least 8 characters"
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
            <p className="sign-up">Already have an account? <Link to="/">Sign Up</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;