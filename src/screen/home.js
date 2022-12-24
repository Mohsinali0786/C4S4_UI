import { SideBar, NavBar } from '../component/index';
import { Grid } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
import TokenIcon from '@mui/icons-material/Token';

function Home() {
    return (
        <Grid container >
            <Grid item xs={2} sm={2}>
                <SideBar />
            </Grid>
            <Grid item xs={10} sm={10}>
                <NavBar />
                <Grid container>
                    <Grid item sm={3}>
                        <p className='balancedetails-text'><span >Balance</span>Details</p>
                    </Grid>
                    <Grid item sm={6}>
                        <div className='home-searchbar'>
                            <SearchOutlined />
                            <input placeholder='Search Item' />
                        </div>
                    </Grid>
                    <Grid item sm={3}>
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
                        <div>
                            Home/Wardrobe
                        </div>
                    </Grid>


                </Grid>
            </Grid>
        </Grid>

    )
}
export default Home