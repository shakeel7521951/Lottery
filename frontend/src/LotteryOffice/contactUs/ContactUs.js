import { useState } from 'react';
import Header from '../Header';
import './ContactUs.css';
import contact_banner from '../images/contact.PNG';
import { Link } from 'react-router-dom';
import Footerr from '../Footerr';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ContactUs = () => {
  const [showDropDown, setShowDropDown] = useState({ day: false, time: false, city: false, state: false, reason: false });
  const [request, setRequest] = useState("email")
  const [day, setDay] = useState('Tuesday');
  const [time, setTime] = useState('');
  const [city, setCity] = useState('Australia');
  const [state, setState] = useState('');
  const [reason, setReason] = useState('');
  const [loader, setLoader] = useState(true);
  const [showtext, setShowText] = useState({ first: false, second: false, third: false, fourth: false });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    setLoader(false);

    emailjs
      .sendForm('service_xtag0qm', 'template_xja3lz8', form.current, {
        publicKey: 'n-wkP8cCYVpbbGi5f',
      })
      .then(
        () => {
          toast.success("Message Sent Successfully!", {
            position: 'top-center',
          });
          form.current.reset();
          setLoader(true);
        },
        (error) => {
          toast.error("Something Went wrong. Please try again later!", {
            position: 'top-center',
          });
          setLoader(true);
        }
      );
  };


  const handleShowDetailedText = (item) => {
    setShowText((prev) => ({
      ...prev,
      [item]: !prev[item]
    }))
  }

  const handleShowDropDown = (value) => {
    setShowDropDown((prevState) => ({
      ...prevState,
      [value]: !prevState[value]
    }))
  }
  const handleSelectionReason = (value) => {
    setReason(value);
    setShowDropDown(false);
  }
  const handleSelectionState = (value) => {
    setState(value);
    setShowDropDown(false);
  }
  const handleSelectCity = (value) => {
    setCity(value);
    setShowDropDown(false);
  }
  const handleSelectDay = (value) => {
    setDay(value);
    setShowDropDown(false);
  }
  const handleSelctTime = (value) => {
    setTime(value);
    setShowDropDown(false);
  }
  return (
    <>
      <div className='container-fluid'>
        <Header />
        <div className='row'>
          <img src={contact_banner} class="w-100 p-0" alt="Banner" />
        </div>
        <div className='row'>
          <div className='col-12 col-md-11 d-flex flex-column flex-md-row mx-auto'>
            <div className='col-12 col-md-6 mx-auto left mb-5'>
              <div className='call d-flex p-4 align-items-start'>
                <div>
                  <i class="bi-brands bi-whatsapp" />
                </div>
                <div className='text-start ms-3'>
                  <h4>Call The Lottery Office (07)2111 8242</h4>
                  <p className='mt-3'>Our friendly Customer Support team are available to take your call Monday to Friday from 9am to 5pm AEST.</p>
                </div>
              </div>
              <form ref={form} onSubmit={sendEmail} className='callBack p-4'>
                <div className='callBack call d-flex align-items-start'>
                  <div >
                    <i class="bi-solid bi-envelope"></i>
                  </div>
                  <div className='text-start ms-3'>
                    <h4>Email Us or Request a Callback</h4>
                    <p>Feel free to Email Us anytime, and we’ll get back to you soon. Callbacks will be made between Monday to Friday from 9am to 5pm AEST.</p>
                  </div>
                </div>
                <div className='callBackInput d-flex flex-column gap-2 flex-md-row mt-3'>
                  <input type='text' name='to_name' placeholder='Name' required className='rounded-pill w-50' />
                  <input type='text' name='phone' placeholder='Phone' required className='rounded-pill w-50' />
                </div>
                <div className='callBackInput'>
                  <input type='email' name='from_name' required placeholder='Email' className='rounded-pill w-100 mt-3' />
                </div>
                <div className='d-flex radio-buttons gap-3 mt-3'>
                  <div onClick={() => setRequest("email")}>
                    <input type='radio' id='mail' name='contactMethod' checked value='mail' />
                    <label htmlFor='mail'>Send email</label>
                  </div>
                  <div onClick={() => setRequest("callBack")}>
                    <input type='radio' id='request' name='contactMethod' value='request' />
                    <label htmlFor='request' >Request Callback</label>
                  </div>
                </div>
                {request === "callBack" &&
                  <div>
                    <div className='d-flex flex-column gap-2 flex-md-row mt-3'>
                      <div className='d-flex justify-content-between w-50 rounded-pill mail_inputs' onClick={() => { handleShowDropDown('day') }}>
                        <input type='text' value={day} readOnly ></input>
                        <i className="bi bi-caret-down-fill" />
                      </div>
                      {
                        showDropDown.day && (
                          <div className='days-selection'>
                            <p onClick={() => { handleSelectDay('Monday') }} className='bgColor pt-2'>Monday</p>
                            <p onClick={() => { handleSelectDay('Tuesday') }}>Tuesday</p>
                            <p onClick={() => { handleSelectDay('Wednesday') }} className='bgColor'>Wednesday</p>
                            <p onClick={() => { handleSelectDay('Thursday') }}>Thursday</p>
                            <p onClick={() => { handleSelectDay('Friday') }} className='bgColor'>Friday</p>
                          </div>
                        )
                      }
                      <div className='d-flex justify-content-between w-50 rounded-pill mail_inputs' onClick={() => handleShowDropDown('time')}>
                        <input type='text' value={time} readOnly placeholder='Select time'></input>
                        <i className="bi bi-caret-down-fill" />
                      </div>
                      {
                        showDropDown.time && (
                          <div className='select-time'>
                            <p className='bgColor' onClick={() => { handleSelctTime('09:00 - 13:00') }}>09:00 - 13:00</p>
                            <p onClick={() => { handleSelctTime('13:00 - 17:00') }}>13:00 - 17:00</p>
                          </div>
                        )
                      }
                    </div>
                    <div className='d-flex flex-column flex-md-row gap-2 mt-3'>
                      <div className='d-flex justify-content-between w-50 rounded-pill mail_inputs' onClick={() => { handleShowDropDown('city') }}>
                        <input type='text' value={city} readOnly ></input>
                        <i className="bi bi-caret-down-fill" />
                      </div>
                      {
                        showDropDown.city && (
                          <div className='city-selection'>
                            <p className='bgColor' onClick={() => { handleSelectCity('Australia') }}>Australia</p>
                            <p onClick={() => { handleSelectCity('New Zealand') }}>New Zealand</p>
                          </div>
                        )
                      }
                      <div className='d-flex justify-content-between w-50 rounded-pill mail_inputs' onClick={() => { handleShowDropDown('state') }}>
                        <input type='text' value={state} readOnly placeholder='State' ></input>
                        <i className="bi bi-caret-down-fill" />
                      </div>
                      {
                        showDropDown.state && (
                          <div className='state-selection'>
                            <p className='bgColor' onClick={() => { handleSelectionState('ACT') }}>ACT</p>
                            <p onClick={() => { handleSelectionState('NSW') }}>NSW</p>
                            <p className='bgColor' onClick={() => { handleSelectionState('NT') }}>NT</p>
                            <p onClick={() => { handleSelectionState('QLD') }}>QLD</p>
                            <p className='bgColor' onClick={() => { handleSelectionState('SA') }}>SA</p>
                            <p onClick={() => { handleSelectionState('TAS') }}>TAS</p>
                            <p className='bgColor' onClick={() => { handleSelectionState('VIC') }}>VIC</p>
                            <p onClick={() => { handleSelectionState('WA') }}>WA</p>
                          </div>
                        )
                      }
                    </div>
                    <div className='d-flex justify-content-between w-100 mt-3 rounded-pill mail_inputs' onClick={() => { handleShowDropDown('reason') }}>
                      <input type='text' value={reason} readOnly placeholder='Select Callback Reason' className='w-100' ></input>
                      <i className="bi bi-caret-down-fill" />
                    </div>
                  </div>
                }
                {
                  showDropDown.reason && (
                    <div className='selection-reason'>
                      <p className='bgColor' onClick={() => { handleSelectionReason('Assistance with creating an account or resetting passwords') }}>Assistance with creating an account or resetting passwords</p>
                      <p onClick={() => { handleSelectionReason('Instructions on how to play our lotteries') }}>Instructions on how to play our lotteries</p>
                      <p className='bgColor' onClick={() => { handleSelectionReason('Support for responsible gambling resources') }}>Support for responsible gambling resources</p>
                      <p onClick={() => { handleSelectionReason('Report an issue with website or app') }}>Report an issue with website or app</p>
                      <p className='bgColor' onClick={() => { handleSelectionReason('Reopen or close an account') }}>Reopen or close an account</p>
                      <p onClick={() => { handleSelectionReason('Payment enquiry') }}>Payment enquiry</p>
                      <p className='bgColor' onClick={() => { handleSelectionReason('Other') }}>Other</p>
                    </div>
                  )
                }
                <div class='message'>
                  <textarea placeholder='Message' required name='message'></textarea>
                </div>
                <button type="submit" value="Send" className="button btn d-block m-auto mt-2">
                  {loader ? (
                    "Send now"
                  ) : (
                    <div className="spinner-border spinner-border-sm text-light " role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  )}
                </button>

              </form>
            </div>
            <div className='col-12 col-md-6 mx-auto right mt-3 p-4'>
              <div className='d-flex'>
                <i className='bi-solid bi-envelope text-danger icon' />
                <div className='text-start ms-3'>
                  <h4>Live Chat</h4>
                  <p>Our Live Chat hours are
                    Monday to Friday from 9am to 5pm AEST</p>
                  <button
                    type='button'
                    className='button btn'
                    onClick={() => window.open("https://wa.me/3207521951")}
                  >
                    WhatsApp
                  </button>
                </div>
              </div>
              <div className='d-flex mt-5'>
                <i className='bi-solid bi-facebook text-primary icon' />
                <div className='text-start ms-3'>
                  <h4>Contact Us on Messenger</h4>
                  <p>Get in touch via Facebook Messenger.
                    Our staff are always happy to help.</p>
                  <button
                    type='button'
                    className='button btn'
                    onClick={() => window.open("https://www.facebook.com/profile.php?id=100083701840637", "_blank")}
                  >
                    Facebook
                  </button>
                </div>
              </div>

              <div className='d-flex mt-5'>
                <i className='bi-solid bi-instagram text-danger icon' />
                <div className='text-start ms-3'>
                  <h4>Contact Us on Instagram</h4>
                  <p>Get in touch via Instagram.
                    Our staff are always happy to help.</p>
                  <button
                    type='button'
                    className='button btn'
                    onClick={() => window.open("https://www.instagram.com/shakeel.developer.pro", "_blank")}
                  >
                    Instagram
                  </button>
                </div>
              </div>
              <div className='d-flex mt-5'>
                <i className='bi-solid bi-question text-primary icon' />
                <div className='text-start ms-3'>
                  <h4>Frequently Asked Questions</h4>
                  <p>Questions we are often asked. If your question is not addressed in our FAQs,
                    please feel free to email us:<br /><Link to='mailto:shakeel7521951@gmail.com'>shakeel7521951@gmail.com</Link></p>
                  <button
                    type='button'
                    className='button btn'
                    onClick={() => window.location.href = "mailto:shakeel7521951@gmail.com"}
                  >
                    Contact via Email
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* footer section */}
        <div className='row footer_section'>
          <div className='col-12 mx-auto d-flex justify-content-between cursor-pointer py-3 px-5' onClick={() => { handleShowDetailedText('first') }}>
            <h4>Are winnings tax-free?</h4>
            {showtext.first === false ? (
              <i className="bi bi-caret-down-fill" />
            ) : (
              <i className="bi bi-caret-up-fill" />
            )}
          </div>
          {
            showtext.first && (
              <div className='px-5'>
                <p>Winnings from our lotteries are not subject to Australian taxes, although winnings from some matching overseas lotteries are taxed by the local government. These taxes are deducted from any relevant prize before we can collect it. Overseas taxes are payable on some winnings for US Powerball, Mega Millions, Spain’s La Primitiva and SuperEnalotto. Winners receive the exact same amount that we collect from the matching overseas lottery.</p>
                <p>Visit <Link to='/'>Game Rules</Link>  to see more.</p>
              </div>
            )
          }
          <hr />

          <div className='d-flex justify-content-between cursor-pointer py-3 px-5' onClick={() => { handleShowDetailedText('second') }}>
            <h4>How soon are winnings paid?</h4>
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
              <p>If you win less than $10,000 the prize will be transferred to your Lottery Office account as soon as the outcome of the relevant draw has been determined and the results have been processed.</p>
              <p>If you win $10,000 or more, we’ll contact you by phone and email within 2 business days to organise your payout.</p>
            </div>
          }
          <hr />
          <div className='d-flex justify-content-between cursor-pointer py-3 px-5' onClick={() => { handleShowDetailedText('third') }}>
            <h4>Forgot username and password?</h4>
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
              <p>If you’ve forgotten your password, click on “Forgot Password?” in the Log in screen. If you’ve forgotten your Log in email address, please contact our Customer Support team. You can also Log in with an SMS code through the Log in screen.</p>
            </div>
          }
          <hr />
          <div className='d-flex justify-content-between cursor-pointer py-3 px-5' onClick={() => { handleShowDetailedText('fourth') }}>
            <h4>How do I navigate my account?</h4>
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
              <p>Once you’ve logged in to your Lottery Office account, you can see all of your previous and pending entries in the “My Draws” section. The “My Account” section allows you to see and configure your personal details, notification settings, spending limits, payment and withdrawal settings and change your password.</p>
            </div>
          }
        </div>
        <ToastContainer />
      </div>
      <Footerr />
    </>
  )
}

export default ContactUs;