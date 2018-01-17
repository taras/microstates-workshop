import React from 'react'
import connect from './connect'
import Model from '../model'

function ReactLoginForm(props) {
  const { model, actions } = props

  return (
    <form className="log-in-form">
      <h4 className="text-center">Log in with you email account</h4>
      <label>
        Email
        <input
          type="email"
          placeholder="somebody@example.com"
          value={model.email}
          onChange={e => actions.email.set(e.target.value)}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          placeholder="Password"
          value={model.password}
          onChange={e => actions.password.set(e.target.value)}
        />
      </label>
      <input id="show-password" type="checkbox" />
      <label htmlFor="show-password">Show password</label>
      <p>
        <input type="submit" className="button expanded" value="Log in" disabled={!model.isValid} />
      </p>
    </form>
  )
}

export default connect(Model, ReactLoginForm)
