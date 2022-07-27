import {Dialog, DialogContent, DialogTitle, Grid, IconButton, Tooltip, Typography,} from "@mui/material";
import React, {Component} from "react";
import Navbar from "../../../components/common/Navbar/Admin";
import Sidebar from "../../../components/common/sideBar";
import CommonButton from "../../../components/common/Button";
import CommonDataTable from "../../../components/common/table";
import AddIcon from "@mui/icons-material/Add";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";
import CloseIcon from "@mui/icons-material/Close";
import AddVehicleRates from "../../../components/addNewVehicleRate";
import vehicleRateService from "../../../services/VehicleRateService";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CustomSnackBar from "../../../components/common/SnackBar";

class VehicleRates extends Component {
    constructor(props) {
        super(props);
        this.state = {
            popup: false,
            alert: false,
            message: "",
            severity: "",

            vehicleRates: {},
            isUpdate: false,

            //  for table
            data: [],
            loaded: false,

            //  for data table
            columns: [
                {
                    field: "rateId",
                    headerName: "Rate ID",
                    width: 228,
                },

                {
                    field: "dailyRate",
                    headerName: "Daily Rate",
                    width: 228,
                },

                {
                    field: "freeKmForaDay",
                    headerName: "Free Km For a Day",
                    width: 228,
                    sortable: false,
                },

                {
                    field: "freeKmForaMonth",
                    headerName: "Free Km For a Month",
                    width: 228,
                },

                {
                    field: "monthlyRate",
                    headerName: "Monthly Rate",
                    width: 228,
                    sortable: false,
                },

                {
                    field: "pricePerExtraKm",
                    headerName: "Price Per Extra Km",
                    width: 228,
                    sortable: false,
                },

                {
                    field: "action",
                    headerName: "Action",
                    width: 228,
                    renderCell: (params) => {
                        return (
                            <>
                                <Tooltip title="Edit">
                                    <IconButton onClick={async () => {
                                        await this.updateRates(params.row);
                                    }}>
                                        <EditIcon className={'text-blue-500'}/>
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Delete">
                                    <IconButton onClick={async () => {
                                        await this.deleteRates(params.row.rateId);
                                    }}>
                                        <DeleteIcon className={'text-red-500'}/>
                                    </IconButton>
                                </Tooltip>
                            </>
                        )
                    }
                },
            ],
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.popup == true){
            this.loadData()
        }
    }

    deleteRates = async (id) => {
        let params = {
            rateID: id
        }
        let res = await vehicleRateService.deleteRates(params);
        console.log(res)
        if (res.status === 200) {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'success'
            });
            this.loadData();
        } else {
            this.setState({
                alert: true,
                message: res.message,
                severity: 'error'
            });
        }
    }

    updateRates = async (data) => {
        const row = data;
        let vehicleRates = {
            "rateId": row.rateId,
            "monthlyRate": row.monthlyRate,
            "dailyRate": row.dailyRate,
            "freeKmForaMonth": row.freeKmForaMonth,
            "freeKmForaDay": row.freeKmForaDay,
            "pricePerExtraKm": row.pricePerExtraKm
        }
        await this.setState({vehicleRates: vehicleRates});
        await this.setState({
            popup: true,
            isUpdate: true
        })
    }

    async loadData() {
        let resp = await vehicleRateService.fetchRates();
        let nData = [];
        if (resp.status === 200) {
            resp.data.data.map((value, index) => {
                value.id = value.rateId;
                nData.push(value)
            })

            this.setState({
                loaded: true,
                data: nData,
            });
        }
    }

    componentDidMount() {
        this.loadData();
        console.log("Mounted");
    }

    render() {
        const {classes} = this.props;
        return (
            <>

                <Grid container direction={"row"} columns="12">
                    <Grid item xs={"auto"}>
                        <Sidebar/>
                    </Grid>
                    <Grid item xs className="">
                        <Navbar/>
                        <Grid container item xs={"auto"} className="flex p-5 gap-5">
                            <Grid
                                container
                                item
                                xs={12}
                                gap="5px"
                                className="rounded-lg p-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                            >
                                <CommonButton
                                    variant="outlined"
                                    label="Add Vehicle Rate"
                                    onClick={() => this.setState({popup: true, isUpdate: false})}
                                    startIcon={<AddIcon/>}
                                />
                            </Grid>
                            <Grid
                                container
                                item
                                xs={12}
                                gap="5px"
                                className="rounded-lg p-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                                style={{height: "700px"}}
                            >
                                <CommonDataTable
                                    columns={this.state.columns}
                                    rows={this.state.data}
                                    rowsPerPageOptions={5}
                                    pageSize={10}
                                    // checkboxSelection={true}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <CustomSnackBar
                    open={this.state.alert}
                    onClose={() => {
                        this.setState({alert: false})
                    }}
                    message={this.state.message}
                    autoHideDuration={3000}
                    severity={this.state.severity}
                    variant={'filled'}
                />

                <Dialog
                    open={this.state.popup}
                    maxWidth="md"
                    classes={{paper: classes.dialogWraper}}
                >
                    <DialogTitle style={{paddingRight: "0px"}}>
                        <div style={{display: "flex"}}>
                            <Typography
                                variant="h4"
                                component="div"
                                className="font-bold flex-grow"
                                style={{flexGrow: 1}}
                            >
                                {this.state.isUpdate ? 'Update' : 'Add'} Vehicle Rates
                            </Typography>

                            <IconButton onClick={() => this.setState({popup: false})}>
                                <CloseIcon/>
                            </IconButton>
                        </div>
                    </DialogTitle>
                    <DialogContent dividers>
                        <AddVehicleRates isUpdate={this.state.isUpdate} obj={this.state.vehicleRates}/>
                    </DialogContent>
                </Dialog>

            </>
        );
    }
}

export default withStyles(styleSheet)(VehicleRates);
