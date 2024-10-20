import React, { useState } from 'react'
import Header from '../Header';
import './Pay_In_Store.css';
import { Link } from 'react-router-dom';
import Footerr from '../Footerr';

const Charity = () => {
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
            <div className='row'>

                <div className='charity-page'>
                    <div className='col-12 col-md-10 mx-auto justify-content-center align-items-center text-center p-4'>
                        <img src='https://www.lotteryoffice.com.au/Assets/images/charity/charity-logo.png?v=2' className='mx-auto mb-3' alt='Charity-Banner' />
                        <h2>Aussie Charity: Lottery Office Gives Back</h2>
                        <p>With The Lottery Office Charity Fund</p>
                        <img src='	https://www.lotteryoffice.com.au/Assets/images/charity/charity-cheque.png?v=1' className='mx-auto' alt='Charity-Banner' />
                    </div>
                </div>

                <div className='charity-banner'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-6 offset-md-6 text-md-end'>
                                <h1>Thank You For Playing With Us</h1>
                                <p>Every time you buy a ticket you are supporting Australian Charities</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row featured-donations'>
                    <div className='col-12 col-md-11 mx-auto justify-content-center align-items-center text-center p-4'>
                        <h3 className='text-primary'>Featured Donations</h3>
                        <div className='row my-4'>
                            <div className='col-12 col-md-4 my-2'>
                                <div className='d-flex p-3 rounded featured-card'>
                                    <img src='https://blog.lotteryoffice.com.au/wp-content/uploads/2024/06/Lions-Cancer-logo.jpg' className='w-25 h-25' alt='Logo' />
                                    <div className='text-start ms-3'>
                                        <h4>$5,000</h4>
                                        <h5>NT - Lions Cancer Institute</h5>
                                        <p>May 2024</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-4 my-2'>
                                <div className='d-flex p-3 rounded featured-card'>
                                    <img src='https://blog.lotteryoffice.com.au/wp-content/uploads/2024/06/Top_Blokes.jpg' className='w-25 h-25' alt='Logo' />
                                    <div className='text-start ms-3'>
                                        <h4>$20,000</h4>
                                        <h5>QID - Top Blokes | Logans Legacy</h5>
                                        <p>June 2024</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-4 my-2'>
                                <div className='d-flex p-3 rounded featured-card'>
                                    <img src='https://blog.lotteryoffice.com.au/wp-content/uploads/2024/06/GchFoundation.png' className='w-25 h-25' alt='Logo' />
                                    <div className='text-start ms-3'>
                                        <h4>Abdul's Experience</h4>
                                        <h5>QID - Gold Coast Hospital Foundation</h5>
                                        <p>June 2024</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-4 my-2'>
                                <div className='d-flex p-3 rounded featured-card'>
                                    <img src='https://blog.lotteryoffice.com.au/wp-content/uploads/2024/03/NAFT.jpg' className='w-25 h-25' alt='Logo' />
                                    <div className='text-st ms-3art'>
                                        <h4>50,000</h4>
                                        <h5>NAFT - Never Alone, Fight Together</h5>
                                        <p>March 2024</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-4 my-2'>
                                <div className='d-flex p-3 rounded featured-card'>
                                    <img src='	https://blog.lotteryoffice.com.au/wp-content/uploads/2024/04/StreetAid.png' className='w-25 h-25' alt='Logo' />
                                    <div className='text-start ms-3'>
                                        <h4>25,000</h4>
                                        <h5>QID - Australian Street Aid Project</h5>
                                        <p>Februray 2024</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-4 my-2'>
                                <div className='d-flex p-3 rounded featured-card'>
                                    <img src='https://blog.lotteryoffice.com.au/wp-content/uploads/2024/06/GchFoundation.png' className='w-25 h-25' alt='Logo' />
                                    <div className='text-start ms-3'>
                                        <h4>Volunteer Day</h4>
                                        <h5>Gold Coast Hospital Foundation</h5>
                                        <p>Februray 2024</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button className='button btn'>See more</button>
                    </div>
                </div>

                <div className='row p-4'>
                    <h2 className='text-center mt-3 w-75 mx-auto fs-4'>We've decided to give back to our community through the establishment of The Lottery Office Charity Fund</h2>
                    <img src='https://www.lotteryoffice.com.au/Assets/images/charity/promo-banner.jpg' className='w-75 mx-auto' alt='Charity Fund' />
                </div>

                <div className='text-center p-4 funding'>
                    <h2 className='text-light'>Apply For Funding</h2>
                    <div className='col-10 mx-auto bg-light p-3 p-md-5 mt-3 rounded'>
                        <p>To find out more about The Lottery Office Charitable and Community Benefits Fund and how you can apply for funding for a charitable organisation or project, please contact us today.</p>
                        <button className='button btn' onClick={() => document.location.href = '/contact'}>Contact us</button>
                    </div>
                </div>

                <div className='row lotterySystem my-4'>

                    <div className='col-12 col-md-11 mx-auto my-4'>
                        <div className='d-flex flex-column flex-md-row align-items-start'>
                            <div className='col-12 col-md-2 mx-auto'>
                                <img src='https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-1.svg' className='w-42 mx-auto' alt='lottery information' />
                            </div>
                            <div className="col-12 col-md-10 mx-auto left_border p-2">
                                <h4 className="mb-4">The Lottery Office Charity Fund</h4>
                                <p className='border-left-custom'>The Lottery Office regularly gives to local Australian charities and community groups. As an Australian owned and operated company, we love to see local communities thrive! Passionate about charity, Lottery Office takes social responsibility seriously. We love paying it forward. When you play with us, not only do you get the chance to win millions, but you’re supporting Australian charities, too.</p>
                                <p>Since The Lottery Office launched in late 2018, The Lottery Office Charity Fund (otherwise known as ‘The Lottery Office Charitable and Community Benefits Fund’) has worked to bring about real change for Australians in need of a helping hand. Working with an ever-growing list of charities and community groups, the purpose of the fund is to provide relief and assistance to those that need it.<br /><br />We are proud to regularly donate to great causes and love seeing what can be achieved when we work together with Australian charities.<br /><br /> You can even contact us to nominate a charity you’d like us to partner with; <Link to='/contact'>Contact</Link> and we’ll get back to you as soon as possible.<br /><br />We’re excited to see what the future holds and look forward to continuing to make a real difference in the lives of as many people as possible.<br /><br />100% of the proceeds contributed to The Lottery Office Charity Fund are donated to Australian charities and public interest funds.<br /><br />We are grateful to our players and hope that they realise the good work they help us carryout when they play for purpose with The Lottery Office.</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-11 mx-auto my-4'>
                        <div className='d-flex flex-column flex-md-row align-items-start'>
                            <div className='col-12 col-md-2 mx-auto'>
                                <img src='https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-2.svg' className='w-42 mx-auto' alt='lottery information' />
                            </div>
                            <div className="col-12 col-md-10 mx-auto left_border p-2">
                                <h4 className="mb-4">How Does The Lottery Office’s Charity Fund Work?</h4>
                                <p className='border-left-custom'>The Lottery Office does not operate a specific charity lottery. Rather, we operate a suite of exclusive and boutique Australian Government licensed lotteries.</p>
                                <p>Our lotteries are matched with big-time lotteries overseas, such as the US Mega Millions (when you buy a ticket in our USA Mega Lotto) and the SuperEnalotto (when you buy a ticket in our Italian Super Jackpot).<br /><br />When you buy a ticket in one of our lotteries, we purchase a ticket with the same numbers in the equivalent lottery draw overseas. If the ticket in the draw overseas wins a prize, we collect the prize, and then we pay the same amount of prize money to you. We do not charge any fees or commissions, and all winnings are free of Australian taxes.<br /><br />Each time that you purchase a ticket with us, we contribute a percentage of the ticket sale price to The Lottery Office Charity Fund. The fund periodically makes altruistic contributions to charities that may not normally get the funding that they need to operate.<br /><br />The more you play with us, the more that gets contributed to the charity fund. The more that gets contributed to the fund, the more that can be donated to charity and the more Australians benefit.<br /><br />A heartfelt thank you to all our players for your contribution to a better Australia.</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-11 mx-auto my-4'>
                        <div className='d-flex flex-column flex-md-row align-items-start'>
                            <div className='col-12 col-md-2 mx-auto'>
                                <img src='https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-1.svg' className='w-42 mx-auto' alt='lottery information' />
                            </div>
                            <div className="col-12 col-md-10 mx-auto left_border p-2">
                                <h4 className="mb-4">Why Does the Lottery Office Donate to Charity?</h4>
                                <p className='border-left-custom'>The Lottery Office does not operate a specific charity lottery. Rather, we operate a suite of exclusive and boutique Australian Government licensed lotteries.</p>
                                <p>As an Australian owned and operated company, our team feels a strong sense of belonging amongst our local communities. We feel a responsibility to the society in which we live. We recognise the importance of the work carried out by charities and realise how vital it is to holding the fabric of our society together. Without their efforts, a lot of people would find themselves in considerable difficulty, and we want to do our bit to help.<br /><br />Often not eligible for Government funding, many charities rely on donations as their main source of income. As a result, many cannot provide the breadth of services they wish to. That’s where we come in. We aim to alleviate as much financial pressure as we can, for as many charities as we can.<br /><br />Working closely with the charities we donate to, we get to see first-hand the positive impacts that can come with supporting those in need.<br /><br />Our customer would be thrilled to see the change they’re helping to create when they play for purpose with us!<br /><br />Aside from financial assistance, our team also participates in activities to support philanthropic organisations, such as working at the Animal Welfare League of Queensland and purchasing and delivering goods to Vinnies for them to distribute.<br /><br />We are more determined than ever to continue supporting organisations that need all the help they can get and are so important to our communities Australia-wide.</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-11 mx-auto my-4'>
                        <div className='d-flex flex-column flex-md-row align-items-start'>
                            <div className='col-12 col-md-2 mx-auto'>
                                <img src='	https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-4.svg' className='w-42 mx-auto' alt='lottery information' />
                            </div>
                            <div className="col-12 col-md-10 mx-auto left_border p-2">
                                <h4 className="mb-4">Who Benefits from Our Charity Fund?</h4>
                                <p className='border-left-custom'>We support Australian charities of all stripes and don’t hold any bias or agenda towards who we donate to and who we don’t. The main criteria we use to decide who we donate to is simply, ‘Does the organisation help those that need help’? and, ‘Do they need a hand to achieve their goals in the community?’</p>
                                <p>As a result we’ve donated to a diverse mixture of charities, from those that fight bushfires, to those that help injured koalas, to those that assist the homeless.<br /><br />We pledge to continue working with Aussie non-profit organisations whose purpose is to make a real difference in the lives of those who need it.</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-11 mx-auto my-4'>
                        <div className='d-flex flex-column flex-md-row align-items-start'>
                            <div className='col-12 col-md-2 mx-auto'>
                                <img src='https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-5.svg' className='w-42 mx-auto' alt='lottery information' />
                            </div>
                            <div className="col-12 col-md-10 mx-auto left_border p-2">
                                <h4 className="mb-4">Stories from our Charity: Lottery Office Gives Back</h4>
                                <p className='border-left-custom'>The Lottery Office Charity fund regularly donates to many Australian good causes. Passionate about charity Lottery Office is proud to make a difference in the lives of those who need a hand.</p>
                                <p>Read about a small selection of our previous donations below.</p>
                                <h4>Partnership With Royal Flying Doctor Service Takes Flight</h4>
                                <p>The Royal Flying Doctor Service (RFDS) was given a major boost to their vital work in regional and rural Australia, with a significant donation from The Lottery Office Charity Fund.<br /><br />A total of $65,000 was committed to support this invaluable organisation by sponsoring the 2022 Outback Air Race, the largest single donation provided by The Lottery Office’s charity to date.<br /><br />The RFDS provides a crucial lifeline between rural communities and critical care services, treating 370,706 patients in 2019; however, private funding is essential as demand for the service grows. The Lottery Office CEO Jaclyn Wood said the partnership with the RFDS will help support families and communities living in isolation.<br /><br />“Our organisation has a proud history of regularly donating a portion of profits to Australian charities, having donated more than $1,000,000 to 43 different charities over the last three years; however, the RFDS partnership will be our largest,” Ms Wood said.</p>
                                <p>“The RFDS is an essential health service that our rural communities depend on, so we are honoured to be able to assist in any way we can.<br /><br />“As an Australian owned lottery provider, we want to help a great Australian legacy like RFDS continue.” The Outback Air Race is the RFDS fundraising event that occurs every three years. It is a time trial providing a navigationally challenging, self-funded flying holiday for domestic and international pilots. Starting in Darwin, Northern Territory and ending in Coffs Harbour, New South Wales, the 13-day course has nine stopovers in some of the key communities that the RFDS supports, whilst giving pilots the opportunity to view Australia from a different perspective.</p>
                                <h4>Cando Cancer Trust Benefits from Charity Lottery Office Donation</h4>
                                <p>The Coffs Coast Clarence Cando Cancer Trust has been in operation since 2009. It was started by a passionate group of retired health workers from the North Coast Cancer Institute and supported by the Coffs Coast Freemasons. They had seen first-hand the incredible toll cancer can take on sufferers and their families and decided to do what they could to ease their burdens.<br /><br />They selflessly started the not-for-profit organisation to financially support cancer sufferers enduring treatment for cancer at one of the North Coast Cancer Institute locations at Coffs Harbour, Lismore and Port Macquarie.<br /><br />They offer this support to patients who might need help with their costs of living expenses, such as food, utilities, rent, transport costs and any medical costs they might have. Since the trust was founded, it has contributed approximately $500,000 towards supporting cancer sufferers in need. So far over 1,200 patients and their families have received assistance, with an average of 120 new patients being helped each year it has been in operation.<br /><br />With COVID-19 pandemic lockdowns and restrictions in place it has been difficult to carry out fundraising activities, and as a result many functions were cancelled. This had a devastating effect on the trust’s ability to generate capital and support cancer patients. Since the worst of the pandemic is now behind us, the trust plans to continue its mission with a particular focus on the indigenous population in Nambucca Valley. There is a great need to financial assistance in this region, and there are a lot of low-income cancer patient in the community.<br /><br />The Lottery Office donated $10,000 to give the initiative a boost. This provided direct support to 10 new cancer patients and their families.<br /><br />The Lottery Office’s CEO, Jaclyn Wood, says, “COVID restrictions have put a hold on fundraising activities but patients battling cancer have not stopped and the process of getting treatment is incredibly expensive,”<br /><br />“We are pleased to know that our donation will be life changing for families doing it tough and provide some relief to their situation.”</p>
                                <h4>AWLQ Works With The Lottery Office Work to Help Animals in Need</h4>
                                <p>The Lottery Office team spent a day volunteering with The Animal Welfare League of Queensland (AWLQ), at their Coombabah Rehoming Centre.<br /><br />Since 1959 the AWLQ has fought for the best interests of animals that are unable to do so for themselves.
                                    <br /><br />They provide food, shelter and medical treatment to all animals surrendered to their care and operate an adoption service to rehome them.<br /><br />A pillar of their operation is their work to de-sex as many animals as possible. Often their vets spend an entire day performing only de-sexing procedures. This is an expensive exercise. De-sexing is so important as it greatly reduces the instances of unwanted and dumped pets.<br /><br />The AWLQ receives no Government funding and relies heavily on sponsorships, donations, bequests, grants and community support. It also operates op-shops to generate much-needed funds while helping the community at the same time.<br /><br />As well as staff from The Lottery Office taking part in volunteer work, The Lottery Office Charity Fund made a donation to the AWLQ.<br /><br />As a team of pet owners and animal lovers, we are forever grateful for the invaluable work done by the AWLQ and its volunteers. If you wish to donate your time or money to help this amazing organisation, or if you wish to consider giving a pet their forever home,<Link to='/'>visit the AWLQ website.</Link></p>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-11 mx-auto my-4'>
                        <div className='d-flex flex-column flex-md-row align-items-start'>
                            <div className='col-12 col-md-2 mx-auto'>
                                <img src='https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-5.svg' className='w-42 mx-auto' alt='lottery information' />
                            </div>
                            <div className="col-12 col-md-10 mx-auto left_border p-2">
                                <h4 className="mb-4">The Lottery Office Charity Fund</h4>
                                <p className='border-left-custom'>Is there a charity that’s helped you or someone you care about that needs some help? Perhaps there’s one you’re passionate about that is doing what it can to make a difference and is struggling to get the funding it needs.</p>
                                <p>If you know of any worthy charities you’d love to see us donate to, please, get in touch with us! We’re always on the lookout for good causes that need some relief. While we can’t donate to them all, we really do try our best to contribute to the most effective humanitarian, animal and environmental causes.<br /><br />
                                    If you know of a charity Lottery Office can work with please contact us below.</p>
                                <button className='button btn' onClick={() => document.location.href = '/contact'}>Contact us</button>
                            </div>
                        </div>
                    </div>

                    <div className='col-12 col-md-11 mx-auto my-4'>
                        <div className='d-flex flex-column flex-md-row align-items-start'>
                            <div className='col-12 col-md-2 mx-auto'>
                                <img src='https://www.lotteryoffice.com.au/Assets/images/syndicates/syndicates-faq-7.svg' className='w-42 mx-auto' alt='lottery information' />
                            </div>
                            <div className="col-12 col-md-10 mx-auto left_border p-2">
                                <h4 className="mb-4">Charity Lottery FAQs
                                </h4>
                                <h4 className='cursor-pointer mb-4 ' onClick={() => { handleShowingText('one') }}>Does Lotto Give to Charity?</h4>
                                {faqs.one &&
                                    <p className='mb-4'>A percentage of all lotto ticket sales with The Lottery Office is contributed to The Lottery Office Benefit Fund. The fund regularly distributes donations to Australian charities and community groups.</p>}
                                <h4 className='cursor-pointer mb-4' onClick={() => handleShowingText('two')}>What is a Charity Lottery?</h4>
                                {faqs.two &&
                                    <p className='mb-4'>A charity lottery is a lottery whose purpose is to generate funds for charity. The Lottery Office Charity Fund does not operate a charity lottery, instead it regularly contributes directly to charities that need assistance.</p>}
                                <h4 className='cursor-pointer mb-4' onClick={() => handleShowingText('three')}>which Lotto Gives Most to Charity?</h4>
                                {faqs.three &&
                                    <p className='mb-4'>The ticket sales from each of our lotteries contribute the same percentage to the charity fund.</p>}
                            </div>
                        </div>
                    </div>
                </div>
                <Footerr />
            </div>
        </div>

    )
}
export default Charity;