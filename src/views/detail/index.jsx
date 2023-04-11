import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import DetailBrowser from './children-components/detailBrowser'

const Detail = memo(() => {
  const {detailInfo} = useSelector((state)=>{
   return {detailInfo:state.detail.detailInfo} 
  })
  return (
    <div><DetailBrowser/></div>
  )
})

export default Detail