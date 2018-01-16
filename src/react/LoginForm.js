import React from 'react'

export default function ReactLoginForm() {
  return (
    <form className="log-in-form">
      <h4 className="text-center">Log in with you email account</h4>
      <label>
        Email
        <input type="email" placeholder="somebody@example.com" />
      </label>
      <label>
        Password
        <input type="password" placeholder="Password" />
      </label>
      <input id="show-password" type="checkbox" />
      <label for="show-password">Show password</label>
      <p>
        <input type="submit" className="button expanded" value="Log in" />
      </p>
    </form>
  )
}
