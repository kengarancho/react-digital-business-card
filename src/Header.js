import React from 'react';
import image from './images/ken.jpg';

export default function Header() {
    return (
        <div className="header">
            <img className="ken-image" src={image} alt="ken-pic" />
            <h2>Ken Garancho</h2>
            <h4>Frontend Developer</h4>
            <p>Ken Website</p>
            <div className="button">
                <button className="email-btn">Email</button>
                <button className="linkedin-btn">LinkedIn</button>
            </div>
        </div>
        
    )
}