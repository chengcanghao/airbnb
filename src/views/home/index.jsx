import React, { memo, useEffect, useState } from 'react'
import CCHRequest from '@/services'
const Home = memo(() => {
  const [highScore, setHighScore] = useState({})

  useEffect(() => {

    CCHRequest.get({ url: '/home/highscore' }).then(res => {
      console.log(res)
      setHighScore(res)
    })

  }, [])

  return (
    <div>Home
      <div className='highScore'>
        <ul>
          {
            highScore?.list?.map(element => {
              return <li key={element.id}>{element.name}</li>
            })
          }
        </ul>
      </div>
    </div>
  )
})

export default Home