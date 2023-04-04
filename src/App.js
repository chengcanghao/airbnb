import React, { memo } from 'react'
import HelloWorld from 'components/HelloWorld'

const App = memo(() => {
  return (
    <div>
      <HelloWorld/>
    </div>
  )
})

export default App