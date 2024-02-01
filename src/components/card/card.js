import React, { useEffect, useState } from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import "./card.css"
import { Link } from "react-router-dom"

const Cards = ({ movie }) => {

    console.log(movie);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, [])

    return <>
        {
            isLoading
                ?
                <div className="cards">
                    <SkeletonTheme color="#202020" highlightColor="#444">
                        <Skeleton height={300} duration={2} />
                    </SkeletonTheme>
                </div>
                :
                <Link to={`/movie/${movie?.show?.id}`} style={{ textDecoration: "none", color: "white" }}>
                    <div className="cards">
                        <img className="cards__img" src={movie?.show?.image?.original} />
                        <div className="cards__overlay">
                            <div className="card__title">{movie?.show?.name}</div>
                            <div className="card__runtime">
                                {movie?.show?.premiered}
                                <span className="card__rating">{movie?.show?.rating?.average}<i className="fas fa-star" /></span>
                            </div>
                            <div className="card__description" dangerouslySetInnerHTML={{ __html: movie?.show?.summary.slice(0, 118) + `...` }}></div>
                        </div>
                    </div>
                </Link>
        }
    </>
}

export default Cards