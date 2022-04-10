import React, {useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './styles/FormPage.css';


const SignUpPage = ({setFinalUsers}) => {

  const navigate = useNavigate();

  const users = [
    {
      "username": "userAdmin",
      "email": "admin@gmail.com",
      "password": "password123",
      "password2": "password123"
    }
  ]

  const [formValues, setFormValues] = useState({
		username: '',
		email: '',
		password: '',
		password2: ''
	})

  const [formErrors, setFormErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  function handleChange(e) {
		setFormValues({
			...formValues,
			[e.target.name]: e.target.value
		})
	}
  
  function handleSubmit(e) {
    e.preventDefault()
    setFormErrors(validateInfo(formValues))
    setIsSubmitted(true)
  }
  
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitted) {
      users.push(formValues)
      console.log(users)
      setFinalUsers(users)
      navigate('/login')
    }
  }, [formErrors])

  const checkExistingUsername = username => {
    let count = 0
    for (let user in users) {
      if (username === users[count].username) {
        return true
      } else {return false}
      count ++
    }
  }

  function validateInfo(values) {
    let errors = {}

    // Username
    if (!values.username) {
      errors.username = 'Username required';
    } else if (checkExistingUsername(values.username)) {
      errors.username = 'Username already exists';
    } else if (!(values.username.length < 13 && values.username.length > 6)) {
      errors.username = 'Username needs to be between 7 and 12 characters';
    }
    
    // Email
    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }

    // Password
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password === values.username) {
      errors.password = 'Passwords cannot be the same as username';
    } else if (values.password.length < 8) {
      errors.password = 'Password needs to be 8 characters or more';
    }
    
    // Confirm password
    if (!values.password2) {
      errors.password2 = 'Password is required';
    } else if (values.password2 !== values.password) {
      errors.password2 = 'Passwords do not match';
    }
    return errors;
  }

  return (
    <div>
    {/* <pre>{JSON.stringify(formValues, null, 2)}</pre> */}
      {/* Banner */}
      <div className="banner">
        <img src="images/mnml-logo.png" alt="logo image" className="logo" />
        <h1>MNML STYLES</h1>
      </div>

      <div className='form-container'>
        {/* SignUp form */}
        <form className='form' onSubmit={handleSubmit}>
            <h1 className='form-title'>Register</h1>

            {/* Input box for username  */}
            <div className='form-input-box'>
                <label htmlFor="username">
                    Username
                </label>
                <input
                  className='form-input'
                  id="username"
                  type="text"
                  name="username"
                  placeholder="Enter username"
                  value={formValues.username}
                  onChange={handleChange} />
                {formErrors.username && <p>{formErrors.username}</p>}
            </div>

            {/* Input box for email  */}
            <div className='form-input-box'>
                <label htmlFor="email">
                    Email
                </label>
                <input
                  className='form-input'
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={formValues.email}
                  onChange={handleChange} />
                {formErrors.email && <p>{formErrors.email}</p>}
            </div>

            {/* Input box for password  */}
            <div className='form-input-box'>
                <label htmlFor="password">
                    Password
                </label>
                <input
                  className='form-input'
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={formValues.password}
                  onChange={handleChange} />
                {formErrors.password && <p>{formErrors.password}</p>}
            </div>

            {/* Input box for password2  */}
            <div className='form-input-box'>
                <label  htmlFor="password2">
                    Confirm Password
                </label>
                <input
                  className='form-input'
                  id="password2"
                  type="password"
                  name="password2"
                  placeholder="Enter password again"
                  value={formValues.password2}
                  onChange={handleChange} />
                {formErrors.password2 && <p>{formErrors.password2}</p>}
            </div>

            {/* Submit button */}
            <button className='form-btn' type="submit">Sign up</button>

            {/* login link */}
            <span>
                Already have an account? Login <Link to="/login">here</Link>
            </span>

        </form>
      </div>
    </div>
  )
}

export default SignUpPage