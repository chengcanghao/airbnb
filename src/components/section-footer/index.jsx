import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionFooterWrapper } from './style'
import IconMoreArrow from '@/assets/svg/icon-more-arrow'

const SectionFooter = memo((props) => {
  const {name} = props
  let shownName = ""
  if(name){

    shownName = `${name}`


  }
  return (
    <SectionFooterWrapper>
        <div className="info">
            <span className='more'>显示
            <span className='name'>
              {shownName}
            </span>
            全部房源</span>
            <IconMoreArrow />
        </div>
    </SectionFooterWrapper>
  )
})

SectionFooter.propTypes = {}

export default SectionFooter