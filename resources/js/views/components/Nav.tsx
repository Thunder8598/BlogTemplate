import React, { Component } from "react";
import { Redirect } from "react-router";
import { BaseProps } from "../globalInterfaces";

interface Props extends BaseProps { }

interface State {
    search: string,
    redirect: boolean
}

class Nav extends Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            search: "",
            redirect: false
        };
    }

    render = () => {
        return (

            this.state.redirect ?
                <Redirect exact to={`${this.props.baseUrl}/busca?q=${this.state.search}`} />
                :
                (
                    <nav className="shadow d-flex align-items-center justify-content-center">
                        <form onSubmit={this.onSubmit}>
                            <input onInput={({ currentTarget }) => this.setState({ search: currentTarget.value })} type="text" name="search" />
                            <button type="submit">Buscar</button>
                        </form>
                    </nav>
                )
        );
    }

    private onSubmit = (evt: React.FormEvent) => {
        evt.preventDefault();

        this.setState({ redirect: true });
    }
}

export default Nav;