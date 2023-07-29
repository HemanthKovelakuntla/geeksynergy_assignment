import React, {useState} from 'react'
import './index.css'

const SignUp = () => {
  const [userData, setUserData] = useState({
    name: '',
    password: '',
    email: '',
    phoneNumber: '',
    profession: 'Developer', // Default profession
  })

  const handleChange = e => {
    const {name, value} = e.target
    setUserData(prevData => ({...prevData, [name]: value}))
  }

  const handleSignup = () => {
    // Save data to local storage
    localStorage.setItem('userData', JSON.stringify(userData))
  }

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <div className="input-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={userData.name}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          value={userData.password}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={userData.email}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          name="phoneNumber"
          id="phoneNumber"
          value={userData.phoneNumber}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label htmlFor="profession">Profession:</label>
        <select
          name="profession"
          id="profession"
          value={userData.profession}
          onChange={handleChange}
        >
          <option value="Developer">Developer</option>
          <option value="Designer">Designer</option>
          <option value="Manager">Manager</option>
          {/* Add other profession options as needed */}
        </select>
      </div>
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  )
}

export default SignUp
