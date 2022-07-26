import {Grid} from "@mui/material";
import React, {Component} from "react";
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import CommonButton from "../common/Button";


class AddVehicleType extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                vehicle_Type_Id:"",
                type:"",
                loss_Damage_Waiver:"",
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
            case "vehicle_Type_Id":
                const vehicle_Type_Id = event.target.value;
                this.setState(Object.assign(this.state.formData, {vehicle_Type_Id: vehicle_Type_Id}));
                // this.setState({ userId });
                break;

            case "type":
                const type = event.target.value;
                this.setState(Object.assign(this.state.formData, {type: type}));
                break;

            case "loss_Damage_Waiver":
                const loss_Damage_Waiver = event.target.value;
                this.setState(Object.assign(this.state.formData, {loss_Damage_Waiver: loss_Damage_Waiver}));
                break;

            default:
                break;
        }
    };

    render() {
        const {classes} = this.props;
        return (<Grid container direction={'row'} xs={12} className={classes.container}>
            <ValidatorForm
                onSubmit={this.handleSubmit}
                onError={(errors) => console.log(errors)}
                className={classes.validator}
            >
                <Grid item container direction={'row'} xs={12} gap={'15px'} justifyContent={'center'}
                      alignContent={'center'}
                      className={classes.container}>
                    <Grid item container direction={'column'} xs={12} gap={'15px'}>
                        <TextValidator
                            label="Vehicle Type ID"
                            onChange={this.handleChange}
                            name="vehicleTypeID"
                            value={this.state.formData.password}
                            validators={["required"]}
                            errorMessages={["This field is required"]}
                            className="w-full"
                            style={{minWidth: '100%'}}
                        />
                        <TextValidator
                            label="Type"
                            onChange={this.handleChange}
                            name="type"
                            value={this.state.formData.password}
                            validators={["required"]}
                            errorMessages={["This field is required"]}
                            className="w-full"
                            style={{minWidth: '100%'}}
                        />
                        <TextValidator
                            label="loss_Damage_Waiver"
                            onChange={this.handleChange}
                            name="lossDamageWaiver"
                            value={this.state.formData.password}
                            validators={["required"]}
                            errorMessages={["This field is required"]}
                            className="w-full"
                            style={{minWidth: '100%'}}
                        />
                        <CommonButton
                            size="large"
                            variant="contained"
                            label="Add"
                            type="submit"
                            className="text-white bg-blue-500 font-bold tracking-wide"
                            style={{backgroundColor: 'rgba(25, 118, 210, 0.95)', width: '100%'}}
                        />
                    </Grid>

                </Grid>
            </ValidatorForm>

        </Grid>);
    }
}

export default withStyles(styleSheet)(AddVehicleType);