import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { Pagination } from '@mui/material'
import { PaginationWrapper } from './style'
import { useDispatch, useSelector } from 'react-redux'
import { changeCurrentPageAction, changeRoomListAction, fetchRoomListData } from '@/store/modules/entire/actionCreators'
import { fetchHomeDataAction } from '@/store/modules/home'

const EntirePagination = memo((props) => {
  const {totalCount,currentPages,roomList} =useSelector((state)=>{
    return {
      totalCount:state.entire.totalCount,
      currentPages:state.entire.currentPages,
      roomList:state.entire.roomList

    }
  })
  const roomCountStart = currentPages*20+1
  const roomCountEnd = (currentPages+1)*20
  const paginationCount = Math.ceil(totalCount/20)

  const dispatch = useDispatch()
  function pageChangeHandler(event,page){

  dispatch(changeCurrentPageAction(page-1))
  dispatch(fetchRoomListData())
  window.scrollTo(0,0)

  }
  return (
    <PaginationWrapper>
     {!!roomList.length&&( <div className="info"> 
      <Pagination count={paginationCount} onChange={pageChangeHandler}/>  
      <div className="desc">
        第{roomCountStart}-{roomCountEnd}房源，共{totalCount}个房源
      </div>     
      </div>
     )}
    </PaginationWrapper>
  )
})

EntirePagination.propTypes = {}

export default EntirePagination