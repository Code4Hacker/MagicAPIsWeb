import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import jQuery from 'jquery';
const Navigator = () => {
    window.onscroll = function () {
        if (window.pageYOffset > 80) {
            jQuery('.navigator').addClass('scroll');
        } else {
            jQuery('.navigator').removeClass('scroll');
        }
        if (window.matchMedia('(max-width:550px)')) {
        } else {
        }
    }
    return (
        <div className='navigator'>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <h3>
                            <Link className='logo_board' to={'/'}>
                                <span>GEMINI</span>
                                <span>Child</span>
                            </Link>
                        </h3>
                    </div>
                    <div className="col-9">
                        {/* <div className="icon">
                        <div className="btn">
                            <img src={menu} alt="" />
                        </div>
                    </div> */}
                        <ul>
                            <li><Link to={'/weather'}>weather</Link></li>
                            <li><Link to={'/movies'}>movies</Link></li>
                            <li><Link to={'/images'}>images</Link></li>
                            <li><Link to={'/nasa'}>nasa</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigator;