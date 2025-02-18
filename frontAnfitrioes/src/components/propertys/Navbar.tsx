import { AppBar, Stack, Toolbar, Typography } from "@mui/material";
import logo from '../assets/logo.png';

export default function Navbar(){
    return(
        <AppBar position="fixed">
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <img style={{ width: '8rem', height: 'auto' }} src={logo} alt='logo' />
                    <Stack paddingRight={{xs: 2, md: 8}}><a href="#/" style={{ textDecoration: 'none', color: 'white' }}><Typography fontSize={22}>ínicio</Typography></a></Stack>
                </Toolbar>
            </AppBar>
    )
}