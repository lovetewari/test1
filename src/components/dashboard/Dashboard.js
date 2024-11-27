import React, { useState, useEffect } from 'react';
import {
    Container,
    Grid,
    Paper,
    Typography,
    Box
} from '@mui/material';
import api from '../../services/api';

const Dashboard = () => {
    const [portfolioData, setPortfolioData] = useState({});

    useEffect(() => {
        // Fetch portfolio data when component mounts
        const fetchPortfolio = async () => {
            try {
                const response = await api.getPortfolio('testuser1');
                setPortfolioData(response.data);
            } catch (error) {
                console.error('Error fetching portfolio:', error);
            }
        };

        fetchPortfolio();
    }, []);

    return (
        <Container maxWidth="lg" sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                Trading Dashboard
            </Typography>

            <Grid container spacing={3}>
                {/* Portfolio Summary */}
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 2 }}>
                        <Typography variant="h6">
                            Portfolio Summary
                        </Typography>
                        <Box sx={{ mt: 2 }}>
                            <Typography>
                                Total Value: ${portfolioData.totalValue || 0}
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>

                {/* Recent Trades */}
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 2 }}>
                        <Typography variant="h6">
                            Recent Trades
                        </Typography>
                        {/* Add recent trades here */}
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Dashboard;