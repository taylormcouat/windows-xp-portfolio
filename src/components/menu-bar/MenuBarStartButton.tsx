import React, {useState} from 'react'
import './MenuBar.css'
import windowsIcon from '../../data/windows-icon.png'

interface MenuBarStartButtonProps {
    setMenuOnClick: () => void
    startButtonRef: React.RefObject<HTMLDivElement>
}

const MenuBarStartButton: React.FC<MenuBarStartButtonProps> = (props) => {

    const [buttonActive, setButtonActive] = useState(false)

    function clickButton() {
        props.setMenuOnClick()
        setButtonActive(!buttonActive)
    }

    return ( 
    <div 
        className={buttonActive ? "menu-bar-start-icon-active" : 'menu-bar-start-icon'} 
        id="unselectable" 
        onClick={ () => clickButton()}
        ref={props.startButtonRef}
    >
        <img className="menu-bar-start-icon-img" src={windowsIcon}/>
        start
    </div>
    )
}

export default MenuBarStartButton