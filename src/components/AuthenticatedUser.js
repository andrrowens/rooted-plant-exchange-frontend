import React, {useState, useContext } from 'react'
import {useHistory} from 'react-router-dom'
import { UserContext } from '../context/UserContext'

 const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory()
    const {setUsers} = useContext(UserContext)
    const [errors, setErrors] = useState([])

const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
    .then(res => {
      if(res.status === 200){
          res.json().then(user => {
              setUsers(user)
              history.push(`/users/${user.id}`)
              alert("Successfully logged in")
          })
      }else {
          res.json().then(json => setErrors(Object.entries(json.errors)))
      }
  })
}

  return (
    <form className="login-form" onSubmit={handleSubmit}>
    <input
      className="user-auth"
      type="text"
      placeholder="Username"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
    /> 
    <br />
    <input
      className="user-auth"
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <br />
    <button className="auth-btn" type="submit">Login</button>
  </form>
  );
};

export default Login