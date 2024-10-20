import React, { useState } from 'react';
import './Pay_In_Store.css';
import Header from '../Header';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Link } from 'react-router-dom';
import Footerr from '../Footerr';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: -33.8688,
  lng: 151.2093
};

const Pay_In_Store = () => {
    const [faqs, setFaqs] = useState({ one: true, two: true, three: true});

    const handleShowingText = (value) => {
        setFaqs((prevState) => ({
            ...prevState,
            [value]: !prevState[value]
        }))
    }

    return (
        <div className='container-fluid'>
            <Header />
            <div className="row">

                <div className="col-12 col-md-10 mx-auto text-center mt-3 align-items-center lotterySystem">
                    <h3 className="text-primary">‘Lotto Near Me’ Pay In-Store Locator</h3>
                    <h4>Deposit money into your lotto account in-store!</h4>
                    <p>Our players can now choose to Pay In-Store to deposit funds at participating newsagencies. Try our ‘lotto near me’ Pay In-Store Locator to find your nearest Lottery Office partner newsagency. Simply enter your address below and we’ll direct you to our closest partner stores.</p>
                    <input type="text" placeholder="Enter an address" className="w-100 p-3 rounded border-2" />
                    <div className="map my-3">
                        <LoadScript googleMapsApiKey="API-KEY">
                            <GoogleMap
                                mapContainerStyle={containerStyle}
                                center={center}
                                zoom={10}>
                                <Marker position={center} />
                            </GoogleMap>
                        </LoadScript>
                    </div>
                    <div className='d-flex gap-3 align-items-center justify-content-center mt-4'>
                        <button className='button btn btn-syndicates' onClick={()=>document.location.href='/login'}>Add Funds</button>
                        <button className='button btn' onClick={()=>document.location.href='/contact'}>Need Help?</button>
                    </div>
                </div>

                <div className='row lotterySystem'>
                <div className='col-12 col-md-11 mx-auto my-4'>
                    <div className='d-flex flex-column flex-md-row align-items-start'>
                        <div className='col-12 col-md-2 mx-auto'>
                            <img src='https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-1.svg' className='w-42 mx-auto' alt='lottery information' />
                        </div>
                        <div className="col-12 col-md-10 mx-auto left_border p-2">
                            <h4 className="mb-4">Don’t Want to Deposit Your Lottery Money Online? Deposit In-Store Instead!</h4>
                            <p className='border-left-custom'>If you’re the kind of lotto player that would prefer not to enter their personal payment details over the internet, then our Pay In-Store option could be what you’re looking for.</p>
                            <p>We’ve partnered with a network of over 1500 Australian newsagents to bring this option to our players.<br/><br/>Paying in-store lets you deposit funds into your Lottery Office account at the cash register, using any of the usual payment methods you’d normally use in a retail shop, including cash. The newsagency staff will accept your payment, and your funds will instantly appear in your Lottery Office Account, ready for you to start playing our exclusive lotteries.<br/><br/>Once your funds have been deposited you can start playing lotto immediately with the Lottery Office App, which lets players enter our lotteries at any time or place that suits them.<br/><br/>The Pay In-Store option uses technology engineered by Australian company blueshyft.<br/><br/>The Pay In-Store option is currently only available at participating Australian newsagencies and is not available in New Zealand.</p>
                        </div>
                    </div>
                </div>

                <div className='col-12 col-md-11 mx-auto my-4'>
                    <div className='d-flex flex-column flex-md-row align-items-start'>
                        <div className='col-12 col-md-2 mx-auto'>
                            <img src='https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-2.svg' className='w-42 mx-auto' alt='lottery information' />
                        </div>
                        <div className="col-12 col-md-10 mx-auto left_border p-2">
                            <h4 className="mb-4">Use Our 'Lotto Near Me' Pay In-Store Locator to Find Partner Outlets</h4>
                            <p className='border-left-custom'>Are you looking to find a Pay In-Store retailer to deposit funds into your Lottery Office account? Our ‘Lotto Near Me’ locator will help you find the Pay In-store outlet closest to you. All you need to do is enter your location’s address into the ‘Enter an address’ box near the top of this screen. Click on the address to confirm it, and then the map will show you all the participating Pay In-Store newsagencies near you.</p>
                            <p>Each one will be shown on the map by a small Lottery Office logo pin. Simple click on one to find the address of the newsagency. If you then click on ‘Get Directions’, it will show you the travel route you need to follow to get there. If you’ve decided to find a ‘lotto shop near me’, we’ve got you covered. Easy!</p>
                        </div>
                    </div>
                </div>

                <div className='col-12 col-md-11 mx-auto my-4'>
                    <div className='d-flex flex-column flex-md-row align-items-start'>
                        <div className='col-12 col-md-2 mx-auto'>
                            <img src='https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-1.svg' className='w-42 mx-auto' alt='lottery information' />
                        </div>
                        <div className="col-12 col-md-10 mx-auto left_border p-2">
                            <h4 className="mb-4">Sign Up In-Store</h4>
                            <p className='border-left-custom'>To start playing lotto with The Lottery Office, you have a few options.</p>
                            <p>Signing to play with us is simple and straight forward, but if you would prefer to have someone walk through the sign-up process in person, you can sign up at one of our participating Pay In-Store locations. If you’re not sure where you can sign-up in-store, you can use the ‘Lotto Near Me’ Pay In-Store locator at the top of this page to find the closest partner store to you. The staff will assist you in creating your account, and while you’re in the shop it’s easy to deposit funds into your account so that you can begin playing right away.<br/><br/>For players that don’t need help creating an account, you can download our free <Link to='/app'>Lottery Office App</Link> for Android and iOS devices from the App page on our website. Alternatively, the app can be downloaded directly from <Link to='/app'>Google Play</Link> or the <Link to='/app'>App Store</Link> .
                            <br/><br/>Our sign-up process is easy and user-friendly, but should you have any issues, please contact our <Link to='/contact'>Australia-based Customer Suppert</Link>  for help and they’ll be only too happy to assist you.
                            <br/><br/>It’s free to sign up for an account with The Lottery Office. Please note that all players must be at least 18 years of age and must be a resident of either Australia or New Zealand.<br/><br/>We are licensed by the Northern Territory Government of Australia and are audited continuously in accordance with our licence.</p>
                        </div>
                    </div>
                </div>

                <div className='col-12 col-md-11 mx-auto my-4'>
                    <div className='d-flex flex-column flex-md-row align-items-start'>
                        <div className='col-12 col-md-2 mx-auto'>
                            <img src='	https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-4.svg' className='w-42 mx-auto' alt='lottery information' />
                        </div>
                        <div className="col-12 col-md-10 mx-auto left_border p-2">
                            <h4 className="mb-4">How Your Local Newsagency Benefits When You Pay In-Store</h4>
                            <p className='border-left-custom'>When you sign up or deposit funds in-store, not only are you giving yourself the chance to play and win from some of the biggest lotteries in the world, but you’re also helping your local newsagent out, too!</p>
                            <p>By signing up with The Lottery Office at your local participating Pay In-Store retailer, we pay them a sign-up bonus as a thankyou gift for referring players to us.<br/><br/>And not only that, but for the next three years, each time you go on to purchase tickets in our exclusive lotteries, we pay the newsagency you signed up with another bonus!<br/><br/>There’s more. Even if you didn’t sign up with us in-store, and you choose to make a Pay In-Store deposit at a participating newsagency, that store gets a bonus from us, too.<br/><br/>At The Lottery Office we understand that the best way for local businesses to thrive is for them to support one another. As a wholly Australian-owned and Australian-operated company, we proudly advocate for local business, and put our money where our mouth is when doing so.<br/><br/>If you wish to work with us to support your local newsagent, while playing extraordinary lotteries at the same time, use our ‘Lotto Near Me’ Pay In-Store locator at the top of the page to find a retailer near you.</p>
                        </div>
                    </div>
                </div>

                <div className='col-12 col-md-11 mx-auto my-4'>
                    <div className='d-flex flex-column flex-md-row align-items-start'>
                        <div className='col-12 col-md-2 mx-auto'>
                            <img src='https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-5.svg' className='w-42 mx-auto' alt='lottery information' />
                        </div>
                        <div className="col-12 col-md-10 mx-auto left_border p-2">
                            <h4 className="mb-4">Who Else Benefits When You Play With The Lottery Office?</h4>
                            <p className='border-left-custom'>It’s not just newsagents who can benefit when you deposit funds with The Lottery Office.</p>
                            <p>Each time you then go on to play with us, you’re contributing to community initiatives that aim to make life better for everyday Australians. We donate a percentage of all ticket sales to the Lottery Office Charitable and Community Benefits Fund.<br/><br/>This purpose of this fund is to distribute donations to various Australian charitable organisations. Through our fund we’ve donated to the following charities, amongst many, many other others:</p>
                            <li className='mt-4'>Meals on Wheels Queensland</li>
                            <li>Friends of the Koala</li>
                            <li>Australian Street Aid Project</li>
                            <li>NSW Rural Fire service</li>
                            <p className='mt-4'>Check out <Link to='/charity'>The Lottery Office Charity Fund page</Link> to find out more about our donations and charity work.</p>
                        </div>
                    </div>
                </div>

                <div className='col-12 col-md-11 mx-auto my-4'>
                    <div className='d-flex flex-column flex-md-row align-items-start'>
                        <div className='col-12 col-md-2 mx-auto'>
                            <img src='https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-2.svg' className='w-42 mx-auto' alt='lottery information' />
                        </div>
                        <div className="col-12 col-md-10 mx-auto left_border p-2">
                            <h4 className="mb-4">How Can Local Newsagencies Join Forces With The Lottery Office?</h4>
                            <p className='border-left-custom'>Do you own a newsagency and think you might like to team up with The Lottery Office and blueshyft to give locals near you more choice when they play the lottery?</p>
                            <p>Do you like the idea of an additional and ongoing income stream from a 100% Australian owned and operated company?<br/><br/>If you think your customers might like to open a Lottery Office account and deposit funds in your store, we’d love to have you on board!<br/><br/>Newsagency owners can apply to work with the Lottery Office by visiting the blueshyft website and submitting an application online. Your application will be reviewed and you’ll be contacted directly for any updates or clarifications. Once you have been approved, your newsagency will be provided with a free iPad to run the blueshyft platform and for customers to use to sign up and deposit funds into their Lottery Office account. The Lottery Office can provide you with free promotional material to let your customers know about the amazing and unique products we can offer them.<br/><br/>Partnering with The Lottery Office is an easy way for local bricks and mortar retailers to connect with an up-and-coming Aussie owned online company in an arrangement that benefits everyone involved.</p>
                        </div>
                    </div>
                </div>

                <div className='col-12 col-md-11 mx-auto my-4'>
                    <div className='d-flex flex-column flex-md-row align-items-start'>
                        <div className='col-12 col-md-2 mx-auto'>
                            <img src='https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-9.svg' className='w-42 mx-auto' alt='lottery information' />
                        </div>
                        <div className="col-12 col-md-10 mx-auto left_border p-2">
                            <h4 className="mb-4">‘Lotto Near Me’ Pay In-Store Locator FAQs
                            </h4>
                            <h4 className='cursor-pointer mb-4 faqs' onClick={() => { handleShowingText('one') }}>How does the Lotto Near My Pay In-Store Locator Work?</h4>
                            {faqs.one &&
                                <p className='mb-4'>It uses the address you enter to find the nearest newsagency where you can open a free Lottery Office Account or deposit funds so you can start playing lottery with us.</p>}
                            <h4 className='cursor-pointer mb-4 faqs' onClick={() => handleShowingText('two')}>How to Find a Lotto Shop Near Me?</h4>
                            {faqs.two &&
                                <p className='mb-4'>To find a participating newsagency near you, simply enter your address into the at the top of this page. It will show any participating stores near you. Clicking on the store’s location pin will show you the store’s address.</p>}
                            <h4 className='cursor-pointer mb-4 faqs' onClick={() => handleShowingText('three')}>Who can Pay In-Store?</h4>
                            {faqs.three &&
                                <p className='mb-4'>If you’re an Australian or New Zealand resident and are at least 18 years of age, you can sign up for free and/or deposit funds in-store.</p>}
                        </div>
                    </div>
                </div>
                </div>

                <Footerr />
            </div>
        </div>
    )
}

export default Pay_In_Store;
