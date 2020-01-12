import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Badge
} from 'reactstrap';

export default class NavBar extends Component {

    render() {
        return (<div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">Blog</NavbarBrand>
                <Nav className="mr-auto" >
                    <NavItem>
                        <NavLink style={{ color: "black" }} href="/Articles">Articles</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink style={{ color: "black" }} href="/About">About</NavLink>
                    </NavItem>
                    <NavItem><NavLink >Counter <Badge color="dark">{this.props.counter}</Badge></NavLink>
                    </NavItem>
                </Nav>

            </Navbar>
        </div >
        );
    }
}
