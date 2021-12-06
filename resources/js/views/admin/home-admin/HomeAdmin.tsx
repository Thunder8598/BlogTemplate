import React, { Component } from "react";

import Nav from "../../components/Nav";
import Header from "../../components/Header";
import ListagemPosts from "../../components/ListagemPosts";

import { BaseProps, CategoriaMeta } from "../../globalInterfaces";
import FormPost from "../../components/FormPost";
import { Redirect } from "react-router";
import Fetch from "../../../helpers/Fetch";

interface FetchAuthResponse {
    status: "sucesso" | "erro"
}

interface FetchCategoriaResponse {
    status: "sucesso" | "erro"
    data?: CategoriaMeta[]
}

interface Props extends BaseProps {
}

interface State {
    editorAction: null | "criar" | "editar",
    usuarioAutentcado: null | "sucesso" | "erro",
    categorias: CategoriaMeta[]
}

class HomeAdmin extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            editorAction: null,
            usuarioAutentcado: null,
            categorias: []
        }
    }

    render = () => {

        if (!this.state.usuarioAutentcado)
            return <></>;
        else if (this.state.usuarioAutentcado == "erro")
            return <Redirect exact to={`${this.props.baseUrl}/admin/login`} />

        const { editorAction } = this.state;

        return (
            <>
                <main id="home-admin">
                    <section>
                        <ListagemPosts baseUrl={this.props.baseUrl} />
                        {
                            editorAction ? <FormPost formUrl={`${this.props.baseUrl}/data/artigo/criar`} categorias={this.state.categorias} className="show-from-top in" /> : <></>
                        }
                    </section>
                    <section className="d-flex flex-column align-items-center">
                        {
                            editorAction && editorAction == "criar" ?
                                <button className="btn btn-outline-danger" onClick={this.onClickBtnCriarPost}>Cancelar</button> :
                                <button className="btn btn-outline-primary" onClick={this.onClickBtnCriarPost}>Criar Post</button>
                        }

                        <button className="btn btn-outline-danger" onClick={this.onClickBtnSair}>Sair</button>
                    </section>
                </main>
            </>
        );
    }

    componentDidMount = () => {
        this.checkSessao();
        this.loadCategorias();
    }

    private onClickBtnCriarPost = () => {
        const { editorAction } = this.state;
        this.setState({ editorAction: !editorAction ? "criar" : null });
    }

    private onClickBtnSair = () => {
        Fetch.get(`${this.props.baseUrl}/admin/auth/logoff`);
        this.setState({ usuarioAutentcado: "erro" });
    }

    private checkSessao = async () => {
        try {
            const response = await Fetch.get<FetchAuthResponse>(`${this.props.baseUrl}/admin/auth/getsession`);
            this.setState({ usuarioAutentcado: response.status });
        } catch (err) {
            this.setState({ usuarioAutentcado: "erro" });
        }
    }

    private loadCategorias = async () => {
        try {
            const { data } = await Fetch.get<FetchCategoriaResponse>(`${this.props.baseUrl}/data/categoria/listar`);
            this.setState({ categorias: data ?? [] });
        } catch (err) {
            console.error(err);
        }
    }
}

export default HomeAdmin;