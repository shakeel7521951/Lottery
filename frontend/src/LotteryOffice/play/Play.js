import React, { useEffect, useState } from 'react';
import './Play.css';
import Header from '../Header';
import playBanner from '../images/contact.PNG';
import { Link } from 'react-router-dom';
import govt_regulated from '../images/govt-regulated-strip.svg';
import payment_strip from '../images/payment-strip.svg';
import Footerr from '../Footerr';
import fetchLotteries from '../../LotteryData/LotteryData';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Play = () => {
    const [selected, setSelected] = useState('Quick play');
    const [selectedDate, setSelectedDate] = useState('22-April-2024');
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [activated, setActivated] = useState('Standard');
    const numbers = Array.from({ length: 50 }, (_, index) => index + 1);
    const luckyNumbers = Array.from({ length: 12 }, (_, index) => index + 1);
    const [selectedNumbers, setSelectedNumbers] = useState([]);
    const [selectedLuckyNumber, setSelectedLuckyNumber] = useState([]);
    const maxSelection = 5;
    const maxLuckySelection = 2;
    const [system, setSystem] = useState('System 7');
    const [showSystemDropDown, setSystemDropDown] = useState('');
    const [viewWinngingCombination, setViewWinningCombination] = useState('true');
    const [lotteriesData, setLotteriesData] = useState([]);

    useEffect(() => {
        const getLotteryData = async () => {
            try {
                const data = await fetchLotteries();
                setLotteriesData(data.data);
            } catch (error) {
                console.log('Error fetching data:', error);
            }
        };
        getLotteryData();
    }, []);

    const handleAddToCart = async(id) => {
        try {
            const response = await fetch(`https://lottery-three-ivory.vercel.app/add-to-cart/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                const data = await response.json();
                toast.success(`${data.message}`, { position: 'top-center' });
            } else {
                const errorData = await response.json();
                toast.error(` ${errorData.message || 'Unknown error'}`, { position: 'top-center' });
            }
        } catch (error) {
            toast.error(`${error.message}`, { position: 'top-center' });
        }
    }

    const handleViewWinningCombination = () => {
        setViewWinningCombination(!viewWinngingCombination);
    }

    const handleShowSystemDropDown = () => {
        setSystemDropDown(!showSystemDropDown);
    }

    const handleSystem = (value) => {
        setSystem(value);
        setSystemDropDown(false);
    }

    const handleLuckyNumberClick = (number) => {
        if (selectedLuckyNumber.length < maxLuckySelection && !selectedLuckyNumber.includes(number)) {
            setSelectedLuckyNumber([...selectedLuckyNumber, number]);
        }
    };

    const handleRandomPick = () => {
        const availableNumbers = numbers.filter(number => !selectedNumbers.includes(number));
        const randomNumbers = [];
        while (randomNumbers.length < maxSelection - selectedNumbers.length) {
            const randomIndex = Math.floor(Math.random() * availableNumbers.length);
            const randomNumber = availableNumbers.splice(randomIndex, 1)[0];
            randomNumbers.push(randomNumber);
        }
        setSelectedNumbers([...selectedNumbers, ...randomNumbers]);
    };

    const handleNumberClick = (number) => {
        if (selectedNumbers.length < maxSelection && !selectedNumbers.includes(number)) {
            setSelectedNumbers([...selectedNumbers, number]);
        }
    };

    const dates = Array.from({ length: 20 }, (_, i) => {
        const date = new Date();
        date.setDate(date.getDate() + i);
        return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' });
    });

    const handleSelect = (date) => {
        setSelectedDate(date);
        setDropdownVisible(false);
    };

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <>
            <div className='container-fluid'>
                <Header />
                <div className='row'>
                    <img src={playBanner} className='w-100 p-0' alt='Banner' />
                </div>
                <div className='row play-container'>
                    <div className='col-12 mx-auto'>
                        <div className='col-10 mx-auto d-flex justify-content-center mt-4 play-choice'>
                            <p className={selected === 'Quick play' ? 'selected' : ''} onClick={() => setSelected('Quick play')}>Quik play</p>
                            <p className={selected === 'Choose numbers' ? 'selected' : ''} onClick={() => setSelected('Choose numbers')}>Choose numbers</p>
                            <p className={selected === 'Favourites' ? 'selected' : ''} onClick={() => setSelected('Favourites')}>Favourites</p>
                        </div>

                        {
                            selected === 'Choose numbers' &&
                            <div className='col-12 mx-auto text-center align-items-center justify-content-center chooseNumber rounded p-4'>
                                <div className='col-12 col-md-6 mx-auto rounded-pill d-flex align-items-center text-center choose'>
                                    <h5 className={activated === 'Standard' ? 'activated' : 'text-light'} onClick={() => setActivated('Standard')}>Standard</h5>
                                    <h5 className={activated === 'Lotto Systems' ? 'activated' : 'text-light'} onClick={() => setActivated('Lotto Systems')}>Lotto Systems</h5>
                                </div>

                                <div className='col-12 col-md-8 mx-auto bg-light rounded mt-5 p-4 choose_numbers'>
                                    <div className='col-10 col-md-6 mx-auto'>
                                        {
                                            activated === 'Lotto Systems' && (
                                                <div className='col-12 col-md-8 mx-auto my-3'>
                                                    <h4>Select a Lotto System</h4>
                                                    <div className='d-flex justify-content-between my-4 w-60 rounded-pill mail_inputs' onClick={handleShowSystemDropDown}>
                                                        <input type='text' value={system} readOnly ></input>
                                                        <i className="bi bi-caret-down-fill" />
                                                    </div>
                                                    {
                                                        showSystemDropDown && (
                                                            <div className='days-selection system-selection'>
                                                                <p onClick={() => { handleSystem('System 8') }} className='bgColor pt-2'>System 8</p>
                                                                <p onClick={() => { handleSystem('System 9') }}>System 9</p>
                                                                <p onClick={() => { handleSystem('System 10') }} className='bgColor'>System 10</p>
                                                                <p onClick={() => { handleSystem('Pick 1 Less') }}>Pick 1 Less</p>
                                                            </div>
                                                        )
                                                    }
                                                </div>
                                            )
                                        }
                                        {activated === 'Lotto Systems' &&
                                            <div className='col-12 mx-auto rounded system-table-container mb-4'>
                                                <table>
                                                    <tr className='system-table'>
                                                        <th>Equivalent to</th>
                                                        <th>Cost per system game</th>
                                                    </tr>
                                                    <tr>
                                                        <th>7 standard games</th>
                                                        <th>$67.55</th>
                                                    </tr>
                                                </table>
                                            </div>}

                                        <h5 className='text-danger'>Choose your numbers</h5>
                                        <h4>Game 1</h4>
                                        <p>Choose 5 main numbers</p>
                                        <div className='justify-content-between d-flex mt-4'>
                                            <div>
                                                <Link className='text-success' onClick={handleRandomPick}>Random pick</Link>
                                            </div>
                                            <div>
                                                <Link onClick={() => setSelectedNumbers([])}>Reset</Link>
                                            </div>
                                            <div>
                                                <Link className='text-danger' >Delete</Link>
                                            </div>
                                        </div>


                                        <div className='d-flex justify-content-center mt-2 selected_numbers'>
                                            {Array.from({ length: maxSelection }).map((_, index) => (
                                                <p key={index}>{selectedNumbers[index] !== undefined ? selectedNumbers[index] : ''}</p>
                                            ))}
                                        </div>
                                        <div className='bg-gray d-flex justify-content-center mt-4 selected_numbers available flex-wrap'>
                                            {numbers.map((number) => (
                                                <p
                                                    key={number}
                                                    onClick={() => handleNumberClick(number)}
                                                    style={{
                                                        cursor: 'pointer',
                                                        pointerEvents: selectedNumbers.length >= maxSelection && !selectedNumbers.includes(number) ? 'none' : 'auto',
                                                        color: selectedNumbers.includes(number) ? 'gray' : 'danger'
                                                    }}
                                                >
                                                    {number}
                                                </p>
                                            ))}
                                        </div>


                                        <p className='my-4'>Choose your 2 lucky stars</p>
                                        <div className='d-flex justify-content-center mt-2 selected_numbers'>
                                            {Array.from({ length: maxLuckySelection }).map((_, index) => (
                                                <p key={index}>{selectedLuckyNumber[index] !== undefined ? selectedLuckyNumber[index] : ''}</p>
                                            ))}
                                        </div>
                                        <div className='bg-gray d-flex justify-content-center mt-4 selected_numbers available flex-wrap'>
                                            {luckyNumbers.map((number) => (
                                                <p
                                                    key={number}
                                                    onClick={() => handleLuckyNumberClick(number)}
                                                    style={{
                                                        cursor: 'pointer',
                                                        pointerEvents: selectedLuckyNumber.length >= maxLuckySelection && !selectedLuckyNumber.includes(number) ? 'none' : 'auto',
                                                        color: selectedLuckyNumber.includes(number) ? 'gray' : 'black'
                                                    }}
                                                >
                                                    {number}
                                                </p>
                                            ))}
                                        </div>
                                        <button type='submit' className='mt-5 button btn'>Confirm</button><br />
                                        <button type='button' className='button btn-secondary my-5'>Add a game</button>
                                        <h5 className='text-danger'>How many draws would you like to use these numbers for?</h5>
                                        <div className='row'>
                                            <div class=" col-10 mx-auto total_draws d-flex flex-wrap align-items-center text-center justify-content-between gap-2">
                                                <div class="col-3 d-flex">
                                                    <input type='radio' name='draws' id='1' /><label htmlFor='1'>1</label>
                                                </div>
                                                <div class="col-3 d-flex">
                                                    <input type='radio' name='draws' id='2' /><label htmlFor='2'>2</label>
                                                </div>
                                                <div class="col-3 d-flex">
                                                    <input type='radio' name='draws' id='3' /><label htmlFor='3'>3</label>
                                                </div>
                                                <div class="col-3 d-flex">
                                                    <input type='radio' name='draws' id='5' /><label htmlFor='5'>5</label>
                                                </div>
                                                <div class="col-3 d-flex">
                                                    <input type='radio' name='draws' id='10' /><label htmlFor='10'>10</label>
                                                </div>
                                                <div class="col-3 d-flex">
                                                    <input type='radio' name='draws' id='20' /><label htmlFor='20'>20</label>
                                                </div>
                                            </div>
                                            <div className='col-12 mx-auto justify-content-center align-items-center text-center'>
                                                <h4 className='text-danger my-5'>Total Ticket Cost</h4>
                                                <h3 className='total-cost mx-auto p-2'>$0.00</h3>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        }


                        {selected === 'Quick play' &&
                            <div className='col-12 mx-auto text-center quick-play pb-5'>
                                <p className='text-light pt-4'>Click on a Quick Play below to add it to your cart</p>
                                <div className='col-10 mx-auto d-flex flex-column flex-md-row gap-2 flex-wrap'>

                                    {
                                        lotteriesData.map((data, index) => (
                                            <div key={index} onClick={() => handleAddToCart(data._id)} className='col-10 col-md-3 mx-auto d-flex align-items-start justify-content-between bg-light rounded px-4 py-3 play-card'>
                                                <div className='align-items-start text-start'>
                                                    <h4>{data.quick_play} Quick Play</h4>
                                                    <p>${data.price_per_share}</p>
                                                </div>
                                                <div>
                                                    <i className='bi bi-cart fs-4' />
                                                </div>
                                            </div>
                                        ))
                                    }
                                    <div className='col-10 col-md-11 mx-auto align-items-start justify-content-between bg-light rounded px-4 py-3 play-card'>
                                        <p className='text-left lottoSystem'>Lotto Systems</p>
                                        <div className='align-items-start d-flex justify-content-between text-center mt-3'>
                                            <h4 className='ms-5'>20 Quick Play</h4>
                                            <p>$150.00</p>
                                            <i className='bi bi-cart fs-4 mb-2' />
                                        </div>
                                        <div>
                                            <p className='gurantee text-start'>This Guarantees you one Euro number.</p>
                                        </div>
                                    </div>

                                    <button type='button' className='button btn mx-auto playBtn' onClick={() => document.location.href = '/checkout'}>Go to checkout</button>

                                </div>
                            </div>}


                    </div>

                    <div className='col-12 col-md-8 mx-auto bg-light p-5 rounded my-5 general-information'>
                        <h5 className='text-center'>General Information</h5>
                        <div className='justify-content-between mt-4'>
                            <div className='d-flex align-items-start justify-content-between'>
                                <p className='m-0'>Minimum games: </p>
                                <span className='col-6 m-0 p-0'>1 Game</span>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <p className='m-0'>Game format: </p>
                                <span className='col-6'>5/50 + 2/12 - Choose 5 numbers from 50 and 2 numbers from 12</span>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <p className='m-0'>Cost per game:</p>
                                <span className='col-6'>AUD $7.50</span>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <p className='m-0'>Draw days:</p>
                                <span className='col-6'>Wednesdays & Saturdays AEST</span>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <p className='m-0'>Est. Jackpot:</p>
                                <span className='col-6'>$84 Million</span>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <p className='m-0'>Closes in:</p>
                                <span className='col-6'>4 hrs, 1 min</span>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <p className='m-0'>Matched overseas lottery:</p>
                                <span className='col-6'>Europe's Eurojackpot</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row jackpot-results'>

                    <div className='col-12 col-md-10 mx-auto text-center my-4'>
                        <h4 className='text-light'>European Jackpot Results</h4>
                        <p className='text-light'>Select a draw date</p>

                        <div className='col-12 col-md-6 mx-auto result-search align-items-center' style={{ position: 'relative' }}>
                            <div className='d-flex justify-content-center align-items-center w-100' onClick={toggleDropdown} style={{ cursor: 'pointer' }}>
                                <p className='mb-0'>{selectedDate}</p>
                                <i className="bi bi-caret-down-fill ms-2 text-light" />
                            </div>
                            {dropdownVisible && (
                                <div className='dropdown-menu'>
                                    {dates.map((date, index) => (
                                        <p key={index} onClick={() => handleSelect(date)}>{date}</p>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className='col-12 col-md-8 mx-auto bg-light justify-content-center align-items-center text-center my-4 p-4 rounded'>
                        <h4>Winning numbers for 22-Jun-2024</h4>
                        <div className='col-12 col-md-5 mx-auto text-center align-items-center justify-content-center pt-3 gap-3 d-flex numbers'>
                            <p>5</p>
                            <p>9</p>
                            <p>18</p>
                            <p>32</p>
                            <p>44</p>
                            <p>58</p>
                            <p className='bg-black'>34</p>
                        </div>
                        <div className='col-8 mx-auto mt-5 division-prizes'>
                            <div className='d-flex justify-content-between align-items-start'>
                                <h4 className='col-4 text-start'>Division</h4>
                                <h4 className='col-4 text-start'>Division Prize*</h4>
                                <h4 className='col-4 text-start'>Winners**</h4>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <p>Division 1</p>
                                <p>$70,840,000.00</p>
                                <p>0</p>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <p>Division 2</p>
                                <p>$1,062,581.65</p>
                                <p>3</p>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <p>Division 3</p>
                                <p>$256,819.96</p>
                                <p>7</p>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <p>Division 4</p>
                                <p>$10,590.42</p>
                                <p>28</p>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <p>Division 5</p>
                                <p>$598.76</p>
                                <p>619</p>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <p>Division 6</p>
                                <p>$228.30</p>
                                <p>1280</p>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <p>Division 7</p>
                                <p>$219.46</p>
                                <p>1298</p>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <p>Division 8</p>
                                <p>$21954.46</p>
                                <p>1348</p>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <p>Division 9</p>
                                <p>$219354.46</p>
                                <p>14048</p>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <p>Division 10</p>
                                <p>$21935412.46</p>
                                <p>18048</p>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <p>Division 11</p>
                                <p>$2354.46</p>
                                <p>1409658</p>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <p>Division 12</p>
                                <p>$2194.46</p>
                                <p>1404988</p>
                            </div>
                        </div>
                        <p className='mt-3 fs-6'>Prizes have been converted at the following rate: 1 EUR = 1.6232 AUD</p>
                        <div className='d-flex align-items-center justify-content-center' onClick={handleViewWinningCombination}>
                            <Link to='' >View Winnig combinations</Link>
                            <i className="bi bi-caret-down-fill cursor-pointer" />
                        </div>
                        {viewWinngingCombination &&
                            <div className='col-8 mx-auto justify-content-center align-items-center text-center winning-combinations'>
                                <div className='d-flex flex-column flex-md-row justify-content-between mt-4 align-items-center'>
                                    <div className='text-start'>
                                        <h4>Division 1</h4>
                                        <h5>5 numbers + 2 Euros</h5>
                                    </div>
                                    <div className='col-12 col-md-6 text-center align-items-start gap-3 d-flex numbers'>
                                        <p></p><p></p><p></p><p></p><p></p><p className='bg-primary'></p> <p className='bg-primary'></p>
                                    </div>
                                </div>
                                <div className='d-flex flex-column flex-md-row justify-content-between  mt-2 align-items-center'>
                                    <div className=' text-start'>
                                        <h4>Division 2</h4>
                                        <h5>5 numbers + Euro</h5>
                                    </div>
                                    <div className='col-12 col-md-6  text-center align-items-start gap-3 d-flex numbers'>
                                        <p></p><p></p><p></p><p></p><p></p> <p className='bg-primary'></p>
                                    </div>
                                </div>
                                <div className='d-flex flex-column flex-md-row justify-content-between  mt-2 align-items-center'>
                                    <div className=' text-start'>
                                        <h4>Division 3</h4>
                                        <h5>5 numbers</h5>
                                    </div>
                                    <div className='col-12 col-md-6  text-center align-items-start gap-3 d-flex numbers'>
                                        <p></p><p></p><p></p><p></p><p></p>
                                    </div>
                                </div>
                                <div className='d-flex flex-column flex-md-row justify-content-between  mt-2 align-items-center'>
                                    <div className=' text-start'>
                                        <h4>Division 4</h4>
                                        <h5>4 numbers + 2 Euros</h5>
                                    </div>
                                    <div className='col-12 col-md-6  text-center align-items-start gap-3 d-flex numbers'>
                                        <p></p><p></p><p></p><p></p><p className='bg-primary'></p> <p className='bg-primary'></p>
                                    </div>
                                </div>
                                <div className='d-flex flex-column flex-md-row justify-content-between  mt-2 align-items-center'>
                                    <div className=' text-start'>
                                        <h4>Division 5</h4>
                                        <h5>4 numbers + Euro</h5>
                                    </div>
                                    <div className='col-12 col-md-6  text-center align-items-start gap-3 d-flex numbers'>
                                        <p></p><p></p><p></p><p></p> <p className='bg-primary'></p>
                                    </div>
                                </div>
                                <div className='d-flex flex-column flex-md-row justify-content-between  mt-2 align-items-center'>
                                    <div className=' text-start'>
                                        <h4>Division 6</h4>
                                        <h5>4 numbers</h5>
                                    </div>
                                    <div className='col-12 col-md-6  text-center align-items-start gap-3 d-flex numbers'>
                                        <p></p>  <p></p>  <p></p>  <p></p>
                                    </div>
                                </div>
                                <div className='d-flex flex-column flex-md-row justify-content-between  mt-2 align-items-center'>
                                    <div className=' text-start'>
                                        <h4>Division 7</h4>
                                        <h5>3 numbers + 2 Euros</h5>
                                    </div>
                                    <div className='col-12 col-md-6  text-center align-items-start gap-3 d-flex numbers'>
                                        <p></p>  <p></p>  <p></p>  <p className='bg-primary'></p>  <p className='bg-primary'></p>
                                    </div>
                                </div>
                                <div className='d-flex flex-column flex-md-row justify-content-between  mt-2 align-items-center'>
                                    <div className=' text-start'>
                                        <h4>Division 8</h4>
                                        <h5>2 numbers + 2 Euros</h5>
                                    </div>
                                    <div className='col-12 col-md-6  text-center align-items-start gap-3 d-flex numbers'>
                                        <p></p>  <p></p>   <p className='bg-primary'></p>  <p className='bg-primary'></p>
                                    </div>
                                </div>
                                <div className='d-flex flex-column flex-md-row justify-content-between  mt-2 align-items-center'>
                                    <div className=' text-start'>
                                        <h4>Division 9</h4>
                                        <h5>3 numbers + Euro</h5>
                                    </div>
                                    <div className='col-12 col-md-6  text-center align-items-start gap-3 d-flex numbers'>
                                        <p></p>  <p></p>  <p></p> <p className='bg-primary'></p>
                                    </div>
                                </div>
                                <div className='d-flex flex-column flex-md-row justify-content-between  mt-2 align-items-center'>
                                    <div className=' text-start'>
                                        <h4>Division 10</h4>
                                        <h5>3 numbers</h5>
                                    </div>
                                    <div className='col-12 col-md-6  text-center align-items-start d-flex gap-3 numbers'>
                                        <p></p>  <p></p>  <p></p>
                                    </div>
                                </div>
                                <div className='d-flex flex-column flex-md-row justify-content-between  mt-2 align-items-center'>
                                    <div className=' text-start'>
                                        <h4>Division 11</h4>
                                        <h5>1 number + 2 Euros</h5>
                                    </div>
                                    <div className='col-12 col-md-6  text-center align-items-start gap-3 d-flex numbers'>
                                        <p></p>  <p className='bg-primary'></p>  <p className='bg-primary'></p>
                                    </div>
                                </div>
                                <div className='d-flex flex-column flex-md-row justify-content-between  mt-2 align-items-center'>
                                    <div className=' text-start'>
                                        <h4>Division 12</h4>
                                        <h5>2 numbers + Euro</h5>
                                    </div>
                                    <div className='col-12 col-md-6  text-center align-items-start gap-3 d-flex numbers'>
                                        <p></p>  <p></p> <p className='bg-primary'></p>
                                    </div>
                                </div>
                            </div>}

                    </div>

                </div>

                <div className='row lotterySystem'>
                    <div className='col-12 col-md-11 mx-auto my-5'>
                        <div className='d-flex flex-column flex-md-row align-items-start'>
                            <div className='col-12 col-md-2 mx-auto'>
                                <img src='	https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-2.svg' className='w-42 mx-auto me-md-4' alt='lottery information' />
                            </div>
                            <div className="col-12 col-md-10 mx-auto left_border p-2">
                                <h4 className="mb-4">How to Play European Jackpot</h4>
                                <p className='border-left-custom'>To participate in our European Jackpot players must choose 5 main numbers from a pool of 1-50 as well as two euro numbers from a pool of 1-12. Matching all 7 numbers drawn as a sole winner will see you take home a minimum jackpot of $17 Million (€10 Million) tax-free!</p>
                                <p>Draws are held every Wednesday and Saturday so there are plenty of chances to win a prize. There are 12 different divisions of prizes to win from and matching just 3 balls will be enough to get you on the winners' list.</p>
                                <p>When you purchase an entry in our European Jackpot, we will purchase a matching ticket in the Eurojackpot draw conducted in Germany. In the event of a win, we will collect the prize and pay you the exact same amount. Our matching lottery has the same draw Rules as the Eurojackpot rules. Read a summary of the .</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-11 mx-auto my-5'>
                        <div className='d-flex flex-column flex-md-row align-items-start'>
                            <div className='col-12 col-md-2 mx-auto'>
                                <img src='https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-1.svg' className='w-42 mx-auto me-md-4' alt='lottery information' />
                            </div>
                            <div className="col-12 col-md-10 mx-auto left_border p-2">
                                <h4 className="mb-4">History of Europe's Eurojackpot</h4>
                                <p className='border-left-custom'>Following the huge success of the EuroMillions, the Eurojackpot was launched in 2012 with 8 countries participating in the initial draws. A year later and 6 more countries joined in. It continues to go from strength to strength and there are currently a total of 18 countries taking part in Eurojackpot every single week.</p>
                                <p>Each time the jackpot is not won, it 'rolls over' to the next draw before reaching its cap of $175 Million (€120 Million). The jackpot will stay at this cap until it is won. When the jackpot is at the cap and isn’t won, any excess prize money will roll down to the winner in the next highest division.</p>
                                <p>Buy your European Jackpot lottery ticket online with a Government licensed provider right here in Australia.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row'>
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
                <ToastContainer />
            </div>
            <Footerr />
        </>
    )
}
export default Play;
