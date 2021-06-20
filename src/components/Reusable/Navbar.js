import React, { Component } from 'react';
import { Link } from 'gatsby';
import logo from '../../images/logo.png';
import { FaCartArrowDown } from 'react-icons/fa';

export default class NavBar extends Component {

    state = {
        navbarState: false,
        navbarClass: "collapse navbarUl navbar-collapse",
        menus: [
            {
                id: 1,
                text: "Home",
                url: "/"
            }, {
                id: 2,
                text: "About Us",
                url: "/about"
            }, {
                id:3,
                text: "Services",
                url: "/services"
            }, {
                id: 4,
                text: "Contact",
                url: "/contact"
            }, {
                id: 5,
                text: <FaCartArrowDown className="cart-icon"/>,
                url: '/'
            }
        ]
    }

    myToggler = () => {
        this.state.navbarState ? this.setState({
            navbarState: false, 
            navbarClass: "collapse navbarUl navbar-collapse"
        }) : this.setState({
            navbarState: true, 
            navbarClass: "collapse navbarUl navbar-collapse show"
        })
    }

    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-theme text-white">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand ml-5">
                        <img src={logo} alt="Logo" width="40px"/>
                    </Link>
                    <button onClick={this.myToggler} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="text-white">menu</span>
                    </button>
                    <div className={this.state.navbarClass} id="navbarSupportedContent">
                        <ul className="navbar-nav align-right ml-5 mr-5 text-uppercase navbarUl">
                            {this.state.menus.map( (menu) => {
                                return(
                                    <li key={menu.id} className="nav-item">
                                    <Link to={menu.url} className="nav-link text-white" aria-current="page">
                                        {menu.text}
                                    </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}