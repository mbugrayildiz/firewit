import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, firestore } from '../firebase'

const Wit = ({ id, uid, photoURL, content, displayName }) => {
  const [user] = useAuthState(auth)

  const dewit = () => {
    const witsRef = firestore.collection('wits')
    const docRef = witsRef.doc(id)
    docRef.delete()
  }

  return <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gridGap: 10, margin: 10, padding: 10, border: '1px solid rgba(0, 0, 0, .15)' }}>
    <div style={{ display: 'flex', alignItems: 'center', gridGap: 10 }}>
      <img src={photoURL} style={{ width: 40, display: 'inline-block' }} />
      <div style={{ display: 'grid' }}>
        <span style={{ fontSize: 13, fontWeight: 'bold' }}>{displayName}</span>
        <span style={{ fontSize: 16 }}>{content}</span>
      </div>
    </div>
    {uid === user?.uid && <button className="error slim" onClick={dewit}>X</button>}
  </div>
}

export default Wit
