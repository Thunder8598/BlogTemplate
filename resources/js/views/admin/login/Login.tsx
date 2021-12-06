import React from "react";
import { Redirect } from "react-router-dom";
import { Alert } from "react-bootstrap";

import Fetch from "../../../helpers/Fetch";
import { BaseProps } from "../../globalInterfaces";

interface FetchExceptionValidation {
    status: string,
    error: string
}

interface Props extends BaseProps { }

interface State {
    redirect: boolean,
    error?: string
}

class Login extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            redirect: false,
            error: undefined
        }
    }

    render = () => {

        const { redirect, error } = this.state;

        return (
            <main id="login" className="d-flex justify-content-center align-items-center">

                <form className="shadow d-flex flex-column" onSubmit={this.submitHandle}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" />
                    {error ? <Alert variant="danger">{error}</Alert> : (<></>)}

                    <div className="d-flex flex-column">
                        <label htmlFor="email">E-mail:</label>
                        <input id="email" name="email" required/>
                    </div>

                    <div className="d-flex flex-column">
                        <label htmlFor="senha">Senha:</label>
                        <input name="senha" id="senha" type="password" required/>
                    </div>

                    <div className="d-flex" style={{ justifyContent: "center" }}>
                        <button type="submit">Entrar</button>
                    </div>
                </form>

                {redirect ? (<Redirect to={this.props.baseUrl + "/admin"} />) : (<></>)}

            </main>
        );
    }

    private submitHandle = async (evt: React.FormEvent<HTMLElement>) => {
        evt.preventDefault();

        try {
            const data = new FormData((evt.target as HTMLFormElement));

            await Fetch.post(`${this.props.baseUrl}/admin/auth/login`, data);

            this.setState({ redirect: true });

        } catch (err) {
            const { status } = (err as Response);

            switch (status) {
                case 403:
                    this.setState({ error: (await (err as Response).json() as FetchExceptionValidation).error });
                    break;
                default:
                    this.setState({ error: "Não foi possivel fazer o login. Por favor tente mais tarde." });
                    break;
            }
        }
    }

}

export default Login;