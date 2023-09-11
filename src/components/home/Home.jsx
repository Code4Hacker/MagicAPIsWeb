import React from 'react';
import { cloud, collection, astrounaunt, rocket, earth } from '../assets';
import { Link } from 'react-router-dom';
import './style.css';
import 'aos/dist/aos.css';
import Aos from 'aos';
import 'animate.css';
import Hireme from '../hireme/Hireme';
import jQuery from 'jquery';

const Home = () => {
    Aos.init(
        {
            delay: 300,
            duration: 1000,
        }
    );
    const show = () => {
        jQuery('.shortcut').fadeIn({
            duration:600,
            easing:'linear'
        });
    }
    return (
        <div className='home'>
            <Hireme/>
            <button className="hireme" onClick={show}>Hire Me!</button>
            <div className="banner_ snap">
                <div className="container mrg-100">
                    <div className="row">
                        <div className="col-xl-6 animate__animated animate__fadeInLeft animate__delay-2s">
                            <img src={rocket} alt="rocket" />
                        </div>
                        <div className="col-xl-6">
                            <h1 className='mrg-neg-100 animate__animated animate__fadeInRight animate__delay-3s'>Get some fun</h1>
                            <h3 className='animate__animated animate__fadeInRight animate__delay-4s'>Enjoy better experience</h3>
                            <p className='animate__animated animate__fadeInRight animate__delay-5s'>Enjoy better experience  of myself working with API's Everything it's free just make a snap!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mrg-100 snap">
                <div className="row">
                    <div className="col-xl-12">
                        <h1 className='mrg-100 title' data-aos="fade-left">
                            <span className="black">Little</span>
                            <span className="white">Preview</span>
                            <br />
                            <span className='comment'>Scroll down to view more details</span>
                        </h1>
                    </div>
                </div>
                <div className="box mrg-100 snap">
                    <div className="row">
                        <div className="col-5" data-aos="fade-right">
                            <img src={earth} alt="earth" />
                        </div>
                        <div className="col-6" data-aos="fade-left">
                            <img src={collection} alt="collection" />
                        </div>
                        <div className="col-6" data-aos="fade-right">
                            <img src={cloud} alt="weather" />
                        </div>
                        <div className="col-5" data-aos="fade-left">
                            <img src={astrounaunt} alt="nasa" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mrg-100 snap">
                <div className="row">
                    <div className="col-xl-6" data-aos="fade-left">
                        <img src={cloud} alt="cloud" />
                    </div>
                    <div className="col-xl-6">
                        <div className="row">
                            <div className="col-xl-12">
                                <h1 className='mrg-100' data-aos="fade-right">01</h1>
                                <h3 data-aos="fade-right"><span className="black">Weather</span> <span className='white'>Forecating</span></h3>
                                <p className='white' data-aos="fade-right">Here are just used the API's from weatherapi.com where they offers  free  API's  for displaying weather data and forecasting  showcase up to three Days on free plan, <span className='black pacifico'>visit</span></p>
                            </div>
                            <div className="col-xl-12" data-aos="fade-right">
                                <button className='click'>
                                <Link to={'/weather'} className='linkBtn'>Try it!</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mrg-100 snap">
                <div className="row" style={{
                    display: 'block'
                }}>
                    <div className="col-xl-6" data-aos="fade-left" style={{
                        float: 'right'
                    }}>
                        <img src={earth} alt="cloud" />
                    </div>
                    <div className="col-xl-6" style={{
                        float: 'left'
                    }}>
                        <div className="row">
                            <div className="col-xl-12">
                                <h1 className='mrg-100' data-aos="fade-right">02</h1>
                                <h3 data-aos="fade-right"><span className="black">Movie</span> <span className='white'>Land</span></h3>
                                <p className='white' data-aos="fade-right">Not much tough but still think about several things, but anyway here I used an API called tmovies from the website tmovies.com with free Plain You can have all the  needs, <span className='black pacifico'> visit</span></p>
                            </div>
                            <div className="col-xl-12" data-aos="fade-right">
                            <button className='click'>
                                <Link to={'/movies'} className='linkBtn'>Try it!</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div><div className="container mrg-100 snap">
                <div className="row" style={{
                    display: 'flex', width: '100%'
                }}>
                    <div className="col-xl-6" data-aos="fade-left" style={{
                        float: 'right'
                    }}>
                        <img src={collection} alt="cloud" />
                    </div>
                    <div className="col-xl-6" style={{
                        float: 'left'
                    }}>
                        <div className="row snap">
                            <div className="col-xl-12">
                                <h1 className='mrg-100' data-aos="fade-right">03</h1>
                                <h3 data-aos="fade-right"><span className="black">Image</span> <span className='white'>Portfolio</span></h3>
                                <p className='white' data-aos="fade-right">Here are just used the API's from weatherapi.com where they offers  free  API's  for displaying weather data and forecasting  showcase up to three Days on free plan<span className='black pacifico'> visit</span></p>
                            </div>
                            <div className="col-xl-12" data-aos="fade-right">
                            <button className='click'>
                                <Link to={'/images'} className='linkBtn'>Try it!</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mrg-100 snap">
                <div className="row" style={{
                    display: 'block'
                }}>
                    <div className="col-xl-6" data-aos="fade-left" style={{
                        float: 'right'
                    }}>
                        <img src={astrounaunt} alt="cloud" />
                    </div>
                    <div className="col-xl-6" style={{
                        float: 'left'
                    }}>
                        <div className="row">
                            <div className="col-xl-12">
                                <h1 className='mrg-100' data-aos="fade-right">04</h1>
                                <h3 data-aos="fade-right"><span className="black">Nasa </span> <span className='white'>API</span></h3>
                                <p className='white' data-aos="fade-right">Not much tough but still think about several things, but anyway here I used an API called tmovies from the website tmovies.com with free Plain You can have all the  needs, <span className='black pacifico'> visit</span></p>
                            </div>
                            <div className="col-xl-12" data-aos="fade-right">
                            <button className='click'>
                                <Link to={'/nasa'} className='linkBtn'>Try it!</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" gemini mrg-100">
                <div className="row" style={{
                    display: '', width: '100%'
                }}>
                    <div className="col-xl-12">
                        <div className="shadower">
                            <div className="trans center mrg-100">
                                <div className="col-md-12">
                                    <h1 className='mrg-100 animate__animated animate__fadeInRight animate__delay-3s'>Get some fun</h1>
                                    <h3 className='animate__animated animate__fadeInRight animate__delay-4s'>Enjoy better experience</h3>
                                    <div className='animate__animated animate__fadeInRight animate__delay-5s' style={{ textAlign: 'center',color:'white'
                                    }}>Enjoy better experience  of myself working with API's Everything it's free just make a snap!</div>
                                    <div className="asks center">
                                        <input type="text" placeholder='Send the feedback about this ...' />
                                        <button>Like it!</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;