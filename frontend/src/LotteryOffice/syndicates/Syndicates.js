import React, { useEffect, useState } from 'react';
import './Syndicates.css';
import Header from '../Header';
import syndicates from '../images/syndicates.PNG';
import { Link } from 'react-router-dom';
import syn from '../images/syn.PNG';
import govt_regulated from '../images/govt-regulated-strip.svg';
import payment_strip from '../images/payment-strip.svg';
import Footerr from '../Footerr';
import fetchLotteries from '../../LotteryData/LotteryData';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Syndicates = () => {
    const [shares, setShares] = useState({
        megaLotto: 1,
        guaranteedMega: 1,
        powerLotto: 1,
        guaranteedPower: 1,
    });
    const [lotteriesData, setLotteriesData] = useState([]);

    useEffect(() => {
        const getLotteryData = async () => {
            try {
                const data = await fetchLotteries();
                setLotteriesData(data.data);
            } catch (error) {
                toast.error(`Error fetching data: ${error.message}`, {
                    position: 'top-center',
                });
            }
        };
        getLotteryData();
    }, []);



    const handleIncrement = (key) => {
        setShares((prevShares) => ({
            ...prevShares,
            [key]: prevShares[key] + 1,
        }));
    };

    const handleDecrement = (key) => {
        setShares((prevstate) => ({
            ...prevstate,
            [key]: prevstate[key] > 1 ? prevstate[key] - 1 : 1
        }))
    }

    const getTotalPrice = (key, pricePerItem) => {
        return `${(shares[key] * pricePerItem).toFixed(2)}`;
    }

    const handleAddToCart = async (id) => {
        try {
            const response = await fetch(`http://localhost:6005/add-to-cart/${id}`, {
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
    };

    return (
        <>
            <div className='container-fluid'>
                <Header />
                <div className='row'>
                    <img src={syndicates} className='w-100 p-0' alt='Syndicates-Banner' />
                </div>
                <div className="row syndicates_cantainer">
                    {
                        lotteriesData.map((data, index) => (
                            <div key={index} className="col-12 col-md-11 mx-auto bg-light mb-4 card_data">
                                <div className="d-flex flex-column flex-md-row p-2">
                                    <div className="col-12 col-md-5 d-flex mt-4">
                                        <div>
                                            <img src={data.image} alt="Logo" className="imageSize" />
                                        </div>
                                        <div className="ms-4">
                                            <h4>{data.countryName}</h4>
                                            <h2>{data.pirce}*</h2>
                                            <p>Closes in: {data.closeTime}</p>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-7">
                                        <div className="d-flex flex-column flex-md-row">
                                            <div className="ms-3 mt-3">
                                                <h5>{data.remaining_shares} shares remaining</h5>
                                                <p>Total shares: {data.total_shares}</p>
                                            </div>
                                            <div className="d-flex ms-2 justify-content-center text-center">
                                                <h3 className="mt-3" onClick={() => handleDecrement('megaLotto')}>-</h3>
                                                <div className="share mx-1">
                                                    <h4 className="text-light mb-0 mt-2">{shares.megaLotto}</h4>
                                                    <p className="text-light">Share</p>
                                                </div>
                                                <h3 className="mt-3" onClick={() => handleIncrement("megaLotto")}>+</h3>
                                            </div>
                                            <p className="fs-5 mt-3 ms-3">Total: ${getTotalPrice("megaLotto", data.price_per_share)}</p>
                                        </div>
                                        <hr />
                                        <div className="d-flex justify-content-between mb-3">
                                            <div>
                                                <h4>{data.games} games</h4>
                                                <Link to="">Show numbers</Link>
                                                <i className="bi bi-caret-down-fill text-primary cursor-pointer ms-2"></i>
                                            </div>
                                            <button type="button" className="button btn btn-syndicates me-4" onClick={() => handleAddToCart(data._id)}>Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                                <p className="mb-0 text-black p-2">50 standard games in the USA Mega Lotto</p>
                            </div>
                        ))
                    }
                </div>

                <img src={syn} className='w-100' alt='logo' />
                <div className='row lotterySystem'>

                    <div className='col-12 col-md-11 mx-auto my-5'>
                        <div className='d-flex flex-column flex-md-row align-items-start'>
                            <div className='col-12 col-md-2 mx-auto'>
                                <img src='https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-1.svg' className='w-42 mx-auto' alt='lottery information' />
                            </div>
                            <div className="col-12 col-md-10 mx-auto  p-2">
                                <h4 className="mb-4">Enjoy More Entries for Less Money with Lotto Syndicates in Australia</h4>
                                <p className='border-left-custom'>The Lottery Office is now offering lottery players the opportunity to increase their odds of winning from our lotteries for less money. Lottery syndicates are simple, fun and involve sharing both the expenses and winnings. Australian lotto syndicates aren’t news, however, it has never been easier to get involved in international lottery syndicates, you can simply <Link to='/lotto-systems'>play lotto online</Link> , with just a couple of clicks. You won't need to ask people to chip in or chase them for funds and purchasing your lines can be done easily via The Lottery Office.</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-11 mx-auto mb-5 p-3'>
                        <div className='d-flex flex-column flex-md-row align-items-start'>
                            <div className='col-12 col-md-2 mx-auto'>
                                <img src='https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-2.svg' className='w-42 mx-auto' alt='lottery information' />
                            </div>
                            <div className="col-12 col-md-10 mx-auto ">
                                <h4 className="mb-4">What are Lotto Syndicates?</h4>
                                <p className='border-left-custom'>A <Link to='/syndicates'>lottery syndicate</Link> , also known as a group entry, is a great way to increase your chances of winning prizes without spending a huge amount of money. A lottery syndicate refers to a group of people who pool money, buy several lottery tickets and consequently share the prizes they get. It is a very effective mechanism for increasing the chances of winning the lottery, whilst lowering individual expenses.</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-11 mx-auto'>
                        <div className='d-flex flex-column flex-md-row align-items-start'>
                            <div className='col-12 col-md-2 mx-auto'>
                                <img src='https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-1.svg' className='w-42 mx-auto' alt='lottery information' />
                            </div>
                            <div className="col-12 col-md-10 mx-auto  p-3">
                                <h4 className="mb-4">How do Lottery Syndicates Work?</h4>
                                <p className='border-left-custom'>At The Lottery Office, all you need to do is simply choose the lottery syndicate that appeals the most to you, select the number of shares you wish to purchase and proceed to the shopping cart. It’s that easy! You can buy as many shares as you like, until the syndicate is sold out. Each share you buy will boost the size of any money you collect if the syndicate wins any prizes.</p>
                                <p className='mt-5'> The Lottery Office will generate the lottery numbers randomly for the syndicates and buy large quantities of tickets before participating in each draw. There are various types of syndicates on our site, and all you have to do is choose your favourite syndicate. You don't even have to create a team of players - we find the players and organise everything for you. If you’re a lucky winner, we’ll notify you of the win and ensure that you receive your prize. Each player has the right to their winning share, in proportion to the share paid for the purchase of the group games.</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-11 mx-auto'>
                        <div className='d-flex flex-column flex-md-row align-items-start'>
                            <div className='col-12 col-md-2 mx-auto'>
                                <img src='	https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-4.svg' className='w-42 mx-auto' alt='lottery information' />
                            </div>
                            <div className="col-12 col-md-10 mx-auto  p-3">
                                <h4 className="mb-4">Play Lotto Syndicates Online with The Lottery Office</h4>
                                <p className='border-left-custom'>When you purchase a ticket in any of our lottery syndicates, we will purchase matching tickets in the overseas lottery using those same numbers that we’ve randomly generated. The ticket will detail the game numbers being entered in the draw, the number of shares you purchased and the draw date.</p>
                                <p> This ticket will be available to view as soon as the matching ticket has been purchased by one of our local agents overseas. It will appear for your convenience under <Link to='/pay-in-store'>My draws</Link>  in your account. Here is a list of the overseas lotteries, in which our Government licensed lotteries are matched with:</p>
                                <table className='w-100'>
                                    <thead>
                                        <tr className='text-center'>
                                            <th className='heading-1'>Approved Lottery</th>
                                            <th className='heading-2'>Nominated Foreign Lottery</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>USA Power Lotto</td>
                                            <td>US Powerball</td>
                                        </tr>
                                        <tr>
                                            <td>USA Mega Lotto</td>
                                            <td>US Mega Millions</td>
                                        </tr>
                                        <tr>
                                            <td>European Millions</td>
                                            <td>Multi-jurisdiction EuroMillions</td>
                                        </tr>
                                        <tr>
                                            <td>UK Lotto</td>
                                            <td>UK National Lottery 'Lotto'</td>
                                        </tr>
                                        <tr>
                                            <td>Irish Lotto</td>
                                            <td>Irish National Lottery 'Lotto'</td>
                                        </tr>
                                        <tr>
                                            <td>SuperEnalotto aka Italian Super Jackpot</td>
                                            <td>Italy's National SuperEnalotto</td>
                                        </tr>
                                        <tr>
                                            <td>European Jackpot</td>
                                            <td>Multi-jurisdiction EuroJackpot</td>
                                        </tr>
                                        <tr>
                                            <td>La Primitiva</td>
                                            <td>Spain's La Primitiva</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <p className='mt-2'>Our unique business model allows us to give Australians access to massive lottery jackpots each and every day. The Lottery Office is 100% Australian owned and operated, has been licensed and regulated by the Northern Territory Government since 2003 and with local customer support on hand, you can rest easy that your entries will be lodged and all winnings will be paid out. In fact, our parent company has paid out millions to lottery winners so far!</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-11 mx-auto mb-3 '>
                        <div className='d-flex flex-column flex-md-row align-items-start'>
                            <div className='col-12 col-md-2 mx-auto'>
                                <img src='	https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-5.svg' className='w-42 mx-auto' alt='lottery information' />
                            </div>
                            <div className="col-12 col-md-10 mx-auto p-3">
                                <h4 className="mb-4">Enjoy More Entries for Less Money with Lotto Syndicates in Australia</h4>
                                <p className='border-left-custom'>Participation in lottery syndicates is an excellent advantage for players, taking into account aspects such as:</p>
                                <ul className='d-flex flex-column advantages p-3'>
                                    <li>You can purchase more lottery tickets and only pay for a share of them.</li>
                                    <li>Playing with a group of people is more exciting.</li>
                                    <li>There are higher chances of winning from lottery jackpots like US Powerball or EuroMillions, from which you can get high prizes even when shared.</li>
                                    <li>You can buy as many shares of the syndicate as you want depending only on what’s still available in that syndicate. The earlier you shop the more shares you can get.</li>
                                    <li>You have the opportunity to play in an individual game, with your favourite numbers, as well as playing in a group with other people.</li>
                                    <li>Lottery syndicates are an excellent way to win money by making a smaller investment. For the same amount of money you get a greater chance of winning in syndicates than in individual play.</li>
                                </ul>
                                <p className='mt-5'>Joining a lotto syndicate with The Lottery Office doesn’t require you to create or manage your own groups, we do all the hard work for you. Simply choose the number of shares you want and we’ll make sure that any remaining shares are sold, so that the syndicate is full.</p>
                                <p>With The Lottery Office you don’t have to worry about any problems such as trying to get money out of members that won’t pay for their share. We collect the money up front, so there’s no chasing people down over debts. If the syndicate wins, you won’t have any issues with people who didn’t pay trying to claim a slice of the prize, or one person collecting the whole prize for themselves and failing to give everyone their share! We pay every syndicate member. Each gets their share of winnings without argument and without delay.</p>
                            </div>
                        </div>
                    </div>


                    <div className='col-12 col-md-11 mx-auto'>
                        <div className='d-flex flex-column flex-md-row align-items-start'>
                            <div className='col-12 col-md-2 mx-auto'>
                                <img src='	https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-6.svg' className='w-42 mx-auto' alt='lottery information' />
                            </div>
                            <div className="col-12 col-md-10 mx-auto p-3">
                                <h4 className="mb-4">What Happens if You Win at The Lottery Office?</h4>
                                <p className='border-left-custom'>Once your syndicate’s lottery or lotteries have taken place, we will notify you either way to verify if you have won a prize or not. For each player that has participated in the syndicate, the size of any winnings you receive are dependent on:</p>
                                <ul className='d-flex flex-column total-shares p-3'>
                                    <li>How many total shares were available to be purchased in the syndicate</li>
                                    <li>The amount of shares you bought</li>
                                    <li>The number of prizes the syndicate won</li>
                                    <li>The value of each prize the syndicate won</li>
                                </ul>
                                <p className='my-5'>For example, let’s say a syndicate has 10 shares available in total and you decide to buy 2 shares.</p>
                                <ul className='d-flex flex-column prizes p-3'>
                                    <li>The syndicate wins 3 prizes: one valued at $10, one valued at $150 and one valued at $250.</li>
                                    <li>The first prize ($10) is worth $1 per share. You bought 2 shares, so you’re entitled to $2 from this prize.</li>
                                    <li>The second prize ($150) is worth $15 per share. You bought 2 shares, so you’re entitled to $30 from this prize.</li>
                                    <li>The third prize ($250) is worth $25 per share. You bought 2 shares, so you’re entitled to $50 from this prize.
                                    </li>
                                    <li>You are entitled to $2 + $30 + $50 = $82 in total.</li>
                                </ul>
                                <p className='mt-5'>If you win under AUD$10,000 your total winnings will be credited straight to your Lottery Office account. For any major division winnings we will call you with the good news and arrange a payment method that suits you. All prizes in the matched overseas lotteries are collected by us. We then pay our winners the exact same amount. Any taxes (if applicable) will be deducted before you receive any winnings. Please refer to the Games Rules of each lottery for more tax information but please be assured no Australian taxes will be deducted from any of your prizes.</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-11 mx-auto'>
                        <div className='d-flex flex-column flex-md-row align-items-start'>
                            <div className='col-12 col-md-2 mx-auto'>
                                <img src='https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-7.svg' className='w-42 mx-auto' alt='lottery information' />
                            </div>
                            <div className="col-12 col-md-10 mx-auto  p-3">
                                <h4 className="mb-4">Syndicate Lottery Packages</h4>
                                <p className='border-left-custom'>At The Lottery Office, you can purchase syndicate lottery entries and individual entries all in a single purchase.</p>
                                <p> A lottery package like this tends to be more effective than just the usual individual ticket. Many lottery players play individual games and also participate in syndicates, because this way they have the opportunity to play (personally) with their favourite numbers, whilst increasing their chances of winning with a group entry too. It is not necessary to make separate purchases. You can do it all in a single transaction, quickly and easily.</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-11 mx-auto'>
                        <div className='d-flex flex-column flex-md-row align-items-start'>
                            <div className='col-12 col-md-2 mx-auto'>
                                <img src='https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-9.svg' className='w-42 mx-auto' alt='lottery information' />
                            </div>
                            <div className="col-12 col-md-10 mx-auto  p-3">
                                <h4 className="mb-4">Lottery Syndicates Help & FAQs</h4>
                                <p className='border-left-custom'>Still have some more questions? Check out our <Link to='/faqs'>FAQs</Link>  for more information or <Link to='/contact'>Contact us</Link> .</p>
                                <h4>Is the payment of syndicates winnings guaranteed?</h4>
                                <p>Playing with a Government licensed company means you have peace of mind. The Lottery Office purchases real matching tickets, which means that we can guarantee payment of syndicates winnings with no extra fees or commissions. We simply collect the prize money and then pay you the exact same amount.</p>
                                <h4>How much do lottery syndicates cost?</h4>
                                <p>The cost of your entries will depend on how many shares in the lottery syndicate you choose to buy. The main advantage of any syndicate is more chances for a lower cost.</p>
                                <h4>Is there a higher chance or winning with lottery syndicates?</h4>
                                <p>Statistically, the more entries you have in a lottery draw, the higher your chances are of winning a prize. Lottery syndicates offer a higher probability of winning, at a lower cost. For example, say that a lottery has a 1 in 25 chance of winning a prize. But, with a lottery syndicate, you might be able to increase the amount of entries you buy to 10, giving you a 1 in 2.5 chance of winning.</p>
                                <h4>How successful are lottery syndicates?</h4>
                                <p>Very! Lots of people choose to enter them solely for the social element and never truly expect to win. But once you enter a syndicate you are in with a higher chance of winning prizes than lottery players who are unable to buy as many tickets as a syndicate can.</p>
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
            <ToastContainer />
            <Footerr />
        </>
    )
}

export default Syndicates;