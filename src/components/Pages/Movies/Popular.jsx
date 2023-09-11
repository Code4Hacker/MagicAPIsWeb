import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import Aos from 'aos';
const Populars = ({ movie }) => {

    const [res, setRes] = useState([]);
    useEffect(() => {
        const fetching = async () => {
            const response = await fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB}&i=${movie.split('/')[2]}`);
            const datares = await response.json();
            setRes(datares);
        }
        fetching();
        // eslint-disable-next-line
    }, [res]);
    Aos.init({
        duration: 1000
    });
    return (
        <div className="col-md-2 mv" data-aos="fade-up">
            <div className="movie_card">
                <div className="card_">
                    <div className="card_body">
                        <img src={res.Poster === "N/A" ? "https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=740&t=st=1684945155~exp=1684945755~hmac=aaf36e517e2114c817afa6c0f46ed6a5ee7346c336922b372e9b2bbb3e9bc373" : res.Poster} alt="" />
                        <div className="shadower">
                            <div className="card_title">
                                <h6 style={{
                                    textAlign:'center',
                                    color:'white'
                                }}>{res.Genre}</h6>
                                <button className='view'>
                                    <Link to={`/movie/${res.imdbID}`} className='btn'>
                                        View
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <h6>{res.Title?.length > 18 ? (res.Title).substring(0,19)+"...":res.Title}</h6>
            <span><span>Released: </span>{res.Released}</span>
        </div>
    )
}

export default Populars;