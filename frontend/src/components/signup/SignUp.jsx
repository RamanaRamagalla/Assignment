import React, { useState } from 'react';
import './signUp.css';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
        } else if (name === '' || email === '' || password === '') {
            setError('All fields are required');
        } else {
            setError('');
            try {
                const response = await fetch('http://localhost:5000/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name, email, password, confirmPassword }),
                });
                const data = await response.json();
                if (response.status === 201) {
                    navigate('/login');
                    alert('User registered successfully,please login');
                } else {
                    alert(data.message);
                }
            } catch (err) {
                console.error('Error:', err);
            }
        }
    };

    return (
        <div className="signup-wrapper">
            <div className="signup-left">
                <h2 className="signup-heading">Sign Up</h2>
                <p className="signup-description">Unlock the full Nolan experience.</p>
            </div>
            <div className="signup-right">
                <h2 className="form-heading">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    {error && <div className="error">{error}</div>}
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            required
                        />
                    </div>
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
                    <div>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirm your password"
                            required
                        />
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
                <p>Already have an account? <a href="/login">Login</a></p>
            </div>
        </div>
    );
};

export default SignUp;
