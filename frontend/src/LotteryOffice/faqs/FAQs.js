import React, { useState, useRef } from 'react';
import './FAQs.css';
import { faqsData, howitworksData } from './FAQsData.js';
import Header from '../Header';
import { Link } from 'react-router-dom';
import Footerr from '../Footerr.js';

const FAQs = () => {
    const [activeFaq, setActiveFaq] = useState(null);
    const [activeCategory, setActiveCategory] = useState('Getting Started'); 
    const faqsRef = useRef(null); 

    const toggleFaq = (index, category) => {
        setActiveFaq(activeFaq === index ? null : index);
        setActiveCategory(category);
    };

    const renderAnswer = (answer) => {
        const parts = answer.split('\n\n');

        return parts.map((part, index) => (
            <p key={index}>
                {parseText(part)}
            </p>
        ));
    };

    const parseText = (text) => {
        const regex = /<Link to='([^']+)'>([^<]+)<\/Link>/g;

        const elements = [];
        let match;
        let lastIndex = 0;

        while ((match = regex.exec(text)) !== null) {
            elements.push(text.substring(lastIndex, match.index));

            const path = match[1];
            const linkText = match[2];

            elements.push(<Link key={match.index} to={path}>{linkText}</Link>);
            lastIndex = match.index + match[0].length;
        }
        elements.push(text.substring(lastIndex));
        return elements;
    };

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <div className='container-fluid'>
            <Header />
            <div className='row'>
                <div className='faqs-container'>
                    <div className='col-12 col-md-10 mx-auto'>
                        <h1>The Lottery Office FAQs</h1>
                    </div>
                </div>
                <div className='col-12 col-md-11 mx-auto d-flex p-3 mt-3 align-items-center justify-content-between'>
                    <div className='text-start'>
                        <h4 className='text-danger'>Need some help?</h4>
                        <p>Have a browse through our most common questions<br />
                            If you need further assistance, our <Link to='/contact'>Support Team</Link> </p>
                    </div>
                    <div>
                        <button className='button btn' onClick={() => document.location.href = '/contact'}>Go to contact page</button>
                    </div>
                </div>

                <div className="row no-wrap">
                    <div className="col-12 col-md-11 mx-auto d-flex flex-column flex-md-row">
                        <div className="col-4 p-0">
                            <div className="faqs-left">
                                <h4 className="text-danger mb-3">Categories</h4>
                                <p className={`faqs-category ${activeCategory === 'Getting Started' ? 'faqs-activated' : ''}`} onClick={() => { toggleFaq(null, 'Getting Started'); scrollToSection(faqsRef); }}>Getting Started</p>
                                <p className={`faqs-category ${activeCategory === 'How it works' ? 'faqs-activated' : ''}`} onClick={() => { toggleFaq(null, 'How it works'); scrollToSection(faqsRef); }}>How it works</p>
                                <p className={`faqs-category ${activeCategory === 'General' ? 'faqs-activated' : ''}`} onClick={() => { toggleFaq(null, 'General'); scrollToSection(faqsRef); }}>General</p>
                                <p className={`faqs-category ${activeCategory === 'Winnings' ? 'faqs-activated' : ''}`} onClick={() => { toggleFaq(null, 'Winnings'); scrollToSection(faqsRef); }}>Winnings</p>
                                <p className={`faqs-category ${activeCategory === 'Managing my account' ? 'faqs-activated' : ''}`} onClick={() => { toggleFaq(null, 'Managing my account'); scrollToSection(faqsRef); }}>Managing my account</p>
                                <p className={`faqs-category ${activeCategory === 'Payments & withdrawals' ? 'faqs-activated' : ''}`} onClick={() => { toggleFaq(null, 'Payments & withdrawals'); scrollToSection(faqsRef); }}>Payments & withdrawals</p>
                                <p className={`faqs-category ${activeCategory === 'App' ? 'faqs-activated' : ''}`} onClick={() => { toggleFaq(null, 'App'); scrollToSection(faqsRef); }}>App</p>
                                <p className={`faqs-category ${activeCategory === 'Lotteries' ? 'faqs-activated' : ''}`} onClick={() => { toggleFaq(null, 'Lotteries'); scrollToSection(faqsRef); }}>Lotteries</p>
                                <p className={`faqs-category ${activeCategory === 'Favourites' ? 'faqs-activated' : ''}`} onClick={() => { toggleFaq(null, 'Favourites'); scrollToSection(faqsRef); }}>Favourites</p>
                                <p className={`faqs-category ${activeCategory === 'Multi draws' ? 'faqs-activated' : ''}`} onClick={() => { toggleFaq(null, 'Multi draws'); scrollToSection(faqsRef); }}>Multi draws</p>
                                <p className={`faqs-category ${activeCategory === 'ID verification' ? 'faqs-activated' : ''}`} onClick={() => { toggleFaq(null, 'ID verification'); scrollToSection(faqsRef); }}>ID verification</p>
                                <p className={`faqs-category ${activeCategory === 'Responsible gambling' ? 'faqs-activated' : ''}`} onClick={() => { toggleFaq(null, 'Responsible gambling'); scrollToSection(faqsRef); }}>Responsible gambling</p>
                                <p className={`faqs-category ${activeCategory === 'Syndicates' ? 'faqs-activated' : ''}`} onClick={() => { toggleFaq(null, 'Syndicates'); scrollToSection(faqsRef); }}>Syndicates</p>
                                <p className={`faqs-category ${activeCategory === 'Lotto systems' ? 'faqs-activated' : ''}`} onClick={() => { toggleFaq(null, 'Lotto systems'); scrollToSection(faqsRef); }}>Lotto systems</p>
                                <p className={`faqs-category ${activeCategory === 'Online security' ? 'faqs-activated' : ''}`} onClick={() => { toggleFaq(null, 'Online security'); scrollToSection(faqsRef); }}>Online security</p>
                                {/* Add more categories as needed */}
                            </div>
                        </div>
                        <div className="col-12 col-md-8 p-0">
                            <div className="faqs-right" ref={faqsRef}>
                                <div className='faq'>
                                    <h4>getting started</h4>
                                    {faqsData.map((faq, index) => (
                                        <div key={index}>
                                            <div className={`d-flex gap-3 align-items-center my-3 ${activeFaq === index ? 'faqs-active' : ''}`} onClick={() => toggleFaq(index, faq.category)}>
                                                <i className={`bi ${activeFaq === index ? 'bi-dash-circle' : 'bi-plus-circle'}`} />
                                                <h5>{faq.question}</h5>
                                                <hr />
                                            </div>
                                            {activeFaq === index && (
                                                <div className='dropdown-text'>
                                                    {renderAnswer(faq.answer)}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                                <div className='faq'>
                                <h4>How it works</h4>
                                    {howitworksData.map((faq, index) => (
                                        <div key={index + faqsData.length}>
                                            <div className={`d-flex gap-3 align-items-center my-3 ${activeFaq === index + faqsData.length ? 'faqs-active' : ''}`} onClick={() => toggleFaq(index + faqsData.length, faq.category)}>
                                                <i className={`bi ${activeFaq === index + faqsData.length ? 'bi-dash-circle' : 'bi-plus-circle'}`} />
                                                <h5>{faq.question}</h5>
                                                <hr />
                                            </div>
                                            {activeFaq === index + faqsData.length && (
                                                <div className='dropdown-text'>
                                                    {renderAnswer(faq.answer)}
                                                </div>
                                            )}
                                        </div>
                                    ))}

                                    {/* Add more categories with similar pattern */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footerr/>
            </div>
        </div>
    )
}

export default FAQs;
