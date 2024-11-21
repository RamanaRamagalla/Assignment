import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (email === '' || password === '') {
            setError('Both fields are required');
        } else {
            setError('');
            try {
                const response = await fetch('https://assignment-1-6idx.onrender.com/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, password }),
                });
                const data = await response.json();
                if (response.status === 200) {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('username', data.name);
                    navigate('/dashboard');
                } else {
                    alert(data.message);
                }
            } catch (err) {
                console.error('Error:', err);
            }
        }
    };

    return (
        <div className="login-wrapper">
            <div className="login-left">
                <h1>
                    <span className="login-text">Login</span> <br />
                    <span className="unlock-text">Unlock the full Nolan experience</span>
                </h1>
            </div>
            <div className="login-right">
                <div className="login-container">
                    <h2>Login</h2>
                    {error && <div className="error">{error}</div>}
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                        <button type="submit">Login</button>
                    </form>
                    <p>Don't have an account? <a href="/signup">Sign Up</a></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
