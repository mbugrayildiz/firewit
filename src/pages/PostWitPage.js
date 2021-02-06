import React from 'react'
import '../pages-styles/PostWitPage.css'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useHistory } from 'react-router-dom'
import { auth, firestore, serverTimestamp } from '../firebase'

const PostWitPage = () => {
  const [user] = useAuthState(auth)
  const history = useHistory()
  const [wit, setWit] = React.useState('')

  React.useEffect(() => {
    if (!user) history.push('/')
  }, [history, user])

  const postWit = async (e) => {
    e.preventDefault()
    if (wit === '') { return }

    const witsRef = firestore.collection('wits')
    witsRef.add({
      uid: user.uid,
      photoURL: user.photoURL,
      displayName: user.displayName,
      content: wit,
      createdAt: serverTimestamp()
    })

    setWit('')
    history.push('/feed')
  }

  return <React.Fragment>
    <h1 className="post-header">Post a Wit !</h1>
    <form className="post-form" onSubmit={postWit}>
      <input className="post-input" value={wit} onChange={e => setWit(e.target.value)} />
      <button className="post-button" type="submit">Post</button>
    </form>
  </React.Fragment>
}

export default PostWitPage
