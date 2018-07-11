import * as React from 'react';

interface HeaderProps {
    title: string
}

class Header extends React.Component<HeaderProps, {}> {
    constructor(props: any) {
        super(props);
    }

    render() {
        const { title } = this.props;

        return (
            <header>
                <h1>{title}</h1>
                <span className="fa fa-edit"></span>
            </header>
        );
    }

}

export default Header;
