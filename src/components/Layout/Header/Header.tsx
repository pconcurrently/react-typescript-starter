import * as React from 'react';
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

import './Header.scss';

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
                <Navbar color="light" light expand="md" className="shadow1">
                    <Container>
                        <NavbarBrand href="/">{title}</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
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
