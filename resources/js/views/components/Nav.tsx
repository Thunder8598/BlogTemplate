import React, { Component } from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
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
                        <form onSubmit={this.onSubmit} className="d-flex">
                            <input onInput={({ currentTarget }) => this.setState({ search: currentTarget.value })} className="form-control" type="text" name="search" />
                            <button type="submit" className="btn btn-outline-primary">
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z"/></svg>
                            </button>
                        </form>

                        <Link to={`${this.props.baseUrl}/admin/login`}>
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" style={{ marginLeft: "15px" }}>
                                <path d="M16 1c-4.418 0-8 3.582-8 8 0 .585.063 1.155.182 1.704l-8.182 7.296v5h6v-2h2v-2h2l3.066-2.556c.909.359 1.898.556 2.934.556 4.418 0 8-3.582 8-8s-3.582-8-8-8zm-6.362 17l3.244-2.703c.417.164 1.513.703 3.118.703 3.859 0 7-3.14 7-7s-3.141-7-7-7c-3.86 0-7 3.14-7 7 0 .853.139 1.398.283 2.062l-8.283 7.386v3.552h4v-2h2v-2h2.638zm.168-4l-.667-.745-7.139 6.402v1.343l7.806-7zm10.194-7c0-1.104-.896-2-2-2s-2 .896-2 2 .896 2 2 2 2-.896 2-2zm-1 0c0-.552-.448-1-1-1s-1 .448-1 1 .448 1 1 1 1-.448 1-1z" />
                            </svg>
                        </Link>
                    </nav >
                )
        );
    }

    private onSubmit = (evt: React.FormEvent) => {
        evt.preventDefault();

        this.setState({ redirect: true });
    }
}

export default Nav;