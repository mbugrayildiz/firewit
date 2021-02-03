import React from 'react'

const LoadingPage = () => {
  return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0 }}>
    <img
      style={{ width: 60 }}
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbison.usgs.gov%2Fimages%2Fspinner2.gif&f=1&nofb=1"
    />
  </div>
}

export default LoadingPage
