import React, { useState } from 'react';
import './DownloadApp.css';
import Header from '../Header';
import { Link } from 'react-router-dom';
import Footerr from '../Footerr';

const DownloadApp = () => {
    const [faqs, setFaqs] = useState({ one: true, two: true, three: true });

    const handleShowingText = (value) => {
        setFaqs((prevState) => ({
            ...prevState,
            [value]: !prevState[value]
        }))
    }

    return (
        <div className='container-fluid'>
            <Header />
            <div className='row position-relative'>
                <div className='background-image-container w-100'>
                    <div className='overlay-content w-100 d-flex align-items-center'>
                        <div className='col-12 col-md-10 mx-auto text-center text-light'>
                            <h4 className='text-light'>Our Lotto App is Your Chance in the World’s Biggest Lotteries</h4>
                            <h5 className='fs-6 mt-4 text-light'>With just a couple of taps on your phone, you can join in on international lotteries with massive jackpots up for grabs. Available for Android and iOS<br /><br />Download The Lottery Office App on the App Store or Google Play</h5>
                            <p className='text-light'>Click the icons below</p>
                            <div className='d-flex align-items-center justify-content-center mb-3'>
                                <img src='https://www.lotteryoffice.com.au/assets/icons/google-app-icon.svg?v=2' className='w-25 me-2' alt='Download App' />
                                <img src='https://www.lotteryoffice.com.au/assets/icons/apple-app-icon.svg' className='w-25' alt='Download App' />
                            </div>
                            <p className='text-light w-96 mx-auto opacity-50'>Apple, the Apple logo, iPhone, and iPad are trademarks of Apple Inc, registered in the U.S. and other countries and regions. Android is a trademark of Google LLC.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className='row'>
                <div className='col-12 col-md-11 mx-auto py-4 justify-content-start features '>
                    <h4 className='text-primay my-5'>Get our lotto app to win from overseas lottery draws</h4>
                    <div className='d-flex flex-column flex-md-row mt-4'>
                        <div className='col-12 col-md-4 p-3 left-part'>
                            <div className='d-flex align-items-start gap-3 justify-content-end'>
                                <h5>Instant updates on big draws</h5>
                                <img src='https://www.lotteryoffice.com.au/assets/images/app/icons/icon-left-1.svg' alt='Icon' />
                            </div>
                            <p>Check out all the jackpots on offer at a glance.</p>
                            <div className='d-flex align-items-start gap-3  justify-content-end'>
                                <h5>Safe and secure</h5>
                                <img src='https://www.lotteryoffice.com.au/assets/images/app/icons/icon-left-2.svg' alt='Icon' />
                            </div>
                            <p>Your lotto winnings and tickets are all safe inside our lotto app and linked to your personal account.</p>
                            <div className='d-flex align-items-start gap-3  justify-content-end'>
                                <h5>Lightning fast</h5>
                                <img src='https://www.lotteryoffice.com.au/assets/images/app/icons/icon-left-3.svg' alt='Icon' />
                            </div>
                            <p>Optimised for speed, our lotto app is the quickest way to access our unique lotteries.</p>
                        </div>
                        <div className='col-12 col-md-4 mx-auto'>
                            <img src='https://www.lotteryoffice.com.au/assets/images/app/Phone.jpg' alt='Phone' />
                        </div>
                        <div className='col-12 col-md-4 p-3 right-part'>
                            <div className='d-flex align-items-start play-option gap-3 '>
                                <img src='https://www.lotteryoffice.com.au/assets/images/app/icons/icon-right-2.svg' className='' alt='Icon' />
                                <h5>Save your favourite numbers</h5>
                            </div>
                            <p>Play your favourite numbers in an instant.</p>
                            <div className='d-flex align-items-start gap-3 '>
                                <img src='https://www.lotteryoffice.com.au/assets/images/app/icons/icon-right-3.svg' alt='Icon' />
                                <h5>Explore your account with ease</h5>
                            </div>
                            <p>Fast and easy access to all your past draws, tickets, winnings and account balance.</p>
                            <div className='d-flex align-items-start gap-3 '>
                                <img src='https://www.lotteryoffice.com.au/assets/images/app/icons/icon-results.svg' alt='Icon' />
                                <h5>Check latest results</h5>
                            </div>
                            <p>All your <Link to='/results' className='text-success'>lottery results in one place</Link>  We publish the latest results shortly after the draw and notify you of any winnings.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className='col-12 col-md-11 mx-auto play-options'>
                    <h4 className='text-primay mb-5'>Play to win with our exciting game options!</h4>
                    <div className='d-flex flex-column flex-md-row mt-4'>
                        <div className='col-12 col-md-3 mx-auto'>
                            <h5>Play <Link to='/syndicates' className='text-success fs-6'>Syndicates</Link> for more chances to win</h5>
                            <img src='	https://www.lotteryoffice.com.au/assets/images/app/app-3.png' alt='Lottery office' />
                        </div>
                        <div className='col-12 col-md-3 mx-auto'>
                            <h5>Play <Link to='/combo' className='text-success fs-6'>Combos</Link> with the potential to win billions!</h5>
                            <img src='https://www.lotteryoffice.com.au/assets/images/app/app-1.png' alt='Lottery office' />
                        </div>
                        <div className='col-12 col-md-3 mx-auto'>
                            <h5>Multiply non-jackpot wins up to 10 times!</h5>
                            <img src='https://www.lotteryoffice.com.au/assets/images/app/app-2.png' alt='Lottery office' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className='col-12 col-md-11 mx-auto app-in-australia p-5 rounded'>
                    <h4>What do our players say about the best lotto app in Australia?</h4>
                    <div className='row mt-4 row-cols-1 row-cols-md-3 g-4'>

                        <div className='col mx-auto '>
                            <div className='p-2 rounded bg-light feature-card'>
                                <div className='d-flex'>
                                    {Array.from({ length: 5 }, (_, index) => (
                                        <i key={index} className="bi bi-star-fill text-warning m-0 fs-4"></i>
                                    ))}
                                </div>
                                <div className='d-flex'>
                                    <h4>McCodswollop</h4>
                                    <p>12/12/2023</p>
                                </div>
                                <h5>Legit and Australian owned.</h5>
                                <p>Easy to use app gives you access to worldwide lotteries. I’ve also found the staff to be helpful and friendly. Definitely recommend</p>
                            </div>
                        </div>

                        <div className='col mx-auto '>
                            <div className='p-2 feature-card rounded bg-light'>
                                <div className='d-flex'>
                                    {Array.from({ length: 5 }, (_, index) => (
                                        <i key={index} className="bi bi-star-fill text-warning m-0 fs-4"></i>
                                    ))}
                                </div>
                                <div className='d-flex'>
                                    <h4>Camo_78</h4>
                                    <p>1/10/2023</p>
                                </div>
                                <h5>App is easy to use & has a lot of features.</h5>
                                <p>Had some questions about lotto systems & support team got back to me straight away.</p>
                            </div>
                        </div>

                        <div className='col mx-auto '>
                            <div className='p-2 rounded bg-light feature-card'>
                                <div className='d-flex'>
                                    {Array.from({ length: 5 }, (_, index) => (
                                        <i key={index} className="bi bi-star-fill text-warning m-0 fs-4"></i>
                                    ))}
                                </div>
                                <div className='d-flex'>
                                    <h4>Paul</h4>
                                    <p>21/9/2023</p>
                                </div>
                                <h5>Customer service is phenomenal - </h5>
                                <p>The ability to punt on overseas lottery is a welcome addition to any punters portfolio. We all know the chance of winning is extremely low but as they say you have to be in it to win it.</p>
                            </div>
                        </div>

                        <div className='col mx-auto'>
                            <div className='p-2 rounded bg-light feature-card'>
                                <div className='d-flex'>
                                    {Array.from({ length: 5 }, (_, index) => (
                                        <i key={index} className="bi bi-star-fill text-warning m-0 fs-4"></i>
                                    ))}
                                </div>
                                <div className='d-flex'>
                                    <h4>Fabienne Bidaut</h4>
                                    <p>17/01/2022</p>
                                </div>
                                <h5></h5>
                                <p>This is the best lotto app for android, I find it much easier to use than the lott app</p>
                            </div>
                        </div>

                        <div className='col mx-auto'>
                            <div className='p-2 rounded bg-light feature-card'>
                                <div className='d-flex'>
                                    {Array.from({ length: 5 }, (_, index) => (
                                        <i key={index} className="bi bi-star-fill text-warning m-0 fs-4"></i>
                                    ))}
                                </div>
                                <div className='d-flex'>
                                    <h4>AUkeving</h4>
                                    <p>16/06/2021</p>
                                </div>
                                <h5>Great App!</h5>
                                <p>Very easy to use, and a great way to get access into the big lotteries overseas. Highly recommended!</p>
                            </div>
                        </div>

                        <div className='col mx-auto'>
                            <div className='p-2 rounded bg-light feature-card'>
                                <div className='d-flex'>
                                    {Array.from({ length: 5 }, (_, index) => (
                                        <i key={index} className="bi bi-star-fill text-warning m-0 fs-4"></i>
                                    ))}
                                </div>
                                <div className='d-flex'>
                                    <h4>Tyler.B.W</h4>
                                    <p>14/05/2021</p>
                                </div>
                                <h5>Easy as</h5>
                                <p>Great app, easy as. Love the security from the lottery office</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className='row'>
                <div className='col-10 col-md-8 mx-auto d-flex flex-column flex-md-row my-5 align-items-center'>
                    <div>
                        <img src='https://www.lotteryoffice.com.au/assets/images/app/download-app-cta.png' className='w-96' alt='Download app' />
                    </div>
                    <div>
                        <h3>Download our lotto app now</h3>
                        <p>Click the icons below</p>
                        <div className='d-flex align-items-center justify-content-center mb-3'>
                            <img src='https://www.lotteryoffice.com.au/assets/icons/google-app-icon.svg?v=2' className='w-32 me-2 cursor-pointer' alt='Download App' />
                            <img src='https://www.lotteryoffice.com.au/assets/icons/apple-app-icon.svg' className='w-32 cursor-pointer' alt='Download App' />
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
                            <h4 className="mb-4">How to download our lotto app</h4>
                            <p className='border-left-custom'>Available for both Android and iOS users, our lotto app is not just any application; it's your personal ticket to the biggest lottery draws around the world!</p>
                            <p>
                                Imagine sitting in your living room in Australia and participating in a gigantic lottery draw happening across the oceans – our app makes this possible!<br /><br />
                                Are you ready to dive into the thrilling game of global lotteries from right here in Australia? All it takes are 3 easy steps.
                            </p>
                            <div className='d-flex mt-4 gap-5 user'>
                                <div>
                                    <h5 className='fs-6'>For Apple Users</h5>
                                    <li>Visit the App Store.</li>
                                    <li>Type 'The Lottery Office App' in the search bar.</li>
                                    <li>Click 'Get', then 'Install', and you're all set! </li>
                                </div>
                                <div>
                                    <h5 className='fs-6'>For Android Users</h5>
                                    <li>Head to the Google Play Store.</li>
                                    <li>Search for 'The Lottery Office App'.</li>
                                    <li>Hit 'Install' and have fun!</li>
                                </div>
                            </div>
                            <h5 className='fs-6 mt-4'>So, what are you waiting for?</h5>
                            <h5 className='fs-6'>Download our lotto app today!</h5>
                        </div>
                    </div>
                </div>

                <div className='col-12 col-md-11 mx-auto my-5'>
                    <div className='d-flex flex-column flex-md-row align-items-start'>
                        <div className='col-12 col-md-2 mx-auto'>
                            <img src='https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-2.svg' className='w-42 mx-auto' alt='lottery information' />
                        </div>
                        <div className="col-12 col-md-10 mx-auto left_border p-2">
                            <h4 className="mb-4">How to use our lotto app</h4>
                            <p className='border-left-custom'>We've designed our lotto app to be super user-friendly. So, whether you're a seasoned pro or a newbie, playing on our app is a walk in the park.</p>

                            <li><b>Sign In or Sign Up:
                            </b>Jump right in by signing in with your existing account. Don't have one? No worries! You can sign up using your email or conveniently through your Google, Facebook, or Apple account. We've got all the options covered for you!</li>
                            <li><b>Fill in Your Details: </b>
                                We'll need just a bit of info to set up your account. It's quick and easy, we promise! </li>
                            <li><b>Explore our lotteries: </b>
                                Head over to the ‘All Lotteries’ section where a world of excitement awaits. Our 8 overseas matched lotteries are sure to keep the thrill alive!</li>
                            <li><b>Choose How to Play: </b>
                                Found a lottery you like? Great! Now, it's time to pick your numbers. Whether you're feeling lucky with a quick play or want to select your own lucky numbers, the choice is yours. We're all about making it fun and personalized for you.</li>
                            <li><b>Seamless Checkout: </b>
                                When you're ready, head to the checkout. We offer a variety of payment options to suit your convenience.</li>
                            <li><b>Check the results: </b>
                                Don't miss out on the excitement! Check the results directly on our lotto app. Who knows, the next big winner could be you!</li>
                        </div>
                    </div>
                </div>

                <div className='col-12 col-md-11 mx-auto my-5'>
                    <div className='d-flex flex-column flex-md-row align-items-start'>
                        <div className='col-12 col-md-2 mx-auto'>
                            <img src='https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-1.svg' className='w-42 mx-auto' alt='lottery information' />
                        </div>
                        <div className="col-12 col-md-10 mx-auto left_border p-2">
                            <h4 className="mb-4">More ways to play, more chances to win!                                </h4>
                            <li>Syndicates</li>
                            <li>Combos</li>
                            <li>Multiplier feature</li>
                            <li>The 'Joker'</li>
                            <p className='border-left-custom'>Looking to ramp up the fun when playing our lotteries? Consider joining a Syndicate right in the app, where you can collaborate with other players and join in on more games, all without stretching your budget.</p>
                            <p>Or you can spice up your game by <Link to='/combo'>trying out Combos</Link> , allowing you to play multiple lotteries at once – the next big win could be just a tap away!<br /><br />
                                Plus, if you're after a bit more excitement (and even MORE money if you win), our multiplier feature is perfect for increasing your non-jackpot prizes!<br /><br />
                                If you're a <Link to='/play'>La Primitiva Lotto fan</Link>, you can enjoy an exciting game called the 'Joker' alongside the lottery. It offers you the opportunity to win fantastic prizes, including up to $1.6 Million AUD! To participate, just choose 'yes' for the 'Joker' option, and a unique 7-digit number will be automatically generated and added to your ticket. This number will then be entered into a raffle with seven guaranteed prize categories.<br /><br />
                                All these features and more are available in our lotto app. </p>
                        </div>
                    </div>
                </div>

                <div className='col-12 col-md-11 mx-auto my-5'>
                    <div className='d-flex flex-column flex-md-row align-items-start'>
                        <div className='col-12 col-md-2 mx-auto'>
                            <img src='https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-4.svg' className='w-42 mx-auto' alt='lottery information' />
                        </div>
                        <div className="col-12 col-md-10 mx-auto left_border p-2">
                            <h4 className="mb-4">Why our lotto app is a game-changer</h4>
                            <p className='border-left-custom'>Does a lotto app that not only simplifies your lottery experience but also adds a personal touch to it sound ideal to you? Lucky for you, our app is precisely that – a unique combination of user-friendly design and customizable features that cater to every kind of lottery enthusiast!</p>
                            <p>Whether you're in for a quick game or eager to check if luck's been on your side, our app is intuitively designed for ease of use. What's more, it respects your personal preferences.<br /><br />
                                Remember those lucky numbers that you believe in? Our lotto app lets you save them, so they're ready for you whenever you feel that lucky streak coming on.</p>
                        </div>
                    </div>
                </div>

                <div className='col-12 col-md-11 mx-auto my-5'>
                    <div className='d-flex flex-column flex-md-row align-items-start'>
                        <div className='col-12 col-md-2 mx-auto'>
                            <img src='	https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-5.svg' className='w-42 mx-auto' alt='lottery information' />
                        </div>
                        <div className="col-12 col-md-10 mx-auto left_border p-2">
                            <h4 className="mb-4">How to view your entries in our lotto app</h4>
                            <p className='border-left-custom'>To access your entries in our Lotto App, begin by tapping on the icon featuring three horizontal lines. Next, navigate to the 'My Draws' option by clicking on it. This will allow you to conveniently view and manage your lottery entries within the app.</p>
                            <p>This feature not only allows you to conveniently review your entries but also provides real-time updates on whether you've won or lost, provided that the results have been announced.</p>
                        </div>
                    </div>
                </div>

                <div className='col-12 col-md-11 mx-auto my-5'>
                    <div className='d-flex flex-column flex-md-row align-items-start'>
                        <div className='col-12 col-md-2 mx-auto'>
                            <img src='https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-6.svg' className='w-42 mx-auto' alt='lottery information' />
                        </div>
                        <div className="col-12 col-md-10 mx-auto left_border p-2">
                            <h4 className="mb-4">How to play your favourite numbers</h4>
                            <p className='border-left-custom'>Playing your favorite numbers is easy. Start by selecting the lottery you want to play from the 'All Lotteries' Page. You'll then have three options to pick from:</p>
                            <li>Quick Play</li>
                            <li>Choose Numbers</li>
                            <li>Favorites</li>
                            <p>If you have a set of numbers you want to use frequently or save as favorites, click on the Favorites bar, hit 'Add,' and enter your preferred numbers.<br /><br />
                                Alternatively, you can choose 'Select Numbers' and enter the numbers you feel like using at that moment. Quick Play automatically generates random numbers for you.</p>
                        </div>
                    </div>
                </div>

                <div className='col-12 col-md-11 mx-auto my-5'>
                    <div className='d-flex flex-column flex-md-row align-items-start'>
                        <div className='col-12 col-md-2 mx-auto'>
                            <img src='https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-7.svg' className='w-42 mx-auto' alt='lottery information' />
                        </div>
                        <div className="col-12 col-md-10 mx-auto left_border p-2">
                            <h4 className="mb-4">What lotteries are available to play on our lotto app</h4>
                            <li>USA Mega Lotto</li>
                            <li>Usa Power Lotto</li>
                            <li>Italian Super Jackpot</li>
                            <li>European Jackpot</li>
                            <li>La Primitva</li>
                            <li>European Millions</li>
                            <li>UK Lotto</li>
                            <li>Irish Lotto</li>
                            <p className='border-left-custom'>Our Lotto App offers a wide selection of overseas matched lotteries for you to enjoy, bringing the excitement of international jackpots right to your fingertips. With just a few taps on your phone or from the comfort of your own bed, you can participate in some of the most renowned lotteries from around the world.</p>
                            <p>Whether you dream of hitting the massive jackpots of the USA Mega Lotto or USA Power Lotto, or prefer the allure of the Italian Super Jackpot, European Jackpot, La Primitiva, European Millions, UK Lotto, or Irish Lotto, we have them all available for you.<br /><br />
                                No need to travel overseas or stand in long lines – our Lotto App makes it easy for you to join the fun and try your luck in these exciting international lotteries, right here in Australia or New Zealand.</p>
                        </div>
                    </div>
                </div>

                <div className='col-12 col-md-11 mx-auto my-5'>
                    <div className='d-flex flex-column flex-md-row align-items-start'>
                        <div className='col-12 col-md-2 mx-auto'>
                            <img src='	https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-9.svg' className='w-42 mx-auto' alt='lottery information' />
                        </div>
                        <div className="col-12 col-md-10 mx-auto left_border p-2">
                            <h4 className="mb-4">Frequently Asked Questions</h4>
                            <h4 className='cursor-pointer mb-4 faqs' onClick={() => { handleShowingText('one') }}>How to claim winnings on lotto app</h4>
                            {faqs.one &&
                                <p className='mb-4'>Winnings above $10,000 require a phone call within two business days for payout arrangement and identity verification; they're noted in 'My Draws' and not automatically credited. Winnings under $10,000 are instantly credited to your account, with withdrawals available through bank transfer, PayID, or PayPal, provided your identity is verified and the account is in your name and country of residence.</p>}
                            <h4 className='cursor-pointer mb-4 faqs' onClick={() => handleShowingText('two')}>Which lotto app is best</h4>
                            {faqs.two &&
                                <p className='mb-4'>Choosing the best lotto app depends on user-friendliness and features such as preferred number saving, combo options, and access to large international jackpots from Australia, all of which The Lottery Office offers. It stands out by combining convenience with exclusive access to global lotteries.</p>}
                            <h4 className='cursor-pointer mb-4 faqs' onClick={() => handleShowingText('three')}>Is the lotto app is secure?</h4>
                            {faqs.three &&
                                <p className='mb-4'>Your security is very important to us. The same high level security technology that is applied to our website is also applied to our app.
                                    <br /><br />
                                    For further information regarding Security, please go to our .<Link to='/'>Privacy Policy</Link></p>}
                        </div>
                    </div>
                </div>
            </div>

            <div className='row mx-auto '>
                <div className='col-12 col-md-10 mx-auto mb-5 rounded app-help d-flex flex-column flex-md-row justify-content-center text-center align-items-center p-3'>
                    <div>
                        <img src='https://www.lotteryoffice.com.au/assets/images/app/help-icon.svg' className='w-40' alt='App-help' />
                    </div>
                    <div>
                        <h4>Need some help with The Lottery Office App?</h4>
                        <button type='button' className='button btn mt-2' onClick={() => document.location.href = '/contact'}>Contact Support</button>
                    </div>
                </div>
            </div>

            <div className='row'>
                <Footerr />
            </div>
        </div>

    )
}
export default DownloadApp;