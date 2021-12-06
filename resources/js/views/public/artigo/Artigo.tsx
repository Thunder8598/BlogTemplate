import React, { Component } from "react";

import Fetch from "../../../helpers/Fetch";

import Nav from "../../components/Nav";
import Header from "../../components/Header";
import ListagemPosts from "../../components/ListagemPosts";

import { BaseProps } from "../../globalInterfaces";

interface DataContent {
    id_post: number | null,
    titulo: string,
    resumo: string,
    conteudo: string,
    created_at: string,
    url_img: string,
    categoria: string,
    autor: string,
}

interface Props extends BaseProps { }

interface State {
    data: DataContent | null,
    id?: string
}

class Artigo extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        const url = new URL(location.href);
        const match = url.pathname.match(/\/\d+/gmi);

        this.state = {
            data: null,
            id: match ? match[0]?.replace(/\D/gmi, "") : undefined
        }
    }

    render = () => {

        if (!this.state.data)
            return <></>;

        const { titulo, autor, categoria, conteudo, resumo, created_at, url_img } = this.state.data;

        return (
            <>
                <Nav baseUrl={this.props.baseUrl} />
                <Header baseUrl={this.props.baseUrl} />

                <main id="artigo" className="d-flex flex-column align-items-center">
                    <h1>{titulo}</h1>
                    <p><span>{autor}</span>/<span>{new Date(created_at).toDateString()}</span>/<span>{categoria}</span></p>

                    <img src={location.origin + "/" + url_img.replace("public", "storage")} alt={titulo} title={titulo} />

                    <div id="content">
                        <p id="resumo" dangerouslySetInnerHTML={{ __html: resumo }}></p>

                        <div dangerouslySetInnerHTML={{ __html: conteudo }}></div>
                    </div>

                    <ListagemPosts baseUrl={this.props.baseUrl} titulo="Veja também" maxNumPosts={3} />
                </main>
            </>
        );
    }

    componentDidMount = () => {
        this.loadContent();
    }

    private loadContent = async () => {

        try {
            if (!this.state.id)
                throw "Nenhum id encontrado";

            this.setState({ data: await Fetch.get<DataContent>(`${this.props.baseUrl}/data/artigo/carregar/${this.state.id}`) });
        } catch (error) {

        }
    }
}

export default Artigo;