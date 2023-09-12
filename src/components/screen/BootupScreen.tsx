import React, { useEffect } from 'react'
import useStateRef from 'react-usestateref'
import './BootupScreen.css'
import xpLogo from './../../data/xp-logo.png'

interface BootUpScreenProps {
    onClickStart: () => void,
}

const BootupScreen: React.FC<BootUpScreenProps> = (props) => {
    const [dashPos, setDashPos] = useStateRef(-3)

    useEffect(() => {
        const showTimer = setTimeout(() => {
            props.onClickStart()
        }, 3000)
        
        return () => {
            clearTimeout(showTimer)
        }
    }, [])

    setTimeout(() => {
        if (dashPos > 18) {
            setDashPos(-3)
        } else {
            setDashPos(dashPos + 1.5)
        }
    }, 200)

    return ( 
    <div className='bootup-screen'>
        <div className='logo'>
            <img src={xpLogo}/>
        </div>
         <div className='progress-bar'>
            <div className='progress-dash' style={{transform: `translateX(${dashPos}em)`}}/>
        </div>
        <div className='disclaimer'>
            All Microsoft logos, images and sounds do not belong to me. This website
            is purely for educational and personal use.
        </div>
    </div>
    )
}

export default BootupScreen