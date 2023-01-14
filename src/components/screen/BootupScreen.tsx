import React, { useEffect } from 'react'
import useStateRef from 'react-usestateref'
import './BootupScreen.css'
import xpLogo from './../../data/xp-logo.png'

interface BootUpScreenProps {
    onClickStart: () => void,
}

const BootupScreen: React.FC<BootUpScreenProps> = (props) => {
    const [dashPos, setDashPos] = useStateRef(-3)
    const [showProgressBar, setShowProgressBar] = useStateRef(true)
    useEffect(() => {
        const showTimer = setTimeout(() => {
            setShowProgressBar(false)
        }, 7000)
        
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
        {showProgressBar ?
         <div className='progress-bar'>
            <div className='progress-dash' style={{transform: `translateX(${dashPos}em)`}}/>
        </div> : 
        <div className='button-container' onClick={() => props.onClickStart()}>
            <button className='start-button'><span className='blue'>Click</span> <span className='red'>to</span> <span className='green'>Get</span> <span className='yellow'>Started</span></button>
        </div>}
        <div className='disclaimer'>
            All Microsoft logos, images and sounds do not belong to me. This website
            is purely for educational and personal use.
        </div>
    </div>
    )
}

export default BootupScreen