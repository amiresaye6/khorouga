import React from 'react';
import './style.css';

function Footer() {
    return (
        <div className='absolute -z-10 bottom-0 left-0 right-0'>
            <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                <defs>
                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g className="parallax">
                    <use href="#gentle-wave" x="48" y="0" fill="rgba(40, 44, 52, 0.7)" />  {/* Dark Slate */}
                    <use href="#gentle-wave" x="48" y="3" fill="rgba(55, 62, 75, 0.5)" />  {/* Darker Blue-Grey */}
                    <use href="#gentle-wave" x="48" y="5" fill="rgba(72, 85, 99, 0.3)" />  {/* Blue-Grey */}
                    <use href="#gentle-wave" x="48" y="7" fill="#2c3e50" />  {/* Midnight Blue */}
                </g>
            </svg>
        </div>
    );
}

export default Footer;
