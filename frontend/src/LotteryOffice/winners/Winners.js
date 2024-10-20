import React from 'react';
import './Winners.css';
import Header from '../Header';
import { Link } from 'react-router-dom';
import winner from '../images/winner.jpg';
import countryTickets from '../CountryTickets';
import Footerr from '../Footerr';

const Winners = () => {
    return (
        <div className='container-fluid'>
            <Header />
            <div className='row'>
                <div className='col-12 col-md-11 mx-auto p-3 mb-5'>
                    <h1 className='text-danger'>Winners</h1>
                    <hr />
                    <div className='col-12 d-flex flex-column gap-4 flex-md-row'>
                        <div className='col-12 col-md-8 mx-auto'>

                            <div className=' col-12 winnner-card rounded d-flex mt-5'>
                                <div className='p-4'>
                                    <p>April 6, 2024</p>
                                    <hr />
                                    <h5>VIC WINNER: Lucky Life Path Number Leads to $47,116 win!</h5>
                                    <Link to='/read-more' className='text-danger'>Read more</Link>
                                </div >
                                <div>
                                    <img src={winner} alt='Winner' className='w-100 rounded h-100' />
                                </div>
                            </div>

                            <div className=' col-12 winnner-card rounded d-flex mt-5'>
                                <div className='w-50 p-4'>
                                    <p>April 6, 2024</p>
                                    <hr />
                                    <h5>A Remarkable Lotto Win for a South Australian Woman: A Story of Luck and Timing</h5>
                                    <Link to='/read-more' className='text-danger'>Read more</Link>
                                </div >
                                <div className='w-50'>
                                    <img src="https://blog.lotteryoffice.com.au/wp-content/uploads/2024/07/Winner_LiveCall280x187.jpg" alt='Winner' className='w-100 rounded h-100' />
                                </div>
                            </div>

                            <div className=' col-12 winnner-card rounded d-flex mt-5'>
                                <div className='w-50 p-4'>
                                    <p>July 30, 2024</p>
                                    <hr />
                                    <h5>Division 3 Syndicate Just One Number Off Winning AUD $150 Million USA Power Lotto Jackpot</h5>
                                    <Link to='/read-more' className='text-danger'>Read more</Link>
                                </div >
                                <div className='w-50'>
                                    <img src="https://blog.lotteryoffice.com.au/wp-content/uploads/2024/07/Image-A_280x187.jpg" alt='Winner' className='w-100 rounded h-100' />
                                </div>
                            </div>

                            <div className=' col-12 winnner-card rounded d-flex mt-5'>
                                <div className='w-50 p-4'>
                                    <p>December 27, 2023</p>
                                    <hr />
                                    <h5>Jingle bells, jackpot swells: Christmas Eve USA Power Lotto win</h5>
                                    <Link to='/read-more' className='text-danger'>Read more</Link>
                                </div >
                                <div className='w-50'>
                                    <img src="	https://blog.lotteryoffice.com.au/wp-content/uploads/2023/12/power-win-sm.jpg" alt='Winner' className='w-100 rounded h-100' />
                                </div>
                            </div>

                        </div>

                        <div className='col-12 col-md-4 mt-2'>
                            <div className='col-12 mx-auto mt-5'>
                                {
                                    countryTickets.map((value,index)=>(
                                        <div key={index} className=' rounded border winnner-card cursor-pointer p-2 mt-3 d-flex' onClick={()=>document.location.href='/play'}>
                                        <img src={value.image} className='w-25' alt='Logo' />
                                        <div className='ms-3 mt-3'>
                                            <h5>Play {value.countryName}</h5>
                                            <p>${value.pirce}</p>
                                        </div>
                                    </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                    <div className='d-flex gap-3 mt-4'>
                        <Link to='/' className='text-success'>Home</Link>
                        <Link to='/magzine' className='text-success'>Magzine</Link>
                        <Link to='/winners' className='text-danger'>Winners</Link>
                    </div>
                </div>
                <Footerr />
            </div>
        </div>
    )
}
export default Winners;