import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BaseProps } from "../globalInterfaces";

interface Props extends BaseProps { }

class Header extends Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render = () => {
        return (
            <header className="d-flex justify-content-center">
                <Link to={this.props.baseUrl}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" />
                </Link>
            </header>
        );
    }
}

export default Header;