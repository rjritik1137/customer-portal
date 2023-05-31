import './styles.css'
import React from 'react'
export const App = () => {
  return (
    <React.Fragment>
      <h1>
        React typescript webpack starter - {process.env.NODE_ENV}{' '}
        {process.env.name}
      </h1>
    </React.Fragment>
  )
}
