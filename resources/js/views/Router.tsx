import React from "react";
import { Route, BrowserRouter, RouteComponentProps } from "react-router-dom";

import Home from "./public/home/Home";
import Artigo from "./public/artigo/Artigo";
import Busca from "./public/busca/Busca";
import Login from "./admin/login/Login";
import HomeAdmin from "./admin/home-admin/HomeAdmin";

interface Props {
    env: "production" | "development",
}

class Router extends React.Component<Props>{

    private baseUrl: string;

    constructor(props: Props) {
        super(props);

        this.baseUrl = this.props.env == "production" ? "/public" : "";
    }

    render = () => {
        return (
            <BrowserRouter >
                <Route component={() => <Home baseUrl={this.baseUrl} />} exact path={`${this.baseUrl}/`} />
                <Route component={(props: RouteComponentProps) => <Artigo baseUrl={this.baseUrl} key={props.location.pathname} />} exact path={`${this.baseUrl}/artigo/:id`} />
                <Route component={(props: RouteComponentProps) => <Busca baseUrl={this.baseUrl} key={props.location.search} />} exact path={`${this.baseUrl}/busca`} />

                <Route component={() => <Login baseUrl={this.baseUrl} />} exact path={`${this.baseUrl}/admin/login`} />
                <Route component={() => <HomeAdmin baseUrl={this.baseUrl} />} exact path={`${this.baseUrl}/admin`} />
            </BrowserRouter>
        );
    }
}

export default Router;