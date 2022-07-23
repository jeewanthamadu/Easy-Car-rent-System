import {Link, Typography,Grid} from "@mui/material";
import React, { Component } from "react";
import CommonButton from "../../components/common/Button";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { styleSheet } from "./style";
import { withStyles } from "@mui/styles";

class AddNewVehicle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                userName: "",
                password: "",
            },
        };
    }

    handleSubmit = async () => {
        console.log("Hi handle");
        console.log(this.state.formData);
    };

    handleChange = (event) => {
        let id = event.target.name;
        switch (id) {
            case "userName":
                const userName = event.target.value;
                this.setState(
                    Object.assign(this.state.formData, { userName: userName })
                );
                // this.setState({ userId });
                break;

            case "password":
                const password = event.target.value;
                this.setState(
                    Object.assign(this.state.formData, { password: password })
                );
                break;

            default:
                break;
        }
    };

    render() {
        const { classes } = this.props;
        return (
            <Grid container>

            </Grid>
        );
    }
}
export default withStyles(styleSheet)(AddNewVehicle);