import logo from '../../assets/images/logo.png'
import SideBarCard from './Card'
import SideBarFilter from './filter'
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from '@mui/material';
export default function SideBar() {

    return (
        <div className="Sidebar-mainContainer">
            <img src={logo} className='sidebar-logo' />
            <SideBarCard />
            <SideBarFilter />

            <Button variant='outlined' className='sidebar-auth-btn' >Settings<SettingsSuggestIcon /></Button>
            <Button variant='outlined' className='sidebar-auth-btn'>Logout<LogoutIcon /></Button>
        </div >
    )
}