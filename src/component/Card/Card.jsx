import cap from '../../assets/images/cap.jpg'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import alien from '../../assets/images/costume.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Cards() {
    return (
        <Card sx={{ maxWidth: 345, backgroundColor: 'black' }}>
            {/* <CardContent sx={{}}> */}
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
                    <p>Allien Space Puffa
                    </p>
                    <FontAwesomeIcon icon={["fal", "coffee"]} />
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