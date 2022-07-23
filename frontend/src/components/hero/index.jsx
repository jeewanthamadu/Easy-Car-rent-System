import React, {Component} from 'react';
import { dividerClasses, Typography} from "@mui/material";

class Hero extends Component {
    render() {
        return (
            <div className={'h-screen bg-black flex flex-col justify-center item-center'}>
                <div className={'bg-bgImg w-screen h-4/5 bg-contain bg-origin-border bg-right bg-no-repeat bg-black  '}>
                    <div className={'flex flex-row '}>
                        {/*<Typography className={'text-white font-bold  mt-1.5 bg right'}   variant="h3">Rent your  </Typography>*/}
                        {/*<Typography className={'text-white font-bold  mt-1.5  '}   variant="h2">DREAM CAR</Typography>*/}

                    </div>
                    {/*<Typography className={'text-white font-bold  mt-1.5  '}   variant="h3">at the lowest possible rate</Typography>*/}


                </div>
2

            </div>
        );
    }
}

export default Hero;