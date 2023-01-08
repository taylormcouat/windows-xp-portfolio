import React, {useState, useEffect} from 'react'
import './MenuBar.css'


const MenuBarClock: React.FC = () => {

    const [time, setTime] = useState(new Date())

    useEffect(() => {
        setInterval(() => setTime(new Date()), 1000);
    }, []);

    function displayCurrentTime(): String {
        const hour = time.getHours() > 12 ? time.getHours() - 12 : time.getHours()
        const amPm = time.getHours() >= 12 ? 'PM' : 'AM'
        const minute = time.getMinutes() >= 10 ? time.getMinutes() : `0${time.getMinutes()}`
        return `${hour}:${minute} ${amPm}`
    }

    return ( 
    <div className="menu-bar-clock" id="unselectable">
        { displayCurrentTime() }
    </div>
    )
}
export default MenuBarClock