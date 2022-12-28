import cap from '../../assets/images/cap.jpg'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import alien from '../../assets/images/costume.png'


export default function Cards() {
    return (
        <Card  className='CardMain-Container'>
            {/* <CardContent sx={{}}> */}
            <CardMedia
                sx={{ height: 140 }}
                image={cap}
                title="Cap"
                className='card-image'
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
                <Button variant='outlined' size="medium" className='detail-sell-btns detail-btn'>DETAILS</Button>
                <Button variant='outlined' size="medium" className='detail-sell-btns sell-btn'>SELL</Button>
            </div>
            <div className='card-item-specification'>
                <div>
                    <p>Item</p>
                    <p>#001</p>
                </div>
                <div>
                    <p>Collection</p>
                    <p>Allien Space Puffa</p>
                </div>
            </div>
            <div className='card-item-specification'>
                <div>
                    <p>Launch Date</p>
                    <p>11.11.22</p>
                </div>
                <div>
                    <p>Total Minted</p>
                    <p>100/1000</p>
                </div>
            </div>

            {/* </CardContent> */}
            <CardActions>
            </CardActions>
        </Card>
    )

}