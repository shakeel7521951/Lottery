import React from 'react';
import { Link } from 'react-router-dom';

const Footerr = () => {
    return (
        <div className='container-fluid'>
            <div className='row' style={{ backgroundColor: '#7a7b78' }}>
                <div className='col-12 col-md-10 mx-auto'>
                    <div className='d-flex my-5 justify-content-center align-items-center gap-3 text-center'>
                        <i className="bi bi-facebook fs-2 me-3 text-light cursor-pointer"></i>
                        <i className="bi bi-instagram fs-2 me-3 text-light cursor-pointer"></i>
                        <i className="bi bi-twitter fs-2 me-3 text-light cursor-pointer"></i>
                        <i className="bi bi-linkedin fs-2 me-3 text-light cursor-pointer"></i>
                        <i className="bi bi-youtube fs-2 text-light cursor-pointer"></i>
                    </div>
                    <div className='appStore d-flex justify-content-center gap-3 mb-5'>
                        <img src='https://freelogopng.com/images/all_img/1664287128google-play-store-logo-png.png' alt='google logo' />
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png' alt='google app store' />
                    </div>
                    <div className='col-12 col-md-8 mx-auto mb-5'>
                        <p className='text-center textSize text-light'>The Lottery OfficeTM is operated by Global Players Network Pty Ltd, and licensed and regulated by the Northern Territory Government of Australia</p>
                        <p className='text-center textSize text-light'>Address: PO Box 36528 Winnellie, Northern Territory Australia, 0907
                            Australian Company Number: 41 102 371 335</p>
                    </div>
                </div>
                <div className='col-12' style={{ backgroundColor: '#302c29' }}>
                    <div className='mx-auto gap-2 py-4 d-flex flex-wrap justify-content-center footer-links'>
                        <Link to=''>Buy Lotto Tickets Online</Link>
                        <Link to=''>Privacy</Link>
                        <Link to=''>Terms & Conditions</Link>
                        <Link to=''>FAQs</Link>
                        <Link to=''>Responsible Gambling</Link>
                        <Link to=''>Sitemap</Link>
                        <Link to=''>Game Rules</Link>
                        <Link to=''>Charity</Link>
                        <Link to=''>Media</Link>
                        <Link to=''>Contact us</Link>
                        <Link to=''>Affiliates</Link>
                    </div>
                    <div className='col-10 mx-auto text-center'>
                        <p className='textSize'>© Copyright 2024 The Lottery Office</p>
                        <p className='textSize'>Global Players Network Pty Ltd (The Licensee) claims copyright and ownership of the intellectual property for the contents of this website.
                            Any unauthorised copying or other misuse of this site or the contents will be prosecuted.</p>
                        <p className='textSize '>® Registered trade mark / TM. Trade mark of Global Players Network Pty Ltd.</p>
                        <p className='textSize'>Not all lottery tickets are winners. Whether you win and how much you win is a matter of chance.</p>
                        <p className='textSize'>The Lottery Office is not affiliated with the operators of the overseas lotteries from which it purchases matching tickets. Please see ts and cs for more information.</p>
                        <p className='mb-4 textSize'>* All prize amounts are quoted in AUD and rounded to the nearest integer for visual purposes. USA Power Lotto and USA Mega Lotto jackpot prize amounts are advertised as the annuity amount and would be subject to the equivalent US taxes payable for the official overseas draw. A cash lump sum first prize option would provide a lesser amount. USA Power Lotto and USA Mega Lotto prize amounts over USD$600 are subject to tax. Italian Super Jackpot prize amounts over €500 are subject to tax. La Primitiva prize amounts over €40,000 are subject to tax.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footerr;
