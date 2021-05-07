import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,

    NavbarText
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../logo.svg';

const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (

        <Navbar color="light" light expand="md">
            <div className="container">
                <NavbarBrand tag={Link} to="/">
                    <Logo />
                </NavbarBrand>

                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink tag={Link} to="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/products">Products</NavLink>
                        </NavItem>
                        <NavItem>
                    <NavLink tag={Link} to="/contact">Contact</NavLink>
                </NavItem>
                    </Nav>
                </Collapse>
            </div>

        </Navbar>

    );
}

export default Example;