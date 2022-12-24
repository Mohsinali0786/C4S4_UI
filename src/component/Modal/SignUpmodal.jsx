import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import logo from '../../assets/images/logo.png'
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';


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

export default function SignupModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Register</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className='Auth-Modal'>
          <img src={logo} className='logoimage' />
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Register for an Account
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 1 }} variant="h6" component="h6">
            Get started in seconds
          </Typography>
          <Typography id="modal-modal-description" variant="h6" component="h6">
            Register using your email or connect your crypto wallet
          </Typography>
          <form>
            <div className='form-fields'>
              <label>Email</label>
              <input placeholder='Enter your email address' />
            </div>
            <div className='form-fields'>
              <label>Passoword</label>
              <input placeholder='Enter your password' />
            </div>
            <div className='form-fields'>
              <label>Confirm Passowrd</label>
              <input placeholder='confirm your password' />
            </div>
            <div className='forgotpass-section'>
              <div>
                <label className='hasborder'><input type='checkbox' /></label>
                <label>Remember my email</label>
              </div>
              <a><h6>Forgot Pasword?</h6></a>
            </div>
            <Button variant='outlined' className='Register-Login-Btn'>REGISTER</Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}