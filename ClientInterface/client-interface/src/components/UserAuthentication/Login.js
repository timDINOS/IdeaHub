import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link } from "react-router-dom";


class Login extends Component {
    constructor() {
        super();
        this.state = {
            email = "",
            password = "",
            errors: {}
        };
    }

    processNextAction(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
        }
        else if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    changePage(e) {
        this.setState({ [e.target.id]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        var userData = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.loginUser(userData);
    };
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateProps, 
    {loginUser})
    (Login);