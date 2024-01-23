import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {
    userName: '',
    passwordVal: '',
  }

  userNameChange = event => {
    this.setState({userName: event.target.value})
  }

  passwordChange = event => {
    this.setState({passwordVal: event.target.value})
  }

  onSubmitForm = async e => {
    e.preventDefault()
    console.log('onSubmitForm')
    const {userName, passwordVal} = this.state
    const userDetails = {
      userName,
      passwordVal,
    }
    try {
      const response = await fetch('https://apis.ccbp.in/login', {
        method: 'POST',
        body: JSON.stringify(userDetails), // Convert the data to JSON format
      })

      if (!response.ok) {
        console.log('error response.ok is false')
      }

      const responseData = await response.json()
      console.log(responseData)
    } catch (error) {
      console.log(error.message)
    }
  }

  render() {
    const {userName, passwordVal} = this.state

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

          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    )
  }
}

export default LoginForm
