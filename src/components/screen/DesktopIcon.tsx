import React, {useState, useRef} from 'react'
import './DesktopIcon.css'

export interface DesktopIconProps {
    key: number,
    iconImage: string,
    name: string,
    onDoubleClick: () => void,
}

const DesktopIcon: React.FC<DesktopIconProps> = (props) => {

    const [isActive, setActive] = useState(false)
    const ref = useRef<HTMLDivElement>(null)
    document.addEventListener("mousedown", (e) => {
        if (isActive &&
            ref.current &&
            !ref.current.contains(e.target as Node)
        ) {
            setActive(false)
        }
    })


    return( 
    <div 
        className= {isActive ? "desktop-icon-focused" : "desktop-icon"}
        onDoubleClick={props.onDoubleClick} 
        onClick={() => setActive(true)}
        ref={ref}
        id='unselectable'
    >
        <img src={props.iconImage}/>
        <span>{props.name}</span>
    </div>
    )
}

export default DesktopIcon