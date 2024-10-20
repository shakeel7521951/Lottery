import React, { useState } from 'react';
import './Stylee.css';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footerr from './Footerr';

const Sign = () => {
    const [formData, setFormData] = useState({ fName: '', lName: '', phone: '', email: '', dateOfBirth: '', address: '', gender: '', password: '', cPassword: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            fName: formData.fName,
            lName: formData.lName,
            phone: formData.phone,
            email: formData.email,
            data_of_birth: formData.dateOfBirth,
            address: formData.address,
            gender: formData.gender,
            password: formData.password,
            cPassword: formData.cPassword
        }
        try {
            const response = await fetch("https://lottery-three-ivory.vercel.app/register", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            })
            const errorText = await response.json();
            if (response.ok) {
                alert("User registered successfully");
                navigate('/login');
            } else {
                alert("Error: " + errorText.message);
            }
        } catch (error) {
            alert("Internal server error! Try again later: " + error);
        }
    }

    return (
        <div className='container-fluid signInPage'>
            <div className='row'>
                <Header />
                <div className='col-12 col-md-10 mx-auto'>
                    <div className='col-12 col-md-7 mx-auto text-center mt-4 text-light'>
                        <h5 className='text-light fs-4'>Sign up with your email to get started!</h5>
                        <p className='text-end textSize text-light'>Already have an account?<Link to='/login' className='ml-2' style={{ color: 'white' }}>Log in</Link></p>

                        <div className='col signup_container'>
                            <h5 className='text-danger'>Account Information</h5>
                            <div className='d-flex align-items-center gap-3 mt-4'>
                                <input type='text' name='email' placeholder='Email' className='emailInput text-black textSize rounded-pill' value={formData.email} onChange={handleChange} />
                                <div className='w-10 '>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-facebook facebookIcon" viewBox="0 0 16 16">
                                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                                    </svg>
                                </div>
                                <div className='w-10'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-apple bg-success" viewBox="0 0 16 16">
                                        <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282" />
                                    </svg>
                                </div>
                                <div className='w-10' >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-google bg-danger text-light" viewBox="0 0 16 16">
                                        <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                                    </svg>
                                </div>
                            </div>
                            <div>
                                <input type='password' name='password' placeholder='Password' className='confirmEmail text-black emailInput textSize rounded-pill' value={formData.password} onChange={handleChange} />
                                <input type='password' name='cPassword' placeholder='Confirm password' className='emailInput text-black confirmEmail textSize rounded-pill' value={formData.cPassword} onChange={handleChange} />
                            </div>
                            <div className='mt-4'>
                                <h5 className='text-danger'>Personal Information</h5>
                                <p className='bg-primary text-light p-3 rounded textSize'>To pass identification requirements, provide your name exactly as it appears on your government-issued document, e.g. Driver's License</p>
                            </div>
                            <div className='d-flex check-gender gap-3 mt-4'>
                                <input type='radio' id='mr' value={'Mr'} onChange={handleChange} name='gender' /><label htmlFor='mr'>Mr</label>
                                <input type='radio' id='mrs' value={'Mrs'} onChange={handleChange} name='gender' /><label htmlFor='mrs'>Mrs</label>
                                <input type='radio' id='ms' value={'Ms'} onChange={handleChange} name='gender' /><label htmlFor='ms'>Ms</label>
                                <input type='radio' id='miss' value={'Miss'} onChange={handleChange} name='gender' /><label htmlFor='miss'>Miss</label>
                            </div>
                            <div className='personal_data mt-3'>
                                <input type='text' name='fName' placeholder='First Name - exactly as listed on your ID' className='rounded-pill' value={formData.fName} onChange={handleChange} />
                                <input type='text' name='lName' placeholder='Last Name - exactly as listed on your ID' className='rounded-pill' value={formData.lName} onChange={handleChange} />
                                <input type='phone' name='phone' placeholder='Phone Number' className='rounded-pill' value={formData.phone} onChange={handleChange} />
                            </div>
                            <div className='justify-content-center text-center align-items-center mt-4'>
                                <div>
                                    <h5 className='text-success'>Date of Birth</h5>
                                </div>
                                <div className='justify-content-center d-flex'>
                                    <input type='text' name='dateOfBirth' placeholder='DD-MM-YYYY' className='dob-input w-50 rounded-pill' value={formData.dateOfBirth} onChange={handleChange} />
                                </div>
                            </div>
                            <div className='personal_data'>
                                <p className='text-success textSize mt-4'>Can't find your address? <Link to=''>Enter it here</Link></p>
                                <input type='text' name='address' placeholder='Full Residential Address' className='rounded-pill' value={formData.address} onChange={handleChange} />
                            </div>
                            <div className='check d-flex gap-3 mt-4'>
                                <input type='checkbox' id='check' /><label htmlFor='check'>I have read The Lottery Office's
                                    <Link to=''> Privacy Policy</Link>
                                    and agree to the <Link to=''> terms and conditions</Link></label>
                            </div>
                            <div>
                                <p className='mt-3 text-success text-justify' style={{ fontSize: '11px' }}>By creating an account, you consent to your ID information being checked with the official issuer or official record holder, and to receiving email & SMS communications from The Lottery Office including ticket confirmations and promotions. You can change your notification preferences at any time.</p>
                            </div>
                            <button type='submit' onClick={handleSubmit} className='create_btn rounded-pill'>Create account now</button>
                            <div className='d-flex gap-2 logos mt-4'>
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3CDbr5L-i21v5M8bB60oYe2OyBHALYyVLyA&s' alt='northern logo' />
                                <img src='https://aboutssl.org/wp-content/uploads/2019/12/thawte-square.svg' alt='Thawte logo' />
                                <img src='https://static.vecteezy.com/system/resources/previews/008/171/317/non_2x/under-18-icon-logo-design-template-free-vector.jpg' alt='18+' />
                                <img src='https://www.opencounseling.com/images/calogos/responsiblegamblingorgza.jpg' alt='Responsible gambling' />
                                <img src='https://dynamic.brandcrowd.com/asset/logo/d100763b-daac-4372-9d1c-42d2f5b6644c/logo-search-grid-1x?logoTemplateVersion=1&v=638484808330400000' alt='Gambling help' />
                                <img src='https://i.pngimg.me/thumb/f/720/6547471132000256.jpg' alt='Gambling help' />
                            </div>
                        </div>
                        <div className='mb-5'>
                            <h5 className=' mt-4 text-light'>Need Help?</h5>
                            <p className='textSize text-light'>Click below so one of our friendly team can assist.</p>
                            <button type='button' className='chatBtn rounded-pill' onClick={()=>document.location.href="/contact"}>Chat now</button>
                        </div>
                    </div>
                </div>
                <Footerr />
            </div>
        </div>
    );
}

export default Sign;
