import React, { useState } from 'react';
import './Results.css';
import Header from '../Header';
import { Link } from 'react-router-dom';
import result1 from '../images/result1.PNG';
import result2 from '../images/result2.PNG';
import result3 from '../images/result3.PNG';
import result4 from '../images/result4.PNG';
import govt_regulated from '../images/govt-regulated-strip.svg';
import payment_strip from '../images/payment-strip.svg';
import Footerr from '../Footerr';

const Results = () => {
    const [selectedLotto, setSelectedLotto] = useState('USA Power Lotto');
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const handleSelect = (lotto) => {
        setSelectedLotto(lotto);
        setDropdownVisible(false);
    };

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <>
            <div className='container-fluid'>
                <Header />
                <div className='row result-container'>
                    <div className='col-12 col-md-10 mx-auto align-items-center justify-content-center text-center my-4'>
                        <h4 className='text-light'>Lotto Results</h4>
                        <p className='text-light'>Get the latest lotto results for all of The Lottery Office’s draws.</p>

                        <div className='col-12 mx-auto mb-5 bg-light rounded'>

                            <div className='d-flex flex-column flex-md-row p-3 align-items-center justify-content-between text-center cursor-pointer'>
                                <div className='col-12 col-md-4 d-flex justify-content-start align-items-start text-center'>
                                    <img src='https://www.lotteryoffice.com.au/assets/images/lottery-logos/uk-lotto.png' className='w-25' alt='logo' />
                                    <div className='text-start ms-3'>
                                        <h4>UK Lotto</h4>
                                        <p>23-June-2024</p>
                                    </div>
                                </div>
                                <div className='col-12 col-md-5 mx-auto d-flex numbers'>
                                    <p>5</p>
                                    <p>9</p>
                                    <p>18</p>
                                    <p>32</p>
                                    <p>44</p>
                                    <p>58</p>
                                    <p className='bg-black'>34</p>
                                </div>
                                <div> 
                                    <button type='button' onClick={()=>window.location.href="/play"} className='button btn resultBtn'>Play now</button>
                                </div>
                            </div>

                            <hr className='my-0' />
                            <div className='d-flex flex-column flex-md-row p-3 align-items-center justify-content-between text-center cursor-pointer'>
                                <div className='col-12 col-md-4 d-flex justify-content-start align-items-start text-center'>
                                    <img src='	https://www.lotteryoffice.com.au/assets/images/lottery-logos/irish-lotto.png' className='w-25' alt='logo' />
                                    <div className='text-start ms-3'>
                                        <h4>Irish Lotto</h4>
                                        <p>23-June-2024</p>
                                    </div>
                                </div>
                                <div className='col-12 col-md-5 mx-auto d-flex numbers'>
                                    <p>5</p>
                                    <p>9</p>
                                    <p>18</p>
                                    <p>32</p>
                                    <p>44</p>
                                    <p>58</p>
                                    <p className='bg-black'>34</p>
                                </div>
                                <div>
                                    <button type='button' onClick={()=>window.location.href="/play"} className='button btn resultBtn'>Play now</button>
                                </div>
                            </div>
                            <hr className='my-0' />

                            <div className='d-flex flex-column flex-md-row p-3 align-items-center justify-content-between text-center cursor-pointer'>
                                <div className='col-12 col-md-4 d-flex justify-content-start align-items-start text-center'>
                                    <img src='	https://www.lotteryoffice.com.au/assets/images/lottery-logos/la-primitiva.png' className='w-25' alt='logo' />
                                    <div className='text-start ms-3'>
                                        <h4>La Primitiva</h4>
                                        <p>23-June-2024</p>
                                    </div>
                                </div>
                                <div className='col-12 col-md-5 mx-auto d-flex numbers'>
                                    <p>5</p>
                                    <p>9</p>
                                    <p>18</p>
                                    <p>32</p>
                                    <p>44</p>
                                    <p>58</p>
                                    <p className='bg-primary'>58</p>
                                    <p className='bg-black'>34</p>
                                </div>
                                <div>
                                    <button type='button' onClick={()=>window.location.href="/play"} className='button btn resultBtn'>Play now</button>
                                </div>
                            </div>
                            <hr className='my-0' />

                            <div className='d-flex flex-column flex-md-row p-3 align-items-center justify-content-between text-center cursor-pointer'>
                                <div className='col-12 col-md-4  d-flex justify-content-start align-items-start text-center'>
                                    <img src='	https://www.lotteryoffice.com.au/assets/images/lottery-logos/superenalotto.png' className='w-25' alt='logo' />
                                    <div className='text-start ms-3'>
                                        <h4>Italian Super Jackpot</h4>
                                        <p>23-June-2024</p>
                                    </div>
                                </div>
                                <div className='col-12 col-md-5 mx-auto d-flex numbers'>
                                    <p>5</p>
                                    <p>9</p>
                                    <p>18</p>
                                    <p>32</p>
                                    <p>44</p>
                                    <p className='bg-black'>34</p>
                                </div>
                                <div>
                                    <button type='button' onClick={()=>window.location.href="/play"} className='button btn resultBtn'>Play now</button>
                                </div>
                            </div>
                            <hr className='my-0' />

                            <div className='d-flex flex-column flex-md-row p-3 align-items-center justify-content-between text-center cursor-pointer'>
                                <div className='col-12 col-md-4 d-flex justify-content-start align-items-start text-center'>
                                    <img src='	https://www.lotteryoffice.com.au/assets/images/lottery-logos/us-powerball.png' className='w-25' alt='logo' />
                                    <div className='text-start ms-3'>
                                        <h4>USA Power Lotto</h4>
                                        <p>23-June-2024</p>
                                    </div>
                                </div>
                                <div className='col-12 col-md-5 mx-auto d-flex numbers'>
                                    <p>5</p>
                                    <p>9</p>
                                    <p>18</p>
                                    <p>32</p>
                                    <p>58</p>
                                    <p className='bg-primary'>34</p>
                                </div>
                                <div>
                                    <button type='button' onClick={()=>window.location.href="/play"} className='button btn resultBtn'>Play now</button>
                                </div>
                            </div>
                            <hr className='my-0' />

                            <div className='d-flex flex-column flex-md-row p-3 align-items-center justify-content-between text-center cursor-pointer'>
                                <div className='col-12 col-md-4 d-flex justify-content-start align-items-start text-center'>
                                    <img src='https://www.lotteryoffice.com.au/assets/images/lottery-logos/euromillions.png' className='w-25' alt='logo' />
                                    <div className='text-start ms-3'>
                                        <h4>European Millions</h4>
                                        <p>23-June-2024</p>
                                    </div>
                                </div>
                                <div className='col-12 col-md-5 mx-auto d-flex numbers'>
                                    <p>5</p>
                                    <p>9</p>
                                    <p>18</p>
                                    <p>32</p>
                                    <p>44</p>
                                    <p className='bg-primary'>5</p>
                                    <p className='bg-primary'>6</p>
                                </div>
                                <div>
                                    <button type='button' onClick={()=>window.location.href="/play"} className='button btn resultBtn'>Play now</button>
                                </div>
                            </div>
                            <hr className='my-0' />

                            <div className='d-flex flex-column flex-md-row p-3 align-items-center justify-content-between text-center cursor-pointer'>
                                <div className='col-12 col-md-4 d-flex justify-content-start align-items-start text-center'>
                                    <img src='	https://www.lotteryoffice.com.au/assets/images/lottery-logos/eurojackpot.png' className='w-25' alt='logo' />
                                    <div className='text-start ms-3'>
                                        <h4>European Jackpot</h4>
                                        <p>23-June-2024</p>
                                    </div>
                                </div>
                                <div className='col-12 col-md-5 mx-auto d-flex numbers'>
                                    <p>5</p>
                                    <p>9</p>
                                    <p>18</p>
                                    <p>32</p>
                                    <p>44</p>
                                    <p>58</p>
                                    <p className='bg-primary'>19</p>
                                </div>
                                <div>
                                    <button type='button' onClick={()=>window.location.href="/play"} className='button btn resultBtn'>Play now</button>
                                </div>
                            </div>
                            <hr className='my-0' />

                            <div className='d-flex flex-column flex-md-row p-3 align-items-center justify-content-between text-center cursor-pointer'>
                                <div className='col-12 col-md-4 d-flex justify-content-start align-items-start text-center'>
                                    <img src='https://www.lotteryoffice.com.au/assets/images/lottery-logos/us-megamillions.png' className='w-25' alt='logo' />
                                    <div className='text-start ms-3'>
                                        <h4>USA Mega Lotto</h4>
                                        <p>23-June-2024</p>
                                    </div>
                                </div>
                                <div className='col-12 col-md-5 mx-auto d-flex numbers'>
                                    <p>5</p>
                                    <p>9</p>
                                    <p>18</p>
                                    <p>32</p>
                                    <p>44</p>
                                    <p>58</p>
                                    <p className='bg-black'>34</p>
                                </div>
                                <div>
                                    <button type='button' onClick={()=>window.location.href="/play"} className='button btn resultBtn'>Play now</button>
                                </div>
                            </div>
                        </div>
                        <div className='row justify-content-center align-items-center'>
                            <div className='col-12 col-md-6 mx-1 result-search d-flex flex-column align-items-center' style={{ position: 'relative' }}>
                                <div className='d-flex justify-content-center align-items-center w-100' onClick={toggleDropdown} style={{ cursor: 'pointer' }}>
                                    <p className='mb-0'>{selectedLotto}</p>
                                    <i className="bi bi-caret-down-fill ms-2 text-light" />
                                </div>
                                {dropdownVisible && (
                                    <div className='dropdown-menu'>
                                        <p onClick={() => handleSelect('European Millions')}>European Millions</p>
                                        <p onClick={() => handleSelect('European Jackpot')}>European Jackpot</p>
                                        <p onClick={() => handleSelect('Irish Lotto')}>Irish Lotto</p>
                                        <p onClick={() => handleSelect('Italian Super Jackpot')}>Italian Super Jackpot</p>
                                        <p onClick={() => handleSelect('La primitiva')}>La primitiva</p>
                                        <p onClick={() => handleSelect('UK Lotto')}>UK Lotto</p>
                                        <p onClick={() => handleSelect('USA Mega Lotto')}>USA Mega Lotto</p>
                                        <p onClick={() => handleSelect('USA Power Lotto')}>USA Power Lotto</p>
                                    </div>
                                )}
                            </div>
                            <div className='col-12 col-md-6 mx-1 result-search search-bar d-flex justify-content-center align-items-center'>
                                <p className='mb-0'>Search</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row lotterySystem'>

                    <div className='col-12 col-md-11 mx-auto my-5'>
                        <div className='d-flex flex-column flex-md-row align-items-start'>
                            <div className='col-12 col-md-2 mx-auto'>
                                <img src='https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-1.svg' className='w-42 mx-auto' alt='lottery information' />
                            </div>
                            <div className="col-12 col-md-10 mx-auto left_border p-2">
                                <h4 className="mb-4">Get all your lotto results at The Lottery Office</h4>
                                <p className='border-left-custom'>Finding the lotto results you need is easy with The Lottery Office.</p>
                                <p>Shortly after each draw we’ll publish the results right here so you can find out quickly if you’re our next millionaire. If you don’t have time to check the eticket yourself, no problem! We let all of our players know the results of each draw and automatically send you any winnings under $10,000 without you having to do anything and organise payment with you for larger winnings.</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-11 mx-auto mb-5 p-3'>
                        <div className='d-flex flex-column flex-md-row align-items-start'>
                            <div className='col-12 col-md-2 mx-auto'>
                                <img src='https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-2.svg' className='w-42 mx-auto' alt='lottery information' />
                            </div>
                            <div className="col-12 col-md-10 mx-auto left_border">
                                <h4 className="mb-4">When are lotto results published?</h4>
                                <p className='border-left-custom'>Our exclusive lotteries are matched with overseas lottery draws and the lotto results of our own lotteries will always be the same as those found in the equivalent overseas draws.</p>
                                <p>Once the overseas draw results are in, we’ll publish them here soon after.</p>
                                <p>Due to daylight savings in the USA and Europe, the times that results are published can vary slightly. There can also be unforeseen cases where the results are delayed.</p>
                                <p>To get quick access to lotto results, check below to see approximately when we publish the results for each lottery*, in Australian Eastern Standard Time:</p>
                                <table className='w-100 mb-5'>
                                    <tr className='tableHead'>
                                        <th></th>
                                        <th>March to October</th>
                                        <th>November to February</th>
                                    </tr>
                                    <tr>
                                        <th>USA Power Lotto</th>
                                        <th>3:00 PM</th>
                                        <th>4:00 PM</th>
                                    </tr>
                                    <tr>
                                        <th>USA Mega Lotto</th>
                                        <th>3:00 PM</th>
                                        <th>4:30 PM</th>
                                    </tr>
                                </table>
                                <table className='w-100'>
                                    <tr className='tableHead'>
                                        <th></th>
                                        <th>April to October</th>
                                        <th>November to March</th>
                                    </tr>
                                    <tr>
                                        <th>European Millions</th>
                                        <th>8:00 AM</th>
                                        <th>9:00 AM</th>
                                    </tr>
                                    <tr>
                                        <th>European Jackpot</th>
                                        <th>7:30 AM</th>
                                        <th>8:00 AM</th>
                                    </tr>
                                    <tr>
                                        <th>Italian Super Jackpot</th>
                                        <th>7:30 AM</th>
                                        <th>8:00 AM</th>
                                    </tr>
                                    <tr>
                                        <th>La Primitiva</th>
                                        <th>7:30 AM</th>
                                        <th>8:30 AM</th>
                                    </tr>
                                    <tr>
                                        <th>Irish Lotto</th>
                                        <th>9:00 AM</th>
                                        <th>11:00 AM</th>
                                    </tr>
                                    <tr>
                                        <th>UK Lotto</th>
                                        <th>7:30 AM</th>
                                        <th>8:00 AM</th>
                                    </tr>
                                </table>
                                <p>*Based on 2024 average lotto results publishing times</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-11 mx-auto my-5'>
                        <div className='d-flex flex-column flex-md-row align-items-start'>
                            <div className='col-12 col-md-2 mx-auto'>
                                <img src='https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-1.svg' className='w-42 mx-auto' alt='lottery information' />
                            </div>
                            <div className="col-12 col-md-10 mx-auto left_border p-2">
                                <h4 className="mb-4">How lotto results are decided</h4>
                                <p className='border-left-custom'>For each lotto draw, the results are determined at random. For all matching overseas lotteries at The Lottery Office, each number in the draw is added to a barrel and the winning numbers are selected by a mechanism specially designed to select random numbers.</p>
                                <p className=''>Once the winning numbers have been selected, our systems are able to determine which of our players have won prizes and which prizes they’ve won.</p>
                                <p>We can tell if the jackpot has been won and if it will rollover into the next upcoming draw.</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-11 mx-auto my-5'>
                        <div className='d-flex flex-column flex-md-row align-items-start'>
                            <div className='col-12 col-md-2 mx-auto'>
                                <img src='https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-4.svg' className='w-42 mx-auto' alt='lottery information' />
                            </div>
                            <div className="col-12 col-md-10 mx-auto left_border p-2">
                                <h4 className="mb-4">What is a prize division?</h4>
                                <p className='border-left-custom'>Prize divisions are different tiers of prizes. The amount you win depends on the division.</p>
                                <p>“Division 1” usually refers to the main jackpot prize for a lottery and is the prize that everyone wants to win. This is the most difficult prize to win and you usually need to pick all the main winning drawn numbers to win it. To win the jackpot, some lotteries also require you to correctly pick the numbers drawn separately from the main numbers. A good example is the USA Mega Lotto. To win Division 1 you must pick the 5 main winning numbers and the winning Mega Number. As you go down the divisions, you’ll find that the prizes get smaller and easier to win.</p>
                                <p>Each lottery has its own prize divisions and each one has a different prize.</p>
                                <p>Divisions vary a lot between lotteries. The Italian Super Jackpot has 6 divisions whereas the European Millions has 13!</p>
                                <p>Our Lotto Systems give players the chance to win multiple prizes from multiple divisions with just one entry. We’ve seen some great results with this game option, like the player who won division 4 a total of 25 times and division 3 once with our <Link to='/lotto-systems'>Guranteed Power Lotto System</Link> . With all the wins added up, he took home a total of $52,473.</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-11 mx-auto my-5'>
                        <div className='d-flex flex-column flex-md-row align-items-start'>
                            <div className='col-12 col-md-2 mx-auto'>
                                <img src='https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-5.svg' className='w-42 mx-auto' alt='lottery information' />
                            </div>
                            <div className="col-12 col-md-10 mx-auto left_border p-2">
                                <h4 className="mb-4">How do I check my ticket?</h4>
                                <p className='border-left-custom'>Not everyone knows how to read lotto results. Do you ever ask yourself, “should I check my ticket?”, but aren’t sure how to go about it?</p>
                                <p>It’s very simple; you just need to compare the lotto numbers on your ticket to the winning numbers from the draw. If you picked some or all of the same numbers on your ticket that were announced as the winning numbers in the draw, you could be in for some prizes. Generally speaking, the more numbers you matched, the better the prize you win.</p>
                                <p>Here’s how to check your numbers for a draw, using our USA Power Lotto as an example.</p>
                                <p>Let’s pretend that you purchased a game in the USA Power Lotto, with the numbers below:</p>
                                <img src={result1} className='w-25 mx-auto' alt='Numbers' />
                                <p>During the draw, the below winning numbers were randomly selected:</p>
                                <img src={result2} className='w-25 mx-auto' alt='Numbers' />
                                <p>As you can see, 3 of the main numbers and the Power number are the same: the main numbers 1, 27 and 62 match, as well as the Power number of 20.</p>
                                <p>This wins a Division 5 prize:</p>
                                <img src={result3} className='w-50 mx-auto' alt='Divison image' />
                                <p>Then it’s just a matter of checking the results on the USA Power lotto page to see which prize Division 5 gets you:</p>
                                <img src={result4} className='w-50 mx-auto' alt='Divison image' />
                                <p>To see all the draws you’ve ever entered and all the prizes you’ve ever won simply log in to your Lottery Office account and <Link to='/checkout'>check "My Draws"</Link>  for a full history.</p>
                                <p>Lotto results include winners from the matched overseas lottery and winners from The Lottery Office combined together</p>
                                <p>If you have any questions or need any further information, please contact our <Link to='/'>Local Customer Support Team</Link> , anytime.</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-11 mx-auto my-5'>
                        <div className='d-flex flex-column flex-md-row align-items-start'>
                            <div className='col-12 col-md-2 mx-auto'>
                                <img src='https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-6.svg' className='w-42 mx-auto' alt='lottery information' />
                            </div>
                            <div className="col-12 col-md-10 mx-auto left_border p-2">
                                <h4 className="mb-4">Do I really need to check my ticket for lotto results?</h4>
                                <p className='border-left-custom'>A lot of people love the thrill of checking lotto results for themselves. It can be exhilarating to see your numbers come up as you check each of your games against the lotto results. However, it can be a tedious process, especially if you’ve purchased a lot of entries in a draw, as you need to manually look over each set of your numbers and compare them to the winning numbers. It can take time and is not for everyone.</p>
                                <p>Because of this, we provide a service where we always email each of our players the lotto results for each draw.<br />
                                    This email is a summary of the outcome of the draw and tells you if you’ve won any prizes.</p>
                                <p>You can even opt to receive notification of any winnings direct to your phone with our SMS service. Once you’ve  <Link to='/login'>Logged in</Link>to your Lottery Office account, check your Notification Settings to make sure this option is turned on.</p>
                                <p>So next time you decide you’d like to “check my ticket”, remember that you don’t need to, if you don’t want to! If you’re a winner in any of our draws you’ll still receive your prize money either way.<br />
                                    If you win a prize of $10,000 or less, we pay it automatically to your Lottery Office account when the results are processed. If you win more than this, we’ll contact you within 2 days of the win. We’ll find out from you the most convenient way to receive payment and get it to you as soon as possible.</p>
                                <p>In either case, you don’t need to do anything to claim any of your prize money; we take care of it all. We continuously audit the payment of all prizes to ensure that all our winners receive their prize after each draw.</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-11 mx-auto my-5'>
                        <div className='d-flex flex-column flex-md-row align-items-start'>
                            <div className='col-12 col-md-2 mx-auto'>
                                <img src='	https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-7.svg' className='w-42 mx-auto' alt='lottery information' />
                            </div>
                            <div className="col-12 col-md-10 mx-auto left_border p-2">
                                <h4 className="mb-4">Lotto results on the go with The Lottery Office app</h4>
                                <p className='border-left-custom'>The latest lotto results are also easily accessed on the go via the <Link to='/app'>free Lottery Office app</Link> , available for download for Android and iOS devices. You can also log in and check the results of every draw you’ve ever participated in. It makes it easy to see in which draws you’ve won a prize and how much you won each time.</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-11 mx-auto my-5'>
                        <div className='d-flex flex-column flex-md-row align-items-start'>
                            <div className='col-12 col-md-2 mx-auto'>
                                <img src='	https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-8.svg' className='w-42 mx-auto' alt='lottery information' />
                            </div>
                            <div className="col-12 col-md-10 mx-auto left_border p-2">
                                <h4 className="mb-4">When lotto results go in your favour</h4>
                                <p className='border-left-custom'>After speaking with lots of people that have been lucky enough to win a hefty prize, we can say with confidence that winning with The Lottery Office can be life-changing!</p>
                                <p>This includes the Sydney restaurateur who was on the brink after Covid restrictions decimated his business. Not only did he win division 2 in the <Link to='/'>USA Power Lotto</Link> , but he’d also accidentally purchased the Multiplier option which doubled his prize. Not a bad “mistake” to make.</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-11 mx-auto my-5'>
                        <div className='d-flex flex-column flex-md-row align-items-start'>
                            <div className='col-12 col-md-2 mx-auto'>
                                <img src='	https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-9.svg' className='w-42 mx-auto' alt='lottery information' />
                            </div>
                            <div className="col-12 col-md-10 mx-auto left_border p-2">
                                <h4 className="mb-4">Supporting Australian Communities</h4>
                                <p className='border-left-custom'>We donate a percentage of all ticket sales to The Lottery Office Charity Fund.</p>
                                <p>If you’re involved with an Australian charity that needs funding, contact us to see if we can work with you. <Link to='/charity'>Visit our Charity Page</Link>  to find out more.</p>
                                <p>There was also the USA Mega Lotto division 2 prize winning tradie who was falling behind in his mortgage payments. The win came just in the nick of time to bail him and his wife out of trouble.</p>
                                <p>Or the Gold Coast teacher who was able to pay for his surgery, clear his mortgage and take his family on holiday after striking it rich in the USA Power Lotto.</p>
                                <p>Check out these stories of some of our other previous <Link to='/winners'>winners</Link> .</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-11 mx-auto my-5'>
                        <div className='d-flex flex-column flex-md-row align-items-start'>
                            <div className='col-12 col-md-2 mx-auto'>
                                <img src='https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-1.svg' className='w-42 mx-auto' alt='lottery information' />
                            </div>
                            <div className="col-12 col-md-10 mx-auto left_border p-2">
                                <h4 className="mb-4">Do lotto results take taxes into account?</h4>
                                <p className='border-left-custom'>The lotto results we publish online are the same as those published by the matching overseas lotteries and converted to Australian dollars. Any relevant taxes have not yet been deducted from these amounts.</p>
                                <p>4 of our lotteries are 100% tax-free:</p>
                                <li>European Millions</li>
                                <li>European Jackpot</li>
                                <li>Irish Lotto</li>
                                <li>UK Lotto</li>
                                <p className='py-2'>4 of our lotteries may be subject to overseas taxes on larger wins:</p>
                                <li>USA Mega Lotto</li>
                                <li>USA Power Lotto</li>
                                <li>La Primitiva</li>
                                <li>Italian Super Jackpot</li>
                                <p className='mt-3'>These taxes are deducted before we collect winnings from overseas draws relating to US Powerball, US Mega Millions, Spain’s La Primitiva and the SuperEnalotto.</p>
                                <p>All winnings with The Lottery Office are free from Australian or New Zealand taxes.</p>
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
            </div>
            <Footerr />
        </>
    )
}

export default Results;
