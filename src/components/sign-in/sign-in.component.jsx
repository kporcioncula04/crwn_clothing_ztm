import React, { Component } from 'react'
import FormInput from '../../components/form-input/form-input.component'
import './sign-in.styles.scss'

export default class SignIn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: '' })
  }

  handleChange = event => {
    const { value, name } = event.target
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with yout email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
          name='email'
          type='email'
          handleChange={this.handleChange}
          value={this.state.email}
          label='email'
          required />

          <FormInput
          name='password'
          type='password'
          handleChange={this.handleChange}
          value={this.state.password}
          label='password'
          required />


          <input type='submit' value='Submit Form' />

        </form>
      </div>
    )
  }
}