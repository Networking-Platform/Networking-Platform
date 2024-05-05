import HumaaansWireframe from '../Images/Humaaans Wireframe.png';
import '../Styles/SignUp.modules.css';
import React, { useState } from 'react';

interface Props {
    backToLoginHandler: () => void;
}

function SignUp({backToLoginHandler}: Props) {

    const url = 'http://localhost:4000/register';
    

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:4000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                setMessage('Registration successful!');
                window.location.href = '/login';
            } else {
                const errorMessage = await response.text();
                setMessage(`Registration failed: ${errorMessage}`);
            }
        } catch (error) {
           
            setMessage('Failed to connect to the server.');
        }
    };

    return (
        <div style={{
            margin: 0,
            padding: 0,
            height: '100vh',
            background: 'linear-gradient(to right, #6358DC 50%, white 50%)'
        }}>
            <div className="blue-half">
                <img id="wireframe" src={HumaaansWireframe} alt="login image" />
            </div>

            <div className="white-half">
                <button id='back' onClick={backToLoginHandler}>
                    &lt; Back
                </button>
                <div id="sign-up-container">
                    <div id="account-signup">
                        Account Sign Up
                    </div>

                    <div id="descriptionn">
                        Become a member and enjoy pro learning
                    </div>

                    {/* <div id="sign-up-form">
                        <form>
                            <div id="sign-up-fields">
                                <div id="float-left">
                                    <label htmlFor="first-name">First name</label><br />
                                    <input type="text" className="name" name="first-name"/>
                                </div>
                                <div id="float-right">
                                    <label htmlFor="last-name" >Last name</label><br />
                                    <input type="text" className="name" name="last-name"/>
                                </div>
                                
                            </div>
                            <label htmlFor="emailaddress"> Email address</label><br />
                            <input type="text" id="emailaddress" name="email-address"/><br />
                            <label htmlFor="pass-word"> password</label><br />
                            <input type="text" id="pass-word" name="pass-word" /><br />

                            <button type="submit" id="submitt"> Submit </button>
                            
                        </form>
                    </div> */}


                    

                    <div id="sign-up-form">
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="emailaddress"> Email address</label><br />
                            <input type="text" id="emailaddress" name="email-address" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                            <label htmlFor="pass-word"> password</label><br />
                            <input type="password" id="pass-word" name="pass-word" value={password} onChange={(e) => setPassword(e.target.value)} /><br />

                            <button type="submit" id="submitt"> Submit </button>
                        </form>
                    </div>
                    {message && <div>{message}</div>}
                </div>
            </div>
        </div>
    )
}

export default SignUp;