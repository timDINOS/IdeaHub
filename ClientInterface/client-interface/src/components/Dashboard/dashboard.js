import { connect } from "react-redux";
import {userLogout } from "../../actions/authenticationActions";
import PropTypes from "prop-types";
import React, { Component } from "react";

class Dashboard extends Component {
    onClickLogout = e => {
        e.preventDefault();
        this.props.userLogout();
    };

    render() {
        const { user } = this.props.auth;
        
        return (
            <div style={{height: "100vh" }} className="container valign-wrapper">
                <div className="row">
                    <div className="landing-copy col s12 center-align">
                        <h4>
                            <b>Welcome Back,</b> {user.name.split("")[0]}
                            <p className="flow-text grey-text text-darken-1">
                                Your dashboard
                            </p>
                        </h4>
                        <button
                            style={{
                                width: "150px",
                                borderRadius: "3px",
                                letterSpacing: "1.5px",
                                marginTop: "1rem"
                            }}
                            onclick={this.onClickLogout}
                            className="btn btn waves-effect blue accent-3">
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

Dashboard.propTypes = {
    userLogout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

var mapStateProps = state => ({
    auth: state.auth
});

export default connect(mapStateProps, {userLogout })(Dashboard);