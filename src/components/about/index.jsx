import React from 'react'
import './style.css'

const About = (props) => {
    return (
        <div className="main-about" id="main">
            <h1 className="text-center-about">About App</h1>
            <div className='black-class'>
                <div className='gap-about'>
                    <h2>Analyze Your Text</h2>
                    <p>Textutils gives you a way to analyze your text quickly and efficiently. It lets you count words, count characters, or estimate reading time. It has both light and dark mode for better compatibility.</p>
                </div>
                <div className='gap-about'>
                    <h2>Free To Use</h2>
                    <p>TextUtils is a free character counter tool that provides instant character count and word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word / character limit.</p>
                </div>
                <div className='gap-about'>
                    <h2>Browser Compatible</h2>
                    <p>This word counter software works in any web browser such as Chrome, Firefox, Internet Explorer, Safari, Opera, etc.</p>
                </div>
            </div>
        </div>
    )
}

export default About;
