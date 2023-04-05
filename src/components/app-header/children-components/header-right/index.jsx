import React, { memo } from 'react'
import { RightWrapper } from './style'
import LangLogo from '@/assets/svg/lang_logo'
import MenuLogo from '@/assets/svg/menu_logo'
import AvatarLogo from '@/assets/svg/avatar_logo'
const HeaderRight = memo(() => {
  return (
    <RightWrapper>
        <div className="btn">
          <span>login</span>
          <span>register</span>
          <span><LangLogo/></span>
        </div>
        <div className="profile">
          <span><MenuLogo/></span>
          <span className='avatar'><AvatarLogo/></span>

        </div>
    </RightWrapper>
  )
})

export default HeaderRight