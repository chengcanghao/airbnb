import React, { memo } from 'react'
import { SectionFooterWrapper } from './style'
import IconMoreArrow from '@/assets/svg/icon-more-arrow'
import { useNavigate } from 'react-router-dom'

const SectionFooter = memo((props) => {
  const navigate = useNavigate()

  function navigateHandler(){
    navigate('/entire')
  }
  const {name} = props
  let shownName = ""
  if(name){

    shownName = `${name}`


  }
  return (
    <SectionFooterWrapper>
        <div className="info" onClick={navigateHandler}>
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


export default SectionFooter