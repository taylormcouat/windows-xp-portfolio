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
            <p>Hey there! I am a 3rd year Computer Engineering student at UBC with a previous degree in Chemistry from the University of Calgary.
                I enjoy solving complex problems, analyzing data and developing full stack web applications. I particularly enjoy developing beautiful front-end applications.
                <br></br>
                <br></br>
                In my free time I run (at the time of writing this I am training for my <a href='https://bmovanmarathon.ca/'>first marathon</a>), perform weekly with <a href='https://www.instagram.com/ubcimprov/'>UBC Improv</a> (my universities Improv club), and hang out with my friends.
                I graduate in May 2024 and am looking for a full-time software engineering role!</p>
            <img style={{height: '400px'}} src={taylorPic}/>
        </div>
    )
}

export default AboutMeContent