import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Layout() {
    return (
        <Box sx={{ 
            display: 'flex',
            flexDirection: 'column',
            border: '7px solid white',
            height: '100vh',
            margin: 'auto' 
        }}>
            <Header />
                <Box component="main">
                    <Outlet/>
                </Box>
            <Footer />
        </Box>
    )
}
