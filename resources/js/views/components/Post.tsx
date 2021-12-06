import React, { Component } from "react";
import { Link } from "react-router-dom";

interface PostData {
    created_at: string,
    id_post: number,
    nome: string,
    resumo: string,
    titulo: string,
    url_img: string,
    is_destaque: number,
    categoria: string | null
}

interface Props extends PostData { }

class Post extends Component<Props>{
    constructor(props: Props) {
        super(props);
    }

    render = () => {
        const { titulo, resumo, id_post, url_img, nome, categoria, created_at } = this.props;

        return (
            <article className="post">
                <Link to={`/artigo/${id_post}`}>
                    <div className="d-flex flex-column align-items-center image-container">
                        <img loading="lazy" src={location.origin + "/" + url_img.replace("public", "storage")} />
                        <span>{categoria}</span>
                    </div>
                    <div>
                        <h4 className="title">{titulo}</h4>

                        <div className="meta">
                            <span>{nome}</span>
                            <span>{new Date(created_at).toLocaleDateString()}</span>
                        </div>

                        <p className="text">{resumo}</p>
                    </div>
                </Link>
            </article>
        );
    }
}

export default Post;
export type { PostData };