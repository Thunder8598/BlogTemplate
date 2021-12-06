import React from "react";
import Router from "./Router";

class Application extends React.Component {
    render = () => {
        return (
            <>
                <Router env={location.origin.match("localhost") ? "development" : "production"} />
            </>
        );
    }
}

export default Application;