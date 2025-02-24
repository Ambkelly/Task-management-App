// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { useState } from 'react';
// import auth from 'src/firebase';
// import './App.css';

// const Form = () => {
// 	const [passwordVisible, setPasswordVisible] = useState(false);

// 	const handleFormSubmit = (event) => {
// 		event.preventDefault();
// 		alert('Form submitted!');

// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed up 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });
// 	};

// 	const handleGoogleLogin = () => {
// 		alert('Google Login clicked!');
// 	};

// 	const handleFacebookLogin = () => {
// 		alert('Facebook Login clicked!');
// 	};

// 	return (
// 		<div className="container">
// 			<div className="login-form">
// 				<h1>Welcome Back 👋</h1>
// 				<p>Today is a new day. It’s your day. You shape it. Sign in to start managing your projects.</p>
// 				<form onSubmit={handleFormSubmit}>
// 					<div className="input-field">
// 						<label htmlFor="email">Email</label>
// 						<input type="email" id="email" placeholder="Example@email.com" required />
// 					</div>
// 					<div className="input-field">
// 						<label htmlFor="password">Password</label>
// 						<div className="password-container">
// 							<input
// 								type={passwordVisible ? 'text' : 'password'}
// 								id="password"
// 								placeholder="At least 8 characters"
// 								required
// 							/>
// 							<button
// 								type="button"
// 								className="toggle-password"
// 								onClick={() => setPasswordVisible(!passwordVisible)}
// 							>
// 								{passwordVisible ? 'Hide' : 'Show'}
// 							</button>
// 						</div>
// 					</div>
// 					<a href="#" className="forgot-password">Forgot Password?</a>
// 					<button type="submit" className="sign-in">Sign in</button>
// 					<div className="divider">Or sign in with</div>
// 					<div className="social-buttons">
// 						<button type="button" className="google" onClick={handleGoogleLogin}>
// 							<img src="Google.png" alt="Google Logo" />
// 							Sign in with Google
// 						</button>
// 						<button type="button" className="facebook" onClick={handleFacebookLogin}>
// 							<img src="Facebook.png" alt="Facebook Logo" />
// 							Sign in with  Facebook
// 						</button>
// 					</div>
// 					<p className="sign-up">Don’t have an account? <a href="#">Sign up</a></p>
// 				</form>
// 			</div>
// 			<div className="login-art">
// 				<img src="Login Art (1).png" alt="Login Art" />
// 			</div>
// 		</div>
// 	);
// };

// export default Form;
