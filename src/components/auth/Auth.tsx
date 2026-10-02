import { useState } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { auth } from '../../firebase'

function Auth() {
  const [isRegistering, setIsRegistering] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()

    if (!email.trim() || !password.trim()) {
      setError('Please enter your email and password.')
      return
    }

    setLoading(true)
    setError('')

    try {
      if (isRegistering) {
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        )
      } else {
        await signInWithEmailAndPassword(
          auth,
          email,
          password
        )
      }
    } catch (error: unknown) {
      console.error(error)

      if (
        typeof error === 'object' &&
        error !== null &&
        'code' in error &&
        typeof error.code === 'string'
      ) {
        if (error.code === 'auth/email-already-in-use') {
          setError('This email is already registered.')
        } else if (error.code === 'auth/invalid-email') {
          setError('Please enter a valid email.')
        } else if (error.code === 'auth/weak-password') {
          setError(
            'Password should be at least 6 characters.'
          )
        } else if (
          error.code === 'auth/invalid-credential'
        ) {
          setError('Invalid email or password.')
        } else {
          setError(
            'Something went wrong. Please try again.'
          )
        }
      } else {
        setError('Something went wrong. Please try again.')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="auth">
      <div className="auth__card">
        <h2>
          {isRegistering
            ? 'Create Account'
            : 'Welcome Back'}
        </h2>

        <p>
          {isRegistering
            ? 'Create an account to save your favorite movies.'
            : 'Sign in to access your account.'}
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) =>
              setEmail(event.target.value)
            }
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
          />

          {error && (
            <p className="auth__error">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
          >
            {loading
              ? 'Please wait...'
              : isRegistering
                ? 'Register'
                : 'Login'}
          </button>
        </form>

        <button
          type="button"
          className="auth__switch"
          onClick={() => {
            setIsRegistering(!isRegistering)
            setError('')
          }}
        >
          {isRegistering
            ? 'Already have an account? Login'
            : "Don't have an account? Register"}
        </button>
      </div>
    </section>
  )
}

export default Auth