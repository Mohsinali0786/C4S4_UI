import { SideBar, NavBar } from '../component/index';
import { Grid, Button } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
import TokenIcon from '@mui/icons-material/Token';
import DiamondIcon from '@mui/icons-material/Diamond';
import AppsIcon from '@mui/icons-material/Apps';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import { useEffect, useState } from 'react';
import { Card, CardModal } from '../component'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ViewSidebarOutlinedIcon from '@mui/icons-material/ViewSidebarOutlined';
function Home() {
    const [multiView, setMultiView] = useState(true)
    const [SingleView, setSingleView] = useState(false)
    const [sidebaropen, setSidebaropen] = useState(false)

    const checkwidthofwindow = () => {
        if (window.innerWidth < 450) {
            setSidebaropen(true)
        }
        else {
            setSidebaropen(false)
        }
    }

    window.addEventListener("resize", checkwidthofwindow)

    const changeSingleView = () => {
        setMultiView(false)
        setSingleView(true)
    }
    const changeMultiView = () => {
        setMultiView(true)
        setSingleView(false)
    }
    const showSidebar = () => {
        if (!sidebaropen) {
            setSidebaropen(true)
        }
        else {
            setSidebaropen(false)
        }
    }
    useEffect(() => {
        // setSidebaropen(false)
    }, [sidebaropen])
    // console.log('Sidebar', sidebaropen)
    return (
        <Grid container className='HomeMainContainer'>
            <Grid className='SidebarSections-Contaniner'>
                <div className={sidebaropen ? 'hidesidebar Sidebar-mainContainer' : 'showsidebar Sidebar-mainContainer'}>
                    <SideBar />
                </div>
            </Grid>
            <Grid className={!sidebaropen ? 'MiddleSections-Contaniner' : 'showMiddleSection'}>
                {/* <div> */}
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <NavBar showSidebar={showSidebar} />
                    </Grid>
                    <Grid item xs={12} md={12} lg={3}>
                        <p className='balancedetails-text'><span >Balance</span>Details</p>
                    </Grid>
                    <Grid item xs={12} md={9} lg={6}>
                        <div className='home-searchbar'>
                            <SearchOutlined />
                            <input placeholder='Search Item' />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={3} lg={3}>
                        <div className='path-text'>
                            <p>Home</p>
                            <ChevronRightIcon />
                            <p>Wardrobe</p>

                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <div className='balance-Assets'>
                            <div>
                                <p>Total Assets</p>
                                <p><span>17</span>NFTs</p>
                            </div>
                            <TokenIcon />
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <div className='balance-Assets'>
                            <div>
                                <p>Total Balance</p>
                                <p><span>22.00</span>ETH</p>
                            </div>
                            <DiamondIcon />
                        </div>
                    </Grid>
                    <Grid item lg={4} sx={{ display: { md: 'none' } }}>

                    </Grid>
                    <Grid item xs={12}>
                        <div className='collection-section'>
                            <p><span className='textColor'>My</span>Collection</p>
                            <div className='collection-section-btns'>

                                <Button variant='outlined' className='collection-section-buttons'>PRIVATE MINT<span>(10)</span></Button>
                                <Button variant='outlined' className='collection-section-buttons'>MODIFY<span>(5)</span></Button>
                                <div>
                                    <Button className='collection-sections-icons' disabled={multiView} onClick={changeMultiView}>
                                        <AppsIcon />
                                    </Button>
                                    <Button className='collection-sections-icons' disabled={SingleView} onClick={changeSingleView}>
                                        <CircleOutlinedIcon />
                                    </Button>

                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}>
                        {/* <Card /> */}
                        <CardModal />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}>
                        <CardModal />

                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}>
                        <CardModal />

                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}>
                        <CardModal />

                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}>
                        <CardModal />

                    </Grid>
                </Grid>
                {/* </div> */}
            </Grid>

        </Grid >

    )
}
export default Home