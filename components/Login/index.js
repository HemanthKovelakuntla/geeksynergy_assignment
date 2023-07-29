import React, {history, useState} from 'react'
import './index.css'

const Login = () => {
  const [credentials, setCredentials] = useState({name: '', password: ''})

  const handleChange = e => {
    const {name, value} = e.target
    setCredentials(prevData => ({...prevData, [name]: value}))
  }

  const handleLogin = () => {
    const storedUserData = JSON.parse(localStorage.getItem('userData'))
    if (
      storedUserData &&
      storedUserData.name === credentials.name &&
      storedUserData.password === credentials.password
    ) {
      history.push('/movies')
    } else {
      alert('Invalid Credentials')
    }
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="input-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={credentials.name}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          value={credentials.password}
          onChange={handleChange}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
