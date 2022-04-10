import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";


const LoginPage = ({finalUsers, setUserName}) => {

  const [loginValues, setLoginValues] = useState({
		username: '',
		password: ''
	})

  const [loginErrors, setLoginErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const navigate = useNavigate();

  function handleChange(e) {
    setLoginValues({
      ...loginValues,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setLoginErrors(validateLoginInfo(loginValues))
    setIsSubmit(true)
  }

  useEffect(() => {
    if (Object.keys(loginErrors).length === 0 && isSubmit) {
      setUserName(loginValues.username)
      navigate('/product')
    }
  }, [loginErrors])

  const checkLogin = (username, password) => {
    if (!username && !password) {
      return true
    } else {
      let count = 0
      let state = false
      for (let users in finalUsers) {
        if (finalUsers[count].username === username) {
          if (finalUsers[count].password === password) {
            state = true
          } else {state = false}
        } else {state = false}
        count ++
      }
      return state
    }
  }
 
  function validateLoginInfo(values) {
    let errors = {}

    // Username
    if (!values.username) {
      errors.username = 'Username required';
    }

    // Password
    if (!values.password) {
      errors.password = 'Password is required';
    }

    // Check username and password is correct
    if (!(checkLogin(values.username, values.password))) {
      errors.check = 'Username or password incorrect'
    }

    return errors;
  }

  return (
    <div>
    {/* <pre>{JSON.stringify(finalUsers, null, 2)}</pre> */}
      {/* Banner */}
      <div className="banner">
        <img src="images/mnml-logo.png" alt="logo image" className="logo" />
        <h1>MNML STYLES</h1>
      </div>

      <div className='form-container'>
        {/* Login form */}
        <form className='form' onSubmit={handleSubmit} >
            <h1 className='form-title'>LOGIN</h1>
            {loginErrors.check && <p>{loginErrors.check}</p>}

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
                  value={loginValues.username}
                  onChange={handleChange} />
                {loginErrors.username && <p>{loginErrors.username}</p>}
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
                  value={loginValues.password}
                  onChange={handleChange} />
                {loginErrors.password && <p>{loginErrors.password}</p>}
            </div>

            {/* Submit button */}
            <button className='form-btn' type="submit">Login</button>

        </form>
      </div>
    </div>
  )
}

export default LoginPage