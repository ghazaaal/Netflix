import React, {useEffect,useState} from 'react'
import axios from './axios';
import request from './request';
import  './banner.css';

function Banner() {
    const [movie, setMovie]=useState([]);
    useEffect(()=>{
        async function fetchData() {
            const reqq=await axios.get(request.fetchNetflixOriginals);
            setMovie(
                reqq.data.results[Math.floor(Math.random() * reqq.data.results.length-1)]
            );
            return reqq;


        }
        fetchData();

        },[]);
    console.log(movie);


    return(
        <header className="banner"
                style={{
                    backgroundSize: "cover",
                    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,

                    backgroundPosition: "center center",

                }}
        >
            <div className="banner__contents">
                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_name}

                </h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">
                    {movie?.overview}
                </h1>

            </div>
            <div className="banner--fadeBottom">

            </div>



        </header>

    )

}

export default Banner;