import axios from "axios";
import { useEffect, useState } from "react";
const useFetch = (title) => {
    const [movies, setMovies ] = useState([]);
    const fetching = async (title) => {
        const options = {
            method: 'GET',
            url: title,
            params: {
                currentCountry: 'US',
                purchaseCountry: 'US',
                homeCountry: 'US'
            },
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_IMDB, 
                'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
            }
        };
    
        try {
            const response = await axios.request(options);
            // console.log(response.data);
            const ten  = response.data;
            setMovies(ten.splice(0,5));
        // omDB(movies);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetching(title);
    },[title]);
    return { movies };
}
export default useFetch;
