import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import logo from '../../assets/images/logo.png'
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import SignupModal from './SignUpmodal';
import LockOpenIcon from '@mui/icons-material/LockOpen';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'black',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function SigninModal() {
    const [open, setOpen] = React.useState(false);
    // const [modal, setModal] = React.useState()

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const openSignupModal = () => {
        handleClose()
    }
    return (
        <div>
            <Button onClick={handleOpen} className='auth-btns' variant='none'>Login</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title" openSignupModal
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className='Auth-Modal'>
                    <img src={logo} className='logoimage' />
                    <Typography id="modal-modal-title" variant="h5" component="h2">
                        Signin in to your Account
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 1 }} variant="h6" component="h6">
                        Not a member yet? <a className='create-account' onClick={() => openSignupModal()}>Create an account </a>
                    </Typography>
                    <form>
                        <div className='form-fields'>
                            <label>Email address</label>
                            <input placeholder='Enter your email address' />
                        </div>
                        <div className='form-fields'>
                            <label>Passoword</label>
                            <input placeholder='Enter your password' />
                        </div>
                        <div className='forgotpass-section'>
                            <div>
                                <label className='hasborder'><input type='checkbox' /></label>
                                <label>Remember my email</label>
                            </div>
                            <a><h6>Forgot Pasword?</h6></a>
                        </div>
                        <Button variant='outlined' className='Register-Login-Btn'>LOGIN</Button>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}