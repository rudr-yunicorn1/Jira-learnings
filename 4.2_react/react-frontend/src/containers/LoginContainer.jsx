import { useState } from 'react'

function LoginContainer() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)

    const response = await fetch('http://localhost:3333/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })

    const data = await response.json()

    if (response.ok) {
      localStorage.setItem('token', data.token)
      alert('Login successful')
    } else {
      alert('Invalid credentials')
    }

    setLoading(false)
  }

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  )
}

export default LoginContainer
