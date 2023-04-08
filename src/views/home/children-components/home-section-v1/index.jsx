import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HomeSectionV1Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionFooter from '@/components/section-footer'

const HomeSectionV1 = memo((props) => {
   const {infoData,itemWidth} = props
  return (
   <HomeSectionV1Wrapper>
          <SectionHeader title={infoData.title} subtitle= {infoData.subtitle} />
          <SectionRooms roomList = {infoData.list} itemWidth={itemWidth}/>
          <SectionFooter/>
   </HomeSectionV1Wrapper>
  )
})

HomeSectionV1.propTypes = {}

export default HomeSectionV1