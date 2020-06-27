import React, { Component } from 'react'
// import {Link} from 'react-router-dom';
import logo from '../images/lo'
export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <img src={logo} alt=""/>
                    </div>
                </div>
            </nav>
        )
    }
}
