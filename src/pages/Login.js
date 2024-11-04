import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();

        // Simulated authentication
        if (username === 'user' && password === 'password') {
            localStorage.setItem('isAuthenticated', 'true'); // Set authentication status
            navigate('/dashboard'); // Redirect to the dashboard
        } else {
            setError('Invalid username or password'); // Display error message
        }
    };

    return (
        <div style={{ maxWidth: '300px', margin: 'auto', padding: '20px' }}>
            <h1>Login Page</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleLogin}>
                <div>
                    <label>
                        Username:
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Password:
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
