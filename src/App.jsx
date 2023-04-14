import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '@/router'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'
import useScrollToTop from './hooks/useScroll'
const App = memo(() => {
  useScrollToTop()  
  return (
    <div className='app'>
      <div className='header'>
        <AppHeader />
      </div>

      <div className='pages'>{useRoutes(routes)}</div>

      <div className='footer'>
        <AppFooter />
      </div>
    </div>
  )
})

export default App