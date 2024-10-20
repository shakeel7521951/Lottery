import React from 'react'
import Header from '../Header';
import './Pay_In_Store.css';
import { Link } from 'react-router-dom';
import govt_regulated from '../images/govt-regulated-strip.svg';
import payment_strip from '../images/payment-strip.svg';
import Footerr from '../Footerr';

const About = () => {
    return (
        <div className='container-fluid'>
            <Header />
            <div className='row'>
                <div className='about'>
                    <div className='col-12 col-md-10 mx-auto'>
                        <h2>About Us</h2>
                    </div>
                </div>
                <div className='col-12 col-md-9 mx-auto text-center p-4 mt-3 lotterySystem'>
                    <h2>About</h2>
                    <p>With 19 years of experience in the global lottery industry, we are the smarter choice. Real tickets, no bets.<br /><br />
                        Global Players Network Pty Ltd, the parent company of The Lottery Office, has been licensed to operate various lottery products globally since 2003. We hold both a Mail Order Lotteries Licence and an Internet Gaming Licence issued and actively regulated by the Northern Territory Government of Australia.<br /><br />
                        To ensure compliance with those regulatory requirements of our licenses we undertake an annual financial audit and an annual audit of our operational procedures, with both reports independently submitted to the Northern Territory Government. This is in addition to an auditing of customer orders against tickets purchased and the resulting draw outcomes. The entire audit process enables players, agents and suppliers to have complete confidence that business is conducted in a professional manner.</p>
                </div>

                <div className='row about-ticket p-4 lotterySystem'>
                    <div className='col-12 col-md-10 mx-auto bg-light align-items-center text-center p-4 rounded'>
                        <i class="bi bi-ticket fs-1 " />
                        <p className='fs-5'>When you purchase a ticket in a lottery conducted by The Lottery Office, we will purchase a matching ticket in the relevant overseas lottery. This ensures that we can offer the biggest jackpots in the world and are guaranteed to be able to pay out any prize.</p>
                    </div>
                </div>

                <div className='col-12 col-md-8 mx-auto p-4 text-center lotterySystem'>
                    <p className='fs-5'>Upon receipt by The Lottery Office of each ticket purchase price, a percentage is paid to The Lottery office Charitable and Community Benefits Fund which contributes to various charities and community groups in each state where we have purchasing players. See our <Link to='/charity' className='fs-5'> Charity</Link>  page for more information.</p>
                </div>

                <div className='row achievement p-5 lotterySystem'>
                    <div className='col-12 col-md-4 bg-light rounded text-center p-4'>
                        <i class="bi bi-trophy fs-1" />
                        <p className='fs-5'>Since launching in 2018, The Lottery Office has paid out in excess of 3.2 million prizes to lucky winners.</p>
                    </div>
                </div>

                <div className='col-12 col-md-9 mx-auto p-4 text-center lotterySystem'>
                    <p className='fs-5 mb-5'>Our Executive team including our Executive Chairman, Chief Executive Officer and Chief Operating Officer have over 50 years of combined experience in the global lottery industry and they lead an amazing team of experienced, passionate and hard-working individuals based here in Australia. We want your experience with The Lottery Office to be fun and simple and we are always here to help.<Link to='/contact' className='fs-5'>Visit our Contact Us Page.</Link></p>
                    <h2 className='my-4'>The Lottery Office Affiliate Programs Australia</h2>
                    <p className='fs-5'>Want to work with us as an affiliate? Affiliate partners love our higher payouts,advanced tracking and dedicated customer service.<br/>Take a look at our <Link to='/' className='fs-5'>Hight Commission Affiliate Programs</Link>  to find out how you could energise your online business.</p>
                </div>

                <div className='row w-100 p-0 ms-0'>
                    <div className='col-12 col-md-6 mx-auto d-flex flex-md-column paymentMethod align-items-center justify-content-center text-center py-4'>
                        <div className='col-12 col-md-6 mx-auto align-items-center justify-content-center text-center'>
                            <h4>Government regulated</h4>
                            <img src={govt_regulated} className='mt-4' alt='Government regulated logo' />
                        </div>
                    </div>
                    <div className='col-12 col-md-6 mx-auto d-flex flex-md-column paymentMethod align-items-center justify-content-center text-center py-4'>
                        <div className='col-12 col-md-6 mx-auto align-items-center justify-content-center text-center'>
                            <h4>Government regulated</h4>
                            <img src={payment_strip} className='mt-4' alt='Payment method logo' />
                        </div>
                    </div>
                </div>
            <Footerr />
            </div>
        </div>
    )
}
export default About;