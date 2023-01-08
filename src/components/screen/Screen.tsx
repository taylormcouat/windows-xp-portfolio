import React from 'react'
import './Screen.css'
import DesktopIcon from './DesktopIcon'

interface DesktopIcon {
    key: number,
    iconImage: string,
    name: string,
    onDoubleClick: () => void,
}

interface ScreenProps {
    desktopIcons: DesktopIcon[],
    createWindows: () => any,
}

const Screen: React.FC<ScreenProps> = (props) => {
    
    return ( 
    <div className="screen">
        {props.createWindows()}
        <div className="icons">
            { props.desktopIcons.map((desktopIcon) => (
                <DesktopIcon {...desktopIcon}/>
            ))}
        </div>
    </div>
    )
}

export default Screen