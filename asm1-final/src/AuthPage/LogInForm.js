import React, { useState, useContext, useEffect } from "react";
import TextInput from "./components/TextInput";
import Button from "./components/Button";
import axios from 'axios';
import {AuthContext} from '../contexts/AuthContext';

const LogInForm = () => {
  // State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Hooks
  const { setHasAccount, user, setUser } = useContext(AuthContext);

  useEffect(() => {
    const getUsers = () => {
      axios.get(`http://localhost:3001/users`)
      .then(res => {
        setUser(res.data);
      })
    };
    getUsers()
  }, [])

  const logIn = () => {
    user.map(account => {
      if (account.email === email) {
        if (account.password === password) {
          setHasAccount(true)
        }
        else (alert("WRONG EMAIL OR PASSWORD"))
      }
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log(email)
    logIn()
  }

  return (
    <div>
      <div className="form-title">Welcome Back Admin</div>
      <form onSubmit={handleSubmit}>
        <TextInput
          label="Email"
          name="email"
          placeholder="nguyen@rmit"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextInput
          label="Password"
          name="password"
          placeholder="rmit"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit">Log In</Button>
      </form>
    </div>
  );
};

export default LogInForm;
