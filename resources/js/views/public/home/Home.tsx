import React, { Component } from "react";

import Nav from "../../components/Nav";
import Header from "../../components/Header";
import ListagemPosts from "../../components/ListagemPosts";

import { BaseProps } from "../../globalInterfaces";

interface Props extends BaseProps {
}

interface State {
    
}

class Home extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            /* posts: [],
            postsDestaque: [],
            next: null */
        }
    }

    render = () => {
        return (
            <>
                <Nav baseUrl={this.props.baseUrl} />
                <Header baseUrl={this.props.baseUrl} />

                <main id="home" className="d-flex flex-column align-items-center">
                    {/* <section className="posts-em-destaque">
                        {
                            this.state.postsDestaque.length ?
                                (
                                    <OwlCarousel items={1} className="owl-theme">
                                        {
                                            this.state.postsDestaque.map((post) => {
                                                return (
                                                    <a className="post" href="https://www.blogallurepets.com.br/2021/06/coisas-que-todo-dono-de-pet-ja-passou.html">
                                                        <div className="d-flex flex-column justify-content-center align-items-center" style={{ backgroundImage: `url("${post.url_img}")` }}>
                                                            <h5>{post.categoria}</h5>
                                                            <h2>{post.titulo}</h2>
                                                        </div>
                                                    </a>
                                                );
                                            })
                                        }
                                    </OwlCarousel>
                                ) : (<></>)
                        }
                    </section> */}

                    <ListagemPosts baseUrl={this.props.baseUrl} />
                </main>
            </>
        );
    }
}

export default Home;