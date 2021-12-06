import React, { Component } from "react";

import Nav from "../../components/Nav";
import Header from "../../components/Header";
import ListagemPosts from "../../components/ListagemPosts";

import { BaseProps } from "../../globalInterfaces";
import { Redirect } from "react-router";

interface Props extends BaseProps { }

class Busca extends Component<Props> {
    constructor(props: Props) {
        super(props);

        this.state = {
            redirect: false
        }
    }

    render = () => {

        const url = new URL(location.href);
        const pesquisa = url.searchParams.get("q");

        if (!pesquisa)
            return <Redirect to={this.props.baseUrl} />

        return (
            <>
                <Nav baseUrl={this.props.baseUrl} />
                <Header baseUrl={this.props.baseUrl} />

                <main className="d-flex flex-column align-items-center">
                    <ListagemPosts baseUrl={this.props.baseUrl} pesquisa={pesquisa} />
                </main>
            </>
        );
    }
}

export default Busca;