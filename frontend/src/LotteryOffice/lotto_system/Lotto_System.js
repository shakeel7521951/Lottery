import React, { useState } from 'react';
import './Lotto_System.css';
import Lotto_Systems from '../images/lotto-system.PNG';
import Header from '../Header';
import Footerr from '../Footerr';
import countryTickets from '../CountryTickets';
import { Link } from 'react-router-dom';
import game1 from '../images/game1.PNG';
import game2 from '../images/game2.PNG';
import game3 from '../images/game3.PNG';

const Lotto_System = () => {
    const [showSystemTable, setSystemTable] = useState({ usaPowerLotto: false, usaPowerLottoPrize: false, usaMegaLotto: false, usaMegaLottoPrize: false, europeanMillionLotto: false,europeanMillionLottoPrize:false, europeanJackpotLotto: false, europeanJackpotLottoPrize: false, italianSuper: false,italianSuperJacket:false,primitiva:false,laPrimitiva:false,ukLotto:false,ukLottoPrize:false,irish:false,irishPrize:false });

    const [faqs, setFaqs] = useState({ one: true, two: true, three: true, four : true});

    const handleShowingText = (value) => {
        setFaqs((prevState) => ({
            ...prevState,
            [value]: !prevState[value]
        }))
    }

    const handleShowTable = (value) => {
        setSystemTable(prevState => ({
            ...prevState,
            [value]: !prevState[value]
        }));
    };


    return (
        <div className='container-fluid'>
            <Header />
            <div className='row '>
                <img src={Lotto_Systems} className='w-100 p-0' alt='Lotto-System-Banner' />
            </div>
            <div className='row lotto-system-container'>
                <div className='col-12 col-md-10 mx-auto'>
                    <h4 className='mt-3'>Lotto Systems Available at The Lottery Office</h4>
                    {
                        countryTickets.map((value, index) => (
                            <div key={index} className='d-flex align-items-center text-center my-4 justify-content-between py-3 px-4 cursor-pointer rounded bg-light' onClick={() => document.location.href = '/play'}>
                                <div className='align-items-center d-flex'>
                                    <img src={value.image} className='w-25 h-25' alt='Logo' />
                                    <div className='text-start ms-3'>
                                        <h4>{value.countryName}</h4>
                                        <h2 className='text-danger'>${value.pirce}</h2>
                                        <p>Closes in: {value.closeTime}</p>
                                    </div>
                                </div>
                                <div >
                                    <button className='button btn btn-syndicates'>Play now</button>
                                </div>
                            </div>
                        ))}
                    <h4 >Get More Chances to Win with Our Lotto Systems</h4>
                    <p className='text-light mt-3'>Players with The Lottery Office now have the option to mix up their lottery play with Lotto Systems. Lotto Systems add a new dimension to your favourite lotteries, allowing customers to select more than the usual allowable amount of lottery numbers.</p>
                </div>
            </div>

            <div className='row'>

                <div className='col-12 col-md-11 mx-auto my-4'>
                    <div className='d-flex flex-column flex-md-row align-items-start'>
                        <div className='col-12 col-md-2 mx-auto'>
                            <img src='https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-1.svg' className='w-42 mx-auto' alt='lottery information' />
                        </div>
                        <div className="col-12 col-md-10 mx-auto left_border p-2">
                            <h4 className="mb-4">What Are Lotto Systems?</h4>
                            <p className='border-left-custom'>Lotto Systems (also known as lotto system entries) are an intriguing feature that let you choose more main lottery numbers than are allowed by the rules of our lottery games when you elect to play a standard game. With Lotto Systems, you get more chances to win than with a standard game.</p>
                            <p>This is because when you can select more pool numbers than usual, you exponentially increase your chances of winning, as a single Lotto System game is essentially the same as playing multiple standard games. It’s a fact that playing more games is the best way to give your winning chances a boost, and Lotto Systems are a quick and easy way to do exactly that.<br /><br />Lotto Systems may not be offered by the matched overseas lotteries that we buy tickets in, however The Lottery Office is able to offer them in our Government Licensed Australian lotteries. For every Lotto System you play with us, we buy the equivalent number of standard games in a matching overseas lottery draw.</p>
                        </div>
                    </div>
                </div>

                <div className='col-12 col-md-11 mx-auto my-4'>
                    <div className='d-flex flex-column flex-md-row align-items-start'>
                        <div className='col-12 col-md-2 mx-auto'>
                            <img src='https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-2.svg' className='w-42 mx-auto' alt='lottery information' />
                        </div>
                        <div className="col-12 col-md-10 mx-auto left_border p-2">
                            <h4 className="mb-4">The Advantages of Lotto System Entries</h4>
                            <p className='border-left-custom'>Statistically, the best way to increase your chances of winning a lottery prize is to buy more games; the more games, the more chances to win. If you don’t want to spend the time to buy more games, but still want a higher likelihood of winning, Lotto Systems are a great option. This is because a single Lotto System game is the equivalent of buying multiple standard games.</p>
                            <p>With Lotto Systems, one game will give you multiple opportunities to score a prize. For example, if you wanted to make it more likely that you’d win with our Irish Lotto, you could either choose to play more standard games, or instead, you could choose a single Lotto System game. An Irish Lotto System 8 game is the equivalent of 28 standard games, while a Lotto System 9 game is the same as 84 standard games. Instead of having to choose numbers for all of these standard games, a Lotto System allows you to choose the numbers for just one game to get the same statistical benefit.<br /><br />Aside from this, it’s possible to win multiple prizes across several different prize divisions with a Lotto System! Standard lottery games often result in only one prize, but with Lotto Systems, you could take home several wins just by playing a single System game.</p>
                        </div>
                    </div>
                </div>

                <div className='col-12 col-md-11 mx-auto my-4'>
                    <div className='d-flex flex-column flex-md-row align-items-start'>
                        <div className='col-12 col-md-2 mx-auto'>
                            <img src='https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-1.svg' className='w-42 mx-auto' alt='lottery information' />
                        </div>
                        <div className="col-12 col-md-10 mx-auto left_border p-2">
                            <h4 className="mb-4">How Do Lotto Systems Give More Chances to Win?</h4>
                            <p className='border-left-custom'>When you play a Lotto System at The Lottery Office, you’ll be playing more numbers than you would when playing a standard game. But exactly how does this work and how does this give you more chances to win? To illustrate how, let’s see an example using our Irish Lotto.</p>
                            <p>When you play a standard Irish Lotto game, you select 6 main numbers:</p>
                            <img src={game1} className='w-25 mx-auto' alt='Game 1' />
                            <p>But with a Lotto System, you can select 7, 8, 9, 10 or even 11 numbers. Below, we’ve shown a Lotto System 7, which allows you to select 7 numbers:</p>
                            <img src={game2} className='w-25 mx-auto mb-3' alt='Game 1' />
                            <p>This single game of 7 numbers is the equivalent to these 7 standard games:</p>
                            <img src={game3} className='w-25 mx-auto mb-2' alt='Game 1' />
                            <p>By entering this one Lotto System 7 game, you’re playing all the possible combinations of those numbers, which is the equivalent of the above 7 standard games. This means you’d have 7 chances of winning a prize instead of just 1.<br /><br />It’s important to remember that every combination of standard numbers has exactly the same chance of winning a prize; there are no number combinations that are any less or more likely to win than any others.<br /><br />Lotto Systems are also available on our free Lottery Office app for both <Link to='/app'> Android </Link>  and <Link to='/app'>iOS</Link>  devices.</p>
                        </div>
                    </div>
                </div>

                <div className='col-12 col-md-11 mx-auto my-4'>
                    <div className='d-flex flex-column flex-md-row align-items-start'>
                        <div className='col-12 col-md-2 mx-auto'>
                            <img src='	https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-4.svg' className='w-42 mx-auto' alt='lottery information' />
                        </div>
                        <div className="col-12 col-md-10 mx-auto left_border p-2">
                            <h4 className="mb-4">Guaranteed Numbers</h4>
                            <p className='border-left-custom'>We also offer the option to guarantee the secondary pool number for our USA Power Lotto (Guaranteed Power Number) and USA Mega Lotto (Guaranteed Mega Number). For our European Millions (Guaranteed Star Numbers) and European Jackpot (Guaranteed Euro Numbers) you have the option to guarantee one or both of the secondary pool numbers.</p>
                            <p> When you choose to guarantee secondary numbers your chances of winning a prize are increased dramatically. Let’s see an example, using the Guaranteed Power Number option in the USA Power Lotto, where the Guaranteed Power Number gets you the equivalent of 26 standard games in the draw.<br /><br />Normally when you play the USA Power Lotto, you select 5 numbers and a Power Number:</p>
                            <img src='	https://www.lotteryoffice.com.au/Assets/images/lotto-systems/guaranteed_1.png' className='w-25 mx-auto' alt='Game 1' />
                            <p>But with a Lotto System, you can select 7, 8, 9, 10 or even 11 numbers. Below, we’ve shown a Lotto System 7, which allows you to select 7 numbers:</p>
                            <img src='https://www.lotteryoffice.com.au/Assets/images/lotto-systems/guaranteed_2.png' className='w-25 mx-auto' alt='Game 1' />
                            <p>This single System game is the equivalent to these 26 standard games:</p>
                            <img src='https://www.lotteryoffice.com.au/Assets/images/lotto-systems/guaranteed_3.png' className='w-50 mx-auto mb-4' alt='Game 1' />
                            <p>This means you now have 26 chances of winning a prize, as opposed to just one, as is the case with a standard game.</p>
                        </div>
                    </div>
                </div>

                <div className='col-12 col-md-11 mx-auto my-4'>
                    <div className='d-flex flex-column flex-md-row align-items-start'>
                        <div className='col-12 col-md-2 mx-auto'>
                            <img src='	https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-5.svg' className='w-42 mx-auto' alt='lottery information' />
                        </div>
                        <div className="col-12 col-md-10 mx-auto left_border p-2">
                            <h4 className="mb-4">Pick 1 Less Number for More Chances</h4>
                            <p className='border-left-custom'>Perhaps you like the idea of picking fewer numbers, not more, in order to boost your winning chances. With our ‘Pick 1 Less’ option, you pick one less main number than usual. We then ensure that every possible number is selected for this missing number. This means you need to select fewer winning numbers to get a prize. ‘Pick 1 Less’ games are the equivalent to buying multiple standard games. For example, in our Irish Lotto, normally you’d select 6 numbers:</p>
                            <img src='	https://www.lotteryoffice.com.au/Assets/images/lotto-systems/guaranteed_4.png' className='w-64 mb-3 mx-auto' alt='Game' />
                            <p>However, for an Irish Lotto Pick 1 Less game, you only need to select 5 numbers:</p>
                            <img src='	https://www.lotteryoffice.com.au/Assets/images/lotto-systems/guaranteed_5.png' className='w-64 mx-auto mb-3' alt='Game 1' />
                            <p>We then fill the unselected number with every possible number and pair them with your selected numbers. As you can see, this is the equivalent of 42 standard games, giving you 42 chances in the draw.</p>
                            <img src='	https://www.lotteryoffice.com.au/Assets/images/lotto-systems/guaranteed_6.png' className='w-100 mx-auto' />
                        </div>
                    </div>
                </div>

                <div className='col-12 col-md-11 mx-auto my-4'>
                    <div className='d-flex flex-column flex-md-row align-items-start'>
                        <div className='col-12 col-md-2 mx-auto'>
                            <img src='https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-2.svg' className='w-42 mx-auto' alt='lottery information' />
                        </div>
                        <div className="col-12 col-md-10 mx-auto left_border p-2">
                            <h4 className="mb-4">Combining System Options</h4>
                            <p className='border-left-custom'>We provide you with the flexibility to combine Lotto Systems with Guaranteed Numbers, giving you the equivalent of even more standard games. This niche option takes the guess work out of choosing your secondary pool numbers, while letting you choose more main numbers than normal at the same time. Both of these features give you more chances to win, and when combined they provide a powerful way to easily get the equivalent of more standard games and therefore a higher likelihood of winning.</p>
                        </div>
                    </div>
                </div>

                <div className='col-12 col-md-11 mx-auto my-4'>
                    <div className='d-flex flex-column flex-md-row align-items-start'>
                        <div className='col-12 col-md-2 mx-auto'>
                            <img src='https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-7.svg' className='w-42 mx-auto' alt='lottery information' />
                        </div>
                        <div className="col-12 col-md-10 mx-auto left_border p-2">
                            <h4 className="mb-4">How Can I Play A Lotto System Ticket?</h4>
                            <p className='border-left-custom'>All you need to do to play a Lotto System game at The Lottery Office is:</p>
                            <li>Select the lottery you wish to play</li>
                            <li>Go to ‘Choose Numbers’</li>
                            <li>Select the ‘Lotto System’ option</li>
                            <li>Select which Lotto System you wish to play</li>
                            <li>Pick your game numbers, or click the purple lightning bolt and we’ll generate them at random</li>
                            <li>Click Confirm, then Add to cart</li>
                            <li>Add any other games for any other lotteries you wish</li>
                            <li>Purchase your games</li>
                            <p>Once you’ve completed your purchase we’ll purchase matching tickets in overseas lottery draws. If there are any winnings on the overseas tickets, we will collect them ourselves, and then we’ll pay you the same amount that we collected. Unlike some other lottery providers, with The Lottery Office you’re not required to collect any winnings yourself overseas.<br /><br />Play with The Lottery Office to see if you can find some Lotto Systems that work for you!</p>
                        </div>
                    </div>
                </div>

                <div className='col-12 col-md-11 mx-auto my-4'>
                    <div className='d-flex flex-column flex-md-row align-items-start'>
                        <div className='col-12 col-md-2 mx-auto'>
                            <img src='https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-8.svg' className='w-42 mx-auto' alt='lottery information' />
                        </div>
                        <div className="col-12 col-md-10 mx-auto left_border p-2">
                            <h4 className="mb-4">How Much Do Lotto Systems Cost?</h4>
                            <p className='border-left-custom'>The pricing for each Lotto System is determined by how many standard games it is the equivalent of. For example, the Guaranteed Power Number in our USA Power Lotto is the equivalent of 26 standard games, therefore it costs the same as 26 standard games.</p>
                        </div>
                    </div>
                </div>

                <div className='col-12 col-md-11 mx-auto my-4'>
                    <div className='d-flex flex-column flex-md-row align-items-start'>
                        <div className='col-12 col-md-2 mx-auto'>
                            <img src='https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-1.svg' className='w-42 mx-auto' alt='lottery information' />
                        </div>
                        <div className="col-12 col-md-10 mx-auto left_border p-2">
                            <h4 className="mb-4">Lotto Systems Prize Tables and Equivalent Standard Games</h4>
                            <p className='border-left-custom'>Lotto Systems can help you win multiple prizes across multiple divisions. To see how many prizes in each division a Lotto System could help you win, check out our Lotto Systems Prize tables for each of our lotteries. You can also check out how many standard games each Lotto System is equivalent to.</p>
                            <p>We use an algorithm to generate these system games and have provided our Government Regulator with an established mathematical formulae that proves the equivalent number of standard games listed for each of the systems in the tables below is an accurate statement. We have also provided the Regulator with a copy of the algorithm code so that they can verify that it does correctly generate the required number of games for each system.</p>
                        </div>
                    </div>
                </div>

                <div className='col-12 col-md-11 mx-auto my-4'>
                    <div className='d-flex flex-column flex-md-row align-items-start'>
                        <div className='col-12 col-md-2 mx-auto'>
                            <img src='https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-2.svg' className='w-42 mx-auto' alt='lottery information' />
                        </div>
                        <div className="col-12 col-md-10 mx-auto left_border p-2">
                            <h4 className="mb-4">USA Power Lotto Systems</h4>
                            <p className='border-left-custom'>One of our most popular lotteries, USA Power Lotto is matched to the mighty US Powerball, which holds the world record for the highest lottery jackpot of all time at over AUD$2 billion, shared between three winners. We offer a great range of Lotto System options for this ground-breaking lottery to help maximise your chances of winning.</p>
                            <p>Check out the story of the Western Australian miner who <Link to='/read-more'>won over $45,000</Link>  in the USA Power Lotto just 10 days after he joined The Lottery Office. You can also combine the USA Power Lotto Multiplier option with Lotto Systems. These increase the value of non-jackpot prizes by up to 10 times. As Lotto Systems give you a chance of winning multiple prizes, this could be a great way to exponentially boost your winnings.</p>
                            <Link onClick={() => handleShowTable('usaPowerLotto')}>See USA Power Lotto Systems Equivalent Standard Games</Link><br /><br />
                            {showSystemTable.usaPowerLotto &&
                                <table className='my-3 systemTable'>
                                    <tr>
                                        <th className='head1'>USA Power Lotto</th>
                                        <th className='head2'>Equivalent Standard Games</th>
                                    </tr>
                                    <tr>
                                        <th>Pick 1 Less</th>
                                        <th>65</th>
                                    </tr>
                                    <tr>
                                        <th>Lotto System 6</th>
                                        <th>6</th>
                                    </tr>
                                    <tr>
                                        <th>Lotto System 7</th>
                                        <th>21</th>
                                    </tr>
                                    <tr>
                                        <th>Lotto System 8</th>
                                        <th>56</th>
                                    </tr>
                                    <tr>
                                        <th>Lotto System 9</th>
                                        <th>126</th>
                                    </tr>
                                    <tr>
                                        <th>Lotto System 10</th>
                                        <th>252</th>
                                    </tr>
                                    <tr>
                                        <th>Guaranteed Power Number</th>
                                        <th>26</th>
                                    </tr>
                                    <tr>
                                        <th>Lotto System 6 + Guaranteed Power Number</th>
                                        <th>156</th>
                                    </tr>
                                </table>
                            }
                            <Link onClick={() => { handleShowTable('usaPowerLottoPrize') }}>See USA Power Lotto Systems Prize Tables</Link>
                            {
                                showSystemTable.usaPowerLottoPrize && (
                                    <table className='my-3 systemTable'>
                                        <tr>
                                            <th colSpan={4} className='head1 text-center'>Winning Combinations (5 numbers + Power Number)*</th>
                                        </tr>
                                        <tr className='head2'>
                                            <th>Prize Divisions</th>
                                            <th>Lotto System 8</th>
                                            <th>Lotto System 9</th>
                                            <th>Lotto System 10</th>
                                        </tr>
                                        <tr>
                                            <th>1</th>
                                            <th>1</th>
                                            <th>1</th>
                                            <th>1</th>
                                        </tr>
                                        <tr>
                                            <th>2</th>
                                            <th>0</th>
                                            <th>0</th>
                                            <th>0</th>
                                        </tr>
                                        <tr>
                                            <th>3</th>
                                            <th>15</th>
                                            <th>20</th>
                                            <th>25</th>
                                        </tr>
                                        <tr>
                                            <th>5</th>
                                            <th>30</th>
                                            <th>60</th>
                                            <th>100</th>
                                        </tr>
                                        <tr>
                                            <th>7</th>
                                            <th>10</th>
                                            <th>40</th>
                                            <th>100</th>
                                        </tr>
                                        <tr>
                                            <th>8</th>
                                            <th>0</th>
                                            <th>5</th>
                                            <th>25</th>
                                        </tr>
                                        <tr>
                                            <th>9</th>
                                            <th>0</th>
                                            <th>0</th>
                                            <th>1</th>
                                        </tr>
                                        <p className='fst-italic'>* Abbreviated table only</p>
                                    </table>
                                )}
                            <div className='usaLottoSystem rounded py-2 px-5 justify-content-between align-items-center my-4  d-flex'>
                                <img src='	https://www.lotteryoffice.com.au/assets/images/lottery-logos/us-powerball.png' className='w-16' alt='USA power lotto system' />
                                <h4 className='text-light'>Play USA Power Lotto®</h4>
                                <button className='button btn system-btn' onClick={()=>document.location.href='/play'}>Play now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-12 col-md-11 mx-auto my-4'>
                    <div className='d-flex flex-column flex-md-row align-items-start'>
                        <div className='col-12 col-md-2 mx-auto'>
                            <img src='https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-1.svg' className='w-42 mx-auto' alt='lottery information' />
                        </div>
                        <div className="col-12 col-md-10 mx-auto left_border p-2">
                            <h4 className="mb-4">USA Mega Lotto Systems</h4>
                            <p className='border-left-custom'>Not to be outdone by the USA Power Lotto, our USA Mega Lotto is matched to the US Mega Millions which has the world record for the largest ever winning single lottery ticket in history, with just one person taking home the prize of over AUD$2 billion. Playing a Lotto System is a great way to help you win a prize in this immense lottery. Why not also select the USA Mega Lotto Multiplier with your Lotto System entry, to see your non-jackpot prizes climb up to 5 times higher!</p>
                            <Link onClick={()=>handleShowTable('usaMegaLotto')}>See USA Mega Lotto Systems Equivalent Standard Games</Link><br/><br/>
                            {
                                showSystemTable.usaMegaLotto && (
                                    <table className='my-3 systemTable'>
                                    <tr>
                                        <th className='head1'>USA Mega Lotto</th>
                                        <th className='head2'>Equivalent Standard Games</th>
                                    </tr>
                                    <tr>
                                        <th>Pick 1 Less</th>
                                        <th>66</th>
                                    </tr>
                                    <tr>
                                        <th>Lotto System 6</th>
                                        <th>6</th>
                                    </tr>
                                    <tr>
                                        <th>Lotto System 7</th>
                                        <th>21</th>
                                    </tr>
                                    <tr>
                                        <th>Lotto System 8</th>
                                        <th>56</th>
                                    </tr>
                                    <tr>
                                        <th>Lotto System 9</th>
                                        <th>126</th>
                                    </tr>
                                    <tr>
                                        <th>Lotto System 10</th>
                                        <th>252</th>
                                    </tr>
                                    <tr>
                                        <th>Guaranteed Mega Number</th>
                                        <th>25</th>
                                    </tr>
                                    <tr>
                                        <th>Lotto System 6 + Guaranteed Mega Number</th>
                                        <th>150</th>
                                    </tr>
                                </table>
                                )
                            }
                               <Link onClick={() => { handleShowTable('usaMegaLottoPrize') }}>See USA Mega Lotto Systems Prize Tables</Link>
                            {
                                showSystemTable.usaMegaLottoPrize && (
                                    <table className='my-3 systemTable'>
                                        <tr>
                                            <th colSpan={4} className='head1 text-center'>Winning Combinations (5 numbers + Mega Number)*</th>
                                        </tr>
                                        <tr className='head2'>
                                            <th>Prize Divisions</th>
                                            <th>Lotto System 8</th>
                                            <th>Lotto System 9</th>
                                            <th>Lotto System 10</th>
                                        </tr>
                                        <tr>
                                            <th>1</th>
                                            <th>1</th>
                                            <th>1</th>
                                            <th>1</th>
                                        </tr>
                                        <tr>
                                            <th>3</th>
                                            <th>15</th>
                                            <th>20</th>
                                            <th>25</th>
                                        </tr>
                                        <tr>
                                            <th>5</th>
                                            <th>30</th>
                                            <th>60</th>
                                            <th>100</th>
                                        </tr>
                                        <tr>
                                            <th>7</th>
                                            <th>10</th>
                                            <th>40</th>
                                            <th>100</th>
                                        </tr>
                                        <tr>
                                            <th>8</th>
                                            <th>0</th>
                                            <th>5</th>
                                            <th>25</th>
                                        </tr>
                                        <tr>
                                            <th>9</th>
                                            <th>0</th>
                                            <th>0</th>
                                            <th>1</th>
                                        </tr>
                                        <p className='fst-italic'>* Abbreviated table only</p>
                                    </table>
                                )}
                             <div className='usaLottoSystem usaMegaLottoSystem rounded py-2 px-5 justify-content-between align-items-center my-4  d-flex'>
                                <img src='	https://www.lotteryoffice.com.au/assets/images/lottery-logos/us-powerball.png' className='w-16' alt='USA power lotto system' />
                                <h4 className='text-light'>Play USA Mega Lotto ®</h4>
                                <button className='button btn system-btn' onClick={()=>document.location.href='/play'}>Play now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-12 col-md-11 mx-auto my-4'>
                    <div className='d-flex flex-column flex-md-row align-items-start'>
                        <div className='col-12 col-md-2 mx-auto'>
                            <img src='https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-4.svg' className='w-42 mx-auto' alt='lottery information' />
                        </div>
                        <div className="col-12 col-md-10 mx-auto left_border p-2">
                            <h4 className="mb-4">European Millions Lotto Systems</h4>
                            <p className='border-left-custom'>Our European Millions is a real crowd-pleaser, with its Superdraws and tax-free jackpots from the matched EuroMillions which are amongst the biggest ever seen in Europe. A Lotto System with the European Millions could see you win from its 13 prize divisions, even if you don’t manage to crack the jackpot, which starts at a very impressive AUD$25 million, and has previously reached AUD$315 million.</p>
                            <Link onClick={()=>handleShowTable('europeanMillionLotto')}>See European Millions Lotto Systems Equivalent Standard Games</Link><br/><br/>
                            {
                                showSystemTable.europeanMillionLotto && (
                                    <table className='my-3 systemTable'>
                                    <tr>
                                        <th className='head1'>European Millions</th>
                                        <th className='head2'>Equivalent Standard Games</th>
                                    </tr>
                                    <tr>
                                        <th>Pick 1 Less</th>
                                        <th>46</th>
                                    </tr>
                                    <tr>
                                        <th>Lotto System 6</th>
                                        <th>6</th>
                                    </tr>
                                    <tr>
                                        <th>Lotto System 7</th>
                                        <th>21</th>
                                    </tr>
                                    <tr>
                                        <th>Lotto System 8</th>
                                        <th>56</th>
                                    </tr>
                                    <tr>
                                        <th>Lotto System 9</th>
                                        <th>126</th>
                                    </tr>
                                    <tr>
                                        <th>Lotto System 10</th>
                                        <th>252</th>
                                    </tr>
                                    <tr>
                                        <th>Guaranteed 1 Lucky Star</th>
                                        <th>11</th>
                                    </tr>
                                    <tr>
                                        <th>Guaranteed 2 Lucky Stars</th>
                                        <th>66</th>
                                    </tr>
                                    <tr>
                                        <th>Lotto System 6 + Guaranteed Mega Number</th>
                                        <th>150</th>
                                    </tr>
                                </table>
                                )
                            }
                               <Link onClick={() => { handleShowTable('europeanMillionLottoPrize') }}>See European Millions Lotto Systems Prize Tables</Link>
                            {
                                showSystemTable.europeanMillionLottoPrize && (
                                    <table className='my-3 systemTable'>
                                        <tr>
                                            <th colSpan={4} className='head1 text-center'>
                                            Winning Combinations (5 numbers + 2 Lucky Stars)*</th>
                                        </tr>
                                        <tr className='head2'>
                                            <th>Prize Divisions</th>
                                            <th>Lotto System 8</th>
                                            <th>Lotto System 9</th>
                                            <th>Lotto System 10</th>
                                        </tr>
                                        <tr>
                                            <th>1</th>
                                            <th>1</th>
                                            <th>1</th>
                                            <th>1</th>
                                        </tr>
                                        <tr>
                                            <th>4</th>
                                            <th>15</th>
                                            <th>20</th>
                                            <th>25</th>
                                        </tr>
                                        <tr>
                                            <th>6</th>
                                            <th>30</th>
                                            <th>60</th>
                                            <th>100</th>
                                        </tr>
                                        <tr>
                                            <th>8</th>
                                            <th>10</th>
                                            <th>40</th>
                                            <th>100</th>
                                        </tr>
                                        <tr>
                                            <th>11</th>
                                            <th>0</th>
                                            <th>5</th>
                                            <th>25</th>
                                        </tr>
                                        <p className='fst-italic'>* Abbreviated table only</p>
                                    </table>
                                )}
                             <div className='usaLottoSystem europeanMillions rounded py-2 px-5 justify-content-between align-items-center my-4  d-flex'>
                                <img src='https://www.lotteryoffice.com.au/assets/images/lottery-logos/euromillions.png' className='w-16' alt='USA power lotto system' />
                                <h4 className='text-light'>Play European Millions Lotto ®</h4>
                                <button className='button btn system-btn' onClick={()=>document.location.href='/play'}>Play now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-12 col-md-11 mx-auto my-4'>
                    <div className='d-flex flex-column flex-md-row align-items-start'>
                        <div className='col-12 col-md-2 mx-auto'>
                            <img src='https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-5.svg' className='w-42 mx-auto' alt='lottery information' />
                        </div>
                        <div className="col-12 col-md-10 mx-auto left_border p-2">
                            <h4 className="mb-4">European Jackpot Lotto Systems</h4>
                            <p className='border-left-custom'>Playing Lotto Systems in the European Jackpot will help you take advantage of a lottery with 12 prize divisions, favourable odds compared to most other international lotteries and prizes of up to AUD$175 million. Matched with Europe’s famous Eurojackpot lottery, our European Jackpot is a well-rounded lottery with something for everyone.</p>
                            <Link onClick={()=>handleShowTable('europeanJackpotLotto')}>See European Jackpot Lotto Systems Equivalent Standard Games</Link><br/><br/>
                            {
                                showSystemTable.europeanJackpotLotto && (
                                    <table className='my-3 systemTable'>
                                    <tr>
                                        <th className='head1'>European Jackpot</th>
                                        <th className='head2'>Equivalent Standard Games</th>
                                    </tr>
                                    <tr>
                                        <th>Pick 1 Less</th>
                                        <th>46</th>
                                    </tr>
                                    <tr>
                                        <th>Lotto System 6</th>
                                        <th>6</th>
                                    </tr>
                                    <tr>
                                        <th>Lotto System 7</th>
                                        <th>21</th>
                                    </tr>
                                    <tr>
                                        <th>Lotto System 8</th>
                                        <th>56</th>
                                    </tr>
                                    <tr>
                                        <th>Lotto System 9</th>
                                        <th>126</th>
                                    </tr>
                                    <tr>
                                        <th>Lotto System 10</th>
                                        <th>252</th>
                                    </tr>
                                    <tr>
                                        <th>Guaranteed 1 Euro</th>
                                        <th>11</th>
                                    </tr>
                                    <tr>
                                        <th>Guaranteed 2 Euros</th>
                                        <th>66</th>
                                    </tr>
                                    <tr>
                                        <th>System 6 + Guaranteed 1 Euro</th>
                                        <th>66</th>
                                    </tr>
                                </table>
                                )
                            }
                               <Link onClick={() => { handleShowTable('europeanJackpotLottoPrize') }}>See European Jackpot Lotto Systems Prize Tables</Link>
                            {
                                showSystemTable.europeanJackpotLottoPrize && (
                                    <table className='my-3 systemTable'>
                                        <tr>
                                            <th colSpan={4} className='head1 text-center'>
                                            Winning Combinations (5 numbers + 2 Euros)*</th>
                                        </tr>
                                        <tr className='head2'>
                                            <th>Prize Divisions</th>
                                            <th>Lotto System 8</th>
                                            <th>Lotto System 9</th>
                                            <th>Lotto System 10</th>
                                        </tr>
                                        <tr>
                                            <th>1</th>
                                            <th>1</th>
                                            <th>1</th>
                                            <th>1</th>
                                        </tr>
                                        <tr>
                                            <th>4</th>
                                            <th>15</th>
                                            <th>20</th>
                                            <th>25</th>
                                        </tr>
                                        <tr>
                                            <th>7</th>
                                            <th>30</th>
                                            <th>60</th>
                                            <th>100</th>
                                        </tr>
                                        <tr>
                                            <th>8</th>
                                            <th>10</th>
                                            <th>40</th>
                                            <th>100</th>
                                        </tr>
                                        <tr>
                                            <th>11</th>
                                            <th>0</th>
                                            <th>5</th>
                                            <th>25</th>
                                        </tr>
                                        <p className='fst-italic'>* Abbreviated table only</p>
                                    </table>
                                )}
                             <div className='usaLottoSystem europeanJackpot rounded py-2 px-5 justify-content-between align-items-center my-4  d-flex'>
                                <img src='	https://www.lotteryoffice.com.au/assets/images/lottery-logos/eurojackpot.png' className='w-16' alt='USA power lotto system' />
                                <h4 className='text-light'>Play European Jackpot Lotto TM</h4>
                                <button className='button btn system-btn' onClick={()=>document.location.href='/play'}>Play now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-12 col-md-11 mx-auto my-4'>
                    <div className='d-flex flex-column flex-md-row align-items-start'>
                        <div className='col-12 col-md-2 mx-auto'>
                            <img src='https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-5.svg' className='w-42 mx-auto' alt='lottery information' />
                        </div>
                        <div className="col-12 col-md-10 mx-auto left_border p-2">
                            <h4 className="mb-4">Italian Super Jackpot Lotto Systems</h4>
                            <p className='border-left-custom'>The Italian Super Jackpot is matched to Italy’s giant SuperEnalotto which hold Europe’s highest ever lottery prize to date at AUD$575 million. One of our most affordable lotteries, a System game in the Italian Super Jackpot is a great way to be in with multiple chances to win. Entry in this lottery will also get you a free shot at an Instant Win prize, and the more standard games your Lotto System ticket is equivalent to, the more Instant Win chances you get.</p>
                            <Link onClick={()=>handleShowTable('italianSuper')}>See Italian Super Lotto Systems Equivalent Standard Games</Link><br/><br/>
                            {
                                showSystemTable.italianSuper && (
                                    <table className='my-3 systemTable'>
                                    <tr>
                                        <th className='head1'>Italian Super Jackpot</th>
                                        <th className='head2'>Equivalent Standard Games</th>
                                    </tr>
                                    <tr>
                                        <th>Pick 1 Less</th>
                                        <th>85</th>
                                    </tr>
                                    <tr>
                                        <th>Lotto System 7</th>
                                        <th>7</th>
                                    </tr>
                                    <tr>
                                        <th>Lotto System 8</th>
                                        <th>28</th>
                                    </tr>
                                    <tr>
                                        <th>Lotto System 9</th>
                                        <th>84</th>
                                    </tr>
                                    <tr>
                                        <th>Lotto System 10</th>
                                        <th>210</th>
                                    </tr>
                                    <tr>
                                        <th>Lotto System 11</th>
                                        <th>462</th>
                                    </tr>
                                </table>
                                )
                            }
                               <Link onClick={() => { handleShowTable('italianSuperJacket') }}>See Italian Super Jackpot Lotto Systems Prize Tables</Link>
                            {
                                showSystemTable.italianSuperJacket && (
                                    <table className='my-3 systemTable'>
                                        <tr>
                                            <th colSpan={4} className='head1 text-center'>
                                            Winning Combinations (6 numbers)*</th>
                                        </tr>
                                        <tr className='head2'>
                                            <th>Prize Divisions</th>
                                            <th>Lotto System 8</th>
                                            <th>Lotto System 9</th>
                                            <th>Lotto System 10</th>
                                        </tr>
                                        <tr>
                                            <th>1</th>
                                            <th>1</th>
                                            <th>1</th>
                                            <th>1</th>
                                        </tr>
                                        <tr>
                                            <th>3</th>
                                            <th>18</th>
                                            <th>24</th>
                                            <th>30</th>
                                        </tr>
                                        <tr>
                                            <th>4</th>
                                            <th>45</th>
                                            <th>90</th>
                                            <th>150</th>
                                        </tr>
                                        <tr>
                                            <th>5</th>
                                            <th>20</th>
                                            <th>80</th>
                                            <th>200</th>
                                        </tr>
                                        <tr>
                                            <th>6</th>
                                            <th>0</th>
                                            <th>15</th>
                                            <th>75</th>
                                        </tr>
                                        <p className='fst-italic'>* Abbreviated table only</p>
                                    </table>
                                )}
                             <div className='usaLottoSystem italianSuper rounded py-2 px-5 justify-content-between align-items-center my-4  d-flex'>
                                <img src='https://www.lotteryoffice.com.au/assets/images/lottery-logos/superenalotto.png' className='w-16' alt='USA power lotto system' />
                                <h4 className='text-light'>Play Italian Super Jackpot ®</h4>
                                <button className='button btn system-btn' onClick={()=>document.location.href='/play'}>Play now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-12 col-md-11 mx-auto my-4'>
                    <div className='d-flex flex-column flex-md-row align-items-start'>
                        <div className='col-12 col-md-2 mx-auto'>
                            <img src='https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-6.svg' className='w-42 mx-auto' alt='lottery information' />
                        </div>
                        <div className="col-12 col-md-10 mx-auto left_border p-2">
                            <h4 className="mb-4">La Primitiva Lotto Systems</h4>
                            <p className='border-left-custom'>Our La Primitiva lottery is matched to one of the world’s oldest active lotteries, the Spanish La Primitiva. With a unique and slightly strange number system (you can win a prize by matching only one number), this is a very affordable game and a great candidate for a Lotto System game. It also offers a bonus game called ‘The Joker’ which has 7 of its own prize divisions.</p>
                            <Link onClick={()=>handleShowTable('primitiva')}>See La Primitiva Lotto Systems Equivalent Standard Games</Link><br/><br/>
                            {
                                showSystemTable.primitiva && (
                                    <table className='my-3 systemTable'>
                                    <tr>
                                        <th className='head1'>La Primitiva</th>
                                        <th className='head2'>Equivalent Standard Games</th>
                                    </tr>
                                    <tr>
                                        <th>Pick 1 Less</th>
                                        <th>44</th>
                                    </tr>
                                    <tr>
                                        <th>Lotto System 7</th>
                                        <th>7</th>
                                    </tr>
                                    <tr>
                                        <th>Lotto System 8</th>
                                        <th>28</th>
                                    </tr>
                                    <tr>
                                        <th>Lotto System 9</th>
                                        <th>84</th>
                                    </tr>
                                    <tr>
                                        <th>Lotto System 10</th>
                                        <th>210</th>
                                    </tr>
                                    <tr>
                                        <th>Lotto System 11</th>
                                        <th>462</th>
                                    </tr>
                                </table>
                                )
                            }
                               <Link onClick={() => { handleShowTable('laPrimitiva') }}>See La Primitiva Lotto Systems Prize Tables</Link>
                            {
                                showSystemTable.laPrimitiva && (
                                    <table className='my-3 systemTable'>
                                        <tr>
                                            <th colSpan={4} className='head1 text-center'>
                                            Winning Combinations (6 numbers + Reintegro and 6 numbers + Complementary Number)*</th>
                                        </tr>
                                        <tr className='head2'>
                                            <th>Prize Divisions</th>
                                            <th>Lotto System 8</th>
                                            <th>Lotto System 9</th>
                                            <th>Lotto System 10</th>
                                        </tr>
                                        <tr>
                                            <th>Special</th>
                                            <th>1</th>
                                            <th>1</th>
                                            <th>1</th>
                                        </tr>
                                        <tr>
                                            <th>1</th>
                                            <th>1</th>
                                            <th>1</th>
                                            <th>1</th>
                                        </tr>
                                        <tr>
                                            <th>2</th>
                                            <th>6</th>
                                            <th>6</th>
                                            <th>6</th>
                                        </tr>
                                        <tr>
                                            <th>3</th>
                                            <th>12</th>
                                            <th>18</th>
                                            <th>24</th>
                                        </tr>
                                        <tr>
                                            <th>4</th>
                                            <th>45</th>
                                            <th>90</th>
                                            <th>150</th>
                                        </tr>
                                        <tr>
                                            <th>5</th>
                                            <th>20</th>
                                            <th>80</th>
                                            <th>200</th>
                                        </tr>
                                        <p className='fst-italic'>* Abbreviated table only</p>
                                    </table>
                                )}
                             <div className='usaLottoSystem laPrimitiva rounded py-2 px-5 justify-content-between align-items-center my-4  d-flex'>
                                <img src='https://www.lotteryoffice.com.au/assets/images/lottery-logos/la-primitiva.png' className='w-16' alt='USA power lotto system' />
                                <h4 className='text-light'>Play La Primitiva ®</h4>
                                <button className='button btn system-btn' onClick={()=>document.location.href='/play'}>Play now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-12 col-md-11 mx-auto my-4'>
                    <div className='d-flex flex-column flex-md-row align-items-start'>
                        <div className='col-12 col-md-2 mx-auto'>
                            <img src='	https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-7.svg' className='w-42 mx-auto' alt='lottery information' />
                        </div>
                        <div className="col-12 col-md-10 mx-auto left_border p-2">
                            <h4 className="mb-4">UK Lotto Systems</h4>
                            <p className='border-left-custom'>Matched with the UK National Lottery’s ‘Lotto’, our UK Lotto gives players the chance to share the jackpot amongst lower division winners. Every time the jackpot isn’t won for 5 consecutive draws a ‘Must be Won’ draw takes place. Here, when the jackpot isn’t won it rolls down and is shared amongst the lower divisions, giving them all a significant prize money boost. Must be Won draws are a great time to play a UK Lotto System, as even if you don’t win the jackpot, the minor prices have been beefed up.</p>
                            <Link onClick={()=>handleShowTable('ukLotto')}>See UK Lotto Systems Equivalent Standard Games</Link><br/><br/>
                            {
                                showSystemTable.ukLotto && (
                                    <table className='my-3 systemTable'>
                                    <tr>
                                        <th className='head1'>UK Lotto</th>
                                        <th className='head2'>Equivalent Standard Games</th>
                                    </tr>
                                    <tr>
                                        <th>Pick 1 Less</th>
                                        <th>54</th>
                                    </tr>
                                    <tr>
                                        <th>Lotto System 7</th>
                                        <th>7</th>
                                    </tr>
                                    <tr>
                                        <th>Lotto System 8</th>
                                        <th>28</th>
                                    </tr>
                                    <tr>
                                        <th>Lotto System 9</th>
                                        <th>84</th>
                                    </tr>
                                    <tr>
                                        <th>Lotto System 10</th>
                                        <th>210</th>
                                    </tr>
                                </table>
                                )
                            }
                               <Link onClick={() => { handleShowTable('ukLottoPrize') }}>See UK Lotto Systems Prize Tables</Link>
                            {
                                showSystemTable.ukLottoPrize && (
                                    <table className='my-3 systemTable'>
                                        <tr>
                                            <th colSpan={4} className='head1 text-center'>
                                            Winning Combinations (6 numbers)*</th>
                                        </tr>
                                        <tr className='head2'>
                                            <th>Prize Divisions</th>
                                            <th>Lotto System 8</th>
                                            <th>Lotto System 9</th>
                                            <th>Lotto System 10</th>
                                        </tr>
                                        <tr>
                                            <th>Special</th>
                                            <th>1</th>
                                            <th>1</th>
                                            <th>1</th>
                                        </tr>
                                        <tr>
                                            <th>3</th>
                                            <th>12</th>
                                            <th>18</th>
                                            <th>24</th>
                                        </tr>
                                        <tr>
                                            <th>4</th>
                                            <th>15</th>
                                            <th>45</th>
                                            <th>90</th>
                                        </tr>
                                        <tr>
                                            <th>5</th>
                                            <th>0</th>
                                            <th>20</th>
                                            <th>80</th>
                                        </tr>
                                        <tr>
                                            <th>6</th>
                                            <th>0</th>
                                            <th>0</th>
                                            <th>15</th>
                                        </tr>
                                        <p className='fst-italic'>* Abbreviated table only</p>
                                    </table>
                                )}
                             <div className='usaLottoSystem ukLotto rounded py-2 px-5 justify-content-between align-items-center my-4  d-flex'>
                                <img src='	https://www.lotteryoffice.com.au/assets/images/lottery-logos/uk-lotto.png' className='w-16' alt='USA power lotto system' />
                                <h4 className='text-light'>Play UK Lotto</h4>
                                <button className='button btn system-btn' onClick={()=>document.location.href='/play'}>Play now</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='col-12 col-md-11 mx-auto my-4'>
                    <div className='d-flex flex-column flex-md-row align-items-start'>
                        <div className='col-12 col-md-2 mx-auto'>
                            <img src='https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-1.svg' className='w-42 mx-auto' alt='lottery information' />
                        </div>
                        <div className="col-12 col-md-10 mx-auto left_border p-2">
                            <h4 className="mb-4">Irish Lotto Systems</h4>
                            <p className='border-left-custom'>Our Irish Lotto (matched to Ireland National Lottery’s ‘Lotto’) has the highest chances of winning the main prize of all our lotteries. With a Lotto System, you give yourself a shot to take it home for yourself.</p>
                            <Link onClick={()=>handleShowTable('irish')}>See Irish Lotto Systems Equivalent Standard Games</Link><br/><br/>
                            {
                                showSystemTable.irish && (
                                    <table className='my-3 systemTable'>
                                    <tr>
                                        <th className='head1'>Irish Lotto</th>
                                        <th className='head2'>Equivalent Standard Games</th>
                                    </tr>
                                    <tr>
                                        <th>Pick 1 Less</th>
                                        <th>42</th>
                                    </tr>
                                    <tr>
                                        <th>Lotto System 7</th>
                                        <th>7</th>
                                    </tr>
                                    <tr>
                                        <th>Lotto System 8</th>
                                        <th>28</th>
                                    </tr>
                                    <tr>
                                        <th>Lotto System 9</th>
                                        <th>84</th>
                                    </tr>
                                    <tr>
                                        <th>Lotto System 10</th>
                                        <th>210</th>
                                    </tr>
                                </table>
                                )
                            }
                               <Link onClick={() => { handleShowTable('irishPrize') }}>See Irish Lotto Systems Prize Tables</Link>
                            {
                                showSystemTable.irishPrize && (
                                    <table className='my-3 systemTable'>
                                        <tr>
                                            <th colSpan={4} className='head1 text-center'>
                                            Winning Combinations (6 numbers)*</th>
                                        </tr>
                                        <tr className='head2'>
                                            <th>Prize Divisions</th>
                                            <th>Lotto System 8</th>
                                            <th>Lotto System 9</th>
                                            <th>Lotto System 10</th>
                                        </tr>
                                        <tr>
                                            <th>Special</th>
                                            <th>1</th>
                                            <th>1</th>
                                            <th>1</th>
                                        </tr>
                                        <tr>
                                            <th>3</th>
                                            <th>12</th>
                                            <th>18</th>
                                            <th>24</th>
                                        </tr>
                                        <tr>
                                            <th>4</th>
                                            <th>15</th>
                                            <th>45</th>
                                            <th>90</th>
                                        </tr>
                                        <tr>
                                            <th>7</th>
                                            <th>0</th>
                                            <th>20</th>
                                            <th>80</th>
                                        </tr>
                                        <p className='fst-italic'>* Abbreviated table only</p>
                                    </table>
                                )}
                             <div className='usaLottoSystem irishLotto rounded py-2 px-5 justify-content-between align-items-center my-4  d-flex'>
                                <img src='https://www.lotteryoffice.com.au/assets/images/lottery-logos/irish-lotto.png' className='w-16' alt='USA power lotto system' />
                                <h4 className='text-light'>Play Irish Lotto</h4>
                                <button className='button btn system-btn' onClick={()=>document.location.href='/play'}>Play now</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='col-12 col-md-11 mx-auto my-4'>
                    <div className='d-flex flex-column flex-md-row align-items-start'>
                        <div className='col-12 col-md-2 mx-auto'>
                            <img src='	https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-2.svg' className='w-42 mx-auto' alt='lottery information' />
                        </div>
                        <div className="col-12 col-md-10 mx-auto left_border p-2">
                            <h4 className="mb-4">Lotto Systems FAQs</h4>
                            <h4 className='cursor-pointer mb-4 faqs' onClick={() => { handleShowingText('one') }}>How do lotto systems works?</h4>
                            {faqs.one &&
                                <p className='mb-4'>Lotto Systems allow you to select more numbers that you could normally select when playing a standard lottery game. This gives you much better chances to win in comparison to a standard game.</p>}
                            <h4 className='cursor-pointer mb-4 faqs' onClick={() => handleShowingText('two')}>Which lotto system is best?</h4>
                            {faqs.two &&
                                <p className='mb-4'>There are several options to consider such as the equivalent amount of standard games, cost, jackpot and lower division prize sizes, and overall chances of winning the lottery in question.</p>}
                            <h4 className='cursor-pointer mb-4 faqs' onClick={() => handleShowingText('three')}>How to win lotto systems?</h4>
                            {faqs.three &&
                                <p className='mb-4'>Lotto is a game of chance, and, as with standard lottery games, Lotto Systems do not guarantee a win.</p>}
                            <h4 className='cursor-pointer mb-4 faqs' onClick={() => handleShowingText('four')}>What is a system 10 lotto?</h4>
                            {faqs.four &&
                                <p className='mb-4'>A Lotto System 10 allows you to pick 10 lottery numbers. Picking this many numbers vastly boosts your chances of winning several prizes. The Lotto System 10 option is available for all of our lotteries.</p>}
                        </div>
                    </div>
                </div>

            </div>
           <div className='row'>
           <Footerr />
           </div>
        </div>
    )
}
export default Lotto_System;