import React, { useState } from 'react';
import './Combo.css';
import combo from '../images/combo.PNG';
import Header from '../Header';
import { Link } from 'react-router-dom';
import comboLogo from '../images/comboLogo.PNG';
import govt_regulated from '../images/govt-regulated-strip.svg';
import payment_strip from '../images/payment-strip.svg';
import Footerr from '../Footerr';

const Combo = () => {
    const [faqs, setFaqs] = useState({ one: true, two: true, three: true, four: true });

    const handleShowingText = (value) => {
        setFaqs((prevState) => ({
            ...prevState,
            [value]: !prevState[value]
        }))
    }

    return (
        <>
            <div className='container-fluid'>
                <Header />
                <div className='row'>
                    <img src={combo} alt='App Banner' className='w-100 p-0' />
                </div>
                <div className='row combo_container'>

                    <div className='col-12 col-md-10 mx-auto d-flex flex-column flex-md-row bg-light p-3 combo justify-content-between align-items-center text-center mt-4'>
                        <div className='col-12 col-md-6 mx-auto d-flex '>
                            <img src='	https://www.lotteryoffice.com.au/assets/images/lottery-logos/combo-usa.png?v=1' alt='Logo' />
                            <div className='text-start ms-3'>
                                <h4>All Lotteries Combo</h4>
                                <h5>Combined Jackpot</h5>
                                <h2>$867 Million*</h2>
                                <p>Closes in: 21 hrs, 9 mins</p>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 mx-auto'>
                            <h4>1 ticket in each lottery</h4>
                            <p>Total: $57.55</p>
                            <button className='button btn btn-syndicates'>Add to cart</button>
                        </div>
                    </div>

                    <div className='col-12 col-md-10 mx-auto d-flex flex-column flex-md-row bg-light p-3 combo justify-content-between align-items-center text-center mt-4'>
                        <div className='col-12 col-md-6 mx-auto d-flex '>
                            <img src='https://www.lotteryoffice.com.au/assets/images/lottery-logos/combo-big-4.png?v=1' alt='Logo' />
                            <div className='text-start ms-3'>
                                <h4>USA/Euro Max Combo</h4>
                                <h5>Combined Jackpot</h5>
                                <h2>$699 Million*</h2>
                                <p>Closes in: 1 day, 6 hrs</p>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 mx-auto'>
                            <h4>1 ticket in each lottery</h4>
                            <p>Total: $14.00</p>
                            <button className='button btn btn-syndicates'>Add to cart</button>
                        </div>
                    </div>

                    <div className='col-12 col-md-10 mx-auto d-flex flex-column flex-md-row bg-light p-3 combo justify-content-between align-items-center text-center mt-4'>
                        <div className='col-12 col-md-6 mx-auto d-flex '>
                            <img src='	https://www.lotteryoffice.com.au/assets/images/lottery-logos/combo-usa.png?v=1' alt='Logo' />
                            <div className='text-start ms-3'>
                                <h4>Big 4 Combo</h4>
                                <h5>Combined Jackpot</h5>
                                <h2>$679 Million*</h2>
                                <p>Closes in: 1 day, 6 hrs</p>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 mx-auto'>
                            <h4>1 ticket in each lottery</h4>
                            <p>Total: $28.25</p>
                            <button className='button btn btn-syndicates'>Add to cart</button>
                        </div>
                    </div>

                    <div className='col-12 col-md-10 mx-auto d-flex flex-column flex-md-row bg-light p-3 combo justify-content-between align-items-center text-center mt-4'>
                        <div className='col-12 col-md-6 mx-auto d-flex '>
                            <img src='	https://www.lotteryoffice.com.au/assets/images/lottery-logos/combo-usa.png?v=1' alt='Logo' />
                            <div className='text-start ms-3'>
                                <h4>USA/Euro Max Combo</h4>
                                <h5>Combined Jackpot</h5>
                                <h2>$699 Million*</h2>
                                <p>Closes in: 1 day, 6 hrs</p>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 mx-auto'>
                            <h4>1 ticket in each lottery</h4>
                            <p>Total: $31.00</p>
                            <button className='button btn btn-syndicates'>Add to cart</button>
                        </div>
                    </div>

                    <div className='col-12 col-md-10 mx-auto d-flex flex-column flex-md-row bg-light p-3 combo justify-content-between align-items-center text-center mt-4'>
                        <div className='col-12 col-md-6 mx-auto d-flex '>
                            <img src='https://www.lotteryoffice.com.au/assets/images/lottery-logos/combo-usa-euro.png?v=1' alt='Logo' />
                            <div className='text-start ms-3'>
                                <h4>USA/Euro Combo</h4>
                                <h5>Combined Jackpot</h5>
                                <h2>$615 Million*</h2>
                                <p>Closes in: 1 day, 6 hrs</p>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 mx-auto'>
                            <h4>1 ticket in each lottery</h4>
                            <p>Total: $23.25</p>
                            <button className='button btn btn-syndicates'>Add to cart</button>
                        </div>
                    </div>

                    <div className='col-12 col-md-10 mx-auto d-flex flex-column flex-md-row bg-light p-3 combo justify-content-between align-items-center text-center mt-4'>
                        <div className='col-12 col-md-6 mx-auto d-flex '>
                            <img src='	https://www.lotteryoffice.com.au/assets/images/lottery-logos/combo-euro.png?v=1' alt='Logo' />
                            <div className='text-start ms-3'>
                                <h4>Euro Combo</h4>
                                <h5>Combined Jackpot</h5>
                                <h2>$426 Million*</h2>
                                <p>Closes in: 1 day, 20 hrs</p>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 mx-auto'>
                            <h4>1 ticket in each lottery</h4>
                            <p>Total: $17.00</p>
                            <button className='button btn btn-syndicates'>Add to cart</button>
                        </div>
                    </div>
                </div>

                <div className='row'>

                    <div className='col-12 col-md-11 mx-auto my-5'>
                        <div className='d-flex flex-column flex-md-row align-items-start'>
                            <div className='col-12 col-md-2 mx-auto'>
                                <img src='https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-1.svg' className='w-42 mx-auto' alt='lottery information' />
                            </div>
                            <div className="col-12 col-md-10 mx-auto left_border p-2">
                                <h4 className="mb-4">What are Lotto Combinations?</h4>
                                <p className='border-left-custom'>The Lottery Office Lotto Combinations are a popular way to play your favourite lotteries, letting you enter up to 8 draws from all of our unique Government licensed lotteries at once.</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-11 mx-auto p-3'>
                        <div className='d-flex flex-column flex-md-row align-items-start'>
                            <div className='col-12 col-md-2 mx-auto'>
                                <img src='https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-2.svg' className='w-42 mx-auto' alt='lottery information' />
                            </div>
                            <div className="col-12 col-md-10 mx-auto left_border">
                                <h4 className="mb-4">Get a Chance to Win Multiple Lottery Jackpots</h4>
                                <p className='border-left-custom'>Each time you choose to play a Lotto Combination, we enter you in multiple draws across several of our lotteries. Why limit yourself to a chance at just one jackpot prize when you can try for 2, 3 or even 8!</p>
                                <p>For each Lotto Combo you enter, we buy multiple matching tickets in the relevant overseas lotteries. If any of the matching tickets in any of the overseas draws win a prize, The Lottery Office collects the prizes and then pay you exactly the same amount of money we collected. This is a great way to win from the draws of renowned overseas lotteries such as the US Powerball, SuperEnalotto and EuroMillions.</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-11 mx-auto my-3'>
                        <div className='d-flex flex-column flex-md-row align-items-start'>
                            <div className='col-12 col-md-2 mx-auto'>
                                <img src='https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-1.svg' className='w-42 mx-auto' alt='lottery information' />
                            </div>
                            <div className="col-12 col-md-10 mx-auto left_border p-2">
                                <h4 className="mb-4">Why Play Lotto Combinations to Win with The Lottery Office?</h4>
                                <p className='border-left-custom'>Variety is the spice of life and Lotto Combinations are all about variety!<br />
                                    When we noticed that a lot of our players liked to mix things up and enter the draws of more than one lottery in one transaction, we decided to make it super quick and easy with Lotto Combinations.</p>
                                <p>Lottery Combinations are not offered by most lottery providers, but at The Lottery Office, we do things a bit differently. Nowhere else do players have the chance to play all the unique licensed lotteries we offer. By wrapping them all up in one neat purchase, we make it easy for Aussies and Kiwis to have a go at winning Australia’s biggest jackpots. All of our lotteries are matched to huge international lottery draws, some with record-breaking prizes that traditional Australian lottery jackpots just can’t compete with.</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-11 mx-auto my-5'>
                        <div className='d-flex flex-column flex-md-row align-items-start'>
                            <div className='col-12 col-md-2 mx-auto'>
                                <img src='https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-5.svg' className='w-42 mx-auto' alt='lottery information' />
                            </div>
                            <div className="col-12 col-md-10 mx-auto left_border p-2">
                                <h4 className="mb-4">Lotto Combinations Available at The Lottery Office</h4>
                                <p className='border-left-custom'>We have a Lotto Combination to suit everyone. Whether you’re a big jackpot hunter or playing on a budget, we’ve got you covered.<br />
                                    We have Lotto Combos starting from just $14, try one today.</p>
                                <h4 className='mb-4'>All Lotteries Combo</h4>
                                <h5>Lotteries Included:</h5>
                                <li>1 x European Jackpot game</li>
                                <li>1 x European Millions game</li>
                                <li>1 x Irish Lotto game</li>
                                <li>1 x Italian Super Jackpot game</li>
                                <li>1 x La Primitiva game</li>
                                <li>1 x UK Lotto game</li>
                                <li>1 x USA Mega Lotto game</li>
                                <li>1 x USA Power Lotto game</li>
                                <p className='my-4'>Why play just one exclusive lottery, when you can play them all at the same time? For a shot at a prize in each one of our remarkable lotteries, play our All Lotteries Combo! With 8 jackpots to be won, this Combo gives players a chance to try their luck in 8 of Australia’s newest lottery draws with one convenient purchase.</p>
                                <h4 className='mb-4'>USA Combo</h4>
                                <h5>Lotteries Included:</h5>
                                <li>1 x USA Mega Lotto game</li>
                                <li>1 x USA Power Lotto game</li>
                                <p className='my-4'>With a ticket in each of our most popular lotteries, it’s easy to see why the USA Combo is a favourite with our players. These two are matched with the record-breaking overseas lotteries US Powerball and US Mega Millions, with combined all-time highest jackpots of well over AUD$4 billion! We love giving Australians and New Zealanders the chance to win from these two monsters</p>
                                <h4 className='mb-4'>The Big 4 Combo</h4>
                                <h5>Lotteries Included:</h5>
                                <li>1 x European Millions game</li>
                                <li>1 x Italian Super Jackpot game</li>
                                <li>1 x USA Mega Lotto game</li>
                                <li>1 x USA Power Lotto game</li>
                                <p className='mt-4'>The Big 4 Combo gives players an entry into each of the lottery draws that have the four biggest historical jackpots.</p>
                                <h4 className='my-4'>USA/Euro Max Combo</h4>
                                <h5>Lotteries Included:</h5>
                                <li>1 x European Jackpot game</li>
                                <li>1 x European Millions game</li>
                                <li>1 x USA Mega Lotto game</li>
                                <li>1 x USA Power Lotto game</li>
                                <p className='mt-4'>The USA/Euro Max Combo gives players the change to win from the big two US draws as well as both of the most widely played European draws.</p>
                                <h4 className='my-4'>USA/Euro Combo</h4>
                                <h5>Lotteries Included:</h5>
                                <li>1 x European Millions game</li>
                                <li>1 x USA Mega Lotto game</li>
                                <li>1 x USA Power Lotto game</li>
                                <p className='mt-4'>Three of our most popular lotteries in one convenient Combo! Matched with the record-setting US lotteries and one of Europe’s biggest jackpotting lotteries, this Combo is for those that are chasing a chance at big bucks.</p>
                                <h4 className='my-4'>Euro Max Combo</h4>
                                <h5>Lotteries Included:</h5>
                                <li>1 x European Millions game</li>
                                <li>1 x Italian Super Jackpot game</li>
                                <p className='mt-4'>The Euro Max Combo gives entries into the draws of lotteries matched with the biggest two lotteries offered in Europe.</p>
                                <h4 className='my-4'>Euro Combo</h4>
                                <h5>Lotteries Included:</h5>
                                <li>1 x European Jackpot game</li>
                                <li>1 x European Millions game</li>
                                <p className='mt-4'>The European Jackpot and European Millions are matched with two of Europe’s most widely-played lotteries, the Eurojackpot and EuroMillions. As a bonus, all winnings from both of these lotteries are 100% tax-free.</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-11 mx-auto my-5'>
                        <div className='d-flex flex-column flex-md-row align-items-start'>
                            <div className='col-12 col-md-2 mx-auto'>
                                <img src='https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-4.svg' className='w-42 mx-auto' alt='lottery information' />
                            </div>
                            <div className="col-12 col-md-10 mx-auto left_border p-2">
                                <h4 className="mb-4">How to Play a Lotto Combination</h4>
                                <p className='border-left-custom'>Playing a Lotto Combination is very straight forward. Once you’ve selected which Combo you’d like to play, simply click on the orange ‘Add to cart’ button.</p>
                                <img src={comboLogo} className='w-100' alt='logo' />
                                <p>This will automatically take you to the checkout page, where the tickets for all of the lotteries in your selected Combo will already be added, with random lottery numbers chosen for you in each game.</p>
                                <p>If you decide you’d like to play more than one Lotto Combo, you can simply go back to the Combo screen and click ‘Add to cart’ on another Combo. Each time you do this, it will add the selected Combo to your cart. You can even add any other lotto games you wish to your cart, such as <Link to='/syndicates'>Lotto Syndicates</Link> or Lotto Systems and purchase them all in one go.</p>
                                <h4 className='my-4'>Can I Change Lotto Combinations?</h4>
                                <p>In the Checkout screen, you can easily substitute, add or remove the games in your Combo.<br />
                                    For USA Power Lotto and USA Mega Lotto, you can add the Multiplier for $3.45 per game, which multiplies wins from non-jackpot divisions by up to 10 times for USA Power Lotto or, 5 times for USA Mega Lotto.</p>
                                <p>For La Primitiva you can add the Joker feature for $3.70, which could win you up to AUD$1.4 million.<br />You can even change the lotto numbers of each lottery ticket in a Combo if you wish. You can easily do this at the Checkout by clicking the  icon.</p>
                                <p>Once your payment has been processed we’ll email you your Order Confirmation, showing which lottery entries you’ve purchased and which lotto numbers will be played in each one. Our lottery agents will then purchase matching tickets in overseas lotteries, giving you the chance to win from famously large international jackpots.</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-11 mx-auto my-5'>
                        <div className='d-flex flex-column flex-md-row align-items-start'>
                            <div className='col-12 col-md-2 mx-auto'>
                                <img src='	https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-5.svg' className='w-42 mx-auto' alt='lottery information' />
                            </div>
                            <div className="col-12 col-md-10 mx-auto left_border p-2">
                                <h4 className="mb-4">What Happens if You Win with a Lotto Combination?</h4>
                                <p className='border-left-custom'>If any of the games in your Lottery Combination win a prize in the matching overseas lottery draw, we will collect the prize from the matching ticket that we purchased ourselves. What happens next depends on how much you win.</p>
                                <p>If there are any prizes won in the Combo that are valued at AUD$10,000 or more, our Customer Support Team will contact you to arrange your payment.</p>
                                <p>For any prizes less than AUD$10,000, we’ll automatically pay them directly to your Lottery Office account, and from there they can be withdrawn to your nominated bank account.</p>
                                <p>In both cases you’ll be paid the same amount of prize money that we collected from the overseas draw.</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-11 mx-auto p-3'>
                        <div className='d-flex flex-column flex-md-row align-items-start'>
                            <div className='col-12 col-md-2 mx-auto'>
                                <img src='	https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-6.svg' className='w-42 mx-auto' alt='lottery information' />
                            </div>
                            <div className="col-12 col-md-10 mx-auto left_border">
                                <h4 className="mb-4">Lotto Combo Player Wins Almost $50,000</h4>
                                <p className='border-left-custom'>A <Link to='/winners'>Lottery Office player won</Link>  AUD$48,732.32 by playing our popular USA/Euro Combo. After only playing with The Lottery Office for a few months, she decided to buy the Combo, giving her entry into our USA Power Lotto, USA Mega Lotto and European Millions draws. The USA Power Lotto ticket came out a division 3 winner!</p>
                                <p>Until we called her, she had no idea that she’d won almost $50,000, as she hadn’t yet checked the results of the three draws she entered with her Lottery Combo purchase. The anonymous winner from New South Wales was just one number from winning the entire AUD$183 million jackpot to herself! She was still ecstatic with her win and plans to put the prize money towards holidays to Antarctica and Hamilton Island.</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-11 mx-auto my-5'>
                        <div className='d-flex flex-column flex-md-row align-items-start'>
                            <div className='col-12 col-md-2 mx-auto'>
                                <img src='	https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-7.svg' className='w-42 mx-auto' alt='lottery information' />
                            </div>
                            <div className="col-12 col-md-10 mx-auto left_border p-2">
                                <h4 className="mb-4">How Much do Lotto Combinations Cost?</h4>
                                <p className='border-left-custom'>The prices of our Lotto Combinations are the same as the combined amount of the individual lottery tickets found in each Combo. For example, in our USA Combo, you are buying an entry into the draws of both our USA Power Lotto and USA Mega Lotto at the same time. A ticket in each of these lotteries is $7, therefore the total cost of the Combo is $14.</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-11 mx-auto my-5'>
                        <div className='d-flex flex-column flex-md-row align-items-start'>
                            <div className='col-12 col-md-2 mx-auto'>
                                <img src='	https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-8.svg' className='w-42 mx-auto' alt='lottery information' />
                            </div>
                            <div className="col-12 col-md-10 mx-auto left_border p-2">
                                <h4 className="mb-4">What are Some Alternatives to Lottery Combinations?</h4>
                                <p className='border-left-custom'>We have lottery game options to suit everyone, from lottery novices to seasoned pros.<br />If Lottery Combinations aren’t for you, we also offer Lotto Syndicates,<Link to='/lotto-systems'>Lotto Systems</Link> , multi-draw entries and standard single-entry lotto games.</p>
                                <p>Lotto Syndicates let you combine your ticket purchase power with other lottery players. This enables the syndicate to buy more tickets than one could on their own. By buying more tickets, the chances of winning prizes can be dramatically increased. The more shares you buy in a syndicate, the more prize money you collect if the syndicate wins a prize.</p>
                                <p>Lotto Systems let you choose more lotto numbers than is normally allowed by the rules of the matched overseas lotteries. By selecting more numbers, the chances of winning are increased compared with buying a standard lottery entry.</p>
                                <p>Multi-draw entries give players the option of pre-purchasing entry in up to 20 lotto draws in advance. This ‘set and forget’ feature is very helpful for regular players who don’t want to bother with making a new purchase for each draw.</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-11 mx-auto my-5'>
                        <div className='d-flex flex-column flex-md-row align-items-start'>
                            <div className='col-12 col-md-2 mx-auto'>
                                <img src='	https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-9.svg' className='w-42 mx-auto' alt='lottery information' />
                            </div>
                            <div className="col-12 col-md-10 mx-auto left_border p-2">
                                <h4 className="mb-4">Lotto Combinations FAQs</h4>
                                <h4 className='cursor-pointer mb-4 faqs' onClick={() => { handleShowingText('one') }}>What is a Combo in Lottery?</h4>
                                {faqs.one &&
                                    <p className='mb-4'>A Lotto Combo is like a ‘variety pack’ for lotteries. You can use them to enter several different lotto draws at the same time with one purchase.</p>}
                                <h4 className='cursor-pointer mb-4 faqs' onClick={() => handleShowingText('two')}>Are There Any Guranteed Lotto Winning Combinations</h4>
                                {faqs.two &&
                                    <p className='mb-4'>Lotto Combinations give you more chances to win a prize than a single standard game, but as lotto is a game of chance they do not guarantee a win.</p>}
                                <h4 className='cursor-pointer mb-4 faqs' onClick={() => handleShowingText('three')}>How many different Lotto Combos are at The Lottery Office?</h4>
                                {faqs.three &&
                                    <p className='mb-4'>Currently we offer 7 Lotto Combos. We review them all the time, so check back regularly to see if we’ve added any new Combos that you might like to play.</p>}
                                <h4 className='cursor-pointer mb-4 faqs' onClick={() => handleShowingText('four')}>Can You Buy Lotto Combo Online?</h4>
                                {faqs.four &&
                                    <p className='mb-4'>Yes, The Lottery Office gives all its players the opportunity to play its Lotto Combinations online. To be eligible to play with The Lottery Office, you need to be a resident of either Australia or New Zealand and be of at least 18 years of age.</p>}
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
export default Combo;