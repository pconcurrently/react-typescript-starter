import * as React from 'react';
// import withStyles from 'isomorphic-style-loader/lib/withStyles';
// import s from './Header.scss';

// console.log(s);

import {
    Collapse,
    Container,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink
} from 'reactstrap';

interface HeaderProps {
    title: string;
}
interface HeaderState {
    isOpen: boolean;
}

class Header extends React.Component<HeaderProps, HeaderState> {
    constructor(props: any) {
        super(props);

        this.state = {
            isOpen: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        const { title } = this.props;
        return (
           <div>
                <Navbar color="light" light expand="md" className="a">
                    <Container>
                        <NavbarBrand href="/">{title}</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="/components/">Components</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="https://github.com/shortgiraffe4/react-typescript-starter">GitHub</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }

}

export default Header;
