import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {
    loginOperations,
    registerOperations,
} from "../../redux/auth/authOperations";
import {Formik, Form} from "formik";
import {validationSchema} from "./Validation/Validation";
import TextInput from "./TextInput/TextInput";

class Auth extends Component {
    render() {
        return (
            <div>
                <div>
                    <div>
                        <h1>
                            {this.props.location.pathname === "/registration"
                                ? "Registration"
                                : "Login"}
                        </h1>
                        <Formik
                            initialValues={{
                                displayName: "",
                                email: "",
                                password: "",
                            }}
                            validationSchema={validationSchema}
                            onSubmit={(values) => {
                                this.props.location.pathname === "/registration"
                                    ? this.props.registerOperations(values)
                                    : this.props.loginOperations(values);
                            }}
                        >
                            {({isSubmitting}) => (
                                <Form>
                                    {this.props.location.pathname === "/registration" ? (
                                        <>
                                            <TextInput
                                                name="displayName"
                                                type="displayName"
                                                placeholder="Name"
                                                component="p"
                                            />
                                            <TextInput
                                                name="email"
                                                type="email"
                                                placeholder="Email"
                                                component="p"
                                            />

                                            <TextInput
                                                name="password"
                                                type="password"
                                                placeholder="Password"
                                                component="p"
                                            />
                                        </>
                                    ) : (
                                        <>
                                            <TextInput
                                                name="email"
                                                type="email"
                                                placeholder="Email"
                                                component="p"
                                            />

                                            <TextInput
                                                name="password"
                                                type="password"
                                                placeholder="Password"
                                                component="p"
                                            />
                                        </>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                    >
                                        {this.props.location.pathname === "/registration"
                                            ? "register"
                                            : "login"}
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, {registerOperations, loginOperations})(
    withRouter(Auth)
);
