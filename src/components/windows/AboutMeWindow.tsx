import React from 'react'
import './Window.css'
import taylorPic from './../../data/taylor.jpg'

const AboutMeContent: React.FC = () => {
    return(
        <div style={{
            fontSize: '14px',
            fontFamily: 'Trebuchet MS',
            textAlign: 'center',
        }}>
            <p>Hey there! I am a 4th year Computer Engineering student at UBC with a previous degree in Chemistry from the University of Calgary.
                I enjoy solving complex problems, analyzing data and developing full stack web applications. I particularly enjoy developing beautiful front-end applications.
                <br></br>
                <br></br>
                In my free time I run (I ran my <a href='https://results.raceroster.com/v2/en-CA/results/g466r93zpgr6yk4a/detail/xuh5kt49daqmengt'>first Marathon </a> in May!), perform weekly with <a href='https://www.instagram.com/ubcimprov/'>UBC Improv</a> (my univerity's Improv club), and hang out with my friends.
                I graduate in May 2024 and am looking for a full-time software engineering role!</p>
            <img style={{height: '400px'}} src={taylorPic}/>
        </div>
    )
}

export default AboutMeContent