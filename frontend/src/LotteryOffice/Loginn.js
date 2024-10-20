import React, { Fragment, useState } from 'react';
import { RiGoogleFill } from 'react-icons/ri';
import './Stylee.css';
import { useNavigate } from 'react-router-dom';

function Loginn() {
    const [userData, setUserData] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });
    };

    console.log(document.cookie);

    const handleLogin = async () => {
        const data = {
            email: userData.email,
            password: userData.password,
        };

        try {
            const response = await fetch("http://localhost:6005/login", {
                method: 'POST',
                credentials: 'include', 
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            const result = await response.json();
            if (response.ok) {
                alert('Login Successful');
                navigate('/');
            } else {
                alert('Error: ' + result.message);
            }
        } catch (error) {
            alert('Internal server error! Try again later: ' + error);
        }
    };

    const handleClose = () => {
        navigate('/');
    };

    return (
        <Fragment>
            <div className="col-12 py-5 overflow-y-scroll Login_Main loginInPage">
                <div className="col-6 mx-auto bg-white rounded-4">
                    <div className="p-2 bg-primary position-relative rounded-4 rounded-bottom-0 text-end">
                        <div
                            className="btn-close position-absolute top-0 end-0 bg-white p-2 rounded-circle"
                            onClick={handleClose}
                        ></div>
                        <h6 className="text-center mt-3 text-white fs-2">Log in</h6>
                        <p className="text-white">
                            Don't have an Account?{' '}
                            <a href="/signup" className="text-white">
                                Sign Up
                            </a>
                        </p>
                    </div>
                    <div className="form col-8 mx-auto py-3 px-2">
                        <input
                            type="text"
                            className="rounded-pill LoginFormDetails ps-3 border-2 border-primary col-12"
                            name="email"
                            value={userData.email}
                            onChange={handleChange}
                            placeholder="Email"
                        />
                        <input
                            type="text"
                            className="rounded-pill LoginFormDetails ps-3 mt-3 border-2 border-primary col-12"
                            placeholder="password"
                            value={userData.password}
                            onChange={handleChange}
                            name="password"
                        />
                        <div className="d-flex justify-content-center mt-3">
                            <a href="/">Forgot Password?</a>
                        </div>
                        <div
                            onClick={handleLogin}
                            className="btn col-12 btn-danger LoginFormDetails mt-3 rounded-pill"
                            style={{ padding: '10px 0px' }}
                        >
                            Log in
                        </div>
                        <div className="d-flex justify-content-between mt-3">
                            <hr className="col-5" />
                            <span>OR</span>
                            <hr className="col-5" />
                        </div>
                        <div className=" mt-3 px-3 py-3 rounded-4 text-center" style={{background:'#eee'}}>
                            <h5 style={{color:"#2c68a5"}}>Log in with SMS code</h5>
                            <p>Get a one-time access code via SMS</p>
                            <input
                                type="date"
                                className="rounded-pill LoginFormDetails ps-3 pe-3 cursor-pointer border-2 border-primary col-12"
                                placeholder="Email"
                                style={{ outline: 'none' }}
                            />
                            <input
                                type="number"
                                className="rounded-pill LoginFormDetails ps-3 mt-3 border-2 border-primary col-12"
                                placeholder="Verified mobile phone number"
                                style={{ outline: 'none' }}
                            />
                            <div
                                className="btn col-12 btn-danger LoginFormDetails mt-3 rounded-pill"
                                style={{ padding: '10px 0px' }}
                            >
                                Send code
                            </div>
                        </div>
                        <div className="d-flex justify-content-between mt-3">
                            <hr className="col-5" />
                            <span>OR</span>
                            <hr className="col-5" />
                        </div>
                        <div className="col-12 my-3 d-flex align-items-center rounded-pill ps-1 cursor-pointer" style={{ background: "#cd5642" }}>
                            <div
                                className="rounded-circle d-flex justify-content-center align-items-center text-red"
                                style={{ background: 'black', height: '50px', width: '50px' }}
                            >
                                <RiGoogleFill className="fs-5" style={{ color: 'red' }} />
                            </div>
                            <p className="m-0 col-9 text-center text-white">Log in with Google</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Loginn;
