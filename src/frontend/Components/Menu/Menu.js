import React from 'react';
import './Menu.css';

export default function Menu() {
    
    const clicked = () => {
        console.log(`You have just clicked the button!!`)
    }
      return (
        <div className="menu-button">
            <svg onClick={clicked} className="btn" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="rgb(200, 203, 209)"><path d="M4 22h-4v-4h4v4zm0-12h-4v4h4v-4zm0-8h-4v4h4v-4zm3 0v4h17v-4h-17zm0 12h17v-4h-17v4zm0 8h17v-4h-17v4z"/></svg>
        </div>
    )  
}    