import React from 'react'
import './Window.css'

const ReadMeContent: React.FC = () => {
    return(
        <textarea style={{
            resize: 'none',
            width: '100%',
            height: '100%',
            fontSize: '20px',
            fontFamily: 'monospace'
        }}>
Welcome to my personal website inspired by my favorite OS Windows XP! Feel free to take a look around :) If you'd like to contact me you can reach me at taylor.mcouat@gmail.com.
</textarea>
    )
}

export default ReadMeContent