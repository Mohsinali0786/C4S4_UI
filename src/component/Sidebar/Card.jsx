import logo from '../../assets/images/logo.png'
import Avatar from '@mui/material/Avatar';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { border } from '@mui/system';

export default function SideBarCard() {

    return (
        <Box sx={{ minWidth: 200}} className='sidebar-card-mainCont'>
            <div className='sidebar-card-div'>
                <div className='profileimage mt-10px'>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"  />
                </div>
                <div className='profileText'>
                    <CardContent>
                        <Typography >
                            John Doe
                        </Typography>
                        <Typography className='textColor text-styling'>
                            Super admin
                        </Typography>
                        <Typography className=' text-styling'>
                            johndoe@gmail.com
                        </Typography>
                        <Typography className='Connected-Wallet'>
                            Connected Wallet
                        </Typography>
                        <Typography className='textColor text-styling text-overflown'>
                            xhduere24868884vvvvvvvqw9we29eh9h
                        </Typography>
                    </CardContent>
                        <Button variant='outlined' className='textColor profile-btn'>Profile</Button>
                </div>

            </div>

        </Box>
    )
}

