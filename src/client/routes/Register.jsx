import { useState } from 'react';
import { registerUser } from '../API/AjaxHelper';
import { useOutletContext } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [address, setAddress] = useState(null);
    const [usernameErrorMessage, setUsernameErrorMessage] = useState('');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
    const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] = useState('');
    const [, setToken] = useOutletContext();
    const [, setIsLoggedIn] = useOutletContext();

    async function submitRegistration(e) {
        e.preventDefault();

        setUsernameErrorMessage('');
        setPasswordErrorMessage('');
        setConfirmPasswordErrorMessage('');

        if (!username) {
            setUsernameErrorMessage("Username is required");
        } else if (password.length < 8) {
            setPasswordErrorMessage("Password needs to be a minimum of 8 characters");
        } else if (password !== confirmPassword) {
            setConfirmPasswordErrorMessage("Passwords must match");
        }
        if (id === "firstName") {
            setFirstName(value);
        }
        if (id === "lastName") {
            setLastName(value);
        }
        if (id === "email") {
            setEmail(value);
        } if (id === "address") {
            setAddress(value);
        } else {
            const user = {
                user: {
                    username,
                    password,
                    firstName,
                    lastName,
                    email,
                    address
                }
            };


            const response = await registerUser(user);

            if (response.error) {
                setUsernameErrorMessage("User already exists, please login instead.");
            } else {
                localStorage.setItem('token', response.data.token);
                setToken(response.data.token);
                setIsLoggedIn(true);
            }
        }
    }

    return (
        <div className="form">
            <div className="form-body">
                <h1>Register Page</h1>
                <form onSubmit={submitRegistration}>

                    <div className="firstName">
                        <label className="form-label" for="firstName">First Name </label>
                        <input className="form-input"
                            type="text" value={firstName}
                            onChange={(e) => handleInputChange(e)} id="firstName" placeholder="First Name" />
                    </div>

                    <div className="lastName">
                        <label className="form-label" for="lastName">Last Name </label>
                        <input type="text" name="" id="lastName" value={lastName}
                            className="form-input" onChange={(e) => handleInputChange(e)} placeholder="Last Name" />
                    </div>

                    <div className="email">
                        <label className="form-label" for="email">Email </label>
                        <input type="email" id="email"
                            className="form-input" value={email} onChange={(e) => handleInputChange(e)} placeholder="Email" />
                    </div>

                    <div className="userName">
                        <label className="form-label" for="email">Email </label>
                        <input
                            type="text"
                            value={username}
                            placeholder="Username"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    {usernameErrorMessage && <p>{usernameErrorMessage}</p>}
                    <input
                        type="password"
                        value={password}
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {passwordErrorMessage && <p>{passwordErrorMessage}</p>}
                    <input
                        type="password"
                        value={confirmPassword}
                        placeholder="Confirm Password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {confirmPasswordErrorMessage && <p>{confirmPasswordErrorMessage}</p>}



                    <button type="submit" className="submitButton">Register</button>
                </form></div>

        </div>
    );
};

export default Register;