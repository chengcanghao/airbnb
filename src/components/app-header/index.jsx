import React, { memo } from 'react'
import {HeaderWrapper } from './style.jsx'
import HeaderLeft from './children-components/header-left/index.jsx'
import HeadCenter from './children-components/header-center/index.jsx'
import HeaderRight from './children-components/header-right/index.jsx'

const AppHeader = memo(() => {
    return (
             <HeaderWrapper>
               <HeaderLeft/>
                <HeadCenter/>
                <HeaderRight/>
        </HeaderWrapper>
       
    )
})

export default AppHeader