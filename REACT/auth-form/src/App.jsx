import { useEffect, useState } from 'react'

import './App.css'

const API_BASE_URL = import.meta.env.VITE_API_URL || ''

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  remember: true,
}

const getStoredToken = () => localStorage.getItem('token') || sessionStorage.getItem('token')

const clearStoredToken = () => {
  localStorage.removeItem('token')
  sessionStorage.removeItem('token')
}

function App() {
  const [mode, setMode] = useState('login')
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isProfileLoading, setIsProfileLoading] = useState(false)
  const [authToken, setAuthToken] = useState(getStoredToken)
  const [user, setUser] = useState(null)
  const isLogin = mode === 'login'

  const switchMode = (nextMode) => {
    setMode(nextMode)
    setStatus(null)
    setIsLoading(false)
    setValues((prev) => ({
      ...prev,
      name: nextMode === 'login' ? '' : prev.name,
      password: '',
      confirmPassword: '',
    }))
  }

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    setValues((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setStatus(null)

    if (!values.email || !values.password || (!isLogin && !values.name)) {
      setStatus({ type: 'error', message: 'Please complete the required fields.' })
      return
    }

    if (!isLogin && values.password !== values.confirmPassword) {
      setStatus({ type: 'error', message: 'Passwords do not match.' })
      return
    }

    setIsLoading(true)

    const payload = isLogin
      ? { email: values.email, password: values.password }
      : { name: values.name, email: values.email, password: values.password }

    try {
      const response = await fetch(`${API_BASE_URL}/api/${isLogin ? 'login' : 'register'}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await response.json().catch(() => ({}))

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong.')
      }

      if (isLogin) {
        if (data.token) {
          const storage = values.remember ? localStorage : sessionStorage
          storage.setItem('token', data.token)
          setAuthToken(data.token)
        }
        setStatus({ type: 'success', message: 'Login successful.' })
        setValues((prev) => ({ ...prev, password: '' }))
      } else {
        setStatus({ type: 'success', message: 'Registration successful. Please login.' })
        switchMode('login')
      }
    } catch (error) {
      setStatus({ type: 'error', message: error.message || 'Request failed.' })
    } finally {
      setIsLoading(false)
    }
  }

  const loadProfile = async (tokenValue) => {
    if (!tokenValue) return
    setIsProfileLoading(true)

    try {
      const response = await fetch(`${API_BASE_URL}/api/me`, {
        headers: { Authorization: `Bearer ${tokenValue}` },
      })

      const data = await response.json().catch(() => ({}))

      if (!response.ok) {
        throw new Error(data.message || 'Unable to load profile.')
      }

      setUser(data.user)
      setStatus(null)
    } catch (error) {
      clearStoredToken()
      setAuthToken(null)
      setUser(null)
      setStatus({ type: 'error', message: error.message || 'Session expired. Please login again.' })
    } finally {
      setIsProfileLoading(false)
    }
  }

  const handleLogout = () => {
    clearStoredToken()
    setAuthToken(null)
    setUser(null)
    setStatus({ type: 'success', message: 'Logged out successfully.' })
    switchMode('login')
  }

  useEffect(() => {
    if (authToken && !user) {
      loadProfile(authToken)
    }
  }, [authToken])

  const profileInitials = user?.name
    ? user.name
        .trim()
        .split(' ')
        .filter(Boolean)
        .map((part) => part[0])
        .join('')
        .slice(0, 2)
        .toUpperCase()
    : 'AU'

  return (
    <div className="page">
      <div className="bg-orb orb-one" aria-hidden="true" />
      <div className="bg-orb orb-two" aria-hidden="true" />

      <main className="auth-shell">
        <section className="intro">
          <div className="brand">
            <span className="brand-mark" aria-hidden="true" />
            AtlasAuth
          </div>
          <h1>Secure access that feels effortless.</h1>
          <p>
            Build trust with a calm, premium login experience. Designed for
            teams that care about speed, privacy, and clean UX.
          </p>

          <div className="highlight-grid">
            <div className="highlight">
              <p className="highlight-title">JWT ready</p>
              <p className="highlight-body">Built for token-first sessions.</p>
            </div>
            <div className="highlight">
              <p className="highlight-title">Role aware</p>
              <p className="highlight-body">Scale from teams to enterprise.</p>
            </div>
            <div className="highlight">
              <p className="highlight-title">Realtime audit</p>
              <p className="highlight-body">Track logins in one timeline.</p>
            </div>
          </div>

          <div className="stat-row">
            <div>
              <span className="stat">2 min</span>
              <span className="stat-label">setup time</span>
            </div>
            <div>
              <span className="stat">99.98%</span>
              <span className="stat-label">uptime</span>
            </div>
            <div>
              <span className="stat">120k+</span>
              <span className="stat-label">active users</span>
            </div>
          </div>
        </section>

        <section className="card">
          {user ? (
            <div className="profile">
              <div className="profile-header">
                <div className="avatar" aria-hidden="true">{profileInitials}</div>
                <div>
                  <p className="profile-title">Welcome back,</p>
                  <h2>{user.name || 'Authenticated user'}</h2>
                </div>
              </div>

              {status && (
                <div className={`feedback ${status.type}`} role="alert">
                  {status.message}
                </div>
              )}

              <div className="profile-card">
                <div>
                  <span className="profile-label">Email</span>
                  <span className="profile-value">{user.email}</span>
                </div>
                <div>
                  <span className="profile-label">Session</span>
                  <span className="profile-value">Active</span>
                </div>
              </div>

              <div className="profile-actions">
                <button
                  className="ghost"
                  type="button"
                  onClick={() => loadProfile(authToken)}
                  disabled={isProfileLoading}
                >
                  {isProfileLoading ? 'Refreshing...' : 'Refresh profile'}
                </button>
                <button className="primary" type="button" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="card-top">
                <div className="tabs" role="tablist" aria-label="Auth mode">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={isLogin}
                    className={`tab ${isLogin ? 'active' : ''}`}
                    onClick={() => switchMode('login')}
                  >
                    Login
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={!isLogin}
                    className={`tab ${!isLogin ? 'active' : ''}`}
                    onClick={() => switchMode('register')}
                  >
                    Register
                  </button>
                </div>
                <p className="helper">
                  {isLogin
                    ? 'Welcome back. Please enter your details.'
                    : 'Create your account in less than a minute.'}
                </p>
              </div>

              <form className="form" onSubmit={handleSubmit} aria-busy={isLoading}>
                {status && (
                  <div className={`feedback ${status.type}`} role="alert">
                    {status.message}
                  </div>
                )}
                {!isLogin && (
                  <div className="field">
                    <label htmlFor="name">Full name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Alex Parker"
                      value={values.name}
                      onChange={handleChange}
                      autoComplete="name"
                      disabled={isLoading}
                    />
                  </div>
                )}

                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    value={values.email}
                    onChange={handleChange}
                    autoComplete="email"
                    disabled={isLoading}
                  />
                </div>

                <div className="field">
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    value={values.password}
                    onChange={handleChange}
                    autoComplete={isLogin ? 'current-password' : 'new-password'}
                    disabled={isLoading}
                  />
                </div>

                {!isLogin && (
                  <div className="field">
                    <label htmlFor="confirmPassword">Confirm password</label>
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      placeholder="Re-enter your password"
                      value={values.confirmPassword}
                      onChange={handleChange}
                      autoComplete="new-password"
                      disabled={isLoading}
                    />
                  </div>
                )}

                <div className="meta-row">
                  <label className="check">
                    <input
                      type="checkbox"
                      name="remember"
                      checked={values.remember}
                      onChange={handleChange}
                      disabled={isLoading}
                    />
                    <span>Remember for 30 days</span>
                  </label>
                  <button type="button" className="link" disabled={isLoading}>
                    Forgot password?
                  </button>
                </div>

                <button className="primary" type="submit" disabled={isLoading}>
                  {isLoading
                    ? (isLogin ? 'Signing in...' : 'Creating account...')
                    : (isLogin ? 'Sign in' : 'Create account')}
                </button>

                <div className="divider">
                  <span>or</span>
                </div>

                <button type="button" className="ghost" disabled={isLoading}>
                  Continue with Google
                </button>

                <p className="footnote">
                  By continuing you agree to our Terms and Privacy Policy.
                </p>
              </form>
            </>
          )}
        </section>
      </main>
    </div>
  )
}

export default App
