import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useNavigate, useLocation } from "react-router-dom";
export default function Form() {

    const [isSubmitting, setIsSubmitting] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    const Editdata = location?.state?.linkdata
    const [inputFields, setInputFields] = useState({
        name: Editdata ? Editdata.name : '',
        category: Editdata ? Editdata.category : '',
        price: Editdata ? Editdata.price : 0, stock: Editdata ? Editdata.stock : 0,
        description: Editdata ? Editdata.description : ''
    })
    const [errors, setErrors] = useState({})


    console.log(Editdata)
    const handleOnchange = (e) => {
        const { id, value } = e.target;
        console.log(e.target)
        setInputFields(values => ({ ...values, [id]: value }))
    }
    const validateValues = (values) => {
        let errors = {};

        if (!values.name) {
            errors.name = 'Name is required'
        }

        if (!values.price) {
            errors.price = "Price is required"
        }

        if (!values.stock) {
            errors.stock = "Stock is required"
        }

        if (!values.category) {
            errors.category = "Category is required"
        }

        return errors;
    }
    const handleSubmit = (event) => {
        console.log(errors)
        event.preventDefault();
        setErrors(validateValues(inputFields));
        setIsSubmitting(true);
        navigate('/', { state: { Productdata: inputFields } })
    };
    return (
        <>
            <Box sx={{ flexGrow: 1 }} style={{ padding: "20px" }}>
                <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Grid size={8}>
                        <Card style={{ padding: "20px" }}>
                            <h2 className="form-title">{Editdata ? "Edit Product" : "Add Product"}</h2>
                            <form onSubmit={handleSubmit} >
                                <div className="form-container" >
                                    <div>
                                        <label className='label-text' >Name:<span style={{ paddingLeft: '30px' }}></span></label>
                                        <input type="text"
                                            placeholder='Enter product name'
                                            id="name"
                                            className='form-view'
                                            onChange={handleOnchange}
                                            value={inputFields.name}
                                        />
                                    </div>
                                    <div>
                                        <label className='label-text'>Price:<span style={{ paddingLeft: '40px' }}></span></label>
                                        <input type="number"
                                            id="price"
                                            placeholder='Enter product price'
                                            className='form-view'
                                            onChange={handleOnchange}
                                            value={inputFields.price}
                                        />
                                    </div>
                                    <div>
                                        <label className='label-text'>Category: <span style={{ paddingLeft: '20px' }}></span></label>
                                        <input type="text"
                                            placeholder='Enter product category'
                                            className='form-view'
                                            onChange={handleOnchange}
                                            id="category"
                                            value={inputFields.category}
                                        />
                                    </div>
                                    <div>
                                        <label className='label-text'>Stock: <span style={{ paddingLeft: '40px' }}></span></label>
                                        <input type="number"
                                            placeholder='Enter product stock'
                                            className='form-view'
                                            id='stock'
                                            value={inputFields.stock}
                                            onChange={handleOnchange}
                                        />
                                    </div>
                                    <div>
                                        <label className='label-text'>Description: </label>
                                        <input type="text"
                                            placeholder='Enter product Description'
                                            className='form-view'
                                            id="description"
                                            value={inputFields.description}
                                            onChange={handleOnchange}
                                        />
                                    </div>
                                    <input type="submit" className='submit-button' />
                                </div>
                            </form>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}