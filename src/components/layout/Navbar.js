import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Trading Platform
                </Typography>
                <Box>
                    <Button
                        color="inherit"
                        onClick={() => navigate('/dashboard')}
                    >
                        Dashboard
                    </Button>
                    <Button
                        color="inherit"
                        onClick={() => navigate('/trading')}
                    >
                        Trade
                    </Button>
                    <Button
                        color="inherit"
                        onClick={() => navigate('/portfolio')}
                    >
                        Portfolio
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;