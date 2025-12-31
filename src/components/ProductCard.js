import React, { useContext } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { UserContext } from '../context'
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate, useLocation } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

export default function ProductCardView() {
    let Contextdata = useContext(UserContext)
    let data = Contextdata.data
    let navigate = useNavigate()
    const location = useLocation()
    let submitData = location?.state?.Productdata
    const EditLink = (item) => {
        navigate('/add', { state: { linkdata: item } })

    }
    return (
        <>

            <Box sx={{ flexGrow: 1 }} >
                <Grid container spacing={2}>
                    {data.map((item, i) => {
                        return (
                            <Grid size={3}>
                                <Card sx={{ maxWidth: 345 }} style={{ textAlign: "left" }}>

                                    <div style={{ textAlign: 'right', margin: "10px", cursor: 'pointer' }} onClick={() => EditLink(item)}>   <EditIcon color="primary" /></div>
                                    <CardContent key={item.id}>

                                        <Typography component="div" variant="body2" sx={{ color: 'text.secondary' }}>
                                            <span className='text-size'>Name: </span> {item.name}
                                        </Typography>
                                        <Typography component="div" variant="body2" sx={{ color: 'text.secondary' }}>
                                            <span className='text-size'>Stock: </span>{item.stock}
                                        </Typography>
                                        <Typography component="div" variant="body2" sx={{ color: 'text.secondary' }}>
                                            <span className='text-size'>Price: </span>{item.price}
                                        </Typography>
                                        <Typography component="div" variant="body2" sx={{ color: 'text.secondary' }}>
                                            <span className='text-size'>Category: </span>{item.category}
                                        </Typography>
                                        <Typography component="div" variant="body2" sx={{ color: 'text.secondary' }}>
                                            <span className='text-size'>Description: </span>{item.description}
                                        </Typography>
                                    </CardContent>


                                </Card>
                            </Grid>
                        )
                    })}

                </Grid>
            </Box>
        </>
    );
}
