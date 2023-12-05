import React, { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import Aos from 'aos';
// {
//     "Title": "Gran Turismo",
//     "Year": "2023",
//     "Rated": "N/A",
//     "Released": "11 Aug 2023",
//     "Runtime": "N/A",
//     "Genre": "Action, Adventure, Drama",
//     "Director": "Neill Blomkamp",
//     "Writer": "Jason Hall, Zach Baylin, Erich Hoeber",
//     "Actors": "Sang Heon Lee, David Harbour, Orlando Bloom",
//     "Plot": "The ultimate wish fulfilment tale of a teenage Gran Turismo player whose gaming skills won a series of Nissan competitions to become an actual professional race car driver. Based on a true story.",
//     "Language": "English",
//     "Country": "United States, Japan",
//     "Awards": "N/A",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BMGQ5MDBkM2MtZGUzMy00MTlkLTlkNzctNWU3OWIwZDJiMmNjXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
//     "Ratings": [],
//     "Metascore": "N/A",
//     "imdbRating": "N/A",
//     "imdbVotes": "N/A",
//     "imdbID": "tt4495098",
//     "Type": "movie",
//     "DVD": "N/A",
//     "BoxOffice": "N/A",
//     "Production": "N/A",
//     "Website": "N/A",
//     "Response": "True"
// }
const Card = ({ movie }) => {

    const [res, setRes] = useState([]);
    useEffect(() => {
        const fetching = async () => {
            const response = await fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB}&i=${movie.id.split('/')[2]}`);
            const datares = await response.json();
            setRes(datares);
            console.log("MOVIE FROM CARD: ", datares);
        }
        fetching();
        // eslint-disable-next-line
            console.log("MOVIE FROM DASH: ",movie);
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
            <span><span>Released On: </span>{res.Released}</span>
        </div>
    )
}

export default Card;
