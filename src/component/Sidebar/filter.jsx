import { Grid, Button } from "@mui/material"
import { useEffect } from "react"
import { useState } from "react"
export default function SideBarFilter() {
    const [fiiltersectionhide, setFiilterSectionHide] = useState(false)
    const setfilter = () => {
        console.log('filter')
        if (!fiiltersectionhide) {
            setFiilterSectionHide(true)
        }
        else {
            setFiilterSectionHide(false)
        }
    }

    return (
        <Grid container>
            <Grid item xs={12}>
                <div className="SideBar-filtersection-div">
                    <p>Filter</p>
                    <Button className="textColor" onClick={() => setfilter()}>Hide</Button>
                </div>
            </Grid>
            {
                !fiiltersectionhide ?
                    <>
                        <Grid item xs={12}>
                            <p className="SideBar-filtersection"><span className="textColor mr-10px">OWNED</span>(5)</p>
                        </Grid>
                        <Grid item xs={12}>
                            <p className="SideBar-filtersection"><span className="textColor mr-10px">CREATED</span>(5)</p>
                        </Grid>
                        <Grid item xs={12}>
                            <p className="SideBar-filtersection"><span className="textColor mr-10px">FAOURITES</span>(5)</p>
                        </Grid>
                        <Grid item xs={12}>
                            <p className="SideBar-filtersection"><span className="textColor mr-10px">ACTIVITY</span>(5)</p>
                        </Grid>
                    </>
                    :
                    null
            }
        </Grid>
    )
}