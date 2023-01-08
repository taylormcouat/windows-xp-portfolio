import React from 'react'
import './MenuBar.css'
import MenuBarStartButton from './MenuBarStartButton'
import MenuBarClock from './MenuBarClock'
import { MenuItemState } from './MenuBarItem'
import MenuBarItem from './MenuBarItem'

export interface MenuBarProps {
    setMenuOnClick: () => void
    startButtonRef: React.RefObject<HTMLDivElement>,
    openWindows: MenuItemState[],
}

const MenuBar: React.FC<MenuBarProps> = (props) => {
    return ( 
    <div className="menu-bar">
        <MenuBarStartButton 
            startButtonRef={props.startButtonRef}
            setMenuOnClick={props.setMenuOnClick}
        />
        <div className="menu-items">
            {props.openWindows.map((item) => (
            <MenuBarItem {...item}/>
            ))}
        </div>
        <MenuBarClock/>
    </div>
    )
}

export default MenuBar