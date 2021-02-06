import React from 'react'
import { auth, GithubAuthProvider, GoogleAuthProvider } from '../firebase'
import '../pages-styles/LandingPage.css'
import {
  useAuthState
} from 'react-firebase-hooks/auth'
import {
  useHistory
} from 'react-router-dom'
import LoadingPage from './LoadingPage'

const LandingPage = () => {
  const [user, loading] = useAuthState(auth)
  const history = useHistory()

  React.useEffect(() => {
    if (user) history.push('/feed')
  }, [history, user])

  const signInWithGoogle = () => {
    const google = new GoogleAuthProvider()

    auth.signInWithRedirect(google)
      .then(() => alert('signed in'))
      .catch(console.log)
  }

  const signInWithGithub = () => {
    const github = new GithubAuthProvider()

    auth.signInWithRedirect(github)
      .then(() => alert('signed in'))
      .catch(console.log)
  }

  return loading
    ? <LoadingPage />
    : <div className="landingPage">
      <h1 className="landing-header">FireWit - Twitter Alternative</h1>
      <br />
      <button className="primary" onClick={signInWithGoogle}>
        Sign In with Google
      </button>
      <br />
      <br />
      <button className="primary" onClick={signInWithGithub}>
        Sign In with GitHub
      </button>
    </div>
}

export default LandingPage
