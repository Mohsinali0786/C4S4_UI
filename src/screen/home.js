import { SideBar, NavBar } from '../component/index';
import { Grid, Button } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
import TokenIcon from '@mui/icons-material/Token';
import DiamondIcon from '@mui/icons-material/Diamond';
import AppsIcon from '@mui/icons-material/Apps';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import { useState } from 'react';
import {Card} from '../component'
function Home() {
    const [multiView,setMultiView]=useState(true)
    const [SingleView,setSingleView]=useState(false)

    const changeSingleView=()=>{
        setMultiView(false)
        setSingleView(true)
    }
    const changeMultiView=()=>{
        setMultiView(true)
        setSingleView(false)
    }
    return (
        <Grid container spacing={2} sx={{ backgroundColor: 'black' }}>
            <Grid item xs={2} sm={2}>
                <SideBar />
            </Grid>
            <Grid item xs={10} sm={10}>
                <NavBar />
                <Grid container spacing={2}>
                    <Grid item sm={3}>
                        <p className='balancedetails-text'><span >Balance</span>Details</p>
                    </Grid>
                    <Grid item sm={5}>
                        <div className='home-searchbar'>
                            <SearchOutlined />
                            <input placeholder='Search Item' />
                        </div>
                    </Grid>
                    <Grid item sm={4}>
                        <div>
                            Home/Wardrobe
                        </div>
                    </Grid>
                    <Grid item sm={4}>
                        <div className='balance-Assets'>
                            <div>
                                <p>Total Assets</p>
                                <p><span>17</span>NFTs</p>
                            </div>
                            <TokenIcon />
                        </div>
                    </Grid>
                    <Grid item sm={4}>
                        <div className='balance-Assets'>
                            <div>
                                <p>Total Balance</p>
                                <p><span>22.00</span>ETH</p>
                            </div>
                            <DiamondIcon />
                        </div>
                    </Grid>
                    <Grid item sm={4}>

                    </Grid>
                    <Grid item sm={12}>
                        <div className='collection-section'>
                            <p><span className='textColor'>My</span>Collection</p>
                            <div className='collection-section-btns'>
                                <Button variant='outlined' className='collection-section-buttons'>PRIVATE MINT<span>(10)</span></Button>
                                <Button variant='outlined' className='collection-section-buttons'>MODIFY<span>(5)</span></Button>
                                <Button  className='collection-sections-icons' disabled={multiView} onClick={changeMultiView}>
                                    <AppsIcon />
                                </Button>
                                <Button className='collection-sections-icons' disabled={SingleView} onClick={changeSingleView}>
                                    <CircleOutlinedIcon  />
                                </Button>
                            </div>
                        </div>
                    </Grid>
                    <Grid item sm={3}>
                        <Card/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    )
}
export default Home