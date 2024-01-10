import React, { useState } from "react";

const userCredentials = {
    email: "test@test.com",
    password: "abc"
};

export function LoginInput() {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(credentials.email === userCredentials.email && credentials.password === userCredentials.password) {
            alert("You are logged in.");
        } else {
            alert("Incorrect email or password.");
        }
    }

    return (
        <div className="App-header">
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="form-class">
                    <label htmlFor="username">Input Email</label>
                    <input
                        type="text"
                        id="email"
                        placeholder="Email"
                        required
                        value={credentials.email}
                        onChange={(e) => setCredentials({...credentials, email: e.target.value })}
                        className="Input" 
                    />
                </div>
                <div className="form-class">
                    <label htmlFor="passwordInput">Input Password</label>
                    <input
                        type="text"
                        id="password"
                        placeholder="Password"
                        required
                        value={credentials.password}
                        onChange={(e) => setCredentials({...credentials, password: e.target.value })}
                        className="Input" 
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};