import React from 'react'
import DesktopHeader from './DesktopHeader'
import MobileHeader from './MobileHeader'

const Header = () => {
    return (
        <header className='header-stick'>
            <DesktopHeader/>
            <MobileHeader/>
        </header>
    )
}

export default Header