import React, { Component } from 'react';
import './Menu.css';

export default class Menu extends Component {
    constructor() {
        super();
        this.state = {
            showMenu: false,
            dropDownMenu: '',
        }
        this.menuDropdown = this.menuDropdown.bind(this)
    }

    menuDropdown() {
        this.setState({ showMenu: !this.state.showMenu });
    }

    render() {
        return (
            <div className="menu-container">
                <div className={[
                    'menu', this.state.showMenu ? 'toggle-menu' : ''
                ].join(' ')}>
                    <svg onClick={this.menuDropdown} className="btn" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgb(200, 203, 209)"><path d="M4 22h-4v-4h4v4zm0-12h-4v4h4v-4zm0-8h-4v4h4v-4zm3 0v4h17v-4h-17zm0 12h17v-4h-17v4zm0 8h17v-4h-17v4z" /></svg>
                    <div className="options">Hello</div>
                    
                </div >
                <div className={this.state.showMenu ? 'overlay' : ''} onClick={this.menuDropdown}></div>
            </div>
        )
    }
}    