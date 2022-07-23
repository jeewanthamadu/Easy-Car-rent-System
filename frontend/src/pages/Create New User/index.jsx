import React, { Component } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { withStyles } from "@mui/styles";
import { styleSheet } from "./style";
import TempButton from "../../components/common/Button";
import TextField from "@mui/material/TextField";
import { textAlign } from "@mui/system";
import Dp from "../../assets/images/2.png";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { green } from "@mui/material/colors";

class AddNewCustomer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      

    <Grid container direction="" className={[classes.container, " bg-cover bg-hero-pattern "]}>
        <Grid container  className={[classes.container, "  "]}> 
        <Grid container direction="row" gap="50" className={"  h-4/5 "}>
           <Grid items direction="row"  className={[classes.pic_container," w-1/3  shadow-lg items-center"]}>
                /* <img src={Dp} alt="dp" className={[classes.pic,]} /> 
            </Grid> 
            <Grid items direction="row"  className={[classes.field, "backdrop-blur-md shadow-lg  w-1/3 items-center"]}>
                <Grid  container direction="col" className={[classes.field, ""]}>
                    <Typography  variant="h4" className="font-extrabold  text-black underline ">
                                Vehicle type
                    </Typography> 
                </Grid>
                <Grid container direction="column" gap="5px" className={[classes.field, " "]}  >
                <Select className="w-72">
                           <MenuItem value={10}>Ten</MenuItem>
                           <MenuItem value={20}>Twenty</MenuItem>
                           <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    <TextField label="colour" variant="outlined" className={"w-72 "} />
                    <TextField label="fuel Type" variant="outlined" className={"w-72 "} />

                    <TempButton variant="contained" className={classes.btn} label="ADD" />
                </Grid>
            </Grid>

            <Grid items direction="row"  className={[classes.field, " w-1/3  backdrop-blur-md shadow-lg items-center"]}>
                <Grid container direction="col" className={[classes.field, ""]}>
                    <Typography variant="h4" className="font-extrabold  text-black underline ">
                                Rate
                    </Typography> 
                    </Grid>
                <Grid container direction="col" gap="5px"  className={[classes.field, " h-2/3"]}>
                <Select  className="w-72">
                           <MenuItem value={10}>Ten</MenuItem>
                           <MenuItem value={20}>Twenty</MenuItem>
                           <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    <TextField label="colour" variant="outlined" className={"w-52"} />
                    <TextField label="fuel Type" variant="outlined" className={"w-52"} />
                    <TextField label="colour" variant="outlined" className={"w-52"} />
                    <TextField label="fuel Type" variant="outlined" className={"w-52"} />
                    <TextField label="colour" variant="outlined" className={"w-52"} />
                    <TempButton variant="contained" className={classes.btn} label="ADD" />
                </Grid>
        
        </Grid>
    
       <Grid container direction="col" gap="5px"  className={[classes.field, "backdrop-blur-md h-2/3 shadow-lg"]}>
        <Grid container direction="row" gap="20px" className={[classes.field, "  h-2/5"]}>
             <Typography variant="h3" className="font-extrabold  text-black underline ">
                            Add Vehicle Details
             </Typography> 

            <Grid container direction="col" gap="20px"  className={[classes.field, ""]}>
                <TextField label="registration Number" variant="outlined" className={"w-72"} />
                <TextField label="brand" variant="outlined" className={"w-72"} />
                <TextField label="colour" variant="outlined" className={"w-72"} />
                <TextField label="fuel Type" variant="outlined" className={"w-72"} />
                <TextField label="no Of Passengers" variant="outlined" className={"w-72"} />
                <TextField label="running Km" variant="outlined" className={"w-72"} />
                <TextField label="status" variant="outlined" className={"w-72"} /> 
                <TextField label="transmission Type" variant="outlined" className={"w-72"} /> 
                <TempButton variant="contained" className={[classes.btn,"w-52 h-12"]} label="ADD" />
            </Grid>

        </Grid>
        </Grid>
        {/* <Grid container direction="row" className={" backdrop-blur-md h-0.5/5 "}>
        <TempButton variant="contained" className={classes.btn} label="ADD" />
        </Grid>  */}


       </Grid> 
    </Grid>
     </Grid>

    )
  }
}

export default withStyles(styleSheet)(AddNewCustomer);
