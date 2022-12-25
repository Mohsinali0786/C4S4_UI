import cap from '../../assets/images/cap.jpg'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
export default function Cards() {
    return (
        <Card sx={{ maxWidth: 345, backgroundColor: 'black' }}>
            <CardMedia
                sx={{ height: 140 }}
                image={cap}
                title="Cap"
            >
                <div className='card-top-section'>
                    <StarBorderOutlinedIcon />
                    <p>0.205 ETH</p>
                </div>

            </CardMedia>
            <Typography gutterBottom variant="h5" component="div" className='minting'>
                <p>MINTING</p>
                <p>22D:22M</p>
            </Typography>
            <div className='Btns-Div'>
                <Button variant='outlined' size="medium" className='detail-sell-btns'>DETAILS</Button>
                <Button variant='outlined' size="medium" className='detail-sell-btns'>SELL</Button>
            </div>
            <CardContent>
                
            </CardContent>
            <CardActions>
            </CardActions>
        </Card>
    )

}