import HumaaansWireframe from '../Images/Humaaans Wireframe.png';
import React, { useState } from 'react';
import '../Styles/login.modules.css';

interface Props {
    backToHomeHandler: () => void;
}

function LogIn({backToHomeHandler}: Props) {
    const url = 'http://localhost:4000/login';


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if (response.ok) {
                setSuccessMessage('Login successful');
                setEmail('');
                setPassword('');
                window.location.href = '/profile';
            } else if (response.status === 404) {
                setErrorMessage('User not found');
            } else if (response.status === 401) {
                setErrorMessage('Invalid credentials');
            } else {
                setErrorMessage('Error connecting to server');
            }
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage('Error connecting to server');
        }
    };

    return (
        <div style={{
            margin: 0,
            padding: 0,
            height: '100vh', // Set body height to fill the viewport
            background: 'linear-gradient(to right, #6358DC 50%, white 50%)' // Create a linear gradient background
          }}>
            <div className="login-blue-half">
                <img id="wireframe" src={HumaaansWireframe} alt="login image" />
            </div>

            <div className="login-white-half">
                <button id='back' onClick={backToHomeHandler}>
                    &lt; Back
                </button>
                <div id="welcome">
                    Welcome to
                </div>

                <div id="website-name">
                    website
                </div>
                <div id="bottom-right-container">
                    <div id="account">
                        Account Log in
                    </div>

                    <div id="description">
                        If you are already a member you can login with your email address and password.
                    </div>


                    <div id="username-and-password">
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="username"> Email address</label><br />
                            <input 
                                type="email" 
                                id="user-email" 
                                name="email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                required 
                            /><br />

                            <label htmlFor="password"> Password</label><br />
                            <input 
                                type="password" 
                                id="password" 
                                name="password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                required 
                            /><br />

                            <button type="submit" id="login"> Log In </button>
                        </form>
                        {errorMessage && <div>{errorMessage}</div>}
                        {successMessage && <div>{successMessage}</div>}
                    </div>
                    <div>
                        Don't have an account? <a href="/SignUp">Sign up here</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogIn;