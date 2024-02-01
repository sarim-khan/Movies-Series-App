import React, { useEffect, useState } from "react"
import "./movie.css"
import { useParams } from "react-router-dom"
import TicketBookingForm from "../../components/form/Form"

const Movie = () => {
    const [movie, setMovie] = useState()
    const { id } = useParams()

    const [showPopup, setShowPopup] = useState(false);
    const handlePopupClose = () => {
        setShowPopup(false);
    };

    console.log(movie?.show?.schedule?.time);

    useEffect(() => {
        getData()
        window.scrollTo(0, 0)
        /*eslint-disable */
    }, [])

    const getData = () => {
        fetch(`https://api.tvmaze.com/search/shows?q=all`)
            .then(res => res.json())
            .then(data => (
                (data.find(el => el.show.id === +id ? setMovie(el) : null))

            ))
    }

    return (
        <div className="movie">
            <div className="movie__intro">
                <img className="movie__backdrop" src={`${movie?.show?.image?.original}`} />
            </div>
            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img className="movie__poster" src={`${movie?.show?.image?.original}`} />
                    </div>
                </div>
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <div className="movie__name">{movie?.show?.name}</div>
                        <div className="movie__tagline">{movie?.show?.network?.name}</div>
                        <div className="movie__rating">
                            {movie?.show?.rating?.average || "Unrated"} <i class="fas fa-star" />
                        </div>
                        <div className="movie__runtime">Per Episode Runtime : {movie?.show?.runtime} min</div>
                        <div className="movie__releaseDate">{movie?.show?.premiered}</div>
                        <div className="movie__genres">
                            {
                                movie?.show?.genres
                                    ?
                                    movie.show.genres.map(genre => (
                                        <><span className="movie__genre" id={genre} key={genre}>{genre}</span></>
                                    ))
                                    :
                                    ""
                            }
                        </div>
                    </div>
                    <div className="movie__detailRightBottom">
                        <div className="synopsisText">Summary</div>
                        <div dangerouslySetInnerHTML={{ __html: movie?.show?.summary }}></div>
                    </div>

                </div>
            </div>
            <div className="movie__links">
                <div className="movie__heading">Useful Links</div>
                {
                    <a href={movie?.show?.officialSite} target="_blank" style={{ textDecoration: "none" }}><p><span className="movie__homeButton movie__Button">Official Site <i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }

                <button className="book-ticket-btn" onClick={() => setShowPopup(true)}>Book Ticket</button>
                {showPopup && (
                    <TicketBookingForm movieName={movie?.show?.name} movieDate={movie?.show?.premiered} movieTime={movie?.show?.schedule?.time} onClose={handlePopupClose} />
                )
                }
            </div>
        </div>
    )
}

export default Movie