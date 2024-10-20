import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
    const [cartitemsShow, setCartItems] = useState(false);
    const [menuShow, setMenuShow] = useState(false);
    const [cartItem, setCartItem] = useState([]);

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const response = await fetch('https://lottery-three-ivory.vercel.app/cart', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setCartItem(data);
                } else {
                    toast.error("Failed to fetch cart items",{position:'top-center'});
                }
            } catch (error) {
                toast.error("Error fetching cart items:", error,{position:'top-center'});
            }
        };
        fetchCartItems();
    }, []);

    const handleMenu = () => {
        setMenuShow(!menuShow);
    }

    const handleCartShow = () => {
        setCartItems(!cartitemsShow);
    }

    return (
        <div className='sticky_navbar'>
            <div className='row bg-black'>
                <div className='col-12 col-md-10 mx-auto header p-2'>
                    <div className='d-flex justify-content-between align-items-center text-center'>
                        <div className="col-2 col-md-2">
                            <img
                                src="https://incomeaccess.com/fileadmin/uploads/2020/09/logo-lottery-office.jpg"
                                className="cursor-pointer websiteLogo w-100 w-md-75"
                                onClick={() => window.location.href = '/'}
                                alt="Lottery office logo"
                            />
                        </div>

                        <div className='col-8 col-md-6 d-flex align-items-center justify-content-end'>
                            <div className='d-flex signup rounded-pill' onClick={() => window.location.href = '/signup'}>
                                <button type='button'>Sign up</button>
                                <i className="bi bi-star"></i>
                            </div>
                            <div className='loginButton' onClick={() => window.location.href = '/login'}>
                                <button type='button'>Login</button>
                                <i className="bi bi-arrow-right-circle"></i>
                            </div>
                            <div className='cart d-flex' onClick={handleCartShow}>
                                <button type='button'>Cart</button>
                                <i className="bi bi-cart2 ms-2 text-light"></i>
                                <p className='textSize text-danger'>{cartItem.length}</p>
                            </div>
                        </div>
                        {
                            cartitemsShow && (
                                <div className='cartItems'>
                                    <i className="bi bi-cart2 ms-2 text-primary"></i>
                                    {cartItem.length === 0 ? (
                                        <>
                                            <p className='text-danger'>Unfortunately, your cart is empty</p>
                                            <p className='text-black textSize'>Please add something to your cart</p>
                                            <button type='button' className='playNowBitton rounded-pill' onClick={() => window.location.href = "/"}>Play now</button>
                                        </>
                                    ) : (
                                        <div>
                                            <p className='text-danger'>You have {cartItem.length} items in your cart</p>
                                            <button type='button' className='playNowBitton rounded-pill mb-4' onClick={() => window.location.href = "/checkout"}>View Cart</button>
                                        </div>
                                    )}
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>

                <div className='row bg-light border-bottom justify-content-between'>
                <div className='col-6 col-md-8 mx-md-auto links d-none d-md-block'>
                <Link to='/'>All Lotteries</Link>
                <Link to='/syndicates'>Syndicates</Link>
                <Link to='/combo'>Combos</Link>
                <Link to='/results'>Results</Link>
                <Link to='/contact'>Contact us</Link>
                </div>
                
                <div className='col-2 d-flex cursor-pointer text-center align-items-center justify-content-center menuButton' onClick={handleMenu}>
                <Link to='' className='fs-6'>Menu</Link>
                <i className="bi bi-chevron-down fs-6"></i>
                </div>
                </div>


            {/* menu drop down */}
            {
                menuShow && (
                    <div className='menuDropDown'>
                        <p className='bg-primary p-4 fs-6 text-light'>Australia official way to play international lotteries</p>
                        <div className='d-flex justify-content-between px-2 menucontent'>
                            <Link to='/how-it-works'>How it works</Link>
                            <i className="bi bi-chevron-right text-primary"></i>
                        </div>
                        <hr className='text-black' />
                        <div className='d-flex justify-content-between px-2 menucontent'>
                            <Link to='/winners'>Recent Winners</Link>
                            <i className="bi bi-chevron-right text-primary"></i>
                        </div>
                        <hr className='text-black' />
                        <div className='d-flex justify-content-between px-2 menucontent'>
                            <Link to='/app'>Download App</Link>
                            <i className="bi bi-chevron-right text-primary"></i>
                        </div>
                        <hr className='text-black' />
                        <div className='d-flex justify-content-between px-2 menucontent'>
                            <Link to='/syndicates'>Lotto Syndicates</Link>
                            <i className="bi bi-chevron-right text-primary"></i>
                        </div>
                        <hr className='text-black' />
                        <div className='d-flex justify-content-between px-2 menucontent'>
                            <Link to='/lotto-systems'>Lotto Systems</Link>
                            <i className="bi bi-chevron-right text-primary"></i>
                        </div>
                        <hr className='text-black' />
                        <div className='d-flex justify-content-between px-2 menucontent'>
                            <Link to='/combo'>Lotto Combos</Link>
                            <i className="bi bi-chevron-right text-primary"></i>
                        </div>
                        <hr className='text-black' />
                        <div className='d-flex justify-content-between px-2 menucontent'>
                            <Link to='/results'>Lotto Results</Link>
                            <i className="bi bi-chevron-right text-primary"></i>
                        </div>
                        <hr className='text-black' />
                        <div className='d-flex justify-content-between px-2 menucontent'>
                            <Link to='/pay-in-store'>Pay In-Store Locator</Link>
                            <i className="bi bi-chevron-right text-primary"></i>
                        </div>
                        <hr className='text-black' />
                        <div className='d-flex justify-content-between px-2 menucontent'>
                            <Link to='/charity'>Charity</Link>
                            <i className="bi bi-chevron-right text-primary"></i>
                        </div>
                        <hr className='text-black' />
                        <div className='d-flex justify-content-between px-2 menucontent'>
                            <Link to='/about'>About Us</Link>
                            <i className="bi bi-chevron-right text-primary"></i>
                        </div>
                        <hr className='text-black' />
                        <div className='d-flex justify-content-between px-2 menucontent'>
                            <Link to='/magzine'>Lottery Office Magazine</Link>
                            <i className="bi bi-chevron-right text-primary"></i>
                        </div>
                        <hr className='text-black' />
                        <div className='d-flex justify-content-between px-2 menucontent'>
                            <Link to='/faqs'>Frequently Asked Questions</Link>
                            <i className="bi bi-chevron-right text-primary"></i>
                        </div>
                        <hr className='text-black' />
                        <div className='d-flex justify-content-between px-2 menucontent mb-5'>
                            <Link to='/contact'>Contact us</Link>
                            <i className="bi bi-chevron-right text-primary"></i>
                        </div>
                    </div>
                )
            }
            <ToastContainer />
        </div>
    )
}

export default Header;
