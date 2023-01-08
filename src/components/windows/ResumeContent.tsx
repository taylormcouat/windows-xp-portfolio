import React from 'react'
import './Window.css'
import myResume from "./../../data/resume.pdf"

const ResumeContent: React.FC = () => {
    return(
        <iframe src={myResume} style={{width: '100%', height: '100%'}}/>
    )
}

export default ResumeContent