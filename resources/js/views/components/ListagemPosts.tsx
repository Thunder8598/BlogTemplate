import React, { Component } from "react";
import Fetch from "../../helpers/Fetch";
import { BaseProps } from "../globalInterfaces";
import Post, { PostData } from "./Post";

interface PostsDataResponse {
    current_page: number,
    data: PostData[],
    first_page_url: string,
    from: number,
    next_page_url: null | string,
    path: string,
    per_page: number,
    prev_page_url: null,
    to: number
}

interface Props extends BaseProps {
    titulo?: string,
    maxNumPosts?: number,
    pesquisa?: string
}

interface State {
    posts: PostData[],
    next: null | string,
}

class ListagemPosts extends Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            next: null,
            posts: []
        }
    }

    render = () => {
        const { titulo } = this.props;

        return (
            <section className="listagem-posts d-flex flex-column align-items-center">

                {titulo ? <h2>{titulo}</h2> : <></>}

                <div>
                    {this.state.posts.map((postData) => <Post {...postData} />)}
                </div>
            </section>
        );
    }

    componentDidMount = () => {
        this.loadPosts();
    }

    private loadPosts = async () => {

        const { next } = this.state;
        let { posts } = this.state;

        let url = next ?? `${this.props.baseUrl}/data/artigo/listar`;

        if (this.props.maxNumPosts)
            url = `${this.props.baseUrl}/data/artigo/listar?page=1&limit=${this.props.maxNumPosts}`;
        else if (this.props.pesquisa)
            url = `${this.props.baseUrl}/data/artigo/pesquisar?search=${this.props.pesquisa}`;

        try {
            const { data, next_page_url } = await Fetch.get<PostsDataResponse>(url);

            posts.push(...data);

            this.setState({ posts, next: next_page_url });
        } catch (error) {

        }
    }
}

export default ListagemPosts;
export type { PostsDataResponse };