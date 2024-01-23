import {Component} from 'react'
import './index.css'

// username: rahul
// password: rahul@2021

class LoginForm extends Component {
  state = {
    userName: '',
    passwordVal: '',
    successText: true,
  }

  userNameChange = event => {
    this.setState({userName: event.target.value})
  }

  passwordChange = event => {
    this.setState({passwordVal: event.target.value})
  }

  navigateToHomeRoute = () => {
    const {history} = this.props
    // history.push('/')
    history.replace('/')
  }

  onSubmitForm = async e => {
    e.preventDefault()
    console.log('onSubmitForm')
    const {userName, passwordVal} = this.state
    const userDetails = {
      username: userName,
      password: passwordVal,
    }
    try {
      const response = await fetch('https://apis.ccbp.in/login', {
        method: 'POST',
        body: JSON.stringify(userDetails), // Convert the data to JSON format
      })
      console.log(response)
      console.log(response.ok)

      if (!response.ok) {
        console.log('error response.ok is false')
        this.setState({successText: false})
      }
      if (response.ok) {
        const responseData = await response.json()
        console.log(responseData)
        this.navigateToHomeRoute()
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  render() {
    const {userName, passwordVal, successText} = this.state

    return (
      <div className="loginBg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="websiteLogoStyle"
        />

        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="websiteLoginStyle"
        />

        <form className="form-container" onSubmit={this.onSubmitForm}>
          <label htmlFor="userId">USERNAME</label>
          <input
            id="userId"
            type="text"
            placeholder="Username"
            value={userName}
            onChange={this.userNameChange}
          />

          <label htmlFor="passwordId">PASSWORD</label>
          <input
            id="passwordId"
            type="password"
            placeholder="Password"
            value={passwordVal}
            onChange={this.passwordChange}
          />

          {successText ? '' : "username and password didn't match"}

          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    )
  }
}

export default LoginForm
