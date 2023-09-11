import React, { useEffect } from 'react';
import './style.css';
import Card from './Card';
import useFetch from '../../Hooks/useFetch';
import Populars from './Popular';
import Loader from '../../Loading/Loader';

const Movies = () => {
    const upcoming = useFetch('https://online-movie-database.p.rapidapi.com/title/get-coming-soon-movies');
    const popular = useFetch('https://online-movie-database.p.rapidapi.com/title/get-most-popular-movies');
    useEffect(() => {
    }, [])
    return (
        <div className="movies">
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
            <div className="container mrg-100">
                <div className="row">
                    <div className="col-xl-12 mrg-100">
                        <h1 className='mrg-100 title'>
                            <span className="black">Popular</span>
                            <span className="white"> Movies</span>
                        </h1>
                    </div>
                </div>
            </div>
            <div className="container mrg-100">
                
            <video src="https://imdb-video.media-imdb.com/vi1015463705/1434659454657-dx9ykf-1606954080073.mp4?Expires=1685094545&Signature=NLFE9C4mjcur3mSEzGaE9P4FSUoE3QyY8FEFGNj1KQvCnt4rftjcsK8CKtwxpomUt5Uqc2wAynK7e8PMtEYFPIHapkCvL1sSz8W4uq~BNUvfeNF5RL5BUDozG0sbCrULUERh5RXMEOAEh6cah3ej-ryACcVArgvfFScjCC8XvUV6CwD~heXvPoTxtXEdXQo03dXgSZPw6SFY~JK~QQT8omKoJt8JVBk1sdqammZmp9iSoxb~E88clUzXFdXaI7x84kqq7I9c67izS4D63qhmwxZvy8bgvmHrklNKswNvcD~q8yP1gHDuclBauqF~Yq27LPZX1fRNk7zxceZU7qTNQg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA" controls></video>
                <div className="row mrg-100">
                    {
                        popular.movies !== undefined && popular.movies?.length > 0 ? popular.movies.map((movie, i) => <Populars movie={movie} key={i} />) : <Loader/>
                    }
                </div>
            </div>
            <div className="container mrg-100">
                <div className="row">
                    <div className="col-xl-12 mrg-100">
                        <h1 className='mrg-100 title'>
                            <span className="black">UpComing</span>
                            <span className="white"> Movies</span>
                        </h1>
                    </div>
                </div>
            </div>
            <div className="container mrg-100">
                <div className="row mrg-100">
                    {
                        upcoming.movies !== undefined && upcoming.movies?.length > 0 ? upcoming.movies.map((movie, i) => <Card movie={movie} key={i} />) : <Loader/>
                    }
                </div>
            </div>
        </div>
    )
}

export default Movies;