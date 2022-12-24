import SideMenu from '../component/menulayout/sidemenu';
import { SideBar } from '../component/index';
import { Grid } from '@mui/material';
function Home() {
    return (
        <Grid container>
            <Grid item xs={2} sm={2}>
                <SideBar />
            </Grid>
            <Grid item xs={10} sm={10}>
                <SideMenu />
            </Grid>
        </Grid>

    )
}
export default Home