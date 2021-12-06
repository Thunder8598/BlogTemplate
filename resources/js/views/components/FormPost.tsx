import React, { Component } from "react";
import RichTextEditor, { EditorValue } from "react-rte";
import Fetch from "../../helpers/Fetch";
import { CategoriaMeta } from "../globalInterfaces";

interface PostFormData {
    titulo: string,
    resumo: string,
    conteudo: EditorValue,
    imagem: File | null,
    idCategoria?: string
}

interface FetchResponse {
    status: "sucesso" | "erro"
    mensagem: string,
}

interface Props {
    formUrl: string,
    categorias: CategoriaMeta[]
    className?: string
}

interface State extends PostFormData {
    resposta: FetchResponse | null
}

class FormPost extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            titulo: "",
            resumo: "",
            conteudo: RichTextEditor.createEmptyValue(),
            imagem: null,
            resposta: null
        }
    }

    render = () => {

        const { titulo, resumo, conteudo, resposta } = this.state;

        return (
            <form onSubmit={this.onSubmit} className={`form-post ${this.props.className}`}>

                {
                    resposta ?
                        (
                            <div className={resposta.status == "sucesso" ? "alert alert-success" : "alert alert-danger"} role="alert">
                                {resposta?.mensagem}
                            </div>
                        ) : <></>
                }

                <div className="form-group">
                    <label htmlFor="titulo-post">Título:</label>
                    <input onInput={(evt) => this.setState({ titulo: evt.currentTarget.value })} value={titulo} type="text" className="form-control" id="titulo-post" required />
                </div>

                <div className="form-group">
                    <label htmlFor="categoria-post">Categoria:</label>
                    <select onInput={(evt) => this.setState({ idCategoria: evt.currentTarget.value })} className="form-control" id="categoria-post" required>
                        <option value="">Selecione</option>
                        {this.props.categorias.map(({ id, titulo }) => <option value={id}>{titulo}</option>)}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="titulo-post">Imagem:</label>
                    <input type="file" onChange={this.onFileUpload} className="form-control-file" required />
                </div>

                <div className="form-group">
                    <label htmlFor="resumo-post">Resumo:</label>
                    <textarea onInput={(evt) => this.setState({ resumo: evt.currentTarget.value })} value={resumo} className="form-control" id="resumo-post" required></textarea>
                </div>

                <div className="form-group">
                    <RichTextEditor value={conteudo} onChange={(conteudo) => this.setState({ conteudo })} />
                </div>

                <div className="form-group">
                    <button type="submit" className="btn btn-success">Criar</button>
                </div>
            </form>
        );
    }

    private onFileUpload = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = evt.target;

        if (!files || !files[0])
            return;

        this.setState({ imagem: files[0] });
    }

    private onSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();

        const { titulo, resumo, conteudo, imagem, idCategoria } = this.state;

        const formData = new FormData();

        formData.append("titulo", titulo);
        formData.append("resumo", resumo);
        formData.append("conteudo", conteudo.toString("html"));

        if (!imagem) {
            this.setState({
                resposta: {
                    status: "erro",
                    mensagem: "Por favor insira uma imagem."
                }
            });
            return;
        }

        if (idCategoria)
            formData.append("idCategoria", idCategoria);

        formData.append("imagem", imagem);

        try {
            this.setState({
                resposta: await Fetch.post<FetchResponse>(this.props.formUrl, formData),
                titulo: "",
                resumo: "",
                conteudo: RichTextEditor.createEmptyValue(),
                imagem: null
            });

        } catch (err) {
            const { status } = (err as Response);

            switch (status) {
                case 403:
                    this.setState({ resposta: await (err as Response).json() as FetchResponse });
                    break;
                default:
                    this.setState({
                        resposta: {
                            mensagem: "Erro interno do servidor. Tente mais tarde",
                            status: "erro"
                        }
                    });
                    break;
            }
        }
    }
}

export default FormPost;