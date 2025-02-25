import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './signIn.css';

const SignIn = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted!');
    navigate('/home'); // Navigate to the Home page after form submission
  };

  const handleGoogleLogin = () => {
    alert('Google Login clicked!');
    navigate('/home'); // Navigate to the Home page after Google login
  };

  const handleFacebookLogin = () => {
    alert('Facebook Login clicked!');
    navigate('/home'); // Navigate to the Home page after Facebook login
  };

  return (
    <div className='main_containers'>
      <div className="box">
        <div className="login-form">
          <h1>Welcome Back 👋</h1>
          <p>Today is a new day. It’s your day. You shape it. Sign in to start managing your projects.</p>
          <form onSubmit={handleFormSubmit}>
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
            <a href="#" className="forgot-password">Forgot Password?</a>
            <button type="submit" className="sign-in">Sign in</button>
            <div className="dividers">Or sign in with</div>
            <div className="social-buttons">
              <button type="button" className="google" onClick={handleGoogleLogin}>
                <img src="Google.png" alt="Google Logo" />
                Sign in with Google
              </button>
              <button type="button" className="facebook" onClick={handleFacebookLogin}>
                <img src="Facebook.png" alt="Facebook Logo" />
                Sign in with Facebook
              </button>
            </div>
            <p className="sign-up">Don’t have an account? <Link to="/signup">Sign up</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;