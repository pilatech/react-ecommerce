import React, { Component } from 'react'
import logo from '../logo.svg'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from './Button'

export default class Navbar extends Component {
    render() {
        return (
            <Navwrapper className="navbar bg-primary navbar-dark px-sm-5">
                <Link to="/">
                    <img src={logo} alt="Logo" className="navbar-brand"/>
                </Link>
                <ul className="navbar-nav align-items-center mr-auto">
                    <li className="nav-item ml-5">
                        <Link className="nav-link" to="/">Products</Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <Button>
                        <i className="fas fa-cart-plus"/>
                        my cart
                    </Button>
                </Link>
            </Navwrapper>
        )
    }
}

const Navwrapper = styled.nav`
    background: var(--mainBlue) !important;
    .nav-link {
        color: var(--mainWhite) !important;
    }
`