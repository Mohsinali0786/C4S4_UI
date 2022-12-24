import { Grid } from "@mui/material"
export default function SideBarFilter() {

    return (
        <Grid container>
            <Grid item sm={12}>
                <div className="SideBar-filtersection-div">
                    <p>Filter</p>
                    <p className="textColor">Hide</p>
                </div>
            </Grid>
            <Grid item sm={12}>
                <p className="SideBar-filtersection"><span className="textColor mr-10px">OWNED</span>(5)</p>
            </Grid>
            <Grid item sm={12}>
                <p className="SideBar-filtersection"><span className="textColor mr-10px">CREATED</span>(5)</p>
            </Grid>
            <Grid item sm={12}>
                <p className="SideBar-filtersection"><span className="textColor mr-10px">FAOURITES</span>(5)</p>
            </Grid>
            <Grid item sm={12}>
                <p className="SideBar-filtersection"><span className="textColor mr-10px">ACTIVITY</span>(5)</p>
            </Grid>
        </Grid>
    )
}