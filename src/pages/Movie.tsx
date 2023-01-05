import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import {
    BsGraphUp,
    BsWallet2,
    BsHourglassSplit,
    BsFillFileEarmarkTextFill
} from "react-icons/bs"
import { MovieCard } from "../components/MovieCard/MovieCard"
import "./styles/Movie.ts"
import type { Movie } from "../components/MovieCard/MovieCard"
import { Container } from "./styles/Movie"

const api_key = import.meta.env.VITE_API_KEY
const movieURL = import.meta.env.VITE_API

export function Movie() {
    const { id } = useParams()
    const [movie, setMovie] = useState<Movie | null>(null)

    const getMovie = async (url: string) => {
        const res = await fetch(url)
        const data = await res.json()

        setMovie(data)
    }

    useEffect(() => {
        const movieUrl = `${movieURL}${id}?${api_key}`

        getMovie(movieUrl)
    }, [])

    const formatCurrency = (number: number) => {
        return number.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })
    }

    return (
        <Container>
            <div className="movie-page">
            {movie && (
                <>
                    <MovieCard movie={movie} showLink={false} />
                    <p className="tagline">{movie.tagline}</p>
                    <div className="info">
                        <h3>
                            <BsWallet2 /> Orçamento:
                        </h3>
                        <p>{formatCurrency(movie.budget)}</p>
                    </div>
                    <div className="info">
                        <h3>
                            <BsGraphUp /> Receita:
                        </h3>
                        <p>{formatCurrency(movie.revenue)}</p>
                    </div>
                    <div className="info">
                        <h3>
                            <BsHourglassSplit /> Duração:
                        </h3>
                        <p>{movie.runtime} minutos</p>
                    </div>
                    <div className="info description">
                        <h3>
                            <BsFillFileEarmarkTextFill /> Descrição:
                        </h3>
                        <p>{movie.overview}</p>
                    </div>
                </>
            )}
        </div>
    </Container>
    )
}