import React, {RefObject, useState} from 'react'
import './PopupMenu.css'
import duckyAvatar from '../../data/rubber-ducky.jpg'
import powerOffIcon from '../../data/power-off-icon.png'
import logOffIcon from '../../data/log-off-icon.png'
import documentsIcon from '../../data/documents-icon.png'
import picturesIcon from '../../data/pictures-icon.png'
import musicIcon from '../../data/music-icon.png'

interface PopupMenuProps {
    isMenuActive: boolean
    menuRef: RefObject<HTMLDivElement>
}

const PopupMenu: React.FC<PopupMenuProps> = (props) => {
    return (
        <>
        { props.isMenuActive && 
        <div className='pop-up-menu' id='unselectable' ref={props.menuRef}>
            <div className='header'>
                <img className='user-icon' src={duckyAvatar}/>
                Guest
            </div>
            <div className='menu'>
                <div className='menu-left-side'>

                </div>
                <div className='menu-right-side'>
                    <div className='my-menu'>
                            <div className='my-item' onClick={() => alert("More features coming soon!")}>
                                <img src={documentsIcon}/>
                                <span>My Documents</span>
                            </div>
                            <div className='my-item' onClick={() => alert("More features coming soon!")}>
                                <img src={picturesIcon}/>
                                <span>My Pictures</span>
                            </div>
                            <div className='my-item' onClick={() => alert("More features coming soon!")}>
                                <img src={musicIcon}/>
                                <span>My Music</span>
                            </div>
                    </div>
                </div>
            </div>
            <div className='footer'>
                <div className='footer-option'>
                    <img src={logOffIcon}/>
                    <span>Log Off</span>
                </div>
                <div className='footer-option'>
                    <img src={powerOffIcon}/>
                    <span>Power Off</span>
                </div>
            </div>
        </div>}
        </>
    )
    
}

export default PopupMenu