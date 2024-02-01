import React, { useEffect, useState } from "react"
import "./home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import MovieList from "../../components/movieList/movieList";

const Home = () => {

    const [popularMovies, setPopularMovies] = useState([])

    useEffect(() => {
        fetch("https://api.tvmaze.com/search/shows?q=all")
            .then(res => res.json())
            .then(data => setPopularMovies(data))
    }, [])




    return (
        <>
            <div className="poster">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        popularMovies?.map(movie => (

                            <Link style={{ textDecoration: "none", color: "white" }} to={`/movie/${movie?.show?.id}`} >
                                <div className="posterImage">
                                    <img src={`${movie?.show?.image?.original}`} />
                                </div>
                                <div className="posterImage__overlay">
                                    <div className="posterImage__title">{movie ? movie.show.name : ""}</div>
                                    <div className="posterImage__runtime">
                                        {movie ? movie.show.premiered : ""}
                                        <span className="posterImage__rating">
                                            {movie ? movie.show.rating.average : ""}
                                            <i className="fas fa-star" />{" "}
                                        </span>
                                    </div>
                                    <div className="posterImage__description" dangerouslySetInnerHTML={{ __html: movie?.show?.summary }}></div>
                                </div>
                            </Link>
                        ))
                    }
                </Carousel>
                <MovieList />
            </div >
        </>
    )
}

export default Home