import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        hello from navbar
                    </div>
                </div>
            </nav>
        )
    }
}
