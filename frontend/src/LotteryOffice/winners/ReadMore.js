import React from 'react'
import Header from '../Header';
import { Link } from 'react-router-dom';
import result1 from '../images/result1.PNG';
import result2 from '../images/result2.PNG';
import Footerr from '../Footerr';

const ReadMore = () => {
    return (
        <div className='container-fluid'>
            <Header />
            <div className='row'>
                <div className='col-12 col-md-10 mx-auto my-4 readMore lotterySystem'>
                    <Link to='/winners' className='text-success text-end d-block '>Back to winners</Link>
                    <h4 className='mt-2'>ACT man kicks off 2023 with $40,686 Italian Super Jackpot win</h4>
                    <p className='fst-italic'>The next Italian Super Jackpot draw jackpot on 28 June is worth an astonishing AUD$65 Million!</p>
                    <button className='button btn mb-3' onClick={()=>document.location.href='/play'}>Play now</button>
                    <p>A player with The Lottery Office came close to pulling off a record-breaking win in the December 30 Italian Super Jackpot draw. Although he missed out on the $530 million major prize, he was happy to leave 2022 behind with his bank balance boosted by more than $40,000.<br /><br />
                    The ACT man, who signed up with The Lottery Office in November 2022, describes himself as a pessimist, but hopefully after his division 3 win that’s no longer the case!<br /><br />
                    Although he admits that it hurt him to fall short of hundreds of millions by a single number, he’s excited about his substantial prize and plans to put some of it towards his mortgage as he’s recently taken a holiday.<br /><br />
                    He heard about the record-breaking $2.9 billion US Powerball draw was won in November, and how The Lottery Office gave Australians the chance to win from its draw.<br /><br/>
                    When the record-breaking $2.9 billion US Powerball draw was won in November, he decided he wanted the chance to play international lottery draws. He thought to himself,
                    <span className='fst-italic'> ‘Why would I play with the </span> (traditional)<span className='fst-italic'> Australian Lotteries if I can win this much from the</span> (matching)
                    <span className='fst-italic'> overseas lotteries’, </span> so he signed up for his free account with The Lottery Office.<br /><br/>
                    Once he signed up, the Italian Super Jackpot had the largest jackpot on offer, so he decided to play that. It turned out to be a smart decision<br /><br/>
                    The player’s numbers were:
                    </p>
                    <img src={result1} className='mx-auto w-25' alt='Result' />
                    <p>The Italian Super Jackpot winning numbers were:</p>
                    <img src={result2} className='mx-auto w-25' alt='Result' />
                    <p>As you can see, had he selected 29 instead of 37 things would be very different! Maybe next time!<br /><br/>
                    The bonus winning number is not required to win the jackpot prize; it’s only required to win the Division 2 prize.
                    </p>
                    <div className='d-flex gap-3'>
                        <Link to='/' className='text-success'>Home</Link>
                        <Link to='/magzine' className='text-success'>Magzine</Link>
                        <Link to='/winners' className='text-success'>Winners</Link>
                        <Link to='/read-more' className='text-danger'>ACT man kicks off 2023 with $40,686 Italian Super Jackpot win</Link>
                    </div>
                </div>
                <Footerr />
            </div>
        </div>
    )
}

export default ReadMore;
