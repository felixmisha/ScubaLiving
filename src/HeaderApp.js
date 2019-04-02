import React, {Component} from 'react'
import {Link} from 'react-router-dom'




class Appheader extends Component {
    render() {
        return(
            <header>
                <nav>
                    <ul>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/shop">DYKKERUDSTYR</Link></li>
                        <li><Link to="/travel">DYKKERREJSER</Link></li>
                        <li><Link to="/course">DYKKERKURSER</Link></li>
                        <li><Link to="/contact">KONTAKT</Link></li>
                        <li><Link to="/about">OM OS</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Appheader