import React, { Component } from "react";

import Nav from "../../components/Nav";
import Header from "../../components/Header";
import ListagemPosts, { PostsDataResponse } from "../../components/ListagemPosts";

import { BaseProps } from "../../globalInterfaces";
import Fetch from "../../../helpers/Fetch";
import { PostData } from "../../components/Post";
import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";

interface Props extends BaseProps {
}

interface State {
    postsDestaque: PostData[]
}

class Home extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            postsDestaque: []
        }
    }

    render = () => {
        return (
            <>
                <Nav baseUrl={this.props.baseUrl} />
                <Header baseUrl={this.props.baseUrl} />

                <main id="home" className="d-flex flex-column align-items-center">
                    <section className="posts-em-destaque">
                        {
                            this.state.postsDestaque.length ?
                                (
                                    <OwlCarousel items={1} className="owl-theme" autoplay loop>
                                        {
                                            this.state.postsDestaque.map(({ titulo, categoria, url_img, id_post }) => {
                                                return (
                                                    <Link className="post" to={`${this.props.baseUrl}/artigo/${id_post}`}>
                                                        <div className="d-flex flex-column justify-content-center align-items-center" style={{ backgroundImage: `url("${location.origin + "/" + url_img.replace("public", "storage")}")` }}>
                                                            <h5>{categoria}</h5>
                                                            <h2>{titulo}</h2>
                                                        </div>
                                                    </Link>
                                                );
                                            })
                                        }
                                    </OwlCarousel>
                                ) : (<></>)
                        }
                    </section>

                    <ListagemPosts baseUrl={this.props.baseUrl} />
                </main>
            </>
        );
    }

    componentDidMount = () => {
        this.loadDestaques();
    }

    private loadDestaques = async () => {
        try {
            this.setState({ postsDestaque: await Fetch.get<PostData[]>(`${this.props.baseUrl}/data/artigo/listar/destaques`) });
        } catch (error) {
            console.warn("Não foi possivel carregar os posts");
        }
    }
}

export default Home;