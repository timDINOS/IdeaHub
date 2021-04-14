import  React, { Component } from "react";
import { Link } from "react-router-dom";

class Menu extends Componenet {
    render() {
        return (
            <div className="navbar-fixed">
                <nav className="z-depth-0">
                    <div className="nav-wrapper white">
                        <Link to="/" style={{
                            fontFamily: "monospace"
                        }}
                        className="col s5 brand-logo center black-text">
                            <i className="material-icons">buttons</i>
                        </Link>
                    </div>
                </nav>
            </div>
        );
    }
}