import PropTypes from "prop-types";
import classnames from "classnames";
import React from "react";
import {Component } from "react";
import { connect } from "react-redux";
import { registerAct } from "../../actions/authenticationActions";
import {Link, withRouter } from "react-router-dom";

class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            password_confirm: "",
            errors: {}
        };
    }

    didRecieveProps(nextPropObj) {
        if (nextPropObj.errors) {
            this.setState({
                errors: nextPropObj.errors
            });
        }
    }

    registerSuccessfull() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/Dashboard");
        }
    }

    onClickChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    onClickSubmit = e => {
        e.preventDefault();
        
        var newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password_confirm: this.state.password_confirm
        };

        this.props.registerAct(newUser, this.props.history);
    };

    render() {
        const { errors } = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="col s8 offset-s2">
                        <Link to="/" className="btn-flat waves-effect">
                            <i className="material-icons left">
                                back
                            </i>
                                Back To Home.
                        </Link>
                        <div className="col s2" style={{ paddingLeft: "11.250px" }}>
                            <h4>
                                <b>Register Today!</b>
                            </h4>
                            <p className="grey-text text-darken-1">
                                Have an account? <Link to="/login">Log In</Link>
                            </p>
                        </div>
                        <form noValidate onSubmit={this.onSubmit}>
                            <div className="input-field col s12">
                                <input onChange={this.onChange} value={this.state.name} error={errors.name} id="name" type="text" className={classnames("", {
                                    invalid: errors.name
                                })}/>
                            <label htmlFor="email">Name</label>
                            <span className="red-text">{errors.name}</span>
                            </div>
                            <div className="input-field col s12">
                                <input onChange={this.onChange} value={this.state.name} error={errors.name} id="name" type="text" className={classnames("", {
                                        invalid: errors.email
                                    })}/>
                                <label htmlFor="email">Email</label>
                                <span className="red-text">{errors.email}</span>
                            </div>
                            <div className="input-field col s12">
                                <input onChange={this.onChange} value={this.state.name} error={errors.name} id="name" type="text" className={classnames("", {
                                        invalid: errors.password
                                    })}/>
                                <label htmlFor="email">Password</label>
                                <span className="red-text">{errors.password}</span>
                            </div>
                            <div className="input-field col s12">
                                <input onChange={this.onChange} value={this.state.name} error={errors.name} id="name" type="text" className={classnames("", {
                                        invalid: errors.password_confirm
                                    })}/>
                                <label htmlFor="email">Please Confirm Your Password</label>
                                <span className="red-text">{errors.password_confirm}</span>
                            </div>
                            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                                <button style={{width: "150px", borderRadius: "3px", letterSpacing: "1.5px", marginTop: "1rem"}} type="submit" className="btn btn-large waves-effect waves-light hoverable blue accent-3">
                                    Sign Up
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

};

Register.propTypes = {
    registerAct: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateProps, {registerAct})(withRouter(Register));

