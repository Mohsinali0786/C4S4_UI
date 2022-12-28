import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Cards from '../Card/Card';
import cap from '../../assets/images/cap.jpg'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import { borderRadius } from '@mui/system';



export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 900,
        bgcolor: '#0b0a0a',
        border: '2px solid #000',
        boxShadow: 24,
        p: 1,
        display: 'flex',
        border: '3px solid  #11845B ',
        borderRadius: '10px',
        justifyContent: 'spaceBetween'
    };

    return (
        <div>
            <div onClick={handleOpen}><Cards /></div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"

            >
                <Box sx={style}  className='Modal-Main-Div'>
                    <div className='image-Div'>
                        <img src={cap} className='modal-Card-Img' />
                    </div>
                    <div className='details-div'>
                        <div className='modal-collections-details'>
                            <div>
                                <div >
                                    <p className='RTFKT-Text'>RTFKT Clone X Forging SZN 1</p>
                                </div>
                                <div className='Allien-text-icon'>
                                    <p>Allien Space Puffa</p>
                                </div>
                                <div>
                                    <p className='Sale-text'>Sale ends January 5 2023 at 2:10 PM GMT+5</p>
                                </div>
                                <div>
                                    <p className='minted-out-of'>1000<span>Minted out of 5000</span></p>
                                </div>
                            </div>
                            <div className='wallet-details-Maindiv'>
                                <div className='wallet-details-div'>
                                    <div>
                                        <p>Wallet Details</p>
                                    </div>
                                    <div>
                                        <Button className='see-more-btn'>See More</Button>
                                    </div>
                                </div>
                                <div className='productDetails'>
                                    <div>
                                        <p>Wallet</p>
                                        <p>MetaMask</p>
                                    </div>
                                    <div>
                                        <p>Wallet Address</p>
                                        <p>Wordly Hats</p>
                                    </div>
                                    <div>
                                        <p>Token ID</p>
                                        <p>#001C454</p>
                                    </div>
                                    <div>
                                        <p>Status</p>
                                        <p>Delivered</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='quantity-btn-div'>
                                <Button variant='contained' className='quantity-btn'>+</Button>
                                <span>01/03</span>
                                <Button variant='contained' className='quantity-btn'>-</Button>
                            </div>
                        </div>
                        <div className='GAS-FEE-div'>
                            <p className='GAS-FEE-Text'>7.048 ETH<span>INCLUDING GAS FEE</span></p>
                        </div>
                        <div className='MintNow-btn-Div'>
                            <Button variant='contained'>MINT NOW</Button>
                        </div>

                    </div>

                </Box>
            </Modal>
        </div>
    );
}