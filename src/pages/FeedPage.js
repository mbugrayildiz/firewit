import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { useHistory } from 'react-router-dom'
import { auth, firestore } from '../firebase'
import Wit from '../components/Wit'
import LoadingPage from './LoadingPage'

const FeedPage = () => {
  const [user] = useAuthState(auth)
  const history = useHistory()

  const witsRef = firestore.collection('wits')
  const query = witsRef.orderBy('createdAt', 'desc')
  const [wits] = useCollectionData(query, { idField: 'id' })

  React.useEffect(() => {
    if (!user) history.push('/')
  }, [history, user])

  const signOut = () => {
    auth.signOut()
  }

  return <React.Fragment>
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1>Wit Feed</h1>
      <div style={{ display: 'flex', gridGap: 20 }}>
        <button className="error" onClick={signOut}>Sign Out</button>
        <button className="primary" onClick={() => history.push('/new')}>Post a Wit</button>
      </div>
    </header>

    <div style={{ padding: '30px 0px' }}>
      {wits ? wits.map((wit, i) => <Wit key={i} {...wit} />) : <LoadingPage />}
    </div>
  </React.Fragment>
}

export default FeedPage
