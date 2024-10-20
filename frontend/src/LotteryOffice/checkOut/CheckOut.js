import React, { useEffect, useState } from 'react';
import Header from '../Header';
import './CheckOut.css';
import countryTickets from '../CountryTickets';
import Footerr from '../Footerr';
import { Link, useNavigate } from 'react-router-dom';
import { FaRegTrashAlt } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CheckOut = () => {
    const [cartItems, setCartItems] = useState([]);
    const [shares, setShares] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const response = await fetch('http://localhost:6005/cart', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setCartItems(data);
                    const initialShares = {};
                    data.forEach(item => {
                        initialShares[item._id] = 1; // Set default quantity to 1
                    });
                    setShares(initialShares);
                } else {
                    toast.error("Failed to fetch cart items", { position: 'top-center' });
                }
            } catch (error) {
                toast.error(`Error fetching cart items: ${error.message}`, { position: 'top-center' });
            }
        };
        fetchCartItems();
    }, []);

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:6005/delete-cart/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                // setCartItems((prevItems) => prevItems.filter(item => item._id !== id));
                // setShares((prevShares) => {
                //     const newShares = { ...prevShares };
                //     const finalshare = delete newShares[id];
                //     return finalshare;
                // });
                toast.success("Lottery removed successfully", { position: 'top-center' });
            } else {
                toast.error("Failed to delete item", { position: 'top-center' });
            }
        } catch (error) {
            toast.error(`Error deleting item: ${error.message}`, { position: 'top-center' });
        }
    };

    const handleIncrement = (key) => {
        setShares((prevShares) => ({
            ...prevShares,
            [key]: prevShares[key] + 1,
        }));
    };

    const handleDecrement = (key) => {
        setShares((prevShares) => ({
            ...prevShares,
            [key]: prevShares[key] > 1 ? prevShares[key] - 1 : 1,
        }));
    };

    const getTotalPrice = (key, pricePerItem) => {
        return (shares[key] * pricePerItem).toFixed(2);
    };

    const calculateTotalCost = () => {
        return cartItems.reduce((total, item) => {
            const pricePerShare = parseFloat(item.price_per_share);
            const shareCount = shares[item._id] || 0;
            return total + (pricePerShare * shareCount);
        }, 0).toFixed(2);
    };

    return (
        <>
            <div className='container-fluid'>
                <Header />
                <div className='row check-container'>
                    <h2 className='text-light'>CheckOut</h2>
                    <hr className='border-2 text-light' />
                    {cartItems.length === 0 ? (
                        <div className='col-12 col-md-8 mx-auto p-4 justify-content-center align-items-center text-center mt-3 checkout'>
                            <i className="bi bi-cart2 ms-2 text-primary"></i>
                            <h3 className='text-danger my-3'>Unfortunately, your cart is empty</h3>
                            <p className='text-black'>Please add something to your cart</p>
                            <button
                                type='button'
                                className='button btn btn-syndicates my-2'
                                onClick={() => navigate('/')}
                            >
                                Play now
                            </button>
                        </div>
                    ) : (
                        cartItems.map((data) => (
                            <div key={data._id} className='col-12 col-md-10 mx-auto my-3'>
                                <div className='bg-white rounded p-3 d-flex flex-column flex-md-row card_data align-items-center justify-content-between'>
                                    <div className='col-12 col-md-4 d-flex flex-column align-items-center justify-content-center flex-md-row'>
                                        <div>
                                            <img src={data.image} style={{ width: "90px" }} alt='cart' />
                                        </div>
                                        <div className='ms-3 text-center text-md-start'>
                                            <h4>{data.countryName}</h4>
                                            <h2>${data.pirce}*</h2>
                                            <p>Closes in: {data.closeTime}</p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 d-flex flex-column flex-md-row justify-content-center text-center">
                                        <div className="d-flex ms-2 justify-content-center text-center">
                                            <h3 className="mt-3" onClick={() => handleDecrement(data._id)}>-</h3>
                                            <div className="share mx-1">
                                                <h4 className="text-light mb-0 mt-2">{shares[data._id] || 1}</h4>
                                                <p className="text-light">Share</p>
                                            </div>
                                            <h3 className="mt-3" onClick={() => handleIncrement(data._id)}>+</h3>
                                        </div>
                                        <p className="fs-5 mt-3 ms-3">Total: ${getTotalPrice(data._id, parseFloat(data.price_per_share))}</p>
                                    </div>
                                    <div className='col-12 col-md-1 mx-auto'>
                                        <Link
                                            className='text-danger mx-auto align-items-center justify-content-center fs-5 d-flex'
                                            onClick={() => handleDelete(data._id)}
                                        >
                                            Delete
                                            <FaRegTrashAlt className='custom-icon ms-2' />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}

                    {cartItems.length === 0 && (
                        <>
                            <h3 className='text-center my-4 text-light'>Why not try...</h3>
                            <div className='row mt-5'>
                                {
                                    countryTickets.map((value, index) => (
                                        <div key={index} className='col-12 col-md-4 d-flex justify-content-center mb-4'>
                                            <div className='carts text-center bg-light rounded text-black' onClick={() => navigate('/play')}>
                                                <img src={value.image} alt='Logo' className='img-fluid' />
                                                <h4>{value.countryName}</h4>
                                                <h1>${value.pirce}</h1>
                                                <button className='rounded-pill px-4 w-32'>Play now</button>
                                                <p>Closes in: {value.closeTime}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </>
                    )}
                </div>
                {cartItems.length > 0 && (
                    <div className='col-12 col-md-4 mx-auto my-5 justify-content-center text-center '>
                        <h4 className='text-center'>Total Cost</h4>
                        <p className='border border-2 border-danger p-2 rounded fs-4 text-center'>${calculateTotalCost()}</p>
                        <button
                            type='button'
                            className='button btn btn-syndicates my-2'
                            onClick={() => navigate('/login')}
                        >
                            Continue
                        </button>
                    </div>
                )}
            </div>
            <ToastContainer />
            <Footerr />
        </>
    );
};

export default CheckOut;
