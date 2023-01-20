import React from 'react';
import twitlogo from './images/twitter.png';
import fblogo from './images/facebook.png';
import iglogo from './images/instagram.png';
import ghlogo from './images/github.png';

export default function Footer() {
    return (
        <footer className="socials">
            <img src={twitlogo} alt="twitter-icon"/>
            <img src={fblogo} alt="facebook-icon"/>
            <img src={iglogo} alt="instagram-icon"/>
            <img src={ghlogo} alt="github-icon"/>
        </footer>
    )
}