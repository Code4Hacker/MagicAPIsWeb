import React, { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
// const obj = {
//     "Title": "Fast X",
//     "Year": "2023",
//     "Rated": "PG-13",
//     "Released": "19 May 2023",
//     "Runtime": "141 min",
//     "Genre": "Action, Adventure, Crime",
//     "Director": "Louis Leterrier",
//     "Writer": "Dan Mazeau, Justin Lin, Gary Scott Thompson",
//     "Actors": "Vin Diesel, Jordana Brewster, Tyrese Gibson",
//     "Plot": "Dom Toretto and his family are targeted by the vengeful son of drug kingpin Hernan Reyes.",
//     "Language": "English",
//     "Country": "United States",
//     "Awards": "N/A",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BNzZmOTU1ZTEtYzVhNi00NzQxLWI5ZjAtNWNhNjEwY2E3YmZjXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
//     "Ratings": [],
//     "Metascore": "N/A",
//     "imdbRating": "N/A",
//     "imdbVotes": "N/A",
//     "imdbID": "tt5433140",
//     "Type": "movie",
//     "DVD": "N/A",
//     "BoxOffice": "N/A",
//     "Production": "N/A",
//     "Website": "N/A",
//     "Response": "True"
// }
const Movies = () => {
    const { id } = useParams();
    const [omdbDT, setOmdbDT] = useState();
    // eslint-disable-next-line
    const [quality, setQuality] = useState();
    const fetched = async (datares) => {

        const options = {
            method: 'GET',
            url: 'https://online-movie-database.p.rapidapi.com/title/get-videos',
            params: {
                tconst: 'tt0944947',
                limit: '25',
                region: 'US'
            },
            headers: {
                'X-RapidAPI-Key': 'fee9d2f76cmsha6654ed67aca14cp159bdbjsn23d750d5c041',
                'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        const fetching = async () => {
            const response = await fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB}&i=${id}`);
            const datares = await response.json();
            setOmdbDT(datares);
            fetched(datares);
        }
        fetching();
        // eslint-disable-next-line
    }, [])
    return (
        <div className="movies individual">
            <div className="banner_" style={{
                backgroundImage: "url(https://images.unsplash.com/photo-1574894078563-01e879b89809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80)"
            }}>

                <div className="shadower">
                    <div className="search">
                        <input type="text" name="" id="" placeholder='Search your Movie title ...' />
                        <button>search</button>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 mrg-100">
                        <h1 className='mrg-100 title'>
                            <span className="black">Movie</span>
                            <span className="white"> Details</span>
                        </h1>
                    </div>
                    <div className="col-xl-12">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="poster mrg-100">
                                    <img src={quality !== undefined ? quality.image.uri : "https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=740&t=st=1684945155~exp=1684945755~hmac=aaf36e517e2114c817afa6c0f46ed6a5ee7346c336922b372e9b2bbb3e9bc373"} alt="" />
                                </div>
                            </div>
                            <div className="col-md-7 mrg-neg-150 text_left">
                                <div className="col-xl-12">
                                    <h3>{omdbDT !== undefined ? omdbDT.Title : "No data found!"}</h3>
                                    <div className="description" style={{
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}>
                                        <h6><span>Genre: </span>{omdbDT !== undefined ? omdbDT.Genre : 'Nothing!'}</h6>
                                        <p>{omdbDT !== undefined ? omdbDT.Plot : 'Nothing!'}</p>
                                        <h6 className='lighte'><span>Writer: </span>{omdbDT !== undefined ? omdbDT.Writer : 'Nothing!'}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container center mrg-100">
                <div className="row">
                    <div className="col-xl-7">
                        <div className="boxed">
                            <div className="clipped">
                                <h3>{omdbDT !== undefined ? omdbDT.Title : ""}</h3>
                            </div>
                            <div className="descri">
                                <h4>Actors</h4>
                                <span>{omdbDT !== undefined ? omdbDT.Actors : ""}</span>
                                <div className="row">
                                    <div className="col-sm-4">RunTime: <span>{omdbDT !== undefined ? omdbDT.Runtime : ""}</span></div>
                                    <div className="col-sm-4">Country: <span>{omdbDT !== undefined ? omdbDT.Country : ""}</span></div>
                                    <div className="col-sm-4">Director: <span>{omdbDT !== undefined ? omdbDT.Director : ""}</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Movies;