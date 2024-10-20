import React, { useEffect, useState } from 'react';
import './Homee.css';
import Header from '../Header';
import appBanner from '../images/app_banner.jpg';
import winner from '../images/winner.jpg';
import news from '../images/news.jpg';
import govt_regulated from '../images/govt-regulated-strip.svg';
import payment_strip from '../images/payment-strip.svg';
import { Link } from 'react-router-dom';
import Footerr from '../Footerr';
import fetchLotteries from '../../LotteryData/LotteryData';

const Homee = () => {
  const [activeLink, setActiveLink] = useState(0);
  const [showtext, setShowText] = useState({ first: false, second: false, third: false, fourth: false, fifth: false, sixth: false });
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
  
  

  const handleShowDetailedText = (item) => {
    setShowText((prev) => ({
      ...prev,
      [item]: !prev[item]
    }))
  }

  const handleActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <>
      <div className='container-fluid text-light'>
        <Header />
        <div className='row'>
          <img src={appBanner} alt='App Banner' className='mt-3 rounded w-100 p-0 m-0' />
        </div>
        {/* <div className='col-12 mx-auto'>
              <img src='https://www.lotteryoffice.com.au/assets/images/lottery-logos/euromillions.png' alt='lottery logo' />;
            </div> */}
        <div className='row lotteries p-5 text-center'>
          <h4 className='text-light'>Australia's ticket to the world's largest official lotteries online</h4>
          <div className='col-12 col-md-6 mx-auto countriesLottery rounded-pill d-flex p-0'>
            <h5 className={activeLink === 0 ? 'active-on-home' : ''} onClick={() => handleActiveLink(0)}>All Lotteries</h5>
            <h5 className={activeLink === 1 ? 'active-on-home' : ''} onClick={() => handleActiveLink(1)}>Usa Lotteries</h5>
            <h5 className={activeLink === 2 ? 'active-on-home' : ''} onClick={() => handleActiveLink(2)}>Euro Lotteries</h5>
          </div>



          <div className='row mt-5'>
            {activeLink === 0 &&
              lotteriesData.map((value, index) => (
                <div key={index} className='col-12 col-md-4 d-flex justify-content-center mb-4'>
                  <div className='carts text-center bg-light rounded text-black' onClick={() => document.location.href = '/play'}>
                    <img src={value.image} alt='Logo' className='img-fluid ms-5' />
                    <h4>{value.countryName}</h4>
                    <h1>${value.pirce}</h1>
                    <button className='rounded-pill w-50'>Play now</button>
                    <p>Closes in: {value.closeTime}</p>
                  </div>
                </div>
              ))
            }
          </div>

          <div className='row'>
            {activeLink === 1 &&
              lotteriesData.filter(ticket => ticket.catgory === "USA").map((value, index) => (
                <div key={index} className='col-12 col-md-4 d-flex justify-content-center mb-4'>
                  <div className='carts text-center bg-light rounded text-black' onClick={() => document.location.href = '/play'}>
                    <img src={value.image} alt='Logo' className='img-fluid ms-5' />
                    <h4>{value.countryName}</h4>
                    <h1>${value.pirce}</h1>
                    <button className='rounded-pill w-50'>Play now</button>
                    <p>Closes in: {value.closeTime}</p>
                  </div>
                </div>
              ))
            }
          </div>

          <div className='row'>
            {activeLink === 2 &&
              lotteriesData.filter(ticket => ticket.catgory === "Euro").map((value, index) => (
                <div key={index} className='col-12 col-md-4 d-flex justify-content-center mb-4'>
                  <div className='carts text-center bg-light rounded text-black' onClick={() => document.location.href = '/play'}>
                    <img src={value.image} alt='Logo' className='img-fluid ms-5' />
                    <h4>{value.countryName}</h4>
                    <h1>${value.pirce}</h1>
                    <button className='rounded-pill w-50'>Play now</button>
                    <p>Closes in: {value.closeTime}</p>
                  </div>
                </div>
              ))
            }
          </div>


          <p className='text mb-0 mt-5 text-light'>Note, all jackpots above are displayed in Australian Dollars.</p>
          <p className='text'>Jackpot values are converted daily therefore prize value may fluctuate depending on the daily conversion rate.</p>
        </div>


        <div className='latest_results mb-5'>
          <h4>Latest Results</h4>
          <p className='text'>Find results from the latest draws</p>
          <div className='col-12 col-md-10 mx-auto bg-light results'>

            <div className='col-12 mx-auto p-3 d-flex flex-column flex-md-row align-items-center justify-content-between cursor-pointer'>
              <div className='col-12 col-md-4 d-flex pb-col-3 justify-content-start align-items-start text-center'>
                <img src='https://www.lotteryoffice.com.au/assets/images/lottery-logos/la-primitiva.png' alt='logo' className='text-align-start' />
                <div className='text-start ms-2'>
                  <h4>La Primitiva</h4>
                  <p className='mb-0'>18-June-2024</p>
                </div>
              </div>
              <div className='col-12 col-md-5 mx-auto result_numbers d-flex'>
                <p>2</p>
                <p>08</p>
                <p>12</p>
                <p>16</p>
                <p>22</p>
                <p>43</p>
                <p className='bg-black'>35</p>
                <p className='bg-primary'>08</p>
              </div>
              <div className=' view_link'>
                <Link to='/results'>View results</Link>
              </div>
            </div>

            <div className='col-12 mx-auto p-3 d-flex flex-column flex-md-row align-items-center justify-content-between cursor-pointer bgColor'>
              <div className='col-12 col-md-4 d-flex justify-content-start align-items-start text-center'>
                <img src='https://www.lotteryoffice.com.au/assets/images/lottery-logos/us-powerball.png' alt='logo' />
                <div className='text-start ms-2'>
                  <h4>USA Power Lotto</h4>
                  <p className='mb-0'>18-June-2024</p>
                </div>
              </div>
              <div className='col-12 col-md-5 mx-auto result_numbers d-flex'>
                <p>5</p>
                <p>9</p>
                <p>18</p>
                <p>32</p>
                <p>44</p>
                <p>58</p>
                <p className='bg-black'>34</p>
              </div>
              <div className='view_link'>
                <Link to='/results'>View results</Link>
              </div>
            </div>


            <div className='col-12 mx-auto p-3 d-flex flex-column flex-md-row align-items-center justify-content-between cursor-pointer '>
              <div className='col-12 col-md-4 d-flex justify-content-start align-items-start text-center'>
                <img src='https://www.lotteryoffice.com.au/assets/images/lottery-logos/uk-lotto.png' alt='logo' />
                <div className='text-start ms-2'>
                  <h4>UK Lotto</h4>
                  <p className='mb-0'>18-June-2024</p>
                </div>
              </div>
              <div className='col-12 col-md-5 mx-auto result_numbers d-flex'>
                <p>2</p>
                <p>08</p>
                <p>12</p>
                <p>16</p>
                <p>22</p>
                <p>43</p>
                <p className='bg-black'>35</p>
              </div>
              <div className='view_link'>
                <Link to='/results'>View results</Link>
              </div>
            </div>

            <div className='col-12 mx-auto p-3 d-flex flex-column flex-md-row align-items-center justify-content-between cursor-pointer bgColor'>
              <div className='col-12 col-md-4 d-flex justify-content-start align-items-start text-center'>
                <img src='https://www.lotteryoffice.com.au/assets/images/lottery-logos/la-primitiva.png' alt='logo' />
                <div className='text-start ms-2'>
                  <h4>La Primitiva</h4>
                  <p className='mb-0'>18-June-2024</p>
                </div>
              </div>
              <div className='col-12 col-md-5 mx-auto result_numbers d-flex'>
                <p>6</p>
                <p>9</p>
                <p>11</p>
                <p>13</p>
                <p>21</p>
                <p>34</p>
                <p className='bg-black'>41</p>
              </div>
              <div className='view_link'>
                <Link to='/results'>View results</Link>
              </div>
            </div>

            <div className='col-12 mx-auto p-3 d-flex flex-column flex-md-row align-items-center justify-content-between cursor-pointer '>
              <div className='col-12 col-md-4 d-flex justify-content-start align-items-start text-center'>
                <img src='https://www.lotteryoffice.com.au/assets/images/lottery-logos/irish-lotto.png' alt='logo' />
                <div className='text-start ms-2'>
                  <h4>Irish Lotto</h4>
                  <p className='mb-0'>18-June-2024</p>
                </div>
              </div>
              <div className='col-12 col-md-5 mx-auto result_numbers d-flex'>
                <p>2</p>
                <p>08</p>
                <p>12</p>
                <p>16</p>
                <p>22</p>
                <p className='bg-primary'>43</p>
                <p className='bg-primary'>35</p>
              </div>
              <div className='view_link'>
                <Link to='/results'>View results</Link>
              </div>
            </div>

            <div className='col-12 mx-auto p-3 d-flex flex-column flex-md-row align-items-center justify-content-between cursor-pointer bgColorLast bgColor'>
              <div className='col-12 col-md-4 d-flex  justify-content-start align-items-start text-center'>
                <img src='https://www.lotteryoffice.com.au/assets/images/lottery-logos/superenalotto.png' alt='logo' />
                <div className='text-start ms-2'>
                  <h4>Italian Super Jackpot</h4>
                  <p className='mb-0'>18-June-2024</p>
                </div>
              </div>
              <div className='col-12 col-md-5 mx-auto result_numbers d-flex'>
                <p>2</p>
                <p>08</p>
                <p>12</p>
                <p>16</p>
                <p>35</p>
                <p className='bg-primary'>08</p>
              </div>
              <div className='view_link'>
                <Link to='/results'>View results</Link>
              </div>
            </div>
          </div>
        </div>
        <div className='container-fluid row bg-light mt-4'>
          <div className='col-12 mx-auto winners p-0 m-0'>
            <h3>Recent major winners</h3>
            <div className='row mx-auto d-flex flex-wrap justify-content-between mb-4'>
              <div onClick={() => window.location.href = "/winners"} className='col-12 col-md-3 mx-auto winner_carts text-black'>
                <img src={winner} alt="Lottery Winner" />
                <div className='p-2'>
                  <p>April 2024</p>
                  <h5>VIC WINNER: Lucky Life Path Number Leads to $47,116 win!</h5>
                  <button className='w-50 p-2 rounded-pill'>Read more</button>
                </div>
              </div>
              <div onClick={() => window.location.href = "/winners"} className='col-12 col-md-3 mx-auto winner_carts text-black'>
                <img src={winner} alt="Lottery Winner" />
                <div className='p-2'>
                  <p>April 2024</p>
                  <h5>VIC WINNER: Lucky Life Path Number Leads to $47,116 win!</h5>
                  <button className='w-50 p-2 rounded-pill'>Read more</button>
                </div>
              </div>
              <div onClick={() => window.location.href = "/winners"} className='col-12 col-md-3 mx-auto winner_carts text-black'>
                <img src={winner} alt="Lottery Winner" />
                <div className='p-2'>
                  <p>April 2024</p>
                  <h5>VIC WINNER: Lucky Life Path Number Leads to $47,116 win!</h5>
                  <button className='w-50 p-2 rounded-pill'>Read more</button>
                </div>
              </div>
              <div onClick={() => window.location.href = "/winners"} className='col-12 col-md-3 mx-auto winner_carts text-black'>
                <img src={winner} alt="Lottery Winner" />
                <div className='p-2'>
                  <p>April 2024</p>
                  <h5>VIC WINNER: Lucky Life Path Number Leads to $47,116 win!</h5>
                  <button className='w-50 p-2 rounded-pill'>Read more</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='container-fluid row bg-light mt-4'>
          <div className='col-12 mx-auto winners p-0 m-0'>
            <h3>Lottery Office news</h3>
            <div className='row mx-auto d-flex flex-wrap justify-content-between mb-4'>
              <div onClick={() => window.location.href = "/magzine"} className='col-12 col-md-3 mx-auto winner_carts text-black'>
                <img src={news} alt="news" />
                <div className='px-1'>
                  <p>news.com.au,28 April 2024</p>
                  <h5>Aussies given chance at $738 million USA Mega Lotto draw</h5>
                  <button className='w-50 p-2  rounded-pill'>Read more</button>
                </div>
              </div>
              <div onClick={() => window.location.href = "/magzine"} className='col-12 col-md-3 mx-auto winner_carts text-black'>
                <img src={news} alt="Lottery Winner" />
                <div className='px-1'>
                  <p>news.com.au,10 May, 2024</p>
                  <h5>Luckiest winning Lotto numbers have been revealed ahead of $503 million draw</h5>
                  <button className='w-50 p-2 rounded-pill'>Read more</button>
                </div>
              </div>
              <div onClick={() => window.location.href = "/magzine"} className='col-12 col-md-3 mx-auto winner_carts text-black'>
                <img src={news} alt="Lottery Winner" />
                <div className='px-1'>
                  <p>news.com.au,10 May, 2024</p>
                  <h5>Luckiest winning Lotto numbers have been revealed ahead of $503 million draw</h5>
                  <button className='w-50 p-2  rounded-pill'>Read more</button>
                </div>
              </div>
              <div onClick={() => window.location.href = "/magzine"} className='col-12 col-md-3 mx-auto winner_carts text-black'>
                <img src={news} alt="Lottery Winner" />
                <div className='px-1'>
                  <p>news.com.au,10 May, 2024</p>
                  <h5>Luckiest winning Lotto numbers have been revealed ahead of $503 million draw</h5>
                  <button className='w-50 p-2  rounded-pill'>Read more</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='row p-4 lotterySystem'>
          <div className='d-flex flex-column'>
            <div className='col-12 d-flex flex-column flex-md-row cursor-default align-items-start mt-5'>
              <img src='https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-1.svg' className='w-40 mx-auto' alt='lottery information' />
              <div className='col-12 col-md-9 mx-auto text-black text ps-3 lottery_information'>
                <h5>Welcome to The Lottery Office</h5>
                <p>The Lottery Office is the best way for Aussies and Kiwis to play for the biggest jackpots on the planet.</p>
                <p>We offer players the chance to enter lotto draws with prizes that can’t be equalled by conventional Australian lotteries. Not only are our jackpots amongst the largest on earth, we’re also a wholly Australian-owned and operated company, licensed by the Northern Territory government.</p>
                <p>The Lottery Office – Australia’s ticket to the world’s largest official lotteries online.</p>
              </div>
            </div>

            <div className='col-12 d-flex flex-column flex-md-row cursor-default text-align-left align-items-start mt-4'>
              <img src='https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-1.svg' className='w-40 mx-auto' alt='lottery information' />
              <div className='col-12 col-md-9 mx-auto text-black text ps-3 lottery_information '>
                <h5>How It Works</h5>
                <p>It’s easy!.</p>
                <p>For each entry you buy in one of our proprietary lotteries, we buy a ticket in an equivalent overseas lottery. The overseas lottery has the same jackpot and rules as our lottery and we use the same numbers you selected when you bought your entry.</p>
                <p>Once the overseas lottery draw has taken place, we gather any prizes that were won from our overseas ticket. <br />We then promptly pay you a prize in the winning ticket you bought in our matching lottery. This is identical to the amount that we won on the overseas ticket.</p>
                <p>This innovative approach allows our players to access jackpots identical to those in giant overseas lotto draws, while still playing Australian, government-licensed lotteries right here.</p>
              </div>
            </div>

            <div className='col-12 d-flex flex-column flex-md-row cursor-default text-align-left align-items-start mt-4'>
              <img src='https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-3.svg' className='w-40 mx-auto' alt='lottery information' />
              <div className='col-12 col-md-9 mx-auto text-black text ps-3 lottery_information'>
                <h5>Exclusive Lotto Draws</h5>
                <p>The Lottery Office has 8 original lotteries that you won’t find anywhere else.</p>
                <p>Each is matched with a lottery overseas, as seen below:</p>
                <table className='w-100'>
                  <tr className='table_header'>
                    <th className='tableBgColor'>The Lottery Office Lottery</th>
                    <th className='tableBgColor' style={{ background: '#38a4d0', color: 'white' }}>Matching Overseas Lottery</th>
                    <th className='tableBgColor w-80'>Key Features</th>
                  </tr>
                  <tr>
                    <th>USA Power Lotto</th>
                    <th>Powerball (USA)</th>
                    <th >Largest ever jackpot at AUD$2.95 billion</th>
                  </tr>
                  <tr>
                    <th>USA Mega Lotto</th>
                    <th>Mega Millions (USA)</th>
                    <th>AUD$2.4 billion jackpot reached August 2023</th>
                  </tr>
                  <tr>
                    <th>European Millions</th>
                    <th>EuroMillions (Europe)</th>
                    <th>Max AUD$400 million jackpot, 13 prize divisions</th>
                  </tr>
                  <tr>
                    <th>European Jackpot</th>
                    <th>Eurojackpot (Europe)</th>
                    <th>Max AUD$195 million jackpot, 12 prize divisions</th>
                  </tr>
                  <tr>
                    <th>Italian Super Jackpot</th>
                    <th>SuperEnalotto (Italy)</th>
                    <th>Europe’s largest ever jackpot at AUD$575 million</th>
                  </tr>
                  <tr>
                    <th>La Primitiva</th>
                    <th>Spain's "La Primitiva"</th>
                    <th>“Joker” side game & our most affordable tickets</th>
                  </tr>
                  <tr>
                    <th>UK Lotto</th>
                    <th>UK National Lottery's "Lotto"</th>
                    <th>Free game for matching just 2 numbers</th>
                  </tr>
                  <tr>
                    <th>Irish Lotto</th>
                    <th>Irish National Lottery's "Lotto"</th>
                    <th>“Must be won” draws; jackpot could be won by div 2 or 3</th>
                  </tr>
                </table>
                <p className='mt-3'>Our lotteries have between 2 and 4 draws each week, giving you plenty of chances to enter.<br /> We will be adding more games in the future, so keep an eye out.</p>
                <p>Some matched overseas lotteries incur taxes for major prizes. When we collect these prizes, the taxes are withheld by the relevant government. All prizes are tax-free in Australia and New Zealand.<br /> Read more in our<Link to='/contact'>Guide to lottery taxes.</Link> </p>
              </div>
            </div>

            <div className='col-12 d-flex flex-column flex-md-row cursor-default align-items-start mt-4'>
              <img src='https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-1.svg' className='w-40 mx-auto' alt='lottery information' />
              <div className='col-12 col-md-9 mx-auto text-black text ps-3 lottery_information'>
                <h5>Easy Sign-Up Process</h5>
                <p>It’s super quick and easy to sign up and start playing at The Lottery Office.</p>
                <p>Simply go to our <Link to='/signup'>sign up page</Link>  to create your free account with us, and the fun can begin straight away. You can sign up using your email address or your Google, Facebook or Apple account.</p>
                <p>Alternatively you can sign up and play on your iOS or Android device with our free Lottery Office app, available for easy download on our <Link to='/app'>Lottery Office App Page</Link></p>
                <p>To play lotto with The Lottery Office, you must be at least 18 years of age and a resident of either Australia or New Zealand.</p>
              </div>
            </div>
            <div className='col-12 d-flex flex-column flex-md-row cursor-default align-items-start mt-4'>
              <img src='https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-1.svg' className='w-40 mx-auto' alt='lottery information' />
              <div className='col-12 col-md-9 mx-auto text-black text ps-3 lottery_information'>
                <h5>The Lottery Office Advantage</h5>
                <p>With a growing selection of lotto providers popping up, why should players choose The Lottery Office?</p>
                <p>We are the premier suppliers of Aussie-owned online lottery. Our unique games come with other-worldly jackpots and it’s normal for us to have at least one prize available worth hundreds of millions.</p>
                <p>While some competitors may offer some similar jackpots, we have no stake from foreign-owned companies or entities.</p>
                <p>Most of our games also have special features, such as free chances at extra prizes (Italian Super jackpot) and the Multiplier, which can enhance non-jackpot prizes by up to 10 times their normal size for USA Power Lotto and 5 times for USA Mega Lotto.</p>
                <p>More conventional Australian lotto providers are great but they can’t offer what we can; the chance to win from the draws of world-record breaking lotteries!</p>
              </div>
            </div>
            <div className='col-12 d-flex flex-column flex-md-row cursor-default align-items-start mt-4'>
              <img src='https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-1.svg' className='w-40 mx-auto' alt='lottery information' />
              <div className='col-12 col-md-9 mx-auto text-black text ps-3 lottery_information'>
                <h5>Australian through and through</h5>
                <p>The Lottery Office is for Australians, by Australians.</p>
                <p>As well as being licensed by the Northern Territory government, we are Australian owned and based.</p>
                <p>Our main office is in Darwin and we have a service office on Queensland’s Gold Coast.</p>
                <p>We regularly give to Australian charities and community groups across Australia through The Lottery Office Charity Fund.</p>
                <p>We are the primary partner of the Gold Coast Titans NRL club for season 2024 and beyond.</p>
                <p>We also happily offer our services to our cousins from across the ditch in New Zealand. Kiwis are welcome to sign up and play the same unique lotteries that we offer to Australians.</p>
              </div>
            </div>
            <div className='col-12 d-flex flex-column flex-md-row cursor-default align-items-start mt-4'>
              <img src='https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-1.svg' className='w-40 mx-auto' alt='lottery information' />
              <div className='col-12 col-md-9 mx-auto text-black text ps-3 lottery_information'>
                <h5>How The Lottery Office Changed Lotto in Australia</h5>
                <p>Since 2003 our team has worked in the international lottery industry.</p>
                <p>Back then snail mail was the standard. We had a mail order lotteries licence and operated a selection of lottery products globally through the post.</p>
                <p>We obtained an internet gaming licence in 2014 and The Lottery Office was born!</p>
                <p>Our website was first launched with the aim of selling lottery overseas. In 2018 the decision was made to change the website to sell exclusive lotteries to Australians and New Zealanders.</p>
                <p>We were the first licensed and wholly Australian online lotto provider to give players the chance to win from overseas draws such as the infamous US Powerball and EuroMillions.</p>
                <p>The Lottery Office has since cemented itself as Australia’s go-to service for players who want to play for the biggest prizes on the planet.</p>
              </div>
            </div>

            <div className='col-12 d-flex flex-column flex-md-row cursor-default align-items-start mt-4'>
              <img src='https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-1.svg' className='w-40 mx-auto' alt='lottery information' />
              <div className='col-12 col-md-9 mx-auto text-black text ps-3 lottery_information'>
                <h5>Customer Support Excellence</h5>
                <p>The Lottery Office Customer Support team is fully located in Australia and is committed to making your experience with us as user-friendly as possible.<br />Our team can be reached Monday to Friday between 9am and 5pm (AEST) on Live Chat and <br />
                  <Link to='/contact'>Facebook Messenger</Link></p>
                <p>If you wish to speak with a team member you can request a callback at a time and day that suits you, or you can send us an email at <br />
                  <Link to='/about'>support@lotteryoffice.com.au</Link></p>
                <p>You can also check out our extensive collection of <Link to='/faqs'>Frequently Asked Questions</Link>  to find the answers you’re looking for.</p>
                <p>Visit our <Link to='/contact'>Contact us</Link> page for more information.</p>
              </div>
            </div>

            <div className='col-12 d-flex flex-column flex-md-row cursor-default align-items-start mt-4'>
              <img src='https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-1.svg' className='w-40 mx-auto' alt='lottery information' />
              <div className='col-12 col-md-9 mx-auto text-black text ps-3 lottery_information'>
                <h5>Responsible Gambling</h5>
                <p>We take our responsible gambling obligations very seriously at The Lottery Office.</p>
                <p>You should only ever spend what you can afford to lose. We do not encourage our players to spend beyond their means and we have several features in place to help players limit their spending.</p>
                <p>Our “Take a break” option suspends players’ ability to buy lotto games or deposit funds with us, for a chosen amount of time. You can still log in and browse your Lottery Office account, including previous ticket purchases.</p>
                <p>We also enforce weekly spending limits. This can be set by you, or you can keep it at the default setting. Once your weekly spend limit has been reached, you will be alerted and prevented from making a purchase or a funds deposit into your Lottery Office account.</p>
                <p>Players are able to close their Lottery Office account at any time by logging in and selecting one of our close account options. Alternatively, you can <Link to='/contact'>Contact Customer Support</Link> to close your account, or to request permanent self-exclusion from our service.</p>
                <p>All players must be of at least 18 years of age. If our sign-up process cannot verify your age within 14 days, you will be required to provide identification to complete such verification.</p>
              </div>
            </div>

            <div className='col-12 d-flex flex-column flex-md-row cursor-default align-items-start mt-4'>
              <img src='https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-1.svg' className='w-40 mx-auto' alt='lottery information' />
              <div className='col-12 col-md-9 mx-auto text-black text ps-3 lottery_information'>
                <h5>Ready to Win with The Lottery Office?</h5>
                <p>Now you know all there is to know about The Lottery Office, Australia’s ticket to the world’s largest official lotteries online!</p>
                <p>Will you be the next to win big with us? <Link to='/signup'>Sign up</Link> and play today!</p>
              </div>
            </div>
          </div>
        </div>

        <div className='row mt-4'>
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

        <div className='row mt-4'>
          <div className='col-12 mx-auto paymentMethod p-4 align-items-center justify-content-center text-center'>
            <div className='col-12 col-md-6  mx-auto'>
              <h4 className='mt-4'>Official Sponsors & Partners</h4>
              <div className='col  d-flex sponsered_images mx-auto'>
                <img src='https://www.lotteryoffice.com.au/Assets/images/footer/sponsors/sponsor-titans.svg' alt='logo' />
                <img src='	https://www.lotteryoffice.com.au/assets/images/footer/sponsors/sponsor-schf.svg' alt='logo' />
                <img src='https://www.lotteryoffice.com.au/assets/images/footer/sponsors/sponsor-gchf.svg' alt='logo' />
                <img src='	https://www.lotteryoffice.com.au/assets/images/footer/sponsors/sponsor-top-blokes.svg' alt='logo' />
              </div>
            </div>
          </div>
        </div>

        <div className='row footer_section mb-5'>
          <div className='d-flex justify-content-between cursor-pointer py-3 px-5' onClick={() => { handleShowDetailedText('first') }}>
            <h4>How do I Contact The Lottery Office?</h4>
            {showtext.first === false ? (
              <i className="bi bi-caret-down-fill" />
            ) : (
              <i className="bi bi-caret-up-fill" />
            )}
          </div>
          {
            showtext.first && (
              <div className='px-5'>
                <p>You can call our local Customer Support team on (07) 2111 8242, email us at <Link to='/about'>support@lotteryoffice.com.au</Link> , or chat with us on Live Chat or Facebook Messenger. For all details, please visit our <Link to='/contact'>Contact Us page</Link>.</p>
              </div>
            )
          }
          <hr />

          <div className='d-flex justify-content-between cursor-pointer py-3 px-5' onClick={() => { handleShowDetailedText('second') }}>
            <h4>Are online lotteries safe?</h4>
            {
              showtext.second === false ? (
                <i className='bi bi-caret-down-fill' />
              ) : (
                <i className='bi bi-caret-up-fill' />
              )
            }
          </div>
          {showtext.second &&
            <div className='px-5'>
              <p>The Lottery Office takes your online security very seriously. Our site is protected by 256 bit encryption and our activities are closely audited by the Northern Territory Government. We follow strict responsible gambling policies.</p>
            </div>
          }
          <hr />
          <div className='d-flex justify-content-between cursor-pointer py-3 px-5' onClick={() => { handleShowDetailedText('third') }}>
            <h4>Has anyone in Australia won an overseas lottery?</h4>
            {
              showtext.third === false ? (
                <i className='bi bi-caret-down-fill' />
              ) : (
                <i className='bi bi-caret-up-fill' />
              )
            }
          </div>
          {showtext.third &&
            <div className='px-5'>
              <p>Buying a resold ticket in an overseas lottery can be risky. Some prevent payout of jackpots from overseas players who bought resold tickets. Our players can confidently enter our own government licensed lotteries, matched to overseas lottery draws.</p>
            </div>
          }
          <hr />
          <div className='d-flex justify-content-between cursor-pointer py-3 px-5' onClick={() => { handleShowDetailedText('fourth') }}>
            <h4>Are the jackpots advertised in Australian Dollars?</h4>
            {
              showtext.fourth === false ? (
                <i className='bi bi-caret-down-fill' />
              ) : (
                <i className='bi bi-caret-up-fill' />
              )
            }
          </div>
          {showtext.fourth &&
            <div className='px-5'>
              <p>Yes, all our lotteries displayed on our website are converted daily, and displayed in Australian Dollars. The jackpot value displayed is regularly updated therefore the prize value may fluctuate depending on the days conversion rate.</p>
            </div>
          }

          <hr />
          <div className='d-flex justify-content-between cursor-pointer py-3 px-5' onClick={() => { handleShowDetailedText('fifth') }}>
            <h4>The Lott vs The Lottery Office - What's the difference?</h4>
            {
              showtext.fifth === false ? (
                <i className='bi bi-caret-down-fill' />
              ) : (
                <i className='bi bi-caret-up-fill' />
              )
            }
          </div>
          {showtext.fifth &&
            <div className='px-5'>
              <p>The Lott sells traditional Australian lotteries. The Lottery Office sells tickets into their own government-approved lotteries, then purchases matching tickets in relevant overseas lotteries, such as the US Mega Millions.
                Both The Lott and the Lottery Office are Australian owned and licensed.</p>
            </div>
          }

          <hr />
          <div className='d-flex justify-content-between cursor-pointer py-3 px-5' onClick={() => { handleShowDetailedText('sixth') }}>
            <h4>Which lottery has the best chance of winning?</h4>
            {
              showtext.sixth === false ? (
                <i className='bi bi-caret-down-fill' />
              ) : (
                <i className='bi bi-caret-up-fill' />
              )
            }
          </div>
          {showtext.sixth &&
            <div className='px-5'>
              <p>The Irish Lotto is the easiest lottery to win at The Lottery Office.</p>
            </div>
          }

        </div>

      </div>
      <Footerr />
    </>
  )
}

export default Homee;