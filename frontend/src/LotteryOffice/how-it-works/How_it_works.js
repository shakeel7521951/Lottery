import React from 'react'
import Header from '../Header';
import './How_it_works.css';
import HowItWorks from '../images/how-it-works.PNG';
import Footerr from '../Footerr';

const How_it_works = () => {
  return (
    
    <div className='container-fluid'>
      <Header />
      <div className='row'>
        <img src={HowItWorks} className='w-100 p-0 YoutubeVideo' onClick={() => window.open("https://youtu.be/G3K_pddbr7g", "_blank")}
          alt='Youtube video' />
      </div>
      <div className='row how-it-works-container'>
        <h4 className='text-center text-light mt-3 fs-2'>How it works</h4>
        <div className='col-12 col-md-11 mx-auto d-flex flex-column flex-md-row flex-wrap mb-5'>
          <div className='col-12 col-md-4 mx-auto border p-2 justify-content-center text-center rounded mt-3 works-card'>
            <i class="bi bi-ticket-perforated fs-1 text-light" />
            <p className='text-light'>When you play with us, you are entering our lotteries, licensed, conducted and drawn in the Northern Territory under Government supervision.</p>
          </div>
          <div className='col-12 col-md-4 mx-auto border p-2 justify-content-center text-center rounded mt-3 works-card'>
            <i class="bi bi-ticket-perforated fs-1 text-light" />
            <p className='text-light'>When you purchase one of our lottery tickets, we will purchase a matching ticket in an overseas lottery which ensures we can pay out any prize that is won.</p>
          </div>
          <div className='col-12 col-md-4 mx-auto mt-3 works-card text-center'>
            <div className='border p-2 rounded'>
              <img src='https://www.lotteryoffice.com.au/assets/icons/icon-regulation-white.svg' className='img-fluid mx-auto d-block my-3' alt='Logo' />
              <p className='text-light my-4 '> We are licensed by the Northern Territory Government and audited annually. You are safe when playing with us. </p>
            </div>
          </div>
          <div className='col-12 col-md-4 mx-auto border p-2 justify-content-center text-center rounded mt-3 works-card'>
            <i class="bi bi-ticket-perforated fs-1 text-light" />
            <p className='text-light'>We are fully Australian owned and operated and all of our staff are located here.</p>
          </div>
          <div className='col-12 col-md-4 mx-auto border p-2 justify-content-center text-center rounded mt-3 works-card'>
            <i class="bi bi-ticket-perforated fs-1 text-light" />
            <p className='text-light'>We calculate a charity amount based on a percentage of our ticket price and this is donated to Australian Charities and good causes.</p>
          </div>
          <div className='col-12 col-md-4 mx-auto border p-2 justify-content-center text-center rounded mt-3 works-card'>
            <i class="bi bi-ticket-perforated fs-1 text-light" />
            <p className='text-light'>Our Customer Service team are right here in Australia, you won't be dealing with anyone in a foreign country.</p>
          </div>
        </div>
      </div>
      <div className='row justify-content-center text-center pt-5 works-play'>
        <p className='text-light'>The Lottery Office gives you the chance to win from the world's largest lottery jackpots.</p>
        <h4>Well played!</h4>
        <button className='button btn my-4' onClick={()=>document.location.href='/signup'}>Sign up</button>
        <Footerr />
      </div>
    </div>
  )
}

export default How_it_works;